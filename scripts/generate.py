#!/usr/bin/env python3
"""Generate TypeScript types + *Service wrappers from a WSO OpenAPI 2.0 contract.

Usage:
  python3 scripts/generate.py --spec path/to/openapi.yaml
  python3 scripts/generate.py --tag openapi-v2026.10.25
  python3 scripts/generate.py --latest   # newest openapi-v* GitHub release

Emits:
  src/generated/types.ts
  src/generated/services/*.ts
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import urllib.error
import urllib.request
from collections import defaultdict
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:
    print("error: PyYAML required (pip install pyyaml)", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
OUT_TYPES = ROOT / "src" / "generated" / "types.ts"
OUT_SERVICES = ROOT / "src" / "generated" / "services"
REPO = "WilliamsStudentsOnline/wso-go"
ASSET = "openapi.yaml"

# OpenAPI tag → TypeScript service class / file stem
TAG_TO_SERVICE: dict[str, tuple[str, str]] = {
    "autocomplete": ("AutocompleteService", "autocomplete"),
    "books": ("BooktrakService", "booktrak"),
    "booktrak": ("BooktrakService", "booktrak"),
    "booktrak-admin": ("BooktrakService", "booktrak"),
    "bulletins": ("BulletinService", "bulletin"),
    "chat": ("ChatService", "chat"),
    "course-scheduler": ("CourseSchedulerService", "coursescheduler"),
    "dormtrak": ("DormtrakService", "dormtrak"),
    "ephcatch": ("EphcatchService", "ephcatch"),
    "ephmatch": ("EphmatchService", "ephmatch"),
    "factrak": ("FactrakService", "factrak"),
    "factrak-admin": ("FactrakService", "factrak"),
    "goodrich": ("GoodrichService", "goodrich"),
    "health": ("MiscService", "misc"),
    "words": ("MiscService", "misc"),
    "notification": ("NotificationService", "notification"),
    "onboarding": ("UserService", "user"),
    "users": ("UserService", "user"),
}

# Hand-written (Token unwrap, scopes) — do not generate
SKIP_TAGS = {"auth", "auth-2.0"}

HTTP_METHODS = {"get", "post", "put", "patch", "delete", "head", "options"}


def def_to_ts_name(ref_or_name: str) -> str:
    """auth.AuthResponse → AuthAuthResponse (swagger-codegen style)."""
    name = ref_or_name.split("/")[-1]
    parts = name.split(".")
    return "".join(p[:1].upper() + p[1:] for p in parts if p)


def schema_to_ts(schema: Any | None, defs: dict) -> str:
    if not schema:
        return "any"
    if "$ref" in schema:
        return def_to_ts_name(schema["$ref"])
    t = schema.get("type")
    if t == "array":
        return f"Array<{schema_to_ts(schema.get('items'), defs)}>"
    if t == "integer" or t == "number":
        return "number"
    if t == "boolean":
        return "boolean"
    if t == "string":
        return "string"
    if t == "object" or "properties" in schema:
        # inline object — rare; fall back
        return "Record<string, any>"
    if t == "file":
        return "Blob | File | string"
    return "any"


def prop_optional(schema: dict, name: str) -> bool:
    required = schema.get("required") or []
    return name not in required


def emit_types(definitions: dict[str, Any]) -> str:
    lines = [
        "/* eslint-disable */",
        "/**",
        " * Generated from WSO OpenAPI — do not edit.",
        " * Re-run: yarn generate",
        " */",
        "",
    ]
    for name in sorted(definitions.keys()):
        schema = definitions[name]
        ts_name = def_to_ts_name(name)
        lines.append(f"export interface {ts_name} {{")
        props = schema.get("properties") or {}
        if not props:
            lines.append("  [key: string]: any;")
        else:
            for pname, pschema in props.items():
                opt = "?" if prop_optional(schema, pname) else ""
                lines.append(f"  {pname}{opt}: {schema_to_ts(pschema, definitions)};")
        lines.append("}")
        lines.append("")
    # Compat aliases for names React / old client already use
    lines.extend(
        [
            "/** @deprecated alias for CourseschedulerCourseSelectionsString */",
            "export type ModelsCourseSelectionString = CourseschedulerCourseSelectionsString;",
            "",
            "/** Hand-shaped body used by older clients; OpenAPI body is a bare string */",
            "export interface CourseSelectionSetRequest {",
            "  courses?: string;",
            "}",
            "",
        ]
    )
    return "\n".join(lines)


def resolve_service(tags: list[str], path: str) -> tuple[str, str] | None:
    # Path overrides when swagger tags don't match the existing client layout
    if path.startswith("/ephmatch/"):
        return TAG_TO_SERVICE["ephmatch"]
    for tag in tags:
        if tag in SKIP_TAGS:
            return None
        if tag in TAG_TO_SERVICE:
            return TAG_TO_SERVICE[tag]
    if "admin" in tags:
        if path.startswith("/booktrak"):
            return TAG_TO_SERVICE["booktrak"]
        if path.startswith("/factrak"):
            return TAG_TO_SERVICE["factrak"]
    return None


def path_ts_expr(path: str, path_params: list[str]) -> str:
    """'/users/{userID}' + ['userID'] → `/api/v2/users/${userID}`"""
    out = path
    for p in path_params:
        out = out.replace("{" + p + "}", "${" + p + "}")
    if path_params:
        return f"`/api/v2{out}`"
    return f"`/api/v2{path}`"


def ts_path_param_type(name: str, p: dict) -> str:
    if name in ("userID", "unixID") and p.get("type") == "integer":
        return "number | 'me'"
    return schema_to_ts({"type": p.get("type", "string"), "items": p.get("items")}, {})


def collect_ops(spec: dict) -> dict[str, list[dict]]:
    """file_stem → list of operation dicts for codegen."""
    by_file: dict[str, list[dict]] = defaultdict(list)
    seen: set[tuple[str, str]] = set()  # (file, operationId)

    for path, methods in (spec.get("paths") or {}).items():
        if not isinstance(methods, dict):
            continue
        for method, op in methods.items():
            if method not in HTTP_METHODS or not isinstance(op, dict):
                continue
            tags = op.get("tags") or []
            resolved = resolve_service(tags, path)
            if not resolved:
                continue
            class_name, file_stem = resolved
            op_id = op.get("operationId") or f"{method}_{path}"
            key = (file_stem, op_id)
            if key in seen:
                continue
            seen.add(key)
            by_file[file_stem].append(
                {
                    "class_name": class_name,
                    "operation_id": op_id,
                    "method": method,
                    "path": path,
                    "op": op,
                }
            )
    return by_file


def emit_method(item: dict, definitions: dict) -> tuple[str, set[str]]:
    op = item["op"]
    op_id = item["operation_id"]
    method = item["method"]
    path = item["path"]
    params = op.get("parameters") or []
    imports: set[str] = set()

    path_params = [p for p in params if p.get("in") == "path"]
    query_params = [p for p in params if p.get("in") == "query"]
    body_params = [p for p in params if p.get("in") == "body"]
    form_params = [p for p in params if p.get("in") == "formData"]

    args: list[str] = []
    for p in path_params:
        args.append(f"{p['name']}: {ts_path_param_type(p['name'], p)}")

    if query_params:
        fields = []
        for p in query_params:
            if p.get("type") == "array":
                inner = schema_to_ts(p.get("items"), definitions)
                t = f"Array<{inner}>"
                if re.match(r"^[A-Z]", inner):
                    imports.add(inner)
            elif "$ref" in (p.get("schema") or {}):
                t = def_to_ts_name(p["schema"]["$ref"])
                imports.add(t)
            else:
                t = schema_to_ts({"type": p.get("type"), "items": p.get("items")}, definitions)
            opt = "" if p.get("required") else "?"
            fields.append(f"    {p['name']}{opt}: {t};")
        args.append("params?: {\n" + "\n".join(fields) + "\n  }")

    body_expr = None
    headers_extra = None
    if form_params:
        file_args = []
        for p in form_params:
            t = "Blob | File | string" if p.get("type") == "file" else schema_to_ts(p, definitions)
            req = "" if p.get("required") else "?"
            file_args.append(f"{p['name']}{req}: {t}")
        args.extend(file_args)
    elif body_params:
        bp = body_params[0]
        schema = bp.get("schema") or {}
        t = schema_to_ts(schema, definitions)
        m = re.match(r"Array<(\w+)>", t)
        if m:
            imports.add(m.group(1))
        elif re.match(r"^[A-Z]", t):
            imports.add(t)
        name = bp.get("name") or "body"
        if name in ("params", "data"):
            name = "body"
        args.append(f"{name}: {t}")
        body_expr = name

    # response type
    resp_schema = None
    for code in ("200", "201", "204"):
        r = (op.get("responses") or {}).get(code)
        if r and "schema" in r:
            resp_schema = r["schema"]
            break
    resp_ts = schema_to_ts(resp_schema, definitions) if resp_schema else "any"
    m = re.match(r"Array<(\w+)>", resp_ts)
    if m:
        imports.add(m.group(1))
    elif resp_ts not in ("any", "string", "number", "boolean", "void") and re.match(
        r"^[A-Z]", resp_ts
    ):
        imports.add(resp_ts)

    no_auth = not op.get("security")
    path_expr = path_ts_expr(path, [p["name"] for p in path_params])

    lines = []
    sig_args = ", ".join(args)
    lines.append(f"  async {op_id}({sig_args}): Promise<APIResponse<{resp_ts}>> {{")

    if form_params:
        lines.append("    const formData = new FormData();")
        for p in form_params:
            n = p["name"]
            if p.get("required"):
                lines.append(f"    formData.append('{n}', {n} as any);")
            else:
                lines.append(f"    if ({n} !== undefined) formData.append('{n}', {n} as any);")
        body_expr = "formData"
        headers_extra = "'Content-Type': 'multipart/form-data'"

    req_parts = []
    if body_expr:
        req_parts.append(f"data: {body_expr}")
    if query_params:
        req_parts.append("params: params")
    if headers_extra:
        req_parts.append(f"headers: {{ {headers_extra} }}")
    if no_auth:
        req_parts.append("noAuth: true")

    if req_parts:
        lines.append(
            f"    return this.api.request('{method}', {path_expr}, {{\n      "
            + ",\n      ".join(req_parts)
            + ",\n    });"
        )
    else:
        lines.append(f"    return this.api.request('{method}', {path_expr});")
    lines.append("  }")
    lines.append("")
    return "\n".join(lines), imports


def emit_service(file_stem: str, items: list[dict], definitions: dict) -> str:
    class_name = items[0]["class_name"]
    all_imports: set[str] = set()
    methods: list[str] = []
    for item in sorted(items, key=lambda x: x["operation_id"]):
        body, imports = emit_method(item, definitions)
        methods.append(body)
        all_imports |= imports

    # filter unknown imports (builtins)
    known = {def_to_ts_name(k) for k in definitions}
    known |= {"ModelsCourseSelectionString", "CourseSelectionSetRequest"}
    type_imports = sorted(i for i in all_imports if i in known)

    lines = [
        "/* eslint-disable */",
        "/** Generated from WSO OpenAPI — do not edit. */",
        "import { API, APIResponse } from '../../api';",
    ]
    if type_imports:
        lines.append(
            "import {\n  "
            + ",\n  ".join(type_imports)
            + ",\n} from '../types';"
        )
    lines.append("")
    lines.append(f"export class {class_name} {{")
    lines.append("  protected api: API;")
    lines.append("")
    lines.append("  constructor(api: API) {")
    lines.append("    this.api = api;")
    lines.append("  }")
    lines.append("")
    lines.extend(methods)
    lines.append("}")
    lines.append("")
    return "\n".join(lines)


def download_tag(tag: str) -> str:
    url = f"https://github.com/{REPO}/releases/download/{tag}/{ASSET}"
    print(f"==> fetching {url}")
    try:
        with urllib.request.urlopen(url) as resp:
            return resp.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        # fallback: raw docs at tag
        raw = f"https://raw.githubusercontent.com/{REPO}/{tag}/docs/swagger.yaml"
        print(f"==> release asset missing ({e.code}); trying {raw}")
        with urllib.request.urlopen(raw) as resp:
            return resp.read().decode("utf-8")


def latest_openapi_tag() -> str:
    api = f"https://api.github.com/repos/{REPO}/releases?per_page=30"
    req = urllib.request.Request(api, headers={"Accept": "application/vnd.github+json"})
    with urllib.request.urlopen(req) as resp:
        releases = json.loads(resp.read().decode())
    for rel in releases:
        tag = rel.get("tag_name") or ""
        if tag.startswith("openapi-v"):
            return tag
    raise SystemExit("error: no openapi-v* GitHub release found")


def load_spec(args: argparse.Namespace) -> dict:
    if args.spec:
        text = Path(args.spec).read_text()
    elif args.tag:
        text = download_tag(args.tag)
    elif args.latest:
        text = download_tag(latest_openapi_tag())
    else:
        raise SystemExit("provide --spec, --tag, or --latest")
    return yaml.safe_load(text)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    src = parser.add_mutually_exclusive_group(required=True)
    src.add_argument("--spec", help="Local openapi.yaml / swagger.yaml path")
    src.add_argument("--tag", help="wso-go openapi-v* release tag")
    src.add_argument("--latest", action="store_true", help="Newest openapi-v* release")
    args = parser.parse_args()

    spec = load_spec(args)
    if str(spec.get("swagger", "")).startswith("2") is False and not spec.get("openapi"):
        print("warning: unexpected spec format", file=sys.stderr)

    definitions = spec.get("definitions") or spec.get("components", {}).get("schemas") or {}
    OUT_TYPES.parent.mkdir(parents=True, exist_ok=True)
    OUT_SERVICES.mkdir(parents=True, exist_ok=True)

    # clear old generated services
    for old in OUT_SERVICES.glob("*.ts"):
        old.unlink()

    OUT_TYPES.write_text(emit_types(definitions))
    print(f"==> wrote {OUT_TYPES.relative_to(ROOT)}")

    by_file = collect_ops(spec)
    for file_stem, items in sorted(by_file.items()):
        path = OUT_SERVICES / f"{file_stem}.ts"
        path.write_text(emit_service(file_stem, items, definitions))
        print(f"==> wrote {path.relative_to(ROOT)} ({len(items)} methods)")

    meta = ROOT / "src" / "generated" / "OPENAPI_SOURCE.txt"
    if args.spec:
        meta.write_text(f"spec: {args.spec}\n")
    elif args.tag:
        meta.write_text(f"tag: {args.tag}\n")
    else:
        meta.write_text(f"tag: {latest_openapi_tag()} (via --latest)\n")
    print(f"==> wrote {meta.relative_to(ROOT)}")
    print("==> done")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

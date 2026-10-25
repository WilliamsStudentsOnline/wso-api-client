# WSO API Client

TypeScript client for the WSO API. Distributed via **git tags** (not npm).

Types and most `*Service` methods are **generated** from the public `wso-go` OpenAPI contract (`openapi-v*` GitHub Release assets). Auth/transport (`api.ts`, `auth.ts`, `services/auth.ts`) and the thin `WSO` facade stay hand-written.

## Install (consumers)

Pin a git tag (example):

```json
"wso-api-client": "git+https://github.com/WilliamsStudentsOnline/wso-api-client.git#v2026.10.25"
```

Or in Yarn/npm:

```bash
yarn add wso-api-client@git+https://github.com/WilliamsStudentsOnline/wso-api-client.git#v2026.10.25
```

## Regenerate from an OpenAPI contract

Requires Python 3 + PyYAML (`pip install pyyaml`).

```bash
# from a local swagger file (e.g. sibling wso-go checkout)
yarn generate -- --spec ../wso-go/docs/swagger.yaml

# from a published wso-go contract tag
yarn generate -- --tag openapi-v2026.10.25

# newest openapi-v* release on wso-go
yarn generate:latest
```

Then `yarn build` (emits `lib/`).

## Publish a client version

After codegen looks good:

```bash
git tag v2026.10.25
git push origin v2026.10.25
```

Consumers bump their git pin to that tag. No npm publish.

## Layout

| Path | Role |
| --- | --- |
| `scripts/generate.py` | OpenAPI → `src/generated/` |
| `src/generated/` | Types + service methods (`API.request` → `APIResponse<T>`) |
| `src/services/*.ts` | Thin re-exports / small hand extensions (photos, enums) |
| `src/api.ts`, `src/auth.ts`, `src/services/auth.ts`, `src/wso.ts` | Hand-written |

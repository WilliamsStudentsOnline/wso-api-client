# WSO API Client

TypeScript client for the WSO API. Ship via **git tags** (not npm).

Most `*Service` methods and types are generated from `wso-go` `openapi-v*` release assets. Hand-written: `api.ts`, `auth.ts`, `services/auth.ts`, `wso.ts`, plus small compat wrappers under `src/services/`.

## Install

```json
"wso-api-client": "git+https://github.com/WilliamsStudentsOnline/wso-api-client.git#v2026.10.25"
```

## Codegen

Uses Node only (no Python). Fetches `openapi.json` from the GitHub Release.

```bash
yarn codegen                 # interactive (default = latest openapi-v*)
yarn codegen --tag 2026.10.25
yarn codegen --tag 2026-10-25-2   # same-day suffix → openapi-v2026.10.25-2
yarn codegen --latest
```

Then `yarn build`.

## CI

`.github/workflows/codegen.yml` — `workflow_dispatch` / `repository_dispatch` regenerates and opens/updates PR branch `codegen/openapi`.

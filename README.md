# WSO API Client

TypeScript client for the WSO API, shipped via git tags.

Most `*Service` methods and types are generated from `wso-go` `openapi-v*` release assets. For compatibility reasons, we maintain handwritten `api.ts`, `auth.ts`, `services/auth.ts`, `wso.ts`, and small wrappers under `src/services/`.

To update the API client:

```bash
# interactive
yarn codegen
# manual
yarn codegen --tag yyyy.mm.dd
yarn codegen --tag yyyy.mm.dd-n # if multiple publishes in the same day
yarn codegen --latest
```

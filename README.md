# WSO API Client

TypeScript client for the WSO API, shipped via git tags.

Most `*Service` methods and types are generated from `wso-go` `openapi-v*` release assets. For compatibility reasons, we maintain handwritten `api.ts`, `auth.ts`, `services/auth.ts`, `wso.ts`, and small wrappers under `src/services/`.

## Regenerate from OpenAPI

```bash
# interactive
yarn codegen
# manual
yarn codegen --tag yyyy.mm.dd
yarn codegen --tag yyyy.mm.dd-n # if multiple publishes in the same day
yarn codegen --latest
```

## Publish a consumer pin

On a clean local `master` that matches `origin/master` (after merging a codegen PR):

```bash
make publish
```

Tags `vYYYY.MM.DD` (or `vYYYY.MM.DD-N` if that day already has a tag) and pushes it. CI creates a GitHub Release. Consumers then run `yarn codegen --tag vYYYY.MM.DD` in wso-react.

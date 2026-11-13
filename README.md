# WSO API Client

TypeScript client for the WSO API, shipped via git tags.

Most `*Service` methods and types are generated from `wso-go` `openapi-v*` release assets. For compatibility reasons, we maintain handwritten `api.ts`, `auth.ts`, `services/auth.ts`, `wso.ts`, and small wrappers under `src/services/`.

## Codegen

To regenerate from a published OpenAPI contract:

```bash
# interactive
yarn codegen
# manual
yarn codegen --tag yyyy.mm.dd
yarn codegen --tag yyyy.mm.dd-n # if multiple publishes in the same day
yarn codegen --latest
```

## Publish

After merging a codegen change to `master`, on a clean local up-to-date `master` run:

```bash
yarn publish-api
```

This creates and pushes a tagged release `vYYYY.MM.DD` (suffixed for multiple changes in the same day). This step is only needed when you wish to update the client for downstream consumers (e.g. wso-react).

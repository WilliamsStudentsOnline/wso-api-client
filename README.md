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

### Local / unreleased API (no publish-api)

Point codegen at a local `swagger.json` from a `wso-go` checkout (JSON only):

```bash
yarn codegen --spec /path/to/wso-go/docs/swagger.json
yarn build
```

Unknown OpenAPI tags get a generated `*Service` file automatically. The handwritten
`src/wso.ts` facade still needs a one-line import + getter for brand-new services
(same pattern as `bulletinService`). New `wso-go` endpoints need an `@ID` (and usually
`@Security Bearer`) so method names stay valid TypeScript identifiers.

Wire a local client into `wso-react` without publishing a git tag:

```bash
# in wso-react/package.json
"wso-api-client": "file:../worktrees/wso-api-client-board"
# or file:../wso-api-client
yarn install
```

## Publish

After merging a codegen change to `master`, on a clean local up-to-date `master` run:

```bash
yarn publish-api
```

This creates and pushes a tagged release `vYYYY.MM.DD` (suffixed for multiple changes in the same day). This step is only needed when you wish to update the client for downstream consumers (e.g. wso-react).

#!/usr/bin/env node
// Generate src/generated from wso-go OpenAPI release assets. See README.

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_TYPES = path.join(ROOT, 'src/generated/types.ts');
const OUT_SERVICES = path.join(ROOT, 'src/generated/services');
const REPO = 'WilliamsStudentsOnline/wso-go';

const TAG_TO_SERVICE = {
  autocomplete: ['AutocompleteService', 'autocomplete'],
  books: ['BooktrakService', 'booktrak'],
  booktrak: ['BooktrakService', 'booktrak'],
  'booktrak-admin': ['BooktrakService', 'booktrak'],
  bulletins: ['BulletinService', 'bulletin'],
  banner: ['BannerService', 'banner'],
  chat: ['ChatService', 'chat'],
  'course-scheduler': ['CourseSchedulerService', 'coursescheduler'],
  dormtrak: ['DormtrakService', 'dormtrak'],
  ephcatch: ['EphcatchService', 'ephcatch'],
  ephmatch: ['EphmatchService', 'ephmatch'],
  factrak: ['FactrakService', 'factrak'],
  'factrak-admin': ['FactrakService', 'factrak'],
  goodrich: ['GoodrichService', 'goodrich'],
  health: ['MiscService', 'misc'],
  words: ['MiscService', 'misc'],
  notification: ['NotificationService', 'notification'],
  onboarding: ['UserService', 'user'],
  users: ['UserService', 'user'],
};

const SKIP_TAGS = new Set(['auth', 'auth-2.0']);
const HTTP_METHODS = new Set(['get', 'post', 'put', 'patch', 'delete', 'head', 'options']);

// Correct swagger mistakes / prefer real router paths
const PATH_OVERRIDES = {
  getBook: '/booktrak/books/{bookID}',
  getBookListing: '/booktrak/listings/{bookListingID}',
  deleteDiscussion: '/bulletin/discussions/{discussionID}',
};
const METHOD_OVERRIDES = {
  createBook: 'post',
};

function defToTsName(refOrName) {
  const name = refOrName.split('/').pop();
  return name
    .split('.')
    .filter(Boolean)
    .map((p) => p[0].toUpperCase() + p.slice(1))
    .join('');
}

function schemaToTs(schema) {
  if (!schema) return 'any';
  if (schema.$ref) return defToTsName(schema.$ref);
  const t = schema.type;
  if (t === 'array') return `Array<${schemaToTs(schema.items)}>`;
  if (t === 'integer' || t === 'number') return 'number';
  if (t === 'boolean') return 'boolean';
  if (t === 'string') return 'string';
  if (t === 'object' || schema.properties) return 'Record<string, any>';
  if (t === 'file') return 'Blob | File | string';
  return 'any';
}

function collectTypeImports(tsType, into) {
  const m = /^Array<(\w+)>$/.exec(tsType);
  if (m) into.add(m[1]);
  else if (/^[A-Z]/.test(tsType)) into.add(tsType);
}

function emitTypes(definitions) {
  const lines = [
    '/* eslint-disable */',
    '/** Generated from WSO OpenAPI — do not edit. yarn codegen */',
    '',
  ];
  for (const name of Object.keys(definitions).sort()) {
    const schema = definitions[name];
    const tsName = defToTsName(name);
    lines.push(`export interface ${tsName} {`);
    const props = schema.properties || {};
    const required = new Set(schema.required || []);
    if (!Object.keys(props).length) {
      lines.push('  [key: string]: any;');
    } else {
      for (const [pname, pschema] of Object.entries(props)) {
        const opt = required.has(pname) ? '' : '?';
        lines.push(`  ${pname}${opt}: ${schemaToTs(pschema)};`);
      }
    }
    lines.push('}', '');
  }
  lines.push(
    '/** @deprecated alias for CourseschedulerCourseSelectionsString */',
    'export type ModelsCourseSelectionString = CourseschedulerCourseSelectionsString;',
    '',
    'export interface CourseSelectionSetRequest {',
    '  courses?: string;',
    '}',
    '',
    // Same-file namespace merge so ModelsBookListing works as both type and enum holder
    'export namespace BooktrakCreateBookListingParams {',
    '  export enum ConditionEnum {',
    "    Empty = '',",
    "    POOR = 'POOR',",
    "    FAIR = 'FAIR',",
    "    GOOD = 'GOOD',",
    "    VERYGOOD = 'VERY_GOOD',",
    "    LIKENEW = 'LIKE_NEW',",
    "    NEW = 'NEW',",
    '  }',
    '  export enum ListingTypeEnum {',
    "    Empty = '',",
    "    BUY = 'BUY',",
    "    SELL = 'SELL',",
    '  }',
    '}',
    '',
    'export namespace ModelsBookListing {',
    '  export enum ConditionEnum {',
    "    Empty = '',",
    "    POOR = 'POOR',",
    "    FAIR = 'FAIR',",
    "    GOOD = 'GOOD',",
    "    VERYGOOD = 'VERY_GOOD',",
    "    LIKENEW = 'LIKE_NEW',",
    "    NEW = 'NEW',",
    '  }',
    '  export enum ListingTypeEnum {',
    "    Empty = '',",
    "    BUY = 'BUY',",
    "    SELL = 'SELL',",
    '  }',
    '}',
    ''
  );
  return lines.join('\n');
}

function resolveService(tags, apiPath) {
  if (apiPath.startsWith('/ephmatch/')) return TAG_TO_SERVICE.ephmatch;
  for (const tag of tags || []) {
    if (SKIP_TAGS.has(tag)) return null;
    if (TAG_TO_SERVICE[tag]) return TAG_TO_SERVICE[tag];
  }
  if ((tags || []).includes('admin')) {
    if (apiPath.startsWith('/booktrak')) return TAG_TO_SERVICE.booktrak;
    if (apiPath.startsWith('/factrak')) return TAG_TO_SERVICE.factrak;
  }
  return null;
}

function pathTsExpr(apiPath, pathParams) {
  let out = apiPath;
  for (const p of pathParams) out = out.replace(`{${p}}`, `\${${p}}`);
  return pathParams.length ? `\`/api/v2${out}\`` : `\`/api/v2${apiPath}\``;
}

function tsPathParamType(name, p) {
  if ((name === 'userID' || name === 'unixID') && p.type === 'integer') return "number | 'me'";
  return schemaToTs({ type: p.type || 'string', items: p.items });
}

function collectOps(spec) {
  const byFile = new Map();
  const seen = new Set();

  for (const [apiPath, methods] of Object.entries(spec.paths || {})) {
    if (!methods || typeof methods !== 'object') continue;
    for (const [method, op] of Object.entries(methods)) {
      if (!HTTP_METHODS.has(method) || !op || typeof op !== 'object') continue;
      const resolved = resolveService(op.tags, apiPath);
      if (!resolved) continue;
      const [className, fileStem] = resolved;
      const opId = op.operationId || `${method}_${apiPath}`;
      const key = `${fileStem}:${opId}`;
      if (seen.has(key)) continue;
      seen.add(key);

      let usePath = PATH_OVERRIDES[opId] || apiPath;
      let useMethod = METHOD_OVERRIDES[opId] || method;

      if (!byFile.has(fileStem)) byFile.set(fileStem, []);
      byFile.get(fileStem).push({
        className,
        operationId: opId,
        method: useMethod,
        path: usePath,
        op,
      });
    }
  }
  return byFile;
}

function emitMethod(item) {
  const { op, operationId: opId, method, path: apiPath } = item;
  const params = op.parameters || [];
  const imports = new Set();

  const pathParams = params.filter((p) => p.in === 'path');
  const queryParams = params.filter((p) => p.in === 'query');
  const bodyParams = params.filter((p) => p.in === 'body');
  const formParams = params.filter((p) => p.in === 'formData');

  const args = [];
  for (const p of pathParams) {
    args.push(`${p.name}: ${tsPathParamType(p.name, p)}`);
  }

  if (queryParams.length) {
    const fields = [];
    for (const p of queryParams) {
      let t;
      if (p.type === 'array') {
        const inner = schemaToTs(p.items);
        t = `Array<${inner}>`;
        collectTypeImports(inner, imports);
      } else if (p.schema && p.schema.$ref) {
        t = defToTsName(p.schema.$ref);
        imports.add(t);
      } else {
        t = schemaToTs({ type: p.type, items: p.items });
      }
      fields.push(`    ${p.name}${p.required ? '' : '?'}: ${t};`);
    }
    args.push(`params?: {\n${fields.join('\n')}\n  }`);
  }

  let bodyExpr = null;
  let headersExtra = null;
  if (formParams.length) {
    for (const p of formParams) {
      const t = p.type === 'file' ? 'Blob | File | string' : schemaToTs(p);
      args.push(`${p.name}${p.required ? '' : '?'}: ${t}`);
    }
  } else if (bodyParams.length) {
    const bp = bodyParams[0];
    const t = schemaToTs(bp.schema || {});
    collectTypeImports(t, imports);
    let name = bp.name || 'body';
    if (name === 'params' || name === 'data') name = 'body';
    args.push(`${name}: ${t}`);
    bodyExpr = name;
  }

  let respTs = 'any';
  for (const code of ['200', '201', '204']) {
    const r = (op.responses || {})[code];
    if (r && r.schema) {
      respTs = schemaToTs(r.schema);
      break;
    }
  }
  collectTypeImports(respTs, imports);

  const noAuth = !op.security;
  const pathExpr = pathTsExpr(
    apiPath,
    pathParams.map((p) => p.name)
  );

  const lines = [];
  lines.push(`  async ${opId}(${args.join(', ')}): Promise<APIResponse<${respTs}>> {`);
  if (formParams.length) {
    lines.push('    const formData = new FormData();');
    for (const p of formParams) {
      if (p.required) lines.push(`    formData.append('${p.name}', ${p.name} as any);`);
      else
        lines.push(
          `    if (${p.name} !== undefined) formData.append('${p.name}', ${p.name} as any);`
        );
    }
    bodyExpr = 'formData';
    headersExtra = "'Content-Type': 'multipart/form-data'";
  }

  const reqParts = [];
  if (bodyExpr) reqParts.push(`data: ${bodyExpr}`);
  if (queryParams.length) reqParts.push('params: params');
  if (headersExtra) reqParts.push(`headers: { ${headersExtra} }`);
  if (noAuth) reqParts.push('noAuth: true');

  if (reqParts.length) {
    lines.push(
      `    return this.api.request('${method}', ${pathExpr}, {\n      ${reqParts.join(
        ',\n      '
      )},\n    });`
    );
  } else {
    lines.push(`    return this.api.request('${method}', ${pathExpr});`);
  }
  lines.push('  }', '');
  return { body: lines.join('\n'), imports };
}

function emitService(fileStem, items, definitions) {
  const className = items[0].className;
  const allImports = new Set();
  const methods = [];
  for (const item of items.sort((a, b) => a.operationId.localeCompare(b.operationId))) {
    const { body, imports } = emitMethod(item);
    methods.push(body);
    for (const i of imports) allImports.add(i);
  }

  const known = new Set(Object.keys(definitions).map(defToTsName));
  known.add('ModelsCourseSelectionString');
  known.add('CourseSelectionSetRequest');
  const typeImports = [...allImports].filter((i) => known.has(i)).sort();

  const lines = [
    '/* eslint-disable */',
    '/** Generated from WSO OpenAPI — do not edit. */',
    "import { API, APIResponse } from '../../api';",
  ];
  if (typeImports.length) {
    lines.push(`import {\n  ${typeImports.join(',\n  ')},\n} from '../types';`);
  }
  lines.push(
    '',
    `export class ${className} {`,
    '  protected api: API;',
    '',
    '  constructor(api: API) {',
    '    this.api = api;',
    '  }',
    '',
    ...methods,
    '}',
    ''
  );
  return lines.join('\n');
}

function normalizeTag(input) {
  let t = String(input).trim();
  if (!t) return null;
  if (t.startsWith('openapi-v')) return t;
  t = t.replace(/-/g, '.');
  if (!t.startsWith('openapi-v')) t = `openapi-v${t}`;
  return t;
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

async function latestOpenapiTag() {
  const releases = await fetchJson(
    `https://api.github.com/repos/${REPO}/releases?per_page=30`
  );
  for (const rel of releases) {
    const tag = rel.tag_name || '';
    if (tag.startsWith('openapi-v')) return tag;
  }
  throw new Error('no openapi-v* GitHub release found');
}

async function loadSpec(args) {
  if (args.spec) {
    const text = fs.readFileSync(args.spec, 'utf8');
    if (args.spec.endsWith('.json')) return JSON.parse(text);
    throw new Error('use --spec path/to/openapi.json or --tag');
  }
  const tag = args.tag || (await latestOpenapiTag());
  console.log(`==> fetching contract ${tag}`);
  try {
    return await fetchJson(
      `https://github.com/${REPO}/releases/download/${tag}/openapi.json`
    );
  } catch (e) {
    console.log(`==> json asset failed (${e.message}); trying swagger.json at tag`);
    const text = await fetchText(
      `https://raw.githubusercontent.com/${REPO}/${tag}/docs/swagger.json`
    );
    return JSON.parse(text);
  }
}

function parseArgs(argv) {
  const args = { tag: null, latest: false, spec: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--latest') args.latest = true;
    else if (a === '--tag') args.tag = normalizeTag(argv[++i]);
    else if (a.startsWith('--tag=')) args.tag = normalizeTag(a.slice(6));
    else if (a === '--spec') args.spec = argv[++i];
    else if (a.startsWith('--spec=')) args.spec = a.slice(7);
    else if (a === '--help' || a === '-h') {
      console.log(`Usage: yarn codegen [--tag DATE] [--latest] [--spec openapi.json]`);
      process.exit(0);
    }
  }
  return args;
}

function prompt(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function resolveArgs(args) {
  if (args.spec || args.tag || args.latest) return args;
  if (!process.stdin.isTTY) {
    args.latest = true;
    return args;
  }
  const latest = await latestOpenapiTag();
  const answer = (
    await prompt(`Contract tag [default: ${latest.replace(/^openapi-v/, '')}]: `)
  ).trim();
  if (!answer) {
    args.tag = latest;
  } else if (answer === 'latest') {
    args.latest = true;
  } else {
    args.tag = normalizeTag(answer);
  }
  return args;
}

async function main() {
  let args = parseArgs(process.argv.slice(2));
  args = await resolveArgs(args);
  if (args.latest && !args.tag) args.tag = await latestOpenapiTag();

  const spec = await loadSpec(args);
  const definitions = spec.definitions || {};

  fs.mkdirSync(OUT_SERVICES, { recursive: true });
  for (const f of fs.readdirSync(OUT_SERVICES)) {
    if (f.endsWith('.ts')) fs.unlinkSync(path.join(OUT_SERVICES, f));
  }

  fs.writeFileSync(OUT_TYPES, emitTypes(definitions));
  console.log(`==> wrote src/generated/types.ts`);

  const byFile = collectOps(spec);
  for (const [fileStem, items] of [...byFile.entries()].sort()) {
    const out = path.join(OUT_SERVICES, `${fileStem}.ts`);
    fs.writeFileSync(out, emitService(fileStem, items, definitions));
    console.log(`==> wrote src/generated/services/${fileStem}.ts (${items.length} methods)`);
  }

  const source =
    args.spec != null
      ? `spec: ${args.spec}\n`
      : `tag: ${args.tag}\n`;
  fs.writeFileSync(path.join(ROOT, 'src/generated/OPENAPI_SOURCE.txt'), source);
  console.log('==> done');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

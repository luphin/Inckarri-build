import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BrUsF7TY.mjs';
import { manifest } from './manifest_Bl2Buj0R.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/dashboard/details/_id_.astro.mjs');
const _page3 = () => import('./pages/dashboard.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/profile.astro.mjs');
const _page6 = () => import('./pages/register/client.astro.mjs');
const _page7 = () => import('./pages/register/company.astro.mjs');
const _page8 = () => import('./pages/register.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.5.5_jiti@2.4.2_lightningcss@1.29.2_rollup@4.37.0_typescript@5.8.2/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/dashboard/details/[id].astro", _page2],
    ["src/pages/dashboard.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/profile.astro", _page5],
    ["src/pages/register/client.astro", _page6],
    ["src/pages/register/company.astro", _page7],
    ["src/pages/register.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/nightblue/Developer/githubreps/inkarri-frontend/dist/client/",
    "server": "file:///Users/nightblue/Developer/githubreps/inkarri-frontend/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };

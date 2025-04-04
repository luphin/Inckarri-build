import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderHead, i as renderComponent, l as renderSlot } from './astro/server_BCF2jjZE.mjs';
/* empty css                         */
/* empty css                             */

const $$BoardHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="top-0 w-full z-50 mx-auto max-w-6xl"> <nav class="flex justify-between px-6 text-sm w-full items-center"> <div class="flex w-[30%]"> <a href="/" class="size-28"> <img class="" src="/public/images/inckarri_image.jpg"> </a> </div> <div class="flex gap-4 w-[70%] justify-end"> <a href="/dashboard" class="flex gap-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path></svg> <p>Cuenta admin</p> </a> </div> </nav> </header>`;
}, "/Users/nightblue/Developer/githubreps/inkarri-frontend/src/components/Dashboard/BoardHeader.astro", void 0);

const $$BoardLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-iw6xviki> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- HTML Meta Tags  --><title>Inckarri</title><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="description" content="Bienvenido a Inckarri, una página increíble.">${renderHead()}</head> <body data-astro-cid-iw6xviki> ${renderComponent($$result, "BoardHeader", $$BoardHeader, { "data-astro-cid-iw6xviki": true })} <main data-astro-cid-iw6xviki> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/nightblue/Developer/githubreps/inkarri-frontend/src/layouts/BoardLayout.astro", void 0);

export { $$BoardLayout as $ };

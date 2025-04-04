import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_BCF2jjZE.mjs';
import { $ as $$BoardLayout } from '../../../chunks/BoardLayout_g965ZqSt.mjs';
import { f as fetchLaunchBy } from '../../../chunks/api-request_DujvgVm9.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await fetchLaunchBy({ id });
  }
  return renderTemplate`${renderComponent($$result, "BoardLayout", $$BoardLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex justify-center mt-46"> <div class="flex gap-x-4 p-4 justify-center bg-[#d1d1d1] border-4 border-[#d1d1d1] rounded-lg"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch?.small, "src")}${addAttribute(launch?.name, "alt")}> <div> <h2 class="text-2xl font-bold">${launch?.name}</h2> <h3 class="text-xl font-semibold">Launch #${launch?.flight_number}</h3> <p class="text-lg">${launch?.details}</p> </div> </div> </article> ` })}`;
}, "/Users/nightblue/Developer/githubreps/inkarri-frontend/src/pages/dashboard/details/[id].astro", void 0);

const $$file = "/Users/nightblue/Developer/githubreps/inkarri-frontend/src/pages/dashboard/details/[id].astro";
const $$url = "/dashboard/details/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

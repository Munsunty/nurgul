import __nuxt_component_0 from './selfIntro-cec6831a.mjs';
import __nuxt_component_1 from './selfy-0b46fa70.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CompSelfIntro = __nuxt_component_0;
  const _component_CompSelfy = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_CompSelfIntro, null, null, _parent));
  _push(ssrRenderComponent(_component_CompSelfy, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/firstPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const firstPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { firstPage as default };
//# sourceMappingURL=firstPage-7b1d2216.mjs.map
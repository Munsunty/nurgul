import { resolveComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  const _component_Skeleton = resolveComponent("Skeleton");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "card",
    style: { "padding": "2px" }
  }, _attrs))} data-v-92e9a0de><h5 data-v-92e9a0de>Temp</h5><div class="custom-skeleton p-4" data-v-92e9a0de><div class="flex mb-3" data-v-92e9a0de>`);
  _push(ssrRenderComponent(_component_Skeleton, {
    shape: "circle",
    size: "4rem",
    class: "mr-2"
  }, null, _parent));
  _push(`<div data-v-92e9a0de>`);
  _push(ssrRenderComponent(_component_Skeleton, {
    width: "10rem",
    class: "mb-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skeleton, {
    width: "5rem",
    class: "mb-2"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skeleton, { height: ".5rem" }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Skeleton, {
    width: "100%",
    height: "500px"
  }, null, _parent));
  _push(`<div class="flex justify-content-center mt-3" data-v-92e9a0de>`);
  _push(ssrRenderComponent(_component_Skeleton, {
    width: "4rem",
    height: "2rem"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skeleton, {
    width: "4rem",
    height: "2rem"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tempArea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tempArea = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-92e9a0de"]]);

export { tempArea as default };
//# sourceMappingURL=tempArea-e95cc67a.mjs.map

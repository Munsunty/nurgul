import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _imports_0 = "" + buildAssetsURL("social-media-5187243_1920.0c3ca76b.png");
const _imports_1 = "" + buildAssetsURL("windows-6938478_1920.15b25b10.jpg");
const _imports_2 = "" + buildAssetsURL("neurons-7420670_1920.69efed00.jpg");
const _imports_3 = "" + buildAssetsURL("watercolor-4117017.d1ec0954.png");
const _sfc_main = {
  __name: "newStartView",
  __ssrInlineRender: true,
  setup(__props) {
    const pickCnt = ref(0);
    setInterval(() => {
      pickCnt.value++;
      if (pickCnt.value > 3) {
        pickCnt.value = 0;
      }
    }, 3e4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "mainView" }, _attrs))} data-v-a6fe58d3><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle(unref(pickCnt) == 0 ? null : { display: "none" })}" data-v-a6fe58d3><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle(unref(pickCnt) == 1 ? null : { display: "none" })}" data-v-a6fe58d3><img${ssrRenderAttr("src", _imports_2)} style="${ssrRenderStyle(unref(pickCnt) == 2 ? null : { display: "none" })}" data-v-a6fe58d3><img${ssrRenderAttr("src", _imports_3)} style="${ssrRenderStyle(unref(pickCnt) == 3 ? null : { display: "none" })}" data-v-a6fe58d3></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newStartView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newStartView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a6fe58d3"]]);

export { newStartView as default };
//# sourceMappingURL=newStartView-15a8b76a.mjs.map

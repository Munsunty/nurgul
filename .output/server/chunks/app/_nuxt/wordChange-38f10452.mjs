import __nuxt_component_0 from './wcBoard-1fbd9197.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "wordChange",
  __ssrInlineRender: true,
  props: ["scrollNum"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const startStep_sc1 = ref(42);
    const endStep_sc1 = ref(56);
    ref([80, 40, 1, 10]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (val_af < startStep_sc1.value) {
          fadeIn(document.getElementById("_wordChange"), false);
        } else if (val_af > endStep_sc1.value) {
          fadeOut(document.getElementById("_wordChange"), false);
        } else {
          fadeOut(document.getElementById("_wordChange"), true);
        }
      }
    });
    const fadeIn = (div_t, turn) => {
      if (turn) {
        div_t.style.opacity = 1;
      } else {
        div_t.style.opacity = 0;
      }
    };
    const fadeOut = (div_t, turn) => {
      if (turn) {
        div_t.style.opacity = 1;
      } else {
        div_t.style.opacity = 0;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CompWcBoard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        id: "_wordChange"
      }, _attrs))} data-v-5a913c4d><div id="__developer" style="${ssrRenderStyle({ "position": "absolute", "float": "left", "left": "55%", "transition": "all 2s ease" })}" class="${ssrRenderClass(unref(self_step) > unref(startStep_sc1) + 2 && unref(self_step) < unref(endStep_sc1) ? "unhide___" : "hide___")}" data-v-5a913c4d><div class="text-900 font-bold text-7xl mb-4" data-v-5a913c4d> Developer </div></div>`);
      _push(ssrRenderComponent(_component_CompWcBoard, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/wordChange.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const wordChange = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a913c4d"]]);

export { wordChange as default };
//# sourceMappingURL=wordChange-38f10452.mjs.map

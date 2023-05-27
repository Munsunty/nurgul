import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, g as _imports_0$1 } from '../server.mjs';
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
  __name: "seshat",
  __ssrInlineRender: true,
  props: ["scrollNum", "startNumber"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const tlOPT = ref([35, 16, 38, 40]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (val_af <= props.startNumber + 10) {
          moveImg(0);
        } else if (val_af <= props.startNumber + 15) {
          moveImg(val_af - props.startNumber - 10);
        } else {
          moveImg(5);
        }
      }
    });
    const moveImg = (step) => {
      let temp = document.getElementById("seshat_img");
      let sCnt = easeOutQuart(step / 5);
      let val_top = tlOPT.value[1] + (tlOPT.value[3] - tlOPT.value[1]) * sCnt;
      let val_left = tlOPT.value[0] + (tlOPT.value[2] - tlOPT.value[0]) * (step / 5);
      setStyleRect(temp, val_left, val_top);
    };
    const setStyleRect = (t1, x, y) => {
      t1.style.left = x + "%";
      t1.style.top = y + "%";
    };
    const easeOutQuart = (x) => {
      const c5 = 2 * Math.PI / 4.5;
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "seshat_img",
        class: "selfy grid"
      }, _attrs))} data-v-f2397415><div class="col-12 md:col-12" data-v-f2397415><div class="${ssrRenderClass([__props.scrollNum > __props.startNumber + 4 && __props.scrollNum <= __props.startNumber + 10 ? "unhide___" : "hide___", "text-900 font-bold text-8xl mb-4 text-left"])}" data-v-f2397415> Noteing </div></div><div class="col-12 md:col-12" data-v-f2397415><img${ssrRenderAttr("src", _imports_0$1)} alt="Image" style="${ssrRenderStyle({ "position": "relative", "float": "right", "right": "-2rem", "top": "-10rem" })}" height="150" class="${ssrRenderClass([
        __props.scrollNum > __props.startNumber + 4 ? "unhide___" : "hide___",
        __props.scrollNum > __props.startNumber + 15 ? "future" : ""
      ])}" data-v-f2397415></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comp/seshat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seshat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2397415"]]);

export { seshat as default };
//# sourceMappingURL=seshat-a3d87432.mjs.map

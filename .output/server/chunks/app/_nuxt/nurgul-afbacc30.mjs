import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, a as _imports_1 } from '../server.mjs';
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
  __name: "nurgul",
  __ssrInlineRender: true,
  props: ["scrollNum", "startNumber", "nextNumber"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const tlOPT = ref([15, 20, 33, 45, 20, 24]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (self_step.value <= props.nextNumber) {
          moveImg(0);
        } else if (self_step.value <= props.nextNumber + 5) {
          moveImg(self_step.value - props.nextNumber);
        } else if (self_step.value <= props.nextNumber + 10) {
          moveImg(5);
        } else if (self_step.value <= props.nextNumber + 15) {
          moveImg2(self_step.value - props.nextNumber - 10);
        } else {
          moveImg2(5);
        }
      }
    });
    const moveImg = (step) => {
      if (step > 5)
        step = 5;
      let temp = document.getElementById("nurgul_img");
      let sCnt = easeOutQuart(step / 5);
      let val_top = tlOPT.value[1] + (tlOPT.value[3] - tlOPT.value[1]) * (step / 5);
      let val_left = tlOPT.value[0] + (tlOPT.value[2] - tlOPT.value[0]) * sCnt;
      setStyleRect(temp, val_left, val_top);
    };
    const moveImg2 = (step) => {
      if (step > 5)
        step = 5;
      let temp = document.getElementById("nurgul_img");
      let sCnt = easeOutQuart(step / 5);
      let val_top = tlOPT.value[3] + (tlOPT.value[5] - tlOPT.value[3]) * (step / 5);
      let val_left = tlOPT.value[2] + (tlOPT.value[4] - tlOPT.value[2]) * sCnt;
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
        id: "nurgul_img",
        class: "selfy grid"
      }, _attrs))} data-v-3d823114><div class="col-12 md:col-12" data-v-3d823114><img${ssrRenderAttr("src", _imports_1)} alt="Image" style="${ssrRenderStyle({ "position": "relative", "float": "left", "left": "-1rem", "top": "8rem" })}" height="150" class="${ssrRenderClass([
        __props.scrollNum > __props.startNumber ? "unhide___" : "hide___",
        __props.scrollNum > __props.nextNumber + 15 ? "future" : ""
      ])}" data-v-3d823114></div><div class="col-12 md:col-12" data-v-3d823114><div class="${ssrRenderClass([__props.scrollNum > __props.startNumber && __props.scrollNum <= __props.nextNumber + 10 ? "unhide___" : "hide___", "text-900 font-bold text-8xl mb-4 text-right p-component"])}" data-v-3d823114> Nurgul </div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comp/nurgul.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nurgul = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d823114"]]);

export { nurgul as default };
//# sourceMappingURL=nurgul-afbacc30.mjs.map

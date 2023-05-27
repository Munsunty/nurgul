import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc, f as _imports_0$6 } from '../server.mjs';
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
  __name: "selfy",
  __ssrInlineRender: true,
  props: ["scrollNum", "endnumber"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const tlOPT = ref([60, 20, 86, 4]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (val_af <= 5) {
          moveImg(val_af);
        } else {
          moveImg(5);
        }
      }
    });
    const moveImg = (step) => {
      let temp = document.getElementById("selfy_img");
      let sCnt = easeOutQuart(step / 5);
      let val_top = tlOPT.value[1] + (tlOPT.value[3] - tlOPT.value[1]) * sCnt;
      let val_left = tlOPT.value[0] + (tlOPT.value[2] - tlOPT.value[0]) * (step / 5);
      setStyleRect(temp, val_left, val_top);
      temp.style.width = 350 - 200 * sCnt + "px";
      temp.style.height = 450 - 250 * sCnt + "px";
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
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: _imports_0$6,
        alt: "Image",
        id: "selfy_img",
        class: ["selfy", __props.scrollNum < __props.endnumber ? "unhide___" : "hide___"]
      }, _attrs))} data-v-8709d41e>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comp/selfy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8709d41e"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=selfy-0b46fa70.mjs.map

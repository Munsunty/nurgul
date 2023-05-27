import { ref, watch, resolveComponent, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, b as _imports_0$5, a as _imports_1, d as _imports_2$2, e as _imports_3$1 } from '../server.mjs';
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
  __name: "selfIntro",
  __ssrInlineRender: true,
  props: ["scrollNum", "endnumber"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const tlOPT = ref([20, 40, 83, 30]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (val_af <= 5) {
          moveImg(val_af);
        } else {
          moveImg(5);
        }
        if (val_af > 7) {
          fadeOut(document.getElementById("selfIntro"), false);
        } else {
          fadeOut(document.getElementById("selfIntro"), true);
        }
      }
    });
    const moveImg = (step) => {
      let temp = document.getElementById("sel_introduce");
      let sCnt = easeOutQuart(step / 5);
      let val_top = tlOPT.value[1] + (tlOPT.value[3] - tlOPT.value[1]) * sCnt;
      let val_left = tlOPT.value[0] + (tlOPT.value[2] - tlOPT.value[0]) * (step / 5);
      setStyleRect(temp, val_left, val_top);
    };
    const fadeOut = (div_t, turn) => {
      if (turn) {
        div_t.style.opacity = 1;
        setStyleRect(div_t, 20, 20);
      } else {
        div_t.style.opacity = 0;
        setStyleRect(div_t, 20, -50);
      }
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
      const _component_Divider = resolveComponent("Divider");
      _push(`<!--[--><div id="selfIntro" class="${ssrRenderClass([__props.scrollNum < 15 ? "unhide___" : "hide___", "grid grid-nogutter surface-section text-800"])}" data-v-9b00c654><section id="catchprase" data-v-9b00c654><span class="block text-6xl font-bold mb-1" data-v-9b00c654>Priase The Lord</span><div class="text-6xl text-primary font-bold mb-3" data-v-9b00c654>Trust Him</div></section></div><div id="sel_introduce" class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center" data-v-9b00c654><section class="${ssrRenderClass(__props.scrollNum < props.endnumber ? "unhide___" : "hide___")}" data-v-9b00c654><li class="flex align-items-center mb-3" data-v-9b00c654><img${ssrRenderAttr("src", _imports_0$5)} width="24" data-v-9b00c654><span data-v-9b00c654>\uAC15\uC131\uBBFC (31)</span></li><li class="flex align-items-center mb-3" data-v-9b00c654><img${ssrRenderAttr("src", _imports_1)} width="24" data-v-9b00c654><span data-v-9b00c654>Dev_Nurgul</span></li><li class="flex align-items-center mb-3" data-v-9b00c654><img${ssrRenderAttr("src", _imports_2$2)} width="24" data-v-9b00c654><span data-v-9b00c654>2021.06~</span></li><li class="flex align-items-center mb-3" data-v-9b00c654><img${ssrRenderAttr("src", _imports_3$1)} width="24" data-v-9b00c654><span data-v-9b00c654>munsunty<br data-v-9b00c654>@naver.com</span></li></section></div>`);
      _push(ssrRenderComponent(_component_Divider, {
        layout: "vertical",
        class: props.scrollNum > 10 && props.scrollNum < props.endnumber ? "unhide___" : "hide___"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/comp/selfIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b00c654"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=selfIntro-cec6831a.mjs.map

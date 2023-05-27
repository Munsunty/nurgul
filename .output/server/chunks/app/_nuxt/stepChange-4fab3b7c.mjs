import { ref, watch, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "stepChange",
  __ssrInlineRender: true,
  props: ["scrollNum"],
  setup(__props) {
    const props = __props;
    const self_step = ref(props.scrollNum);
    const startStep_sc1 = ref(26);
    const endStep_sc1 = ref(38);
    const items = ref([
      {
        label: "Personal"
      },
      {
        label: "Seat"
      },
      {
        label: "Payment"
      },
      {
        label: "Confirmation"
      }
    ]);
    watch(() => props.scrollNum, (val_af, val_bf) => {
      let beforeStep = self_step.value;
      if (val_af != beforeStep) {
        self_step.value = val_af;
        if (val_af < startStep_sc1.value) {
          fadeIn(document.getElementById("_history"), false);
        } else if (val_af > endStep_sc1.value) {
          fadeOut(document.getElementById("_history"), false);
        } else {
          fadeOut(document.getElementById("_history"), true);
        }
      }
    });
    const fadeOut = (div_t, turn) => {
      if (turn) {
        div_t.style.opacity = 1;
        setStyleRect(div_t, 2, 20);
      } else {
        div_t.style.opacity = 0;
        setStyleRect(div_t, 2, -50);
      }
    };
    const fadeIn = (div_t, turn) => {
      if (turn) {
        div_t.style.opacity = 1;
        setStyleRect(div_t, 2, 20);
      } else {
        div_t.style.opacity = 0;
        setStyleRect(div_t, 2, 150);
      }
    };
    const setStyleRect = (t1, x, y) => {
      t1.style.left = x + "%";
      t1.style.top = y + "%";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Steps = resolveComponent("Steps");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        id: "_history"
      }, _attrs))} data-v-5e989aac><div class="${ssrRenderClass([unref(self_step) > unref(startStep_sc1) + 2 && unref(self_step) < unref(endStep_sc1) ? "_fadeIn" : "_fadeOut", "text-900 font-bold text-6xl mb-4 text-center"])}" data-v-5e989aac> Passed </div><div id="_stepChange" class="${ssrRenderClass([unref(self_step) > unref(startStep_sc1) + 3 && unref(self_step) < unref(endStep_sc1) ? "_fadeIn" : "_fadeOut", "col-12 md:col-12"])}" data-v-5e989aac>`);
      _push(ssrRenderComponent(_component_Steps, {
        model: unref(items),
        readonly: true,
        exact: false,
        pt: {
          root: { class: "w-12" }
        }
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pages/stepChange.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stepChange = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e989aac"]]);

export { stepChange as default };
//# sourceMappingURL=stepChange-4fab3b7c.mjs.map

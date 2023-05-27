import { ref, resolveComponent, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "pickView",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PickList = resolveComponent("PickList");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-366a1b3c>`);
      _push(ssrRenderComponent(_component_PickList, {
        modelValue: unref(products),
        "onUpdate:modelValue": ($event) => isRef(products) ? products.value = $event : null,
        listStyle: "height:342px",
        dataKey: "id"
      }, {
        sourceheader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Available `);
          } else {
            return [
              createTextVNode(" Available ")
            ];
          }
        }),
        targetheader: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Selected `);
          } else {
            return [
              createTextVNode(" Selected ")
            ];
          }
        }),
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="product-item" data-v-366a1b3c${_scopeId}><div class="image-container" data-v-366a1b3c${_scopeId}><img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" data-v-366a1b3c${_scopeId}></div><div class="product-list-detail" data-v-366a1b3c${_scopeId}><h6 class="mb-2" data-v-366a1b3c${_scopeId}>${ssrInterpolate(slotProps.item.name)}</h6><i class="pi pi-tag product-category-icon" data-v-366a1b3c${_scopeId}></i><span class="product-category" data-v-366a1b3c${_scopeId}>${ssrInterpolate(slotProps.item.category)}</span></div><div class="product-list-action" data-v-366a1b3c${_scopeId}><h6 class="mb-2" data-v-366a1b3c${_scopeId}>$${ssrInterpolate(slotProps.item.price)}</h6><span class="${ssrRenderClass("product-badge status-" + slotProps.item.inventoryStatus)}" data-v-366a1b3c${_scopeId}>${ssrInterpolate(slotProps.item.inventoryStatus)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "product-item" }, [
                createVNode("div", { class: "image-container" }, [
                  createVNode("img", { src: "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" })
                ]),
                createVNode("div", { class: "product-list-detail" }, [
                  createVNode("h6", { class: "mb-2" }, toDisplayString(slotProps.item.name), 1),
                  createVNode("i", { class: "pi pi-tag product-category-icon" }),
                  createVNode("span", { class: "product-category" }, toDisplayString(slotProps.item.category), 1)
                ]),
                createVNode("div", { class: "product-list-action" }, [
                  createVNode("h6", { class: "mb-2" }, "$" + toDisplayString(slotProps.item.price), 1),
                  createVNode("span", {
                    class: "product-badge status-" + slotProps.item.inventoryStatus
                  }, toDisplayString(slotProps.item.inventoryStatus), 3)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/pickView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pickView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-366a1b3c"]]);

export { pickView as default };
//# sourceMappingURL=pickView-cef0ec3f.mjs.map

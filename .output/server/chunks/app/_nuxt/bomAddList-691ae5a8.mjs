import { ref, computed, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useState } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "bomAddList",
  __ssrInlineRender: true,
  setup(__props) {
    ref([]);
    const products = computed({
      get: () => {
        return useState("cart").value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrderList = resolveComponent("OrderList");
      const _component_Button = resolveComponent("Button");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "width": "100%", "height": "100%" }
      }, _attrs))} data-v-a74a2cda>`);
      _push(ssrRenderComponent(_component_OrderList, {
        modelValue: unref(products),
        "onUpdate:modelValue": ($event) => isRef(products) ? products.value = $event : null,
        dataKey: "id"
      }, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` List of Products `);
          } else {
            return [
              createTextVNode(" List of Products ")
            ];
          }
        }),
        item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="product-item" data-v-a74a2cda${_scopeId}><div class="image-container" data-v-a74a2cda${_scopeId}><img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"${ssrRenderAttr("alt", slotProps.item.id)} data-v-a74a2cda${_scopeId}></div><div class="product-list-detail" data-v-a74a2cda${_scopeId}><h6 class="mb-2" data-v-a74a2cda${_scopeId}>${ssrInterpolate(slotProps.item.partNumber)}</h6><i class="pi pi-tag product-category-icon" data-v-a74a2cda${_scopeId}></i><span class="product-category" data-v-a74a2cda${_scopeId}>${ssrInterpolate(slotProps.item.partName)}</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "product-item" }, [
                createVNode("div", { class: "image-container" }, [
                  createVNode("img", {
                    src: "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",
                    alt: slotProps.item.id
                  }, null, 8, ["alt"])
                ]),
                createVNode("div", { class: "product-list-detail" }, [
                  createVNode("h6", { class: "mb-2" }, toDisplayString(slotProps.item.partNumber), 1),
                  createVNode("i", { class: "pi pi-tag product-category-icon" }),
                  createVNode("span", { class: "product-category" }, toDisplayString(slotProps.item.partName), 1)
                ])
              ])
            ];
          }
        }),
        controlsend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-bars p-toolbar-separator" data-v-a74a2cda${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-plus",
              class: "p-button p-component p-button-icon-only"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("i", { class: "pi pi-bars p-toolbar-separator" }),
              createVNode(_component_Button, {
                icon: "pi pi-plus",
                class: "p-button p-component p-button-icon-only"
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bomResultArea/bomAddList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bomAddList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a74a2cda"]]);

export { bomAddList as default };
//# sourceMappingURL=bomAddList-691ae5a8.mjs.map

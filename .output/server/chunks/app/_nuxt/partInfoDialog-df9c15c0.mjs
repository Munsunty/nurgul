import { computed, ref, resolveComponent, mergeProps, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { u as useState } from '../server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "partInfoDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const currentData = computed(() => {
      return useState("PartInfo").value.node;
    });
    const display = computed({
      get: () => {
        return useState("PartInfo").value.display;
      },
      set: (off) => {
        useState("PartInfo").value = {
          display: off,
          node: null
        };
        selectedNode.value = {};
      }
    });
    const selectedNode = ref();
    const nodes = ref([
      {
        key: "0",
        label: "\uB300\uBD84\uB958",
        data: "P1",
        icon: "pi pi-car",
        children: [
          {
            key: "1",
            label: "\uC911\uBD84\uB9581",
            data: "P2",
            icon: "pi pi-bolt",
            children: [
              {
                key: "4",
                label: "\uC18C\uBD84\uB9581",
                data: "P5",
                icon: "pi pi-apple",
                children: [
                  { key: "5", label: "\uC0C1\uC138\uBD84\uB9581", data: "P6", icon: "pi pi-camera" }
                ]
              }
            ]
          },
          { key: "2", label: "\uC911\uBD84\uB9582", data: "P3", icon: "pi pi-bitcoin" },
          { key: "3", label: "\uC911\uBD84\uB9583", data: "P4", icon: "pi pi-box" }
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Dialog = resolveComponent("Dialog");
      const _component_TreeSelect = resolveComponent("TreeSelect");
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      _push(ssrRenderComponent(_component_Dialog, mergeProps({
        visible: unref(display),
        "onUpdate:visible": ($event) => isRef(display) ? display.value = $event : null,
        style: { "width": "40%" }
      }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3${_scopeId}>\uD30C\uD2B8 \uC815\uBCF4</h3>`);
          } else {
            return [
              createVNode("h3", null, "\uD30C\uD2B8 \uC815\uBCF4")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              label: "Yes",
              icon: "pi pi-check",
              autofocus: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                label: "Yes",
                icon: "pi pi-check",
                autofocus: ""
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid"${_scopeId}><div class="col-12 md:col-6"${_scopeId}><div class="p-inputgroup"${_scopeId}><span class="p-inputgroup-addon"${_scopeId}><i class="pi pi-cloud"${_scopeId}></i></span>`);
            _push2(ssrRenderComponent(_component_TreeSelect, {
              modelValue: unref(selectedNode),
              "onUpdate:modelValue": ($event) => isRef(selectedNode) ? selectedNode.value = $event : null,
              options: unref(nodes),
              placeholder: "\uBD84\uB958\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
              display: "chip"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid"${_scopeId}><div class="col-12 md:col-6"${_scopeId}><div class="p-inputgroup"${_scopeId}><span class="p-inputgroup-addon"${_scopeId}>P</span>`);
            _push2(ssrRenderComponent(_component_InputText, {
              placeholder: "\uD488\uBC88",
              modelValue: unref(currentData).data.partNumber,
              "onUpdate:modelValue": ($event) => unref(currentData).data.partNumber = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid"${_scopeId}><div class="col-12 md:col-8"${_scopeId}><div class="p-inputgroup"${_scopeId}><span class="p-inputgroup-addon"${_scopeId}>N</span>`);
            _push2(ssrRenderComponent(_component_InputText, {
              placeholder: "\uD488\uBA85",
              modelValue: unref(currentData).data.partName,
              "onUpdate:modelValue": ($event) => unref(currentData).data.partName = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid"${_scopeId}><div class="col-12 md:col-8"${_scopeId}><div class="p-inputgroup"${_scopeId}><span class="p-inputgroup-addon"${_scopeId}>S</span>`);
            _push2(ssrRenderComponent(_component_InputText, {
              placeholder: "\uADDC\uACA9",
              modelValue: unref(currentData).data.spec,
              "onUpdate:modelValue": ($event) => unref(currentData).data.spec = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="p-inputgroup-addon"${_scopeId}>*</span></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid" }, [
                createVNode("div", { class: "col-12 md:col-6" }, [
                  createVNode("div", { class: "p-inputgroup" }, [
                    createVNode("span", { class: "p-inputgroup-addon" }, [
                      createVNode("i", { class: "pi pi-cloud" })
                    ]),
                    createVNode(_component_TreeSelect, {
                      modelValue: unref(selectedNode),
                      "onUpdate:modelValue": ($event) => isRef(selectedNode) ? selectedNode.value = $event : null,
                      options: unref(nodes),
                      placeholder: "\uBD84\uB958\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
                      display: "chip"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid" }, [
                createVNode("div", { class: "col-12 md:col-6" }, [
                  createVNode("div", { class: "p-inputgroup" }, [
                    createVNode("span", { class: "p-inputgroup-addon" }, "P"),
                    createVNode(_component_InputText, {
                      placeholder: "\uD488\uBC88",
                      modelValue: unref(currentData).data.partNumber,
                      "onUpdate:modelValue": ($event) => unref(currentData).data.partNumber = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid" }, [
                createVNode("div", { class: "col-12 md:col-8" }, [
                  createVNode("div", { class: "p-inputgroup" }, [
                    createVNode("span", { class: "p-inputgroup-addon" }, "N"),
                    createVNode(_component_InputText, {
                      placeholder: "\uD488\uBA85",
                      modelValue: unref(currentData).data.partName,
                      "onUpdate:modelValue": ($event) => unref(currentData).data.partName = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid" }, [
                createVNode("div", { class: "col-12 md:col-8" }, [
                  createVNode("div", { class: "p-inputgroup" }, [
                    createVNode("span", { class: "p-inputgroup-addon" }, "S"),
                    createVNode(_component_InputText, {
                      placeholder: "\uADDC\uACA9",
                      modelValue: unref(currentData).data.spec,
                      "onUpdate:modelValue": ($event) => unref(currentData).data.spec = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", { class: "p-inputgroup-addon" }, "*")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/part/partInfoDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=partInfoDialog-df9c15c0.mjs.map

import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, isRef, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { _ as _export_sfc, u as useState } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useTreeTable } from './useTreeTable-2ad67799.mjs';
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
  __name: "bomEditView",
  __ssrInlineRender: true,
  setup(__props) {
    const asdf = (b) => {
      console.log(b);
    };
    const nodes = useTreeTable();
    const expandedKeys = useState("expandedKeys", () => {
      return { "a-0": false };
    });
    const selectedKeys = useState("selectedKeys", () => null);
    const items = ref([
      {
        label: "Update",
        icon: "pi pi-refresh"
      },
      {
        label: "Delete",
        icon: "pi pi-times"
      },
      {
        label: "Vue Website",
        icon: "pi pi-external-link",
        command: () => {
          window.location.href = "https://vuejs.org/";
        }
      },
      {
        label: "Upload",
        icon: "pi pi-upload",
        command: () => {
          window.location.hash = "/fileupload";
        }
      }
    ]);
    const expandAll = () => {
      for (let node of nodes.value) {
        expandNode(node);
      }
    };
    const collapseAll = () => {
      expandedKeys.value = {};
    };
    const expandNode = (node) => {
      if (node.hasOwnProperty("children") && node.children.length > 0) {
        expandedKeys.value[node.key] = true;
        for (let child of node.children) {
          expandNode(child);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toolbar = resolveComponent("Toolbar");
      const _component_Button = resolveComponent("Button");
      const _component_SplitButton = resolveComponent("SplitButton");
      const _component_TreeTable = resolveComponent("TreeTable");
      const _component_Column = resolveComponent("Column");
      const _component_InputNumber = resolveComponent("InputNumber");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "max-height": "100%", "min-height": "93%", "max-width": "inherit" }
      }, _attrs))} data-v-95f55d88>`);
      _push(ssrRenderComponent(_component_Toolbar, null, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-95f55d88${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              icon: "pi pi-plus",
              label: "Expand All",
              onClick: expandAll
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              icon: "pi pi-minus",
              label: "Collapse All",
              onClick: collapseAll
            }, null, _parent2, _scopeId));
            _push2(`</div><i class="pi pi-bars p-toolbar-separator mr-2" data-v-95f55d88${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_SplitButton, {
              label: "Save",
              icon: "pi pi-check",
              model: unref(items),
              class: "p-button-warning"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_Button, {
                  type: "button",
                  icon: "pi pi-plus",
                  label: "Expand All",
                  onClick: expandAll
                }),
                createVNode(_component_Button, {
                  type: "button",
                  icon: "pi pi-minus",
                  label: "Collapse All",
                  onClick: collapseAll
                })
              ]),
              createVNode("i", { class: "pi pi-bars p-toolbar-separator mr-2" }),
              createVNode(_component_SplitButton, {
                label: "Save",
                icon: "pi pi-check",
                model: unref(items),
                class: "p-button-warning"
              }, null, 8, ["model"])
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-search",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-calendar",
              class: "p-button-success mr-2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-times",
              class: "p-button-danger"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                icon: "pi pi-search",
                class: "mr-2"
              }),
              createVNode(_component_Button, {
                icon: "pi pi-calendar",
                class: "p-button-success mr-2"
              }),
              createVNode(_component_Button, {
                icon: "pi pi-times",
                class: "p-button-danger"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="bomEditTable" style="${ssrRenderStyle({})}" data-v-95f55d88>`);
      _push(ssrRenderComponent(_component_TreeTable, {
        value: unref(nodes),
        expandedKeys: unref(expandedKeys),
        resizableColumns: true,
        showGridlines: "",
        scrollable: true,
        scrollHeight: "85vh",
        selectionMode: "checkbox",
        selectionKeys: unref(selectedKeys),
        "onUpdate:selectionKeys": ($event) => isRef(selectedKeys) ? selectedKeys.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              field: "level",
              header: "\uB808\uBCA8",
              expander: true,
              class: "tree-col-1 tree-col-c"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "partNumber",
              header: "\uD30C\uD2B8\uBC88\uD638",
              class: "tree-col-3 tree-col-c"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "version",
              header: "\uBC84\uC804",
              class: "tree-col-0 tree-col-c"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "partName",
              header: "\uD488\uBA85",
              class: "tree-col-4",
              "header-class": "tree-col-c",
              "body-class": "tree-col-l"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "spec",
              header: "\uC2A4\uD399",
              class: "tree-col-4",
              "header-class": "tree-col-c",
              "body-class": "tree-col-l"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              style: { "min-width": "100px" },
              header: "\uC218\uB7C9"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (slotProps.node.data.qty < 1) {
                    _push3(`<div data-v-95f55d88${_scopeId2}>${ssrInterpolate(slotProps.node.data.qty)}</div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_InputNumber, {
                      modelValue: slotProps.node.data.qty,
                      "onUpdate:modelValue": ($event) => slotProps.node.data.qty = $event,
                      min: 0,
                      max: 100,
                      style: { "width": "100px" },
                      onClick: ($event) => asdf(slotProps.node)
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    slotProps.node.data.qty < 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(slotProps.node.data.qty), 1)) : (openBlock(), createBlock(_component_InputNumber, {
                      key: 1,
                      modelValue: slotProps.node.data.qty,
                      "onUpdate:modelValue": ($event) => slotProps.node.data.qty = $event,
                      min: 0,
                      max: 100,
                      style: { "width": "100px" },
                      onClick: ($event) => asdf(slotProps.node)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]))
                  ];
                }
              }),
              editor: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputNumber, {
                    modelValue: slotProps.node[slotProps.field],
                    "onUpdate:modelValue": ($event) => slotProps.node[slotProps.field] = $event,
                    min: 0,
                    max: 100,
                    showButtons: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputNumber, {
                      modelValue: slotProps.node[slotProps.field],
                      "onUpdate:modelValue": ($event) => slotProps.node[slotProps.field] = $event,
                      min: 0,
                      max: 100,
                      showButtons: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "unit",
              header: "\uB2E8\uC704",
              style: { "min-width": "70px", "justify-content": "center" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Column, {
                field: "level",
                header: "\uB808\uBCA8",
                expander: true,
                class: "tree-col-1 tree-col-c"
              }),
              createVNode(_component_Column, {
                field: "partNumber",
                header: "\uD30C\uD2B8\uBC88\uD638",
                class: "tree-col-3 tree-col-c"
              }),
              createVNode(_component_Column, {
                field: "version",
                header: "\uBC84\uC804",
                class: "tree-col-0 tree-col-c"
              }),
              createVNode(_component_Column, {
                field: "partName",
                header: "\uD488\uBA85",
                class: "tree-col-4",
                "header-class": "tree-col-c",
                "body-class": "tree-col-l"
              }),
              createVNode(_component_Column, {
                field: "spec",
                header: "\uC2A4\uD399",
                class: "tree-col-4",
                "header-class": "tree-col-c",
                "body-class": "tree-col-l"
              }),
              createVNode(_component_Column, {
                style: { "min-width": "100px" },
                header: "\uC218\uB7C9"
              }, {
                body: withCtx((slotProps) => [
                  slotProps.node.data.qty < 1 ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(slotProps.node.data.qty), 1)) : (openBlock(), createBlock(_component_InputNumber, {
                    key: 1,
                    modelValue: slotProps.node.data.qty,
                    "onUpdate:modelValue": ($event) => slotProps.node.data.qty = $event,
                    min: 0,
                    max: 100,
                    style: { "width": "100px" },
                    onClick: ($event) => asdf(slotProps.node)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]))
                ]),
                editor: withCtx((slotProps) => [
                  createVNode(_component_InputNumber, {
                    modelValue: slotProps.node[slotProps.field],
                    "onUpdate:modelValue": ($event) => slotProps.node[slotProps.field] = $event,
                    min: 0,
                    max: 100,
                    showButtons: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "unit",
                header: "\uB2E8\uC704",
                style: { "min-width": "70px", "justify-content": "center" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bomEditView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-95f55d88"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=bomEditView-170a9691.mjs.map

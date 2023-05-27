import { ref, resolveComponent, mergeProps, withCtx, unref, isRef, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useTreeTable } from './useTreeTable-2ad67799.mjs';
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
  __name: "bomOrgChart",
  __ssrInlineRender: true,
  setup(__props) {
    const nodes2 = useTreeTable().value[0];
    const onNodeSelect = (node) => {
      bomOrgSelectionKey.value = {};
      bomOrgSelectionKey.value = { [node.key]: true };
      moveToNode(node);
    };
    const bomOrgSelectionKey = ref(null);
    function moveToNode(node) {
      let target = document.getElementById(node.key);
      if (target != null) {
        target.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_splitter = resolveComponent("splitter");
      const _component_SplitterPanel = resolveComponent("SplitterPanel");
      const _component_Tree = resolveComponent("Tree");
      const _component_OrganizationChart = resolveComponent("OrganizationChart");
      _push(ssrRenderComponent(_component_splitter, mergeProps({
        layout: "vertical",
        style: { "height": "100%", "width": "100%" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SplitterPanel, {
              size: 40,
              style: { "overflow-y": "scroll" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tree, {
                    value: [unref(nodes2)],
                    style: { "height": "inherit" },
                    selectionKeys: unref(bomOrgSelectionKey),
                    "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null
                  }, {
                    default: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span data-v-8c3312c2${_scopeId3}>${ssrInterpolate(slotProps.node.data.partNumber)}</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            onClick: ($event) => onNodeSelect(slotProps.node)
                          }, toDisplayString(slotProps.node.data.partNumber), 9, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tree, {
                      value: [unref(nodes2)],
                      style: { "height": "inherit" },
                      selectionKeys: unref(bomOrgSelectionKey),
                      "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null
                    }, {
                      default: withCtx((slotProps) => [
                        createVNode("span", {
                          onClick: ($event) => onNodeSelect(slotProps.node)
                        }, toDisplayString(slotProps.node.data.partNumber), 9, ["onClick"])
                      ]),
                      _: 1
                    }, 8, ["value", "selectionKeys", "onUpdate:selectionKeys"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SplitterPanel, { size: 60 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OrganizationChart, {
                    value: unref(nodes2),
                    collapsible: true,
                    selectionMode: "single",
                    selectionKeys: unref(bomOrgSelectionKey),
                    "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null,
                    style: { "overflow-x": "scroll", "height": "100%" }
                  }, {
                    default: withCtx((slotProps, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${ssrRenderAttr("id", slotProps.node.key)} data-v-8c3312c2${_scopeId3}>${ssrInterpolate(slotProps.node.data.partNumber)}</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            id: slotProps.node.key
                          }, toDisplayString(slotProps.node.data.partNumber), 9, ["id"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_OrganizationChart, {
                      value: unref(nodes2),
                      collapsible: true,
                      selectionMode: "single",
                      selectionKeys: unref(bomOrgSelectionKey),
                      "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null,
                      style: { "overflow-x": "scroll", "height": "100%" }
                    }, {
                      default: withCtx((slotProps) => [
                        createVNode("span", {
                          id: slotProps.node.key
                        }, toDisplayString(slotProps.node.data.partNumber), 9, ["id"])
                      ]),
                      _: 1
                    }, 8, ["value", "selectionKeys", "onUpdate:selectionKeys"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SplitterPanel, {
                size: 40,
                style: { "overflow-y": "scroll" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_Tree, {
                    value: [unref(nodes2)],
                    style: { "height": "inherit" },
                    selectionKeys: unref(bomOrgSelectionKey),
                    "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null
                  }, {
                    default: withCtx((slotProps) => [
                      createVNode("span", {
                        onClick: ($event) => onNodeSelect(slotProps.node)
                      }, toDisplayString(slotProps.node.data.partNumber), 9, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["value", "selectionKeys", "onUpdate:selectionKeys"])
                ]),
                _: 1
              }),
              createVNode(_component_SplitterPanel, { size: 60 }, {
                default: withCtx(() => [
                  createVNode(_component_OrganizationChart, {
                    value: unref(nodes2),
                    collapsible: true,
                    selectionMode: "single",
                    selectionKeys: unref(bomOrgSelectionKey),
                    "onUpdate:selectionKeys": ($event) => isRef(bomOrgSelectionKey) ? bomOrgSelectionKey.value = $event : null,
                    style: { "overflow-x": "scroll", "height": "100%" }
                  }, {
                    default: withCtx((slotProps) => [
                      createVNode("span", {
                        id: slotProps.node.key
                      }, toDisplayString(slotProps.node.data.partNumber), 9, ["id"])
                    ]),
                    _: 1
                  }, 8, ["value", "selectionKeys", "onUpdate:selectionKeys"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bomOrgChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bomOrgChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c3312c2"]]);

export { bomOrgChart as default };
//# sourceMappingURL=bomOrgChart-a2c7f3db.mjs.map

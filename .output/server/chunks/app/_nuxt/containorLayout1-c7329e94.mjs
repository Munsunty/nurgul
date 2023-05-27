import __nuxt_component_0 from './partSearchLayout-1141b7c2.mjs';
import __nuxt_component_1 from './bomEditView-170a9691.mjs';
import { ref, computed, h, resolveComponent, mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useState } from '../server.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './partCreateDialog-46bfde41.mjs';
import './partSearch-48e9a222.mjs';
import './partInfoDialog-df9c15c0.mjs';
import './useTreeTable-2ad67799.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const _sfc_main = {
  __name: "containorLayout1",
  __ssrInlineRender: true,
  setup(__props) {
    const sizeNum = ref(50);
    computed({
      get: () => {
        return sizeNum.value < 40;
      }
    });
    useState("spResize", () => {
    });
    const componentArr = ref([h(__nuxt_component_0), h(resolveComponent("bomAddList"))]);
    const bomResultArea = computed({
      get: () => {
        return componentArr.value[1];
      }
    });
    const bomWorkArea = computed({
      get: () => {
        return componentArr.value[0];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Splitter = resolveComponent("Splitter");
      const _component_SplitterPanel = resolveComponent("SplitterPanel");
      const _component_bom_edit_view = __nuxt_component_1;
      _push(ssrRenderComponent(_component_Splitter, mergeProps({ style: { "height": "100%" } }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_SplitterPanel, {
              class: "flex align-items-center justify-content-center",
              size: unref(sizeNum),
              minSize: 30
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_bom_edit_view, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_bom_edit_view)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_SplitterPanel, {
              size: 100 - unref(sizeNum),
              resizeend: "spResize",
              minSize: 10,
              style: { "min-width": "0%" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Splitter, {
                    style: { "width": "100%" },
                    layout: "vertical"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SplitterPanel, {
                          class: "flex align-items-center justify-content-center",
                          size: 50,
                          minSize: 10,
                          style: { "min-height": "20%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}"${_scopeId4}>`);
                              ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(unref(bomWorkArea)), { fromPage: "bomEdit" }, null), _parent5, _scopeId4);
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(unref(bomWorkArea)), { fromPage: "bomEdit" }))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SplitterPanel, {
                          class: "flex align-items-center justify-content-center",
                          size: 50,
                          minSize: 10,
                          style: { "min-height": "30%" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" class="card"${_scopeId4}>`);
                              ssrRenderVNode(_push5, createVNode(resolveDynamicComponent(unref(bomResultArea)), { fromPage: "bomEdit" }, null), _parent5, _scopeId4);
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", {
                                  style: { "width": "100%", "height": "100%" },
                                  class: "card"
                                }, [
                                  (openBlock(), createBlock(resolveDynamicComponent(unref(bomResultArea)), { fromPage: "bomEdit" }))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SplitterPanel, {
                            class: "flex align-items-center justify-content-center",
                            size: 50,
                            minSize: 10,
                            style: { "min-height": "20%" }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                                (openBlock(), createBlock(resolveDynamicComponent(unref(bomWorkArea)), { fromPage: "bomEdit" }))
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SplitterPanel, {
                            class: "flex align-items-center justify-content-center",
                            size: 50,
                            minSize: 10,
                            style: { "min-height": "30%" }
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                style: { "width": "100%", "height": "100%" },
                                class: "card"
                              }, [
                                (openBlock(), createBlock(resolveDynamicComponent(unref(bomResultArea)), { fromPage: "bomEdit" }))
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Splitter, {
                      style: { "width": "100%" },
                      layout: "vertical"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SplitterPanel, {
                          class: "flex align-items-center justify-content-center",
                          size: 50,
                          minSize: 10,
                          style: { "min-height": "20%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                              (openBlock(), createBlock(resolveDynamicComponent(unref(bomWorkArea)), { fromPage: "bomEdit" }))
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SplitterPanel, {
                          class: "flex align-items-center justify-content-center",
                          size: 50,
                          minSize: 10,
                          style: { "min-height": "30%" }
                        }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              style: { "width": "100%", "height": "100%" },
                              class: "card"
                            }, [
                              (openBlock(), createBlock(resolveDynamicComponent(unref(bomResultArea)), { fromPage: "bomEdit" }))
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_SplitterPanel, {
                class: "flex align-items-center justify-content-center",
                size: unref(sizeNum),
                minSize: 30
              }, {
                default: withCtx(() => [
                  createVNode(_component_bom_edit_view)
                ]),
                _: 1
              }, 8, ["size"]),
              createVNode(_component_SplitterPanel, {
                size: 100 - unref(sizeNum),
                resizeend: "spResize",
                minSize: 10,
                style: { "min-width": "0%" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_Splitter, {
                    style: { "width": "100%" },
                    layout: "vertical"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_SplitterPanel, {
                        class: "flex align-items-center justify-content-center",
                        size: 50,
                        minSize: 10,
                        style: { "min-height": "20%" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "width": "100%", "height": "100%" } }, [
                            (openBlock(), createBlock(resolveDynamicComponent(unref(bomWorkArea)), { fromPage: "bomEdit" }))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_SplitterPanel, {
                        class: "flex align-items-center justify-content-center",
                        size: 50,
                        minSize: 10,
                        style: { "min-height": "30%" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            style: { "width": "100%", "height": "100%" },
                            class: "card"
                          }, [
                            (openBlock(), createBlock(resolveDynamicComponent(unref(bomResultArea)), { fromPage: "bomEdit" }))
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["size"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/containorLayout1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=containorLayout1-c7329e94.mjs.map

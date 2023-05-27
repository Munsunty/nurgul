import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import _sfc_main$1 from './partCreateDialog-46bfde41.mjs';
import __nuxt_component_1 from './partSearch-48e9a222.mjs';
import { withAsyncContext, ref, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, isRef, useSSRContext, computed, reactive, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { hash } from 'ohash';
import { _ as _export_sfc, h as useNuxtApp, c as createError } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './partInfoDialog-df9c15c0.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a2, _b, _c, _d, _e, _f;
  var _a;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_f = (_e = getCachedData()) != null ? _e : (_a = options.default) == null ? void 0 : _a.call(options)) != null ? _f : null),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a3;
      var _a22;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_a3 = (_a22 = options.default) == null ? void 0 : _a22.call(options)) != null ? _a3 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useRequestFetch() {
  var _a;
  const event = (_a = useNuxtApp().ssrContext) == null ? void 0 : _a.event;
  return (event == null ? void 0 : event.$fetch) || globalThis.$fetch;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch && isLocalFetch) {
      _$fetch = useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _imports_0 = "" + buildAssetsURL("clouds-7081496_1920.9712cf2c.png");
const _sfc_main = {
  __name: "partSearchLayout",
  __ssrInlineRender: true,
  props: ["fromPage"],
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const permitList = ([__temp, __restore] = withAsyncContext(() => useFetch(
      () => `/api/permit/partSearch`,
      {
        params: {
          fromPage: props.fromPage
        }
      },
      "$ksoZK1hJOg"
    )), __temp = await __temp, __restore(), __temp);
    ref({ create: true });
    ref([
      {},
      {
        icon: "pi pi-fw pi-plus"
      },
      {
        icon: "pi pi-shopping-cart"
      },
      {
        icon: "pi pi-fw pi-sitemap"
      }
    ]);
    const test = () => {
      debugger;
    };
    const createPart = ref(false);
    const openCreatePart = () => {
      createPart.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Toolbar = resolveComponent("Toolbar");
      const _component_Button = resolveComponent("Button");
      const _component_InputText = resolveComponent("InputText");
      const _component_part_create_dialog = _sfc_main$1;
      const _component_part_search = __nuxt_component_1;
      _push(`<!--[--><div id="pslTop" data-v-c72ee405>`);
      _push(ssrRenderComponent(_component_Toolbar, null, {
        start: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "height": "32px", "width": "32px" })}" class="mr-2" data-v-c72ee405${_scopeId}>`);
            if (unref(permitList).data.value.dataList.create) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                icon: "pi pi-plus",
                class: "mr-2",
                onClick: openCreatePart
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                style: { "height": "32px", "width": "32px" },
                class: "mr-2"
              }),
              unref(permitList).data.value.dataList.create ? (openBlock(), createBlock(_component_Button, {
                key: 0,
                type: "button",
                icon: "pi pi-plus",
                class: "mr-2",
                onClick: openCreatePart
              })) : createCommentVNode("", true)
            ];
          }
        }),
        end: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, { icon: "pi pi-search-plus" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              placeholder: "\uD488\uBC88",
              type: "text"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Button, {
              icon: "pi pi-search",
              onClick: test
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, { icon: "pi pi-search-plus" }),
              createVNode(_component_InputText, {
                placeholder: "\uD488\uBC88",
                type: "text"
              }),
              createVNode(_component_Button, {
                icon: "pi pi-search",
                onClick: test
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_part_create_dialog, {
        visible: unref(createPart),
        "onUpdate:visible": ($event) => isRef(createPart) ? createPart.value = $event : null
      }, null, _parent));
      _push(`<div id="pslMiddle" data-v-c72ee405>`);
      _push(ssrRenderComponent(_component_part_search, {
        fromPage: props.fromPage,
        permit: unref(permitList).data.value.dataList
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/part/partSearchLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c72ee405"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=partSearchLayout-1141b7c2.mjs.map

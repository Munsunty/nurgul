import __nuxt_component_0 from './taskRelationLine-b4980177.mjs';
import { computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "taskBar",
  __ssrInlineRender: true,
  props: ["taskD", "taskList", "bWidth", "startViewDate"],
  setup(__props) {
    const props = __props;
    const width = computed({
      get: () => {
        return task.duration * props.bWidth - 18;
      }
    });
    const start = computed({
      get: () => {
        return -props.startViewDate * props.bWidth;
      }
    });
    const moveStyle = ref({
      width: "inherit",
      height: "inherit",
      "z-index": 1e3,
      position: "absolute"
    });
    const task = props.taskD.data;
    const rectX = ref(0);
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectTaskRelationLine = __nuxt_component_0;
      _push(`<!--[--><div style="${ssrRenderStyle(unref(moveStyle))}" data-v-57457192><svg version="1.1" baseProfile="full"${ssrRenderAttr("width", unref(width))} height="30" xmlns="http://www.w3.org/2000/svg" style="${ssrRenderStyle({ "overflow": "visible" })}" data-v-57457192><rect${ssrRenderAttr("x", unref(start))} width="100%" height="100%" fill="red" data-v-57457192></rect><text${ssrRenderAttr("x", unref(start) + 20)} y="18" font-size="10" text-anchor="middle" fill="white" class="stop-dragging" data-v-57457192>${ssrInterpolate(props.taskD.data.name)}</text><!--[-->`);
      ssrRenderList(props.taskD.data.dependency, (next) => {
        _push(ssrRenderComponent(_component_ProjectTaskRelationLine, {
          width: unref(width),
          taskD: props.taskD.data,
          next,
          rectX: unref(rectX),
          start: unref(start)
        }, null, _parent));
      });
      _push(`<!--]--></svg></div><div style="${ssrRenderStyle({ "height": "33px", "opacity": "0" })}" data-v-57457192>style</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/taskBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taskBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57457192"]]);

export { taskBar as default };
//# sourceMappingURL=taskBar-5b2291d1.mjs.map

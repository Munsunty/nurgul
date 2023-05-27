import __nuxt_component_0$1 from './taskRelationLine-b4980177.mjs';
import { computed, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "TaskRect",
  __ssrInlineRender: true,
  props: ["taskD", "taskList", "bWidth"],
  setup(__props) {
    const props = __props;
    const task = props.taskD;
    const width = computed({
      get: () => {
        return props.taskD.duration * props.bWidth - 18 + moveWidth.value;
      }
    });
    const width1 = computed({
      get: () => {
        return (props.taskD.duration * props.bWidth - 18 + moveWidth.value) * (100 - task.progress) / 100;
      }
    });
    const width2 = computed({
      get: () => {
        return (props.taskD.duration * props.bWidth - 18 + moveWidth.value) * task.progress / 100;
      }
    });
    const moveX = ref(0);
    const moveWidth = ref(0);
    const rectX = computed({
      get: () => {
        return (props.taskD.date - 1) * props.bWidth + 9 + moveX.value;
      }
    });
    const rectY = ref(props.taskD.index * 50);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectTaskRelationLine = __nuxt_component_0$1;
      _push(`<!--[-->`);
      if (props.taskD.progress == 100) {
        _push(`<g data-v-08afe169><rect${ssrRenderAttr("x", unref(rectX))}${ssrRenderAttr("y", unref(rectY) + 9)}${ssrRenderAttr("width", unref(width))}${ssrRenderAttr("height", 33)} fill="#3B82F6" data-v-08afe169></rect></g>`);
      } else {
        _push(`<g data-v-08afe169><rect${ssrRenderAttr("x", unref(rectX) + unref(width2))}${ssrRenderAttr("y", unref(rectY) + 9)}${ssrRenderAttr("width", unref(width1))}${ssrRenderAttr("height", 33)} fill="green" data-v-08afe169></rect><rect${ssrRenderAttr("x", unref(rectX))}${ssrRenderAttr("y", unref(rectY) + 9)}${ssrRenderAttr("width", unref(width2))}${ssrRenderAttr("height", 33)} fill="yellow" data-v-08afe169></rect></g>`);
      }
      _push(`<rect style="${ssrRenderStyle(props.taskD.selected ? null : { display: "none" })}"${ssrRenderAttr("x", unref(rectX) + unref(width))}${ssrRenderAttr("y", unref(rectY) + 9)}${ssrRenderAttr("width", 10)}${ssrRenderAttr("height", 33)} data-v-08afe169></rect><!--[-->`);
      ssrRenderList(props.taskD.dependency, (next) => {
        _push(ssrRenderComponent(_component_ProjectTaskRelationLine, {
          width: unref(width),
          next,
          bWidth: props.bWidth,
          moveX: unref(moveX)
        }, null, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/TaskRect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-08afe169"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TaskRect-42614196.mjs.map

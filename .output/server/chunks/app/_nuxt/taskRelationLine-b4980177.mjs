import { computed, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "taskRelationLine",
  __ssrInlineRender: true,
  props: ["next", "bWidth", "moveX"],
  setup(__props) {
    const props = __props;
    const next = computed({
      get: () => {
        return convertCord(props.next.coordinate, -props.moveX);
      }
    });
    function convertCord(next2, X) {
      let x1 = next2.x1 - 9 - X;
      let y1 = next2.y1;
      let x2 = next2.x2 + 9 - X;
      let y2 = next2.y2 + y1;
      let points = x1 + "," + y1 + " ";
      points += (x1 + x2) / 2 + "," + y1 + " ";
      points += (x1 + x2) / 2 + "," + y2 + " ";
      points += x2 + "," + y2;
      return {
        points,
        cx: x2,
        cy: y2,
        x1,
        y1
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<g${ssrRenderAttrs(_attrs)} data-v-9c41ed3c><circle r="5"${ssrRenderAttr("cx", unref(next).x1)}${ssrRenderAttr("cy", unref(next).y1)} class="nextTaskRelation" style="${ssrRenderStyle({ "fill": "yellow" })}" data-v-9c41ed3c></circle><defs data-v-9c41ed3c><marker id="Triangle" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="3" markerHeight="3" orient="auto" fill="#2a602c" data-v-9c41ed3c><path d="M 0 0 L 10 5 L 0 10 z" data-v-9c41ed3c></path></marker></defs><polyline${ssrRenderAttr("points", unref(next).points)} class="nextTaskRelation" marker-end="url(#Triangle)" data-v-9c41ed3c></polyline></g>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/taskRelationLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c41ed3c"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=taskRelationLine-b4980177.mjs.map

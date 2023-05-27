import { ref, unref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "bottomBarRightSide",
  __ssrInlineRender: true,
  setup(__props) {
    const time = ref(1e3);
    const todayNow = ref(time);
    let interval = setInterval(() => {
      getTime();
    }, 1e3);
    setTimeout(() => {
      clearInterval(interval);
    }, 1e6);
    function getTime() {
      return time.value--;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span>\uD658\uC601\uD569\uB2C8\uB2E4. </span><span class="p-menuitem-text">CoreQ\u207A\uB97C \uC0AC\uC6A9\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.</span><span>\uC885\uB8CC\uC2DC\uAC04 : ${ssrInterpolate(unref(todayNow))}</span><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bottomBarRightSide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bottomBarRightSide-e6f86342.mjs.map

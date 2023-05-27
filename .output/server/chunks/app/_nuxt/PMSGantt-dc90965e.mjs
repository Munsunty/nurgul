import __nuxt_component_0 from './TaskRect-42614196.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './taskRelationLine-b4980177.mjs';
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

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class TaskI {
  constructor(param, index) {
    __publicField(this, "id");
    __publicField(this, "name");
    __publicField(this, "date");
    __publicField(this, "duration");
    __publicField(this, "dependency");
    __publicField(this, "column");
    __publicField(this, "columnKey");
    __publicField(this, "columnValue");
    __publicField(this, "index");
    __publicField(this, "selected");
    __publicField(this, "manager");
    __publicField(this, "progress");
    __publicField(this, "endDate");
    this.id = param.id;
    this.name = param.name;
    this.date = param.date;
    this.duration = param.duration;
    this.dependency = param.dependency;
    this.manager = param.manager;
    this.progress = param.progress;
    this.endDate = this.getEndDate();
    this.columnKey = this.getColumnKey();
    this.columnValue = this.duration;
    this.column = this.getColumn();
    this.index = index;
    this.selected = false;
  }
  reConstructor(param) {
    this.id = param.id;
    this.name = param.name;
    this.date = param.date;
    this.duration = param.duration;
    this.dependency = param.dependency;
    this.manager = param.manager;
    this.progress = param.progress;
    this.endDate = this.getEndDate();
    this.columnKey = this.getColumnKey();
    this.columnValue = this.duration;
    this.column = this.getColumn();
    this.selected = false;
  }
  getEndDate() {
    return this.endDate = this.date + this.duration - 1;
  }
  getColumnKey() {
    return this.date + "th";
  }
  getColumn() {
    return { [this.columnKey]: this.columnValue };
  }
  changeDate(date) {
    this.date = date;
    this.endDate = this.getEndDate();
    this.columnKey = this.getColumnKey();
    this.column = this.getColumn();
  }
  changeDuration(duration) {
    this.duration = duration;
    this.endDate = this.getEndDate();
    this.columnValue = duration;
    this.column = this.getColumn();
  }
}
class TaskDataModel {
  constructor(Arr, width, height) {
    __publicField(this, "tasks");
    __publicField(this, "taskSet");
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "_get");
    __publicField(this, "_add");
    __publicField(this, "_delete");
    __publicField(this, "_reIndex");
    __publicField(this, "_clearUndefined");
    this.tasks = [];
    this.taskSet = /* @__PURE__ */ new Set();
    this.width = width;
    this.height = height;
    let t = this;
    Arr.forEach((task) => {
      t.add(task);
    });
    this.tasks.filter((tasks) => tasks.dependency).forEach(
      (task) => t.calculatorCoordT(task)
    );
    this._get = this.get;
    this._add = this.add;
    this._delete = this.delete;
    this._clearUndefined = (id) => {
      t.taskSet.delete(void 0);
      t.taskSet.add(id);
    };
  }
  get() {
    return this.tasks;
  }
  add(param) {
    if (!this.taskSet.has(param.id)) {
      this.taskSet.add(param.id);
      this.tasks.push(new TaskI(param, this.tasks.length));
    }
  }
  delete(id) {
    if (this.taskSet.has(id)) {
      let target = this.tasks.find((task) => task.id === id);
      if (target instanceof TaskI) {
        this.tasks.splice(target.index, 1);
        this.reIndex();
      }
    }
  }
  reIndex() {
    this.tasks.forEach((task, idx) => {
      task.index = idx;
    });
  }
  findTask(id) {
    if (this.taskSet.has(id)) {
      return this.tasks.find((task) => task.id === id);
    }
  }
  changeDateTask(task, moveDate) {
    task.changeDate(moveDate);
    if (task.dependency instanceof Array) {
      this.calculatorCoordT(task);
    }
    this.reArrangeCoord(task);
  }
  changeDurationTask(task, duration) {
    task.changeDuration(duration);
    if (task.dependency instanceof Array) {
      this.calculatorCoordT(task);
    }
    this.reArrangeCoord(task);
  }
  calculatorCoord(task, width, height) {
    this.width = width;
    this.height = height;
    this.calculatorCoordT(task);
  }
  calculatorCoordT(task) {
    let t = this;
    task.dependency.forEach((node) => {
      let nextTask = t.findTask(node.id);
      if (nextTask instanceof TaskI) {
        node.coordinate = {
          x1: (task.duration + task.date - 1) * t.width,
          y1: 25 + task.index * t.height,
          x2: (nextTask.date - 1) * t.width,
          y2: (nextTask.index - task.index) * t.height
        };
        node.origin = {
          x1: node.coordinate.x1,
          y1: node.coordinate.y1,
          x2: node.coordinate.x2,
          y2: node.coordinate.y2
        };
      }
    });
  }
  moveCoord(task, moveX) {
    if (task.dependency instanceof Array) {
      task.dependency.forEach((node) => {
        node.coordinate.x2 = node.origin.x2 - moveX;
      });
    }
    this.tasks.filter((n) => n.dependency).forEach((nextTask) => {
      nextTask.dependency.filter((nT) => nT.id == task.id).forEach((node) => {
        node.coordinate.x2 = node.origin.x2 + moveX;
      });
    });
  }
  moveCoord2(task, moveWidth) {
    if (task.dependency instanceof Array) {
      task.dependency.forEach((node) => {
        node.coordinate.x1 = node.origin.x1 + moveWidth;
      });
    }
  }
  reArrangeCoord(task) {
    let t = this;
    this.tasks.filter((n) => n.dependency).forEach((prevTask) => {
      if (prevTask.dependency.filter((nT) => nT.id == task.id).length > 0) {
        t.calculatorCoordT(prevTask);
      }
    });
  }
}
const tablePrevWidth = 570;
const divHeight = 50;
const THeadHeight = 114;
const _sfc_main = {
  __name: "PMSGantt",
  __ssrInlineRender: true,
  props: ["fromPage"],
  setup(__props) {
    const tableHeight = ref(window.innerHeight - 200);
    const screenSize = ref([window.innerWidth - tablePrevWidth - 2, tableHeight.value - THeadHeight]);
    const width = ref(70);
    const value1 = ref(0);
    const divStyle = ref({
      "max-width": width.value + "px",
      "min-width": width.value + "px",
      width: width.value + "px"
    });
    const columnH = computed({
      get: () => {
        return columns.value.slice(value1.value, value1.value + parseInt(screenSize.value[0] / width.value + 2));
      }
    });
    const columns = ref([]);
    for (let i = 0; i < 100 + parseInt(screenSize.value[0] / width.value + 2); i++) {
      columns.value.push(
        {
          field: i + 1 + "th",
          header: i + 1 + "th",
          date: getDatesStartToLast(i)
        }
      );
    }
    function getDatesStartToLast(add) {
      var curDate = /* @__PURE__ */ new Date();
      curDate.setDate(curDate.getDate() + add);
      return curDate.getMonth() + 1 + "-" + curDate.getDate();
    }
    const products = ref(new TaskDataModel([
      { id: 1, name: "Task-1", date: 40, progress: 50, duration: 1, dependency: [{ id: 14 }] },
      { id: 2, name: "Task-2", date: 6, progress: 100, duration: 5 },
      { id: 3, name: "Task-3", date: 6, progress: 100, duration: 5, dependency: [{ id: 4 }] },
      { id: 4, name: "Task-4", date: 11, progress: 100, duration: 4, dependency: [{ id: 7 }] },
      { id: 5, name: "Task-5", date: 27, progress: 100, duration: 10 },
      { id: 6, name: "Task-6", date: 1, progress: 100, duration: 5, dependency: [{ id: 2 }, { id: 3 }] },
      { id: 7, name: "Task-7", date: 15, progress: 100, duration: 3, dependency: [{ id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }] },
      { id: 8, name: "Task-8", date: 37, progress: 100, duration: 3 },
      { id: 9, name: "Task-9", date: 18, progress: 100, duration: 9 },
      { id: 10, name: "Task-10", date: 18, progress: 100, duration: 9 },
      { id: 11, name: "Task-11", date: 18, progress: 100, duration: 9 },
      { id: 12, name: "Task-12", date: 18, progress: 100, duration: 9 },
      { id: 13, name: "Task-13", date: 18, progress: 100, duration: 9 },
      { id: 14, name: "Task-14", date: 41, progress: 0, duration: 9 },
      {}
    ], width.value, divHeight));
    const variableTasks = computed({
      get: () => {
        return products.value.tasks;
      }
    });
    const gridStyle = ref({
      position: "absolute",
      left: tablePrevWidth + "px",
      top: THeadHeight + "px",
      width: "calc(100vw - " + tablePrevWidth + "px)",
      height: "inherit",
      "max-height": "calc(" + tableHeight.value + "px - " + THeadHeight + "px)"
    });
    const sliderStyle = ref({
      left: tablePrevWidth + "px",
      width: "calc(100vw - " + tablePrevWidth + "px )"
    });
    const idCnt = ref(products.value.tasks.length);
    const onCellEditComplete = (event) => {
      let { data, newValue, field } = event;
      if (typeof data.id == "undefined") {
        if (field == "name" && typeof newValue === "string") {
          let param = { id: idCnt.value, name: idCnt, date: 1, duration: 1, progress: 0 };
          param[field] = newValue;
          data.reConstructor(param);
          products.value._clearUndefined(param.id);
          products.value._add({});
          idCnt.value++;
        } else {
          return;
        }
      } else {
        switch (field) {
          case "date":
            products.value.changeDateTask(data, newValue);
            break;
          case "duration":
            products.value.changeDurationTask(data, newValue);
            break;
          case "endDate":
            let changeDuration = newValue - data.date + 1;
            products.value.changeDurationTask(data, changeDuration > 0 ? changeDuration : 1);
            break;
          default:
            data[field] = newValue;
            break;
        }
      }
    };
    const scrollY = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DataTable = resolveComponent("DataTable");
      const _component_ColumnGroup = resolveComponent("ColumnGroup");
      const _component_Row = resolveComponent("Row");
      const _component_Column = resolveComponent("Column");
      const _component_InputText = resolveComponent("InputText");
      const _component_Button = resolveComponent("Button");
      const _component_InputNumber = resolveComponent("InputNumber");
      const _component_ProjectTaskRect = __nuxt_component_0;
      const _component_Slider = resolveComponent("Slider");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card",
        style: { "position": "absolute", "top": "50px" }
      }, _attrs))} data-v-2709236c><div id="PMSGanttChart" style="${ssrRenderStyle({ "height": "100%" })}" data-v-2709236c>`);
      _push(ssrRenderComponent(_component_DataTable, {
        value: unref(products).tasks,
        class: "p-datatable-sm",
        showGridlines: true,
        editMode: "cell",
        onCellEditComplete
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ColumnGroup, { type: "header" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "Task\uBA85",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2",
                          class: "p-frozen-column"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "\uC2DC\uC791\uC77C",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "\uAE30\uAC04",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin1"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "\uC885\uB8CC\uC77C",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "\uB2F4\uB2F9\uC790",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "\uC9C4\uD589\uB960",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Column, {
                          header: "2022",
                          colspan: unref(columnH).length
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Column, {
                            header: "Task\uBA85",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin2",
                            class: "p-frozen-column"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "\uC2DC\uC791\uC77C",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin2"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "\uAE30\uAC04",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin1"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "\uC885\uB8CC\uC77C",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin2"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "\uB2F4\uB2F9\uC790",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin2"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "\uC9C4\uD589\uB960",
                            rowspan: unref(columnH).length,
                            "header-class": "widthMin2"
                          }, null, 8, ["rowspan"]),
                          createVNode(_component_Column, {
                            header: "2022",
                            colspan: unref(columnH).length
                          }, null, 8, ["colspan"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(columnH), (col) => {
                          _push4(ssrRenderComponent(_component_Column, {
                            header: col.date,
                            style: unref(divStyle)
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                            return openBlock(), createBlock(_component_Column, {
                              header: col.date,
                              style: unref(divStyle)
                            }, null, 8, ["header", "style"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Row, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(columnH), (col) => {
                          _push4(ssrRenderComponent(_component_Column, {
                            header: col.header,
                            style: unref(divStyle)
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                            return openBlock(), createBlock(_component_Column, {
                              header: col.header,
                              style: unref(divStyle)
                            }, null, 8, ["header", "style"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Row, null, {
                      default: withCtx(() => [
                        createVNode(_component_Column, {
                          header: "Task\uBA85",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2",
                          class: "p-frozen-column"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "\uC2DC\uC791\uC77C",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "\uAE30\uAC04",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin1"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "\uC885\uB8CC\uC77C",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "\uB2F4\uB2F9\uC790",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "\uC9C4\uD589\uB960",
                          rowspan: unref(columnH).length,
                          "header-class": "widthMin2"
                        }, null, 8, ["rowspan"]),
                        createVNode(_component_Column, {
                          header: "2022",
                          colspan: unref(columnH).length
                        }, null, 8, ["colspan"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                          return openBlock(), createBlock(_component_Column, {
                            header: col.date,
                            style: unref(divStyle)
                          }, null, 8, ["header", "style"]);
                        }), 256))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_Row, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                          return openBlock(), createBlock(_component_Column, {
                            header: col.header,
                            style: unref(divStyle)
                          }, null, 8, ["header", "style"]);
                        }), 256))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "name",
              "body-class": "widthMin2",
              frozen: ""
            }, {
              editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputText, {
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputText, {
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (slotProps.data.id) {
                    _push3(`<span data-v-2709236c${_scopeId2}>${ssrInterpolate(slotProps.data.name)}</span>`);
                  } else {
                    _push3(ssrRenderComponent(_component_Button, {
                      type: "button",
                      icon: "pi pi-plus",
                      class: "mr-2"
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    slotProps.data.id ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(slotProps.data.name), 1)) : (openBlock(), createBlock(_component_Button, {
                      key: 1,
                      type: "button",
                      icon: "pi pi-plus",
                      class: "mr-2"
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "date",
              "body-class": "widthMin2",
              frozen: ""
            }, {
              editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.id) {
                    _push3(ssrRenderComponent(_component_InputNumber, {
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    data.id ? (openBlock(), createBlock(_component_InputNumber, {
                      key: 0,
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "duration",
              "body-class": "widthMin1",
              frozen: ""
            }, {
              editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.id) {
                    _push3(ssrRenderComponent(_component_InputNumber, {
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    data.id ? (openBlock(), createBlock(_component_InputNumber, {
                      key: 0,
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "endDate",
              "body-class": "widthMin2",
              frozen: ""
            }, {
              editor: withCtx(({ data, field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (data.id) {
                    _push3(ssrRenderComponent(_component_InputNumber, {
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    data.id ? (openBlock(), createBlock(_component_InputNumber, {
                      key: 0,
                      inputId: "integeronly",
                      modelValue: data[field],
                      "onUpdate:modelValue": ($event) => data[field] = $event,
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: "\uB2F4\uB2F9\uC790",
              field: "manager",
              "body-class": "widthMin2"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              header: "\uC9C4\uD589\uB960",
              field: "progress",
              "body-class": "widthMin2"
            }, null, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(unref(columns), (col) => {
              _push2(ssrRenderComponent(_component_Column, {
                field: col.field,
                header: col.header,
                key: col.id,
                style: unref(divStyle)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_ColumnGroup, { type: "header" }, {
                default: withCtx(() => [
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      createVNode(_component_Column, {
                        header: "Task\uBA85",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin2",
                        class: "p-frozen-column"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "\uC2DC\uC791\uC77C",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin2"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "\uAE30\uAC04",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin1"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "\uC885\uB8CC\uC77C",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin2"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "\uB2F4\uB2F9\uC790",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin2"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "\uC9C4\uD589\uB960",
                        rowspan: unref(columnH).length,
                        "header-class": "widthMin2"
                      }, null, 8, ["rowspan"]),
                      createVNode(_component_Column, {
                        header: "2022",
                        colspan: unref(columnH).length
                      }, null, 8, ["colspan"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                        return openBlock(), createBlock(_component_Column, {
                          header: col.date,
                          style: unref(divStyle)
                        }, null, 8, ["header", "style"]);
                      }), 256))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Row, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(columnH), (col) => {
                        return openBlock(), createBlock(_component_Column, {
                          header: col.header,
                          style: unref(divStyle)
                        }, null, 8, ["header", "style"]);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "name",
                "body-class": "widthMin2",
                frozen: ""
              }, {
                editor: withCtx(({ data, field }) => [
                  createVNode(_component_InputText, {
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                body: withCtx((slotProps) => [
                  slotProps.data.id ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(slotProps.data.name), 1)) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    icon: "pi pi-plus",
                    class: "mr-2"
                  }))
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "date",
                "body-class": "widthMin2",
                frozen: ""
              }, {
                editor: withCtx(({ data, field }) => [
                  data.id ? (openBlock(), createBlock(_component_InputNumber, {
                    key: 0,
                    inputId: "integeronly",
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "duration",
                "body-class": "widthMin1",
                frozen: ""
              }, {
                editor: withCtx(({ data, field }) => [
                  data.id ? (openBlock(), createBlock(_component_InputNumber, {
                    key: 0,
                    inputId: "integeronly",
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "endDate",
                "body-class": "widthMin2",
                frozen: ""
              }, {
                editor: withCtx(({ data, field }) => [
                  data.id ? (openBlock(), createBlock(_component_InputNumber, {
                    key: 0,
                    inputId: "integeronly",
                    modelValue: data[field],
                    "onUpdate:modelValue": ($event) => data[field] = $event,
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                header: "\uB2F4\uB2F9\uC790",
                field: "manager",
                "body-class": "widthMin2"
              }),
              createVNode(_component_Column, {
                header: "\uC9C4\uD589\uB960",
                field: "progress",
                "body-class": "widthMin2"
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(columns), (col) => {
                return openBlock(), createBlock(_component_Column, {
                  field: col.field,
                  header: col.header,
                  key: col.id,
                  style: unref(divStyle)
                }, null, 8, ["field", "header", "style"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div id="TaskSVGrid" style="${ssrRenderStyle(unref(gridStyle))}" data-v-2709236c><svg${ssrRenderAttr("width", unref(screenSize)[0] + "px")}${ssrRenderAttr("height", unref(screenSize)[1] + "px")} data-v-2709236c><svg width="10000px" height="10000px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"${ssrRenderAttr("y", unref(scrollY))}${ssrRenderAttr("x", -unref(value1) * unref(width))} style="${ssrRenderStyle({ "transition": "y 1s ease-out" })}" data-v-2709236c><!--[-->`);
      ssrRenderList(unref(variableTasks), (task) => {
        _push(`<svg data-v-2709236c>`);
        if (task.id) {
          _push(ssrRenderComponent(_component_ProjectTaskRect, {
            taskD: task,
            taskList: unref(products),
            bWidth: unref(width)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</svg>`);
      });
      _push(`<!--]--></svg></svg></div></div><div class="card" id="sliderBar" data-v-2709236c>`);
      _push(ssrRenderComponent(_component_Slider, {
        modelValue: unref(value1),
        "onUpdate:modelValue": ($event) => isRef(value1) ? value1.value = $event : null,
        style: unref(sliderStyle)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project/PMSGantt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PMSGantt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2709236c"]]);

export { PMSGantt as default };
//# sourceMappingURL=PMSGantt-dc90965e.mjs.map

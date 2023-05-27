import _sfc_main$1 from './partInfoDialog-df9c15c0.mjs';
import { ref, computed, resolveComponent, unref, isRef, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, resolveDynamicComponent, useSSRContext, h } from 'vue';
import { _ as _export_sfc, u as useState } from '../server.mjs';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
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

const searchTableData = [
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000000",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C\u2161_HI -20K_SKD",
    spec: "\uAC70\uAFB8\uB85C\u2161_HI -20K",
    isDocument: false,
    unit: null,
    erpCode: "A91E120028",
    partNumber: "K1110-0001-00",
    id: "VPR0009941",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-10HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-10HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620065",
    partNumber: "K1111-0001-00",
    id: "VPR0009942",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-13HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-13HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620067",
    partNumber: "K1111-0002-00",
    id: "VPR0009943",
    createDate: "2022/02/05"
  },
  {
    approveDate: "",
    is3D: true,
    originator: "USR0000000",
    version: "W",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-16HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-16HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620069",
    partNumber: "K1111-0003-00",
    id: "VPR0020955",
    createDate: "2022/07/13"
  },
  {
    approveDate: "",
    is3D: true,
    originator: "USR0000000",
    version: "W",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-16HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-16HWN111",
    isDocument: false,
    unit: null,
    erpCode: null,
    partNumber: "K1111-0003-01",
    id: "VPR0020958",
    createDate: "2022/07/13"
  },
  {
    approveDate: "",
    is3D: true,
    originator: "USR0000000",
    version: "W",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-16HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-16HWN33333",
    isDocument: false,
    unit: null,
    erpCode: null,
    partNumber: "K1111-0003-02",
    id: "VPR0020959",
    createDate: "2022/07/13"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-20HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-20HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620071",
    partNumber: "K1111-0004-00",
    id: "VPR0009945",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-25HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-25HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620073",
    partNumber: "K1111-0005-00",
    id: "VPR0009946",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85CIN-ECO \uD50C\uB7EC\uC2A4-30HWN",
    spec: "\uAC70\uAFB8\uB85CIN-eco \uD50C\uB7EC\uC2A4-30HWN",
    isDocument: false,
    unit: null,
    erpCode: "A211620075",
    partNumber: "K1111-0006-00",
    id: "VPR0009947",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700166",
    partNumber: "K1111-0007-00",
    id: "VPR0009948",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700168",
    partNumber: "K1111-0008-00",
    id: "VPR0010108",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700170",
    partNumber: "K1111-0009-00",
    id: "VPR0010109",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700172",
    partNumber: "K1111-0010-00",
    id: "VPR0010110",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700174",
    partNumber: "K1111-0011-00",
    id: "VPR0010111",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HW(LNG,FF,CTR\uC81C\uC678)",
    isDocument: false,
    unit: null,
    erpCode: "A211700196",
    partNumber: "K1111-0012-00",
    id: "VPR0010112",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HW(LNG,FF,CTR\uC81C\uC678)",
    isDocument: false,
    unit: null,
    erpCode: "A211700198",
    partNumber: "K1111-0013-00",
    id: "VPR0010113",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HW(LNG,FF,CTR\uC81C\uC678)",
    isDocument: false,
    unit: null,
    erpCode: "A211700200",
    partNumber: "K1111-0014-00",
    id: "VPR0010114",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HW(LNG,FF,CTR\uC81C\uC678)",
    isDocument: false,
    unit: null,
    erpCode: "A211700202",
    partNumber: "K1111-0015-00",
    id: "VPR0010115",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HW(LNG,FF,CTR\uC81C\uC678)",
    isDocument: false,
    unit: null,
    erpCode: "A211700204",
    partNumber: "K1111-0016-00",
    id: "VPR0010116",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17H",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17H(LNG,FF,\uB300\uB9AC\uC810\uC6A9)(\uC628\uC218\uC99D\uB300X)",
    isDocument: false,
    unit: null,
    erpCode: "A211700226",
    partNumber: "K1111-0017-00",
    id: "VPR0010117",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26H",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26H(LNG,FF,\uB300\uB9AC\uC810\uC6A9)(\uC628\uC218\uC99D\uB300X)",
    isDocument: false,
    unit: null,
    erpCode: "A211700227",
    partNumber: "K1111-0018-00",
    id: "VPR0010118",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-14HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-14HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700238",
    partNumber: "K1111-0019-00",
    id: "VPR0010119",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-17HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-17HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700240",
    partNumber: "K1111-0020-00",
    id: "VPR0010120",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-21HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-21HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700242",
    partNumber: "K1111-0021-00",
    id: "VPR0010121",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-26HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-26HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700244",
    partNumber: "K1111-0022-00",
    id: "VPR0010122",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-30HW",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4 \uD504\uB9AC\uBBF8\uC5C4-30HW(LNG,FF,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700246",
    partNumber: "K1111-0023-00",
    id: "VPR0010123",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HWN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710192",
    partNumber: "K1111-0024-00",
    id: "VPR0010124",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HWN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710194",
    partNumber: "K1111-0025-00",
    id: "VPR0010125",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HWN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710196",
    partNumber: "K1111-0026-00",
    id: "VPR0010126",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HWN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710198",
    partNumber: "K1111-0027-00",
    id: "VPR0010127",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HWN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710200",
    partNumber: "K1111-0028-00",
    id: "VPR0010128",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HWN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710202",
    partNumber: "K1111-0029-00",
    id: "VPR0010129",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HWN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710204",
    partNumber: "K1111-0030-00",
    id: "VPR0010130",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HWN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710206",
    partNumber: "K1111-0031-00",
    id: "VPR0010131",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HWN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HWN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710208",
    partNumber: "K1111-0032-00",
    id: "VPR0010132",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710232",
    partNumber: "K1111-0033-00",
    id: "VPR0010133",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710234",
    partNumber: "K1111-0034-00",
    id: "VPR0010134",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710236",
    partNumber: "K1111-0035-00",
    id: "VPR0010135",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HN(\uB2E4\uB2E8\uD38C\uD504\uD615)",
    isDocument: false,
    unit: null,
    erpCode: "A211710238",
    partNumber: "K1111-0036-00",
    id: "VPR0010136",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710240",
    partNumber: "K1111-0037-00",
    id: "VPR0007365",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710242",
    partNumber: "K1111-0038-00",
    id: "VPR0007366",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-21HN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710244",
    partNumber: "K1111-0039-00",
    id: "VPR0007367",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-26HN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710246",
    partNumber: "K1111-0040-00",
    id: "VPR0007368",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HN",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-30HN(\uD2B9\uD310)",
    isDocument: false,
    unit: null,
    erpCode: "A211710248",
    partNumber: "K1111-0041-00",
    id: "VPR0007369",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW \uCF58\uB374\uC2F1 L10 - 18HFN",
    spec: "\uAC70\uAFB8\uB85C NEW \uCF58\uB374\uC2F1 L10 - 18HFN",
    isDocument: false,
    unit: null,
    erpCode: "A211740001",
    partNumber: "K1111-0042-00",
    id: "VPR0007370",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW \uCF58\uB374\uC2F1 L10 - 22HFN",
    spec: "\uAC70\uAFB8\uB85C NEW \uCF58\uB374\uC2F1 L10 - 22HFN",
    isDocument: false,
    unit: null,
    erpCode: "A211740003",
    partNumber: "K1111-0043-00",
    id: "VPR0007371",
    createDate: "2022/02/05"
  },
  {
    approveDate: "",
    is3D: true,
    originator: "USR0000000",
    version: "W",
    is2D: true,
    partName: "GAS BOILER",
    spec: "3456789098765432123456",
    isDocument: false,
    unit: null,
    erpCode: null,
    partNumber: "K1111-0044-00",
    id: "VPR0020960",
    createDate: "2022/07/13"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uBD84\uB9AC\uD615-150G,\uAE09\uD0D5",
    spec: "\uBD84\uB9AC\uD615-150G,\uAE09\uD0D5",
    isDocument: false,
    unit: null,
    erpCode: "A111700004",
    partNumber: "K1112-0001-00",
    id: "VPR0007372",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HE",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-14HE(LNG,FE,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700228",
    partNumber: "K1112-0002-00",
    id: "VPR0007549",
    createDate: "2022/02/05"
  },
  {
    approveDate: "2022/02/05",
    is3D: true,
    originator: "USR0000267",
    version: "00",
    is2D: true,
    partName: "GAS BOILER, \uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HE",
    spec: "\uAC70\uAFB8\uB85C NEW\uCF58\uB374\uC2F1 \uD50C\uB7EC\uC2A4-17HE(LNG,FE,\uB300\uB9AC\uC810\uC6A9)",
    isDocument: false,
    unit: null,
    erpCode: "A211700230",
    partNumber: "K1112-0003-00",
    id: "VPR0007550",
    createDate: "2022/02/05"
  }
];
const showDialogInfo = (opt, check) => {
  if (check) {
    const data = useState(opt.dialog, () => []);
    return data;
  } else {
    return useState(opt.dialog, "$8NDolBsWc9").value[0] = h(opt.resovle);
  }
};
let constCart = "none";
let working = false;
let selectedSet = /* @__PURE__ */ new Set();
const activateCart = (name) => {
  resetCart();
  constCart = name;
  working = true;
};
const addCart = (list, name) => {
  if (working && name == constCart) {
    list.filter((item) => !selectedSet.has(item["id"])).forEach((item) => {
      selectedSet.add(item["id"]);
      useState("cart").value.push(item);
    });
    return;
  } else {
    return;
  }
};
function resetCart() {
  constCart = "none";
  working = false;
  selectedSet = /* @__PURE__ */ new Set();
}
const _sfc_main = {
  __name: "partSearch",
  __ssrInlineRender: true,
  props: ["fromPage", "permit"],
  setup(__props) {
    const props = __props;
    const asdf = (node) => {
      console.log(node);
    };
    const selectedProducts = ref(null);
    const setting = {
      default: !props.permit.bom,
      create: props.permit.create,
      add: props.permit.add,
      selection: props.permit.bom
    };
    if (setting.selection) {
      activateCart(props.fromPage);
    }
    computed({
      get: () => {
        return "_partSearch";
      },
      set: () => {
        console.log("sdaf");
      }
    });
    const products = useState("products", () => {
      return searchTableData;
    });
    ref(0);
    showDialogInfo({
      dialog: "partSearchComp"
    }, true);
    const showPartInfo = (node) => {
      showDialogInfo({
        dialog: "partSearchComp",
        resovle: h(_sfc_main$1)
      }, false);
      useState("PartInfo").value = {
        display: true,
        node
      };
    };
    const partSearchComponent = computed({
      get: () => {
        return useState("partSearchComp").value[0];
      },
      set: (value) => {
      }
    });
    const addCartForBOM = () => {
      let result = selectedProducts.value;
      addCart(result, props.fromPage);
      selectedProducts.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DataTable = resolveComponent("DataTable");
      const _component_Column = resolveComponent("Column");
      const _component_Button = resolveComponent("Button");
      _push(`<!--[--><div class="card" style="${ssrRenderStyle({ "width": "100%", "height": "100%" })}" data-v-f4077ab0>`);
      _push(ssrRenderComponent(_component_DataTable, {
        value: unref(products),
        scrollable: true,
        scrollHeight: "flex",
        resizableColumns: true,
        columnResizeMode: setting.default ? "expand" : "fit",
        showGridlines: "",
        class: "p-datatable-products",
        paginator: true,
        rows: 20,
        rowsPerPageOptions: [10, 20, 50],
        selection: unref(selectedProducts),
        "onUpdate:selection": ($event) => isRef(selectedProducts) ? selectedProducts.value = $event : null,
        selectionMode: "multiple",
        dataKey: "id",
        metaKeySelection: false
      }, {
        paginatorstart: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, {
              type: "button",
              icon: "pi pi-refresh",
              class: "p-button-text"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, {
                type: "button",
                icon: "pi pi-refresh",
                class: "p-button-text"
              })
            ];
          }
        }),
        paginatorend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (setting.selection) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                icon: "pi pi-cart-plus",
                class: "p-button-text",
                onClick: ($event) => addCartForBOM()
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              setting.selection ? (openBlock(), createBlock(_component_Button, {
                key: 0,
                type: "button",
                icon: "pi pi-cart-plus",
                class: "p-button-text",
                onClick: ($event) => addCartForBOM()
              }, null, 8, ["onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (setting.selection) {
              _push2(ssrRenderComponent(_component_Column, {
                selectionMode: "multiple",
                style: { "max-width": "5%" }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Column, {
              header: "\uC21C\uBC88",
              "body-class": "pstCenter pstCol3",
              "header-class": "pstCenter pstCol3",
              style: { "max-width": "5%" }
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-f4077ab0${_scopeId2}>${ssrInterpolate(slotProps.index + 1)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      onClick: ($event) => asdf(slotProps)
                    }, toDisplayString(slotProps.index + 1), 9, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "partNumber",
              header: "\uD488\uBC88",
              "body-class": "pstLeft pstCol1",
              "header-class": "pstCenter pstCol1"
            }, {
              body: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "color": "blue", "cursor": "pointer" })}" data-v-f4077ab0${_scopeId2}>${ssrInterpolate(slotProps.data.partNumber)}</div>`);
                } else {
                  return [
                    createVNode("div", {
                      onClick: ($event) => showPartInfo(slotProps),
                      style: { "color": "blue", "cursor": "pointer" }
                    }, toDisplayString(slotProps.data.partNumber), 9, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "partName",
              header: "\uD488\uBA85",
              "body-class": "pstCenter pstCol0",
              "header-class": "pstCenter pstCol0"
            }, null, _parent2, _scopeId));
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "spec",
                header: "\uADDC\uACA9",
                "body-class": "pstCenter pstCol0",
                "header-class": "pstCenter pstCol0"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Column, {
              field: "originator",
              header: "\uB4F1\uB85D\uC790",
              "body-class": "pstCenter pstCol2",
              "header-class": "pstCenter pstCol2"
            }, null, _parent2, _scopeId));
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "createDate",
                header: "\uB4F1\uB85D\uC77C",
                "body-class": "pstCenter pstCol2",
                "header-class": "pstCenter pstCol2"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "approveDate",
                header: "\uC2B9\uC778\uC77C",
                "body-class": "pstCenter pstCol2",
                "header-class": "pstCenter pstCol2"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "isDocument",
                header: "\uBB38\uC11C",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "is2D",
                header: "2D",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (setting.default) {
              _push2(ssrRenderComponent(_component_Column, {
                field: "is3D",
                header: "3D",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              setting.selection ? (openBlock(), createBlock(_component_Column, {
                key: 0,
                selectionMode: "multiple",
                style: { "max-width": "5%" }
              })) : createCommentVNode("", true),
              createVNode(_component_Column, {
                header: "\uC21C\uBC88",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3",
                style: { "max-width": "5%" }
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", {
                    onClick: ($event) => asdf(slotProps)
                  }, toDisplayString(slotProps.index + 1), 9, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "partNumber",
                header: "\uD488\uBC88",
                "body-class": "pstLeft pstCol1",
                "header-class": "pstCenter pstCol1"
              }, {
                body: withCtx((slotProps) => [
                  createVNode("div", {
                    onClick: ($event) => showPartInfo(slotProps),
                    style: { "color": "blue", "cursor": "pointer" }
                  }, toDisplayString(slotProps.data.partNumber), 9, ["onClick"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "partName",
                header: "\uD488\uBA85",
                "body-class": "pstCenter pstCol0",
                "header-class": "pstCenter pstCol0"
              }),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 1,
                field: "spec",
                header: "\uADDC\uACA9",
                "body-class": "pstCenter pstCol0",
                "header-class": "pstCenter pstCol0"
              })) : createCommentVNode("", true),
              createVNode(_component_Column, {
                field: "originator",
                header: "\uB4F1\uB85D\uC790",
                "body-class": "pstCenter pstCol2",
                "header-class": "pstCenter pstCol2"
              }),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 2,
                field: "createDate",
                header: "\uB4F1\uB85D\uC77C",
                "body-class": "pstCenter pstCol2",
                "header-class": "pstCenter pstCol2"
              })) : createCommentVNode("", true),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 3,
                field: "approveDate",
                header: "\uC2B9\uC778\uC77C",
                "body-class": "pstCenter pstCol2",
                "header-class": "pstCenter pstCol2"
              })) : createCommentVNode("", true),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 4,
                field: "isDocument",
                header: "\uBB38\uC11C",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              })) : createCommentVNode("", true),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 5,
                field: "is2D",
                header: "2D",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              })) : createCommentVNode("", true),
              setting.default ? (openBlock(), createBlock(_component_Column, {
                key: 6,
                field: "is3D",
                header: "3D",
                "body-class": "pstCenter pstCol3",
                "header-class": "pstCenter pstCol3"
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(partSearchComponent)), null, null), _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/part/partSearch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4077ab0"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=partSearch-48e9a222.mjs.map

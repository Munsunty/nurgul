globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/_nuxt/IPad_Pro_12.9_3rd_gen_mockup.0aaf9dca.png": {
    "type": "image/png",
    "etag": "\"39a83-j4YPooDwetwqczJhf4RPapWsIhc\"",
    "mtime": "2023-05-27T22:43:04.224Z",
    "size": 236163,
    "path": "../public/_nuxt/IPad_Pro_12.9_3rd_gen_mockup.0aaf9dca.png"
  },
  "/_nuxt/PMSGantt.c4e16068.js": {
    "type": "application/javascript",
    "etag": "\"26bb-RmY0jblwL12BMvbQWsEH1PDPlD4\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 9915,
    "path": "../public/_nuxt/PMSGantt.c4e16068.js"
  },
  "/_nuxt/PMSGantt.e6b14b21.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"354-lKJaR60UdQnNgnQ9yqkmuP51ugQ\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 852,
    "path": "../public/_nuxt/PMSGantt.e6b14b21.css"
  },
  "/_nuxt/TaskRect.1f056bbd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bd-YIqhK5mqyEwIFvfdCxbPuip9i78\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 189,
    "path": "../public/_nuxt/TaskRect.1f056bbd.css"
  },
  "/_nuxt/TaskRect.8885232c.js": {
    "type": "application/javascript",
    "etag": "\"a54-qK21e0fsRiYX3k/FL0Ngm5QoARg\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 2644,
    "path": "../public/_nuxt/TaskRect.8885232c.js"
  },
  "/_nuxt/base.48dbc367.js": {
    "type": "application/javascript",
    "etag": "\"81-JsDuRc71N5Uq2M2NlBOTyeZ7484\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 129,
    "path": "../public/_nuxt/base.48dbc367.js"
  },
  "/_nuxt/bomAddList.655d8bf5.js": {
    "type": "application/javascript",
    "etag": "\"4be-II3Ypgu9FlwYdnZqbBuzJXv+Lls\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 1214,
    "path": "../public/_nuxt/bomAddList.655d8bf5.js"
  },
  "/_nuxt/bomAddList.9f311958.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d9-8pUwIg2+lrisHKZ4skDkkr8mCx0\"",
    "mtime": "2023-05-27T22:43:04.223Z",
    "size": 1241,
    "path": "../public/_nuxt/bomAddList.9f311958.css"
  },
  "/_nuxt/bomEditView.615ef779.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"234-lvDwCWj+l4p2/mgjc7MlRrskHUo\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 564,
    "path": "../public/_nuxt/bomEditView.615ef779.css"
  },
  "/_nuxt/bomEditView.bf23d66d.js": {
    "type": "application/javascript",
    "etag": "\"b90-+cpoeaM8XX2tel7UANT8SphCpHQ\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 2960,
    "path": "../public/_nuxt/bomEditView.bf23d66d.js"
  },
  "/_nuxt/bomOrgChart.028e3c5a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d5-rTxm+S2mkh5xhDkR4BRFMn9W40o\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 725,
    "path": "../public/_nuxt/bomOrgChart.028e3c5a.css"
  },
  "/_nuxt/bomOrgChart.f9dac667.js": {
    "type": "application/javascript",
    "etag": "\"545-PMmxl5sYGaSwv5ZtAjUjXsWrUVE\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 1349,
    "path": "../public/_nuxt/bomOrgChart.f9dac667.js"
  },
  "/_nuxt/bomPartSearchAdd.5c363bb1.js": {
    "type": "application/javascript",
    "etag": "\"a0-AyyJ3DXH/YUoBpi0LdG1HTFQnKo\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 160,
    "path": "../public/_nuxt/bomPartSearchAdd.5c363bb1.js"
  },
  "/_nuxt/bottomBarRightSide.660d88c3.js": {
    "type": "application/javascript",
    "etag": "\"1e3-JlMUBsmpx/RIk1v1hQ9qAwseepg\"",
    "mtime": "2023-05-27T22:43:04.222Z",
    "size": 483,
    "path": "../public/_nuxt/bottomBarRightSide.660d88c3.js"
  },
  "/_nuxt/clouds-7081496_1920.9712cf2c.png": {
    "type": "image/png",
    "etag": "\"1fa285-GPO5hu5XtY6pZJZaHyRFS6gq+kc\"",
    "mtime": "2023-05-27T22:43:04.221Z",
    "size": 2073221,
    "path": "../public/_nuxt/clouds-7081496_1920.9712cf2c.png"
  },
  "/_nuxt/color.473bc8ca.png": {
    "type": "image/png",
    "etag": "\"2873-/0xLyyIHiRspL1RO202p0t9dRc8\"",
    "mtime": "2023-05-27T22:43:04.220Z",
    "size": 10355,
    "path": "../public/_nuxt/color.473bc8ca.png"
  },
  "/_nuxt/containorLayout1.c95d0b5c.js": {
    "type": "application/javascript",
    "etag": "\"5a2-jE4hy1cOaMGSB3BS87FcKNSburc\"",
    "mtime": "2023-05-27T22:43:04.220Z",
    "size": 1442,
    "path": "../public/_nuxt/containorLayout1.c95d0b5c.js"
  },
  "/_nuxt/contsThumb_0620230500535.23260a05.png": {
    "type": "image/png",
    "etag": "\"1714-oESEE3OATuu2e0z2glgj843q3gg\"",
    "mtime": "2023-05-27T22:43:04.220Z",
    "size": 5908,
    "path": "../public/_nuxt/contsThumb_0620230500535.23260a05.png"
  },
  "/_nuxt/cpms_logo.aeeee644.png": {
    "type": "image/png",
    "etag": "\"5fb3-Ho94UgozrmkD32MvL03JKK0hyuM\"",
    "mtime": "2023-05-27T22:43:04.220Z",
    "size": 24499,
    "path": "../public/_nuxt/cpms_logo.aeeee644.png"
  },
  "/_nuxt/entry.a01065f3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7adf6-gMk3otkZju1mQRY0Fj6Lt7su/TU\"",
    "mtime": "2023-05-27T22:43:04.219Z",
    "size": 503286,
    "path": "../public/_nuxt/entry.a01065f3.css"
  },
  "/_nuxt/entry.cee4e10b.js": {
    "type": "application/javascript",
    "etag": "\"b45c1-H0er2vWpMtaXQyTLDDplZ8/x8sk\"",
    "mtime": "2023-05-27T22:43:04.219Z",
    "size": 738753,
    "path": "../public/_nuxt/entry.cee4e10b.js"
  },
  "/_nuxt/error-404.1e503da2.js": {
    "type": "application/javascript",
    "etag": "\"196b-dlU9LtnhraXL/+bLxNX+zNrMLA4\"",
    "mtime": "2023-05-27T22:43:04.218Z",
    "size": 6507,
    "path": "../public/_nuxt/error-404.1e503da2.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-05-27T22:43:04.218Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.9f33bca8.js": {
    "type": "application/javascript",
    "etag": "\"757-/j31aFl3/4ySqmFSuiG15aBNjsM\"",
    "mtime": "2023-05-27T22:43:04.218Z",
    "size": 1879,
    "path": "../public/_nuxt/error-500.9f33bca8.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-05-27T22:43:04.218Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.41f912fa.js": {
    "type": "application/javascript",
    "etag": "\"45e-jI678kO1ST7tfLaTBMO/FYdHjOU\"",
    "mtime": "2023-05-27T22:43:04.217Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.41f912fa.js"
  },
  "/_nuxt/firstPage.a66c578e.js": {
    "type": "application/javascript",
    "etag": "\"10d-6ugBTbG600HSDGEJZXPnuGYRr1I\"",
    "mtime": "2023-05-27T22:43:04.217Z",
    "size": 269,
    "path": "../public/_nuxt/firstPage.a66c578e.js"
  },
  "/_nuxt/icons8-java.4d4c24d1.gif": {
    "type": "image/gif",
    "etag": "\"47dd-jmX2sProjjClGJAF2+4A80rzYIw\"",
    "mtime": "2023-05-27T22:43:04.217Z",
    "size": 18397,
    "path": "../public/_nuxt/icons8-java.4d4c24d1.gif"
  },
  "/_nuxt/icons8-javascript.8c81430b.gif": {
    "type": "image/gif",
    "etag": "\"23b1-KhGSkFu71E4MLdC8B5Yw15CGO98\"",
    "mtime": "2023-05-27T22:43:04.217Z",
    "size": 9137,
    "path": "../public/_nuxt/icons8-javascript.8c81430b.gif"
  },
  "/_nuxt/introduce_history.ad4dbebf.js": {
    "type": "application/javascript",
    "etag": "\"18d-rVOZppv14cuY3L5klvInKuBComo\"",
    "mtime": "2023-05-27T22:43:04.216Z",
    "size": 397,
    "path": "../public/_nuxt/introduce_history.ad4dbebf.js"
  },
  "/_nuxt/introduce_self.f7418a31.js": {
    "type": "application/javascript",
    "etag": "\"18d-WQWWpTOS+/OuWmeD4khZDIMXkkE\"",
    "mtime": "2023-05-27T22:43:04.216Z",
    "size": 397,
    "path": "../public/_nuxt/introduce_self.f7418a31.js"
  },
  "/_nuxt/logo.54e0f8e1.png": {
    "type": "image/png",
    "etag": "\"65b5-aAqzFjkE/4k889/V917l7PaSrec\"",
    "mtime": "2023-05-27T22:43:04.216Z",
    "size": 26037,
    "path": "../public/_nuxt/logo.54e0f8e1.png"
  },
  "/_nuxt/neurons-7420670_1920.69efed00.jpg": {
    "type": "image/jpeg",
    "etag": "\"64114-fxI/Wld4maiPUC3Lg34VTOmQl/A\"",
    "mtime": "2023-05-27T22:43:04.216Z",
    "size": 409876,
    "path": "../public/_nuxt/neurons-7420670_1920.69efed00.jpg"
  },
  "/_nuxt/newStartView.06970fed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"52-ucWp77eqAuHt3ojG+yROOEAU3Sk\"",
    "mtime": "2023-05-27T22:43:04.215Z",
    "size": 82,
    "path": "../public/_nuxt/newStartView.06970fed.css"
  },
  "/_nuxt/newStartView.49f77224.js": {
    "type": "application/javascript",
    "etag": "\"31b-j21kf8MC7h4LL7plWBGM26VMujs\"",
    "mtime": "2023-05-27T22:43:04.215Z",
    "size": 795,
    "path": "../public/_nuxt/newStartView.49f77224.js"
  },
  "/_nuxt/nurgul.491f67f4.png": {
    "type": "image/png",
    "etag": "\"5fb47-8NIUkpApDW3Vfg28Q2YjnApi22o\"",
    "mtime": "2023-05-27T22:43:04.215Z",
    "size": 392007,
    "path": "../public/_nuxt/nurgul.491f67f4.png"
  },
  "/_nuxt/nurgul.c9a0e6c7.js": {
    "type": "application/javascript",
    "etag": "\"6e0-SsuIsMlwLU/vHYc4Q/m4H31sk/c\"",
    "mtime": "2023-05-27T22:43:04.215Z",
    "size": 1760,
    "path": "../public/_nuxt/nurgul.c9a0e6c7.js"
  },
  "/_nuxt/nurgul.e553ff51.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-46oa+WG09BnLBRcshyvVeDVOzVs\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 72,
    "path": "../public/_nuxt/nurgul.e553ff51.css"
  },
  "/_nuxt/partCreateDialog.4aafd6fd.js": {
    "type": "application/javascript",
    "etag": "\"664-/ZgnRpeseXc+sCoAKeMwlwWjJyw\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 1636,
    "path": "../public/_nuxt/partCreateDialog.4aafd6fd.js"
  },
  "/_nuxt/partInfoDialog.2d081115.js": {
    "type": "application/javascript",
    "etag": "\"944-Tr5sKe/W3P4dPEGp+c7AtWO2WaA\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 2372,
    "path": "../public/_nuxt/partInfoDialog.2d081115.js"
  },
  "/_nuxt/partSearch.816d9e56.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21c-W41++T2Lnyh/1ApAb1khn47hGfY\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 540,
    "path": "../public/_nuxt/partSearch.816d9e56.css"
  },
  "/_nuxt/partSearch.9128b638.js": {
    "type": "application/javascript",
    "etag": "\"49c8-zAtJL7kdcPEtEkH+98GIeoD5t7k\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 18888,
    "path": "../public/_nuxt/partSearch.9128b638.js"
  },
  "/_nuxt/partSearchLayout.05a826c2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac-Wnri4DbPpERTJufIKUIUcQT3hkE\"",
    "mtime": "2023-05-27T22:43:04.214Z",
    "size": 172,
    "path": "../public/_nuxt/partSearchLayout.05a826c2.css"
  },
  "/_nuxt/partSearchLayout.919305a2.js": {
    "type": "application/javascript",
    "etag": "\"32a1-D8l5Y/ALMoidNX4OHyopiE7TlVw\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 12961,
    "path": "../public/_nuxt/partSearchLayout.919305a2.js"
  },
  "/_nuxt/pickView.4cc9b90f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32e-vGg0YYa9jd8uJ2nF3qX1JBD24O4\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 814,
    "path": "../public/_nuxt/pickView.4cc9b90f.css"
  },
  "/_nuxt/pickView.7d6f151c.js": {
    "type": "application/javascript",
    "etag": "\"c09-wQMQjyHKEOQp/zZ6sEq1tuQr4Ik\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 3081,
    "path": "../public/_nuxt/pickView.7d6f151c.js"
  },
  "/_nuxt/primeicons.131bc3bf.ttf": {
    "type": "font/ttf",
    "etag": "\"11a0c-zutG1ZT95cxQfN+LcOOOeP5HZTw\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 72204,
    "path": "../public/_nuxt/primeicons.131bc3bf.ttf"
  },
  "/_nuxt/primeicons.3824be50.woff2": {
    "type": "font/woff2",
    "etag": "\"75e4-VaSypfAuNiQF2Nh0kDrwtfamwV0\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 30180,
    "path": "../public/_nuxt/primeicons.3824be50.woff2"
  },
  "/_nuxt/primeicons.5e10f102.svg": {
    "type": "image/svg+xml",
    "etag": "\"4727e-0zMqRSQrj27b8/PHF2ooDn7c2WE\"",
    "mtime": "2023-05-27T22:43:04.213Z",
    "size": 291454,
    "path": "../public/_nuxt/primeicons.5e10f102.svg"
  },
  "/_nuxt/primeicons.90a58d3a.woff": {
    "type": "font/woff",
    "etag": "\"11a58-sWSLUL4TNQ/ei12ab+eDVN3MQ+Q\"",
    "mtime": "2023-05-27T22:43:04.212Z",
    "size": 72280,
    "path": "../public/_nuxt/primeicons.90a58d3a.woff"
  },
  "/_nuxt/primeicons.ce852338.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"11abc-5N8jVcQFzTiq2jbtqQFagQ/quUw\"",
    "mtime": "2023-05-27T22:43:04.212Z",
    "size": 72380,
    "path": "../public/_nuxt/primeicons.ce852338.eot"
  },
  "/_nuxt/searchArea.8774b364.js": {
    "type": "application/javascript",
    "etag": "\"9a-MmLe8AjFU+k00aIbrUmgLwS/8Ow\"",
    "mtime": "2023-05-27T22:43:04.212Z",
    "size": 154,
    "path": "../public/_nuxt/searchArea.8774b364.js"
  },
  "/_nuxt/self.ab906614.jpg": {
    "type": "image/jpeg",
    "etag": "\"11c79-indb8KEr5JdBofCPzg0z2auhDfs\"",
    "mtime": "2023-05-27T22:43:04.212Z",
    "size": 72825,
    "path": "../public/_nuxt/self.ab906614.jpg"
  },
  "/_nuxt/selfIntro.87cb4b04.js": {
    "type": "application/javascript",
    "etag": "\"909-IO14ATU1VAdlOXH/S2URIPcjCuU\"",
    "mtime": "2023-05-27T22:43:04.211Z",
    "size": 2313,
    "path": "../public/_nuxt/selfIntro.87cb4b04.js"
  },
  "/_nuxt/selfIntro.c24617ce.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"116-zYlNxGNHLJ/IxOrW83LrLYguypo\"",
    "mtime": "2023-05-27T22:43:04.211Z",
    "size": 278,
    "path": "../public/_nuxt/selfIntro.c24617ce.css"
  },
  "/_nuxt/selfy.32abc54f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4b-xV1HYvZUE6p03SujBwWER0zgiso\"",
    "mtime": "2023-05-27T22:43:04.211Z",
    "size": 75,
    "path": "../public/_nuxt/selfy.32abc54f.css"
  },
  "/_nuxt/selfy.7dea5b4f.js": {
    "type": "application/javascript",
    "etag": "\"3c5-pgaaKhrRjtigXRI1NsnXbdkP/EU\"",
    "mtime": "2023-05-27T22:43:04.211Z",
    "size": 965,
    "path": "../public/_nuxt/selfy.7dea5b4f.js"
  },
  "/_nuxt/seshat.1c511b78.png": {
    "type": "image/png",
    "etag": "\"42ec-oVHhVDe7b7E9BKVg5I6g+zF0yJc\"",
    "mtime": "2023-05-27T22:43:04.211Z",
    "size": 17132,
    "path": "../public/_nuxt/seshat.1c511b78.png"
  },
  "/_nuxt/seshat.8cf200fa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"48-gVN15o5gNb4gUwRTVULDJCIyhTw\"",
    "mtime": "2023-05-27T22:43:04.210Z",
    "size": 72,
    "path": "../public/_nuxt/seshat.8cf200fa.css"
  },
  "/_nuxt/seshat.e2c114af.js": {
    "type": "application/javascript",
    "etag": "\"527-OWfql5Is8D9y4kmt7pFCe5E+XxM\"",
    "mtime": "2023-05-27T22:43:04.210Z",
    "size": 1319,
    "path": "../public/_nuxt/seshat.e2c114af.js"
  },
  "/_nuxt/sideView.95fd4887.js": {
    "type": "application/javascript",
    "etag": "\"97-6cZxFul+vuHbb+96BshwM/7G1xQ\"",
    "mtime": "2023-05-27T22:43:04.210Z",
    "size": 151,
    "path": "../public/_nuxt/sideView.95fd4887.js"
  },
  "/_nuxt/social-media-5187243_1920.0c3ca76b.png": {
    "type": "image/png",
    "etag": "\"41534-T5MlLO+d5sursgzjjtsu1NuVTg4\"",
    "mtime": "2023-05-27T22:43:04.210Z",
    "size": 267572,
    "path": "../public/_nuxt/social-media-5187243_1920.0c3ca76b.png"
  },
  "/_nuxt/stepChange.596cbf6d.js": {
    "type": "application/javascript",
    "etag": "\"4ec-XuE4JPjJB0jy0SJrUK+mR5xV7Qk\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 1260,
    "path": "../public/_nuxt/stepChange.596cbf6d.js"
  },
  "/_nuxt/stepChange.a0179bb0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e9-2CrDLFiE3uLz/EzptyEikAqEIzQ\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 233,
    "path": "../public/_nuxt/stepChange.a0179bb0.css"
  },
  "/_nuxt/tableView.49a81fd2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"50-dw4pCNXo0S6XwrZn89BAEQLn5aE\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 80,
    "path": "../public/_nuxt/tableView.49a81fd2.css"
  },
  "/_nuxt/tableView.8ad0c948.js": {
    "type": "application/javascript",
    "etag": "\"b48-c4xrpFHX+4nYz9eRc923ji428F4\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 2888,
    "path": "../public/_nuxt/tableView.8ad0c948.js"
  },
  "/_nuxt/taskBar.64b07d6a.js": {
    "type": "application/javascript",
    "etag": "\"8c4-w2KHBsadcsLTK2K8Q5n4/kIQ5mQ\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 2244,
    "path": "../public/_nuxt/taskBar.64b07d6a.js"
  },
  "/_nuxt/taskBar.8396db03.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d7-++N6Ayti1waZAeyMfmVMt6CJ1fM\"",
    "mtime": "2023-05-27T22:43:04.209Z",
    "size": 215,
    "path": "../public/_nuxt/taskBar.8396db03.css"
  },
  "/_nuxt/taskRelationLine.c8720a4a.js": {
    "type": "application/javascript",
    "etag": "\"3b0-cieS3/6aKLt1pYu0FNbIgRjoa1I\"",
    "mtime": "2023-05-27T22:43:04.208Z",
    "size": 944,
    "path": "../public/_nuxt/taskRelationLine.c8720a4a.js"
  },
  "/_nuxt/taskRelationLine.df1e6815.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"bb-99iNixF8I24/Sf92K3DNxbk577Y\"",
    "mtime": "2023-05-27T22:43:04.208Z",
    "size": 187,
    "path": "../public/_nuxt/taskRelationLine.df1e6815.css"
  },
  "/_nuxt/tempArea.2f1d9f2c.js": {
    "type": "application/javascript",
    "etag": "\"2ee-RAOBU7WEACwn8Vggg6mqXuzveG8\"",
    "mtime": "2023-05-27T22:43:04.208Z",
    "size": 750,
    "path": "../public/_nuxt/tempArea.2f1d9f2c.js"
  },
  "/_nuxt/tempArea.4006d8db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91-GaOCm9u/NzmCp+2M8jwLGs3MUxk\"",
    "mtime": "2023-05-27T22:43:04.208Z",
    "size": 145,
    "path": "../public/_nuxt/tempArea.4006d8db.css"
  },
  "/_nuxt/topBar.5836bb09.js": {
    "type": "application/javascript",
    "etag": "\"96-CEWJFngH/BXW5DdAif+sJkUog70\"",
    "mtime": "2023-05-27T22:43:04.207Z",
    "size": 150,
    "path": "../public/_nuxt/topBar.5836bb09.js"
  },
  "/_nuxt/useTreeTable.21fed715.js": {
    "type": "application/javascript",
    "etag": "\"5098-kApGSCdLXMmzGxtxZuNtz8e/cug\"",
    "mtime": "2023-05-27T22:43:04.207Z",
    "size": 20632,
    "path": "../public/_nuxt/useTreeTable.21fed715.js"
  },
  "/_nuxt/watercolor-4117017.d1ec0954.png": {
    "type": "image/png",
    "etag": "\"a43a3-JgNN8zYIzovrMV3/xr6KBe2Gzp0\"",
    "mtime": "2023-05-27T22:43:04.206Z",
    "size": 672675,
    "path": "../public/_nuxt/watercolor-4117017.d1ec0954.png"
  },
  "/_nuxt/wcBoard.0606f014.js": {
    "type": "application/javascript",
    "etag": "\"13a-EqP3Cs7zfZg2Dk8zfZKU8NzymrQ\"",
    "mtime": "2023-05-27T22:43:04.206Z",
    "size": 314,
    "path": "../public/_nuxt/wcBoard.0606f014.js"
  },
  "/_nuxt/wcBoard.b3894062.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"116-Lu1lFZFvEQv+GWw/BAeIc9IdHkY\"",
    "mtime": "2023-05-27T22:43:04.205Z",
    "size": 278,
    "path": "../public/_nuxt/wcBoard.b3894062.css"
  },
  "/_nuxt/windows-6938478_1920.15b25b10.jpg": {
    "type": "image/jpeg",
    "etag": "\"576cf-dHJxK7MW2udasIHCeJdLHokjD+4\"",
    "mtime": "2023-05-27T22:43:04.205Z",
    "size": 358095,
    "path": "../public/_nuxt/windows-6938478_1920.15b25b10.jpg"
  },
  "/_nuxt/wordChange.12d4e368.js": {
    "type": "application/javascript",
    "etag": "\"464-5+usPvFCtZBzjev8Fq654s8cODw\"",
    "mtime": "2023-05-27T22:43:04.205Z",
    "size": 1124,
    "path": "../public/_nuxt/wordChange.12d4e368.js"
  },
  "/_nuxt/wordChange.3d1abf9a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5b-AAUYB64kV9QmtfL3Ii6vfL8NGFA\"",
    "mtime": "2023-05-27T22:43:04.204Z",
    "size": 91,
    "path": "../public/_nuxt/wordChange.3d1abf9a.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_7iropY = () => import('../_...menuHandler_.mjs');
const _lazy_H1kolB = () => import('../pathController.mjs');
const _lazy_neVxS8 = () => import('../_...permissionController_.mjs');
const _lazy_BGceiL = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/menu/**:menuHandler', handler: _lazy_7iropY, lazy: true, middleware: false, method: undefined },
  { route: '/api/pathController', handler: _lazy_H1kolB, lazy: true, middleware: false, method: undefined },
  { route: '/api/permit/**:permissionController', handler: _lazy_neVxS8, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_BGceiL, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_BGceiL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-LDCF3Q52.js";

// browser-route-module:root.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/root.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/@remix-run/css-bundle/dist/esm/browser.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var assetsManifest = window.__remixManifest;
var updatedHref = typeof __INJECT_CSS_BUNDLE_HREF__ === "string" ? __INJECT_CSS_BUNDLE_HREF__ : void 0;
var cssBundleHref = updatedHref || assetsManifest.cssBundleHref;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MXH2PZGZ.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [{ rel: "stylesheet", href: tailwind_default }]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links
};
/*! Bundled license information:

@remix-run/css-bundle/dist/esm/browser.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=/build/root-6JOTH74T.js.map

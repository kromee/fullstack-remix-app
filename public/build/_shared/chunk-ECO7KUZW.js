import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-LDCF3Q52.js";

// app/components/layout.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen w-full bg-yellow-100", children }, void 0, false, {
    fileName: "app/components/layout.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/components/textfield.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Textfield({ htmlFor, label, type = "text", value, onChange = () => {
} }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor, className: "text-gray-600 font-semibold", children: label }, void 0, false, {
      fileName: "app/components/textfield.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "input",
      {
        onChange,
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2 border border-gray-300",
        value
      },
      void 0,
      false,
      {
        fileName: "app/components/textfield.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/textfield.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

export {
  Layout,
  Textfield
};
//# sourceMappingURL=/build/_shared/chunk-ECO7KUZW.js.map

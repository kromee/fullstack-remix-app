import {
  Layout,
  Textfield
} from "/build/_shared/chunk-ECO7KUZW.js";
import {
  require_auth
} from "/build/_shared/chunk-7VESPIEJ.js";
import {
  Link,
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react,
  useActionData
} from "/build/_shared/chunk-LDCF3Q52.js";

// empty-module:~/utils/user.server
var require_user = __commonJS({
  "empty-module:~/utils/user.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/signup.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/signup.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_user = __toESM(require_user());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "New Remix App login" }];
};
function Signup() {
  var _a, _b, _c;
  const actionData = useActionData();
  const [formData, setFormData] = (0, import_react.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    name: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.password) || ""
  });
  const handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-white p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-extrabold text-black-600 mb-5", children: "Create an account" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Textfield,
        {
          htmlFor: "name",
          type: "name",
          label: "Name",
          value: formData.name,
          onChange: (e) => handleInputChange(e, "name")
        },
        void 0,
        false,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Textfield,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email")
        },
        void 0,
        false,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 72,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Textfield,
        {
          htmlFor: "password",
          type: "password",
          label: "Password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password")
        },
        void 0,
        false,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full text-center mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "Sign In", className: "w-full rounded-xl mt-2 bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600", children: "Create an account" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
      "Already have an account?",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-red-600 px-2 underline", children: "Sign In" }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 91,
        columnNumber: 80
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 91,
        columnNumber: 62
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  Signup as default,
  meta
};
//# sourceMappingURL=/build/routes/signup-E3S7CJXD.js.map

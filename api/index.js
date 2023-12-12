var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
}, __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default")), __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "663108e1", entry: { module: "/build/entry.client-6BTIXYNW.js", imports: ["/build/_shared/chunk-LDCF3Q52.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6JOTH74T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7SDELESA.js", imports: ["/build/_shared/chunk-7VESPIEJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-32A5MLDN.js", imports: ["/build/_shared/chunk-ECO7KUZW.js", "/build/_shared/chunk-7VESPIEJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-E3S7CJXD.js", imports: ["/build/_shared/chunk-ECO7KUZW.js", "/build/_shared/chunk-7VESPIEJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-663108E1.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-MXH2PZGZ.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [{ rel: "stylesheet", href: tailwind_default }]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action,
  default: () => Signup,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("react"), import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/auth.server.ts
var import_remix_auth = require("remix-auth");

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node"), sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET],
    secure: !1,
    //bool
    maxAge: 60 * 60 * 24 * 30
  }
});

// app/utils/auth.server.ts
var import_remix_auth_form = require("remix-auth-form");

// app/utils/prisma.server.ts
var prisma_server_exports = {};
__export(prisma_server_exports, {
  prisma: () => prisma
});
var import_client = require("@prisma/client");
__reExport(prisma_server_exports, require("@prisma/client"));
var prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_bcryptjs = __toESM(require("bcryptjs")), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var authenticator = new import_remix_auth.Authenticator(sessionStorage), formStrategy = new import_remix_auth_form.FormStrategy(async ({ form }) => {
  let email = form.get("email"), password = form.get("password"), user = await prisma.user.findUnique({
    where: { email }
  });
  if (!user)
    throw console.log("you entered a wrong email"), new import_remix_auth.AuthorizationError();
  if (!await import_bcryptjs.default.compare(
    password,
    user.password
  ))
    throw new import_remix_auth.AuthorizationError();
  return user;
});
authenticator.use(formStrategy, "form");

// app/utils/user.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs2.default.hash(user.password, 12);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      name: user.name
    }
  })).id, email: user.email, name: user.name };
};

// app/components/layout.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen w-full bg-yellow-100", children }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/components/textfield.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Textfield({ htmlFor, label, type = "text", value, onChange = () => {
} }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor, className: "text-gray-600 font-semibold", children: label }, void 0, !1, {
      fileName: "app/components/textfield.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
      !1,
      {
        fileName: "app/components/textfield.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/textfield.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/signup.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App login" }], loader = async ({ request }) => ({ user: await authenticator.isAuthenticated(request, {
  successRedirect: "/"
}) }), action = async ({ request }) => {
  let form = await request.formData(), action4 = form.get("_action"), email = form.get("email"), password = form.get("password"), name = form.get("name");
  return typeof action4 != "string" || typeof email != "string" || typeof password != "string" || typeof name != "string" ? (0, import_node3.json)({ error: "Invalid Form Data", form: action4 }, { status: 400 }) : (await createUser({ email, password, name }), await authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/signup",
    context: { formData: form }
  }));
};
function Signup() {
  var _a, _b, _c;
  let actionData = (0, import_react4.useActionData)(), [formData, setFormData] = (0, import_react3.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    name: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.password) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "h-full justify-center items-center flex flex-col gap-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-white p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-3xl font-extrabold text-black-600 mb-5", children: "Create an account" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Textfield,
        {
          htmlFor: "name",
          type: "name",
          label: "Name",
          value: formData.name,
          onChange: (e) => handleInputChange(e, "name")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 65,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Textfield,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 72,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Textfield,
        {
          htmlFor: "password",
          type: "password",
          label: "Password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-full text-center mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", name: "_action", value: "Sign In", className: "w-full rounded-xl mt-2 bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600", children: "Create an account" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-600", children: [
      "Already have an account?",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-red-600 px-2 underline", children: "Sign In" }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 91,
        columnNumber: 80
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.tsx",
        lineNumber: 91,
        columnNumber: 62
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action2,
  default: () => Index,
  loader: () => loader2,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react");

// app/utils/tasks.server.ts
var import_node4 = require("@remix-run/node"), getMyTasks = async (userID) => {
  if (userID)
    return await prisma.user.findUnique({
      where: {
        id: userID
      },
      include: {
        task: {
          orderBy: {
            createdAt: "desc"
          }
        }
      }
    });
  if (!userID)
    return (0, import_node4.json)({ error: "The users doesnot have any tasks" });
}, createTask = async ({ categoryId, message, postedBy }) => {
  let taskById = await prisma.task.create({
    data: { categoryId, message, postedBy }
  });
  return taskById ? (0, import_node4.json)({
    message: "Task created successfully",
    success: "true",
    payload: taskById
  }) : (0, import_node4.json)({ error: "Could not post the task" });
}, deleteTask = async (id) => {
  try {
    return console.log(typeof id), await prisma.task.delete({
      where: {
        id
      }
    }) ? (0, import_node4.json)({
      message: "Task deleted",
      success: "true",
      payload: id
    }) : (0, import_node4.json)({ error: "Could not post the task" });
  } catch (error) {
    console.log(error);
  }
};

// app/components/taskform.tsx
var import_react5 = require("@remix-run/react");

// app/types/jobs.ts
var categories = [
  { name: "Others", value: "OTHERS" },
  { name: "Office", value: "OFFICE" },
  { name: "Home", value: "HOME" }
];

// app/components/taskform.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Taskform() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "font-semibold mb-2 block", htmlFor: "category", children: "Category" }, void 0, !1, {
        fileName: "app/components/taskform.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "select",
        {
          name: "category",
          id: "category",
          className: "border-2 w-full rounded-md mr-8 border-gray-600 px-3 py-1 h-9",
          defaultValue: categories[0].name,
          children: categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: category.value, children: category.name }, index, !1, {
            fileName: "app/components/taskform.tsx",
            lineNumber: 23,
            columnNumber: 17
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/taskform.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "font-semibold mb-2 block", htmlFor: "task", children: "Task" }, void 0, !1, {
        fileName: "app/components/taskform.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "textarea",
        {
          name: "message",
          id: "message",
          className: "w-full border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
        },
        void 0,
        !1,
        {
          fileName: "app/components/taskform.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "button",
      {
        type: "submit",
        name: "action",
        value: "new",
        className: "w-full rounded-xl bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600",
        children: "Add task"
      },
      void 0,
      !1,
      {
        fileName: "app/components/taskform.tsx",
        lineNumber: 41,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/taskform.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/taskform.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/tasklist.tsx
var import_react6 = require("@remix-run/react"), import_hi2 = require("react-icons/hi2"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Tasklist({ category, message, id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-md", children: message }, void 0, !1, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-xs bg-green-100 border px-2 py-1 rounded text-green-700", children: category }, void 0, !1, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react6.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          className: "button",
          name: "action",
          type: "submit",
          value: "delete",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_hi2.HiTrash, {}, void 0, !1, {
            fileName: "app/components/tasklist.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/tasklist.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, !1, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/tasklist.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this) }, void 0, !1, {
    fileName: "app/components/tasklist.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta2 = () => [{ title: "Fullstack Remix App" }], loader2 = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  }), userTask = await getMyTasks(user.id);
  return { user, userTask };
}, action2 = async ({ request }) => {
  let form = await request.formData();
  switch (form.get("action")) {
    case "logout":
      return await authenticator.logout(request, { redirectTo: "/login" });
    case "new": {
      let Category = form.get("category"), Message = form.get("message"), user = await authenticator.isAuthenticated(request);
      return createTask({
        categoryId: Category,
        message: Message,
        postedBy: {
          connect: {
            id: user.id
          }
        }
      });
    }
    case "delete": {
      let id = form.get("id");
      return console.log(id), await deleteTask(id);
    }
    default:
      return null;
  }
};
function getTask(userTask) {
  console.log("debe mostrar el json"), console.log(JSON.stringify(userTask));
}
function Index() {
  let { user, userTask } = (0, import_react7.useLoaderData)();
  return getTask(getTask(userTask)), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "h-full bg-yellow-100 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "max-w-md mx-auto items-left flex flex-col bg-white p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "d-flex flex-row mb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-sm font-normal text-gray-500", children: [
        "Welcome ",
        user.name,
        "!"
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-3xl font-bold pe-2", children: "Task tracking app" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        user ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "submit",
            name: "action",
            value: "logout",
            className: "text-red-500 py-1 border px-3 text-sm rounded-md font-semibold",
            children: "Logout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Taskform, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "grid gap-5", children: userTask.task.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
      " ",
      userTask.task.map((task) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Tasklist, { id: task.id, message: task.message, category: task.categoryId }, task.id, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 35
    }, this) : "\u{1F633} No task" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login,
  loader: () => loader3,
  meta: () => meta3
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta3 = () => [{ title: "New Remix App login" }], loader3 = async ({ request }) => await authenticator.isAuthenticated(request, {
  successRedirect: "/"
}), action3 = async ({ request }) => authenticator.authenticate("form", request, {
  successRedirect: "/",
  failureRedirect: "/login"
});
function Login() {
  var _a, _b;
  let actionData = (0, import_react9.useActionData)(), [formData, setFormData] = (0, import_react8.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-full justify-center bg-yellow-100 items-center flex flex-col gap-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "POST", className: "rounded-2xl bg-white p-6 w-96", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-3xl font-extrabold text-black-600 mb-5", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Textfield,
        {
          htmlFor: "email",
          label: "Email",
          value: formData.email,
          onChange: (e) => handleInputChange(e, "email")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 45,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Textfield,
        {
          htmlFor: "password",
          type: "password",
          label: "Password",
          value: formData.password,
          onChange: (e) => handleInputChange(e, "password")
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full text-center mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", name: "_action", value: "Sign In", className: "w-full rounded-xl mt-2 bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600", children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-gray-600", children: [
      "Dont have an account?",
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: "/signup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "text-red-600 px-2 underline", children: "Signup" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 64,
        columnNumber: 78
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 64,
        columnNumber: 59
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
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
//# sourceMappingURL=index.js.map

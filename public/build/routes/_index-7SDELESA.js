import {
  require_auth
} from "/build/_shared/chunk-7VESPIEJ.js";
import {
  Form,
  __commonJS,
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-LDCF3Q52.js";

// empty-module:~/utils/tasks.server
var require_tasks = __commonJS({
  "empty-module:~/utils/tasks.server"(exports, module) {
    init_global();
    init_dirname();
    init_filename();
    init_buffer();
    init_process();
    module.exports = {};
  }
});

// browser-route-module:routes/_index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/_index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_auth = __toESM(require_auth());
var import_tasks = __toESM(require_tasks());

// app/components/taskform.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/types/jobs.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var categories = [
  { name: "Others", value: "OTHERS" },
  { name: "Office", value: "OFFICE" },
  { name: "Home", value: "HOME" }
];

// app/components/taskform.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Taskform() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold mb-2 block", htmlFor: "category", children: "Category" }, void 0, false, {
        fileName: "app/components/taskform.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          name: "category",
          id: "category",
          className: "border-2 w-full rounded-md mr-8 border-gray-600 px-3 py-1 h-9",
          defaultValue: categories[0].name,
          children: categories.map((category, index) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: category.value, children: category.name }, index, false, {
              fileName: "app/components/taskform.tsx",
              lineNumber: 23,
              columnNumber: 17
            }, this);
          })
        },
        void 0,
        false,
        {
          fileName: "app/components/taskform.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "font-semibold mb-2 block", htmlFor: "task", children: "Task" }, void 0, false, {
        fileName: "app/components/taskform.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "textarea",
        {
          name: "message",
          id: "message",
          className: "w-full border-2 rounded-md mr-8 border-gray-600 px-3 py-1"
        },
        void 0,
        false,
        {
          fileName: "app/components/taskform.tsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        name: "action",
        value: "new",
        className: "w-full rounded-xl bg-red-500 px-3 py-2 text-white font-semibold transition duration-300 ease-in-out hover:bg-red-600",
        children: "Add task"
      },
      void 0,
      false,
      {
        fileName: "app/components/taskform.tsx",
        lineNumber: 41,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/taskform.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/taskform.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/taskform.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/tasklist.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/hi2/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/index.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/lib/esm/iconBase.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react2 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/hi2/index.esm.js
function HiTrash(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z", "clipRule": "evenodd" } }] })(props);
}

// app/components/tasklist.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Tasklist({ category, message, id }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-md", children: message }, void 0, false, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs bg-green-100 border px-2 py-1 rounded text-green-700", children: category }, void 0, false, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          className: "button",
          name: "action",
          type: "submit",
          value: "delete",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HiTrash, {}, void 0, false, {
            fileName: "app/components/tasklist.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/tasklist.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, false, {
        fileName: "app/components/tasklist.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/tasklist.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/tasklist.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/tasklist.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return [{ title: "Fullstack Remix App" }];
};
function getTask(userTask) {
  console.log("debe mostrar el json");
  console.log(JSON.stringify(userTask));
}
function Index() {
  const { user, userTask } = useLoaderData();
  getTask(getTask(userTask));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full bg-yellow-100 pt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-md mx-auto items-left flex flex-col bg-white p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-row mb-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-sm font-normal text-gray-500", children: [
        "Welcome ",
        user.name,
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold pe-2", children: "Task tracking app" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "button",
          {
            type: "submit",
            name: "action",
            value: "logout",
            className: "text-red-500 py-1 border px-3 text-sm rounded-md font-semibold",
            children: "Logout"
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 85,
            columnNumber: 17
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 84,
          columnNumber: 15
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Taskform, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-5", children: userTask.task.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      " ",
      userTask.task.map((task) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tasklist, { id: task.id, message: task.message, category: task.categoryId }, task.id, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 103,
          columnNumber: 15
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 100,
      columnNumber: 35
    }, this) : "\u{1F633} No task" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 76,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-7SDELESA.js.map

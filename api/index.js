var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

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

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links3,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/root.css
var root_default = "/build/_assets/root-3LFMLUZK.css";

// app/styles/pages/transaction-history.css
var transaction_history_default = "/build/_assets/transaction-history-UF3GLYVA.css";

// app/styles/components/MainNavigation/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-H42ORGUZ.css";

// app/assets/Icons/Dollar-Circle-Icon.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), DollarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "svg",
  {
    width: "30px",
    height: "30px",
    viewBox: "0 0 32 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "path",
      {
        d: "M19.5758 11.6554C19.9377 12.0725 20.5693 12.1173 20.9865 11.7553C21.4036 11.3933 21.4483 10.7618 21.0864 10.3446L19.5758 11.6554ZM12.4242 20.3446C12.0623 19.9275 11.4307 19.8827 11.0136 20.2447C10.5964 20.6067 10.5517 21.2382 10.9136 21.6554L12.4242 20.3446ZM17 7.66667C17 7.11438 16.5523 6.66667 16 6.66667C15.4477 6.66667 15 7.11438 15 7.66667H17ZM15 24.3333C15 24.8856 15.4477 25.3333 16 25.3333C16.5523 25.3333 17 24.8856 17 24.3334L15 24.3333ZM30 16C30 23.732 23.732 30 16 30V32C24.8366 32 32 24.8366 32 16H30ZM16 30C8.26801 30 2 23.732 2 16H0C0 24.8366 7.16344 32 16 32V30ZM2 16C2 8.26801 8.26801 2 16 2V0C7.16344 0 0 7.16344 0 16H2ZM16 2C23.732 2 30 8.26801 30 16H32C32 7.16344 24.8366 0 16 0V2ZM16 15C14.7892 15 13.7382 14.671 13.0192 14.1916C12.2931 13.7076 12 13.1488 12 12.6667H10C10 14.0255 10.8262 15.1333 11.9098 15.8557C13.0004 16.5828 14.4494 17 16 17V15ZM12 12.6667C12 12.1846 12.2931 11.6257 13.0192 11.1417C13.7382 10.6623 14.7892 10.3333 16 10.3333V8.33333C14.4494 8.33333 13.0004 8.75053 11.9098 9.47759C10.8262 10.2 10 11.3078 10 12.6667H12ZM16 10.3333C17.6441 10.3333 18.9497 10.9338 19.5758 11.6554L21.0864 10.3446C19.9835 9.07355 18.0574 8.33333 16 8.33333V10.3333ZM16 17C17.2108 17 18.2618 17.329 18.9809 17.8084C19.7069 18.2924 20 18.8512 20 19.3333H22C22 17.9745 21.1739 16.8667 20.0902 16.1443C18.9996 15.4172 17.5506 15 16 15V17ZM15 7.66667V9.33333H17V7.66667H15ZM15 22.6666L15 24.3333L17 24.3334L17 22.6667L15 22.6666ZM16 21.6667C14.356 21.6667 13.0504 21.0662 12.4242 20.3446L10.9136 21.6554C12.0166 22.9264 13.9427 23.6667 16 23.6667L16 21.6667ZM20 19.3333C20 19.8154 19.7069 20.3743 18.9809 20.8583C18.2618 21.3377 17.2109 21.6667 16 21.6667V23.6667C17.5506 23.6667 18.9997 23.2495 20.0903 22.5224C21.1739 21.8 22 20.6922 22 19.3333H20ZM15 9.33334L15 22.6667L17 22.6667L17 9.33333L15 9.33334Z",
        fill: "#F05454"
      },
      void 0,
      !1,
      {
        fileName: "app/assets/Icons/Dollar-Circle-Icon.jsx",
        lineNumber: 9,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/assets/Icons/Dollar-Circle-Icon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), Dollar_Circle_Icon_default = DollarIcon;

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "main-nav-bg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "main-nav-bg__nav-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dollar_Circle_Icon_default, {}, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "main-nav-bg__nav-title", children: "Finance Manager" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/", children: "Overview" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.NavLink, { to: "/transaction-history", children: "Transaction History" }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/MainNavigation.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MainNavigation.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MainNavigation.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: MainNavigation_default }];
}

// app/styles/components/UpBar.css
var UpBar_default = "/build/_assets/UpBar-G7AFQTUJ.css";

// app/components/UpBar.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function UpBar({ title }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "UpBar-bg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "title", children: title }, void 0, !1, {
    fileName: "app/components/UpBar.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/UpBar.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
function links2() {
  return [{ rel: "stylesheet", href: UpBar_default }];
}

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links3 = () => [
  {
    rel: "stylesheet",
    href: root_default
  },
  {
    rel: "stylesheet",
    href: transaction_history_default
  },
  ...links(),
  ...links2()
], meta = () => ({
  charset: "utf-8",
  title: "Money Management",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MainNavigation, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("title", { children: "an error occured!" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "an error occured!" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
          "error: ",
          error.message
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Link, { to: "/", children: "safety!" }, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 77,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.jsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "or come back later" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/routes/transaction-history.jsx
var transaction_history_exports = {};
__export(transaction_history_exports, {
  default: () => transaction_history,
  links: () => links7,
  loader: () => loader
});
var import_react8 = require("@remix-run/react");

// app/assets/Icons/SearchBarIcon.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), searchBarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "svg",
  {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "path",
      {
        d: "M16.5 16.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z",
        stroke: "#7E8594",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/assets/Icons/SearchBarIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/assets/Icons/SearchBarIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), SearchBarIcon_default = searchBarIcon;

// app/components/SearchBar.jsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function SearchBar({ searchHandler }) {
  let params = (0, import_react5.useLocation)(), searchParameter = new URLSearchParams(params.search).get("search"), searchRef = (0, import_react4.useRef)(searchParameter);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "search-bar-gr", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "search-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SearchBarIcon_default, {}, void 0, !1, {
      fileName: "app/components/SearchBar.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/SearchBar.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "input",
      {
        ref: searchRef,
        defaultValue: searchParameter,
        type: "text",
        placeholder: "Search",
        className: "search-input",
        onChange: () => {
          searchHandler(searchRef.current.value);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/SearchBar.jsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: () => {
      searchRef.current.value = "", searchHandler("");
    }, children: "Clear" }, void 0, !1, {
      fileName: "app/components/SearchBar.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SearchBar.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/assets/Icons/FilterBarIcon.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), FilterBarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "path",
      {
        d: "M1 2C1 1.44772 1.44772 1 2 1H18C18.5523 1 19 1.44772 19 2V4.58579C19 4.851 18.8946 5.10536 18.7071 5.29289L12.2929 11.7071C12.1054 11.8946 12 12.149 12 12.4142V15L8 19V12.4142C8 12.149 7.89464 11.8946 7.70711 11.7071L1.29289 5.29289C1.10536 5.10536 1 4.851 1 4.58579V2Z",
        stroke: "#7E8594",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/assets/Icons/FilterBarIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/assets/Icons/FilterBarIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), FilterBarIcon_default = FilterBarIcon;

// app/styles/components/FilterBar.css
var FilterBar_default = "/build/_assets/FilterBar-5EMHMROR.css";

// app/components/FiltersBar.jsx
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function FiltersBar({
  categoryChangeHandler,
  dateFilterHandler,
  resetFilters
}) {
  let params = (0, import_react7.useLocation)(), categoryParameter = new URLSearchParams(params.search).get("category"), datesP = {};
  datesP.from = new URLSearchParams(params.search).get("fromDate"), datesP.to = new URLSearchParams(params.search).get("toDate");
  let [dates, setDates] = (0, import_react6.useState)({
    fromDate: "",
    toDate: ""
  });
  (categoryParameter === null || categoryParameter === "" || categoryParameter !== categoryParameter) && (categoryParameter = "Tech");
  let onDateChange = (e) => {
    let { value } = e.target, name = e.target.dataset.name;
    setDates({
      ...dates,
      [name]: value
    });
  };
  return (0, import_react6.useEffect)(() => {
    dates.toDate < dates.fromDate || dates.fromDate && dates.toDate && dateFilterHandler(dates.fromDate, dates.toDate);
  }, [dates]), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "filters", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(FilterBarIcon_default, {}, void 0, !1, {
          fileName: "app/components/FiltersBar.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "select",
          {
            "data-name": "category",
            id: "category",
            name: "category",
            defaultValue: categoryParameter,
            required: !0,
            onChange: categoryChangeHandler,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Salary", children: "Salary" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 61,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Loan", children: "Loan" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Gift", children: "Gift" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 63,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Tech", children: "Tech" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Food", children: "Food" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 65,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("option", { value: "Entertainment", children: "Entertainment" }, void 0, !1, {
                fileName: "app/components/FiltersBar.jsx",
                lineNumber: 66,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/FiltersBar.jsx",
            lineNumber: 53,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            defaultValue: datesP.from,
            onChangeCapture: onDateChange,
            "data-name": "fromDate",
            type: "date",
            id: "date",
            name: "date",
            placeholder: "Date",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/FiltersBar.jsx",
            lineNumber: 68,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            onChangeCapture: onDateChange,
            defaultValue: datesP.to,
            "data-name": "toDate",
            type: "date",
            id: "date",
            name: "date",
            placeholder: "Date",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/FiltersBar.jsx",
            lineNumber: 79,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/FiltersBar.jsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: resetFilters, children: "Clear" }, void 0, !1, {
        fileName: "app/components/FiltersBar.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FiltersBar.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    dates.fromDate > dates.toDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "to Date can't be smaller than from date" }, void 0, !1, {
      fileName: "app/components/FiltersBar.jsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/FiltersBar.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: FilterBar_default
    }
  ];
}

// app/styles/components/Transactions/TransactionList.css
var TransactionList_default = "/build/_assets/TransactionList-IHV5Q67M.css";

// app/styles/components/Transactions/TransactionItem.css
var TransactionItem_default = "/build/_assets/TransactionItem-ZKL4VCEA.css";

// app/assets/Icons/WorkIcon.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), WorkIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("rect", { width: "32", height: "32", rx: "16", fill: "#059669", fillOpacity: "0.2" }, void 0, !1, {
        fileName: "app/assets/Icons/WorkIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "path",
        {
          d: "M25 17.2554C22.2207 18.3805 19.1827 19 16 19C12.8173 19 9.7793 18.3805 7 17.2554M20 10V8C20 6.89543 19.1046 6 18 6H14C12.8954 6 12 6.89543 12 8V10M16 16H16.01M9 24H23C24.1046 24 25 23.1046 25 22V12C25 10.8954 24.1046 10 23 10H9C7.89543 10 7 10.8954 7 12V22C7 23.1046 7.89543 24 9 24Z",
          stroke: "#059669",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/Icons/WorkIcon.jsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/Icons/WorkIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), WorkIcon_default = WorkIcon;

// app/assets/Icons/StudyIcon.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), StudyIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("rect", { width: "32", height: "32", rx: "16", fill: "#0284C7", fillOpacity: "0.2" }, void 0, !1, {
        fileName: "app/assets/Icons/StudyIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "path",
        {
          d: "M16 18L25 13L16 8L7 13L16 18ZM16 18L22.1591 14.5783C22.7017 15.9466 23 17.4384 23 18.9999C23 19.7013 22.9398 20.3885 22.8244 21.0569C20.2143 21.3106 17.849 22.4006 16 24.0555C14.151 22.4006 11.7857 21.3106 9.17562 21.0569C9.06017 20.3885 9 19.7012 9 18.9999C9 17.4384 9.29824 15.9466 9.84088 14.5782L16 18ZM12 23.9999V16.5L16 14.2778",
          stroke: "#0284C7",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/Icons/StudyIcon.jsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/Icons/StudyIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), StudyIcon_default = StudyIcon;

// app/assets/Icons/TechIcon.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), TechIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("rect", { width: "32", height: "32", rx: "16", fill: "#059669", fillOpacity: "0.2" }, void 0, !1, {
        fileName: "app/assets/Icons/TechIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "path",
        {
          d: "M13 7V9M19 7V9M13 23V25M19 23V25M9 13H7M9 19H7M25 13H23M25 19H23M11 23H21C22.1046 23 23 22.1046 23 21V11C23 9.89543 22.1046 9 21 9H11C9.89543 9 9 9.89543 9 11V21C9 22.1046 9.89543 23 11 23ZM13 13H19V19H13V13Z",
          stroke: "#059669",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/assets/Icons/TechIcon.jsx",
          lineNumber: 10,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/assets/Icons/TechIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), TechIcon_default = TechIcon;

// app/util/numberConvention.js
function numFormatter(num) {
  if (num = num.toString().replace(/[^0-9.]/g, ""), num < 1e3)
    return num;
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" }
  ], index;
  for (index = si.length - 1; index > 0 && !(num >= si[index].v); index--)
    ;
  return (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + si[index].s;
}

// app/components/Transactions/TransactionItem.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function TransactionItem({ transaction }) {
  let transactionDate = new Date(transaction.date), today = new Date(), yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let shownDate;
  transactionDate.getDate() === today.getDate() && today.getMonth() === transactionDate.getMonth && today.getFullYear() === transactionDate.getFullYear() ? shownDate = "Today" : transactionDate.getDate() === yesterday.getDate() && yesterday.getMonth() === transactionDate.getMonth && yesterday.getFullYear() === transactionDate.getFullYear() ? shownDate = "Yesterday" : shownDate = transactionDate.toLocaleDateString();
  let ShownIcon;
  return transaction.category === "work" ? ShownIcon = WorkIcon_default : transaction.category === "Tech" ? ShownIcon = TechIcon_default : ShownIcon = StudyIcon_default, /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "item row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "item__left row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ShownIcon, {}, void 0, !1, {
        fileName: "app/components/Transactions/TransactionItem.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "item__left__text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "item__left__text__title", title: transaction.description, children: transaction.description }, void 0, !1, {
        fileName: "app/components/Transactions/TransactionItem.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Transactions/TransactionItem.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Transactions/TransactionItem.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "item__right row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "item__right__date", children: shownDate }, void 0, !1, {
        fileName: "app/components/Transactions/TransactionItem.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "p",
        {
          className: `item__right__amount ${transaction.type === "income" ? "income" : "expense"}`,
          children: transaction.type === "income" ? `+ $${numFormatter(Number(transaction.amount))}` : `- $${numFormatter(Number(transaction.amount))}`
        },
        void 0,
        !1,
        {
          fileName: "app/components/Transactions/TransactionItem.jsx",
          lineNumber: 54,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Transactions/TransactionItem.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Transactions/TransactionItem.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
function links5() {
  return [{ rel: "stylesheet", href: TransactionItem_default }];
}

// app/components/Transactions/TransactionList.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), TransactionList = ({ transactions }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "transactions-List column", children: transactions.map((transaction) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(TransactionItem, { transaction }, transaction.id, !1, {
  fileName: "app/components/Transactions/TransactionList.jsx",
  lineNumber: 10,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/Transactions/TransactionList.jsx",
  lineNumber: 8,
  columnNumber: 5
}, this), TransactionList_default2 = TransactionList;
function links6() {
  return [
    { rel: "stylesheet", href: TransactionList_default },
    ...links5()
  ];
}

// app/routes/transaction-history.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function transaction_history() {
  var _a;
  let params = (0, import_react8.useLocation)(), navigate = (0, import_react8.useNavigate)(), pageSeaarchParameter = +new URLSearchParams(params.search).get("page"), categoryParameter = new URLSearchParams(params.search).get("category"), datesP = {};
  datesP.from = new URLSearchParams(params.search).get("fromDate"), datesP.to = new URLSearchParams(params.search).get("toDate");
  let searchParameter = new URLSearchParams(params.search).get("search");
  (pageSeaarchParameter === null || pageSeaarchParameter !== pageSeaarchParameter) && (pageSeaarchParameter = 0);
  let transactions = (0, import_react8.useLoaderData)(), filtered = new URLSearchParams(params.search).get("filtered");
  (filtered === null || filtered === "" || filtered !== filtered) && (filtered = !1);
  let allTransactions = [], shownTransactions = [], numberOfPages, pages = 0;
  (_a = Object.keys(transactions)) == null || _a.forEach((key) => {
    allTransactions.push({
      ...transactions[key],
      id: key
    });
  });
  let searchFilterHandler = (value) => {
    navigate(
      `/transaction-history?${filtered !== null ? "filtered=true" : ""}&page=${pageSeaarchParameter}${value.trim().length > 0 ? `&search=${value.toLowerCase()}` : ""}${categoryParameter !== null ? `&category=${categoryParameter}` : ""}${datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ""}`
    );
  }, categoryChangeHandler = (e) => {
    let { value } = e.target;
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}&category=${value}${datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ""}${searchParameter !== null ? `&search=${searchParameter}` : ""}`
    );
  }, dateFilterHandler = (fromDate, toDate) => {
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${categoryParameter !== null ? `&category=${categoryParameter}` : ""}&fromDate=${fromDate}&toDate=${toDate}${searchParameter !== null ? `&search=${searchParameter}` : ""}`
    );
  }, resetFilters = () => {
    navigate(
      `/transaction-history?${filtered !== null ? "filtered=true" : ""}${searchParameter !== null ? `&search=${searchParameter}` : ""}`
    );
  };
  pages = [];
  let tempArray = [];
  categoryParameter === categoryParameter && categoryParameter !== null && categoryParameter !== void 0 && datesP.from === datesP.from && datesP.from !== null && datesP.from !== void 0 && datesP.to === datesP.to && datesP.to !== null && datesP.to !== void 0 ? tempArray = allTransactions.filter((transaction) => transaction.category === categoryParameter && transaction.date >= datesP.from && transaction.date <= datesP.to) : categoryParameter === categoryParameter && categoryParameter !== null && categoryParameter !== void 0 ? tempArray = allTransactions.filter((transaction) => transaction.category === categoryParameter) : datesP.from === datesP.from && datesP.from !== null && datesP.from !== void 0 && datesP.to === datesP.to && datesP.to !== null && datesP.to !== void 0 ? tempArray = allTransactions.filter((transaction) => transaction.date >= datesP.from && transaction.date <= datesP.to) : tempArray = allTransactions, searchParameter !== null && (tempArray = tempArray.filter((transaction) => transaction.description.toLowerCase().includes(searchParameter))), numberOfPages = Math.ceil(tempArray.length / 5), tempArray.length > 0 && (shownTransactions = tempArray.slice(
    pageSeaarchParameter * 5,
    pageSeaarchParameter * 5 + 5
  ));
  for (let i = pageSeaarchParameter; i < pageSeaarchParameter + 3 && i < numberOfPages; i++)
    pages.push(i);
  return pages[pages.length - 1] + 2 > numberOfPages && numberOfPages > 3 && (pages = [numberOfPages - 3, numberOfPages - 2, numberOfPages - 1]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "transaction-history-page column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UpBar, { title: "Transaction History" }, void 0, !1, {
      fileName: "app/routes/transaction-history.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SearchBar, { searchHandler: searchFilterHandler }, void 0, !1, {
        fileName: "app/routes/transaction-history.jsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        FiltersBar,
        {
          categoryChangeHandler,
          dateFilterHandler,
          resetFilters
        },
        void 0,
        !1,
        {
          fileName: "app/routes/transaction-history.jsx",
          lineNumber: 154,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(TransactionList_default2, { transactions: shownTransactions }, void 0, !1, {
        fileName: "app/routes/transaction-history.jsx",
        lineNumber: 159,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/transaction-history.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "pages", children: [
      pageSeaarchParameter >= 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react8.Link,
          {
            to: `?page=${0}${filtered !== null ? "&filtered=true" : ""}${categoryParameter !== null ? `&category=${categoryParameter}` : ""}${datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ""}${searchParameter !== null ? `&search=${searchParameter}` : ""}`,
            children: "1"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/transaction-history.jsx",
            lineNumber: 164,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { children: "..." }, void 0, !1, {
          fileName: "app/routes/transaction-history.jsx",
          lineNumber: 177,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/transaction-history.jsx",
        lineNumber: 163,
        columnNumber: 11
      }, this) : null,
      pages.map((page) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_react8.Link,
        {
          to: `?page=${page}${filtered !== null ? "&filtered=true" : ""}${categoryParameter !== null ? `&category=${categoryParameter}` : ""}${datesP.to !== null ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ""}`,
          className: pageSeaarchParameter === page ? "active" : "",
          children: page + 1
        },
        void 0,
        !1,
        {
          fileName: "app/routes/transaction-history.jsx",
          lineNumber: 182,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/routes/transaction-history.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/transaction-history.jsx",
    lineNumber: 150,
    columnNumber: 5
  }, this);
}
async function loader() {
  return await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json"
  );
}
function links7() {
  return [...links6(), ...links4()];
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action,
  default: () => Overview,
  links: () => links11,
  loader: () => loader2
});
var import_react11 = require("react"), import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react");

// app/styles/components/AddTransactionModal.css
var AddTransactionModal_default = "/build/_assets/AddTransactionModal-6ZHME7XI.css";

// app/assets/Icons/CloseIcon.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), CloseIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "path",
      {
        d: "M2 18L18 2M2 2L18 18",
        stroke: "#111827",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/assets/Icons/CloseIcon.jsx",
        lineNumber: 9,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/assets/Icons/CloseIcon.jsx",
    lineNumber: 2,
    columnNumber: 3
  },
  this
), CloseIcon_default = CloseIcon;

// app/components/Modal/ModalForm.jsx
var import_react9 = require("@remix-run/react"), import_react10 = require("react");

// app/styles/components/add-transaction-btn.css
var add_transaction_btn_default = "/build/_assets/add-transaction-btn-NUS7LQTS.css";

// app/components/add-transaction-btn.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), AddTransactionButton = ({ clickHandler, type = "button" }) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("button", { type, className: "add-transaction-btn", onClick: clickHandler, children: "Add Transaction" }, void 0, !1, {
  fileName: "app/components/add-transaction-btn.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this);
function links8() {
  return [{ rel: "stylesheet", href: add_transaction_btn_default }];
}
var add_transaction_btn_default2 = AddTransactionButton;

// app/components/Modal/ModalForm.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), ModalForm = ({ closeHandler }) => {
  var _a;
  let [transactionType, setTransactionType] = (0, import_react10.useState)("income"), formRef = (0, import_react10.useRef)(), navigation = (0, import_react9.useTransition)(), actionData = (0, import_react9.useActionData)();
  navigation.state === "submitting" && actionData !== void 0 && !actionData.error && ((_a = formRef.current) == null || _a.reset(), closeHandler());
  let radiobuttonChangeHandler = (e) => {
    setTransactionType(e.target.value);
  }, [todaysDate, setTodaysDate] = (0, import_react10.useState)(
    new Date().toISOString().slice(0, 10)
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react9.Form, { ref: formRef, method: "post", replace: !0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "category", children: "Category" }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        transactionType === "income" ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "select",
          {
            id: "category",
            name: "category",
            defaultValue: "Gift",
            required: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Salary", children: "Salary" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 44,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Loan", children: "Loan" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 45,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Gift", children: "Gift" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 46,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "select",
          {
            id: "category",
            name: "category",
            defaultValue: "Tech",
            required: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Tech", children: "Tech" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 55,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Food", children: "Food" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 56,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("option", { value: "Entertainment", children: "Entertainment" }, void 0, !1, {
                fileName: "app/components/Modal/ModalForm.jsx",
                lineNumber: 57,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "input",
          {
            type: "date",
            id: "date",
            name: "date",
            placeholder: "Date",
            value: todaysDate,
            onChange: (e) => {
              setTodaysDate(e.target.value);
            },
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 63,
            columnNumber: 11
          },
          this
        ),
        (actionData == null ? void 0 : actionData.dateErrorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error-msg", children: actionData.dateErrorMessage }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "currency-amount", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "$" }, void 0, !1, {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 79,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type: "number", id: "amount", name: "amount", min: 0, max: "9999999", required: !0 }, void 0, !1, {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        (actionData == null ? void 0 : actionData.amountErrorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error-msg", children: actionData.amountErrorMessage }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 83,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Modal/ModalForm.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row second-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column type-section", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "type", className: "type-title", children: "Type" }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 90,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "row radio-btns", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "radio",
              name: "type",
              id: "income",
              value: "income",
              onChange: radiobuttonChangeHandler,
              defaultChecked: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/Modal/ModalForm.jsx",
              lineNumber: 94,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "income", className: "income-label", children: "Income" }, void 0, !1, {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "radio",
              name: "type",
              id: "expense",
              value: "expense",
              onChange: radiobuttonChangeHandler
            },
            void 0,
            !1,
            {
              fileName: "app/components/Modal/ModalForm.jsx",
              lineNumber: 106,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "expense", className: "expense-label", children: "Expense" }, void 0, !1, {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { htmlFor: "description", children: "Description" }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          "textarea",
          {
            type: "text",
            id: "description",
            name: "description",
            minLength: 0,
            maxLength: 350,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/components/Modal/ModalForm.jsx",
            lineNumber: 120,
            columnNumber: 11
          },
          this
        ),
        (actionData == null ? void 0 : actionData.descriptionErrorMessage) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "error-msg", children: actionData.descriptionErrorMessage }, void 0, !1, {
          fileName: "app/components/Modal/ModalForm.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Modal/ModalForm.jsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "submit-btns", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("button", { type: "button", className: "dismiss-btn", onClick: () => {
        var _a2;
        closeHandler(), (_a2 = formRef.current) == null || _a2.reset();
      }, children: "Dismiss" }, void 0, !1, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(add_transaction_btn_default2, { type: "submit", clickHandler: closeHandler }, void 0, !1, {
        fileName: "app/components/Modal/ModalForm.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Modal/ModalForm.jsx",
      lineNumber: 133,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modal/ModalForm.jsx",
    lineNumber: 33,
    columnNumber: 5
  }, this);
}, ModalForm_default = ModalForm;

// app/components/Modal/AddTransactionModal.jsx
var import_react_transition_group = require("react-transition-group"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function AddTransactionModal({ closeHandler, isModalOpen }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_react_transition_group.CSSTransition,
      {
        in: isModalOpen,
        timeout: 250,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "modal-bg", onClick: closeHandler }, void 0, !1, {
          fileName: "app/components/Modal/AddTransactionModal.jsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modal/AddTransactionModal.jsx",
        lineNumber: 9,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_react_transition_group.CSSTransition,
      {
        in: isModalOpen,
        timeout: 300,
        mountOnEnter: !0,
        unmountOnExit: !0,
        classNames: {
          enter: "",
          enterActive: "ModalOpen",
          exit: "",
          exitActive: "ModalClosed"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "modal", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "modal__modal-header", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { children: "Add Transaction" }, void 0, !1, {
              fileName: "app/components/Modal/AddTransactionModal.jsx",
              lineNumber: 31,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CloseIcon_default, {}, void 0, !1, {
              fileName: "app/components/Modal/AddTransactionModal.jsx",
              lineNumber: 33,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/Modal/AddTransactionModal.jsx",
              lineNumber: 32,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Modal/AddTransactionModal.jsx",
            lineNumber: 30,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ModalForm_default, { closeHandler }, void 0, !1, {
            fileName: "app/components/Modal/AddTransactionModal.jsx",
            lineNumber: 36,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Modal/AddTransactionModal.jsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modal/AddTransactionModal.jsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Modal/AddTransactionModal.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
function links9() {
  return [{ rel: "stylesheet", href: AddTransactionModal_default }];
}

// app/components/MoneyTags/MoneyTag.jsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function MoneyTag({
  startGradient,
  endGradient,
  dominantColor,
  detailsBgColor,
  dominant,
  cash
}) {
  let backgroundStyle = {
    background: `linear-gradient(90deg, ${startGradient} 0%, ${endGradient} 102.82%)`
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "money-tag column", style: backgroundStyle, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "money-tag__header row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { style: {
        color: dominantColor
      }, children: dominant }, void 0, !1, {
        fileName: "app/components/MoneyTags/MoneyTag.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { style: {
        background: detailsBgColor,
        color: "white"
      }, children: "details" }, void 0, !1, {
        fileName: "app/components/MoneyTags/MoneyTag.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/MoneyTags/MoneyTag.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "money-tag__cash", children: `$${cash}` }, void 0, !1, {
      fileName: "app/components/MoneyTags/MoneyTag.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MoneyTags/MoneyTag.jsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/styles/components/MoneyTag/MoneyTag.css
var MoneyTag_default = "/build/_assets/MoneyTag-535WUTXB.css";

// app/styles/components/MoneyTag/ListMoneyTags.css
var ListMoneyTags_default = "/build/_assets/ListMoneyTags-IL4P7PAO.css";

// app/components/MoneyTags/ListMoneyTags.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ListMoneyTags({ income, expense, balance }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "money-tags-list row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      MoneyTag,
      {
        cash: `${income}`,
        dominant: "Income",
        startGradient: "#7DD3FC",
        endGradient: "#BAE6FD",
        dominantColor: "#1A74C7",
        detailsBgColor: "rgba(56, 189, 248, 0.75)"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MoneyTags/ListMoneyTags.jsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      MoneyTag,
      {
        cash: `${balance}`,
        dominant: "Balance",
        startGradient: "#D4D4D8",
        endGradient: "#E4E4E7",
        dominantColor: "#71717A",
        detailsBgColor: "rgba(113, 113, 122, 0.75)"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MoneyTags/ListMoneyTags.jsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      MoneyTag,
      {
        cash: `${expense}`,
        dominant: "Expense",
        startGradient: "#FDA4AF",
        endGradient: "#FECDD3 ",
        dominantColor: "#EF2A4C",
        detailsBgColor: "rgba(251, 113, 133, 0.75)"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MoneyTags/ListMoneyTags.jsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MoneyTags/ListMoneyTags.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function links10() {
  return [
    {
      rel: "stylesheet",
      href: MoneyTag_default
    },
    {
      rel: "stylesheet",
      href: ListMoneyTags_default
    }
  ];
}

// app/util/week.js
function getWeekNumber(date) {
  return Math.floor(date.getDate() / 7);
}
function getCurrentWeekNumber() {
  let currentDate = new Date();
  return Math.floor(currentDate.getDate() / 7);
}

// app/routes/index.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Overview() {
  var _a;
  let [isModalOpen, setIsModalOpen] = (0, import_react11.useState)(!1), transactions = (0, import_react12.useLoaderData)(), userBalance = 0, userIncome = 0, userExpense = 0, currentDateYear = new Date().getFullYear(), currentDateMonth = new Date().getMonth(), currentWeek = getCurrentWeekNumber(), thisYearTransactions = [], thisMonthTransactions = [], thisWeekTransactions = [], showntransactions = [], shownTitle = "Empty";
  (_a = Object.keys(transactions)) == null || _a.forEach(function(key) {
    transactions[key].type === "income" ? userIncome += +transactions[key].amount : userExpense += +transactions[key].amount;
    let date = new Date(transactions[key].date);
    currentWeek === getWeekNumber(date) && date.getMonth() === currentDateMonth && date.getFullYear() === currentDateYear ? (console.log(getWeekNumber(date)), console.log(currentWeek), thisWeekTransactions.push({
      ...transactions[key],
      id: key
    })) : date.getMonth() === currentDateMonth && date.getFullYear === currentDateYear ? thisMonthTransactions.push({
      ...transactions[key],
      id: key
    }) : date.getFullYear() === currentDateYear ? thisYearTransactions.push({
      ...transactions[key],
      id: key
    }) : showntransactions.push({
      ...transactions[key],
      id: key
    });
  }), userBalance = userIncome - userExpense, thisWeekTransactions.length > 0 ? (thisWeekTransactions.length > 10 && (thisWeekTransactions = thisWeekTransactions.slice(0, 10)), showntransactions = thisWeekTransactions, shownTitle = "This Week") : thisMonthTransactions.length > 0 ? (thisMonthTransactions.length > 10 && (thisMonthTransactions = thisMonthTransactions.slice(0, 10)), showntransactions = thisMonthTransactions, shownTitle = "This Month") : thisYearTransactions.length > 0 ? (thisYearTransactions.length > 10 && (thisYearTransactions = thisYearTransactions.slice(0, 10)), showntransactions = thisYearTransactions, shownTitle = "This Year") : (showntransactions.splice(0, 10), shownTitle = "No Recent Transaction");
  let switchModaltoTrue = () => {
    setIsModalOpen(!0);
  }, switchModaltoFalse = () => {
    setIsModalOpen(!1);
  };
  return console.log(isModalOpen), /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(AddTransactionModal, { closeHandler: switchModaltoFalse, isModalOpen }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "overview-page", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(UpBar, { title: "Overview" }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("main", { className: "overview-page__content", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
          ListMoneyTags,
          {
            income: numFormatter(Number(userIncome)),
            expense: numFormatter(Number(userExpense)),
            balance: numFormatter(Number(userBalance))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index.jsx",
            lineNumber: 117,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "overview-page__content__transaction-title", children: shownTitle }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(TransactionList_default2, { transactions: showntransactions }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 125,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "overview-page__content__transaction-btn-bg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(add_transaction_btn_default2, { clickHandler: switchModaltoTrue }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 127,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.jsx",
          lineNumber: 126,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
async function loader2() {
  return await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json"
  );
}
async function action({ request }) {
  let formData = await request.formData(), body = Object.fromEntries(formData.entries()), descriptionEr, dateEr, amountEr, error;
  +body.amount == 1 && (amountEr = "the amount is too small", error = !0);
  let date = new Date(body.date), currentDate = new Date();
  date > currentDate && (dateEr = "the date is in the future", error = !0);
  let upperCaseLetters = body.description.match(/[A-Z]/g);
  return (upperCaseLetters == null ? void 0 : upperCaseLetters.length) > 1 && (descriptionEr = "the description has more than 1 uppercase", error = !0), error ? {
    descriptionErrorMessage: descriptionEr,
    dateErrorMessage: dateEr,
    amountErrorMessage: amountEr,
    error
  } : (await fetch(
    "https://cash-management-c186c-default-rtdb.firebaseio.com/changes.json",
    {
      method: "POST",
      body: JSON.stringify(body)
    }
  ), (0, import_node2.redirect)("/"));
}
function links11() {
  return [
    ...links9(),
    ...links8(),
    ...links10(),
    ...links6()
  ];
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d0da4cf5", entry: { module: "/build/entry.client-AKM2M3H2.js", imports: ["/build/_shared/chunk-O7OED4HK.js", "/build/_shared/chunk-SNKHZTVM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6WMFLCV2.js", imports: ["/build/_shared/chunk-FSKF2HWX.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-UDQNQ67A.js", imports: ["/build/_shared/chunk-RSKZ74ZE.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/transaction-history": { id: "routes/transaction-history", parentId: "root", path: "transaction-history", index: void 0, caseSensitive: void 0, module: "/build/routes/transaction-history-LCBO3NRP.js", imports: ["/build/_shared/chunk-RSKZ74ZE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-D0DA4CF5.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/transaction-history": {
    id: "routes/transaction-history",
    parentId: "root",
    path: "transaction-history",
    index: void 0,
    caseSensitive: void 0,
    module: transaction_history_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
//# sourceMappingURL=index.js.map

"use strict";
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

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
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
var root_default = "/build/_assets/root-AKMLZTSW.css";

// app/styles/pages/transaction-history.css
var transaction_history_default = "/build/_assets/transaction-history-LHWLMFY5.css";

// app/styles/components/MainNavigation/MainNavigation.css
var MainNavigation_default = "/build/_assets/MainNavigation-BIQH5UUQ.css";

// app/assets/Icons/Dollar-Circle-Icon.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), DollarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
  "svg",
  {
    width: "30px",
    height: "30px",
    viewBox: "0 0 32 33",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "path",
      {
        d: "M19.5758 11.6554C19.9377 12.0725 20.5693 12.1173 20.9865 11.7553C21.4036 11.3933 21.4483 10.7618 21.0864 10.3446L19.5758 11.6554ZM12.4242 20.3446C12.0623 19.9275 11.4307 19.8827 11.0136 20.2447C10.5964 20.6067 10.5517 21.2382 10.9136 21.6554L12.4242 20.3446ZM17 7.66667C17 7.11438 16.5523 6.66667 16 6.66667C15.4477 6.66667 15 7.11438 15 7.66667H17ZM15 24.3333C15 24.8856 15.4477 25.3333 16 25.3333C16.5523 25.3333 17 24.8856 17 24.3334L15 24.3333ZM30 16C30 23.732 23.732 30 16 30V32C24.8366 32 32 24.8366 32 16H30ZM16 30C8.26801 30 2 23.732 2 16H0C0 24.8366 7.16344 32 16 32V30ZM2 16C2 8.26801 8.26801 2 16 2V0C7.16344 0 0 7.16344 0 16H2ZM16 2C23.732 2 30 8.26801 30 16H32C32 7.16344 24.8366 0 16 0V2ZM16 15C14.7892 15 13.7382 14.671 13.0192 14.1916C12.2931 13.7076 12 13.1488 12 12.6667H10C10 14.0255 10.8262 15.1333 11.9098 15.8557C13.0004 16.5828 14.4494 17 16 17V15ZM12 12.6667C12 12.1846 12.2931 11.6257 13.0192 11.1417C13.7382 10.6623 14.7892 10.3333 16 10.3333V8.33333C14.4494 8.33333 13.0004 8.75053 11.9098 9.47759C10.8262 10.2 10 11.3078 10 12.6667H12ZM16 10.3333C17.6441 10.3333 18.9497 10.9338 19.5758 11.6554L21.0864 10.3446C19.9835 9.07355 18.0574 8.33333 16 8.33333V10.3333ZM16 17C17.2108 17 18.2618 17.329 18.9809 17.8084C19.7069 18.2924 20 18.8512 20 19.3333H22C22 17.9745 21.1739 16.8667 20.0902 16.1443C18.9996 15.4172 17.5506 15 16 15V17ZM15 7.66667V9.33333H17V7.66667H15ZM15 22.6666L15 24.3333L17 24.3334L17 22.6667L15 22.6666ZM16 21.6667C14.356 21.6667 13.0504 21.0662 12.4242 20.3446L10.9136 21.6554C12.0166 22.9264 13.9427 23.6667 16 23.6667L16 21.6667ZM20 19.3333C20 19.8154 19.7069 20.3743 18.9809 20.8583C18.2618 21.3377 17.2109 21.6667 16 21.6667V23.6667C17.5506 23.6667 18.9997 23.2495 20.0903 22.5224C21.1739 21.8 22 20.6922 22 19.3333H20ZM15 9.33334L15 22.6667L17 22.6667L17 9.33333L15 9.33334Z",
        fill: "#F05454"
      }
    )
  }
), Dollar_Circle_Icon_default = DollarIcon;

// app/components/MainNavigation.jsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function MainNavigation() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "main-nav-bg", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "main-nav-bg__nav-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Dollar_Circle_Icon_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "main-nav-bg__nav-title", children: "Finance Manager" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.NavLink, { to: "/", children: "Overview" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react2.NavLink, { to: "/transaction-history", children: "Transaction History" }) })
    ] })
  ] });
}
function links() {
  return [{ rel: "stylesheet", href: MainNavigation_default }];
}

// app/styles/components/UpBar.css
var UpBar_default = "/build/_assets/UpBar-72MVW65H.css";

// app/components/UpBar.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function UpBar({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "UpBar-bg", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "title", children: title }) });
}
function links2() {
  return [{ rel: "stylesheet", href: UpBar_default }];
}

// app/root.jsx
var import_jsx_runtime5 = require("react/jsx-runtime"), links3 = () => [
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("main", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MainNavigation, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Outlet, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Links, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("title", { children: "an error occured!" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "error", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { children: "an error occured!" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
          "error: ",
          error.message
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { children: [
          "Back to ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Link, { to: "/", children: "safety!" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: "or come back later" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
}

// app/routes/transaction-history.jsx
var transaction_history_exports = {};
__export(transaction_history_exports, {
  default: () => transaction_history,
  links: () => links7,
  loader: () => loader
});
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/assets/Icons/SearchBarIcon.jsx
var import_jsx_runtime6 = require("react/jsx-runtime"), searchBarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  "svg",
  {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "path",
      {
        d: "M16.5 16.5L11.5 11.5M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z",
        stroke: "#7E8594",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), SearchBarIcon_default = searchBarIcon;

// app/components/SearchBar.jsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_jsx_runtime7 = require("react/jsx-runtime");
function SearchBar({ searchHandler }) {
  let params = (0, import_react5.useLocation)(), searchParameter = new URLSearchParams(params.search).get("search"), searchRef = (0, import_react4.useRef)(searchParameter);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "search-bar-gr", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { className: "search-icon", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SearchBarIcon_default, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "input",
      {
        ref: searchRef,
        type: "text",
        placeholder: "Search",
        className: "search-input",
        onChange: () => {
          searchHandler(searchRef.current.value);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { onClick: () => {
      searchRef.current.value = "", searchHandler("");
    }, children: "Clear" })
  ] });
}

// app/assets/Icons/FilterBarIcon.jsx
var import_jsx_runtime8 = require("react/jsx-runtime"), FilterBarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        d: "M1 2C1 1.44772 1.44772 1 2 1H18C18.5523 1 19 1.44772 19 2V4.58579C19 4.851 18.8946 5.10536 18.7071 5.29289L12.2929 11.7071C12.1054 11.8946 12 12.149 12 12.4142V15L8 19V12.4142C8 12.149 7.89464 11.8946 7.70711 11.7071L1.29289 5.29289C1.10536 5.10536 1 4.851 1 4.58579V2Z",
        stroke: "#7E8594",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), FilterBarIcon_default = FilterBarIcon;

// app/styles/components/FilterBar.css
var FilterBar_default = "/build/_assets/FilterBar-635CC3XB.css";

// app/components/FiltersBar.jsx
var import_react6 = require("react"), import_react7 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime");
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
  }, [dates]), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "filters", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(FilterBarIcon_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
          "select",
          {
            "data-name": "category",
            id: "category",
            name: "category",
            defaultValue: categoryParameter,
            required: !0,
            onChange: categoryChangeHandler,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Salary", children: "Salary" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Loan", children: "Loan" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Gift", children: "Gift" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Tech", children: "Tech" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Food", children: "Food" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("option", { value: "Entertainment", children: "Entertainment" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { onClick: resetFilters, children: "Clear" })
    ] }),
    dates.fromDate > dates.toDate ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { children: "to Date can't be smaller than from date" }) : null
  ] });
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
var TransactionList_default = "/build/_assets/TransactionList-E3X7VDKQ.css";

// app/styles/components/Transactions/TransactionItem.css
var TransactionItem_default = "/build/_assets/TransactionItem-X4FMCPH5.css";

// app/assets/Icons/WorkIcon.jsx
var import_jsx_runtime10 = require("react/jsx-runtime"), WorkIcon = () => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("rect", { width: "32", height: "32", rx: "16", fill: "#059669", fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "path",
        {
          d: "M25 17.2554C22.2207 18.3805 19.1827 19 16 19C12.8173 19 9.7793 18.3805 7 17.2554M20 10V8C20 6.89543 19.1046 6 18 6H14C12.8954 6 12 6.89543 12 8V10M16 16H16.01M9 24H23C24.1046 24 25 23.1046 25 22V12C25 10.8954 24.1046 10 23 10H9C7.89543 10 7 10.8954 7 12V22C7 23.1046 7.89543 24 9 24Z",
          stroke: "#059669",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), WorkIcon_default = WorkIcon;

// app/assets/Icons/StudyIcon.jsx
var import_jsx_runtime11 = require("react/jsx-runtime"), StudyIcon = () => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("rect", { width: "32", height: "32", rx: "16", fill: "#0284C7", fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "path",
        {
          d: "M16 18L25 13L16 8L7 13L16 18ZM16 18L22.1591 14.5783C22.7017 15.9466 23 17.4384 23 18.9999C23 19.7013 22.9398 20.3885 22.8244 21.0569C20.2143 21.3106 17.849 22.4006 16 24.0555C14.151 22.4006 11.7857 21.3106 9.17562 21.0569C9.06017 20.3885 9 19.7012 9 18.9999C9 17.4384 9.29824 15.9466 9.84088 14.5782L16 18ZM12 23.9999V16.5L16 14.2778",
          stroke: "#0284C7",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), StudyIcon_default = StudyIcon;

// app/assets/Icons/TechIcon.jsx
var import_jsx_runtime12 = require("react/jsx-runtime"), TechIcon = () => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("rect", { width: "32", height: "32", rx: "16", fill: "#059669", fillOpacity: "0.2" }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        "path",
        {
          d: "M13 7V9M19 7V9M13 23V25M19 23V25M9 13H7M9 19H7M25 13H23M25 19H23M11 23H21C22.1046 23 23 22.1046 23 21V11C23 9.89543 22.1046 9 21 9H11C9.89543 9 9 9.89543 9 11V21C9 22.1046 9.89543 23 11 23ZM13 13H19V19H13V13Z",
          stroke: "#059669",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
), TechIcon_default = TechIcon;

// app/components/Transactions/TransactionItem.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function TransactionItem({ transaction }) {
  let transactionDate = new Date(transaction.date), today = new Date(), yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  let shownDate;
  transactionDate.getDate() === today.getDate() ? shownDate = "Today" : transactionDate.getDate() === yesterday.getDate() ? shownDate = "Yesterday" : shownDate = transactionDate.toLocaleDateString();
  let ShownIcon;
  return transaction.category === "work" ? ShownIcon = WorkIcon_default : transaction.category === "Tech" ? ShownIcon = TechIcon_default : ShownIcon = StudyIcon_default, /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "item row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "item__left row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ShownIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "item__left__text", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "item__left__text__title", children: transaction.description }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "item__right row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "item__right__date", children: shownDate }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        "p",
        {
          className: `item__right__amount ${transaction.type === "income" ? "income" : "expense"}`,
          children: transaction.type === "income" ? `+ $${transaction.amount}` : `- $${transaction.amount}`
        }
      )
    ] })
  ] });
}
function links5() {
  return [{ rel: "stylesheet", href: TransactionItem_default }];
}

// app/components/Transactions/TransactionList.jsx
var import_jsx_runtime14 = require("react/jsx-runtime"), TransactionList = ({ transactions }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "transactions-List column", children: transactions.map((transaction) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TransactionItem, { transaction }, transaction.id)) }), TransactionList_default2 = TransactionList;
function links6() {
  return [
    { rel: "stylesheet", href: TransactionList_default },
    ...links5()
  ];
}

// app/routes/transaction-history.jsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function transaction_history() {
  var _a;
  let params = (0, import_react8.useLocation)(), navigate = (0, import_react8.useNavigate)(), pageSeaarchParameter = +new URLSearchParams(params.search).get("page"), categoryParameter = new URLSearchParams(params.search).get("category"), datesP = {};
  datesP.from = new URLSearchParams(params.search).get("fromDate"), datesP.to = new URLSearchParams(params.search).get("toDate");
  let searchParameter = new URLSearchParams(params.search).get("search"), searched = !0;
  (searchParameter === null || searchParameter !== searchParameter || searchParameter === void 0) && (searched = !1), (pageSeaarchParameter === null || pageSeaarchParameter === NaN) && (pageSeaarchParameter = 0);
  let transactions = (0, import_react8.useLoaderData)(), filtered = new URLSearchParams(params.search).get("filtered");
  (filtered === null || filtered === "" || filtered === NaN) && (filtered = !1);
  let allTransactions = [], shownTransactions = [], numberOfPages, pages = 0;
  (_a = Object.keys(transactions)) == null || _a.forEach((key) => {
    allTransactions.push({
      ...transactions[key],
      id: key
    });
  });
  let [filterValues, setFilterValues] = (0, import_react9.useState)({
    category: "",
    fromDate: "",
    toDate: ""
  }), [filters, setFilters] = (0, import_react9.useState)({
    category: !1,
    dates: !1,
    filtered
  }), searchFilterHandler = (value) => {
    navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${value.length > 0 ? `&search=${value.toLowerCase()}` : ""}${filters.category ? `&category=${filterValues.category.trim()}` : ""}${filters.dates ? `&fromDate=${datesP.from}&toDate=${datesP.to}` : ""}`
    ), setFilters({
      ...filters,
      filtered: !0
    });
  }, categoryChangeHandler = (e) => {
    let { value } = e.target;
    setFilters({
      ...filters,
      category: !0,
      filtered: !0
    }), setFilterValues({
      ...filterValues,
      category: value
    }), navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}&category=${value}${filters.dates ? `&fromDate=${datesP.from}&toDate=${datesP.to}${searched ? `&search=${searchParameter}` : ""}` : ""}`
    );
  }, dateFilterHandler = (fromDate, toDate) => {
    setFilters({
      ...filters,
      dates: !0,
      filtered: !0
    }), setFilterValues({
      ...filterValues,
      fromDate,
      toDate
    }), navigate(
      `/transaction-history?filtered=true&page=${pageSeaarchParameter}${categoryParameter ? `&category=${categoryParameter}` : ""}&fromDate=${fromDate}&toDate=${toDate}${searched ? `&search=${searchParameter}` : ""}`
    );
  }, resetFilters = () => {
    setFilteredTransactions([]), setFilters({
      ...filters,
      category: !1,
      dates: !1,
      filtered: !1
    }), navigate("/transaction-history");
  };
  pages = [];
  let temp = [];
  categoryParameter === categoryParameter && categoryParameter !== null && categoryParameter !== void 0 && datesP.from === datesP.from && datesP.from !== null && datesP.from !== void 0 && datesP.to === datesP.to && datesP.to !== null && datesP.to !== void 0 ? temp = allTransactions.filter((transaction) => transaction.category === categoryParameter && transaction.date >= datesP.from && transaction.date <= datesP.to) : categoryParameter === categoryParameter && categoryParameter !== null && categoryParameter !== void 0 ? temp = allTransactions.filter((transaction) => transaction.category === categoryParameter) : datesP.from === datesP.from && datesP.from !== null && datesP.from !== void 0 && datesP.to === datesP.to && datesP.to !== null && datesP.to !== void 0 ? temp = allTransactions.filter((transaction) => transaction.date >= datesP.from && transaction.date <= datesP.to) : temp = allTransactions, searched && (temp = temp.filter((transaction) => transaction.description.toLowerCase().includes(searchParameter))), numberOfPages = Math.ceil(temp.length / 5), temp.length > 0 && (shownTransactions = temp.slice(
    pageSeaarchParameter * 5,
    pageSeaarchParameter * 5 + 5
  ));
  for (let i = 0; i < numberOfPages; i++)
    pages.push(i);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "transaction-history-page column", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(UpBar, { title: "Transaction History" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SearchBar, { searchHandler: searchFilterHandler }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        FiltersBar,
        {
          categoryChangeHandler,
          dateFilterHandler,
          resetFilters
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TransactionList_default2, { transactions: shownTransactions })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "pages", children: pages.map((page) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      import_react8.Link,
      {
        to: `?page=${page}${filters.filtered ? "&filtered=true" : ""}${categoryParameter !== null ? `&category=${categoryParameter}` : ""}${filters.dates ? `&fromDate=${filterValues.fromDate}&toDate=${filterValues.toDate}` : ""}`,
        className: pageSeaarchParameter === page ? "active" : "",
        children: page + 1
      }
    )) })
  ] });
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
var import_react12 = require("react"), import_node2 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/styles/components/AddTransactionModal.css
var AddTransactionModal_default = "/build/_assets/AddTransactionModal-2VP2POZO.css";

// app/assets/Icons/CloseIcon.jsx
var import_jsx_runtime16 = require("react/jsx-runtime"), CloseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      "path",
      {
        d: "M2 18L18 2M2 2L18 18",
        stroke: "#111827",
        strokeWidth: "3",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), CloseIcon_default = CloseIcon;

// app/components/Modal/ModalForm.jsx
var import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/styles/components/add-transaction-btn.css
var add_transaction_btn_default = "/build/_assets/add-transaction-btn-UBAXHOYK.css";

// app/components/add-transaction-btn.jsx
var import_jsx_runtime17 = require("react/jsx-runtime"), AddTransactionButton = ({ clickHandler, type = "button" }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { type, className: "add-transaction-btn", onClick: clickHandler, children: "Add Transaction" });
function links8() {
  return [{ rel: "stylesheet", href: add_transaction_btn_default }];
}
var add_transaction_btn_default2 = AddTransactionButton;

// app/components/Modal/ModalForm.jsx
var import_jsx_runtime18 = require("react/jsx-runtime"), ModalForm = ({ closeHandler }) => {
  var _a;
  let [transactionType, setTransactionType] = (0, import_react11.useState)("income"), formRef = (0, import_react11.useRef)(), navigation = (0, import_react10.useTransition)(), actionData = (0, import_react10.useActionData)();
  navigation.state === "submitting" && actionData !== void 0 && !actionData.error && (c, (_a = formRef.current) == null || _a.reset(), closeHandler());
  let radiobuttonChangeHandler = (e) => {
    setTransactionType(e.target.value);
  }, [todaysDate, setTodaysDate] = (0, import_react11.useState)(
    new Date().toISOString().slice(0, 10)
  );
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react10.Form, { ref: formRef, method: "post", replace: !0, children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "category", children: "Category" }),
        transactionType === "income" ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          "select",
          {
            id: "category",
            name: "category",
            defaultValue: "Gift",
            required: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Salary", children: "Salary" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Loan", children: "Loan" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Gift", children: "Gift" })
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          "select",
          {
            id: "category",
            name: "category",
            defaultValue: "Tech",
            required: !0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Tech", children: "Tech" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Food", children: "Food" }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("option", { value: "Entertainment", children: "Entertainment" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "date", children: "Date" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
          }
        ),
        (actionData == null ? void 0 : actionData.dateErrorMessage) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "error-msg", children: actionData.dateErrorMessage })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "amount", children: "Amount" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { className: "currency-amount", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: "$" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("input", { type: "number", id: "amount", name: "amount", min: 0, required: !0 })
        ] }),
        (actionData == null ? void 0 : actionData.amountErrorMessage) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "error-msg", children: actionData.amountErrorMessage })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "row second-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "column type-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "type", className: "type-title", children: "Type" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "row radio-btns", children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "input",
            {
              type: "radio",
              name: "type",
              id: "income",
              value: "income",
              onChange: radiobuttonChangeHandler,
              defaultChecked: !0
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "income", className: "income-label", children: "Income" }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "input",
            {
              type: "radio",
              name: "type",
              id: "expense",
              value: "expense",
              onChange: radiobuttonChangeHandler
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "expense", className: "expense-label", children: "Expense" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("label", { htmlFor: "description", children: "Description" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "textarea",
          {
            type: "text",
            id: "description",
            name: "description",
            minLength: 0,
            maxLength: 350,
            required: !0
          }
        ),
        (actionData == null ? void 0 : actionData.descriptionErrorMessage) && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "error-msg", children: actionData.descriptionErrorMessage })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "submit-btns", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", className: "dismiss-btn", onClick: () => {
        var _a2;
        (_a2 = formRef.current) == null || _a2.reset(), closeHandler();
      }, children: "Dismiss" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(add_transaction_btn_default2, { type: "submit" })
    ] })
  ] });
}, ModalForm_default = ModalForm;

// app/components/Modal/AddTransactionModal.jsx
var import_react_transition_group = require("react-transition-group"), import_jsx_runtime19 = require("react/jsx-runtime");
function AddTransactionModal({ closeHandler, isModalOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      import_react_transition_group.CSSTransition,
      {
        in: isModalOpen,
        timeout: 250,
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "modal-bg", onClick: closeHandler })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "modal", children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "modal__modal-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { children: "Add Transaction" }),
            /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { onClick: closeHandler, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(CloseIcon_default, {}) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ModalForm_default, { closeHandler })
        ] })
      }
    )
  ] });
}
function links9() {
  return [{ rel: "stylesheet", href: AddTransactionModal_default }];
}

// app/components/MoneyTags/MoneyTag.jsx
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "money-tag column", style: backgroundStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "money-tag__header row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { style: {
        color: dominantColor
      }, children: dominant }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { style: {
        background: detailsBgColor,
        color: "white"
      }, children: "details" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "money-tag__cash", children: `$${cash}` })
  ] });
}

// app/styles/components/MoneyTag/MoneyTag.css
var MoneyTag_default = "/build/_assets/MoneyTag-CEMHWBVX.css";

// app/styles/components/MoneyTag/ListMoneyTags.css
var ListMoneyTags_default = "/build/_assets/ListMoneyTags-D3CV2YWT.css";

// app/components/MoneyTags/ListMoneyTags.jsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function ListMoneyTags({ income, expense, balance }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "money-tags-list row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      MoneyTag,
      {
        cash: `${income}`,
        dominant: "Income",
        startGradient: "#7DD3FC",
        endGradient: "#BAE6FD",
        dominantColor: "#1A74C7",
        detailsBgColor: "rgba(56, 189, 248, 0.75)"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      MoneyTag,
      {
        cash: `${balance}`,
        dominant: "Balance",
        startGradient: "#D4D4D8",
        endGradient: "#E4E4E7",
        dominantColor: "#71717A",
        detailsBgColor: "rgba(113, 113, 122, 0.75)"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      MoneyTag,
      {
        cash: `${expense}`,
        dominant: "Expense",
        startGradient: "#FDA4AF",
        endGradient: "#FECDD3 ",
        dominantColor: "#EF2A4C",
        detailsBgColor: "rgba(251, 113, 133, 0.75)"
      }
    )
  ] });
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

// app/routes/index.jsx
var import_jsx_runtime22 = require("react/jsx-runtime"), getWeekNumber = (date) => Math.floor(date.getDate() / 7), getCurrentWeekNumber = () => {
  let currentDate = new Date();
  return Math.floor(currentDate.getDate() / 7);
};
function Overview() {
  var _a;
  let [isModalOpen, setIsModalOpen] = (0, import_react12.useState)(!1), transactions = (0, import_react13.useLoaderData)(), userBalance = 0, userIncome = 0, userExpense = 0, currentDateYear = new Date().getFullYear(), currentDateMonth = new Date().getMonth(), currentWeek = getCurrentWeekNumber(), thisYearTransactions = [], thisMonthTransactions = [], thisWeekTransactions = [], showntransactions = [], shownTitle = "Empty";
  return (_a = Object.keys(transactions)) == null || _a.forEach(function(key) {
    transactions[key].type === "income" ? userIncome += +transactions[key].amount : userExpense += +transactions[key].amount;
    let date = new Date(transactions[key].date);
    currentWeek === getWeekNumber(date) ? thisWeekTransactions.push({
      ...transactions[key],
      id: key
    }) : date.getMonth() === currentDateMonth ? thisMonthTransactions.push({
      ...transactions[key],
      id: key
    }) : date.getFullYear() === currentDateYear ? thisYearTransactions.push({
      ...transactions[key],
      id: key
    }) : showntransactions.push({
      ...transactions[key],
      id: key
    });
  }), userBalance = userIncome - userExpense, thisWeekTransactions.length > 0 ? (thisWeekTransactions.length > 10 && (thisWeekTransactions = thisWeekTransactions.slice(0, 10)), showntransactions = thisWeekTransactions, shownTitle = "This Week") : thisMonthTransactions.length > 0 ? (thisMonthTransactions.length > 10 && (thisMonthTransactions = thisMonthTransactions.slice(0, 10)), showntransactions = thisMonthTransactions, shownTitle = "This Month") : thisYearTransactions.length > 0 ? (thisYearTransactions.length > 10 && (thisYearTransactions = thisYearTransactions.slice(0, 10)), showntransactions = thisYearTransactions, shownTitle = "This Year") : (showntransactions.splice(0, 10), shownTitle = "No Recent Transaction"), /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(AddTransactionModal, { closeHandler: () => {
      setIsModalOpen(!1);
    }, isModalOpen }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "overview-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(UpBar, { title: "Overview" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("main", { className: "overview-page__content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          ListMoneyTags,
          {
            income: userIncome,
            expense: userExpense,
            balance: userBalance
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "overview-page__content__transaction-title", children: shownTitle }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TransactionList_default2, { transactions: showntransactions }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "overview-page__content__transaction-btn-bg", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(add_transaction_btn_default2, { clickHandler: () => {
          setIsModalOpen(!0);
        } }) })
      ] })
    ] })
  ] });
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
var assets_manifest_default = { version: "95d06281", entry: { module: "/build/entry.client-FSAQWSCX.js", imports: ["/build/_shared/chunk-PN3AFI4E.js", "/build/_shared/chunk-WWDKAJTU.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XSP65EPC.js", imports: ["/build/_shared/chunk-HHRWLI6F.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-A326WW4V.js", imports: ["/build/_shared/chunk-CQMJ6RXD.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/transaction-history": { id: "routes/transaction-history", parentId: "root", path: "transaction-history", index: void 0, caseSensitive: void 0, module: "/build/routes/transaction-history-6SKOPHKH.js", imports: ["/build/_shared/chunk-CQMJ6RXD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-95D06281.js" };

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

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});

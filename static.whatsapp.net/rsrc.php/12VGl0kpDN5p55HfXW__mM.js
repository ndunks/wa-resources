/*FB_PKG_DELIM*/

__d(
  "CometSSRClientRender",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    var g = "CometSSRClientRenderError";
    function a(a) {
      throw g + ": " + a;
    }
    f.CometSSRClientRenderErrorSentinel = g;
    f.CometSSRClientRender = a;
  },
  66
);
__d(
  "InlineFbtResult",
  ["cr:1183579"],
  function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:1183579");
  },
  98
);
__d(
  "InlineFbtResultImplComet",
  [
    "FbtHooks",
    "FbtReactUtil",
    "FbtResultBase",
    "react",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react");
    function k(a) {
      var b = a.content,
        d = a.hash,
        e = a.inlineMode;
      a = a.translation;
      d == null &&
        c("recoverableViolation")(
          'Fbt string hash should not be null for translated string "' +
            a +
            '" ' +
            ("[inlineMode=" + e + "]"),
          "internationalization"
        );
      return j.jsx("span", {
        "data-intl-hash": d,
        "data-intl-translation": a,
        "data-intl-trid": "",
        children: b,
      });
    }
    k.displayName = k.name + " [from " + f.id + "]";
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, e, f, g) {
        var i;
        i =
          a.call(
            this,
            b,
            (h || (h = c("FbtHooks"))).getErrorListener({
              hash: g,
              translation: f,
            })
          ) || this;
        i.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
        i.key = null;
        i.ref = null;
        i.type = k;
        i.props = { content: b, hash: g, inlineMode: e, translation: f };
        return i;
      }
      return b;
    })(c("FbtResultBase"));
    g["default"] = a;
  },
  98
);
__d(
  "TransAppInlineMode",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      STRING_MANAGER: "STRING_MANAGER",
      TRANSLATION: "TRANSLATION",
      APPROVE: "APPROVE",
      REPORT: "REPORT",
      NO_INLINE: "NO_INLINE",
    });
    f["default"] = a;
  },
  66
);
__d(
  "suspendOrThrowIfUsedInSSR",
  ["CometSSRClientRender", "ExecutionEnvironment"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    function a(a) {
      if (!(h || (h = c("ExecutionEnvironment"))).isInBrowser)
        throw d("CometSSRClientRender").CometSSRClientRender(a);
    }
    g["default"] = a;
  },
  98
);
__d(
  "deferredLoadComponentBase",
  [
    "ExecutionEnvironment",
    "Promise",
    "PromiseAnnotate",
    "react",
    "suspendOrThrowIfUsedInSSR",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k,
      l,
      m = l || c("react"),
      n = {},
      o = {},
      p = new Map();
    function q(a, b) {
      p.set(a, b);
    }
    function r(a) {
      return p.get(a);
    }
    function a(a, e) {
      var g = r(a);
      if (g) return g;
      var l,
        p = a.getModuleId();
      function s() {
        var c = o[p];
        c ||
          (c = o[p] =
            new (i || (i = b("Promise")))(function (b) {
              a.loadImmediately(function (a) {
                delete o[p], (l = e(a)), b();
              });
            }));
        return c;
      }
      function t() {
        var c = n[p];
        c ||
          (c = n[p] =
            new (i || (i = b("Promise")))(function (b) {
              a.onReady(function (a) {
                (l = e(a)), delete n[p], b();
              });
            }));
        return c;
      }
      function u(b) {
        var f = b.ref;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["ref"]);
        var g = b.loadImmediately;
        b = babelHelpers.objectWithoutPropertiesLoose(b, ["loadImmediately"]);
        if (!l) {
          var i = a.getModuleIfRequireable();
          i != null && (l = e(i));
          if (!l) {
            !(j || (j = c("ExecutionEnvironment"))).isInBrowser &&
              !a.isAvailableInSSR_DO_NOT_USE() &&
              (k || (k = c("suspendOrThrowIfUsedInSSR")))(
                "Loading bootloaded and T3 components are disabled during SSR"
              );
            i = g === !0 ? s() : t();
            (h || (h = d("PromiseAnnotate"))).setDisplayName(i, u.displayName);
            throw i;
          }
        }
        return m.jsx(l, babelHelpers["extends"]({}, b, { ref: f }));
      }
      u.displayName = u.name + " [from " + f.id + "]";
      g = a.getModuleId();
      a.isRequireDeferredForDisplay() === !0
        ? (g = "requireDeferredForDisplay" + ("(" + a.getModuleId() + ")"))
        : a.isRequireDeferredForDisplay() === !1 &&
          (g = "requireDeferred" + ("(" + a.getModuleId() + ")"));
      u.displayName = "deferredLoadComponent(" + g + ")";
      g = u;
      q(a, g);
      return g;
    }
    g["default"] = a;
  },
  98
);
__d(
  "deferredLoadComponent",
  ["deferredLoadComponentBase"],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
      return a;
    };
    function a(a) {
      return c("deferredLoadComponentBase")(a, h);
    }
    g["default"] = a;
  },
  98
);
__d(
  "WAWebKeyboardRotateFocusModal.react",
  [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "react",
    "stylex",
    "useMergeRefs",
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j,
      k = j || c("react"),
      l = (h || (h = d("react"))).useRef,
      m = {
        container: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineEnd: "xtijo5x",
          bottom: "x1ey2m1c",
          insetInlineStart: "x1o0tod",
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        e = a.focusType,
        f = a.onBlur,
        g = a.ref;
      a = a.xstyle;
      var h = l(null);
      g = c("useMergeRefs")(g, h);
      var j = function (a) {
          var b = h.current;
          if (!b) return;
          var c = a.shiftKey
              ? d("WAWebKeyboardTabUtils").TabDirection.BACKWARD
              : d("WAWebKeyboardTabUtils").TabDirection.FORWARD,
            f =
              e != null
                ? e
                : { type: d("WAWebKeyboardTabUtils").FocusType.TABBABLE },
            g = f.type;
          f = f.customSelector;
          b = d("WAWebKeyboardTabUtils").getNextTabbableElement(
            b,
            c,
            g,
            void 0,
            f
          );
          if (b == null) return;
          a.preventDefault();
          b.focus();
        },
        n = function (a) {
          if (a.metaKey || a.ctrlKey) return;
          if (
            a.key === d("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
          )
            return j(a);
        };
      return k.jsx(
        "div",
        babelHelpers["extends"](
          { ref: g },
          (i || (i = c("stylex"))).props(m.container, a),
          { onKeyDown: n, tabIndex: -1, onBlur: f, children: b }
        )
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WAWebProgressBar.scss",
  ["cx"],
  function (a, b, c, d, e, f, g, h) {
    a = { progress: "_ak0k" };
    b = a;
    g["default"] = b;
  },
  98
);
__d(
  "WAWebProgressBar.react",
  ["WAWebClassnames", "WAWebProgressBar.scss", "react"],
  function (a, b, c, d, e, f, g) {
    var h,
      i = h || c("react");
    function a(a) {
      var b = a.className,
        e = a.max;
      e = e === void 0 ? 100 : e;
      a = a.value;
      return i.jsx("progress", {
        value: a,
        max: e,
        className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(
          c("WAWebProgressBar.scss").progress,
          b
        ),
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "WAWebWaLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = h || c("react"),
      k = "wa-logo";
    function a(a) {
      var b = a.iconXstyle,
        e = a.height,
        f = a.width,
        g = a.name,
        h = a.viewBox;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "iconXstyle",
        "height",
        "width",
        "name",
        "viewBox",
      ]);
      var l;
      if (h) {
        var m = h.x;
        m = m === void 0 ? 0 : m;
        var n = h.y;
        n = n === void 0 ? 0 : n;
        var o = h.width;
        o = o === void 0 ? 0 : o;
        h = h.height;
        h = h === void 0 ? 0 : h;
        l = [m, n, o, h].join(" ");
      }
      m = 30;
      n = 31;
      (e != null || f != null) && ((m = e), (n = f));
      return j.jsx(
        d("WAWebSvgComponentBase").BaseSvgSpan,
        babelHelpers["extends"]({ name: g != null ? g : k }, a, {
          children: j.jsxs("svg", {
            viewBox: (o = l) != null ? o : "0 0 31 30",
            height: m,
            width: n,
            preserveAspectRatio: "xMidYMid meet",
            className: (i || (i = c("stylex")))(b),
            fill: "none",
            children: [
              j.jsx("title", { children: g != null ? g : k }),
              j.jsx("path", {
                d: "M30.3139 14.3245C30.174 10.4932 28.5594 6.864 25.8073 4.1948C23.0552 1.52559 19.3784 0.0227244 15.5446 4.10118e-06H15.4722C12.8904 -0.00191309 10.3527 0.668375 8.10857 1.94491C5.86449 3.22145 3.99142 5.06026 2.67367 7.28039C1.35592 9.50053 0.6389 12.0255 0.593155 14.6068C0.547411 17.1882 1.17452 19.737 2.41278 22.0024L1.09794 29.8703C1.0958 29.8865 1.09712 29.9029 1.10182 29.9185C1.10651 29.9341 1.11448 29.9485 1.12518 29.9607C1.13588 29.973 1.14907 29.9828 1.16387 29.9896C1.17867 29.9964 1.19475 29.9999 1.21103 30H1.23365L9.01561 28.269C11.0263 29.2344 13.2282 29.7353 15.4586 29.7346C15.6004 29.7346 15.7421 29.7346 15.8838 29.7346C17.8458 29.6786 19.7773 29.2346 21.5667 28.4282C23.3562 27.6218 24.9682 26.469 26.3098 25.0363C27.6514 23.6036 28.696 21.9194 29.3832 20.0809C30.0704 18.2423 30.3867 16.2859 30.3139 14.3245ZM15.8099 27.1487C15.6923 27.1487 15.5747 27.1487 15.4586 27.1487C13.4874 27.1511 11.5444 26.6795 9.79366 25.7735L9.39559 25.5654L4.11815 26.8124L5.09221 21.4732L4.86604 21.0902C3.78579 19.2484 3.20393 17.157 3.17778 15.0219C3.15163 12.8869 3.68208 10.7819 4.71689 8.91419C5.75171 7.0465 7.25518 5.48059 9.07924 4.37067C10.9033 3.26076 12.985 2.64514 15.1194 2.58444C15.238 2.58444 15.3571 2.58444 15.4767 2.58444C18.6992 2.59399 21.7889 3.86908 24.0802 6.13498C26.3715 8.40087 27.681 11.4762 27.7265 14.6984C27.7719 17.9205 26.5498 21.0316 24.3234 23.3612C22.0969 25.6909 19.0444 27.0527 15.8235 27.1532L15.8099 27.1487Z",
                fill: "currentColor",
              }),
              j.jsx("path", {
                d: "M10.2894 7.69007C10.1057 7.69366 9.92456 7.73407 9.75673 7.80892C9.5889 7.88377 9.43779 7.99154 9.31236 8.12584C8.95801 8.48923 7.96736 9.36377 7.91006 11.2003C7.85277 13.0369 9.13594 14.8538 9.31537 15.1086C9.49481 15.3635 11.7686 19.3306 15.5141 20.9395C17.7156 21.8879 18.6806 22.0507 19.3063 22.0507C19.5642 22.0507 19.7587 22.0236 19.9622 22.0115C20.6483 21.9693 22.1969 21.1762 22.5346 20.3137C22.8724 19.4512 22.895 18.6973 22.806 18.5465C22.7171 18.3957 22.4728 18.2872 22.1049 18.0942C21.737 17.9012 19.9321 16.9361 19.5928 16.8004C19.467 16.7419 19.3316 16.7066 19.1932 16.6964C19.1031 16.7011 19.0155 16.7278 18.938 16.774C18.8605 16.8203 18.7954 16.8847 18.7484 16.9618C18.4469 17.3372 17.7548 18.153 17.5225 18.3882C17.4718 18.4466 17.4093 18.4938 17.3392 18.5265C17.2691 18.5592 17.1928 18.5768 17.1154 18.5782C16.9728 18.5719 16.8333 18.5344 16.7068 18.4681C15.6135 18.0038 14.6167 17.339 13.768 16.5079C12.975 15.7263 12.3022 14.8315 11.7716 13.8526C11.5666 13.4726 11.7716 13.2766 11.9586 13.0987C12.1456 12.9208 12.3461 12.675 12.5391 12.4624C12.6975 12.2808 12.8295 12.0777 12.9312 11.8593C12.9838 11.7578 13.0104 11.6449 13.0085 11.5307C13.0067 11.4165 12.9765 11.3045 12.9206 11.2048C12.8317 11.0149 12.1667 9.14664 11.8546 8.39725C11.6013 7.75642 11.2997 7.73531 11.0358 7.7157C10.8187 7.70062 10.5699 7.69309 10.3211 7.68555H10.2894",
                fill: "currentColor",
              }),
            ],
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WaLogoIcon = a;
  },
  98
);
__d(
  "getUnwrappedFbt",
  ["FbtResultGK"],
  function (a, b, c, d, e, f) {
    function a(a) {
      a = a.contents;
      var c = b("FbtResultGK").inlineMode,
        d = b("FbtResultGK").shouldReturnFbtResult;
      if (!d && c !== "REPORT")
        return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string"
          ? a[0]
          : a;
    }
    e.exports = a;
  },
  null
);
__d(
  "getFbtResult",
  [
    "FbtResult",
    "FbtResultGK",
    "InlineFbtResult",
    "getUnwrappedFbt",
    "gkx",
    "recoverableViolation",
  ],
  function (a, b, c, d, e, f, g) {
    c("gkx")("20935") &&
      c("FbtResultGK").inlineMode === "TRANSLATION" &&
      c("recoverableViolation")(
        "TransAppInlineMode=TRANSLATION should not happen on Comet yet. " +
          ("[inlineMode=" +
            (c("FbtResultGK").inlineMode != null
              ? c("FbtResultGK").inlineMode
              : "") +
            "]") +
          ("[runtime_site_is_comet=" + String(c("gkx")("20935")) + "]"),
        "internationalization"
      );
    function a(a) {
      var b = c("getUnwrappedFbt")(a);
      if (b != null) return b;
      b = a.contents;
      var d = a.patternString,
        e = a.patternHash;
      return c("FbtResultGK").inlineMode != null &&
        c("FbtResultGK").inlineMode !== "NO_INLINE"
        ? new (c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e)
        : c("FbtResult").get(a);
    }
    g["default"] = a;
  },
  98
); /*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d(
  "react-0.0.0",
  ["React"],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a && typeof a === "object" && "default" in a ? a["default"] : a;
    }
    var g = a(b("React"));
    d = {};
    var h = { exports: d };
    function i() {
      h.exports = g;
    }
    var j = !1;
    function k() {
      j || ((j = !0), i());
      return h.exports;
    }
    function c(a) {
      switch (a) {
        case void 0:
          return k();
      }
    }
    e.exports = c;
  },
  null
);
__d(
  "react",
  ["react-0.0.0"],
  function (a, b, c, d, e, f) {
    e.exports = b("react-0.0.0")();
  },
  null
);

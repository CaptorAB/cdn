var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __defNormalProp = (e, t, n) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n,
        })
      : (e[t] = n),
  __spreadValues = (e, t) => {
    for (var n in t || (t = {}))
      __hasOwnProp.call(t, n) && __defNormalProp(e, n, t[n]);
    if (__getOwnPropSymbols)
      for (var n of __getOwnPropSymbols(t))
        __propIsEnum.call(t, n) && __defNormalProp(e, n, t[n]);
    return e;
  },
  __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
  __objRest = (e, t) => {
    var n = {};
    for (var r in e)
      __hasOwnProp.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && __getOwnPropSymbols)
      for (var r of __getOwnPropSymbols(e))
        t.indexOf(r) < 0 && __propIsEnum.call(e, r) && (n[r] = e[r]);
    return n;
  };
!(function (e, t) {
  "use strict";
  var n =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function r(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var a = { exports: {} },
    i = {},
    o = { exports: {} },
    u = {},
    l = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.iterator,
    _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function T(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = w),
      (this.updater = n || _);
  }
  function k() {}
  function C(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = w),
      (this.updater = n || _);
  }
  (T.prototype.isReactComponent = {}),
    (T.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (T.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (k.prototype = T.prototype);
  var E = (C.prototype = new k());
  (E.constructor = C), S(E, T.prototype), (E.isPureReactComponent = !0);
  var x = Array.isArray,
    P = Object.prototype.hasOwnProperty,
    A = { current: null },
    M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function N(e, t, n) {
    var r,
      a = {},
      i = null,
      o = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (o = t.ref),
      void 0 !== t.key && (i = "" + t.key),
      t))
        P.call(t, r) && !M.hasOwnProperty(r) && (a[r] = t[r]);
    var u = arguments.length - 2;
    if (1 === u) a.children = n;
    else if (1 < u) {
      for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
      a.children = s;
    }
    if (e && e.defaultProps)
      for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
    return {
      $$typeof: l,
      type: e,
      key: i,
      ref: o,
      props: a,
      _owner: A.current,
    };
  }
  function I(e) {
    return "object" == typeof e && null !== e && e.$$typeof === l;
  }
  var R = /\/+/g;
  function O(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? ((n = "" + e.key),
        (r = { "=": "=0", ":": "=2" }),
        "$" +
          n.replace(/[=:]/g, function (e) {
            return r[e];
          }))
      : t.toString(36);
    var n, r;
  }
  function F(e, t, n, r, a) {
    var i = typeof e;
    ("undefined" !== i && "boolean" !== i) || (e = null);
    var o,
      u,
      c = !1;
    if (null === e) c = !0;
    else
      switch (i) {
        case "string":
        case "number":
          c = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case l:
            case s:
              c = !0;
          }
      }
    if (c)
      return (
        (a = a((c = e))),
        (e = "" === r ? "." + O(c, 0) : r),
        x(a)
          ? ((n = ""),
            null != e && (n = e.replace(R, "$&/") + "/"),
            F(a, t, n, "", function (e) {
              return e;
            }))
          : null != a &&
            (I(a) &&
              ((o = a),
              (u =
                n +
                (!a.key || (c && c.key === a.key)
                  ? ""
                  : ("" + a.key).replace(R, "$&/") + "/") +
                e),
              (a = {
                $$typeof: l,
                type: o.type,
                key: u,
                ref: o.ref,
                props: o.props,
                _owner: o._owner,
              })),
            t.push(a)),
        1
      );
    if (((c = 0), (r = "" === r ? "." : r + ":"), x(e)))
      for (var f = 0; f < e.length; f++) {
        var d = r + O((i = e[f]), f);
        c += F(i, t, n, d, a);
      }
    else if (
      ((d = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (b && e[b]) || e["@@iterator"])
          ? e
          : null;
      })(e)),
      "function" == typeof d)
    )
      for (e = d.call(e), f = 0; !(i = e.next()).done; )
        c += F((i = i.value), t, n, (d = r + O(i, f++)), a);
    else if ("object" === i)
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === t
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return c;
  }
  function D(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      F(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function L(e) {
    if (-1 === e._status) {
      var t = e._result;
      (t = t()).then(
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 2), (e._result = t));
        }
      ),
        -1 === e._status && ((e._status = 0), (e._result = t));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var B = { current: null },
    j = { transition: null },
    z = {
      ReactCurrentDispatcher: B,
      ReactCurrentBatchConfig: j,
      ReactCurrentOwner: A,
    };
  (u.Children = {
    map: D,
    forEach: function (e, t, n) {
      D(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        D(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        D(e, function (e) {
          return e;
        }) || []
      );
    },
    only: function (e) {
      if (!I(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (u.Component = T),
    (u.Fragment = c),
    (u.Profiler = d),
    (u.PureComponent = C),
    (u.StrictMode = f),
    (u.Suspense = g),
    (u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (u.cloneElement = function (e, t, n) {
      if (null == e)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = S({}, e.props),
        a = e.key,
        i = e.ref,
        o = e._owner;
      if (null != t) {
        if (
          (void 0 !== t.ref && ((i = t.ref), (o = A.current)),
          void 0 !== t.key && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var u = e.type.defaultProps;
        for (s in t)
          P.call(t, s) &&
            !M.hasOwnProperty(s) &&
            (r[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
      }
      var s = arguments.length - 2;
      if (1 === s) r.children = n;
      else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
      }
      return { $$typeof: l, type: e.type, key: a, ref: i, props: r, _owner: o };
    }),
    (u.createContext = function (e) {
      return (
        ((e = {
          $$typeof: p,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: h, _context: e }),
        (e.Consumer = e)
      );
    }),
    (u.createElement = N),
    (u.createFactory = function (e) {
      var t = N.bind(null, e);
      return (t.type = e), t;
    }),
    (u.createRef = function () {
      return { current: null };
    }),
    (u.forwardRef = function (e) {
      return { $$typeof: m, render: e };
    }),
    (u.isValidElement = I),
    (u.lazy = function (e) {
      return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: L };
    }),
    (u.memo = function (e, t) {
      return { $$typeof: v, type: e, compare: void 0 === t ? null : t };
    }),
    (u.startTransition = function (e) {
      var t = j.transition;
      j.transition = {};
      try {
        e();
      } finally {
        j.transition = t;
      }
    }),
    (u.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (u.useCallback = function (e, t) {
      return B.current.useCallback(e, t);
    }),
    (u.useContext = function (e) {
      return B.current.useContext(e);
    }),
    (u.useDebugValue = function () {}),
    (u.useDeferredValue = function (e) {
      return B.current.useDeferredValue(e);
    }),
    (u.useEffect = function (e, t) {
      return B.current.useEffect(e, t);
    }),
    (u.useId = function () {
      return B.current.useId();
    }),
    (u.useImperativeHandle = function (e, t, n) {
      return B.current.useImperativeHandle(e, t, n);
    }),
    (u.useInsertionEffect = function (e, t) {
      return B.current.useInsertionEffect(e, t);
    }),
    (u.useLayoutEffect = function (e, t) {
      return B.current.useLayoutEffect(e, t);
    }),
    (u.useMemo = function (e, t) {
      return B.current.useMemo(e, t);
    }),
    (u.useReducer = function (e, t, n) {
      return B.current.useReducer(e, t, n);
    }),
    (u.useRef = function (e) {
      return B.current.useRef(e);
    }),
    (u.useState = function (e) {
      return B.current.useState(e);
    }),
    (u.useSyncExternalStore = function (e, t, n) {
      return B.current.useSyncExternalStore(e, t, n);
    }),
    (u.useTransition = function () {
      return B.current.useTransition();
    }),
    (u.version = "18.2.0"),
    (o.exports = u);
  var U = o.exports;
  const G = r(U);
  var V = U,
    $ = Symbol.for("react.element"),
    H = Symbol.for("react.fragment"),
    Y = Object.prototype.hasOwnProperty,
    W = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(e, t, n) {
    var r,
      a = {},
      i = null,
      o = null;
    for (r in (void 0 !== n && (i = "" + n),
    void 0 !== t.key && (i = "" + t.key),
    void 0 !== t.ref && (o = t.ref),
    t))
      Y.call(t, r) && !q.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return {
      $$typeof: $,
      type: e,
      key: i,
      ref: o,
      props: a,
      _owner: W.current,
    };
  }
  (i.Fragment = H), (i.jsx = K), (i.jsxs = K), (a.exports = i);
  var Q = a.exports,
    J = { exports: {} },
    X = {},
    Z = { exports: {} },
    ee = {};
  !(function (e) {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          i = e[r];
        if (!(0 < a(i, t))) break e;
        (e[r] = t), (e[n] = i), (n = r);
      }
    }
    function n(e) {
      return 0 === e.length ? null : e[0];
    }
    function r(e) {
      if (0 === e.length) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
          var u = 2 * (r + 1) - 1,
            l = e[u],
            s = u + 1,
            c = e[s];
          if (0 > a(l, n))
            s < i && 0 > a(c, l)
              ? ((e[r] = c), (e[s] = n), (r = s))
              : ((e[r] = l), (e[u] = n), (r = u));
          else {
            if (!(s < i && 0 > a(c, n))) break e;
            (e[r] = c), (e[s] = n), (r = s);
          }
        }
      }
      return t;
    }
    function a(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    if (
      "object" == typeof performance &&
      "function" == typeof performance.now
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var o = Date,
        u = o.now();
      e.unstable_now = function () {
        return o.now() - u;
      };
    }
    var l = [],
      s = [],
      c = 1,
      f = null,
      d = 3,
      h = !1,
      p = !1,
      m = !1,
      g = "function" == typeof setTimeout ? setTimeout : null,
      v = "function" == typeof clearTimeout ? clearTimeout : null,
      y = "undefined" != typeof setImmediate ? setImmediate : null;
    function b(e) {
      for (var a = n(s); null !== a; ) {
        if (null === a.callback) r(s);
        else {
          if (!(a.startTime <= e)) break;
          r(s), (a.sortIndex = a.expirationTime), t(l, a);
        }
        a = n(s);
      }
    }
    function _(e) {
      if (((m = !1), b(e), !p))
        if (null !== n(l)) (p = !0), I(S);
        else {
          var t = n(s);
          null !== t && R(_, t.startTime - e);
        }
    }
    function S(t, a) {
      (p = !1), m && ((m = !1), v(C), (C = -1)), (h = !0);
      var i = d;
      try {
        for (
          b(a), f = n(l);
          null !== f && (!(f.expirationTime > a) || (t && !P()));

        ) {
          var o = f.callback;
          if ("function" == typeof o) {
            (f.callback = null), (d = f.priorityLevel);
            var u = o(f.expirationTime <= a);
            (a = e.unstable_now()),
              "function" == typeof u ? (f.callback = u) : f === n(l) && r(l),
              b(a);
          } else r(l);
          f = n(l);
        }
        if (null !== f) var c = !0;
        else {
          var g = n(s);
          null !== g && R(_, g.startTime - a), (c = !1);
        }
        return c;
      } finally {
        (f = null), (d = i), (h = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var w,
      T = !1,
      k = null,
      C = -1,
      E = 5,
      x = -1;
    function P() {
      return !(e.unstable_now() - x < E);
    }
    function A() {
      if (null !== k) {
        var t = e.unstable_now();
        x = t;
        var n = !0;
        try {
          n = k(!0, t);
        } finally {
          n ? w() : ((T = !1), (k = null));
        }
      } else T = !1;
    }
    if ("function" == typeof y)
      w = function () {
        y(A);
      };
    else if ("undefined" != typeof MessageChannel) {
      var M = new MessageChannel(),
        N = M.port2;
      (M.port1.onmessage = A),
        (w = function () {
          N.postMessage(null);
        });
    } else
      w = function () {
        g(A, 0);
      };
    function I(e) {
      (k = e), T || ((T = !0), w());
    }
    function R(t, n) {
      C = g(function () {
        t(e.unstable_now());
      }, n);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        p || h || ((p = !0), I(S));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (E = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (e) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = d;
        }
        var n = d;
        d = t;
        try {
          return e();
        } finally {
          d = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = d;
        d = e;
        try {
          return t();
        } finally {
          d = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, a, i) {
        var o = e.unstable_now();
        switch (
          ((i =
            "object" == typeof i &&
            null !== i &&
            "number" == typeof (i = i.delay) &&
            0 < i
              ? o + i
              : o),
          r)
        ) {
          case 1:
            var u = -1;
            break;
          case 2:
            u = 250;
            break;
          case 5:
            u = 1073741823;
            break;
          case 4:
            u = 1e4;
            break;
          default:
            u = 5e3;
        }
        return (
          (r = {
            id: c++,
            callback: a,
            priorityLevel: r,
            startTime: i,
            expirationTime: (u = i + u),
            sortIndex: -1,
          }),
          i > o
            ? ((r.sortIndex = i),
              t(s, r),
              null === n(l) &&
                r === n(s) &&
                (m ? (v(C), (C = -1)) : (m = !0), R(_, i - o)))
            : ((r.sortIndex = u), t(l, r), p || h || ((p = !0), I(S))),
          r
        );
      }),
      (e.unstable_shouldYield = P),
      (e.unstable_wrapCallback = function (e) {
        var t = d;
        return function () {
          var n = d;
          d = t;
          try {
            return e.apply(this, arguments);
          } finally {
            d = n;
          }
        };
      });
  })(ee),
    (Z.exports = ee);
  var te = Z.exports,
    ne = U,
    re = te;
  function ae(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var ie = new Set(),
    oe = {};
  function ue(e, t) {
    le(e, t), le(e + "Capture", t);
  }
  function le(e, t) {
    for (oe[e] = t, e = 0; e < t.length; e++) ie.add(t[e]);
  }
  var se = !(
      "undefined" == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    ),
    ce = Object.prototype.hasOwnProperty,
    fe =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    de = {},
    he = {};
  function pe(e, t, n, r, a, i, o) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var me = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      me[e] = new pe(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      me[t] = new pe(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      me[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      me[e] = new pe(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        me[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      me[e] = new pe(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      me[e] = new pe(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      me[e] = new pe(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      me[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ge = /[\-:]([a-z])/g;
  function ve(e) {
    return e[1].toUpperCase();
  }
  function ye(e, t, n, r) {
    var a,
      i = me.hasOwnProperty(t) ? me[t] : null;
    (null !== i
      ? 0 !== i.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, i, r) && (n = null),
      r || null === i
        ? ((a = t),
          (ce.call(he, a) ||
            (!ce.call(de, a) &&
              (fe.test(a) ? (he[a] = !0) : ((de[a] = !0), 0)))) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)))
        : i.mustUseProperty
        ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ge, ve);
      me[t] = new pe(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ge, ve);
        me[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ge, ve);
      me[t] = new pe(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      me[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (me.xlinkHref = new pe(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      me[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  var be = ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    _e = Symbol.for("react.element"),
    Se = Symbol.for("react.portal"),
    we = Symbol.for("react.fragment"),
    Te = Symbol.for("react.strict_mode"),
    ke = Symbol.for("react.profiler"),
    Ce = Symbol.for("react.provider"),
    Ee = Symbol.for("react.context"),
    xe = Symbol.for("react.forward_ref"),
    Pe = Symbol.for("react.suspense"),
    Ae = Symbol.for("react.suspense_list"),
    Me = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    Ie = Symbol.for("react.offscreen"),
    Re = Symbol.iterator;
  function Oe(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (Re && e[Re]) || e["@@iterator"])
      ? e
      : null;
  }
  var Fe,
    De = Object.assign;
  function Le(e) {
    if (void 0 === Fe)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Fe = (t && t[1]) || "";
      }
    return "\n" + Fe + e;
  }
  var Be = !1;
  function je(e, t) {
    if (!e || Be) return "";
    Be = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (s) {
            var r = s;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (s) {
            r = s;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (c) {
      if (c && r && "string" == typeof c.stack) {
        for (
          var a = c.stack.split("\n"),
            i = r.stack.split("\n"),
            o = a.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && a[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (a[o] !== i[u]) {
            if (1 !== o || 1 !== u)
              do {
                if ((o--, 0 > --u || a[o] !== i[u])) {
                  var l = "\n" + a[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              } while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (Be = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Le(e) : "";
  }
  function ze(e) {
    switch (e.tag) {
      case 5:
        return Le(e.type);
      case 16:
        return Le("Lazy");
      case 13:
        return Le("Suspense");
      case 19:
        return Le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return je(e.type, !1);
      case 11:
        return je(e.type.render, !1);
      case 1:
        return je(e.type, !0);
      default:
        return "";
    }
  }
  function Ue(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case we:
        return "Fragment";
      case Se:
        return "Portal";
      case ke:
        return "Profiler";
      case Te:
        return "StrictMode";
      case Pe:
        return "Suspense";
      case Ae:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case Ee:
          return (e.displayName || "Context") + ".Consumer";
        case Ce:
          return (e._context.displayName || "Context") + ".Provider";
        case xe:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case Me:
          return null !== (t = e.displayName || null)
            ? t
            : Ue(e.type) || "Memo";
        case Ne:
          (t = e._payload), (e = e._init);
          try {
            return Ue(e(t));
          } catch (n) {}
      }
    return null;
  }
  function Ge(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ue(t);
      case 8:
        return t === Te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function Ve(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function $e(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function He(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = $e(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            i = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                (r = "" + e), i.call(this, e);
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                (e._valueTracker = null), delete e[t];
              },
            }
          );
        }
      })(e));
  }
  function Ye(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = $e(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function We(e) {
    if (
      void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function qe(e, t) {
    var n = t.checked;
    return De({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function Ke(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Ve(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function Qe(e, t) {
    null != (t = t.checked) && ye(e, "checked", t, !1);
  }
  function Je(e, t) {
    Qe(e, t);
    var n = Ve(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? Ze(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ze(e, t.type, Ve(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Xe(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          ("submit" !== r && "reset" !== r) ||
          (void 0 !== t.value && null !== t.value)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    "" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n);
  }
  function Ze(e, t, n) {
    ("number" === t && We(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var et = Array.isArray;
  function tt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        (a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ve(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function nt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(ae(91));
    return De({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function rt(e, t) {
    var n = t.value;
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(ae(92));
        if (et(n)) {
          if (1 < n.length) throw Error(ae(93));
          n = n[0];
        }
        t = n;
      }
      null == t && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Ve(n) };
  }
  function at(e, t) {
    var n = Ve(t.value),
      r = Ve(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function it(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function ot(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ut(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? ot(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var lt,
    st,
    ct =
      ((st = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (lt = lt || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = lt.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return st(e, t);
            });
          }
        : st);
  function ft(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var dt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ht = ["Webkit", "ms", "Moz", "O"];
  function pt(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (dt.hasOwnProperty(e) && dt[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function mt(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = pt(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
      }
  }
  Object.keys(dt).forEach(function (e) {
    ht.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dt[t] = dt[e]);
    });
  });
  var gt = De(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function vt(e, t) {
    if (t) {
      if (gt[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(ae(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(ae(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(ae(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(ae(62));
    }
  }
  function yt(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var bt = null;
  function _t(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var St = null,
    wt = null,
    Tt = null;
  function kt(e) {
    if ((e = yi(e))) {
      if ("function" != typeof St) throw Error(ae(280));
      var t = e.stateNode;
      t && ((t = _i(t)), St(e.stateNode, e.type, t));
    }
  }
  function Ct(e) {
    wt ? (Tt ? Tt.push(e) : (Tt = [e])) : (wt = e);
  }
  function Et() {
    if (wt) {
      var e = wt,
        t = Tt;
      if (((Tt = wt = null), kt(e), t)) for (e = 0; e < t.length; e++) kt(t[e]);
    }
  }
  function xt(e, t) {
    return e(t);
  }
  function Pt() {}
  var At = !1;
  function Mt(e, t, n) {
    if (At) return e(t, n);
    At = !0;
    try {
      return xt(e, t, n);
    } finally {
      (At = !1), (null !== wt || null !== Tt) && (Pt(), Et());
    }
  }
  function Nt(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = _i(n);
    if (null === r) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          (r = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(ae(231, t, typeof n));
    return n;
  }
  var It = !1;
  if (se)
    try {
      var Rt = {};
      Object.defineProperty(Rt, "passive", {
        get: function () {
          It = !0;
        },
      }),
        window.addEventListener("test", Rt, Rt),
        window.removeEventListener("test", Rt, Rt);
    } catch (Ub) {
      It = !1;
    }
  function Ot(e, t, n, r, a, i, o, u, l) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (c) {
      this.onError(c);
    }
  }
  var Ft = !1,
    Dt = null,
    Lt = !1,
    Bt = null,
    jt = {
      onError: function (e) {
        (Ft = !0), (Dt = e);
      },
    };
  function zt(e, t, n, r, a, i, o, u, l) {
    (Ft = !1), (Dt = null), Ot.apply(jt, arguments);
  }
  function Ut(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function Gt(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Vt(e) {
    if (Ut(e) !== e) throw Error(ae(188));
  }
  function $t(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Ut(e))) throw Error(ae(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var a = n.return;
          if (null === a) break;
          var i = a.alternate;
          if (null === i) {
            if (null !== (r = a.return)) {
              n = r;
              continue;
            }
            break;
          }
          if (a.child === i.child) {
            for (i = a.child; i; ) {
              if (i === n) return Vt(a), e;
              if (i === r) return Vt(a), t;
              i = i.sibling;
            }
            throw Error(ae(188));
          }
          if (n.return !== r.return) (n = a), (r = i);
          else {
            for (var o = !1, u = a.child; u; ) {
              if (u === n) {
                (o = !0), (n = a), (r = i);
                break;
              }
              if (u === r) {
                (o = !0), (r = a), (n = i);
                break;
              }
              u = u.sibling;
            }
            if (!o) {
              for (u = i.child; u; ) {
                if (u === n) {
                  (o = !0), (n = i), (r = a);
                  break;
                }
                if (u === r) {
                  (o = !0), (r = i), (n = a);
                  break;
                }
                u = u.sibling;
              }
              if (!o) throw Error(ae(189));
            }
          }
          if (n.alternate !== r) throw Error(ae(190));
        }
        if (3 !== n.tag) throw Error(ae(188));
        return n.stateNode.current === n ? e : t;
      })(e))
      ? Ht(e)
      : null;
  }
  function Ht(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = Ht(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var Yt = re.unstable_scheduleCallback,
    Wt = re.unstable_cancelCallback,
    qt = re.unstable_shouldYield,
    Kt = re.unstable_requestPaint,
    Qt = re.unstable_now,
    Jt = re.unstable_getCurrentPriorityLevel,
    Xt = re.unstable_ImmediatePriority,
    Zt = re.unstable_UserBlockingPriority,
    en = re.unstable_NormalPriority,
    tn = re.unstable_LowPriority,
    nn = re.unstable_IdlePriority,
    rn = null,
    an = null,
    on = Math.clz32
      ? Math.clz32
      : function (e) {
          return 0 === (e >>>= 0) ? 32 : (31 - ((un(e) / ln) | 0)) | 0;
        },
    un = Math.log,
    ln = Math.LN2,
    sn = 64,
    cn = 4194304;
  function fn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function dn(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      a = e.suspendedLanes,
      i = e.pingedLanes,
      o = 268435455 & n;
    if (0 !== o) {
      var u = o & ~a;
      0 !== u ? (r = fn(u)) : 0 != (i &= o) && (r = fn(i));
    } else 0 != (o = n & ~a) ? (r = fn(o)) : 0 !== i && (r = fn(i));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      0 == (t & a) &&
      ((a = r & -r) >= (i = t & -t) || (16 === a && 0 != (4194240 & i)))
    )
      return t;
    if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        (a = 1 << (n = 31 - on(t))), (r |= e[n]), (t &= ~a);
    return r;
  }
  function hn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      default:
        return -1;
    }
  }
  function pn(e) {
    return 0 != (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function mn() {
    var e = sn;
    return 0 == (4194240 & (sn <<= 1)) && (sn = 64), e;
  }
  function gn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function vn(e, t, n) {
    (e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - on(t))] = n);
  }
  function yn(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - on(n),
        a = 1 << r;
      (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
  }
  var bn = 0;
  function _n(e) {
    return 1 < (e &= -e)
      ? 4 < e
        ? 0 != (268435455 & e)
          ? 16
          : 536870912
        : 4
      : 1;
  }
  var Sn,
    wn,
    Tn,
    kn,
    Cn,
    En = !1,
    xn = [],
    Pn = null,
    An = null,
    Mn = null,
    Nn = new Map(),
    In = new Map(),
    Rn = [],
    On =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Fn(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Pn = null;
        break;
      case "dragenter":
      case "dragleave":
        An = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(t.pointerId);
    }
  }
  function Dn(e, t, n, r, a, i) {
    return null === e || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [a],
        }),
        null !== t && null !== (t = yi(t)) && wn(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function Ln(e) {
    var t = vi(e.target);
    if (null !== t) {
      var n = Ut(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = Gt(n)))
            return (
              (e.blockedOn = t),
              void Cn(e.priority, function () {
                Tn(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Bn(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Kn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = yi(n)) && wn(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (bt = r), n.target.dispatchEvent(r), (bt = null), t.shift();
    }
    return !0;
  }
  function jn(e, t, n) {
    Bn(e) && n.delete(t);
  }
  function zn() {
    (En = !1),
      null !== Pn && Bn(Pn) && (Pn = null),
      null !== An && Bn(An) && (An = null),
      null !== Mn && Bn(Mn) && (Mn = null),
      Nn.forEach(jn),
      In.forEach(jn);
  }
  function Un(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      En ||
        ((En = !0),
        re.unstable_scheduleCallback(re.unstable_NormalPriority, zn)));
  }
  function Gn(e) {
    function t(t) {
      return Un(t, e);
    }
    if (0 < xn.length) {
      Un(xn[0], e);
      for (var n = 1; n < xn.length; n++) {
        var r = xn[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== Pn && Un(Pn, e),
        null !== An && Un(An, e),
        null !== Mn && Un(Mn, e),
        Nn.forEach(t),
        In.forEach(t),
        n = 0;
      n < Rn.length;
      n++
    )
      (r = Rn[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && null === (n = Rn[0]).blockedOn; )
      Ln(n), null === n.blockedOn && Rn.shift();
  }
  var Vn = be.ReactCurrentBatchConfig,
    $n = !0;
  function Hn(e, t, n, r) {
    var a = bn,
      i = Vn.transition;
    Vn.transition = null;
    try {
      (bn = 1), Wn(e, t, n, r);
    } finally {
      (bn = a), (Vn.transition = i);
    }
  }
  function Yn(e, t, n, r) {
    var a = bn,
      i = Vn.transition;
    Vn.transition = null;
    try {
      (bn = 4), Wn(e, t, n, r);
    } finally {
      (bn = a), (Vn.transition = i);
    }
  }
  function Wn(e, t, n, r) {
    if ($n) {
      var a = Kn(e, t, n, r);
      if (null === a) Va(e, t, r, qn, n), Fn(e, r);
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case "focusin":
              return (Pn = Dn(Pn, e, t, n, r, a)), !0;
            case "dragenter":
              return (An = Dn(An, e, t, n, r, a)), !0;
            case "mouseover":
              return (Mn = Dn(Mn, e, t, n, r, a)), !0;
            case "pointerover":
              var i = a.pointerId;
              return Nn.set(i, Dn(Nn.get(i) || null, e, t, n, r, a)), !0;
            case "gotpointercapture":
              return (
                (i = a.pointerId),
                In.set(i, Dn(In.get(i) || null, e, t, n, r, a)),
                !0
              );
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Fn(e, r), 4 & t && -1 < On.indexOf(e))) {
        for (; null !== a; ) {
          var i = yi(a);
          if (
            (null !== i && Sn(i),
            null === (i = Kn(e, t, n, r)) && Va(e, t, r, qn, n),
            i === a)
          )
            break;
          a = i;
        }
        null !== a && r.stopPropagation();
      } else Va(e, t, r, null, n);
    }
  }
  var qn = null;
  function Kn(e, t, n, r) {
    if (((qn = null), null !== (e = vi((e = _t(r))))))
      if (null === (t = Ut(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = Gt(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (qn = e), null;
  }
  function Qn(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Jt()) {
          case Xt:
            return 1;
          case Zt:
            return 4;
          case en:
          case tn:
            return 16;
          case nn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Jn = null,
    Xn = null,
    Zn = null;
  function er() {
    if (Zn) return Zn;
    var e,
      t,
      n = Xn,
      r = n.length,
      a = "value" in Jn ? Jn.value : Jn.textContent,
      i = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
    return (Zn = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function tr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function nr() {
    return !0;
  }
  function rr() {
    return !1;
  }
  function ar(e) {
    function t(t, n, r, a, i) {
      for (var o in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? nr
          : rr),
        (this.isPropagationStopped = rr),
        this
      );
    }
    return (
      De(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = nr));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = nr));
        },
        persist: function () {},
        isPersistent: nr,
      }),
      t
    );
  }
  var ir,
    or,
    ur,
    lr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    sr = ar(lr),
    cr = De({}, lr, { view: 0, detail: 0 }),
    fr = ar(cr),
    dr = De({}, cr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: kr,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ur &&
              (ur && "mousemove" === e.type
                ? ((ir = e.screenX - ur.screenX), (or = e.screenY - ur.screenY))
                : (or = ir = 0),
              (ur = e)),
            ir);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : or;
      },
    }),
    hr = ar(dr),
    pr = ar(De({}, dr, { dataTransfer: 0 })),
    mr = ar(De({}, cr, { relatedTarget: 0 })),
    gr = ar(De({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    vr = De({}, lr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    yr = ar(vr),
    br = ar(De({}, lr, { data: 0 })),
    _r = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sr = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wr = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Tr(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = wr[e]) && !!t[e];
  }
  function kr() {
    return Tr;
  }
  var Cr = De({}, cr, {
      key: function (e) {
        if (e.key) {
          var t = _r[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = tr(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
          ? Sr[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: kr,
      charCode: function (e) {
        return "keypress" === e.type ? tr(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? tr(e)
          : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
      },
    }),
    Er = ar(Cr),
    xr = ar(
      De({}, dr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      })
    ),
    Pr = ar(
      De({}, cr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: kr,
      })
    ),
    Ar = ar(De({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Mr = De({}, dr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nr = ar(Mr),
    Ir = [9, 13, 27, 32],
    Rr = se && "CompositionEvent" in window,
    Or = null;
  se && "documentMode" in document && (Or = document.documentMode);
  var Fr = se && "TextEvent" in window && !Or,
    Dr = se && (!Rr || (Or && 8 < Or && 11 >= Or)),
    Lr = String.fromCharCode(32),
    Br = !1;
  function jr(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Ir.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zr(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Ur = !1,
    Gr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
  function Vr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Gr[e.type] : "textarea" === t;
  }
  function $r(e, t, n, r) {
    Ct(r),
      0 < (t = Ha(t, "onChange")).length &&
        ((n = new sr("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Hr = null,
    Yr = null;
  function Wr(e) {
    La(e, 0);
  }
  function qr(e) {
    if (Ye(bi(e))) return e;
  }
  function Kr(e, t) {
    if ("change" === e) return t;
  }
  var Qr = !1;
  if (se) {
    var Jr;
    if (se) {
      var Xr = "oninput" in document;
      if (!Xr) {
        var Zr = document.createElement("div");
        Zr.setAttribute("oninput", "return;"),
          (Xr = "function" == typeof Zr.oninput);
      }
      Jr = Xr;
    } else Jr = !1;
    Qr = Jr && (!document.documentMode || 9 < document.documentMode);
  }
  function ea() {
    Hr && (Hr.detachEvent("onpropertychange", ta), (Yr = Hr = null));
  }
  function ta(e) {
    if ("value" === e.propertyName && qr(Yr)) {
      var t = [];
      $r(t, Yr, e, _t(e)), Mt(Wr, t);
    }
  }
  function na(e, t, n) {
    "focusin" === e
      ? (ea(), (Yr = n), (Hr = t).attachEvent("onpropertychange", ta))
      : "focusout" === e && ea();
  }
  function ra(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return qr(Yr);
  }
  function aa(e, t) {
    if ("click" === e) return qr(t);
  }
  function ia(e, t) {
    if ("input" === e || "change" === e) return qr(t);
  }
  var oa =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function ua(e, t) {
    if (oa(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!ce.call(t, a) || !oa(e[a], t[a])) return !1;
    }
    return !0;
  }
  function la(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function sa(e, t) {
    var n,
      r = la(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = la(r);
    }
  }
  function ca(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? ca(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function fa() {
    for (var e = window, t = We(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (r) {
        n = !1;
      }
      if (!n) break;
      t = We((e = t.contentWindow).document);
    }
    return t;
  }
  function da(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function ha(e) {
    var t = fa(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ca(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && da(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            i = Math.min(r.start, a);
          (r = void 0 === r.end ? i : Math.min(r.end, a)),
            !e.extend && i > r && ((a = r), (r = i), (i = a)),
            (a = sa(n, i));
          var o = sa(n, r);
          a &&
            o &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var pa = se && "documentMode" in document && 11 >= document.documentMode,
    ma = null,
    ga = null,
    va = null,
    ya = !1;
  function ba(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ya ||
      null == ma ||
      ma !== We(r) ||
      ((r =
        "selectionStart" in (r = ma) && da(r)
          ? { start: r.selectionStart, end: r.selectionEnd }
          : {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
      (va && ua(va, r)) ||
        ((va = r),
        0 < (r = Ha(ga, "onSelect")).length &&
          ((t = new sr("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ma))));
  }
  function _a(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Sa = {
      animationend: _a("Animation", "AnimationEnd"),
      animationiteration: _a("Animation", "AnimationIteration"),
      animationstart: _a("Animation", "AnimationStart"),
      transitionend: _a("Transition", "TransitionEnd"),
    },
    wa = {},
    Ta = {};
  function ka(e) {
    if (wa[e]) return wa[e];
    if (!Sa[e]) return e;
    var t,
      n = Sa[e];
    for (t in n) if (n.hasOwnProperty(t) && t in Ta) return (wa[e] = n[t]);
    return e;
  }
  se &&
    ((Ta = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Sa.animationend.animation,
      delete Sa.animationiteration.animation,
      delete Sa.animationstart.animation),
    "TransitionEvent" in window || delete Sa.transitionend.transition);
  var Ca = ka("animationend"),
    Ea = ka("animationiteration"),
    xa = ka("animationstart"),
    Pa = ka("transitionend"),
    Aa = new Map(),
    Ma =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Na(e, t) {
    Aa.set(e, t), ue(t, [e]);
  }
  for (var Ia = 0; Ia < Ma.length; Ia++) {
    var Ra = Ma[Ia];
    Na(Ra.toLowerCase(), "on" + (Ra[0].toUpperCase() + Ra.slice(1)));
  }
  Na(Ca, "onAnimationEnd"),
    Na(Ea, "onAnimationIteration"),
    Na(xa, "onAnimationStart"),
    Na("dblclick", "onDoubleClick"),
    Na("focusin", "onFocus"),
    Na("focusout", "onBlur"),
    Na(Pa, "onTransitionEnd"),
    le("onMouseEnter", ["mouseout", "mouseover"]),
    le("onMouseLeave", ["mouseout", "mouseover"]),
    le("onPointerEnter", ["pointerout", "pointerover"]),
    le("onPointerLeave", ["pointerout", "pointerover"]),
    ue(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ue(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ue("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ue(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ue(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ue(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Oa =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Fa = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Oa)
    );
  function Da(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n),
      (function (e, t, n, r, a, i, o, u, l) {
        if ((zt.apply(this, arguments), Ft)) {
          if (!Ft) throw Error(ae(198));
          var s = Dt;
          (Ft = !1), (Dt = null), Lt || ((Lt = !0), (Bt = s));
        }
      })(r, t, void 0, e),
      (e.currentTarget = null);
  }
  function La(e, t) {
    t = 0 != (4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              l = u.instance,
              s = u.currentTarget;
            if (((u = u.listener), l !== i && a.isPropagationStopped()))
              break e;
            Da(a, u, s), (i = l);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((l = (u = r[o]).instance),
              (s = u.currentTarget),
              (u = u.listener),
              l !== i && a.isPropagationStopped())
            )
              break e;
            Da(a, u, s), (i = l);
          }
      }
    }
    if (Lt) throw ((e = Bt), (Lt = !1), (Bt = null), e);
  }
  function Ba(e, t) {
    var n = t[pi];
    void 0 === n && (n = t[pi] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ga(t, e, 2, !1), n.add(r));
  }
  function ja(e, t, n) {
    var r = 0;
    t && (r |= 4), Ga(n, e, r, t);
  }
  var za = "_reactListening" + Math.random().toString(36).slice(2);
  function Ua(e) {
    if (!e[za]) {
      (e[za] = !0),
        ie.forEach(function (t) {
          "selectionchange" !== t && (Fa.has(t) || ja(t, !1, e), ja(t, !0, e));
        });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[za] || ((t[za] = !0), ja("selectionchange", !1, t));
    }
  }
  function Ga(e, t, n, r) {
    switch (Qn(t)) {
      case 1:
        var a = Hn;
        break;
      case 4:
        a = Yn;
        break;
      default:
        a = Wn;
    }
    (n = a.bind(null, t, n, e)),
      (a = void 0),
      !It ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
        ? e.addEventListener(t, n, { passive: a })
        : e.addEventListener(t, n, !1);
  }
  function Va(e, t, n, r, a) {
    var i = r;
    if (0 == (1 & t) && 0 == (2 & t) && null !== r)
      e: for (;;) {
        if (null === r) return;
        var o = r.tag;
        if (3 === o || 4 === o) {
          var u = r.stateNode.containerInfo;
          if (u === a || (8 === u.nodeType && u.parentNode === a)) break;
          if (4 === o)
            for (o = r.return; null !== o; ) {
              var l = o.tag;
              if (
                (3 === l || 4 === l) &&
                ((l = o.stateNode.containerInfo) === a ||
                  (8 === l.nodeType && l.parentNode === a))
              )
                return;
              o = o.return;
            }
          for (; null !== u; ) {
            if (null === (o = vi(u))) return;
            if (5 === (l = o.tag) || 6 === l) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    Mt(function () {
      var r = i,
        a = _t(n),
        o = [];
      e: {
        var u = Aa.get(e);
        if (void 0 !== u) {
          var l = sr,
            s = e;
          switch (e) {
            case "keypress":
              if (0 === tr(n)) break e;
            case "keydown":
            case "keyup":
              l = Er;
              break;
            case "focusin":
              (s = "focus"), (l = mr);
              break;
            case "focusout":
              (s = "blur"), (l = mr);
              break;
            case "beforeblur":
            case "afterblur":
              l = mr;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              l = hr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              l = pr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              l = Pr;
              break;
            case Ca:
            case Ea:
            case xa:
              l = gr;
              break;
            case Pa:
              l = Ar;
              break;
            case "scroll":
              l = fr;
              break;
            case "wheel":
              l = Nr;
              break;
            case "copy":
            case "cut":
            case "paste":
              l = yr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              l = xr;
          }
          var c = 0 != (4 & t),
            f = !c && "scroll" === e,
            d = c ? (null !== u ? u + "Capture" : null) : u;
          c = [];
          for (var h, p = r; null !== p; ) {
            var m = (h = p).stateNode;
            if (
              (5 === h.tag &&
                null !== m &&
                ((h = m),
                null !== d && null != (m = Nt(p, d)) && c.push($a(p, m, h))),
              f)
            )
              break;
            p = p.return;
          }
          0 < c.length &&
            ((u = new l(u, s, null, n, a)), o.push({ event: u, listeners: c }));
        }
      }
      if (0 == (7 & t)) {
        if (
          ((l = "mouseout" === e || "pointerout" === e),
          (!(u = "mouseover" === e || "pointerover" === e) ||
            n === bt ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!vi(s) && !s[hi])) &&
            (l || u) &&
            ((u =
              a.window === a
                ? a
                : (u = a.ownerDocument)
                ? u.defaultView || u.parentWindow
                : window),
            l
              ? ((l = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? vi(s) : null) &&
                  (s !== (f = Ut(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((l = null), (s = r)),
            l !== s))
        ) {
          if (
            ((c = hr),
            (m = "onMouseLeave"),
            (d = "onMouseEnter"),
            (p = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = xr),
              (m = "onPointerLeave"),
              (d = "onPointerEnter"),
              (p = "pointer")),
            (f = null == l ? u : bi(l)),
            (h = null == s ? u : bi(s)),
            ((u = new c(m, p + "leave", l, n, a)).target = f),
            (u.relatedTarget = h),
            (m = null),
            vi(a) === r &&
              (((c = new c(d, p + "enter", s, n, a)).target = h),
              (c.relatedTarget = f),
              (m = c)),
            (f = m),
            l && s)
          )
            e: {
              for (d = s, p = 0, h = c = l; h; h = Ya(h)) p++;
              for (h = 0, m = d; m; m = Ya(m)) h++;
              for (; 0 < p - h; ) (c = Ya(c)), p--;
              for (; 0 < h - p; ) (d = Ya(d)), h--;
              for (; p--; ) {
                if (c === d || (null !== d && c === d.alternate)) break e;
                (c = Ya(c)), (d = Ya(d));
              }
              c = null;
            }
          else c = null;
          null !== l && Wa(o, u, l, c, !1),
            null !== s && null !== f && Wa(o, f, s, c, !0);
        }
        if (
          "select" ===
            (l =
              (u = r ? bi(r) : window).nodeName && u.nodeName.toLowerCase()) ||
          ("input" === l && "file" === u.type)
        )
          var g = Kr;
        else if (Vr(u))
          if (Qr) g = ia;
          else {
            g = ra;
            var v = na;
          }
        else
          (l = u.nodeName) &&
            "input" === l.toLowerCase() &&
            ("checkbox" === u.type || "radio" === u.type) &&
            (g = aa);
        switch (
          (g && (g = g(e, r))
            ? $r(o, g, n, a)
            : (v && v(e, u, r),
              "focusout" === e &&
                (v = u._wrapperState) &&
                v.controlled &&
                "number" === u.type &&
                Ze(u, "number", u.value)),
          (v = r ? bi(r) : window),
          e)
        ) {
          case "focusin":
            (Vr(v) || "true" === v.contentEditable) &&
              ((ma = v), (ga = r), (va = null));
            break;
          case "focusout":
            va = ga = ma = null;
            break;
          case "mousedown":
            ya = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ya = !1), ba(o, n, a);
            break;
          case "selectionchange":
            if (pa) break;
          case "keydown":
          case "keyup":
            ba(o, n, a);
        }
        var y;
        if (Rr)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Ur
            ? jr(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        b &&
          (Dr &&
            "ko" !== n.locale &&
            (Ur || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Ur && (y = er())
              : ((Xn = "value" in (Jn = a) ? Jn.value : Jn.textContent),
                (Ur = !0))),
          0 < (v = Ha(r, b)).length &&
            ((b = new br(b, e, null, n, a)),
            o.push({ event: b, listeners: v }),
            (y || null !== (y = zr(n))) && (b.data = y))),
          (y = Fr
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return zr(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Br = !0), Lr);
                  case "textInput":
                    return (e = t.data) === Lr && Br ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Ur)
                  return "compositionend" === e || (!Rr && jr(e, t))
                    ? ((e = er()), (Zn = Xn = Jn = null), (Ur = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Dr && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = Ha(r, "onBeforeInput")).length &&
            ((a = new br("onBeforeInput", "beforeinput", null, n, a)),
            o.push({ event: a, listeners: r }),
            (a.data = y));
      }
      La(o, t);
    });
  }
  function $a(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ha(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var a = e,
        i = a.stateNode;
      5 === a.tag &&
        null !== i &&
        ((a = i),
        null != (i = Nt(e, n)) && r.unshift($a(e, i, a)),
        null != (i = Nt(e, t)) && r.push($a(e, i, a))),
        (e = e.return);
    }
    return r;
  }
  function Ya(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Wa(e, t, n, r, a) {
    for (var i = t._reactName, o = []; null !== n && n !== r; ) {
      var u = n,
        l = u.alternate,
        s = u.stateNode;
      if (null !== l && l === r) break;
      5 === u.tag &&
        null !== s &&
        ((u = s),
        a
          ? null != (l = Nt(n, i)) && o.unshift($a(n, l, u))
          : a || (null != (l = Nt(n, i)) && o.push($a(n, l, u)))),
        (n = n.return);
    }
    0 !== o.length && e.push({ event: t, listeners: o });
  }
  var qa = /\r\n?/g,
    Ka = /\u0000|\uFFFD/g;
  function Qa(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(qa, "\n")
      .replace(Ka, "");
  }
  function Ja(e, t, n) {
    if (((t = Qa(t)), Qa(e) !== t && n)) throw Error(ae(425));
  }
  function Xa() {}
  var Za = null,
    ei = null;
  function ti(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var ni = "function" == typeof setTimeout ? setTimeout : void 0,
    ri = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ai = "function" == typeof Promise ? Promise : void 0,
    ii =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== ai
        ? function (e) {
            return ai.resolve(null).then(e).catch(oi);
          }
        : ni;
  function oi(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ui(e, t) {
    var n = t,
      r = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && 8 === a.nodeType))
        if ("/$" === (n = a.data)) {
          if (0 === r) return e.removeChild(a), void Gn(t);
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = a;
    } while (n);
    Gn(t);
  }
  function li(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function si(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ci = Math.random().toString(36).slice(2),
    fi = "__reactFiber$" + ci,
    di = "__reactProps$" + ci,
    hi = "__reactContainer$" + ci,
    pi = "__reactEvents$" + ci,
    mi = "__reactListeners$" + ci,
    gi = "__reactHandles$" + ci;
  function vi(e) {
    var t = e[fi];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[hi] || n[fi])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = si(e); null !== e; ) {
            if ((n = e[fi])) return n;
            e = si(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function yi(e) {
    return !(e = e[fi] || e[hi]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function bi(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(ae(33));
  }
  function _i(e) {
    return e[di] || null;
  }
  var Si = [],
    wi = -1;
  function Ti(e) {
    return { current: e };
  }
  function ki(e) {
    0 > wi || ((e.current = Si[wi]), (Si[wi] = null), wi--);
  }
  function Ci(e, t) {
    wi++, (Si[wi] = e.current), (e.current = t);
  }
  var Ei = {},
    xi = Ti(Ei),
    Pi = Ti(!1),
    Ai = Ei;
  function Mi(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ei;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      i = {};
    for (a in n) i[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ni(e) {
    return null != e.childContextTypes;
  }
  function Ii() {
    ki(Pi), ki(xi);
  }
  function Ri(e, t, n) {
    if (xi.current !== Ei) throw Error(ae(168));
    Ci(xi, t), Ci(Pi, n);
  }
  function Oi(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
      return n;
    for (var a in (r = r.getChildContext()))
      if (!(a in t)) throw Error(ae(108, Ge(e) || "Unknown", a));
    return De({}, n, r);
  }
  function Fi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ei),
      (Ai = xi.current),
      Ci(xi, e),
      Ci(Pi, Pi.current),
      !0
    );
  }
  function Di(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(ae(169));
    n
      ? ((e = Oi(e, t, Ai)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ki(Pi),
        ki(xi),
        Ci(xi, e))
      : ki(Pi),
      Ci(Pi, n);
  }
  var Li = null,
    Bi = !1,
    ji = !1;
  function zi(e) {
    null === Li ? (Li = [e]) : Li.push(e);
  }
  function Ui() {
    if (!ji && null !== Li) {
      ji = !0;
      var e = 0,
        t = bn;
      try {
        var n = Li;
        for (bn = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        (Li = null), (Bi = !1);
      } catch (a) {
        throw (null !== Li && (Li = Li.slice(e + 1)), Yt(Xt, Ui), a);
      } finally {
        (bn = t), (ji = !1);
      }
    }
    return null;
  }
  var Gi = [],
    Vi = 0,
    $i = null,
    Hi = 0,
    Yi = [],
    Wi = 0,
    qi = null,
    Ki = 1,
    Qi = "";
  function Ji(e, t) {
    (Gi[Vi++] = Hi), (Gi[Vi++] = $i), ($i = e), (Hi = t);
  }
  function Xi(e, t, n) {
    (Yi[Wi++] = Ki), (Yi[Wi++] = Qi), (Yi[Wi++] = qi), (qi = e);
    var r = Ki;
    e = Qi;
    var a = 32 - on(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var i = 32 - on(t) + a;
    if (30 < i) {
      var o = a - (a % 5);
      (i = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (a -= o),
        (Ki = (1 << (32 - on(t) + a)) | (n << a) | r),
        (Qi = i + e);
    } else (Ki = (1 << i) | (n << a) | r), (Qi = e);
  }
  function Zi(e) {
    null !== e.return && (Ji(e, 1), Xi(e, 1, 0));
  }
  function eo(e) {
    for (; e === $i; )
      ($i = Gi[--Vi]), (Gi[Vi] = null), (Hi = Gi[--Vi]), (Gi[Vi] = null);
    for (; e === qi; )
      (qi = Yi[--Wi]),
        (Yi[Wi] = null),
        (Qi = Yi[--Wi]),
        (Yi[Wi] = null),
        (Ki = Yi[--Wi]),
        (Yi[Wi] = null);
  }
  var to = null,
    no = null,
    ro = !1,
    ao = null;
  function io(e, t) {
    var n = Nc(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n);
  }
  function oo(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (to = e), (no = li(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (to = e), (no = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== qi ? { id: Ki, overflow: Qi } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = Nc(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (to = e),
          (no = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function uo(e) {
    return 0 != (1 & e.mode) && 0 == (128 & e.flags);
  }
  function lo(e) {
    if (ro) {
      var t = no;
      if (t) {
        var n = t;
        if (!oo(e, t)) {
          if (uo(e)) throw Error(ae(418));
          t = li(n.nextSibling);
          var r = to;
          t && oo(e, t)
            ? io(r, n)
            : ((e.flags = (-4097 & e.flags) | 2), (ro = !1), (to = e));
        }
      } else {
        if (uo(e)) throw Error(ae(418));
        (e.flags = (-4097 & e.flags) | 2), (ro = !1), (to = e);
      }
    }
  }
  function so(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    to = e;
  }
  function co(e) {
    if (e !== to) return !1;
    if (!ro) return so(e), (ro = !0), !1;
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !ti(e.type, e.memoizedProps)),
      t && (t = no))
    ) {
      if (uo(e)) throw (fo(), Error(ae(418)));
      for (; t; ) io(e, t), (t = li(t.nextSibling));
    }
    if ((so(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(ae(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n) {
              if (0 === t) {
                no = li(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
          }
          e = e.nextSibling;
        }
        no = null;
      }
    } else no = to ? li(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fo() {
    for (var e = no; e; ) e = li(e.nextSibling);
  }
  function ho() {
    (no = to = null), (ro = !1);
  }
  function po(e) {
    null === ao ? (ao = [e]) : ao.push(e);
  }
  var mo = be.ReactCurrentBatchConfig;
  function go(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = De({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var vo = Ti(null),
    yo = null,
    bo = null,
    _o = null;
  function So() {
    _o = bo = yo = null;
  }
  function wo(e) {
    var t = vo.current;
    ki(vo), (e._currentValue = t);
  }
  function To(e, t, n) {
    for (; null !== e; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function ko(e, t) {
    (yo = e),
      (_o = bo = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (0 != (e.lanes & t) && (bl = !0), (e.firstContext = null));
  }
  function Co(e) {
    var t = e._currentValue;
    if (_o !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === bo)) {
        if (null === yo) throw Error(ae(308));
        (bo = e), (yo.dependencies = { lanes: 0, firstContext: e });
      } else bo = bo.next = e;
    return t;
  }
  var Eo = null;
  function xo(e) {
    null === Eo ? (Eo = [e]) : Eo.push(e);
  }
  function Po(e, t, n, r) {
    var a = t.interleaved;
    return (
      null === a ? ((n.next = n), xo(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Ao(e, r)
    );
  }
  function Ao(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  var Mo = !1;
  function No(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Io(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ro(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Oo(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 0 != (2 & Ps))) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        Ao(e, n)
      );
    }
    return (
      null === (a = r.interleaved)
        ? ((t.next = t), xo(r))
        : ((t.next = a.next), (a.next = t)),
      (r.interleaved = t),
      Ao(e, n)
    );
  }
  function Fo(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 0 != (4194240 & n))) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), yn(e, n);
    }
  }
  function Do(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        i = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
        } while (null !== n);
        null === i ? (a = i = t) : (i = i.next = t);
      } else a = i = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: i,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Lo(e, t, n, r) {
    var a = e.updateQueue;
    Mo = !1;
    var i = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      u = a.shared.pending;
    if (null !== u) {
      a.shared.pending = null;
      var l = u,
        s = l.next;
      (l.next = null), null === o ? (i = s) : (o.next = s), (o = l);
      var c = e.alternate;
      null !== c &&
        (u = (c = c.updateQueue).lastBaseUpdate) !== o &&
        (null === u ? (c.firstBaseUpdate = s) : (u.next = s),
        (c.lastBaseUpdate = l));
    }
    if (null !== i) {
      var f = a.baseState;
      for (o = 0, c = s = l = null, u = i; ; ) {
        var d = u.lane,
          h = u.eventTime;
        if ((r & d) === d) {
          null !== c &&
            (c = c.next =
              {
                eventTime: h,
                lane: 0,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null,
              });
          e: {
            var p = e,
              m = u;
            switch (((d = t), (h = n), m.tag)) {
              case 1:
                if ("function" == typeof (p = m.payload)) {
                  f = p.call(h, f, d);
                  break e;
                }
                f = p;
                break e;
              case 3:
                p.flags = (-65537 & p.flags) | 128;
              case 0:
                if (
                  null ==
                  (d =
                    "function" == typeof (p = m.payload) ? p.call(h, f, d) : p)
                )
                  break e;
                f = De({}, f, d);
                break e;
              case 2:
                Mo = !0;
            }
          }
          null !== u.callback &&
            0 !== u.lane &&
            ((e.flags |= 64),
            null === (d = a.effects) ? (a.effects = [u]) : d.push(u));
        } else
          (h = {
            eventTime: h,
            lane: d,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            null === c ? ((s = c = h), (l = f)) : (c = c.next = h),
            (o |= d);
        if (null === (u = u.next)) {
          if (null === (u = a.shared.pending)) break;
          (u = (d = u).next),
            (d.next = null),
            (a.lastBaseUpdate = d),
            (a.shared.pending = null);
        }
      }
      if (
        (null === c && (l = f),
        (a.baseState = l),
        (a.firstBaseUpdate = s),
        (a.lastBaseUpdate = c),
        null !== (t = a.shared.interleaved))
      ) {
        a = t;
        do {
          (o |= a.lane), (a = a.next);
        } while (a !== t);
      } else null === i && (a.shared.lanes = 0);
      (Ds |= o), (e.lanes = o), (e.memoizedState = f);
    }
  }
  function Bo(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          a = r.callback;
        if (null !== a) {
          if (((r.callback = null), (r = n), "function" != typeof a))
            throw Error(ae(191, a));
          a.call(r);
        }
      }
  }
  var jo = new ne.Component().refs;
  function zo(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : De({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  var Uo = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Ut(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ec(),
        a = tc(e),
        i = Ro(r, a);
      (i.payload = t),
        null != n && (i.callback = n),
        null !== (t = Oo(e, i, a)) && (nc(t, e, a, r), Fo(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ec(),
        a = tc(e),
        i = Ro(r, a);
      (i.tag = 1),
        (i.payload = t),
        null != n && (i.callback = n),
        null !== (t = Oo(e, i, a)) && (nc(t, e, a, r), Fo(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ec(),
        r = tc(e),
        a = Ro(n, r);
      (a.tag = 2),
        null != t && (a.callback = t),
        null !== (t = Oo(e, a, r)) && (nc(t, e, r, n), Fo(t, e, r));
    },
  };
  function Go(e, t, n, r, a, i, o) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, i, o)
      : !(
          t.prototype &&
          t.prototype.isPureReactComponent &&
          ua(n, r) &&
          ua(a, i)
        );
  }
  function Vo(e, t, n) {
    var r = !1,
      a = Ei,
      i = t.contextType;
    return (
      "object" == typeof i && null !== i
        ? (i = Co(i))
        : ((a = Ni(t) ? Ai : xi.current),
          (i = (r = null != (r = t.contextTypes)) ? Mi(e, a) : Ei)),
      (t = new t(n, i)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Uo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function $o(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Uo.enqueueReplaceState(t, t.state, null);
  }
  function Ho(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = jo), No(e);
    var i = t.contextType;
    "object" == typeof i && null !== i
      ? (a.context = Co(i))
      : ((i = Ni(t) ? Ai : xi.current), (a.context = Mi(e, i))),
      (a.state = e.memoizedState),
      "function" == typeof (i = t.getDerivedStateFromProps) &&
        (zo(e, t, i, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && Uo.enqueueReplaceState(a, a.state, null),
        Lo(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4194308);
  }
  function Yo(e, t, n) {
    if (
      null !== (e = n.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(ae(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(ae(147, e));
        var a = r,
          i = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === i
          ? t.ref
          : (((t = function (e) {
              var t = a.refs;
              t === jo && (t = a.refs = {}),
                null === e ? delete t[i] : (t[i] = e);
            })._stringRef = i),
            t);
      }
      if ("string" != typeof e) throw Error(ae(284));
      if (!n._owner) throw Error(ae(290, e));
    }
    return e;
  }
  function Wo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        ae(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function qo(e) {
    return (0, e._init)(e._payload);
  }
  function Ko(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function n(n, r) {
      if (!e) return null;
      for (; null !== r; ) t(n, r), (r = r.sibling);
      return null;
    }
    function r(e, t) {
      for (e = new Map(); null !== t; )
        null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
      return e;
    }
    function a(e, t) {
      return ((e = Rc(e, t)).index = 0), (e.sibling = null), e;
    }
    function i(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function o(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
    }
    function u(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Lc(n, e.mode, r)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function l(e, t, n, r) {
      var i = n.type;
      return i === we
        ? c(e, t, n.props.children, r, n.key)
        : null !== t &&
          (t.elementType === i ||
            ("object" == typeof i &&
              null !== i &&
              i.$$typeof === Ne &&
              qo(i) === t.type))
        ? (((r = a(t, n.props)).ref = Yo(e, t, n)), (r.return = e), r)
        : (((r = Oc(n.type, n.key, n.props, null, e.mode, r)).ref = Yo(
            e,
            t,
            n
          )),
          (r.return = e),
          r);
    }
    function s(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = Bc(n, e.mode, r)).return = e), t)
        : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, i) {
      return null === t || 7 !== t.tag
        ? (((t = Fc(n, e.mode, r, i)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return ((t = Lc("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case _e:
            return (
              ((n = Oc(t.type, t.key, t.props, null, e.mode, n)).ref = Yo(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case Se:
            return ((t = Bc(t, e.mode, n)).return = e), t;
          case Ne:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (et(t) || Oe(t)) return ((t = Fc(t, e.mode, n, null)).return = e), t;
        Wo(e, t);
      }
      return null;
    }
    function d(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== a ? null : u(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case _e:
            return n.key === a ? l(e, t, n, r) : null;
          case Se:
            return n.key === a ? s(e, t, n, r) : null;
          case Ne:
            return d(e, t, (a = n._init)(n._payload), r);
        }
        if (et(n) || Oe(n)) return null !== a ? null : c(e, t, n, r, null);
        Wo(e, n);
      }
      return null;
    }
    function h(e, t, n, r, a) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return u(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case _e:
            return l(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case Se:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case Ne:
            return h(e, t, n, (0, r._init)(r._payload), a);
        }
        if (et(r) || Oe(r)) return c(t, (e = e.get(n) || null), r, a, null);
        Wo(t, r);
      }
      return null;
    }
    return function u(l, s, c, p) {
      if (
        ("object" == typeof c &&
          null !== c &&
          c.type === we &&
          null === c.key &&
          (c = c.props.children),
        "object" == typeof c && null !== c)
      ) {
        switch (c.$$typeof) {
          case _e:
            e: {
              for (var m = c.key, g = s; null !== g; ) {
                if (g.key === m) {
                  if ((m = c.type) === we) {
                    if (7 === g.tag) {
                      n(l, g.sibling),
                        ((s = a(g, c.props.children)).return = l),
                        (l = s);
                      break e;
                    }
                  } else if (
                    g.elementType === m ||
                    ("object" == typeof m &&
                      null !== m &&
                      m.$$typeof === Ne &&
                      qo(m) === g.type)
                  ) {
                    n(l, g.sibling),
                      ((s = a(g, c.props)).ref = Yo(l, g, c)),
                      (s.return = l),
                      (l = s);
                    break e;
                  }
                  n(l, g);
                  break;
                }
                t(l, g), (g = g.sibling);
              }
              c.type === we
                ? (((s = Fc(c.props.children, l.mode, p, c.key)).return = l),
                  (l = s))
                : (((p = Oc(c.type, c.key, c.props, null, l.mode, p)).ref = Yo(
                    l,
                    s,
                    c
                  )),
                  (p.return = l),
                  (l = p));
            }
            return o(l);
          case Se:
            e: {
              for (g = c.key; null !== s; ) {
                if (s.key === g) {
                  if (
                    4 === s.tag &&
                    s.stateNode.containerInfo === c.containerInfo &&
                    s.stateNode.implementation === c.implementation
                  ) {
                    n(l, s.sibling),
                      ((s = a(s, c.children || [])).return = l),
                      (l = s);
                    break e;
                  }
                  n(l, s);
                  break;
                }
                t(l, s), (s = s.sibling);
              }
              ((s = Bc(c, l.mode, p)).return = l), (l = s);
            }
            return o(l);
          case Ne:
            return u(l, s, (g = c._init)(c._payload), p);
        }
        if (et(c))
          return (function (a, o, u, l) {
            for (
              var s = null, c = null, p = o, m = (o = 0), g = null;
              null !== p && m < u.length;
              m++
            ) {
              p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
              var v = d(a, p, u[m], l);
              if (null === v) {
                null === p && (p = g);
                break;
              }
              e && p && null === v.alternate && t(a, p),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (p = g);
            }
            if (m === u.length) return n(a, p), ro && Ji(a, m), s;
            if (null === p) {
              for (; m < u.length; m++)
                null !== (p = f(a, u[m], l)) &&
                  ((o = i(p, o, m)),
                  null === c ? (s = p) : (c.sibling = p),
                  (c = p));
              return ro && Ji(a, m), s;
            }
            for (p = r(a, p); m < u.length; m++)
              null !== (g = h(p, a, m, u[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  p.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                p.forEach(function (e) {
                  return t(a, e);
                }),
              ro && Ji(a, m),
              s
            );
          })(l, s, c, p);
        if (Oe(c))
          return (function (a, o, u, l) {
            var s = Oe(u);
            if ("function" != typeof s) throw Error(ae(150));
            if (null == (u = s.call(u))) throw Error(ae(151));
            for (
              var c = (s = null), p = o, m = (o = 0), g = null, v = u.next();
              null !== p && !v.done;
              m++, v = u.next()
            ) {
              p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
              var y = d(a, p, v.value, l);
              if (null === y) {
                null === p && (p = g);
                break;
              }
              e && p && null === y.alternate && t(a, p),
                (o = i(y, o, m)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (p = g);
            }
            if (v.done) return n(a, p), ro && Ji(a, m), s;
            if (null === p) {
              for (; !v.done; m++, v = u.next())
                null !== (v = f(a, v.value, l)) &&
                  ((o = i(v, o, m)),
                  null === c ? (s = v) : (c.sibling = v),
                  (c = v));
              return ro && Ji(a, m), s;
            }
            for (p = r(a, p); !v.done; m++, v = u.next())
              null !== (v = h(p, a, m, v.value, l)) &&
                (e &&
                  null !== v.alternate &&
                  p.delete(null === v.key ? m : v.key),
                (o = i(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                p.forEach(function (e) {
                  return t(a, e);
                }),
              ro && Ji(a, m),
              s
            );
          })(l, s, c, p);
        Wo(l, c);
      }
      return ("string" == typeof c && "" !== c) || "number" == typeof c
        ? ((c = "" + c),
          null !== s && 6 === s.tag
            ? (n(l, s.sibling), ((s = a(s, c)).return = l), (l = s))
            : (n(l, s), ((s = Lc(c, l.mode, p)).return = l), (l = s)),
          o(l))
        : n(l, s);
    };
  }
  var Qo = Ko(!0),
    Jo = Ko(!1),
    Xo = {},
    Zo = Ti(Xo),
    eu = Ti(Xo),
    tu = Ti(Xo);
  function nu(e) {
    if (e === Xo) throw Error(ae(174));
    return e;
  }
  function ru(e, t) {
    switch ((Ci(tu, t), Ci(eu, e), Ci(Zo, Xo), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ut(null, "");
        break;
      default:
        t = ut(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    ki(Zo), Ci(Zo, t);
  }
  function au() {
    ki(Zo), ki(eu), ki(tu);
  }
  function iu(e) {
    nu(tu.current);
    var t = nu(Zo.current),
      n = ut(t, e.type);
    t !== n && (Ci(eu, e), Ci(Zo, n));
  }
  function ou(e) {
    eu.current === e && (ki(Zo), ki(eu));
  }
  var uu = Ti(0);
  function lu(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (0 != (128 & t.flags)) return t;
      } else if (null !== t.child) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling; ) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var su = [];
  function cu() {
    for (var e = 0; e < su.length; e++)
      su[e]._workInProgressVersionPrimary = null;
    su.length = 0;
  }
  var fu = be.ReactCurrentDispatcher,
    du = be.ReactCurrentBatchConfig,
    hu = 0,
    pu = null,
    mu = null,
    gu = null,
    vu = !1,
    yu = !1,
    bu = 0,
    _u = 0;
  function Su() {
    throw Error(ae(321));
  }
  function wu(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!oa(e[n], t[n])) return !1;
    return !0;
  }
  function Tu(e, t, n, r, a, i) {
    if (
      ((hu = i),
      (pu = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (fu.current = null === e || null === e.memoizedState ? ol : ul),
      (e = n(r, a)),
      yu)
    ) {
      i = 0;
      do {
        if (((yu = !1), (bu = 0), 25 <= i)) throw Error(ae(301));
        (i += 1),
          (gu = mu = null),
          (t.updateQueue = null),
          (fu.current = ll),
          (e = n(r, a));
      } while (yu);
    }
    if (
      ((fu.current = il),
      (t = null !== mu && null !== mu.next),
      (hu = 0),
      (gu = mu = pu = null),
      (vu = !1),
      t)
    )
      throw Error(ae(300));
    return e;
  }
  function ku() {
    var e = 0 !== bu;
    return (bu = 0), e;
  }
  function Cu() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === gu ? (pu.memoizedState = gu = e) : (gu = gu.next = e), gu;
  }
  function Eu() {
    if (null === mu) {
      var e = pu.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = mu.next;
    var t = null === gu ? pu.memoizedState : gu.next;
    if (null !== t) (gu = t), (mu = e);
    else {
      if (null === e) throw Error(ae(310));
      (e = {
        memoizedState: (mu = e).memoizedState,
        baseState: mu.baseState,
        baseQueue: mu.baseQueue,
        queue: mu.queue,
        next: null,
      }),
        null === gu ? (pu.memoizedState = gu = e) : (gu = gu.next = e);
    }
    return gu;
  }
  function xu(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function Pu(e) {
    var t = Eu(),
      n = t.queue;
    if (null === n) throw Error(ae(311));
    n.lastRenderedReducer = e;
    var r = mu,
      a = r.baseQueue,
      i = n.pending;
    if (null !== i) {
      if (null !== a) {
        var o = a.next;
        (a.next = i.next), (i.next = o);
      }
      (r.baseQueue = a = i), (n.pending = null);
    }
    if (null !== a) {
      (i = a.next), (r = r.baseState);
      var u = (o = null),
        l = null,
        s = i;
      do {
        var c = s.lane;
        if ((hu & c) === c)
          null !== l &&
            (l = l.next =
              {
                lane: 0,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null,
              }),
            (r = s.hasEagerState ? s.eagerState : e(r, s.action));
        else {
          var f = {
            lane: c,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null,
          };
          null === l ? ((u = l = f), (o = r)) : (l = l.next = f),
            (pu.lanes |= c),
            (Ds |= c);
        }
        s = s.next;
      } while (null !== s && s !== i);
      null === l ? (o = r) : (l.next = u),
        oa(r, t.memoizedState) || (bl = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
      a = e;
      do {
        (i = a.lane), (pu.lanes |= i), (Ds |= i), (a = a.next);
      } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Au(e) {
    var t = Eu(),
      n = t.queue;
    if (null === n) throw Error(ae(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      a = n.pending,
      i = t.memoizedState;
    if (null !== a) {
      n.pending = null;
      var o = (a = a.next);
      do {
        (i = e(i, o.action)), (o = o.next);
      } while (o !== a);
      oa(i, t.memoizedState) || (bl = !0),
        (t.memoizedState = i),
        null === t.baseQueue && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Mu() {}
  function Nu(e, t) {
    var n = pu,
      r = Eu(),
      a = t(),
      i = !oa(r.memoizedState, a);
    if (
      (i && ((r.memoizedState = a), (bl = !0)),
      (r = r.queue),
      Vu(Ou.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (null !== gu && 1 & gu.memoizedState.tag))
    ) {
      if (
        ((n.flags |= 2048),
        Bu(9, Ru.bind(null, n, r, a, t), void 0, null),
        null === As)
      )
        throw Error(ae(349));
      0 != (30 & hu) || Iu(n, t, a);
    }
    return a;
  }
  function Iu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = pu.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (pu.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
  }
  function Ru(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Fu(t) && Du(e);
  }
  function Ou(e, t, n) {
    return n(function () {
      Fu(t) && Du(e);
    });
  }
  function Fu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !oa(e, n);
    } catch (r) {
      return !0;
    }
  }
  function Du(e) {
    var t = Ao(e, 1);
    null !== t && nc(t, e, 1, -1);
  }
  function Lu(e) {
    var t = Cu();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xu,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = tl.bind(null, pu, e)),
      [t.memoizedState, e]
    );
  }
  function Bu(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = pu.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (pu.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function ju() {
    return Eu().memoizedState;
  }
  function zu(e, t, n, r) {
    var a = Cu();
    (pu.flags |= e),
      (a.memoizedState = Bu(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function Uu(e, t, n, r) {
    var a = Eu();
    r = void 0 === r ? null : r;
    var i = void 0;
    if (null !== mu) {
      var o = mu.memoizedState;
      if (((i = o.destroy), null !== r && wu(r, o.deps)))
        return void (a.memoizedState = Bu(t, n, i, r));
    }
    (pu.flags |= e), (a.memoizedState = Bu(1 | t, n, i, r));
  }
  function Gu(e, t) {
    return zu(8390656, 8, e, t);
  }
  function Vu(e, t) {
    return Uu(2048, 8, e, t);
  }
  function $u(e, t) {
    return Uu(4, 2, e, t);
  }
  function Hu(e, t) {
    return Uu(4, 4, e, t);
  }
  function Yu(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
      ? ((e = e()),
        (t.current = e),
        function () {
          t.current = null;
        })
      : void 0;
  }
  function Wu(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), Uu(4, 4, Yu.bind(null, t, e), n)
    );
  }
  function qu() {}
  function Ku(e, t) {
    var n = Eu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && wu(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Qu(e, t) {
    var n = Eu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && wu(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ju(e, t, n) {
    return 0 == (21 & hu)
      ? (e.baseState && ((e.baseState = !1), (bl = !0)), (e.memoizedState = n))
      : (oa(n, t) ||
          ((n = mn()), (pu.lanes |= n), (Ds |= n), (e.baseState = !0)),
        t);
  }
  function Xu(e, t) {
    var n = bn;
    (bn = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = du.transition;
    du.transition = {};
    try {
      e(!1), t();
    } finally {
      (bn = n), (du.transition = r);
    }
  }
  function Zu() {
    return Eu().memoizedState;
  }
  function el(e, t, n) {
    var r = tc(e);
    (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nl(e)
        ? rl(t, n)
        : null !== (n = Po(e, t, n, r)) && (nc(n, e, r, ec()), al(n, t, r));
  }
  function tl(e, t, n) {
    var r = tc(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (nl(e)) rl(t, a);
    else {
      var i = e.alternate;
      if (
        0 === e.lanes &&
        (null === i || 0 === i.lanes) &&
        null !== (i = t.lastRenderedReducer)
      )
        try {
          var o = t.lastRenderedState,
            u = i(o, n);
          if (((a.hasEagerState = !0), (a.eagerState = u), oa(u, o))) {
            var l = t.interleaved;
            return (
              null === l
                ? ((a.next = a), xo(t))
                : ((a.next = l.next), (l.next = a)),
              void (t.interleaved = a)
            );
          }
        } catch (s) {}
      null !== (n = Po(e, t, a, r)) && (nc(n, e, r, (a = ec())), al(n, t, r));
    }
  }
  function nl(e) {
    var t = e.alternate;
    return e === pu || (null !== t && t === pu);
  }
  function rl(e, t) {
    yu = vu = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function al(e, t, n) {
    if (0 != (4194240 & n)) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), yn(e, n);
    }
  }
  var il = {
      readContext: Co,
      useCallback: Su,
      useContext: Su,
      useEffect: Su,
      useImperativeHandle: Su,
      useInsertionEffect: Su,
      useLayoutEffect: Su,
      useMemo: Su,
      useReducer: Su,
      useRef: Su,
      useState: Su,
      useDebugValue: Su,
      useDeferredValue: Su,
      useTransition: Su,
      useMutableSource: Su,
      useSyncExternalStore: Su,
      useId: Su,
      unstable_isNewReconciler: !1,
    },
    ol = {
      readContext: Co,
      useCallback: function (e, t) {
        return (Cu().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: Co,
      useEffect: Gu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          zu(4194308, 4, Yu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return zu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Cu();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Cu();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = el.bind(null, pu, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (Cu().memoizedState = e);
      },
      useState: Lu,
      useDebugValue: qu,
      useDeferredValue: function (e) {
        return (Cu().memoizedState = e);
      },
      useTransition: function () {
        var e = Lu(!1),
          t = e[0];
        return (e = Xu.bind(null, e[1])), (Cu().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = pu,
          a = Cu();
        if (ro) {
          if (void 0 === n) throw Error(ae(407));
          n = n();
        } else {
          if (((n = t()), null === As)) throw Error(ae(349));
          0 != (30 & hu) || Iu(r, t, n);
        }
        a.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (a.queue = i),
          Gu(Ou.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          Bu(9, Ru.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Cu(),
          t = As.identifierPrefix;
        if (ro) {
          var n = Qi;
          (t =
            ":" +
            t +
            "R" +
            (n = (Ki & ~(1 << (32 - on(Ki) - 1))).toString(32) + n)),
            0 < (n = bu++) && (t += "H" + n.toString(32)),
            (t += ":");
        } else t = ":" + t + "r" + (n = _u++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ul = {
      readContext: Co,
      useCallback: Ku,
      useContext: Co,
      useEffect: Vu,
      useImperativeHandle: Wu,
      useInsertionEffect: $u,
      useLayoutEffect: Hu,
      useMemo: Qu,
      useReducer: Pu,
      useRef: ju,
      useState: function () {
        return Pu(xu);
      },
      useDebugValue: qu,
      useDeferredValue: function (e) {
        return Ju(Eu(), mu.memoizedState, e);
      },
      useTransition: function () {
        return [Pu(xu)[0], Eu().memoizedState];
      },
      useMutableSource: Mu,
      useSyncExternalStore: Nu,
      useId: Zu,
      unstable_isNewReconciler: !1,
    },
    ll = {
      readContext: Co,
      useCallback: Ku,
      useContext: Co,
      useEffect: Vu,
      useImperativeHandle: Wu,
      useInsertionEffect: $u,
      useLayoutEffect: Hu,
      useMemo: Qu,
      useReducer: Au,
      useRef: ju,
      useState: function () {
        return Au(xu);
      },
      useDebugValue: qu,
      useDeferredValue: function (e) {
        var t = Eu();
        return null === mu ? (t.memoizedState = e) : Ju(t, mu.memoizedState, e);
      },
      useTransition: function () {
        return [Au(xu)[0], Eu().memoizedState];
      },
      useMutableSource: Mu,
      useSyncExternalStore: Nu,
      useId: Zu,
      unstable_isNewReconciler: !1,
    };
  function sl(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += ze(r)), (r = r.return);
      } while (r);
      var a = n;
    } catch (i) {
      a = "\nError generating stack: " + i.message + "\n" + i.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function cl(e, t, n) {
    return {
      value: e,
      source: null,
      stack: null != n ? n : null,
      digest: null != t ? t : null,
    };
  }
  function fl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var dl = "function" == typeof WeakMap ? WeakMap : Map;
  function hl(e, t, n) {
    ((n = Ro(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        $s || (($s = !0), (Hs = r)), fl(0, t);
      }),
      n
    );
  }
  function pl(e, t, n) {
    (n = Ro(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      (n.payload = function () {
        return r(a);
      }),
        (n.callback = function () {
          fl(0, t);
        });
    }
    var i = e.stateNode;
    return (
      null !== i &&
        "function" == typeof i.componentDidCatch &&
        (n.callback = function () {
          fl(0, t),
            "function" != typeof r &&
              (null === Ys ? (Ys = new Set([this])) : Ys.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function ml(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new dl();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
  }
  function gl(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function vl(e, t, n, r, a) {
    return 0 == (1 & e.mode)
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Ro(-1, 1)).tag = 2), Oo(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = a), e);
  }
  var yl = be.ReactCurrentOwner,
    bl = !1;
  function _l(e, t, n, r) {
    t.child = null === e ? Jo(t, null, n, r) : Qo(t, e.child, n, r);
  }
  function Sl(e, t, n, r, a) {
    n = n.render;
    var i = t.ref;
    return (
      ko(t, a),
      (r = Tu(e, t, n, r, i, a)),
      (n = ku()),
      null === e || bl
        ? (ro && n && Zi(t), (t.flags |= 1), _l(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $l(e, t, a))
    );
  }
  function wl(e, t, n, r, a) {
    if (null === e) {
      var i = n.type;
      return "function" != typeof i ||
        Ic(i) ||
        void 0 !== i.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Oc(n.type, null, r, t, t.mode, a)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = i), Tl(e, t, i, r, a));
    }
    if (((i = e.child), 0 == (e.lanes & a))) {
      var o = i.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : ua)(o, r) && e.ref === t.ref)
        return $l(e, t, a);
    }
    return (
      (t.flags |= 1),
      ((e = Rc(i, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Tl(e, t, n, r, a) {
    if (null !== e) {
      var i = e.memoizedProps;
      if (ua(i, r) && e.ref === t.ref) {
        if (((bl = !1), (t.pendingProps = r = i), 0 == (e.lanes & a)))
          return (t.lanes = e.lanes), $l(e, t, a);
        0 != (131072 & e.flags) && (bl = !0);
      }
    }
    return El(e, t, n, r, a);
  }
  function kl(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      i = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (0 == (1 & t.mode))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ci(Rs, Is),
          (Is |= n);
      else {
        if (0 == (1073741824 & n))
          return (
            (e = null !== i ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ci(Rs, Is),
            (Is |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== i ? i.baseLanes : n),
          Ci(Rs, Is),
          (Is |= r);
      }
    else
      null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ci(Rs, Is),
        (Is |= r);
    return _l(e, t, a, n), t.child;
  }
  function Cl(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function El(e, t, n, r, a) {
    var i = Ni(n) ? Ai : xi.current;
    return (
      (i = Mi(t, i)),
      ko(t, a),
      (n = Tu(e, t, n, r, i, a)),
      (r = ku()),
      null === e || bl
        ? (ro && r && Zi(t), (t.flags |= 1), _l(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          $l(e, t, a))
    );
  }
  function xl(e, t, n, r, a) {
    if (Ni(n)) {
      var i = !0;
      Fi(t);
    } else i = !1;
    if ((ko(t, a), null === t.stateNode))
      Vl(e, t), Vo(t, n, r), Ho(t, n, r, a), (r = !0);
    else if (null === e) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var l = o.context,
        s = n.contextType;
      s =
        "object" == typeof s && null !== s
          ? Co(s)
          : Mi(t, (s = Ni(n) ? Ai : xi.current));
      var c = n.getDerivedStateFromProps,
        f =
          "function" == typeof c ||
          "function" == typeof o.getSnapshotBeforeUpdate;
      f ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((u !== r || l !== s) && $o(t, o, r, s)),
        (Mo = !1);
      var d = t.memoizedState;
      (o.state = d),
        Lo(t, r, o, a),
        (l = t.memoizedState),
        u !== r || d !== l || Pi.current || Mo
          ? ("function" == typeof c && (zo(t, n, c, r), (l = t.memoizedState)),
            (u = Mo || Go(t, n, u, r, d, l, s))
              ? (f ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ("function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount()),
                "function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = s),
            (r = u))
          : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        Io(e, t),
        (u = t.memoizedProps),
        (s = t.type === t.elementType ? u : go(t.type, u)),
        (o.props = s),
        (f = t.pendingProps),
        (d = o.context),
        (l =
          "object" == typeof (l = n.contextType) && null !== l
            ? Co(l)
            : Mi(t, (l = Ni(n) ? Ai : xi.current)));
      var h = n.getDerivedStateFromProps;
      (c =
        "function" == typeof h ||
        "function" == typeof o.getSnapshotBeforeUpdate) ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((u !== f || d !== l) && $o(t, o, r, l)),
        (Mo = !1),
        (d = t.memoizedState),
        (o.state = d),
        Lo(t, r, o, a);
      var p = t.memoizedState;
      u !== f || d !== p || Pi.current || Mo
        ? ("function" == typeof h && (zo(t, n, h, r), (p = t.memoizedState)),
          (s = Mo || Go(t, n, s, r, d, p, l) || !1)
            ? (c ||
                ("function" != typeof o.UNSAFE_componentWillUpdate &&
                  "function" != typeof o.componentWillUpdate) ||
                ("function" == typeof o.componentWillUpdate &&
                  o.componentWillUpdate(r, p, l),
                "function" == typeof o.UNSAFE_componentWillUpdate &&
                  o.UNSAFE_componentWillUpdate(r, p, l)),
              "function" == typeof o.componentDidUpdate && (t.flags |= 4),
              "function" == typeof o.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof o.componentDidUpdate ||
                (u === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (u === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = p)),
          (o.props = r),
          (o.state = p),
          (o.context = l),
          (r = s))
        : ("function" != typeof o.componentDidUpdate ||
            (u === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof o.getSnapshotBeforeUpdate ||
            (u === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Pl(e, t, n, r, i, a);
  }
  function Pl(e, t, n, r, a, i) {
    Cl(e, t);
    var o = 0 != (128 & t.flags);
    if (!r && !o) return a && Di(t, n, !1), $l(e, t, i);
    (r = t.stateNode), (yl.current = t);
    var u =
      o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && o
        ? ((t.child = Qo(t, e.child, null, i)), (t.child = Qo(t, null, u, i)))
        : _l(e, t, u, i),
      (t.memoizedState = r.state),
      a && Di(t, n, !0),
      t.child
    );
  }
  function Al(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ri(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ri(0, t.context, !1),
      ru(e, t.containerInfo);
  }
  function Ml(e, t, n, r, a) {
    return ho(), po(a), (t.flags |= 256), _l(e, t, n, r), t.child;
  }
  var Nl,
    Il,
    Rl,
    Ol,
    Fl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Dl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ll(e, t, n) {
    var r,
      a = t.pendingProps,
      i = uu.current,
      o = !1,
      u = 0 != (128 & t.flags);
    if (
      ((r = u) ||
        (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
      r
        ? ((o = !0), (t.flags &= -129))
        : (null !== e && null === e.memoizedState) || (i |= 1),
      Ci(uu, 1 & i),
      null === e)
    )
      return (
        lo(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (0 == (1 & t.mode)
              ? (t.lanes = 1)
              : "$!" === e.data
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((u = a.children),
            (e = a.fallback),
            o
              ? ((a = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                0 == (1 & a) && null !== o
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = Dc(u, a, 0, null)),
                (e = Fc(e, a, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = Dl(n)),
                (t.memoizedState = Fl),
                e)
              : Bl(t, u))
      );
    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
      return (function (e, t, n, r, a, i, o) {
        if (n)
          return 256 & t.flags
            ? ((t.flags &= -257), jl(e, t, o, (r = cl(Error(ae(422))))))
            : null !== t.memoizedState
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (a = t.mode),
              (r = Dc({ mode: "visible", children: r.children }, a, 0, null)),
              ((i = Fc(i, a, o, null)).flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              0 != (1 & t.mode) && Qo(t, e.child, null, o),
              (t.child.memoizedState = Dl(o)),
              (t.memoizedState = Fl),
              i);
        if (0 == (1 & t.mode)) return jl(e, t, o, null);
        if ("$!" === a.data) {
          if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
          return (
            (r = u), jl(e, t, o, (r = cl((i = Error(ae(419))), r, void 0)))
          );
        }
        if (((u = 0 != (o & e.childLanes)), bl || u)) {
          if (null !== (r = As)) {
            switch (o & -o) {
              case 4:
                a = 2;
                break;
              case 16:
                a = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                a = 32;
                break;
              case 536870912:
                a = 268435456;
                break;
              default:
                a = 0;
            }
            0 !== (a = 0 != (a & (r.suspendedLanes | o)) ? 0 : a) &&
              a !== i.retryLane &&
              ((i.retryLane = a), Ao(e, a), nc(r, e, a, -1));
          }
          return mc(), jl(e, t, o, (r = cl(Error(ae(421)))));
        }
        return "$?" === a.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = xc.bind(null, e)),
            (a._reactRetry = t),
            null)
          : ((e = i.treeContext),
            (no = li(a.nextSibling)),
            (to = t),
            (ro = !0),
            (ao = null),
            null !== e &&
              ((Yi[Wi++] = Ki),
              (Yi[Wi++] = Qi),
              (Yi[Wi++] = qi),
              (Ki = e.id),
              (Qi = e.overflow),
              (qi = t)),
            ((t = Bl(t, r.children)).flags |= 4096),
            t);
      })(e, t, u, a, r, i, n);
    if (o) {
      (o = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
      var l = { mode: "hidden", children: a.children };
      return (
        0 == (1 & u) && t.child !== i
          ? (((a = t.child).childLanes = 0),
            (a.pendingProps = l),
            (t.deletions = null))
          : ((a = Rc(i, l)).subtreeFlags = 14680064 & i.subtreeFlags),
        null !== r ? (o = Rc(r, o)) : ((o = Fc(o, u, n, null)).flags |= 2),
        (o.return = t),
        (a.return = t),
        (a.sibling = o),
        (t.child = a),
        (a = o),
        (o = t.child),
        (u =
          null === (u = e.child.memoizedState)
            ? Dl(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Fl),
        a
      );
    }
    return (
      (e = (o = e.child).sibling),
      (a = Rc(o, { mode: "visible", children: a.children })),
      0 == (1 & t.mode) && (a.lanes = n),
      (a.return = t),
      (a.sibling = null),
      null !== e &&
        (null === (n = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : n.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Bl(e, t) {
    return (
      ((t = Dc({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function jl(e, t, n, r) {
    return (
      null !== r && po(r),
      Qo(t, e.child, null, n),
      ((e = Bl(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function zl(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), To(e.return, t, n);
  }
  function Ul(e, t, n, r, a) {
    var i = e.memoizedState;
    null === i
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = a));
  }
  function Gl(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      i = r.tail;
    if ((_l(e, t, r.children, n), 0 != (2 & (r = uu.current))))
      (r = (1 & r) | 2), (t.flags |= 128);
    else {
      if (null !== e && 0 != (128 & e.flags))
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && zl(e, n, t);
          else if (19 === e.tag) zl(e, n, t);
          else if (null !== e.child) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling; ) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Ci(uu, r), 0 == (1 & t.mode))) t.memoizedState = null;
    else
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            null !== (e = n.alternate) && null === lu(e) && (a = n),
              (n = n.sibling);
          null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            Ul(t, !1, a, n, i);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === lu(e)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          Ul(t, !0, n, null, i);
          break;
        case "together":
          Ul(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Vl(e, t) {
    0 == (1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function $l(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Ds |= t.lanes),
      0 == (n & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(ae(153));
    if (null !== t.child) {
      for (
        n = Rc((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = Rc(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Hl(e, t) {
    if (!ro)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Yl(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var a = e.child; null !== a; )
        (n |= a.lanes | a.childLanes),
          (r |= 14680064 & a.subtreeFlags),
          (r |= 14680064 & a.flags),
          (a.return = e),
          (a = a.sibling);
    else
      for (a = e.child; null !== a; )
        (n |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Wl(e, t, n) {
    var r = t.pendingProps;
    switch ((eo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Yl(t), null;
      case 1:
      case 17:
        return Ni(t.type) && Ii(), Yl(t), null;
      case 3:
        return (
          (r = t.stateNode),
          au(),
          ki(Pi),
          ki(xi),
          cu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (co(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                ((t.flags |= 1024), null !== ao && (oc(ao), (ao = null)))),
          Il(e, t),
          Yl(t),
          null
        );
      case 5:
        ou(t);
        var a = nu(tu.current);
        if (((n = t.type), null !== e && null != t.stateNode))
          Rl(e, t, n, r, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(ae(166));
            return Yl(t), null;
          }
          if (((e = nu(Zo.current)), co(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[fi] = t), (r[di] = i), (e = 0 != (1 & t.mode)), n)) {
              case "dialog":
                Ba("cancel", r), Ba("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ba("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Oa.length; a++) Ba(Oa[a], r);
                break;
              case "source":
                Ba("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ba("error", r), Ba("load", r);
                break;
              case "details":
                Ba("toggle", r);
                break;
              case "input":
                Ke(r, i), Ba("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  Ba("invalid", r);
                break;
              case "textarea":
                rt(r, i), Ba("invalid", r);
            }
            for (var o in (vt(n, i), (a = null), i))
              if (i.hasOwnProperty(o)) {
                var u = i[o];
                "children" === o
                  ? "string" == typeof u
                    ? r.textContent !== u &&
                      (!0 !== i.suppressHydrationWarning &&
                        Ja(r.textContent, u, e),
                      (a = ["children", u]))
                    : "number" == typeof u &&
                      r.textContent !== "" + u &&
                      (!0 !== i.suppressHydrationWarning &&
                        Ja(r.textContent, u, e),
                      (a = ["children", "" + u]))
                  : oe.hasOwnProperty(o) &&
                    null != u &&
                    "onScroll" === o &&
                    Ba("scroll", r);
              }
            switch (n) {
              case "input":
                He(r), Xe(r, i, !0);
                break;
              case "textarea":
                He(r), it(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof i.onClick && (r.onclick = Xa);
            }
            (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
          } else {
            (o = 9 === a.nodeType ? a : a.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = ot(n)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === n
                  ? (((e = o.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof r.is
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    "select" === n &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[fi] = t),
              (e[di] = r),
              Nl(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = yt(n, r)), n)) {
                case "dialog":
                  Ba("cancel", e), Ba("close", e), (a = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ba("load", e), (a = r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < Oa.length; a++) Ba(Oa[a], e);
                  a = r;
                  break;
                case "source":
                  Ba("error", e), (a = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ba("error", e), Ba("load", e), (a = r);
                  break;
                case "details":
                  Ba("toggle", e), (a = r);
                  break;
                case "input":
                  Ke(e, r), (a = qe(e, r)), Ba("invalid", e);
                  break;
                case "option":
                default:
                  a = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (a = De({}, r, { value: void 0 })),
                    Ba("invalid", e);
                  break;
                case "textarea":
                  rt(e, r), (a = nt(e, r)), Ba("invalid", e);
              }
              for (i in (vt(n, a), (u = a)))
                if (u.hasOwnProperty(i)) {
                  var l = u[i];
                  "style" === i
                    ? mt(e, l)
                    : "dangerouslySetInnerHTML" === i
                    ? null != (l = l ? l.__html : void 0) && ct(e, l)
                    : "children" === i
                    ? "string" == typeof l
                      ? ("textarea" !== n || "" !== l) && ft(e, l)
                      : "number" == typeof l && ft(e, "" + l)
                    : "suppressContentEditableWarning" !== i &&
                      "suppressHydrationWarning" !== i &&
                      "autoFocus" !== i &&
                      (oe.hasOwnProperty(i)
                        ? null != l && "onScroll" === i && Ba("scroll", e)
                        : null != l && ye(e, i, l, o));
                }
              switch (n) {
                case "input":
                  He(e), Xe(e, r, !1);
                  break;
                case "textarea":
                  He(e), it(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + Ve(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (i = r.value)
                      ? tt(e, !!r.multiple, i, !1)
                      : null != r.defaultValue &&
                        tt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof a.onClick && (e.onclick = Xa);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Yl(t), null;
      case 6:
        if (e && null != t.stateNode) Ol(e, t, e.memoizedProps, r);
        else {
          if ("string" != typeof r && null === t.stateNode)
            throw Error(ae(166));
          if (((n = nu(tu.current)), nu(Zo.current), co(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[fi] = t),
              (i = r.nodeValue !== n) && null !== (e = to))
            )
              switch (e.tag) {
                case 3:
                  Ja(r.nodeValue, n, 0 != (1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    Ja(r.nodeValue, n, 0 != (1 & e.mode));
              }
            i && (t.flags |= 4);
          } else
            ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
              fi
            ] = t),
              (t.stateNode = r);
        }
        return Yl(t), null;
      case 13:
        if (
          (ki(uu),
          (r = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (ro && null !== no && 0 != (1 & t.mode) && 0 == (128 & t.flags))
            fo(), ho(), (t.flags |= 98560), (i = !1);
          else if (((i = co(t)), null !== r && null !== r.dehydrated)) {
            if (null === e) {
              if (!i) throw Error(ae(318));
              if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                throw Error(ae(317));
              i[fi] = t;
            } else
              ho(),
                0 == (128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4);
            Yl(t), (i = !1);
          } else null !== ao && (oc(ao), (ao = null)), (i = !0);
          if (!i) return 65536 & t.flags ? t : null;
        }
        return 0 != (128 & t.flags)
          ? ((t.lanes = n), t)
          : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
              r &&
              ((t.child.flags |= 8192),
              0 != (1 & t.mode) &&
                (null === e || 0 != (1 & uu.current)
                  ? 0 === Os && (Os = 3)
                  : mc())),
            null !== t.updateQueue && (t.flags |= 4),
            Yl(t),
            null);
      case 4:
        return (
          au(),
          Il(e, t),
          null === e && Ua(t.stateNode.containerInfo),
          Yl(t),
          null
        );
      case 10:
        return wo(t.type._context), Yl(t), null;
      case 19:
        if ((ki(uu), null === (i = t.memoizedState))) return Yl(t), null;
        if (((r = 0 != (128 & t.flags)), null === (o = i.rendering)))
          if (r) Hl(i, !1);
          else {
            if (0 !== Os || (null !== e && 0 != (128 & e.flags)))
              for (e = t.child; null !== e; ) {
                if (null !== (o = lu(e))) {
                  for (
                    t.flags |= 128,
                      Hl(i, !1),
                      null !== (r = o.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (e = r),
                      ((i = n).flags &= 14680066),
                      null === (o = i.alternate)
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Ci(uu, (1 & uu.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== i.tail &&
              Qt() > Gs &&
              ((t.flags |= 128), (r = !0), Hl(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (null !== (e = lu(o))) {
              if (
                ((t.flags |= 128),
                (r = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Hl(i, !0),
                null === i.tail &&
                  "hidden" === i.tailMode &&
                  !o.alternate &&
                  !ro)
              )
                return Yl(t), null;
            } else
              2 * Qt() - i.renderingStartTime > Gs &&
                1073741824 !== n &&
                ((t.flags |= 128), (r = !0), Hl(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : (null !== (n = i.last) ? (n.sibling = o) : (t.child = o),
              (i.last = o));
        }
        return null !== i.tail
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Qt()),
            (t.sibling = null),
            (n = uu.current),
            Ci(uu, r ? (1 & n) | 2 : 1 & n),
            t)
          : (Yl(t), null);
      case 22:
      case 23:
        return (
          fc(),
          (r = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
          r && 0 != (1 & t.mode)
            ? 0 != (1073741824 & Is) &&
              (Yl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : Yl(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(ae(156, t.tag));
  }
  function ql(e, t) {
    switch ((eo(t), t.tag)) {
      case 1:
        return (
          Ni(t.type) && Ii(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          au(),
          ki(Pi),
          ki(xi),
          cu(),
          0 != (65536 & (e = t.flags)) && 0 == (128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return ou(t), null;
      case 13:
        if ((ki(uu), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(ae(340));
          ho();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return ki(uu), null;
      case 4:
        return au(), null;
      case 10:
        return wo(t.type._context), null;
      case 22:
      case 23:
        return fc(), null;
      default:
        return null;
    }
  }
  (Nl = function (e, t) {
    for (var n = t.child; null !== n; ) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; null === n.sibling; ) {
        if (null === n.return || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Il = function () {}),
    (Rl = function (e, t, n, r) {
      var a = e.memoizedProps;
      if (a !== r) {
        (e = t.stateNode), nu(Zo.current);
        var i,
          o = null;
        switch (n) {
          case "input":
            (a = qe(e, a)), (r = qe(e, r)), (o = []);
            break;
          case "select":
            (a = De({}, a, { value: void 0 })),
              (r = De({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (a = nt(e, a)), (r = nt(e, r)), (o = []);
            break;
          default:
            "function" != typeof a.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = Xa);
        }
        for (s in (vt(n, r), (n = null), a))
          if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
            if ("style" === s) {
              var u = a[s];
              for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
            } else
              "dangerouslySetInnerHTML" !== s &&
                "children" !== s &&
                "suppressContentEditableWarning" !== s &&
                "suppressHydrationWarning" !== s &&
                "autoFocus" !== s &&
                (oe.hasOwnProperty(s)
                  ? o || (o = [])
                  : (o = o || []).push(s, null));
        for (s in r) {
          var l = r[s];
          if (
            ((u = null != a ? a[s] : void 0),
            r.hasOwnProperty(s) && l !== u && (null != l || null != u))
          )
            if ("style" === s)
              if (u) {
                for (i in u)
                  !u.hasOwnProperty(i) ||
                    (l && l.hasOwnProperty(i)) ||
                    (n || (n = {}), (n[i] = ""));
                for (i in l)
                  l.hasOwnProperty(i) &&
                    u[i] !== l[i] &&
                    (n || (n = {}), (n[i] = l[i]));
              } else n || (o || (o = []), o.push(s, n)), (n = l);
            else
              "dangerouslySetInnerHTML" === s
                ? ((l = l ? l.__html : void 0),
                  (u = u ? u.__html : void 0),
                  null != l && u !== l && (o = o || []).push(s, l))
                : "children" === s
                ? ("string" != typeof l && "number" != typeof l) ||
                  (o = o || []).push(s, "" + l)
                : "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  (oe.hasOwnProperty(s)
                    ? (null != l && "onScroll" === s && Ba("scroll", e),
                      o || u === l || (o = []))
                    : (o = o || []).push(s, l));
        }
        n && (o = o || []).push("style", n);
        var s = o;
        (t.updateQueue = s) && (t.flags |= 4);
      }
    }),
    (Ol = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  var Kl = !1,
    Ql = !1,
    Jl = "function" == typeof WeakSet ? WeakSet : Set,
    Xl = null;
  function Zl(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (r) {
          kc(e, t, r);
        }
      else n.current = null;
  }
  function es(e, t, n) {
    try {
      n();
    } catch (r) {
      kc(e, t, r);
    }
  }
  var ts = !1;
  function ns(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var i = a.destroy;
          (a.destroy = void 0), void 0 !== i && es(t, n, i);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function rs(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function as(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
    }
  }
  function is(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), is(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[fi], delete t[di], delete t[pi], delete t[mi], delete t[gi]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function os(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function us(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || os(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

      ) {
        if (2 & e.flags) continue e;
        if (null === e.child || 4 === e.tag) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function ls(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = Xa));
    else if (4 !== r && null !== (e = e.child))
      for (ls(e, t, n), e = e.sibling; null !== e; )
        ls(e, t, n), (e = e.sibling);
  }
  function ss(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (ss(e, t, n), e = e.sibling; null !== e; )
        ss(e, t, n), (e = e.sibling);
  }
  var cs = null,
    fs = !1;
  function ds(e, t, n) {
    for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
  }
  function hs(e, t, n) {
    if (an && "function" == typeof an.onCommitFiberUnmount)
      try {
        an.onCommitFiberUnmount(rn, n);
      } catch (u) {}
    switch (n.tag) {
      case 5:
        Ql || Zl(n, t);
      case 6:
        var r = cs,
          a = fs;
        (cs = null),
          ds(e, t, n),
          (fs = a),
          null !== (cs = r) &&
            (fs
              ? ((e = cs),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : cs.removeChild(n.stateNode));
        break;
      case 18:
        null !== cs &&
          (fs
            ? ((e = cs),
              (n = n.stateNode),
              8 === e.nodeType
                ? ui(e.parentNode, n)
                : 1 === e.nodeType && ui(e, n),
              Gn(e))
            : ui(cs, n.stateNode));
        break;
      case 4:
        (r = cs),
          (a = fs),
          (cs = n.stateNode.containerInfo),
          (fs = !0),
          ds(e, t, n),
          (cs = r),
          (fs = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ql &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          a = r = r.next;
          do {
            var i = a,
              o = i.destroy;
            (i = i.tag),
              void 0 !== o && (0 != (2 & i) || 0 != (4 & i)) && es(n, t, o),
              (a = a.next);
          } while (a !== r);
        }
        ds(e, t, n);
        break;
      case 1:
        if (
          !Ql &&
          (Zl(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (u) {
            kc(n, t, u);
          }
        ds(e, t, n);
        break;
      case 21:
        ds(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Ql = (r = Ql) || null !== n.memoizedState), ds(e, t, n), (Ql = r))
          : ds(e, t, n);
        break;
      default:
        ds(e, t, n);
    }
  }
  function ps(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new Jl()),
        t.forEach(function (t) {
          var r = Pc.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function ms(e, t) {
    var n = t.deletions;
    if (null !== n)
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        try {
          var i = e,
            o = t,
            u = o;
          e: for (; null !== u; ) {
            switch (u.tag) {
              case 5:
                (cs = u.stateNode), (fs = !1);
                break e;
              case 3:
              case 4:
                (cs = u.stateNode.containerInfo), (fs = !0);
                break e;
            }
            u = u.return;
          }
          if (null === cs) throw Error(ae(160));
          hs(i, o, a), (cs = null), (fs = !1);
          var l = a.alternate;
          null !== l && (l.return = null), (a.return = null);
        } catch (s) {
          kc(a, t, s);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
  }
  function gs(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((ms(t, e), vs(e), 4 & r)) {
          try {
            ns(3, e, e.return), rs(3, e);
          } catch (m) {
            kc(e, e.return, m);
          }
          try {
            ns(5, e, e.return);
          } catch (m) {
            kc(e, e.return, m);
          }
        }
        break;
      case 1:
        ms(t, e), vs(e), 512 & r && null !== n && Zl(n, n.return);
        break;
      case 5:
        if (
          (ms(t, e),
          vs(e),
          512 & r && null !== n && Zl(n, n.return),
          32 & e.flags)
        ) {
          var a = e.stateNode;
          try {
            ft(a, "");
          } catch (m) {
            kc(e, e.return, m);
          }
        }
        if (4 & r && null != (a = e.stateNode)) {
          var i = e.memoizedProps,
            o = null !== n ? n.memoizedProps : i,
            u = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), null !== l))
            try {
              "input" === u && "radio" === i.type && null != i.name && Qe(a, i),
                yt(u, o);
              var s = yt(u, i);
              for (o = 0; o < l.length; o += 2) {
                var c = l[o],
                  f = l[o + 1];
                "style" === c
                  ? mt(a, f)
                  : "dangerouslySetInnerHTML" === c
                  ? ct(a, f)
                  : "children" === c
                  ? ft(a, f)
                  : ye(a, c, f, s);
              }
              switch (u) {
                case "input":
                  Je(a, i);
                  break;
                case "textarea":
                  at(a, i);
                  break;
                case "select":
                  var d = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!i.multiple;
                  var h = i.value;
                  null != h
                    ? tt(a, !!i.multiple, h, !1)
                    : d !== !!i.multiple &&
                      (null != i.defaultValue
                        ? tt(a, !!i.multiple, i.defaultValue, !0)
                        : tt(a, !!i.multiple, i.multiple ? [] : "", !1));
              }
              a[di] = i;
            } catch (m) {
              kc(e, e.return, m);
            }
        }
        break;
      case 6:
        if ((ms(t, e), vs(e), 4 & r)) {
          if (null === e.stateNode) throw Error(ae(162));
          (a = e.stateNode), (i = e.memoizedProps);
          try {
            a.nodeValue = i;
          } catch (m) {
            kc(e, e.return, m);
          }
        }
        break;
      case 3:
        if (
          (ms(t, e), vs(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
        )
          try {
            Gn(t.containerInfo);
          } catch (m) {
            kc(e, e.return, m);
          }
        break;
      case 4:
      default:
        ms(t, e), vs(e);
        break;
      case 13:
        ms(t, e),
          vs(e),
          8192 & (a = e.child).flags &&
            ((i = null !== a.memoizedState),
            (a.stateNode.isHidden = i),
            !i ||
              (null !== a.alternate && null !== a.alternate.memoizedState) ||
              (Us = Qt())),
          4 & r && ps(e);
        break;
      case 22:
        if (
          ((c = null !== n && null !== n.memoizedState),
          1 & e.mode ? ((Ql = (s = Ql) || c), ms(t, e), (Ql = s)) : ms(t, e),
          vs(e),
          8192 & r)
        ) {
          if (
            ((s = null !== e.memoizedState),
            (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
          )
            for (Xl = e, c = e.child; null !== c; ) {
              for (f = Xl = c; null !== Xl; ) {
                switch (((h = (d = Xl).child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ns(4, d, d.return);
                    break;
                  case 1:
                    Zl(d, d.return);
                    var p = d.stateNode;
                    if ("function" == typeof p.componentWillUnmount) {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (p.props = t.memoizedProps),
                          (p.state = t.memoizedState),
                          p.componentWillUnmount();
                      } catch (g) {
                        kc(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    Zl(d, d.return);
                    break;
                  case 22:
                    if (null !== d.memoizedState) {
                      Ss(f);
                      continue;
                    }
                }
                null !== h ? ((h.return = d), (Xl = h)) : Ss(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (5 === f.tag) {
              if (null === c) {
                c = f;
                try {
                  (a = f.stateNode),
                    s
                      ? "function" == typeof (i = a.style).setProperty
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none")
                      : ((u = f.stateNode),
                        (o =
                          null != (l = f.memoizedProps.style) &&
                          l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (u.style.display = pt("display", o)));
                } catch (m) {
                  kc(e, e.return, m);
                }
              }
            } else if (6 === f.tag) {
              if (null === c)
                try {
                  f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                } catch (m) {
                  kc(e, e.return, m);
                }
            } else if (
              ((22 !== f.tag && 23 !== f.tag) ||
                null === f.memoizedState ||
                f === e) &&
              null !== f.child
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; null === f.sibling; ) {
              if (null === f.return || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        ms(t, e), vs(e), 4 & r && ps(e);
      case 21:
    }
  }
  function vs(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var n = e.return; null !== n; ) {
            if (os(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(ae(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            32 & r.flags && (ft(a, ""), (r.flags &= -33)), ss(e, us(e), a);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo;
            ls(e, us(e), i);
            break;
          default:
            throw Error(ae(161));
        }
      } catch (o) {
        kc(e, e.return, o);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function ys(e, t, n) {
    (Xl = e), bs(e);
  }
  function bs(e, t, n) {
    for (var r = 0 != (1 & e.mode); null !== Xl; ) {
      var a = Xl,
        i = a.child;
      if (22 === a.tag && r) {
        var o = null !== a.memoizedState || Kl;
        if (!o) {
          var u = a.alternate,
            l = (null !== u && null !== u.memoizedState) || Ql;
          u = Kl;
          var s = Ql;
          if (((Kl = o), (Ql = l) && !s))
            for (Xl = a; null !== Xl; )
              (l = (o = Xl).child),
                22 === o.tag && null !== o.memoizedState
                  ? ws(a)
                  : null !== l
                  ? ((l.return = o), (Xl = l))
                  : ws(a);
          for (; null !== i; ) (Xl = i), bs(i), (i = i.sibling);
          (Xl = a), (Kl = u), (Ql = s);
        }
        _s(e);
      } else
        0 != (8772 & a.subtreeFlags) && null !== i
          ? ((i.return = a), (Xl = i))
          : _s(e);
    }
  }
  function _s(e) {
    for (; null !== Xl; ) {
      var t = Xl;
      if (0 != (8772 & t.flags)) {
        var n = t.alternate;
        try {
          if (0 != (8772 & t.flags))
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ql || rs(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (4 & t.flags && !Ql)
                  if (null === n) r.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : go(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      a,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                null !== i && Bo(t, i, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (null !== o) {
                  if (((n = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode;
                    }
                  Bo(t, o, n);
                }
                break;
              case 5:
                var u = t.stateNode;
                if (null === n && 4 & t.flags) {
                  n = u;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var s = t.alternate;
                  if (null !== s) {
                    var c = s.memoizedState;
                    if (null !== c) {
                      var f = c.dehydrated;
                      null !== f && Gn(f);
                    }
                  }
                }
                break;
              default:
                throw Error(ae(163));
            }
          Ql || (512 & t.flags && as(t));
        } catch (d) {
          kc(t, t.return, d);
        }
      }
      if (t === e) {
        Xl = null;
        break;
      }
      if (null !== (n = t.sibling)) {
        (n.return = t.return), (Xl = n);
        break;
      }
      Xl = t.return;
    }
  }
  function Ss(e) {
    for (; null !== Xl; ) {
      var t = Xl;
      if (t === e) {
        Xl = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        (n.return = t.return), (Xl = n);
        break;
      }
      Xl = t.return;
    }
  }
  function ws(e) {
    for (; null !== Xl; ) {
      var t = Xl;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              rs(4, t);
            } catch (l) {
              kc(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                kc(t, a, l);
              }
            }
            var i = t.return;
            try {
              as(t);
            } catch (l) {
              kc(t, i, l);
            }
            break;
          case 5:
            var o = t.return;
            try {
              as(t);
            } catch (l) {
              kc(t, o, l);
            }
        }
      } catch (l) {
        kc(t, t.return, l);
      }
      if (t === e) {
        Xl = null;
        break;
      }
      var u = t.sibling;
      if (null !== u) {
        (u.return = t.return), (Xl = u);
        break;
      }
      Xl = t.return;
    }
  }
  var Ts,
    ks = Math.ceil,
    Cs = be.ReactCurrentDispatcher,
    Es = be.ReactCurrentOwner,
    xs = be.ReactCurrentBatchConfig,
    Ps = 0,
    As = null,
    Ms = null,
    Ns = 0,
    Is = 0,
    Rs = Ti(0),
    Os = 0,
    Fs = null,
    Ds = 0,
    Ls = 0,
    Bs = 0,
    js = null,
    zs = null,
    Us = 0,
    Gs = 1 / 0,
    Vs = null,
    $s = !1,
    Hs = null,
    Ys = null,
    Ws = !1,
    qs = null,
    Ks = 0,
    Qs = 0,
    Js = null,
    Xs = -1,
    Zs = 0;
  function ec() {
    return 0 != (6 & Ps) ? Qt() : -1 !== Xs ? Xs : (Xs = Qt());
  }
  function tc(e) {
    return 0 == (1 & e.mode)
      ? 1
      : 0 != (2 & Ps) && 0 !== Ns
      ? Ns & -Ns
      : null !== mo.transition
      ? (0 === Zs && (Zs = mn()), Zs)
      : 0 !== (e = bn)
      ? e
      : (e = void 0 === (e = window.event) ? 16 : Qn(e.type));
  }
  function nc(e, t, n, r) {
    if (50 < Qs) throw ((Qs = 0), (Js = null), Error(ae(185)));
    vn(e, n, r),
      (0 != (2 & Ps) && e === As) ||
        (e === As && (0 == (2 & Ps) && (Ls |= n), 4 === Os && uc(e, Ns)),
        rc(e, r),
        1 === n &&
          0 === Ps &&
          0 == (1 & t.mode) &&
          ((Gs = Qt() + 500), Bi && Ui()));
  }
  function rc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          i = e.pendingLanes;
        0 < i;

      ) {
        var o = 31 - on(i),
          u = 1 << o,
          l = a[o];
        -1 === l
          ? (0 != (u & n) && 0 == (u & r)) || (a[o] = hn(u, t))
          : l <= t && (e.expiredLanes |= u),
          (i &= ~u);
      }
    })(e, t);
    var r,
      a = dn(e, e === As ? Ns : 0);
    if (0 === a)
      null !== n && Wt(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((null != n && Wt(n), 1 === t))
        0 === e.tag
          ? ((r = lc.bind(null, e)), (Bi = !0), zi(r))
          : zi(lc.bind(null, e)),
          ii(function () {
            0 == (6 & Ps) && Ui();
          }),
          (n = null);
      else {
        switch (_n(a)) {
          case 1:
            n = Xt;
            break;
          case 4:
            n = Zt;
            break;
          case 16:
          default:
            n = en;
            break;
          case 536870912:
            n = nn;
        }
        n = Ac(n, ac.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function ac(e, t) {
    if (((Xs = -1), (Zs = 0), 0 != (6 & Ps))) throw Error(ae(327));
    var n = e.callbackNode;
    if (wc() && e.callbackNode !== n) return null;
    var r = dn(e, e === As ? Ns : 0);
    if (0 === r) return null;
    if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = gc(e, r);
    else {
      t = r;
      var a = Ps;
      Ps |= 2;
      var i = pc();
      for (
        (As === e && Ns === t) || ((Vs = null), (Gs = Qt() + 500), dc(e, t));
        ;

      )
        try {
          yc();
          break;
        } catch (u) {
          hc(e, u);
        }
      So(),
        (Cs.current = i),
        (Ps = a),
        null !== Ms ? (t = 0) : ((As = null), (Ns = 0), (t = Os));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (a = pn(e)) && ((r = a), (t = ic(e, a))), 1 === t))
        throw ((n = Fs), dc(e, 0), uc(e, r), rc(e, Qt()), n);
      if (6 === t) uc(e, r);
      else {
        if (
          ((a = e.current.alternate),
          0 == (30 & r) &&
            !(function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var a = n[r],
                        i = a.getSnapshot;
                      a = a.value;
                      try {
                        if (!oa(i(), a)) return !1;
                      } catch (o) {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  (n.return = t), (t = n);
                else {
                  if (t === e) break;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  (t.sibling.return = t.return), (t = t.sibling);
                }
              }
              return !0;
            })(a) &&
            (2 === (t = gc(e, r)) &&
              0 !== (i = pn(e)) &&
              ((r = i), (t = ic(e, i))),
            1 === t))
        )
          throw ((n = Fs), dc(e, 0), uc(e, r), rc(e, Qt()), n);
        switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(ae(345));
          case 2:
          case 5:
            Sc(e, zs, Vs);
            break;
          case 3:
            if (
              (uc(e, r), (130023424 & r) === r && 10 < (t = Us + 500 - Qt()))
            ) {
              if (0 !== dn(e, 0)) break;
              if (((a = e.suspendedLanes) & r) !== r) {
                ec(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = ni(Sc.bind(null, e, zs, Vs), t);
              break;
            }
            Sc(e, zs, Vs);
            break;
          case 4:
            if ((uc(e, r), (4194240 & r) === r)) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var o = 31 - on(r);
              (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
            }
            if (
              ((r = a),
              10 <
                (r =
                  (120 > (r = Qt() - r)
                    ? 120
                    : 480 > r
                    ? 480
                    : 1080 > r
                    ? 1080
                    : 1920 > r
                    ? 1920
                    : 3e3 > r
                    ? 3e3
                    : 4320 > r
                    ? 4320
                    : 1960 * ks(r / 1960)) - r))
            ) {
              e.timeoutHandle = ni(Sc.bind(null, e, zs, Vs), r);
              break;
            }
            Sc(e, zs, Vs);
            break;
          default:
            throw Error(ae(329));
        }
      }
    }
    return rc(e, Qt()), e.callbackNode === n ? ac.bind(null, e) : null;
  }
  function ic(e, t) {
    var n = js;
    return (
      e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
      2 !== (e = gc(e, t)) && ((t = zs), (zs = n), null !== t && oc(t)),
      e
    );
  }
  function oc(e) {
    null === zs ? (zs = e) : zs.push.apply(zs, e);
  }
  function uc(e, t) {
    for (
      t &= ~Bs,
        t &= ~Ls,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - on(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function lc(e) {
    if (0 != (6 & Ps)) throw Error(ae(327));
    wc();
    var t = dn(e, 0);
    if (0 == (1 & t)) return rc(e, Qt()), null;
    var n = gc(e, t);
    if (0 !== e.tag && 2 === n) {
      var r = pn(e);
      0 !== r && ((t = r), (n = ic(e, r)));
    }
    if (1 === n) throw ((n = Fs), dc(e, 0), uc(e, t), rc(e, Qt()), n);
    if (6 === n) throw Error(ae(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Sc(e, zs, Vs),
      rc(e, Qt()),
      null
    );
  }
  function sc(e, t) {
    var n = Ps;
    Ps |= 1;
    try {
      return e(t);
    } finally {
      0 === (Ps = n) && ((Gs = Qt() + 500), Bi && Ui());
    }
  }
  function cc(e) {
    null !== qs && 0 === qs.tag && 0 == (6 & Ps) && wc();
    var t = Ps;
    Ps |= 1;
    var n = xs.transition,
      r = bn;
    try {
      if (((xs.transition = null), (bn = 1), e)) return e();
    } finally {
      (bn = r), (xs.transition = n), 0 == (6 & (Ps = t)) && Ui();
    }
  }
  function fc() {
    (Is = Rs.current), ki(Rs);
  }
  function dc(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), ri(n)), null !== Ms))
      for (n = Ms.return; null !== n; ) {
        var r = n;
        switch ((eo(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Ii();
            break;
          case 3:
            au(), ki(Pi), ki(xi), cu();
            break;
          case 5:
            ou(r);
            break;
          case 4:
            au();
            break;
          case 13:
          case 19:
            ki(uu);
            break;
          case 10:
            wo(r.type._context);
            break;
          case 22:
          case 23:
            fc();
        }
        n = n.return;
      }
    if (
      ((As = e),
      (Ms = e = Rc(e.current, null)),
      (Ns = Is = t),
      (Os = 0),
      (Fs = null),
      (Bs = Ls = Ds = 0),
      (zs = js = null),
      null !== Eo)
    ) {
      for (t = 0; t < Eo.length; t++)
        if (null !== (r = (n = Eo[t]).interleaved)) {
          n.interleaved = null;
          var a = r.next,
            i = n.pending;
          if (null !== i) {
            var o = i.next;
            (i.next = a), (r.next = o);
          }
          n.pending = r;
        }
      Eo = null;
    }
    return e;
  }
  function hc(e, t) {
    for (;;) {
      var n = Ms;
      try {
        if ((So(), (fu.current = il), vu)) {
          for (var r = pu.memoizedState; null !== r; ) {
            var a = r.queue;
            null !== a && (a.pending = null), (r = r.next);
          }
          vu = !1;
        }
        if (
          ((hu = 0),
          (gu = mu = pu = null),
          (yu = !1),
          (bu = 0),
          (Es.current = null),
          null === n || null === n.return)
        ) {
          (Os = 1), (Fs = t), (Ms = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            l = t;
          if (
            ((t = Ns),
            (u.flags |= 32768),
            null !== l && "object" == typeof l && "function" == typeof l.then)
          ) {
            var s = l,
              c = u,
              f = c.tag;
            if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var h = gl(o);
            if (null !== h) {
              (h.flags &= -257),
                vl(h, o, u, 0, t),
                1 & h.mode && ml(i, s, t),
                (l = s);
              var p = (t = h).updateQueue;
              if (null === p) {
                var m = new Set();
                m.add(l), (t.updateQueue = m);
              } else p.add(l);
              break e;
            }
            if (0 == (1 & t)) {
              ml(i, s, t), mc();
              break e;
            }
            l = Error(ae(426));
          } else if (ro && 1 & u.mode) {
            var g = gl(o);
            if (null !== g) {
              0 == (65536 & g.flags) && (g.flags |= 256),
                vl(g, o, u, 0, t),
                po(sl(l, u));
              break e;
            }
          }
          (i = l = sl(l, u)),
            4 !== Os && (Os = 2),
            null === js ? (js = [i]) : js.push(i),
            (i = o);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536),
                  (t &= -t),
                  (i.lanes |= t),
                  Do(i, hl(0, l, t));
                break e;
              case 1:
                u = l;
                var v = i.type,
                  y = i.stateNode;
                if (
                  0 == (128 & i.flags) &&
                  ("function" == typeof v.getDerivedStateFromError ||
                    (null !== y &&
                      "function" == typeof y.componentDidCatch &&
                      (null === Ys || !Ys.has(y))))
                ) {
                  (i.flags |= 65536),
                    (t &= -t),
                    (i.lanes |= t),
                    Do(i, pl(i, u, t));
                  break e;
                }
            }
            i = i.return;
          } while (null !== i);
        }
        _c(n);
      } catch (b) {
        (t = b), Ms === n && null !== n && (Ms = n = n.return);
        continue;
      }
      break;
    }
  }
  function pc() {
    var e = Cs.current;
    return (Cs.current = il), null === e ? il : e;
  }
  function mc() {
    (0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
      null === As ||
        (0 == (268435455 & Ds) && 0 == (268435455 & Ls)) ||
        uc(As, Ns);
  }
  function gc(e, t) {
    var n = Ps;
    Ps |= 2;
    var r = pc();
    for ((As === e && Ns === t) || ((Vs = null), dc(e, t)); ; )
      try {
        vc();
        break;
      } catch (a) {
        hc(e, a);
      }
    if ((So(), (Ps = n), (Cs.current = r), null !== Ms)) throw Error(ae(261));
    return (As = null), (Ns = 0), Os;
  }
  function vc() {
    for (; null !== Ms; ) bc(Ms);
  }
  function yc() {
    for (; null !== Ms && !qt(); ) bc(Ms);
  }
  function bc(e) {
    var t = Ts(e.alternate, e, Is);
    (e.memoizedProps = e.pendingProps),
      null === t ? _c(e) : (Ms = t),
      (Es.current = null);
  }
  function _c(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 0 == (32768 & t.flags))) {
        if (null !== (n = Wl(n, t, Is))) return void (Ms = n);
      } else {
        if (null !== (n = ql(n, t))) return (n.flags &= 32767), void (Ms = n);
        if (null === e) return (Os = 6), void (Ms = null);
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      }
      if (null !== (t = t.sibling)) return void (Ms = t);
      Ms = t = e;
    } while (null !== t);
    0 === Os && (Os = 5);
  }
  function Sc(e, t, n) {
    var r = bn,
      a = xs.transition;
    try {
      (xs.transition = null),
        (bn = 1),
        (function (e, t, n, r) {
          do {
            wc();
          } while (null !== qs);
          if (0 != (6 & Ps)) throw Error(ae(327));
          n = e.finishedWork;
          var a = e.finishedLanes;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(ae(177));
          (e.callbackNode = null), (e.callbackPriority = 0);
          var i = n.lanes | n.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              (e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements);
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n; ) {
                var a = 31 - on(n),
                  i = 1 << a;
                (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
              }
            })(e, i),
            e === As && ((Ms = As = null), (Ns = 0)),
            (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
              Ws ||
              ((Ws = !0),
              Ac(en, function () {
                return wc(), null;
              })),
            (i = 0 != (15990 & n.flags)),
            0 != (15990 & n.subtreeFlags) || i)
          ) {
            (i = xs.transition), (xs.transition = null);
            var o = bn;
            bn = 1;
            var u = Ps;
            (Ps |= 4),
              (Es.current = null),
              (function (e, t) {
                if (((Za = $n), da((e = fa())))) {
                  if ("selectionStart" in e)
                    var n = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var r =
                        (n = ((n = e.ownerDocument) && n.defaultView) || window)
                          .getSelection && n.getSelection();
                      if (r && 0 !== r.rangeCount) {
                        n = r.anchorNode;
                        var a = r.anchorOffset,
                          i = r.focusNode;
                        r = r.focusOffset;
                        try {
                          n.nodeType, i.nodeType;
                        } catch (_) {
                          n = null;
                          break e;
                        }
                        var o = 0,
                          u = -1,
                          l = -1,
                          s = 0,
                          c = 0,
                          f = e,
                          d = null;
                        t: for (;;) {
                          for (
                            var h;
                            f !== n ||
                              (0 !== a && 3 !== f.nodeType) ||
                              (u = o + a),
                              f !== i ||
                                (0 !== r && 3 !== f.nodeType) ||
                                (l = o + r),
                              3 === f.nodeType && (o += f.nodeValue.length),
                              null !== (h = f.firstChild);

                          )
                            (d = f), (f = h);
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (d === n && ++s === a && (u = o),
                              d === i && ++c === r && (l = o),
                              null !== (h = f.nextSibling))
                            )
                              break;
                            d = (f = d).parentNode;
                          }
                          f = h;
                        }
                        n = -1 === u || -1 === l ? null : { start: u, end: l };
                      } else n = null;
                    }
                  n = n || { start: 0, end: 0 };
                } else n = null;
                for (
                  ei = { focusedElem: e, selectionRange: n }, $n = !1, Xl = t;
                  null !== Xl;

                )
                  if (
                    ((e = (t = Xl).child),
                    0 != (1028 & t.subtreeFlags) && null !== e)
                  )
                    (e.return = t), (Xl = e);
                  else
                    for (; null !== Xl; ) {
                      t = Xl;
                      try {
                        var p = t.alternate;
                        if (0 != (1024 & t.flags))
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (null !== p) {
                                var m = p.memoizedProps,
                                  g = p.memoizedState,
                                  v = t.stateNode,
                                  y = v.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? m
                                      : go(t.type, m),
                                    g
                                  );
                                v.__reactInternalSnapshotBeforeUpdate = y;
                              }
                              break;
                            case 3:
                              var b = t.stateNode.containerInfo;
                              1 === b.nodeType
                                ? (b.textContent = "")
                                : 9 === b.nodeType &&
                                  b.documentElement &&
                                  b.removeChild(b.documentElement);
                              break;
                            default:
                              throw Error(ae(163));
                          }
                      } catch (_) {
                        kc(t, t.return, _);
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Xl = e);
                        break;
                      }
                      Xl = t.return;
                    }
                (p = ts), (ts = !1);
              })(e, n),
              gs(n, e),
              ha(ei),
              ($n = !!Za),
              (ei = Za = null),
              (e.current = n),
              ys(n),
              Kt(),
              (Ps = u),
              (bn = o),
              (xs.transition = i);
          } else e.current = n;
          if (
            (Ws && ((Ws = !1), (qs = e), (Ks = a)),
            0 === (i = e.pendingLanes) && (Ys = null),
            (function (e) {
              if (an && "function" == typeof an.onCommitFiberRoot)
                try {
                  an.onCommitFiberRoot(
                    rn,
                    e,
                    void 0,
                    128 == (128 & e.current.flags)
                  );
                } catch (t) {}
            })(n.stateNode),
            rc(e, Qt()),
            null !== t)
          )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
              r((a = t[n]).value, {
                componentStack: a.stack,
                digest: a.digest,
              });
          if ($s) throw (($s = !1), (e = Hs), (Hs = null), e);
          0 != (1 & Ks) && 0 !== e.tag && wc(),
            0 != (1 & (i = e.pendingLanes))
              ? e === Js
                ? Qs++
                : ((Qs = 0), (Js = e))
              : (Qs = 0),
            Ui();
        })(e, t, n, r);
    } finally {
      (xs.transition = a), (bn = r);
    }
    return null;
  }
  function wc() {
    if (null !== qs) {
      var e = _n(Ks),
        t = xs.transition,
        n = bn;
      try {
        if (((xs.transition = null), (bn = 16 > e ? 16 : e), null === qs))
          var r = !1;
        else {
          if (((e = qs), (qs = null), (Ks = 0), 0 != (6 & Ps)))
            throw Error(ae(331));
          var a = Ps;
          for (Ps |= 4, Xl = e.current; null !== Xl; ) {
            var i = Xl,
              o = i.child;
            if (0 != (16 & Xl.flags)) {
              var u = i.deletions;
              if (null !== u) {
                for (var l = 0; l < u.length; l++) {
                  var s = u[l];
                  for (Xl = s; null !== Xl; ) {
                    var c = Xl;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ns(8, c, i);
                    }
                    var f = c.child;
                    if (null !== f) (f.return = c), (Xl = f);
                    else
                      for (; null !== Xl; ) {
                        var d = (c = Xl).sibling,
                          h = c.return;
                        if ((is(c), c === s)) {
                          Xl = null;
                          break;
                        }
                        if (null !== d) {
                          (d.return = h), (Xl = d);
                          break;
                        }
                        Xl = h;
                      }
                  }
                }
                var p = i.alternate;
                if (null !== p) {
                  var m = p.child;
                  if (null !== m) {
                    p.child = null;
                    do {
                      var g = m.sibling;
                      (m.sibling = null), (m = g);
                    } while (null !== m);
                  }
                }
                Xl = i;
              }
            }
            if (0 != (2064 & i.subtreeFlags) && null !== o)
              (o.return = i), (Xl = o);
            else
              e: for (; null !== Xl; ) {
                if (0 != (2048 & (i = Xl).flags))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ns(9, i, i.return);
                  }
                var v = i.sibling;
                if (null !== v) {
                  (v.return = i.return), (Xl = v);
                  break e;
                }
                Xl = i.return;
              }
          }
          var y = e.current;
          for (Xl = y; null !== Xl; ) {
            var b = (o = Xl).child;
            if (0 != (2064 & o.subtreeFlags) && null !== b)
              (b.return = o), (Xl = b);
            else
              e: for (o = y; null !== Xl; ) {
                if (0 != (2048 & (u = Xl).flags))
                  try {
                    switch (u.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rs(9, u);
                    }
                  } catch (S) {
                    kc(u, u.return, S);
                  }
                if (u === o) {
                  Xl = null;
                  break e;
                }
                var _ = u.sibling;
                if (null !== _) {
                  (_.return = u.return), (Xl = _);
                  break e;
                }
                Xl = u.return;
              }
          }
          if (
            ((Ps = a),
            Ui(),
            an && "function" == typeof an.onPostCommitFiberRoot)
          )
            try {
              an.onPostCommitFiberRoot(rn, e);
            } catch (S) {}
          r = !0;
        }
        return r;
      } finally {
        (bn = n), (xs.transition = t);
      }
    }
    return !1;
  }
  function Tc(e, t, n) {
    (e = Oo(e, (t = hl(0, (t = sl(n, t)), 1)), 1)),
      (t = ec()),
      null !== e && (vn(e, 1, t), rc(e, t));
  }
  function kc(e, t, n) {
    if (3 === e.tag) Tc(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          Tc(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Ys || !Ys.has(r)))
          ) {
            (t = Oo(t, (e = pl(t, (e = sl(n, e)), 1)), 1)),
              (e = ec()),
              null !== t && (vn(t, 1, e), rc(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cc(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = ec()),
      (e.pingedLanes |= e.suspendedLanes & n),
      As === e &&
        (Ns & n) === n &&
        (4 === Os || (3 === Os && (130023424 & Ns) === Ns && 500 > Qt() - Us)
          ? dc(e, 0)
          : (Bs |= n)),
      rc(e, t);
  }
  function Ec(e, t) {
    0 === t &&
      (0 == (1 & e.mode)
        ? (t = 1)
        : ((t = cn), 0 == (130023424 & (cn <<= 1)) && (cn = 4194304)));
    var n = ec();
    null !== (e = Ao(e, t)) && (vn(e, t, n), rc(e, n));
  }
  function xc(e) {
    var t = e.memoizedState,
      n = 0;
    null !== t && (n = t.retryLane), Ec(e, n);
  }
  function Pc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          a = e.memoizedState;
        null !== a && (n = a.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(ae(314));
    }
    null !== r && r.delete(t), Ec(e, n);
  }
  function Ac(e, t) {
    return Yt(e, t);
  }
  function Mc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Nc(e, t, n, r) {
    return new Mc(e, t, n, r);
  }
  function Ic(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Rc(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Nc(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Oc(e, t, n, r, a, i) {
    var o = 2;
    if (((r = e), "function" == typeof e)) Ic(e) && (o = 1);
    else if ("string" == typeof e) o = 5;
    else
      e: switch (e) {
        case we:
          return Fc(n.children, a, i, t);
        case Te:
          (o = 8), (a |= 8);
          break;
        case ke:
          return ((e = Nc(12, n, t, 2 | a)).elementType = ke), (e.lanes = i), e;
        case Pe:
          return ((e = Nc(13, n, t, a)).elementType = Pe), (e.lanes = i), e;
        case Ae:
          return ((e = Nc(19, n, t, a)).elementType = Ae), (e.lanes = i), e;
        case Ie:
          return Dc(n, a, i, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case Ce:
                o = 10;
                break e;
              case Ee:
                o = 9;
                break e;
              case xe:
                o = 11;
                break e;
              case Me:
                o = 14;
                break e;
              case Ne:
                (o = 16), (r = null);
                break e;
            }
          throw Error(ae(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Nc(o, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Fc(e, t, n, r) {
    return ((e = Nc(7, e, r, t)).lanes = n), e;
  }
  function Dc(e, t, n, r) {
    return (
      ((e = Nc(22, e, r, t)).elementType = Ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Lc(e, t, n) {
    return ((e = Nc(6, e, null, t)).lanes = n), e;
  }
  function Bc(e, t, n) {
    return (
      ((t = Nc(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function jc(e, t, n, r, a) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = gn(0)),
      (this.expirationTimes = gn(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = gn(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function zc(e, t, n, r, a, i, o, u, l) {
    return (
      (e = new jc(e, t, n, u, l)),
      1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
      (i = Nc(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      No(i),
      e
    );
  }
  function Uc(e) {
    if (!e) return Ei;
    e: {
      if (Ut((e = e._reactInternals)) !== e || 1 !== e.tag)
        throw Error(ae(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ni(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(ae(171));
    }
    if (1 === e.tag) {
      var n = e.type;
      if (Ni(n)) return Oi(e, n, t);
    }
    return t;
  }
  function Gc(e, t, n, r, a, i, o, u, l) {
    return (
      ((e = zc(n, r, !0, e, 0, i, 0, u, l)).context = Uc(null)),
      (n = e.current),
      ((i = Ro((r = ec()), (a = tc(n)))).callback = null != t ? t : null),
      Oo(n, i, a),
      (e.current.lanes = a),
      vn(e, a, r),
      rc(e, r),
      e
    );
  }
  function Vc(e, t, n, r) {
    var a = t.current,
      i = ec(),
      o = tc(a);
    return (
      (n = Uc(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Ro(i, o)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Oo(a, t, o)) && (nc(e, a, o, i), Fo(e, a, o)),
      o
    );
  }
  function $c(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Hc(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Yc(e, t) {
    Hc(e, t), (e = e.alternate) && Hc(e, t);
  }
  Ts = function (e, t, n) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || Pi.current) bl = !0;
      else {
        if (0 == (e.lanes & n) && 0 == (128 & t.flags))
          return (
            (bl = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  Al(t), ho();
                  break;
                case 5:
                  iu(t);
                  break;
                case 1:
                  Ni(t.type) && Fi(t);
                  break;
                case 4:
                  ru(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    a = t.memoizedProps.value;
                  Ci(vo, r._currentValue), (r._currentValue = a);
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (Ci(uu, 1 & uu.current), (t.flags |= 128), null)
                      : 0 != (n & t.child.childLanes)
                      ? Ll(e, t, n)
                      : (Ci(uu, 1 & uu.current),
                        null !== (e = $l(e, t, n)) ? e.sibling : null);
                  Ci(uu, 1 & uu.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                    if (r) return Gl(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    Ci(uu, uu.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return (t.lanes = 0), kl(e, t, n);
              }
              return $l(e, t, n);
            })(e, t, n)
          );
        bl = 0 != (131072 & e.flags);
      }
    else (bl = !1), ro && 0 != (1048576 & t.flags) && Xi(t, Hi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Vl(e, t), (e = t.pendingProps);
        var a = Mi(t, xi.current);
        ko(t, n), (a = Tu(null, t, r, e, a, n));
        var i = ku();
        return (
          (t.flags |= 1),
          "object" == typeof a &&
          null !== a &&
          "function" == typeof a.render &&
          void 0 === a.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ni(r) ? ((i = !0), Fi(t)) : (i = !1),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              No(t),
              (a.updater = Uo),
              (t.stateNode = a),
              (a._reactInternals = t),
              Ho(t, r, e, n),
              (t = Pl(null, t, r, !0, i, n)))
            : ((t.tag = 0), ro && i && Zi(t), _l(null, t, a, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Vl(e, t),
            (e = t.pendingProps),
            (r = (a = r._init)(r._payload)),
            (t.type = r),
            (a = t.tag =
              (function (e) {
                if ("function" == typeof e) return Ic(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === xe) return 11;
                  if (e === Me) return 14;
                }
                return 2;
              })(r)),
            (e = go(r, e)),
            a)
          ) {
            case 0:
              t = El(null, t, r, e, n);
              break e;
            case 1:
              t = xl(null, t, r, e, n);
              break e;
            case 11:
              t = Sl(null, t, r, e, n);
              break e;
            case 14:
              t = wl(null, t, r, go(r.type, e), n);
              break e;
          }
          throw Error(ae(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (a = t.pendingProps),
          El(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
        );
      case 1:
        return (
          (r = t.type),
          (a = t.pendingProps),
          xl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
        );
      case 3:
        e: {
          if ((Al(t), null === e)) throw Error(ae(387));
          (r = t.pendingProps),
            (a = (i = t.memoizedState).element),
            Io(e, t),
            Lo(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), i.isDehydrated)) {
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              256 & t.flags)
            ) {
              t = Ml(e, t, r, n, (a = sl(Error(ae(423)), t)));
              break e;
            }
            if (r !== a) {
              t = Ml(e, t, r, n, (a = sl(Error(ae(424)), t)));
              break e;
            }
            for (
              no = li(t.stateNode.containerInfo.firstChild),
                to = t,
                ro = !0,
                ao = null,
                n = Jo(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
          } else {
            if ((ho(), r === a)) {
              t = $l(e, t, n);
              break e;
            }
            _l(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          iu(t),
          null === e && lo(t),
          (r = t.type),
          (a = t.pendingProps),
          (i = null !== e ? e.memoizedProps : null),
          (o = a.children),
          ti(r, a) ? (o = null) : null !== i && ti(r, i) && (t.flags |= 32),
          Cl(e, t),
          _l(e, t, o, n),
          t.child
        );
      case 6:
        return null === e && lo(t), null;
      case 13:
        return Ll(e, t, n);
      case 4:
        return (
          ru(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          null === e ? (t.child = Qo(t, null, r, n)) : _l(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (a = t.pendingProps),
          Sl(e, t, r, (a = t.elementType === r ? a : go(r, a)), n)
        );
      case 7:
        return _l(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return _l(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (a = t.pendingProps),
            (i = t.memoizedProps),
            (o = a.value),
            Ci(vo, r._currentValue),
            (r._currentValue = o),
            null !== i)
          )
            if (oa(i.value, o)) {
              if (i.children === a.children && !Pi.current) {
                t = $l(e, t, n);
                break e;
              }
            } else
              for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                var u = i.dependencies;
                if (null !== u) {
                  o = i.child;
                  for (var l = u.firstContext; null !== l; ) {
                    if (l.context === r) {
                      if (1 === i.tag) {
                        (l = Ro(-1, n & -n)).tag = 2;
                        var s = i.updateQueue;
                        if (null !== s) {
                          var c = (s = s.shared).pending;
                          null === c
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
                            (s.pending = l);
                        }
                      }
                      (i.lanes |= n),
                        null !== (l = i.alternate) && (l.lanes |= n),
                        To(i.return, n, t),
                        (u.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (10 === i.tag) o = i.type === t.type ? null : i.child;
                else if (18 === i.tag) {
                  if (null === (o = i.return)) throw Error(ae(341));
                  (o.lanes |= n),
                    null !== (u = o.alternate) && (u.lanes |= n),
                    To(o, n, t),
                    (o = i.sibling);
                } else o = i.child;
                if (null !== o) o.return = i;
                else
                  for (o = i; null !== o; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (null !== (i = o.sibling)) {
                      (i.return = o.return), (o = i);
                      break;
                    }
                    o = o.return;
                  }
                i = o;
              }
          _l(e, t, a.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (r = t.pendingProps.children),
          ko(t, n),
          (r = r((a = Co(a)))),
          (t.flags |= 1),
          _l(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (a = go((r = t.type), t.pendingProps)),
          wl(e, t, r, (a = go(r.type, a)), n)
        );
      case 15:
        return Tl(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (a = t.pendingProps),
          (a = t.elementType === r ? a : go(r, a)),
          Vl(e, t),
          (t.tag = 1),
          Ni(r) ? ((e = !0), Fi(t)) : (e = !1),
          ko(t, n),
          Vo(t, r, a),
          Ho(t, r, a, n),
          Pl(null, t, r, !0, e, n)
        );
      case 19:
        return Gl(e, t, n);
      case 22:
        return kl(e, t, n);
    }
    throw Error(ae(156, t.tag));
  };
  var Wc =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          console.error(e);
        };
  function qc(e) {
    this._internalRoot = e;
  }
  function Kc(e) {
    this._internalRoot = e;
  }
  function Qc(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Jc(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Xc() {}
  function Zc(e, t, n, r, a) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i;
      if ("function" == typeof a) {
        var u = a;
        a = function () {
          var e = $c(o);
          u.call(e);
        };
      }
      Vc(t, o, e, a);
    } else
      o = (function (e, t, n, r, a) {
        if (a) {
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = $c(o);
              i.call(e);
            };
          }
          var o = Gc(t, r, e, 0, null, !1, 0, "", Xc);
          return (
            (e._reactRootContainer = o),
            (e[hi] = o.current),
            Ua(8 === e.nodeType ? e.parentNode : e),
            cc(),
            o
          );
        }
        for (; (a = e.lastChild); ) e.removeChild(a);
        if ("function" == typeof r) {
          var u = r;
          r = function () {
            var e = $c(l);
            u.call(e);
          };
        }
        var l = zc(e, 0, !1, null, 0, !1, 0, "", Xc);
        return (
          (e._reactRootContainer = l),
          (e[hi] = l.current),
          Ua(8 === e.nodeType ? e.parentNode : e),
          cc(function () {
            Vc(t, l, n, r);
          }),
          l
        );
      })(n, t, e, a, r);
    return $c(o);
  }
  (Kc.prototype.render = qc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(ae(409));
      Vc(e, t, null, null);
    }),
    (Kc.prototype.unmount = qc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          cc(function () {
            Vc(null, e, null, null);
          }),
            (t[hi] = null);
        }
      }),
    (Kc.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = kn();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Rn.length && 0 !== t && t < Rn[n].priority; n++);
        Rn.splice(n, 0, e), 0 === n && Ln(e);
      }
    }),
    (Sn = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = fn(t.pendingLanes);
            0 !== n &&
              (yn(t, 1 | n),
              rc(t, Qt()),
              0 == (6 & Ps) && ((Gs = Qt() + 500), Ui()));
          }
          break;
        case 13:
          cc(function () {
            var t = Ao(e, 1);
            if (null !== t) {
              var n = ec();
              nc(t, e, 1, n);
            }
          }),
            Yc(e, 1);
      }
    }),
    (wn = function (e) {
      if (13 === e.tag) {
        var t = Ao(e, 134217728);
        null !== t && nc(t, e, 134217728, ec()), Yc(e, 134217728);
      }
    }),
    (Tn = function (e) {
      if (13 === e.tag) {
        var t = tc(e),
          n = Ao(e, t);
        null !== n && nc(n, e, t, ec()), Yc(e, t);
      }
    }),
    (kn = function () {
      return bn;
    }),
    (Cn = function (e, t) {
      var n = bn;
      try {
        return (bn = e), t();
      } finally {
        bn = n;
      }
    }),
    (St = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Je(e, n), (t = n.name), "radio" === n.type && null != t)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var a = _i(r);
                if (!a) throw Error(ae(90));
                Ye(r), Je(r, a);
              }
            }
          }
          break;
        case "textarea":
          at(e, n);
          break;
        case "select":
          null != (t = n.value) && tt(e, !!n.multiple, t, !1);
      }
    }),
    (xt = sc),
    (Pt = cc);
  var ef = { usingClientEntryPoint: !1, Events: [yi, bi, _i, Ct, Et, sc] },
    tf = {
      findFiberByHostInstance: vi,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    nf = {
      bundleType: tf.bundleType,
      version: tf.version,
      rendererPackageName: tf.rendererPackageName,
      rendererConfig: tf.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: be.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = $t(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
        tf.findFiberByHostInstance ||
        function () {
          return null;
        },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var rf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!rf.isDisabled && rf.supportsFiber)
      try {
        (rn = rf.inject(nf)), (an = rf);
      } catch (Ub) {}
  }
  (X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ef),
    (X.createPortal = function (e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Qc(t)) throw Error(ae(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: Se,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, n);
    }),
    (X.createRoot = function (e, t) {
      if (!Qc(e)) throw Error(ae(299));
      var n = !1,
        r = "",
        a = Wc;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
        (t = zc(e, 1, !1, null, 0, n, 0, r, a)),
        (e[hi] = t.current),
        Ua(8 === e.nodeType ? e.parentNode : e),
        new qc(t)
      );
    }),
    (X.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(ae(188));
        throw ((e = Object.keys(e).join(",")), Error(ae(268, e)));
      }
      return null === (e = $t(t)) ? null : e.stateNode;
    }),
    (X.flushSync = function (e) {
      return cc(e);
    }),
    (X.hydrate = function (e, t, n) {
      if (!Jc(t)) throw Error(ae(200));
      return Zc(null, e, t, !0, n);
    }),
    (X.hydrateRoot = function (e, t, n) {
      if (!Qc(e)) throw Error(ae(405));
      var r = (null != n && n.hydratedSources) || null,
        a = !1,
        i = "",
        o = Wc;
      if (
        (null != n &&
          (!0 === n.unstable_strictMode && (a = !0),
          void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
          void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
        (t = Gc(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
        (e[hi] = t.current),
        Ua(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (a = (a = (n = r[e])._getVersion)(n._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [n, a])
              : t.mutableSourceEagerHydrationData.push(n, a);
      return new Kc(t);
    }),
    (X.render = function (e, t, n) {
      if (!Jc(t)) throw Error(ae(200));
      return Zc(null, e, t, !1, n);
    }),
    (X.unmountComponentAtNode = function (e) {
      if (!Jc(e)) throw Error(ae(40));
      return (
        !!e._reactRootContainer &&
        (cc(function () {
          Zc(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[hi] = null);
          });
        }),
        !0)
      );
    }),
    (X.unstable_batchedUpdates = sc),
    (X.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Jc(n)) throw Error(ae(200));
      if (null == e || void 0 === e._reactInternals) throw Error(ae(38));
      return Zc(e, t, n, !1, r);
    }),
    (X.version = "18.2.0-next-9e3b772b8-20220608"),
    (function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (t) {
          console.error(t);
        }
    })(),
    (J.exports = X);
  const af = r(J.exports);
  var of,
    uf = { exports: {} },
    lf = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    },
    sf = lf,
    cf = Object.prototype.toString,
    ff =
      ((of = Object.create(null)),
      function (e) {
        var t = cf.call(e);
        return of[t] || (of[t] = t.slice(8, -1).toLowerCase());
      });
  function df(e) {
    return (
      (e = e.toLowerCase()),
      function (t) {
        return ff(t) === e;
      }
    );
  }
  function hf(e) {
    return Array.isArray(e);
  }
  function pf(e) {
    return void 0 === e;
  }
  var mf = df("ArrayBuffer");
  function gf(e) {
    return null !== e && "object" == typeof e;
  }
  function vf(e) {
    if ("object" !== ff(e)) return !1;
    var t = Object.getPrototypeOf(e);
    return null === t || t === Object.prototype;
  }
  var yf = df("Date"),
    bf = df("File"),
    _f = df("Blob"),
    Sf = df("FileList");
  function wf(e) {
    return "[object Function]" === cf.call(e);
  }
  var Tf = df("URLSearchParams");
  function kf(e, t) {
    if (null != e)
      if (("object" != typeof e && (e = [e]), hf(e)))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
      else
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            t.call(null, e[a], a, e);
  }
  var Cf,
    Ef =
      ((Cf =
        "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array)),
      function (e) {
        return Cf && e instanceof Cf;
      }),
    xf = {
      isArray: hf,
      isArrayBuffer: mf,
      isBuffer: function (e) {
        return (
          null !== e &&
          !pf(e) &&
          null !== e.constructor &&
          !pf(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        var t = "[object FormData]";
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            cf.call(e) === t ||
            (wf(e.toString) && e.toString() === t))
        );
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && mf(e.buffer);
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: gf,
      isPlainObject: vf,
      isUndefined: pf,
      isDate: yf,
      isFile: bf,
      isBlob: _f,
      isFunction: wf,
      isStream: function (e) {
        return gf(e) && wf(e.pipe);
      },
      isURLSearchParams: Tf,
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: kf,
      merge: function e() {
        var t = {};
        function n(n, r) {
          vf(t[r]) && vf(n)
            ? (t[r] = e(t[r], n))
            : vf(n)
            ? (t[r] = e({}, n))
            : hf(n)
            ? (t[r] = n.slice())
            : (t[r] = n);
        }
        for (var r = 0, a = arguments.length; r < a; r++) kf(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          kf(t, function (t, r) {
            e[r] = n && "function" == typeof t ? sf(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
      },
      inherits: function (e, t, n, r) {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: function (e, t, n) {
        var r,
          a,
          i,
          o = {};
        t = t || {};
        do {
          for (a = (r = Object.getOwnPropertyNames(e)).length; a-- > 0; )
            o[(i = r[a])] || ((t[i] = e[i]), (o[i] = !0));
          e = Object.getPrototypeOf(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: ff,
      kindOfTest: df,
      endsWith: function (e, t, n) {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        var r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: function (e) {
        if (!e) return null;
        var t = e.length;
        if (pf(t)) return null;
        for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
        return n;
      },
      isTypedArray: Ef,
      isFileList: Sf,
    },
    Pf = xf;
  function Af(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var Mf = function (e, t, n) {
      if (!t) return e;
      var r;
      if (n) r = n(t);
      else if (Pf.isURLSearchParams(t)) r = t.toString();
      else {
        var a = [];
        Pf.forEach(t, function (e, t) {
          null != e &&
            (Pf.isArray(e) ? (t += "[]") : (e = [e]),
            Pf.forEach(e, function (e) {
              Pf.isDate(e)
                ? (e = e.toISOString())
                : Pf.isObject(e) && (e = JSON.stringify(e)),
                a.push(Af(t) + "=" + Af(e));
            }));
        }),
          (r = a.join("&"));
      }
      if (r) {
        var i = e.indexOf("#");
        -1 !== i && (e = e.slice(0, i)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
      }
      return e;
    },
    Nf = xf;
  function If() {
    this.handlers = [];
  }
  (If.prototype.use = function (e, t, n) {
    return (
      this.handlers.push({
        fulfilled: e,
        rejected: t,
        synchronous: !!n && n.synchronous,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }),
    (If.prototype.eject = function (e) {
      this.handlers[e] && (this.handlers[e] = null);
    }),
    (If.prototype.forEach = function (e) {
      Nf.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    });
  var Rf = If,
    Of = xf,
    Ff = xf;
  function Df(e, t, n, r, a) {
    Error.call(this),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      a && (this.response = a);
  }
  Ff.inherits(Df, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var Lf = Df.prototype,
    Bf = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
  ].forEach(function (e) {
    Bf[e] = { value: e };
  }),
    Object.defineProperties(Df, Bf),
    Object.defineProperty(Lf, "isAxiosError", { value: !0 }),
    (Df.from = function (e, t, n, r, a, i) {
      var o = Object.create(Lf);
      return (
        Ff.toFlatObject(e, o, function (e) {
          return e !== Error.prototype;
        }),
        Df.call(o, e.message, t, n, r, a),
        (o.name = e.name),
        i && Object.assign(o, i),
        o
      );
    });
  var jf,
    zf,
    Uf,
    Gf,
    Vf = Df,
    $f = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Hf = xf,
    Yf = function (e, t) {
      t = t || new FormData();
      var n = [];
      function r(e) {
        return null === e
          ? ""
          : Hf.isDate(e)
          ? e.toISOString()
          : Hf.isArrayBuffer(e) || Hf.isTypedArray(e)
          ? "function" == typeof Blob
            ? new Blob([e])
            : Buffer.from(e)
          : e;
      }
      return (
        (function e(a, i) {
          if (Hf.isPlainObject(a) || Hf.isArray(a)) {
            if (-1 !== n.indexOf(a))
              throw Error("Circular reference detected in " + i);
            n.push(a),
              Hf.forEach(a, function (n, a) {
                if (!Hf.isUndefined(n)) {
                  var o,
                    u = i ? i + "." + a : a;
                  if (n && !i && "object" == typeof n)
                    if (Hf.endsWith(a, "{}")) n = JSON.stringify(n);
                    else if (Hf.endsWith(a, "[]") && (o = Hf.toArray(n)))
                      return void o.forEach(function (e) {
                        !Hf.isUndefined(e) && t.append(u, r(e));
                      });
                  e(n, u);
                }
              }),
              n.pop();
          } else t.append(i, r(a));
        })(e),
        t
      );
    };
  var Wf,
    qf,
    Kf,
    Qf,
    Jf,
    Xf,
    Zf,
    ed,
    td,
    nd,
    rd,
    ad,
    id = function (e, t) {
      return e &&
        !(function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        })(t)
        ? (function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          })(e, t)
        : t;
    };
  function od() {
    if (Xf) return Jf;
    Xf = 1;
    var e = Vf;
    function t(t) {
      e.call(this, null == t ? "canceled" : t, e.ERR_CANCELED),
        (this.name = "CanceledError");
    }
    return xf.inherits(t, e, { __CANCEL__: !0 }), (Jf = t);
  }
  var ud = xf,
    ld = function (e, t) {
      Of.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    },
    sd = Vf,
    cd = Yf,
    fd = { "Content-Type": "application/x-www-form-urlencoded" };
  function dd(e, t) {
    !ud.isUndefined(e) &&
      ud.isUndefined(e["Content-Type"]) &&
      (e["Content-Type"] = t);
  }
  var hd,
    pd = {
      transitional: $f,
      adapter:
        (("undefined" != typeof XMLHttpRequest ||
          ("undefined" != typeof process &&
            "[object process]" === Object.prototype.toString.call(process))) &&
          (hd = (function () {
            if (nd) return td;
            nd = 1;
            var e = xf,
              t = (function () {
                if (zf) return jf;
                zf = 1;
                var e = Vf;
                return (jf = function (t, n, r) {
                  var a = r.config.validateStatus;
                  r.status && a && !a(r.status)
                    ? n(
                        new e(
                          "Request failed with status code " + r.status,
                          [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                            Math.floor(r.status / 100) - 4
                          ],
                          r.config,
                          r.request,
                          r
                        )
                      )
                    : t(r);
                });
              })(),
              n = (function () {
                if (Gf) return Uf;
                Gf = 1;
                var e = xf;
                return (Uf = e.isStandardBrowserEnv()
                  ? {
                      write: function (t, n, r, a, i, o) {
                        var u = [];
                        u.push(t + "=" + encodeURIComponent(n)),
                          e.isNumber(r) &&
                            u.push("expires=" + new Date(r).toGMTString()),
                          e.isString(a) && u.push("path=" + a),
                          e.isString(i) && u.push("domain=" + i),
                          !0 === o && u.push("secure"),
                          (document.cookie = u.join("; "));
                      },
                      read: function (e) {
                        var t = document.cookie.match(
                          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                        );
                        return t ? decodeURIComponent(t[3]) : null;
                      },
                      remove: function (e) {
                        this.write(e, "", Date.now() - 864e5);
                      },
                    }
                  : {
                      write: function () {},
                      read: function () {
                        return null;
                      },
                      remove: function () {},
                    });
              })(),
              r = Mf,
              a = id,
              i = (function () {
                if (qf) return Wf;
                qf = 1;
                var e = xf,
                  t = [
                    "age",
                    "authorization",
                    "content-length",
                    "content-type",
                    "etag",
                    "expires",
                    "from",
                    "host",
                    "if-modified-since",
                    "if-unmodified-since",
                    "last-modified",
                    "location",
                    "max-forwards",
                    "proxy-authorization",
                    "referer",
                    "retry-after",
                    "user-agent",
                  ];
                return (Wf = function (n) {
                  var r,
                    a,
                    i,
                    o = {};
                  return n
                    ? (e.forEach(n.split("\n"), function (n) {
                        if (
                          ((i = n.indexOf(":")),
                          (r = e.trim(n.substr(0, i)).toLowerCase()),
                          (a = e.trim(n.substr(i + 1))),
                          r)
                        ) {
                          if (o[r] && t.indexOf(r) >= 0) return;
                          o[r] =
                            "set-cookie" === r
                              ? (o[r] ? o[r] : []).concat([a])
                              : o[r]
                              ? o[r] + ", " + a
                              : a;
                        }
                      }),
                      o)
                    : o;
                });
              })(),
              o = (function () {
                if (Qf) return Kf;
                Qf = 1;
                var e = xf;
                return (Kf = e.isStandardBrowserEnv()
                  ? (function () {
                      var t,
                        n = /(msie|trident)/i.test(navigator.userAgent),
                        r = document.createElement("a");
                      function a(e) {
                        var t = e;
                        return (
                          n && (r.setAttribute("href", t), (t = r.href)),
                          r.setAttribute("href", t),
                          {
                            href: r.href,
                            protocol: r.protocol
                              ? r.protocol.replace(/:$/, "")
                              : "",
                            host: r.host,
                            search: r.search ? r.search.replace(/^\?/, "") : "",
                            hash: r.hash ? r.hash.replace(/^#/, "") : "",
                            hostname: r.hostname,
                            port: r.port,
                            pathname:
                              "/" === r.pathname.charAt(0)
                                ? r.pathname
                                : "/" + r.pathname,
                          }
                        );
                      }
                      return (
                        (t = a(window.location.href)),
                        function (n) {
                          var r = e.isString(n) ? a(n) : n;
                          return r.protocol === t.protocol && r.host === t.host;
                        }
                      );
                    })()
                  : function () {
                      return !0;
                    });
              })(),
              u = $f,
              l = Vf,
              s = od(),
              c = ed
                ? Zf
                : ((ed = 1),
                  (Zf = function (e) {
                    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return (t && t[1]) || "";
                  }));
            return (td = function (f) {
              return new Promise(function (d, h) {
                var p,
                  m = f.data,
                  g = f.headers,
                  v = f.responseType;
                function y() {
                  f.cancelToken && f.cancelToken.unsubscribe(p),
                    f.signal && f.signal.removeEventListener("abort", p);
                }
                e.isFormData(m) &&
                  e.isStandardBrowserEnv() &&
                  delete g["Content-Type"];
                var b = new XMLHttpRequest();
                if (f.auth) {
                  var _ = f.auth.username || "",
                    S = f.auth.password
                      ? unescape(encodeURIComponent(f.auth.password))
                      : "";
                  g.Authorization = "Basic " + btoa(_ + ":" + S);
                }
                var w = a(f.baseURL, f.url);
                function T() {
                  if (b) {
                    var e =
                        "getAllResponseHeaders" in b
                          ? i(b.getAllResponseHeaders())
                          : null,
                      n = {
                        data:
                          v && "text" !== v && "json" !== v
                            ? b.response
                            : b.responseText,
                        status: b.status,
                        statusText: b.statusText,
                        headers: e,
                        config: f,
                        request: b,
                      };
                    t(
                      function (e) {
                        d(e), y();
                      },
                      function (e) {
                        h(e), y();
                      },
                      n
                    ),
                      (b = null);
                  }
                }
                if (
                  (b.open(
                    f.method.toUpperCase(),
                    r(w, f.params, f.paramsSerializer),
                    !0
                  ),
                  (b.timeout = f.timeout),
                  "onloadend" in b
                    ? (b.onloadend = T)
                    : (b.onreadystatechange = function () {
                        b &&
                          4 === b.readyState &&
                          (0 !== b.status ||
                            (b.responseURL &&
                              0 === b.responseURL.indexOf("file:"))) &&
                          setTimeout(T);
                      }),
                  (b.onabort = function () {
                    b &&
                      (h(new l("Request aborted", l.ECONNABORTED, f, b)),
                      (b = null));
                  }),
                  (b.onerror = function () {
                    h(new l("Network Error", l.ERR_NETWORK, f, b, b)),
                      (b = null);
                  }),
                  (b.ontimeout = function () {
                    var e = f.timeout
                        ? "timeout of " + f.timeout + "ms exceeded"
                        : "timeout exceeded",
                      t = f.transitional || u;
                    f.timeoutErrorMessage && (e = f.timeoutErrorMessage),
                      h(
                        new l(
                          e,
                          t.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
                          f,
                          b
                        )
                      ),
                      (b = null);
                  }),
                  e.isStandardBrowserEnv())
                ) {
                  var k =
                    (f.withCredentials || o(w)) && f.xsrfCookieName
                      ? n.read(f.xsrfCookieName)
                      : void 0;
                  k && (g[f.xsrfHeaderName] = k);
                }
                "setRequestHeader" in b &&
                  e.forEach(g, function (e, t) {
                    void 0 === m && "content-type" === t.toLowerCase()
                      ? delete g[t]
                      : b.setRequestHeader(t, e);
                  }),
                  e.isUndefined(f.withCredentials) ||
                    (b.withCredentials = !!f.withCredentials),
                  v && "json" !== v && (b.responseType = f.responseType),
                  "function" == typeof f.onDownloadProgress &&
                    b.addEventListener("progress", f.onDownloadProgress),
                  "function" == typeof f.onUploadProgress &&
                    b.upload &&
                    b.upload.addEventListener("progress", f.onUploadProgress),
                  (f.cancelToken || f.signal) &&
                    ((p = function (e) {
                      b &&
                        (h(!e || (e && e.type) ? new s() : e),
                        b.abort(),
                        (b = null));
                    }),
                    f.cancelToken && f.cancelToken.subscribe(p),
                    f.signal &&
                      (f.signal.aborted
                        ? p()
                        : f.signal.addEventListener("abort", p))),
                  m || (m = null);
                var C = c(w);
                C && -1 === ["http", "https", "file"].indexOf(C)
                  ? h(
                      new l(
                        "Unsupported protocol " + C + ":",
                        l.ERR_BAD_REQUEST,
                        f
                      )
                    )
                  : b.send(m);
              });
            });
          })()),
        hd),
      transformRequest: [
        function (e, t) {
          if (
            (ld(t, "Accept"),
            ld(t, "Content-Type"),
            ud.isFormData(e) ||
              ud.isArrayBuffer(e) ||
              ud.isBuffer(e) ||
              ud.isStream(e) ||
              ud.isFile(e) ||
              ud.isBlob(e))
          )
            return e;
          if (ud.isArrayBufferView(e)) return e.buffer;
          if (ud.isURLSearchParams(e))
            return (
              dd(t, "application/x-www-form-urlencoded;charset=utf-8"),
              e.toString()
            );
          var n,
            r = ud.isObject(e),
            a = t && t["Content-Type"];
          if ((n = ud.isFileList(e)) || (r && "multipart/form-data" === a)) {
            var i = this.env && this.env.FormData;
            return cd(n ? { "files[]": e } : e, i && new i());
          }
          return r || "application/json" === a
            ? (dd(t, "application/json"),
              (function (e, t, n) {
                if (ud.isString(e))
                  try {
                    return (0, JSON.parse)(e), ud.trim(e);
                  } catch (r) {
                    if ("SyntaxError" !== r.name) throw r;
                  }
                return (0, JSON.stringify)(e);
              })(e))
            : e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || pd.transitional,
            n = t && t.silentJSONParsing,
            r = t && t.forcedJSONParsing,
            a = !n && "json" === this.responseType;
          if (a || (r && ud.isString(e) && e.length))
            try {
              return JSON.parse(e);
            } catch (i) {
              if (a) {
                if ("SyntaxError" === i.name)
                  throw sd.from(
                    i,
                    sd.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw i;
              }
            }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: ad ? rd : ((ad = 1), (rd = null)) },
      validateStatus: function (e) {
        return e >= 200 && e < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
  ud.forEach(["delete", "get", "head"], function (e) {
    pd.headers[e] = {};
  }),
    ud.forEach(["post", "put", "patch"], function (e) {
      pd.headers[e] = ud.merge(fd);
    });
  var md,
    gd,
    vd = pd,
    yd = xf,
    bd = vd;
  function _d() {
    return gd
      ? md
      : ((gd = 1),
        (md = function (e) {
          return !(!e || !e.__CANCEL__);
        }));
  }
  var Sd = xf,
    wd = function (e, t, n) {
      var r = this || bd;
      return (
        yd.forEach(n, function (n) {
          e = n.call(r, e, t);
        }),
        e
      );
    },
    Td = _d(),
    kd = vd,
    Cd = od();
  function Ed(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new Cd();
  }
  var xd,
    Pd,
    Ad = xf,
    Md = function (e, t) {
      t = t || {};
      var n = {};
      function r(e, t) {
        return Ad.isPlainObject(e) && Ad.isPlainObject(t)
          ? Ad.merge(e, t)
          : Ad.isPlainObject(t)
          ? Ad.merge({}, t)
          : Ad.isArray(t)
          ? t.slice()
          : t;
      }
      function a(n) {
        return Ad.isUndefined(t[n])
          ? Ad.isUndefined(e[n])
            ? void 0
            : r(void 0, e[n])
          : r(e[n], t[n]);
      }
      function i(e) {
        if (!Ad.isUndefined(t[e])) return r(void 0, t[e]);
      }
      function o(n) {
        return Ad.isUndefined(t[n])
          ? Ad.isUndefined(e[n])
            ? void 0
            : r(void 0, e[n])
          : r(void 0, t[n]);
      }
      function u(n) {
        return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0;
      }
      var l = {
        url: i,
        method: i,
        data: i,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: u,
      };
      return (
        Ad.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = l[e] || a,
            r = t(e);
          (Ad.isUndefined(r) && t !== u) || (n[e] = r);
        }),
        n
      );
    };
  function Nd() {
    return Pd ? xd : ((Pd = 1), (xd = { version: "0.27.2" }));
  }
  var Id = Nd().version,
    Rd = Vf,
    Od = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (e, t) {
      Od[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  var Fd = {};
  Od.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v" +
        Id +
        "] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return function (n, a, i) {
      if (!1 === e)
        throw new Rd(
          r(a, " has been removed" + (t ? " in " + t : "")),
          Rd.ERR_DEPRECATED
        );
      return (
        t &&
          !Fd[a] &&
          ((Fd[a] = !0),
          console.warn(
            r(
              a,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, a, i)
      );
    };
  };
  var Dd,
    Ld,
    Bd,
    jd,
    zd,
    Ud,
    Gd = {
      assertOptions: function (e, t, n) {
        if ("object" != typeof e)
          throw new Rd("options must be an object", Rd.ERR_BAD_OPTION_VALUE);
        for (var r = Object.keys(e), a = r.length; a-- > 0; ) {
          var i = r[a],
            o = t[i];
          if (o) {
            var u = e[i],
              l = void 0 === u || o(u, i, e);
            if (!0 !== l)
              throw new Rd(
                "option " + i + " must be " + l,
                Rd.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new Rd("Unknown option " + i, Rd.ERR_BAD_OPTION);
        }
      },
      validators: Od,
    },
    Vd = xf,
    $d = Mf,
    Hd = Rf,
    Yd = function (e) {
      return (
        Ed(e),
        (e.headers = e.headers || {}),
        (e.data = wd.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = Sd.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        Sd.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || kd.adapter)(e).then(
          function (t) {
            return (
              Ed(e),
              (t.data = wd.call(e, t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              Td(t) ||
                (Ed(e),
                t &&
                  t.response &&
                  (t.response.data = wd.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    },
    Wd = Md,
    qd = id,
    Kd = Gd,
    Qd = Kd.validators;
  function Jd(e) {
    (this.defaults = e),
      (this.interceptors = { request: new Hd(), response: new Hd() });
  }
  (Jd.prototype.request = function (e, t) {
    "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
      (t = Wd(this.defaults, t)).method
        ? (t.method = t.method.toLowerCase())
        : this.defaults.method
        ? (t.method = this.defaults.method.toLowerCase())
        : (t.method = "get");
    var n = t.transitional;
    void 0 !== n &&
      Kd.assertOptions(
        n,
        {
          silentJSONParsing: Qd.transitional(Qd.boolean),
          forcedJSONParsing: Qd.transitional(Qd.boolean),
          clarifyTimeoutError: Qd.transitional(Qd.boolean),
        },
        !1
      );
    var r = [],
      a = !0;
    this.interceptors.request.forEach(function (e) {
      ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
        ((a = a && e.synchronous), r.unshift(e.fulfilled, e.rejected));
    });
    var i,
      o = [];
    if (
      (this.interceptors.response.forEach(function (e) {
        o.push(e.fulfilled, e.rejected);
      }),
      !a)
    ) {
      var u = [Yd, void 0];
      for (
        Array.prototype.unshift.apply(u, r),
          u = u.concat(o),
          i = Promise.resolve(t);
        u.length;

      )
        i = i.then(u.shift(), u.shift());
      return i;
    }
    for (var l = t; r.length; ) {
      var s = r.shift(),
        c = r.shift();
      try {
        l = s(l);
      } catch (f) {
        c(f);
        break;
      }
    }
    try {
      i = Yd(l);
    } catch (f) {
      return Promise.reject(f);
    }
    for (; o.length; ) i = i.then(o.shift(), o.shift());
    return i;
  }),
    (Jd.prototype.getUri = function (e) {
      e = Wd(this.defaults, e);
      var t = qd(e.baseURL, e.url);
      return $d(t, e.params, e.paramsSerializer);
    }),
    Vd.forEach(["delete", "get", "head", "options"], function (e) {
      Jd.prototype[e] = function (t, n) {
        return this.request(
          Wd(n || {}, { method: e, url: t, data: (n || {}).data })
        );
      };
    }),
    Vd.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, a) {
          return this.request(
            Wd(a || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (Jd.prototype[e] = t()), (Jd.prototype[e + "Form"] = t(!0));
    });
  var Xd = xf,
    Zd = lf,
    eh = Jd,
    th = Md,
    nh = (function e(t) {
      var n = new eh(t),
        r = Zd(eh.prototype.request, n);
      return (
        Xd.extend(r, eh.prototype, n),
        Xd.extend(r, n),
        (r.create = function (n) {
          return e(th(t, n));
        }),
        r
      );
    })(vd);
  (nh.Axios = eh),
    (nh.CanceledError = od()),
    (nh.CancelToken = (function () {
      if (Ld) return Dd;
      Ld = 1;
      var e = od();
      function t(t) {
        if ("function" != typeof t)
          throw new TypeError("executor must be a function.");
        var n;
        this.promise = new Promise(function (e) {
          n = e;
        });
        var r = this;
        this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                r.subscribe(e), (t = e);
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          t(function (t) {
            r.reason || ((r.reason = new e(t)), n(r.reason));
          });
      }
      return (
        (t.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
        (t.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }),
        (t.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
        }),
        (t.source = function () {
          var e;
          return {
            token: new t(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (Dd = t)
      );
    })()),
    (nh.isCancel = _d()),
    (nh.VERSION = Nd().version),
    (nh.toFormData = Yf),
    (nh.AxiosError = Vf),
    (nh.Cancel = nh.CanceledError),
    (nh.all = function (e) {
      return Promise.all(e);
    }),
    (nh.spread = jd
      ? Bd
      : ((jd = 1),
        (Bd = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }))),
    (nh.isAxiosError = (function () {
      if (Ud) return zd;
      Ud = 1;
      var e = xf;
      return (zd = function (t) {
        return e.isObject(t) && !0 === t.isAxiosError;
      });
    })()),
    (uf.exports = nh),
    (uf.exports.default = nh);
  const rh = r(uf.exports);
  var ah,
    ih,
    oh,
    uh,
    lh,
    sh = {},
    ch = {},
    fh = {},
    dh = {},
    hh = {};
  var ph =
      "undefined" != typeof JSON
        ? JSON
        : (lh ||
            ((lh = 1),
            (hh.parse = (function () {
              if (ih) return ah;
              var e, t;
              ih = 1;
              var n,
                r = {
                  '"': '"',
                  "\\": "\\",
                  "/": "/",
                  b: "\b",
                  f: "\f",
                  n: "\n",
                  r: "\r",
                  t: "\t",
                };
              function a(t) {
                throw { name: "SyntaxError", message: t, at: e, text: n };
              }
              function i(r) {
                return (
                  r &&
                    r !== t &&
                    a("Expected '" + r + "' instead of '" + t + "'"),
                  (t = n.charAt(e)),
                  (e += 1),
                  t
                );
              }
              function o() {
                var e,
                  n = "";
                for ("-" === t && ((n = "-"), i("-")); t >= "0" && t <= "9"; )
                  (n += t), i();
                if ("." === t)
                  for (n += "."; i() && t >= "0" && t <= "9"; ) n += t;
                if ("e" === t || "E" === t)
                  for (
                    n += t, i(), ("-" !== t && "+" !== t) || ((n += t), i());
                    t >= "0" && t <= "9";

                  )
                    (n += t), i();
                return (e = Number(n)), isFinite(e) || a("Bad number"), e;
              }
              function u() {
                var e,
                  n,
                  o,
                  u = "";
                if ('"' === t)
                  for (; i(); ) {
                    if ('"' === t) return i(), u;
                    if ("\\" === t)
                      if ((i(), "u" === t)) {
                        for (
                          o = 0, n = 0;
                          n < 4 && ((e = parseInt(i(), 16)), isFinite(e));
                          n += 1
                        )
                          o = 16 * o + e;
                        u += String.fromCharCode(o);
                      } else {
                        if ("string" != typeof r[t]) break;
                        u += r[t];
                      }
                    else u += t;
                  }
                a("Bad string");
              }
              function l() {
                for (; t && t <= " "; ) i();
              }
              function s() {
                switch ((l(), t)) {
                  case "{":
                    return (function () {
                      var e,
                        n = {};
                      if ("{" === t) {
                        if ((i("{"), l(), "}" === t)) return i("}"), n;
                        for (; t; ) {
                          if (
                            ((e = u()),
                            l(),
                            i(":"),
                            Object.prototype.hasOwnProperty.call(n, e) &&
                              a('Duplicate key "' + e + '"'),
                            (n[e] = s()),
                            l(),
                            "}" === t)
                          )
                            return i("}"), n;
                          i(","), l();
                        }
                      }
                      a("Bad object");
                    })();
                  case "[":
                    return (function () {
                      var e = [];
                      if ("[" === t) {
                        if ((i("["), l(), "]" === t)) return i("]"), e;
                        for (; t; ) {
                          if ((e.push(s()), l(), "]" === t)) return i("]"), e;
                          i(","), l();
                        }
                      }
                      a("Bad array");
                    })();
                  case '"':
                    return u();
                  case "-":
                    return o();
                  default:
                    return t >= "0" && t <= "9"
                      ? o()
                      : (function () {
                          switch (t) {
                            case "t":
                              return i("t"), i("r"), i("u"), i("e"), !0;
                            case "f":
                              return i("f"), i("a"), i("l"), i("s"), i("e"), !1;
                            case "n":
                              return i("n"), i("u"), i("l"), i("l"), null;
                            default:
                              a("Unexpected '" + t + "'");
                          }
                        })();
                }
              }
              return (ah = function (r, i) {
                var o;
                return (
                  (n = r),
                  (e = 0),
                  (t = " "),
                  (o = s()),
                  l(),
                  t && a("Syntax error"),
                  "function" == typeof i
                    ? (function e(t, n) {
                        var r,
                          a,
                          o = t[n];
                        if (o && "object" == typeof o)
                          for (r in s)
                            Object.prototype.hasOwnProperty.call(o, r) &&
                              (void 0 === (a = e(o, r))
                                ? delete o[r]
                                : (o[r] = a));
                        return i.call(t, n, o);
                      })({ "": o }, "")
                    : o
                );
              });
            })()),
            (hh.stringify = (function () {
              if (uh) return oh;
              uh = 1;
              var e,
                t,
                n,
                r =
                  /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                a = {
                  "\b": "\\b",
                  "\t": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                };
              function i(e) {
                return (
                  (r.lastIndex = 0),
                  r.test(e)
                    ? '"' +
                      e.replace(r, function (e) {
                        var t = a[e];
                        return "string" == typeof t
                          ? t
                          : "\\u" +
                              ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                      }) +
                      '"'
                    : '"' + e + '"'
                );
              }
              function o(r, a) {
                var u,
                  l,
                  s,
                  c,
                  f,
                  d = e,
                  h = a[r];
                switch (
                  (h &&
                    "object" == typeof h &&
                    "function" == typeof h.toJSON &&
                    (h = h.toJSON(r)),
                  "function" == typeof n && (h = n.call(a, r, h)),
                  typeof h)
                ) {
                  case "string":
                    return i(h);
                  case "number":
                    return isFinite(h) ? String(h) : "null";
                  case "boolean":
                  case "null":
                    return String(h);
                  case "object":
                    if (!h) return "null";
                    if (
                      ((e += t),
                      (f = []),
                      "[object Array]" === Object.prototype.toString.apply(h))
                    ) {
                      for (c = h.length, u = 0; u < c; u += 1)
                        f[u] = o(u, h) || "null";
                      return (
                        (s =
                          0 === f.length
                            ? "[]"
                            : e
                            ? "[\n" + e + f.join(",\n" + e) + "\n" + d + "]"
                            : "[" + f.join(",") + "]"),
                        (e = d),
                        s
                      );
                    }
                    if (n && "object" == typeof n)
                      for (c = n.length, u = 0; u < c; u += 1)
                        "string" == typeof (l = n[u]) &&
                          (s = o(l, h)) &&
                          f.push(i(l) + (e ? ": " : ":") + s);
                    else
                      for (l in h)
                        Object.prototype.hasOwnProperty.call(h, l) &&
                          (s = o(l, h)) &&
                          f.push(i(l) + (e ? ": " : ":") + s);
                    return (
                      (s =
                        0 === f.length
                          ? "{}"
                          : e
                          ? "{\n" + e + f.join(",\n" + e) + "\n" + d + "}"
                          : "{" + f.join(",") + "}"),
                      (e = d),
                      s
                    );
                }
              }
              return (oh = function (r, a, i) {
                var u;
                if (((e = ""), (t = ""), "number" == typeof i))
                  for (u = 0; u < i; u += 1) t += " ";
                else "string" == typeof i && (t = i);
                if (
                  ((n = a),
                  a &&
                    "function" != typeof a &&
                    ("object" != typeof a || "number" != typeof a.length))
                )
                  throw new Error("JSON.stringify");
                return o("", { "": r });
              });
            })())),
          hh),
    mh =
      Array.isArray ||
      function (e) {
        return "[object Array]" === {}.toString.call(e);
      },
    gh =
      Object.keys ||
      function (e) {
        var t =
            Object.prototype.hasOwnProperty ||
            function () {
              return !0;
            },
          n = [];
        for (var r in e) t.call(e, r) && n.push(r);
        return n;
      },
    vh = function (e, t) {
      t || (t = {}), "function" == typeof t && (t = { cmp: t });
      var n = t.space || "";
      "number" == typeof n && (n = Array(n + 1).join(" "));
      var r,
        a = "boolean" == typeof t.cycles && t.cycles,
        i =
          t.replacer ||
          function (e, t) {
            return t;
          },
        o =
          t.cmp &&
          ((r = t.cmp),
          function (e) {
            return function (t, n) {
              var a = { key: t, value: e[t] },
                i = { key: n, value: e[n] };
              return r(a, i);
            };
          }),
        u = [];
      return (function e(t, r, l, s) {
        var c = n ? "\n" + new Array(s + 1).join(n) : "",
          f = n ? ": " : ":";
        if (
          (l && l.toJSON && "function" == typeof l.toJSON && (l = l.toJSON()),
          void 0 !== (l = i.call(t, r, l)))
        ) {
          if ("object" != typeof l || null === l) return ph.stringify(l);
          if (mh(l)) {
            for (var d = [], h = 0; h < l.length; h++) {
              var p = e(l, h, l[h], s + 1) || ph.stringify(null);
              d.push(c + n + p);
            }
            return "[" + d.join(",") + c + "]";
          }
          if (-1 !== u.indexOf(l)) {
            if (a) return ph.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          u.push(l);
          var m = gh(l).sort(o && o(l));
          for (d = [], h = 0; h < m.length; h++) {
            var g = e(l, (r = m[h]), l[r], s + 1);
            if (g) {
              var v = ph.stringify(r) + f + g;
              d.push(c + n + v);
            }
          }
          return u.splice(u.indexOf(l), 1), "{" + d.join(",") + c + "}";
        }
      })({ "": e }, "", e, 0);
    };
  !(function (e) {
    var t =
      (n && n.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.jsonfmtFun =
        e.pctfmtFun =
        e.fourDecPriceFormat =
        e.twoDecPriceFormat =
        e.numberFormatFun =
        e.priceFormat =
        e.valueFormat =
        e.numberFormat =
        e.smartRound =
          void 0);
    const r = t(vh);
    function a(t, n, r = ".", a = "", i = 1, o = "") {
      if (isNaN(t)) return "";
      var u = 0,
        l = 0,
        s = ".",
        c = "",
        f = 1,
        d = "";
      if ("string" == typeof n) {
        var h =
          /((?:#)([\u0020\u00a0\xa0,.])(?:##))?0(?:([.,])*(0*)(#*))?([%$£€a-zA-Z]+)?/.exec(
            n
          );
        if (!h) return t.toFixed(2);
        h[5] && (l = h[5].length),
          h[4] && (u = h[4].length),
          h[3] && (s = h[3]),
          h[2] && (c = h[2]),
          h[6] && "%" === (d = h[6]) && (f = 100);
      } else
        void 0 !== r && (s = r),
          void 0 !== a && (c = a),
          void 0 !== i && (f = i),
          void 0 !== o && (d = o);
      0 !== l && (u = (0, e.smartRound)(t, u, u + l, !0));
      var p = f * t,
        m = p < 0 ? "-" : "",
        g = Math.abs(Number(p) || 0).toFixed(u),
        v = String(parseInt(g, 10)),
        y = v.length;
      return (
        m +
        ((y = y > 3 ? y % 3 : 0) ? v.substr(0, y) + c : "") +
        v.substr(y).replace(/(\d{3})(?=\d)/g, "$1" + c) +
        (u
          ? s +
            Math.abs(Number(g) - Number(v))
              .toFixed(u)
              .slice(2)
          : "") +
        d
      );
    }
    (e.smartRound = (e, t = 2, n = 6, r = !1) => {
      for (
        var a = isNaN(Number(t)) ? 2 : Number(t),
          i = isNaN(Number(n)) ? 6 : Number(n),
          o = Math.pow(10, a) * e;
        ;

      ) {
        var u = Math.round(o);
        if (a === i || Math.abs(Math.round(o) - o) < 1e-5)
          return !0 === r ? a : u * Math.pow(10, -a);
        a++, (o *= 10);
      }
    }),
      (e.numberFormat = a),
      (e.valueFormat = (e) =>
        "number" == typeof e ? a(Number(e), "# ##0") : ""),
      (e.priceFormat = (e) => {
        if ("number" != typeof e) return "";
        var t = Number(e);
        return a(t, Math.abs(t) < 2 ? "# ##0.0000" : "# ##0.00");
      }),
      (e.numberFormatFun = (e) => (t) =>
        "number" == typeof t
          ? a(Number(t), e)
          : "string" == typeof t && parseFloat(t)
          ? a(parseFloat(t), e)
          : null),
      (e.twoDecPriceFormat = (e) =>
        "number" == typeof e ? a(Number(e), "# ##0.00") : ""),
      (e.fourDecPriceFormat = (e) =>
        "number" == typeof e ? a(Number(e), "# ##0.0000") : ""),
      (e.pctfmtFun = (e) =>
        "number" == typeof e
          ? a(Number(e), Math.abs(e) > 0.995 ? "0%" : "0,0%")
          : ""),
      (e.jsonfmtFun = (e) =>
        "object" == typeof e ? (0, r.default)(e, { space: "  " }) : "");
  })(dh),
    Object.defineProperty(fh, "__esModule", { value: !0 }),
    (fh.LimitFramework = void 0);
  const yh = dh,
    bh = "High",
    _h = "HighRelativeReference",
    Sh = "LowRelativeReference",
    wh = "Count",
    Th = "SumRelativeReference",
    kh = "Breach",
    Ch = "Warning",
    Eh = (0, yh.numberFormatFun)("# ##0.00"),
    xh = (0, yh.numberFormatFun)("# ##0");
  class Ph {
    static isIncluded(e, t, n = null, r = null) {
      if ("And" === e.type || "And" === e.operator)
        return e.operands.every((e) => Ph.isIncluded(e, t, n));
      if ("Or" === e.type || "Or" === e.operator)
        return e.operands.some((e) => Ph.isIncluded(e, t, n));
      if ("Equality" === e.type) return e.values.indexOf(t[e.field]) >= 0;
      if ("RelativeReference" === e.type) {
        var a = [t];
        e.groupField &&
          (a = n.filter((n) => t[e.groupField] === n[e.groupField])),
          r && (a = a.filter((e) => !Ph.isIncluded(r, e)));
        var i =
          a.reduce((t, n) => t + n[e.field], 0) /
          n.reduce((t, n) => t + n[e.field], 0);
        if (e.maxValue) return i < e.maxValue;
        if (e.minValue) return i > e.minValue;
        throw new Error(
          "Filter of type RelativeReference requires minValue and/or maxValue"
        );
      }
    }
    static getGroupedPositions(e, t, n, r) {
      if (0 === e.length) return {};
      var a,
        i = n ? (e, t) => e[n] : (e, t) => "Index" + t;
      return e.reduce(
        ((a = i),
        (e, n, i) => {
          var o = a(n, i);
          if (null == o || "" === o) return e;
          var u = e[o];
          return void 0 === u && (u = r), (e[o] = n[t] + u), e;
        }),
        {}
      );
    }
    static applyLimit(e, t) {
      var n = { value: null, status: null, statusMessage: null },
        r = t;
      e.referenceIncludeFilter &&
        (r = r.filter((t) => Ph.isIncluded(e.referenceIncludeFilter, t))),
        e.referenceExcludeFilter &&
          (r = r.filter((t) => !Ph.isIncluded(e.referenceExcludeFilter, t)));
      var a = t;
      e.includeFilter &&
        (a = a.filter((t) =>
          Ph.isIncluded(e.includeFilter, t, r, e.excludeFilter)
        )),
        e.excludeFilter &&
          (a = a.filter(
            (t) => !Ph.isIncluded(e.excludeFilter, t, r, e.excludeFilter)
          ));
      var i = {};
      (e.type !== bh &&
        "Low" !== e.type &&
        e.type !== _h &&
        e.type !== Sh &&
        e.type !== wh &&
        "RelativeSelf" !== e.type) ||
        (i = Ph.getGroupedPositions(a, e.valueField, e.groupField, 0));
      var o = null;
      if (e.type === bh || "Low" === e.type || e.type === _h || e.type === Sh) {
        var u =
            e.type === bh || e.type === _h ? (e, t) => t > e : (e, t) => t < e,
          l = Object.keys(i).reduce(
            (e, t, n) => {
              var r = i[t];
              return (
                (null === e.value || u(e.value, r)) &&
                  ((e.value = r), (e.group = t)),
                e
              );
            },
            { group: null, value: null }
          ),
          s = 1;
        if (e.type === _h || e.type === Sh) {
          let t = e.valueField;
          e.referenceValueField && (t = e.referenceValueField),
            (s = r.reduce((e, n) => e + n[t], 0));
        }
        (n.value = l.value / s),
          (o = `${e.type === bh || e.type === _h ? "Highest" : "Lowest"}: ${
            l.group
          } = ${Eh(n.value)}`),
          (e.type !== Sh && e.type !== _h) ||
            (o += `, ${xh(l.value)} of total ${xh(s)}`);
      } else if (e.type === wh)
        (n.value = Object.keys(i).length),
          (o = `Groups: ${Object.keys(i).join(", ")}`);
      else if ("Sum" === e.type || e.type === Th) {
        var c = a.reduce((t, n) => t + n[e.valueField], 0),
          f = e.referenceValueField ? e.referenceValueField : e.valueField;
        if (e.type === Th) {
          var d = r.reduce((e, t) => e + t[f], 0);
          n.value = c / d;
        } else n.value = c;
      }
      return (
        (n.status = "Ok"),
        (n.statusMessage = `Current value: ${Eh(n.value)}`),
        "Active" === e.status &&
          (e.maxValue && n.value > e.maxValue
            ? ((n.status = kh),
              (n.statusMessage = `Above limit ${e.maxValue}: ${Eh(n.value)}`))
            : e.minValue && n.value < e.minValue
            ? ((n.status = kh),
              (n.statusMessage = `Below limit ${e.minValue}: ${Eh(n.value)}`))
            : e.maxValueWarning && n.value > e.maxValueWarning
            ? ((n.status = Ch),
              (n.statusMessage = `Almost above limit ${e.maxValueWarning}: ${Eh(
                n.value
              )}`))
            : e.minValueWarning &&
              n.value < e.minValueWarning &&
              ((n.status = Ch),
              (n.statusMessage = `Almost below limit ${e.minValueWarning}: ${Eh(
                n.value
              )}`))),
        o && (n.statusMessage += `, ${o}`),
        n
      );
    }
  }
  (fh.LimitFramework = Ph),
    (function (e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.LimitFramework = void 0);
      const t = fh;
      Object.defineProperty(e, "LimitFramework", {
        enumerable: !0,
        get: function () {
          return t.LimitFramework;
        },
      });
    })(ch);
  var Ah = {},
    Mh = {};
  Object.defineProperty(Mh, "__esModule", { value: !0 }),
    (Mh.round =
      Mh.quantile =
      Mh.centralWeightedStdev =
      Mh.normalCdf =
      Mh.normalInv =
      Mh.erfcinv =
      Mh.erfc =
      Mh.erf =
      Mh.kurtosis =
      Mh.skew =
      Mh.corr =
      Mh.stdev =
      Mh.mean =
        void 0);
  const {
      sqrt: Nh,
      log: Ih,
      exp: Rh,
      cos: Oh,
      PI: Fh,
      pow: Dh,
      SQRT2: Lh,
      floor: Bh,
    } = Math,
    jh = (e) => e * e;
  function zh(e) {
    var t,
      n,
      r,
      a,
      i = [
        -1.3026537197817094, 0.6419697923564902, 0.019476473204185836,
        -0.00956151478680863, -0.000946595344482036, 0.000366839497852761,
        42523324806907e-18, -20278578112534e-18, -1624290004647e-18,
        130365583558e-17, 1.5626441722e-8, -8.5238095915e-8, 6.529054439e-9,
        5.059343495e-9, -9.91364156e-10, -2.27365122e-10, 96467911e-18,
        2394038e-18, -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18,
        7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18,
      ],
      o = i.length - 1,
      u = !1,
      l = 0,
      s = 0;
    for (
      e < 0 && ((e = -e), (u = !0)), n = 4 * (t = 2 / (2 + e)) - 2;
      o > 0;
      o--
    )
      (r = l), (l = n * l - s + i[o]), (s = r);
    return (a = t * Rh(-e * e + 0.5 * (i[0] + n * l) - s)), u ? a - 1 : 1 - a;
  }
  function Uh(e) {
    return 1 - zh(e);
  }
  function Gh(e) {
    var t,
      n,
      r,
      a,
      i = 0;
    if (e >= 2) return -100;
    if (e <= 0) return 100;
    for (
      t =
        -0.70711 *
        ((2.30753 + 0.27061 * (r = Nh(-2 * Ih((a = e < 1 ? e : 2 - e) / 2)))) /
          (1 + r * (0.99229 + 0.04481 * r)) -
          r);
      i < 2;
      i++
    )
      t += (n = Uh(t) - a) / (1.1283791670955126 * Rh(-t * t) - t * n);
    return e < 1 ? t : -t;
  }
  function Vh(e, t, n) {
    return -Lh * n * Gh(2 * e) + t;
  }
  (Mh.mean = function (e) {
    var t = e.length,
      n = 0;
    for (let r = 0; r < t; r++) n += e[r];
    return n / t;
  }),
    (Mh.stdev = function (e) {
      var t = e.length,
        n = 0,
        r = 0;
      for (let a = 0; a < t; a++) {
        let t = e[a];
        (n += t), (r += jh(t));
      }
      return Nh((r - jh(n) / t) / (t - 1));
    }),
    (Mh.corr = function (e, t) {
      var n = e.length,
        r = 0,
        a = 0,
        i = 0,
        o = 0,
        u = 0;
      for (let l = 0; l < n; l++) {
        let n = e[l],
          s = t[l];
        (r += n), (a += s), (i += n * s), (o += jh(n)), (u += jh(s));
      }
      return (n * i - r * a) / Nh((n * o - jh(r)) * (n * u - jh(a)));
    }),
    (Mh.skew = function (e) {
      var t = e.length,
        n = 0,
        r = 0,
        a = 0;
      for (let u = 0; u < t; u++) {
        let t = e[u],
          i = jh(t);
        (n += t), (r += i), (a += t * i);
      }
      var i = jh(t),
        o = Nh((r - Dh(n, 2) / t) / (t - 1));
      return (
        ((t / (t - 1) / (t - 2)) * (a - (3 / t) * n * r + (2 / i) * Dh(n, 3))) /
        Dh(o, 3)
      );
    }),
    (Mh.kurtosis = function (e) {
      var t = e.length,
        n = 0,
        r = 0,
        a = 0,
        i = 0;
      for (let s = 0; s < t; s++) {
        let t = e[s];
        (n += t), (r += jh(t)), (a += Dh(t, 3)), (i += Dh(t, 4));
      }
      var o = Dh(t, 2),
        u = Dh(t, 3),
        l = Nh((r - jh(n) / t) / (t - 1));
      return (
        ((o *
          (t + 1) *
          ((1 / t) *
            (i - (4 / t) * n * a + (6 / o) * jh(n) * r - (3 / u) * Dh(n, 4)))) /
          Dh(l, 4) -
          3 * Dh(t - 1, 3)) /
        (t - 1) /
        (t - 2) /
        (t - 3)
      );
    }),
    (Mh.erf = zh),
    (Mh.erfc = Uh),
    (Mh.erfcinv = Gh),
    (Mh.normalInv = Vh),
    (Mh.normalCdf = function (e, t, n) {
      return 0.5 * Uh(-(e - t) / n / Lh);
    }),
    (Mh.centralWeightedStdev = function (e) {
      e.sort((e, t) => e - t);
      for (
        var t = 0, n = 0, r = 0, a = 0, i = 0, o = e.length, u = 0;
        u < o;
        u++
      ) {
        var l = (u + 0.5) / o,
          s = Vh(l, 0, 1),
          c = (1 + Oh(2 * Fh * (l - 0.5))) / 2,
          f = e[u],
          d = s * c;
        (t += d), (n += d * s), (r += c), (a += c * f), (i += d * f);
      }
      return (a * t - i * r) / (t * t - n * r);
    }),
    (Mh.quantile = function (e, t) {
      var n, r;
      return (
        e.sort(function (e, t) {
          return e - t;
        }),
        (n = t * (e.length - 1)),
        (r = Bh(n)) === n
          ? e[n]
          : Number((n - r) * e[r + 1] + (r + 1 - n) * e[r])
      );
    }),
    (Mh.round = function (e, t) {
      var n = Dh(10, t);
      return (Math.sign(e) * Math.round(n * Math.abs(e) + 1e-7)) / n;
    });
  var $h,
    Hh,
    Yh = {},
    Wh = { exports: {} };
  ($h = Wh),
    (Hh = Wh.exports),
    function () {
      var e,
        t = "Expected a function",
        r = "__lodash_hash_undefined__",
        a = "__lodash_placeholder__",
        i = 32,
        o = 128,
        u = 1 / 0,
        l = 9007199254740991,
        s = NaN,
        c = 4294967295,
        f = [
          ["ary", o],
          ["bind", 1],
          ["bindKey", 2],
          ["curry", 8],
          ["curryRight", 16],
          ["flip", 512],
          ["partial", i],
          ["partialRight", 64],
          ["rearg", 256],
        ],
        d = "[object Arguments]",
        h = "[object Array]",
        p = "[object Boolean]",
        m = "[object Date]",
        g = "[object Error]",
        v = "[object Function]",
        y = "[object GeneratorFunction]",
        b = "[object Map]",
        _ = "[object Number]",
        S = "[object Object]",
        w = "[object Promise]",
        T = "[object RegExp]",
        k = "[object Set]",
        C = "[object String]",
        E = "[object Symbol]",
        x = "[object WeakMap]",
        P = "[object ArrayBuffer]",
        A = "[object DataView]",
        M = "[object Float32Array]",
        N = "[object Float64Array]",
        I = "[object Int8Array]",
        R = "[object Int16Array]",
        O = "[object Int32Array]",
        F = "[object Uint8Array]",
        D = "[object Uint8ClampedArray]",
        L = "[object Uint16Array]",
        B = "[object Uint32Array]",
        j = /\b__p \+= '';/g,
        z = /\b(__p \+=) '' \+/g,
        U = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        G = /&(?:amp|lt|gt|quot|#39);/g,
        V = /[&<>"']/g,
        $ = RegExp(G.source),
        H = RegExp(V.source),
        Y = /<%-([\s\S]+?)%>/g,
        W = /<%([\s\S]+?)%>/g,
        q = /<%=([\s\S]+?)%>/g,
        K = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Q = /^\w*$/,
        J =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        X = /[\\^$.*+?()[\]{}|]/g,
        Z = RegExp(X.source),
        ee = /^\s+/,
        te = /\s/,
        ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        re = /\{\n\/\* \[wrapped with (.+)\] \*/,
        ae = /,? & /,
        ie = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        oe = /[()=,{}\[\]\/\s]/,
        ue = /\\(\\)?/g,
        le = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        se = /\w*$/,
        ce = /^[-+]0x[0-9a-f]+$/i,
        fe = /^0b[01]+$/i,
        de = /^\[object .+?Constructor\]$/,
        he = /^0o[0-7]+$/i,
        pe = /^(?:0|[1-9]\d*)$/,
        me = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        ge = /($^)/,
        ve = /['\n\r\u2028\u2029\\]/g,
        ye = "\\ud800-\\udfff",
        be = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        _e = "\\u2700-\\u27bf",
        Se = "a-z\\xdf-\\xf6\\xf8-\\xff",
        we = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        Te = "\\ufe0e\\ufe0f",
        ke =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        Ce = "[" + ye + "]",
        Ee = "[" + ke + "]",
        xe = "[" + be + "]",
        Pe = "\\d+",
        Ae = "[" + _e + "]",
        Me = "[" + Se + "]",
        Ne = "[^" + ye + ke + Pe + _e + Se + we + "]",
        Ie = "\\ud83c[\\udffb-\\udfff]",
        Re = "[^" + ye + "]",
        Oe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Fe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        De = "[" + we + "]",
        Le = "\\u200d",
        Be = "(?:" + Me + "|" + Ne + ")",
        je = "(?:" + De + "|" + Ne + ")",
        ze = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        Ue = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        Ge = "(?:" + xe + "|" + Ie + ")?",
        Ve = "[" + Te + "]?",
        $e =
          Ve +
          Ge +
          "(?:" +
          Le +
          "(?:" +
          [Re, Oe, Fe].join("|") +
          ")" +
          Ve +
          Ge +
          ")*",
        He = "(?:" + [Ae, Oe, Fe].join("|") + ")" + $e,
        Ye = "(?:" + [Re + xe + "?", xe, Oe, Fe, Ce].join("|") + ")",
        We = RegExp("['’]", "g"),
        qe = RegExp(xe, "g"),
        Ke = RegExp(Ie + "(?=" + Ie + ")|" + Ye + $e, "g"),
        Qe = RegExp(
          [
            De + "?" + Me + "+" + ze + "(?=" + [Ee, De, "$"].join("|") + ")",
            je + "+" + Ue + "(?=" + [Ee, De + Be, "$"].join("|") + ")",
            De + "?" + Be + "+" + ze,
            De + "+" + Ue,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Pe,
            He,
          ].join("|"),
          "g"
        ),
        Je = RegExp("[" + Le + ye + be + Te + "]"),
        Xe =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        Ze = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout",
        ],
        et = -1,
        tt = {};
      (tt[M] =
        tt[N] =
        tt[I] =
        tt[R] =
        tt[O] =
        tt[F] =
        tt[D] =
        tt[L] =
        tt[B] =
          !0),
        (tt[d] =
          tt[h] =
          tt[P] =
          tt[p] =
          tt[A] =
          tt[m] =
          tt[g] =
          tt[v] =
          tt[b] =
          tt[_] =
          tt[S] =
          tt[T] =
          tt[k] =
          tt[C] =
          tt[x] =
            !1);
      var nt = {};
      (nt[d] =
        nt[h] =
        nt[P] =
        nt[A] =
        nt[p] =
        nt[m] =
        nt[M] =
        nt[N] =
        nt[I] =
        nt[R] =
        nt[O] =
        nt[b] =
        nt[_] =
        nt[S] =
        nt[T] =
        nt[k] =
        nt[C] =
        nt[E] =
        nt[F] =
        nt[D] =
        nt[L] =
        nt[B] =
          !0),
        (nt[g] = nt[v] = nt[x] = !1);
      var rt = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        at = parseFloat,
        it = parseInt,
        ot = "object" == typeof n && n && n.Object === Object && n,
        ut = "object" == typeof self && self && self.Object === Object && self,
        lt = ot || ut || Function("return this")(),
        st = Hh && !Hh.nodeType && Hh,
        ct = st && $h && !$h.nodeType && $h,
        ft = ct && ct.exports === st,
        dt = ft && ot.process,
        ht = (function () {
          try {
            return (
              (ct && ct.require && ct.require("util").types) ||
              (dt && dt.binding && dt.binding("util"))
            );
          } catch (e) {}
        })(),
        pt = ht && ht.isArrayBuffer,
        mt = ht && ht.isDate,
        gt = ht && ht.isMap,
        vt = ht && ht.isRegExp,
        yt = ht && ht.isSet,
        bt = ht && ht.isTypedArray;
      function _t(e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      }
      function St(e, t, n, r) {
        for (var a = -1, i = null == e ? 0 : e.length; ++a < i; ) {
          var o = e[a];
          t(r, o, n(o), e);
        }
        return r;
      }
      function wt(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e;
      }
      function Tt(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
        return e;
      }
      function kt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (!t(e[n], n, e)) return !1;
        return !0;
      }
      function Ct(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, a = 0, i = [];
          ++n < r;

        ) {
          var o = e[n];
          t(o, n, e) && (i[a++] = o);
        }
        return i;
      }
      function Et(e, t) {
        return !(null == e || !e.length) && Dt(e, t, 0) > -1;
      }
      function xt(e, t, n) {
        for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
          if (n(t, e[r])) return !0;
        return !1;
      }
      function Pt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      }
      function At(e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
        return e;
      }
      function Mt(e, t, n, r) {
        var a = -1,
          i = null == e ? 0 : e.length;
        for (r && i && (n = e[++a]); ++a < i; ) n = t(n, e[a], a, e);
        return n;
      }
      function Nt(e, t, n, r) {
        var a = null == e ? 0 : e.length;
        for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
        return n;
      }
      function It(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      }
      var Rt = zt("length");
      function Ot(e, t, n) {
        var r;
        return (
          n(e, function (e, n, a) {
            if (t(e, n, a)) return (r = n), !1;
          }),
          r
        );
      }
      function Ft(e, t, n, r) {
        for (var a = e.length, i = n + (r ? 1 : -1); r ? i-- : ++i < a; )
          if (t(e[i], i, e)) return i;
        return -1;
      }
      function Dt(e, t, n) {
        return t == t
          ? (function (e, t, n) {
              for (var r = n - 1, a = e.length; ++r < a; )
                if (e[r] === t) return r;
              return -1;
            })(e, t, n)
          : Ft(e, Bt, n);
      }
      function Lt(e, t, n, r) {
        for (var a = n - 1, i = e.length; ++a < i; ) if (r(e[a], t)) return a;
        return -1;
      }
      function Bt(e) {
        return e != e;
      }
      function jt(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? Vt(e, t) / n : s;
      }
      function zt(t) {
        return function (n) {
          return null == n ? e : n[t];
        };
      }
      function Ut(t) {
        return function (n) {
          return null == t ? e : t[n];
        };
      }
      function Gt(e, t, n, r, a) {
        return (
          a(e, function (e, a, i) {
            n = r ? ((r = !1), e) : t(n, e, a, i);
          }),
          n
        );
      }
      function Vt(t, n) {
        for (var r, a = -1, i = t.length; ++a < i; ) {
          var o = n(t[a]);
          o !== e && (r = r === e ? o : r + o);
        }
        return r;
      }
      function $t(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      }
      function Ht(e) {
        return e ? e.slice(0, ln(e) + 1).replace(ee, "") : e;
      }
      function Yt(e) {
        return function (t) {
          return e(t);
        };
      }
      function Wt(e, t) {
        return Pt(t, function (t) {
          return e[t];
        });
      }
      function qt(e, t) {
        return e.has(t);
      }
      function Kt(e, t) {
        for (var n = -1, r = e.length; ++n < r && Dt(t, e[n], 0) > -1; );
        return n;
      }
      function Qt(e, t) {
        for (var n = e.length; n-- && Dt(t, e[n], 0) > -1; );
        return n;
      }
      var Jt = Ut({
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s",
        }),
        Xt = Ut({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        });
      function Zt(e) {
        return "\\" + rt[e];
      }
      function en(e) {
        return Je.test(e);
      }
      function tn(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      function nn(e, t) {
        return function (n) {
          return e(t(n));
        };
      }
      function rn(e, t) {
        for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
          var u = e[n];
          (u !== t && u !== a) || ((e[n] = a), (o[i++] = n));
        }
        return o;
      }
      function an(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      function on(e) {
        return en(e)
          ? (function (e) {
              for (var t = (Ke.lastIndex = 0); Ke.test(e); ) ++t;
              return t;
            })(e)
          : Rt(e);
      }
      function un(e) {
        return en(e)
          ? e.match(Ke) || []
          : (function (e) {
              return e.split("");
            })(e);
      }
      function ln(e) {
        for (var t = e.length; t-- && te.test(e.charAt(t)); );
        return t;
      }
      var sn = Ut({
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        }),
        cn = (function n(te) {
          var ye,
            be = (te =
              null == te ? lt : cn.defaults(lt.Object(), te, cn.pick(lt, Ze)))
              .Array,
            _e = te.Date,
            Se = te.Error,
            we = te.Function,
            Te = te.Math,
            ke = te.Object,
            Ce = te.RegExp,
            Ee = te.String,
            xe = te.TypeError,
            Pe = be.prototype,
            Ae = we.prototype,
            Me = ke.prototype,
            Ne = te["__core-js_shared__"],
            Ie = Ae.toString,
            Re = Me.hasOwnProperty,
            Oe = 0,
            Fe = (ye = /[^.]+$/.exec((Ne && Ne.keys && Ne.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + ye
              : "",
            De = Me.toString,
            Le = Ie.call(ke),
            Be = lt._,
            je = Ce(
              "^" +
                Ie.call(Re)
                  .replace(X, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            ze = ft ? te.Buffer : e,
            Ue = te.Symbol,
            Ge = te.Uint8Array,
            Ve = ze ? ze.allocUnsafe : e,
            $e = nn(ke.getPrototypeOf, ke),
            He = ke.create,
            Ye = Me.propertyIsEnumerable,
            Ke = Pe.splice,
            Je = Ue ? Ue.isConcatSpreadable : e,
            rt = Ue ? Ue.iterator : e,
            ot = Ue ? Ue.toStringTag : e,
            ut = (function () {
              try {
                var e = ui(ke, "defineProperty");
                return e({}, "", {}), e;
              } catch (t) {}
            })(),
            st = te.clearTimeout !== lt.clearTimeout && te.clearTimeout,
            ct = _e && _e.now !== lt.Date.now && _e.now,
            dt = te.setTimeout !== lt.setTimeout && te.setTimeout,
            ht = Te.ceil,
            Rt = Te.floor,
            Ut = ke.getOwnPropertySymbols,
            fn = ze ? ze.isBuffer : e,
            dn = te.isFinite,
            hn = Pe.join,
            pn = nn(ke.keys, ke),
            mn = Te.max,
            gn = Te.min,
            vn = _e.now,
            yn = te.parseInt,
            bn = Te.random,
            _n = Pe.reverse,
            Sn = ui(te, "DataView"),
            wn = ui(te, "Map"),
            Tn = ui(te, "Promise"),
            kn = ui(te, "Set"),
            Cn = ui(te, "WeakMap"),
            En = ui(ke, "create"),
            xn = Cn && new Cn(),
            Pn = {},
            An = Fi(Sn),
            Mn = Fi(wn),
            Nn = Fi(Tn),
            In = Fi(kn),
            Rn = Fi(Cn),
            On = Ue ? Ue.prototype : e,
            Fn = On ? On.valueOf : e,
            Dn = On ? On.toString : e;
          function Ln(e) {
            if (Zo(e) && !Go(e) && !(e instanceof Un)) {
              if (e instanceof zn) return e;
              if (Re.call(e, "__wrapped__")) return Di(e);
            }
            return new zn(e);
          }
          var Bn = (function () {
            function t() {}
            return function (n) {
              if (!Xo(n)) return {};
              if (He) return He(n);
              t.prototype = n;
              var r = new t();
              return (t.prototype = e), r;
            };
          })();
          function jn() {}
          function zn(t, n) {
            (this.__wrapped__ = t),
              (this.__actions__ = []),
              (this.__chain__ = !!n),
              (this.__index__ = 0),
              (this.__values__ = e);
          }
          function Un(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = c),
              (this.__views__ = []);
          }
          function Gn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Vn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function $n(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Hn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.__data__ = new $n(); ++t < n; ) this.add(e[t]);
          }
          function Yn(e) {
            var t = (this.__data__ = new Vn(e));
            this.size = t.size;
          }
          function Wn(e, t) {
            var n = Go(e),
              r = !n && Uo(e),
              a = !n && !r && Yo(e),
              i = !n && !r && !a && uu(e),
              o = n || r || a || i,
              u = o ? $t(e.length, Ee) : [],
              l = u.length;
            for (var s in e)
              (!t && !Re.call(e, s)) ||
                (o &&
                  ("length" == s ||
                    (a && ("offset" == s || "parent" == s)) ||
                    (i &&
                      ("buffer" == s ||
                        "byteLength" == s ||
                        "byteOffset" == s)) ||
                    pi(s, l))) ||
                u.push(s);
            return u;
          }
          function qn(t) {
            var n = t.length;
            return n ? t[$r(0, n - 1)] : e;
          }
          function Kn(e, t) {
            return Mi(Ca(e), ar(t, 0, e.length));
          }
          function Qn(e) {
            return Mi(Ca(e));
          }
          function Jn(t, n, r) {
            ((r !== e && !Bo(t[n], r)) || (r === e && !(n in t))) &&
              nr(t, n, r);
          }
          function Xn(t, n, r) {
            var a = t[n];
            (Re.call(t, n) && Bo(a, r) && (r !== e || n in t)) || nr(t, n, r);
          }
          function Zn(e, t) {
            for (var n = e.length; n--; ) if (Bo(e[n][0], t)) return n;
            return -1;
          }
          function er(e, t, n, r) {
            return (
              sr(e, function (e, a, i) {
                t(r, e, n(e), i);
              }),
              r
            );
          }
          function tr(e, t) {
            return e && Ea(t, Au(t), e);
          }
          function nr(e, t, n) {
            "__proto__" == t && ut
              ? ut(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (e[t] = n);
          }
          function rr(t, n) {
            for (var r = -1, a = n.length, i = be(a), o = null == t; ++r < a; )
              i[r] = o ? e : ku(t, n[r]);
            return i;
          }
          function ar(t, n, r) {
            return (
              t == t &&
                (r !== e && (t = t <= r ? t : r),
                n !== e && (t = t >= n ? t : n)),
              t
            );
          }
          function ir(t, n, r, a, i, o) {
            var u,
              l = 1 & n,
              s = 2 & n,
              c = 4 & n;
            if ((r && (u = i ? r(t, a, i, o) : r(t)), u !== e)) return u;
            if (!Xo(t)) return t;
            var f,
              h,
              g,
              w = Go(t);
            if (w) {
              if (
                ((h = (f = t).length),
                (g = new f.constructor(h)),
                h &&
                  "string" == typeof f[0] &&
                  Re.call(f, "index") &&
                  ((g.index = f.index), (g.input = f.input)),
                (u = g),
                !l)
              )
                return Ca(t, u);
            } else {
              var x = ci(t),
                j = x == v || x == y;
              if (Yo(t)) return ba(t, l);
              if (x == S || x == d || (j && !i)) {
                if (((u = s || j ? {} : di(t)), !l))
                  return s
                    ? (function (e, t) {
                        return Ea(e, si(e), t);
                      })(
                        t,
                        (function (e, t) {
                          return e && Ea(t, Mu(t), e);
                        })(u, t)
                      )
                    : (function (e, t) {
                        return Ea(e, li(e), t);
                      })(t, tr(u, t));
              } else {
                if (!nt[x]) return i ? t : {};
                u = (function (e, t, n) {
                  var r,
                    a,
                    i,
                    o = e.constructor;
                  switch (t) {
                    case P:
                      return _a(e);
                    case p:
                    case m:
                      return new o(+e);
                    case A:
                      return (
                        (a = e),
                        (i = n ? _a(a.buffer) : a.buffer),
                        new a.constructor(i, a.byteOffset, a.byteLength)
                      );
                    case M:
                    case N:
                    case I:
                    case R:
                    case O:
                    case F:
                    case D:
                    case L:
                    case B:
                      return Sa(e, n);
                    case b:
                      return new o();
                    case _:
                    case C:
                      return new o(e);
                    case T:
                      return (function (e) {
                        var t = new e.constructor(e.source, se.exec(e));
                        return (t.lastIndex = e.lastIndex), t;
                      })(e);
                    case k:
                      return new o();
                    case E:
                      return (r = e), Fn ? ke(Fn.call(r)) : {};
                  }
                })(t, x, l);
              }
            }
            o || (o = new Yn());
            var z = o.get(t);
            if (z) return z;
            o.set(t, u),
              au(t)
                ? t.forEach(function (e) {
                    u.add(ir(e, n, r, e, t, o));
                  })
                : eu(t) &&
                  t.forEach(function (e, a) {
                    u.set(a, ir(e, n, r, a, t, o));
                  });
            var U = w ? e : (c ? (s ? ei : Za) : s ? Mu : Au)(t);
            return (
              wt(U || t, function (e, a) {
                U && (e = t[(a = e)]), Xn(u, a, ir(e, n, r, a, t, o));
              }),
              u
            );
          }
          function or(t, n, r) {
            var a = r.length;
            if (null == t) return !a;
            for (t = ke(t); a--; ) {
              var i = r[a],
                o = n[i],
                u = t[i];
              if ((u === e && !(i in t)) || !o(u)) return !1;
            }
            return !0;
          }
          function ur(n, r, a) {
            if ("function" != typeof n) throw new xe(t);
            return Ei(function () {
              n.apply(e, a);
            }, r);
          }
          function lr(e, t, n, r) {
            var a = -1,
              i = Et,
              o = !0,
              u = e.length,
              l = [],
              s = t.length;
            if (!u) return l;
            n && (t = Pt(t, Yt(n))),
              r
                ? ((i = xt), (o = !1))
                : t.length >= 200 && ((i = qt), (o = !1), (t = new Hn(t)));
            e: for (; ++a < u; ) {
              var c = e[a],
                f = null == n ? c : n(c);
              if (((c = r || 0 !== c ? c : 0), o && f == f)) {
                for (var d = s; d--; ) if (t[d] === f) continue e;
                l.push(c);
              } else i(t, f, r) || l.push(c);
            }
            return l;
          }
          (Ln.templateSettings = {
            escape: Y,
            evaluate: W,
            interpolate: q,
            variable: "",
            imports: { _: Ln },
          }),
            (Ln.prototype = jn.prototype),
            (Ln.prototype.constructor = Ln),
            (zn.prototype = Bn(jn.prototype)),
            (zn.prototype.constructor = zn),
            (Un.prototype = Bn(jn.prototype)),
            (Un.prototype.constructor = Un),
            (Gn.prototype.clear = function () {
              (this.__data__ = En ? En(null) : {}), (this.size = 0);
            }),
            (Gn.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            (Gn.prototype.get = function (t) {
              var n = this.__data__;
              if (En) {
                var a = n[t];
                return a === r ? e : a;
              }
              return Re.call(n, t) ? n[t] : e;
            }),
            (Gn.prototype.has = function (t) {
              var n = this.__data__;
              return En ? n[t] !== e : Re.call(n, t);
            }),
            (Gn.prototype.set = function (t, n) {
              var a = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (a[t] = En && n === e ? r : n),
                this
              );
            }),
            (Vn.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Vn.prototype.delete = function (e) {
              var t = this.__data__,
                n = Zn(t, e);
              return !(
                n < 0 ||
                (n == t.length - 1 ? t.pop() : Ke.call(t, n, 1), --this.size, 0)
              );
            }),
            (Vn.prototype.get = function (t) {
              var n = this.__data__,
                r = Zn(n, t);
              return r < 0 ? e : n[r][1];
            }),
            (Vn.prototype.has = function (e) {
              return Zn(this.__data__, e) > -1;
            }),
            (Vn.prototype.set = function (e, t) {
              var n = this.__data__,
                r = Zn(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            }),
            ($n.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new Gn(),
                  map: new (wn || Vn)(),
                  string: new Gn(),
                });
            }),
            ($n.prototype.delete = function (e) {
              var t = ii(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            ($n.prototype.get = function (e) {
              return ii(this, e).get(e);
            }),
            ($n.prototype.has = function (e) {
              return ii(this, e).has(e);
            }),
            ($n.prototype.set = function (e, t) {
              var n = ii(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (Hn.prototype.add = Hn.prototype.push =
              function (e) {
                return this.__data__.set(e, r), this;
              }),
            (Hn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Yn.prototype.clear = function () {
              (this.__data__ = new Vn()), (this.size = 0);
            }),
            (Yn.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (Yn.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (Yn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Yn.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof Vn) {
                var r = n.__data__;
                if (!wn || r.length < 199)
                  return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new $n(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var sr = Aa(vr),
            cr = Aa(yr, !0);
          function fr(e, t) {
            var n = !0;
            return (
              sr(e, function (e, r, a) {
                return (n = !!t(e, r, a));
              }),
              n
            );
          }
          function dr(t, n, r) {
            for (var a = -1, i = t.length; ++a < i; ) {
              var o = t[a],
                u = n(o);
              if (null != u && (l === e ? u == u && !ou(u) : r(u, l)))
                var l = u,
                  s = o;
            }
            return s;
          }
          function hr(e, t) {
            var n = [];
            return (
              sr(e, function (e, r, a) {
                t(e, r, a) && n.push(e);
              }),
              n
            );
          }
          function pr(e, t, n, r, a) {
            var i = -1,
              o = e.length;
            for (n || (n = hi), a || (a = []); ++i < o; ) {
              var u = e[i];
              t > 0 && n(u)
                ? t > 1
                  ? pr(u, t - 1, n, r, a)
                  : At(a, u)
                : r || (a[a.length] = u);
            }
            return a;
          }
          var mr = Ma(),
            gr = Ma(!0);
          function vr(e, t) {
            return e && mr(e, t, Au);
          }
          function yr(e, t) {
            return e && gr(e, t, Au);
          }
          function br(e, t) {
            return Ct(t, function (t) {
              return Ko(e[t]);
            });
          }
          function _r(t, n) {
            for (var r = 0, a = (n = ma(n, t)).length; null != t && r < a; )
              t = t[Oi(n[r++])];
            return r && r == a ? t : e;
          }
          function Sr(e, t, n) {
            var r = t(e);
            return Go(e) ? r : At(r, n(e));
          }
          function wr(t) {
            return null == t
              ? t === e
                ? "[object Undefined]"
                : "[object Null]"
              : ot && ot in ke(t)
              ? (function (t) {
                  var r = Re.call(t, ot),
                    a = t[ot];
                  try {
                    t[ot] = e;
                    var i = !0;
                  } catch (n) {}
                  var o = De.call(t);
                  return i && (r ? (t[ot] = a) : delete t[ot]), o;
                })(t)
              : ((n = t), De.call(n));
            var n;
          }
          function Tr(e, t) {
            return e > t;
          }
          function kr(e, t) {
            return null != e && Re.call(e, t);
          }
          function Cr(e, t) {
            return null != e && t in ke(e);
          }
          function Er(t, n, r) {
            for (
              var a = r ? xt : Et,
                i = t[0].length,
                o = t.length,
                u = o,
                l = be(o),
                s = 1 / 0,
                c = [];
              u--;

            ) {
              var f = t[u];
              u && n && (f = Pt(f, Yt(n))),
                (s = gn(f.length, s)),
                (l[u] =
                  !r && (n || (i >= 120 && f.length >= 120))
                    ? new Hn(u && f)
                    : e);
            }
            f = t[0];
            var d = -1,
              h = l[0];
            e: for (; ++d < i && c.length < s; ) {
              var p = f[d],
                m = n ? n(p) : p;
              if (((p = r || 0 !== p ? p : 0), !(h ? qt(h, m) : a(c, m, r)))) {
                for (u = o; --u; ) {
                  var g = l[u];
                  if (!(g ? qt(g, m) : a(t[u], m, r))) continue e;
                }
                h && h.push(m), c.push(p);
              }
            }
            return c;
          }
          function xr(t, n, r) {
            var a = null == (t = Ti(t, (n = ma(n, t)))) ? t : t[Oi(Wi(n))];
            return null == a ? e : _t(a, t, r);
          }
          function Pr(e) {
            return Zo(e) && wr(e) == d;
          }
          function Ar(t, n, r, a, i) {
            return (
              t === n ||
              (null == t || null == n || (!Zo(t) && !Zo(n))
                ? t != t && n != n
                : (function (t, n, r, a, i, o) {
                    var u = Go(t),
                      l = Go(n),
                      s = u ? h : ci(t),
                      c = l ? h : ci(n),
                      f = (s = s == d ? S : s) == S,
                      v = (c = c == d ? S : c) == S,
                      y = s == c;
                    if (y && Yo(t)) {
                      if (!Yo(n)) return !1;
                      (u = !0), (f = !1);
                    }
                    if (y && !f)
                      return (
                        o || (o = new Yn()),
                        u || uu(t)
                          ? Ja(t, n, r, a, i, o)
                          : (function (e, t, n, r, a, i, o) {
                              switch (n) {
                                case A:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    return !1;
                                  (e = e.buffer), (t = t.buffer);
                                case P:
                                  return !(
                                    e.byteLength != t.byteLength ||
                                    !i(new Ge(e), new Ge(t))
                                  );
                                case p:
                                case m:
                                case _:
                                  return Bo(+e, +t);
                                case g:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case T:
                                case C:
                                  return e == t + "";
                                case b:
                                  var u = tn;
                                case k:
                                  var l = 1 & r;
                                  if ((u || (u = an), e.size != t.size && !l))
                                    return !1;
                                  var s = o.get(e);
                                  if (s) return s == t;
                                  (r |= 2), o.set(e, t);
                                  var c = Ja(u(e), u(t), r, a, i, o);
                                  return o.delete(e), c;
                                case E:
                                  if (Fn) return Fn.call(e) == Fn.call(t);
                              }
                              return !1;
                            })(t, n, s, r, a, i, o)
                      );
                    if (!(1 & r)) {
                      var w = f && Re.call(t, "__wrapped__"),
                        x = v && Re.call(n, "__wrapped__");
                      if (w || x) {
                        var M = w ? t.value() : t,
                          N = x ? n.value() : n;
                        return o || (o = new Yn()), i(M, N, r, a, o);
                      }
                    }
                    return (
                      !!y &&
                      (o || (o = new Yn()),
                      (function (t, n, r, a, i, o) {
                        var u = 1 & r,
                          l = Za(t),
                          s = l.length;
                        if (s != Za(n).length && !u) return !1;
                        for (var c = s; c--; ) {
                          var f = l[c];
                          if (!(u ? f in n : Re.call(n, f))) return !1;
                        }
                        var d = o.get(t),
                          h = o.get(n);
                        if (d && h) return d == n && h == t;
                        var p = !0;
                        o.set(t, n), o.set(n, t);
                        for (var m = u; ++c < s; ) {
                          var g = t[(f = l[c])],
                            v = n[f];
                          if (a)
                            var y = u
                              ? a(v, g, f, n, t, o)
                              : a(g, v, f, t, n, o);
                          if (!(y === e ? g === v || i(g, v, r, a, o) : y)) {
                            p = !1;
                            break;
                          }
                          m || (m = "constructor" == f);
                        }
                        if (p && !m) {
                          var b = t.constructor,
                            _ = n.constructor;
                          b == _ ||
                            !("constructor" in t) ||
                            !("constructor" in n) ||
                            ("function" == typeof b &&
                              b instanceof b &&
                              "function" == typeof _ &&
                              _ instanceof _) ||
                            (p = !1);
                        }
                        return o.delete(t), o.delete(n), p;
                      })(t, n, r, a, i, o))
                    );
                  })(t, n, r, a, Ar, i))
            );
          }
          function Mr(t, n, r, a) {
            var i = r.length,
              o = i,
              u = !a;
            if (null == t) return !o;
            for (t = ke(t); i--; ) {
              var l = r[i];
              if (u && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++i < o; ) {
              var s = (l = r[i])[0],
                c = t[s],
                f = l[1];
              if (u && l[2]) {
                if (c === e && !(s in t)) return !1;
              } else {
                var d = new Yn();
                if (a) var h = a(c, f, s, t, n, d);
                if (!(h === e ? Ar(f, c, 3, a, d) : h)) return !1;
              }
            }
            return !0;
          }
          function Nr(e) {
            return (
              !(!Xo(e) || ((t = e), Fe && Fe in t)) &&
              (Ko(e) ? je : de).test(Fi(e))
            );
            var t;
          }
          function Ir(e) {
            return "function" == typeof e
              ? e
              : null == e
              ? tl
              : "object" == typeof e
              ? Go(e)
                ? Lr(e[0], e[1])
                : Dr(e)
              : cl(e);
          }
          function Rr(e) {
            if (!bi(e)) return pn(e);
            var t = [];
            for (var n in ke(e))
              Re.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function Or(e, t) {
            return e < t;
          }
          function Fr(e, t) {
            var n = -1,
              r = $o(e) ? be(e.length) : [];
            return (
              sr(e, function (e, a, i) {
                r[++n] = t(e, a, i);
              }),
              r
            );
          }
          function Dr(e) {
            var t = oi(e);
            return 1 == t.length && t[0][2]
              ? Si(t[0][0], t[0][1])
              : function (n) {
                  return n === e || Mr(n, e, t);
                };
          }
          function Lr(t, n) {
            return gi(t) && _i(n)
              ? Si(Oi(t), n)
              : function (r) {
                  var a = ku(r, t);
                  return a === e && a === n ? Cu(r, t) : Ar(n, a, 3);
                };
          }
          function Br(t, n, r, a, i) {
            t !== n &&
              mr(
                n,
                function (o, u) {
                  if ((i || (i = new Yn()), Xo(o)))
                    !(function (t, n, r, a, i, o, u) {
                      var l = ki(t, r),
                        s = ki(n, r),
                        c = u.get(s);
                      if (c) Jn(t, r, c);
                      else {
                        var f = o ? o(l, s, r + "", t, n, u) : e,
                          d = f === e;
                        if (d) {
                          var h = Go(s),
                            p = !h && Yo(s),
                            m = !h && !p && uu(s);
                          (f = s),
                            h || p || m
                              ? Go(l)
                                ? (f = l)
                                : Ho(l)
                                ? (f = Ca(l))
                                : p
                                ? ((d = !1), (f = ba(s, !0)))
                                : m
                                ? ((d = !1), (f = Sa(s, !0)))
                                : (f = [])
                              : nu(s) || Uo(s)
                              ? ((f = l),
                                Uo(l)
                                  ? (f = mu(l))
                                  : (Xo(l) && !Ko(l)) || (f = di(s)))
                              : (d = !1);
                        }
                        d && (u.set(s, f), i(f, s, a, o, u), u.delete(s)),
                          Jn(t, r, f);
                      }
                    })(t, n, u, r, Br, a, i);
                  else {
                    var l = a ? a(ki(t, u), o, u + "", t, n, i) : e;
                    l === e && (l = o), Jn(t, u, l);
                  }
                },
                Mu
              );
          }
          function jr(t, n) {
            var r = t.length;
            if (r) return pi((n += n < 0 ? r : 0), r) ? t[n] : e;
          }
          function zr(e, t, n) {
            t = t.length
              ? Pt(t, function (e) {
                  return Go(e)
                    ? function (t) {
                        return _r(t, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [tl];
            var r = -1;
            return (
              (t = Pt(t, Yt(ai()))),
              (function (e, t) {
                var r = e.length;
                for (
                  e.sort(function (e, t) {
                    return (function (e, t, n) {
                      for (
                        var r = -1,
                          a = e.criteria,
                          i = t.criteria,
                          o = a.length,
                          u = n.length;
                        ++r < o;

                      ) {
                        var l = wa(a[r], i[r]);
                        if (l)
                          return r >= u ? l : l * ("desc" == n[r] ? -1 : 1);
                      }
                      return e.index - t.index;
                    })(e, t, n);
                  });
                  r--;

                )
                  e[r] = e[r].value;
                return e;
              })(
                Fr(e, function (e, n, a) {
                  return {
                    criteria: Pt(t, function (t) {
                      return t(e);
                    }),
                    index: ++r,
                    value: e,
                  };
                })
              )
            );
          }
          function Ur(e, t, n) {
            for (var r = -1, a = t.length, i = {}; ++r < a; ) {
              var o = t[r],
                u = _r(e, o);
              n(u, o) && Kr(i, ma(o, e), u);
            }
            return i;
          }
          function Gr(e, t, n, r) {
            var a = r ? Lt : Dt,
              i = -1,
              o = t.length,
              u = e;
            for (e === t && (t = Ca(t)), n && (u = Pt(e, Yt(n))); ++i < o; )
              for (
                var l = 0, s = t[i], c = n ? n(s) : s;
                (l = a(u, c, l, r)) > -1;

              )
                u !== e && Ke.call(u, l, 1), Ke.call(e, l, 1);
            return e;
          }
          function Vr(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
              var a = t[n];
              if (n == r || a !== i) {
                var i = a;
                pi(a) ? Ke.call(e, a, 1) : ua(e, a);
              }
            }
            return e;
          }
          function $r(e, t) {
            return e + Rt(bn() * (t - e + 1));
          }
          function Hr(e, t) {
            var n = "";
            if (!e || t < 1 || t > l) return n;
            do {
              t % 2 && (n += e), (t = Rt(t / 2)) && (e += e);
            } while (t);
            return n;
          }
          function Yr(e, t) {
            return xi(wi(e, t, tl), e + "");
          }
          function Wr(e) {
            return qn(Bu(e));
          }
          function qr(e, t) {
            var n = Bu(e);
            return Mi(n, ar(t, 0, n.length));
          }
          function Kr(t, n, r, a) {
            if (!Xo(t)) return t;
            for (
              var i = -1, o = (n = ma(n, t)).length, u = o - 1, l = t;
              null != l && ++i < o;

            ) {
              var s = Oi(n[i]),
                c = r;
              if ("__proto__" === s || "constructor" === s || "prototype" === s)
                return t;
              if (i != u) {
                var f = l[s];
                (c = a ? a(f, s, l) : e) === e &&
                  (c = Xo(f) ? f : pi(n[i + 1]) ? [] : {});
              }
              Xn(l, s, c), (l = l[s]);
            }
            return t;
          }
          var Qr = xn
              ? function (e, t) {
                  return xn.set(e, t), e;
                }
              : tl,
            Jr = ut
              ? function (e, t) {
                  return ut(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Xu(t),
                    writable: !0,
                  });
                }
              : tl;
          function Xr(e) {
            return Mi(Bu(e));
          }
          function Zr(e, t, n) {
            var r = -1,
              a = e.length;
            t < 0 && (t = -t > a ? 0 : a + t),
              (n = n > a ? a : n) < 0 && (n += a),
              (a = t > n ? 0 : (n - t) >>> 0),
              (t >>>= 0);
            for (var i = be(a); ++r < a; ) i[r] = e[r + t];
            return i;
          }
          function ea(e, t) {
            var n;
            return (
              sr(e, function (e, r, a) {
                return !(n = t(e, r, a));
              }),
              !!n
            );
          }
          function ta(e, t, n) {
            var r = 0,
              a = null == e ? r : e.length;
            if ("number" == typeof t && t == t && a <= 2147483647) {
              for (; r < a; ) {
                var i = (r + a) >>> 1,
                  o = e[i];
                null !== o && !ou(o) && (n ? o <= t : o < t)
                  ? (r = i + 1)
                  : (a = i);
              }
              return a;
            }
            return na(e, t, tl, n);
          }
          function na(t, n, r, a) {
            var i = 0,
              o = null == t ? 0 : t.length;
            if (0 === o) return 0;
            for (
              var u = (n = r(n)) != n, l = null === n, s = ou(n), c = n === e;
              i < o;

            ) {
              var f = Rt((i + o) / 2),
                d = r(t[f]),
                h = d !== e,
                p = null === d,
                m = d == d,
                g = ou(d);
              if (u) var v = a || m;
              else
                v = c
                  ? m && (a || h)
                  : l
                  ? m && h && (a || !p)
                  : s
                  ? m && h && !p && (a || !g)
                  : !p && !g && (a ? d <= n : d < n);
              v ? (i = f + 1) : (o = f);
            }
            return gn(o, 4294967294);
          }
          function ra(e, t) {
            for (var n = -1, r = e.length, a = 0, i = []; ++n < r; ) {
              var o = e[n],
                u = t ? t(o) : o;
              if (!n || !Bo(u, l)) {
                var l = u;
                i[a++] = 0 === o ? 0 : o;
              }
            }
            return i;
          }
          function aa(e) {
            return "number" == typeof e ? e : ou(e) ? s : +e;
          }
          function ia(e) {
            if ("string" == typeof e) return e;
            if (Go(e)) return Pt(e, ia) + "";
            if (ou(e)) return Dn ? Dn.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function oa(e, t, n) {
            var r = -1,
              a = Et,
              i = e.length,
              o = !0,
              u = [],
              l = u;
            if (n) (o = !1), (a = xt);
            else if (i >= 200) {
              var s = t ? null : Ha(e);
              if (s) return an(s);
              (o = !1), (a = qt), (l = new Hn());
            } else l = t ? [] : u;
            e: for (; ++r < i; ) {
              var c = e[r],
                f = t ? t(c) : c;
              if (((c = n || 0 !== c ? c : 0), o && f == f)) {
                for (var d = l.length; d--; ) if (l[d] === f) continue e;
                t && l.push(f), u.push(c);
              } else a(l, f, n) || (l !== u && l.push(f), u.push(c));
            }
            return u;
          }
          function ua(e, t) {
            return null == (e = Ti(e, (t = ma(t, e)))) || delete e[Oi(Wi(t))];
          }
          function la(e, t, n, r) {
            return Kr(e, t, n(_r(e, t)), r);
          }
          function sa(e, t, n, r) {
            for (
              var a = e.length, i = r ? a : -1;
              (r ? i-- : ++i < a) && t(e[i], i, e);

            );
            return n
              ? Zr(e, r ? 0 : i, r ? i + 1 : a)
              : Zr(e, r ? i + 1 : 0, r ? a : i);
          }
          function ca(e, t) {
            var n = e;
            return (
              n instanceof Un && (n = n.value()),
              Mt(
                t,
                function (e, t) {
                  return t.func.apply(t.thisArg, At([e], t.args));
                },
                n
              )
            );
          }
          function fa(e, t, n) {
            var r = e.length;
            if (r < 2) return r ? oa(e[0]) : [];
            for (var a = -1, i = be(r); ++a < r; )
              for (var o = e[a], u = -1; ++u < r; )
                u != a && (i[a] = lr(i[a] || o, e[u], t, n));
            return oa(pr(i, 1), t, n);
          }
          function da(t, n, r) {
            for (var a = -1, i = t.length, o = n.length, u = {}; ++a < i; ) {
              var l = a < o ? n[a] : e;
              r(u, t[a], l);
            }
            return u;
          }
          function ha(e) {
            return Ho(e) ? e : [];
          }
          function pa(e) {
            return "function" == typeof e ? e : tl;
          }
          function ma(e, t) {
            return Go(e) ? e : gi(e, t) ? [e] : Ri(gu(e));
          }
          var ga = Yr;
          function va(t, n, r) {
            var a = t.length;
            return (r = r === e ? a : r), !n && r >= a ? t : Zr(t, n, r);
          }
          var ya =
            st ||
            function (e) {
              return lt.clearTimeout(e);
            };
          function ba(e, t) {
            if (t) return e.slice();
            var n = e.length,
              r = Ve ? Ve(n) : new e.constructor(n);
            return e.copy(r), r;
          }
          function _a(e) {
            var t = new e.constructor(e.byteLength);
            return new Ge(t).set(new Ge(e)), t;
          }
          function Sa(e, t) {
            var n = t ? _a(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
          }
          function wa(t, n) {
            if (t !== n) {
              var r = t !== e,
                a = null === t,
                i = t == t,
                o = ou(t),
                u = n !== e,
                l = null === n,
                s = n == n,
                c = ou(n);
              if (
                (!l && !c && !o && t > n) ||
                (o && u && s && !l && !c) ||
                (a && u && s) ||
                (!r && s) ||
                !i
              )
                return 1;
              if (
                (!a && !o && !c && t < n) ||
                (c && r && i && !a && !o) ||
                (l && r && i) ||
                (!u && i) ||
                !s
              )
                return -1;
            }
            return 0;
          }
          function Ta(e, t, n, r) {
            for (
              var a = -1,
                i = e.length,
                o = n.length,
                u = -1,
                l = t.length,
                s = mn(i - o, 0),
                c = be(l + s),
                f = !r;
              ++u < l;

            )
              c[u] = t[u];
            for (; ++a < o; ) (f || a < i) && (c[n[a]] = e[a]);
            for (; s--; ) c[u++] = e[a++];
            return c;
          }
          function ka(e, t, n, r) {
            for (
              var a = -1,
                i = e.length,
                o = -1,
                u = n.length,
                l = -1,
                s = t.length,
                c = mn(i - u, 0),
                f = be(c + s),
                d = !r;
              ++a < c;

            )
              f[a] = e[a];
            for (var h = a; ++l < s; ) f[h + l] = t[l];
            for (; ++o < u; ) (d || a < i) && (f[h + n[o]] = e[a++]);
            return f;
          }
          function Ca(e, t) {
            var n = -1,
              r = e.length;
            for (t || (t = be(r)); ++n < r; ) t[n] = e[n];
            return t;
          }
          function Ea(t, n, r, a) {
            var i = !r;
            r || (r = {});
            for (var o = -1, u = n.length; ++o < u; ) {
              var l = n[o],
                s = a ? a(r[l], t[l], l, r, t) : e;
              s === e && (s = t[l]), i ? nr(r, l, s) : Xn(r, l, s);
            }
            return r;
          }
          function xa(e, t) {
            return function (n, r) {
              var a = Go(n) ? St : er,
                i = t ? t() : {};
              return a(n, e, ai(r, 2), i);
            };
          }
          function Pa(t) {
            return Yr(function (n, r) {
              var a = -1,
                i = r.length,
                o = i > 1 ? r[i - 1] : e,
                u = i > 2 ? r[2] : e;
              for (
                o = t.length > 3 && "function" == typeof o ? (i--, o) : e,
                  u && mi(r[0], r[1], u) && ((o = i < 3 ? e : o), (i = 1)),
                  n = ke(n);
                ++a < i;

              ) {
                var l = r[a];
                l && t(n, l, a, o);
              }
              return n;
            });
          }
          function Aa(e, t) {
            return function (n, r) {
              if (null == n) return n;
              if (!$o(n)) return e(n, r);
              for (
                var a = n.length, i = t ? a : -1, o = ke(n);
                (t ? i-- : ++i < a) && !1 !== r(o[i], i, o);

              );
              return n;
            };
          }
          function Ma(e) {
            return function (t, n, r) {
              for (var a = -1, i = ke(t), o = r(t), u = o.length; u--; ) {
                var l = o[e ? u : ++a];
                if (!1 === n(i[l], l, i)) break;
              }
              return t;
            };
          }
          function Na(t) {
            return function (n) {
              var r = en((n = gu(n))) ? un(n) : e,
                a = r ? r[0] : n.charAt(0),
                i = r ? va(r, 1).join("") : n.slice(1);
              return a[t]() + i;
            };
          }
          function Ia(e) {
            return function (t) {
              return Mt(Ku(Uu(t).replace(We, "")), e, "");
            };
          }
          function Ra(e) {
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3]);
                case 5:
                  return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                  return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
              }
              var n = Bn(e.prototype),
                r = e.apply(n, t);
              return Xo(r) ? r : n;
            };
          }
          function Oa(t) {
            return function (n, r, a) {
              var i = ke(n);
              if (!$o(n)) {
                var o = ai(r, 3);
                (n = Au(n)),
                  (r = function (e) {
                    return o(i[e], e, i);
                  });
              }
              var u = t(n, r, a);
              return u > -1 ? i[o ? n[u] : u] : e;
            };
          }
          function Fa(n) {
            return Xa(function (r) {
              var a = r.length,
                i = a,
                o = zn.prototype.thru;
              for (n && r.reverse(); i--; ) {
                var u = r[i];
                if ("function" != typeof u) throw new xe(t);
                if (o && !l && "wrapper" == ni(u)) var l = new zn([], !0);
              }
              for (i = l ? i : a; ++i < a; ) {
                var s = ni((u = r[i])),
                  c = "wrapper" == s ? ti(u) : e;
                l =
                  c && vi(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9]
                    ? l[ni(c[0])].apply(l, c[3])
                    : 1 == u.length && vi(u)
                    ? l[s]()
                    : l.thru(u);
              }
              return function () {
                var e = arguments,
                  t = e[0];
                if (l && 1 == e.length && Go(t)) return l.plant(t).value();
                for (var n = 0, i = a ? r[n].apply(this, e) : t; ++n < a; )
                  i = r[n].call(this, i);
                return i;
              };
            });
          }
          function Da(t, n, r, a, i, u, l, s, c, f) {
            var d = n & o,
              h = 1 & n,
              p = 2 & n,
              m = 24 & n,
              g = 512 & n,
              v = p ? e : Ra(t);
            return function o() {
              for (var y = arguments.length, b = be(y), _ = y; _--; )
                b[_] = arguments[_];
              if (m)
                var S = ri(o),
                  w = (function (e, t) {
                    for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                    return r;
                  })(b, S);
              if (
                (a && (b = Ta(b, a, i, m)),
                u && (b = ka(b, u, l, m)),
                (y -= w),
                m && y < f)
              ) {
                var T = rn(b, S);
                return Va(t, n, Da, o.placeholder, r, b, T, s, c, f - y);
              }
              var k = h ? r : this,
                C = p ? k[t] : t;
              return (
                (y = b.length),
                s
                  ? (b = (function (t, n) {
                      for (
                        var r = t.length, a = gn(n.length, r), i = Ca(t);
                        a--;

                      ) {
                        var o = n[a];
                        t[a] = pi(o, r) ? i[o] : e;
                      }
                      return t;
                    })(b, s))
                  : g && y > 1 && b.reverse(),
                d && c < y && (b.length = c),
                this && this !== lt && this instanceof o && (C = v || Ra(C)),
                C.apply(k, b)
              );
            };
          }
          function La(e, t) {
            return function (n, r) {
              return (
                (a = n),
                (i = e),
                (o = t(r)),
                (u = {}),
                vr(a, function (e, t, n) {
                  i(u, o(e), t, n);
                }),
                u
              );
              var a, i, o, u;
            };
          }
          function Ba(t, n) {
            return function (r, a) {
              var i;
              if (r === e && a === e) return n;
              if ((r !== e && (i = r), a !== e)) {
                if (i === e) return a;
                "string" == typeof r || "string" == typeof a
                  ? ((r = ia(r)), (a = ia(a)))
                  : ((r = aa(r)), (a = aa(a))),
                  (i = t(r, a));
              }
              return i;
            };
          }
          function ja(e) {
            return Xa(function (t) {
              return (
                (t = Pt(t, Yt(ai()))),
                Yr(function (n) {
                  var r = this;
                  return e(t, function (e) {
                    return _t(e, r, n);
                  });
                })
              );
            });
          }
          function za(t, n) {
            var r = (n = n === e ? " " : ia(n)).length;
            if (r < 2) return r ? Hr(n, t) : n;
            var a = Hr(n, ht(t / on(n)));
            return en(n) ? va(un(a), 0, t).join("") : a.slice(0, t);
          }
          function Ua(t) {
            return function (n, r, a) {
              return (
                a && "number" != typeof a && mi(n, r, a) && (r = a = e),
                (n = fu(n)),
                r === e ? ((r = n), (n = 0)) : (r = fu(r)),
                (function (e, t, n, r) {
                  for (
                    var a = -1, i = mn(ht((t - e) / (n || 1)), 0), o = be(i);
                    i--;

                  )
                    (o[r ? i : ++a] = e), (e += n);
                  return o;
                })(n, r, (a = a === e ? (n < r ? 1 : -1) : fu(a)), t)
              );
            };
          }
          function Ga(e) {
            return function (t, n) {
              return (
                ("string" == typeof t && "string" == typeof n) ||
                  ((t = pu(t)), (n = pu(n))),
                e(t, n)
              );
            };
          }
          function Va(t, n, r, a, o, u, l, s, c, f) {
            var d = 8 & n;
            (n |= d ? i : 64), 4 & (n &= ~(d ? 64 : i)) || (n &= -4);
            var h = [
                t,
                n,
                o,
                d ? u : e,
                d ? l : e,
                d ? e : u,
                d ? e : l,
                s,
                c,
                f,
              ],
              p = r.apply(e, h);
            return vi(t) && Ci(p, h), (p.placeholder = a), Pi(p, t, n);
          }
          function $a(e) {
            var t = Te[e];
            return function (e, n) {
              if (
                ((e = pu(e)), (n = null == n ? 0 : gn(du(n), 292)) && dn(e))
              ) {
                var r = (gu(e) + "e").split("e");
                return +(
                  (r = (gu(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                  "e" +
                  (+r[1] - n)
                );
              }
              return t(e);
            };
          }
          var Ha =
            kn && 1 / an(new kn([, -0]))[1] == u
              ? function (e) {
                  return new kn(e);
                }
              : ol;
          function Ya(e) {
            return function (t) {
              var n,
                r = ci(t);
              return r == b
                ? tn(t)
                : r == k
                ? (function (e) {
                    var t = -1,
                      n = Array(e.size);
                    return (
                      e.forEach(function (e) {
                        n[++t] = [e, e];
                      }),
                      n
                    );
                  })(t)
                : ((n = t),
                  Pt(e(t), function (e) {
                    return [e, n[e]];
                  }));
            };
          }
          function Wa(n, r, u, l, s, c, f, d) {
            var h = 2 & r;
            if (!h && "function" != typeof n) throw new xe(t);
            var p = l ? l.length : 0;
            if (
              (p || ((r &= -97), (l = s = e)),
              (f = f === e ? f : mn(du(f), 0)),
              (d = d === e ? d : du(d)),
              (p -= s ? s.length : 0),
              64 & r)
            ) {
              var m = l,
                g = s;
              l = s = e;
            }
            var v,
              y,
              b,
              _,
              S = h ? e : ti(n),
              w = [n, r, u, l, s, m, g, c, f, d];
            if (
              (S &&
                (function (e, t) {
                  var n = e[1],
                    r = t[1],
                    i = n | r,
                    u = i < 131,
                    l =
                      (r == o && 8 == n) ||
                      (r == o && 256 == n && e[7].length <= t[8]) ||
                      (384 == r && t[7].length <= t[8] && 8 == n);
                  if (!u && !l) return e;
                  1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                  var s = t[3];
                  if (s) {
                    var c = e[3];
                    (e[3] = c ? Ta(c, s, t[4]) : s),
                      (e[4] = c ? rn(e[3], a) : t[4]);
                  }
                  (s = t[5]) &&
                    ((c = e[5]),
                    (e[5] = c ? ka(c, s, t[6]) : s),
                    (e[6] = c ? rn(e[5], a) : t[6])),
                    (s = t[7]) && (e[7] = s),
                    r & o && (e[8] = null == e[8] ? t[8] : gn(e[8], t[8])),
                    null == e[9] && (e[9] = t[9]),
                    (e[0] = t[0]),
                    (e[1] = i);
                })(w, S),
              (n = w[0]),
              (r = w[1]),
              (u = w[2]),
              (l = w[3]),
              (s = w[4]),
              !(d = w[9] = w[9] === e ? (h ? 0 : n.length) : mn(w[9] - p, 0)) &&
                24 & r &&
                (r &= -25),
              r && 1 != r)
            )
              T =
                8 == r || 16 == r
                  ? ((y = r),
                    (b = d),
                    (_ = Ra((v = n))),
                    function t() {
                      for (
                        var n = arguments.length, r = be(n), a = n, i = ri(t);
                        a--;

                      )
                        r[a] = arguments[a];
                      var o =
                        n < 3 && r[0] !== i && r[n - 1] !== i ? [] : rn(r, i);
                      return (n -= o.length) < b
                        ? Va(v, y, Da, t.placeholder, e, r, o, e, e, b - n)
                        : _t(
                            this && this !== lt && this instanceof t ? _ : v,
                            this,
                            r
                          );
                    })
                  : (r != i && 33 != r) || s.length
                  ? Da.apply(e, w)
                  : (function (e, t, n, r) {
                      var a = 1 & t,
                        i = Ra(e);
                      return function t() {
                        for (
                          var o = -1,
                            u = arguments.length,
                            l = -1,
                            s = r.length,
                            c = be(s + u),
                            f =
                              this && this !== lt && this instanceof t ? i : e;
                          ++l < s;

                        )
                          c[l] = r[l];
                        for (; u--; ) c[l++] = arguments[++o];
                        return _t(f, a ? n : this, c);
                      };
                    })(n, r, u, l);
            else
              var T = (function (e, t, n) {
                var r = 1 & t,
                  a = Ra(e);
                return function t() {
                  return (
                    this && this !== lt && this instanceof t ? a : e
                  ).apply(r ? n : this, arguments);
                };
              })(n, r, u);
            return Pi((S ? Qr : Ci)(T, w), n, r);
          }
          function qa(t, n, r, a) {
            return t === e || (Bo(t, Me[r]) && !Re.call(a, r)) ? n : t;
          }
          function Ka(t, n, r, a, i, o) {
            return (
              Xo(t) && Xo(n) && (o.set(n, t), Br(t, n, e, Ka, o), o.delete(n)),
              t
            );
          }
          function Qa(t) {
            return nu(t) ? e : t;
          }
          function Ja(t, n, r, a, i, o) {
            var u = 1 & r,
              l = t.length,
              s = n.length;
            if (l != s && !(u && s > l)) return !1;
            var c = o.get(t),
              f = o.get(n);
            if (c && f) return c == n && f == t;
            var d = -1,
              h = !0,
              p = 2 & r ? new Hn() : e;
            for (o.set(t, n), o.set(n, t); ++d < l; ) {
              var m = t[d],
                g = n[d];
              if (a) var v = u ? a(g, m, d, n, t, o) : a(m, g, d, t, n, o);
              if (v !== e) {
                if (v) continue;
                h = !1;
                break;
              }
              if (p) {
                if (
                  !It(n, function (e, t) {
                    if (!qt(p, t) && (m === e || i(m, e, r, a, o)))
                      return p.push(t);
                  })
                ) {
                  h = !1;
                  break;
                }
              } else if (m !== g && !i(m, g, r, a, o)) {
                h = !1;
                break;
              }
            }
            return o.delete(t), o.delete(n), h;
          }
          function Xa(t) {
            return xi(wi(t, e, Gi), t + "");
          }
          function Za(e) {
            return Sr(e, Au, li);
          }
          function ei(e) {
            return Sr(e, Mu, si);
          }
          var ti = xn
            ? function (e) {
                return xn.get(e);
              }
            : ol;
          function ni(e) {
            for (
              var t = e.name + "", n = Pn[t], r = Re.call(Pn, t) ? n.length : 0;
              r--;

            ) {
              var a = n[r],
                i = a.func;
              if (null == i || i == e) return a.name;
            }
            return t;
          }
          function ri(e) {
            return (Re.call(Ln, "placeholder") ? Ln : e).placeholder;
          }
          function ai() {
            var e = Ln.iteratee || nl;
            return (
              (e = e === nl ? Ir : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function ii(e, t) {
            var n,
              r,
              a = e.__data__;
            return (
              "string" == (r = typeof (n = t)) ||
              "number" == r ||
              "symbol" == r ||
              "boolean" == r
                ? "__proto__" !== n
                : null === n
            )
              ? a["string" == typeof t ? "string" : "hash"]
              : a.map;
          }
          function oi(e) {
            for (var t = Au(e), n = t.length; n--; ) {
              var r = t[n],
                a = e[r];
              t[n] = [r, a, _i(a)];
            }
            return t;
          }
          function ui(t, n) {
            var r,
              a,
              i = ((a = n), null == (r = t) ? e : r[a]);
            return Nr(i) ? i : e;
          }
          var li = Ut
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = ke(e)),
                      Ct(Ut(e), function (t) {
                        return Ye.call(e, t);
                      }));
                }
              : hl,
            si = Ut
              ? function (e) {
                  for (var t = []; e; ) At(t, li(e)), (e = $e(e));
                  return t;
                }
              : hl,
            ci = wr;
          function fi(e, t, n) {
            for (var r = -1, a = (t = ma(t, e)).length, i = !1; ++r < a; ) {
              var o = Oi(t[r]);
              if (!(i = null != e && n(e, o))) break;
              e = e[o];
            }
            return i || ++r != a
              ? i
              : !!(a = null == e ? 0 : e.length) &&
                  Jo(a) &&
                  pi(o, a) &&
                  (Go(e) || Uo(e));
          }
          function di(e) {
            return "function" != typeof e.constructor || bi(e) ? {} : Bn($e(e));
          }
          function hi(e) {
            return Go(e) || Uo(e) || !!(Je && e && e[Je]);
          }
          function pi(e, t) {
            var n = typeof e;
            return (
              !!(t = null == t ? l : t) &&
              ("number" == n || ("symbol" != n && pe.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function mi(e, t, n) {
            if (!Xo(n)) return !1;
            var r = typeof t;
            return (
              !!("number" == r
                ? $o(n) && pi(t, n.length)
                : "string" == r && t in n) && Bo(n[t], e)
            );
          }
          function gi(e, t) {
            if (Go(e)) return !1;
            var n = typeof e;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != e &&
                !ou(e)
              ) ||
              Q.test(e) ||
              !K.test(e) ||
              (null != t && e in ke(t))
            );
          }
          function vi(e) {
            var t = ni(e),
              n = Ln[t];
            if ("function" != typeof n || !(t in Un.prototype)) return !1;
            if (e === n) return !0;
            var r = ti(n);
            return !!r && e === r[0];
          }
          ((Sn && ci(new Sn(new ArrayBuffer(1))) != A) ||
            (wn && ci(new wn()) != b) ||
            (Tn && ci(Tn.resolve()) != w) ||
            (kn && ci(new kn()) != k) ||
            (Cn && ci(new Cn()) != x)) &&
            (ci = function (t) {
              var n = wr(t),
                r = n == S ? t.constructor : e,
                a = r ? Fi(r) : "";
              if (a)
                switch (a) {
                  case An:
                    return A;
                  case Mn:
                    return b;
                  case Nn:
                    return w;
                  case In:
                    return k;
                  case Rn:
                    return x;
                }
              return n;
            });
          var yi = Ne ? Ko : pl;
          function bi(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || Me);
          }
          function _i(e) {
            return e == e && !Xo(e);
          }
          function Si(t, n) {
            return function (r) {
              return null != r && r[t] === n && (n !== e || t in ke(r));
            };
          }
          function wi(t, n, r) {
            return (
              (n = mn(n === e ? t.length - 1 : n, 0)),
              function () {
                for (
                  var e = arguments, a = -1, i = mn(e.length - n, 0), o = be(i);
                  ++a < i;

                )
                  o[a] = e[n + a];
                a = -1;
                for (var u = be(n + 1); ++a < n; ) u[a] = e[a];
                return (u[n] = r(o)), _t(t, this, u);
              }
            );
          }
          function Ti(e, t) {
            return t.length < 2 ? e : _r(e, Zr(t, 0, -1));
          }
          function ki(e, t) {
            if (
              ("constructor" !== t || "function" != typeof e[t]) &&
              "__proto__" != t
            )
              return e[t];
          }
          var Ci = Ai(Qr),
            Ei =
              dt ||
              function (e, t) {
                return lt.setTimeout(e, t);
              },
            xi = Ai(Jr);
          function Pi(e, t, n) {
            var r,
              a = t + "";
            return xi(
              e,
              (function (e, t) {
                var n = t.length;
                if (!n) return e;
                var r = n - 1;
                return (
                  (t[r] = (n > 1 ? "& " : "") + t[r]),
                  (t = t.join(n > 2 ? ", " : " ")),
                  e.replace(ne, "{\n/* [wrapped with " + t + "] */\n")
                );
              })(
                a,
                (function (e, t) {
                  return (
                    wt(f, function (n) {
                      var r = "_." + n[0];
                      t & n[1] && !Et(e, r) && e.push(r);
                    }),
                    e.sort()
                  );
                })((r = a.match(re)) ? r[1].split(ae) : [], n)
              )
            );
          }
          function Ai(t) {
            var n = 0,
              r = 0;
            return function () {
              var a = vn(),
                i = 16 - (a - r);
              if (((r = a), i > 0)) {
                if (++n >= 800) return arguments[0];
              } else n = 0;
              return t.apply(e, arguments);
            };
          }
          function Mi(t, n) {
            var r = -1,
              a = t.length,
              i = a - 1;
            for (n = n === e ? a : n; ++r < n; ) {
              var o = $r(r, i),
                u = t[o];
              (t[o] = t[r]), (t[r] = u);
            }
            return (t.length = n), t;
          }
          var Ni,
            Ii,
            Ri =
              ((Ni = Io(
                function (e) {
                  var t = [];
                  return (
                    46 === e.charCodeAt(0) && t.push(""),
                    e.replace(J, function (e, n, r, a) {
                      t.push(r ? a.replace(ue, "$1") : n || e);
                    }),
                    t
                  );
                },
                function (e) {
                  return 500 === Ii.size && Ii.clear(), e;
                }
              )),
              (Ii = Ni.cache),
              Ni);
          function Oi(e) {
            if ("string" == typeof e || ou(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function Fi(e) {
            if (null != e) {
              try {
                return Ie.call(e);
              } catch (t) {}
              try {
                return e + "";
              } catch (t) {}
            }
            return "";
          }
          function Di(e) {
            if (e instanceof Un) return e.clone();
            var t = new zn(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = Ca(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }
          var Li = Yr(function (e, t) {
              return Ho(e) ? lr(e, pr(t, 1, Ho, !0)) : [];
            }),
            Bi = Yr(function (t, n) {
              var r = Wi(n);
              return (
                Ho(r) && (r = e), Ho(t) ? lr(t, pr(n, 1, Ho, !0), ai(r, 2)) : []
              );
            }),
            ji = Yr(function (t, n) {
              var r = Wi(n);
              return (
                Ho(r) && (r = e), Ho(t) ? lr(t, pr(n, 1, Ho, !0), e, r) : []
              );
            });
          function zi(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var a = null == n ? 0 : du(n);
            return a < 0 && (a = mn(r + a, 0)), Ft(e, ai(t, 3), a);
          }
          function Ui(t, n, r) {
            var a = null == t ? 0 : t.length;
            if (!a) return -1;
            var i = a - 1;
            return (
              r !== e &&
                ((i = du(r)), (i = r < 0 ? mn(a + i, 0) : gn(i, a - 1))),
              Ft(t, ai(n, 3), i, !0)
            );
          }
          function Gi(e) {
            return null != e && e.length ? pr(e, 1) : [];
          }
          function Vi(t) {
            return t && t.length ? t[0] : e;
          }
          var $i = Yr(function (e) {
              var t = Pt(e, ha);
              return t.length && t[0] === e[0] ? Er(t) : [];
            }),
            Hi = Yr(function (t) {
              var n = Wi(t),
                r = Pt(t, ha);
              return (
                n === Wi(r) ? (n = e) : r.pop(),
                r.length && r[0] === t[0] ? Er(r, ai(n, 2)) : []
              );
            }),
            Yi = Yr(function (t) {
              var n = Wi(t),
                r = Pt(t, ha);
              return (
                (n = "function" == typeof n ? n : e) && r.pop(),
                r.length && r[0] === t[0] ? Er(r, e, n) : []
              );
            });
          function Wi(t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : e;
          }
          var qi = Yr(Ki);
          function Ki(e, t) {
            return e && e.length && t && t.length ? Gr(e, t) : e;
          }
          var Qi = Xa(function (e, t) {
            var n = null == e ? 0 : e.length,
              r = rr(e, t);
            return (
              Vr(
                e,
                Pt(t, function (e) {
                  return pi(e, n) ? +e : e;
                }).sort(wa)
              ),
              r
            );
          });
          function Ji(e) {
            return null == e ? e : _n.call(e);
          }
          var Xi = Yr(function (e) {
              return oa(pr(e, 1, Ho, !0));
            }),
            Zi = Yr(function (t) {
              var n = Wi(t);
              return Ho(n) && (n = e), oa(pr(t, 1, Ho, !0), ai(n, 2));
            }),
            eo = Yr(function (t) {
              var n = Wi(t);
              return (
                (n = "function" == typeof n ? n : e), oa(pr(t, 1, Ho, !0), e, n)
              );
            });
          function to(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = Ct(e, function (e) {
                if (Ho(e)) return (t = mn(e.length, t)), !0;
              })),
              $t(t, function (t) {
                return Pt(e, zt(t));
              })
            );
          }
          function no(t, n) {
            if (!t || !t.length) return [];
            var r = to(t);
            return null == n
              ? r
              : Pt(r, function (t) {
                  return _t(n, e, t);
                });
          }
          var ro = Yr(function (e, t) {
              return Ho(e) ? lr(e, t) : [];
            }),
            ao = Yr(function (e) {
              return fa(Ct(e, Ho));
            }),
            io = Yr(function (t) {
              var n = Wi(t);
              return Ho(n) && (n = e), fa(Ct(t, Ho), ai(n, 2));
            }),
            oo = Yr(function (t) {
              var n = Wi(t);
              return (n = "function" == typeof n ? n : e), fa(Ct(t, Ho), e, n);
            }),
            uo = Yr(to),
            lo = Yr(function (t) {
              var n = t.length,
                r = n > 1 ? t[n - 1] : e;
              return (r = "function" == typeof r ? (t.pop(), r) : e), no(t, r);
            });
          function so(e) {
            var t = Ln(e);
            return (t.__chain__ = !0), t;
          }
          function co(e, t) {
            return t(e);
          }
          var fo = Xa(function (t) {
              var n = t.length,
                r = n ? t[0] : 0,
                a = this.__wrapped__,
                i = function (e) {
                  return rr(e, t);
                };
              return !(n > 1 || this.__actions__.length) &&
                a instanceof Un &&
                pi(r)
                ? ((a = a.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                    func: co,
                    args: [i],
                    thisArg: e,
                  }),
                  new zn(a, this.__chain__).thru(function (t) {
                    return n && !t.length && t.push(e), t;
                  }))
                : this.thru(i);
            }),
            ho = xa(function (e, t, n) {
              Re.call(e, n) ? ++e[n] : nr(e, n, 1);
            }),
            po = Oa(zi),
            mo = Oa(Ui);
          function go(e, t) {
            return (Go(e) ? wt : sr)(e, ai(t, 3));
          }
          function vo(e, t) {
            return (Go(e) ? Tt : cr)(e, ai(t, 3));
          }
          var yo = xa(function (e, t, n) {
              Re.call(e, n) ? e[n].push(t) : nr(e, n, [t]);
            }),
            bo = Yr(function (e, t, n) {
              var r = -1,
                a = "function" == typeof t,
                i = $o(e) ? be(e.length) : [];
              return (
                sr(e, function (e) {
                  i[++r] = a ? _t(t, e, n) : xr(e, t, n);
                }),
                i
              );
            }),
            _o = xa(function (e, t, n) {
              nr(e, n, t);
            });
          function So(e, t) {
            return (Go(e) ? Pt : Fr)(e, ai(t, 3));
          }
          var wo = xa(
              function (e, t, n) {
                e[n ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            ),
            To = Yr(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return (
                n > 1 && mi(e, t[0], t[1])
                  ? (t = [])
                  : n > 2 && mi(t[0], t[1], t[2]) && (t = [t[0]]),
                zr(e, pr(t, 1), [])
              );
            }),
            ko =
              ct ||
              function () {
                return lt.Date.now();
              };
          function Co(t, n, r) {
            return (
              (n = r ? e : n),
              (n = t && null == n ? t.length : n),
              Wa(t, o, e, e, e, e, n)
            );
          }
          function Eo(n, r) {
            var a;
            if ("function" != typeof r) throw new xe(t);
            return (
              (n = du(n)),
              function () {
                return (
                  --n > 0 && (a = r.apply(this, arguments)),
                  n <= 1 && (r = e),
                  a
                );
              }
            );
          }
          var xo = Yr(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var a = rn(n, ri(xo));
                r |= i;
              }
              return Wa(e, r, t, n, a);
            }),
            Po = Yr(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var a = rn(n, ri(Po));
                r |= i;
              }
              return Wa(t, r, e, n, a);
            });
          function Ao(n, r, a) {
            var i,
              o,
              u,
              l,
              s,
              c,
              f = 0,
              d = !1,
              h = !1,
              p = !0;
            if ("function" != typeof n) throw new xe(t);
            function m(t) {
              var r = i,
                a = o;
              return (i = o = e), (f = t), (l = n.apply(a, r));
            }
            function g(t) {
              var n = t - c;
              return c === e || n >= r || n < 0 || (h && t - f >= u);
            }
            function v() {
              var e = ko();
              if (g(e)) return y(e);
              s = Ei(
                v,
                (function (e) {
                  var t = r - (e - c);
                  return h ? gn(t, u - (e - f)) : t;
                })(e)
              );
            }
            function y(t) {
              return (s = e), p && i ? m(t) : ((i = o = e), l);
            }
            function b() {
              var t,
                n = ko(),
                a = g(n);
              if (((i = arguments), (o = this), (c = n), a)) {
                if (s === e) return (f = t = c), (s = Ei(v, r)), d ? m(t) : l;
                if (h) return ya(s), (s = Ei(v, r)), m(c);
              }
              return s === e && (s = Ei(v, r)), l;
            }
            return (
              (r = pu(r) || 0),
              Xo(a) &&
                ((d = !!a.leading),
                (u = (h = "maxWait" in a) ? mn(pu(a.maxWait) || 0, r) : u),
                (p = "trailing" in a ? !!a.trailing : p)),
              (b.cancel = function () {
                s !== e && ya(s), (f = 0), (i = c = o = s = e);
              }),
              (b.flush = function () {
                return s === e ? l : y(ko());
              }),
              b
            );
          }
          var Mo = Yr(function (e, t) {
              return ur(e, 1, t);
            }),
            No = Yr(function (e, t, n) {
              return ur(e, pu(t) || 0, n);
            });
          function Io(e, n) {
            if ("function" != typeof e || (null != n && "function" != typeof n))
              throw new xe(t);
            var r = function () {
              var t = arguments,
                a = n ? n.apply(this, t) : t[0],
                i = r.cache;
              if (i.has(a)) return i.get(a);
              var o = e.apply(this, t);
              return (r.cache = i.set(a, o) || i), o;
            };
            return (r.cache = new (Io.Cache || $n)()), r;
          }
          function Ro(e) {
            if ("function" != typeof e) throw new xe(t);
            return function () {
              var t = arguments;
              switch (t.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, t[0]);
                case 2:
                  return !e.call(this, t[0], t[1]);
                case 3:
                  return !e.call(this, t[0], t[1], t[2]);
              }
              return !e.apply(this, t);
            };
          }
          Io.Cache = $n;
          var Oo = ga(function (e, t) {
              var n = (t =
                1 == t.length && Go(t[0])
                  ? Pt(t[0], Yt(ai()))
                  : Pt(pr(t, 1), Yt(ai()))).length;
              return Yr(function (r) {
                for (var a = -1, i = gn(r.length, n); ++a < i; )
                  r[a] = t[a].call(this, r[a]);
                return _t(e, this, r);
              });
            }),
            Fo = Yr(function (t, n) {
              var r = rn(n, ri(Fo));
              return Wa(t, i, e, n, r);
            }),
            Do = Yr(function (t, n) {
              var r = rn(n, ri(Do));
              return Wa(t, 64, e, n, r);
            }),
            Lo = Xa(function (t, n) {
              return Wa(t, 256, e, e, e, n);
            });
          function Bo(e, t) {
            return e === t || (e != e && t != t);
          }
          var jo = Ga(Tr),
            zo = Ga(function (e, t) {
              return e >= t;
            }),
            Uo = Pr(
              (function () {
                return arguments;
              })()
            )
              ? Pr
              : function (e) {
                  return Zo(e) && Re.call(e, "callee") && !Ye.call(e, "callee");
                },
            Go = be.isArray,
            Vo = pt
              ? Yt(pt)
              : function (e) {
                  return Zo(e) && wr(e) == P;
                };
          function $o(e) {
            return null != e && Jo(e.length) && !Ko(e);
          }
          function Ho(e) {
            return Zo(e) && $o(e);
          }
          var Yo = fn || pl,
            Wo = mt
              ? Yt(mt)
              : function (e) {
                  return Zo(e) && wr(e) == m;
                };
          function qo(e) {
            if (!Zo(e)) return !1;
            var t = wr(e);
            return (
              t == g ||
              "[object DOMException]" == t ||
              ("string" == typeof e.message &&
                "string" == typeof e.name &&
                !nu(e))
            );
          }
          function Ko(e) {
            if (!Xo(e)) return !1;
            var t = wr(e);
            return (
              t == v ||
              t == y ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          }
          function Qo(e) {
            return "number" == typeof e && e == du(e);
          }
          function Jo(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= l;
          }
          function Xo(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function Zo(e) {
            return null != e && "object" == typeof e;
          }
          var eu = gt
            ? Yt(gt)
            : function (e) {
                return Zo(e) && ci(e) == b;
              };
          function tu(e) {
            return "number" == typeof e || (Zo(e) && wr(e) == _);
          }
          function nu(e) {
            if (!Zo(e) || wr(e) != S) return !1;
            var t = $e(e);
            if (null === t) return !0;
            var n = Re.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && Ie.call(n) == Le;
          }
          var ru = vt
              ? Yt(vt)
              : function (e) {
                  return Zo(e) && wr(e) == T;
                },
            au = yt
              ? Yt(yt)
              : function (e) {
                  return Zo(e) && ci(e) == k;
                };
          function iu(e) {
            return "string" == typeof e || (!Go(e) && Zo(e) && wr(e) == C);
          }
          function ou(e) {
            return "symbol" == typeof e || (Zo(e) && wr(e) == E);
          }
          var uu = bt
              ? Yt(bt)
              : function (e) {
                  return Zo(e) && Jo(e.length) && !!tt[wr(e)];
                },
            lu = Ga(Or),
            su = Ga(function (e, t) {
              return e <= t;
            });
          function cu(e) {
            if (!e) return [];
            if ($o(e)) return iu(e) ? un(e) : Ca(e);
            if (rt && e[rt])
              return (function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              })(e[rt]());
            var t = ci(e);
            return (t == b ? tn : t == k ? an : Bu)(e);
          }
          function fu(e) {
            return e
              ? (e = pu(e)) === u || e === -1 / 0
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          }
          function du(e) {
            var t = fu(e),
              n = t % 1;
            return t == t ? (n ? t - n : t) : 0;
          }
          function hu(e) {
            return e ? ar(du(e), 0, c) : 0;
          }
          function pu(e) {
            if ("number" == typeof e) return e;
            if (ou(e)) return s;
            if (Xo(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = Xo(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = Ht(e);
            var n = fe.test(e);
            return n || he.test(e)
              ? it(e.slice(2), n ? 2 : 8)
              : ce.test(e)
              ? s
              : +e;
          }
          function mu(e) {
            return Ea(e, Mu(e));
          }
          function gu(e) {
            return null == e ? "" : ia(e);
          }
          var vu = Pa(function (e, t) {
              if (bi(t) || $o(t)) Ea(t, Au(t), e);
              else for (var n in t) Re.call(t, n) && Xn(e, n, t[n]);
            }),
            yu = Pa(function (e, t) {
              Ea(t, Mu(t), e);
            }),
            bu = Pa(function (e, t, n, r) {
              Ea(t, Mu(t), e, r);
            }),
            _u = Pa(function (e, t, n, r) {
              Ea(t, Au(t), e, r);
            }),
            Su = Xa(rr),
            wu = Yr(function (t, n) {
              t = ke(t);
              var r = -1,
                a = n.length,
                i = a > 2 ? n[2] : e;
              for (i && mi(n[0], n[1], i) && (a = 1); ++r < a; )
                for (var o = n[r], u = Mu(o), l = -1, s = u.length; ++l < s; ) {
                  var c = u[l],
                    f = t[c];
                  (f === e || (Bo(f, Me[c]) && !Re.call(t, c))) &&
                    (t[c] = o[c]);
                }
              return t;
            }),
            Tu = Yr(function (t) {
              return t.push(e, Ka), _t(Iu, e, t);
            });
          function ku(t, n, r) {
            var a = null == t ? e : _r(t, n);
            return a === e ? r : a;
          }
          function Cu(e, t) {
            return null != e && fi(e, t, Cr);
          }
          var Eu = La(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = De.call(t)),
                (e[t] = n);
            }, Xu(tl)),
            xu = La(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = De.call(t)),
                Re.call(e, t) ? e[t].push(n) : (e[t] = [n]);
            }, ai),
            Pu = Yr(xr);
          function Au(e) {
            return $o(e) ? Wn(e) : Rr(e);
          }
          function Mu(e) {
            return $o(e)
              ? Wn(e, !0)
              : (function (e) {
                  if (!Xo(e))
                    return (function (e) {
                      var t = [];
                      if (null != e) for (var n in ke(e)) t.push(n);
                      return t;
                    })(e);
                  var t = bi(e),
                    n = [];
                  for (var r in e)
                    ("constructor" != r || (!t && Re.call(e, r))) && n.push(r);
                  return n;
                })(e);
          }
          var Nu = Pa(function (e, t, n) {
              Br(e, t, n);
            }),
            Iu = Pa(function (e, t, n, r) {
              Br(e, t, n, r);
            }),
            Ru = Xa(function (e, t) {
              var n = {};
              if (null == e) return n;
              var r = !1;
              (t = Pt(t, function (t) {
                return (t = ma(t, e)), r || (r = t.length > 1), t;
              })),
                Ea(e, ei(e), n),
                r && (n = ir(n, 7, Qa));
              for (var a = t.length; a--; ) ua(n, t[a]);
              return n;
            }),
            Ou = Xa(function (e, t) {
              return null == e
                ? {}
                : Ur((n = e), t, function (e, t) {
                    return Cu(n, t);
                  });
              var n;
            });
          function Fu(e, t) {
            if (null == e) return {};
            var n = Pt(ei(e), function (e) {
              return [e];
            });
            return (
              (t = ai(t)),
              Ur(e, n, function (e, n) {
                return t(e, n[0]);
              })
            );
          }
          var Du = Ya(Au),
            Lu = Ya(Mu);
          function Bu(e) {
            return null == e ? [] : Wt(e, Au(e));
          }
          var ju = Ia(function (e, t, n) {
            return (t = t.toLowerCase()), e + (n ? zu(t) : t);
          });
          function zu(e) {
            return qu(gu(e).toLowerCase());
          }
          function Uu(e) {
            return (e = gu(e)) && e.replace(me, Jt).replace(qe, "");
          }
          var Gu = Ia(function (e, t, n) {
              return e + (n ? "-" : "") + t.toLowerCase();
            }),
            Vu = Ia(function (e, t, n) {
              return e + (n ? " " : "") + t.toLowerCase();
            }),
            $u = Na("toLowerCase"),
            Hu = Ia(function (e, t, n) {
              return e + (n ? "_" : "") + t.toLowerCase();
            }),
            Yu = Ia(function (e, t, n) {
              return e + (n ? " " : "") + qu(t);
            }),
            Wu = Ia(function (e, t, n) {
              return e + (n ? " " : "") + t.toUpperCase();
            }),
            qu = Na("toUpperCase");
          function Ku(t, n, r) {
            return (
              (t = gu(t)),
              (n = r ? e : n) === e
                ? ((a = t),
                  Xe.test(a)
                    ? (function (e) {
                        return e.match(Qe) || [];
                      })(t)
                    : (function (e) {
                        return e.match(ie) || [];
                      })(t))
                : t.match(n) || []
            );
            var a;
          }
          var Qu = Yr(function (t, n) {
              try {
                return _t(t, e, n);
              } catch (r) {
                return qo(r) ? r : new Se(r);
              }
            }),
            Ju = Xa(function (e, t) {
              return (
                wt(t, function (t) {
                  (t = Oi(t)), nr(e, t, xo(e[t], e));
                }),
                e
              );
            });
          function Xu(e) {
            return function () {
              return e;
            };
          }
          var Zu = Fa(),
            el = Fa(!0);
          function tl(e) {
            return e;
          }
          function nl(e) {
            return Ir("function" == typeof e ? e : ir(e, 1));
          }
          var rl = Yr(function (e, t) {
              return function (n) {
                return xr(n, e, t);
              };
            }),
            al = Yr(function (e, t) {
              return function (n) {
                return xr(e, n, t);
              };
            });
          function il(e, t, n) {
            var r = Au(t),
              a = br(t, r);
            null != n ||
              (Xo(t) && (a.length || !r.length)) ||
              ((n = t), (t = e), (e = this), (a = br(t, Au(t))));
            var i = !(Xo(n) && "chain" in n && !n.chain),
              o = Ko(e);
            return (
              wt(a, function (n) {
                var r = t[n];
                (e[n] = r),
                  o &&
                    (e.prototype[n] = function () {
                      var t = this.__chain__;
                      if (i || t) {
                        var n = e(this.__wrapped__);
                        return (
                          (n.__actions__ = Ca(this.__actions__)).push({
                            func: r,
                            args: arguments,
                            thisArg: e,
                          }),
                          (n.__chain__ = t),
                          n
                        );
                      }
                      return r.apply(e, At([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function ol() {}
          var ul = ja(Pt),
            ll = ja(kt),
            sl = ja(It);
          function cl(e) {
            return gi(e)
              ? zt(Oi(e))
              : ((t = e),
                function (e) {
                  return _r(e, t);
                });
            var t;
          }
          var fl = Ua(),
            dl = Ua(!0);
          function hl() {
            return [];
          }
          function pl() {
            return !1;
          }
          var ml,
            gl = Ba(function (e, t) {
              return e + t;
            }, 0),
            vl = $a("ceil"),
            yl = Ba(function (e, t) {
              return e / t;
            }, 1),
            bl = $a("floor"),
            _l = Ba(function (e, t) {
              return e * t;
            }, 1),
            Sl = $a("round"),
            wl = Ba(function (e, t) {
              return e - t;
            }, 0);
          return (
            (Ln.after = function (e, n) {
              if ("function" != typeof n) throw new xe(t);
              return (
                (e = du(e)),
                function () {
                  if (--e < 1) return n.apply(this, arguments);
                }
              );
            }),
            (Ln.ary = Co),
            (Ln.assign = vu),
            (Ln.assignIn = yu),
            (Ln.assignInWith = bu),
            (Ln.assignWith = _u),
            (Ln.at = Su),
            (Ln.before = Eo),
            (Ln.bind = xo),
            (Ln.bindAll = Ju),
            (Ln.bindKey = Po),
            (Ln.castArray = function () {
              if (!arguments.length) return [];
              var e = arguments[0];
              return Go(e) ? e : [e];
            }),
            (Ln.chain = so),
            (Ln.chunk = function (t, n, r) {
              n = (r ? mi(t, n, r) : n === e) ? 1 : mn(du(n), 0);
              var a = null == t ? 0 : t.length;
              if (!a || n < 1) return [];
              for (var i = 0, o = 0, u = be(ht(a / n)); i < a; )
                u[o++] = Zr(t, i, (i += n));
              return u;
            }),
            (Ln.compact = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = 0, a = [];
                ++t < n;

              ) {
                var i = e[t];
                i && (a[r++] = i);
              }
              return a;
            }),
            (Ln.concat = function () {
              var e = arguments.length;
              if (!e) return [];
              for (var t = be(e - 1), n = arguments[0], r = e; r--; )
                t[r - 1] = arguments[r];
              return At(Go(n) ? Ca(n) : [n], pr(t, 1));
            }),
            (Ln.cond = function (e) {
              var n = null == e ? 0 : e.length,
                r = ai();
              return (
                (e = n
                  ? Pt(e, function (e) {
                      if ("function" != typeof e[1]) throw new xe(t);
                      return [r(e[0]), e[1]];
                    })
                  : []),
                Yr(function (t) {
                  for (var r = -1; ++r < n; ) {
                    var a = e[r];
                    if (_t(a[0], this, t)) return _t(a[1], this, t);
                  }
                })
              );
            }),
            (Ln.conforms = function (e) {
              return (function (e) {
                var t = Au(e);
                return function (n) {
                  return or(n, e, t);
                };
              })(ir(e, 1));
            }),
            (Ln.constant = Xu),
            (Ln.countBy = ho),
            (Ln.create = function (e, t) {
              var n = Bn(e);
              return null == t ? n : tr(n, t);
            }),
            (Ln.curry = function t(n, r, a) {
              var i = Wa(n, 8, e, e, e, e, e, (r = a ? e : r));
              return (i.placeholder = t.placeholder), i;
            }),
            (Ln.curryRight = function t(n, r, a) {
              var i = Wa(n, 16, e, e, e, e, e, (r = a ? e : r));
              return (i.placeholder = t.placeholder), i;
            }),
            (Ln.debounce = Ao),
            (Ln.defaults = wu),
            (Ln.defaultsDeep = Tu),
            (Ln.defer = Mo),
            (Ln.delay = No),
            (Ln.difference = Li),
            (Ln.differenceBy = Bi),
            (Ln.differenceWith = ji),
            (Ln.drop = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, (n = r || n === e ? 1 : du(n)) < 0 ? 0 : n, a)
                : [];
            }),
            (Ln.dropRight = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, 0, (n = a - (n = r || n === e ? 1 : du(n))) < 0 ? 0 : n)
                : [];
            }),
            (Ln.dropRightWhile = function (e, t) {
              return e && e.length ? sa(e, ai(t, 3), !0, !0) : [];
            }),
            (Ln.dropWhile = function (e, t) {
              return e && e.length ? sa(e, ai(t, 3), !0) : [];
            }),
            (Ln.fill = function (t, n, r, a) {
              var i = null == t ? 0 : t.length;
              return i
                ? (r &&
                    "number" != typeof r &&
                    mi(t, n, r) &&
                    ((r = 0), (a = i)),
                  (function (t, n, r, a) {
                    var i = t.length;
                    for (
                      (r = du(r)) < 0 && (r = -r > i ? 0 : i + r),
                        (a = a === e || a > i ? i : du(a)) < 0 && (a += i),
                        a = r > a ? 0 : hu(a);
                      r < a;

                    )
                      t[r++] = n;
                    return t;
                  })(t, n, r, a))
                : [];
            }),
            (Ln.filter = function (e, t) {
              return (Go(e) ? Ct : hr)(e, ai(t, 3));
            }),
            (Ln.flatMap = function (e, t) {
              return pr(So(e, t), 1);
            }),
            (Ln.flatMapDeep = function (e, t) {
              return pr(So(e, t), u);
            }),
            (Ln.flatMapDepth = function (t, n, r) {
              return (r = r === e ? 1 : du(r)), pr(So(t, n), r);
            }),
            (Ln.flatten = Gi),
            (Ln.flattenDeep = function (e) {
              return null != e && e.length ? pr(e, u) : [];
            }),
            (Ln.flattenDepth = function (t, n) {
              return null != t && t.length
                ? pr(t, (n = n === e ? 1 : du(n)))
                : [];
            }),
            (Ln.flip = function (e) {
              return Wa(e, 512);
            }),
            (Ln.flow = Zu),
            (Ln.flowRight = el),
            (Ln.fromPairs = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = {};
                ++t < n;

              ) {
                var a = e[t];
                r[a[0]] = a[1];
              }
              return r;
            }),
            (Ln.functions = function (e) {
              return null == e ? [] : br(e, Au(e));
            }),
            (Ln.functionsIn = function (e) {
              return null == e ? [] : br(e, Mu(e));
            }),
            (Ln.groupBy = yo),
            (Ln.initial = function (e) {
              return null != e && e.length ? Zr(e, 0, -1) : [];
            }),
            (Ln.intersection = $i),
            (Ln.intersectionBy = Hi),
            (Ln.intersectionWith = Yi),
            (Ln.invert = Eu),
            (Ln.invertBy = xu),
            (Ln.invokeMap = bo),
            (Ln.iteratee = nl),
            (Ln.keyBy = _o),
            (Ln.keys = Au),
            (Ln.keysIn = Mu),
            (Ln.map = So),
            (Ln.mapKeys = function (e, t) {
              var n = {};
              return (
                (t = ai(t, 3)),
                vr(e, function (e, r, a) {
                  nr(n, t(e, r, a), e);
                }),
                n
              );
            }),
            (Ln.mapValues = function (e, t) {
              var n = {};
              return (
                (t = ai(t, 3)),
                vr(e, function (e, r, a) {
                  nr(n, r, t(e, r, a));
                }),
                n
              );
            }),
            (Ln.matches = function (e) {
              return Dr(ir(e, 1));
            }),
            (Ln.matchesProperty = function (e, t) {
              return Lr(e, ir(t, 1));
            }),
            (Ln.memoize = Io),
            (Ln.merge = Nu),
            (Ln.mergeWith = Iu),
            (Ln.method = rl),
            (Ln.methodOf = al),
            (Ln.mixin = il),
            (Ln.negate = Ro),
            (Ln.nthArg = function (e) {
              return (
                (e = du(e)),
                Yr(function (t) {
                  return jr(t, e);
                })
              );
            }),
            (Ln.omit = Ru),
            (Ln.omitBy = function (e, t) {
              return Fu(e, Ro(ai(t)));
            }),
            (Ln.once = function (e) {
              return Eo(2, e);
            }),
            (Ln.orderBy = function (t, n, r, a) {
              return null == t
                ? []
                : (Go(n) || (n = null == n ? [] : [n]),
                  Go((r = a ? e : r)) || (r = null == r ? [] : [r]),
                  zr(t, n, r));
            }),
            (Ln.over = ul),
            (Ln.overArgs = Oo),
            (Ln.overEvery = ll),
            (Ln.overSome = sl),
            (Ln.partial = Fo),
            (Ln.partialRight = Do),
            (Ln.partition = wo),
            (Ln.pick = Ou),
            (Ln.pickBy = Fu),
            (Ln.property = cl),
            (Ln.propertyOf = function (t) {
              return function (n) {
                return null == t ? e : _r(t, n);
              };
            }),
            (Ln.pull = qi),
            (Ln.pullAll = Ki),
            (Ln.pullAllBy = function (e, t, n) {
              return e && e.length && t && t.length ? Gr(e, t, ai(n, 2)) : e;
            }),
            (Ln.pullAllWith = function (t, n, r) {
              return t && t.length && n && n.length ? Gr(t, n, e, r) : t;
            }),
            (Ln.pullAt = Qi),
            (Ln.range = fl),
            (Ln.rangeRight = dl),
            (Ln.rearg = Lo),
            (Ln.reject = function (e, t) {
              return (Go(e) ? Ct : hr)(e, Ro(ai(t, 3)));
            }),
            (Ln.remove = function (e, t) {
              var n = [];
              if (!e || !e.length) return n;
              var r = -1,
                a = [],
                i = e.length;
              for (t = ai(t, 3); ++r < i; ) {
                var o = e[r];
                t(o, r, e) && (n.push(o), a.push(r));
              }
              return Vr(e, a), n;
            }),
            (Ln.rest = function (n, r) {
              if ("function" != typeof n) throw new xe(t);
              return Yr(n, (r = r === e ? r : du(r)));
            }),
            (Ln.reverse = Ji),
            (Ln.sampleSize = function (t, n, r) {
              return (
                (n = (r ? mi(t, n, r) : n === e) ? 1 : du(n)),
                (Go(t) ? Kn : qr)(t, n)
              );
            }),
            (Ln.set = function (e, t, n) {
              return null == e ? e : Kr(e, t, n);
            }),
            (Ln.setWith = function (t, n, r, a) {
              return (
                (a = "function" == typeof a ? a : e),
                null == t ? t : Kr(t, n, r, a)
              );
            }),
            (Ln.shuffle = function (e) {
              return (Go(e) ? Qn : Xr)(e);
            }),
            (Ln.slice = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? (r && "number" != typeof r && mi(t, n, r)
                    ? ((n = 0), (r = a))
                    : ((n = null == n ? 0 : du(n)), (r = r === e ? a : du(r))),
                  Zr(t, n, r))
                : [];
            }),
            (Ln.sortBy = To),
            (Ln.sortedUniq = function (e) {
              return e && e.length ? ra(e) : [];
            }),
            (Ln.sortedUniqBy = function (e, t) {
              return e && e.length ? ra(e, ai(t, 2)) : [];
            }),
            (Ln.split = function (t, n, r) {
              return (
                r && "number" != typeof r && mi(t, n, r) && (n = r = e),
                (r = r === e ? c : r >>> 0)
                  ? (t = gu(t)) &&
                    ("string" == typeof n || (null != n && !ru(n))) &&
                    !(n = ia(n)) &&
                    en(t)
                    ? va(un(t), 0, r)
                    : t.split(n, r)
                  : []
              );
            }),
            (Ln.spread = function (e, n) {
              if ("function" != typeof e) throw new xe(t);
              return (
                (n = null == n ? 0 : mn(du(n), 0)),
                Yr(function (t) {
                  var r = t[n],
                    a = va(t, 0, n);
                  return r && At(a, r), _t(e, this, a);
                })
              );
            }),
            (Ln.tail = function (e) {
              var t = null == e ? 0 : e.length;
              return t ? Zr(e, 1, t) : [];
            }),
            (Ln.take = function (t, n, r) {
              return t && t.length
                ? Zr(t, 0, (n = r || n === e ? 1 : du(n)) < 0 ? 0 : n)
                : [];
            }),
            (Ln.takeRight = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, (n = a - (n = r || n === e ? 1 : du(n))) < 0 ? 0 : n, a)
                : [];
            }),
            (Ln.takeRightWhile = function (e, t) {
              return e && e.length ? sa(e, ai(t, 3), !1, !0) : [];
            }),
            (Ln.takeWhile = function (e, t) {
              return e && e.length ? sa(e, ai(t, 3)) : [];
            }),
            (Ln.tap = function (e, t) {
              return t(e), e;
            }),
            (Ln.throttle = function (e, n, r) {
              var a = !0,
                i = !0;
              if ("function" != typeof e) throw new xe(t);
              return (
                Xo(r) &&
                  ((a = "leading" in r ? !!r.leading : a),
                  (i = "trailing" in r ? !!r.trailing : i)),
                Ao(e, n, { leading: a, maxWait: n, trailing: i })
              );
            }),
            (Ln.thru = co),
            (Ln.toArray = cu),
            (Ln.toPairs = Du),
            (Ln.toPairsIn = Lu),
            (Ln.toPath = function (e) {
              return Go(e) ? Pt(e, Oi) : ou(e) ? [e] : Ca(Ri(gu(e)));
            }),
            (Ln.toPlainObject = mu),
            (Ln.transform = function (e, t, n) {
              var r = Go(e),
                a = r || Yo(e) || uu(e);
              if (((t = ai(t, 4)), null == n)) {
                var i = e && e.constructor;
                n = a ? (r ? new i() : []) : Xo(e) && Ko(i) ? Bn($e(e)) : {};
              }
              return (
                (a ? wt : vr)(e, function (e, r, a) {
                  return t(n, e, r, a);
                }),
                n
              );
            }),
            (Ln.unary = function (e) {
              return Co(e, 1);
            }),
            (Ln.union = Xi),
            (Ln.unionBy = Zi),
            (Ln.unionWith = eo),
            (Ln.uniq = function (e) {
              return e && e.length ? oa(e) : [];
            }),
            (Ln.uniqBy = function (e, t) {
              return e && e.length ? oa(e, ai(t, 2)) : [];
            }),
            (Ln.uniqWith = function (t, n) {
              return (
                (n = "function" == typeof n ? n : e),
                t && t.length ? oa(t, e, n) : []
              );
            }),
            (Ln.unset = function (e, t) {
              return null == e || ua(e, t);
            }),
            (Ln.unzip = to),
            (Ln.unzipWith = no),
            (Ln.update = function (e, t, n) {
              return null == e ? e : la(e, t, pa(n));
            }),
            (Ln.updateWith = function (t, n, r, a) {
              return (
                (a = "function" == typeof a ? a : e),
                null == t ? t : la(t, n, pa(r), a)
              );
            }),
            (Ln.values = Bu),
            (Ln.valuesIn = function (e) {
              return null == e ? [] : Wt(e, Mu(e));
            }),
            (Ln.without = ro),
            (Ln.words = Ku),
            (Ln.wrap = function (e, t) {
              return Fo(pa(t), e);
            }),
            (Ln.xor = ao),
            (Ln.xorBy = io),
            (Ln.xorWith = oo),
            (Ln.zip = uo),
            (Ln.zipObject = function (e, t) {
              return da(e || [], t || [], Xn);
            }),
            (Ln.zipObjectDeep = function (e, t) {
              return da(e || [], t || [], Kr);
            }),
            (Ln.zipWith = lo),
            (Ln.entries = Du),
            (Ln.entriesIn = Lu),
            (Ln.extend = yu),
            (Ln.extendWith = bu),
            il(Ln, Ln),
            (Ln.add = gl),
            (Ln.attempt = Qu),
            (Ln.camelCase = ju),
            (Ln.capitalize = zu),
            (Ln.ceil = vl),
            (Ln.clamp = function (t, n, r) {
              return (
                r === e && ((r = n), (n = e)),
                r !== e && (r = (r = pu(r)) == r ? r : 0),
                n !== e && (n = (n = pu(n)) == n ? n : 0),
                ar(pu(t), n, r)
              );
            }),
            (Ln.clone = function (e) {
              return ir(e, 4);
            }),
            (Ln.cloneDeep = function (e) {
              return ir(e, 5);
            }),
            (Ln.cloneDeepWith = function (t, n) {
              return ir(t, 5, (n = "function" == typeof n ? n : e));
            }),
            (Ln.cloneWith = function (t, n) {
              return ir(t, 4, (n = "function" == typeof n ? n : e));
            }),
            (Ln.conformsTo = function (e, t) {
              return null == t || or(e, t, Au(t));
            }),
            (Ln.deburr = Uu),
            (Ln.defaultTo = function (e, t) {
              return null == e || e != e ? t : e;
            }),
            (Ln.divide = yl),
            (Ln.endsWith = function (t, n, r) {
              (t = gu(t)), (n = ia(n));
              var a = t.length,
                i = (r = r === e ? a : ar(du(r), 0, a));
              return (r -= n.length) >= 0 && t.slice(r, i) == n;
            }),
            (Ln.eq = Bo),
            (Ln.escape = function (e) {
              return (e = gu(e)) && H.test(e) ? e.replace(V, Xt) : e;
            }),
            (Ln.escapeRegExp = function (e) {
              return (e = gu(e)) && Z.test(e) ? e.replace(X, "\\$&") : e;
            }),
            (Ln.every = function (t, n, r) {
              var a = Go(t) ? kt : fr;
              return r && mi(t, n, r) && (n = e), a(t, ai(n, 3));
            }),
            (Ln.find = po),
            (Ln.findIndex = zi),
            (Ln.findKey = function (e, t) {
              return Ot(e, ai(t, 3), vr);
            }),
            (Ln.findLast = mo),
            (Ln.findLastIndex = Ui),
            (Ln.findLastKey = function (e, t) {
              return Ot(e, ai(t, 3), yr);
            }),
            (Ln.floor = bl),
            (Ln.forEach = go),
            (Ln.forEachRight = vo),
            (Ln.forIn = function (e, t) {
              return null == e ? e : mr(e, ai(t, 3), Mu);
            }),
            (Ln.forInRight = function (e, t) {
              return null == e ? e : gr(e, ai(t, 3), Mu);
            }),
            (Ln.forOwn = function (e, t) {
              return e && vr(e, ai(t, 3));
            }),
            (Ln.forOwnRight = function (e, t) {
              return e && yr(e, ai(t, 3));
            }),
            (Ln.get = ku),
            (Ln.gt = jo),
            (Ln.gte = zo),
            (Ln.has = function (e, t) {
              return null != e && fi(e, t, kr);
            }),
            (Ln.hasIn = Cu),
            (Ln.head = Vi),
            (Ln.identity = tl),
            (Ln.includes = function (e, t, n, r) {
              (e = $o(e) ? e : Bu(e)), (n = n && !r ? du(n) : 0);
              var a = e.length;
              return (
                n < 0 && (n = mn(a + n, 0)),
                iu(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && Dt(e, t, n) > -1
              );
            }),
            (Ln.indexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var a = null == n ? 0 : du(n);
              return a < 0 && (a = mn(r + a, 0)), Dt(e, t, a);
            }),
            (Ln.inRange = function (t, n, r) {
              return (
                (n = fu(n)),
                r === e ? ((r = n), (n = 0)) : (r = fu(r)),
                (a = t = pu(t)) >= gn((i = n), (o = r)) && a < mn(i, o)
              );
              var a, i, o;
            }),
            (Ln.invoke = Pu),
            (Ln.isArguments = Uo),
            (Ln.isArray = Go),
            (Ln.isArrayBuffer = Vo),
            (Ln.isArrayLike = $o),
            (Ln.isArrayLikeObject = Ho),
            (Ln.isBoolean = function (e) {
              return !0 === e || !1 === e || (Zo(e) && wr(e) == p);
            }),
            (Ln.isBuffer = Yo),
            (Ln.isDate = Wo),
            (Ln.isElement = function (e) {
              return Zo(e) && 1 === e.nodeType && !nu(e);
            }),
            (Ln.isEmpty = function (e) {
              if (null == e) return !0;
              if (
                $o(e) &&
                (Go(e) ||
                  "string" == typeof e ||
                  "function" == typeof e.splice ||
                  Yo(e) ||
                  uu(e) ||
                  Uo(e))
              )
                return !e.length;
              var t = ci(e);
              if (t == b || t == k) return !e.size;
              if (bi(e)) return !Rr(e).length;
              for (var n in e) if (Re.call(e, n)) return !1;
              return !0;
            }),
            (Ln.isEqual = function (e, t) {
              return Ar(e, t);
            }),
            (Ln.isEqualWith = function (t, n, r) {
              var a = (r = "function" == typeof r ? r : e) ? r(t, n) : e;
              return a === e ? Ar(t, n, e, r) : !!a;
            }),
            (Ln.isError = qo),
            (Ln.isFinite = function (e) {
              return "number" == typeof e && dn(e);
            }),
            (Ln.isFunction = Ko),
            (Ln.isInteger = Qo),
            (Ln.isLength = Jo),
            (Ln.isMap = eu),
            (Ln.isMatch = function (e, t) {
              return e === t || Mr(e, t, oi(t));
            }),
            (Ln.isMatchWith = function (t, n, r) {
              return (r = "function" == typeof r ? r : e), Mr(t, n, oi(n), r);
            }),
            (Ln.isNaN = function (e) {
              return tu(e) && e != +e;
            }),
            (Ln.isNative = function (e) {
              if (yi(e))
                throw new Se(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return Nr(e);
            }),
            (Ln.isNil = function (e) {
              return null == e;
            }),
            (Ln.isNull = function (e) {
              return null === e;
            }),
            (Ln.isNumber = tu),
            (Ln.isObject = Xo),
            (Ln.isObjectLike = Zo),
            (Ln.isPlainObject = nu),
            (Ln.isRegExp = ru),
            (Ln.isSafeInteger = function (e) {
              return Qo(e) && e >= -9007199254740991 && e <= l;
            }),
            (Ln.isSet = au),
            (Ln.isString = iu),
            (Ln.isSymbol = ou),
            (Ln.isTypedArray = uu),
            (Ln.isUndefined = function (t) {
              return t === e;
            }),
            (Ln.isWeakMap = function (e) {
              return Zo(e) && ci(e) == x;
            }),
            (Ln.isWeakSet = function (e) {
              return Zo(e) && "[object WeakSet]" == wr(e);
            }),
            (Ln.join = function (e, t) {
              return null == e ? "" : hn.call(e, t);
            }),
            (Ln.kebabCase = Gu),
            (Ln.last = Wi),
            (Ln.lastIndexOf = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              if (!a) return -1;
              var i = a;
              return (
                r !== e && (i = (i = du(r)) < 0 ? mn(a + i, 0) : gn(i, a - 1)),
                n == n
                  ? (function (e, t, n) {
                      for (var r = n + 1; r--; ) if (e[r] === t) return r;
                      return r;
                    })(t, n, i)
                  : Ft(t, Bt, i, !0)
              );
            }),
            (Ln.lowerCase = Vu),
            (Ln.lowerFirst = $u),
            (Ln.lt = lu),
            (Ln.lte = su),
            (Ln.max = function (t) {
              return t && t.length ? dr(t, tl, Tr) : e;
            }),
            (Ln.maxBy = function (t, n) {
              return t && t.length ? dr(t, ai(n, 2), Tr) : e;
            }),
            (Ln.mean = function (e) {
              return jt(e, tl);
            }),
            (Ln.meanBy = function (e, t) {
              return jt(e, ai(t, 2));
            }),
            (Ln.min = function (t) {
              return t && t.length ? dr(t, tl, Or) : e;
            }),
            (Ln.minBy = function (t, n) {
              return t && t.length ? dr(t, ai(n, 2), Or) : e;
            }),
            (Ln.stubArray = hl),
            (Ln.stubFalse = pl),
            (Ln.stubObject = function () {
              return {};
            }),
            (Ln.stubString = function () {
              return "";
            }),
            (Ln.stubTrue = function () {
              return !0;
            }),
            (Ln.multiply = _l),
            (Ln.nth = function (t, n) {
              return t && t.length ? jr(t, du(n)) : e;
            }),
            (Ln.noConflict = function () {
              return lt._ === this && (lt._ = Be), this;
            }),
            (Ln.noop = ol),
            (Ln.now = ko),
            (Ln.pad = function (e, t, n) {
              e = gu(e);
              var r = (t = du(t)) ? on(e) : 0;
              if (!t || r >= t) return e;
              var a = (t - r) / 2;
              return za(Rt(a), n) + e + za(ht(a), n);
            }),
            (Ln.padEnd = function (e, t, n) {
              e = gu(e);
              var r = (t = du(t)) ? on(e) : 0;
              return t && r < t ? e + za(t - r, n) : e;
            }),
            (Ln.padStart = function (e, t, n) {
              e = gu(e);
              var r = (t = du(t)) ? on(e) : 0;
              return t && r < t ? za(t - r, n) + e : e;
            }),
            (Ln.parseInt = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                yn(gu(e).replace(ee, ""), t || 0)
              );
            }),
            (Ln.random = function (t, n, r) {
              if (
                (r && "boolean" != typeof r && mi(t, n, r) && (n = r = e),
                r === e &&
                  ("boolean" == typeof n
                    ? ((r = n), (n = e))
                    : "boolean" == typeof t && ((r = t), (t = e))),
                t === e && n === e
                  ? ((t = 0), (n = 1))
                  : ((t = fu(t)), n === e ? ((n = t), (t = 0)) : (n = fu(n))),
                t > n)
              ) {
                var a = t;
                (t = n), (n = a);
              }
              if (r || t % 1 || n % 1) {
                var i = bn();
                return gn(
                  t + i * (n - t + at("1e-" + ((i + "").length - 1))),
                  n
                );
              }
              return $r(t, n);
            }),
            (Ln.reduce = function (e, t, n) {
              var r = Go(e) ? Mt : Gt,
                a = arguments.length < 3;
              return r(e, ai(t, 4), n, a, sr);
            }),
            (Ln.reduceRight = function (e, t, n) {
              var r = Go(e) ? Nt : Gt,
                a = arguments.length < 3;
              return r(e, ai(t, 4), n, a, cr);
            }),
            (Ln.repeat = function (t, n, r) {
              return (
                (n = (r ? mi(t, n, r) : n === e) ? 1 : du(n)), Hr(gu(t), n)
              );
            }),
            (Ln.replace = function () {
              var e = arguments,
                t = gu(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }),
            (Ln.result = function (t, n, r) {
              var a = -1,
                i = (n = ma(n, t)).length;
              for (i || ((i = 1), (t = e)); ++a < i; ) {
                var o = null == t ? e : t[Oi(n[a])];
                o === e && ((a = i), (o = r)), (t = Ko(o) ? o.call(t) : o);
              }
              return t;
            }),
            (Ln.round = Sl),
            (Ln.runInContext = n),
            (Ln.sample = function (e) {
              return (Go(e) ? qn : Wr)(e);
            }),
            (Ln.size = function (e) {
              if (null == e) return 0;
              if ($o(e)) return iu(e) ? on(e) : e.length;
              var t = ci(e);
              return t == b || t == k ? e.size : Rr(e).length;
            }),
            (Ln.snakeCase = Hu),
            (Ln.some = function (t, n, r) {
              var a = Go(t) ? It : ea;
              return r && mi(t, n, r) && (n = e), a(t, ai(n, 3));
            }),
            (Ln.sortedIndex = function (e, t) {
              return ta(e, t);
            }),
            (Ln.sortedIndexBy = function (e, t, n) {
              return na(e, t, ai(n, 2));
            }),
            (Ln.sortedIndexOf = function (e, t) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var r = ta(e, t);
                if (r < n && Bo(e[r], t)) return r;
              }
              return -1;
            }),
            (Ln.sortedLastIndex = function (e, t) {
              return ta(e, t, !0);
            }),
            (Ln.sortedLastIndexBy = function (e, t, n) {
              return na(e, t, ai(n, 2), !0);
            }),
            (Ln.sortedLastIndexOf = function (e, t) {
              if (null != e && e.length) {
                var n = ta(e, t, !0) - 1;
                if (Bo(e[n], t)) return n;
              }
              return -1;
            }),
            (Ln.startCase = Yu),
            (Ln.startsWith = function (e, t, n) {
              return (
                (e = gu(e)),
                (n = null == n ? 0 : ar(du(n), 0, e.length)),
                (t = ia(t)),
                e.slice(n, n + t.length) == t
              );
            }),
            (Ln.subtract = wl),
            (Ln.sum = function (e) {
              return e && e.length ? Vt(e, tl) : 0;
            }),
            (Ln.sumBy = function (e, t) {
              return e && e.length ? Vt(e, ai(t, 2)) : 0;
            }),
            (Ln.template = function (t, n, r) {
              var a = Ln.templateSettings;
              r && mi(t, n, r) && (n = e), (t = gu(t)), (n = bu({}, n, a, qa));
              var i,
                o,
                u = bu({}, n.imports, a.imports, qa),
                l = Au(u),
                s = Wt(u, l),
                c = 0,
                f = n.interpolate || ge,
                d = "__p += '",
                h = Ce(
                  (n.escape || ge).source +
                    "|" +
                    f.source +
                    "|" +
                    (f === q ? le : ge).source +
                    "|" +
                    (n.evaluate || ge).source +
                    "|$",
                  "g"
                ),
                p =
                  "//# sourceURL=" +
                  (Re.call(n, "sourceURL")
                    ? (n.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++et + "]") +
                  "\n";
              t.replace(h, function (e, n, r, a, u, l) {
                return (
                  r || (r = a),
                  (d += t.slice(c, l).replace(ve, Zt)),
                  n && ((i = !0), (d += "' +\n__e(" + n + ") +\n'")),
                  u && ((o = !0), (d += "';\n" + u + ";\n__p += '")),
                  r &&
                    (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (c = l + e.length),
                  e
                );
              }),
                (d += "';\n");
              var m = Re.call(n, "variable") && n.variable;
              if (m) {
                if (oe.test(m))
                  throw new Se(
                    "Invalid `variable` option passed into `_.template`"
                  );
              } else d = "with (obj) {\n" + d + "\n}\n";
              (d = (o ? d.replace(j, "") : d)
                .replace(z, "$1")
                .replace(U, "$1;")),
                (d =
                  "function(" +
                  (m || "obj") +
                  ") {\n" +
                  (m ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (i ? ", __e = _.escape" : "") +
                  (o
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  d +
                  "return __p\n}");
              var g = Qu(function () {
                return we(l, p + "return " + d).apply(e, s);
              });
              if (((g.source = d), qo(g))) throw g;
              return g;
            }),
            (Ln.times = function (e, t) {
              if ((e = du(e)) < 1 || e > l) return [];
              var n = c,
                r = gn(e, c);
              (t = ai(t)), (e -= c);
              for (var a = $t(r, t); ++n < e; ) t(n);
              return a;
            }),
            (Ln.toFinite = fu),
            (Ln.toInteger = du),
            (Ln.toLength = hu),
            (Ln.toLower = function (e) {
              return gu(e).toLowerCase();
            }),
            (Ln.toNumber = pu),
            (Ln.toSafeInteger = function (e) {
              return e ? ar(du(e), -9007199254740991, l) : 0 === e ? e : 0;
            }),
            (Ln.toString = gu),
            (Ln.toUpper = function (e) {
              return gu(e).toUpperCase();
            }),
            (Ln.trim = function (t, n, r) {
              if ((t = gu(t)) && (r || n === e)) return Ht(t);
              if (!t || !(n = ia(n))) return t;
              var a = un(t),
                i = un(n);
              return va(a, Kt(a, i), Qt(a, i) + 1).join("");
            }),
            (Ln.trimEnd = function (t, n, r) {
              if ((t = gu(t)) && (r || n === e)) return t.slice(0, ln(t) + 1);
              if (!t || !(n = ia(n))) return t;
              var a = un(t);
              return va(a, 0, Qt(a, un(n)) + 1).join("");
            }),
            (Ln.trimStart = function (t, n, r) {
              if ((t = gu(t)) && (r || n === e)) return t.replace(ee, "");
              if (!t || !(n = ia(n))) return t;
              var a = un(t);
              return va(a, Kt(a, un(n))).join("");
            }),
            (Ln.truncate = function (t, n) {
              var r = 30,
                a = "...";
              if (Xo(n)) {
                var i = "separator" in n ? n.separator : i;
                (r = "length" in n ? du(n.length) : r),
                  (a = "omission" in n ? ia(n.omission) : a);
              }
              var o = (t = gu(t)).length;
              if (en(t)) {
                var u = un(t);
                o = u.length;
              }
              if (r >= o) return t;
              var l = r - on(a);
              if (l < 1) return a;
              var s = u ? va(u, 0, l).join("") : t.slice(0, l);
              if (i === e) return s + a;
              if ((u && (l += s.length - l), ru(i))) {
                if (t.slice(l).search(i)) {
                  var c,
                    f = s;
                  for (
                    i.global || (i = Ce(i.source, gu(se.exec(i)) + "g")),
                      i.lastIndex = 0;
                    (c = i.exec(f));

                  )
                    var d = c.index;
                  s = s.slice(0, d === e ? l : d);
                }
              } else if (t.indexOf(ia(i), l) != l) {
                var h = s.lastIndexOf(i);
                h > -1 && (s = s.slice(0, h));
              }
              return s + a;
            }),
            (Ln.unescape = function (e) {
              return (e = gu(e)) && $.test(e) ? e.replace(G, sn) : e;
            }),
            (Ln.uniqueId = function (e) {
              var t = ++Oe;
              return gu(e) + t;
            }),
            (Ln.upperCase = Wu),
            (Ln.upperFirst = qu),
            (Ln.each = go),
            (Ln.eachRight = vo),
            (Ln.first = Vi),
            il(
              Ln,
              ((ml = {}),
              vr(Ln, function (e, t) {
                Re.call(Ln.prototype, t) || (ml[t] = e);
              }),
              ml),
              { chain: !1 }
            ),
            (Ln.VERSION = "4.17.21"),
            wt(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                Ln[e].placeholder = Ln;
              }
            ),
            wt(["drop", "take"], function (t, n) {
              (Un.prototype[t] = function (r) {
                r = r === e ? 1 : mn(du(r), 0);
                var a = this.__filtered__ && !n ? new Un(this) : this.clone();
                return (
                  a.__filtered__
                    ? (a.__takeCount__ = gn(r, a.__takeCount__))
                    : a.__views__.push({
                        size: gn(r, c),
                        type: t + (a.__dir__ < 0 ? "Right" : ""),
                      }),
                  a
                );
              }),
                (Un.prototype[t + "Right"] = function (e) {
                  return this.reverse()[t](e).reverse();
                });
            }),
            wt(["filter", "map", "takeWhile"], function (e, t) {
              var n = t + 1,
                r = 1 == n || 3 == n;
              Un.prototype[e] = function (e) {
                var t = this.clone();
                return (
                  t.__iteratees__.push({ iteratee: ai(e, 3), type: n }),
                  (t.__filtered__ = t.__filtered__ || r),
                  t
                );
              };
            }),
            wt(["head", "last"], function (e, t) {
              var n = "take" + (t ? "Right" : "");
              Un.prototype[e] = function () {
                return this[n](1).value()[0];
              };
            }),
            wt(["initial", "tail"], function (e, t) {
              var n = "drop" + (t ? "" : "Right");
              Un.prototype[e] = function () {
                return this.__filtered__ ? new Un(this) : this[n](1);
              };
            }),
            (Un.prototype.compact = function () {
              return this.filter(tl);
            }),
            (Un.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (Un.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (Un.prototype.invokeMap = Yr(function (e, t) {
              return "function" == typeof e
                ? new Un(this)
                : this.map(function (n) {
                    return xr(n, e, t);
                  });
            })),
            (Un.prototype.reject = function (e) {
              return this.filter(Ro(ai(e)));
            }),
            (Un.prototype.slice = function (t, n) {
              t = du(t);
              var r = this;
              return r.__filtered__ && (t > 0 || n < 0)
                ? new Un(r)
                : (t < 0 ? (r = r.takeRight(-t)) : t && (r = r.drop(t)),
                  n !== e &&
                    (r = (n = du(n)) < 0 ? r.dropRight(-n) : r.take(n - t)),
                  r);
            }),
            (Un.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (Un.prototype.toArray = function () {
              return this.take(c);
            }),
            vr(Un.prototype, function (t, n) {
              var r = /^(?:filter|find|map|reject)|While$/.test(n),
                a = /^(?:head|last)$/.test(n),
                i = Ln[a ? "take" + ("last" == n ? "Right" : "") : n],
                o = a || /^find/.test(n);
              i &&
                (Ln.prototype[n] = function () {
                  var n = this.__wrapped__,
                    u = a ? [1] : arguments,
                    l = n instanceof Un,
                    s = u[0],
                    c = l || Go(n),
                    f = function (e) {
                      var t = i.apply(Ln, At([e], u));
                      return a && d ? t[0] : t;
                    };
                  c &&
                    r &&
                    "function" == typeof s &&
                    1 != s.length &&
                    (l = c = !1);
                  var d = this.__chain__,
                    h = !!this.__actions__.length,
                    p = o && !d,
                    m = l && !h;
                  if (!o && c) {
                    n = m ? n : new Un(this);
                    var g = t.apply(n, u);
                    return (
                      g.__actions__.push({ func: co, args: [f], thisArg: e }),
                      new zn(g, d)
                    );
                  }
                  return p && m
                    ? t.apply(this, u)
                    : ((g = this.thru(f)),
                      p ? (a ? g.value()[0] : g.value()) : g);
                });
            }),
            wt(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = Pe[e],
                  n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  r = /^(?:pop|shift)$/.test(e);
                Ln.prototype[e] = function () {
                  var e = arguments;
                  if (r && !this.__chain__) {
                    var a = this.value();
                    return t.apply(Go(a) ? a : [], e);
                  }
                  return this[n](function (n) {
                    return t.apply(Go(n) ? n : [], e);
                  });
                };
              }
            ),
            vr(Un.prototype, function (e, t) {
              var n = Ln[t];
              if (n) {
                var r = n.name + "";
                Re.call(Pn, r) || (Pn[r] = []),
                  Pn[r].push({ name: t, func: n });
              }
            }),
            (Pn[Da(e, 2).name] = [{ name: "wrapper", func: e }]),
            (Un.prototype.clone = function () {
              var e = new Un(this.__wrapped__);
              return (
                (e.__actions__ = Ca(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = Ca(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = Ca(this.__views__)),
                e
              );
            }),
            (Un.prototype.reverse = function () {
              if (this.__filtered__) {
                var e = new Un(this);
                (e.__dir__ = -1), (e.__filtered__ = !0);
              } else (e = this.clone()).__dir__ *= -1;
              return e;
            }),
            (Un.prototype.value = function () {
              var e = this.__wrapped__.value(),
                t = this.__dir__,
                n = Go(e),
                r = t < 0,
                a = n ? e.length : 0,
                i = (function (e, t, n) {
                  for (var r = -1, a = n.length; ++r < a; ) {
                    var i = n[r],
                      o = i.size;
                    switch (i.type) {
                      case "drop":
                        e += o;
                        break;
                      case "dropRight":
                        t -= o;
                        break;
                      case "take":
                        t = gn(t, e + o);
                        break;
                      case "takeRight":
                        e = mn(e, t - o);
                    }
                  }
                  return { start: e, end: t };
                })(0, a, this.__views__),
                o = i.start,
                u = i.end,
                l = u - o,
                s = r ? u : o - 1,
                c = this.__iteratees__,
                f = c.length,
                d = 0,
                h = gn(l, this.__takeCount__);
              if (!n || (!r && a == l && h == l))
                return ca(e, this.__actions__);
              var p = [];
              e: for (; l-- && d < h; ) {
                for (var m = -1, g = e[(s += t)]; ++m < f; ) {
                  var v = c[m],
                    y = v.iteratee,
                    b = v.type,
                    _ = y(g);
                  if (2 == b) g = _;
                  else if (!_) {
                    if (1 == b) continue e;
                    break e;
                  }
                }
                p[d++] = g;
              }
              return p;
            }),
            (Ln.prototype.at = fo),
            (Ln.prototype.chain = function () {
              return so(this);
            }),
            (Ln.prototype.commit = function () {
              return new zn(this.value(), this.__chain__);
            }),
            (Ln.prototype.next = function () {
              this.__values__ === e && (this.__values__ = cu(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? e : this.__values__[this.__index__++],
              };
            }),
            (Ln.prototype.plant = function (t) {
              for (var n, r = this; r instanceof jn; ) {
                var a = Di(r);
                (a.__index__ = 0),
                  (a.__values__ = e),
                  n ? (i.__wrapped__ = a) : (n = a);
                var i = a;
                r = r.__wrapped__;
              }
              return (i.__wrapped__ = t), n;
            }),
            (Ln.prototype.reverse = function () {
              var t = this.__wrapped__;
              if (t instanceof Un) {
                var n = t;
                return (
                  this.__actions__.length && (n = new Un(this)),
                  (n = n.reverse()).__actions__.push({
                    func: co,
                    args: [Ji],
                    thisArg: e,
                  }),
                  new zn(n, this.__chain__)
                );
              }
              return this.thru(Ji);
            }),
            (Ln.prototype.toJSON =
              Ln.prototype.valueOf =
              Ln.prototype.value =
                function () {
                  return ca(this.__wrapped__, this.__actions__);
                }),
            (Ln.prototype.first = Ln.prototype.head),
            rt &&
              (Ln.prototype[rt] = function () {
                return this;
              }),
            Ln
          );
        })();
      ct ? (((ct.exports = cn)._ = cn), (st._ = cn)) : (lt._ = cn);
    }.call(n);
  var qh,
    Kh = Wh.exports,
    Qh = {},
    Jh = {},
    Xh = {},
    Zh = { exports: {} };
  Zh.exports = (function () {
    var e = 6e4,
      t = 36e5,
      n = "millisecond",
      r = "second",
      a = "minute",
      i = "hour",
      o = "day",
      u = "week",
      l = "month",
      s = "quarter",
      c = "year",
      f = "date",
      d = "Invalid Date",
      h =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      p =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      m = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (e) {
          var t = ["th", "st", "nd", "rd"],
            n = e % 100;
          return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
        },
      },
      g = function (e, t, n) {
        var r = String(e);
        return !r || r.length >= t
          ? e
          : "" + Array(t + 1 - r.length).join(n) + e;
      },
      v = {
        s: g,
        z: function (e) {
          var t = -e.utcOffset(),
            n = Math.abs(t),
            r = Math.floor(n / 60),
            a = n % 60;
          return (t <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(a, 2, "0");
        },
        m: function e(t, n) {
          if (t.date() < n.date()) return -e(n, t);
          var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
            a = t.clone().add(r, l),
            i = n - a < 0,
            o = t.clone().add(r + (i ? -1 : 1), l);
          return +(-(r + (n - a) / (i ? a - o : o - a)) || 0);
        },
        a: function (e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        },
        p: function (e) {
          return (
            { M: l, y: c, w: u, d: o, D: f, h: i, m: a, s: r, ms: n, Q: s }[
              e
            ] ||
            String(e || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (e) {
          return void 0 === e;
        },
      },
      y = "en",
      b = {};
    b[y] = m;
    var _ = function (e) {
        return e instanceof k;
      },
      S = function e(t, n, r) {
        var a;
        if (!t) return y;
        if ("string" == typeof t) {
          var i = t.toLowerCase();
          b[i] && (a = i), n && ((b[i] = n), (a = i));
          var o = t.split("-");
          if (!a && o.length > 1) return e(o[0]);
        } else {
          var u = t.name;
          (b[u] = t), (a = u);
        }
        return !r && a && (y = a), a || (!r && y);
      },
      w = function (e, t) {
        if (_(e)) return e.clone();
        var n = "object" == typeof t ? t : {};
        return (n.date = e), (n.args = arguments), new k(n);
      },
      T = v;
    (T.l = S),
      (T.i = _),
      (T.w = function (e, t) {
        return w(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
      });
    var k = (function () {
        function m(e) {
          (this.$L = S(e.locale, null, !0)), this.parse(e);
        }
        var g = m.prototype;
        return (
          (g.parse = function (e) {
            (this.$d = (function (e) {
              var t = e.date,
                n = e.utc;
              if (null === t) return new Date(NaN);
              if (T.u(t)) return new Date();
              if (t instanceof Date) return new Date(t);
              if ("string" == typeof t && !/Z$/i.test(t)) {
                var r = t.match(h);
                if (r) {
                  var a = r[2] - 1 || 0,
                    i = (r[7] || "0").substring(0, 3);
                  return n
                    ? new Date(
                        Date.UTC(
                          r[1],
                          a,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          i
                        )
                      )
                    : new Date(
                        r[1],
                        a,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        i
                      );
                }
              }
              return new Date(t);
            })(e)),
              (this.$x = e.x || {}),
              this.init();
          }),
          (g.init = function () {
            var e = this.$d;
            (this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds());
          }),
          (g.$utils = function () {
            return T;
          }),
          (g.isValid = function () {
            return !(this.$d.toString() === d);
          }),
          (g.isSame = function (e, t) {
            var n = w(e);
            return this.startOf(t) <= n && n <= this.endOf(t);
          }),
          (g.isAfter = function (e, t) {
            return w(e) < this.startOf(t);
          }),
          (g.isBefore = function (e, t) {
            return this.endOf(t) < w(e);
          }),
          (g.$g = function (e, t, n) {
            return T.u(e) ? this[t] : this.set(n, e);
          }),
          (g.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (g.valueOf = function () {
            return this.$d.getTime();
          }),
          (g.startOf = function (e, t) {
            var n = this,
              s = !!T.u(t) || t,
              d = T.p(e),
              h = function (e, t) {
                var r = T.w(
                  n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e),
                  n
                );
                return s ? r : r.endOf(o);
              },
              p = function (e, t) {
                return T.w(
                  n
                    .toDate()
                    [e].apply(
                      n.toDate("s"),
                      (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                    ),
                  n
                );
              },
              m = this.$W,
              g = this.$M,
              v = this.$D,
              y = "set" + (this.$u ? "UTC" : "");
            switch (d) {
              case c:
                return s ? h(1, 0) : h(31, 11);
              case l:
                return s ? h(1, g) : h(0, g + 1);
              case u:
                var b = this.$locale().weekStart || 0,
                  _ = (m < b ? m + 7 : m) - b;
                return h(s ? v - _ : v + (6 - _), g);
              case o:
              case f:
                return p(y + "Hours", 0);
              case i:
                return p(y + "Minutes", 1);
              case a:
                return p(y + "Seconds", 2);
              case r:
                return p(y + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (g.endOf = function (e) {
            return this.startOf(e, !1);
          }),
          (g.$set = function (e, t) {
            var u,
              s = T.p(e),
              d = "set" + (this.$u ? "UTC" : ""),
              h = ((u = {}),
              (u[o] = d + "Date"),
              (u[f] = d + "Date"),
              (u[l] = d + "Month"),
              (u[c] = d + "FullYear"),
              (u[i] = d + "Hours"),
              (u[a] = d + "Minutes"),
              (u[r] = d + "Seconds"),
              (u[n] = d + "Milliseconds"),
              u)[s],
              p = s === o ? this.$D + (t - this.$W) : t;
            if (s === l || s === c) {
              var m = this.clone().set(f, 1);
              m.$d[h](p),
                m.init(),
                (this.$d = m.set(f, Math.min(this.$D, m.daysInMonth())).$d);
            } else h && this.$d[h](p);
            return this.init(), this;
          }),
          (g.set = function (e, t) {
            return this.clone().$set(e, t);
          }),
          (g.get = function (e) {
            return this[T.p(e)]();
          }),
          (g.add = function (n, s) {
            var f,
              d = this;
            n = Number(n);
            var h = T.p(s),
              p = function (e) {
                var t = w(d);
                return T.w(t.date(t.date() + Math.round(e * n)), d);
              };
            if (h === l) return this.set(l, this.$M + n);
            if (h === c) return this.set(c, this.$y + n);
            if (h === o) return p(1);
            if (h === u) return p(7);
            var m = ((f = {}), (f[a] = e), (f[i] = t), (f[r] = 1e3), f)[h] || 1,
              g = this.$d.getTime() + n * m;
            return T.w(g, this);
          }),
          (g.subtract = function (e, t) {
            return this.add(-1 * e, t);
          }),
          (g.format = function (e) {
            var t = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || d;
            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
              a = T.z(this),
              i = this.$H,
              o = this.$m,
              u = this.$M,
              l = n.weekdays,
              s = n.months,
              c = n.meridiem,
              f = function (e, n, a, i) {
                return (e && (e[n] || e(t, r))) || a[n].slice(0, i);
              },
              h = function (e) {
                return T.s(i % 12 || 12, e, "0");
              },
              m =
                c ||
                function (e, t, n) {
                  var r = e < 12 ? "AM" : "PM";
                  return n ? r.toLowerCase() : r;
                };
            return r.replace(p, function (e, r) {
              return (
                r ||
                (function (e) {
                  switch (e) {
                    case "YY":
                      return String(t.$y).slice(-2);
                    case "YYYY":
                      return T.s(t.$y, 4, "0");
                    case "M":
                      return u + 1;
                    case "MM":
                      return T.s(u + 1, 2, "0");
                    case "MMM":
                      return f(n.monthsShort, u, s, 3);
                    case "MMMM":
                      return f(s, u);
                    case "D":
                      return t.$D;
                    case "DD":
                      return T.s(t.$D, 2, "0");
                    case "d":
                      return String(t.$W);
                    case "dd":
                      return f(n.weekdaysMin, t.$W, l, 2);
                    case "ddd":
                      return f(n.weekdaysShort, t.$W, l, 3);
                    case "dddd":
                      return l[t.$W];
                    case "H":
                      return String(i);
                    case "HH":
                      return T.s(i, 2, "0");
                    case "h":
                      return h(1);
                    case "hh":
                      return h(2);
                    case "a":
                      return m(i, o, !0);
                    case "A":
                      return m(i, o, !1);
                    case "m":
                      return String(o);
                    case "mm":
                      return T.s(o, 2, "0");
                    case "s":
                      return String(t.$s);
                    case "ss":
                      return T.s(t.$s, 2, "0");
                    case "SSS":
                      return T.s(t.$ms, 3, "0");
                    case "Z":
                      return a;
                  }
                  return null;
                })(e) ||
                a.replace(":", "")
              );
            });
          }),
          (g.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (g.diff = function (n, f, d) {
            var h,
              p = this,
              m = T.p(f),
              g = w(n),
              v = (g.utcOffset() - this.utcOffset()) * e,
              y = this - g,
              b = function () {
                return T.m(p, g);
              };
            switch (m) {
              case c:
                h = b() / 12;
                break;
              case l:
                h = b();
                break;
              case s:
                h = b() / 3;
                break;
              case u:
                h = (y - v) / 6048e5;
                break;
              case o:
                h = (y - v) / 864e5;
                break;
              case i:
                h = y / t;
                break;
              case a:
                h = y / e;
                break;
              case r:
                h = y / 1e3;
                break;
              default:
                h = y;
            }
            return d ? h : T.a(h);
          }),
          (g.daysInMonth = function () {
            return this.endOf(l).$D;
          }),
          (g.$locale = function () {
            return b[this.$L];
          }),
          (g.locale = function (e, t) {
            if (!e) return this.$L;
            var n = this.clone(),
              r = S(e, t, !0);
            return r && (n.$L = r), n;
          }),
          (g.clone = function () {
            return T.w(this.$d, this);
          }),
          (g.toDate = function () {
            return new Date(this.valueOf());
          }),
          (g.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (g.toISOString = function () {
            return this.$d.toISOString();
          }),
          (g.toString = function () {
            return this.$d.toUTCString();
          }),
          m
        );
      })(),
      C = k.prototype;
    return (
      (w.prototype = C),
      [
        ["$ms", n],
        ["$s", r],
        ["$m", a],
        ["$H", i],
        ["$W", o],
        ["$M", l],
        ["$y", c],
        ["$D", f],
      ].forEach(function (e) {
        C[e[1]] = function (t) {
          return this.$g(t, e[0], e[1]);
        };
      }),
      (w.extend = function (e, t) {
        return e.$i || (e(t, k, w), (e.$i = !0)), w;
      }),
      (w.locale = S),
      (w.isDayjs = _),
      (w.unix = function (e) {
        return w(1e3 * e);
      }),
      (w.en = b[y]),
      (w.Ls = b),
      (w.p = {}),
      w
    );
  })();
  var ep = Zh.exports,
    tp = { exports: {} };
  !(function (e, t) {
    var n, r, a;
    e.exports =
      ((n = "minute"),
      (r = /[+-]\d\d(?::?\d\d)?/g),
      (a = /([+-]|\d\d)/g),
      function (e, t, i) {
        var o = t.prototype;
        (i.utc = function (e) {
          return new t({ date: e, utc: !0, args: arguments });
        }),
          (o.utc = function (e) {
            var t = i(this.toDate(), { locale: this.$L, utc: !0 });
            return e ? t.add(this.utcOffset(), n) : t;
          }),
          (o.local = function () {
            return i(this.toDate(), { locale: this.$L, utc: !1 });
          });
        var u = o.parse;
        o.parse = function (e) {
          e.utc && (this.$u = !0),
            this.$utils().u(e.$offset) || (this.$offset = e.$offset),
            u.call(this, e);
        };
        var l = o.init;
        o.init = function () {
          if (this.$u) {
            var e = this.$d;
            (this.$y = e.getUTCFullYear()),
              (this.$M = e.getUTCMonth()),
              (this.$D = e.getUTCDate()),
              (this.$W = e.getUTCDay()),
              (this.$H = e.getUTCHours()),
              (this.$m = e.getUTCMinutes()),
              (this.$s = e.getUTCSeconds()),
              (this.$ms = e.getUTCMilliseconds());
          } else l.call(this);
        };
        var s = o.utcOffset;
        o.utcOffset = function (e, t) {
          var i = this.$utils().u;
          if (i(e))
            return this.$u ? 0 : i(this.$offset) ? s.call(this) : this.$offset;
          if (
            "string" == typeof e &&
            null ===
              (e = (function (e) {
                void 0 === e && (e = "");
                var t = e.match(r);
                if (!t) return null;
                var n = ("" + t[0]).match(a) || ["-", 0, 0],
                  i = n[0],
                  o = 60 * +n[1] + +n[2];
                return 0 === o ? 0 : "+" === i ? o : -o;
              })(e))
          )
            return this;
          var o = Math.abs(e) <= 16 ? 60 * e : e,
            u = this;
          if (t) return (u.$offset = o), (u.$u = 0 === e), u;
          if (0 !== e) {
            var l = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset();
            ((u = this.local().add(o + l, n)).$offset = o),
              (u.$x.$localOffset = l);
          } else u = this.utc();
          return u;
        };
        var c = o.format;
        (o.format = function (e) {
          var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return c.call(this, t);
        }),
          (o.valueOf = function () {
            var e = this.$utils().u(this.$offset)
              ? 0
              : this.$offset +
                (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * e;
          }),
          (o.isUTC = function () {
            return !!this.$u;
          }),
          (o.toISOString = function () {
            return this.toDate().toISOString();
          }),
          (o.toString = function () {
            return this.toDate().toUTCString();
          });
        var f = o.toDate;
        o.toDate = function (e) {
          return "s" === e && this.$offset
            ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
            : f.call(this);
        };
        var d = o.diff;
        o.diff = function (e, t, n) {
          if (e && this.$u === e.$u) return d.call(this, e, t, n);
          var r = this.local(),
            a = i(e).local();
          return d.call(r, a, t, n);
        };
      });
  })(tp);
  var np = tp.exports;
  const rp = ep,
    ap = np;
  rp.extend(ap);
  const ip = ({ day: e = 1, month: t, year: n }) =>
      rp(`${n}-${t}-${e}`, "YYYY-M-D"),
    op = (e, t, n, r) => {
      let a = rp(ip({ month: n, year: r })).day(t);
      return (
        a.month() !== n - 1 && (a = a.add(1, "week")),
        (a = a.add(e - 1, "week")),
        a
      );
    },
    up = (e, t, n) => {
      const r = rp(ip({ month: t, year: n })).daysInMonth();
      let a = rp(`${n}-${t}-${r}`, "YYYY-M-D").day(e);
      return a.month() !== t - 1 && (a = a.subtract(1, "week")), a;
    },
    lp = (
      e = new Date().getFullYear(),
      { shiftSaturdayHolidays: t = !0, shiftSundayHolidays: n = !0 } = {}
    ) => {
      const r = [];
      return (
        r.push({
          name: "New Year's Day",
          date: ip({ day: 1, month: 1, year: e }),
        }),
        r.push({
          name: "Birthday of Martin Luther King, Jr.",
          date: op(3, 1, 1, e),
        }),
        r.push({
          name: "Washington's Birthday",
          alsoObservedAs: "Presidents' Day",
          date: op(3, 1, 2, e),
        }),
        r.push({ name: "Memorial Day", date: up(1, 5, e) }),
        e > 2020 &&
          r.push({
            name: "Juneteenth National Independence Day",
            date: ip({ day: 19, month: 6, year: e }),
          }),
        r.push({
          name: "Independence Day",
          date: ip({ day: 4, month: 7, year: e }),
        }),
        r.push({ name: "Labor Day", date: op(1, 1, 9, e) }),
        r.push({
          name: "Columbus Day",
          alsoObservedAs: "Indigenous Peoples' Day",
          date: op(2, 1, 10, e),
        }),
        r.push({
          name: "Veterans Day",
          date: ip({ day: 11, month: 11, year: e }),
        }),
        r.push({ name: "Thanksgiving Day", date: op(4, 4, 11, e) }),
        r.push({
          name: "Christmas Day",
          date: ip({ day: 25, month: 12, year: e }),
        }),
        r.map((e) => {
          let r = rp(e.date);
          return (
            0 === r.day() && n && (r = r.add(1, "day")),
            6 === r.day() && t && (r = r.subtract(1, "day")),
            {
              name: e.name,
              alsoObservedAs: e.alsoObservedAs,
              date: r.toDate(),
              dateString: r.format("YYYY-MM-DD"),
            }
          );
        })
      );
    };
  var sp,
    cp,
    fp = {
      isAHoliday: (
        e = new Date(),
        {
          shiftSaturdayHolidays: t = !0,
          shiftSundayHolidays: n = !0,
          utc: r = !1,
        } = {}
      ) => {
        const a = r ? rp.utc(e) : rp(e),
          i = a.year(),
          o = { shiftSaturdayHolidays: t, shiftSundayHolidays: n },
          u = lp(i, o),
          l = lp(i + 1, o);
        return (
          u.push(l[0]), u.some((e) => e.dateString === a.format("YYYY-MM-DD"))
        );
      },
      allForYear: lp,
      inRange: (
        e = new Date(),
        t = (() => {
          const e = new Date();
          return e.setUTCFullYear(e.getUTCFullYear() + 1), e;
        })(),
        n = void 0
      ) => {
        const r = e.getFullYear(),
          a = t.getFullYear(),
          i = [];
        for (let o = r; o <= a; o += 1) i.push(...lp(o, n));
        return i.filter((n) => n.date >= e && n.date <= t);
      },
    },
    dp = {};
  Object.defineProperty(dp, "__esModule", { value: !0 }),
    (dp.JointCalendar = dp.JointCalendarRule = void 0),
    (function (e) {
      (e.Union = "Union"), (e.Intersection = "intersection");
    })(cp || (dp.JointCalendarRule = cp = {})),
    (dp.JointCalendar = class {
      constructor(e, t) {
        (this.calendars = e), (this.rule = t);
      }
      isBusinessDay(e) {
        return this.rule === cp.Union
          ? this.calendars.every((t) => t.isBusinessDay(e))
          : this.calendars.some((t) => t.isBusinessDay(e));
      }
    });
  var hp,
    pp = {},
    mp = {};
  Object.defineProperty(mp, "__esModule", { value: !0 }),
    (mp.NullCalendar = void 0),
    (mp.NullCalendar = class {
      constructor() {
        this.name = "Null";
      }
      isBusinessDay() {
        return !0;
      }
    });
  var gp,
    vp = {};
  function yp() {
    return (
      gp ||
        ((gp = 1),
        (function (e) {
          var t =
              (n && n.__createBinding) ||
              (Object.create
                ? function (e, t, n, r) {
                    void 0 === r && (r = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    (a &&
                      !("get" in a
                        ? !t.__esModule
                        : a.writable || a.configurable)) ||
                      (a = {
                        enumerable: !0,
                        get: function () {
                          return t[n];
                        },
                      }),
                      Object.defineProperty(e, r, a);
                  }
                : function (e, t, n, r) {
                    void 0 === r && (r = n), (e[r] = t[n]);
                  }),
            r =
              (n && n.__exportStar) ||
              function (e, n) {
                for (var r in e)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(n, r) ||
                    t(n, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(
              (function () {
                if (qh) return Jh;
                (qh = 1),
                  Object.defineProperty(Jh, "__esModule", { value: !0 }),
                  (Jh.SwedenCalendar = void 0);
                const e = yp();
                return (
                  (Jh.SwedenCalendar = class {
                    constructor() {
                      this.name = "Sweden";
                    }
                    isBusinessDay(t) {
                      let n = e.DateHelper.getDayOfWeek(t);
                      if (6 === n || 0 === n) return !1;
                      let r = e.DateHelper.getMonth(t) + 1,
                        a = e.DateHelper.getDay(t);
                      if (1 === r && (1 === a || 6 === a)) return !1;
                      if (
                        12 === r &&
                        (24 === a || 25 === a || 26 === a || 31 === a)
                      )
                        return !1;
                      if (5 === r && 1 === a) return !1;
                      let i = e.DateHelper.getYear(t);
                      if (6 === r) {
                        if (6 === a) return !1;
                        if (5 === n && a >= 19 && a <= 25) return !1;
                      }
                      let o =
                        e.DateHelper.getDayOfYear(i, r - 1, a) -
                        e.DateHelper.getEasterDay(i);
                      return -2 !== o && 1 !== o && 39 !== o;
                    }
                  }),
                  Jh
                );
              })(),
              e
            ),
            r(
              (function () {
                if (sp) return Xh;
                sp = 1;
                var e =
                  (n && n.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(Xh, "__esModule", { value: !0 }),
                  (Xh.UnitedStatesCalendar = void 0);
                const t = e(fp),
                  r = yp();
                let a = class e {
                  constructor() {
                    this.name = "United States";
                  }
                  isBusinessDay(n) {
                    const a = r.DateHelper.timestampToComparable;
                    let i = r.DateHelper.getDayOfWeek(n);
                    if (6 === i || 0 === i) return !1;
                    let o = r.DateHelper.getYear(n);
                    var u = e.holidaysByYears[o];
                    void 0 === u &&
                      ((u = t.default.allForYear(n).map((e) => e.date)),
                      (e.holidaysByYears[o] = u));
                    var l = a(n instanceof Date ? n : n.toDate());
                    return u.findIndex((e) => a(e) === l) < 0;
                  }
                };
                return (
                  (Xh.UnitedStatesCalendar = a), (a.holidaysByYears = {}), Xh
                );
              })(),
              e
            ),
            r(dp, e),
            r(
              (function () {
                if (hp) return pp;
                (hp = 1),
                  Object.defineProperty(pp, "__esModule", { value: !0 }),
                  (pp.MondayToFridayCalendar = void 0);
                const e = yp();
                return (
                  (pp.MondayToFridayCalendar = class {
                    constructor() {
                      this.name = "Monday to Friday";
                    }
                    isBusinessDay(t) {
                      let n = e.DateHelper.getDayOfWeek(t);
                      return n >= 1 && n <= 5;
                    }
                  }),
                  pp
                );
              })(),
              e
            ),
            r(mp, e),
            r(vp, e);
        })(Qh)),
      Qh
    );
  }
  !(function (e) {
    var t, n;
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.DateHelper = e.YearFractionBasis = e.msPerDay = void 0),
      (e.msPerDay = 864e5),
      ((n = t || (e.YearFractionBasis = t = {})).ActualActual = "ActualActual"),
      (n.Actual365 = "Actual365"),
      (n.Actual360 = "Actual360");
    class r {
      static today() {
        var e = new Date();
        return e.setUTCHours(0, 0, 0, 0), e;
      }
      static dateToString(t) {
        var n = t.toISOString();
        return t.getTime() % e.msPerDay == 0
          ? n.substring(0, 10)
          : n.replace(/T/, " ").replace(/\..+/, "");
      }
      static addYears(e, t) {
        return r.addMonths(e, 12 * t);
      }
      static isLeapYear(e) {
        return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
      }
      static getDaysInMonth(e, t) {
        var n = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
        return 1 === t && r.isLeapYear(e) && (n = 29), n;
      }
      static getEasterDay(e) {
        var t = ((e % 19) * 19 + 24) % 30,
          n = ((e % 4) * 2 + (e % 7) * 4 + 6 * t + 5) % 7,
          a = t + n,
          i = a + 22 <= 31 ? 3 : 4,
          o =
            a +
            (3 === i ? 22 : -9) +
            (a - 9 == 26 ? -7 : 0) +
            (28 === t && 6 === n ? -7 : 0);
        return r.getDayOfYear(e, i - 1, o);
      }
      static getDayOfYear(e, t, n) {
        return (
          (r.isLeapYear(e)
            ? [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
            : [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365])[t] +
          n
        );
      }
      static getEndOfMonth(e, t) {
        var n = r.getDaysInMonth(e, t);
        return new Date(Date.UTC(e, t, n));
      }
      static toDate(t) {
        var n;
        return (
          t instanceof Date
            ? (n = t)
            : "string" == typeof t
            ? (n = new Date(t))
            : "number" == typeof t &&
              (n = new Date(t / (t >= 1 && t <= 401768 ? 1 : e.msPerDay))),
          n
        );
      }
      static getMonth(e) {
        return r.toDate(e).getUTCMonth();
      }
      static getDay(e) {
        return r.toDate(e).getUTCDate();
      }
      static getDayOfWeek(e) {
        return r.toDate(e).getUTCDay();
      }
      static getYear(e) {
        return r.toDate(e).getUTCFullYear();
      }
      static dateAddDays(e, t) {
        var n = new Date(
          Date.UTC(
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate() + t,
            0,
            0,
            0
          )
        );
        return n.setUTCHours(0, 0, 0, 0), n;
      }
      static addDays(e, t) {
        var n = typeof e;
        if ("number" === n)
          return e >= 0 && e < 2e6
            ? e + t
            : r.dateAddDays(new Date(e), t).getTime();
        if ("string" === n)
          return r.timestampToString(r.addDays(new Date(e), t));
        if (e instanceof Date) return r.dateAddDays(e, t);
        if (void 0 !== e.addDays) return e.addDays(t);
        throw new Error("Cannot add days to timestamp");
      }
      static dateAddMonths(e, t) {
        var n = new Date(e.getTime()),
          a = n.getUTCDate();
        n.setUTCDate(1), n.setUTCMonth(n.getUTCMonth() + t);
        var i = Math.min(
          a,
          r.getDaysInMonth(n.getUTCFullYear(), n.getUTCMonth())
        );
        return n.setUTCDate(i), n;
      }
      static addMonths(e, t) {
        var n = typeof e;
        if ("number" === n) return r.dateAddMonths(new Date(e), t).getTime();
        if ("string" === n)
          return r.timestampToString(r.dateAddMonths(new Date(e), t));
        if (e instanceof Date) return r.dateAddMonths(e, t);
        if (void 0 !== e.addMonths) return e.addMonths(t);
        throw new Error("Cannot add months to timestamp");
      }
      static timestampToString(e) {
        var t = typeof e;
        if ("string" === t) return e;
        if (e instanceof Date) return r.dateToString(e);
        if ("number" === t || void 0 !== e.toString) return e.toString();
        throw new Error("Cannot stringify timestamp");
      }
      static timestampToComparable(e) {
        var t = typeof e;
        if ("string" === t) return new Date(e).getTime();
        if ("number" === t) return e;
        if (e instanceof Date) return e.getTime();
        if (void 0 !== e.number) return e.number;
        throw new Error("Cannot compare timestamp");
      }
      static yearFrac(t, n) {
        return (n - t) / 365 / e.msPerDay;
      }
      static yearFraction(n, a, i = t.ActualActual) {
        const o = r.timestampToComparable(n),
          u = r.timestampToComparable(a);
        if (o === u) return 0;
        if (o > u) return -r.yearFraction(a, n, i);
        if (i === t.Actual365) return (u - o) / 365 / e.msPerDay;
        if (i === t.Actual360) return (u - o) / 360 / e.msPerDay;
        if (i === t.ActualActual) {
          let t = 0,
            n = r.timestampToComparable(o);
          for (; r.addYears(n, 1) < u; ) (t += 1), (n = r.addYears(n, 1));
          let a = 365,
            i = r.getYear(new Date(n)),
            l = r.getYear(new Date(u));
          if (r.isLeapYear(i)) {
            let e = r.timestampToComparable(i.toString() + "-02-29");
            n <= e && u > e && (a += 1);
          } else if (r.isLeapYear(l)) {
            let e = r.timestampToComparable(l.toString() + "-02-29");
            n <= e && u > e && (a += 1);
          }
          return t + (u - n) / a / e.msPerDay;
        }
      }
    }
    (e.DateHelper = r),
      (r.isDate = (e) => /^[12][90][0-9]{2}-[01][0-9]-[0-3][0-9]$/.exec(e));
  })(vp);
  var bp = {},
    _p = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t,
          n = this,
          r =
            ((t = 4022871197),
            function (e) {
              e = String(e);
              for (var n = 0; n < e.length; n++) {
                var r = 0.02519603282416938 * (t += e.charCodeAt(n));
                (r -= t = r >>> 0),
                  (t = (r *= t) >>> 0),
                  (t += 4294967296 * (r -= t));
              }
              return 2.3283064365386963e-10 * (t >>> 0);
            });
        (n.next = function () {
          var e = 2091639 * n.s0 + 2.3283064365386963e-10 * n.c;
          return (n.s0 = n.s1), (n.s1 = n.s2), (n.s2 = e - (n.c = 0 | e));
        }),
          (n.c = 1),
          (n.s0 = r(" ")),
          (n.s1 = r(" ")),
          (n.s2 = r(" ")),
          (n.s0 -= r(e)),
          n.s0 < 0 && (n.s0 += 1),
          (n.s1 -= r(e)),
          n.s1 < 0 && (n.s1 += 1),
          (n.s2 -= r(e)),
          n.s2 < 0 && (n.s2 += 1),
          (r = null);
      }
      function a(e, t) {
        return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
      }
      function i(e, t) {
        var n = new r(e),
          i = t && t.state,
          o = n.next;
        return (
          (o.int32 = function () {
            return (4294967296 * n.next()) | 0;
          }),
          (o.double = function () {
            return o() + 11102230246251565e-32 * ((2097152 * o()) | 0);
          }),
          (o.quick = o),
          i &&
            ("object" == typeof i && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.alea = i);
    })(0, e);
  })(_p);
  var Sp = _p.exports,
    wp = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t = this,
          n = "";
        (t.x = 0),
          (t.y = 0),
          (t.z = 0),
          (t.w = 0),
          (t.next = function () {
            var e = t.x ^ (t.x << 11);
            return (
              (t.x = t.y),
              (t.y = t.z),
              (t.z = t.w),
              (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
            );
          }),
          e === (0 | e) ? (t.x = e) : (n += e);
        for (var r = 0; r < n.length + 64; r++)
          (t.x ^= 0 | n.charCodeAt(r)), t.next();
      }
      function a(e, t) {
        return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
      }
      function i(e, t) {
        var n = new r(e),
          i = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296;
          };
        return (
          (o.double = function () {
            do {
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (o.int32 = n.next),
          (o.quick = o),
          i &&
            ("object" == typeof i && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.xor128 = i);
    })(0, e);
  })(wp);
  var Tp = wp.exports,
    kp = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t = this,
          n = "";
        (t.next = function () {
          var e = t.x ^ (t.x >>> 2);
          return (
            (t.x = t.y),
            (t.y = t.z),
            (t.z = t.w),
            (t.w = t.v),
            ((t.d = (t.d + 362437) | 0) +
              (t.v = t.v ^ (t.v << 4) ^ e ^ (e << 1))) |
              0
          );
        }),
          (t.x = 0),
          (t.y = 0),
          (t.z = 0),
          (t.w = 0),
          (t.v = 0),
          e === (0 | e) ? (t.x = e) : (n += e);
        for (var r = 0; r < n.length + 64; r++)
          (t.x ^= 0 | n.charCodeAt(r)),
            r == n.length && (t.d = (t.x << 10) ^ (t.x >>> 4)),
            t.next();
      }
      function a(e, t) {
        return (
          (t.x = e.x),
          (t.y = e.y),
          (t.z = e.z),
          (t.w = e.w),
          (t.v = e.v),
          (t.d = e.d),
          t
        );
      }
      function i(e, t) {
        var n = new r(e),
          i = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296;
          };
        return (
          (o.double = function () {
            do {
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (o.int32 = n.next),
          (o.quick = o),
          i &&
            ("object" == typeof i && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.xorwow = i);
    })(0, e);
  })(kp);
  var Cp = kp.exports,
    Ep = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t = this;
        (t.next = function () {
          var e,
            n,
            r = t.x,
            a = t.i;
          return (
            (e = r[a]),
            (n = (e ^= e >>> 7) ^ (e << 24)),
            (n ^= (e = r[(a + 1) & 7]) ^ (e >>> 10)),
            (n ^= (e = r[(a + 3) & 7]) ^ (e >>> 3)),
            (n ^= (e = r[(a + 4) & 7]) ^ (e << 7)),
            (e = r[(a + 7) & 7]),
            (n ^= (e ^= e << 13) ^ (e << 9)),
            (r[a] = n),
            (t.i = (a + 1) & 7),
            n
          );
        }),
          (function (e, t) {
            var n,
              r = [];
            if (t === (0 | t)) r[0] = t;
            else
              for (t = "" + t, n = 0; n < t.length; ++n)
                r[7 & n] =
                  (r[7 & n] << 15) ^ ((t.charCodeAt(n) + r[(n + 1) & 7]) << 13);
            for (; r.length < 8; ) r.push(0);
            for (n = 0; n < 8 && 0 === r[n]; ++n);
            for (
              8 == n ? (r[7] = -1) : r[n], e.x = r, e.i = 0, n = 256;
              n > 0;
              --n
            )
              e.next();
          })(t, e);
      }
      function a(e, t) {
        return (t.x = e.x.slice()), (t.i = e.i), t;
      }
      function i(e, t) {
        null == e && (e = +new Date());
        var n = new r(e),
          i = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296;
          };
        return (
          (o.double = function () {
            do {
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (o.int32 = n.next),
          (o.quick = o),
          i &&
            (i.x && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.xorshift7 = i);
    })(0, e);
  })(Ep);
  var xp = Ep.exports,
    Pp = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t = this;
        (t.next = function () {
          var e,
            n,
            r = t.w,
            a = t.X,
            i = t.i;
          return (
            (t.w = r = (r + 1640531527) | 0),
            (n = a[(i + 34) & 127]),
            (e = a[(i = (i + 1) & 127)]),
            (n ^= n << 13),
            (e ^= e << 17),
            (n ^= n >>> 15),
            (e ^= e >>> 12),
            (n = a[i] = n ^ e),
            (t.i = i),
            (n + (r ^ (r >>> 16))) | 0
          );
        }),
          (function (e, t) {
            var n,
              r,
              a,
              i,
              o,
              u = [],
              l = 128;
            for (
              t === (0 | t)
                ? ((r = t), (t = null))
                : ((t += "\0"), (r = 0), (l = Math.max(l, t.length))),
                a = 0,
                i = -32;
              i < l;
              ++i
            )
              t && (r ^= t.charCodeAt((i + 32) % t.length)),
                0 === i && (o = r),
                (r ^= r << 10),
                (r ^= r >>> 15),
                (r ^= r << 4),
                (r ^= r >>> 13),
                i >= 0 &&
                  ((o = (o + 1640531527) | 0),
                  (a = 0 == (n = u[127 & i] ^= r + o) ? a + 1 : 0));
            for (
              a >= 128 && (u[127 & ((t && t.length) || 0)] = -1),
                a = 127,
                i = 512;
              i > 0;
              --i
            )
              (r = u[(a + 34) & 127]),
                (n = u[(a = (a + 1) & 127)]),
                (r ^= r << 13),
                (n ^= n << 17),
                (r ^= r >>> 15),
                (n ^= n >>> 12),
                (u[a] = r ^ n);
            (e.w = o), (e.X = u), (e.i = a);
          })(t, e);
      }
      function a(e, t) {
        return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
      }
      function i(e, t) {
        null == e && (e = +new Date());
        var n = new r(e),
          i = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296;
          };
        return (
          (o.double = function () {
            do {
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (o.int32 = n.next),
          (o.quick = o),
          i &&
            (i.X && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.xor4096 = i);
    })(0, e);
  })(Pp);
  var Ap = Pp.exports,
    Mp = { exports: {} };
  !(function (e) {
    !(function (e, t, n) {
      function r(e) {
        var t = this,
          n = "";
        (t.next = function () {
          var e = t.b,
            n = t.c,
            r = t.d,
            a = t.a;
          return (
            (e = (e << 25) ^ (e >>> 7) ^ n),
            (n = (n - r) | 0),
            (r = (r << 24) ^ (r >>> 8) ^ a),
            (a = (a - e) | 0),
            (t.b = e = (e << 20) ^ (e >>> 12) ^ n),
            (t.c = n = (n - r) | 0),
            (t.d = (r << 16) ^ (n >>> 16) ^ a),
            (t.a = (a - e) | 0)
          );
        }),
          (t.a = 0),
          (t.b = 0),
          (t.c = -1640531527),
          (t.d = 1367130551),
          e === Math.floor(e)
            ? ((t.a = (e / 4294967296) | 0), (t.b = 0 | e))
            : (n += e);
        for (var r = 0; r < n.length + 20; r++)
          (t.b ^= 0 | n.charCodeAt(r)), t.next();
      }
      function a(e, t) {
        return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
      }
      function i(e, t) {
        var n = new r(e),
          i = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296;
          };
        return (
          (o.double = function () {
            do {
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (o.int32 = n.next),
          (o.quick = o),
          i &&
            ("object" == typeof i && a(i, n),
            (o.state = function () {
              return a(n, {});
            })),
          o
        );
      }
      t && t.exports ? (t.exports = i) : (this.tychei = i);
    })(0, e);
  })(Mp);
  var Np = Mp.exports,
    Ip = { exports: {} };
  const Rp = (function (e) {
    if (e.__esModule) return e;
    var t = e.default;
    if ("function" == typeof t) {
      var n = function e() {
        return this instanceof e
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return (
      Object.defineProperty(n, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (t) {
        var r = Object.getOwnPropertyDescriptor(e, t);
        Object.defineProperty(
          n,
          t,
          r.get
            ? r
            : {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              }
        );
      }),
      n
    );
  })(
    Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: {} },
        Symbol.toStringTag,
        { value: "Module" }
      )
    )
  );
  !(function (e) {
    !(function (t, n, r) {
      var a,
        i = 256,
        o = "random",
        u = r.pow(i, 6),
        l = r.pow(2, 52),
        s = 2 * l,
        c = i - 1;
      function f(e, c, f) {
        var v = [],
          y = m(
            p(
              (c = 1 == c ? { entropy: !0 } : c || {}).entropy
                ? [e, g(n)]
                : null == e
                ? (function () {
                    try {
                      var e;
                      return (
                        a && (e = a.randomBytes)
                          ? (e = e(i))
                          : ((e = new Uint8Array(i)),
                            (t.crypto || t.msCrypto).getRandomValues(e)),
                        g(e)
                      );
                    } catch (u) {
                      var r = t.navigator,
                        o = r && r.plugins;
                      return [+new Date(), t, o, t.screen, g(n)];
                    }
                  })()
                : e,
              3
            ),
            v
          ),
          b = new d(v),
          _ = function () {
            for (var e = b.g(6), t = u, n = 0; e < l; )
              (e = (e + n) * i), (t *= i), (n = b.g(1));
            for (; e >= s; ) (e /= 2), (t /= 2), (n >>>= 1);
            return (e + n) / t;
          };
        return (
          (_.int32 = function () {
            return 0 | b.g(4);
          }),
          (_.quick = function () {
            return b.g(4) / 4294967296;
          }),
          (_.double = _),
          m(g(b.S), n),
          (
            c.pass ||
            f ||
            function (e, t, n, a) {
              return (
                a &&
                  (a.S && h(a, b),
                  (e.state = function () {
                    return h(b, {});
                  })),
                n ? ((r[o] = e), t) : e
              );
            }
          )(_, y, "global" in c ? c.global : this == r, c.state)
        );
      }
      function d(e) {
        var t,
          n = e.length,
          r = this,
          a = 0,
          o = (r.i = r.j = 0),
          u = (r.S = []);
        for (n || (e = [n++]); a < i; ) u[a] = a++;
        for (a = 0; a < i; a++)
          (u[a] = u[(o = c & (o + e[a % n] + (t = u[a])))]), (u[o] = t);
        (r.g = function (e) {
          for (var t, n = 0, a = r.i, o = r.j, u = r.S; e--; )
            (t = u[(a = c & (a + 1))]),
              (n = n * i + u[c & ((u[a] = u[(o = c & (o + t))]) + (u[o] = t))]);
          return (r.i = a), (r.j = o), n;
        })(i);
      }
      function h(e, t) {
        return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
      }
      function p(e, t) {
        var n,
          r = [],
          a = typeof e;
        if (t && "object" == a)
          for (n in e)
            try {
              r.push(p(e[n], t - 1));
            } catch (i) {}
        return r.length ? r : "string" == a ? e : e + "\0";
      }
      function m(e, t) {
        for (var n, r = e + "", a = 0; a < r.length; )
          t[c & a] = c & ((n ^= 19 * t[c & a]) + r.charCodeAt(a++));
        return g(t);
      }
      function g(e) {
        return String.fromCharCode.apply(0, e);
      }
      if ((m(r.random(), n), e.exports)) {
        e.exports = f;
        try {
          a = Rp;
        } catch (v) {}
      } else r["seed" + o] = f;
    })("undefined" != typeof self ? self : n, [], Math);
  })(Ip);
  var Op = Sp,
    Fp = Tp,
    Dp = Cp,
    Lp = xp,
    Bp = Ap,
    jp = Np,
    zp = Ip.exports;
  (zp.alea = Op),
    (zp.xor128 = Fp),
    (zp.xorwow = Dp),
    (zp.xorshift7 = Lp),
    (zp.xor4096 = Bp),
    (zp.tychei = jp);
  var Up,
    Gp,
    Vp,
    $p = zp;
  function Hp() {
    if (Up) return bp;
    Up = 1;
    var e =
      (n && n.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(bp, "__esModule", { value: !0 }),
      (bp.RandomNumberGenerator = bp.RandomTimeSeriesPriceType = void 0);
    const t = Yp(),
      r = yp(),
      a = e($p);
    var i, o;
    ((o = i || (bp.RandomTimeSeriesPriceType = i = {})).Stock = "Stock"),
      (o.Bond = "Bond"),
      (o.Index = "Index"),
      (o.Swap = "Swap"),
      (o.Fx = "Fx"),
      (o.Future = "Future");
    const { log: u, sqrt: l, cos: s, PI: c, floor: f, exp: d } = Math;
    return (
      (bp.RandomNumberGenerator = class {
        constructor(e) {
          this.rng = (0, a.default)(e);
        }
        rand() {
          return this.rng();
        }
        random() {
          return this.rng();
        }
        randN() {
          for (var e = 0, t = 0; 0 === e; ) e = this.rng();
          for (; 0 === t; ) t = this.rng();
          return l(-2 * u(e)) * s(2 * c * t);
        }
        randomNormal() {
          return this.randN();
        }
        randX() {
          for (var e = this.rng(); 0 === e; ) e = this.rng();
          return -u(e);
        }
        randomPoisson() {
          return this.randX();
        }
        randomInt(e) {
          return f(e * this.rng());
        }
        randomSeed() {
          return this.randomInt(4294967296).toFixed(0);
        }
        randomItem(e) {
          return e[this.randomInt(e.length)];
        }
        randomNames(e, t = 2, n = 4) {
          for (var r = {}, a = 0; a < e; ) {
            var i = t + this.randomInt(1 + n - t),
              o = "";
            for (let e = 0; e < i; e++)
              o += this.randomItem("ABCDEGHKLNRSTUVZ");
            void 0 === r[o] && ((r[o] = !0), a++);
          }
          return Object.keys(r);
        }
        static longNameToName(e) {
          return e
            .split(" ")
            .map((e) => e.slice(0, 1))
            .join("");
        }
        randomLongNames(e, t = 2, n = 4) {
          const r = [
            "Alpha",
            "Bravo",
            "Charlie",
            "Delta",
            "Echo",
            "Golf",
            "Hotel",
            "Kilo",
            "Lima",
            "November",
            "Romeo",
            "Sierra",
            "Tango",
            "Uniform",
            "Victor",
            "Zulu",
          ];
          for (var a = {}, i = 0; i < e; ) {
            var o = t + this.randomInt(1 + n - t),
              u = "";
            for (let e = 0; e < o; e++)
              u += ("" !== u ? " " : "") + this.randomItem(r);
            void 0 === a[u] && ((a[u] = !0), i++);
          }
          return Object.keys(a);
        }
        randomObjectId() {
          const e = () => f(this.randomInt(4294967296)).toString(16);
          return e() + e() + e();
        }
        randomTimeSeries(e, n, a) {
          var o = 0.15,
            u = 0.4,
            l = 0.06,
            s = 0.15;
          (a !== i.Bond && a !== i.Swap) || ((o = 0.02), (u = 0.07)),
            (a !== i.Future && a !== i.Index) || ((o = 0.075), (u = 0.15)),
            a === i.Fx && ((o = 0.08), (u = 0.12)),
            a === i.Stock && ((o = 0.15), (u = 0.3));
          var c = this.randomNames(1)[0],
            f = o + (u - o) * this.rand();
          (a !== i.Bond && a !== i.Fx) || ((l = 0), (s = 0)),
            a === i.Swap && ((l = -0.02), (s = 0));
          var h = l + s * this.randN(),
            p = 0.02 * this.randN(),
            m = 100 * d(this.randN());
          a === i.Bond
            ? (m = 100 * d(0.01 * this.randN()))
            : a === i.Stock
            ? (m = 100 * d(0.5 * this.randN()))
            : a === i.Fx
            ? (m = 5 + 10 * this.rand())
            : (a !== i.Future && a !== i.Index) ||
              (m = 1e3 * d(0.1 * this.randN()));
          var g = this.randomSeed(),
            v = new r.MondayToFridayCalendar(),
            y = t.TimeSeries.generateRandomTimeSeries(
              e,
              n,
              (e) => v.isBusinessDay(e),
              h,
              f,
              p,
              1,
              g
            );
          return (
            (y = y.mult(m / y.startValue)),
            a === i.Swap && (y = y.add(-y.startValue)),
            (y.name = c),
            y
          );
        }
      }),
      bp
    );
  }
  function Yp() {
    return (
      Vp ||
        ((Vp = 1),
        (function (e) {
          var t =
              (n && n.__createBinding) ||
              (Object.create
                ? function (e, t, n, r) {
                    void 0 === r && (r = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    (a &&
                      !("get" in a
                        ? !t.__esModule
                        : a.writable || a.configurable)) ||
                      (a = {
                        enumerable: !0,
                        get: function () {
                          return t[n];
                        },
                      }),
                      Object.defineProperty(e, r, a);
                  }
                : function (e, t, n, r) {
                    void 0 === r && (r = n), (e[r] = t[n]);
                  }),
            r =
              (n && n.__exportStar) ||
              function (e, n) {
                for (var r in e)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(n, r) ||
                    t(n, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(Mh, e),
            r(
              (function () {
                if (Gp) return Yh;
                (Gp = 1),
                  Object.defineProperty(Yh, "__esModule", { value: !0 }),
                  (Yh.TimeSeries = Yh.AlignMethod = void 0);
                const e = Kh,
                  t = yp(),
                  n = Hp(),
                  r = Mh,
                  {
                    timestampToComparable: a,
                    timestampToString: i,
                    addDays: o,
                    getYear: u,
                    addMonths: l,
                    yearFraction: s,
                  } = t.DateHelper;
                var c, f;
                ((f = c || (Yh.AlignMethod = c = {})).Latest = "Latest"),
                  (f.Exact = "Exact"),
                  (f.LatestWithinRange = "LatestWithinRange");
                let d = class f {
                  constructor(e, t, n = null) {
                    (this.__dates = e.map((e) =>
                      "function" == typeof e.getMonth ? e : new Date(e)
                    )),
                      (this.__values = void 0 === t ? [] : t.slice()),
                      (this.name = n);
                  }
                  get length() {
                    return this.__dates ? this.__dates.length : 0;
                  }
                  get count() {
                    return this.__dates.length;
                  }
                  get startValue() {
                    return this.__values[0];
                  }
                  get endValue() {
                    return this.__values[this.__values.length - 1];
                  }
                  get start() {
                    return this.__dates[0];
                  }
                  get end() {
                    return this.__dates[this.__dates.length - 1];
                  }
                  get average() {
                    let e = 0;
                    const t = this.clone();
                    for (let n = 0; n < t.length; n++) e += t.__values[n];
                    return e / t.length;
                  }
                  get stdev() {
                    return (0, r.stdev)(this.__values);
                  }
                  clone() {
                    return new f(this.__dates, this.__values, this.name);
                  }
                  add(e) {
                    const t = this.clone();
                    if (e instanceof f) {
                      if (e.length !== this.length)
                        throw new Error(
                          "Cannot add TimeSeries of different length"
                        );
                      for (let n = 0; n < t.length; n++)
                        t.__values[n] += e.__values[n];
                    } else
                      for (let n = 0; n < t.length; n++) t.__values[n] += e;
                    return t;
                  }
                  subtract(e) {
                    const t = this.clone();
                    if (e instanceof f) {
                      if (e.length !== this.length)
                        throw new Error(
                          "Cannot subtract TimeSeries of different length"
                        );
                      for (let n = 0; n < t.length; n++)
                        t.__values[n] -= e.__values[n];
                    } else
                      for (let n = 0; n < t.length; n++) t.__values[n] -= e;
                    return t;
                  }
                  mult(e) {
                    const t = this.clone();
                    if (e instanceof f) {
                      if (e.length !== this.length)
                        throw new Error(
                          "Cannot multiply TimeSeries of different length"
                        );
                      for (let n = 0; n < t.length; n++)
                        t.__values[n] *= e.__values[n];
                    } else
                      for (let n = 0; n < t.length; n++) t.__values[n] *= e;
                    return t;
                  }
                  log() {
                    const e = this.clone();
                    for (let t = 0; t < e.length; t++)
                      e.__values[t] = Math.log(e.__values[t]);
                    return e;
                  }
                  exp() {
                    const e = this.clone();
                    for (let t = 0; t < e.length; t++)
                      e.__values[t] = Math.exp(e.__values[t]);
                    return e;
                  }
                  periodicity() {
                    if (this.count < 2) return 0;
                    const e =
                      (this.end.getTime() - this.start.getTime()) /
                      t.msPerDay /
                      (this.count - 1);
                    if (0 === e) return 0;
                    const n = 365.25 / e;
                    return n > 300
                      ? 365
                      : n > 200
                      ? 252
                      : n > 40
                      ? 52
                      : n > 10
                      ? 12
                      : n > 3
                      ? 4
                      : n > 1.5
                      ? 2
                      : 1;
                  }
                  yearFraction() {
                    return (this.length - 1) / this.periodicity();
                  }
                  static isNotNilAndFinite(t) {
                    return !(0, e.isNil)(t) && isFinite(t);
                  }
                  static cumOperator(e, t, n) {
                    let r = t;
                    for (var a = 0; a < e.__values.length; a++)
                      (r = n(r, e.__values[a])), (e.__values[a] = r);
                    return e;
                  }
                  cumProd() {
                    const e = this.clone();
                    return f.cumOperator(e, 1, (e, t) =>
                      f.isNotNilAndFinite(e) && f.isNotNilAndFinite(t)
                        ? e * t
                        : Number.NaN
                    );
                  }
                  cumSum() {
                    const e = this.clone();
                    return f.cumOperator(e, 0, (e, t) =>
                      f.isNotNilAndFinite(e) && f.isNotNilAndFinite(t)
                        ? e + t
                        : Number.NaN
                    );
                  }
                  return() {
                    const e = [],
                      t = [];
                    if (this.__values.length > 0) {
                      let n = this.__values[0];
                      for (let r = 1; r < this.length; r++) {
                        const a = this.__values[r];
                        let i = Number.NaN;
                        f.isNotNilAndFinite(n) &&
                          0 !== n &&
                          f.isNotNilAndFinite(a) &&
                          (i = a / n - 1),
                          e.push(i),
                          t.push(this.__dates[r]),
                          (n = a);
                      }
                    }
                    return new f(t, e, this.name);
                  }
                  diff() {
                    const e = [],
                      t = [];
                    if (this.__values.length > 0) {
                      let n = this.__values[0];
                      for (let r = 1; r < this.length; r++) {
                        const a = this.__values[r];
                        let i = Number.NaN;
                        f.isNotNilAndFinite(n) &&
                          0 !== n &&
                          f.isNotNilAndFinite(a) &&
                          (i = a - n),
                          e.push(i),
                          t.push(this.__dates[r]),
                          (n = a);
                      }
                    }
                    return new f(t, e, this.name);
                  }
                  indexOf(e) {
                    const t = a,
                      n = t(e);
                    if (void 0 === this.__dates) return -1;
                    const r = this.__dates;
                    let i;
                    const o = this.__dates.length;
                    if (0 === o) return -1;
                    if (n < t(r[0])) return -1;
                    if (n >= t(r[o - 1])) return o - 1;
                    if (o > 40) {
                      let e = o - 1,
                        a = 0;
                      if (n >= t(r[e])) return e;
                      for (; e > a + 1; )
                        (i = Math.floor((e + a) / 2)),
                          n >= t(r[i]) ? (a = i) : ((e = i), (i = a));
                      return i;
                    }
                    for (i = 1; n >= t(r[i]) && i < o - 1; ) i++;
                    return i - 1;
                  }
                  range(e, t) {
                    const n = a,
                      r = n(e),
                      i = n(t),
                      o = [],
                      u = [];
                    for (let a = 0; a < this.__dates.length; a++) {
                      let e = n(this.__dates[a]);
                      e >= r &&
                        e <= i &&
                        (o.push(this.__dates[a]), u.push(this.__values[a]));
                    }
                    return new f(o, u, this.name);
                  }
                  latestValue(e) {
                    const t = this.indexOf(e);
                    return -1 === t ? Number.NaN : this.__values[t];
                  }
                  static weightedTimeSeries(e, t) {
                    const n = [],
                      r = [];
                    for (let a = 0; a < t[0].__values.length; a++) {
                      let i = 0;
                      for (let n = 0; n < t.length; n++)
                        i += e[n] * t[n].__values[a];
                      n.push(t[0].__dates[a]), r.push(i);
                    }
                    return new f(n, r);
                  }
                  static fromJson(e) {
                    if (!e || (!e.dates && !e.timestamps)) return new f([], []);
                    const t = (e.dates ? e.dates : e.timestamps).map(
                        (e) => new Date(e)
                      ),
                      n = e.values.map((e) => parseFloat(e));
                    return new f(t, n, e.name);
                  }
                  static toGrid(e) {
                    const t = a,
                      n = {};
                    e.forEach((e, r) =>
                      e.__dates.forEach((a, i) => {
                        const o = t(a);
                        let u = n[o];
                        void 0 === u && ((u = { date: a }), (n[o] = u)),
                          (u["value" + r] = e.__values[i]);
                      })
                    );
                    const r = Object.keys(n);
                    return r.sort(), r.map((e) => n[e]);
                  }
                  static align(e, t, n = c.Latest) {
                    const r = a(new Date("9999-12-31")),
                      o = (e) =>
                        a(e + 1 < t.__dates.length ? t.__dates[e + 1] : r);
                    if (0 === e.__dates.length || 0 === t.__dates.length)
                      return new f([], [], t.name);
                    if (
                      e.__dates[0].toISOString() < t.__dates[0].toISOString()
                    ) {
                      const n =
                        "Warning: TimeSeries.align masterTimeSeries: " +
                        e.name +
                        " " +
                        e.__dates[0].toISOString() +
                        " starts earlier than synchTimeSeries: " +
                        t.name +
                        " " +
                        t.__dates[0].toISOString() +
                        "\n This is probably not what you want, you are going to get NaN in the timeseries";
                      console.error(n);
                    }
                    let u;
                    const l = [];
                    let s = 0,
                      d = a(t.__dates[s]),
                      h = o(s);
                    for (let i = 0; i < e.__dates.length; i++) {
                      const r = a(e.__dates[i]);
                      for (0 === i && (u = r); h <= r; ) (d = h), (h = o(++s));
                      let f = Number.NaN;
                      (d === r || (n !== c.Exact && d < r)) &&
                        (f = s < t.__dates.length ? t.__values[s] : Number.NaN),
                        n === c.LatestWithinRange && d < u && (f = Number.NaN),
                        l.push(f);
                    }
                    let p = t.__dates[0].constructor;
                    return p === Date
                      ? new f(
                          e.__dates.map((e) => new Date(e)),
                          l,
                          t.name
                        )
                      : new f(
                          p === String ? e.__dates.map((e) => i(e)) : e.__dates,
                          l,
                          t.name
                        );
                  }
                  maxDrawdown(e) {
                    let t,
                      n,
                      r = -9e9,
                      a = 0,
                      i = -1,
                      o = -1;
                    const u = [],
                      l = [];
                    for (var s = 0; s < this.count; s++) {
                      const c = this.__values[s];
                      isFinite(c) &&
                        null !== c &&
                        (c > r && ((r = c), (t = s)),
                        (n = c / r - 1),
                        n < a && ((a = n), (i = t), (o = s)),
                        e && (u.push(this.__dates[s]), l.push(n)));
                    }
                    return (
                      !e &&
                        i >= 0 &&
                        o > 0 &&
                        (u.push(this.__dates[i]),
                        u.push(this.__dates[o]),
                        l.push(this.__values[i]),
                        l.push(this.__values[o])),
                      new f(u, l, this.name)
                    );
                  }
                  static generateRandomTimeSeries(r, i, u, l, s, c, d, h) {
                    const p = a;
                    let m = u;
                    if (void 0 !== r.isBusinessDay)
                      m = !0 === u ? (e) => e.isBusinessDay : null;
                    else if (!0 === u) {
                      let e = new t.MondayToFridayCalendar();
                      m = (t) => e.isBusinessDay(t);
                    }
                    !1 === m && (m = null);
                    const g = new n.RandomNumberGenerator(h);
                    let v = r;
                    const y = [],
                      b = [];
                    let _ = 365;
                    if (!(0, e.isNil)(m)) for (_ = 252; !m(v); ) v = o(v, 1);
                    const S = p(i);
                    for (; p(v) <= S; ) {
                      b.push(0 === y.length ? 0 : g.randN()),
                        y.push(v),
                        b.push(),
                        (v = o(v, 1));
                      let t = 0;
                      for (; !((0, e.isNil)(m) || m(v) || t++ >= 366); )
                        v = o(v, 1);
                    }
                    if (0 !== d) {
                      const e = d,
                        t = Math.sqrt(1 - e * e);
                      let n = 1;
                      for (; n < b.length; ) {
                        let r = b[n];
                        (b[n] = e * r + t * g.randN()), n++;
                      }
                    }
                    let w = 100,
                      T = 0;
                    const k = s / Math.sqrt(_),
                      C = Math.pow(1 + l, 1 / _) - 1 - (k * k) / 2;
                    let E = 0;
                    for (
                      ;
                      E < b.length &&
                      ((b[E] = Math.round(100 * w) / 100), E++, E !== b.length);

                    ) {
                      const e = k * b[E];
                      (w *= 1 + C + e + c * T), (T = e);
                    }
                    return new f(y, b, String(h));
                  }
                  annualizedReturn(e = f.AnnualizationMethod.geometric) {
                    if (
                      f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(this.startValue)
                    ) {
                      if (e === f.AnnualizationMethod.geometric)
                        return (
                          (this.endValue / this.startValue) **
                            (1 / this.yearFraction()) -
                          1
                        );
                      if (e === f.AnnualizationMethod.arithmetic) {
                        const e = this.return();
                        return (e.average * e.count) / this.yearFraction();
                      }
                    }
                    return Number.NaN;
                  }
                  annualizedGeometricReturn() {
                    return f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(this.startValue)
                      ? (this.endValue / this.startValue) **
                          (1 / this.yearFraction()) -
                          1
                      : Number.NaN;
                  }
                  annualizedArithmeticReturn() {
                    if (
                      f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(this.startValue)
                    ) {
                      const e = this.return();
                      return (e.average * e.count) / this.yearFraction();
                    }
                    return Number.NaN;
                  }
                  annualizedTimeWeightedReturn() {
                    return f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(this.startValue)
                      ? ((this.endValue / this.startValue) **
                          (1 / this.length) -
                          1) *
                          this.yearFraction()
                      : Number.NaN;
                  }
                  valueReturn() {
                    if (
                      f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(this.startValue)
                    )
                      return this.endValue / this.startValue - 1;
                  }
                  yearToDateReturn() {
                    const e = u(new Date(this.end)),
                      t = this.latestValue(
                        new Date((e - 1).toString() + "-12-31")
                      );
                    return f.isNotNilAndFinite(this.endValue) &&
                      f.isNotNilAndFinite(t)
                      ? this.endValue / t - 1
                      : Number.NaN;
                  }
                  annualizedYearToDateReturn(
                    e = f.AnnualizationMethod.geometric
                  ) {
                    const t = this.yearToDateReturn();
                    if (f.isNotNilAndFinite(t)) {
                      if (e === f.AnnualizationMethod.geometric)
                        return (t + 1) ** (1 / this.yearFraction()) - 1;
                      if (e === f.AnnualizationMethod.arithmetic)
                        return t / this.yearFraction();
                    }
                    return Number.NaN;
                  }
                  specificYearReturn(e) {
                    const n = new Date(e.toString() + "-12-31"),
                      r = this.latestValue(new Date(e.toString() + "-12-31")),
                      i = this.latestValue(
                        t.DateHelper.addYears(n, -1).toString()
                      );
                    return f.isNotNilAndFinite(r) && f.isNotNilAndFinite(i)
                      ? r / i - 1
                      : a(this.start) >= t.DateHelper.addYears(n, -1)
                      ? r / this.startValue - 1
                      : Number.NaN;
                  }
                  volatility() {
                    const e = this.return();
                    return (
                      (0, r.stdev)(e.__values) * Math.sqrt(this.periodicity())
                    );
                  }
                  returnVolatilityRatio() {
                    return this.annualizedGeometricReturn() / this.volatility();
                  }
                  worstReturn() {
                    return Math.min(...this.return().__values);
                  }
                  positiveShare() {
                    return (
                      this.return().__values.filter((e) => e > 0).length /
                      this.return().__values.length
                    );
                  }
                  skew() {
                    return (0, r.skew)(this.return().__values);
                  }
                  kurtosis() {
                    return (0, r.kurtosis)(this.return().__values);
                  }
                  correlation(e) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Object other needs to be of type TimeSeries"
                      );
                    return (0, r.corr)(
                      this.return().__values,
                      e.return().__values
                    );
                  }
                  downSideVaR(e) {
                    return (0, r.quantile)(this.return().__values, 1 - e);
                  }
                  conditionalVaR(e) {
                    let t;
                    const n = this.return().__values.sort(function (e, t) {
                      return e - t;
                    });
                    return (
                      (t = (1 - e) * (this.return().length - 1)),
                      (0, r.mean)(n.slice(0, Math.floor(t) + 1))
                    );
                  }
                  sharpeRatio() {
                    return this.annualizedReturn() / this.volatility();
                  }
                  resample(e) {
                    let t = this.end;
                    const n = [],
                      r = [];
                    for (; this.start <= t; )
                      n.unshift(t), r.unshift(1), (t = o(t, -e));
                    const a = new f(n, r, "Resampled Timeseries");
                    return f.align(a, this, c.Latest);
                  }
                  resampleToWeekly() {
                    return this.resample(7);
                  }
                  resampleToMonthly() {
                    let e = this.end;
                    const t = [],
                      n = [];
                    for (; this.start <= e; )
                      t.unshift(e), n.unshift(1), (e = l(e, -1));
                    const r = new f(t, n, "Resampled Timeseries");
                    return f.align(r, this, c.Latest);
                  }
                  resampleToCalenderMonthly(e = !0) {
                    const t = {};
                    for (let i = 0; i < this.length; i++)
                      t[
                        new Date(this.__dates[i]).toISOString().substring(0, 7)
                      ] = { date: this.__dates[i], value: this.__values[i] };
                    const n = Object.values(t),
                      r = [],
                      a = [];
                    e && (r.push(this.start), a.push(this.startValue));
                    for (let i = 0; i < n.length; i++) {
                      let e = n[i];
                      r.push(e.date), a.push(e.value);
                    }
                    return new f(r, a, this.name);
                  }
                  resampleToFixedNumberOfObservations(e = 400) {
                    if (this.length <= e) return this.clone();
                    const t = Math.ceil(this.length / e),
                      n = [],
                      r = [];
                    for (let a = this.length - 1; a >= 0; a -= t)
                      n.unshift(this.__dates[a]), r.unshift(this.__values[a]);
                    return new f(n, r, this.name);
                  }
                  excessReturn(e) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Other time serie must be of type TimeSeries"
                      );
                    if (e.length !== this.length)
                      throw new Error(
                        "TimeSeries objects needs to be of same length"
                      );
                    const t = [],
                      n = this.return(),
                      r = e.return();
                    for (let a = 0; a < n.length; a++)
                      t.push(Number(n.__values[a] - r.__values[a]));
                    return new f(this.__dates, t, "Excess return Timeseries");
                  }
                  equals(e) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Object other needs to be of type TimeSeries"
                      );
                    for (let t = 0; t < this.__values.length; t++)
                      if (
                        this.__values[t] !== e.__values[t] ||
                        a(this.__dates[t]) !== a(e.__dates[t])
                      )
                        return !1;
                    return !0;
                  }
                  normalize(e = 1) {
                    const t = this.startValue,
                      n = [];
                    for (let r = 0; r < this.length; r++)
                      n.push((this.__values[r] / t) * e);
                    return new f(this.__dates, n, this.name);
                  }
                  prepend(e) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Other time serie must be of type TimeSeries"
                      );
                    if (a(this.start) < a(e.start)) return this.clone();
                    const t = e.range(e.start, this.start);
                    if (a(this.start) !== a(t.end))
                      throw new Error(
                        "Cannot concat series since start date in this series not present in other series"
                      );
                    const n = this.startValue / t.endValue;
                    let r = [],
                      o = [],
                      u = this.__dates[0].constructor;
                    for (let a = 0; a < t.length - 1; a++)
                      r.push(t.__values[a] * n),
                        u === Date
                          ? o.push(new Date(t.__dates[a]))
                          : o.push(i(t.__dates[a]));
                    return new f(
                      [...o, ...this.__dates],
                      [...r, ...this.__values],
                      this.name
                    );
                  }
                  trackingError(e, n = this.end) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Other time serie must be of type TimeSeries"
                      );
                    const a = t.DateHelper.addMonths(
                      t.DateHelper.addYears(n, -2),
                      -1
                    ).toString();
                    let i = this.range(a, n),
                      o = e.range(a, n);
                    const u = i.resampleToMonthly().return(),
                      l = o.resampleToMonthly().return(),
                      s = u.subtract(l);
                    return (0, r.stdev)(s.__values) * Math.sqrt(12);
                  }
                  informationRatio(e) {
                    if (!(e instanceof f))
                      throw new Error(
                        "Other time serie must be of type TimeSeries"
                      );
                    if (e.length !== this.length)
                      throw new Error(
                        "TimeSeries objects needs to be of same length"
                      );
                    const n = t.DateHelper.addMonths(
                      t.DateHelper.addYears(this.end, -2),
                      -1
                    ).toString();
                    let r = this.range(n, this.end),
                      a = e.range(n, e.end);
                    const i = r.resampleToMonthly().return(),
                      o = a.resampleToMonthly().return();
                    return (
                      i.subtract(o).add(1).cumProd().annualizedReturn() /
                      this.trackingError(e)
                    );
                  }
                  compoundAdjustment(e = 0, n = t.YearFractionBasis.Actual365) {
                    if (0 === e) return this.clone();
                    const r = [];
                    for (let t = 0; t < this.length; t++)
                      r.push(
                        this.__values[t] *
                          Math.pow(1 + e, s(this.start, this.__dates[t], n))
                      );
                    return new f(this.__dates, r, this.name);
                  }
                  runningAdjustment(e = 0, n = t.YearFractionBasis.Actual365) {
                    if (0 === e) return this.clone();
                    const r = [];
                    r.push(this.startValue);
                    let a,
                      i = this.startValue;
                    for (let t = 1; t < this.length; t++)
                      (a =
                        i *
                        (this.__values[t] / this.__values[t - 1] +
                          e * s(this.__dates[t - 1], this.__dates[t], n))),
                        r.push(a),
                        (i = a);
                    return new f(this.__dates, r, this.name);
                  }
                };
                return (
                  (Yh.TimeSeries = d),
                  (d.AlignSetMethod = Object.freeze({
                    intersection: "intersection",
                    union: "union",
                  })),
                  (d.AnnualizationMethod = Object.freeze({
                    geometric: "geometric",
                    arithmetic: "arithmetic",
                  })),
                  Yh
                );
              })(),
              e
            );
        })(Ah)),
      Ah
    );
  }
  var Wp = {};
  Object.defineProperty(Wp, "__esModule", { value: !0 }),
    (Wp.Position = void 0);
  const qp = yp(),
    Kp = Hp(),
    { floor: Qp, pow: Jp } = Math,
    Xp = new Kp.RandomNumberGenerator(new Date().getTime().toFixed());
  Wp.Position = class {
    static createRandomPosition() {
      var e = [
          "Alpha",
          "Bravo",
          "Charlie",
          "Delta",
          "Echo",
          "Golf",
          "Hotel",
          "Kilo",
          "Lima",
          "November",
          "Romeo",
          "Sierra",
          "Tango",
          "Uniform",
          "Victor",
          "Zulu",
        ].reduce((e, t) => ((e[t.slice(0, 1)] = t), e), {}),
        t = Object.keys(e).join(""),
        n = (e) => Qp(e * Xp.random()),
        r = (e) =>
          [...Array(e)].map(() => Qp(16 * Xp.random()).toString(16)).join(""),
        a = (e) =>
          [...Array(e)].map(() => t[Qp(Xp.random() * t.length)]).join(""),
        i = () =>
          qp.DateHelper.dateToString(
            qp.DateHelper.addDays(new Date(), -Qp(3 * Xp.random()))
          ),
        o = () => Jp(10, 1 + 3 * Xp.random()),
        u = () => (Xp.random() < 0.5 ? 0 : o() * o()),
        l = () => (Xp.random() < 0.5 ? 0 : o()),
        s = (e) => e[n(e.length)],
        c = () => s(["SEK", "EUR", "USD", "GBP"]),
        f = o(),
        d = o();
      if (0 === n(5)) {
        let e = "BANKACCOUNT " + c();
        return {
          id: r(24),
          name: e,
          longName: e,
          quantity: null,
          price: null,
          priceValuationDate: null,
          value: f * d,
          localCurrencyValue: u(),
          localCurrencySettledValue: u(),
          cashFlow: u(),
          unsettledIngoing: u(),
          unsettledOutgoing: u(),
          unsettledInstrumentQuantity: null,
          settledInstrumentQuantity: null,
          currency: c(),
          accruedInterest: 0,
          productType: "CashAccount",
          category: "Interest",
          country: s(["SE", "NO", "DK", "FI"]),
          type: null,
          isin: 1e4 + n(9e4) + "-" + (1e4 + n(9e4)),
          portfolioCurrency: c(),
          source: null,
          fxRate: Xp.random() < 0.5 ? null : Jp(10, 0.5 + Xp.random()),
          date: i(),
          startValue: o() * o(),
          fxPriceValuationDate: Xp.random() < 0.5 ? null : i(),
          fxSource: Xp.random() < 0.5 ? null : c(),
          bloombergTicker: null,
        };
      }
      {
        let t = a(3);
        return {
          id: r(24),
          name: t,
          longName: t
            .split("")
            .map((t) => e[t])
            .join(" "),
          quantity: f,
          price: d,
          priceValuationDate: i(),
          value: f * d,
          localCurrencyValue: u(),
          localCurrencySettledValue: u(),
          cashFlow: u(),
          unsettledIngoing: u(),
          unsettledOutgoing: u(),
          unsettledInstrumentQuantity: l(),
          settledInstrumentQuantity: l(),
          currency: c(),
          accruedInterest: l(),
          productType: s([
            "Unknown",
            "Account",
            "Bond",
            "Shares",
            "Fund",
            "FutureForward",
            "Index",
            "Swap",
            "Option",
            "Liability",
            "Cash",
            "RealEstate",
            "System",
            "MarginAccount",
            "SecurityLoan",
          ]),
          category: s(
            "Unknown, Equity, Fx, System, RealEstate, Liability, HedgeFund, Alternative, Interim, Interest, Margin".split(
              ", "
            )
          ),
          country: s(["SE", "NO", "DK", "FI"]),
          type: null,
          isin: a(2) + (1e10 + n(1e9)),
          portfolioCurrency: c(),
          source: s(["Bloomberg", "Reuter", "Nasdaq"]),
          fxRate: Xp.random() < 0.5 ? null : Jp(10, 0.5 + Xp.random()),
          date: i(),
          startValue: o() * o(),
          fxPriceValuationDate: Xp.random() < 0.5 ? null : i(),
          fxSource: Xp.random() < 0.5 ? null : c(),
          bloombergTicker: t + " " + s(["SS", "DC", "FH", "NO"]) + " Equity",
        };
      }
    }
  };
  var Zp = {};
  Object.defineProperty(Zp, "__esModule", { value: !0 }),
    (Zp.YieldCurve = void 0);
  class em {
    static sumDf(e, t, n, r, a) {
      for (var i = n, o = r + 1; o <= a; ) {
        var u = (o++ - r) / (a - r);
        i += Math.exp((1 - u) * e + u * t);
      }
      return i;
    }
    static fun(e, t, n, r, a, i) {
      return e * em.sumDf(t, n, r, a, i) - (1 - Math.exp(n));
    }
    static newtonRaphson(e, t, n, r, a, i, o) {
      void 0 === i && (i = 1e-7), void 0 === o && (o = 100);
      for (var u = 0, l = t; u++ < o; ) {
        var s = em.fun(e, t, l, n, r, a),
          c = l - s / ((em.fun(e, t, l + 1e-9, n, r, a) - s) / 1e-9);
        if (Math.abs(c - l) < i) return c;
        l = c;
      }
      return !1;
    }
    static solveSumDf(e, t, n, r, a) {
      return em.newtonRaphson(e, t, n, r, a, 1e-5, 20);
    }
    static bootstrap(e, t) {
      for (var n = [], r = 0, a = 0, i = 0, o = 0; a < e.length; ) {
        let u,
          l = e[a].maturity,
          s = e[a].value;
        if ((a++, null !== s && !isNaN(s))) {
          if (l - i == 1) {
            if (((u = Math.log((1 - s * r) / (1 + s))), isNaN(u)))
              throw new Error(
                "Math.log of negative number in YieldCurve.bootstrap"
              );
            r = em.sumDf(o, u, r, i, l);
          } else if (
            ((u = em.solveSumDf(s, o, r, i, l)),
            (r = (1 - Math.exp(u)) / s),
            void 0 === t || !0 === t)
          )
            for (let e = i + 1; e < l; e++)
              n.push({
                maturity: e,
                value: Math.exp(((l - e) * o + (e - i) * u) / (l - i)),
              });
          n.push({ maturity: l, value: Math.exp(u) }), (i = l), (o = u);
        }
      }
      return n;
    }
    static implicitParRate(e, t) {
      var n = t[0];
      if (1 === e) return 1 / n - 1;
      var r = t.length,
        a = t[r - 1];
      if (2 === e) return (1 - a) / (n + a);
      if (Math.floor(e) === e) {
        let e = t.reduce((e, t) => e + t, 0);
        return (1 - t[r - 1]) / e;
      }
      if (e < 1) return Math.pow(1 / t[0], 1 / e) - 1;
      var i = e - Math.floor(e);
      let o = t.reduce((e, t, n) => e + (0 === n ? 0 : t), 0);
      for (
        var u = (e) => (Math.pow(1 + e, i) - 1) * n + e * o + a - 1,
          l = 0,
          s = 0.01;
        l++ < 100;

      ) {
        var c = u(s),
          f = s - c / ((u(s + 1e-9) - c) / 1e-9);
        if (Math.abs(f - s) < 1e-7) return f;
        s = f;
      }
      return Number.NaN;
    }
  }
  Zp.YieldCurve = em;
  var tm = {};
  !(function (e) {
    var t =
        (n && n.__createBinding) ||
        (Object.create
          ? function (e, t, n, r) {
              void 0 === r && (r = n);
              var a = Object.getOwnPropertyDescriptor(t, n);
              (a &&
                !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
                (a = {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                }),
                Object.defineProperty(e, r, a);
            }
          : function (e, t, n, r) {
              void 0 === r && (r = n), (e[r] = t[n]);
            }),
      r =
        (n && n.__exportStar) ||
        function (e, n) {
          for (var r in e)
            "default" === r ||
              Object.prototype.hasOwnProperty.call(n, r) ||
              t(n, e, r);
        };
    Object.defineProperty(e, "__esModule", { value: !0 }), r(dh, e);
  })(tm);
  var nm = {};
  Object.defineProperty(nm, "__esModule", { value: !0 }),
    (nm.Portfolio = void 0);
  const rm = Wp,
    am = yp(),
    im = Kh,
    om = Yp(),
    { floor: um, random: lm, log: sm, exp: cm, sqrt: fm, pow: dm } = Math,
    {
      timestampToComparable: hm,
      addDays: pm,
      getYear: mm,
      getMonth: gm,
      getEndOfMonth: vm,
    } = am.DateHelper;
  class ym {
    constructor() {
      (this.name = null),
        (this.id = null),
        (this.value = null),
        (this.date = null),
        (this.client = null),
        (this.benchmarkName = null),
        (this.valueTimeSeries = null),
        (this.returnTimeSeries = null),
        (this.benchmarkTimeSeries = null),
        (this.cashFlowTimeSeries = null),
        (this.riskFreeTimeSeries = null),
        (this.positions = null),
        Object.preventExtensions(this);
    }
    static createRandomPortfolio(e, t, n) {
      const r = new am.SwedenCalendar(),
        a = (e) => r.isBusinessDay(e),
        i = new ym();
      i.name = "PORTFOLIO " + e;
      const o = "000000000000000000000000",
        u = e;
      return (
        (i.id = o.substring(0, 24 - u.length) + u),
        (i.client = { id: o }),
        (i.date = n),
        (i.benchmarkName = "BENCHMARK"),
        (i.valueTimeSeries = om.TimeSeries.generateRandomTimeSeries(
          t,
          n,
          a,
          0.07,
          0.12,
          0.01,
          1,
          e + "1"
        ).mult(4e3)),
        (i.returnTimeSeries = om.TimeSeries.generateRandomTimeSeries(
          t,
          n,
          a,
          0.06,
          0.13,
          0,
          1,
          e + "2"
        )),
        (i.benchmarkTimeSeries = om.TimeSeries.generateRandomTimeSeries(
          t,
          n,
          a,
          0.07,
          0.12,
          0.01,
          0.75,
          e + "3"
        ).mult(3)),
        (i.riskFreeTimeSeries = om.TimeSeries.generateRandomTimeSeries(
          t,
          n,
          a,
          0.015,
          0.005,
          0,
          0,
          e + "4"
        ).mult(0.02)),
        (i.positions = [...Array(12 + um(20 * lm()))].map(() =>
          rm.Position.createRandomPosition()
        )),
        (i.value = i.valueTimeSeries.__values[i.valueTimeSeries.length - 1]),
        i
      );
    }
    static averageAnnualReturn(e) {
      if (e.count < 1) return 0;
      const t = e.add(1).cumProd(),
        n = t.periodicity();
      if (0 === n) return 0;
      const r = t.count / n;
      return r < 1 ? t.endValue - 1 : cm(sm(t.endValue) / r) - 1;
    }
    static volatility(e) {
      return e.count < 2 ? 0 : (0, om.stdev)(e.__values) * fm(e.periodicity());
    }
    static add(e, t, n, r) {
      e.push({ label: t, value: n, format: r });
    }
    static calcPerformanceIndicators(e) {
      let t = null;
      void 0 !== e.valueTimeSeries && (t = e.valueTimeSeries.endValue);
      const n = e.returnTimeSeries.clone(),
        r = n.add(1).log(),
        a = ym.volatility(n),
        i = ym.averageAnnualReturn(n);
      let o = null,
        u = null,
        l = null,
        s = null,
        c = null,
        f = null,
        d = null,
        h = null,
        p = null;
      if (void 0 !== e.benchmarkTimeSeries) {
        const t = e.benchmarkTimeSeries.clone();
        (o = ym.averageAnnualReturn(t)), (u = i - o);
        const m = t.add(1).log();
        (l = ym.volatility(t)),
          (s = (0, om.corr)(n.__values, t.__values)),
          (c = (s * a) / l);
        const g = om.TimeSeries.weightedTimeSeries([1, -1], [r, m])
          .exp()
          .add(-1);
        if (
          ((f = ym.volatility(g)),
          (d = ym.averageAnnualReturn(g)),
          (h = d / f),
          void 0 !== e.riskFreeTimeSeries)
        ) {
          const t = e.riskFreeTimeSeries.clone().add(1).log(),
            n = om.TimeSeries.weightedTimeSeries([1, -1], [r, t]).exp().add(-1),
            a = om.TimeSeries.weightedTimeSeries([1, -1], [m, t]).exp().add(-1);
          ym.averageAnnualReturn(n), ym.averageAnnualReturn(a);
          const i = ym.volatility(n);
          p = ym.averageAnnualReturn(n) / i;
        }
      }
      let m = 0,
        g = 0;
      n.__values.forEach((e) => {
        0 !== e && (g++, e > 0 && m++);
      });
      const v = m / g,
        y = [];
      let b = "0,0%";
      null !== i &&
        (null !== o
          ? a < 0.1 && l < 0.1 && (b = "0,00%")
          : a < 0.1 && (b = "0,00%"));
      const _ = "0,0%",
        S = "# ##0" + (t < 1e4 ? ",00" : ""),
        w = "0,00";
      return (
        ym.add(y, "Värde", t, S),
        ym.add(y, "Årsavkastning, portfölj", i, b),
        ym.add(y, "Årsavkastning, benchmark", o, b),
        ym.add(y, "Diff", u, b),
        ym.add(y, "Volatilitet, portfölj", a, _),
        ym.add(y, "Volatilitet, benchmark", l, _),
        ym.add(y, "Beta", c, w),
        ym.add(y, "Korrelation mot benchmark", s, w),
        ym.add(y, "Tracking error", f, _),
        ym.add(y, "Informationskvot", h, w),
        ym.add(y, "Sharpekvot", p, w),
        ym.add(y, "Andel positiva månader", v, "0%"),
        y
      );
    }
    static calcMonthlyTimeSeries(
      e,
      t = null,
      n = null,
      r = null,
      a = null,
      i = null
    ) {
      let o = e.returnTimeSeries;
      const u = (e) => 12 * mm(e) + gm(e),
        l = (e) => {
          const t = (e % 12) + 1;
          return vm((e - t + 1) / 12, t - 1);
        };
      t || (t = o.__dates[0]);
      let s = u(o.__dates[0]);
      if (o.length >= 2) {
        let e = u(o.__dates[1]) - 1;
        e < s && (s = e);
      }
      ((null != t && u(t) < s) || r) && (s = u(t));
      let c = u(o.__dates[o.length - 1]);
      if (null != n) {
        let e = u(n);
        (e > c || a) && (c = e);
      }
      if (!e.riskFreeTimeSeries || 0 === e.riskFreeTimeSeries.length) {
        const t = new om.TimeSeries([l(s)], [1]);
        e.riskFreeTimeSeries = t;
      }
      const f = [
          "returnTimeSeries",
          "benchmarkTimeSeries",
          "riskFreeTimeSeries",
        ],
        d = new ym();
      f.forEach((e) => (d[e] = new om.TimeSeries([], []))),
        e.valueTimeSeries && (d.valueTimeSeries = e.valueTimeSeries.clone());
      for (let h = s; h <= c; h++) {
        let t = l(h),
          n = t;
        if (!(0, im.isNil)(i)) for (; !i(n); ) n = pm(n, -1);
        for (let r = 0; r < f.length; r++) {
          let a = f[r];
          if (((o = e[a]), !o)) continue;
          let i = o.latestValue(t);
          isFinite(i) || (i = o.length > 0 ? o.startValue : 0);
          let u = d[a];
          u.__dates.push(n), u.__values.push(i);
        }
      }
      return (
        f.forEach((e) => {
          let t = d[e];
          d[e] = new om.TimeSeries(t.__dates, t.__values).return();
        }),
        (d.name = e.name),
        (d.benchmarkName = e.benchmarkName),
        d
      );
    }
    static timeSeriesYears(e) {
      let t = e.__values.reduce(
        (t, n, r) => ((t[e.__dates[r].getFullYear()] = !0), t),
        {}
      );
      return (
        (t = Object.keys(t).map((e) => parseInt(e, 10))),
        t.sort((e, t) => t - e),
        t
      );
    }
    static fromJson(e) {
      const t = Object.assign({}, e);
      return (
        (t.date = new Date(e.date)),
        (t.startDate = new Date(e.startDate)),
        ["value", "return", "benchmark", "riskFree", "cashFlow"].forEach(
          (n) => {
            const r = n + "TimeSeries",
              a = e[r];
            a && (t[r] = om.TimeSeries.fromJson(a));
          }
        ),
        t
      );
    }
    static fromFundInfo(e) {
      let t;
      if (void 0 === e.classes) t = ym.fromJson(e);
      else {
        const n = e.classes[0],
          r = e.benchmarks[0];
        if (
          ((t = {
            name: e.name,
            returnTimeSeries: om.TimeSeries.fromJson(n.returnTimeSeries),
            benchmarkName: r.longName,
            benchmarkTimeSeries: om.TimeSeries.fromJson(r.returnTimeSeries),
          }),
          r.instrumentCurrency !== n.navCurrency)
        ) {
          let a = r.instrumentCurrency + n.navCurrency,
            i = e.fxRates.find((e) => e.name === a);
          if (i) {
            let e = t.benchmarkTimeSeries,
              n = om.TimeSeries.fromJson(i);
            hm(e.start) < hm(n.start) &&
              (n.__dates.unshift(e.start), n.__values.unshift(e.startValue)),
              (n = om.TimeSeries.align(e, n, om.AlignMethod.Latest)),
              (t.benchmarkTimeSeries = e.mult(n));
          }
        }
      }
      return t;
    }
    static calcReturn(e, t) {
      if (!e || !t) return Number.NaN;
      "string" == typeof t && "mtd" === t.toLowerCase() && (t = "1M");
      const n = Number(t);
      let r = null;
      if (!Number.isNaN(n))
        return (
          (r = e.__values.reduce(
            (t, r, a) => (
              mm(e.__dates[a]) === n && (t.count++, (t.prod *= 1 + r)), t
            ),
            { count: 0, prod: 1 }
          )),
          0 === r.count ? Number.NaN : r.prod - 1
        );
      const a = /([0-9]+)([MY])/.exec(t.toUpperCase());
      if (a) {
        let t = parseInt(a[1], 10);
        "Y" === a[2] && (t *= 12);
        const n = e.length;
        return (
          (r = e.__values.reduce(
            (e, r, a) => (a >= n - t && (e.count++, (e.prod *= 1 + r)), e),
            { count: 0, prod: 1 }
          )),
          r.count < t
            ? Number.NaN
            : r.count <= 12
            ? r.prod - 1
            : dm(r.prod, 12 / r.count) - 1
        );
      }
      return Number.NaN;
    }
  }
  nm.Portfolio = ym;
  var bm,
    _m = {},
    Sm = {},
    wm = {};
  Object.defineProperty(wm, "__esModule", { value: !0 }),
    (wm.RealizedType =
      wm.tradeTimeZone =
      wm.emptyObjectId =
      wm.minimumPosition =
      wm.minDate =
        void 0),
    (wm.minDate = "0001-01-01"),
    (wm.minimumPosition = 1e-7),
    (wm.emptyObjectId = "000000000000000000000000"),
    (wm.tradeTimeZone = "Europe/Stockholm"),
    (function (e) {
      (e.None = "None"),
        (e.Valuation = "Valuation"),
        (e.NoIncomeCost = "NoIncomeCost"),
        (e.IncomeCost = "IncomeCost"),
        (e.SettlementAmount = "SettlementAmount"),
        (e.RealizedProfitLoss = "RealizedProfitLoss");
    })(bm || (wm.RealizedType = bm = {}));
  var Tm,
    km,
    Cm,
    Em,
    xm,
    Pm,
    Am,
    Mm,
    Nm,
    Im,
    Rm,
    Om,
    Fm,
    Dm,
    Lm,
    Bm,
    jm,
    zm,
    Um,
    Gm,
    Vm,
    $m,
    Hm,
    Ym,
    Wm,
    qm,
    Km,
    Qm,
    Jm,
    Xm,
    Zm,
    eg,
    tg,
    ng,
    rg,
    ag,
    ig,
    og,
    ug,
    lg,
    sg,
    cg,
    fg,
    dg,
    hg,
    pg,
    mg,
    gg,
    vg,
    yg,
    bg,
    _g,
    Sg,
    wg,
    Tg,
    kg,
    Cg,
    Eg,
    xg,
    Pg,
    Ag,
    Mg,
    Ng,
    Ig,
    Rg,
    Og,
    Fg,
    Dg,
    Lg,
    Bg,
    jg,
    zg,
    Ug,
    Gg,
    Vg,
    $g,
    Hg,
    Yg,
    Wg,
    qg,
    Kg,
    Qg,
    Jg,
    Xg,
    Zg,
    ev,
    tv,
    nv,
    rv,
    av,
    iv,
    ov,
    uv,
    lv,
    sv,
    cv,
    fv,
    dv,
    hv,
    pv,
    mv,
    gv,
    vv,
    yv,
    bv,
    _v,
    Sv,
    wv,
    Tv,
    kv = {};
  Object.defineProperty(kv, "__esModule", { value: !0 }),
    (kv.MiniTransactionType =
      kv.MatchingStatus =
      kv.MatchingCoacsStatus =
      kv.MarginType =
      kv.MarginRequirementType =
      kv.MappingTypeEnum =
      kv.MappingParameterEnum =
      kv.MappingCollectionNameEnum =
      kv.JobStateEnum =
      kv.JobResultEnum =
      kv.IssuerTypeEnum =
      kv.IorpEnum =
      kv.InstrumentTypeEnum =
      kv.InstrumentSustainabilityEnum =
      kv.InstrumentStatusEnum =
      kv.InstrumentProductTypeEnum =
      kv.InstrumentPositionType =
      kv.InstrumentModelTypeEnum =
      kv.InstrumentModelObjectTypeEnum =
      kv.InstrumentModelLegTypesEnum =
      kv.InstrumentCategory =
      kv.HistoricalFieldsEnum =
      kv.FundTypeEnum =
      kv.FundReportComponentEnum =
      kv.FeeInterestItemType =
      kv.ExposureCollateralType =
      kv.EsgComponentEnum =
      kv.EngagementMethod =
      kv.DocumentStatusEnum =
      kv.DayAdjustmentEnum =
      kv.CustodianPositionType =
      kv.CurveDefinitionType2 =
      kv.CurveDefinitionType =
      kv.CurrencyEnum =
      kv.CollectionNameEnum =
      kv.BrokerTransactionType =
      kv.BrokerTransactionStatus =
      kv.BestExecutionType =
      kv.BankAccountTransactionStatusEnum =
      kv.ApprovedStatusEnum =
      kv.AgreementTypeEnum =
      kv.AgreementType =
      kv.AgreementStatusEnum =
      kv.AccountingTransactionType =
      kv.AccountingRunTypeEnum =
      kv.AccountingRunStatusEnum =
      kv.AccountingLanguageEnum =
      kv.AccountingFrequencyEnum =
      kv.AccountingCompanyTypeEnum =
      kv.AccountingBatchType =
        void 0),
    (kv.TransactionItemPerformanceType =
      kv.TradeItemType =
      kv.TimezoneEnum =
      kv.TimeSeriesStatus =
      kv.TicketTypeEnum =
      kv.TicketStatusEnum =
      kv.TAccountTypeEnum =
      kv.TAccountMappingSelectorKeyEnum =
      kv.TAccountGroup5Enum =
      kv.TAccountGroup4Enum =
      kv.TAccountGroup3Enum =
      kv.TAccountGroup2Enum =
      kv.TAccountGroup1Enum =
      kv.SwiftStatusEnum =
      kv.SustainableDevelopmentGoal =
      kv.StatusEnum =
      kv.StandardScreenStatus =
      kv.StandardScreenPrinciple =
      kv.StandardScreenNorm =
      kv.SsiTradeType =
      kv.SourceType =
      kv.ScreenType =
      kv.ScienceBasedTargetInitiativeEnum =
      kv.RoleTypeEnum =
      kv.ReportStatusEnum =
      kv.ReferenceFieldsEnum =
      kv.ReconcileTypeEnum =
      kv.RangeEnum =
      kv.QuoteTypeEnum =
      kv.QuoteStatusEnum =
      kv.ProductInvolvementIndicator =
      kv.PricingOptionEnum =
      kv.PriceTypeEnum =
      kv.PriceType =
      kv.PriceStatusEnum =
      kv.PositionTypeEnum =
      kv.PositionSelectorType =
      kv.PermissionAssetEnum =
      kv.PeriodicitySelectionEnum =
      kv.PeriodicityAdjustmentEnum =
      kv.PartyType =
      kv.PartyStatusEnum =
      kv.PartyStandardSettlementInstructionType =
      kv.PartyCustodyAccountType =
      kv.PartyAccountType =
      kv.OverrideOptionEnum =
      kv.NoteTypeEnum =
      kv.NonTradingDayFillOptionEnum =
      kv.NonTradingDayFillMethodEnum =
      kv.NavTransactionType =
        void 0),
    (kv.PermissionTypeEnum =
      kv.ValuationMappingStatus =
      kv.UserStatusEnum =
      kv.UseOfProceed =
      kv.TrueFalseNone =
      kv.TransferAgentOrderEnum =
      kv.TransactionType =
      kv.TransactionStatus =
      kv.TransactionItemType =
        void 0),
    (function (e) {
      (e.A = "A"),
        (e.AR = "AR"),
        (e.BVI = "BVI"),
        (e.BVU = "BVU"),
        (e.IB = "IB"),
        (e.M = "M"),
        (e.MR = "MR"),
        (e.T = "T");
    })(Tm || (kv.AccountingBatchType = Tm = {})),
    (function (e) {
      (e.GeneralPortfolio = "GeneralPortfolio"),
        (e.None = "None"),
        (e.SwedishMutualFund = "SwedishMutualFund");
    })(km || (kv.AccountingCompanyTypeEnum = km = {})),
    (function (e) {
      (e.Annually = "Annually"),
        (e.Monthly = "Monthly"),
        (e.None = "None"),
        (e.Quarterly = "Quarterly"),
        (e.SemiAnnually = "SemiAnnually");
    })(Cm || (kv.AccountingFrequencyEnum = Cm = {})),
    (function (e) {
      e.Sv = "Sv";
    })(Em || (kv.AccountingLanguageEnum = Em = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.Pending = "Pending");
    })(xm || (kv.AccountingRunStatusEnum = xm = {})),
    (function (e) {
      (e.Manual = "Manual"), (e.Transaction = "Transaction");
    })(Pm || (kv.AccountingRunTypeEnum = Pm = {})),
    (function (e) {
      (e.AccruedInterest = "AccruedInterest"),
        (e.Commission = "Commission"),
        (e.CustodyFee = "CustodyFee"),
        (e.Dividend = "Dividend"),
        (e.DividendPaid = "DividendPaid"),
        (e.Equity = "Equity"),
        (e.Fee = "Fee"),
        (e.ForeignTax = "ForeignTax"),
        (e.ForwardCash = "ForwardCash"),
        (e.InitialCost = "InitialCost"),
        (e.Interest = "Interest"),
        (e.ManagementFee = "ManagementFee"),
        (e.OpeningBalance = "OpeningBalance"),
        (e.Realized = "Realized"),
        (e.RealizedFx = "RealizedFx"),
        (e.Rebate = "Rebate"),
        (e.Rounding = "Rounding"),
        (e.ShareCapital = "ShareCapital"),
        (e.StampDuty = "StampDuty"),
        (e.Tax = "Tax"),
        (e.TaxRestitution = "TaxRestitution"),
        (e.Unrealized = "Unrealized"),
        (e.UnrealizedFx = "UnrealizedFx"),
        (e.ValueChange = "ValueChange");
    })(Am || (kv.AccountingTransactionType = Am = {})),
    (function (e) {
      (e.Active = "Active"),
        (e.Deleted = "Deleted"),
        (e.Pending = "Pending"),
        (e.Superseded = "Superseded");
    })(Mm || (kv.AgreementStatusEnum = Mm = {})),
    (function (e) {
      (e.ClearingAccount = "ClearingAccount"),
        (e.Gmra = "Gmra"),
        (e.Gmsla = "Gmsla"),
        (e.Isda = "Isda"),
        (e.OmnibusClearingAccount = "OmnibusClearingAccount");
    })(Nm || (kv.AgreementType = Nm = {})),
    (function (e) {
      (e.CashTrading = "CashTrading"),
        (e.Cdea = "Cdea"),
        (e.ClearingBroker = "ClearingBroker"),
        (e.CustodyAgreement = "CustodyAgreement"),
        (e.Emir = "Emir"),
        (e.EquityDma = "EquityDma"),
        (e.Gmra = "Gmra"),
        (e.Gmsla = "Gmsla"),
        (e.Gua = "Gua"),
        (e.InvestmentManagement = "InvestmentManagement"),
        (e.Isda = "Isda"),
        (e.Mt101 = "Mt101"),
        (e.ProcessAgent = "ProcessAgent"),
        (e.Sftr = "Sftr"),
        (e.Ssi = "Ssi"),
        (e.TriParty = "TriParty"),
        (e.UserAgreement = "UserAgreement");
    })(Im || (kv.AgreementTypeEnum = Im = {})),
    (function (e) {
      (e.Accepted = "Accepted"), (e.Rejected = "Rejected");
    })(Rm || (kv.ApprovedStatusEnum = Rm = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(Om || (kv.BankAccountTransactionStatusEnum = Om = {})),
    (function (e) {
      (e.Client = "Client"),
        (e.Execution = "Execution"),
        (e.Maintenance = "Maintenance"),
        (e.Portfolio = "Portfolio"),
        (e.Transmission = "Transmission");
    })(Fm || (kv.BestExecutionType = Fm = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.Pending = "Pending");
    })(Dm || (kv.BrokerTransactionStatus = Dm = {})),
    (function (e) {
      (e.Buy = "Buy"), (e.Sell = "Sell");
    })(Lm || (kv.BrokerTransactionType = Lm = {})),
    (function (e) {
      (e.BrokerTransaction = "BrokerTransaction"),
        (e.Instrument = "Instrument"),
        (e.IssuerProgram = "IssuerProgram"),
        (e.None = "None"),
        (e.Party = "Party"),
        (e.Screen = "Screen"),
        (e.Transaction = "Transaction");
    })(Bm || (kv.CollectionNameEnum = Bm = {})),
    (function (e) {
      (e.AUD = "AUD"),
        (e.BRL = "BRL"),
        (e.CAD = "CAD"),
        (e.CHF = "CHF"),
        (e.CNY = "CNY"),
        (e.DKK = "DKK"),
        (e.EUR = "EUR"),
        (e.GBP = "GBP"),
        (e.HKD = "HKD"),
        (e.ILS = "ILS"),
        (e.INR = "INR"),
        (e.ISK = "ISK"),
        (e.JPY = "JPY"),
        (e.KRW = "KRW"),
        (e.MXN = "MXN"),
        (e.NOK = "NOK"),
        (e.NZD = "NZD"),
        (e.RUB = "RUB"),
        (e.SEK = "SEK"),
        (e.SGD = "SGD"),
        (e.TRY = "TRY"),
        (e.USD = "USD"),
        (e.ZAR = "ZAR");
    })(jm || (kv.CurrencyEnum = jm = {})),
    (function (e) {
      (e.BasisCurve = "BasisCurve"),
        (e.CreditCurve = "CreditCurve"),
        (e.FixingCurve = "FixingCurve"),
        (e.FxCurve = "FxCurve"),
        (e.YieldCurve = "YieldCurve");
    })(zm || (kv.CurveDefinitionType = zm = {})),
    (function (e) {
      e.YieldCurveDefinition = "YieldCurveDefinition";
    })(Um || (kv.CurveDefinitionType2 = Um = {})),
    (function (e) {
      (e.Automatic = "Automatic"), (e.Manual = "Manual");
    })(Gm || (kv.CustodianPositionType = Gm = {})),
    (function (e) {
      (e.FixedPeriods = "FixedPeriods"),
        (e.Following = "Following"),
        (e.ModifiedFollowing = "ModifiedFollowing");
    })(Vm || (kv.DayAdjustmentEnum = Vm = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })($m || (kv.DocumentStatusEnum = $m = {})),
    (function (e) {
      (e.Dialog = "Dialog"), (e.Voting = "Voting");
    })(Hm || (kv.EngagementMethod = Hm = {})),
    (function (e) {
      (e.CdsIndexEsgScreenings = "CdsIndexEsgScreenings"),
        (e.EsgCategory = "EsgCategory"),
        (e.GlobalStandardScreen = "GlobalStandardScreen"),
        (e.ProductInvolvement = "ProductInvolvement"),
        (e.ProductInvolvementRanges = "ProductInvolvementRanges"),
        (e.ScreeningInformation = "ScreeningInformation"),
        (e.SpoProviders = "SpoProviders"),
        (e.SustainableDevelopmentGoals = "SustainableDevelopmentGoals"),
        (e.TransitionCompanies = "TransitionCompanies"),
        (e.UseOfProceeds = "UseOfProceeds");
    })(Ym || (kv.EsgComponentEnum = Ym = {})),
    (function (e) {
      (e.CollateralCash = "CollateralCash"),
        (e.CollateralSecurity = "CollateralSecurity"),
        (e.Exposure = "Exposure");
    })(Wm || (kv.ExposureCollateralType = Wm = {})),
    (function (e) {
      (e.AccruedInterest = "AccruedInterest"),
        (e.Commission = "Commission"),
        (e.CustodyFee = "CustodyFee"),
        (e.Fee = "Fee"),
        (e.ForeignTax = "ForeignTax"),
        (e.Interest = "Interest"),
        (e.ManagementFee = "ManagementFee"),
        (e.Rebate = "Rebate"),
        (e.TaxRestitution = "TaxRestitution");
    })(qm || (kv.FeeInterestItemType = qm = {})),
    (function (e) {
      (e.AttributionMonth = "AttributionMonth"),
        (e.AtttributionTotal = "AtttributionTotal"),
        (e.BarReturnsMonth = "BarReturnsMonth"),
        (e.BarReturnsYearly = "BarReturnsYearly"),
        (e.CdsIndexComponents = "CdsIndexComponents"),
        (e.CdsIndexEsgScreenings = "CdsIndexEsgScreenings"),
        (e.CountryPieChart = "CountryPieChart"),
        (e.CreditRating = "CreditRating"),
        (e.CreditSpreadRisk = "CreditSpreadRisk"),
        (e.CurrencyBarChart = "CurrencyBarChart"),
        (e.CurrencyPieChart = "CurrencyPieChart"),
        (e.EsgCategory = "EsgCategory"),
        (e.InterestRateBuckets = "InterestRateBuckets"),
        (e.KeyNumbers = "KeyNumbers"),
        (e.ReturnVsVolatility = "ReturnVsVolatility"),
        (e.Sectors = "Sectors"),
        (e.SustainableDevelopmentGoals = "SustainableDevelopmentGoals"),
        (e.TopHoldings = "TopHoldings"),
        (e.TopIssuers = "TopIssuers"),
        (e.TransitionCompanies = "TransitionCompanies"),
        (e.UseOfProceeds = "UseOfProceeds");
    })(Km || (kv.FundReportComponentEnum = Km = {})),
    (function (e) {
      (e.AIF = "AIF"), (e.UCITS = "UCITS");
    })(Qm || (kv.FundTypeEnum = Qm = {})),
    (function (e) {
      (e.PX_LAST = "PX_LAST"), (e.PX_VOLUME = "PX_VOLUME");
    })(Jm || (kv.HistoricalFieldsEnum = Jm = {})),
    (function (e) {
      (e.Alternative = "Alternative"),
        (e.CashAccount = "CashAccount"),
        (e.Equity = "Equity"),
        (e.Fx = "Fx"),
        (e.HedgeFund = "HedgeFund"),
        (e.Interest = "Interest"),
        (e.InterestRate = "InterestRate"),
        (e.Liability = "Liability"),
        (e.Margin = "Margin"),
        (e.None = "None"),
        (e.RealEstate = "RealEstate"),
        (e.System = "System");
    })(Xm || (kv.InstrumentCategory = Xm = {})),
    (function (e) {
      (e.CashFlowLeg = "CashFlowLeg"),
        (e.EquityBasketOptionLeg = "EquityBasketOptionLeg"),
        (e.EquityUnitOptionLeg = "EquityUnitOptionLeg"),
        (e.FixedAmountLeg = "FixedAmountLeg"),
        (e.FixedRateLeg = "FixedRateLeg"),
        (e.FloatRateLeg = "FloatRateLeg"),
        (e.FtaLeg = "FtaLeg"),
        (e.GenericFixedAmountLeg = "GenericFixedAmountLeg"),
        (e.GenericFixedRateLeg = "GenericFixedRateLeg"),
        (e.GenericFloatRateLeg = "GenericFloatRateLeg"),
        (e.SwaptionLeg = "SwaptionLeg");
    })(Zm || (kv.InstrumentModelLegTypesEnum = Zm = {})),
    (function (e) {
      (e.Account = "Account"),
        (e.Client = "Client"),
        (e.Instrument = "Instrument"),
        (e.Portfolio = "Portfolio");
    })(eg || (kv.InstrumentModelObjectTypeEnum = eg = {})),
    (function (e) {
      (e.Balance = "Balance"),
        (e.Bond = "Bond"),
        (e.CashFlowEngineering = "CashFlowEngineering"),
        (e.CdsIndex = "CdsIndex"),
        (e.EquityBasketOption = "EquityBasketOption"),
        (e.EquityUnitOption = "EquityUnitOption"),
        (e.Fta = "Fta"),
        (e.FundExternal = "FundExternal"),
        (e.FundInternal = "FundInternal"),
        (e.FxSwap = "FxSwap"),
        (e.GenericDeposit = "GenericDeposit"),
        (e.GenericFxSpot = "GenericFxSpot"),
        (e.GenericFxSwap = "GenericFxSwap"),
        (e.GenericSwap = "GenericSwap"),
        (e.Pending = "Pending"),
        (e.PortfolioSwap = "PortfolioSwap"),
        (e.PortfolioSwapX = "PortfolioSwapX"),
        (e.RealEstate = "RealEstate"),
        (e.Spot = "Spot"),
        (e.Stock = "Stock"),
        (e.Swap = "Swap"),
        (e.Swaption = "Swaption");
    })(tg || (kv.InstrumentModelTypeEnum = tg = {})),
    (function (e) {
      (e.All = "All"),
        (e.CashAccounts = "CashAccounts"),
        (e.Securities = "Securities");
    })(ng || (kv.InstrumentPositionType = ng = {})),
    (function (e) {
      (e.Account = "Account"),
        (e.BalanceAccount = "BalanceAccount"),
        (e.Bond = "Bond"),
        (e.Cash = "Cash"),
        (e.CashAccount = "CashAccount"),
        (e.Fund = "Fund"),
        (e.FutureForward = "FutureForward"),
        (e.FxPair = "FxPair"),
        (e.Index = "Index"),
        (e.InitialMarginAccount = "InitialMarginAccount"),
        (e.Liability = "Liability"),
        (e.None = "None"),
        (e.Option = "Option"),
        (e.PrincipalAccount = "PrincipalAccount"),
        (e.RealEstate = "RealEstate"),
        (e.Shares = "Shares"),
        (e.Swap = "Swap"),
        (e.System = "System"),
        (e.VariationMarginAccount = "VariationMarginAccount");
    })(rg || (kv.InstrumentProductTypeEnum = rg = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.Pending = "Pending");
    })(ag || (kv.InstrumentStatusEnum = ag = {})),
    (function (e) {
      (e.Green = "Green"),
        (e.None = "None"),
        (e.Social = "Social"),
        (e.SustainabilityLinked = "SustainabilityLinked"),
        (e.Sustainable = "Sustainable"),
        (e.Transition = "Transition");
    })(ig || (kv.InstrumentSustainabilityEnum = ig = {})),
    (function (e) {
      (e.Instrument = "Instrument"), (e.PartyInstrument = "PartyInstrument");
    })(og || (kv.InstrumentTypeEnum = og = {})),
    (function (e) {
      (e.None = "None"), (e.RiskFree = "RiskFree"), (e.SOBL = "SOBL");
    })(ug || (kv.IorpEnum = ug = {})),
    (function (e) {
      (e.CreditInstitution = "CreditInstitution"),
        (e.EuCovered = "EuCovered"),
        (e.Government = "Government"),
        (e.None = "None");
    })(lg || (kv.IssuerTypeEnum = lg = {})),
    (function (e) {
      (e.Enqueued = "Enqueued"),
        (e.Failure = "Failure"),
        (e.Processing = "Processing"),
        (e.Running = "Running"),
        (e.Succeeded = "Succeeded");
    })(sg || (kv.JobResultEnum = sg = {})),
    (function (e) {
      (e.disabled = "disabled"), (e.enabled = "enabled");
    })(cg || (kv.JobStateEnum = cg = {})),
    (function (e) {
      e.CurveDefinition = "CurveDefinition";
    })(fg || (kv.MappingCollectionNameEnum = fg = {})),
    (function (e) {
      (e.CreditCurve = "CreditCurve"),
        (e.DiscountCurve = "DiscountCurve"),
        (e.FixingCurve = "FixingCurve"),
        (e.ForwardCurve = "ForwardCurve"),
        (e.FxCurve = "FxCurve");
    })(dg || (kv.MappingParameterEnum = dg = {})),
    (function (e) {
      (e.Currency = "Currency"),
        (e.Instrument = "Instrument"),
        (e.IssuerProgram = "IssuerProgram"),
        (e.Model = "Model");
    })(hg || (kv.MappingTypeEnum = hg = {})),
    (function (e) {
      (e.InitialMarginRequirement = "InitialMarginRequirement"),
        (e.VariationMarginRequirement = "VariationMarginRequirement");
    })(pg || (kv.MarginRequirementType = pg = {})),
    (function (e) {
      (e.InitialMargin = "InitialMargin"),
        (e.VariationMargin = "VariationMargin");
    })(mg || (kv.MarginType = mg = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Matched = "Matched"),
        (e.Mismatch = "Mismatch"),
        (e.Preliminary = "Preliminary"),
        (e.Settled = "Settled");
    })(gg || (kv.MatchingCoacsStatus = gg = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Matched = "Matched"),
        (e.Mismatch = "Mismatch");
    })(vg || (kv.MatchingStatus = vg = {})),
    (function (e) {
      (e.BondTrade = "BondTrade"),
        (e.Collateral = "Collateral"),
        (e.DerivativeTrade = "DerivativeTrade"),
        (e.Dividend = "Dividend"),
        (e.Fee = "Fee"),
        (e.FundTrade = "FundTrade"),
        (e.Insert = "Insert"),
        (e.Interest = "Interest"),
        (e.StockTrade = "StockTrade"),
        (e.Transfer = "Transfer");
    })(yg || (kv.MiniTransactionType = yg = {})),
    (function (e) {
      (e.CreateRedeemAmount = "CreateRedeemAmount"),
        (e.CreateRedeemUnits = "CreateRedeemUnits"),
        (e.ManagementFee = "ManagementFee");
    })(bg || (kv.NavTransactionType = bg = {})),
    (function (e) {
      (e.NIL_VALUE = "NIL_VALUE"), (e.PREVIOUS_VALUE = "PREVIOUS_VALUE");
    })(_g || (kv.NonTradingDayFillMethodEnum = _g = {})),
    (function (e) {
      (e.ACTIVE_DAYS_ONLY = "ACTIVE_DAYS_ONLY"),
        (e.ALL_CALENDAR_DAYS = "ALL_CALENDAR_DAYS"),
        (e.NON_TRADING_WEEKDAYS = "NON_TRADING_WEEKDAYS");
    })(Sg || (kv.NonTradingDayFillOptionEnum = Sg = {})),
    (function (e) {
      (e.Json = "Json"), (e.Markdown = "Markdown");
    })(wg || (kv.NoteTypeEnum = wg = {})),
    (function (e) {
      (e.OVERRIDE_OPTION_CLOSE = "OVERRIDE_OPTION_CLOSE"),
        (e.OVERRIDE_OPTION_GPA = "OVERRIDE_OPTION_GPA");
    })(Tg || (kv.OverrideOptionEnum = Tg = {})),
    (function (e) {
      (e.Physical = "Physical"),
        (e.PortfolioInstrument = "PortfolioInstrument"),
        (e.Sum = "Sum");
    })(kg || (kv.PartyAccountType = kg = {})),
    (function (e) {
      (e.CashAccount = "CashAccount"),
        (e.ClearingAccount = "ClearingAccount"),
        (e.Equity = "Equity"),
        (e.FundAccount = "FundAccount"),
        (e.Gmra = "Gmra"),
        (e.Gmsla = "Gmsla"),
        (e.Isda = "Isda"),
        (e.OmnibusClearingAccount = "OmnibusClearingAccount"),
        (e.SecuritiesAccount = "SecuritiesAccount"),
        (e.ShareRegistry = "ShareRegistry");
    })(Cg || (kv.PartyCustodyAccountType = Cg = {})),
    (function (e) {
      (e.Equity = "Equity"), (e.FixedIncome = "FixedIncome");
    })(Eg || (kv.PartyStandardSettlementInstructionType = Eg = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.Inactive = "Inactive");
    })(xg || (kv.PartyStatusEnum = xg = {})),
    (function (e) {
      (e.Broker = "Broker"),
        (e.ClearingBroker = "ClearingBroker"),
        (e.ClearingHouse = "ClearingHouse"),
        (e.Client = "Client"),
        (e.CreditRatingAgency = "CreditRatingAgency"),
        (e.Custodian = "Custodian"),
        (e.EsgDataProvider = "EsgDataProvider"),
        (e.Fund = "Fund"),
        (e.Issuer = "Issuer"),
        (e.PlaceOfSettlement = "PlaceOfSettlement");
    })(Pg || (kv.PartyType = Pg = {})),
    (function (e) {
      (e.ACTUAL = "ACTUAL"), (e.CALENDAR = "CALENDAR"), (e.FISCAL = "FISCAL");
    })(Ag || (kv.PeriodicityAdjustmentEnum = Ag = {})),
    (function (e) {
      (e.DAILY = "DAILY"),
        (e.MONTHLY = "MONTHLY"),
        (e.QUARTERLY = "QUARTERLY"),
        (e.SEMI_ANNUALLY = "SEMI_ANNUALLY"),
        (e.WEEKLY = "WEEKLY"),
        (e.YEARLY = "YEARLY");
    })(Mg || (kv.PeriodicitySelectionEnum = Mg = {})),
    (function (e) {
      (e.Accounting = "Accounting"),
        (e.Admin = "Admin"),
        (e.Agreement = "Agreement"),
        (e.Attachment = "Attachment"),
        (e.BackOffice = "BackOffice"),
        (e.BankAccountTransaction = "BankAccountTransaction"),
        (e.Base = "Base"),
        (e.Bloomberg = "Bloomberg"),
        (e.Collateral = "Collateral"),
        (e.Esg = "Esg"),
        (e.Instrument = "Instrument"),
        (e.Job = "Job"),
        (e.Limit = "Limit"),
        (e.Nav = "Nav"),
        (e.Note = "Note"),
        (e.Party = "Party"),
        (e.Performance = "Performance"),
        (e.Playground = "Playground"),
        (e.PortfolioManager = "PortfolioManager"),
        (e.Position = "Position"),
        (e.Price = "Price"),
        (e.Property = "Property"),
        (e.Quote = "Quote"),
        (e.Reconciliation = "Reconciliation"),
        (e.Report = "Report"),
        (e.Sustainalytics = "Sustainalytics"),
        (e.Ticket = "Ticket"),
        (e.TimeSeries = "TimeSeries"),
        (e.Transaction = "Transaction"),
        (e.User = "User"),
        (e.Valuation = "Valuation");
    })(Ng || (kv.PermissionAssetEnum = Ng = {})),
    (function (e) {
      (e.AccountId = "AccountId"),
        (e.ClientId = "ClientId"),
        (e.CustodyAccountId = "CustodyAccountId");
    })(Ig || (kv.PositionSelectorType = Ig = {})),
    (function (e) {
      (e.CreateRedeem = "CreateRedeem"),
        (e.OffBalance = "OffBalance"),
        (e.OnBalance = "OnBalance");
    })(Rg || (kv.PositionTypeEnum = Rg = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(Og || (kv.PriceStatusEnum = Og = {})),
    (function (e) {
      (e.AccruedInterest = "AccruedInterest"),
        (e.CleanPrice = "CleanPrice"),
        (e.Price = "Price"),
        (e.PriceEstimate = "PriceEstimate");
    })(Fg || (kv.PriceType = Fg = {})),
    (function (e) {
      (e.Price = "Price"),
        (e.Valuation = "Valuation"),
        (e.ValuationMapping = "ValuationMapping");
    })(Dg || (kv.PriceTypeEnum = Dg = {})),
    (function (e) {
      (e.PRICING_OPTION_PRICE = "PRICING_OPTION_PRICE"),
        (e.PRICING_OPTION_YIELD = "PRICING_OPTION_YIELD");
    })(Lg || (kv.PricingOptionEnum = Lg = {})),
    (function (e) {
      (e.AdultEntertainment = "AdultEntertainment"),
        (e.AlcoholicBeverages = "AlcoholicBeverages"),
        (e.ControversialWeapons = "ControversialWeapons"),
        (e.Gambling = "Gambling"),
        (e.MilitaryContracting = "MilitaryContracting"),
        (e.OilGas = "OilGas"),
        (e.OilSands = "OilSands"),
        (e.SmallArms = "SmallArms"),
        (e.ThermalCoal = "ThermalCoal"),
        (e.TobaccoProducts = "TobaccoProducts");
    })(Bg || (kv.ProductInvolvementIndicator = Bg = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(jg || (kv.QuoteStatusEnum = jg = {})),
    (function (e) {
      (e.Clean = "Clean"),
        (e.Coupon = "Coupon"),
        (e.PctOfNominal = "PctOfNominal"),
        (e.PerUnit = "PerUnit"),
        (e.Pips4 = "Pips4");
    })(zg || (kv.QuoteTypeEnum = zg = {})),
    (function (e) {
      (e.R0To5 = "R0To5"),
        (e.R5To10 = "R5To10"),
        (e.R10To25 = "R10To25"),
        (e.R25To50 = "R25To50"),
        (e.R50To100 = "R50To100");
    })(Ug || (kv.RangeEnum = Ug = {})),
    (function (e) {
      (e.ExposureCollateral = "ExposureCollateral"),
        (e.NettingSet = "NettingSet"),
        (e.NettingSetBaseCurrency = "NettingSetBaseCurrency");
    })(Gg || (kv.ReconcileTypeEnum = Gg = {})),
    (function (e) {
      (e.CDS_SPREAD_MID_MODIFIED_DURATION = "CDS_SPREAD_MID_MODIFIED_DURATION"),
        (e.CFI_CODE = "CFI_CODE"),
        (e.CNTRY_OF_DOMICILE = "CNTRY_OF_DOMICILE"),
        (e.COMPANY_IS_PRIVATE = "COMPANY_IS_PRIVATE"),
        (e.CPN_TYP = "CPN_TYP"),
        (e.CRNCY = "CRNCY"),
        (e.DAYS_TO_SETTLE = "DAYS_TO_SETTLE"),
        (e.DISC_MRGN_MID = "DISC_MRGN_MID"),
        (e.DUR_ADJ_MID = "DUR_ADJ_MID"),
        (e.ECBC_COVERED_BD_LABEL_INDICATOR = "ECBC_COVERED_BD_LABEL_INDICATOR"),
        (e.EXCH_CODE = "EXCH_CODE"),
        (e.GB_MANAGEMENT_PROCEEDS = "GB_MANAGEMENT_PROCEEDS"),
        (e.GICS_SUB_INDUSTRY = "GICS_SUB_INDUSTRY"),
        (e.ID_BB_COMPANY = "ID_BB_COMPANY"),
        (e.ID_EXCH_SYMBOL = "ID_EXCH_SYMBOL"),
        (e.ID_ISIN = "ID_ISIN"),
        (e.INDUSTRY_SUBGROUP_NUM = "INDUSTRY_SUBGROUP_NUM"),
        (e.ISSUER = "ISSUER"),
        (e.ISSUER_INDUSTRY = "ISSUER_INDUSTRY"),
        (e.LAST_UPDATE_BID_RT = "LAST_UPDATE_BID_RT"),
        (e.LAST_UPDATE_DT_EXCH_TZ = "LAST_UPDATE_DT_EXCH_TZ"),
        (e.LEGAL_ENTITY_IDENTIFIER = "LEGAL_ENTITY_IDENTIFIER"),
        (e.MARKET_SECTOR_DES = "MARKET_SECTOR_DES"),
        (e.PAR_AMT = "PAR_AMT"),
        (e.PAYMENT_RANK = "PAYMENT_RANK"),
        (e.PX_ASK = "PX_ASK"),
        (e.PX_BID = "PX_BID"),
        (e.PX_CLOSE = "PX_CLOSE"),
        (e.PX_LAST = "PX_LAST"),
        (e.RTG_FITCH = "RTG_FITCH"),
        (e.RTG_FITCH_LONG = "RTG_FITCH_LONG"),
        (e.RTG_FITCH_LT_ISSUER_DEFAULT = "RTG_FITCH_LT_ISSUER_DEFAULT"),
        (e.RTG_MDY_ISSUER = "RTG_MDY_ISSUER"),
        (e.RTG_MOODY = "RTG_MOODY"),
        (e.RTG_MOODY_LONG_TERM = "RTG_MOODY_LONG_TERM"),
        (e.RTG_SP = "RTG_SP"),
        (e.RTG_SP_LONG = "RTG_SP_LONG"),
        (e.RTG_SP_LT_LC_ISSUER_CREDIT = "RTG_SP_LT_LC_ISSUER_CREDIT"),
        (e.SECURITY_NAME = "SECURITY_NAME"),
        (e.SEC_ID_WITH_YK_PARSEKYABLE_RT = "SEC_ID_WITH_YK_PARSEKYABLE_RT"),
        (e.SERIES = "SERIES"),
        (e.TICKER = "TICKER"),
        (e.TIME = "TIME"),
        (e.YAS_ISPREAD_TO_GOVT = "YAS_ISPREAD_TO_GOVT"),
        (e.YLD_YTM_MID = "YLD_YTM_MID");
    })(Vg || (kv.ReferenceFieldsEnum = Vg = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })($g || (kv.ReportStatusEnum = $g = {})),
    (function (e) {
      (e.Backend = "Backend"), (e.Frontend = "Frontend");
    })(Hg || (kv.RoleTypeEnum = Hg = {})),
    (function (e) {
      (e.Commited = "Commited"),
        (e.NoTarget = "NoTarget"),
        (e.TargetSet = "TargetSet");
    })(Yg || (kv.ScienceBasedTargetInitiativeEnum = Yg = {})),
    (function (e) {
      (e.Issuer = "Issuer"), (e.IssuerProgram = "IssuerProgram");
    })(Wg || (kv.ScreenType = Wg = {})),
    (function (e) {
      (e.BloombergFit = "BloombergFit"),
        (e.Coacs = "Coacs"),
        (e.Emsx = "Emsx"),
        (e.Fxgo = "Fxgo"),
        (e.Internal = "Internal"),
        (e.MarkitWire = "MarkitWire"),
        (e.Tradeweb = "Tradeweb");
    })(qg || (kv.SourceType = qg = {})),
    (function (e) {
      (e.Collateral = "Collateral"), (e.Security = "Security");
    })(Kg || (kv.SsiTradeType = Kg = {})),
    (function (e) {
      (e.BusinessEthics = "BusinessEthics"),
        (e.Environment = "Environment"),
        (e.HumanRights = "HumanRights"),
        (e.LabourRights = "LabourRights"),
        (e.None = "None");
    })(Qg || (kv.StandardScreenNorm = Qg = {})),
    (function (e) {
      (e.None = "None"),
        (e.Principle1 = "Principle1"),
        (e.Principle2 = "Principle2"),
        (e.Principle3 = "Principle3"),
        (e.Principle4 = "Principle4"),
        (e.Principle5 = "Principle5"),
        (e.Principle6 = "Principle6"),
        (e.Principle7 = "Principle7"),
        (e.Principle8 = "Principle8"),
        (e.Principle9 = "Principle9"),
        (e.Principle10 = "Principle10");
    })(Jg || (kv.StandardScreenPrinciple = Jg = {})),
    (function (e) {
      (e.Compliant = "Compliant"),
        (e.NonCompliant = "NonCompliant"),
        (e.Watchlist = "Watchlist");
    })(Xg || (kv.StandardScreenStatus = Xg = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(Zg || (kv.StatusEnum = Zg = {})),
    (function (e) {
      (e.Goal1_NoPoverty = "Goal1_NoPoverty"),
        (e.Goal2_ZeroHunger = "Goal2_ZeroHunger"),
        (e.Goal3_GoodHealthAndWellBeing = "Goal3_GoodHealthAndWellBeing"),
        (e.Goal4_QualityEducation = "Goal4_QualityEducation"),
        (e.Goal5_GenderEquality = "Goal5_GenderEquality"),
        (e.Goal6_CleanWaterAndSanitation = "Goal6_CleanWaterAndSanitation"),
        (e.Goal7_AffordableAndCleanEnergy = "Goal7_AffordableAndCleanEnergy"),
        (e.Goal8_DecentWorkAndEconomicGrowth =
          "Goal8_DecentWorkAndEconomicGrowth"),
        (e.Goal9_IndustryInnovationAndInfrastructure =
          "Goal9_IndustryInnovationAndInfrastructure"),
        (e.Goal10_ReducedInequality = "Goal10_ReducedInequality"),
        (e.Goal11_SustainableCitiesAndCommunities =
          "Goal11_SustainableCitiesAndCommunities"),
        (e.Goal12_ResponsibleConsumptionAndProduction =
          "Goal12_ResponsibleConsumptionAndProduction"),
        (e.Goal13_ClimateAction = "Goal13_ClimateAction"),
        (e.Goal14_LifeBelowWater = "Goal14_LifeBelowWater"),
        (e.Goal15_LifeOnLand = "Goal15_LifeOnLand"),
        (e.Goal16_PeaceJusticeAndStrongInstitutions =
          "Goal16_PeaceJusticeAndStrongInstitutions"),
        (e.Goal17_PartnershipsToAchieveTheGoal =
          "Goal17_PartnershipsToAchieveTheGoal");
    })(ev || (kv.SustainableDevelopmentGoal = ev = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.Pending = "Pending"),
        (e.Preliminary = "Preliminary"),
        (e.Settled = "Settled"),
        (e.UpdatedPrevious = "UpdatedPrevious"),
        (e.Waiting = "Waiting");
    })(tv || (kv.SwiftStatusEnum = tv = {})),
    (function (e) {
      (e.Assets = "Assets"),
        (e.Equity = "Equity"),
        (e.Liabilities = "Liabilities");
    })(nv || (kv.TAccountGroup1Enum = nv = {})),
    (function (e) {
      (e.A = "A"),
        (e.B = "B"),
        (e.C = "C"),
        (e.D = "D"),
        (e.DividendPaid = "DividendPaid"),
        (e.E = "E"),
        (e.F = "F"),
        (e.G = "G"),
        (e.H = "H"),
        (e.I = "I"),
        (e.J = "J"),
        (e.K = "K"),
        (e.L = "L"),
        (e.M = "M"),
        (e.N = "N"),
        (e.O = "O"),
        (e.P = "P"),
        (e.ProfitLossCurrentYear = "ProfitLossCurrentYear"),
        (e.Q = "Q"),
        (e.R = "R"),
        (e.RetainedEarnings = "RetainedEarnings"),
        (e.S = "S"),
        (e.ShareCapital = "ShareCapital"),
        (e.T = "T");
    })(rv || (kv.TAccountGroup2Enum = rv = {})),
    (function (e) {
      (e.A = "A"),
        (e.B = "B"),
        (e.C = "C"),
        (e.D = "D"),
        (e.DividendPaid = "DividendPaid"),
        (e.E = "E"),
        (e.Expenses = "Expenses"),
        (e.F = "F"),
        (e.G = "G"),
        (e.H = "H"),
        (e.I = "I"),
        (e.J = "J"),
        (e.K = "K"),
        (e.L = "L"),
        (e.M = "M"),
        (e.N = "N"),
        (e.O = "O"),
        (e.P = "P"),
        (e.Q = "Q"),
        (e.R = "R"),
        (e.RetainedEarnings = "RetainedEarnings"),
        (e.Revenue = "Revenue"),
        (e.S = "S"),
        (e.ShareCapital = "ShareCapital"),
        (e.T = "T"),
        (e.Tax = "Tax");
    })(av || (kv.TAccountGroup3Enum = av = {})),
    (function (e) {
      (e.A = "A"),
        (e.B = "B"),
        (e.C = "C"),
        (e.D = "D"),
        (e.E = "E"),
        (e.F = "F"),
        (e.G = "G"),
        (e.H = "H"),
        (e.I = "I"),
        (e.J = "J"),
        (e.K = "K"),
        (e.L = "L"),
        (e.M = "M"),
        (e.ManagementFees = "ManagementFees"),
        (e.N = "N"),
        (e.None = "None"),
        (e.O = "O"),
        (e.P = "P"),
        (e.Q = "Q"),
        (e.R = "R"),
        (e.S = "S"),
        (e.T = "T");
    })(iv || (kv.TAccountGroup4Enum = iv = {})),
    (function (e) {
      (e.A = "A"),
        (e.B = "B"),
        (e.C = "C"),
        (e.D = "D"),
        (e.E = "E"),
        (e.F = "F"),
        (e.G = "G"),
        (e.H = "H"),
        (e.I = "I"),
        (e.J = "J"),
        (e.K = "K"),
        (e.L = "L"),
        (e.M = "M"),
        (e.N = "N"),
        (e.None = "None"),
        (e.O = "O"),
        (e.P = "P"),
        (e.Q = "Q"),
        (e.R = "R"),
        (e.S = "S"),
        (e.T = "T");
    })(ov || (kv.TAccountGroup5Enum = ov = {})),
    (function (e) {
      (e.Equity = "Equity"),
        (e.OpeningBalance = "OpeningBalance"),
        (e.Rounding = "Rounding");
    })(uv || (kv.TAccountMappingSelectorKeyEnum = uv = {})),
    (function (e) {
      (e.Asset = "Asset"), (e.Income = "Income"), (e.Liability = "Liability");
    })(lv || (kv.TAccountTypeEnum = lv = {})),
    (function (e) {
      (e.Closed = "Closed"), (e.Open = "Open");
    })(sv || (kv.TicketStatusEnum = sv = {})),
    (function (e) {
      (e.Error = "Error"),
        (e.ExposureCollateralError = "ExposureCollateralError"),
        (e.FundUnitReconciliationError = "FundUnitReconciliationError"),
        (e.MarginCall = "MarginCall"),
        (e.MatchBrokerTransactionError = "MatchBrokerTransactionError"),
        (e.PositionReconciliationError = "PositionReconciliationError");
    })(cv || (kv.TicketTypeEnum = cv = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(fv || (kv.TimeSeriesStatus = fv = {})),
    (function (e) {
      (e.AmericaChicago = "AmericaChicago"),
        (e.AmericaNew_York = "AmericaNew_York"),
        (e.AsiaHong_Kong = "AsiaHong_Kong"),
        (e.AsiaTokyo = "AsiaTokyo"),
        (e.EuropeAmsterdam = "EuropeAmsterdam"),
        (e.EuropeBerlin = "EuropeBerlin"),
        (e.EuropeBrussels = "EuropeBrussels"),
        (e.EuropeCopenhagen = "EuropeCopenhagen"),
        (e.EuropeHelsinki = "EuropeHelsinki"),
        (e.EuropeLondon = "EuropeLondon"),
        (e.EuropeLuxembourg = "EuropeLuxembourg"),
        (e.EuropeOslo = "EuropeOslo"),
        (e.EuropeParis = "EuropeParis"),
        (e.EuropeStockholm = "EuropeStockholm"),
        (e.EuropeZurich = "EuropeZurich");
    })(dv || (kv.TimezoneEnum = dv = {})),
    (function (e) {
      (e.AccruedInterest = "AccruedInterest"),
        (e.Commission = "Commission"),
        (e.StampDuty = "StampDuty");
    })(hv || (kv.TradeItemType = hv = {})),
    (function (e) {
      (e.Normal = "Normal"),
        (e.Portfolio = "Portfolio"),
        (e.PortfolioItem = "PortfolioItem");
    })(pv || (kv.TransactionItemPerformanceType = pv = {})),
    (function (e) {
      (e.AccruedInterest = "AccruedInterest"),
        (e.Collateral = "Collateral"),
        (e.CollateralPledge = "CollateralPledge"),
        (e.CollateralPledgeInitialMargin = "CollateralPledgeInitialMargin"),
        (e.Commission = "Commission"),
        (e.CreateRedeem = "CreateRedeem"),
        (e.CreateRedeemAdjustmentAmount = "CreateRedeemAdjustmentAmount"),
        (e.CreateRedeemAdjustmentShares = "CreateRedeemAdjustmentShares"),
        (e.CustodyFee = "CustodyFee"),
        (e.Dividend = "Dividend"),
        (e.DividendPaid = "DividendPaid"),
        (e.Fee = "Fee"),
        (e.ForeignTax = "ForeignTax"),
        (e.Interest = "Interest"),
        (e.ManagementFee = "ManagementFee"),
        (e.PayableReceivable = "PayableReceivable"),
        (e.Rebate = "Rebate"),
        (e.Security = "Security"),
        (e.SecurityLoan = "SecurityLoan"),
        (e.SettlementAmount = "SettlementAmount"),
        (e.StampDuty = "StampDuty"),
        (e.Tax = "Tax"),
        (e.TaxRestitution = "TaxRestitution");
    })(mv || (kv.TransactionItemType = mv = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Deleted = "Deleted"),
        (e.History = "History"),
        (e.Instructed = "Instructed"),
        (e.Internal = "Internal"),
        (e.Pending = "Pending"),
        (e.Preliminary = "Preliminary"),
        (e.Settled = "Settled");
    })(gv || (kv.TransactionStatus = gv = {})),
    (function (e) {
      (e.BondTrade = "BondTrade"),
        (e.Collateral = "Collateral"),
        (e.CreateRedeem = "CreateRedeem"),
        (e.DerivativeTrade = "DerivativeTrade"),
        (e.Dividend = "Dividend"),
        (e.Fee = "Fee"),
        (e.FundTrade = "FundTrade"),
        (e.FxOutright = "FxOutright"),
        (e.FxSpot = "FxSpot"),
        (e.Insert = "Insert"),
        (e.Interest = "Interest"),
        (e.IrSwap = "IrSwap"),
        (e.StockTrade = "StockTrade"),
        (e.Trade = "Trade"),
        (e.Transfer = "Transfer");
    })(vv || (kv.TransactionType = vv = {})),
    (function (e) {
      (e.BUY = "BUY"), (e.SELL = "SELL");
    })(yv || (kv.TransferAgentOrderEnum = yv = {})),
    (function (e) {
      (e.False = "False"), (e.None = "None"), (e.True = "True");
    })(bv || (kv.TrueFalseNone = bv = {})),
    (function (e) {
      (e.AccessEssentialServices = "AccessEssentialServices"),
        (e.AffordableHousing = "AffordableHousing"),
        (e.AffordableInfraStructure = "AffordableInfraStructure"),
        (e.CleanTransportation = "CleanTransportation"),
        (e.ClimateChangeAdaption = "ClimateChangeAdaption"),
        (e.EcoEfficientProducts = "EcoEfficientProducts"),
        (e.EmploymentGeneration = "EmploymentGeneration"),
        (e.EnergyEfficiency = "EnergyEfficiency"),
        (e.EnvironmentallySustainableManagement =
          "EnvironmentallySustainableManagement"),
        (e.GreenBuldings = "GreenBuldings"),
        (e.Other = "Other"),
        (e.PollutionPreventionAndControl = "PollutionPreventionAndControl"),
        (e.RenewableEnergy = "RenewableEnergy"),
        (e.SocioEconomicAdvancement = "SocioEconomicAdvancement"),
        (e.SustainableFoodSystems = "SustainableFoodSystems"),
        (e.SustainableWaterManagement = "SustainableWaterManagement"),
        (e.TerrestrialandAcquaticConservation =
          "TerrestrialandAcquaticConservation");
    })(_v || (kv.UseOfProceed = _v = {})),
    (function (e) {
      (e.Confirmed = "Confirmed"),
        (e.Disabled = "Disabled"),
        (e.Pending = "Pending");
    })(Sv || (kv.UserStatusEnum = Sv = {})),
    (function (e) {
      (e.Active = "Active"), (e.Deleted = "Deleted");
    })(wv || (kv.ValuationMappingStatus = wv = {})),
    (function (e) {
      (e.Read = "Read"), (e.ReadWrite = "ReadWrite");
    })(Tv || (kv.PermissionTypeEnum = Tv = {}));
  var Cv = {};
  Object.defineProperty(Cv, "__esModule", { value: !0 }),
    (Cv.MockValuations = Cv.Valuations = void 0);
  const Ev = Kh,
    xv = kv,
    { pow: Pv, random: Av } = Math;
  class Mv {
    static fromArray(e, t) {
      const n = new Mv();
      (n.byInstruments = (0, Ev.groupBy)(e, "instrumentId")),
        (n.instrumentsByName = (0, Ev.keyBy)(t, "name")),
        (n.instrumentsById = (0, Ev.keyBy)(t, "_id"));
      const r = Object.keys(n.byInstruments);
      for (let a = 0; a < r.length; a++) {
        let e = r[a];
        n.byInstruments[e].sort((e, t) => (e.date < t.date ? 1 : -1));
      }
      return n;
    }
    findInstrumentByName(e) {
      return this.instrumentsByName[e] || null;
    }
    getFxValue(e, t) {
      const n = this.findInstrumentByName(e);
      if (!n) return null;
      const r = this.getPrice(n._id, t);
      return r ? Mv.priceByTypes(r, [xv.PriceType.Price]) : null;
    }
    getPrice(e, t, n = null) {
      const r = this.byInstruments[e];
      if (void 0 === r) return null;
      for (let a = 0; a < r.length; a++) {
        let e = r[a];
        if (e.date > t) continue;
        if (0 === e.records.length) continue;
        const i = e.records[e.records.length - 1];
        if (n && !i.prices.every((e) => e.currency === n)) continue;
        const o = (0, Ev.keyBy)(i.prices, "type");
        if (
          o[xv.PriceType.Price] ||
          (o[xv.PriceType.AccruedInterest] && o[xv.PriceType.CleanPrice])
        )
          return o;
      }
      return null;
    }
    static priceByTypes(e, t) {
      let n = 0;
      if (null === e) return n;
      for (let r = 0; r < t.length; r++) {
        const a = e[t[r]];
        n += a ? a.value : 0;
      }
      return n;
    }
  }
  Cv.Valuations = Mv;
  class Nv extends Mv {
    constructor() {
      super(),
        (this.byInstruments = {}),
        (this.instrumentsByName = {}),
        (this.instrumentsById = {}),
        (this.askedFxPairNames = {}),
        (this.askedInstrumentIds = {});
    }
    static fromArray(e = null, t = null) {
      return new Nv();
    }
    static randomPrice() {
      return Pv(10, Av());
    }
    findInstrumentByName(e) {
      return { _id: "000000000000000000000000", name: e };
    }
    getFxValue(e, t) {
      return (this.askedFxPairNames[e] = !0), Nv.randomPrice();
    }
    getPrice(e, t, n = null) {
      return (
        (this.askedInstrumentIds[e] = !0),
        n || (n = "SEK"),
        Av() < 0.5
          ? {
              Price: {
                __typename: "ValuationPrice",
                type: xv.PriceType.Price,
                value: Nv.randomPrice(),
                currency: n,
              },
            }
          : {
              CleanPrice: {
                __typename: "ValuationPrice",
                type: xv.PriceType.CleanPrice,
                value: Nv.randomPrice(),
                currency: n,
              },
              AccruedInterest: {
                __typename: "ValuationPrice",
                type: xv.PriceType.AccruedInterest,
                value: Nv.randomPrice(),
                currency: n,
              },
            }
      );
    }
    static priceByTypes(e, t) {
      return Nv.randomPrice();
    }
  }
  var Iv;
  function Rv() {
    if (Iv) return Sm;
    (Iv = 1),
      Object.defineProperty(Sm, "__esModule", { value: !0 }),
      (Sm.calcRealization =
        Sm.Inventory =
        Sm.calcRealizedType =
        Sm.addDays =
        Sm.isRealizationType =
        Sm.isCashAccountType =
        Sm.toPositionGridViewItem =
        Sm.calcPositions =
        Sm.getValuationInstrumentIds =
        Sm.InventoryItem =
        Sm.groupTransactionItemsByInstrument =
        Sm.sortTransactions =
        Sm.isPositionBuildingType =
        Sm.isCreateRedeemType =
        Sm.isFeeType =
        Sm.isCollateralType =
        Sm.isTradeType =
          void 0);
    const e = Kh,
      t = wm,
      n = kv,
      r = Cv,
      a = Vv(),
      { sign: i, abs: o } = Math;
    function u(e) {
      return (
        e === n.TransactionType.Trade ||
        e === n.TransactionType.BondTrade ||
        e === n.TransactionType.FundTrade ||
        e === n.TransactionType.StockTrade ||
        e === n.TransactionType.DerivativeTrade ||
        e === n.TransactionType.Insert
      );
    }
    function l(e) {
      return (
        e === n.TransactionItemType.Collateral ||
        e === n.TransactionItemType.CollateralPledge ||
        e === n.TransactionItemType.CollateralPledgeInitialMargin ||
        e === n.TransactionItemType.SecurityLoan
      );
    }
    function s(e) {
      return (
        e === n.TransactionItemType.ManagementFee ||
        e === n.TransactionItemType.CustodyFee ||
        e === n.TransactionItemType.Rebate ||
        e === n.TransactionItemType.Fee ||
        e === n.TransactionItemType.Commission ||
        e === n.TransactionItemType.StampDuty ||
        e === n.TransactionItemType.ForeignTax ||
        e === n.TransactionItemType.Tax ||
        e === n.TransactionItemType.TaxRestitution
      );
    }
    function c(e) {
      return (
        e === n.TransactionItemType.CreateRedeemAdjustmentShares ||
        e === n.TransactionItemType.CreateRedeem
      );
    }
    (Sm.isTradeType = u),
      (Sm.isCollateralType = l),
      (Sm.isFeeType = s),
      (Sm.isCreateRedeemType = c),
      (Sm.isPositionBuildingType = function (e) {
        return (
          e === n.TransactionItemType.CreateRedeemAdjustmentShares ||
          e === n.TransactionItemType.Collateral ||
          e === n.TransactionItemType.CreateRedeem ||
          e === n.TransactionItemType.CollateralPledge ||
          e === n.TransactionItemType.CollateralPledgeInitialMargin ||
          e === n.TransactionItemType.PayableReceivable ||
          e === n.TransactionItemType.SecurityLoan ||
          e === n.TransactionItemType.Security ||
          e === n.TransactionItemType.SettlementAmount
        );
      }),
      (Sm.sortTransactions = function (e) {
        return (
          e.sort(function (e, t) {
            const n = e.tradeTimestamp.getTime() - t.tradeTimestamp.getTime();
            return 0 !== n ? n : e._id < t._id ? -1 : 1;
          }),
          e
        );
      }),
      (Sm.groupTransactionItemsByInstrument = function (t, r) {
        const a = t.reduce((e, t) => {
          for (let a = 0; a < t.items.length; a++) {
            if (
              t.status === n.TransactionStatus.Deleted ||
              t.status === n.TransactionStatus.History ||
              t.tradeDate > r
            )
              continue;
            let i = t.items[a];
            (i.transaction = t), e.push(i);
          }
          return e;
        }, []);
        return (0, e.groupBy)(a, (e) => e.instrumentId);
      });
    class f {
      constructor(e = 0, t = 0, n = 0, r = 0) {
        (this.amount = e),
          (this.quantity = t),
          (this.price = n),
          (this.fxRate = r);
      }
      static clone(e = null) {
        return new f(
          e ? e.amount : 0,
          e ? e.quantity : 0,
          e ? e.price : 0,
          e ? e.fxRate : 0
        );
      }
    }
    (Sm.InventoryItem = f),
      (Sm.getValuationInstrumentIds = function (t, n, i, o) {
        const u = r.MockValuations.fromArray(null, null),
          l = Object.keys(t);
        for (let e = 0; e < l.length; e++) {
          let n = l[e];
          a.PortfolioLedgerPosition.calcPosition(n, t[n], u, i, o, "SEK");
        }
        const s = (0, e.keyBy)(n, "name"),
          c = Object.keys(u.askedFxPairNames);
        return {
          sequrityInstrumentIds: Object.keys(u.askedInstrumentIds),
          fxPairInstrumentIds: c.map((e) => s[e]._id),
        };
      }),
      (Sm.calcPositions = function (e, t, n, r, i) {
        const o = Object.keys(e),
          u = [];
        for (let l = 0; l < o.length; l++) {
          let s = o[l],
            c = e[s],
            f = a.PortfolioLedgerPosition.calcPosition(s, c, t, n, r, i);
          u.push(f);
        }
        return u;
      }),
      (Sm.toPositionGridViewItem = function (e, t, n) {
        let r = n[e.instrumentId];
        return (
          r || (r = t.instruments.find((t) => t._id === e.instrumentId)),
          r || console.log("No instrument found, id =", e.instrumentId),
          {
            id: e.instrumentId,
            name: r ? r.name : null,
            longName: r ? r.longName : null,
            cashAccount: e.cashAccount,
            quantity: e.inventory.position,
            currency: e.currency,
            endValue: e.endMarketValue,
            startValue: e.startMarketValue,
            cashFlow: e.cashFlow,
            foProfitLoss: e.endMarketValue - e.startMarketValue - e.cashFlow,
            realizedProfitLoss: e.realizedProfitLoss.total,
            endUnrealizedProfitLoss: e.endUnrealizedProfitLoss.total,
            startUnrealizedProfitLoss: e.startUnrealizedProfitLoss.total,
            income: e.income.total,
            accrued: e.endAccrued - e.startAccrued,
            boProfitLoss:
              e.totalProfitLoss.total + e.endAccrued - e.startAccrued,
            lastTradeTimestamp: e.lastTradeTimestamp,
            productType: r ? r.productType : null,
            category: r ? r.category : null,
          }
        );
      }),
      (Sm.isCashAccountType = function (e) {
        return (
          e === n.TransactionItemType.SettlementAmount ||
          s(e) ||
          e === n.TransactionItemType.Interest
        );
      }),
      (Sm.isRealizationType = function (e) {
        return !(
          e === n.TransactionItemType.Dividend ||
          e === n.TransactionItemType.DividendPaid ||
          e === n.TransactionItemType.Interest ||
          e === n.TransactionItemType.AccruedInterest ||
          s(e) ||
          l(e)
        );
      }),
      (Sm.addDays = function (e, t) {
        return new Date(new Date(e).getTime() + 864e5 * t)
          .toJSON()
          .slice(0, 10);
      }),
      (Sm.calcRealizedType = function (e, t, r) {
        return e.type === n.TransactionItemType.Dividend ||
          e.type === n.TransactionItemType.DividendPaid ||
          e.type === n.TransactionItemType.Interest ||
          e.type === n.TransactionItemType.AccruedInterest ||
          s(e.type)
          ? e.transaction.tradeDate > r
            ? a.RealizedType.IncomeCost
            : a.RealizedType.NoIncomeCost
          : e.type === n.TransactionItemType.SettlementAmount
          ? 0 !== t
            ? e.transaction.tradeDate > r
              ? a.RealizedType.RealizedProfitLoss
              : a.RealizedType.NoIncomeCost
            : a.RealizedType.SettlementAmount
          : c(e.type)
          ? a.RealizedType.None
          : u(e.transaction.type) && !l(e.type)
          ? e.transaction.tradeDate > r
            ? a.RealizedType.RealizedProfitLoss
            : a.RealizedType.NoIncomeCost
          : e.type === n.TransactionItemType.Security
          ? a.RealizedType.NoIncomeCost
          : a.RealizedType.None;
      });
    class d {
      constructor(e = 0, t = 0, n = 0) {
        (this.position = e),
          (this.initialCost = t),
          (this.sumAmount = n),
          (this.items = []);
      }
      static clone(e) {
        const t = new d();
        return e && e.items.forEach((e) => t.add(f.clone(e))), t;
      }
      add(e) {
        (this.position += e.quantity),
          (this.initialCost += e.amount * e.fxRate),
          (this.sumAmount += e.amount),
          this.items.push(e);
      }
      get initialPrice() {
        return 0 === this.position ? 0 : this.sumAmount / this.position;
      }
      get initialFxRate() {
        return 0 === this.sumAmount ? null : this.initialCost / this.sumAmount;
      }
    }
    return (
      (Sm.Inventory = d),
      (Sm.calcRealization = function (e, n) {
        const r = { inventory: null, realizedProfitLoss: null };
        (r.inventory = d.clone(e)), (r.realizedProfitLoss = new a.ProfitLoss());
        const u = r.inventory.position,
          l = n.quantity;
        if (0 === u || 0 === l || i(l) === i(u)) r.inventory.add(n);
        else if (i(l) !== i(u))
          if (o(l) >= o(u)) {
            const e = n.amount / l;
            if (
              ((r.realizedProfitLoss = new a.ProfitLoss(
                r.inventory,
                -u,
                e,
                n.fxRate,
                !1
              )),
              (r.inventory = new d()),
              o(l - u) > t.minimumPosition)
            ) {
              let t = u + l,
                a = t * e;
              r.inventory.add(new f(a, t, e, n.fxRate));
            }
          } else {
            r.realizedProfitLoss = new a.ProfitLoss(
              r.inventory,
              l,
              n.amount / l,
              n.fxRate,
              !1
            );
            const e = r.inventory.initialPrice,
              t =
                null !== r.inventory.initialFxRate
                  ? r.inventory.initialFxRate
                  : 0;
            r.inventory = new d();
            let i = u + l,
              o = i * e;
            r.inventory.add(new f(o, i, e, t));
          }
        return r;
      }),
      Sm
    );
  }
  Cv.MockValuations = Nv;
  var Ov = {},
    Fv = { exports: {} };
  !(function (e, t) {
    var n, r;
    e.exports =
      ((n = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }),
      (r = {}),
      function (e, t, a) {
        var i,
          o = function (e, t, n) {
            void 0 === n && (n = {});
            var a = new Date(e);
            return (function (e, t) {
              void 0 === t && (t = {});
              var n = t.timeZoneName || "short",
                a = e + "|" + n,
                i = r[a];
              return (
                i ||
                  ((i = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: e,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: n,
                  })),
                  (r[a] = i)),
                i
              );
            })(t, n).formatToParts(a);
          },
          u = function (e, t) {
            for (var r = o(e, t), i = [], u = 0; u < r.length; u += 1) {
              var l = r[u],
                s = l.type,
                c = l.value,
                f = n[s];
              f >= 0 && (i[f] = parseInt(c, 10));
            }
            var d = i[3],
              h = 24 === d ? 0 : d,
              p =
                i[0] +
                "-" +
                i[1] +
                "-" +
                i[2] +
                " " +
                h +
                ":" +
                i[4] +
                ":" +
                i[5] +
                ":000",
              m = +e;
            return (a.utc(p).valueOf() - (m -= m % 1e3)) / 6e4;
          },
          l = t.prototype;
        (l.tz = function (e, t) {
          void 0 === e && (e = i);
          var n = this.utcOffset(),
            r = this.toDate(),
            o = r.toLocaleString("en-US", { timeZone: e }),
            u = Math.round((r - new Date(o)) / 1e3 / 60),
            l = a(o)
              .$set("millisecond", this.$ms)
              .utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - u, !0);
          if (t) {
            var s = l.utcOffset();
            l = l.add(n - s, "minute");
          }
          return (l.$x.$timezone = e), l;
        }),
          (l.offsetName = function (e) {
            var t = this.$x.$timezone || a.tz.guess(),
              n = o(this.valueOf(), t, { timeZoneName: e }).find(function (e) {
                return "timezonename" === e.type.toLowerCase();
              });
            return n && n.value;
          });
        var s = l.startOf;
        (l.startOf = function (e, t) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, e, t);
          var n = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
          return s.call(n, e, t).tz(this.$x.$timezone, !0);
        }),
          (a.tz = function (e, t, n) {
            var r = n && t,
              o = n || t || i,
              l = u(+a(), o);
            if ("string" != typeof e) return a(e).tz(o);
            var s = (function (e, t, n) {
                var r = e - 60 * t * 1e3,
                  a = u(r, n);
                if (t === a) return [r, t];
                var i = u((r -= 60 * (a - t) * 1e3), n);
                return a === i
                  ? [r, a]
                  : [e - 60 * Math.min(a, i) * 1e3, Math.max(a, i)];
              })(a.utc(e, r).valueOf(), l, o),
              c = s[0],
              f = s[1],
              d = a(c).utcOffset(f);
            return (d.$x.$timezone = o), d;
          }),
          (a.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          }),
          (a.tz.setDefault = function (e) {
            i = e;
          });
      });
  })(Fv);
  var Dv,
    Lv = Fv.exports,
    Bv = {};
  Object.defineProperty(Bv, "__esModule", { value: !0 }),
    (Bv.ProfitLoss = void 0);
  class jv {
    constructor(e = null, t = 0, n = 0, r = 0, a = !1) {
      if (((this.quantity = t), null === e))
        return (this.fromPrice = 0), (this.fromFx = 0), void (this.total = 0);
      if (0 === t)
        return (
          (this.fromPrice = a ? 0 : e.initialCost),
          (this.fromFx =
            null !== e.initialFxRate ? e.sumAmount * (r - e.initialFxRate) : 0),
          void (this.total = this.fromPrice + this.fromFx)
        );
      const i = null !== e.initialFxRate ? e.initialFxRate : r;
      (this.fromPrice = -t * (n - e.initialPrice) * i),
        (this.fromFx = -t * (r - i) * e.initialPrice),
        (this.total = -t * (n * r - e.initialPrice * i));
    }
    get fromPriceFx() {
      return this.fromFxTotal - this.fromFx;
    }
    get fromFxTotal() {
      return this.total - this.fromPrice;
    }
    static clone(e = null) {
      const t = new jv();
      return e
        ? ((t.quantity = e.quantity),
          (t.fromPrice = e.fromPrice),
          (t.fromFx = e.fromFx),
          (t.total = e.total),
          t)
        : t;
    }
    add(e = null) {
      const t = jv.clone(this);
      return e
        ? ((t.quantity = e.quantity),
          (t.fromPrice += e.fromPrice),
          (t.fromFx += e.fromFx),
          (t.total += e.total),
          t)
        : t;
    }
    subtract(e = null) {
      const t = jv.clone(this);
      return e
        ? ((t.quantity = e.quantity),
          (t.fromPrice -= e.fromPrice),
          (t.fromFx -= e.fromFx),
          (t.total -= e.total),
          t)
        : t;
    }
    negate() {
      let e = new jv();
      return (e = e.subtract(this)), e;
    }
  }
  Bv.ProfitLoss = jv;
  var zv,
    Uv,
    Gv = {};
  function Vv() {
    return (
      Uv ||
        ((Uv = 1),
        (function (e) {
          var t =
              (n && n.__createBinding) ||
              (Object.create
                ? function (e, t, n, r) {
                    void 0 === r && (r = n);
                    var a = Object.getOwnPropertyDescriptor(t, n);
                    (a &&
                      !("get" in a
                        ? !t.__esModule
                        : a.writable || a.configurable)) ||
                      (a = {
                        enumerable: !0,
                        get: function () {
                          return t[n];
                        },
                      }),
                      Object.defineProperty(e, r, a);
                  }
                : function (e, t, n, r) {
                    void 0 === r && (r = n), (e[r] = t[n]);
                  }),
            r =
              (n && n.__exportStar) ||
              function (e, n) {
                for (var r in e)
                  "default" === r ||
                    Object.prototype.hasOwnProperty.call(n, r) ||
                    t(n, e, r);
              };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            r(Rv(), e),
            r(
              (function () {
                if (Dv) return Ov;
                Dv = 1;
                var e =
                  (n && n.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(Ov, "__esModule", { value: !0 }),
                  (Ov.createTestDatabase =
                    Ov.createStockTrade =
                    Ov.intradayPrice =
                    Ov.toTimeString =
                    Ov.RandomPosition =
                    Ov.createValution =
                      void 0);
                const t = Kh,
                  r = e(ep),
                  a = e(np),
                  i = e(Lv),
                  o = Rv(),
                  u = kv,
                  l = Yp(),
                  s = Hp(),
                  c = yp(),
                  f = wm;
                r.default.extend(a.default), r.default.extend(i.default);
                const { timestampToString: d } = c.DateHelper;
                function h(e, t, n, r, a) {
                  const i = {
                    __typename: "ValuationRecord",
                    prices: [
                      {
                        __typename: "ValuationPrice",
                        type: u.PriceType.Price,
                        value: r,
                        currency: n,
                      },
                    ],
                  };
                  return {
                    __typename: "Valuation",
                    _id: a.randomObjectId(),
                    instrumentId: e,
                    date: t,
                    records: [i],
                  };
                }
                Ov.createValution = h;
                const {
                  max: p,
                  min: m,
                  sin: g,
                  PI: v,
                  floor: y,
                  sqrt: b,
                } = Math;
                class _ {
                  constructor(e, t) {
                    (this.rng = new s.RandomNumberGenerator(t)),
                      (this.phase = this.rng.rand()),
                      (this.current = 0),
                      (this.size = e);
                  }
                  next(e) {
                    const t = this.current,
                      n = this.target(e);
                    let r =
                      p(m(n - t, 0.04), -0.04) + 0.02 * this.rng.rand() - 0.01;
                    return (
                      0 === n &&
                        (r = 0 === this.current ? 0 : p(r, -this.current)),
                      (this.current += r),
                      this.size * r
                    );
                  }
                  target(e) {
                    return p((0.5 + g(4 * v * (e + this.phase))) / 1.5, 0);
                  }
                }
                function S(e, t, n) {
                  let r = t + (n - t) * e;
                  const a = y(r);
                  r = 60 * (r - a);
                  const i = y(r);
                  r = 60 * (r - i);
                  const o = y(r);
                  r = 1e3 * (r - o);
                  const u = Math.floor(r),
                    l = (e, t) => e.toFixed().padStart(t, "0");
                  return `${l(a, 2)}:${l(i, 2)}:${l(o, 2)}.${l(u, 3)}`;
                }
                function w(e, t, n, r, a) {
                  const i = new s.RandomNumberGenerator(a),
                    o = r / b(252);
                  let u = e * (1 - n) + t * n;
                  return (
                    (u += e * o * (2 * i.rand() - 1) * g(n * v)),
                    (u += e * o * (1 * i.rand() - 0.5) * g(2 * n * v)),
                    (u += e * o * (0.5 * i.rand() - 0.25) * g(3 * n * v)),
                    u
                  );
                }
                function T(e, t, n, r, a, i, o, l, s, c, d, h) {
                  return {
                    __typename: "TransactionItem",
                    _id: h,
                    transactionId: l ? l._id : null,
                    clientId: l ? l.clientId : null,
                    transactionStatus: l ? l.status : null,
                    transactionTradeDate: l ? l.tradeDate : null,
                    transactionType: l ? l.type : null,
                    portfolioInstrumentId: f.emptyObjectId,
                    performanceType: u.TransactionItemPerformanceType.Normal,
                    type: e,
                    currency: t,
                    amount: n,
                    quantity: r,
                    price: a,
                    instrumentId: i,
                    valueDate: o,
                    transaction: l,
                    fxRate: s,
                    custodyAccountId: c,
                    accountId: d,
                  };
                }
                function k(e, t, n, r, a, i, l, s, c) {
                  const f = (0, o.addDays)(n, 3),
                    d = i * l + s,
                    h = T(
                      u.TransactionItemType.Security,
                      a,
                      i * l,
                      i,
                      l,
                      e,
                      f,
                      null,
                      1,
                      null,
                      null,
                      c.randomObjectId()
                    ),
                    p = T(
                      u.TransactionItemType.Commission,
                      a,
                      s,
                      null,
                      null,
                      e,
                      f,
                      null,
                      1,
                      null,
                      null,
                      c.randomObjectId()
                    ),
                    m = T(
                      u.TransactionItemType.SettlementAmount,
                      a,
                      -d,
                      null,
                      null,
                      t,
                      f,
                      null,
                      1,
                      null,
                      null,
                      c.randomObjectId()
                    ),
                    g = {
                      _id: c.randomObjectId(),
                      type: u.TransactionType.StockTrade,
                      tradeDate: n,
                      tradeTimestamp: r,
                      items: [h, p, m].filter((e) => 0 !== e.amount),
                    };
                  return g.items.forEach((e) => (e.transaction = g)), g;
                }
                return (
                  (Ov.RandomPosition = _),
                  (Ov.toTimeString = S),
                  (Ov.intradayPrice = w),
                  (Ov.createStockTrade = k),
                  (Ov.createTestDatabase = function ({
                    startDate: e,
                    endDate: n,
                    baseCurrency: a,
                    currencies: i,
                    tradeIntensity: u,
                    numberOfStocks: p,
                    seed: m,
                  }) {
                    const g = new s.RandomNumberGenerator(m),
                      v = [],
                      y = [],
                      b = g
                        .randomLongNames(p, 3, 4)
                        .map((e) => ({
                          _id: g.randomObjectId(),
                          name: s.RandomNumberGenerator.longNameToName(e),
                          longName: e,
                          currency: g.randomItem(i),
                        })),
                      T = Object.keys((0, t.groupBy)(b, (e) => e.currency)).map(
                        (e) => ({
                          _id: g.randomObjectId(),
                          name: `BANKACCOUNT ${e}`,
                          longName: `Bank Account ${e}`,
                          currency: e,
                        })
                      ),
                      C = (0, t.keyBy)(T, (e) => e.currency),
                      E = {
                        __typename: "Party",
                        _id: g.randomObjectId(),
                        instruments: T,
                        fundInfo: null,
                        name: null,
                      },
                      x = Object.keys(C).map((e) =>
                        e === a
                          ? null
                          : {
                              _id: g.randomObjectId(),
                              name: e + a,
                              longName: e + a,
                              currency: e,
                            }
                      ),
                      P = [...b, ...x.filter((e) => null !== e)],
                      A = b.map(() =>
                        g.randomTimeSeries(
                          new Date(e),
                          new Date(n),
                          s.RandomTimeSeriesPriceType.Stock
                        )
                      ),
                      M = Object.keys(C).map((t) =>
                        t === a
                          ? null
                          : g.randomTimeSeries(
                              new Date(e),
                              new Date(n),
                              s.RandomTimeSeriesPriceType.Fx
                            )
                      ),
                      N = new c.MondayToFridayCalendar();
                    for (let t = 0; t < b.length; t++) {
                      let a = A[t],
                        i = b[t],
                        s =
                          M[Object.keys(C).findIndex((e) => e === i.currency)],
                        p = null === s ? 1 : s.startValue,
                        m = e,
                        T = 0,
                        E = 0,
                        x = a.volatility(),
                        P = new _(1e6 / p / a.startValue, i.name);
                      for (;;) {
                        for (T += g.randX() / u; T > 1; ) {
                          for (m = (0, o.addDays)(m, 1); !N.isBusinessDay(m); )
                            m = (0, o.addDays)(m, 1);
                          (T -= 1), E++;
                        }
                        if (m > n) break;
                        let e = r.default
                            .tz(m + " " + S(T, 9, 18), f.tradeTimeZone)
                            .toDate(),
                          t = a.indexOf(new Date(m)),
                          s = a.__values[t],
                          d = w(
                            s,
                            t + 1 < a.length ? a.__values[t + 1] : s,
                            T,
                            x,
                            i.name + "-" + E
                          ),
                          h = new Date(m),
                          p = new Date(h.getUTCFullYear(), 0, 0),
                          y = (h.getTime() - p.getTime()) / c.msPerDay / 365,
                          b = P.next(y);
                        if (0 !== b) {
                          let t = k(
                            i._id,
                            C[i.currency]._id,
                            ((I = e.toISOString()),
                            r.default
                              .tz(I, f.tradeTimeZone)
                              .format("YYYY-MM-DD")),
                            e,
                            i.currency,
                            (0, l.round)(b, 0),
                            (0, l.round)(d, 2),
                            g.rand() < 0.1 ? 0 : 10 * (1 + g.randomInt(5)),
                            g
                          );
                          v.push(t);
                        }
                      }
                      for (let e = 0; e < a.length; e++) {
                        let t = a.__dates[e],
                          n = a.__values[e + 1 < a.length ? e + 1 : e],
                          r = h(i._id, d(t), i.currency, (0, l.round)(n, 2), g);
                        y.push(r);
                      }
                    }
                    var I;
                    for (let t = 0; t < M.length; t++) {
                      let e = M[t],
                        n = x[t];
                      if (null !== e)
                        for (let t = 0; t < e.length; t++) {
                          let r = e.__dates[t],
                            a = e.__values[t + 1 < e.length ? t + 1 : t],
                            i = h(
                              n._id,
                              d(r),
                              n.currency,
                              (0, l.round)(a, 2),
                              g
                            );
                          y.push(i);
                        }
                    }
                    return {
                      party: E,
                      instruments: P,
                      transactions: v,
                      valuations: y,
                    };
                  }),
                  Ov
                );
              })(),
              e
            ),
            r(wm, e),
            r(Cv, e),
            r(Bv, e),
            r(
              (function () {
                if (zv) return Gv;
                (zv = 1),
                  Object.defineProperty(Gv, "__esModule", { value: !0 }),
                  (Gv.PortfolioLedgerPosition = void 0);
                const e = Vv(),
                  t = wm,
                  n = kv,
                  { abs: r } = Math;
                return (
                  (Gv.PortfolioLedgerPosition = class a {
                    constructor(t = null, n, r, a, i) {
                      (this.instrumentId = t),
                        (this.valuations = n),
                        (this.inventory = new e.Inventory()),
                        (this.incomeInventory = new e.Inventory()),
                        (this.realizedProfitLoss = new e.ProfitLoss()),
                        (this.income = null),
                        (this.startUnrealizedProfitLoss = null),
                        (this.endUnrealizedProfitLoss = null),
                        (this.totalProfitLoss = null),
                        (this.startDate = r),
                        (this.endDate = a),
                        (this.accountingCurrency = i),
                        (this.currency = null),
                        (this.cashAccount = !1),
                        (this.openingBalanceAmount = 0),
                        (this.startUpl = null),
                        (this.endUpl = null),
                        (this.startAccrued = 0),
                        (this.endAccrued = 0),
                        (this.startMarketValue = 0),
                        (this.endMarketValue = 0),
                        (this.cashFlow = 0),
                        (this.calcPoints = []),
                        (this.lastTradeTimestamp = null);
                    }
                    static calcPosition(t, n, r, i, o, u) {
                      [t, n, r, i, o, u].forEach((e) => {
                        if (null == e)
                          throw new Error(
                            "Calc position missing required fields"
                          );
                      });
                      const l = new a(t, r, i, o, u);
                      (l.currency = a.getBaseCurrency(n, l.accountingCurrency)),
                        (null !== l.currency && void 0 !== l.currency) ||
                          console.log("meow"),
                        (l.cashAccount = a.isCashAccount(n)),
                        (l.cashFlow = 0);
                      for (let a = 0; a < n.length; a++) {
                        let t = n[a];
                        null === l.startUnrealizedProfitLoss &&
                          t.transaction.tradeDate > i &&
                          l.setUnrealizedProfitLoss(i, !0);
                        let r = l.getTransactionItemValues(t),
                          o = (0, e.calcRealizedType)(t, r.quantity, i),
                          u = l.calcTransactionItem(t, r, o);
                        (l.cashFlow += u.cashFlow),
                          (l.inventory = u.inventory),
                          l.calcPoints.push(u),
                          (l.lastTradeTimestamp = t.transaction.tradeTimestamp);
                      }
                      null === l.startUnrealizedProfitLoss &&
                        l.setUnrealizedProfitLoss(i, !0);
                      const s = l.setUnrealizedProfitLoss(o, !1);
                      return (
                        (l.income = a.calcUnrealizedProfitLoss(
                          l.incomeInventory,
                          s.valuation.price,
                          s.valuation.fxRate,
                          !1
                        )),
                        (l.totalProfitLoss = e.ProfitLoss.clone(
                          l.realizedProfitLoss
                        )),
                        (l.totalProfitLoss = l.totalProfitLoss.add(
                          l.endUnrealizedProfitLoss
                        )),
                        (l.totalProfitLoss = l.totalProfitLoss.subtract(
                          l.startUnrealizedProfitLoss
                        )),
                        (l.totalProfitLoss = l.totalProfitLoss.subtract(
                          l.income
                        )),
                        l
                      );
                    }
                    addTransactionItem(t) {
                      let n = this.getTransactionItemValues(t),
                        r = (0, e.calcRealizedType)(
                          t,
                          n.quantity,
                          this.startDate
                        ),
                        i = this.calcTransactionItem(t, n, r);
                      (this.cashFlow += i.cashFlow),
                        (this.inventory = i.inventory),
                        this.calcPoints.push(i),
                        (this.lastTradeTimestamp =
                          t.transaction.tradeTimestamp),
                        (i = this.setUnrealizedProfitLoss(this.endDate, !1)),
                        (this.income = a.calcUnrealizedProfitLoss(
                          this.incomeInventory,
                          i.valuation.price,
                          i.valuation.fxRate,
                          !1
                        )),
                        (this.totalProfitLoss = e.ProfitLoss.clone(
                          this.realizedProfitLoss
                        )),
                        (this.totalProfitLoss = this.totalProfitLoss.add(
                          this.endUnrealizedProfitLoss
                        )),
                        (this.totalProfitLoss = this.totalProfitLoss.subtract(
                          this.startUnrealizedProfitLoss
                        )),
                        (this.totalProfitLoss = this.totalProfitLoss.subtract(
                          this.income
                        ));
                    }
                    static getBaseCurrency(t, n) {
                      for (let r = 0; r < t.length; r++) {
                        let n = t[r];
                        if ((0, e.isPositionBuildingType)(n.type))
                          return n.currency;
                      }
                      return n;
                    }
                    static isCashAccount(t) {
                      return t.every((t) => (0, e.isCashAccountType)(t.type));
                    }
                    getTransactionItemValues(t) {
                      const n = new e.InventoryItem(t.amount, 0, 0, 1);
                      if (
                        (this.cashAccount
                          ? ((n.quantity = t.amount), (n.price = 1))
                          : (null !== t.quantity && (n.quantity = t.quantity),
                            null !== t.price && (n.price = t.price)),
                        t.currency !== this.accountingCurrency)
                      )
                        if (t.fxRate) n.fxRate = t.fxRate;
                        else {
                          const e = t.currency + this.accountingCurrency,
                            r = this.valuations.getFxValue(
                              e,
                              t.transaction.tradeDate
                            );
                          if (!r)
                            throw new Error(
                              `FxRate needed for ${e} at ${t.transaction.tradeDate}`
                            );
                          n.fxRate = r;
                        }
                      return n;
                    }
                    calcTransactionItem(n, r, a) {
                      let i = 0,
                        o = e.InventoryItem.clone(r);
                      (a !== t.RealizedType.IncomeCost &&
                        a !== t.RealizedType.RealizedProfitLoss &&
                        a !== t.RealizedType.SettlementAmount) ||
                        (i = o.amount * o.fxRate);
                      let u = null;
                      (a !== t.RealizedType.IncomeCost &&
                        a !== t.RealizedType.SettlementAmount) ||
                        (this.incomeInventory.add(o),
                        a === t.RealizedType.IncomeCost && (u = o)),
                        null === n ||
                          (0, e.isRealizationType)(n.type) ||
                          (o = new e.InventoryItem());
                      const l = (0, e.calcRealization)(this.inventory, o);
                      a === t.RealizedType.RealizedProfitLoss
                        ? (this.realizedProfitLoss =
                            this.realizedProfitLoss.add(l.realizedProfitLoss))
                        : (l.realizedProfitLoss = new e.ProfitLoss());
                      let s = !1;
                      return (
                        (null === n ||
                          n.transaction.tradeDate <= this.startDate) &&
                          (s = !0),
                        {
                          realizedProfitLoss: l.realizedProfitLoss,
                          inventory: l.inventory,
                          income: u,
                          inventoryChange: o,
                          ignoreLedger: s,
                          transactionItem: n,
                          realizedType: a,
                          date: n ? n.transaction.tradeDate : e.minDate,
                          valuation: null,
                          cashFlow: i,
                        }
                      );
                    }
                    static calcUnrealizedProfitLoss(t, n, r, a) {
                      if (null === t) return new e.ProfitLoss();
                      const i = new e.ProfitLoss(
                        t,
                        null === t ? 0 : -t.position,
                        n,
                        r,
                        a
                      );
                      return (i.quantity *= -1), i;
                    }
                    static calcAccrued(e, t, n) {
                      return (e ? e.position : 0) * t * n;
                    }
                    setUnrealizedProfitLoss(e, n) {
                      const r = this.calcTransactionItem(
                        null,
                        null,
                        t.RealizedType.Valuation
                      );
                      this.calcPoints.push(r), this.getValuation(r, e, n);
                      const i = a.calcUnrealizedProfitLoss(
                          this.inventory,
                          r.valuation.price,
                          r.valuation.fxRate,
                          !1
                        ),
                        o = a.calcUnrealizedProfitLoss(
                          this.inventory,
                          r.valuation.price,
                          r.valuation.fxRate,
                          !0
                        ),
                        u = a.calcAccrued(
                          this.inventory,
                          r.valuation.accruedInterest,
                          r.valuation.fxRate
                        );
                      return (
                        n
                          ? ((this.startUpl = o),
                            (this.startAccrued = u),
                            (this.startUnrealizedProfitLoss = i),
                            (this.openingBalanceAmount =
                              r.inventory.initialCost))
                          : ((this.endUpl = o),
                            (this.endAccrued = u),
                            (this.endUnrealizedProfitLoss = i)),
                        r
                      );
                    }
                    getValuation(t, a, i) {
                      let o = 1,
                        u = this.cashAccount ? 1 : 0,
                        l = 0;
                      const s = t.inventory.position;
                      if (
                        this.currency &&
                        this.currency !== this.accountingCurrency
                      ) {
                        const e = this.currency + this.accountingCurrency;
                        if (
                          ((o = this.valuations.getFxValue(e, a)), null === o)
                        )
                          throw new Error(`FX rate needed for ${e}, date=${a}`);
                      }
                      if ((!i || (i && r(s) > 1e-7)) && !this.cashAccount) {
                        const t = this.valuations.getPrice(
                          this.instrumentId,
                          a,
                          this.currency
                        );
                        (u = e.Valuations.priceByTypes(t, [
                          n.PriceType.Price,
                          n.PriceType.CleanPrice,
                        ])),
                          (l = e.Valuations.priceByTypes(t, [
                            n.PriceType.AccruedInterest,
                          ]));
                      }
                      (t.date = a),
                        (t.valuation = {
                          price: u,
                          fxRate: o,
                          accruedInterest: l,
                        });
                      const c = s * (u + l) * o;
                      i
                        ? (this.startMarketValue = c)
                        : (this.endMarketValue = c);
                    }
                  }),
                  Gv
                );
              })(),
              e
            );
        })(_m)),
      _m
    );
  }
  var $v = {},
    Hv = {};
  !(function (e) {
    var t =
      (n && n.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.matchCoacsTransactionsFnc = e.matchToleranceValue = void 0);
    const r = Kh,
      a = t(ep),
      i = t(np),
      o = t(Lv);
    var u, l;
    a.default.extend(i.default),
      a.default.extend(o.default),
      ((l = u || (u = {})).Mismatch = "Mismatch"),
      (l.Matched = "Matched"),
      (l.Preliminary = "Preliminary"),
      (l.Confirmed = "Confirmed"),
      (e.matchToleranceValue = (e, t) =>
        e === t || Math.abs((0, r.round)(e - t, 2)) <= 0),
      (e.matchCoacsTransactionsFnc = (t, n, i) => {
        let o = (0, r.cloneDeep)(i),
          l = (0, r.cloneDeep)(n),
          s = (0, r.cloneDeep)(t),
          c = [];
        for (let r = 0; r < s.length; r++) {
          let t = s[r];
          var f = "Mismatch";
          for (let n = 0; n < o.length; n++) {
            let r = o[n];
            if (
              ((r.correspondingTransactionId &&
                r.correspondingTransactionId.toString() === t._id.toString() &&
                t.brokerTradeId &&
                r.externalId.toString() === t.brokerTradeId.toString()) ||
                (r.correspondingTransactionId &&
                  r.correspondingTransaction &&
                  r.correspondingTransactionId.toString() !==
                    t._id.toString() &&
                  "Deleted" === r.correspondingTransaction.status) ||
                (!r.correspondingTransactionId &&
                  !r.correspondingTransaction &&
                  !t.brokerTradeId)) &&
              ((r.instrument &&
                t.instrumentId.toString() === r.instrument._id.toString() &&
                t.clientId.toString() === r.fundId.toString() &&
                r.exDate &&
                a.default
                  .tz(t.tradeTimestamp, "Europe/Stockholm")
                  .format("YYYY-MM-DD") === r.exDate) ||
                (r.instrument &&
                  t.instrumentId.toString() === r.instrument._id.toString() &&
                  t.clientId.toString() === r.fundId.toString() &&
                  "INTR" === r.caev))
            ) {
              let n;
              (f = "Confirmed"),
                t.currency !== r.currency &&
                  ((n = n
                    ? n + ", currency does not match"
                    : "Currency does not match"),
                  (f = "Matched")),
                t.valueDate !== r.paymentDate &&
                  ((n = n
                    ? n + ", value date does not match"
                    : "Value date does not match"),
                  (f = "Matched")),
                ("DRIP" !== r.caev && "DVOP" !== r.caev) ||
                r.amount ||
                r.foreignTax
                  ? "DVCA" === r.caev ||
                    "INTR" === r.caev ||
                    "SHPR" === r.caev ||
                    "CAPG" === r.caev ||
                    "CAPD" === r.caev ||
                    "DRIP" === r.caev ||
                    "DVOP" === r.caev
                    ? ((0, e.matchToleranceValue)(t.amount, r.amount) ||
                        ((n = n
                          ? n + ", amount does not match"
                          : "Amount does not match"),
                        (f = "Matched")),
                      (t.foreignTax ||
                        r.foreignTax ||
                        (t.foreignTax && r.foreignTax)) &&
                        !(0, e.matchToleranceValue)(
                          -t.foreignTax,
                          r.foreignTax
                        ) &&
                        ((n = n
                          ? n + ", foreignTax does not match"
                          : "ForeignTax does not match"),
                        (f = "Matched")))
                    : (f = "Mismatch")
                  : (f = "Preliminary");
              let a = {},
                i = r.correspondingTransactionId
                  ? r.correspondingTransactionId.toString()
                  : null;
              ("566" === r.parsed.block2.msgType ||
                (t.error && t.error !== n) ||
                (r.error && r.error !== n) ||
                t.brokerTradeId !== r.externalId ||
                i !== t._id) &&
                ("Confirmed" === f
                  ? ((a.transactionId = t._id),
                    (a.swiftTransactionId = r._id),
                    (a.swiftExternalId = r.externalId),
                    (a.matchingStatus = u.Confirmed),
                    c.push(a),
                    (r.correspondingTransactionId = t._id))
                  : "Preliminary" === f
                  ? ((a.transactionId = t._id),
                    (a.swiftTransactionId = r._id),
                    (a.swiftExternalId = r.externalId),
                    (a.matchingStatus = u.Preliminary),
                    c.push(a),
                    (r.correspondingTransactionId = t._id))
                  : ((a.transactionError = n),
                    (a.swiftTransactionError = n),
                    (a.transactionId = t._id),
                    (a.swiftTransactionId = r._id),
                    (a.swiftExternalId = r.externalId),
                    (a.matchingStatus =
                      "Mismatch" === f ? u.Mismatch : u.Matched),
                    c.push(a),
                    (r.correspondingTransactionId = t._id)));
            }
          }
          if (
            "Mismatch" === f &&
            "No matching corporate action transaction found." !== t.error
          ) {
            let e = {
              transactionError:
                "No matching corporate action transaction found.",
            };
            (e.transactionId = t._id),
              (e.matchingStatus = u.Mismatch),
              c.push(e);
          }
        }
        let d = o.concat(l);
        for (let e = 0; e < d.length; e++) {
          let t = d[e];
          if (
            !t.correspondingTransactionId &&
            "No matching transaction found." !== t.error
          ) {
            let e = { swiftTransactionError: "No matching transaction found." };
            (e.swiftTransactionId = t._id),
              (e.matchingStatus = u.Mismatch),
              c.push(e);
          }
        }
        return c;
      });
  })(Hv),
    (function (e) {
      var t =
          (n && n.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var a = Object.getOwnPropertyDescriptor(t, n);
                (a &&
                  !("get" in a
                    ? !t.__esModule
                    : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, a);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        r =
          (n && n.__exportStar) ||
          function (e, n) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(n, r) ||
                t(n, e, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), r(Hv, e);
    })($v);
  var Yv = {},
    Wv = {},
    qv =
      (n && n.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(Wv, "__esModule", { value: !0 }),
    (Wv.matchTransactionsFnc = void 0);
  const Kv = Kh,
    Qv = qv(ep),
    Jv = qv(np),
    Xv = qv(Lv),
    Zv = kv;
  Qv.default.extend(Jv.default), Qv.default.extend(Xv.default);
  const ey = (e, t, n) => e === t || Math.abs((0, Kv.round)(e - t, 2)) <= n,
    ty = (e, t, n, r) => {
      const a = [];
      let i = "";
      return (
        n &&
          (a.push({
            collection: Zv.CollectionNameEnum.Transaction,
            documentId: n,
          }),
          (i =
            i +
            "[Transaction](https://portal.qipple.com/reconcile/brokertransactions/minitransaction/" +
            n +
            "). ")),
        r &&
          (a.push({
            collection: Zv.CollectionNameEnum.BrokerTransaction,
            documentId: r,
          }),
          (i =
            i +
            "[Broker transaction](https://portal.qipple.com/reconcile/brokertransactions/brokertransaction/" +
            r +
            "). ")),
        {
          title: e,
          clientId: t,
          type: Zv.TicketTypeEnum.MatchBrokerTransactionError,
          references: a,
          state: {
            status: Zv.TicketStatusEnum.Open,
            assigneeIds: [
              "57f765fac4b0f3e1f0c0971a",
              "60f6cdb3b9bfeb0012c74344",
              "59e46073cba1d51f8077cefb",
            ],
            comment: i,
          },
        }
      );
    };
  (Wv.matchTransactionsFnc = (e, t) => {
    const n = (0, Kv.cloneDeep)(e),
      r = (0, Kv.cloneDeep)(t),
      a = [],
      i = [],
      o = [],
      u = new Date().toISOString().slice(0, 10);
    for (let l = 0; l < r.length; l++) {
      const e = r[l];
      let t = Zv.MatchingStatus.Mismatch;
      if (e.source !== Zv.SourceType.Coacs) {
        for (let r = 0; r < n.length; r++) {
          const u = n[r],
            l =
              u.type === Zv.BrokerTransactionType.Sell
                ? -Math.abs(u.quantity)
                : Math.abs(u.quantity),
            s =
              u.type === Zv.BrokerTransactionType.Sell
                ? Math.abs(u.settlementAmount)
                : -Math.abs(u.settlementAmount);
          if (
            e.instrumentId.toString() === u.instrument._id.toString() &&
            e.clientId.toString() === u.client._id.toString() &&
            e.brokerId.toString() === u.broker._id.toString() &&
            e.quantity === l
          ) {
            let n;
            if (
              ((t = Zv.MatchingStatus.Confirmed),
              e.currency !== u.currency &&
                ((n = n
                  ? n + ", currency does not match"
                  : "Currency does not match"),
                (t = Zv.MatchingStatus.Matched)),
              Qv.default
                .tz(e.tradeTimestamp, "Europe/Stockholm")
                .format("YYYY-MM-DD") !== u.tradeDate &&
                ((n = n
                  ? n + ", trade date does not match"
                  : "Trade date does not match"),
                (t = Zv.MatchingStatus.Matched)),
              e.valueDate !== u.valueDate &&
                ((n = n
                  ? n + ", value date does not match"
                  : "Value date does not match"),
                (t = Zv.MatchingStatus.Matched)),
              (!e.settlementAmount ||
                !u.settlementAmount ||
                !ey(Math.abs(e.settlementAmount), Math.abs(s), 0)) &&
                (0 !== Math.abs(e.price - u.price) &&
                  ((n = n
                    ? n + ", price does not match"
                    : "Price does not match"),
                  (t = Zv.MatchingStatus.Matched),
                  (t = Zv.MatchingStatus.Matched)),
                (e.commission ||
                  u.commission ||
                  (e.commission && u.commission)) &&
                  !ey(e.commission, -u.commission, 0) &&
                  ((n = n
                    ? n + ", commission does not match"
                    : "Commission does not match"),
                  (t = Zv.MatchingStatus.Matched)),
                (e.stampDuty || u.stampDuty || (e.stampDuty && u.stampDuty)) &&
                  !ey(e.stampDuty, -u.stampDuty, 0) &&
                  ((n = n
                    ? n + ", stampDuty does not match"
                    : "StampDuty does not match"),
                  (t = Zv.MatchingStatus.Matched)),
                !n &&
                  e.settlementAmount &&
                  u.settlementAmount &&
                  !ey(Math.abs(e.settlementAmount), Math.abs(s), 0)))
            ) {
              const t = (0, Kv.round)(s - e.settlementAmount, 2);
              i.push({ _id: e._id, rounding: t });
            }
            const r = {};
            if (t === Zv.MatchingStatus.Confirmed)
              (r.transactionId = e._id),
                (r.brokerTransactionId = u._id),
                (r.brokerExternalId = u.externalId),
                (r.matchingStatus = t),
                a.push(r),
                (u.correspondingTransactionId = e._id);
            else {
              const i = u.correspondingTransactionId
                ? u.correspondingTransactionId.toString()
                : null;
              (e.error === n &&
                u.error === n &&
                e.brokerTradeId === u.externalId &&
                i === e._id) ||
                ((r.transactionError = n),
                (r.brokerTransactionError = n),
                (r.transactionId = e._id),
                (r.brokerTransactionId = u._id),
                (r.brokerExternalId = u.externalId),
                (r.matchingStatus = t),
                a.push(r)),
                (u.correspondingTransactionId = e._id);
            }
            n &&
              t === Zv.MatchingStatus.Matched &&
              u.error !== n &&
              o.push(
                ty(
                  n,
                  u.clientId ? u.clientId : u.client ? u.client._id : null,
                  u.correspondingTransactionId
                    ? u.correspondingTransactionId
                    : null,
                  u._id
                )
              );
          }
        }
        if (
          t === Zv.MatchingStatus.Mismatch &&
          "No matching broker transaction found." !== e.error
        ) {
          const n = "No matching broker transaction found.",
            r = {};
          (r.transactionError = n),
            (r.transactionId = e._id),
            (r.matchingStatus = t),
            a.push(r),
            u >= e.valueDate &&
              o.push(
                ty(
                  n,
                  e.clientId ? e.clientId : e.client ? e.client._id : null,
                  e._id
                )
              );
        }
      }
    }
    for (let l = 0; l < n.length; l++) {
      const e = n[l];
      if (
        !e.correspondingTransactionId &&
        "No matching transaction found." !== e.error
      ) {
        const t = {},
          n = "No matching transaction found.";
        (t.brokerTransactionError = n),
          (t.brokerTransactionId = e._id),
          (t.matchingStatus = Zv.MatchingStatus.Mismatch),
          a.push(t),
          u >= e.valueDate &&
            o.push(
              ty(
                n,
                e.clientId ? e.clientId : e.client ? e.client._id : null,
                null,
                e._id
              )
            );
      }
    }
    return { updateFieldsList: a, roundTransactionsList: i, ticketsList: o };
  }),
    (function (e) {
      var t =
          (n && n.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var a = Object.getOwnPropertyDescriptor(t, n);
                (a &&
                  !("get" in a
                    ? !t.__esModule
                    : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, a);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        r =
          (n && n.__exportStar) ||
          function (e, n) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(n, r) ||
                t(n, e, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), r(Wv, e);
    })(Yv);
  var ny = {};
  function ry(e, t = !1) {
    var n = {
        "5be5593a6f25686fc8c18aab": [
          "AAA",
          "AA+",
          "AA",
          "AA-",
          "A+",
          "A",
          "A-",
          "BBB+",
          "BBB",
          "BBB-",
          "BB+",
          "BB",
          "BB-",
          "B+",
          "B",
          "B-",
          "CCC+",
          "CCC",
          "CCC-",
          "CC",
          "C",
          "RD",
          "SD",
          "D",
        ],
        "5be556da6f2568538064579c": [
          "Aaa",
          "Aa1",
          "Aa2",
          "Aa3",
          "A1",
          "A2",
          "A3",
          "Baa1",
          "Baa2",
          "Baa3",
          "Ba1",
          "Ba2",
          "Ba3",
          "B1",
          "B2",
          "B3",
          "Caa1",
          "Caa2",
          "Caa3",
          "Ca",
          "C",
        ],
        "5be559656f25686fc8c19134": [
          "AAA",
          "AA+",
          "AA",
          "AA-",
          "A+",
          "A",
          "A-",
          "BBB+",
          "BBB",
          "BBB-",
          "BB+",
          "BB",
          "BB-",
          "B+",
          "B",
          "B-",
          "CCC+",
          "CCC",
          "CCC-",
          "CC",
          "C",
          "DDD",
          "DD",
          "D",
        ],
        "5be5a9816f256829b4f3a154": [
          "AAA",
          "AA+",
          "AA",
          "AA-",
          "A+",
          "A",
          "A-",
          "BBB+",
          "BBB",
          "BBB-",
          "BB+",
          "BB",
          "BB-",
          "B+",
          "B",
          "B-",
          "CCC+",
          "CCC",
          "CCC-",
          "CC",
          "C",
          "RD",
          "SD",
          "D",
        ],
        "5bfd0fe9cb675d10145d4caf": [
          "AAA",
          "AA+",
          "AA",
          "AA-",
          "A+",
          "A",
          "A-",
          "BBB+",
          "BBB",
          "BBB-",
          "BB+",
          "BB",
          "BB-",
          "B+",
          "B",
          "B-",
          "CCC+",
          "CCC",
          "CCC-",
          "CC",
          "C",
          "RD",
          "SD",
          "D",
        ],
        "5f68966914270f0012fa301d": [
          "AAA",
          "AA+",
          "AA",
          "AA-",
          "A+",
          "A",
          "A-",
          "BBB+",
          "BBB",
          "BBB-",
          "BB+",
          "BB",
          "BB-",
          "B+",
          "B",
          "B-",
          "CCC+",
          "CCC",
          "CCC-",
          "CC",
          "C",
          "RD",
          "SD",
          "D",
        ],
      },
      r = 999;
    return (
      e.forEach((e) => {
        if ("5bfd0fe9cb675d10145d4caf" !== e.creditRatingAgencyId || !1 !== t) {
          var a = n[e.creditRatingAgencyId].indexOf(e.grade);
          a < r && (r = a);
        }
      }),
      999 !== r
        ? [
            "AAA",
            "AA",
            "AA",
            "AA",
            "A",
            "A",
            "A",
            "BBB",
            "BBB",
            "BBB",
            "BB",
            "BB",
            "BB",
            "B",
            "B",
            "B",
            "CCC",
            "CCC",
            "CCC",
            "CC",
            "C",
            "RD",
            "SD",
            "D",
          ][r]
        : "Not rated"
    );
  }
  Object.defineProperty(ny, "__esModule", { value: !0 }),
    (ny.getRatingInfo = ny.getRating = void 0),
    (ny.getRating = ry),
    (ny.getRatingInfo = function (e, t = !1) {
      var n = [],
        r = "Not rated";
      return (
        e.forEach((e) => {
          (r =
            "Bond" === e.modelType
              ? e.creditRatings && e.creditRatings.length
                ? ry(e.creditRatings, t)
                : e.issuerCreditRatings && e.issuerCreditRatings.length
                ? ry(e.issuerCreditRatings, t)
                : "Not rated"
              : "Not applicable"),
            n.push({
              name: e.name,
              longName: e.longName,
              exposure: e.exposure,
              modelType: e.modelType,
              maturityDate: e.maturityDate,
              rating: r,
              currency: e.currency,
              sustainabilityClass: e.sustainabilityClass,
              issuerName: e.issuerName,
              issuerType: e.issuerType,
              issuerIndustryCode: e.issuerIndustryCode,
            });
        }),
        n
      );
    });
  var ay = {};
  Object.defineProperty(ay, "__esModule", { value: !0 }),
    (ay.mapping = void 0),
    (ay.mapping = {
      Assets: {
        translation: {
          Sv: {
            SwedishMutualFund: "Tillgångar",
            GeneralPortfolio: "Tillgångar",
          },
        },
        sorting: 1,
        A: {
          sorting: 1,
          translation: {
            Sv: {
              SwedishMutualFund:
                "Finansiella Instrument med positivt marknadsvärde",
              GeneralPortfolio:
                "Finansiella Instrument med positivt marknadsvärde",
            },
          },
          A: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Överlåtbara värdepapper",
                GeneralPortfolio: "Överlåtbara värdepapper",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          B: {
            sorting: 2,
            translation: {
              Sv: {
                SwedishMutualFund: "Penningmarknadsinstrument",
                GeneralPortfolio: "Penningmarknadsinstrument",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          C: {
            sorting: 3,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "OTC-derivatinstrument med positivt marknadsvärde",
                GeneralPortfolio:
                  "OTC-derivatinstrument med positivt marknadsvärde",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          D: {
            sorting: 4,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "Övriga derivatinstrument med positivt marknadsvärde",
                GeneralPortfolio:
                  "Övriga derivatinstrument med positivt marknadsvärde",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          E: {
            sorting: 5,
            translation: {
              Sv: {
                SwedishMutualFund: "Fondandelar",
                GeneralPortfolio: "Fondandelar",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        B: {
          sorting: 2,
          translation: {
            Sv: {
              SwedishMutualFund: "Placeringar med positivt marknadsvärde",
              GeneralPortfolio: "Placeringar med positivt marknadsvärde",
            },
          },
          A: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Placering på konto hos kreditinstitut",
                GeneralPortfolio: "Placering på konto hos kreditinstitut",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        C: {
          sorting: 3,
          translation: {
            Sv: { SwedishMutualFund: "C", GeneralPortfolio: "C" },
          },
          A: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Bankmedel och övriga likvida medel",
                GeneralPortfolio: "Bankmedel och övriga likvida medel",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          B: {
            sorting: 2,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "Förutbetalda kostnader och upplupna intäkter",
                GeneralPortfolio:
                  "Förutbetalda kostnader och upplupna intäkter",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          C: {
            sorting: 3,
            translation: {
              Sv: {
                SwedishMutualFund: "Övriga tillgångar",
                GeneralPortfolio: "Övriga tillgångar",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
      },
      Liabilities: {
        sorting: 1,
        translation: {
          Sv: { SwedishMutualFund: "Skulder", GeneralPortfolio: "Skulder" },
        },
        A: {
          sorting: 1,
          translation: {
            Sv: {
              SwedishMutualFund:
                "Finansiella instrument med negativt marknadsvärde",
              GeneralPortfolio:
                "Finansiella instrument med negativt marknadsvärde",
            },
          },
          A: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "OTC-derivat med negativt marknadsvärde",
                GeneralPortfolio: "OTC-derivat med negativt marknadsvärde",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          B: {
            sorting: 2,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "Övriga derivatinstrument med negativt marknadsvärde",
                GeneralPortfolio:
                  "Övriga derivatinstrument med negativt marknadsvärde",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          C: {
            sorting: 3,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "Övriga finansiella instrument med negativt marknadsvärde",
                GeneralPortfolio:
                  "Övriga finansiella instrument med negativt marknadsvärde",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        B: {
          sorting: 2,
          translation: {
            Sv: { SwedishMutualFund: "B", GeneralPortfolio: "B" },
          },
          A: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Skatteskulder",
                GeneralPortfolio: "Skatteskulder",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          B: {
            sorting: 2,
            translation: {
              Sv: {
                SwedishMutualFund:
                  "Upplupna kostnader och förutbetalda intäkter",
                GeneralPortfolio:
                  "Upplupna kostnader och förutbetalda intäkter",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          C: {
            sorting: 3,
            translation: {
              Sv: {
                SwedishMutualFund: "Övriga skulder",
                GeneralPortfolio: "Övriga skulder",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
      },
      Equity: {
        sorting: 2,
        translation: {
          Sv: {
            SwedishMutualFund: "Fondförmögenhet",
            GeneralPortfolio: "Eget kapital",
          },
        },
        ShareCapital: {
          sorting: 1,
          translation: {
            Sv: {
              SwedishMutualFund: "Tecknade andelar",
              GeneralPortfolio: "Aktiekapital",
            },
          },
          ShareCapital: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Tecknade andelar",
                GeneralPortfolio: "Aktiekapital",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        RetainedEarnings: {
          sorting: 2,
          translation: {
            Sv: {
              SwedishMutualFund: "Balanserat resultat",
              GeneralPortfolio: "Balanserat resultat",
            },
          },
          RetainedEarnings: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Balanserat resultat",
                GeneralPortfolio: "Balanserat resultat",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        DividendPaid: {
          sorting: 3,
          translation: {
            Sv: {
              SwedishMutualFund: "Lämnad utdelning",
              GeneralPortfolio: "Lämnad utdelning",
            },
          },
          DividendPaid: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Lämnad utdelning",
                GeneralPortfolio: "Lämnad utdelning",
              },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
        ProfitLossCurrentYear: {
          sorting: 4,
          translation: {
            Sv: {
              SwedishMutualFund: "Årets resultat",
              GeneralPortfolio: "Årets resultat",
            },
          },
          Revenue: {
            sorting: 1,
            translation: {
              Sv: {
                SwedishMutualFund: "Intäkter och värdeförändring",
                GeneralPortfolio: "Intäkter och värdeförändring",
              },
            },
            A: {
              sorting: 1,
              translation: {
                Sv: {
                  SwedishMutualFund:
                    "Värdeförändring på överlåtbara värdepapper",
                  GeneralPortfolio:
                    "Värdeförändring på överlåtbara värdepapper",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            B: {
              sorting: 2,
              translation: {
                Sv: {
                  SwedishMutualFund:
                    "Värdeförändring på penningmarknadsinstrument",
                  GeneralPortfolio:
                    "Värdeförändring på penningmarknadsinstrument",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            C: {
              sorting: 3,
              translation: {
                Sv: {
                  SwedishMutualFund: "Värdeförändring på OTC-derivat",
                  GeneralPortfolio: "Värdeförändring på OTC-derivat",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            D: {
              sorting: 4,
              translation: {
                Sv: {
                  SwedishMutualFund:
                    "Värdeförändring på övriga derivatinstrument",
                  GeneralPortfolio:
                    "Värdeförändring på övriga derivatinstrument",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            E: {
              sorting: 5,
              translation: {
                Sv: {
                  SwedishMutualFund: "Värdeförändring på fondandelar",
                  GeneralPortfolio: "Värdeförändring på fondandelar",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            F: {
              sorting: 6,
              translation: {
                Sv: {
                  SwedishMutualFund: "Ränteintäkter",
                  GeneralPortfolio: "Ränteintäkter",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            G: {
              sorting: 7,
              translation: {
                Sv: {
                  SwedishMutualFund: "Utdelningar",
                  GeneralPortfolio: "Utdelningar",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            H: {
              sorting: 8,
              translation: {
                Sv: {
                  SwedishMutualFund: "Valutakursvinster och -förluster netto",
                  GeneralPortfolio: "Valutakursvinster och -förluster netto",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            I: {
              sorting: 9,
              translation: {
                Sv: {
                  SwedishMutualFund: "Övriga finansiella intäkter",
                  GeneralPortfolio: "Övriga finansiella intäkter",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            J: {
              sorting: 10,
              translation: {
                Sv: {
                  SwedishMutualFund: "Övriga intäkter",
                  GeneralPortfolio: "Övriga intäkter",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          Expenses: {
            sorting: 2,
            translation: {
              Sv: {
                SwedishMutualFund: "Kostnader",
                GeneralPortfolio: "Kostnader",
              },
            },
            ManagementFees: {
              sorting: 1,
              translation: {
                Sv: {
                  SwedishMutualFund: "Förvaltningskostnader",
                  GeneralPortfolio: "Förvaltningskostnader",
                },
              },
              A: {
                sorting: 1,
                translation: {
                  Sv: {
                    SwedishMutualFund: "Ersättning till fondbolaget",
                    GeneralPortfolio: "Ersättning till fondbolaget",
                  },
                },
              },
              B: {
                sorting: 2,
                translation: {
                  Sv: {
                    SwedishMutualFund: "Ersättning till förvaringsinstitutet",
                    GeneralPortfolio: "Ersättning till förvaringsinstitutet",
                  },
                },
              },
              C: {
                sorting: 2,
                translation: {
                  Sv: {
                    SwedishMutualFund: "Ersättning till tillsynsmyndighet",
                    GeneralPortfolio: "Ersättning till tillsynsmyndighet",
                  },
                },
              },
            },
            A: {
              sorting: 2,
              translation: {
                Sv: {
                  SwedishMutualFund: "Ersättning till revisorer",
                  GeneralPortfolio: "Ersättning till revisorer",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            B: {
              sorting: 3,
              translation: {
                Sv: {
                  SwedishMutualFund: "Räntekostnader",
                  GeneralPortfolio: "Räntekostnader",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            C: {
              sorting: 4,
              translation: {
                Sv: {
                  SwedishMutualFund: "Övriga finansiella kostnader",
                  GeneralPortfolio: "Övriga finansiella kostnader",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
            D: {
              sorting: 5,
              translation: {
                Sv: {
                  SwedishMutualFund: "Övriga kostnader",
                  GeneralPortfolio: "Övriga kostnader",
                },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
          Tax: {
            sorting: 3,
            translation: {
              Sv: { SwedishMutualFund: "Skatt", GeneralPortfolio: "Skatt" },
            },
            None: {
              sorting: 1,
              translation: {
                Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
              },
              None: {
                sorting: 1,
                translation: {
                  Sv: { SwedishMutualFund: "", GeneralPortfolio: "" },
                },
              },
            },
          },
        },
      },
    });
  var iy = {};
  Object.defineProperty(iy, "__esModule", { value: !0 }),
    (iy.countryShortToLong = void 0),
    (iy.countryShortToLong = {
      AF: "Afghanistan",
      AX: "Aland Islands",
      AL: "Albania",
      DZ: "Algeria",
      AS: "American Samoa",
      AD: "Andorra",
      AO: "Angola",
      AI: "Anguilla",
      AQ: "Antarctica",
      AG: "Antigua and Barbuda",
      AR: "Argentina",
      AM: "Armenia",
      AW: "Aruba",
      AU: "Australia",
      AT: "Austria",
      AZ: "Azerbaijan",
      BS: "Bahamas",
      BH: "Bahrain",
      BD: "Bangladesh",
      BB: "Barbados",
      BY: "Belarus",
      BE: "Belgium",
      BZ: "Belize",
      BJ: "Benin",
      BM: "Bermuda",
      BT: "Bhutan",
      BO: "Bolivia, Plurinational State of",
      BQ: "Bonaire, Sint Eustatius and Saba",
      BA: "Bosnia and Herzegovina",
      BW: "Botswana",
      BV: "Bouvet Island",
      BR: "Brazil",
      IO: "British Indian Ocean Territory",
      BN: "Brunei Darussalam",
      BG: "Bulgaria",
      BF: "Burkina Faso",
      BI: "Burundi",
      KH: "Cambodia",
      CM: "Cameroon",
      CA: "Canada",
      CV: "Cape Verde",
      KY: "Cayman Islands",
      CF: "Central African Republic",
      TD: "Chad",
      CL: "Chile",
      CN: "China",
      CX: "Christmas Island",
      CC: "Cocos (Keeling) Islands",
      CO: "Colombia",
      KM: "Comoros",
      CG: "Congo",
      CD: "Congo, The Democratic Republic of the",
      CK: "Cook Islands",
      CR: "Costa Rica",
      CI: "Côte d'Ivoire",
      HR: "Croatia",
      CU: "Cuba",
      CW: "Curaçao",
      CY: "Cyprus",
      CZ: "Czech Republic",
      DK: "Denmark",
      DJ: "Djibouti",
      DM: "Dominica",
      DO: "Dominican Republic",
      EC: "Ecuador",
      EG: "Egypt",
      SV: "El Salvador",
      GQ: "Equatorial Guinea",
      ER: "Eritrea",
      EE: "Estonia",
      ET: "Ethiopia",
      FK: "Falkland Islands (Malvinas)",
      FO: "Faroe Islands",
      FJ: "Fiji",
      FI: "Finland",
      FR: "France",
      GF: "French Guiana",
      PF: "French Polynesia",
      TF: "French Southern Territories",
      GA: "Gabon",
      GM: "Gambia",
      GE: "Georgia",
      DE: "Germany",
      GH: "Ghana",
      GI: "Gibraltar",
      GR: "Greece",
      GL: "Greenland",
      GD: "Grenada",
      GP: "Guadeloupe",
      GU: "Guam",
      GT: "Guatemala",
      GG: "Guernsey",
      GN: "Guinea",
      GW: "Guinea-Bissau",
      GY: "Guyana",
      HT: "Haiti",
      HM: "Heard Island and McDonald Islands",
      VA: "Holy See (Vatican City State)",
      HN: "Honduras",
      HK: "Hong Kong",
      HU: "Hungary",
      IS: "Iceland",
      IN: "India",
      ID: "Indonesia",
      IR: "Iran, Islamic Republic of",
      IQ: "Iraq",
      IE: "Ireland",
      IM: "Isle of Man",
      IL: "Israel",
      IT: "Italy",
      JM: "Jamaica",
      JP: "Japan",
      JE: "Jersey",
      JO: "Jordan",
      KZ: "Kazakhstan",
      KE: "Kenya",
      KI: "Kiribati",
      KP: "Korea, Democratic People's Republic of",
      KR: "Korea, Republic of",
      KW: "Kuwait",
      KG: "Kyrgyzstan",
      LA: "Lao People's Democratic Republic",
      LV: "Latvia",
      LB: "Lebanon",
      LS: "Lesotho",
      LR: "Liberia",
      LY: "Libya",
      LI: "Liechtenstein",
      LT: "Lithuania",
      LU: "Luxembourg",
      MO: "Macao",
      MK: "Macedonia, Republic of",
      MG: "Madagascar",
      MW: "Malawi",
      MY: "Malaysia",
      MV: "Maldives",
      ML: "Mali",
      MT: "Malta",
      MH: "Marshall Islands",
      MQ: "Martinique",
      MR: "Mauritania",
      MU: "Mauritius",
      YT: "Mayotte",
      MX: "Mexico",
      FM: "Micronesia, Federated States of",
      MD: "Moldova, Republic of",
      MC: "Monaco",
      MN: "Mongolia",
      ME: "Montenegro",
      MS: "Montserrat",
      MA: "Morocco",
      MZ: "Mozambique",
      MM: "Myanmar",
      NA: "Namibia",
      NR: "Nauru",
      NP: "Nepal",
      NL: "Netherlands",
      NC: "New Caledonia",
      NZ: "New Zealand",
      NI: "Nicaragua",
      NE: "Niger",
      NG: "Nigeria",
      NU: "Niue",
      NF: "Norfolk Island",
      MP: "Northern Mariana Islands",
      NO: "Norway",
      OM: "Oman",
      PK: "Pakistan",
      PW: "Palau",
      PS: "Palestinian Territory, Occupied",
      PA: "Panama",
      PG: "Papua New Guinea",
      PY: "Paraguay",
      PE: "Peru",
      PH: "Philippines",
      PN: "Pitcairn",
      PL: "Poland",
      PT: "Portugal",
      PR: "Puerto Rico",
      QA: "Qatar",
      RE: "Réunion",
      RO: "Romania",
      RU: "Russian Federation",
      RW: "Rwanda",
      BL: "Saint Barthélemy",
      SH: "Saint Helena, Ascension and Tristan da Cunha",
      KN: "Saint Kitts and Nevis",
      LC: "Saint Lucia",
      MF: "Saint Martin (French part)",
      PM: "Saint Pierre and Miquelon",
      VC: "Saint Vincent and the Grenadines",
      WS: "Samoa",
      SM: "San Marino",
      ST: "Sao Tome and Principe",
      SA: "Saudi Arabia",
      SN: "Senegal",
      RS: "Serbia",
      SC: "Seychelles",
      SL: "Sierra Leone",
      SG: "Singapore",
      SX: "Sint Maarten (Dutch part)",
      SK: "Slovakia",
      SI: "Slovenia",
      SB: "Solomon Islands",
      SO: "Somalia",
      ZA: "South Africa",
      GS: "South Georgia and the South Sandwich Islands",
      ES: "Spain",
      LK: "Sri Lanka",
      SD: "Sudan",
      SR: "Suriname",
      SS: "South Sudan",
      SJ: "Svalbard and Jan Mayen",
      SZ: "Swaziland",
      SE: "Sweden",
      CH: "Switzerland",
      SY: "Syrian Arab Republic",
      TW: "Taiwan, Province of China",
      TJ: "Tajikistan",
      TZ: "Tanzania, United Republic of",
      TH: "Thailand",
      TL: "Timor-Leste",
      TG: "Togo",
      TK: "Tokelau",
      TO: "Tonga",
      TT: "Trinidad and Tobago",
      TN: "Tunisia",
      TR: "Turkey",
      TM: "Turkmenistan",
      TC: "Turks and Caicos Islands",
      TV: "Tuvalu",
      UG: "Uganda",
      UA: "Ukraine",
      AE: "United Arab Emirates",
      GB: "United Kingdom",
      US: "United States",
      UM: "United States Minor Outlying Islands",
      UY: "Uruguay",
      UZ: "Uzbekistan",
      VU: "Vanuatu",
      VE: "Venezuela, Bolivarian Republic of",
      VN: "Viet Nam",
      VG: "Virgin Islands, British",
      VI: "Virgin Islands, U.S.",
      WF: "Wallis and Futuna",
      EH: "Western Sahara",
      YE: "Yemen",
      ZM: "Zambia",
      ZW: "Zimbabwe",
    }),
    (function (e) {
      var t =
          (n && n.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                void 0 === r && (r = n);
                var a = Object.getOwnPropertyDescriptor(t, n);
                (a &&
                  !("get" in a
                    ? !t.__esModule
                    : a.writable || a.configurable)) ||
                  (a = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, r, a);
              }
            : function (e, t, n, r) {
                void 0 === r && (r = n), (e[r] = t[n]);
              }),
        r =
          (n && n.__exportStar) ||
          function (e, n) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(n, r) ||
                t(n, e, r);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        r(ch, e),
        r(Yp(), e),
        r(yp(), e),
        r(Wp, e),
        r(Zp, e),
        r(tm, e),
        r(Hp(), e),
        r(nm, e),
        r(Vv(), e),
        r($v, e),
        r(Yv, e),
        r(ny, e),
        r(ay, e),
        r(iy, e);
    })(sh);
  var oy = {},
    uy = { exports: {} };
  function ly() {}
  function sy() {}
  (sy.resetWarningCache = ly),
    (uy.exports = (function () {
      function e(e, t, n, r, a, i) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== i) {
          var o = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((o.name = "Invariant Violation"), o);
        }
      }
      function t() {
        return e;
      }
      e.isRequired = e;
      var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: sy,
        resetWarningCache: ly,
      };
      return (n.PropTypes = n), n;
    })());
  var cy = uy.exports;
  !(function (e) {
    function t(e) {
      return (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = function (e) {
        var n = (function (n) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && u(e, t);
          })(g, n);
          var a,
            i,
            h,
            p,
            m =
              ((a = g),
              (i = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (h) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = s(a);
                if (i) {
                  var r = s(this).constructor;
                  e = Reflect.construct(n, arguments, r);
                } else e = n.apply(this, arguments);
                return (function (e, n) {
                  if (n && ("object" === t(n) || "function" == typeof n))
                    return n;
                  if (void 0 !== n)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return l(e);
                })(this, e);
              });
          function g(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, g),
              ((t = m.call(this, e)).p = Promise.resolve()),
              (t.resizeHandler = null),
              (t.handlers = {}),
              (t.syncWindowResize = t.syncWindowResize.bind(l(t))),
              (t.syncEventHandlers = t.syncEventHandlers.bind(l(t))),
              (t.attachUpdateEvents = t.attachUpdateEvents.bind(l(t))),
              (t.getRef = t.getRef.bind(l(t))),
              (t.handleUpdate = t.handleUpdate.bind(l(t))),
              (t.figureCallback = t.figureCallback.bind(l(t))),
              (t.updatePlotly = t.updatePlotly.bind(l(t))),
              t
            );
          }
          return (
            (h = g),
            (p = [
              {
                key: "updatePlotly",
                value: function (t, n, r) {
                  var a = this;
                  this.p = this.p
                    .then(function () {
                      if (!a.unmounting) {
                        if (!a.el) throw new Error("Missing element reference");
                        return e.react(a.el, {
                          data: a.props.data,
                          layout: a.props.layout,
                          config: a.props.config,
                          frames: a.props.frames,
                        });
                      }
                    })
                    .then(function () {
                      a.unmounting ||
                        (a.syncWindowResize(t),
                        a.syncEventHandlers(),
                        a.figureCallback(n),
                        r && a.attachUpdateEvents());
                    })
                    .catch(function (e) {
                      a.props.onError && a.props.onError(e);
                    });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  (this.unmounting = !1),
                    this.updatePlotly(!0, this.props.onInitialized, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.unmounting = !1;
                  var t = e.frames && e.frames.length ? e.frames.length : 0,
                    n =
                      this.props.frames && this.props.frames.length
                        ? this.props.frames.length
                        : 0,
                    r = !(
                      e.layout === this.props.layout &&
                      e.data === this.props.data &&
                      e.config === this.props.config &&
                      n === t
                    ),
                    a = void 0 !== e.revision,
                    i = e.revision !== this.props.revision;
                  (r || (a && (!a || i))) &&
                    this.updatePlotly(!1, this.props.onUpdate, !1);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.unmounting = !0),
                    this.figureCallback(this.props.onPurge),
                    this.resizeHandler &&
                      d &&
                      (window.removeEventListener("resize", this.resizeHandler),
                      (this.resizeHandler = null)),
                    this.removeUpdateEvents(),
                    e.purge(this.el);
                },
              },
              {
                key: "attachUpdateEvents",
                value: function () {
                  var e = this;
                  this.el &&
                    this.el.removeListener &&
                    f.forEach(function (t) {
                      e.el.on(t, e.handleUpdate);
                    });
                },
              },
              {
                key: "removeUpdateEvents",
                value: function () {
                  var e = this;
                  this.el &&
                    this.el.removeListener &&
                    f.forEach(function (t) {
                      e.el.removeListener(t, e.handleUpdate);
                    });
                },
              },
              {
                key: "handleUpdate",
                value: function () {
                  this.figureCallback(this.props.onUpdate);
                },
              },
              {
                key: "figureCallback",
                value: function (e) {
                  if ("function" == typeof e) {
                    var t = this.el;
                    e(
                      {
                        data: t.data,
                        layout: t.layout,
                        frames: this.el._transitionData
                          ? this.el._transitionData._frames
                          : null,
                      },
                      this.el
                    );
                  }
                },
              },
              {
                key: "syncWindowResize",
                value: function (t) {
                  var n = this;
                  d &&
                    (this.props.useResizeHandler && !this.resizeHandler
                      ? ((this.resizeHandler = function () {
                          return e.Plots.resize(n.el);
                        }),
                        window.addEventListener("resize", this.resizeHandler),
                        t && this.resizeHandler())
                      : !this.props.useResizeHandler &&
                        this.resizeHandler &&
                        (window.removeEventListener(
                          "resize",
                          this.resizeHandler
                        ),
                        (this.resizeHandler = null)));
                },
              },
              {
                key: "getRef",
                value: function (e) {
                  (this.el = e), this.props.debug && d && (window.gd = this.el);
                },
              },
              {
                key: "syncEventHandlers",
                value: function () {
                  var e = this;
                  c.forEach(function (t) {
                    var n = e.props["on" + t],
                      r = e.handlers[t],
                      a = Boolean(r);
                    n && !a
                      ? e.addEventHandler(t, n)
                      : !n && a
                      ? e.removeEventHandler(t)
                      : n &&
                        a &&
                        n !== r &&
                        (e.removeEventHandler(t), e.addEventHandler(t, n));
                  });
                },
              },
              {
                key: "addEventHandler",
                value: function (e, t) {
                  (this.handlers[e] = t),
                    this.el.on(this.getPlotlyEventName(e), this.handlers[e]);
                },
              },
              {
                key: "removeEventHandler",
                value: function (e) {
                  this.el.removeListener(
                    this.getPlotlyEventName(e),
                    this.handlers[e]
                  ),
                    delete this.handlers[e];
                },
              },
              {
                key: "getPlotlyEventName",
                value: function (e) {
                  return "plotly_" + e.toLowerCase();
                },
              },
              {
                key: "render",
                value: function () {
                  return r.default.createElement("div", {
                    id: this.props.divId,
                    style: this.props.style,
                    ref: this.getRef,
                    className: this.props.className,
                  });
                },
              },
            ]),
            p && o(h.prototype, p),
            Object.defineProperty(h, "prototype", { writable: !1 }),
            g
          );
        })(r.Component);
        return (
          (n.propTypes = {
            data: a.default.arrayOf(a.default.object),
            config: a.default.object,
            layout: a.default.object,
            frames: a.default.arrayOf(a.default.object),
            revision: a.default.number,
            onInitialized: a.default.func,
            onPurge: a.default.func,
            onError: a.default.func,
            onUpdate: a.default.func,
            debug: a.default.bool,
            style: a.default.object,
            className: a.default.string,
            useResizeHandler: a.default.bool,
            divId: a.default.string,
          }),
          c.forEach(function (e) {
            n.propTypes["on" + e] = a.default.func;
          }),
          (n.defaultProps = {
            debug: !1,
            useResizeHandler: !1,
            data: [],
            style: { position: "relative", display: "inline-block" },
          }),
          n
        );
      });
    var n,
      r = (function (e, n) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== t(e) && "function" != typeof e))
          return { default: e };
        var r = i(n);
        if (r && r.has(e)) return r.get(e);
        var a = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, u, l)
              : (a[u] = e[u]);
          }
        return (a.default = e), r && r.set(e, a), a;
      })(U),
      a = (n = cy) && n.__esModule ? n : { default: n };
    function i(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (i = function (e) {
        return e ? n : t;
      })(e);
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function u(e, t) {
      return (u = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
    }
    function l(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function s(e) {
      return (s = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var c = [
        "AfterExport",
        "AfterPlot",
        "Animated",
        "AnimatingFrame",
        "AnimationInterrupted",
        "AutoSize",
        "BeforeExport",
        "BeforeHover",
        "ButtonClicked",
        "Click",
        "ClickAnnotation",
        "Deselect",
        "DoubleClick",
        "Framework",
        "Hover",
        "LegendClick",
        "LegendDoubleClick",
        "Relayout",
        "Relayouting",
        "Restyle",
        "Redraw",
        "Selected",
        "Selecting",
        "SliderChange",
        "SliderEnd",
        "SliderStart",
        "SunburstClick",
        "Transitioning",
        "TransitionInterrupted",
        "Unhover",
        "WebGlContextLost",
      ],
      f = [
        "plotly_restyle",
        "plotly_redraw",
        "plotly_relayout",
        "plotly_relayouting",
        "plotly_doubleclick",
        "plotly_animated",
        "plotly_sunburstclick",
      ],
      d = "undefined" != typeof window;
  })(oy);
  const fy = r(oy),
    dy = "#2186c5";
  function hy(e) {
    try {
      var t = getComputedStyle(document.body).getPropertyValue(
        "--color" + (e % 12)
      );
      return t && "" !== t.trim() ? t.trim() : dy;
    } catch (n) {
      return dy;
    }
  }
  const py = (e, t) => Kh.merge(e, t),
    my = (e, t) => Kh.merge(e, t),
    gy = fy(e),
    vy = (e) => {
      var t = e,
        { timeseries: n, layout: r, config: a } = t,
        i = __objRest(t, ["timeseries", "layout", "config"]);
      const o = [
          "#66BC6B",
          "#BDBDBD",
          "#B3E5FC",
          "#1F5F32",
          "#757575",
          "#01579B",
          "#AB47BC",
          "#4A148C",
        ],
        u = n.map((e, t) =>
          ((e, t, n) => {
            let r = { x: [], y: [] };
            e.__values &&
              e.__dates &&
              (r = e.__values.reduce(
                (t, n, r) => {
                  const a = e.__dates[r];
                  return t.x.push(a), t.y.push(n), t;
                },
                { x: [], y: [] }
              )),
              t || void 0 === e.name || (t = e.name);
            const a = __spreadProps(__spreadValues({ name: t }, r), {
              line: { width: 2.5 },
              mode: "lines",
              hovertemplate:
                "<extra></extra>Date %{x| %Y-%m-%d}<br>Value %{y:.1%}",
              fill: "none",
              marker: {},
            });
            return n && (a.line.color = n), a;
          })(e.normalize(1).add(-1), e.name, o[t])
        ),
        l = u.map((e) => e.y.reduce((e, t) => Math.max(Math.abs(t), e), 0)),
        s = Math.max(l.reduce((e, t) => Math.max(Math.abs(t), e), 0));
      let c = my(
        {
          autosize: !0,
          dragmode: !1,
          title: { y: 0.95, x: 0.5, xanchor: "center", yanchor: "top" },
          font: { size: 14, family: "Montserrat, sans-serif" },
          xaxis: { gridcolor: "#EEEEEE", zeroline: !1 },
          yaxis: { gridcolor: "#EEEEEE", zeroline: !1 },
          colorway: [
            "#2186c5",
            "#43a04c",
            "#f44336",
            "#f8a031",
            "#ba46b8",
            "#009688",
            "#ff5722",
            "#ec407a",
            "#c0ca33",
            "#795548",
            "#e5878a",
            "#9e9e9e",
          ],
          paper_bgcolor: "rgba(0, 0, 0, 0)",
          plot_bgcolor: "rgba(0, 0, 0, 0)",
          showlegend: !0,
          legend: { bgcolor: "rgba(0, 0, 0, 0)", x: 0.02, y: 0.02 },
        },
        {
          font: {
            size: 11,
            family: "Gotham Rounded-Book, Gotham Rounded Book, Gotham Rounded",
          },
          yaxis: { tickformat: s < 0.06 ? ".1%" : ".0%" },
          xaxis: { title: "", hoverformat: "%Y-%m-%d", zeroline: !1 },
          width: null,
          height: null,
          margin: { l: 50, b: 70, t: 5 },
          legend: { bgcolor: "rgba(0, 0, 0, 0)", y: -0.25, yanchor: "bottom" },
        }
      );
      r && (c = my(c, r));
      let f = py(
        {
          responsive: !0,
          displaylogo: !1,
          modeBarButtonsToRemove: [
            "zoom2d",
            "pan2d",
            "select2d",
            "resetViews",
            "toggleSpikelines",
            "hoverClosestCartesian",
            "hoverCompareCartesian",
            "lasso2d",
            "zoomIn2d",
            "zoomOut2d",
            "hoverClosestPie",
          ],
          toImageButtonOptions: {
            format: "png",
            filename: "captor_plot_image",
          },
        },
        { displayModeBar: !1 }
      );
      return (
        a && (f = py(f, a)),
        Q.jsx(
          gy,
          __spreadValues(
            {
              data: u,
              config: f,
              layout: c,
              useResizeHandler: !0,
              className: "w-100",
            },
            i
          )
        )
      );
    };
  function yy(e) {
    const t = [];
    let n = e.classes.find((e) => "C" === e.shareClass);
    e.classes.forEach((e) => {
      e.enabled && null !== e.returnTimeSeries && (n = e);
    });
    const r = new sh.TimeSeries(
      n.returnTimeSeries.dates,
      n.returnTimeSeries.values,
      e.name
    );
    t.push(r);
    for (let a = 0; a < e.benchmarks.length; a++) {
      const n = e.benchmarks[a];
      let i = new sh.TimeSeries(
        n.returnTimeSeries.dates,
        n.returnTimeSeries.values,
        n.longName
      );
      if (
        ((i = sh.TimeSeries.align(r, i)), n.currency !== n.instrumentCurrency)
      ) {
        const t = n.instrumentCurrency + n.currency,
          a = e.fxRates.find((e) => e.name === t),
          o = new sh.TimeSeries(a.dates, a.values, a),
          u = sh.TimeSeries.align(r, o);
        i = i.mult(u);
      }
      t.push(i);
    }
    return t;
  }
  const { sqrt: by, sin: _y, acos: Sy } = Math;
  G.Component, G.Component;
  class wy extends G.Component {
    render() {
      return Q.jsxs("svg", {
        version: "2",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: "Excel",
        style: this.props.style,
        children: [
          Q.jsx("path", {
            style: { fill: "#ECEFF1" },
            d: "M496,432.011H272c-8.832,0-16-7.168-16-16s0-311.168,0-320s7.168-16, 16-16h224\tc8.832,0,16,7.168,16,16v320C512,424.843,504.832,432.011,496,432.011z",
          }),
          Q.jsxs("g", {
            children: [
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,176.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,176.011,336,176.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,240.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,240.011,336,240.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,304.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,304.011,336,304.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,368.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,368.011,336,368.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,176.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,176.011,432,176.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,240.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,240.011,432,240.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,304.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,304.011,432,304.011z",
              }),
              Q.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,368.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,368.011,432,368.011z",
              }),
            ],
          }),
          Q.jsx("path", {
            style: { fill: "#2E7D32" },
            d: "M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352 c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68 c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z",
          }),
          Q.jsx("path", {
            style: { fill: "#FAFAFA" },
            d: "M220.032,309.483l-50.592-57.824l51.168-65.792c5.44-6.976,4.16-17.024-2.784-22.464 c-6.944-5.44-16.992-4.16-22.464,2.784l-47.392,60.928l-39.936-45.632c-5.856-6.72-15.968-7.328-22.56-1.504\n\tc-6.656,5.824-7.328,15.936-1.504,22.56l44,50.304L83.36,310.187c-5.44,6.976-4.16,17.024,2.784,22.464\tc2.944,2.272,6.432,3.36,9.856,3.36c4.768,0,9.472-2.112,12.64-6.176l40.8-52.48l46.528,53.152\n\tc3.168,3.648,7.584,5.504,12.032,5.504c3.744,0,7.488-1.312,10.528-3.968C225.184,326.219,225.856,316.107,220.032,309.483z",
          }),
        ],
      });
    }
  }
  G.Component;
  var Ty = { exports: {} };
  !(function (e) {
    !(function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var e = [], r = 0; r < arguments.length; r++) {
          var a = arguments[r];
          if (a) {
            var i = typeof a;
            if ("string" === i || "number" === i) e.push(a);
            else if (Array.isArray(a)) {
              if (a.length) {
                var o = n.apply(null, a);
                o && e.push(o);
              }
            } else if ("object" === i) {
              if (
                a.toString !== Object.prototype.toString &&
                !a.toString.toString().includes("[native code]")
              ) {
                e.push(a.toString());
                continue;
              }
              for (var u in a) t.call(a, u) && a[u] && e.push(u);
            }
          }
        }
        return e.join(" ");
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(Ty);
  const ky = r(Ty.exports),
    Cy = ({}) => Q.jsx(U.Fragment, {});
  var Ey = { exports: {} };
  !(function (e, t) {
    !(function () {
      function t(e, t, n) {
        var r = new XMLHttpRequest();
        r.open("GET", e),
          (r.responseType = "blob"),
          (r.onload = function () {
            u(r.response, t, n);
          }),
          (r.onerror = function () {
            console.error("could not download file");
          }),
          r.send();
      }
      function r(e) {
        var t = new XMLHttpRequest();
        t.open("HEAD", e, !1);
        try {
          t.send();
        } catch (n) {}
        return 200 <= t.status && 299 >= t.status;
      }
      function a(e) {
        try {
          e.dispatchEvent(new MouseEvent("click"));
        } catch (n) {
          var t = document.createEvent("MouseEvents");
          t.initMouseEvent(
            "click",
            !0,
            !0,
            window,
            0,
            0,
            0,
            80,
            20,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            e.dispatchEvent(t);
        }
      }
      var i =
          "object" == typeof window && window.window === window
            ? window
            : "object" == typeof self && self.self === self
            ? self
            : "object" == typeof n && n.global === n
            ? n
            : void 0,
        o =
          i.navigator &&
          /Macintosh/.test(navigator.userAgent) &&
          /AppleWebKit/.test(navigator.userAgent) &&
          !/Safari/.test(navigator.userAgent),
        u =
          i.saveAs ||
          ("object" != typeof window || window !== i
            ? function () {}
            : "download" in HTMLAnchorElement.prototype && !o
            ? function (e, n, o) {
                var u = i.URL || i.webkitURL,
                  l = document.createElement("a");
                (n = n || e.name || "download"),
                  (l.download = n),
                  (l.rel = "noopener"),
                  "string" == typeof e
                    ? ((l.href = e),
                      l.origin === location.origin
                        ? a(l)
                        : r(l.href)
                        ? t(e, n, o)
                        : a(l, (l.target = "_blank")))
                    : ((l.href = u.createObjectURL(e)),
                      setTimeout(function () {
                        u.revokeObjectURL(l.href);
                      }, 4e4),
                      setTimeout(function () {
                        a(l);
                      }, 0));
              }
            : "msSaveOrOpenBlob" in navigator
            ? function (e, n, i) {
                if (((n = n || e.name || "download"), "string" != typeof e))
                  navigator.msSaveOrOpenBlob(
                    (function (e, t) {
                      return (
                        void 0 === t
                          ? (t = { autoBom: !1 })
                          : "object" != typeof t &&
                            (console.warn(
                              "Deprecated: Expected third argument to be a object"
                            ),
                            (t = { autoBom: !t })),
                        t.autoBom &&
                        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                          e.type
                        )
                          ? new Blob(["\ufeff", e], { type: e.type })
                          : e
                      );
                    })(e, i),
                    n
                  );
                else if (r(e)) t(e, n, i);
                else {
                  var o = document.createElement("a");
                  (o.href = e),
                    (o.target = "_blank"),
                    setTimeout(function () {
                      a(o);
                    });
                }
              }
            : function (e, n, r, a) {
                if (
                  ((a = a || open("", "_blank")) &&
                    (a.document.title = a.document.body.innerText =
                      "downloading..."),
                  "string" == typeof e)
                )
                  return t(e, n, r);
                var u = "application/octet-stream" === e.type,
                  l = /constructor/i.test(i.HTMLElement) || i.safari,
                  s = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((s || (u && l) || o) && "undefined" != typeof FileReader) {
                  var c = new FileReader();
                  (c.onloadend = function () {
                    var e = c.result;
                    (e = s
                      ? e
                      : e.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      a ? (a.location.href = e) : (location = e),
                      (a = null);
                  }),
                    c.readAsDataURL(e);
                } else {
                  var f = i.URL || i.webkitURL,
                    d = f.createObjectURL(e);
                  a ? (a.location = d) : (location.href = d),
                    (a = null),
                    setTimeout(function () {
                      f.revokeObjectURL(d);
                    }, 4e4);
                }
              });
      (i.saveAs = u.saveAs = u), (e.exports = u);
    })();
  })(Ey);
  var xy = Ey.exports;
  const Py = (e) => {
      if ("undefined" != typeof ArrayBuffer) {
        const t = new ArrayBuffer(e.length),
          n = new Uint8Array(t);
        for (let r = 0; r !== e.length; ++r) n[r] = 255 & e.charCodeAt(r);
        return t;
      }
      {
        const t = new Array(e.length);
        for (let n = 0; n !== e.length; ++n) t[n] = 255 & e.charCodeAt(n);
        return t;
      }
    },
    Ay = (e, t, n, r, a) => (t ? t(e, n, r, a) : (e || "").toString()),
    My = (e, t, n, r) => (Kh.isFunction(e) ? e(t, n, r) : e),
    Ny = ({
      idx: e,
      item: t,
      items: n,
      itemProps: r,
      trClassName: a,
      trStyle: i,
    }) =>
      Q.jsx("tr", {
        className: a ? a(t, e, n) : null,
        style: i ? i(t, e, n) : null,
        children: Kh.map(r, (r, a) => {
          const i = Kh.get(t, r.key),
            o = G.isValidElement(i);
          return Q.jsxs(
            "td",
            {
              className: My(r.className, t, e, n),
              onClick: r.onClick ? (t) => r.onClick(t, e) : null,
              children: [!o && Ay(i, r.format, t, e, n), o && i],
            },
            a
          );
        }),
      }),
    Iy = G.createContext({ print: !1 });
  class Ry extends U.PureComponent {
    constructor() {
      super(...arguments),
        (this.state = { sortCol: "", sortOrder: "desc" }),
        (this.renderSortHandle = (e) => {
          const { sortCol: t, sortOrder: n } = this.state;
          return t !== e
            ? Q.jsx(U.Fragment, {})
            : Q.jsx("span", {
                className: ky({ dropup: "asc" === n, dropdown: "desc" === n }),
                children: Q.jsx("small", {
                  className: "dropdown-toggle",
                  children: " ",
                }),
              });
        }),
        (this.renderHeaders = (e, t, n) => {
          const { sortable: r } = this.props;
          return Q.jsxs("thead", {
            children: [
              t &&
                t.length > 0 &&
                Q.jsx("tr", {
                  children: t.map((e, t) =>
                    Q.jsx(
                      "th",
                      {
                        className: My(e.className),
                        colSpan: e.colspan,
                        children: e.title,
                      },
                      t
                    )
                  ),
                }),
              Q.jsx("tr", {
                children: e.map((e, t) =>
                  Q.jsxs(
                    "th",
                    {
                      className: My(n[t].className, null, t),
                      onClick: () => this.handleSort(n[t]),
                      children: [e, r && this.renderSortHandle(n[t].key)],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        }),
        (this.renderBody = (e, t, n, r) =>
          Q.jsx("tbody", {
            children: e.map((a, i) =>
              Q.jsx(
                Ny,
                {
                  idx: i,
                  item: a,
                  items: e,
                  itemProps: t,
                  trClassName: n,
                  trStyle: r,
                },
                i
              )
            ),
          })),
        (this.parseChildren = (e) => (
          Kh.isArray(e) || (e = [e]),
          Kh.reduce(
            e,
            (e, t) => {
              if (!t) return e;
              var n = t.props,
                { title: r, field: a, topTitle: i, topTitleColspan: o } = n,
                u = __objRest(n, [
                  "title",
                  "field",
                  "topTitle",
                  "topTitleColspan",
                ]);
              return (
                Kh.isNil(i) ||
                  e.topHeaders.push({
                    title: i,
                    colspan: o,
                    className: u.className,
                  }),
                Kh.isNil(r) && (r = Kh.startCase(a)),
                e.headers.push(r),
                e.itemProps.push(__spreadValues({ key: a }, u)),
                e
              );
            },
            { headers: [], topHeaders: [], itemProps: [] }
          )
        )),
        (this.renderExportToExcel = () =>
          Q.jsx(Iy.Consumer, {
            children: (e) =>
              !e.print &&
              Q.jsx("button", {
                id: "export-excel",
                className: "export-link",
                type: "button",
                onClick: this.handleExport,
                children: Q.jsx(wy, {}),
              }),
          })),
        (this.handleExport = () => {
          const { data: e, header: n } = this.props,
            r = Math.random().toString(36).slice(2);
          ((e, n = "table.xlsx") => {
            const r = t.utils.aoa_to_sheet(
                ((i = e),
                Kh.reduce(i, (e, t) => (e.push(Kh.values(t)), e), [
                  Kh.keys(i[0]),
                ]))
              ),
              a = t.utils.book_new();
            var i;
            t.utils.book_append_sheet(a, r, "Sheet 1");
            const o = t.write(a, {
              bookType: "xlsx",
              bookSST: !1,
              type: "binary",
            });
            try {
              const e = new Blob([Py(o)], { type: "application/octet-stream" });
              xy.saveAs(e, n);
            } catch (i) {
              "undefined" != typeof console && console.log(i, o);
            }
          })(e, `${Kh.snakeCase(n || r)}.xlsx`);
        }),
        (this.handleSort = (e) => {
          const { sortCol: t, sortOrder: n } = this.state;
          let r = "asc";
          t === e.key && (r = "asc" === n ? "desc" : "asc"),
            this.setState({ sortCol: e.key, sortOrder: r });
        });
    }
    render() {
      const {
        header: e,
        className: t,
        tableClassName: n,
        showHeader: r,
        trClassName: a,
        trStyle: i,
        hideDownload: o,
      } = this.props;
      var { children: u, data: l } = this.props;
      if (Kh.isNil(u)) {
        var s = {};
        l.forEach((e) => Object.keys(e).forEach((e) => (s[e] = !0))),
          (u = Object.keys(s).map((e, t) => Q.jsx(Cy, { field: e }, t)));
      }
      const { headers: c, itemProps: f, topHeaders: d } = this.parseChildren(u),
        h = ky("table", "table-striped", n, { "table-sm": !n }),
        { sortCol: p, sortOrder: m } = this.state;
      return (
        (g = l),
        (y = m),
        (l = (v = p) ? Kh.orderBy(g, v, y) : g),
        Q.jsxs("div", {
          className: `${t} table-responsive`,
          children: [
            !1 !== r
              ? Q.jsxs("h4", {
                  children: [e, o ? null : this.renderExportToExcel()],
                })
              : null,
            Q.jsxs("table", {
              className: h,
              children: [
                this.renderHeaders(c, d, f),
                this.renderBody(l, f, a, i),
              ],
            }),
          ],
        })
      );
      var g, v, y;
    }
  }
  fy(e);
  class Oy extends G.Component {
    constructor() {
      super(...arguments), (this.onResize = () => this.setSizeClass(this));
    }
    componentDidMount() {
      window.addEventListener("resize", this.onResize), this.setSizeClass(this);
    }
    componentWillUnmount() {
      this.onResize && window.removeEventListener("resize", this.onResize);
    }
    setSizeClass(e) {
      if (e.node && void 0 === e.autoSize) {
        var t = e.node.classList;
        t &&
          (e.autoSize =
            !t.contains("facttable-sm") &&
            !t.contains("facttable-md") &&
            !t.contains("facttable-lg"));
      }
      if (!0 === e.autoSize && e.node) {
        var n = e.node.clientWidth;
        !n && e.node.parentNode && (n = e.node.parentNode.clientWidth),
          n &&
            ((t = e.node.classList),
            n <= 520
              ? (t.add("facttable-sm"),
                t.remove("facttable-md"),
                t.remove("facttable-lg"))
              : n <= 920
              ? (t.remove("facttable-sm"),
                t.add("facttable-md"),
                t.remove("facttable-lg"))
              : (t.remove("facttable-sm"),
                t.remove("facttable-md"),
                t.add("facttable-lg")));
      }
    }
    render() {
      var { className: e, header: t, list: n } = this.props;
      return Q.jsxs("div", {
        className: "facttable" + (e ? " " + e : ""),
        ref: (e) => {
          this.node = e;
        },
        children: [
          t
            ? Q.jsx("header", { children: Q.jsx("h4", { children: t }) })
            : null,
          Q.jsx("ul", {
            children: n.map((e, t) =>
              Q.jsxs(
                "li",
                {
                  children: [
                    Q.jsx("div", { title: e.key, children: e.key }),
                    e.value
                      ? Q.jsx("div", { children: e.value })
                      : e.values.map((e, t) =>
                          Q.jsx("div", { children: e }, t)
                        ),
                  ],
                },
                t
              )
            ),
          }),
        ],
      });
    }
  }
  fy(e);
  const { round: Fy } = Math;
  sh.numberFormatFun("0,0%"),
    G.Component,
    G.Component,
    G.Component,
    G.Component,
    G.Component;
  const Dy = sh.numberFormatFun("0.0%"),
    Ly = ({ timeseries: e, ranges: t }) => {
      const n = [{ key: null, values: t }],
        r = [];
      for (let i = 0; i < e.length; i++) {
        const n = e[i].resampleToMonthly(),
          a = [];
        for (let r = 0; r < t.length; r++) {
          const o = /([0-9]+)([MY])/.exec(t[r]);
          if (o) {
            let e = parseInt(o[1], 10);
            "Y" === o[2] && (e *= 12);
            const t = n.endValue / n.__values[n.length - 1 - e];
            e < 14 ? a.push(t - 1) : a.push(Math.pow(t, 12 / (e - 1)) - 1);
          } else
            "number" == typeof t[r] && isFinite(Number(t[r]))
              ? a.push(e[i].specificYearReturn(parseFloat(t[r])))
              : a.push(Number.NaN);
        }
        r.push(a);
      }
      const a = [];
      if (r.length > 1) {
        const e = r[0];
        for (let t = 1; t < r.length; t++) {
          const n = r[t],
            i = e.map((e, t) => parseFloat(Dy(e)) - parseFloat(Dy(n[t])));
          a.push(i);
        }
      }
      n.push({ key: e[0].name, values: r[0].map((e) => Dy(e)) });
      for (let i = 1; i < r.length; i++) {
        const t = Kh.cloneDeep(r[i]),
          o = a[i - 1];
        for (let e = 0; e < t.length; e++)
          t[e] = Dy(t[e]) + "[" + Dy(o[e] / 100) + "]";
        n.push({ key: e[i].name, values: t });
      }
      return Q.jsx(Oy, {
        className: "firstheader evenrowsgray",
        header: "",
        list: n,
      });
    };
  function By() {
    return (
      (By = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      By.apply(this, arguments)
    );
  }
  var jy;
  fy(e),
    (function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(jy || (jy = {}));
  function zy() {
    var e = [];
    return {
      get length() {
        return e.length;
      },
      push: function (t) {
        return (
          e.push(t),
          function () {
            e = e.filter(function (e) {
              return e !== t;
            });
          }
        );
      },
      call: function (t) {
        e.forEach(function (e) {
          return e && e(t);
        });
      },
    };
  }
  var Uy = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
      ),
    Gy = "%[a-f0-9]{2}",
    Vy = new RegExp("(" + Gy + ")|([^%]+?)", "gi"),
    $y = new RegExp("(" + Gy + ")+", "gi");
  function Hy(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch (a) {}
    if (1 === e.length) return e;
    t = t || 1;
    var n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], Hy(n), Hy(r));
  }
  function Yy(e) {
    try {
      return decodeURIComponent(e);
    } catch (r) {
      for (var t = e.match(Vy) || [], n = 1; n < t.length; n++)
        t = (e = Hy(t, n).join("")).match(Vy) || [];
      return e;
    }
  }
  var Wy = function (e) {
      if ("string" != typeof e)
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
        );
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (
            var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = $y.exec(e);
            n;

          ) {
            try {
              t[n[0]] = decodeURIComponent(n[0]);
            } catch (u) {
              var r = Yy(n[0]);
              r !== n[0] && (t[n[0]] = r);
            }
            n = $y.exec(e);
          }
          t["%C2"] = "�";
          for (var a = Object.keys(t), i = 0; i < a.length; i++) {
            var o = a[i];
            e = e.replace(new RegExp(o, "g"), t[o]);
          }
          return e;
        })(e);
      }
    },
    qy = (e, t) => {
      if ("string" != typeof e || "string" != typeof t)
        throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const n = e.indexOf(t);
      return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
    },
    Ky = function (e, t) {
      for (
        var n = {}, r = Object.keys(e), a = Array.isArray(t), i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i],
          u = e[o];
        (a ? -1 !== t.indexOf(o) : t(o, u, e)) && (n[o] = u);
      }
      return n;
    };
  !(function (e) {
    const t = Uy,
      n = Wy,
      r = qy,
      a = Ky,
      i = Symbol("encodeFragmentIdentifier");
    function o(e) {
      if ("string" != typeof e || 1 !== e.length)
        throw new TypeError(
          "arrayFormatSeparator must be single character string"
        );
    }
    function u(e, n) {
      return n.encode ? (n.strict ? t(e) : encodeURIComponent(e)) : e;
    }
    function l(e, t) {
      return t.decode ? n(e) : e;
    }
    function s(e) {
      return Array.isArray(e)
        ? e.sort()
        : "object" == typeof e
        ? s(Object.keys(e))
            .sort((e, t) => Number(e) - Number(t))
            .map((t) => e[t])
        : e;
    }
    function c(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function f(e) {
      const t = (e = c(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function d(e, t) {
      return (
        t.parseNumbers &&
        !Number.isNaN(Number(e)) &&
        "string" == typeof e &&
        "" !== e.trim()
          ? (e = Number(e))
          : !t.parseBooleans ||
            null === e ||
            ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
            (e = "true" === e.toLowerCase()),
        e
      );
    }
    function h(e, t) {
      o(
        (t = Object.assign(
          {
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1,
          },
          t
        )).arrayFormatSeparator
      );
      const n = (function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, n, r) => {
                (t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, "")),
                  t
                    ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n))
                    : (r[e] = n);
              };
            case "bracket":
              return (e, n, r) => {
                (t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, "")),
                  t
                    ? void 0 !== r[e]
                      ? (r[e] = [].concat(r[e], n))
                      : (r[e] = [n])
                    : (r[e] = n);
              };
            case "colon-list-separator":
              return (e, n, r) => {
                (t = /(:list)$/.exec(e)),
                  (e = e.replace(/:list$/, "")),
                  t
                    ? void 0 !== r[e]
                      ? (r[e] = [].concat(r[e], n))
                      : (r[e] = [n])
                    : (r[e] = n);
              };
            case "comma":
            case "separator":
              return (t, n, r) => {
                const a =
                    "string" == typeof n && n.includes(e.arrayFormatSeparator),
                  i =
                    "string" == typeof n &&
                    !a &&
                    l(n, e).includes(e.arrayFormatSeparator);
                n = i ? l(n, e) : n;
                const o =
                  a || i
                    ? n.split(e.arrayFormatSeparator).map((t) => l(t, e))
                    : null === n
                    ? n
                    : l(n, e);
                r[t] = o;
              };
            case "bracket-separator":
              return (t, n, r) => {
                const a = /(\[\])$/.test(t);
                if (((t = t.replace(/\[\]$/, "")), !a))
                  return void (r[t] = n ? l(n, e) : n);
                const i =
                  null === n
                    ? []
                    : n.split(e.arrayFormatSeparator).map((t) => l(t, e));
                void 0 !== r[t] ? (r[t] = [].concat(r[t], i)) : (r[t] = i);
              };
            default:
              return (e, t, n) => {
                void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
              };
          }
        })(t),
        a = Object.create(null);
      if ("string" != typeof e) return a;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return a;
      for (const i of e.split("&")) {
        if ("" === i) continue;
        let [e, o] = r(t.decode ? i.replace(/\+/g, " ") : i, "=");
        (o =
          void 0 === o
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat
              )
            ? o
            : l(o, t)),
          n(l(e, t), o, a);
      }
      for (const r of Object.keys(a)) {
        const e = a[r];
        if ("object" == typeof e && null !== e)
          for (const n of Object.keys(e)) e[n] = d(e[n], t);
        else a[r] = d(e, t);
      }
      return !1 === t.sort
        ? a
        : (!0 === t.sort
            ? Object.keys(a).sort()
            : Object.keys(a).sort(t.sort)
          ).reduce((e, t) => {
            const n = a[t];
            return (
              Boolean(n) && "object" == typeof n && !Array.isArray(n)
                ? (e[t] = s(n))
                : (e[t] = n),
              e
            );
          }, Object.create(null));
    }
    (e.extract = f),
      (e.parse = h),
      (e.stringify = (e, t) => {
        if (!e) return "";
        o(
          (t = Object.assign(
            {
              encode: !0,
              strict: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
            },
            t
          )).arrayFormatSeparator
        );
        const n = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return (t) => (n, r) => {
                  const a = n.length;
                  return void 0 === r ||
                    (e.skipNull && null === r) ||
                    (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, [u(t, e), "[", a, "]"].join("")]
                    : [...n, [u(t, e), "[", u(a, e), "]=", u(r, e)].join("")];
                };
              case "bracket":
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, [u(t, e), "[]"].join("")]
                    : [...n, [u(t, e), "[]=", u(r, e)].join("")];
              case "colon-list-separator":
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, [u(t, e), ":list="].join("")]
                    : [...n, [u(t, e), ":list=", u(r, e)].join("")];
              case "comma":
              case "separator":
              case "bracket-separator": {
                const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                return (n) => (r, a) =>
                  void 0 === a ||
                  (e.skipNull && null === a) ||
                  (e.skipEmptyString && "" === a)
                    ? r
                    : ((a = null === a ? "" : a),
                      0 === r.length
                        ? [[u(n, e), t, u(a, e)].join("")]
                        : [[r, u(a, e)].join(e.arrayFormatSeparator)]);
              }
              default:
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, u(t, e)]
                    : [...n, [u(t, e), "=", u(r, e)].join("")];
            }
          })(t),
          r = {};
        for (const o of Object.keys(e))
          (a = o),
            (t.skipNull && null == e[a]) ||
              (t.skipEmptyString && "" === e[a]) ||
              (r[o] = e[o]);
        var a;
        const i = Object.keys(r);
        return (
          !1 !== t.sort && i.sort(t.sort),
          i
            .map((r) => {
              const a = e[r];
              return void 0 === a
                ? ""
                : null === a
                ? u(r, t)
                : Array.isArray(a)
                ? 0 === a.length && "bracket-separator" === t.arrayFormat
                  ? u(r, t) + "[]"
                  : a.reduce(n(r), []).join("&")
                : u(r, t) + "=" + u(a, t);
            })
            .filter((e) => e.length > 0)
            .join("&")
        );
      }),
      (e.parseUrl = (e, t) => {
        t = Object.assign({ decode: !0 }, t);
        const [n, a] = r(e, "#");
        return Object.assign(
          { url: n.split("?")[0] || "", query: h(f(e), t) },
          t && t.parseFragmentIdentifier && a
            ? { fragmentIdentifier: l(a, t) }
            : {}
        );
      }),
      (e.stringifyUrl = (t, n) => {
        n = Object.assign({ encode: !0, strict: !0, [i]: !0 }, n);
        const r = c(t.url).split("?")[0] || "",
          a = e.extract(t.url),
          o = e.parse(a, { sort: !1 }),
          l = Object.assign(o, t.query);
        let s = e.stringify(l, n);
        s && (s = `?${s}`);
        let f = (function (e) {
          let t = "";
          const n = e.indexOf("#");
          return -1 !== n && (t = e.slice(n)), t;
        })(t.url);
        return (
          t.fragmentIdentifier &&
            (f = `#${
              n[i] ? u(t.fragmentIdentifier, n) : t.fragmentIdentifier
            }`),
          `${r}${s}${f}`
        );
      }),
      (e.pick = (t, n, r) => {
        r = Object.assign({ parseFragmentIdentifier: !0, [i]: !1 }, r);
        const { url: o, query: u, fragmentIdentifier: l } = e.parseUrl(t, r);
        return e.stringifyUrl(
          { url: o, query: a(u, n), fragmentIdentifier: l },
          r
        );
      }),
      (e.exclude = (t, n, r) => {
        const a = Array.isArray(n) ? (e) => !n.includes(e) : (e, t) => !n(e, t);
        return e.pick(t, a, r);
      });
  })({});
  var Qy = { exports: {} };
  !(function (e, t) {
    e.exports = (function () {
      for (
        var e = function (e, t, n) {
            return (
              void 0 === t && (t = 0),
              void 0 === n && (n = 1),
              e < t ? t : e > n ? n : e
            );
          },
          t = e,
          n = {},
          r = 0,
          a = [
            "Boolean",
            "Number",
            "String",
            "Function",
            "Array",
            "Date",
            "RegExp",
            "Undefined",
            "Null",
          ];
        r < a.length;
        r += 1
      ) {
        var i = a[r];
        n["[object " + i + "]"] = i.toLowerCase();
      }
      var o = function (e) {
          return n[Object.prototype.toString.call(e)] || "object";
        },
        u = o,
        l = o,
        s = Math.PI,
        c = {
          clip_rgb: function (e) {
            (e._clipped = !1), (e._unclipped = e.slice(0));
            for (var n = 0; n <= 3; n++)
              n < 3
                ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0),
                  (e[n] = t(e[n], 0, 255)))
                : 3 === n && (e[n] = t(e[n], 0, 1));
            return e;
          },
          limit: e,
          type: o,
          unpack: function (e, t) {
            return (
              void 0 === t && (t = null),
              e.length >= 3
                ? Array.prototype.slice.call(e)
                : "object" == u(e[0]) && t
                ? t
                    .split("")
                    .filter(function (t) {
                      return void 0 !== e[0][t];
                    })
                    .map(function (t) {
                      return e[0][t];
                    })
                : e[0]
            );
          },
          last: function (e) {
            if (e.length < 2) return null;
            var t = e.length - 1;
            return "string" == l(e[t]) ? e[t].toLowerCase() : null;
          },
          PI: s,
          TWOPI: 2 * s,
          PITHIRD: s / 3,
          DEG2RAD: s / 180,
          RAD2DEG: 180 / s,
        },
        f = { format: {}, autodetect: [] },
        d = c.last,
        h = c.clip_rgb,
        p = c.type,
        m = f,
        g = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = this;
          if (
            "object" === p(e[0]) &&
            e[0].constructor &&
            e[0].constructor === this.constructor
          )
            return e[0];
          var r = d(e),
            a = !1;
          if (!r) {
            (a = !0),
              m.sorted ||
                ((m.autodetect = m.autodetect.sort(function (e, t) {
                  return t.p - e.p;
                })),
                (m.sorted = !0));
            for (var i = 0, o = m.autodetect; i < o.length; i += 1) {
              var u = o[i];
              if ((r = u.test.apply(u, e))) break;
            }
          }
          if (!m.format[r]) throw new Error("unknown format: " + e);
          var l = m.format[r].apply(null, a ? e : e.slice(0, -1));
          (n._rgb = h(l)), 3 === n._rgb.length && n._rgb.push(1);
        };
      g.prototype.toString = function () {
        return "function" == p(this.hex)
          ? this.hex()
          : "[" + this._rgb.join(",") + "]";
      };
      var v = g,
        y = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            y.Color,
            [null].concat(e)
          ))();
        };
      (y.Color = v), (y.version = "2.4.2");
      var b = y,
        _ = c.unpack,
        S = Math.max,
        w = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = _(e, "rgb"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = 1 - S((r /= 255), S((a /= 255), (i /= 255))),
            u = o < 1 ? 1 / (1 - o) : 0;
          return [(1 - r - o) * u, (1 - a - o) * u, (1 - i - o) * u, o];
        },
        T = c.unpack,
        k = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = T(e, "cmyk"))[0],
            r = e[1],
            a = e[2],
            i = e[3],
            o = e.length > 4 ? e[4] : 1;
          return 1 === i
            ? [0, 0, 0, o]
            : [
                n >= 1 ? 0 : 255 * (1 - n) * (1 - i),
                r >= 1 ? 0 : 255 * (1 - r) * (1 - i),
                a >= 1 ? 0 : 255 * (1 - a) * (1 - i),
                o,
              ];
        },
        C = b,
        E = v,
        x = f,
        P = c.unpack,
        A = c.type,
        M = w;
      (E.prototype.cmyk = function () {
        return M(this._rgb);
      }),
        (C.cmyk = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            E,
            [null].concat(e, ["cmyk"])
          ))();
        }),
        (x.format.cmyk = k),
        x.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = P(e, "cmyk")), "array" === A(e) && 4 === e.length))
              return "cmyk";
          },
        });
      var N = c.unpack,
        I = c.last,
        R = function (e) {
          return Math.round(100 * e) / 100;
        },
        O = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = N(e, "hsla"),
            r = I(e) || "lsa";
          return (
            (n[0] = R(n[0] || 0)),
            (n[1] = R(100 * n[1]) + "%"),
            (n[2] = R(100 * n[2]) + "%"),
            "hsla" === r || (n.length > 3 && n[3] < 1)
              ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
              : (n.length = 3),
            r + "(" + n.join(",") + ")"
          );
        },
        F = c.unpack,
        D = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = F(e, "rgba"))[0],
            r = e[1],
            a = e[2];
          (n /= 255), (r /= 255), (a /= 255);
          var i,
            o,
            u = Math.min(n, r, a),
            l = Math.max(n, r, a),
            s = (l + u) / 2;
          return (
            l === u
              ? ((i = 0), (o = Number.NaN))
              : (i = s < 0.5 ? (l - u) / (l + u) : (l - u) / (2 - l - u)),
            n == l
              ? (o = (r - a) / (l - u))
              : r == l
              ? (o = 2 + (a - n) / (l - u))
              : a == l && (o = 4 + (n - r) / (l - u)),
            (o *= 60) < 0 && (o += 360),
            e.length > 3 && void 0 !== e[3] ? [o, i, s, e[3]] : [o, i, s]
          );
        },
        L = c.unpack,
        B = c.last,
        j = O,
        z = D,
        U = Math.round,
        G = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = L(e, "rgba"),
            r = B(e) || "rgb";
          return "hsl" == r.substr(0, 3)
            ? j(z(n), r)
            : ((n[0] = U(n[0])),
              (n[1] = U(n[1])),
              (n[2] = U(n[2])),
              ("rgba" === r || (n.length > 3 && n[3] < 1)) &&
                ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
              r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        V = c.unpack,
        $ = Math.round,
        H = function () {
          for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
          var r,
            a,
            i,
            o = (t = V(t, "hsl"))[0],
            u = t[1],
            l = t[2];
          if (0 === u) r = a = i = 255 * l;
          else {
            var s = [0, 0, 0],
              c = [0, 0, 0],
              f = l < 0.5 ? l * (1 + u) : l + u - l * u,
              d = 2 * l - f,
              h = o / 360;
            (s[0] = h + 1 / 3), (s[1] = h), (s[2] = h - 1 / 3);
            for (var p = 0; p < 3; p++)
              s[p] < 0 && (s[p] += 1),
                s[p] > 1 && (s[p] -= 1),
                6 * s[p] < 1
                  ? (c[p] = d + 6 * (f - d) * s[p])
                  : 2 * s[p] < 1
                  ? (c[p] = f)
                  : 3 * s[p] < 2
                  ? (c[p] = d + (f - d) * (2 / 3 - s[p]) * 6)
                  : (c[p] = d);
            (r = (e = [$(255 * c[0]), $(255 * c[1]), $(255 * c[2])])[0]),
              (a = e[1]),
              (i = e[2]);
          }
          return t.length > 3 ? [r, a, i, t[3]] : [r, a, i, 1];
        },
        Y = H,
        W = f,
        q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        K =
          /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        Q =
          /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        J =
          /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        X =
          /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
        Z =
          /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
        ee = Math.round,
        te = function (e) {
          var t;
          if (((e = e.toLowerCase().trim()), W.format.named))
            try {
              return W.format.named(e);
            } catch (p) {}
          if ((t = e.match(q))) {
            for (var n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
            return (n[3] = 1), n;
          }
          if ((t = e.match(K))) {
            for (var a = t.slice(1, 5), i = 0; i < 4; i++) a[i] = +a[i];
            return a;
          }
          if ((t = e.match(Q))) {
            for (var o = t.slice(1, 4), u = 0; u < 3; u++)
              o[u] = ee(2.55 * o[u]);
            return (o[3] = 1), o;
          }
          if ((t = e.match(J))) {
            for (var l = t.slice(1, 5), s = 0; s < 3; s++)
              l[s] = ee(2.55 * l[s]);
            return (l[3] = +l[3]), l;
          }
          if ((t = e.match(X))) {
            var c = t.slice(1, 4);
            (c[1] *= 0.01), (c[2] *= 0.01);
            var f = Y(c);
            return (f[3] = 1), f;
          }
          if ((t = e.match(Z))) {
            var d = t.slice(1, 4);
            (d[1] *= 0.01), (d[2] *= 0.01);
            var h = Y(d);
            return (h[3] = +t[4]), h;
          }
        };
      te.test = function (e) {
        return (
          q.test(e) ||
          K.test(e) ||
          Q.test(e) ||
          J.test(e) ||
          X.test(e) ||
          Z.test(e)
        );
      };
      var ne = b,
        re = v,
        ae = f,
        ie = c.type,
        oe = G,
        ue = te;
      (re.prototype.css = function (e) {
        return oe(this._rgb, e);
      }),
        (ne.css = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            re,
            [null].concat(e, ["css"])
          ))();
        }),
        (ae.format.css = ue),
        ae.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (!t.length && "string" === ie(e) && ue.test(e)) return "css";
          },
        });
      var le = v,
        se = b,
        ce = c.unpack;
      (f.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = ce(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
      }),
        (se.gl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            le,
            [null].concat(e, ["gl"])
          ))();
        }),
        (le.prototype.gl = function () {
          var e = this._rgb;
          return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
      var fe = c.unpack,
        de = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r = fe(e, "rgb"),
            a = r[0],
            i = r[1],
            o = r[2],
            u = Math.min(a, i, o),
            l = Math.max(a, i, o),
            s = l - u,
            c = (100 * s) / 255,
            f = (u / (255 - s)) * 100;
          return (
            0 === s
              ? (n = Number.NaN)
              : (a === l && (n = (i - o) / s),
                i === l && (n = 2 + (o - a) / s),
                o === l && (n = 4 + (a - i) / s),
                (n *= 60) < 0 && (n += 360)),
            [n, c, f]
          );
        },
        he = c.unpack,
        pe = Math.floor,
        me = function () {
          for (var e, t, n, r, a, i, o = [], u = arguments.length; u--; )
            o[u] = arguments[u];
          var l,
            s,
            c,
            f = (o = he(o, "hcg"))[0],
            d = o[1],
            h = o[2];
          h *= 255;
          var p = 255 * d;
          if (0 === d) l = s = c = h;
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
            var m = pe((f /= 60)),
              g = f - m,
              v = h * (1 - d),
              y = v + p * (1 - g),
              b = v + p * g,
              _ = v + p;
            switch (m) {
              case 0:
                (l = (e = [_, b, v])[0]), (s = e[1]), (c = e[2]);
                break;
              case 1:
                (l = (t = [y, _, v])[0]), (s = t[1]), (c = t[2]);
                break;
              case 2:
                (l = (n = [v, _, b])[0]), (s = n[1]), (c = n[2]);
                break;
              case 3:
                (l = (r = [v, y, _])[0]), (s = r[1]), (c = r[2]);
                break;
              case 4:
                (l = (a = [b, v, _])[0]), (s = a[1]), (c = a[2]);
                break;
              case 5:
                (l = (i = [_, v, y])[0]), (s = i[1]), (c = i[2]);
            }
          }
          return [l, s, c, o.length > 3 ? o[3] : 1];
        },
        ge = c.unpack,
        ve = c.type,
        ye = b,
        be = v,
        _e = f,
        Se = de;
      (be.prototype.hcg = function () {
        return Se(this._rgb);
      }),
        (ye.hcg = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            be,
            [null].concat(e, ["hcg"])
          ))();
        }),
        (_e.format.hcg = me),
        _e.autodetect.push({
          p: 1,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = ge(e, "hcg")), "array" === ve(e) && 3 === e.length))
              return "hcg";
          },
        });
      var we = c.unpack,
        Te = c.last,
        ke = Math.round,
        Ce = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = we(e, "rgba"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = n[3],
            u = Te(e) || "auto";
          void 0 === o && (o = 1), "auto" === u && (u = o < 1 ? "rgba" : "rgb");
          var l =
            "000000" +
            (((r = ke(r)) << 16) | ((a = ke(a)) << 8) | (i = ke(i))).toString(
              16
            );
          l = l.substr(l.length - 6);
          var s = "0" + ke(255 * o).toString(16);
          switch (((s = s.substr(s.length - 2)), u.toLowerCase())) {
            case "rgba":
              return "#" + l + s;
            case "argb":
              return "#" + s + l;
            default:
              return "#" + l;
          }
        },
        Ee = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        xe = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        Pe = function (e) {
          if (e.match(Ee)) {
            (4 !== e.length && 7 !== e.length) || (e = e.substr(1)),
              3 === e.length &&
                (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            var t = parseInt(e, 16);
            return [t >> 16, (t >> 8) & 255, 255 & t, 1];
          }
          if (e.match(xe)) {
            (5 !== e.length && 9 !== e.length) || (e = e.substr(1)),
              4 === e.length &&
                (e =
                  (e = e.split(""))[0] +
                  e[0] +
                  e[1] +
                  e[1] +
                  e[2] +
                  e[2] +
                  e[3] +
                  e[3]);
            var n = parseInt(e, 16);
            return [
              (n >> 24) & 255,
              (n >> 16) & 255,
              (n >> 8) & 255,
              Math.round(((255 & n) / 255) * 100) / 100,
            ];
          }
          throw new Error("unknown hex color: " + e);
        },
        Ae = b,
        Me = v,
        Ne = c.type,
        Ie = f,
        Re = Ce;
      (Me.prototype.hex = function (e) {
        return Re(this._rgb, e);
      }),
        (Ae.hex = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Me,
            [null].concat(e, ["hex"])
          ))();
        }),
        (Ie.format.hex = Pe),
        Ie.autodetect.push({
          p: 4,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (
              !t.length &&
              "string" === Ne(e) &&
              [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
            )
              return "hex";
          },
        });
      var Oe = c.unpack,
        Fe = c.TWOPI,
        De = Math.min,
        Le = Math.sqrt,
        Be = Math.acos,
        je = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r = Oe(e, "rgb"),
            a = r[0],
            i = r[1],
            o = r[2],
            u = De((a /= 255), (i /= 255), (o /= 255)),
            l = (a + i + o) / 3,
            s = l > 0 ? 1 - u / l : 0;
          return (
            0 === s
              ? (n = NaN)
              : ((n = (a - i + (a - o)) / 2),
                (n /= Le((a - i) * (a - i) + (a - o) * (i - o))),
                (n = Be(n)),
                o > i && (n = Fe - n),
                (n /= Fe)),
            [360 * n, s, l]
          );
        },
        ze = c.unpack,
        Ue = c.limit,
        Ge = c.TWOPI,
        Ve = c.PITHIRD,
        $e = Math.cos,
        He = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            i = (e = ze(e, "hsi"))[0],
            o = e[1],
            u = e[2];
          return (
            isNaN(i) && (i = 0),
            isNaN(o) && (o = 0),
            i > 360 && (i -= 360),
            i < 0 && (i += 360),
            (i /= 360) < 1 / 3
              ? (r =
                  1 -
                  ((a = (1 - o) / 3) +
                    (n = (1 + (o * $e(Ge * i)) / $e(Ve - Ge * i)) / 3)))
              : i < 2 / 3
              ? (a =
                  1 -
                  ((n = (1 - o) / 3) +
                    (r =
                      (1 + (o * $e(Ge * (i -= 1 / 3))) / $e(Ve - Ge * i)) / 3)))
              : (n =
                  1 -
                  ((r = (1 - o) / 3) +
                    (a =
                      (1 + (o * $e(Ge * (i -= 2 / 3))) / $e(Ve - Ge * i)) /
                      3))),
            [
              255 * (n = Ue(u * n * 3)),
              255 * (r = Ue(u * r * 3)),
              255 * (a = Ue(u * a * 3)),
              e.length > 3 ? e[3] : 1,
            ]
          );
        },
        Ye = c.unpack,
        We = c.type,
        qe = b,
        Ke = v,
        Qe = f,
        Je = je;
      (Ke.prototype.hsi = function () {
        return Je(this._rgb);
      }),
        (qe.hsi = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Ke,
            [null].concat(e, ["hsi"])
          ))();
        }),
        (Qe.format.hsi = He),
        Qe.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Ye(e, "hsi")), "array" === We(e) && 3 === e.length))
              return "hsi";
          },
        });
      var Xe = c.unpack,
        Ze = c.type,
        et = b,
        tt = v,
        nt = f,
        rt = D;
      (tt.prototype.hsl = function () {
        return rt(this._rgb);
      }),
        (et.hsl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            tt,
            [null].concat(e, ["hsl"])
          ))();
        }),
        (nt.format.hsl = H),
        nt.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Xe(e, "hsl")), "array" === Ze(e) && 3 === e.length))
              return "hsl";
          },
        });
      var at = c.unpack,
        it = Math.min,
        ot = Math.max,
        ut = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            i = (e = at(e, "rgb"))[0],
            o = e[1],
            u = e[2],
            l = it(i, o, u),
            s = ot(i, o, u),
            c = s - l;
          return (
            (a = s / 255),
            0 === s
              ? ((n = Number.NaN), (r = 0))
              : ((r = c / s),
                i === s && (n = (o - u) / c),
                o === s && (n = 2 + (u - i) / c),
                u === s && (n = 4 + (i - o) / c),
                (n *= 60) < 0 && (n += 360)),
            [n, r, a]
          );
        },
        lt = c.unpack,
        st = Math.floor,
        ct = function () {
          for (var e, t, n, r, a, i, o = [], u = arguments.length; u--; )
            o[u] = arguments[u];
          var l,
            s,
            c,
            f = (o = lt(o, "hsv"))[0],
            d = o[1],
            h = o[2];
          if (((h *= 255), 0 === d)) l = s = c = h;
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
            var p = st((f /= 60)),
              m = f - p,
              g = h * (1 - d),
              v = h * (1 - d * m),
              y = h * (1 - d * (1 - m));
            switch (p) {
              case 0:
                (l = (e = [h, y, g])[0]), (s = e[1]), (c = e[2]);
                break;
              case 1:
                (l = (t = [v, h, g])[0]), (s = t[1]), (c = t[2]);
                break;
              case 2:
                (l = (n = [g, h, y])[0]), (s = n[1]), (c = n[2]);
                break;
              case 3:
                (l = (r = [g, v, h])[0]), (s = r[1]), (c = r[2]);
                break;
              case 4:
                (l = (a = [y, g, h])[0]), (s = a[1]), (c = a[2]);
                break;
              case 5:
                (l = (i = [h, g, v])[0]), (s = i[1]), (c = i[2]);
            }
          }
          return [l, s, c, o.length > 3 ? o[3] : 1];
        },
        ft = c.unpack,
        dt = c.type,
        ht = b,
        pt = v,
        mt = f,
        gt = ut;
      (pt.prototype.hsv = function () {
        return gt(this._rgb);
      }),
        (ht.hsv = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            pt,
            [null].concat(e, ["hsv"])
          ))();
        }),
        (mt.format.hsv = ct),
        mt.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = ft(e, "hsv")), "array" === dt(e) && 3 === e.length))
              return "hsv";
          },
        });
      var vt = {
          Kn: 18,
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          t1: 0.206896552,
          t2: 0.12841855,
          t3: 0.008856452,
        },
        yt = vt,
        bt = c.unpack,
        _t = Math.pow,
        St = function (e) {
          return (e /= 255) <= 0.04045
            ? e / 12.92
            : _t((e + 0.055) / 1.055, 2.4);
        },
        wt = function (e) {
          return e > yt.t3 ? _t(e, 1 / 3) : e / yt.t2 + yt.t0;
        },
        Tt = function (e, t, n) {
          return (
            (e = St(e)),
            (t = St(t)),
            (n = St(n)),
            [
              wt((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / yt.Xn),
              wt((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / yt.Yn),
              wt((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / yt.Zn),
            ]
          );
        },
        kt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = bt(e, "rgb"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = Tt(r, a, i),
            u = o[0],
            l = o[1],
            s = 116 * l - 16;
          return [s < 0 ? 0 : s, 500 * (u - l), 200 * (l - o[2])];
        },
        Ct = vt,
        Et = c.unpack,
        xt = Math.pow,
        Pt = function (e) {
          return (
            255 * (e <= 0.00304 ? 12.92 * e : 1.055 * xt(e, 1 / 2.4) - 0.055)
          );
        },
        At = function (e) {
          return e > Ct.t1 ? e * e * e : Ct.t2 * (e - Ct.t0);
        },
        Mt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            i = (e = Et(e, "lab"))[0],
            o = e[1],
            u = e[2];
          return (
            (r = (i + 16) / 116),
            (n = isNaN(o) ? r : r + o / 500),
            (a = isNaN(u) ? r : r - u / 200),
            (r = Ct.Yn * At(r)),
            (n = Ct.Xn * At(n)),
            (a = Ct.Zn * At(a)),
            [
              Pt(3.2404542 * n - 1.5371385 * r - 0.4985314 * a),
              Pt(-0.969266 * n + 1.8760108 * r + 0.041556 * a),
              Pt(0.0556434 * n - 0.2040259 * r + 1.0572252 * a),
              e.length > 3 ? e[3] : 1,
            ]
          );
        },
        Nt = c.unpack,
        It = c.type,
        Rt = b,
        Ot = v,
        Ft = f,
        Dt = kt;
      (Ot.prototype.lab = function () {
        return Dt(this._rgb);
      }),
        (Rt.lab = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Ot,
            [null].concat(e, ["lab"])
          ))();
        }),
        (Ft.format.lab = Mt),
        Ft.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Nt(e, "lab")), "array" === It(e) && 3 === e.length))
              return "lab";
          },
        });
      var Lt = c.unpack,
        Bt = c.RAD2DEG,
        jt = Math.sqrt,
        zt = Math.atan2,
        Ut = Math.round,
        Gt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Lt(e, "lab"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = jt(a * a + i * i),
            u = (zt(i, a) * Bt + 360) % 360;
          return 0 === Ut(1e4 * o) && (u = Number.NaN), [r, o, u];
        },
        Vt = c.unpack,
        $t = kt,
        Ht = Gt,
        Yt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Vt(e, "rgb"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = $t(r, a, i),
            u = o[0],
            l = o[1],
            s = o[2];
          return Ht(u, l, s);
        },
        Wt = c.unpack,
        qt = c.DEG2RAD,
        Kt = Math.sin,
        Qt = Math.cos,
        Jt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Wt(e, "lch"),
            r = n[0],
            a = n[1],
            i = n[2];
          return isNaN(i) && (i = 0), [r, Qt((i *= qt)) * a, Kt(i) * a];
        },
        Xt = c.unpack,
        Zt = Jt,
        en = Mt,
        tn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = Xt(e, "lch"))[0],
            r = e[1],
            a = e[2],
            i = Zt(n, r, a),
            o = i[0],
            u = i[1],
            l = i[2],
            s = en(o, u, l);
          return [s[0], s[1], s[2], e.length > 3 ? e[3] : 1];
        },
        nn = c.unpack,
        rn = tn,
        an = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = nn(e, "hcl").reverse();
          return rn.apply(void 0, n);
        },
        on = c.unpack,
        un = c.type,
        ln = b,
        sn = v,
        cn = f,
        fn = Yt;
      (sn.prototype.lch = function () {
        return fn(this._rgb);
      }),
        (sn.prototype.hcl = function () {
          return fn(this._rgb).reverse();
        }),
        (ln.lch = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            sn,
            [null].concat(e, ["lch"])
          ))();
        }),
        (ln.hcl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            sn,
            [null].concat(e, ["hcl"])
          ))();
        }),
        (cn.format.lch = tn),
        (cn.format.hcl = an),
        ["lch", "hcl"].forEach(function (e) {
          return cn.autodetect.push({
            p: 2,
            test: function () {
              for (var t = [], n = arguments.length; n--; ) t[n] = arguments[n];
              if (((t = on(t, e)), "array" === un(t) && 3 === t.length))
                return e;
            },
          });
        });
      var dn = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflower: "#6495ed",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          laserlemon: "#ffff54",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrod: "#fafad2",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          maroon2: "#7f0000",
          maroon3: "#b03060",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          purple2: "#7f007f",
          purple3: "#a020f0",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        },
        hn = f,
        pn = c.type,
        mn = dn,
        gn = Pe,
        vn = Ce;
      (v.prototype.name = function () {
        for (
          var e = vn(this._rgb, "rgb"), t = 0, n = Object.keys(mn);
          t < n.length;
          t += 1
        ) {
          var r = n[t];
          if (mn[r] === e) return r.toLowerCase();
        }
        return e;
      }),
        (hn.format.named = function (e) {
          if (((e = e.toLowerCase()), mn[e])) return gn(mn[e]);
          throw new Error("unknown color name: " + e);
        }),
        hn.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (!t.length && "string" === pn(e) && mn[e.toLowerCase()])
              return "named";
          },
        });
      var yn = c.unpack,
        bn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = yn(e, "rgb");
          return (n[0] << 16) + (n[1] << 8) + n[2];
        },
        _n = c.type,
        Sn = function (e) {
          if ("number" == _n(e) && e >= 0 && e <= 16777215)
            return [e >> 16, (e >> 8) & 255, 255 & e, 1];
          throw new Error("unknown num color: " + e);
        },
        wn = b,
        Tn = v,
        kn = f,
        Cn = c.type,
        En = bn;
      (Tn.prototype.num = function () {
        return En(this._rgb);
      }),
        (wn.num = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Tn,
            [null].concat(e, ["num"])
          ))();
        }),
        (kn.format.num = Sn),
        kn.autodetect.push({
          p: 5,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (
              1 === e.length &&
              "number" === Cn(e[0]) &&
              e[0] >= 0 &&
              e[0] <= 16777215
            )
              return "num";
          },
        });
      var xn = b,
        Pn = v,
        An = f,
        Mn = c.unpack,
        Nn = c.type,
        In = Math.round;
      (Pn.prototype.rgb = function (e) {
        return (
          void 0 === e && (e = !0),
          !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(In)
        );
      }),
        (Pn.prototype.rgba = function (e) {
          return (
            void 0 === e && (e = !0),
            this._rgb.slice(0, 4).map(function (t, n) {
              return n < 3 ? (!1 === e ? t : In(t)) : t;
            })
          );
        }),
        (xn.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Pn,
            [null].concat(e, ["rgb"])
          ))();
        }),
        (An.format.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Mn(e, "rgba");
          return void 0 === n[3] && (n[3] = 1), n;
        }),
        An.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (
              ((e = Mn(e, "rgba")),
              "array" === Nn(e) &&
                (3 === e.length ||
                  (4 === e.length &&
                    "number" == Nn(e[3]) &&
                    e[3] >= 0 &&
                    e[3] <= 1)))
            )
              return "rgb";
          },
        });
      var Rn = Math.log,
        On = function (e) {
          var t,
            n,
            r,
            a = e / 100;
          return (
            a < 66
              ? ((t = 255),
                (n =
                  a < 6
                    ? 0
                    : -155.25485562709179 -
                      0.44596950469579133 * (n = a - 2) +
                      104.49216199393888 * Rn(n)),
                (r =
                  a < 20
                    ? 0
                    : 0.8274096064007395 * (r = a - 10) -
                      254.76935184120902 +
                      115.67994401066147 * Rn(r)))
              : ((t =
                  351.97690566805693 +
                  0.114206453784165 * (t = a - 55) -
                  40.25366309332127 * Rn(t)),
                (n =
                  325.4494125711974 +
                  0.07943456536662342 * (n = a - 50) -
                  28.0852963507957 * Rn(n)),
                (r = 255)),
            [t, n, r, 1]
          );
        },
        Fn = On,
        Dn = c.unpack,
        Ln = Math.round,
        Bn = b,
        jn = v,
        zn = f,
        Un = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (
            var n, r = Dn(e, "rgb"), a = r[0], i = r[2], o = 1e3, u = 4e4;
            u - o > 0.4;

          ) {
            var l = Fn((n = 0.5 * (u + o)));
            l[2] / l[0] >= i / a ? (u = n) : (o = n);
          }
          return Ln(n);
        };
      (jn.prototype.temp =
        jn.prototype.kelvin =
        jn.prototype.temperature =
          function () {
            return Un(this._rgb);
          }),
        (Bn.temp =
          Bn.kelvin =
          Bn.temperature =
            function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(
                jn,
                [null].concat(e, ["temp"])
              ))();
            }),
        (zn.format.temp = zn.format.kelvin = zn.format.temperature = On);
      var Gn = c.unpack,
        Vn = Math.cbrt,
        $n = Math.pow,
        Hn = Math.sign,
        Yn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Gn(e, "rgb"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = [Wn(r / 255), Wn(a / 255), Wn(i / 255)],
            u = o[0],
            l = o[1],
            s = o[2],
            c = Vn(0.4122214708 * u + 0.5363325363 * l + 0.0514459929 * s),
            f = Vn(0.2119034982 * u + 0.6806995451 * l + 0.1073969566 * s),
            d = Vn(0.0883024619 * u + 0.2817188376 * l + 0.6299787005 * s);
          return [
            0.2104542553 * c + 0.793617785 * f - 0.0040720468 * d,
            1.9779984951 * c - 2.428592205 * f + 0.4505937099 * d,
            0.0259040371 * c + 0.7827717662 * f - 0.808675766 * d,
          ];
        };
      function Wn(e) {
        var t = Math.abs(e);
        return t < 0.04045
          ? e / 12.92
          : (Hn(e) || 1) * $n((t + 0.055) / 1.055, 2.4);
      }
      var qn = c.unpack,
        Kn = Math.pow,
        Qn = Math.sign,
        Jn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = qn(e, "lab"))[0],
            r = e[1],
            a = e[2],
            i = Kn(n + 0.3963377774 * r + 0.2158037573 * a, 3),
            o = Kn(n - 0.1055613458 * r - 0.0638541728 * a, 3),
            u = Kn(n - 0.0894841775 * r - 1.291485548 * a, 3);
          return [
            255 * Xn(4.0767416621 * i - 3.3077115913 * o + 0.2309699292 * u),
            255 * Xn(-1.2684380046 * i + 2.6097574011 * o - 0.3413193965 * u),
            255 * Xn(-0.0041960863 * i - 0.7034186147 * o + 1.707614701 * u),
            e.length > 3 ? e[3] : 1,
          ];
        };
      function Xn(e) {
        var t = Math.abs(e);
        return t > 0.0031308
          ? (Qn(e) || 1) * (1.055 * Kn(t, 1 / 2.4) - 0.055)
          : 12.92 * e;
      }
      var Zn = c.unpack,
        er = c.type,
        tr = b,
        nr = v,
        rr = f,
        ar = Yn;
      (nr.prototype.oklab = function () {
        return ar(this._rgb);
      }),
        (tr.oklab = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            nr,
            [null].concat(e, ["oklab"])
          ))();
        }),
        (rr.format.oklab = Jn),
        rr.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Zn(e, "oklab")), "array" === er(e) && 3 === e.length))
              return "oklab";
          },
        });
      var ir = c.unpack,
        or = Yn,
        ur = Gt,
        lr = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = ir(e, "rgb"),
            r = n[0],
            a = n[1],
            i = n[2],
            o = or(r, a, i),
            u = o[0],
            l = o[1],
            s = o[2];
          return ur(u, l, s);
        },
        sr = c.unpack,
        cr = Jt,
        fr = Jn,
        dr = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = sr(e, "lch"))[0],
            r = e[1],
            a = e[2],
            i = cr(n, r, a),
            o = i[0],
            u = i[1],
            l = i[2],
            s = fr(o, u, l);
          return [s[0], s[1], s[2], e.length > 3 ? e[3] : 1];
        },
        hr = c.unpack,
        pr = c.type,
        mr = b,
        gr = v,
        vr = f,
        yr = lr;
      (gr.prototype.oklch = function () {
        return yr(this._rgb);
      }),
        (mr.oklch = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            gr,
            [null].concat(e, ["oklch"])
          ))();
        }),
        (vr.format.oklch = dr),
        vr.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = hr(e, "oklch")), "array" === pr(e) && 3 === e.length))
              return "oklch";
          },
        });
      var br = v,
        _r = c.type;
      (br.prototype.alpha = function (e, t) {
        return (
          void 0 === t && (t = !1),
          void 0 !== e && "number" === _r(e)
            ? t
              ? ((this._rgb[3] = e), this)
              : new br([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3]
        );
      }),
        (v.prototype.clipped = function () {
          return this._rgb._clipped || !1;
        });
      var Sr = v,
        wr = vt;
      (Sr.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this.lab();
        return (t[0] -= wr.Kn * e), new Sr(t, "lab").alpha(this.alpha(), !0);
      }),
        (Sr.prototype.brighten = function (e) {
          return void 0 === e && (e = 1), this.darken(-e);
        }),
        (Sr.prototype.darker = Sr.prototype.darken),
        (Sr.prototype.brighter = Sr.prototype.brighten),
        (v.prototype.get = function (e) {
          var t = e.split("."),
            n = t[0],
            r = t[1],
            a = this[n]();
          if (r) {
            var i = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
            if (i > -1) return a[i];
            throw new Error("unknown channel " + r + " in mode " + n);
          }
          return a;
        });
      var Tr = v,
        kr = c.type,
        Cr = Math.pow;
      Tr.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === kr(e)) {
          if (0 === e) return new Tr([0, 0, 0, this._rgb[3]], "rgb");
          if (1 === e) return new Tr([255, 255, 255, this._rgb[3]], "rgb");
          var t = this.luminance(),
            n = 20,
            r = function (t, a) {
              var i = t.interpolate(a, 0.5, "rgb"),
                o = i.luminance();
              return Math.abs(e - o) < 1e-7 || !n--
                ? i
                : o > e
                ? r(t, i)
                : r(i, a);
            },
            a = (
              t > e
                ? r(new Tr([0, 0, 0]), this)
                : r(this, new Tr([255, 255, 255]))
            ).rgb();
          return new Tr(a.concat([this._rgb[3]]));
        }
        return Er.apply(void 0, this._rgb.slice(0, 3));
      };
      var Er = function (e, t, n) {
          return 0.2126 * (e = xr(e)) + 0.7152 * (t = xr(t)) + 0.0722 * xr(n);
        },
        xr = function (e) {
          return (e /= 255) <= 0.03928
            ? e / 12.92
            : Cr((e + 0.055) / 1.055, 2.4);
        },
        Pr = {},
        Ar = v,
        Mr = c.type,
        Nr = Pr,
        Ir = function (e, t, n) {
          void 0 === n && (n = 0.5);
          for (var r = [], a = arguments.length - 3; a-- > 0; )
            r[a] = arguments[a + 3];
          var i = r[0] || "lrgb";
          if ((Nr[i] || r.length || (i = Object.keys(Nr)[0]), !Nr[i]))
            throw new Error("interpolation mode " + i + " is not defined");
          return (
            "object" !== Mr(e) && (e = new Ar(e)),
            "object" !== Mr(t) && (t = new Ar(t)),
            Nr[i](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
          );
        },
        Rr = v,
        Or = Ir;
      Rr.prototype.mix = Rr.prototype.interpolate = function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0; )
          n[r] = arguments[r + 2];
        return Or.apply(void 0, [this, e, t].concat(n));
      };
      var Fr = v;
      Fr.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
          n = t[3];
        return e
          ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
          : new Fr([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
      };
      var Dr = v,
        Lr = vt;
      (Dr.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this.lch();
        return (
          (t[1] += Lr.Kn * e),
          t[1] < 0 && (t[1] = 0),
          new Dr(t, "lch").alpha(this.alpha(), !0)
        );
      }),
        (Dr.prototype.desaturate = function (e) {
          return void 0 === e && (e = 1), this.saturate(-e);
        });
      var Br = v,
        jr = c.type;
      Br.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
          a = r[0],
          i = r[1],
          o = this[a]();
        if (i) {
          var u = a.indexOf(i) - ("ok" === a.substr(0, 2) ? 2 : 0);
          if (u > -1) {
            if ("string" == jr(t))
              switch (t.charAt(0)) {
                case "+":
                case "-":
                  o[u] += +t;
                  break;
                case "*":
                  o[u] *= +t.substr(1);
                  break;
                case "/":
                  o[u] /= +t.substr(1);
                  break;
                default:
                  o[u] = +t;
              }
            else {
              if ("number" !== jr(t))
                throw new Error("unsupported value for Color.set");
              o[u] = t;
            }
            var l = new Br(o, a);
            return n ? ((this._rgb = l._rgb), this) : l;
          }
          throw new Error("unknown channel " + i + " in mode " + a);
        }
        return o;
      };
      var zr = v;
      Pr.rgb = function (e, t, n) {
        var r = e._rgb,
          a = t._rgb;
        return new zr(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "rgb"
        );
      };
      var Ur = v,
        Gr = Math.sqrt,
        Vr = Math.pow;
      Pr.lrgb = function (e, t, n) {
        var r = e._rgb,
          a = r[0],
          i = r[1],
          o = r[2],
          u = t._rgb,
          l = u[0],
          s = u[1],
          c = u[2];
        return new Ur(
          Gr(Vr(a, 2) * (1 - n) + Vr(l, 2) * n),
          Gr(Vr(i, 2) * (1 - n) + Vr(s, 2) * n),
          Gr(Vr(o, 2) * (1 - n) + Vr(c, 2) * n),
          "rgb"
        );
      };
      var $r = v;
      Pr.lab = function (e, t, n) {
        var r = e.lab(),
          a = t.lab();
        return new $r(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "lab"
        );
      };
      var Hr = v,
        Yr = function (e, t, n, r) {
          var a, i, o, u, l, s, c, f, d, h, p, m, g;
          return (
            "hsl" === r
              ? ((o = e.hsl()), (u = t.hsl()))
              : "hsv" === r
              ? ((o = e.hsv()), (u = t.hsv()))
              : "hcg" === r
              ? ((o = e.hcg()), (u = t.hcg()))
              : "hsi" === r
              ? ((o = e.hsi()), (u = t.hsi()))
              : "lch" === r || "hcl" === r
              ? ((r = "hcl"), (o = e.hcl()), (u = t.hcl()))
              : "oklch" === r &&
                ((o = e.oklch().reverse()), (u = t.oklch().reverse())),
            ("h" !== r.substr(0, 1) && "oklch" !== r) ||
              ((l = (a = o)[0]),
              (c = a[1]),
              (d = a[2]),
              (s = (i = u)[0]),
              (f = i[1]),
              (h = i[2])),
            isNaN(l) || isNaN(s)
              ? isNaN(l)
                ? isNaN(s)
                  ? (m = Number.NaN)
                  : ((m = s), (1 != d && 0 != d) || "hsv" == r || (p = f))
                : ((m = l), (1 != h && 0 != h) || "hsv" == r || (p = c))
              : (m =
                  l +
                  n *
                    (s > l && s - l > 180
                      ? s - (l + 360)
                      : s < l && l - s > 180
                      ? s + 360 - l
                      : s - l)),
            void 0 === p && (p = c + n * (f - c)),
            (g = d + n * (h - d)),
            new Hr("oklch" === r ? [g, p, m] : [m, p, g], r)
          );
        },
        Wr = Yr,
        qr = function (e, t, n) {
          return Wr(e, t, n, "lch");
        };
      (Pr.lch = qr), (Pr.hcl = qr);
      var Kr = v;
      Pr.num = function (e, t, n) {
        var r = e.num(),
          a = t.num();
        return new Kr(r + n * (a - r), "num");
      };
      var Qr = Yr;
      Pr.hcg = function (e, t, n) {
        return Qr(e, t, n, "hcg");
      };
      var Jr = Yr;
      Pr.hsi = function (e, t, n) {
        return Jr(e, t, n, "hsi");
      };
      var Xr = Yr;
      Pr.hsl = function (e, t, n) {
        return Xr(e, t, n, "hsl");
      };
      var Zr = Yr;
      Pr.hsv = function (e, t, n) {
        return Zr(e, t, n, "hsv");
      };
      var ea = v;
      Pr.oklab = function (e, t, n) {
        var r = e.oklab(),
          a = t.oklab();
        return new ea(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "oklab"
        );
      };
      var ta = Yr;
      Pr.oklch = function (e, t, n) {
        return ta(e, t, n, "oklch");
      };
      var na = v,
        ra = c.clip_rgb,
        aa = Math.pow,
        ia = Math.sqrt,
        oa = Math.PI,
        ua = Math.cos,
        la = Math.sin,
        sa = Math.atan2,
        ca = function (e, t) {
          for (var n = e.length, r = [0, 0, 0, 0], a = 0; a < e.length; a++) {
            var i = e[a],
              o = t[a] / n,
              u = i._rgb;
            (r[0] += aa(u[0], 2) * o),
              (r[1] += aa(u[1], 2) * o),
              (r[2] += aa(u[2], 2) * o),
              (r[3] += u[3] * o);
          }
          return (
            (r[0] = ia(r[0])),
            (r[1] = ia(r[1])),
            (r[2] = ia(r[2])),
            r[3] > 0.9999999 && (r[3] = 1),
            new na(ra(r))
          );
        },
        fa = b,
        da = c.type,
        ha = Math.pow,
        pa = function (e) {
          var t = "rgb",
            n = fa("#ccc"),
            r = 0,
            a = [0, 1],
            i = [],
            o = [0, 0],
            u = !1,
            l = [],
            s = !1,
            c = 0,
            f = 1,
            d = !1,
            h = {},
            p = !0,
            m = 1,
            g = function (e) {
              if (
                ((e = e || ["#fff", "#000"]) &&
                  "string" === da(e) &&
                  fa.brewer &&
                  fa.brewer[e.toLowerCase()] &&
                  (e = fa.brewer[e.toLowerCase()]),
                "array" === da(e))
              ) {
                1 === e.length && (e = [e[0], e[0]]), (e = e.slice(0));
                for (var t = 0; t < e.length; t++) e[t] = fa(e[t]);
                i.length = 0;
                for (var n = 0; n < e.length; n++) i.push(n / (e.length - 1));
              }
              return _(), (l = e);
            },
            v = function (e) {
              return e;
            },
            y = function (e) {
              return e;
            },
            b = function (e, r) {
              var a, s;
              if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
              (s = r
                ? e
                : u && u.length > 2
                ? (function (e) {
                    if (null != u) {
                      for (var t = u.length - 1, n = 0; n < t && e >= u[n]; )
                        n++;
                      return n - 1;
                    }
                    return 0;
                  })(e) /
                  (u.length - 2)
                : f !== c
                ? (e - c) / (f - c)
                : 1),
                (s = y(s)),
                r || (s = v(s)),
                1 !== m && (s = ha(s, m)),
                (s = o[0] + s * (1 - o[0] - o[1])),
                (s = Math.min(1, Math.max(0, s)));
              var d = Math.floor(1e4 * s);
              if (p && h[d]) a = h[d];
              else {
                if ("array" === da(l))
                  for (var g = 0; g < i.length; g++) {
                    var b = i[g];
                    if (s <= b) {
                      a = l[g];
                      break;
                    }
                    if (s >= b && g === i.length - 1) {
                      a = l[g];
                      break;
                    }
                    if (s > b && s < i[g + 1]) {
                      (s = (s - b) / (i[g + 1] - b)),
                        (a = fa.interpolate(l[g], l[g + 1], s, t));
                      break;
                    }
                  }
                else "function" === da(l) && (a = l(s));
                p && (h[d] = a);
              }
              return a;
            },
            _ = function () {
              return (h = {});
            };
          g(e);
          var S = function (e) {
            var t = fa(b(e));
            return s && t[s] ? t[s]() : t;
          };
          return (
            (S.classes = function (e) {
              if (null != e) {
                if ("array" === da(e)) (u = e), (a = [e[0], e[e.length - 1]]);
                else {
                  var t = fa.analyze(a);
                  u = 0 === e ? [t.min, t.max] : fa.limits(t, "e", e);
                }
                return S;
              }
              return u;
            }),
            (S.domain = function (e) {
              if (!arguments.length) return a;
              (c = e[0]), (f = e[e.length - 1]), (i = []);
              var t = l.length;
              if (e.length === t && c !== f)
                for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                  var o = r[n];
                  i.push((o - c) / (f - c));
                }
              else {
                for (var u = 0; u < t; u++) i.push(u / (t - 1));
                if (e.length > 2) {
                  var s = e.map(function (t, n) {
                      return n / (e.length - 1);
                    }),
                    d = e.map(function (e) {
                      return (e - c) / (f - c);
                    });
                  d.every(function (e, t) {
                    return s[t] === e;
                  }) ||
                    (y = function (e) {
                      if (e <= 0 || e >= 1) return e;
                      for (var t = 0; e >= d[t + 1]; ) t++;
                      var n = (e - d[t]) / (d[t + 1] - d[t]);
                      return s[t] + n * (s[t + 1] - s[t]);
                    });
                }
              }
              return (a = [c, f]), S;
            }),
            (S.mode = function (e) {
              return arguments.length ? ((t = e), _(), S) : t;
            }),
            (S.range = function (e, t) {
              return g(e), S;
            }),
            (S.out = function (e) {
              return (s = e), S;
            }),
            (S.spread = function (e) {
              return arguments.length ? ((r = e), S) : r;
            }),
            (S.correctLightness = function (e) {
              return (
                null == e && (e = !0),
                (d = e),
                _(),
                (v = d
                  ? function (e) {
                      for (
                        var t = b(0, !0).lab()[0],
                          n = b(1, !0).lab()[0],
                          r = t > n,
                          a = b(e, !0).lab()[0],
                          i = t + (n - t) * e,
                          o = a - i,
                          u = 0,
                          l = 1,
                          s = 20;
                        Math.abs(o) > 0.01 && s-- > 0;

                      )
                        r && (o *= -1),
                          o < 0
                            ? ((u = e), (e += 0.5 * (l - e)))
                            : ((l = e), (e += 0.5 * (u - e))),
                          (o = (a = b(e, !0).lab()[0]) - i);
                      return e;
                    }
                  : function (e) {
                      return e;
                    }),
                S
              );
            }),
            (S.padding = function (e) {
              return null != e
                ? ("number" === da(e) && (e = [e, e]), (o = e), S)
                : o;
            }),
            (S.colors = function (t, n) {
              arguments.length < 2 && (n = "hex");
              var r = [];
              if (0 === arguments.length) r = l.slice(0);
              else if (1 === t) r = [S(0.5)];
              else if (t > 1) {
                var i = a[0],
                  o = a[1] - i;
                r = (function (e, t, n) {
                  for (
                    var r = [],
                      a = e < t,
                      i = n ? (a ? t + 1 : t - 1) : t,
                      o = e;
                    a ? o < i : o > i;
                    a ? o++ : o--
                  )
                    r.push(o);
                  return r;
                })(0, t, !1).map(function (e) {
                  return S(i + (e / (t - 1)) * o);
                });
              } else {
                e = [];
                var s = [];
                if (u && u.length > 2)
                  for (
                    var c = 1, f = u.length, d = 1 <= f;
                    d ? c < f : c > f;
                    d ? c++ : c--
                  )
                    s.push(0.5 * (u[c - 1] + u[c]));
                else s = a;
                r = s.map(function (e) {
                  return S(e);
                });
              }
              return (
                fa[n] &&
                  (r = r.map(function (e) {
                    return e[n]();
                  })),
                r
              );
            }),
            (S.cache = function (e) {
              return null != e ? ((p = e), S) : p;
            }),
            (S.gamma = function (e) {
              return null != e ? ((m = e), S) : m;
            }),
            (S.nodata = function (e) {
              return null != e ? ((n = fa(e)), S) : n;
            }),
            S
          );
        };
      var ma = v,
        ga = pa,
        va = b,
        ya = function (e, t, n) {
          if (!ya[n]) throw new Error("unknown blend mode " + n);
          return ya[n](e, t);
        },
        ba = function (e) {
          return function (t, n) {
            var r = va(n).rgb(),
              a = va(t).rgb();
            return va.rgb(e(r, a));
          };
        },
        _a = function (e) {
          return function (t, n) {
            var r = [];
            return (
              (r[0] = e(t[0], n[0])),
              (r[1] = e(t[1], n[1])),
              (r[2] = e(t[2], n[2])),
              r
            );
          };
        };
      (ya.normal = ba(
        _a(function (e) {
          return e;
        })
      )),
        (ya.multiply = ba(
          _a(function (e, t) {
            return (e * t) / 255;
          })
        )),
        (ya.screen = ba(
          _a(function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
          })
        )),
        (ya.overlay = ba(
          _a(function (e, t) {
            return t < 128
              ? (2 * e * t) / 255
              : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
          })
        )),
        (ya.darken = ba(
          _a(function (e, t) {
            return e > t ? t : e;
          })
        )),
        (ya.lighten = ba(
          _a(function (e, t) {
            return e > t ? e : t;
          })
        )),
        (ya.dodge = ba(
          _a(function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255
              ? 255
              : e;
          })
        )),
        (ya.burn = ba(
          _a(function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
          })
        ));
      for (
        var Sa = ya,
          wa = c.type,
          Ta = c.clip_rgb,
          ka = c.TWOPI,
          Ca = Math.pow,
          Ea = Math.sin,
          xa = Math.cos,
          Pa = b,
          Aa = v,
          Ma = Math.floor,
          Na = Math.random,
          Ia = o,
          Ra = Math.log,
          Oa = Math.pow,
          Fa = Math.floor,
          Da = Math.abs,
          La = function (e, t) {
            void 0 === t && (t = null);
            var n = {
              min: Number.MAX_VALUE,
              max: -1 * Number.MAX_VALUE,
              sum: 0,
              values: [],
              count: 0,
            };
            return (
              "object" === Ia(e) && (e = Object.values(e)),
              e.forEach(function (e) {
                t && "object" === Ia(e) && (e = e[t]),
                  null == e ||
                    isNaN(e) ||
                    (n.values.push(e),
                    (n.sum += e),
                    e < n.min && (n.min = e),
                    e > n.max && (n.max = e),
                    (n.count += 1));
              }),
              (n.domain = [n.min, n.max]),
              (n.limits = function (e, t) {
                return Ba(n, e, t);
              }),
              n
            );
          },
          Ba = function (e, t, n) {
            void 0 === t && (t = "equal"),
              void 0 === n && (n = 7),
              "array" == Ia(e) && (e = La(e));
            var r = e.min,
              a = e.max,
              i = e.values.sort(function (e, t) {
                return e - t;
              });
            if (1 === n) return [r, a];
            var o = [];
            if (
              ("c" === t.substr(0, 1) && (o.push(r), o.push(a)),
              "e" === t.substr(0, 1))
            ) {
              o.push(r);
              for (var u = 1; u < n; u++) o.push(r + (u / n) * (a - r));
              o.push(a);
            } else if ("l" === t.substr(0, 1)) {
              if (r <= 0)
                throw new Error(
                  "Logarithmic scales are only possible for values > 0"
                );
              var l = Math.LOG10E * Ra(r),
                s = Math.LOG10E * Ra(a);
              o.push(r);
              for (var c = 1; c < n; c++) o.push(Oa(10, l + (c / n) * (s - l)));
              o.push(a);
            } else if ("q" === t.substr(0, 1)) {
              o.push(r);
              for (var f = 1; f < n; f++) {
                var d = ((i.length - 1) * f) / n,
                  h = Fa(d);
                if (h === d) o.push(i[h]);
                else {
                  var p = d - h;
                  o.push(i[h] * (1 - p) + i[h + 1] * p);
                }
              }
              o.push(a);
            } else if ("k" === t.substr(0, 1)) {
              var m,
                g = i.length,
                v = new Array(g),
                y = new Array(n),
                b = !0,
                _ = 0,
                S = null;
              (S = []).push(r);
              for (var w = 1; w < n; w++) S.push(r + (w / n) * (a - r));
              for (S.push(a); b; ) {
                for (var T = 0; T < n; T++) y[T] = 0;
                for (var k = 0; k < g; k++)
                  for (
                    var C = i[k], E = Number.MAX_VALUE, x = void 0, P = 0;
                    P < n;
                    P++
                  ) {
                    var A = Da(S[P] - C);
                    A < E && ((E = A), (x = P)), y[x]++, (v[k] = x);
                  }
                for (var M = new Array(n), N = 0; N < n; N++) M[N] = null;
                for (var I = 0; I < g; I++)
                  null === M[(m = v[I])] ? (M[m] = i[I]) : (M[m] += i[I]);
                for (var R = 0; R < n; R++) M[R] *= 1 / y[R];
                b = !1;
                for (var O = 0; O < n; O++)
                  if (M[O] !== S[O]) {
                    b = !0;
                    break;
                  }
                (S = M), ++_ > 200 && (b = !1);
              }
              for (var F = {}, D = 0; D < n; D++) F[D] = [];
              for (var L = 0; L < g; L++) F[(m = v[L])].push(i[L]);
              for (var B = [], j = 0; j < n; j++)
                B.push(F[j][0]), B.push(F[j][F[j].length - 1]);
              (B = B.sort(function (e, t) {
                return e - t;
              })),
                o.push(B[0]);
              for (var z = 1; z < B.length; z += 2) {
                var U = B[z];
                isNaN(U) || -1 !== o.indexOf(U) || o.push(U);
              }
            }
            return o;
          },
          ja = { analyze: La, limits: Ba },
          za = v,
          Ua = v,
          Ga = Math.sqrt,
          Va = Math.pow,
          $a = Math.min,
          Ha = Math.max,
          Ya = Math.atan2,
          Wa = Math.abs,
          qa = Math.cos,
          Ka = Math.sin,
          Qa = Math.exp,
          Ja = Math.PI,
          Xa = v,
          Za = v,
          ei = b,
          ti = pa,
          ni = {
            cool: function () {
              return ti([ei.hsl(180, 1, 0.9), ei.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
              return ti(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
            },
          },
          ri = {
            OrRd: [
              "#fff7ec",
              "#fee8c8",
              "#fdd49e",
              "#fdbb84",
              "#fc8d59",
              "#ef6548",
              "#d7301f",
              "#b30000",
              "#7f0000",
            ],
            PuBu: [
              "#fff7fb",
              "#ece7f2",
              "#d0d1e6",
              "#a6bddb",
              "#74a9cf",
              "#3690c0",
              "#0570b0",
              "#045a8d",
              "#023858",
            ],
            BuPu: [
              "#f7fcfd",
              "#e0ecf4",
              "#bfd3e6",
              "#9ebcda",
              "#8c96c6",
              "#8c6bb1",
              "#88419d",
              "#810f7c",
              "#4d004b",
            ],
            Oranges: [
              "#fff5eb",
              "#fee6ce",
              "#fdd0a2",
              "#fdae6b",
              "#fd8d3c",
              "#f16913",
              "#d94801",
              "#a63603",
              "#7f2704",
            ],
            BuGn: [
              "#f7fcfd",
              "#e5f5f9",
              "#ccece6",
              "#99d8c9",
              "#66c2a4",
              "#41ae76",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlOrBr: [
              "#ffffe5",
              "#fff7bc",
              "#fee391",
              "#fec44f",
              "#fe9929",
              "#ec7014",
              "#cc4c02",
              "#993404",
              "#662506",
            ],
            YlGn: [
              "#ffffe5",
              "#f7fcb9",
              "#d9f0a3",
              "#addd8e",
              "#78c679",
              "#41ab5d",
              "#238443",
              "#006837",
              "#004529",
            ],
            Reds: [
              "#fff5f0",
              "#fee0d2",
              "#fcbba1",
              "#fc9272",
              "#fb6a4a",
              "#ef3b2c",
              "#cb181d",
              "#a50f15",
              "#67000d",
            ],
            RdPu: [
              "#fff7f3",
              "#fde0dd",
              "#fcc5c0",
              "#fa9fb5",
              "#f768a1",
              "#dd3497",
              "#ae017e",
              "#7a0177",
              "#49006a",
            ],
            Greens: [
              "#f7fcf5",
              "#e5f5e0",
              "#c7e9c0",
              "#a1d99b",
              "#74c476",
              "#41ab5d",
              "#238b45",
              "#006d2c",
              "#00441b",
            ],
            YlGnBu: [
              "#ffffd9",
              "#edf8b1",
              "#c7e9b4",
              "#7fcdbb",
              "#41b6c4",
              "#1d91c0",
              "#225ea8",
              "#253494",
              "#081d58",
            ],
            Purples: [
              "#fcfbfd",
              "#efedf5",
              "#dadaeb",
              "#bcbddc",
              "#9e9ac8",
              "#807dba",
              "#6a51a3",
              "#54278f",
              "#3f007d",
            ],
            GnBu: [
              "#f7fcf0",
              "#e0f3db",
              "#ccebc5",
              "#a8ddb5",
              "#7bccc4",
              "#4eb3d3",
              "#2b8cbe",
              "#0868ac",
              "#084081",
            ],
            Greys: [
              "#ffffff",
              "#f0f0f0",
              "#d9d9d9",
              "#bdbdbd",
              "#969696",
              "#737373",
              "#525252",
              "#252525",
              "#000000",
            ],
            YlOrRd: [
              "#ffffcc",
              "#ffeda0",
              "#fed976",
              "#feb24c",
              "#fd8d3c",
              "#fc4e2a",
              "#e31a1c",
              "#bd0026",
              "#800026",
            ],
            PuRd: [
              "#f7f4f9",
              "#e7e1ef",
              "#d4b9da",
              "#c994c7",
              "#df65b0",
              "#e7298a",
              "#ce1256",
              "#980043",
              "#67001f",
            ],
            Blues: [
              "#f7fbff",
              "#deebf7",
              "#c6dbef",
              "#9ecae1",
              "#6baed6",
              "#4292c6",
              "#2171b5",
              "#08519c",
              "#08306b",
            ],
            PuBuGn: [
              "#fff7fb",
              "#ece2f0",
              "#d0d1e6",
              "#a6bddb",
              "#67a9cf",
              "#3690c0",
              "#02818a",
              "#016c59",
              "#014636",
            ],
            Viridis: [
              "#440154",
              "#482777",
              "#3f4a8a",
              "#31678e",
              "#26838f",
              "#1f9d8a",
              "#6cce5a",
              "#b6de2b",
              "#fee825",
            ],
            Spectral: [
              "#9e0142",
              "#d53e4f",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#e6f598",
              "#abdda4",
              "#66c2a5",
              "#3288bd",
              "#5e4fa2",
            ],
            RdYlGn: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee08b",
              "#ffffbf",
              "#d9ef8b",
              "#a6d96a",
              "#66bd63",
              "#1a9850",
              "#006837",
            ],
            RdBu: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#f7f7f7",
              "#d1e5f0",
              "#92c5de",
              "#4393c3",
              "#2166ac",
              "#053061",
            ],
            PiYG: [
              "#8e0152",
              "#c51b7d",
              "#de77ae",
              "#f1b6da",
              "#fde0ef",
              "#f7f7f7",
              "#e6f5d0",
              "#b8e186",
              "#7fbc41",
              "#4d9221",
              "#276419",
            ],
            PRGn: [
              "#40004b",
              "#762a83",
              "#9970ab",
              "#c2a5cf",
              "#e7d4e8",
              "#f7f7f7",
              "#d9f0d3",
              "#a6dba0",
              "#5aae61",
              "#1b7837",
              "#00441b",
            ],
            RdYlBu: [
              "#a50026",
              "#d73027",
              "#f46d43",
              "#fdae61",
              "#fee090",
              "#ffffbf",
              "#e0f3f8",
              "#abd9e9",
              "#74add1",
              "#4575b4",
              "#313695",
            ],
            BrBG: [
              "#543005",
              "#8c510a",
              "#bf812d",
              "#dfc27d",
              "#f6e8c3",
              "#f5f5f5",
              "#c7eae5",
              "#80cdc1",
              "#35978f",
              "#01665e",
              "#003c30",
            ],
            RdGy: [
              "#67001f",
              "#b2182b",
              "#d6604d",
              "#f4a582",
              "#fddbc7",
              "#ffffff",
              "#e0e0e0",
              "#bababa",
              "#878787",
              "#4d4d4d",
              "#1a1a1a",
            ],
            PuOr: [
              "#7f3b08",
              "#b35806",
              "#e08214",
              "#fdb863",
              "#fee0b6",
              "#f7f7f7",
              "#d8daeb",
              "#b2abd2",
              "#8073ac",
              "#542788",
              "#2d004b",
            ],
            Set2: [
              "#66c2a5",
              "#fc8d62",
              "#8da0cb",
              "#e78ac3",
              "#a6d854",
              "#ffd92f",
              "#e5c494",
              "#b3b3b3",
            ],
            Accent: [
              "#7fc97f",
              "#beaed4",
              "#fdc086",
              "#ffff99",
              "#386cb0",
              "#f0027f",
              "#bf5b17",
              "#666666",
            ],
            Set1: [
              "#e41a1c",
              "#377eb8",
              "#4daf4a",
              "#984ea3",
              "#ff7f00",
              "#ffff33",
              "#a65628",
              "#f781bf",
              "#999999",
            ],
            Set3: [
              "#8dd3c7",
              "#ffffb3",
              "#bebada",
              "#fb8072",
              "#80b1d3",
              "#fdb462",
              "#b3de69",
              "#fccde5",
              "#d9d9d9",
              "#bc80bd",
              "#ccebc5",
              "#ffed6f",
            ],
            Dark2: [
              "#1b9e77",
              "#d95f02",
              "#7570b3",
              "#e7298a",
              "#66a61e",
              "#e6ab02",
              "#a6761d",
              "#666666",
            ],
            Paired: [
              "#a6cee3",
              "#1f78b4",
              "#b2df8a",
              "#33a02c",
              "#fb9a99",
              "#e31a1c",
              "#fdbf6f",
              "#ff7f00",
              "#cab2d6",
              "#6a3d9a",
              "#ffff99",
              "#b15928",
            ],
            Pastel2: [
              "#b3e2cd",
              "#fdcdac",
              "#cbd5e8",
              "#f4cae4",
              "#e6f5c9",
              "#fff2ae",
              "#f1e2cc",
              "#cccccc",
            ],
            Pastel1: [
              "#fbb4ae",
              "#b3cde3",
              "#ccebc5",
              "#decbe4",
              "#fed9a6",
              "#ffffcc",
              "#e5d8bd",
              "#fddaec",
              "#f2f2f2",
            ],
          },
          ai = 0,
          ii = Object.keys(ri);
        ai < ii.length;
        ai += 1
      ) {
        var oi = ii[ai];
        ri[oi.toLowerCase()] = ri[oi];
      }
      var ui = ri,
        li = b;
      return (
        (li.average = function (e, t, n) {
          void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
          var r = e.length;
          n ||
            (n = Array.from(new Array(r)).map(function () {
              return 1;
            }));
          var a =
            r /
            n.reduce(function (e, t) {
              return e + t;
            });
          if (
            (n.forEach(function (e, t) {
              n[t] *= a;
            }),
            (e = e.map(function (e) {
              return new na(e);
            })),
            "lrgb" === t)
          )
            return ca(e, n);
          for (
            var i = e.shift(), o = i.get(t), u = [], l = 0, s = 0, c = 0;
            c < o.length;
            c++
          )
            if (
              ((o[c] = (o[c] || 0) * n[0]),
              u.push(isNaN(o[c]) ? 0 : n[0]),
              "h" === t.charAt(c) && !isNaN(o[c]))
            ) {
              var f = (o[c] / 180) * oa;
              (l += ua(f) * n[0]), (s += la(f) * n[0]);
            }
          var d = i.alpha() * n[0];
          e.forEach(function (e, r) {
            var a = e.get(t);
            d += e.alpha() * n[r + 1];
            for (var i = 0; i < o.length; i++)
              if (!isNaN(a[i]))
                if (((u[i] += n[r + 1]), "h" === t.charAt(i))) {
                  var c = (a[i] / 180) * oa;
                  (l += ua(c) * n[r + 1]), (s += la(c) * n[r + 1]);
                } else o[i] += a[i] * n[r + 1];
          });
          for (var h = 0; h < o.length; h++)
            if ("h" === t.charAt(h)) {
              for (var p = (sa(s / u[h], l / u[h]) / oa) * 180; p < 0; )
                p += 360;
              for (; p >= 360; ) p -= 360;
              o[h] = p;
            } else o[h] = o[h] / u[h];
          return (d /= r), new na(o, t).alpha(d > 0.99999 ? 1 : d, !0);
        }),
        (li.bezier = function (e) {
          var t = (function (e) {
            var t, n, r, a, i, o, u;
            if (
              2 ===
              (e = e.map(function (e) {
                return new ma(e);
              })).length
            )
              (t = e.map(function (e) {
                return e.lab();
              })),
                (i = t[0]),
                (o = t[1]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return i[t] + e * (o[t] - i[t]);
                  });
                  return new ma(t, "lab");
                });
            else if (3 === e.length)
              (n = e.map(function (e) {
                return e.lab();
              })),
                (i = n[0]),
                (o = n[1]),
                (u = n[2]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (
                      (1 - e) * (1 - e) * i[t] +
                      2 * (1 - e) * e * o[t] +
                      e * e * u[t]
                    );
                  });
                  return new ma(t, "lab");
                });
            else if (4 === e.length) {
              var l;
              (r = e.map(function (e) {
                return e.lab();
              })),
                (i = r[0]),
                (o = r[1]),
                (u = r[2]),
                (l = r[3]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (
                      (1 - e) * (1 - e) * (1 - e) * i[t] +
                      3 * (1 - e) * (1 - e) * e * o[t] +
                      3 * (1 - e) * e * e * u[t] +
                      e * e * e * l[t]
                    );
                  });
                  return new ma(t, "lab");
                });
            } else {
              if (!(e.length >= 5))
                throw new RangeError(
                  "No point in running bezier with only one color."
                );
              var s, c, f;
              (s = e.map(function (e) {
                return e.lab();
              })),
                (f = e.length - 1),
                (c = (function (e) {
                  for (var t = [1, 1], n = 1; n < e; n++) {
                    for (var r = [1], a = 1; a <= t.length; a++)
                      r[a] = (t[a] || 0) + t[a - 1];
                    t = r;
                  }
                  return t;
                })(f)),
                (a = function (e) {
                  var t = 1 - e,
                    n = [0, 1, 2].map(function (n) {
                      return s.reduce(function (r, a, i) {
                        return (
                          r + c[i] * Math.pow(t, f - i) * Math.pow(e, i) * a[n]
                        );
                      }, 0);
                    });
                  return new ma(n, "lab");
                });
            }
            return a;
          })(e);
          return (
            (t.scale = function () {
              return ga(t);
            }),
            t
          );
        }),
        (li.blend = Sa),
        (li.cubehelix = function (e, t, n, r, a) {
          void 0 === e && (e = 300),
            void 0 === t && (t = -1.5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = [0, 1]);
          var i,
            o = 0;
          "array" === wa(a) ? (i = a[1] - a[0]) : ((i = 0), (a = [a, a]));
          var u = function (u) {
            var l = ka * ((e + 120) / 360 + t * u),
              s = Ca(a[0] + i * u, r),
              c = ((0 !== o ? n[0] + u * o : n) * s * (1 - s)) / 2,
              f = xa(l),
              d = Ea(l);
            return Pa(
              Ta([
                255 * (s + c * (-0.14861 * f + 1.78277 * d)),
                255 * (s + c * (-0.29227 * f - 0.90649 * d)),
                255 * (s + c * (1.97294 * f)),
                1,
              ])
            );
          };
          return (
            (u.start = function (t) {
              return null == t ? e : ((e = t), u);
            }),
            (u.rotations = function (e) {
              return null == e ? t : ((t = e), u);
            }),
            (u.gamma = function (e) {
              return null == e ? r : ((r = e), u);
            }),
            (u.hue = function (e) {
              return null == e
                ? n
                : ("array" === wa((n = e))
                    ? 0 == (o = n[1] - n[0]) && (n = n[1])
                    : (o = 0),
                  u);
            }),
            (u.lightness = function (e) {
              return null == e
                ? a
                : ("array" === wa(e)
                    ? ((a = e), (i = e[1] - e[0]))
                    : ((a = [e, e]), (i = 0)),
                  u);
            }),
            (u.scale = function () {
              return Pa.scale(u);
            }),
            u.hue(n),
            u
          );
        }),
        (li.mix = li.interpolate = Ir),
        (li.random = function () {
          for (var e = "#", t = 0; t < 6; t++)
            e += "0123456789abcdef".charAt(Ma(16 * Na()));
          return new Aa(e, "hex");
        }),
        (li.scale = pa),
        (li.analyze = ja.analyze),
        (li.contrast = function (e, t) {
          (e = new za(e)), (t = new za(t));
          var n = e.luminance(),
            r = t.luminance();
          return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
        }),
        (li.deltaE = function (e, t, n, r, a) {
          void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = 1);
          var i = function (e) {
              return (360 * e) / (2 * Ja);
            },
            o = function (e) {
              return (2 * Ja * e) / 360;
            };
          (e = new Ua(e)), (t = new Ua(t));
          var u = Array.from(e.lab()),
            l = u[0],
            s = u[1],
            c = u[2],
            f = Array.from(t.lab()),
            d = f[0],
            h = f[1],
            p = f[2],
            m = (l + d) / 2,
            g = (Ga(Va(s, 2) + Va(c, 2)) + Ga(Va(h, 2) + Va(p, 2))) / 2,
            v = 0.5 * (1 - Ga(Va(g, 7) / (Va(g, 7) + Va(25, 7)))),
            y = s * (1 + v),
            b = h * (1 + v),
            _ = Ga(Va(y, 2) + Va(c, 2)),
            S = Ga(Va(b, 2) + Va(p, 2)),
            w = (_ + S) / 2,
            T = i(Ya(c, y)),
            k = i(Ya(p, b)),
            C = T >= 0 ? T : T + 360,
            E = k >= 0 ? k : k + 360,
            x = Wa(C - E) > 180 ? (C + E + 360) / 2 : (C + E) / 2,
            P =
              1 -
              0.17 * qa(o(x - 30)) +
              0.24 * qa(o(2 * x)) +
              0.32 * qa(o(3 * x + 6)) -
              0.2 * qa(o(4 * x - 63)),
            A = E - C;
          (A = Wa(A) <= 180 ? A : E <= C ? A + 360 : A - 360),
            (A = 2 * Ga(_ * S) * Ka(o(A) / 2));
          var M = d - l,
            N = S - _,
            I = 1 + (0.015 * Va(m - 50, 2)) / Ga(20 + Va(m - 50, 2)),
            R = 1 + 0.045 * w,
            O = 1 + 0.015 * w * P,
            F = 30 * Qa(-Va((x - 275) / 25, 2)),
            D = -2 * Ga(Va(w, 7) / (Va(w, 7) + Va(25, 7))) * Ka(2 * o(F)),
            L = Ga(
              Va(M / (n * I), 2) +
                Va(N / (r * R), 2) +
                Va(A / (a * O), 2) +
                D * (N / (r * R)) * (A / (a * O))
            );
          return Ha(0, $a(100, L));
        }),
        (li.distance = function (e, t, n) {
          void 0 === n && (n = "lab"), (e = new Xa(e)), (t = new Xa(t));
          var r = e.get(n),
            a = t.get(n),
            i = 0;
          for (var o in r) {
            var u = (r[o] || 0) - (a[o] || 0);
            i += u * u;
          }
          return Math.sqrt(i);
        }),
        (li.limits = ja.limits),
        (li.valid = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          try {
            return (
              new (Function.prototype.bind.apply(Za, [null].concat(e)))(), !0
            );
          } catch (n) {
            return !1;
          }
        }),
        (li.scales = ni),
        (li.colors = dn),
        (li.brewer = ui),
        li
      );
    })();
  })(Qy);
  const Jy = r(Qy.exports);
  var Xy = Jy(hy(0)),
    Zy = Jy(hy(1));
  function eb({ data: e, className: t }) {
    let n = void 0 === e.classes ? e : e.classes;
    if (
      (n.sort((e, t) => (e.name < t.name ? -1 : e.name === t.name ? 0 : 1)),
      (n = n.filter((e) => !0 === e.enabled)),
      n.length > 0)
    ) {
      const r = [
        {
          key: "",
          values: n.map(
            (e) => "Klass" + (e.shareClass ? " " + e.shareClass : "")
          ),
        },
        { key: "NAV", values: n.map((e) => e.navPerUnit) },
        { key: "Datum för NAV", values: n.map(() => e.navDate) },
        {
          key: "Utdelande",
          values: n.map((e) => (e.dividendPaying ? "Ja" : "Nej")),
        },
        { key: "Kortnamn Bloomberg", values: n.map((e) => e.bloombergTicker) },
        { key: "ISIN", values: n.map((e) => e.isin) },
        { key: "Handel", values: n.map(() => e.tradeFrequency) },
        { key: "Bryttid", values: n.map((e) => e.tradeCutOff) },
        {
          key: "Minsta investering",
          values: n.map((e) =>
            sh.numberFormat(e.minimumInitialSubscription, "# ##0")
          ),
        },
        {
          key: "Förvaltningsavgift",
          values: n.map((e) =>
            sh.numberFormat(e.managementFee, "0,000%").replace(/0{1,2}%$/, "%")
          ),
        },
        { key: "Valuta", values: n.map((e) => e.navCurrency) },
        { key: "Fondtyp", values: n.map(() => e.fundType) },
        {
          key: "Valutasäkrad",
          values: n.map((e) => (e.fxHedged ? "Ja" : "Nej")),
        },
        { key: "SFDR", values: n.map((e) => e.sfdr) },
      ];
      return Q.jsx(Oy, {
        className: "firstheader" + (t ? " " + t : ""),
        list: r,
      });
    }
    return null;
  }
  [
    Zy.darken(0.8),
    Zy.darken(0.2),
    Zy.darken(-0.6),
    Xy.darken(0.4),
    Xy.darken(-0.1),
    Xy.darken(-0.6),
  ].map((e) => e.hex()),
    fy(e),
    fy(e),
    fy(e),
    G.Component,
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    fy(e),
    sh.numberFormatFun("0.0%"),
    fy(e),
    (function (e) {
      void 0 === e && (e = {});
      var t = e.window,
        n = void 0 === t ? document.defaultView : t,
        r = n.history;
      function a() {
        var e = n.location,
          t = e.pathname,
          a = e.search,
          i = e.hash,
          o = r.state || {};
        return [
          o.idx,
          {
            pathname: t,
            search: a,
            hash: i,
            state: o.usr || null,
            key: o.key || "default",
          },
        ];
      }
      var i = null;
      n.addEventListener("popstate", function () {
        if (i) f.call(i), (i = null);
        else {
          var e = jy.Pop,
            t = a(),
            n = t[0],
            r = t[1];
          if (f.length) {
            if (null != n) {
              var o = l - n;
              o &&
                ((i = {
                  action: e,
                  location: r,
                  retry: function () {
                    h(-1 * o);
                  },
                }),
                h(o));
            }
          } else d(e);
        }
      });
      var o = jy.Pop,
        u = a(),
        l = u[0],
        s = u[1],
        c = zy(),
        f = zy();
      function d(e) {
        o = e;
        var t = a();
        (l = t[0]), (s = t[1]), c.call({ action: o, location: s });
      }
      function h(e) {
        r.go(e);
      }
      null == l && ((l = 0), r.replaceState(By({}, r.state, { idx: l }), ""));
    })(),
    fy(e),
    fy(e),
    fy(e),
    fy(e);
  const tb = sh.numberFormatFun("0.0%"),
    nb = sh.numberFormatFun("0.00"),
    rb = ({
      masterTimeSeriesName: e,
      timeseries: t,
      navValue: n,
      riskFreeTimeSeries: r,
    }) => {
      const a = t.filter((t) => t.name === e)[0],
        i = a.resampleToCalenderMonthly(),
        o = [{ key: null, values: t.map((e) => e.name) }];
      let u;
      if (r) {
        const e = sh.TimeSeries.align(a, r, sh.AlignMethod.Latest),
          t = a
            .resampleToCalenderMonthly()
            .return()
            .subtract(e.resampleToCalenderMonthly().return())
            .add(1)
            .cumProd();
        u = nb(t.sharpeRatio());
      }
      const l = [],
        s = [],
        c = [],
        f = [],
        d = [],
        h = [],
        p = [];
      for (let m = 0; m < t.length; m++) {
        const e = t[m].resampleToCalenderMonthly();
        if (e.name === a.name)
          (l[m] = ""),
            (s[m] = ""),
            (c[m] = ""),
            (f[m] = sh.numberFormat(n, "# ##0")),
            (d[m] = ""),
            (h[m] = u || nb(i.sharpeRatio())),
            (p[m] = tb(i.annualizedReturn()));
        else {
          const t = e.annualizedReturn();
          (l[m] = nb(e.correlation(i))),
            (c[m] = tb(e.trackingError(i))),
            (s[m] = nb((e.correlation(i) * i.volatility()) / e.volatility())),
            (f[m] = ""),
            (d[m] = nb(i.informationRatio(e))),
            (h[m] = nb(e.sharpeRatio())),
            (p[m] = tb(t) + " [" + tb(i.annualizedReturn() - t) + "]");
        }
        e.valueReturn();
      }
      return (
        o.push({ key: "Värde", values: f }),
        o.push({ key: "Årsavkastning", values: p }),
        o.push({
          key: "Enkel avkastning",
          values: t.map((e) =>
            tb(e.resampleToCalenderMonthly().valueReturn()).toString()
          ),
        }),
        o.push({
          key: "Volatilitet",
          values: t.map((e) =>
            tb(e.resampleToCalenderMonthly().volatility()).toString()
          ),
        }),
        o.push({
          key: "Andel positiva månader",
          values: t.map((e) => tb(e.resampleToMonthly().positiveShare())),
        }),
        o.push({ key: "Korrelation", values: l }),
        o.push({ key: "Beta", values: s }),
        o.push({ key: "Aktiv risk", values: c }),
        o.push({ key: "Informationskvot", values: d }),
        o.push({ key: "Sharpekvot", values: h }),
        Q.jsx(Oy, { className: "firstheader", list: o })
      );
    };
  function ab(e, t, n, r, a, i, o) {
    try {
      var u = e[i](o),
        l = u.value;
    } catch (s) {
      return void n(s);
    }
    u.done ? t(l) : Promise.resolve(l).then(r, a);
  }
  function ib(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, a) {
        var i = e.apply(t, n);
        function o(e) {
          ab(i, r, a, o, u, "next", e);
        }
        function u(e) {
          ab(i, r, a, o, u, "throw", e);
        }
        o(void 0);
      });
    };
  }
  function ob() {
    return (
      (ob = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ob.apply(this, arguments)
    );
  }
  var ub = { exports: {} },
    lb = { exports: {} };
  !(function (e) {
    function t(n) {
      return (
        (e.exports = t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        t(n)
      );
    }
    (e.exports = t),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(lb);
  var sb = lb.exports;
  !(function (e) {
    var t = sb.default;
    function n() {
      (e.exports = n =
        function () {
          return r;
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
      var r = {},
        a = Object.prototype,
        i = a.hasOwnProperty,
        o = "function" == typeof Symbol ? Symbol : {},
        u = o.iterator || "@@iterator",
        l = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(e, t, n) {
        return (
          Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        c({}, "");
      } catch (A) {
        c = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function f(e, t, n, r) {
        var a,
          i,
          o,
          u,
          l = t && t.prototype instanceof p ? t : p,
          s = Object.create(l.prototype),
          c = new E(r || []);
        return (
          (s._invoke =
            ((a = e),
            (i = n),
            (o = c),
            (u = "suspendedStart"),
            function (e, t) {
              if ("executing" === u)
                throw new Error("Generator is already running");
              if ("completed" === u) {
                if ("throw" === e) throw t;
                return { value: void 0, done: !0 };
              }
              for (o.method = e, o.arg = t; ; ) {
                var n = o.delegate;
                if (n) {
                  var r = T(n, o);
                  if (r) {
                    if (r === h) continue;
                    return r;
                  }
                }
                if ("next" === o.method) o.sent = o._sent = o.arg;
                else if ("throw" === o.method) {
                  if ("suspendedStart" === u) throw ((u = "completed"), o.arg);
                  o.dispatchException(o.arg);
                } else "return" === o.method && o.abrupt("return", o.arg);
                u = "executing";
                var l = d(a, i, o);
                if ("normal" === l.type) {
                  if (
                    ((u = o.done ? "completed" : "suspendedYield"), l.arg === h)
                  )
                    continue;
                  return { value: l.arg, done: o.done };
                }
                "throw" === l.type &&
                  ((u = "completed"), (o.method = "throw"), (o.arg = l.arg));
              }
            })),
          s
        );
      }
      function d(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (r) {
          return { type: "throw", arg: r };
        }
      }
      r.wrap = f;
      var h = {};
      function p() {}
      function m() {}
      function g() {}
      var v = {};
      c(v, u, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        b = y && y(y(x([])));
      b && b !== a && i.call(b, u) && (v = b);
      var _ = (g.prototype = p.prototype = Object.create(v));
      function S(e) {
        ["next", "throw", "return"].forEach(function (t) {
          c(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(e, n) {
        function r(a, o, u, l) {
          var s = d(e[a], e, o);
          if ("throw" !== s.type) {
            var c = s.arg,
              f = c.value;
            return f && "object" == t(f) && i.call(f, "__await")
              ? n.resolve(f.__await).then(
                  function (e) {
                    r("next", e, u, l);
                  },
                  function (e) {
                    r("throw", e, u, l);
                  }
                )
              : n.resolve(f).then(
                  function (e) {
                    (c.value = e), u(c);
                  },
                  function (e) {
                    return r("throw", e, u, l);
                  }
                );
          }
          l(s.arg);
        }
        var a;
        this._invoke = function (e, t) {
          function i() {
            return new n(function (n, a) {
              r(e, t, n, a);
            });
          }
          return (a = a ? a.then(i, i) : i());
        };
      }
      function T(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              T(e, t),
              "throw" === t.method)
            )
              return h;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var r = d(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), h;
        var a = r.arg;
        return a
          ? a.done
            ? ((t[e.resultName] = a.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              h)
            : a
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            h);
      }
      function k(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function C(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(k, this),
          this.reset(!0);
      }
      function x(e) {
        if (e) {
          var t = e[u];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length; )
                  if (i.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: P };
      }
      function P() {
        return { value: void 0, done: !0 };
      }
      return (
        (m.prototype = g),
        c(_, "constructor", g),
        c(g, "constructor", m),
        (m.displayName = c(g, s, "GeneratorFunction")),
        (r.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === m || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (r.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, g)
              : ((e.__proto__ = g), c(e, s, "GeneratorFunction")),
            (e.prototype = Object.create(_)),
            e
          );
        }),
        (r.awrap = function (e) {
          return { __await: e };
        }),
        S(w.prototype),
        c(w.prototype, l, function () {
          return this;
        }),
        (r.AsyncIterator = w),
        (r.async = function (e, t, n, a, i) {
          void 0 === i && (i = Promise);
          var o = new w(f(e, t, n, a), i);
          return r.isGeneratorFunction(t)
            ? o
            : o.next().then(function (e) {
                return e.done ? e.value : o.next();
              });
        }),
        S(_),
        c(_, s, "Generator"),
        c(_, u, function () {
          return this;
        }),
        c(_, "toString", function () {
          return "[object Generator]";
        }),
        (r.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (r.values = x),
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(C),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  i.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(n, r) {
              return (
                (o.type = "throw"),
                (o.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var a = this.tryEntries[r],
                o = a.completion;
              if ("root" === a.tryLoc) return n("end");
              if (a.tryLoc <= this.prev) {
                var u = i.call(a, "catchLoc"),
                  l = i.call(a, "finallyLoc");
                if (u && l) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                } else {
                  if (!l)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                i.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var a = r;
                break;
              }
            }
            a &&
              ("break" === e || "continue" === e) &&
              a.tryLoc <= t &&
              t <= a.finallyLoc &&
              (a = null);
            var o = a ? a.completion : {};
            return (
              (o.type = e),
              (o.arg = t),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                : this.complete(o)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              h
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), C(n), h;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  C(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: x(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        r
      );
    }
    (e.exports = n),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(ub);
  var cb = (0, ub.exports)(),
    fb = cb;
  try {
    regeneratorRuntime = cb;
  } catch (Gb) {
    "object" == typeof globalThis
      ? (globalThis.regeneratorRuntime = cb)
      : Function("r", "regeneratorRuntime = r")(cb);
  }
  const db = r(fb),
    hb =
      "object" == typeof performance &&
      performance &&
      "function" == typeof performance.now
        ? performance
        : Date,
    pb =
      "function" == typeof AbortController
        ? AbortController
        : class {
            constructor() {
              this.signal = new vb();
            }
            abort(e = new Error("This operation was aborted")) {
              (this.signal.reason = this.signal.reason || e),
                (this.signal.aborted = !0),
                this.signal.dispatchEvent({
                  type: "abort",
                  target: this.signal,
                });
            }
          },
    mb = "function" == typeof AbortSignal,
    gb = "function" == typeof pb.AbortSignal,
    vb = mb
      ? AbortSignal
      : gb
      ? pb.AbortController
      : class {
          constructor() {
            (this.reason = void 0), (this.aborted = !1), (this._listeners = []);
          }
          dispatchEvent(e) {
            "abort" === e.type &&
              ((this.aborted = !0),
              this.onabort(e),
              this._listeners.forEach((t) => t(e), this));
          }
          onabort() {}
          addEventListener(e, t) {
            "abort" === e && this._listeners.push(t);
          }
          removeEventListener(e, t) {
            "abort" === e &&
              (this._listeners = this._listeners.filter((e) => e !== t));
          }
        },
    yb = new Set(),
    bb = (e, t) => {
      const n = `LRU_CACHE_OPTION_${e}`;
      wb(n) && Tb(n, `${e} option`, `options.${t}`, Pb);
    },
    _b = (e, t) => {
      const n = `LRU_CACHE_METHOD_${e}`;
      if (wb(n)) {
        const { prototype: r } = Pb,
          { get: a } = Object.getOwnPropertyDescriptor(r, e);
        Tb(n, `${e} method`, `cache.${t}()`, a);
      }
    },
    Sb = (...e) => {
      "object" == typeof process &&
      process &&
      "function" == typeof process.emitWarning
        ? process.emitWarning(...e)
        : console.error(...e);
    },
    wb = (e) => !yb.has(e),
    Tb = (e, t, n, r) => {
      yb.add(e),
        Sb(
          `The ${t} is deprecated. Please use ${n} instead.`,
          "DeprecationWarning",
          e,
          r
        );
    },
    kb = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e),
    Cb = (e) =>
      kb(e)
        ? e <= Math.pow(2, 8)
          ? Uint8Array
          : e <= Math.pow(2, 16)
          ? Uint16Array
          : e <= Math.pow(2, 32)
          ? Uint32Array
          : e <= Number.MAX_SAFE_INTEGER
          ? Eb
          : null
        : null;
  class Eb extends Array {
    constructor(e) {
      super(e), this.fill(0);
    }
  }
  class xb {
    constructor(e) {
      if (0 === e) return [];
      const t = Cb(e);
      (this.heap = new t(e)), (this.length = 0);
    }
    push(e) {
      this.heap[this.length++] = e;
    }
    pop() {
      return this.heap[--this.length];
    }
  }
  class Pb {
    constructor(e = {}) {
      const {
          max: t = 0,
          ttl: n,
          ttlResolution: r = 1,
          ttlAutopurge: a,
          updateAgeOnGet: i,
          updateAgeOnHas: o,
          allowStale: u,
          dispose: l,
          disposeAfter: s,
          noDisposeOnSet: c,
          noUpdateTTL: f,
          maxSize: d = 0,
          maxEntrySize: h = 0,
          sizeCalculation: p,
          fetchMethod: m,
          fetchContext: g,
          noDeleteOnFetchRejection: v,
          noDeleteOnStaleGet: y,
          allowStaleOnFetchRejection: b,
          allowStaleOnFetchAbort: _,
          ignoreFetchAbort: S,
        } = e,
        { length: w, maxAge: T, stale: k } = e instanceof Pb ? {} : e;
      if (0 !== t && !kb(t))
        throw new TypeError("max option must be a nonnegative integer");
      const C = t ? Cb(t) : Array;
      if (!C) throw new Error("invalid max value: " + t);
      if (
        ((this.max = t),
        (this.maxSize = d),
        (this.maxEntrySize = h || this.maxSize),
        (this.sizeCalculation = p || w),
        this.sizeCalculation)
      ) {
        if (!this.maxSize && !this.maxEntrySize)
          throw new TypeError(
            "cannot set sizeCalculation without setting maxSize or maxEntrySize"
          );
        if ("function" != typeof this.sizeCalculation)
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (
        ((this.fetchMethod = m || null),
        this.fetchMethod && "function" != typeof this.fetchMethod)
      )
        throw new TypeError("fetchMethod must be a function if specified");
      if (((this.fetchContext = g), !this.fetchMethod && void 0 !== g))
        throw new TypeError("cannot set fetchContext without fetchMethod");
      if (
        ((this.keyMap = new Map()),
        (this.keyList = new Array(t).fill(null)),
        (this.valList = new Array(t).fill(null)),
        (this.next = new C(t)),
        (this.prev = new C(t)),
        (this.head = 0),
        (this.tail = 0),
        (this.free = new xb(t)),
        (this.initialFill = 1),
        (this.size = 0),
        "function" == typeof l && (this.dispose = l),
        "function" == typeof s
          ? ((this.disposeAfter = s), (this.disposed = []))
          : ((this.disposeAfter = null), (this.disposed = null)),
        (this.noDisposeOnSet = !!c),
        (this.noUpdateTTL = !!f),
        (this.noDeleteOnFetchRejection = !!v),
        (this.allowStaleOnFetchRejection = !!b),
        (this.allowStaleOnFetchAbort = !!_),
        (this.ignoreFetchAbort = !!S),
        0 !== this.maxEntrySize)
      ) {
        if (0 !== this.maxSize && !kb(this.maxSize))
          throw new TypeError(
            "maxSize must be a positive integer if specified"
          );
        if (!kb(this.maxEntrySize))
          throw new TypeError(
            "maxEntrySize must be a positive integer if specified"
          );
        this.initializeSizeTracking();
      }
      if (
        ((this.allowStale = !!u || !!k),
        (this.noDeleteOnStaleGet = !!y),
        (this.updateAgeOnGet = !!i),
        (this.updateAgeOnHas = !!o),
        (this.ttlResolution = kb(r) || 0 === r ? r : 1),
        (this.ttlAutopurge = !!a),
        (this.ttl = n || T || 0),
        this.ttl)
      ) {
        if (!kb(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        this.initializeTTLTracking();
      }
      if (0 === this.max && 0 === this.ttl && 0 === this.maxSize)
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.max && !this.maxSize) {
        const e = "LRU_CACHE_UNBOUNDED";
        wb(e) &&
          (yb.add(e),
          Sb(
            "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
            "UnboundedCacheWarning",
            e,
            Pb
          ));
      }
      k && bb("stale", "allowStale"),
        T && bb("maxAge", "ttl"),
        w && bb("length", "sizeCalculation");
    }
    getRemainingTTL(e) {
      return this.has(e, { updateAgeOnHas: !1 }) ? 1 / 0 : 0;
    }
    initializeTTLTracking() {
      (this.ttls = new Eb(this.max)),
        (this.starts = new Eb(this.max)),
        (this.setItemTTL = (e, t, n = hb.now()) => {
          if (
            ((this.starts[e] = 0 !== t ? n : 0),
            (this.ttls[e] = t),
            0 !== t && this.ttlAutopurge)
          ) {
            const n = setTimeout(() => {
              this.isStale(e) && this.delete(this.keyList[e]);
            }, t + 1);
            n.unref && n.unref();
          }
        }),
        (this.updateItemAge = (e) => {
          this.starts[e] = 0 !== this.ttls[e] ? hb.now() : 0;
        }),
        (this.statusTTL = (n, r) => {
          n &&
            ((n.ttl = this.ttls[r]),
            (n.start = this.starts[r]),
            (n.now = e || t()),
            (n.remainingTTL = n.now + n.ttl - n.start));
        });
      let e = 0;
      const t = () => {
        const t = hb.now();
        if (this.ttlResolution > 0) {
          e = t;
          const n = setTimeout(() => (e = 0), this.ttlResolution);
          n.unref && n.unref();
        }
        return t;
      };
      (this.getRemainingTTL = (n) => {
        const r = this.keyMap.get(n);
        return void 0 === r
          ? 0
          : 0 === this.ttls[r] || 0 === this.starts[r]
          ? 1 / 0
          : this.starts[r] + this.ttls[r] - (e || t());
      }),
        (this.isStale = (n) =>
          0 !== this.ttls[n] &&
          0 !== this.starts[n] &&
          (e || t()) - this.starts[n] > this.ttls[n]);
    }
    updateItemAge(e) {}
    statusTTL(e, t) {}
    setItemTTL(e, t, n) {}
    isStale(e) {
      return !1;
    }
    initializeSizeTracking() {
      (this.calculatedSize = 0),
        (this.sizes = new Eb(this.max)),
        (this.removeItemSize = (e) => {
          (this.calculatedSize -= this.sizes[e]), (this.sizes[e] = 0);
        }),
        (this.requireSize = (e, t, n, r) => {
          if (this.isBackgroundFetch(t)) return 0;
          if (!kb(n)) {
            if (!r)
              throw new TypeError(
                "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
              );
            if ("function" != typeof r)
              throw new TypeError("sizeCalculation must be a function");
            if (((n = r(t, e)), !kb(n)))
              throw new TypeError(
                "sizeCalculation return invalid (expect positive integer)"
              );
          }
          return n;
        }),
        (this.addItemSize = (e, t, n) => {
          if (((this.sizes[e] = t), this.maxSize)) {
            const t = this.maxSize - this.sizes[e];
            for (; this.calculatedSize > t; ) this.evict(!0);
          }
          (this.calculatedSize += this.sizes[e]),
            n &&
              ((n.entrySize = t),
              (n.totalCalculatedSize = this.calculatedSize));
        });
    }
    removeItemSize(e) {}
    addItemSize(e, t) {}
    requireSize(e, t, n, r) {
      if (n || r)
        throw new TypeError(
          "cannot set size without setting maxSize or maxEntrySize on cache"
        );
    }
    *indexes({ allowStale: e = this.allowStale } = {}) {
      if (this.size)
        for (
          let t = this.tail;
          this.isValidIndex(t) &&
          ((!e && this.isStale(t)) || (yield t), t !== this.head);

        )
          t = this.prev[t];
    }
    *rindexes({ allowStale: e = this.allowStale } = {}) {
      if (this.size)
        for (
          let t = this.head;
          this.isValidIndex(t) &&
          ((!e && this.isStale(t)) || (yield t), t !== this.tail);

        )
          t = this.next[t];
    }
    isValidIndex(e) {
      return void 0 !== e && this.keyMap.get(this.keyList[e]) === e;
    }
    *entries() {
      for (const e of this.indexes())
        void 0 === this.valList[e] ||
          void 0 === this.keyList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield [this.keyList[e], this.valList[e]]);
    }
    *rentries() {
      for (const e of this.rindexes())
        void 0 === this.valList[e] ||
          void 0 === this.keyList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield [this.keyList[e], this.valList[e]]);
    }
    *keys() {
      for (const e of this.indexes())
        void 0 === this.keyList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield this.keyList[e]);
    }
    *rkeys() {
      for (const e of this.rindexes())
        void 0 === this.keyList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield this.keyList[e]);
    }
    *values() {
      for (const e of this.indexes())
        void 0 === this.valList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield this.valList[e]);
    }
    *rvalues() {
      for (const e of this.rindexes())
        void 0 === this.valList[e] ||
          this.isBackgroundFetch(this.valList[e]) ||
          (yield this.valList[e]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    find(e, t) {
      for (const n of this.indexes()) {
        const r = this.valList[n],
          a = this.isBackgroundFetch(r) ? r.__staleWhileFetching : r;
        if (void 0 !== a && e(a, this.keyList[n], this))
          return this.get(this.keyList[n], t);
      }
    }
    forEach(e, t = this) {
      for (const n of this.indexes()) {
        const r = this.valList[n],
          a = this.isBackgroundFetch(r) ? r.__staleWhileFetching : r;
        void 0 !== a && e.call(t, a, this.keyList[n], this);
      }
    }
    rforEach(e, t = this) {
      for (const n of this.rindexes()) {
        const r = this.valList[n],
          a = this.isBackgroundFetch(r) ? r.__staleWhileFetching : r;
        void 0 !== a && e.call(t, a, this.keyList[n], this);
      }
    }
    get prune() {
      return _b("prune", "purgeStale"), this.purgeStale;
    }
    purgeStale() {
      let e = !1;
      for (const t of this.rindexes({ allowStale: !0 }))
        this.isStale(t) && (this.delete(this.keyList[t]), (e = !0));
      return e;
    }
    dump() {
      const e = [];
      for (const t of this.indexes({ allowStale: !0 })) {
        const n = this.keyList[t],
          r = this.valList[t],
          a = this.isBackgroundFetch(r) ? r.__staleWhileFetching : r;
        if (void 0 === a) continue;
        const i = { value: a };
        if (this.ttls) {
          i.ttl = this.ttls[t];
          const e = hb.now() - this.starts[t];
          i.start = Math.floor(Date.now() - e);
        }
        this.sizes && (i.size = this.sizes[t]), e.unshift([n, i]);
      }
      return e;
    }
    load(e) {
      this.clear();
      for (const [t, n] of e) {
        if (n.start) {
          const e = Date.now() - n.start;
          n.start = hb.now() - e;
        }
        this.set(t, n.value, n);
      }
    }
    dispose(e, t, n) {}
    set(
      e,
      t,
      {
        ttl: n = this.ttl,
        start: r,
        noDisposeOnSet: a = this.noDisposeOnSet,
        size: i = 0,
        sizeCalculation: o = this.sizeCalculation,
        noUpdateTTL: u = this.noUpdateTTL,
        status: l,
      } = {}
    ) {
      if (
        ((i = this.requireSize(e, t, i, o)),
        this.maxEntrySize && i > this.maxEntrySize)
      )
        return (
          l && ((l.set = "miss"), (l.maxEntrySizeExceeded = !0)),
          this.delete(e),
          this
        );
      let s = 0 === this.size ? void 0 : this.keyMap.get(e);
      if (void 0 === s)
        (s = this.newIndex()),
          (this.keyList[s] = e),
          (this.valList[s] = t),
          this.keyMap.set(e, s),
          (this.next[this.tail] = s),
          (this.prev[s] = this.tail),
          (this.tail = s),
          this.size++,
          this.addItemSize(s, i, l),
          l && (l.set = "add"),
          (u = !1);
      else {
        this.moveToTail(s);
        const n = this.valList[s];
        if (t !== n) {
          if (
            (this.isBackgroundFetch(n)
              ? n.__abortController.abort(new Error("replaced"))
              : a ||
                (this.dispose(n, e, "set"),
                this.disposeAfter && this.disposed.push([n, e, "set"])),
            this.removeItemSize(s),
            (this.valList[s] = t),
            this.addItemSize(s, i, l),
            l)
          ) {
            l.set = "replace";
            const e =
              n && this.isBackgroundFetch(n) ? n.__staleWhileFetching : n;
            void 0 !== e && (l.oldValue = e);
          }
        } else l && (l.set = "update");
      }
      if (
        (0 === n || 0 !== this.ttl || this.ttls || this.initializeTTLTracking(),
        u || this.setItemTTL(s, n, r),
        this.statusTTL(l, s),
        this.disposeAfter)
      )
        for (; this.disposed.length; )
          this.disposeAfter(...this.disposed.shift());
      return this;
    }
    newIndex() {
      return 0 === this.size
        ? this.tail
        : this.size === this.max && 0 !== this.max
        ? this.evict(!1)
        : 0 !== this.free.length
        ? this.free.pop()
        : this.initialFill++;
    }
    pop() {
      if (this.size) {
        const e = this.valList[this.head];
        return this.evict(!0), e;
      }
    }
    evict(e) {
      const t = this.head,
        n = this.keyList[t],
        r = this.valList[t];
      return (
        this.isBackgroundFetch(r)
          ? r.__abortController.abort(new Error("evicted"))
          : (this.dispose(r, n, "evict"),
            this.disposeAfter && this.disposed.push([r, n, "evict"])),
        this.removeItemSize(t),
        e &&
          ((this.keyList[t] = null),
          (this.valList[t] = null),
          this.free.push(t)),
        (this.head = this.next[t]),
        this.keyMap.delete(n),
        this.size--,
        t
      );
    }
    has(e, { updateAgeOnHas: t = this.updateAgeOnHas, status: n } = {}) {
      const r = this.keyMap.get(e);
      if (void 0 !== r) {
        if (!this.isStale(r))
          return (
            t && this.updateItemAge(r),
            n && (n.has = "hit"),
            this.statusTTL(n, r),
            !0
          );
        n && ((n.has = "stale"), this.statusTTL(n, r));
      } else n && (n.has = "miss");
      return !1;
    }
    peek(e, { allowStale: t = this.allowStale } = {}) {
      const n = this.keyMap.get(e);
      if (void 0 !== n && (t || !this.isStale(n))) {
        const e = this.valList[n];
        return this.isBackgroundFetch(e) ? e.__staleWhileFetching : e;
      }
    }
    backgroundFetch(e, t, n, r) {
      const a = void 0 === t ? void 0 : this.valList[t];
      if (this.isBackgroundFetch(a)) return a;
      const i = new pb();
      n.signal &&
        n.signal.addEventListener("abort", () => i.abort(n.signal.reason));
      const o = { signal: i.signal, options: n, context: r },
        u = (r, a = !1) => {
          const { aborted: u } = i.signal,
            c = n.ignoreFetchAbort && void 0 !== r;
          return (
            n.status &&
              (u && !a
                ? ((n.status.fetchAborted = !0),
                  (n.status.fetchError = i.signal.reason),
                  c && (n.status.fetchAbortIgnored = !0))
                : (n.status.fetchResolved = !0)),
            !u || c || a
              ? (this.valList[t] === s &&
                  (void 0 === r
                    ? s.__staleWhileFetching
                      ? (this.valList[t] = s.__staleWhileFetching)
                      : this.delete(e)
                    : (n.status && (n.status.fetchUpdated = !0),
                      this.set(e, r, o.options))),
                r)
              : l(i.signal.reason)
          );
        },
        l = (r) => {
          const { aborted: a } = i.signal,
            o = a && n.allowStaleOnFetchAbort,
            u = o || n.allowStaleOnFetchRejection,
            l = u || n.noDeleteOnFetchRejection;
          if (
            (this.valList[t] === s &&
              (l && void 0 !== s.__staleWhileFetching
                ? o || (this.valList[t] = s.__staleWhileFetching)
                : this.delete(e)),
            u)
          )
            return (
              n.status &&
                void 0 !== s.__staleWhileFetching &&
                (n.status.returnedStale = !0),
              s.__staleWhileFetching
            );
          if (s.__returned === s) throw r;
        };
      n.status && (n.status.fetchDispatched = !0);
      const s = new Promise((t, r) => {
        this.fetchMethod(e, a, o).then((e) => t(e), r),
          i.signal.addEventListener("abort", () => {
            (n.ignoreFetchAbort && !n.allowStaleOnFetchAbort) ||
              (t(), n.allowStaleOnFetchAbort && (t = (e) => u(e, !0)));
          });
      }).then(
        u,
        (e) => (
          n.status &&
            ((n.status.fetchRejected = !0), (n.status.fetchError = e)),
          l(e)
        )
      );
      return (
        (s.__abortController = i),
        (s.__staleWhileFetching = a),
        (s.__returned = null),
        void 0 === t
          ? (this.set(
              e,
              s,
              __spreadProps(__spreadValues({}, o.options), { status: void 0 })
            ),
            (t = this.keyMap.get(e)))
          : (this.valList[t] = s),
        s
      );
    }
    isBackgroundFetch(e) {
      return (
        e &&
        "object" == typeof e &&
        "function" == typeof e.then &&
        Object.prototype.hasOwnProperty.call(e, "__staleWhileFetching") &&
        Object.prototype.hasOwnProperty.call(e, "__returned") &&
        (e.__returned === e || null === e.__returned)
      );
    }
    async fetch(
      e,
      {
        allowStale: t = this.allowStale,
        updateAgeOnGet: n = this.updateAgeOnGet,
        noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
        ttl: a = this.ttl,
        noDisposeOnSet: i = this.noDisposeOnSet,
        size: o = 0,
        sizeCalculation: u = this.sizeCalculation,
        noUpdateTTL: l = this.noUpdateTTL,
        noDeleteOnFetchRejection: s = this.noDeleteOnFetchRejection,
        allowStaleOnFetchRejection: c = this.allowStaleOnFetchRejection,
        ignoreFetchAbort: f = this.ignoreFetchAbort,
        allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort,
        fetchContext: h = this.fetchContext,
        forceRefresh: p = !1,
        status: m,
        signal: g,
      } = {}
    ) {
      if (!this.fetchMethod)
        return (
          m && (m.fetch = "get"),
          this.get(e, {
            allowStale: t,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: r,
            status: m,
          })
        );
      const v = {
        allowStale: t,
        updateAgeOnGet: n,
        noDeleteOnStaleGet: r,
        ttl: a,
        noDisposeOnSet: i,
        size: o,
        sizeCalculation: u,
        noUpdateTTL: l,
        noDeleteOnFetchRejection: s,
        allowStaleOnFetchRejection: c,
        allowStaleOnFetchAbort: d,
        ignoreFetchAbort: f,
        status: m,
        signal: g,
      };
      let y = this.keyMap.get(e);
      if (void 0 === y) {
        m && (m.fetch = "miss");
        const t = this.backgroundFetch(e, y, v, h);
        return (t.__returned = t);
      }
      {
        const r = this.valList[y];
        if (this.isBackgroundFetch(r)) {
          const e = t && void 0 !== r.__staleWhileFetching;
          return (
            m && ((m.fetch = "inflight"), e && (m.returnedStale = !0)),
            e ? r.__staleWhileFetching : (r.__returned = r)
          );
        }
        const a = this.isStale(y);
        if (!p && !a)
          return (
            m && (m.fetch = "hit"),
            this.moveToTail(y),
            n && this.updateItemAge(y),
            this.statusTTL(m, y),
            r
          );
        const i = this.backgroundFetch(e, y, v, h),
          o = void 0 !== i.__staleWhileFetching,
          u = o && t;
        return (
          m &&
            ((m.fetch = o && a ? "stale" : "refresh"),
            u && a && (m.returnedStale = !0)),
          u ? i.__staleWhileFetching : (i.__returned = i)
        );
      }
    }
    get(
      e,
      {
        allowStale: t = this.allowStale,
        updateAgeOnGet: n = this.updateAgeOnGet,
        noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
        status: a,
      } = {}
    ) {
      const i = this.keyMap.get(e);
      if (void 0 !== i) {
        const o = this.valList[i],
          u = this.isBackgroundFetch(o);
        return (
          this.statusTTL(a, i),
          this.isStale(i)
            ? (a && (a.get = "stale"),
              u
                ? (a &&
                    (a.returnedStale = t && void 0 !== o.__staleWhileFetching),
                  t ? o.__staleWhileFetching : void 0)
                : (r || this.delete(e),
                  a && (a.returnedStale = t),
                  t ? o : void 0))
            : (a && (a.get = "hit"),
              u
                ? o.__staleWhileFetching
                : (this.moveToTail(i), n && this.updateItemAge(i), o))
        );
      }
      a && (a.get = "miss");
    }
    connect(e, t) {
      (this.prev[t] = e), (this.next[e] = t);
    }
    moveToTail(e) {
      e !== this.tail &&
        (e === this.head
          ? (this.head = this.next[e])
          : this.connect(this.prev[e], this.next[e]),
        this.connect(this.tail, e),
        (this.tail = e));
    }
    get del() {
      return _b("del", "delete"), this.delete;
    }
    delete(e) {
      let t = !1;
      if (0 !== this.size) {
        const n = this.keyMap.get(e);
        if (void 0 !== n)
          if (((t = !0), 1 === this.size)) this.clear();
          else {
            this.removeItemSize(n);
            const t = this.valList[n];
            this.isBackgroundFetch(t)
              ? t.__abortController.abort(new Error("deleted"))
              : (this.dispose(t, e, "delete"),
                this.disposeAfter && this.disposed.push([t, e, "delete"])),
              this.keyMap.delete(e),
              (this.keyList[n] = null),
              (this.valList[n] = null),
              n === this.tail
                ? (this.tail = this.prev[n])
                : n === this.head
                ? (this.head = this.next[n])
                : ((this.next[this.prev[n]] = this.next[n]),
                  (this.prev[this.next[n]] = this.prev[n])),
              this.size--,
              this.free.push(n);
          }
      }
      if (this.disposed)
        for (; this.disposed.length; )
          this.disposeAfter(...this.disposed.shift());
      return t;
    }
    clear() {
      for (const e of this.rindexes({ allowStale: !0 })) {
        const t = this.valList[e];
        if (this.isBackgroundFetch(t))
          t.__abortController.abort(new Error("deleted"));
        else {
          const n = this.keyList[e];
          this.dispose(t, n, "delete"),
            this.disposeAfter && this.disposed.push([t, n, "delete"]);
        }
      }
      if (
        (this.keyMap.clear(),
        this.valList.fill(null),
        this.keyList.fill(null),
        this.ttls && (this.ttls.fill(0), this.starts.fill(0)),
        this.sizes && this.sizes.fill(0),
        (this.head = 0),
        (this.tail = 0),
        (this.initialFill = 1),
        (this.free.length = 0),
        (this.calculatedSize = 0),
        (this.size = 0),
        this.disposed)
      )
        for (; this.disposed.length; )
          this.disposeAfter(...this.disposed.shift());
    }
    get reset() {
      return _b("reset", "clear"), this.clear;
    }
    get length() {
      return (
        ((e, t) => {
          const n = `LRU_CACHE_PROPERTY_${e}`;
          if (wb(n)) {
            const { prototype: t } = Pb,
              { get: r } = Object.getOwnPropertyDescriptor(t, e);
            Tb(n, `${e} property`, "cache.size", r);
          }
        })("length"),
        this.size
      );
    }
    static get AbortController() {
      return pb;
    }
    static get AbortSignal() {
      return vb;
    }
  }
  const Ab = Pb;
  var Mb = Object.prototype.hasOwnProperty;
  function Nb(e, t) {
    var n, r;
    if (e === t) return !0;
    if (e && t && (n = e.constructor) === t.constructor) {
      if (n === Date) return e.getTime() === t.getTime();
      if (n === RegExp) return e.toString() === t.toString();
      if (n === Array) {
        if ((r = e.length) === t.length) for (; r-- && Nb(e[r], t[r]); );
        return -1 === r;
      }
      if (!n || "object" == typeof e) {
        for (n in ((r = 0), e)) {
          if (Mb.call(e, n) && ++r && !Mb.call(t, n)) return !1;
          if (!(n in t) || !Nb(e[n], t[n])) return !1;
        }
        return Object.keys(t).length === r;
      }
    }
    return e != e && t != t;
  }
  var Ib = "REQUEST_START",
    Rb = "REQUEST_END",
    Ob = { manual: !1, useCache: !0, ssr: !0, autoCancel: !0 },
    Fb = (function (e) {
      var t,
        n,
        r,
        a = [];
      function i() {
        (t = new Ab({ max: 500 })), (n = rh), (r = Ob);
      }
      function o(e) {
        void 0 === e && (e = {}),
          void 0 !== e.axios && (n = e.axios),
          void 0 !== e.cache && (t = e.cache),
          void 0 !== e.defaultOptions && (r = ob({}, Ob, e.defaultOptions));
      }
      function u() {
        return (u = ib(
          db.mark(function e() {
            var n;
            return db.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = [].concat(a)),
                      (a.length = 0),
                      (e.next = 4),
                      Promise.all(n)
                    );
                  case 4:
                    return e.abrupt("return", t.dump());
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      return (
        i(),
        o(void 0),
        Object.assign(
          function e(t, a) {
            var i = G.useMemo(function () {
                return Lb(t);
              }, Bb(t)),
              o = G.useMemo(function () {
                return ob({}, r, a);
              }, Bb(a)),
              u = G.useRef(),
              l = G.useReducer(
                s,
                ((p = i),
                (m = o),
                (g = !m.manual && c(p, m)),
                ob(
                  { loading: !m.manual && !g, error: null },
                  g ? { data: g.data, response: g } : null
                ))
              ),
              f = l[0],
              d = l[1];
            var p, m, g;
            "undefined" == typeof window &&
              o.ssr &&
              !o.manual &&
              e.__ssrPromises.push(n(i));
            var v = G.useCallback(function () {
                u.current && u.current.cancel();
              }, []),
              y = G.useCallback(
                function (e) {
                  return (
                    o.autoCancel && v(),
                    (u.current = rh.CancelToken.source()),
                    (e.cancelToken = u.current.token),
                    e
                  );
                },
                [v, o.autoCancel]
              );
            G.useEffect(
              function () {
                return (
                  o.manual || h(y(i), o, d).catch(function () {}),
                  function () {
                    o.autoCancel && v();
                  }
                );
              },
              [i, o, y, v]
            );
            var b = G.useCallback(
              function (e, t) {
                return (
                  (e = Lb(e)),
                  h(
                    y(
                      ob(
                        {},
                        i,
                        (n = e) &&
                          n.nativeEvent &&
                          n.nativeEvent instanceof Event
                          ? null
                          : e
                      )
                    ),
                    ob({ useCache: !1 }, t),
                    d
                  )
                );
                var n;
              },
              [i, y]
            );
            return [f, b, v];
          },
          {
            __ssrPromises: a,
            resetConfigure: i,
            configure: o,
            loadCache: function (e) {
              t.load(e);
            },
            serializeCache: function () {
              return u.apply(this, arguments);
            },
            clearCache: function () {
              t.clear();
            },
          }
        )
      );
      function l(e, n) {
        if (t) {
          var r = Db(e),
            a = ob({}, n);
          delete a.config, delete a.request, t.set(r, a);
        }
      }
      function s(e, t) {
        var n;
        switch (t.type) {
          case Ib:
            return ob({}, e, { loading: !0, error: null });
          case Rb:
            return ob(
              {},
              e,
              { loading: !1 },
              t.error ? {} : { data: t.payload.data, error: null },
              (((n = {})[t.error ? "error" : "response"] = t.payload), n)
            );
        }
      }
      function c(e, n, r) {
        if (t && n.useCache) {
          var a = Db(e),
            i = t.get(a);
          return i && r && r({ type: Rb, payload: i }), i;
        }
      }
      function f(e, t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = ib(
          db.mark(function e(t, r) {
            var a;
            return db.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), r({ type: Ib }), (e.next = 4), n(t);
                    case 4:
                      return (
                        (a = e.sent),
                        l(t, a),
                        r({ type: Rb, payload: a }),
                        e.abrupt("return", a)
                      );
                    case 10:
                      throw (
                        ((e.prev = 10),
                        (e.t0 = e.catch(0)),
                        rh.isCancel(e.t0) ||
                          r({ type: Rb, payload: e.t0, error: !0 }),
                        e.t0)
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 10]]
            );
          })
        )).apply(this, arguments);
      }
      function h(e, t, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = ib(
          db.mark(function e(t, n, r) {
            return db.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", c(t, n, r) || f(t, r));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    })();
  function Db(e) {
    var t = ob({}, e);
    return delete t.cancelToken, JSON.stringify(t);
  }
  function Lb(e) {
    return "string" == typeof e ? { url: e } : Object.assign({}, e);
  }
  function Bb(e) {
    var t = G.useRef(),
      n = G.useRef(0);
    return Nb(e, t.current) || ((t.current = e), (n.current += 1)), [n.current];
  }
  function jb({ uri: e }) {
    const [{ data: t, loading: n, error: r }] = Fb(e),
      a = (e) =>
        ({
          "Captor Dahlia Green Bond": "A",
          "Captor Scilla Global Equity": "B",
          "Captor Iris Bond": "A",
          "Captor Aster Global Credit": "A",
          "Captor Aster Global High Yield": "A",
          "Captor Aster Global Credit Short Term": "A",
          "Captor Global Fixed Income": "A",
          "Captor Perenne Short Term Bond": "A",
        }[e]),
      i = U.useMemo(() => {
        const e = [];
        var n;
        return (
          t &&
            ((n = t),
            n.forEach((e) => {
              const t = a(e.name);
              e.fundInfo.classes.sort(function (e, n) {
                return e.shareClass === t
                  ? -1
                  : n.shareClass === t
                  ? 1
                  : e.shareClass < n.shareClass
                  ? -1
                  : e.shareClass > n.shareClass
                  ? 1
                  : 0;
              });
            }),
            n).forEach((t) => {
              t.fundInfo.classes.forEach((n) => {
                if (n.enabled) {
                  t.show = !0;
                  let a = null;
                  try {
                    a = n.instrument.timeSeries[0].values.slice(-1);
                  } catch (r) {
                    console.log(r);
                  }
                  let i = null;
                  try {
                    i = new sh.TimeSeries(
                      n.instrument.timeSeries[0].dates,
                      n.instrument.timeSeries[0].values.map((e) =>
                        parseFloat(e)
                      )
                    ).yearToDateReturn();
                  } catch (r) {
                    console.log(r);
                  }
                  const o = {};
                  (o.Fond = t.name),
                    (o.shareClass = n.shareClass),
                    (o.nav = a),
                    (o.currency = n.instrument.currency),
                    (o.ytd = i),
                    (o.startDate = n.startDate),
                    (o.dividendPaying = n.dividendPaying),
                    (o.Risk = t.fundInfo.riskLevel),
                    (o.sfdr = n.sfdr),
                    (o.managementFee = n.managementFee),
                    (o.isin = n.instrument.isin),
                    (o.show = !0),
                    e.push(o);
                }
              });
            }),
          e
        );
      }, [t]);
    return n
      ? Q.jsx("div", {})
      : r
      ? Q.jsxs("div", {
          children: [
            Q.jsx("p", { children: "error" }),
            Q.jsxs("pre", { children: [" ", JSON.stringify(r, null, 2)] }),
          ],
        })
      : Q.jsx("div", {
          className: "overviewtable",
          children: Q.jsxs(Ry, {
            trClassName: (e) =>
              a(e.Fond) === e.shareClass ? "showMain" : "noShow",
            data: i,
            sortable: !0,
            hideDownload: !0,
            children: [
              Q.jsx(Cy, {
                field: "Fond",
                format: (e) =>
                  0 === e.length
                    ? Q.jsx("div", { className: "name", children: "error" })
                    : Q.jsxs("div", {
                        className: "name",
                        children: [
                          Q.jsx("span", {
                            className: "fundName",
                            onClick: (e) =>
                              ((e) => {
                                const t = e.currentTarget.innerText;
                                window.open(
                                  {
                                    "Captor Dahlia Green Bond":
                                      "/fonder/dahlia/",
                                    "Captor Scilla Global Equity":
                                      "/fonder/scilla/",
                                    "Captor Iris Bond": "/fonder/iris/",
                                    "Captor Aster Global Credit":
                                      "/fonder/aster/",
                                    "Captor Aster Global High Yield":
                                      "/fonder/asterhy/",
                                    "Captor Aster Global Credit Short Term":
                                      "/fonder/asterst/",
                                    "Captor Global Fixed Income":
                                      "/fonder/globalfi/",
                                    "Captor Perenne Short Term Bond":
                                      "/fonder/perenne/",
                                  }[t]
                                );
                              })(e),
                            children: e.trim(),
                          }),
                          Q.jsx("span", {
                            className: "fundButton",
                            children: Q.jsx("button", {
                              className: "click",
                              onClick: (e) =>
                                ((e) => {
                                  "rotate(-90deg)" ===
                                  e.currentTarget.style.transform
                                    ? (e.currentTarget.style.transform = "")
                                    : (e.currentTarget.style.transform =
                                        "rotate(-90deg)");
                                  const t =
                                      e.currentTarget.parentElement
                                        .previousSibling.innerText,
                                    n = a(t),
                                    r =
                                      e.currentTarget.parentElement
                                        .parentElement.parentElement
                                        .parentElement.parentElement.children;
                                  for (let a = 0; a < r.length; a++)
                                    r[
                                      a
                                    ].children[0].children[0].firstChild.innerText.trim() ===
                                      t.trim() &&
                                      n.trim() !==
                                        r[a].children[1].innerText.trim() &&
                                      ("show" === r[a].className
                                        ? (r[a].className = "noShow")
                                        : (r[a].className = "show"));
                                })(e),
                              children: "»",
                            }),
                          }),
                          " ",
                        ],
                      }),
              }),
              Q.jsx(Cy, { title: "Andelsklass", field: "shareClass" }),
              Q.jsx(Cy, { title: "Kurs", field: "nav", className: "right" }),
              Q.jsx(Cy, {
                title: "Valuta",
                field: "currency",
                className: "center",
              }),
              Q.jsx(Cy, {
                title: "YTD %",
                field: "ytd",
                className: "right",
                format: (e) =>
                  e < 0
                    ? Q.jsx("div", {
                        className: "negative",
                        children: sh.numberFormatFun("# ##0.##")(
                          100 * parseFloat(e)
                        ),
                      })
                    : Q.jsx("div", {
                        className: "positive",
                        children: sh.numberFormatFun("# ##0.##")(
                          100 * parseFloat(e)
                        ),
                      }),
              }),
              Q.jsx(Cy, {
                title: "Startdatum",
                field: "startDate",
                className: "nowrap right",
              }),
              Q.jsx(Cy, {
                title: "Utdelande",
                field: "dividendPaying",
                className: "center",
                format: (e) =>
                  e
                    ? Q.jsx("div", { children: "Ja" })
                    : Q.jsx("div", { children: "Nej" }),
              }),
              Q.jsx(Cy, {
                title: Q.jsx("a", {
                  href: "https://www.esma.europa.eu/document/guidelines-methodology-//calculation-synthetic-risk-and-reward-indicator-in-key-investor",
                  target: "_blank",
                  children: "Risk",
                }),
                field: "Risk",
                className: "right",
              }),
              Q.jsx(Cy, {
                title: "Hållbarhet",
                field: "sfdr",
                className: "right",
              }),
              Q.jsx(Cy, {
                title: "Årlig avgift %",
                field: "managementFee",
                className: "right",
                format: (e) =>
                  sh.numberFormatFun("# ##0.##")(100 * parseFloat(e)),
              }),
              Q.jsx(Cy, { title: "ISIN", field: "isin", className: "right" }),
            ],
          }),
        });
  }
  Fb.__ssrPromises,
    Fb.resetConfigure,
    Fb.configure,
    Fb.loadCache,
    Fb.serializeCache,
    Fb.clearCache;
  const zb = "https://apiv2.captor.se/public/api";
  window.onload = function () {
    var e, t;
    let n;
    try {
      const r =
        (null ==
        (t =
          null ==
          (e =
            null == document
              ? void 0
              : document.querySelector("section#contentArea"))
            ? void 0
            : e.getAttribute("data-isins"))
          ? void 0
          : t.split(" ").filter((e) => "" !== e)) || [];
      n = rh
        .get(`${zb}/fundinfo?${r.map((e) => `isins=${e}`).join("&")}`)
        .then(({ data: e }) => ({ data: e[0] }));
    } catch (u) {
      console.log(u);
    }
    var r = document.querySelector("#chartandperiodreturns"),
      a = document.querySelector("#performance-indicators"),
      i = document.querySelector("#facttable"),
      o = document.querySelector("#fundoverview");
    r &&
      n &&
      n
        .then(({ data: e }) => {
          const t = yy(e),
            n = [],
            a = new Date().getFullYear();
          for (let r = a; r >= a - 3; r--)
            r >= sh.DateHelper.getYear(t[0].__dates[0]) && n.push(r);
          var i = ["1M", "3M", "6M", "1Y"];
          t[0].resampleToMonthly().__values.length >= 36 && i.push("3Y"),
            af.render(
              Q.jsxs(G.Fragment, {
                children: [
                  Q.jsxs("div", {
                    className: "col-12 col-md-6",
                    children: [
                      Q.jsx("h4", { children: "Värdeutveckling" }),
                      Q.jsx(vy, { timeseries: t }),
                    ],
                  }),
                  Q.jsx("br", {}),
                  Q.jsxs("div", {
                    className: "col-12 col-md-6",
                    children: [
                      Q.jsx("h4", { children: "Avkastning (%)" }),
                      Q.jsx(Ly, { timeseries: t, ranges: i }),
                      Q.jsx(Ly, { timeseries: t, ranges: n }),
                    ],
                  }),
                ],
              }),
              r
            );
        })
        .catch((e) => {
          console.log(e);
        }),
      a &&
        n &&
        n
          .then(({ data: e }) => {
            const t = e.navDate,
              n = yy(e);
            af.render(
              Q.jsxs("div", {
                className: "col-12 col-md-6",
                children: [
                  Q.jsxs("h4", { children: ["Nyckeltal - ", t.toString()] }),
                  Q.jsx(rb, {
                    masterTimeSeriesName: n[0].name,
                    timeseries: n,
                    navValue: e.navValue,
                  }),
                ],
              }),
              a
            );
          })
          .catch((e) => {
            console.log(e);
          }),
      i &&
        n &&
        n
          .then(({ data: e }) => {
            var t = e.classes.slice();
            t.sort((e, t) => e.shareClass - t.shareClass),
              af.render(
                Q.jsx(G.Fragment, {
                  children: Q.jsxs("div", {
                    className: "col-12 col-md-6",
                    children: [
                      Q.jsx("h4", { children: "Fakta om fonden" }),
                      e.classes.map((n, r) => {
                        var a = t.slice(r, r + 1);
                        return Q.jsx(
                          eb,
                          {
                            data: __spreadProps(__spreadValues({}, e), {
                              classes: a,
                            }),
                            className: "evenrowsgray fundclass",
                          },
                          r
                        );
                      }),
                    ],
                  }),
                }),
                i
              );
          })
          .catch((e) => {
            console.log(e);
          }),
      o &&
        af.render(
          Q.jsx(G.Fragment, { children: Q.jsx(jb, { uri: zb + "/v2/funds" }) }),
          o
        );
  };
})(Plotly, XLSX);

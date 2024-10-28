var __defProp = Object.defineProperty,
  __defProps = Object.defineProperties,
  __getOwnPropDescs = Object.getOwnPropertyDescriptors,
  __getOwnPropSymbols = Object.getOwnPropertySymbols,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __propIsEnum = Object.prototype.propertyIsEnumerable,
  __knownSymbol = (e, t) => ((t = Symbol[e]) ? t : Symbol.for("Symbol." + e)),
  __typeError = (e) => {
    throw TypeError(e);
  },
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
  },
  __publicField = (e, t, n) =>
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, n),
  __accessCheck = (e, t, n) => t.has(e) || __typeError("Cannot " + n),
  __privateGet = (e, t, n) => (
    __accessCheck(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  __privateAdd = (e, t, n) =>
    t.has(e)
      ? __typeError("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  __privateSet = (e, t, n, r) => (
    __accessCheck(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  __privateMethod = (e, t, n) => (
    __accessCheck(e, t, "access private method"), n
  ),
  __privateWrapper = (e, t, n, r) => ({
    set _(r) {
      __privateSet(e, t, r, n);
    },
    get _() {
      return __privateGet(e, t, r);
    },
  }),
  __await = function (e, t) {
    (this[0] = e), (this[1] = t);
  },
  __asyncGenerator = (e, t, n) => {
    var r = (e, t, a, o) => {
        try {
          var i = n[e](t),
            l = (t = i.value) instanceof __await,
            u = i.done;
          Promise.resolve(l ? t[0] : t)
            .then((n) =>
              l
                ? r(
                    "return" === e ? e : "next",
                    t[1] ? { done: n.done, value: n.value } : n,
                    a,
                    o
                  )
                : a({ value: n, done: u })
            )
            .catch((e) => r("throw", e, a, o));
        } catch (s) {
          o(s);
        }
      },
      a = (e) => (o[e] = (t) => new Promise((n, a) => r(e, t, n, a))),
      o = {};
    return (
      (n = n.apply(e, t)),
      (o[__knownSymbol("asyncIterator")] = () => o),
      a("next"),
      a("throw"),
      a("return"),
      o
    );
  },
  __yieldStar = (e) => {
    var t,
      n = e[__knownSymbol("asyncIterator")],
      r = !1,
      a = {};
    return (
      null == n
        ? ((n = e[__knownSymbol("iterator")]()),
          (t = (e) => (a[e] = (t) => n[e](t))))
        : ((n = n.call(e)),
          (t = (e) =>
            (a[e] = (t) => {
              if (r) {
                if (((r = !1), "throw" === e)) throw t;
                return t;
              }
              return (
                (r = !0),
                {
                  done: !1,
                  value: new __await(
                    new Promise((r) => {
                      var a = n[e](t);
                      a instanceof Object || __typeError("Object expected"),
                        r(a);
                    }),
                    1
                  ),
                }
              );
            }))),
      (a[__knownSymbol("iterator")] = () => a),
      t("next"),
      "throw" in n
        ? t("throw")
        : (a.throw = (e) => {
            throw e;
          }),
      "return" in n && t("return"),
      a
    );
  },
  __forAwait = (e, t, n) =>
    (t = e[__knownSymbol("asyncIterator")])
      ? t.call(e)
      : ((e = e[__knownSymbol("iterator")]()),
        (t = {}),
        (n = (n, r) =>
          (r = e[n]) &&
          (t[n] = (t) =>
            new Promise(
              (n, a, o) => (
                (t = r.call(e, t)),
                (o = t.done),
                Promise.resolve(t.value).then(
                  (e) => n({ value: e, done: o }),
                  a
                )
              )
            )))("next"),
        n("return"),
        t);
!(function (e, t) {
  "use strict";
  var n,
    r,
    a,
    o,
    i,
    l,
    u,
    s,
    c,
    f,
    d,
    p,
    h,
    v,
    g,
    y,
    m,
    _,
    b,
    w,
    S,
    k,
    x,
    E,
    C,
    O,
    N,
    A,
    T,
    R,
    j,
    M,
    P,
    F,
    z,
    D,
    L,
    I,
    G,
    U,
    $,
    B,
    W,
    V,
    H,
    q,
    Y,
    Q =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function K(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var J = { exports: {} },
    X = {},
    Z = { exports: {} },
    ee = {},
    te = Symbol.for("react.element"),
    ne = Symbol.for("react.portal"),
    re = Symbol.for("react.fragment"),
    ae = Symbol.for("react.strict_mode"),
    oe = Symbol.for("react.profiler"),
    ie = Symbol.for("react.provider"),
    le = Symbol.for("react.context"),
    ue = Symbol.for("react.forward_ref"),
    se = Symbol.for("react.suspense"),
    ce = Symbol.for("react.memo"),
    fe = Symbol.for("react.lazy"),
    de = Symbol.iterator,
    pe = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    he = Object.assign,
    ve = {};
  function ge(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ve),
      (this.updater = n || pe);
  }
  function ye() {}
  function me(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = ve),
      (this.updater = n || pe);
  }
  (ge.prototype.isReactComponent = {}),
    (ge.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (ge.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (ye.prototype = ge.prototype);
  var _e = (me.prototype = new ye());
  (_e.constructor = me), he(_e, ge.prototype), (_e.isPureReactComponent = !0);
  var be = Array.isArray,
    we = Object.prototype.hasOwnProperty,
    Se = { current: null },
    ke = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xe(e, t, n) {
    var r,
      a = {},
      o = null,
      i = null;
    if (null != t)
      for (r in (void 0 !== t.ref && (i = t.ref),
      void 0 !== t.key && (o = "" + t.key),
      t))
        we.call(t, r) && !ke.hasOwnProperty(r) && (a[r] = t[r]);
    var l = arguments.length - 2;
    if (1 === l) a.children = n;
    else if (1 < l) {
      for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
      a.children = u;
    }
    if (e && e.defaultProps)
      for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
    return {
      $$typeof: te,
      type: e,
      key: o,
      ref: i,
      props: a,
      _owner: Se.current,
    };
  }
  function Ee(e) {
    return "object" == typeof e && null !== e && e.$$typeof === te;
  }
  var Ce = /\/+/g;
  function Oe(e, t) {
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
  function Ne(e, t, n, r, a) {
    var o = typeof e;
    ("undefined" !== o && "boolean" !== o) || (e = null);
    var i,
      l,
      u = !1;
    if (null === e) u = !0;
    else
      switch (o) {
        case "string":
        case "number":
          u = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case te:
            case ne:
              u = !0;
          }
      }
    if (u)
      return (
        (a = a((u = e))),
        (e = "" === r ? "." + Oe(u, 0) : r),
        be(a)
          ? ((n = ""),
            null != e && (n = e.replace(Ce, "$&/") + "/"),
            Ne(a, t, n, "", function (e) {
              return e;
            }))
          : null != a &&
            (Ee(a) &&
              ((i = a),
              (l =
                n +
                (!a.key || (u && u.key === a.key)
                  ? ""
                  : ("" + a.key).replace(Ce, "$&/") + "/") +
                e),
              (a = {
                $$typeof: te,
                type: i.type,
                key: l,
                ref: i.ref,
                props: i.props,
                _owner: i._owner,
              })),
            t.push(a)),
        1
      );
    if (((u = 0), (r = "" === r ? "." : r + ":"), be(e)))
      for (var s = 0; s < e.length; s++) {
        var c = r + Oe((o = e[s]), s);
        u += Ne(o, t, n, c, a);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (de && e[de]) || e["@@iterator"])
          ? e
          : null;
      })(e)),
      "function" == typeof c)
    )
      for (e = c.call(e), s = 0; !(o = e.next()).done; )
        u += Ne((o = o.value), t, n, (c = r + Oe(o, s++)), a);
    else if ("object" === o)
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
    return u;
  }
  function Ae(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      Ne(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function Te(e) {
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
  var Re = { current: null },
    je = { transition: null },
    Me = {
      ReactCurrentDispatcher: Re,
      ReactCurrentBatchConfig: je,
      ReactCurrentOwner: Se,
    };
  function Pe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  (ee.Children = {
    map: Ae,
    forEach: function (e, t, n) {
      Ae(
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
        Ae(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Ae(e, function (e) {
          return e;
        }) || []
      );
    },
    only: function (e) {
      if (!Ee(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  }),
    (ee.Component = ge),
    (ee.Fragment = re),
    (ee.Profiler = oe),
    (ee.PureComponent = me),
    (ee.StrictMode = ae),
    (ee.Suspense = se),
    (ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Me),
    (ee.act = Pe),
    (ee.cloneElement = function (e, t, n) {
      if (null == e)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var r = he({}, e.props),
        a = e.key,
        o = e.ref,
        i = e._owner;
      if (null != t) {
        if (
          (void 0 !== t.ref && ((o = t.ref), (i = Se.current)),
          void 0 !== t.key && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var l = e.type.defaultProps;
        for (u in t)
          we.call(t, u) &&
            !ke.hasOwnProperty(u) &&
            (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
      }
      var u = arguments.length - 2;
      if (1 === u) r.children = n;
      else if (1 < u) {
        l = Array(u);
        for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
        r.children = l;
      }
      return {
        $$typeof: te,
        type: e.type,
        key: a,
        ref: o,
        props: r,
        _owner: i,
      };
    }),
    (ee.createContext = function (e) {
      return (
        ((e = {
          $$typeof: le,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: ie, _context: e }),
        (e.Consumer = e)
      );
    }),
    (ee.createElement = xe),
    (ee.createFactory = function (e) {
      var t = xe.bind(null, e);
      return (t.type = e), t;
    }),
    (ee.createRef = function () {
      return { current: null };
    }),
    (ee.forwardRef = function (e) {
      return { $$typeof: ue, render: e };
    }),
    (ee.isValidElement = Ee),
    (ee.lazy = function (e) {
      return { $$typeof: fe, _payload: { _status: -1, _result: e }, _init: Te };
    }),
    (ee.memo = function (e, t) {
      return { $$typeof: ce, type: e, compare: void 0 === t ? null : t };
    }),
    (ee.startTransition = function (e) {
      var t = je.transition;
      je.transition = {};
      try {
        e();
      } finally {
        je.transition = t;
      }
    }),
    (ee.unstable_act = Pe),
    (ee.useCallback = function (e, t) {
      return Re.current.useCallback(e, t);
    }),
    (ee.useContext = function (e) {
      return Re.current.useContext(e);
    }),
    (ee.useDebugValue = function () {}),
    (ee.useDeferredValue = function (e) {
      return Re.current.useDeferredValue(e);
    }),
    (ee.useEffect = function (e, t) {
      return Re.current.useEffect(e, t);
    }),
    (ee.useId = function () {
      return Re.current.useId();
    }),
    (ee.useImperativeHandle = function (e, t, n) {
      return Re.current.useImperativeHandle(e, t, n);
    }),
    (ee.useInsertionEffect = function (e, t) {
      return Re.current.useInsertionEffect(e, t);
    }),
    (ee.useLayoutEffect = function (e, t) {
      return Re.current.useLayoutEffect(e, t);
    }),
    (ee.useMemo = function (e, t) {
      return Re.current.useMemo(e, t);
    }),
    (ee.useReducer = function (e, t, n) {
      return Re.current.useReducer(e, t, n);
    }),
    (ee.useRef = function (e) {
      return Re.current.useRef(e);
    }),
    (ee.useState = function (e) {
      return Re.current.useState(e);
    }),
    (ee.useSyncExternalStore = function (e, t, n) {
      return Re.current.useSyncExternalStore(e, t, n);
    }),
    (ee.useTransition = function () {
      return Re.current.useTransition();
    }),
    (ee.version = "18.3.1"),
    (Z.exports = ee);
  var Fe = Z.exports;
  const ze = K(Fe);
  var De = Fe,
    Le = Symbol.for("react.element"),
    Ie = Symbol.for("react.fragment"),
    Ge = Object.prototype.hasOwnProperty,
    Ue =
      De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(e, t, n) {
    var r,
      a = {},
      o = null,
      i = null;
    for (r in (void 0 !== n && (o = "" + n),
    void 0 !== t.key && (o = "" + t.key),
    void 0 !== t.ref && (i = t.ref),
    t))
      Ge.call(t, r) && !$e.hasOwnProperty(r) && (a[r] = t[r]);
    if (e && e.defaultProps)
      for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
    return {
      $$typeof: Le,
      type: e,
      key: o,
      ref: i,
      props: a,
      _owner: Ue.current,
    };
  }
  (X.Fragment = Ie), (X.jsx = Be), (X.jsxs = Be), (J.exports = X);
  var We = J.exports,
    Ve = {},
    He = { exports: {} },
    qe = {},
    Ye = { exports: {} },
    Qe = {};
  !(function (e) {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          o = e[r];
        if (!(0 < a(o, t))) break e;
        (e[r] = t), (e[n] = o), (n = r);
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
        e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
          var l = 2 * (r + 1) - 1,
            u = e[l],
            s = l + 1,
            c = e[s];
          if (0 > a(u, n))
            s < o && 0 > a(c, u)
              ? ((e[r] = c), (e[s] = n), (r = s))
              : ((e[r] = u), (e[l] = n), (r = l));
          else {
            if (!(s < o && 0 > a(c, n))) break e;
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
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var i = Date,
        l = i.now();
      e.unstable_now = function () {
        return i.now() - l;
      };
    }
    var u = [],
      s = [],
      c = 1,
      f = null,
      d = 3,
      p = !1,
      h = !1,
      v = !1,
      g = "function" == typeof setTimeout ? setTimeout : null,
      y = "function" == typeof clearTimeout ? clearTimeout : null,
      m = "undefined" != typeof setImmediate ? setImmediate : null;
    function _(e) {
      for (var a = n(s); null !== a; ) {
        if (null === a.callback) r(s);
        else {
          if (!(a.startTime <= e)) break;
          r(s), (a.sortIndex = a.expirationTime), t(u, a);
        }
        a = n(s);
      }
    }
    function b(e) {
      if (((v = !1), _(e), !h))
        if (null !== n(u)) (h = !0), j(w);
        else {
          var t = n(s);
          null !== t && M(b, t.startTime - e);
        }
    }
    function w(t, a) {
      (h = !1), v && ((v = !1), y(E), (E = -1)), (p = !0);
      var o = d;
      try {
        for (
          _(a), f = n(u);
          null !== f && (!(f.expirationTime > a) || (t && !N()));

        ) {
          var i = f.callback;
          if ("function" == typeof i) {
            (f.callback = null), (d = f.priorityLevel);
            var l = i(f.expirationTime <= a);
            (a = e.unstable_now()),
              "function" == typeof l ? (f.callback = l) : f === n(u) && r(u),
              _(a);
          } else r(u);
          f = n(u);
        }
        if (null !== f) var c = !0;
        else {
          var g = n(s);
          null !== g && M(b, g.startTime - a), (c = !1);
        }
        return c;
      } finally {
        (f = null), (d = o), (p = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var S,
      k = !1,
      x = null,
      E = -1,
      C = 5,
      O = -1;
    function N() {
      return !(e.unstable_now() - O < C);
    }
    function A() {
      if (null !== x) {
        var t = e.unstable_now();
        O = t;
        var n = !0;
        try {
          n = x(!0, t);
        } finally {
          n ? S() : ((k = !1), (x = null));
        }
      } else k = !1;
    }
    if ("function" == typeof m)
      S = function () {
        m(A);
      };
    else if ("undefined" != typeof MessageChannel) {
      var T = new MessageChannel(),
        R = T.port2;
      (T.port1.onmessage = A),
        (S = function () {
          R.postMessage(null);
        });
    } else
      S = function () {
        g(A, 0);
      };
    function j(e) {
      (x = e), k || ((k = !0), S());
    }
    function M(t, n) {
      E = g(function () {
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
        h || p || ((h = !0), j(w));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(u);
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
      (e.unstable_scheduleCallback = function (r, a, o) {
        var i = e.unstable_now();
        switch (
          ((o =
            "object" == typeof o &&
            null !== o &&
            "number" == typeof (o = o.delay) &&
            0 < o
              ? i + o
              : i),
          r)
        ) {
          case 1:
            var l = -1;
            break;
          case 2:
            l = 250;
            break;
          case 5:
            l = 1073741823;
            break;
          case 4:
            l = 1e4;
            break;
          default:
            l = 5e3;
        }
        return (
          (r = {
            id: c++,
            callback: a,
            priorityLevel: r,
            startTime: o,
            expirationTime: (l = o + l),
            sortIndex: -1,
          }),
          o > i
            ? ((r.sortIndex = o),
              t(s, r),
              null === n(u) &&
                r === n(s) &&
                (v ? (y(E), (E = -1)) : (v = !0), M(b, o - i)))
            : ((r.sortIndex = l), t(u, r), h || p || ((h = !0), j(w))),
          r
        );
      }),
      (e.unstable_shouldYield = N),
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
  })(Qe),
    (Ye.exports = Qe);
  var Ke = Ye.exports,
    Je = Fe,
    Xe = Ke;
  function Ze(e) {
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
  var et = new Set(),
    tt = {};
  function nt(e, t) {
    rt(e, t), rt(e + "Capture", t);
  }
  function rt(e, t) {
    for (tt[e] = t, e = 0; e < t.length; e++) et.add(t[e]);
  }
  var at = !(
      "undefined" == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    ),
    ot = Object.prototype.hasOwnProperty,
    it =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    lt = {},
    ut = {};
  function st(e, t, n, r, a, o, i) {
    (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = i);
  }
  var ct = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      ct[e] = new st(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ct[t] = new st(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      ct[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ct[e] = new st(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ct[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ct[e] = new st(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      ct[e] = new st(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ct[e] = new st(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      ct[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ft = /[\-:]([a-z])/g;
  function dt(e) {
    return e[1].toUpperCase();
  }
  function pt(e, t, n, r) {
    var a,
      o = ct.hasOwnProperty(t) ? ct[t] : null;
    (null !== o
      ? 0 !== o.type
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
      })(t, n, o, r) && (n = null),
      r || null === o
        ? ((a = t),
          (ot.call(ut, a) ||
            (!ot.call(lt, a) &&
              (it.test(a) ? (ut[a] = !0) : ((lt[a] = !0), 0)))) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)))
        : o.mustUseProperty
        ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          null === n
            ? e.removeAttribute(t)
            : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ft, dt);
      ct[t] = new st(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ft, dt);
        ct[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ft, dt);
      ct[t] = new st(
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
      ct[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (ct.xlinkHref = new st(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ct[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  var ht = Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    vt = Symbol.for("react.element"),
    gt = Symbol.for("react.portal"),
    yt = Symbol.for("react.fragment"),
    mt = Symbol.for("react.strict_mode"),
    _t = Symbol.for("react.profiler"),
    bt = Symbol.for("react.provider"),
    wt = Symbol.for("react.context"),
    St = Symbol.for("react.forward_ref"),
    kt = Symbol.for("react.suspense"),
    xt = Symbol.for("react.suspense_list"),
    Et = Symbol.for("react.memo"),
    Ct = Symbol.for("react.lazy"),
    Ot = Symbol.for("react.offscreen"),
    Nt = Symbol.iterator;
  function At(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (Nt && e[Nt]) || e["@@iterator"])
      ? e
      : null;
  }
  var Tt,
    Rt = Object.assign;
  function jt(e) {
    if (void 0 === Tt)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Tt = (t && t[1]) || "";
      }
    return "\n" + Tt + e;
  }
  var Mt = !1;
  function Pt(e, t) {
    if (!e || Mt) return "";
    Mt = !0;
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
            o = r.stack.split("\n"),
            i = a.length - 1,
            l = o.length - 1;
          1 <= i && 0 <= l && a[i] !== o[l];

        )
          l--;
        for (; 1 <= i && 0 <= l; i--, l--)
          if (a[i] !== o[l]) {
            if (1 !== i || 1 !== l)
              do {
                if ((i--, 0 > --l || a[i] !== o[l])) {
                  var u = "\n" + a[i].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      u.includes("<anonymous>") &&
                      (u = u.replace("<anonymous>", e.displayName)),
                    u
                  );
                }
              } while (1 <= i && 0 <= l);
            break;
          }
      }
    } finally {
      (Mt = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? jt(e) : "";
  }
  function Ft(e) {
    switch (e.tag) {
      case 5:
        return jt(e.type);
      case 16:
        return jt("Lazy");
      case 13:
        return jt("Suspense");
      case 19:
        return jt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return Pt(e.type, !1);
      case 11:
        return Pt(e.type.render, !1);
      case 1:
        return Pt(e.type, !0);
      default:
        return "";
    }
  }
  function zt(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case yt:
        return "Fragment";
      case gt:
        return "Portal";
      case _t:
        return "Profiler";
      case mt:
        return "StrictMode";
      case kt:
        return "Suspense";
      case xt:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case wt:
          return (e.displayName || "Context") + ".Consumer";
        case bt:
          return (e._context.displayName || "Context") + ".Provider";
        case St:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case Et:
          return null !== (t = e.displayName || null)
            ? t
            : zt(e.type) || "Memo";
        case Ct:
          (t = e._payload), (e = e._init);
          try {
            return zt(e(t));
          } catch (n) {}
      }
    return null;
  }
  function Dt(e) {
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
        return zt(t);
      case 8:
        return t === mt ? "StrictMode" : "Mode";
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
  function Lt(e) {
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
  function It(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function Gt(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = It(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            o = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                (r = "" + e), o.call(this, e);
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
  function Ut(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = It(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function $t(e) {
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
  function Bt(e, t) {
    var n = t.checked;
    return Rt({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function Wt(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    (n = Lt(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      });
  }
  function Vt(e, t) {
    null != (t = t.checked) && pt(e, "checked", t, !1);
  }
  function Ht(e, t) {
    Vt(e, t);
    var n = Lt(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    t.hasOwnProperty("value")
      ? Yt(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Yt(e, t.type, Lt(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function qt(e, t, n) {
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
  function Yt(e, t, n) {
    ("number" === t && $t(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Qt = Array.isArray;
  function Kt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        (a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Lt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function Jt(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(Ze(91));
    return Rt({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Xt(e, t) {
    var n = t.value;
    if (null == n) {
      if (((n = t.children), (t = t.defaultValue), null != n)) {
        if (null != t) throw Error(Ze(92));
        if (Qt(n)) {
          if (1 < n.length) throw Error(Ze(93));
          n = n[0];
        }
        t = n;
      }
      null == t && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Lt(n) };
  }
  function Zt(e, t) {
    var n = Lt(t.value),
      r = Lt(t.defaultValue);
    null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r);
  }
  function en(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function tn(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function nn(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? tn(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var rn,
    an,
    on =
      ((an = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (rn = rn || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = rn.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return an(e, t);
            });
          }
        : an);
  function ln(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var un = {
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
    sn = ["Webkit", "ms", "Moz", "O"];
  function cn(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (un.hasOwnProperty(e) && un[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function fn(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = cn(n, t[n], r);
        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
      }
  }
  Object.keys(un).forEach(function (e) {
    sn.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (un[t] = un[e]);
    });
  });
  var dn = Rt(
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
  function pn(e, t) {
    if (t) {
      if (dn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(Ze(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(Ze(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(Ze(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(Ze(62));
    }
  }
  function hn(e, t) {
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
  var vn = null;
  function gn(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var yn = null,
    mn = null,
    _n = null;
  function bn(e) {
    if ((e = hi(e))) {
      if ("function" != typeof yn) throw Error(Ze(280));
      var t = e.stateNode;
      t && ((t = gi(t)), yn(e.stateNode, e.type, t));
    }
  }
  function wn(e) {
    mn ? (_n ? _n.push(e) : (_n = [e])) : (mn = e);
  }
  function Sn() {
    if (mn) {
      var e = mn,
        t = _n;
      if (((_n = mn = null), bn(e), t)) for (e = 0; e < t.length; e++) bn(t[e]);
    }
  }
  function kn(e, t) {
    return e(t);
  }
  function xn() {}
  var En = !1;
  function Cn(e, t, n) {
    if (En) return e(t, n);
    En = !0;
    try {
      return kn(e, t, n);
    } finally {
      (En = !1), (null !== mn || null !== _n) && (xn(), Sn());
    }
  }
  function On(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = gi(n);
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
    if (n && "function" != typeof n) throw Error(Ze(231, t, typeof n));
    return n;
  }
  var Nn = !1;
  if (at)
    try {
      var An = {};
      Object.defineProperty(An, "passive", {
        get: function () {
          Nn = !0;
        },
      }),
        window.addEventListener("test", An, An),
        window.removeEventListener("test", An, An);
    } catch (i_) {
      Nn = !1;
    }
  function Tn(e, t, n, r, a, o, i, l, u) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (c) {
      this.onError(c);
    }
  }
  var Rn = !1,
    jn = null,
    Mn = !1,
    Pn = null,
    Fn = {
      onError: function (e) {
        (Rn = !0), (jn = e);
      },
    };
  function zn(e, t, n, r, a, o, i, l, u) {
    (Rn = !1), (jn = null), Tn.apply(Fn, arguments);
  }
  function Dn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do {
        !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function Ln(e) {
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
  function In(e) {
    if (Dn(e) !== e) throw Error(Ze(188));
  }
  function Gn(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Dn(e))) throw Error(Ze(188));
          return t !== e ? null : e;
        }
        for (var n = e, r = t; ; ) {
          var a = n.return;
          if (null === a) break;
          var o = a.alternate;
          if (null === o) {
            if (null !== (r = a.return)) {
              n = r;
              continue;
            }
            break;
          }
          if (a.child === o.child) {
            for (o = a.child; o; ) {
              if (o === n) return In(a), e;
              if (o === r) return In(a), t;
              o = o.sibling;
            }
            throw Error(Ze(188));
          }
          if (n.return !== r.return) (n = a), (r = o);
          else {
            for (var i = !1, l = a.child; l; ) {
              if (l === n) {
                (i = !0), (n = a), (r = o);
                break;
              }
              if (l === r) {
                (i = !0), (r = a), (n = o);
                break;
              }
              l = l.sibling;
            }
            if (!i) {
              for (l = o.child; l; ) {
                if (l === n) {
                  (i = !0), (n = o), (r = a);
                  break;
                }
                if (l === r) {
                  (i = !0), (r = o), (n = a);
                  break;
                }
                l = l.sibling;
              }
              if (!i) throw Error(Ze(189));
            }
          }
          if (n.alternate !== r) throw Error(Ze(190));
        }
        if (3 !== n.tag) throw Error(Ze(188));
        return n.stateNode.current === n ? e : t;
      })(e))
      ? Un(e)
      : null;
  }
  function Un(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e; ) {
      var t = Un(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var $n = Xe.unstable_scheduleCallback,
    Bn = Xe.unstable_cancelCallback,
    Wn = Xe.unstable_shouldYield,
    Vn = Xe.unstable_requestPaint,
    Hn = Xe.unstable_now,
    qn = Xe.unstable_getCurrentPriorityLevel,
    Yn = Xe.unstable_ImmediatePriority,
    Qn = Xe.unstable_UserBlockingPriority,
    Kn = Xe.unstable_NormalPriority,
    Jn = Xe.unstable_LowPriority,
    Xn = Xe.unstable_IdlePriority,
    Zn = null,
    er = null,
    tr = Math.clz32
      ? Math.clz32
      : function (e) {
          return 0 === (e >>>= 0) ? 32 : (31 - ((nr(e) / rr) | 0)) | 0;
        },
    nr = Math.log,
    rr = Math.LN2,
    ar = 64,
    or = 4194304;
  function ir(e) {
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
  function lr(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      a = e.suspendedLanes,
      o = e.pingedLanes,
      i = 268435455 & n;
    if (0 !== i) {
      var l = i & ~a;
      0 !== l ? (r = ir(l)) : 0 != (o &= i) && (r = ir(o));
    } else 0 != (i = n & ~a) ? (r = ir(i)) : 0 !== o && (r = ir(o));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      !(t & a) &&
      ((a = r & -r) >= (o = t & -t) || (16 === a && 4194240 & o))
    )
      return t;
    if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t; )
        (a = 1 << (n = 31 - tr(t))), (r |= e[n]), (t &= ~a);
    return r;
  }
  function ur(e, t) {
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
  function sr(e) {
    return 0 != (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
      ? 1073741824
      : 0;
  }
  function cr() {
    var e = ar;
    return !(4194240 & (ar <<= 1)) && (ar = 64), e;
  }
  function fr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function dr(e, t, n) {
    (e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - tr(t))] = n);
  }
  function pr(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - tr(n),
        a = 1 << r;
      (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
    }
  }
  var hr = 0;
  function vr(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
  }
  var gr,
    yr,
    mr,
    _r,
    br,
    wr = !1,
    Sr = [],
    kr = null,
    xr = null,
    Er = null,
    Cr = new Map(),
    Or = new Map(),
    Nr = [],
    Ar =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Tr(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        kr = null;
        break;
      case "dragenter":
      case "dragleave":
        xr = null;
        break;
      case "mouseover":
      case "mouseout":
        Er = null;
        break;
      case "pointerover":
      case "pointerout":
        Cr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Or.delete(t.pointerId);
    }
  }
  function Rr(e, t, n, r, a, o) {
    return null === e || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [a],
        }),
        null !== t && null !== (t = hi(t)) && yr(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function jr(e) {
    var t = pi(e.target);
    if (null !== t) {
      var n = Dn(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = Ln(n)))
            return (
              (e.blockedOn = t),
              void br(e.priority, function () {
                mr(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Mr(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Wr(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return null !== (t = hi(n)) && yr(t), (e.blockedOn = n), !1;
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      (vn = r), n.target.dispatchEvent(r), (vn = null), t.shift();
    }
    return !0;
  }
  function Pr(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function Fr() {
    (wr = !1),
      null !== kr && Mr(kr) && (kr = null),
      null !== xr && Mr(xr) && (xr = null),
      null !== Er && Mr(Er) && (Er = null),
      Cr.forEach(Pr),
      Or.forEach(Pr);
  }
  function zr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wr ||
        ((wr = !0),
        Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Fr)));
  }
  function Dr(e) {
    function t(t) {
      return zr(t, e);
    }
    if (0 < Sr.length) {
      zr(Sr[0], e);
      for (var n = 1; n < Sr.length; n++) {
        var r = Sr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== kr && zr(kr, e),
        null !== xr && zr(xr, e),
        null !== Er && zr(Er, e),
        Cr.forEach(t),
        Or.forEach(t),
        n = 0;
      n < Nr.length;
      n++
    )
      (r = Nr[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < Nr.length && null === (n = Nr[0]).blockedOn; )
      jr(n), null === n.blockedOn && Nr.shift();
  }
  var Lr = ht.ReactCurrentBatchConfig,
    Ir = !0;
  function Gr(e, t, n, r) {
    var a = hr,
      o = Lr.transition;
    Lr.transition = null;
    try {
      (hr = 1), $r(e, t, n, r);
    } finally {
      (hr = a), (Lr.transition = o);
    }
  }
  function Ur(e, t, n, r) {
    var a = hr,
      o = Lr.transition;
    Lr.transition = null;
    try {
      (hr = 4), $r(e, t, n, r);
    } finally {
      (hr = a), (Lr.transition = o);
    }
  }
  function $r(e, t, n, r) {
    if (Ir) {
      var a = Wr(e, t, n, r);
      if (null === a) Io(e, t, r, Br, n), Tr(e, r);
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case "focusin":
              return (kr = Rr(kr, e, t, n, r, a)), !0;
            case "dragenter":
              return (xr = Rr(xr, e, t, n, r, a)), !0;
            case "mouseover":
              return (Er = Rr(Er, e, t, n, r, a)), !0;
            case "pointerover":
              var o = a.pointerId;
              return Cr.set(o, Rr(Cr.get(o) || null, e, t, n, r, a)), !0;
            case "gotpointercapture":
              return (
                (o = a.pointerId),
                Or.set(o, Rr(Or.get(o) || null, e, t, n, r, a)),
                !0
              );
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((Tr(e, r), 4 & t && -1 < Ar.indexOf(e))) {
        for (; null !== a; ) {
          var o = hi(a);
          if (
            (null !== o && gr(o),
            null === (o = Wr(e, t, n, r)) && Io(e, t, r, Br, n),
            o === a)
          )
            break;
          a = o;
        }
        null !== a && r.stopPropagation();
      } else Io(e, t, r, null, n);
    }
  }
  var Br = null;
  function Wr(e, t, n, r) {
    if (((Br = null), null !== (e = pi((e = gn(r))))))
      if (null === (t = Dn(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = Ln(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Br = e), null;
  }
  function Vr(e) {
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
        switch (qn()) {
          case Yn:
            return 1;
          case Qn:
            return 4;
          case Kn:
          case Jn:
            return 16;
          case Xn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Hr = null,
    qr = null,
    Yr = null;
  function Qr() {
    if (Yr) return Yr;
    var e,
      t,
      n = qr,
      r = n.length,
      a = "value" in Hr ? Hr.value : Hr.textContent,
      o = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
    return (Yr = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function Kr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function Jr() {
    return !0;
  }
  function Xr() {
    return !1;
  }
  function Zr(e) {
    function t(t, n, r, a, o) {
      for (var i in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? Jr
          : Xr),
        (this.isPropagationStopped = Xr),
        this
      );
    }
    return (
      Rt(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = Jr));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = Jr));
        },
        persist: function () {},
        isPersistent: Jr,
      }),
      t
    );
  }
  var ea,
    ta,
    na,
    ra = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    aa = Zr(ra),
    oa = Rt({}, ra, { view: 0, detail: 0 }),
    ia = Zr(oa),
    la = Rt({}, oa, {
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
      getModifierState: _a,
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
          : (e !== na &&
              (na && "mousemove" === e.type
                ? ((ea = e.screenX - na.screenX), (ta = e.screenY - na.screenY))
                : (ta = ea = 0),
              (na = e)),
            ea);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ta;
      },
    }),
    ua = Zr(la),
    sa = Zr(Rt({}, la, { dataTransfer: 0 })),
    ca = Zr(Rt({}, oa, { relatedTarget: 0 })),
    fa = Zr(Rt({}, ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    da = Rt({}, ra, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    pa = Zr(da),
    ha = Zr(Rt({}, ra, { data: 0 })),
    va = {
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
    ga = {
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
    ya = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ma(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = ya[e]) && !!t[e];
  }
  function _a() {
    return ma;
  }
  var ba = Rt({}, oa, {
      key: function (e) {
        if (e.key) {
          var t = va[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = Kr(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
          ? ga[e.keyCode] || "Unidentified"
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
      getModifierState: _a,
      charCode: function (e) {
        return "keypress" === e.type ? Kr(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? Kr(e)
          : "keydown" === e.type || "keyup" === e.type
          ? e.keyCode
          : 0;
      },
    }),
    wa = Zr(ba),
    Sa = Zr(
      Rt({}, la, {
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
    ka = Zr(
      Rt({}, oa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _a,
      })
    ),
    xa = Zr(Rt({}, ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Ea = Rt({}, la, {
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
    Ca = Zr(Ea),
    Oa = [9, 13, 27, 32],
    Na = at && "CompositionEvent" in window,
    Aa = null;
  at && "documentMode" in document && (Aa = document.documentMode);
  var Ta = at && "TextEvent" in window && !Aa,
    Ra = at && (!Na || (Aa && 8 < Aa && 11 >= Aa)),
    ja = String.fromCharCode(32),
    Ma = !1;
  function Pa(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== Oa.indexOf(t.keyCode);
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
  function Fa(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var za = !1,
    Da = {
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
  function La(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Da[e.type] : "textarea" === t;
  }
  function Ia(e, t, n, r) {
    wn(r),
      0 < (t = Uo(t, "onChange")).length &&
        ((n = new aa("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Ga = null,
    Ua = null;
  function $a(e) {
    Mo(e, 0);
  }
  function Ba(e) {
    if (Ut(vi(e))) return e;
  }
  function Wa(e, t) {
    if ("change" === e) return t;
  }
  var Va = !1;
  if (at) {
    var Ha;
    if (at) {
      var qa = "oninput" in document;
      if (!qa) {
        var Ya = document.createElement("div");
        Ya.setAttribute("oninput", "return;"),
          (qa = "function" == typeof Ya.oninput);
      }
      Ha = qa;
    } else Ha = !1;
    Va = Ha && (!document.documentMode || 9 < document.documentMode);
  }
  function Qa() {
    Ga && (Ga.detachEvent("onpropertychange", Ka), (Ua = Ga = null));
  }
  function Ka(e) {
    if ("value" === e.propertyName && Ba(Ua)) {
      var t = [];
      Ia(t, Ua, e, gn(e)), Cn($a, t);
    }
  }
  function Ja(e, t, n) {
    "focusin" === e
      ? (Qa(), (Ua = n), (Ga = t).attachEvent("onpropertychange", Ka))
      : "focusout" === e && Qa();
  }
  function Xa(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Ba(Ua);
  }
  function Za(e, t) {
    if ("click" === e) return Ba(t);
  }
  function eo(e, t) {
    if ("input" === e || "change" === e) return Ba(t);
  }
  var to =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function no(e, t) {
    if (to(e, t)) return !0;
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
      if (!ot.call(t, a) || !to(e[a], t[a])) return !1;
    }
    return !0;
  }
  function ro(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ao(e, t) {
    var n,
      r = ro(e);
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
      r = ro(r);
    }
  }
  function oo(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? oo(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : !!e.compareDocumentPosition &&
              !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function io() {
    for (var e = window, t = $t(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (r) {
        n = !1;
      }
      if (!n) break;
      t = $t((e = t.contentWindow).document);
    }
    return t;
  }
  function lo(e) {
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
  function uo(e) {
    var t = io(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      oo(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && lo(n))
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
            o = Math.min(r.start, a);
          (r = void 0 === r.end ? o : Math.min(r.end, a)),
            !e.extend && o > r && ((a = r), (r = o), (o = a)),
            (a = ao(n, o));
          var i = ao(n, r);
          a &&
            i &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== i.node ||
              e.focusOffset !== i.offset) &&
            ((t = t.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(i.node, i.offset))
              : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode); )
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
  }
  var so = at && "documentMode" in document && 11 >= document.documentMode,
    co = null,
    fo = null,
    po = null,
    ho = !1;
  function vo(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    ho ||
      null == co ||
      co !== $t(r) ||
      ((r =
        "selectionStart" in (r = co) && lo(r)
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
      (po && no(po, r)) ||
        ((po = r),
        0 < (r = Uo(fo, "onSelect")).length &&
          ((t = new aa("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = co))));
  }
  function go(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var yo = {
      animationend: go("Animation", "AnimationEnd"),
      animationiteration: go("Animation", "AnimationIteration"),
      animationstart: go("Animation", "AnimationStart"),
      transitionend: go("Transition", "TransitionEnd"),
    },
    mo = {},
    _o = {};
  function bo(e) {
    if (mo[e]) return mo[e];
    if (!yo[e]) return e;
    var t,
      n = yo[e];
    for (t in n) if (n.hasOwnProperty(t) && t in _o) return (mo[e] = n[t]);
    return e;
  }
  at &&
    ((_o = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete yo.animationend.animation,
      delete yo.animationiteration.animation,
      delete yo.animationstart.animation),
    "TransitionEvent" in window || delete yo.transitionend.transition);
  var wo = bo("animationend"),
    So = bo("animationiteration"),
    ko = bo("animationstart"),
    xo = bo("transitionend"),
    Eo = new Map(),
    Co =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Oo(e, t) {
    Eo.set(e, t), nt(t, [e]);
  }
  for (var No = 0; No < Co.length; No++) {
    var Ao = Co[No];
    Oo(Ao.toLowerCase(), "on" + (Ao[0].toUpperCase() + Ao.slice(1)));
  }
  Oo(wo, "onAnimationEnd"),
    Oo(So, "onAnimationIteration"),
    Oo(ko, "onAnimationStart"),
    Oo("dblclick", "onDoubleClick"),
    Oo("focusin", "onFocus"),
    Oo("focusout", "onBlur"),
    Oo(xo, "onTransitionEnd"),
    rt("onMouseEnter", ["mouseout", "mouseover"]),
    rt("onMouseLeave", ["mouseout", "mouseover"]),
    rt("onPointerEnter", ["pointerout", "pointerover"]),
    rt("onPointerLeave", ["pointerout", "pointerover"]),
    nt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    nt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    nt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    nt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    nt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    nt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var To =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ro = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(To)
    );
  function jo(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n),
      (function (e, t, n, r, a, o, i, l, u) {
        if ((zn.apply(this, arguments), Rn)) {
          if (!Rn) throw Error(Ze(198));
          var s = jn;
          (Rn = !1), (jn = null), Mn || ((Mn = !0), (Pn = s));
        }
      })(r, t, void 0, e),
      (e.currentTarget = null);
  }
  function Mo(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var i = r.length - 1; 0 <= i; i--) {
            var l = r[i],
              u = l.instance,
              s = l.currentTarget;
            if (((l = l.listener), u !== o && a.isPropagationStopped()))
              break e;
            jo(a, l, s), (o = u);
          }
        else
          for (i = 0; i < r.length; i++) {
            if (
              ((u = (l = r[i]).instance),
              (s = l.currentTarget),
              (l = l.listener),
              u !== o && a.isPropagationStopped())
            )
              break e;
            jo(a, l, s), (o = u);
          }
      }
    }
    if (Mn) throw ((e = Pn), (Mn = !1), (Pn = null), e);
  }
  function Po(e, t) {
    var n = t[ci];
    void 0 === n && (n = t[ci] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Lo(t, e, 2, !1), n.add(r));
  }
  function Fo(e, t, n) {
    var r = 0;
    t && (r |= 4), Lo(n, e, r, t);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Do(e) {
    if (!e[zo]) {
      (e[zo] = !0),
        et.forEach(function (t) {
          "selectionchange" !== t && (Ro.has(t) || Fo(t, !1, e), Fo(t, !0, e));
        });
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[zo] || ((t[zo] = !0), Fo("selectionchange", !1, t));
    }
  }
  function Lo(e, t, n, r) {
    switch (Vr(t)) {
      case 1:
        var a = Gr;
        break;
      case 4:
        a = Ur;
        break;
      default:
        a = $r;
    }
    (n = a.bind(null, t, n, e)),
      (a = void 0),
      !Nn ||
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
  function Io(e, t, n, r, a) {
    var o = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
          var l = r.stateNode.containerInfo;
          if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
          if (4 === i)
            for (i = r.return; null !== i; ) {
              var u = i.tag;
              if (
                (3 === u || 4 === u) &&
                ((u = i.stateNode.containerInfo) === a ||
                  (8 === u.nodeType && u.parentNode === a))
              )
                return;
              i = i.return;
            }
          for (; null !== l; ) {
            if (null === (i = pi(l))) return;
            if (5 === (u = i.tag) || 6 === u) {
              r = o = i;
              continue e;
            }
            l = l.parentNode;
          }
        }
        r = r.return;
      }
    Cn(function () {
      var r = o,
        a = gn(n),
        i = [];
      e: {
        var l = Eo.get(e);
        if (void 0 !== l) {
          var u = aa,
            s = e;
          switch (e) {
            case "keypress":
              if (0 === Kr(n)) break e;
            case "keydown":
            case "keyup":
              u = wa;
              break;
            case "focusin":
              (s = "focus"), (u = ca);
              break;
            case "focusout":
              (s = "blur"), (u = ca);
              break;
            case "beforeblur":
            case "afterblur":
              u = ca;
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
              u = ua;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              u = sa;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              u = ka;
              break;
            case wo:
            case So:
            case ko:
              u = fa;
              break;
            case xo:
              u = xa;
              break;
            case "scroll":
              u = ia;
              break;
            case "wheel":
              u = Ca;
              break;
            case "copy":
            case "cut":
            case "paste":
              u = pa;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              u = Sa;
          }
          var c = !!(4 & t),
            f = !c && "scroll" === e,
            d = c ? (null !== l ? l + "Capture" : null) : l;
          c = [];
          for (var p, h = r; null !== h; ) {
            var v = (p = h).stateNode;
            if (
              (5 === p.tag &&
                null !== v &&
                ((p = v),
                null !== d && null != (v = On(h, d)) && c.push(Go(h, v, p))),
              f)
            )
              break;
            h = h.return;
          }
          0 < c.length &&
            ((l = new u(l, s, null, n, a)), i.push({ event: l, listeners: c }));
        }
      }
      if (!(7 & t)) {
        if (
          ((u = "mouseout" === e || "pointerout" === e),
          (!(l = "mouseover" === e || "pointerover" === e) ||
            n === vn ||
            !(s = n.relatedTarget || n.fromElement) ||
            (!pi(s) && !s[si])) &&
            (u || l) &&
            ((l =
              a.window === a
                ? a
                : (l = a.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
            u
              ? ((u = r),
                null !==
                  (s = (s = n.relatedTarget || n.toElement) ? pi(s) : null) &&
                  (s !== (f = Dn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                  (s = null))
              : ((u = null), (s = r)),
            u !== s))
        ) {
          if (
            ((c = ua),
            (v = "onMouseLeave"),
            (d = "onMouseEnter"),
            (h = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = Sa),
              (v = "onPointerLeave"),
              (d = "onPointerEnter"),
              (h = "pointer")),
            (f = null == u ? l : vi(u)),
            (p = null == s ? l : vi(s)),
            ((l = new c(v, h + "leave", u, n, a)).target = f),
            (l.relatedTarget = p),
            (v = null),
            pi(a) === r &&
              (((c = new c(d, h + "enter", s, n, a)).target = p),
              (c.relatedTarget = f),
              (v = c)),
            (f = v),
            u && s)
          )
            e: {
              for (d = s, h = 0, p = c = u; p; p = $o(p)) h++;
              for (p = 0, v = d; v; v = $o(v)) p++;
              for (; 0 < h - p; ) (c = $o(c)), h--;
              for (; 0 < p - h; ) (d = $o(d)), p--;
              for (; h--; ) {
                if (c === d || (null !== d && c === d.alternate)) break e;
                (c = $o(c)), (d = $o(d));
              }
              c = null;
            }
          else c = null;
          null !== u && Bo(i, l, u, c, !1),
            null !== s && null !== f && Bo(i, f, s, c, !0);
        }
        if (
          "select" ===
            (u =
              (l = r ? vi(r) : window).nodeName && l.nodeName.toLowerCase()) ||
          ("input" === u && "file" === l.type)
        )
          var g = Wa;
        else if (La(l))
          if (Va) g = eo;
          else {
            g = Xa;
            var y = Ja;
          }
        else
          (u = l.nodeName) &&
            "input" === u.toLowerCase() &&
            ("checkbox" === l.type || "radio" === l.type) &&
            (g = Za);
        switch (
          (g && (g = g(e, r))
            ? Ia(i, g, n, a)
            : (y && y(e, l, r),
              "focusout" === e &&
                (y = l._wrapperState) &&
                y.controlled &&
                "number" === l.type &&
                Yt(l, "number", l.value)),
          (y = r ? vi(r) : window),
          e)
        ) {
          case "focusin":
            (La(y) || "true" === y.contentEditable) &&
              ((co = y), (fo = r), (po = null));
            break;
          case "focusout":
            po = fo = co = null;
            break;
          case "mousedown":
            ho = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ho = !1), vo(i, n, a);
            break;
          case "selectionchange":
            if (so) break;
          case "keydown":
          case "keyup":
            vo(i, n, a);
        }
        var m;
        if (Na)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          za
            ? Pa(e, n) && (_ = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (_ = "onCompositionStart");
        _ &&
          (Ra &&
            "ko" !== n.locale &&
            (za || "onCompositionStart" !== _
              ? "onCompositionEnd" === _ && za && (m = Qr())
              : ((qr = "value" in (Hr = a) ? Hr.value : Hr.textContent),
                (za = !0))),
          0 < (y = Uo(r, _)).length &&
            ((_ = new ha(_, e, null, n, a)),
            i.push({ event: _, listeners: y }),
            (m || null !== (m = Fa(n))) && (_.data = m))),
          (m = Ta
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return Fa(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Ma = !0), ja);
                  case "textInput":
                    return (e = t.data) === ja && Ma ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (za)
                  return "compositionend" === e || (!Na && Pa(e, t))
                    ? ((e = Qr()), (Yr = qr = Hr = null), (za = !1), e)
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
                    return Ra && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = Uo(r, "onBeforeInput")).length &&
            ((a = new ha("onBeforeInput", "beforeinput", null, n, a)),
            i.push({ event: a, listeners: r }),
            (a.data = m));
      }
      Mo(i, t);
    });
  }
  function Go(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Uo(e, t) {
    for (var n = t + "Capture", r = []; null !== e; ) {
      var a = e,
        o = a.stateNode;
      5 === a.tag &&
        null !== o &&
        ((a = o),
        null != (o = On(e, n)) && r.unshift(Go(e, o, a)),
        null != (o = On(e, t)) && r.push(Go(e, o, a))),
        (e = e.return);
    }
    return r;
  }
  function $o(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Bo(e, t, n, r, a) {
    for (var o = t._reactName, i = []; null !== n && n !== r; ) {
      var l = n,
        u = l.alternate,
        s = l.stateNode;
      if (null !== u && u === r) break;
      5 === l.tag &&
        null !== s &&
        ((l = s),
        a
          ? null != (u = On(n, o)) && i.unshift(Go(n, u, l))
          : a || (null != (u = On(n, o)) && i.push(Go(n, u, l)))),
        (n = n.return);
    }
    0 !== i.length && e.push({ event: t, listeners: i });
  }
  var Wo = /\r\n?/g,
    Vo = /\u0000|\uFFFD/g;
  function Ho(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Wo, "\n")
      .replace(Vo, "");
  }
  function qo(e, t, n) {
    if (((t = Ho(t)), Ho(e) !== t && n)) throw Error(Ze(425));
  }
  function Yo() {}
  var Qo = null,
    Ko = null;
  function Jo(e, t) {
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
  var Xo = "function" == typeof setTimeout ? setTimeout : void 0,
    Zo = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ei = "function" == typeof Promise ? Promise : void 0,
    ti =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== ei
        ? function (e) {
            return ei.resolve(null).then(e).catch(ni);
          }
        : Xo;
  function ni(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ri(e, t) {
    var n = t,
      r = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && 8 === a.nodeType))
        if ("/$" === (n = a.data)) {
          if (0 === r) return e.removeChild(a), void Dr(t);
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = a;
    } while (n);
    Dr(t);
  }
  function ai(e) {
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
  function oi(e) {
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
  var ii = Math.random().toString(36).slice(2),
    li = "__reactFiber$" + ii,
    ui = "__reactProps$" + ii,
    si = "__reactContainer$" + ii,
    ci = "__reactEvents$" + ii,
    fi = "__reactListeners$" + ii,
    di = "__reactHandles$" + ii;
  function pi(e) {
    var t = e[li];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[si] || n[li])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = oi(e); null !== e; ) {
            if ((n = e[li])) return n;
            e = oi(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function hi(e) {
    return !(e = e[li] || e[si]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function vi(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(Ze(33));
  }
  function gi(e) {
    return e[ui] || null;
  }
  var yi = [],
    mi = -1;
  function _i(e) {
    return { current: e };
  }
  function bi(e) {
    0 > mi || ((e.current = yi[mi]), (yi[mi] = null), mi--);
  }
  function wi(e, t) {
    mi++, (yi[mi] = e.current), (e.current = t);
  }
  var Si = {},
    ki = _i(Si),
    xi = _i(!1),
    Ei = Si;
  function Ci(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Si;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      o = {};
    for (a in n) o[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function Oi(e) {
    return null != e.childContextTypes;
  }
  function Ni() {
    bi(xi), bi(ki);
  }
  function Ai(e, t, n) {
    if (ki.current !== Si) throw Error(Ze(168));
    wi(ki, t), wi(xi, n);
  }
  function Ti(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof r.getChildContext))
      return n;
    for (var a in (r = r.getChildContext()))
      if (!(a in t)) throw Error(Ze(108, Dt(e) || "Unknown", a));
    return Rt({}, n, r);
  }
  function Ri(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Si),
      (Ei = ki.current),
      wi(ki, e),
      wi(xi, xi.current),
      !0
    );
  }
  function ji(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(Ze(169));
    n
      ? ((e = Ti(e, t, Ei)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        bi(xi),
        bi(ki),
        wi(ki, e))
      : bi(xi),
      wi(xi, n);
  }
  var Mi = null,
    Pi = !1,
    Fi = !1;
  function zi(e) {
    null === Mi ? (Mi = [e]) : Mi.push(e);
  }
  function Di() {
    if (!Fi && null !== Mi) {
      Fi = !0;
      var e = 0,
        t = hr;
      try {
        var n = Mi;
        for (hr = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        (Mi = null), (Pi = !1);
      } catch (a) {
        throw (null !== Mi && (Mi = Mi.slice(e + 1)), $n(Yn, Di), a);
      } finally {
        (hr = t), (Fi = !1);
      }
    }
    return null;
  }
  var Li = [],
    Ii = 0,
    Gi = null,
    Ui = 0,
    $i = [],
    Bi = 0,
    Wi = null,
    Vi = 1,
    Hi = "";
  function qi(e, t) {
    (Li[Ii++] = Ui), (Li[Ii++] = Gi), (Gi = e), (Ui = t);
  }
  function Yi(e, t, n) {
    ($i[Bi++] = Vi), ($i[Bi++] = Hi), ($i[Bi++] = Wi), (Wi = e);
    var r = Vi;
    e = Hi;
    var a = 32 - tr(r) - 1;
    (r &= ~(1 << a)), (n += 1);
    var o = 32 - tr(t) + a;
    if (30 < o) {
      var i = a - (a % 5);
      (o = (r & ((1 << i) - 1)).toString(32)),
        (r >>= i),
        (a -= i),
        (Vi = (1 << (32 - tr(t) + a)) | (n << a) | r),
        (Hi = o + e);
    } else (Vi = (1 << o) | (n << a) | r), (Hi = e);
  }
  function Qi(e) {
    null !== e.return && (qi(e, 1), Yi(e, 1, 0));
  }
  function Ki(e) {
    for (; e === Gi; )
      (Gi = Li[--Ii]), (Li[Ii] = null), (Ui = Li[--Ii]), (Li[Ii] = null);
    for (; e === Wi; )
      (Wi = $i[--Bi]),
        ($i[Bi] = null),
        (Hi = $i[--Bi]),
        ($i[Bi] = null),
        (Vi = $i[--Bi]),
        ($i[Bi] = null);
  }
  var Ji = null,
    Xi = null,
    Zi = !1,
    el = null;
  function tl(e, t) {
    var n = Cf(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n);
  }
  function nl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (Ji = e), (Xi = ai(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (Ji = e), (Xi = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Wi ? { id: Vi, overflow: Hi } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = Cf(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (Ji = e),
          (Xi = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function rl(e) {
    return !(!(1 & e.mode) || 128 & e.flags);
  }
  function al(e) {
    if (Zi) {
      var t = Xi;
      if (t) {
        var n = t;
        if (!nl(e, t)) {
          if (rl(e)) throw Error(Ze(418));
          t = ai(n.nextSibling);
          var r = Ji;
          t && nl(e, t)
            ? tl(r, n)
            : ((e.flags = (-4097 & e.flags) | 2), (Zi = !1), (Ji = e));
        }
      } else {
        if (rl(e)) throw Error(Ze(418));
        (e.flags = (-4097 & e.flags) | 2), (Zi = !1), (Ji = e);
      }
    }
  }
  function ol(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

    )
      e = e.return;
    Ji = e;
  }
  function il(e) {
    if (e !== Ji) return !1;
    if (!Zi) return ol(e), (Zi = !0), !1;
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !Jo(e.type, e.memoizedProps)),
      t && (t = Xi))
    ) {
      if (rl(e)) throw (ll(), Error(Ze(418)));
      for (; t; ) tl(e, t), (t = ai(t.nextSibling));
    }
    if ((ol(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(Ze(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("/$" === n) {
              if (0 === t) {
                Xi = ai(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
          }
          e = e.nextSibling;
        }
        Xi = null;
      }
    } else Xi = Ji ? ai(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ll() {
    for (var e = Xi; e; ) e = ai(e.nextSibling);
  }
  function ul() {
    (Xi = Ji = null), (Zi = !1);
  }
  function sl(e) {
    null === el ? (el = [e]) : el.push(e);
  }
  var cl = ht.ReactCurrentBatchConfig;
  function fl(e, t, n) {
    if (
      null !== (e = n.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (n._owner) {
        if ((n = n._owner)) {
          if (1 !== n.tag) throw Error(Ze(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(Ze(147, e));
        var a = r,
          o = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === o
          ? t.ref
          : (((t = function (e) {
              var t = a.refs;
              null === e ? delete t[o] : (t[o] = e);
            })._stringRef = o),
            t);
      }
      if ("string" != typeof e) throw Error(Ze(284));
      if (!n._owner) throw Error(Ze(290, e));
    }
    return e;
  }
  function dl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        Ze(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function pl(e) {
    return (0, e._init)(e._payload);
  }
  function hl(e) {
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
      return ((e = Nf(e, t)).index = 0), (e.sibling = null), e;
    }
    function o(t, n, r) {
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
    function i(t) {
      return e && null === t.alternate && (t.flags |= 2), t;
    }
    function l(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = jf(n, e.mode, r)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      var o = n.type;
      return o === yt
        ? c(e, t, n.props.children, r, n.key)
        : null !== t &&
          (t.elementType === o ||
            ("object" == typeof o &&
              null !== o &&
              o.$$typeof === Ct &&
              pl(o) === t.type))
        ? (((r = a(t, n.props)).ref = fl(e, t, n)), (r.return = e), r)
        : (((r = Af(n.type, n.key, n.props, null, e.mode, r)).ref = fl(
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
        ? (((t = Mf(n, e.mode, r)).return = e), t)
        : (((t = a(t, n.children || [])).return = e), t);
    }
    function c(e, t, n, r, o) {
      return null === t || 7 !== t.tag
        ? (((t = Tf(n, e.mode, r, o)).return = e), t)
        : (((t = a(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return ((t = jf("" + t, e.mode, n)).return = e), t;
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case vt:
            return (
              ((n = Af(t.type, t.key, t.props, null, e.mode, n)).ref = fl(
                e,
                null,
                t
              )),
              (n.return = e),
              n
            );
          case gt:
            return ((t = Mf(t, e.mode, n)).return = e), t;
          case Ct:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (Qt(t) || At(t)) return ((t = Tf(t, e.mode, n, null)).return = e), t;
        dl(e, t);
      }
      return null;
    }
    function d(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== a ? null : l(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case vt:
            return n.key === a ? u(e, t, n, r) : null;
          case gt:
            return n.key === a ? s(e, t, n, r) : null;
          case Ct:
            return d(e, t, (a = n._init)(n._payload), r);
        }
        if (Qt(n) || At(n)) return null !== a ? null : c(e, t, n, r, null);
        dl(e, n);
      }
      return null;
    }
    function p(e, t, n, r, a) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return l(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case vt:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case gt:
            return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case Ct:
            return p(e, t, n, (0, r._init)(r._payload), a);
        }
        if (Qt(r) || At(r)) return c(t, (e = e.get(n) || null), r, a, null);
        dl(t, r);
      }
      return null;
    }
    return function l(u, s, c, h) {
      if (
        ("object" == typeof c &&
          null !== c &&
          c.type === yt &&
          null === c.key &&
          (c = c.props.children),
        "object" == typeof c && null !== c)
      ) {
        switch (c.$$typeof) {
          case vt:
            e: {
              for (var v = c.key, g = s; null !== g; ) {
                if (g.key === v) {
                  if ((v = c.type) === yt) {
                    if (7 === g.tag) {
                      n(u, g.sibling),
                        ((s = a(g, c.props.children)).return = u),
                        (u = s);
                      break e;
                    }
                  } else if (
                    g.elementType === v ||
                    ("object" == typeof v &&
                      null !== v &&
                      v.$$typeof === Ct &&
                      pl(v) === g.type)
                  ) {
                    n(u, g.sibling),
                      ((s = a(g, c.props)).ref = fl(u, g, c)),
                      (s.return = u),
                      (u = s);
                    break e;
                  }
                  n(u, g);
                  break;
                }
                t(u, g), (g = g.sibling);
              }
              c.type === yt
                ? (((s = Tf(c.props.children, u.mode, h, c.key)).return = u),
                  (u = s))
                : (((h = Af(c.type, c.key, c.props, null, u.mode, h)).ref = fl(
                    u,
                    s,
                    c
                  )),
                  (h.return = u),
                  (u = h));
            }
            return i(u);
          case gt:
            e: {
              for (g = c.key; null !== s; ) {
                if (s.key === g) {
                  if (
                    4 === s.tag &&
                    s.stateNode.containerInfo === c.containerInfo &&
                    s.stateNode.implementation === c.implementation
                  ) {
                    n(u, s.sibling),
                      ((s = a(s, c.children || [])).return = u),
                      (u = s);
                    break e;
                  }
                  n(u, s);
                  break;
                }
                t(u, s), (s = s.sibling);
              }
              ((s = Mf(c, u.mode, h)).return = u), (u = s);
            }
            return i(u);
          case Ct:
            return l(u, s, (g = c._init)(c._payload), h);
        }
        if (Qt(c))
          return (function (a, i, l, u) {
            for (
              var s = null, c = null, h = i, v = (i = 0), g = null;
              null !== h && v < l.length;
              v++
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var y = d(a, h, l[v], u);
              if (null === y) {
                null === h && (h = g);
                break;
              }
              e && h && null === y.alternate && t(a, h),
                (i = o(y, i, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (h = g);
            }
            if (v === l.length) return n(a, h), Zi && qi(a, v), s;
            if (null === h) {
              for (; v < l.length; v++)
                null !== (h = f(a, l[v], u)) &&
                  ((i = o(h, i, v)),
                  null === c ? (s = h) : (c.sibling = h),
                  (c = h));
              return Zi && qi(a, v), s;
            }
            for (h = r(a, h); v < l.length; v++)
              null !== (g = p(h, a, v, l[v], u)) &&
                (e &&
                  null !== g.alternate &&
                  h.delete(null === g.key ? v : g.key),
                (i = o(g, i, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              Zi && qi(a, v),
              s
            );
          })(u, s, c, h);
        if (At(c))
          return (function (a, i, l, u) {
            var s = At(l);
            if ("function" != typeof s) throw Error(Ze(150));
            if (null == (l = s.call(l))) throw Error(Ze(151));
            for (
              var c = (s = null), h = i, v = (i = 0), g = null, y = l.next();
              null !== h && !y.done;
              v++, y = l.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var m = d(a, h, y.value, u);
              if (null === m) {
                null === h && (h = g);
                break;
              }
              e && h && null === m.alternate && t(a, h),
                (i = o(m, i, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m),
                (h = g);
            }
            if (y.done) return n(a, h), Zi && qi(a, v), s;
            if (null === h) {
              for (; !y.done; v++, y = l.next())
                null !== (y = f(a, y.value, u)) &&
                  ((i = o(y, i, v)),
                  null === c ? (s = y) : (c.sibling = y),
                  (c = y));
              return Zi && qi(a, v), s;
            }
            for (h = r(a, h); !y.done; v++, y = l.next())
              null !== (y = p(h, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              Zi && qi(a, v),
              s
            );
          })(u, s, c, h);
        dl(u, c);
      }
      return ("string" == typeof c && "" !== c) || "number" == typeof c
        ? ((c = "" + c),
          null !== s && 6 === s.tag
            ? (n(u, s.sibling), ((s = a(s, c)).return = u), (u = s))
            : (n(u, s), ((s = jf(c, u.mode, h)).return = u), (u = s)),
          i(u))
        : n(u, s);
    };
  }
  var vl = hl(!0),
    gl = hl(!1),
    yl = _i(null),
    ml = null,
    _l = null,
    bl = null;
  function wl() {
    bl = _l = ml = null;
  }
  function Sl(e) {
    var t = yl.current;
    bi(yl), (e._currentValue = t);
  }
  function kl(e, t, n) {
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
  function xl(e, t) {
    (ml = e),
      (bl = _l = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (!!(e.lanes & t) && (ps = !0), (e.firstContext = null));
  }
  function El(e) {
    var t = e._currentValue;
    if (bl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === _l)) {
        if (null === ml) throw Error(Ze(308));
        (_l = e), (ml.dependencies = { lanes: 0, firstContext: e });
      } else _l = _l.next = e;
    return t;
  }
  var Cl = null;
  function Ol(e) {
    null === Cl ? (Cl = [e]) : Cl.push(e);
  }
  function Nl(e, t, n, r) {
    var a = t.interleaved;
    return (
      null === a ? ((n.next = n), Ol(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Al(e, r)
    );
  }
  function Al(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
      (e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return 3 === n.tag ? n.stateNode : null;
  }
  var Tl = !1;
  function Rl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function jl(e, t) {
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
  function Ml(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Pl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & Sc)) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        Al(e, n)
      );
    }
    return (
      null === (a = r.interleaved)
        ? ((t.next = t), Ol(r))
        : ((t.next = a.next), (a.next = t)),
      (r.interleaved = t),
      Al(e, n)
    );
  }
  function Fl(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), pr(e, n);
    }
  }
  function zl(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        o = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var i = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
        } while (null !== n);
        null === o ? (a = o = t) : (o = o.next = t);
      } else a = o = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: o,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function Dl(e, t, n, r) {
    var a = e.updateQueue;
    Tl = !1;
    var o = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      l = a.shared.pending;
    if (null !== l) {
      a.shared.pending = null;
      var u = l,
        s = u.next;
      (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
      var c = e.alternate;
      null !== c &&
        (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
        (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
        (c.lastBaseUpdate = u));
    }
    if (null !== o) {
      var f = a.baseState;
      for (i = 0, c = s = u = null, l = o; ; ) {
        var d = l.lane,
          p = l.eventTime;
        if ((r & d) === d) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              });
          e: {
            var h = e,
              v = l;
            switch (((d = t), (p = n), v.tag)) {
              case 1:
                if ("function" == typeof (h = v.payload)) {
                  f = h.call(p, f, d);
                  break e;
                }
                f = h;
                break e;
              case 3:
                h.flags = (-65537 & h.flags) | 128;
              case 0:
                if (
                  null ==
                  (d =
                    "function" == typeof (h = v.payload) ? h.call(p, f, d) : h)
                )
                  break e;
                f = Rt({}, f, d);
                break e;
              case 2:
                Tl = !0;
            }
          }
          null !== l.callback &&
            0 !== l.lane &&
            ((e.flags |= 64),
            null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
        } else
          (p = {
            eventTime: p,
            lane: d,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          }),
            null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
            (i |= d);
        if (null === (l = l.next)) {
          if (null === (l = a.shared.pending)) break;
          (l = (d = l).next),
            (d.next = null),
            (a.lastBaseUpdate = d),
            (a.shared.pending = null);
        }
      }
      if (
        (null === c && (u = f),
        (a.baseState = u),
        (a.firstBaseUpdate = s),
        (a.lastBaseUpdate = c),
        null !== (t = a.shared.interleaved))
      ) {
        a = t;
        do {
          (i |= a.lane), (a = a.next);
        } while (a !== t);
      } else null === o && (a.shared.lanes = 0);
      (Tc |= i), (e.lanes = i), (e.memoizedState = f);
    }
  }
  function Ll(e, t, n) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          a = r.callback;
        if (null !== a) {
          if (((r.callback = null), (r = n), "function" != typeof a))
            throw Error(Ze(191, a));
          a.call(r);
        }
      }
  }
  var Il = {},
    Gl = _i(Il),
    Ul = _i(Il),
    $l = _i(Il);
  function Bl(e) {
    if (e === Il) throw Error(Ze(174));
    return e;
  }
  function Wl(e, t) {
    switch ((wi($l, t), wi(Ul, e), wi(Gl, Il), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : nn(null, "");
        break;
      default:
        t = nn(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName)
        );
    }
    bi(Gl), wi(Gl, t);
  }
  function Vl() {
    bi(Gl), bi(Ul), bi($l);
  }
  function Hl(e) {
    Bl($l.current);
    var t = Bl(Gl.current),
      n = nn(t, e.type);
    t !== n && (wi(Ul, e), wi(Gl, n));
  }
  function ql(e) {
    Ul.current === e && (bi(Gl), bi(Ul));
  }
  var Yl = _i(0);
  function Ql(e) {
    for (var t = e; null !== t; ) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
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
  var Kl = [];
  function Jl() {
    for (var e = 0; e < Kl.length; e++)
      Kl[e]._workInProgressVersionPrimary = null;
    Kl.length = 0;
  }
  var Xl = ht.ReactCurrentDispatcher,
    Zl = ht.ReactCurrentBatchConfig,
    eu = 0,
    tu = null,
    nu = null,
    ru = null,
    au = !1,
    ou = !1,
    iu = 0,
    lu = 0;
  function uu() {
    throw Error(Ze(321));
  }
  function su(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!to(e[n], t[n])) return !1;
    return !0;
  }
  function cu(e, t, n, r, a, o) {
    if (
      ((eu = o),
      (tu = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Xl.current = null === e || null === e.memoizedState ? qu : Yu),
      (e = n(r, a)),
      ou)
    ) {
      o = 0;
      do {
        if (((ou = !1), (iu = 0), 25 <= o)) throw Error(Ze(301));
        (o += 1),
          (ru = nu = null),
          (t.updateQueue = null),
          (Xl.current = Qu),
          (e = n(r, a));
      } while (ou);
    }
    if (
      ((Xl.current = Hu),
      (t = null !== nu && null !== nu.next),
      (eu = 0),
      (ru = nu = tu = null),
      (au = !1),
      t)
    )
      throw Error(Ze(300));
    return e;
  }
  function fu() {
    var e = 0 !== iu;
    return (iu = 0), e;
  }
  function du() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return null === ru ? (tu.memoizedState = ru = e) : (ru = ru.next = e), ru;
  }
  function pu() {
    if (null === nu) {
      var e = tu.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = nu.next;
    var t = null === ru ? tu.memoizedState : ru.next;
    if (null !== t) (ru = t), (nu = e);
    else {
      if (null === e) throw Error(Ze(310));
      (e = {
        memoizedState: (nu = e).memoizedState,
        baseState: nu.baseState,
        baseQueue: nu.baseQueue,
        queue: nu.queue,
        next: null,
      }),
        null === ru ? (tu.memoizedState = ru = e) : (ru = ru.next = e);
    }
    return ru;
  }
  function hu(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function vu(e) {
    var t = pu(),
      n = t.queue;
    if (null === n) throw Error(Ze(311));
    n.lastRenderedReducer = e;
    var r = nu,
      a = r.baseQueue,
      o = n.pending;
    if (null !== o) {
      if (null !== a) {
        var i = a.next;
        (a.next = o.next), (o.next = i);
      }
      (r.baseQueue = a = o), (n.pending = null);
    }
    if (null !== a) {
      (o = a.next), (r = r.baseState);
      var l = (i = null),
        u = null,
        s = o;
      do {
        var c = s.lane;
        if ((eu & c) === c)
          null !== u &&
            (u = u.next =
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
          null === u ? ((l = u = f), (i = r)) : (u = u.next = f),
            (tu.lanes |= c),
            (Tc |= c);
        }
        s = s.next;
      } while (null !== s && s !== o);
      null === u ? (i = r) : (u.next = l),
        to(r, t.memoizedState) || (ps = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = u),
        (n.lastRenderedState = r);
    }
    if (null !== (e = n.interleaved)) {
      a = e;
      do {
        (o = a.lane), (tu.lanes |= o), (Tc |= o), (a = a.next);
      } while (a !== e);
    } else null === a && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function gu(e) {
    var t = pu(),
      n = t.queue;
    if (null === n) throw Error(Ze(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      a = n.pending,
      o = t.memoizedState;
    if (null !== a) {
      n.pending = null;
      var i = (a = a.next);
      do {
        (o = e(o, i.action)), (i = i.next);
      } while (i !== a);
      to(o, t.memoizedState) || (ps = !0),
        (t.memoizedState = o),
        null === t.baseQueue && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function yu() {}
  function mu(e, t) {
    var n = tu,
      r = pu(),
      a = t(),
      o = !to(r.memoizedState, a);
    if (
      (o && ((r.memoizedState = a), (ps = !0)),
      (r = r.queue),
      Tu(wu.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (null !== ru && 1 & ru.memoizedState.tag))
    ) {
      if (
        ((n.flags |= 2048),
        Eu(9, bu.bind(null, n, r, a, t), void 0, null),
        null === kc)
      )
        throw Error(Ze(349));
      30 & eu || _u(n, t, a);
    }
    return a;
  }
  function _u(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = tu.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (tu.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
        ? (t.stores = [e])
        : n.push(e);
  }
  function bu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Su(t) && ku(e);
  }
  function wu(e, t, n) {
    return n(function () {
      Su(t) && ku(e);
    });
  }
  function Su(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !to(e, n);
    } catch (r) {
      return !0;
    }
  }
  function ku(e) {
    var t = Al(e, 1);
    null !== t && Kc(t, e, 1, -1);
  }
  function xu(e) {
    var t = du();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hu,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = $u.bind(null, tu, e)),
      [t.memoizedState, e]
    );
  }
  function Eu(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = tu.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (tu.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
        ? (t.lastEffect = e.next = e)
        : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Cu() {
    return pu().memoizedState;
  }
  function Ou(e, t, n, r) {
    var a = du();
    (tu.flags |= e),
      (a.memoizedState = Eu(1 | t, n, void 0, void 0 === r ? null : r));
  }
  function Nu(e, t, n, r) {
    var a = pu();
    r = void 0 === r ? null : r;
    var o = void 0;
    if (null !== nu) {
      var i = nu.memoizedState;
      if (((o = i.destroy), null !== r && su(r, i.deps)))
        return void (a.memoizedState = Eu(t, n, o, r));
    }
    (tu.flags |= e), (a.memoizedState = Eu(1 | t, n, o, r));
  }
  function Au(e, t) {
    return Ou(8390656, 8, e, t);
  }
  function Tu(e, t) {
    return Nu(2048, 8, e, t);
  }
  function Ru(e, t) {
    return Nu(4, 2, e, t);
  }
  function ju(e, t) {
    return Nu(4, 4, e, t);
  }
  function Mu(e, t) {
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
  function Pu(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null), Nu(4, 4, Mu.bind(null, t, e), n)
    );
  }
  function Fu() {}
  function zu(e, t) {
    var n = pu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && su(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Du(e, t) {
    var n = pu();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && su(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Lu(e, t, n) {
    return 21 & eu
      ? (to(n, t) ||
          ((n = cr()), (tu.lanes |= n), (Tc |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ps = !0)), (e.memoizedState = n));
  }
  function Iu(e, t) {
    var n = hr;
    (hr = 0 !== n && 4 > n ? n : 4), e(!0);
    var r = Zl.transition;
    Zl.transition = {};
    try {
      e(!1), t();
    } finally {
      (hr = n), (Zl.transition = r);
    }
  }
  function Gu() {
    return pu().memoizedState;
  }
  function Uu(e, t, n) {
    var r = Qc(e);
    (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Bu(e)
        ? Wu(t, n)
        : null !== (n = Nl(e, t, n, r)) && (Kc(n, e, r, Yc()), Vu(n, t, r));
  }
  function $u(e, t, n) {
    var r = Qc(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Bu(e)) Wu(t, a);
    else {
      var o = e.alternate;
      if (
        0 === e.lanes &&
        (null === o || 0 === o.lanes) &&
        null !== (o = t.lastRenderedReducer)
      )
        try {
          var i = t.lastRenderedState,
            l = o(i, n);
          if (((a.hasEagerState = !0), (a.eagerState = l), to(l, i))) {
            var u = t.interleaved;
            return (
              null === u
                ? ((a.next = a), Ol(t))
                : ((a.next = u.next), (u.next = a)),
              void (t.interleaved = a)
            );
          }
        } catch (s) {}
      null !== (n = Nl(e, t, a, r)) && (Kc(n, e, r, (a = Yc())), Vu(n, t, r));
    }
  }
  function Bu(e) {
    var t = e.alternate;
    return e === tu || (null !== t && t === tu);
  }
  function Wu(e, t) {
    ou = au = !0;
    var n = e.pending;
    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Vu(e, t, n) {
    if (4194240 & n) {
      var r = t.lanes;
      (n |= r &= e.pendingLanes), (t.lanes = n), pr(e, n);
    }
  }
  var Hu = {
      readContext: El,
      useCallback: uu,
      useContext: uu,
      useEffect: uu,
      useImperativeHandle: uu,
      useInsertionEffect: uu,
      useLayoutEffect: uu,
      useMemo: uu,
      useReducer: uu,
      useRef: uu,
      useState: uu,
      useDebugValue: uu,
      useDeferredValue: uu,
      useTransition: uu,
      useMutableSource: uu,
      useSyncExternalStore: uu,
      useId: uu,
      unstable_isNewReconciler: !1,
    },
    qu = {
      readContext: El,
      useCallback: function (e, t) {
        return (du().memoizedState = [e, void 0 === t ? null : t]), e;
      },
      useContext: El,
      useEffect: Au,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          Ou(4194308, 4, Mu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ou(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ou(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = du();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = du();
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
          (e = e.dispatch = Uu.bind(null, tu, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return (e = { current: e }), (du().memoizedState = e);
      },
      useState: xu,
      useDebugValue: Fu,
      useDeferredValue: function (e) {
        return (du().memoizedState = e);
      },
      useTransition: function () {
        var e = xu(!1),
          t = e[0];
        return (e = Iu.bind(null, e[1])), (du().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = tu,
          a = du();
        if (Zi) {
          if (void 0 === n) throw Error(Ze(407));
          n = n();
        } else {
          if (((n = t()), null === kc)) throw Error(Ze(349));
          30 & eu || _u(r, t, n);
        }
        a.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (a.queue = o),
          Au(wu.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Eu(9, bu.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = du(),
          t = kc.identifierPrefix;
        if (Zi) {
          var n = Hi;
          (t =
            ":" +
            t +
            "R" +
            (n = (Vi & ~(1 << (32 - tr(Vi) - 1))).toString(32) + n)),
            0 < (n = iu++) && (t += "H" + n.toString(32)),
            (t += ":");
        } else t = ":" + t + "r" + (n = lu++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Yu = {
      readContext: El,
      useCallback: zu,
      useContext: El,
      useEffect: Tu,
      useImperativeHandle: Pu,
      useInsertionEffect: Ru,
      useLayoutEffect: ju,
      useMemo: Du,
      useReducer: vu,
      useRef: Cu,
      useState: function () {
        return vu(hu);
      },
      useDebugValue: Fu,
      useDeferredValue: function (e) {
        return Lu(pu(), nu.memoizedState, e);
      },
      useTransition: function () {
        return [vu(hu)[0], pu().memoizedState];
      },
      useMutableSource: yu,
      useSyncExternalStore: mu,
      useId: Gu,
      unstable_isNewReconciler: !1,
    },
    Qu = {
      readContext: El,
      useCallback: zu,
      useContext: El,
      useEffect: Tu,
      useImperativeHandle: Pu,
      useInsertionEffect: Ru,
      useLayoutEffect: ju,
      useMemo: Du,
      useReducer: gu,
      useRef: Cu,
      useState: function () {
        return gu(hu);
      },
      useDebugValue: Fu,
      useDeferredValue: function (e) {
        var t = pu();
        return null === nu ? (t.memoizedState = e) : Lu(t, nu.memoizedState, e);
      },
      useTransition: function () {
        return [gu(hu)[0], pu().memoizedState];
      },
      useMutableSource: yu,
      useSyncExternalStore: mu,
      useId: Gu,
      unstable_isNewReconciler: !1,
    };
  function Ku(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = Rt({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ju(e, t, n, r) {
    (n = null == (n = n(r, (t = e.memoizedState))) ? t : Rt({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n);
  }
  var Xu = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Dn(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Yc(),
        a = Qc(e),
        o = Ml(r, a);
      (o.payload = t),
        null != n && (o.callback = n),
        null !== (t = Pl(e, o, a)) && (Kc(t, e, a, r), Fl(t, e, a));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Yc(),
        a = Qc(e),
        o = Ml(r, a);
      (o.tag = 1),
        (o.payload = t),
        null != n && (o.callback = n),
        null !== (t = Pl(e, o, a)) && (Kc(t, e, a, r), Fl(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Yc(),
        r = Qc(e),
        a = Ml(n, r);
      (a.tag = 2),
        null != t && (a.callback = t),
        null !== (t = Pl(e, a, r)) && (Kc(t, e, r, n), Fl(t, e, r));
    },
  };
  function Zu(e, t, n, r, a, o, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, o, i)
      : !(
          t.prototype &&
          t.prototype.isPureReactComponent &&
          no(n, r) &&
          no(a, o)
        );
  }
  function es(e, t, n) {
    var r = !1,
      a = Si,
      o = t.contextType;
    return (
      "object" == typeof o && null !== o
        ? (o = El(o))
        : ((a = Oi(t) ? Ei : ki.current),
          (o = (r = null != (r = t.contextTypes)) ? Ci(e, a) : Si)),
      (t = new t(n, o)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = Xu),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function ts(e, t, n, r) {
    (e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Xu.enqueueReplaceState(t, t.state, null);
  }
  function ns(e, t, n, r) {
    var a = e.stateNode;
    (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Rl(e);
    var o = t.contextType;
    "object" == typeof o && null !== o
      ? (a.context = El(o))
      : ((o = Oi(t) ? Ei : ki.current), (a.context = Ci(e, o))),
      (a.state = e.memoizedState),
      "function" == typeof (o = t.getDerivedStateFromProps) &&
        (Ju(e, t, o, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && Xu.enqueueReplaceState(a, a.state, null),
        Dl(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4194308);
  }
  function rs(e, t) {
    try {
      var n = "",
        r = t;
      do {
        (n += Ft(r)), (r = r.return);
      } while (r);
      var a = n;
    } catch (o) {
      a = "\nError generating stack: " + o.message + "\n" + o.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function as(e, t, n) {
    return {
      value: e,
      source: null,
      stack: null != n ? n : null,
      digest: null != t ? t : null,
    };
  }
  function os(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var is = "function" == typeof WeakMap ? WeakMap : Map;
  function ls(e, t, n) {
    ((n = Ml(-1, n)).tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Lc || ((Lc = !0), (Ic = r)), os(0, t);
      }),
      n
    );
  }
  function us(e, t, n) {
    (n = Ml(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      (n.payload = function () {
        return r(a);
      }),
        (n.callback = function () {
          os(0, t);
        });
    }
    var o = e.stateNode;
    return (
      null !== o &&
        "function" == typeof o.componentDidCatch &&
        (n.callback = function () {
          os(0, t),
            "function" != typeof r &&
              (null === Gc ? (Gc = new Set([this])) : Gc.add(this));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function ss(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new is();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = bf.bind(null, e, t, n)), t.then(e, e));
  }
  function cs(e) {
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
  function fs(e, t, n, r, a) {
    return 1 & e.mode
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Ml(-1, 1)).tag = 2), Pl(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var ds = ht.ReactCurrentOwner,
    ps = !1;
  function hs(e, t, n, r) {
    t.child = null === e ? gl(t, null, n, r) : vl(t, e.child, n, r);
  }
  function vs(e, t, n, r, a) {
    n = n.render;
    var o = t.ref;
    return (
      xl(t, a),
      (r = cu(e, t, n, r, o, a)),
      (n = fu()),
      null === e || ps
        ? (Zi && n && Qi(t), (t.flags |= 1), hs(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Ls(e, t, a))
    );
  }
  function gs(e, t, n, r, a) {
    if (null === e) {
      var o = n.type;
      return "function" != typeof o ||
        Of(o) ||
        void 0 !== o.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Af(n.type, null, r, t, t.mode, a)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = o), ys(e, t, o, r, a));
    }
    if (((o = e.child), !(e.lanes & a))) {
      var i = o.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : no)(i, r) && e.ref === t.ref)
        return Ls(e, t, a);
    }
    return (
      (t.flags |= 1),
      ((e = Nf(o, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function ys(e, t, n, r, a) {
    if (null !== e) {
      var o = e.memoizedProps;
      if (no(o, r) && e.ref === t.ref) {
        if (((ps = !1), (t.pendingProps = r = o), !(e.lanes & a)))
          return (t.lanes = e.lanes), Ls(e, t, a);
        131072 & e.flags && (ps = !0);
      }
    }
    return bs(e, t, n, r, a);
  }
  function ms(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      o = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (1 & t.mode) {
        if (!(1073741824 & n))
          return (
            (e = null !== o ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            wi(Oc, Cc),
            (Cc |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== o ? o.baseLanes : n),
          wi(Oc, Cc),
          (Cc |= r);
      } else
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          wi(Oc, Cc),
          (Cc |= n);
    else
      null !== o ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        wi(Oc, Cc),
        (Cc |= r);
    return hs(e, t, a, n), t.child;
  }
  function _s(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function bs(e, t, n, r, a) {
    var o = Oi(n) ? Ei : ki.current;
    return (
      (o = Ci(t, o)),
      xl(t, a),
      (n = cu(e, t, n, r, o, a)),
      (r = fu()),
      null === e || ps
        ? (Zi && r && Qi(t), (t.flags |= 1), hs(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Ls(e, t, a))
    );
  }
  function ws(e, t, n, r, a) {
    if (Oi(n)) {
      var o = !0;
      Ri(t);
    } else o = !1;
    if ((xl(t, a), null === t.stateNode))
      Ds(e, t), es(t, n, r), ns(t, n, r, a), (r = !0);
    else if (null === e) {
      var i = t.stateNode,
        l = t.memoizedProps;
      i.props = l;
      var u = i.context,
        s = n.contextType;
      s =
        "object" == typeof s && null !== s
          ? El(s)
          : Ci(t, (s = Oi(n) ? Ei : ki.current));
      var c = n.getDerivedStateFromProps,
        f =
          "function" == typeof c ||
          "function" == typeof i.getSnapshotBeforeUpdate;
      f ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((l !== r || u !== s) && ts(t, i, r, s)),
        (Tl = !1);
      var d = t.memoizedState;
      (i.state = d),
        Dl(t, r, i, a),
        (u = t.memoizedState),
        l !== r || d !== u || xi.current || Tl
          ? ("function" == typeof c && (Ju(t, n, c, r), (u = t.memoizedState)),
            (l = Tl || Zu(t, n, l, r, d, u, s))
              ? (f ||
                  ("function" != typeof i.UNSAFE_componentWillMount &&
                    "function" != typeof i.componentWillMount) ||
                  ("function" == typeof i.componentWillMount &&
                    i.componentWillMount(),
                  "function" == typeof i.UNSAFE_componentWillMount &&
                    i.UNSAFE_componentWillMount()),
                "function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof i.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = u)),
            (i.props = r),
            (i.state = u),
            (i.context = s),
            (r = l))
          : ("function" == typeof i.componentDidMount && (t.flags |= 4194308),
            (r = !1));
    } else {
      (i = t.stateNode),
        jl(e, t),
        (l = t.memoizedProps),
        (s = t.type === t.elementType ? l : Ku(t.type, l)),
        (i.props = s),
        (f = t.pendingProps),
        (d = i.context),
        (u =
          "object" == typeof (u = n.contextType) && null !== u
            ? El(u)
            : Ci(t, (u = Oi(n) ? Ei : ki.current)));
      var p = n.getDerivedStateFromProps;
      (c =
        "function" == typeof p ||
        "function" == typeof i.getSnapshotBeforeUpdate) ||
        ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
          "function" != typeof i.componentWillReceiveProps) ||
        ((l !== f || d !== u) && ts(t, i, r, u)),
        (Tl = !1),
        (d = t.memoizedState),
        (i.state = d),
        Dl(t, r, i, a);
      var h = t.memoizedState;
      l !== f || d !== h || xi.current || Tl
        ? ("function" == typeof p && (Ju(t, n, p, r), (h = t.memoizedState)),
          (s = Tl || Zu(t, n, s, r, d, h, u) || !1)
            ? (c ||
                ("function" != typeof i.UNSAFE_componentWillUpdate &&
                  "function" != typeof i.componentWillUpdate) ||
                ("function" == typeof i.componentWillUpdate &&
                  i.componentWillUpdate(r, h, u),
                "function" == typeof i.UNSAFE_componentWillUpdate &&
                  i.UNSAFE_componentWillUpdate(r, h, u)),
              "function" == typeof i.componentDidUpdate && (t.flags |= 4),
              "function" == typeof i.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof i.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (i.props = r),
          (i.state = h),
          (i.context = u),
          (r = s))
        : ("function" != typeof i.componentDidUpdate ||
            (l === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof i.getSnapshotBeforeUpdate ||
            (l === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Ss(e, t, n, r, o, a);
  }
  function Ss(e, t, n, r, a, o) {
    _s(e, t);
    var i = !!(128 & t.flags);
    if (!r && !i) return a && ji(t, n, !1), Ls(e, t, o);
    (r = t.stateNode), (ds.current = t);
    var l =
      i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && i
        ? ((t.child = vl(t, e.child, null, o)), (t.child = vl(t, null, l, o)))
        : hs(e, t, l, o),
      (t.memoizedState = r.state),
      a && ji(t, n, !0),
      t.child
    );
  }
  function ks(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Ai(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Ai(0, t.context, !1),
      Wl(e, t.containerInfo);
  }
  function xs(e, t, n, r, a) {
    return ul(), sl(a), (t.flags |= 256), hs(e, t, n, r), t.child;
  }
  var Es,
    Cs,
    Os,
    Ns,
    As = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ts(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Rs(e, t, n) {
    var r,
      a = t.pendingProps,
      o = Yl.current,
      i = !1,
      l = !!(128 & t.flags);
    if (
      ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & o)),
      r
        ? ((i = !0), (t.flags &= -129))
        : (null !== e && null === e.memoizedState) || (o |= 1),
      wi(Yl, 1 & o),
      null === e)
    )
      return (
        al(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (1 & t.mode
              ? "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((l = a.children),
            (e = a.fallback),
            i
              ? ((a = t.mode),
                (i = t.child),
                (l = { mode: "hidden", children: l }),
                1 & a || null === i
                  ? (i = Rf(l, a, 0, null))
                  : ((i.childLanes = 0), (i.pendingProps = l)),
                (e = Tf(e, a, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Ts(n)),
                (t.memoizedState = As),
                e)
              : js(t, l))
      );
    if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
      return (function (e, t, n, r, a, o, i) {
        if (n)
          return 256 & t.flags
            ? ((t.flags &= -257), Ms(e, t, i, (r = as(Error(Ze(422))))))
            : null !== t.memoizedState
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (a = t.mode),
              (r = Rf({ mode: "visible", children: r.children }, a, 0, null)),
              ((o = Tf(o, a, i, null)).flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              1 & t.mode && vl(t, e.child, null, i),
              (t.child.memoizedState = Ts(i)),
              (t.memoizedState = As),
              o);
        if (!(1 & t.mode)) return Ms(e, t, i, null);
        if ("$!" === a.data) {
          if ((r = a.nextSibling && a.nextSibling.dataset)) var l = r.dgst;
          return (
            (r = l), Ms(e, t, i, (r = as((o = Error(Ze(419))), r, void 0)))
          );
        }
        if (((l = !!(i & e.childLanes)), ps || l)) {
          if (null !== (r = kc)) {
            switch (i & -i) {
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
            0 !== (a = a & (r.suspendedLanes | i) ? 0 : a) &&
              a !== o.retryLane &&
              ((o.retryLane = a), Al(e, a), Kc(r, e, a, -1));
          }
          return cf(), Ms(e, t, i, (r = as(Error(Ze(421)))));
        }
        return "$?" === a.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Sf.bind(null, e)),
            (a._reactRetry = t),
            null)
          : ((e = o.treeContext),
            (Xi = ai(a.nextSibling)),
            (Ji = t),
            (Zi = !0),
            (el = null),
            null !== e &&
              (($i[Bi++] = Vi),
              ($i[Bi++] = Hi),
              ($i[Bi++] = Wi),
              (Vi = e.id),
              (Hi = e.overflow),
              (Wi = t)),
            ((t = js(t, r.children)).flags |= 4096),
            t);
      })(e, t, l, a, r, o, n);
    if (i) {
      (i = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
      var u = { mode: "hidden", children: a.children };
      return (
        1 & l || t.child === o
          ? ((a = Nf(o, u)).subtreeFlags = 14680064 & o.subtreeFlags)
          : (((a = t.child).childLanes = 0),
            (a.pendingProps = u),
            (t.deletions = null)),
        null !== r ? (i = Nf(r, i)) : ((i = Tf(i, l, n, null)).flags |= 2),
        (i.return = t),
        (a.return = t),
        (a.sibling = i),
        (t.child = a),
        (a = i),
        (i = t.child),
        (l =
          null === (l = e.child.memoizedState)
            ? Ts(n)
            : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              }),
        (i.memoizedState = l),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = As),
        a
      );
    }
    return (
      (e = (i = e.child).sibling),
      (a = Nf(i, { mode: "visible", children: a.children })),
      !(1 & t.mode) && (a.lanes = n),
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
  function js(e, t) {
    return (
      ((t = Rf({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Ms(e, t, n, r) {
    return (
      null !== r && sl(r),
      vl(t, e.child, null, n),
      ((e = js(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ps(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), kl(e.return, t, n);
  }
  function Fs(e, t, n, r, a) {
    var o = e.memoizedState;
    null === o
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = a));
  }
  function zs(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      o = r.tail;
    if ((hs(e, t, r.children, n), 2 & (r = Yl.current)))
      (r = (1 & r) | 2), (t.flags |= 128);
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e; ) {
          if (13 === e.tag) null !== e.memoizedState && Ps(e, n, t);
          else if (19 === e.tag) Ps(e, n, t);
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
    if ((wi(Yl, r), 1 & t.mode))
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            null !== (e = n.alternate) && null === Ql(e) && (a = n),
              (n = n.sibling);
          null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            Fs(t, !1, a, n, o);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === Ql(e)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          Fs(t, !0, n, null, o);
          break;
        case "together":
          Fs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    else t.memoizedState = null;
    return t.child;
  }
  function Ds(e, t) {
    !(1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Ls(e, t, n) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Tc |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(Ze(153));
    if (null !== t.child) {
      for (
        n = Nf((e = t.child), e.pendingProps), t.child = n, n.return = t;
        null !== e.sibling;

      )
        (e = e.sibling), ((n = n.sibling = Nf(e, e.pendingProps)).return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Is(e, t) {
    if (!Zi)
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
  function Gs(e) {
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
  function Us(e, t, n) {
    var r = t.pendingProps;
    switch ((Ki(t), t.tag)) {
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
        return Gs(t), null;
      case 1:
      case 17:
        return Oi(t.type) && Ni(), Gs(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Vl(),
          bi(xi),
          bi(ki),
          Jl(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (il(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), null !== el && (ef(el), (el = null)))),
          Cs(e, t),
          Gs(t),
          null
        );
      case 5:
        ql(t);
        var a = Bl($l.current);
        if (((n = t.type), null !== e && null != t.stateNode))
          Os(e, t, n, r, a),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (null === t.stateNode) throw Error(Ze(166));
            return Gs(t), null;
          }
          if (((e = Bl(Gl.current)), il(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[li] = t), (r[ui] = o), (e = !!(1 & t.mode)), n)) {
              case "dialog":
                Po("cancel", r), Po("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Po("load", r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < To.length; a++) Po(To[a], r);
                break;
              case "source":
                Po("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Po("error", r), Po("load", r);
                break;
              case "details":
                Po("toggle", r);
                break;
              case "input":
                Wt(r, o), Po("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  Po("invalid", r);
                break;
              case "textarea":
                Xt(r, o), Po("invalid", r);
            }
            for (var i in (pn(n, o), (a = null), o))
              if (o.hasOwnProperty(i)) {
                var l = o[i];
                "children" === i
                  ? "string" == typeof l
                    ? r.textContent !== l &&
                      (!0 !== o.suppressHydrationWarning &&
                        qo(r.textContent, l, e),
                      (a = ["children", l]))
                    : "number" == typeof l &&
                      r.textContent !== "" + l &&
                      (!0 !== o.suppressHydrationWarning &&
                        qo(r.textContent, l, e),
                      (a = ["children", "" + l]))
                  : tt.hasOwnProperty(i) &&
                    null != l &&
                    "onScroll" === i &&
                    Po("scroll", r);
              }
            switch (n) {
              case "input":
                Gt(r), qt(r, o, !0);
                break;
              case "textarea":
                Gt(r), en(r);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof o.onClick && (r.onclick = Yo);
            }
            (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
          } else {
            (i = 9 === a.nodeType ? a : a.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = tn(n)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === n
                  ? (((e = i.createElement("div")).innerHTML =
                      "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof r.is
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    "select" === n &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
                : (e = i.createElementNS(e, n)),
              (e[li] = t),
              (e[ui] = r),
              Es(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((i = hn(n, r)), n)) {
                case "dialog":
                  Po("cancel", e), Po("close", e), (a = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Po("load", e), (a = r);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < To.length; a++) Po(To[a], e);
                  a = r;
                  break;
                case "source":
                  Po("error", e), (a = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Po("error", e), Po("load", e), (a = r);
                  break;
                case "details":
                  Po("toggle", e), (a = r);
                  break;
                case "input":
                  Wt(e, r), (a = Bt(e, r)), Po("invalid", e);
                  break;
                case "option":
                default:
                  a = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (a = Rt({}, r, { value: void 0 })),
                    Po("invalid", e);
                  break;
                case "textarea":
                  Xt(e, r), (a = Jt(e, r)), Po("invalid", e);
              }
              for (o in (pn(n, a), (l = a)))
                if (l.hasOwnProperty(o)) {
                  var u = l[o];
                  "style" === o
                    ? fn(e, u)
                    : "dangerouslySetInnerHTML" === o
                    ? null != (u = u ? u.__html : void 0) && on(e, u)
                    : "children" === o
                    ? "string" == typeof u
                      ? ("textarea" !== n || "" !== u) && ln(e, u)
                      : "number" == typeof u && ln(e, "" + u)
                    : "suppressContentEditableWarning" !== o &&
                      "suppressHydrationWarning" !== o &&
                      "autoFocus" !== o &&
                      (tt.hasOwnProperty(o)
                        ? null != u && "onScroll" === o && Po("scroll", e)
                        : null != u && pt(e, o, u, i));
                }
              switch (n) {
                case "input":
                  Gt(e), qt(e, r, !1);
                  break;
                case "textarea":
                  Gt(e), en(e);
                  break;
                case "option":
                  null != r.value && e.setAttribute("value", "" + Lt(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    null != (o = r.value)
                      ? Kt(e, !!r.multiple, o, !1)
                      : null != r.defaultValue &&
                        Kt(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  "function" == typeof a.onClick && (e.onclick = Yo);
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
        return Gs(t), null;
      case 6:
        if (e && null != t.stateNode) Ns(e, t, e.memoizedProps, r);
        else {
          if ("string" != typeof r && null === t.stateNode)
            throw Error(Ze(166));
          if (((n = Bl($l.current)), Bl(Gl.current), il(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[li] = t),
              (o = r.nodeValue !== n) && null !== (e = Ji))
            )
              switch (e.tag) {
                case 3:
                  qo(r.nodeValue, n, !!(1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    qo(r.nodeValue, n, !!(1 & e.mode));
              }
            o && (t.flags |= 4);
          } else
            ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
              li
            ] = t),
              (t.stateNode = r);
        }
        return Gs(t), null;
      case 13:
        if (
          (bi(Yl),
          (r = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (Zi && null !== Xi && 1 & t.mode && !(128 & t.flags))
            ll(), ul(), (t.flags |= 98560), (o = !1);
          else if (((o = il(t)), null !== r && null !== r.dehydrated)) {
            if (null === e) {
              if (!o) throw Error(Ze(318));
              if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                throw Error(Ze(317));
              o[li] = t;
            } else
              ul(),
                !(128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4);
            Gs(t), (o = !1);
          } else null !== el && (ef(el), (el = null)), (o = !0);
          if (!o) return 65536 & t.flags ? t : null;
        }
        return 128 & t.flags
          ? ((t.lanes = n), t)
          : ((r = null !== r) != (null !== e && null !== e.memoizedState) &&
              r &&
              ((t.child.flags |= 8192),
              1 & t.mode &&
                (null === e || 1 & Yl.current ? 0 === Nc && (Nc = 3) : cf())),
            null !== t.updateQueue && (t.flags |= 4),
            Gs(t),
            null);
      case 4:
        return (
          Vl(),
          Cs(e, t),
          null === e && Do(t.stateNode.containerInfo),
          Gs(t),
          null
        );
      case 10:
        return Sl(t.type._context), Gs(t), null;
      case 19:
        if ((bi(Yl), null === (o = t.memoizedState))) return Gs(t), null;
        if (((r = !!(128 & t.flags)), null === (i = o.rendering)))
          if (r) Is(o, !1);
          else {
            if (0 !== Nc || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e; ) {
                if (null !== (i = Ql(e))) {
                  for (
                    t.flags |= 128,
                      Is(o, !1),
                      null !== (r = i.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    null !== n;

                  )
                    (e = r),
                      ((o = n).flags &= 14680066),
                      null === (i = o.alternate)
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = i.childLanes),
                          (o.lanes = i.lanes),
                          (o.child = i.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = i.memoizedProps),
                          (o.memoizedState = i.memoizedState),
                          (o.updateQueue = i.updateQueue),
                          (o.type = i.type),
                          (e = i.dependencies),
                          (o.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return wi(Yl, (1 & Yl.current) | 2), t.child;
                }
                e = e.sibling;
              }
            null !== o.tail &&
              Hn() > zc &&
              ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (null !== (e = Ql(i))) {
              if (
                ((t.flags |= 128),
                (r = !0),
                null !== (n = e.updateQueue) &&
                  ((t.updateQueue = n), (t.flags |= 4)),
                Is(o, !0),
                null === o.tail &&
                  "hidden" === o.tailMode &&
                  !i.alternate &&
                  !Zi)
              )
                return Gs(t), null;
            } else
              2 * Hn() - o.renderingStartTime > zc &&
                1073741824 !== n &&
                ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : (null !== (n = o.last) ? (n.sibling = i) : (t.child = i),
              (o.last = i));
        }
        return null !== o.tail
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Hn()),
            (t.sibling = null),
            (n = Yl.current),
            wi(Yl, r ? (1 & n) | 2 : 1 & n),
            t)
          : (Gs(t), null);
      case 22:
      case 23:
        return (
          of(),
          (r = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
          r && 1 & t.mode
            ? !!(1073741824 & Cc) &&
              (Gs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : Gs(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(Ze(156, t.tag));
  }
  function $s(e, t) {
    switch ((Ki(t), t.tag)) {
      case 1:
        return (
          Oi(t.type) && Ni(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          Vl(),
          bi(xi),
          bi(ki),
          Jl(),
          65536 & (e = t.flags) && !(128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return ql(t), null;
      case 13:
        if ((bi(Yl), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(Ze(340));
          ul();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return bi(Yl), null;
      case 4:
        return Vl(), null;
      case 10:
        return Sl(t.type._context), null;
      case 22:
      case 23:
        return of(), null;
      default:
        return null;
    }
  }
  (Es = function (e, t) {
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
    (Cs = function () {}),
    (Os = function (e, t, n, r) {
      var a = e.memoizedProps;
      if (a !== r) {
        (e = t.stateNode), Bl(Gl.current);
        var o,
          i = null;
        switch (n) {
          case "input":
            (a = Bt(e, a)), (r = Bt(e, r)), (i = []);
            break;
          case "select":
            (a = Rt({}, a, { value: void 0 })),
              (r = Rt({}, r, { value: void 0 })),
              (i = []);
            break;
          case "textarea":
            (a = Jt(e, a)), (r = Jt(e, r)), (i = []);
            break;
          default:
            "function" != typeof a.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = Yo);
        }
        for (s in (pn(n, r), (n = null), a))
          if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
            if ("style" === s) {
              var l = a[s];
              for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              "dangerouslySetInnerHTML" !== s &&
                "children" !== s &&
                "suppressContentEditableWarning" !== s &&
                "suppressHydrationWarning" !== s &&
                "autoFocus" !== s &&
                (tt.hasOwnProperty(s)
                  ? i || (i = [])
                  : (i = i || []).push(s, null));
        for (s in r) {
          var u = r[s];
          if (
            ((l = null != a ? a[s] : void 0),
            r.hasOwnProperty(s) && u !== l && (null != u || null != l))
          )
            if ("style" === s)
              if (l) {
                for (o in l)
                  !l.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in u)
                  u.hasOwnProperty(o) &&
                    l[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]));
              } else n || (i || (i = []), i.push(s, n)), (n = u);
            else
              "dangerouslySetInnerHTML" === s
                ? ((u = u ? u.__html : void 0),
                  (l = l ? l.__html : void 0),
                  null != u && l !== u && (i = i || []).push(s, u))
                : "children" === s
                ? ("string" != typeof u && "number" != typeof u) ||
                  (i = i || []).push(s, "" + u)
                : "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  (tt.hasOwnProperty(s)
                    ? (null != u && "onScroll" === s && Po("scroll", e),
                      i || l === u || (i = []))
                    : (i = i || []).push(s, u));
        }
        n && (i = i || []).push("style", n);
        var s = i;
        (t.updateQueue = s) && (t.flags |= 4);
      }
    }),
    (Ns = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  var Bs = !1,
    Ws = !1,
    Vs = "function" == typeof WeakSet ? WeakSet : Set,
    Hs = null;
  function qs(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (r) {
          _f(e, t, r);
        }
      else n.current = null;
  }
  function Ys(e, t, n) {
    try {
      n();
    } catch (r) {
      _f(e, t, r);
    }
  }
  var Qs = !1;
  function Ks(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var o = a.destroy;
          (a.destroy = void 0), void 0 !== o && Ys(t, n, o);
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function Js(e, t) {
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
  function Xs(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
    }
  }
  function Zs(e) {
    var t = e.alternate;
    null !== t && ((e.alternate = null), Zs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[li], delete t[ui], delete t[ci], delete t[fi], delete t[di]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ec(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function tc(e) {
    e: for (;;) {
      for (; null === e.sibling; ) {
        if (null === e.return || ec(e.return)) return null;
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
  function nc(e, t, n) {
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
              (t.onclick = Yo));
    else if (4 !== r && null !== (e = e.child))
      for (nc(e, t, n), e = e.sibling; null !== e; )
        nc(e, t, n), (e = e.sibling);
  }
  function rc(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
      for (rc(e, t, n), e = e.sibling; null !== e; )
        rc(e, t, n), (e = e.sibling);
  }
  var ac = null,
    oc = !1;
  function ic(e, t, n) {
    for (n = n.child; null !== n; ) lc(e, t, n), (n = n.sibling);
  }
  function lc(e, t, n) {
    if (er && "function" == typeof er.onCommitFiberUnmount)
      try {
        er.onCommitFiberUnmount(Zn, n);
      } catch (l) {}
    switch (n.tag) {
      case 5:
        Ws || qs(n, t);
      case 6:
        var r = ac,
          a = oc;
        (ac = null),
          ic(e, t, n),
          (oc = a),
          null !== (ac = r) &&
            (oc
              ? ((e = ac),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ac.removeChild(n.stateNode));
        break;
      case 18:
        null !== ac &&
          (oc
            ? ((e = ac),
              (n = n.stateNode),
              8 === e.nodeType
                ? ri(e.parentNode, n)
                : 1 === e.nodeType && ri(e, n),
              Dr(e))
            : ri(ac, n.stateNode));
        break;
      case 4:
        (r = ac),
          (a = oc),
          (ac = n.stateNode.containerInfo),
          (oc = !0),
          ic(e, t, n),
          (ac = r),
          (oc = a);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ws &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          a = r = r.next;
          do {
            var o = a,
              i = o.destroy;
            (o = o.tag),
              void 0 !== i && (2 & o || 4 & o) && Ys(n, t, i),
              (a = a.next);
          } while (a !== r);
        }
        ic(e, t, n);
        break;
      case 1:
        if (
          !Ws &&
          (qs(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (l) {
            _f(n, t, l);
          }
        ic(e, t, n);
        break;
      case 21:
        ic(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Ws = (r = Ws) || null !== n.memoizedState), ic(e, t, n), (Ws = r))
          : ic(e, t, n);
        break;
      default:
        ic(e, t, n);
    }
  }
  function uc(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      null === n && (n = e.stateNode = new Vs()),
        t.forEach(function (t) {
          var r = kf.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
    }
  }
  function sc(e, t) {
    var n = t.deletions;
    if (null !== n)
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        try {
          var o = e,
            i = t,
            l = i;
          e: for (; null !== l; ) {
            switch (l.tag) {
              case 5:
                (ac = l.stateNode), (oc = !1);
                break e;
              case 3:
              case 4:
                (ac = l.stateNode.containerInfo), (oc = !0);
                break e;
            }
            l = l.return;
          }
          if (null === ac) throw Error(Ze(160));
          lc(o, i, a), (ac = null), (oc = !1);
          var u = a.alternate;
          null !== u && (u.return = null), (a.return = null);
        } catch (s) {
          _f(a, t, s);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t; ) cc(t, e), (t = t.sibling);
  }
  function cc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((sc(t, e), fc(e), 4 & r)) {
          try {
            Ks(3, e, e.return), Js(3, e);
          } catch (v) {
            _f(e, e.return, v);
          }
          try {
            Ks(5, e, e.return);
          } catch (v) {
            _f(e, e.return, v);
          }
        }
        break;
      case 1:
        sc(t, e), fc(e), 512 & r && null !== n && qs(n, n.return);
        break;
      case 5:
        if (
          (sc(t, e),
          fc(e),
          512 & r && null !== n && qs(n, n.return),
          32 & e.flags)
        ) {
          var a = e.stateNode;
          try {
            ln(a, "");
          } catch (v) {
            _f(e, e.return, v);
          }
        }
        if (4 & r && null != (a = e.stateNode)) {
          var o = e.memoizedProps,
            i = null !== n ? n.memoizedProps : o,
            l = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), null !== u))
            try {
              "input" === l && "radio" === o.type && null != o.name && Vt(a, o),
                hn(l, i);
              var s = hn(l, o);
              for (i = 0; i < u.length; i += 2) {
                var c = u[i],
                  f = u[i + 1];
                "style" === c
                  ? fn(a, f)
                  : "dangerouslySetInnerHTML" === c
                  ? on(a, f)
                  : "children" === c
                  ? ln(a, f)
                  : pt(a, c, f, s);
              }
              switch (l) {
                case "input":
                  Ht(a, o);
                  break;
                case "textarea":
                  Zt(a, o);
                  break;
                case "select":
                  var d = a._wrapperState.wasMultiple;
                  a._wrapperState.wasMultiple = !!o.multiple;
                  var p = o.value;
                  null != p
                    ? Kt(a, !!o.multiple, p, !1)
                    : d !== !!o.multiple &&
                      (null != o.defaultValue
                        ? Kt(a, !!o.multiple, o.defaultValue, !0)
                        : Kt(a, !!o.multiple, o.multiple ? [] : "", !1));
              }
              a[ui] = o;
            } catch (v) {
              _f(e, e.return, v);
            }
        }
        break;
      case 6:
        if ((sc(t, e), fc(e), 4 & r)) {
          if (null === e.stateNode) throw Error(Ze(162));
          (a = e.stateNode), (o = e.memoizedProps);
          try {
            a.nodeValue = o;
          } catch (v) {
            _f(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (sc(t, e), fc(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
        )
          try {
            Dr(t.containerInfo);
          } catch (v) {
            _f(e, e.return, v);
          }
        break;
      case 4:
      default:
        sc(t, e), fc(e);
        break;
      case 13:
        sc(t, e),
          fc(e),
          8192 & (a = e.child).flags &&
            ((o = null !== a.memoizedState),
            (a.stateNode.isHidden = o),
            !o ||
              (null !== a.alternate && null !== a.alternate.memoizedState) ||
              (Fc = Hn())),
          4 & r && uc(e);
        break;
      case 22:
        if (
          ((c = null !== n && null !== n.memoizedState),
          1 & e.mode ? ((Ws = (s = Ws) || c), sc(t, e), (Ws = s)) : sc(t, e),
          fc(e),
          8192 & r)
        ) {
          if (
            ((s = null !== e.memoizedState),
            (e.stateNode.isHidden = s) && !c && 1 & e.mode)
          )
            for (Hs = e, c = e.child; null !== c; ) {
              for (f = Hs = c; null !== Hs; ) {
                switch (((p = (d = Hs).child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ks(4, d, d.return);
                    break;
                  case 1:
                    qs(d, d.return);
                    var h = d.stateNode;
                    if ("function" == typeof h.componentWillUnmount) {
                      (r = d), (n = d.return);
                      try {
                        (t = r),
                          (h.props = t.memoizedProps),
                          (h.state = t.memoizedState),
                          h.componentWillUnmount();
                      } catch (g) {
                        _f(r, n, g);
                      }
                    }
                    break;
                  case 5:
                    qs(d, d.return);
                    break;
                  case 22:
                    if (null !== d.memoizedState) {
                      vc(f);
                      continue;
                    }
                }
                null !== p ? ((p.return = d), (Hs = p)) : vc(f);
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
                      ? "function" == typeof (o = a.style).setProperty
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none")
                      : ((l = f.stateNode),
                        (i =
                          null != (u = f.memoizedProps.style) &&
                          u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (l.style.display = cn("display", i)));
                } catch (v) {
                  _f(e, e.return, v);
                }
              }
            } else if (6 === f.tag) {
              if (null === c)
                try {
                  f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                } catch (v) {
                  _f(e, e.return, v);
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
        sc(t, e), fc(e), 4 & r && uc(e);
      case 21:
    }
  }
  function fc(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var n = e.return; null !== n; ) {
            if (ec(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(Ze(160));
        }
        switch (r.tag) {
          case 5:
            var a = r.stateNode;
            32 & r.flags && (ln(a, ""), (r.flags &= -33)), rc(e, tc(e), a);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo;
            nc(e, tc(e), o);
            break;
          default:
            throw Error(Ze(161));
        }
      } catch (i) {
        _f(e, e.return, i);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function dc(e, t, n) {
    (Hs = e), pc(e);
  }
  function pc(e, t, n) {
    for (var r = !!(1 & e.mode); null !== Hs; ) {
      var a = Hs,
        o = a.child;
      if (22 === a.tag && r) {
        var i = null !== a.memoizedState || Bs;
        if (!i) {
          var l = a.alternate,
            u = (null !== l && null !== l.memoizedState) || Ws;
          l = Bs;
          var s = Ws;
          if (((Bs = i), (Ws = u) && !s))
            for (Hs = a; null !== Hs; )
              (u = (i = Hs).child),
                22 === i.tag && null !== i.memoizedState
                  ? gc(a)
                  : null !== u
                  ? ((u.return = i), (Hs = u))
                  : gc(a);
          for (; null !== o; ) (Hs = o), pc(o), (o = o.sibling);
          (Hs = a), (Bs = l), (Ws = s);
        }
        hc(e);
      } else
        8772 & a.subtreeFlags && null !== o
          ? ((o.return = a), (Hs = o))
          : hc(e);
    }
  }
  function hc(e) {
    for (; null !== Hs; ) {
      var t = Hs;
      if (8772 & t.flags) {
        var n = t.alternate;
        try {
          if (8772 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ws || Js(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (4 & t.flags && !Ws)
                  if (null === n) r.componentDidMount();
                  else {
                    var a =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Ku(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      a,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                null !== o && Ll(t, o, r);
                break;
              case 3:
                var i = t.updateQueue;
                if (null !== i) {
                  if (((n = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ll(t, i, n);
                }
                break;
              case 5:
                var l = t.stateNode;
                if (null === n && 4 & t.flags) {
                  n = l;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && n.focus();
                      break;
                    case "img":
                      u.src && (n.src = u.src);
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
                      null !== f && Dr(f);
                    }
                  }
                }
                break;
              default:
                throw Error(Ze(163));
            }
          Ws || (512 & t.flags && Xs(t));
        } catch (d) {
          _f(t, t.return, d);
        }
      }
      if (t === e) {
        Hs = null;
        break;
      }
      if (null !== (n = t.sibling)) {
        (n.return = t.return), (Hs = n);
        break;
      }
      Hs = t.return;
    }
  }
  function vc(e) {
    for (; null !== Hs; ) {
      var t = Hs;
      if (t === e) {
        Hs = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        (n.return = t.return), (Hs = n);
        break;
      }
      Hs = t.return;
    }
  }
  function gc(e) {
    for (; null !== Hs; ) {
      var t = Hs;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Js(4, t);
            } catch (u) {
              _f(t, n, u);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (u) {
                _f(t, a, u);
              }
            }
            var o = t.return;
            try {
              Xs(t);
            } catch (u) {
              _f(t, o, u);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Xs(t);
            } catch (u) {
              _f(t, i, u);
            }
        }
      } catch (u) {
        _f(t, t.return, u);
      }
      if (t === e) {
        Hs = null;
        break;
      }
      var l = t.sibling;
      if (null !== l) {
        (l.return = t.return), (Hs = l);
        break;
      }
      Hs = t.return;
    }
  }
  var yc,
    mc = Math.ceil,
    _c = ht.ReactCurrentDispatcher,
    bc = ht.ReactCurrentOwner,
    wc = ht.ReactCurrentBatchConfig,
    Sc = 0,
    kc = null,
    xc = null,
    Ec = 0,
    Cc = 0,
    Oc = _i(0),
    Nc = 0,
    Ac = null,
    Tc = 0,
    Rc = 0,
    jc = 0,
    Mc = null,
    Pc = null,
    Fc = 0,
    zc = 1 / 0,
    Dc = null,
    Lc = !1,
    Ic = null,
    Gc = null,
    Uc = !1,
    $c = null,
    Bc = 0,
    Wc = 0,
    Vc = null,
    Hc = -1,
    qc = 0;
  function Yc() {
    return 6 & Sc ? Hn() : -1 !== Hc ? Hc : (Hc = Hn());
  }
  function Qc(e) {
    return 1 & e.mode
      ? 2 & Sc && 0 !== Ec
        ? Ec & -Ec
        : null !== cl.transition
        ? (0 === qc && (qc = cr()), qc)
        : 0 !== (e = hr)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : Vr(e.type))
      : 1;
  }
  function Kc(e, t, n, r) {
    if (50 < Wc) throw ((Wc = 0), (Vc = null), Error(Ze(185)));
    dr(e, n, r),
      (2 & Sc && e === kc) ||
        (e === kc && (!(2 & Sc) && (Rc |= n), 4 === Nc && tf(e, Ec)),
        Jc(e, r),
        1 === n &&
          0 === Sc &&
          !(1 & t.mode) &&
          ((zc = Hn() + 500), Pi && Di()));
  }
  function Jc(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes;
        0 < o;

      ) {
        var i = 31 - tr(o),
          l = 1 << i,
          u = a[i];
        -1 === u
          ? (l & n && !(l & r)) || (a[i] = ur(l, t))
          : u <= t && (e.expiredLanes |= l),
          (o &= ~l);
      }
    })(e, t);
    var r,
      a = lr(e, e === kc ? Ec : 0);
    if (0 === a)
      null !== n && Bn(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((null != n && Bn(n), 1 === t))
        0 === e.tag
          ? ((r = nf.bind(null, e)), (Pi = !0), zi(r))
          : zi(nf.bind(null, e)),
          ti(function () {
            !(6 & Sc) && Di();
          }),
          (n = null);
      else {
        switch (vr(a)) {
          case 1:
            n = Yn;
            break;
          case 4:
            n = Qn;
            break;
          case 16:
          default:
            n = Kn;
            break;
          case 536870912:
            n = Xn;
        }
        n = xf(n, Xc.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Xc(e, t) {
    if (((Hc = -1), (qc = 0), 6 & Sc)) throw Error(Ze(327));
    var n = e.callbackNode;
    if (yf() && e.callbackNode !== n) return null;
    var r = lr(e, e === kc ? Ec : 0);
    if (0 === r) return null;
    if (30 & r || r & e.expiredLanes || t) t = ff(e, r);
    else {
      t = r;
      var a = Sc;
      Sc |= 2;
      var o = sf();
      for (
        (kc === e && Ec === t) || ((Dc = null), (zc = Hn() + 500), lf(e, t));
        ;

      )
        try {
          pf();
          break;
        } catch (l) {
          uf(e, l);
        }
      wl(),
        (_c.current = o),
        (Sc = a),
        null !== xc ? (t = 0) : ((kc = null), (Ec = 0), (t = Nc));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (a = sr(e)) && ((r = a), (t = Zc(e, a))), 1 === t))
        throw ((n = Ac), lf(e, 0), tf(e, r), Jc(e, Hn()), n);
      if (6 === t) tf(e, r);
      else {
        if (
          ((a = e.current.alternate),
          !(
            30 & r ||
            (function (e) {
              for (var t = e; ; ) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var a = n[r],
                        o = a.getSnapshot;
                      a = a.value;
                      try {
                        if (!to(o(), a)) return !1;
                      } catch (i) {
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
            })(a) ||
            ((t = ff(e, r)),
            2 === t && ((o = sr(e)), 0 !== o && ((r = o), (t = Zc(e, o)))),
            1 !== t)
          ))
        )
          throw ((n = Ac), lf(e, 0), tf(e, r), Jc(e, Hn()), n);
        switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(Ze(345));
          case 2:
          case 5:
            gf(e, Pc, Dc);
            break;
          case 3:
            if (
              (tf(e, r), (130023424 & r) === r && 10 < (t = Fc + 500 - Hn()))
            ) {
              if (0 !== lr(e, 0)) break;
              if (((a = e.suspendedLanes) & r) !== r) {
                Yc(), (e.pingedLanes |= e.suspendedLanes & a);
                break;
              }
              e.timeoutHandle = Xo(gf.bind(null, e, Pc, Dc), t);
              break;
            }
            gf(e, Pc, Dc);
            break;
          case 4:
            if ((tf(e, r), (4194240 & r) === r)) break;
            for (t = e.eventTimes, a = -1; 0 < r; ) {
              var i = 31 - tr(r);
              (o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o);
            }
            if (
              ((r = a),
              10 <
                (r =
                  (120 > (r = Hn() - r)
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
                    : 1960 * mc(r / 1960)) - r))
            ) {
              e.timeoutHandle = Xo(gf.bind(null, e, Pc, Dc), r);
              break;
            }
            gf(e, Pc, Dc);
            break;
          default:
            throw Error(Ze(329));
        }
      }
    }
    return Jc(e, Hn()), e.callbackNode === n ? Xc.bind(null, e) : null;
  }
  function Zc(e, t) {
    var n = Mc;
    return (
      e.current.memoizedState.isDehydrated && (lf(e, t).flags |= 256),
      2 !== (e = ff(e, t)) && ((t = Pc), (Pc = n), null !== t && ef(t)),
      e
    );
  }
  function ef(e) {
    null === Pc ? (Pc = e) : Pc.push.apply(Pc, e);
  }
  function tf(e, t) {
    for (
      t &= ~jc,
        t &= ~Rc,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - tr(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function nf(e) {
    if (6 & Sc) throw Error(Ze(327));
    yf();
    var t = lr(e, 0);
    if (!(1 & t)) return Jc(e, Hn()), null;
    var n = ff(e, t);
    if (0 !== e.tag && 2 === n) {
      var r = sr(e);
      0 !== r && ((t = r), (n = Zc(e, r)));
    }
    if (1 === n) throw ((n = Ac), lf(e, 0), tf(e, t), Jc(e, Hn()), n);
    if (6 === n) throw Error(Ze(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      gf(e, Pc, Dc),
      Jc(e, Hn()),
      null
    );
  }
  function rf(e, t) {
    var n = Sc;
    Sc |= 1;
    try {
      return e(t);
    } finally {
      0 === (Sc = n) && ((zc = Hn() + 500), Pi && Di());
    }
  }
  function af(e) {
    null !== $c && 0 === $c.tag && !(6 & Sc) && yf();
    var t = Sc;
    Sc |= 1;
    var n = wc.transition,
      r = hr;
    try {
      if (((wc.transition = null), (hr = 1), e)) return e();
    } finally {
      (hr = r), (wc.transition = n), !(6 & (Sc = t)) && Di();
    }
  }
  function of() {
    (Cc = Oc.current), bi(Oc);
  }
  function lf(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), Zo(n)), null !== xc))
      for (n = xc.return; null !== n; ) {
        var r = n;
        switch ((Ki(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && Ni();
            break;
          case 3:
            Vl(), bi(xi), bi(ki), Jl();
            break;
          case 5:
            ql(r);
            break;
          case 4:
            Vl();
            break;
          case 13:
          case 19:
            bi(Yl);
            break;
          case 10:
            Sl(r.type._context);
            break;
          case 22:
          case 23:
            of();
        }
        n = n.return;
      }
    if (
      ((kc = e),
      (xc = e = Nf(e.current, null)),
      (Ec = Cc = t),
      (Nc = 0),
      (Ac = null),
      (jc = Rc = Tc = 0),
      (Pc = Mc = null),
      null !== Cl)
    ) {
      for (t = 0; t < Cl.length; t++)
        if (null !== (r = (n = Cl[t]).interleaved)) {
          n.interleaved = null;
          var a = r.next,
            o = n.pending;
          if (null !== o) {
            var i = o.next;
            (o.next = a), (r.next = i);
          }
          n.pending = r;
        }
      Cl = null;
    }
    return e;
  }
  function uf(e, t) {
    for (;;) {
      var n = xc;
      try {
        if ((wl(), (Xl.current = Hu), au)) {
          for (var r = tu.memoizedState; null !== r; ) {
            var a = r.queue;
            null !== a && (a.pending = null), (r = r.next);
          }
          au = !1;
        }
        if (
          ((eu = 0),
          (ru = nu = tu = null),
          (ou = !1),
          (iu = 0),
          (bc.current = null),
          null === n || null === n.return)
        ) {
          (Nc = 1), (Ac = t), (xc = null);
          break;
        }
        e: {
          var o = e,
            i = n.return,
            l = n,
            u = t;
          if (
            ((t = Ec),
            (l.flags |= 32768),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var s = u,
              c = l,
              f = c.tag;
            if (!(1 & c.mode || (0 !== f && 11 !== f && 15 !== f))) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
            }
            var p = cs(i);
            if (null !== p) {
              (p.flags &= -257),
                fs(p, i, l, 0, t),
                1 & p.mode && ss(o, s, t),
                (u = s);
              var h = (t = p).updateQueue;
              if (null === h) {
                var v = new Set();
                v.add(u), (t.updateQueue = v);
              } else h.add(u);
              break e;
            }
            if (!(1 & t)) {
              ss(o, s, t), cf();
              break e;
            }
            u = Error(Ze(426));
          } else if (Zi && 1 & l.mode) {
            var g = cs(i);
            if (null !== g) {
              !(65536 & g.flags) && (g.flags |= 256),
                fs(g, i, l, 0, t),
                sl(rs(u, l));
              break e;
            }
          }
          (o = u = rs(u, l)),
            4 !== Nc && (Nc = 2),
            null === Mc ? (Mc = [o]) : Mc.push(o),
            (o = i);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536),
                  (t &= -t),
                  (o.lanes |= t),
                  zl(o, ls(0, u, t));
                break e;
              case 1:
                l = u;
                var y = o.type,
                  m = o.stateNode;
                if (
                  !(
                    128 & o.flags ||
                    ("function" != typeof y.getDerivedStateFromError &&
                      (null === m ||
                        "function" != typeof m.componentDidCatch ||
                        (null !== Gc && Gc.has(m))))
                  )
                ) {
                  (o.flags |= 65536),
                    (t &= -t),
                    (o.lanes |= t),
                    zl(o, us(o, l, t));
                  break e;
                }
            }
            o = o.return;
          } while (null !== o);
        }
        vf(n);
      } catch (_) {
        (t = _), xc === n && null !== n && (xc = n = n.return);
        continue;
      }
      break;
    }
  }
  function sf() {
    var e = _c.current;
    return (_c.current = Hu), null === e ? Hu : e;
  }
  function cf() {
    (0 !== Nc && 3 !== Nc && 2 !== Nc) || (Nc = 4),
      null === kc || (!(268435455 & Tc) && !(268435455 & Rc)) || tf(kc, Ec);
  }
  function ff(e, t) {
    var n = Sc;
    Sc |= 2;
    var r = sf();
    for ((kc === e && Ec === t) || ((Dc = null), lf(e, t)); ; )
      try {
        df();
        break;
      } catch (a) {
        uf(e, a);
      }
    if ((wl(), (Sc = n), (_c.current = r), null !== xc)) throw Error(Ze(261));
    return (kc = null), (Ec = 0), Nc;
  }
  function df() {
    for (; null !== xc; ) hf(xc);
  }
  function pf() {
    for (; null !== xc && !Wn(); ) hf(xc);
  }
  function hf(e) {
    var t = yc(e.alternate, e, Cc);
    (e.memoizedProps = e.pendingProps),
      null === t ? vf(e) : (xc = t),
      (bc.current = null);
  }
  function vf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 32768 & t.flags)) {
        if (null !== (n = $s(n, t))) return (n.flags &= 32767), void (xc = n);
        if (null === e) return (Nc = 6), void (xc = null);
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      } else if (null !== (n = Us(n, t, Cc))) return void (xc = n);
      if (null !== (t = t.sibling)) return void (xc = t);
      xc = t = e;
    } while (null !== t);
    0 === Nc && (Nc = 5);
  }
  function gf(e, t, n) {
    var r = hr,
      a = wc.transition;
    try {
      (wc.transition = null),
        (hr = 1),
        (function (e, t, n, r) {
          do {
            yf();
          } while (null !== $c);
          if (6 & Sc) throw Error(Ze(327));
          n = e.finishedWork;
          var a = e.finishedLanes;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(Ze(177));
          (e.callbackNode = null), (e.callbackPriority = 0);
          var o = n.lanes | n.childLanes;
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
                var a = 31 - tr(n),
                  o = 1 << a;
                (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
              }
            })(e, o),
            e === kc && ((xc = kc = null), (Ec = 0)),
            (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
              Uc ||
              ((Uc = !0),
              xf(Kn, function () {
                return yf(), null;
              })),
            (o = !!(15990 & n.flags)),
            15990 & n.subtreeFlags || o)
          ) {
            (o = wc.transition), (wc.transition = null);
            var i = hr;
            hr = 1;
            var l = Sc;
            (Sc |= 4),
              (bc.current = null),
              (function (e, t) {
                if (((Qo = Ir), lo((e = io())))) {
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
                          o = r.focusNode;
                        r = r.focusOffset;
                        try {
                          n.nodeType, o.nodeType;
                        } catch (b) {
                          n = null;
                          break e;
                        }
                        var i = 0,
                          l = -1,
                          u = -1,
                          s = 0,
                          c = 0,
                          f = e,
                          d = null;
                        t: for (;;) {
                          for (
                            var p;
                            f !== n ||
                              (0 !== a && 3 !== f.nodeType) ||
                              (l = i + a),
                              f !== o ||
                                (0 !== r && 3 !== f.nodeType) ||
                                (u = i + r),
                              3 === f.nodeType && (i += f.nodeValue.length),
                              null !== (p = f.firstChild);

                          )
                            (d = f), (f = p);
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (d === n && ++s === a && (l = i),
                              d === o && ++c === r && (u = i),
                              null !== (p = f.nextSibling))
                            )
                              break;
                            d = (f = d).parentNode;
                          }
                          f = p;
                        }
                        n = -1 === l || -1 === u ? null : { start: l, end: u };
                      } else n = null;
                    }
                  n = n || { start: 0, end: 0 };
                } else n = null;
                for (
                  Ko = { focusedElem: e, selectionRange: n }, Ir = !1, Hs = t;
                  null !== Hs;

                )
                  if (
                    ((e = (t = Hs).child), 1028 & t.subtreeFlags && null !== e)
                  )
                    (e.return = t), (Hs = e);
                  else
                    for (; null !== Hs; ) {
                      t = Hs;
                      try {
                        var h = t.alternate;
                        if (1024 & t.flags)
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
                              if (null !== h) {
                                var v = h.memoizedProps,
                                  g = h.memoizedState,
                                  y = t.stateNode,
                                  m = y.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? v
                                      : Ku(t.type, v),
                                    g
                                  );
                                y.__reactInternalSnapshotBeforeUpdate = m;
                              }
                              break;
                            case 3:
                              var _ = t.stateNode.containerInfo;
                              1 === _.nodeType
                                ? (_.textContent = "")
                                : 9 === _.nodeType &&
                                  _.documentElement &&
                                  _.removeChild(_.documentElement);
                              break;
                            default:
                              throw Error(Ze(163));
                          }
                      } catch (b) {
                        _f(t, t.return, b);
                      }
                      if (null !== (e = t.sibling)) {
                        (e.return = t.return), (Hs = e);
                        break;
                      }
                      Hs = t.return;
                    }
                (h = Qs), (Qs = !1);
              })(e, n),
              cc(n, e),
              uo(Ko),
              (Ir = !!Qo),
              (Ko = Qo = null),
              (e.current = n),
              dc(n),
              Vn(),
              (Sc = l),
              (hr = i),
              (wc.transition = o);
          } else e.current = n;
          if (
            (Uc && ((Uc = !1), ($c = e), (Bc = a)),
            0 === (o = e.pendingLanes) && (Gc = null),
            (function (e) {
              if (er && "function" == typeof er.onCommitFiberRoot)
                try {
                  er.onCommitFiberRoot(
                    Zn,
                    e,
                    void 0,
                    !(128 & ~e.current.flags)
                  );
                } catch (t) {}
            })(n.stateNode),
            Jc(e, Hn()),
            null !== t)
          )
            for (r = e.onRecoverableError, n = 0; n < t.length; n++)
              r((a = t[n]).value, {
                componentStack: a.stack,
                digest: a.digest,
              });
          if (Lc) throw ((Lc = !1), (e = Ic), (Ic = null), e);
          !!(1 & Bc) && 0 !== e.tag && yf(),
            1 & (o = e.pendingLanes)
              ? e === Vc
                ? Wc++
                : ((Wc = 0), (Vc = e))
              : (Wc = 0),
            Di();
        })(e, t, n, r);
    } finally {
      (wc.transition = a), (hr = r);
    }
    return null;
  }
  function yf() {
    if (null !== $c) {
      var e = vr(Bc),
        t = wc.transition,
        n = hr;
      try {
        if (((wc.transition = null), (hr = 16 > e ? 16 : e), null === $c))
          var r = !1;
        else {
          if (((e = $c), ($c = null), (Bc = 0), 6 & Sc)) throw Error(Ze(331));
          var a = Sc;
          for (Sc |= 4, Hs = e.current; null !== Hs; ) {
            var o = Hs,
              i = o.child;
            if (16 & Hs.flags) {
              var l = o.deletions;
              if (null !== l) {
                for (var u = 0; u < l.length; u++) {
                  var s = l[u];
                  for (Hs = s; null !== Hs; ) {
                    var c = Hs;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ks(8, c, o);
                    }
                    var f = c.child;
                    if (null !== f) (f.return = c), (Hs = f);
                    else
                      for (; null !== Hs; ) {
                        var d = (c = Hs).sibling,
                          p = c.return;
                        if ((Zs(c), c === s)) {
                          Hs = null;
                          break;
                        }
                        if (null !== d) {
                          (d.return = p), (Hs = d);
                          break;
                        }
                        Hs = p;
                      }
                  }
                }
                var h = o.alternate;
                if (null !== h) {
                  var v = h.child;
                  if (null !== v) {
                    h.child = null;
                    do {
                      var g = v.sibling;
                      (v.sibling = null), (v = g);
                    } while (null !== v);
                  }
                }
                Hs = o;
              }
            }
            if (2064 & o.subtreeFlags && null !== i) (i.return = o), (Hs = i);
            else
              e: for (; null !== Hs; ) {
                if (2048 & (o = Hs).flags)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks(9, o, o.return);
                  }
                var y = o.sibling;
                if (null !== y) {
                  (y.return = o.return), (Hs = y);
                  break e;
                }
                Hs = o.return;
              }
          }
          var m = e.current;
          for (Hs = m; null !== Hs; ) {
            var _ = (i = Hs).child;
            if (2064 & i.subtreeFlags && null !== _) (_.return = i), (Hs = _);
            else
              e: for (i = m; null !== Hs; ) {
                if (2048 & (l = Hs).flags)
                  try {
                    switch (l.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Js(9, l);
                    }
                  } catch (w) {
                    _f(l, l.return, w);
                  }
                if (l === i) {
                  Hs = null;
                  break e;
                }
                var b = l.sibling;
                if (null !== b) {
                  (b.return = l.return), (Hs = b);
                  break e;
                }
                Hs = l.return;
              }
          }
          if (
            ((Sc = a),
            Di(),
            er && "function" == typeof er.onPostCommitFiberRoot)
          )
            try {
              er.onPostCommitFiberRoot(Zn, e);
            } catch (w) {}
          r = !0;
        }
        return r;
      } finally {
        (hr = n), (wc.transition = t);
      }
    }
    return !1;
  }
  function mf(e, t, n) {
    (e = Pl(e, (t = ls(0, (t = rs(n, t)), 1)), 1)),
      (t = Yc()),
      null !== e && (dr(e, 1, t), Jc(e, t));
  }
  function _f(e, t, n) {
    if (3 === e.tag) mf(e, e, n);
    else
      for (; null !== t; ) {
        if (3 === t.tag) {
          mf(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === Gc || !Gc.has(r)))
          ) {
            (t = Pl(t, (e = us(t, (e = rs(n, e)), 1)), 1)),
              (e = Yc()),
              null !== t && (dr(t, 1, e), Jc(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function bf(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t),
      (t = Yc()),
      (e.pingedLanes |= e.suspendedLanes & n),
      kc === e &&
        (Ec & n) === n &&
        (4 === Nc || (3 === Nc && (130023424 & Ec) === Ec && 500 > Hn() - Fc)
          ? lf(e, 0)
          : (jc |= n)),
      Jc(e, t);
  }
  function wf(e, t) {
    0 === t &&
      (1 & e.mode
        ? ((t = or), !(130023424 & (or <<= 1)) && (or = 4194304))
        : (t = 1));
    var n = Yc();
    null !== (e = Al(e, t)) && (dr(e, t, n), Jc(e, n));
  }
  function Sf(e) {
    var t = e.memoizedState,
      n = 0;
    null !== t && (n = t.retryLane), wf(e, n);
  }
  function kf(e, t) {
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
        throw Error(Ze(314));
    }
    null !== r && r.delete(t), wf(e, n);
  }
  function xf(e, t) {
    return $n(e, t);
  }
  function Ef(e, t, n, r) {
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
  function Cf(e, t, n, r) {
    return new Ef(e, t, n, r);
  }
  function Of(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function Nf(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Cf(e.tag, t, e.key, e.mode)).elementType = e.elementType),
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
  function Af(e, t, n, r, a, o) {
    var i = 2;
    if (((r = e), "function" == typeof e)) Of(e) && (i = 1);
    else if ("string" == typeof e) i = 5;
    else
      e: switch (e) {
        case yt:
          return Tf(n.children, a, o, t);
        case mt:
          (i = 8), (a |= 8);
          break;
        case _t:
          return ((e = Cf(12, n, t, 2 | a)).elementType = _t), (e.lanes = o), e;
        case kt:
          return ((e = Cf(13, n, t, a)).elementType = kt), (e.lanes = o), e;
        case xt:
          return ((e = Cf(19, n, t, a)).elementType = xt), (e.lanes = o), e;
        case Ot:
          return Rf(n, a, o, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case bt:
                i = 10;
                break e;
              case wt:
                i = 9;
                break e;
              case St:
                i = 11;
                break e;
              case Et:
                i = 14;
                break e;
              case Ct:
                (i = 16), (r = null);
                break e;
            }
          throw Error(Ze(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Cf(i, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function Tf(e, t, n, r) {
    return ((e = Cf(7, e, r, t)).lanes = n), e;
  }
  function Rf(e, t, n, r) {
    return (
      ((e = Cf(22, e, r, t)).elementType = Ot),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function jf(e, t, n) {
    return ((e = Cf(6, e, null, t)).lanes = n), e;
  }
  function Mf(e, t, n) {
    return (
      ((t = Cf(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Pf(e, t, n, r, a) {
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
      (this.eventTimes = fr(0)),
      (this.expirationTimes = fr(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = fr(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ff(e, t, n, r, a, o, i, l, u) {
    return (
      (e = new Pf(e, t, n, l, u)),
      1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
      (o = Cf(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Rl(o),
      e
    );
  }
  function zf(e) {
    if (!e) return Si;
    e: {
      if (Dn((e = e._reactInternals)) !== e || 1 !== e.tag)
        throw Error(Ze(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oi(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(Ze(171));
    }
    if (1 === e.tag) {
      var n = e.type;
      if (Oi(n)) return Ti(e, n, t);
    }
    return t;
  }
  function Df(e, t, n, r, a, o, i, l, u) {
    return (
      ((e = Ff(n, r, !0, e, 0, o, 0, l, u)).context = zf(null)),
      (n = e.current),
      ((o = Ml((r = Yc()), (a = Qc(n)))).callback = null != t ? t : null),
      Pl(n, o, a),
      (e.current.lanes = a),
      dr(e, a, r),
      Jc(e, r),
      e
    );
  }
  function Lf(e, t, n, r) {
    var a = t.current,
      o = Yc(),
      i = Qc(a);
    return (
      (n = zf(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Ml(o, i)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Pl(a, t, i)) && (Kc(e, a, i, o), Fl(e, a, i)),
      i
    );
  }
  function If(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Gf(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function Uf(e, t) {
    Gf(e, t), (e = e.alternate) && Gf(e, t);
  }
  yc = function (e, t, n) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || xi.current) ps = !0;
      else {
        if (!(e.lanes & n || 128 & t.flags))
          return (
            (ps = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  ks(t), ul();
                  break;
                case 5:
                  Hl(t);
                  break;
                case 1:
                  Oi(t.type) && Ri(t);
                  break;
                case 4:
                  Wl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    a = t.memoizedProps.value;
                  wi(yl, r._currentValue), (r._currentValue = a);
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (wi(Yl, 1 & Yl.current), (t.flags |= 128), null)
                      : n & t.child.childLanes
                      ? Rs(e, t, n)
                      : (wi(Yl, 1 & Yl.current),
                        null !== (e = Ls(e, t, n)) ? e.sibling : null);
                  wi(Yl, 1 & Yl.current);
                  break;
                case 19:
                  if (((r = !!(n & t.childLanes)), 128 & e.flags)) {
                    if (r) return zs(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    wi(Yl, Yl.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return (t.lanes = 0), ms(e, t, n);
              }
              return Ls(e, t, n);
            })(e, t, n)
          );
        ps = !!(131072 & e.flags);
      }
    else (ps = !1), Zi && 1048576 & t.flags && Yi(t, Ui, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ds(e, t), (e = t.pendingProps);
        var a = Ci(t, ki.current);
        xl(t, n), (a = cu(null, t, r, e, a, n));
        var o = fu();
        return (
          (t.flags |= 1),
          "object" == typeof a &&
          null !== a &&
          "function" == typeof a.render &&
          void 0 === a.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Oi(r) ? ((o = !0), Ri(t)) : (o = !1),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              Rl(t),
              (a.updater = Xu),
              (t.stateNode = a),
              (a._reactInternals = t),
              ns(t, r, e, n),
              (t = Ss(null, t, r, !0, o, n)))
            : ((t.tag = 0), Zi && o && Qi(t), hs(null, t, a, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ds(e, t),
            (e = t.pendingProps),
            (r = (a = r._init)(r._payload)),
            (t.type = r),
            (a = t.tag =
              (function (e) {
                if ("function" == typeof e) return Of(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === St) return 11;
                  if (e === Et) return 14;
                }
                return 2;
              })(r)),
            (e = Ku(r, e)),
            a)
          ) {
            case 0:
              t = bs(null, t, r, e, n);
              break e;
            case 1:
              t = ws(null, t, r, e, n);
              break e;
            case 11:
              t = vs(null, t, r, e, n);
              break e;
            case 14:
              t = gs(null, t, r, Ku(r.type, e), n);
              break e;
          }
          throw Error(Ze(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (a = t.pendingProps),
          bs(e, t, r, (a = t.elementType === r ? a : Ku(r, a)), n)
        );
      case 1:
        return (
          (r = t.type),
          (a = t.pendingProps),
          ws(e, t, r, (a = t.elementType === r ? a : Ku(r, a)), n)
        );
      case 3:
        e: {
          if ((ks(t), null === e)) throw Error(Ze(387));
          (r = t.pendingProps),
            (a = (o = t.memoizedState).element),
            jl(e, t),
            Dl(t, r, null, n);
          var i = t.memoizedState;
          if (((r = i.element), o.isDehydrated)) {
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              256 & t.flags)
            ) {
              t = xs(e, t, r, n, (a = rs(Error(Ze(423)), t)));
              break e;
            }
            if (r !== a) {
              t = xs(e, t, r, n, (a = rs(Error(Ze(424)), t)));
              break e;
            }
            for (
              Xi = ai(t.stateNode.containerInfo.firstChild),
                Ji = t,
                Zi = !0,
                el = null,
                n = gl(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
          } else {
            if ((ul(), r === a)) {
              t = Ls(e, t, n);
              break e;
            }
            hs(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Hl(t),
          null === e && al(t),
          (r = t.type),
          (a = t.pendingProps),
          (o = null !== e ? e.memoizedProps : null),
          (i = a.children),
          Jo(r, a) ? (i = null) : null !== o && Jo(r, o) && (t.flags |= 32),
          _s(e, t),
          hs(e, t, i, n),
          t.child
        );
      case 6:
        return null === e && al(t), null;
      case 13:
        return Rs(e, t, n);
      case 4:
        return (
          Wl(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          null === e ? (t.child = vl(t, null, r, n)) : hs(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (a = t.pendingProps),
          vs(e, t, r, (a = t.elementType === r ? a : Ku(r, a)), n)
        );
      case 7:
        return hs(e, t, t.pendingProps, n), t.child;
      case 8:
      case 12:
        return hs(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (a = t.pendingProps),
            (o = t.memoizedProps),
            (i = a.value),
            wi(yl, r._currentValue),
            (r._currentValue = i),
            null !== o)
          )
            if (to(o.value, i)) {
              if (o.children === a.children && !xi.current) {
                t = Ls(e, t, n);
                break e;
              }
            } else
              for (null !== (o = t.child) && (o.return = t); null !== o; ) {
                var l = o.dependencies;
                if (null !== l) {
                  i = o.child;
                  for (var u = l.firstContext; null !== u; ) {
                    if (u.context === r) {
                      if (1 === o.tag) {
                        (u = Ml(-1, n & -n)).tag = 2;
                        var s = o.updateQueue;
                        if (null !== s) {
                          var c = (s = s.shared).pending;
                          null === c
                            ? (u.next = u)
                            : ((u.next = c.next), (c.next = u)),
                            (s.pending = u);
                        }
                      }
                      (o.lanes |= n),
                        null !== (u = o.alternate) && (u.lanes |= n),
                        kl(o.return, n, t),
                        (l.lanes |= n);
                      break;
                    }
                    u = u.next;
                  }
                } else if (10 === o.tag) i = o.type === t.type ? null : o.child;
                else if (18 === o.tag) {
                  if (null === (i = o.return)) throw Error(Ze(341));
                  (i.lanes |= n),
                    null !== (l = i.alternate) && (l.lanes |= n),
                    kl(i, n, t),
                    (i = o.sibling);
                } else i = o.child;
                if (null !== i) i.return = o;
                else
                  for (i = o; null !== i; ) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (null !== (o = i.sibling)) {
                      (o.return = i.return), (i = o);
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          hs(e, t, a.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (a = t.type),
          (r = t.pendingProps.children),
          xl(t, n),
          (r = r((a = El(a)))),
          (t.flags |= 1),
          hs(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (a = Ku((r = t.type), t.pendingProps)),
          gs(e, t, r, (a = Ku(r.type, a)), n)
        );
      case 15:
        return ys(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (a = t.pendingProps),
          (a = t.elementType === r ? a : Ku(r, a)),
          Ds(e, t),
          (t.tag = 1),
          Oi(r) ? ((e = !0), Ri(t)) : (e = !1),
          xl(t, n),
          es(t, r, a),
          ns(t, r, a, n),
          Ss(null, t, r, !0, e, n)
        );
      case 19:
        return zs(e, t, n);
      case 22:
        return ms(e, t, n);
    }
    throw Error(Ze(156, t.tag));
  };
  var $f =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Bf(e) {
    this._internalRoot = e;
  }
  function Wf(e) {
    this._internalRoot = e;
  }
  function Vf(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Hf(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function qf() {}
  function Yf(e, t, n, r, a) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if ("function" == typeof a) {
        var l = a;
        a = function () {
          var e = If(i);
          l.call(e);
        };
      }
      Lf(t, i, e, a);
    } else
      i = (function (e, t, n, r, a) {
        if (a) {
          if ("function" == typeof r) {
            var o = r;
            r = function () {
              var e = If(i);
              o.call(e);
            };
          }
          var i = Df(t, r, e, 0, null, !1, 0, "", qf);
          return (
            (e._reactRootContainer = i),
            (e[si] = i.current),
            Do(8 === e.nodeType ? e.parentNode : e),
            af(),
            i
          );
        }
        for (; (a = e.lastChild); ) e.removeChild(a);
        if ("function" == typeof r) {
          var l = r;
          r = function () {
            var e = If(u);
            l.call(e);
          };
        }
        var u = Ff(e, 0, !1, null, 0, !1, 0, "", qf);
        return (
          (e._reactRootContainer = u),
          (e[si] = u.current),
          Do(8 === e.nodeType ? e.parentNode : e),
          af(function () {
            Lf(t, u, n, r);
          }),
          u
        );
      })(n, t, e, a, r);
    return If(i);
  }
  (Wf.prototype.render = Bf.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(Ze(409));
      Lf(e, t, null, null);
    }),
    (Wf.prototype.unmount = Bf.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          af(function () {
            Lf(null, e, null, null);
          }),
            (t[si] = null);
        }
      }),
    (Wf.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = _r();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Nr.length && 0 !== t && t < Nr[n].priority; n++);
        Nr.splice(n, 0, e), 0 === n && jr(e);
      }
    }),
    (gr = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = ir(t.pendingLanes);
            0 !== n &&
              (pr(t, 1 | n),
              Jc(t, Hn()),
              !(6 & Sc) && ((zc = Hn() + 500), Di()));
          }
          break;
        case 13:
          af(function () {
            var t = Al(e, 1);
            if (null !== t) {
              var n = Yc();
              Kc(t, e, 1, n);
            }
          }),
            Uf(e, 1);
      }
    }),
    (yr = function (e) {
      if (13 === e.tag) {
        var t = Al(e, 134217728);
        null !== t && Kc(t, e, 134217728, Yc()), Uf(e, 134217728);
      }
    }),
    (mr = function (e) {
      if (13 === e.tag) {
        var t = Qc(e),
          n = Al(e, t);
        null !== n && Kc(n, e, t, Yc()), Uf(e, t);
      }
    }),
    (_r = function () {
      return hr;
    }),
    (br = function (e, t) {
      var n = hr;
      try {
        return (hr = e), t();
      } finally {
        hr = n;
      }
    }),
    (yn = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Ht(e, n), (t = n.name), "radio" === n.type && null != t)) {
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
                var a = gi(r);
                if (!a) throw Error(Ze(90));
                Ut(r), Ht(r, a);
              }
            }
          }
          break;
        case "textarea":
          Zt(e, n);
          break;
        case "select":
          null != (t = n.value) && Kt(e, !!n.multiple, t, !1);
      }
    }),
    (kn = rf),
    (xn = af);
  var Qf = { usingClientEntryPoint: !1, Events: [hi, vi, gi, wn, Sn, rf] },
    Kf = {
      findFiberByHostInstance: pi,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Jf = {
      bundleType: Kf.bundleType,
      version: Kf.version,
      rendererPackageName: Kf.rendererPackageName,
      rendererConfig: Kf.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ht.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = Gn(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance:
        Kf.findFiberByHostInstance ||
        function () {
          return null;
        },
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var Xf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xf.isDisabled && Xf.supportsFiber)
      try {
        (Zn = Xf.inject(Jf)), (er = Xf);
      } catch (i_) {}
  }
  (qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qf),
    (qe.createPortal = function (e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Vf(t)) throw Error(Ze(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: gt,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, n);
    }),
    (qe.createRoot = function (e, t) {
      if (!Vf(e)) throw Error(Ze(299));
      var n = !1,
        r = "",
        a = $f;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (n = !0),
          void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
        (t = Ff(e, 1, !1, null, 0, n, 0, r, a)),
        (e[si] = t.current),
        Do(8 === e.nodeType ? e.parentNode : e),
        new Bf(t)
      );
    }),
    (qe.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(Ze(188));
        throw ((e = Object.keys(e).join(",")), Error(Ze(268, e)));
      }
      return null === (e = Gn(t)) ? null : e.stateNode;
    }),
    (qe.flushSync = function (e) {
      return af(e);
    }),
    (qe.hydrate = function (e, t, n) {
      if (!Hf(t)) throw Error(Ze(200));
      return Yf(null, e, t, !0, n);
    }),
    (qe.hydrateRoot = function (e, t, n) {
      if (!Vf(e)) throw Error(Ze(405));
      var r = (null != n && n.hydratedSources) || null,
        a = !1,
        o = "",
        i = $f;
      if (
        (null != n &&
          (!0 === n.unstable_strictMode && (a = !0),
          void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
          void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
        (t = Df(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
        (e[si] = t.current),
        Do(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (a = (a = (n = r[e])._getVersion)(n._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [n, a])
              : t.mutableSourceEagerHydrationData.push(n, a);
      return new Wf(t);
    }),
    (qe.render = function (e, t, n) {
      if (!Hf(t)) throw Error(Ze(200));
      return Yf(null, e, t, !1, n);
    }),
    (qe.unmountComponentAtNode = function (e) {
      if (!Hf(e)) throw Error(Ze(40));
      return (
        !!e._reactRootContainer &&
        (af(function () {
          Yf(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[si] = null);
          });
        }),
        !0)
      );
    }),
    (qe.unstable_batchedUpdates = rf),
    (qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Hf(n)) throw Error(Ze(200));
      if (null == e || void 0 === e._reactInternals) throw Error(Ze(38));
      return Yf(e, t, n, !1, r);
    }),
    (qe.version = "18.3.1-next-f1338f8080-20240426"),
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
    (He.exports = qe);
  var Zf = He.exports;
  function ed(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  (Ve.createRoot = Zf.createRoot), (Ve.hydrateRoot = Zf.hydrateRoot);
  const { toString: td } = Object.prototype,
    { getPrototypeOf: nd } = Object,
    rd =
      ((ad = Object.create(null)),
      (e) => {
        const t = td.call(e);
        return ad[t] || (ad[t] = t.slice(8, -1).toLowerCase());
      });
  var ad;
  const od = (e) => ((e = e.toLowerCase()), (t) => rd(t) === e),
    id = (e) => (t) => typeof t === e,
    { isArray: ld } = Array,
    ud = id("undefined"),
    sd = od("ArrayBuffer"),
    cd = id("string"),
    fd = id("function"),
    dd = id("number"),
    pd = (e) => null !== e && "object" == typeof e,
    hd = (e) => {
      if ("object" !== rd(e)) return !1;
      const t = nd(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    vd = od("Date"),
    gd = od("File"),
    yd = od("Blob"),
    md = od("FileList"),
    _d = od("URLSearchParams"),
    [bd, wd, Sd, kd] = ["ReadableStream", "Request", "Response", "Headers"].map(
      od
    );
  function xd(e, t, { allOwnKeys: n = !1 } = {}) {
    if (null == e) return;
    let r, a;
    if (("object" != typeof e && (e = [e]), ld(e)))
      for (r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
    else {
      const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
        o = a.length;
      let i;
      for (r = 0; r < o; r++) (i = a[r]), t.call(null, e[i], i, e);
    }
  }
  function Ed(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r,
      a = n.length;
    for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
    return null;
  }
  const Cd =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    Od = (e) => !ud(e) && e !== Cd,
    Nd = (
      (e) => (t) =>
        e && t instanceof e
    )("undefined" != typeof Uint8Array && nd(Uint8Array)),
    Ad = od("HTMLFormElement"),
    Td = (
      ({ hasOwnProperty: e }) =>
      (t, n) =>
        e.call(t, n)
    )(Object.prototype),
    Rd = od("RegExp"),
    jd = (e, t) => {
      const n = Object.getOwnPropertyDescriptors(e),
        r = {};
      xd(n, (n, a) => {
        let o;
        !1 !== (o = t(n, a, e)) && (r[a] = o || n);
      }),
        Object.defineProperties(e, r);
    },
    Md = "abcdefghijklmnopqrstuvwxyz",
    Pd = "0123456789",
    Fd = { DIGIT: Pd, ALPHA: Md, ALPHA_DIGIT: Md + Md.toUpperCase() + Pd },
    zd = od("AsyncFunction"),
    Dd = {
      isArray: ld,
      isArrayBuffer: sd,
      isBuffer: function (e) {
        return (
          null !== e &&
          !ud(e) &&
          null !== e.constructor &&
          !ud(e.constructor) &&
          fd(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        let t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (fd(e.append) &&
              ("formdata" === (t = rd(e)) ||
                ("object" === t &&
                  fd(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (
          (t =
            "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && sd(e.buffer)),
          t
        );
      },
      isString: cd,
      isNumber: dd,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: pd,
      isPlainObject: hd,
      isReadableStream: bd,
      isRequest: wd,
      isResponse: Sd,
      isHeaders: kd,
      isUndefined: ud,
      isDate: vd,
      isFile: gd,
      isBlob: yd,
      isRegExp: Rd,
      isFunction: fd,
      isStream: (e) => pd(e) && fd(e.pipe),
      isURLSearchParams: _d,
      isTypedArray: Nd,
      isFileList: md,
      forEach: xd,
      merge: function e() {
        const { caseless: t } = (Od(this) && this) || {},
          n = {},
          r = (r, a) => {
            const o = (t && Ed(n, a)) || a;
            hd(n[o]) && hd(r)
              ? (n[o] = e(n[o], r))
              : hd(r)
              ? (n[o] = e({}, r))
              : ld(r)
              ? (n[o] = r.slice())
              : (n[o] = r);
          };
        for (let a = 0, o = arguments.length; a < o; a++)
          arguments[a] && xd(arguments[a], r);
        return n;
      },
      extend: (e, t, n, { allOwnKeys: r } = {}) => (
        xd(
          t,
          (t, r) => {
            n && fd(t) ? (e[r] = ed(t, n)) : (e[r] = t);
          },
          { allOwnKeys: r }
        ),
        e
      ),
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
      inherits: (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          n && Object.assign(e.prototype, n);
      },
      toFlatObject: (e, t, n, r) => {
        let a, o, i;
        const l = {};
        if (((t = t || {}), null == e)) return t;
        do {
          for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
            (i = a[o]),
              (r && !r(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
          e = !1 !== n && nd(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      },
      kindOf: rd,
      kindOfTest: od,
      endsWith: (e, t, n) => {
        (e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length);
        const r = e.indexOf(t, n);
        return -1 !== r && r === n;
      },
      toArray: (e) => {
        if (!e) return null;
        if (ld(e)) return e;
        let t = e.length;
        if (!dd(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
      },
      forEachEntry: (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (; (r = n.next()) && !r.done; ) {
          const n = r.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        let n;
        const r = [];
        for (; null !== (n = e.exec(t)); ) r.push(n);
        return r;
      },
      isHTMLForm: Ad,
      hasOwnProperty: Td,
      hasOwnProp: Td,
      reduceDescriptors: jd,
      freezeMethods: (e) => {
        jd(e, (t, n) => {
          if (fd(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
            return !1;
          const r = e[n];
          fd(r) &&
            ((t.enumerable = !1),
            "writable" in t
              ? (t.writable = !1)
              : t.set ||
                (t.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return ld(e) ? r(e) : r(String(e).split(t)), n;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: Ed,
      global: Cd,
      isContextDefined: Od,
      ALPHABET: Fd,
      generateString: (e = 16, t = Fd.ALPHA_DIGIT) => {
        let n = "";
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          fd(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          n = (e, r) => {
            if (pd(e)) {
              if (t.indexOf(e) >= 0) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const a = ld(e) ? [] : {};
                return (
                  xd(e, (e, t) => {
                    const o = n(e, r + 1);
                    !ud(o) && (a[t] = o);
                  }),
                  (t[r] = void 0),
                  a
                );
              }
            }
            return e;
          };
        return n(e, 0);
      },
      isAsyncFn: zd,
      isThenable: (e) => e && (pd(e) || fd(e)) && fd(e.then) && fd(e.catch),
    };
  function Ld(e, t, n, r, a) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      a && (this.response = a);
  }
  Dd.inherits(Ld, Error, {
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
        config: Dd.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const Id = Ld.prototype,
    Gd = {};
  function Ud(e) {
    return Dd.isPlainObject(e) || Dd.isArray(e);
  }
  function $d(e) {
    return Dd.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function Bd(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = $d(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
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
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach((e) => {
    Gd[e] = { value: e };
  }),
    Object.defineProperties(Ld, Gd),
    Object.defineProperty(Id, "isAxiosError", { value: !0 }),
    (Ld.from = (e, t, n, r, a, o) => {
      const i = Object.create(Id);
      return (
        Dd.toFlatObject(
          e,
          i,
          function (e) {
            return e !== Error.prototype;
          },
          (e) => "isAxiosError" !== e
        ),
        Ld.call(i, e.message, t, n, r, a),
        (i.cause = e),
        (i.name = e.name),
        o && Object.assign(i, o),
        i
      );
    });
  const Wd = Dd.toFlatObject(Dd, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function Vd(e, t, n) {
    if (!Dd.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData();
    const r = (n = Dd.toFlatObject(
        n,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !Dd.isUndefined(t[e]);
        }
      )).metaTokens,
      a = n.visitor || s,
      o = n.dots,
      i = n.indexes,
      l =
        (n.Blob || ("undefined" != typeof Blob && Blob)) &&
        Dd.isSpecCompliantForm(t);
    if (!Dd.isFunction(a)) throw new TypeError("visitor must be a function");
    function u(e) {
      if (null === e) return "";
      if (Dd.isDate(e)) return e.toISOString();
      if (!l && Dd.isBlob(e))
        throw new Ld("Blob is not supported. Use a Buffer instead.");
      return Dd.isArrayBuffer(e) || Dd.isTypedArray(e)
        ? l && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function s(e, n, a) {
      let l = e;
      if (e && !a && "object" == typeof e)
        if (Dd.endsWith(n, "{}"))
          (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (Dd.isArray(e) && ((s = e), Dd.isArray(s) && !s.some(Ud))) ||
          ((Dd.isFileList(e) || Dd.endsWith(n, "[]")) && (l = Dd.toArray(e)))
        )
          return (
            (n = $d(n)),
            l.forEach(function (e, r) {
              !Dd.isUndefined(e) &&
                null !== e &&
                t.append(
                  !0 === i ? Bd([n], r, o) : null === i ? n : n + "[]",
                  u(e)
                );
            }),
            !1
          );
      var s;
      return !!Ud(e) || (t.append(Bd(a, n, o), u(e)), !1);
    }
    const c = [],
      f = Object.assign(Wd, {
        defaultVisitor: s,
        convertValue: u,
        isVisitable: Ud,
      });
    if (!Dd.isObject(e)) throw new TypeError("data must be an object");
    return (
      (function e(n, r) {
        if (!Dd.isUndefined(n)) {
          if (-1 !== c.indexOf(n))
            throw Error("Circular reference detected in " + r.join("."));
          c.push(n),
            Dd.forEach(n, function (n, o) {
              !0 ===
                (!(Dd.isUndefined(n) || null === n) &&
                  a.call(t, n, Dd.isString(o) ? o.trim() : o, r, f)) &&
                e(n, r ? r.concat(o) : [o]);
            }),
            c.pop();
        }
      })(e),
      t
    );
  }
  function Hd(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function qd(e, t) {
    (this._pairs = []), e && Vd(e, this, t);
  }
  const Yd = qd.prototype;
  function Qd(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Kd(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || Qd,
      a = n && n.serialize;
    let o;
    if (
      ((o = a
        ? a(t, n)
        : Dd.isURLSearchParams(t)
        ? t.toString()
        : new qd(t, n).toString(r)),
      o)
    ) {
      const t = e.indexOf("#");
      -1 !== t && (e = e.slice(0, t)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
    }
    return e;
  }
  (Yd.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (Yd.toString = function (e) {
      const t = e
        ? function (t) {
            return e.call(this, t, Hd);
          }
        : Hd;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  class Jd {
    constructor() {
      this.handlers = [];
    }
    use(e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      );
    }
    eject(e) {
      this.handlers[e] && (this.handlers[e] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(e) {
      Dd.forEach(this.handlers, function (t) {
        null !== t && e(t);
      });
    }
  }
  const Xd = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Zd = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : qd,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    ep = "undefined" != typeof window && "undefined" != typeof document,
    tp =
      ((np = "undefined" != typeof navigator && navigator.product),
      ep && ["ReactNative", "NativeScript", "NS"].indexOf(np) < 0);
  var np;
  const rp =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    ap = (ep && window.location.href) || "http://localhost",
    op = __spreadValues(
      __spreadValues(
        {},
        Object.freeze(
          Object.defineProperty(
            {
              __proto__: null,
              hasBrowserEnv: ep,
              hasStandardBrowserEnv: tp,
              hasStandardBrowserWebWorkerEnv: rp,
              origin: ap,
            },
            Symbol.toStringTag,
            { value: "Module" }
          )
        )
      ),
      Zd
    );
  function ip(e) {
    function t(e, n, r, a) {
      let o = e[a++];
      if ("__proto__" === o) return !0;
      const i = Number.isFinite(+o),
        l = a >= e.length;
      return (
        (o = !o && Dd.isArray(r) ? r.length : o),
        l
          ? (Dd.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i)
          : ((r[o] && Dd.isObject(r[o])) || (r[o] = []),
            t(e, n, r[o], a) &&
              Dd.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i)
      );
    }
    if (Dd.isFormData(e) && Dd.isFunction(e.entries)) {
      const n = {};
      return (
        Dd.forEachEntry(e, (e, r) => {
          var a;
          t(
            ((a = e),
            Dd.matchAll(/\w+|\[(\w*)]/g, a).map((e) =>
              "[]" === e[0] ? "" : e[1] || e[0]
            )),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  }
  const lp = {
    transitional: Xd,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
      function (e, t) {
        const n = t.getContentType() || "",
          r = n.indexOf("application/json") > -1,
          a = Dd.isObject(e);
        if ((a && Dd.isHTMLForm(e) && (e = new FormData(e)), Dd.isFormData(e)))
          return r ? JSON.stringify(ip(e)) : e;
        if (
          Dd.isArrayBuffer(e) ||
          Dd.isBuffer(e) ||
          Dd.isStream(e) ||
          Dd.isFile(e) ||
          Dd.isBlob(e) ||
          Dd.isReadableStream(e)
        )
          return e;
        if (Dd.isArrayBufferView(e)) return e.buffer;
        if (Dd.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        let o;
        if (a) {
          if (n.indexOf("application/x-www-form-urlencoded") > -1)
            return ((i = e),
            (l = this.formSerializer),
            Vd(
              i,
              new op.classes.URLSearchParams(),
              Object.assign(
                {
                  visitor: function (e, t, n, r) {
                    return op.isNode && Dd.isBuffer(e)
                      ? (this.append(t, e.toString("base64")), !1)
                      : r.defaultVisitor.apply(this, arguments);
                  },
                },
                l
              )
            )).toString();
          if ((o = Dd.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
            const t = this.env && this.env.FormData;
            return Vd(
              o ? { "files[]": e } : e,
              t && new t(),
              this.formSerializer
            );
          }
        }
        var i, l;
        return a || r
          ? (t.setContentType("application/json", !1),
            (function (e) {
              if (Dd.isString(e))
                try {
                  return (0, JSON.parse)(e), Dd.trim(e);
                } catch (t) {
                  if ("SyntaxError" !== t.name) throw t;
                }
              return (0, JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        const t = this.transitional || lp.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (Dd.isResponse(e) || Dd.isReadableStream(e)) return e;
        if (e && Dd.isString(e) && ((n && !this.responseType) || r)) {
          const n = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (a) {
            if (n) {
              if ("SyntaxError" === a.name)
                throw Ld.from(
                  a,
                  Ld.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw a;
            }
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
    env: { FormData: op.classes.FormData, Blob: op.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0,
      },
    },
  };
  Dd.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    lp.headers[e] = {};
  });
  const up = Dd.toObjectSet([
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
    ]),
    sp = Symbol("internals");
  function cp(e) {
    return e && String(e).trim().toLowerCase();
  }
  function fp(e) {
    return !1 === e || null == e ? e : Dd.isArray(e) ? e.map(fp) : String(e);
  }
  function dp(e, t, n, r, a) {
    return Dd.isFunction(r)
      ? r.call(this, t, n)
      : (a && (t = n),
        Dd.isString(t)
          ? Dd.isString(r)
            ? -1 !== t.indexOf(r)
            : Dd.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  let pp = class {
    constructor(e) {
      e && this.set(e);
    }
    set(e, t, n) {
      const r = this;
      function a(e, t, n) {
        const a = cp(t);
        if (!a) throw new Error("header name must be a non-empty string");
        const o = Dd.findKey(r, a);
        (!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) &&
          (r[o || t] = fp(e));
      }
      const o = (e, t) => Dd.forEach(e, (e, n) => a(e, n, t));
      if (Dd.isPlainObject(e) || e instanceof this.constructor) o(e, t);
      else if (
        Dd.isString(e) &&
        (e = e.trim()) &&
        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
      )
        o(
          ((e) => {
            const t = {};
            let n, r, a;
            return (
              e &&
                e.split("\n").forEach(function (e) {
                  (a = e.indexOf(":")),
                    (n = e.substring(0, a).trim().toLowerCase()),
                    (r = e.substring(a + 1).trim()),
                    !n ||
                      (t[n] && up[n]) ||
                      ("set-cookie" === n
                        ? t[n]
                          ? t[n].push(r)
                          : (t[n] = [r])
                        : (t[n] = t[n] ? t[n] + ", " + r : r));
                }),
              t
            );
          })(e),
          t
        );
      else if (Dd.isHeaders(e)) for (const [i, l] of e.entries()) a(l, i, n);
      else null != e && a(t, e, n);
      return this;
    }
    get(e, t) {
      if ((e = cp(e))) {
        const n = Dd.findKey(this, e);
        if (n) {
          const e = this[n];
          if (!t) return e;
          if (!0 === t)
            return (function (e) {
              const t = Object.create(null),
                n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
              let r;
              for (; (r = n.exec(e)); ) t[r[1]] = r[2];
              return t;
            })(e);
          if (Dd.isFunction(t)) return t.call(this, e, n);
          if (Dd.isRegExp(t)) return t.exec(e);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(e, t) {
      if ((e = cp(e))) {
        const n = Dd.findKey(this, e);
        return !(!n || void 0 === this[n] || (t && !dp(0, this[n], n, t)));
      }
      return !1;
    }
    delete(e, t) {
      const n = this;
      let r = !1;
      function a(e) {
        if ((e = cp(e))) {
          const a = Dd.findKey(n, e);
          !a || (t && !dp(0, n[a], a, t)) || (delete n[a], (r = !0));
        }
      }
      return Dd.isArray(e) ? e.forEach(a) : a(e), r;
    }
    clear(e) {
      const t = Object.keys(this);
      let n = t.length,
        r = !1;
      for (; n--; ) {
        const a = t[n];
        (e && !dp(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
      }
      return r;
    }
    normalize(e) {
      const t = this,
        n = {};
      return (
        Dd.forEach(this, (r, a) => {
          const o = Dd.findKey(n, a);
          if (o) return (t[o] = fp(r)), void delete t[a];
          const i = e
            ? a
                .trim()
                .toLowerCase()
                .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
            : String(a).trim();
          i !== a && delete t[a], (t[i] = fp(r)), (n[i] = !0);
        }),
        this
      );
    }
    concat(...e) {
      return this.constructor.concat(this, ...e);
    }
    toJSON(e) {
      const t = Object.create(null);
      return (
        Dd.forEach(this, (n, r) => {
          null != n &&
            !1 !== n &&
            (t[r] = e && Dd.isArray(n) ? n.join(", ") : n);
        }),
        t
      );
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON())
        .map(([e, t]) => e + ": " + t)
        .join("\n");
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(e) {
      return e instanceof this ? e : new this(e);
    }
    static concat(e, ...t) {
      const n = new this(e);
      return t.forEach((e) => n.set(e)), n;
    }
    static accessor(e) {
      const t = (this[sp] = this[sp] = { accessors: {} }).accessors,
        n = this.prototype;
      function r(e) {
        const r = cp(e);
        t[r] ||
          ((function (e, t) {
            const n = Dd.toCamelCase(" " + t);
            ["get", "set", "has"].forEach((r) => {
              Object.defineProperty(e, r + n, {
                value: function (e, n, a) {
                  return this[r].call(this, t, e, n, a);
                },
                configurable: !0,
              });
            });
          })(n, e),
          (t[r] = !0));
      }
      return Dd.isArray(e) ? e.forEach(r) : r(e), this;
    }
  };
  function hp(e, t) {
    const n = this || lp,
      r = t || n,
      a = pp.from(r.headers);
    let o = r.data;
    return (
      Dd.forEach(e, function (e) {
        o = e.call(n, o, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      o
    );
  }
  function vp(e) {
    return !(!e || !e.__CANCEL__);
  }
  function gp(e, t, n) {
    Ld.call(this, null == e ? "canceled" : e, Ld.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  function yp(e, t, n) {
    const r = n.config.validateStatus;
    n.status && r && !r(n.status)
      ? t(
          new Ld(
            "Request failed with status code " + n.status,
            [Ld.ERR_BAD_REQUEST, Ld.ERR_BAD_RESPONSE][
              Math.floor(n.status / 100) - 4
            ],
            n.config,
            n.request,
            n
          )
        )
      : e(n);
  }
  pp.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    Dd.reduceDescriptors(pp.prototype, ({ value: e }, t) => {
      let n = t[0].toUpperCase() + t.slice(1);
      return {
        get: () => e,
        set(e) {
          this[n] = e;
        },
      };
    }),
    Dd.freezeMethods(pp),
    Dd.inherits(gp, Ld, { __CANCEL__: !0 });
  const mp = (e, t, n = 3) => {
      let r = 0;
      const a = (function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            const u = Date.now(),
              s = r[i];
            a || (a = u), (n[o] = l), (r[o] = u);
            let c = i,
              f = 0;
            for (; c !== o; ) (f += n[c++]), (c %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t))
              return;
            const d = s && u - s;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      })(50, 250);
      return (function (e, t) {
        let n = 0;
        const r = 1e3 / t;
        let a = null;
        return function () {
          const t = !0 === this,
            o = Date.now();
          if (t || o - n > r)
            return (
              a && (clearTimeout(a), (a = null)),
              (n = o),
              e.apply(null, arguments)
            );
          a ||
            (a = setTimeout(
              () => ((a = null), (n = Date.now()), e.apply(null, arguments)),
              r - (o - n)
            ));
        };
      })((n) => {
        const o = n.loaded,
          i = n.lengthComputable ? n.total : void 0,
          l = o - r,
          u = a(l);
        r = o;
        const s = {
          loaded: o,
          total: i,
          progress: i ? o / i : void 0,
          bytes: l,
          rate: u || void 0,
          estimated: u && i && o <= i ? (i - o) / u : void 0,
          event: n,
          lengthComputable: null != i,
        };
        (s[t ? "download" : "upload"] = !0), e(s);
      }, n);
    },
    _p = op.hasStandardBrowserEnv
      ? (function () {
          const e = /(msie|trident)/i.test(navigator.userAgent),
            t = document.createElement("a");
          let n;
          function r(n) {
            let r = n;
            return (
              e && (t.setAttribute("href", r), (r = t.href)),
              t.setAttribute("href", r),
              {
                href: t.href,
                protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                host: t.host,
                search: t.search ? t.search.replace(/^\?/, "") : "",
                hash: t.hash ? t.hash.replace(/^#/, "") : "",
                hostname: t.hostname,
                port: t.port,
                pathname:
                  "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname,
              }
            );
          }
          return (
            (n = r(window.location.href)),
            function (e) {
              const t = Dd.isString(e) ? r(e) : e;
              return t.protocol === n.protocol && t.host === n.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    bp = op.hasStandardBrowserEnv
      ? {
          write(e, t, n, r, a, o) {
            const i = [e + "=" + encodeURIComponent(t)];
            Dd.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
              Dd.isString(r) && i.push("path=" + r),
              Dd.isString(a) && i.push("domain=" + a),
              !0 === o && i.push("secure"),
              (document.cookie = i.join("; "));
          },
          read(e) {
            const t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : { write() {}, read: () => null, remove() {} };
  function wp(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? ((n = e),
        (r = t) ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n)
      : t;
    var n, r;
  }
  const Sp = (e) => (e instanceof pp ? __spreadValues({}, e) : e);
  function kp(e, t) {
    t = t || {};
    const n = {};
    function r(e, t, n) {
      return Dd.isPlainObject(e) && Dd.isPlainObject(t)
        ? Dd.merge.call({ caseless: n }, e, t)
        : Dd.isPlainObject(t)
        ? Dd.merge({}, t)
        : Dd.isArray(t)
        ? t.slice()
        : t;
    }
    function a(e, t, n) {
      return Dd.isUndefined(t)
        ? Dd.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function o(e, t) {
      if (!Dd.isUndefined(t)) return r(void 0, t);
    }
    function i(e, t) {
      return Dd.isUndefined(t)
        ? Dd.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function l(n, a, o) {
      return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
    }
    const u = {
      url: o,
      method: o,
      data: o,
      baseURL: i,
      transformRequest: i,
      transformResponse: i,
      paramsSerializer: i,
      timeout: i,
      timeoutMessage: i,
      withCredentials: i,
      withXSRFToken: i,
      adapter: i,
      responseType: i,
      xsrfCookieName: i,
      xsrfHeaderName: i,
      onUploadProgress: i,
      onDownloadProgress: i,
      decompress: i,
      maxContentLength: i,
      maxBodyLength: i,
      beforeRedirect: i,
      transport: i,
      httpAgent: i,
      httpsAgent: i,
      cancelToken: i,
      socketPath: i,
      responseEncoding: i,
      validateStatus: l,
      headers: (e, t) => a(Sp(e), Sp(t), !0),
    };
    return (
      Dd.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
        const o = u[r] || a,
          i = o(e[r], t[r], r);
        (Dd.isUndefined(i) && o !== l) || (n[r] = i);
      }),
      n
    );
  }
  const xp = (e) => {
      const t = kp({}, e);
      let n,
        {
          data: r,
          withXSRFToken: a,
          xsrfHeaderName: o,
          xsrfCookieName: i,
          headers: l,
          auth: u,
        } = t;
      if (
        ((t.headers = l = pp.from(l)),
        (t.url = Kd(wp(t.baseURL, t.url), e.params, e.paramsSerializer)),
        u &&
          l.set(
            "Authorization",
            "Basic " +
              btoa(
                (u.username || "") +
                  ":" +
                  (u.password ? unescape(encodeURIComponent(u.password)) : "")
              )
          ),
        Dd.isFormData(r))
      )
        if (op.hasStandardBrowserEnv || op.hasStandardBrowserWebWorkerEnv)
          l.setContentType(void 0);
        else if (!1 !== (n = l.getContentType())) {
          const [e, ...t] = n
            ? n
                .split(";")
                .map((e) => e.trim())
                .filter(Boolean)
            : [];
          l.setContentType([e || "multipart/form-data", ...t].join("; "));
        }
      if (
        op.hasStandardBrowserEnv &&
        (a && Dd.isFunction(a) && (a = a(t)), a || (!1 !== a && _p(t.url)))
      ) {
        const e = o && i && bp.read(i);
        e && l.set(o, e);
      }
      return t;
    },
    Ep =
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          const r = xp(e);
          let a = r.data;
          const o = pp.from(r.headers).normalize();
          let i,
            { responseType: l } = r;
          function u() {
            r.cancelToken && r.cancelToken.unsubscribe(i),
              r.signal && r.signal.removeEventListener("abort", i);
          }
          let s = new XMLHttpRequest();
          function c() {
            if (!s) return;
            const r = pp.from(
              "getAllResponseHeaders" in s && s.getAllResponseHeaders()
            );
            yp(
              function (e) {
                t(e), u();
              },
              function (e) {
                n(e), u();
              },
              {
                data:
                  l && "text" !== l && "json" !== l
                    ? s.response
                    : s.responseText,
                status: s.status,
                statusText: s.statusText,
                headers: r,
                config: e,
                request: s,
              }
            ),
              (s = null);
          }
          s.open(r.method.toUpperCase(), r.url, !0),
            (s.timeout = r.timeout),
            "onloadend" in s
              ? (s.onloadend = c)
              : (s.onreadystatechange = function () {
                  s &&
                    4 === s.readyState &&
                    (0 !== s.status ||
                      (s.responseURL &&
                        0 === s.responseURL.indexOf("file:"))) &&
                    setTimeout(c);
                }),
            (s.onabort = function () {
              s &&
                (n(new Ld("Request aborted", Ld.ECONNABORTED, r, s)),
                (s = null));
            }),
            (s.onerror = function () {
              n(new Ld("Network Error", Ld.ERR_NETWORK, r, s)), (s = null);
            }),
            (s.ontimeout = function () {
              let e = r.timeout
                ? "timeout of " + r.timeout + "ms exceeded"
                : "timeout exceeded";
              const t = r.transitional || Xd;
              r.timeoutErrorMessage && (e = r.timeoutErrorMessage),
                n(
                  new Ld(
                    e,
                    t.clarifyTimeoutError ? Ld.ETIMEDOUT : Ld.ECONNABORTED,
                    r,
                    s
                  )
                ),
                (s = null);
            }),
            void 0 === a && o.setContentType(null),
            "setRequestHeader" in s &&
              Dd.forEach(o.toJSON(), function (e, t) {
                s.setRequestHeader(t, e);
              }),
            Dd.isUndefined(r.withCredentials) ||
              (s.withCredentials = !!r.withCredentials),
            l && "json" !== l && (s.responseType = r.responseType),
            "function" == typeof r.onDownloadProgress &&
              s.addEventListener("progress", mp(r.onDownloadProgress, !0)),
            "function" == typeof r.onUploadProgress &&
              s.upload &&
              s.upload.addEventListener("progress", mp(r.onUploadProgress)),
            (r.cancelToken || r.signal) &&
              ((i = (t) => {
                s &&
                  (n(!t || t.type ? new gp(null, e, s) : t),
                  s.abort(),
                  (s = null));
              }),
              r.cancelToken && r.cancelToken.subscribe(i),
              r.signal &&
                (r.signal.aborted
                  ? i()
                  : r.signal.addEventListener("abort", i)));
          const f = (function (e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return (t && t[1]) || "";
          })(r.url);
          f && -1 === op.protocols.indexOf(f)
            ? n(
                new Ld("Unsupported protocol " + f + ":", Ld.ERR_BAD_REQUEST, e)
              )
            : s.send(a || null);
        });
      },
    Cp = (e, t) => {
      let n,
        r = new AbortController();
      const a = function (e) {
        if (!n) {
          (n = !0), i();
          const t = e instanceof Error ? e : this.reason;
          r.abort(
            t instanceof Ld ? t : new gp(t instanceof Error ? t.message : t)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          a(new Ld(`timeout ${t} of ms exceeded`, Ld.ETIMEDOUT));
        }, t);
      const i = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((e) => {
            e &&
              (e.removeEventListener
                ? e.removeEventListener("abort", a)
                : e.unsubscribe(a));
          }),
          (e = null));
      };
      e.forEach(
        (e) => e && e.addEventListener && e.addEventListener("abort", a)
      );
      const { signal: l } = r;
      return (
        (l.unsubscribe = i),
        [
          l,
          () => {
            o && clearTimeout(o), (o = null);
          },
        ]
      );
    },
    Op = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) return void (yield e);
      let r,
        a = 0;
      for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
    },
    Np = (e, t, n, r, a) => {
      const o = (function (e, t, n) {
        return __asyncGenerator(this, null, function* () {
          try {
            for (
              var r, a, o, i = __forAwait(e);
              (r = !(a = yield new __await(i.next())).done);
              r = !1
            ) {
              const e = a.value;
              yield* __yieldStar(
                Op(
                  ArrayBuffer.isView(e) ? e : yield new __await(n(String(e))),
                  t
                )
              );
            }
          } catch (a) {
            o = [a];
          } finally {
            try {
              r && (a = i.return) && (yield new __await(a.call(i)));
            } finally {
              if (o) throw o[0];
            }
          }
        });
      })(e, t, a);
      let i = 0;
      return new ReadableStream(
        {
          type: "bytes",
          async pull(e) {
            const { done: t, value: a } = await o.next();
            if (t) return e.close(), void r();
            let l = a.byteLength;
            n && n((i += l)), e.enqueue(new Uint8Array(a));
          },
          cancel: (e) => (r(e), o.return()),
        },
        { highWaterMark: 2 }
      );
    },
    Ap = (e, t) => {
      const n = null != e;
      return (r) =>
        setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
    },
    Tp =
      "function" == typeof fetch &&
      "function" == typeof Request &&
      "function" == typeof Response,
    Rp = Tp && "function" == typeof ReadableStream,
    jp =
      Tp &&
      ("function" == typeof TextEncoder
        ? ((Mp = new TextEncoder()), (e) => Mp.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
  var Mp;
  const Pp =
      Rp &&
      (() => {
        let e = !1;
        const t = new Request(op.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      })(),
    Fp =
      Rp &&
      !!(() => {
        try {
          return Dd.isReadableStream(new Response("").body);
        } catch (cg) {}
      })(),
    zp = { stream: Fp && ((e) => e.body) };
  var Dp;
  Tp &&
    ((Dp = new Response()),
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
      !zp[e] &&
        (zp[e] = Dd.isFunction(Dp[e])
          ? (t) => t[e]()
          : (t, n) => {
              throw new Ld(
                `Response type '${e}' is not supported`,
                Ld.ERR_NOT_SUPPORT,
                n
              );
            });
    }));
  const Lp = {
    http: null,
    xhr: Ep,
    fetch:
      Tp &&
      (async (e) => {
        let {
          url: t,
          method: n,
          data: r,
          signal: a,
          cancelToken: o,
          timeout: i,
          onDownloadProgress: l,
          onUploadProgress: u,
          responseType: s,
          headers: c,
          withCredentials: f = "same-origin",
          fetchOptions: d,
        } = xp(e);
        s = s ? (s + "").toLowerCase() : "text";
        let p,
          h,
          [v, g] = a || o || i ? Cp([a, o], i) : [];
        const y = () => {
          !p &&
            setTimeout(() => {
              v && v.unsubscribe();
            }),
            (p = !0);
        };
        let m;
        try {
          if (
            u &&
            Pp &&
            "get" !== n &&
            "head" !== n &&
            0 !==
              (m = await (async (e, t) => {
                const n = Dd.toFiniteNumber(e.getContentLength());
                return null == n
                  ? (async (e) =>
                      null == e
                        ? 0
                        : Dd.isBlob(e)
                        ? e.size
                        : Dd.isSpecCompliantForm(e)
                        ? (await new Request(e).arrayBuffer()).byteLength
                        : Dd.isArrayBufferView(e)
                        ? e.byteLength
                        : (Dd.isURLSearchParams(e) && (e += ""),
                          Dd.isString(e) ? (await jp(e)).byteLength : void 0))(
                      t
                    )
                  : n;
              })(c, r))
          ) {
            let e,
              n = new Request(t, { method: "POST", body: r, duplex: "half" });
            Dd.isFormData(r) &&
              (e = n.headers.get("content-type")) &&
              c.setContentType(e),
              n.body && (r = Np(n.body, 65536, Ap(m, mp(u)), null, jp));
          }
          Dd.isString(f) || (f = f ? "cors" : "omit"),
            (h = new Request(
              t,
              __spreadProps(__spreadValues({}, d), {
                signal: v,
                method: n.toUpperCase(),
                headers: c.normalize().toJSON(),
                body: r,
                duplex: "half",
                withCredentials: f,
              })
            ));
          let a = await fetch(h);
          const o = Fp && ("stream" === s || "response" === s);
          if (Fp && (l || o)) {
            const e = {};
            ["status", "statusText", "headers"].forEach((t) => {
              e[t] = a[t];
            });
            const t = Dd.toFiniteNumber(a.headers.get("content-length"));
            a = new Response(
              Np(a.body, 65536, l && Ap(t, mp(l, !0)), o && y, jp),
              e
            );
          }
          s = s || "text";
          let i = await zp[Dd.findKey(zp, s) || "text"](a, e);
          return (
            !o && y(),
            g && g(),
            await new Promise((t, n) => {
              yp(t, n, {
                data: i,
                headers: pp.from(a.headers),
                status: a.status,
                statusText: a.statusText,
                config: e,
                request: h,
              });
            })
          );
        } catch (_) {
          if ((y(), _ && "TypeError" === _.name && /fetch/i.test(_.message)))
            throw Object.assign(new Ld("Network Error", Ld.ERR_NETWORK, e, h), {
              cause: _.cause || _,
            });
          throw Ld.from(_, _ && _.code, e, h);
        }
      }),
  };
  Dd.forEach(Lp, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (n) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  const Ip = (e) => `- ${e}`,
    Gp = (e) => Dd.isFunction(e) || null === e || !1 === e,
    Up = (e) => {
      e = Dd.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const a = {};
      for (let o = 0; o < t; o++) {
        let t;
        if (
          ((n = e[o]),
          (r = n),
          !Gp(n) && ((r = Lp[(t = String(n)).toLowerCase()]), void 0 === r))
        )
          throw new Ld(`Unknown adapter '${t}'`);
        if (r) break;
        a[t || "#" + o] = r;
      }
      if (!r) {
        const e = Object.entries(a).map(
          ([e, t]) =>
            `adapter ${e} ` +
            (!1 === t
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        throw new Ld(
          "There is no suitable adapter to dispatch the request " +
            (t
              ? e.length > 1
                ? "since :\n" + e.map(Ip).join("\n")
                : " " + Ip(e[0])
              : "as no adapter specified"),
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    };
  function $p(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new gp(null, e);
  }
  function Bp(e) {
    return (
      $p(e),
      (e.headers = pp.from(e.headers)),
      (e.data = hp.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Up(e.adapter || lp.adapter)(e).then(
        function (t) {
          return (
            $p(e),
            (t.data = hp.call(e, e.transformResponse, t)),
            (t.headers = pp.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            vp(t) ||
              ($p(e),
              t &&
                t.response &&
                ((t.response.data = hp.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = pp.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  const Wp = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
      Wp[e] = function (n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
      };
    }
  );
  const Vp = {};
  Wp.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.7.2] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return (n, a, o) => {
      if (!1 === e)
        throw new Ld(
          r(a, " has been removed" + (t ? " in " + t : "")),
          Ld.ERR_DEPRECATED
        );
      return (
        t &&
          !Vp[a] &&
          ((Vp[a] = !0),
          console.warn(
            r(
              a,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, a, o)
      );
    };
  };
  const Hp = {
      assertOptions: function (e, t, n) {
        if ("object" != typeof e)
          throw new Ld("options must be an object", Ld.ERR_BAD_OPTION_VALUE);
        const r = Object.keys(e);
        let a = r.length;
        for (; a-- > 0; ) {
          const o = r[a],
            i = t[o];
          if (i) {
            const t = e[o],
              n = void 0 === t || i(t, o, e);
            if (!0 !== n)
              throw new Ld(
                "option " + o + " must be " + n,
                Ld.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== n)
            throw new Ld("Unknown option " + o, Ld.ERR_BAD_OPTION);
        }
      },
      validators: Wp,
    },
    qp = Hp.validators;
  let Yp = class {
    constructor(e) {
      (this.defaults = e),
        (this.interceptors = { request: new Jd(), response: new Jd() });
    }
    async request(e, t) {
      try {
        return await this._request(e, t);
      } catch (n) {
        if (n instanceof Error) {
          let e;
          Error.captureStackTrace
            ? Error.captureStackTrace((e = {}))
            : (e = new Error());
          const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack
              ? t &&
                !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                (n.stack += "\n" + t)
              : (n.stack = t);
          } catch (r) {}
        }
        throw n;
      }
    }
    _request(e, t) {
      "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = kp(this.defaults, t));
      const { transitional: n, paramsSerializer: r, headers: a } = t;
      void 0 !== n &&
        Hp.assertOptions(
          n,
          {
            silentJSONParsing: qp.transitional(qp.boolean),
            forcedJSONParsing: qp.transitional(qp.boolean),
            clarifyTimeoutError: qp.transitional(qp.boolean),
          },
          !1
        ),
        null != r &&
          (Dd.isFunction(r)
            ? (t.paramsSerializer = { serialize: r })
            : Hp.assertOptions(
                r,
                { encode: qp.function, serialize: qp.function },
                !0
              )),
        (t.method = (t.method || this.defaults.method || "get").toLowerCase());
      let o = a && Dd.merge(a.common, a[t.method]);
      a &&
        Dd.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (e) => {
            delete a[e];
          }
        ),
        (t.headers = pp.concat(o, a));
      const i = [];
      let l = !0;
      this.interceptors.request.forEach(function (e) {
        ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((l = l && e.synchronous), i.unshift(e.fulfilled, e.rejected));
      });
      const u = [];
      let s;
      this.interceptors.response.forEach(function (e) {
        u.push(e.fulfilled, e.rejected);
      });
      let c,
        f = 0;
      if (!l) {
        const e = [Bp.bind(this), void 0];
        for (
          e.unshift.apply(e, i),
            e.push.apply(e, u),
            c = e.length,
            s = Promise.resolve(t);
          f < c;

        )
          s = s.then(e[f++], e[f++]);
        return s;
      }
      c = i.length;
      let d = t;
      for (f = 0; f < c; ) {
        const e = i[f++],
          t = i[f++];
        try {
          d = e(d);
        } catch (p) {
          t.call(this, p);
          break;
        }
      }
      try {
        s = Bp.call(this, d);
      } catch (h) {
        return Promise.reject(h);
      }
      for (f = 0, c = u.length; f < c; ) s = s.then(u[f++], u[f++]);
      return s;
    }
    getUri(e) {
      return Kd(
        wp((e = kp(this.defaults, e)).baseURL, e.url),
        e.params,
        e.paramsSerializer
      );
    }
  };
  Dd.forEach(["delete", "get", "head", "options"], function (e) {
    Yp.prototype[e] = function (t, n) {
      return this.request(
        kp(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    Dd.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, a) {
          return this.request(
            kp(a || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (Yp.prototype[e] = t()), (Yp.prototype[e + "Form"] = t(!0));
    });
  const Qp = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Qp).forEach(([e, t]) => {
    Qp[t] = e;
  });
  const Kp = (function e(t) {
    const n = new Yp(t),
      r = ed(Yp.prototype.request, n);
    return (
      Dd.extend(r, Yp.prototype, n, { allOwnKeys: !0 }),
      Dd.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(kp(t, n));
      }),
      r
    );
  })(lp);
  (Kp.Axios = Yp),
    (Kp.CanceledError = gp),
    (Kp.CancelToken = class e {
      constructor(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        const n = this;
        this.promise.then((e) => {
          if (!n._listeners) return;
          let t = n._listeners.length;
          for (; t-- > 0; ) n._listeners[t](e);
          n._listeners = null;
        }),
          (this.promise.then = (e) => {
            let t;
            const r = new Promise((e) => {
              n.subscribe(e), (t = e);
            }).then(e);
            return (
              (r.cancel = function () {
                n.unsubscribe(t);
              }),
              r
            );
          }),
          e(function (e, r, a) {
            n.reason || ((n.reason = new gp(e, r, a)), t(n.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }
      unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e);
        -1 !== t && this._listeners.splice(t, 1);
      }
      static source() {
        let t;
        return {
          token: new e(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }
    }),
    (Kp.isCancel = vp),
    (Kp.VERSION = "1.7.2"),
    (Kp.toFormData = Vd),
    (Kp.AxiosError = Ld),
    (Kp.Cancel = Kp.CanceledError),
    (Kp.all = function (e) {
      return Promise.all(e);
    }),
    (Kp.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Kp.isAxiosError = function (e) {
      return Dd.isObject(e) && !0 === e.isAxiosError;
    }),
    (Kp.mergeConfig = kp),
    (Kp.AxiosHeaders = pp),
    (Kp.formToJSON = (e) => ip(Dd.isHTMLForm(e) ? new FormData(e) : e)),
    (Kp.getAdapter = Up),
    (Kp.HttpStatusCode = Qp),
    (Kp.default = Kp);
  const {
    Axios: Jp,
    AxiosError: Xp,
    CanceledError: Zp,
    isCancel: eh,
    CancelToken: th,
    VERSION: nh,
    all: rh,
    Cancel: ah,
    isAxiosError: oh,
    spread: ih,
    toFormData: lh,
    AxiosHeaders: uh,
    HttpStatusCode: sh,
    formToJSON: ch,
    getAdapter: fh,
    mergeConfig: dh,
  } = Kp;
  var ph,
    hh,
    vh,
    gh,
    yh,
    mh = {};
  var _h,
    bh,
    wh = Object.prototype.toString,
    Sh = function (e) {
      var t = wh.call(e),
        n = "[object Arguments]" === t;
      return (
        n ||
          (n =
            "[object Array]" !== t &&
            null !== e &&
            "object" == typeof e &&
            "number" == typeof e.length &&
            e.length >= 0 &&
            "[object Function]" === wh.call(e.callee)),
        n
      );
    },
    kh = Array.prototype.slice,
    xh = Sh,
    Eh = Object.keys,
    Ch = Eh
      ? function (e) {
          return Eh(e);
        }
      : (function () {
          if (bh) return _h;
          var e;
          if (((bh = 1), !Object.keys)) {
            var t = Object.prototype.hasOwnProperty,
              n = Object.prototype.toString,
              r = Sh,
              a = Object.prototype.propertyIsEnumerable,
              o = !a.call({ toString: null }, "toString"),
              i = a.call(function () {}, "prototype"),
              l = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor",
              ],
              u = function (e) {
                var t = e.constructor;
                return t && t.prototype === e;
              },
              s = {
                $applicationCache: !0,
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $onmozfullscreenchange: !0,
                $onmozfullscreenerror: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0,
              },
              c = (function () {
                if ("undefined" == typeof window) return !1;
                for (var e in window)
                  try {
                    if (
                      !s["$" + e] &&
                      t.call(window, e) &&
                      null !== window[e] &&
                      "object" == typeof window[e]
                    )
                      try {
                        u(window[e]);
                      } catch (n) {
                        return !0;
                      }
                  } catch (n) {
                    return !0;
                  }
                return !1;
              })();
            e = function (e) {
              var a = null !== e && "object" == typeof e,
                s = "[object Function]" === n.call(e),
                f = r(e),
                d = a && "[object String]" === n.call(e),
                p = [];
              if (!a && !s && !f)
                throw new TypeError("Object.keys called on a non-object");
              var h = i && s;
              if (d && e.length > 0 && !t.call(e, 0))
                for (var v = 0; v < e.length; ++v) p.push(String(v));
              if (f && e.length > 0)
                for (var g = 0; g < e.length; ++g) p.push(String(g));
              else
                for (var y in e)
                  (h && "prototype" === y) ||
                    !t.call(e, y) ||
                    p.push(String(y));
              if (o)
                for (
                  var m = (function (e) {
                      if ("undefined" == typeof window || !c) return u(e);
                      try {
                        return u(e);
                      } catch (t) {
                        return !1;
                      }
                    })(e),
                    _ = 0;
                  _ < l.length;
                  ++_
                )
                  (m && "constructor" === l[_]) ||
                    !t.call(e, l[_]) ||
                    p.push(l[_]);
              return p;
            };
          }
          return (_h = e);
        })(),
    Oh = Object.keys;
  Ch.shim = function () {
    if (Object.keys) {
      var e = (function () {
        var e = Object.keys(arguments);
        return e && e.length === arguments.length;
      })(1, 2);
      e ||
        (Object.keys = function (e) {
          return xh(e) ? Oh(kh.call(e)) : Oh(e);
        });
    } else Object.keys = Ch;
    return Object.keys || Ch;
  };
  var Nh,
    Ah = { exports: {} },
    Th = Object.prototype.toString,
    Rh = Math.max,
    jh = function (e, t) {
      for (var n = [], r = 0; r < e.length; r += 1) n[r] = e[r];
      for (var a = 0; a < t.length; a += 1) n[a + e.length] = t[a];
      return n;
    },
    Mh =
      Function.prototype.bind ||
      function (e) {
        var t = this;
        if ("function" != typeof t || "[object Function]" !== Th.apply(t))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + t
          );
        for (
          var n,
            r = (function (e) {
              for (var t = [], n = 1, r = 0; n < e.length; n += 1, r += 1)
                t[r] = e[n];
              return t;
            })(arguments),
            a = Rh(0, t.length - r.length),
            o = [],
            i = 0;
          i < a;
          i++
        )
          o[i] = "$" + i;
        if (
          ((n = Function(
            "binder",
            "return function (" +
              (function (e) {
                for (var t = "", n = 0; n < e.length; n += 1)
                  (t += e[n]), n + 1 < e.length && (t += ",");
                return t;
              })(o) +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof n) {
              var a = t.apply(this, jh(r, arguments));
              return Object(a) === a ? a : this;
            }
            return t.apply(e, jh(r, arguments));
          })),
          t.prototype)
        ) {
          var l = function () {};
          (l.prototype = t.prototype),
            (n.prototype = new l()),
            (l.prototype = null);
        }
        return n;
      },
    Ph = Error,
    Fh = EvalError,
    zh = RangeError,
    Dh = ReferenceError,
    Lh = SyntaxError,
    Ih = TypeError,
    Gh = URIError,
    Uh = "undefined" != typeof Symbol && Symbol,
    $h = { __proto__: null, foo: {} },
    Bh = Object,
    Wh = Function.prototype.call,
    Vh = Object.prototype.hasOwnProperty,
    Hh = Mh.call(Wh, Vh),
    qh = Ph,
    Yh = Fh,
    Qh = zh,
    Kh = Dh,
    Jh = Lh,
    Xh = Ih,
    Zh = Gh,
    ev = Function,
    tv = function (e) {
      try {
        return ev('"use strict"; return (' + e + ").constructor;")();
      } catch (t) {}
    },
    nv = Object.getOwnPropertyDescriptor;
  if (nv)
    try {
      nv({}, "");
    } catch (cg) {
      nv = null;
    }
  var rv = function () {
      throw new Xh();
    },
    av = nv
      ? (function () {
          try {
            return rv;
          } catch (cg) {
            try {
              return nv(arguments, "callee").get;
            } catch (e) {
              return rv;
            }
          }
        })()
      : rv,
    ov =
      "function" == typeof Uh &&
      "function" == typeof Symbol &&
      "symbol" == typeof Uh("foo") &&
      "symbol" == typeof Symbol("bar") &&
      (function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          n = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        for (t in ((e[t] = 42), e)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
          return !1;
        if (
          "function" == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length
        )
          return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var a = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== a.value || !0 !== a.enumerable) return !1;
        }
        return !0;
      })(),
    iv = { __proto__: $h }.foo === $h.foo && !($h instanceof Bh),
    lv =
      Object.getPrototypeOf ||
      (iv
        ? function (e) {
            return e.__proto__;
          }
        : null),
    uv = {},
    sv = "undefined" != typeof Uint8Array && lv ? lv(Uint8Array) : Nh,
    cv = {
      __proto__: null,
      "%AggregateError%":
        "undefined" == typeof AggregateError ? Nh : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? Nh : ArrayBuffer,
      "%ArrayIteratorPrototype%": ov && lv ? lv([][Symbol.iterator]()) : Nh,
      "%AsyncFromSyncIteratorPrototype%": Nh,
      "%AsyncFunction%": uv,
      "%AsyncGenerator%": uv,
      "%AsyncGeneratorFunction%": uv,
      "%AsyncIteratorPrototype%": uv,
      "%Atomics%": "undefined" == typeof Atomics ? Nh : Atomics,
      "%BigInt%": "undefined" == typeof BigInt ? Nh : BigInt,
      "%BigInt64Array%":
        "undefined" == typeof BigInt64Array ? Nh : BigInt64Array,
      "%BigUint64Array%":
        "undefined" == typeof BigUint64Array ? Nh : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": "undefined" == typeof DataView ? Nh : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": qh,
      "%eval%": eval,
      "%EvalError%": Yh,
      "%Float32Array%": "undefined" == typeof Float32Array ? Nh : Float32Array,
      "%Float64Array%": "undefined" == typeof Float64Array ? Nh : Float64Array,
      "%FinalizationRegistry%":
        "undefined" == typeof FinalizationRegistry ? Nh : FinalizationRegistry,
      "%Function%": ev,
      "%GeneratorFunction%": uv,
      "%Int8Array%": "undefined" == typeof Int8Array ? Nh : Int8Array,
      "%Int16Array%": "undefined" == typeof Int16Array ? Nh : Int16Array,
      "%Int32Array%": "undefined" == typeof Int32Array ? Nh : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": ov && lv ? lv(lv([][Symbol.iterator]())) : Nh,
      "%JSON%": "object" == typeof JSON ? JSON : Nh,
      "%Map%": "undefined" == typeof Map ? Nh : Map,
      "%MapIteratorPrototype%":
        "undefined" != typeof Map && ov && lv
          ? lv(new Map()[Symbol.iterator]())
          : Nh,
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": "undefined" == typeof Promise ? Nh : Promise,
      "%Proxy%": "undefined" == typeof Proxy ? Nh : Proxy,
      "%RangeError%": Qh,
      "%ReferenceError%": Kh,
      "%Reflect%": "undefined" == typeof Reflect ? Nh : Reflect,
      "%RegExp%": RegExp,
      "%Set%": "undefined" == typeof Set ? Nh : Set,
      "%SetIteratorPrototype%":
        "undefined" != typeof Set && ov && lv
          ? lv(new Set()[Symbol.iterator]())
          : Nh,
      "%SharedArrayBuffer%":
        "undefined" == typeof SharedArrayBuffer ? Nh : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": ov && lv ? lv(""[Symbol.iterator]()) : Nh,
      "%Symbol%": ov ? Symbol : Nh,
      "%SyntaxError%": Jh,
      "%ThrowTypeError%": av,
      "%TypedArray%": sv,
      "%TypeError%": Xh,
      "%Uint8Array%": "undefined" == typeof Uint8Array ? Nh : Uint8Array,
      "%Uint8ClampedArray%":
        "undefined" == typeof Uint8ClampedArray ? Nh : Uint8ClampedArray,
      "%Uint16Array%": "undefined" == typeof Uint16Array ? Nh : Uint16Array,
      "%Uint32Array%": "undefined" == typeof Uint32Array ? Nh : Uint32Array,
      "%URIError%": Zh,
      "%WeakMap%": "undefined" == typeof WeakMap ? Nh : WeakMap,
      "%WeakRef%": "undefined" == typeof WeakRef ? Nh : WeakRef,
      "%WeakSet%": "undefined" == typeof WeakSet ? Nh : WeakSet,
    };
  if (lv)
    try {
      null.error;
    } catch (cg) {
      var fv = lv(lv(cg));
      cv["%Error.prototype%"] = fv;
    }
  var dv,
    pv,
    hv = function e(t) {
      var n;
      if ("%AsyncFunction%" === t) n = tv("async function () {}");
      else if ("%GeneratorFunction%" === t) n = tv("function* () {}");
      else if ("%AsyncGeneratorFunction%" === t)
        n = tv("async function* () {}");
      else if ("%AsyncGenerator%" === t) {
        var r = e("%AsyncGeneratorFunction%");
        r && (n = r.prototype);
      } else if ("%AsyncIteratorPrototype%" === t) {
        var a = e("%AsyncGenerator%");
        a && lv && (n = lv(a.prototype));
      }
      return (cv[t] = n), n;
    },
    vv = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype",
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    },
    gv = Mh,
    yv = Hh,
    mv = gv.call(Function.call, Array.prototype.concat),
    _v = gv.call(Function.apply, Array.prototype.splice),
    bv = gv.call(Function.call, String.prototype.replace),
    wv = gv.call(Function.call, String.prototype.slice),
    Sv = gv.call(Function.call, RegExp.prototype.exec),
    kv =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    xv = /\\(\\)?/g,
    Ev = function (e, t) {
      var n,
        r = e;
      if ((yv(vv, r) && (r = "%" + (n = vv[r])[0] + "%"), yv(cv, r))) {
        var a = cv[r];
        if ((a === uv && (a = hv(r)), void 0 === a && !t))
          throw new Xh(
            "intrinsic " +
              e +
              " exists, but is not available. Please file an issue!"
          );
        return { alias: n, name: r, value: a };
      }
      throw new Jh("intrinsic " + e + " does not exist!");
    },
    Cv = function (e, t) {
      if ("string" != typeof e || 0 === e.length)
        throw new Xh("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && "boolean" != typeof t)
        throw new Xh('"allowMissing" argument must be a boolean');
      if (null === Sv(/^%?[^%]*%?$/, e))
        throw new Jh(
          "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
        );
      var n = (function (e) {
          var t = wv(e, 0, 1),
            n = wv(e, -1);
          if ("%" === t && "%" !== n)
            throw new Jh("invalid intrinsic syntax, expected closing `%`");
          if ("%" === n && "%" !== t)
            throw new Jh("invalid intrinsic syntax, expected opening `%`");
          var r = [];
          return (
            bv(e, kv, function (e, t, n, a) {
              r[r.length] = n ? bv(a, xv, "$1") : t || e;
            }),
            r
          );
        })(e),
        r = n.length > 0 ? n[0] : "",
        a = Ev("%" + r + "%", t),
        o = a.name,
        i = a.value,
        l = !1,
        u = a.alias;
      u && ((r = u[0]), _v(n, mv([0, 1], u)));
      for (var s = 1, c = !0; s < n.length; s += 1) {
        var f = n[s],
          d = wv(f, 0, 1),
          p = wv(f, -1);
        if (
          ('"' === d ||
            "'" === d ||
            "`" === d ||
            '"' === p ||
            "'" === p ||
            "`" === p) &&
          d !== p
        )
          throw new Jh("property names with quotes must have matching quotes");
        if (
          (("constructor" !== f && c) || (l = !0),
          yv(cv, (o = "%" + (r += "." + f) + "%")))
        )
          i = cv[o];
        else if (null != i) {
          if (!(f in i)) {
            if (!t)
              throw new Xh(
                "base intrinsic for " +
                  e +
                  " exists, but the property is not available."
              );
            return;
          }
          if (nv && s + 1 >= n.length) {
            var h = nv(i, f);
            i =
              (c = !!h) && "get" in h && !("originalValue" in h.get)
                ? h.get
                : i[f];
          } else (c = yv(i, f)), (i = i[f]);
          c && !l && (cv[o] = i);
        }
      }
      return i;
    };
  function Ov() {
    if (pv) return dv;
    pv = 1;
    var e = Cv("%Object.defineProperty%", !0) || !1;
    if (e)
      try {
        e({}, "a", { value: 1 });
      } catch (t) {
        e = !1;
      }
    return (dv = e);
  }
  var Nv = Cv("%Object.getOwnPropertyDescriptor%", !0);
  if (Nv)
    try {
      Nv([], "length");
    } catch (cg) {
      Nv = null;
    }
  var Av = Nv,
    Tv = Ov(),
    Rv = Lh,
    jv = Ih,
    Mv = Av,
    Pv = Ov(),
    Fv = function () {
      return !!Pv;
    };
  Fv.hasArrayLengthDefineBug = function () {
    if (!Pv) return null;
    try {
      return 1 !== Pv([], "length", { value: 1 }).length;
    } catch (cg) {
      return !0;
    }
  };
  var zv = Cv,
    Dv = function (e, t, n) {
      if (!e || ("object" != typeof e && "function" != typeof e))
        throw new jv("`obj` must be an object or a function`");
      if ("string" != typeof t && "symbol" != typeof t)
        throw new jv("`property` must be a string or a symbol`");
      if (
        arguments.length > 3 &&
        "boolean" != typeof arguments[3] &&
        null !== arguments[3]
      )
        throw new jv("`nonEnumerable`, if provided, must be a boolean or null");
      if (
        arguments.length > 4 &&
        "boolean" != typeof arguments[4] &&
        null !== arguments[4]
      )
        throw new jv("`nonWritable`, if provided, must be a boolean or null");
      if (
        arguments.length > 5 &&
        "boolean" != typeof arguments[5] &&
        null !== arguments[5]
      )
        throw new jv(
          "`nonConfigurable`, if provided, must be a boolean or null"
        );
      if (arguments.length > 6 && "boolean" != typeof arguments[6])
        throw new jv("`loose`, if provided, must be a boolean");
      var r = arguments.length > 3 ? arguments[3] : null,
        a = arguments.length > 4 ? arguments[4] : null,
        o = arguments.length > 5 ? arguments[5] : null,
        i = arguments.length > 6 && arguments[6],
        l = !!Mv && Mv(e, t);
      if (Tv)
        Tv(e, t, {
          configurable: null === o && l ? l.configurable : !o,
          enumerable: null === r && l ? l.enumerable : !r,
          value: n,
          writable: null === a && l ? l.writable : !a,
        });
      else {
        if (!i && (r || a || o))
          throw new Rv(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
          );
        e[t] = n;
      }
    },
    Lv = Fv(),
    Iv = Av,
    Gv = Ih,
    Uv = zv("%Math.floor%"),
    $v = function (e, t) {
      if ("function" != typeof e) throw new Gv("`fn` is not a function");
      if ("number" != typeof t || t < 0 || t > 4294967295 || Uv(t) !== t)
        throw new Gv("`length` must be a positive 32-bit integer");
      var n = arguments.length > 2 && !!arguments[2],
        r = !0,
        a = !0;
      if ("length" in e && Iv) {
        var o = Iv(e, "length");
        o && !o.configurable && (r = !1), o && !o.writable && (a = !1);
      }
      return (
        (r || a || !n) &&
          (Lv ? Dv(e, "length", t, !0, !0) : Dv(e, "length", t)),
        e
      );
    };
  !(function (e) {
    var t = Mh,
      n = Cv,
      r = $v,
      a = Ih,
      o = n("%Function.prototype.apply%"),
      i = n("%Function.prototype.call%"),
      l = n("%Reflect.apply%", !0) || t.call(i, o),
      u = Ov(),
      s = n("%Math.max%");
    e.exports = function (e) {
      if ("function" != typeof e) throw new a("a function is required");
      var n = l(t, i, arguments);
      return r(n, 1 + s(0, e.length - (arguments.length - 1)), !0);
    };
    var c = function () {
      return l(t, o, arguments);
    };
    u ? u(e.exports, "apply", { value: c }) : (e.exports.apply = c);
  })(Ah);
  var Bv = Cv,
    Wv = Ah.exports,
    Vv = Wv(Bv("String.prototype.indexOf"));
  ("undefined" != typeof JSON
    ? JSON
    : (yh ||
        ((yh = 1),
        (mh.parse = (function () {
          if (hh) return ph;
          var e, t;
          hh = 1;
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
          function o(r) {
            return (
              r && r !== t && a("Expected '" + r + "' instead of '" + t + "'"),
              (t = n.charAt(e)),
              (e += 1),
              t
            );
          }
          function i() {
            var e,
              n = "";
            for ("-" === t && ((n = "-"), o("-")); t >= "0" && t <= "9"; )
              (n += t), o();
            if ("." === t) for (n += "."; o() && t >= "0" && t <= "9"; ) n += t;
            if ("e" === t || "E" === t)
              for (
                n += t, o(), ("-" !== t && "+" !== t) || ((n += t), o());
                t >= "0" && t <= "9";

              )
                (n += t), o();
            return (e = Number(n)), isFinite(e) || a("Bad number"), e;
          }
          function l() {
            var e,
              n,
              i,
              l = "";
            if ('"' === t)
              for (; o(); ) {
                if ('"' === t) return o(), l;
                if ("\\" === t)
                  if ((o(), "u" === t)) {
                    for (
                      i = 0, n = 0;
                      n < 4 && ((e = parseInt(o(), 16)), isFinite(e));
                      n += 1
                    )
                      i = 16 * i + e;
                    l += String.fromCharCode(i);
                  } else {
                    if ("string" != typeof r[t]) break;
                    l += r[t];
                  }
                else l += t;
              }
            a("Bad string");
          }
          function u() {
            for (; t && t <= " "; ) o();
          }
          function s() {
            switch ((u(), t)) {
              case "{":
                return (function () {
                  var e,
                    n = {};
                  if ("{" === t) {
                    if ((o("{"), u(), "}" === t)) return o("}"), n;
                    for (; t; ) {
                      if (
                        ((e = l()),
                        u(),
                        o(":"),
                        Object.prototype.hasOwnProperty.call(n, e) &&
                          a('Duplicate key "' + e + '"'),
                        (n[e] = s()),
                        u(),
                        "}" === t)
                      )
                        return o("}"), n;
                      o(","), u();
                    }
                  }
                  a("Bad object");
                })();
              case "[":
                return (function () {
                  var e = [];
                  if ("[" === t) {
                    if ((o("["), u(), "]" === t)) return o("]"), e;
                    for (; t; ) {
                      if ((e.push(s()), u(), "]" === t)) return o("]"), e;
                      o(","), u();
                    }
                  }
                  a("Bad array");
                })();
              case '"':
                return l();
              case "-":
                return i();
              default:
                return t >= "0" && t <= "9"
                  ? i()
                  : (function () {
                      switch (t) {
                        case "t":
                          return o("t"), o("r"), o("u"), o("e"), !0;
                        case "f":
                          return o("f"), o("a"), o("l"), o("s"), o("e"), !1;
                        case "n":
                          return o("n"), o("u"), o("l"), o("l"), null;
                        default:
                          a("Unexpected '" + t + "'");
                      }
                    })();
            }
          }
          return (ph = function (r, o) {
            var i;
            return (
              (n = r),
              (e = 0),
              (t = " "),
              (i = s()),
              u(),
              t && a("Syntax error"),
              "function" == typeof o
                ? (function e(t, n) {
                    var r,
                      a,
                      i = t[n];
                    if (i && "object" == typeof i)
                      for (r in s)
                        Object.prototype.hasOwnProperty.call(i, r) &&
                          (void 0 === (a = e(i, r)) ? delete i[r] : (i[r] = a));
                    return o.call(t, n, i);
                  })({ "": i }, "")
                : i
            );
          });
        })()),
        (mh.stringify = (function () {
          if (gh) return vh;
          gh = 1;
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
          function o(e) {
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
          function i(r, a) {
            var l,
              u,
              s,
              c,
              f,
              d = e,
              p = a[r];
            switch (
              (p &&
                "object" == typeof p &&
                "function" == typeof p.toJSON &&
                (p = p.toJSON(r)),
              "function" == typeof n && (p = n.call(a, r, p)),
              typeof p)
            ) {
              case "string":
                return o(p);
              case "number":
                return isFinite(p) ? String(p) : "null";
              case "boolean":
              case "null":
                return String(p);
              case "object":
                if (!p) return "null";
                if (
                  ((e += t),
                  (f = []),
                  "[object Array]" === Object.prototype.toString.apply(p))
                ) {
                  for (c = p.length, l = 0; l < c; l += 1)
                    f[l] = i(l, p) || "null";
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
                  for (c = n.length, l = 0; l < c; l += 1)
                    "string" == typeof (u = n[l]) &&
                      (s = i(u, p)) &&
                      f.push(o(u) + (e ? ": " : ":") + s);
                else
                  for (u in p)
                    Object.prototype.hasOwnProperty.call(p, u) &&
                      (s = i(u, p)) &&
                      f.push(o(u) + (e ? ": " : ":") + s);
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
          return (vh = function (r, a, o) {
            var l;
            if (((e = ""), (t = ""), "number" == typeof o))
              for (l = 0; l < o; l += 1) t += " ";
            else "string" == typeof o && (t = o);
            if (
              ((n = a),
              a &&
                "function" != typeof a &&
                ("object" != typeof a || "number" != typeof a.length))
            )
              throw new Error("JSON.stringify");
            return i("", { "": r });
          });
        })())),
      mh)
  ).stringify;
  var Hv = function (e, t) {
    var n = Bv(e, !!t);
    return "function" == typeof n && Vv(e, ".prototype.") > -1 ? Wv(n) : n;
  };
  Hv("Array.prototype.join"), Hv("Array.prototype.push");
  var qv,
    Yv,
    Qv = { exports: {} };
  (qv = Qv),
    (Yv = Qv.exports),
    function () {
      var e,
        t = "Expected a function",
        n = "__lodash_hash_undefined__",
        r = "__lodash_placeholder__",
        a = 32,
        o = 128,
        i = 1 / 0,
        l = 9007199254740991,
        u = NaN,
        s = 4294967295,
        c = [
          ["ary", o],
          ["bind", 1],
          ["bindKey", 2],
          ["curry", 8],
          ["curryRight", 16],
          ["flip", 512],
          ["partial", a],
          ["partialRight", 64],
          ["rearg", 256],
        ],
        f = "[object Arguments]",
        d = "[object Array]",
        p = "[object Boolean]",
        h = "[object Date]",
        v = "[object Error]",
        g = "[object Function]",
        y = "[object GeneratorFunction]",
        m = "[object Map]",
        _ = "[object Number]",
        b = "[object Object]",
        w = "[object Promise]",
        S = "[object RegExp]",
        k = "[object Set]",
        x = "[object String]",
        E = "[object Symbol]",
        C = "[object WeakMap]",
        O = "[object ArrayBuffer]",
        N = "[object DataView]",
        A = "[object Float32Array]",
        T = "[object Float64Array]",
        R = "[object Int8Array]",
        j = "[object Int16Array]",
        M = "[object Int32Array]",
        P = "[object Uint8Array]",
        F = "[object Uint8ClampedArray]",
        z = "[object Uint16Array]",
        D = "[object Uint32Array]",
        L = /\b__p \+= '';/g,
        I = /\b(__p \+=) '' \+/g,
        G = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        U = /&(?:amp|lt|gt|quot|#39);/g,
        $ = /[&<>"']/g,
        B = RegExp(U.source),
        W = RegExp($.source),
        V = /<%-([\s\S]+?)%>/g,
        H = /<%([\s\S]+?)%>/g,
        q = /<%=([\s\S]+?)%>/g,
        Y = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        K = /^\w*$/,
        J =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        X = /[\\^$.*+?()[\]{}|]/g,
        Z = RegExp(X.source),
        ee = /^\s+/,
        te = /\s/,
        ne = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        re = /\{\n\/\* \[wrapped with (.+)\] \*/,
        ae = /,? & /,
        oe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        ie = /[()=,{}\[\]\/\s]/,
        le = /\\(\\)?/g,
        ue = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        se = /\w*$/,
        ce = /^[-+]0x[0-9a-f]+$/i,
        fe = /^0b[01]+$/i,
        de = /^\[object .+?Constructor\]$/,
        pe = /^0o[0-7]+$/i,
        he = /^(?:0|[1-9]\d*)$/,
        ve = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        ge = /($^)/,
        ye = /['\n\r\u2028\u2029\\]/g,
        me = "\\ud800-\\udfff",
        _e = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
        be = "\\u2700-\\u27bf",
        we = "a-z\\xdf-\\xf6\\xf8-\\xff",
        Se = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        ke = "\\ufe0e\\ufe0f",
        xe =
          "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        Ee = "[" + me + "]",
        Ce = "[" + xe + "]",
        Oe = "[" + _e + "]",
        Ne = "\\d+",
        Ae = "[" + be + "]",
        Te = "[" + we + "]",
        Re = "[^" + me + xe + Ne + be + we + Se + "]",
        je = "\\ud83c[\\udffb-\\udfff]",
        Me = "[^" + me + "]",
        Pe = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        Fe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        ze = "[" + Se + "]",
        De = "\\u200d",
        Le = "(?:" + Te + "|" + Re + ")",
        Ie = "(?:" + ze + "|" + Re + ")",
        Ge = "(?:['’](?:d|ll|m|re|s|t|ve))?",
        Ue = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
        $e = "(?:" + Oe + "|" + je + ")?",
        Be = "[" + ke + "]?",
        We =
          Be +
          $e +
          "(?:" +
          De +
          "(?:" +
          [Me, Pe, Fe].join("|") +
          ")" +
          Be +
          $e +
          ")*",
        Ve = "(?:" + [Ae, Pe, Fe].join("|") + ")" + We,
        He = "(?:" + [Me + Oe + "?", Oe, Pe, Fe, Ee].join("|") + ")",
        qe = RegExp("['’]", "g"),
        Ye = RegExp(Oe, "g"),
        Qe = RegExp(je + "(?=" + je + ")|" + He + We, "g"),
        Ke = RegExp(
          [
            ze + "?" + Te + "+" + Ge + "(?=" + [Ce, ze, "$"].join("|") + ")",
            Ie + "+" + Ue + "(?=" + [Ce, ze + Le, "$"].join("|") + ")",
            ze + "?" + Le + "+" + Ge,
            ze + "+" + Ue,
            "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Ne,
            Ve,
          ].join("|"),
          "g"
        ),
        Je = RegExp("[" + De + me + _e + ke + "]"),
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
      (tt[A] =
        tt[T] =
        tt[R] =
        tt[j] =
        tt[M] =
        tt[P] =
        tt[F] =
        tt[z] =
        tt[D] =
          !0),
        (tt[f] =
          tt[d] =
          tt[O] =
          tt[p] =
          tt[N] =
          tt[h] =
          tt[v] =
          tt[g] =
          tt[m] =
          tt[_] =
          tt[b] =
          tt[S] =
          tt[k] =
          tt[x] =
          tt[C] =
            !1);
      var nt = {};
      (nt[f] =
        nt[d] =
        nt[O] =
        nt[N] =
        nt[p] =
        nt[h] =
        nt[A] =
        nt[T] =
        nt[R] =
        nt[j] =
        nt[M] =
        nt[m] =
        nt[_] =
        nt[b] =
        nt[S] =
        nt[k] =
        nt[x] =
        nt[E] =
        nt[P] =
        nt[F] =
        nt[z] =
        nt[D] =
          !0),
        (nt[v] = nt[g] = nt[C] = !1);
      var rt = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        at = parseFloat,
        ot = parseInt,
        it = "object" == typeof Q && Q && Q.Object === Object && Q,
        lt = "object" == typeof self && self && self.Object === Object && self,
        ut = it || lt || Function("return this")(),
        st = Yv && !Yv.nodeType && Yv,
        ct = st && qv && !qv.nodeType && qv,
        ft = ct && ct.exports === st,
        dt = ft && it.process,
        pt = (function () {
          try {
            return (
              (ct && ct.require && ct.require("util").types) ||
              (dt && dt.binding && dt.binding("util"))
            );
          } catch (e) {}
        })(),
        ht = pt && pt.isArrayBuffer,
        vt = pt && pt.isDate,
        gt = pt && pt.isMap,
        yt = pt && pt.isRegExp,
        mt = pt && pt.isSet,
        _t = pt && pt.isTypedArray;
      function bt(e, t, n) {
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
      function wt(e, t, n, r) {
        for (var a = -1, o = null == e ? 0 : e.length; ++a < o; ) {
          var i = e[a];
          t(r, i, n(i), e);
        }
        return r;
      }
      function St(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length;
          ++n < r && !1 !== t(e[n], n, e);

        );
        return e;
      }
      function kt(e, t) {
        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e); );
        return e;
      }
      function xt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (!t(e[n], n, e)) return !1;
        return !0;
      }
      function Et(e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, a = 0, o = [];
          ++n < r;

        ) {
          var i = e[n];
          t(i, n, e) && (o[a++] = i);
        }
        return o;
      }
      function Ct(e, t) {
        return !(null == e || !e.length) && zt(e, t, 0) > -1;
      }
      function Ot(e, t, n) {
        for (var r = -1, a = null == e ? 0 : e.length; ++r < a; )
          if (n(t, e[r])) return !0;
        return !1;
      }
      function Nt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, a = Array(r); ++n < r; )
          a[n] = t(e[n], n, e);
        return a;
      }
      function At(e, t) {
        for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
        return e;
      }
      function Tt(e, t, n, r) {
        var a = -1,
          o = null == e ? 0 : e.length;
        for (r && o && (n = e[++a]); ++a < o; ) n = t(n, e[a], a, e);
        return n;
      }
      function Rt(e, t, n, r) {
        var a = null == e ? 0 : e.length;
        for (r && a && (n = e[--a]); a--; ) n = t(n, e[a], a, e);
        return n;
      }
      function jt(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      }
      var Mt = Gt("length");
      function Pt(e, t, n) {
        var r;
        return (
          n(e, function (e, n, a) {
            if (t(e, n, a)) return (r = n), !1;
          }),
          r
        );
      }
      function Ft(e, t, n, r) {
        for (var a = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < a; )
          if (t(e[o], o, e)) return o;
        return -1;
      }
      function zt(e, t, n) {
        return t == t
          ? (function (e, t, n) {
              for (var r = n - 1, a = e.length; ++r < a; )
                if (e[r] === t) return r;
              return -1;
            })(e, t, n)
          : Ft(e, Lt, n);
      }
      function Dt(e, t, n, r) {
        for (var a = n - 1, o = e.length; ++a < o; ) if (r(e[a], t)) return a;
        return -1;
      }
      function Lt(e) {
        return e != e;
      }
      function It(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? Bt(e, t) / n : u;
      }
      function Gt(t) {
        return function (n) {
          return null == n ? e : n[t];
        };
      }
      function Ut(t) {
        return function (n) {
          return null == t ? e : t[n];
        };
      }
      function $t(e, t, n, r, a) {
        return (
          a(e, function (e, a, o) {
            n = r ? ((r = !1), e) : t(n, e, a, o);
          }),
          n
        );
      }
      function Bt(t, n) {
        for (var r, a = -1, o = t.length; ++a < o; ) {
          var i = n(t[a]);
          i !== e && (r = r === e ? i : r + i);
        }
        return r;
      }
      function Wt(e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      }
      function Vt(e) {
        return e ? e.slice(0, un(e) + 1).replace(ee, "") : e;
      }
      function Ht(e) {
        return function (t) {
          return e(t);
        };
      }
      function qt(e, t) {
        return Nt(t, function (t) {
          return e[t];
        });
      }
      function Yt(e, t) {
        return e.has(t);
      }
      function Qt(e, t) {
        for (var n = -1, r = e.length; ++n < r && zt(t, e[n], 0) > -1; );
        return n;
      }
      function Kt(e, t) {
        for (var n = e.length; n-- && zt(t, e[n], 0) > -1; );
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
        for (var n = -1, a = e.length, o = 0, i = []; ++n < a; ) {
          var l = e[n];
          (l !== t && l !== r) || ((e[n] = r), (i[o++] = n));
        }
        return i;
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
              for (var t = (Qe.lastIndex = 0); Qe.test(e); ) ++t;
              return t;
            })(e)
          : Mt(e);
      }
      function ln(e) {
        return en(e)
          ? e.match(Qe) || []
          : (function (e) {
              return e.split("");
            })(e);
      }
      function un(e) {
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
        cn = (function Q(te) {
          var me,
            _e = (te =
              null == te ? ut : cn.defaults(ut.Object(), te, cn.pick(ut, Ze)))
              .Array,
            be = te.Date,
            we = te.Error,
            Se = te.Function,
            ke = te.Math,
            xe = te.Object,
            Ee = te.RegExp,
            Ce = te.String,
            Oe = te.TypeError,
            Ne = _e.prototype,
            Ae = Se.prototype,
            Te = xe.prototype,
            Re = te["__core-js_shared__"],
            je = Ae.toString,
            Me = Te.hasOwnProperty,
            Pe = 0,
            Fe = (me = /[^.]+$/.exec((Re && Re.keys && Re.keys.IE_PROTO) || ""))
              ? "Symbol(src)_1." + me
              : "",
            ze = Te.toString,
            De = je.call(xe),
            Le = ut._,
            Ie = Ee(
              "^" +
                je
                  .call(Me)
                  .replace(X, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Ge = ft ? te.Buffer : e,
            Ue = te.Symbol,
            $e = te.Uint8Array,
            Be = Ge ? Ge.allocUnsafe : e,
            We = nn(xe.getPrototypeOf, xe),
            Ve = xe.create,
            He = Te.propertyIsEnumerable,
            Qe = Ne.splice,
            Je = Ue ? Ue.isConcatSpreadable : e,
            rt = Ue ? Ue.iterator : e,
            it = Ue ? Ue.toStringTag : e,
            lt = (function () {
              try {
                var e = lo(xe, "defineProperty");
                return e({}, "", {}), e;
              } catch (t) {}
            })(),
            st = te.clearTimeout !== ut.clearTimeout && te.clearTimeout,
            ct = be && be.now !== ut.Date.now && be.now,
            dt = te.setTimeout !== ut.setTimeout && te.setTimeout,
            pt = ke.ceil,
            Mt = ke.floor,
            Ut = xe.getOwnPropertySymbols,
            fn = Ge ? Ge.isBuffer : e,
            dn = te.isFinite,
            pn = Ne.join,
            hn = nn(xe.keys, xe),
            vn = ke.max,
            gn = ke.min,
            yn = be.now,
            mn = te.parseInt,
            _n = ke.random,
            bn = Ne.reverse,
            wn = lo(te, "DataView"),
            Sn = lo(te, "Map"),
            kn = lo(te, "Promise"),
            xn = lo(te, "Set"),
            En = lo(te, "WeakMap"),
            Cn = lo(xe, "create"),
            On = En && new En(),
            Nn = {},
            An = zo(wn),
            Tn = zo(Sn),
            Rn = zo(kn),
            jn = zo(xn),
            Mn = zo(En),
            Pn = Ue ? Ue.prototype : e,
            Fn = Pn ? Pn.valueOf : e,
            zn = Pn ? Pn.toString : e;
          function Dn(e) {
            if (Zi(e) && !$i(e) && !(e instanceof Un)) {
              if (e instanceof Gn) return e;
              if (Me.call(e, "__wrapped__")) return Do(e);
            }
            return new Gn(e);
          }
          var Ln = (function () {
            function t() {}
            return function (n) {
              if (!Xi(n)) return {};
              if (Ve) return Ve(n);
              t.prototype = n;
              var r = new t();
              return (t.prototype = e), r;
            };
          })();
          function In() {}
          function Gn(t, n) {
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
              (this.__takeCount__ = s),
              (this.__views__ = []);
          }
          function $n(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Bn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n; ) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function Wn(e) {
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
            for (this.__data__ = new Wn(); ++t < n; ) this.add(e[t]);
          }
          function Hn(e) {
            var t = (this.__data__ = new Bn(e));
            this.size = t.size;
          }
          function qn(e, t) {
            var n = $i(e),
              r = !n && Ui(e),
              a = !n && !r && Hi(e),
              o = !n && !r && !a && ll(e),
              i = n || r || a || o,
              l = i ? Wt(e.length, Ce) : [],
              u = l.length;
            for (var s in e)
              (!t && !Me.call(e, s)) ||
                (i &&
                  ("length" == s ||
                    (a && ("offset" == s || "parent" == s)) ||
                    (o &&
                      ("buffer" == s ||
                        "byteLength" == s ||
                        "byteOffset" == s)) ||
                    vo(s, u))) ||
                l.push(s);
            return l;
          }
          function Yn(t) {
            var n = t.length;
            return n ? t[Wr(0, n - 1)] : e;
          }
          function Qn(e, t) {
            return Ro(Ea(e), ar(t, 0, e.length));
          }
          function Kn(e) {
            return Ro(Ea(e));
          }
          function Jn(t, n, r) {
            ((r !== e && !Li(t[n], r)) || (r === e && !(n in t))) &&
              nr(t, n, r);
          }
          function Xn(t, n, r) {
            var a = t[n];
            (Me.call(t, n) && Li(a, r) && (r !== e || n in t)) || nr(t, n, r);
          }
          function Zn(e, t) {
            for (var n = e.length; n--; ) if (Li(e[n][0], t)) return n;
            return -1;
          }
          function er(e, t, n, r) {
            return (
              sr(e, function (e, a, o) {
                t(r, e, n(e), o);
              }),
              r
            );
          }
          function tr(e, t) {
            return e && Ca(t, Al(t), e);
          }
          function nr(e, t, n) {
            "__proto__" == t && lt
              ? lt(e, t, {
                  configurable: !0,
                  enumerable: !0,
                  value: n,
                  writable: !0,
                })
              : (e[t] = n);
          }
          function rr(t, n) {
            for (var r = -1, a = n.length, o = _e(a), i = null == t; ++r < a; )
              o[r] = i ? e : xl(t, n[r]);
            return o;
          }
          function ar(t, n, r) {
            return (
              t == t &&
                (r !== e && (t = t <= r ? t : r),
                n !== e && (t = t >= n ? t : n)),
              t
            );
          }
          function or(t, n, r, a, o, i) {
            var l,
              u = 1 & n,
              s = 2 & n,
              c = 4 & n;
            if ((r && (l = o ? r(t, a, o, i) : r(t)), l !== e)) return l;
            if (!Xi(t)) return t;
            var d,
              v,
              w,
              C = $i(t);
            if (C) {
              if (
                ((v = (d = t).length),
                (w = new d.constructor(v)),
                v &&
                  "string" == typeof d[0] &&
                  Me.call(d, "index") &&
                  ((w.index = d.index), (w.input = d.input)),
                (l = w),
                !u)
              )
                return Ea(t, l);
            } else {
              var L = co(t),
                I = L == g || L == y;
              if (Hi(t)) return _a(t, u);
              if (L == b || L == f || (I && !o)) {
                if (((l = s || I ? {} : po(t)), !u))
                  return s
                    ? (function (e, t) {
                        return Ca(e, so(e), t);
                      })(
                        t,
                        (function (e, t) {
                          return e && Ca(t, Tl(t), e);
                        })(l, t)
                      )
                    : (function (e, t) {
                        return Ca(e, uo(e), t);
                      })(t, tr(l, t));
              } else {
                if (!nt[L]) return o ? t : {};
                l = (function (e, t, n) {
                  var r,
                    a,
                    o,
                    i = e.constructor;
                  switch (t) {
                    case O:
                      return ba(e);
                    case p:
                    case h:
                      return new i(+e);
                    case N:
                      return (
                        (a = e),
                        (o = n ? ba(a.buffer) : a.buffer),
                        new a.constructor(o, a.byteOffset, a.byteLength)
                      );
                    case A:
                    case T:
                    case R:
                    case j:
                    case M:
                    case P:
                    case F:
                    case z:
                    case D:
                      return wa(e, n);
                    case m:
                      return new i();
                    case _:
                    case x:
                      return new i(e);
                    case S:
                      return (function (e) {
                        var t = new e.constructor(e.source, se.exec(e));
                        return (t.lastIndex = e.lastIndex), t;
                      })(e);
                    case k:
                      return new i();
                    case E:
                      return (r = e), Fn ? xe(Fn.call(r)) : {};
                  }
                })(t, L, u);
              }
            }
            i || (i = new Hn());
            var G = i.get(t);
            if (G) return G;
            i.set(t, l),
              al(t)
                ? t.forEach(function (e) {
                    l.add(or(e, n, r, e, t, i));
                  })
                : el(t) &&
                  t.forEach(function (e, a) {
                    l.set(a, or(e, n, r, a, t, i));
                  });
            var U = C ? e : (c ? (s ? eo : Za) : s ? Tl : Al)(t);
            return (
              St(U || t, function (e, a) {
                U && (e = t[(a = e)]), Xn(l, a, or(e, n, r, a, t, i));
              }),
              l
            );
          }
          function ir(t, n, r) {
            var a = r.length;
            if (null == t) return !a;
            for (t = xe(t); a--; ) {
              var o = r[a],
                i = n[o],
                l = t[o];
              if ((l === e && !(o in t)) || !i(l)) return !1;
            }
            return !0;
          }
          function lr(n, r, a) {
            if ("function" != typeof n) throw new Oe(t);
            return Oo(function () {
              n.apply(e, a);
            }, r);
          }
          function ur(e, t, n, r) {
            var a = -1,
              o = Ct,
              i = !0,
              l = e.length,
              u = [],
              s = t.length;
            if (!l) return u;
            n && (t = Nt(t, Ht(n))),
              r
                ? ((o = Ot), (i = !1))
                : t.length >= 200 && ((o = Yt), (i = !1), (t = new Vn(t)));
            e: for (; ++a < l; ) {
              var c = e[a],
                f = null == n ? c : n(c);
              if (((c = r || 0 !== c ? c : 0), i && f == f)) {
                for (var d = s; d--; ) if (t[d] === f) continue e;
                u.push(c);
              } else o(t, f, r) || u.push(c);
            }
            return u;
          }
          (Dn.templateSettings = {
            escape: V,
            evaluate: H,
            interpolate: q,
            variable: "",
            imports: { _: Dn },
          }),
            (Dn.prototype = In.prototype),
            (Dn.prototype.constructor = Dn),
            (Gn.prototype = Ln(In.prototype)),
            (Gn.prototype.constructor = Gn),
            (Un.prototype = Ln(In.prototype)),
            (Un.prototype.constructor = Un),
            ($n.prototype.clear = function () {
              (this.__data__ = Cn ? Cn(null) : {}), (this.size = 0);
            }),
            ($n.prototype.delete = function (e) {
              var t = this.has(e) && delete this.__data__[e];
              return (this.size -= t ? 1 : 0), t;
            }),
            ($n.prototype.get = function (t) {
              var r = this.__data__;
              if (Cn) {
                var a = r[t];
                return a === n ? e : a;
              }
              return Me.call(r, t) ? r[t] : e;
            }),
            ($n.prototype.has = function (t) {
              var n = this.__data__;
              return Cn ? n[t] !== e : Me.call(n, t);
            }),
            ($n.prototype.set = function (t, r) {
              var a = this.__data__;
              return (
                (this.size += this.has(t) ? 0 : 1),
                (a[t] = Cn && r === e ? n : r),
                this
              );
            }),
            (Bn.prototype.clear = function () {
              (this.__data__ = []), (this.size = 0);
            }),
            (Bn.prototype.delete = function (e) {
              var t = this.__data__,
                n = Zn(t, e);
              return !(
                n < 0 ||
                (n == t.length - 1 ? t.pop() : Qe.call(t, n, 1), --this.size, 0)
              );
            }),
            (Bn.prototype.get = function (t) {
              var n = this.__data__,
                r = Zn(n, t);
              return r < 0 ? e : n[r][1];
            }),
            (Bn.prototype.has = function (e) {
              return Zn(this.__data__, e) > -1;
            }),
            (Bn.prototype.set = function (e, t) {
              var n = this.__data__,
                r = Zn(n, e);
              return (
                r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
              );
            }),
            (Wn.prototype.clear = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new $n(),
                  map: new (Sn || Bn)(),
                  string: new $n(),
                });
            }),
            (Wn.prototype.delete = function (e) {
              var t = oo(this, e).delete(e);
              return (this.size -= t ? 1 : 0), t;
            }),
            (Wn.prototype.get = function (e) {
              return oo(this, e).get(e);
            }),
            (Wn.prototype.has = function (e) {
              return oo(this, e).has(e);
            }),
            (Wn.prototype.set = function (e, t) {
              var n = oo(this, e),
                r = n.size;
              return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
            }),
            (Vn.prototype.add = Vn.prototype.push =
              function (e) {
                return this.__data__.set(e, n), this;
              }),
            (Vn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Hn.prototype.clear = function () {
              (this.__data__ = new Bn()), (this.size = 0);
            }),
            (Hn.prototype.delete = function (e) {
              var t = this.__data__,
                n = t.delete(e);
              return (this.size = t.size), n;
            }),
            (Hn.prototype.get = function (e) {
              return this.__data__.get(e);
            }),
            (Hn.prototype.has = function (e) {
              return this.__data__.has(e);
            }),
            (Hn.prototype.set = function (e, t) {
              var n = this.__data__;
              if (n instanceof Bn) {
                var r = n.__data__;
                if (!Sn || r.length < 199)
                  return r.push([e, t]), (this.size = ++n.size), this;
                n = this.__data__ = new Wn(r);
              }
              return n.set(e, t), (this.size = n.size), this;
            });
          var sr = Aa(yr),
            cr = Aa(mr, !0);
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
            for (var a = -1, o = t.length; ++a < o; ) {
              var i = t[a],
                l = n(i);
              if (null != l && (u === e ? l == l && !il(l) : r(l, u)))
                var u = l,
                  s = i;
            }
            return s;
          }
          function pr(e, t) {
            var n = [];
            return (
              sr(e, function (e, r, a) {
                t(e, r, a) && n.push(e);
              }),
              n
            );
          }
          function hr(e, t, n, r, a) {
            var o = -1,
              i = e.length;
            for (n || (n = ho), a || (a = []); ++o < i; ) {
              var l = e[o];
              t > 0 && n(l)
                ? t > 1
                  ? hr(l, t - 1, n, r, a)
                  : At(a, l)
                : r || (a[a.length] = l);
            }
            return a;
          }
          var vr = Ta(),
            gr = Ta(!0);
          function yr(e, t) {
            return e && vr(e, t, Al);
          }
          function mr(e, t) {
            return e && gr(e, t, Al);
          }
          function _r(e, t) {
            return Et(t, function (t) {
              return Qi(e[t]);
            });
          }
          function br(t, n) {
            for (var r = 0, a = (n = va(n, t)).length; null != t && r < a; )
              t = t[Fo(n[r++])];
            return r && r == a ? t : e;
          }
          function wr(e, t, n) {
            var r = t(e);
            return $i(e) ? r : At(r, n(e));
          }
          function Sr(t) {
            return null == t
              ? t === e
                ? "[object Undefined]"
                : "[object Null]"
              : it && it in xe(t)
              ? (function (t) {
                  var r = Me.call(t, it),
                    a = t[it];
                  try {
                    t[it] = e;
                    var o = !0;
                  } catch (n) {}
                  var i = ze.call(t);
                  return o && (r ? (t[it] = a) : delete t[it]), i;
                })(t)
              : ((n = t), ze.call(n));
            var n;
          }
          function kr(e, t) {
            return e > t;
          }
          function xr(e, t) {
            return null != e && Me.call(e, t);
          }
          function Er(e, t) {
            return null != e && t in xe(e);
          }
          function Cr(t, n, r) {
            for (
              var a = r ? Ot : Ct,
                o = t[0].length,
                i = t.length,
                l = i,
                u = _e(i),
                s = 1 / 0,
                c = [];
              l--;

            ) {
              var f = t[l];
              l && n && (f = Nt(f, Ht(n))),
                (s = gn(f.length, s)),
                (u[l] =
                  !r && (n || (o >= 120 && f.length >= 120))
                    ? new Vn(l && f)
                    : e);
            }
            f = t[0];
            var d = -1,
              p = u[0];
            e: for (; ++d < o && c.length < s; ) {
              var h = f[d],
                v = n ? n(h) : h;
              if (((h = r || 0 !== h ? h : 0), !(p ? Yt(p, v) : a(c, v, r)))) {
                for (l = i; --l; ) {
                  var g = u[l];
                  if (!(g ? Yt(g, v) : a(t[l], v, r))) continue e;
                }
                p && p.push(v), c.push(h);
              }
            }
            return c;
          }
          function Or(t, n, r) {
            var a = null == (t = xo(t, (n = va(n, t)))) ? t : t[Fo(Yo(n))];
            return null == a ? e : bt(a, t, r);
          }
          function Nr(e) {
            return Zi(e) && Sr(e) == f;
          }
          function Ar(t, n, r, a, o) {
            return (
              t === n ||
              (null == t || null == n || (!Zi(t) && !Zi(n))
                ? t != t && n != n
                : (function (t, n, r, a, o, i) {
                    var l = $i(t),
                      u = $i(n),
                      s = l ? d : co(t),
                      c = u ? d : co(n),
                      g = (s = s == f ? b : s) == b,
                      y = (c = c == f ? b : c) == b,
                      w = s == c;
                    if (w && Hi(t)) {
                      if (!Hi(n)) return !1;
                      (l = !0), (g = !1);
                    }
                    if (w && !g)
                      return (
                        i || (i = new Hn()),
                        l || ll(t)
                          ? Ja(t, n, r, a, o, i)
                          : (function (e, t, n, r, a, o, i) {
                              switch (n) {
                                case N:
                                  if (
                                    e.byteLength != t.byteLength ||
                                    e.byteOffset != t.byteOffset
                                  )
                                    return !1;
                                  (e = e.buffer), (t = t.buffer);
                                case O:
                                  return !(
                                    e.byteLength != t.byteLength ||
                                    !o(new $e(e), new $e(t))
                                  );
                                case p:
                                case h:
                                case _:
                                  return Li(+e, +t);
                                case v:
                                  return (
                                    e.name == t.name && e.message == t.message
                                  );
                                case S:
                                case x:
                                  return e == t + "";
                                case m:
                                  var l = tn;
                                case k:
                                  var u = 1 & r;
                                  if ((l || (l = an), e.size != t.size && !u))
                                    return !1;
                                  var s = i.get(e);
                                  if (s) return s == t;
                                  (r |= 2), i.set(e, t);
                                  var c = Ja(l(e), l(t), r, a, o, i);
                                  return i.delete(e), c;
                                case E:
                                  if (Fn) return Fn.call(e) == Fn.call(t);
                              }
                              return !1;
                            })(t, n, s, r, a, o, i)
                      );
                    if (!(1 & r)) {
                      var C = g && Me.call(t, "__wrapped__"),
                        A = y && Me.call(n, "__wrapped__");
                      if (C || A) {
                        var T = C ? t.value() : t,
                          R = A ? n.value() : n;
                        return i || (i = new Hn()), o(T, R, r, a, i);
                      }
                    }
                    return (
                      !!w &&
                      (i || (i = new Hn()),
                      (function (t, n, r, a, o, i) {
                        var l = 1 & r,
                          u = Za(t),
                          s = u.length;
                        if (s != Za(n).length && !l) return !1;
                        for (var c = s; c--; ) {
                          var f = u[c];
                          if (!(l ? f in n : Me.call(n, f))) return !1;
                        }
                        var d = i.get(t),
                          p = i.get(n);
                        if (d && p) return d == n && p == t;
                        var h = !0;
                        i.set(t, n), i.set(n, t);
                        for (var v = l; ++c < s; ) {
                          var g = t[(f = u[c])],
                            y = n[f];
                          if (a)
                            var m = l
                              ? a(y, g, f, n, t, i)
                              : a(g, y, f, t, n, i);
                          if (!(m === e ? g === y || o(g, y, r, a, i) : m)) {
                            h = !1;
                            break;
                          }
                          v || (v = "constructor" == f);
                        }
                        if (h && !v) {
                          var _ = t.constructor,
                            b = n.constructor;
                          _ == b ||
                            !("constructor" in t) ||
                            !("constructor" in n) ||
                            ("function" == typeof _ &&
                              _ instanceof _ &&
                              "function" == typeof b &&
                              b instanceof b) ||
                            (h = !1);
                        }
                        return i.delete(t), i.delete(n), h;
                      })(t, n, r, a, o, i))
                    );
                  })(t, n, r, a, Ar, o))
            );
          }
          function Tr(t, n, r, a) {
            var o = r.length,
              i = o,
              l = !a;
            if (null == t) return !i;
            for (t = xe(t); o--; ) {
              var u = r[o];
              if (l && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
            }
            for (; ++o < i; ) {
              var s = (u = r[o])[0],
                c = t[s],
                f = u[1];
              if (l && u[2]) {
                if (c === e && !(s in t)) return !1;
              } else {
                var d = new Hn();
                if (a) var p = a(c, f, s, t, n, d);
                if (!(p === e ? Ar(f, c, 3, a, d) : p)) return !1;
              }
            }
            return !0;
          }
          function Rr(e) {
            return (
              !(!Xi(e) || ((t = e), Fe && Fe in t)) &&
              (Qi(e) ? Ie : de).test(zo(e))
            );
            var t;
          }
          function jr(e) {
            return "function" == typeof e
              ? e
              : null == e
              ? tu
              : "object" == typeof e
              ? $i(e)
                ? Dr(e[0], e[1])
                : zr(e)
              : cu(e);
          }
          function Mr(e) {
            if (!bo(e)) return hn(e);
            var t = [];
            for (var n in xe(e))
              Me.call(e, n) && "constructor" != n && t.push(n);
            return t;
          }
          function Pr(e, t) {
            return e < t;
          }
          function Fr(e, t) {
            var n = -1,
              r = Wi(e) ? _e(e.length) : [];
            return (
              sr(e, function (e, a, o) {
                r[++n] = t(e, a, o);
              }),
              r
            );
          }
          function zr(e) {
            var t = io(e);
            return 1 == t.length && t[0][2]
              ? So(t[0][0], t[0][1])
              : function (n) {
                  return n === e || Tr(n, e, t);
                };
          }
          function Dr(t, n) {
            return yo(t) && wo(n)
              ? So(Fo(t), n)
              : function (r) {
                  var a = xl(r, t);
                  return a === e && a === n ? El(r, t) : Ar(n, a, 3);
                };
          }
          function Lr(t, n, r, a, o) {
            t !== n &&
              vr(
                n,
                function (i, l) {
                  if ((o || (o = new Hn()), Xi(i)))
                    !(function (t, n, r, a, o, i, l) {
                      var u = Eo(t, r),
                        s = Eo(n, r),
                        c = l.get(s);
                      if (c) Jn(t, r, c);
                      else {
                        var f = i ? i(u, s, r + "", t, n, l) : e,
                          d = f === e;
                        if (d) {
                          var p = $i(s),
                            h = !p && Hi(s),
                            v = !p && !h && ll(s);
                          (f = s),
                            p || h || v
                              ? $i(u)
                                ? (f = u)
                                : Vi(u)
                                ? (f = Ea(u))
                                : h
                                ? ((d = !1), (f = _a(s, !0)))
                                : v
                                ? ((d = !1), (f = wa(s, !0)))
                                : (f = [])
                              : nl(s) || Ui(s)
                              ? ((f = u),
                                Ui(u)
                                  ? (f = vl(u))
                                  : (Xi(u) && !Qi(u)) || (f = po(s)))
                              : (d = !1);
                        }
                        d && (l.set(s, f), o(f, s, a, i, l), l.delete(s)),
                          Jn(t, r, f);
                      }
                    })(t, n, l, r, Lr, a, o);
                  else {
                    var u = a ? a(Eo(t, l), i, l + "", t, n, o) : e;
                    u === e && (u = i), Jn(t, l, u);
                  }
                },
                Tl
              );
          }
          function Ir(t, n) {
            var r = t.length;
            if (r) return vo((n += n < 0 ? r : 0), r) ? t[n] : e;
          }
          function Gr(e, t, n) {
            t = t.length
              ? Nt(t, function (e) {
                  return $i(e)
                    ? function (t) {
                        return br(t, 1 === e.length ? e[0] : e);
                      }
                    : e;
                })
              : [tu];
            var r = -1;
            return (
              (t = Nt(t, Ht(ao()))),
              (function (e) {
                var t = e.length;
                for (
                  e.sort(function (e, t) {
                    return (function (e, t, n) {
                      for (
                        var r = -1,
                          a = e.criteria,
                          o = t.criteria,
                          i = a.length,
                          l = n.length;
                        ++r < i;

                      ) {
                        var u = Sa(a[r], o[r]);
                        if (u)
                          return r >= l ? u : u * ("desc" == n[r] ? -1 : 1);
                      }
                      return e.index - t.index;
                    })(e, t, n);
                  });
                  t--;

                )
                  e[t] = e[t].value;
                return e;
              })(
                Fr(e, function (e, n, a) {
                  return {
                    criteria: Nt(t, function (t) {
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
            for (var r = -1, a = t.length, o = {}; ++r < a; ) {
              var i = t[r],
                l = br(e, i);
              n(l, i) && Qr(o, va(i, e), l);
            }
            return o;
          }
          function $r(e, t, n, r) {
            var a = r ? Dt : zt,
              o = -1,
              i = t.length,
              l = e;
            for (e === t && (t = Ea(t)), n && (l = Nt(e, Ht(n))); ++o < i; )
              for (
                var u = 0, s = t[o], c = n ? n(s) : s;
                (u = a(l, c, u, r)) > -1;

              )
                l !== e && Qe.call(l, u, 1), Qe.call(e, u, 1);
            return e;
          }
          function Br(e, t) {
            for (var n = e ? t.length : 0, r = n - 1; n--; ) {
              var a = t[n];
              if (n == r || a !== o) {
                var o = a;
                vo(a) ? Qe.call(e, a, 1) : la(e, a);
              }
            }
            return e;
          }
          function Wr(e, t) {
            return e + Mt(_n() * (t - e + 1));
          }
          function Vr(e, t) {
            var n = "";
            if (!e || t < 1 || t > l) return n;
            do {
              t % 2 && (n += e), (t = Mt(t / 2)) && (e += e);
            } while (t);
            return n;
          }
          function Hr(e, t) {
            return No(ko(e, t, tu), e + "");
          }
          function qr(e) {
            return Yn(Ll(e));
          }
          function Yr(e, t) {
            var n = Ll(e);
            return Ro(n, ar(t, 0, n.length));
          }
          function Qr(t, n, r, a) {
            if (!Xi(t)) return t;
            for (
              var o = -1, i = (n = va(n, t)).length, l = i - 1, u = t;
              null != u && ++o < i;

            ) {
              var s = Fo(n[o]),
                c = r;
              if ("__proto__" === s || "constructor" === s || "prototype" === s)
                return t;
              if (o != l) {
                var f = u[s];
                (c = a ? a(f, s, u) : e) === e &&
                  (c = Xi(f) ? f : vo(n[o + 1]) ? [] : {});
              }
              Xn(u, s, c), (u = u[s]);
            }
            return t;
          }
          var Kr = On
              ? function (e, t) {
                  return On.set(e, t), e;
                }
              : tu,
            Jr = lt
              ? function (e, t) {
                  return lt(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: Xl(t),
                    writable: !0,
                  });
                }
              : tu;
          function Xr(e) {
            return Ro(Ll(e));
          }
          function Zr(e, t, n) {
            var r = -1,
              a = e.length;
            t < 0 && (t = -t > a ? 0 : a + t),
              (n = n > a ? a : n) < 0 && (n += a),
              (a = t > n ? 0 : (n - t) >>> 0),
              (t >>>= 0);
            for (var o = _e(a); ++r < a; ) o[r] = e[r + t];
            return o;
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
                var o = (r + a) >>> 1,
                  i = e[o];
                null !== i && !il(i) && (n ? i <= t : i < t)
                  ? (r = o + 1)
                  : (a = o);
              }
              return a;
            }
            return na(e, t, tu, n);
          }
          function na(t, n, r, a) {
            var o = 0,
              i = null == t ? 0 : t.length;
            if (0 === i) return 0;
            for (
              var l = (n = r(n)) != n, u = null === n, s = il(n), c = n === e;
              o < i;

            ) {
              var f = Mt((o + i) / 2),
                d = r(t[f]),
                p = d !== e,
                h = null === d,
                v = d == d,
                g = il(d);
              if (l) var y = a || v;
              else
                y = c
                  ? v && (a || p)
                  : u
                  ? v && p && (a || !h)
                  : s
                  ? v && p && !h && (a || !g)
                  : !h && !g && (a ? d <= n : d < n);
              y ? (o = f + 1) : (i = f);
            }
            return gn(i, 4294967294);
          }
          function ra(e, t) {
            for (var n = -1, r = e.length, a = 0, o = []; ++n < r; ) {
              var i = e[n],
                l = t ? t(i) : i;
              if (!n || !Li(l, u)) {
                var u = l;
                o[a++] = 0 === i ? 0 : i;
              }
            }
            return o;
          }
          function aa(e) {
            return "number" == typeof e ? e : il(e) ? u : +e;
          }
          function oa(e) {
            if ("string" == typeof e) return e;
            if ($i(e)) return Nt(e, oa) + "";
            if (il(e)) return zn ? zn.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function ia(e, t, n) {
            var r = -1,
              a = Ct,
              o = e.length,
              i = !0,
              l = [],
              u = l;
            if (n) (i = !1), (a = Ot);
            else if (o >= 200) {
              var s = t ? null : Va(e);
              if (s) return an(s);
              (i = !1), (a = Yt), (u = new Vn());
            } else u = t ? [] : l;
            e: for (; ++r < o; ) {
              var c = e[r],
                f = t ? t(c) : c;
              if (((c = n || 0 !== c ? c : 0), i && f == f)) {
                for (var d = u.length; d--; ) if (u[d] === f) continue e;
                t && u.push(f), l.push(c);
              } else a(u, f, n) || (u !== l && u.push(f), l.push(c));
            }
            return l;
          }
          function la(e, t) {
            return null == (e = xo(e, (t = va(t, e)))) || delete e[Fo(Yo(t))];
          }
          function ua(e, t, n, r) {
            return Qr(e, t, n(br(e, t)), r);
          }
          function sa(e, t, n, r) {
            for (
              var a = e.length, o = r ? a : -1;
              (r ? o-- : ++o < a) && t(e[o], o, e);

            );
            return n
              ? Zr(e, r ? 0 : o, r ? o + 1 : a)
              : Zr(e, r ? o + 1 : 0, r ? a : o);
          }
          function ca(e, t) {
            var n = e;
            return (
              n instanceof Un && (n = n.value()),
              Tt(
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
            if (r < 2) return r ? ia(e[0]) : [];
            for (var a = -1, o = _e(r); ++a < r; )
              for (var i = e[a], l = -1; ++l < r; )
                l != a && (o[a] = ur(o[a] || i, e[l], t, n));
            return ia(hr(o, 1), t, n);
          }
          function da(t, n, r) {
            for (var a = -1, o = t.length, i = n.length, l = {}; ++a < o; ) {
              var u = a < i ? n[a] : e;
              r(l, t[a], u);
            }
            return l;
          }
          function pa(e) {
            return Vi(e) ? e : [];
          }
          function ha(e) {
            return "function" == typeof e ? e : tu;
          }
          function va(e, t) {
            return $i(e) ? e : yo(e, t) ? [e] : Po(gl(e));
          }
          var ga = Hr;
          function ya(t, n, r) {
            var a = t.length;
            return (r = r === e ? a : r), !n && r >= a ? t : Zr(t, n, r);
          }
          var ma =
            st ||
            function (e) {
              return ut.clearTimeout(e);
            };
          function _a(e, t) {
            if (t) return e.slice();
            var n = e.length,
              r = Be ? Be(n) : new e.constructor(n);
            return e.copy(r), r;
          }
          function ba(e) {
            var t = new e.constructor(e.byteLength);
            return new $e(t).set(new $e(e)), t;
          }
          function wa(e, t) {
            var n = t ? ba(e.buffer) : e.buffer;
            return new e.constructor(n, e.byteOffset, e.length);
          }
          function Sa(t, n) {
            if (t !== n) {
              var r = t !== e,
                a = null === t,
                o = t == t,
                i = il(t),
                l = n !== e,
                u = null === n,
                s = n == n,
                c = il(n);
              if (
                (!u && !c && !i && t > n) ||
                (i && l && s && !u && !c) ||
                (a && l && s) ||
                (!r && s) ||
                !o
              )
                return 1;
              if (
                (!a && !i && !c && t < n) ||
                (c && r && o && !a && !i) ||
                (u && r && o) ||
                (!l && o) ||
                !s
              )
                return -1;
            }
            return 0;
          }
          function ka(e, t, n, r) {
            for (
              var a = -1,
                o = e.length,
                i = n.length,
                l = -1,
                u = t.length,
                s = vn(o - i, 0),
                c = _e(u + s),
                f = !r;
              ++l < u;

            )
              c[l] = t[l];
            for (; ++a < i; ) (f || a < o) && (c[n[a]] = e[a]);
            for (; s--; ) c[l++] = e[a++];
            return c;
          }
          function xa(e, t, n, r) {
            for (
              var a = -1,
                o = e.length,
                i = -1,
                l = n.length,
                u = -1,
                s = t.length,
                c = vn(o - l, 0),
                f = _e(c + s),
                d = !r;
              ++a < c;

            )
              f[a] = e[a];
            for (var p = a; ++u < s; ) f[p + u] = t[u];
            for (; ++i < l; ) (d || a < o) && (f[p + n[i]] = e[a++]);
            return f;
          }
          function Ea(e, t) {
            var n = -1,
              r = e.length;
            for (t || (t = _e(r)); ++n < r; ) t[n] = e[n];
            return t;
          }
          function Ca(t, n, r, a) {
            var o = !r;
            r || (r = {});
            for (var i = -1, l = n.length; ++i < l; ) {
              var u = n[i],
                s = a ? a(r[u], t[u], u, r, t) : e;
              s === e && (s = t[u]), o ? nr(r, u, s) : Xn(r, u, s);
            }
            return r;
          }
          function Oa(e, t) {
            return function (n, r) {
              var a = $i(n) ? wt : er,
                o = t ? t() : {};
              return a(n, e, ao(r, 2), o);
            };
          }
          function Na(t) {
            return Hr(function (n, r) {
              var a = -1,
                o = r.length,
                i = o > 1 ? r[o - 1] : e,
                l = o > 2 ? r[2] : e;
              for (
                i = t.length > 3 && "function" == typeof i ? (o--, i) : e,
                  l && go(r[0], r[1], l) && ((i = o < 3 ? e : i), (o = 1)),
                  n = xe(n);
                ++a < o;

              ) {
                var u = r[a];
                u && t(n, u, a, i);
              }
              return n;
            });
          }
          function Aa(e, t) {
            return function (n, r) {
              if (null == n) return n;
              if (!Wi(n)) return e(n, r);
              for (
                var a = n.length, o = t ? a : -1, i = xe(n);
                (t ? o-- : ++o < a) && !1 !== r(i[o], o, i);

              );
              return n;
            };
          }
          function Ta(e) {
            return function (t, n, r) {
              for (var a = -1, o = xe(t), i = r(t), l = i.length; l--; ) {
                var u = i[e ? l : ++a];
                if (!1 === n(o[u], u, o)) break;
              }
              return t;
            };
          }
          function Ra(t) {
            return function (n) {
              var r = en((n = gl(n))) ? ln(n) : e,
                a = r ? r[0] : n.charAt(0),
                o = r ? ya(r, 1).join("") : n.slice(1);
              return a[t]() + o;
            };
          }
          function ja(e) {
            return function (t) {
              return Tt(Ql(Ul(t).replace(qe, "")), e, "");
            };
          }
          function Ma(e) {
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
              var n = Ln(e.prototype),
                r = e.apply(n, t);
              return Xi(r) ? r : n;
            };
          }
          function Pa(t) {
            return function (n, r, a) {
              var o = xe(n);
              if (!Wi(n)) {
                var i = ao(r, 3);
                (n = Al(n)),
                  (r = function (e) {
                    return i(o[e], e, o);
                  });
              }
              var l = t(n, r, a);
              return l > -1 ? o[i ? n[l] : l] : e;
            };
          }
          function Fa(n) {
            return Xa(function (r) {
              var a = r.length,
                o = a,
                i = Gn.prototype.thru;
              for (n && r.reverse(); o--; ) {
                var l = r[o];
                if ("function" != typeof l) throw new Oe(t);
                if (i && !u && "wrapper" == no(l)) var u = new Gn([], !0);
              }
              for (o = u ? o : a; ++o < a; ) {
                var s = no((l = r[o])),
                  c = "wrapper" == s ? to(l) : e;
                u =
                  c && mo(c[0]) && 424 == c[1] && !c[4].length && 1 == c[9]
                    ? u[no(c[0])].apply(u, c[3])
                    : 1 == l.length && mo(l)
                    ? u[s]()
                    : u.thru(l);
              }
              return function () {
                var e = arguments,
                  t = e[0];
                if (u && 1 == e.length && $i(t)) return u.plant(t).value();
                for (var n = 0, o = a ? r[n].apply(this, e) : t; ++n < a; )
                  o = r[n].call(this, o);
                return o;
              };
            });
          }
          function za(t, n, r, a, i, l, u, s, c, f) {
            var d = n & o,
              p = 1 & n,
              h = 2 & n,
              v = 24 & n,
              g = 512 & n,
              y = h ? e : Ma(t);
            return function o() {
              for (var m = arguments.length, _ = _e(m), b = m; b--; )
                _[b] = arguments[b];
              if (v)
                var w = ro(o),
                  S = (function (e, t) {
                    for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
                    return r;
                  })(_, w);
              if (
                (a && (_ = ka(_, a, i, v)),
                l && (_ = xa(_, l, u, v)),
                (m -= S),
                v && m < f)
              ) {
                var k = rn(_, w);
                return Ba(t, n, za, o.placeholder, r, _, k, s, c, f - m);
              }
              var x = p ? r : this,
                E = h ? x[t] : t;
              return (
                (m = _.length),
                s
                  ? (_ = (function (t, n) {
                      for (
                        var r = t.length, a = gn(n.length, r), o = Ea(t);
                        a--;

                      ) {
                        var i = n[a];
                        t[a] = vo(i, r) ? o[i] : e;
                      }
                      return t;
                    })(_, s))
                  : g && m > 1 && _.reverse(),
                d && c < m && (_.length = c),
                this && this !== ut && this instanceof o && (E = y || Ma(E)),
                E.apply(x, _)
              );
            };
          }
          function Da(e, t) {
            return function (n, r) {
              return (
                (a = n),
                (o = e),
                (i = t(r)),
                (l = {}),
                yr(a, function (e, t, n) {
                  o(l, i(e), t, n);
                }),
                l
              );
              var a, o, i, l;
            };
          }
          function La(t, n) {
            return function (r, a) {
              var o;
              if (r === e && a === e) return n;
              if ((r !== e && (o = r), a !== e)) {
                if (o === e) return a;
                "string" == typeof r || "string" == typeof a
                  ? ((r = oa(r)), (a = oa(a)))
                  : ((r = aa(r)), (a = aa(a))),
                  (o = t(r, a));
              }
              return o;
            };
          }
          function Ia(e) {
            return Xa(function (t) {
              return (
                (t = Nt(t, Ht(ao()))),
                Hr(function (n) {
                  var r = this;
                  return e(t, function (e) {
                    return bt(e, r, n);
                  });
                })
              );
            });
          }
          function Ga(t, n) {
            var r = (n = n === e ? " " : oa(n)).length;
            if (r < 2) return r ? Vr(n, t) : n;
            var a = Vr(n, pt(t / on(n)));
            return en(n) ? ya(ln(a), 0, t).join("") : a.slice(0, t);
          }
          function Ua(t) {
            return function (n, r, a) {
              return (
                a && "number" != typeof a && go(n, r, a) && (r = a = e),
                (n = fl(n)),
                r === e ? ((r = n), (n = 0)) : (r = fl(r)),
                (function (e, t, n, r) {
                  for (
                    var a = -1, o = vn(pt((t - e) / (n || 1)), 0), i = _e(o);
                    o--;

                  )
                    (i[r ? o : ++a] = e), (e += n);
                  return i;
                })(n, r, (a = a === e ? (n < r ? 1 : -1) : fl(a)), t)
              );
            };
          }
          function $a(e) {
            return function (t, n) {
              return (
                ("string" == typeof t && "string" == typeof n) ||
                  ((t = hl(t)), (n = hl(n))),
                e(t, n)
              );
            };
          }
          function Ba(t, n, r, o, i, l, u, s, c, f) {
            var d = 8 & n;
            (n |= d ? a : 64), 4 & (n &= ~(d ? 64 : a)) || (n &= -4);
            var p = [
                t,
                n,
                i,
                d ? l : e,
                d ? u : e,
                d ? e : l,
                d ? e : u,
                s,
                c,
                f,
              ],
              h = r.apply(e, p);
            return mo(t) && Co(h, p), (h.placeholder = o), Ao(h, t, n);
          }
          function Wa(e) {
            var t = ke[e];
            return function (e, n) {
              if (
                ((e = hl(e)), (n = null == n ? 0 : gn(dl(n), 292)) && dn(e))
              ) {
                var r = (gl(e) + "e").split("e");
                return +(
                  (r = (gl(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] +
                  "e" +
                  (+r[1] - n)
                );
              }
              return t(e);
            };
          }
          var Va =
            xn && 1 / an(new xn([, -0]))[1] == i
              ? function (e) {
                  return new xn(e);
                }
              : iu;
          function Ha(e) {
            return function (t) {
              var n,
                r = co(t);
              return r == m
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
                  Nt(e(t), function (e) {
                    return [e, n[e]];
                  }));
            };
          }
          function qa(n, i, l, u, s, c, f, d) {
            var p = 2 & i;
            if (!p && "function" != typeof n) throw new Oe(t);
            var h = u ? u.length : 0;
            if (
              (h || ((i &= -97), (u = s = e)),
              (f = f === e ? f : vn(dl(f), 0)),
              (d = d === e ? d : dl(d)),
              (h -= s ? s.length : 0),
              64 & i)
            ) {
              var v = u,
                g = s;
              u = s = e;
            }
            var y,
              m,
              _,
              b,
              w = p ? e : to(n),
              S = [n, i, l, u, s, v, g, c, f, d];
            if (
              (w &&
                (function (e, t) {
                  var n = e[1],
                    a = t[1],
                    i = n | a,
                    l = i < 131,
                    u =
                      (a == o && 8 == n) ||
                      (a == o && 256 == n && e[7].length <= t[8]) ||
                      (384 == a && t[7].length <= t[8] && 8 == n);
                  if (!l && !u) return e;
                  1 & a && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                  var s = t[3];
                  if (s) {
                    var c = e[3];
                    (e[3] = c ? ka(c, s, t[4]) : s),
                      (e[4] = c ? rn(e[3], r) : t[4]);
                  }
                  (s = t[5]) &&
                    ((c = e[5]),
                    (e[5] = c ? xa(c, s, t[6]) : s),
                    (e[6] = c ? rn(e[5], r) : t[6])),
                    (s = t[7]) && (e[7] = s),
                    a & o && (e[8] = null == e[8] ? t[8] : gn(e[8], t[8])),
                    null == e[9] && (e[9] = t[9]),
                    (e[0] = t[0]),
                    (e[1] = i);
                })(S, w),
              (n = S[0]),
              (i = S[1]),
              (l = S[2]),
              (u = S[3]),
              (s = S[4]),
              !(d = S[9] = S[9] === e ? (p ? 0 : n.length) : vn(S[9] - h, 0)) &&
                24 & i &&
                (i &= -25),
              i && 1 != i)
            )
              k =
                8 == i || 16 == i
                  ? ((m = i),
                    (_ = d),
                    (b = Ma((y = n))),
                    function t() {
                      for (
                        var n = arguments.length, r = _e(n), a = n, o = ro(t);
                        a--;

                      )
                        r[a] = arguments[a];
                      var i =
                        n < 3 && r[0] !== o && r[n - 1] !== o ? [] : rn(r, o);
                      return (n -= i.length) < _
                        ? Ba(y, m, za, t.placeholder, e, r, i, e, e, _ - n)
                        : bt(
                            this && this !== ut && this instanceof t ? b : y,
                            this,
                            r
                          );
                    })
                  : (i != a && 33 != i) || s.length
                  ? za.apply(e, S)
                  : (function (e, t, n, r) {
                      var a = 1 & t,
                        o = Ma(e);
                      return function t() {
                        for (
                          var i = -1,
                            l = arguments.length,
                            u = -1,
                            s = r.length,
                            c = _e(s + l),
                            f =
                              this && this !== ut && this instanceof t ? o : e;
                          ++u < s;

                        )
                          c[u] = r[u];
                        for (; l--; ) c[u++] = arguments[++i];
                        return bt(f, a ? n : this, c);
                      };
                    })(n, i, l, u);
            else
              var k = (function (e, t, n) {
                var r = 1 & t,
                  a = Ma(e);
                return function t() {
                  return (
                    this && this !== ut && this instanceof t ? a : e
                  ).apply(r ? n : this, arguments);
                };
              })(n, i, l);
            return Ao((w ? Kr : Co)(k, S), n, i);
          }
          function Ya(t, n, r, a) {
            return t === e || (Li(t, Te[r]) && !Me.call(a, r)) ? n : t;
          }
          function Qa(t, n, r, a, o, i) {
            return (
              Xi(t) && Xi(n) && (i.set(n, t), Lr(t, n, e, Qa, i), i.delete(n)),
              t
            );
          }
          function Ka(t) {
            return nl(t) ? e : t;
          }
          function Ja(t, n, r, a, o, i) {
            var l = 1 & r,
              u = t.length,
              s = n.length;
            if (u != s && !(l && s > u)) return !1;
            var c = i.get(t),
              f = i.get(n);
            if (c && f) return c == n && f == t;
            var d = -1,
              p = !0,
              h = 2 & r ? new Vn() : e;
            for (i.set(t, n), i.set(n, t); ++d < u; ) {
              var v = t[d],
                g = n[d];
              if (a) var y = l ? a(g, v, d, n, t, i) : a(v, g, d, t, n, i);
              if (y !== e) {
                if (y) continue;
                p = !1;
                break;
              }
              if (h) {
                if (
                  !jt(n, function (e, t) {
                    if (!Yt(h, t) && (v === e || o(v, e, r, a, i)))
                      return h.push(t);
                  })
                ) {
                  p = !1;
                  break;
                }
              } else if (v !== g && !o(v, g, r, a, i)) {
                p = !1;
                break;
              }
            }
            return i.delete(t), i.delete(n), p;
          }
          function Xa(t) {
            return No(ko(t, e, Bo), t + "");
          }
          function Za(e) {
            return wr(e, Al, uo);
          }
          function eo(e) {
            return wr(e, Tl, so);
          }
          var to = On
            ? function (e) {
                return On.get(e);
              }
            : iu;
          function no(e) {
            for (
              var t = e.name + "", n = Nn[t], r = Me.call(Nn, t) ? n.length : 0;
              r--;

            ) {
              var a = n[r],
                o = a.func;
              if (null == o || o == e) return a.name;
            }
            return t;
          }
          function ro(e) {
            return (Me.call(Dn, "placeholder") ? Dn : e).placeholder;
          }
          function ao() {
            var e = Dn.iteratee || nu;
            return (
              (e = e === nu ? jr : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function oo(e, t) {
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
          function io(e) {
            for (var t = Al(e), n = t.length; n--; ) {
              var r = t[n],
                a = e[r];
              t[n] = [r, a, wo(a)];
            }
            return t;
          }
          function lo(t, n) {
            var r,
              a,
              o = ((a = n), null == (r = t) ? e : r[a]);
            return Rr(o) ? o : e;
          }
          var uo = Ut
              ? function (e) {
                  return null == e
                    ? []
                    : ((e = xe(e)),
                      Et(Ut(e), function (t) {
                        return He.call(e, t);
                      }));
                }
              : pu,
            so = Ut
              ? function (e) {
                  for (var t = []; e; ) At(t, uo(e)), (e = We(e));
                  return t;
                }
              : pu,
            co = Sr;
          function fo(e, t, n) {
            for (var r = -1, a = (t = va(t, e)).length, o = !1; ++r < a; ) {
              var i = Fo(t[r]);
              if (!(o = null != e && n(e, i))) break;
              e = e[i];
            }
            return o || ++r != a
              ? o
              : !!(a = null == e ? 0 : e.length) &&
                  Ji(a) &&
                  vo(i, a) &&
                  ($i(e) || Ui(e));
          }
          function po(e) {
            return "function" != typeof e.constructor || bo(e) ? {} : Ln(We(e));
          }
          function ho(e) {
            return $i(e) || Ui(e) || !!(Je && e && e[Je]);
          }
          function vo(e, t) {
            var n = typeof e;
            return (
              !!(t = null == t ? l : t) &&
              ("number" == n || ("symbol" != n && he.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < t
            );
          }
          function go(e, t, n) {
            if (!Xi(n)) return !1;
            var r = typeof t;
            return (
              !!("number" == r
                ? Wi(n) && vo(t, n.length)
                : "string" == r && t in n) && Li(n[t], e)
            );
          }
          function yo(e, t) {
            if ($i(e)) return !1;
            var n = typeof e;
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != e &&
                !il(e)
              ) ||
              K.test(e) ||
              !Y.test(e) ||
              (null != t && e in xe(t))
            );
          }
          function mo(e) {
            var t = no(e),
              n = Dn[t];
            if ("function" != typeof n || !(t in Un.prototype)) return !1;
            if (e === n) return !0;
            var r = to(n);
            return !!r && e === r[0];
          }
          ((wn && co(new wn(new ArrayBuffer(1))) != N) ||
            (Sn && co(new Sn()) != m) ||
            (kn && co(kn.resolve()) != w) ||
            (xn && co(new xn()) != k) ||
            (En && co(new En()) != C)) &&
            (co = function (t) {
              var n = Sr(t),
                r = n == b ? t.constructor : e,
                a = r ? zo(r) : "";
              if (a)
                switch (a) {
                  case An:
                    return N;
                  case Tn:
                    return m;
                  case Rn:
                    return w;
                  case jn:
                    return k;
                  case Mn:
                    return C;
                }
              return n;
            });
          var _o = Re ? Qi : hu;
          function bo(e) {
            var t = e && e.constructor;
            return e === (("function" == typeof t && t.prototype) || Te);
          }
          function wo(e) {
            return e == e && !Xi(e);
          }
          function So(t, n) {
            return function (r) {
              return null != r && r[t] === n && (n !== e || t in xe(r));
            };
          }
          function ko(t, n, r) {
            return (
              (n = vn(n === e ? t.length - 1 : n, 0)),
              function () {
                for (
                  var e = arguments, a = -1, o = vn(e.length - n, 0), i = _e(o);
                  ++a < o;

                )
                  i[a] = e[n + a];
                a = -1;
                for (var l = _e(n + 1); ++a < n; ) l[a] = e[a];
                return (l[n] = r(i)), bt(t, this, l);
              }
            );
          }
          function xo(e, t) {
            return t.length < 2 ? e : br(e, Zr(t, 0, -1));
          }
          function Eo(e, t) {
            if (
              ("constructor" !== t || "function" != typeof e[t]) &&
              "__proto__" != t
            )
              return e[t];
          }
          var Co = To(Kr),
            Oo =
              dt ||
              function (e, t) {
                return ut.setTimeout(e, t);
              },
            No = To(Jr);
          function Ao(e, t, n) {
            var r,
              a = t + "";
            return No(
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
                    St(c, function (n) {
                      var r = "_." + n[0];
                      t & n[1] && !Ct(e, r) && e.push(r);
                    }),
                    e.sort()
                  );
                })((r = a.match(re)) ? r[1].split(ae) : [], n)
              )
            );
          }
          function To(t) {
            var n = 0,
              r = 0;
            return function () {
              var a = yn(),
                o = 16 - (a - r);
              if (((r = a), o > 0)) {
                if (++n >= 800) return arguments[0];
              } else n = 0;
              return t.apply(e, arguments);
            };
          }
          function Ro(t, n) {
            var r = -1,
              a = t.length,
              o = a - 1;
            for (n = n === e ? a : n; ++r < n; ) {
              var i = Wr(r, o),
                l = t[i];
              (t[i] = t[r]), (t[r] = l);
            }
            return (t.length = n), t;
          }
          var jo,
            Mo,
            Po =
              ((jo = ji(
                function (e) {
                  var t = [];
                  return (
                    46 === e.charCodeAt(0) && t.push(""),
                    e.replace(J, function (e, n, r, a) {
                      t.push(r ? a.replace(le, "$1") : n || e);
                    }),
                    t
                  );
                },
                function (e) {
                  return 500 === Mo.size && Mo.clear(), e;
                }
              )),
              (Mo = jo.cache),
              jo);
          function Fo(e) {
            if ("string" == typeof e || il(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
          }
          function zo(e) {
            if (null != e) {
              try {
                return je.call(e);
              } catch (t) {}
              try {
                return e + "";
              } catch (t) {}
            }
            return "";
          }
          function Do(e) {
            if (e instanceof Un) return e.clone();
            var t = new Gn(e.__wrapped__, e.__chain__);
            return (
              (t.__actions__ = Ea(e.__actions__)),
              (t.__index__ = e.__index__),
              (t.__values__ = e.__values__),
              t
            );
          }
          var Lo = Hr(function (e, t) {
              return Vi(e) ? ur(e, hr(t, 1, Vi, !0)) : [];
            }),
            Io = Hr(function (t, n) {
              var r = Yo(n);
              return (
                Vi(r) && (r = e), Vi(t) ? ur(t, hr(n, 1, Vi, !0), ao(r, 2)) : []
              );
            }),
            Go = Hr(function (t, n) {
              var r = Yo(n);
              return (
                Vi(r) && (r = e), Vi(t) ? ur(t, hr(n, 1, Vi, !0), e, r) : []
              );
            });
          function Uo(e, t, n) {
            var r = null == e ? 0 : e.length;
            if (!r) return -1;
            var a = null == n ? 0 : dl(n);
            return a < 0 && (a = vn(r + a, 0)), Ft(e, ao(t, 3), a);
          }
          function $o(t, n, r) {
            var a = null == t ? 0 : t.length;
            if (!a) return -1;
            var o = a - 1;
            return (
              r !== e &&
                ((o = dl(r)), (o = r < 0 ? vn(a + o, 0) : gn(o, a - 1))),
              Ft(t, ao(n, 3), o, !0)
            );
          }
          function Bo(e) {
            return null != e && e.length ? hr(e, 1) : [];
          }
          function Wo(t) {
            return t && t.length ? t[0] : e;
          }
          var Vo = Hr(function (e) {
              var t = Nt(e, pa);
              return t.length && t[0] === e[0] ? Cr(t) : [];
            }),
            Ho = Hr(function (t) {
              var n = Yo(t),
                r = Nt(t, pa);
              return (
                n === Yo(r) ? (n = e) : r.pop(),
                r.length && r[0] === t[0] ? Cr(r, ao(n, 2)) : []
              );
            }),
            qo = Hr(function (t) {
              var n = Yo(t),
                r = Nt(t, pa);
              return (
                (n = "function" == typeof n ? n : e) && r.pop(),
                r.length && r[0] === t[0] ? Cr(r, e, n) : []
              );
            });
          function Yo(t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : e;
          }
          var Qo = Hr(Ko);
          function Ko(e, t) {
            return e && e.length && t && t.length ? $r(e, t) : e;
          }
          var Jo = Xa(function (e, t) {
            var n = null == e ? 0 : e.length,
              r = rr(e, t);
            return (
              Br(
                e,
                Nt(t, function (e) {
                  return vo(e, n) ? +e : e;
                }).sort(Sa)
              ),
              r
            );
          });
          function Xo(e) {
            return null == e ? e : bn.call(e);
          }
          var Zo = Hr(function (e) {
              return ia(hr(e, 1, Vi, !0));
            }),
            ei = Hr(function (t) {
              var n = Yo(t);
              return Vi(n) && (n = e), ia(hr(t, 1, Vi, !0), ao(n, 2));
            }),
            ti = Hr(function (t) {
              var n = Yo(t);
              return (
                (n = "function" == typeof n ? n : e), ia(hr(t, 1, Vi, !0), e, n)
              );
            });
          function ni(e) {
            if (!e || !e.length) return [];
            var t = 0;
            return (
              (e = Et(e, function (e) {
                if (Vi(e)) return (t = vn(e.length, t)), !0;
              })),
              Wt(t, function (t) {
                return Nt(e, Gt(t));
              })
            );
          }
          function ri(t, n) {
            if (!t || !t.length) return [];
            var r = ni(t);
            return null == n
              ? r
              : Nt(r, function (t) {
                  return bt(n, e, t);
                });
          }
          var ai = Hr(function (e, t) {
              return Vi(e) ? ur(e, t) : [];
            }),
            oi = Hr(function (e) {
              return fa(Et(e, Vi));
            }),
            ii = Hr(function (t) {
              var n = Yo(t);
              return Vi(n) && (n = e), fa(Et(t, Vi), ao(n, 2));
            }),
            li = Hr(function (t) {
              var n = Yo(t);
              return (n = "function" == typeof n ? n : e), fa(Et(t, Vi), e, n);
            }),
            ui = Hr(ni),
            si = Hr(function (t) {
              var n = t.length,
                r = n > 1 ? t[n - 1] : e;
              return (r = "function" == typeof r ? (t.pop(), r) : e), ri(t, r);
            });
          function ci(e) {
            var t = Dn(e);
            return (t.__chain__ = !0), t;
          }
          function fi(e, t) {
            return t(e);
          }
          var di = Xa(function (t) {
              var n = t.length,
                r = n ? t[0] : 0,
                a = this.__wrapped__,
                o = function (e) {
                  return rr(e, t);
                };
              return !(n > 1 || this.__actions__.length) &&
                a instanceof Un &&
                vo(r)
                ? ((a = a.slice(r, +r + (n ? 1 : 0))).__actions__.push({
                    func: fi,
                    args: [o],
                    thisArg: e,
                  }),
                  new Gn(a, this.__chain__).thru(function (t) {
                    return n && !t.length && t.push(e), t;
                  }))
                : this.thru(o);
            }),
            pi = Oa(function (e, t, n) {
              Me.call(e, n) ? ++e[n] : nr(e, n, 1);
            }),
            hi = Pa(Uo),
            vi = Pa($o);
          function gi(e, t) {
            return ($i(e) ? St : sr)(e, ao(t, 3));
          }
          function yi(e, t) {
            return ($i(e) ? kt : cr)(e, ao(t, 3));
          }
          var mi = Oa(function (e, t, n) {
              Me.call(e, n) ? e[n].push(t) : nr(e, n, [t]);
            }),
            _i = Hr(function (e, t, n) {
              var r = -1,
                a = "function" == typeof t,
                o = Wi(e) ? _e(e.length) : [];
              return (
                sr(e, function (e) {
                  o[++r] = a ? bt(t, e, n) : Or(e, t, n);
                }),
                o
              );
            }),
            bi = Oa(function (e, t, n) {
              nr(e, n, t);
            });
          function wi(e, t) {
            return ($i(e) ? Nt : Fr)(e, ao(t, 3));
          }
          var Si = Oa(
              function (e, t, n) {
                e[n ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            ),
            ki = Hr(function (e, t) {
              if (null == e) return [];
              var n = t.length;
              return (
                n > 1 && go(e, t[0], t[1])
                  ? (t = [])
                  : n > 2 && go(t[0], t[1], t[2]) && (t = [t[0]]),
                Gr(e, hr(t, 1), [])
              );
            }),
            xi =
              ct ||
              function () {
                return ut.Date.now();
              };
          function Ei(t, n, r) {
            return (
              (n = r ? e : n),
              (n = t && null == n ? t.length : n),
              qa(t, o, e, e, e, e, n)
            );
          }
          function Ci(n, r) {
            var a;
            if ("function" != typeof r) throw new Oe(t);
            return (
              (n = dl(n)),
              function () {
                return (
                  --n > 0 && (a = r.apply(this, arguments)),
                  n <= 1 && (r = e),
                  a
                );
              }
            );
          }
          var Oi = Hr(function (e, t, n) {
              var r = 1;
              if (n.length) {
                var o = rn(n, ro(Oi));
                r |= a;
              }
              return qa(e, r, t, n, o);
            }),
            Ni = Hr(function (e, t, n) {
              var r = 3;
              if (n.length) {
                var o = rn(n, ro(Ni));
                r |= a;
              }
              return qa(t, r, e, n, o);
            });
          function Ai(n, r, a) {
            var o,
              i,
              l,
              u,
              s,
              c,
              f = 0,
              d = !1,
              p = !1,
              h = !0;
            if ("function" != typeof n) throw new Oe(t);
            function v(t) {
              var r = o,
                a = i;
              return (o = i = e), (f = t), (u = n.apply(a, r));
            }
            function g(t) {
              var n = t - c;
              return c === e || n >= r || n < 0 || (p && t - f >= l);
            }
            function y() {
              var e = xi();
              if (g(e)) return m(e);
              s = Oo(
                y,
                (function (e) {
                  var t = r - (e - c);
                  return p ? gn(t, l - (e - f)) : t;
                })(e)
              );
            }
            function m(t) {
              return (s = e), h && o ? v(t) : ((o = i = e), u);
            }
            function _() {
              var t,
                n = xi(),
                a = g(n);
              if (((o = arguments), (i = this), (c = n), a)) {
                if (s === e) return (f = t = c), (s = Oo(y, r)), d ? v(t) : u;
                if (p) return ma(s), (s = Oo(y, r)), v(c);
              }
              return s === e && (s = Oo(y, r)), u;
            }
            return (
              (r = hl(r) || 0),
              Xi(a) &&
                ((d = !!a.leading),
                (l = (p = "maxWait" in a) ? vn(hl(a.maxWait) || 0, r) : l),
                (h = "trailing" in a ? !!a.trailing : h)),
              (_.cancel = function () {
                s !== e && ma(s), (f = 0), (o = c = i = s = e);
              }),
              (_.flush = function () {
                return s === e ? u : m(xi());
              }),
              _
            );
          }
          var Ti = Hr(function (e, t) {
              return lr(e, 1, t);
            }),
            Ri = Hr(function (e, t, n) {
              return lr(e, hl(t) || 0, n);
            });
          function ji(e, n) {
            if ("function" != typeof e || (null != n && "function" != typeof n))
              throw new Oe(t);
            var r = function () {
              var t = arguments,
                a = n ? n.apply(this, t) : t[0],
                o = r.cache;
              if (o.has(a)) return o.get(a);
              var i = e.apply(this, t);
              return (r.cache = o.set(a, i) || o), i;
            };
            return (r.cache = new (ji.Cache || Wn)()), r;
          }
          function Mi(e) {
            if ("function" != typeof e) throw new Oe(t);
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
          ji.Cache = Wn;
          var Pi = ga(function (e, t) {
              var n = (t =
                1 == t.length && $i(t[0])
                  ? Nt(t[0], Ht(ao()))
                  : Nt(hr(t, 1), Ht(ao()))).length;
              return Hr(function (r) {
                for (var a = -1, o = gn(r.length, n); ++a < o; )
                  r[a] = t[a].call(this, r[a]);
                return bt(e, this, r);
              });
            }),
            Fi = Hr(function (t, n) {
              var r = rn(n, ro(Fi));
              return qa(t, a, e, n, r);
            }),
            zi = Hr(function (t, n) {
              var r = rn(n, ro(zi));
              return qa(t, 64, e, n, r);
            }),
            Di = Xa(function (t, n) {
              return qa(t, 256, e, e, e, n);
            });
          function Li(e, t) {
            return e === t || (e != e && t != t);
          }
          var Ii = $a(kr),
            Gi = $a(function (e, t) {
              return e >= t;
            }),
            Ui = Nr(
              (function () {
                return arguments;
              })()
            )
              ? Nr
              : function (e) {
                  return Zi(e) && Me.call(e, "callee") && !He.call(e, "callee");
                },
            $i = _e.isArray,
            Bi = ht
              ? Ht(ht)
              : function (e) {
                  return Zi(e) && Sr(e) == O;
                };
          function Wi(e) {
            return null != e && Ji(e.length) && !Qi(e);
          }
          function Vi(e) {
            return Zi(e) && Wi(e);
          }
          var Hi = fn || hu,
            qi = vt
              ? Ht(vt)
              : function (e) {
                  return Zi(e) && Sr(e) == h;
                };
          function Yi(e) {
            if (!Zi(e)) return !1;
            var t = Sr(e);
            return (
              t == v ||
              "[object DOMException]" == t ||
              ("string" == typeof e.message &&
                "string" == typeof e.name &&
                !nl(e))
            );
          }
          function Qi(e) {
            if (!Xi(e)) return !1;
            var t = Sr(e);
            return (
              t == g ||
              t == y ||
              "[object AsyncFunction]" == t ||
              "[object Proxy]" == t
            );
          }
          function Ki(e) {
            return "number" == typeof e && e == dl(e);
          }
          function Ji(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= l;
          }
          function Xi(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t);
          }
          function Zi(e) {
            return null != e && "object" == typeof e;
          }
          var el = gt
            ? Ht(gt)
            : function (e) {
                return Zi(e) && co(e) == m;
              };
          function tl(e) {
            return "number" == typeof e || (Zi(e) && Sr(e) == _);
          }
          function nl(e) {
            if (!Zi(e) || Sr(e) != b) return !1;
            var t = We(e);
            if (null === t) return !0;
            var n = Me.call(t, "constructor") && t.constructor;
            return "function" == typeof n && n instanceof n && je.call(n) == De;
          }
          var rl = yt
              ? Ht(yt)
              : function (e) {
                  return Zi(e) && Sr(e) == S;
                },
            al = mt
              ? Ht(mt)
              : function (e) {
                  return Zi(e) && co(e) == k;
                };
          function ol(e) {
            return "string" == typeof e || (!$i(e) && Zi(e) && Sr(e) == x);
          }
          function il(e) {
            return "symbol" == typeof e || (Zi(e) && Sr(e) == E);
          }
          var ll = _t
              ? Ht(_t)
              : function (e) {
                  return Zi(e) && Ji(e.length) && !!tt[Sr(e)];
                },
            ul = $a(Pr),
            sl = $a(function (e, t) {
              return e <= t;
            });
          function cl(e) {
            if (!e) return [];
            if (Wi(e)) return ol(e) ? ln(e) : Ea(e);
            if (rt && e[rt])
              return (function (e) {
                for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                return n;
              })(e[rt]());
            var t = co(e);
            return (t == m ? tn : t == k ? an : Ll)(e);
          }
          function fl(e) {
            return e
              ? (e = hl(e)) === i || e === -1 / 0
                ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                : e == e
                ? e
                : 0
              : 0 === e
              ? e
              : 0;
          }
          function dl(e) {
            var t = fl(e),
              n = t % 1;
            return t == t ? (n ? t - n : t) : 0;
          }
          function pl(e) {
            return e ? ar(dl(e), 0, s) : 0;
          }
          function hl(e) {
            if ("number" == typeof e) return e;
            if (il(e)) return u;
            if (Xi(e)) {
              var t = "function" == typeof e.valueOf ? e.valueOf() : e;
              e = Xi(t) ? t + "" : t;
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = Vt(e);
            var n = fe.test(e);
            return n || pe.test(e)
              ? ot(e.slice(2), n ? 2 : 8)
              : ce.test(e)
              ? u
              : +e;
          }
          function vl(e) {
            return Ca(e, Tl(e));
          }
          function gl(e) {
            return null == e ? "" : oa(e);
          }
          var yl = Na(function (e, t) {
              if (bo(t) || Wi(t)) Ca(t, Al(t), e);
              else for (var n in t) Me.call(t, n) && Xn(e, n, t[n]);
            }),
            ml = Na(function (e, t) {
              Ca(t, Tl(t), e);
            }),
            _l = Na(function (e, t, n, r) {
              Ca(t, Tl(t), e, r);
            }),
            bl = Na(function (e, t, n, r) {
              Ca(t, Al(t), e, r);
            }),
            wl = Xa(rr),
            Sl = Hr(function (t, n) {
              t = xe(t);
              var r = -1,
                a = n.length,
                o = a > 2 ? n[2] : e;
              for (o && go(n[0], n[1], o) && (a = 1); ++r < a; )
                for (var i = n[r], l = Tl(i), u = -1, s = l.length; ++u < s; ) {
                  var c = l[u],
                    f = t[c];
                  (f === e || (Li(f, Te[c]) && !Me.call(t, c))) &&
                    (t[c] = i[c]);
                }
              return t;
            }),
            kl = Hr(function (t) {
              return t.push(e, Qa), bt(jl, e, t);
            });
          function xl(t, n, r) {
            var a = null == t ? e : br(t, n);
            return a === e ? r : a;
          }
          function El(e, t) {
            return null != e && fo(e, t, Er);
          }
          var Cl = Da(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = ze.call(t)),
                (e[t] = n);
            }, Xl(tu)),
            Ol = Da(function (e, t, n) {
              null != t && "function" != typeof t.toString && (t = ze.call(t)),
                Me.call(e, t) ? e[t].push(n) : (e[t] = [n]);
            }, ao),
            Nl = Hr(Or);
          function Al(e) {
            return Wi(e) ? qn(e) : Mr(e);
          }
          function Tl(e) {
            return Wi(e)
              ? qn(e, !0)
              : (function (e) {
                  if (!Xi(e))
                    return (function (e) {
                      var t = [];
                      if (null != e) for (var n in xe(e)) t.push(n);
                      return t;
                    })(e);
                  var t = bo(e),
                    n = [];
                  for (var r in e)
                    ("constructor" != r || (!t && Me.call(e, r))) && n.push(r);
                  return n;
                })(e);
          }
          var Rl = Na(function (e, t, n) {
              Lr(e, t, n);
            }),
            jl = Na(function (e, t, n, r) {
              Lr(e, t, n, r);
            }),
            Ml = Xa(function (e, t) {
              var n = {};
              if (null == e) return n;
              var r = !1;
              (t = Nt(t, function (t) {
                return (t = va(t, e)), r || (r = t.length > 1), t;
              })),
                Ca(e, eo(e), n),
                r && (n = or(n, 7, Ka));
              for (var a = t.length; a--; ) la(n, t[a]);
              return n;
            }),
            Pl = Xa(function (e, t) {
              return null == e
                ? {}
                : Ur((n = e), t, function (e, t) {
                    return El(n, t);
                  });
              var n;
            });
          function Fl(e, t) {
            if (null == e) return {};
            var n = Nt(eo(e), function (e) {
              return [e];
            });
            return (
              (t = ao(t)),
              Ur(e, n, function (e, n) {
                return t(e, n[0]);
              })
            );
          }
          var zl = Ha(Al),
            Dl = Ha(Tl);
          function Ll(e) {
            return null == e ? [] : qt(e, Al(e));
          }
          var Il = ja(function (e, t, n) {
            return (t = t.toLowerCase()), e + (n ? Gl(t) : t);
          });
          function Gl(e) {
            return Yl(gl(e).toLowerCase());
          }
          function Ul(e) {
            return (e = gl(e)) && e.replace(ve, Jt).replace(Ye, "");
          }
          var $l = ja(function (e, t, n) {
              return e + (n ? "-" : "") + t.toLowerCase();
            }),
            Bl = ja(function (e, t, n) {
              return e + (n ? " " : "") + t.toLowerCase();
            }),
            Wl = Ra("toLowerCase"),
            Vl = ja(function (e, t, n) {
              return e + (n ? "_" : "") + t.toLowerCase();
            }),
            Hl = ja(function (e, t, n) {
              return e + (n ? " " : "") + Yl(t);
            }),
            ql = ja(function (e, t, n) {
              return e + (n ? " " : "") + t.toUpperCase();
            }),
            Yl = Ra("toUpperCase");
          function Ql(t, n, r) {
            return (
              (t = gl(t)),
              (n = r ? e : n) === e
                ? ((a = t),
                  Xe.test(a)
                    ? (function (e) {
                        return e.match(Ke) || [];
                      })(t)
                    : (function (e) {
                        return e.match(oe) || [];
                      })(t))
                : t.match(n) || []
            );
            var a;
          }
          var Kl = Hr(function (t, n) {
              try {
                return bt(t, e, n);
              } catch (r) {
                return Yi(r) ? r : new we(r);
              }
            }),
            Jl = Xa(function (e, t) {
              return (
                St(t, function (t) {
                  (t = Fo(t)), nr(e, t, Oi(e[t], e));
                }),
                e
              );
            });
          function Xl(e) {
            return function () {
              return e;
            };
          }
          var Zl = Fa(),
            eu = Fa(!0);
          function tu(e) {
            return e;
          }
          function nu(e) {
            return jr("function" == typeof e ? e : or(e, 1));
          }
          var ru = Hr(function (e, t) {
              return function (n) {
                return Or(n, e, t);
              };
            }),
            au = Hr(function (e, t) {
              return function (n) {
                return Or(e, n, t);
              };
            });
          function ou(e, t, n) {
            var r = Al(t),
              a = _r(t, r);
            null != n ||
              (Xi(t) && (a.length || !r.length)) ||
              ((n = t), (t = e), (e = this), (a = _r(t, Al(t))));
            var o = !(Xi(n) && "chain" in n && !n.chain),
              i = Qi(e);
            return (
              St(a, function (n) {
                var r = t[n];
                (e[n] = r),
                  i &&
                    (e.prototype[n] = function () {
                      var t = this.__chain__;
                      if (o || t) {
                        var n = e(this.__wrapped__);
                        return (
                          (n.__actions__ = Ea(this.__actions__)).push({
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
          function iu() {}
          var lu = Ia(Nt),
            uu = Ia(xt),
            su = Ia(jt);
          function cu(e) {
            return yo(e)
              ? Gt(Fo(e))
              : (function (e) {
                  return function (t) {
                    return br(t, e);
                  };
                })(e);
          }
          var fu = Ua(),
            du = Ua(!0);
          function pu() {
            return [];
          }
          function hu() {
            return !1;
          }
          var vu,
            gu = La(function (e, t) {
              return e + t;
            }, 0),
            yu = Wa("ceil"),
            mu = La(function (e, t) {
              return e / t;
            }, 1),
            _u = Wa("floor"),
            bu = La(function (e, t) {
              return e * t;
            }, 1),
            wu = Wa("round"),
            Su = La(function (e, t) {
              return e - t;
            }, 0);
          return (
            (Dn.after = function (e, n) {
              if ("function" != typeof n) throw new Oe(t);
              return (
                (e = dl(e)),
                function () {
                  if (--e < 1) return n.apply(this, arguments);
                }
              );
            }),
            (Dn.ary = Ei),
            (Dn.assign = yl),
            (Dn.assignIn = ml),
            (Dn.assignInWith = _l),
            (Dn.assignWith = bl),
            (Dn.at = wl),
            (Dn.before = Ci),
            (Dn.bind = Oi),
            (Dn.bindAll = Jl),
            (Dn.bindKey = Ni),
            (Dn.castArray = function () {
              if (!arguments.length) return [];
              var e = arguments[0];
              return $i(e) ? e : [e];
            }),
            (Dn.chain = ci),
            (Dn.chunk = function (t, n, r) {
              n = (r ? go(t, n, r) : n === e) ? 1 : vn(dl(n), 0);
              var a = null == t ? 0 : t.length;
              if (!a || n < 1) return [];
              for (var o = 0, i = 0, l = _e(pt(a / n)); o < a; )
                l[i++] = Zr(t, o, (o += n));
              return l;
            }),
            (Dn.compact = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = 0, a = [];
                ++t < n;

              ) {
                var o = e[t];
                o && (a[r++] = o);
              }
              return a;
            }),
            (Dn.concat = function () {
              var e = arguments.length;
              if (!e) return [];
              for (var t = _e(e - 1), n = arguments[0], r = e; r--; )
                t[r - 1] = arguments[r];
              return At($i(n) ? Ea(n) : [n], hr(t, 1));
            }),
            (Dn.cond = function (e) {
              var n = null == e ? 0 : e.length,
                r = ao();
              return (
                (e = n
                  ? Nt(e, function (e) {
                      if ("function" != typeof e[1]) throw new Oe(t);
                      return [r(e[0]), e[1]];
                    })
                  : []),
                Hr(function (t) {
                  for (var r = -1; ++r < n; ) {
                    var a = e[r];
                    if (bt(a[0], this, t)) return bt(a[1], this, t);
                  }
                })
              );
            }),
            (Dn.conforms = function (e) {
              return (function (e) {
                var t = Al(e);
                return function (n) {
                  return ir(n, e, t);
                };
              })(or(e, 1));
            }),
            (Dn.constant = Xl),
            (Dn.countBy = pi),
            (Dn.create = function (e, t) {
              var n = Ln(e);
              return null == t ? n : tr(n, t);
            }),
            (Dn.curry = function t(n, r, a) {
              var o = qa(n, 8, e, e, e, e, e, (r = a ? e : r));
              return (o.placeholder = t.placeholder), o;
            }),
            (Dn.curryRight = function t(n, r, a) {
              var o = qa(n, 16, e, e, e, e, e, (r = a ? e : r));
              return (o.placeholder = t.placeholder), o;
            }),
            (Dn.debounce = Ai),
            (Dn.defaults = Sl),
            (Dn.defaultsDeep = kl),
            (Dn.defer = Ti),
            (Dn.delay = Ri),
            (Dn.difference = Lo),
            (Dn.differenceBy = Io),
            (Dn.differenceWith = Go),
            (Dn.drop = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, (n = r || n === e ? 1 : dl(n)) < 0 ? 0 : n, a)
                : [];
            }),
            (Dn.dropRight = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, 0, (n = a - (n = r || n === e ? 1 : dl(n))) < 0 ? 0 : n)
                : [];
            }),
            (Dn.dropRightWhile = function (e, t) {
              return e && e.length ? sa(e, ao(t, 3), !0, !0) : [];
            }),
            (Dn.dropWhile = function (e, t) {
              return e && e.length ? sa(e, ao(t, 3), !0) : [];
            }),
            (Dn.fill = function (t, n, r, a) {
              var o = null == t ? 0 : t.length;
              return o
                ? (r &&
                    "number" != typeof r &&
                    go(t, n, r) &&
                    ((r = 0), (a = o)),
                  (function (t, n, r, a) {
                    var o = t.length;
                    for (
                      (r = dl(r)) < 0 && (r = -r > o ? 0 : o + r),
                        (a = a === e || a > o ? o : dl(a)) < 0 && (a += o),
                        a = r > a ? 0 : pl(a);
                      r < a;

                    )
                      t[r++] = n;
                    return t;
                  })(t, n, r, a))
                : [];
            }),
            (Dn.filter = function (e, t) {
              return ($i(e) ? Et : pr)(e, ao(t, 3));
            }),
            (Dn.flatMap = function (e, t) {
              return hr(wi(e, t), 1);
            }),
            (Dn.flatMapDeep = function (e, t) {
              return hr(wi(e, t), i);
            }),
            (Dn.flatMapDepth = function (t, n, r) {
              return (r = r === e ? 1 : dl(r)), hr(wi(t, n), r);
            }),
            (Dn.flatten = Bo),
            (Dn.flattenDeep = function (e) {
              return null != e && e.length ? hr(e, i) : [];
            }),
            (Dn.flattenDepth = function (t, n) {
              return null != t && t.length
                ? hr(t, (n = n === e ? 1 : dl(n)))
                : [];
            }),
            (Dn.flip = function (e) {
              return qa(e, 512);
            }),
            (Dn.flow = Zl),
            (Dn.flowRight = eu),
            (Dn.fromPairs = function (e) {
              for (
                var t = -1, n = null == e ? 0 : e.length, r = {};
                ++t < n;

              ) {
                var a = e[t];
                r[a[0]] = a[1];
              }
              return r;
            }),
            (Dn.functions = function (e) {
              return null == e ? [] : _r(e, Al(e));
            }),
            (Dn.functionsIn = function (e) {
              return null == e ? [] : _r(e, Tl(e));
            }),
            (Dn.groupBy = mi),
            (Dn.initial = function (e) {
              return null != e && e.length ? Zr(e, 0, -1) : [];
            }),
            (Dn.intersection = Vo),
            (Dn.intersectionBy = Ho),
            (Dn.intersectionWith = qo),
            (Dn.invert = Cl),
            (Dn.invertBy = Ol),
            (Dn.invokeMap = _i),
            (Dn.iteratee = nu),
            (Dn.keyBy = bi),
            (Dn.keys = Al),
            (Dn.keysIn = Tl),
            (Dn.map = wi),
            (Dn.mapKeys = function (e, t) {
              var n = {};
              return (
                (t = ao(t, 3)),
                yr(e, function (e, r, a) {
                  nr(n, t(e, r, a), e);
                }),
                n
              );
            }),
            (Dn.mapValues = function (e, t) {
              var n = {};
              return (
                (t = ao(t, 3)),
                yr(e, function (e, r, a) {
                  nr(n, r, t(e, r, a));
                }),
                n
              );
            }),
            (Dn.matches = function (e) {
              return zr(or(e, 1));
            }),
            (Dn.matchesProperty = function (e, t) {
              return Dr(e, or(t, 1));
            }),
            (Dn.memoize = ji),
            (Dn.merge = Rl),
            (Dn.mergeWith = jl),
            (Dn.method = ru),
            (Dn.methodOf = au),
            (Dn.mixin = ou),
            (Dn.negate = Mi),
            (Dn.nthArg = function (e) {
              return (
                (e = dl(e)),
                Hr(function (t) {
                  return Ir(t, e);
                })
              );
            }),
            (Dn.omit = Ml),
            (Dn.omitBy = function (e, t) {
              return Fl(e, Mi(ao(t)));
            }),
            (Dn.once = function (e) {
              return Ci(2, e);
            }),
            (Dn.orderBy = function (t, n, r, a) {
              return null == t
                ? []
                : ($i(n) || (n = null == n ? [] : [n]),
                  $i((r = a ? e : r)) || (r = null == r ? [] : [r]),
                  Gr(t, n, r));
            }),
            (Dn.over = lu),
            (Dn.overArgs = Pi),
            (Dn.overEvery = uu),
            (Dn.overSome = su),
            (Dn.partial = Fi),
            (Dn.partialRight = zi),
            (Dn.partition = Si),
            (Dn.pick = Pl),
            (Dn.pickBy = Fl),
            (Dn.property = cu),
            (Dn.propertyOf = function (t) {
              return function (n) {
                return null == t ? e : br(t, n);
              };
            }),
            (Dn.pull = Qo),
            (Dn.pullAll = Ko),
            (Dn.pullAllBy = function (e, t, n) {
              return e && e.length && t && t.length ? $r(e, t, ao(n, 2)) : e;
            }),
            (Dn.pullAllWith = function (t, n, r) {
              return t && t.length && n && n.length ? $r(t, n, e, r) : t;
            }),
            (Dn.pullAt = Jo),
            (Dn.range = fu),
            (Dn.rangeRight = du),
            (Dn.rearg = Di),
            (Dn.reject = function (e, t) {
              return ($i(e) ? Et : pr)(e, Mi(ao(t, 3)));
            }),
            (Dn.remove = function (e, t) {
              var n = [];
              if (!e || !e.length) return n;
              var r = -1,
                a = [],
                o = e.length;
              for (t = ao(t, 3); ++r < o; ) {
                var i = e[r];
                t(i, r, e) && (n.push(i), a.push(r));
              }
              return Br(e, a), n;
            }),
            (Dn.rest = function (n, r) {
              if ("function" != typeof n) throw new Oe(t);
              return Hr(n, (r = r === e ? r : dl(r)));
            }),
            (Dn.reverse = Xo),
            (Dn.sampleSize = function (t, n, r) {
              return (
                (n = (r ? go(t, n, r) : n === e) ? 1 : dl(n)),
                ($i(t) ? Qn : Yr)(t, n)
              );
            }),
            (Dn.set = function (e, t, n) {
              return null == e ? e : Qr(e, t, n);
            }),
            (Dn.setWith = function (t, n, r, a) {
              return (
                (a = "function" == typeof a ? a : e),
                null == t ? t : Qr(t, n, r, a)
              );
            }),
            (Dn.shuffle = function (e) {
              return ($i(e) ? Kn : Xr)(e);
            }),
            (Dn.slice = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? (r && "number" != typeof r && go(t, n, r)
                    ? ((n = 0), (r = a))
                    : ((n = null == n ? 0 : dl(n)), (r = r === e ? a : dl(r))),
                  Zr(t, n, r))
                : [];
            }),
            (Dn.sortBy = ki),
            (Dn.sortedUniq = function (e) {
              return e && e.length ? ra(e) : [];
            }),
            (Dn.sortedUniqBy = function (e, t) {
              return e && e.length ? ra(e, ao(t, 2)) : [];
            }),
            (Dn.split = function (t, n, r) {
              return (
                r && "number" != typeof r && go(t, n, r) && (n = r = e),
                (r = r === e ? s : r >>> 0)
                  ? (t = gl(t)) &&
                    ("string" == typeof n || (null != n && !rl(n))) &&
                    !(n = oa(n)) &&
                    en(t)
                    ? ya(ln(t), 0, r)
                    : t.split(n, r)
                  : []
              );
            }),
            (Dn.spread = function (e, n) {
              if ("function" != typeof e) throw new Oe(t);
              return (
                (n = null == n ? 0 : vn(dl(n), 0)),
                Hr(function (t) {
                  var r = t[n],
                    a = ya(t, 0, n);
                  return r && At(a, r), bt(e, this, a);
                })
              );
            }),
            (Dn.tail = function (e) {
              var t = null == e ? 0 : e.length;
              return t ? Zr(e, 1, t) : [];
            }),
            (Dn.take = function (t, n, r) {
              return t && t.length
                ? Zr(t, 0, (n = r || n === e ? 1 : dl(n)) < 0 ? 0 : n)
                : [];
            }),
            (Dn.takeRight = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              return a
                ? Zr(t, (n = a - (n = r || n === e ? 1 : dl(n))) < 0 ? 0 : n, a)
                : [];
            }),
            (Dn.takeRightWhile = function (e, t) {
              return e && e.length ? sa(e, ao(t, 3), !1, !0) : [];
            }),
            (Dn.takeWhile = function (e, t) {
              return e && e.length ? sa(e, ao(t, 3)) : [];
            }),
            (Dn.tap = function (e, t) {
              return t(e), e;
            }),
            (Dn.throttle = function (e, n, r) {
              var a = !0,
                o = !0;
              if ("function" != typeof e) throw new Oe(t);
              return (
                Xi(r) &&
                  ((a = "leading" in r ? !!r.leading : a),
                  (o = "trailing" in r ? !!r.trailing : o)),
                Ai(e, n, { leading: a, maxWait: n, trailing: o })
              );
            }),
            (Dn.thru = fi),
            (Dn.toArray = cl),
            (Dn.toPairs = zl),
            (Dn.toPairsIn = Dl),
            (Dn.toPath = function (e) {
              return $i(e) ? Nt(e, Fo) : il(e) ? [e] : Ea(Po(gl(e)));
            }),
            (Dn.toPlainObject = vl),
            (Dn.transform = function (e, t, n) {
              var r = $i(e),
                a = r || Hi(e) || ll(e);
              if (((t = ao(t, 4)), null == n)) {
                var o = e && e.constructor;
                n = a ? (r ? new o() : []) : Xi(e) && Qi(o) ? Ln(We(e)) : {};
              }
              return (
                (a ? St : yr)(e, function (e, r, a) {
                  return t(n, e, r, a);
                }),
                n
              );
            }),
            (Dn.unary = function (e) {
              return Ei(e, 1);
            }),
            (Dn.union = Zo),
            (Dn.unionBy = ei),
            (Dn.unionWith = ti),
            (Dn.uniq = function (e) {
              return e && e.length ? ia(e) : [];
            }),
            (Dn.uniqBy = function (e, t) {
              return e && e.length ? ia(e, ao(t, 2)) : [];
            }),
            (Dn.uniqWith = function (t, n) {
              return (
                (n = "function" == typeof n ? n : e),
                t && t.length ? ia(t, e, n) : []
              );
            }),
            (Dn.unset = function (e, t) {
              return null == e || la(e, t);
            }),
            (Dn.unzip = ni),
            (Dn.unzipWith = ri),
            (Dn.update = function (e, t, n) {
              return null == e ? e : ua(e, t, ha(n));
            }),
            (Dn.updateWith = function (t, n, r, a) {
              return (
                (a = "function" == typeof a ? a : e),
                null == t ? t : ua(t, n, ha(r), a)
              );
            }),
            (Dn.values = Ll),
            (Dn.valuesIn = function (e) {
              return null == e ? [] : qt(e, Tl(e));
            }),
            (Dn.without = ai),
            (Dn.words = Ql),
            (Dn.wrap = function (e, t) {
              return Fi(ha(t), e);
            }),
            (Dn.xor = oi),
            (Dn.xorBy = ii),
            (Dn.xorWith = li),
            (Dn.zip = ui),
            (Dn.zipObject = function (e, t) {
              return da(e || [], t || [], Xn);
            }),
            (Dn.zipObjectDeep = function (e, t) {
              return da(e || [], t || [], Qr);
            }),
            (Dn.zipWith = si),
            (Dn.entries = zl),
            (Dn.entriesIn = Dl),
            (Dn.extend = ml),
            (Dn.extendWith = _l),
            ou(Dn, Dn),
            (Dn.add = gu),
            (Dn.attempt = Kl),
            (Dn.camelCase = Il),
            (Dn.capitalize = Gl),
            (Dn.ceil = yu),
            (Dn.clamp = function (t, n, r) {
              return (
                r === e && ((r = n), (n = e)),
                r !== e && (r = (r = hl(r)) == r ? r : 0),
                n !== e && (n = (n = hl(n)) == n ? n : 0),
                ar(hl(t), n, r)
              );
            }),
            (Dn.clone = function (e) {
              return or(e, 4);
            }),
            (Dn.cloneDeep = function (e) {
              return or(e, 5);
            }),
            (Dn.cloneDeepWith = function (t, n) {
              return or(t, 5, (n = "function" == typeof n ? n : e));
            }),
            (Dn.cloneWith = function (t, n) {
              return or(t, 4, (n = "function" == typeof n ? n : e));
            }),
            (Dn.conformsTo = function (e, t) {
              return null == t || ir(e, t, Al(t));
            }),
            (Dn.deburr = Ul),
            (Dn.defaultTo = function (e, t) {
              return null == e || e != e ? t : e;
            }),
            (Dn.divide = mu),
            (Dn.endsWith = function (t, n, r) {
              (t = gl(t)), (n = oa(n));
              var a = t.length,
                o = (r = r === e ? a : ar(dl(r), 0, a));
              return (r -= n.length) >= 0 && t.slice(r, o) == n;
            }),
            (Dn.eq = Li),
            (Dn.escape = function (e) {
              return (e = gl(e)) && W.test(e) ? e.replace($, Xt) : e;
            }),
            (Dn.escapeRegExp = function (e) {
              return (e = gl(e)) && Z.test(e) ? e.replace(X, "\\$&") : e;
            }),
            (Dn.every = function (t, n, r) {
              var a = $i(t) ? xt : fr;
              return r && go(t, n, r) && (n = e), a(t, ao(n, 3));
            }),
            (Dn.find = hi),
            (Dn.findIndex = Uo),
            (Dn.findKey = function (e, t) {
              return Pt(e, ao(t, 3), yr);
            }),
            (Dn.findLast = vi),
            (Dn.findLastIndex = $o),
            (Dn.findLastKey = function (e, t) {
              return Pt(e, ao(t, 3), mr);
            }),
            (Dn.floor = _u),
            (Dn.forEach = gi),
            (Dn.forEachRight = yi),
            (Dn.forIn = function (e, t) {
              return null == e ? e : vr(e, ao(t, 3), Tl);
            }),
            (Dn.forInRight = function (e, t) {
              return null == e ? e : gr(e, ao(t, 3), Tl);
            }),
            (Dn.forOwn = function (e, t) {
              return e && yr(e, ao(t, 3));
            }),
            (Dn.forOwnRight = function (e, t) {
              return e && mr(e, ao(t, 3));
            }),
            (Dn.get = xl),
            (Dn.gt = Ii),
            (Dn.gte = Gi),
            (Dn.has = function (e, t) {
              return null != e && fo(e, t, xr);
            }),
            (Dn.hasIn = El),
            (Dn.head = Wo),
            (Dn.identity = tu),
            (Dn.includes = function (e, t, n, r) {
              (e = Wi(e) ? e : Ll(e)), (n = n && !r ? dl(n) : 0);
              var a = e.length;
              return (
                n < 0 && (n = vn(a + n, 0)),
                ol(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && zt(e, t, n) > -1
              );
            }),
            (Dn.indexOf = function (e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var a = null == n ? 0 : dl(n);
              return a < 0 && (a = vn(r + a, 0)), zt(e, t, a);
            }),
            (Dn.inRange = function (t, n, r) {
              return (
                (n = fl(n)),
                r === e ? ((r = n), (n = 0)) : (r = fl(r)),
                (a = t = hl(t)) >= gn((o = n), (i = r)) && a < vn(o, i)
              );
              var a, o, i;
            }),
            (Dn.invoke = Nl),
            (Dn.isArguments = Ui),
            (Dn.isArray = $i),
            (Dn.isArrayBuffer = Bi),
            (Dn.isArrayLike = Wi),
            (Dn.isArrayLikeObject = Vi),
            (Dn.isBoolean = function (e) {
              return !0 === e || !1 === e || (Zi(e) && Sr(e) == p);
            }),
            (Dn.isBuffer = Hi),
            (Dn.isDate = qi),
            (Dn.isElement = function (e) {
              return Zi(e) && 1 === e.nodeType && !nl(e);
            }),
            (Dn.isEmpty = function (e) {
              if (null == e) return !0;
              if (
                Wi(e) &&
                ($i(e) ||
                  "string" == typeof e ||
                  "function" == typeof e.splice ||
                  Hi(e) ||
                  ll(e) ||
                  Ui(e))
              )
                return !e.length;
              var t = co(e);
              if (t == m || t == k) return !e.size;
              if (bo(e)) return !Mr(e).length;
              for (var n in e) if (Me.call(e, n)) return !1;
              return !0;
            }),
            (Dn.isEqual = function (e, t) {
              return Ar(e, t);
            }),
            (Dn.isEqualWith = function (t, n, r) {
              var a = (r = "function" == typeof r ? r : e) ? r(t, n) : e;
              return a === e ? Ar(t, n, e, r) : !!a;
            }),
            (Dn.isError = Yi),
            (Dn.isFinite = function (e) {
              return "number" == typeof e && dn(e);
            }),
            (Dn.isFunction = Qi),
            (Dn.isInteger = Ki),
            (Dn.isLength = Ji),
            (Dn.isMap = el),
            (Dn.isMatch = function (e, t) {
              return e === t || Tr(e, t, io(t));
            }),
            (Dn.isMatchWith = function (t, n, r) {
              return (r = "function" == typeof r ? r : e), Tr(t, n, io(n), r);
            }),
            (Dn.isNaN = function (e) {
              return tl(e) && e != +e;
            }),
            (Dn.isNative = function (e) {
              if (_o(e))
                throw new we(
                  "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                );
              return Rr(e);
            }),
            (Dn.isNil = function (e) {
              return null == e;
            }),
            (Dn.isNull = function (e) {
              return null === e;
            }),
            (Dn.isNumber = tl),
            (Dn.isObject = Xi),
            (Dn.isObjectLike = Zi),
            (Dn.isPlainObject = nl),
            (Dn.isRegExp = rl),
            (Dn.isSafeInteger = function (e) {
              return Ki(e) && e >= -9007199254740991 && e <= l;
            }),
            (Dn.isSet = al),
            (Dn.isString = ol),
            (Dn.isSymbol = il),
            (Dn.isTypedArray = ll),
            (Dn.isUndefined = function (t) {
              return t === e;
            }),
            (Dn.isWeakMap = function (e) {
              return Zi(e) && co(e) == C;
            }),
            (Dn.isWeakSet = function (e) {
              return Zi(e) && "[object WeakSet]" == Sr(e);
            }),
            (Dn.join = function (e, t) {
              return null == e ? "" : pn.call(e, t);
            }),
            (Dn.kebabCase = $l),
            (Dn.last = Yo),
            (Dn.lastIndexOf = function (t, n, r) {
              var a = null == t ? 0 : t.length;
              if (!a) return -1;
              var o = a;
              return (
                r !== e && (o = (o = dl(r)) < 0 ? vn(a + o, 0) : gn(o, a - 1)),
                n == n
                  ? (function (e, t, n) {
                      for (var r = n + 1; r--; ) if (e[r] === t) return r;
                      return r;
                    })(t, n, o)
                  : Ft(t, Lt, o, !0)
              );
            }),
            (Dn.lowerCase = Bl),
            (Dn.lowerFirst = Wl),
            (Dn.lt = ul),
            (Dn.lte = sl),
            (Dn.max = function (t) {
              return t && t.length ? dr(t, tu, kr) : e;
            }),
            (Dn.maxBy = function (t, n) {
              return t && t.length ? dr(t, ao(n, 2), kr) : e;
            }),
            (Dn.mean = function (e) {
              return It(e, tu);
            }),
            (Dn.meanBy = function (e, t) {
              return It(e, ao(t, 2));
            }),
            (Dn.min = function (t) {
              return t && t.length ? dr(t, tu, Pr) : e;
            }),
            (Dn.minBy = function (t, n) {
              return t && t.length ? dr(t, ao(n, 2), Pr) : e;
            }),
            (Dn.stubArray = pu),
            (Dn.stubFalse = hu),
            (Dn.stubObject = function () {
              return {};
            }),
            (Dn.stubString = function () {
              return "";
            }),
            (Dn.stubTrue = function () {
              return !0;
            }),
            (Dn.multiply = bu),
            (Dn.nth = function (t, n) {
              return t && t.length ? Ir(t, dl(n)) : e;
            }),
            (Dn.noConflict = function () {
              return ut._ === this && (ut._ = Le), this;
            }),
            (Dn.noop = iu),
            (Dn.now = xi),
            (Dn.pad = function (e, t, n) {
              e = gl(e);
              var r = (t = dl(t)) ? on(e) : 0;
              if (!t || r >= t) return e;
              var a = (t - r) / 2;
              return Ga(Mt(a), n) + e + Ga(pt(a), n);
            }),
            (Dn.padEnd = function (e, t, n) {
              e = gl(e);
              var r = (t = dl(t)) ? on(e) : 0;
              return t && r < t ? e + Ga(t - r, n) : e;
            }),
            (Dn.padStart = function (e, t, n) {
              e = gl(e);
              var r = (t = dl(t)) ? on(e) : 0;
              return t && r < t ? Ga(t - r, n) + e : e;
            }),
            (Dn.parseInt = function (e, t, n) {
              return (
                n || null == t ? (t = 0) : t && (t = +t),
                mn(gl(e).replace(ee, ""), t || 0)
              );
            }),
            (Dn.random = function (t, n, r) {
              if (
                (r && "boolean" != typeof r && go(t, n, r) && (n = r = e),
                r === e &&
                  ("boolean" == typeof n
                    ? ((r = n), (n = e))
                    : "boolean" == typeof t && ((r = t), (t = e))),
                t === e && n === e
                  ? ((t = 0), (n = 1))
                  : ((t = fl(t)), n === e ? ((n = t), (t = 0)) : (n = fl(n))),
                t > n)
              ) {
                var a = t;
                (t = n), (n = a);
              }
              if (r || t % 1 || n % 1) {
                var o = _n();
                return gn(
                  t + o * (n - t + at("1e-" + ((o + "").length - 1))),
                  n
                );
              }
              return Wr(t, n);
            }),
            (Dn.reduce = function (e, t, n) {
              var r = $i(e) ? Tt : $t,
                a = arguments.length < 3;
              return r(e, ao(t, 4), n, a, sr);
            }),
            (Dn.reduceRight = function (e, t, n) {
              var r = $i(e) ? Rt : $t,
                a = arguments.length < 3;
              return r(e, ao(t, 4), n, a, cr);
            }),
            (Dn.repeat = function (t, n, r) {
              return (
                (n = (r ? go(t, n, r) : n === e) ? 1 : dl(n)), Vr(gl(t), n)
              );
            }),
            (Dn.replace = function () {
              var e = arguments,
                t = gl(e[0]);
              return e.length < 3 ? t : t.replace(e[1], e[2]);
            }),
            (Dn.result = function (t, n, r) {
              var a = -1,
                o = (n = va(n, t)).length;
              for (o || ((o = 1), (t = e)); ++a < o; ) {
                var i = null == t ? e : t[Fo(n[a])];
                i === e && ((a = o), (i = r)), (t = Qi(i) ? i.call(t) : i);
              }
              return t;
            }),
            (Dn.round = wu),
            (Dn.runInContext = Q),
            (Dn.sample = function (e) {
              return ($i(e) ? Yn : qr)(e);
            }),
            (Dn.size = function (e) {
              if (null == e) return 0;
              if (Wi(e)) return ol(e) ? on(e) : e.length;
              var t = co(e);
              return t == m || t == k ? e.size : Mr(e).length;
            }),
            (Dn.snakeCase = Vl),
            (Dn.some = function (t, n, r) {
              var a = $i(t) ? jt : ea;
              return r && go(t, n, r) && (n = e), a(t, ao(n, 3));
            }),
            (Dn.sortedIndex = function (e, t) {
              return ta(e, t);
            }),
            (Dn.sortedIndexBy = function (e, t, n) {
              return na(e, t, ao(n, 2));
            }),
            (Dn.sortedIndexOf = function (e, t) {
              var n = null == e ? 0 : e.length;
              if (n) {
                var r = ta(e, t);
                if (r < n && Li(e[r], t)) return r;
              }
              return -1;
            }),
            (Dn.sortedLastIndex = function (e, t) {
              return ta(e, t, !0);
            }),
            (Dn.sortedLastIndexBy = function (e, t, n) {
              return na(e, t, ao(n, 2), !0);
            }),
            (Dn.sortedLastIndexOf = function (e, t) {
              if (null != e && e.length) {
                var n = ta(e, t, !0) - 1;
                if (Li(e[n], t)) return n;
              }
              return -1;
            }),
            (Dn.startCase = Hl),
            (Dn.startsWith = function (e, t, n) {
              return (
                (e = gl(e)),
                (n = null == n ? 0 : ar(dl(n), 0, e.length)),
                (t = oa(t)),
                e.slice(n, n + t.length) == t
              );
            }),
            (Dn.subtract = Su),
            (Dn.sum = function (e) {
              return e && e.length ? Bt(e, tu) : 0;
            }),
            (Dn.sumBy = function (e, t) {
              return e && e.length ? Bt(e, ao(t, 2)) : 0;
            }),
            (Dn.template = function (t, n, r) {
              var a = Dn.templateSettings;
              r && go(t, n, r) && (n = e), (t = gl(t)), (n = _l({}, n, a, Ya));
              var o,
                i,
                l = _l({}, n.imports, a.imports, Ya),
                u = Al(l),
                s = qt(l, u),
                c = 0,
                f = n.interpolate || ge,
                d = "__p += '",
                p = Ee(
                  (n.escape || ge).source +
                    "|" +
                    f.source +
                    "|" +
                    (f === q ? ue : ge).source +
                    "|" +
                    (n.evaluate || ge).source +
                    "|$",
                  "g"
                ),
                h =
                  "//# sourceURL=" +
                  (Me.call(n, "sourceURL")
                    ? (n.sourceURL + "").replace(/\s/g, " ")
                    : "lodash.templateSources[" + ++et + "]") +
                  "\n";
              t.replace(p, function (e, n, r, a, l, u) {
                return (
                  r || (r = a),
                  (d += t.slice(c, u).replace(ye, Zt)),
                  n && ((o = !0), (d += "' +\n__e(" + n + ") +\n'")),
                  l && ((i = !0), (d += "';\n" + l + ";\n__p += '")),
                  r &&
                    (d += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                  (c = u + e.length),
                  e
                );
              }),
                (d += "';\n");
              var v = Me.call(n, "variable") && n.variable;
              if (v) {
                if (ie.test(v))
                  throw new we(
                    "Invalid `variable` option passed into `_.template`"
                  );
              } else d = "with (obj) {\n" + d + "\n}\n";
              (d = (i ? d.replace(L, "") : d)
                .replace(I, "$1")
                .replace(G, "$1;")),
                (d =
                  "function(" +
                  (v || "obj") +
                  ") {\n" +
                  (v ? "" : "obj || (obj = {});\n") +
                  "var __t, __p = ''" +
                  (o ? ", __e = _.escape" : "") +
                  (i
                    ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                    : ";\n") +
                  d +
                  "return __p\n}");
              var g = Kl(function () {
                return Se(u, h + "return " + d).apply(e, s);
              });
              if (((g.source = d), Yi(g))) throw g;
              return g;
            }),
            (Dn.times = function (e, t) {
              if ((e = dl(e)) < 1 || e > l) return [];
              var n = s,
                r = gn(e, s);
              (t = ao(t)), (e -= s);
              for (var a = Wt(r, t); ++n < e; ) t(n);
              return a;
            }),
            (Dn.toFinite = fl),
            (Dn.toInteger = dl),
            (Dn.toLength = pl),
            (Dn.toLower = function (e) {
              return gl(e).toLowerCase();
            }),
            (Dn.toNumber = hl),
            (Dn.toSafeInteger = function (e) {
              return e ? ar(dl(e), -9007199254740991, l) : 0 === e ? e : 0;
            }),
            (Dn.toString = gl),
            (Dn.toUpper = function (e) {
              return gl(e).toUpperCase();
            }),
            (Dn.trim = function (t, n, r) {
              if ((t = gl(t)) && (r || n === e)) return Vt(t);
              if (!t || !(n = oa(n))) return t;
              var a = ln(t),
                o = ln(n);
              return ya(a, Qt(a, o), Kt(a, o) + 1).join("");
            }),
            (Dn.trimEnd = function (t, n, r) {
              if ((t = gl(t)) && (r || n === e)) return t.slice(0, un(t) + 1);
              if (!t || !(n = oa(n))) return t;
              var a = ln(t);
              return ya(a, 0, Kt(a, ln(n)) + 1).join("");
            }),
            (Dn.trimStart = function (t, n, r) {
              if ((t = gl(t)) && (r || n === e)) return t.replace(ee, "");
              if (!t || !(n = oa(n))) return t;
              var a = ln(t);
              return ya(a, Qt(a, ln(n))).join("");
            }),
            (Dn.truncate = function (t, n) {
              var r = 30,
                a = "...";
              if (Xi(n)) {
                var o = "separator" in n ? n.separator : o;
                (r = "length" in n ? dl(n.length) : r),
                  (a = "omission" in n ? oa(n.omission) : a);
              }
              var i = (t = gl(t)).length;
              if (en(t)) {
                var l = ln(t);
                i = l.length;
              }
              if (r >= i) return t;
              var u = r - on(a);
              if (u < 1) return a;
              var s = l ? ya(l, 0, u).join("") : t.slice(0, u);
              if (o === e) return s + a;
              if ((l && (u += s.length - u), rl(o))) {
                if (t.slice(u).search(o)) {
                  var c,
                    f = s;
                  for (
                    o.global || (o = Ee(o.source, gl(se.exec(o)) + "g")),
                      o.lastIndex = 0;
                    (c = o.exec(f));

                  )
                    var d = c.index;
                  s = s.slice(0, d === e ? u : d);
                }
              } else if (t.indexOf(oa(o), u) != u) {
                var p = s.lastIndexOf(o);
                p > -1 && (s = s.slice(0, p));
              }
              return s + a;
            }),
            (Dn.unescape = function (e) {
              return (e = gl(e)) && B.test(e) ? e.replace(U, sn) : e;
            }),
            (Dn.uniqueId = function (e) {
              var t = ++Pe;
              return gl(e) + t;
            }),
            (Dn.upperCase = ql),
            (Dn.upperFirst = Yl),
            (Dn.each = gi),
            (Dn.eachRight = yi),
            (Dn.first = Wo),
            ou(
              Dn,
              ((vu = {}),
              yr(Dn, function (e, t) {
                Me.call(Dn.prototype, t) || (vu[t] = e);
              }),
              vu),
              { chain: !1 }
            ),
            (Dn.VERSION = "4.17.21"),
            St(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                Dn[e].placeholder = Dn;
              }
            ),
            St(["drop", "take"], function (t, n) {
              (Un.prototype[t] = function (r) {
                r = r === e ? 1 : vn(dl(r), 0);
                var a = this.__filtered__ && !n ? new Un(this) : this.clone();
                return (
                  a.__filtered__
                    ? (a.__takeCount__ = gn(r, a.__takeCount__))
                    : a.__views__.push({
                        size: gn(r, s),
                        type: t + (a.__dir__ < 0 ? "Right" : ""),
                      }),
                  a
                );
              }),
                (Un.prototype[t + "Right"] = function (e) {
                  return this.reverse()[t](e).reverse();
                });
            }),
            St(["filter", "map", "takeWhile"], function (e, t) {
              var n = t + 1,
                r = 1 == n || 3 == n;
              Un.prototype[e] = function (e) {
                var t = this.clone();
                return (
                  t.__iteratees__.push({ iteratee: ao(e, 3), type: n }),
                  (t.__filtered__ = t.__filtered__ || r),
                  t
                );
              };
            }),
            St(["head", "last"], function (e, t) {
              var n = "take" + (t ? "Right" : "");
              Un.prototype[e] = function () {
                return this[n](1).value()[0];
              };
            }),
            St(["initial", "tail"], function (e, t) {
              var n = "drop" + (t ? "" : "Right");
              Un.prototype[e] = function () {
                return this.__filtered__ ? new Un(this) : this[n](1);
              };
            }),
            (Un.prototype.compact = function () {
              return this.filter(tu);
            }),
            (Un.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (Un.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (Un.prototype.invokeMap = Hr(function (e, t) {
              return "function" == typeof e
                ? new Un(this)
                : this.map(function (n) {
                    return Or(n, e, t);
                  });
            })),
            (Un.prototype.reject = function (e) {
              return this.filter(Mi(ao(e)));
            }),
            (Un.prototype.slice = function (t, n) {
              t = dl(t);
              var r = this;
              return r.__filtered__ && (t > 0 || n < 0)
                ? new Un(r)
                : (t < 0 ? (r = r.takeRight(-t)) : t && (r = r.drop(t)),
                  n !== e &&
                    (r = (n = dl(n)) < 0 ? r.dropRight(-n) : r.take(n - t)),
                  r);
            }),
            (Un.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (Un.prototype.toArray = function () {
              return this.take(s);
            }),
            yr(Un.prototype, function (t, n) {
              var r = /^(?:filter|find|map|reject)|While$/.test(n),
                a = /^(?:head|last)$/.test(n),
                o = Dn[a ? "take" + ("last" == n ? "Right" : "") : n],
                i = a || /^find/.test(n);
              o &&
                (Dn.prototype[n] = function () {
                  var n = this.__wrapped__,
                    l = a ? [1] : arguments,
                    u = n instanceof Un,
                    s = l[0],
                    c = u || $i(n),
                    f = function (e) {
                      var t = o.apply(Dn, At([e], l));
                      return a && d ? t[0] : t;
                    };
                  c &&
                    r &&
                    "function" == typeof s &&
                    1 != s.length &&
                    (u = c = !1);
                  var d = this.__chain__,
                    p = !!this.__actions__.length,
                    h = i && !d,
                    v = u && !p;
                  if (!i && c) {
                    n = v ? n : new Un(this);
                    var g = t.apply(n, l);
                    return (
                      g.__actions__.push({ func: fi, args: [f], thisArg: e }),
                      new Gn(g, d)
                    );
                  }
                  return h && v
                    ? t.apply(this, l)
                    : ((g = this.thru(f)),
                      h ? (a ? g.value()[0] : g.value()) : g);
                });
            }),
            St(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var t = Ne[e],
                  n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  r = /^(?:pop|shift)$/.test(e);
                Dn.prototype[e] = function () {
                  var e = arguments;
                  if (r && !this.__chain__) {
                    var a = this.value();
                    return t.apply($i(a) ? a : [], e);
                  }
                  return this[n](function (n) {
                    return t.apply($i(n) ? n : [], e);
                  });
                };
              }
            ),
            yr(Un.prototype, function (e, t) {
              var n = Dn[t];
              if (n) {
                var r = n.name + "";
                Me.call(Nn, r) || (Nn[r] = []),
                  Nn[r].push({ name: t, func: n });
              }
            }),
            (Nn[za(e, 2).name] = [{ name: "wrapper", func: e }]),
            (Un.prototype.clone = function () {
              var e = new Un(this.__wrapped__);
              return (
                (e.__actions__ = Ea(this.__actions__)),
                (e.__dir__ = this.__dir__),
                (e.__filtered__ = this.__filtered__),
                (e.__iteratees__ = Ea(this.__iteratees__)),
                (e.__takeCount__ = this.__takeCount__),
                (e.__views__ = Ea(this.__views__)),
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
                n = $i(e),
                r = t < 0,
                a = n ? e.length : 0,
                o = (function (e, t, n) {
                  for (var r = -1, a = n.length; ++r < a; ) {
                    var o = n[r],
                      i = o.size;
                    switch (o.type) {
                      case "drop":
                        e += i;
                        break;
                      case "dropRight":
                        t -= i;
                        break;
                      case "take":
                        t = gn(t, e + i);
                        break;
                      case "takeRight":
                        e = vn(e, t - i);
                    }
                  }
                  return { start: e, end: t };
                })(0, a, this.__views__),
                i = o.start,
                l = o.end,
                u = l - i,
                s = r ? l : i - 1,
                c = this.__iteratees__,
                f = c.length,
                d = 0,
                p = gn(u, this.__takeCount__);
              if (!n || (!r && a == u && p == u))
                return ca(e, this.__actions__);
              var h = [];
              e: for (; u-- && d < p; ) {
                for (var v = -1, g = e[(s += t)]; ++v < f; ) {
                  var y = c[v],
                    m = y.iteratee,
                    _ = y.type,
                    b = m(g);
                  if (2 == _) g = b;
                  else if (!b) {
                    if (1 == _) continue e;
                    break e;
                  }
                }
                h[d++] = g;
              }
              return h;
            }),
            (Dn.prototype.at = di),
            (Dn.prototype.chain = function () {
              return ci(this);
            }),
            (Dn.prototype.commit = function () {
              return new Gn(this.value(), this.__chain__);
            }),
            (Dn.prototype.next = function () {
              this.__values__ === e && (this.__values__ = cl(this.value()));
              var t = this.__index__ >= this.__values__.length;
              return {
                done: t,
                value: t ? e : this.__values__[this.__index__++],
              };
            }),
            (Dn.prototype.plant = function (t) {
              for (var n, r = this; r instanceof In; ) {
                var a = Do(r);
                (a.__index__ = 0),
                  (a.__values__ = e),
                  n ? (o.__wrapped__ = a) : (n = a);
                var o = a;
                r = r.__wrapped__;
              }
              return (o.__wrapped__ = t), n;
            }),
            (Dn.prototype.reverse = function () {
              var t = this.__wrapped__;
              if (t instanceof Un) {
                var n = t;
                return (
                  this.__actions__.length && (n = new Un(this)),
                  (n = n.reverse()).__actions__.push({
                    func: fi,
                    args: [Xo],
                    thisArg: e,
                  }),
                  new Gn(n, this.__chain__)
                );
              }
              return this.thru(Xo);
            }),
            (Dn.prototype.toJSON =
              Dn.prototype.valueOf =
              Dn.prototype.value =
                function () {
                  return ca(this.__wrapped__, this.__actions__);
                }),
            (Dn.prototype.first = Dn.prototype.head),
            rt &&
              (Dn.prototype[rt] = function () {
                return this;
              }),
            Dn
          );
        })();
      ct ? (((ct.exports = cn)._ = cn), (st._ = cn)) : (ut._ = cn);
    }.call(Q);
  var Kv = Qv.exports;
  const Jv = (e, t = 2, n = 6, r = !1) => {
    let a = isNaN(Number(t)) ? 2 : Number(t);
    const o = isNaN(Number(n)) ? 6 : Number(n);
    let i = Math.pow(10, a) * e;
    for (;;) {
      const e = Math.round(i);
      if (a === o || Math.abs(Math.round(i) - i) < 1e-5)
        return !0 === r ? a : e * Math.pow(10, -a);
      a++, (i *= 10);
    }
  };
  function Xv(e, t, n = ".", r = "", a = 1, o = "") {
    if (isNaN(e)) return "";
    let i = 0,
      l = 0,
      u = ".",
      s = "",
      c = 1,
      f = "";
    if ("string" == typeof t) {
      const n =
        /((?:#)([\u0020\u00a0\xa0,.])(?:##))?0(?:([.,])*(0*)(#*))?([%$£€a-zA-Z]+)?/.exec(
          t
        );
      if (!n) return e.toFixed(2);
      n[5] && (l = n[5].length),
        n[4] && (i = n[4].length),
        n[3] && (u = n[3]),
        n[2] && (s = n[2]),
        n[6] && ((f = n[6]), "%" === f && (c = 100));
    } else
      void 0 !== n && (u = n),
        void 0 !== r && (s = r),
        void 0 !== a && (c = a),
        void 0 !== o && (f = o);
    0 !== l && (i = Jv(e, i, i + l, !0));
    const d = c * e,
      p = d < 0 ? "-" : "",
      h = Math.abs(Number(d) || 0).toFixed(i),
      v = String(parseInt(h, 10));
    let g = v.length;
    return (
      (g = g > 3 ? g % 3 : 0),
      p +
        (g ? v.substr(0, g) + s : "") +
        v.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + s) +
        (i
          ? u +
            Math.abs(Number(h) - Number(v))
              .toFixed(i)
              .slice(2)
          : "") +
        f
    );
  }
  const Zv = (e) => (t) =>
      "number" == typeof t
        ? Xv(Number(t), e)
        : "string" == typeof t && parseFloat(t)
        ? Xv(parseFloat(t), e)
        : null,
    {
      sqrt: eg,
      log: tg,
      exp: ng,
      cos: rg,
      PI: ag,
      pow: og,
      SQRT2: ig,
      floor: lg,
    } = Math,
    ug = (e) => e * e;
  function sg(e) {
    const t = e.length;
    let n = 0,
      r = 0;
    for (let a = 0; a < t; a++) {
      const t = e[a];
      (n += t), (r += ug(t));
    }
    return eg((r - ug(n) / t) / (t - 1));
  }
  var cg,
    fg = { exports: {} };
  (cg = fg).exports = (function () {
    var e = 6e4,
      t = 36e5,
      n = "millisecond",
      r = "second",
      a = "minute",
      o = "hour",
      i = "day",
      l = "week",
      u = "month",
      s = "quarter",
      c = "year",
      f = "date",
      d = "Invalid Date",
      p =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      h =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      v = {
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
      y = {
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
            a = t.clone().add(r, u),
            o = n - a < 0,
            i = t.clone().add(r + (o ? -1 : 1), u);
          return +(-(r + (n - a) / (o ? a - i : i - a)) || 0);
        },
        a: function (e) {
          return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
        },
        p: function (e) {
          return (
            { M: u, y: c, w: l, d: i, D: f, h: o, m: a, s: r, ms: n, Q: s }[
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
      m = "en",
      _ = {};
    _[m] = v;
    var b = "$isDayjsObject",
      w = function (e) {
        return e instanceof E || !(!e || !e[b]);
      },
      S = function e(t, n, r) {
        var a;
        if (!t) return m;
        if ("string" == typeof t) {
          var o = t.toLowerCase();
          _[o] && (a = o), n && ((_[o] = n), (a = o));
          var i = t.split("-");
          if (!a && i.length > 1) return e(i[0]);
        } else {
          var l = t.name;
          (_[l] = t), (a = l);
        }
        return !r && a && (m = a), a || (!r && m);
      },
      k = function (e, t) {
        if (w(e)) return e.clone();
        var n = "object" == typeof t ? t : {};
        return (n.date = e), (n.args = arguments), new E(n);
      },
      x = y;
    (x.l = S),
      (x.i = w),
      (x.w = function (e, t) {
        return k(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
      });
    var E = (function () {
        function v(e) {
          (this.$L = S(e.locale, null, !0)),
            this.parse(e),
            (this.$x = this.$x || e.x || {}),
            (this[b] = !0);
        }
        var g = v.prototype;
        return (
          (g.parse = function (e) {
            (this.$d = (function (e) {
              var t = e.date,
                n = e.utc;
              if (null === t) return new Date(NaN);
              if (x.u(t)) return new Date();
              if (t instanceof Date) return new Date(t);
              if ("string" == typeof t && !/Z$/i.test(t)) {
                var r = t.match(p);
                if (r) {
                  var a = r[2] - 1 || 0,
                    o = (r[7] || "0").substring(0, 3);
                  return n
                    ? new Date(
                        Date.UTC(
                          r[1],
                          a,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          o
                        )
                      )
                    : new Date(
                        r[1],
                        a,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        o
                      );
                }
              }
              return new Date(t);
            })(e)),
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
            return x;
          }),
          (g.isValid = function () {
            return !(this.$d.toString() === d);
          }),
          (g.isSame = function (e, t) {
            var n = k(e);
            return this.startOf(t) <= n && n <= this.endOf(t);
          }),
          (g.isAfter = function (e, t) {
            return k(e) < this.startOf(t);
          }),
          (g.isBefore = function (e, t) {
            return this.endOf(t) < k(e);
          }),
          (g.$g = function (e, t, n) {
            return x.u(e) ? this[t] : this.set(n, e);
          }),
          (g.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (g.valueOf = function () {
            return this.$d.getTime();
          }),
          (g.startOf = function (e, t) {
            var n = this,
              s = !!x.u(t) || t,
              d = x.p(e),
              p = function (e, t) {
                var r = x.w(
                  n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e),
                  n
                );
                return s ? r : r.endOf(i);
              },
              h = function (e, t) {
                return x.w(
                  n
                    .toDate()
                    [e].apply(
                      n.toDate("s"),
                      (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                    ),
                  n
                );
              },
              v = this.$W,
              g = this.$M,
              y = this.$D,
              m = "set" + (this.$u ? "UTC" : "");
            switch (d) {
              case c:
                return s ? p(1, 0) : p(31, 11);
              case u:
                return s ? p(1, g) : p(0, g + 1);
              case l:
                var _ = this.$locale().weekStart || 0,
                  b = (v < _ ? v + 7 : v) - _;
                return p(s ? y - b : y + (6 - b), g);
              case i:
              case f:
                return h(m + "Hours", 0);
              case o:
                return h(m + "Minutes", 1);
              case a:
                return h(m + "Seconds", 2);
              case r:
                return h(m + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (g.endOf = function (e) {
            return this.startOf(e, !1);
          }),
          (g.$set = function (e, t) {
            var l,
              s = x.p(e),
              d = "set" + (this.$u ? "UTC" : ""),
              p = ((l = {}),
              (l[i] = d + "Date"),
              (l[f] = d + "Date"),
              (l[u] = d + "Month"),
              (l[c] = d + "FullYear"),
              (l[o] = d + "Hours"),
              (l[a] = d + "Minutes"),
              (l[r] = d + "Seconds"),
              (l[n] = d + "Milliseconds"),
              l)[s],
              h = s === i ? this.$D + (t - this.$W) : t;
            if (s === u || s === c) {
              var v = this.clone().set(f, 1);
              v.$d[p](h),
                v.init(),
                (this.$d = v.set(f, Math.min(this.$D, v.daysInMonth())).$d);
            } else p && this.$d[p](h);
            return this.init(), this;
          }),
          (g.set = function (e, t) {
            return this.clone().$set(e, t);
          }),
          (g.get = function (e) {
            return this[x.p(e)]();
          }),
          (g.add = function (n, s) {
            var f,
              d = this;
            n = Number(n);
            var p = x.p(s),
              h = function (e) {
                var t = k(d);
                return x.w(t.date(t.date() + Math.round(e * n)), d);
              };
            if (p === u) return this.set(u, this.$M + n);
            if (p === c) return this.set(c, this.$y + n);
            if (p === i) return h(1);
            if (p === l) return h(7);
            var v = ((f = {}), (f[a] = e), (f[o] = t), (f[r] = 1e3), f)[p] || 1,
              g = this.$d.getTime() + n * v;
            return x.w(g, this);
          }),
          (g.subtract = function (e, t) {
            return this.add(-1 * e, t);
          }),
          (g.format = function (e) {
            var t = this,
              n = this.$locale();
            if (!this.isValid()) return n.invalidDate || d;
            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
              a = x.z(this),
              o = this.$H,
              i = this.$m,
              l = this.$M,
              u = n.weekdays,
              s = n.months,
              c = n.meridiem,
              f = function (e, n, a, o) {
                return (e && (e[n] || e(t, r))) || a[n].slice(0, o);
              },
              p = function (e) {
                return x.s(o % 12 || 12, e, "0");
              },
              v =
                c ||
                function (e, t, n) {
                  var r = e < 12 ? "AM" : "PM";
                  return n ? r.toLowerCase() : r;
                };
            return r.replace(h, function (e, r) {
              return (
                r ||
                (function (e) {
                  switch (e) {
                    case "YY":
                      return String(t.$y).slice(-2);
                    case "YYYY":
                      return x.s(t.$y, 4, "0");
                    case "M":
                      return l + 1;
                    case "MM":
                      return x.s(l + 1, 2, "0");
                    case "MMM":
                      return f(n.monthsShort, l, s, 3);
                    case "MMMM":
                      return f(s, l);
                    case "D":
                      return t.$D;
                    case "DD":
                      return x.s(t.$D, 2, "0");
                    case "d":
                      return String(t.$W);
                    case "dd":
                      return f(n.weekdaysMin, t.$W, u, 2);
                    case "ddd":
                      return f(n.weekdaysShort, t.$W, u, 3);
                    case "dddd":
                      return u[t.$W];
                    case "H":
                      return String(o);
                    case "HH":
                      return x.s(o, 2, "0");
                    case "h":
                      return p(1);
                    case "hh":
                      return p(2);
                    case "a":
                      return v(o, i, !0);
                    case "A":
                      return v(o, i, !1);
                    case "m":
                      return String(i);
                    case "mm":
                      return x.s(i, 2, "0");
                    case "s":
                      return String(t.$s);
                    case "ss":
                      return x.s(t.$s, 2, "0");
                    case "SSS":
                      return x.s(t.$ms, 3, "0");
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
            var p,
              h = this,
              v = x.p(f),
              g = k(n),
              y = (g.utcOffset() - this.utcOffset()) * e,
              m = this - g,
              _ = function () {
                return x.m(h, g);
              };
            switch (v) {
              case c:
                p = _() / 12;
                break;
              case u:
                p = _();
                break;
              case s:
                p = _() / 3;
                break;
              case l:
                p = (m - y) / 6048e5;
                break;
              case i:
                p = (m - y) / 864e5;
                break;
              case o:
                p = m / t;
                break;
              case a:
                p = m / e;
                break;
              case r:
                p = m / 1e3;
                break;
              default:
                p = m;
            }
            return d ? p : x.a(p);
          }),
          (g.daysInMonth = function () {
            return this.endOf(u).$D;
          }),
          (g.$locale = function () {
            return _[this.$L];
          }),
          (g.locale = function (e, t) {
            if (!e) return this.$L;
            var n = this.clone(),
              r = S(e, t, !0);
            return r && (n.$L = r), n;
          }),
          (g.clone = function () {
            return x.w(this.$d, this);
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
          v
        );
      })(),
      C = E.prototype;
    return (
      (k.prototype = C),
      [
        ["$ms", n],
        ["$s", r],
        ["$m", a],
        ["$H", o],
        ["$W", i],
        ["$M", u],
        ["$y", c],
        ["$D", f],
      ].forEach(function (e) {
        C[e[1]] = function (t) {
          return this.$g(t, e[0], e[1]);
        };
      }),
      (k.extend = function (e, t) {
        return e.$i || (e(t, E, k), (e.$i = !0)), k;
      }),
      (k.locale = S),
      (k.isDayjs = w),
      (k.unix = function (e) {
        return k(1e3 * e);
      }),
      (k.en = _[m]),
      (k.Ls = _),
      (k.p = {}),
      k
    );
  })();
  var dg = fg.exports;
  const pg = K(dg);
  var hg = { exports: {} };
  !(function (e) {
    e.exports = (function () {
      var e = "minute",
        t = /[+-]\d\d(?::?\d\d)?/g,
        n = /([+-]|\d\d)/g;
      return function (r, a, o) {
        var i = a.prototype;
        (o.utc = function (e) {
          return new a({ date: e, utc: !0, args: arguments });
        }),
          (i.utc = function (t) {
            var n = o(this.toDate(), { locale: this.$L, utc: !0 });
            return t ? n.add(this.utcOffset(), e) : n;
          }),
          (i.local = function () {
            return o(this.toDate(), { locale: this.$L, utc: !1 });
          });
        var l = i.parse;
        i.parse = function (e) {
          e.utc && (this.$u = !0),
            this.$utils().u(e.$offset) || (this.$offset = e.$offset),
            l.call(this, e);
        };
        var u = i.init;
        i.init = function () {
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
          } else u.call(this);
        };
        var s = i.utcOffset;
        i.utcOffset = function (r, a) {
          var o = this.$utils().u;
          if (o(r))
            return this.$u ? 0 : o(this.$offset) ? s.call(this) : this.$offset;
          if (
            "string" == typeof r &&
            null ===
              (r = (function (e) {
                void 0 === e && (e = "");
                var r = e.match(t);
                if (!r) return null;
                var a = ("" + r[0]).match(n) || ["-", 0, 0],
                  o = a[0],
                  i = 60 * +a[1] + +a[2];
                return 0 === i ? 0 : "+" === o ? i : -i;
              })(r))
          )
            return this;
          var i = Math.abs(r) <= 16 ? 60 * r : r,
            l = this;
          if (a) return (l.$offset = i), (l.$u = 0 === r), l;
          if (0 !== r) {
            var u = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset();
            ((l = this.local().add(i + u, e)).$offset = i),
              (l.$x.$localOffset = u);
          } else l = this.utc();
          return l;
        };
        var c = i.format;
        (i.format = function (e) {
          var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
          return c.call(this, t);
        }),
          (i.valueOf = function () {
            var e = this.$utils().u(this.$offset)
              ? 0
              : this.$offset +
                (this.$x.$localOffset || this.$d.getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * e;
          }),
          (i.isUTC = function () {
            return !!this.$u;
          }),
          (i.toISOString = function () {
            return this.toDate().toISOString();
          }),
          (i.toString = function () {
            return this.toDate().toUTCString();
          });
        var f = i.toDate;
        i.toDate = function (e) {
          return "s" === e && this.$offset
            ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
            : f.call(this);
        };
        var d = i.diff;
        i.diff = function (e, t, n) {
          if (e && this.$u === e.$u) return d.call(this, e, t, n);
          var r = this.local(),
            a = o(e).local();
          return d.call(r, a, t, n);
        };
      };
    })();
  })(hg);
  var vg = hg.exports;
  const gg = K(vg),
    yg = vg;
  dg.extend(yg);
  class mg {
    constructor() {
      this.name = "Monday to Friday";
    }
    isBusinessDay(e) {
      const t = Sg.getDayOfWeek(e);
      return t >= 1 && t <= 5;
    }
  }
  const _g = 864e5;
  var bg = ((e) => (
    (e.ActualActual = "ActualActual"),
    (e.Actual365 = "Actual365"),
    (e.Actual360 = "Actual360"),
    e
  ))(bg || {});
  const wg = class e {
    static today() {
      const e = new Date();
      return e.setUTCHours(0, 0, 0, 0), e;
    }
    static dateToString(e) {
      const t = e.toISOString();
      return e.getTime() % _g == 0
        ? t.substring(0, 10)
        : t.replace(/T/, " ").replace(/\..+/, "");
    }
    static addYears(t, n) {
      return e.addMonths(t, 12 * n);
    }
    static isLeapYear(e) {
      return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
    }
    static getDaysInMonth(t, n) {
      let r = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n];
      return 1 === n && e.isLeapYear(t) && (r = 29), r;
    }
    static getEasterDay(t) {
      const n = ((t % 19) * 19 + 24) % 30,
        r = ((t % 4) * 2 + (t % 7) * 4 + 6 * n + 5) % 7,
        a = n + r,
        o = a + 22 <= 31 ? 3 : 4,
        i =
          a +
          (3 === o ? 22 : -9) +
          (a - 9 == 26 ? -7 : 0) +
          (28 === n && 6 === r ? -7 : 0);
      return e.getDayOfYear(t, o - 1, i);
    }
    static getDayOfYear(t, n, r) {
      return (
        (e.isLeapYear(t)
          ? [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]
          : [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365])[n] + r
      );
    }
    static getEndOfMonth(t, n) {
      const r = e.getDaysInMonth(t, n);
      return new Date(Date.UTC(t, n, r));
    }
    static toDate(e) {
      let t;
      return (
        e instanceof Date
          ? (t = e)
          : "string" == typeof e
          ? (t = new Date(e))
          : "number" == typeof e &&
            (t = new Date(e / (e >= 1 && e <= 401768 ? 1 : _g))),
        t
      );
    }
    static getMonth(t) {
      return e.toDate(t).getUTCMonth();
    }
    static getDay(t) {
      return e.toDate(t).getUTCDate();
    }
    static getDayOfWeek(t) {
      return e.toDate(t).getUTCDay();
    }
    static getYear(t) {
      return e.toDate(t).getUTCFullYear();
    }
    static dateAddDays(e, t) {
      const n = new Date(
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
    static addDays(t, n) {
      const r = typeof t;
      if ("number" === r)
        return t >= 0 && t < 2e6
          ? t + n
          : e.dateAddDays(new Date(t), n).getTime();
      if ("string" === r) return e.timestampToString(e.addDays(new Date(t), n));
      if (t instanceof Date) return e.dateAddDays(t, n);
      if (void 0 !== t.addDays) return t.addDays(n);
      throw new Error("Cannot add days to timestamp");
    }
    static dateAddMonths(t, n) {
      const r = new Date(t.getTime()),
        a = r.getUTCDate();
      r.setUTCDate(1), r.setUTCMonth(r.getUTCMonth() + n);
      const o = Math.min(
        a,
        e.getDaysInMonth(r.getUTCFullYear(), r.getUTCMonth())
      );
      return r.setUTCDate(o), r;
    }
    static addMonths(t, n) {
      const r = typeof t;
      if ("number" === r) return e.dateAddMonths(new Date(t), n).getTime();
      if ("string" === r)
        return e.timestampToString(e.dateAddMonths(new Date(t), n));
      if (t instanceof Date) return e.dateAddMonths(t, n);
      if (void 0 !== t.addMonths) return t.addMonths(n);
      throw new Error("Cannot add months to timestamp");
    }
    static timestampToString(t) {
      const n = typeof t;
      if ("string" === n) return t;
      if (t instanceof Date) return e.dateToString(t);
      if ("number" === n || void 0 !== t.toString) return t.toString();
      throw new Error("Cannot stringify timestamp");
    }
    static timestampToComparable(e) {
      const t = typeof e;
      if ("string" === t) return new Date(e).getTime();
      if ("number" === t) return e;
      if (e instanceof Date) return e.getTime();
      if (void 0 !== e.number) return e.number;
      throw new Error("Cannot compare timestamp");
    }
    static yearFrac(e, t) {
      return (t - e) / 365 / _g;
    }
    static yearFraction(t, n, r = "ActualActual") {
      const a = e.timestampToComparable(t),
        o = e.timestampToComparable(n);
      if (a === o) return 0;
      if (a > o) return -e.yearFraction(n, t, r);
      if ("Actual365" === r) return (o - a) / 365 / _g;
      if ("Actual360" === r) return (o - a) / 360 / _g;
      if ("ActualActual" === r) {
        let t = 0,
          n = e.timestampToComparable(a);
        for (; e.addYears(n, 1) < o; ) (t += 1), (n = e.addYears(n, 1));
        let r = 365;
        const i = e.getYear(new Date(n)),
          l = e.getYear(new Date(o));
        if (e.isLeapYear(i)) {
          const t = e.timestampToComparable(i.toString() + "-02-29");
          n <= t && o > t && (r += 1);
        } else if (e.isLeapYear(l)) {
          const t = e.timestampToComparable(l.toString() + "-02-29");
          n <= t && o > t && (r += 1);
        }
        return t + (o - n) / r / _g;
      }
    }
  };
  wg.isDate = (e) => /^[12][90][0-9]{2}-[01][0-9]-[0-3][0-9]$/.exec(e);
  let Sg = wg;
  var kg = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
        var t = this,
          n = (function () {
            var e = 4022871197;
            return function (t) {
              t = String(t);
              for (var n = 0; n < t.length; n++) {
                var r = 0.02519603282416938 * (e += t.charCodeAt(n));
                (r -= e = r >>> 0),
                  (e = (r *= e) >>> 0),
                  (e += 4294967296 * (r -= e));
              }
              return 2.3283064365386963e-10 * (e >>> 0);
            };
          })();
        (t.next = function () {
          var e = 2091639 * t.s0 + 2.3283064365386963e-10 * t.c;
          return (t.s0 = t.s1), (t.s1 = t.s2), (t.s2 = e - (t.c = 0 | e));
        }),
          (t.c = 1),
          (t.s0 = n(" ")),
          (t.s1 = n(" ")),
          (t.s2 = n(" ")),
          (t.s0 -= n(e)),
          t.s0 < 0 && (t.s0 += 1),
          (t.s1 -= n(e)),
          t.s1 < 0 && (t.s1 += 1),
          (t.s2 -= n(e)),
          t.s2 < 0 && (t.s2 += 1),
          (n = null);
      }
      function r(e, t) {
        return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t;
      }
      function a(e, t) {
        var a = new n(e),
          o = t && t.state,
          i = a.next;
        return (
          (i.int32 = function () {
            return (4294967296 * a.next()) | 0;
          }),
          (i.double = function () {
            return i() + 11102230246251565e-32 * ((2097152 * i()) | 0);
          }),
          (i.quick = i),
          o &&
            ("object" == typeof o && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.alea = a);
    })(0, e);
  })(kg);
  var xg = kg.exports,
    Eg = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
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
      function r(e, t) {
        return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t;
      }
      function a(e, t) {
        var a = new n(e),
          o = t && t.state,
          i = function () {
            return (a.next() >>> 0) / 4294967296;
          };
        return (
          (i.double = function () {
            do {
              var e =
                ((a.next() >>> 11) + (a.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (i.int32 = a.next),
          (i.quick = i),
          o &&
            ("object" == typeof o && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.xor128 = a);
    })(0, e);
  })(Eg);
  var Cg = Eg.exports,
    Og = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
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
      function r(e, t) {
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
      function a(e, t) {
        var a = new n(e),
          o = t && t.state,
          i = function () {
            return (a.next() >>> 0) / 4294967296;
          };
        return (
          (i.double = function () {
            do {
              var e =
                ((a.next() >>> 11) + (a.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (i.int32 = a.next),
          (i.quick = i),
          o &&
            ("object" == typeof o && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.xorwow = a);
    })(0, e);
  })(Og);
  var Ng = Og.exports,
    Ag = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
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
      function r(e, t) {
        return (t.x = e.x.slice()), (t.i = e.i), t;
      }
      function a(e, t) {
        null == e && (e = +new Date());
        var a = new n(e),
          o = t && t.state,
          i = function () {
            return (a.next() >>> 0) / 4294967296;
          };
        return (
          (i.double = function () {
            do {
              var e =
                ((a.next() >>> 11) + (a.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (i.int32 = a.next),
          (i.quick = i),
          o &&
            (o.x && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.xorshift7 = a);
    })(0, e);
  })(Ag);
  var Tg = Ag.exports,
    Rg = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
        var t = this;
        (t.next = function () {
          var e,
            n,
            r = t.w,
            a = t.X,
            o = t.i;
          return (
            (t.w = r = (r + 1640531527) | 0),
            (n = a[(o + 34) & 127]),
            (e = a[(o = (o + 1) & 127)]),
            (n ^= n << 13),
            (e ^= e << 17),
            (n ^= n >>> 15),
            (e ^= e >>> 12),
            (n = a[o] = n ^ e),
            (t.i = o),
            (n + (r ^ (r >>> 16))) | 0
          );
        }),
          (function (e, t) {
            var n,
              r,
              a,
              o,
              i,
              l = [],
              u = 128;
            for (
              t === (0 | t)
                ? ((r = t), (t = null))
                : ((t += "\0"), (r = 0), (u = Math.max(u, t.length))),
                a = 0,
                o = -32;
              o < u;
              ++o
            )
              t && (r ^= t.charCodeAt((o + 32) % t.length)),
                0 === o && (i = r),
                (r ^= r << 10),
                (r ^= r >>> 15),
                (r ^= r << 4),
                (r ^= r >>> 13),
                o >= 0 &&
                  ((i = (i + 1640531527) | 0),
                  (a = 0 == (n = l[127 & o] ^= r + i) ? a + 1 : 0));
            for (
              a >= 128 && (l[127 & ((t && t.length) || 0)] = -1),
                a = 127,
                o = 512;
              o > 0;
              --o
            )
              (r = l[(a + 34) & 127]),
                (n = l[(a = (a + 1) & 127)]),
                (r ^= r << 13),
                (n ^= n << 17),
                (r ^= r >>> 15),
                (n ^= n >>> 12),
                (l[a] = r ^ n);
            (e.w = i), (e.X = l), (e.i = a);
          })(t, e);
      }
      function r(e, t) {
        return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t;
      }
      function a(e, t) {
        null == e && (e = +new Date());
        var a = new n(e),
          o = t && t.state,
          i = function () {
            return (a.next() >>> 0) / 4294967296;
          };
        return (
          (i.double = function () {
            do {
              var e =
                ((a.next() >>> 11) + (a.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (i.int32 = a.next),
          (i.quick = i),
          o &&
            (o.X && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.xor4096 = a);
    })(0, e);
  })(Rg);
  var jg = Rg.exports,
    Mg = { exports: {} };
  !(function (e) {
    !(function (e, t) {
      function n(e) {
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
      function r(e, t) {
        return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t;
      }
      function a(e, t) {
        var a = new n(e),
          o = t && t.state,
          i = function () {
            return (a.next() >>> 0) / 4294967296;
          };
        return (
          (i.double = function () {
            do {
              var e =
                ((a.next() >>> 11) + (a.next() >>> 0) / 4294967296) / (1 << 21);
            } while (0 === e);
            return e;
          }),
          (i.int32 = a.next),
          (i.quick = i),
          o &&
            ("object" == typeof o && r(o, a),
            (i.state = function () {
              return r(a, {});
            })),
          i
        );
      }
      t && t.exports ? (t.exports = a) : (this.tychei = a);
    })(0, e);
  })(Mg);
  var Pg = Mg.exports,
    Fg = { exports: {} };
  const zg = (function (e) {
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
        o = 256,
        i = "random",
        l = r.pow(o, 6),
        u = r.pow(2, 52),
        s = 2 * u,
        c = o - 1;
      function f(e, c, f) {
        var y = [],
          m = v(
            h(
              (c = 1 == c ? { entropy: !0 } : c || {}).entropy
                ? [e, g(n)]
                : null == e
                ? (function () {
                    try {
                      var e;
                      return (
                        a && (e = a.randomBytes)
                          ? (e = e(o))
                          : ((e = new Uint8Array(o)),
                            (t.crypto || t.msCrypto).getRandomValues(e)),
                        g(e)
                      );
                    } catch (l) {
                      var r = t.navigator,
                        i = r && r.plugins;
                      return [+new Date(), t, i, t.screen, g(n)];
                    }
                  })()
                : e,
              3
            ),
            y
          ),
          _ = new d(y),
          b = function () {
            for (var e = _.g(6), t = l, n = 0; e < u; )
              (e = (e + n) * o), (t *= o), (n = _.g(1));
            for (; e >= s; ) (e /= 2), (t /= 2), (n >>>= 1);
            return (e + n) / t;
          };
        return (
          (b.int32 = function () {
            return 0 | _.g(4);
          }),
          (b.quick = function () {
            return _.g(4) / 4294967296;
          }),
          (b.double = b),
          v(g(_.S), n),
          (
            c.pass ||
            f ||
            function (e, t, n, a) {
              return (
                a &&
                  (a.S && p(a, _),
                  (e.state = function () {
                    return p(_, {});
                  })),
                n ? ((r[i] = e), t) : e
              );
            }
          )(b, m, "global" in c ? c.global : this == r, c.state)
        );
      }
      function d(e) {
        var t,
          n = e.length,
          r = this,
          a = 0,
          i = (r.i = r.j = 0),
          l = (r.S = []);
        for (n || (e = [n++]); a < o; ) l[a] = a++;
        for (a = 0; a < o; a++)
          (l[a] = l[(i = c & (i + e[a % n] + (t = l[a])))]), (l[i] = t);
        (r.g = function (e) {
          for (var t, n = 0, a = r.i, i = r.j, l = r.S; e--; )
            (t = l[(a = c & (a + 1))]),
              (n = n * o + l[c & ((l[a] = l[(i = c & (i + t))]) + (l[i] = t))]);
          return (r.i = a), (r.j = i), n;
        })(o);
      }
      function p(e, t) {
        return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
      }
      function h(e, t) {
        var n,
          r = [],
          a = typeof e;
        if (t && "object" == a)
          for (n in e)
            try {
              r.push(h(e[n], t - 1));
            } catch (o) {}
        return r.length ? r : "string" == a ? e : e + "\0";
      }
      function v(e, t) {
        for (var n, r = e + "", a = 0; a < r.length; )
          t[c & a] = c & ((n ^= 19 * t[c & a]) + r.charCodeAt(a++));
        return g(t);
      }
      function g(e) {
        return String.fromCharCode.apply(0, e);
      }
      if ((v(r.random(), n), e.exports)) {
        e.exports = f;
        try {
          a = zg;
        } catch (y) {}
      } else r["seed" + i] = f;
    })("undefined" != typeof self ? self : Q, [], Math);
  })(Fg);
  var Dg = xg,
    Lg = Cg,
    Ig = Ng,
    Gg = Tg,
    Ug = jg,
    $g = Pg,
    Bg = Fg.exports;
  (Bg.alea = Dg),
    (Bg.xor128 = Lg),
    (Bg.xorwow = Ig),
    (Bg.xorshift7 = Gg),
    (Bg.xor4096 = Ug),
    (Bg.tychei = $g);
  const Wg = K(Bg),
    { log: Vg, sqrt: Hg, cos: qg, PI: Yg, floor: Qg, exp: Kg } = Math;
  class Jg {
    constructor(e) {
      this.rng = Wg(e);
    }
    rand() {
      return this.rng();
    }
    random() {
      return this.rng();
    }
    randN() {
      let e = 0,
        t = 0;
      for (; 0 === e; ) e = this.rng();
      for (; 0 === t; ) t = this.rng();
      return Hg(-2 * Vg(e)) * qg(2 * Yg * t);
    }
    randomNormal() {
      return this.randN();
    }
    randX() {
      let e = this.rng();
      for (; 0 === e; ) e = this.rng();
      return -Vg(e);
    }
    randomPoisson() {
      return this.randX();
    }
    randomInt(e) {
      return Qg(e * this.rng());
    }
    randomSeed() {
      return this.randomInt(4294967296).toFixed(0);
    }
    randomItem(e) {
      return e[this.randomInt(e.length)];
    }
    randomNames(e, t = 2, n = 4) {
      const r = {};
      let a = 0;
      for (; a < e; ) {
        const e = t + this.randomInt(1 + n - t);
        let o = "";
        for (let t = 0; t < e; t++) o += this.randomItem("ABCDEGHKLNRSTUVZ");
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
        ],
        a = {};
      let o = 0;
      for (; o < e; ) {
        const e = t + this.randomInt(1 + n - t);
        let i = "";
        for (let t = 0; t < e; t++)
          i += ("" !== i ? " " : "") + this.randomItem(r);
        void 0 === a[i] && ((a[i] = !0), o++);
      }
      return Object.keys(a);
    }
    randomObjectId() {
      const e = () => Qg(this.randomInt(4294967296)).toString(16);
      return e() + e() + e();
    }
    randomTimeSeries(e, t, n) {
      let r = 0.15,
        a = 0.4,
        o = 0.06,
        i = 0.15;
      ("Bond" !== n && "Swap" !== n) || ((r = 0.02), (a = 0.07)),
        ("Future" !== n && "Index" !== n) || ((r = 0.075), (a = 0.15)),
        "Fx" === n && ((r = 0.08), (a = 0.12)),
        "Stock" === n && ((r = 0.15), (a = 0.3));
      const l = this.randomNames(1)[0],
        u = r + (a - r) * this.rand();
      ("Bond" !== n && "Fx" !== n) || ((o = 0), (i = 0)),
        "Swap" === n && ((o = -0.02), (i = 0));
      const s = o + i * this.randN(),
        c = 0.02 * this.randN();
      let f = 100 * Kg(this.randN());
      "Bond" === n
        ? (f = 100 * Kg(0.01 * this.randN()))
        : "Stock" === n
        ? (f = 100 * Kg(0.5 * this.randN()))
        : "Fx" === n
        ? (f = 5 + 10 * this.rand())
        : ("Future" !== n && "Index" !== n) ||
          (f = 1e3 * Kg(0.1 * this.randN()));
      const d = this.randomSeed(),
        p = new mg();
      let h = iy.generateRandomTimeSeries(
        e,
        t,
        (e) => p.isBusinessDay(e),
        s,
        u,
        c,
        1,
        d
      );
      return (
        (h = h.mult(f / h.startValue)),
        "Swap" === n && (h = h.add(-h.startValue)),
        (h.name = l),
        h
      );
    }
  }
  const {
    timestampToComparable: Xg,
    timestampToString: Zg,
    addDays: ey,
    getYear: ty,
    addMonths: ny,
    yearFraction: ry,
  } = Sg;
  var ay = ((e) => (
    (e.Latest = "Latest"),
    (e.Exact = "Exact"),
    (e.LatestWithinRange = "LatestWithinRange"),
    e
  ))(ay || {});
  const oy = class e {
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
      return sg(this.__values);
    }
    clone() {
      return new e(this.__dates, this.__values, this.name);
    }
    add(t) {
      const n = this.clone();
      if (t instanceof e) {
        if (t.length !== this.length)
          throw new Error("Cannot add TimeSeries of different length");
        for (let e = 0; e < n.length; e++) n.__values[e] += t.__values[e];
      } else for (let e = 0; e < n.length; e++) n.__values[e] += t;
      return n;
    }
    subtract(t) {
      const n = this.clone();
      if (t instanceof e) {
        if (t.length !== this.length)
          throw new Error("Cannot subtract TimeSeries of different length");
        for (let e = 0; e < n.length; e++) n.__values[e] -= t.__values[e];
      } else for (let e = 0; e < n.length; e++) n.__values[e] -= t;
      return n;
    }
    mult(t) {
      const n = this.clone();
      if (t instanceof e) {
        if (t.length !== this.length)
          throw new Error("Cannot multiply TimeSeries of different length");
        for (let e = 0; e < n.length; e++) n.__values[e] *= t.__values[e];
      } else for (let e = 0; e < n.length; e++) n.__values[e] *= t;
      return n;
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
        (this.end.getTime() - this.start.getTime()) / _g / (this.count - 1);
      if (0 === e) return 0;
      const t = 365.25 / e;
      return t > 300
        ? 365
        : t > 200
        ? 252
        : t > 40
        ? 52
        : t > 10
        ? 12
        : t > 3
        ? 4
        : t > 1.5
        ? 2
        : 1;
    }
    yearFraction() {
      return (this.length - 1) / this.periodicity();
    }
    static isNotNilAndFinite(e) {
      return !Kv.isNil(e) && isFinite(e);
    }
    static cumOperator(e, t, n) {
      let r = t;
      for (let a = 0; a < e.__values.length; a++)
        (r = n(r, e.__values[a])), (e.__values[a] = r);
      return e;
    }
    cumProd() {
      const t = this.clone();
      return e.cumOperator(t, 1, (t, n) =>
        e.isNotNilAndFinite(t) && e.isNotNilAndFinite(n) ? t * n : Number.NaN
      );
    }
    cumSum() {
      const t = this.clone();
      return e.cumOperator(t, 0, (t, n) =>
        e.isNotNilAndFinite(t) && e.isNotNilAndFinite(n) ? t + n : Number.NaN
      );
    }
    return() {
      const t = [],
        n = [];
      if (this.__values.length > 0) {
        let r = this.__values[0];
        for (let a = 1; a < this.length; a++) {
          const o = this.__values[a];
          let i = Number.NaN;
          e.isNotNilAndFinite(r) &&
            0 !== r &&
            e.isNotNilAndFinite(o) &&
            (i = o / r - 1),
            t.push(i),
            n.push(this.__dates[a]),
            (r = o);
        }
      }
      return new e(n, t, this.name);
    }
    diff() {
      const t = [],
        n = [];
      if (this.__values.length > 0) {
        let r = this.__values[0];
        for (let a = 1; a < this.length; a++) {
          const o = this.__values[a];
          let i = Number.NaN;
          e.isNotNilAndFinite(r) &&
            0 !== r &&
            e.isNotNilAndFinite(o) &&
            (i = o - r),
            t.push(i),
            n.push(this.__dates[a]),
            (r = o);
        }
      }
      return new e(n, t, this.name);
    }
    indexOf(e) {
      const t = Xg,
        n = t(e);
      if (void 0 === this.__dates) return -1;
      const r = this.__dates;
      let a;
      const o = this.__dates.length;
      if (0 === o) return -1;
      if (n < t(r[0])) return -1;
      if (n >= t(r[o - 1])) return o - 1;
      if (o > 40) {
        let e = o - 1,
          i = 0;
        if (n >= t(r[e])) return e;
        for (; e > i + 1; )
          (a = Math.floor((e + i) / 2)),
            n >= t(r[a]) ? (i = a) : ((e = a), (a = i));
        return a;
      }
      for (a = 1; n >= t(r[a]) && a < o - 1; ) a++;
      return a - 1;
    }
    range(t, n) {
      const r = Xg,
        a = r(t),
        o = r(n),
        i = [],
        l = [];
      for (let e = 0; e < this.__dates.length; e++) {
        const t = r(this.__dates[e]);
        t >= a && t <= o && (i.push(this.__dates[e]), l.push(this.__values[e]));
      }
      return new e(i, l, this.name);
    }
    latestValue(e) {
      const t = this.indexOf(e);
      return -1 === t ? Number.NaN : this.__values[t];
    }
    static weightedTimeSeries(t, n) {
      const r = [],
        a = [];
      for (let e = 0; e < n[0].__values.length; e++) {
        let o = 0;
        for (let r = 0; r < n.length; r++) o += t[r] * n[r].__values[e];
        r.push(n[0].__dates[e]), a.push(o);
      }
      return new e(r, a);
    }
    static fromJson(t) {
      if (!t || (!t.dates && !t.timestamps)) return new e([], []);
      const n = (t.dates ? t.dates : t.timestamps).map((e) => new Date(e)),
        r = t.values.map((e) => parseFloat(e));
      return new e(n, r, t.name);
    }
    static toGrid(e) {
      const t = Xg,
        n = {};
      e.forEach((e, r) =>
        e.__dates.forEach((a, o) => {
          const i = t(a);
          let l = n[i];
          void 0 === l && ((l = { date: a }), (n[i] = l)),
            (l["value" + r] = e.__values[o]);
        })
      );
      const r = Object.keys(n);
      return r.sort(), r.map((e) => n[e]);
    }
    static align(t, n, r = "Latest") {
      const a = Xg(new Date("9999-12-31")),
        o = (e) => Xg(e + 1 < n.__dates.length ? n.__dates[e + 1] : a);
      if (0 === t.__dates.length || 0 === n.__dates.length)
        return new e([], [], n.name);
      if (t.__dates[0].toISOString() < n.__dates[0].toISOString()) {
        const e =
          "Warning: TimeSeries.align masterTimeSeries: " +
          t.name +
          " " +
          t.__dates[0].toISOString() +
          " starts earlier than synchTimeSeries: " +
          n.name +
          " " +
          n.__dates[0].toISOString() +
          "\n This is probably not what you want, you are going to get NaN in the timeseries";
        console.error(e);
      }
      let i;
      const l = [];
      let u = 0,
        s = Xg(n.__dates[u]),
        c = o(u);
      for (let e = 0; e < t.__dates.length; e++) {
        const a = Xg(t.__dates[e]);
        for (0 === e && (i = a); c <= a; ) (s = c), (c = o(++u));
        let f = Number.NaN;
        (s === a || ("Exact" !== r && s < a)) &&
          (f = u < n.__dates.length ? n.__values[u] : Number.NaN),
          "LatestWithinRange" === r && s < i && (f = Number.NaN),
          l.push(f);
      }
      const f = n.__dates[0].constructor;
      return f === Date
        ? new e(
            t.__dates.map((e) => new Date(e)),
            l,
            n.name
          )
        : new e(
            f === String ? t.__dates.map((e) => Zg(e)) : t.__dates,
            l,
            n.name
          );
    }
    maxDrawdown(t) {
      let n,
        r,
        a = -9e9,
        o = 0,
        i = -1,
        l = -1;
      const u = [],
        s = [];
      for (let e = 0; e < this.count; e++) {
        const c = this.__values[e];
        isFinite(c) &&
          null !== c &&
          (c > a && ((a = c), (n = e)),
          (r = c / a - 1),
          r < o && ((o = r), (i = n), (l = e)),
          t && (u.push(this.__dates[e]), s.push(r)));
      }
      return (
        !t &&
          i >= 0 &&
          l > 0 &&
          (u.push(this.__dates[i]),
          u.push(this.__dates[l]),
          s.push(this.__values[i]),
          s.push(this.__values[l])),
        new e(u, s, this.name)
      );
    }
    static generateRandomTimeSeries(t, n, r, a, o, i, l, u) {
      const s = Xg;
      let c = r;
      if (void 0 !== t.isBusinessDay)
        c = !0 === r ? (e) => e.isBusinessDay : null;
      else if (!0 === r) {
        const e = new mg();
        c = (t) => e.isBusinessDay(t);
      }
      !1 === c && (c = null);
      const f = new Jg(u);
      let d = t;
      const p = [],
        h = [];
      let v = 365;
      if (!Kv.isNil(c)) for (v = 252; !c(d); ) d = ey(d, 1);
      const g = s(n);
      for (; s(d) <= g; ) {
        h.push(0 === p.length ? 0 : f.randN()),
          p.push(d),
          h.push(),
          (d = ey(d, 1));
        let e = 0;
        for (; !(Kv.isNil(c) || c(d) || e++ >= 366); ) d = ey(d, 1);
      }
      if (0 !== l) {
        const e = l,
          t = Math.sqrt(1 - e * e);
        let n = 1;
        for (; n < h.length; ) {
          const r = h[n];
          (h[n] = e * r + t * f.randN()), n++;
        }
      }
      let y = 100,
        m = 0;
      const _ = o / Math.sqrt(v),
        b = Math.pow(1 + a, 1 / v) - 1 - (_ * _) / 2;
      let w = 0;
      for (
        ;
        w < h.length &&
        ((h[w] = Math.round(100 * y) / 100), w++, w !== h.length);

      ) {
        const e = _ * h[w];
        (y *= 1 + b + e + i * m), (m = e);
      }
      return new e(p, h, String(u));
    }
    annualizedReturn(t = e.AnnualizationMethod.geometric) {
      if (
        e.isNotNilAndFinite(this.endValue) &&
        e.isNotNilAndFinite(this.startValue)
      ) {
        if (t === e.AnnualizationMethod.geometric)
          return (
            (this.endValue / this.startValue) ** (1 / this.yearFraction()) - 1
          );
        if (t === e.AnnualizationMethod.arithmetic) {
          const e = this.return();
          return (e.average * e.count) / this.yearFraction();
        }
      }
      return Number.NaN;
    }
    annualizedGeometricReturn() {
      return e.isNotNilAndFinite(this.endValue) &&
        e.isNotNilAndFinite(this.startValue)
        ? (this.endValue / this.startValue) ** (1 / this.yearFraction()) - 1
        : Number.NaN;
    }
    annualizedArithmeticReturn() {
      if (
        e.isNotNilAndFinite(this.endValue) &&
        e.isNotNilAndFinite(this.startValue)
      ) {
        const e = this.return();
        return (e.average * e.count) / this.yearFraction();
      }
      return Number.NaN;
    }
    annualizedTimeWeightedReturn() {
      return e.isNotNilAndFinite(this.endValue) &&
        e.isNotNilAndFinite(this.startValue)
        ? ((this.endValue / this.startValue) ** (1 / this.length) - 1) *
            this.yearFraction()
        : Number.NaN;
    }
    valueReturn() {
      if (
        e.isNotNilAndFinite(this.endValue) &&
        e.isNotNilAndFinite(this.startValue)
      )
        return this.endValue / this.startValue - 1;
    }
    yearToDateReturn() {
      const t = ty(new Date(this.end)),
        n = this.latestValue(new Date((t - 1).toString() + "-12-31"));
      return e.isNotNilAndFinite(this.endValue) && e.isNotNilAndFinite(n)
        ? this.endValue / n - 1
        : Number.NaN;
    }
    annualizedYearToDateReturn(t = e.AnnualizationMethod.geometric) {
      const n = this.yearToDateReturn();
      if (e.isNotNilAndFinite(n)) {
        if (t === e.AnnualizationMethod.geometric)
          return (n + 1) ** (1 / this.yearFraction()) - 1;
        if (t === e.AnnualizationMethod.arithmetic)
          return n / this.yearFraction();
      }
      return Number.NaN;
    }
    specificYearReturn(t) {
      const n = new Date(t.toString() + "-12-31"),
        r = this.latestValue(new Date(t.toString() + "-12-31")),
        a = this.latestValue(Sg.addYears(n, -1).toString());
      return e.isNotNilAndFinite(r) && e.isNotNilAndFinite(a)
        ? r / a - 1
        : Xg(this.start) >= Sg.addYears(n, -1)
        ? r / this.startValue - 1
        : Number.NaN;
    }
    volatility() {
      return sg(this.return().__values) * Math.sqrt(this.periodicity());
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
      return (function (e) {
        const t = e.length;
        let n = 0,
          r = 0,
          a = 0;
        for (let l = 0; l < t; l++) {
          const t = e[l],
            o = ug(t);
          (n += t), (r += o), (a += t * o);
        }
        const o = ug(t),
          i = eg((r - og(n, 2) / t) / (t - 1));
        return (
          ((t / (t - 1) / (t - 2)) *
            (a - (3 / t) * n * r + (2 / o) * og(n, 3))) /
          og(i, 3)
        );
      })(this.return().__values);
    }
    kurtosis() {
      return (function (e) {
        const t = e.length;
        let n = 0,
          r = 0,
          a = 0,
          o = 0;
        for (let s = 0; s < t; s++) {
          const t = e[s];
          (n += t), (r += ug(t)), (a += og(t, 3)), (o += og(t, 4));
        }
        const i = og(t, 2),
          l = og(t, 3),
          u = eg((r - ug(n) / t) / (t - 1));
        return (
          ((i *
            (t + 1) *
            ((1 / t) *
              (o -
                (4 / t) * n * a +
                (6 / i) * ug(n) * r -
                (3 / l) * og(n, 4)))) /
            og(u, 4) -
            3 * og(t - 1, 3)) /
          (t - 1) /
          (t - 2) /
          (t - 3)
        );
      })(this.return().__values);
    }
    correlation(t) {
      if (!(t instanceof e))
        throw new Error("Object other needs to be of type TimeSeries");
      return (function (e, t) {
        const n = e.length;
        let r = 0,
          a = 0,
          o = 0,
          i = 0,
          l = 0;
        for (let u = 0; u < n; u++) {
          const n = e[u],
            s = t[u];
          (r += n), (a += s), (o += n * s), (i += ug(n)), (l += ug(s));
        }
        return (n * o - r * a) / eg((n * i - ug(r)) * (n * l - ug(a)));
      })(this.return().__values, t.return().__values);
    }
    downSideVaR(e) {
      return (function (e, t) {
        e.sort(function (e, t) {
          return e - t;
        });
        const n = t * (e.length - 1),
          r = lg(n);
        return r === n ? e[n] : Number((n - r) * e[r + 1] + (r + 1 - n) * e[r]);
      })(this.return().__values, 1 - e);
    }
    conditionalVaR(e) {
      const t = this.return().__values.sort(function (e, t) {
          return e - t;
        }),
        n = (1 - e) * (this.return().length - 1);
      return (function (e) {
        const t = e.length;
        let n = 0;
        for (let r = 0; r < t; r++) n += e[r];
        return n / t;
      })(t.slice(0, Math.floor(n) + 1));
    }
    sharpeRatio() {
      return this.annualizedReturn() / this.volatility();
    }
    resample(t) {
      let n = this.end;
      const r = [],
        a = [];
      for (; this.start <= n; ) r.unshift(n), a.unshift(1), (n = ey(n, -t));
      const o = new e(r, a, "Resampled Timeseries");
      return e.align(o, this, "Latest");
    }
    resampleToWeekly() {
      return this.resample(7);
    }
    resampleToMonthly() {
      let t = this.end;
      const n = [],
        r = [];
      for (; this.start <= t; ) n.unshift(t), r.unshift(1), (t = ny(t, -1));
      const a = new e(n, r, "Resampled Timeseries");
      return e.align(a, this, "Latest");
    }
    resampleToCalenderMonthly(t = !0) {
      const n = {};
      for (let e = 0; e < this.length; e++)
        n[new Date(this.__dates[e]).toISOString().substring(0, 7)] = {
          date: this.__dates[e],
          value: this.__values[e],
        };
      const r = Object.values(n),
        a = [],
        o = [];
      t && (a.push(this.start), o.push(this.startValue));
      for (let e = 0; e < r.length; e++) {
        const t = r[e];
        a.push(t.date), o.push(t.value);
      }
      return new e(a, o, this.name);
    }
    resampleToFixedNumberOfObservations(t = 400) {
      if (this.length <= t) return this.clone();
      const n = Math.ceil(this.length / t),
        r = [],
        a = [];
      for (let e = this.length - 1; e >= 0; e -= n)
        r.unshift(this.__dates[e]), a.unshift(this.__values[e]);
      return new e(r, a, this.name);
    }
    excessReturn(t) {
      if (!(t instanceof e))
        throw new Error("Other time serie must be of type TimeSeries");
      if (t.length !== this.length)
        throw new Error("TimeSeries objects needs to be of same length");
      const n = [],
        r = this.return(),
        a = t.return();
      for (let e = 0; e < r.length; e++)
        n.push(Number(r.__values[e] - a.__values[e]));
      return new e(this.__dates, n, "Excess return Timeseries");
    }
    equals(t) {
      if (!(t instanceof e))
        throw new Error("Object other needs to be of type TimeSeries");
      for (let e = 0; e < this.__values.length; e++)
        if (
          this.__values[e] !== t.__values[e] ||
          Xg(this.__dates[e]) !== Xg(t.__dates[e])
        )
          return !1;
      return !0;
    }
    normalize(t = 1) {
      const n = this.startValue,
        r = [];
      for (let e = 0; e < this.length; e++) r.push((this.__values[e] / n) * t);
      return new e(this.__dates, r, this.name);
    }
    prepend(t) {
      if (!(t instanceof e))
        throw new Error("Other time serie must be of type TimeSeries");
      if (Xg(this.start) < Xg(t.start)) return this.clone();
      const n = t.range(t.start, this.start);
      if (Xg(this.start) !== Xg(n.end))
        throw new Error(
          "Cannot concat series since start date in this series not present in other series"
        );
      const r = this.startValue / n.endValue,
        a = [],
        o = [],
        i = this.__dates[0].constructor;
      for (let e = 0; e < n.length - 1; e++)
        a.push(n.__values[e] * r),
          i === Date
            ? o.push(new Date(n.__dates[e]))
            : o.push(Zg(n.__dates[e]));
      return new e(
        [...o, ...this.__dates],
        [...a, ...this.__values],
        this.name
      );
    }
    trackingError(t, n = this.end) {
      if (!(t instanceof e))
        throw new Error("Other time serie must be of type TimeSeries");
      const r = Sg.addMonths(Sg.addYears(n, -2), -1).toString(),
        a = this.range(r, n),
        o = t.range(r, n),
        i = a.resampleToMonthly().return(),
        l = o.resampleToMonthly().return();
      return sg(i.subtract(l).__values) * Math.sqrt(12);
    }
    informationRatio(t) {
      if (!(t instanceof e))
        throw new Error("Other time serie must be of type TimeSeries");
      if (t.length !== this.length)
        throw new Error("TimeSeries objects needs to be of same length");
      const n = Sg.addMonths(Sg.addYears(this.end, -2), -1).toString(),
        r = this.range(n, this.end),
        a = t.range(n, t.end),
        o = r.resampleToMonthly().return(),
        i = a.resampleToMonthly().return();
      return (
        o.subtract(i).add(1).cumProd().annualizedReturn() /
        this.trackingError(t)
      );
    }
    compoundAdjustment(t = 0, n = bg.Actual365) {
      if (0 === t) return this.clone();
      const r = [];
      for (let e = 0; e < this.length; e++)
        r.push(
          this.__values[e] * Math.pow(1 + t, ry(this.start, this.__dates[e], n))
        );
      return new e(this.__dates, r, this.name);
    }
    runningAdjustment(t = 0, n = bg.Actual365) {
      if (0 === t) return this.clone();
      const r = [];
      r.push(this.startValue);
      let a,
        o = this.startValue;
      for (let e = 1; e < this.length; e++)
        (a =
          o *
          (this.__values[e] / this.__values[e - 1] +
            t * ry(this.__dates[e - 1], this.__dates[e], n))),
          r.push(a),
          (o = a);
      return new e(this.__dates, r, this.name);
    }
  };
  (oy.AlignSetMethod = Object.freeze({
    intersection: "intersection",
    union: "union",
  })),
    (oy.AnnualizationMethod = Object.freeze({
      geometric: "geometric",
      arithmetic: "arithmetic",
    }));
  let iy = oy;
  const { floor: ly, pow: uy } = Math;
  new Jg(new Date().getTime().toFixed());
  const { floor: sy, random: cy, log: fy, exp: dy, sqrt: py, pow: hy } = Math,
    {
      timestampToComparable: vy,
      addDays: gy,
      getYear: yy,
      getMonth: my,
      getEndOfMonth: _y,
    } = Sg;
  var by = { exports: {} };
  !(function (e) {
    e.exports = (function () {
      var e = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
        t = {};
      return function (n, r, a) {
        var o,
          i = function (e, n, r) {
            void 0 === r && (r = {});
            var a = new Date(e);
            return (function (e, n) {
              void 0 === n && (n = {});
              var r = n.timeZoneName || "short",
                a = e + "|" + r,
                o = t[a];
              return (
                o ||
                  ((o = new Intl.DateTimeFormat("en-US", {
                    hour12: !1,
                    timeZone: e,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZoneName: r,
                  })),
                  (t[a] = o)),
                o
              );
            })(n, r).formatToParts(a);
          },
          l = function (t, n) {
            for (var r = i(t, n), o = [], l = 0; l < r.length; l += 1) {
              var u = r[l],
                s = u.type,
                c = u.value,
                f = e[s];
              f >= 0 && (o[f] = parseInt(c, 10));
            }
            var d = o[3],
              p = 24 === d ? 0 : d,
              h =
                o[0] +
                "-" +
                o[1] +
                "-" +
                o[2] +
                " " +
                p +
                ":" +
                o[4] +
                ":" +
                o[5] +
                ":000",
              v = +t;
            return (a.utc(h).valueOf() - (v -= v % 1e3)) / 6e4;
          },
          u = r.prototype;
        (u.tz = function (e, t) {
          void 0 === e && (e = o);
          var n = this.utcOffset(),
            r = this.toDate(),
            i = r.toLocaleString("en-US", { timeZone: e }),
            l = Math.round((r - new Date(i)) / 1e3 / 60),
            u = a(i, { locale: this.$L })
              .$set("millisecond", this.$ms)
              .utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - l, !0);
          if (t) {
            var s = u.utcOffset();
            u = u.add(n - s, "minute");
          }
          return (u.$x.$timezone = e), u;
        }),
          (u.offsetName = function (e) {
            var t = this.$x.$timezone || a.tz.guess(),
              n = i(this.valueOf(), t, { timeZoneName: e }).find(function (e) {
                return "timezonename" === e.type.toLowerCase();
              });
            return n && n.value;
          });
        var s = u.startOf;
        (u.startOf = function (e, t) {
          if (!this.$x || !this.$x.$timezone) return s.call(this, e, t);
          var n = a(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
            locale: this.$L,
          });
          return s.call(n, e, t).tz(this.$x.$timezone, !0);
        }),
          (a.tz = function (e, t, n) {
            var r = n && t,
              i = n || t || o,
              u = l(+a(), i);
            if ("string" != typeof e) return a(e).tz(i);
            var s = (function (e, t, n) {
                var r = e - 60 * t * 1e3,
                  a = l(r, n);
                if (t === a) return [r, t];
                var o = l((r -= 60 * (a - t) * 1e3), n);
                return a === o
                  ? [r, a]
                  : [e - 60 * Math.min(a, o) * 1e3, Math.max(a, o)];
              })(a.utc(e, r).valueOf(), u, i),
              c = s[0],
              f = s[1],
              d = a(c).utcOffset(f);
            return (d.$x.$timezone = i), d;
          }),
          (a.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
          }),
          (a.tz.setDefault = function (e) {
            o = e;
          });
      };
    })();
  })(by);
  const wy = K(by.exports);
  pg.extend(gg),
    pg.extend(wy),
    pg.extend(gg),
    pg.extend(wy),
    pg.extend(gg),
    pg.extend(wy);
  var Sy = {},
    ky = { exports: {} };
  function xy() {}
  function Ey() {}
  (Ey.resetWarningCache = xy),
    (ky.exports = (function () {
      function e(e, t, n, r, a, o) {
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== o) {
          var i = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((i.name = "Invariant Violation"), i);
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
        checkPropTypes: Ey,
        resetWarningCache: xy,
      };
      return (n.PropTypes = n), n;
    })());
  var Cy = ky.exports;
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
              t && i(e, t);
          })(v, n);
          var a,
            o,
            d,
            p,
            h =
              ((a = v),
              (o = (function () {
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
                } catch (d) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  n = u(a);
                if (o) {
                  var r = u(this).constructor;
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
          function v(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, v),
              ((t = h.call(this, e)).p = Promise.resolve()),
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
            (d = v),
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
                    o = e.revision !== this.props.revision;
                  (r || (a && (!a || o))) &&
                    this.updatePlotly(!1, this.props.onUpdate, !1);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  (this.unmounting = !0),
                    this.figureCallback(this.props.onPurge),
                    this.resizeHandler &&
                      f &&
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
                    c.forEach(function (t) {
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
                    c.forEach(function (t) {
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
                  f &&
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
                  (this.el = e), this.props.debug && f && (window.gd = this.el);
                },
              },
              {
                key: "syncEventHandlers",
                value: function () {
                  var e = this;
                  s.forEach(function (t) {
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
            p &&
              (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              })(d.prototype, p),
            Object.defineProperty(d, "prototype", { writable: !1 }),
            v
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
          s.forEach(function (e) {
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
      r = (function (e) {
        if (e && e.__esModule) return e;
        if (null === e || ("object" !== t(e) && "function" != typeof e))
          return { default: e };
        var n = o(void 0);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var l = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(r, i, l)
              : (r[i] = e[i]);
          }
        return (r.default = e), n && n.set(e, r), r;
      })(Fe),
      a = (n = Cy) && n.__esModule ? n : { default: n };
    function o(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (o = function (e) {
        return e ? n : t;
      })(e);
    }
    function i(e, t) {
      return (i = Object.setPrototypeOf
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
    function u(e) {
      return (u = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var s = [
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
      c = [
        "plotly_restyle",
        "plotly_redraw",
        "plotly_relayout",
        "plotly_relayouting",
        "plotly_doubleclick",
        "plotly_animated",
        "plotly_sunburstclick",
      ],
      f = "undefined" != typeof window;
  })(Sy);
  const Oy = K(Sy),
    Ny = "#2186c5";
  function Ay(e) {
    try {
      var t = getComputedStyle(document.body).getPropertyValue(
        "--color" + (e % 12)
      );
      return t && "" !== t.trim() ? t.trim() : Ny;
    } catch (n) {
      return Ny;
    }
  }
  const Ty = (e, t) => Kv.merge(e, t),
    Ry = (e, t) => Kv.merge(e, t),
    jy = Oy(e),
    My = (e) => {
      var t = e,
        { timeseries: n, layout: r, config: a } = t,
        o = __objRest(t, ["timeseries", "layout", "config"]);
      const i = [
          "#66BC6B",
          "#BDBDBD",
          "#B3E5FC",
          "#1F5F32",
          "#757575",
          "#01579B",
          "#AB47BC",
          "#4A148C",
        ],
        l = n.map((e, t) =>
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
          })(e.normalize(1).add(-1), e.name, i[t])
        ),
        u = l.map((e) => e.y.reduce((e, t) => Math.max(Math.abs(t), e), 0)),
        s = Math.max(u.reduce((e, t) => Math.max(Math.abs(t), e), 0));
      let c = Ry(
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
      r && (c = Ry(c, r));
      let f = Ty(
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
        a && (f = Ty(f, a)),
        We.jsx(
          jy,
          __spreadValues(
            {
              data: l,
              config: f,
              layout: c,
              useResizeHandler: !0,
              className: "w-100",
            },
            o
          )
        )
      );
    };
  function Py(e) {
    const t = [];
    let n = e.classes.find((e) => "C" === e.shareClass);
    e.classes.forEach((e) => {
      e.enabled && null !== e.returnTimeSeries && (n = e);
    });
    const r = new iy(
      n.returnTimeSeries.dates,
      n.returnTimeSeries.values,
      e.name
    );
    t.push(r);
    for (let a = 0; a < e.benchmarks.length; a++) {
      const n = e.benchmarks[a];
      let o = new iy(
        n.returnTimeSeries.dates,
        n.returnTimeSeries.values,
        n.longName
      );
      if (((o = iy.align(r, o)), n.currency !== n.instrumentCurrency)) {
        const t = n.instrumentCurrency + n.currency,
          a = e.fxRates.find((e) => e.name === t),
          i = new iy(a.dates, a.values, a),
          l = iy.align(r, i);
        o = o.mult(l);
      }
      t.push(o);
    }
    return t;
  }
  const { sqrt: Fy, sin: zy, acos: Dy } = Math;
  ze.Component, ze.Component;
  class Ly extends ze.Component {
    render() {
      return We.jsxs("svg", {
        version: "2",
        viewBox: "0 0 512 512",
        xmlns: "http://www.w3.org/2000/svg",
        className: "Excel",
        style: this.props.style,
        children: [
          We.jsx("path", {
            style: { fill: "#ECEFF1" },
            d: "M496,432.011H272c-8.832,0-16-7.168-16-16s0-311.168,0-320s7.168-16, 16-16h224\tc8.832,0,16,7.168,16,16v320C512,424.843,504.832,432.011,496,432.011z",
          }),
          We.jsxs("g", {
            children: [
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,176.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,176.011,336,176.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,240.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,240.011,336,240.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,304.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,304.011,336,304.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M336,368.011h-64c-8.832,0-16-7.168-16-16s7.168-16,16-16h64c8.832,0,16,7.168,16,16 S344.832,368.011,336,368.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,176.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,176.011,432,176.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,240.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,240.011,432,240.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,304.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,304.011,432,304.011z",
              }),
              We.jsx("path", {
                style: { fill: "#388E3C" },
                d: "M432,368.011h-32c-8.832,0-16-7.168-16-16s7.168-16,16-16h32c8.832,0,16,7.168,16,16 S440.832,368.011,432,368.011z",
              }),
            ],
          }),
          We.jsx("path", {
            style: { fill: "#2E7D32" },
            d: "M282.208,19.691c-3.648-3.04-8.544-4.352-13.152-3.392l-256,48C5.472,65.707,0,72.299,0,80.011v352 c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.952,0.288,2.944,0.288c3.712,0,7.328-1.28,10.208-3.68 c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.243,285.888,22.731,282.208,19.691z",
          }),
          We.jsx("path", {
            style: { fill: "#FAFAFA" },
            d: "M220.032,309.483l-50.592-57.824l51.168-65.792c5.44-6.976,4.16-17.024-2.784-22.464 c-6.944-5.44-16.992-4.16-22.464,2.784l-47.392,60.928l-39.936-45.632c-5.856-6.72-15.968-7.328-22.56-1.504\n\tc-6.656,5.824-7.328,15.936-1.504,22.56l44,50.304L83.36,310.187c-5.44,6.976-4.16,17.024,2.784,22.464\tc2.944,2.272,6.432,3.36,9.856,3.36c4.768,0,9.472-2.112,12.64-6.176l40.8-52.48l46.528,53.152\n\tc3.168,3.648,7.584,5.504,12.032,5.504c3.744,0,7.488-1.312,10.528-3.968C225.184,326.219,225.856,316.107,220.032,309.483z",
          }),
        ],
      });
    }
  }
  ze.Component;
  var Iy = { exports: {} };
  !(function (e) {
    !(function () {
      var t = {}.hasOwnProperty;
      function n() {
        for (var e = "", t = 0; t < arguments.length; t++) {
          var n = arguments[t];
          n && (e = a(e, r(n)));
        }
        return e;
      }
      function r(e) {
        if ("string" == typeof e || "number" == typeof e) return e;
        if ("object" != typeof e) return "";
        if (Array.isArray(e)) return n.apply(null, e);
        if (
          e.toString !== Object.prototype.toString &&
          !e.toString.toString().includes("[native code]")
        )
          return e.toString();
        var r = "";
        for (var o in e) t.call(e, o) && e[o] && (r = a(r, o));
        return r;
      }
      function a(e, t) {
        return t ? (e ? e + " " + t : e + t) : e;
      }
      e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
    })();
  })(Iy);
  const Gy = K(Iy.exports),
    Uy = ({}) => We.jsx(Fe.Fragment, {});
  var $y = { exports: {} };
  !(function (e) {
    !(function () {
      function t(e, t, n) {
        var r = new XMLHttpRequest();
        r.open("GET", e),
          (r.responseType = "blob"),
          (r.onload = function () {
            i(r.response, t, n);
          }),
          (r.onerror = function () {
            console.error("could not download file");
          }),
          r.send();
      }
      function n(e) {
        var t = new XMLHttpRequest();
        t.open("HEAD", e, !1);
        try {
          t.send();
        } catch (n) {}
        return 200 <= t.status && 299 >= t.status;
      }
      function r(e) {
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
      var a =
          "object" == typeof window && window.window === window
            ? window
            : "object" == typeof self && self.self === self
            ? self
            : "object" == typeof Q && Q.global === Q
            ? Q
            : void 0,
        o =
          a.navigator &&
          /Macintosh/.test(navigator.userAgent) &&
          /AppleWebKit/.test(navigator.userAgent) &&
          !/Safari/.test(navigator.userAgent),
        i =
          a.saveAs ||
          ("object" != typeof window || window !== a
            ? function () {}
            : "download" in HTMLAnchorElement.prototype && !o
            ? function (e, o, i) {
                var l = a.URL || a.webkitURL,
                  u = document.createElement("a");
                (o = o || e.name || "download"),
                  (u.download = o),
                  (u.rel = "noopener"),
                  "string" == typeof e
                    ? ((u.href = e),
                      u.origin === location.origin
                        ? r(u)
                        : n(u.href)
                        ? t(e, o, i)
                        : r(u, (u.target = "_blank")))
                    : ((u.href = l.createObjectURL(e)),
                      setTimeout(function () {
                        l.revokeObjectURL(u.href);
                      }, 4e4),
                      setTimeout(function () {
                        r(u);
                      }, 0));
              }
            : "msSaveOrOpenBlob" in navigator
            ? function (e, a, o) {
                if (((a = a || e.name || "download"), "string" != typeof e))
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
                    })(e, o),
                    a
                  );
                else if (n(e)) t(e, a, o);
                else {
                  var i = document.createElement("a");
                  (i.href = e),
                    (i.target = "_blank"),
                    setTimeout(function () {
                      r(i);
                    });
                }
              }
            : function (e, n, r, i) {
                if (
                  ((i = i || open("", "_blank")) &&
                    (i.document.title = i.document.body.innerText =
                      "downloading..."),
                  "string" == typeof e)
                )
                  return t(e, n, r);
                var l = "application/octet-stream" === e.type,
                  u = /constructor/i.test(a.HTMLElement) || a.safari,
                  s = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((s || (l && u) || o) && "undefined" != typeof FileReader) {
                  var c = new FileReader();
                  (c.onloadend = function () {
                    var e = c.result;
                    (e = s
                      ? e
                      : e.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      i ? (i.location.href = e) : (location = e),
                      (i = null);
                  }),
                    c.readAsDataURL(e);
                } else {
                  var f = a.URL || a.webkitURL,
                    d = f.createObjectURL(e);
                  i ? (i.location = d) : (location.href = d),
                    (i = null),
                    setTimeout(function () {
                      f.revokeObjectURL(d);
                    }, 4e4);
                }
              });
      (a.saveAs = i.saveAs = i), (e.exports = i);
    })();
  })($y);
  var By = $y.exports;
  const Wy = (e) => {
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
    Vy = (e, t, n, r, a) => (t ? t(e, n, r, a) : (e || "").toString()),
    Hy = (e, t, n, r) => (Kv.isFunction(e) ? e(t, n, r) : e),
    qy = (e) => null == e,
    Yy = ({
      idx: e,
      item: t,
      items: n,
      itemProps: r,
      trClassName: a,
      trStyle: o,
    }) =>
      We.jsx("tr", {
        className: a ? a(t, e, n) : null,
        style: o ? o(t, e, n) : null,
        children: Kv.map(r, (r, a) => {
          const o = Kv.get(t, r.key),
            i = ze.isValidElement(o);
          return We.jsxs(
            "td",
            {
              className: Hy(r.className, t, e, n),
              onClick: r.onClick ? (t) => r.onClick(t, e) : null,
              children: [!i && Vy(o, r.format, t, e, n), i && o],
            },
            a
          );
        }),
      }),
    Qy = ze.createContext({ print: !1 }),
    Ky = ({ id: e, clipboard: t, className: n, onClick: r }) => {
      const a = Fe.useRef(null),
        [o, i] = Fe.useState(!1);
      return (
        Fe.useEffect(() => {
          if (t)
            if (window.clipboardData && window.clipboardData.setData)
              i(!0),
                setTimeout(() => {
                  i(!1);
                }, 2e3),
                window.clipboardData.setData("Text", t);
            else if (
              document.queryCommandSupported &&
              document.queryCommandSupported("copy")
            ) {
              const n = document.createElement("textarea");
              (n.textContent = t),
                (n.style.position = "fixed"),
                document.body.appendChild(n),
                n.select();
              try {
                document.execCommand("copy");
              } catch (e) {
                console.warn("Copy to clipboard failed.", e);
              } finally {
                i(!0),
                  setTimeout(() => {
                    i(!1);
                  }, 2e3),
                  document.body.removeChild(n);
              }
            }
        }, [t]),
        We.jsxs("div", {
          className: "copy-clipboard-button " + (n || ""),
          children: [
            o &&
              We.jsx("span", { className: "tooltiptext", children: "Copied!" }),
            We.jsx("button", {
              id: e,
              ref: a,
              type: "button",
              className: "btn btn-light btn-sm pt-0",
              title: "Copy to Clipboard",
              onClick: () => {
                r && r();
              },
              children: We.jsxs("svg", {
                className: "bi bi-clipboard",
                width: "1em",
                height: "1em",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  We.jsx("path", {
                    fillRule: "evenodd",
                    d: "M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z",
                  }),
                  We.jsx("path", {
                    fillRule: "evenodd",
                    d: "M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z",
                  }),
                ],
              }),
            }),
          ],
        })
      );
    };
  class Jy extends Fe.PureComponent {
    constructor() {
      super(...arguments),
        (this.state = { sortCol: "", sortOrder: "desc", clipboard: null }),
        (this.renderSortHandle = (e) => {
          const { sortCol: t, sortOrder: n } = this.state;
          return t !== e
            ? We.jsx(Fe.Fragment, {})
            : We.jsx("span", {
                className: Gy({ dropup: "asc" === n, dropdown: "desc" === n }),
                children: We.jsx("small", {
                  className: "dropdown-toggle",
                  children: " ",
                }),
              });
        }),
        (this.renderHeaders = (e, t, n) => {
          const { sortable: r } = this.props;
          return We.jsxs("thead", {
            children: [
              t &&
                t.length > 0 &&
                We.jsx("tr", {
                  children: t.map((e, t) =>
                    We.jsx(
                      "th",
                      {
                        className: Hy(e.className),
                        colSpan: e.colspan,
                        children: e.title,
                      },
                      t
                    )
                  ),
                }),
              We.jsx("tr", {
                children: e.map((e, t) =>
                  We.jsxs(
                    "th",
                    {
                      className: Hy(n[t].className, null, t),
                      onClick: () => r && this.handleSort(n[t]),
                      children: [e, r && this.renderSortHandle(n[t].key)],
                    },
                    t
                  )
                ),
              }),
            ],
          });
        }),
        (this.renderBody = (e, t, n, r, a) =>
          We.jsx("tbody", {
            children: e.map((o, i) =>
              qy(a) || a !== i
                ? We.jsx(
                    Yy,
                    {
                      idx: i,
                      item: o,
                      items: e,
                      itemProps: t,
                      trClassName: n,
                      trStyle: r,
                    },
                    i
                  )
                : null
            ),
          })),
        (this.parseChildren = (e, t, n) => (
          Kv.isArray(e) || (e = [e]),
          Kv.reduce(
            e,
            (e, r) => {
              if (!r) return e;
              var a = r.props,
                { title: o, field: i, topTitle: l, topTitleColspan: u } = a,
                s = __objRest(a, [
                  "title",
                  "field",
                  "topTitle",
                  "topTitleColspan",
                ]);
              return (
                Kv.isNil(l) ||
                  e.topHeaders.push({
                    title: l,
                    colspan: u,
                    className: s.className,
                  }),
                Kv.isNil(o) &&
                  (o = qy(n) ? Kv.startCase(i) : t[n][parseInt(i)]),
                e.headers.push(o),
                e.itemProps.push(__spreadValues({ key: i }, s)),
                e
              );
            },
            { headers: [], topHeaders: [], itemProps: [] }
          )
        )),
        (this.renderExportToExcel = () =>
          We.jsx(Qy.Consumer, {
            children: (e) =>
              !e.print &&
              We.jsx("button", {
                id: "export-excel",
                className: "export-link",
                type: "button",
                onClick: this.handleExport,
                children: We.jsx(Ly, {}),
              }),
          })),
        (this.exportToCsv = (e, t, n, r, a = "\t") => {
          const o = [];
          return (
            o.push(t.join(a)),
            e.forEach((e, t) => {
              if (qy(n) || n !== t) {
                const t = [];
                Kv.map(r, (n, r) => {
                  const a = Kv.get(e, n.key);
                  t.push(a);
                }),
                  o.push(t.join(a));
              }
            }),
            o.join("\n")
          );
        }),
        (this.renderCopyToClipboard = (e, t, n, r) => {
          const a = `ccb${Math.floor(1e4 * Math.random())}`;
          return We.jsx(Ky, {
            id: a,
            clipboard: this.state.clipboard,
            className: "grid-icon-button float-end",
            onClick: () => {
              const a = this.exportToCsv(e, t, n, r),
                { sortCol: o, sortOrder: i } = this.state;
              this.setState({ sortCol: o, sortOrder: i, clipboard: a });
            },
          });
        }),
        (this.handleExport = () => {
          const { data: e, header: n } = this.props,
            r = Math.random().toString(36).slice(2);
          ((e, n = "table.xlsx") => {
            const r = t.utils.aoa_to_sheet(
                ((o = e),
                Kv.reduce(o, (e, t) => (e.push(Kv.values(t)), e), [
                  Kv.keys(o[0]),
                ]))
              ),
              a = t.utils.book_new();
            var o;
            t.utils.book_append_sheet(a, r, "Sheet 1");
            const i = t.write(a, {
              bookType: "xlsx",
              bookSST: !1,
              type: "binary",
            });
            try {
              const e = new Blob([Wy(i)], { type: "application/octet-stream" });
              By.saveAs(e, n);
            } catch (o) {
              "undefined" != typeof console && console.log(o, i);
            }
          })(e, `${Kv.snakeCase(n || r)}.xlsx`);
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
        trStyle: o,
        hideDownload: i,
        headersRowIndex: l,
        copyButton: u,
      } = this.props;
      var { children: s, data: c } = this.props;
      if (Kv.isNil(s)) {
        var f = {};
        c.forEach((e) => Object.keys(e).forEach((e) => (f[e] = !0))),
          (s = Object.keys(f).map((e, t) =>
            We.jsx(Uy, { field: e, title: qy(l) ? t : c[l][t] }, t)
          ));
      }
      const {
          headers: d,
          itemProps: p,
          topHeaders: h,
        } = this.parseChildren(s, c, l),
        v = Gy("table", "table-striped", n, { "table-sm": !n }),
        { sortCol: g, sortOrder: y } = this.state;
      return (
        (m = c),
        (b = y),
        (c = (_ = g) ? Kv.orderBy(m, _, b) : m),
        We.jsxs("div", {
          className: `${t} table-responsive`,
          children: [
            !1 !== r
              ? We.jsxs(Fe.Fragment, {
                  children: [
                    We.jsx("h4", { children: e }),
                    i ? null : this.renderExportToExcel(),
                    u && this.renderCopyToClipboard(c, d, l, p),
                  ],
                })
              : null,
            We.jsxs("table", {
              className: v,
              children: [
                this.renderHeaders(d, h, p),
                this.renderBody(c, p, a, o, l),
              ],
            }),
          ],
        })
      );
      var m, _, b;
    }
  }
  Oy(e);
  class Xy extends ze.Component {
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
      return We.jsxs("div", {
        className: "facttable" + (e ? " " + e : ""),
        ref: (e) => {
          this.node = e;
        },
        children: [
          t
            ? We.jsx("header", { children: We.jsx("h4", { children: t }) })
            : null,
          We.jsx("ul", {
            children: n.map((e, t) =>
              We.jsxs(
                "li",
                {
                  children: [
                    e.value
                      ? We.jsxs(Fe.Fragment, {
                          children: [
                            We.jsx("div", { title: e.key, children: e.key }),
                            We.jsx("div", { children: e.value }),
                          ],
                        })
                      : null,
                    e.values
                      ? We.jsx("div", { title: e.key, children: e.key })
                      : null,
                    e.values
                      ? e.values.map((e, t) =>
                          We.jsx("div", { children: e }, t)
                        )
                      : null,
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
  Oy(e);
  const { round: Zy } = Math;
  Zv("0,0%"),
    ze.Component,
    ze.Component,
    ze.Component,
    ze.Component,
    ze.Component;
  const em = Zv("0.0%"),
    tm = ({ timeseries: e, ranges: t }) => {
      const n = [{ key: null, values: t }],
        r = [];
      for (let o = 0; o < e.length; o++) {
        const n = e[o].resampleToMonthly(),
          a = [];
        for (let r = 0; r < t.length; r++) {
          const i = /([0-9]+)([MY])/.exec(t[r]);
          if (i) {
            let e = parseInt(i[1], 10);
            "Y" === i[2] && (e *= 12);
            const t = n.endValue / n.__values[n.length - 1 - e];
            e < 14 ? a.push(t - 1) : a.push(Math.pow(t, 12 / (e - 1)) - 1);
          } else
            "number" == typeof t[r] && isFinite(Number(t[r]))
              ? a.push(e[o].specificYearReturn(parseFloat(t[r])))
              : a.push(Number.NaN);
        }
        r.push(a);
      }
      const a = [];
      if (r.length > 1) {
        const e = r[0];
        for (let t = 1; t < r.length; t++) {
          const n = r[t],
            o = e.map((e, t) => parseFloat(em(e)) - parseFloat(em(n[t])));
          a.push(o);
        }
      }
      n.push({ key: e[0].name, values: r[0].map((e) => em(e)) });
      for (let o = 1; o < r.length; o++) {
        const t = Kv.cloneDeep(r[o]),
          i = a[o - 1];
        for (let e = 0; e < t.length; e++)
          t[e] = em(t[e]) + "[" + em(i[e] / 100) + "]";
        n.push({ key: e[o].name, values: t });
      }
      return We.jsx(Xy, {
        className: "firstheader evenrowsgray",
        header: "",
        list: n,
      });
    };
  Oy(e);
  var nm,
    rm,
    am = ((e) => ((e.Sv = "Sv"), (e.En = "En"), e))(am || {});
  function om() {
    return (
      (om = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      om.apply(null, arguments)
    );
  }
  function im() {
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
  ((rm = nm || (nm = {})).Pop = "POP"),
    (rm.Push = "PUSH"),
    (rm.Replace = "REPLACE");
  var lm = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
      ),
    um = "%[a-f0-9]{2}",
    sm = new RegExp("(" + um + ")|([^%]+?)", "gi"),
    cm = new RegExp("(" + um + ")+", "gi");
  function fm(e, t) {
    try {
      return [decodeURIComponent(e.join(""))];
    } catch (a) {}
    if (1 === e.length) return e;
    t = t || 1;
    var n = e.slice(0, t),
      r = e.slice(t);
    return Array.prototype.concat.call([], fm(n), fm(r));
  }
  function dm(e) {
    try {
      return decodeURIComponent(e);
    } catch (r) {
      for (var t = e.match(sm) || [], n = 1; n < t.length; n++)
        t = (e = fm(t, n).join("")).match(sm) || [];
      return e;
    }
  }
  var pm = function (e) {
      if ("string" != typeof e)
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
        );
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (
            var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = cm.exec(e);
            n;

          ) {
            try {
              t[n[0]] = decodeURIComponent(n[0]);
            } catch (l) {
              var r = dm(n[0]);
              r !== n[0] && (t[n[0]] = r);
            }
            n = cm.exec(e);
          }
          t["%C2"] = "�";
          for (var a = Object.keys(t), o = 0; o < a.length; o++) {
            var i = a[o];
            e = e.replace(new RegExp(i, "g"), t[i]);
          }
          return e;
        })(e);
      }
    },
    hm = (e, t) => {
      if ("string" != typeof e || "string" != typeof t)
        throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const n = e.indexOf(t);
      return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
    },
    vm = function (e, t) {
      for (
        var n = {}, r = Object.keys(e), a = Array.isArray(t), o = 0;
        o < r.length;
        o++
      ) {
        var i = r[o],
          l = e[i];
        (a ? -1 !== t.indexOf(i) : t(i, l, e)) && (n[i] = l);
      }
      return n;
    };
  !(function (e) {
    const t = lm,
      n = pm,
      r = hm,
      a = vm,
      o = Symbol("encodeFragmentIdentifier");
    function i(e) {
      if ("string" != typeof e || 1 !== e.length)
        throw new TypeError(
          "arrayFormatSeparator must be single character string"
        );
    }
    function l(e, n) {
      return n.encode ? (n.strict ? t(e) : encodeURIComponent(e)) : e;
    }
    function u(e, t) {
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
    function p(e, t) {
      i(
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
                  o =
                    "string" == typeof n &&
                    !a &&
                    u(n, e).includes(e.arrayFormatSeparator);
                n = o ? u(n, e) : n;
                const i =
                  a || o
                    ? n.split(e.arrayFormatSeparator).map((t) => u(t, e))
                    : null === n
                    ? n
                    : u(n, e);
                r[t] = i;
              };
            case "bracket-separator":
              return (t, n, r) => {
                const a = /(\[\])$/.test(t);
                if (((t = t.replace(/\[\]$/, "")), !a))
                  return void (r[t] = n ? u(n, e) : n);
                const o =
                  null === n
                    ? []
                    : n.split(e.arrayFormatSeparator).map((t) => u(t, e));
                void 0 !== r[t] ? (r[t] = [].concat(r[t], o)) : (r[t] = o);
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
      for (const o of e.split("&")) {
        if ("" === o) continue;
        let [e, i] = r(t.decode ? o.replace(/\+/g, " ") : o, "=");
        (i =
          void 0 === i
            ? null
            : ["comma", "separator", "bracket-separator"].includes(
                t.arrayFormat
              )
            ? i
            : u(i, t)),
          n(u(e, t), i, a);
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
      (e.parse = p),
      (e.stringify = (e, t) => {
        if (!e) return "";
        i(
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
                    ? [...n, [l(t, e), "[", a, "]"].join("")]
                    : [...n, [l(t, e), "[", l(a, e), "]=", l(r, e)].join("")];
                };
              case "bracket":
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, [l(t, e), "[]"].join("")]
                    : [...n, [l(t, e), "[]=", l(r, e)].join("")];
              case "colon-list-separator":
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, [l(t, e), ":list="].join("")]
                    : [...n, [l(t, e), ":list=", l(r, e)].join("")];
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
                        ? [[l(n, e), t, l(a, e)].join("")]
                        : [[r, l(a, e)].join(e.arrayFormatSeparator)]);
              }
              default:
                return (t) => (n, r) =>
                  void 0 === r ||
                  (e.skipNull && null === r) ||
                  (e.skipEmptyString && "" === r)
                    ? n
                    : null === r
                    ? [...n, l(t, e)]
                    : [...n, [l(t, e), "=", l(r, e)].join("")];
            }
          })(t),
          r = {};
        for (const i of Object.keys(e))
          (a = i),
            (t.skipNull && null == e[a]) ||
              (t.skipEmptyString && "" === e[a]) ||
              (r[i] = e[i]);
        var a;
        const o = Object.keys(r);
        return (
          !1 !== t.sort && o.sort(t.sort),
          o
            .map((r) => {
              const a = e[r];
              return void 0 === a
                ? ""
                : null === a
                ? l(r, t)
                : Array.isArray(a)
                ? 0 === a.length && "bracket-separator" === t.arrayFormat
                  ? l(r, t) + "[]"
                  : a.reduce(n(r), []).join("&")
                : l(r, t) + "=" + l(a, t);
            })
            .filter((e) => e.length > 0)
            .join("&")
        );
      }),
      (e.parseUrl = (e, t) => {
        t = Object.assign({ decode: !0 }, t);
        const [n, a] = r(e, "#");
        return Object.assign(
          { url: n.split("?")[0] || "", query: p(f(e), t) },
          t && t.parseFragmentIdentifier && a
            ? { fragmentIdentifier: u(a, t) }
            : {}
        );
      }),
      (e.stringifyUrl = (t, n) => {
        n = Object.assign({ encode: !0, strict: !0, [o]: !0 }, n);
        const r = c(t.url).split("?")[0] || "",
          a = e.extract(t.url),
          i = e.parse(a, { sort: !1 }),
          u = Object.assign(i, t.query);
        let s = e.stringify(u, n);
        s && (s = `?${s}`);
        let f = (function (e) {
          let t = "";
          const n = e.indexOf("#");
          return -1 !== n && (t = e.slice(n)), t;
        })(t.url);
        return (
          t.fragmentIdentifier &&
            (f = `#${
              n[o] ? l(t.fragmentIdentifier, n) : t.fragmentIdentifier
            }`),
          `${r}${s}${f}`
        );
      }),
      (e.pick = (t, n, r) => {
        r = Object.assign({ parseFragmentIdentifier: !0, [o]: !1 }, r);
        const { url: i, query: l, fragmentIdentifier: u } = e.parseUrl(t, r);
        return e.stringifyUrl(
          { url: i, query: a(l, n), fragmentIdentifier: u },
          r
        );
      }),
      (e.exclude = (t, n, r) => {
        const a = Array.isArray(n) ? (e) => !n.includes(e) : (e, t) => !n(e, t);
        return e.pick(t, a, r);
      });
  })({});
  var gm = { exports: {} };
  !(function (e) {
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
        var o = a[r];
        n["[object " + o + "]"] = o.toLowerCase();
      }
      var i = function (e) {
          return n[Object.prototype.toString.call(e)] || "object";
        },
        l = i,
        u = i,
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
          type: i,
          unpack: function (e, t) {
            return (
              void 0 === t && (t = null),
              e.length >= 3
                ? Array.prototype.slice.call(e)
                : "object" == l(e[0]) && t
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
            return "string" == u(e[t]) ? e[t].toLowerCase() : null;
          },
          PI: s,
          TWOPI: 2 * s,
          PITHIRD: s / 3,
          DEG2RAD: s / 180,
          RAD2DEG: 180 / s,
        },
        f = { format: {}, autodetect: [] },
        d = c.last,
        p = c.clip_rgb,
        h = c.type,
        v = f,
        g = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = this;
          if (
            "object" === h(e[0]) &&
            e[0].constructor &&
            e[0].constructor === this.constructor
          )
            return e[0];
          var r = d(e),
            a = !1;
          if (!r) {
            (a = !0),
              v.sorted ||
                ((v.autodetect = v.autodetect.sort(function (e, t) {
                  return t.p - e.p;
                })),
                (v.sorted = !0));
            for (var o = 0, i = v.autodetect; o < i.length; o += 1) {
              var l = i[o];
              if ((r = l.test.apply(l, e))) break;
            }
          }
          if (!v.format[r]) throw new Error("unknown format: " + e);
          var u = v.format[r].apply(null, a ? e : e.slice(0, -1));
          (n._rgb = p(u)), 3 === n._rgb.length && n._rgb.push(1);
        };
      g.prototype.toString = function () {
        return "function" == h(this.hex)
          ? this.hex()
          : "[" + this._rgb.join(",") + "]";
      };
      var y = g,
        m = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            m.Color,
            [null].concat(e)
          ))();
        };
      (m.Color = y), (m.version = "2.4.2");
      var _ = m,
        b = c.unpack,
        w = Math.max,
        S = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = b(e, "rgb"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = 1 - w((r /= 255), w((a /= 255), (o /= 255))),
            l = i < 1 ? 1 / (1 - i) : 0;
          return [(1 - r - i) * l, (1 - a - i) * l, (1 - o - i) * l, i];
        },
        k = c.unpack,
        x = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = k(e, "cmyk"))[0],
            r = e[1],
            a = e[2],
            o = e[3],
            i = e.length > 4 ? e[4] : 1;
          return 1 === o
            ? [0, 0, 0, i]
            : [
                n >= 1 ? 0 : 255 * (1 - n) * (1 - o),
                r >= 1 ? 0 : 255 * (1 - r) * (1 - o),
                a >= 1 ? 0 : 255 * (1 - a) * (1 - o),
                i,
              ];
        },
        E = _,
        C = y,
        O = f,
        N = c.unpack,
        A = c.type,
        T = S;
      (C.prototype.cmyk = function () {
        return T(this._rgb);
      }),
        (E.cmyk = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            C,
            [null].concat(e, ["cmyk"])
          ))();
        }),
        (O.format.cmyk = x),
        O.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = N(e, "cmyk")), "array" === A(e) && 4 === e.length))
              return "cmyk";
          },
        });
      var R = c.unpack,
        j = c.last,
        M = function (e) {
          return Math.round(100 * e) / 100;
        },
        P = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = R(e, "hsla"),
            r = j(e) || "lsa";
          return (
            (n[0] = M(n[0] || 0)),
            (n[1] = M(100 * n[1]) + "%"),
            (n[2] = M(100 * n[2]) + "%"),
            "hsla" === r || (n.length > 3 && n[3] < 1)
              ? ((n[3] = n.length > 3 ? n[3] : 1), (r = "hsla"))
              : (n.length = 3),
            r + "(" + n.join(",") + ")"
          );
        },
        F = c.unpack,
        z = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = F(e, "rgba"))[0],
            r = e[1],
            a = e[2];
          (n /= 255), (r /= 255), (a /= 255);
          var o,
            i,
            l = Math.min(n, r, a),
            u = Math.max(n, r, a),
            s = (u + l) / 2;
          return (
            u === l
              ? ((o = 0), (i = Number.NaN))
              : (o = s < 0.5 ? (u - l) / (u + l) : (u - l) / (2 - u - l)),
            n == u
              ? (i = (r - a) / (u - l))
              : r == u
              ? (i = 2 + (a - n) / (u - l))
              : a == u && (i = 4 + (n - r) / (u - l)),
            (i *= 60) < 0 && (i += 360),
            e.length > 3 && void 0 !== e[3] ? [i, o, s, e[3]] : [i, o, s]
          );
        },
        D = c.unpack,
        L = c.last,
        I = P,
        G = z,
        U = Math.round,
        $ = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = D(e, "rgba"),
            r = L(e) || "rgb";
          return "hsl" == r.substr(0, 3)
            ? I(G(n), r)
            : ((n[0] = U(n[0])),
              (n[1] = U(n[1])),
              (n[2] = U(n[2])),
              ("rgba" === r || (n.length > 3 && n[3] < 1)) &&
                ((n[3] = n.length > 3 ? n[3] : 1), (r = "rgba")),
              r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")");
        },
        B = c.unpack,
        W = Math.round,
        V = function () {
          for (var e, t = [], n = arguments.length; n--; ) t[n] = arguments[n];
          var r,
            a,
            o,
            i = (t = B(t, "hsl"))[0],
            l = t[1],
            u = t[2];
          if (0 === l) r = a = o = 255 * u;
          else {
            var s = [0, 0, 0],
              c = [0, 0, 0],
              f = u < 0.5 ? u * (1 + l) : u + l - u * l,
              d = 2 * u - f,
              p = i / 360;
            (s[0] = p + 1 / 3), (s[1] = p), (s[2] = p - 1 / 3);
            for (var h = 0; h < 3; h++)
              s[h] < 0 && (s[h] += 1),
                s[h] > 1 && (s[h] -= 1),
                6 * s[h] < 1
                  ? (c[h] = d + 6 * (f - d) * s[h])
                  : 2 * s[h] < 1
                  ? (c[h] = f)
                  : 3 * s[h] < 2
                  ? (c[h] = d + (f - d) * (2 / 3 - s[h]) * 6)
                  : (c[h] = d);
            (r = (e = [W(255 * c[0]), W(255 * c[1]), W(255 * c[2])])[0]),
              (a = e[1]),
              (o = e[2]);
          }
          return t.length > 3 ? [r, a, o, t[3]] : [r, a, o, 1];
        },
        H = V,
        q = f,
        Y = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
        Q =
          /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
        K =
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
          if (((e = e.toLowerCase().trim()), q.format.named))
            try {
              return q.format.named(e);
            } catch (h) {}
          if ((t = e.match(Y))) {
            for (var n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
            return (n[3] = 1), n;
          }
          if ((t = e.match(Q))) {
            for (var a = t.slice(1, 5), o = 0; o < 4; o++) a[o] = +a[o];
            return a;
          }
          if ((t = e.match(K))) {
            for (var i = t.slice(1, 4), l = 0; l < 3; l++)
              i[l] = ee(2.55 * i[l]);
            return (i[3] = 1), i;
          }
          if ((t = e.match(J))) {
            for (var u = t.slice(1, 5), s = 0; s < 3; s++)
              u[s] = ee(2.55 * u[s]);
            return (u[3] = +u[3]), u;
          }
          if ((t = e.match(X))) {
            var c = t.slice(1, 4);
            (c[1] *= 0.01), (c[2] *= 0.01);
            var f = H(c);
            return (f[3] = 1), f;
          }
          if ((t = e.match(Z))) {
            var d = t.slice(1, 4);
            (d[1] *= 0.01), (d[2] *= 0.01);
            var p = H(d);
            return (p[3] = +t[4]), p;
          }
        };
      te.test = function (e) {
        return (
          Y.test(e) ||
          Q.test(e) ||
          K.test(e) ||
          J.test(e) ||
          X.test(e) ||
          Z.test(e)
        );
      };
      var ne = _,
        re = y,
        ae = f,
        oe = c.type,
        ie = $,
        le = te;
      (re.prototype.css = function (e) {
        return ie(this._rgb, e);
      }),
        (ne.css = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            re,
            [null].concat(e, ["css"])
          ))();
        }),
        (ae.format.css = le),
        ae.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (!t.length && "string" === oe(e) && le.test(e)) return "css";
          },
        });
      var ue = y,
        se = _,
        ce = c.unpack;
      (f.format.gl = function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        var n = ce(e, "rgba");
        return (n[0] *= 255), (n[1] *= 255), (n[2] *= 255), n;
      }),
        (se.gl = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            ue,
            [null].concat(e, ["gl"])
          ))();
        }),
        (ue.prototype.gl = function () {
          var e = this._rgb;
          return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
        });
      var fe = c.unpack,
        de = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r = fe(e, "rgb"),
            a = r[0],
            o = r[1],
            i = r[2],
            l = Math.min(a, o, i),
            u = Math.max(a, o, i),
            s = u - l,
            c = (100 * s) / 255,
            f = (l / (255 - s)) * 100;
          return (
            0 === s
              ? (n = Number.NaN)
              : (a === u && (n = (o - i) / s),
                o === u && (n = 2 + (i - a) / s),
                i === u && (n = 4 + (a - o) / s),
                (n *= 60) < 0 && (n += 360)),
            [n, c, f]
          );
        },
        pe = c.unpack,
        he = Math.floor,
        ve = function () {
          for (var e, t, n, r, a, o, i = [], l = arguments.length; l--; )
            i[l] = arguments[l];
          var u,
            s,
            c,
            f = (i = pe(i, "hcg"))[0],
            d = i[1],
            p = i[2];
          p *= 255;
          var h = 255 * d;
          if (0 === d) u = s = c = p;
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
            var v = he((f /= 60)),
              g = f - v,
              y = p * (1 - d),
              m = y + h * (1 - g),
              _ = y + h * g,
              b = y + h;
            switch (v) {
              case 0:
                (u = (e = [b, _, y])[0]), (s = e[1]), (c = e[2]);
                break;
              case 1:
                (u = (t = [m, b, y])[0]), (s = t[1]), (c = t[2]);
                break;
              case 2:
                (u = (n = [y, b, _])[0]), (s = n[1]), (c = n[2]);
                break;
              case 3:
                (u = (r = [y, m, b])[0]), (s = r[1]), (c = r[2]);
                break;
              case 4:
                (u = (a = [_, y, b])[0]), (s = a[1]), (c = a[2]);
                break;
              case 5:
                (u = (o = [b, y, m])[0]), (s = o[1]), (c = o[2]);
            }
          }
          return [u, s, c, i.length > 3 ? i[3] : 1];
        },
        ge = c.unpack,
        ye = c.type,
        me = _,
        _e = y,
        be = f,
        we = de;
      (_e.prototype.hcg = function () {
        return we(this._rgb);
      }),
        (me.hcg = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            _e,
            [null].concat(e, ["hcg"])
          ))();
        }),
        (be.format.hcg = ve),
        be.autodetect.push({
          p: 1,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = ge(e, "hcg")), "array" === ye(e) && 3 === e.length))
              return "hcg";
          },
        });
      var Se = c.unpack,
        ke = c.last,
        xe = Math.round,
        Ee = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Se(e, "rgba"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = n[3],
            l = ke(e) || "auto";
          void 0 === i && (i = 1), "auto" === l && (l = i < 1 ? "rgba" : "rgb");
          var u =
            "000000" +
            (((r = xe(r)) << 16) | ((a = xe(a)) << 8) | (o = xe(o))).toString(
              16
            );
          u = u.substr(u.length - 6);
          var s = "0" + xe(255 * i).toString(16);
          switch (((s = s.substr(s.length - 2)), l.toLowerCase())) {
            case "rgba":
              return "#" + u + s;
            case "argb":
              return "#" + s + u;
            default:
              return "#" + u;
          }
        },
        Ce = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
        Oe = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
        Ne = function (e) {
          if (e.match(Ce)) {
            (4 !== e.length && 7 !== e.length) || (e = e.substr(1)),
              3 === e.length &&
                (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
            var t = parseInt(e, 16);
            return [t >> 16, (t >> 8) & 255, 255 & t, 1];
          }
          if (e.match(Oe)) {
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
        Ae = _,
        Te = y,
        Re = c.type,
        je = f,
        Me = Ee;
      (Te.prototype.hex = function (e) {
        return Me(this._rgb, e);
      }),
        (Ae.hex = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Te,
            [null].concat(e, ["hex"])
          ))();
        }),
        (je.format.hex = Ne),
        je.autodetect.push({
          p: 4,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (
              !t.length &&
              "string" === Re(e) &&
              [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0
            )
              return "hex";
          },
        });
      var Pe = c.unpack,
        Fe = c.TWOPI,
        ze = Math.min,
        De = Math.sqrt,
        Le = Math.acos,
        Ie = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r = Pe(e, "rgb"),
            a = r[0],
            o = r[1],
            i = r[2],
            l = ze((a /= 255), (o /= 255), (i /= 255)),
            u = (a + o + i) / 3,
            s = u > 0 ? 1 - l / u : 0;
          return (
            0 === s
              ? (n = NaN)
              : ((n = (a - o + (a - i)) / 2),
                (n /= De((a - o) * (a - o) + (a - i) * (o - i))),
                (n = Le(n)),
                i > o && (n = Fe - n),
                (n /= Fe)),
            [360 * n, s, u]
          );
        },
        Ge = c.unpack,
        Ue = c.limit,
        $e = c.TWOPI,
        Be = c.PITHIRD,
        We = Math.cos,
        Ve = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            o = (e = Ge(e, "hsi"))[0],
            i = e[1],
            l = e[2];
          return (
            isNaN(o) && (o = 0),
            isNaN(i) && (i = 0),
            o > 360 && (o -= 360),
            o < 0 && (o += 360),
            (o /= 360) < 1 / 3
              ? (r =
                  1 -
                  ((a = (1 - i) / 3) +
                    (n = (1 + (i * We($e * o)) / We(Be - $e * o)) / 3)))
              : o < 2 / 3
              ? (a =
                  1 -
                  ((n = (1 - i) / 3) +
                    (r =
                      (1 + (i * We($e * (o -= 1 / 3))) / We(Be - $e * o)) / 3)))
              : (n =
                  1 -
                  ((r = (1 - i) / 3) +
                    (a =
                      (1 + (i * We($e * (o -= 2 / 3))) / We(Be - $e * o)) /
                      3))),
            [
              255 * (n = Ue(l * n * 3)),
              255 * (r = Ue(l * r * 3)),
              255 * (a = Ue(l * a * 3)),
              e.length > 3 ? e[3] : 1,
            ]
          );
        },
        He = c.unpack,
        qe = c.type,
        Ye = _,
        Qe = y,
        Ke = f,
        Je = Ie;
      (Qe.prototype.hsi = function () {
        return Je(this._rgb);
      }),
        (Ye.hsi = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Qe,
            [null].concat(e, ["hsi"])
          ))();
        }),
        (Ke.format.hsi = Ve),
        Ke.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = He(e, "hsi")), "array" === qe(e) && 3 === e.length))
              return "hsi";
          },
        });
      var Xe = c.unpack,
        Ze = c.type,
        et = _,
        tt = y,
        nt = f,
        rt = z;
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
        (nt.format.hsl = V),
        nt.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Xe(e, "hsl")), "array" === Ze(e) && 3 === e.length))
              return "hsl";
          },
        });
      var at = c.unpack,
        ot = Math.min,
        it = Math.max,
        lt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            o = (e = at(e, "rgb"))[0],
            i = e[1],
            l = e[2],
            u = ot(o, i, l),
            s = it(o, i, l),
            c = s - u;
          return (
            (a = s / 255),
            0 === s
              ? ((n = Number.NaN), (r = 0))
              : ((r = c / s),
                o === s && (n = (i - l) / c),
                i === s && (n = 2 + (l - o) / c),
                l === s && (n = 4 + (o - i) / c),
                (n *= 60) < 0 && (n += 360)),
            [n, r, a]
          );
        },
        ut = c.unpack,
        st = Math.floor,
        ct = function () {
          for (var e, t, n, r, a, o, i = [], l = arguments.length; l--; )
            i[l] = arguments[l];
          var u,
            s,
            c,
            f = (i = ut(i, "hsv"))[0],
            d = i[1],
            p = i[2];
          if (((p *= 255), 0 === d)) u = s = c = p;
          else {
            360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
            var h = st((f /= 60)),
              v = f - h,
              g = p * (1 - d),
              y = p * (1 - d * v),
              m = p * (1 - d * (1 - v));
            switch (h) {
              case 0:
                (u = (e = [p, m, g])[0]), (s = e[1]), (c = e[2]);
                break;
              case 1:
                (u = (t = [y, p, g])[0]), (s = t[1]), (c = t[2]);
                break;
              case 2:
                (u = (n = [g, p, m])[0]), (s = n[1]), (c = n[2]);
                break;
              case 3:
                (u = (r = [g, y, p])[0]), (s = r[1]), (c = r[2]);
                break;
              case 4:
                (u = (a = [m, g, p])[0]), (s = a[1]), (c = a[2]);
                break;
              case 5:
                (u = (o = [p, g, y])[0]), (s = o[1]), (c = o[2]);
            }
          }
          return [u, s, c, i.length > 3 ? i[3] : 1];
        },
        ft = c.unpack,
        dt = c.type,
        pt = _,
        ht = y,
        vt = f,
        gt = lt;
      (ht.prototype.hsv = function () {
        return gt(this._rgb);
      }),
        (pt.hsv = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            ht,
            [null].concat(e, ["hsv"])
          ))();
        }),
        (vt.format.hsv = ct),
        vt.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = ft(e, "hsv")), "array" === dt(e) && 3 === e.length))
              return "hsv";
          },
        });
      var yt = {
          Kn: 18,
          Xn: 0.95047,
          Yn: 1,
          Zn: 1.08883,
          t0: 0.137931034,
          t1: 0.206896552,
          t2: 0.12841855,
          t3: 0.008856452,
        },
        mt = yt,
        _t = c.unpack,
        bt = Math.pow,
        wt = function (e) {
          return (e /= 255) <= 0.04045
            ? e / 12.92
            : bt((e + 0.055) / 1.055, 2.4);
        },
        St = function (e) {
          return e > mt.t3 ? bt(e, 1 / 3) : e / mt.t2 + mt.t0;
        },
        kt = function (e, t, n) {
          return (
            (e = wt(e)),
            (t = wt(t)),
            (n = wt(n)),
            [
              St((0.4124564 * e + 0.3575761 * t + 0.1804375 * n) / mt.Xn),
              St((0.2126729 * e + 0.7151522 * t + 0.072175 * n) / mt.Yn),
              St((0.0193339 * e + 0.119192 * t + 0.9503041 * n) / mt.Zn),
            ]
          );
        },
        xt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = _t(e, "rgb"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = kt(r, a, o),
            l = i[0],
            u = i[1],
            s = 116 * u - 16;
          return [s < 0 ? 0 : s, 500 * (l - u), 200 * (u - i[2])];
        },
        Et = yt,
        Ct = c.unpack,
        Ot = Math.pow,
        Nt = function (e) {
          return (
            255 * (e <= 0.00304 ? 12.92 * e : 1.055 * Ot(e, 1 / 2.4) - 0.055)
          );
        },
        At = function (e) {
          return e > Et.t1 ? e * e * e : Et.t2 * (e - Et.t0);
        },
        Tt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n,
            r,
            a,
            o = (e = Ct(e, "lab"))[0],
            i = e[1],
            l = e[2];
          return (
            (r = (o + 16) / 116),
            (n = isNaN(i) ? r : r + i / 500),
            (a = isNaN(l) ? r : r - l / 200),
            (r = Et.Yn * At(r)),
            (n = Et.Xn * At(n)),
            (a = Et.Zn * At(a)),
            [
              Nt(3.2404542 * n - 1.5371385 * r - 0.4985314 * a),
              Nt(-0.969266 * n + 1.8760108 * r + 0.041556 * a),
              Nt(0.0556434 * n - 0.2040259 * r + 1.0572252 * a),
              e.length > 3 ? e[3] : 1,
            ]
          );
        },
        Rt = c.unpack,
        jt = c.type,
        Mt = _,
        Pt = y,
        Ft = f,
        zt = xt;
      (Pt.prototype.lab = function () {
        return zt(this._rgb);
      }),
        (Mt.lab = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Pt,
            [null].concat(e, ["lab"])
          ))();
        }),
        (Ft.format.lab = Tt),
        Ft.autodetect.push({
          p: 2,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = Rt(e, "lab")), "array" === jt(e) && 3 === e.length))
              return "lab";
          },
        });
      var Dt = c.unpack,
        Lt = c.RAD2DEG,
        It = Math.sqrt,
        Gt = Math.atan2,
        Ut = Math.round,
        $t = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Dt(e, "lab"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = It(a * a + o * o),
            l = (Gt(o, a) * Lt + 360) % 360;
          return 0 === Ut(1e4 * i) && (l = Number.NaN), [r, i, l];
        },
        Bt = c.unpack,
        Wt = xt,
        Vt = $t,
        Ht = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Bt(e, "rgb"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = Wt(r, a, o),
            l = i[0],
            u = i[1],
            s = i[2];
          return Vt(l, u, s);
        },
        qt = c.unpack,
        Yt = c.DEG2RAD,
        Qt = Math.sin,
        Kt = Math.cos,
        Jt = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = qt(e, "lch"),
            r = n[0],
            a = n[1],
            o = n[2];
          return isNaN(o) && (o = 0), [r, Kt((o *= Yt)) * a, Qt(o) * a];
        },
        Xt = c.unpack,
        Zt = Jt,
        en = Tt,
        tn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = Xt(e, "lch"))[0],
            r = e[1],
            a = e[2],
            o = Zt(n, r, a),
            i = o[0],
            l = o[1],
            u = o[2],
            s = en(i, l, u);
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
        ln = c.type,
        un = _,
        sn = y,
        cn = f,
        fn = Ht;
      (sn.prototype.lch = function () {
        return fn(this._rgb);
      }),
        (sn.prototype.hcl = function () {
          return fn(this._rgb).reverse();
        }),
        (un.lch = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            sn,
            [null].concat(e, ["lch"])
          ))();
        }),
        (un.hcl = function () {
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
              if (((t = on(t, e)), "array" === ln(t) && 3 === t.length))
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
        pn = f,
        hn = c.type,
        vn = dn,
        gn = Ne,
        yn = Ee;
      (y.prototype.name = function () {
        for (
          var e = yn(this._rgb, "rgb"), t = 0, n = Object.keys(vn);
          t < n.length;
          t += 1
        ) {
          var r = n[t];
          if (vn[r] === e) return r.toLowerCase();
        }
        return e;
      }),
        (pn.format.named = function (e) {
          if (((e = e.toLowerCase()), vn[e])) return gn(vn[e]);
          throw new Error("unknown color name: " + e);
        }),
        pn.autodetect.push({
          p: 5,
          test: function (e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
              t[n] = arguments[n + 1];
            if (!t.length && "string" === hn(e) && vn[e.toLowerCase()])
              return "named";
          },
        });
      var mn = c.unpack,
        _n = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = mn(e, "rgb");
          return (n[0] << 16) + (n[1] << 8) + n[2];
        },
        bn = c.type,
        wn = function (e) {
          if ("number" == bn(e) && e >= 0 && e <= 16777215)
            return [e >> 16, (e >> 8) & 255, 255 & e, 1];
          throw new Error("unknown num color: " + e);
        },
        Sn = _,
        kn = y,
        xn = f,
        En = c.type,
        Cn = _n;
      (kn.prototype.num = function () {
        return Cn(this._rgb);
      }),
        (Sn.num = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            kn,
            [null].concat(e, ["num"])
          ))();
        }),
        (xn.format.num = wn),
        xn.autodetect.push({
          p: 5,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (
              1 === e.length &&
              "number" === En(e[0]) &&
              e[0] >= 0 &&
              e[0] <= 16777215
            )
              return "num";
          },
        });
      var On = _,
        Nn = y,
        An = f,
        Tn = c.unpack,
        Rn = c.type,
        jn = Math.round;
      (Nn.prototype.rgb = function (e) {
        return (
          void 0 === e && (e = !0),
          !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(jn)
        );
      }),
        (Nn.prototype.rgba = function (e) {
          return (
            void 0 === e && (e = !0),
            this._rgb.slice(0, 4).map(function (t, n) {
              return n < 3 ? (!1 === e ? t : jn(t)) : t;
            })
          );
        }),
        (On.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            Nn,
            [null].concat(e, ["rgb"])
          ))();
        }),
        (An.format.rgb = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = Tn(e, "rgba");
          return void 0 === n[3] && (n[3] = 1), n;
        }),
        An.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (
              ((e = Tn(e, "rgba")),
              "array" === Rn(e) &&
                (3 === e.length ||
                  (4 === e.length &&
                    "number" == Rn(e[3]) &&
                    e[3] >= 0 &&
                    e[3] <= 1)))
            )
              return "rgb";
          },
        });
      var Mn = Math.log,
        Pn = function (e) {
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
                      104.49216199393888 * Mn(n)),
                (r =
                  a < 20
                    ? 0
                    : 0.8274096064007395 * (r = a - 10) -
                      254.76935184120902 +
                      115.67994401066147 * Mn(r)))
              : ((t =
                  351.97690566805693 +
                  0.114206453784165 * (t = a - 55) -
                  40.25366309332127 * Mn(t)),
                (n =
                  325.4494125711974 +
                  0.07943456536662342 * (n = a - 50) -
                  28.0852963507957 * Mn(n)),
                (r = 255)),
            [t, n, r, 1]
          );
        },
        Fn = Pn,
        zn = c.unpack,
        Dn = Math.round,
        Ln = _,
        In = y,
        Gn = f,
        Un = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          for (
            var n, r = zn(e, "rgb"), a = r[0], o = r[2], i = 1e3, l = 4e4;
            l - i > 0.4;

          ) {
            var u = Fn((n = 0.5 * (l + i)));
            u[2] / u[0] >= o / a ? (l = n) : (i = n);
          }
          return Dn(n);
        };
      (In.prototype.temp =
        In.prototype.kelvin =
        In.prototype.temperature =
          function () {
            return Un(this._rgb);
          }),
        (Ln.temp =
          Ln.kelvin =
          Ln.temperature =
            function () {
              for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
              return new (Function.prototype.bind.apply(
                In,
                [null].concat(e, ["temp"])
              ))();
            }),
        (Gn.format.temp = Gn.format.kelvin = Gn.format.temperature = Pn);
      var $n = c.unpack,
        Bn = Math.cbrt,
        Wn = Math.pow,
        Vn = Math.sign,
        Hn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = $n(e, "rgb"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = [qn(r / 255), qn(a / 255), qn(o / 255)],
            l = i[0],
            u = i[1],
            s = i[2],
            c = Bn(0.4122214708 * l + 0.5363325363 * u + 0.0514459929 * s),
            f = Bn(0.2119034982 * l + 0.6806995451 * u + 0.1073969566 * s),
            d = Bn(0.0883024619 * l + 0.2817188376 * u + 0.6299787005 * s);
          return [
            0.2104542553 * c + 0.793617785 * f - 0.0040720468 * d,
            1.9779984951 * c - 2.428592205 * f + 0.4505937099 * d,
            0.0259040371 * c + 0.7827717662 * f - 0.808675766 * d,
          ];
        };
      function qn(e) {
        var t = Math.abs(e);
        return t < 0.04045
          ? e / 12.92
          : (Vn(e) || 1) * Wn((t + 0.055) / 1.055, 2.4);
      }
      var Yn = c.unpack,
        Qn = Math.pow,
        Kn = Math.sign,
        Jn = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = Yn(e, "lab"))[0],
            r = e[1],
            a = e[2],
            o = Qn(n + 0.3963377774 * r + 0.2158037573 * a, 3),
            i = Qn(n - 0.1055613458 * r - 0.0638541728 * a, 3),
            l = Qn(n - 0.0894841775 * r - 1.291485548 * a, 3);
          return [
            255 * Xn(4.0767416621 * o - 3.3077115913 * i + 0.2309699292 * l),
            255 * Xn(-1.2684380046 * o + 2.6097574011 * i - 0.3413193965 * l),
            255 * Xn(-0.0041960863 * o - 0.7034186147 * i + 1.707614701 * l),
            e.length > 3 ? e[3] : 1,
          ];
        };
      function Xn(e) {
        var t = Math.abs(e);
        return t > 0.0031308
          ? (Kn(e) || 1) * (1.055 * Qn(t, 1 / 2.4) - 0.055)
          : 12.92 * e;
      }
      var Zn = c.unpack,
        er = c.type,
        tr = _,
        nr = y,
        rr = f,
        ar = Hn;
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
      var or = c.unpack,
        ir = Hn,
        lr = $t,
        ur = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = or(e, "rgb"),
            r = n[0],
            a = n[1],
            o = n[2],
            i = ir(r, a, o),
            l = i[0],
            u = i[1],
            s = i[2];
          return lr(l, u, s);
        },
        sr = c.unpack,
        cr = Jt,
        fr = Jn,
        dr = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          var n = (e = sr(e, "lch"))[0],
            r = e[1],
            a = e[2],
            o = cr(n, r, a),
            i = o[0],
            l = o[1],
            u = o[2],
            s = fr(i, l, u);
          return [s[0], s[1], s[2], e.length > 3 ? e[3] : 1];
        },
        pr = c.unpack,
        hr = c.type,
        vr = _,
        gr = y,
        yr = f,
        mr = ur;
      (gr.prototype.oklch = function () {
        return mr(this._rgb);
      }),
        (vr.oklch = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          return new (Function.prototype.bind.apply(
            gr,
            [null].concat(e, ["oklch"])
          ))();
        }),
        (yr.format.oklch = dr),
        yr.autodetect.push({
          p: 3,
          test: function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            if (((e = pr(e, "oklch")), "array" === hr(e) && 3 === e.length))
              return "oklch";
          },
        });
      var _r = y,
        br = c.type;
      (_r.prototype.alpha = function (e, t) {
        return (
          void 0 === t && (t = !1),
          void 0 !== e && "number" === br(e)
            ? t
              ? ((this._rgb[3] = e), this)
              : new _r([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb")
            : this._rgb[3]
        );
      }),
        (y.prototype.clipped = function () {
          return this._rgb._clipped || !1;
        });
      var wr = y,
        Sr = yt;
      (wr.prototype.darken = function (e) {
        void 0 === e && (e = 1);
        var t = this.lab();
        return (t[0] -= Sr.Kn * e), new wr(t, "lab").alpha(this.alpha(), !0);
      }),
        (wr.prototype.brighten = function (e) {
          return void 0 === e && (e = 1), this.darken(-e);
        }),
        (wr.prototype.darker = wr.prototype.darken),
        (wr.prototype.brighter = wr.prototype.brighten),
        (y.prototype.get = function (e) {
          var t = e.split("."),
            n = t[0],
            r = t[1],
            a = this[n]();
          if (r) {
            var o = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
            if (o > -1) return a[o];
            throw new Error("unknown channel " + r + " in mode " + n);
          }
          return a;
        });
      var kr = y,
        xr = c.type,
        Er = Math.pow;
      kr.prototype.luminance = function (e) {
        if (void 0 !== e && "number" === xr(e)) {
          if (0 === e) return new kr([0, 0, 0, this._rgb[3]], "rgb");
          if (1 === e) return new kr([255, 255, 255, this._rgb[3]], "rgb");
          var t = this.luminance(),
            n = 20,
            r = function (t, a) {
              var o = t.interpolate(a, 0.5, "rgb"),
                i = o.luminance();
              return Math.abs(e - i) < 1e-7 || !n--
                ? o
                : i > e
                ? r(t, o)
                : r(o, a);
            },
            a = (
              t > e
                ? r(new kr([0, 0, 0]), this)
                : r(this, new kr([255, 255, 255]))
            ).rgb();
          return new kr(a.concat([this._rgb[3]]));
        }
        return Cr.apply(void 0, this._rgb.slice(0, 3));
      };
      var Cr = function (e, t, n) {
          return 0.2126 * (e = Or(e)) + 0.7152 * (t = Or(t)) + 0.0722 * Or(n);
        },
        Or = function (e) {
          return (e /= 255) <= 0.03928
            ? e / 12.92
            : Er((e + 0.055) / 1.055, 2.4);
        },
        Nr = {},
        Ar = y,
        Tr = c.type,
        Rr = Nr,
        jr = function (e, t, n) {
          void 0 === n && (n = 0.5);
          for (var r = [], a = arguments.length - 3; a-- > 0; )
            r[a] = arguments[a + 3];
          var o = r[0] || "lrgb";
          if ((Rr[o] || r.length || (o = Object.keys(Rr)[0]), !Rr[o]))
            throw new Error("interpolation mode " + o + " is not defined");
          return (
            "object" !== Tr(e) && (e = new Ar(e)),
            "object" !== Tr(t) && (t = new Ar(t)),
            Rr[o](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
          );
        },
        Mr = y,
        Pr = jr;
      Mr.prototype.mix = Mr.prototype.interpolate = function (e, t) {
        void 0 === t && (t = 0.5);
        for (var n = [], r = arguments.length - 2; r-- > 0; )
          n[r] = arguments[r + 2];
        return Pr.apply(void 0, [this, e, t].concat(n));
      };
      var Fr = y;
      Fr.prototype.premultiply = function (e) {
        void 0 === e && (e = !1);
        var t = this._rgb,
          n = t[3];
        return e
          ? ((this._rgb = [t[0] * n, t[1] * n, t[2] * n, n]), this)
          : new Fr([t[0] * n, t[1] * n, t[2] * n, n], "rgb");
      };
      var zr = y,
        Dr = yt;
      (zr.prototype.saturate = function (e) {
        void 0 === e && (e = 1);
        var t = this.lch();
        return (
          (t[1] += Dr.Kn * e),
          t[1] < 0 && (t[1] = 0),
          new zr(t, "lch").alpha(this.alpha(), !0)
        );
      }),
        (zr.prototype.desaturate = function (e) {
          return void 0 === e && (e = 1), this.saturate(-e);
        });
      var Lr = y,
        Ir = c.type;
      Lr.prototype.set = function (e, t, n) {
        void 0 === n && (n = !1);
        var r = e.split("."),
          a = r[0],
          o = r[1],
          i = this[a]();
        if (o) {
          var l = a.indexOf(o) - ("ok" === a.substr(0, 2) ? 2 : 0);
          if (l > -1) {
            if ("string" == Ir(t))
              switch (t.charAt(0)) {
                case "+":
                case "-":
                  i[l] += +t;
                  break;
                case "*":
                  i[l] *= +t.substr(1);
                  break;
                case "/":
                  i[l] /= +t.substr(1);
                  break;
                default:
                  i[l] = +t;
              }
            else {
              if ("number" !== Ir(t))
                throw new Error("unsupported value for Color.set");
              i[l] = t;
            }
            var u = new Lr(i, a);
            return n ? ((this._rgb = u._rgb), this) : u;
          }
          throw new Error("unknown channel " + o + " in mode " + a);
        }
        return i;
      };
      var Gr = y;
      Nr.rgb = function (e, t, n) {
        var r = e._rgb,
          a = t._rgb;
        return new Gr(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "rgb"
        );
      };
      var Ur = y,
        $r = Math.sqrt,
        Br = Math.pow;
      Nr.lrgb = function (e, t, n) {
        var r = e._rgb,
          a = r[0],
          o = r[1],
          i = r[2],
          l = t._rgb,
          u = l[0],
          s = l[1],
          c = l[2];
        return new Ur(
          $r(Br(a, 2) * (1 - n) + Br(u, 2) * n),
          $r(Br(o, 2) * (1 - n) + Br(s, 2) * n),
          $r(Br(i, 2) * (1 - n) + Br(c, 2) * n),
          "rgb"
        );
      };
      var Wr = y;
      Nr.lab = function (e, t, n) {
        var r = e.lab(),
          a = t.lab();
        return new Wr(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "lab"
        );
      };
      var Vr = y,
        Hr = function (e, t, n, r) {
          var a, o, i, l, u, s, c, f, d, p, h, v, g;
          return (
            "hsl" === r
              ? ((i = e.hsl()), (l = t.hsl()))
              : "hsv" === r
              ? ((i = e.hsv()), (l = t.hsv()))
              : "hcg" === r
              ? ((i = e.hcg()), (l = t.hcg()))
              : "hsi" === r
              ? ((i = e.hsi()), (l = t.hsi()))
              : "lch" === r || "hcl" === r
              ? ((r = "hcl"), (i = e.hcl()), (l = t.hcl()))
              : "oklch" === r &&
                ((i = e.oklch().reverse()), (l = t.oklch().reverse())),
            ("h" !== r.substr(0, 1) && "oklch" !== r) ||
              ((u = (a = i)[0]),
              (c = a[1]),
              (d = a[2]),
              (s = (o = l)[0]),
              (f = o[1]),
              (p = o[2])),
            isNaN(u) || isNaN(s)
              ? isNaN(u)
                ? isNaN(s)
                  ? (v = Number.NaN)
                  : ((v = s), (1 != d && 0 != d) || "hsv" == r || (h = f))
                : ((v = u), (1 != p && 0 != p) || "hsv" == r || (h = c))
              : (v =
                  u +
                  n *
                    (s > u && s - u > 180
                      ? s - (u + 360)
                      : s < u && u - s > 180
                      ? s + 360 - u
                      : s - u)),
            void 0 === h && (h = c + n * (f - c)),
            (g = d + n * (p - d)),
            new Vr("oklch" === r ? [g, h, v] : [v, h, g], r)
          );
        },
        qr = Hr,
        Yr = function (e, t, n) {
          return qr(e, t, n, "lch");
        };
      (Nr.lch = Yr), (Nr.hcl = Yr);
      var Qr = y;
      Nr.num = function (e, t, n) {
        var r = e.num(),
          a = t.num();
        return new Qr(r + n * (a - r), "num");
      };
      var Kr = Hr;
      Nr.hcg = function (e, t, n) {
        return Kr(e, t, n, "hcg");
      };
      var Jr = Hr;
      Nr.hsi = function (e, t, n) {
        return Jr(e, t, n, "hsi");
      };
      var Xr = Hr;
      Nr.hsl = function (e, t, n) {
        return Xr(e, t, n, "hsl");
      };
      var Zr = Hr;
      Nr.hsv = function (e, t, n) {
        return Zr(e, t, n, "hsv");
      };
      var ea = y;
      Nr.oklab = function (e, t, n) {
        var r = e.oklab(),
          a = t.oklab();
        return new ea(
          r[0] + n * (a[0] - r[0]),
          r[1] + n * (a[1] - r[1]),
          r[2] + n * (a[2] - r[2]),
          "oklab"
        );
      };
      var ta = Hr;
      Nr.oklch = function (e, t, n) {
        return ta(e, t, n, "oklch");
      };
      var na = y,
        ra = c.clip_rgb,
        aa = Math.pow,
        oa = Math.sqrt,
        ia = Math.PI,
        la = Math.cos,
        ua = Math.sin,
        sa = Math.atan2,
        ca = function (e, t) {
          for (var n = e.length, r = [0, 0, 0, 0], a = 0; a < e.length; a++) {
            var o = e[a],
              i = t[a] / n,
              l = o._rgb;
            (r[0] += aa(l[0], 2) * i),
              (r[1] += aa(l[1], 2) * i),
              (r[2] += aa(l[2], 2) * i),
              (r[3] += l[3] * i);
          }
          return (
            (r[0] = oa(r[0])),
            (r[1] = oa(r[1])),
            (r[2] = oa(r[2])),
            r[3] > 0.9999999 && (r[3] = 1),
            new na(ra(r))
          );
        },
        fa = _,
        da = c.type,
        pa = Math.pow,
        ha = function (e) {
          var t = "rgb",
            n = fa("#ccc"),
            r = 0,
            a = [0, 1],
            o = [],
            i = [0, 0],
            l = !1,
            u = [],
            s = !1,
            c = 0,
            f = 1,
            d = !1,
            p = {},
            h = !0,
            v = 1,
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
                o.length = 0;
                for (var n = 0; n < e.length; n++) o.push(n / (e.length - 1));
              }
              return b(), (u = e);
            },
            y = function (e) {
              return e;
            },
            m = function (e) {
              return e;
            },
            _ = function (e, r) {
              var a, s;
              if ((null == r && (r = !1), isNaN(e) || null === e)) return n;
              (s = r
                ? e
                : l && l.length > 2
                ? (function (e) {
                    if (null != l) {
                      for (var t = l.length - 1, n = 0; n < t && e >= l[n]; )
                        n++;
                      return n - 1;
                    }
                    return 0;
                  })(e) /
                  (l.length - 2)
                : f !== c
                ? (e - c) / (f - c)
                : 1),
                (s = m(s)),
                r || (s = y(s)),
                1 !== v && (s = pa(s, v)),
                (s = i[0] + s * (1 - i[0] - i[1])),
                (s = Math.min(1, Math.max(0, s)));
              var d = Math.floor(1e4 * s);
              if (h && p[d]) a = p[d];
              else {
                if ("array" === da(u))
                  for (var g = 0; g < o.length; g++) {
                    var _ = o[g];
                    if (s <= _) {
                      a = u[g];
                      break;
                    }
                    if (s >= _ && g === o.length - 1) {
                      a = u[g];
                      break;
                    }
                    if (s > _ && s < o[g + 1]) {
                      (s = (s - _) / (o[g + 1] - _)),
                        (a = fa.interpolate(u[g], u[g + 1], s, t));
                      break;
                    }
                  }
                else "function" === da(u) && (a = u(s));
                h && (p[d] = a);
              }
              return a;
            },
            b = function () {
              return (p = {});
            };
          g(e);
          var w = function (e) {
            var t = fa(_(e));
            return s && t[s] ? t[s]() : t;
          };
          return (
            (w.classes = function (e) {
              if (null != e) {
                if ("array" === da(e)) (l = e), (a = [e[0], e[e.length - 1]]);
                else {
                  var t = fa.analyze(a);
                  l = 0 === e ? [t.min, t.max] : fa.limits(t, "e", e);
                }
                return w;
              }
              return l;
            }),
            (w.domain = function (e) {
              if (!arguments.length) return a;
              (c = e[0]), (f = e[e.length - 1]), (o = []);
              var t = u.length;
              if (e.length === t && c !== f)
                for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                  var i = r[n];
                  o.push((i - c) / (f - c));
                }
              else {
                for (var l = 0; l < t; l++) o.push(l / (t - 1));
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
                    (m = function (e) {
                      if (e <= 0 || e >= 1) return e;
                      for (var t = 0; e >= d[t + 1]; ) t++;
                      var n = (e - d[t]) / (d[t + 1] - d[t]);
                      return s[t] + n * (s[t + 1] - s[t]);
                    });
                }
              }
              return (a = [c, f]), w;
            }),
            (w.mode = function (e) {
              return arguments.length ? ((t = e), b(), w) : t;
            }),
            (w.range = function (e, t) {
              return g(e), w;
            }),
            (w.out = function (e) {
              return (s = e), w;
            }),
            (w.spread = function (e) {
              return arguments.length ? ((r = e), w) : r;
            }),
            (w.correctLightness = function (e) {
              return (
                null == e && (e = !0),
                (d = e),
                b(),
                (y = d
                  ? function (e) {
                      for (
                        var t = _(0, !0).lab()[0],
                          n = _(1, !0).lab()[0],
                          r = t > n,
                          a = _(e, !0).lab()[0],
                          o = t + (n - t) * e,
                          i = a - o,
                          l = 0,
                          u = 1,
                          s = 20;
                        Math.abs(i) > 0.01 && s-- > 0;

                      )
                        r && (i *= -1),
                          i < 0
                            ? ((l = e), (e += 0.5 * (u - e)))
                            : ((u = e), (e += 0.5 * (l - e))),
                          (i = (a = _(e, !0).lab()[0]) - o);
                      return e;
                    }
                  : function (e) {
                      return e;
                    }),
                w
              );
            }),
            (w.padding = function (e) {
              return null != e
                ? ("number" === da(e) && (e = [e, e]), (i = e), w)
                : i;
            }),
            (w.colors = function (t, n) {
              arguments.length < 2 && (n = "hex");
              var r = [];
              if (0 === arguments.length) r = u.slice(0);
              else if (1 === t) r = [w(0.5)];
              else if (t > 1) {
                var o = a[0],
                  i = a[1] - o;
                r = (function (e, t) {
                  for (
                    var n = [], r = e < t, a = t, o = e;
                    r ? o < a : o > a;
                    r ? o++ : o--
                  )
                    n.push(o);
                  return n;
                })(0, t).map(function (e) {
                  return w(o + (e / (t - 1)) * i);
                });
              } else {
                e = [];
                var s = [];
                if (l && l.length > 2)
                  for (
                    var c = 1, f = l.length, d = 1 <= f;
                    d ? c < f : c > f;
                    d ? c++ : c--
                  )
                    s.push(0.5 * (l[c - 1] + l[c]));
                else s = a;
                r = s.map(function (e) {
                  return w(e);
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
            (w.cache = function (e) {
              return null != e ? ((h = e), w) : h;
            }),
            (w.gamma = function (e) {
              return null != e ? ((v = e), w) : v;
            }),
            (w.nodata = function (e) {
              return null != e ? ((n = fa(e)), w) : n;
            }),
            w
          );
        };
      var va = y,
        ga = ha,
        ya = _,
        ma = function (e, t, n) {
          if (!ma[n]) throw new Error("unknown blend mode " + n);
          return ma[n](e, t);
        },
        _a = function (e) {
          return function (t, n) {
            var r = ya(n).rgb(),
              a = ya(t).rgb();
            return ya.rgb(e(r, a));
          };
        },
        ba = function (e) {
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
      (ma.normal = _a(
        ba(function (e) {
          return e;
        })
      )),
        (ma.multiply = _a(
          ba(function (e, t) {
            return (e * t) / 255;
          })
        )),
        (ma.screen = _a(
          ba(function (e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255));
          })
        )),
        (ma.overlay = _a(
          ba(function (e, t) {
            return t < 128
              ? (2 * e * t) / 255
              : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255));
          })
        )),
        (ma.darken = _a(
          ba(function (e, t) {
            return e > t ? t : e;
          })
        )),
        (ma.lighten = _a(
          ba(function (e, t) {
            return e > t ? e : t;
          })
        )),
        (ma.dodge = _a(
          ba(function (e, t) {
            return 255 === e || (e = ((t / 255) * 255) / (1 - e / 255)) > 255
              ? 255
              : e;
          })
        )),
        (ma.burn = _a(
          ba(function (e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255));
          })
        ));
      for (
        var wa = ma,
          Sa = c.type,
          ka = c.clip_rgb,
          xa = c.TWOPI,
          Ea = Math.pow,
          Ca = Math.sin,
          Oa = Math.cos,
          Na = _,
          Aa = y,
          Ta = Math.floor,
          Ra = Math.random,
          ja = i,
          Ma = Math.log,
          Pa = Math.pow,
          Fa = Math.floor,
          za = Math.abs,
          Da = function (e, t) {
            void 0 === t && (t = null);
            var n = {
              min: Number.MAX_VALUE,
              max: -1 * Number.MAX_VALUE,
              sum: 0,
              values: [],
              count: 0,
            };
            return (
              "object" === ja(e) && (e = Object.values(e)),
              e.forEach(function (e) {
                t && "object" === ja(e) && (e = e[t]),
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
                return La(n, e, t);
              }),
              n
            );
          },
          La = function (e, t, n) {
            void 0 === t && (t = "equal"),
              void 0 === n && (n = 7),
              "array" == ja(e) && (e = Da(e));
            var r = e.min,
              a = e.max,
              o = e.values.sort(function (e, t) {
                return e - t;
              });
            if (1 === n) return [r, a];
            var i = [];
            if (
              ("c" === t.substr(0, 1) && (i.push(r), i.push(a)),
              "e" === t.substr(0, 1))
            ) {
              i.push(r);
              for (var l = 1; l < n; l++) i.push(r + (l / n) * (a - r));
              i.push(a);
            } else if ("l" === t.substr(0, 1)) {
              if (r <= 0)
                throw new Error(
                  "Logarithmic scales are only possible for values > 0"
                );
              var u = Math.LOG10E * Ma(r),
                s = Math.LOG10E * Ma(a);
              i.push(r);
              for (var c = 1; c < n; c++) i.push(Pa(10, u + (c / n) * (s - u)));
              i.push(a);
            } else if ("q" === t.substr(0, 1)) {
              i.push(r);
              for (var f = 1; f < n; f++) {
                var d = ((o.length - 1) * f) / n,
                  p = Fa(d);
                if (p === d) i.push(o[p]);
                else {
                  var h = d - p;
                  i.push(o[p] * (1 - h) + o[p + 1] * h);
                }
              }
              i.push(a);
            } else if ("k" === t.substr(0, 1)) {
              var v,
                g = o.length,
                y = new Array(g),
                m = new Array(n),
                _ = !0,
                b = 0,
                w = null;
              (w = []).push(r);
              for (var S = 1; S < n; S++) w.push(r + (S / n) * (a - r));
              for (w.push(a); _; ) {
                for (var k = 0; k < n; k++) m[k] = 0;
                for (var x = 0; x < g; x++)
                  for (
                    var E = o[x], C = Number.MAX_VALUE, O = void 0, N = 0;
                    N < n;
                    N++
                  ) {
                    var A = za(w[N] - E);
                    A < C && ((C = A), (O = N)), m[O]++, (y[x] = O);
                  }
                for (var T = new Array(n), R = 0; R < n; R++) T[R] = null;
                for (var j = 0; j < g; j++)
                  null === T[(v = y[j])] ? (T[v] = o[j]) : (T[v] += o[j]);
                for (var M = 0; M < n; M++) T[M] *= 1 / m[M];
                _ = !1;
                for (var P = 0; P < n; P++)
                  if (T[P] !== w[P]) {
                    _ = !0;
                    break;
                  }
                (w = T), ++b > 200 && (_ = !1);
              }
              for (var F = {}, z = 0; z < n; z++) F[z] = [];
              for (var D = 0; D < g; D++) F[(v = y[D])].push(o[D]);
              for (var L = [], I = 0; I < n; I++)
                L.push(F[I][0]), L.push(F[I][F[I].length - 1]);
              (L = L.sort(function (e, t) {
                return e - t;
              })),
                i.push(L[0]);
              for (var G = 1; G < L.length; G += 2) {
                var U = L[G];
                isNaN(U) || -1 !== i.indexOf(U) || i.push(U);
              }
            }
            return i;
          },
          Ia = { analyze: Da, limits: La },
          Ga = y,
          Ua = y,
          $a = Math.sqrt,
          Ba = Math.pow,
          Wa = Math.min,
          Va = Math.max,
          Ha = Math.atan2,
          qa = Math.abs,
          Ya = Math.cos,
          Qa = Math.sin,
          Ka = Math.exp,
          Ja = Math.PI,
          Xa = y,
          Za = y,
          eo = _,
          to = ha,
          no = {
            cool: function () {
              return to([eo.hsl(180, 1, 0.9), eo.hsl(250, 0.7, 0.4)]);
            },
            hot: function () {
              return to(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
            },
          },
          ro = {
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
          ao = 0,
          oo = Object.keys(ro);
        ao < oo.length;
        ao += 1
      ) {
        var io = oo[ao];
        ro[io.toLowerCase()] = ro[io];
      }
      var lo = ro,
        uo = _;
      return (
        (uo.average = function (e, t, n) {
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
            var o = e.shift(), i = o.get(t), l = [], u = 0, s = 0, c = 0;
            c < i.length;
            c++
          )
            if (
              ((i[c] = (i[c] || 0) * n[0]),
              l.push(isNaN(i[c]) ? 0 : n[0]),
              "h" === t.charAt(c) && !isNaN(i[c]))
            ) {
              var f = (i[c] / 180) * ia;
              (u += la(f) * n[0]), (s += ua(f) * n[0]);
            }
          var d = o.alpha() * n[0];
          e.forEach(function (e, r) {
            var a = e.get(t);
            d += e.alpha() * n[r + 1];
            for (var o = 0; o < i.length; o++)
              if (!isNaN(a[o]))
                if (((l[o] += n[r + 1]), "h" === t.charAt(o))) {
                  var c = (a[o] / 180) * ia;
                  (u += la(c) * n[r + 1]), (s += ua(c) * n[r + 1]);
                } else i[o] += a[o] * n[r + 1];
          });
          for (var p = 0; p < i.length; p++)
            if ("h" === t.charAt(p)) {
              for (var h = (sa(s / l[p], u / l[p]) / ia) * 180; h < 0; )
                h += 360;
              for (; h >= 360; ) h -= 360;
              i[p] = h;
            } else i[p] = i[p] / l[p];
          return (d /= r), new na(i, t).alpha(d > 0.99999 ? 1 : d, !0);
        }),
        (uo.bezier = function (e) {
          var t = (function (e) {
            var t, n, r, a, o, i, l;
            if (
              2 ===
              (e = e.map(function (e) {
                return new va(e);
              })).length
            )
              (t = e.map(function (e) {
                return e.lab();
              })),
                (o = t[0]),
                (i = t[1]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return o[t] + e * (i[t] - o[t]);
                  });
                  return new va(t, "lab");
                });
            else if (3 === e.length)
              (n = e.map(function (e) {
                return e.lab();
              })),
                (o = n[0]),
                (i = n[1]),
                (l = n[2]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (
                      (1 - e) * (1 - e) * o[t] +
                      2 * (1 - e) * e * i[t] +
                      e * e * l[t]
                    );
                  });
                  return new va(t, "lab");
                });
            else if (4 === e.length) {
              var u;
              (r = e.map(function (e) {
                return e.lab();
              })),
                (o = r[0]),
                (i = r[1]),
                (l = r[2]),
                (u = r[3]),
                (a = function (e) {
                  var t = [0, 1, 2].map(function (t) {
                    return (
                      (1 - e) * (1 - e) * (1 - e) * o[t] +
                      3 * (1 - e) * (1 - e) * e * i[t] +
                      3 * (1 - e) * e * e * l[t] +
                      e * e * e * u[t]
                    );
                  });
                  return new va(t, "lab");
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
                      return s.reduce(function (r, a, o) {
                        return (
                          r + c[o] * Math.pow(t, f - o) * Math.pow(e, o) * a[n]
                        );
                      }, 0);
                    });
                  return new va(n, "lab");
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
        (uo.blend = wa),
        (uo.cubehelix = function (e, t, n, r, a) {
          void 0 === e && (e = 300),
            void 0 === t && (t = -1.5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = [0, 1]);
          var o,
            i = 0;
          "array" === Sa(a) ? (o = a[1] - a[0]) : ((o = 0), (a = [a, a]));
          var l = function (l) {
            var u = xa * ((e + 120) / 360 + t * l),
              s = Ea(a[0] + o * l, r),
              c = ((0 !== i ? n[0] + l * i : n) * s * (1 - s)) / 2,
              f = Oa(u),
              d = Ca(u);
            return Na(
              ka([
                255 * (s + c * (-0.14861 * f + 1.78277 * d)),
                255 * (s + c * (-0.29227 * f - 0.90649 * d)),
                255 * (s + c * (1.97294 * f)),
                1,
              ])
            );
          };
          return (
            (l.start = function (t) {
              return null == t ? e : ((e = t), l);
            }),
            (l.rotations = function (e) {
              return null == e ? t : ((t = e), l);
            }),
            (l.gamma = function (e) {
              return null == e ? r : ((r = e), l);
            }),
            (l.hue = function (e) {
              return null == e
                ? n
                : ("array" === Sa((n = e))
                    ? 0 == (i = n[1] - n[0]) && (n = n[1])
                    : (i = 0),
                  l);
            }),
            (l.lightness = function (e) {
              return null == e
                ? a
                : ("array" === Sa(e)
                    ? ((a = e), (o = e[1] - e[0]))
                    : ((a = [e, e]), (o = 0)),
                  l);
            }),
            (l.scale = function () {
              return Na.scale(l);
            }),
            l.hue(n),
            l
          );
        }),
        (uo.mix = uo.interpolate = jr),
        (uo.random = function () {
          for (var e = "#", t = 0; t < 6; t++)
            e += "0123456789abcdef".charAt(Ta(16 * Ra()));
          return new Aa(e, "hex");
        }),
        (uo.scale = ha),
        (uo.analyze = Ia.analyze),
        (uo.contrast = function (e, t) {
          (e = new Ga(e)), (t = new Ga(t));
          var n = e.luminance(),
            r = t.luminance();
          return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
        }),
        (uo.deltaE = function (e, t, n, r, a) {
          void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = 1);
          var o = function (e) {
              return (360 * e) / (2 * Ja);
            },
            i = function (e) {
              return (2 * Ja * e) / 360;
            };
          (e = new Ua(e)), (t = new Ua(t));
          var l = Array.from(e.lab()),
            u = l[0],
            s = l[1],
            c = l[2],
            f = Array.from(t.lab()),
            d = f[0],
            p = f[1],
            h = f[2],
            v = (u + d) / 2,
            g = ($a(Ba(s, 2) + Ba(c, 2)) + $a(Ba(p, 2) + Ba(h, 2))) / 2,
            y = 0.5 * (1 - $a(Ba(g, 7) / (Ba(g, 7) + Ba(25, 7)))),
            m = s * (1 + y),
            _ = p * (1 + y),
            b = $a(Ba(m, 2) + Ba(c, 2)),
            w = $a(Ba(_, 2) + Ba(h, 2)),
            S = (b + w) / 2,
            k = o(Ha(c, m)),
            x = o(Ha(h, _)),
            E = k >= 0 ? k : k + 360,
            C = x >= 0 ? x : x + 360,
            O = qa(E - C) > 180 ? (E + C + 360) / 2 : (E + C) / 2,
            N =
              1 -
              0.17 * Ya(i(O - 30)) +
              0.24 * Ya(i(2 * O)) +
              0.32 * Ya(i(3 * O + 6)) -
              0.2 * Ya(i(4 * O - 63)),
            A = C - E;
          (A = qa(A) <= 180 ? A : C <= E ? A + 360 : A - 360),
            (A = 2 * $a(b * w) * Qa(i(A) / 2));
          var T = d - u,
            R = w - b,
            j = 1 + (0.015 * Ba(v - 50, 2)) / $a(20 + Ba(v - 50, 2)),
            M = 1 + 0.045 * S,
            P = 1 + 0.015 * S * N,
            F = 30 * Ka(-Ba((O - 275) / 25, 2)),
            z = -2 * $a(Ba(S, 7) / (Ba(S, 7) + Ba(25, 7))) * Qa(2 * i(F)),
            D = $a(
              Ba(T / (n * j), 2) +
                Ba(R / (r * M), 2) +
                Ba(A / (a * P), 2) +
                z * (R / (r * M)) * (A / (a * P))
            );
          return Va(0, Wa(100, D));
        }),
        (uo.distance = function (e, t, n) {
          void 0 === n && (n = "lab"), (e = new Xa(e)), (t = new Xa(t));
          var r = e.get(n),
            a = t.get(n),
            o = 0;
          for (var i in r) {
            var l = (r[i] || 0) - (a[i] || 0);
            o += l * l;
          }
          return Math.sqrt(o);
        }),
        (uo.limits = Ia.limits),
        (uo.valid = function () {
          for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
          try {
            return (
              new (Function.prototype.bind.apply(Za, [null].concat(e)))(), !0
            );
          } catch (n) {
            return !1;
          }
        }),
        (uo.scales = no),
        (uo.colors = dn),
        (uo.brewer = lo),
        uo
      );
    })();
  })(gm);
  const ym = K(gm.exports);
  var mm = ym(Ay(0)),
    _m = ym(Ay(1));
  function bm({ data: e, className: t }) {
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
          values: n.map((e) => Xv(e.minimumInitialSubscription, "# ##0")),
        },
        {
          key: "Förvaltningsavgift",
          values: n.map((e) =>
            Xv(e.managementFee, "0,000%").replace(/0{1,2}%$/, "%")
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
      return We.jsx(Xy, {
        className: "firstheader" + (t ? " " + t : ""),
        list: r,
      });
    }
    return null;
  }
  [
    _m.darken(0.8),
    _m.darken(0.2),
    _m.darken(-0.6),
    mm.darken(0.4),
    mm.darken(-0.1),
    mm.darken(-0.6),
  ].map((e) => e.hex()),
    Oy(e),
    Oy(e),
    Oy(e),
    ze.Component,
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e),
    (function (e) {
      void 0 === e && (e = {});
      var t = e.window,
        n = void 0 === t ? document.defaultView : t,
        r = n.history;
      function a() {
        var e = n.location,
          t = e.pathname,
          a = e.search,
          o = e.hash,
          i = r.state || {};
        return [
          i.idx,
          {
            pathname: t,
            search: a,
            hash: o,
            state: i.usr || null,
            key: i.key || "default",
          },
        ];
      }
      var o = null;
      n.addEventListener("popstate", function () {
        if (o) f.call(o), (o = null);
        else {
          var e = nm.Pop,
            t = a(),
            n = t[0],
            r = t[1];
          if (f.length) {
            if (null != n) {
              var l = u - n;
              l &&
                ((o = {
                  action: e,
                  location: r,
                  retry: function () {
                    d(-1 * l);
                  },
                }),
                d(l));
            }
          } else
            !(function (e) {
              i = e;
              var t = a();
              (u = t[0]), (s = t[1]), c.call({ action: i, location: s });
            })(e);
        }
      });
      var i = nm.Pop,
        l = a(),
        u = l[0],
        s = l[1],
        c = im(),
        f = im();
      function d(e) {
        r.go(e);
      }
      null == u && ((u = 0), r.replaceState(om({}, r.state, { idx: u }), ""));
    })(),
    Oy(e),
    Oy(e),
    Oy(e),
    Oy(e);
  const wm = Zv("0.0%"),
    Sm = Zv("0.00"),
    km = {
      Value: "Value",
      YearlyReturn: "Yearly return",
      Return: "Return",
      Volatility: "Volatility",
      ShareOfPositiveMonths: "Share of positive months",
      Correlation: "Correlation",
      Beta: "Beta",
      TrackingError: "Tracking error",
      InformationRatio: "Information ratio",
      SharpeRatio: "Sharpe ratio",
    },
    xm = {
      Value: "Värde",
      YearlyReturn: "Årsavkastning",
      Return: "Enkel avkastning",
      Volatility: "Volatilitet",
      ShareOfPositiveMonths: "Andel positiva månader",
      Correlation: "Korrelation",
      Beta: "Beta",
      TrackingError: "Aktiv risk",
      InformationRatio: "Informationskvot",
      SharpeRatio: "Sharpekvot",
    },
    Em = (e, t) => (e === am.Sv ? xm[t] : km[t]),
    Cm = ({
      masterTimeSeriesName: e,
      timeseries: t,
      navValue: n,
      riskFreeTimeSeries: r,
      locale: a = am.Sv,
      showItems: o = [
        "Value",
        "YearlyReturn",
        "Return",
        "Volatility",
        "ShareOfPositiveMonths",
        "Correlation",
        "Beta",
        "TrackingError",
        "InformationRatio",
        "SharpeRatio",
      ],
    }) => {
      const i = t.filter((t) => t.name === e)[0],
        l = i.resampleToCalenderMonthly(),
        u = [{ key: null, values: t.map((e) => e.name) }];
      let s;
      if (r) {
        const e = iy.align(i, r, ay.Latest),
          t = i
            .resampleToCalenderMonthly()
            .return()
            .subtract(e.resampleToCalenderMonthly().return())
            .add(1)
            .cumProd();
        s = Sm(t.sharpeRatio());
      }
      const c = [],
        f = [],
        d = [],
        p = [],
        h = [],
        v = [];
      for (let g = 0; g < t.length; g++) {
        const e = t[g].resampleToCalenderMonthly();
        if (e.name === i.name)
          (c[g] = ""),
            (f[g] = ""),
            (d[g] = Xv(n, "# ##0")),
            (p[g] = ""),
            (h[g] = s || Sm(l.sharpeRatio())),
            (v[g] = wm(l.annualizedReturn()));
        else {
          const t = e.annualizedReturn();
          (c[g] = Sm(e.correlation(l))),
            (f[g] = wm(e.trackingError(l))),
            Sm((e.correlation(l) * l.volatility()) / e.volatility()),
            (d[g] = ""),
            (p[g] = Sm(l.informationRatio(e))),
            (h[g] = Sm(e.sharpeRatio())),
            (v[g] = wm(t) + " [" + wm(l.annualizedReturn() - t) + "]");
        }
        e.valueReturn();
      }
      return (
        o.includes("Value") && u.push({ key: Em(a, "Value"), values: d }),
        o.includes("YearlyReturn") &&
          u.push({ key: Em(a, "YearlyReturn"), values: v }),
        o.includes("Return") &&
          u.push({
            key: Em(a, "Return"),
            values: t.map((e) =>
              wm(e.resampleToCalenderMonthly().valueReturn()).toString()
            ),
          }),
        o.includes("Volatility") &&
          u.push({
            key: Em(a, "Volatility"),
            values: t.map((e) =>
              wm(e.resampleToCalenderMonthly().volatility()).toString()
            ),
          }),
        o.includes("ShareOfPositiveMonths") &&
          u.push({
            key: Em(a, "ShareOfPositiveMonths"),
            values: t.map((e) => wm(e.resampleToMonthly().positiveShare())),
          }),
        o.includes("Correlation") &&
          u.push({ key: Em(a, "Correlation"), values: c }),
        o.includes("TrackingError") &&
          u.push({ key: Em(a, "TrackingError"), values: f }),
        o.includes("InformationRatio") &&
          u.push({ key: Em(a, "InformationRatio"), values: p }),
        o.includes("SharpeRatio") &&
          u.push({ key: Em(a, "SharpeRatio"), values: h }),
        We.jsx(Xy, { className: "firstheader", list: u })
      );
    };
  function Om(e, t, n, r, a, o, i) {
    try {
      var l = e[o](i),
        u = l.value;
    } catch (s) {
      return void n(s);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, a);
  }
  function Nm(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, a) {
        var o = e.apply(t, n);
        function i(e) {
          Om(o, r, a, i, l, "next", e);
        }
        function l(e) {
          Om(o, r, a, i, l, "throw", e);
        }
        i(void 0);
      });
    };
  }
  function Am() {
    return (
      (Am = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Am.apply(this, arguments)
    );
  }
  var Tm = { exports: {} },
    Rm = { exports: {} };
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
  })(Rm);
  var jm = Rm.exports;
  !(function (e) {
    var t = jm.default;
    function n() {
      (e.exports = n =
        function () {
          return a;
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
      var r,
        a = {},
        o = Object.prototype,
        i = o.hasOwnProperty,
        l =
          Object.defineProperty ||
          function (e, t, n) {
            e[t] = n.value;
          },
        u = "function" == typeof Symbol ? Symbol : {},
        s = u.iterator || "@@iterator",
        c = u.asyncIterator || "@@asyncIterator",
        f = u.toStringTag || "@@toStringTag";
      function d(e, t, n) {
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
        d({}, "");
      } catch (F) {
        d = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function p(e, t, n, r) {
        var a = t && t.prototype instanceof b ? t : b,
          o = Object.create(a.prototype),
          i = new M(r || []);
        return l(o, "_invoke", { value: A(e, n, i) }), o;
      }
      function h(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (r) {
          return { type: "throw", arg: r };
        }
      }
      a.wrap = p;
      var v = "suspendedStart",
        g = "suspendedYield",
        y = "executing",
        m = "completed",
        _ = {};
      function b() {}
      function w() {}
      function S() {}
      var k = {};
      d(k, s, function () {
        return this;
      });
      var x = Object.getPrototypeOf,
        E = x && x(x(P([])));
      E && E !== o && i.call(E, s) && (k = E);
      var C = (S.prototype = b.prototype = Object.create(k));
      function O(e) {
        ["next", "throw", "return"].forEach(function (t) {
          d(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function N(e, n) {
        function r(a, o, l, u) {
          var s = h(e[a], e, o);
          if ("throw" !== s.type) {
            var c = s.arg,
              f = c.value;
            return f && "object" == t(f) && i.call(f, "__await")
              ? n.resolve(f.__await).then(
                  function (e) {
                    r("next", e, l, u);
                  },
                  function (e) {
                    r("throw", e, l, u);
                  }
                )
              : n.resolve(f).then(
                  function (e) {
                    (c.value = e), l(c);
                  },
                  function (e) {
                    return r("throw", e, l, u);
                  }
                );
          }
          u(s.arg);
        }
        var a;
        l(this, "_invoke", {
          value: function (e, t) {
            function o() {
              return new n(function (n, a) {
                r(e, t, n, a);
              });
            }
            return (a = a ? a.then(o, o) : o());
          },
        });
      }
      function A(e, t, n) {
        var a = v;
        return function (o, i) {
          if (a === y) throw new Error("Generator is already running");
          if (a === m) {
            if ("throw" === o) throw i;
            return { value: r, done: !0 };
          }
          for (n.method = o, n.arg = i; ; ) {
            var l = n.delegate;
            if (l) {
              var u = T(l, n);
              if (u) {
                if (u === _) continue;
                return u;
              }
            }
            if ("next" === n.method) n.sent = n._sent = n.arg;
            else if ("throw" === n.method) {
              if (a === v) throw ((a = m), n.arg);
              n.dispatchException(n.arg);
            } else "return" === n.method && n.abrupt("return", n.arg);
            a = y;
            var s = h(e, t, n);
            if ("normal" === s.type) {
              if (((a = n.done ? m : g), s.arg === _)) continue;
              return { value: s.arg, done: n.done };
            }
            "throw" === s.type &&
              ((a = m), (n.method = "throw"), (n.arg = s.arg));
          }
        };
      }
      function T(e, t) {
        var n = t.method,
          a = e.iterator[n];
        if (a === r)
          return (
            (t.delegate = null),
            ("throw" === n &&
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = r),
              T(e, t),
              "throw" === t.method)) ||
              ("return" !== n &&
                ((t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a '" + n + "' method"
                )))),
            _
          );
        var o = h(a, e.iterator, t.arg);
        if ("throw" === o.type)
          return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), _;
        var i = o.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = r)),
              (t.delegate = null),
              _)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            _);
      }
      function R(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function j(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function M(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(R, this),
          this.reset(!0);
      }
      function P(e) {
        if (e || "" === e) {
          var n = e[s];
          if (n) return n.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var a = -1,
              o = function t() {
                for (; ++a < e.length; )
                  if (i.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                return (t.value = r), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        throw new TypeError(t(e) + " is not iterable");
      }
      return (
        (w.prototype = S),
        l(C, "constructor", { value: S, configurable: !0 }),
        l(S, "constructor", { value: w, configurable: !0 }),
        (w.displayName = d(S, f, "GeneratorFunction")),
        (a.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === w || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (a.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, S)
              : ((e.__proto__ = S), d(e, f, "GeneratorFunction")),
            (e.prototype = Object.create(C)),
            e
          );
        }),
        (a.awrap = function (e) {
          return { __await: e };
        }),
        O(N.prototype),
        d(N.prototype, c, function () {
          return this;
        }),
        (a.AsyncIterator = N),
        (a.async = function (e, t, n, r, o) {
          void 0 === o && (o = Promise);
          var i = new N(p(e, t, n, r), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        O(C),
        d(C, f, "Generator"),
        d(C, s, function () {
          return this;
        }),
        d(C, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (e) {
          var t = Object(e),
            n = [];
          for (var r in t) n.push(r);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var r = n.pop();
                if (r in t) return (e.value = r), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (a.values = P),
        (M.prototype = {
          constructor: M,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = r),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = r),
              this.tryEntries.forEach(j),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  i.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = r);
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
            function n(n, a) {
              return (
                (l.type = "throw"),
                (l.arg = e),
                (t.next = n),
                a && ((t.method = "next"), (t.arg = r)),
                !!a
              );
            }
            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
              var o = this.tryEntries[a],
                l = o.completion;
              if ("root" === o.tryLoc) return n("end");
              if (o.tryLoc <= this.prev) {
                var u = i.call(o, "catchLoc"),
                  s = i.call(o, "finallyLoc");
                if (u && s) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                } else if (u) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
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
                ? ((this.method = "next"), (this.next = a.finallyLoc), _)
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
              _
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), j(n), _;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var a = r.arg;
                  j(n);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: P(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = r),
              _
            );
          },
        }),
        a
      );
    }
    (e.exports = n),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(Tm);
  var Mm = (0, Tm.exports)(),
    Pm = Mm;
  try {
    regeneratorRuntime = Mm;
  } catch (cg) {
    "object" == typeof globalThis
      ? (globalThis.regeneratorRuntime = Mm)
      : Function("r", "regeneratorRuntime = r")(Mm);
  }
  const Fm = K(Pm),
    zm =
      "object" == typeof performance &&
      performance &&
      "function" == typeof performance.now
        ? performance
        : Date,
    Dm = new Set(),
    Lm = "object" == typeof process && process ? process : {},
    Im = (e, t, n, r) => {
      "function" == typeof Lm.emitWarning
        ? Lm.emitWarning(e, t, n, r)
        : console.error(`[${n}] ${t}: ${e}`);
    };
  let Gm = globalThis.AbortController,
    Um = globalThis.AbortSignal;
  if (void 0 === Gm) {
    (Um = class {
      constructor() {
        __publicField(this, "onabort"),
          __publicField(this, "_onabort", []),
          __publicField(this, "reason"),
          __publicField(this, "aborted", !1);
      }
      addEventListener(e, t) {
        this._onabort.push(t);
      }
    }),
      (Gm = class {
        constructor() {
          __publicField(this, "signal", new Um()), t();
        }
        abort(e) {
          var t, n;
          if (!this.signal.aborted) {
            (this.signal.reason = e), (this.signal.aborted = !0);
            for (const t of this.signal._onabort) t(e);
            null == (n = (t = this.signal).onabort) || n.call(t, e);
          }
        }
      });
    let e =
      "1" !== (null == (n = Lm.env) ? void 0 : n.LRU_CACHE_IGNORE_AC_WARNING);
    const t = () => {
      e &&
        ((e = !1),
        Im(
          "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
          "NO_ABORT_CONTROLLER",
          "ENOTSUP",
          t
        ));
    };
  }
  const $m = (e) => e && e === Math.floor(e) && e > 0 && isFinite(e),
    Bm = (e) =>
      $m(e)
        ? e <= Math.pow(2, 8)
          ? Uint8Array
          : e <= Math.pow(2, 16)
          ? Uint16Array
          : e <= Math.pow(2, 32)
          ? Uint32Array
          : e <= Number.MAX_SAFE_INTEGER
          ? Wm
          : null
        : null;
  class Wm extends Array {
    constructor(e) {
      super(e), this.fill(0);
    }
  }
  const Vm = class e {
    constructor(t, n) {
      if (
        (__publicField(this, "heap"),
        __publicField(this, "length"),
        !__privateGet(e, r))
      )
        throw new TypeError("instantiate Stack using Stack.create(n)");
      (this.heap = new n(t)), (this.length = 0);
    }
    static create(t) {
      const n = Bm(t);
      if (!n) return [];
      __privateSet(e, r, !0);
      const a = new e(t, n);
      return __privateSet(e, r, !1), a;
    }
    push(e) {
      this.heap[this.length++] = e;
    }
    pop() {
      return this.heap[--this.length];
    }
  };
  (r = new WeakMap()), __privateAdd(Vm, r, !1);
  let Hm = Vm;
  const qm = class e {
    constructor(t) {
      __privateAdd(this, A),
        __privateAdd(this, i),
        __privateAdd(this, l),
        __privateAdd(this, u),
        __privateAdd(this, s),
        __privateAdd(this, c),
        __privateAdd(this, f),
        __publicField(this, "ttl"),
        __publicField(this, "ttlResolution"),
        __publicField(this, "ttlAutopurge"),
        __publicField(this, "updateAgeOnGet"),
        __publicField(this, "updateAgeOnHas"),
        __publicField(this, "allowStale"),
        __publicField(this, "noDisposeOnSet"),
        __publicField(this, "noUpdateTTL"),
        __publicField(this, "maxEntrySize"),
        __publicField(this, "sizeCalculation"),
        __publicField(this, "noDeleteOnFetchRejection"),
        __publicField(this, "noDeleteOnStaleGet"),
        __publicField(this, "allowStaleOnFetchAbort"),
        __publicField(this, "allowStaleOnFetchRejection"),
        __publicField(this, "ignoreFetchAbort"),
        __privateAdd(this, d),
        __privateAdd(this, p),
        __privateAdd(this, h),
        __privateAdd(this, v),
        __privateAdd(this, g),
        __privateAdd(this, y),
        __privateAdd(this, m),
        __privateAdd(this, _),
        __privateAdd(this, b),
        __privateAdd(this, w),
        __privateAdd(this, S),
        __privateAdd(this, k),
        __privateAdd(this, x),
        __privateAdd(this, E),
        __privateAdd(this, C),
        __privateAdd(this, O),
        __privateAdd(this, N),
        __privateAdd(this, R, () => {}),
        __privateAdd(this, j, () => {}),
        __privateAdd(this, M, () => {}),
        __privateAdd(this, P, () => !1),
        __privateAdd(this, z, (e) => {}),
        __privateAdd(this, D, (e, t, n) => {}),
        __privateAdd(this, L, (e, t, n, r) => {
          if (n || r)
            throw new TypeError(
              "cannot set size without setting maxSize or maxEntrySize on cache"
            );
          return 0;
        }),
        __publicField(this, a, "LRUCache");
      const {
        max: n = 0,
        ttl: r,
        ttlResolution: o = 1,
        ttlAutopurge: I,
        updateAgeOnGet: G,
        updateAgeOnHas: U,
        allowStale: $,
        dispose: B,
        disposeAfter: W,
        noDisposeOnSet: V,
        noUpdateTTL: H,
        maxSize: q = 0,
        maxEntrySize: Y = 0,
        sizeCalculation: Q,
        fetchMethod: K,
        memoMethod: J,
        noDeleteOnFetchRejection: X,
        noDeleteOnStaleGet: Z,
        allowStaleOnFetchRejection: ee,
        allowStaleOnFetchAbort: te,
        ignoreFetchAbort: ne,
      } = t;
      if (0 !== n && !$m(n))
        throw new TypeError("max option must be a nonnegative integer");
      const re = n ? Bm(n) : Array;
      if (!re) throw new Error("invalid max value: " + n);
      if (
        (__privateSet(this, i, n),
        __privateSet(this, l, q),
        (this.maxEntrySize = Y || __privateGet(this, l)),
        (this.sizeCalculation = Q),
        this.sizeCalculation)
      ) {
        if (!__privateGet(this, l) && !this.maxEntrySize)
          throw new TypeError(
            "cannot set sizeCalculation without setting maxSize or maxEntrySize"
          );
        if ("function" != typeof this.sizeCalculation)
          throw new TypeError("sizeCalculation set to non-function");
      }
      if (void 0 !== J && "function" != typeof J)
        throw new TypeError("memoMethod must be a function if defined");
      if ((__privateSet(this, f, J), void 0 !== K && "function" != typeof K))
        throw new TypeError("fetchMethod must be a function if specified");
      if (
        (__privateSet(this, c, K),
        __privateSet(this, O, !!K),
        __privateSet(this, h, new Map()),
        __privateSet(this, v, new Array(n).fill(void 0)),
        __privateSet(this, g, new Array(n).fill(void 0)),
        __privateSet(this, y, new re(n)),
        __privateSet(this, m, new re(n)),
        __privateSet(this, _, 0),
        __privateSet(this, b, 0),
        __privateSet(this, w, Hm.create(n)),
        __privateSet(this, d, 0),
        __privateSet(this, p, 0),
        "function" == typeof B && __privateSet(this, u, B),
        "function" == typeof W
          ? (__privateSet(this, s, W), __privateSet(this, S, []))
          : (__privateSet(this, s, void 0), __privateSet(this, S, void 0)),
        __privateSet(this, C, !!__privateGet(this, u)),
        __privateSet(this, N, !!__privateGet(this, s)),
        (this.noDisposeOnSet = !!V),
        (this.noUpdateTTL = !!H),
        (this.noDeleteOnFetchRejection = !!X),
        (this.allowStaleOnFetchRejection = !!ee),
        (this.allowStaleOnFetchAbort = !!te),
        (this.ignoreFetchAbort = !!ne),
        0 !== this.maxEntrySize)
      ) {
        if (0 !== __privateGet(this, l) && !$m(__privateGet(this, l)))
          throw new TypeError(
            "maxSize must be a positive integer if specified"
          );
        if (!$m(this.maxEntrySize))
          throw new TypeError(
            "maxEntrySize must be a positive integer if specified"
          );
        __privateMethod(this, A, F).call(this);
      }
      if (
        ((this.allowStale = !!$),
        (this.noDeleteOnStaleGet = !!Z),
        (this.updateAgeOnGet = !!G),
        (this.updateAgeOnHas = !!U),
        (this.ttlResolution = $m(o) || 0 === o ? o : 1),
        (this.ttlAutopurge = !!I),
        (this.ttl = r || 0),
        this.ttl)
      ) {
        if (!$m(this.ttl))
          throw new TypeError("ttl must be a positive integer if specified");
        __privateMethod(this, A, T).call(this);
      }
      if (
        0 === __privateGet(this, i) &&
        0 === this.ttl &&
        0 === __privateGet(this, l)
      )
        throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (
        !this.ttlAutopurge &&
        !__privateGet(this, i) &&
        !__privateGet(this, l)
      ) {
        const t = "LRU_CACHE_UNBOUNDED";
        (ae = t),
          Dm.has(ae) ||
            (Dm.add(t),
            Im(
              "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
              "UnboundedCacheWarning",
              t,
              e
            ));
      }
      var ae;
    }
    static unsafeExposeInternals(e) {
      return {
        starts: __privateGet(e, x),
        ttls: __privateGet(e, E),
        sizes: __privateGet(e, k),
        keyMap: __privateGet(e, h),
        keyList: __privateGet(e, v),
        valList: __privateGet(e, g),
        next: __privateGet(e, y),
        prev: __privateGet(e, m),
        get head() {
          return __privateGet(e, _);
        },
        get tail() {
          return __privateGet(e, b);
        },
        free: __privateGet(e, w),
        isBackgroundFetch: (t) => {
          var n;
          return __privateMethod((n = e), A, W).call(n, t);
        },
        backgroundFetch: (t, n, r, a) => {
          var o;
          return __privateMethod((o = e), A, B).call(o, t, n, r, a);
        },
        moveToTail: (t) => {
          var n;
          return __privateMethod((n = e), A, H).call(n, t);
        },
        indexes: (t) => {
          var n;
          return __privateMethod((n = e), A, I).call(n, t);
        },
        rindexes: (t) => {
          var n;
          return __privateMethod((n = e), A, G).call(n, t);
        },
        isStale: (t) => {
          var n;
          return __privateGet((n = e), P).call(n, t);
        },
      };
    }
    get max() {
      return __privateGet(this, i);
    }
    get maxSize() {
      return __privateGet(this, l);
    }
    get calculatedSize() {
      return __privateGet(this, p);
    }
    get size() {
      return __privateGet(this, d);
    }
    get fetchMethod() {
      return __privateGet(this, c);
    }
    get memoMethod() {
      return __privateGet(this, f);
    }
    get dispose() {
      return __privateGet(this, u);
    }
    get disposeAfter() {
      return __privateGet(this, s);
    }
    getRemainingTTL(e) {
      return __privateGet(this, h).has(e) ? 1 / 0 : 0;
    }
    *entries() {
      for (const e of __privateMethod(this, A, I).call(this))
        void 0 === __privateGet(this, g)[e] ||
          void 0 === __privateGet(this, v)[e] ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield [__privateGet(this, v)[e], __privateGet(this, g)[e]]);
    }
    *rentries() {
      for (const e of __privateMethod(this, A, G).call(this))
        void 0 === __privateGet(this, g)[e] ||
          void 0 === __privateGet(this, v)[e] ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield [__privateGet(this, v)[e], __privateGet(this, g)[e]]);
    }
    *keys() {
      for (const e of __privateMethod(this, A, I).call(this)) {
        const t = __privateGet(this, v)[e];
        void 0 === t ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield t);
      }
    }
    *rkeys() {
      for (const e of __privateMethod(this, A, G).call(this)) {
        const t = __privateGet(this, v)[e];
        void 0 === t ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield t);
      }
    }
    *values() {
      for (const e of __privateMethod(this, A, I).call(this))
        void 0 === __privateGet(this, g)[e] ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield __privateGet(this, g)[e]);
    }
    *rvalues() {
      for (const e of __privateMethod(this, A, G).call(this))
        void 0 === __privateGet(this, g)[e] ||
          __privateMethod(this, A, W).call(this, __privateGet(this, g)[e]) ||
          (yield __privateGet(this, g)[e]);
    }
    [((o = Symbol.iterator), (a = Symbol.toStringTag), o)]() {
      return this.entries();
    }
    find(e, t = {}) {
      for (const n of __privateMethod(this, A, I).call(this)) {
        const r = __privateGet(this, g)[n],
          a = __privateMethod(this, A, W).call(this, r)
            ? r.__staleWhileFetching
            : r;
        if (void 0 !== a && e(a, __privateGet(this, v)[n], this))
          return this.get(__privateGet(this, v)[n], t);
      }
    }
    forEach(e, t = this) {
      for (const n of __privateMethod(this, A, I).call(this)) {
        const r = __privateGet(this, g)[n],
          a = __privateMethod(this, A, W).call(this, r)
            ? r.__staleWhileFetching
            : r;
        void 0 !== a && e.call(t, a, __privateGet(this, v)[n], this);
      }
    }
    rforEach(e, t = this) {
      for (const n of __privateMethod(this, A, G).call(this)) {
        const r = __privateGet(this, g)[n],
          a = __privateMethod(this, A, W).call(this, r)
            ? r.__staleWhileFetching
            : r;
        void 0 !== a && e.call(t, a, __privateGet(this, v)[n], this);
      }
    }
    purgeStale() {
      let e = !1;
      for (const t of __privateMethod(this, A, G).call(this, {
        allowStale: !0,
      }))
        __privateGet(this, P).call(this, t) &&
          (__privateMethod(this, A, q).call(
            this,
            __privateGet(this, v)[t],
            "expire"
          ),
          (e = !0));
      return e;
    }
    info(e) {
      const t = __privateGet(this, h).get(e);
      if (void 0 === t) return;
      const n = __privateGet(this, g)[t],
        r = __privateMethod(this, A, W).call(this, n)
          ? n.__staleWhileFetching
          : n;
      if (void 0 === r) return;
      const a = { value: r };
      if (__privateGet(this, E) && __privateGet(this, x)) {
        const e = __privateGet(this, E)[t],
          n = __privateGet(this, x)[t];
        if (e && n) {
          const t = e - (zm.now() - n);
          (a.ttl = t), (a.start = Date.now());
        }
      }
      return __privateGet(this, k) && (a.size = __privateGet(this, k)[t]), a;
    }
    dump() {
      const e = [];
      for (const t of __privateMethod(this, A, I).call(this, {
        allowStale: !0,
      })) {
        const n = __privateGet(this, v)[t],
          r = __privateGet(this, g)[t],
          a = __privateMethod(this, A, W).call(this, r)
            ? r.__staleWhileFetching
            : r;
        if (void 0 === a || void 0 === n) continue;
        const o = { value: a };
        if (__privateGet(this, E) && __privateGet(this, x)) {
          o.ttl = __privateGet(this, E)[t];
          const e = zm.now() - __privateGet(this, x)[t];
          o.start = Math.floor(Date.now() - e);
        }
        __privateGet(this, k) && (o.size = __privateGet(this, k)[t]),
          e.unshift([n, o]);
      }
      return e;
    }
    load(e) {
      this.clear();
      for (const [t, n] of e) {
        if (n.start) {
          const e = Date.now() - n.start;
          n.start = zm.now() - e;
        }
        this.set(t, n.value, n);
      }
    }
    set(e, t, n = {}) {
      var r, a, o, l, c;
      if (void 0 === t) return this.delete(e), this;
      const {
        ttl: f = this.ttl,
        start: p,
        noDisposeOnSet: _ = this.noDisposeOnSet,
        sizeCalculation: k = this.sizeCalculation,
        status: x,
      } = n;
      let { noUpdateTTL: R = this.noUpdateTTL } = n;
      const P = __privateGet(this, L).call(this, e, t, n.size || 0, k);
      if (this.maxEntrySize && P > this.maxEntrySize)
        return (
          x && ((x.set = "miss"), (x.maxEntrySizeExceeded = !0)),
          __privateMethod(this, A, q).call(this, e, "set"),
          this
        );
      let F =
        0 === __privateGet(this, d) ? void 0 : __privateGet(this, h).get(e);
      if (void 0 === F)
        (F =
          0 === __privateGet(this, d)
            ? __privateGet(this, b)
            : 0 !== __privateGet(this, w).length
            ? __privateGet(this, w).pop()
            : __privateGet(this, d) === __privateGet(this, i)
            ? __privateMethod(this, A, $).call(this, !1)
            : __privateGet(this, d)),
          (__privateGet(this, v)[F] = e),
          (__privateGet(this, g)[F] = t),
          __privateGet(this, h).set(e, F),
          (__privateGet(this, y)[__privateGet(this, b)] = F),
          (__privateGet(this, m)[F] = __privateGet(this, b)),
          __privateSet(this, b, F),
          __privateWrapper(this, d)._++,
          __privateGet(this, D).call(this, F, P, x),
          x && (x.set = "add"),
          (R = !1);
      else {
        __privateMethod(this, A, H).call(this, F);
        const n = __privateGet(this, g)[F];
        if (t !== n) {
          if (
            __privateGet(this, O) &&
            __privateMethod(this, A, W).call(this, n)
          ) {
            n.__abortController.abort(new Error("replaced"));
            const { __staleWhileFetching: t } = n;
            void 0 === t ||
              _ ||
              (__privateGet(this, C) &&
                (null == (r = __privateGet(this, u)) ||
                  r.call(this, t, e, "set")),
              __privateGet(this, N) &&
                (null == (a = __privateGet(this, S)) || a.push([t, e, "set"])));
          } else
            _ ||
              (__privateGet(this, C) &&
                (null == (o = __privateGet(this, u)) ||
                  o.call(this, n, e, "set")),
              __privateGet(this, N) &&
                (null == (l = __privateGet(this, S)) || l.push([n, e, "set"])));
          if (
            (__privateGet(this, z).call(this, F),
            __privateGet(this, D).call(this, F, P, x),
            (__privateGet(this, g)[F] = t),
            x)
          ) {
            x.set = "replace";
            const e =
              n && __privateMethod(this, A, W).call(this, n)
                ? n.__staleWhileFetching
                : n;
            void 0 !== e && (x.oldValue = e);
          }
        } else x && (x.set = "update");
      }
      if (
        (0 === f ||
          __privateGet(this, E) ||
          __privateMethod(this, A, T).call(this),
        __privateGet(this, E) &&
          (R || __privateGet(this, M).call(this, F, f, p),
          x && __privateGet(this, j).call(this, x, F)),
        !_ && __privateGet(this, N) && __privateGet(this, S))
      ) {
        const e = __privateGet(this, S);
        let t;
        for (; (t = null == e ? void 0 : e.shift()); )
          null == (c = __privateGet(this, s)) || c.call(this, ...t);
      }
      return this;
    }
    pop() {
      var e;
      try {
        for (; __privateGet(this, d); ) {
          const e = __privateGet(this, g)[__privateGet(this, _)];
          if (
            (__privateMethod(this, A, $).call(this, !0),
            __privateMethod(this, A, W).call(this, e))
          ) {
            if (e.__staleWhileFetching) return e.__staleWhileFetching;
          } else if (void 0 !== e) return e;
        }
      } finally {
        if (__privateGet(this, N) && __privateGet(this, S)) {
          const t = __privateGet(this, S);
          let n;
          for (; (n = null == t ? void 0 : t.shift()); )
            null == (e = __privateGet(this, s)) || e.call(this, ...n);
        }
      }
    }
    has(e, t = {}) {
      const { updateAgeOnHas: n = this.updateAgeOnHas, status: r } = t,
        a = __privateGet(this, h).get(e);
      if (void 0 !== a) {
        const e = __privateGet(this, g)[a];
        if (
          __privateMethod(this, A, W).call(this, e) &&
          void 0 === e.__staleWhileFetching
        )
          return !1;
        if (!__privateGet(this, P).call(this, a))
          return (
            n && __privateGet(this, R).call(this, a),
            r && ((r.has = "hit"), __privateGet(this, j).call(this, r, a)),
            !0
          );
        r && ((r.has = "stale"), __privateGet(this, j).call(this, r, a));
      } else r && (r.has = "miss");
      return !1;
    }
    peek(e, t = {}) {
      const { allowStale: n = this.allowStale } = t,
        r = __privateGet(this, h).get(e);
      if (void 0 === r || (!n && __privateGet(this, P).call(this, r))) return;
      const a = __privateGet(this, g)[r];
      return __privateMethod(this, A, W).call(this, a)
        ? a.__staleWhileFetching
        : a;
    }
    async fetch(e, t = {}) {
      const {
        allowStale: n = this.allowStale,
        updateAgeOnGet: r = this.updateAgeOnGet,
        noDeleteOnStaleGet: a = this.noDeleteOnStaleGet,
        ttl: o = this.ttl,
        noDisposeOnSet: i = this.noDisposeOnSet,
        size: l = 0,
        sizeCalculation: u = this.sizeCalculation,
        noUpdateTTL: s = this.noUpdateTTL,
        noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
        allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection,
        ignoreFetchAbort: d = this.ignoreFetchAbort,
        allowStaleOnFetchAbort: p = this.allowStaleOnFetchAbort,
        context: v,
        forceRefresh: y = !1,
        status: m,
        signal: _,
      } = t;
      if (!__privateGet(this, O))
        return (
          m && (m.fetch = "get"),
          this.get(e, {
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: a,
            status: m,
          })
        );
      const b = {
        allowStale: n,
        updateAgeOnGet: r,
        noDeleteOnStaleGet: a,
        ttl: o,
        noDisposeOnSet: i,
        size: l,
        sizeCalculation: u,
        noUpdateTTL: s,
        noDeleteOnFetchRejection: c,
        allowStaleOnFetchRejection: f,
        allowStaleOnFetchAbort: p,
        ignoreFetchAbort: d,
        status: m,
        signal: _,
      };
      let w = __privateGet(this, h).get(e);
      if (void 0 === w) {
        m && (m.fetch = "miss");
        const t = __privateMethod(this, A, B).call(this, e, w, b, v);
        return (t.__returned = t);
      }
      {
        const t = __privateGet(this, g)[w];
        if (__privateMethod(this, A, W).call(this, t)) {
          const e = n && void 0 !== t.__staleWhileFetching;
          return (
            m && ((m.fetch = "inflight"), e && (m.returnedStale = !0)),
            e ? t.__staleWhileFetching : (t.__returned = t)
          );
        }
        const a = __privateGet(this, P).call(this, w);
        if (!y && !a)
          return (
            m && (m.fetch = "hit"),
            __privateMethod(this, A, H).call(this, w),
            r && __privateGet(this, R).call(this, w),
            m && __privateGet(this, j).call(this, m, w),
            t
          );
        const o = __privateMethod(this, A, B).call(this, e, w, b, v),
          i = void 0 !== o.__staleWhileFetching && n;
        return (
          m &&
            ((m.fetch = a ? "stale" : "refresh"),
            i && a && (m.returnedStale = !0)),
          i ? o.__staleWhileFetching : (o.__returned = o)
        );
      }
    }
    async forceFetch(e, t = {}) {
      const n = await this.fetch(e, t);
      if (void 0 === n) throw new Error("fetch() returned undefined");
      return n;
    }
    memo(e, t = {}) {
      const n = __privateGet(this, f);
      if (!n) throw new Error("no memoMethod provided to constructor");
      const r = t,
        { context: a, forceRefresh: o } = r,
        i = __objRest(r, ["context", "forceRefresh"]),
        l = this.get(e, i);
      if (!o && void 0 !== l) return l;
      const u = n(e, l, { options: i, context: a });
      return this.set(e, u, i), u;
    }
    get(e, t = {}) {
      const {
          allowStale: n = this.allowStale,
          updateAgeOnGet: r = this.updateAgeOnGet,
          noDeleteOnStaleGet: a = this.noDeleteOnStaleGet,
          status: o,
        } = t,
        i = __privateGet(this, h).get(e);
      if (void 0 !== i) {
        const t = __privateGet(this, g)[i],
          l = __privateMethod(this, A, W).call(this, t);
        return (
          o && __privateGet(this, j).call(this, o, i),
          __privateGet(this, P).call(this, i)
            ? (o && (o.get = "stale"),
              l
                ? (o &&
                    n &&
                    void 0 !== t.__staleWhileFetching &&
                    (o.returnedStale = !0),
                  n ? t.__staleWhileFetching : void 0)
                : (a || __privateMethod(this, A, q).call(this, e, "expire"),
                  o && n && (o.returnedStale = !0),
                  n ? t : void 0))
            : (o && (o.get = "hit"),
              l
                ? t.__staleWhileFetching
                : (__privateMethod(this, A, H).call(this, i),
                  r && __privateGet(this, R).call(this, i),
                  t))
        );
      }
      o && (o.get = "miss");
    }
    delete(e) {
      return __privateMethod(this, A, q).call(this, e, "delete");
    }
    clear() {
      return __privateMethod(this, A, Y).call(this, "delete");
    }
  };
  (i = new WeakMap()),
    (l = new WeakMap()),
    (u = new WeakMap()),
    (s = new WeakMap()),
    (c = new WeakMap()),
    (f = new WeakMap()),
    (d = new WeakMap()),
    (p = new WeakMap()),
    (h = new WeakMap()),
    (v = new WeakMap()),
    (g = new WeakMap()),
    (y = new WeakMap()),
    (m = new WeakMap()),
    (_ = new WeakMap()),
    (b = new WeakMap()),
    (w = new WeakMap()),
    (S = new WeakMap()),
    (k = new WeakMap()),
    (x = new WeakMap()),
    (E = new WeakMap()),
    (C = new WeakMap()),
    (O = new WeakMap()),
    (N = new WeakMap()),
    (A = new WeakSet()),
    (T = function () {
      const e = new Wm(__privateGet(this, i)),
        t = new Wm(__privateGet(this, i));
      __privateSet(this, E, e),
        __privateSet(this, x, t),
        __privateSet(this, M, (n, r, a = zm.now()) => {
          if (
            ((t[n] = 0 !== r ? a : 0), (e[n] = r), 0 !== r && this.ttlAutopurge)
          ) {
            const e = setTimeout(() => {
              __privateGet(this, P).call(this, n) &&
                __privateMethod(this, A, q).call(
                  this,
                  __privateGet(this, v)[n],
                  "expire"
                );
            }, r + 1);
            e.unref && e.unref();
          }
        }),
        __privateSet(this, R, (n) => {
          t[n] = 0 !== e[n] ? zm.now() : 0;
        }),
        __privateSet(this, j, (a, o) => {
          if (e[o]) {
            const i = e[o],
              l = t[o];
            if (!i || !l) return;
            (a.ttl = i), (a.start = l), (a.now = n || r());
            const u = a.now - l;
            a.remainingTTL = i - u;
          }
        });
      let n = 0;
      const r = () => {
        const e = zm.now();
        if (this.ttlResolution > 0) {
          n = e;
          const t = setTimeout(() => (n = 0), this.ttlResolution);
          t.unref && t.unref();
        }
        return e;
      };
      (this.getRemainingTTL = (a) => {
        const o = __privateGet(this, h).get(a);
        if (void 0 === o) return 0;
        const i = e[o],
          l = t[o];
        return i && l ? i - ((n || r()) - l) : 1 / 0;
      }),
        __privateSet(this, P, (a) => {
          const o = t[a],
            i = e[a];
          return !!i && !!o && (n || r()) - o > i;
        });
    }),
    (R = new WeakMap()),
    (j = new WeakMap()),
    (M = new WeakMap()),
    (P = new WeakMap()),
    (F = function () {
      const e = new Wm(__privateGet(this, i));
      __privateSet(this, p, 0),
        __privateSet(this, k, e),
        __privateSet(this, z, (t) => {
          __privateSet(this, p, __privateGet(this, p) - e[t]), (e[t] = 0);
        }),
        __privateSet(this, L, (e, t, n, r) => {
          if (__privateMethod(this, A, W).call(this, t)) return 0;
          if (!$m(n)) {
            if (!r)
              throw new TypeError(
                "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set."
              );
            if ("function" != typeof r)
              throw new TypeError("sizeCalculation must be a function");
            if (((n = r(t, e)), !$m(n)))
              throw new TypeError(
                "sizeCalculation return invalid (expect positive integer)"
              );
          }
          return n;
        }),
        __privateSet(this, D, (t, n, r) => {
          if (((e[t] = n), __privateGet(this, l))) {
            const n = __privateGet(this, l) - e[t];
            for (; __privateGet(this, p) > n; )
              __privateMethod(this, A, $).call(this, !0);
          }
          __privateSet(this, p, __privateGet(this, p) + e[t]),
            r &&
              ((r.entrySize = n),
              (r.totalCalculatedSize = __privateGet(this, p)));
        });
    }),
    (z = new WeakMap()),
    (D = new WeakMap()),
    (L = new WeakMap()),
    (I = function* ({ allowStale: e = this.allowStale } = {}) {
      if (__privateGet(this, d))
        for (
          let t = __privateGet(this, b);
          __privateMethod(this, A, U).call(this, t) &&
          ((!e && __privateGet(this, P).call(this, t)) || (yield t),
          t !== __privateGet(this, _));

        )
          t = __privateGet(this, m)[t];
    }),
    (G = function* ({ allowStale: e = this.allowStale } = {}) {
      if (__privateGet(this, d))
        for (
          let t = __privateGet(this, _);
          __privateMethod(this, A, U).call(this, t) &&
          ((!e && __privateGet(this, P).call(this, t)) || (yield t),
          t !== __privateGet(this, b));

        )
          t = __privateGet(this, y)[t];
    }),
    (U = function (e) {
      return (
        void 0 !== e &&
        __privateGet(this, h).get(__privateGet(this, v)[e]) === e
      );
    }),
    ($ = function (e) {
      var t, n;
      const r = __privateGet(this, _),
        a = __privateGet(this, v)[r],
        o = __privateGet(this, g)[r];
      return (
        __privateGet(this, O) && __privateMethod(this, A, W).call(this, o)
          ? o.__abortController.abort(new Error("evicted"))
          : (__privateGet(this, C) || __privateGet(this, N)) &&
            (__privateGet(this, C) &&
              (null == (t = __privateGet(this, u)) ||
                t.call(this, o, a, "evict")),
            __privateGet(this, N) &&
              (null == (n = __privateGet(this, S)) || n.push([o, a, "evict"]))),
        __privateGet(this, z).call(this, r),
        e &&
          ((__privateGet(this, v)[r] = void 0),
          (__privateGet(this, g)[r] = void 0),
          __privateGet(this, w).push(r)),
        1 === __privateGet(this, d)
          ? (__privateSet(this, _, __privateSet(this, b, 0)),
            (__privateGet(this, w).length = 0))
          : __privateSet(this, _, __privateGet(this, y)[r]),
        __privateGet(this, h).delete(a),
        __privateWrapper(this, d)._--,
        r
      );
    }),
    (B = function (e, t, n, r) {
      const a = void 0 === t ? void 0 : __privateGet(this, g)[t];
      if (__privateMethod(this, A, W).call(this, a)) return a;
      const o = new Gm(),
        { signal: i } = n;
      null == i ||
        i.addEventListener("abort", () => o.abort(i.reason), {
          signal: o.signal,
        });
      const l = { signal: o.signal, options: n, context: r },
        u = (r, a = !1) => {
          const { aborted: i } = o.signal,
            u = n.ignoreFetchAbort && void 0 !== r;
          if (
            (n.status &&
              (i && !a
                ? ((n.status.fetchAborted = !0),
                  (n.status.fetchError = o.signal.reason),
                  u && (n.status.fetchAbortIgnored = !0))
                : (n.status.fetchResolved = !0)),
            i && !u && !a)
          )
            return s(o.signal.reason);
          const c = f;
          return (
            __privateGet(this, g)[t] === f &&
              (void 0 === r
                ? c.__staleWhileFetching
                  ? (__privateGet(this, g)[t] = c.__staleWhileFetching)
                  : __privateMethod(this, A, q).call(this, e, "fetch")
                : (n.status && (n.status.fetchUpdated = !0),
                  this.set(e, r, l.options))),
            r
          );
        },
        s = (r) => {
          const { aborted: a } = o.signal,
            i = a && n.allowStaleOnFetchAbort,
            l = i || n.allowStaleOnFetchRejection,
            u = l || n.noDeleteOnFetchRejection,
            s = f;
          if (
            (__privateGet(this, g)[t] === f &&
              (u && void 0 !== s.__staleWhileFetching
                ? i || (__privateGet(this, g)[t] = s.__staleWhileFetching)
                : __privateMethod(this, A, q).call(this, e, "fetch")),
            l)
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
      const f = new Promise((t, r) => {
          var i;
          const s =
            null == (i = __privateGet(this, c))
              ? void 0
              : i.call(this, e, a, l);
          s &&
            s instanceof Promise &&
            s.then((e) => t(void 0 === e ? void 0 : e), r),
            o.signal.addEventListener("abort", () => {
              (n.ignoreFetchAbort && !n.allowStaleOnFetchAbort) ||
                (t(void 0), n.allowStaleOnFetchAbort && (t = (e) => u(e, !0)));
            });
        }).then(
          u,
          (e) => (
            n.status &&
              ((n.status.fetchRejected = !0), (n.status.fetchError = e)),
            s(e)
          )
        ),
        d = Object.assign(f, {
          __abortController: o,
          __staleWhileFetching: a,
          __returned: void 0,
        });
      return (
        void 0 === t
          ? (this.set(
              e,
              d,
              __spreadProps(__spreadValues({}, l.options), { status: void 0 })
            ),
            (t = __privateGet(this, h).get(e)))
          : (__privateGet(this, g)[t] = d),
        d
      );
    }),
    (W = function (e) {
      if (!__privateGet(this, O)) return !1;
      const t = e;
      return (
        !!t &&
        t instanceof Promise &&
        t.hasOwnProperty("__staleWhileFetching") &&
        t.__abortController instanceof Gm
      );
    }),
    (V = function (e, t) {
      (__privateGet(this, m)[t] = e), (__privateGet(this, y)[e] = t);
    }),
    (H = function (e) {
      e !== __privateGet(this, b) &&
        (e === __privateGet(this, _)
          ? __privateSet(this, _, __privateGet(this, y)[e])
          : __privateMethod(this, A, V).call(
              this,
              __privateGet(this, m)[e],
              __privateGet(this, y)[e]
            ),
        __privateMethod(this, A, V).call(this, __privateGet(this, b), e),
        __privateSet(this, b, e));
    }),
    (q = function (e, t) {
      var n, r, a, o;
      let i = !1;
      if (0 !== __privateGet(this, d)) {
        const a = __privateGet(this, h).get(e);
        if (void 0 !== a)
          if (((i = !0), 1 === __privateGet(this, d)))
            __privateMethod(this, A, Y).call(this, t);
          else {
            __privateGet(this, z).call(this, a);
            const o = __privateGet(this, g)[a];
            if (
              (__privateMethod(this, A, W).call(this, o)
                ? o.__abortController.abort(new Error("deleted"))
                : (__privateGet(this, C) || __privateGet(this, N)) &&
                  (__privateGet(this, C) &&
                    (null == (n = __privateGet(this, u)) ||
                      n.call(this, o, e, t)),
                  __privateGet(this, N) &&
                    (null == (r = __privateGet(this, S)) || r.push([o, e, t]))),
              __privateGet(this, h).delete(e),
              (__privateGet(this, v)[a] = void 0),
              (__privateGet(this, g)[a] = void 0),
              a === __privateGet(this, b))
            )
              __privateSet(this, b, __privateGet(this, m)[a]);
            else if (a === __privateGet(this, _))
              __privateSet(this, _, __privateGet(this, y)[a]);
            else {
              const e = __privateGet(this, m)[a];
              __privateGet(this, y)[e] = __privateGet(this, y)[a];
              const t = __privateGet(this, y)[a];
              __privateGet(this, m)[t] = __privateGet(this, m)[a];
            }
            __privateWrapper(this, d)._--, __privateGet(this, w).push(a);
          }
      }
      if (
        __privateGet(this, N) &&
        (null == (a = __privateGet(this, S)) ? void 0 : a.length)
      ) {
        const e = __privateGet(this, S);
        let t;
        for (; (t = null == e ? void 0 : e.shift()); )
          null == (o = __privateGet(this, s)) || o.call(this, ...t);
      }
      return i;
    }),
    (Y = function (e) {
      var t, n, r;
      for (const a of __privateMethod(this, A, G).call(this, {
        allowStale: !0,
      })) {
        const r = __privateGet(this, g)[a];
        if (__privateMethod(this, A, W).call(this, r))
          r.__abortController.abort(new Error("deleted"));
        else {
          const o = __privateGet(this, v)[a];
          __privateGet(this, C) &&
            (null == (t = __privateGet(this, u)) || t.call(this, r, o, e)),
            __privateGet(this, N) &&
              (null == (n = __privateGet(this, S)) || n.push([r, o, e]));
        }
      }
      if (
        (__privateGet(this, h).clear(),
        __privateGet(this, g).fill(void 0),
        __privateGet(this, v).fill(void 0),
        __privateGet(this, E) &&
          __privateGet(this, x) &&
          (__privateGet(this, E).fill(0), __privateGet(this, x).fill(0)),
        __privateGet(this, k) && __privateGet(this, k).fill(0),
        __privateSet(this, _, 0),
        __privateSet(this, b, 0),
        (__privateGet(this, w).length = 0),
        __privateSet(this, p, 0),
        __privateSet(this, d, 0),
        __privateGet(this, N) && __privateGet(this, S))
      ) {
        const e = __privateGet(this, S);
        let t;
        for (; (t = null == e ? void 0 : e.shift()); )
          null == (r = __privateGet(this, s)) || r.call(this, ...t);
      }
    });
  let Ym = qm;
  var Qm = Object.prototype.hasOwnProperty;
  function Km(e, t) {
    var n, r;
    if (e === t) return !0;
    if (e && t && (n = e.constructor) === t.constructor) {
      if (n === Date) return e.getTime() === t.getTime();
      if (n === RegExp) return e.toString() === t.toString();
      if (n === Array) {
        if ((r = e.length) === t.length) for (; r-- && Km(e[r], t[r]); );
        return -1 === r;
      }
      if (!n || "object" == typeof e) {
        for (n in ((r = 0), e)) {
          if (Qm.call(e, n) && ++r && !Qm.call(t, n)) return !1;
          if (!(n in t) || !Km(e[n], t[n])) return !1;
        }
        return Object.keys(t).length === r;
      }
    }
    return e != e && t != t;
  }
  var Jm = "REQUEST_START",
    Xm = "REQUEST_END",
    Zm = { manual: !1, useCache: !0, ssr: !0, autoCancel: !0 },
    e_ = (function () {
      var e,
        t,
        n,
        r = [];
      function a() {
        (e = new Ym({ max: 500 })), (t = Kp), (n = Zm);
      }
      function o(r) {
        void 0 === r && (r = {}),
          void 0 !== r.axios && (t = r.axios),
          void 0 !== r.cache && (e = r.cache),
          void 0 !== r.defaultOptions && (n = Am({}, Zm, r.defaultOptions));
      }
      function i() {
        return (i = Nm(
          Fm.mark(function t() {
            var n;
            return Fm.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = [].concat(r)),
                      (r.length = 0),
                      (t.next = 4),
                      Promise.all(n)
                    );
                  case 4:
                    return t.abrupt("return", e.dump());
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      return (
        a(),
        o(void 0),
        Object.assign(
          function e(r, a) {
            var o = ze.useMemo(function () {
                return n_(r);
              }, r_(r)),
              i = ze.useMemo(function () {
                return Am({}, n, a);
              }, r_(a)),
              l = ze.useRef(),
              c = ze.useReducer(
                u,
                ((h = o),
                (v = i),
                (g = !v.manual && s(h, v)),
                Am(
                  { loading: !v.manual && !g, error: null },
                  g ? { data: g.data, response: g } : null
                ))
              ),
              f = c[0],
              p = c[1];
            var h, v, g;
            "undefined" == typeof window &&
              i.ssr &&
              !i.manual &&
              e.__ssrPromises.push(t(o));
            var y = ze.useCallback(function () {
                l.current && l.current.abort();
              }, []),
              m = ze.useCallback(
                function (e) {
                  return (
                    i.autoCancel && y(),
                    (l.current = new AbortController()),
                    (e.signal = l.current.signal),
                    e
                  );
                },
                [y, i.autoCancel]
              );
            ze.useEffect(
              function () {
                return (
                  i.manual || d(m(o), i, p).catch(function () {}),
                  function () {
                    i.autoCancel && y();
                  }
                );
              },
              [o, i, m, y]
            );
            var _ = ze.useCallback(
              function (e, t) {
                return (
                  (e = n_(e)),
                  d(
                    m(
                      Am(
                        {},
                        o,
                        (n = e) &&
                          n.nativeEvent &&
                          n.nativeEvent instanceof Event
                          ? null
                          : e
                      )
                    ),
                    Am({ useCache: !1 }, t),
                    p
                  )
                );
                var n;
              },
              [o, m]
            );
            return [f, _, y];
          },
          {
            __ssrPromises: r,
            resetConfigure: a,
            configure: o,
            loadCache: function (t) {
              e.load(t);
            },
            serializeCache: function () {
              return i.apply(this, arguments);
            },
            clearCache: function () {
              e.clear();
            },
          }
        )
      );
      function l(t, n) {
        if (e) {
          var r = t_(t),
            a = Am({}, n);
          delete a.config, delete a.request, e.set(r, a);
        }
      }
      function u(e, t) {
        var n;
        switch (t.type) {
          case Jm:
            return Am({}, e, { loading: !0, error: null });
          case Xm:
            return Am(
              {},
              e,
              { loading: !1 },
              t.error ? {} : { data: t.payload.data, error: null },
              (((n = {})[t.error ? "error" : "response"] = t.payload), n)
            );
        }
      }
      function s(t, n, r) {
        if (e && n.useCache) {
          var a = t_(t),
            o = e.get(a);
          return o && r && r({ type: Xm, payload: o }), o;
        }
      }
      function c(e, t) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = Nm(
          Fm.mark(function e(n, r) {
            var a;
            return Fm.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), r({ type: Jm }), (e.next = 4), t(n);
                    case 4:
                      return (
                        (a = e.sent),
                        l(n, a),
                        r({ type: Xm, payload: a }),
                        e.abrupt("return", a)
                      );
                    case 10:
                      throw (
                        ((e.prev = 10),
                        (e.t0 = e.catch(0)),
                        eh(e.t0) || r({ type: Xm, payload: e.t0, error: !0 }),
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
      function d(e, t, n) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Nm(
          Fm.mark(function e(t, n, r) {
            return Fm.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", s(t, n, r) || c(t, r));
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    })();
  function t_(e) {
    var t = Am({}, e);
    return delete t.cancelToken, JSON.stringify(t);
  }
  function n_(e) {
    return "string" == typeof e ? { url: e } : Object.assign({}, e);
  }
  function r_(e) {
    var t = ze.useRef(),
      n = ze.useRef(0);
    return Km(e, t.current) || ((t.current = e), (n.current += 1)), [n.current];
  }
  function a_({ uri: e }) {
    const [{ data: t, loading: n, error: r }] = e_(e),
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
      o = Fe.useMemo(() => {
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
                  let o = null;
                  try {
                    o = new iy(
                      n.instrument.timeSeries[0].dates,
                      n.instrument.timeSeries[0].values.map((e) =>
                        parseFloat(e)
                      )
                    ).yearToDateReturn();
                  } catch (r) {
                    console.log(r);
                  }
                  const i = {};
                  (i.Fond = t.name),
                    (i.shareClass = n.shareClass),
                    (i.nav = a),
                    (i.currency = n.instrument.currency),
                    (i.ytd = o),
                    (i.startDate = n.startDate),
                    (i.dividendPaying = n.dividendPaying),
                    (i.Risk = t.fundInfo.riskLevel),
                    (i.sfdr = n.sfdr),
                    (i.managementFee = n.managementFee),
                    (i.isin = n.instrument.isin),
                    (i.show = !0),
                    e.push(i);
                }
              });
            }),
          e
        );
      }, [t]);
    return n
      ? We.jsx("div", {})
      : r
      ? We.jsxs("div", {
          children: [
            We.jsx("p", { children: "error" }),
            We.jsxs("pre", { children: [" ", JSON.stringify(r, null, 2)] }),
          ],
        })
      : We.jsx("div", {
          className: "overviewtable",
          children: We.jsxs(Jy, {
            trClassName: (e) =>
              a(e.Fond) === e.shareClass ? "showMain" : "noShow",
            data: o,
            sortable: !0,
            hideDownload: !0,
            children: [
              We.jsx(Uy, {
                field: "Fond",
                format: (e) =>
                  0 === e.length
                    ? We.jsx("div", { className: "name", children: "error" })
                    : We.jsxs("div", {
                        className: "name",
                        children: [
                          We.jsx("span", {
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
                          We.jsx("span", {
                            className: "fundButton",
                            children: We.jsx("button", {
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
              We.jsx(Uy, { title: "Andelsklass", field: "shareClass" }),
              We.jsx(Uy, { title: "Kurs", field: "nav", className: "right" }),
              We.jsx(Uy, {
                title: "Valuta",
                field: "currency",
                className: "center",
              }),
              We.jsx(Uy, {
                title: "YTD %",
                field: "ytd",
                className: "right",
                format: (e) =>
                  e < 0
                    ? We.jsx("div", {
                        className: "negative",
                        children: Zv("# ##0.##")(100 * parseFloat(e)),
                      })
                    : We.jsx("div", {
                        className: "positive",
                        children: Zv("# ##0.##")(100 * parseFloat(e)),
                      }),
              }),
              We.jsx(Uy, {
                title: "Startdatum",
                field: "startDate",
                className: "nowrap right",
              }),
              We.jsx(Uy, {
                title: "Utdelande",
                field: "dividendPaying",
                className: "center",
                format: (e) =>
                  e
                    ? We.jsx("div", { children: "Ja" })
                    : We.jsx("div", { children: "Nej" }),
              }),
              We.jsx(Uy, {
                title: We.jsx("a", {
                  href: "https://www.esma.europa.eu/document/guidelines-methodology-//calculation-synthetic-risk-and-reward-indicator-in-key-investor",
                  target: "_blank",
                  children: "Risk",
                }),
                field: "Risk",
                className: "right",
              }),
              We.jsx(Uy, {
                title: "Hållbarhet",
                field: "sfdr",
                className: "right",
              }),
              We.jsx(Uy, {
                title: "Årlig avgift %",
                field: "managementFee",
                className: "right",
                format: (e) => Zv("# ##0.##")(100 * parseFloat(e)),
              }),
              We.jsx(Uy, { title: "ISIN", field: "isin", className: "right" }),
            ],
          }),
        });
  }
  e_.__ssrPromises,
    e_.resetConfigure,
    e_.configure,
    e_.loadCache,
    e_.serializeCache,
    e_.clearCache;
  const o_ = "https://apiv2.captor.se/public/api";
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
      r.length > 0 &&
        (n = Kp.get(
          `${o_}/fundinfo?${r.map((e) => `isins=${e}`).join("&")}`
        ).then(({ data: e }) => ({ data: e[0] })));
    } catch (u) {
      console.log(u);
    }
    var r = document.querySelector("#chartandperiodreturns"),
      a = document.querySelector("#performance-indicators"),
      o = document.querySelector("#facttable"),
      i = document.querySelector("#facttablemobile"),
      l = document.querySelector("#fundoverview");
    r &&
      n &&
      n
        .then(({ data: e }) => {
          const t = Py(e),
            n = [],
            r = new Date().getFullYear();
          for (let o = r; o >= r - 5; o--)
            o >= Sg.getYear(t[0].__dates[0]) && n.push(o);
          var a = ["1M", "3M", "6M", "1Y"];
          t[0].resampleToMonthly().__values.length >= 36 && a.push("3Y"),
            t[0].resampleToMonthly().__values.length >= 60 && a.push("5Y"),
            Ve.createRoot(
              document.getElementById("chartandperiodreturns")
            ).render(
              We.jsxs(ze.Fragment, {
                children: [
                  We.jsxs("div", {
                    className: "col-12 col-md-6",
                    children: [
                      We.jsx("h4", { children: "Värdeutveckling" }),
                      We.jsx(My, { timeseries: t }),
                    ],
                  }),
                  We.jsx("br", {}),
                  We.jsxs("div", {
                    className: "col-12 col-md-6",
                    children: [
                      We.jsx("h4", { children: "Avkastning (%)" }),
                      We.jsx(tm, { timeseries: t, ranges: a }),
                      We.jsx(tm, { timeseries: t, ranges: n }),
                    ],
                  }),
                ],
              })
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
              n = Py(e);
            Ve.createRoot(
              document.getElementById("performance-indicators")
            ).render(
              We.jsxs("div", {
                className: "col-12 col-md-6",
                children: [
                  We.jsxs("h4", { children: ["Nyckeltal - ", t.toString()] }),
                  We.jsx(Cm, {
                    masterTimeSeriesName: n[0].name,
                    timeseries: n,
                    navValue: e.navValue,
                  }),
                ],
              })
            );
          })
          .catch((e) => {
            console.log(e);
          }),
      o &&
        n &&
        n
          .then(({ data: e }) => {
            var t = e.classes.slice();
            t.sort((e, t) => e.shareClass - t.shareClass),
              Ve.createRoot(document.getElementById("facttable")).render(
                We.jsxs("div", {
                  className: "col-12 col-md-6 desktop",
                  children: [
                    We.jsx("h4", {
                      className: "desktop",
                      children: "Fakta om fonden ",
                    }),
                    We.jsx(bm, {
                      data: __spreadProps(__spreadValues({}, e), {
                        allClasses: t,
                      }),
                      className: "evenrowsgray fundclass desktop",
                    }),
                  ],
                })
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
              Ve.createRoot(document.getElementById("facttablemobile")).render(
                We.jsxs("div", {
                  className: "col-12 col-md-6 mobile ",
                  children: [
                    We.jsx("h4", {
                      className: "mobile",
                      children: "Fakta om fonden",
                    }),
                    e.classes.map((n, r) => {
                      var a = t.slice(r, r + 1);
                      return We.jsx(
                        bm,
                        {
                          data: __spreadProps(__spreadValues({}, e), {
                            classes: a,
                          }),
                          className: "evenrowsgray fundclass mobile",
                        },
                        r
                      );
                    }),
                  ],
                })
              );
          })
          .catch((e) => {
            console.log(e);
          }),
      l &&
        Ve.createRoot(document.getElementById("fundoverview")).render(
          We.jsx(ze.Fragment, {
            children: We.jsx(a_, { uri: o_ + "/v2/funds" }),
          })
        );
  };
})(Plotly, XLSX);

var Xx = Object.defineProperty,
    e1 = Object.defineProperties;
var t1 = Object.getOwnPropertyDescriptors;
var ha = Object.getOwnPropertySymbols;
var jc = Object.prototype.hasOwnProperty,
    _c = Object.prototype.propertyIsEnumerable;
var xs = (ce, xe, Ne) => xe in ce ? Xx(ce, xe, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ne
    }) : ce[xe] = Ne,
    U = (ce, xe) => {
        for (var Ne in xe || (xe = {})) jc.call(xe, Ne) && xs(ce, Ne, xe[Ne]);
        if (ha)
            for (var Ne of ha(xe)) _c.call(xe, Ne) && xs(ce, Ne, xe[Ne]);
        return ce
    },
    Q = (ce, xe) => e1(ce, t1(xe));
var St = (ce, xe) => {
    var Ne = {};
    for (var qe in ce) jc.call(ce, qe) && xe.indexOf(qe) < 0 && (Ne[qe] = ce[qe]);
    if (ce != null && ha)
        for (var qe of ha(ce)) xe.indexOf(qe) < 0 && _c.call(ce, qe) && (Ne[qe] = ce[qe]);
    return Ne
};
var Z = (ce, xe, Ne) => (xs(ce, typeof xe != "symbol" ? xe + "" : xe, Ne), Ne);
import {
    p as ga,
    e as a1,
    g as kc,
    a as fa,
    b as X,
    i as s1,
    c as Nc,
    h as ya,
    d as F,
    s as Vt,
    f as n1,
    j as ue,
    k as Ze,
    m as At,
    l as i1,
    n as js,
    o as ve,
    q as o1,
    r as Cc,
    t as Tc,
    u as Sc,
    v as r1,
    w as Ac,
    x as zt,
    y as l1,
    z as c1,
    A as $t,
    B as Ic,
    C as d1,
    D as m1,
    E as _s,
    F as u1,
    G as Rc
} from "./chunk-c23b3c52.js";
import {
    _ as K
} from "./chunk-cf010ec4.js";
import {
    l as p1,
    I as Dc,
    m as Pc,
    t as h1,
    H as g1,
    n as f1,
    au as f,
    ci as k,
    j as e,
    d1 as le,
    dg as Bc,
    cn as $,
    cW as _e,
    cy as ba,
    cw as M,
    cY as oe,
    dJ as y1,
    ct as H,
    cX as L,
    co as J,
    cj as re,
    cz as ke,
    a as O,
    dv as ks,
    dG as ft,
    de as Ve,
    cS as Ke,
    cO as yt,
    aD as ge,
    cm as q,
    cH as Re,
    dd as $e,
    cp as Be,
    cP as Ce,
    d0 as pe,
    cu as Se,
    dl as Ec,
    cR as Xe,
    c_ as z,
    cZ as Oe,
    cU as Ns,
    dK as b1,
    di as je,
    c$ as ne,
    df as ut,
    db as va,
    bz as pt,
    dL as It,
    dM as Lc,
    dp as v1,
    dN as qt,
    d2 as Te,
    d8 as Ht,
    dr as Rt,
    dz as w1,
    cv as et,
    ap as x1,
    d7 as bt,
    cQ as Ae,
    dc as vt,
    dO as Cs,
    cl as Ts,
    dH as j1,
    ag as _1,
    d4 as wa,
    dP as Fc,
    dQ as k1,
    d3 as xa,
    cc as N1,
    am as Oc,
    ck as Mc,
    cV as Ss,
    du as C1,
    dn as T1,
    d9 as S1,
    cC as As,
    dR as A1,
    dS as Wc,
    al as Is,
    dT as Uc,
    dA as I1,
    ds as R1,
    dB as Vc,
    da as He,
    cJ as ja,
    d5 as D1,
    dU as P1,
    dV as B1,
    dW as E1,
    __tla as L1
} from "./chunk-7513ee0e.js";
import {
    ds as S,
    dM as w,
    y as F1,
    el as _a,
    dr as ee,
    dW as ka,
    dq as zc,
    dY as we,
    dN as be,
    dP as Ye,
    ek as O1,
    dp as Y,
    dI as M1,
    er as tt,
    es as $c,
    dZ as qc,
    et as it,
    eu as W1,
    e7 as De,
    dO as Hc,
    ev as wt,
    ew as U1,
    ex as V1,
    ey as Yc,
    em as Gc,
    eo as Jc,
    eg as Yt,
    ez as z1,
    dQ as Ee,
    eA as ot,
    eB as Qc,
    eC as Dt,
    dD as $1,
    dE as q1,
    dF as H1,
    bq as Y1,
    bZ as G1,
    eD as Zc,
    eE as Kc,
    eF as Gt,
    z as J1,
    en as Q1,
    e6 as Z1,
    eG as K1,
    eH as Xc,
    eI as X1,
    __tla as e0
} from "./chunk-dcd0ca87.js";
import {
    c as A,
    t as Ie,
    o as ie
} from "./chunk-61302461.js";
import {
    a as he,
    b as se,
    H as Rs,
    R as t0,
    u as a0,
    g as s0,
    j as Na,
    k as Ds,
    N as n0,
    r as Ps,
    i as i0,
    d as ed,
    l as td,
    m as o0,
    __tla as r0
} from "./chunk-94387f67.js";
import {
    s as ad,
    __tla as l0
} from "./chunk-abcf23a1.js";
import {
    E as Bs
} from "./chunk-d1eabc3b.js";
import {
    g as c0,
    v as G
} from "./chunk-15d0001f.js";
import {
    w as Ca,
    D as d0,
    f as m0,
    W as sd,
    h as u0,
    u as xt,
    Q as p0,
    c as nd,
    U as h0,
    L as jt,
    d as id,
    g as od,
    i as g0,
    e as f0,
    __tla as y0
} from "./chunk-8285f8a4.js";
import {
    l as Jt,
    __tla as b0
} from "./chunk-654ef298.js";
import {
    b as v0,
    d as w0,
    a as x0,
    __tla as j0
} from "./chunk-7cfcd448.js";
import {
    A as rd,
    __tla as _0
} from "./chunk-cf3dc2ca.js";
import {
    b as k0
} from "./chunk-bff9c602.js";
import {
    r as N0
} from "./chunk-f0854543.js";
import {
    installHelp as C0,
    __tla as T0
} from "./pages/help/index.page.039b87d6.js";
import {
    g as S0,
    __tla as A0
} from "./chunk-81a32830.js";
import {
    M as I0,
    l as R0,
    P as D0,
    o as P0,
    a as B0,
    b as E0,
    S as L0,
    c as F0,
    V as O0,
    __tla as M0
} from "./chunk-8ac0d124.js";
let ld, cd, Ta, dd, md, Es, Ls, ud, Fs, Sa, pd, at, Pt, hd, Bt, gd, fd, yd, bd, Os, Ms, Ws, Us, Vs, Qt, zs, $s, Zt, vd, wd, qs, ht, xd, jd, _d, kd, Nd, Aa, Cd, Td, Hs, Ys, Sd, Ad, Id, W0 = Promise.all([(() => {
    try {
        return L1
    } catch (ce) {}
})(), (() => {
    try {
        return e0
    } catch (ce) {}
})(), (() => {
    try {
        return r0
    } catch (ce) {}
})(), (() => {
    try {
        return l0
    } catch (ce) {}
})(), (() => {
    try {
        return y0
    } catch (ce) {}
})(), (() => {
    try {
        return b0
    } catch (ce) {}
})(), (() => {
    try {
        return j0
    } catch (ce) {}
})(), (() => {
    try {
        return _0
    } catch (ce) {}
})(), (() => {
    try {
        return T0
    } catch (ce) {}
})(), (() => {
    try {
        return A0
    } catch (ce) {}
})(), (() => {
    try {
        return M0
    } catch (ce) {}
})()]).then(async () => {
    Ws = function(t, a) {
        var s = -1,
            n = t.length;
        for (a || (a = Array(n)); ++s < n;) a[s] = t[s];
        return a
    }, Ms = function(t, a, s, n) {
        for (var i = t.length, o = s + (n ? 1 : -1); n ? o-- : ++o < i;)
            if (a(t[o], o, t)) return o;
        return -1
    }, Os = function(t) {
        return function(a, s, n) {
            var i = Object(a);
            if (!p1(a)) {
                var o = Dc(s);
                a = Pc(a), s = function(l) {
                    return o(i[l], l, i)
                }
            }
            var r = t(a, s, n);
            return r > -1 ? i[o ? a[r] : r] : void 0
        }
    };
    var ce = Math.max,
        xe = Math.min;
    Qt = function(t, a, s) {
        var n = t == null ? 0 : t.length;
        if (!n) return -1;
        var i = n - 1;
        return s !== void 0 && (i = h1(s), i = s < 0 ? ce(n + i, 0) : xe(i, n - 1)), Ms(t, Dc(a), i, !0)
    };
    var Ne = Os(Qt);
    zs = Ne, Vs = function(t, a) {
        return g1(a, function(s) {
            return t[s]
        })
    }, Hs = function(t) {
        return t == null ? [] : Vs(t, Pc(t))
    };
    var qe = Math.floor,
        Rd = Math.random;
    Us = function(t, a) {
        return t + qe(Rd() * (a - t + 1))
    }, Aa = function(t, a) {
        var s = -1,
            n = t.length,
            i = n - 1;
        for (a = a === void 0 ? n : a; ++s < a;) {
            var o = Us(s, i),
                r = t[o];
            t[o] = t[s], t[s] = r
        }
        return t.length = a, t
    };

    function Dd(t) {
        return Aa(Ws(t))
    }

    function Pd(t) {
        return Aa(Hs(t))
    }
    $s = function(t) {
        var a = f1(t) ? Dd : Pd;
        return a(t)
    };

    function Gs(t) {
        return !t.startsWith("/") && !t.startsWith(".") && !t.startsWith("?") && t !== ""
    }

    function Bd(t, a) {
        let s = !1;
        return () => {
            s || (s = !0, setTimeout(() => {
                s = !1, t()
            }, a))
        }
    }

    function Ed(t) {
        return ga(t, "/").pathname
    }

    function Kt(t) {
        window.location.href = t
    }

    function st(t) {
        return typeof t != "object" || t === null ? !1 : Object.getPrototypeOf(t) === null ? !0 : t.constructor.name === "Object"
    }

    function Ld() {
        var t, a, s, n;
        const i = !!(!((a = (t = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || t === void 0 ? void 0 : t.renderers) === null || a === void 0) && a.size),
            o = !!(!((n = (s = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || s === void 0 ? void 0 : s.rendererInterfaces) === null || n === void 0) && n.size),
            r = !!window.__vite_plugin_react_preamble_installed__;
        return i || o || r
    }

    function Fd(t, a) {
        return (t == null ? void 0 : t.message) === (a == null ? void 0 : a.message)
    }

    function Od(t) {
        return new Promise(a => setTimeout(a, t))
    }

    function Js(t) {
        const a = t / 1e3;
        if (a < 120) {
            const s = Qs(a);
            return `${s} second${Zs(s)}`
        } {
            const s = a / 60,
                n = Qs(s);
            return `${n} minute${Zs(n)}`
        }
    }

    function Qs(t) {
        let a = t.toFixed(1);
        return a.endsWith(".0") && (a = a.slice(0, -2)), a
    }

    function Zs(t) {
        return t === "1" ? "" : "s"
    }

    function Ia(t, a, s) {
        const {
            timeoutErr: n,
            timeoutWarn: i
        } = Md(a);
        let o, r;
        const l = new Promise((h, g) => {
                o = u => {
                    c(), h(u)
                }, r = u => {
                    c(), g(u)
                }
            }),
            c = () => {
                clearTimeout(d), clearTimeout(m)
            },
            d = setTimeout(() => {
                const h = `${a1}[Warning] The ${a}() hook of ${s} is taking more than ${Js(i)}`;
                console.warn(h)
            }, i),
            m = setTimeout(() => {
                const h = kc(`Hook timeout: the ${a}() hook of ${s} didn't finish after ${Js(n)}`);
                r(h)
            }, n);
        return (async () => {
            try {
                const h = await t();
                o(h)
            } catch (h) {
                r(h)
            }
        })(), l
    }

    function Md(t) {
        let a = 4e4,
            s = 4 * 1e3;
        return t === "onBeforeRoute" && (a = 5 * 1e3, s = 1 * 1e3), t === "onBeforePrerender" && (a = 10 * 60 * 1e3, s = 30 * 1e3), {
            timeoutErr: a,
            timeoutWarn: s
        }
    }
    const Ra = fa("navigate.ts", {});
    xd = async function(t, {
        keepScrollPosition: a = !1,
        overwriteLastHistoryEntry: s = !1
    } = {}) {
        X(s1(), "[`navigate(url)`] The `navigate(url)` function is only callable in the browser but you are calling it in Node.js."), X(Ra.navigate, "navigate() is only available when using Client Routing, see https://vite-plugin-ssr.com/navigate"), X(t, "[navigate(url)] Missing argument `url`."), X(typeof t == "string", '[navigate(url)] Argument `url` should be a string (but we got `typeof url === "' + typeof t + '"`.'), X(typeof a == "boolean", '[navigate(url, { keepScrollPosition })] Argument `keepScrollPosition` should be a boolean (but we got `typeof keepScrollPosition === "' + typeof a + '"`.'), X(typeof s == "boolean", '[navigate(url, { overwriteLastHistoryEntry })] Argument `overwriteLastHistoryEntry` should be a boolean (but we got `typeof keepScrollPosition === "' + typeof s + '"`.'), X(t.startsWith("/"), "[navigate(url)] Argument `url` should start with a leading `/`."), await Ra.navigate(t, {
            keepScrollPosition: a,
            overwriteLastHistoryEntry: s
        })
    };

    function Wd(t) {
        Ra.navigate = t
    }

    function Ks(t) {
        return "[" + t.map(a => "'" + a + "'").join(", ") + "]"
    }

    function Da(t, a) {
        const s = Object.getOwnPropertyDescriptor(t, a);
        return !!s && !("value" in s) && !!s.get
    }

    function Xs(t) {
        return typeof t == "object" && t !== null && "then" in t && Nc(t.then)
    }

    function Ud(t, a) {
        if (!st(t)) return !1;
        for (const s of Object.keys(t))
            if (!a.includes(s)) return !1;
        return !0
    }

    function Vd(t) {
        return typeof t == "object" && t !== null && Object.values(t).every(a => typeof a == "string")
    }

    function zd(t, a) {
        const s = a.filter(({
            filesystemRoot: i
        }) => t.startsWith(i)).sort(ya(({
            filesystemRoot: i
        }) => i.length))[0];
        let n;
        if (s) {
            const {
                filesystemRoot: i,
                routeRoot: o
            } = s, r = {
                pageId: t,
                filesystemRoot: i,
                routeRoot: o
            };
            F(o.startsWith("/") && t.startsWith("/") && i.startsWith("/"), r), F(t.startsWith(i), r), i !== "/" ? (F(!i.endsWith("/"), r), n = Vt(t, i.length, 0)) : n = t, F(n.startsWith("/"), r), n = o + (o.endsWith("/") ? "" : "/") + Vt(n, 1, 0)
        } else n = t;
        return F(n.startsWith("/")), n = n.split("/").filter(i => i !== "pages" && i !== "src" && i !== "index").join("/"), F(!n.includes(".page.")), F(!n.endsWith(".")), n.endsWith("/index") && (n = Vt(n, 0, -6)), n === "" && (n = "/"), F(n.startsWith("/")), F(!n.endsWith("/") || n === "/"), n
    }
    async function $d(t, a) {
        await Promise.all(t.filter(i => i.fileType === ".page.route").map(i => {
            var o;
            return (o = i.loadFile) === null || o === void 0 ? void 0 : o.call(i)
        }));
        const {
            onBeforeRouteHook: s,
            filesystemRoots: n
        } = Hd(t);
        return {
            pageRoutes: qd(n, t, a),
            onBeforeRouteHook: s
        }
    }

    function qd(t, a, s) {
        const n = [];
        return s.filter(i => !n1(i)).forEach(i => {
            const o = Yd(i, a);
            if (o) {
                const {
                    filePath: r,
                    fileExports: l
                } = o;
                if (F(l), X("default" in l, `${r} should have a default export.`), ue(l, "default", "string")) {
                    const c = l.default;
                    X(c.startsWith("/"), `A Route String should start with a leading \`/\` but \`${r}\` has \`export default '${c}'\`. Make sure to \`export default '/${c}'\` instead.`), n.push({
                        pageId: i,
                        routeString: c,
                        pageRouteFilePath: r,
                        routeType: "STRING"
                    });
                    return
                }
                if (ue(l, "default", "function")) {
                    const c = l.default;
                    let d = !1;
                    const m = "iKnowThePerformanceRisksOfAsyncRouteFunctions";
                    m in l && (X(ue(l, m, "boolean"), `The export \`${m}\` of ${r} should be a boolean.`), d = l[m]), n.push({
                        pageId: i,
                        routeFunction: c,
                        pageRouteFilePath: r,
                        allowAsync: d,
                        routeType: "FUNCTION"
                    });
                    return
                }
                X(!1, `The default export of ${r} should be a string or a function.`)
            } else {
                const r = zd(i, t);
                F(r.startsWith("/")), F(!r.endsWith("/") || r === "/"), n.push({
                    pageId: i,
                    routeString: r,
                    pageRouteFilePath: null,
                    routeType: "FILESYSTEM"
                })
            }
        }), n
    }

    function Hd(t) {
        let a = null;
        const s = [];
        return t.filter(n => n.fileType === ".page.route" && n.isDefaultPageFile).forEach(({
            filePath: n,
            fileExports: i
        }) => {
            if (F(i), "onBeforeRoute" in i) {
                X(ue(i, "onBeforeRoute", "function"), `\`export { onBeforeRoute }\` of ${n} should be a function.`);
                const {
                    onBeforeRoute: o
                } = i;
                a = {
                    filePath: n,
                    onBeforeRoute: o
                }
            }
            "filesystemRoutingRoot" in i && (X(ue(i, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${n} should be a string.`), X(ue(i, "filesystemRoutingRoot", "string"), `\`export { filesystemRoutingRoot }\` of ${n} is \`'${i.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`), s.push({
                filesystemRoot: Gd(n),
                routeRoot: i.filesystemRoutingRoot
            }))
        }), {
            onBeforeRouteHook: a,
            filesystemRoots: s
        }
    }

    function Yd(t, a) {
        return a.find(s => s.pageId === t && s.fileType === ".page.route")
    }

    function Gd(t) {
        F(t.startsWith("/")), F(!t.endsWith("/"));
        const a = t.split("/"),
            s = Vt(a, 0, -1).join("/") || "/";
        return F(s.startsWith("/")), F(!s.endsWith("/") || s === "/"), s
    }

    function en(t) {
        F(t.urlOriginal), "urlPathname" in t ? F(Da(t, "urlPathname")) : Object.defineProperty(t, "urlPathname", {
            get: an,
            enumerable: !0,
            configurable: !0
        }), "url" in t ? F(Da(t, "url")) : Object.defineProperty(t, "url", {
            get: Jd,
            enumerable: !1,
            configurable: !0
        }), "urlParsed" in t ? F(Da(t, "urlParsed")) : Object.defineProperty(t, "urlParsed", {
            get: Qd,
            enumerable: !0,
            configurable: !0
        })
    }

    function tn(t) {
        let a = t._urlHandler;
        a || (a = i => i);
        const s = a(t.urlOriginal),
            n = t._baseServer;
        return F(n.startsWith("/")), ga(s, n)
    }

    function an() {
        const {
            pathname: t
        } = tn(this), a = t;
        return F(a.startsWith("/")), a
    }

    function Jd() {
        return Ze(!1, "`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)", {
            onlyOnce: !0,
            showStackTrace: !0
        }), an.call(this)
    }

    function Qd() {
        const t = tn(this),
            {
                origin: a,
                pathname: s,
                pathnameOriginal: n,
                search: i,
                searchAll: o,
                searchOriginal: r,
                hash: l,
                hashOriginal: c
            } = t,
            d = {
                origin: a,
                pathname: s,
                pathnameOriginal: n,
                search: i,
                searchAll: o,
                searchOriginal: r,
                hash: l,
                hashOriginal: c,
                get hashString() {
                    return Ze(!1, "`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`", {
                        onlyOnce: !0,
                        showStackTrace: !0
                    }), c
                },
                get searchString() {
                    return Ze(!1, "`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`", {
                        onlyOnce: !0,
                        showStackTrace: !0
                    }), r
                }
            };
        return sn(d, "hashString"), sn(d, "searchString"), d
    }

    function sn(t, a) {
        const s = Object.getOwnPropertyDescriptor(t, a);
        Object.defineProperty(t, a, Q(U({}, s), {
            enumerable: !1
        }))
    }

    function Zd(t) {
        F(typeof t.urlOriginal == "string"), F(typeof t.urlPathname == "string"), F(st(t.urlParsed)), F(t.urlPathname === t.urlParsed.pathname)
    }
    const nn = "@",
        Pa = ":";

    function Ba(t, a) {
        X(t === "*" || t.startsWith("/"), `Invalid route string \`${t}\`${t===""?" (empty string)":""}: route strings should start with a leading slash \`/\` (or be \`*\`).`), F(a.startsWith("/"));
        const s = t.split("/"),
            n = a.split("/"),
            i = {};
        Kd(t), t === "*" && (t = "/*");
        for (let o = 0; o < Math.max(s.length, n.length); o++) {
            const r = s[o],
                l = n[o];
            if (r === "*") return i["*"] = n.slice(Math.max(1, o)).join("/"), {
                routeParams: i
            };
            if (r && Xt(r)) {
                if (Ze(!r.startsWith(Pa), `Outdated route string \`${t}\`, use \`${t.split(Pa).join(nn)}\` instead.`, {
                        showStackTrace: !1,
                        onlyOnce: !0
                    }), !l) return null;
                i[r.slice(1)] = l
            } else if ((r || "") !== (l || "")) return null
        }
        return {
            routeParams: i
        }
    }

    function Kd(t) {
        const a = t.split("*").length - 1;
        X(a <= 1, `Invalid route string \`${t}\`: route strings are not allowed to contain more than one glob character \`*\`.`), X(a === 0 || a === 1 && t.endsWith("*"), `Invalid route string \`${t}\`: make sure your route string ends with the glob character \`*\`.`)
    }

    function Et(t) {
        const a = t.split("/").filter(r => r !== "" && r !== "*");
        let s = 0;
        for (const r of a) {
            if (Xt(r)) break;
            s++
        }
        const n = a.filter(r => !Xt(r)).length,
            i = a.filter(r => Xt(r)).length,
            o = t.endsWith("*");
        return {
            numberOfParameterSegments: i,
            numberOfStaticSegmentsBeginning: s,
            numberOfStaticSegements: n,
            isCatchAll: o
        }
    }

    function Xt(t) {
        return t.startsWith(nn) || t.startsWith(Pa)
    }

    function on(t) {
        const a = Ba(t, t);
        return F(a), Object.keys(a.routeParams).length === 0
    }

    function Xd(t) {
        t.sort(em).sort(At(a => a.routeType === "FUNCTION" && !!a.precedence && a.precedence < 0)).sort(At(a => a.routeType === "STRING" && on(a.routeString) === !1)).sort(At(a => a.routeType === "FUNCTION" && !a.precedence)).sort(At(a => a.routeType === "STRING" && on(a.routeString) === !0)).sort(At(a => a.routeType === "FILESYSTEM")).sort(At(a => a.routeType === "FUNCTION" && !!a.precedence && a.precedence > 0))
    }

    function em(t, a) {
        var s, n; {
            const i = (s = t.precedence) !== null && s !== void 0 ? s : 0,
                o = (n = a.precedence) !== null && n !== void 0 ? n : 0;
            if (i !== o) return i > o ? -1 : 1
        }
        if (!a.routeString || !t.routeString) return 0; {
            const i = ya(o => Et(o).numberOfStaticSegmentsBeginning)(t.routeString, a.routeString);
            if (i !== 0) return i
        } {
            const i = ya(o => Et(o).numberOfStaticSegements)(t.routeString, a.routeString);
            if (i !== 0) return i
        } {
            const i = ya(o => Et(o).numberOfParameterSegments)(t.routeString, a.routeString);
            if (i !== 0) return i
        } {
            if (Et(a.routeString).isCatchAll) return -1;
            if (Et(t.routeString).isCatchAll) return 1
        }
        return 0
    }
    async function tm(t, a, s, n) {
        Zd(s);
        let i = t(s);
        if (X(!Xs(i) || a, `The Route Function ${n} returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async`), i = await i, i === !1) return null;
        if (i === !0 && (i = {}), X(st(i), `The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${ue(i,"constructor")?i.constructor:i}\`.`), "match" in i) {
            const {
                match: l
            } = i;
            if (X(typeof l == "boolean", `The \`match\` value returned by the Route Function ${n} should be a boolean.`), !l) return null
        }
        let o = null;
        "precedence" in i && (o = i.precedence, X(typeof o == "number", `The \`precedence\` value returned by the Route Function ${n} should be a number.`)), rn(i, `The \`routeParams\` object returned by the Route Function ${n} should`);
        const r = i.routeParams || {};
        return X(!("pageContext" in i), "Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async"), F(st(r)), Object.keys(i).forEach(l => {
            X(l === "match" || l === "routeParams" || l === "precedence", `The Route Function ${n} returned an object with an unknown key \`{ ${l} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)
        }), {
            precedence: o,
            routeParams: r
        }
    }

    function rn(t, a) {
        F(a.endsWith(" should")), ue(t, "routeParams") && (F(a.endsWith(" should")), X(st(t.routeParams), `${a} be a plain JavaScript object.`), X(Vd(t.routeParams), `${a} only hold string values.`))
    }

    function ln(t, {
        hook: a,
        errorMessagePrefix: s,
        canBePromise: n
    }) {
        if (!s) {
            F(a);
            const {
                hookName: i,
                hookFilePath: o
            } = a;
            F(o.startsWith("/") || i1(o)), F(!i.endsWith(")")), s = `The \`pageContext\` provided by the ${i}() hook of ${o}`
        }
        if (n && !js(t)) {
            X(Nc(t) || Xs(t), `${s} should be an object, or an async function https://vite-plugin-ssr.com/stream#initial-data-after-stream-end`);
            return
        }
        X(js(t), `${s} should be an object.`), X(!("_objectCreatedByVitePluginSsr" in t), `${s} should not be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`), Ze(!("_pageId" in t), "You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.", {
            showStackTrace: !1,
            onlyOnce: !0
        })
    }
    async function am(t, a) {
        const s = await t.onBeforeRoute(a),
            n = `The \`onBeforeRoute()\` hook exported by ${t.filePath}`;
        if (X(s == null || Ud(s, ["pageContext"]) && ue(s, "pageContext"), `${n} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`), s == null) return null;
        if (X(ue(s, "pageContext", "object"), `${n} returned \`{ pageContext }\` but \`pageContext\` should be a plain JavaScript object.`), ue(s.pageContext, "_pageId") && !ue(s.pageContext, "_pageId", "null")) {
            const o = `${n} returned \`{ pageContext: { _pageId } }\` but \`_pageId\` should be`;
            X(ue(s.pageContext, "_pageId", "string"), `${o} a string or \`null\``), X(a._allPageIds.includes(s.pageContext._pageId), `${o} one of following values: \`[${a._allPageIds.map(r=>`'${r}'`).join(", ")}]\`.`)
        }
        ue(s.pageContext, "routeParams") && rn(s.pageContext, `${n} returned \`{ pageContext: { routeParams } }\` but \`routeParams\` should`);
        const i = {};
        return ue(s.pageContext, "url") && (Ze(!1, `${n} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`, {
            showStackTrace: !1,
            onlyOnce: !0
        }), s.pageContext.urlOriginal = s.pageContext.url, delete s.pageContext.url), ue(s.pageContext, "urlOriginal") && (X(ue(s.pageContext, "urlOriginal", "string"), `${n} returned \`{ pageContext: { urlOriginal } }\` but \`urlOriginal\` should be a string`), ve(i, {
            _urlPristine: a.urlOriginal
        })), ln(s.pageContext, {
            hook: {
                hookFilePath: t.filePath,
                hookName: "onBeforeRoute"
            }
        }), ve(i, s.pageContext), i
    }
    var ea;

    function cn(...t) {
        var a, s;
        ea || (ea = (s = (a = globalThis).__brillout_debug_createDebugger) === null || s === void 0 ? void 0 : s.call(a, "vps:routing")), ea && ea(...t)
    }
    async function dn(t) {
        en(t);
        const {
            pageRoutes: a,
            onBeforeRouteHook: s
        } = await $d(t._pageFilesAll, t._allPageIds);
        cn("Pages routes:", a);
        const n = {};
        if (s) {
            const c = await am(s, t);
            if (c) {
                if (ve(n, c), ue(n, "_pageId", "string") || ue(n, "_pageId", "null")) return ue(n, "routeParams") ? F(ue(n, "routeParams", "object")) : ve(n, {
                    routeParams: {}
                }), ve(n, {
                    _routingProvidedByOnBeforeRouteHook: !0,
                    _routeMatches: "CUSTOM_ROUTE"
                }), {
                    pageContextAddendum: n
                };
                ve(t, n)
            }
        }
        ve(n, {
            _routingProvidedByOnBeforeRouteHook: !1
        });
        const i = t._allPageIds;
        F(i.length >= 0), X(t._pageFilesAll.length > 0, "No *.page.js file found. You must create at least one *.page.js file."), X(i.length > 0, "You must create at least one *.page.js file that isn't _default.page.*");
        const {
            urlPathname: o
        } = t;
        F(o.startsWith("/"));
        const r = [];
        await Promise.all(a.map(async c => {
            const {
                pageId: d,
                routeType: m
            } = c;
            if (c.routeType === "FILESYSTEM") {
                const {
                    routeString: h
                } = c, g = Ba(h, o);
                if (g) {
                    const {
                        routeParams: u
                    } = g;
                    r.push({
                        pageId: d,
                        routeParams: u,
                        routeString: h,
                        routeType: m
                    })
                }
                return
            }
            if (c.routeType === "STRING") {
                const {
                    routeString: h
                } = c, g = Ba(h, o);
                if (g) {
                    const {
                        routeParams: u
                    } = g;
                    F(m === "STRING"), r.push({
                        pageId: d,
                        routeString: h,
                        routeParams: u,
                        routeType: m
                    })
                }
                return
            }
            if (c.routeType === "FUNCTION") {
                const {
                    routeFunction: h,
                    allowAsync: g,
                    pageRouteFilePath: u
                } = c, p = await tm(h, g, t, u);
                if (p) {
                    const {
                        routeParams: b,
                        precedence: v
                    } = p;
                    r.push({
                        pageId: d,
                        precedence: v,
                        routeParams: b,
                        routeType: m
                    })
                }
                return
            }
            F(!1)
        })), Xd(r);
        const l = r[0];
        if (cn(`Route matches for URL \`${o}\` (in precedence order):`, r), ve(n, {
                _routeMatches: r
            }), !l) return ve(n, {
            _pageId: null,
            routeParams: {}
        }), {
            pageContextAddendum: n
        }; {
            const {
                routeParams: c
            } = l;
            F(st(c)), ve(n, {
                _pageId: l.pageId,
                routeParams: l.routeParams
            })
        }
        return {
            pageContextAddendum: n
        }
    }

    function mn() {
        const t = "/";
        return F(sm(t)), t
    }

    function sm(t) {
        return t.startsWith("/")
    }
    const Ea = fa("createPageContext.ts", {});
    async function un(t) {
        Ea.pageFilesData || (Ea.pageFilesData = await o1(!0));
        const {
            pageFilesAll: a,
            allPageIds: s
        } = Ea.pageFilesData, n = mn();
        F(Cc(n));
        const i = {
            _objectCreatedByVitePluginSsr: !0,
            _urlHandler: null,
            _baseServer: n,
            _isProduction: !0,
            _pageFilesAll: a,
            _allPageIds: s
        };
        return ve(i, t), en(i), i
    }
    async function pn(t) {
        const a = await un({
                urlOriginal: t
            }),
            s = await dn(a),
            n = a._pageFilesAll;
        if (!("pageContextAddendum" in s)) return {
            pageId: null,
            pageFilesAll: n
        };
        const i = s.pageContextAddendum._pageId;
        return i ? {
            pageId: i,
            pageFilesAll: n
        } : {
            pageId: null,
            pageFilesAll: n
        }
    }

    function Lt(t) {
        return t.fileType === ".css" ? [] : t.exportNames ? t.exportNames : (F(t.fileExports, t.filePath), Object.keys(t.fileExports))
    }

    function nm({
        pageFilesClientSide: t,
        pageFilesServerSide: a,
        pageId: s
    }) {
        return {
            isHtmlOnly: n(),
            isClientRouting: o()
        };

        function n() {
            return a.some(r => r.pageId === s && r.fileType === ".page") ? (i(), !1) : !(!a.some(r => r.pageId === s && r.fileType === ".page.server") || t.some(r => r.pageId === s && r.fileType === ".page.client" && Lt(r).includes("render")))
        }

        function i() {
            const r = t.some(l => Lt(l).includes("render"));
            X(r, ["No client-side `render()` hook found.", "See https://vite-plugin-ssr.com/render-modes for more information.", ["Loaded client-side page files (none of them `export { render }`):", ...t.map((l, c) => ` (${c+1}): ${l.filePath}`)].join(`
`)].join(" "))
        }

        function o() {
            return t.some(r => Lt(r).includes("clientRouting"))
        }
    }

    function im({
        pageFilesClientSide: t,
        pageFilesServerSide: a,
        isHtmlOnly: s,
        isClientRouting: n
    }) {
        let i = [];
        const o = a.filter(l => !t.includes(l)),
            r = [];
        if (r.push(...t.map(l => ({
                id: l.filePath,
                onlyAssets: !1
            }))), r.push(...o.map(l => ({
                id: l.filePath,
                onlyAssets: !0
            }))), s) i = t.map(l => l.filePath);
        else {
            const l = n ? "@@vite-plugin-ssr/dist/esm/client/router/entry.js" : "@@vite-plugin-ssr/dist/esm/client/entry.js";
            r.push({
                id: l,
                onlyAssets: !1
            }), i = [l]
        }
        return {
            clientEntries: i,
            clientDependencies: r
        }
    }

    function om(t, a) {
        let s = Tc(t, a);
        const n = Sc(t, a),
            {
                isHtmlOnly: i,
                isClientRouting: o
            } = nm({
                pageFilesClientSide: s,
                pageFilesServerSide: n,
                pageId: a
            });
        i && (s = s.filter(c => c.isEnv("CLIENT_ONLY") && !Lt(c).includes("render")), s = lm(s));
        const {
            clientEntries: r,
            clientDependencies: l
        } = im({
            pageFilesClientSide: s,
            pageFilesServerSide: n,
            isHtmlOnly: i,
            isClientRouting: o
        });
        return {
            isHtmlOnly: i,
            isClientRouting: o,
            clientEntries: r,
            clientDependencies: l,
            pageFilesClientSide: s,
            pageFilesServerSide: n
        }
    }
    async function rm(t, a, {
        sharedPageFilesAlreadyLoaded: s
    }) {
        const n = Tc(t, a);
        await Promise.all(n.map(async i => {
            var o;
            F(i.isEnv("CLIENT_ONLY") || i.isEnv("CLIENT_AND_SERVER")), !(s && i.isEnv("CLIENT_AND_SERVER")) && await ((o = i.loadExportNames) === null || o === void 0 ? void 0 : o.call(i))
        }))
    }

    function lm(t) {
        const a = [];
        for (const s of t)
            if (a.push(s), Lt(s).includes("overrideDefaultPages")) break;
        return a
    }
    async function hn(t) {
        const {
            pageId: a,
            pageFilesAll: s
        } = await pn(t);
        if (!a) return !1;
        await rm(s, a, {
            sharedPageFilesAlreadyLoaded: !1
        });
        const {
            isHtmlOnly: n,
            isClientRouting: i
        } = om(s, a);
        return !n && i
    }

    function gn(t) {
        const a = t.getAttribute("href");
        return !!(a === null || a === "" || Gs(a) || cm(t) || dm(a) || !mm(a) || !r1(a))
    }

    function cm(t) {
        const a = t.getAttribute("target"),
            s = t.getAttribute("rel");
        return a === "_blank" || a === "_external" || s === "external" || t.hasAttribute("download")
    }

    function dm(t) {
        if (t.startsWith("#")) return !0;
        const a = s => s.split("#")[0];
        return !!(t.includes("#") && a(t) === a(window.location.href))
    }

    function mm(t) {
        const a = mn();
        F(Cc(a));
        const {
            hasBaseServer: s
        } = ga(t, a);
        return s
    }

    function um(t, a) {
        return {
            prefetchPageContext: !1,
            prefetchStaticAssets: pm(t, a)
        }
    }

    function pm(t, a) {
        let s = hm(a),
            n = (() => {
                if (s !== null) return s === !0 ? {
                    when: "VIEWPORT"
                } : {
                    when: "HOVER"
                };
                if ("prefetchLinks" in t.exports && X(s === null, "`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."), "prefetchStaticAssets" in t.exports) {
                    const {
                        prefetchStaticAssets: i
                    } = t.exports;
                    if (i === !1) return !1;
                    const o = "`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";
                    X(st(i), o);
                    const r = Object.keys(i);
                    X(r.length === 1 && r[0] === "when", o);
                    const {
                        when: l
                    } = i;
                    if (l === "HOVER" || l === "VIEWPORT") return {
                        when: l
                    };
                    X(!1, o)
                }
                return {
                    when: "HOVER"
                }
            })();
        return n && n.when === "VIEWPORT" && !t._isProduction && (Ac(!1, "Viewport prefetching is disabled in development", {
            onlyOnce: !0
        }), n = {
            when: "HOVER"
        }), n
    }

    function hm(t) {
        let a = t.getAttribute("data-prefetch");
        if (Ze(a === null, "The `data-prefetch` attribute is outdated.", {
                showStackTrace: !1,
                onlyOnce: !0
            }), a === null) return null;
        if (F(typeof a == "string"), a === "true") return !0;
        if (a === "false") return !1;
        X(!1, `Wrong data-prefetch value: \`"${a}"\`; it should be \`"true"\` or \`"false"\`.`)
    }
    const fn = new Map;

    function yn(t) {
        const a = vn(t);
        return fn.has(a)
    }

    function bn(t) {
        const a = vn(t);
        fn.set(a, !0)
    }

    function vn(t) {
        return Ed(t)
    }
    const wn = fa("navigationState.ts", {}),
        gm = zt(),
        xn = {
            markNavigationChange() {
                wn.navigationChanged = !0
            },
            get noNavigationChangeYet() {
                return !wn.navigationChanged && this.isFirstUrl(zt())
            },
            isFirstUrl(t) {
                return t === gm
            }
        };
    async function fm(t, a) {
        const s = Sc(t, a).filter(n => n.fileType === ".page.server");
        return await Promise.all(s.map(async n => {
            n.exportNames || (F(n.loadExportNames, a), await n.loadExportNames())
        })), {
            hasOnBeforeRenderServerSideOnlyHook: s.some(({
                exportNames: n
            }) => (F(n), n.includes("onBeforeRender")))
        }
    }

    function ym(t, a, s, n, i = !1) {
        F(!a.endsWith(")"));
        const o = `The ${a}() hook of ${n}`;
        X(t == null || st(t), `${o} should return \`null\`, \`undefined\`, or a plain JavaScript object.`), t != null && (bm(t, s, o), "pageContext" in t && ln(t.pageContext, {
            hook: {
                hookName: a,
                hookFilePath: n
            },
            canBePromise: i
        }))
    }

    function bm(t, a, s) {
        const n = [],
            i = Object.keys(t);
        for (const o of i) a.includes(o) || n.push(o);
        X(n.length === 0, [s, "returned an object with unknown keys", Ks(n) + ".", "Only following keys are allowed:", Ks(a) + "."].join(" "))
    }

    function jn(t) {
        return F([!0, !1].includes(t.isHydration)), F([!0, !1, null].includes(t.isBackwardNavigation)), l1(t)
    }
    const _n = ["urlPathname", "urlParsed"],
        vm = ["Page", "pageExports", "exports"];

    function kn(t) {
        [...vm, ..._n].forEach(a => {
            a in t && (_n.includes(a) ? (F(a.startsWith("url")), Ze(!1, `\`pageContext.${a}\` is already available in the browser when using Client Routing; including \`${a}\` in \`passToClient\` has no effect.`, {
                showStackTrace: !1,
                onlyOnce: !0
            })) : Ze(!1, `\`pageContext.${a}\` is a built-in that cannot be overriden; including \`${a}\` in \`passToClient\` has no effect.`, {
                showStackTrace: !1,
                onlyOnce: !0
            }), delete t[a])
        })
    }
    const wm = "/";

    function xm(t, a, s) {
        const {
            pathnameOriginal: n,
            searchOriginal: i,
            hashOriginal: o
        } = ga(t, wm);
        t.startsWith("/") && F(t === `${n}${i||""}${o||""}`, {
            url: t
        });
        const r = n.endsWith("/");
        let l;
        return s && n !== "/" ? (r ? l = Vt(n, 0, -1) : l = n, F(!l.endsWith("/"), {
            url: t
        }), F(l !== "")) : l = n + (r ? "" : "/") + "index", F(l), l = l + a, `${l}${i||""}${o||""}`
    }
    const jm = ".pageContext.json",
        _m = !1;

    function km(t) {
        return xm(t, jm, _m)
    }
    async function Nm(t) {
        return t._isFirstRenderAttempt && xn.isFirstUrl(t.urlOriginal) ? (F(ue(t, "_isFirstRenderAttempt", "true")), Cm(t)) : (F(ue(t, "_isFirstRenderAttempt", "false")), Sm(t))
    }
    async function Cm(t) {
        const a = c1();
        return kn(a), ve(a, {
            isHydration: !0,
            _comesDirectlyFromServer: !0
        }), ve(a, await $t(t._pageFilesAll, a._pageId)), a
    }
    async function Tm(t) {
        const a = Ic(t._allPageIds);
        if (!a) throw new Error("No error page");
        const s = {
            isHydration: !1,
            _pageId: a,
            _pageContextRetrievedFromServer: null,
            _comesDirectlyFromServer: !1
        };
        return ve(s, await $t(t._pageFilesAll, s._pageId)), s
    }
    async function Sm(t) {
        let a = {};
        ve(a, {
            isHydration: !1
        }), ve(a, await Im(t)), ve(a, await $t(t._pageFilesAll, a._pageId));
        const s = await Am(U(U({}, t), a));
        if (F([!0, !1].includes(s._comesDirectlyFromServer)), s._isError) {
            a = {}, F(s._comesDirectlyFromServer === !0), F(ue(s, "is404", "boolean")), F(ue(s, "pageProps", "object")), F(ue(s.pageProps, "is404", "boolean")), F(!("serverSideError" in s));
            const n = Ic(t._allPageIds);
            return F(n), ve(a, {
                isHydration: !1,
                _pageId: n
            }), ve(a, s), ve(a, await $t(t._pageFilesAll, a._pageId)), a
        } else return ve(a, s), a
    }
    async function Am(t) {
        const a = d1(t, "onBeforeRender");
        if (a) {
            const s = a.hook,
                n = {
                    _comesDirectlyFromServer: !1,
                    _pageContextRetrievedFromServer: null
                },
                i = jn(U(U({}, t), n)),
                o = await Ia(() => s(i), "onBeforeRender", a.filePath);
            ym(o, "onBeforeRender", ["pageContext"], a.filePath);
            const r = o == null ? void 0 : o.pageContext;
            return ve(n, r), n
        } else if ((await fm(t._pageFilesAll, t._pageId)).hasOnBeforeRenderServerSideOnlyHook) {
            const s = await Rm(t),
                n = {};
            return Object.assign(n, s), ve(n, {
                _comesDirectlyFromServer: !0,
                _pageContextRetrievedFromServer: s
            }), n
        }
        return {
            _comesDirectlyFromServer: !1,
            _pageContextRetrievedFromServer: null
        }
    }
    async function Im(t) {
        const a = (await dn(t)).pageContextAddendum;
        if (!a._pageId) throw new Error("No routing match");
        return F(ue(a, "_pageId", "string")), a
    }
    async function Rm(t) {
        var a;
        const s = km((a = t._urlPristine) !== null && a !== void 0 ? a : t.urlOriginal),
            n = await fetch(s); {
            const l = n.headers.get("content-type"),
                c = l && l.includes("application/json");
            if (!c && n.status === 404) {
                Kt(t.urlOriginal);
                const d = new Error("Page doesn't exist");
                throw Object.assign(d, {
                    _abortRendering: !0
                }), d
            }
            X(c, `Wrong HTTP Response Header \`content-type\` value for URL ${s} (it should be \`application/json\` but we got \`${l}\`). Make sure to use \`pageContext.httpResponse.contentType\`, see https://github.com/brillout/vite-plugin-ssr/issues/191`)
        }
        const i = await n.text(),
            o = m1(i);
        if ("serverSideError" in o) throw kc("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");
        F(ue(o, "pageContext"));
        const r = o.pageContext;
        return F(st(r)), F(ue(r, "_pageId", "string")), kn(r), r
    }

    function Nn() {
        let t = window.history.state;
        t || (t = {});
        let a = !1;
        "timestamp" in t || (a = !0, t.timestamp = Tn()), "scrollPosition" in t || (a = !0, t.scrollPosition = Cn()), An(t), a && Fa(t)
    }

    function La() {
        const t = window.history.state || {};
        return An(t), t
    }

    function Cn() {
        return {
            x: window.scrollX,
            y: window.scrollY
        }
    }

    function Tn() {
        return new Date().getTime()
    }

    function Sn() {
        const t = Cn(),
            a = La();
        Fa(Q(U({}, a), {
            scrollPosition: t
        }))
    }

    function Dm(t, a) {
        if (a) Fa(La(), t);
        else {
            const s = Tn();
            Pm({
                timestamp: s,
                scrollPosition: null
            }, t)
        }
    }

    function An(t) {
        if (F(js(t)), "timestamp" in t) {
            const {
                timestamp: a
            } = t;
            F(typeof a == "number")
        }
        if ("scrollPosition" in t) {
            const {
                scrollPosition: a
            } = t;
            a !== null && F(ue(a, "x", "number") && ue(a, "y", "number"))
        }
    }

    function Fa(t, a) {
        window.history.replaceState(t, "", a != null ? a : null)
    }

    function Pm(t, a) {
        window.history.pushState(t, "", a)
    }
    const Me = fa("useClientRouter.ts", {
        previousState: ta()
    });
    Wm(), Nn();

    function In() {
        Me.clientRoutingIsDisabled = !0, Ac(!1, "New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.", {
            onlyOnce: !0
        })
    }
    Td = function() {
        Om(), Bm((i, {
            keepScrollPosition: o
        }) => {
            n({
                scrollTarget: o ? "preserve-scroll" : "scroll-to-top-or-hash",
                url: i,
                isBackwardNavigation: !1,
                checkClientSideRenderable: !0
            })
        }), Em((i, o) => {
            n({
                scrollTarget: i,
                isBackwardNavigation: o
            })
        }), Wd(async (i, {
            keepScrollPosition: o = !1,
            overwriteLastHistoryEntry: r = !1
        } = {}) => {
            await n({
                scrollTarget: o ? "preserve-scroll" : "scroll-to-top-or-hash",
                url: i,
                overwriteLastHistoryEntry: r,
                isBackwardNavigation: !1,
                checkClientSideRenderable: !0
            })
        });
        let t = 0,
            a, s = !1;
        n({
            scrollTarget: "preserve-scroll",
            isBackwardNavigation: null
        });
        return;
        async function n({
            scrollTarget: i,
            url: o = zt(),
            overwriteLastHistoryEntry: r = !1,
            isBackwardNavigation: l,
            checkClientSideRenderable: c
        }) {
            var d;
            if (Me.clientRoutingIsDisabled) {
                Kt(o);
                return
            }
            if (c && !await hn(o)) {
                Kt(o);
                return
            }
            const m = {
                    urlOriginal: o,
                    isBackwardNavigation: l
                },
                h = ++t;
            F(h >= 1), h > 1 && s === !1 && ((d = Me.onPageTransitionStart) === null || d === void 0 || d.call(Me, m), s = !0);
            let g = !1;
            const u = () => h === 1 && g === !1 ? !1 : h !== t,
                p = await un(m);
            if (u()) return;
            const b = h === 1;
            ve(p, {
                _isFirstRenderAttempt: b
            });
            let v;
            try {
                v = await Nm(p)
            } catch (_) {
                if (Bn(_, p)) return;
                console.error(_);
                try {
                    v = await Tm(p)
                } catch (T) {
                    if (Bn(T, p) || (b || setTimeout(() => {
                            window.location.pathname = o
                        }, 0), Fd(_, T))) return;
                    throw T
                }
            }
            if (ve(p, v), _s(p, "onPageTransitionStart"), Me.onPageTransitionStart = p.exports.onPageTransitionStart, p.exports.hydrationCanBeAborted ? g = !0 : Ze(!Ld(), "You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting", {
                    showStackTrace: !1,
                    onlyOnce: !0
                }), !u() && (a && await a, !u())) {
                if (Lm(o, r), xn.markNavigationChange(), F(a === void 0), a = (async () => {
                        const _ = jn(p);
                        u1(p);
                        const T = p.exportsAll.render[0].filePath;
                        F(T);
                        const N = await Ia(() => p.exports.render(_), "render", T);
                        X(N === void 0, `The render() hook of ${T} isn't allowed to return a value`), zm(p)
                    })(), await a, a = void 0, p._isFirstRenderAttempt) {
                    _s(p, "onHydrationEnd");
                    const {
                        onHydrationEnd: _
                    } = p.exports;
                    if (_) {
                        const T = p.exportsAll.onHydrationEnd[0].filePath;
                        F(T), await Ia(() => _(p), "onHydrationEnd", T)
                    }
                } else h === t && (p.exports.onPageTransitionEnd && (_s(p, "onPageTransitionEnd"), p.exports.onPageTransitionEnd(p)), s = !1);
                Rn(i), Oa(), Me.initialRenderIsDone = !0
            }
        }
    };

    function Bm(t) {
        document.addEventListener("click", a);
        return;
        async function a(i) {
            if (!s(i)) return;
            const o = n(i.target);
            if (!o) return;
            const r = o.getAttribute("href");
            if (gn(o)) return;
            F(r), i.preventDefault();
            const l = ![null, "false"].includes(o.getAttribute("keep-scroll-position"));
            t(r, {
                keepScrollPosition: l
            })
        }

        function s(i) {
            return i.button === 0 && !i.ctrlKey && !i.shiftKey && !i.altKey && !i.metaKey
        }

        function n(i) {
            for (; i.tagName !== "A";) {
                const {
                    parentNode: o
                } = i;
                if (!o) return null;
                i = o
            }
            return i
        }
    }

    function Em(t) {
        window.addEventListener("popstate", () => {
            const a = ta(),
                s = a.historyState.scrollPosition || "scroll-to-top-or-hash",
                n = a.urlWithoutHash === Me.previousState.urlWithoutHash,
                i = !a.historyState.timestamp || !Me.previousState.historyState.timestamp ? null : a.historyState.timestamp < Me.previousState.historyState.timestamp;
            Me.previousState = a, n ? window.history.state === null ? (Nn(), Me.previousState = ta()) : Rn(s) : t(s, i)
        })
    }

    function Lm(t, a) {
        zt() !== t && (Oa(), Dm(t, a), Me.previousState = ta())
    }

    function ta() {
        return {
            urlWithoutHash: zt({
                withoutHash: !0
            }),
            historyState: La()
        }
    }

    function Rn(t) {
        if (t === "preserve-scroll") return;
        let a;
        if (t === "scroll-to-top-or-hash") {
            const s = Mm();
            if (s && s !== "top") {
                const n = document.getElementById(s) || document.getElementsByName(s)[0];
                if (n) {
                    n.scrollIntoView();
                    return
                }
            }
            a = {
                x: 0,
                y: 0
            }
        } else F("x" in t && "y" in t), a = t;
        Fm(a)
    }

    function Fm(t) {
        const a = () => window.scrollTo(t.x, t.y),
            s = () => window.scrollX === t.x && window.scrollY === t.y;
        s() || (a(), !s() && requestAnimationFrame(() => {
            a(), !s() && setTimeout(async () => {
                if (a(), s()) return;
                const n = new Date().getTime();
                for (;;)
                    if (await Od(10), a(), s() || new Date().getTime() - n > 100) return
            }, 0)
        }))
    }

    function Om() {
        window.addEventListener("scroll", Bd(Sn, Math.ceil(1e3 / 3)), {
            passive: !0
        }), Pn(Sn)
    }

    function Mm() {
        let {
            hash: t
        } = window.location;
        return t === "" ? null : (F(t.startsWith("#")), t = t.slice(1), t)
    }

    function Wm() {
        Dn(), Pn(Dn), Um(() => Me.initialRenderIsDone && Oa())
    }

    function Oa() {
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual")
    }

    function Dn() {
        "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto")
    }

    function Pn(t) {
        window.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && t()
        })
    }

    function Um(t) {
        window.addEventListener("visibilitychange", () => {
            document.visibilityState === "visible" && t()
        })
    }

    function Bn(t, a) {
        return !!(t != null && t._abortRendering || Vm(t, a))
    }

    function Vm(t, a) {
        if (!Rc(t)) return !1;
        if (In(), a._isFirstRenderAttempt) throw t;
        return Kt(a.urlOriginal), !0
    }
    const En = new Map;
    async function Ma(t) {
        if (X(!Gs(t), `You are trying to prefetch ${t} which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links.`), yn(t)) return;
        bn(t);
        const {
            pageId: a,
            pageFilesAll: s
        } = await pn(t);
        if (a) try {
            await $t(s, a)
        } catch (n) {
            if (Rc(n)) In();
            else throw n
        }
    }

    function zm(t) {
        bn(t.urlOriginal), [...document.getElementsByTagName("A")].forEach(async a => {
            if (En.has(a)) return;
            En.set(a, !0);
            const s = a.getAttribute("href");
            if (gn(a) || (F(s), !await hn(s)) || yn(s)) return;
            const n = um(t, a);
            if (n.prefetchStaticAssets) {
                if (n.prefetchStaticAssets.when === "HOVER") a.addEventListener("mouseover", () => Ma(s)), a.addEventListener("touchstart", () => Ma(s), {
                    passive: !0
                });
                else if (n.prefetchStaticAssets.when === "VIEWPORT") {
                    const i = new IntersectionObserver(o => {
                        o.forEach(r => {
                            r.isIntersecting && (Ma(s), i.disconnect())
                        })
                    });
                    i.observe(a)
                }
            } else return
        })
    }

    function $m({
        onChange: t,
        currency: a,
        className: s,
        onChangeBonus: n,
        showBonusAmount: i,
        selectBonusTab: o
    }) {
        function r(p) {
            t(p.currencyName)
        }
        const [l, c] = f.useState(o ? 1 : 0), d = S.bonusCurrencyName, m = k(), h = w.list.filter(p => p.display), g = F1(h, [p => p.currencyName === d], ["desc"]), u = f.useCallback(p => {
            c(p), n && n(p === 1)
        }, [l]);
        if (n) {
            const p = [{
                label: m("wallet.realmoney"),
                value: () => e.jsx(le, {
                    children: g.map(b => e.jsx(_a, {
                        isReal: !0,
                        item: b,
                        showMaintain: !0,
                        currency: a,
                        onChange: r,
                        hover: !0
                    }, b.currencyName))
                })
            }, {
                label: m("wallet.bonusmoney"),
                value: () => e.jsx(le, {
                    children: g.map(b => e.jsx(_a, {
                        isBonus: !0,
                        item: b,
                        showMaintain: !0,
                        currency: a,
                        onChange: r,
                        hover: !0
                    }, b.currencyName))
                })
            }];
            return e.jsx("div", {
                className: A(s, qm),
                children: e.jsx(Bc, {
                    tabs: p,
                    value: l,
                    onChange: u
                })
            })
        }
        return e.jsx(le, {
            className: s,
            children: g.map(p => e.jsx(_a, {
                showBonusAmount: i,
                item: p,
                showMaintain: !0,
                currency: a,
                onChange: r,
                hover: !0
            }, p.currencyName))
        })
    }
    const qm = "s1rwcv11",
        Ln = () => K(() =>
            import ("./chunk-5c0b2be3.js").then(async t => (await t.__tla, t)), ["assets/chunk-5c0b2be3.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/CatchCoco.6347ceaf.css"]),
        Hm = $(Ln),
        Ym = function() {
            const [t, a] = _e({
                currencyName: "",
                dataSign: ""
            });
            return f.useEffect(() => (ee.socket.on("bonus-crocodile", ba.decodeBind(s => {
                a({
                    currencyName: s.currencyName,
                    dataSign: s.dataSign
                })
            }, "json")), () => {
                ee.socket.off("bonus-crocodile")
            }), []), t.dataSign ? e.jsx(Hm, {
                currencyName: t.currencyName,
                dataSign: t.dataSign,
                onClose: () => a({
                    dataSign: ""
                })
            }) : null
        };
    setTimeout(() => Ln(), 6e3);

    function Gm() {
        return M.post("/home/system-notice/list/v2/", {
            size: 20,
            appNo: 1,
            userId: S.userId
        })
    }

    function Jm(t) {
        return M.get(`/home/system-notice/get-one/${t}/`, {
            cache: !0
        })
    }

    function Qm() {
        return M.post("/home/system-notice/read-all/", {
            appNo: 1,
            userId: S.userId
        })
    }

    function Zm() {
        return M.get("/activity/reward/list/")
    }

    function Km(t) {
        return M.post(`/activity/reward/receive/${t}/`)
    }

    function Xm(t) {
        const a = t || 1;
        return M.post("/comment/reply/unread/list/", {
            page: a,
            pageSize: 20
        })
    }
    let Fn, On, Mn, Wn, Un, Vn, zn, $n, qn, Hn, Yn, Gn, Jn, Qn, Zn, Kn, Xn, ei, ti, ai, si, ni, ii, oi, ri, li, ci, di, mi, ui, pi, hi, gi, fi, yi, bi, vi, wi, xi, ji, _i, ki, Ni, Ci, Ti, Si, Ai, Ii, Ri, Di, Pi, Bi, Ei, Li, Fi, Oi, Mi, Wi, Ui, Vi, zi, $i, qi, Hi, Yi, Gi, Ji, Qi, Zi, Ki, Xi, eo, to, ao, so, no, io, oo, ro, lo, co, mo, uo, po, ho, go, fo, yo, bo, vo, wo, xo, jo, _o, ko, No, Co, To, So, Ao, Io, Ro, Do, Po, Bo, Eo, Lo, B;
    Bt = {
        getSystemNotice: Gm,
        getNoticeByAfficheId: Jm,
        clearSystemNotice: Qm,
        getRewardList: Zm,
        receiveReward: Km,
        getCommentList: Xm
    }, Fn = "/assets/win.1d4c0d41.mp3", On = "/assets/bigwin.2f482a51.mp3", Mn = "/assets/update.83b4f99b.mp3", Wn = "/assets/oldsounds.b8fb8ba1.mp3", Un = "/assets/banner_bronze.f02bfb81.png", Vn = "/assets/banner_silver.b64ba422.png", zn = "/assets/banner_gold.55ef522f.png", $n = "/assets/banner_platinum.db3a977d.png", qn = "/assets/banner_diamond.7d4938f7.png", Hn = "/assets/point_bronze.0d249168.png", Yn = "/assets/point_silver.e07c5b71.png", Gn = "/assets/point_gold.ef89e212.png", Jn = "/assets/point_diamond.3f948ba0.png", Qn = "/assets/point_platinum.1945da83.png", Zn = "/assets/btn_luckspin.c9fdbf75.png", Kn = "/assets/btn_megaspin.13327da9.png", Xn = "/assets/btn_superspin.642fce40.png", ei = "/assets/tbtn_luckspin_1.15a52ea4.png", ti = "/assets/tbtn_luckspin_2.90fbcfc3.png", ai = "/assets/tbtn_megaspin_1.76eb5830.png", si = "/assets/tbtn_megaspin_2.1147ec4e.png", ni = "/assets/tbtn_superspin_1.0bcfa4f1.png", ii = "/assets/tbtn_superspin_2.6176f80f.png", oi = "/assets/spin_bronze.4dd81880.png", ri = "/assets/spin_silver.5f9d2617.png", li = "/assets/spin_gold.3002c02a.png", ci = "/assets/spin_platinum.d3b74f52.png", di = "/assets/spin_diamond.75e21109.png", mi = "/assets/diamond_fuck.ae9f4afb.png", ui = "/assets/lucky_lottery.d21ba9a9.png", pi = "/assets/mega_lottery.62df5a22.png", hi = "/assets/super_lottery.89c9893f.png", gi = "/assets/lottery.1f600a06.png", fi = "/assets/spin_center1.47d8700e.png", yi = "/assets/spin_center2.ed096c8d.png", bi = "/assets/spin_center3.deabf1f7.png", vi = "/assets/spin_center4.bf82f1fd.png", wi = "/assets/spin_center5.0f4ed38a.png", xi = "/assets/banner1.576cb7b8.png", ji = "/assets/banner2.3eec290e.png", _i = "/assets/banner3.2e37b012.png", ki = "/assets/banner4.2a032d56.png", Ni = "/assets/banner5.a1776e9e.png", Ci = "/assets/br_banner1.b991aa34.png", Ti = "/assets/br_banner2.4ee711ee.png", Si = "/assets/br_banner3.27c5d5d8.png", Ai = "/assets/br_banner4.89a06096.png", Ii = "/assets/br_banner5.79cde9fe.png", Ri = "/assets/bg1.a9f0f52e.png", Di = "/assets/bg2.97e66dc1.png", Pi = "/assets/bg3.90616c54.png", Bi = "/assets/bg4.c2a7d8f6.png", Ei = "/assets/gold.57a1d52f.png", Li = "/assets/light.f1abdd91.png", Fi = "/assets/tag1.569f449b.png", Oi = "/assets/tag2.610935df.png", Mi = "/assets/tag3.becb51f6.png", Wi = "/assets/slots.69cd2ade.png", Ui = "/assets/btn1.448f2e6f.png", Vi = "/assets/btn2.5968c08a.png", zi = "/assets/btn3.44c9e755.png", $i = "/assets/btn1_active.8a1e1d66.png", qi = "/assets/btn2_active.769392cc.png", Hi = "/assets/btn3_active.b98ce263.png", Yi = "/assets/light1.fb8f40d9.png", Gi = "/assets/light2.377ecfaa.png", Ji = "/assets/light3.935bc13f.png", Qi = "/assets/light4.7876cd02.png", Zi = "/assets/light5.76fd95a2.png", Ki = "/assets/tag.757e5cbe.png", Xi = "/assets/crown.c6636ed4.png", eo = "/assets/laurel.2ec31bad.png", to = "/assets/spinLight.2993efaa.png", ao = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAAXNSR0IArs4c6QAAAWdJREFUSA2llT1LA0EURbNRtEilhSBGLEWwUAQhlShYBKtUVv4IsUopgtjYC3aWKSz9AzYpUohYWKpoq2AQJQjrGbMZdmdn8l6yA3fnzZt7z04+t1RSjDiO9xU2nQXYEnpFZU1CY2oAWkA7GqDo4WS3yIwr0SwZgGz/o/qXHtOylAnuE55ED32Wvd4EA9IGiEOLyRZ7Uja3T34TdbMcu3qmquZCoQbmDfRh4/7ikfZciGH7mNbQu5+R697RmbHhdMHGBDpCX2iU8YQ5+57SMKfqjELxeFv05s0hzS9lF62aRYFRI7tu89BXUNtzZ03rAlPFwgYFzTI60RASzzez/C+E6VgB/cSzNTiMOGM+GwL9Za8uQlwDoesA9NT1qtbAFpH7vXyjl/8AVERMhJsoPQ60Wa8P0hR6SYj3zJHXmGoOfQREUdTD20r8l6zjVHa8klPV0A+aHY/gpMzLROdOu9gS4HQxQoH0H0YJlvmIzoKSAAAAAElFTkSuQmCC", so = "/assets/bright.eba6cb75.png", no = {
        list: [{
            value: 0,
            time: 0
        }, {
            value: 1,
            time: .5
        }, {
            value: 0,
            time: 1
        }],
        isStepped: !1
    }, io = {
        start: .1,
        end: .3,
        minimumScaleMultiplier: 2
    }, oo = {
        start: "#ffffff",
        end: "#ffffff"
    }, ro = {
        start: 15,
        end: 10,
        minimumSpeedMultiplier: 3
    }, lo = {
        x: 0,
        y: 0
    }, co = 0, mo = {
        min: 0,
        max: 360
    }, uo = !1, po = {
        min: 0,
        max: 0
    }, ho = {
        min: 2,
        max: 5
    }, go = "normal", fo = .1, yo = -1, bo = 100, vo = {
        x: 0,
        y: 0
    }, wo = !1, xo = "circle", jo = {
        x: 50,
        y: 50,
        r: 2
    }, _o = {
        alpha: no,
        scale: io,
        color: oo,
        speed: ro,
        acceleration: lo,
        maxSpeed: co,
        startRotation: mo,
        noRotation: uo,
        rotationSpeed: po,
        lifetime: ho,
        blendMode: go,
        frequency: fo,
        emitterLifetime: yo,
        maxParticles: bo,
        pos: vo,
        addAtBack: wo,
        spawnType: xo,
        spawnCircle: jo
    }, ko = "/assets/japan_background.2ec23eb2.png", No = "/assets/japan_banner_bronze.eb299c23.png", Co = "/assets/japan_banner_silver.a189579a.png", To = "/assets/japan_banner_gold.d8e32188.png", So = "/assets/japan_banner_platinum.4ab0f25c.png", Ao = "/assets/japan_banner_diamond.c142751c.png", Io = "/assets/japan_spin.91cdf35b.png", Ro = "/assets/japan_spin_center.e17caa98.png", Do = "/assets/japan_point.2414c1ef.png", Po = "/assets/japan_spin_light.bc2612b5.png", Bo = "/assets/japan_tbtn_luckspin_1.8cf7c422.png", Eo = "/assets/japan_tbtn_megaspin_1.9a262ef0.png", Lo = "/assets/japan_tbtn_superspin_1.0486ea34.png", B = {
        banner_bronze: Un,
        banner_silver: Vn,
        banner_gold: zn,
        banner_platinum: $n,
        banner_diamond: qn,
        point_bronze: Hn,
        point_silver: Yn,
        point_gold: Gn,
        point_diamond: Jn,
        point_platinum: Qn,
        btn_luckspin: Zn,
        btn_megaspin: Kn,
        btn_superspin: Xn,
        tbtn_luckspin_1: ei,
        tbtn_luckspin_2: ti,
        tbtn_megaspin_1: ai,
        tbtn_megaspin_2: si,
        tbtn_superspin_1: ni,
        tbtn_superspin_2: ii,
        spin_bronze: oi,
        spin_silver: ri,
        spin_gold: li,
        spin_platinum: ci,
        spin_diamond: di,
        tag: Ki,
        crown: Xi,
        laurel: eo,
        bright: so,
        bright_emitter: _o,
        bg_lottery: gi,
        spin_center1: fi,
        spin_center2: yi,
        spin_center3: bi,
        spin_center4: vi,
        spin_center5: wi,
        spin_diamond_fuck: mi,
        star: ao,
        spinLight3: to,
        fiat_banner1: xi,
        fiat_banner2: ji,
        fiat_banner3: _i,
        fiat_banner4: ki,
        fiat_banner5: Ni,
        fiat_banner1_br: Ci,
        fiat_banner2_br: Ti,
        fiat_banner3_br: Si,
        fiat_banner4_br: Ai,
        fiat_banner5_br: Ii,
        fiat_gold: Ei,
        fiat_light: Li,
        fiat_tag1: Fi,
        fiat_tag2: Oi,
        fiat_tag3: Mi,
        fiat_bg1: Ri,
        fiat_bg2: Di,
        fiat_bg3: Pi,
        fiat_bg4: Bi,
        fiat_btn1: Ui,
        fiat_btn2: Vi,
        fiat_btn3: zi,
        fiat_btn1_active: $i,
        fiat_btn2_active: qi,
        fiat_btn3_active: Hi,
        fiat_slot: Wi,
        fiat_slotlight1: Yi,
        fiat_slotlight2: Gi,
        fiat_slotlight3: Ji,
        fiat_slotlight4: Qi,
        fiat_slotlight5: Zi,
        japanBackground: ko,
        japanBannerBronze: No,
        japanBannerSliver: Co,
        japanBannerGold: To,
        japanBannerPlatinum: So,
        japanBannerDiamond: Ao,
        japanSpin: Io,
        japanSpinCenter: Ro,
        japanPoint: Do,
        japanSpanLight: Po,
        japanTbtnLuckSpin1: Bo,
        japanTbtnMegaSpin1: Eo,
        japanTbtnSuperSpin1: Lo
    };

    function eu(t) {
        switch (t) {
            case 2:
                return B.fiat_banner2;
            case 3:
                return B.fiat_banner3;
            case 4:
                return B.fiat_banner4;
            case 5:
                return B.fiat_banner5;
            default:
                return B.fiat_banner1
        }
    }

    function tu(t) {
        switch (t) {
            case 2:
                return B.fiat_banner2_br;
            case 3:
                return B.fiat_banner3_br;
            case 4:
                return B.fiat_banner4_br;
            case 5:
                return B.fiat_banner5_br;
            default:
                return B.fiat_banner1_br
        }
    }

    function au(t) {
        switch (t) {
            case 0:
                return ui;
            case 1:
                return hi;
            case 2:
                return pi
        }
    }

    function Fo(t) {
        switch (t) {
            case 2:
                return B.spin_silver;
            case 3:
                return B.spin_gold;
            case 4:
                return B.spin_platinum;
            case 5:
                return B.spin_diamond;
            default:
                return B.spin_bronze
        }
    }

    function su(t) {
        switch (t) {
            default: return B.japanSpin
        }
    }

    function nu(t) {
        switch (t) {
            case 2:
                return B.spin_center2;
            case 3:
                return B.spin_center3;
            case 4:
                return B.spin_center4;
            case 5:
                return B.spin_center5;
            default:
                return B.spin_center1
        }
    }

    function iu(t) {
        switch (t) {
            default: return B.japanSpinCenter
        }
    }

    function ou(t) {
        switch (t) {
            case 2:
                return B.point_silver;
            case 3:
                return B.point_gold;
            case 4:
                return B.point_platinum;
            case 5:
                return B.point_diamond;
            default:
                return B.point_bronze
        }
    }

    function ru(t) {
        switch (t) {
            default: return B.japanPoint
        }
    }

    function lu(t) {
        switch (t) {
            case 1:
                return B.btn_superspin;
            case 2:
                return B.btn_megaspin;
            default:
                return B.btn_luckspin
        }
    }

    function cu(t) {
        switch (t) {
            case 2:
                return B.banner_silver;
            case 3:
                return B.banner_gold;
            case 4:
                return B.banner_platinum;
            case 5:
                return B.banner_diamond;
            default:
                return B.banner_bronze
        }
    }

    function du(t) {
        switch (t) {
            case 2:
                return B.japanBannerSliver;
            case 3:
                return B.japanBannerGold;
            case 4:
                return B.japanBannerPlatinum;
            case 5:
                return B.japanBannerDiamond;
            default:
                return B.japanBannerBronze
        }
    }

    function mu(t) {
        switch (t) {
            case 1:
                return "#ffac04";
            case 2:
                return "#fff8a1";
            default:
                return "#ff5ac4"
        }
    }

    function Wa(t) {
        switch (t) {
            case 2:
                return "#0e7a3d";
            case 3:
                return "#eb9106";
            case 4:
                return "#c16959";
            case 5:
                return "#690ee0";
            default:
                return "#653120"
        }
    }

    function Ua(t) {
        switch (t) {
            case 2:
                return "#11AD3F";
            case 3:
                return "#FF7121";
            case 4:
                return "#C16959";
            case 5:
                return "#6A0FE0";
            default:
                return "#D8733A"
        }
    }

    function uu(t) {
        switch (t) {
            case 2:
                return ["#0ba543", "#046c2a"];
            case 3:
                return ["#e0c211", "#d57210"];
            case 4:
                return ["#f6b39f", "#be6655"];
            case 5:
                return ["#b471ff", "#940dff"];
            default:
                return ["#ff9e6a", "#ac4c19"]
        }
    }

    function Oo(t) {
        const a = k();
        switch (t) {
            case 2:
                return a("page.spin.silver");
            case 3:
                return a("page.spin.gold");
            case 4:
                return a("page.spin.platinum");
            case 5:
                return a("page.spin.diamond");
            default:
                return a("page.spin.bronze")
        }
    }

    function Mo(t) {
        switch (t) {
            case 1:
                return "SUPER SPIN";
            case 2:
                return "MEGA SPIN";
            default:
                return "LUCKY SPIN"
        }
    }

    function Wo(t, a) {
        const s = Number(t);
        return s >= 1e10 ? new oe(t).div(1e9).toFixed(0, oe.ROUND_DOWN) + "B" : s >= 1e7 ? new oe(t).div(1e6).toFixed(0, oe.ROUND_DOWN) + "M" : s >= (a ? 1e4 : 1e5) ? new oe(t).div(1e3).toFixed(0, oe.ROUND_DOWN) + "K" : w.numberWithCommas(s)
    }
    const Uo = {
        win: Fn,
        bigwin: On,
        update: Mn
    };
    class pu extends y1 {
        constructor() {
            super();
            Z(this, "nextTime", 0);
            Z(this, "freeTimes", 0);
            Z(this, "spinOptions", []);
            Z(this, "spinLevel", 5);
            Z(this, "tabs", []);
            Z(this, "fiat", S.bonusCurrencyName !== "BCD");
            Z(this, "totalBonus", 0);
            Z(this, "spinLoading", !1);
            Z(this, "animateResolve", () => {});
            Z(this, "version", 0);
            Z(this, "updateTime", 0);
            Z(this, "levelUpdated", !1);
            Z(this, "updateFinished", !1);
            Z(this, "fetching", !1);
            Z(this, "sounds", {});
            Z(this, "soundSprites");
            ka(this, {
                nextTime: we,
                freeTimes: we,
                spinLevel: we,
                tabs: we,
                spinLoading: we,
                levelUpdated: we,
                updateFinished: we,
                fiat: we
            }), this.initReq = this.initReq.bind(this), this.getTab = this.getTab.bind(this), this.handleSpin = this.handleSpin.bind(this), this.getUserInfo = this.getUserInfo.bind(this), this.setSpinAnimateEnd = this.setSpinAnimateEnd.bind(this), this.spinAnimateEnd = this.spinAnimateEnd.bind(this), this.levelUpdateFinished = this.levelUpdateFinished.bind(this), this.reset = this.reset.bind(this), this.playSound = this.playSound.bind(this), this.setNextTime = this.setNextTime.bind(this), this.setNextTime(), Object.keys(Uo).map(s => (this.sounds[s] = new zc({
                src: Uo[s]
            }), s)), this.soundSprites = new zc({
                src: Wn,
                sprite: {
                    SpinOpen: [0, 1979],
                    SpinAndBonus: [1979, 8268],
                    Click: [10247, 306],
                    Collect: [10553, 601]
                }
            })
        }
        async initReq() {
            const s = new Date().getTime(),
                n = await M.get("/activity/lucky/spin/settings/");
            this.updateTime = s, this.tabs = this.getTabs(0), this.spinOptions = n.sections, this.version = n.version, this.fiat = n.fiat, S.login ? await this.getUserInfo() : S.waitLogin().then(this.getUserInfo);
            try {
                await H.loadImage(Fo(this.spinLevel))
            } catch (i) {
                console.log(i)
            }
        }
        async spinAnimateEnd() {
            return new Promise((s, n) => {
                this.animateResolve = s
            })
        }
        setSpinAnimateEnd() {
            this.animateResolve()
        }
        async getUserInfo() {
            try {
                if (this.fetching) return;
                this.fetching = !0, this.levelUpdated = !1;
                const s = await M.get("/activity/lucky/spin/info/"),
                    n = localStorage.getItem("spinUpdated"),
                    i = Number(n) !== s.level && s.levelUpdated;
                let o = i ? s.level - 1 : s.level;
                this.spinLoading = i, this.spinLevel = o, this.tabs = this.getTabs(o), this.freeTimes = s.leftTimes, i && setTimeout(() => {
                    localStorage.setItem("spinUpdated", `${s.level}`), this.levelUpdated = i
                }, 1500), this.fetching = !1
            } catch (s) {
                L(s)
            }
        }
        async levelUpdateFinished() {
            this.levelUpdated = !1, this.spinLevel = this.spinLevel + 1, this.tabs = this.getTabs(this.spinLevel), this.spinLoading = !1, this.updateFinished = !0
        }
        reset() {
            this.spinLoading = !1, this.levelUpdated = !1
        }
        getTabs(s) {
            return s <= 2 ? [s, 3, 5] : s <= 4 ? [2, s, 5] : [2, 4, s]
        }
        getTab(s) {
            return this.tabs.findIndex(n => n === s)
        }
        playSound(s) {
            if (ee.settings.soundEffectEnable) try {
                this.sounds[s].play()
            } catch (n) {}
        }
        async setNextTime() {
            const s = H.serverTime(),
                n = s.getUTCFullYear(),
                i = s.getUTCMonth(),
                o = s.getUTCDate() + 1;
            this.nextTime = Date.UTC(n, i, o, 0, 0, 0)
        }
        async handleSpin() {
            return M.post("/activity/lucky/spin/lottery/", {
                level: this.spinLevel,
                version: this.version
            })
        }
    }
    const W = new pu;
    class hu {
        constructor() {
            Z(this, "systemUnreadCount", 0);
            Z(this, "commentUnreadCount", 0);
            Z(this, "systemData", {
                noticeList: [],
                unreadCount: 0
            });
            Z(this, "loadMoreLoading", !1);
            Z(this, "commentData", {
                page: 1,
                pageSize: 20,
                total: 0,
                totalPage: 1,
                list: [],
                extra: 0
            });
            Z(this, "currentType", 0);
            Z(this, "rewardIsFold", !1);
            ka(this, {
                systemUnreadCount: we,
                commentUnreadCount: we,
                systemData: we,
                currentType: we,
                rewardIsFold: we,
                loadMoreLoading: we,
                commentData: we
            }), S.on("openGlableNotice", a => this.openNotice(a)), S.waitLogin().then(() => {
                setTimeout(() => {
                    this.loadData()
                }, 1e3)
            })
        }
        loadData() {
            Promise.all([Bt.getSystemNotice(), Bt.getCommentList()]).then(([a, s]) => {
                this.systemData = a, this.systemUnreadCount = a.unreadCount, this.commentData = s, this.commentUnreadCount = Number(s.extra)
            }).catch(L)
        }
        clearSystemNotice(a = !1) {
            (this.currentType === 0 || a) && this.systemUnreadCount > 0 && Bt.clearSystemNotice().then(() => {
                this.systemData.unreadCount = 0, this.systemUnreadCount = 0, this.systemData.noticeList = this.systemData.noticeList.map(s => (s.isRead = 1, s))
            }).catch(L)
        }
        openNotice(a = !0) {
            a && (this.currentType = 0), this.loadData(), ee.chatOrNtice = "notice"
        }
    }
    Pt = new hu, Sa = (t => (t[t.COMMON = 0] = "COMMON", t[t.CLAIMED = 1] = "CLAIMED", t[t.ERROR = 2] = "ERROR", t))(Sa || {}), pd = function(t) {
        return t === "LuckySpin" ? 1 : t === "Lottery" ? 0 : t === "DepositBonus" ? 2 : 3
    };
    const rt = J.memo(function({
        name: t,
        duration: a = 5e3,
        title: s,
        content: n,
        url: i
    }) {
        const o = k(),
            r = re(),
            l = gu().find(d => d.name === t),
            c = l || {
                name: "other",
                imgUrl: he.general,
                label: "",
                url: "/bonus"
            };
        return e.jsx("div", {
            className: fu,
            children: e.jsxs("div", {
                className: "inner",
                onClick: () => {
                    r(i || c.url)
                },
                children: [e.jsx("img", {
                    alt: "bonus",
                    src: c.imgUrl,
                    className: A("bonus-rewars-img", t)
                }), e.jsxs("div", {
                    className: "rewards-notify-title",
                    children: [e.jsx("p", {
                        className: "l",
                        children: s || c.label
                    }), n && e.jsxs("p", {
                        className: "c",
                        children: [e.jsx("span", {
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }), t === "task" && e.jsx("span", {
                            className: "g",
                            children: `${o("page.task.claim.rewards")}! ->`
                        })]
                    })]
                }), e.jsx("div", {
                    className: "width-down",
                    children: e.jsx("div", {
                        className: a === 0 ? "full-wdi" : "wdi"
                    })
                })]
            })
        })
    });

    function gu() {
        const t = k();
        return [{
            name: "quests",
            imgUrl: he.quests,
            label: t("page.bonus.quest.complete"),
            url: "#/quests"
        }, {
            name: "spin",
            imgUrl: he.spin,
            label: t("page.bonus.spin.ready"),
            url: "#/spin"
        }, {
            name: "spin_fiat",
            imgUrl: he.spin_fiat,
            label: t("page.bonus.spin.ready"),
            url: "#/spin"
        }, {
            name: "roll",
            imgUrl: he.roll,
            label: t("page.bonus.roll.ready"),
            url: "#/bonus/roll"
        }, {
            name: "rakeback",
            imgUrl: he.rakeback,
            label: t("page.bonus.rakeback.ready"),
            url: "#/rakeback"
        }, {
            name: "recharge",
            imgUrl: he.recharge,
            label: t("page.bonus.recharge.ready"),
            url: "#/recharge"
        }, {
            name: "weeklybonus",
            imgUrl: he.weeklybonus,
            label: t("vip.benefits.weeklybonus"),
            url: "/bonus"
        }, {
            name: "monthlybonus",
            imgUrl: he.monthlybonus,
            label: t("vip.benefits.monthlybonus"),
            url: "/bonus"
        }, {
            name: "contest",
            imgUrl: he.contest,
            label: "",
            url: "/bonus"
        }, {
            name: "vipbonus",
            imgUrl: he.vipbonus,
            label: "",
            url: "/bonus"
        }]
    }
    const fu = "brxx96e",
        yu = $(() => K(() =>
            import ("./chunk-929c9083.js").then(async t => (await t.__tla, t)), ["assets/chunk-929c9083.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-c23b3c52.js", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-15d0001f.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js", "assets/BonusLink.1719c835.css"])),
        bu = () => K(() =>
            import ("./chunk-f3dd9298.js").then(async t => (await t.__tla, t)), ["assets/chunk-f3dd9298.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-c23b3c52.js", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-15d0001f.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js", "assets/BcdReward.97a63748.css"]),
        vu = $(async () => ({
            default: (await bu()).default
        }));

    function wu() {
        S.addSocketEvent("regist-invited-present-success", async t => {
            const a = t.presentAmounts;
            if (a) {
                const s = Object.keys(a).map(i => ({
                        name: i,
                        amount: a[i],
                        locked: !1
                    })),
                    n = {
                        currencyName: s[0].name,
                        stringAmount: s[0].amount,
                        locked: s[0].locked,
                        rewardType: "Money",
                        depositBonusPercentage: 0
                    };
                ee.modalQueue.add(() => ke.push(e.jsx(yu, {
                    code: "",
                    linkInfo: n,
                    isWelcome: !0,
                    defaultStatus: Sa.CLAIMED
                })), {
                    key: "SHIT_LINK"
                })
            }
        }), S.addSocketEvent("recharge-bonus-notice", t => {
            be.init(!0), L(O.unsafeTranslate("page.bcd.got_bcd", t.amount, w.getAlias(t.currencyName), w.getAlias(t.currencyName)), {
                duration: 0,
                onClick: () => {
                    O.unsafeNavigate("#/bonus/dashboard"), setTimeout(() => {
                        ke.push(e.jsx(vu, {
                            amount: t.amount
                        }))
                    }, 2e3)
                }
            }), be.emit("bcdPop", t.amount, t.currencyName)
        }), S.addSocketEvent("user-reward", t => {
            switch (t.rewardType) {
                case "contest":
                    {
                        L(e.jsx(rt, {
                            name: "contest",
                            title: t.title,
                            content: t.content
                        }), {
                            duration: 5e3,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
                case "weekly_bonus":
                    {
                        L(e.jsx(rt, {
                            name: "weeklybonus",
                            duration: 0
                        }), {
                            duration: 0,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
                case "month_bonus":
                    {
                        L(e.jsx(rt, {
                            name: "monthlybonus",
                            duration: 0
                        }), {
                            duration: 0,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
                case "level-up":
                    {
                        L(e.jsx(rt, {
                            name: "vipbonus",
                            title: t.title,
                            content: t.content
                        }), {
                            duration: 5e3,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
                case "vip_give_bonus":
                    {
                        L(e.jsx(rt, {
                            name: "vipbonus",
                            title: t.title,
                            content: t.content
                        }), {
                            duration: 5e3,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
                case "rewardTaskHub":
                    break;
                case "vip_recharge_bonus":
                    break;
                case "wager-degenpass":
                    break;
                case "bigbangfianal":
                    break;
                default:
                    {
                        L(e.jsx(rt, {
                            name: "other",
                            title: t.title,
                            content: t.content
                        }), {
                            duration: 5e3,
                            className: "bonus-notify-wrap"
                        });
                        break
                    }
            }
            S.emit("rewardClaim")
        }), S.addSocketEvent("user-present-success", t => {
            switch (t.presentType) {
                case "tip":
                    L(O.unsafeTranslate("common.messages.tip_get_success", `${t.amount} ${w.getAlias(t.currencyName)}`, t.userName), {
                        duration: 5e3
                    });
                    break;
                case "rain":
                    L(O.unsafeTranslate("common.messages.rain_get_success", `${t.amount} ${w.getAlias(t.currencyName)}`, t.userName), {
                        duration: 5e3
                    });
                    break;
                default:
                    W.getUserInfo(), L(`Wow you got ${t.amount} spin from Coco`, {
                        duration: 0,
                        onClick: () => O.unsafeNavigate("#/spin")
                    });
                    break
            }
        }), S.addSocketEvent("task-completed", t => {
            const a = t.taskType === "daily" ? "#/quests" : "#/quests/weekly";
            S.emit("rewardClaim"), L(e.jsx(rt, {
                name: "task",
                content: t.content,
                url: a
            }), {
                duration: 5e3,
                className: "bonus-notify-wrap"
            })
        }), S.addSocketEvent("recharge-success", t => {
            S.emit("rewardClaim"), t.status === 1 ? L(O.unsafeTranslate("page.recharge.state_recharging"), {
                duration: 5e3
            }) : (Ye.trackEvent("deposit_recieved"), t && t.depositCount && (w.totalDepositNum = t.depositCount), se.updateFirstDeposit(t.depositCount), be.init(!0), w.depositShowCurrency(t.currencyName), t.depositCount == 1 ? O.emit("ad_track", "ftd_success", {
                sales: w.amount2usd(Number(t.amount), t.currencyName).toString(),
                orderid: String(t.id),
                userId: String(S.userId)
            }) : t.depositCount == 2 && O.emit("ad_track", "reccuring_deposit", {
                sales: w.amount2usd(Number(t.amount), t.currencyName).toString(),
                orderid: String(t.id),
                userId: String(S.userId)
            }), O.emit("ad_track", "deposit_success", {
                sales: w.amount2usd(Number(t.amount), t.currencyName).toString(),
                orderid: String(t.id),
                userId: String(S.userId)
            }), L(`${t.amount} ${w.getAlias(t.currencyName)}`, {
                title: O.unsafeTranslate("page.recharge.success_message"),
                duration: 5e3,
                onClick: () => O.unsafeNavigate(`#/deposit_detail/${t.id}/${t.currencyName}`)
            }), Ye.trackEvent("deposit_sended"))
        }), S.addSocketEvent("withdraw-progress", t => {
            L(O.unsafeTranslate("page.bonus.notify.withdrawal.progress"), {
                duration: 5e3
            })
        }), S.addSocketEvent("withdraw-success", t => {
            L(O.unsafeTranslate("page.bonus.notify.withdrawal.success", `${t.amount} ${w.getAlias(t.currencyName)}`), {
                duration: 5e3,
                title: O.unsafeTranslate("page.bonus.notify.withdrawal.success.title")
            })
        }), S.addSocketEvent("withdraw-fail", t => {
            L(O.unsafeTranslate("page.bonus.notify.withdrawal.fail", `${t.amount} ${w.getAlias(t.currencyName)}`), {
                duration: 0,
                onClick: () => O.unsafeNavigate(`/wallet/transaction?type=withdraw&assets=${t.currencyName}`)
            })
        }), S.addSocketEvent("change-amount-success", t => {
            L(`You found ${t.amount} ${w.getAlias(t.currencyName)} under of Coco's Red throne`, {
                title: O.unsafeTranslate("page.bonus.notify.forum.tip"),
                duration: 0,
                onClick: () => O.unsafeNavigate(`/wallet/transaction?type=bill&assets=${t.currencyName}`)
            })
        }), S.addSocketEvent("use-code-success", t => {
            L(`You have got ${t.amount} ${w.getAlias(t.currencyName)} from Coco's cave`, {
                title: O.unsafeTranslate("wallet.bcd.shitcode.worked"),
                duration: 5e3,
                onClick: () => O.unsafeNavigate(`/wallet/transaction?type=bill&assets=${t.currencyName}`)
            })
        }), S.addSocketEvent("present-success", t => {
            L(O.unsafeTranslate("page.tips.presentSuc", `${t.amount} ${w.getAlias(t.currencyName)}`), {
                duration: 0,
                onClick: () => O.unsafeNavigate(`/wallet/transaction?type=deposit&assets=${t.currencyName}`)
            })
        }), S.addSocketEvent("regist-present-success", t => {
            ee.modalQueue.add(() => O.unsafeNavigate("#/spin"), {
                key: "FREE_SPIN"
            })
        }), ee.socket.on("affiche-message", ba.decodeBind(t => {
            t.systemFlag && Bt.getNoticeByAfficheId(t.afficheId).then(a => {
                const s = a.contentV2.filter(n => n.contentType === 1);
                s.length && (L(e.jsx("div", {
                    className: xu,
                    children: s[0].content
                }), {
                    title: a.title,
                    duration: 0,
                    onClick: () => {
                        S.login && Pt.openNotice(!0)
                    }
                }), Pt.loadData())
            })
        }, "json"))
    }
    const xu = "wuxu549",
        ju = $(() => K(() =>
            import ("./chunk-929c9083.js").then(async t => (await t.__tla, t)), ["assets/chunk-929c9083.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-c23b3c52.js", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-15d0001f.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js", "assets/BonusLink.1719c835.css"])),
        Vo = J.memo(function() {
            const t = ks(),
                {
                    code: a
                } = ft(),
                s = Ve(),
                n = f.useRef(o => console.log()),
                i = f.useRef(new Promise(o => {
                    n.current = o
                }));
            return f.useEffect(() => {
                if (a) {
                    const o = a;
                    t && ee.modalQueue.add(() => i.current, {
                        key: "SHIT_LINK"
                    });
                    const r = () => {
                        M.get("/activity/redeemCode/findCode/" + o + "/").then(l => {
                            s.push(e.jsx(ju, {
                                code: o,
                                resolve: n.current,
                                reOpen: r,
                                linkInfo: {
                                    currencyName: l.currencyName,
                                    stringAmount: l.stringAmount,
                                    locked: l.locked,
                                    rewardType: l.rewardType,
                                    depositBonusPercentage: l.depositBonusPercentage
                                }
                            }), {
                                closeable: !1
                            })
                        }).catch(l => {
                            n.current("ok"), S.inited.then(() => {
                                S.login && L(e.jsx(_u, {
                                    err: l
                                }))
                            })
                        })
                    };
                    r()
                }
            }, []), null
        }),
        _u = J.memo(function({
            err: t
        }) {
            const a = k();
            return e.jsx("span", {
                children: `${a("page.shitcode.failed")}  ${t.message}`
            })
        }),
        ku = "/assets/spin.463f2a1f.png";
    class Nu {
        constructor() {
            Z(this, "rewardsCurrency", "USDFIAT");
            Z(this, "rewardsList", [1, 2, 5, 6, 8, 10, 16, 20, 26, 30, 60, 100, 200, 300, 400, 500]);
            Z(this, "rewardsUsd", 5);
            Z(this, "target", 2);
            Z(this, "currencys", ["BCD", "USDT", "USDC", "TRX", "SOL", "DOGE", "BNB", "LTC", "XML", "MATIC", "DOT"]);
            Z(this, "randomCurrencys", []);
            Z(this, "claimed", !1);
            this.init(), this.claimed = !!localStorage.getItem("newuser_spin"), ka(this, {
                claimed: we
            })
        }
        init() {
            this.randomCurrencys = $s(this.currencys)
        }
        getCryptoData() {
            let a = 0;
            return this.rewardsList.map((s, n) => {
                let i = s >= 100 ? w.dict.USDT : w.dict[this.randomCurrencys[n]];
                return i || (i = w.list[a], a++), {
                    level: 0,
                    section: n,
                    currencyName: i.currencyName,
                    amount: w.convertCurrency(s, this.rewardsCurrency, i.currencyName),
                    locked: !1
                }
            })
        }
        getFiatData(a) {
            return this.rewardsList.map((s, n) => ({
                level: 0,
                section: n,
                currencyName: a,
                amount: w.convertCurrency(s, this.rewardsCurrency, a),
                locked: !1
            }))
        }
    }
    const ze = new Nu;

    function Cu(t, a = 2) {
        const s = Math.floor(Math.log10(Math.abs(t)) + 1),
            n = a - s;
        return Math.round(t * Math.pow(10, n)) / Math.pow(10, n)
    }

    function zo(t, a) {
        const s = w.localCurrencys[t].cs,
            n = w.convertCurrency(a, "USD", t);
        return s + w.numberWithCommas(Cu(n), 0, t)
    }

    function $o(t, a) {
        let s = "";
        if (a.toLocaleLowerCase() === "crypto") return "Crypto";
        a && w.dict[a] ? s = a : s = t;
        const n = w.dict[s];
        return n && n.currencyType === O1.FIAT ? s : "Crypto"
    }
    const Tu = Y(function() {
            const t = Ke(),
                a = re(),
                {
                    urlParsed: s,
                    urlPathname: n
                } = yt(),
                i = s.search.bcn || "",
                o = $o(S.bonusCurrencyName, i.toLocaleUpperCase()),
                r = ze.rewardsList[ze.rewardsList.length - 1],
                l = S.login,
                c = n && n.startsWith("/landing"),
                d = k();
            return !t || c || l ? null : e.jsxs(ge.div, {
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                className: A(Su, c && "landing-bot-spin"),
                children: [e.jsx("img", {
                    className: "img-spin",
                    src: ku,
                    alt: ""
                }), e.jsxs("div", {
                    children: [e.jsxs("div", {
                        className: "tit",
                        children: [d("page.spin.towin"), " ", e.jsx("i", {
                            children: o !== "Crypto" ? zo(o, r) : `${r}USDT`
                        })]
                    }), e.jsx("div", {
                        className: "desc",
                        children: d("page.spin.available")
                    })]
                }), e.jsx(q, {
                    onClick: () => a("#/spin"),
                    children: d("page.promotion.spin.button.login")
                })]
            })
        }),
        Su = "saty2e2",
        qo = ({
            startValue: t = 0,
            targetValue: a,
            className: s,
            decimalPlaces: n = 2,
            duration: i = 1.5,
            currency: o
        }) => {
            const r = f.useRef(null),
                l = w.localCurrencys[o],
                c = t.toFixed(n),
                d = w.getAlias(o),
                m = l ? l.cs + " " + c : c + " " + d;
            return f.useEffect(() => {
                if (r.current) {
                    const h = {
                            num: t
                        },
                        g = Re.to(h, {
                            num: a,
                            duration: 2,
                            delay: .5,
                            ease: "Linear.easeNone",
                            roundProps: `value,${n}`,
                            onUpdate: () => {
                                if (r.current) {
                                    const u = h.num.toFixed(n);
                                    r.current.textContent = l ? l.cs + " " + u : u + " " + d
                                }
                            }
                        });
                    return () => {
                        g.kill()
                    }
                }
            }, [t, a, n, i]), e.jsx("div", {
                className: A("scoll-num", s, Au),
                ref: r,
                children: m
            })
        },
        Au = "s1et3xev";

    function Iu() {
        const t = Ve(),
            a = k();
        return e.jsxs($e, {
            className: Ru,
            children: [e.jsx("div", {
                className: "tit",
                children: a("page.bonus.dis_ip")
            }), e.jsx("div", {
                className: "txt",
                children: a("page.bonus.dis_ip.desc")
            }), e.jsx(q, {
                type: "conic",
                onClick: t.close,
                children: a("common.ok")
            })]
        })
    }
    const Ru = "s739jub";
    async function Du(t, a) {
        return await ee.getDeviceId().then(s => {
            M.defaults.headers.common.smid = s
        }), M.post("/activity/reward/freeMoneyReward/", {
            currencyName: t,
            bonusAmount: a
        })
    }

    function Pu({
        amount: t,
        currencyName: a,
        rewardId: s
    }) {
        const [n, i] = _e({
            init: !0,
            error: ""
        }), o = k(), r = Ve(), l = re();
        if (f.useEffect(() => {
                M.post(`/activity/reward/receive/${s}/`).then(d => {
                    i({
                        init: !0
                    });
                    const m = w.displayObj[a];
                    m && (m.status = 1, w.updateFavoriteCoin(), w.current = a)
                }).catch(d => {
                    i({
                        error: d.message
                    })
                })
            }, []), n.error) return e.jsx($e, {
            closeable: !0,
            children: e.jsx(Ce, {
                children: n.error
            })
        });
        if (!n.init) return e.jsx($e, {
            className: za,
            closeable: !0,
            children: e.jsx(pe, {})
        });
        const c = function(d) {
            l(d), Ye.trackEvent("free_play_click"), r.close()
        };
        return e.jsxs($e, {
            className: za,
            closeable: !0,
            children: [e.jsx(qo, {
                className: "amount",
                duration: 3e3,
                targetValue: Number(t),
                currency: a
            }), e.jsxs("div", {
                className: "tit ttu",
                children: [o("page.bonus.rewards_claimed"), "!"]
            }), e.jsx("div", {
                className: "desc",
                children: o("page.newuser.title6")
            }), e.jsx(q, {
                type: "conic",
                onClick: () => c(`#/newuser/gamelist/${a}`),
                children: o("common.play")
            })]
        })
    }

    function Va({
        amount: t,
        currency: a
    }) {
        const {
            data: s,
            error: n
        } = Be(() => Du(a, t));
        return n ? e.jsx($e, {
            children: e.jsx(Ce, {
                children: n.message
            })
        }) : s ? s.state != 0 || !s.rewardId ? e.jsx(Iu, {}) : e.jsx(Pu, {
            amount: s.amount,
            currencyName: s.currencyName,
            rewardId: s.rewardId
        }) : e.jsx($e, {
            className: za,
            closeable: !0,
            children: e.jsx(pe, {})
        })
    }
    const za = "scgczr9",
        Bu = $(() => K(() => Promise.resolve().then(() => ty), void 0));

    function Eu() {
        return M.get("/activity/reward/hasUserClaimedFreeMoney")
    }
    async function Lu() {
        const t = Date.now();
        for (;;) {
            try {
                if (await Eu() !== -1) break
            } catch (a) {
                console.log("Function failed:", a);
                break
            }
            if (Date.now() - t > 6e3) {
                console.log("Polling timeout");
                break
            }
            await H.delay(1500)
        }
    }
    let Ho, Yo, Go, Jo, Qo, Zo, Ko, Xo, er, tr, ar, sr, nr, ir, or, rr, $a, lr, cr, dr, mr, ur, pr, hr, gr, fr, yr;
    Ho = J.memo(function() {
        const t = Se.initSearchParams.get("bcn_bonus"),
            a = Se.initSearchParams.get("bcn"),
            s = Ve();
        return f.useEffect(() => {
            t && a && (ee.deviceRegist = !0, S.waitLogin().then(async () => {
                await H.delay(3500), Lu().then(() => {
                    ee.modalQueue.add(() => s.push(e.jsx(Va, {
                        amount: Number(t),
                        currency: a
                    })), {
                        key: "FREE_SPIN"
                    })
                }).catch(n => {
                    console.error(n)
                })
            }))
        }, []), t && a ? null : e.jsx(Yo, {})
    }), Yo = J.memo(function() {
        const t = Ve(),
            [a, s] = f.useState(!0),
            n = Ke();
        return f.useEffect(() => {
            ee.getDeviceRegist().then(i => {
                s(i)
            })
        }, []), f.useEffect(() => {
            a === !1 && setTimeout(() => {
                S.inited.then(() => {
                    S.login || ee.modalQueue.add(() => t.push(e.jsx(Bu, {})), {
                        key: "FREE_SPIN"
                    })
                })
            }, 1e3)
        }, [a]), n && !a ? e.jsx(Tu, {}) : null
    }), Go = "/assets/example.9d74aa05.png", Jo = "/assets/example-w.63cb36e3.png", Qo = "/assets/example-m.9db38ac7.png", Zo = "/assets/example-m-w.6906c1b1.png", Ko = "/assets/step_1.56fd77c7.png", Xo = "/assets/step_2.38f486f2.png", er = "/assets/step_3.8b4739b4.png", tr = "/assets/id.7acf4f81.svg", ar = "/assets/id-w.76726c46.svg", sr = "/assets/share-bg.4b5950de.png", nr = "/assets/spider.65cea587.png", ir = "/assets/update.2e195db7.png", or = "/assets/update_w.e2724ac7.png", rr = "/assets/login_coco.b98ee21b.png", qs = {
        example: Go,
        exampleWhite: Jo,
        exampleMobile: Qo,
        exampleMobileWhite: Zo,
        step_1: Ko,
        step_2: Xo,
        step_3: er,
        id: tr,
        idWhite: ar,
        share_bg: sr,
        spider: nr,
        update: ir,
        update_w: or,
        login: rr
    }, $a = "/assets/coindrop-more.ff14c8e3.png", lr = "/assets/get.7393a193.png", cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAMAAABBJv+bAAAASFBMVEUAAAD/5lP/9Gv/5FH/5FH/5FH/5VL/5VL/5FH/5FL/5FH/5FL/5FH/5FL/5FH/51b/5lj/41L/5FH/5lL/5FL/41P/5VP/41E1sYyuAAAAF3RSTlMAOQbk6dpVLcO8ta2fhnUlHt7PZF1KMff9ccsAAACmSURBVCjPfdDbCoAgEATQdTW1NLvn//9pGCHskO6T7GF0kOQoRb0Zx56qnFUvnPPYDffiU+GpE4Y4hiEO4d84O5uiN7mO8TFZx68FnRujAxM502LjiNBRiRb9p3ohEo5aZ91Qt7Vi8UHqsDb+5P9jrWQLPEuegYPkAIzVpPK39v47sOD73e0X0bW/x1vwWS786try0AnF9cH1pUND9ZhYVElRcEVYPFrgHLEPmWLQAAAAAElFTkSuQmCC", dr = "/assets/shadow.6fb7611e.png", mr = "/assets/cloud-right.2c1ecf48.png", ur = "/assets/cloud-left.7f3eeefd.png", pr = "/assets/unb-btc.10668151.png", hr = "/assets/unb-btc-side.e6de062c.png", gr = "/assets/parachute-fall.193a2437.png", fr = "/assets/parachute.4e1157e3.png", yr = "/assets/fall-btc.3dba744c.png", Ta = {
        coindropMore: $a,
        get: lr,
        star: cr,
        shareBg: qs.share_bg,
        bcgame: M1.coin,
        shadow: dr,
        cloudLeft: ur,
        cloudRight: mr,
        parachuteBtc: pr,
        parachuteBtcSide: hr,
        parachuteFall: gr,
        parachute: fr,
        fallBtc: yr,
        parachuteMore: $a
    }, ht = (t => (t[t.INIT = 0] = "INIT", t[t.UNGRABB = 1] = "UNGRABB", t[t.COMPLETED = 2] = "COMPLETED", t[t.EXPIRED = 3] = "EXPIRED", t[t.ISSUS = 4] = "ISSUS", t[t.GRABBED = 5] = "GRABBED", t))(ht || {});
    const Fu = $(async () => ({
            default: (await K(() =>
                import ("./chunk-e05ea244.js").then(async t => (await t.__tla, t)), ["assets/chunk-e05ea244.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-15d0001f.js", "assets/chunk-c23b3c52.js", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js"])).CoindropReceive
        })),
        Ou = tt(({
            data: t
        }) => e.jsx("div", {
            className: Vu,
            children: e.jsx(Mu, {
                data: t
            })
        }));

    function Mu({
        data: t
    }) {
        const a = k(),
            s = t.chat.message,
            n = $c(),
            i = Ec(),
            o = f.useRef(t);
        o.current = t, f.useEffect(() => {
            const m = h => {
                h === o.current && i()
            };
            return n.on("updateChat", m), () => {
                n.off("updateChat", m)
            }
        }, []);
        const r = m => {
                switch (m) {
                    case ht.UNGRABB:
                        return a("page.coindrop.grab");
                    case ht.EXPIRED:
                        return a("page.coindrop.expired");
                    default:
                        return a("page.coindrop.completed")
                }
            },
            l = () => Wu({
                info: s.message,
                packageKey: s.packageKey,
                username: t.name,
                userId: t.userId,
                level: t.level,
                status: s.status,
                onReceive: () => {
                    s.status = ht.COMPLETED, i()
                }
            }),
            c = s.status == ht.UNGRABB,
            d = s.status !== ht.UNGRABB;
        return e.jsxs("div", {
            className: Uu,
            onClick: l,
            children: [e.jsx("img", {
                alt: "coindrop-more",
                src: c ? Ta.parachuteMore : Ta.parachuteFall,
                className: c ? "right-img" : "right-open-img"
            }), e.jsx("div", {
                className: `coindrop-status ${d?"finish":""}`,
                children: r(s.status)
            })]
        })
    }
    const Wu = S.withLogin(t => {
            ke.push(e.jsx(Fu, U({}, t)))
        }),
        Uu = "c1kwqw4q",
        Vu = "wvmnv27",
        zu = "/assets/crash_rain.c6c060d1.png",
        $u = "/assets/game_rain.59e1a595.png",
        aa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAMAAACWh252AAAAZlBMVEUAAAAnteUpueooteYnteYptuonteUoteYnteYntecntugptecwt+gwwucr1f8otOZg//8otOYnteYnteYotOUnteYoteYotOYoteYntecptecoteUot+crt+YnteYpuegsu+wntOWb9tUnAAAAIXRSTlMA+CTpwSbPvKx9YkYVCgbKAvPx4trWpZqNdWlZQDw0KxrwSWxJAAAAyklEQVQoz5WRVxLDIAxEwRj33rut+18yIJExcYaZ5H3Y2tV+LMB+w4u/vdizRMjP5/7k/i0SgLJ6BHyA5D1nAgCWz/2iLJEZMYCiuez91WhvIJECEtmBiLyUGgIhrVMZi3rWRq13YDVWjaozatNi3/V3M1aHgYmEyNVc9H2hfrkgb8JAHuiZY6EYIMbiXHtBzpBiDssRL1Yqn0usOZbhXLAnPlV3kgCSuPZVS4G2cj06GDxHIANDxhwEtA+cJQ88PT+YExkJEUn2Fy/zyBb1BaTKgQAAAABJRU5ErkJggg==",
        _t = "/assets/star.781a1f19.png",
        qu = "/assets/cat.e4584e44.png",
        br = "/assets/ribbon.ea676df2.gif",
        Hu = ({
            gameUrl: t
        }) => {
            const a = re(),
                s = k();
            return e.jsxs("div", {
                className: vr,
                children: [e.jsxs("div", {
                    className: "rain-title",
                    children: [e.jsxs("div", {
                        className: "rain-logo-wrap",
                        children: [e.jsx("img", {
                            alt: "img",
                            src: zu
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-1",
                            src: _t
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-2",
                            src: _t
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-3",
                            src: _t
                        })]
                    }), e.jsxs("div", {
                        className: "title-word sp",
                        children: [e.jsx("p", {
                            children: s("page.share.crash")
                        }), e.jsx("p", {
                            className: "y",
                            children: "100X!!"
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "mid-wrap",
                    children: [e.jsx("div", {
                        className: "b"
                    }), e.jsx("img", {
                        alt: "f",
                        className: "f",
                        src: br
                    }), e.jsx("img", {
                        alt: "i",
                        className: "i cat",
                        onClick: () => a(t),
                        src: qu
                    })]
                }), e.jsxs("div", {
                    className: "lucky-rain",
                    children: [e.jsx("img", {
                        alt: "rain",
                        src: aa
                    }), e.jsx("span", {
                        children: s("page.share.rain")
                    }), e.jsx("img", {
                        alt: "rain",
                        src: aa
                    })]
                })]
            })
        },
        Yu = ({
            userName: t,
            userId: a,
            amount: s,
            fullName: n,
            gameUrl: i
        }) => {
            const o = k();
            return e.jsxs("div", {
                className: vr,
                children: [e.jsxs("div", {
                    className: "rain-title",
                    children: [e.jsxs("div", {
                        className: "rain-logo-wrap",
                        children: [e.jsx("img", {
                            alt: "img",
                            src: $u
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-1",
                            src: _t
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-2",
                            src: _t
                        }), e.jsx("img", {
                            alt: "star",
                            className: "star star-3",
                            src: _t
                        })]
                    }), e.jsxs("div", {
                        className: "title-word",
                        children: [e.jsx("p", {
                            children: o("common.congratulations")
                        }), e.jsxs("div", {
                            className: "g",
                            children: [e.jsx("span", {
                                children: "@"
                            }), e.jsx(qc, {
                                avatar: !1,
                                userId: a,
                                name: t
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "mid-wrap",
                    children: [e.jsx("div", {
                        className: "b"
                    }), e.jsx("img", {
                        alt: "f",
                        className: "f",
                        src: br
                    }), e.jsxs("div", {
                        className: "i sp",
                        children: [e.jsxs("p", {
                            className: "one",
                            children: [e.jsx("span", {
                                children: "Won"
                            }), e.jsx("span", {
                                children: `$${new oe(s).toFixed(2)}`
                            })]
                        }), e.jsxs("p", {
                            className: "two",
                            children: [e.jsx("span", {
                                children: "in"
                            }), e.jsx(Xe, {
                                href: i,
                                children: n
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "lucky-rain",
                    children: [e.jsx("img", {
                        alt: "rain",
                        src: aa
                    }), e.jsx("span", {
                        children: o("page.share.rain")
                    }), e.jsx("img", {
                        alt: "rain",
                        src: aa
                    })]
                })]
            })
        },
        vr = "rvsplqn",
        lt = tt(({
            data: t
        }) => {
            const a = k(),
                s = re(),
                n = $c(),
                i = t.chat.message;
            let o, r = i,
                l = !1,
                c = !1,
                d = {};
            switch (t.chat.subType) {
                case "2":
                    o = e.jsx("div", {
                        children: a("page.rain.send_coco")
                    });
                    break;
                case "3":
                    o = e.jsx("span", {
                        children: a("page.rain.send_tip")
                    });
                    break;
                case "4":
                    o = e.jsx("div", {
                        children: a("page.rain.send_bonus")
                    });
                    break;
                case "5":
                    o = e.jsx("div", {
                        children: a("page.rain.send_roll")
                    });
                    break;
                case "6":
                    o = e.jsx(Gu, {
                        userId: i.userId,
                        userName: i.userName,
                        remark: i.remark
                    }), r = i.winnerInfo;
                    break;
                case "11":
                    o = e.jsxs("div", {
                        children: [e.jsx("span", {
                            className: "cl-primary",
                            children: "BC.GAME "
                        }), e.jsx("span", {
                            children: a("page.rain.send_tip")
                        }), e.jsxs("span", {
                            className: "level-message",
                            children: ['" ', i.remark ? i.remark : a("page.rain.send_chicken"), ' "']
                        })]
                    }), r = i.users;
                    break;
                case "16":
                    o = e.jsx(Hu, {
                        gameUrl: i.info.gameUrl
                    }), r = i.winnerInfoList, l = !0, d = {
                        gameId: i.info.gameId,
                        gameUnique: i.info.gameUnique
                    };
                    break;
                case "17":
                    o = e.jsx(Yu, {
                        userName: i.info.userName || "",
                        userId: i.info.userId || 0,
                        amount: i.info.profitAmountUsd || "",
                        fullName: i.info.fullName || "",
                        gameUrl: i.info.gameUrl || ""
                    }), r = i.winnerInfoList, c = !0, d = U({}, i.info);
                    break
            }
            const m = async g => {
                    g && await t.loadFull(), t.state = g ? 1 : 0, t.id = String(t.id).replace(/(_.*$)|$/, `_${Number(g)}`), n.chatList = n.chatList.concat()
                },
                h = c || l;
            return e.jsxs(it, {
                className: A(Ju, h && "rain-sp"),
                children: [e.jsx("div", {
                    className: "rain-message",
                    children: o
                }), e.jsxs("div", {
                    className: A(Qu, "full-message"),
                    children: [e.jsx(W1, {
                        list: r,
                        more: t.state === 1,
                        onToggle: m
                    }), l && e.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            O.emit("openAllPlayers", {
                                gameUnique: d.gameUnique,
                                gameId: d.gameId
                            })
                        },
                        children: [a("common.game_number"), ": ", e.jsx("p", {
                            className: "w",
                            children: d.gameId
                        }), e.jsx(z, {
                            name: "Arrow"
                        })]
                    }), c && e.jsxs("button", {
                        className: "gdbtn",
                        onClick: () => {
                            s(`#/sd/${d.shareId}`)
                        },
                        children: [a("common.betid"), ": ", e.jsx("p", {
                            className: "w",
                            children: d.betId
                        }), e.jsx(z, {
                            name: "Arrow"
                        })]
                    }), !h && e.jsx("div", {
                        className: "congratulations",
                        children: a("common.congratulations")
                    })]
                })]
            })
        }),
        Gu = ({
            userId: t,
            userName: a,
            remark: s
        }) => {
            const n = k();
            return e.jsxs(e.Fragment, {
                children: [e.jsx(qc, {
                    userId: t,
                    name: a,
                    avatar: !1
                }), e.jsx("span", {
                    style: {
                        marginLeft: "2px"
                    },
                    children: n("page.rain.send_tip")
                }), e.jsxs("span", {
                    className: "level-message",
                    children: ['"', s || n("page.rain.send_chicken"), '"']
                })]
            })
        },
        Ju = "re1cbzp";
    Ie({
        cl1: [ie("#99a4b0", .6), "#31373d"]
    });
    const Qu = "m1j02fh0",
        Zu = () => e.jsxs("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "sc-jcVebW XXWmM icon",
            viewBox: "0 0 32 32",
            children: [e.jsx("path", {
                fill: "var(--color1, #455a64)",
                d: "M15.778 15.808H3.911a11.867 11.867 0 1023.735 0 11.868 11.868 0 10-23.735 0h11.867z",
                opacity: ".002"
            }), e.jsx("path", {
                fill: "var(--color2, #6300d8)",
                d: "M3.911 15.749a11.8 11.8 0 01.902-4.484l10.965 4.542-10.965 4.542a11.822 11.822 0 01-.902-4.542z"
            }), e.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M7.429 7.371a11.911 11.911 0 013.81-2.537l4.539 10.973-10.965-4.542a11.915 11.915 0 012.575-3.854z"
            }), e.jsx("path", {
                fill: "var(--color4, #c201cc)",
                d: "M15.837 3.932c1.54.007 3.057.31 4.481.902l-4.539 10.973L11.24 4.834a11.79 11.79 0 014.539-.903z"
            }), e.jsx("path", {
                fill: "var(--color3, #f8c32f)",
                d: "M20.317 4.834c1.442.6 2.747 1.473 3.851 2.577l.04.041a11.902 11.902 0 012.535 3.813l-10.965 4.542z"
            }), e.jsx("path", {
                fill: "var(--color5, #ce2e41)",
                d: "M26.743 11.265c.599 1.443.902 2.981.902 4.542v.059a11.8 11.8 0 01-.902 4.484l-10.965-4.542z"
            }), e.jsx("path", {
                fill: "var(--color6, #3b4a53)",
                d: "M26.743 20.35a11.915 11.915 0 01-2.575 3.854l-.041.04a11.911 11.911 0 01-3.81 2.537l-4.539-10.973z"
            }), e.jsx("path", {
                fill: "var(--color7, #7ee452)",
                d: "M20.317 26.781a11.79 11.79 0 01-4.539.903h-.059a11.79 11.79 0 01-4.481-.902l4.539-10.973z"
            }), e.jsx("path", {
                fill: "var(--color8, #44bde8)",
                d: "M7.348 24.163a11.902 11.902 0 01-2.535-3.813l10.965-4.542-4.539 10.973a11.908 11.908 0 01-3.851-2.577z"
            }), e.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M15.973 2.01c7.731 0 13.999 6.263 13.999 13.99s-6.268 13.99-13.999 13.99C8.242 29.99 1.974 23.727 1.974 16S8.242 2.01 15.973 2.01zm0 2.423C9.58 4.433 4.398 9.612 4.398 16S9.58 27.567 15.973 27.567c6.393 0 11.575-5.179 11.575-11.567S22.366 4.433 15.973 4.433z"
            }), e.jsx("path", {
                fill: "var(--color9, #fcd049)",
                d: "M19.979 16.042a3.946 3.946 0 11-7.893 0 3.946 3.946 0 017.893 0z"
            })]
        }),
        wr = tt(({
            data: t
        }) => {
            const a = t.chat.message;
            return t.chat.subType === "10" ? e.jsx(Ku, {
                msg: a
            }) : e.jsx(Xu, {
                msg: a
            })
        }),
        Ku = ({
            msg: t
        }) => e.jsxs(it, {
            className: ep,
            children: [e.jsx("span", {
                className: "cl-primary",
                children: "BC.GAME"
            }), e.jsxs("span", {
                className: "tip-spin",
                children: ["\xA0sent ", e.jsx(Zu, {}), " 1 Spin"]
            }), "\xA0to\xA0", e.jsxs(Xe, {
                href: `#/user/profile/${t.users[0].userId}`,
                className: "cl-primary",
                children: ["@", t.users[0].userName]
            })]
        }),
        Xu = ({
            msg: t
        }) => {
            const a = k(),
                s = f.useRef(null),
                n = Ec();
            return f.useEffect(() => {
                const i = s.current;
                !t.isAne && i && (t.isAne = !0, n())
            }, [t]), e.jsxs(it, {
                ref: s,
                className: A(tp, t.isAne && "ane"),
                children: [e.jsx("span", {
                    className: "tipped",
                    children: a("page.tips.tipped")
                }), e.jsxs(Xe, {
                    className: "cl-primary",
                    href: `#/user/profile/${t.toUserId}`,
                    children: ["@", t.toUserName]
                }), t.remark && e.jsx("span", {
                    className: "remark",
                    children: t.remark
                }), e.jsxs("div", {
                    className: "msg-cont",
                    children: [e.jsx(De, {
                        name: t.currencyName
                    }), " ", t.tip, " ", w.getAlias(t.currencyName)]
                })]
            })
        },
        ep = "m1kvffab",
        tp = "m79pyel",
        ap = "/assets/super_share.c306605e.png",
        sp = "/assets/mega_share.298a2740.png",
        np = "/assets/lucky_share.fcc7933a.png",
        ip = tt(({
            data: t
        }) => {
            const a = t.chat.message,
                s = re(),
                n = k(),
                i = f.useCallback(() => {
                    s("#/spin")
                }, []);
            let o = np,
                r = "lucky";
            return a.level >= 5 ? (o = sp, r = "mega") : a.level >= 3 && (o = ap, r = "super"), e.jsxs(it, {
                className: op,
                children: [e.jsxs("div", {
                    className: A("cont", r),
                    children: [e.jsx("img", {
                        className: "spin-img",
                        src: o,
                        alt: ""
                    }), e.jsx("div", {
                        className: "star-item item-1"
                    }), e.jsx("div", {
                        className: "star-item item-2"
                    }), e.jsx("div", {
                        className: "star-item item-3"
                    }), e.jsx("div", {
                        className: "spin-tit",
                        children: n("page.spin.share")
                    }), e.jsx("div", {
                        className: "amount-cont",
                        children: e.jsx(Oe.CoinFormat, {
                            icon: !0,
                            sign: !0,
                            name: a.currencyName,
                            amount: Number(a.amount)
                        })
                    })]
                }), e.jsxs(q, {
                    onClick: i,
                    type: "conic4",
                    children: [n("page.promotion.spin.button.login"), "!"]
                })]
            })
        });
    Ie({
        cl1: ["#fff", "#000"],
        cl2: ["#31343a", ie("#e9eaf2", .6)],
        cl3: ["linear-gradient(134deg, #4a4633, #252628 50%)", "linear-gradient(134deg, #f8eba9, #ffffff 50%)"],
        cl4: ["linear-gradient(134deg, #4d402e, #252628 50%)", "linear-gradient(134deg, #ffebb3, #ffffff 50%)"],
        cl5: ["linear-gradient(134deg, #5b384e, #252628 50%)", "linear-gradient(134deg, #ffd5f0, #ffffff 50%)"],
        cl6: ["#1C1E22", "#FFFFFF"]
    });
    const op = "scfbswg";

    function rp(t) {
        return !t.startsWith("/")
    }
    const lp = tt(({
            data: t
        }) => {
            const a = t.chat.message,
                s = re(),
                n = a.link || "",
                i = rp(n);
            return e.jsxs(it, {
                className: cp,
                children: [e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx("div", {
                        className: "img-wraps",
                        children: e.jsx("img", {
                            alt: "img",
                            src: a.imgUrl
                        })
                    }), a.content && e.jsx("p", {
                        children: a.content
                    })]
                }), n && e.jsx("div", {
                    className: "btn-link",
                    children: e.jsx(q, {
                        type: "conic4",
                        onClick: () => {
                            i ? window.open(n) : s(n)
                        },
                        children: a.linkText || ""
                    })
                })]
            })
        }),
        cp = "s4cklmp",
        dp = () => K(() =>
            import ("./chunk-80a93bfb.js").then(async t => (await t.__tla, t)), ["assets/chunk-80a93bfb.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-dcd0ca87.js", "assets/chunk-61302461.js", "assets/index.ecad4d73.css", "assets/LimitBonus.a3c8135a.css"]),
        mp = $(async () => ({
            default: (await dp()).default
        })),
        up = Y(function() {
            const [t, a] = f.useState(!1);
            return f.useEffect(() => {
                S.login && be.registerTime > 0 && a(!0)
            }, [S.login, be.registerTime]), t ? e.jsx(pp, {}) : null
        }),
        pp = Y(function() {
            const t = Ns(),
                [a, s] = f.useState(!1);
            return f.useEffect(() => {
                be.inited.then(() => {
                    t() && s(!0)
                })
            }, []), a ? e.jsx(mp, {}) : null
        });
    let xr, qa, jr, _r, kr;
    xr = () => K(() =>
        import ("./chunk-e4d970a6.js").then(async t => (await t.__tla, t)), ["assets/chunk-e4d970a6.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-dcd0ca87.js", "assets/chunk-61302461.js", "assets/index.ecad4d73.css", "assets/chunk-c23b3c52.js", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-15d0001f.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js", "assets/index.e61a2615.css"]), qa = $(xr), Es = Y(function() {
        const {
            systemUnreadCount: t,
            commentUnreadCount: a
        } = Pt, s = ee.chatOrNtice === "notice", n = () => {
            ee.chatOrNtice = s ? "" : "notice"
        };
        return S.login ? e.jsxs("button", {
            className: A(kr, "notice"),
            id: "notice",
            onClick: () => {
                ee.track.trackEvent("upperbar_click", {
                    button_name: "notification"
                }), n()
            },
            children: [e.jsxs("div", {
                className: `notice-btn ${s?"active":""}`,
                children: [e.jsx(z, {
                    name: "Notice"
                }), e.jsx(b1, {
                    num: t || a
                })]
            }), e.jsx(je, {
                id: "notice-list-enter",
                children: e.jsx(qa, {
                    onClose: () => ee.chatOrNtice = ""
                })
            })]
        }) : null
    }), jr = Y(function() {
        const {
            systemUnreadCount: t,
            commentUnreadCount: a
        } = Pt;
        return t > 0 || a > 0 ? e.jsx("div", {
            className: "mobile-notice-dont",
            children: t || a
        }) : null
    }), Ls = Y(function() {
        const t = k();
        return e.jsx(ne, {
            title: t("page.notice.title"),
            className: A("notice-dialog", _r),
            children: e.jsx(qa, {})
        })
    }), _r = "nzwctjm", kr = "n10kn2q2";
    const hp = Y(() => {
            const t = k(),
                a = re();
            return e.jsxs(e.Fragment, {
                children: [e.jsx("button", {
                    onClick: () => a("#/quests"),
                    className: A(gp, "bonus-item-btn"),
                    children: e.jsx("div", {
                        className: "img-wrap",
                        children: e.jsx("img", {
                            className: "img-bg",
                            src: he.quests,
                            alt: "quests"
                        })
                    })
                }), e.jsx("div", {
                    className: "bonus-text",
                    onClick: () => a("#/quests"),
                    children: e.jsx("p", {
                        className: A("t ttu", "task"),
                        children: t("common.task")
                    })
                })]
            })
        }),
        gp = "qvvvzmo",
        fp = Y(function() {
            const t = k(),
                a = re(),
                s = se.spin.first,
                n = se.spin.second,
                i = !S.login || n > 0;
            return e.jsxs(e.Fragment, {
                children: [e.jsx("button", {
                    className: `${yp} bonus-item-btn`,
                    onClick: () => a("#/spin"),
                    children: e.jsx("div", {
                        className: `enter-animate ${i?"active":""}`,
                        children: e.jsx("div", {
                            className: "spin-anim",
                            children: S.bonusCurrencyName !== "BCD" || s.fiat ? e.jsx("img", {
                                className: "img-slots",
                                src: he.spin_fiat
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsx("img", {
                                    className: "img-spinbg",
                                    src: he.spin_bg,
                                    alt: ""
                                }), e.jsx("img", {
                                    className: "img-turntable",
                                    src: he.turntable,
                                    alt: ""
                                }), e.jsx("img", {
                                    className: "img-pointer",
                                    src: he.pointer,
                                    alt: ""
                                })]
                            })
                        })
                    })
                }), e.jsx("div", {
                    className: "bonus-text",
                    onClick: () => {
                        a("#/spin")
                    },
                    children: e.jsx("p", {
                        className: A("t ttu", "spin"),
                        children: t("common.spin")
                    })
                })]
            })
        }),
        yp = "e1vxjz6v",
        bp = Y(function() {
            const t = re(),
                a = k(),
                s = se.recharge.second > 0;
            return e.jsxs(e.Fragment, {
                children: [e.jsx("button", {
                    onClick: () => t("#/recharge"),
                    className: A(vp, "bonus-item-btn"),
                    children: e.jsxs("div", {
                        className: `enter-animate ${s?"active":""}`,
                        children: [e.jsx("img", {
                            className: "img-bg",
                            src: he.recharge_s,
                            alt: ""
                        }), e.jsx("img", {
                            alt: "img_progress",
                            src: he.imgprogress,
                            className: "img-progress"
                        })]
                    })
                }), e.jsx("div", {
                    className: "bonus-text",
                    onClick: () => t("#/recharge"),
                    children: e.jsx("p", {
                        className: "t ttu recharge",
                        children: a("page.recharge.recharge")
                    })
                })]
            })
        }),
        vp = "rmtb4nq",
        wp = Y(function() {
            const {
                lang: t
            } = yt(), a = k(), s = f.useMemo(() => {
                const n = [{
                    name: "quests",
                    element: e.jsx(hp, {}),
                    label: a("common.task"),
                    url: "#/quests"
                }, {
                    name: "spin",
                    element: e.jsx(fp, {}),
                    label: a("common.spin"),
                    url: "#/spin"
                }];
                return S.vipLevel >= Rs && (n.pop(), n.pop()), S.vipLevel >= t0 && n.push({
                    name: "recharge",
                    element: e.jsx(bp, {}),
                    label: a("page.recharge.recharge"),
                    url: "#/recharge"
                }), n
            }, [t, S.vipLevel]);
            return e.jsx("div", {
                className: A("bl-l", "bl-l-" + s.length),
                children: s.map((n, i) => {
                    const o = s.length === 1 || s.length === 3 && i == 2;
                    return e.jsx("div", {
                        className: A("bonus-item", "li-" + n.name, o && "item-3"),
                        style: {
                            position: "relative"
                        },
                        children: n.element
                    }, n.name)
                })
            })
        }),
        Nr = Y(function({
            closeFn: t
        }) {
            const a = k(),
                s = ut(),
                {
                    urlPathname: n
                } = yt(),
                i = a0(),
                o = s0(),
                r = n.startsWith("/bonus"),
                l = re(),
                c = se.specialBonus.first.filter(j => j.status === 0),
                d = se.bonusUnlock ? se.bonusUnlock.second > 0 : !1,
                m = se.quests.second > 0 ? se.quests.first.rewards.filter(j => j.rewardId > 0) : [],
                h = m.length > 0 && S.vipLevel < Rs,
                g = se.spin.second > 0 && S.vipLevel < Rs,
                u = se.spin.first.fiat,
                p = se.recharge.second > 0,
                b = se.weeklyBonus.second > 0,
                v = se.monthlyBonus.second > 0,
                _ = se.sportsWeeklyBonus.second > 0,
                T = se.quests.first.dailyTasks.concat(se.quests.first.weeklyTasks),
                {
                    deposits: N,
                    lotterys: D,
                    freespins: V
                } = Na(se.depositBonus),
                {
                    lottery_winnings_list: E
                } = Ds(se.lotteryWinningsBonus),
                R = async j => {
                    var C;
                    try {
                        const y = await M.post("/activity/taskhub/takeReward/", {
                            rewardId: j
                        });
                        if (ee.playSound("claim"), y) {
                            const x = y.lottery && ((C = y.lottery.currentLottery) == null ? void 0 : C.lotteryResult);
                            if (x) {
                                const I = y.lottery ? y.lottery.totalCount : 0,
                                    P = y.lottery ? y.lottery.redeemedCount : 0;
                                l(`#/welcome_bonuses/${x.numbers.join("-")}-${x.jackpotBallNumber}-${x.drawTimestamp}-${Math.max(I,0)}-${Math.max(P-1,0)}`)
                            }
                        }
                        se.initFn()
                    } catch (y) {
                        L(y)
                    }
                };
            return e.jsxs("div", {
                className: jp,
                onClick: j => j.stopPropagation(),
                children: [e.jsx("p", {
                    className: "bl-t",
                    children: a("page.bonus.ready")
                }), e.jsxs(le, {
                    className: "scroll-list hidden-scroll-y",
                    children: [e.jsx(Ge, {
                        closeFn: t,
                        have: d,
                        imgSrc: he.coin,
                        imgClassName: "bcd-unlock",
                        title: a("wallet.bcd.dialog.title"),
                        url: "#/bonus/dashboard"
                    }), e.jsx(Ge, {
                        closeFn: t,
                        have: g,
                        imgSrc: u ? he.spin_fiat : he.spin,
                        imgClassName: "spin",
                        title: a("page.bonus.spin.ready"),
                        btnText: a("page.promotion.spin.button.login"),
                        url: "#/spin"
                    }), e.jsx(xp, {
                        closeFn: t,
                        have: p,
                        imgSrc: he.recharge,
                        imgClassName: "recharge",
                        title: a("page.bonus.recharge.ready"),
                        url: "#/recharge"
                    }), N && N.length > 0 && N.map((j, C) => {
                        const y = j.week ? `${o(j.week)} ${a("common.deposit_bonus")}` : i(j.count);
                        return e.jsx(Ge, {
                            have: !0,
                            imgSrc: he.bonus_deposit,
                            imgClassName: "bonus-deposit",
                            title: y,
                            onClick: async () => {
                                s.push(e.jsx(n0, {
                                    count: j.count
                                }))
                            }
                        }, C + "")
                    }), D && D.length > 0 && D.map((j, C) => {
                        const y = `${j.bonusAmount||1} ${a("page.bonus.lottery_tickets")}`;
                        return e.jsx(Ge, {
                            have: !0,
                            imgSrc: he.bonus_lottery,
                            imgClassName: "bonus-lottery",
                            title: y,
                            onClick: async () => M.post("/activity/taskhub/takeReward/", {
                                rewardId: j.rewardId
                            }).then(x => {
                                var P;
                                const I = x.lottery && ((P = x.lottery.currentLottery) == null ? void 0 : P.lotteryResult);
                                I && l(`#/welcome_bonuses/${I.numbers.join("-")}-${I.jackpotBallNumber}-${I.drawTimestamp}-${x.totalCount}-${x.redeemedCount}`), se.updateLotteryFreeTicket()
                            }).catch(L)
                        }, j.rewardId + C + "")
                    }), E && E.length > 0 && E.map((j, C) => e.jsx(Ge, {
                        have: !0,
                        imgSrc: he.bonus_lottery,
                        imgClassName: "bonus-lottery",
                        title: a("page.lottery.free.winnings"),
                        onClick: async () => M.post("/activity/taskhub/takeReward/", {
                            rewardId: j.rewardId,
                            rewardBonusId: j.rewardBonusId
                        }).then(y => {
                            se.initFn(), ee.playSound("claim")
                        }).catch(L),
                        currencyInfo: {
                            amount: j.amount,
                            currency: j.currency
                        }
                    }, j.rewardId + C + "")), V && V.length > 0 && V.map((j, C) => {
                        const y = `${j.count} ${a("page.bonus.free_spin")}`;
                        return e.jsx(Ge, {
                            have: !0,
                            imgSrc: he.bonus_spin,
                            imgClassName: "bonus-spin",
                            title: y,
                            onClick: async () => M.post("/activity/taskhub/takeReward/", {
                                rewardId: j.rewardId,
                                rewardBonusId: j.rewardBonusId
                            }).then(() => {
                                se.updateFreeSpin(), ee.playSound("claim")
                            }).catch(L)
                        }, j.rewardId + C + "")
                    }), e.jsx(Ge, {
                        have: b,
                        imgSrc: he.weeklybonus,
                        imgClassName: "weeklybonus",
                        title: a("vip.benefits.weeklybonus"),
                        url: "/bonus",
                        onClick: async () => {
                            const j = se.weeklyBonus.first;
                            j.rewardResult && (await Ps(j.rewardResult.rewardId), se.initFn())
                        }
                    }), e.jsx(Ge, {
                        have: v,
                        imgSrc: he.monthlybonus,
                        imgClassName: "monthlybonus",
                        title: a("vip.benefits.monthlybonus"),
                        url: "/bonus",
                        onClick: async () => {
                            const j = se.monthlyBonus.first;
                            j.rewardResult && (await Ps(j.rewardResult.rewardId), se.initFn())
                        }
                    }), e.jsx(Ge, {
                        have: _,
                        imgSrc: he.sportsbonus,
                        imgClassName: "sportsweeklybonus",
                        title: a("page.bonus.sports.weekly"),
                        url: "/bonus",
                        onClick: async () => {
                            const j = se.sportsWeeklyBonus.first;
                            j.rewardResult && (await Ps(j.rewardResult.rewardId), se.initFn())
                        }
                    }), h && m.map((j, C) => {
                        const y = j.taskId === "tid074",
                            x = T.find(I => I.taskId === j.taskId);
                        return e.jsxs("div", {
                            className: "common-bonus reward-item",
                            children: [e.jsx("div", {
                                className: "reward-img-wrap",
                                children: e.jsx("img", {
                                    alt: "quests",
                                    src: y ? he.bonus_lottery : he.quests,
                                    className: "quests"
                                })
                            }), e.jsxs("div", {
                                className: "reward-text",
                                children: [e.jsx("p", {
                                    className: "title",
                                    children: y ? a("common.welcome_bonus") : x ? x.title : a("page.bonus.quest.complete")
                                }), e.jsx("div", {
                                    className: "coin-list",
                                    children: y ? e.jsxs("span", {
                                        children: [j.amount, " ", a("page.bonus.lottery_tickets")]
                                    }) : x && e.jsx(Oe.CoinFormat, {
                                        name: j.currency,
                                        amount: j.amount,
                                        icon: !0,
                                        sign: !0,
                                        showName: !0
                                    })
                                })]
                            }), e.jsx(q, {
                                type: "conic",
                                onClick: () => (y && Ye.trackEvent("free_lottery_click", {
                                    source: "side_navi"
                                }), R(j.rewardId)),
                                children: a("page.task.receive")
                            })]
                        }, "quests-item-" + C)
                    }), c && c.length > 0 && c.map((j, C) => e.jsx(i0, {
                        hideContent: !0,
                        rewardItem: j
                    }, "reward-sidebar-item-" + C))]
                }), !r && e.jsxs(q, {
                    className: "dashboard-btn",
                    onClick: () => {
                        l("/bonus"), t && t(), ee.emit("mb-header-bonus-click")
                    },
                    children: [e.jsx("span", {
                        children: a("page.bonus.dashboard")
                    }), e.jsx(z, {
                        name: "Arrow"
                    })]
                })]
            })
        }),
        xp = Y(function(n) {
            var i = n,
                {
                    onClick: t,
                    btnText: a
                } = i,
                s = St(i, ["onClick", "btnText"]);
            const o = k(),
                r = Ve(),
                [l, c] = f.useState(!1),
                d = se.recharge.first,
                m = se.recharge.second > 0,
                h = d.status < 2,
                g = async () => {
                    if (!(l || !m))
                        if (h) ee.track.trackEvent("recharge_request"), M.get("/game/support/bonus/vr/pass/").then(() => {
                            S.emit("rewardClaim"), s.closeFn && s.closeFn()
                        }).catch(L);
                        else {
                            if (l) return;
                            c(!0);
                            const u = d.rewards[0];
                            try {
                                const p = await Hc("login");
                                M.post("/game/support/bonus/vr/receive/", {
                                    currencyName: u.currencyName,
                                    token: p
                                }).then(b => {
                                    S.emit("rewardClaim"), r.push(e.jsx(ed, {
                                        amount: u.amount,
                                        currencyName: u.currencyName
                                    })), s.closeFn && s.closeFn()
                                }).catch(L).finally(() => {
                                    c(!1)
                                })
                            } catch (p) {}
                        }
                };
            return e.jsx(Ge, Q(U({}, s), {
                loading: l,
                onClick: g,
                btnText: o(h ? "common.goactivate" : "page.task.receive")
            }))
        }),
        Ge = J.memo(function({
            have: t,
            imgSrc: a,
            imgClassName: s,
            title: n,
            url: i,
            btnText: o,
            closeFn: r,
            loading: l = !1,
            currencyInfo: c,
            onClick: d
        }) {
            const m = k(),
                h = re();
            return t ? e.jsxs("div", {
                className: "common-bonus reward-item",
                children: [e.jsx("div", {
                    className: "reward-img-wrap",
                    children: e.jsx("img", {
                        alt: "bonus",
                        src: a,
                        className: s
                    })
                }), e.jsxs("div", {
                    className: "reward-text",
                    children: [e.jsx("p", {
                        className: "title",
                        children: n
                    }), c && e.jsx("div", {
                        className: "coin-list",
                        children: e.jsx(Oe.CoinFormat, {
                            name: c.currency,
                            amount: c.amount,
                            icon: !0,
                            sign: !0,
                            showName: !0
                        })
                    })]
                }), e.jsx(q, {
                    type: d ? "conic" : "conic4",
                    loading: l,
                    onClick: g => {
                        g.stopPropagation(), d ? d() : (i && h(i), r && r())
                    },
                    children: o || m("page.task.receive")
                })]
            }) : null
        }),
        jp = "bi4127b",
        _p = Y(function() {
            const t = k(),
                a = Ke(),
                [s, n] = _e({
                    show: !1,
                    top: 0
                }),
                i = va(() => n({
                    show: !1
                })),
                {
                    deposit: o,
                    lottery: r,
                    freespin: l
                } = Na(se.depositBonus),
                {
                    lottery_winnings: c
                } = Ds(se.lotteryWinningsBonus),
                d = se.unclaimedCount + o + r + l + c,
                m = d > 0,
                h = () => {
                    if (i && i.current) {
                        const g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 5e3,
                            u = i.current.getBoundingClientRect();
                        let p = Math.max(u.top, 20);
                        g - u.top < 300 && (p = u.top - g + 44), n({
                            show: !0,
                            top: p
                        })
                    }
                };
            return e.jsx("div", {
                className: A(Cp, "bonus-link-enter"),
                children: e.jsxs("div", {
                    ref: i,
                    className: "nav-item-wrap",
                    onMouseEnter: h,
                    onMouseLeave: () => n({
                        show: !1
                    }),
                    children: [e.jsxs(Xe, {
                        className: "nav-item",
                        href: "/bonus",
                        onClick: () => {
                            ee.track.trackEvent("sidebar_click", {
                                button_name: "bonus"
                            })
                        },
                        children: [e.jsx("div", {
                            className: "nav-item-left",
                            children: e.jsx(z, {
                                name: "Gift"
                            })
                        }), e.jsxs("div", {
                            className: "nav-item-right",
                            children: [e.jsx("span", {
                                children: t("page.vip.dialog.table.head5")
                            }), m && e.jsx("div", {
                                className: "red-unclaimed-wrap",
                                children: d
                            })]
                        })]
                    }), !a && m && e.jsx(pt, {
                        children: s.show && e.jsx(ge.div, {
                            className: "unclaimed-bonus-list",
                            initial: s.top > 0 ? {
                                x: "-64px",
                                opacity: 0,
                                top: s.top
                            } : {
                                x: "-64px",
                                opacity: 0,
                                bottom: Math.abs(s.top)
                            },
                            animate: s.top > 0 ? {
                                x: "-18px",
                                opacity: 1,
                                top: s.top
                            } : {
                                x: "-18px",
                                opacity: 1,
                                bottom: Math.abs(s.top)
                            },
                            children: e.jsx("div", {
                                className: "unclaimed-bonus-list-inner",
                                children: e.jsx(Nr, {})
                            })
                        })
                    })]
                })
            })
        }),
        kp = Y(function() {
            const {
                deposit: t,
                lottery: a,
                freespin: s
            } = Na(se.depositBonus), n = se.unclaimedCount + t + a + s;
            return n <= 0 ? null : e.jsx("div", {
                className: A("mobile-number-enter", n > 10 && "small-number"),
                children: e.jsx("span", {
                    children: n
                })
            })
        }),
        Np = Y(function() {
            const t = re(),
                [a, s] = f.useState(!1),
                {
                    deposit: n,
                    lottery: i,
                    freespin: o
                } = Na(se.depositBonus),
                {
                    lottery_winnings: r
                } = Ds(se.lotteryWinningsBonus),
                l = se.unclaimedCount + n + i + o + r,
                c = va(() => {
                    s(!1), ee.mobileShadow = !1
                });
            return e.jsxs("div", {
                className: Tp,
                ref: c,
                children: [e.jsxs("button", {
                    className: A("bonus-dont-wrap", a && "open"),
                    onClick: () => {
                        l > 0 ? (s(!a), ee.mobileShadow = !a) : (t("/bonus"), ee.emit("mb-header-bonus-click"))
                    },
                    children: [e.jsx(z, {
                        name: "Gift"
                    }), l > 0 && e.jsx("div", {
                        className: A("dont", l > 10 ? "small" : ""),
                        children: e.jsx("span", {
                            children: l
                        })
                    })]
                }), e.jsx(pt, {
                    children: a && e.jsx(ge.div, {
                        className: "mobile-bonus-list-wrap",
                        initial: {
                            y: "7%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        children: e.jsx(Nr, {
                            closeFn: () => {
                                s(!1), ee.mobileShadow = !1
                            }
                        })
                    })
                })]
            })
        }),
        Cp = "pk7420m",
        Tp = "m1jf7g9y",
        Sp = Y(function() {
            return f.useEffect(() => {
                se.showNotify && L(e.jsx(rt, {
                    name: se.notifyType
                }), {
                    duration: 5e3,
                    className: "bonus-notify-wrap",
                    onClose: () => {
                        se.initFn()
                    }
                })
            }, [se.showNotify, se.notifyType]), null
        });
    let Ha, Ya, Cr;
    jd = wt(), Ha = {
        exports: {}
    }, Ya = {
        exports: {}
    };

    function Ap() {
        return Cr || (Cr = 1, function(t, a) {
            (function(s, n) {
                t.exports = n(wt())
            })(It, function(s) {
                return function() {
                    var n = s,
                        i = n.lib,
                        o = i.WordArray,
                        r = n.enc;
                    r.Base64 = {
                        stringify: function(c) {
                            var d = c.words,
                                m = c.sigBytes,
                                h = this._map;
                            c.clamp();
                            for (var g = [], u = 0; u < m; u += 3)
                                for (var p = d[u >>> 2] >>> 24 - u % 4 * 8 & 255, b = d[u + 1 >>> 2] >>> 24 - (u + 1) % 4 * 8 & 255, v = d[u + 2 >>> 2] >>> 24 - (u + 2) % 4 * 8 & 255, _ = p << 16 | b << 8 | v, T = 0; T < 4 && u + T * .75 < m; T++) g.push(h.charAt(_ >>> 6 * (3 - T) & 63));
                            var N = h.charAt(64);
                            if (N)
                                for (; g.length % 4;) g.push(N);
                            return g.join("")
                        },
                        parse: function(c) {
                            var d = c.length,
                                m = this._map,
                                h = this._reverseMap;
                            if (!h) {
                                h = this._reverseMap = [];
                                for (var g = 0; g < m.length; g++) h[m.charCodeAt(g)] = g
                            }
                            var u = m.charAt(64);
                            if (u) {
                                var p = c.indexOf(u);
                                p !== -1 && (d = p)
                            }
                            return l(c, d, h)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    };

                    function l(c, d, m) {
                        for (var h = [], g = 0, u = 0; u < d; u++)
                            if (u % 4) {
                                var p = m[c.charCodeAt(u - 1)] << u % 4 * 2,
                                    b = m[c.charCodeAt(u)] >>> 6 - u % 4 * 2,
                                    v = p | b;
                                h[g >>> 2] |= v << 24 - g % 4 * 8, g++
                            }
                        return o.create(h, g)
                    }
                }(), s.enc.Base64
            })
        }(Ya)), Ya.exports
    }
    var Tr = {
            exports: {}
        },
        Sr = {
            exports: {}
        },
        Ar;

    function Ip() {
        return Ar || (Ar = 1, function(t, a) {
            (function(s, n) {
                t.exports = n(wt())
            })(It, function(s) {
                return function() {
                    var n = s,
                        i = n.lib,
                        o = i.WordArray,
                        r = i.Hasher,
                        l = n.algo,
                        c = [],
                        d = l.SHA1 = r.extend({
                            _doReset: function() {
                                this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(m, h) {
                                for (var g = this._hash.words, u = g[0], p = g[1], b = g[2], v = g[3], _ = g[4], T = 0; T < 80; T++) {
                                    if (T < 16) c[T] = m[h + T] | 0;
                                    else {
                                        var N = c[T - 3] ^ c[T - 8] ^ c[T - 14] ^ c[T - 16];
                                        c[T] = N << 1 | N >>> 31
                                    }
                                    var D = (u << 5 | u >>> 27) + _ + c[T];
                                    T < 20 ? D += (p & b | ~p & v) + 1518500249 : T < 40 ? D += (p ^ b ^ v) + 1859775393 : T < 60 ? D += (p & b | p & v | b & v) - 1894007588 : D += (p ^ b ^ v) - 899497514, _ = v, v = b, b = p << 30 | p >>> 2, p = u, u = D
                                }
                                g[0] = g[0] + u | 0, g[1] = g[1] + p | 0, g[2] = g[2] + b | 0, g[3] = g[3] + v | 0, g[4] = g[4] + _ | 0
                            },
                            _doFinalize: function() {
                                var m = this._data,
                                    h = m.words,
                                    g = this._nDataBytes * 8,
                                    u = m.sigBytes * 8;
                                return h[u >>> 5] |= 128 << 24 - u % 32, h[(u + 64 >>> 9 << 4) + 14] = Math.floor(g / 4294967296), h[(u + 64 >>> 9 << 4) + 15] = g, m.sigBytes = h.length * 4, this._process(), this._hash
                            },
                            clone: function() {
                                var m = r.clone.call(this);
                                return m._hash = this._hash.clone(), m
                            }
                        });
                    n.SHA1 = r._createHelper(d), n.HmacSHA1 = r._createHmacHelper(d)
                }(), s.SHA1
            })
        }(Sr)), Sr.exports
    }
    var Ir;

    function Rr() {
        return Ir || (Ir = 1, function(t, a) {
            (function(s, n, i) {
                t.exports = n(wt(), Ip(), U1())
            })(It, function(s) {
                return function() {
                    var n = s,
                        i = n.lib,
                        o = i.Base,
                        r = i.WordArray,
                        l = n.algo,
                        c = l.MD5,
                        d = l.EvpKDF = o.extend({
                            cfg: o.extend({
                                keySize: 128 / 32,
                                hasher: c,
                                iterations: 1
                            }),
                            init: function(m) {
                                this.cfg = this.cfg.extend(m)
                            },
                            compute: function(m, h) {
                                for (var g, u = this.cfg, p = u.hasher.create(), b = r.create(), v = b.words, _ = u.keySize, T = u.iterations; v.length < _;) {
                                    g && p.update(g), g = p.update(m).finalize(h), p.reset();
                                    for (var N = 1; N < T; N++) g = p.finalize(g), p.reset();
                                    b.concat(g)
                                }
                                return b.sigBytes = _ * 4, b
                            }
                        });
                    n.EvpKDF = function(m, h, g) {
                        return d.create(g).compute(m, h)
                    }
                }(), s.EvpKDF
            })
        }(Tr)), Tr.exports
    }
    var Dr = {
            exports: {}
        },
        Pr;

    function Br() {
        return Pr || (Pr = 1, function(t, a) {
            (function(s, n, i) {
                t.exports = n(wt(), Rr())
            })(It, function(s) {
                s.lib.Cipher || function(n) {
                    var i = s,
                        o = i.lib,
                        r = o.Base,
                        l = o.WordArray,
                        c = o.BufferedBlockAlgorithm,
                        d = i.enc;
                    d.Utf8;
                    var m = d.Base64,
                        h = i.algo,
                        g = h.EvpKDF,
                        u = o.Cipher = c.extend({
                            cfg: r.extend(),
                            createEncryptor: function(y, x) {
                                return this.create(this._ENC_XFORM_MODE, y, x)
                            },
                            createDecryptor: function(y, x) {
                                return this.create(this._DEC_XFORM_MODE, y, x)
                            },
                            init: function(y, x, I) {
                                this.cfg = this.cfg.extend(I), this._xformMode = y, this._key = x, this.reset()
                            },
                            reset: function() {
                                c.reset.call(this), this._doReset()
                            },
                            process: function(y) {
                                return this._append(y), this._process()
                            },
                            finalize: function(y) {
                                y && this._append(y);
                                var x = this._doFinalize();
                                return x
                            },
                            keySize: 128 / 32,
                            ivSize: 128 / 32,
                            _ENC_XFORM_MODE: 1,
                            _DEC_XFORM_MODE: 2,
                            _createHelper: function() {
                                function y(x) {
                                    return typeof x == "string" ? C : E
                                }
                                return function(x) {
                                    return {
                                        encrypt: function(I, P, te) {
                                            return y(P).encrypt(x, I, P, te)
                                        },
                                        decrypt: function(I, P, te) {
                                            return y(P).decrypt(x, I, P, te)
                                        }
                                    }
                                }
                            }()
                        });
                    o.StreamCipher = u.extend({
                        _doFinalize: function() {
                            var y = this._process(!0);
                            return y
                        },
                        blockSize: 1
                    });
                    var p = i.mode = {},
                        b = o.BlockCipherMode = r.extend({
                            createEncryptor: function(y, x) {
                                return this.Encryptor.create(y, x)
                            },
                            createDecryptor: function(y, x) {
                                return this.Decryptor.create(y, x)
                            },
                            init: function(y, x) {
                                this._cipher = y, this._iv = x
                            }
                        }),
                        v = p.CBC = function() {
                            var y = b.extend();
                            y.Encryptor = y.extend({
                                processBlock: function(I, P) {
                                    var te = this._cipher,
                                        ae = te.blockSize;
                                    x.call(this, I, P, ae), te.encryptBlock(I, P), this._prevBlock = I.slice(P, P + ae)
                                }
                            }), y.Decryptor = y.extend({
                                processBlock: function(I, P) {
                                    var te = this._cipher,
                                        ae = te.blockSize,
                                        me = I.slice(P, P + ae);
                                    te.decryptBlock(I, P), x.call(this, I, P, ae), this._prevBlock = me
                                }
                            });

                            function x(I, P, te) {
                                var ae, me = this._iv;
                                me ? (ae = me, this._iv = n) : ae = this._prevBlock;
                                for (var Fe = 0; Fe < te; Fe++) I[P + Fe] ^= ae[Fe]
                            }
                            return y
                        }(),
                        _ = i.pad = {},
                        T = _.Pkcs7 = {
                            pad: function(y, x) {
                                for (var I = x * 4, P = I - y.sigBytes % I, te = P << 24 | P << 16 | P << 8 | P, ae = [], me = 0; me < P; me += 4) ae.push(te);
                                var Fe = l.create(ae, P);
                                y.concat(Fe)
                            },
                            unpad: function(y) {
                                var x = y.words[y.sigBytes - 1 >>> 2] & 255;
                                y.sigBytes -= x
                            }
                        };
                    o.BlockCipher = u.extend({
                        cfg: u.cfg.extend({
                            mode: v,
                            padding: T
                        }),
                        reset: function() {
                            var y;
                            u.reset.call(this);
                            var x = this.cfg,
                                I = x.iv,
                                P = x.mode;
                            this._xformMode == this._ENC_XFORM_MODE ? y = P.createEncryptor : (y = P.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == y ? this._mode.init(this, I && I.words) : (this._mode = y.call(P, this, I && I.words), this._mode.__creator = y)
                        },
                        _doProcessBlock: function(y, x) {
                            this._mode.processBlock(y, x)
                        },
                        _doFinalize: function() {
                            var y, x = this.cfg.padding;
                            return this._xformMode == this._ENC_XFORM_MODE ? (x.pad(this._data, this.blockSize), y = this._process(!0)) : (y = this._process(!0), x.unpad(y)), y
                        },
                        blockSize: 128 / 32
                    });
                    var N = o.CipherParams = r.extend({
                            init: function(y) {
                                this.mixIn(y)
                            },
                            toString: function(y) {
                                return (y || this.formatter).stringify(this)
                            }
                        }),
                        D = i.format = {},
                        V = D.OpenSSL = {
                            stringify: function(y) {
                                var x, I = y.ciphertext,
                                    P = y.salt;
                                return P ? x = l.create([1398893684, 1701076831]).concat(P).concat(I) : x = I, x.toString(m)
                            },
                            parse: function(y) {
                                var x, I = m.parse(y),
                                    P = I.words;
                                return P[0] == 1398893684 && P[1] == 1701076831 && (x = l.create(P.slice(2, 4)), P.splice(0, 4), I.sigBytes -= 16), N.create({
                                    ciphertext: I,
                                    salt: x
                                })
                            }
                        },
                        E = o.SerializableCipher = r.extend({
                            cfg: r.extend({
                                format: V
                            }),
                            encrypt: function(y, x, I, P) {
                                P = this.cfg.extend(P);
                                var te = y.createEncryptor(I, P),
                                    ae = te.finalize(x),
                                    me = te.cfg;
                                return N.create({
                                    ciphertext: ae,
                                    key: I,
                                    iv: me.iv,
                                    algorithm: y,
                                    mode: me.mode,
                                    padding: me.padding,
                                    blockSize: y.blockSize,
                                    formatter: P.format
                                })
                            },
                            decrypt: function(y, x, I, P) {
                                P = this.cfg.extend(P), x = this._parse(x, P.format);
                                var te = y.createDecryptor(I, P).finalize(x.ciphertext);
                                return te
                            },
                            _parse: function(y, x) {
                                return typeof y == "string" ? x.parse(y, this) : y
                            }
                        }),
                        R = i.kdf = {},
                        j = R.OpenSSL = {
                            execute: function(y, x, I, P, te) {
                                if (P || (P = l.random(64 / 8)), te) var ae = g.create({
                                    keySize: x + I,
                                    hasher: te
                                }).compute(y, P);
                                else var ae = g.create({
                                    keySize: x + I
                                }).compute(y, P);
                                var me = l.create(ae.words.slice(x), I * 4);
                                return ae.sigBytes = x * 4, N.create({
                                    key: ae,
                                    iv: me,
                                    salt: P
                                })
                            }
                        },
                        C = o.PasswordBasedCipher = E.extend({
                            cfg: E.cfg.extend({
                                kdf: j
                            }),
                            encrypt: function(y, x, I, P) {
                                P = this.cfg.extend(P);
                                var te = P.kdf.execute(I, y.keySize, y.ivSize, P.salt, P.hasher);
                                P.iv = te.iv;
                                var ae = E.encrypt.call(this, y, x, te.key, P);
                                return ae.mixIn(te), ae
                            },
                            decrypt: function(y, x, I, P) {
                                P = this.cfg.extend(P), x = this._parse(x, P.format);
                                var te = P.kdf.execute(I, y.keySize, y.ivSize, x.salt, P.hasher);
                                P.iv = te.iv;
                                var ae = E.decrypt.call(this, y, x, te.key, P);
                                return ae
                            }
                        })
                }()
            })
        }(Dr)), Dr.exports
    }(function(t, a) {
        (function(s, n, i) {
            t.exports = n(wt(), Ap(), V1, Rr(), Br())
        })(It, function(s) {
            return function() {
                var n = s,
                    i = n.lib,
                    o = i.BlockCipher,
                    r = n.algo,
                    l = [],
                    c = [],
                    d = [],
                    m = [],
                    h = [],
                    g = [],
                    u = [],
                    p = [],
                    b = [],
                    v = [];
                (function() {
                    for (var N = [], D = 0; D < 256; D++) D < 128 ? N[D] = D << 1 : N[D] = D << 1 ^ 283;
                    for (var V = 0, E = 0, D = 0; D < 256; D++) {
                        var R = E ^ E << 1 ^ E << 2 ^ E << 3 ^ E << 4;
                        R = R >>> 8 ^ R & 255 ^ 99, l[V] = R, c[R] = V;
                        var j = N[V],
                            C = N[j],
                            y = N[C],
                            x = N[R] * 257 ^ R * 16843008;
                        d[V] = x << 24 | x >>> 8, m[V] = x << 16 | x >>> 16, h[V] = x << 8 | x >>> 24, g[V] = x;
                        var x = y * 16843009 ^ C * 65537 ^ j * 257 ^ V * 16843008;
                        u[R] = x << 24 | x >>> 8, p[R] = x << 16 | x >>> 16, b[R] = x << 8 | x >>> 24, v[R] = x, V ? (V = j ^ N[N[N[y ^ j]]], E ^= N[N[E]]) : V = E = 1
                    }
                })();
                var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    T = r.AES = o.extend({
                        _doReset: function() {
                            var N;
                            if (!(this._nRounds && this._keyPriorReset === this._key)) {
                                for (var D = this._keyPriorReset = this._key, V = D.words, E = D.sigBytes / 4, R = this._nRounds = E + 6, j = (R + 1) * 4, C = this._keySchedule = [], y = 0; y < j; y++) y < E ? C[y] = V[y] : (N = C[y - 1], y % E ? E > 6 && y % E == 4 && (N = l[N >>> 24] << 24 | l[N >>> 16 & 255] << 16 | l[N >>> 8 & 255] << 8 | l[N & 255]) : (N = N << 8 | N >>> 24, N = l[N >>> 24] << 24 | l[N >>> 16 & 255] << 16 | l[N >>> 8 & 255] << 8 | l[N & 255], N ^= _[y / E | 0] << 24), C[y] = C[y - E] ^ N);
                                for (var x = this._invKeySchedule = [], I = 0; I < j; I++) {
                                    var y = j - I;
                                    if (I % 4) var N = C[y];
                                    else var N = C[y - 4];
                                    I < 4 || y <= 4 ? x[I] = N : x[I] = u[l[N >>> 24]] ^ p[l[N >>> 16 & 255]] ^ b[l[N >>> 8 & 255]] ^ v[l[N & 255]]
                                }
                            }
                        },
                        encryptBlock: function(N, D) {
                            this._doCryptBlock(N, D, this._keySchedule, d, m, h, g, l)
                        },
                        decryptBlock: function(N, D) {
                            var V = N[D + 1];
                            N[D + 1] = N[D + 3], N[D + 3] = V, this._doCryptBlock(N, D, this._invKeySchedule, u, p, b, v, c);
                            var V = N[D + 1];
                            N[D + 1] = N[D + 3], N[D + 3] = V
                        },
                        _doCryptBlock: function(N, D, V, E, R, j, C, y) {
                            for (var x = this._nRounds, I = N[D] ^ V[0], P = N[D + 1] ^ V[1], te = N[D + 2] ^ V[2], ae = N[D + 3] ^ V[3], me = 4, Fe = 1; Fe < x; Fe++) {
                                var mt = E[I >>> 24] ^ R[P >>> 16 & 255] ^ j[te >>> 8 & 255] ^ C[ae & 255] ^ V[me++],
                                    Ct = E[P >>> 24] ^ R[te >>> 16 & 255] ^ j[ae >>> 8 & 255] ^ C[I & 255] ^ V[me++],
                                    Tt = E[te >>> 24] ^ R[ae >>> 16 & 255] ^ j[I >>> 8 & 255] ^ C[P & 255] ^ V[me++],
                                    We = E[ae >>> 24] ^ R[I >>> 16 & 255] ^ j[P >>> 8 & 255] ^ C[te & 255] ^ V[me++];
                                I = mt, P = Ct, te = Tt, ae = We
                            }
                            var mt = (y[I >>> 24] << 24 | y[P >>> 16 & 255] << 16 | y[te >>> 8 & 255] << 8 | y[ae & 255]) ^ V[me++],
                                Ct = (y[P >>> 24] << 24 | y[te >>> 16 & 255] << 16 | y[ae >>> 8 & 255] << 8 | y[I & 255]) ^ V[me++],
                                Tt = (y[te >>> 24] << 24 | y[ae >>> 16 & 255] << 16 | y[I >>> 8 & 255] << 8 | y[P & 255]) ^ V[me++],
                                We = (y[ae >>> 24] << 24 | y[I >>> 16 & 255] << 16 | y[P >>> 8 & 255] << 8 | y[te & 255]) ^ V[me++];
                            N[D] = mt, N[D + 1] = Ct, N[D + 2] = Tt, N[D + 3] = We
                        },
                        keySize: 256 / 32
                    });
                n.AES = o._createHelper(T)
            }(), s.AES
        })
    })(Ha);
    var Rp = Ha.exports;
    ld = Lc(Rp);
    var Er = {
        exports: {}
    };
    (function(t, a) {
        (function(s, n, i) {
            t.exports = n(wt(), Br())
        })(It, function(s) {
            return s.mode.ECB = function() {
                var n = s.lib.BlockCipherMode.extend();
                return n.Encryptor = n.extend({
                    processBlock: function(i, o) {
                        this._cipher.encryptBlock(i, o)
                    }
                }), n.Decryptor = n.extend({
                    processBlock: function(i, o) {
                        this._cipher.decryptBlock(i, o)
                    }
                }), n
            }(), s.mode.ECB
        })
    })(Er);
    var Dp = Er.exports;
    md = Lc(Dp);
    let Lr;
    fd = Y(function() {
        const t = k(),
            a = U({}, w.dict),
            s = (() => {
                const j = [];
                return Object.keys(a).map(C => {
                    w.getRedPackageLimit(C) > 0 && j.push(a[C])
                }), j
            })().map(j => j.currencyName),
            n = s.map(j => w.dict[j]),
            i = s.indexOf("BTC") >= 0 ? "BTC" : s[0],
            o = s.indexOf(w.current) >= 0 ? w.current : i,
            [r, l] = f.useState(o),
            [c, d] = f.useState(50),
            [m, h] = f.useState(""),
            [g, u] = f.useState(!1);
        let p = w.getRedPackageLimit(r);
        const [b, v] = f.useState(w.getRedPackageLimit(o)), _ = async () => {
            try {
                const j = await ad();
                if (!j) return;
                const {
                    code: C,
                    timestamp: y,
                    verifyType: x
                } = j, I = m.length > 0 ? m : "Good Luck!";
                u(!0), await M.post("/game/support/red-packet/add/", {
                    currencyName: r,
                    amount: b,
                    number: c,
                    isSingle: 1,
                    grantType: 1,
                    type: 1,
                    content: I,
                    verifyType: x,
                    code: C,
                    remarks: m,
                    timestamp: y
                }), L(t("common.messages.send_success")), Te.back()
            } catch (j) {
                L(j), j && j.code === Bs.TWOFA_ERROR && _()
            }
            u(!1)
        }, T = async () => {
            const j = await Jc(r, !1, n);
            l(j)
        }, N = w.dict[r].amount, D = w.getAlias(r);
        let [V, E] = w.getValideMaxMin(p, N, r);
        r === "BCL" && (c < 10 ? (V = 10, p = 10) : (V = c, p = c));
        const R = b < V || b > E || m.length > 32 || g;
        return e.jsx(ne, {
            title: t("title.user_coindrop"),
            children: e.jsxs("div", {
                className: Lr,
                children: [e.jsx(Yc, {
                    label: e.jsxs(e.Fragment, {
                        children: [e.jsx("p", {
                            style: {
                                flex: "auto"
                            },
                            children: t("common.amount")
                        }), e.jsxs("p", {
                            children: [t("common.min"), ": ", p, " ", D]
                        })]
                    }),
                    className: "amount-input",
                    currencyName: r,
                    value: b,
                    onClick: T,
                    onChange: v,
                    max: E,
                    min: V
                }), e.jsx(Gc, {
                    currencyName: r
                }), e.jsx(v1, {
                    label: t("page.coindrop.person"),
                    min: 1,
                    max: 100,
                    value: c,
                    className: "people-input",
                    onChange: d,
                    children: e.jsx("div", {
                        className: "min-number",
                        children: "1~100"
                    })
                }), e.jsx(qt, {
                    label: t("page.tips.message") + t("page.tips.Optional"),
                    className: "send-textarea",
                    value: m,
                    onChange: h,
                    children: e.jsxs("div", {
                        className: m.length > 32 ? "send-error send-len" : "send-len",
                        children: [m.length, "/32"]
                    })
                }), e.jsxs("div", {
                    className: "show-amount",
                    children: [e.jsxs("span", {
                        className: "amount-num",
                        children: [b, " "]
                    }), e.jsx("span", {
                        className: "cl-primary",
                        children: D
                    })]
                }), e.jsx(q, {
                    type: "conic",
                    loading: g,
                    onClick: _,
                    disabled: R,
                    children: t("page.coindrop.btn")
                })]
            })
        })
    }), Lr = "s1xiyrbq";
    const Ga = J.memo(({
            num: t
        }) => {
            const a = k(),
                [s, n] = f.useState([]),
                [i, o] = f.useState(""),
                r = l => l.map(c => ({
                    amount: c.bonusAmount,
                    value: c.currencyName,
                    label: w.getAlias(c.currencyName)
                }));
            return f.useEffect(() => {
                let l = !0;
                if (S.login) return M.get("/game/support/bonus/" + t + "/").then(c => {
                    c.length > 0 && l && (n(r(c)), o(c[0].currencyName))
                }).catch(c => {
                    l && L(c)
                }), () => {
                    l = !1
                }
            }, []), !s || s.length === 0 ? e.jsx("div", {
                style: {
                    display: "none"
                }
            }) : e.jsxs("div", {
                className: Bp,
                children: [e.jsx("div", {
                    className: "title",
                    children: a("page.inviteRain.all")
                }), i && e.jsx(Ht, {
                    value: i,
                    options: s,
                    renderLabel: l => e.jsx(Oe.CoinFormat, {
                        name: l.value,
                        amount: new oe(l.amount).toNumber(),
                        icon: !0
                    }),
                    renderOption: l => e.jsx(Oe.CoinFormat, {
                        name: l.value,
                        amount: new oe(l.amount).toNumber(),
                        icon: !0
                    }),
                    onChange: l => {
                        o(l)
                    }
                })]
            })
        }),
        Pp = J.memo(t => {
            const a = () => {
                    const i = [];
                    for (let o = 0; o < t.number.length; o++) i.push(e.jsx("span", {
                        className: "num-wrap",
                        children: e.jsx("div", {
                            className: "num-box",
                            children: s(o)
                        })
                    }, o));
                    return i
                },
                s = i => {
                    const o = [];
                    for (let r = 0; r < (t.number.length + 3 - i) * 10; r++) {
                        const l = r + 1;
                        o.push(e.jsx("span", {
                            children: l > 9 ? l % 10 : l
                        }, "item-" + l))
                    }
                    return o
                };
            f.useEffect(() => {
                n()
            }, [t.number]);
            const n = () => {
                let i = t.number.split("");
                document.querySelectorAll(".num-wrap").forEach((o, r) => {
                    let l = t.number.length + 3 - r,
                        c = t.modefiy ? t.modefiy : l + (t.delay || 0);
                    Re.to(o, {
                        duration: c,
                        top: o.offsetHeight * (-9 - Number(i[r])) + "px"
                    })
                })
            };
            return e.jsx("div", {
                className: Ep,
                children: e.jsx("div", {
                    className: "scroll-number",
                    children: a()
                })
            })
        }),
        Bp = "ch0mwdb",
        Ep = "s1ob58li";
    _d = function() {
        const t = k();
        return e.jsx(ne, {
            title: t("title.bonus_crocodile", "COCO"),
            children: e.jsx(le, {
                children: e.jsxs("div", {
                    className: Lp,
                    children: [e.jsx(Ga, {
                        num: 2
                    }), e.jsxs("div", {
                        className: "sub-title",
                        children: [t("title.bonus_crocodile", "COCO"), e.jsxs("span", {
                            className: "theme",
                            children: ["(", t("title.user_level"), "14)"]
                        })]
                    }), e.jsxs("ol", {
                        className: "content",
                        children: [e.jsx("li", {
                            children: t("page.inviteCro.line1.content.0", "COCO", "COCO")
                        }), e.jsx("li", {
                            children: t("page.inviteCro.line1.content.1", w.getAlias("BCD"))
                        }), e.jsx("li", {
                            children: t("page.inviteCro.line1.content.2", w.getAlias("BCD"))
                        })]
                    })]
                })
            })
        })
    }, Ie({
        cl1: [ie("#99a4b0", .8), ie("#5f6975", .6)],
        cl2: ["#99a4b0", "#5f6975"],
        cl3: ["#17181b", "#f5f6fa"],
        cl4: ["#99a4b0", ie("#5f6975", .8)]
    });
    const Lp = "c1810ndf";
    gd = function() {
        const t = k();
        return e.jsx(ne, {
            title: t("title.user_rain"),
            children: e.jsx(le, {
                children: e.jsxs("div", {
                    className: Fp,
                    children: [e.jsx(Ga, {
                        num: 3
                    }), e.jsx("div", {
                        className: "title",
                        children: t("title.user_rain")
                    }), e.jsxs("div", {
                        className: "theme",
                        children: ["(", t("title.user_level"), "4)"]
                    }), e.jsxs("ol", {
                        children: [e.jsx("li", {
                            children: t("page.inviteRain.line1.content.0")
                        }), e.jsx("li", {
                            children: t("page.inviteRain.line1.content.1")
                        }), e.jsx("li", {
                            children: t("page.inviteRain.line1.content.2")
                        }), e.jsx("li", {
                            children: t("page.inviteRain.line1.content.3")
                        }), e.jsx("li", {
                            children: t("page.inviteRain.line1.content.4")
                        }), e.jsx("li", {
                            children: t("page.inviteBonus.line1.content.4")
                        })]
                    }), e.jsx("div", {
                        className: "sub-title more-title",
                        children: t("page.inviteBonus.line2.title")
                    }), e.jsxs("div", {
                        className: "example",
                        children: [e.jsxs("div", {
                            className: "example-title",
                            children: [e.jsx(Yt, {
                                name: "BC.GAME",
                                userId: 0
                            }), e.jsx("div", {
                                className: "name ttu",
                                children: "BC.GAME"
                            }), e.jsx(z, {
                                name: "Official"
                            })]
                        }), e.jsxs("div", {
                            className: "example-content",
                            children: [e.jsx("div", {
                                children: t("page.rain.title")
                            }), e.jsxs("div", {
                                className: "content-item",
                                children: [e.jsx("div", {
                                    className: "item",
                                    children: "@Jachk:888TRX"
                                }), e.jsx("div", {
                                    className: "item",
                                    children: "@Blrr:888TRX"
                                }), e.jsx("div", {
                                    className: "item",
                                    children: "@Pokiuutt:888TRX"
                                }), e.jsx("div", {
                                    className: "item",
                                    children: "@Liisdt:888TRX"
                                }), e.jsx("div", {
                                    className: "item",
                                    children: "@Yoiohu:888TRX"
                                }), e.jsx("div", {
                                    className: "item",
                                    children: "@Loidr:888TRX"
                                })]
                            }), e.jsx("div", {
                                children: t("page.coindrop.congratulations")
                            })]
                        })]
                    })]
                })
            })
        })
    }, Ie({
        cl1: [ie("#99a4b0", .8), ie("#5f6975", .6)],
        cl2: ["#f5f6f7", "#31373d"],
        cl3: ["#99a4b0", "#5f6975"],
        cl4: [ie("#99a4b0", .8), ie("#5f6975", .8)],
        cl5: ["#1a1b1e", "#f6f7fa"]
    });
    const Fp = "rpr3j3";
    let Fr, Or, Ja, Qa, Za;
    Fr = () => M.get("/game/support/get-roll/"), Or = () => M.get("/game/support/roll/get-user/"), Ja = () => M.get("/game/support/roll-purview/"), Qa = t => {
        let a;
        return a = t.toString(), t < 10 ? a = "00" + a : t < 100 && (a = "0" + a), a
    }, Za = t => {
        let a = parseInt(t % 864e5 / 36e5),
            s = parseInt(t % (1e3 * 60 * 60) / (1e3 * 60)),
            n = parseInt(t % (1e3 * 60) / 1e3);
        return a = a < 10 ? "0" + a : a, s = s < 10 ? "0" + s : s, n = n < 10 && n >= 1 ? "0" + n : n, a + ":" + s + ":" + n
    }, kd = function() {
        const t = k(),
            [a, s] = f.useState("000"),
            [n, i] = f.useState(-9999),
            [o, r] = f.useState(0),
            [l, c] = f.useState({
                allAmount: "",
                currencyName: "",
                list: []
            }),
            d = S.bonusCurrencyName !== "BCD",
            m = f.useRef(),
            h = f.useRef(!0);
        f.useEffect(() => (u(!0), () => {
            h.current = !1;
            try {
                clearInterval(m.current)
            } catch (v) {}
        }), []);
        const g = v => {
                let _ = v;
                _ > 0 && (m.current = setInterval(() => {
                    _ < 1e3 ? (Ja().then(T => r(T)).catch(L), clearInterval(m.current)) : (_ = _ > 0 ? _ - 1e3 : _, i(_))
                }, 1e3))
            },
            u = v => Promise.all([Fr(), Or(), Ja()]).then(_ => {
                h.current && (v && s(Qa(_[0].roll)), i(_[0].currentTime), c(_[1]), r(_[2]), g(_[0].currentTime))
            }).catch(L),
            p = v => !v || v.length === 0 ? null : v.map((_, T) => e.jsx(Rt, {
                title: Za(_.createTime),
                children: e.jsxs("tr", {
                    children: [e.jsx("td", {
                        className: "darken",
                        children: _.sort
                    }), e.jsx("td", {
                        children: e.jsx("div", {
                            className: "ellipsis",
                            children: _.userName
                        })
                    }), e.jsx("td", {
                        className: "darken",
                        children: _.roll
                    }), e.jsx("td", {
                        className: "flex-center right-img",
                        children: d ? e.jsxs(e.Fragment, {
                            children: [e.jsx(De, {
                                name: S.bonusCurrencyName
                            }), " ", w.locale2amount(_.rollAmountStr, S.bonusCurrencyName, w.getUsdPrice(_.currencyName)).toFixed(2), " ", w.getAlias(S.bonusCurrencyName)]
                        }) : e.jsxs(e.Fragment, {
                            children: [e.jsx(De, {
                                name: _.currencyName
                            }), " ", _.rollAmountStr, " ", w.getAlias(_.currencyName)]
                        })
                    })]
                })
            }, "body-" + T)),
            b = () => {
                if (o === 0) return !1;
                ee.track.trackEvent("roll_click"), M.get("/game/support/click-roll/").then(v => {
                    s(Qa(v.roll)), S.emit("rewardClaim"), u()
                }).catch(L)
            };
        return e.jsx(ne, {
            title: t("title.bonus_roll"),
            children: e.jsx(le, {
                children: e.jsxs("div", {
                    className: Op,
                    children: [e.jsx(Ga, {
                        num: 5
                    }), e.jsxs("div", {
                        className: "ir-top",
                        children: [e.jsx("div", {
                            className: "ir-title sub-title",
                            children: t("page.inviteRoll.title")
                        }), e.jsxs("div", {
                            className: "ir-cont",
                            children: [t("page.inviteRoll.cont"), e.jsxs("span", {
                                className: "theme bold",
                                children: ["(", t("title.user_level"), "3)"]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "ir-control",
                        children: [e.jsxs("div", {
                            className: "display-wrap flex-center",
                            children: [e.jsx(Pp, {
                                number: a
                            }), e.jsx("div", {
                                className: "display-num"
                            }), e.jsx("div", {
                                className: "display-num"
                            }), e.jsx("div", {
                                className: "display-num"
                            })]
                        }), e.jsx("div", {
                            className: "roll-butwrap",
                            children: e.jsx(q, {
                                type: "conic",
                                disabled: o === 0,
                                onClick: b,
                                className: "roll-button ttu",
                                children: t("title.bonus_roll")
                            })
                        }), e.jsxs("div", {
                            className: "roll-desc",
                            children: [e.jsxs("div", {
                                className: "roll-time",
                                children: [t("page.inviteRoll.endTime"), " ", n > 0 ? Za(n) : "00:00:00"]
                            }), e.jsxs("div", {
                                className: "roll-chance",
                                children: [t("page.inviteRoll.changce"), "\xA0", e.jsx("span", {
                                    className: "theme",
                                    children: o
                                })]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "ir-amount",
                        children: [t("page.inviteRoll.toDay"), e.jsx("span", {
                            className: "theme",
                            children: d ? ` ${w.locale2amount(Number(l.allAmount),S.bonusCurrencyName).toFixed(2)} ${w.getAlias(S.bonusCurrencyName)}` : ` ${l.allAmount} ${w.getAlias(l.currencyName)}`
                        })]
                    }), e.jsx("div", {
                        className: "roll-table",
                        children: e.jsxs("table", {
                            children: [e.jsx("thead", {
                                children: e.jsxs("tr", {
                                    children: [e.jsx("th", {
                                        children: t("page.inviteRoll.rank")
                                    }), e.jsx("th", {
                                        children: t("common.player")
                                    }), e.jsx("th", {
                                        children: t("common.result")
                                    }), e.jsx("th", {
                                        children: t("title.bonus")
                                    })]
                                })
                            }), e.jsx("tbody", {
                                className: "records",
                                children: p(l.list)
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "ir-bottom",
                        children: [e.jsx("div", {
                            className: "ir-bot-list",
                            dangerouslySetInnerHTML: {
                                __html: t("page.inviteRoll.cont_1")
                            }
                        }), e.jsx("div", {
                            className: "ir-bot-list",
                            dangerouslySetInnerHTML: {
                                __html: t("page.inviteRoll.cont_2", "JB")
                            }
                        })]
                    })]
                })
            })
        })
    }, Ie({
        cl1: [ie("#99a4b0", .8), ie("#5f6975", .6)],
        cl2: ["#f5f6f7", "#31373d"],
        cl3: ["#17181b", "#f5f6fa"],
        cl4: ["#272b30", "#dadde6"],
        cl5: [ie("#99a4b0", .6), ie("#5f6975", .8)],
        cl6: ["#99a4b0", ie("#5f6975", .8)],
        cl7: ["#99a4b0", "#5f6975"]
    });
    const Op = "r1a8icoi";
    let Mr, Wr, Ur;
    Mr = () => {
        const t = k();
        return e.jsx("div", {
            className: Wr,
            children: e.jsx("div", {
                className: "desc",
                children: t("page.tips.bigtip.info")
            })
        })
    }, Wr = "b1e2xje9", Ur = t => {
        const a = k(),
            [s, n] = f.useState(w.current || "BTC"),
            [i, o] = f.useState(!0),
            [r, l] = f.useState({}),
            [c, d] = f.useState(0),
            [m, h] = f.useState(a("page.tips.notice")),
            [g, u] = f.useState(!0);
        let p = !0;
        if (!t.userId || !t.name) return e.jsx("div", {});
        f.useEffect(() => (b(s), () => {
            p = !1
        }), []), w.dict[s].amount;
        const b = R => {
                let j = R;
                return R === "JB" && (L(new Error(a("common.jbnotsuport"))), j = "BTC"), i || o(!0), M.post("/game/support/tip/index/", {
                    currencyName: j,
                    toUserId: t.userId
                }).then(C => {
                    p && (l({
                        time: C.fromUserCount,
                        maxM: T(Number(C.maxAmount), j),
                        minM: T(Number(C.minAmount), j)
                    }), n(j), d(T(Number(C.minAmount), j)), o(!1))
                }).catch(C => {
                    L(C), Te.back()
                })
            },
            v = async () => {
                const R = _();
                if (R >= r.minM * 1e3 && !await ke.confirm(e.jsx(Mr, {}))) return;
                const j = await ad();
                if (!j) return;
                const {
                    code: C,
                    timestamp: y,
                    verifyType: x
                } = j;
                try {
                    await M.post("/game/support/tip/click/", {
                        toUserId: t.userId,
                        currencyName: s,
                        amount: Number(R),
                        remarks: g ? "" : m,
                        verifyType: x,
                        code: C,
                        timestamp: y,
                        privateTip: g
                    }), L(a("common.messages.gift_success")), Te.back()
                } catch (I) {
                    L(I), I && I.code === Bs.TWOFA_ERROR && v()
                }
            },
            _ = () => {
                const R = w.getPrecision(s),
                    j = Number(c).toFixed(R);
                return Number(j) < Number(r.minM) ? r.minM : Number(j) > Number(r.maxM) ? r.maxM : j
            },
            T = (R, j) => {
                const C = w.getPrecision(j);
                return Number(R).toFixed(C)
            },
            N = async () => {
                const R = await Jc(s);
                n(R), b(R)
            },
            [D, V] = w.getValideMaxMin(r.minM, r.maxM, s),
            E = R => {
                d(s === "BCL" ? Math.ceil(R) : R)
            };
        return e.jsx(ne, {
            title: a("title.user_sendtip"),
            children: i ? e.jsx(pe, {}) : e.jsxs(le, {
                className: Mp,
                children: [e.jsxs("div", {
                    className: "form-avatar",
                    children: [e.jsx(Yt, {
                        userId: t.userId,
                        name: t.name
                    }), t.level >= 0 && e.jsx(z1, {
                        level: t.level
                    }), e.jsx("div", {
                        className: "user-name2",
                        children: t.name
                    })]
                }), e.jsx(Yc, {
                    label: e.jsxs("div", {
                        className: "amount-label",
                        children: [e.jsx("p", {
                            children: a("page.tips.tip_amount")
                        }), e.jsxs("p", {
                            children: [r.minM, "~", r.maxM, " ", w.getAlias(s)]
                        })]
                    }),
                    currencyName: s,
                    onClick: N,
                    className: "amount-input",
                    value: c,
                    onChange: E,
                    max: V,
                    min: D
                }), e.jsx(Gc, {
                    currencyName: s
                }), !g && e.jsx(qt, {
                    label: a("page.tips.message") + a("page.tips.Optional"),
                    className: "send-textarea",
                    value: m,
                    onChange: h,
                    children: e.jsxs("div", {
                        className: m.length > 150 ? "send-error send-len" : "send-len",
                        children: [m.length, "/150"]
                    })
                }), e.jsxs("div", {
                    className: A("priave", g && "top"),
                    children: [e.jsx(w1, {
                        className: "switch",
                        value: g,
                        type: "checkbox",
                        onChange: () => {
                            u(!g)
                        }
                    }), e.jsx("span", {
                        className: "txt",
                        onClick: () => u(!g),
                        children: a("page.tips.bigtip.private")
                    })]
                }), e.jsx(q, {
                    type: "conic",
                    onClick: v,
                    className: "tip-btn",
                    disabled: m.length > 150,
                    children: a("page.tips.gift")
                })]
            })
        })
    }, yd = J.memo(function() {
        const t = ft();
        if (!t.userid || !t.username) return null;
        const a = t.userid || "0";
        return e.jsx(Ur, {
            userId: Number(a),
            name: t.username || ""
        })
    }), Ie({
        cl1: ["#464646", "#dfdfdf"],
        cl2: ["#f5f6f7", "#31373d"],
        cl3: [ie("#99a4b0", .6), "rgba(95, 105, 117, 0.8)"],
        cl4: ["#2d3035", "#e9eaf2"],
        cl5: ["rgba(45, 48, 53, 0.5)", "#f6f7fa"]
    });
    const Mp = "sbfa4f1",
        Wp = J.memo(function() {
            const t = et();
            return e.jsxs("svg", {
                width: "16",
                height: "15",
                viewBox: "0 0 16 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("path", {
                    d: "M12.0621 7.32942C12.0621 7.71777 11.7291 8.0328 11.3174 8.0328C10.9056 8.0328 10.5732 7.7183 10.5732 7.32942V6.65686C10.5732 6.26852 10.9062 5.95348 11.3174 5.95348C11.7286 5.95348 12.0621 6.26852 12.0621 6.65686V7.32942ZM8.77487 7.32942C8.77487 7.71777 8.44187 8.0328 8.03012 8.0328C7.61837 8.0328 7.28593 7.7183 7.28593 7.32942V6.65686C7.28593 6.26852 7.61893 5.95348 8.03012 5.95348C8.44131 5.95348 8.77487 6.26852 8.77487 6.65686V7.32942ZM3.99924 6.65739C3.99924 6.26905 4.33224 5.95402 4.74343 5.95402C5.15462 5.95402 5.48818 6.26905 5.48818 6.65739V7.32995C5.48818 7.7183 5.15462 8.03333 4.74343 8.03333C4.33224 8.03333 3.99924 7.71883 3.99924 7.32995V6.65739ZM8.69556 0.642578H7.40068C3.80574 0.642578 0.890869 3.39498 0.890869 6.7902C0.890869 6.80348 0.893119 6.81623 0.893119 6.82952L0.890869 6.82739V13.4175C0.890869 13.8792 1.42074 14.1677 1.84374 13.936L4.70293 12.38C5.52531 12.7349 6.43712 12.9378 7.40068 12.9378H8.69556C12.2905 12.9378 15.2048 10.1854 15.2048 6.7902C15.2048 3.39498 12.2905 0.642578 8.69556 0.642578Z",
                    fill: "url(#paint0_linear_430_56)"
                }), e.jsx("defs", {
                    children: e.jsxs("linearGradient", {
                        id: "paint0_linear_430_56",
                        x1: "8.04784",
                        y1: "0.642578",
                        x2: "8.04784",
                        y2: "14.0177",
                        gradientUnits: "userSpaceOnUse",
                        children: [e.jsx("stop", {
                            stopColor: "#B5B5B5"
                        }), e.jsx("stop", {
                            offset: "0.671875",
                            stopColor: t ? "white" : "black"
                        }), e.jsx("stop", {
                            offset: "1",
                            stopColor: t ? "white" : "black"
                        })]
                    })
                })]
            })
        }),
        Ft = J.memo(function({
            children: t,
            className: a,
            isChat: s,
            isTop: n = !1
        }) {
            const [i, o] = f.useState(!1), r = va(() => o(!1));
            return e.jsx("div", {
                className: A(Up, "tips-wrap", a),
                children: e.jsxs("div", {
                    className: "in",
                    ref: r,
                    onMouseEnter: () => o(!0),
                    onMouseLeave: () => o(!1),
                    children: [e.jsx("button", {
                        onClick: l => {
                            l.preventDefault(), o(!i)
                        },
                        children: s ? e.jsx(Wp, {}) : e.jsx(z, {
                            name: "Inform"
                        })
                    }), e.jsx(pt, {
                        children: i && e.jsx(ge.div, {
                            className: "hover-show",
                            initial: {
                                y: n ? "-102%" : "2%",
                                opacity: 0
                            },
                            animate: {
                                y: n ? "-100%" : "0%",
                                opacity: 1
                            },
                            children: e.jsx("div", {
                                className: "anim-inner",
                                children: t
                            })
                        })
                    })]
                })
            })
        }),
        Up = "t1qe5ami";

    function Vp(t) {
        const a = k();
        let s = {
            className: "",
            title: ""
        };
        switch (t) {
            case ot.None:
                {
                    s = {
                        className: "nostage",
                        title: ""
                    };
                    break
                }
            case ot.Bronze:
                {
                    s = {
                        className: "bronze",
                        title: a("vip.bronze")
                    };
                    break
                }
            case ot.Silver:
                {
                    s = {
                        className: "silver",
                        title: a("vip.silver")
                    };
                    break
                }
            case ot.Gold:
                {
                    s = {
                        className: "gold",
                        title: a("vip.gold")
                    };
                    break
                }
            case ot.Platinum_I:
                {
                    s = {
                        className: "platinum platinumi",
                        title: `${a("vip.platinum")} I`
                    };
                    break
                }
            case ot.Platinum_II:
                {
                    s = {
                        className: "platinum platinumii",
                        title: `${a("vip.platinum")} II`
                    };
                    break
                }
            case ot.Diamond_I:
                {
                    s = {
                        className: "diamond diamondi",
                        title: `${a("vip.diamond")} I`
                    };
                    break
                }
            case ot.Diamond_II:
                {
                    s = {
                        className: "diamond diamondii",
                        title: `${a("vip.diamond")} II`
                    };
                    break
                }
            case ot.Diamond_III:
                {
                    s = {
                        className: "diamond diamondiii",
                        title: `${a("vip.diamond")} III`
                    };
                    break
                }
            default:
                {
                    s = {
                        className: "nostage",
                        title: ""
                    };
                    break
                }
        }
        return s
    }
    const zp = Y(function() {
            const {
                account: t,
                wallet: a
            } = Ee(), s = k(), n = t.vipLevel, i = t.getLevelInfo(n), o = Vp(i.type), r = t.getUserLevelInfo(n), l = t.getUserLevelInfo(n + 1), c = Math.floor(t.vipInfo.currXP - t.vipInfo.levelStartXP), d = Math.round(t.vipInfo.levelEndXP - t.vipInfo.levelStartXP), m = Math.floor(c / d * 100), h = Math.min(m, 100);
            return e.jsx("div", {
                className: A($p, o.className),
                children: e.jsxs("div", {
                    className: "card-inner",
                    children: [e.jsxs("div", {
                        className: "left-img",
                        children: [e.jsx("img", {
                            className: "level-img",
                            src: c0(i.type),
                            alt: ""
                        }), e.jsx("img", {
                            className: "img-light",
                            src: G.light
                        }), e.jsxs("div", {
                            className: "level",
                            children: [o.title && e.jsx("div", {
                                className: "txt1",
                                children: o.title
                            }), e.jsxs("div", {
                                className: "txt2",
                                children: [e.jsx("span", {
                                    children: r.vipType
                                }), e.jsx("span", {
                                    className: "n",
                                    children: r.vipLevel
                                })]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "right-process",
                        children: [e.jsx("p", {
                            className: "p-t",
                            children: s("common.welcome.desc2")
                        }), e.jsxs("div", {
                            className: "l-t",
                            children: [e.jsxs("span", {
                                children: [a.numberWithCommas(c), " XP"]
                            }), e.jsx(Ft, {
                                children: e.jsxs("div", {
                                    className: "tips-wrap",
                                    children: [e.jsx("p", {
                                        children: s("vip.wager")
                                    }), e.jsx("p", {
                                        children: s("vip.wagerdesc")
                                    })]
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "process-wrap",
                            children: [e.jsx("div", {
                                className: "process-bg",
                                children: e.jsx("div", {
                                    className: "process-step",
                                    style: {
                                        width: `${h}%`
                                    },
                                    children: h > 0 && e.jsxs(e.Fragment, {
                                        children: [e.jsx("div", {
                                            className: "dont-1"
                                        }), e.jsx("div", {
                                            className: "dont-2"
                                        }), e.jsx("div", {
                                            className: "dont-3"
                                        })]
                                    })
                                })
                            }), e.jsx("div", {
                                className: "level-xp",
                                children: e.jsxs("div", {
                                    className: "r-t",
                                    children: [e.jsxs("span", {
                                        children: [a.numberWithCommas(Math.ceil(d - c)), " XP"]
                                    }), e.jsx("span", {
                                        className: "r-s",
                                        children: s("common.until")
                                    }), e.jsxs("span", {
                                        className: "ttu",
                                        children: [l.vipType, " ", l.vipLevel]
                                    })]
                                })
                            })]
                        })]
                    })]
                })
            })
        }),
        $p = "c1wenbfs";
    class qp {
        constructor() {
            Z(this, "loading", !0);
            Z(this, "hostCard", null);
            ka(this, {
                loading: we,
                hostCard: we
            })
        }
        async syncVipData() {
            try {
                await S.inited;
                const a = await M.get("/game/support/vip/get/");
                S.vipInfo = Q(U({}, S.vipInfo), {
                    currXP: a.totalXp
                }), this.hostCard = a.hostCard, this.loading = !1
            } catch (a) {
                L(a)
            }
        }
    }
    const sa = new qp;

    function Hp(t, a = !0) {
        const s = new Date().getTimezoneOffset() / 60,
            n = a ? t - 36e5 * s : t + 36e5 * s;
        return n >= 0 ? n : 864e5 + n
    }

    function Vr(t) {
        t = Hp(t);
        const a = 60 * 1e3,
            s = 60 * a,
            n = Math.floor(t / s),
            i = Math.floor(t % s / a),
            o = i < 10 ? `0${i}` : i,
            r = n > 24;
        let l = n;
        r && (l = n - 24);
        const c = l > 12;
        return c && (l = n - 12), `${l} : ${o} ${c?"pm":"am"}`
    }
    const Yp = Y(function() {
            return e.jsx("div", {
                className: Qp,
                children: sa.hostCard ? e.jsx(Gp, {
                    data: sa.hostCard
                }) : e.jsx(Jp, {})
            })
        }),
        Gp = Y(function({
            data: t
        }) {
            const a = k(),
                s = re(),
                {
                    account: n
                } = Ee(),
                i = n.getUserLevelInfo(n.vipLevel),
                o = !!t.onlineStatus;
            return e.jsxs("div", {
                className: Zp,
                children: [e.jsx("div", {
                    className: "host-top-wrap",
                    children: e.jsx("div", {
                        className: "top-tit",
                        style: {
                            backgroundColor: i.vipLevelColor
                        },
                        children: a("vip.host")
                    })
                }), e.jsxs("div", {
                    className: "host-wrap",
                    children: [e.jsxs("div", {
                        className: "host-info",
                        children: [e.jsxs("div", {
                            className: A("avatar-wrap", !o && "offline", t.nftAvatarLink && "nft"),
                            style: {
                                backgroundColor: i.vipLevelColor
                            },
                            children: [e.jsx(Yt, {
                                userId: t.userId,
                                name: t.name
                            }), t.nftAvatarLink && e.jsx("img", {
                                className: "nft-img",
                                src: G.nft
                            })]
                        }), e.jsxs("div", {
                            className: "right-host-wrap",
                            children: [e.jsxs("div", {
                                className: "name-icon",
                                children: [e.jsx("p", {
                                    children: t.name
                                }), e.jsx(Ft, {
                                    isChat: !0,
                                    children: e.jsx("span", {
                                        className: "desc-tips",
                                        children: x1(t.description)
                                    })
                                })]
                            }), e.jsxs("p", {
                                className: "work-time",
                                children: [a("common.online"), ":", Vr(t.workingHoursStart), "-", Vr(t.workingHoursEnd)]
                            }), t.nftAvatarLink && e.jsxs("a", {
                                className: "nft-link",
                                href: t.nftAvatarLink,
                                target: "_blank",
                                children: [e.jsx("div", {
                                    className: "nft-wrap",
                                    children: e.jsx("span", {
                                        children: "NFT"
                                    })
                                }), e.jsx("span", {
                                    className: "nft-name",
                                    children: t.nftLabelName
                                }), e.jsx(z, {
                                    name: "Arrow"
                                })]
                            })]
                        })]
                    }), e.jsx(q, {
                        type: "conic",
                        onClick: () => s(`#/chat/${t.userId}`),
                        children: a(o ? "common.chat_now" : "common.leave_message")
                    })]
                })]
            })
        }),
        Jp = J.memo(function() {
            const t = k(),
                a = et(),
                {
                    account: s
                } = Ee(),
                n = s.getUserLevelInfo(s.vipLevel);
            return e.jsxs("div", {
                className: Kp,
                children: [e.jsxs("div", {
                    className: "lock-top-wrap",
                    children: [e.jsx("div", {
                        className: "top-tit",
                        style: {
                            backgroundColor: n.vipLevelColor
                        },
                        children: t("vip.host")
                    }), e.jsx(Ft, {
                        children: e.jsx("p", {
                            children: t("vip.host.desc")
                        })
                    })]
                }), e.jsxs("div", {
                    className: "lock-img-wrap",
                    children: [e.jsx("img", {
                        className: "img-locked",
                        src: a ? G.host : G.host_w
                    }), e.jsx("div", {
                        className: "locked-msg",
                        dangerouslySetInnerHTML: {
                            __html: t("vip.host.unlock")
                        }
                    })]
                })]
            })
        }),
        Qp = "h18neflu",
        Zp = "hid2ywv",
        Kp = "lcwqwsn";

    function Xp() {
        const t = bt();
        return (a, s) => {
            let n = "",
                i = "";
            const o = t.enableLocaleCurrency;
            a >= 1e3 && (n = (o ? Math.floor(w.amount2locale(a, "USDFIAT") / 100) / 10 : Math.floor(a / 100) / 10) + "k"), s && s >= 1e3 && (i = (o ? Math.floor(w.amount2locale(s, "USDFIAT") / 100) / 10 : Math.floor(s / 100) / 10) + "k");
            const r = o ? w.localCurrency.cs : "$";
            return i ? `${r}${n} - ${i}` : `${r}${n}+`
        }
    }
    const eh = Y(function({
            tiers: t
        }) {
            const a = k(),
                s = Xp();
            return e.jsxs("div", {
                className: A(th, "tier-tip"),
                children: [e.jsx("p", {
                    className: "tip-title",
                    dangerouslySetInnerHTML: {
                        __html: a("page.recharge.about.desc_5")
                    }
                }), e.jsx("div", {
                    className: "tier-list",
                    children: t.map(n => e.jsxs("div", {
                        className: "tier-item",
                        children: [e.jsxs("div", {
                            className: "tit",
                            children: [a("page.tier.tit"), " ", n.index, " - ", n.tireName, e.jsxs("span", {
                                className: "desc",
                                children: ["(", s(n.startWager, n.endWager), ")"]
                            })]
                        }), e.jsxs("span", {
                            className: "cl-pr",
                            children: [new oe(n.vipRechargeRate).mul(100).toString(), "%"]
                        })]
                    }, n.index))
                })]
            })
        }),
        th = "tnbfviw",
        ah = J.memo(function() {
            const t = k();
            return e.jsxs("ul", {
                children: [e.jsxs("li", {
                    children: [e.jsx("span", {
                        children: t("page.bonus.sports.rule1")
                    }), e.jsx("br", {}), e.jsxs("span", {
                        children: ["$500-$2,499 = $5 ", t("page.vip.dialog.table.head5")]
                    }), e.jsx("br", {}), e.jsxs("span", {
                        children: ["$2,500-$4,999 = $30 ", t("page.vip.dialog.table.head5")]
                    }), e.jsx("br", {}), e.jsxs("span", {
                        children: ["$5,000-$9,999 = $70 ", t("page.vip.dialog.table.head5")]
                    }), e.jsx("br", {}), e.jsxs("span", {
                        children: ["$10,000+ = $150 ", t("page.vip.dialog.table.head5")]
                    })]
                }), e.jsx("li", {
                    children: t("page.bonus.sports.rule2")
                }), e.jsx("li", {
                    children: t("page.bonus.sports.rule3")
                })]
            })
        });

    function sh() {
        const t = k();
        return [{
            label: t("vip.bronze"),
            img: G.bronze_mini,
            desc: "VIP 2-7"
        }, {
            label: t("vip.silver"),
            img: G.silver_mini,
            desc: "VIP 8-21"
        }, {
            label: t("vip.gold"),
            img: G.gold_mini,
            desc: "VIP 22-37"
        }, {
            label: `${t("vip.platinum")} I`,
            img: G.platinum_mini,
            desc: "VIP 38-55"
        }, {
            label: `${t("vip.platinum")} II`,
            img: G.platinum_mini,
            desc: "VIP 56-69"
        }, {
            label: `${t("vip.diamond")} I`,
            img: G.diamond_mini,
            desc: "SVIP 1-15"
        }, {
            label: `${t("vip.diamond")} II`,
            img: G.diamond_mini,
            desc: "SVIP 16-37"
        }, {
            label: `${t("vip.diamond")} III`,
            img: G.diamond_mini,
            desc: "SVIP 38-55"
        }]
    }

    function nh() {
        const t = k();
        return [
            [{
                title: t("vip.benefits.levelupbonus"),
                isLevelUp: !0,
                img: G.secret
            }, {
                title: t("vip.benefits.raining"),
                desc: t("vip.bonus.rain"),
                img: G.rain
            }, {
                title: t("vip.benefits.coindrops"),
                desc: t("vip.bonus.coindrop"),
                img: G.coindrop
            }],
            [{
                title: t("vip.benefits.levelupbonus"),
                isLevelUp: !0,
                img: G.secret
            }, {
                title: t("vip.benefits.tips"),
                desc: t("vip.bonus.tips"),
                img: G.tips
            }, {
                title: t("page.bonus.spin_vip"),
                desc: t("vip.bonus.vipspin"),
                img: G.vipspin
            }],
            [{
                title: t("vip.benefits.levelupbonus"),
                isLevelUp: !0,
                img: G.secret
            }, {
                title: t("page.recharge.recharge"),
                isRecharge: !0,
                img: G.recharge
            }, {
                title: t("vip.benefits.weeklybonus"),
                isWeekly: !0,
                img: G.weekly
            }, {
                title: t("vip.benefits.monthlybonus"),
                isMonthly: !0,
                img: G.weekly
            }, {
                title: t("page.bonus.sports.weekly"),
                desc: t("vip.bonus.sports"),
                isSports: !0,
                img: G.football
            }, {
                title: t("page.bonus.spin_vip"),
                desc: t("vip.bonus.vipspin"),
                img: G.vipspin
            }],
            [{
                title: t("vip.benefits.levelupbonus"),
                isLevelUp: !0,
                img: G.secret
            }, {
                title: t("page.recharge.recharge"),
                isRecharge: !0,
                img: G.recharge
            }, {
                title: t("vip.benefits.weeklybonus"),
                isWeekly: !0,
                img: G.weekly
            }, {
                title: t("vip.benefits.monthlybonus"),
                isMonthly: !0,
                img: G.weekly
            }, {
                title: t("page.bonus.sports.weekly"),
                desc: t("vip.bonus.sports"),
                isSports: !0,
                img: G.football
            }, {
                title: t("vip.host"),
                desc: t("vip.bonus.host"),
                img: G.service
            }, {
                title: t("vip.benefits.nofeewithdraw"),
                desc: t("vip.bonus.nofee"),
                img: G.coin
            }, {
                title: t("page.bonus.spin_vip"),
                desc: t("vip.bonus.vipspin"),
                img: G.vipspin
            }],
            [{
                title: t("vip.benefits.levelupbonus"),
                isLevelUp: !0,
                img: G.secret
            }, {
                title: t("page.recharge.recharge"),
                isRecharge: !0,
                img: G.recharge
            }, {
                title: t("vip.benefits.weeklybonus"),
                isWeekly: !0,
                img: G.weekly
            }, {
                title: t("vip.benefits.monthlybonus"),
                isMonthly: !0,
                img: G.weekly
            }, {
                title: t("page.bonus.sports.weekly"),
                desc: t("vip.bonus.sports"),
                isSports: !0,
                img: G.football
            }, {
                title: t("vip.benefits.exclusiveperks"),
                desc: t("vip.bonus.exclusiveperks"),
                img: G.svip
            }, {
                title: t("vip.benefits.luxurygiveaway"),
                desc: t("vip.bonus.luxurygiveaway"),
                img: G.giveaway
            }, {
                title: t("page.bonus.spin_vip"),
                desc: t("vip.bonus.vipspin"),
                img: G.vipspin
            }]
        ]
    }

    function na(t) {
        return t < 0 ? "0" : t > 100 ? "100" : Math.round(t * 1e4) / 100 + ""
    }
    const ih = {
            endRechargeRate: 0,
            levelUpBcdBonus: 0,
            monthlyCashback: 0,
            startRechargeRate: 0,
            weeklyCashback: 0
        },
        oh = Y(function() {
            const t = k(),
                a = f.useRef(null),
                s = Ke(),
                n = et(),
                {
                    account: i
                } = Ee(),
                o = sh(),
                r = nh(),
                l = i.getLevelInfo(i.vipLevel),
                [c, d] = _e({
                    labelType: l.type === 0 ? 1 : l.type,
                    rankData: []
                });
            f.useEffect(() => {
                M.get("/game/support/vip/rankInfo/").then(u => {
                    u && d({
                        rankData: u
                    })
                }).catch(L)
            }, []);
            const m = c.labelType === 4 || c.labelType === 5,
                h = c.labelType >= 6,
                g = h ? r[4] : m ? r[3] : r[c.labelType - 1];
            return f.useLayoutEffect(() => {
                if (s && a && a.current) {
                    const u = a.current.querySelector(".select");
                    if (u) {
                        const p = u.getBoundingClientRect().left;
                        a.current.scrollLeft = Math.max(p - 20, 0)
                    }
                }
            }, []), e.jsxs("div", {
                className: rh,
                children: [e.jsx("p", {
                    className: "b-t",
                    children: t("vip.bonus.title", Se.buildHost)
                }), e.jsxs("div", {
                    className: "b-list-wrap",
                    children: [e.jsx("div", {
                        className: "top-label-list",
                        ref: a,
                        children: o.map((u, p) => {
                            const b = p + 1 === c.labelType,
                                v = l.type - 1 === p,
                                _ = !n && p === 1;
                            return e.jsxs("div", {
                                className: A("bonus-label-item", b && "select", v && "current"),
                                onClick: () => {
                                    b || d({
                                        labelType: p + 1
                                    })
                                },
                                children: [e.jsx("img", {
                                    alt: "bonus",
                                    src: u.img,
                                    className: "level-img"
                                }), e.jsx("p", {
                                    style: b ? {
                                        color: _ ? "#000000" : i.levelColor[p + 1]
                                    } : void 0,
                                    children: u.label
                                }), v && e.jsx("img", {
                                    alt: "right",
                                    src: G.right,
                                    className: "right-icon"
                                })]
                            }, "label-" + p)
                        })
                    }), e.jsxs("div", {
                        className: "bonus-area-wrap",
                        children: [e.jsxs("div", {
                            className: "level-name-range",
                            children: [e.jsx("div", {
                                className: A("rec-wrap", (m || h) && "white"),
                                style: {
                                    backgroundColor: i.levelColor[c.labelType]
                                },
                                children: o[c.labelType - 1].label
                            }), e.jsxs("p", {
                                className: "rec-desc",
                                children: [e.jsx("span", {
                                    children: o[c.labelType - 1].desc
                                }), c.labelType > 1 && e.jsxs("span", {
                                    className: "rec-more",
                                    children: ["* ", t("vip.bonus.included")]
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "list-w",
                            children: g.map((u, p) => {
                                const b = c.rankData[c.labelType - 1] || ih,
                                    v = l.type < c.labelType;
                                return e.jsxs("div", {
                                    className: "benefits-item-wrap",
                                    children: [e.jsx("div", {
                                        className: "left-img",
                                        children: e.jsx("img", {
                                            alt: "img",
                                            src: v ? G.lock : u.img
                                        })
                                    }), e.jsxs("div", {
                                        className: "right-wrap",
                                        children: [e.jsxs("div", {
                                            className: "tit-wrap",
                                            children: [e.jsx("p", {
                                                className: "tit",
                                                children: u.title
                                            }), u.isRecharge && e.jsx(Ft, {
                                                className: "recharge-tips",
                                                children: e.jsx(eh, {
                                                    tiers: b.tires
                                                })
                                            }), u.isSports && e.jsx(Ft, {
                                                className: "sports-tips",
                                                isTop: !0,
                                                children: e.jsx(ah, {})
                                            })]
                                        }), u.isLevelUp && e.jsxs("div", {
                                            className: "desc sp",
                                            children: [e.jsxs("span", {
                                                children: [t("vip.bonus.prize"), ":", e.jsxs("span", {
                                                    className: "y f",
                                                    children: [b.levelUpBcdBonus, " BCD"]
                                                })]
                                            }), i.bonusCurrencyName !== "BCD" && e.jsx("span", {
                                                className: "w",
                                                children: t("vip.bonus.local")
                                            })]
                                        }), u.isRecharge && e.jsx("p", {
                                            className: "desc",
                                            children: e.jsx(Ae, {
                                                k: "vip.bonus.recharge",
                                                children: e.jsxs("span", {
                                                    className: "y",
                                                    children: [na(b.startRechargeRate), "-", na(b.endRechargeRate), "%"]
                                                })
                                            })
                                        }), u.isWeekly && e.jsx("p", {
                                            className: "desc",
                                            children: e.jsx(Ae, {
                                                k: "vip.bonus.week",
                                                children: e.jsxs("span", {
                                                    className: "y",
                                                    children: [t("common.wager"), "*1%*", na(b.weeklyCashback), "%"]
                                                })
                                            })
                                        }), u.isMonthly && e.jsx("p", {
                                            className: "desc",
                                            children: e.jsx(Ae, {
                                                k: "vip.bonus.month",
                                                children: e.jsxs("span", {
                                                    className: "y",
                                                    children: [t("common.wager"), "*1%*", na(b.monthlyCashback), "%"]
                                                })
                                            })
                                        }), u.desc && e.jsx("p", {
                                            className: "desc",
                                            children: u.desc
                                        })]
                                    })]
                                }, "bonusitem-" + p)
                            })
                        })]
                    })]
                })]
            })
        }),
        rh = "brhdk87";
    let zr;
    bd = Y(function() {
        const t = k(),
            a = f.useRef(null),
            s = re(),
            n = et();
        return f.useEffect(() => (sa.syncVipData(), () => {
            a.current && clearTimeout(a.current)
        }), []), e.jsx(ne, {
            className: zr,
            children: sa.loading ? e.jsx(pe, {}) : e.jsxs(le, {
                className: "vipdialog-wrap",
                children: [e.jsx("div", {
                    className: "top-wrap",
                    children: e.jsxs("div", {
                        className: "img-wrap",
                        children: [e.jsx("img", {
                            alt: "ribbon",
                            src: n ? G.ribbon : G.ribbon_w,
                            className: "ribbon-img"
                        }), e.jsx("span", {
                            children: t("common.vip_club")
                        })]
                    })
                }), e.jsxs("div", {
                    className: "vip-dialog-main",
                    children: [e.jsxs("div", {
                        className: "top-desc",
                        children: [e.jsx("span", {
                            children: t("vip.subtit")
                        }), e.jsx("span", {
                            className: "view",
                            onClick: () => s("#/vip-level"),
                            children: t("page.vip.view.levelup")
                        })]
                    }), e.jsxs("div", {
                        className: "card-host-wrap",
                        children: [e.jsx(zp, {}), e.jsx(Yp, {})]
                    }), e.jsx(oh, {}), e.jsx(q, {
                        className: "vip-btn",
                        onClick: () => {
                            Te.close(), a.current = setTimeout(() => s("/vip"), 200)
                        },
                        children: t("vip.learn.vip", Se.buildHost)
                    })]
                })]
            })
        })
    }), zr = "vdf9f8v";
    class lh {
        constructor() {
            Z(this, "cutTime", 0);
            Z(this, "loading", !0);
            Z(this, "isBrlBonus", !1);
            Z(this, "data", {
                rewards: [],
                rewardsAmount: 0,
                newbieTaskExpireTime: 0,
                unClaimedRewardMap: {},
                taskDate: "",
                lastTaskWeek: "",
                taskWeek: "",
                rewardCurrency: "",
                dayOfWeek: "",
                taskDates: [],
                newbieTasks: [],
                dailyTasks: [],
                weeklyTasks: [],
                dailyTaskExpireTimeInMs: 0,
                weekTaskExpireTimeInMs: 0
            });
            Qc(this, {
                cutTime: we,
                loading: we,
                isBrlBonus: we,
                data: we
            }), this.init = this.init.bind(this), this.updateClaimed = this.updateClaimed.bind(this), this.set = this.set.bind(this)
        }
        async init() {
            await S.waitLogin();
            try {
                this.loading = !0;
                const a = await ch();
                this.set(a), this.brlReward(a), this.loading = !1
            } catch (a) {
                L(a)
            }
        }
        updateClaimed(a) {
            if (a) {
                const s = this.data.rewards;
                if (s.length > 0) {
                    const n = s.find(i => i.rewardId === a);
                    n && (n.rewardId = 0, this.data.rewards = [...s], S.emit("rewardClaim"))
                }
            }
        }
        set(a) {
            this.data = Q(U({}, a), {
                newbieTasks: a.dailyTasks.filter(s => s.newbieTask),
                unClaimedRewardMap: a.unClaimedRewardMap || {}
            }), this.cutTime = a.weekTaskExpireTimeInMs > 0 ? a.weekTaskExpireTimeInMs + Date.now() : 0, this.data.weekTaskExpireTimeInMs = this.cutTime, this.data.dailyTaskExpireTimeInMs = a.dailyTaskExpireTimeInMs > 0 ? a.dailyTaskExpireTimeInMs + Date.now() : 0
        }
        brlReward(a) {
            const s = a.dailyTasks;
            let n = !1;
            s.map(i => {
                (i.taskId === "tid061" || i.taskId === "tid062") && (n = !0)
            }), n && (this.isBrlBonus = !0)
        }
        changeUnClaimedNum(a) {
            const s = U({}, this.data.unClaimedRewardMap),
                n = s[a];
            n && (s[a] = Math.max(n - 1, 0)), this.data.unClaimedRewardMap = U({}, s)
        }
        havePrevious(a) {
            if (a) {
                if (JSON.stringify(a) === "{}") return 0;
                let s = 0;
                for (let n in a) n !== this.data.taskDate && a[n] && a[n] > 0 && (s += a[n]);
                return s
            } else return 0
        }
    }
    const ch = H.timeMemoize(function() {
            return M.post("/activity/taskhub/tasks/")
        }, {
            timeout: 1e3
        }),
        de = new lh,
        ct = {
            w: 64,
            h: 64,
            strokeWidth: 7,
            r: (64 - 7) / 2,
            cx: 64 / 2,
            cy: 64 / 2
        };

    function dh(t, a, s) {
        return String(t).length + String(a).length > 4 ? s >= 1 ? `${Math.floor(s*100/100)}%` : s === 0 ? "0%" : s <= .01 ? "0.01%" : s.toFixed(2) + "%" : `${a}/${t}`
    }
    const mh = ({
            doneValue: t,
            totalValue: a
        }) => {
            const s = et(),
                n = new oe(t).div(a).mul(100).toNumber(),
                i = 2 * Math.PI * ct.r,
                o = n / 100,
                r = i * (1 - o),
                l = {
                    initial: {
                        strokeDashoffset: i
                    },
                    animate: {
                        strokeDashoffset: r
                    },
                    transition: {
                        duration: 1
                    }
                },
                c = s ? "#46434C" : "#D9DDE6";
            return e.jsx("div", {
                className: uh,
                children: e.jsxs("svg", {
                    viewBox: `0 0 ${ct.w} ${ct.h}`,
                    children: [e.jsx("circle", Q(U({}, ct), {
                        fill: "transparent",
                        stroke: c
                    })), e.jsx("circle", Q(U({}, ct), {
                        strokeWidth: 0,
                        r: 20,
                        fill: c
                    })), e.jsx(ge.circle, Q(U(Q(U({}, ct), {
                        fill: "transparent",
                        stroke: "#8651FA",
                        strokeDasharray: i
                    }), l), {
                        style: {
                            transform: "rotate(-90deg)",
                            transformOrigin: "center"
                        }
                    })), e.jsx("text", {
                        fill: s ? "#ffffff" : "#8651FA",
                        style: {
                            fontSize: "12px"
                        },
                        x: ct.cx,
                        y: ct.cy + 5,
                        textAnchor: "middle",
                        children: dh(a, t, n)
                    })]
                })
            })
        },
        uh = "s16txh0i",
        ph = "/assets/tr.7610ad2e.png",
        hh = "/assets/true.0313b6b5.png";

    function gh({
        status: t,
        onClick: a
    }) {
        const s = k();
        switch (t) {
            case "Pending":
                return e.jsx(q, {
                    className: Ka,
                    children: s("wallet.status.pending")
                });
            case "Denied":
                return e.jsx(q, {
                    className: Ka,
                    children: s("common.denied")
                });
            case "Accepted":
                return e.jsx(q, {
                    className: Ka,
                    children: s("common.accepted")
                });
            case "Retry":
                return e.jsx(q, {
                    type: "conic2",
                    onClick: a,
                    children: s("common.retry")
                });
            default:
                return e.jsx(q, {
                    type: "conic",
                    onClick: a,
                    children: s("common.go")
                })
        }
    }
    const Ka = "s1lcqdku",
        Xa = Y(function(t) {
            var g, u;
            const a = t.rewards.filter(p => p.taskId === t.taskId);
            let s = a[0];
            if (a.length > 1) {
                const p = a.find(v => v.taskDate === de.data.taskWeek),
                    b = a.find(v => v.taskDate === de.data.lastTaskWeek);
                s = (g = t.isPrevious ? b : p) != null ? g : s
            }
            t.taskDate && (s = (u = t.rewards.find(p => p.taskId === t.taskId && p.taskDate === t.taskDate)) != null ? u : s);
            const n = k(),
                i = re(),
                [o, r] = _e({
                    claimed: s && s.rewardId === 0
                }),
                l = t.doneValue >= t.totalValue,
                c = t.totalValue > 1,
                d = !t.path || t.path.length === 0,
                m = async p => (p.stopPropagation(), M.post("/activity/taskhub/takeReward/", {
                    rewardId: s == null ? void 0 : s.rewardId
                }).then(b => {
                    S.emit("rewardClaim"), ee.playSound("claim"), de.updateClaimed(s == null ? void 0 : s.rewardId), t.taskDate && de.changeUnClaimedNum(t.taskDate), r({
                        claimed: !0
                    })
                }).catch(L)),
                h = p => {
                    i(p), /#/.exec(p) || Te.close()
                };
            return e.jsxs("div", {
                className: A(fh, l && "complete", o.claimed && "claimed", !d && "has-path"),
                children: [!l && c ? e.jsx(mh, {
                    doneValue: Math.min(t.doneValue, t.totalValue),
                    totalValue: t.totalValue
                }) : e.jsx("img", {
                    className: "img-gift",
                    src: ph
                }), e.jsxs("div", {
                    className: "item-cont",
                    children: [e.jsxs("div", {
                        className: "item-head",
                        children: [t.title, " ", l ? e.jsxs("div", {
                            className: "mark",
                            children: [e.jsx("img", {
                                src: hh
                            }), n("common.finished")]
                        }) : t.tips && d && e.jsx(Rt, {
                            delay: 0,
                            title: e.jsx("div", {
                                className: yh,
                                children: t.tips
                            }),
                            children: e.jsx(z, {
                                name: "Inform"
                            })
                        })]
                    }), e.jsx("div", {
                        className: "item-desc",
                        children: t.describe
                    }), e.jsxs("div", {
                        className: "reward-amount",
                        children: [e.jsx(De, {
                            name: t.rewardCurrency
                        }), e.jsxs("span", {
                            className: "amount",
                            children: [n("common.earn"), " ", t.rewardAmount, " ", w.getAlias(t.rewardCurrency)]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item-status",
                    children: [l && (o.claimed ? e.jsx("span", {
                        className: "p-tw",
                        children: n("common.claimed")
                    }) : e.jsx(q, {
                        onClick: m,
                        type: "conic4",
                        children: n("page.task.receive")
                    })), !l && (t.isPrevious ? e.jsx("span", {
                        className: "p-tw",
                        children: n("page.coindrop.expired")
                    }) : !d && (t.status ? e.jsx(gh, {
                        onClick: () => t.path && h(t.path),
                        status: t.status
                    }) : e.jsx(q, {
                        className: "go-btn",
                        type: "conic",
                        onClick: () => t.path && h(t.path),
                        children: n("common.go")
                    })))]
                })]
            })
        });
    Ie({
        cl1: ["rgba(45, 48, 53, 0.5)", "#f5f6fa"],
        cl2: ["#2d3035", "#edeef2"],
        cl3: ["#f5f6f7", "#31373d"],
        cl4: ["#1e2024", "#ffffff"],
        cl5: [ie("#99a4b0", .6), ie("#5f6975", .6)],
        cl6: ["linear-gradient(84.13deg, rgba(92, 15, 223, 0.25) 1.23%, rgba(135, 114, 255, 0) 72.29%), #26282C;", "linear-gradient(84.13deg, rgba(92, 15, 223, 0.25) -6.29%, rgba(135, 114, 255, 0) 96.92%), rgba(218, 221, 230, 0.5)"],
        cl7: ["#9299A6", "#5F6975"],
        cl8: ["#FFD029", "#FFBF3A"]
    });
    const fh = "i6efbdu",
        yh = "sv4xia0";

    function bh() {
        return M.post("/activity/taskhub/previous/all/")
    }
    const vh = J.memo(function(t) {
        const a = k(),
            {
                data: s,
                error: n
            } = Be(bh);
        return n ? e.jsx(ne, {
            className: ts,
            title: a("page.task.previous"),
            children: e.jsx(Ce, {
                children: n.message
            })
        }) : s ? e.jsx(ne, {
            className: ts,
            title: a("page.task.previous"),
            children: e.jsx(wh, Q(U({}, t), {
                data: s
            }))
        }) : e.jsx(ne, {
            className: ts,
            title: a("page.task.previous"),
            children: e.jsx(pe, {})
        })
    });

    function wh(t) {
        const a = k(),
            s = t.data,
            {
                unclaimedList: n,
                unclaimedWeekList: i,
                claimedList: o,
                claimedWeekList: r,
                unCompleteDailyList: l,
                unCompleteWeeklyList: c,
                isEmpty: d
            } = jh(s, t.rewords, t.dates);
        return d ? e.jsx(Ce, {}) : e.jsxs(le, {
            children: [e.jsxs("div", {
                className: "top-header",
                children: [e.jsx("p", {
                    className: "tt-f",
                    children: a("page.task.previous")
                }), s.endTime && s.startTime && e.jsx("p", {
                    className: "tt-s",
                    children: `${new Date(Number(s.startTime)).toLocaleDateString()} - ${new Date(Number(s.endTime)).toLocaleDateString()}`
                })]
            }), e.jsxs("div", {
                className: "top-area",
                children: [e.jsx($r, Q(U({
                    list: n
                }, t), {
                    list2: i
                })), e.jsx(xh, U({
                    list1: l,
                    list2: c
                }, t)), e.jsx($r, Q(U({
                    list: o
                }, t), {
                    isClaimed: !0,
                    list2: r
                }))]
            })]
        })
    }

    function es({
        list: t,
        tit: a,
        rewords: s
    }) {
        return !t || t.length === 0 ? null : e.jsxs("div", {
            className: "quests-pre-list",
            children: [e.jsx("p", {
                className: "qpl-t",
                children: a
            }), t.map((n, i) => f.createElement(Xa, Q(U({
                isPrevious: !0
            }, n), {
                rewards: s,
                key: i
            })))]
        })
    }
    const xh = J.memo(function(t) {
            const a = t.list1,
                s = t.list2,
                n = k();
            return e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "uncl-tit",
                    children: [e.jsx("p", {
                        className: "t",
                        children: n("page.task.unfinished")
                    }), e.jsx(Rt, {
                        delay: 0,
                        title: e.jsx("div", {
                            style: {
                                whiteSpace: "break-spaces",
                                width: 240
                            },
                            children: n("page.task.unfinished.tip")
                        }),
                        children: e.jsxs("div", {
                            className: "info",
                            children: [n("page.task.unfinished.desc"), " ", e.jsx(z, {
                                name: "Inform"
                            })]
                        })
                    })]
                }), a.length > 0 || s.length > 0 ? e.jsxs(e.Fragment, {
                    children: [e.jsx(es, {
                        list: a,
                        tit: n("page.task.daily"),
                        rewords: t.rewords
                    }), e.jsx(es, {
                        list: s,
                        tit: n("page.task.weekly"),
                        rewords: t.rewords
                    })]
                }) : e.jsx(Ce, {})]
            })
        }),
        $r = J.memo(function(t) {
            const a = k(),
                s = t.list,
                n = t.list2,
                i = s.length + n.length === 0;
            return e.jsxs(e.Fragment, {
                children: [t.isClaimed ? e.jsx("p", {
                    className: "c-t",
                    children: a("common.claimed")
                }) : e.jsxs("div", {
                    className: "uncl-tit",
                    children: [e.jsx("p", {
                        className: "t",
                        children: a("common.unclaimed")
                    }), e.jsxs("div", {
                        className: "cut-time",
                        children: [e.jsx("span", {
                            children: a("page.task.expire")
                        }), e.jsx(vt, {
                            endTime: t.time,
                            children: ({
                                days: o,
                                hours: r,
                                minutes: l,
                                seconds: c
                            }) => e.jsxs("div", {
                                className: "time-wrap",
                                children: [e.jsxs("b", {
                                    className: "day",
                                    style: {
                                        marginRight: "4px"
                                    },
                                    children: [o, "D"]
                                }), e.jsx("b", {
                                    children: H.numberZeroize(r)
                                }), e.jsx("b", {
                                    className: "colon",
                                    children: ":"
                                }), e.jsx("b", {
                                    children: H.numberZeroize(l)
                                }), e.jsx("b", {
                                    className: "colon",
                                    children: ":"
                                }), e.jsx("b", {
                                    children: H.numberZeroize(c)
                                })]
                            })
                        })]
                    })]
                }), i ? e.jsx(Ce, {}) : e.jsxs(e.Fragment, {
                    children: [t.list.map((o, r) => e.jsxs("div", {
                        className: "quests-pre-list",
                        children: [e.jsx("p", {
                            className: "qpl-t",
                            children: `${o.date.weekFormat}, ${o.date.dateFormat}`
                        }), o.info.map((l, c) => f.createElement(Xa, Q(U({
                            taskDate: o.date.taskDate,
                            isPrevious: !0
                        }, l), {
                            rewards: t.rewords,
                            key: c
                        })))]
                    }, r)), e.jsx(es, {
                        list: t.list2,
                        tit: a("page.task.weekly"),
                        rewords: t.rewords
                    })]
                })]
            })
        });

    function jh(t, a, s) {
        const n = [],
            i = [],
            o = [],
            r = [],
            l = [],
            c = [];
        for (const m in t.list) {
            const h = t.list[m].tasks,
                g = s.find(b => b.taskDate === m),
                u = [],
                p = [];
            h.forEach(b => {
                const v = b.doneValue >= b.totalValue;
                if (v && g) {
                    const _ = a.find(T => T.taskId === b.taskId && T.taskDate === m);
                    _ && _.rewardId && _.rewardId > 0 ? u.push(b) : p.push(b)
                }!v && b.doneValue > 0 && l.push(b)
            }), g && (u.length > 0 && n.push({
                date: g,
                info: u
            }), p.length > 0 && o.push({
                date: g,
                info: p
            }))
        }
        for (const m in t.weeklyList) t.weeklyList[m].tasks.forEach(h => {
            const g = h.doneValue < h.totalValue && h.doneValue > 0;
            if (h.doneValue >= h.totalValue) {
                const u = a.find(p => p.taskId === h.taskId && p.taskDate === m);
                u && u.rewardId && u.rewardId > 0 ? i.push(h) : r.push(h)
            } else g && c.push(h)
        });
        const d = n.length + o.length + i.length + r.length + l.length + c.length === 0;
        return {
            unclaimedList: n,
            unclaimedWeekList: i,
            claimedList: o,
            claimedWeekList: r,
            unCompleteDailyList: l,
            unCompleteWeeklyList: c,
            isEmpty: d
        }
    }
    const ts = "ppm112j",
        _h = a => {
            var t = St(a, []);
            const s = k(),
                n = de.havePrevious(de.data.unClaimedRewardMap);
            return e.jsxs("div", {
                className: kh,
                children: [e.jsx("div", {
                    className: "title ttu",
                    children: t.dayOfWeek
                }), e.jsxs("div", {
                    className: "rewards",
                    children: [e.jsxs("div", {
                        className: "rewards-cont",
                        children: [e.jsx("div", {
                            className: "rewards-tit",
                            children: s("page.task.rewrards_amount", "")
                        }), e.jsxs("div", {
                            className: "amount-wrap",
                            children: [e.jsx(De, {
                                name: t.rewardCurrency
                            }), e.jsx("span", {
                                className: "amount",
                                children: w.numberWithCommas(t.rewardsAmount)
                            }), e.jsx("b", {
                                className: "currency",
                                children: w.getAlias(t.rewardCurrency)
                            })]
                        })]
                    }), e.jsxs("button", {
                        disabled: de.data.taskDates.length === 0,
                        className: "sub-btn",
                        onClick: () => Te.push(e.jsx(vh, {
                            dates: de.data.taskDates,
                            rewords: de.data.rewards,
                            time: de.data.weekTaskExpireTimeInMs
                        })),
                        children: [s("page.task.previous"), n > 0 && e.jsx("div", {
                            className: "g-dot",
                            children: n
                        })]
                    })]
                })]
            })
        },
        kh = "s18nah3k",
        Nh = s => {
            var n = s,
                {
                    curtab: t
                } = n,
                a = St(n, ["curtab"]);
            const i = k(),
                o = t ? 1 : 0,
                r = re(),
                l = f.useCallback(d => {
                    r(`#/quests${d===1?"/weekly":""}`)
                }, []),
                c = [{
                    label: i("page.task.daily"),
                    value: () => e.jsx(qr, {
                        list: a.dailyTasks,
                        cutTime: a.dailyTaskExpireTimeInMs,
                        rewards: a.rewards,
                        taskDate: a.taskDate
                    })
                }, {
                    label: i("page.task.weekly"),
                    value: () => e.jsx(qr, {
                        list: a.weeklyTasks,
                        cutTime: a.weekTaskExpireTimeInMs,
                        rewards: a.rewards,
                        taskDate: a.taskDate,
                        showDay: !0
                    })
                }];
            return e.jsx(Bc, {
                type: "line",
                className: Ch,
                value: o,
                tabs: c,
                onChange: l
            })
        },
        qr = ({
            list: t,
            cutTime: a,
            showDay: s,
            rewards: n,
            taskDate: i
        }) => {
            const o = k();
            return e.jsxs(e.Fragment, {
                children: [e.jsxs("div", {
                    className: "cut-time",
                    children: [o("page.task.expire"), e.jsx(vt, {
                        endTime: a,
                        children: ({
                            days: r,
                            hours: l,
                            minutes: c,
                            seconds: d
                        }) => e.jsxs("div", {
                            className: "time-wrap",
                            children: [s && e.jsxs("b", {
                                className: "day",
                                children: [r, "D"]
                            }), e.jsx("b", {
                                children: H.numberZeroize(l)
                            }), e.jsx("b", {
                                className: "colon",
                                children: ":"
                            }), e.jsx("b", {
                                children: H.numberZeroize(c)
                            }), e.jsx("b", {
                                className: "colon",
                                children: ":"
                            }), e.jsx("b", {
                                children: H.numberZeroize(d)
                            })]
                        })
                    })]
                }), t.map(r => e.jsx(Xa, Q(U({}, r), {
                    rewards: n,
                    taskDate: s ? void 0 : i
                }), r.title))]
            })
        };
    Ie({
        cl1: [ie("#99a4b0", .6), ie("#5f6975", .6)],
        cl2: ["#f5f6f7", "#31373d"],
        cl3: ["rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.1)"],
        cl4: ["#98A7B5", "#98A7B5"]
    });
    const Ch = "t1e4213f",
        as = J.memo(function({
            classname: t
        }) {
            return e.jsx("svg", {
                viewBox: "0 0 13 8",
                className: t,
                fill: "none",
                children: e.jsx("path", {
                    d: "M0.599609 0.753174L6.3048 6.45829L12.0099 0.753174",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }),
        Th = "/assets/coin.968b6427.png",
        Sh = Y(function() {
            const t = k();
            return de.isBrlBonus ? e.jsxs("div", {
                className: Ah,
                children: [e.jsx("img", {
                    alt: "coin",
                    src: Th
                }), e.jsxs("div", {
                    className: "p",
                    children: [e.jsx("p", {
                        className: "t",
                        dangerouslySetInnerHTML: {
                            __html: t("page.bonus.task.desc1")
                        }
                    }), e.jsx("p", {
                        className: "d",
                        children: t("page.bonus.task.desc2")
                    })]
                }), e.jsxs("div", {
                    className: "arrow",
                    children: [e.jsx(as, {
                        classname: "top"
                    }), e.jsx(as, {
                        classname: "mid"
                    }), e.jsx(as, {
                        classname: "bot"
                    })]
                })]
            }) : null
        }),
        Ah = "b1jx8ha7",
        Ih = "/assets/light.7c84278c.png",
        Hr = "/assets/check.fb4072c5.png";

    function Rh({
        status: t,
        onClaim: a,
        onClick: s
    }) {
        const n = k();
        switch (t) {
            case 0:
                return e.jsx(q, {
                    className: ss,
                    onClick: s,
                    children: n("common.go")
                });
            case 1:
                return e.jsx(q, {
                    className: Dh,
                    onClick: a,
                    children: n("page.task.receive")
                });
            case 2:
                return e.jsxs(q, {
                    className: Ph,
                    children: [e.jsx("img", {
                        src: Hr
                    }), " ", n("common.claimed")]
                });
            case 3:
                return e.jsx(q, {
                    className: ns,
                    children: n("wallet.status.pending")
                });
            case 4:
                return e.jsx(q, {
                    className: ns,
                    children: n("common.denied")
                });
            case 5:
                return e.jsx(q, {
                    className: ns,
                    children: n("common.accepted")
                });
            case 6:
                return e.jsx(q, {
                    className: ss,
                    onClick: s,
                    children: n("common.retry")
                });
            default:
                return e.jsx(q, {
                    className: ss,
                    onClick: s,
                    children: n("common.go")
                })
        }
    }
    const ss = "s1duyrx0",
        ns = "s1gv76pn",
        Dh = "scfn69t",
        Ph = "s14pzpwd",
        Yr = "/assets/gift.3dbd827b.png",
        Bh = "/assets/open.1b60d7d7.png",
        Eh = "/assets/coin.bf6a9489.png";

    function Lh(t, a, s) {
        let n = 0;
        return a ? n = 2 : t ? n = 1 : s === "Pending" ? n = 3 : s === "Denied" ? n = 4 : s === "Accepted" ? n = 5 : s === "Retry" && (n = 6), n
    }

    function Fh({
        item: t,
        rewards: a
    }) {
        const s = re(),
            n = k(),
            i = t.doneValue >= t.totalValue,
            o = a.find(m => m.taskId === t.taskId),
            r = o && (o == null ? void 0 : o.rewardId) === 0,
            l = f.useCallback(() => {
                t.path && s(t.path)
            }, [t]),
            c = async () => M.post("/activity/taskhub/takeReward/", {
                rewardId: o == null ? void 0 : o.rewardId
            }).then(m => {
                if (S.emit("rewardClaim"), ee.playSound("claim"), de.updateClaimed(o == null ? void 0 : o.rewardId), t.rewardType === "lottery" && Ye.trackEvent("welcome_bonus_click"), t.taskId === "tid074" && Ye.trackEvent("free_lottery_click", {
                        source: "newbie_window"
                    }), m && m.lottery) {
                    const h = m.lottery.currentLottery.lotteryResult,
                        {
                            numbers: g,
                            jackpotBallNumber: u,
                            drawTimestamp: p
                        } = h;
                    s(`#/welcome_bonuses/${g.join("-")}-${u}-${p}-${t.rewardAmount}-0`)
                }
            }).catch(L),
            d = Lh(i, r, t.status);
        return e.jsxs("div", {
            className: A(Oh, "item", i && "complete", r && "claimed"),
            children: [e.jsx("img", {
                className: "item-img",
                src: r ? Bh : Yr,
                alt: ""
            }), e.jsxs("div", {
                className: "cont",
                children: [e.jsx("div", {
                    className: "tit",
                    children: t.title
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("img", {
                        className: "img-coin",
                        src: Eh
                    }), t.rewardType === "lottery" ? e.jsxs(e.Fragment, {
                        children: [t.rewardAmount, " ", n("page.bonus.lottery_tickets")]
                    }) : e.jsxs(e.Fragment, {
                        children: [t.rewardAmount, " ", w.getAlias(t.rewardCurrency)]
                    })]
                })]
            }), e.jsx(Rh, {
                status: d,
                onClaim: c,
                onClick: l
            })]
        })
    }
    const Oh = "iwyp7zh",
        is = "/assets/star.5e547976.png";

    function Gr(t, a = []) {
        const s = a.find(n => n.taskId === t.taskId);
        return s ? s.rewardId > 0 ? 1 : -1 : 0
    }
    const Mh = Y(function() {
            const t = Cs(),
                a = et(),
                s = ks(),
                n = k();
            f.useEffect(() => {
                t && !s && de.init()
            }, [t]);
            const i = de.data.rewards,
                o = de.data.newbieTasks,
                r = de.data.newbieTaskExpireTime;
            if (de.loading) return e.jsx(ne, {
                children: e.jsx(pe, {})
            });
            const l = o.slice().sort((c, d) => {
                const m = Gr(c, i);
                return Gr(d, i) - m
            });
            return e.jsxs(ne, {
                className: A(Wh, !a && "light"),
                parentClassName: A(Uh),
                children: [e.jsx("img", {
                    src: Ih,
                    className: "img-bg",
                    alt: ""
                }), e.jsx("img", {
                    src: is,
                    className: "star s-1"
                }), e.jsx("img", {
                    src: is,
                    className: "star s-2"
                }), e.jsx("img", {
                    src: is,
                    className: "star s-3"
                }), e.jsx("div", {
                    className: "title ttu",
                    children: n("page.task.claim")
                }), e.jsxs("div", {
                    className: "list-wrap",
                    children: [e.jsxs("div", {
                        className: "time-wrap",
                        children: [n("page.tasks.expire"), e.jsx(vt, {
                            endTime: r,
                            onEnd: de.init,
                            children: ({
                                hours: c,
                                minutes: d,
                                seconds: m
                            }) => e.jsxs("div", {
                                className: "cut-time",
                                children: [c > 9 ? c : "0" + c, "h:", d > 9 ? d : "0" + d, "m:", m > 9 ? m : "0" + m, "s"]
                            })
                        })]
                    }), e.jsx("div", {
                        className: "sub-tit",
                        children: n("page.task.newbie_tit")
                    }), e.jsx(le, {
                        className: "list",
                        children: l.map((c, d) => e.jsx(Fh, {
                            item: c,
                            rewards: i
                        }, d))
                    })]
                })]
            })
        }),
        Wh = "s1tdnmwu",
        Uh = "pbap0zu";
    let Jr, os;
    Cd = Y(function() {
        const t = de.data.newbieTasks,
            a = de.data.newbieTaskExpireTime < H.serverTime().getTime();
        return f.useEffect(() => {
            O.emit("ad_track", "other_events", {
                e: "enterTask"
            })
        }, []), f.useEffect(() => {
            S.waitLogin().then(() => {
                de.init()
            })
        }, []), de.loading ? e.jsx(ne, {
            children: e.jsx(pe, {})
        }) : !t || t.length === 0 || a ? e.jsx(Jr, {}) : e.jsx(Mh, {})
    }), Jr = Y(function() {
        const t = ks(),
            a = ft(),
            s = Cs();
        f.useEffect(() => {
            s && !t && de.init()
        }, [s]);
        const n = a["*"],
            i = k();
        return de.loading ? e.jsx(ne, {
            className: os,
            title: i("page.promotion.task.title"),
            children: e.jsx(pe, {})
        }) : e.jsx(ne, {
            className: os,
            title: i("page.promotion.task.title"),
            children: e.jsx(le, {
                id: "task",
                children: e.jsxs("div", {
                    className: "task-wrap",
                    children: [e.jsx(_h, U({}, de.data)), e.jsx(Sh, {}), e.jsx(Nh, Q(U({}, de.data), {
                        curtab: n
                    }))]
                })
            })
        })
    }), os = "t1oeoitw";

    function Vh(t) {
        const a = t / 414 * 128;
        return Math.round(a)
    }

    function zh(t) {
        const a = t / 414 * 64;
        return Math.round(a)
    }
    let Qr, Zr;
    Qr = J.memo(function({
        time: t,
        total: a,
        done: s
    }) {
        const n = re(),
            i = Ke(),
            o = f.useRef(-1),
            r = k(),
            [l, c] = f.useState({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }),
            [d, m] = f.useState(!1),
            h = f.useRef(!1),
            g = f.useRef(0);
        f.useEffect(() => {
            d ? clearTimeout(g.current) : g.current = setTimeout(() => {
                m(!0)
            }, 7e3)
        }, [d]);
        const u = f.useRef(document.querySelector("#root")),
            p = globalThis.innerWidth,
            b = globalThis.innerHeight,
            v = f.useRef(null),
            _ = Vh(p),
            T = zh(p);
        f.useEffect(() => {
            i && d && o.current < 0 && setTimeout(() => {
                if (v.current) {
                    const E = v.current.getBoundingClientRect(),
                        R = Math.max(p - E.width - E.left, 0),
                        j = Math.max(b - E.height - E.top, 0);
                    c({
                        left: Math.round(E.left),
                        right: Math.round(R),
                        top: Math.round(E.top),
                        bottom: Math.round(j)
                    }), o.current = 1
                }
            }, 450)
        }, [d]);
        const N = Math.max(l.top - _, 0),
            D = Math.max(l.bottom - T, 0),
            V = {
                left: -l.left,
                right: l.right,
                top: -N,
                bottom: D
            };
        return e.jsx(ge.div, {
            drag: d,
            dragMomentum: !1,
            className: A(Zr, d ? "small" : "common"),
            onClick: E => !h.current && d && m(!1),
            onDragStart: () => h.current = !0,
            onDragEnd: () => h.current = !1,
            dragConstraints: i ? V : u,
            dragElastic: 0,
            ref: v,
            transition: {
                duration: .4
            },
            children: e.jsxs(ge.div, {
                className: "deposit-main",
                initial: {
                    y: "100%",
                    opacity: 0
                },
                animate: {
                    y: "0%",
                    opacity: 1
                },
                children: [!d && e.jsx(Ts, {
                    onClick: () => m(!d)
                }), e.jsx("img", {
                    className: "img-money",
                    src: Yr,
                    alt: ""
                }), e.jsx(j1, {
                    endTime: t,
                    className: "cut-time-border"
                }), !d && e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "cont",
                        children: [e.jsx("div", {
                            className: "title ttu",
                            children: r("common.claim_rewards")
                        }), e.jsxs("div", {
                            className: "desc",
                            children: [e.jsxs("b", {
                                children: [s, "/", a]
                            }), " ", r("common.claimed")]
                        })]
                    }), e.jsxs("div", {
                        className: "btn-wrap",
                        children: [e.jsx(q, {
                            className: "dp-btn",
                            type: "conic",
                            onClick: () => {
                                !d && !h.current && n("#/quests"), Ye.trackEvent("float_box_reward_click")
                            },
                            children: r("page.task.receive")
                        }), e.jsx(vt, {
                            endTime: t,
                            onEnd: de.init,
                            children: ({
                                hours: E,
                                minutes: R,
                                seconds: j
                            }) => e.jsxs("div", {
                                className: "cut-time",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("span", {
                                        className: "l",
                                        children: E > 9 ? E : "0" + E
                                    }), "h"]
                                }), e.jsx("span", {
                                    children: ":"
                                }), e.jsxs("div", {
                                    children: [e.jsx("span", {
                                        className: "l",
                                        children: R > 9 ? R : "0" + R
                                    }), "m"]
                                }), e.jsx("span", {
                                    children: ":"
                                }), e.jsxs("div", {
                                    children: [e.jsx("span", {
                                        className: "l",
                                        children: j > 9 ? j : "0" + j
                                    }), "s"]
                                })]
                            })
                        })]
                    })]
                }), d && e.jsx(vt, {
                    endTime: t,
                    onEnd: de.init,
                    children: ({
                        hours: E,
                        minutes: R,
                        seconds: j
                    }) => e.jsxs("div", {
                        className: "cut-time",
                        children: [e.jsxs("div", {
                            children: [e.jsx("span", {
                                className: "l",
                                children: E > 9 ? E : "0" + E
                            }), "h"]
                        }), e.jsx("span", {
                            children: ":"
                        }), e.jsxs("div", {
                            children: [e.jsx("span", {
                                className: "l",
                                children: R > 9 ? R : "0" + R
                            }), "m"]
                        }), e.jsx("span", {
                            children: ":"
                        }), e.jsxs("div", {
                            children: [e.jsx("span", {
                                className: "l",
                                children: j > 9 ? j : "0" + j
                            }), "s"]
                        })]
                    })
                })]
            })
        })
    }), Zr = "lkqzqbt", hd = Y(function() {
        const {
            urlPathname: t
        } = yt(), [a, s] = f.useState(!1), n = Ke(), i = Ns(), o = de.data.newbieTasks, r = de.data.newbieTaskExpireTime, l = r < H.serverTime().getTime();
        if (f.useEffect(() => {
                let h = 0;
                return S.waitLogin().then(() => {
                    de.init(), h = setTimeout(() => {
                        ee.modalQueue.add(() => i() && s(!0))
                    }, 8e3)
                }), () => clearTimeout(h)
            }, []), t && t.startsWith("/wallet") && n || !o || o.length === 0 || l || !a) return null;
        const c = o.length,
            d = de.data.rewards,
            m = o.reduce((h, g) => {
                const u = d.find(p => p.taskId === g.taskId);
                return u && u.rewardId === 0 ? h + 1 : h
            }, 0);
        return e.jsx(Qr, {
            time: r,
            total: c,
            done: m
        })
    });

    function $h() {
        return ["BCD", "USDT", "USDC", "BTC", "ETH", "TRX", "BUSD", "SOL", "SATS", "DOGE", "BNB", "LTC", "XML", "MATIC", "DOT"].filter(t => w.dict[t])
    }

    function rs(t) {
        const {
            onClick: a,
            active: s,
            item: n
        } = t;
        return e.jsxs("div", {
            onClick: () => a(n),
            className: A("item", s && "active"),
            children: [s && e.jsx("img", {
                src: Hr,
                className: "check-img"
            }), w.getAlias(n)]
        })
    }
    Ys = function() {
        const t = ut(),
            a = $h(),
            s = k(),
            n = _1(Object.keys(w.localCurrencys), 10),
            [i, o] = _e({
                fiat: "",
                cryptoList: [],
                show: !1
            }),
            r = f.useCallback(d => {
                o({
                    fiat: d
                })
            }, []),
            l = f.useCallback(d => {
                const m = i.cryptoList.findIndex(g => g === d),
                    h = [...i.cryptoList];
                m !== -1 ? h.splice(m, 1) : h.push(d), o({
                    cryptoList: h
                })
            }, [i.cryptoList]),
            c = () => ([i.fiat, ...i.cryptoList].forEach(d => {
                const m = w.displayObj[d];
                m && (m.status = 1)
            }), w.updateFavoriteCoin(), M.post("/account/tags/", {
                fiatList: [i.fiat],
                cryptoList: i.cryptoList
            }).then(d => {
                t.back()
            }).catch(L));
        return e.jsx(ne, {
            className: qh,
            title: "Set Currency",
            children: e.jsxs(le, {
                children: [e.jsx("div", {
                    className: "title",
                    children: s("wallet.setcurrency")
                }), e.jsx("div", {
                    className: "desc",
                    children: s("wallet.setcurrency.desc")
                }), n.length > 0 && e.jsxs("div", {
                    className: "fiat-list",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.realmoney.currencies")
                    }), e.jsx("div", {
                        className: "list",
                        children: n[0].map((d, m) => e.jsx(rs, {
                            onClick: r,
                            item: d,
                            active: i.fiat === d
                        }, m))
                    }), e.jsx(wa, {
                        className: "list mr",
                        visible: i.show,
                        children: n[1].map((d, m) => e.jsx(rs, {
                            onClick: r,
                            item: d,
                            active: i.fiat === d
                        }, m))
                    }), e.jsx(q, {
                        className: "show-btn",
                        onClick: () => o({
                            show: !i.show
                        }),
                        children: i.show ? s("common.show_less") : s("common.show_more")
                    })]
                }), a.length > 0 && e.jsxs("div", {
                    className: "crypto-list",
                    children: [e.jsxs("div", {
                        className: "sub-tit",
                        children: [s("wallet.crypto.currencies"), " (", s("crash.analysis.rate"), ")"]
                    }), e.jsx("div", {
                        className: "list",
                        children: a.map((d, m) => e.jsx(rs, {
                            onClick: l,
                            item: d,
                            active: !!i.cryptoList.find(h => h === d)
                        }, m))
                    })]
                }), e.jsx(q, {
                    className: "sub-btn",
                    type: "conic",
                    onClick: c,
                    children: s("common.actions.confirm")
                })]
            })
        })
    };
    const qh = "sd8odku";

    function Hh() {
        const t = k();
        return [{
            label: t("vip.bronze"),
            img: G.bronze,
            desc: "VIP 2-7",
            color: S.levelColor[1]
        }, {
            label: t("vip.silver"),
            img: G.silver,
            desc: "VIP 8-21",
            color: S.levelColor[2]
        }, {
            label: t("vip.gold"),
            img: G.gold,
            desc: "VIP 22-37",
            color: S.levelColor[3]
        }, {
            label: `${t("vip.platinum")} I`,
            img: G.platinum,
            desc: "VIP 38-55",
            color: S.levelColor[4]
        }, {
            label: `${t("vip.platinum")} II`,
            img: G.platinum,
            desc: "VIP 56-69",
            color: S.levelColor[5]
        }, {
            label: `${t("vip.diamond")} I`,
            img: G.diamond,
            desc: "SVIP 1-15",
            color: S.levelColor[6]
        }, {
            label: `${t("vip.diamond")} II`,
            img: G.diamond,
            desc: "SVIP 16-37",
            color: S.levelColor[7]
        }, {
            label: `${t("vip.diamond")} III`,
            img: G.diamond,
            desc: "SVIP 38-55",
            color: S.levelColor[8]
        }]
    }
    Sd = Y(function() {
        const t = k(),
            a = Hh(),
            [s, n] = _e({
                loading: !0,
                rankInfo: []
            }),
            i = S.login ? S.getLevelInfo(S.vipLevel) : null,
            o = i ? i.type : -1,
            r = S.login ? S.vipLevel : -1;
        return f.useEffect(() => {
            M.get("/game/support/vip/rankInfo/").then(l => {
                l && n({
                    rankInfo: l,
                    loading: !1
                })
            }).catch(L)
        }, []), e.jsx(ne, {
            title: t("page.vip.dialog.title"),
            className: Qh,
            children: e.jsx(le, {
                children: s.loading ? e.jsx(pe, {}) : s.rankInfo.length <= 0 ? e.jsx(Ce, {}) : e.jsx(e.Fragment, {
                    children: s.rankInfo.map((l, c) => {
                        const d = o === l.vipRankId;
                        return e.jsx(Jh, {
                            vipLevelInfo: a[c],
                            levelItem: l,
                            userLevel: r,
                            defaultOpen: o <= 0 ? c === 0 : d
                        }, "level-item-" + c)
                    })
                })
            })
        })
    });

    function Yh(t) {
        return t > 69 ? "SVIP " + (t - 69) : "VIP " + t
    }

    function Gh(t) {
        if (S.bonusCurrencyName !== "BCD") {
            const a = w.getUsdPrice(S.bonusCurrencyName);
            return new oe(t).div(a).todp(2, oe.ROUND_DOWN).toFixed(2)
        } else return t
    }
    const Jh = J.memo(function({
            levelItem: t,
            vipLevelInfo: a,
            userLevel: s,
            defaultOpen: n
        }) {
            const i = k(),
                [o, r] = f.useState(n),
                l = S.bonusCurrencyName !== "BCD";
            return e.jsxs("div", {
                className: "viplevel-toggle-item",
                children: [e.jsxs("div", {
                    className: "tootle-label",
                    onClick: () => r(!o),
                    children: [e.jsxs("div", {
                        className: "left-text",
                        children: [e.jsx("div", {
                            className: "left-rec",
                            style: {
                                background: a.color
                            }
                        }), e.jsx("span", {
                            children: a.label
                        }), e.jsx("span", {
                            children: a.desc
                        })]
                    }), e.jsx("div", {
                        className: A("right-icon", o && "open"),
                        children: e.jsx(z, {
                            name: "Arrow",
                            className: o ? "open" : "close"
                        })
                    })]
                }), e.jsx(wa, {
                    visible: o,
                    children: e.jsxs("div", {
                        className: "toogle-list-wrap",
                        children: [e.jsxs("div", {
                            className: "toogle-table-head",
                            children: [e.jsx("p", {
                                className: "th-1",
                                children: i("common.level")
                            }), e.jsx("p", {
                                className: "th-2",
                                children: i("page.vip.required.xp")
                            }), e.jsxs("p", {
                                className: "th-3",
                                children: [i("vip.benefits.levelupbonus"), " (", l ? w.getAlias(S.bonusCurrencyName) : "BCD", ")"]
                            })]
                        }), t.levels.map((c, d) => {
                            const m = Yh(c.vipLevel),
                                h = s === c.vipLevel;
                            return e.jsxs("div", {
                                className: A("toogle-table-tr", h && "user-level-tr"),
                                children: [h && e.jsx("img", {
                                    alt: "right",
                                    className: "tr-right",
                                    src: G.right
                                }), e.jsxs("div", {
                                    className: "td-1",
                                    children: [e.jsx("img", {
                                        alt: "",
                                        src: a.img
                                    }), e.jsx("p", {
                                        children: m
                                    })]
                                }), e.jsx("div", {
                                    className: "td-2",
                                    children: c.requiredXp
                                }), e.jsx("div", {
                                    className: "td-3",
                                    children: Gh(c.bonusAmount)
                                })]
                            }, "toggle-tr-" + d)
                        })]
                    })
                })]
            })
        }),
        Qh = "v1xyg5g1";

    function Zh(t) {
        return t ? [{
            active: B.fiat_btn1_active,
            default: B.fiat_btn1,
            value: 0
        }, {
            active: B.fiat_btn2_active,
            default: B.fiat_btn2,
            value: 1
        }, {
            active: B.fiat_btn3_active,
            default: B.fiat_btn3,
            value: 2
        }] : [{
            active: B.tbtn_luckspin_2,
            default: B.tbtn_luckspin_1,
            value: 0
        }, {
            active: B.tbtn_superspin_2,
            default: B.tbtn_superspin_1,
            value: 1
        }, {
            active: B.tbtn_megaspin_2,
            default: B.tbtn_megaspin_1,
            value: 2
        }]
    }
    const Kh = J.memo(function({
            tab: t,
            onTab: a,
            level: s,
            updateFinished: n,
            isFiatSpin: i
        }) {
            const o = k(),
                r = W.tabs,
                l = Dt.find(m => m[4] === t) || Dt[0],
                c = t <= 1 && s === 0 ? 0 : l[0],
                d = Oo(l[4]);
            return e.jsxs("div", {
                className: A(Xh, i && "fiat-header"),
                children: [e.jsx("div", {
                    className: "tab-nav",
                    children: Zh(i).map(m => e.jsxs(q, {
                        style: i ? {
                            backgroundImage: t === r[m.value] ? "linear-gradient(to bottom, #565B65, #565B65)" : "linear-gradient(to bottom, #191a1b, #191a1b)"
                        } : {
                            backgroundColor: t === r[m.value] ? Wa(t) : "#191a1b"
                        },
                        onClick: () => a(r[m.value]),
                        children: [t != r[m.value] && e.jsx("img", {
                            src: m.default
                        }), t === r[m.value] && e.jsx("img", {
                            src: m.active
                        })]
                    }, m.value))
                }), e.jsx("div", {
                    className: "tag-wrap",
                    children: e.jsxs("div", {
                        className: A("tag", n && "active"),
                        style: i ? {
                            backgroundImage: "linear-gradient(to bottom, #565B65, #565B65)"
                        } : {
                            backgroundColor: Wa(t)
                        },
                        children: [e.jsx("div", {
                            className: "tag-img",
                            style: {
                                color: Wa(t)
                            },
                            children: d
                        }), e.jsx("div", {
                            className: "desc",
                            children: o("page.spin.level_above", String(c))
                        })]
                    })
                })]
            })
        }),
        Xh = "s65rjg3";

    function Kr({
        list: t,
        onBack: a
    }) {
        const [s, n] = f.useState(!1), i = k();
        f.useEffect(() => {
            n(!0)
        }, []);
        const o = () => {
            n(!1), setTimeout(() => {
                a()
            }, 200)
        };
        return e.jsx("div", {
            className: A(eg, "winlist", s && "enter", W.fiat && "fiat"),
            children: e.jsxs("div", {
                className: "winlist-wrap",
                children: [e.jsx("div", {
                    className: "pop-control",
                    children: e.jsx("button", {
                        onClick: o,
                        className: "back",
                        children: e.jsx(z, {
                            name: "Arrow"
                        })
                    })
                }), e.jsxs("div", {
                    className: "header",
                    children: [e.jsx("img", {
                        src: B.crown,
                        className: "crown",
                        alt: ""
                    }), e.jsxs("div", {
                        className: "spin-bonus",
                        children: [e.jsx("img", {
                            className: "pre-img",
                            src: B.laurel,
                            alt: ""
                        }), e.jsx("div", {
                            className: "tit",
                            children: i("page.spin.bonus")
                        }), e.jsx("img", {
                            className: "suf-img",
                            src: B.laurel,
                            alt: ""
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "win-list",
                    children: [e.jsxs("div", {
                        className: "table-header td",
                        children: [e.jsx("div", {
                            className: "p",
                            children: i("page.share.username_label")
                        }), e.jsx("div", {
                            className: "p",
                            children: i("page.spin.level")
                        }), e.jsx("div", {
                            className: "p",
                            children: i("common.prize")
                        })]
                    }), t.length > 0 ? e.jsx($1, {
                        slidesPerView: "auto",
                        direction: "vertical",
                        freeMode: !0,
                        loop: !0,
                        autoplay: {
                            delay: 200,
                            disableOnInteraction: !1
                        },
                        effect: "fade",
                        slidesPerGroup: 1,
                        className: "winlist-swiper swiper-no-swiping",
                        children: t.map((r, l) => {
                            const c = new oe(r.amount || 0).mul(w.getUsdPrice(r.currencyName)).gte(50);
                            return e.jsxs(q1, {
                                className: "td",
                                children: [e.jsx("div", {
                                    className: "p name",
                                    children: r.username
                                }), e.jsx("div", {
                                    className: "p",
                                    children: e.jsx("span", {
                                        style: {
                                            color: "#FFFFFF"
                                        },
                                        children: Mo(W.getTab(r.level))
                                    })
                                }), e.jsx("div", {
                                    className: A("p", c && "big"),
                                    children: e.jsx(Oe.CoinFormat, {
                                        sign: !0,
                                        icon: !0,
                                        name: r.currencyName,
                                        amount: r.amount
                                    })
                                })]
                            }, "tr-" + l)
                        })
                    }) : e.jsx(Ce, {})]
                })]
            })
        })
    }
    const eg = "sc1xzgt";

    function tg() {
        return M.post("/activity/lucky/spin/news/", {
            start: new Date().getTime() - 24 * 60 * 60 * 1e3
        })
    }

    function ag({
        num: t
    }) {
        const a = {
                val: W.totalBonus
            },
            s = f.useRef(null),
            n = k();
        return f.useEffect(() => {
            const i = Re.to(a, {
                val: t,
                duration: 3,
                ease: Fc.easeInOut,
                onUpdate: () => {
                    s.current && (s.current.innerHTML = w.toLocaleCurrency(a.val, "USD"))
                }
            });
            return W.totalBonus = t, () => Re.killTweensOf(i)
        }, [t]), e.jsxs("div", {
            className: "left-cont",
            children: [e.jsx("div", {
                className: "tit",
                children: n("page.spin.totalbonus")
            }), e.jsx("div", {
                className: "amount",
                ref: s,
                children: w.toLocaleCurrency(a.val, "USD")
            })]
        })
    }
    const Xr = J.memo(function({
            spinLoading: t,
            className: a
        }) {
            const [s, n] = f.useState(!1), {
                data: i,
                error: o
            } = Be(tg);
            return i ? e.jsxs(e.Fragment, {
                children: [s && e.jsx(je, {
                    id: "spin-winlist",
                    children: e.jsx(Kr, {
                        list: i.updates,
                        onBack: () => n(!1)
                    })
                }), e.jsxs("div", {
                    className: A(el, a),
                    children: [e.jsx(ag, {
                        num: i.totalBonus
                    }), e.jsx("div", {
                        className: "right-cont",
                        onClick: () => {
                            t || n(!s)
                        },
                        children: e.jsx(ng, {
                            list: i.updates
                        })
                    })]
                })]
            }) : e.jsx("div", {
                className: A(el, a),
                children: e.jsx(pe, {})
            })
        }),
        sg = J.memo(({
            data: t,
            it: a
        }) => e.jsxs(ge.div, {
            className: "data-cont",
            style: {
                position: "absolute"
            },
            initial: "initial",
            animate: "animate",
            exit: "exit",
            variants: a,
            children: [e.jsx(Yt, {
                name: "",
                userId: t.userId
            }), e.jsxs("div", {
                className: "cont",
                children: [e.jsx("div", {
                    className: "name",
                    children: t.username
                }), e.jsxs("div", {
                    className: "win",
                    children: ["Win: ", e.jsx("span", {
                        className: "amount",
                        children: t.amount
                    }), " ", e.jsx("span", {
                        className: "currency",
                        children: w.getAlias(t.currencyName)
                    }), " "]
                }), e.jsxs("div", {
                    className: "type",
                    children: ["in ", e.jsx("b", {
                        style: {
                            color: mu(W.getTab(t.level))
                        },
                        children: Mo(W.getTab(t.level))
                    })]
                })]
            }), e.jsx(z, {
                name: "Arrow"
            })]
        }));

    function ng({
        list: t
    }) {
        const [a, s] = f.useState(0), n = t[a % t.length];
        f.useEffect(() => {
            const o = window.setInterval(() => s(r => r + 1), 5e3);
            return () => {
                clearInterval(o)
            }
        }, []);
        const i = {
            initial: {
                y: "100%"
            },
            animate: {
                y: "0"
            },
            exit: {
                y: "-100%"
            }
        };
        return !t || t.length === 0 ? null : e.jsx("div", {
            children: e.jsx(sg, {
                data: n,
                it: i
            }, a)
        })
    }
    const el = "s12n27cf";

    function ig(t) {
        return t ? [{
            active: B.fiat_btn1_active,
            default: B.fiat_btn1,
            value: 0
        }, {
            active: B.fiat_btn2_active,
            default: B.fiat_btn2,
            value: 1
        }, {
            active: B.fiat_btn3_active,
            default: B.fiat_btn3,
            value: 2
        }] : [{
            active: B.tbtn_luckspin_2,
            default: B.japanTbtnLuckSpin1,
            value: 0
        }, {
            active: B.tbtn_superspin_2,
            default: B.japanTbtnSuperSpin1,
            value: 1
        }, {
            active: B.tbtn_megaspin_2,
            default: B.japanTbtnMegaSpin1,
            value: 2
        }]
    }
    const og = J.memo(function({
            tab: t,
            onTab: a,
            level: s,
            updateFinished: n,
            isFiatSpin: i
        }) {
            const o = k(),
                r = W.tabs,
                l = Dt.find(m => m[4] === t) || Dt[0],
                c = t <= 1 && s === 0 ? 0 : l[0],
                d = Oo(l[4]);
            return e.jsxs("div", {
                className: A(rg, i && "fiat-header"),
                children: [e.jsx("div", {
                    className: "tab-nav",
                    children: ig(i).map(m => e.jsxs(q, {
                        style: i ? {
                            backgroundImage: t === r[m.value] ? "linear-gradient(to bottom, #565B65, #565B65)" : "linear-gradient(to bottom, ##EDEDED, #EDEDED)"
                        } : {
                            backgroundColor: t === r[m.value] ? Ua(t) : "#EDEDED"
                        },
                        onClick: () => a(r[m.value]),
                        children: [t != r[m.value] && e.jsx("img", {
                            src: m.default
                        }), t === r[m.value] && e.jsx("img", {
                            src: m.active
                        })]
                    }, m.value))
                }), e.jsx("div", {
                    className: "tag-wrap",
                    children: e.jsxs("div", {
                        className: A("tag", n && "active"),
                        style: i ? {
                            backgroundImage: "linear-gradient(to bottom, #565B65, #565B65)"
                        } : {
                            backgroundColor: Ua(t)
                        },
                        children: [e.jsx("div", {
                            className: "tag-img",
                            style: {
                                color: Ua(t)
                            },
                            children: d
                        }), e.jsx("div", {
                            className: "desc",
                            children: o("page.spin.level_above", String(c))
                        })]
                    })
                })]
            })
        }),
        rg = "s18jhd0q";

    function lg() {
        return M.post("/activity/lucky/spin/news/", {
            start: new Date().getTime() - 24 * 60 * 60 * 1e3
        })
    }

    function cg({
        num: t
    }) {
        const a = {
                val: W.totalBonus
            },
            s = f.useRef(null),
            n = k();
        return f.useEffect(() => {
            const i = Re.to(a, {
                val: t,
                duration: 3,
                ease: Fc.easeInOut,
                onUpdate: () => {
                    s.current && (s.current.innerHTML = w.toLocaleCurrency(a.val, "USD"))
                }
            });
            return W.totalBonus = t, () => Re.killTweensOf(i)
        }, [t]), e.jsx("div", {
            className: "left-cont",
            children: e.jsxs("div", {
                className: "left-cont-inner",
                children: [e.jsx("div", {
                    className: "tit",
                    children: n("page.spin.totalbonus")
                }), e.jsx("div", {
                    className: "amount",
                    ref: s,
                    children: w.toLocaleCurrency(a.val, "USD")
                })]
            })
        })
    }
    const dg = J.memo(function({
            spinLoading: t
        }) {
            const [a, s] = f.useState(!1), {
                data: n,
                error: i
            } = Be(lg);
            return n ? e.jsxs(e.Fragment, {
                children: [a && e.jsx(je, {
                    id: "spin-winlist",
                    children: e.jsx(Kr, {
                        list: n.updates,
                        onBack: () => s(!1)
                    })
                }), e.jsxs("div", {
                    className: tl,
                    children: [e.jsx(cg, {
                        num: n.totalBonus
                    }), e.jsx("div", {
                        className: "right-cont",
                        onClick: () => {
                            t || s(!a)
                        },
                        children: e.jsx(ug, {
                            list: n.updates
                        })
                    })]
                })]
            }) : e.jsx("div", {
                className: tl,
                children: e.jsx(pe, {})
            })
        }),
        mg = J.memo(({
            data: t,
            it: a
        }) => e.jsxs(ge.div, {
            className: "data-cont",
            style: {
                position: "absolute"
            },
            initial: "initial",
            animate: "animate",
            exit: "exit",
            variants: a,
            children: [e.jsx(Yt, {
                name: "",
                userId: t.userId
            }), e.jsxs("div", {
                className: "cont",
                children: [e.jsx("div", {
                    className: "name",
                    children: t.username
                }), e.jsxs("div", {
                    className: "win",
                    children: ["\u52DD\u5229: ", e.jsx("span", {
                        className: "amount",
                        children: t.amount
                    }), e.jsx("span", {
                        className: "currency",
                        children: w.getAlias(t.currencyName)
                    }), " "]
                }), e.jsx("div", {
                    className: "type",
                    children: "\u30E9\u30C3\u30AD\u30FC\u30B9\u30D4\u30F3\u3067"
                })]
            }), e.jsx(z, {
                name: "Arrow"
            })]
        }));

    function ug({
        list: t
    }) {
        const [a, s] = f.useState(0), n = t[a % t.length];
        f.useEffect(() => {
            const o = window.setInterval(() => s(r => r + 1), 5e3);
            return () => {
                clearInterval(o)
            }
        }, []);
        const i = {
            initial: {
                y: "100%"
            },
            animate: {
                y: "0"
            },
            exit: {
                y: "-100%"
            }
        };
        return !t || t.length === 0 ? null : e.jsx("div", {
            children: e.jsx(mg, {
                data: n,
                it: i
            }, a)
        })
    }
    const tl = "s7p3hvn",
        pg = $(() => K(() =>
            import ("./chunk-8965b113.js").then(async t => (await t.__tla, t)), ["assets/chunk-8965b113.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/SpinResultParticles.ddc3426d.css"]));

    function hg() {
        const t = Math.floor(Math.random() * 3);
        return t === 0 ? "I got free Crypto from BC.GAME free daily spin! Try your luck now! Free spin to get 5 BTC!" : t === 1 ? "Wow! I won free crypto from daily free spin at BC.GAME! Try your luck now! Free spin to get 5 BTC!" : "I got lucky at BC.GAME free Lucky Spin today! Try your luck now! Free spin to get 5 BTC!"
    }

    function gg() {
        const t = k(),
            {
                data: a
            } = Be(() => H1({
                title: "Spin",
                content: hg()
            }));
        if (!a) return e.jsx("div", {
            className: al
        });
        const s = a.filter(n => n.src);
        return e.jsxs("div", {
            className: al,
            children: [e.jsx("div", {
                className: "share-bottom",
                children: e.jsx("div", {
                    className: "word",
                    children: t("page.share.share_social")
                })
            }), e.jsx("div", {
                className: "share-cont",
                children: s.slice(0, 6).map((n, i) => e.jsx("a", {
                    href: n.src,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: A("share-item"),
                    children: e.jsx("img", {
                        className: "icon",
                        src: n.icon
                    })
                }, i))
            })]
        })
    }
    const al = "s165ow5k";

    function fg({
        amount: t,
        currencyName: a,
        locked: s,
        level: n,
        trackId: i,
        bigPrize: o
    }) {
        const r = k(),
            [l, c] = f.useState(!1),
            {
                publicChatStore: d
            } = Ee(),
            m = re(),
            h = async function() {
                const g = d.currentRoom.id,
                    u = r("page.share.success");
                if (await ke.confirm(r("page.share.room") + "?")) return M.post("/activity/lucky/spin/share/", {
                    trackId: i,
                    roomId: g
                }).then(() => {
                    L(u), c(!0)
                })
            };
        return e.jsxs("div", {
            className: yg,
            children: [e.jsx(pg, {
                bigPrize: o
            }), e.jsxs("div", {
                className: "img-cont",
                children: [e.jsx("img", {
                    className: "bg",
                    src: B.bg_lottery,
                    alt: ""
                }), e.jsx("img", {
                    className: "img",
                    src: au(W.getTab(n)),
                    alt: ""
                })]
            }), e.jsxs("div", {
                className: A("cont", s && "locked"),
                children: [e.jsx(De, {
                    name: a
                }), "+ ", H.formateAmount(t, 5), e.jsxs("span", {
                    className: "currency",
                    children: [s && "Locked", " ", w.getAlias(a)]
                })]
            }), e.jsxs("div", {
                className: "btn-wrap",
                children: [e.jsx(q, {
                    className: "collect",
                    type: "conic",
                    onClick: () => {
                        s ? (ke.close(), setTimeout(() => {
                            m("#/bonus/dashboard")
                        }, 50)) : ke.back(), W.soundSprites.play("Collect")
                    },
                    children: r(s ? "common.collect.view" : "common.actions.collect_now")
                }), e.jsx(q, {
                    onClick: h,
                    disabled: l,
                    className: "share-local",
                    children: e.jsx(z, {
                        name: "Share"
                    })
                })]
            }), e.jsx(gg, {})]
        })
    }
    const yg = "s44acgj",
        bg = J.memo(function({
            loading: t,
            update: a
        }) {
            const s = f.useRef(null);
            return f.useEffect(() => {
                setInterval(() => {
                    if (s.current) {
                        const n = s.current.classList;
                        n.contains("light") ? n.remove("light") : n.add("light")
                    }
                }, 1e3)
            }, []), e.jsx("img", {
                ref: s,
                className: A("spin-light", !t && !a && "active"),
                src: B.spinLight3,
                alt: ""
            })
        });

    function vg(t, a, s, n, i) {
        const o = W.getTab(t),
            r = W.fiat,
            l = {
                initial: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    scale: s ? .3 : 1,
                    rotate: s ? -30 : 0
                },
                transition: {
                    type: "spring",
                    delay: s ? 1.6 : .4
                }
            },
            c = {
                initial: {
                    scale: 1,
                    opacity: 1
                },
                animate: {
                    scale: s ? 2 : 1,
                    opacity: s ? 0 : 1
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            },
            d = {
                initial: {
                    opacity: 1,
                    y: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    y: s ? -100 : 0
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            },
            m = {
                initial: {
                    opacity: 1,
                    scale: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    scale: s ? 1.5 : 1
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            };
        return {
            spinPoint: e.jsx(ge.img, Q(U({}, m), {
                src: ou(t),
                alt: ""
            })),
            spinMain: e.jsxs(ge.div, Q(U({
                className: wg
            }, l), {
                children: [e.jsx(bg, {
                    loading: a,
                    update: s
                }), e.jsx("img", {
                    className: "spin-img",
                    src: Fo(t),
                    alt: ""
                }), t === 5 && e.jsx("img", {
                    className: "diamond-cont",
                    src: B.spin_diamond_fuck,
                    alt: ""
                }), i.map((h, g) => {
                    const u = {
                        initial: {
                            opacity: 1,
                            height: 24,
                            x: 1,
                            transform: `rotate(${g*22.5}deg)`
                        },
                        animate: {
                            opacity: s ? 0 : 1,
                            height: s ? 0 : 24,
                            x: s ? 0 : 20
                        },
                        transition: {
                            type: "spring",
                            mass: 1,
                            stiffness: 1e3,
                            damping: 26,
                            delay: s ? 0 : 1
                        }
                    };
                    return e.jsxs(ge.div, Q(U({}, u), {
                        className: A("spin-item", r && "fiat"),
                        children: [e.jsx("span", {
                            className: "amount",
                            children: H.formateAmount(i[g].amount, r ? 2 : 5)
                        }), r && w.localCurrencys[i[g].currencyName] ? e.jsx("div", {
                            className: A("coin-icon", `col-${g}`),
                            children: w.localCurrencys[i[g].currencyName].cs
                        }) : e.jsx(De, {
                            name: i[g].currencyName
                        }), i[g].locked && e.jsx(z, {
                            name: "Locked"
                        })]
                    }), g)
                })]
            })),
            spinBtn: e.jsxs(ge.div, Q(U({}, c), {
                className: A(a && "loading", "btn-img"),
                onClick: n,
                children: [e.jsx("img", {
                    src: nu(t),
                    alt: ""
                }), e.jsx("img", {
                    className: "btn-txt",
                    src: lu(o),
                    alt: ""
                })]
            })),
            spinBanner: e.jsx(ge.img, Q(U({}, d), {
                src: cu(t)
            }))
        }
    }
    const wg = "snct4pe",
        xg = {
            initial: {
                opacity: 0,
                scale: .3,
                rotate: -30
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotate: 0
            },
            transition: {
                duration: .5
            }
        },
        jg = {
            initial: {
                y: -50,
                opacity: 0,
                scale: .3
            },
            animate: {
                y: 0,
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .5
            }
        };

    function _g(t, a) {
        let s = 360;
        if (t > 0 && a.current) {
            const n = a.current.style.transform.match(/\d+/),
                i = n ? n[0] : 0,
                o = (Math.ceil(Number(i) / 360) + 5) * 360;
            s = 360 - t * 22.5 + o
        }
        return s
    }
    const kg = J.memo(function({
            level: t,
            res: a,
            loading: s,
            update: n,
            onSpin: i,
            children: o
        }) {
            const r = f.useRef(null),
                l = f.useRef(null),
                c = f.useRef(null),
                d = W.spinOptions[t],
                [m, h] = f.useState(!0),
                {
                    spinPoint: g,
                    spinMain: u,
                    spinBtn: p,
                    spinBanner: b
                } = vg(t, s, n, i, d);
            return f.useEffect(() => {
                const v = Re.timeline(),
                    _ = a.hitSection;
                return _ > 0 && r.current && c.current && l.current ? (v.to(r.current, {
                    rotate: _g(_, r),
                    duration: 3.6
                }), v.to(l.current, {
                    scale: 1.1,
                    duration: .3,
                    delay: .3
                }), v.to(l.current, {
                    scale: 1,
                    duration: .2
                }), v.set(c.current, {
                    x: -20,
                    scale: 1
                }), v.to(c.current, {
                    x: 200,
                    skewX: -25,
                    scale: 3.4,
                    duration: .5,
                    delay: .3
                }), v.to(l.current, {
                    scale: 1,
                    onComplete: () => {
                        W.setSpinAnimateEnd()
                    }
                })) : v.set(r.current, {
                    rotate: 0
                }), () => {
                    Re.killTweensOf(v)
                }
            }, [a]), f.useEffect(() => () => W.setSpinAnimateEnd(), []), f.useEffect(() => {
                h(!1), setTimeout(() => {
                    h(!0)
                }, 0)
            }, [t]), e.jsxs("div", {
                className: Ng,
                children: [e.jsx(pt, {
                    children: m && f.createElement(ge.div, Q(U({
                        className: sl
                    }, xg), {
                        key: t
                    }), e.jsx("div", {
                        ref: r,
                        className: sl,
                        children: u
                    }), e.jsxs("div", {
                        className: "point-img",
                        ref: l,
                        children: [e.jsx("div", {
                            className: "light-wrap",
                            children: e.jsx("div", {
                                ref: c,
                                className: "point-light"
                            })
                        }), g]
                    }))
                }), p, f.createElement(ge.div, Q(U({}, jg), {
                    key: t,
                    className: "banner-img"
                }), b), o]
            })
        }),
        sl = "s1dulkrc",
        Ng = "s196nhep";

    function Cg(t, a, s, n, i) {
        W.getTab(t);
        const o = W.fiat,
            r = {
                initial: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    scale: s ? .3 : 1,
                    rotate: s ? -30 : 0
                },
                transition: {
                    type: "spring",
                    delay: s ? 1.6 : .4
                }
            },
            l = {
                initial: {
                    scale: 1,
                    opacity: 1
                },
                animate: {
                    scale: s ? 2 : 1,
                    opacity: s ? 0 : 1
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            },
            c = {
                initial: {
                    opacity: 1,
                    y: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    y: s ? -100 : 0
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            },
            d = {
                initial: {
                    opacity: 1,
                    scale: 0
                },
                animate: {
                    opacity: s ? 0 : 1,
                    scale: s ? 1.5 : 1
                },
                transition: {
                    type: "spring",
                    delay: 0
                }
            };
        return {
            spinPoint: e.jsx(ge.img, Q(U({}, d), {
                src: ru(t),
                alt: ""
            })),
            spinMain: e.jsxs(ge.div, Q(U({
                className: Tg
            }, r), {
                children: [e.jsx("img", {
                    className: "spin-img",
                    src: su(t),
                    alt: ""
                }), i.map((m, h) => {
                    const g = {
                        initial: {
                            opacity: 1,
                            height: 24,
                            x: 1,
                            transform: `rotate(${h*22.5}deg)`
                        },
                        animate: {
                            opacity: s ? 0 : 1,
                            height: s ? 0 : 24,
                            x: s ? 0 : 20
                        },
                        transition: {
                            type: "spring",
                            mass: 1,
                            stiffness: 1e3,
                            damping: 26,
                            delay: s ? 0 : 1
                        }
                    };
                    return e.jsxs(ge.div, Q(U({}, g), {
                        className: A("spin-item", o && "fiat"),
                        children: [e.jsx("span", {
                            className: "amount",
                            children: H.formateAmount(i[h].amount, o ? 2 : 5)
                        }), o && w.localCurrencys[i[h].currencyName] ? e.jsx("div", {
                            className: A("coin-icon", `col-${h}`),
                            children: w.localCurrencys[i[h].currencyName].cs
                        }) : e.jsx(De, {
                            name: i[h].currencyName
                        }), i[h].locked && e.jsx(z, {
                            name: "Locked"
                        })]
                    }), h)
                })]
            })),
            spinBtn: e.jsx(ge.div, Q(U({}, l), {
                className: A(a && "loading", "btn-img"),
                onClick: n,
                children: e.jsx("img", {
                    src: iu(t),
                    alt: ""
                })
            })),
            spinBanner: e.jsx(ge.img, Q(U({}, c), {
                src: du(t)
            }))
        }
    }
    const Tg = "spj55bv",
        Sg = {
            initial: {
                opacity: 0,
                scale: .3,
                rotate: -30
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotate: 0
            },
            transition: {
                duration: .5
            }
        },
        Ag = {
            initial: {
                y: -50,
                opacity: 0,
                scale: .3
            },
            animate: {
                y: 0,
                opacity: 1,
                scale: 1
            },
            transition: {
                duration: .5
            }
        };

    function Ig(t, a) {
        let s = 360;
        if (t > 0 && a.current) {
            const n = a.current.style.transform.match(/\d+/),
                i = n ? n[0] : 0,
                o = (Math.ceil(Number(i) / 360) + 5) * 360;
            s = 360 - t * 22.5 + o
        }
        return s
    }
    const Rg = J.memo(function({
            level: t,
            res: a,
            loading: s,
            update: n,
            onSpin: i,
            children: o
        }) {
            const r = f.useRef(null),
                l = f.useRef(null),
                c = f.useRef(null),
                d = W.spinOptions[t],
                [m, h] = f.useState(!0),
                {
                    spinPoint: g,
                    spinMain: u,
                    spinBtn: p,
                    spinBanner: b
                } = Cg(t, s, n, i, d);
            return f.useEffect(() => {
                const v = Re.timeline(),
                    _ = a.hitSection;
                return _ > 0 && r.current && c.current && l.current ? (v.to(r.current, {
                    rotate: Ig(_, r),
                    duration: 3.6
                }), v.to(l.current, {
                    scale: 1.1,
                    duration: .3,
                    delay: .3
                }), v.to(l.current, {
                    scale: 1,
                    duration: .2
                }), v.set(c.current, {
                    x: -20,
                    scale: 1
                }), v.to(c.current, {
                    x: 200,
                    skewX: -25,
                    scale: 3.4,
                    duration: .5,
                    delay: .3
                }), v.to(l.current, {
                    scale: 1,
                    onComplete: () => {
                        W.setSpinAnimateEnd()
                    }
                })) : v.set(r.current, {
                    rotate: 0
                }), () => {
                    Re.killTweensOf(v)
                }
            }, [a]), f.useEffect(() => () => W.setSpinAnimateEnd(), []), f.useEffect(() => {
                h(!1), setTimeout(() => {
                    h(!0)
                }, 0)
            }, [t]), e.jsxs("div", {
                className: Pg,
                children: [e.jsx(pt, {
                    children: f.createElement(ge.div, Q(U({
                        className: Dg
                    }, Sg), {
                        key: t
                    }), e.jsx("div", {
                        ref: r,
                        className: "inner-wrapper",
                        children: u
                    }), e.jsxs("div", {
                        className: "point-img",
                        ref: l,
                        children: [e.jsx("div", {
                            className: "light-wrap",
                            children: e.jsx("div", {
                                ref: c,
                                className: "point-light"
                            })
                        }), g]
                    }))
                }), p, f.createElement(ge.div, Q(U({}, Ag), {
                    key: t,
                    className: "banner-img"
                }), b), o]
            })
        }),
        Dg = "shtjuq3",
        Pg = "s1fj6nvm";
    var Bg = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
        Eg = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
        Lg = Math.PI / 180,
        ia = Math.sin,
        oa = Math.cos,
        Ot = Math.abs,
        Mt = Math.sqrt,
        Fg = function(t) {
            return typeof t == "number"
        },
        nl = 1e5,
        dt = function(t) {
            return Math.round(t * nl) / nl || 0
        };

    function Og(t, a, s, n, i, o, r) {
        for (var l = t.length, c, d, m, h, g; --l > -1;)
            for (c = t[l], d = c.length, m = 0; m < d; m += 2) h = c[m], g = c[m + 1], c[m] = h * a + g * n + o, c[m + 1] = h * s + g * i + r;
        return t._dirty = 1, t
    }

    function Mg(t, a, s, n, i, o, r, l, c) {
        if (!(t === l && a === c)) {
            s = Ot(s), n = Ot(n);
            var d = i % 360 * Lg,
                m = oa(d),
                h = ia(d),
                g = Math.PI,
                u = g * 2,
                p = (t - l) / 2,
                b = (a - c) / 2,
                v = m * p + h * b,
                _ = -h * p + m * b,
                T = v * v,
                N = _ * _,
                D = T / (s * s) + N / (n * n);
            D > 1 && (s = Mt(D) * s, n = Mt(D) * n);
            var V = s * s,
                E = n * n,
                R = (V * E - V * N - E * T) / (V * N + E * T);
            R < 0 && (R = 0);
            var j = (o === r ? -1 : 1) * Mt(R),
                C = j * (s * _ / n),
                y = j * -(n * v / s),
                x = (t + l) / 2,
                I = (a + c) / 2,
                P = x + (m * C - h * y),
                te = I + (h * C + m * y),
                ae = (v - C) / s,
                me = (_ - y) / n,
                Fe = (-v - C) / s,
                mt = (-_ - y) / n,
                Ct = ae * ae + me * me,
                Tt = (me < 0 ? -1 : 1) * Math.acos(ae / Mt(Ct)),
                We = (ae * mt - me * Fe < 0 ? -1 : 1) * Math.acos((ae * Fe + me * mt) / Mt(Ct * (Fe * Fe + mt * mt)));
            isNaN(We) && (We = g), !r && We > 0 ? We -= u : r && We < 0 && (We += u), Tt %= u, We %= u;
            var xc = Math.ceil(Ot(We) / (u / 4)),
                nt = [],
                ua = We / xc,
                pa = 4 / 3 * ia(ua / 2) / (1 + oa(ua / 2)),
                Jx = m * s,
                Qx = h * s,
                Zx = h * -n,
                Kx = m * n,
                Ue;
            for (Ue = 0; Ue < xc; Ue++) i = Tt + Ue * ua, v = oa(i), _ = ia(i), ae = oa(i += ua), me = ia(i), nt.push(v - pa * _, _ + pa * v, ae + pa * me, me - pa * ae, ae, me);
            for (Ue = 0; Ue < nt.length; Ue += 2) v = nt[Ue], _ = nt[Ue + 1], nt[Ue] = v * Jx + _ * Zx + P, nt[Ue + 1] = v * Qx + _ * Kx + te;
            return nt[Ue - 2] = l, nt[Ue - 1] = c, nt
        }
    }

    function Wg(t) {
        var a = (t + "").replace(Eg, function(C) {
                var y = +C;
                return y < 1e-4 && y > -1e-4 ? 0 : y
            }).match(Bg) || [],
            s = [],
            n = 0,
            i = 0,
            o = 2 / 3,
            r = a.length,
            l = 0,
            c = "ERROR: malformed path: " + t,
            d, m, h, g, u, p, b, v, _, T, N, D, V, E, R, j = function(C, y, x, I) {
                T = (x - C) / 3, N = (I - y) / 3, b.push(C + T, y + N, x - T, I - N, x, I)
            };
        if (!t || !isNaN(a[0]) || isNaN(a[1])) return console.log(c), s;
        for (d = 0; d < r; d++)
            if (V = u, isNaN(a[d]) ? (u = a[d].toUpperCase(), p = u !== a[d]) : d--, h = +a[d + 1], g = +a[d + 2], p && (h += n, g += i), d || (v = h, _ = g), u === "M") b && (b.length < 8 ? s.length -= 1 : l += b.length), n = v = h, i = _ = g, b = [h, g], s.push(b), d += 2, u = "L";
            else if (u === "C") b || (b = [0, 0]), p || (n = i = 0), b.push(h, g, n + a[d + 3] * 1, i + a[d + 4] * 1, n += a[d + 5] * 1, i += a[d + 6] * 1), d += 6;
        else if (u === "S") T = n, N = i, (V === "C" || V === "S") && (T += n - b[b.length - 4], N += i - b[b.length - 3]), p || (n = i = 0), b.push(T, N, h, g, n += a[d + 3] * 1, i += a[d + 4] * 1), d += 4;
        else if (u === "Q") T = n + (h - n) * o, N = i + (g - i) * o, p || (n = i = 0), n += a[d + 3] * 1, i += a[d + 4] * 1, b.push(T, N, n + (h - n) * o, i + (g - i) * o, n, i), d += 4;
        else if (u === "T") T = n - b[b.length - 4], N = i - b[b.length - 3], b.push(n + T, i + N, h + (n + T * 1.5 - h) * o, g + (i + N * 1.5 - g) * o, n = h, i = g), d += 2;
        else if (u === "H") j(n, i, n = h, i), d += 1;
        else if (u === "V") j(n, i, n, i = h + (p ? i - n : 0)), d += 1;
        else if (u === "L" || u === "Z") u === "Z" && (h = v, g = _, b.closed = !0), (u === "L" || Ot(n - h) > .5 || Ot(i - g) > .5) && (j(n, i, h, g), u === "L" && (d += 2)), n = h, i = g;
        else if (u === "A") {
            if (E = a[d + 4], R = a[d + 5], T = a[d + 6], N = a[d + 7], m = 7, E.length > 1 && (E.length < 3 ? (N = T, T = R, m--) : (N = R, T = E.substr(2), m -= 2), R = E.charAt(1), E = E.charAt(0)), D = Mg(n, i, +a[d + 1], +a[d + 2], +a[d + 3], +E, +R, (p ? n : 0) + T * 1, (p ? i : 0) + N * 1), d += m, D)
                for (m = 0; m < D.length; m++) b.push(D[m]);
            n = b[b.length - 2], i = b[b.length - 1]
        } else console.log(c);
        return d = b.length, d < 6 ? (s.pop(), d = 0) : b[0] === b[d - 2] && b[1] === b[d - 1] && (b.closed = !0), s.totalPoints = l + d, s
    }

    function Ug(t) {
        Fg(t[0]) && (t = [t]);
        var a = "",
            s = t.length,
            n, i, o, r;
        for (i = 0; i < s; i++) {
            for (r = t[i], a += "M" + dt(r[0]) + "," + dt(r[1]) + " C", n = r.length, o = 2; o < n; o++) a += dt(r[o++]) + "," + dt(r[o++]) + " " + dt(r[o++]) + "," + dt(r[o++]) + " " + dt(r[o++]) + "," + dt(r[o]) + " ";
            r.closed && (a += "z")
        }
        return a
    }
    var Le, il, ol = function() {
            return Le || typeof window < "u" && (Le = window.gsap) && Le.registerPlugin && Le
        },
        rl = function() {
            Le = ol(), Le ? (Le.registerEase("_CE", la.create), il = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        Vg = 1e20,
        ra = function(t) {
            return ~~(t * 1e3 + (t < 0 ? -.5 : .5)) / 1e3
        },
        zg = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
        $g = /[cLlsSaAhHvVtTqQ]/g,
        qg = function(t) {
            var a = t.length,
                s = Vg,
                n;
            for (n = 1; n < a; n += 6) + t[n] < s && (s = +t[n]);
            return s
        },
        Hg = function(t, a, s) {
            !s && s !== 0 && (s = Math.max(+t[t.length - 1], +t[1]));
            var n = +t[0] * -1,
                i = -s,
                o = t.length,
                r = 1 / (+t[o - 2] + n),
                l = -a || (Math.abs(+t[o - 1] - +t[1]) < .01 * (+t[o - 2] - +t[0]) ? qg(t) + i : +t[o - 1] + i),
                c;
            for (l ? l = 1 / l : l = -r, c = 0; c < o; c += 2) t[c] = (+t[c] + n) * r, t[c + 1] = (+t[c + 1] + i) * l
        },
        Yg = function t(a, s, n, i, o, r, l, c, d, m, h) {
            var g = (a + n) / 2,
                u = (s + i) / 2,
                p = (n + o) / 2,
                b = (i + r) / 2,
                v = (o + l) / 2,
                _ = (r + c) / 2,
                T = (g + p) / 2,
                N = (u + b) / 2,
                D = (p + v) / 2,
                V = (b + _) / 2,
                E = (T + D) / 2,
                R = (N + V) / 2,
                j = l - a,
                C = c - s,
                y = Math.abs((n - l) * C - (i - c) * j),
                x = Math.abs((o - l) * C - (r - c) * j),
                I;
            return m || (m = [{
                x: a,
                y: s
            }, {
                x: l,
                y: c
            }], h = 1), m.splice(h || m.length - 1, 0, {
                x: E,
                y: R
            }), (y + x) * (y + x) > d * (j * j + C * C) && (I = m.length, t(a, s, g, u, T, N, E, R, d, m, h), t(E, R, D, V, v, _, l, c, d, m, h + 1 + (m.length - I))), m
        },
        la = function() {
            function t(s, n, i) {
                il || rl(), this.id = s, this.setData(n, i)
            }
            var a = t.prototype;
            return a.setData = function(s, n) {
                n = n || {}, s = s || "0,0,1,1";
                var i = s.match(zg),
                    o = 1,
                    r = [],
                    l = [],
                    c = n.precision || 1,
                    d = c <= 1,
                    m, h, g, u, p, b, v, _, T;
                if (this.data = s, ($g.test(s) || ~s.indexOf("M") && s.indexOf("C") < 0) && (i = Wg(s)[0]), m = i.length, m === 4) i.unshift(0, 0), i.push(1, 1), m = 8;
                else if ((m - 2) % 6) throw "Invalid CustomEase";
                for ((+i[0] != 0 || +i[m - 2] != 1) && Hg(i, n.height, n.originY), this.segment = i, u = 2; u < m; u += 6) h = {
                    x: +i[u - 2],
                    y: +i[u - 1]
                }, g = {
                    x: +i[u + 4],
                    y: +i[u + 5]
                }, r.push(h, g), Yg(h.x, h.y, +i[u], +i[u + 1], +i[u + 2], +i[u + 3], g.x, g.y, 1 / (c * 2e5), r, r.length - 1);
                for (m = r.length, u = 0; u < m; u++) v = r[u], _ = r[u - 1] || v, (v.x > _.x || _.y !== v.y && _.x === v.x || v === _) && v.x <= 1 ? (_.cx = v.x - _.x, _.cy = v.y - _.y, _.n = v, _.nx = v.x, d && u > 1 && Math.abs(_.cy / _.cx - r[u - 2].cy / r[u - 2].cx) > 2 && (d = 0), _.cx < o && (_.cx ? o = _.cx : (_.cx = .001, u === m - 1 && (_.x -= .001, o = Math.min(o, .001), d = 0)))) : (r.splice(u--, 1), m--);
                if (m = 1 / o + 1 | 0, p = 1 / m, b = 0, v = r[0], d) {
                    for (u = 0; u < m; u++) T = u * p, v.nx < T && (v = r[++b]), h = v.y + (T - v.x) / v.cx * v.cy, l[u] = {
                        x: T,
                        cx: p,
                        y: h,
                        cy: 0,
                        nx: 9
                    }, u && (l[u - 1].cy = h - l[u - 1].y);
                    l[m - 1].cy = r[r.length - 1].y - h
                } else {
                    for (u = 0; u < m; u++) v.nx < u * p && (v = r[++b]), l[u] = v;
                    b < r.length - 1 && (l[u - 1] = r[r.length - 2])
                }
                return this.ease = function(N) {
                    var D = l[N * m | 0] || l[m - 1];
                    return D.nx < N && (D = D.n), D.y + (N - D.x) / D.cx * D.cy
                }, this.ease.custom = this, this.id && Le && Le.registerEase(this.id, this.ease), this
            }, a.getSVGData = function(s) {
                return t.getSVGData(this, s)
            }, t.create = function(s, n, i) {
                return new t(s, n, i).ease
            }, t.register = function(s) {
                Le = s, rl()
            }, t.get = function(s) {
                return Le.parseEase(s)
            }, t.getSVGData = function(s, n) {
                n = n || {};
                var i = n.width || 100,
                    o = n.height || 100,
                    r = n.x || 0,
                    l = (n.y || 0) + o,
                    c = Le.utils.toArray(n.path)[0],
                    d, m, h, g, u, p, b, v, _, T;
                if (n.invert && (o = -o, l = 0), typeof s == "string" && (s = Le.parseEase(s)), s.custom && (s = s.custom), s instanceof t) d = Ug(Og([s.segment], i, 0, 0, -o, r, l));
                else {
                    for (d = [r, l], b = Math.max(5, (n.precision || 1) * 200), g = 1 / b, b += 2, v = 5 / b, _ = ra(r + g * i), T = ra(l + s(g) * -o), m = (T - l) / (_ - r), h = 2; h < b; h++) u = ra(r + h * g * i), p = ra(l + s(h * g) * -o), (Math.abs((p - T) / (u - _) - m) > v || h === b - 1) && (d.push(_, T), m = (p - T) / (u - _)), _ = u, T = p;
                    d = "M" + d.join(",")
                }
                return c && c.setAttribute("d", d), d
            }, t
        }();
    ol() && Le.registerPlugin(la), la.version = "3.12.4";

    function Gg() {
        const [t, a] = f.useState(0);
        return f.useEffect(() => {
            setInterval(() => {
                a(s => s ? 0 : 1)
            }, 1e3)
        }, []), e.jsxs(e.Fragment, {
            children: [t === 0 && e.jsx("img", {
                className: "slot-light",
                src: B.fiat_slotlight2,
                alt: ""
            }), t === 1 && e.jsx("img", {
                className: "slot-light",
                src: B.fiat_slotlight3,
                alt: ""
            })]
        })
    }

    function Jg() {
        return e.jsx("img", {
            className: "slot-light",
            src: B.fiat_slotlight2
        })
    }

    function Qg() {
        const [t, a] = f.useState(0);
        return f.useEffect(() => {
            setInterval(() => {
                a(s => s ? 0 : 1)
            }, 100)
        }, []), e.jsxs(e.Fragment, {
            children: [t === 0 && e.jsx("img", {
                className: "slot-light",
                src: B.fiat_slotlight4,
                alt: ""
            }), t === 1 && e.jsx("img", {
                className: "slot-light",
                src: B.fiat_slotlight5,
                alt: ""
            })]
        })
    }
    const Zg = J.memo(function({
        status: t
    }) {
        return t === 0 ? e.jsx(Gg, {}) : t === 1 ? e.jsx(Jg, {}) : e.jsx(Qg, {})
    });

    function Kg(t) {
        return t <= 3 ? B.fiat_bg1 : t <= 7 ? B.fiat_bg2 : t <= 11 ? B.fiat_bg3 : B.fiat_bg4
    }

    function Xg({
        item: t,
        win: a
    }) {
        const s = w.localCurrencys[t.currencyName] ? w.localCurrencys[t.currencyName].cs : t.currencyName;
        return e.jsxs("div", {
            className: A("slots-item", a && "win"),
            children: [e.jsx("img", {
                className: "item-bg",
                src: Kg(t.section),
                alt: ""
            }), e.jsx("img", {
                className: "item-light",
                src: B.fiat_light,
                alt: ""
            }), e.jsx("img", {
                className: "item-gold",
                src: B.fiat_gold,
                alt: ""
            }), e.jsxs("span", {
                className: "amount",
                children: [s, " ", e.jsx("i", {
                    children: Wo(t.amount)
                })]
            })]
        })
    }
    const ef = J.memo(function({
            res: t,
            list: a,
            level: s
        }) {
            const [n, i] = _e({
                angle: 0,
                status: 0
            }), o = f.useMemo(() => [...a, a[0]], [a]), r = o.length, l = f.useRef(null);
            return f.useEffect(() => {
                if (l.current && t.hitSection > 0) {
                    const c = r - 1,
                        d = l.current,
                        m = d.clientHeight * (c / r),
                        h = t.hitSection % c,
                        g = Re.timeline(),
                        u = n.angle - n.angle % 360 + 5 * 360 + h / c * 360,
                        p = n.angle;
                    return g.to(n, 4.4, {
                        angle: u,
                        ease: la.create("custom", "M0,0 C0,0 0.021,-0.003 0.06,0 0.09,0.004 0.12,0.056 0.146,0.08 0.174,0.106 0.207,0.156 0.228,0.182 0.254,0.214 0.281,0.256 0.304,0.284 0.327,0.313 0.362,0.361 0.382,0.394 0.403,0.431 0.449,0.489 0.472,0.526 0.574,0.69 0.472,0.52 0.564,0.678 0.588,0.718 0.626,0.794 0.65,0.828 0.67,0.858 0.685,0.877 0.71,0.902 0.731,0.923 0.747,0.936 0.772,0.952 0.793,0.966 0.811,0.97 0.835,0.982 0.872,1 0.938,1.001 0.966,1.001 1.01,1.001 1,1 1,1 "),
                        onUpdate() {
                            const b = -n.angle * m / 360 % m;
                            if (Re.set(d, {
                                    y: b
                                }), l.current) {
                                const v = (n.angle - p) / (u - p),
                                    _ = v === 0 ? 0 : Math.sin(v * Math.PI) * 2;
                                l.current.style.filter = `blur(${_}px)`
                            }
                        }
                    }), g.to({}, {
                        delay: .25,
                        onComplete: () => {
                            i({
                                status: 2
                            })
                        }
                    }), g.to({}, {
                        delay: 1,
                        onComplete: () => {
                            i({
                                status: 0
                            }), W.setSpinAnimateEnd()
                        }
                    }), () => {
                        Re.killTweensOf(g)
                    }
                }
            }, [t]), f.useEffect(() => {
                if (l.current) {
                    const c = l.current;
                    Re.set(c, {
                        y: 0
                    }), i({
                        angle: 0
                    })
                }
            }, [s]), f.useEffect(() => () => W.setSpinAnimateEnd(), []), e.jsxs(e.Fragment, {
                children: [e.jsx(Zg, {
                    status: n.status
                }), e.jsx("div", {
                    className: A(tf, "slots"),
                    children: e.jsx("div", {
                        className: "slots-list",
                        ref: l,
                        style: {
                            height: r * 100 + "%"
                        },
                        children: o.map((c, d) => e.jsx(Xg, {
                            win: n.status === 2 && t.hitSection === c.section,
                            item: c
                        }, d))
                    })
                })]
            })
        }),
        tf = "syyw8tb",
        af = [{
            filename: "1.png",
            frame: {
                x: 1,
                y: 1,
                w: 19,
                h: 77
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 0,
                w: 19,
                h: 77
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "2.png",
            frame: {
                x: 1,
                y: 80,
                w: 19,
                h: 66
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 11,
                w: 19,
                h: 66
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "3.png",
            frame: {
                x: 1,
                y: 148,
                w: 19,
                h: 54
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 23,
                w: 19,
                h: 54
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "4.png",
            frame: {
                x: 1,
                y: 252,
                w: 19,
                h: 39
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 38,
                w: 19,
                h: 39
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "5.png",
            frame: {
                x: 1,
                y: 362,
                w: 19,
                h: 24
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 53,
                w: 19,
                h: 24
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "6.png",
            frame: {
                x: 1,
                y: 388,
                w: 19,
                h: 22
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 64,
                w: 19,
                h: 22
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "7.png",
            frame: {
                x: 1,
                y: 332,
                w: 19,
                h: 28
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 69,
                w: 19,
                h: 28
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "8.png",
            frame: {
                x: 1,
                y: 293,
                w: 19,
                h: 37
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 69,
                w: 19,
                h: 37
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }, {
            filename: "9.png",
            frame: {
                x: 1,
                y: 204,
                w: 19,
                h: 46
            },
            rotated: !1,
            trimmed: !0,
            spriteSourceSize: {
                x: 0,
                y: 69,
                w: 19,
                h: 46
            },
            sourceSize: {
                w: 19,
                h: 115
            }
        }],
        sf = {
            app: "https://www.codeandweb.com/texturepacker",
            version: "1.0",
            image: "test.png",
            format: "RGBA8888",
            size: {
                w: 21,
                h: 411
            },
            scale: "1",
            smartupdate: "$TexturePacker:SmartUpdate:b837d53d965a754ea73105fe72e63c7a:53c7913905bd2e09e86c62f3729b3291:02ab132358d6d8b512e80119463a8329$"
        },
        nf = {
            frames: af,
            meta: sf
        },
        of = "/assets/hand.40b98363.png";

    function rf({
        onClick: t,
        loading: a
    }) {
        const [s, n] = k1({
            config: nf,
            image: of ,
            options: {
                yoyo: !0,
                repeat: 1,
                paused: !0
            }
        }), i = () => {
            n.restart(), t()
        };
        return e.jsx("div", {
            className: "hand",
            onClick: i,
            style: {
                pointerEvents: a ? "none" : "auto"
            },
            children: s
        })
    }

    function lf({
        level: t,
        item: a
    }) {
        const s = a.amount,
            n = S.bonusCurrencyName === "BRLFIAT";
        return e.jsx(je, {
            id: "spin-fiat-banner",
            children: e.jsxs("div", {
                className: mf,
                children: [e.jsx("img", {
                    src: n ? tu(t) : eu(t),
                    className: "fiat_banner",
                    alt: ""
                }), n && e.jsxs("div", {
                    className: "amount",
                    children: [Wo(s, !0), " ", w.getAlias(a.currencyName)]
                })]
            })
        })
    }

    function cf({
        children: t,
        level: a,
        res: s,
        onSpin: n,
        loading: i
    }) {
        const [o, r] = f.useState(!1), l = W.spinOptions[a];
        return f.useEffect(() => {
            r(!0)
        }, []), e.jsxs("div", {
            className: df,
            children: [e.jsx(lf, {
                item: l[0],
                level: a
            }), e.jsxs("div", {
                className: A("slot-wrap", o && "enter"),
                children: [e.jsx("img", {
                    src: B.fiat_slot,
                    alt: ""
                }), e.jsx(ef, {
                    res: s,
                    list: l,
                    level: a
                }), e.jsx(rf, {
                    onClick: n,
                    loading: i
                })]
            }), t]
        })
    }
    const df = "svnfoqg",
        mf = "b3skg0p";

    function ll(t) {
        const {
            isSvip: a,
            vipLevel: s
        } = S.getUserLevelInfo(t);
        return t < 8 ? "VIP 8" : (a ? "SVIP" : "VIP") + s
    }

    function uf(t, a, s, n) {
        const i = k();
        if (!t || n !== 0) return i("page.promotion.spin.button.login"); {
            const o = Dt.find(r => r[4] === s) || Dt[0];
            return a >= o[0] || o[0] === 1 ? i("page.spin.next_on") + " " + ll(S.vipLevel + 1) : i("page.bonus.available") + " " + ll(o[0])
        }
    }
    const pf = Y(function({
            level: t
        }) {
            const [a, s] = _e({
                spinNumber: 0,
                hitSection: 0
            }), n = k(), i = W.spinLoading, o = re(), {
                lang: r
            } = yt(), l = S.login, c = async function() {
                if (!i) {
                    if (W.soundSprites.play("Click"), !l) return ke.close(), o("#/login/regist?redirect=#/spin");
                    if (W.freeTimes === 0) return L(n("page.spin.nothave"));
                    if (t != W.spinLevel) return L(n("page.spin.tryother"));
                    try {
                        W.spinLoading = !0;
                        const p = await W.handleSpin();
                        W.fiat ? setTimeout(() => {
                            W.soundSprites.play("SpinAndBonus")
                        }, 500) : W.soundSprites.play("SpinAndBonus"), W.freeTimes = p.leftTimes, s({
                            hitSection: p.hitSection - 1,
                            spinNumber: a.spinNumber + 1
                        }), await W.spinAnimateEnd(), W.spinLoading = !1, S.emit("rewardClaim"), p.leftTimes === 0 ? (W.setNextTime(), Te.back()) : W.getUserInfo(), p.locked && be.changeLockedAmount(p.amount, p.currencyName), ke.push(e.jsx(fg, {
                            locked: p.locked,
                            amount: p.amount,
                            currencyName: p.currencyName,
                            bigPrize: p.bigPrize,
                            level: W.spinLevel,
                            trackId: p.trackId
                        }))
                    } catch (p) {
                        L(p), W.spinLoading = !1
                    }
                }
            }, d = uu(t), m = W.levelUpdated;
            f.useEffect(() => {
                s({
                    spinNumber: 0,
                    hitSection: 0
                })
            }, [t]);
            const h = uf(l, S.vipLevel, t, W.freeTimes),
                g = S.login && (t != W.spinLevel || W.freeTimes <= 0),
                u = e.jsxs(q, {
                    onClick: c,
                    disabled: g,
                    style: {
                        backgroundColor: d[0],
                        backgroundImage: `conic-gradient(from 1turn, ${d[1]}, ${d[0]})`
                    },
                    type: "conic4",
                    className: "btn",
                    loadingNode: r === "ja" && !W.fiat ? e.jsx(pe, {
                        stroke: "#000"
                    }) : e.jsx(pe, {
                        stroke: "#fff"
                    }),
                    children: [h, " "]
                });
            return W.fiat ? e.jsx(cf, {
                level: t,
                onSpin: c,
                res: a,
                loading: W.spinLoading,
                children: u
            }) : r === "ja" ? e.jsx(Rg, {
                level: t,
                onSpin: c,
                res: a,
                loading: W.spinLoading,
                update: m,
                children: u
            }) : e.jsx(kg, {
                level: t,
                onSpin: c,
                res: a,
                loading: W.spinLoading,
                update: m,
                children: u
            })
        }),
        hf = Y(function() {
            const t = W.spinLevel,
                {
                    lang: a
                } = yt(),
                s = Ke(),
                n = W.tabs,
                i = S.vipLevel,
                [o, r] = f.useState({
                    tab: t
                });
            f.useEffect(() => {
                r({
                    tab: t
                })
            }, [t]);

            function l(m) {
                W.spinLoading || r({
                    tab: m
                })
            }

            function c() {
                const m = n.findIndex(h => h === o.tab);
                l(n[m - 1])
            }

            function d() {
                const m = n.findIndex(h => h === o.tab);
                l(n[m + 1])
            }
            return e.jsxs(e.Fragment, {
                children: [e.jsx(je, {
                    id: "spin-fiat-banner"
                }), e.jsxs(le, {
                    children: [a === "ja" && !W.fiat ? e.jsx(og, {
                        isFiatSpin: W.fiat,
                        tab: o.tab,
                        level: i,
                        onTab: l,
                        updateFinished: W.updateFinished
                    }) : e.jsx(Kh, {
                        isFiatSpin: W.fiat,
                        tab: o.tab,
                        level: i,
                        onTab: l,
                        updateFinished: W.updateFinished
                    }), e.jsx(pf, {
                        level: o.tab
                    }), s && e.jsxs(e.Fragment, {
                        children: [e.jsx(q, {
                            disabled: o.tab === n[0],
                            className: "pre_btn",
                            onClick: c,
                            children: e.jsx("div", {
                                className: "btn-wrap",
                                children: e.jsx(z, {
                                    name: "Arrow"
                                })
                            })
                        }), e.jsx(q, {
                            disabled: o.tab === n[n.length - 1],
                            className: "suff_btn",
                            onClick: d,
                            children: e.jsx("div", {
                                className: "btn-wrap",
                                children: e.jsx(z, {
                                    name: "Arrow"
                                })
                            })
                        })]
                    }), a === "ja" && !W.fiat ? e.jsx(dg, {
                        spinLoading: W.spinLoading
                    }) : e.jsx(Xr, {
                        spinLoading: W.spinLoading
                    })]
                })]
            })
        }),
        gf = "/assets/crypto_point.2b3622a0.png",
        ff = "/assets/fiat_point.aff671ea.png",
        yf = "/assets/crypto_spin.5290c0a3.png",
        bf = "/assets/fiat_spin.c344bad1.png",
        vf = "/assets/crypto_btn.27a97635.png",
        wf = "/assets/fiat_btn.d75af4ac.png",
        xf = "/assets/light.8df519d7.png",
        jf = {
            initial: {
                opacity: 1,
                scale: 1,
                rotate: 0
            },
            animate: {
                opacity: 1,
                scale: 1,
                rotate: 0
            },
            transition: {
                type: "spring",
                delay: .4
            }
        },
        _f = {
            initial: {
                scale: 1,
                opacity: 1
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                type: "spring",
                delay: 0
            }
        },
        kf = {
            initial: {
                opacity: 1,
                scale: 0
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            transition: {
                type: "spring",
                delay: 0
            }
        },
        Nf = J.memo(function({
            loading: t
        }) {
            const a = f.useRef(null);
            return f.useEffect(() => {
                setInterval(() => {
                    if (a.current) {
                        const s = a.current.classList;
                        s.contains("light") ? s.remove("light") : s.add("light")
                    }
                }, 1e3)
            }, []), e.jsx("img", {
                ref: a,
                className: A("spin-light", !t && "active"),
                src: xf,
                alt: ""
            })
        });

    function Cf(t, a, s, n) {
        return {
            spinPoint: e.jsx(ge.img, Q(U({}, kf), {
                src: a ? ff : gf,
                alt: ""
            })),
            spinMain: e.jsxs(ge.div, Q(U({
                className: Tf
            }, jf), {
                children: [e.jsx(Nf, {
                    loading: t
                }), e.jsx("img", {
                    className: "spin-img",
                    src: a ? bf : yf,
                    alt: ""
                }), n.map((i, o) => {
                    const r = {
                        initial: {
                            opacity: 1,
                            height: 24,
                            x: 1,
                            transform: `rotate(${o*22.5}deg)`
                        }
                    };
                    return e.jsxs(ge.div, Q(U({}, r), {
                        className: A("spin-item", a && "fiat"),
                        children: [e.jsx("span", {
                            className: "amount",
                            children: H.formateAmount(n[o].amount, a ? 2 : 5)
                        }), a && w.localCurrencys[n[o].currencyName] ? e.jsx("div", {
                            className: A("coin-icon", `col-${o}`),
                            children: w.localCurrencys[n[o].currencyName].cs
                        }) : e.jsx(De, {
                            name: n[o].currencyName
                        }), n[o].locked && e.jsx(z, {
                            name: "Locked"
                        })]
                    }), o)
                })]
            })),
            spinBtn: e.jsx(ge.div, Q(U({}, _f), {
                className: A(t && "loading", "btn-img"),
                onClick: s,
                children: e.jsx("img", {
                    className: "btn-txt",
                    src: a ? wf : vf,
                    alt: ""
                })
            }))
        }
    }
    const Tf = "s150tarq",
        Sf = "/assets/gold.7f96d3f0.png",
        Af = "/assets/gold_bg.4fea7639.png";
    let ls = null;

    function If() {
        return M.get("/activity/reward/hasUserClaimedFreeMoney")
    }
    async function Rf() {
        const t = Date.now();
        for (;;) {
            try {
                if (await If() !== -1) break
            } catch (a) {
                console.log("Function failed:", a);
                break
            }
            if (Date.now() - t > 6e3) {
                console.log("Polling timeout");
                break
            }
            await H.delay(1500)
        }
    }

    function Df({
        amount: t,
        currency: a
    }) {
        const [s, n] = _e({
            rotate: !1
        }), i = re(), o = k(), r = S.login, l = Ve();
        f.useEffect(() => {
            const d = setTimeout(() => n({
                rotate: !0
            }), 1300);
            return r && S.inited.then(async () => {
                l.push(e.jsx(Va, {
                    amount: t,
                    currency: a
                }))
            }), () => {
                clearTimeout(d)
            }
        }, []);
        const c = f.useCallback(async () => {
            Ye.trackEvent("spin_reward_click", {
                currency: a
            }), W.soundSprites.play("Collect"), l.close(), r || i("#/login/regist"), ls == null && (ze.claimed = !0, ls = S.waitLogin().then(async () => {
                await H.delay(3500), Rf().then(() => {
                    ee.modalQueue.add(() => l.push(e.jsx(Va, {
                        amount: t,
                        currency: a
                    })), {
                        key: "FREE_SPIN"
                    })
                }).catch(d => {
                    console.error(d)
                }), ls = null
            }))
        }, []);
        return e.jsxs("div", {
            className: Pf,
            children: [e.jsx("img", {
                className: A("img-bg", s.rotate && "rotate"),
                src: Af,
                alt: ""
            }), e.jsxs("div", {
                className: "bg-wrap",
                children: [e.jsx("img", {
                    className: "img_glod",
                    src: Sf,
                    alt: ""
                }), e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx("div", {
                        className: "tit ttu",
                        children: o("common.congratulations")
                    }), e.jsx("div", {
                        className: "desc",
                        children: o("page.bonus.wager.desc2")
                    }), e.jsx(qo, {
                        className: "amount",
                        duration: 3e3,
                        currency: a,
                        targetValue: t
                    }), e.jsx(q, {
                        type: "conic",
                        onClick: c,
                        children: o("common.claim_rewards")
                    })]
                })]
            })]
        })
    }
    const Pf = "srwwvyw",
        Bf = `
normal.png
size: 256,128
format: RGBA8888
filter: Linear,Linear
repeat: none
images/11
  rotate: true
  xy: 154, 2
  size: 124, 100
  orig: 124, 100
  offset: 0, 0
  index: -1
images/22
  rotate: false
  xy: 2, 6
  size: 150, 120
  orig: 150, 120
  offset: 0, 0
  index: -1
`,
        Ef = {
            hash: "dq/TzY8eQ5VRIGaUvXV9v3j1pZk",
            spine: "3.8.95",
            x: -303.31,
            y: -288.78,
            width: 631.42,
            height: 489.6,
            images: "",
            audio: "E:/SS\u7684\u4E1C\u897F/\u5176\u4ED6\u9879\u76EE\u7EC4\u7684\u4E1C\u897F/\u8D85\u6838\u5206\u88C2/spine/dianji"
        },
        Lf = [{
            name: "root"
        }, {
            name: "bone7",
            parent: "root",
            length: 341.43,
            rotation: 134.69,
            x: 245.76,
            y: -185.95
        }, {
            name: "bone8",
            parent: "bone7",
            length: 136.18,
            rotation: 5.36,
            x: 356.65,
            y: 85.9
        }, {
            name: "bone9",
            parent: "bone8",
            length: 108.16,
            rotation: -8.48,
            x: 136.18
        }, {
            name: "bone13",
            parent: "root",
            length: 339.68,
            rotation: 139.29,
            x: 221.8,
            y: -231.78
        }, {
            name: "bone14",
            parent: "bone13",
            length: 128.31,
            rotation: -2.97,
            x: 382.08,
            y: 67.36
        }, {
            name: "bone15",
            parent: "bone14",
            length: 114.64,
            rotation: -6.94,
            x: 128.31
        }],
        Ff = [{
            name: "images/23",
            bone: "bone13",
            attachment: "images/22"
        }, {
            name: "images/12",
            bone: "bone7",
            attachment: "images/11"
        }],
        Of = [{
            name: "default",
            attachments: {
                "images/12": {
                    "images/11": {
                        type: "mesh",
                        uvs: [.04153, 0, .07082, 0, .10497, .02128, .13919, .07418, .16686, .11741, .2077, .16587, .26955, .21084, .3205, .15902, .36098, .15006, .39088, .15862, .43056, .12341, .47391, .1181, .52584, .13417, .57225, .10897, .62779, .11594, .6777, .13616, .74203, .21358, .79445, .32309, .82293, .4133, .82424, .43013, .90743, .51218, .931, .5898, .93092, .6612, .91749, .71345, .89328, .7726, .84416, .84103, .77486, .89693, .71625, .91384, .65269, .91411, .61448, .90124, .54904, .83812, .53292, .84583, .43094, .84574, .37885, .83313, .31141, .80291, .25348, .75192, .19212, .67356, .18106, .5904, .22156, .47096, .20149, .43562, .11963, .33345, .02479, .19396, .00264, .12926, 0, .09623, 0, .06645, .01825, .01924, .29516, .39449, .58564, .53734, .75355, .72085, .15763, .22181, .06357, .10696],
                        triangles: [50, 43, 44, 50, 0, 1, 50, 1, 2, 50, 2, 3, 45, 0, 50, 50, 44, 45, 42, 43, 50, 41, 42, 50, 4, 50, 3, 49, 50, 4, 41, 50, 49, 49, 4, 5, 40, 41, 49, 9, 46, 6, 6, 39, 49, 6, 49, 5, 39, 6, 46, 40, 49, 39, 38, 39, 46, 35, 38, 46, 35, 36, 37, 7, 8, 9, 9, 6, 7, 14, 12, 13, 14, 16, 12, 16, 14, 15, 47, 16, 17, 47, 17, 18, 47, 18, 19, 16, 47, 12, 20, 21, 48, 9, 10, 11, 12, 9, 11, 9, 12, 47, 46, 9, 47, 21, 22, 48, 48, 47, 19, 48, 19, 20, 22, 23, 48, 24, 48, 23, 33, 34, 47, 47, 32, 33, 48, 30, 47, 25, 48, 24, 47, 31, 32, 30, 31, 47, 26, 48, 25, 29, 30, 48, 29, 48, 28, 26, 27, 48, 27, 28, 48, 47, 34, 46, 34, 35, 46, 35, 37, 38],
                        vertices: [1, 3, 115.68, -29.62, 1, 1, 3, 103.59, -43.24, 1, 1, 3, 81.55, -52.09, 1, 2, 2, 175.89, -56.97, .03382, 3, 47.68, -50.49, .96618, 3, 1, 509.66, 48.56, 25e-5, 2, 148.84, -51.48, .24286, 3, 20.12, -49.05, .75689, 3, 1, 474.6, 47.5, .01707, 2, 113.84, -49.25, .77256, 3, -14.83, -52.01, .21037, 3, 1, 431.6, 35.93, .2328, 2, 69.94, -56.76, .76498, 3, -57.14, -65.9, .00222, 2, 1, 427.69, -4.78, .63111, 2, 62.25, -96.93, .36889, 2, 1, 413.16, -25.82, .7778, 2, 45.82, -116.52, .2222, 2, 1, 397.05, -36.04, .89558, 2, 28.82, -125.19, .10442, 2, 1, 392.18, -65.95, .98769, 2, 21.18, -154.51, .01231, 2, 1, 375.1, -86.98, .99987, 2, 2.21, -173.85, 13e-5, 1, 1, 346.68, -104.3, 1, 1, 1, 335.32, -133.66, 1, 1, 1, 308.55, -155.78, 1, 1, 1, 279.55, -170.76, 1, 1, 1, 223.95, -172.03, 1, 1, 1, 162.17, -156.78, 1, 1, 1, 117.7, -137.72, 1, 1, 1, 111.16, -132.39, 1, 1, 1, 45.67, -140.38, 1, 1, 1, 7.82, -123.56, 1, 1, 1, -17.48, -98.47, 1, 1, 1, -30.14, -74.2, 1, 1, 1, -40.53, -42.73, 1, 1, 1, -43.32, 3, 1, 2, 1, -32.83, 53.26, .99892, 2, -390.83, 3.91, .00108, 2, 1, -13.19, 85.12, .99282, 2, -368.3, 33.79, .00718, 2, 1, 14.51, 113.31, .97697, 2, -338.08, 59.27, .02303, 2, 1, 35.79, 125.7, .96162, 2, -315.74, 69.61, .03838, 1, 1, 86.81, 132.48, 1, 1, 1, 91.13, 142.31, 1, 1, 1, 135.77, 187.38, 1, 1, 1, 163.03, 205.99, 1, 1, 1, 203.25, 225.2, 1, 1, 1, 246.68, 232.92, 1, 1, 1, 301.32, 232.56, 1, 1, 1, 335.66, 208.27, 1, 1, 1, 360.31, 148.44, 1, 2, 1, 381.63, 144.91, .096, 2, 30.38, 56.42, .904, 2, 2, 102.15, 50.02, .97503, 3, -41.03, 44.46, .02497, 2, 2, 192.07, 34.54, .00577, 3, 50.19, 42.4, .99423, 1, 3, 83.48, 31.28, 1, 1, 3, 96.9, 21.57, 1, 1, 3, 108.02, 11.71, 1, 1, 3, 118.11, -12.41, 1, 1, 2, -1.11, 3.28, 1, 2, 1, 177.5, 10.74, .99305, 2, -185.39, -58.08, .00695, 2, 1, 38.95, .89, .99998, 2, -324.26, -54.94, 2e-5, 3, 1, 476.66, 89.27, 68e-5, 2, 119.79, -7.86, .96164, 3, -15.04, -10.19, .03768, 1, 3, 66.65, -4.45, 1],
                        hull: 46,
                        edges: [0, 90, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 26, 28, 28, 30, 30, 32, 32, 34, 34, 36, 36, 38, 38, 40, 40, 42, 42, 44, 44, 46, 46, 48, 48, 50, 50, 52, 52, 54, 54, 56, 56, 58, 58, 60, 60, 62, 62, 64, 64, 66, 66, 68, 68, 70, 70, 72, 72, 74, 74, 76, 76, 78, 78, 80, 80, 82, 82, 84, 84, 86, 86, 88, 88, 90],
                        width: 622,
                        height: 499
                    }
                },
                "images/23": {
                    "images/22": {
                        type: "mesh",
                        uvs: [.19996, .114, .26238, .20863, .28041, .22809, .33151, .27728, .34182, .28035, .3832, .23663, .44719, .23662, .45194, .22936, .48479, .20827, .52386, .20832, .55248, .22018, .61729, .20212, .66099, .20873, .71984, .25929, .77508, .36275, .80681, .45849, .80991, .48163, .86621, .53847, .89084, .57926, .89859, .63657, .88963, .70671, .84881, .79558, .78824, .85549, .73726, .88369, .68382, .89336, .63126, .87715, .58557, .83393, .57207, .82874, .47745, .83712, .39247, .80914, .32758, .76115, .26784, .68522, .25893, .60074, .29412, .51271, .29376, .50282, .22495, .41826, .1332, .2898, .11011, .23045, .10707, .17328, .12526, .12749, .15411, .10251, .22375, .29908, .34712, .43397, .60167, .54201, .77776, .68562],
                        triangles: [0, 37, 38, 38, 39, 0, 0, 39, 40, 1, 37, 0, 37, 41, 36, 1, 41, 37, 41, 1, 2, 36, 41, 35, 3, 35, 41, 42, 34, 35, 3, 42, 35, 42, 3, 4, 3, 41, 2, 33, 34, 42, 43, 30, 33, 43, 10, 11, 13, 43, 11, 13, 11, 12, 43, 13, 14, 43, 14, 15, 43, 15, 16, 6, 7, 8, 9, 6, 8, 10, 6, 9, 43, 6, 10, 44, 43, 16, 44, 16, 17, 44, 17, 18, 44, 18, 19, 20, 44, 19, 21, 44, 20, 42, 6, 43, 5, 6, 4, 29, 30, 43, 43, 28, 29, 26, 27, 43, 44, 26, 43, 27, 28, 43, 22, 44, 21, 25, 26, 44, 25, 44, 24, 22, 23, 44, 23, 24, 44, 30, 31, 32, 30, 32, 33, 42, 43, 33, 6, 42, 4],
                        vertices: [1, 6, 114.08, -56.25, 1, 3, 4, 540.3, -1.91, .00306, 5, 161.6, -60.98, .13112, 6, 40.41, -56.51, .86582, 3, 4, 522.4, -1.91, .00932, 5, 143.73, -61.9, .52334, 6, 22.78, -59.58, .46734, 2, 4, 474.02, -4.6, .344, 5, 95.55, -67.09, .656, 1, 4, 466.94, -8.25, 1, 1, 4, 460.46, -48.44, 1, 1, 4, 423.99, -79.83, 1, 1, 4, 424.12, -85.46, 1, 1, 4, 413.65, -111.16, 1, 1, 4, 391.36, -130.3, 1, 2, 4, 370.4, -138.95, .98404, 5, -.96, -206.64, .01596, 2, 4, 340.53, -178.95, 1, 5, -28.73, -248.13, 0, 1, 4, 313.03, -197.37, 1, 1, 4, 259.69, -203.24, 1, 1, 4, 187.72, -183.28, 1, 1, 4, 132.17, -155.3, 1, 1, 4, 121.34, -146.29, 1, 1, 4, 67.01, -148.05, 1, 1, 4, 37.01, -141.58, 1, 1, 4, 10.16, -119.31, 1, 1, 4, -12.18, -83.02, 1, 1, 4, -23.68, -22.58, 1, 1, 4, -12.6, 34.38, 1, 2, 4, 5.42, 72.21, .99886, 5, -376.4, -14.69, .00114, 2, 4, 32.1, 102.82, .99257, 5, -351.34, 17.27, .00743, 2, 4, 68.41, 121.22, .97622, 5, -316.04, 37.53, .02378, 1, 4, 111.36, 123.97, 1, 1, 4, 121.09, 128.24, 1, 1, 4, 171.75, 178.45, 1, 1, 4, 231.14, 207.41, 1, 1, 4, 286.91, 217.41, 1, 1, 4, 350.68, 212.17, 1, 1, 4, 388.81, 178.12, 1, 1, 4, 403.21, 120.83, 1, 2, 4, 407.28, 116.5, .904, 5, 22.62, 50.38, .096, 1, 5, 95.08, 49.42, 1, 2, 5, 198.21, 41.33, 18e-5, 6, 64.39, 49.48, .99982, 1, 6, 102.94, 40.31, 1, 1, 6, 130.9, 20.32, 1, 1, 6, 143.46, -7.69, 1, 1, 6, 141.28, -33.97, 1, 2, 5, 145.12, -1.67, .472, 6, 16.89, .38, .528, 1, 5, 22.13, -7.21, 1, 1, 4, 216.42, -16.69, 1, 1, 4, 59.85, -37.74, 1],
                        hull: 41,
                        edges: [0, 80, 0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 26, 28, 28, 30, 30, 32, 32, 34, 34, 36, 36, 38, 38, 40, 40, 42, 42, 44, 44, 46, 46, 48, 48, 50, 50, 52, 52, 54, 54, 56, 56, 58, 58, 60, 60, 62, 62, 64, 64, 66, 66, 68, 68, 70, 70, 72, 72, 74, 74, 76, 76, 78, 78, 80],
                        width: 752,
                        height: 600
                    }
                }
            }
        }],
        Mf = {
            animation: {
                bones: {
                    bone9: {
                        rotate: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            angle: 27.12,
                            curve: .25,
                            c4: .84
                        }, {
                            time: .5
                        }],
                        translate: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }],
                        scale: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }]
                    },
                    bone8: {
                        rotate: [{
                            curve: 0,
                            c2: .16,
                            c3: .529,
                            c4: .68
                        }, {
                            time: .3333,
                            angle: -6.09,
                            curve: .4,
                            c2: .59,
                            c3: .775
                        }, {
                            time: .5,
                            angle: 3.43,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .6667
                        }],
                        translate: [{
                            curve: "stepped"
                        }, {
                            time: .5,
                            curve: "stepped"
                        }, {
                            time: .6667
                        }],
                        scale: [{
                            curve: "stepped"
                        }, {
                            time: .5,
                            curve: "stepped"
                        }, {
                            time: .6667
                        }]
                    },
                    bone7: {
                        rotate: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            angle: -19.3,
                            curve: .25,
                            c4: .84
                        }, {
                            time: .5,
                            angle: 3.12,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .6667,
                            curve: "stepped"
                        }, {
                            time: 1.3333
                        }],
                        translate: [{
                            x: 60.22,
                            y: -41.4,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            x: 60.22,
                            y: 133.77,
                            curve: .25,
                            c4: .84
                        }, {
                            time: .5,
                            x: 21.23,
                            y: -30.77,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .6667,
                            x: 60.22,
                            y: -41.4,
                            curve: "stepped"
                        }, {
                            time: 1.3333,
                            x: 60.22,
                            y: -41.4
                        }],
                        scale: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            x: 1.5,
                            y: 1.5,
                            curve: .25,
                            c4: .84
                        }, {
                            time: .5,
                            x: .929,
                            y: .929,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .6667,
                            curve: "stepped"
                        }, {
                            time: 1.3333
                        }]
                    },
                    bone15: {
                        rotate: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            angle: 11.53
                        }, {
                            time: .5
                        }],
                        translate: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }],
                        scale: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }]
                    },
                    bone14: {
                        rotate: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            angle: -6.32
                        }, {
                            time: .5
                        }],
                        translate: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }],
                        scale: [{
                            curve: "stepped"
                        }, {
                            time: .5
                        }]
                    },
                    bone13: {
                        rotate: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            angle: -1.51,
                            curve: .25,
                            c3: .976,
                            c4: .86
                        }, {
                            time: .5,
                            curve: "stepped"
                        }, {
                            time: .6667
                        }],
                        translate: [{
                            x: 75.07,
                            y: -55.62,
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            x: 83.79,
                            y: -53.26,
                            curve: .25,
                            c3: .976,
                            c4: .86
                        }, {
                            time: .5,
                            x: 65.16,
                            y: -59.17,
                            curve: 0,
                            c2: .16,
                            c3: .462,
                            c4: .6
                        }, {
                            time: .6667,
                            x: 75.07,
                            y: -55.62
                        }],
                        scale: [{
                            curve: 0,
                            c2: .19,
                            c3: .75
                        }, {
                            time: .3333,
                            x: 1.313,
                            y: 1.313,
                            curve: .25,
                            c3: .976,
                            c4: .86
                        }, {
                            time: .5,
                            curve: "stepped"
                        }, {
                            time: .6667
                        }]
                    }
                }
            }
        },
        Wf = {
            skeleton: Ef,
            bones: Lf,
            slots: Ff,
            skins: Of,
            animations: Mf
        },
        Uf = "/assets/normal.c6c700e9.png";

    function Vf() {
        return e.jsx(Y1, {
            width: 80,
            height: 100,
            fps: 60,
            children: e.jsx(f.Suspense, {
                children: e.jsx(G1, {
                    x: 30,
                    y: 68,
                    skel: Wf,
                    atlas: Bf,
                    img: Uf,
                    scale: .1
                })
            })
        })
    }

    function zf() {
        return e.jsx(xa, {
            errorComponent: () => null,
            children: e.jsx(Vf, {})
        })
    }

    function $f(t, a) {
        let s = 360;
        if (t > 0 && a.current) {
            const n = a.current.style.transform.match(/\d+/),
                i = n ? n[0] : 0,
                o = (Math.ceil(Number(i) / 360) + 5) * 360;
            s = 360 - t * 22.5 + o
        }
        return s
    }
    const qf = J.memo(function(t) {
            const a = f.useRef(null),
                s = f.useRef(null),
                n = f.useRef(null),
                i = Ve(),
                o = ut(),
                r = t.res;
            return f.useEffect(() => {
                const l = Re.timeline(),
                    c = r.hitSection;
                return c > 0 && a.current && n.current && s.current ? (t.setLoading(!0), W.soundSprites.play("SpinAndBonus"), l.to(a.current, {
                    rotate: $f(c, a),
                    duration: 3.6
                }), l.to(s.current, {
                    scale: 1.1,
                    duration: .3,
                    delay: .3
                }), l.to(s.current, {
                    scale: 1,
                    duration: .2
                }), l.set(n.current, {
                    x: -20,
                    scale: 1
                }), l.to(n.current, {
                    x: 200,
                    skewX: -25,
                    scale: 3.4,
                    duration: .5,
                    delay: .3
                }), l.to(s.current, {
                    scale: 1,
                    onComplete: () => {
                        const d = t.spinData.find(m => m.section === r.hitSection);
                        o.close(), d && i.push(e.jsx(Df, {
                            amount: d.amount,
                            currency: d.currencyName
                        }), {
                            closeable: !1
                        }), t.setLoading(!1)
                    }
                })) : l.set(a.current, {
                    rotate: 0
                }), () => {
                    Re.killTweensOf(l)
                }
            }, [r]), e.jsxs(e.Fragment, {
                children: [e.jsx("div", {
                    className: "spin-wrap",
                    ref: a,
                    children: t.spinMain
                }), e.jsxs("div", {
                    className: "point-img",
                    ref: s,
                    children: [e.jsx("div", {
                        className: "light-wrap",
                        children: e.jsx("div", {
                            ref: n,
                            className: "point-light"
                        })
                    }), t.spinPoint]
                })]
            })
        }),
        Hf = J.memo(function(i) {
            var o = i,
                {
                    res: t,
                    fiat: a,
                    children: s
                } = o,
                n = St(o, ["res", "fiat", "children"]);
            const [r, l] = f.useState(!1), c = N1(), [d, m] = f.useState(!0), h = a ? ze.getFiatData(n.currency) : ze.getCryptoData(), g = f.useMemo(() => ({
                initial: {
                    opacity: 0,
                    scale: .3,
                    rotate: -30
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                },
                transition: {
                    duration: .5
                }
            }), [a]);

            function u() {
                r || (W.soundSprites.play("Click"), m(!1), n.onSpin())
            }
            f.useEffect(() => {
                c.set(g.initial), c.start(g.animate)
            }, [n.currency]);
            const {
                spinPoint: p,
                spinMain: b,
                spinBtn: v
            } = Cf(r, a, u, h);
            return e.jsxs("div", {
                className: Gf,
                children: [e.jsx(pt, {
                    children: e.jsx(ge.div, Q(U({
                        className: Yf
                    }, g), {
                        animate: c,
                        children: e.jsx(qf, {
                            res: t,
                            spinData: h,
                            setLoading: l,
                            spinMain: b,
                            spinPoint: p
                        }, n.currency)
                    }))
                }), d && e.jsx(zf, {}), v, s]
            })
        }),
        Yf = "s1j2bted",
        Gf = "s1n8shi6";

    function Jf(t) {
        const a = Object.keys(w.localCurrencys).filter(s => w.dict[s]);
        return t && a.unshift("Crypto"), a.map(s => ({
            label: s,
            value: s
        }))
    }

    function Qf({
        currency: t,
        onChange: a,
        hasCrypto: s,
        fiat: n
    }) {
        const i = k(),
            o = Jf(s);
        return e.jsx(Ht, {
            className: A(Zf, n && "fiat"),
            value: t,
            options: o,
            onChange: a,
            top: !0,
            renderLabel: r => {
                const l = r.value === "Crypto";
                return e.jsxs(e.Fragment, {
                    children: [e.jsx(De, {
                        name: l ? "BTC" : r.value
                    }), e.jsx("div", {
                        className: "alias",
                        children: l ? i("common.cash") : w.getAlias(r.value)
                    })]
                })
            },
            renderOption: r => {
                const l = r.value === "Crypto";
                return e.jsxs(e.Fragment, {
                    children: [e.jsx(De, {
                        name: l ? "BTC" : r.value
                    }), e.jsx("div", {
                        className: "alias",
                        children: l ? i("wallet.crypto") : w.getAlias(r.value)
                    })]
                })
            }
        })
    }
    const Zf = "s1vy7ziv",
        Kf = "/assets/crypto_head.fac8ff84.png",
        Xf = "/assets/fiat_head.87c5ae3f.png";

    function cs() {
        const t = ee.isBrHost,
            a = Ve(),
            s = Ns(),
            n = Se.initSearchParams.get("bcn") || "",
            i = k(),
            [o, r] = f.useState(!1),
            [l, c] = f.useState($o(S.bonusCurrencyName, n.toLocaleUpperCase())),
            d = l !== "Crypto",
            m = ze.rewardsList[ze.rewardsList.length - 1],
            [h, g] = _e({
                spinNumber: 0,
                hitSection: 0,
                loading: !1
            }),
            u = f.useCallback(function() {
                const b = ze.target;
                Ye.trackEvent("spin_roll_click"), g({
                    spinNumber: b,
                    hitSection: b
                })
            }, []);
        f.useEffect(() => {
            S.inited.then(() => {
                s() && (r(!0), ze.init())
            })
        }, []);

        function p() {
            a.close(), Ye.trackEvent("spin_close")
        }
        return e.jsxs($e, {
            className: A(ey, d && "fiat-spin"),
            children: [e.jsx(Ts, {
                onClick: p
            }), o ? e.jsxs(le, {
                id: "spin",
                children: [e.jsxs("div", {
                    className: "spin-cont",
                    children: [e.jsxs("div", {
                        className: "head",
                        style: {
                            backgroundImage: d ? `url(${Xf})` : `url(${Kf})`
                        },
                        children: [e.jsx("div", {
                            className: "txt ttu",
                            children: i("page.spin.towin")
                        }), e.jsx("div", {
                            className: "amount",
                            children: d ? zo(l, m) : `${m}USDT`
                        })]
                    }), e.jsx(Hf, {
                        fiat: d,
                        res: h,
                        onSpin: u,
                        currency: l,
                        setCurrency: c
                    }), !t && e.jsx(Qf, {
                        hasCrypto: !0,
                        fiat: d,
                        currency: l,
                        onChange: b => c(b)
                    })]
                }), e.jsx("div", {
                    className: "bg bg-a"
                }), e.jsx("div", {
                    className: "bg bg-b"
                }), e.jsx("div", {
                    className: "bg bg-c"
                }), e.jsx(Xr, {
                    className: "spin-footer",
                    spinLoading: !1
                }), e.jsx(je, {
                    id: "spin-winlist"
                })]
            }) : e.jsx(pe, {})]
        })
    }
    const ey = "s1583o6t",
        ty = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: cs
        }, Symbol.toStringTag, {
            value: "Module"
        }));
    Ad = function() {
        const [t, a] = f.useState(!1);
        f.useEffect(() => {
            S.inited.then(n => {
                a(!0)
            })
        }, []);
        const s = S.login;
        return t ? s ? e.jsx(ny, {}) : e.jsx(ay, {}) : null
    };

    function ay() {
        const {
            data: t
        } = Be(() => ee.getDeviceRegist()), a = Se.initSearchParams.get("bcn"), s = ut(), n = Ve(), i = t === null, o = !i && t === !1;
        return f.useEffect(() => {
            (o || a) && (s.close(), n.push(e.jsx(cs, {})))
        }, [o]), o || a ? null : i ? e.jsx(pe, {}) : e.jsx(cl, {})
    }
    const sy = H.timeMemoize(() => M.get("/activity/reward/hasUserClaimedFreeMoney"), {
        timeout: 3e4
    });

    function ny() {
        const t = ut(),
            a = Ve(),
            s = ze.claimed,
            [n, i] = _e({
                hasBonus: !s,
                loading: !0
            });
        return f.useEffect(() => {
            s ? (ze.claimed = !0, i({
                loading: !1
            })) : sy().then(o => {
                i({
                    hasBonus: o === 0,
                    loading: !1
                }), ze.claimed = !!o, localStorage.setItem("newuser_spin", o ? "true" : "")
            }).catch(o => {
                i({
                    loading: !1
                })
            })
        }, []), n.loading ? e.jsx(ne, {
            children: e.jsx(pe, {})
        }) : n.hasBonus ? (t.close(), a.push(e.jsx(cs, {})), null) : e.jsx(cl, {})
    }

    function cl() {
        const [t, a] = f.useState(!0), {
            lang: s
        } = yt();
        return f.useEffect(() => (W.initReq().then(() => {
            a(!1)
        }), () => {
            W.reset()
        }), []), e.jsx(ne, {
            className: A(oy, "spin-dialog", W.fiat && "fiat-spin", s === "ja" && "ja-wrapper"),
            parentClassName: iy,
            children: e.jsxs("div", {
                id: "spin",
                style: s === "ja" && !W.fiat ? {
                    background: `url(${B.japanBackground})`,
                    backgroundSize: "cover"
                } : void 0,
                children: [e.jsx("div", {
                    className: "bg-a"
                }), e.jsx("div", {
                    className: "bg-b"
                }), t && e.jsx(pe, {}), !t && e.jsx(hf, {}), e.jsx(je, {
                    id: "spin-winlist"
                })]
            })
        })
    }
    const iy = "pygxjdp",
        oy = "sqy3odb";

    function ry() {
        return M.get("/game/support/bonus/vr/list/")
    }

    function ly() {
        return M.get("/game/support/bonus/vr/tire/")
    }

    function cy() {
        return M.get("/game/support/bonus/vr/pass/")
    }

    function dy(t, a) {
        return M.post("/game/support/bonus/vr/receive/", {
            currencyName: t,
            token: a
        })
    }

    function my(t) {
        return M.get(`/game/support/bonus/vr/interval/${t}/`)
    }
    class uy {
        constructor() {
            Z(this, "data", {
                endTime: 0,
                intervalTime: 0,
                lastBetUsd: "",
                lastReceiveTime: 0,
                nextBetUsd: "",
                nextReceiveTime: 0,
                receiveTimeMS: 0,
                receiveUsd: "",
                rewards: [],
                startTime: 0,
                status: 0,
                vipLevel: 0,
                viphostUserId: 0,
                isSendBonus: !1
            });
            Z(this, "identifier", 0);
            Z(this, "isLoaded", !1);
            Z(this, "currencyName", "");
            Z(this, "isAnimation", !1);
            Z(this, "currentInterval", String(60 * 6e4));
            Z(this, "canPlayReadySound", !1);
            Z(this, "conditions", {
                vipLevel: 22,
                turnover: 1e3
            });
            Z(this, "updateIntervalTime", 1e4);
            Z(this, "lastSyncTime", 0);
            Z(this, "tiers", {
                currentTire: null,
                tires: []
            });
            Qc(this), setInterval(() => {
                if (this.data.status > 1 && this.data.receiveTimeMS > 0) {
                    let a = Date.now() - this.lastSyncTime;
                    this.data.receiveTimeMS > this.updateIntervalTime ? this.data.receiveTimeMS -= Math.min(a, this.updateIntervalTime) : this.forceUpdate()
                }
            }, this.updateIntervalTime), Zc(() => {
                this.identifier && this.initAll()
            }), this.onEnd = this.onEnd.bind(this), this.forceUpdate = this.forceUpdate.bind(this)
        }
        init() {
            return ry().then(a => {
                let s = "BCD";
                a.rewards && a.rewards.length > 0 && (s = a.rewards[0].currencyName), this.lastSyncTime = Date.now(), this.data = a, this.isAnimation = this.isAnimation || !1, this.currencyName = this.currencyName || s, this.currentInterval = String(a.intervalTime), this.isLoaded = !0
            }).catch(L)
        }
        initTier() {
            return ly().then(a => {
                this.tiers = a, this.conditions.turnover = a.tires[0].startWager
            }).catch(L)
        }
        initAll() {
            return Promise.all([this.init(), this.initTier()])
        }
        destory() {
            this.isLoaded = !1
        }
        forceUpdate() {
            S.vipLevel >= this.conditions.vipLevel && this.identifier++
        }
        toggleIsAnimation() {
            this.isAnimation = !this.isAnimation
        }
        onEnd() {
            this.forceUpdate()
        }
        get endTime() {
            return this.data.status > 1 ? this.data.nextReceiveTime : 0
        }
        get percent() {
            const {
                receiveTimeMS: a,
                lastReceiveTime: s,
                nextReceiveTime: n
            } = this.data;
            return this.data.status > 1 ? (1 - a / (n - s)) * 100 : 0
        }
        get isRech() {
            return this.percent >= 100
        }
        get conditionsOn() {
            return this.data.vipLevel >= this.conditions.vipLevel && Number(this.data.lastBetUsd) >= this.conditions.turnover
        }
    }
    const fe = new uy;

    function dl() {
        const t = bt();
        return (a, s) => {
            let n = "",
                i = "";
            const o = t.enableLocaleCurrency;
            a >= 1e3 && (n = (o ? Math.floor(w.amount2locale(a, "USDFIAT") / 100) / 10 : Math.floor(a / 100) / 10) + "k"), s && s >= 1e3 && (i = (o ? Math.floor(w.amount2locale(s, "USDFIAT") / 100) / 10 : Math.floor(s / 100) / 10) + "k");
            const r = o ? w.localCurrency.cs : "$";
            return i ? `${r}${n} - ${i}` : `${r}${n}+`
        }
    }

    function ml() {
        const t = k(),
            {
                tires: a
            } = fe.tiers,
            s = dl();
        return e.jsxs("div", {
            className: py,
            children: [e.jsx("p", {
                className: "st",
                dangerouslySetInnerHTML: {
                    __html: t("page.recharge.about.desc_5")
                }
            }), e.jsx("div", {
                className: "tier-box",
                children: a.map(n => e.jsxs("div", {
                    className: "item",
                    children: [e.jsxs("div", {
                        className: "tit",
                        children: [t("page.tier.tit"), " ", n.index, " - ", n.tireName, e.jsxs("span", {
                            className: "desc",
                            children: ["(", s(n.startWager, n.endWager), ")"]
                        })]
                    }), e.jsxs("span", {
                        className: "cl-pr",
                        children: [new oe(n.vipRechargeRate).mul(100).toString(), "%"]
                    })]
                }, n.index))
            })]
        })
    }
    const py = "s8eri4h";

    function hy() {
        const t = k();
        return e.jsx(ne, {
            title: t("page.recharge.about"),
            children: e.jsxs(le, {
                className: gy,
                children: [e.jsxs("div", {
                    children: [e.jsx("h3", {
                        children: t("page.recharge.about.tit_1")
                    }), e.jsx("p", {
                        children: t("page.recharge.about.desc_1")
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        children: t("page.recharge.about.tit_2")
                    }), e.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: t("page.recharge.about.desc_2", Se.buildHost)
                        }
                    })]
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        children: t("page.recharge.about.tit_3")
                    }), e.jsx("p", {
                        children: t("page.recharge.about.desc_3")
                    }), e.jsx(ml, {})]
                }), e.jsxs("div", {
                    children: [e.jsx("h3", {
                        children: t("page.recharge.about.tit_4")
                    }), e.jsx("p", {
                        dangerouslySetInnerHTML: {
                            __html: t("page.recharge.about.desc_4")
                        }
                    })]
                })]
            })
        })
    }
    const ul = () => {
            Te.push(e.jsx(hy, {}))
        },
        gy = "haaj4ka";

    function ds(t) {
        return t > 1e3 ? Math.floor(t / 100) / 10 + "k" : t.toFixed(2)
    }

    function pl() {
        const t = bt();
        return (a, s) => {
            if (s = s || (n => n.toFixed(2)), t.enableLocaleCurrency) {
                const n = s(w.amount2locale(a, "USDFIAT"));
                return w.localCurrency.cs + n
            } else return `$${s(a)}`
        }
    }

    function fy({
        item: t,
        betAmount: a
    }) {
        const s = k(),
            n = dl(),
            i = pl();
        if (!t) return null;
        const o = new oe(t.startWager).sub(a).toNumber();
        return e.jsxs("div", {
            className: _y,
            children: [e.jsx("div", {
                children: s("page.tier.wager", n(t.startWager, t.endWager))
            }), e.jsx("div", {
                children: e.jsxs(Ae, {
                    k: "page.tier.reach",
                    children: [e.jsx("span", {
                        className: "light-txt",
                        children: i(o, ds)
                    }), e.jsx("span", {
                        className: "light-txt",
                        children: t.index
                    })]
                })
            })]
        })
    }
    const yy = Oc(function() {
        window.$crisp && window.$crisp.push("on", "chat:closed", () => {
            window.$crisp.push(["set", "session:segments", [
                [""]
            ]], !0)
        })
    });

    function by({
        isRech: t
    }) {
        const a = f.useRef(null);
        f.useEffect(() => {
            var n;
            (n = a.current) == null || n.play(0)
        }, []);
        const s = td(t ? 100 : 50);
        return e.jsxs("div", {
            className: t ? "ready status-box" : "status-box",
            children: [e.jsx(Mc, {
                className: "charging",
                ref: a,
                loop: !0,
                style: {
                    backgroundImage: `url(${s})`
                }
            }), e.jsx("div", {
                className: "current-box",
                children: e.jsx("svg", {
                    width: "26",
                    height: "40",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: e.jsx("path", {
                        d: "M0 22.89L17.013 0v16.855H26L8.86 40V22.89z",
                        fill: t ? "#ffffff" : "#20A75E"
                    })
                })
            })]
        })
    }
    const vy = {
        index: 0,
        endWager: 999,
        startWager: 0,
        tireName: "--",
        vipRechargeRate: 0
    };

    function wy() {
        const t = k(),
            a = re(),
            s = pl(),
            {
                data: n,
                tiers: i
            } = fe,
            o = fe.conditionsOn;
        f.useEffect(() => {
            yy()
        }, []);

        function r() {
            a("/casino"), Te.close()
        }

        function l() {
            return ee.track.trackEvent("recharge_request"), cy().then(() => {
                fe.forceUpdate(), S.emit("rewardClaim")
            })
        }
        const c = Number(n.lastBetUsd),
            d = [vy, ...i.tires].map(R => Q(U({}, R), {
                percent: new oe(R.vipRechargeRate).mul(100).toNumber()
            })),
            m = d.length,
            h = 100 / (m - 1),
            g = zs(d, R => c >= R.startWager),
            u = g || d[0],
            p = u.index,
            b = u.endWager == null ? u.startWager : u.endWager - u.startWager,
            v = c - u.startWager,
            _ = new oe(v).div(b).mul(h).toNumber(),
            T = p * h + _,
            N = T > 100 ? 100 : T,
            D = d[m - 1],
            V = p >= D.index ? D.index : p + 1,
            E = d[p + 1];
        return e.jsx("div", {
            className: jy,
            children: e.jsxs("div", {
                className: "recharge-wrap",
                children: [e.jsx(z, {
                    name: "Help",
                    className: "question",
                    onClick: ul
                }), e.jsxs("div", {
                    className: "fg",
                    children: [e.jsx(Kc, {}), e.jsx(by, {
                        isRech: o
                    })]
                }), e.jsxs("div", {
                    className: "recharge-head",
                    children: [e.jsx("div", {
                        className: "tit",
                        children: t("common.wager.day", "7")
                    }), e.jsx("div", {
                        className: "amount",
                        children: s(c)
                    }), e.jsx("div", {
                        children: t("page.tier.activation_wager", s(d[1].startWager, ds))
                    })]
                }), e.jsxs("div", {
                    className: "recharge-tiers",
                    children: [d.map((R, j) => {
                        if (j === 0) return null;
                        const C = h * j;
                        return e.jsx(Rt, {
                            delay: 0,
                            title: j > p ? e.jsx(fy, {
                                item: R,
                                betAmount: c
                            }) : null,
                            children: e.jsxs("div", {
                                style: {
                                    left: `${C}%`
                                },
                                className: A("tier-mark", p >= j && "active", j > p && "hover"),
                                children: [R.percent, "%"]
                            }, R.vipRechargeRate)
                        })
                    }), e.jsx("div", {
                        className: "progress",
                        children: e.jsx("div", {
                            style: {
                                width: `${N}%`
                            },
                            className: "progress-cont",
                            children: e.jsx("i", {})
                        })
                    }), e.jsxs("div", {
                        className: "info",
                        children: [e.jsx("b", {
                            style: N > 96 ? {
                                right: 0
                            } : {
                                left: `${N}%`
                            },
                            className: A(N > 2 && N < 96 && "half-mr", "mk")
                        }), E && e.jsx("div", {
                            className: "txt",
                            children: t("page.tier.desc", s(E.startWager, ds), String(V), String(E.percent))
                        }), e.jsxs("div", {
                            className: "info-item",
                            children: [e.jsx("div", {
                                className: "label",
                                children: t("page.tier.new.title")
                            }), e.jsx(Rt, {
                                title: e.jsx(ml, {}),
                                delay: 0,
                                children: e.jsxs("div", {
                                    className: "val",
                                    children: [p > 0 ? `Tier${p} - ${u.tireName}` : "--", e.jsx(z, {
                                        name: "Help"
                                    })]
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "info-item",
                            children: [e.jsx("div", {
                                className: "label",
                                children: t("page.tier.new.Rate")
                            }), e.jsxs("div", {
                                className: "cl-pr",
                                children: [e.jsx("b", {
                                    children: p > 0 ? u.percent : "--"
                                }), "%"]
                            })]
                        })]
                    })]
                }), e.jsx(q, {
                    className: "claim",
                    type: "conic",
                    onClick: o ? l : r,
                    children: t(o ? "common.activate" : "common.goto.wagermore")
                })]
            })
        })
    }
    const xy = Y(wy),
        jy = "a1j0gpu3",
        _y = "tcxn8kb";

    function ky() {
        return e.jsx("div", {
            className: Sy,
            children: e.jsx(Cy, {})
        })
    }
    const Ny = Y(ky),
        Cy = Y(function() {
            const {
                percent: t,
                isRech: a
            } = fe;
            return fe.data, e.jsxs("div", {
                className: "status-box",
                children: [e.jsx(Ty, {}), e.jsx("div", {
                    className: `current-box ${a?"ready":""}`,
                    children: e.jsxs("div", {
                        className: "percent",
                        children: [Math.floor(t), "%"]
                    })
                })]
            })
        }),
        Ty = Y(function() {
            const {
                percent: t
            } = fe, a = f.useRef(null);
            return f.useEffect(() => {
                var s;
                (s = a.current) == null || s.play(0)
            }, []), e.jsx(Mc, {
                className: "charging",
                ref: a,
                path: o0.rechargeLottile,
                loop: !0,
                style: {
                    backgroundImage: `url(${td(t)})`
                }
            })
        }),
        Sy = "ww0of9v";

    function Ay() {
        const t = k(),
            a = fe.data.endTime,
            s = f.useMemo(() => {
                const o = Date.now();
                return [{
                    label: t("common.daily"),
                    value: String(24 * 60 * 6e4),
                    disabled: o + 24 * 60 * 6e4 >= a
                }, {
                    label: t("common.hourly"),
                    value: String(60 * 6e4),
                    disabled: o + 60 * 6e4 >= a
                }, {
                    label: "10 Min",
                    value: String(10 * 6e4),
                    disabled: o + 10 * 6e4 >= a
                }]
            }, [a]);

        function n(o) {
            ke.confirm(e.jsxs("div", {
                className: `${Ry} message`,
                children: [e.jsx("div", {
                    className: "title",
                    children: t("page.recharge.interval.title")
                }), e.jsx("div", {
                    className: "content",
                    children: t("page.recharge.interval.desc")
                })]
            })).then(r => {
                r && my(o).then(() => {
                    fe.currentInterval = o, fe.forceUpdate(), S.emit("rewardClaim")
                })
            })
        }

        function i(o) {
            return e.jsxs("div", {
                className: "flex",
                children: [o.disabled && e.jsx("div", {
                    className: "icon"
                }), o.label]
            })
        }
        return e.jsxs("div", {
            className: Dy,
            children: [e.jsx("div", {
                children: t("common.selectFrequency")
            }), e.jsx(Ht, {
                options: s,
                value: fe.currentInterval,
                onChange: n,
                renderOption: i,
                className: "interval-select"
            })]
        })
    }
    const Iy = Y(Ay),
        Ry = "c2q9uac",
        Dy = "i92h50f",
        Py = Y(function() {
            function t(s) {
                fe.currencyName = s
            }
            const a = fe.data.rewards.map(s => ({
                label: w.getAlias(s.currencyName),
                value: s.currencyName,
                amount: +s.amount
            }));
            return e.jsx(Ht, {
                className: "recharge-currency",
                value: fe.currencyName,
                options: a,
                onChange: t,
                disabled: fe.isAnimation,
                top: !0,
                renderLabel: s => e.jsx(Oe.CoinFormat, {
                    name: s.value,
                    disableLocal: !0,
                    amount: s.amount,
                    icon: !0
                }),
                renderOption: s => e.jsx(Oe.CoinFormat, {
                    name: s.value,
                    disableLocal: !0,
                    amount: s.amount,
                    icon: !0
                })
            })
        });

    function By() {
        const t = k(),
            a = fe.data.rewards;
        return e.jsxs("div", {
            className: A(Ly, "claim-amount"),
            children: [e.jsx("div", {
                className: "type",
                children: t("common.claim_amount")
            }), a.length === 1 ? e.jsx(Oe.CoinFormat, {
                name: a[0].currencyName,
                disableLocal: !0,
                amount: Number(a[0].amount),
                icon: !0
            }) : e.jsx(Py, {})]
        })
    }
    const Ey = Y(By),
        Ly = "ccy72ye";

    function Fy() {
        const {
            isAnimation: t,
            isRech: a,
            data: s
        } = fe, {
            nextReceiveTime: n
        } = s, [i, o] = f.useState(!1), r = k();

        function l() {
            const c = fe.data.rewards.find(d => d.currencyName === fe.currencyName);
            c && (o(!0), Hc("login").then(d => dy(fe.currencyName, d)).then(() => {
                o(!1), fe.forceUpdate(), S.emit("rewardClaim"), ke.push(e.jsx(ed, {
                    amount: c.amount,
                    currencyName: c.currencyName
                }))
            }).catch(() => {
                o(!1)
            }))
        }
        return e.jsx(q, {
            className: "claim",
            loading: i,
            onClick: l,
            type: "conic",
            disabled: !a || t || i,
            children: fe.isRech ? r("page.task.receive") : e.jsxs(e.Fragment, {
                children: [r("common.claim_in"), e.jsx(vt, {
                    endTime: n,
                    onEnd: fe.forceUpdate,
                    children: ({
                        hours: c,
                        minutes: d,
                        seconds: m
                    }) => e.jsxs("div", {
                        className: "time-wrap",
                        children: [e.jsx("b", {
                            children: H.numberZeroize(c)
                        }), e.jsx("b", {
                            className: "colon",
                            children: ":"
                        }), e.jsx("b", {
                            children: H.numberZeroize(d)
                        }), e.jsx("b", {
                            className: "colon",
                            children: ":"
                        }), e.jsx("b", {
                            children: H.numberZeroize(m)
                        })]
                    })
                })]
            })
        })
    }

    function Oy() {
        const t = k(),
            a = Ss(!0),
            {
                data: s,
                tiers: n
            } = fe;
        f.useEffect(() => () => {
            fe.isAnimation && (fe.isAnimation = !1)
        }, []);
        const i = n.currentTire;
        return e.jsx("div", {
            className: Wy,
            children: e.jsxs("div", {
                className: "recharge-wrap",
                children: [e.jsx(z, {
                    name: "Help",
                    className: "question",
                    onClick: ul
                }), i && e.jsxs("div", {
                    className: "tier-rate",
                    children: [t("page.tier.new.Rate"), ": ", new oe(i.vipRechargeRate).mul(100).toString(), "%"]
                }), e.jsxs("div", {
                    className: "fg",
                    children: [e.jsx(Kc, {}), e.jsx(Ny, {})]
                }), e.jsxs("div", {
                    className: "bg",
                    children: [e.jsx(Iy, {}), e.jsxs("div", {
                        className: "details",
                        children: [e.jsx(Ey, {}), e.jsxs("div", {
                            className: "flex-center",
                            children: [e.jsxs("div", {
                                className: "item br",
                                children: [e.jsx("div", {
                                    children: t("page.recharge.total_claimed")
                                }), e.jsx("div", {
                                    className: "bold",
                                    children: a.amount2localStr(new oe(s.receiveUsd))
                                })]
                            }), e.jsxs("div", {
                                className: "item",
                                children: [e.jsx("div", {
                                    children: t("page.recharge.new_wagered")
                                }), e.jsx("div", {
                                    className: "bold",
                                    children: a.amount2localStr(new oe(s.nextBetUsd))
                                })]
                            })]
                        })]
                    }), e.jsx(Fy, {}), s.viphostUserId !== 0 && e.jsx("div", {
                        className: "contact",
                        children: e.jsx(Ae, {
                            k: "page.recharge.contact_host",
                            children: e.jsx(Xe, {
                                href: `#/chat/${s.viphostUserId}${s.isSendBonus?"?phrase=claim_weekly":""}`,
                                children: t("common.viphost")
                            })
                        })
                    }), e.jsxs("div", {
                        className: "time",
                        children: [t("page.recharge.expires"), " ", e.jsx("span", {
                            children: new Date(s.endTime).toLocaleString()
                        })]
                    })]
                })]
            })
        })
    }
    const My = Y(Oy);
    Ie({
        gd1: ["linear-gradient(151deg, #007c6f 2%, #183333 23%, #1e2024 33%)", "linear-gradient(151deg, #6dafac 4%, #90c0c0 11%, #e9eaf2 29%)"],
        cl1: ["#2d3035", "transparent"],
        cl2: [ie("#2d3035", .5), ie("#dadde6", .6)],
        cl3: [ie("#99a4b0", .6), ie("#5f6975", .8)],
        cl4: ["#fff", "#31373d"],
        cl5: [ie("#6b727c", .3), ie("#5f697", .13)],
        cl7: [ie("#6b7180", .6), ie("#6b7180", .4)],
        cl8: ["#f5f6f7", "#fff"],
        cl9: ["rgba(0, 0, 0, .2)", "rgba(255, 255, 255, .2)"]
    });
    const Wy = "h15ox9e3",
        Uy = Y(function() {
            return fe.data.status < 2 ? e.jsx(xy, {}) : e.jsx(My, {})
        });
    Id = function() {
        const t = k();
        f.useEffect(() => () => {
            fe.destory()
        }, []);
        const a = C1(async () => (await fe.initAll(), e.jsx(Uy, {})));
        return e.jsx(ne, {
            className: hl,
            title: t("page.recharge.recharge"),
            children: e.jsx(le, {
                id: "recharge",
                children: a
            })
        })
    };
    let hl, gl, fl, yl, bl, vl, wl, xl, jl, _l, kl, Nl, Cl, Tl, Sl, Al, Il, Rl, Dl, Pl, Bl, El, Ll, Fl, Ol, Ml, Wl, Ul, Vl, zl, $l, ql, Hl;
    hl = "r2dqc1w", gl = "/assets/bg_1.298f90f5.png", fl = "/assets/bg_2.e667ba21.png", yl = "/assets/bg_3.91d5a874.png", bl = "/assets/bg_4.7b915ea0.png", vl = "/assets/bg_5.e5b876eb.png", wl = "/assets/bg_6.89ed8165.png", xl = "/assets/bg_7.feb6971d.png", jl = "/assets/bg_8.369d350f.png", _l = "/assets/bg_9.d7e17ecc.png", kl = "/assets/bg_10.abd02dd8.png", Nl = "/assets/sf_1.ec6696e4.png", Cl = "/assets/sf_2.f4b89410.png", Tl = "/assets/sf_3.a08f3a46.png", Sl = "/assets/sf_4.caed58ba.png", Al = "/assets/sf_5.5f78c79c.png", Il = "/assets/sf_6.45707ae9.png", Rl = "/assets/sf_7.527c7e11.png", Dl = "/assets/sf_8.b8683f3e.png", Pl = "/assets/sf_9.a689c211.png", Bl = "/assets/sf_10.22be09b2.png", El = "/assets/shape_w.ad9ff482.png", Ll = "/assets/bcd.5d88f402.png", Fl = "/assets/fiat.4107dc00.png", Ol = "/assets/unlock_coco.c55b851f.png", Ml = "/assets/bonus_bg.e8b34708.png", Wl = "/assets/flower.272542a6.png", Ul = "/assets/ribbons.bd6e26a5.png", Vl = "/assets/star.26c608d3.png", zl = "/assets/1st.91187ff2.png", $l = "/assets/2nd.eb7d8846.png", ql = "/assets/3rd.cd78bfa2.png", Hl = "/assets/4th.bb92ea01.png", at = {
        deposit_1st: zl,
        deposit_2nd: $l,
        deposit_3rd: ql,
        deposit_4th: Hl,
        fiat: Fl,
        bcd: Ll,
        unlock_coco: Ol,
        bonus_bg: Ml,
        bg_1: gl,
        bg_2: fl,
        bg_3: yl,
        bg_4: bl,
        bg_5: vl,
        bg_6: wl,
        bg_7: xl,
        bg_8: jl,
        bg_9: _l,
        bg_10: kl,
        sf_1: Nl,
        sf_2: Cl,
        sf_3: Tl,
        sf_4: Sl,
        sf_5: Al,
        sf_6: Il,
        sf_7: Rl,
        sf_8: Dl,
        sf_9: Pl,
        sf_10: Bl,
        shape_w: El,
        pop_bcd: Gt.bcd_gold,
        pop_one: Gt.bcd_b,
        pop_two: Gt.bcd_y,
        pop_flower: Wl,
        pop_ribbons: Ul,
        pop_star: Vl,
        pop_two_w: Gt.bcd_w,
        status_coin: Gt.bcdcoin2
    };
    let Yl, Gl;
    Yl = [at.deposit_1st, at.deposit_2nd, at.deposit_3rd, at.deposit_4th], cd = Y(function() {
        const t = k(),
            a = bt(),
            [s, n] = f.useState(!1);
        f.useEffect(() => {
            be.isInited && n(!0)
        }, [be.isInited]);
        const i = be.currencyName !== "BCD";
        return e.jsx(ne, {
            title: t("page.bcd.deposit.rules"),
            children: s ? e.jsxs(le, {
                className: Gl,
                children: [e.jsx("p", {
                    className: "p",
                    children: i ? t("page.promotion.deposit.fiat", Se.buildHost, Se.buildHost) : t("page.promotion.deposit.crypto", Se.buildHost, Se.buildHost)
                }), e.jsx("div", {
                    className: "list-wrap",
                    children: be.bcd_level_info.map((o, r) => {
                        const l = new oe(w.amount2locale(o.minUsd, "USD")).todp(0, oe.ROUND_CEIL).toNumber(),
                            c = w.convertCurrency(o.maxUsd, "USD", be.currencyName),
                            d = new oe(c).todp(0, oe.ROUND_DOWN).toNumber(),
                            m = `${new oe(be.maxBonusRatio[r+1]||0).mul(100).toFixed(0)}%`;
                        return e.jsxs("div", {
                            className: "deposit-level-item",
                            children: [e.jsxs("div", {
                                className: "top-deposit",
                                children: [e.jsx("img", {
                                    alt: "img",
                                    src: Yl[r],
                                    className: "bg-img"
                                }), e.jsx("p", {
                                    className: "deposit-title",
                                    children: `${o.sortText} ${t("common.deposit")}`
                                }), e.jsxs("div", {
                                    className: "deposit-bonus",
                                    children: [e.jsx("span", {
                                        className: "n",
                                        children: m
                                    }), e.jsx("span", {
                                        className: "d",
                                        children: t("page.vip.dialog.table.head5")
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "bot-deposit",
                                children: [e.jsxs("p", {
                                    children: [e.jsx("span", {
                                        className: "l",
                                        children: t("common.mindeposit")
                                    }), e.jsx("span", {
                                        className: "r",
                                        children: a.enableLocaleCurrency ? `${w.localCurrency.cs} ${H.numberWithCommas(w.localCurrency.value,l,0)}` : `$ ${o.minUsd}`
                                    })]
                                }), e.jsxs("p", {
                                    children: [e.jsx("span", {
                                        className: "l",
                                        children: t("common.getupto")
                                    }), e.jsx("span", {
                                        className: "r",
                                        children: i ? `${H.numberWithCommas(be.currencyName,d,0)} ${w.getAlias(be.currencyName)}` : `${H.numberWithCommas("BCD",o.maxUsd,0)} BCD`
                                    })]
                                })]
                            })]
                        }, o.sortText)
                    })
                })]
            }) : e.jsx(pe, {})
        })
    }), Gl = "b61ptl";

    function Vy() {
        const t = k();
        return f.useMemo(() => [{
            gradientItem: [{ in: "#F6C722",
                out: "#FF832B"
            }, { in: "#FFA22B",
                out: "#ED6300"
            }, { in: "#C037FF",
                out: "#9701DD"
            }],
            wordWhite: !1,
            gradientBgColor: "#eca832",
            title: t("wallet.bcd.deposit.first_title"),
            borderColor: "#ffbc00",
            bgList: [4, 5, 6]
        }, {
            gradientItem: [{ in: "#FFA22B",
                out: "#ED6300"
            }, { in: "#FF7237",
                out: "#DD5101"
            }, { in: "#09C056",
                out: "#02AB56"
            }],
            wordWhite: !1,
            gradientBgColor: "#e56237",
            title: t("wallet.bcd.deposit.second_title"),
            borderColor: "#e56237",
            bgList: [5, 7, 8]
        }, {
            gradientItem: [{ in: "#C037FF",
                out: "#9701DD"
            }, { in: "#9037FF",
                out: "#7101DD"
            }, { in: "#C30BCE",
                out: "#BD02C0"
            }],
            wordWhite: !0,
            gradientBgColor: "#bc08e2",
            title: t("wallet.bcd.deposit.third_title"),
            borderColor: "#bc08e2",
            bgList: [6, 9, 10]
        }, {
            gradientItem: [{ in: "#9037FF",
                out: "#7101DD"
            }, { in: "#1EE077",
                out: "#10CF68"
            }, { in: "#E0980A",
                out: "#AA4D0B"
            }],
            wordWhite: !0,
            gradientBgColor: "#721afc",
            title: t("wallet.bcd.deposit.fourth_title"),
            borderColor: "#721afc",
            bgList: [1, 2, 3]
        }], [])
    }
    dd = Y(function({
        topDom: t
    }) {
        const a = be.rechargeValidNum || 0,
            s = J1(be.bonusItems, "rechargeUsd"),
            {
                gradientItem: n,
                wordWhite: i,
                gradientBgColor: o,
                title: r,
                borderColor: l,
                bgList: c
            } = Vy()[a],
            [d, m] = f.useState(be.selectStatus.bonusRatio * 100),
            h = u => {
                const p = Math.floor(u / 20),
                    b = u % 20 !== 0,
                    v = (u - p * 20) / 20 * 100;
                return [1, 1, 1, 1, 1].map((_, T) => {
                    const N = T < p ? "item full-item" : "item";
                    return e.jsx("div", {
                        className: N,
                        children: b && T === p ? e.jsx("span", {
                            style: {
                                width: `${v}%`
                            }
                        }) : e.jsx("span", {})
                    }, T)
                })
            },
            g = ee.isDarken ? `radial-gradient(circle at 100% -20%, ${o}, #1e2024 70%)` : `radial-gradient(circle at 120% -35%, ${o}, #e9eaf2 75%)`;
        return e.jsxs("div", {
            className: A(zy, t && "has-top"),
            style: {
                backgroundImage: g
            },
            children: [t || e.jsxs(e.Fragment, {
                children: [e.jsx(Ts, {
                    onClick: () => ke.close()
                }), e.jsx("p", {
                    className: "title",
                    children: r
                })]
            }), e.jsx("div", {
                className: "mid",
                children: s.map((u, p) => e.jsx($y, {
                    depositnNum: s[p].rechargeUsd,
                    percent: s[p].bonusRatio,
                    changeHoverBonus: m,
                    wordWhite: i,
                    gradientItem: n[p],
                    bgNum: c[p],
                    borderColor: l,
                    last: p === s.length - 1,
                    gradientBgColor: o
                }, p))
            }), e.jsx("div", {
                className: "percent",
                children: h(d)
            }), e.jsx("div", {
                className: "percent-num",
                children: e.jsxs("span", {
                    className: "num",
                    style: {
                        left: d > 100 ? "100%" : `${d}%`
                    },
                    children: ["+", d, "%"]
                })
            })]
        })
    }), Ie({
        cl1: ["rgba(245, 246, 252, 0.92)", "rgba(245, 246, 252, 0.5)"],
        cl2: ["#ffffff", "#31373d"],
        cl3: [ie("#d8d8d8", .1), ie("#ffffff", .9)],
        cl4: [ie("#ffffff", .2), ie("#b2b2b2", .1)]
    });
    const zy = "d17mceez",
        $y = Y(function({
            depositnNum: t,
            percent: a,
            changeHoverBonus: s,
            last: n,
            wordWhite: i,
            gradientItem: o,
            bgNum: r,
            borderColor: l,
            gradientBgColor: c
        }) {
            const d = k(),
                m = re(),
                h = Ss(!0),
                g = new oe(a).mul(100).toNumber(),
                u = at["sf_" + r],
                p = i ? "#ffffff" : "#000000";
            return e.jsx("div", {
                className: A(qy, "item", be.selectStatus.bonusRatio === a && "select"),
                onMouseEnter: () => s(g),
                onMouseLeave: () => s(be.selectStatus.bonusRatio * 100),
                onClick: () => {
                    be.setSeleteStatus(a), ke.close(), m("/wallet/deposit")
                },
                children: e.jsx("div", {
                    className: "deposit-bg",
                    style: {
                        borderColor: l
                    },
                    children: e.jsxs("div", {
                        className: "main-bg",
                        children: [e.jsxs("div", {
                            className: "top",
                            style: {
                                backgroundImage: `radial-gradient(circle at 50% 50%, ${o.in}, ${o.out} 67%)`
                            },
                            children: [e.jsx("img", {
                                className: "sf-img",
                                alt: "sf",
                                src: u
                            }), e.jsxs("div", {
                                className: "top-info",
                                children: [e.jsx("p", {
                                    className: "p_1",
                                    style: {
                                        color: n ? "#fff" : p
                                    },
                                    children: d("common.deposit")
                                }), e.jsx("p", {
                                    className: "p_2",
                                    style: {
                                        color: n ? "#ffd005" : p
                                    },
                                    children: h.amount2localStr(new oe(t))
                                }), e.jsx("div", {
                                    className: "add"
                                }), e.jsxs("p", {
                                    className: "p_3",
                                    style: {
                                        color: n ? "#ffd005" : p
                                    },
                                    children: [g, "%"]
                                }), e.jsx("p", {
                                    className: "p_4",
                                    style: {
                                        color: n ? "#fff" : p
                                    },
                                    children: d("page.vip.dialog.table.head5")
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "bottom",
                            children: [e.jsxs("p", {
                                children: [d("common.deposit"), " ", h.amount2localStr(new oe(t))]
                            }), e.jsx("p", {
                                children: e.jsx(Ae, {
                                    k: "wallet.bcd.deposit.extra",
                                    children: e.jsx("span", {
                                        children: h.amount2localStr(new oe(t * a))
                                    })
                                })
                            })]
                        })]
                    })
                })
            })
        }),
        qy = "ds2cwoh";

    function Hy(t, a = 10) {
        return M.post("/activity/recharge-bonus/records/", {
            page: t,
            pageSize: a
        }).catch(L)
    }

    function Yy({
        currency: t,
        forceUpdate: a
    }) {
        const s = k(),
            [n, i] = _e({
                page: 1,
                pageSize: 10,
                update: 0
            }),
            {
                data: o
            } = Be(() => Hy(n.page, n.pageSize), [n.page, a && n.page === 1]),
            r = c => {
                switch (c.type) {
                    case 1:
                        return s("common.claimed");
                    case 2:
                        return s("common.deposit_bonus");
                    case 3:
                        return s("page.promotion.spin.title0");
                    case 4:
                        return s("common.catchcoco");
                    case 5:
                        return s("title.user_rain");
                    default:
                        return c.subType
                }
            };
        if (o) {
            if (o && o.list.length === 0) return e.jsx("div", {
                className: Jl,
                children: e.jsx(Ce, {})
            })
        } else return e.jsx("div", {
            className: Jl,
            children: e.jsx(pe, {})
        });
        const l = t === "BCD";
        return e.jsxs("div", {
            className: A(Gy, "bonus-history-list"),
            children: [e.jsxs(T1, {
                hover: !1,
                children: [e.jsx("thead", {
                    children: e.jsxs("tr", {
                        children: [e.jsx("th", {
                            children: s("page.user.profile.date")
                        }), e.jsx("th", {
                            children: s("common.type")
                        }), e.jsx("th", {
                            children: s("common.amount")
                        })]
                    })
                }), e.jsx("tbody", {
                    children: o.list.map((c, d) => e.jsxs("tr", {
                        className: "log-item",
                        children: [e.jsxs("td", {
                            children: [e.jsx("div", {
                                className: "time",
                                children: new Date(c.createTime).toLocaleTimeString()
                            }), e.jsx("div", {
                                className: "time",
                                children: new Date(c.createTime).toLocaleDateString()
                            })]
                        }), e.jsx("td", {
                            children: r(c)
                        }), e.jsx("td", {
                            className: "border-right",
                            children: e.jsxs("div", {
                                className: "amount monospace last",
                                children: [e.jsx(De, {
                                    name: t
                                }), "+", !l && c.currencyName === "BCD" ? H.formateAmount(w.locale2amount(Number(c.amount), t, 1)) : H.formateAmount(c.amount)]
                            })
                        })]
                    }, d))
                })]
            }), o.totalPage > 1 && e.jsx(S1, {
                page: n.page,
                limit: n.pageSize,
                onChange: c => i({
                    page: c
                }),
                total: o.total
            })]
        })
    }
    const Jl = "l1e34cfq";
    Ie({
        cl1: [ie("#5f6975", .8)],
        cl2: ["#ffffff", "#31373d"],
        cl3: ["#23252a", "#f5f6fa"],
        cl4: ["#1e2024", "#ffffff"]
    });
    const Gy = "s1vc6z4";
    let Ql, Zl, Kl;
    ud = Y(function() {
        const t = k(),
            a = re(),
            s = bt(),
            {
                totalAmount: n,
                releaseAmount: i,
                currencyName: o,
                bonusAmount: r,
                bonusThreshold: l,
                claimBonus: c,
                canReceive: d
            } = be,
            m = o === "BCD",
            h = async () => {
                d && await c() && S.emit("rewardClaim")
            };
        f.useEffect(() => {
            be.init(!0)
        }, []);
        const g = new oe(n).sub(i).todp(2, oe.ROUND_FLOOR),
            u = new oe(l || 0),
            p = new oe(r || 0),
            b = u.sub(p),
            v = b.div(.01).div(be.wagerRatioNumber);
        return w.localCurrencys[o], e.jsx(ne, {
            title: `${w.getAlias(o)} ${t("page.rekeback.title")}`,
            className: Zl,
            children: e.jsxs(le, {
                className: "scv hidden-scroll-y",
                children: [e.jsxs("div", {
                    className: "top-bonus-rekeback",
                    children: [e.jsx("img", {
                        alt: "bg",
                        src: at.bonus_bg,
                        className: "bg"
                    }), e.jsxs("div", {
                        className: "in",
                        children: [e.jsx("img", {
                            alt: "bonus",
                            src: m ? at.bcd : at.fiat,
                            className: "bonus-img"
                        }), e.jsx("div", {
                            className: "hover-text",
                            children: e.jsxs("p", {
                                children: [t("page.vip.rights.unlocked"), " ", w.getAlias(o)]
                            })
                        }), e.jsxs("div", {
                            className: "unlock-text",
                            children: [e.jsx(De, {
                                name: o
                            }), e.jsx("p", {
                                children: new oe(r).toFixed(2, oe.ROUND_FLOOR)
                            })]
                        }), e.jsx(q, {
                            disabled: !d,
                            type: "conic4",
                            onClick: h,
                            children: t("page.task.receive")
                        }), e.jsxs("p", {
                            className: "min-text",
                            children: [t("page.bcd.minimum.claim"), ":", " ", e.jsxs("span", {
                                children: [l, " ", w.getAlias(o)]
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "lock-amount-wrap",
                    children: [e.jsxs("div", {
                        className: "lock-left",
                        children: [e.jsx(z, {
                            name: "Locked"
                        }), e.jsxs("p", {
                            children: [t("wallet.bcd.lucked"), " ", w.getAlias(o), ":"]
                        })]
                    }), e.jsxs("div", {
                        className: "lock-right",
                        children: [e.jsxs("p", {
                            className: "l-t",
                            children: [e.jsx("span", {
                                className: "f",
                                children: H.numberWithCommas(!0, g.toNumber())
                            }), e.jsx("span", {
                                children: w.getAlias(o)
                            })]
                        }), s.enableLocaleCurrency && m && g.gt(0) && e.jsxs("p", {
                            className: "l-p",
                            children: [w.localCurrency.cs, H.numberWithCommas(o, new oe(w.amount2locale(g, o)).todp(2).toNumber())]
                        })]
                    })]
                }), e.jsx("p", {
                    className: "howto-tit",
                    children: t("page.bcd.howClaim")
                }), e.jsxs("div", {
                    className: "howto-claim-wrap",
                    children: [e.jsxs("p", {
                        className: "claim-text-top",
                        children: [`${t("page.bcd.release.amount")} * 1% * `, e.jsx("b", {
                            children: be.wagerRatio
                        })]
                    }), e.jsxs("p", {
                        className: "claim-text-bot",
                        children: [e.jsxs(Ae, {
                            k: "page.bcd.wager.unlock",
                            children: [b.lte(0) ? e.jsx("span", {
                                children: "0"
                            }) : e.jsxs("span", {
                                children: [w.localCurrency.cs, H.numberWithCommas(o, new oe(w.amount2locale(v, o)).todp(0).toNumber())]
                            }), e.jsxs("span", {
                                children: [l, " ", w.getAlias(o), "."]
                            })]
                        }), e.jsx(Xe, {
                            href: "#/about_bonuscoin",
                            children: t("common.viewdetail")
                        })]
                    }), e.jsxs("div", {
                        className: "goto-btns",
                        children: [e.jsx(q, {
                            onClick: () => {
                                Te.close(), a("/casino")
                            },
                            type: "conic3",
                            children: t("common.goto.casino")
                        }), e.jsx(q, {
                            onClick: () => {
                                Te.close(), a("/sports")
                            },
                            type: "conic",
                            children: t("common.goto.sports")
                        })]
                    })]
                }), e.jsxs("button", {
                    className: "history-btn",
                    onClick: () => Te.push(e.jsx(Ql, {})),
                    children: [e.jsxs("span", {
                        children: [w.getAlias(o), " ", t("page.bonus.history")]
                    }), e.jsx(z, {
                        name: "Arrow"
                    })]
                })]
            })
        })
    }), Ql = Y(function() {
        const t = k();
        return e.jsx(ne, {
            title: `${w.getAlias(be.currencyName)} ${t("page.bonus.history")}`,
            className: Kl,
            children: e.jsx(le, {
                children: e.jsx(Yy, {
                    currency: be.currencyName
                })
            })
        })
    }), Zl = "b12dd41u", Kl = "d1e90kop";

    function Jy(t) {
        return t ? M.get(`/activity/bonus-dashboard/deposit-bonus/limit-games/?rewardBonusId=${t}`) : M.get("/activity/reward/freeMoneyLimitGames/")
    }
    Fs = function() {
        const t = re(),
            a = ft(),
            s = a.rewardBonusId || "",
            n = a.currency || "",
            i = !!s,
            o = k(),
            {
                data: r,
                error: l
            } = Be(() => Jy(Number(s))),
            c = ut();
        if (l) return e.jsx(ne, {
            children: e.jsx(Ce, {
                children: l.message
            })
        });
        if (!r) return e.jsx(ne, {
            children: e.jsx(pe, {})
        });
        const d = r.gameList;
        return d ? e.jsx(ne, {
            title: o("page.bonus.games_for"),
            className: Qy,
            children: e.jsxs(le, {
                children: [e.jsx("div", {
                    className: "head",
                    children: e.jsxs("div", {
                        className: "desc",
                        children: [o(i ? "page.bonus.games_for.desc" : "page.bonus.games_for_deposit.desc"), " "]
                    })
                }), d.length === 0 && e.jsx(Ce, {}), e.jsx("div", {
                    className: "games",
                    children: d.map(m => e.jsxs("div", {
                        className: "gameItem",
                        onClick: () => {
                            c.close(), Ye.trackEvent("bonus_game_list_click"), n && w.dict[n] && (w.current = n), t(`/game/${m.gameIdentity.gameUnique}?fsId=${r.fsId}&bonus=true`)
                        },
                        children: [e.jsx("img", {
                            src: m.thumbnail,
                            alt: ""
                        }), e.jsx("div", {
                            className: "provider",
                            children: m.providerName
                        })]
                    }, m.fullName))
                })]
            })
        }) : e.jsx(ne, {
            children: e.jsx(Ce, {})
        })
    };
    const Qy = "s7397x7",
        Pe = () => K(() =>
            import ("./chunk-e05ea244.js").then(async t => (await t.__tla, t)), ["assets/chunk-e05ea244.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-94387f67.js", "assets/hooks.331a9899.css", "assets/chunk-15d0001f.js", "assets/chunk-c23b3c52.js", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/chunk-8285f8a4.js", "assets/index.74861cf6.css", "assets/chunk-654ef298.js", "assets/chunk-7cfcd448.js", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/chunk-bff9c602.js", "assets/chunk-f0854543.js", "assets/pages/help/index.page.039b87d6.js", "assets/chunk-7459b96e.js", "assets/chunk-81a32830.js", "assets/chunk-8ac0d124.js"]),
        Zy = $(async () => ({
            default: (await Pe()).CoindropSend
        })),
        Ky = $(async () => ({
            default: (await Pe()).CocoBonus
        })),
        Xy = $(async () => ({
            default: (await Pe()).RainPage
        })),
        eb = $(async () => ({
            default: (await Pe()).RollPage
        })),
        Xl = $(async () => ({
            default: (await Pe()).Task
        })),
        tb = $(async () => ({
            default: (await Pe()).Tip
        })),
        ab = $(async () => ({
            default: (await Pe()).VipLevel
        })),
        sb = $(async () => ({
            default: (await Pe()).VipOffer
        })),
        nb = $(async () => ({
            default: (await Pe()).Recharge
        })),
        ib = $(async () => ({
            default: (await Pe()).BcdRule
        })),
        ob = $(async () => ({
            default: (await Pe()).DepositBonus
        })),
        rb = $(async () => ({
            default: (await Pe()).BonusRakeback
        })),
        lb = $(async () => ({
            default: (await Pe()).NewUserTask
        })),
        cb = $(async () => ({
            default: (await Pe()).Vip
        })),
        db = $(async () => ({
            default: (await Pe()).Spin
        }));

    function mb() {
        const {
            publicChatStore: t
        } = Ee();
        return f.useEffect(() => {
            t.addParser("2", lt, 4), t.addParser("3", lt, 4), t.addParser("4", lt, 4), t.addParser("5", lt, 4), t.addParser("6", lt, 4), t.addParser("8", Ou, 6), t.addParser("10", wr), t.addParser("11", lt, 4), t.addParser("12", wr), t.addParser("16", lt), t.addParser("17", lt), t.addParser("18", ip), t.addParser("20", lp)
        }, []), e.jsxs(e.Fragment, {
            children: [As.createPortal(e.jsx(up, {}), document.body), As.createPortal(e.jsx(Ym, {}), document.body), e.jsx(Ho, {}), As.createPortal(e.jsx(lb, {}), document.body), e.jsx(je, {
                id: "notice-enter-pc-header",
                children: e.jsx(Es, {})
            }), e.jsx(je, {
                id: "deposit-bonus-enter",
                children: e.jsx(ob, {})
            }), e.jsx(Sp, {}), e.jsx(je, {
                id: "bonus-sidebar-list-enter",
                children: e.jsx(wp, {})
            }), e.jsx(je, {
                id: "bonus-sidebar-link-enter",
                children: e.jsx(_p, {})
            }), e.jsx(je, {
                id: "bonus-mobile-header-enter",
                children: e.jsx(Np, {})
            }), e.jsx(je, {
                id: "bonus-mobile-unclaim-number-enter",
                children: e.jsx(kp, {})
            }), e.jsx(je, {
                id: "notice-mobile-dont-enter",
                children: e.jsx(jr, {})
            })]
        })
    }

    function ub() {
        wu(), O.emit("inject_rootNode", e.jsx(mb, {})), O.emit("inject_dialog", [{
            path: "#/bonus/crocodile",
            element: e.jsx(Ky, {}),
            isDialog: !0
        }, {
            path: "#/bcd/rule",
            element: e.jsx(ib, {}),
            isDialog: !0
        }, {
            path: "#/shitlink/:code",
            element: e.jsx(Vo, {}),
            isHook: !0
        }, {
            path: "#/bonuslink/:code",
            element: e.jsx(Vo, {}),
            isHook: !0
        }, {
            path: "#/newuser/setcurrency",
            element: e.jsx(Ys, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/newuser/gamelist/:currency/:rewardBonusId?",
            isDialog: !0,
            element: e.jsx(Fs, {}),
            isAuth: !0
        }, {
            path: "#/user/coindrop_send",
            element: e.jsx(Zy, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/task/*",
            element: e.jsx(Xl, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/quests/*",
            element: e.jsx(Xl, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/bonus/rain",
            element: e.jsx(Xy, {}),
            isDialog: !0
        }, {
            path: "#/bonus/roll",
            element: e.jsx(eb, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/tip/:userid/:username",
            element: e.jsx(tb, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/spin",
            isDialog: !0,
            element: e.jsx(db, {})
        }, {
            path: "#/vip",
            isDialog: !0,
            element: e.jsx(cb, {}),
            isAuth: !0
        }, {
            path: "#/vip-level",
            isDialog: !0,
            element: e.jsx(ab, {})
        }, {
            path: "#/vip-offer",
            isDialog: !0,
            element: e.jsx(sb, {}),
            isAuth: !0
        }, {
            path: "#/recharge",
            element: e.jsx(nb, {}),
            isDialog: !0
        }, {
            path: "#/bonus/dashboard",
            element: e.jsx(rb, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/notification",
            element: e.jsx(Ls, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const pb = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: ub
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        hb = J.memo(function() {
            const t = re(),
                a = A1(),
                s = Q1();
            return f.useEffect(() => {
                const n = s.get("orderId") || "";
                let i = s.get("signature") || "";
                i[i.length - 1] === "/" && (i = i.substring(0, i.length - 1)), n && M.post(a.pathname, {
                    orderId: n,
                    signature: i
                }).then(o => {
                    t("/"), setTimeout(() => {
                        t("/wallet/transactions?type=deposit")
                    }, 500)
                }).catch(console.log)
            }, []), null
        });

    function gb() {
        const [t, a] = f.useState(!1), s = f.useRef(0), n = f.useRef(null), i = f.useRef("BCD");
        return f.useEffect(() => {
            const o = (r, l) => {
                s.current = Number(r), i.current = l, a(!0), n.current = setTimeout(() => a(!1), 4e3)
            };
            return be.on("bcdPop", o), () => {
                be.off("bcdPop", o), n && n.current && clearTimeout(n.current)
            }
        }, []), t ? e.jsxs("div", {
            className: fb,
            onClick: () => a(!1),
            children: [e.jsxs("span", {
                children: ["+ ", s.current.toFixed(2)]
            }), " ", w.getAlias(i.current)]
        }) : null
    }
    const fb = "sdvbd5d";

    function yb({
        currencyName: t,
        showBonusAmount: a,
        onChange: s
    }) {
        const n = w.list;
        return e.jsx("div", {
            className: bb,
            children: e.jsx(Z1, {
                isModel: !0,
                currencyName: t,
                showBonusAmount: a,
                list: n,
                openSet: !0,
                onChange: s,
                orderType: "normal",
                isSearch: !0,
                showMaintain: !1,
                hover: !0,
                focus: !1
            })
        })
    }
    const bb = "s1kicaxa";

    function vb(t) {
        return new Promise(a => setTimeout(a, t))
    }

    function wb(t) {
        const a = [];
        return t.map(s => {
            const n = a.findIndex(i => i.currencyName === s.currencyName);
            n >= 0 ? a[n].amount = a[n].amount.add(s.amount) : a.push(U({}, s))
        }), a
    }
    const xb = J.memo(function() {
            const t = f.useRef(null),
                a = f.useRef(!1),
                s = f.useRef([]),
                [n, i] = f.useState([]);
            f.useEffect(() => {
                const r = l => {
                    l.solved && l.amount.gt(0) && !window.document.hidden && (s.current = s.current.concat(l), a.current || (a.current = !0, t.current = setTimeout(() => {
                        i(c => c.concat(wb(s.current))), a.current = !1, s.current = []
                    }, 200)))
                };
                return O.on("deduction", r), () => {
                    O.off("deduction", r), t.current && clearTimeout(t.current)
                }
            }, []);
            const o = f.useCallback(r => {
                i(l => l.filter(c => c !== r))
            }, []);
            return e.jsx(pt, {
                children: n.map((r, l) => e.jsx(Nb, {
                    onRemove: o,
                    data: r,
                    index: l
                }, r.id))
            })
        }),
        jb = {
            y: 24,
            scale: .5,
            opacity: 1
        },
        _b = {
            y: 16,
            scale: 1,
            opacity: 1
        },
        kb = {
            y: 0,
            scale: .7,
            opacity: 0
        },
        Nb = J.memo(function({
            data: t,
            onRemove: a,
            index: s
        }) {
            return f.useEffect(() => {
                (async () => (await vb(800), a(t)))()
            }, []), e.jsx(ge.div, {
                animate: _b,
                initial: jb,
                exit: kb,
                transition: {
                    duration: .3
                },
                className: A(Cb, "deduction-item-" + s),
                children: e.jsx(Oe.CoinFormat, {
                    name: t.currencyName,
                    amount: t.amount.toNumber(),
                    showName: !1
                })
            })
        }),
        Cb = "dqbbefw",
        ec = Wc.proxy({
            hideAmount: !1
        });

    function Tb() {
        return Wc.useProxy(ec)
    }
    const Sb = Y(() => {
            const t = Ve(),
                a = re(),
                s = Ke(),
                n = k(),
                [i, o] = f.useState(!1),
                [r, l] = f.useState(""),
                c = Tb(),
                d = f.useRef(null),
                m = va(() => o(!1), [d]),
                h = w.current,
                g = w.dict[h].available,
                u = ee.isBrHost;
            return f.useEffect(() => {
                i ? ee.mobileShadow = i : setTimeout(() => {
                    ee.mobileShadow = i
                }, 100)
            }, [i]), f.useEffect(() => {
                if (w.specialCurrencys.has(w.current)) {
                    const p = w.list[0].currencyName;
                    Ca.setCutCurrency(p)
                } else Ca.setCutCurrency(w.current);
                l("")
            }, [h]), f.useEffect(() => {
                function p(v) {
                    s ? (r && t.close(), t.push(e.jsx(tc, {
                        show: v,
                        closeFn: () => t.close(),
                        switchFn: () => o(!0)
                    }))) : l(v)
                }

                function b(v) {
                    ec.hideAmount = v
                }
                return O.on("hideAmount", b), O.on("game-bet-amount-insufficient", p), () => {
                    O.off("game-bet-amount-insufficient", p), O.off("hideAmount", b)
                }
            }, []), e.jsxs("div", {
                className: A(Ib, "wallet-enter"),
                children: [e.jsxs("div", {
                    className: Rb,
                    ref: d,
                    onClick: p => o(!i),
                    children: [e.jsxs("div", {
                        className: A(Db, "wallet-enter-lef-tinfo"),
                        children: [c.hideAmount ? e.jsxs("div", {
                            className: ac,
                            children: [e.jsx(Oe.CoinIcon, {
                                name: h
                            }), e.jsx("span", {
                                className: "currency",
                                children: w.getAlias(h)
                            }), e.jsx(z, {
                                name: "Arrow"
                            })]
                        }) : e.jsxs("div", {
                            className: ac,
                            children: [e.jsx(Oe.CoinIcon, {
                                name: h
                            }), e.jsx(Oe.CoinFormat, {
                                className: "balance",
                                name: h,
                                amount: g
                            }), e.jsx(z, {
                                name: "Arrow"
                            })]
                        }), !s && r && e.jsxs(e.Fragment, {
                            children: [e.jsx(tc, {
                                show: r,
                                closeFn: () => l(""),
                                switchFn: () => o(!0)
                            }), e.jsx("div", {
                                className: "rac"
                            })]
                        }), e.jsx(xb, {})]
                    }), e.jsxs(q, {
                        className: Pb,
                        type: "conic2",
                        onClick: p => {
                            ee.track.trackEvent("upperbar_click", {
                                button_name: "deposit"
                            }), p.stopPropagation(), o(!1), a(u ? "#/brwallet/deposit" : "#/deposit")
                        },
                        children: [e.jsx(z, {
                            name: "Wallet"
                        }), e.jsx("span", {
                            children: n("common.deposit")
                        })]
                    }), e.jsx(gb, {})]
                }), e.jsx(pt, {
                    children: i && e.jsx(ge.div, {
                        className: Ab,
                        ref: m,
                        initial: {
                            y: "7%",
                            opacity: 0
                        },
                        animate: {
                            y: "0%",
                            opacity: 1
                        },
                        children: u ? e.jsx("div", {
                            className: "balance-select bg",
                            children: e.jsx($m, {
                                currency: h,
                                showBonusAmount: !0,
                                onChange: p => {
                                    w.current = p, o(!1)
                                }
                            })
                        }) : e.jsx(yb, {
                            currencyName: h,
                            showBonusAmount: !0,
                            onChange: p => {
                                w.current = p, o(!1)
                            }
                        })
                    })
                })]
            })
        }),
        tc = J.memo(function({
            show: t,
            closeFn: a,
            switchFn: s
        }) {
            const n = k(),
                i = re(),
                o = w.current,
                r = t === "common",
                l = t === "balance";
            return e.jsxs("div", {
                className: A(Bb, l && "balance-wrap"),
                onClick: c => c.stopPropagation(),
                children: [e.jsx("div", {
                    className: "close-btn-w",
                    children: e.jsx("button", {
                        onClick: a,
                        className: "close",
                        children: e.jsx(z, {
                            name: "Close"
                        })
                    })
                }), l ? e.jsx("p", {
                    className: "l-d",
                    children: n("wallet.insufficient.bonus")
                }) : e.jsx("p", {
                    className: "d",
                    children: e.jsx(Ae, {
                        k: r ? "wallet.insufficient.amount" : "wallet.insufficient.switch",
                        children: e.jsx("span", {
                            className: "g",
                            children: o
                        })
                    })
                }), e.jsxs("div", {
                    className: "btns",
                    children: [l ? e.jsx("p", {
                        className: "cl-p",
                        onClick: () => i(`#/newuser/gamelist/${w.current}`),
                        children: n("common.actions.play_available_games")
                    }) : r ? null : e.jsx(q, {
                        className: "switch-btn",
                        onClick: () => {
                            a(), s()
                        },
                        children: n("common.switch")
                    }), e.jsx(q, {
                        type: "conic",
                        onClick: () => {
                            a(), i("#/deposit")
                        },
                        children: n("common.deposit")
                    })]
                })]
            })
        }),
        Ab = "a126bdy4",
        Ib = "w1tjnt4n";
    Ie({
        cl1: ["#1e2024", ie("#e9eaf2", .6)]
    });
    const Rb = "e16daubk",
        ac = "t11wgt1j",
        Db = "c1ye0px7",
        Pb = "b1xs9g2a",
        Bb = "iz7baph",
        Eb = Is(function(t) {
            return M.get(`/user/deposit/fiat/${t}/methods/`)
        });

    function Lb({
        currency: t,
        onNext: a,
        children: s
    }) {
        const {
            data: n
        } = Be(() => Eb(t), [t]), i = et(), o = k();
        return n ? e.jsxs("div", {
            className: Fb,
            children: [s, e.jsx("div", {
                className: "sub-tit",
                children: o("wallet.choose_apayment")
            }), e.jsx("div", {
                className: "payment-list",
                children: n.map((r, l) => e.jsxs("div", {
                    className: "payment-item",
                    onClick: () => a(r),
                    children: [e.jsx("img", {
                        className: "logo",
                        src: i ? r.nightIcon : r.lightIcon,
                        alt: ""
                    }), e.jsx("div", {
                        children: w.numberWithCommas(Number(r.minDepositAmount), 0)
                    }), e.jsx("div", {
                        style: {
                            margin: "0 3px"
                        },
                        children: " ~ "
                    }), e.jsx("div", {
                        className: "max",
                        children: w.numberWithCommas(Number(r.maxDepositAmount), 0)
                    }), e.jsx(z, {
                        name: "Arrow"
                    })]
                }, l))
            })]
        }) : e.jsx(pe, {})
    }
    const Fb = "scllten";

    function Ob({
        item: t,
        currency: a
    }) {
        return e.jsx(d0, {
            payment: t,
            currency: a
        })
    }

    function Mb(t, a) {
        const s = w.getFullName(t.value.currencyName).toLocaleLowerCase(),
            n = t.value.aliasCurrencyName.toLocaleLowerCase(),
            i = a.toLocaleLowerCase();
        return s.includes(i) || n.includes(i)
    }

    function sc({
        isDeposit: t,
        onChange: a,
        currency: s,
        currencyList: n
    }) {
        const i = k(),
            o = w.dict[s],
            r = f.useCallback((c, d) => e.jsxs(e.Fragment, {
                children: [e.jsx("span", {
                    className: "alias",
                    children: d
                }), e.jsx(De, {
                    className: "coin-icon",
                    name: c.currencyName
                })]
            }), []),
            l = f.useMemo(() => n.map(c => ({
                label: c.aliasCurrencyName,
                value: c
            })), []);
        return e.jsxs("div", {
            className: A(Wb, "fait"),
            children: [e.jsx("div", {
                className: "label",
                children: i(t ? "wallet.deposit.currency" : "wallet.withdraw.currency")
            }), e.jsx(Ht, {
                renderLabel: c => r(c.value, c.label),
                filter: Mb,
                renderOption: ({
                    value: c,
                    label: d
                }) => e.jsx(_a, {
                    item: c,
                    showMaintain: !0,
                    onChange: () => {},
                    currency: s
                }),
                options: l,
                value: o,
                onChange: c => {
                    a && a(c.currencyName)
                }
            })]
        })
    }
    const Wb = "s9ke00r",
        Ub = Y(function() {
            const {
                data: t
            } = Be(Ca.getFiatList, []);
            return t ? e.jsx(e.Fragment, {
                children: e.jsx(zb, {
                    currencyList: t
                })
            }) : e.jsx(pe, {})
        });

    function Vb(t, a) {
        let s = t;
        return a.find(n => n.currencyName === s) ? s : a[0].currencyName
    }

    function zb({
        currencyList: t
    }) {
        const [a, s] = _e({
            step: 1,
            item: null,
            currency: Vb(S.bonusCurrencyName, t)
        }), n = [{
            label: "M\xE9todo de Pagamento",
            select: a.step === 1
        }, {
            label: "Detalhes do Pagamento",
            select: a.step === 2
        }];
        return e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "nav-list",
                children: n.map((i, o) => e.jsx("div", {
                    onClick: () => a.step > o && s({
                        step: o + 1
                    }),
                    className: A("nav-item", i.select && "active", a.step > o && "hover"),
                    children: i.label
                }, i.label))
            }), e.jsxs(le, {
                children: [a.step === 1 && e.jsx(Lb, {
                    currency: a.currency,
                    onNext: i => {
                        s({
                            step: 2,
                            item: i
                        })
                    },
                    children: e.jsx(sc, {
                        currency: a.currency,
                        onChange: i => s({
                            currency: i
                        }),
                        isDeposit: !0,
                        currencyList: t
                    })
                }), a.step === 2 && a.item && e.jsx(Ob, {
                    currency: a.currency,
                    item: a.item
                }), a.step === 2 && e.jsx(m0, {})]
            })]
        })
    }
    const $b = Is(function(t) {
        return M.get(`/user/withdraw/fiat/${t}/methods/`)
    });

    function qb({
        onNext: t,
        children: a,
        currency: s
    }) {
        const {
            data: n
        } = Be(() => $b(s), [s]), i = k(), o = et();
        if (!n) return e.jsx(pe, {});
        const r = n && n.length === 0;
        return e.jsxs("div", {
            className: Hb,
            children: [a, e.jsx("div", {
                className: "sub-tit",
                children: i("wallet.choose_apayment")
            }), r ? e.jsx(Ce, {}) : e.jsx("div", {
                className: "payment-list",
                children: n.map(l => e.jsxs("div", {
                    className: "payment-item",
                    onClick: () => t(l),
                    children: [e.jsx("img", {
                        className: "logo",
                        src: o ? l.nightIcon : l.lightIcon,
                        alt: ""
                    }), e.jsx("div", {
                        children: w.numberWithCommas(Number(l.minWithdrawAmount), 0)
                    }), e.jsx("div", {
                        style: {
                            margin: "0 3px"
                        },
                        children: " ~ "
                    }), e.jsx("div", {
                        className: "max",
                        children: w.numberWithCommas(Number(l.maxWithdrawAmount), 0)
                    }), e.jsx(z, {
                        name: "Arrow"
                    })]
                }, l.method))
            })]
        })
    }
    const Hb = "s10kvtl2";

    function Yb({
        props: t,
        cut: a
    }) {
        const {
            data: s
        } = Be(() => sd.withdrawKyc(a.currencyName, t.wayName, t.method, t.channel));
        return s ? e.jsx(u0, {
            withdrawInfo: t,
            kycList: s.item,
            currencyInfo: a
        }) : e.jsx(pe, {})
    }

    function Gb() {
        const {
            data: t
        } = Be(Ca.getFiatList, []);
        return t ? e.jsx(e.Fragment, {
            children: e.jsx(Qb, {
                currencyList: t
            })
        }) : e.jsx(pe, {})
    }

    function Jb(t, a) {
        let s = t;
        return a.find(n => n.currencyName === s) ? s : a[0].currencyName
    }

    function Qb({
        currencyList: t
    }) {
        const [a, s] = _e({
            step: 0,
            item: null,
            currency: Jb(S.bonusCurrencyName, t)
        }), n = k(), i = [{
            label: n("wallet.withdraw_type"),
            select: a.step === 0
        }, {
            label: n("wallet.withdraw_details"),
            select: a.step === 1
        }];
        return e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                className: "nav-list",
                children: i.map((o, r) => e.jsx("div", {
                    onClick: () => a.step > r && s({
                        step: r
                    }),
                    className: A("nav-item", o.select && "active", a.step > r && "hover"),
                    children: o.label
                }, o.label))
            }), e.jsxs(le, {
                children: [a.step === 1 && a.item && e.jsx(Yb, {
                    props: a.item,
                    cut: w.dict[a.currency]
                }), !a.step && e.jsx(qb, {
                    currency: a.currency,
                    onNext: o => s({
                        step: 1,
                        item: o
                    }),
                    children: e.jsx(sc, {
                        isDeposit: !1,
                        currency: a.currency,
                        onChange: o => s({
                            currency: o
                        }),
                        currencyList: t
                    })
                })]
            })]
        })
    }

    function Zb() {
        const t = re(),
            a = k(),
            s = ft(),
            n = H.getUrlParms(s)[0];
        return e.jsxs(ne, {
            className: Xb,
            title: a("title.wallet"),
            back: !1,
            children: [e.jsx(R1, {
                children: e.jsxs("button", {
                    className: tv,
                    onClick: () => {
                        Te.close(), t("/wallet/transaction")
                    },
                    children: [e.jsx(z, {
                        name: "Transaction"
                    }), e.jsx("span", {
                        children: a("page.user.setting.transactions")
                    })]
                })
            }), e.jsxs("div", {
                className: ev,
                children: [e.jsxs("div", {
                    className: "tabs",
                    children: [e.jsx("div", {
                        onClick: () => t("#/brwallet/deposit"),
                        className: A("tab", n === "deposit" && "active"),
                        children: a("common.deposit")
                    }), e.jsx("div", {
                        onClick: () => t("#/brwallet/withdraw"),
                        className: A("tab", n === "withdraw" && "active"),
                        children: a("title.wallet_withdraw")
                    })]
                }), e.jsx(xa, {
                    children: e.jsxs(Kb, {
                        base: "/brwallet",
                        children: [e.jsx(Vc, {
                            path: "deposit/*",
                            element: e.jsx(Ub, {})
                        }), e.jsx(Vc, {
                            path: "withdraw/*",
                            element: e.jsx(Gb, {})
                        })]
                    })
                })]
            })]
        })
    }
    const Kb = J.memo(({
            children: t,
            base: a
        }) => {
            const s = f.useContext(Uc),
                n = f.useRef(s);
            return s.location.pathname.search(a) === 0 && (n.current = s), e.jsx(Uc.Provider, {
                value: n.current,
                children: e.jsx(I1, {
                    children: t
                })
            })
        }),
        Xb = "d1deukr4",
        ev = "sdy9vww",
        tv = "h16xu0aa",
        ca = ({
            txid: t,
            href: a,
            className: s
        }) => {
            if (!t) return e.jsx(e.Fragment, {
                children: "-"
            });
            if (t.length <= 10) return a ? e.jsx("a", {
                className: A("notranslate", s),
                title: t,
                target: "_blank",
                href: a,
                children: t
            }) : e.jsx("div", {
                className: A("notranslate", s),
                title: t,
                children: t
            }); {
                const n = t.substring(0, 5),
                    i = t.substring(t.length - 5);
                return a ? e.jsxs("a", {
                    className: A("notranslate", s),
                    title: t,
                    target: "_blank",
                    href: a,
                    children: [n, "...", i]
                }) : e.jsxs("div", {
                    className: A("notranslate", s),
                    title: t,
                    children: [n, "...", i]
                })
            }
        },
        nc = ({
            address: t
        }) => {
            const a = k(),
                s = () => {
                    t && (H.copyToClipboard(t), L(a("common.messages.copy_success")))
                };
            if (!t || t.length <= 10) return e.jsxs("div", {
                className: "notranslate cont copy-wrap",
                children: [t, " ", e.jsx(z, {
                    name: "Copy"
                })]
            }); {
                const n = t.substring(0, 5),
                    i = t.substring(t.length - 5);
                return e.jsxs("div", {
                    className: "notranslate cont copy-wrap",
                    title: t,
                    onClick: s,
                    children: [e.jsxs("span", {
                        children: [n, "...", i]
                    }), e.jsx(z, {
                        name: "Copy"
                    })]
                })
            }
        };

    function av(t) {
        const a = k(),
            {
                txt: s,
                orderclass: n
            } = xt(t.status);

        function i(o) {
            o && (H.copyToClipboard(o), L(a("common.messages.copy_success")))
        }
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "item order-1",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("page.prize.history_state")
                }), e.jsxs("div", {
                    className: "cont status-wrap",
                    children: [e.jsx("b", {
                        className: n
                    }), s]
                })]
            }), t.txId && e.jsxs("div", {
                className: "item order-2",
                title: t.txId,
                children: [e.jsx("div", {
                    className: "label",
                    children: "Txid"
                }), e.jsxs("div", {
                    className: "cont cl-green",
                    onClick: () => i(t.txId),
                    children: [e.jsx(ca, {
                        className: "ellipsis",
                        href: t.blockAddress,
                        txid: t.txId
                    }), e.jsx("button", {
                        children: e.jsx(z, {
                            name: "Copy"
                        })
                    })]
                })]
            }), e.jsxs("div", {
                className: "item order-4",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.orderid")
                }), t.orderId ? e.jsxs("div", {
                    className: "cont",
                    onClick: () => i(t.orderId),
                    children: [e.jsx("div", {
                        className: "ellipsis",
                        children: t.orderId
                    }), e.jsx("button", {
                        children: e.jsx(z, {
                            name: "Copy"
                        })
                    })]
                }) : e.jsx("div", {
                    className: "cont",
                    children: "-"
                })]
            }), e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    title: a("common.time"),
                    children: a("common.time")
                }), e.jsx("div", {
                    className: "cont",
                    children: new Date(Number(t.createTime || 0)).toLocaleString()
                })]
            })]
        })
    }

    function sv({
        orderId: t,
        amount: a
    }) {
        const s = k(),
            [n, i] = _e({
                name: "",
                phone: "",
                bank: "",
                account: "",
                error: "",
                account_info: {}
            });
        f.useEffect(() => {
            function r(l) {
                try {
                    const c = JSON.stringify(l.data),
                        d = JSON.parse(c);
                    M.post(`/user/deposit/fiat/order/vacpay/${t}/`, U({}, d)).then(m => {
                        i({
                            name: d.data.account_info.holder,
                            phone: d.data.account_info.depAccount,
                            bank: d.data.account_info.bankNm,
                            account: d.data.account_info.account
                        })
                    }).catch(m => {
                        i({
                            error: m.message
                        }), L(m)
                    })
                } catch (c) {}
            }
            return window.addEventListener("message", r), () => window.removeEventListener("message", r)
        }, []);

        function o() {
            H.copyToClipboard(n.account), L(s("common.messages.copy_success"))
        }
        return n.error ? e.jsx($e, {
            className: ms,
            children: e.jsx(Ce, {
                children: n.error
            })
        }) : n.name ? e.jsx($e, {
            className: ms,
            closeable: !0,
            children: e.jsxs(le, {
                children: [a && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "\uAE08\uC561(Amount)"
                    }), e.jsx("div", {
                        className: "value",
                        children: a
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "\uC774\uB984(Name)"
                    }), e.jsx("div", {
                        className: "value",
                        children: n.name
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "\uACC4\uC88C\uBC88\uD638(Account number)"
                    }), e.jsx("div", {
                        className: "value",
                        children: n.phone
                    })]
                }), e.jsx("div", {
                    className: "br",
                    children: "\uC774 \uACC4\uC88C\uB85C \uC785\uAE08\uD574\uC8FC\uC138\uC694:"
                }), e.jsxs("div", {
                    className: "item high-light",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "\uC740\uD589\uBA85(Bank name)"
                    }), e.jsx("div", {
                        className: "value ",
                        children: n.bank
                    })]
                }), e.jsxs("div", {
                    className: "item high-light",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "\uACC4\uC88C\uBC88\uD638(Account number)"
                    }), e.jsxs("div", {
                        className: "value point",
                        onClick: o,
                        children: [n.account, " ", e.jsx(z, {
                            name: "Copy"
                        })]
                    })]
                }), e.jsx("div", {
                    className: "info",
                    children: e.jsxs(Ae, {
                        k: "wallet.fiat.depositinfo",
                        children: [e.jsx("span", {
                            children: Se.buildHost
                        }), e.jsx(Xe, {
                            href: "/wallet/transactions?type=deposit",
                            onClick: () => {
                                ke.close(), Te.close()
                            },
                            className: "btn",
                            children: s("common.transaction")
                        })]
                    })
                })]
            })
        }) : e.jsx($e, {
            className: ms,
            children: e.jsx(pe, {})
        })
    }
    const ms = "sw6oujr";

    function ic({
        value: t,
        label: a
    }) {
        const s = k();

        function n() {
            H.copyToClipboard(String(t)), L(s("common.messages.copy_success"))
        }
        return e.jsxs("div", {
            className: "item",
            children: [e.jsxs("div", {
                className: "label",
                children: [a, ":"]
            }), e.jsxs("div", {
                className: "cont",
                children: [e.jsx("div", {
                    className: "ellipsis",
                    children: t
                }), e.jsx("button", {
                    onClick: n,
                    children: e.jsx(z, {
                        name: "Copy"
                    })
                })]
            })]
        })
    }

    function nv({
        endTime: t
    }) {
        const a = k();
        return e.jsxs("div", {
            className: A("expires-time", lv),
            children: [e.jsx(z, {
                name: "History"
            }), e.jsx("p", {
                children: a("page.task.expire")
            }), e.jsx(vt, {
                endTime: t,
                children: s => {
                    const n = s.days * 24 + s.hours,
                        i = n < 10 ? "0" + n : n,
                        o = s.minutes < 10 ? "0" + s.minutes : s.minutes,
                        r = s.seconds < 10 ? "0" + s.seconds : s.seconds;
                    return e.jsxs("p", {
                        className: "time",
                        children: [i, ":", o, ":", r]
                    })
                }
            })]
        })
    }

    function iv({
        data: t
    }) {
        const a = k(),
            {
                isProgress: s,
                isCanceled: n
            } = xt(t ? t.status : 0),
            i = t.data;
        if (!i) return null;
        const o = H.serverTime().getTime(),
            r = Number(t.expiredTime) > Number(o) ? Number(t.expiredTime) : 0,
            l = i.payList ? JSON.parse(i.payList) : [];
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "paytm-info",
                children: [e.jsx("div", {
                    className: "paytm-tit",
                    children: a("wallet.fiat.new.merchant_information")
                }), e.jsxs("div", {
                    className: "paytm-wrap",
                    children: [e.jsx(ic, {
                        label: a("wallet.fiat.new.merchant_id"),
                        value: t.channelName
                    }), !n && l.map((c, d) => {
                        const m = Object.keys(c).filter(h => h !== "logo");
                        return e.jsx(f.Fragment, {
                            children: m.map((h, g) => e.jsx(ic, {
                                label: h,
                                value: c[h]
                            }, g))
                        }, d)
                    })]
                })]
            }), !n && e.jsxs(e.Fragment, {
                children: [i.opt && e.jsxs("div", {
                    className: "item order-5",
                    children: [e.jsx("div", {
                        className: "label",
                        children: "opt"
                    }), e.jsx("div", {
                        className: "cont ellipsis",
                        children: i.opt
                    })]
                }), i.securityCode && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        title: a("common.security_code"),
                        children: a("common.security_code")
                    }), e.jsx("div", {
                        className: "cont cl-primary",
                        children: i.securityCode
                    })]
                }), t.failReason && e.jsxs("div", {
                    className: "item flex-wrap",
                    children: [e.jsx("div", {
                        className: "label",
                        children: a("wallet.label.reason_failure")
                    }), e.jsx("div", {
                        className: "cont",
                        children: t.failReason
                    })]
                }), r > 0 && e.jsx(je, {
                    id: "fiat-expires",
                    children: e.jsx(nv, {
                        endTime: r
                    })
                }), !t.needUpdateUTR && i.qrCode && s && e.jsx("div", {
                    className: A(rv, "order-7"),
                    children: e.jsx(p0, {
                        url: i.qrCode,
                        fileName: t.method,
                        checkedUrl: !0
                    })
                })]
            })]
        })
    }

    function ov({
        commonData: t,
        data: a
    }) {
        if (k(), xt(a ? a.status : 0), !a.data) return null;
        const s = H.serverTime().getTime();
        return Number(a.expiredTime) > Number(s) && Number(a.expiredTime), e.jsx(e.Fragment, {})
    }
    const rv = "q104o6k3",
        lv = "t70udmc";

    function cv(t) {
        const a = k(),
            {
                txt: s,
                orderclass: n
            } = xt(t.commonData.status),
            [i, o] = f.useState(!1);

        function r(l) {
            l && (H.copyToClipboard(l), L(a("common.messages.copy_success")))
        }
        return e.jsxs("div", {
            className: A(dv),
            children: [e.jsxs("div", {
                className: "item order-1",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("page.prize.history_state")
                }), e.jsxs("div", {
                    className: "cont status-wrap",
                    children: [e.jsx("b", {
                        className: n
                    }), s]
                })]
            }), e.jsxs("div", {
                className: "item order-2",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.orderid")
                }), t.commonData.orderId ? e.jsxs("div", {
                    className: "cont",
                    onClick: () => r(t.commonData.orderId),
                    children: [e.jsx("div", {
                        className: "ellipsis",
                        children: t.commonData.orderId
                    }), e.jsx("button", {
                        children: e.jsx(z, {
                            name: "Copy"
                        })
                    })]
                }) : e.jsx("div", {
                    className: "cont",
                    children: "-"
                })]
            }), !i && e.jsxs("div", {
                className: "toggle-btn",
                onClick: () => {
                    o(!i)
                },
                children: [e.jsx("span", {
                    children: a("wallet.order.view.more")
                }), e.jsx(z, {
                    className: "more-arrow",
                    name: "Arrow"
                })]
            }), e.jsxs(wa, {
                className: "order-3",
                visible: i,
                children: [t.commonData.txId && e.jsxs("div", {
                    className: "item order-4",
                    title: t.commonData.txId,
                    children: [e.jsx("div", {
                        className: "label",
                        children: "Txid"
                    }), e.jsxs("div", {
                        className: "cont cl-green",
                        onClick: () => r(t.commonData.txId),
                        children: [e.jsx(ca, {
                            className: "ellipsis",
                            href: t.commonData.blockAddress,
                            txid: t.commonData.txId
                        }), e.jsx("button", {
                            children: e.jsx(z, {
                                name: "Copy"
                            })
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        title: a("common.time"),
                        children: a("common.time")
                    }), e.jsx("div", {
                        className: "cont",
                        children: new Date(Number(t.commonData.createTime || 0)).toLocaleString()
                    })]
                }), e.jsx(iv, {
                    data: t.fiatData
                }), e.jsx(je, {
                    id: "ticket-info"
                })]
            }), e.jsx(ov, {
                commonData: t.commonData,
                data: t.fiatData
            }), i && e.jsxs("div", {
                className: "toggle-btn",
                onClick: () => {
                    o(!i)
                },
                children: [e.jsx("span", {
                    children: a("wallet.order.view.less")
                }), e.jsx(z, {
                    className: "less-arrow",
                    name: "Arrow"
                })]
            })]
        })
    }
    const dv = "s5c22c6";

    function mv({
        img: t,
        onChange: a,
        isWithdraw: s
    }) {
        const [n, i] = _e({
            tempimage: t,
            loading: !1,
            uploading: !1
        });
        async function o(d) {
            if (d.target.files) {
                const m = d.target.files[0],
                    h = m.type === "application/pdf";
                if (m && !(m.size / 1024 / 1024 < 10)) return "Upload file size exceeds 10MB";
                const g = new FormData;
                g.append("file", m), i({
                    uploading: !0,
                    tempimage: h ? "temp.pdf" : URL.createObjectURL(m)
                }), d.target.value = "";
                try {
                    const {
                        path: u,
                        sign: p,
                        uri: b
                    } = await M.post(h ? "/filehub/upload/ " : "/filehub/upload-image/", g, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }), v = await M.post("/user/file/set/", {
                        path: u,
                        sign: p
                    });
                    a && a(v.path), i({
                        tempimage: "",
                        uploading: !1
                    })
                } catch (u) {
                    i({
                        tempimage: "",
                        uploading: !1
                    }), L(u)
                }
            }
        }
        const r = function() {
                i({
                    tempimage: ""
                }), a && a("")
            },
            l = t || n.tempimage,
            c = /\.pdf/.exec(l);
        return e.jsxs("div", {
            className: A(uv, "upload-img"),
            children: [!n.uploading && !l && e.jsx("button", {
                className: "add",
                children: e.jsx(z, {
                    name: "Close"
                })
            }), e.jsx("input", {
                type: "file",
                accept: s ? "image/*, application/pdf" : "image/*",
                onChange: o
            }), n.uploading && e.jsx(pe, {}), l && e.jsx("div", {
                className: "img-wrap",
                children: c ? e.jsx("div", {
                    children: "PDF"
                }) : e.jsx("img", {
                    src: l,
                    alt: "uploaded image"
                })
            }), a && t && e.jsx("button", {
                className: "close",
                onClick: r,
                children: e.jsx(z, {
                    name: "Close"
                })
            })]
        })
    }
    const uv = "s10t8av";

    function pv(t) {
        return t && ee.createPath(t, "img2")
    }
    const hv = t => t === 1 ? "success" : t === 2 ? "error" : "waiting";

    function gv(t) {
        const a = k();
        if (typeof t == "number") switch (t) {
            case 0:
                return a("wallet.status.pending");
            case 6:
                return a("wallet.status.hold");
            case 2:
                return a("wallet.status.failed");
            case 1:
                return a("wallet.status.successful");
            default:
                return a("wallet.status.pending")
        } else return ""
    }

    function fv(t) {
        const a = [];
        let s = 1,
            n = 1;
        return t.forEach(i => {
            i && (/\.pdf/.exec(i) ? (a.push({
                type: "pdf",
                field: `proof${n}`,
                value: i
            }), n++) : (a.push({
                type: "pic",
                field: `img${s}`,
                value: i
            }), s++))
        }), a
    }

    function yv(t) {
        let a = [],
            s = [];
        return t && t.forEach(n => {
            n.type === "pic" && a.push(n), n.type === "data" && s.push(n)
        }), {
            fiatImgs: a,
            dataInput: s
        }
    }

    function bv(t) {
        return M.get(`/payment/withdraw/fiat/order/${t}/`)
    }

    function vv(t) {
        return M.get(`/payment/deposit/fiat/order/${t}/`)
    }
    var us;
    (t => {
        t.fn = {
            useReviewStatus: gv,
            getImgPath: pv,
            getImgsData: fv,
            getWithdrawData: bv,
            getDepositOrder: vv,
            getDefault: yv,
            getReviewStatus: hv
        }
    })(us || (us = {}));
    const ps = us;

    function wv({
        commonData: t,
        ticketData: a,
        onfreash: s,
        isWithdraw: n
    }) {
        var u, p;
        const i = H.serverTime().getTime(),
            o = k(),
            r = ((u = a == null ? void 0 : a.fiatTicketResult) == null ? void 0 : u.ticketId) === null,
            [l, c] = f.useState(!1),
            [d, m] = f.useState(),
            [h, g] = f.useState(!1);
        if (f.useEffect(() => {
                M.post("/payment/fiat/ticketDraft/get/", {
                    orderId: t.orderId,
                    ticketType: 1
                }).then(b => {
                    b ? (c(!0), m(b), g(!0)) : g({})
                })
            }, [l]), a && a.fiatTicketResult) {
            const b = r ? Q(U({}, a.fiatTicketResult), {
                fiatItems: (d == null ? void 0 : d.list) || [],
                note: (d == null ? void 0 : d.note) || ""
            }) : a.fiatTicketResult;
            b.ticketId;
            const v = Number(t.createTime),
                _ = t.currencyName === "JPYFIAT" ? i - v < 6048e5 : i - v < 36e5,
                T = n ? !1 : a.status === 1 || a.status === 2,
                N = b.reviewStatusCode === null || (n ? b.reviewStatusCode === 6 && ((p = b == null ? void 0 : b.fiatItems) == null ? void 0 : p.length) > 0 : b.reviewStatusCode === 6),
                D = _ && T && N;
            return T && t.currencyName !== "JPYFIAT" && i - v < 36e5, e.jsx("div", {
                className: A(_v),
                children: D && e.jsx("div", {
                    onClick: () => ke.push(e.jsx(xv, {
                        isSubmit: l,
                        onfreash: s,
                        onOK: () => {
                            c(!0)
                        },
                        commonData: t,
                        fiatTicketResult: b,
                        isWithdraw: n,
                        info: d
                    })),
                    className: "draft-box",
                    children: h && e.jsx(e.Fragment, {
                        children: l ? e.jsxs("div", {
                            className: "view-detail",
                            children: [e.jsx("span", {
                                className: "icon-box",
                                children: e.jsx(z, {
                                    name: "Check"
                                })
                            }), e.jsx("span", {
                                children: o("wallet.order.deposit.submitted")
                            }), e.jsx("span", {
                                className: "d-text",
                                children: o("common.viewdetail")
                            })]
                        }) : e.jsx("div", {
                            className: "draft-text",
                            children: o("wallet.order.deposit.draft")
                        })
                    })
                })
            })
        }
        return null
    }

    function xv({
        commonData: t,
        fiatTicketResult: a,
        onfreash: s,
        isWithdraw: n,
        isSubmit: i,
        info: o,
        onOK: r
    }) {
        const {
            fiatImgs: l,
            dataInput: c
        } = ps.fn.getDefault(a.fiatItems), d = a.ticketId === null, m = d ? !0 : a.morePicture, {
            txt: h
        } = xt(t.status), g = k(), [u, p] = _e({
            imgs: new Array(8).fill(""),
            note: "",
            dataInput: c,
            inrnum: {
                type: "data",
                field: "INR",
                value: ""
            },
            idrname: {
                type: "data",
                field: "Depositor Name",
                value: ""
            },
            ngnbank: {
                type: "data",
                field: "Bank number",
                value: ""
            },
            loading: !1
        }), [b, v] = f.useState(() => o ? o.note : ""), _ = function() {
            return p({
                loading: !0
            }), m && u.imgs.filter(Boolean).length === 0 ? (p({
                loading: !1
            }), L(g("wallet.submit.required_img"))) : T()
        }, T = async function() {
            const y = ps.fn.getImgsData(u.imgs);
            if (n) u.note && y.push({
                type: "data",
                field: "note",
                value: u.note
            });
            else {
                if (V)
                    if (u.inrnum.value.length === 12) y.push(u.inrnum);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket4"));
                if (E)
                    if (u.ngnbank.value) y.push(u.ngnbank);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket10"));
                if (R)
                    if (u.idrname.value) y.push(u.idrname);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket8"))
            }
            M.post("/payment/fiat/ticketDraft/create/", {
                orderId: t.orderId,
                list: y,
                ticketType: n ? 2 : 1,
                note: b
            }).then(x => {
                ke.back(), s(), r(), p({
                    loading: !1
                })
            }).catch(x => {
                p({
                    loading: !1
                }), L(x)
            })
        }, N = f.useCallback((y, x, I) => {
            I[x] = y, p({
                imgs: [...I]
            })
        }, []), D = f.useCallback((y, x) => {
            const I = [...u.dataInput],
                P = I.find(te => te.id === x);
            P && (P.value = y, p({
                dataInput: I
            }))
        }, [u.dataInput]), V = t.currencyName === "INRFIAT" && d, E = t.currencyName === "NGNFIAT" && d, R = t.currencyName === "IDRFIAT" && d, j = f.useCallback(y => {
            y = y.replace(/\.|e/, "").substring(0, 12), p({
                inrnum: Q(U({}, u.inrnum), {
                    value: y
                })
            })
        }, [u.inrnum]), C = f.useCallback(y => {
            y = y.replace(/\.|e/, ""), p({
                ngnbank: Q(U({}, u.ngnbank), {
                    value: y
                })
            })
        }, [u.ngnbank]);
        return e.jsx($e, {
            closeable: !0,
            className: jv,
            children: e.jsxs(le, {
                className: A(i && "disabled"),
                children: [e.jsx("div", {
                    className: "top",
                    children: m && e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: "tit",
                            children: [e.jsx("span", {
                                children: g(n ? "wallet.transaction.ticket5" : "wallet.transaction.ticket1")
                            }), "*", g("common.img_limit", "10MB")]
                        }), !n && o && e.jsx("div", {
                            className: "img-box",
                            children: [1, 1, 1].map((y, x) => {
                                var I;
                                return e.jsxs("div", {
                                    className: "img-list",
                                    children: [e.jsx("img", {
                                        src: ee.createPath((I = l == null ? void 0 : l[x]) == null ? void 0 : I.value, "img2"),
                                        alt: ""
                                    }), e.jsx("button", {
                                        className: "add",
                                        children: e.jsx(z, {
                                            name: "Close"
                                        })
                                    })]
                                }, x)
                            })
                        }), !o && e.jsx("div", {
                            className: "upload-list",
                            children: u.imgs.map((y, x) => {
                                const I = x <= 2,
                                    P = n ? Qt(u.imgs, Boolean) : 1;
                                return I || x <= P + 1 ? e.jsx(mv, {
                                    isWithdraw: n,
                                    img: ps.fn.getImgPath(u.imgs[x]),
                                    onChange: te => N(te, x, u.imgs)
                                }, x) : null
                            })
                        })]
                    })
                }), !o && e.jsxs(e.Fragment, {
                    children: [E && e.jsx(He, {
                        onChange: C,
                        value: u.ngnbank.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("wallet.transaction.ticket9")]
                        }),
                        type: "number"
                    }), V && e.jsx(He, {
                        onChange: j,
                        type: "number",
                        value: u.inrnum.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("wallet.transaction.ticket3")]
                        })
                    }), R && e.jsx(He, {
                        onChange: y => p({
                            idrname: Q(U({}, u.idrname), {
                                value: y
                            })
                        }),
                        value: u.idrname.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("common.depositor")]
                        })
                    })]
                }), u.dataInput.map((y, x) => e.jsx(He, {
                    label: e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), g(V ? "wallet.transaction.ticket3" : R ? "common.depositor" : "wallet.transaction.ticket9")]
                        })
                    }),
                    value: y.value,
                    onChange: I => D(I, y.id)
                }, x)), e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx("div", {
                        className: "tit",
                        children: g("wallet.transaction.ticket2")
                    }), e.jsxs("div", {
                        className: "item-wrap",
                        children: [e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("common.amount"), ":"]
                            }), e.jsxs("div", {
                                className: "value",
                                children: [H.formateAmount(t.amount), " ", w.getAlias(t.currencyName)]
                            })]
                        }), e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("page.prize.history_state"), ":"]
                            }), e.jsx("div", {
                                className: "value state",
                                children: h
                            })]
                        }), e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("common.time"), ":"]
                            }), e.jsx("div", {
                                className: "value",
                                children: new Date(t.createTime).toLocaleString()
                            })]
                        })]
                    }), e.jsx(qt, {
                        className: "rain-textarea",
                        value: b,
                        label: e.jsx("div", {
                            className: A(b.length > 500 && "error", "marktips"),
                            children: e.jsx(Ae, {
                                k: "wallet.order.draft.note",
                                children: e.jsx("span", {
                                    className: "txt-num",
                                    children: b.length
                                })
                            })
                        }),
                        onChange: y => {
                            v(y)
                        }
                    })]
                }), e.jsx(q, {
                    disabled: i || b.length > 500,
                    type: "conic",
                    onClick: _,
                    loading: u.loading,
                    className: "",
                    children: g("common.submit")
                })]
            })
        })
    }
    Ie({
        cl1: [ie("#98a7b5", .5), ie("#5f6975", .8)],
        cl2: ["#fff", "#000"],
        cl3: ["rgba(0, 0, 0, .3)", "rgba(200, 200, 200, .3)"]
    });
    const jv = "sh858ub",
        _v = "t1zrzvr";

    function kt() {
        return e.jsx("span", {
            className: "clock-icon",
            children: e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                width: "1024",
                height: "1024",
                viewBox: "0 0 1024 1024",
                children: e.jsx("path", {
                    d: "M460.423 326.905v189.758c0 18.049 9.797 35.065 25.267 44.346l160.88 95.396c18.563 10.83 42.282 4.641 53.114-13.408 10.83-18.563 5.155-42.282-13.408-53.114l-147.991-88.175v-175.32c-0.515-20.627-18.049-38.158-39.19-38.158s-38.672 17.531-38.672 38.672zM976.073 365.576v-272.777c0-23.204-27.846-34.55-43.831-18.049l-91.787 91.785c-93.333-93.333-226.367-146.958-371.78-134.068-216.057 19.593-393.951 193.366-417.673 409.423-30.939 279.481 187.181 516.679 460.987 516.679 236.682 0 432.115-177.381 460.474-406.33 3.611-30.939-20.627-57.754-51.565-57.754-25.782 0-47.439 19.078-50.533 44.346-22.171 179.96-177.381 319.186-363.53 316.608-191.304-2.578-352.702-163.976-355.795-355.795-3.093-201.101 160.365-366.111 360.95-366.111 99.518 0 189.758 40.735 255.244 105.707l-107.771 107.771c-16.501 16.501-5.155 44.346 18.049 44.346h272.779c14.438 0 25.782-11.345 25.782-25.782z"
                })
            })
        })
    }

    function oc(t) {
        return t < 60 ? 1 : Math.ceil(t / 60)
    }

    function da({
        num: t,
        completed: a,
        pending: s,
        error: n
    }) {
        return a ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    name: "Check"
                })
            })]
        }) : s ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    className: "loading-icon",
                    name: "Refresh"
                })
            })]
        }) : n ? e.jsxs("div", {
            className: "line-wrap cl-r",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    className: "error-icon",
                    name: "Close"
                })
            })]
        }) : e.jsxs("div", {
            className: "line-wrap",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: t
            })]
        })
    }

    function kv(t) {
        const a = t.status,
            s = k(),
            {
                account: n,
                wallet: i
            } = Ee(),
            {
                isSvip: o
            } = n.getUserLevelInfo(n.vipLevel);
        return e.jsxs("div", {
            className: Nv,
            children: [e.jsx("div", {
                className: "tit",
                children: s("common.order.progress")
            }), e.jsx(nd, {
                children: e.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: s(`${o?"wallet.order.svip.tip":"wallet.order.tip.desc"}`, i.getAlias(t.currencyName), t.channelName, oc(Number(t.channelAvgWholeMinutesSpent)).toString())
                    }
                })
            }), e.jsxs("div", {
                className: "progress-item no-line",
                children: [e.jsx(da, {
                    num: 1,
                    completed: a !== 0 && a !== -6,
                    pending: a === 0,
                    error: a === -6
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.submit")
                    }), e.jsxs("div", {
                        className: "sub-txt",
                        children: [e.jsx(kt, {}), s("wallet.order.new.uptime", new Date(Number(t.createTime)).toLocaleString())]
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(da, {
                    num: 2,
                    completed: [2, 3, 4, 11, 12, -1, -2, -4, -5, -7, -9, -10, -11, -12].some(r => r === a),
                    error: [-3, -8].some(r => r === a),
                    pending: [1, 5, 6, 7].some(r => r === a)
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.review")
                    }), e.jsx("div", {
                        className: "sub-txt",
                        children: s("wallet.order.review.desc", new Date(Number(t.createTime)).toLocaleString())
                    }), a !== -6 && e.jsxs("div", {
                        className: "sub-txt",
                        children: [e.jsx(kt, {}), s("wallet.order.new.uptime", new Date(Number(t.createTime)).toLocaleString())]
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(da, {
                    num: 3,
                    completed: [4, 11, 12, -1, -2, -4, -5, -7, -9, -10, -11, -12].some(r => r === a),
                    pending: [2, 3].some(r => r === a)
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.precess")
                    }), e.jsx("div", {
                        className: "sub-txt",
                        children: s("wallet.order.process.desc", oc(Number(t.channelAvgMinutesSpent)).toString())
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(da, {
                    num: 4,
                    completed: a === 4 || a === 11 || a === 12 || a === -11 || a === -12,
                    error: [-1, -2, -4, -5, -7, -9, -10, -11].some(r => r === a)
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: [4, 11, 12].some(r => r === a) ? s("wallet.order.new.success") : [-1, -2, -4, -7, -9, -10].some(r => r === a) ? s("wallet.order.new.fail") : s(a === -5 ? "wallet.order.new.cancel" : "wallet.order.new.completed")
                    }), [-2, -4, -5, -7, -9, -10].some(r => r === a) && e.jsxs("div", {
                        className: "sub-txt",
                        children: [e.jsx("span", {
                            children: s("wallet.order.canceled.reason")
                        }), e.jsx("span", {
                            children: s(a === -2 ? "wallet.order.fail.reason3" : "wallet.order.fail.reason4")
                        })]
                    }), t.completedTime && [4, -11, -12].some(r => r === a) && e.jsxs("div", {
                        className: "sub-txt",
                        children: [e.jsx(kt, {}), s("wallet.order.new.uptime", new Date(Number(t.completedTime)).toLocaleString())]
                    })]
                })]
            })]
        })
    }
    const Nv = "s139yg96";

    function rc(t) {
        return t < 60 ? 1 : Math.ceil(t / 60)
    }

    function hs({
        num: t,
        completed: a,
        pending: s,
        error: n
    }) {
        return a ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    name: "Check"
                })
            })]
        }) : s ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    className: "loading-icon",
                    name: "Refresh"
                })
            })]
        }) : n ? e.jsxs("div", {
            className: "line-wrap cl-r",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    className: "error-icon",
                    name: "Close"
                })
            })]
        }) : e.jsxs("div", {
            className: "line-wrap",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: t
            })]
        })
    }

    function Cv(t) {
        const a = t.commonData.status,
            {
                commonData: s,
                fiatData: n
            } = t,
            {
                account: i,
                wallet: o
            } = Ee(),
            {
                isSvip: r
            } = i.getUserLevelInfo(i.vipLevel),
            l = k(),
            c = H.serverTime().getTime(),
            d = Number(t.commonData.createTime),
            m = Ve(),
            h = ut();

        function g() {
            m.close(), h.push(e.jsx(h0, {
                showUtr: n.needUpdateUTR,
                res: n,
                icon: "",
                amount: Number(s.amount),
                currency: s.currencyName
            }))
        }
        const {
            isProgress: u
        } = xt(n ? n.status : 0), p = n.data;
        if (!p) return null;
        const b = H.serverTime().getTime(),
            v = Number(n.expiredTime) > Number(b) ? Number(n.expiredTime) : 0;

        function _() {
            p && p.walletUrl && (window.open(p.walletUrl, "_blank"), n.method === "VacPay" && m.push(e.jsx(sv, {
                orderId: n.orderId
            })))
        }
        const T = [1, 2].some(D => D === a) && t.commonData.currencyName !== "JPYFIAT" && c - d < 36e5,
            N = u && v > 0 && !n.needUpdateUTR && p.walletUrl && !p.qrCode;
        return e.jsxs("div", {
            className: A(Tv, "fiat-progress"),
            children: [e.jsx("div", {
                className: "tit",
                children: l("common.order.progress")
            }), e.jsxs(nd, {
                children: [e.jsx("div", {
                    dangerouslySetInnerHTML: {
                        __html: l(`${r?"wallet.order.deposit.svip":"wallet.order.deposit.tip"}`, o.getAlias(t.commonData.currencyName), t.channelName, rc(Number(t.fiatData.channelAvgWholeMinutesSpent)).toString())
                    }
                }), T && e.jsx("div", {
                    className: "fiat-tip",
                    children: l("wallet.fiat.deposit.tip", "1")
                })]
            }), e.jsxs("div", {
                className: A("progress-item no-line", (N || n.needUpdateUTR) && "first-item"),
                children: [e.jsx(hs, {
                    num: 1,
                    completed: a !== 0 && a !== -1,
                    pending: a === 0 || a === 1 || a === 5 || a === 6 || a === 7,
                    error: a === -1
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: l("wallet.order.deposit.create")
                    }), N && e.jsx("div", {
                        className: "continue-box",
                        children: e.jsx(Ae, {
                            k: "wallet.order.deposit.continue",
                            children: e.jsx("span", {
                                onClick: _,
                                className: "here-action",
                                children: l("common.actions.here")
                            })
                        })
                    }), n.needUpdateUTR && e.jsx("div", {
                        className: "continue-box",
                        children: e.jsx(Ae, {
                            k: "wallet.order.deposit.continue",
                            children: e.jsx("span", {
                                onClick: g,
                                className: "here-action",
                                children: l("common.actions.here")
                            })
                        })
                    }), e.jsxs("div", {
                        className: "sub-txt sub-txt-time",
                        children: [e.jsx(kt, {}), e.jsx("span", {
                            children: l("wallet.order.new.uptime", new Date(Number(t.fiatData.createTime)).toLocaleString())
                        })]
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item second-item",
                children: [e.jsx(hs, {
                    num: 2,
                    pending: a === 1 || a === 2 || a === 3,
                    completed: a === 4 || a === -2 || a === -3 || a === -4
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: l("wallet.order.new.precess")
                    }), e.jsx("div", {
                        className: "sub-txt",
                        children: l("wallet.order.process.desc", rc(Number(t.fiatData.channelAvgMinutesSpent)).toString())
                    }), (a === 1 || a === 2 || a === 3 || a === 4) && e.jsxs("div", {
                        className: "sub-txt sub-txt-time",
                        children: [e.jsx(kt, {}), e.jsx("span", {
                            children: l("wallet.order.new.uptime", a === 4 ? new Date(Number(t.fiatData.completedTime)).toLocaleString() : new Date(Number(t.fiatData.createTime)).toLocaleString())
                        })]
                    }), e.jsx(wv, {
                        commonData: t.commonData,
                        ticketData: t.fiatData,
                        onfreash: () => {}
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(hs, {
                    num: 3,
                    completed: a === 4,
                    error: a === -2 || a === -3 || a === -4
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: [4].some(D => D === a) ? l("wallet.order.new.success") : [-3, -4, -1].some(D => D === a) ? l("wallet.order.new.fail") : [-2].some(D => D === a) ? l("wallet.order.new.cancel") : l("wallet.order.new.completed")
                    }), [-1, -2, -3, -4].some(D => D === a) && e.jsxs("div", {
                        className: "sub-txt",
                        children: [e.jsx("span", {
                            children: l("wallet.order.canceled.reason")
                        }), e.jsx("span", {
                            children: l(a === -1 ? "wallet.order.fail.reason1" : "wallet.order.fail.reason2")
                        })]
                    }), t.fiatData.completedTime && a === 2 || a === 3 || a === 4 && e.jsxs("div", {
                        className: "sub-txt sub-txt-time",
                        children: [e.jsx(kt, {}), e.jsx("span", {
                            children: l("wallet.order.new.uptime", new Date(Number(t.fiatData.completedTime)).toLocaleString())
                        })]
                    })]
                })]
            })]
        })
    }
    const Tv = "s134j5p7",
        Sv = "/assets/active_star.189d45d2.png",
        Av = "/assets/star.ef4474f3.png",
        Iv = "/assets/feedback.da197ff9.png",
        Rv = H.timeMemoize(function(t, a) {
            return M.get(`/payment/feedback/category/?txType=${t}&score=${a}`)
        }, {
            getKey: (t, a) => String(t + a)
        });

    function lc(t) {
        const {
            currencyName: a,
            orderId: s,
            txType: n
        } = t, i = k(), [o, r] = f.useState(0), [l, c] = f.useState([]), [d, m] = f.useState(!1), [h, g] = f.useState(""), u = et(), [p, b] = f.useState([]), v = () => {
            M.post("/payment/feedback/get/", {
                orderId: s,
                currencyName: a,
                txType: n
            }).then(R => {
                m(!!R)
            })
        }, _ = () => {
            Rv(n, o).then(R => {
                const j = Object.keys(R).map(C => ({
                    label: R[C],
                    id: C
                }));
                b(j)
            })
        };
        f.useEffect(() => {
            v()
        }, []), f.useEffect(() => {
            o && _()
        }, [o, n]), f.useEffect(() => {
            c([]), b([])
        }, [o]);
        const T = R => {
                r(R)
            },
            N = async () => {
                await M.post("/payment/feedback/create/", {
                    orderId: s,
                    currencyName: a,
                    txType: n,
                    score: o,
                    category: l,
                    feedback: h
                }), m(!0)
            },
            D = R => {
                c(j => j.includes(R) ? j.filter(C => C !== R) : [...j, R])
            },
            V = R => R === 0 ? "wallet.order.rate.desc6" : R <= 2 ? "wallet.order.rate.desc3" : R < 4 ? "wallet.order.rate.desc4" : "wallet.order.rate.desc5",
            E = h.length > 500;
        return e.jsx(ne, {
            className: Dv,
            closeable: !0,
            title: i("wallet.transaction.new.detail"),
            children: e.jsx(le, {
                children: d ? e.jsxs("div", {
                    className: "result-feedback",
                    children: [e.jsx("img", {
                        src: Iv,
                        alt: ""
                    }), e.jsx("div", {
                        className: "r-tip",
                        children: i("common.feedback.received")
                    }), e.jsx("div", {
                        className: "r-desc",
                        children: i("wallet.order.rate.desc2")
                    })]
                }) : e.jsxs("div", {
                    className: "rating",
                    children: [e.jsx("div", {
                        className: "rating-header",
                        children: e.jsx("p", {
                            children: i(n === 2 ? "wallet.order.rate.title" : "wallet.order.deposit.title")
                        })
                    }), e.jsx("div", {
                        className: "rating-stars",
                        children: [...Array(5)].map((R, j) => e.jsx("img", {
                            onClick: () => T(j + 1),
                            style: {
                                opacity: o <= j && !u ? ".1" : "1"
                            },
                            className: `star ${o>j?"filled":""}`,
                            src: o > j ? Sv : Av
                        }, j))
                    }), e.jsx("div", {
                        className: "desc",
                        children: i(V(o))
                    }), e.jsx("div", {
                        className: "feedback-options",
                        children: p == null ? void 0 : p.map(R => e.jsx("div", {
                            className: `f-item ${l.includes(R.id)?"f-item-selected":""}`,
                            onClick: () => D(R.id),
                            children: R.label
                        }, R.id))
                    }), e.jsx(qt, {
                        label: e.jsx("div", {
                            className: A(E && "error", "marktips"),
                            children: e.jsx(Ae, {
                                k: "wallet.transaction.rate.label",
                                children: e.jsx("span", {
                                    className: "txt-num",
                                    children: h.length
                                })
                            })
                        }),
                        className: "rain-textarea",
                        value: h,
                        onChange: g,
                        placeholder: i("wallet.order.rate.tip")
                    }), e.jsx("div", {
                        className: "submit",
                        children: e.jsx(q, {
                            disabled: !o || E,
                            type: "conic",
                            onClick: N,
                            children: i("common.submit")
                        })
                    })]
                })
            })
        })
    }
    const Dv = "s1nacala";

    function Pv({
        img: t,
        onChange: a,
        isWithdraw: s
    }) {
        const [n, i] = _e({
            tempimage: t,
            loading: !1,
            uploading: !1
        });
        async function o(d) {
            if (d.target.files) {
                const m = d.target.files[0],
                    h = m.type === "application/pdf";
                if (m && !(m.size / 1024 / 1024 < 10)) return "Upload file size exceeds 10MB";
                const g = new FormData;
                g.append("file", m), i({
                    uploading: !0,
                    tempimage: h ? "temp.pdf" : URL.createObjectURL(m)
                }), d.target.value = "";
                try {
                    const {
                        path: u,
                        sign: p,
                        uri: b
                    } = await M.post(h ? "/filehub/upload/ " : "/filehub/upload-image/", g, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }), v = await M.post("/user/file/set/", {
                        path: u,
                        sign: p
                    });
                    a && a(v.path), i({
                        tempimage: "",
                        uploading: !1
                    })
                } catch (u) {
                    i({
                        tempimage: "",
                        uploading: !1
                    }), L(u)
                }
            }
        }
        const r = function() {
                i({
                    tempimage: ""
                }), a && a("")
            },
            l = t || n.tempimage,
            c = /\.pdf/.exec(l);
        return e.jsxs("div", {
            className: A(Bv, "upload-img"),
            children: [!n.uploading && !l && e.jsx("button", {
                className: "add",
                children: e.jsx(z, {
                    name: "Close"
                })
            }), e.jsx("input", {
                type: "file",
                accept: s ? "image/*, application/pdf" : "image/*",
                onChange: o
            }), n.uploading && e.jsx(pe, {}), l && e.jsx("div", {
                className: "img-wrap",
                children: c ? e.jsx("div", {
                    children: "PDF"
                }) : e.jsx("img", {
                    src: l,
                    alt: "uploaded image"
                })
            }), a && t && e.jsx("button", {
                className: "close",
                onClick: r,
                children: e.jsx(z, {
                    name: "Close"
                })
            })]
        })
    }
    const Bv = "s1me6b1l";

    function Ev(t) {
        const a = jt.fn.useReviewStatus(t.reviewStatusCode),
            s = k();
        return e.jsx(xa, {
            children: e.jsxs("div", {
                className: Ov,
                children: [a && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: s("wallet.transaction.process")
                    }), e.jsx("div", {
                        className: A("cont status-wrap", jt.fn.getReviewStatus(t.reviewStatusCode)),
                        children: a
                    })]
                }), e.jsxs("div", {
                    className: "item ticketid",
                    children: [e.jsx("div", {
                        className: "label",
                        children: s("wallet.transaction.ticketid")
                    }), e.jsx("div", {
                        className: "cont",
                        children: t.ticketId
                    })]
                }), t.reviewMessage && e.jsxs("div", {
                    className: "item reson",
                    children: [e.jsx("div", {
                        className: "label",
                        children: s("common.reson")
                    }), e.jsx("div", {
                        className: "cont",
                        children: t.reviewMessage
                    })]
                }), t.reviewProof && e.jsxs("a", {
                    className: "item download",
                    target: "_blank",
                    href: jt.fn.getImgPath(t.reviewProof),
                    download: !0,
                    children: [e.jsx("div", {
                        className: "label",
                        children: s("wallet.label.payment_proof")
                    }), e.jsxs("div", {
                        className: "cont",
                        children: [e.jsx(z, {
                            name: "Download"
                        }), " ", s("common.actions.download")]
                    })]
                })]
            })
        })
    }

    function cc({
        commonData: t,
        ticketData: a,
        onfreash: s,
        isWithdraw: n
    }) {
        var d;
        const i = H.serverTime().getTime(),
            o = k(),
            r = ((d = a == null ? void 0 : a.fiatTicketResult) == null ? void 0 : d.ticketId) === null,
            [l, c] = f.useState();
        if (f.useEffect(() => {
                M.post("/payment/fiat/ticketDraft/get/", {
                    orderId: t.orderId,
                    ticketType: 1
                }).then(m => {
                    m && c(m)
                })
            }, []), a && a.fiatTicketResult) {
            const m = r ? Q(U({}, a.fiatTicketResult), {
                    fiatItems: (l == null ? void 0 : l.list) || [],
                    note: (l == null ? void 0 : l.note) || ""
                }) : a.fiatTicketResult,
                h = typeof m.ticketId == "number",
                g = Number(t.createTime),
                u = (t.currencyName === "JPYFIAT" || i - g > 36e5) && i - g < 6048e5,
                p = n ? !1 : a.status === 1 || a.status === 2,
                b = m.reviewStatusCode === null || (n ? m.reviewStatusCode === 6 && m.fiatItems.length > 0 : m.reviewStatusCode === 6),
                v = u && p && b;
            return p && t.currencyName !== "JPYFIAT" && i - g < 36e5, e.jsxs(e.Fragment, {
                children: [h && e.jsx(je, {
                    id: "ticket-info",
                    children: e.jsx(Ev, U({}, m))
                }), v && a.fiatTicketResult && e.jsx(q, {
                    type: "conic4",
                    onClick: () => ke.push(e.jsx(Lv, {
                        onfreash: s,
                        commonData: t,
                        fiatTicketResult: m,
                        isWithdraw: n,
                        info: l
                    })),
                    children: m.reviewStatusCode === 6 ? o("common.complete_information") : o("common.submit_complaint")
                })]
            })
        }
        return null
    }
    const gs = (t, a) => {
        try {
            let s = "";
            return t.forEach(n => {
                n.field === a && (s = n.value)
            }), s
        } catch (s) {
            return ""
        }
    };

    function Lv({
        info: t,
        commonData: a,
        fiatTicketResult: s,
        onfreash: n,
        isWithdraw: i
    }) {
        const {
            fiatImgs: o,
            dataInput: r
        } = jt.fn.getDefault(s.fiatItems), l = s.ticketId === null, c = l ? !0 : s.morePicture, {
            txt: d
        } = xt(a.status), [m, h] = f.useState(() => (s == null ? void 0 : s.note) || ""), g = k(), [u, p] = _e(() => ({
            imgs: l ? [...o, ...new Array(8).fill("").flat()] : new Array(8).fill(""),
            note: "",
            dataInput: r,
            inrnum: {
                type: "data",
                field: "INR",
                value: gs(s.fiatItems, "INR")
            },
            idrname: {
                type: "data",
                field: "Depositor Name",
                value: gs(s.fiatItems, "Depositor Name")
            },
            ngnbank: {
                type: "data",
                field: "Bank number",
                value: gs(s.fiatItems, "Bank number")
            },
            loading: !1
        })), b = function() {
            var C;
            return p({
                loading: !0
            }), c && (l ? u.imgs.filter(Boolean).length === 0 && ((C = s == null ? void 0 : s.fiatItems) == null ? void 0 : C.length) === 0 : u.imgs.filter(Boolean).length === 0) ? (p({
                loading: !1
            }), L(g("wallet.submit.required_img"))) : l ? v() : _()
        }, v = async function() {
            const C = jt.fn.getImgsData(u.imgs).map(y => typeof y.value != "string" ? y.value : y);
            if (m && C.push({
                    type: "data",
                    field: "note1",
                    value: m
                }), i) u.note && C.push({
                type: "data",
                field: "note",
                value: u.note
            });
            else {
                if (D)
                    if (u.inrnum.value.length === 12) C.push(u.inrnum);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket4"));
                if (V)
                    if (u.ngnbank.value) C.push(u.ngnbank);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket10"));
                if (E)
                    if (u.idrname.value) C.push(u.idrname);
                    else return p({
                        loading: !1
                    }), L(g("wallet.transaction.ticket8"))
            }
            M.post("/payment/fiat/ticket/create/", {
                orderId: a.orderId,
                list: C,
                ticketType: i ? 2 : 1,
                note: m
            }).then(y => {
                ke.back(), n(), p({
                    loading: !1
                })
            }).catch(y => {
                p({
                    loading: !1
                }), L(y)
            })
        }, _ = async function() {
            if (u.dataInput.find(x => !x.value)) return p({
                loading: !1
            }), L(g("wallet.submit.required"));
            const C = [...u.dataInput],
                y = jt.fn.getImgsData(u.imgs);
            m && C.push({
                type: "data",
                field: "note1",
                value: m
            }), M.post("/payment/fiat/ticket/update/", {
                ticketId: s.ticketId,
                list: C.concat(y),
                note: m
            }).then(x => {
                ke.back(), n(), p({
                    loading: !1
                })
            }).catch(x => {
                p({
                    loading: !1
                }), L(x)
            })
        }, T = f.useCallback((C, y, x) => {
            x[y] = C, p({
                imgs: [...x]
            })
        }, []), N = f.useCallback((C, y) => {
            const x = [...u.dataInput],
                I = x.find(P => P.id === y);
            I && (I.value = C, p({
                dataInput: x
            }))
        }, [u.dataInput]), D = a.currencyName === "INRFIAT" && l, V = a.currencyName === "NGNFIAT" && l, E = a.currencyName === "IDRFIAT" && l, R = f.useCallback(C => {
            C = C.replace(/\.|e/, "").substring(0, 12), p({
                inrnum: Q(U({}, u.inrnum), {
                    value: C
                })
            })
        }, [u.inrnum]), j = f.useCallback(C => {
            C = C.replace(/\.|e/, ""), p({
                ngnbank: Q(U({}, u.ngnbank), {
                    value: C
                })
            })
        }, [u.ngnbank]);
        return e.jsx($e, {
            closeable: !0,
            className: Fv,
            children: e.jsxs(le, {
                children: [e.jsx("div", {
                    className: "top",
                    children: c && e.jsxs(e.Fragment, {
                        children: [e.jsxs("div", {
                            className: "tit",
                            children: [e.jsx("span", {
                                children: g(i ? "wallet.transaction.ticket5" : "wallet.transaction.ticket1")
                            }), "*", g("common.img_limit", "10MB")]
                        }), o.map((C, y) => e.jsxs("div", {
                            children: [y + 1, ": ", C.field]
                        }, y)), e.jsx("div", {
                            className: "upload-list",
                            children: u.imgs.map((C, y) => {
                                const x = y <= 2,
                                    I = i ? Qt(u.imgs, Boolean) : 1;
                                return x || y <= I + 1 ? e.jsx(Pv, {
                                    isWithdraw: i,
                                    img: jt.fn.getImgPath(u.imgs[y].value ? u.imgs[y].value : u.imgs[y]),
                                    onChange: P => T(P, y, u.imgs)
                                }, y) : null
                            })
                        })]
                    })
                }), i ? l && e.jsx(He, {
                    onChange: C => p({
                        note: C
                    }),
                    value: u.note,
                    label: e.jsxs(e.Fragment, {
                        children: [e.jsx("div", {
                            style: {
                                marginRight: "auto"
                            },
                            children: g("common.note")
                        }), " ", e.jsx(Rt, {
                            title: e.jsx("div", {
                                style: {
                                    whiteSpace: "break-spaces"
                                },
                                children: g("wallet.transaction.ticket7")
                            }),
                            children: e.jsx(z, {
                                name: "Info"
                            })
                        })]
                    })
                }) : e.jsxs(e.Fragment, {
                    children: [V && e.jsx(He, {
                        inputMode: "numeric",
                        onChange: j,
                        value: u.ngnbank.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("wallet.transaction.ticket9")]
                        }),
                        type: "number"
                    }), D && e.jsx(He, {
                        inputMode: "numeric",
                        onChange: R,
                        type: "number",
                        value: u.inrnum.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("wallet.transaction.ticket3")]
                        })
                    }), E && e.jsx(He, {
                        onChange: C => p({
                            idrname: Q(U({}, u.idrname), {
                                value: C
                            })
                        }),
                        value: u.idrname.value,
                        label: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), " ", g("common.depositor")]
                        })
                    })]
                }), !l && u.dataInput.filter(C => C.field !== "note1").map((C, y) => e.jsx(He, {
                    label: e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                            className: "required",
                            children: [e.jsx("b", {
                                children: "*"
                            }), D ? g("wallet.transaction.ticket3") : E ? g("common.depositor") : V ? g("wallet.transaction.ticket9") : C.field]
                        })
                    }),
                    value: C.value,
                    onChange: x => N(x, C.id)
                }, y)), e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx("div", {
                        className: "tit",
                        children: g("wallet.transaction.ticket2")
                    }), e.jsxs("div", {
                        className: "item-wrap",
                        children: [e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("common.amount"), ":"]
                            }), e.jsxs("div", {
                                className: "value",
                                children: [H.formateAmount(a.amount), " ", w.getAlias(a.currencyName)]
                            })]
                        }), e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("page.prize.history_state"), ":"]
                            }), e.jsx("div", {
                                className: "value state",
                                children: d
                            })]
                        }), e.jsxs("div", {
                            className: "item",
                            children: [e.jsxs("div", {
                                className: "label",
                                children: [g("common.time"), ":"]
                            }), e.jsx("div", {
                                className: "value",
                                children: new Date(a.createTime).toLocaleString()
                            })]
                        })]
                    })]
                }), e.jsx(qt, {
                    className: "rain-textarea",
                    value: m,
                    onChange: h,
                    label: e.jsx("div", {
                        className: A(m.length > 500 && "error", "marktips"),
                        children: e.jsx(Ae, {
                            k: "wallet.order.draft.note",
                            children: e.jsx("span", {
                                className: "txt-num",
                                children: m.length
                            })
                        })
                    })
                }), e.jsx(q, {
                    type: "conic",
                    disabled: m.length > 500,
                    onClick: b,
                    loading: u.loading,
                    className: "",
                    children: g("common.submit")
                })]
            })
        })
    }
    Ie({
        cl1: [ie("#98a7b5", .5), ie("#5f6975", .8)],
        cl2: ["#fff", "#000"]
    });
    const Fv = "sesvw24",
        Ov = "ic39tcx";

    function Mv() {
        var d;
        const t = (d = ft().orderId) != null ? d : "",
            [a, s] = f.useState(0),
            n = f.useCallback(() => s(m => ++m), []),
            i = k(),
            {
                data: o,
                error: r
            } = Be(() => id.getDepositDetail(t), [a]);
        if (r) return e.jsx(ne, {
            className: ma,
            closeable: !0,
            children: e.jsx(Ce, {
                children: r.message
            })
        });
        if (!o) return e.jsx(ne, {
            className: ma,
            closeable: !0,
            children: e.jsx(pe, {})
        });
        const l = o.commonData,
            c = o.fiatOrderDetail;
        return c && H.serverTime().getTime() - Number(l.createTime) > 5184e6 ? e.jsx(ne, {
            title: i("wallet.transaction.new.detail"),
            className: ma,
            closeable: !0,
            children: e.jsx(Ce, {
                children: i("wallet.fiat.expired.order_tip", "2")
            })
        }) : e.jsx(ne, {
            title: i("wallet.transaction.new.detail"),
            className: ma,
            closeable: !0,
            children: e.jsxs(le, {
                children: [e.jsxs("div", {
                    className: "head",
                    children: [e.jsx(De, {
                        name: l.currencyName
                    }), e.jsxs("div", {
                        className: "amount cl-green",
                        children: ["+ ", H.formateAmount(l.amount), e.jsx("span", {
                            className: "name",
                            children: w.getAlias(l.currencyName)
                        })]
                    })]
                }), e.jsx(je, {
                    id: "fiat-expires"
                }), !c && e.jsx(av, U({}, l)), c && e.jsx(cv, {
                    commonData: l,
                    fiatData: c,
                    onfreash: n
                }), c && e.jsx(Cv, {
                    commonData: l,
                    channelName: c.channelName,
                    fiatData: c
                }), e.jsx(cc, {
                    commonData: l,
                    ticketData: c,
                    onfreash: n
                }), c && e.jsx("div", {
                    className: "rate-btn",
                    onClick: () => {
                        Te.push(e.jsx(lc, {
                            currencyName: l.currencyName,
                            orderId: c == null ? void 0 : c.orderId,
                            txType: 1
                        }))
                    },
                    children: i("wallet.order.rate.experience")
                })]
            })
        })
    }
    const ma = "s1jtbne";

    function Wv(t) {
        const a = k(),
            s = bt();
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("page.prize.history_state")
                }), e.jsxs("div", {
                    className: "cont status-wrap",
                    children: [e.jsx("b", {
                        className: od(t.status)
                    }), t.statusText]
                })]
            }), t.refundAmount && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.order.part_refunded.amount")
                }), e.jsxs("div", {
                    className: "cont",
                    children: [t.refundAmount, " ", w.getAlias(t.currencyName)]
                })]
            }), t.refundTime && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.order.part_refunded.time")
                }), e.jsx("div", {
                    className: "cont",
                    children: new Date(Number(t.refundTime)).toLocaleString()
                })]
            }), t.txId && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: "Txid"
                }), e.jsx("div", {
                    className: "cont cl-primary",
                    children: e.jsx(ca, {
                        href: t.blockAddress,
                        txid: t.txId
                    })
                })]
            }), e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.orderid")
                }), t.orderId ? e.jsxs("div", {
                    className: "cont copy-wrap",
                    onClick: () => t.onCopy(t.orderId),
                    children: [t.orderId, " ", e.jsx(z, {
                        name: "Copy"
                    })]
                }) : e.jsx("div", {
                    className: "cont",
                    children: "-"
                })]
            }), e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    title: a("common.time"),
                    children: a("common.time")
                }), e.jsx("div", {
                    className: "cont",
                    children: new Date(Number(t.createTime)).toLocaleString()
                })]
            }), e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("title.help_fee")
                }), e.jsxs("div", {
                    className: "cont",
                    children: [t.fee, " ", w.getAlias(t.currencyName), s.enableLocaleCurrency && ` (${w.localCurrency.cs}${H.formateAmount(w.amount2locale(Number(t.fee),t.currencyName))})`]
                })]
            }), t.withdrawAddress && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    title: a("wallet.withdraw.address"),
                    children: a("wallet.withdraw.address")
                }), e.jsx(nc, {
                    address: t.withdrawAddress
                })]
            })]
        })
    }

    function Uv(t) {
        const a = k(),
            s = bt(),
            n = t.fiatOrderDetail,
            [i, o] = f.useState(!1);
        return e.jsxs("div", {
            className: A(Vv),
            children: [e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("page.prize.history_state")
                }), e.jsxs("div", {
                    className: "cont status-wrap",
                    children: [e.jsx("b", {
                        className: od(t.status)
                    }), t.statusText]
                })]
            }), t.refundAmount && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.order.part_refunded.amount")
                }), e.jsxs("div", {
                    className: "cont",
                    children: [t.refundAmount, " ", w.getAlias(t.currencyName)]
                })]
            }), t.refundTime && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.order.part_refunded.time")
                }), e.jsx("div", {
                    className: "cont",
                    children: new Date(Number(t.refundTime)).toLocaleString()
                })]
            }), t.txId && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: "Txid"
                }), e.jsx("div", {
                    className: "cont cl-primary",
                    children: e.jsx(ca, {
                        href: t.blockAddress,
                        txid: t.txId
                    })
                })]
            }), e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    children: a("wallet.orderid")
                }), t.orderId ? e.jsxs("div", {
                    className: "cont copy-wrap",
                    onClick: () => t.onCopy(t.orderId),
                    children: [t.orderId, " ", e.jsx(z, {
                        name: "Copy"
                    })]
                }) : e.jsx("div", {
                    className: "cont",
                    children: "-"
                })]
            }), !i && e.jsxs("div", {
                className: "toggle-btn",
                onClick: () => {
                    o(!i)
                },
                children: [e.jsx("span", {
                    children: a("wallet.order.view.more")
                }), e.jsx(z, {
                    className: "more-arrow",
                    name: "Arrow"
                })]
            }), e.jsxs(wa, {
                visible: i,
                children: [e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        title: a("common.time"),
                        children: a("common.time")
                    }), e.jsx("div", {
                        className: "cont",
                        children: new Date(Number(t.createTime)).toLocaleString()
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: a("title.help_fee")
                    }), e.jsxs("div", {
                        className: "cont",
                        children: [t.fee, " ", w.getAlias(t.currencyName), s.enableLocaleCurrency && ` (${w.localCurrency.cs}${H.formateAmount(w.amount2locale(Number(t.fee),t.currencyName))})`]
                    })]
                }), e.jsxs("div", {
                    className: "info-box",
                    children: [e.jsx("div", {
                        className: "paytm-tit",
                        children: a("wallet.fiat.new.merchant_information")
                    }), e.jsx("div", {
                        className: "paytm-wrap",
                        children: (n == null ? void 0 : n.channelName) && e.jsxs("div", {
                            className: "item order-5",
                            children: [e.jsx("div", {
                                className: "label",
                                children: a("wallet.fiat.new.merchant_id")
                            }), e.jsx("div", {
                                className: "cont ellipsis",
                                children: n.channelName
                            })]
                        })
                    })]
                }), e.jsx(je, {
                    id: "ticket-info"
                })]
            }), i && e.jsxs("div", {
                className: "toggle-btn",
                onClick: () => {
                    o(!i)
                },
                children: [e.jsx("span", {
                    children: a("wallet.order.view.less")
                }), e.jsx(z, {
                    className: "less-arrow",
                    name: "Arrow"
                })]
            }), e.jsx("div", {
                className: "line"
            }), t.withdrawAddress && e.jsxs("div", {
                className: "item",
                children: [e.jsx("div", {
                    className: "label",
                    title: a("wallet.withdraw.address"),
                    children: a("wallet.withdraw.address")
                }), e.jsx(nc, {
                    address: t.withdrawAddress
                })]
            })]
        })
    }
    const Vv = "s15e8w5k";

    function zv(t) {
        const a = k(),
            s = t.fiatOrderDetail,
            n = t.commonData;
        if (!s) return null;

        function i() {
            return sd.cancelOrder(n.withdrawId, n.currencyName, n.withdrawWay, n.chain).then(o => {
                t.onfreash()
            }).catch(L)
        }
        return e.jsxs(e.Fragment, {
            children: [e.jsx(cc, {
                commonData: n,
                ticketData: s,
                isWithdraw: !0,
                onfreash: t.onfreash
            }), n.cancelable && !n.status && e.jsx(q, {
                className: "cl-primary cancel-btn order-15",
                onClick: i,
                children: a("wallet.tranaction.cancel.new")
            })]
        })
    }

    function fs({
        num: t,
        completed: a,
        pending: s
    }) {
        return a ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    name: "Check"
                })
            })]
        }) : s ? e.jsxs("div", {
            className: "line-wrap cl-g",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: e.jsx(z, {
                    className: "loading-icon",
                    name: "Refresh"
                })
            })]
        }) : e.jsxs("div", {
            className: "line-wrap",
            children: [e.jsx("div", {
                className: "line"
            }), e.jsx("div", {
                className: "cir",
                children: t
            })]
        })
    }

    function $v(t) {
        const a = t.status,
            s = k();
        return a < 0 || a === 4 ? null : e.jsxs("div", {
            className: qv,
            children: [e.jsx("div", {
                className: "tit",
                children: s("common.progress")
            }), e.jsxs("div", {
                className: "progress-item no-line",
                children: [e.jsx(fs, {
                    num: 1,
                    completed: a === 2 || a === 3 || a === 4,
                    pending: a === 0 || a === 1 || a === 5 || a === 6 || a === 7
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.send")
                    }), e.jsx("div", {
                        className: "sub-txt",
                        children: s("wallet.order.new.attime", new Date(Number(t.createTime)).toLocaleString())
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(fs, {
                    num: 2,
                    completed: a === 4,
                    pending: a === 2 || a === 3
                }), e.jsxs("div", {
                    className: "desc",
                    children: [e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.blockchain")
                    }), e.jsx("div", {
                        className: "sub-txt",
                        children: s("wallet.order.new.trading")
                    })]
                })]
            }), e.jsxs("div", {
                className: "progress-item",
                children: [e.jsx(fs, {
                    num: 3,
                    completed: a === 4
                }), e.jsx("div", {
                    className: "desc",
                    children: e.jsx("div", {
                        className: "sub-tit",
                        children: s("wallet.order.new.completed")
                    })
                })]
            })]
        })
    }
    const qv = "s1whkk8p";

    function Hv() {
        var b;
        const t = k(),
            a = (b = ft().orderId) != null ? b : "",
            s = f.useCallback(v => {
                H.copyToClipboard(v), L(t("common.messages.copy_success"))
            }, []),
            {
                account: n
            } = Ee(),
            {
                isSvip: i
            } = n.getUserLevelInfo(n.vipLevel),
            [o, r] = f.useState(0),
            l = Cs(),
            c = f.useCallback(() => r(v => ++v), []),
            {
                data: d,
                error: m
            } = Be(() => id.getWithdrawDetail(a), [o, l]);
        if (f.useEffect(() => {
                if (!d) return;
                const v = d.fiatOrderDetail,
                    _ = d.commonData;
                v && O.emit("live_support_order", {
                    OrderCurrency: _.currencyName.replace("FIAT", ""),
                    OrderAmount: Number(_.amount),
                    OrderId: _.orderId,
                    OrderStatus: _.statusText,
                    OrderProgress: u,
                    OrderFee: Number(_.fee),
                    OrderMerchant: v.channelName
                })
            }, [d]), m) return e.jsx(ne, {
            title: t("wallet.transaction.new.detail"),
            children: e.jsx(Ce, {
                children: m.message
            })
        });
        if (!d) return e.jsx(ne, {
            title: t("wallet.transaction.new.detail"),
            children: e.jsx(pe, {})
        });
        const h = d.fiatOrderDetail,
            g = d.commonData,
            u = t(g0(h == null ? void 0 : h.status)),
            p = () => {
                O.emit("live_support"), ee.track.trackEvent("sidebar_click", {
                    button_name: "live_support"
                })
            };
        return h && H.serverTime().getTime() - Number(g.createTime) > 5184e6 ? e.jsx(ne, {
            title: t("wallet.transaction.new.detail"),
            className: dc,
            closeable: !0,
            children: e.jsx(Ce, {
                children: t("wallet.fiat.expired.order_tip", "2")
            })
        }) : e.jsx(ne, {
            className: dc,
            closeable: !0,
            title: t("wallet.transaction.new.detail"),
            children: e.jsxs(le, {
                children: [e.jsxs("div", {
                    className: "head",
                    children: [e.jsx(De, {
                        name: g.currencyName
                    }), e.jsxs("div", {
                        className: "amount cl-red",
                        children: ["- ", H.formateAmount(g.amount), e.jsx("span", {
                            className: "name",
                            children: w.getAlias(g.currencyName)
                        })]
                    })]
                }), !h && e.jsx(Wv, Q(U({}, g), {
                    onCopy: s
                })), h && e.jsx(Uv, U(Q(U({}, g), {
                    onCopy: s
                }), d)), h && e.jsx(zv, Q(U({}, d), {
                    onCopy: s,
                    onfreash: c
                })), !h && e.jsx($v, U({}, g)), h && e.jsx(kv, U(U({}, g), h)), g.redirectUrl && e.jsx(q, {
                    type: "conic4",
                    className: "online-service",
                    onClick: () => window.open(g.redirectUrl, "_blank"),
                    children: t("common.continue")
                }), h && e.jsx(q, {
                    type: "conic",
                    className: "online-service",
                    onClick: p,
                    children: t(i ? "common.Live_svip_supports" : "common.Live_supports")
                }), h && e.jsx("div", {
                    className: "rate-btn",
                    onClick: () => {
                        Te.push(e.jsx(lc, {
                            currencyName: g.currencyName,
                            orderId: h == null ? void 0 : h.orderId,
                            txType: 2
                        }))
                    },
                    children: t("wallet.order.rate.experience")
                })]
            })
        })
    }
    const dc = "s1d83zzt",
        Nt = () => K(() =>
            import ("./chunk-01e01e40.js").then(async t => (await t.__tla, t)), ["assets/chunk-01e01e40.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-dcd0ca87.js", "assets/chunk-61302461.js", "assets/index.ecad4d73.css", "assets/chunk-7b5fcfc1.js", "assets/chunk-8285f8a4.js", "assets/chunk-abcf23a1.js", "assets/index.74861cf6.css", "assets/chunk-6d76b68a.js", "assets/chunk-222f02b2.js", "assets/index.50ecc287.css", "assets/output.1a7a0e4a.css"]),
        Yv = $(async () => ({
            default: (await Nt()).Deposit
        })),
        Gv = $(async () => ({
            default: (await Nt()).BcdRelaease
        })),
        Jv = $(async () => ({
            default: (await Nt()).BonusRelaease
        })),
        Qv = $(async () => ({
            default: (await Nt()).BclAbout
        })),
        Zv = $(async () => ({
            default: (await Nt()).JbAbout
        })),
        Kv = $(async () => ({
            default: (await Nt()).BcdAbout
        }));
    ba.addAfterRequest(t => {
        t.code == Bs.INSUFFICIENT_BALANCE && L(t.msg)
    });

    function mc({
        link: t
    }) {
        const a = re();
        return f.useEffect(() => {
            a(t, {
                replace: !0
            })
        }, [t]), null
    }

    function Xv() {
        const t = Se.host === "bc.me" || Se.host === "bcga.me" || Se.host === "bc.ai";
        O.emit("inject_rootNode", e.jsx(je, {
            id: "wallet-enter",
            children: e.jsx(Sb, {})
        })), O.emit("inject_dialog", [{
            path: "#/brwallet/*",
            element: t ? e.jsx(Zb, {}) : e.jsx(mc, {
                link: "/wallet/*"
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/deposit/*",
            element: t ? e.jsx(mc, {
                link: "#/brwallet/deposit"
            }) : e.jsx(Yv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/rollover",
            element: e.jsx(f0, {
                isDialog: !0
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/user/buy-crypto/*",
            element: e.jsx(hb, {}),
            isAuth: !0,
            isHook: !0
        }, {
            path: "#/about_bonuscoin",
            element: e.jsx(Gv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/about_bonusfiat",
            element: e.jsx(Jv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/about_ticketcoin",
            element: e.jsx(Qv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/about_bcdcoin",
            element: e.jsx(Kv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/about_jbcoin",
            element: e.jsx(Zv, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/deposit_detail/:orderId/",
            element: e.jsx(Mv, {}),
            isDialog: !0,
            isAuth: !0,
            isHook: !0
        }, {
            path: "#/withdraw_detail/:orderId/",
            element: e.jsx(Hv, {}),
            isDialog: !0,
            isAuth: !0,
            isHook: !0
        }])
    }
    const ew = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xv
    }, Symbol.toStringTag, {
        value: "Module"
    }));
    document.addEventListener("gesturestart", t => t.preventDefault()), K1({
        enforceActions: "never"
    });
    const uc = {
            "common.highlights": "Highlights",
            "common.sports.deposit300": 'Fast & Easy Way to get started <div class="green">300% Deposit Bonus</div>',
            "common.sports.deposit_fast": 'Deposit fast and safely with <span class="green">M-PESA</span><br/> your favorite payment method',
            "common.sports.deposit_fast_mobile": 'Deposit fast and safely with <br/><span class="green">M-PESA</span> your favorite <br/> payment method',
            "common.about_us": "About Us",
            "page.common.up_bonus": "Now get rewarded for your valuable feedback.",
            "page.common.find_bugs": "If you are experiencing any issues or have any feedback for us, please leave your message here, and our team will work on addressing it.",
            "common.accept": "Accept",
            "common.account": "Account",
            "common.actions.add": "Add",
            "common.actions.here": "here",
            "common.actions.apply": "Apply",
            "common.actions.buy_now": "Buy Now",
            "common.actions.buy": "Buy {0}",
            "common.actions.cancel": "Cancel",
            "common.actions.close": "Close",
            "common.actions.collect_now": "Collect Now",
            "common.actions.confirm": "Confirm",
            "common.actions.copy": "Copy",
            "common.actions.download": "Download",
            "common.actions.fullscreen": "Full Screen",
            "common.actions.movie": "Movie Mode",
            "common.actions.livestats": "Live Stats",
            "common.actions.edit": "Edit",
            "common.actions.generate_link": "Generate Link",
            "common.actions.help": "Help",
            "common.actions.hide_small": "Hide Small",
            "common.actions.merge": "Merge",
            "common.actions.modify": "Modify",
            "common.actions.run": "Run",
            "common.actions.save": "Save",
            "common.actions.search": "Search",
            "common.actions.split": "Split",
            "common.actions.stop": "Stop",
            "common.actions.view": "View",
            "common.actions.view_my": "View my {0}",
            "common.actions.play_available_games": "Play available games",
            "common.active": "Active",
            "common.active.redeem": "Redeem",
            "common.goactivate": "Go Activate",
            "common.activate": "Activate",
            "common.buy": "Buy",
            "common.level": "Level",
            "common.password": "Password",
            "common.collect.view": "Collect & View",
            "common.notactive": "Not Active",
            "common.address": "Address",
            "common.advanced": "Advanced",
            "common.available": "Available",
            "common.affiliate_myCasino": "Affiliate",
            "common.all": "All",
            "common.mindeposit": "Minimum Deposit",
            "common.getupto": "Get up to",
            "common.min": "Min",
            "common.days": "Days",
            "common.match": "Match",
            "common.try": "Try",
            "common.endsin": "Ends in",
            "common.lobby": "Lobby",
            "common.locked_funds": "Locked funds",
            "common.timeleft": "Time Left",
            "common.example": "Example",
            "common.every": "Every",
            "common.exclusive": "Exclusive",
            "common.themes": "Themes",
            "common.total_winnings": "Total Winnings",
            "common.max": "Max",
            "common.promo_time": "Promo Time",
            "common.week.mon": "Monday",
            "common.week.tue": "Tuesday",
            "common.week.wed": "Wednesday",
            "common.week.thu": "Thursday",
            "common.week.fri": "Friday",
            "common.week.sat": "Saturday",
            "common.week.sun": "Sunday",
            "common.wager_requirement": "Wager Requirement",
            "common.month.january": "January",
            "common.month.february": "February",
            "common.month.march": "March",
            "common.month.april": "April",
            "common.month.may": "May",
            "common.month.june": "June",
            "common.month.july": "July",
            "common.month.august": "August",
            "common.month.september": "September",
            "common.month.october": "October",
            "common.month.november": "November",
            "common.month.december": "December",
            "common.switch": "Switch",
            "common.service": "If you have any questions, you can contact us 24/7",
            "common.status.success": "Success",
            "common.status.complete": "Complete",
            "common.status.failed": "Failed",
            "common.status.refunded": "Refunded",
            "common.status.canceled.new": "Canceled",
            "common.status.processing": "Processing",
            "common.allow": "Allow",
            "common.vault": "Vault",
            "common.all_bet": "All Bets",
            "common.all_players": "All Players",
            "common.amount": "Amount",
            "common.amount_unlockable": "AMOUNT UNLOCKABLE",
            "common.analysis": "Analysis",
            "common.auto": "Auto",
            "common.limited": "Limited",
            "common.available_soon": "Available soon",
            "common.balance": "Balance",
            "common.total_balance": "Total Balance",
            "common.bankroll": "Bankroll",
            "common.bet": "Bet",
            "common.betamount": "Bet Amount",
            "common.betid": "Bet ID",
            "common.betting": "Betting",
            "common.bet_slip": "Bet Slip",
            "common.big.profit.boards": "Big Profit Boards",
            "common.bill": "Bill",
            "common.block": "Block",
            "common.music": "Music",
            "common.blog": "Blog",
            "common.public": "Public",
            "common.private": "Private",
            "common.progress": "Progress",
            "common.order.progress": "Order Progress",
            "common.phone": "Phone",
            "common.casino": "Casino",
            "common.catchcoco": "Catch COCO",
            "common.chance": "Chance",
            "common.chat_now": "Chat now",
            "common.send_now": "Send now",
            "common.chip.value": "Chip value",
            "common.claimed": "Claimed",
            "common.claim_rewards": "Claim Rewards",
            "common.claim_in": "Claim In",
            "common.claim_all": "Claim All",
            "common.claim_amount": "Claim Amount",
            "common.unclaimed": "Unclaimed",
            "common.clear": "Clear",
            "common.continue": "Continue",
            "common.global": "Global",
            "common.clear_all": "Clear All",
            "common.clickhere": "Click here",
            "common.client_seed": "Client Seed",
            "common.club": "Club",
            "common.code": "Code",
            "common.past": "Past",
            "common.paste": "Paste",
            "common.feedback.received": "Feedback Received!",
            "common.coming": "Result coming out soon",
            "common.comments": "Comments",
            "common.congrats": "Congrats",
            "common.congratulations": "Congratulations!",
            "common.contest": "Contest",
            "common.credited_balance": "Already credited to your balance.",
            "common.currency": "Currency",
            "common.current_price": "Current Price",
            "common.customer_service": "Live Customer Support",
            "common.complete_information": "Complete Information",
            "common.denied": "Denied",
            "common.accepted": "Accepted",
            "common.retry": "Re-Verify",
            "common.daily": "Daily",
            "common.weekly": "Weekly",
            "common.monthly": "Monthly",
            "common.dark": "Dark",
            "common.deny": "Cancel",
            "common.deposit": "Deposit",
            "common.depositor": "Depositor",
            "common.deposit_via": "Deposit Via {0}",
            "common.deposit_bonus": "Deposit Bonus",
            "common.deposit_bonus_1": "1st Deposit Bonus",
            "common.deposit_bonus_2": "2nd Deposit Bonus",
            "common.deposit_bonus_3": "3rd Deposit Bonus",
            "common.deposit_bonus_4": "4th Deposit Bonus",
            "common.deposit_first": "Deposit your first {0}",
            "common.deposit_scan": "Scan QR code to deposit",
            "common.description": "Description",
            "common.detail": "Details",
            "common.draw_time": "Draw time",
            "common.betfor": "Bet for {0}",
            "common.go_deposit": "Go to Deposit",
            "common.viewdetail": "View details",
            "common.detail.bettingId": "Bet ID",
            "common.detail.noseed": "The Seed hasn't been revealed yet.",
            "common.disclaimer": "Disclaimer",
            "common.ends_at": "Ends at {0}",
            "common.event_end": "Event End",
            "common.empty": "Empty",
            "common.earn": "Earn",
            "common.unlock": "Unlock",
            "common.error": "Error",
            "common.event_details": "Event Details",
            "common.event_terms": "Terms & Conditions",
            "common.event.game_title": "Participating Games to win ",
            "common.event.btn_progress": "In progress",
            "common.fairness": "Fairness",
            "common.bonus": "Bonus",
            "common.faq": "FAQ's",
            "common.gamedetail": "Game Details",
            "common.footer.rights": "ALL RIGHTS RESERVED",
            "common.faq_fairness": "Provably Fair",
            "common.favorite": "Favorite",
            "common.favorites": "Favorites",
            "common.feature.buyin": "Feature Buy-in",
            "common.final_result": "Final Result",
            "common.finished": "Completed",
            "common.footer.business": "Business",
            "common.footer.desc": "A multi-award winning crypto casino. With a player-centric approach, {0} is able to satisfy millions of gamblers across the globe. {1} has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.",
            "common.footer.gamble_aware": "Gamble Aware",
            "common.footer.licenes": '{0} is operated by BlockDance B.V. (Commercial register of Cura\xE7ao no.158182, Emancipatie Boulevard Dominico F. "Don" Martina 31, Cura\xE7ao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.',
            "common.forum": "Forum",
            "common.founded": "Founded",
            "common.friend_add": "Add Friend",
            "common.friend_remove": "Delete Friend",
            "common.fun_play": "Free Play",
            "common.actions.play_with_real": "Play With Real Money",
            "common.actions.play_with_bonus": "Play With Bonus",
            "common.from": "From",
            "common.to": "To",
            "common.transfer": "Transfer",
            "common.no.asset": "No Asset yet",
            "common.go": "Go",
            "common.game": "Game",
            "common.game.autopick": "Auto Pick",
            "common.game.cleartable": "Clear Table",
            "common.game.collection": "My Collection",
            "common.game.favorite": "Add current numbers to favorite",
            "common.game.feedback": "Thanks for your feedback",
            "common.game.info": "Game Info",
            "common.game.lastgame": "Last game hash",
            "common.game.next_round": "Next round in",
            "common.game.preview": "Game Preview",
            "common.game.recent_empty": "Game results will be displayed here.",
            "common.game.space": "Space Key",
            "common.game.wanna.play": "Wanna play",
            "common.gametag": "Game Tag",
            "common.game_intro": "What Game Is This?",
            "common.game_number": "Game ID",
            "common.gift": "Gift",
            "common.gift_link": "Gift Link",
            "common.gift_share": "Check this link to receive my gift for you:",
            "common.goto.casino": "Go to Casino",
            "common.goto.sports": "Go to Sports",
            "common.goto.racing": "Go to Racing",
            "common.goto.lottery": "Go to Lottery",
            "common.goto.trading": "Go to Trading",
            "common.goto.updown": "Go to Up Down",
            "common.goto.wagermore": "Go Wager More",
            "common.groupMessage": "Group Message",
            "common.groupMessage.placeholder": "Please write a group message",
            "common.selectUsers": "Select Users",
            "common.selectFrequency": "Select frequency",
            "common.hash": "Hash",
            "common.help": "Help",
            "common.hi": "Hi",
            "common.hidden": "Hidden",
            "common.high": "High",
            "common.until": "until",
            "common.high.volatility": "High Volatility",
            "common.highrolls": "High rollers",
            "common.history": "History",
            "common.home": "Home",
            "common.hotkey": "Hotkey",
            "common.hotkeys": "Hot keys",
            "common.hotkeys.enabled": "Hotkeys Enabled",
            "common.hour": "{0} hours",
            "common.hourly": "Hourly",
            "common.hours": "Hours",
            "common.house_edge": "House Edge",
            "common.howtoplay": "How To Play",
            "common.ignore": "Ignore",
            "common.league": "League",
            "common.increase.by": "Increase by",
            "common.info": "Info",
            "common.information": "Information",
            "common.input": "Input",
            "common.accumulated": "Accumulated",
            "common.instant_rate": "Instant Rate",
            "common.img_limit": "Image limit {0}",
            "common.jbnotsuport": "Sorry! JB is not yet supported!",
            "common.know": "Got it!",
            "common.language": "Language",
            "common.last_bets": "Latest bets",
            "common.later": "Later",
            "common.latestbet": "Latest bet & Race",
            "common.light": "Light",
            "common.limit.hours": "Available in first 24 hours",
            "common.listed_balance": "Already listed in your wallet.",
            "common.live_casino": "Live Casino",
            "common.Live_supports": "Live Support",
            "common.Live_svip_supports": "SVIP Live Support",
            "common.loading": "Loading...",
            "common.load_more": "Load More",
            "common.look_detail": "Click for details",
            "common.racing": "Racing",
            "common.lottery": "Lottery",
            "common.lottery.bc": "BC Lottery",
            "common.lottery.gift_history": "Lottery Gift History",
            "common.total_amount": "Total Amount",
            "common.lottery.tickets_sent": "Tickets Sent",
            "common.lottery.time_sent": "Time Sent",
            "common.lottery.pending_redeem": "Pending Redeem",
            "common.lottery.redeemed": "Redeemed",
            "common.trading": "Trading",
            "common.contract": "Futures",
            "common.updown": "Up Down",
            "common.low": "Low",
            "common.leave_message": "Leave a Message",
            "common.manual": "Manual",
            "common.make_deposit": "Make Deposit",
            "common.matches": "Matches",
            "common.maxbet": "Max bet",
            "common.maxprofit": "Max profit",
            "common.max_profits": "Max Profits",
            "common.max_profits.desc1": "When your betting profit exceeds the maximum profit, the system will automatically settle to the maximum profit",
            "common.max_profits.desc2": "Different currencies have different max profits as follows:",
            "common.menu": "Menu",
            "common.ready": "Ready",
            "common.reach": "Reach",
            "common.merge_success": "Merge succeeded",
            "common.messages.agree": "I have read and agree to the {0}",
            "common.messages.amount_insufficient": "Insufficient balance.",
            "common.messages.amount_insufficient_or": "Insufficient balance, select another currency, or {0}",
            "common.messages.amount_no_change": "The bet amount too small. It may fail to change automatically.",
            "common.messages.bigwin": "You are the biggest winner!",
            "common.messages.confirm": "Please confirm!",
            "common.messages.confirm_block_user": "Are you sure you want to block messages from this user?",
            "common.messages.confirm_clear_chat": "Delete your private chat",
            "common.messages.confirm_email": "We will send information to your registered email address.",
            "common.messages.confirm_external_link": "You are navigating to other site. For your account safety, please do not reveal your account information to any unidentified person.",
            "common.messages.confirm_friend_remove": "Delete this friend?",
            "common.messages.confirm_friend_request": "Send a friend request?",
            "common.messages.confirm_max_profit": "The bet amount may exceed the potential maximum profit. Please confirm you're aware that you may not get the full amount when you win a higher payout.",
            "common.messages.cookie_title": "Cookies Policy",
            "common.messages.cookie_warn": "We use cookies to provide the best experience to you.",
            "common.messages.copy_success": "Copied",
            "common.messages.game_search": "Game name | Provider",
            "common.messages.gift_success": "Your generous tip is successfully sent!",
            "common.messages.got_shitlink": "You got a bonus link!",
            "common.messages.learn_more": "Click to learn more!",
            "common.messages.maxbet_tips": "Are you sure you want to place a MAX bet?",
            "common.messages.modify_success": "Done!",
            "common.messages.never_show": "Don't show this again!",
            "common.messages.new_version": "{0} just updated! Kindly refresh your web browser to enjoy the new experience. Thank you!",
            "common.messages.notification_auth": "Authorization Notifications ",
            "common.messages.notification_tip": "We'd like to send you notifications for the latest news and updates.",
            "common.messages.not_found": "Uh Oh! The page you're looking for cannot be found!",
            "common.messages.not_found_redirect": "Redirecting to {0} in {1}",
            "common.messages.no_achieve": "You have not got any {0} yet. Move on, they will finally be yours.",
            "common.messages.no_achieve_player": "Player didn't get any Medal yet.",
            "common.messages.no_data": "Oops! There is no data yet!",
            "common.messages.offline": "Oops! No internet connection!",
            "common.messages.privacy_enable": "This user has privacy mode enabled!",
            "common.messages.rain_get_success": "Wow! You received {0} rain from {1}",
            "common.messages.rain_success": "That's a generous rain! ",
            "common.messages.reconnect": "Connection lost. Trying to reconnect",
            "common.messages.seed_reg": "Seeds are mixed characters containing 10-32 digits, uppercase and lowercase letters. ",
            "common.messages.send_success": "Done!",
            "common.messages.session_error": "Your session has timed out! Please log in again!",
            "common.messages.set_success": "Done!",
            "common.messages.sign_claim": "Sign up and claim",
            "common.messages.success": "Done!",
            "common.messages.success@": "{0} success",
            "common.messages.tip_get_success": "Wow! You received {0} tip from {1}",
            "common.messages.verify_warning": "Sorry! You need to set up a new seed before validating the data (the server seed is encrypted)",
            "common.messages.went_wrong": "Something went wrong.",
            "common.messages.wish_fun": "Wish you super luck and have fun!",
            "common.messages.you_onboard": "Glad to have you onboard",
            "common.minute": "{0} points",
            "common.minutes": "Minutes",
            "common.mobile": "Mobile",
            "common.mode": "Mode",
            "common.multiplier": "Multiplier",
            "common.my": "My",
            "common.myticket": "My Ticket",
            "common.mywinnings": "My Winnings",
            "common.my_bet": "My bets",
            "common.more_details": "More Details",
            "common.name": "Name",
            "common.new": "New",
            "common.only": "Only",
            "common.news": "News",
            "common.nextdraw": "Next Draw Start in",
            "common.nextdraw_in": "Next Draw In",
            "common.nomore": "No More",
            "common.nonce": "Nonce",
            "common.note": "Note:",
            "common.numbers": "Numbers",
            "common.no_numbers": "No numbers",
            "common.number_of_bets": "Number of Bets",
            "common.official": "Official",
            "common.official.website": "Official website",
            "common.offline": "Offline",
            "common.ok": "OK",
            "common.on.lose": "On lose",
            "common.on.win": "On win",
            "common.online": "Online",
            "common.online_verifier": "Online verifier",
            "common.operation": "Operation",
            "common.optional": "Optional",
            "common.options": "Options",
            "common.output": "Output",
            "common.payout": "Payout",
            "common.pickes": "Picks For You",
            "common.play": "Play",
            "common.player": "Player",
            "common.playnow": "Play Now",
            "common.popular": "Popular",
            "common.post": "Post",
            "common.winner": "Winner",
            "common.privatechat": "Private Chat",
            "common.prize": "Prize",
            "common.profit": "Profit",
            "common.profitamount": "Profit Amount",
            "common.promotion": "Promotions",
            "common.publickey": "Public key",
            "common.show_blocked": "Show Blocked",
            "common.random": "Random",
            "common.ratings": "Ratings",
            "common.real_play": "Real Play",
            "common.received_gift": "You\u2019ve received a gift",
            "common.recommend": "Recommended",
            "common.reel.design": "Reel design",
            "common.references": "References",
            "common.refresh": "Refresh",
            "common.refresh_now": "Refresh now",
            "common.register_grab": "Register and grab it",
            "common.sign_claim": "Sign up to Claim",
            "common.release": "Release:",
            "common.report": "Report",
            "common.required": "Required",
            "common.reset": "Reset",
            "common.result": "Result",
            "common.results": "Results",
            "common.reviews": "Reviews",
            "common.reson": "Reason",
            "common.risk": "Risk",
            "common.round": "Round",
            "common.rows": "Row",
            "common.cash": "Cash",
            "common.retry_in": "Re-try in",
            "common.salt": "Salt",
            "common.seconds": "Seconds",
            "common.security_code": "Security Code",
            "common.security_rules": "Security Rules",
            "common.seed": "Seed",
            "common.get": "Get",
            "common.all.providers": "All Providers",
            "common.in_bonus": "In Bonus",
            "common.send": "Send",
            "common.sendgift": "Send Gift",
            "common.server_seed": "Server Seed",
            "common.server_seed_hash": "Server Seed (hash)",
            "common.setseed": "Seed Settings",
            "common.share": "Try your luck to Win 1 Free Bitcoin!",
            "common.share_with": "Or Share With",
            "common.share_lottery": "Or share with social media",
            "common.show_less": "Show less",
            "common.show_more": "Show more",
            "common.show_all": "Show all",
            "common.signup.desc1": 'Sign Up & <span class="cl-primary">Get</span> Reward',
            "common.signup.desc10": "Deposit bonus up to ${0}",
            "common.signup.desc1_sub": "Up to",
            "common.signup.desc3": "Sign Up Now",
            "common.signup.desc5": "Unlock exclusive <span>VIP</span> rewards at {0}!",
            "common.signup.desc6": "Only in the VIP club",
            "common.signup.desc7": "Sign up",
            "common.signup.desc8": "Learn More",
            "common.signup.desc_new": "<span>Register</span> now to instantly redeem a <span>{0}</span> deposit bonus!",
            "common.signup_deposit": "Sign Up & Deposit",
            "common.slots": "Slots",
            "common.popular.slots": "Popular in Slots",
            "common.popular.games": "Popular Games",
            "common.top_picks": "Top Picks",
            "common.sort_by": "Sort by",
            "common.sound": "Sound",
            "common.spin": "Spin",
            "common.daily.contest": "Daily Contest",
            "common.done": "Done",
            "common.split_succeeded": "Split succeeded",
            "common.sponsorship": "Sponsorship",
            "common.sponsorships": "Sponsorships",
            "common.sports": "Sports",
            "common.sports.live": "Live Sports",
            "common.stakes.range": "Stakes Range",
            "common.start_auto_bet": "Start Auto Bet",
            "common.stop.on.lose": "Stop on lose",
            "common.stop.on.win": "Stop on win",
            "common.stop_auto_bet": "Stop Auto Bet",
            "common.stranger": "Stranger",
            "common.submit": "Submit",
            "common.submit_complaint": "Submit a complaint",
            "common.tagname.animals": "Animals",
            "common.tagname.ancient": "Ancient",
            "common.tagname.adventure": "Adventure",
            "common.tagname.egyptian": "Egyptian",
            "common.tagname.fruits": "Fruits",
            "common.tagname.space": "Space",
            "common.tagname.nature": "Nature",
            "common.tagname.oriental": "Oriental",
            "common.tagname.pirates": "Pirates",
            "common.tagname.gods": "Gods",
            "common.tagname.festival": "Festival",
            "common.table.games": "Table Games",
            "common.table_game": "Table Game",
            "common.task": "Quest",
            "common.task.reward": "Quest Reward",
            "common.tasks": "Quests",
            "common.time": "Time",
            "common.top": "Top",
            "common.recent.bonus": "Recent Bonus",
            "common.theme": "Theme",
            "common.title.about_bcbrand": "About BC Originals",
            "common.title.bcbrand": "BC Originals",
            "common.title.recent": "Recent",
            "common.title.bigwin": "Recent Big Wins",
            "common.title.refer": "Refer and Earn",
            "common.title.activity": "BC Anniversary",
            "common.title.activity.title1": "Exploration & Riches Await!",
            "common.title.deposit": "deposit",
            "common.top_winner": "Top Winner",
            "common.total": "Total",
            "common.trending_coins": "Trending Coins",
            "common.select.date": "Select Date",
            "common.totalbet": "Total Bet",
            "common.total_profit": "Total profit",
            "common.transaction": "Transaction",
            "common.trends": "Trends",
            "common.turbo.bet": "Turbo bet",
            "common.type": "Type",
            "common.unblock": "Unblock",
            "common.undo": "Undo",
            "common.user_id": "User ID",
            "common.validate": "Validate",
            "common.verify": "Verify",
            "common.hallowee": "Happy Halloween",
            "common.verify.client_filelist": "All Tickets List File",
            "common.verify.client_hash": "Client Seed (Hashed)",
            "common.verify.client_hash.holder": "Reveal after Client Seed Block generated",
            "common.verify.client_hash.tit": "Target block of ETH blockchain",
            "common.verify.client_seed": "Client Seed Block",
            "common.verify.client_seed.holder": "Reveal when the 20th block after the stop block is generated",
            "common.verify.client_seed.tit": "The ETH blockchain height after 10 blocks from stop block",
            "common.verify.server_seed.desc": "SHA-256 of server seed",
            "common.verify.server_seed.holder": "Reveal after draw",
            "common.verify.server_seed.tit": "A server randomly generated string",
            "common.verify.stop_block": "Stop Block",
            "common.verify.stop_block.holder": "Reveal every day at 15:00 UTC+0",
            "common.verify.stop_block.tit": "The ETH blockchain height at 14:55 UTC+0 of draw date",
            "common.verify_on_github": "Verify on GitHub",
            "common.view_all": "View all",
            "common.view_in_fiat": "View in fiat",
            "common.view_transactions": "View in Transactions",
            "common.view_wallet": "View in Wallet",
            "common.view_contract": "View Contract",
            "common.view_currency": "View Currency",
            "common.view_all_providers": "View All Providers",
            "common.viphost": "Host",
            "common.vip_club": "VIP Club",
            "common.volatility": "Volatility",
            "common.wager": "Wager",
            "common.wagered": "Wagered",
            "common.wagersport": "Sports Wager",
            "common.wager.day": "Wager in the last {0} days",
            "common.welcome.desc1": "Welcome aboard",
            "common.welcome.desc2": "Your VIP Progress",
            "common.welcome.desc3": "Let's build the best Crypto Casino together!",
            "common.welcome.desc4": "Fast & Easy Way to get started",
            "common.welcome.desc5": "<span>300%</span> Deposit Bonus",
            "common.welcome_bonus": "Welcome Bonus",
            "common.welcome_desc6": "Welcome back",
            "common.win.ways": "Win Ways",
            "common.winnerName": "Winner Name",
            "common.win_amount": "Win Amount",
            "common.you_balance": "Your {0} Balance:",
            "common.you_like": "You may like",
            "common.you_message": "Your Message",
            "common.you_received": "You\u2019ve received",
            "common.claim_now": "Claim Now",
            "common.link_invalid": "Link invalid",
            "crash.analysis.continuity": "Longest Combo",
            "crash.analysis.form_rate_label": "Last {0} issue, payout <",
            "crash.analysis.rate": "Multiple",
            "crash.analysis.total": "Number of occurrences",
            "crash.classic": "Classic",
            "crash.common.bet_next": "(Next round)",
            "crash.common.can_next": "(Cancel)",
            "crash.common.escape": "Cash Out",
            "crash.common.won": "You Won",
            "crash.help_trends.tips1": "As shown in the chart, the corresponding sequence is",
            "crash.message.crashed": "Bang",
            "crash.message.nextRoundAt": "Starts in {0}s",
            "crash.message.reconnection": "Reconnecting\u2026",
            "crash.trenball": "Trenball",
            "crash.congrates_msg": "\u{1F389}Congrats {0} won the most!",
            "crash.brust_msg": "\u{1F608}COCO took it all!",
            "degenpass.getpass": "Degen Pass Awarded!",
            "degenpass.getpass.desc": "Congratulations! You\u2019ve been awarded a Degenpass NFT.",
            "degenpass.getpass.viewnft": "View my NFTs",
            "game.bettinginfo": "Betting Info Details",
            "game.blackjack.banker": "Banker",
            "game.blackjack.beginIndex": "Begin Index",
            "game.blackjack.cardId": "Card ID",
            "game.blackjack.cardsList": "Cards Order",
            "game.blackjack.roomNum": "Room Number",
            "game.blackjack.waitGameOver": "Wait for Next Round",
            "game.delayshowseed.cont": "Showing Seed in advance will disclose the order of the entire deck. To avoid that, Seed will be shown at the end of each deck, and after that a new deck will be generated. If there is no operation at the table for over 15 minutes, Seed will also be shown and a new deck will be generated.",
            "game.delayshowseed.tit": "Why delay in showing Seed?",
            "game.dice.rollnow": "Roll Now",
            "game.dice.roll_over": "Roll Over",
            "game.dice.roll_under": "Roll Under",
            "game.dice.winChance": "Win Chance",
            "game.heads": "Heads",
            "game.mines.gems": "Gems",
            "game.mines.mines": "Mines",
            "game.mines.pick": "Pick a Tile Randomly",
            "game.mines.profit_next": "Profit on Next Tile",
            "game.multip": "MULTIPLY",
            "game.rakeback.curt": "Current Rakeback",
            "game.rakeback.percent": "Rakeback {0} for 1 hour",
            "game.rakeback.ready": "Ready in",
            "game.rakeback.refreash_tip": "Refresh every {0} minutes. ",
            "game.series": "SERIES",
            "game.share.game": "Share This Game",
            "game.parity.pontinuous": "Continuous",
            "game.parity.record": "Record",
            "game.parity.probability": "Probability",
            "game.parity.bets": "Place your bets",
            "game.parity.noMoreBets": "No more bets",
            "game.parity.old": "Old",
            "game.parity.new": "New",
            "game.parity.fastParityRecord": "Fast Parity Record",
            "game.parity.parityRecord": "Parity Record",
            "game.parity.times": "rounds",
            "game.parity.won": "YOU WON",
            "game.parity.winningNumber": "WINNING NUMBER",
            "game.parity.period": "Period",
            "game.parity.countdown": "Countdown",
            "game.slots.game_provider": "Game Providers",
            "game.slots.hot_list": "Hot Games",
            "game.slots.recommend_list": "Recommended Games",
            "game.slots.tips": "The selected currency will be displayed in {0}, and if you change currency while playing, the game will refresh and restart.",
            "game.slots.tips.dis_assets": "{0} cannot be used in this game. Please switch to other assets.",
            "game.slots.tips.new.title": "Insufficient {0} balance",
            "game.slots.tips.new": "switch to another asset or deposit to continue playing.",
            "game.slots.tips.error": "{0} can only be used to play Free mode or in BC Originals. Please deposit or switch to other assets.",
            "game.slots.youmay_like": "You May Also Like",
            "game.tails": "Tails",
            "game.title.free.spins": "Lucky Spins",
            "game.title.hit.rate": "Hit Rate",
            "game.title.rtp": "RTP (Return to Player)",
            "game.wheel.segment": "Segment",
            "landing.spin.apple_pay": "with Apple Pay, <br /> Visa or Mastercard",
            "landing.spin.free_spin": "Lucky spin up to",
            "landing.spin.get_bonus": "Get bonuses & have </br> fun!",
            "landing.spin.join": "Join",
            "landing.spin.join_now": "Join Now",
            "landing.spin.our_payment": "Our payment",
            "landing.spin.text.1": '{0} is operated by BlockDance B.V. (Commercial register of Cura\xE7ao no.158182, Emancipatie Boulevard Dominico F. "Don" Martina 31, Cura\xE7ao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ ',
            "landing.spin.with_apple": "WITH APPLE PAY, VISA, MASTERCARD OR CRYPTO",
            "landing.spin.get_bonuses": "Get bonuses & have fun!",
            "landing.spin.our": "OUR PAYMENT METHODS",
            "page.achieve.achieveNum": "Number of Medals",
            "page.achieve.content.1.descript": "Win this precious medal by chatting in any room for a total of 200 days. (Does not need to be continuous 200 days!)",
            "page.achieve.content.1.tit": "Talkative",
            "page.achieve.content.10.descript": "You are the King of the day! Win this medal when you get the maximum number of points on any day in the Roll Competition.",
            "page.achieve.content.10.tit": "Roll King",
            "page.achieve.content.11.descript": "You love to Rain! You have a big heart! Win this medal when the total amount of Rain you\u2019ve sent reaches 100 USD.",
            "page.achieve.content.11.tit": "The Rain Stormer",
            "page.achieve.content.12.descript": "You are the champion! You are in for the Win! Get this prestigious medal when your profit reaches 10,000 USD!",
            "page.achieve.content.12.tit": "Chicken Dinner",
            "page.achieve.content.13.descript": "You are not kidding when you say you love {0}! Your loyalty is the talk of the town! Get this awesome medal when you place over 10,000,000 bets!",
            "page.achieve.content.13.tit": "Loyal Player",
            "page.achieve.content.14.descript": "You are the true Emperor! The Great King! THE RICHMAN! Win this very prestigious medal when your total bet amount reaches 1,000,000 USD.",
            "page.achieve.content.14.tit": "Call Me \u2018Richman\u2019",
            "page.achieve.content.15.descript": "You have seen it all! You have been here a long time! Get this medal when you complete one year on the site! ",
            "page.achieve.content.15.tit": "The Old-Timer",
            "page.achieve.content.16.descript": "You are the boss! The golden heart! You do not hesitate to reward the worthy! Get this medal by giving tip to 99 different people!",
            "page.achieve.content.16.tit": "The Boss",
            "page.achieve.content.17.descript": "Your profit (ATH) on {0} ranked 1st! You did amazing!",
            "page.achieve.content.17.tit": "TOP 1",
            "page.achieve.content.18.descript": "You like competing and staying ahead in the race! Win this master medal by staying on the \u2018Top 3\u2019 ranks in the daily contest for three consecutive days! ",
            "page.achieve.content.18.tit": "Contest Master",
            "page.achieve.content.2.descript": "No one has lost more than you, you have experienced the worst things! You are a tough cookie! Nothing can knock you down the fearless!",
            "page.achieve.content.2.tit": "Fearless One",
            "page.achieve.content.3.descript": "You are rolling in money! Win this bling medal if you have the highest wallet balance ever in the history of {0}! (P.S. Vault balance excluded)",
            "page.achieve.content.3.tit": "The Loaded King",
            "page.achieve.content.4.descript": "You are a true king! The mighty heart! The one with the highest wager ever in the history of {0}!",
            "page.achieve.content.4.tit": "Highest Contributor",
            "page.achieve.content.5.descript": "You are flying amongst the clouds! The one with the highest VIP level achieved! SVIP 33 unlocked!",
            "page.achieve.content.5.tit": "The Top Gun",
            "page.achieve.content.6.descript": "You are a pro at getting drenched in Rain! Get this medal when you receive rain for 99 times!",
            "page.achieve.content.6.tit": "The Rain Master",
            "page.achieve.content.7.descript": "You love {0} so much that you never miss a chance to catch him! Win this love medal when you catch {1} - spider 200 times!",
            "page.achieve.content.7.tit": "{0} Lover",
            "page.achieve.content.8.descript": "You are Luck\u2019s favorite child! The Chosen One! Get this Invincible medal when you win 99,000x or higher payout in any game!",
            "page.achieve.content.8.tit": "Invincible Lucky Dog",
            "page.achieve.content.9.descript": "Get all your betting returns in a month and don't miss any profitable opportunities!",
            "page.achieve.content.9.tit": "Contest Master",
            "page.achieve.delay": "Duration",
            "page.achieve.get": "AWARDED ",
            "page.achieve.jb": "TIP {0} is not included in medal calculation ",
            "page.achieve.unlock.title": "Unlocked",
            "page.achieve.await.title": "Awaiting unlocking",
            "page.achieve.num": "Quantity",
            "page.achieve.prized": " Already Achieved ",
            "page.achieve.prize_content": "<p>Achieve<span class='cl-primary'> 5 </span>medals: Get {0}</p><p>Achieve<span class='cl-primary'> 10 </span>medals: Get {1}</p><p>Achieve<span class='cl-primary'> 15 </span>medals: Get {2}</p><p>Achieve<span class='cl-primary'> 20 </span>medals: Get {3}</p>",
            "page.achieve.staTip": "Stats Updated every 24 hours",
            "page.achieve.unprize": "Sorry! Conditions Not Met!",
            "page.achieve.Wuxian": "Unlimited",
            "page.affiliate.morerule.one": "If you have customized your commission rate, please see your rate here:",
            "page.affiliate.morerule.two": "View my commission rate",
            "page.affiliate.live.rewards": "Live Rewards",
            "page.affiliate.sent.todate": "Total Rewards Sent To-Date",
            "page.affiliate.got.rewards": "Got {0} rewards",
            "page.affiliate.program.learn": "Learn more about our <span>Affiliate program</span>",
            "page.affiliate.program.label1": "If you have a large audience and followers. We have special conditions for you to customize your referral program!",
            "page.affiliate.program.label2": "If you can invite players and their wager amount reaches a billion dollars and above, you will get your own customized casino! You can set up a casino website with your domain and design style.",
            "page.affiliate.more.details": "for more details, please",
            "page.affiliate.questions.title": "Frequently Asked Questions",
            "page.affiliate.referral.code": "Referral Code",
            "page.affiliate.referral.link": "Referral Link",
            "page.affiliate.create.code": "Create another code",
            "page.affiliate.share.code": "Share via social media",
            "page.affiliate.terms.title": "Referral Terms & Conditions",
            "page.affiliate.total.reward": "Total Reward Earned:",
            "page.affiliate.friends.referred": "Total Friends Referred:",
            "page.affiliate.referral.rewards": "Referral Rewards",
            "page.affiliate.see.details": "Please see the details",
            "page.affiliate.rewards.activities": "Rewards Activities",
            "page.affiliate.dashboard.title": "Go to Dashboard",
            "page.affiliate.invite.title": "Invite Friends to Earn",
            "page.affiliate.sign.up": "Sign up & Earn",
            "page.affiliate.big.bonus": "BIG BONUS",
            "page.affiliate.get.referral": "Get your {0} referral rewards",
            "page.affiliate.desc.referral": "Every friend you invite, will get you {0}, the more you invite, the more you will get!",
            "page.affiliate.get.commission": "Get your {0} commission rewards",
            "page.affiliate.desc.commission": "You will receive commission rewards every time your friends place wager based on the games.",
            "page.affiliate.share.title": "Share your referral link and code to your social community",
            "page.affiliate.referral.rule": "Referral Reward Rules",
            "page.affiliate.referral.desc1": "How to Get your Referral Reward",
            "page.affiliate.referral.desc2": "Share your referral link or code to your friends",
            "page.affiliate.referral.desc3": "<span>Share</span> to friends",
            "page.affiliate.referral.desc4": "Your awards will be locked for now",
            "page.affiliate.referral.desc5": "Level Up & <span>Receive!</span>",
            "page.affiliate.referral.desc6": "Your friend\u2019s VIP level will unlock your awards (see rules below)",
            "page.affiliate.referral.desc7": "Unlock Rules",
            "page.affiliate.referral.desc8": "Friend\u2019s Level",
            "page.affiliate.referral.desc9": "Unlock Amount",
            "page.affiliate.commission.desc1": "Commission rate depends on different games:",
            "page.affiliate.commission.desc2": "Of 1% wager",
            "page.affiliate.commission.desc3": "The Original Games",
            "page.affiliate.commission.desc4": "3rd Party Slots, Live Casino",
            "page.affiliate.commission.desc5": "Calculation example: wager 100",
            "page.affiliate.commission.desc6": "If you have any questions regarding our rules, please",
            "page.affiliate.commission.desc7": "In any public environment (for example, universities, schools, libraries, and office spaces), only one commission can be paid to each user, IP address, electronic device, home, phone number, billing method or email address, if the computer and IP address is shared with others.",
            "page.affiliate.commission.desc8": "Our decision to draw a bet will be based entirely on our discretion after a deposit is made and a bet is successfully placed.",
            "page.affiliate.commission.desc9": "Commissions can be withdrawn into our internal {0} wallet from the dashboard at anytime. (View your commission extraction in the dashboard and view the balance in the wallet).",
            "page.affiliate.commission.desc10": "We support the majority of currencies on the market.",
            "page.affiliate.commission.desc11": "The system calculates the commission every 24 hours.",
            "page.affiliate.invitecode.title": "Invite a Friend to Get:",
            "page.affiliate.received": "To be received",
            "page.affiliate.question.label1": "How does the referral system work?",
            "page.affiliate.question.answer1": "When you share your referral link with any of your friends, family or advertise the link and a player signup at our site that player becomes your referral and they will earn you commissions & extra rewards by playing at {0}.",
            "page.affiliate.question.label2": "How much can I earn from my referral?",
            "page.affiliate.question.answer2": "You can earn 25% of their wager + {0} per referral.",
            "page.affiliate.question.label3": "What is USD reward and how does it work?",
            "page.affiliate.question.answer3": "There is {0} USD reward for each referral you bring to {1} This USD reward is given in 10 parts when your referral level up from VIP4 til VIP 70.",
            "page.affiliate.question.label4": "Are there any banners I can use to advertise?",
            "page.affiliate.question.answer4": "Yes, we offer multiple banner sizes for your convenience.",
            "page.affiliate.question.label5": "I have big audience how I can get special deals?",
            "page.affiliate.question.answer5": "If you have a website with good traffic or social media account with big audience you can connect with us at {0} for special deals.",
            "page.affiliate.question.label6": "How many affiliate links can I create if I have different websites/accounts?",
            "page.affiliate.question.answer6": "You can create up to 20 unique codes for different source of traffic.",
            "page.affiliate.question.label7": "Can I see the data of my referral?",
            "page.affiliate.question.answer7": "Yes, {0} believes in total transparency and offer all data to the users like username, wager they have done, commissions you made, when they registered, which of your link they used. All in your {1}.",
            "page.affiliate.question.label8": "Can I send tip or reward to my referrals?",
            "page.affiliate.question.answer8": "Yes, you can send your referrals tip in any supported coins.",
            "page.app.download.option1": "For iOS Setup",
            "page.app.download.option2": "For Android Setup",
            "page.app.download.title": "{0} APP Setup",
            "page.autobet.run_script": "Run Script",
            "page.autobet.run_warning": "Please note that enabling computer sleep mode, shutdown and switching mobile phone to the background may affect normal functioning of the script.",
            "page.autobet.script_content": "Script Content",
            "page.autobet.script_name": "Script Name",
            "page.autobet.warning": "Use of script is optional and players must take full responsibility for any attendant risks. We will not be held liable in this regard.",
            "page.bingo.tit": "Bingo",
            "page.bingo.tag1": "Buy Extra Ball Feature",
            "page.bingo.tag2": "Jackpot",
            "page.bingo.tag3": "All Bingo Games",
            "page.bingo.tag4": "New Release",
            "page.bingo.tag5": "Keno",
            "page.bingo.tag6": "Scratch Cards",
            "page.bingo.tag7": "Play Online Bingo",
            "page.bcd.about": "About {0}",
            "page.bcd.canbcd": "Can BCD be exchanged to any other currency?",
            "page.bcd.canbcd.info": "Absolutely! You can swap BCD with {0} into other currencies at any time.",
            "page.bcd.checkwallet": "Please Check your wallet",
            "page.bcd.dep1": "1st Deposit Bonus",
            "page.bcd.dep2": "2nd Deposit Bonus",
            "page.bcd.dep2_desc": "A second deposit bonus of {0}(up to {1}BCD) awaits you with your second deposit into the world's best Crypto Casino! Don\u2019t wait and enjoy more crypto gambling fun now!",
            "page.bcd.dep3": "3rd Deposit Bonus",
            "page.bcd.dep3_desc": "Yes! Another {0}(up to {1}BCD) deposit bonus just for you! All you have to do is make a minimum deposit to earn a bonus like no deposit bonus offered anywhere else! Deposit now to win!",
            "page.bcd.dep4": "4th Deposit Bonus",
            "page.bcd.dep4_desc": "Wowzer! A special gift from COCO! A {0}(up to {1}BCD) fourth deposit bonus! Almost unheard of in the Crypto gambling space. Don\u2019t wait take advantage of this Crypto Casino deposit bonus and win big!",
            "page.bcd.deposit_now": "Deposit Now",
            "page.bcd.end_time": "Available for",
            "page.bcd.getdeposit_bonus": "Get your {0} deposit bonus",
            "page.bcd.getbonus": "Get {0} Bonus",
            "page.bcd.minimum.claim": "Minimum to claim",
            "page.bcd.getbcd": "How to claim unlocked {0}?",
            "page.bcd.wager.unlock": "You still need to wager about {0} more in order to reach minimum unlockable amount of {1}",
            "page.bcd.getbcd.info": "As you wager, your {0} treasure box will be filled with unlocked {1}.",
            "page.bcd.getbcd.info2": "Once you fill your treasure box with a minimum of {0}, click \u2018claim\u2019 and the unlocked {1} will be transferred directly to your {2} balance. ",
            "page.bcd.getbcd.info3": "That\u2019s it! Your {0} is now immediately available to use! ",
            "page.bcd.got_bcd": "Your Deposit Bonus of {0} {1} has been credited to your {2} Unlock.",
            "page.bcd.howUnlock": "How to unlock",
            "page.bcd.howClaim": "How to claim",
            "page.bcd.howtoUnlock&claim": "How to unlock & claim {0}?",
            "page.bcd.mindeposit": "Minimum Deposit {0}",
            "page.bcd.min.required": "Minimum required to claim :",
            "page.bcd.minute": "Minute",
            "page.bcd.new.tip": "Get extra {0} bonus on minimum of {0} deposit",
            "page.bcd.release": "How to unlock {0}?",
            "page.bcd.release.amount": "Unlock amount = wager amount",
            "page.bcd.release.info": "Locked {0} is obtained through certain bonuses, such as deposit bonus and lucky spin.",
            "page.bcd.release.info_2": "Unlocking {0} is easy! It\u2019s essentially the same as rakeback & will unlock proportionally through wager.",
            "page.bcd.rule1": "The most exciting part of plating at a Crypto Casino is the bonuses on offer! {0}, the leading Crypto gambling platform in the world offers you, our loyal players, not 1 but 4 rewarding deposit bonuses.",
            "page.bcd.rule2": "The best part about having 4 bonuses is that you can enjoy Crypto gambling online with some help from the friendliest and most rewarding Crypto Casino out there! There is no deposit bonus like that of {0} with a whopping total of {1}% deposit match.",
            "page.bcd.rule3": "Not only is this the perfect time to make extra Crypto but it is your opportunity to get hold of some of our very own Crypto coins, BC Dollar (BCD) You will be rewarded with BCD for your deposits to use at your discretion.",
            "page.bcd.second": "Second",
            "page.bcd.special": "What is special about BCD?",
            "page.bcd.special.info": "You can enjoy up to 10% annualized rate of return when you store your BCD in {0}. So enjoy collecting BCD!",
            "page.bcd.title.big": "{0} Bonus",
            "page.bcd.deposit.rules": "Deposit Bonus Rules",
            "page.bcd.wager": "Wager to unlock {0}",
            "page.bcd.wager.getmore": "Wager to get more!",
            "page.bcd.wager.minimum": "You have to accumulate minimum {0} to claim",
            "page.bcd.wager_unlock": "You need wager {0} in order to unlock all your {1} BCD",
            "page.bcd.whatis": "What is BCD?",
            "page.bcd.whatis.info": "BCD (BC Dollar) is a special currency launched by {0}.  You can play games, tip, coindrop, and rain with BCD.",
            "page.bcd.youget": "Congrats! You get",
            "page.jb.whatis": "What is JB?",
            "page.bcl.gift": "Can I gift BCL to others?",
            "page.bcl.gift_desc": "Of course, you can send BCL to other players through the Tip function. Also, you can generate a Gift {0} to share the BCL transfer link to social platforms or messaging apps.",
            "page.bcl.howto": "How to get BCL?",
            "page.bcl.howto_desc": "You can exchange BCL through {0} at any time, or you may receive BCL from the {1} official community or other players through Gift Link, Swap BCL to other coin is not supported.",
            "page.bcl.whatis": "What is BCL?",
            "page.bcl.whatis_desc": "BCL (BC Lottery) is a token created by {0} for players who love the Lottery. You can use BCL to redeem lottery tickets in the {1} at any time, 1 BCL for every one lottery ticket",
            "page.brand.text_2": "BC Originals is the foundation of {0} casino-- the original casino games that formed the backbone of the {1} platform and provides a fantastic selection of games for players to bet on.",
            "page.brand.text_4": "Every BC Originals casino games is 'Provably fair,' helping ensure a safe, secure, and fair online gaming experience on the {0} Crypto gambling platform. They all take advantage of the BC Originals casino platform for players to gamble on casino games online directly in their browser using Bitcoin or the available currency of their choice.",
            "page.brand.title_4": "The original {0} are exquisitely designed based on the experience of their players. These games are created by the BC Originals, which provides a wide selection of casino games that are secure and safe to play on the web. The BC Originals casino platform allows players to play casino games using their choice of currency.",
            "page.bonus.task.desc1": "<span>More bonuses</span> await you!",
            "page.bonus.task.desc2": "Check out these easy quests below.",
            "page.bonus.task.desc3": "Click here to open your bonus quests progress.",
            "page.bonus.task.completed": "Task completed",
            "page.bonus.newbie_task.complete": "Complete Newbie Quest",
            "page.bonus.newbie_task.tit": "Newbie Quest Bonus",
            "page.bonus.newbie_task.total_case_bonus": "Total Cash Bonus",
            "page.bonus.newbie_task.wager_requirments": "Wager Requirements",
            "page.bonus.recent.activities": "Recent Activities",
            "page.bonus.welcome_lottery": "Welcome Lottery Bonus",
            "page.bonus.deposit_lottery": "Deposit Lottery Bonus",
            "page.bonus.cash": "Cash Bonus",
            "page.bonus.check": "Check in My Bonus",
            "page.bonus.cancel": "Cancel Bonus",
            "page.bonus.cancel.tit": "Cancel This Bonus",
            "page.bonus.cancel.desc": "{0} bonus money will be lost and you will not be able to claim this bonus again. Your balance will be {1} after removing this bonus.",
            "page.bonus.games_for": "Games for bonus",
            "page.bonus.games_for.desc": "Choose any of the games to spend your bonus money to earn more!",
            "page.bonus.games_for_deposit": "Games for Deposit bonus",
            "page.bonus.games_for_deposit.desc": "Choose any of the games to spend your bonus money to earn more!",
            "page.bonus.dis_ip": "Oh no! It appears somebody has already opened an account on your device/IP",
            "page.bonus.dis_ip.desc": "Unfortunately, you are not eligible to receive the welcome reward, but don\u2019t worry there are more rewards to come!",
            "page.bonnus.keep": "Keep Bonus",
            "page.bonus.canceled": "Bonus Canceled",
            "page.bonus.sports.weekly": "Sports Weekly Bonus",
            "page.bonus.levelup": "Level Up Bonus",
            "page.bonus.general.bonus": "General Bonus",
            "page.bonus.vip.bonus": "<span>VIP</span> Bonus",
            "page.bonus.special.bonus": "Special Bonus",
            "page.bonus.quest.complete": "Quest Completed",
            "page.bonus.history": "Bonus History",
            "page.bonus.spin.ready": "Spin Ready",
            "page.bonus.roll.ready": "Roll Ready",
            "page.bonus.rakeback.ready": "Rakeback Ready",
            "page.bonus.recharge.ready": "Recharge Ready",
            "page.bonus.in.progress": "Bonus In Progress",
            "page.bonus.view.quests": "View Quests",
            "page.bonus.complete.quests": "Complete Quests",
            "page.bonus.free.roll": "Free Roll",
            "page.bonus.dashboard": "Bonus Dashboard",
            "page.bonus.ready": "Bonus Ready",
            "page.bonus.claim": "Claim Bonus",
            "page.bonus.rewards_claimed": "Rewards Claimed",
            "page.bonus.exclusive": "{0} exclusive",
            "page.bonus.collection": "Bonus Collection",
            "page.bonus.collection.desc": "Generous bonuses are ready! Come and find your treasure!",
            "page.bonus.available": "Available at:",
            "page.bonus.available.vip": "Available at VIP 22",
            "page.bonus.received.total": "Total Bonus Received",
            "page.bonus.montly.rule1": "The Monthly Cashback is a personalized bonus based on your recent activity.",
            "page.bonus.montly.rule2": "We aim to drop Monthly Cashback every 15th of the month.",
            "page.bonus.quests.rule": "Keep completing Quests and earning more rewards.",
            "page.bonus.rakeback.rule1": "Ready every 30 minutes.",
            "page.bonus.rakeback.rule2": "Rakeback percentage increases as your VIP level increases.",
            "page.bonus.recharge.rule": "If you have wagered a minimum of {0} in the past 7 days (24/7). Once activated, your Recharge will be redeemable for the next 7 days.",
            "page.bonus.roll.rule1": "Rolling rules:",
            "page.bonus.roll.rule2": "Each player has one chance to roll every 24 hours.",
            "page.bonus.roll.rule3": "Prizes are drawn at 2:10 (UTC+0) every day.",
            "page.bonus.roll.rule4": "The points of ROLL are from 0-999, 0 is the smallest, and 999 is the largest. Every day we will list the top 10 players in descending order from largest to smallest for rewards.",
            "page.bonus.roll.rule5": "If the same points are rolled by different players at the same time, the ranking will be determined by time.",
            "page.bonus.spin.new.rule": "Lucky spin bonus! Get up to 5 BTC.",
            "page.bonus.unlock.rule1": "Locked BCD/Fiat is obtained through certain bonuses, such as deposit bonus and lucky spin.",
            "page.bonus.unlock.rule2": "Unlocking BCD/Fiat is easy! It\u2019s essentially the same as rakeback & will be unlocked proportionally by wagering.",
            "page.bonus.weekly.rule1": "The Weekly Cashback is a personalized bonus based on your recent activity.",
            "page.bonus.weekly.rule2": "We aim to drop Weekly Cashback every Friday.",
            "page.bonus.sports.rule1": "7d Sports Wager:",
            "page.bonus.sports.rule2": "Wager period Saturday 00:00 hrs ~ Friday 23:59hrs (7days)",
            "page.bonus.sports.rule3": "We aim to drop Weekly Bonus every Saturday.",
            "page.bonus.notify.withdrawal.progress": "Withdrawal is in progress.",
            "page.bonus.notify.withdrawal.success": "You have successfully withdrawn {0}.",
            "page.bonus.notify.withdrawal.fail": "Withdrawal failed. {0} has been returned to your balance.",
            "page.bonus.notify.withdrawal.success.title": "Withdrawal Successful",
            "page.bonus.notify.forum.tip": "Forum Tip",
            "page.bonus.nologin.top.desc1": "Unlock <span>endless</span> benefits",
            "page.bonus.nologin.top.desc2": "Join now and embark on an exhilarating journey of luck and reward!",
            "page.bonus.nologin.top.desc3": "Reach new heights with our Level-Up Bonus",
            "page.bonus.nologin.top.desc4": "Schedule your Recharge bonuses by your choice",
            "page.bonus.nologin.top.desc5": "Weekly & monthly cashback",
            "page.bonus.nologin.top.desc6": "Power up with captivating weekly and monthly bonuses",
            "page.bonus.nologin.top.desc7": "Join {0} Now",
            "page.bonus.nologin.step.desc1": "Sign up & make a deposit",
            "page.bonus.nologin.step.desc2": "Play your fav games",
            "page.bonus.nologin.step.desc3": "Increase your VIP levels",
            "page.bonus.nologin.step.desc4": "Discover {0}\u2019s exceptional Deposit Bonus",
            "page.bonus.nologin.step.desc5": "We are unique in a way that you can see your initial deposit bonus right away and offers an 180% bonus for your first deposit!",
            "page.bonus.nologin.step.desc6": "Claim Your Deposit Bonus",
            "page.bonus.nologin.step.desc7": "Reach new heights with our Level Up bonus",
            "page.bonus.nologin.step.desc8": "Empower your finances today and boost your balance like never before with surprising rewards that will be unlocked multiple times as you level up.",
            "page.bonus.nologin.step.desc9": "Unlock Level-up Bonus",
            "page.bonus.nologin.step.desc10": "Maximize the Potential of BCD/FIAT Rakeback",
            "page.bonus.nologin.step.desc11": "Earn locked BCD/Fiat through bonuses and effortlessly unlock its potential by wagering in your preferred way. Claim it directly to your balance!",
            "page.bonus.nologin.step.desc12": "How to Unlock Rakeback?",
            "page.bonus.nologin.midden.desc1": "Get a lot of <span>free</span> perks",
            "page.bonus.nologin.midden.desc2": "Every Day & Week",
            "page.bonus.nologin.midden.desc3": "Conquer daily and weekly quests while amassing and snowballing your earnings!",
            "page.bonus.nologin.midden.desc4": "Every Day",
            "page.bonus.nologin.midden.desc5": "Free Lucky Spins",
            "page.bonus.nologin.midden.desc6": "Spin and win your daily opportunity to bag up to 5 BTC - the ultimate thrill in every roll!",
            "page.bonus.nologin.midden.desc7": "Free roll competitions",
            "page.bonus.nologin.midden.desc8": "The earlier you get the same score, the higher you rank - let the game begin!",
            "page.bonus.nologin.midden.desc9": "Introducing Our Very Own <span>Recharge</span> Cashback",
            "page.bonus.nologin.midden.desc10": "Immerse yourself in the exhilarating world of Recharge, where the power is in your hands. Join {0} and customize your reward.",
            "page.bonus.nologin.midden.desc11": "Join {0} Today",
            "page.bonus.nologin.midden.desc12": "Journey towards Recharge Activation as you strive to reach VIP level 22 and beyond.",
            "page.bonus.nologin.midden.desc13": "Recharge at your pace",
            "page.bonus.nologin.midden.desc14": "Claim bonuses every 10 mins, hourly or daily",
            "page.bonus.nologin.midden.desc15": "Recharge Reward Tiers",
            "page.bonus.nologin.midden.desc16": "Snowball your rewards as you wager and climb from Tier 1 to Tier 4",
            "page.bonus.nologin.bottom.desc1": "Wait. We have <span>more</span> benefits for you!",
            "page.bonus.nologin.bottom.desc2": "Catch Coco for surprising rewards!",
            "page.bonus.nologin.bottom.desc3": "Catch the fleeting COCO spider every 6 hours on our page and earn exclusive BCD/Fiat rewards based on your VIP level.",
            "page.bonus.nologin.bottom.desc4": "Win with {0} Lottery",
            "page.bonus.nologin.bottom.desc5": "Experience provably fair gaming and let your lucky numbers do the magic. Don't wait, jump in and try your luck!",
            "page.bonus.nologin.bottom.desc6": "Wait for Coin-Drop and Chat Rain",
            "page.bonus.nologin.bottom.desc7": "Engage, chat, and seize spontaneous rewards with Constant Chat Rains and Coin-Drops\u2014be active, quick, and earn free coins.",
            "page.bonus.nologin.bottom.desc8": "We are proud to provide you with the most luxurious gaming experience",
            "page.bonus.dashboard.title1": "Total Bonus Claimed",
            "page.bonus.dashboard.title2": "Total VIP Bonus",
            "page.bonus.dashboard.title3": "Total Special Bonus",
            "page.bonus.dashboard.title4": "Total General Bonus",
            "page.bonus.dashboard.title5": "Bonus Categories",
            "page.bonus.dashboard.title6": "Bonus Details",
            "page.bonus.dashboard.title7": "Bonus Transactions",
            "page.bonus.dashboard.title8": "Bonus Type",
            "page.bonus.dashboard.title9": "Amount Claimed",
            "page.bonus.dashboard.title10": "All bonuses",
            "page.bonus.dashboard.title11": "Only the latest 60 days transactions will be displayed below.",
            "page.bonus.quests.desc1": "Complete daily and weekly quests",
            "page.bonus.spin.desc1": "Receive rewards up to 5 BTC",
            "page.bonus.roll.desc1": "Free roll every 24 hours",
            "page.bonus.roll.desc2": "No Available Roll",
            "page.bonus.rewards.desc1": "Extra rewards as your wager",
            "page.bonus.rewards.desc2": "Min to claim",
            "page.bonus.rewards.desc3": "Ready to claim",
            "page.bonus.rewards.desc4": "The last weekly bonus",
            "page.bonus.rewards.desc5": "The last monthly bonus",
            "page.bonus.wager.desc1": "Wager required",
            "page.bonus.cashback.desc1": "Receive every Friday",
            "page.bonus.cashback.desc2": "Receive every Saturday",
            "page.bonus.cashback.desc3": "Receive every 15th of the month",
            "page.bonus.wager.desc2": "You\u2019ve got free money to bet on our games!",
            "page.bonus.balance": "Bonus Balance",
            "page.bonus.wager_requirements": "Wager Requirements",
            "page.bonus.limited_game": "Limited to Game",
            "page.bonus.see_games": "See Games",
            "page.bonus.lucky_spin_bonus": "{0} Lucky Spin Bonus",
            "page.bonus.free_spin": "Free Spin",
            "page.bonus.free_spin_winnings": "Free Spin Winnings",
            "page.bonus.free_spin.claimed": "{0} Free Spin Claimed",
            "page.bonus.received_at": "Received at {0}",
            "page.bonus.spins_avaiblable": "Spins available",
            "page.bonus.wager_req": "Wager Req",
            "page.bonus.activate_in": "Activate in",
            "page.bonus.spin.tit": "There are two ways to get the lucky spin:",
            "page.bonus.spin.subtit": "You will receive 1 free spin every day once you reach a specific wager amount",
            "page.bonus.spin.subtit2": "Starting from VIP level 8, you will receive one free spin each time you level up, and there is no limit to the number of spins you can earn.",
            "page.bonus.spin_daily": "Daily Spin",
            "page.bonus.spin_vip": "VIP Spin",
            "page.bonus.daiy_expires": "Daily Wager Expires in",
            "page.bonus.maximum_withdraw": "Maximum withdraw",
            "page.bonus.go_play": "Go Play",
            "page.bonus.on_going": "Ongoing",
            "page.bonus.lottery_tickets": "Lottery Tickets",
            "page.bonus.tickets_redeemd": "Tickets Redeemed",
            "page.bonus.next.redeem_in": "Next Redeem in",
            "page.bonus.end.desc": "Rakeback will no longer be available after <span>October 20th</span>. We kindly encourage you unlocking remaining locked {0} at your earliest convenience.",
            "page.newuser.title1": "Claim your Deposit Bonus below!",
            "page.newuser.title2": "Deposit more to get more bonuses.",
            "page.newuser.title3": "You can only redeem <b>1 ticket per day.</b>",
            "page.newuser.title4": "You can only claim <b>20 free spin per day for 5 days.</b>",
            "page.newuser.title6": "Use this bonus money to play games now!",
            "page.casino.affiliate_dashboard": "Affiliate Dashboard",
            "page.newuser.title5": "You can claim {0} FS per day for {1} days in a row in total {2} free spins.",
            "page.casino.commission": "Commission",
            "page.casino.contactus": "Contact Us",
            "page.casino.dialog.reward": "Reward",
            "page.casino.dialog.rewards": "Rewards",
            "page.casino.dialog.total_wager": "Total Wager",
            "page.casino.extra": "Extra",
            "page.casino.home_desc": "Dive into our in-house games, live casino and slots",
            "page.casino.home_desc2": "Now back your favourite team and bet on over 80 sports, including Football, Cricket, NFL, eSports & more!",
            "page.casino.my_casino": "My Referral",
            "page.casino.noting": "No info yet {0} Invite friends to join you now!",
            "page.casino.received": "Received",
            "page.casino.rewards.system.commission.rules": "Commission Reward Rules",
            "page.casino.rewards.system.commission.title": "Commission Rewards",
            "page.casino.rules": "Rules",
            "page.casion.affiliate.tit_1": "The website is supported by the {0} prediction platform. Platform games include Crash, Classic Dice and so on.",
            "page.casion.affiliate.tit_11": "8. Warranties",
            "page.casion.affiliate.tit_11.cont_1": '8.1. The Affiliate expressly acknowledges and agrees that the use of the Internet is at its own risk and that this affiliate program is provided "as is" and "as available" without any warranties or conditions whatsoever, even if expressed or implied. No guarantee is made that it will make access to its website possible at any particular time or any particular location.',
            "page.casion.affiliate.tit_11.cont_2": "8.2. The Company shall in no event be liable to the Affiliate or anyone else for any inaccuracy, error or omission in, or loss, injury or damage caused in whole or in part by failures, delays or interruptions of the {0} website or the affiliate program.",
            "page.casion.affiliate.tit_12": "9.1. The Affiliate agrees to defend, indemnify and hold the Company and its affiliates, successors, officers, employees, agents, directors, shareholders and attorneys, free and harmless from and against any and all claims and liabilities, including reasonable attorneys' and experts' fees, related to or arising from:",
            "page.casion.affiliate.tit_12.cont_1": "a) Any breach of the Affiliate's representations, warranties or covenants under this Agreement.",
            "page.casion.affiliate.tit_12.cont_2": "b) The Affiliate's use (or misuse) of the marketing materials.",
            "page.casion.affiliate.tit_12.cont_3": "c) All conduct and activities occurring under the Affiliate's user ID and password.",
            "page.casion.affiliate.tit_12.cont_4": "d) Any defamatory, libelous or illegal material contained within the Affiliate\u2019s website or as part of the Affiliate's information and data.",
            "page.casion.affiliate.tit_12.cont_5": "e) Any claim or contention that the Affiliate\u2019s website or the Affiliate's information and data infringes any third party's patent, copyright, trademark, or other intellectual property rights or violates any third party's rights of privacy or publicity.",
            "page.casion.affiliate.tit_12.cont_6": "f) Third party access or use of the Affiliate\u2019s website or to the Affiliate's information and data.",
            "page.casion.affiliate.tit_12.cont_7": "g) Any claim related to the Affiliate website.",
            "page.casion.affiliate.tit_12.cont_8": "h) Any violation of this Agreement.",
            "page.casion.affiliate.tit_13": "9.2. The Company reserves the right to participate, at its own expense in the defense of any matter.",
            "page.casion.affiliate.tit_14": "10. Company Rights",
            "page.casion.affiliate.tit_15": "10.1. In order to comply with company or {0} policies, and to protect the company or {1}'s interests, the company or {2} can reject any player or close the player account.",
            "page.casion.affiliate.tit_15.cont_1": "10.2. The Company may refuse any applicant and/or may close any Affiliate\u2019s account if it is necessary to comply with the Company's policy and/or protect the interest of the Company. If the Affiliate is in breach of this Agreement or the Company\u2019s Terms or other rules, policies and guidelines of the Company, the Company may besides closing the Affiliate\u2019s account take any other steps in law to protect its interests.",
            "page.casion.affiliate.tit_16": "11. Commission structure",
            "page.casion.affiliate.tit_16.cont_1": `11.1. The commission settled to the agent is a percentage of the game betting amount.The exact commission structure is part of this agreement. For details, see the "commission rules" clause.In this case, the Commission is withdrawn to the player's platform wallet (digital currency), but not directly to other addresses.`,
            "page.casion.affiliate.tit_17": "12. Assignment",
            "page.casion.affiliate.tit_17.cont_1": "12.1. The Affiliate may not assign this Agreement, by operation of law or otherwise, without obtaining the prior written consent of the Company. In the event that the affiliate acquires or otherwise obtains control of another affiliate of {0}, then accounts will coexist on individual terms.",
            "page.casion.affiliate.tit_17.cont_2": "12.2. The Company may assign this Agreement, by operation of the law or otherwise, at any time without obtaining the prior consent of the Affiliate.",
            "page.casion.affiliate.tit_18": "13. Non-Waiver",
            "page.casion.affiliate.tit_18.cont_1": "13.1. The Company's failure to enforce the Affiliate's adherence to the Terms outlined in this Agreement shall not constitute a waiver of the right of the Company to enforce said terms at any time.",
            "page.casion.affiliate.tit_19": "14. Force Majeure",
            "page.casion.affiliate.tit_19.cont_1": "14.1. Neither party shall be liable to the other for any delay or failure to perform its obligations under this Agreement if such delay or failure arises from a cause beyond the reasonable control of and is not the fault of such party, including but not limited to labour disputes, strikes, industrial disturbances, acts of God, acts of terrorism, floods, lightning, utility or communications failures, earthquakes or other casualty. If a force majeure event occurs, the non-performing party is excused from whatever performance is prevented by the force majeure event to the extent prevented. Provided that, if the force majeure event subsists for a period exceeding thirty (30) days then either party may terminate the Agreement without notice.",
            "page.casion.affiliate.tit_1a": "15. Relationship of the Parties",
            "page.casion.affiliate.tit_1a.cont_1": "15.1. Nothing contained in this Agreement, nor any action taken by any party to this Agreement, shall be deemed to constitute either party (or any of such party's employees, agents, or representatives) an employee, or legal representative of the other party, nor to create any partnership, joint venture, association, or syndication among or between the parties, nor to confer on either party any express or implied right, power or authority to enter into any Agreement or commitment on behalf of (nor to impose any obligation upon) the other party.",
            "page.casion.affiliate.tit_1b": "16. Severability/Waiver",
            "page.casion.affiliate.tit_1b.cont_1": "16.1. Whenever possible, each provision of this Agreement shall be interpreted in such a manner as to be effective and valid under applicable law but, if any provision of this Agreement is held to be invalid, illegal or unenforceable in any respect, such provision will be ineffective only to the extent of such invalidity, or unenforceability, without invalidating the remainder of this Agreement. No waiver will be implied from conduct or failure to enforce any rights and must be in writing to be effective.",
            "page.casion.affiliate.tit_1c": "17. Confidentiality",
            "page.casion.affiliate.tit_1c.cont_1": "17.1. All information, including but not limited to business and financial, lists of customers and buyers, as well as price and sales information and any information relating to products, records, operations, business plans, processes, product information, business know-how or logic, trade secrets, market opportunities and personal data of the Company shall be treated confidentially. Such information must not be used for own commercial or other purposes or divulged to any person or third party neither directly nor indirectly unless prior explicit and written consent has been provided by the Company. This provision shall survive the termination of this Agreement.",
            "page.casion.affiliate.tit_1c.cont_2": "17.2. The Affiliate obliges himself/herself not to use the confidential information for any purpose other than the performance of its obligations under this Agreement.",
            "page.casion.affiliate.tit_1d": "18. Changes to this Agreement",
            "page.casion.affiliate.tit_1d.cont_1": "18.1. The Company reserves the right to amend, alter, delete or add to any of the provisions of this Agreement, at any time and at its sole discretion, without giving any advance notice to the Affiliate subject to the Terms set out in this Agreement. Any such changes will be published on {0}.",
            "page.casion.affiliate.tit_1d.cont_2": "18.2. In case of any discrepancy between the meanings of any translated versions of this Agreement, the English language version shall prevail.",
            "page.casion.affiliate.tit_1e": "19. Trademarks",
            "page.casion.affiliate.tit_1e.cont": "19.1. Nothing contained in this Agreement will grant either party any right, title or interest in the trademarks, trade names, service marks or other intellectual property rights [hereinafter referred to simply as \u2018Marks\u2019] of the other party. At no time during or after the term will either party attempt or challenge or assist or allow others to challenge or to register or to attempt to register the Marks of the other party or of any company within the group of companies of the other party. Provided also that neither of the parties will register nor attempt to register any Mark which is basically similar to and/or confusingly similar to any Mark which belongs to the other party or to any company contained within the other party\u2019s group of companies. ",
            "page.casion.affiliate.tit_2": 'By completing the {0} Affiliate Program (the "Affiliate Program") application and clicking "I agree to the Terms and Conditions (the \u201CTerms\u201D)\u201D within the registration form, you (hereinafter the "Affiliate") hereby agree to abide by all the terms and conditions set out in this agreement. The commission structure of the "commission rules" is also an integral part of this agreement. {1} reserves the right to amend, alter, delete or extend any provisions of this agreement, at any time and at its sole discretion, without giving any advance notice to the Affiliate subject to the Terms set out in this agreement. You hereby agree to:',
            "page.casion.affiliate.tit_2.cont_1": "1. Participate in the Affiliate Program",
            "page.casion.affiliate.tit_2.cont_2": "2. Use of the {0} affiliate website and/or {1} marketing tools (as hereafter defined).",
            "page.casion.affiliate.tit_2.cont_3": "3. The condition that the acceptance of any affiliate commissions from {0} confirms your irrevocable acceptance of this Agreement and any modifications thereto.",
            "page.casion.affiliate.tit_3": "Therefore you shall be obliged to continuously comply with the Terms of this Agreement as well as to comply with the General Terms and Conditions and Privacy Policy of the website {0}, as well as with any other rules and/or guidelines brought forward from time to time. An Agreement between the Company and the Affiliate comes into effect on the date the affiliate application is approved.",
            "page.casion.affiliate.tit_4": "1. Purpose",
            "page.casion.affiliate.tit_4.cont_1": '1.1. The Affiliate maintains and operates one or more websites on the Internet (hereinafter collectively referred to as "the Website"), and/or refers potential customers through other channels.',
            "page.casion.affiliate.tit_4.cont_2": '1.2. This Agreement governs the terms and conditions which are related to the promotion of the website {0} by the Affiliate, hereinafter referred to as "{1}", whereby the Affiliate will be paid a commission as defined in this Agreement depending on the traffic sent to {1} and the terms of this Agreement.',
            "page.casion.affiliate.tit_4.cont_3": "1.3. The definition of the term Net Gaming Revenue can be found within Article 20 of this Agreement. In case of an introduction of another product, or group of products in the future, {0} reserves the right to use an individual definition of the term Net Gaming Revenue for each product.",
            "page.casion.affiliate.tit_5": "2. Acceptance of an Affiliate",
            "page.casion.affiliate.tit_5.cont_1": "2.1. The Company reserves the right to refuse any registration in its sole and absolute discretion.",
            "page.casion.affiliate.tit_6": "3. Qualifying Conditions",
            "page.casion.affiliate.tit_6.cont_1": "3.1. The Affiliate hereby warrants that he/she:",
            "page.casion.affiliate.tit_6.cont_2": "a) Is of legal age in the applicable jurisdiction in order to agree to and to enter into an Agreement.",
            "page.casion.affiliate.tit_6.cont_3": "b) Is competent and duly authorized to enter into binding Agreements.",
            "page.casion.affiliate.tit_6.cont_4": "c) Is the proprietor of all rights, licences and permits to market, promote and advertise {0} in accordance with the provisions of this Agreement.",
            "page.casion.affiliate.tit_6.cont_5": "d) Will comply with all applicable rules, laws and regulations in correlation with the promotion of {0}.",
            "page.casion.affiliate.tit_6.cont_6": "e) Fully understands and accepts the Terms of the Agreement.",
            "page.casion.affiliate.tit_7": "4. Responsibilities and Obligations of the Company",
            "page.casion.affiliate.tit_7.cont_1": "4.1. The Company shall provide the Affiliate with all required information and marketing material for the implementation of the tracking link.",
            "page.casion.affiliate.tit_7.cont_2": "4.2. The Company shall administrate the turnover generated via the tracking links, record the revenue and the total amount of commission earned via the link, provide the Affiliate with commission statistics, and handle all customer services related to the business. A unique tracking identification code will be assigned to all referred customers.",
            "page.casion.affiliate.tit_7.cont_3": "4.3. The Company shall pay the Affiliate the amount due depending on the traffic generated subject to the Terms of this Agreement.",
            "page.casion.affiliate.tit_8": "5. Responsibilities and Obligations of the Affiliate",
            "page.casion.affiliate.tit_8.cont_1": "5.1. The Affiliate hereby warrants:",
            "page.casion.affiliate.tit_8.cont_2": "a) To use its best efforts to actively and effectively advertise, market and promote {0} as widely as possible in order to maximize the benefit to the parties and to abide by the guidelines of the Company as they may be brought forward from time to time and/or as being published online.",
            "page.casion.affiliate.tit_8.cont_3": "b) To market and refer potential players to {0} at its own cost and expense. The Affiliate will be solely responsible for the distribution, content and manners of its marketing activities. All of the Affiliate's marketing activities must be professional, proper and lawful under applicable laws and must be in accordance with this Agreement.",
            "page.casion.affiliate.tit_8.cont_4": "c) To use only the tracking link provided within the scope of the affiliate program, otherwise no guarantee whatsoever can be given for proper registration and sales accounting. Also, not to change or modify in any way any link or marketing material without prior written authorization from the Company.",
            "page.casion.affiliate.tit_8.cont_5": "d) To be responsible for the development, operation and maintenance of its website as well as for all material appearing on its website.",
            "page.casion.affiliate.tit_9": "5.2. The Affiliate hereby warrants:",
            "page.casion.affiliate.tit_9.cont_1": "a) That it will not perform any act which is libelous, discriminatory, obscene, unlawful or otherwise unsuitable or which contains sexually explicit, pornographic, obscene or graphically violent materials.",
            "page.casion.affiliate.tit_9.cont_2": "b) That it will not actively target any person who is under the legal age for gambling.",
            "page.casion.affiliate.tit_9.cont_3": "c) That it will not actively target any jurisdiction where gambling and the promotion thereof is illegal.",
            "page.casion.affiliate.tit_9.cont_4": "d) That it will not generate traffic to {0} by illegal or fraudulent activity, particularly but not limited to:",
            "page.casion.affiliate.tit_a": "I. Sending spam.",
            "page.casion.affiliate.tit_b": "II. Incorrect metatags.",
            "page.casion.affiliate.tit_c": "III. Registering as a player or making deposits directly or indirectly to any player account through his/her tracker(s) for their own personal use and/or the use of its relatives, friends, employees or other third parties, or in any other way attempt to artificially increase the commission payable or to otherwise defraud the Company. Violation of this provision shall be deemed to be fraud.",
            "page.casion.affiliate.tit_c.cont_1": "e) That it will not present its website in such a way that it might evoke any risk of confusion with {0} and/or the Company and or convey the impression that the website of the contracting party is partly or fully originated with {1} and/or the Company.",
            "page.casion.affiliate.tit_c.cont_2": "f) Without prejudice to the marketing material as may be forwarded by the Company and/or made available online through the website https://{0}/ the affiliate may not use {1} or other terms, trademarks and other intellectual property rights that are vested in the Company unless the Company consents to such use in writing.",
            "page.casion.affiliate.tit_d": "6. Payment",
            "page.casion.affiliate.tit_d.cont_1": "6.1. The Company agrees to pay the Affiliate a commission based on the Game bet amount generated from new customers referred by the Affiliate\u2019s website and/or other channel. New customers are those customers of the Company who do not yet have a gaming account and who access the Website via the tracking link and who properly register and make bitcoin transfers at least equivalent to the minimum deposit into their {0} betting account. The commission shall be deemed to be inclusive of value added tax or any other tax if applicable.",
            "page.casion.affiliate.tit_d.cont_2": '6.2. The commission shall be a percentage of the Game bet amount in accordance with what is set out in the commission structures for the particular product. The calculation is product specific and it is set out in every product-specific commission structure. (see "commission rules" for details)',
            "page.casion.affiliate.tit_d.cont_3": "6.3. Users can withdraw commissions from the agent system at any time. The commissions will be withdrawn into the platform wallet. Users can also withdraw the platform wallet to any address at any time. (you can check the Commission extraction in the agent system and view transaction records in the platform wallet).",
            "page.casion.affiliate.tit_d.cont_4": "6.4. The commissions will be collected in digital currency and will only be received on the platform wallet.When applying for Withdraw, you must submit the correct wallet address on the \u201CWithdraw\u201D page.If there is an error in calculating the commission, the company has the right to amend the amount at any time and immediately settle the underpaid difference to the agent or recover the overpaid balance from the agent.",
            "page.casion.affiliate.tit_d.cont_5": "6.5. Agent Withdraw commission by the Affiliate shall be deemed to be full and the final settlement of the balance due for the period indicated.",
            "page.casion.affiliate.tit_d.cont_6": "6.6. If the Affiliate disagrees with the balance due as reported, it shall within a period of seven (7) days send an email to the Company to admin@{0} and indicate the reasons for the dispute. Or contact customer service through Telegram .Failure to send an email Or contact customer service through Telegram within the prescribed time limit shall be deemed to be considered as an irrevocable acknowledgment of the balance due for the period indicated.",
            "page.casion.affiliate.tit_d.cont_7": "6.7. May delay the Withdraw request through the agent for up to sixty (60) days, while it investigates and verifies that the relevant transactions comply with the provisions of the Terms.",
            "page.casion.affiliate.tit_d.cont_8": "6.8. No payment shall be due when the traffic generated is illegal or contravenes any provision of these Terms.",
            "page.casion.affiliate.tit_d.cont_9": "6.9. The Affiliate agrees to return all commissions received based on fraudulent or falsified transactions, plus all costs for legal causes or actions that may be brought against the Affiliate to the fullest extent of the law.",
            "page.casion.affiliate.tit_d.cont_a": "6.10. For the sake of clarity the parties specifically agree that upon termination of this Agreement by either party, In addition to the previous unsettled Commissions, the Commissions of the agent will no longer be settled.",
            "page.casion.affiliate.tit_d.cont_b": "6.11. The Affiliate shall be exclusively responsible for the payment of any and all taxes, levies, fees, charges and any other money payable or due both locally and abroad (if any) to any tax authority, department or other competent entity by the Affiliate as a result of the commission generated under this Agreement. The Company shall in no manner whatsoever be held liable for any amounts unpaid but found to be due by the Affiliate and the Affiliate hereby indemnifies the Company in that regard.",
            "page.casion.affiliate.tit_f": "7. Termination",
            "page.casion.affiliate.tit_f.cont_1": "7.1. This Agreement may be terminated by either party by giving a thirty (30) day written notification to the other party. Written notification may be given by email.",
            "page.casion.affiliate.tit_f.cont_2": "7.2. The contracting parties hereby agree that upon termination of this Agreement:",
            "page.casion.affiliate.tit_f.cont_3": "a) The Affiliate must remove all references to {0} from the Affiliate's websites and/or other marketing channels and communications, irrespective of whether the communications are commercial or non-commercial.",
            "page.casion.affiliate.tit_f.cont_4": "b) All rights and licenses granted to the Affiliate under this Agreement shall immediately terminate and all rights shall revert to the respective licensors, and the Affiliate will cease the use of any trademarks, service marks, logos and other designations vested in the Company.",
            "page.casion.affiliate.tit_f.cont_5": "c) The Affiliate will be entitled only to those earned and unpaid commissions as of the effective date of termination;however provided, the Company may withhold the Affiliate's final payment for a reasonable time to ensure that the correct amount is paid. The Affiliate will not be eligible to earn or receive commissions after this termination date.",
            "page.casion.affiliate.tit_f.cont_6": "d) If this Agreement is terminated by the Company on the basis of the Affiliate's breach, the Company shall be entitled to withhold the Affiliate\u2019s earned but unpaid commissions as of the termination date as collateral for any claim arising from such a breach. It is further specified that termination by the Company due to a breach by the Affiliate of any of the clauses in this Agreement shall not require a notice period and such termination shall have immediate effect upon simple notification by the Company to the Affiliate.",
            "page.casion.affiliate.tit_f.cont_7": "e) The Affiliate must return to the Company any and all confidential information (and all copies and derivations thereof) in the Affiliate's possession, custody and control.",
            "page.casion.affiliate.tit_f.cont_8": "f) The Affiliate will release the Company from all obligations and liabilities occurring or arising after the date of such a termination, except with respect to those obligations that by their nature are designed to survive termination. Termination will not relieve the Affiliate from any liability arising from any breach of this Agreement, which occurred prior to termination and/or to any liability arising from any breach of confidential information even if the breach arises at any time following the termination of this Agreement. The Affiliate\u2019s obligation of confidentiality towards the Company shall survive the termination of this Agreement.",
            "page.coindrop.btn": "Start Coindrop",
            "page.coindrop.coinDropsFrom": "Coindrop from",
            "page.coindrop.coinDropsToWallet": "Coindrop have transferred to your wallet",
            "page.coindrop.completeCoinDrop": "Coindrop is completed",
            "page.coindrop.completed": "Completed",
            "page.coindrop.congratulations": "Congratulations!",
            "page.coindrop.expired": "Expired",
            "page.coindrop.expiredCoinDrop": "Coindrop is expired",
            "page.coindrop.grab": "Claim ",
            "page.coindrop.inviteFriends": "Invite friends to grab Coindrop!",
            "page.coindrop.openTap": "Tap to Open",
            "page.coindrop.person": "Number of people",
            "page.coindrop.sendCoinDrop": "Send a Coindrop",
            "page.coindrop.viewHistory": "View History",
            "page.comment.add": "Add a comment\u2026",
            "page.comment.delete": "Delete the comment",
            "page.comment.deliver": "Leave your comment",
            "page.comment.edit": "Edit your comment",
            "page.comment.likes": "Top Likes",
            "page.comment.newest": "Newest First",
            "page.comment.replied.title": "Replied to your comment",
            "page.comment.report": "Report the comment",
            "page.comment.show.replies": "Show {0} Replies",
            "page.comment.top": "Top Comments",
            "page.comment.viewmore": "View More Comments",
            "page.common.available.claim": "Available to Claim",
            "page.common.live.events": "Live Events",
            "page.common.soccer": "Soccer",
            "page.common.tennis": "Tennis",
            "page.common.basketball": "Basketball",
            "page.common.cricket": "Cricket",
            "page.common.fifa": "FIFA",
            "page.common.afootball": "American Football",
            "page.common.ice.hockey": "Ice Hockey",
            "page.common.counter.strike": "Counter-Strike",
            "page.common.baseball": "Baseball",
            "page.common.handball": "Handball",
            "page.common.current.ranking": "Current Ranking",
            "page.common.currently.first": "You are the 1st now! Well done!",
            "page.common.deposit.play": "Deposit & Play",
            "page.common.deposit.pending": "Deposit Pending",
            "page.common.footer.emailus": "Email us",
            "page.common.footer.gettouch": "Get In Touch",
            "page.common.footer.contact": "Contact us for more information",
            "page.common.footer.business.director": "Business Director",
            "page.common.footer.influencer.manager": "Influencer Manager",
            "page.common.footer.affiliate.manager": "Affiliate Manager",
            "page.common.footer.media.manager": "Media Buying Manager",
            "page.common.footer.about": "About us",
            "page.common.footer.accepted": "Accepted Currencies",
            "page.common.footer.accepted.network": "Accepted Networks",
            "page.common.footer.agents": "Agents Authenticator",
            "page.common.footer.authenticator": "Media Authenticator",
            "page.common.footer.business": "Business Contacts",
            "page.common.footer.casino": "Casino Home",
            "page.common.footer.help": "Help Desk",
            "page.common.footer.join": "Join our Community",
            "page.common.footer.promo": "Promo",
            "page.common.footer.releases": "New Releases",
            "page.common.footer.resources": "Design Resources",
            "page.common.footer.spongaming": "Sponsorship and Gaming Responsibilities",
            "page.common.footer.sports": "Sports Home",
            "page.common.footer.sports.live": "Live",
            "page.common.footer.sportsbook": "SportsBook",
            "page.common.footer.support": "Support/Legal",
            "page.common.footer.trusted": "Casino Platform loved and trusted by <span>millions</span> of users worldwide.",
            "page.common.footer.verify": "Verify Representative",
            "page.common.footer.holder": "Please enter Telegram/Discord ID",
            "page.common.footer.verify.desc1": "To prevent fraud on behalf of {0}, you can verify the Telegram or Discord account you are having conversation with.",
            "page.common.footer.verify.desc2": "Please type in the agents account ID, and click on check button.",
            "page.common.footer.verify.desc3": "is the official representative of {0}, you can trust this account. Thank you for verification.",
            "page.common.footer.verify.desc4": "is NOT the official representative of {0}. Do not trust this account.",
            "page.common.help.email": "Or Email us:",
            "page.common.help.info": "Help Us Improve Your Experience",
            "page.common.help.leavemessage": "Leave a Message",
            "page.common.help.placeholder": "Found a bug or have any recommendations? Please leave your message here",
            "page.common.help.reward": "Now get rewarded for your valuable feedback.",
            "page.common.minimum.claim": "Minimum required to claim:",
            "page.common.refer.detail": '{0} sets up a reward of {1} for each referral you invite in addition to commission. Click "Copy Link" now, send it to your friends and set sail on a new chapter on your journey of wealth immediately!',
            "page.common.wager.desc": "Wager {0} more {1} to Reach",
            "page.contact.customer": "Any issues, please contact the customer service for help and provide the game ID.",
            "page.contest.last_champion": "Last Champion",
            "page.contest.my_position": "My Position",
            "page.contest.nologin": "Who's the invincible champion at the high table? Let's see what a badass you can be!",
            "page.contest.participate": "Participate Now",
            "page.contest.reach": "Wager {0} To reach {1}",
            "page.contest.time_remaining": "Time Remaining",
            "page.contest.title": "Wager contest",
            "page.contest.rule.desc1": "Rules-{0} Wagering Contest",
            "page.contest.rule.desc2": "The contest prize pool closely depends on the bankroll, the more players bet the bigger it grows. Current prize pool will be showed on the Contest page.",
            "page.contest.rule.desc3": "{0} most wagering players carve up the prize pool.",
            "page.contest.rule.desc4": "This Contest support wagering in : {0}",
            "page.contest.rule.desc5": "You can wager in any cryptocurrencies above, and they all will be switched to USDT at the current rate.",
            "page.contest.rule.desc6": "All prizes will be sent in {0}",
            "page.contest.rule.desc7": "Prizes will be sent on Notice page as the Contest ends.",
            "page.contest.rule.desc8": "BC.GAME reserves the right to exclude players who have violated our rules at any stage of the Contest.",
            "page.contest.rule.desc9": "BC.GAME reserves the right to change any rules and conditions at its sole discretion and without prior notice.",
            "page.contest.rule.desc10": "Good luck and have fun!",
            "page.contest.rule.desc11": "Prize Calculation Formula",
            "page.contest.rule.desc12": "{0} place \u2013 {1} of the {2} Contest prize pool",
            "page.event.ended": "Event {0} was ended.",
            "page.event.thank.you": "Thank you!",
            "page.event.total.entries": "Total entries",
            "page.event.latest.participant": "Latest 10 Participants",
            "page.event.beginsin": "Event {0} begins in",
            "page.event.betlink": "Bet link",
            "page.event.name": "Forum Event Name",
            "page.game.about": "About this game",
            "page.game.about.provider": "About The Provider",
            "page.game.disabled": "This game is temporarily disabled. Please try other games.",
            "page.game.disabled_tips": "Sorry, {0} is temporarily disabled for some reason. Please <span class='cl-primary'>contact customer support</span> for help, or try another game.",
            "page.game.features.tags": "Features Tags",
            "page.game.moreinfo": "More Info",
            "page.game.rate.game": "Rate this Game",
            "page.gamelist.betofgame": "Top Rated Games",
            "page.gamelist.relatedgame": "Related Games",
            "page.game.free.play.error": "Freeplay not available for now.",
            "page.game.play.balance": "Play with balance in",
            "page.game.insufficient.balance": "Insufficient balance in",
            "page.game.error": "Can\u2019t get the page refreshed? Play BC original games instead",
            "page.game.balance": "Note: This game is not available for Bonus Money. If you want to use bonus money, please go to Bonus page to check available games.",
            "page.home.latestbet_pool": "Contest prize pool",
            "page.home.recently_win": "Recent biggest win",
            "page.help.bonus.title1": "1st deposit with {0} bonus",
            "page.help.bonus.desc1": "With your first deposit you can receive {0} bonus!",
            "page.help.bonus.title2": "2nd deposit with {0} bonus",
            "page.help.bonus.desc2": "With your second deposit you can receive {0} bonus!",
            "page.help.bonus.title3": "3rd deposit bonus with {0} bonus",
            "page.help.bonus.desc3": "With your third deposit you can receive {0}  bonus!",
            "page.help.bonus.title4": "4th deposit bonus with {0} bonus",
            "page.help.bonus.desc4": "With your fourth deposit you can receive {0} bonus!",
            "page.inviteBonus.line1.content.4": "Having more than one account per user is prohibited. You will get the lower possibility of receving rain and BC will suspend your withdrawals  for a manual review in the fraud prevention system which may take up to 24 hrs. We do not guarantee withdraw processing and may ban account with your balance in it. If you have already had more than one account please self-surrender by contacting Live Support.",
            "page.inviteBonus.line2.title": "For example",
            "page.inviteBonus.table.none": "None",
            "page.inviteCro.line1.content.0": "Every 6 hours, {0} will appear randomly and stay on the screen for 1 minute. Click on the {1} to get reward.",
            "page.inviteCro.line1.content.1": "Reward will be at least 0.005 BCD. Of course, the higher your VIP level, the more rewards you get.",
            "page.inviteCro.line1.content.2": "Having more than one account per user is prohibited. You will get the lower possibility of receving rain and BC will suspend your withdrawals for a manual review in the fraud prevention system which may take up to 24 hrs. We do not guarantee withdraw processing and may ban account with your balance in it. If you have already had more than one account please self-surrender by contacting Live Support.",
            "page.inviteIndex.Highest.part3.href": "Redeem Bonus Code",
            "page.inviteIndex.lucky.part1.title": "Good Luck",
            "page.inviteIndex.withdrawal_success": "Success",
            "page.inviteRain.all": "Overall Amount",
            "page.inviteRain.line1.content.0": "Six players level higher than 4 will be randomly selected and rewarded in chat room every 6 hours.",
            "page.inviteRain.line1.content.1": "Bonus = platform will take different currencies and amount as a reward",
            "page.inviteRain.line1.content.2": "Players will be randomly selected by Rain algorithm. The players who send more messages have the higher probability to get rewarded.",
            "page.inviteRain.line1.content.3": "But even if the user has sent only one message, there is still a chance that they can receive the rain bonus.",
            "page.inviteRain.line1.content.4": "Rain information will be sent to the chat room by robots.",
            "page.inviteRoll.changce": "The remaining number:",
            "page.inviteRoll.cont": "Bet players have one chance to roll every day",
            "page.inviteRoll.cont_1": "<div class='ir-item-subtitle'>Rolling time </div><div class='ir-item-subcont'>starts from UTC+0 02:00 to 02:10 every day; rewards will be distributed afterwards.</div>",
            "page.inviteRoll.cont_2": "<div class='ir-item-subtitle'>How to play Rolling</div><ol><li>Platform will take different currencies and amount as a reward </li><li>Bet players can get the opportunity to be rewarded based on top 10 ROLL points, except ({0}) players.</li><li>ROLL is a random number from 0 to 999, good luck!</li><li>If different players rolled the same amount, the ranking will be determined according to time.</li></ol>",
            "page.inviteRoll.endTime": "The countdown:",
            "page.inviteRoll.rank": "Ranking",
            "page.inviteRoll.title": "Roll point game",
            "page.inviteRoll.toDay": "Today's reward:",
            "page.level.total_wager": "Total wager",
            "page.login.agreement_tips": "Please consent to our user agreement",
            "page.login.captcha": "Verification Code",
            "page.login.check": "I agree to the {0} & confirm I am at least 18 years old",
            "page.login.registered": "Looks like you have already registered. Please sign in.",
            "page.login.start.journey": "Start your game journey now!",
            "page.login.welcome.title": "Welcome to",
            "page.login.newto": "New to {0}?",
            "page.login.invalid": "Invalid email address",
            "page.login.create.account": "Create account",
            "page.login.marketing": "I agree to receive marketing promotions from {0}.",
            "page.login.have.account": "Already have an account?",
            "page.whatsapp_tip": "Please enter your WhatsApp phone number",
            "page.whatsapp_regist": "WhatsApp Sign Up",
            "page.login.phone_verification": "Phone Verification",
            "page.login.whatsapp_verification": "WhatsApp Phone Verification",
            "page.login.identity": "Identity Verification",
            "page.wallet.verify": "Verify Your Identity",
            "page.wallet.deposit.identity": "Please verify your identity before making a deposit.",
            "page.wallet.disclaimer.desc": "You will be redirected to the MoonPay payment service provided by a third party. Please read and agree to the MoonPay's Terms of Use before using their service. For any questions related to payments, please contact MoonPay's support team. {0} is not responsible for any loss or damage caused by the use of this payment service.",
            "page.wallet.tips.notes": "Depending on the blockchain, the deposit may take a few minutes to 1 hour to arrive.",
            "page.wallet.tips.agree": "I have read and agree to the",
            "page.wallet.filter.past_days": "Past {0} days",
            "page.wallet.filter.past_hours": "Past {0} hours",
            "page.wallet.filter.custom": "Custom",
            "page.wallet.filter.all_ssets": "All assets",
            "page.wallet.filter.all_status": "All status",
            "page.wallet.filter.all_type": "All Type",
            "page.wallet.deposit.requirement": "Deposit Requirement",
            "page.login.complete": "Go to Complete",
            "page.login.pending": "Review Pending",
            "page.login.phone_number": "Phone Number",
            "page.login.verify_phone_number": "Verify Phone Number",
            "page.login.phone_tips": "Please enter the 6-digit verification code sent to {0}. The code is valid for 30 minutes.",
            "page.login.verification_code": "Verification Code",
            "page.login.dont_receive_code": "Didn't receive the verification code?",
            "page.login.resend": "Resend",
            "page.login.video.title": "Account safe mode",
            "page.login.video.verify": "Go to verify",
            "page.login.video.desc": "Your account has been set to safe mode for some security issue. Please complete account verification, then contact live support for further information.",
            "page.login.phone_msg1": "<p>SMS sent to your phone. If you have not received the code after several attempts, please try:</p><ol><li>Check if your phone bill is overdue.</li><li>Check if the message is in the SMS bin.</li><li>The message may be delayed for a few minutes. Try again after 10 minutes.</li><li>If this phone number already exists,we will not send you an authentication code.</li></ol>",
            "page.lottery.ticket_nums": "Numbers of Ticket",
            "page.lottery.gift_tickets": "Lottery Gift Tickets",
            "page.lottery.congratulations": "Congratulations! You\u2019ve Successfully bought a Lottery Ticket. Good Luck!",
            "page.lottery.gift.tip": "*This link is available for 24 hours from the time of generation. If the link is not used within this time frame, the amount you paid will be refunded to your wallet.",
            "page.lottery.gift.desc": "Share to your friends and they can choose lottery numbers themselves",
            "page.lottery.gift.tit": "Successfully bought [{0}] lottery tickets!",
            "page.lottery.send_ticket": "Send ticket",
            "page.lottery.gift_desc": "Send Lottery Ticket as Gift",
            "page.lottery.gift_history_title": "View Lottery Gift History",
            "page.lottery.invite_info": "Invite your friends to win {0} jackpot by generating a gift link and sending it to anyone! ",
            "page.lottery.qucik_pick": "Quick Pick",
            "page.lottery.completed_num": "Completed {0} / {1} Ticket(s)",
            "page.lottery.choose_num": "Choose {0} numbers",
            "page.lottery.claim": "Claim Tickets",
            "page.lottery.claim2": "Claim Lottery Tickets",
            "page.lottery.claim_tit": "This lottery gift contains {0} Tickets <b>(worth {1})</b>. You can choose the numbers below and wait for the draw.",
            "page.lottery.buy_tip": "You can only handpick {0} tickets of your own numbers, we will automatically generate the rest of the tickets.",
            "page.lottery.entry_desc": "Try your luck and seize the opportunity to win big by playing the lottery",
            "page.lottery.tickets_expiresin": "Tickets expire in",
            "page.lottery.about": "BCL (BC Lottery) is a token created by {0} for players who love the Lottery. You can use BCL to redeem lottery tickets in the Lottery at any time, 1 BCL = 1 lottery ticket. ",
            "page.lottery.bonus.tickets": "Bonus Tickets",
            "page.lottery.bought_tickets": "Bought {0} lottery tickets",
            "page.lottery.buy.ticket": "Buy lottery ticket",
            "page.lottery.buynow": "Buy ticket now",
            "page.lottery.buy_ticket": "Buy Tickets for {0}",
            "page.lottery.draw_time": "Draw every {0} hours",
            "page.lottery.jackpot": "Lottery Jackpot",
            "page.lottery.free_tickets": "Free Lottery Tickets",
            "page.lottery.free.winnings": "Free Lottery Winnings",
            "page.lottery.claim.winnings": "Claim Winnings",
            "page.lottery.draw.result": "LOTTERY DRAW RESULT",
            "page.lottery.new.generate": "Generate Automatically",
            "page.lottery.first_lotteryticket": 'Here\u2019s your <div class="cl-primary">first lottery ticket number!</div>',
            "page.lottery.first_lotteryticket.desc": "You can redeem {0} ticket per day for {1} continuous days.",
            "page.lottery.new.manual": "Select Manually",
            "page.lottery.buy": "Buy Lottery Tickets",
            "page.lottery.new.add": "YOUR <span class='green'>Ticket NUMBERS</span> ARE..",
            "page.lottery.new.add.complex": "YOU GOT",
            "page.lottery.buyticket": "Buy Ticket",
            "page.lottery.choose.numbers": "Please choose 6 numbers to take part in the {0} Lottery!",
            "page.lottery.currentblock": "Lottery Current Block:",
            "page.lottery.desc": "Don't miss your chance! {0} tickets have been sold today!",
            "page.lottery.digits.optional": "5 digits optional",
            "page.lottery.draw": 'Lottery Draw Remaining <b class="cl-primary">{0}</b> Blocks',
            "page.lottery.drawtip": "Ticket sale suspended for <br/> {0} mins before each draw.",
            "page.lottery.fariness": "Lottery Fairness",
            "page.lottery.fariness.tit": "{0} Lottery is provably fair which means you can examine the results using {1} and following data. The whole data including the file with purchased tickets is available only when ticket sales stopped.",
            "page.lottery.fariness_1": "Lottery is drawn in 5+1 balls rule, with five regular balls taken from 36 numbers and a jackpot ball taken from 10 numbers.",
            "page.lottery.fariness_2": "Server seed: Each game generates a new server seed and publishes the string after Hash256. Client Seeds: Get the ETH height at the end of the daily ticket purchase deadline, and use Hash after 10 blocks as the client seed.",
            "page.lottery.fariness_3": "First, use HMAC_SHA256 to calculate the hash value, which gives us a 64-bit character hex string: ",
            "page.lottery.fariness_4": "Then, take the <span>8</span> characters of hash and convert it to an <span>int32</span> value. We divide the converted value by the <span>0x100000000</span>, multiply by the number of balls, and the number is the winning position, according to which the corresponding ball is obtained.",
            "page.lottery.gameid": "Lottery Game ID.",
            "page.lottery.get.title": "You can get more BCL from {0} at anytime",
            "page.lottery.get.your.prize": "Get your prize >>",
            "page.lottery.getmore": "Get more BCL",
            "page.lottery.gift.cont": "You can generate a gift link containing BCL and send it to anyone. This link is available for 24 hrs since the time of generation. If this link is not used by anyone in the given time, then the BCL will be added back to your account.",
            "page.lottery.gift.holder": "Try your luck, man!",
            "page.lottery.gift.label": "Message With Gift (optional)",
            "page.lottery.goto": "Go to Lottery",
            "page.lottery.have.tickets": "You have {0} tickets in this round",
            "page.lottery.hint": "Total tickets sold this round",
            "page.lottery.hint2": "Total winning tickets in this round",
            "page.lottery.htp1_cont": "Buy a ticket for $0.1 and choose numbers for the ticket.",
            "page.lottery.htp1_label": "Buy Tickets",
            "page.lottery.htp2_cont": "Wait for the draw at 00:00, 08:00, 16:00 UTC+0 daily",
            "page.lottery.htp2_label": "Wait For The Draw",
            "page.lottery.htp3_cont": "Once the draw is over, come back to this page and check your prize.",
            "page.lottery.htp3_label": "Check the Prizes",
            "page.lottery.rules": "Lottery Rules",
            "page.lottery.instrustions": "Lottery Instructions",
            "page.lottery.instrustions_1": "A provably fair algorithm is used to draw the lottery prizes.",
            "page.lottery.instrustions_2": "Prizes are drawn every 8 hours, at 00:00, 08:00, 16:00 UTC+0.",
            "page.lottery.instrustions_3": "You can buy a ticket for $0.1. The sale of tickets stops at 14:55 UTC+0 every day.",
            "page.lottery.instrustions_4": "The player chooses six numbers for each ticket, the first five are from 1 to 36, and the last one is from 1 to 10.",
            "page.lottery.instrustions_5": "You can choose numbers manually or automatically.",
            "page.lottery.instrustions_6": "If you have BCL, you can use BCL to redeem Tickets.",
            "page.lottery.instrustions_7": "Each draw produces six numbers. ",
            "page.lottery.instrustions_8": "The more numbers you match in the first five numbers, greater prize you will win.",
            "page.lottery.jackpot.ball": "Choose 1 Jackpot Ball",
            "page.lottery.jackpot.ball.new": "JACKPOT BALL",
            "page.lottery.lottery.start": "$100k lottery drawing starts in 3 minutes - Hurry and get your tickets before it\u2019s too late!",
            "page.lottery.lucky.number": "The <span>Lucky Numbers</span> Are..",
            "page.lottery.lucy_number": "The lucky numbers are",
            "page.lottery.my_winnumber": "My Winning Numbers",
            "page.lottery.next.round": "The next round will start in a few minutes",
            "page.lottery.noticket": "You have no ticket!",
            "page.lottery.numbers": "Lucky Numbers",
            "page.lottery.pay.with": "Pay with",
            "page.lottery.rule": "COCO LOTTERY RULE",
            "page.lottery.suspended.desc": "Ticket sale suspended for <br/> 5 mins before each draw.",
            "page.lottery.ticket": "Ticket",
            "page.lottery.ticketnum": "Ticket Numbers",
            "page.lottery.ticketprice": "1 ticket for $0.1",
            "page.lottery.tickets": "Tickets",
            "page.lottery.tickets.number": "Number of tickets",
            "page.lottery.total.cost": "Total Cost:",
            "page.lottery.total.tickets": "Total tickets",
            "page.lottery.total.winning_tickets": "Total winning tickets",
            "page.lottery.total.prize_won": "Total Prize won",
            "page.lottery.whatbcl": "What Is <span>BCL</span>?",
            "page.lottery.100kwinner": "Jackpot Winner",
            "page.lottery.winners": "Winners List",
            "page.lottery.winning": "Winning Prize Details",
            "page.lottery.winning.info": "Only winning tickets from the most recent 90 draws are displayed here.",
            "page.lottery.winning_1": "All six numbers matched: $100,000 prize. In case you are not the only winner, you may need to share the prize equally with others.",
            "page.lottery.winning_2": "Five numbers matched, and the sixth number is missed: Each ticket gets a $3,000 prize.",
            "page.lottery.winning_3": "Four of the first 5 numbers matched: Each ticket gets a $20 prize.",
            "page.lottery.winning_4": "Three of the first 5 numbers matched: Each ticket gets a $1 prize.",
            "page.lottery.winning_5": "If all six numbers are missed, the lottery will be reserved for free, and continue participating in the next day's draw.",
            "page.lottery.free_bonus": "Here is your <span>1st free lottery ticket</span> number! You will redeem the rest {0} tickets once per day in the next few days and your progress will be saved in <span>bonus collection</span>",
            "page.raffle.got.tickets": "got {0} tickets",
            "page.raffle.super.draw": "SUPER LUCKY DRAW",
            "page.raffle.next.draw": "Next Draw Starts in",
            "page.raffle.earn.btn": "Earn ticket",
            "page.raffle.view.btn": "View ticket",
            "page.raffle.earn.ticket": "How to Earn Ticket",
            "page.raffle.notify.title": "Weekly Raffle Ending Soon!",
            "page.raffle.notify.desc": "Wager More For The Next Ticket And Stand A Chance To Win $5,000!",
            "page.raffle.sent.tickets": "{0} tickets have been sent this round",
            "page.raffle.login.wager": "Log in & Wager {0} Daily",
            "page.raffle.every.wager": "Every wager",
            "page.raffle.tickets": "My Tickets",
            "page.raffle.title": "Weekly Raffle",
            "page.raffle.live": "Weekly Raffle Is Live!",
            "page.raffle.check": "Check Your Ticket Now For The Extra Bonus!",
            "page.raffle.rules": "Raffle rules",
            "page.raffle.winner.list": "Winner List",
            "page.raffle.round": "Total participated tickets for this round",
            "page.raffle.wait.draw": "Waiting for next draw",
            "page.raffle.wager": "Wager {0} to get your daily raffle ticket.",
            "page.raffle.wager.more": "Wager {0} to get one more additional raffle ticket.",
            "page.raffle.rules.title1": "How to Enter:",
            "page.raffle.rules.desc1-1": "Log in daily and wager $100 to earn 1 ticket. Under this condition, you can earn a maximum up to 7 tickets per week.",
            "page.raffle.rules.desc1-2": "For every $1000 USD you wager, you will receive one extra ticket. The number of tickets you will get increases with your wager amount.",
            "page.raffle.rules.desc1-3": "Every entry will correlate to an entry number.",
            "page.raffle.rules.desc1-4": "Your entry numbers can be found on the same page.",
            "page.raffle.rules.desc1-5": "Maximum tickets accumulated per user can be up to 100 tickets per week.",
            "page.raffle.rules.title2": "Weekly Raffle Draw:",
            "page.raffle.rules.desc2-1": "Weekly raffle draws every Monday at 12:00:00 UTC; the winners will be announced on the same page.",
            "page.raffle.rules.title3": "Terms and Conditions:",
            "page.raffle.rules.desc3-1": "You must have an account on {0}.",
            "page.raffle.rules.desc3-2": "The weekly raffle includes all types of wager in \u201CCasino\u201D and \u201CSports\u201D, except the usage of BCL & JB.",
            "page.raffle.rules.desc3-3": "{0} reserves the right to hold void, suspend, cancel, or amend this promotion where it deems necessary to do so.",
            "page.raffle.rules.desc3-4": "Entries will be declared void if the entrant is found engaging in fraud, misrepresentation, hacking, or exploitation.",
            "page.raffle.rules.desc3-5": "{0} reserves the right to perform additional KYC/AML checks as a condition of receiving the weekly raffle reward.",
            "page.raffle.rules.title4": "Winning Prize Details:",
            "page.raffle.questions.label1": "How to earn the \u201Cticket\u201D? How many tickets can I collect?",
            "page.raffle.questions.desc1-1": "Log in daily and wager $100 to in the same day to earn 1 ticket and maximum 7 tickets per week.",
            "page.raffle.questions.desc1-2": "By every wager of $1,000, you will earn 1 extra ticket. The more wagers, the more tickets.",
            "page.raffle.questions.desc1-3": "Maximum number of tickets collected per user can be up to 100 tickets per week.",
            "page.raffle.questions.desc1-4": "Ticket refresh every 10 mins, please check in 'My Tickets' section.",
            "page.raffle.questions.label2": "When the winner be announced?",
            "page.raffle.questions.desc2-1": "Winner will be announced every Monday at 12:00:00 UTC. The winner list can be found on the same page.",
            "page.raffle.questions.desc2-2": "Raffle reward will credit to BC.GAME account within 48 hours.",
            "page.raffle.questions.label3": "Can I win multiple rewards in a round of weekly raffle?",
            "page.raffle.questions.desc3-1": "Unfortunately, no. One(1) user can win one(1) time per week. Collect more tickets to increase the winning chances.",
            "page.raffle.questions.label4": "Can I join the next raffle with \u201COld Ticket\u201D?",
            "page.raffle.questions.desc4-1": "Unfortunately, no. Users have to re-accumulate the new ticket(s) in order to join the new weekly raffle.",
            "page.raffle.questions.label5": "Can I know more about the time period?",
            "page.raffle.questions.desc5-1": "For \u201CDaily login and wager $100\u201D, users must complete the requirement between 00:00 UTC ~ 23:59 UTC in order to earn the ticket.",
            "page.raffle.questions.desc5-2": "For \u201CEvery wager of $1,000 to earn extra tickets\u201D, there is no time limitation.",
            "page.raffle.questions.desc5-3": "The weekly raffle starts every Monday at 12:00:00 UTC to Sunday at 11:59:59 UTC. (All tickets accumulated in one week will not count in the next week.)",
            "page.raffle.questions.desc5-4": "The lucky winner list will be updated on the same page by every Monday at 12:00:00 UTC, and rewards will be distributed within 48 hours.",
            "page.vault.label1": "How is the deposit and withdrawal of funds in Vault Pro protected?",
            "page.vault.label2": "When is the daily interest calculated, and how is it determined?",
            "page.vault.label3": "Can I trust that my funds in Vault Pro are safe?",
            "page.vault.desc1": "Funds deposited and withdrawn in Vault Pro are protected by 2FA (Two-Factor Authentication) and can be accessed by the depositor at any time.",
            "page.vault.desc2": "The daily interest is calculated every day on the amount that remains not withdrawn from 00:00 to 23:59 (UTC+0). The interest is calculated at 02:00 (UTC+0), precisely 24 hours after the fund is deposited.",
            "page.vault.desc3": "Absolutely! {0} ensures that the funds (cryptos) in Vault Pro are safeguarded and will not be accessed by anyone other than the depositor. Your funds are entirely yours, and they will always remain secure for your use.",
            "page.vault.rule.title": "Vault Pro Rules",
            "page.vault.rule.desc1": "The deposit and withdrawal of funds in Vault Pro is protected by 2FA and can be accessed by the depositor at any time.",
            "page.vault.rule.desc2": "The interest of the day is calculated every day on the amount that is not withdrawn from 00:00 to 23:59 (UTC+0). The interest is calculated at 02:00 (UTC+0); after 24 hours of fund deposit.",
            "page.vault.rule.desc3": "{0} {1} in Vault Pro will not be touched by anyone except for the depositor. It is yours, and it will always stay safe for you to use!",
            "page.vault.rule.desc4": "ensures that the funds (cryptos)",
            "page.notice.tab.notice": "System Notice",
            "page.notice.tab.reward": "Reward",
            "page.notice.title": "Notification",
            "page.notice.viewMore": "View More",
            "page.notice.exclusive": "Exclusive Notification",
            "page.pcview.android1_desc": "Tap to open Google Chrome on your phone",
            "page.pcview.android1_tit": "Open website in Chrome browser",
            "page.pcview.android2_desc": "Use Google Chrome APP to go {0} and then click the button",
            "page.pcview.android2_tit": "Tap menu button.",
            "page.pcview.android3_desc": "Press Install app in the list popup to add to the home screen",
            "page.pcview.android3_tit": "Tap menu button.",
            "page.pcview.ios1_desc": "Tap to open Safari browser on your phone",
            "page.pcview.ios1_tit": "Open website in Safari browser",
            "page.pcview.ios2_desc": "Use Safari Explore APP and go to {0}, Then tap the Sharing Button",
            "page.pcview.ios2_tit": "Tap Sharing button.",
            "page.pcview.ios3_desc": "Press Add to Home Screen in the list popup to add to the home screen. You may need to swipe left to locate the Add to Home Screen button",
            "page.pcview.ios3_tit": "Tap Add to Home Screen.",
            "page.prichat.friends": "Friends",
            "page.prichat.gm_warning": "Don't transfer money or reveal password to any person who claims to be a {0} staff. Official staff members will NEVER ask for money or your password!",
            "page.prichat.messages": "Messages",
            "page.prichat.no_select": "Select a chat to start messaging",
            "page.prichat.recent": "All chats",
            "page.prichat.room_remove": "Delete chat",
            "page.prichat.search_input": "Search Name",
            "page.prichat.title": "Private Messages",
            "page.prize.change": "Change",
            "page.prize.history_divest": "Withdraw",
            "page.prize.history_divesting": "Making a Withdrawal...",
            "page.prize.history_invest": "Deposit",
            "page.prize.history_investing": "Making a deposit...",
            "page.prize.history_noleveraged": "No leverage",
            "page.prize.history_state": "Status",
            "page.prize.history_twox": "2x leverage",
            "page.prize.home": "Overview",
            "page.prize.home_tips": "For more prize pool information, please click here!",
            "page.prize.home_title_1": "Your shares",
            "page.prize.home_title_2": "Your Bankroll",
            "page.prize.home_title_3": "Your accumulated Profit",
            "page.prize.home_title_4": "Bankroll",
            "page.prize.home_title_5": "Bankroll's current Profit",
            "page.prize.home_title_6": "Your leveraged",
            "page.prize.home_title_7": "Leveraged of the dealer",
            "page.prize.prize_amount": "Your wallet balance",
            "page.prize.prize_bot_1": "Your current shares",
            "page.prize.prize_bot_2": "Your current balance",
            "page.prize.prize_bot_3": "Expected shares after",
            "page.prize.prize_bot_4": "Expected balance after",
            "page.prize.prize_bot_5": "Dilution fee",
            "page.prize.prize_bot_6": "Your current leveraged",
            "page.prize.prize_bot_7": "Expected leveraged after",
            "page.prize.prize_button": "Deposit/Withdraw",
            "page.prize.prize_sucbut": "Waiting for game over",
            "page.prize.prize_title_2": "Positive number",
            "page.prize.prize_title_3": "Withdraw",
            "page.prize.prize_title_4": "Negative number",
            "page.prize.prize_title_5": "Please make sure that amount entered is valid.",
            "page.prize.prize_title_6": '<span class="cl-primary">2%</span>  of your deposit will be deducted a non-refundable dilution fee (shared by other dealers) which will be deducted from your balance.',
            "page.prize.prize_title_7": "If you want to change your leverage, please withdraw all your previous investments from the bankroll and make a new investment with your selected leverage.",
            "page.promotion.lastest": "Latest Promotions",
            "page.promotion.archived": "Archived",
            "page.promotion.deposit": "Great Bonus For Every Deposit",
            "page.promotion.bonus": "Referral Bonus!",
            "page.promotion.invite": "Invite & Earn Unlimited!",
            "page.promotion.available": "Available in",
            "page.promotion.bcd.desc.login": "Enjoy the game while unlocking {0} to your wallet",
            "page.promotion.bcd.desc.nologin": "Claim BCD Right Now",
            "page.promotion.bcd.title.nologin": "BC DOLLAR: BCD",
            "page.promotion.coco.desc": "COCO plays Hide and Seek! Did you catch him yet?",
            "page.promotion.deposit.desc1": "Available for all players",
            "page.promotion.deposit.desc2": "Before {0}",
            "page.promotion.deposit.tip.desc": "We Provide 3 Level First Deposit Bonus. You can choose one according to your needs",
            "page.promotion.deposit.title1": "GREAT BONUS FOR",
            "page.promotion.deposit.title2": "EVERY DEPOSIT",
            "page.promotion.deposit.title3": "EVERY TUESDAY & THURSDAY",
            "page.promotion.deposit.upto": "Up to",
            "page.promotion.medals.desc": "Witness every step of your becoming a Master",
            "page.promotion.medals.title": "Master medals",
            "page.promotion.rain.desc": "It's raining coins in chatrooms! 6 hours 6 winners!",
            "page.promotion.roll.desc": "Roll your way to Daily Victory!",
            "page.promotion.shitcode.button": "Redeem Now",
            "page.promotion.shitcode.desc": "Redeem bonus codes to unlock Crypto rewards",
            "page.promotion.shitcode.recive": "You have got {0} from COCO's cave",
            "page.promotion.spin.button.login": "Spin Now",
            "page.promotion.spin.check": "Check Spin",
            "page.promotion.spin.title0": "Lucky Spin",
            "page.promotion.task.button": "Get Reward Now",
            "page.promotion.task.desc.login": "Keep completing quests and earning more rewards.",
            "page.promotion.task.desc.nologin": "Achieve quests and get rewards!",
            "page.promotion.task.title": "Quest Hub",
            "page.promotion.title.activities": "Activities",
            "page.promotion.title.casino": "Other casino bonus",
            "page.promotion.deposit.fiat": "{0} offers four generous deposit match bonuses that provide an excellent opportunity to increase your holdings. So, Take advantage of these exceptional bonuses and elevate your {1} experience.",
            "page.promotion.deposit.crypto": "{0} offers an exceptional 4 rewarding deposit match bonus. This is an excellent opportunity to earn additional Crypto and acquire our unique Crypto coins, BC Dollar (BCD), which you can use at your discretion. So, take advantage of this fantastic opportunity to increase your Crypto holdings with {1}'s exceptional bonuses.",
            "page.promotion.desc.more": "MORE",
            "page.promotion.desc.rewards": "SIGN UP & <span>GET</span> REWARDS",
            "page.promotion.deposit.rule.desc1": "Kickstart your gaming adventure with a thrilling first deposit offer! Get a generous {0} Deposit Bonus up to {1}! That's not all \u2013 you'll also receive {2} Free Spins and {3} lottery tickets, delivered over five days with 20 spins and 1 lottery ticket each day. All this can be yours with just a {4} deposit.",
            "page.promotion.deposit.rule.desc2": "Your second deposit comes with fantastic rewards! Enjoy a generous {0}Deposit Bonus up to {1}! Additionally, you'll receive {2} Free Spins, distributed over five days with 30 spins available each day, and a chance to win big with one free lottery ticket! All this can be yours with just a {3} deposit.",
            "page.promotion.deposit.rule.desc3": "Your third deposit brings exciting rewards! Enjoy a generous {0} Deposit Bonus up to {1}! As an extra treat, we're also granting you {2} Free Spins, delivered over five days with 30 spins available each day, and a chance to strike it lucky with one free lottery ticket! Simply deposit {3} to unlock these fantastic benefits.",
            "page.promotion.deposit.rule.desc4": "Your fourth deposit is the charm! Enjoy a sensational {0} Deposit Bonus up to {1}! That's not all - we're also giving you {2} Free Spins, distributed over five days with 60 spins each day, and a chance to win big with one free lottery ticket! Simply deposit {3} to unlock these incredible rewards.",
            "page.promotion.deposit.rule.desc5": "Experience the thrill of winning big with our unbeatable offer! Get up to {0} with our {1} Deposit Bonus every Tuesday and Thursday! Deposit {2} or more to participate and receive a complimentary lottery ticket. Please note that this reward is exclusively available on Tuesdays and Thursdays, with one bonus claim allowed per day.",
            "page.publicchat.chatRule": "Chat Rules",
            "page.publicchat.ruleFive": "Don't use URL shortener. Always submit the original link.",
            "page.publicchat.ruleFour": "Don't engage in any forms of advertising/ trading/ selling/ buying or offering services.",
            "page.publicchat.ruleInfo": "List of our full rules can be found on our forum.",
            "page.publicchat.ruleOne": "Don't spam, harass or be offensive to other users. Also, avoid using CAPS! No one likes to be screamed at!",
            "page.publicchat.ruleSix": "Use the designated language chatrooms accordingly.",
            "page.publicchat.ruleThree": "No suspicious behavior that can be seen as potential scams.",
            "page.publicchat.ruleTwo": "Don't beg or ask for loans, rains, tips and doubling coins.",
            "page.publicchat.winner": "BIGGEST WINNER TODAY",
            "page.publicchat.mute.new.title": "You have been muted",
            "page.publicchat.mute.new.desc": "Due to suspicious behavior, you will be unmuted in:",
            "page.racing": "Racing",
            "page.racing.entry_desc": "Experience the thrill of horse racing and enjoy the winnings",
            "page.racing.login_tip": "Please sign up or sign in before visiting Racing page.",
            "page.rain.person": "Number of people",
            "page.rain.send_bonus": "The leaderboard bonus has been granted!",
            "page.rain.send_chicken": "Rainer Rainer, Chicken Dinner",
            "page.rain.send_coco": "Who hit COCO:",
            "page.rain.send_roll": "The roll bonus has been awarded:",
            "page.rain.send_tip": "Rained And Left a Message: ",
            "page.rain.start": "Pour rain ",
            "page.rain.title": "Raining, the people who received the rain:",
            "page.rakeback.des_four": "Rakeback can be boosted with JB, up to 5%.",
            "page.rakeback.des_one": "Rakeback available at {0} and above.",
            "page.rakeback.des_three": "Rakeback = Wagers * 1% * {0}",
            "page.rakeback.des_two": "Rakeback percentage increases as your VIP level increases",
            "page.recharge.about": "About Recharge",
            "page.recharge.about.desc_1": "To activate your Recharge, you must have wagered a minimum of $1,000 in the past 7 days (24/7). Once activated, your Recharge will be redeemable for the next 7 days.",
            "page.recharge.about.desc_2": "At {0}, you can collect Recharges at a time interval and in a cryptocurrency of your choice. The available options are: <ol><li>Daily: Collect once every 24 hours (equals 18 hours' worth).</li><li>Hourly: Collect up to 24 times a day.</li><li>Flash Charge (10 min): Collect up to 144 times every 24 hours.</li></ol>",
            "page.recharge.about.desc_3": "Recharges are individually calculated based on your previous 7 days' wagering, losses, and VIP level. Make sure to claim the recharge in time to let the timer continue for the next recharge.",
            "page.recharge.about.desc_4": "<ul><li>Collection times can be changed during an active Recharge, but doing so will reset the timer.</li><li>Recharge will expire after 7 days. You can activate another Recharge for the next 7 days if the minimum requirements have been met.</li></ul>",
            "page.recharge.about.desc_5": "<span>Recharge Rate:</span> your rate is calculated based on your wager. The more you wager, the higher recharge rate you will get! <div>Your current VIP recharge rate tiers:</div>",
            "page.recharge.about.tit_1": "Recharge activation",
            "page.recharge.about.tit_2": "Interval settings",
            "page.recharge.about.tit_3": "Recharge calculation",
            "page.recharge.about.tit_4": "Additional Rules",
            "page.recharge.address": "Deposit Address",
            "page.recharge.apply.countdown": "Refresh every 10 minutes",
            "page.recharge.bchwarning": '<p><span class="cl-primary">NOTICE:</span> Send only BCH to this address. Coins will be deposited after 2 network confirmations.</p>',
            "page.recharge.btcwarning": '<p><span class="cl-primary">NOTICE:</span> Send only BTC to this address. Coins will be deposited after 2 network confirmations.</p>',
            "page.recharge.buttom": "Deposit",
            "page.recharge.claim_recharge": "Claim Recharge",
            "page.recharge.conditions.vip": "Level up to VIP{0}",
            "page.recharge.conditions.wager": "Wager ${0} in the last 7 days",
            "page.recharge.contact_host": "Contact {0}",
            "page.recharge.desc.ready": "You're now eligible for requesting recharge",
            "page.recharge.desc.wait": "To be eligible for requesting recharge",
            "page.recharge.dogewarning": '<p><span class="cl-primary">NOTICE:</span> Send only DOGE to this address. Coins will be deposited after 2 network confirmations.</p>',
            "page.recharge.dotwarning": '<p><span class="cl-primary">NOTICE:</span>The minimum deposit amount for Polkadot is {0} DOT</p>',
            "page.recharge.ethwarning": '<p><span class="cl-primary">NOTICE:</span> Send only ETH to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).</p>',
            "page.recharge.expires": "Your recharge validity expires on",
            "page.recharge.fiat_details": '<p><span class="cl-primary">NOTICE:</span> This bank account number is only valid for 1 transaction, to deposit more please use deposit button again to receive new account number.',
            "page.recharge.interval.desc": "The timer of next recharge will start now.",
            "page.recharge.interval.title": "Are you sure you want to reset the timer?",
            "page.recharge.ksmwarning": '<p><span class="cl-primary">NOTICE:</span>The minimum deposit amount for Kusama is {0} KSM</p>',
            "page.recharge.memo": "Note (memo)",
            "page.recharge.new_wagered": "New wagered",
            "page.recharge.nft": `<p><span class="cl-primary">NOTICE:</span> Please only deposit NFT on ERC721 and right the <span class='light-high'>{0}</span> collectible to this address, or your assets will be lost.</p>`,
            "page.recharge.paymentid": "Payment ID",
            "page.recharge.recharge": "Recharge",
            "page.recharge.recharge_in": "Next Recharge",
            "page.recharge.recharge_ready": "Recharge ready",
            "page.recharge.request": "Request",
            "page.recharge.result": "Congrats! You got",
            "page.recharge.state_fail": "Deposit Failed",
            "page.recharge.state_recharging": "Deposit is in progress",
            "page.recharge.state_success": "Deposit successful",
            "page.recharge.success_message": "Congrats! Your deposit has been completed!",
            "page.recharge.title.ready": "Conditions met",
            "page.recharge.title.wait": "Meet the conditions",
            "page.recharge.total_claimed": "Total claimed",
            "page.recharge.usdtwarning": '<p><span class="cl-primary">NOTICE:</span> Send only USDT to this deposit address. Coins will be deposited automatically after 6 network confirmations. Smart contract addresses are not supported(Contact us).</p>',
            "page.recharge.vip": "VIP",
            "page.recharge.warning": "{0} Do not deposit any currency other than {1}",
            "page.tier.tit": "Tier",
            "page.tier.new.tip": "Tier is calculated based on your wager. The more you wager, the higher recharge rate you will get!",
            "page.tier.new.title": "Current Tier",
            "page.tier.new.Rate": "Recharge Rate",
            "page.tier.activation_wager": "Activation wager requirements: {0}",
            "page.tier.wager": "Wager requirements: {0}",
            "page.tier.reach": "You need {0} to reach Tier {1}",
            "page.tier.desc": "Wager {0} more to reach Tier {1} and get {2}% rate!",
            "page.record.lose": "LOSE",
            "page.record.next": "Next",
            "page.record.all": "Select All",
            "page.record.clear": "Clear",
            "page.record.win": "WIN",
            "page.refer.desc.one": "Refer a friend AND get {0} {1} {2} commission",
            "page.refer.desc.two": "Invite friends, earn money.",
            "page.refer.friend": "Refer a friend",
            "page.refer.invitiations.work": "How do the invitations work?",
            "page.refer.learnmore": "Learn more",
            "page.refer.sharelink": "Share your referral link:",
            "page.refer.tit": "Refer",
            "page.rekeback.boosting": "Boosting",
            "page.rekeback.free": "Boost your rakeback for free",
            "page.rekeback.percentage": "Your Rakeback Percentage",
            "page.rekeback.rakeback_boost": "Boost",
            "page.rekeback.ready_detail": "The piggy bank in the top-right corner will pop up as a notice",
            "page.rekeback.ready_time": "Ready every 30 minutes.",
            "page.rekeback.title": "Rakeback",
            "page.rekeback.title.about": "About Rakeback",
            "page.search.about.result": "About {0} results",
            "page.search.history": "Search history",
            "page.search.no.history": "No Search history.",
            "page.search.no.results": "No results",
            "page.search.recommended": "Recommended for you",
            "page.search.requires.words": "Search requires at least 3 characters",
            "page.search.result": "Search Result",
            "page.setting.block_desc": "As per gaming license norms, we are unable to accept players from {0}! Contact {1} for further assistance!",
            "page.setting.block_title": "Sorry! It looks like you\u2019re trying to access {0} from a restricted area!",
            "page.setting.choose.file": "Choose File",
            "page.setting.correct.file": "The left is the correct case, the right is the wrong case.",
            "page.setting.correct.image": "Please upload the correct image format(jpg,png)",
            "page.setting.marketing": "Receive marketing promotions by Email",
            "page.setting.date_day": "Day",
            "page.setting.date_month": "Month",
            "page.setting.date_of_birth": "Date of Birth",
            "page.setting.date_year": "Year",
            "page.setting.desc": "According to the security policy of {0}, the registered email cannot be changed.",
            "page.setting.first_name": "First Name",
            "page.setting.general": "General",
            "page.setting.account.info": "Account Info",
            "page.setting.profile.info": "Profile Info",
            "page.setting.contact.info": "Contact Info",
            "page.setting.link.account": "Linked Account",
            "page.setting.link.desc": "You can use any of the linked account to log in",
            "page.setting.preferences": "Preferences",
            "page.setting.general.appearance": "Display mode",
            "page.setting.general.currency": "Currency Setting",
            "page.setting.general.fullname": "Show full name of currency in Crypto list",
            "page.setting.prefer.lang": "Change Language",
            "page.setting.prefer.account": "Account Preferences",
            "page.setting.prefer.privacy": "Privacy Preferences",
            "page.setting.prefer.marketing": "Marketing",
            "page.setting.prefer.deposit": "Receive deposit/withdraw notification by Email",
            "page.setting.globalSetting": "Global Settings",
            "page.setting.kyc_tips": "To have a better experience at {0}, we need to know more about you. Thanks for your understanding.",
            "page.setting.kyc_title": "One more step to get the LUCKY SPIN!",
            "page.setting.last_name": "Last Name",
            "page.setting.privacy": "Privacy",
            "page.setting.avatar.zoomout": "Zoom Out 5%",
            "page.setting.avatar.zoomin": "Zoom In 5%",
            "page.setting.avatar.rotate.left": "Rotate 90 degrees counterclockwise",
            "page.setting.avatar.rotate.right": "Rotate 90 degrees clockwise",
            "page.setting.privacy.friend": "Refuse any new friend request",
            "page.setting.privacy.friend_disable": "Players can send you friend request now.",
            "page.setting.privacy.friend_enable": "No one can send you friend request now.",
            "page.setting.privacy.gamedata": "Hide my gaming data on profile",
            "page.setting.privacy.gamedata.intro": "Even if hidden, your avatar and username are always visible in chatrooms.",
            "page.setting.privacy.gamedata_disable": "Your gaming data is now visible to others.",
            "page.setting.privacy.gamedata_enable": "Your gaming data is now invisible to others.",
            "page.setting.privacy.messages": "Allow private messages from strangers",
            "page.setting.privacy.messages_disable": "You can receive messages from all users now.",
            "page.setting.privacy.messages_enable": "Only friends can send you messages now.",
            "page.setting.privacy.online": "Hide my online presence in private chat",
            "page.setting.privacy.online_disable": "Your online presence is now visible in private chat.",
            "page.setting.privacy.online_enable": "Your online presence is now invisible in private chat.",
            "page.setting.privacy.tip": "Refuse tip from strangers",
            "page.setting.privacy.tip_disable": "You can receive tip from all users now.",
            "page.setting.privacy.tip_enable": "Strangers can not tip you anymore.",
            "page.setting.privacy.username": "Hide my username from public lists",
            "page.setting.privacy.username.intro": "If hidden, no one can view your profile by clicking on your avatar or username on public rankings or bets list.",
            "page.setting.privacy.username_disable": "You are visible in all public lists now.",
            "page.setting.privacy.username_enable": "You are Hidden in all public lists now.",
            "page.setting.security": "Security",
            "page.setting.security.setup": "Security Setup",
            "page.setting.security.bind_email": "Link Email",
            "page.setting.security.changeWord": "Change Password",
            "page.setting.security.logout": "You will be logged out in {0} seconds...",
            "page.setting.security.pwd_confirm": "Password Confirmed",
            "page.setting.security.desc1": "For your safety, we need to verify your old password first.",
            "page.setting.security.code": "Verification code",
            "page.setting.security.2fa_code": "2FA Verification Code",
            "page.setting.security.confirm_password": "Confirm password",
            "page.setting.security.disable_btn": "Disable",
            "page.setting.security.disable_twofa": "To disable Two-Factor authentication, enter your one-time Password (OTP)",
            "page.setting.security.emailVerify": "E-mail Verification",
            "page.setting.security.phoneEmailVerify": "Verify Your Phone Number and Email",
            "page.setting.security.enable": "Enable",
            "page.setting.security.modify_tips": "Re-login will be required after changing the password.",
            "page.setting.security.samePassword": "The old and new passwords cannot be the same.",
            "page.setting.security.saveChange": "Save Changes",
            "page.setting.security.twoFactor": "Two-factor Authentication",
            "page.setting.security.verified": "Verified",
            "page.setting.session": "Active Sessions",
            "page.setting.sessions.action": "Action",
            "page.setting.sessions.device": "Device",
            "page.setting.sessions.ipAddress": "IP Address",
            "page.setting.sessions.lastUsed": "Last Used",
            "page.setting.sessions.near": "Location",
            "page.setting.sessions.online": "Online",
            "page.setting.sessions.removeDevice": "Remove Device",
            "page.setting.sessions.title": "Sessions",
            "page.setting.sessions.using": "In Use",
            "page.setting.upload.info": "Please upload the personal page of your passport, which includes your photo, name, date of birth, passport number and other personal information. Please make sure your passport is within the validity period.",
            "page.setting.verify": "Verify",
            "page.setting.verify.backside": "Back Side",
            "page.setting.verify.birthDate": "Date of Birth",
            "page.setting.verify.choose": "Choose either one",
            "page.setting.verify.city": "City",
            "page.setting.verify.idcard": "ID Card",
            "common.passport": "Passport",
            "page.login.sign": "Please Sign up or Log in first",
            "page.setting.verify.config_1": "Front ( jpg, png ) File size limit 1MB",
            "page.setting.verify.config_2": "Back ( jpg, png ) File size limit 1MB",
            "page.setting.verify.config_3": "( jpg, png ) File size limit 1MB",
            "page.setting.verify.country": "Country",
            "page.setting.verify.frontside": "Front Side",
            "page.setting.verify.gender": "Gender",
            "page.setting.verify.passport": "Passport info page",
            "page.setting.verify.postalcode": "ZIP/Postal Code",
            "page.setting.verify.proof": "Proof of residence",
            "page.setting.verify.step": "Step {0}",
            "page.setting.male": "Male",
            "page.setting.female": "Female",
            "page.setting.unspecified": "Unspecified",
            "page.setting.require.number": "Number required",
            "page.setting.require.email": "Email required",
            "page.setting.address.error": "Address error",
            "page.setting.verify.email1": "Verify your email",
            "page.setting.verify.email2": "now to receive {0} bonus.",
            "page.setting.verify.step_1.tit": "For a more considerate service, please fill in the following information to let us know about you. Thank you!",
            "page.setting.verify.step_2.tit": "Please upload a valid government-issued ID document or driving license. It must contain your full name, date of birth, your photo and the document's expiration date.",
            "page.setting.verify.step_3.tit": "Please upload proof of residence for the last three months, such as utility bill, bank statement, government-issued letter and ID (different from the ID provided), etc.",
            "page.setting.verify.step_4.tit": 'Please upload a photo of yourself. In the photo you need to hold your passport or ID, and a piece of paper with "{0}", your username and the date on it. Please make sure your face and the information you hold are clear.',
            "page.setting.verify.title": "Verify Setup",
            "page.setting.verify.word_one": "To serve you better we ask that you provide original identifying documents. This will secure your account in cases of account recovery. It also helps to ensure that the gifts or actual rewards you receive are sent to the correct location.",
            "page.setting.verify.word_two": "An acceptable proof of identification includes a photo of your government issued ID card, driver's license and passport. We will reach out to you via email once this process has been completed.",
            "page.setting.verify.your_photo": "Your Photo",
            "page.setting.verify.video.desc1": "Kindly record a video wherein you are required to hold a piece of paper with the following text: '{0}' and your registered email address.And while recording the video, say the following:",
            "page.setting.verify.video.desc2": "I, (your name), confirming to be the owner of this account (your email address) playing at {0}.",
            "page.setting.verify.video.desc3": "(Video) File size within 200MB",
            "page.setting.verify.video.desc4": "Upload file size exceeds 200MB.",
            "page.setting.verify.video.desc5": "Unsupported file type.",
            "page.setting.your_name": "Your Name",
            "page.settings.confirm_reset_password": "The password reset link will be sent to your email, please check it.",
            "page.settings.confirm_reset_twostep": "2FA key will be sent to your email address",
            "page.settings.confirm_safe": "For account security, please confirm the Withdrawal password.",
            "page.settings.cur_seed": "Current seeds",
            "page.settings.email": "Email",
            "page.settings.fail_send": "Failed to send email",
            "page.settings.forget_password": "Forgot your password?",
            "page.settings.google.enable": "Enable 2FA",
            "page.settings.google.disable": "Disable 2FA",
            "page.settings.google.tips": "To secure your assets, please",
            "page.settings.have_send": "Has been sent",
            "page.settings.new_seed": "New seeds",
            "page.settings.nick_field": "2-16 characters",
            "page.settings.nick_tip": "Do not use special symbols, otherwise your account may not be supported.",
            "page.settings.password": "Login Password",
            "page.settings.password_medium": "Average",
            "page.settings.password_new": "New password",
            "page.settings.password_old": "Old password",
            "page.settings.password_repeat": "New password again",
            "page.settings.password_safe": "Withdrawal Password",
            "page.settings.password_seem": "Passwords do not match. Please try again.",
            "page.settings.password_strong": "Secure",
            "page.settings.password_week": "High risk",
            "page.settings.reset_error": "Please Submit Again",
            "page.settings.reset_expire": "Password Reset Link Has Expired",
            "page.settings.reset_invalid": "Withdrawal Password Reset Link Has Expired",
            "page.settings.reset_minlen": "Password length should not be less than 6 characters",
            "page.settings.reset_pstitle": "Reset Account Password",
            "page.settings.reset_safe": "Reset Withdrawal Password",
            "page.settings.reset_subtitle": "Please Remember The Password",
            "page.settings.same_nickname": "This username is not available. Please choose another one.",
            "page.settings.seed_confirm": "Use New Seeds",
            "page.settings.set.email": "Set login email",
            "page.settings.set.loginpassword": "Set login password",
            "page.settings.twostep": "SECURITY-2FA",
            "page.settings.twostep.auth": "Two-factor Authentication",
            "page.settings.twostep_code": "GOOGLE SECURITY-2FA",
            "page.settings.twostep_disable": "Remove",
            "page.settings.twostep_disable_success": "Secondary authentication is disabled.",
            "page.settings.twostep_enable_success": "Secondary authentication is enabled.",
            "page.settings.twostep_forget": "Lost your Google SECURITY-2FA key?",
            "page.settings.twostep_secret": "Your secret key",
            "page.settings.twostep_tips1": "Enable Two-factor Authentication to protect your account from unauthorized access.",
            "page.settings.twostep_tips2": "Scan the QR code with Google Authenticator App {0} or enter the secret key manually.",
            "page.settings.twostep_tips2_google": "Google Authenticator",
            "page.settings.twostep_tips4": "Write down this code, never reveal it to others. You can use it to regain access to your account if there is no access to the authenticator.",
            "page.settings.twostep_tips5": "Enable Two-factor Authentication using google authenticator to protect your account from unauthorized access.",
            "page.settings.twostep_tit1": "For your account security",
            "page.settings.twostep_tit2": "Please enter Google SECURITY-2FA key",
            "page.settings.verify.desc1": "Thank you for your cooperation. We will inform you as the review finished.",
            "page.settings.verify.desc2": "Thank you! BC really appreciate your identity verification.",
            "page.settings.verify.title1": "All information are submitted",
            "page.settings.verify.title2": "Your identity has been successfully verified",
            "page.settings.year18": "You must be at least 18 years old to play.",
            "page.settings.phone.title": "Verify your phone number and you can use the phone as your second login method.",
            "page.settings.phone.enter.number": "Enter your phone number",
            "page.settings.phone.label": "Mail/Phone Number",
            "page.settings.verify.email.log": "An email has been sent to your inbox. Please click the link in the email to complete the verification.",
            "page.settings.email.desc1": "Confirmation Email Sent",
            "page.settings.email.desc2": "We\u2019ve sent a link to your registered email address, {0} please click on the confirmation link to verify.",
            "page.settings.email.desc3": "Didn\u2019t receive the link?",
            "page.settings.email.desc4": "Email Verification",
            "page.settings.email.desc5": "Please enter and verify your email below.",
            "page.settings.email.desc6": "Enter your email",
            "page.settings.phone.desc1": "Change Phone Number",
            "page.settings.phone.desc2": "Enter your new phone number below to receive a verification code.",
            "page.settings.phone.desc3": "We\u2019ve sent a verification code to {0}, please enter the 6-digit code below:",
            "page.settings.phone.desc4": "For your safety, we need to verify your old phone number first. We\u2019ve sent a verification code to {0}. Please enter the 6-digit code below:",
            "page.settings.phone.desc5": "Phone number is verified.",
            "page.settings.phone.desc6": "Verification code is invalid",
            "page.settings.phone.desc7": "Having trouble?",
            "page.settings.kyc.desc1": "To protect your account security and comply with regulatory requirements, please verify your identity before initiating any transfer related requests.",
            "page.settings.kyc.desc2": "Verify Now",
            "page.settings.kyc.desc3": "Identity Verification Pending Review",
            "page.settings.kyc.desc4": "Verify Your identity",
            "page.settings.kyc.desc5": "Verify email",
            "page.settings.kyc.desc6": "Verify phone",
            "page.settings.kyc.desc7": "Verify phone or email",
            "page.settings.kyc.desc8": "Verify phone and email",
            "page.settings.kyc.desc9": "Verify identity",
            "page.settings.kyc.desc10": "Basic Verification",
            "page.settings.kyc.desc11": "Advanced Verification",
            "page.settings.kyc.desc12": "Personal Information",
            "page.settings.kyc.desc13": "Facial Verification",
            "page.settings.kyc.desc14": "Government ID",
            "page.settings.kyc.desc15": "Proof of Address",
            "page.settings.kyc.desc16": "Video verification",
            "page.settings.kyc.desc17": "Pending Review",
            "page.settings.kyc.desc18": "Verification Failed",
            "page.settings.kyc.desc19": "If you have any questions, you can {0}",
            "page.settings.kyc.desc20": "Re-Verify",
            "page.settings.kyc.desc21": "Review time: Few mins",
            "page.settings.kyc.desc22": "Personal Verification",
            "page.settings.kyc.desc23": "Unable to proceed",
            "page.settings.kyc.desc24": "Unable to proceed the action due to failed identity verification. Please contact support for more details.",
            "page.settings.kyc.desc25": "Contact Live Support",
            "page.share.bigwin_label": "BigWin (Payout)",
            "page.share.crash": "The Crash reaches",
            "page.share.game_label": "Game",
            "page.share.likeBtn": "Like",
            "page.share.luck.day": "I'm lucky today!",
            "page.share.not.day": "Not my day...",
            "page.share.wow.moment": "Wow Moment",
            "page.share.damn.moment": "Damn Moment",
            "page.share.lost_text": "COCO took it all!",
            "page.share.lottery": "LOTTERY JACKPOT IS",
            "page.share.lottery.cutdown": "Lottery Draw Countdown {0} Minutes",
            "page.share.lottery.desc": "You could be the lucky winner! Buy your winning lottery Now!",
            "page.share.lottery.end": "NEW LOTTERY DRAW",
            "page.share.lottery.start": "NEW LOTTERY ROUND",
            "page.share.lottery.start_desc": "A new lottery round just begun! Don\u2019t miss your chance!",
            "page.share.lottery.type_title": "TODAY IS A {0} LUCKY DAY",
            "page.share.rain": "Here comes the lucky rain",
            "page.share.room": "Share your luck to the chat room",
            "page.share.shareBtn": "Share",
            "page.share.share_social": "Share on social media",
            "page.share.share_to_room": "Share to Chatroom",
            "page.share.share_to_room_confirm": "Do you want to share this winning ticket to the chatroom?",
            "page.share.success": "Successfully shared",
            "page.share.username_label": "User Name",
            "page.share.winning_text": "Winning tastes sweet!",
            "page.shitcode.failed": "Failed to redeem bonus link.",
            "page.spin.bonus": "Spin Bonus",
            "page.spin.bronze": "Bronze",
            "page.spin.diamond": "Diamond",
            "page.spin.free": "Lucky Spin",
            "page.spin.free_times": "Lucky Spin: {0}",
            "page.spin.gold": "Gold",
            "page.spin.level": "Spin Level",
            "page.spin.level_above": "Level {0} or Above",
            "page.spin.next_free": "Next Lucky spin",
            "page.spin.nothave": "Uh oh! Sorry but you don't have lucky spin yet!",
            "page.spin.platinum": "Platinum",
            "page.spin.share": "CHECK MY SPIN  BONUS!",
            "page.spin.silver": "Silver",
            "page.spin.totalbonus": "SPIN BONUS TOTAL",
            "page.spin.towin": "Spin To Win",
            "page.spin.available": "You have a free spin available!",
            "page.spin.tryother": "Uh ho! Please try other Spin",
            "page.spin.next_on": "Next spin at",
            "page.sponsorship.title.afa": "AFA",
            "page.sponsorship.title.cloud9": "Cloud9",
            "page.sponsorship.title.david": "David Luiz",
            "page.sponsorship.title.suniel": "Suniel Shetty",
            "page.sponsorship.welcome": "Welcome",
            "page.sponsorship.crypto": "Crypto casino sponsor",
            "page.sponsorship.afa.desc1": "{0} is now an official sponsor of the Argentine Football Association (AFA). This partnership with one of the leading football associations in the world opens up more opportunities for {1} players and AFA fans alike. Both communities have become connected now more than ever. ",
            "page.sponsorship.afa.desc2": "The evolution of technology and sports is truly admirable, providing the best benefits to those who believe in the future of both industries. Today, technology works magically to establish the bridge for igaming and sports communities to engage with convenience and confidence. The recent partnership of {0} and AFA is a prime example that both sectors can work together to offer the best possible experience to sports enthusiasts. Indeed, a new sports era is here\u2014merging physical and digital sports.",
            "page.sponsorship.afa.desc3": "The future is bright for the {0} community. Our AFA sponsorship agreement is just the first of the many plans to connect with world-class communities and establish a strong relationship with recognizable sports association around the world. For {1} supporters, this is the chance to be part of the igaming revolution.",
            "page.sponsorship.afa.desc4": "Fans can expect {0} to support AFA in the coming time and root for their upcoming matches! The next few months are going to be exciting and fruitful for both {1} and AFA communities. {2} community will be enjoying multiple events in the coming time and win some signed goodies by the famous players like Lionel Messi, Paulo Dybala, Angel Di Maria, and other exceptional Argentine superstars!",
            "page.sponsorship.afa.desc5": "Big opportunities are upon us. Don\u2019t miss this chance to become part of the community that makes a big difference. Let\u2019s revolutionize iGaming together.",
            "page.sponsorship.afa.title1": "Official AFA Sponsor",
            "page.sponsorship.afa.title2": "A New Sports Era",
            "page.sponsorship.afa.title3": "The Next Chapter",
            "page.sponsorship.afa.title4": "What can the fans expect?",
            "page.sponsorship.partner": "Official Partner",
            "page.sponsorship.dl.desc1": "David Luiz, a Brazilian football player, is now {0}\u2019s official brand ambassador. This ambassadorship will bring the Brazilian football community and {1} players closer together while also opening up several exciting opportunities for both communities to participate in the future. ",
            "page.sponsorship.dl.desc2": "As one of the best defenders of his generation, David Luiz\u2019s flourishing football career is built on the list of hardships he\u2019s endured and the achievements he\u2019s obtained as a result of his hard work. {0} is honored to be associated with a highly skilled and dedicated athlete like Luiz\u2014one of the renowned players in the Brazilian football community.",
            "page.sponsorship.dl.desc3": "The advancements in technology and sports have significantly reshaped both industries in the best way possible. These advancements have brought various advantages enjoyed by members of their corresponding communities. ",
            "page.sponsorship.dl.desc4": "Such technologies have also helped connect different communities while having one goal in mind. {0} and Luiz will work together to bring better experiences for both the digital and physical sports communities. Such a collaboration introduces a new era for physical and digital sports, which is something that {1} players and sports fans should definitely watch out for in the future.  ",
            "page.sponsorship.dl.desc5": "The {0} community awaits more incredible things as it opens a new chapter. Our partnership with Luiz is just one of the many excellent opportunities that will help us reach out to more audiences and penetrate different markets worldwide. For the {1} community, this serves as the chance to be part of the next advancements that will bring further betterment to the sports and tech industry. ",
            "page.sponsorship.dl.desc6": "Luiz\u2019s fans can expect {0}s unwavering support for the Brazilian footballer in the upcoming months. Several exciting opportunities await both Brazilian football fans and the {1} community throughout the ambassadorship. Luiz will be joining {2}\u2019s official social media activities and engagements, giving {3} players the chance to engage with the Brazilian football star. ",
            "page.sponsorship.dl.title1": "{0}\u2019s Official Brand Ambassador ",
            "page.sponsorship.dl.title2": "A Brand New Era Awaits",
            "page.sponsorship.suniel.new.desc1": "We are thrilled to announce our collaboration with the legendary Bollywood actor, producer, and entrepreneur, the one who makes our Dhadkan go faster, Suniel Shetty. As a leading figure in the entertainment industry, Mr. Shetty brings his immense talent, passion, and influence to our gaming platform.",
            "page.sponsorship.suniel.new.desc2": "With a career spanning decades, Suniel Shetty has captivated audiences with his remarkable performances in numerous blockbuster movies. His dedication to excellence, authenticity, and innovation aligns perfectly with our vision for revolutionizing the world of gaming.",
            "page.sponsorship.suniel.new.desc3": "By joining forces with Suniel Shetty, we aim to create a dynamic and immersive gaming experience for our users. His endorsement not only brings tremendous credibility to our brand but also opens doors to a wider audience, both within India and across the globe. Suniel Shetty's immense popularity and loyal fan base make him the perfect ambassador for {0}.",
            "page.sponsorship.suniel.new.desc4": "As an entrepreneur himself, Suniel Shetty understands the importance of embracing new technologies and opportunities. His forward-thinking mindset and entrepreneurial spirit perfectly complement our mission to merge the worlds of gaming, providing users with innovative and rewarding gameplay experiences.",
            "page.sponsorship.suniel.new.desc5": "Suniel Shetty's passion for innovation and embracing new horizons perfectly aligns with our core values. Just as he has fearlessly explored diverse roles in his illustrious career, we are dedicated to pushing the boundaries of gaming. Suniel's charismatic persona, coupled with his progressive mindset, makes him an ideal partner in our quest to revolutionize the gaming industry. Together, we strive to create an inclusive and engaging platform that not only entertains but also empowers gamers to unleash their true potential, just as Suniel Shetty has consistently pushed the boundaries of his own craft.",
            "page.sponsorship.suniel.new.desc6": "Furthermore, Suniel Shetty has expressed his genuine interest in growing with us, actively participating in shaping our future endeavors. With his deep understanding of the Indian market, cultural nuances, and vast network, Suniel will serve as a valuable advisor, helping us tailor our offerings to the unique preferences and aspirations of Indian gamers. His insights and guidance will be instrumental in enhancing our product, ensuring that it resonates with the Indian gaming community and delivers an unparalleled experience.",
            "page.sponsorship.suniel.new.desc7": "We are honored to have the Anna Suniel Shetty as a part of our journey and look forward to the exciting collaborations and initiatives that lie ahead. Together, we aim to redefine the boundaries of gaming, ushering in a new era of entertainment, engagement, and endless possibilities.",
            "page.sponsorship.suniel.new.title1": "{0}\u2019s Official Brand Ambassador ",
            "page.sponsorship.suniel.new.title2": "Inspirations & Innovations",
            "page.sponsorship.suniel.new.title3": "The Next Chapter",
            "page.sponsorship.argentina.team": "Argentina National Football Team",
            "page.sponsorship.cloud9.desc1": "{0} has officially become Cloud9\u2019s official partner! A new partnership is formed to offer {1} community the opportunity to be part of the growing iSports community led by Cloud9. On top of holding the title of Crypto Casino of the YEAR, {2} is set to support Cloud9 on all CS:GO related initiatives while continuously aiming for to take home the next iGaming titles.",
            "page.sponsorship.cloud9.desc2": "Cloud9 is recognizable because of its participation in the League Championship Series and League of Legends. The organization is home to top-level esports players around the world. It\u2019s such an honor to be connected with a legendary organization while bringing significant change to iGaming and eSports.",
            "page.sponsorship.cloud9.desc3": "Have you ever imagined eSports and iGaming colliding and forming one huge podium where both communities can interact with each other?",
            "page.sponsorship.cloud9.desc4": "Well, welcome to the new era of eSports and iGaming where crypto casino meets online video games! The new partnership of {0} and Cloud9 is a great start for a new digital gaming revolution. Technology is evolving, so is iGaming with {1}!",
            "page.sponsorship.cloud9.desc5": "After establishing a relationship with Cloud9, {0} is set to expand by connecting to other communities in the Sports and Gaming industry.",
            "page.sponsorship.cloud9.desc6": "Be part of the growing community. Soon, {0}, Cloud9, and other major names in digital gaming will come together and offer more utilities to players and fans.",
            "page.sponsorship.cloud9.desc7": "With Cloud9 & {0} partnership, there are huge events in the future where the {1} community can participate in major giveaways like merchandise raffles, Crypto giveaways, and more. As part of the existing relationship, {2} will be supporting Cloud9 all the way through all its CS:GO events. More activities will be revealed, so make sure that you\u2019re part of growing {3} ecosystem!",
            "page.sponsorship.cloud9.title1": "Cloud9 Official Partner",
            "page.sponsorship.cloud9.title2": "A New Era of eSports and iGaming",
            "page.sponsorship.cloud9.name": "Esports Organizations",
            "page.task.daily": "Daily Quests",
            "page.task.newbie_tit": "Claim your welcome bonus and get more rewards by completing tasks.",
            "page.task.empty": "No new quests will be generated daily if you don't log in every day.",
            "page.task.expire": "Expires in",
            "page.tasks.expire": "Tasks Expired",
            "page.task.unfinished": "Unfinished quests",
            "page.task.unfinished.desc": "Only the latest week shown",
            "page.task.unfinished.tip": "Only the latest two refreshes will be displayed here for the tasks in which you participated but didn't fully complete.",
            "page.task.previous": "Previous Quests",
            "page.task.receive": "Claim",
            "page.task.claim": "Claim your rewards",
            "page.task.claim.rewards": "Go to Claim your rewards",
            "page.task.received.info": "{0} of the weekly quest progress achieved, and you have received a quest reward",
            "page.task.rewrards_amount": "Accumulated rewards: {0}",
            "page.task.week": "Week {0}",
            "page.task.weekly": "Weekly Quests",
            "page.tips.bigtip.info": "Big Tip Alert! Do you confirm this tip?",
            "page.tips.bigtip.private": "Private Tip (Tip info won't show up in the public chat room)",
            "page.private.report": "Please choose the reporting reason:",
            "page.tips.gift": "Send Tip ",
            "page.tips.message": "Message ",
            "page.tips.Optional": "(Optional)",
            "page.tips.presentSuc": "Congratulations! You got {0} from COCO's cave.",
            "page.tips.tip_amount": "Tip Amount ",
            "page.tips.tipped": "I tipped",
            "page.tips.wraning": "It is prohibited to use this function to trade/ transfer",
            "page.tips.notice": "Good luck and have fun!",
            "page.user.copy_invite": "Copy link",
            "page.user.down_invite": "Download image",
            "page.user.got": "Congratulations on getting ",
            "page.user.other_login": "Log in directly with",
            "page.user.profile.chat": "Chat",
            "page.user.profile.date": "Date",
            "page.user.profile.favorite": "Top 3 Favorite Games",
            "page.user.profile.joined": "Joined on",
            "page.user.profile.likes": "Likes",
            "page.user.profile.like_tip": "Only others can click Like for you.",
            "page.user.profile.medals": "Medals",
            "page.user.profile.position": "Position",
            "page.user.profile.statistics": "Statistics",
            "page.user.profile.statistics_hidden": "Statistics hidden",
            "page.user.profile.title": "User Information",
            "page.user.profile.total_bets": "Total Bets",
            "page.user.profile.total_wagered": "Total Wagered",
            "page.user.profile.total_wins": "Total Wins",
            "page.user.profile.win": "Win",
            "page.user.redeem": "Exchange To BTC",
            "page.user.setting.affiliate": "Affiliate",
            "page.user.setting.information": "User Information",
            "page.user.setting.logout": "Log out",
            "page.user.setting.statistics": "Statistics",
            "page.user.setting.transactions": "Transactions",
            "page.user.setting.logout.desc": "Are you sure you want to log out? Check our great promotions and bonuses before you leave!",
            "vip.bronze": "Bronze",
            "vip.silver": "Silver",
            "vip.gold": "Gold",
            "vip.platinum": "Platinum",
            "vip.diamond": "Diamond",
            "vip.host": "VIP HOST",
            "vip.host.desc": "VIP Host is your exclusive customer support. Feel free to contact them any time.",
            "vip.host.unlock": "Unlock your exclusive <b>VIP HOST</b> at <span>VIP 38</span>",
            "vip.subtit": "Level up to get exclusive access to generous rewards and personalized gifts! Join our community of elite players and enjoy the best that online gaming has to offer.",
            "vip.wager": "Wager $1.00 = 1 XP; Sports Wager $1.00 = 2 XP",
            "vip.wagerdesc": "All wagers are converted to USD at the current rate",
            "vip.benefits.table": "Benefits Table",
            "vip.benefits.view": "View Benefits Table",
            "vip.benefits.tit": "VIP Benefits",
            "vip.benefits.subtit": "All above benefits included",
            "vip.benefits.raining": "Raining",
            "vip.benefits.coindrops": "Coin Drops",
            "vip.benefits.tips": "Tips",
            "vip.learn.vip": "Learn more about {0}\u2019s VIP system",
            "vip.benefits.levelupbonus": "Level Up Bonus",
            "vip.benefits.treasuresdesc": "Get all {0} surprising secret treasures! The higher the VIP level you are, the more you will get.",
            "vip.benefits.bonusdesc": "Bonus increase as the VIP leveling up. Speed up!",
            "vip.benefits.everylevel": "Every Level",
            "page.promotion.redeem.here": "Redeem Bonus Code here",
            "vip.benefits.secrettreasure": "Secret Treasure",
            "vip.benefits.weeklybonus": "Weekly Cashback",
            "vip.benefits.monthlybonus": "Monthly Cashback",
            "vip.benefits.nofeewithdraw": "No-fee Withdrawal",
            "vip.benefits.exclusiveperks": "Exclusive SVIP perks",
            "vip.benefits.luxurygiveaway": "Luxury giveaway",
            "vip.benefits.levelup": "Level-up Bonus",
            "vip.benefits.levelup.rewards": "Level Up Rewards",
            "vip.benefits.levelup.rewards.tips": "Level up to get exclusive rewards.",
            "vip.benefits.levelup.rewards.viptext": "Current VIP",
            "vip.benefits.levelup.reward.xptonext": "XP to Next Level",
            "vip.benefits.levelup.reward.btngray": "View VIP Club",
            "vip.benefits.title": "VIP Reward Breakdown",
            "vip.next.bonus": "Next Level Bonus {0}",
            "vip.next.bonus.level": "Next Level Bonus available at VIP {0}!",
            "vip.bonus.title": "Discover the ultimate gaming experience with {0}'s exclusive VIP system!",
            "vip.bonus.included": "Benefits from previous levels are all included",
            "vip.bonus.prize": "Total prize",
            "vip.bonus.local": "equivalent in local currency",
            "vip.bonus.recharge": "Activate your Recharge and claim {0} bonus of wager*1% for 7 days in a row.",
            "vip.bonus.week": "Receive your weekly bonus of {0} approximately based on your wager amount.",
            "vip.bonus.month": "Receive your monthly bonus of {0} approximately based on your wager amount.",
            "vip.bonus.rain": "Rain algorithm rewards for highly active players in chat.",
            "vip.bonus.coindrop": "Create a coin drop for friends in the chat.",
            "vip.bonus.privatechat": "Build connections and share strategies in private chat.",
            "vip.bonus.vipspin": "Starting from VIP level 8, you will receive an extra lucky spin with each level-up.",
            "vip.bonus.tips": "Show appreciation for other players by sending them tips.",
            "vip.bonus.sports": "Additional rewards and benefits for sports bettors.",
            "vip.bonus.host": "Enjoy on-demand service and exclusive benefits.",
            "vip.bonus.nofee": "Seamless withdrawals with zero fees.",
            "vip.bonus.exclusiveperks": "Uncover unimaginable surprises as our Diamond VIP.",
            "vip.bonus.luxurygiveaway": "Join for an exclusive chance to win marvelous surprises.",
            "page.vip.dialog.table.head5": "Bonus",
            "page.vip.receive.congrats": "CONGRATS! YOU GOT",
            "page.vip.rights.des12": "Receive up to 20% back on house commission for every bet you make, win or lose!",
            "page.vip.rights.des15": "Need a balance boost? Claim free cash back as soon as every 10 minutes.",
            "page.vip.rights.des4": "Send a little (or a lot of) luck to your friends, you\u2019ve earned the ability to tip others.",
            "page.vip.rights.des5": "The higher rank you are, the more surprising it will be",
            "page.vip.rights.des6": "Chat in private chat with your closest friends",
            "page.vip.rights.des7": "Randomly reward players in chat room every 6 hours.",
            "page.vip.rights.des8": "You can now get coin drops from the chatroom for a little extra luck!",
            "page.vip.rights.locked": "Locked",
            "page.vip.required.xp": "Required XP",
            "page.vip.rights.title11": "Where is COCO Bonus",
            "page.vip.rights.title12": "Rakeback",
            "page.vip.rights.title3": "Roll Competition",
            "page.vip.rights.unlocked": "Unlocked",
            "page.vip.view.levelup": "View level up details",
            "page.vip.unlock": "Unlock at VIP {0}",
            "page.vip.maintitle": "Exclusive <span>VIP</span> benefits",
            "page.vip.maindesc": "Join our VIP Club now and get ready to be showered with gifts, giveaways, and amazing features! Experience the thrill of higher cash back and exclusive rewards that are sure to leave you amazed.",
            "page.vip.start.play": "Start playing",
            "page.vip.view.benefits": "View benefits",
            "page.vip.dialog.title": "VIP Level System",
            "page.vip.benefits.nofee": "NO-FEE withdrawal",
            "page.vip.benefits.nofee.desc": "Unlock the No-fee withdrawal perks at VIP 38 and withdraw your winnings with ease and no additional charges.",
            "page.vip.benefits.spin": "Rewarding lucky spin",
            "page.vip.benefits.spin.desc": "Spin the wheel and receive bigger prizes with our exciting Lucky Spin as you level up.",
            "page.vip.benefits.vip": "Dedicated VIP host",
            "page.vip.benefits.vip.desc": "Unlock the No-fee withdrawal perks at VIP 38 and enjoy your VIP host\u2019s personalized attention and exclusive benefits.",
            "page.vip.benefits.chat": "Personal private chat",
            "page.vip.benefits.chat.desc": "Enjoy private chat with other players, build connections, and share strategies.",
            "page.vip.benefits.bonus": "Amazing level up bonus",
            "page.vip.benefits.bonus.desc": "A surprise reward awaits and gets unlocked multiple times as you level up.",
            "page.vip.benefits.tips": "Fun tips &  Raining",
            "page.vip.benefits.tips.desc": "Show appreciation with Tips, or get lucky with Coin Drops for a chance to win rewards.",
            "page.vip.question.title1": "What is \u2018Level-up Bonus\u2019?",
            "page.vip.question.answer1": "Showcasing our appreciation for players, we reward them with a Level Up bonus upon reaching the next level. Once players reach Level 38 and higher, we have boosted the level-up bonus to be slightly higher than the regular level-up bonus available at lower levels.",
            "page.vip.question.title2": "What is \u2018Secret Treasure\u2019?",
            "page.vip.question.answer2.new": "We have special surprises that are given at different levels during each rank to reward our players for their dedication and commitment to {0}. Since it is a \u2018secret\u2019, we can only reveal that the higher the VIP level you are, the more you will get.",
            "page.vip.question.title3": "What is \u2018Raining\u2019?",
            "page.vip.question.answer3-1": "Engage in chat conversations throughout the day to receive free coins as part of the Constant Chat Rains bonus.",
            "page.vip.question.answer3-2": "Six players level higher than 4 will be randomly selected and rewarded in chat room every 6 hours.",
            "page.vip.question.answer3-3": "Bonus will be different according to the currencies.",
            "page.vip.question.answer3-4": "Players will be randomly selected by Rain algorithm. The players who send more messages have the higher probability to get rewarded.",
            "page.vip.question.answer3-5": "But even if the user has sent only one message, there is still a chance that they can receive the rain bonus.",
            "page.vip.question.answer3-6": "Rain information will be sent to the chat room by robots.",
            "page.vip.question.answer3-7": "Having more than one account per user is prohibited. You will get the lower possibility of receiving rain and BC will suspend your withdrawals for a manual review in the fraud prevention system which may take up to 24 hrs. We do not guarantee withdraw processing and may ban account with your balance in it. If you have already had more than one account please self-surrender by contacting Live Support.",
            "page.vip.question.title4": "What is \u2018Coin Drop\u2019?",
            "page.vip.question.answer4-1": "If you haven\u2019t reached VIP Level 7 and unlocked \u2018Coin Drop\u2019, you need to be active and quick in order to grab the coins when it happens in Public Chat. The rewards go to the fastest participants.",
            "page.vip.question.answer4-2": "Once you have reached VIP Level 7, you may create your own \u2018Coin Drop\u2019 and customize the amount and quantity of recipients before you share your good luck and generosity with other players in Public Chat.",
            "page.vip.question.title5": "What are \u2018Tips\u2019?",
            "page.vip.question.answer5": "You may tip other players once you reach VIP Level 8. Tipping is how you show appreciation and share your generosity with other players in {0}. You can decide how much you want to send to the other players.",
            "page.vip.question.title6": "What is \u2018Recharge\u2019?",
            "page.vip.question.answer6-1": "\u2018Recharge\u2019 is a unique and exciting feature that rewards players with split bonuses (Recharges) throughout the week based on their gaming activities. Players can set different intervals to claim these bonuses, providing them with an added incentive to keep playing. This article will guide you through everything you need to know about Recharge, including eligibility, how to claim, frequency options, calculation, and the latest updates to the Recharge reward structure.",
            "page.vip.question.answer6-2": "In basic terms, \u2018Recharge\u2019 means that players receive split bonuses (Recharges) throughout the week at different intervals set by the player themselves. This feature not only keeps players engaged but also adds an extra layer of excitement to the gaming experience.",
            "page.vip.question.answer6-3": "Eligibility for Recharge Activation",
            "page.vip.question.answer6-4": "To be eligible for Recharge Activation, players must meet the following criteria:",
            "page.vip.question.answer6-5": "Have a VIP level of 22 and above",
            "page.vip.question.answer6-6": "Have wagered a minimum of $1,000 in the past 7 days (24/7)",
            "page.vip.question.answer6-7": "Once a player meets these requirements, they can request Recharge Activation. Upon activation, their Recharge will be redeemable for the next 7 days.",
            "page.vip.question.answer6-8": "Read more in Help Center",
            "page.vip.question.title7": "What is \u2018Weekly Cashback\u2019?",
            "page.vip.question.answer7": "The \u2018Weekly Cashback\u2019 is an exclusive perk on our platform designed for VIP 22+ players. As the name suggests, this bonus is issued once a week. It is an automatic bonus paid out every Friday to players at VIP level 22 and above. The size of the bonus depends on how much a player has wagered during the past week with a minimum wager requirement of $1000 between the period Friday-Thursday. The calculation for the weekly cashback remains the same, and the only difference is that it may not align with your Recharge renewals.",
            "page.vip.question.title8": "What is \u2018Sports Weekly Bonus\u2019?",
            "page.vip.question.answer8-1": "In addition to our existing Weekly Bonus for VIP level 22+ players, we are now introducing the BC Sports Club weekly bonus as an additional perk for sports bettors. The new Sport bonus is specific only to Sport Wager and is calculated based on the player's wagering amount from Saturday to Friday, and distributed automatically every Saturday. With the introduction of the BC Sports Club bonuses, our VIP level 22+ players can now enjoy even more rewards and a thrilling sports betting experience!",
            "page.vip.question.answer8-2": "BC Sports Club offers a range of weekend bonuses based on your weekly wager amount in our Sportsbook.",
            "page.vip.question.answer8-3": "Wager $500 or more from Saturday to Friday and receive a $5 Weekend Bonus!",
            "page.vip.question.answer8-4": "Wager $2,500 or more and receive a $30 Weekend Bonus!",
            "page.vip.question.answer8-5": "Wager $5,000 or more and receive a $70 Weekend Bonus!",
            "page.vip.question.answer8-6": "Wager $10,000 or more and receive a $150 Weekend Bonus!",
            "page.vip.question.answer8-7": "These bonuses apply to all markets and odds in our Sportsbook, giving you more opportunities to win big!",
            "page.vip.question.answer8-8": "The weekly wager is calculated from the previous Saturday 00:00hrs to Friday 23:59hrs (UTC).",
            "page.vip.offer.the_morpheus": "The Morpheus",
            "page.vip.offer.special_bonus": "Special Deposit Bonus",
            "page.vip.offer.next_deposit": "Money for next deposit",
            "page.vip.offer.txt1": "You have received COCO's offer of a special deposit bonus chance.",
            "page.vip.offer.txt2": "If you choose to accept this special offer, your next deposit will earn a {0} bonus money award based on the deposit amount(minimum deposit requirement {1}, maximum bonus {2}). ",
            "page.vip.offer.txt3": "This bonus is withdrawable after a {0} rollover. Maximum withdrawable reward is {1} of your deposit amount. And bonus money expires in {2} days.",
            "page.vip.offer.txt4": "The bonus money and the deposit amount are linked. If you wish to withdraw the deposit amount after achieving a {0}x rollover, you will need to meet the specified rollover requirements for the bonus amount or cancel the bonus money first.",
            "page.vip.offer.txt5": "Special deposit bonus offer enabled. Please go to deposit and check your bonus.",
            "page.vip.offer.txt6": "Yes, I accept the special offer.",
            "page.vip.offer.txt7": "Special offer accepted",
            "page.update.launching": "Site upgrading, launching in",
            "page.update.thank": "Thank you for your understanding and patience!",
            "page.update.link": "While waiting, join our",
            "page.update.giveaway": "{0} giveaway",
            "roll.tips.seed": "You may use this function to set a new server seed + a new client seed, they can be randomly generated or customized (at least 10 characters), and the number of bets will be reset to zero.",
            "title.achieve": "Master Medals",
            "title.app_download": "APP",
            "title.blackjack": "Blackjack",
            "title.blackjack_help_seed": "Seed generation algorithm",
            "title.roulette": "Roulette",
            "title.baccarat": "Baccarat",
            "title.bonus": "BONUS",
            "title.bonus_crocodile": "Where is {0}",
            "title.bonus_roll": "Roll",
            "title.chat": "Chat room",
            "title.crash": "CRASH",
            "title.crash_help_autoRun": "Auto cash out",
            "title.crash_help_trends": "Understanding Trend Chart",
            "title.deposit_bonus_terms": "Deposit Bonus Terms",
            "title.bonus_terms": "Bonus Terms",
            "title.bonus.terms_conditions": "Bonus Terms & Conditions",
            "title.bonus.tc": "Bonus T&C",
            "title.forget": "Reset Password",
            "title.set.pwd": "Set Password",
            "title.games": "Games",
            "title.help": "Help",
            "title.help_agreement": "User Agreement",
            "title.help_aml": "AML",
            "title.help_contactus": "Support",
            "title.help_fee": "Fee",
            "title.help_gamebleaware": "Gamble Aware",
            "title.help_googlecheck": "Google Authenticator",
            "title.help_normalpro": "FAQ",
            "title.help_passcurrency": "Currency",
            "title.help_privacy": "Privacy Policy",
            "title.help_protectminors": "Protecting Minors",
            "title.help_reglog": "Registration and Login",
            "title.help_responsible_gambling": "Responsible Gambling",
            "title.help_selfexclusion": "Self-exclusion",
            "title.help_swappolicy": "BC Swap Policy",
            "title.help_terms": "Terms Of Service",
            "title.help_coinlimit": "Coin Accuracy Limit",
            "title.home": "HOME",
            "title.join_us": "Work with us",
            "title.login": "Sign in",
            "title.max.win": "Max Win",
            "title.megaways": "Megaways",
            "title.official_mirrors": "Official Mirrors",
            "title.prize": "Bankroll",
            "title.profile": "User info",
            "title.provider": "Provider",
            "title.providers": "Providers",
            "title.regist": "Sign up",
            "title.script_add": "Add a script",
            "title.script_preview": "Preview the script",
            "title.settings": "Settings",
            "title.settings_nickname": "My Profile",
            "title.settings_twostep": "Security-2FA",
            "title.sweetcodes": "Bonus code",
            "title.terms_sports": "Terms Of Sports",
            "title.user_achieve": "Medal",
            "title.user_achieve_detail": "Medal details",
            "title.user_agreement": "Help center",
            "title.user_chat": "Private chat",
            "title.user_coindrop": "Coindrop",
            "title.user_level": "VIP",
            "title.user_notice": "Notice",
            "title.user_rain": "Rain",
            "title.user_sendtip": "Tip",
            "title.exclusives": "BC Exclusives",
            "title.wallet": "Wallet",
            "title.wallet_record": "Record",
            "title.wallet_withdraw": "Withdraw",
            "user.casino_code": "Referral/Promo Code",
            "user.default_avatar_select": "Default Avatar",
            "user.edit_avatar": "Edit Your Avatar",
            "user.edit_avatar_pan": "Zoom and Adjust",
            "user.enter.casino_code": "Enter Referral/Promo Code",
            "user.friend_request": "Friend Request",
            "user.friend_request_msg": "Friend Request Received",
            "user.nick_new": "Username ",
            "user.report.desc1": "Inappropriate content (spam, ad, ref links, etc.)",
            "user.report.desc2": "Insults, provocations, cursing ",
            "user.report.desc3": "Begging ",
            "user.report.desc4": "Scam attempt ",
            "user.signing_up": "Only valid for first 24 hours after signing up.",
            "wallet.address_notfind": "We do not support inactive addresses",
            "wallet.add_coin": "Click to add and use Coins",
            "wallet.already_sentbalance": "Already sent to your balance",
            "wallet.annual_rate": "Annual Percentage Rate",
            "wallet.annual.rate": "Annual Rate",
            "wallet.total.assets": "Total Vault Pro Assets",
            "wallet.bank_account": "Bank Account",
            "wallet.all.currency": "All Currencies",
            "wallet.bill.alert": "Only the latest 100 betting history is recorded.",
            "wallet.hide_balance": "Hide {0} balance",
            "wallet.howto_deposit": "How to make a deposit?",
            "wallet.see_video": "See Instruction Video",
            "wallet.bank_title": "Transfer to the following bank account",
            "wallet.realmoney": "Real Money",
            "wallet.bonusmoney": "Bonus Money",
            "wallet.bcd.depoist.desc_3": "Find your treasure!",
            "wallet.bcd.deposit.desc_1": "Best bonus collection",
            "wallet.bcd.deposit.desc_2": "Generous bonus are ready",
            "wallet.bcd.deposit.extra": "+ Extra {0} Bonus",
            "wallet.bcd.deposit.first": "First Deposit",
            "wallet.bcd.deposit.fourth": "Fourth Deposit",
            "wallet.bcd.deposit.second": "Second Deposit",
            "wallet.bcd.deposit.third": "Third Deposit",
            "wallet.bcd.deposit.first_title": "First Deposit Bonus",
            "wallet.bcd.deposit.fourth_title": "Fourth Deposit Bonus",
            "wallet.bcd.deposit.second_title": "Second Deposit Bonus",
            "wallet.bcd.deposit.third_title": "Third Deposit Bonus",
            "wallet.bcd.description.five": "{0} to claim your bonus now.",
            "wallet.bcd.description.four": "Deposit BCD into Vault Pro and enjoy up to {0} Annual Percentage Rate return.",
            "wallet.bcd.description.one": "{0} (BC Dollar) is a crypto launched by {1}. You can play games, tip, coindrop, rain with it.",
            "wallet.bcd.description.two": "{0} , You can {1} BCD into any other currencies at any time and withdraw it to your wallet.",
            "wallet.bcd.dialog.released": "Unlocked  ",
            "wallet.bcd.dialog.title": "Bonus Unlock",
            "wallet.bcd.dialog.treasure": "BCD Treasure Box",
            "wallet.bcd.lucked": "Locked",
            "wallet.bcd.more": "More",
            "wallet.bcd.hide": "Hide",
            "wallet.bcd.morepop.title": "Starting at {0}$ Deposit Bonus",
            "wallet.bcd.more_about": "More about BCD",
            "wallet.bcd.shitcode.worked": "The bonus code worked!",
            "wallet.bcd.starting": "(or above to get bonus)",
            "wallet.bcd.starting_first": "Limited Time Deposit Bonus",
            "wallet.bcl.description.four": "Of course, you can send BCL to other players through the Tip function. Also, you can generate a Gift {0} to share the BCL transfer link to social platforms or messaging apps.",
            "wallet.bcl.description.one": "{0} (BC Lottery) is a token created by {1} for players who love the Lottery. You can use BCL to redeem lottery tickets in the Lottery at any time, 1 BCL for every one {2} ticket. ",
            "wallet.bcl.description.two": "You can exchange {0} through {1} at any time, or you may receive BCL from the {2} official community or other players through Gift Link, Swap BCL to other coin is not supported.",
            "wallet.blockchain": "Blockchain",
            "wallet.buy.swap": "Buy & Swap",
            "wallet.buy.title": "Buy Crypto",
            "wallet.cash.title": "Cashier",
            "wallet.channel": "Channel",
            "wallet.choose.method": "Choose a Payment Method",
            "wallet.coin.notfound": "Coin or token not found",
            "wallet.connect_error": "Please install Wallet and try again",
            "wallet.continue.deposit": "Continue Deposit Process",
            "wallet.continuepay": "Continue to pay",
            "wallet.contract_address": "Contract Address",
            "wallet.crypto": "Crypto",
            "wallet.crypto.currency.new": "Crypto Currency",
            "wallet.choose.network": "Choose Network",
            "wallet.crypto.currencies": "Crypto Currencies",
            "wallet.realmoney.currencies": "Real Money Currencies",
            "wallet.setcurrency": "Set Your Currency",
            "wallet.setcurrency.desc": "Choose your currency. You can always change it later if needed.",
            "wallet.assets.portfolio": "Assets Portfolio",
            "wallet.assets.text": "Assets",
            "wallet.assets.today.return": "Today\u2019s return",
            "wallet.assets.total.return": "Total return",
            "wallet.new.deposit_finish": "I\u2019ve Made Deposit",
            "wallet.new.deposit_scan": "Scan to deposit",
            "wallet.new.deposit_scan.desc": "Open your Vcreditos APP to scan your personal QR code to deposit to your BC wallet",
            "wallet.new.deposit_maintenance": "This currency is under maintenance currently, and it will be available for deposit soon. ",
            "wallet.deposit_amount": "Deposit amount",
            "wallet.deposit.currency": "Deposit Currency",
            "wallet.deposit_with": "Deposit with",
            "wallet.new.deposit_details": "Deposit Details",
            "wallet.new.deposit_require": "required for deposit",
            "wallet.deposit_arrival": "Deposit may take from a few minutes to an hour depending on the blockchain.",
            "wallet.disabled_pc_depoist": "You can only use your <b>mobile device</b> to make deposits via this payment method, or you can change a different payment method.",
            "wallet.disclaimer": '<b className="tit">Disclaimer:</b> Please double-check the bank account number before transaction. {0} is not responsible for any asset lost due to bank account number issues.',
            "wallet.enter.integer": "Please enter an integer greater than 0",
            "wallet.eth_walletConnect": "Wallet Connect",
            "wallet.exchange": "Send Address",
            "wallet.exchange.arrival": "Estimated Time",
            "wallet.exchange.expired_tip": "Transaction failed. Please go to {0} and retry, or contact the {1} for help.",
            "wallet.exchange.failed_tip": "Transaction failed. Please go to {0} and retry.",
            "wallet.exchange.remaining": "Time remaining",
            "wallet.favorite_list": "My Favorite Coins",
            "wallet.fiat.new.paytm_details": "Payment Deposit Details",
            "wallet.fiat.new.payment_method": "Payment Method",
            "wallet.fiat.new.already_paid": "Already Paid?",
            "wallet.fiat.new.enter": "Enter the {0} to verify your payment",
            "wallet.fiat.new.paytm_notice": '<b class="cl-primary">NOTICE:</b> Please transfer funds within 10 minutes using the payment details specified below. Then enter the UTR number after your transfer. Otherwise, your deposit will not be credited on time.',
            "wallet.fiat.new.tenminutes": "Please transfer funds within <b>10 minutes</b> using the payment details specified below.",
            "wallet.fiat.new.tenminutes.utr": "Please transfer funds within <b>10 minutes</b> using the payment details specified below. Then enter the <b>UTR number</b> below after your transfer. Otherwise, your deposit will not be credited on time.",
            "wallet.fiat.new.tenminutes.opt": "Please transfer funds within <b>10 minutes</b> using the payment details specified below. Enter the <b>OTP code</b> below after your transfer, and you will see an <b>MPIN</b> pop-up to approve this transaction, or you may have to check in-app approval(s) if you don\u2019t see <b>MPIN</b> pop-up. Otherwise, your transaction may fail.",
            "wallet.fiat.new.mpesa": "A confirmation pop-up should be sent to you by the mobile network operator, please confirm your transaction as soon as possible.",
            "wallet.fiat.vcreditos_tip": "Please transfer funds using Vcreditos with the deposit details below.",
            "wallet.fiat.buy_tip": "You will now leave {0} and be taken to {1}. Services relating to payments are provided by {2} which is a separate platform owned by a third party. Please read and agree to {3}'s Terms of Use before using their service. For any questions relating to payments, please contact support.{4}.com. {5} does not assume any responsibility for any loss or damage caused by the use of this payment service.",
            "wallet.fiat.new.merchant_id": "Merchant ID",
            "wallet.fiat.new.merchant_information": "Merchant Information",
            "wallet.fiat.create_error": "Payment submission failed",
            "wallet.fiat.deposit.tip": "If you have questions regarding this transaction, you can submit a ticket after the deposit order has been created for {0} hours.",
            "wallet.fiat.deposit.limit1": "You just made a deposit using this payment method. Please complete previous transaction or change a payment method.",
            "wallet.fiat.deposit.limit2": "You just made a deposit for {0}, unfortunately you cannot make more than {1} transactions within 15 min. Please complete previous transaction or change currency.",
            "wallet.fiat.deposit.limit3": "You just made a deposit for {0}, unfortunately you cannot make more than {1} transactions within 1 hour. Please complete previous transaction or change currency.",
            "wallet.fiat.depositinfo": "Supported by {0} official and trusted providers. To check the result of deposit, please go to {1} Panel. Feel free to contact our customer service.",
            "wallet.fiat.depositinfo2": "If you have already made deposit from <Payment method Name>, it might take 1min-2hrs to arrive. Please go to {0} Panel to check the deposit status.",
            "wallet.fiat.desc": "Please note that these are currency approximations. All bets & transactions will be calculated in equivalent currencies. For more details feel free to contact our live support.",
            "wallet.fiat.list_mainted": "Service under maintenance, please try again later.",
            "wallet.fiat.payment_tip": "Please input this security code at payment page",
            "wallet.fiat.pay_tip": "You are going to be taken to a third party platform that facilitates the fiat payment. Please be aware that you are also accepting to their terms of service which runs independently to ours.",
            "wallet.fiat.withdrawinfo": "To check the result of withdraw, please go to {0} panel. Feel free to contact our customer service.",
            "wallet.fiat.tips.astropay": "Upon successful withdrawal, the funds will be transferred to your Astropay account.",
            "wallet.fiat.expired.order_tip": "For fiat transactions, only the last {0} months are available here due to some security reasons.",
            "wallet.fiat.estimate.arrival.time": "EAT: {0} min",
            "wallet.fiat.tips.brl": "Please make sure the <b>CPF number</b> you entered here matches the <b>CPF number</b> you will use to make this transfer. Otherwise, you may lose your funds or the transaction may fail. ",
            "wallet.jb_about": "About JB",
            "wallet.jb_free": "Fee-free withdrawal",
            "wallet.jb_desc": "JB is the proprietary game currency (in-house game currency) of {0} platform. It can be acquired by VIP level-up, lucky spin and other event rewards.<br />In addition to being used for games, JB can also be used to boost your Rakeback and deduct the Withdrawal fees.<br />More amazing JB functions coming soon..Stay Tuned!",
            "wallet.jb_tips": "Unlock at VIP{0}. No-fee withdrawal once per day.",
            "wallet.jb_tip_1": "JB is the proprietary game currency (in-house game currency) of {0} platform. It can be acquired by VIP level-up, lucky spin and other event rewards.",
            "wallet.jb_tip_2": "In addition to being used for games,JB can also be used to boost daily Rakeback and substituted for withdrawal fees.",
            "wallet.jb_tip_3": "More amazing JB functions coming soon... Stay Tuned!",
            "wallet.label.deposit_account": "Deposit to account",
            "wallet.label.including_fee": "Total (including fee)",
            "wallet.label.payment_channel": "Payment Channel",
            "wallet.label.payment_details": "Payment Details",
            "wallet.label.you_get": "You will get",
            "wallet.label.payment_proof": "Payment Proof",
            "wallet.label.reason_failure": "Reason for rejection",
            "wallet.lightning": "Bitcoin Lightning Network",
            "wallet.lightning_empty_requet": "Invalid payment request.",
            "wallet.lightning_payment_requet": "Payment Request",
            "wallet.lnurl_tips": "LNURL (Scan to open LNURL with your wallet)",
            "wallet.maintenance": "Under Maintenance",
            "wallet.my_favorite": "My Favorite",
            "wallet.method": "Method",
            "wallet.nft.about_degen_pass": "About Degen Pass",
            "wallet.nft.about_split": "Split NFT to mNFTs will allow you to bet and win mNFTs. And you can merge {0} mNFTs into NFT at any time.",
            "wallet.nft.merge_tit": "Your NFT to Merge",
            "wallet.nft.random": "Random 1 NFT of {0}",
            "wallet.nft.split_tit": "Your NFT Split",
            "wallet.new.nofound_coin": "For unsupported coins and tokens, try the BC Swap feature to exchange for supported coins and tokens",
            "wallet.not.available": "Not available for the moment.",
            "wallet.online_sever": '<b className="tit">Note:</b> You will generally receive your deposit within minutes after payment, if not, please contact 24/7 online customer service, we will be happy to help!',
            "wallet.orderid": "Order ID",
            "wallet.order.canceled.reason": "Canceled reason:",
            "wallet.order.new.submit": "Withdraw Order Submitted",
            "wallet.order.new.review": "Order Review",
            "wallet.order.new.precess": "3rd Merchant Processing",
            "wallet.order.process.desc": "This process may take {0} hours.",
            "wallet.order.review.desc": "This process may take few minutes to few hours.",
            "wallet.order.tip.desc": "Tips: {0} withdrawals from merchant {1} normally take {2} hour(s) to be processed.",
            "wallet.order.svip.tip": "Tips: {0} withdrawals from SVIP Exclusive merchant {1} normally take {2} hour(s) to be processed.",
            "wallet.order.deposit.tip": "Tips: {0} deposit from merchant {1} normally take {2} hour(s) to be processed.",
            "wallet.order.deposit.svip": "Tips: {0} deposit from SVIP Exclusive merchant {1} normally take {2} hour(s) to be processed.",
            "wallet.order.deposit.create": "Deposit Order Created",
            "wallet.order.deposit.continue": "If you did not complete this transfer, you can continue the deposit process {0}.",
            "wallet.order.deposit.draft": "Provide transfer proof to speed up",
            "wallet.order.deposit.submitted": "Transfer proof submitted.",
            "wallet.order.rate.experience": "Rate your experience",
            "wallet.order.view.more": "View more",
            "wallet.order.view.less": "View less",
            "wallet.order.rate.desc1": "OK, needs more improvements.",
            "wallet.order.rate.desc6": "Tap a star",
            "wallet.order.rate.desc3": "Terrible experience",
            "wallet.order.rate.desc4": "OK, needs more improvements.",
            "wallet.order.rate.desc5": "Excellent experience",
            "wallet.order.rate.title": "How was your withdraw experience?",
            "wallet.order.rate.tip": "Write a feedback (Optional)",
            "wallet.order.deposit.title": "How was your deposit experience?",
            "wallet.order.rate.desc2": "Thank you! Your Rating and feedback makes our community better!",
            "wallet.order.fail.reason1": "Order creation failed.",
            "wallet.order.fail.reason2": "Deposit failed.",
            "wallet.order.fail.reason3": "Withdraw failed.",
            "wallet.order.fail.reason4": "Withdrawal review failed Funds have been refunded.",
            "wallet.order.draft.note": "Leave a note ({0}/500 characters maximum)",
            "wallet.order.new.send": "Send Order Submitted",
            "wallet.order.new.blockchain": "Blockchain processing",
            "wallet.order.new.completed": "Transaction Completed",
            "wallet.order.new.fail": "Transaction Failed",
            "wallet.order.new.cancel": "Transaction Cancel",
            "wallet.order.new.success": "Transaction Success",
            "wallet.order.new.trading": "Trading on the chain usually takes some time.",
            "wallet.order.new.attime": "Submitted at {0}",
            "wallet.order.new.uptime": "Updated at {0}",
            "wallet.order.part_refunded.amount": "Partially Refunded Amount",
            "wallet.order.part_refunded.time": "Partially Refunded Time",
            "wallet.other_coin": "Other Supported Coin",
            "wallet.recharge_success": "Recharge successful! Awaiting network confirmation.",
            "wallet.recharge_warning": '<p><span class="cl-primary">NOTICE:</span> Fill in the tag/memo and currency address correctly to deposit {0}. Missing tag/memo will result in fund loss!',
            "wallet.redirect": "Redirecting to deposit page",
            "wallet.safety": "Redirecting to deposit page, supported by {0} official and trusted providers.",
            "wallet.safety1": "Redirecting to withdrawal page, supported by {0} official and trusted providers.",
            "wallet.safety2": "For any questions, contact our 24hrs",
            "wallet.scan.qrcode": "Scan QR code to pay",
            "wallet.standrad": "Token Standard",
            "wallet.status.pending": "Pending",
            "wallet.status.hold": "Hold",
            "wallet.status.failed": "Failed",
            "wallet.status.appeal_failed": "Appeal Failed",
            "wallet.status.successful": "Successful",
            "wallet.support": "Or Support Deposit With",
            "wallet.support_withdraw": "Support Withdraw With",
            "wallet.swap": "Swap",
            "wallet.swap_from": "Swap From",
            "wallet.swap_to": "Swap To",
            "wallet.swap.approximately": "You get Approximately",
            "wallet.swap.fee": "Swap fee",
            "wallet.swap.now": "Swap Now",
            "wallet.swap.success": "Swap Successful",
            "wallet.swap.title": "BC Swap",
            "wallet.swap_coin": "Swap Coin",
            "wallet.submit.required": "Please complete the required information",
            "wallet.submit.required_img": "Please upload at least one screenshot of the proof of payment",
            "wallet.title.fiat": "Fiat",
            "wallet.fiat.currency.new": "Fiat Currency",
            "wallet.to.address": "To Address",
            "wallet.token.id": "Token ID",
            "wallet.trade.hash": "Trade Hash",
            "wallet.tranaction.cancel.new": "Cancel Transaction",
            "wallet.transaction.canceled": "Transaction canceled",
            "wallet.transaction.expires": "Transaction expires in",
            "wallet.transaction.new.detail": "Transaction Details",
            "wallet.transaction.fee": "Transaction Fee",
            "wallet.transaction.ticket1": "Please provide a screenshot of the payment channel of the successful recharge:",
            "wallet.transaction.ticket2": "We will check the issue for you as soon as possible.",
            "wallet.transaction.ticket3": "Please provide UPI/UTR number:",
            "wallet.transaction.ticket4": "Please fill in correct UPI/UTR number",
            "wallet.transaction.ticket5": "Please provide a bank statement regarding your transaction:",
            "wallet.transaction.ticket6": '<span class="cl-primary">Notice:</span> Please note that FIAT withdrawals may take up to 1-2 business days to be processed.',
            "wallet.transaction.ticket7": "You can provide more details to us or leave your PDF folder password here.",
            "wallet.transaction.ticket8": "Please provide depositor name.",
            "wallet.transaction.ticket9": "Beneficiary bank number",
            "wallet.transaction.ticket10": "Please fill in Beneficiary bank number.",
            "wallet.transaction.ticketid": "Appeal ticket ID",
            "wallet.transaction.rate.label": "Comment ({0}/500 characters maximum)",
            "wallet.transaction.process": "Appeal in process",
            "wallet.turnover.filter1": "Not Started",
            "wallet.turnover.filter2": "Newbie Task Rewards",
            "wallet.turnover.filter3": "Free Spin Winnings",
            "wallet.turnover.filter4": "Newbie Lucky Spin Bonus",
            "wallet.turnover.filter5": "Event Bonus",
            "wallet.turnover.amount": "Pending Audit Amount",
            "wallet.turnover.times": "Rollover Times",
            "wallet.turnover.linked.deposit": "Linked Deposit",
            "wallet.turnover.linked.bonus": "Linked Bonus",
            "wallet.turnover.linked.Help": "A 'Linked Bonus' refers to two amounts that must simultaneously meet Rollover conditions for withdrawal. For instance, the Deposit Bonus and the Deposit amount are linked. If you wish to withdraw the Deposit amount after achieving a 1x rollover, you will need to cancel the Linked Bonus first or meet the Rollover requirements specified for the bonus amount.",
            "wallet.turnover.created_on": "Created on",
            "wallet.turnover.canceled_on": "Canceled on",
            "wallet.turnover.total_wager_required": "Total Wager Required",
            "wallet.turnover.wager_completed": "Wager Completed",
            "wallet.turnover.pending_wager_required": "Pending Wager Required",
            "wallet.turnover.unlocked_funds": "Withdrawable Funds",
            "wallet.turnover.overview": "Rollover Overview",
            "wallet.turnover.reason_cancel": "Reason for cancellation",
            "wallet.turnover.reason_cancel.val": "The bonus was fully spent.",
            "wallet.turnover.reason_cancel.val2": "You canceled this bonus manually.",
            "wallet.turnover.tit": "Rollover",
            "wallet.rollover.details": "Rollover Details",
            "wallet.updating": "is under update now. Please come back later or choose another currency.",
            "wallet.updating.deposit_BUSD": "Deposits of BUSD are no longer available, as it will be delisted on October 31, 2023, at 23:59 UTC. If you still have BUSD assets, please kindly withdraw them promptly to avoid any inconvenience.",
            "wallet.updating.withdraw_BUSD": "Withdrawals of BUSD are no longer available starting from October 31, 2023, at 23:59 UTC, as it has been delisted from BC.GAME. If you still have BUSD assets, please kindly utilize our swap function or contact our customer service for further assistance.",
            "wallet.vault.apy": "APY",
            "wallet.vault.balance": "Vault Balance",
            "wallet.vault.crypto": "Assets in Vault Pro",
            "wallet.vault.deposit": "Transfer to Vault Pro",
            "wallet.vault.deposit_success": "Transfer in successful",
            "wallet.vault.interest": "Total Interest",
            "wallet.vault.interests": "Interests",
            "wallet.vault.title": "Vault Pro",
            "wallet.vault.start.transfer": "Start earning by transferring assets to Vault Pro",
            "wallet.vault.transfer_in": "Transfer In",
            "wallet.vault.transfet_out": "Transfer Out",
            "wallet.vault.withdraw": "Withdraw to Wallet",
            "wallet.vault.withdrawto": "Withdraw to",
            "wallet.vault.withdraw_success": "Transfer out successful",
            "wallet.withdraw.actual": "You will receive",
            "wallet.withdraw.address": "Withdrawal Address",
            "wallet.withdraw.address_desc": "Fill in carefully according to the specific currency",
            "wallet.withdraw.amount": "Withdraw amount",
            "wallet.channel.maintenance": "This channel is under maintenance",
            "wallet.withdraw.cancel.desc": "The merchant {0} is under maintenance and it normally takes few hours. You can wait for your order to be processed or you can {1}.",
            "wallet.withdraw.cancel.order": "cancel this order",
            "wallet.withdraw.cancel.title": "Cancel Withdraw Order",
            "wallet.withdraw.action.cancel": "Cancel Order",
            "wallet.withdraw.action.keep": "Keep Order",
            "wallet.withdraw.cancel.desc1": "Are you sure you want to cancel this order? The  {0} {1} will be refunded to your wallet.",
            "wallet.withdraw.currency": "Withdraw Currency",
            "wallet.withdraw.total_amount": "Total withdrawal amount",
            "wallet.withdraw.amount_tips": "Your Withdraw amount",
            "wallet.withdraw.empty_memo": "Note cannot be empty",
            "wallet.withdraw.free_about": '<span class="cl-primary">Fee:</span> Your withdrawal will also have {0} {1} subtracted to cover the transaction fee.',
            "wallet.withdraw.nft": "Your withdrawal of {0} is in progress!",
            "wallet.withdraw.success": "Congratulations! Your withdrawal of {0} is in progress! For security purposes, any large or suspicious withdrawal amounts will be audited and manually processed. As always we appreciate your patience!",
            "wallet.withdraw.tib_fee": "Withdrawal amount should be greater than the fee",
            "wallet.withdraw.bcd": '<p><span class="cl-primary">Notice:</span> Withdrawals can only be made to either the {0} or a decentralized wallet to prevent potential asset loss.</p>',
            "wallet.withdraw.warning": "For security purposes, large or suspicious withdrawal may take 1-6 hours for audit process. We appreciate your patience!",
            "wallet.withdraw_invoice": "Paste your invoice here (Min {0} SATS)",
            "wallet.withdraw_with": "Withdraw with",
            "wallet.withdraw.tip": "Your {0} withdraw and tip permission have been suspended. If you have any questions, please {1}.",
            "wallet.deposit.tip": "Your deposit permission has been suspended. If you have any questions, please {0}.",
            "wallet.new.withdraw_maintenance": "This currency is under maintenance currently, and it will be available for withdraw soon.",
            "wallet.you.get": "You get",
            "wallet.you.pay": "You pay with",
            "wallet.choose_bonus": "Choose your bonus",
            "wallet.choose_payment": "Choose your payment method",
            "wallet.choose_apayment": "Choose a payment method",
            "wallet.choose_withdraw_payment": "Choose your withdrawal method",
            "wallet.no_bonus": "No Bonus",
            "wallet.bonus_upto": "Bonus up to ",
            "wallet.withdraw_type": "Withdrawal Type",
            "wallet.withdraw_details": "Withdrawal Details",
            "wallet.insufficient.switch": "Insufficient {0} balance, switch to another asset to continue playing.",
            "wallet.insufficient.bonus": "You can not play the game with your bonus money. Please play available games or go deposit.",
            "wallet.insufficient.amount": "Insufficient {0} balance. Make a deposit to keep the fun going!",
            "wallet.vault.less.info": "transfer amount cannot be less than {0} {1}, please try again",
            "page.trading.entry_desc": "Bet on the rise and fall of crypto prices to win profits from losers' bets",
            "page.sports.home_desc": "Bet on Football, Cricket, NFL, eSports & over 80 sports",
            "page.sports.bettings.insights": "Sport Betting Insights",
            "trading.disabled.tip": "Sorry, the game does not exist or is currently unavailable.",
            "trading.iframe.error": "To use Trading, please enable your browser's third-party cookie settings."
        },
        tw = Object.freeze(Object.defineProperty({
            __proto__: null,
            default: uc
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        pc = Object.assign({
            "../front-end/ar-SA/website/website.json": () => K(() =>
                import ("./chunk-dfe913ac.js"), []),
            "../front-end/bn-BD/website/website.json": () => K(() =>
                import ("./chunk-32d0b6ae.js"), []),
            "../front-end/de-DE/website/website.json": () => K(() =>
                import ("./chunk-04db7db6.js"), []),
            "../front-end/en-IN/website/website.json": () => K(() =>
                import ("./chunk-33c85720.js"), []),
            "../front-end/en-US/website/website.json": () => K(() => Promise.resolve().then(() => tw), void 0),
            "../front-end/es-ES/website/website.json": () => K(() =>
                import ("./chunk-af3ac63f.js"), []),
            "../front-end/fa-IR/website/website.json": () => K(() =>
                import ("./chunk-23e77e85.js"), []),
            "../front-end/fi-FI/website/website.json": () => K(() =>
                import ("./chunk-570a6b56.js"), []),
            "../front-end/fil-PH/website/website.json": () => K(() =>
                import ("./chunk-e939bb21.js"), []),
            "../front-end/fr-FR/website/website.json": () => K(() =>
                import ("./chunk-9bed1dcb.js"), []),
            "../front-end/hi-IN/website/website.json": () => K(() =>
                import ("./chunk-16a884b8.js"), []),
            "../front-end/id-ID/website/website.json": () => K(() =>
                import ("./chunk-834cf138.js"), []),
            "../front-end/it-IT/website/website.json": () => K(() =>
                import ("./chunk-310532b3.js"), []),
            "../front-end/ja-JP/website/website.json": () => K(() =>
                import ("./chunk-045b3266.js"), []),
            "../front-end/ko-KR/website/website.json": () => K(() =>
                import ("./chunk-d0d6ac28.js"), []),
            "../front-end/mr-IN/website/website.json": () => K(() =>
                import ("./chunk-e155b792.js"), []),
            "../front-end/ms-MY/website/website.json": () => K(() =>
                import ("./chunk-d228b43a.js"), []),
            "../front-end/my-MM/website/website.json": () => K(() =>
                import ("./chunk-daa9c0c4.js"), []),
            "../front-end/nl-NL/website/website.json": () => K(() =>
                import ("./chunk-d60802f7.js"), []),
            "../front-end/pl-PL/website/website.json": () => K(() =>
                import ("./chunk-dedc385c.js"), []),
            "../front-end/pt-BR/website/website.json": () => K(() =>
                import ("./chunk-6aeb0ef2.js"), []),
            "../front-end/ru-RU/website/website.json": () => K(() =>
                import ("./chunk-917aa023.js"), []),
            "../front-end/ta-IN/website/website.json": () => K(() =>
                import ("./chunk-247c0274.js"), []),
            "../front-end/te-IN/website/website.json": () => K(() =>
                import ("./chunk-1649d1a0.js"), []),
            "../front-end/th-TH/website/website.json": () => K(() =>
                import ("./chunk-302dd1d6.js"), []),
            "../front-end/tr-TR/website/website.json": () => K(() =>
                import ("./chunk-c7031bab.js"), []),
            "../front-end/uk-UA/website/website.json": () => K(() =>
                import ("./chunk-c2eb7553.js"), []),
            "../front-end/ur-PK/website/website.json": () => K(() =>
                import ("./chunk-f5faac04.js"), []),
            "../front-end/vi-VN/website/website.json": () => K(() =>
                import ("./chunk-6ec75db1.js"), [])
        }),
        ye = {
            en: uc
        };
    for (const t in pc) {
        const a = t.match(/front-end\/(\S*)\/website\/website/);
        if (a && a.length > 0) {
            const s = a[1];
            s !== "en" && (ye[s] = pc[t])
        }
    }
    const aw = [
        ["Indian English", "en-IN", "en-IN", ye["en-IN"]],
        ["English", "en-US", "en", ye["en-US"]],
        ["Ti\u1EBFng vi\u1EC7t", "vi-VN", "vi", ye["vi-VN"]],
        ["Indonesian", "id-ID", "id", ye["id-ID"]],
        ["\u65E5\u672C\u8A9E", "ja-JP", "ja", ye["ja-JP"]],
        ["\uD55C\uAD6D\uC5B4", "ko-KR", "ko", ye["ko-KR"]],
        ["Fran\xE7ais", "fr-FR", "fr", ye["fr-FR"]],
        ["Espa\xF1ol", "es-ES", "es", ye["es-ES"]],
        ["Filipino", "fil-PH", "tl", ye["fil-PH"]],
        ["\u0639\u0631\u0628\u0649", "ar-SA", "ar", ye["ar-SA"]],
        ["\u0939\u093F\u0928\u094D\u0926\u0940", "hi-IN", "hi", ye["hi-IN"]],
        ["T\xFCrk\xE7e", "tr-TR", "tr", ye["tr-TR"]],
        ["\u0641\u0627\u0631\u0633\u06CC", "fa-IR", "fa", ye["fa-IR"]],
        ["Portugu\xEAs", "pt-BR", "pt", ye["pt-BR"]],
        ["\u0420\u0443cc\u043A\u0438\u0439", "ru-RU", "ru", ye["ru-RU"]],
        ["Deutsch", "de-DE", "de", ye["de-DE"]],
        ["\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", "th-TH", "th", ye["th-TH"]],
        ["Suomi", "fi-FI", "fi", ye["fi-FI"]],
        ["Polski", "pl-PL", "pl", ye["pl-PL"]],
        ["Italiano", "it-IT", "it", ye["it-IT"]],
        ["\u1019\u103C\u1014\u103A\u1019\u102C", "my-MM", "my", ye["my-MM"]],
        ["\u0627\u0631\u062F\u0648", "ur-PK", "ur", ye["ur-PK"]],
        ["\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", "uk-UA", "uk", ye["uk-UA"]],
        ["Melayu", "ms-MY", "ms", ye["ms-MY"]],
        ["\u09AC\u09BE\u0982\u09B2\u09BE", "bn-BD", "bn", ye["bn-BD"]],
        ["Marathi", "mr-IN", "mr", ye["mr-IN"]],
        ["Tamil", "ta-IN", "ta", ye["ta-IN"]],
        ["Telugu", "te-IN", "te", ye["te-IN"]]
    ];

    function sw(t = {}) {
        const {
            immediate: a = !1,
            onNeedRefresh: s,
            onOfflineReady: n,
            onRegistered: i,
            onRegisteredSW: o,
            onRegisterError: r
        } = t;
        let l, c, d, m;
        const h = async (u = !0) => {
            await d, u && (l == null || l.addEventListener("controlling", p => {
                p.isUpdate && window.location.reload()
            })), await (m == null ? void 0 : m())
        };
        async function g() {
            if ("serviceWorker" in navigator) {
                const {
                    Workbox: u,
                    messageSW: p
                } = await K(() =>
                    import ("./chunk-42ea5fe7.js"), []);
                m = async () => {
                    c && c.waiting && await p(c.waiting, {
                        type: "SKIP_WAITING"
                    })
                }, l = new u("/service-worker.js", {
                    scope: "/",
                    type: "classic"
                }), l.addEventListener("activated", b => {
                    b.isUpdate || (n == null || n())
                }); {
                    const b = () => {
                        s == null || s()
                    };
                    l.addEventListener("waiting", b), l.addEventListener("externalwaiting", b)
                }
                l.register({
                    immediate: a
                }).then(b => {
                    c = b, o ? o("/service-worker.js", b) : i == null || i(b)
                }).catch(b => {
                    r == null || r(b)
                })
            }
        }
        return d = g(), h
    }

    function nw(t = {}) {
        const {
            immediate: a = !0,
            onNeedRefresh: s,
            onOfflineReady: n,
            onRegistered: i,
            onRegisteredSW: o,
            onRegisterError: r
        } = t, [l, c] = f.useState(!1), [d, m] = f.useState(!1), [h] = f.useState(() => sw({
            immediate: a,
            onOfflineReady() {
                m(!0), n == null || n()
            },
            onNeedRefresh() {
                c(!0), s == null || s()
            },
            onRegistered: i,
            onRegisteredSW: o,
            onRegisterError: r
        }));
        return {
            needRefresh: [l, c],
            offlineReady: [d, m],
            updateServiceWorker: h
        }
    }
    const iw = J.memo(() => {
            const {
                needRefresh: [t],
                updateServiceWorker: a
            } = nw({
                onRegistered(s) {
                    s && (setInterval(() => s.update(), 36e5), H.isIos() && document.addEventListener("visibilitychange", () => {
                        s.update()
                    }), O.on("checkUpdate", () => s.update()))
                }
            });
            return f.useEffect(() => {
                t && a(!1)
            }, [t, a]), null
        }),
        ow = () => Jt("modules/account").then(t => t.account()),
        rw = $(ow),
        lw = J.memo(function() {
            return e.jsx(xa, {
                children: e.jsx(f.Suspense, {
                    children: e.jsx(rw, {})
                })
            })
        }),
        cw = J.memo(function() {
            return f.useEffect(() => () => {
                O.emit("ad_track", "registration_abandoned")
            }, []), e.jsx(ne, {
                className: dw,
                children: e.jsx(le, {
                    children: e.jsx(lw, {})
                })
            })
        }),
        dw = "sh1kgj9",
        mw = J.memo(function() {
            const t = ut(),
                {
                    account: a,
                    system: s
                } = Ee(),
                n = () => {
                    setTimeout(() => {
                        s.settings.lastEmail = a.email
                    }, 3e3), t.back()
                };
            return f.useEffect(() => {
                const i = async () => {
                        await ja.syncData(), O.emit("ad_track", "login_success", {
                            userId: String(a.userId)
                        }), n()
                    },
                    o = async () => {
                        await ja.syncData(), O.emit("ad_track", "regist_success", {
                            userId: String(a.userId)
                        }), O.emit("track", "_profile_set_once"), a.emit("regist"), n()
                    };
                return O.on("signin-success", i), O.on("regist-success", o), () => {
                    O.off("signin-success", i), O.off("regist-success", o)
                }
            }, []), null
        }),
        uw = () => Jt("modules/account").then(t => t.walletConnectAuthModal()),
        pw = $(uw),
        hw = J.memo(function() {
            const t = f.useRef(0),
                [a, s] = f.useState(!1);
            return f.useEffect(() => {
                const n = () => {
                    t.current && t.current === 0 && (s(!0), t.current = t.current + 1, document.documentElement.style.setProperty("--wcm-z-index", "10003"))
                };
                return O.on("open-wallet-connect-modal", n), () => {
                    O.off("open-wallet-connect-modal", n)
                }
            }, []), a ? e.jsx(pw, {}) : null
        }),
        gw = () => Jt("modules/account").then(t => t.thirdLogin()),
        fw = $(gw),
        yw = J.memo(function() {
            return e.jsx(je.Source, {
                id: "page-third-login-enter",
                children: e.jsx(fw, {})
            })
        });

    function bw() {
        O.emit("inject_rootNode", e.jsx(mw, {})), O.emit("inject_rootNode", e.jsx(yw, {})), O.emit("inject_rootNode", e.jsx(hw, {})), O.emit("inject_dialog", [{
            path: "#/login/*",
            isDialog: !0,
            element: e.jsx(cw, {})
        }])
    }
    const vw = "/assets/promo_code.94c7daca.png",
        ww = "/assets/promo_code_w.206ad2da.png",
        ys = we({
            code: "init"
        });

    function xw() {
        const t = k(),
            [a, s] = f.useState(""),
            n = () => M.post("/account/invitation/bind/", {
                invitationCode: a
            }).then(() => {
                ys.code = a, ke.back()
            }).catch(L);
        return e.jsx(ne, {
            className: kw,
            title: t("user.casino_code"),
            children: e.jsxs("div", {
                children: [e.jsx(He, {
                    value: a,
                    onChange: s,
                    after: e.jsx("div", {
                        className: "tip",
                        children: t("user.signing_up")
                    })
                }), e.jsx(q, {
                    onClick: a ? n : void 0,
                    type: "conic2",
                    children: t("common.actions.apply")
                })]
            })
        })
    }
    async function jw() {
        if (await ja.waitLogin(), H.serverTime().getTime() - ja.state.createTime < 864e5) {
            const t = await M.get("/account/invitation/get/");
            return t ? t.invitationCode : ""
        } else return "init"
    }
    Y(({
        small: t = !1
    }) => {
        const a = k(),
            s = et(),
            n = re();
        f.useEffect(() => {
            jw().then(o => ys.code = o || "")
        }, []);
        const i = () => n("#/promocode");
        return ys.code ? null : t ? e.jsx("div", {
            className: A(Nw, "fold-navlink-item"),
            children: e.jsx(q, {
                className: "promo-b",
                onClick: i,
                children: e.jsx(_w, {})
            })
        }) : e.jsxs("div", {
            className: Cw,
            children: [e.jsxs(q, {
                className: "promo-btn",
                onClick: i,
                children: [e.jsx("img", {
                    src: s ? vw : ww
                }), e.jsx("div", {
                    className: "name",
                    children: e.jsx("span", {
                        children: a("user.casino_code")
                    })
                })]
            }), e.jsx("div", {
                className: "available",
                children: a("common.limit.hours")
            })]
        })
    });
    const _w = J.memo(function() {
            return e.jsx("svg", {
                width: "22",
                height: "20",
                viewBox: "0 0 22 20",
                xmlns: "http://www.w3.org/2000/svg",
                children: e.jsxs("g", {
                    fill: "none",
                    fillRule: "evenodd",
                    children: [e.jsx("path", {
                        d: "M.347 4.426h21.306a.35.35 0 0 1 .347.35v4.168a.35.35 0 0 1-.347.35H.347A.35.35 0 0 1 0 8.943V4.776a.35.35 0 0 1 .347-.35Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M2.765 9.293h16.47c.128 0 .232.105.232.233v10.241a.233.233 0 0 1-.231.233H2.765a.233.233 0 0 1-.232-.233V9.527c0-.129.104-.234.232-.234Z",
                        fill: "#FFCB34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M12.447 2.764v6.53h6.789c.127 0 .231.021.231.048v2.125c0 .027-.104.049-.231.049h-6.789V20H9.553l-.001-8.485H2.765c-.128 0-.232-.021-.232-.048V9.342c0-.027.104-.049.232-.049h6.787V2.764h2.895Z",
                        fill: "#FF9D34",
                        fillRule: "nonzero"
                    }), e.jsx("path", {
                        d: "M4.941.284s.611-.448 1.894-.218C8.57.377 9.718 2.98 9.718 2.98v1.522S7.969 2.51 6.57 2.159c-1.074-.268-1.98.352-1.98.352l.35-2.227Zm-2.95 2.189c.504.175 3.029.664 3.029.664l2.124.474 1.954.89c-4.058.606-7.824-.095-7.824-.095l1.61-.643-.892-1.29Zm17.23 1.29.895-1.29c-.504.175-3.028.664-3.028.664l-2.125.474-1.954.894c4.058.605 7.824-.1 7.824-.1l-1.612-.642ZM17.166.287l.347 2.224s-.909-.62-1.98-.35c-1.398.353-3.143 2.344-3.143 2.344V2.982S13.536.38 15.273.07c1.282-.23 1.893.218 1.893.218Z",
                        fill: "#DC4592"
                    }), e.jsx("path", {
                        d: "M14.587 2.496c1.262-.733 2.761-.486 2.926.015.183.55-.712 1.138-2.006 1.816-.848.449-3.12.175-3.12.175s.938-1.272 2.2-2.006Zm-9.993.018c.165-.5 1.664-.748 2.927-.015 1.262.73 2.2 2.006 2.2 2.006S7.45 4.779 6.6 4.33c-1.294-.68-2.188-1.266-2.006-1.816Z",
                        fill: "#9B34FF"
                    })]
                })
            })
        }),
        kw = "poy960u",
        Nw = "f1csl0p5",
        Cw = "poo6c5d",
        Tw = "/assets/refer.8563340a.png",
        Sw = Y(function() {
            const t = k(),
                a = re(),
                s = Ss(!0),
                [n, i] = f.useState(""),
                {
                    login: o
                } = D1();
            f.useEffect(() => {
                v0().then(l => {
                    l && i(l.invitationUrl || "")
                }).catch(L)
            }, [o]);
            const r = e.jsx(q, {
                onClick: () => {
                    H.copyToClipboard(n), L(t("common.messages.copy_success"))
                },
                children: t("page.user.copy_invite")
            });
            return e.jsx(ne, {
                className: Aw,
                title: t("page.refer.friend"),
                children: e.jsxs(le, {
                    className: "refer-friend-dialog",
                    children: [e.jsxs("div", {
                        className: "refer-top",
                        children: [e.jsx("div", {
                            className: "refer-bg"
                        }), e.jsx("img", {
                            alt: "referImg",
                            src: Tw
                        }), e.jsxs("div", {
                            className: "refer-right",
                            children: [e.jsx("p", {
                                className: "t",
                                children: e.jsxs(Ae, {
                                    k: "page.refer.desc.one",
                                    children: [e.jsxs("span", {
                                        className: "s-y",
                                        children: [e.jsx("br", {}), `${s.amount2localStr(new oe(1e3))}`]
                                    }), e.jsx("span", {
                                        children: "+"
                                    }), e.jsxs("span", {
                                        className: "s-g",
                                        children: ["15%", e.jsx("br", {})]
                                    })]
                                })
                            }), e.jsx("p", {
                                className: "g",
                                children: t("page.refer.desc.two")
                            })]
                        })]
                    }), e.jsx("button", {
                        className: "learn-btn",
                        onClick: () => {
                            Te.close(), a("/affiliate")
                        },
                        children: t("page.refer.learnmore")
                    }), e.jsxs("div", {
                        className: "refer-bottom",
                        children: [e.jsx("p", {
                            className: "sub-t",
                            children: t("page.refer.sharelink")
                        }), e.jsx(He, {
                            value: n,
                            readOnly: !0,
                            after: r
                        })]
                    })]
                })
            })
        });
    Ie({
        cl1: ["#17181B", "#f5f6fa"],
        cl2: ["#ffffff", "#17181B"],
        cl3: [ie("#434A55", .3), ie("#5f6975", .3)],
        cl5: [ie("#98A7B5", .3), "rgba(95,105,117,0.4)"]
    });
    const Aw = "r5k7vbo";

    function Iw(t) {
        return t > 9 ? t.toString() : "0" + t
    }
    const Rw = J.memo(function() {
            const t = k(),
                {
                    account: a
                } = Ee(),
                [s, n] = f.useState([]);
            return f.useEffect(() => {
                w0().then(i => {
                    i && i.length > 0 && n([...i])
                }).catch(console.log)
            }, []), e.jsx(ne, {
                className: Dw,
                title: t("page.affiliate.referral.rule"),
                children: e.jsxs(le, {
                    className: "rule-dalog-wrap",
                    children: [e.jsxs("div", {
                        className: "getreward-wrap",
                        children: [e.jsx("p", {
                            className: "t",
                            children: t("page.affiliate.referral.desc1")
                        }), e.jsxs("div", {
                            className: "imgs-wrap",
                            children: [e.jsxs("div", {
                                className: "rule-left",
                                children: [e.jsx("p", {
                                    className: "ri-t",
                                    children: "1"
                                }), e.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: t("page.affiliate.referral.desc3")
                                    }
                                }), e.jsx("p", {
                                    className: "ri-d",
                                    children: t("page.affiliate.referral.desc2")
                                })]
                            }), e.jsxs("div", {
                                className: "rule-center",
                                children: [e.jsx("p", {
                                    className: "ri-t",
                                    children: "2"
                                }), e.jsxs("p", {
                                    className: "ri-st",
                                    children: ["Get ", e.jsx("span", {
                                        children: "$1000"
                                    })]
                                }), e.jsx("p", {
                                    className: "ri-d",
                                    children: t("page.affiliate.referral.desc4")
                                })]
                            }), e.jsxs("div", {
                                className: "rule-right",
                                children: [e.jsx("p", {
                                    className: "ri-t",
                                    children: "3"
                                }), e.jsx("p", {
                                    className: "ri-st",
                                    dangerouslySetInnerHTML: {
                                        __html: t("page.affiliate.referral.desc5")
                                    }
                                }), e.jsx("p", {
                                    className: "ri-d",
                                    children: t("page.affiliate.referral.desc6")
                                })]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "unlock-rules-wrap",
                        children: [e.jsxs("div", {
                            className: "ur-title",
                            children: [e.jsx("div", {
                                className: "l"
                            }), e.jsx("p", {
                                children: t("page.affiliate.referral.desc7")
                            }), e.jsx("div", {
                                className: "r"
                            })]
                        }), e.jsx("div", {
                            className: "rule-table-wrap",
                            children: e.jsxs("div", {
                                className: "ri-table",
                                children: [e.jsxs("div", {
                                    className: "ri-thead",
                                    children: [e.jsx("p", {
                                        className: "ri-tr-l",
                                        children: t("page.affiliate.referral.desc8")
                                    }), e.jsx("p", {
                                        className: "ri-tr-m",
                                        children: t("page.casino.dialog.total_wager")
                                    }), e.jsx("p", {
                                        className: "ri-tr-r",
                                        children: t("page.affiliate.referral.desc9")
                                    })]
                                }), s.length === 0 ? e.jsx(pe, {}) : e.jsx("div", {
                                    className: "ri-tbody",
                                    children: s.map((i, o) => {
                                        const r = a.getLevelInfo(i.userLevel),
                                            l = o % 2 === 0;
                                        return e.jsxs("div", {
                                            className: A("ri-tr", l && "have-bg"),
                                            children: [e.jsx("div", {
                                                className: "ri-tr-l",
                                                children: e.jsxs("p", {
                                                    children: ["VIP ", Iw(i.userLevel)]
                                                })
                                            }), e.jsx("div", {
                                                className: "ri-tr-m",
                                                children: e.jsx("p", {
                                                    children: r.xp
                                                })
                                            }), e.jsxs("div", {
                                                className: "ri-tr-r",
                                                children: [e.jsx("div", {
                                                    className: "coin-icon",
                                                    children: e.jsx("span", {
                                                        children: "$"
                                                    })
                                                }), e.jsxs("span", {
                                                    children: ["+", new oe(i.rewardAmount).toFixed(2)]
                                                })]
                                            })]
                                        }, `ri-tr-${o}`)
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        Dw = "r15pu1rh",
        Pw = J.memo(function() {
            const t = k();
            return e.jsx(ne, {
                className: Bw,
                title: t("page.casino.rewards.system.commission.rules"),
                children: e.jsxs(le, {
                    className: "rule-dialog-wrap",
                    children: [e.jsx("div", {
                        className: "cru-st",
                        children: t("page.affiliate.commission.desc1")
                    }), e.jsxs("div", {
                        className: "max-wrap",
                        children: [e.jsx("div", {
                            className: "wager-item item-1",
                            children: e.jsxs("div", {
                                className: "item-inner",
                                children: [e.jsxs("div", {
                                    className: "top",
                                    children: [e.jsx("p", {
                                        className: "m-t",
                                        children: "7%"
                                    }), e.jsx(bs, {
                                        labelOne: t("page.affiliate.commission.desc5"),
                                        labelTwo: `${t("page.casino.commission")}= 100 \u2715 1% \u2715 7% = 0.07`
                                    }), e.jsx("p", {
                                        className: "of",
                                        children: t("page.affiliate.commission.desc2")
                                    })]
                                }), e.jsxs("div", {
                                    className: "bot",
                                    children: [e.jsxs("p", {
                                        className: "l",
                                        children: [t("page.share.game_label"), ":"]
                                    }), e.jsx("p", {
                                        className: "r",
                                        children: t("page.affiliate.commission.desc3")
                                    })]
                                })]
                            })
                        }), e.jsx("div", {
                            className: "wager-item item-2",
                            children: e.jsxs("div", {
                                className: "item-inner",
                                children: [e.jsxs("div", {
                                    className: "top",
                                    children: [e.jsx("p", {
                                        className: "m-t",
                                        children: "15%"
                                    }), e.jsx(bs, {
                                        labelOne: t("page.affiliate.commission.desc5"),
                                        labelTwo: `${t("page.casino.commission")}= 100 \u2715 1% \u2715 15% = 0.15`
                                    }), e.jsx("p", {
                                        className: "of",
                                        children: t("page.affiliate.commission.desc2")
                                    })]
                                }), e.jsxs("div", {
                                    className: "bot",
                                    children: [e.jsxs("p", {
                                        className: "l",
                                        children: [t("page.share.game_label"), ":"]
                                    }), e.jsx("p", {
                                        className: "r",
                                        children: t("page.affiliate.commission.desc4")
                                    })]
                                })]
                            })
                        }), e.jsx("div", {
                            className: "wager-item item-3",
                            children: e.jsxs("div", {
                                className: "item-inner",
                                children: [e.jsxs("div", {
                                    className: "top",
                                    children: [e.jsx("p", {
                                        className: "m-t",
                                        children: "25%"
                                    }), e.jsx(bs, {
                                        labelOne: t("page.affiliate.commission.desc5"),
                                        labelTwo: `${t("page.casino.commission")}= 100 \u2715 1% \u2715 25% = 0.25`
                                    }), e.jsx("p", {
                                        className: "of",
                                        children: t("page.affiliate.commission.desc2")
                                    })]
                                }), e.jsxs("div", {
                                    className: "bot",
                                    children: [e.jsxs("p", {
                                        className: "l",
                                        children: [t("page.share.game_label"), ":"]
                                    }), e.jsx("p", {
                                        className: "r",
                                        children: t("common.sports")
                                    })]
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "wager-more",
                            children: [e.jsx("div", {
                                className: "info-flag",
                                children: "!"
                            }), e.jsxs("div", {
                                className: "info-text",
                                children: [e.jsx("p", {
                                    children: t("page.affiliate.morerule.one")
                                }), e.jsxs(Xe, {
                                    href: x0.friends,
                                    target: "_blank",
                                    children: [t("page.affiliate.morerule.two"), " ", e.jsx(z, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })]
                        }), e.jsxs("ul", {
                            children: [e.jsx("li", {
                                children: t("page.affiliate.commission.desc7")
                            }), e.jsx("li", {
                                children: t("page.affiliate.commission.desc8")
                            }), e.jsx("li", {
                                children: t("page.affiliate.commission.desc9", Se.buildHost)
                            }), e.jsx("li", {
                                children: t("page.affiliate.commission.desc10")
                            }), e.jsx("li", {
                                children: t("page.affiliate.commission.desc11")
                            })]
                        }), e.jsx("div", {
                            className: "contact-wrap",
                            children: e.jsxs("p", {
                                children: [e.jsx("span", {
                                    children: t("page.affiliate.commission.desc6")
                                }), e.jsxs("a", {
                                    href: "https://t.me/SamShady_BCGAME",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [e.jsx("span", {
                                        children: t("page.casino.contactus")
                                    }), e.jsx(z, {
                                        className: "icon-blank",
                                        name: "NewWindow"
                                    })]
                                })]
                            })
                        })]
                    })]
                })
            })
        }),
        bs = J.memo(function({
            labelOne: t,
            labelTwo: a
        }) {
            const [s, n] = f.useState(!1), i = Ke();
            return e.jsxs("div", {
                className: "tooltip-text-wrap",
                children: [e.jsx("div", {
                    className: "t-d",
                    onMouseEnter: () => {
                        i || n(!0)
                    },
                    onMouseLeave: () => {
                        i || n(!1)
                    },
                    onClick: () => {
                        i && n(!s)
                    },
                    children: "?"
                }), s && e.jsxs("div", {
                    className: "tool-tip-wrap",
                    children: [e.jsx("p", {
                        children: t
                    }), e.jsx("p", {
                        children: a
                    })]
                })]
            })
        });
    Ie({
        cl1: ["#17181B", "#F5F6FA"],
        cl2: ["#98A7B5", "#000000"],
        cl3: ["#24262B", "#F5F6FA"],
        cl4: [ie("#656B74", .8), "#D9D9D9"],
        cl5: ["#393A3E", ie("#393A3E", .4)],
        cl6: ["#24262B", "#FFFFFF"],
        cl7: ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.1)"],
        cl8: ["#656B74", "#D9D9D9"]
    });
    const Bw = "c1nhk0wh";

    function Ew() {
        O.emit("inject_dialog", [{
            path: "#/promocode",
            element: e.jsx(xw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/referfriend",
            element: e.jsx(Sw, {}),
            isDialog: !0
        }, {
            path: "#/referralrule",
            element: e.jsx(Rw, {}),
            isDialog: !0
        }, {
            path: "#/commissionrule",
            element: e.jsx(Pw, {}),
            isDialog: !0
        }])
    }
    const Lw = () => Jt("modules/lottery").then(t => t.lotteryNotice()),
        Fw = () => Jt("modules/lottery").then(t => t.lotteryBetDetail()),
        Ow = f.lazy(Lw),
        Mw = f.lazy(Fw);

    function Ww() {
        O.emit("inject_rootNode", e.jsx(Ow, {})), O.emit("inject_dialog", [{
            path: "#/bet_detail/:betId",
            element: e.jsx(Mw, {}),
            isDialog: !0
        }])
    }

    function Uw() {
        return e.jsxs("div", {
            className: zw,
            children: [e.jsx("div", {
                className: "star-item item-1"
            }), e.jsx("div", {
                className: "star-item item-2"
            }), e.jsx("div", {
                className: "star-item item-3"
            })]
        })
    }
    const Wt = J.memo(function({
            tit: t,
            subTit: a,
            desc: s,
            hasBg: n
        }) {
            return e.jsxs("div", {
                className: A(Vw, "top", n && "has-bg"),
                children: [e.jsx(Uw, {}), e.jsxs("div", {
                    className: "tit-wrap",
                    children: [t && e.jsx("div", {
                        className: "tit",
                        children: t
                    }), a && e.jsx("div", {
                        className: "sub-tit",
                        children: a
                    }), s && e.jsx("div", {
                        className: "sub-txt",
                        children: s
                    })]
                })]
            })
        }),
        Vw = "v8ggjoq",
        zw = "t1ov23wk";

    function Ut({
        children: t
    }) {
        return e.jsx("div", {
            className: $w,
            children: t
        })
    }
    const $w = "v1yqp4o5",
        qw = tt(({
            data: t
        }) => {
            const a = k(),
                s = Ke(),
                n = t.chat.message,
                i = typeof n.matchNumbers == "string" ? n.matchNumbers.split(",").map(r => Number(r)) : n.matchNumbers,
                o = Number(n.jackpotBallNumber);
            return e.jsx(Ut, {
                children: e.jsxs(it, {
                    className: A(hc, "cont-bg"),
                    children: [e.jsx(Wt, {
                        tit: a("page.lottery.draw.result"),
                        desc: e.jsxs(e.Fragment, {
                            children: [e.jsxs("span", {
                                children: [a("common.game_number"), ":"]
                            }), " ", t.chat.message.periodId]
                        }),
                        hasBg: !0
                    }), e.jsxs("div", {
                        className: "box",
                        children: [e.jsxs("p", {
                            children: [a("page.lottery.lucy_number"), " :"]
                        }), e.jsx(rd, {
                            numbers: i,
                            jackpotBallNumber: o,
                            matchNumbers: i,
                            matchJackpotBallNumber: o,
                            lastTicketId: 0
                        }), e.jsx("p", {
                            children: a("page.lottery.winners")
                        }), e.jsx("ul", {
                            children: n.winnerParamList.slice(0, 10).map((r, l) => e.jsxs("li", {
                                children: [e.jsxs(Xe, {
                                    className: "cl-primary ellipsis",
                                    href: `#/user/profile/${r.userId}`,
                                    children: ["@", r.userName]
                                }), e.jsx(Oe.CoinFormat, {
                                    name: r.currencyName,
                                    amount: r.amount,
                                    icon: !0
                                })]
                            }, l))
                        })]
                    }), e.jsx(Xe, {
                        href: "/lottery_legacy/?tab=history",
                        onClick: () => {
                            s && Te.close()
                        },
                        className: "detail",
                        children: a("common.view_all")
                    })]
                })
            })
        }),
        Hw = tt(({
            data: t
        }) => {
            switch (t.chat.message.type) {
                case 3:
                    return e.jsx(Ut, {
                        children: e.jsx(Qw, {})
                    });
                case 2:
                    return e.jsx(Ut, {
                        children: e.jsx(Jw, {})
                    });
                default:
                    return e.jsx(Ut, {
                        children: e.jsx(Gw, {})
                    })
            }
        }),
        Yw = tt(({
            data: t
        }) => {
            const l = t.chat.message,
                {
                    rewardAmount: a,
                    quantity: s = 12e3
                } = l,
                n = St(l, ["rewardAmount", "quantity"]),
                i = s > 9999 ? (1450 / 1e3).toFixed(1) + "k" : s,
                o = re(),
                r = k();
            return e.jsx(Ut, {
                children: e.jsxs(it, {
                    className: A(hc, "cont-bg lottery-share"),
                    children: [e.jsx(Wt, {
                        tit: e.jsx(Ae, {
                            k: "page.share.lottery.type_title",
                            children: e.jsx("br", {})
                        }),
                        hasBg: !0
                    }), e.jsxs("div", {
                        className: "box",
                        children: [e.jsxs("p", {
                            children: [r("page.lottery.my_winnumber"), ":"]
                        }), e.jsxs("div", {
                            className: "drawn-cont",
                            children: [e.jsx(rd, U({}, n)), " ", e.jsxs("div", {
                                className: "quantity",
                                children: ["x", i]
                            })]
                        }), e.jsx("p", {
                            className: "prize-tit",
                            children: r("common.prize")
                        }), e.jsx("div", {
                            className: "prize-cont",
                            children: w.toLocalCurrencyForce(Number(a), "USDFIAT")
                        })]
                    }), e.jsx(q, {
                        type: "conic4",
                        onClick: () => o("#/buyticket/chatroom"),
                        children: r("page.lottery.buyticket")
                    })]
                })
            })
        }),
        Gw = Y(function() {
            const t = re(),
                a = k();
            return e.jsxs("div", {
                className: A(vs, "cont-bg"),
                children: [e.jsxs("div", {
                    className: "cont",
                    children: [e.jsx(Wt, {
                        tit: a("page.share.lottery.start")
                    }), e.jsx("div", {
                        className: "desc",
                        children: a("page.share.lottery.start_desc")
                    })]
                }), e.jsx(q, {
                    type: "conic4",
                    onClick: () => t("#/buyticket/chatroom"),
                    children: a("page.lottery.buyticket")
                })]
            })
        });

    function Jw() {
        const t = re(),
            a = k();
        return e.jsxs("div", {
            className: A(vs, "cont-bg"),
            children: [e.jsxs("div", {
                className: "cont",
                children: [e.jsx(Wt, {
                    tit: a("page.share.lottery.end")
                }), e.jsx("div", {
                    className: "desc bt",
                    children: e.jsx(Ae, {
                        k: "page.share.lottery.cutdown",
                        children: e.jsx("span", {
                            className: "cl-primary",
                            children: "5"
                        })
                    })
                })]
            }), e.jsx(q, {
                type: "conic4",
                onClick: () => t("#/buyticket/chatroom"),
                children: a("page.lottery.buyticket")
            })]
        })
    }

    function Qw() {
        const t = re(),
            a = k();
        return e.jsxs("div", {
            className: A(vs, "cont-bg"),
            children: [e.jsxs("div", {
                className: "cont",
                children: [e.jsx(Wt, {
                    tit: a("page.share.lottery"),
                    subTit: `${w.toLocaleCurrency(1e5,"USD")}!`
                }), e.jsx("div", {
                    className: "desc",
                    children: a("page.share.lottery.desc")
                })]
            }), e.jsx(q, {
                type: "conic4",
                onClick: () => t("#/buyticket/chatroom"),
                children: a("page.lottery.buyticket")
            })]
        })
    }
    const vs = "m1ylk945",
        hc = "lhnzova",
        gt = () => K(() =>
            import ("./index.e10fe126.js").then(async t => (await t.__tla, t)), ["assets/index.e10fe126.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-e32700a5.js", "assets/chunk-abcf23a1.js", "assets/ClaimGift.1995b08c.css", "assets/chunk-cf3dc2ca.js", "assets/AwardBall.9c1b7ab7.css", "assets/index.6f255f9c.css"]),
        Zw = $(async () => ({
            default: (await gt()).BuyTicket
        })),
        Kw = $(async () => ({
            default: (await gt()).SendGift
        })),
        Xw = $(async () => ({
            default: (await gt()).ReceiveGift
        })),
        ex = $(async () => ({
            default: (await gt()).NewUserGift
        })),
        tx = $(async () => ({
            default: (await gt()).BillGift
        })),
        ax = $(async () => ({
            default: (await gt()).LotteryNotify
        })),
        sx = $(async () => ({
            default: (await gt()).Guide
        }));

    function nx() {
        const {
            publicChatStore: t
        } = Ee();
        return f.useEffect(() => {
            t.addParser("13", qw), t.addParser("14", Hw), t.addParser("15", Yw)
        }, []), null
    }

    function ix() {
        O.emit("inject_rootNode", e.jsx(nx, {})), O.emit("inject_dialog", [{
            path: "#/buyticket/*",
            element: e.jsx(Zw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/send_ticket",
            element: e.jsx(Kw, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/gift_ticket/:code",
            element: e.jsx(Xw, {}),
            isHook: !0
        }, {
            path: "#/billbcl/:relateId",
            element: e.jsx(tx, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/welcome_bonuses/:balls",
            element: e.jsx(ex, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/lottery_guide",
            element: e.jsx(sx, {}),
            isDialog: !0,
            isAuth: !0
        }]), S.addSocketEvent("lottery-reward-sending", t => {
            t.message = t.message ? t.message : O.unsafeTranslate("page.lottery.lottery.start"), L(e.jsx("div", {
                style: {
                    height: "60px"
                },
                children: e.jsx(ax, U({}, t))
            }), {
                duration: 5e3
            })
        })
    }
    const ws = () => K(() =>
            import ("./chunk-1620833a.js").then(async t => (await t.__tla, t)), ["assets/chunk-1620833a.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-dcd0ca87.js", "assets/chunk-61302461.js", "assets/index.ecad4d73.css", "assets/chunk-326f599c.js", "assets/chunk-123763ea.js", "assets/chunk-8bf88fdf.js", "assets/index.378cbf35.css"]),
        ox = $(async () => ({
            default: (await ws()).ListView
        })),
        gc = $(async () => ({
            default: (await ws()).RoomView
        })),
        rx = $(async () => ({
            default: (await ws()).GroupMessageDialog
        }));

    function lx() {
        O.emit("inject_dialog", [{
            path: "#/chat/:path",
            element: e.jsx(gc, {}),
            isDialog: !0
        }, {
            path: "#/chat",
            element: ee.isMobile() ? e.jsx(ox, {}) : e.jsx(gc, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/group-message",
            element: e.jsx(rx, {}),
            isAuth: !0,
            isDialog: !0
        }])
    }
    const Je = () => K(() =>
            import ("./index.1e722084.js").then(async t => (await t.__tla, t)), ["assets/index.1e722084.js", "assets/chunk-4e4dc83f.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-dcd0ca87.js", "assets/chunk-61302461.js", "assets/index.ecad4d73.css", "assets/Privacy.8a985c5d.css", "assets/chunk-bff9c602.js", "assets/chunk-d1eabc3b.js", "assets/index.97e332de.css"]),
        cx = $(async () => ({
            default: (await Je()).PrivacyDialog
        })),
        fc = $(async () => ({
            default: (await Je()).TwoFactorDialog
        })),
        dx = $(async () => ({
            default: (await Je()).ResetPassword
        })),
        mx = $(async () => ({
            default: (await Je()).ResetWithdraw
        })),
        ux = $(async () => ({
            default: (await Je()).PasswordInvalidDialog
        })),
        px = $(async () => ({
            default: (await Je()).WithdrawInvalidDialog
        })),
        hx = $(async () => ({
            default: (await Je()).EmailDialog
        })),
        gx = $(async () => ({
            default: (await Je()).PhoneDialog
        })),
        fx = $(async () => ({
            default: (await Je()).KYC
        })),
        yc = $(async () => ({
            default: (await Je()).NeedKycDialog
        }));

    function yx() {
        O.emit("inject_dialog", [{
            path: "#/settings/privacy",
            element: e.jsx(cx, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/settings/safe",
            element: e.jsx(fc, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/settings/resetPassword",
            element: e.jsx(dx, {}),
            isDialog: !0
        }, {
            path: "#/settings/resetPasswordExpire",
            element: e.jsx(ux, {}),
            isDialog: !0
        }, {
            path: "#/settings/resetDepositPassword",
            element: e.jsx(mx, {}),
            isDialog: !0
        }, {
            path: "#/settings/resetPasswordInvalid",
            element: e.jsx(px, {}),
            isDialog: !0
        }, {
            path: "#/quests/bind2fa",
            element: e.jsx(fc, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/quests/bindemail",
            element: e.jsx(hx, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/mobile",
            element: e.jsx(gx, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/need-verify/:verifyId",
            element: e.jsx(fx, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify",
            element: e.jsx(yc, {
                kyc_level: k0
            }),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/settings/verify/:kycLevelId",
            element: e.jsx(yc, {}),
            isDialog: !0,
            isAuth: !0
        }])
    }
    const bx = $(() => K(() =>
            import ("./chunk-9d18b81d.js").then(async t => (await t.__tla, t)), ["assets/chunk-9d18b81d.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-ad791b33.js", "assets/LiveStatsContent.133dee2e.css"])),
        vx = Y(function() {
            const t = k(),
                [a] = f.useState({
                    x: (window.innerWidth - O.relativePx(300)) / 2,
                    y: window.innerHeight / 2
                });
            return e.jsx(P1, {
                x: a.x,
                y: a.y,
                title: t("common.actions.livestats"),
                visible: Xc.show,
                onClose: () => O.emit("livestate_toggle", !1),
                children: e.jsx(le, {
                    className: xx,
                    bodyLock: !1,
                    children: Xc.show && e.jsx(bx, {})
                })
            })
        });

    function wx() {
        O.emit("inject_rootNode", e.jsx(vx, {}))
    }
    const xx = "c1oc2lsv",
        Qe = () => K(() =>
            import ("./chunk-f0adbd98.js").then(async t => (await t.__tla, t)), ["assets/chunk-f0adbd98.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-abcf23a1.js", "assets/chunk-d1eabc3b.js", "assets/index.81206067.css"]),
        jx = $(async () => ({
            default: (await Qe()).UserRain
        })),
        _x = $(async () => ({
            default: (await Qe()).UserAchieve
        })),
        kx = $(async () => ({
            default: (await Qe()).UserProfile
        })),
        Nx = $(async () => ({
            default: (await Qe()).EditNickName
        })),
        Cx = $(async () => ({
            default: (await Qe()).EditAvatar
        })),
        Tx = $(async () => ({
            default: (await Qe()).Invite
        })),
        Sx = $(async () => ({
            default: (await Qe()).Achieve
        })),
        Ax = $(async () => ({
            default: (await Qe()).Statistics
        })),
        Ix = $(async () => ({
            default: (await Qe()).VerifyPop
        })),
        Rx = $(async () => ({
            default: (await Qe()).SharePop
        }));

    function Dx() {
        O.emit("inject_dialog", [{
            path: "#/achieve",
            element: e.jsx(Sx, {}),
            isAuth: !0,
            isDialog: !0
        }, {
            path: "#/user/achieve/:userId",
            element: e.jsx(_x, {}),
            isDialog: !0
        }, {
            path: "#/user/rain",
            element: e.jsx(jx, {}),
            isDialog: !0,
            isAuth: !0
        }, {
            path: "#/user/edit_avatar",
            element: e.jsx(Cx, {}),
            isDialog: !0
        }, {
            path: "#/user/edit_nickname",
            element: e.jsx(Nx, {}),
            isDialog: !0
        }, {
            path: "#/user/profile/:userId",
            element: e.jsx(kx, {}),
            isDialog: !0
        }, {
            path: "#/user/invite",
            element: e.jsx(Tx, {}),
            isDialog: !0
        }, {
            path: "#/user/statistics",
            element: e.jsx(Ax, {}),
            isDialog: !0
        }, {
            path: "#/verify_representative",
            element: e.jsx(Ix, {}),
            isDialog: !0
        }, {
            path: "#/social_share/:fullName",
            element: e.jsx(Rx, {}),
            isDialog: !0
        }])
    }
    const Px = tt(({
        data: t
    }) => {
        const a = k(),
            s = re();
        return e.jsxs("div", {
            className: A(Bx, "raffle-msg"),
            children: [e.jsxs(it, {
                className: "raffle-msg-content",
                children: [e.jsx("div", {
                    className: "left-stars",
                    children: e.jsx("div", {
                        className: "stars-wrap",
                        children: e.jsx("img", {
                            alt: "stars",
                            src: N0.stars
                        })
                    })
                }), e.jsxs("div", {
                    className: "right-text",
                    children: [e.jsx("p", {
                        className: "bt",
                        children: a("page.raffle.live")
                    }), e.jsx("p", {
                        className: "bd",
                        children: a("page.raffle.check")
                    })]
                })]
            }), e.jsx("div", {
                className: "btn-wrap",
                children: e.jsx(q, {
                    type: "conic4",
                    onClick: () => s("/exclusive/weekly-raffle"),
                    children: a("page.raffle.view.btn")
                })
            })]
        })
    });
    Ie({
        cl1: ["#24262B", "#F6F7FA"],
        cl2: ["linear-gradient(145deg, #FFB416 -200%, #1C1E22 40%)", "linear-gradient(145deg, #FFB416 -50%, #ffffff 40%)"],
        cl3: [ie("#1C1E22", .5)]
    });
    const Bx = "mvytmc5";

    function Ex() {
        const {
            publicChatStore: t
        } = Ee();
        return f.useEffect(() => {
            t.addParser("19", Px)
        }, []), null
    }
    const Lx = Y(function() {
            const t = k();
            return e.jsxs("div", {
                className: Fx,
                children: [e.jsx("p", {
                    className: "n-t",
                    children: t("page.raffle.notify.title")
                }), e.jsx("p", {
                    className: "n-d",
                    children: t("page.raffle.notify.desc")
                })]
            })
        }),
        Fx = "r4jpn8c";

    function Ox() {
        O.emit("inject_rootNode", e.jsx(Ex, {})), S.addSocketEvent("raffle-almost-over", () => {
            L(e.jsx(Lx, {}), {
                duration: 0,
                onClick: () => {
                    O.unsafeNavigate("/exclusive/weekly-raffle")
                }
            })
        })
    }
    const Mx = J.memo(function() {
        return f.useEffect(() => {
            if (Se.host === "87.com") {
                const t = document.title;
                t && (document.title = t.replace("BC.GAME", "87.COM"))
            }
        }, []), null
    });

    function Wx() {
        O.emit("inject_rootNode", e.jsx(Mx, {}))
    }
    const Ux = tt(({
        data: t
    }) => (Vx(), e.jsx("div", {
        className: $x,
        children: e.jsxs(it, {
            className: "full-message",
            children: [e.jsx("div", {
                className: "share-message",
                children: t.chat.message.shareChatContent
            }), e.jsx("div", {
                className: "wrap",
                children: e.jsx(f.Suspense, {
                    fallback: null,
                    children: e.jsx(I0, {
                        data: t
                    })
                })
            })]
        })
    })));

    function Vx() {
        const {
            publicChatStore: t
        } = Ee();
        f.useEffect(() => {
            R0().then(a => {
                zx(t, a)
            })
        }, [t])
    }
    const zx = Oc((t, a) => {
            function s(n) {
                M.post(`/game/support/share-v2/share/room/like-infos/${n}`).then(i => {
                    i.map(o => a.setItem(o.shareId, {
                        count: o.clickCount,
                        isLike: o.hasClickShare
                    }))
                })
            }
            Zc(() => {
                a.roomId = t.currentRoom.id, s(t.currentRoom.id)
            }), t.socket.on("share-like", ba.decodeBind(n => {
                const i = a.getItem(n.shareId);
                a.setItem(n.shareId, {
                    count: n.clickCount,
                    isLike: i.isLike
                })
            }, "json"))
        }),
        $x = "s1q04a0m",
        qx = async t => (await K(() =>
            import ("./chunk-575bb78c.js").then(async a => (await a.__tla, a)).then(a => a.a), ["assets/chunk-575bb78c.js", "assets/chunk-7513ee0e.js", "assets/chunk-cf010ec4.js", "assets/chunk-61302461.js", "assets/chunk-dcd0ca87.js", "assets/index.ecad4d73.css", "assets/chunk-326f599c.js", "assets/ReplyPop.174018b0.css"])).openCommentReply(t);

    function Hx() {
        const {
            publicChatStore: t
        } = Ee();
        return f.useEffect(() => {
            O.on("getPublicChatRoomId", a => {
                a(t.currentRoom.id)
            }), t.addParser("9", Ux, 20)
        }, []), null
    }

    function Yx() {
        window.app = O, O.emit("inject_rootNode", e.jsx(Hx, {})), O.emit("inject_rootNode", e.jsx(D0, {})), O.on("openGameDetailWithData", P0), O.on("openGameDetail", B0), O.on("openAllPlayers", E0), O.on("openCommentReply", qx), O.emit("inject_dialog", [{
            path: "#/sd/:betId",
            element: e.jsx(L0, {}),
            isDialog: !0
        }, {
            path: "#/set_seed/:gameName",
            element: e.jsx(F0, {}),
            isDialog: !0
        }, {
            path: "#/validate/:gameUnique",
            element: e.jsx(O0, {}),
            isDialog: !0
        }])
    }
    let bc, vc, wc;
    bc = "/assets/symbol-defs.ef6a79c4.svg", vd = {
        icon: bc
    }, vc = Object.assign({
        "../../bc-bonus/src/install.tsx": pb,
        "../../bc-wallet/src/install.tsx": ew
    }), wc = Object.values(vc).map(t => t.default), [Wx, bw, Ww, ix, Ew, lx, X1, yx, wx, Dx, Ox, C0, Yx, ...wc].map(t => {
        try {
            t()
        } catch (a) {
            console.log(a)
        }
    }), Zt = new B1({
        langs: aw.reduce((t, a) => {
            const s = new E1(...a);
            return t[s.sortCode] = s, t
        }, {})
    }), ee.getUnSafeLang = () => Zt.lng, O.emit("inject_rootNode", e.jsx(iw, {})), Zt.events.on("change", () => {
        let t = Zt.lng;
        t === "tl" && (t = "fil"), M.defaults.headers.common["Accept-Language"] = t
    });
    async function Gx(t) {
        return await S0({
            sectionId: "casino_bc",
            pageSize: 50,
            lang: t
        })
    }
    wd = Is(function(t) {
        return {
            bcBrand: Gx(t)
        }
    }), Nd = {}
});
export {
    ld as A, cd as B, Ta as C, dd as D, md as E, Es as F, Ls as G, ud as H, Fs as I, Sa as J, pd as K, at as L, Pt as M, hd as N, Bt as O, gd as R, fd as S, yd as T, bd as V, W0 as __tla, Os as a, Ms as b, Ws as c, Us as d, Vs as e, Qt as f, zs as g, $s as h, Zt as i, vd as j, wd as k, qs as l, ht as m, xd as n, jd as o, _d as p, kd as q, Nd as r, Aa as s, Cd as t, Td as u, Hs as v, Ys as w, Sd as x, Ad as y, Id as z
};
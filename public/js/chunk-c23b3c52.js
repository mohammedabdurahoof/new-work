var de = Object.defineProperty;
var V = Object.getOwnPropertySymbols;
var me = Object.prototype.hasOwnProperty,
    ve = Object.prototype.propertyIsEnumerable;
var B = (e, t, n) => t in e ? de(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    G = (e, t) => {
        for (var n in t || (t = {})) me.call(t, n) && B(e, n, t[n]);
        if (V)
            for (var n of V(t)) ve.call(t, n) && B(e, n, t[n]);
        return e
    };

function S(e, t) {
    let n; {
        var i = Error.stackTraceLimit;
        Error.stackTraceLimit = 1 / 0, n = new Error(e), Error.stackTraceLimit = i
    }
    return n.stack = Ee(n.stack, t), n
}

function Ee(e, t) {
    if (!e) return e;
    const n = ye(e);
    let i = 0;
    return n.filter(r => r.includes(" (internal/") || r.includes(" (node:internal") ? !1 : i < t && xe(r) ? (i++, !1) : !0).join(`
`)
}

function xe(e) {
    return e.startsWith("    at ")
}

function ye(e) {
    return e.split(/\r?\n/)
}

function j(e, t) {
    const n = globalThis.__vite_plugin_ssr = globalThis.__vite_plugin_ssr || {};
    return n[e] = n[e] || t
}

function M(e) {
    return Array.from(new Set(e))
}
const P = j("assertPackageInstances.ts", {
    instances: []
});

function Fe() {
    const e = M(P.instances);
    if (e.length > 1) throw new Error(`Multiple versions \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Make sure only one version is loaded.`)
}

function Y() {
    if (P.checkBundle && !(P.instances.length <= 1)) throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)")
}

function we() {
    P.checkBundle = !0, Y()
}

function be(e) {
    P.instances.push(e), Fe(), Y()
}
const $e = "0.4.77",
    E = {
        projectName: "vite-plugin-ssr",
        projectVersion: $e,
        npmPackageName: "vite-plugin-ssr",
        githubRepository: "https://github.com/brillout/vite-plugin-ssr",
        discordInviteToolChannel: "https://discord.com/invite/qTq92FQzKb"
    };
be(E.projectVersion);
const d = j("assert.ts", {
        alreadyLogged: new Set
    }),
    w = `[${E.npmPackageName}@${E.projectVersion}]`,
    _e = `${w}[Bug]`,
    Pe = `${w}[Wrong Usage]`,
    Ne = `${w}[Warning]`,
    je = `${w}[Info]`,
    T = 2;

function s(e, t) {
    var n;
    if (e) return;
    const i = (() => {
            if (!t) return "";
            const a = typeof t == "string" ? t : "`" + JSON.stringify(t) + "`";
            return `Debug info (this is for the ${E.projectName} maintainers; you can ignore this): ${a}`
        })(),
        r = S([`${_e} You stumbled upon a bug in ${E.projectName}'s source code.`, `Reach out at ${E.githubRepository}/issues/new or ${E.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`, "A maintainer will fix the bug (usually under 24 hours).", `Don't hesitate to reach out as it makes ${E.projectName} more robust.`, i].join(" "), T);
    throw (n = d.onBeforeLog) === null || n === void 0 || n.call(d), r
}

function g(e, t) {
    var n;
    if (e) return;
    const i = t.startsWith("[") ? "" : " ",
        r = `${Pe}${i}${t}`,
        a = S(r, T);
    throw (n = d.onBeforeLog) === null || n === void 0 || n.call(d), a
}

function Re(e) {
    const t = e.startsWith("[") ? "" : " ";
    return S(`${w}${t}${e}`, T)
}

function U(e, t, {
    onlyOnce: n,
    showStackTrace: i
}) {
    var r;
    if (e) return;
    const a = `${Ne} ${t}`;
    if (n) {
        const {
            alreadyLogged: o
        } = d, l = n === !0 ? a : n;
        if (o.has(l)) return;
        o.add(l)
    }(r = d.onBeforeLog) === null || r === void 0 || r.call(d), console.warn(i ? new Error(a) : a)
}

function We(e, t, {
    onlyOnce: n
}) {
    var i;
    if (e) return;
    const r = `${je} ${t}`;
    if (n) {
        const {
            alreadyLogged: a
        } = d, o = r;
        if (a.has(o)) return;
        a.add(o)
    }(i = d.onBeforeLog) === null || i === void 0 || i.call(d), console.log(r)
}

function N(e, t, n) {
    return typeof e == "string" ? J(e.split(""), t, n).join("") : J(e, t, n)
}

function J(e, t, n) {
    const i = [];
    let r = t >= 0 ? t : e.length + t;
    s(r >= 0 && r <= e.length);
    let a = n >= 0 ? n : e.length + n;
    for (s(a >= 0 && a <= e.length); !(r === a || (r === e.length && (r = 0), r === a));) {
        const o = e[r];
        s(o !== void 0), i.push(o), r++
    }
    return i
}

function q(e) {
    return e.startsWith("/") || e.startsWith("http") || e.startsWith(".") || e.startsWith("?") || e.startsWith("#") || e === ""
}

function H(e, t) {
    s(q(e), {
        url: e
    }), s(t.startsWith("/"), {
        url: e,
        baseServer: t
    });
    const [n, ...i] = e.split("#");
    s(n !== void 0);
    const r = ["", ...i].join("#") || null;
    s(r === null || r.startsWith("#"));
    const a = r === null ? "" : C(r.slice(1)),
        [o, ...l] = n.split("?");
    s(o !== void 0);
    const u = ["", ...l].join("?") || null;
    s(u === null || u.startsWith("?"), {
        url: e,
        searchOriginal: u
    });
    const c = {},
        _ = {};
    Array.from(new URLSearchParams(u || "")).forEach(([F, k]) => {
        c[F] = k, _[F] = [..._[F] || [], k]
    });
    const {
        origin: h,
        pathnameResolved: f
    } = Se(o, t);
    s(h === null || h === C(h), {
        origin: h
    }), s(f.startsWith("/"), {
        url: e,
        pathnameResolved: f
    }), s(h === null || e.startsWith(h), {
        url: e,
        origin: h
    });
    const m = o.slice((h || "").length); {
        const F = `${h||""}${m}${u||""}${r||""}`;
        s(e === F, {
            url: e,
            urlRecreated: F
        })
    }
    let {
        pathname: v,
        hasBaseServer: y
    } = Ce(f, t);
    return v = Le(v), s(v.startsWith("/")), {
        origin: h,
        pathname: v,
        pathnameOriginal: m,
        hasBaseServer: y,
        search: c,
        searchAll: _,
        searchOriginal: u,
        hash: a,
        hashOriginal: r
    }
}

function C(e) {
    try {
        return decodeURIComponent(e)
    } catch (t) {}
    try {
        return decodeURI(e)
    } catch (t) {}
    return e
}

function Le(e) {
    return e.split("/").map(t => C(t).split("/").join("%2F")).join("/")
}

function Se(e, t) {
    var n;
    if (e.startsWith("//")) return {
        origin: null,
        pathnameResolved: e
    };
    let i, r;
    try {
        const a = new URL(e);
        i = a.origin, r = a.pathname
    } catch (a) {
        i = null;
        let o = typeof window < "u" && ((n = window == null ? void 0 : window.document) === null || n === void 0 ? void 0 : n.baseURI);
        o = o || "http://fake.example.org" + t, r = new URL(e, o).pathname
    }
    return s(r.startsWith("/"), {
        urlWithoutSearch: e,
        pathnameResolved: r
    }), s(r === r.split("?")[0].split("#")[0]), {
        origin: i,
        pathnameResolved: r
    }
}

function Te(e) {
    s(e.startsWith("/")), s(!e.includes("?")), s(!e.includes("#"))
}

function Ce(e, t) {
    Te(e), s(K(t));
    let n = e;
    if (s(n.startsWith("/")), s(t.startsWith("/")), t === "/") return {
        pathname: e,
        hasBaseServer: !0
    };
    let i = t;
    return t.endsWith("/") && n === N(t, 0, -1) && (i = N(t, 0, -1), s(n === i)), n.startsWith(i) ? (s(n.startsWith("/") || n.startsWith("http")), s(n.startsWith(i)), n = n.slice(i.length), n.startsWith("/") || (n = "/" + n), s(n.startsWith("/")), {
        pathname: n,
        hasBaseServer: !0
    }) : {
        pathname: e,
        hasBaseServer: !1
    }
}

function K(e) {
    return e.startsWith("/")
}

function Ae(e) {
    const t = window.location.href,
        {
            origin: n,
            searchOriginal: i,
            hashOriginal: r,
            pathnameOriginal: a
        } = H(t, "/");
    let o;
    if (e != null && e.withoutHash) {
        o = `${a}${i||""}`;
        const l = `${n||""}${o}${r||""}`;
        s(t === l, {
            url: t,
            urlRecreated: l
        })
    } else {
        o = `${a}${i||""}${r||""}`;
        const l = `${n||""}${o}`;
        s(t === l, {
            url: t,
            urlRecreated: l
        })
    }
    return o
}

function R(e) {
    return e instanceof Function || typeof e == "function"
}

function p(e, t, n = "unknown") {
    if (!(typeof e == "object" && e !== null && t in e)) return n === "undefined";
    if (n === "unknown") return !0;
    const i = e[t];
    return n === "array" ? Array.isArray(i) : n === "string[]" ? Array.isArray(i) && i.every(r => typeof r == "string") : n === "function" ? R(i) : Array.isArray(n) ? typeof i == "string" && n.includes(i) : n === "null" ? i === null : n === "undefined" ? i === void 0 : n === "true" ? i === !0 : n === "false" ? i === !1 : typeof i === n
}

function Q() {
    return typeof window < "u" && typeof window.scrollY == "number"
}

function A(e, t) {
    Object.assign(e, t)
}

function b(e) {
    return typeof e == "object" && e !== null
}
const Oe = ["js", "ts", "cjs", "cts", "mjs", "mts", "jsx", "tsx", "cjsx", "ctsx", "mjsx", "mtsx"],
    Z = ["vue", "svelte", "marko", "md", "mdx"],
    Ie = [...Oe, ...Z];

function X(e) {
    const t = Ie.some(n => e.endsWith("." + n));
    return s(!ze(e) || t), t
}

function ze(e) {
    return /\.(c|m)?(j|t)sx?$/.test(e)
}

function De(e) {
    return Z.some(t => e.endsWith("." + t))
}

function ke(e) {
    return (t, n) => {
        const i = e(t),
            r = e(n);
        return i === r ? 0 : i > r ? -1 : 1
    }
}

function ee(e) {
    return (t, n) => {
        const i = e(t),
            r = e(n);
        if (s([!0, !1, null].includes(i)), s([!0, !1, null].includes(r)), i === r) return 0;
        if (i === !0 || r === !1) return -1;
        if (r === !0 || i === !1) return 1;
        s(!1)
    }
}

function Ve(e) {
    return ee(t => {
        const n = e(t);
        return n === null ? null : !n
    })
}

function Be(e, t) {
    return e.toLowerCase() < t.toLowerCase() ? -1 : e.toLowerCase() > t.toLowerCase() ? 1 : 0
}
const Ge = e => e != null,
    Me = "\\";

function te(e) {
    s(e && !e.includes(Me), `Wrongly formatted path: ${e}`)
}
const ne = /[^a-zA-Z-_]/;

function O(e) {
    return Ye(e) !== null
}

function Ye(e) {
    if (e === void 0 || e.includes("\\") || e.startsWith("/")) return null;
    let t = null;
    if (e.startsWith("@")) {
        if (!e.includes("/")) return null;
        const [o, ...l] = e.split("/");
        t = o, e = l.join("/"), s(t && t.startsWith("@"))
    }
    if (e === "") return null;
    const [n, ...i] = e.split("/"), r = n, a = i.length === 0 ? null : i.join("/");
    return s(r), ne.test(r) || t && ne.test(t.slice(1)) ? null : {
        npmPackageName: t ? `${t}/${r}` : r,
        modulePath: a
    }
}
const Ue = ["clientRouting"];

function Je(e) {
    Ue.forEach(t => {
        if (s(e.fileExports), !(t in e.fileExports)) return;
        const n = `The value of \`${t}\` is only allowed to be \`true\`.`;
        g(e.fileExports[t] !== !1, `${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${n})`), g(e.fileExports[t] === !0, `${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)
    })
}
const re = ["render", "clientRouting", "prerender", "doNotPrerender"];

function qe(e, t) {
    g(!re.includes(e), `${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)
}

function He(e) {
    const t = {};
    e.forEach(r => {
        Ke(r).forEach(({
            exportName: a,
            exportValue: o,
            isFromDefaultExport: l
        }) => {
            var u;
            s(a !== "default"), t[a] = (u = t[a]) !== null && u !== void 0 ? u : [], t[a].push({
                exportValue: o,
                filePath: r.filePath,
                _filePath: r.filePath,
                _fileType: r.fileType,
                _isFromDefaultExport: l
            })
        })
    });
    const n = Qe(),
        i = {};
    return Object.entries(t).forEach(([r, a]) => {
        a.forEach(({
            exportValue: o,
            _fileType: l,
            _isFromDefaultExport: u
        }) => {
            var c;
            i[r] = (c = i[r]) !== null && c !== void 0 ? c : o, l === ".page" && !u && (r in n || (n[r] = o))
        })
    }), s(!("default" in i)), s(!("default" in t)), {
        exports: i,
        exportsAll: t,
        pageExports: n
    }
}

function Ke(e) {
    const {
        filePath: t,
        fileExports: n
    } = e;
    s(n), s(X(t));
    const i = [];
    return Object.entries(n).sort(Ve(([r]) => r === "default")).forEach(([r, a]) => {
        let o = r === "default";
        if (o)
            if (De(t)) r = "Page";
            else {
                g(b(a), `The \`export default\` of ${t} should be an object.`), Object.entries(a).forEach(([l, u]) => {
                    qe(l, t), i.push({
                        exportName: l,
                        exportValue: u,
                        isFromDefaultExport: o
                    })
                });
                return
            }
        i.push({
            exportName: r,
            exportValue: a,
            isFromDefaultExport: o
        })
    }), i.forEach(({
        exportName: r,
        isFromDefaultExport: a
    }) => {
        s(!(a && re.includes(r)))
    }), i
}

function Qe() {
    return new Proxy({}, {
        get(...e) {
            return Q() || U(!1, "`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports", {
                onlyOnce: !0,
                showStackTrace: !0
            }), Reflect.get(...e)
        }
    })
}

function ie(e) {
    const t = ".page.",
        n = N(e.split(t), 0, -1).join(t);
    return s(!n.includes("\\")), n
}

function $(e) {
    te(e), s(e.startsWith("/") || O(e), {
        filePath: e
    })
}

function Ze(e) {
    const t = e.filter(n => W(n));
    if (g(t.length <= 1, `Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`), t.length > 0) {
        const n = t[0];
        return s(n), n
    }
    return null
}

function W(e) {
    return s(!e.includes("\\")), e.includes("/_error")
}
const Xe = [".page", ".page.server", ".page.route", ".page.client", ".css"];

function et(e) {
    if (te(e), e.endsWith(".css")) return s(O(e), e), ".css";
    s(X(e), e);
    const t = e.split("/").slice(-1)[0].split("."),
        n = t.slice(-3)[0],
        i = t.slice(-2)[0];
    if (i === "page") return ".page";
    if (s(n === "page", e), i === "server") return ".page.server";
    if (i === "client") return ".page.client";
    if (i === "route") return ".page.route";
    s(!1, e)
}

function se(e) {
    const t = r => i.pageId === r || i.isDefaultPageFile && (oe(i.filePath) || tt(r, i.filePath)),
        n = et(e),
        i = {
            filePath: e,
            fileType: n,
            isEnv: r => {
                if (s(n !== ".page.route"), r === "CLIENT_ONLY") return n === ".page.client" || n === ".css";
                if (r === "SERVER_ONLY") return n === ".page.server";
                if (r === "CLIENT_AND_SERVER") return n === ".page";
                s(!1)
            },
            isRelevant: t,
            isDefaultPageFile: I(e),
            isRendererPageFile: n !== ".css" && I(e) && oe(e),
            isErrorPageFile: W(e),
            pageId: ie(e)
        };
    return i
}

function I(e) {
    return $(e), W(e) ? !1 : e.includes("/_default")
}

function oe(e) {
    return $(e), e.includes("/renderer/")
}

function tt(e, t) {
    $(e), $(t), s(!e.endsWith("/")), s(!t.endsWith("/")), s(I(t));
    const n = N(t.split("/"), 0, -1).filter(i => i !== "_default").join("/");
    return e.startsWith(n)
}

function nt(e) {
    s(p(e, "isGeneratedFile"), "Missing `isGeneratedFile`."), s(e.isGeneratedFile !== !1, "vite-plugin-ssr was re-installed(/re-built). Restart your app."), s(e.isGeneratedFile === !0, `\`isGeneratedFile === ${e.isGeneratedFile}\``), s(p(e, "pageFilesLazy", "object")), s(p(e, "pageFilesEager", "object")), s(p(e, "pageFilesExportNamesLazy", "object")), s(p(e, "pageFilesExportNamesEager", "object")), s(p(e.pageFilesLazy, ".page")), s(p(e.pageFilesLazy, ".page.client") || p(e.pageFilesLazy, ".page.server")), s(p(e, "pageFilesList", "string[]"));
    const t = {};
    L(e.pageFilesLazy).forEach(({
        filePath: i,
        pageFile: r,
        globValue: a
    }) => {
        var o;
        r = t[i] = (o = t[i]) !== null && o !== void 0 ? o : r;
        const l = a;
        ae(l), r.loadFile = async () => {
            "fileExports" in r || (r.fileExports = await l(), Je(r))
        }
    }), L(e.pageFilesExportNamesLazy).forEach(({
        filePath: i,
        pageFile: r,
        globValue: a
    }) => {
        var o;
        r = t[i] = (o = t[i]) !== null && o !== void 0 ? o : r;
        const l = a;
        ae(l), r.loadExportNames = async () => {
            if (!("exportNames" in r)) {
                const u = await l();
                g("exportNames" in u, "You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"), s(p(u, "exportNames", "string[]"), r.filePath), r.exportNames = u.exportNames
            }
        }
    }), L(e.pageFilesEager).forEach(({
        filePath: i,
        pageFile: r,
        globValue: a
    }) => {
        var o;
        r = t[i] = (o = t[i]) !== null && o !== void 0 ? o : r;
        const l = a;
        s(b(l)), r.fileExports = l
    }), L(e.pageFilesExportNamesEager).forEach(({
        filePath: i,
        pageFile: r,
        globValue: a
    }) => {
        var o;
        r = t[i] = (o = t[i]) !== null && o !== void 0 ? o : r;
        const l = a;
        s(b(l)), s(p(l, "exportNames", "string[]"), r.filePath), r.exportNames = l.exportNames
    }), e.pageFilesList.forEach(i => {
        var r;
        t[i] = (r = t[i]) !== null && r !== void 0 ? r : se(i)
    });
    const n = Object.values(t);
    return n.forEach(({
        filePath: i
    }) => {
        s(!i.includes("\\"))
    }), n
}

function L(e) {
    const t = [];
    return Object.entries(e).forEach(([n, i]) => {
        s(Xe.includes(n)), s(b(i)), Object.entries(i).forEach(([r, a]) => {
            const o = se(r);
            s(o.fileType === n), t.push({
                filePath: r,
                pageFile: o,
                globValue: a
            })
        })
    }), t
}

function ae(e) {
    s(R(e))
}
const x = globalThis.__vite_plugin_ssr__pageFiles = globalThis.__vite_plugin_ssr__pageFiles || {
    pageFilesAll: void 0,
    pageFilesGetter: void 0
};

function rt(e) {
    x.pageFilesAll = nt(e)
}
async function it(e, t) {
    e ? (s(!x.pageFilesGetter), s(t === void 0)) : (s(x.pageFilesGetter), s(typeof t == "boolean"), (!x.pageFilesAll || !t) && await x.pageFilesGetter()), s(x.pageFilesAll);
    const n = x.pageFilesAll,
        i = st(n);
    return {
        pageFilesAll: n,
        allPageIds: i
    }
}

function st(e) {
    const t = e.filter(({
        isDefaultPageFile: n
    }) => !n).map(({
        filePath: n
    }) => n).map(ie);
    return M(t)
}

function le(e, t) {
    return ue(e, t, !0)
}

function ot(e, t) {
    return ue(e, t, !1)
}

function ue(e, t, n) {
    const i = n ? "CLIENT_ONLY" : "SERVER_ONLY",
        r = e.filter(f => f.isRelevant(t) && f.fileType !== ".page.route").sort(at(n, t)),
        a = f => {
            const m = r.filter(y => y.pageId === t && y.isEnv(f ? "CLIENT_AND_SERVER" : i));
            g(m.length <= 1, `Merge the following files into a single file: ${m.map(y=>y.filePath).join(" ")}`);
            const v = m[0];
            return s(v === void 0 || !v.isDefaultPageFile), v
        },
        o = a(!1),
        l = a(!0),
        u = f => r.filter(m => m.isRendererPageFile && m.isEnv(f ? "CLIENT_AND_SERVER" : i))[0],
        c = u(!1),
        _ = u(!0),
        h = r.filter(f => f.isDefaultPageFile && !f.isRendererPageFile && (f.isEnv(i) || f.isEnv("CLIENT_AND_SERVER")));
    return [o, l, ...h, c, _].filter(Ge)
}

function at(e, t) {
    const n = e ? "CLIENT_ONLY" : "SERVER_ONLY",
        i = -1,
        r = 1,
        a = 0;
    return (o, l) => {
        if (!o.isDefaultPageFile && l.isDefaultPageFile) return i;
        if (!l.isDefaultPageFile && o.isDefaultPageFile) return r; {
            const u = o.isRendererPageFile,
                c = l.isRendererPageFile;
            if (!u && c) return i;
            if (!c && u) return r;
            s(u === c)
        } {
            const u = ce(t, o.filePath),
                c = ce(t, l.filePath);
            if (u < c) return i;
            if (c < u) return r;
            s(u === c)
        } {
            if (o.isEnv(n) && l.isEnv("CLIENT_AND_SERVER")) return i;
            if (l.isEnv(n) && o.isEnv("CLIENT_AND_SERVER")) return r
        }
        return a
    }
}

function ce(e, t) {
    $(e), $(t);
    let n = 0;
    for (; n < e.length && n < t.length && e[n] === t[n]; n++);
    const i = e.slice(n),
        r = t.slice(n),
        a = i.split("/").length,
        o = r.split("/").length;
    return a + o
}
const fe = "__whileFetchingAssets";
async function lt(e, t) {
    const n = le(e, t);
    try {
        await Promise.all(n.map(o => {
            var l;
            return (l = o.loadFile) === null || l === void 0 ? void 0 : l.call(o)
        }))
    } catch (o) {
        throw o && Object.assign(o, {
            [fe]: !0
        }), o
    }
    const {
        exports: i,
        exportsAll: r,
        pageExports: a
    } = He(n);
    return {
        exports: i,
        exportsAll: r,
        pageExports: a,
        _pageFilesLoaded: n
    }
}

function ut(e) {
    return e ? e[fe] === !0 : !1
}
const ct = [{
    is: e => e === void 0,
    match: e => e === "!undefined",
    serialize: () => "!undefined",
    deserialize: () => {}
}, {
    is: e => e === 1 / 0,
    match: e => e === "!Infinity",
    serialize: () => "!Infinity",
    deserialize: () => 1 / 0
}, {
    is: e => e === -1 / 0,
    match: e => e === "!-Infinity",
    serialize: () => "!-Infinity",
    deserialize: () => -1 / 0
}, {
    is: e => typeof e == "number" && isNaN(e),
    match: e => e === "!NaN",
    serialize: () => "!NaN",
    deserialize: () => NaN
}, {
    is: e => e instanceof Date,
    match: e => e.startsWith("!Date:"),
    serialize: e => "!Date:" + e.toISOString(),
    deserialize: e => new Date(e.slice(6))
}, {
    is: e => typeof e == "bigint",
    match: e => e.startsWith("!BigInt:"),
    serialize: e => "!BigInt:" + e.toString(),
    deserialize: e => {
        if (typeof BigInt > "u") throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");
        return BigInt(e.slice(8))
    }
}, {
    is: e => e instanceof RegExp,
    match: e => e.startsWith("!RegExp:"),
    serialize: e => "!RegExp:" + e.toString(),
    deserialize: e => {
        e = e.slice(8);
        const t = e.match(/\/(.*)\/(.*)?/),
            n = t[1],
            i = t[2];
        return new RegExp(n, i)
    }
}, {
    is: e => e instanceof Map,
    match: e => e.startsWith("!Map:"),
    serialize: (e, t) => "!Map:" + t(Array.from(e.entries())),
    deserialize: (e, t) => new Map(t(e.slice(5)))
}, {
    is: e => e instanceof Set,
    match: e => e.startsWith("!Set:"),
    serialize: (e, t) => "!Set:" + t(Array.from(e.values())),
    deserialize: (e, t) => new Set(t(e.slice(5)))
}, {
    is: e => typeof e == "string" && e.startsWith("!"),
    match: e => e.startsWith("!"),
    serialize: e => "!" + e,
    deserialize: e => e.slice(1)
}];

function z(e) {
    const t = JSON.parse(e);
    return pe(t)
}

function pe(e) {
    return typeof e == "string" ? ft(e) : (typeof e == "object" && e !== null && Object.entries(e).forEach(([t, n]) => {
        e[t] = pe(n)
    }), e)
}

function ft(e) {
    for (const {
            match: t,
            deserialize: n
        } of ct)
        if (t(e)) return n(e, z);
    return e
}

function pt() {
    var e;
    const t = (e = document.getElementById("vite-plugin-ssr_pageContext")) === null || e === void 0 ? void 0 : e.textContent;
    s(t);
    const n = z(t);
    s(p(n, "pageContext", "object"));
    const {
        pageContext: i
    } = n;
    return s(p(i, "_pageId", "string")), A(i, {
        _pageContextRetrievedFromServer: G({}, i),
        _comesDirectlyFromServer: !0
    }), i
}

function he(e, t) {
    if (!(t in e.exports)) return null;
    const n = e.exports[t],
        i = e.exportsAll[t][0];
    s(i.exportValue === n);
    const {
        filePath: r
    } = i;
    return s(r), s(!t.endsWith(")")), g(R(n), `\`export { ${t} }\` of ${r} should be a function`), {
        hook: n,
        filePath: r
    }
}

function ge(e, t) {
    he(e, t)
}

function ht(e) {
    const t = Object.entries(e);
    for (const n in e) delete e[n];
    t.sort(([n], [i]) => Be(n, i)).forEach(([n, i]) => {
        e[n] = i
    })
}
const D = j("releasePageContextCommon.ts", {});

function gt(e) {
    s("exports" in e), s("exportsAll" in e), s("pageExports" in e), s(b(e.pageExports));
    const t = e.exports.Page;
    return A(e, {
        Page: t
    }), xt(e), ht(e), s([!0, !1].includes(e._comesDirectlyFromServer)), e._comesDirectlyFromServer ? vt(e) : e
}
const dt = ["then", "toJSON"],
    mt = ["_pageId"];

function vt(e) {
    return new Proxy(e, {
        get: n
    });

    function t(i) {
        return !(i in e || dt.includes(i) || typeof i == "symbol" || typeof i != "string" || i.startsWith("__v_"))
    }

    function n(i, r) {
        return D.disableAssertPassToClient !== r && Et(e._pageContextRetrievedFromServer, r, t(r)), D.disableAssertPassToClient = r, window.setTimeout(() => {
            D.disableAssertPassToClient = void 0
        }, 0), e[r]
    }
}

function Et(e, t, n) {
    if (!n || e === null) return;
    const i = Object.keys(e).filter(r => !mt.includes(r));
    g(!1, [`\`pageContext.${t}\` is not available in the browser.`, `Make sure that \`passToClient.includes('${t}')\`.`, `(Currently \`passToClient\` is \`[${i.map(r=>`'${r}'`).join(", ")}]\`.)`, "See https://vite-plugin-ssr.com/passToClient"].join(" "))
}

function xt(e) {
    Object.entries(e).forEach(([t, n]) => {
        delete e[t], e[t] = n
    })
}

function yt(e) {
    var t;
    if (p(e.exports, "render")) ge(e, "render");
    else {
        const n = e._pageFilesLoaded.filter(r => r.fileType === ".page.client");
        let i;
        n.length === 0 ? i = "No file `*.page.client.*` found for URL " + ((t = e.urlOriginal) !== null && t !== void 0 ? t : window.location.href) : i = "One of the following files should export a `render()` hook: " + n.map(r => r.filePath).join(" "), g(!1, i)
    }
}
export {
    lt as A, Ze as B, he as C, z as D, ge as E, yt as F, ut as G, rt as H, we as I, j as a, g as b, R as c, s as d, w as e, W as f, Re as g, ke as h, Q as i, p as j, U as k, O as l, ee as m, b as n, A as o, H as p, it as q, K as r, N as s, le as t, ot as u, q as v, We as w, Ae as x, gt as y, pt as z
};
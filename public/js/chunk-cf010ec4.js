const f = "modulepreload",
    h = function(o) {
        return "/" + o
    },
    a = {},
    u = function(o, s, c) {
        if (!s || s.length === 0) return o();
        const i = document.getElementsByTagName("link");
        return Promise.all(s.map(e => {
            if (e = h(e), e in a) return;
            a[e] = !0;
            const t = e.endsWith(".css"),
                d = t ? '[rel="stylesheet"]' : "";
            if (c)
                for (let n = i.length - 1; n >= 0; n--) {
                    const l = i[n];
                    if (l.href === e && (!t || l.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${e}"]${d}`)) return;
            const r = document.createElement("link");
            if (r.rel = t ? "stylesheet" : f, t || (r.as = "script", r.crossOrigin = ""), r.href = e, document.head.appendChild(r), t) return new Promise((n, l) => {
                r.addEventListener("load", n), r.addEventListener("error", () => l(new Error(`Unable to preload CSS for ${e}`)))
            })
        })).then(() => o()).catch(e => {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        })
    };
export {
    u as _
};
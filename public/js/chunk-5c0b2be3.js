var V = Object.defineProperty;
var S = Object.getOwnPropertySymbols;
var W = Object.prototype.hasOwnProperty,
    X = Object.prototype.propertyIsEnumerable;
var $ = (n, c, o) => c in n ? V(n, c, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: o
    }) : n[c] = o,
    O = (n, c) => {
        for (var o in c || (c = {})) W.call(c, o) && $(n, o, c[o]);
        if (S)
            for (var o of S(c)) X.call(c, o) && $(n, o, c[o]);
        return n
    };
import {
    al as q,
    ct as _,
    cp as F,
    j as m,
    au as i,
    cj as G,
    cH as f,
    cw as K,
    cX as T,
    __tla as Q
} from "./chunk-7513ee0e.js";
import "./chunk-61302461.js";
import {
    ds as E,
    __tla as U
} from "./chunk-dcd0ca87.js";
import "./chunk-cf010ec4.js";
let P, Y = Promise.all([(() => {
    try {
        return Q
    } catch (n) {}
})(), (() => {
    try {
        return U
    } catch (n) {}
})()]).then(async () => {
    const n = "/assets/leftspider.b78fd14c.png",
        c = "/assets/topsplit-b.35519dc4.png",
        o = "/assets/coomary.e14e3a40.png",
        I = "/assets/activity_coomary.7bfaadb5.png",
        g = {
            leftspider: n,
            topsplit_b: c,
            botcoomary: o,
            activity_coomary: I
        },
        M = "/assets/topsplit-a.2d684169.png",
        z = "/assets/waterpipe-a.78a7d987.png",
        B = "/assets/waterpipe-b.fd774635.png",
        A = "/assets/activity_bitcoin.01c415e2.png",
        D = "/assets/activity_lighting.30aa378d.png",
        H = "/assets/activity_waterpipe.521dc8c1.png",
        b = {
            img_leftspider: g.leftspider,
            img_topsplit_a: M,
            img_topsplit_b: g.topsplit_b,
            img_botcoomary: g.botcoomary,
            img_botwaterpipe_b: B,
            img_botwaterpipe_a: z,
            img_activity_bitcoin: A,
            img_activity_coomary: g.activity_coomary,
            img_activity_lighting: D,
            img_activity_waterpipe: H
        },
        h = q(async () => (await Promise.all(Object.values(b).map(e => _.loadImage(e))), b));

    function J(e) {
        let t = !1;
        return async a => {
            if (!t) {
                t = !0;
                try {
                    await e(a), t = !1
                } catch (s) {
                    throw t = !1, s
                }
            }
        }
    }
    _.isSSR || h();

    function d({
        onClose: e,
        currencyName: t,
        dataSign: a
    }, s) {
        const l = G(),
            [r, u] = i.useState(!1),
            [p] = i.useState(() => f.timeline({
                onReverseComplete: e
            }));
        i.useEffect(s, []), i.useEffect(() => {
            p.play(), setTimeout(() => {
                p.reverse()
            }, 6e4)
        }, []), i.useEffect(() => {
            r && _.delay(1300).then(() => u(!1))
        }, [r]);
        const L = J(async () => {
            if (!E.login) return l("#/login");
            try {
                const v = await K.post("/game/support/bonus/crocodile/", {
                    currencyName: t,
                    dataSign: a
                });
                p.reverse(), T(v)
            } catch (v) {
                E.login && p.reverse(), T(v)
            }
        });
        return {
            tl: p,
            active: r,
            onClick: () => {
                p.reversed() || (u(!0), _.delay(1300).then(() => L()))
            }
        }
    }
    let w, j, k, x, y, R, N, C;
    w = e => {
        const t = i.useRef(null),
            a = i.useRef(null),
            s = i.useRef(null),
            {
                tl: l,
                active: r,
                onClick: u
            } = d(e, () => (l.to(s.current, {
                duration: .5,
                height: 246
            }), l.to([t.current, a.current], {
                duration: 1.5,
                top: 0,
                ease: "Power1.easeIn"
            }), l.pause(), () => f.killTweensOf(l)));
        return m.jsxs("div", {
            ref: s,
            className: `${R} ${r?"active":""}`,
            onClick: u,
            children: [m.jsx("img", {
                className: "img_line",
                ref: t,
                src: e.imgs.img_topsplit_a
            }), m.jsx("img", {
                className: "img_coomary",
                ref: a,
                src: e.imgs.img_topsplit_b
            })]
        })
    }, j = e => {
        const t = i.useRef(null),
            a = i.useRef(null),
            s = i.useRef(null),
            l = i.useRef(null),
            {
                tl: r,
                active: u,
                onClick: p
            } = d(e, () => (r.set(t.current, {
                height: 270
            }), r.to([s.current, l.current], {
                duration: 1,
                bottom: 0
            }), r.to(a.current, {
                duration: 1,
                bottom: 178
            }), r.pause(), () => f.killTweensOf(r)));
        return m.jsxs("div", {
            ref: t,
            className: `${N} ${u?"active":""}`,
            onClick: p,
            children: [m.jsx("img", {
                className: "img_waterpipe",
                src: e.imgs.img_botwaterpipe_b,
                ref: s
            }), m.jsx("img", {
                className: "img_coomary",
                src: e.imgs.img_botcoomary,
                ref: a
            }), m.jsx("img", {
                className: "img_waterpipe",
                src: e.imgs.img_botwaterpipe_a,
                ref: l
            })]
        })
    }, k = e => {
        const t = i.useRef(null),
            a = i.useRef(null),
            {
                tl: s,
                active: l,
                onClick: r
            } = d(e, () => (s.to(t.current, {
                duration: .2,
                height: 271
            }), s.to(a.current, {
                duration: 1.5,
                bottom: 143,
                ease: "easeOutBack"
            }), s.pause(), () => f.killTweensOf(s)));
        return m.jsx("div", {
            ref: t,
            className: `${C} ${l?"active":""}`,
            onClick: r,
            children: m.jsx("img", {
                src: e.imgs.img_leftspider,
                ref: a
            })
        })
    }, x = [w, j, k], y = [0, 1, 2], P = e => {
        const {
            data: t
        } = F(h);
        if (!t) return null;
        const a = Math.floor(Math.random() * y.length),
            s = x[y[a]];
        return m.jsx(s, O({
            imgs: t
        }, e))
    }, R = "r14mz2u7", N = "l4vepo6", C = "rryit8l"
});
export {
    Y as __tla, P as
    default
};
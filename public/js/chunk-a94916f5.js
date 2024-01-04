var Z = Object.defineProperty,
    J = Object.defineProperties;
var K = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var Y = Object.prototype.hasOwnProperty,
    ee = Object.prototype.propertyIsEnumerable;
var I = (o, t, c) => t in o ? Z(o, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: c
    }) : o[t] = c,
    b = (o, t) => {
        for (var c in t || (t = {})) Y.call(t, c) && I(o, c, t[c]);
        if (k)
            for (var c of k(t)) ee.call(t, c) && I(o, c, t[c]);
        return o
    },
    p = (o, t) => J(o, K(t));
import {
    cS as f,
    au as j,
    dh as S,
    j as a,
    cv as ae,
    ct as B,
    cm as F,
    c_ as q,
    cu as C,
    cR as ne,
    dk as se,
    cy as A,
    co as D,
    cZ as N,
    ci as E,
    cU as re,
    dl as te,
    dm as ie,
    d0 as le,
    dn as ce,
    a as oe,
    dg as me,
    __tla as de
} from "./chunk-7513ee0e.js";
import {
    c as u
} from "./chunk-61302461.js";
import {
    dp as ue,
    ds as he,
    dD as xe,
    dE as je,
    e2 as ge,
    e3 as be,
    e4 as pe,
    e5 as fe,
    dV as Ne,
    __tla as ve
} from "./chunk-dcd0ca87.js";
let z, L, M, we = Promise.all([(() => {
    try {
        return de
    } catch (o) {}
})(), (() => {
    try {
        return ve
    } catch (o) {}
})()]).then(async () => {
    M = function(e, i, s, r, l) {
        const n = e.filter(m => m.isBg).find(m => m.isNl);
        return n ? t(n, s, r) : ""
    };

    function o(e, i, s, r) {
        const l = e.filter(n => !n.isBg);
        return i ? l.filter(n => n.isLv && (r ? n.mobileBannerUrl : n.bannerUrl)).map(n => p(b({}, n), {
            imgSrc: t(n, s, r)
        })) : l.filter(n => n.isNl && (r ? n.mobileBannerUrl : n.bannerUrl)).map(n => p(b({}, n), {
            imgSrc: t(n, s, r)
        }))
    }

    function t(e, i, s) {
        return i ? s ? e.mobileBannerUrl : e.bannerUrl : s ? e.whiteMobileBannerUrl : e.whiteBannerUrl
    }
    var c = (e => (e[e.mobile = 0] = "mobile", e[e.mini = 1] = "mini", e[e.small = 2] = "small", e[e.normal = 3] = "normal", e))(c || {});

    function O(e) {
        return e <= 660 ? 0 : e <= 730 ? 1 : e <= 1e3 ? 2 : 3
    }

    function P(e) {
        switch (e) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 3;
            default:
                return 3
        }
    }
    const T = /^\/|^$/;

    function G({
        list: e,
        bannerNum: i
    }) {
        return a.jsx(a.Fragment, {
            children: e.map((s, r) => {
                const l = s.linkUrl.includes("rio.bc.game") ? s.linkUrl.replace("bc.game", C.host) : s.linkUrl;
                return a.jsx(ne, {
                    href: l,
                    target: T.test(s.linkUrl) ? "_self" : "_blank",
                    className: `img-box w-${i}`,
                    children: a.jsx(se, {
                        src: s.imgSrc,
                        args: "w=450",
                        alt: ""
                    })
                }, r)
            })
        })
    }

    function R({
        size: e,
        data: i
    }) {
        const s = P(e),
            r = he.login,
            l = f(),
            n = ae(),
            m = o(i, r, n, l),
            d = B.splitFillList(m, s);
        return d.length ? a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
                className: u(v),
                children: [a.jsx(xe, {
                    autoplay: {
                        delay: 7e3,
                        disableOnInteraction: !1,
                        pauseOnMouseEnter: !0
                    },
                    loop: !0,
                    speed: 600,
                    threshold: 6,
                    spaceBetween: l ? 8 : 15,
                    slidesPerView: "auto",
                    navigation: {
                        prevEl: ".navigation-prev-home-banner",
                        nextEl: ".navigation-next-home-banner"
                    },
                    pagination: {
                        el: ".swiper-home-banner-pagination",
                        clickable: !0
                    },
                    children: d.map((x, g) => a.jsx(je, {
                        children: a.jsx(G, {
                            list: x,
                            bannerNum: s
                        })
                    }, g))
                }), a.jsx(F, {
                    className: u("navigation-prev-home-banner home-swiper-btn prev"),
                    children: a.jsx(q, {
                        name: "Arrow"
                    })
                }), a.jsx(F, {
                    className: u("navigation-next-home-banner home-swiper-btn next"),
                    children: a.jsx(q, {
                        name: "Arrow"
                    })
                })]
            }), a.jsx("div", {
                className: u(w, "swiper-home-banner-pagination")
            })]
        }) : null
    }
    let v, w;
    L = ue(function({
        data: e,
        isCasino: i,
        className: s,
        children: r
    }) {
        const l = f(),
            [n, m] = j.useState(l ? c.mobile : c.normal),
            d = S(x => {
                m(O(x.width))
            }, 500);
        return a.jsxs("div", {
            ref: d,
            className: u(s, "banner"),
            children: [a.jsx(R, {
                size: n,
                data: e
            }), r]
        })
    }), v = "s1dfjjv9", w = "p1vc93lr";
    let U = 0;
    const V = A.socket("/home"),
        $ = () => {
            const e = E(),
                i = f(),
                s = re(),
                r = te(),
                l = j.useRef([]),
                n = l.current.length,
                [m, d] = j.useState(i ? 0 : 1),
                {
                    view: x,
                    more: g
                } = be(),
                W = S(h => {
                    h.width <= C.MAX_DESIGN_WIDTH ? d(0) : h.width <= 1e3 ? d(1) : d(2)
                }, 300),
                X = j.useMemo(() => B.intervalQueue(A.decodeBind(h => {
                    s() && (l.current.unshift(Object.assign(h, {
                        key: U
                    })), n > 50 && l.current.pop(), U++, r())
                }, "json"), 600), []);
            return pe(V, "home-game-throw", X), a.jsx(ie, {
                children: a.jsx("div", {
                    className: u(Q, "last-bet-wrap"),
                    ref: W,
                    children: l.current.length === 0 ? a.jsx("div", {
                        className: "flex-center",
                        style: {
                            height: "100%"
                        },
                        children: a.jsx(le, {
                            className: "full-abs"
                        })
                    }) : a.jsxs(a.Fragment, {
                        children: [a.jsxs(ce, {
                            children: [a.jsx("thead", {
                                children: a.jsxs("tr", {
                                    children: [a.jsx("th", {
                                        children: e("common.game")
                                    }), a.jsx("th", {
                                        children: e("common.player")
                                    }), m >= 1 && a.jsx("th", {
                                        children: e("common.betamount")
                                    }), m > 1 && a.jsx("th", {
                                        children: e("common.time")
                                    }), a.jsx("th", {
                                        children: e("common.multiplier")
                                    }), a.jsx("th", {
                                        className: "m-width",
                                        children: e("common.profitamount")
                                    })]
                                })
                            }), a.jsx("tbody", {
                                children: l.current.slice(0, g ? 50 : 10).map(h => a.jsx(H, {
                                    data: h,
                                    size: m
                                }, h.key))
                            })]
                        }), n > 10 && x]
                    })
                })
            })
        },
        H = D.memo(({
            data: e,
            size: i
        }) => {
            function s() {
                oe.emit("openGameDetail", {
                    gameUnique: e.gameUnique,
                    betId: String(e.betId),
                    userName: e.userName,
                    userId: e.userId,
                    gameId: e.gameId
                })
            }
            return a.jsxs("tr", {
                onClick: s,
                children: [a.jsxs("td", {
                    className: "game-name",
                    children: [a.jsx("img", {
                        src: ge(e.gameUnique),
                        className: "game-icon",
                        alt: ""
                    }), a.jsx("div", {
                        className: "name",
                        children: e.fullName || e.gameUnique
                    })]
                }), a.jsx("td", {
                    onClick: r => {
                        r.stopPropagation()
                    },
                    children: a.jsx(N.UserInfo, {
                        userId: e.userId,
                        name: e.userName,
                        avatar: !1
                    })
                }), i >= 1 && a.jsx("td", {
                    children: a.jsx(N.CoinFormat, {
                        icon: !0,
                        name: e.currencyName,
                        amount: Number(e.throwAmount)
                    })
                }), i > 1 && a.jsx("td", {
                    children: new Date(e.createTime).toLocaleTimeString()
                }), a.jsxs("td", {
                    children: [Number(e.payout / 100).toFixed(2), "x"]
                }), a.jsx("td", {
                    className: u("profitline", Number(e.payout / 100) < 1 ? "lose" : "win"),
                    children: a.jsx(N.CoinFormat, {
                        icon: !0,
                        sign: !0,
                        name: e.currencyName,
                        amount: Number(e.profitAmount)
                    })
                })]
            }, e.key)
        }),
        Q = "s1fn9iif";
    let _, y;
    z = D.memo(() => {
        const e = E(),
            [i, s] = j.useState(0),
            r = [{
                label: e("common.last_bets"),
                value: $
            }, {
                label: e("common.highrolls"),
                value: fe
            }, {
                label: e("page.contest.title"),
                value: Ne
            }];
        return a.jsxs("div", {
            className: u(_, "labtes-bet-race"),
            children: [a.jsx("div", {
                className: "tit",
                children: e("common.latestbet")
            }), a.jsx(me, {
                className: y,
                value: i,
                tabs: r,
                onChange: s
            })]
        })
    }), _ = "ss3u7xq", y = "t1v3qn59"
});
export {
    z as L, L as S, we as __tla, M as g
};
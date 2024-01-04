var v2 = Object.defineProperty,
    f2 = Object.defineProperties;
var N2 = Object.getOwnPropertyDescriptors;
var U1 = Object.getOwnPropertySymbols;
var w2 = Object.prototype.hasOwnProperty,
    _2 = Object.prototype.propertyIsEnumerable;
var z1 = (M, P, T) => P in M ? v2(M, P, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: T
    }) : M[P] = T,
    J = (M, P) => {
        for (var T in P || (P = {})) w2.call(P, T) && z1(M, T, P[T]);
        if (U1)
            for (var T of U1(P)) _2.call(P, T) && z1(M, T, P[T]);
        return M
    },
    n1 = (M, P) => f2(M, N2(P));
import {
    ct as m1,
    cw as R,
    d6 as J1,
    cO as s1,
    cS as O,
    cv as t1,
    j as s,
    cu as c1,
    ci as u,
    cj as q,
    d7 as C1,
    cY as W,
    cm as F,
    di as k2,
    cM as y2,
    au as h,
    dh as X1,
    d3 as K1,
    cW as d1,
    c_ as V,
    cQ as I2,
    cK as L2,
    cJ as M2,
    cp as S2,
    cP as b1,
    d0 as Y,
    cR as e1,
    co as A,
    dj as Y1,
    cN as h1,
    dk as D2,
    a as l1,
    cH as $2,
    bz as H2,
    aD as F2,
    cZ as V2,
    al as Q1,
    d4 as P2,
    cT as T2,
    ak as E2,
    dg as Z2,
    __tla as B2
} from "../../chunk-7513ee0e.js";
import {
    c as f
} from "../../chunk-61302461.js";
import {
    ds as C,
    dp as Z,
    dN as G,
    dM as X,
    dr as ss,
    dD as R2,
    dE as A2,
    dR as O2,
    dK as a1,
    d$ as p1,
    e0 as i1,
    e1 as es,
    dL as v1,
    __tla as q2
} from "../../chunk-dcd0ca87.js";
import {
    g as W2,
    S as as,
    L as G2,
    __tla as U2
} from "../../chunk-a94916f5.js";
import {
    v as Q
} from "../../chunk-15d0001f.js";
import {
    b as z2,
    g as K,
    __tla as J2
} from "../../chunk-81a32830.js";
import {
    g as ns
} from "../../chunk-7459b96e.js";
import "../../chunk-cf010ec4.js";
let ts, is, X2 = Promise.all([(() => {
    try {
        return B2
    } catch (M) {}
})(), (() => {
    try {
        return q2
    } catch (M) {}
})(), (() => {
    try {
        return U2
    } catch (M) {}
})(), (() => {
    try {
        return J2
    } catch (M) {}
})()]).then(async () => {
    const M = m1.timeMemoize(async function(e) {
        const {
            areaCode: a
        } = await C.getCompatibleData();
        return R.get(`/home/main/banner/?areaCode=${a}`)
    }, {
        timeout: 3e6,
        getKey: e => e
    });

    function P() {
        return J1()
    }

    function T() {
        return J1()
    }
    const cs = W2,
        ls = "/assets/ru.15e3ba6f.png",
        os = "/assets/ru_w.a0bb73b3.png",
        rs = "/assets/ru_m.90981de0.png",
        ms = "/assets/ru_m_w.5c3454c6.png",
        ds = "/assets/chest_icon.b59293a0.png",
        hs = "/assets/check_icon_l.1c16bfa7.svg";

    function ps() {
        const e = u();
        return [{
            label: e("vip.bronze"),
            img: Q.bronze_mini,
            desc: "VIP 2-7"
        }, {
            label: e("vip.silver"),
            img: Q.silver_mini,
            desc: "VIP 8-21"
        }, {
            label: e("vip.gold"),
            img: Q.gold_mini,
            desc: "VIP 22-37"
        }, {
            label: `${e("vip.platinum")} I`,
            img: Q.platinum_mini,
            desc: "VIP 38-55"
        }, {
            label: `${e("vip.platinum")} II`,
            img: Q.platinum_mini,
            desc: "VIP 56-69"
        }, {
            label: `${e("vip.diamond")} I`,
            img: Q.diamond_mini,
            desc: "SVIP 1-15"
        }, {
            label: `${e("vip.diamond")} II`,
            img: Q.diamond_mini,
            desc: "SVIP 16-37"
        }, {
            label: `${e("vip.diamond")} III`,
            img: Q.diamond_mini,
            desc: "SVIP 38-55"
        }]
    }
    const gs = Z(function({
            props: e
        }) {
            const {
                lang: a
            } = s1(), n = C.login, t = O(), i = t1();
            G.isInited && G.rechargeValidNum < 4;
            const o = cs(e, n, i, t),
                l = us(o, i, t, a);
            return s.jsx("img", {
                className: "img-banner",
                src: l,
                alt: ""
            })
        }),
        xs = ["bcstavka.com", "bcigra.com", "bcstavka.game", "bcigra.in", "bcigra.site", "gotomoon.app"];

    function us(e, a, n, t) {
        const i = xs.find(o => c1.host.includes(o));
        return t === "ru" && i && i !== "" ? n ? a ? rs : ms : a ? ls : os : e
    }
    const f1 = 2e4,
        js = ({
            x: e,
            y: a,
            levelStatus: n
        }) => {
            const t = u(),
                i = {
                    position: "absolute",
                    left: e,
                    top: a,
                    zIndex: 10
                };
            return s.jsx("div", {
                style: i,
                children: s.jsxs("div", {
                    className: ys,
                    children: [s.jsxs("span", {
                        className: "percent",
                        children: [Math.min(Math.floor(n), 100), "%"]
                    }), s.jsx("span", {
                        children: t("common.finished")
                    })]
                })
            })
        },
        Cs = Z(function() {
            const e = u(),
                a = q(),
                n = C1(),
                t = n.enableLocaleCurrency ? X.convertCurrency(f1, "USD", n.localeCurrencyName) : f1,
                i = new W(Math.ceil(t).toPrecision(2)).toNumber();
            return s.jsx("div", {
                className: f("container", ws),
                children: s.jsxs("div", {
                    className: "cont",
                    children: [s.jsxs("div", {
                        className: "title nologin-tit",
                        children: [s.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: e("common.signup.desc1")
                            },
                            className: "title-top ttu"
                        }), s.jsxs("div", {
                            className: "title-two ttu",
                            children: [s.jsx("span", {
                                children: e("common.signup.desc1_sub")
                            }), s.jsx("b", {
                                className: "cl-primary gradient",
                                children: ` ${n.enableLocaleCurrency?X.localCurrency.cs:" $"} ${X.numberWithCommas(i)}`
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "opt-wrap",
                        children: [s.jsx(F, {
                            type: "conic2",
                            className: "btn",
                            onClick: () => a("#/login/regist"),
                            children: e("common.signup.desc3")
                        }), s.jsxs("div", {
                            className: "other-login",
                            children: [s.jsx("div", {
                                className: "txt",
                                children: "or"
                            }), s.jsx(k2.Target, {
                                id: "page-third-login-enter"
                            })]
                        })]
                    })]
                })
            })
        });

    function bs() {
        var H, U;
        const e = u();
        O();
        const a = q(),
            n = ps(),
            t = C.getLevelInfo(C.vipLevel),
            [i, o] = d1({
                labelType: t.type === 0 ? 1 : t.type
            }),
            [l, c] = h.useState([]),
            m = (H = l.map((y, z) => y.levels).flat().find(y => t.level + 1 === y.vipLevel)) == null ? void 0 : H.bonusAmount,
            d = y => L2.convertCurrency(new W(y), "BCD", M2.state.bonusCurrencyName).todp(2, W.ROUND_DOWN).toString(),
            r = C.bonusCurrencyName !== "BCD",
            g = (U = n.find((y, z) => z + 1 === i.labelType)) == null ? void 0 : U.img,
            {
                isSvip: x,
                vipType: b,
                vipLevel: I,
                vipLevelColor: E
            } = C.getUserLevelInfo(C.vipLevel);
        let v = (C.vipInfo.currXP - C.vipInfo.levelStartXP) / Math.max(C.vipInfo.levelEndXP - C.vipInfo.levelStartXP, 1) * 100;
        const N = x && I > 55 ? 100 : v < 2 ? 2 : new W(v).todp(2).toNumber();
        x && I === 55 && (v = 0), x && I > 55 && (v = 100);
        const [L, w] = h.useState(!1), [S, j] = h.useState({
            text: "",
            x: 0,
            y: 0,
            levelStatus: v
        }), _ = h.useRef(null), D = t1(), p = y => {
            w(!0), j({
                text: "",
                x: y.clientX,
                y: y.clientY,
                levelStatus: v
            })
        }, k = y => {
            var z;
            if (_.current) {
                const j1 = (z = _.current) == null ? void 0 : z.getBoundingClientRect();
                j({
                    text: "",
                    x: y.clientX - j1.left - 50,
                    y: -50,
                    levelStatus: v
                })
            }
        }, $ = () => {
            w(!1)
        };
        return h.useEffect(() => {
            R.get("/game/support/vip/rankInfo/").then(y => {
                y && c(y)
            }).catch()
        }, []), s.jsx("div", {
            className: f("container", _s),
            children: s.jsxs("div", {
                className: "cont",
                children: [s.jsxs("div", {
                    className: "sub-tit",
                    children: [s.jsxs("span", {
                        children: [" ", e("common.welcome_desc6"), ","]
                    }), s.jsx("span", {
                        className: "name",
                        children: C.name
                    })]
                }), s.jsxs("div", {
                    className: "box",
                    children: [s.jsxs("div", {
                        className: "vip-title",
                        children: [s.jsx("span", {
                            children: e("common.welcome.desc2")
                        }), s.jsx(V, {
                            onClick: () => {
                                a("#/vip")
                            },
                            name: "Direction"
                        })]
                    }), s.jsxs("div", {
                        className: "vip-line",
                        ref: _,
                        onMouseOver: p,
                        onMouseMove: k,
                        onMouseOut: $,
                        children: [s.jsx("div", {
                            className: "vip-progress",
                            style: {
                                width: N + "%"
                            }
                        }), L && s.jsx(js, J({}, S))]
                    }), s.jsxs("div", {
                        className: "vip-info",
                        children: [s.jsxs("div", {
                            className: "cur-lv ttu",
                            children: [s.jsxs("span", {
                                children: [b, " ", I]
                            }), s.jsx("img", {
                                className: "current-level-icon",
                                src: g,
                                alt: ""
                            })]
                        }), s.jsxs("div", {
                            className: "next-lv ttu",
                            children: [b, " ", I + 1]
                        })]
                    }), t.level !== 0 && !m ? "" : s.jsx("div", {
                        className: "line"
                    }), t.level !== 0 && !m ? "" : s.jsxs("div", {
                        className: "next-info",
                        children: [s.jsx("img", {
                            className: "chest-icon",
                            src: D ? ds : hs,
                            alt: ""
                        }), s.jsx("div", {
                            className: "text",
                            children: t.level === 0 ? e("vip.next.bonus.level", "2") : s.jsx(I2, {
                                k: "vip.next.bonus",
                                children: s.jsxs("span", {
                                    className: "amount",
                                    children: [d(m || 0), r ? X.getAlias(C.bonusCurrencyName) : "BCD"]
                                })
                            })
                        })]
                    })]
                })]
            })
        })
    }
    const vs = Z(function() {
            const e = u(),
                a = q(),
                n = G.useBcdLabel();
            let t = "-",
                i = [];
            if (G.bonusItems && G.bonusItems.length > 0) {
                const o = G.bonusItems[G.bonusItems.length - 1];
                o && (t = "+" + new W(o.bonusRatio).mul(100).toString() + "%", i = o.weeks ? o.weeks : [])
            }
            return s.jsx("div", {
                className: f("container dp-bonus", ks),
                children: s.jsxs("div", {
                    className: "cont",
                    children: [s.jsxs("div", {
                        className: "sub-tit",
                        children: [e("common.hi"), " ", s.jsxs("span", {
                            className: "name",
                            children: [C.name, "!"]
                        }), " ", e("common.welcome.desc1")]
                    }), s.jsxs("div", {
                        className: "title",
                        children: [s.jsx("div", {
                            className: "rewards-num ttu",
                            children: i.length > 0 ? e("common.deposit_bonus") : n
                        }), " ", s.jsxs("div", {
                            className: "cl-primary gradient",
                            children: [t, " ", s.jsx("span", {
                                className: "ttu",
                                children: e("page.casino.dialog.rewards")
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "opt-wrap btns",
                        children: [s.jsx(F, {
                            type: "conic",
                            onClick: () => a("#/deposit"),
                            children: e("page.common.deposit.play")
                        }), s.jsx(F, {
                            type: "conic3",
                            onClick: () => {
                                y2.setState({
                                    currencyName: "JB"
                                }), a("/casino")
                            },
                            children: e("common.fun_play")
                        })]
                    })]
                })
            })
        }),
        fs = Z(function({
            props: e
        }) {
            const [a, n] = h.useState(!1), t = X1(l => {
                l.width <= 1100 && l.width >= 740 ? n(!0) : n(!1)
            }, 500), i = C.login;

            function o() {
                return !C.isInited || !G.isInited ? null : i ? G.rechargeValidNum < 4 && X.totalDepositNum === 0 ? s.jsx(K1, {
                    children: s.jsx(vs, {})
                }) : s.jsx(bs, {}) : s.jsx(Cs, {})
            }
            return s.jsxs("div", {
                ref: t,
                className: f(Ns, a && "small"),
                children: [o(), s.jsx("div", {
                    className: "img-banner-wrap",
                    children: s.jsx(h.Suspense, {
                        children: s.jsx(gs, {
                            props: e
                        })
                    })
                })]
            })
        }),
        Ns = "s608ikl",
        ws = "n1ja5cp8",
        _s = "v1ljsbb0",
        ks = "r1gxbrys",
        ys = "td1kmeq",
        Is = "/assets/JP_L_Dark.a634ed3a.png",
        Ls = "/assets/JP_R_Dark.ab110f71.png";

    function g1() {
        const {
            lang: e
        } = s1(), a = e === "ja" && !ss.isBrHost && c1.host !== "55k.com", {
            data: n,
            error: t
        } = S2(() => M(e), [e]), i = O();
        return t ? s.jsx(b1, {
            children: t.message
        }) : n ? i ? s.jsx(as, {
            data: n
        }) : s.jsxs("div", {
            className: f(Ms, a && "jp-banner-wrap"),
            children: [a && s.jsxs(s.Fragment, {
                children: [s.jsx("img", {
                    src: Is,
                    className: "img-jp-left"
                }), s.jsx("img", {
                    src: Ls,
                    className: "img-jp-right"
                })]
            }), s.jsxs("div", {
                className: "page-max-width-wrap",
                children: [s.jsx(fs, {
                    props: n
                }), s.jsx(as, {
                    data: n
                })]
            })]
        }) : s.jsx("div", {
            className: Ss,
            children: s.jsx(Y, {})
        })
    }
    const Ms = "s8spky0",
        Ss = "s1luh44t",
        Ds = "/assets/casino.ebb4197f.png",
        $s = "/assets/sports.2ee3ffe3.png",
        Hs = "/assets/racing.f6d6ead7.png",
        Fs = "/assets/lottery.07712b6a.png",
        Vs = e => s.jsx("svg", n1(J({
            xmlns: "http://www.w3.org/2000/svg",
            width: "27",
            height: "26",
            viewBox: "0 0 27 26",
            fill: "none"
        }, e), {
            children: s.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.9632 0C14.5239 0 14.978 0.441131 14.978 0.986262C14.978 1.43259 14.673 1.80872 14.2553 1.93092C15.1002 3.77432 16.265 5.45218 17.7461 6.96363C17.9043 7.12506 18.0693 7.29187 18.2393 7.46377L18.2396 7.46405C20.9807 10.2353 25.0306 14.3297 22.9555 18.524C21.7093 21.0434 19.1631 21.9846 16.2208 21.0608C15.6246 20.8736 14.7986 20.377 13.7422 19.5692H12.7274C11.6709 20.3761 10.8441 20.8736 10.2479 21.0608C7.30563 21.9838 4.75942 21.0434 3.51319 18.524C1.43773 14.3282 5.4887 10.2337 8.23045 7.46254L8.23049 7.46251C8.40012 7.29105 8.56474 7.12467 8.72259 6.96363C10.2011 5.45564 11.3633 3.78125 12.21 1.94132C11.7689 1.83299 11.4447 1.44646 11.4447 0.986262C11.4447 0.441998 11.8988 0 12.4596 0C12.5523 0 12.6416 0.0121333 12.7274 0.0346665L12.7265 5.42531L12.7274 5.42444V11.5483C12.1354 11.7511 11.7117 12.2997 11.7117 12.9436C11.7117 13.7609 12.3928 14.423 13.2343 14.423C14.0759 14.423 14.7562 13.7609 14.7562 12.9436C14.7562 12.2997 14.3324 11.7511 13.7405 11.5483L13.7396 5.42444L13.7413 5.42531L13.7396 0.0242666C13.8115 0.00866663 13.8861 0 13.9623 0H13.9632ZM13.1876 26.0003H7.75115C7.63155 26.0003 7.53449 25.9032 7.53449 25.7836C7.53449 25.7143 7.56742 25.6493 7.62375 25.6086C8.467 24.9933 9.31545 24.202 10.1691 23.2357C11.216 22.0501 12.0688 20.8281 12.7274 19.5705H13.1417H13.2344H13.6487C14.3073 20.8281 15.1601 22.0501 16.207 23.2357C17.0598 24.202 17.9082 24.9933 18.7515 25.6086C18.8078 25.6493 18.8407 25.7143 18.8407 25.7836C18.8407 25.9032 18.7445 26.0003 18.6241 26.0003H13.1885L13.1881 25.9407L13.1876 26.0003Z",
                fill: "#65C316"
            })
        })),
        Ps = e => s.jsx("svg", n1(J({
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none"
        }, e), {
            children: s.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.565591 7.83195C0.565591 7.77159 1.46072 7.77159 1.46072 7.83195C1.46072 7.89231 1.33165 9.01028 3.19528 11.4839C5.05983 13.9585 6.23446 13.9827 7.59573 15.7794C8.957 17.5762 8.957 19.2847 8.94308 19.4992C8.92822 19.7118 8.3098 19.6831 7.95323 19.4992C7.59666 19.3154 6.76003 18.6124 6.04411 18.2057C4.63084 17.4025 3.11264 17.2048 1.56937 16.2261C-1.22653 14.4535 0.565591 7.89323 0.565591 7.83195ZM25.4344 7.83195C25.4344 7.89231 27.2265 14.4525 24.4306 16.2261C22.8892 17.2048 21.3701 17.4025 19.9559 18.2057C19.24 18.6134 18.4033 19.3154 18.0468 19.4992C17.6902 19.6831 17.0709 19.7118 17.0569 19.4992C17.0421 19.2847 17.0421 17.5762 18.4043 15.7794C19.7665 13.9827 20.9411 13.9585 22.8047 11.4839C24.6693 9.00935 24.5393 7.89231 24.5393 7.83195C24.5393 7.77159 25.4344 7.77159 25.4344 7.83195ZM11.9934 0.533666C11.9981 0.56338 11.9999 0.593094 11.9999 0.622807C12.0259 6.19598 12.0408 10.575 12.0436 13.7618V16.2011C12.0399 18.7955 12.0241 20.1103 11.9962 20.1456C11.9006 20.2663 10.7761 20.2208 10.6972 20.1456C10.6182 20.0704 10.3759 16.7694 8.80103 14.8575C7.22619 12.9456 2.65302 9.89162 3.24823 5.40392C3.61594 2.62755 6.15463 0.850303 10.8624 0.074033L11.284 0.00810579C11.6248 -0.0429646 11.9424 0.192888 11.9925 0.533666H11.9934ZM14.6027 0.000451828L14.715 0.0069517L15.1366 0.0728789C19.8453 0.850077 22.384 2.6264 22.7508 5.40277C23.3451 9.89046 18.7728 12.9445 17.1989 14.8564C15.6232 16.7682 15.3808 20.0693 15.3019 20.1445C15.2239 20.2197 14.0985 20.2652 14.0028 20.1445C13.975 20.1092 13.9592 18.7944 13.9555 16.2V13.7607C13.9583 10.5739 13.9731 6.1939 13.9991 0.621653C13.9991 0.59194 14.0019 0.562226 14.0056 0.532512C14.0567 0.191734 14.3733 -0.0441187 14.7141 0.0069517L14.6027 0.000451828ZM1.22387 19.4311C0.889591 18.4059 1.52473 18.3122 3.59728 19.6288C5.66983 20.9455 8.05809 20.5407 8.51494 21.0941C8.97179 21.6457 8.05809 23.3774 5.88525 23.5306C3.71242 23.6838 1.55908 20.4571 1.2248 19.432L1.22387 19.4311ZM24.776 19.4312C24.4417 20.4563 22.2875 23.6839 20.1155 23.5298C17.9436 23.3757 17.029 21.6448 17.4859 21.0933C17.9427 20.5408 20.331 20.9456 22.4035 19.628C24.4761 18.3104 25.1112 18.4051 24.7769 19.4302L24.776 19.4312ZM11.6851 21.6404C11.8578 21.6404 11.9971 21.7797 11.9971 21.9524V25.688C11.9971 25.8607 11.8578 26 11.6851 26H11.6805C9.34144 25.9647 8.17238 25.5998 8.17238 24.9034C8.17238 24.7325 8.38966 24.5208 8.72859 24.1865L8.97094 23.9451C9.14273 23.7705 9.33494 23.569 9.53829 23.3332C9.74165 23.0973 10.0369 22.6767 10.426 22.0694C10.5978 21.8011 10.8949 21.6404 11.2134 21.6404H11.6851ZM14.7865 21.6404C15.105 21.6404 15.4021 21.8029 15.5748 22.0694C15.9639 22.6767 16.2592 23.0983 16.4616 23.3332C16.664 23.5681 16.8563 23.7705 17.029 23.9451L17.2713 24.1865C17.6093 24.5199 17.8275 24.7325 17.8275 24.9034C17.8275 25.5989 16.6594 25.9647 14.3194 26C14.143 26 14.0028 25.8607 14.0028 25.688V21.9524C14.0028 21.7797 14.143 21.6404 14.3148 21.6404H14.7865Z",
                fill: "#EA6518"
            })
        })),
        Ts = e => s.jsxs("svg", n1(J({
            xmlns: "http://www.w3.org/2000/svg",
            width: "26",
            height: "26",
            viewBox: "0 0 26 26",
            fill: "none"
        }, e), {
            children: [s.jsx("g", {
                clipPath: "url(#clip0_1630_193)",
                children: s.jsx("path", {
                    d: "M20.1462 0C20.1072 0 20.0552 0 20.0162 0.013C19.9512 0.026 18.7292 0.351 18.0662 1.001C17.4032 1.651 17.0522 2.509 16.9222 3.159C10.5392 3.38 4.39018 6.968 4.39018 14.612C4.39018 16.588 4.97518 19.76 5.85918 21.06C5.85918 21.06 6.69118 22.75 10.7212 25.012C13.4642 25.922 16.2202 26 17.1302 26C17.2862 26 17.3902 26 17.4162 26C17.6372 26 17.8192 25.844 17.8842 25.636C17.9102 25.571 18.3912 24.076 18.3912 22.451C18.3912 20.761 17.7152 19.682 17.0652 18.629C16.3632 17.511 15.6352 16.341 15.6352 14.287C15.6352 13.234 16.0122 12.454 16.7532 11.947C17.8322 13.962 19.8602 14.443 20.7052 14.56C20.8742 15.067 21.2642 15.925 21.9662 16.198C22.2782 16.328 22.6292 16.328 22.9412 16.198C23.0972 16.289 23.2922 16.354 23.4742 16.328C24.0202 16.315 24.5792 15.938 24.9692 15.275C25.0082 15.21 25.0472 15.145 25.0992 15.08C25.5282 14.443 26.3992 13.117 24.4622 11.258C23.5392 7.293 21.8882 5.343 21.2642 4.589L21.1862 4.472C20.8872 4.121 20.5752 3.77 20.2502 3.432L20.6662 0.572C20.6922 0.403 20.6272 0.234 20.5102 0.117C20.4062 0.052 20.2762 0 20.1462 0ZM16.5582 0.104C16.5322 0.104 16.5192 0.117 16.4932 0.117C16.0902 0.169 15.8172 0.494 15.5312 0.819C15.4142 0.949 15.1932 1.196 15.0762 1.261C14.9722 1.235 14.7512 1.066 14.6082 0.975C14.2052 0.702 13.6982 0.351 13.1262 0.481C12.6452 0.572 12.3592 1.04 12.0862 1.469C11.9822 1.638 11.7742 1.95 11.6572 2.041C11.5402 2.002 11.3062 1.859 11.1502 1.768C10.7082 1.508 10.2402 1.235 9.77219 1.391C9.27819 1.56 8.91418 2.223 8.77118 2.704C8.71918 2.86 8.64118 3.133 8.57618 3.237C8.44618 3.224 8.09518 3.12 7.93918 3.055C7.47118 2.847 6.82118 2.795 6.34018 3.029C5.83318 3.289 5.71618 4.121 5.72918 4.615C5.72918 4.758 5.72918 4.992 5.71618 5.109C5.70318 5.226 5.66418 5.252 5.62518 5.278C5.56018 5.33 5.35218 5.33 5.18318 5.356C4.74118 5.408 4.14318 5.317 3.83118 5.707C3.50617 6.149 3.54517 6.669 3.66217 7.163C3.72717 7.332 3.81818 7.683 3.80518 7.748C3.74018 7.826 3.66217 7.878 3.46717 7.956C2.97317 8.125 2.37517 8.333 2.18017 8.931C2.06317 9.334 2.12817 9.581 2.37517 9.971C2.44017 10.075 2.55717 10.27 2.60917 10.374C2.53117 10.439 2.36217 10.543 2.25817 10.595C1.90717 10.79 1.43917 11.063 1.33517 11.622C1.28317 12.025 1.62117 12.454 1.85517 12.792C1.98517 12.961 2.08917 13.208 2.15417 13.312C2.08917 13.377 1.71217 13.741 1.63417 13.793C1.32217 14.027 0.893169 14.352 0.893169 14.885C0.893169 15.249 1.28317 16.146 1.55617 16.484C1.66017 16.614 1.51717 16.835 1.42617 16.965C1.38717 17.069 1.08817 17.394 0.919169 17.576C0.711169 17.823 0.282168 18.421 0.334168 18.928C0.399168 19.448 0.893169 20.007 1.28317 20.319C1.54317 20.514 1.54317 20.644 1.62117 20.709C1.64717 20.787 1.71217 20.852 1.76417 20.904C1.81617 20.943 2.51817 21.619 4.97518 21.606C3.87018 19.981 3.35017 16.471 3.35017 14.612C3.35017 6.578 9.60319 2.613 16.2332 2.171C16.4022 1.742 16.6882 1.079 17.2732 0.403C16.8442 0.117 16.6492 0.091 16.5582 0.104ZM21.6412 0.988L21.3422 3.12C21.4332 3.211 21.5242 3.328 21.6152 3.432C21.7842 2.925 22.0312 2.379 22.4472 1.924C22.5772 1.794 22.6292 1.599 22.5772 1.417C22.5252 1.235 22.3692 1.105 22.1872 1.053C22.0182 1.014 21.8492 0.988 21.6802 0.988H21.6412ZM20.2502 7.8C20.6792 7.8 21.0302 8.151 21.0302 8.58C21.0302 9.009 20.6792 9.36 20.2502 9.36C19.8212 9.36 19.4702 9.009 19.4702 8.58C19.4702 8.151 19.8212 7.8 20.2502 7.8Z",
                    fill: "#FFBF39"
                })
            }), s.jsx("defs", {
                children: s.jsx("clipPath", {
                    id: "clip0_1630_193",
                    children: s.jsx("rect", {
                        width: "26",
                        height: "26",
                        fill: "white"
                    })
                })
            })]
        })),
        Es = e => s.jsxs("svg", n1(J({
            width: "21",
            height: "24",
            viewBox: "0 0 21 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, e), {
            children: [s.jsx("path", {
                d: "M3.95401 5.57073C3.95401 5.38296 3.80179 5.23073 3.61401 5.23073H3.18426C2.99649 5.23073 2.84426 5.38296 2.84426 5.57073V8.00255C2.84426 8.19032 2.69204 8.34255 2.50427 8.34255H0.711826C0.52405 8.34255 0.371826 8.49477 0.371826 8.68255V20.0232C0.371826 20.211 0.524049 20.3632 0.711826 20.3632H2.50426C2.69204 20.3632 2.84426 20.5154 2.84426 20.7032V23.135C2.84426 23.3228 2.99649 23.475 3.18426 23.475H3.61401C3.80179 23.475 3.95401 23.3228 3.95401 23.135V20.7032C3.95401 20.5154 4.10623 20.3632 4.29401 20.3632H6.08645C6.27423 20.3632 6.42645 20.211 6.42645 20.0232V8.68254C6.42645 8.49477 6.27423 8.34255 6.08645 8.34255H4.29401C4.10623 8.34255 3.95401 8.19032 3.95401 8.00255V5.57073Z",
                fill: "#4CCD1F"
            }), s.jsx("path", {
                d: "M11.1267 3.41502C11.1267 3.22725 10.9745 3.07502 10.7867 3.07502H10.357C10.1692 3.07502 10.017 3.22725 10.017 3.41502V5.84684C10.017 6.03461 9.86473 6.18683 9.67695 6.18683H7.88451C7.69674 6.18683 7.54451 6.33906 7.54451 6.52683V17.8679C7.54451 18.0557 7.69674 18.2079 7.88451 18.2079H9.67695C9.86473 18.2079 10.017 18.3601 10.017 18.5479V20.9797C10.017 21.1675 10.1692 21.3197 10.357 21.3197H10.7867C10.9745 21.3197 11.1267 21.1675 11.1267 20.9797V18.5479C11.1267 18.3601 11.2789 18.2079 11.4667 18.2079H13.2591C13.4469 18.2079 13.5991 18.0557 13.5991 17.8679V6.52683C13.5991 6.33906 13.4469 6.18683 13.2591 6.18683H11.4667C11.2789 6.18683 11.1267 6.03461 11.1267 5.84684V3.41502Z",
                fill: "#4CCD1F"
            }), s.jsx("path", {
                d: "M18.2994 0.865024C18.2994 0.677248 18.1472 0.525024 17.9594 0.525024H17.5296C17.3419 0.525024 17.1896 0.677247 17.1896 0.865024V3.29684C17.1896 3.48461 17.0374 3.63684 16.8496 3.63684H15.0572C14.8694 3.63684 14.7172 3.78906 14.7172 3.97684V15.3179C14.7172 15.5057 14.8694 15.6579 15.0572 15.6579H16.8496C17.0374 15.6579 17.1896 15.8101 17.1896 15.9979V18.4297C17.1896 18.6175 17.3419 18.7697 17.5296 18.7697H17.9594C18.1472 18.7697 18.2994 18.6175 18.2994 18.4297V15.9979C18.2994 15.8101 18.4516 15.6579 18.6394 15.6579H20.4318C20.6196 15.6579 20.7718 15.5057 20.7718 15.3179V3.97684C20.7718 3.78906 20.6196 3.63684 20.4318 3.63684H18.6394C18.4516 3.63684 18.2994 3.48461 18.2994 3.29684V0.865024Z",
                fill: "#4CCD1F"
            })]
        })),
        Zs = e => s.jsxs("svg", n1(J({
            xmlns: "http://www.w3.org/2000/svg",
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none"
        }, e), {
            children: [s.jsx("path", {
                d: "M23.0105 7.44431C23.0424 7.51037 23.0773 7.59163 23.1153 7.68655L23.2383 8.01612L23.3796 8.43225C23.5648 8.97217 23.4304 9.59941 23.0758 10.1469C21.8107 12.1008 19.9745 14.3599 17.9979 16.493C15.5595 19.1235 13.1394 21.1404 10.7944 22.5247C10.0882 22.9416 9.15874 22.934 8.44645 22.5445L8.27331 22.4389L7.4585 21.877L6.78418 21.4016C6.50625 21.2042 6.43714 20.8146 6.63078 20.5306C6.8024 20.2785 7.12286 20.195 7.38712 20.318L7.4828 20.3734L8.34014 20.9764L8.9484 21.394C9.29315 21.6256 9.82471 21.6515 10.1816 21.4403C14.0066 19.182 18.3593 14.8733 22.1296 9.46424C22.1843 9.38603 22.2223 9.20378 22.2253 9.06026L22.2208 8.9623L22.198 8.86206L22.0005 8.32822C21.917 7.98194 21.9527 7.74122 22.2109 7.46785C22.5268 7.13296 22.851 7.10942 23.0113 7.44279L23.0105 7.44431ZM6.74621 16.1407L6.94972 16.2705L7.13121 16.4011C7.40307 16.6069 7.45926 16.9995 7.25727 17.2767C7.05527 17.5539 6.67179 17.6116 6.40069 17.4058C5.42186 16.6631 4.43543 16.7694 3.27359 17.7604C3.12399 17.888 2.92655 17.9336 2.73899 17.888L2.62812 17.85L2.53168 17.7946L0.968125 16.6859C0.690194 16.4885 0.621091 16.0989 0.814732 15.8149C0.96281 15.597 1.22631 15.502 1.46855 15.5658L1.57563 15.6053L1.66675 15.6585L2.82783 16.531L2.88251 16.4892C4.2023 15.5316 5.5221 15.4094 6.74621 16.1407ZM14.3088 0.557535L15.6066 1.41867C15.5512 1.48169 15.4995 1.55004 15.4517 1.62218C14.6946 2.75744 14.7766 4.28227 16.183 5.30439C17.5893 6.32651 19.3169 6.12451 20.1689 5.09328C20.2851 4.9528 20.374 4.79637 20.4377 4.62854L21.8069 5.53828C22.2162 5.81241 22.3255 6.36599 22.0507 6.7753C22.0446 6.78441 22.0377 6.79352 22.0317 6.80263C19.8454 9.79305 17.6789 12.3719 15.5307 14.5376C13.4462 16.6403 11.4285 18.2912 9.4792 19.4918C9.0828 19.7371 8.57554 19.7097 8.20725 19.4234L6.93377 18.4249C7.04388 18.3527 7.14032 18.2738 7.22006 18.1887C7.93463 17.4308 8.08271 15.7359 6.6323 14.6067C5.1819 13.4775 3.5743 13.7 2.54535 14.4495C2.42537 14.5369 2.32665 14.6394 2.24843 14.7548L0.984072 13.7653C0.693232 13.5375 0.643113 13.1168 0.871685 12.826C0.91421 12.7713 0.965847 12.7242 1.02356 12.6855C3.51962 11.0073 5.74535 9.19087 7.70074 7.23548C9.65613 5.28009 11.4498 3.13182 13.0824 0.789903C13.3596 0.391232 13.9048 0.287957 14.3088 0.557535ZM8.32571 12.6589C7.93843 12.7774 7.72428 13.2004 7.8473 13.6028C7.97032 14.0053 8.38418 14.2362 8.77222 14.1177C9.1595 13.9992 9.37365 13.5763 9.25063 13.1738C9.12761 12.7713 8.71375 12.5405 8.32571 12.6589ZM12.8615 7.49974L12.7878 7.53847L11.4194 8.47706L9.83003 7.87791C9.7503 7.84753 9.66221 7.84678 9.58171 7.87563C9.42073 7.93334 9.32581 8.09281 9.34403 8.25608L9.36301 8.33733L9.91584 9.88949L8.92106 11.1637C8.87398 11.2237 8.8474 11.2966 8.84512 11.3733C8.83905 11.5442 8.95295 11.6915 9.1109 11.7348L9.19367 11.7469L10.9228 11.8092L11.9343 13.2232C11.9798 13.2877 12.0459 13.3348 12.1211 13.3583C12.2843 13.4092 12.4567 13.3378 12.5395 13.1966L12.5729 13.1206L13.049 11.5844L14.624 11.1819C14.7052 11.1614 14.7766 11.1128 14.826 11.0453C14.927 10.9071 14.9156 10.7218 14.8085 10.5972L14.747 10.541L13.3566 9.52575L13.355 7.83842C13.355 7.76552 13.333 7.6949 13.292 7.63491C13.1956 7.49367 13.0164 7.44279 12.8637 7.50202L12.8615 7.49974ZM14.7052 6.28398C14.3179 6.40244 14.1038 6.82542 14.2268 7.22788C14.3498 7.63035 14.7637 7.8612 15.1517 7.74274C15.539 7.62428 15.7532 7.20131 15.6301 6.79884C15.5071 6.39637 15.0933 6.16552 14.7052 6.28398Z",
                fill: "url(#paint0_linear_1797_690)"
            }), s.jsx("defs", {
                children: s.jsxs("linearGradient", {
                    id: "paint0_linear_1797_690",
                    x1: "12.0838",
                    y1: "0.407471",
                    x2: "12.0838",
                    y2: "22.837",
                    gradientUnits: "userSpaceOnUse",
                    children: [s.jsx("stop", {
                        stopColor: "#81B9FF"
                    }), s.jsx("stop", {
                        offset: "1",
                        stopColor: "#3770D8"
                    })]
                })
            })]
        })),
        o1 = {
            Casino: Vs,
            Sports: Ps,
            Racing: Ts,
            Trading: Es,
            Lottery: Zs
        };

    function Bs() {
        const {
            lang: e
        } = s1(), a = e === "ja", n = u(), t = h.useMemo(() => [{
            link: "/casino",
            cover: Ds,
            icon: s.jsx(o1.Casino, {
                className: "icon"
            }),
            title: n("common.casino"),
            btnText: n("common.goto.casino"),
            desc: n("page.casino.home_desc"),
            className: "casino"
        }, {
            link: "/sports",
            cover: $s,
            icon: s.jsx(o1.Sports, {
                className: "icon"
            }),
            title: n("common.sports"),
            btnText: n("common.goto.sports"),
            desc: n("page.sports.home_desc"),
            className: "sports"
        }, {
            link: "/racing",
            cover: Hs,
            icon: s.jsx(o1.Racing, {
                className: "icon"
            }),
            title: n("page.racing"),
            btnText: n("common.goto.racing"),
            desc: n("page.racing.entry_desc"),
            className: "racing"
        }, {
            link: "/lottery",
            cover: Fs,
            icon: s.jsx(o1.Lottery, {
                className: "icon"
            }),
            title: n("common.lottery"),
            btnText: n("common.goto.lottery"),
            desc: n("page.lottery.entry_desc"),
            className: "lottery"
        }], [n, a]);
        return s.jsx("div", {
            className: Os,
            children: t.map(i => s.jsx(Rs, J({}, i), i.link))
        })
    }

    function Rs(e) {
        const a = O(),
            n = t1(),
            {
                link: t,
                cover: i,
                icon: o,
                title: l,
                desc: c,
                btnText: m,
                className: d
            } = e;
        return s.jsxs(e1, {
            href: t,
            className: f(qs, d),
            children: [n && s.jsx("div", {
                className: "blur"
            }), !a && s.jsx("div", {
                className: "mask"
            }), s.jsx("img", {
                src: i,
                className: "cover"
            }), s.jsxs("div", {
                className: "main-content",
                children: [s.jsxs("div", {
                    className: "header",
                    children: [o, s.jsx("div", {
                        className: "title",
                        children: l
                    })]
                }), !a && s.jsxs(s.Fragment, {
                    children: [s.jsx("div", {
                        className: "desc",
                        children: c
                    }), s.jsx(F, {
                        className: "go-btn",
                        children: m
                    })]
                })]
            })]
        })
    }
    const As = h.memo(Bs),
        Os = "c19palii",
        qs = "c1d4quh6",
        N1 = "/assets/1.0e9ab5f5.png",
        w1 = "/assets/1_w.5494fae6.png",
        _1 = "/assets/2.36a59f80.png",
        k1 = "/assets/2_w.fe787399.png",
        y1 = "/assets/3.8da55069.png",
        I1 = "/assets/3_w.42acc2ee.png",
        L1 = "/assets/1.95d2ce3e.png",
        M1 = "/assets/2.9ecc809a.png",
        S1 = "/assets/3.bff69b05.png",
        D1 = "/assets/1.78f54cd9.png",
        $1 = "/assets/2.cb45e76e.png",
        Ws = "/assets/3.887bf071.png",
        Gs = "/assets/3_w.a6d94ad9.png",
        H1 = "/assets/1.13dedffb.png",
        F1 = "/assets/2.8071d681.png",
        Us = "/assets/3.c0c26bc4.png",
        zs = "/assets/3_w.89ba539a.png",
        V1 = "/assets/masterpay.9a38df7b.png",
        Js = "/assets/visapay.650bbcd1.png",
        Xs = "/assets/visapay_w.f52dab94.png",
        x1 = Z(function({
            src: e,
            src_w: a
        }) {
            const n = ss.isDarken ? e : a;
            return s.jsx("img", {
                src: n,
                alt: ""
            })
        }),
        Ks = function() {
            const e = q(),
                a = u(),
                n = C1().enableLocaleCurrency,
                t = X.localCurrency,
                i = h.useMemo(() => n && t.value === "INRFIAT" ? [{
                    b: L1,
                    w: L1
                }, {
                    b: M1,
                    w: M1
                }, {
                    b: S1,
                    w: S1
                }] : n && t.value === "BRLFIAT" ? [{
                    b: H1,
                    w: H1
                }, {
                    b: F1,
                    w: F1
                }, {
                    b: Us,
                    w: zs
                }] : n && t.value === "IDRFIAT" ? [{
                    b: D1,
                    w: D1
                }, {
                    b: $1,
                    w: $1
                }, {
                    b: Ws,
                    w: Gs
                }] : n && t.value === "JPYFIAT" ? [{
                    b: N1,
                    w: w1
                }, {
                    b: _1,
                    w: k1
                }, {
                    b: y1,
                    w: I1
                }] : [{
                    b: N1,
                    w: w1
                }, {
                    b: _1,
                    w: k1
                }, {
                    b: y1,
                    w: I1
                }], [t]);
            return s.jsxs("div", {
                className: Ys,
                children: [s.jsxs("div", {
                    className: "payment-list",
                    children: [s.jsx("div", {
                        className: "top-list",
                        children: i.map((o, l) => s.jsx(x1, {
                            src: o.b,
                            src_w: o.w
                        }, l))
                    }), s.jsxs("div", {
                        className: "bot-list",
                        children: [s.jsx(x1, {
                            src: V1,
                            src_w: V1
                        }), s.jsx(x1, {
                            src: Js,
                            src_w: Xs
                        })]
                    })]
                }), s.jsx("div", {
                    className: "payment-opt",
                    children: s.jsxs("div", {
                        className: "payment-cont",
                        children: [s.jsx("div", {
                            className: "payment-title",
                            children: a("common.welcome.desc4")
                        }), s.jsx("div", {
                            className: "payment-desc",
                            dangerouslySetInnerHTML: {
                                __html: a("common.welcome.desc5")
                            }
                        }), s.jsx("div", {
                            className: "btn-wrap",
                            children: s.jsx(F, {
                                type: "conic2",
                                onClick: () => e("/wallet/buy"),
                                children: a("common.deposit")
                            })
                        })]
                    })
                })]
            })
        },
        Ys = "sd1yyof",
        P1 = "/assets/ball_1.8c16948f.png",
        T1 = "/assets/ball_1_w.a971d3f8.png",
        Qs = "/assets/ball_5.c6bfb29b.png",
        se = "/assets/ball_5_w.07c00d38.png",
        ee = "/assets/ball_4.6eff1ed4.png",
        ae = "/assets/ball_4_w.681d83a9.png",
        E1 = "/assets/bonus.73eef02f.png",
        Z1 = "/assets/rain.c10cc3c6.png",
        r1 = function({
            src: e,
            src_w: a,
            className: n
        }) {
            const t = t1() ? e : a;
            return s.jsx("img", {
                src: t,
                className: n,
                alt: "ball"
            })
        },
        ne = A.memo(function() {
            const e = u(),
                a = q(),
                n = G.bonusItems,
                t = n ? n[0] : null;
            return s.jsxs("div", {
                className: f(R1, "register-bonus"),
                children: [s.jsx(r1, {
                    className: "img-ball ball-grey",
                    src: P1,
                    src_w: T1
                }), s.jsx(r1, {
                    className: "img-ball ball-color",
                    src: Qs,
                    src_w: se
                }), s.jsxs("div", {
                    className: "bonus-img",
                    children: [s.jsx("p", {
                        className: "ratio",
                        children: `${new W((t==null?void 0:t.bonusRatio)||0).mul(100).toFixed(0)}%`
                    }), s.jsx("img", {
                        className: "img-ball",
                        onClick: () => a("#/login/regist"),
                        src: E1
                    })]
                }), s.jsx("div", {
                    className: "left",
                    children: s.jsxs("div", {
                        className: "wrap",
                        children: [s.jsx("p", {
                            className: "tit",
                            dangerouslySetInnerHTML: {
                                __html: e("common.signup.desc_new", `${new W((t==null?void 0:t.bonusRatio)||0).mul(100).toFixed(0)}%`)
                            }
                        }), s.jsx("p", {
                            className: "desc",
                            children: e("common.signup.desc10", m1.numberWithCommas(!1, (t == null ? void 0 : t.maximumBcd) || 0))
                        }), s.jsxs("div", {
                            className: "img-box",
                            children: [s.jsx("p", {
                                className: "ratio",
                                children: `${new W((t==null?void 0:t.bonusRatio)||0).mul(100).toFixed(0)}%`
                            }), s.jsx("img", {
                                alt: "bonus",
                                onClick: () => a("#/login/regist"),
                                className: "m-bonus-img",
                                src: E1
                            })]
                        }), s.jsx(F, {
                            type: "conic4",
                            onClick: () => a("#/login/regist"),
                            children: e("common.signup.desc7")
                        })]
                    })
                })]
            })
        }),
        B1 = Z(function() {
            const e = u(),
                a = q(),
                n = () => {
                    C.login ? a("#/vip") : a("#/login/regist")
                };
            return s.jsxs("div", {
                className: f(R1, "rain-coindrop"),
                children: [s.jsx(r1, {
                    className: "img-ball ball-grey",
                    src_w: T1,
                    src: P1
                }), s.jsx(r1, {
                    className: "img-ball ball-color",
                    src_w: ae,
                    src: ee
                }), s.jsx("img", {
                    alt: "bonus",
                    className: "img-ball bonus-img",
                    onClick: n,
                    src: Z1
                }), s.jsx("div", {
                    className: "left",
                    children: s.jsxs("div", {
                        className: "wrap",
                        children: [s.jsx("p", {
                            className: "tit",
                            dangerouslySetInnerHTML: {
                                __html: e("common.signup.desc5", c1.buildHost)
                            }
                        }), s.jsx("p", {
                            className: "desc",
                            children: e("common.signup.desc6")
                        }), s.jsx("img", {
                            alt: "bonus",
                            onClick: n,
                            className: "m-bonus-img",
                            src: Z1
                        }), s.jsx(F, {
                            type: "conic",
                            onClick: n,
                            children: C.login ? e("common.signup.desc8") : e("common.signup.desc7")
                        })]
                    })
                })]
            })
        }),
        te = Z(function() {
            var m;
            const e = O(),
                a = !((m = G.bonusItems) != null && m.length),
                n = C.login || a ? [B1] : [ne, B1],
                t = h.useMemo(() => ({
                    "--grid-num": e && n.length > 1 ? 1.2 : 1
                }), [n.length]),
                {
                    scrollNode: i,
                    prevEnable: o,
                    nextEnable: l,
                    slide: c
                } = Y1({
                    className: "slide-list",
                    data: n,
                    style: t,
                    renderItem(d, r) {
                        return s.jsx(d, {}, r)
                    }
                });
            return s.jsxs("div", {
                className: ie,
                children: [!e && n.length > 1 && s.jsxs(s.Fragment, {
                    children: [s.jsx("div", {
                        className: "slide-btn slide-prev",
                        children: s.jsx(F, {
                            onClick: () => c(-1),
                            disabled: !o,
                            children: s.jsx(V, {
                                name: "Arrow"
                            })
                        })
                    }), s.jsx("div", {
                        className: "slide-btn slide-next",
                        children: s.jsx(F, {
                            onClick: () => c(1),
                            disabled: !l,
                            children: s.jsx(V, {
                                name: "Arrow"
                            })
                        })
                    })]
                }), i]
            })
        }),
        ie = "f14mfal0",
        R1 = "c16jsxqw",
        ce = new h1({
            bigwins: R.get("/game/support/home/recent-big-wins/")
        }),
        le = A.memo(function() {
            const e = u();
            return s.jsxs("div", {
                className: f(me, "renent-big-win"),
                children: [s.jsxs("p", {
                    className: "bigwin-title",
                    children: [s.jsx("b", {}), e("common.title.bigwin")]
                }), s.jsx("div", {
                    className: "bigwin-list",
                    children: s.jsx(K1, {
                        children: s.jsx(h.Suspense, {
                            fallback: s.jsx(Y, {}),
                            children: s.jsx(oe, {})
                        })
                    })
                })]
            })
        }),
        oe = Z(function() {
            const e = O(),
                a = ce.suspensed.bigwins.read();
            return s.jsx("div", {
                className: "recent-bigwin-swiper-wrap",
                children: a.length <= 0 ? s.jsx(b1, {}) : s.jsx(R2, {
                    spaceBetween: e ? 10 : 14,
                    slidesPerView: "auto",
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: !1
                    },
                    loop: !0,
                    children: a.map((n, t) => s.jsx(A2, {
                        children: s.jsx(re, J({}, n))
                    }, "swpier-" + t))
                })
            })
        }),
        re = Z(function({
            gameIcon: e,
            userId: a,
            nickName: n,
            winAmount: t,
            gameUnique: i,
            gameData: o
        }) {
            const l = u(),
                c = q(),
                m = () => {
                    l1.emit("openGameDetailWithData", {
                        gameUnique: i,
                        userName: n,
                        userId: a,
                        data: o
                    })
                },
                d = C1(),
                r = d.enableLocaleCurrency;
            let g = new W(t).todp(2).toNumber();
            if (r) {
                const b = X.convertCurrency(new W(t).toNumber(), "USDT", d.localeCurrencyName);
                g = new W(b).todp(2).toNumber()
            }
            const x = n === "****";
            return s.jsxs("div", {
                className: "bigwin-swiper-item",
                children: [s.jsx("div", {
                    className: "game-icon",
                    onClick: m,
                    children: s.jsx(D2, {
                        alt: "game-icon",
                        src: e,
                        args: "w=200"
                    })
                }), s.jsx("p", {
                    className: f("nick-name", x && "hidden"),
                    onClick: () => {
                        x || c(`#/user/profile/${a}`)
                    },
                    children: x ? s.jsxs("span", {
                        className: "hidden-name",
                        children: [s.jsx(V, {
                            name: "Hidden"
                        }), l("common.hidden")]
                    }) : n
                }), s.jsx("div", {
                    className: "amount-wrap",
                    children: s.jsx("span", {
                        children: `${r?X.localCurrency.cs:"$"} ${X.numberWithCommas(g)}`
                    })
                })]
            })
        }),
        me = "r1b8faqf",
        de = Z(function() {
            const e = C.login,
                a = u(),
                n = T();
            return e ? s.jsxs("div", {
                className: he,
                children: [s.jsxs("div", {
                    className: "title",
                    children: [s.jsx(V, {
                        name: "HotGame"
                    }), a("common.pickes")]
                }), s.jsx(O2, {
                    source: n.picks_for_you,
                    className: "game-list",
                    more: !1
                }), s.jsx(e1, {
                    href: "/gamelist/picks-for-you",
                    className: "btn-view",
                    children: a("common.view_all")
                })]
            }) : null
        }),
        he = "sxfxthn";

    function A1(e, a = "") {
        return {
            sectionId: a,
            pageList: e,
            expId: "",
            logId: "",
            maxNum: 0,
            strategyId: ""
        }
    }
    const O1 = m1.timeMemoize(async function() {
            return R.post("/home/game/recent/", {
                areaCode: C.areaCode,
                pageSize: 10,
                page: 1
            })
        }, {
            timeout: 1e4
        }),
        pe = m1.timeMemoize(async function() {
            return R.post("/home/game/my-favorite/", {
                areaCode: C.areaCode,
                pageSize: 10,
                page: 1
            })
        }, {
            timeout: 1e4
        }),
        ge = A.memo(function() {
            const e = new h1({
                data: pe()
            }).suspensed.data;
            return s.jsx(h.Suspense, {
                fallback: s.jsx(Y, {}),
                children: s.jsx(a1, {
                    source: e,
                    formateData: A1,
                    line: 1,
                    icon: "Slots",
                    className: "casino-list",
                    loop: 0,
                    title: ""
                })
            })
        }),
        xe = A.memo(function() {
            const e = new h1({
                data: O1()
            }).suspensed.data;
            return s.jsx(h.Suspense, {
                fallback: s.jsx(Y, {}),
                children: s.jsx(a1, {
                    source: e,
                    formateData: A1,
                    line: 1,
                    icon: "Slots",
                    className: "casino-list",
                    loop: 0,
                    title: ""
                })
            })
        });

    function ue({
        subtab: e,
        onTab: a
    }) {
        const n = u();
        return s.jsxs(s.Fragment, {
            children: [s.jsxs("div", {
                className: "login-tabs",
                children: [s.jsxs("div", {
                    onClick: () => a(0),
                    className: f("tab", !e && "active"),
                    children: [s.jsx(V, {
                        name: "Recent"
                    }), " ", n("common.title.recent")]
                }), s.jsxs("div", {
                    onClick: () => a(1),
                    className: f("tab", e && "active"),
                    children: [s.jsx(V, {
                        name: "Favorites"
                    }), " ", n("common.favorite")]
                })]
            }), e ? s.jsx(ge, {}) : s.jsx(xe, {})]
        })
    }

    function je({
        tab: e
    }) {
        var l;
        const a = u(),
            n = T(),
            t = h.useRef(null),
            i = h.useMemo(() => [{
                label: a("common.title.bcbrand"),
                icon: "Lobby",
                tab: "",
                data: n.origin
            }, {
                label: a("common.top_picks"),
                icon: "ClassicDice",
                tab: "picks",
                data: n.top_picks
            }, {
                label: a("common.slots"),
                icon: "Slots",
                tab: "slots",
                data: n.slots
            }, {
                label: a("game.slots.hot_list"),
                icon: "HotGame",
                tab: "hot",
                data: n.hot_games
            }, {
                label: a("common.live_casino"),
                icon: "LiveCasino",
                tab: "live",
                data: n.live
            }, {
                label: a("common.table.games"),
                icon: "TableGame",
                tab: "table-game",
                data: n.table_games
            }, {
                label: a("page.common.footer.releases"),
                icon: "NewReleases",
                tab: "new",
                data: n.new_releases
            }], []),
            o = (l = i.find(c => c.tab === e)) != null ? l : i[0];
        return h.useEffect(() => {
            const c = t.current;
            if (c) {
                const m = t.current.querySelector(".active"),
                    d = m ? m.previousElementSibling : null,
                    r = d ? d.offsetLeft : 0,
                    g = {
                        x: c.scrollLeft
                    };
                $2.to(g, {
                    x: r,
                    onUpdate: () => {
                        c.scrollLeft = g.x
                    }
                })
            }
        }, [o]), s.jsxs(s.Fragment, {
            children: [s.jsx("div", {
                className: "tabs-wrap",
                ref: t,
                children: i.map((c, m) => s.jsxs(e1, {
                    href: c.tab ? `/?tab=${c.tab}` : "/",
                    className: f("nav-item", e === c.tab && "active"),
                    children: [s.jsx(V, {
                        name: c.icon
                    }), c.label]
                }, m))
            }), s.jsx(a1, {
                className: "game-list casino-list",
                line: 1,
                source: o.data,
                loop: 0,
                title: o.label
            })]
        })
    }
    const Ce = new h1({
        bigwins: R.get("/game/support/home/recent-big-wins/")
    });

    function be({
        item: e
    }) {
        const a = () => {
            l1.emit("openGameDetailWithData", {
                gameUnique: e.gameUnique,
                userName: e.nickName,
                userId: e.userId,
                data: e.gameData
            })
        };
        return s.jsxs("div", {
            className: "win-item",
            onClick: a,
            children: [s.jsx("img", {
                className: "game-icon",
                src: e.gameIcon,
                alt: ""
            }), s.jsx("div", {
                className: "user-name",
                children: e.nickName
            }), s.jsxs("div", {
                className: "play-btn ttu",
                children: [s.jsx(V2.CoinFormat, {
                    sign: !0,
                    name: "USDFIAT",
                    amount: e.winAmount,
                    icon: !0
                }), s.jsx(V, {
                    name: "Arrow"
                })]
            })]
        })
    }

    function ve() {
        const e = Ce.suspensed.bigwins.read(),
            a = u();
        return s.jsxs("div", {
            className: Ne,
            children: [s.jsxs("div", {
                className: "bigwin-title",
                children: [s.jsx("b", {}), a("common.title.bigwin")]
            }), e.length > 0 ? s.jsx(fe, {
                list: e
            }) : s.jsx(b1, {})]
        })
    }

    function fe({
        list: e
    }) {
        const [a, n] = h.useState(0), t = h.useMemo(() => e.length > 2 ? [...e, ...e] : e, [e]);
        return h.useEffect(() => {
            let i = 0;
            return a === e.length && (i = setTimeout(() => {
                n(0)
            }, 500)), () => clearTimeout(i)
        }, [a]), h.useEffect(() => {
            let i = 0;
            return t.length > 3 && (i = setInterval(() => {
                n(o => o === e.length ? 0 : o + 1)
            }, 2e3)), () => {
                clearInterval(i)
            }
        }, []), s.jsx("div", {
            className: f("win-container", `h-${e.length}`),
            children: s.jsx(H2, {
                initial: !1,
                custom: a,
                children: s.jsx(F2.div, {
                    initial: {
                        y: 0
                    },
                    animate: {
                        y: `-${100/t.length*a}%`
                    },
                    transition: {
                        type: "tween",
                        duration: a ? .5 : 0
                    },
                    className: "win-list",
                    children: t.map((i, o) => s.jsx(be, {
                        item: i
                    }, o))
                })
            })
        })
    }
    const Ne = "s1q1pgo0",
        we = () => s.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "27",
            height: "26",
            viewBox: "0 0 27 26",
            fill: "none",
            children: s.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M13.9632 0C14.5239 0 14.978 0.441131 14.978 0.986262C14.978 1.43259 14.673 1.80872 14.2553 1.93092C15.1002 3.77432 16.265 5.45218 17.7461 6.96363C17.9043 7.12506 18.0693 7.29187 18.2393 7.46377L18.2396 7.46405C20.9807 10.2353 25.0306 14.3297 22.9555 18.524C21.7093 21.0434 19.1631 21.9846 16.2208 21.0608C15.6246 20.8736 14.7986 20.377 13.7422 19.5692H12.7274C11.6709 20.3761 10.8441 20.8736 10.2479 21.0608C7.30563 21.9838 4.75942 21.0434 3.51319 18.524C1.43773 14.3282 5.4887 10.2337 8.23045 7.46254L8.23049 7.46251C8.40012 7.29105 8.56474 7.12467 8.72259 6.96363C10.2011 5.45564 11.3633 3.78125 12.21 1.94132C11.7689 1.83299 11.4447 1.44646 11.4447 0.986262C11.4447 0.441998 11.8988 0 12.4596 0C12.5523 0 12.6416 0.0121333 12.7274 0.0346665L12.7265 5.42531L12.7274 5.42444V11.5483C12.1354 11.7511 11.7117 12.2997 11.7117 12.9436C11.7117 13.7609 12.3928 14.423 13.2343 14.423C14.0759 14.423 14.7562 13.7609 14.7562 12.9436C14.7562 12.2997 14.3324 11.7511 13.7405 11.5483L13.7396 5.42444L13.7413 5.42531L13.7396 0.0242666C13.8115 0.00866663 13.8861 0 13.9623 0H13.9632ZM13.1876 26.0003H7.75115C7.63155 26.0003 7.53449 25.9032 7.53449 25.7836C7.53449 25.7143 7.56742 25.6493 7.62375 25.6086C8.467 24.9933 9.31545 24.202 10.1691 23.2357C11.216 22.0501 12.0688 20.8281 12.7274 19.5705H13.1417H13.2344H13.6487C14.3073 20.8281 15.1601 22.0501 16.207 23.2357C17.0598 24.202 17.9082 24.9933 18.7515 25.6086C18.8078 25.6493 18.8407 25.7143 18.8407 25.7836C18.8407 25.9032 18.7445 26.0003 18.6241 26.0003H13.1885L13.1881 25.9407L13.1876 26.0003Z",
                fill: "#65C316"
            })
        }),
        _e = Z(function({
            tab: e
        }) {
            const a = C.login,
                [n, t] = d1({
                    loading: !0,
                    show: !1,
                    subtab: 0
                });
            h.useEffect(() => {
                a ? O1().then(o => {
                    o && o.list.length > 0 ? t({
                        loading: !1,
                        show: !0
                    }) : t({
                        loading: !1
                    })
                }) : t({
                    loading: !1
                })
            }, [a]);
            const i = u();
            return n.loading ? s.jsx(Y, {}) : s.jsxs(s.Fragment, {
                children: [!n.show && s.jsx(ve, {}), s.jsxs("div", {
                    className: ke,
                    children: [s.jsxs("div", {
                        className: "casino-head",
                        children: [s.jsxs("div", {
                            className: "title",
                            children: [s.jsx(we, {}), i("common.casino")]
                        }), s.jsx(e1, {
                            href: n.show ? n.subtab ? "/favorite" : "/recent" : "/casino",
                            children: i("common.view_all")
                        })]
                    }), n.show ? s.jsx(ue, {
                        subtab: n.subtab,
                        onTab: o => t({
                            subtab: o
                        })
                    }) : s.jsx(je, {
                        tab: e
                    })]
                })]
            })
        }),
        ke = "s15pggu7",
        ye = ["1", "10", "11", "16", "18", "186", "187", "188", "189", "219", "223", "225", "237", "238", "251", "254", "258", "314", "327", "328", "340", "342", "361", "406", "493", "494", "694", "697"],
        u1 = (e, a, n) => {
            if (!ye.includes(String(e)) || !a[e]) return null;
            const t = [],
                i = a[e];
            let o = {},
                l = "";
            n && Object.keys(n).map((m, d) => {
                d === 0 && (o = n[m], l = m)
            });
            const c = i.variants[""];
            if (c)
                for (let m = 0; m < c.length; m++) {
                    const d = c[m].outcomes;
                    let r = [];
                    for (let g = 0; g < d.length; g++) {
                        let x = d[g].name.replace(/{\$competitor1}/g, "1").replace(/{\$competitor2}/g, "2");
                        if (i.specifiers) {
                            const b = l.split("=")[1] || "";
                            x = x.replace("{", "").replace("}", "").replace("+", "").replace("-", "").replace(i.specifiers[0], b)
                        }
                        r.push({
                            name: x,
                            value: n ? o[d[g].id].k : "-"
                        })
                    }
                    t.push(r)
                }
            return {
                marketName: i.name,
                marketList: t
            }
        },
        Ie = async (e, a) => Promise.all([R.get(`/platform-sports/v14/live10/${e}/${a}/`, {
            cache: !0
        }), R.get(`/platform-sports/v14/description/${e}/${a}/`, {
            cache: !0
        })]),
        Le = A.memo(function() {
            const e = u(),
                a = p1(),
                n = q(),
                {
                    lang: t
                } = s1(),
                [i, o] = d1({
                    banners: [],
                    img_path: "",
                    markets: {},
                    status: {}
                });
            return h.useEffect(() => {
                try {
                    Ie(a, t).then(l => {
                        l && l.length === 2 && o({
                            banners: l[0].items,
                            img_path: l[0].imgDomain,
                            markets: l[1].markets,
                            status: l[1].statuses
                        })
                    }).catch(console.log)
                } catch (l) {}
            }, [t]), s.jsxs("div", {
                className: Se,
                children: [s.jsxs("div", {
                    className: "sports-head",
                    children: [s.jsxs("div", {
                        className: "title",
                        children: [s.jsx(Me, {}), e("common.sports.live")]
                    }), s.jsx(e1, {
                        href: "/sports?bt-path=%2Flive",
                        children: e("common.view_all")
                    })]
                }), s.jsx("div", {
                    className: "banner-scroll-wrap",
                    children: s.jsx("div", {
                        className: "live-list-wrap",
                        children: i.banners && i.banners.map((l, c) => {
                            var b, I, E, v, N, L, w, S;
                            const m = (b = l.matchInfo) == null ? void 0 : b.desc.competitors[0],
                                d = (I = l.matchInfo) == null ? void 0 : I.desc.competitors[1],
                                r = (E = l.matchInfo) == null ? void 0 : E.score,
                                g = ((v = l.matchInfo) == null ? void 0 : v.state.match_status) || 0;
                            let x = null;
                            if ((N = l.matchInfo) != null && N.markets) {
                                let j = 1;
                                Object.keys((L = l.matchInfo) == null ? void 0 : L.markets).map((_, D) => {
                                    D === 0 && (j = Number(_))
                                }), x = u1(j, i.markets, (w = l.matchInfo) == null ? void 0 : w.markets[j])
                            }
                            return x ? s.jsxs("div", {
                                className: "live-banner-item",
                                onClick: () => {
                                    var j, _, D, p, k;
                                    n(`/sports?bt-path=%2F${(j=l.sportInfo)==null?void 0:j.slug}%2F${(_=l.categoryInfo)==null?void 0:_.slug}%2F${(D=l.tournamentInfo)==null?void 0:D.slug}/${(p=l.matchInfo)==null?void 0:p.desc.slug}-${(k=l.matchInfo)==null?void 0:k.id}`)
                                },
                                children: [s.jsxs("div", {
                                    className: "b-top",
                                    children: [s.jsx("p", {
                                        className: "name",
                                        children: (S = l.tournamentInfo) == null ? void 0 : S.name
                                    }), s.jsxs("div", {
                                        className: "t-right",
                                        children: [g !== 0 && s.jsx("p", {
                                            className: "status",
                                            children: i.status[g] || ""
                                        }), s.jsx("div", {
                                            className: "live ttu",
                                            children: e("page.common.footer.sports.live")
                                        })]
                                    })]
                                }), s.jsxs("div", {
                                    className: "b-match",
                                    children: [s.jsxs("div", {
                                        className: "c-left match-item",
                                        children: [s.jsx("div", {
                                            className: "c-img",
                                            children: s.jsx(i1, {
                                                id: (m == null ? void 0 : m.id) || "",
                                                img_path: i.img_path,
                                                country_code: "",
                                                sports_id: l.parent_sport_id || ""
                                            })
                                        }), s.jsx("p", {
                                            className: "c-name",
                                            children: (m == null ? void 0 : m.name) || ""
                                        })]
                                    }), s.jsx("div", {
                                        className: "c-center",
                                        children: r && s.jsx("p", {
                                            children: `${r.home_score} : ${r.away_score}`
                                        })
                                    }), s.jsxs("div", {
                                        className: "c-right match-item",
                                        children: [s.jsx("div", {
                                            className: "c-img",
                                            children: s.jsx(i1, {
                                                id: (d == null ? void 0 : d.id) || "",
                                                img_path: i.img_path,
                                                country_code: "",
                                                sports_id: l.parent_sport_id || ""
                                            })
                                        }), s.jsx("p", {
                                            className: "c-name",
                                            children: (d == null ? void 0 : d.name) || ""
                                        })]
                                    })]
                                }), x && s.jsx("div", {
                                    className: "b-markets",
                                    children: x.marketList[0].map((j, _) => s.jsxs("div", {
                                        className: "market-item",
                                        children: [s.jsx("span", {
                                            children: j.name
                                        }), s.jsx("span", {
                                            children: j.value
                                        })]
                                    }, "market-" + _))
                                })]
                            }, "banner-item-" + c) : null
                        })
                    })
                })]
            })
        }),
        Me = A.memo(function() {
            return s.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "22",
                height: "23",
                viewBox: "0 0 22 23",
                fill: "none",
                children: s.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.479555 7.05901C0.479555 7.00794 1.23698 7.00794 1.23698 7.05901C1.23698 7.11008 1.12776 8.05606 2.70468 10.1492C4.28238 12.243 5.2763 12.2635 6.42815 13.7838C7.58 15.3041 7.58 16.7498 7.56822 16.9313C7.55564 17.1112 7.03236 17.0869 6.73065 16.9313C6.42894 16.7757 5.72102 16.181 5.11523 15.8368C3.91939 15.1572 2.63475 14.9898 1.32891 14.1617C-1.03686 12.6618 0.479555 7.11087 0.479555 7.05901ZM21.5221 7.05885C21.5221 7.10992 23.0385 12.6609 20.6727 14.1616C19.3684 14.9897 18.083 15.157 16.8864 15.8367C16.2806 16.1816 15.5727 16.7756 15.271 16.9311C14.9693 17.0867 14.4452 17.1111 14.4334 16.9311C14.4208 16.7497 14.4208 15.304 15.5735 13.7836C16.7261 12.2633 17.72 12.2429 19.2969 10.149C20.8746 8.05512 20.7646 7.10992 20.7646 7.05885C20.7646 7.00778 21.5221 7.00778 21.5221 7.05885ZM10.1489 0.88339C10.1528 0.908532 10.1544 0.933675 10.1544 0.958817C10.1764 5.67458 10.189 9.37993 10.1913 12.0764V14.1405C10.1882 16.3357 10.1748 17.4483 10.1513 17.4781C10.0703 17.5803 9.11885 17.5418 9.05206 17.4781C8.98528 17.4145 8.7802 14.6213 7.44764 13.0036C6.11508 11.3858 2.24547 8.80165 2.74911 5.00438C3.06025 2.65514 5.20837 1.15131 9.19192 0.494469L9.54863 0.438685C9.83698 0.395471 10.1057 0.595039 10.1481 0.88339H10.1489ZM12.3571 0.432389L12.4522 0.437889L12.8089 0.493674C16.7932 1.1513 18.9413 2.65434 19.2517 5.00358C19.7545 8.80086 15.8857 11.385 14.5539 13.0028C13.2206 14.6205 13.0155 17.4137 12.9487 17.4773C12.8827 17.541 11.9305 17.5795 11.8495 17.4773C11.826 17.4475 11.8126 16.3349 11.8095 14.1397V12.0756C11.8118 9.37913 11.8244 5.673 11.8464 0.958021C11.8464 0.932879 11.8488 0.907736 11.8519 0.882594C11.8951 0.594243 12.163 0.394676 12.4514 0.437889L12.3571 0.432389ZM1.03663 16.8742C0.753771 16.0068 1.2912 15.9274 3.0449 17.0415C4.7986 18.1557 6.81944 17.8131 7.20601 18.2814C7.59258 18.7481 6.81944 20.2134 4.98088 20.343C3.14232 20.4727 1.32027 17.7424 1.03741 16.875L1.03663 16.8742ZM20.9655 16.8741C20.6826 17.7415 18.8598 20.4726 17.022 20.3421C15.1843 20.2117 14.4103 18.7472 14.7969 18.2805C15.1835 17.813 17.2043 18.1555 18.958 17.0406C20.7117 15.9257 21.2491 16.0059 20.9663 16.8733L20.9655 16.8741ZM9.8883 18.7436C10.0344 18.7436 10.1523 18.8615 10.1523 19.0076V22.1685C10.1523 22.3146 10.0344 22.4325 9.8883 22.4325H9.88437C7.90517 22.4026 6.91596 22.0938 6.91596 21.5046C6.91596 21.36 7.09982 21.1809 7.3866 20.898L7.59167 20.6937C7.73703 20.546 7.89967 20.3755 8.07174 20.1759C8.24381 19.9764 8.49366 19.6205 8.82288 19.1066C8.96823 18.8795 9.21966 18.7436 9.48916 18.7436H9.8883ZM12.5127 18.7436C12.7822 18.7436 13.0337 18.8811 13.1798 19.1066C13.509 19.6205 13.7589 19.9772 13.9302 20.1759C14.1014 20.3747 14.2641 20.546 14.4102 20.6937L14.6153 20.898C14.9013 21.1801 15.0859 21.36 15.0859 21.5046C15.0859 22.093 14.0975 22.4026 12.1175 22.4325C11.9683 22.4325 11.8496 22.3146 11.8496 22.1685V19.0076C11.8496 18.8615 11.9683 18.7436 12.1136 18.7436H12.5127Z",
                    fill: "#EA6518"
                })
            })
        }),
        Se = "sxxp19l";

    function De() {
        const e = u(),
            a = T(),
            {
                urlParsed: n
            } = s1(),
            t = n.search.tab || "";
        return s.jsxs("div", {
            className: f($e),
            children: [s.jsx(g1, {}), s.jsx(_e, {
                tab: t
            }), s.jsx(Le, {}), s.jsx(a1, {
                source: a.slots,
                line: 1,
                icon: "Slots",
                className: "game-list",
                loop: 0,
                title: e("common.popular.slots")
            }), s.jsx(a1, {
                source: a.hot_games,
                line: 1,
                icon: "HotGame",
                className: "game-list",
                loop: 0,
                title: e("common.popular.games")
            }), s.jsx(de, {})]
        })
    }
    const $e = "minkg0z",
        He = "/assets/right-1.4baad8b0.png",
        Fe = "/assets/right-2.5feae9e3.png",
        Ve = "/assets/bg-1.3a60f760.png",
        Pe = "/assets/bg-2.7fd6b10b.png",
        Te = "/assets/baseball-bg.aab8c78b.png",
        Ee = "/assets/basketball-bg.f40f01e1.png",
        Ze = "/assets/soccer-bg.229b56fe.png",
        Be = "/assets/tennis-bg.3027f336.png",
        Re = "/assets/others-bg.ac44af4d.png",
        Ae = "/assets/right-2-w.530a9f77.png",
        Oe = "/assets/bg-1-w.5eba4d65.png",
        qe = "/assets/bg-2-w.d60c1fe0.png",
        We = "/assets/baseball-bg-w.1f9767cb.png",
        Ge = "/assets/basketball-bg-w.7341f0a6.png",
        Ue = "/assets/soccer-bg-w.c3330e79.png",
        ze = "/assets/tennis-bg-w.b18c9030.png",
        Je = "/assets/others-bg-w.db245a80.png",
        B = {
            right_1: He,
            right_2: Fe,
            right_2_w: Ae,
            bg_1: Ve,
            bg_2: Pe,
            Baseball_bg: Te,
            Basketball_bg: Ee,
            Soccer_bg: Ze,
            Tennis_bg: Be,
            others_bg: Re,
            bg_1_w: Oe,
            bg_2_w: qe,
            Baseball_bg_w: We,
            Basketball_bg_w: Ge,
            Soccer_bg_w: Ue,
            Tennis_bg_w: ze,
            others_bg_w: Je
        };

    function q1(e) {
        return Object.keys(B).includes(e)
    }
    const Xe = A.memo(function({
            banner: e,
            img_path: a,
            api_path: n,
            markets: t,
            status: i
        }) {
            var I, E, v, N, L, w, S, j, _, D, p, k;
            const o = u();
            p1();
            const l = q(),
                c = e.matchInfo,
                m = (I = c.matchInfo) == null ? void 0 : I.desc.competitors[0],
                d = (E = c.matchInfo) == null ? void 0 : E.desc.competitors[1],
                r = (v = c.matchInfo) == null ? void 0 : v.score,
                g = ((N = c.matchInfo) == null ? void 0 : N.state.match_status) || 0,
                x = t1() ? q1(`${(L=c.sportInfo)==null?void 0:L.name}_bg`) ? B[`${(w=c.sportInfo)==null?void 0:w.name}_bg`] : B.others_bg : q1(`${(S=c.sportInfo)==null?void 0:S.name}_bg`) ? B[`${(j=c.sportInfo)==null?void 0:j.name}_bg_w`] : B.others_bg_w;
            let b = null;
            if ((_ = c.matchInfo) != null && _.markets) {
                let $ = 1;
                Object.keys((D = c.matchInfo) == null ? void 0 : D.markets).map((H, U) => {
                    U === 0 && ($ = Number(H))
                }), b = u1($, t, (p = c.matchInfo) == null ? void 0 : p.markets[$])
            }
            return b ? s.jsxs("div", {
                className: Ke,
                onClick: () => {
                    var $, H, U, y, z;
                    l(`/sports?bt-path=%2F${($=c.sportInfo)==null?void 0:$.slug}%2F${(H=c.categoryInfo)==null?void 0:H.slug}%2F${(U=c.tournamentInfo)==null?void 0:U.slug}/${(y=c.matchInfo)==null?void 0:y.desc.slug}-${(z=c.matchInfo)==null?void 0:z.id}`)
                },
                children: [s.jsx("div", {
                    className: "banner-bg",
                    children: s.jsx("img", {
                        alt: "bg",
                        src: x
                    })
                }), s.jsxs("div", {
                    className: "b-top",
                    children: [s.jsx("p", {
                        className: "name",
                        children: (k = c.tournamentInfo) == null ? void 0 : k.name
                    }), s.jsxs("div", {
                        className: "t-right",
                        children: [g !== 0 && s.jsx("p", {
                            className: "status",
                            children: i[g] || ""
                        }), s.jsx("div", {
                            className: "live ttu",
                            children: o("page.common.footer.sports.live")
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "b-match",
                    children: [s.jsxs("div", {
                        className: "c-left match-item",
                        children: [s.jsx("div", {
                            className: "c-img",
                            children: s.jsx(i1, {
                                id: (m == null ? void 0 : m.id) || "",
                                img_path: a,
                                country_code: "",
                                sports_id: c.parent_sport_id || ""
                            })
                        }), s.jsx("p", {
                            className: "c-name",
                            children: (m == null ? void 0 : m.name) || ""
                        })]
                    }), s.jsx("div", {
                        className: "c-center",
                        children: r && s.jsx("p", {
                            children: `${r.home_score} : ${r.away_score}`
                        })
                    }), s.jsxs("div", {
                        className: "c-right match-item",
                        children: [s.jsx("div", {
                            className: "c-img",
                            children: s.jsx(i1, {
                                id: (d == null ? void 0 : d.id) || "",
                                img_path: a,
                                country_code: "",
                                sports_id: c.parent_sport_id || ""
                            })
                        }), s.jsx("p", {
                            className: "c-name",
                            children: (d == null ? void 0 : d.name) || ""
                        })]
                    })]
                }), b && s.jsx("div", {
                    className: "b-markets",
                    children: b.marketList[0].map(($, H) => s.jsxs("div", {
                        className: "market-item",
                        children: [s.jsx("span", {
                            children: $.name
                        }), s.jsx("span", {
                            children: $.value
                        })]
                    }, "market-" + H))
                })]
            }) : null
        }),
        Ke = "b166ry0t",
        Ye = Q1(async (e, a) => Promise.all([R.get(`/platform-sports/v14/promo/${e}/${a}/`, {
            cache: !0
        }), R.get(`/platform-sports/v14/description/${e}/${a}/`, {
            cache: !0
        })])),
        Qe = A.memo(function() {
            const e = p1(),
                {
                    lang: a
                } = s1(),
                [n, t] = d1({
                    loading: !0,
                    banners: [],
                    img_path: "",
                    api_path: "",
                    markets: {},
                    status: {}
                });
            return h.useEffect(() => {
                Ye(e, a).then(i => {
                    i && i.length === 2 && t({
                        loading: !1,
                        banners: i[0].items,
                        img_path: i[0].imgDomain,
                        api_path: i[0].apiDomain,
                        markets: i[1].markets,
                        status: i[1].statuses
                    })
                }).catch(console.log)
            }, []), s.jsx("div", {
                className: s2,
                children: n.loading ? s.jsx(Y, {
                    className: a2
                }) : s.jsx(e2, J({}, n))
            })
        }),
        s2 = "b12u33e0";

    function e2({
        banners: e,
        img_path: a,
        api_path: n,
        markets: t,
        status: i
    }) {
        const o = Array(e.length).fill(1),
            l = O(),
            c = u(),
            m = (N, L = 336, w = 12) => l ? 1 : N === 0 ? 4 : (L = l1.relativePx(L), w = l1.relativePx(w), Math.floor((N + w) / (L + w))),
            [d, r] = h.useState(m(0)),
            g = h.useMemo(() => ({
                "--grid-num": d
            }), [d]),
            x = X1(N => r(m(N.width))),
            {
                scrollNode: b,
                prevEnable: I,
                nextEnable: E,
                slide: v
            } = Y1({
                className: "slide-list",
                data: o,
                ref: x,
                style: g,
                renderItem(N) {
                    return s.jsx(Xe, {
                        banner: e[N - 1],
                        api_path: n,
                        img_path: a,
                        markets: t,
                        status: i
                    }, N)
                }
            });
        return s.jsxs("div", {
            className: n2,
            children: [s.jsxs("section", {
                className: "top-section",
                children: [s.jsxs("div", {
                    children: [s.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "none",
                        children: [s.jsx("circle", {
                            opacity: "0.341242",
                            cx: "6",
                            cy: "6",
                            r: "6",
                            fill: "#45D91E"
                        }), s.jsx("circle", {
                            cx: "6",
                            cy: "6",
                            r: "3",
                            fill: "#45D91E"
                        })]
                    }), s.jsx("span", {
                        className: "title",
                        children: c("common.highlights")
                    })]
                }), s.jsxs("div", {
                    className: "slide-btn-bar",
                    children: [s.jsx("div", {
                        className: "btn view-all",
                        children: s.jsx(e1, {
                            className: "link",
                            href: "/sports",
                            children: c("common.view_all")
                        })
                    }), s.jsx("div", {
                        className: "btn slide-prev",
                        children: s.jsx(F, {
                            onClick: () => v(-1),
                            disabled: !I,
                            children: s.jsx(V, {
                                name: "Arrow"
                            })
                        })
                    }), s.jsx("div", {
                        className: "btn slide-next",
                        children: s.jsx(F, {
                            onClick: () => v(1),
                            disabled: !E,
                            children: s.jsx(V, {
                                name: "Arrow"
                            })
                        })
                    })]
                })]
            }), s.jsx("section", {
                className: "scroll-bar",
                children: b
            })]
        })
    }
    const a2 = "l1xpaec2",
        n2 = "s1lk0v99",
        t2 = Z(function({
            data: e,
            sportInfo: a,
            config: n,
            imgDomain: t,
            isOpen: i = !0
        }) {
            const [o, l] = h.useState(i), c = O() ? [1] : [1, 10, 225], m = q(), d = n.markets || {};
            return s.jsxs("div", {
                className: i2,
                children: [s.jsxs("div", {
                    className: "troggle bar",
                    onClick: () => l(!o),
                    children: [s.jsxs("div", {
                        className: "left-box",
                        children: [s.jsx("span", {
                            className: "first-tab",
                            children: s.jsx("span", {
                                children: e.categoryInfo.name
                            })
                        }), s.jsx("i", {
                            className: "arrow-right"
                        }), s.jsx("span", {
                            children: e.tournamentInfo.name
                        })]
                    }), s.jsxs("div", {
                        className: "right-box",
                        children: [s.jsx("span", {
                            children: e.matches.length
                        }), s.jsx(V, {
                            name: "Arrow"
                        })]
                    })]
                }), s.jsxs(P2, {
                    visible: o,
                    className: "data-table",
                    children: [s.jsxs("div", {
                        className: "bar table-row tr",
                        children: [s.jsx("div", {
                            className: "box-1 box"
                        }), c.map((r, g) => s.jsx("div", {
                            className: f("box-wrap", "box-" + (g + 2)),
                            children: s.jsx("div", {
                                className: "mk-name",
                                children: g === 0 ? s.jsxs("div", {
                                    className: "mk-sp",
                                    children: [s.jsx("div", {
                                        children: "1"
                                    }), s.jsx("div", {
                                        children: "x"
                                    }), s.jsx("div", {
                                        children: "2"
                                    })]
                                }) : d[r].name || ""
                            })
                        }, "mk-" + g)), s.jsx("div", {
                            className: "box-mobile box"
                        })]
                    }), e.matches.map((r, g) => {
                        var x, b, I, E, v, N, L, w;
                        return s.jsxs("div", {
                            className: "table-row td",
                            onClick: () => {
                                var S, j;
                                m(`/sports?bt-path=%2F${a==null?void 0:a.slug}%2F${(S=e.categoryInfo)==null?void 0:S.slug}%2F${(j=e.tournamentInfo)==null?void 0:j.slug}/${r==null?void 0:r.desc.slug}-${r==null?void 0:r.id}`)
                            },
                            children: [s.jsxs("div", {
                                className: "box-1 column box",
                                children: [s.jsxs("div", {
                                    className: "label ft12",
                                    children: [s.jsx("div", {
                                        className: "icon-wrap",
                                        children: s.jsx(c2, {})
                                    }), s.jsx("span", {
                                        children: n == null ? void 0 : n.statuses[r.state.match_status]
                                    })]
                                }), s.jsxs("div", {
                                    className: "name-bar",
                                    children: [s.jsx("div", {
                                        className: "icon-wrap",
                                        children: s.jsx(i1, {
                                            id: ((b = (x = r.desc.competitors) == null ? void 0 : x[0]) == null ? void 0 : b.id) || "",
                                            img_path: t,
                                            country_code: "",
                                            sports_id: r.desc.sport || ""
                                        })
                                    }), s.jsx("span", {
                                        className: "name",
                                        children: (E = (I = r.desc.competitors) == null ? void 0 : I[0]) == null ? void 0 : E.name
                                    }), s.jsx("div", {
                                        className: "score",
                                        children: r.score.home_score
                                    })]
                                }), s.jsxs("div", {
                                    className: "name-bar",
                                    children: [s.jsx("div", {
                                        className: "icon-wrap",
                                        children: s.jsx(i1, {
                                            id: ((N = (v = r.desc.competitors) == null ? void 0 : v[1]) == null ? void 0 : N.id) || "",
                                            img_path: t,
                                            country_code: "",
                                            sports_id: r.desc.sport || ""
                                        })
                                    }), s.jsx("span", {
                                        className: "name",
                                        children: (w = (L = r.desc.competitors) == null ? void 0 : L[1]) == null ? void 0 : w.name
                                    }), s.jsx("div", {
                                        className: "score",
                                        children: r.score.away_score
                                    })]
                                })]
                            }), c.map((S, j) => {
                                const _ = u1(S, d, r == null ? void 0 : r.markets[S]);
                                return s.jsx("div", {
                                    className: f("box-wrap", "box-" + (j + 2)),
                                    children: s.jsx("div", {
                                        className: "markets-wrap",
                                        children: _ == null ? void 0 : _.marketList[0].map((D, p) => s.jsx("div", {
                                            className: "box-item mk-item",
                                            children: D.value === "-" ? s.jsx("div", {
                                                children: "-"
                                            }) : s.jsxs(s.Fragment, {
                                                children: [s.jsx("div", {
                                                    className: "label",
                                                    children: D.name
                                                }), s.jsx("div", {
                                                    children: D.value
                                                })]
                                            })
                                        }, "mkitemg-" + p))
                                    })
                                }, "mkd-" + j)
                            }), s.jsxs("div", {
                                className: "box-mobile box",
                                children: ["+", Object.keys(r.markets).length]
                            })]
                        }, "mathc-" + g)
                    })]
                })]
            })
        }),
        i2 = "lki5t6k",
        c2 = A.memo(function() {
            return s.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                children: [s.jsxs("g", {
                    clipPath: "url(#clip0_815_2491)",
                    children: [s.jsx("path", {
                        d: "M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
                        fill: "#E90F3D"
                    }), s.jsx("path", {
                        d: "M11.3545 5C12.0932 5.82466 12.5017 6.89287 12.5017 8C12.5017 9.10713 12.0932 10.1753 11.3545 11",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), s.jsx("path", {
                        d: "M4.64572 11C3.90701 10.1753 3.49854 9.10713 3.49854 8C3.49854 6.89287 3.90701 5.82466 4.64572 5",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), s.jsx("path", {
                        d: "M13 3.10107C14.2836 4.40853 15.0028 6.16758 15.0028 7.99982C15.0028 9.83207 14.2836 11.5911 13 12.8986",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }), s.jsx("path", {
                        d: "M3.00009 12.8986C1.71647 11.5911 0.997314 9.83207 0.997314 7.99982C0.997314 6.16758 1.71647 4.40853 3.00009 3.10107",
                        stroke: "#E90F3D",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })]
                }), s.jsx("defs", {
                    children: s.jsx("clipPath", {
                        id: "clip0_815_2491",
                        children: s.jsx("rect", {
                            width: "16",
                            height: "16",
                            fill: "white"
                        })
                    })
                })]
            })
        }),
        W1 = Z(function({
            data: e,
            config: a,
            imgDomain: n,
            defaultOpen: t
        }) {
            const i = u();
            return e.tournamentItems && e.tournamentItems.length > 0 ? s.jsxs("div", {
                className: o2,
                children: [s.jsxs("div", {
                    className: "header bar",
                    children: [s.jsxs("div", {
                        className: "left-box",
                        children: [s.jsx(es, {
                            id: e.tournamentItems[0].categoryInfo.sport_id
                        }), s.jsx("span", {
                            children: e.sportInfo.name
                        })]
                    }), s.jsx(e1, {
                        className: "link",
                        href: `/sports/?bt-path=%2F${e.sportInfo.slug}`,
                        children: i("common.view_all")
                    })]
                }), e.tournamentItems.map((o, l) => s.jsx(t2, {
                    data: o,
                    imgDomain: n,
                    sportInfo: e.sportInfo,
                    config: a,
                    isOpen: t && l === 0
                }, "tab-item-" + l))]
            }) : s.jsx(Y, {
                className: l2
            })
        }),
        l2 = "l19p1gd",
        o2 = "l1xhd7hi",
        r2 = Q1(async (e, a) => Promise.all([R.get(`/platform-sports/v14/live50/${e}/${a}/`, {
            cache: !0
        }), R.get(`/platform-sports/v14/description/${e}/${a}/`, {
            cache: !0
        })])),
        m2 = A.memo(function() {
            const e = u(),
                a = O(),
                [n, t] = h.useState(0),
                i = p1(),
                {
                    lang: o
                } = s1(),
                l = T2(),
                [c, m] = h.useState(),
                [d, r] = h.useState();
            h.useEffect(() => {
                r2(i, o).then(p => {
                    p && p.length === 2 && (m(p[0]), r(p[1]))
                }).catch(console.log)
            }, []);
            const [g, x] = h.useState(!1), [b, I] = h.useState(!1), E = document.querySelector(".tabs-nav:first-child"), v = document.querySelector(".tabs-nav:last-child");
            h.useEffect(() => {
                const p = document.querySelector(".tabs-scroll"),
                    k = document.querySelector(".tabs-navs");
                if (p && k) {
                    const $ = p.clientWidth,
                        H = k.scrollWidth;
                    x(H > $)
                }
            }, [c, l]), h.useEffect(() => {
                const p = E2($ => {
                        const H = $.target,
                            U = H.scrollLeft,
                            y = H.scrollWidth,
                            z = H.clientWidth,
                            j1 = U + z >= y;
                        x(!j1), I(U > 0)
                    }, 100),
                    k = document.querySelector(".tabs-scroll");
                return k && k.addEventListener("scroll", p), () => {
                    window.removeEventListener("scroll", p)
                }
            }, [c]);
            const N = () => {
                    E && E.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "end"
                    })
                },
                L = () => {
                    v && v.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "end"
                    })
                },
                w = c != null && c.sportItems ? c.sportItems.map(p => p) : [],
                S = w.slice(0, 3),
                j = [{
                    label: s.jsx(G1, {
                        name: e("page.common.footer.sports.live")
                    }),
                    value: () => s.jsx(s.Fragment, {
                        children: S.map((p, k) => s.jsx(W1, {
                            data: p,
                            imgDomain: c == null ? void 0 : c.imgDomain,
                            config: d,
                            defaultOpen: k === 0
                        }, k))
                    })
                }],
                _ = w.map(p => {
                    var k;
                    return {
                        label: s.jsx(G1, {
                            name: p.sportInfo.name,
                            id: (k = p.tournamentItems) == null ? void 0 : k[0].categoryInfo.sport_id
                        }),
                        value: () => s.jsx(W1, {
                            data: p,
                            defaultOpen: !0,
                            config: d,
                            imgDomain: c == null ? void 0 : c.imgDomain
                        })
                    }
                }),
                D = h.useMemo(() => [...j, ..._], [c]);
            return c ? s.jsxs("div", {
                className: f(p2),
                children: [s.jsx(Z2, {
                    className: f("nav-tab", "top-nav-tab", b && "show-left", g && "show-right"),
                    type: "circle",
                    tabs: D,
                    value: n,
                    onChange: p => t(p)
                }), !a && s.jsxs(s.Fragment, {
                    children: [b && s.jsx(F, {
                        className: "left",
                        onClick: N,
                        children: s.jsx(V, {
                            name: "Arrow"
                        })
                    }), g && s.jsx(F, {
                        className: "right",
                        onClick: L,
                        children: s.jsx(V, {
                            name: "Arrow"
                        })
                    })]
                })]
            }) : s.jsx(Y, {
                className: d2
            })
        }),
        G1 = ({
            name: e,
            id: a = "live"
        }) => s.jsxs("div", {
            className: h2,
            children: [a === "live" ? s.jsx(V, {
                name: "LiveEvents"
            }) : s.jsx(es, {
                id: a
            }), s.jsx("span", {
                children: e
            })]
        }),
        d2 = "l1g6ndn7",
        h2 = "l157kphy",
        p2 = "sqtkdnf",
        g2 = A.memo(function() {
            const e = u(),
                a = q(),
                n = t1(),
                t = O();
            return s.jsxs("div", {
                className: x2,
                children: [s.jsxs("section", {
                    children: [s.jsxs("div", {
                        className: "left-box",
                        children: [s.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: e("common.sports.deposit300")
                            },
                            className: "html-title"
                        }), s.jsx(F, {
                            type: "conic",
                            onClick: () => a("#/login/regist"),
                            children: e("title.regist")
                        })]
                    }), s.jsx("img", {
                        className: "bg-img-1",
                        src: n ? B.bg_1 : B.bg_1_w
                    }), s.jsx("img", {
                        className: "right-img right-img-1",
                        src: B.right_1
                    })]
                }), s.jsxs("section", {
                    children: [s.jsxs("div", {
                        className: "left-box",
                        children: [s.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: e(t ? "common.sports.deposit_fast_mobile" : "common.sports.deposit_fast")
                            },
                            className: "html-title"
                        }), s.jsx(F, {
                            type: "conic3",
                            onClick: () => a("#/deposit"),
                            children: e("common.deposit")
                        })]
                    }), s.jsx("img", {
                        className: "bg-img-2",
                        src: n ? B.bg_2 : B.bg_2_w
                    }), s.jsx("img", {
                        className: "right-img right-img-2",
                        src: n ? B.right_2 : B.right_2_w
                    })]
                })]
            })
        }),
        x2 = "f15hw6kl",
        u2 = A.memo(function() {
            return s.jsxs("div", {
                className: "",
                children: [s.jsx(g1, {}), s.jsxs("div", {
                    className: f("home-container page-max-width-wrap"),
                    children: [s.jsx(Qe, {}), s.jsx(m2, {}), s.jsx(g2, {})]
                })]
            })
        });

    function j2() {
        const e = O();
        return c1.host === "55k.com" ? s.jsx(u2, {}) : e ? s.jsx(De, {}) : s.jsx(C2, {})
    }

    function C2() {
        const e = u(),
            a = P();
        return s.jsxs("div", {
            className: f(b2),
            children: [s.jsx(g1, {}), s.jsxs("div", {
                className: f("home-container page-max-width-wrap"),
                children: [s.jsx(As, {}), s.jsx(le, {}), s.jsx(a1, {
                    source: a.bestData,
                    line: 1,
                    showPlayBtn: 2,
                    className: "best-list",
                    loop: 0,
                    title: e("page.gamelist.betofgame")
                }), s.jsx(Ks, {}), s.jsx(G2, {}), s.jsx(te, {}), s.jsx(a1, {
                    source: a.recommendData,
                    showPlayBtn: 1,
                    line: 1,
                    className: "recommend-list",
                    loop: 0,
                    title: e("game.slots.recommend_list")
                })]
            })]
        })
    }
    const b2 = "s16lovai";
    ts = function() {
        return h.useEffect(() => {
            l1.emit("ad_track", "home_page")
        }, []), s.jsx(j2, {})
    }, is = ({
        ctx: e
    }) => {
        const a = !!e.urlParsed.search.br_s;
        if (c1.MAX_DESIGN_WIDTH >= globalThis.innerWidth) {
            const n = z2("", 1);
            return {
                bestData: K({
                    sectionId: "home_best"
                }),
                recommendData: K({
                    sectionId: "home_recommend"
                }),
                origin: K({
                    sectionId: "casino_bc",
                    page: 1
                }),
                top_picks: K({
                    sectionId: "top_picks",
                    page: 1
                }),
                slots: n.then(t => t[1]),
                live: n.then(t => t[2]),
                new_releases: K({
                    sectionId: v1.getTagNameSectionId("New Releases"),
                    tag: "New Releases",
                    page: 1
                }),
                hot_games: n.then(t => t[0]),
                table_games: K({
                    sectionId: v1.getTagNameSectionId("Table games"),
                    tag: "Table games",
                    page: 1
                }),
                picks_for_you: K({
                    sectionId: v1.sectionIdDecode("picks-for-you"),
                    pageSize: 20
                }),
                documentProps: a ? Promise.resolve({
                    title: "BCGAME Apostas Online | BCGAME Jogo | Crash & Double",
                    description: "O site de apostas online BCGAME oferece o melhor que h\xE1 no mundo dos jogos de cassino online. Visite o nosso site e desfrute dos jogos da crash, double, slots, e muitos outros cl\xE1ssicos jogos de cassino agora."
                }) : ns(e.lang, "home")
            }
        } else return {
            bestData: K({
                sectionId: "home_best"
            }),
            recommendData: K({
                sectionId: "home_recommend"
            }),
            documentProps: a ? Promise.resolve({
                title: "BCGAME Apostas Online | BCGAME Jogo | Crash & Double",
                description: "O site de apostas online BCGAME oferece o melhor que h\xE1 no mundo dos jogos de cassino online. Visite o nosso site e desfrute dos jogos da crash, double, slots, e muitos outros cl\xE1ssicos jogos de cassino agora."
            }) : ns(e.lang, "home")
        }
    }
});
export {
    ts as Page, X2 as __tla, is as onPageData
};
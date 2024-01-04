import {
    ci as v,
    cW as P,
    au as h,
    j as s,
    cz as j,
    c_ as U,
    ct as F,
    cX as u,
    cj as os,
    em as ls,
    cU as G,
    d0 as N,
    d1 as V,
    cY as b,
    cw as f,
    bz as ds,
    aD as ms,
    cp as ps,
    cv as us,
    cV as xs,
    c$ as w,
    cP as hs,
    dk as js,
    dz as vs,
    cm as fs,
    df as gs,
    __tla as Ns
} from "./chunk-7513ee0e.js";
import {
    C as o,
    m,
    o as k,
    A as _s,
    E as ys,
    __tla as bs
} from "./chunk-ea42f1f1.js";
import {
    B as ws,
    I as ks,
    H as Cs,
    p as Ds,
    S as Rs,
    D as Ss,
    N as Bs,
    G as As,
    F as Is,
    R as Es,
    z as Os,
    q as Ts,
    w as Ls,
    y as Ps,
    t as Us,
    T as Fs,
    V as Gs,
    x as Vs,
    __tla as zs
} from "./chunk-ea42f1f1.js";
import "./chunk-61302461.js";
import {
    dr as Ms,
    ds as qs,
    eg as C,
    dM as z,
    ez as $s,
    dO as Ws,
    dN as Xs,
    __tla as Ys
} from "./chunk-dcd0ca87.js";
import {
    N as Hs,
    __tla as Ks
} from "./chunk-94387f67.js";
import {
    i as Js
} from "./chunk-15d0001f.js";
import "./chunk-cf010ec4.js";
import "./chunk-c23b3c52.js";
import {
    __tla as Qs
} from "./chunk-abcf23a1.js";
import "./chunk-d1eabc3b.js";
import {
    __tla as Zs
} from "./chunk-8285f8a4.js";
import {
    __tla as se
} from "./chunk-654ef298.js";
import {
    __tla as ee
} from "./chunk-7cfcd448.js";
import {
    __tla as ae
} from "./chunk-cf3dc2ca.js";
import "./chunk-bff9c602.js";
import "./chunk-f0854543.js";
import {
    __tla as te
} from "./pages/help/index.page.039b87d6.js";
import "./chunk-7459b96e.js";
import {
    __tla as ce
} from "./chunk-81a32830.js";
import {
    __tla as re
} from "./chunk-8ac0d124.js";
let M, q, ie = Promise.all([(() => {
    try {
        return Ns
    } catch (n) {}
})(), (() => {
    try {
        return bs
    } catch (n) {}
})(), (() => {
    try {
        return zs
    } catch (n) {}
})(), (() => {
    try {
        return Ys
    } catch (n) {}
})(), (() => {
    try {
        return Ks
    } catch (n) {}
})(), (() => {
    try {
        return Qs
    } catch (n) {}
})(), (() => {
    try {
        return Zs
    } catch (n) {}
})(), (() => {
    try {
        return se
    } catch (n) {}
})(), (() => {
    try {
        return ee
    } catch (n) {}
})(), (() => {
    try {
        return ae
    } catch (n) {}
})(), (() => {
    try {
        return te
    } catch (n) {}
})(), (() => {
    try {
        return ce
    } catch (n) {}
})(), (() => {
    try {
        return re
    } catch (n) {}
})()]).then(async () => {
    const n = function() {
            const a = v(),
                [t, r] = P({
                    url: "",
                    dataURL: "",
                    blobURL: "",
                    link: ""
                }),
                c = "invite.png",
                i = o.shareBg,
                p = () => {
                    try {
                        F.copyToClipboard(t.link), u(a("common.messages.copy_success"))
                    } catch (e) {
                        u(e)
                    }
                },
                l = async () => {
                    try {
                        const e = await qs.getInviteUrl();
                        r({
                            link: e.invitationUrl
                        })
                    } catch (e) {
                        u(e)
                    }
                };
            return h.useEffect(() => {
                l()
            }, []), s.jsx("div", {
                className: $,
                children: s.jsxs("div", {
                    className: "coin-invite-img",
                    children: [s.jsx("img", {
                        alt: "",
                        src: i
                    }), s.jsx("div", {
                        className: "coindrop-close",
                        onClick: () => j.close(),
                        children: s.jsx(U, {
                            name: "Close"
                        })
                    }), s.jsxs("div", {
                        className: "btn-wrap",
                        onClick: () => j.close(),
                        children: [s.jsx("button", {
                            onClick: p,
                            children: a("page.user.copy_invite")
                        }), Ms.isIOS ? s.jsx("button", {
                            onClick: () => window.open(i),
                            children: a("page.user.down_invite")
                        }) : s.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: i,
                            download: c,
                            children: s.jsx("button", {
                                children: a("page.user.down_invite")
                            })
                        })]
                    })]
                })
            })
        },
        $ = "cqo77bx";

    function W(a) {
        return f.post("/game/support/red-packet/get-log/", {
            page: 1,
            pageSize: 100,
            id: a
        }).then(t => t.list.map(r => (r.amount = Number(r.amount), r)))
    }
    let D, R, S, B;
    D = function({
        info: a,
        total: t,
        totalamount: r
    }) {
        const c = v(),
            [i, p] = h.useState(null),
            l = G();
        return h.useEffect(() => {
            W(a.id).then(e => {
                l() && p(e)
            }).catch(u)
        }, []), i ? s.jsxs("div", {
            id: "receive-wrap",
            children: [s.jsx("div", {
                className: "invite-btn",
                children: s.jsx("button", {
                    onClick: () => j.push(s.jsx(n, {})),
                    children: c("page.coindrop.inviteFriends")
                })
            }), s.jsxs("div", {
                className: "receive-desc",
                children: ["Opend ", i.length, "/", t]
            }), s.jsx(V, {
                className: "receive-list",
                children: i.map((e, x) => s.jsxs("div", {
                    className: "receive-item",
                    children: [s.jsxs("div", {
                        className: "user-info",
                        children: [s.jsx(C, {
                            userId: e.userId,
                            name: e.userName
                        }), s.jsxs("div", {
                            className: "name-time",
                            children: [s.jsx("div", {
                                className: "user-name",
                                children: e.userName
                            }), s.jsx("div", {
                                className: "user-time",
                                children: new Date(e.createTime).toLocaleString()
                            })]
                        })]
                    }), s.jsxs("div", {
                        className: "rec-amount",
                        children: [s.jsx("div", {
                            className: "user-amount",
                            children: new b(e.amount).toFixed(8)
                        }), s.jsx("div", {
                            className: "user-currency",
                            children: z.getAlias(e.currencyName)
                        })]
                    })]
                }, x))
            })]
        }) : s.jsx(N, {})
    }, R = a => a.toFixed(8), S = ({
        state: a
    }) => {
        const t = v(),
            r = os(),
            c = a.info;
        return c ? s.jsxs("div", {
            className: B,
            children: [s.jsxs("div", {
                className: "banner",
                children: [s.jsxs("div", {
                    className: "user-head",
                    children: [s.jsx(C, {
                        userId: a.userId,
                        name: a.username
                    }), s.jsxs("div", {
                        className: "user-dcont",
                        children: [s.jsx("p", {
                            children: t("page.coindrop.coinDropsFrom")
                        }), s.jsx("p", {
                            className: "name",
                            children: a.username
                        })]
                    })]
                }), s.jsxs("div", {
                    className: "user-cont",
                    children: [s.jsx("img", {
                        className: "star",
                        alt: "star",
                        src: o.star
                    }), s.jsx("span", {
                        children: c.content
                    }), s.jsx("img", {
                        className: "star",
                        alt: "star",
                        src: o.star
                    })]
                }), c.receiverAmount > 0 && s.jsxs("div", {
                    className: "mid-area receive-amount",
                    children: [s.jsxs("div", {
                        className: "amount-wrap",
                        children: [s.jsx(ls, {
                            className: "amount-num",
                            format: R,
                            children: c.receiverAmount
                        }), s.jsx("span", {
                            className: "amount-currency",
                            children: z.getAlias(c.currencyName)
                        })]
                    }), s.jsxs("div", {
                        className: "go-wallet",
                        onClick: () => {
                            j.close(), r(`/wallet/transaction?type=bill&assets=${c.currencyName}`)
                        },
                        children: [t("page.coindrop.coinDropsToWallet"), " >>"]
                    })]
                }), a.status === m.COMPLETED && s.jsxs("div", {
                    className: "mid-area empty-amount",
                    children: [s.jsx("img", {
                        alt: "empty_img",
                        src: o.parachuteFall
                    }), s.jsxs("p", {
                        children: [t("page.coindrop.completeCoinDrop"), "."]
                    })]
                }), (a.status === m.EXPIRED || a.status === m.ISSUS) && s.jsxs("div", {
                    className: "mid-area empty-amount",
                    children: [s.jsx("img", {
                        alt: "empty_img",
                        src: o.parachuteFall
                    }), s.jsxs("p", {
                        children: [t("page.coindrop.expiredCoinDrop"), "."]
                    })]
                })]
            }), s.jsx(D, {
                info: c,
                total: c.number,
                totalamount: c.amount
            })]
        }) : null
    }, B = "l70uyld", M = function({
        info: a,
        packageKey: t,
        username: r,
        status: c,
        onReceive: i,
        userId: p,
        level: l
    }) {
        var O;
        const [e, x] = P(() => ({
            userId: p,
            username: r,
            status: c,
            level: l,
            loading: !1,
            showList: !1,
            opened: !1,
            info: void 0
        })), g = G();
        h.useEffect(() => {
            f.post("/game/support/red-packet/get-info/", {
                info: a,
                key: t
            }).then(d => {
                g() && (d.amount = Number(d.amount), d.receiverAmount = Number(d.receiverAmount), x({
                    info: d,
                    status: d.receiverStatus == 1 ? m.GRABBED : d.status
                }))
            })
        }, []);
        const I = async (d, ts) => {
                const T = new Date().getTime();
                try {
                    const _ = Math.round(Math.random() * 1e4),
                        cs = await Ws("login");
                    let rs = X(d + "_" + ts, t),
                        y = await f.post("/game/support/red-packet/get-base/", {
                            info: a,
                            key: t,
                            token: cs,
                            cid: _
                        }, {
                            headers: {
                                "Content-Origin": rs
                            }
                        });
                    const is = Object.assign(e.info, {
                            receiverAmount: Number(y.receiverAmount)
                        }),
                        L = new Date().getTime(),
                        ns = L - T > 1e3 ? 0 : 1e3 - L + T;
                    await F.delay(ns), g() && (x({
                        loading: !1,
                        showList: !0,
                        info: is,
                        status: y.receiverStatus == 1 ? m.GRABBED : y.status
                    }), i())
                } catch (_) {
                    j.close(), u(_)
                }
            },
            as = d => e.info ? s.jsxs("div", {
                className: "coindrop-main",
                children: [s.jsxs("div", {
                    className: "coindrop-bg",
                    children: [s.jsx("div", {
                        className: "down"
                    }), s.jsx("div", {
                        className: "up"
                    })]
                }), s.jsx(H, {
                    toggle: d,
                    coindropInfo: s.jsx(S, {
                        state: e
                    }),
                    listInfo: s.jsx(Y, {
                        state: e,
                        onClick: I,
                        onDetail: () => x({
                            showList: !0
                        })
                    })
                })]
            }) : s.jsx(N, {}),
            E = e.showList || e.status !== m.UNGRABB && ((O = e.info) == null ? void 0 : O.receiverAmount) !== 0;
        return s.jsxs("div", {
            className: `${K} ${E?"list-coindrop":"open-coindrop"}`,
            children: [e.info ? s.jsxs(s.Fragment, {
                children: [as(E), s.jsx("img", {
                    className: "parachute-top",
                    alt: "parachute",
                    src: o.parachute
                }), s.jsx("img", {
                    className: "btc-center",
                    alt: "btc",
                    src: o.fallBtc
                }), s.jsx("img", {
                    className: "cloud left",
                    alt: "cloud",
                    src: o.cloudLeft
                }), s.jsx("img", {
                    className: "cloud right",
                    alt: "cloud",
                    src: o.cloudRight
                })]
            }) : s.jsx(N, {}), s.jsx("div", {
                className: "coindrop-close",
                onClick: () => j.close(),
                children: s.jsx(U, {
                    name: "Close"
                })
            })]
        })
    };

    function X(a, t) {
        const r = k.enc.Utf8.parse(t);
        let c = k.enc.Utf8.parse(a);
        var i = _s.encrypt(c, r, {
            mode: ys,
            padding: k.pad.Pkcs7
        });
        return i.toString()
    }
    const Y = ({
            onClick: a,
            state: t,
            onDetail: r
        }) => {
            var l;
            const c = v(),
                [i, p] = h.useState(!1);
            return s.jsx("div", {
                className: J,
                children: s.jsxs("div", {
                    className: "main-info",
                    children: [s.jsxs("div", {
                        className: "user-head",
                        children: [s.jsx("div", {
                            className: "avatar-wrap",
                            children: s.jsx(C, {
                                userId: t.userId,
                                name: t.username
                            })
                        }), s.jsx($s, {
                            level: t.level
                        }), s.jsx("div", {
                            className: "user-name",
                            children: t.username
                        }), s.jsxs("div", {
                            className: "desc",
                            children: [s.jsx("img", {
                                className: "star",
                                alt: "star",
                                src: o.star
                            }), t.status === m.UNGRABB ? c("page.coindrop.sendCoinDrop") : t.status === m.COMPLETED ? c("page.coindrop.completeCoinDrop") : c("page.coindrop.expiredCoinDrop"), s.jsx("img", {
                                className: "star",
                                alt: "star",
                                src: o.star
                            })]
                        })]
                    }), s.jsx("img", {
                        alt: "btc",
                        className: "btc-coin " + (i ? "loading" : ""),
                        src: o.bcgame
                    }), s.jsx("div", {
                        className: "content",
                        children: (l = t.info) == null ? void 0 : l.content
                    }), s.jsx("button", {
                        className: "open-view",
                        disabled: i,
                        onClick: e => {
                            p(!0), t.status === m.UNGRABB ? a(e.clientX, e.clientY) : r()
                        },
                        children: t.status === m.UNGRABB ? c("page.coindrop.openTap") : c("page.coindrop.viewHistory")
                    })]
                })
            })
        },
        H = ({
            toggle: a,
            coindropInfo: t,
            listInfo: r
        }) => s.jsx(ds, {
            children: s.jsx(ms.div, {
                className: "animated-div",
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0
                },
                children: a ? t : r
            }, String(a))
        }),
        K = "r1g645ww",
        J = "o1ehu3zr",
        Q = "/assets/offer.f1f2f35b.png",
        Z = "/assets/offer_w.6c3a367a.png",
        A = "/assets/offer_tit.a6ff1835.png";

    function ss() {
        return f.get("/activity/deposit/special/query/protocol/")
    }
    q = function() {
        const {
            data: a,
            error: t
        } = ps(ss), r = gs(), c = us(), [i, p] = h.useState(!1), l = xs(!0), e = v(), x = h.useCallback(function() {
            const g = e("page.vip.offer.txt5");
            f.post("/activity/deposit/special/protocol/approve/").then(I => {
                r.close(), Xs.init(!0), u(g)
            }).catch(u)
        }, []);
        return t ? s.jsx(w, {
            title: "Special offer",
            children: s.jsx(hs, {
                children: t.message
            })
        }) : a ? a.approveResult === "NOT_INVALID" ? (r.close(), u(e("common.link_invalid")), null) : s.jsxs(w, {
            className: es,
            title: "Special offer",
            children: [s.jsxs("div", {
                className: "banner-wrap",
                children: [s.jsx(js, {
                    className: "banner",
                    src: c ? Q : Z
                }), s.jsxs("div", {
                    className: "banner-cont",
                    children: [s.jsxs("div", {
                        className: "tit ttu",
                        children: ["100% ", e("common.bonus")]
                    }), s.jsx("div", {
                        className: "sub-tit ttu",
                        children: e("page.vip.offer.next_deposit")
                    })]
                }), s.jsxs("div", {
                    className: "morpheus",
                    children: [s.jsx("img", {
                        src: A,
                        alt: ""
                    }), s.jsxs("div", {
                        className: "txt",
                        children: [s.jsx("div", {
                            className: "mascot",
                            children: "COCO"
                        }), s.jsx("div", {
                            className: "ttu desc",
                            children: e("page.vip.offer.the_morpheus")
                        })]
                    }), s.jsx("img", {
                        className: "r",
                        src: A,
                        alt: ""
                    })]
                })]
            }), s.jsxs(V, {
                children: [s.jsx("div", {
                    className: "p",
                    children: e("page.vip.offer.txt1")
                }), s.jsx("div", {
                    className: "p",
                    children: e("page.vip.offer.txt2", "100%", l.amount2localStr(new b(500)), l.amount2localStr(new b(1e5)))
                }), s.jsx("div", {
                    className: "p",
                    children: e("page.vip.offer.txt3", "40x", "300%", "30")
                }), s.jsx("div", {
                    className: "p",
                    children: e("page.vip.offer.txt4", "1")
                }), a.approveResult === "NOT_APPROVE" && s.jsxs(s.Fragment, {
                    children: [s.jsxs("div", {
                        className: "p checkbox-wrap",
                        children: [s.jsx(vs, {
                            type: "checkbox",
                            value: i,
                            onChange: p
                        }), s.jsx("div", {
                            children: e("page.vip.offer.txt6")
                        })]
                    }), s.jsx(fs, {
                        type: "conic",
                        onClick: x,
                        disabled: !i,
                        children: e("common.actions.confirm")
                    })]
                }), a.approveResult === "APPROVE" && s.jsxs("div", {
                    className: "accepted",
                    children: [s.jsx("img", {
                        src: Js
                    }), e("page.vip.offer.txt7")]
                })]
            })]
        }) : s.jsx(w, {
            title: "Special offer",
            children: s.jsx(N, {})
        })
    };
    const es = "s1wo8c5g"
});
export {
    ws as BcdRule, ks as BonusGameList, Cs as BonusRakeback, Ds as CocoBonus, M as CoindropReceive, Rs as CoindropSend, Ss as DepositBonus, Hs as FirstDepositBonus, Bs as NewUserTask, As as NoticeEnterMobile, Is as NoticeEnterPC, Es as RainPage, Os as Recharge, Ts as RollPage, Ls as SetCurrency, Ps as Spin, Us as Task, Fs as Tip, Gs as Vip, Vs as VipLevel, q as VipOffer, ie as __tla
};
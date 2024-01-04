var Hs = Object.defineProperty;
var is = Object.getOwnPropertySymbols;
var Os = Object.prototype.hasOwnProperty,
    Ks = Object.prototype.propertyIsEnumerable;
var K = (h, m, p) => m in h ? Hs(h, m, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: p
    }) : h[m] = p,
    b = (h, m) => {
        for (var p in m || (m = {})) Os.call(m, p) && K(h, p, m[p]);
        if (is)
            for (var p of is(m)) Ks.call(m, p) && K(h, p, m[p]);
        return h
    };
var c = (h, m, p) => (K(h, typeof m != "symbol" ? m + "" : m, p), p);
import {
    cw as k,
    cM as P,
    cY as L,
    ct as A,
    cX as C,
    j as t,
    ci as N,
    cj as V,
    cp as Ps,
    d0 as Vs,
    cl as as,
    cz as F,
    dc as Ys,
    au as y,
    cm as D,
    cZ as zs,
    ck as Qs,
    cW as _,
    de as R,
    df as rs,
    cP as os,
    cv as Xs,
    co as Zs,
    c$ as cs,
    d1 as Js,
    __tla as et
} from "./chunk-7513ee0e.js";
import {
    dM as T,
    dW as st,
    ds as S,
    eD as tt,
    dX as ls,
    dr as x,
    dY as l,
    dp as ds,
    eE as nt,
    __tla as it
} from "./chunk-dcd0ca87.js";
import {
    c as w
} from "./chunk-61302461.js";
let Y, W, us, z, v, I, U, ms, ps, hs, gs, Q, fs, M, X, bs, Z, J, ys, at = Promise.all([(() => {
    try {
        return et
    } catch (h) {}
})(), (() => {
    try {
        return it
    } catch (h) {}
})()]).then(async () => {
    let h, m, p, ee, se, te, ne, ie, ae, re, oe, ce, le, de, ue, me, pe, he, ge, fe, be, ye, xe, je, we, ve, Ne, ke, Be, Te, _e, Se, Le, Ae, Ce, De, Ie, Fe, E, Re, We, Ue, Me, Ee, $e;
    h = "/assets/bonus.90a1735c.png", m = "/assets/bonus_d.ed8d9039.png", p = "/assets/net.d369686a.png", ee = "/assets/bcdunlock.4c3e0f44.png", se = "/assets/coin.968b6427.png", te = "/assets/money.7fa4e398.png", ne = "/assets/rakeback.dee50f49.png", ie = "/assets/spin.463f2a1f.png", ae = "/assets/spin_fiat.ca545efc.png", re = "/assets/quests.7ae7831a.png", oe = "/assets/egg.4a882516.png", ce = "/assets/roll.02855245.png", le = "/assets/recharge.e80e2af9.png", de = "/assets/weeklybonus.a15a7b47.png", ue = "/assets/monthlybonus.41ba9cad.png", me = "/assets/pointer.fe72597d.png", pe = "/assets/turntable.b21b0d0a.png", he = "/assets/spin_bg.c87bd0f4.png", ge = "/assets/recharge_s.6479d782.png", fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAMAAAAW0r4eAAAAkFBMVEUAAADe/++e/9G4/+i+/+DC/+HR/+a4/97d/+yU/8yZ/8/G/+LC/+Gi/9Sj/9Sy/9rW/+2m/9Xn//Pm//bG/+Pg//Kv/9ei/9Kj/9Oe/9DV/+rH/+O5/97L/+fk//Cd/9G//9/i//Sf/9Ge/9HS/+nw//+Q/8mV/86l/9bH/+W+/+Gf/82S/83a/+yz/9vb/+1N+oNCAAAAMHRSTlMAMG8GUU0KVjR5dEkOa19aODgrGxoTEWtlTTw7Oi4qKScjHhkRCGdZSkRDPTg3MiqnlhkgAAAAo0lEQVQoz7XPxxKCMBCA4YWYYAy9Si+Cvbz/24kopFw8OP6XzHyT7GTh53ZIlSvdK1ZTSg+SdPpmLBUk3upTl0WQbSW2l1qJVfNLx248TM/2vn3LKRSJDce5S0KwMdYIgs6rqZBTgTHOGcasn8Vkp4YAhDkrYbF5pLQ5KkNQ0rIskuXhuu7NFKVdv9IIl0B7Vy3jB99vIyBB5QcwF31e9AP8vycX5Qi0WzhjawAAAABJRU5ErkJggg==", be = "/assets/contest.5e67a0ec.png", ye = "/assets/vipbonus.111c33a4.png", xe = "/assets/levelup.40314c2d.png", je = "/assets/general.8f62a12e.png", we = "/assets/sportsbonus.2d8f394d.png", ve = "/assets/ball_white.825d0ca3.png", Ne = "/assets/ball.b20b8912.png", ke = "/assets/guide_header.f28d63d3.png", Be = "/assets/jackpot_ball.44ac110e.png", Te = "/assets/jackpot_ball_banner_s.03f82800.png", _e = "/assets/jackpot_ball_banner_s_white.62ba2d53.png", Se = "/assets/bonus_deposit.f4714a04.png", Le = "/assets/bonus_lottery.888e9bcf.png", Ae = "/assets/bonus_spin.95ea5248.png", v = {
        bonus_deposit: Se,
        bonus_lottery: Le,
        bonus_spin: Ae,
        bonus: h,
        bonus_d: m,
        net: p,
        bcdunlock: ee,
        coin: se,
        money: te,
        rakeback: ne,
        spin: ie,
        spin_fiat: ae,
        quests: re,
        roll: ce,
        egg: oe,
        recharge: le,
        weeklybonus: de,
        monthlybonus: ue,
        spin_bg: he,
        turntable: pe,
        pointer: me,
        imgprogress: fe,
        recharge_s: ge,
        vipbonus: ye,
        levelup: xe,
        contest: be,
        general: je,
        sportsbonus: we,
        ballWhite: ve,
        ball: Ne,
        guideHeader: ke,
        jackpotBall: Be,
        jackpotBallBanner: Te,
        jackpotBallBannerWhite: _e
    }, z = 22, W = 50, Ce = {
        first: {
            bonusLogs: [],
            expiredTime: 0,
            maxBonusRatio: [3, 1.8, 2.4, 3, 3.6],
            cashbackBonus: [],
            freeSpins: null,
            newbieTaskBonus: null,
            lotteryBonus: null
        },
        second: 0
    }, De = {
        depositBonus: 0,
        freeSpinBonus: 0,
        levelUpBonus: 0,
        luckySpinBonus: 0,
        monthlyBonus: 0,
        questsBonus: 0,
        rechargeBonus: 0,
        rollCompetitionBonus: 0,
        sportsWeeklyBonus: 0,
        weeklyBonus: 0
    }, Ie = {
        first: {
            totalClaimed: 0,
            totalGeneralBonus: 0,
            totalSpecialBonus: 0,
            totalVipBonus: 0
        },
        second: 0
    }, Fe = {
        first: {
            currentWager: "0",
            expireTimeEpochSecond: 0,
            levelLimit: 22,
            startTimeEpochSecond: 0,
            targetWager: "0"
        },
        second: 0
    }, E = {
        first: {
            currentWager: 0,
            expireTimeEpochSecond: 0,
            startTimeEpochSecond: 0,
            levelLimit: 22,
            targetWager: 0
        },
        second: 0
    }, Re = {
        first: {
            rewardCurrency: "",
            rewardsAmount: 0,
            newbieTaskExpireTime: 0,
            rewards: [],
            dailyTasks: [],
            weeklyTasks: []
        },
        second: 0
    }, We = {
        first: {
            leftTimes: 0,
            level: 0,
            fiat: !1,
            levelUpdated: !1,
            dailySpinTimes: 0,
            dailyWager: 0,
            levelWager: 200,
            vipSpinTimes: 0
        },
        second: 0
    }, Ue = {
        first: {
            endTime: 0,
            intervalTime: 60 * 6e4,
            lastBetUsd: "0",
            lastReceiveTime: 0,
            nextBetUsd: "0",
            nextReceiveTime: 0,
            receiveTimeMS: 0,
            receiveUsd: "0",
            rewards: [],
            sendBonus: !1,
            startTime: 0,
            status: 0,
            vipLevel: 0,
            viphostUserId: 0,
            tire: {
                currentTire: {
                    endWager: 49999,
                    index: 1,
                    startWager: 1e3,
                    tireName: "Basic",
                    vipRechargeRate: .18
                },
                tires: []
            }
        },
        second: 0
    }, Me = {
        first: {
            currentTime: 0,
            rollTimes: 0
        },
        second: 0
    }, Ee = () => k.post("/activity/bonus-dashboard/get/"), $e = () => k.post("/activity/bonus-dashboard/statistics/"), J = function(n) {
        return k.post(`/activity/reward/receive/${n}/`)
    }, hs = function(n, e = 1e4) {
        const s = new L(n);
        let i = 2,
            a = s.todp(2, L.ROUND_FLOOR);
        return s.gt(e) && (i = 0, a = s.todp(0, L.ROUND_FLOOR)), T.numberWithCommas(a.toNumber(), i)
    }, U = (n, e = !0, s = "USDFIAT", i = 0, a = 1e3) => {
        const o = P.state.enableLocaleCurrency,
            r = e ? o ? T.localCurrency.cs : "$" : "",
            u = i ? new L(n).gt(a) ? 0 : i : 0;
        return `${r}${A.numberWithCommas(P.state.localeCurrencyName,T.convertCurrency(new L(n||0).toNumber(),s,P.state.localeCurrencyName),u)}`
    }, Q = function(n, e, s) {
        const i = A.serverTime().getTime();
        return s > 0 ? 2 : i >= e ? 3 : n > 0 ? 1 : 0
    }, ps = (n, e) => {
        const s = U(n),
            i = U(e);
        return `${s}-${i}`
    }, M = function(n) {
        let e = 0,
            s = 0,
            i = 0;
        const a = [],
            o = [],
            r = [];
        if (n) {
            const u = n.first.freeSpins;
            u && u.length > 0 && u.map(d => {
                if (d.claimedTime === 0) {
                    i++;
                    const B = {
                        rewardId: d.rewardId,
                        rewardBonusId: d.rewardBonusId,
                        count: d.dailyNum
                    };
                    r.push(B)
                }
                return d
            });
            const f = n.first.cashbackBonus;
            f && f.length > 0 && f.map(d => (d.rewardId > 0 && Q(d.rewardId, d.expireTime, d.claimedTime) === 1 && (e++, a.push({
                count: d.count || 0,
                week: d.week || 0
            })), d));
            const g = n.first.lotteryBonus;
            g && g.length > 0 && g.map(d => {
                const B = d.currentLottery;
                if (B && B.rewardId > 0 && d.source !== "newbie") {
                    s++;
                    const O = {
                        rewardId: B.rewardId,
                        bonusAmount: d.totalCount
                    };
                    o.push(O)
                }
                return d
            })
        }
        return {
            deposit: e,
            lottery: s,
            freespin: i,
            deposits: a,
            lotterys: o,
            freespins: r
        }
    }, X = function(n) {
        let e = 0;
        const s = [];
        if (n && n.first) {
            const i = n.first;
            i && i.length > 0 && i.map(a => {
                a.claimedTime > 0 || (e++, s.push({
                    rewardId: a.rewardId,
                    rewardBonusId: a.rewardBonusId,
                    currency: a.bonusCurrencyName,
                    amount: a.bonusAmount
                }))
            })
        }
        return {
            lottery_winnings: e,
            lottery_winnings_list: s
        }
    };
    const xs = 24 * 60 * 60 * 1e3;
    class js {
        constructor() {
            c(this, "refresh", !1);
            c(this, "firstFlag", !0);
            c(this, "unclaimedCount", 0);
            c(this, "totalBonusReceived", {
                first: 0,
                second: 0
            });
            c(this, "bonusUnlock", null);
            c(this, "quests", b({}, Re));
            c(this, "spin", b({}, We));
            c(this, "depositBonus", b({}, Ce));
            c(this, "nextSpinTime", Date.now());
            c(this, "recharge", b({}, Ue));
            c(this, "statistics", b({}, Ie));
            c(this, "statisticsDetail", b({}, De));
            c(this, "rollCompetition", b({}, Me));
            c(this, "weeklyBonus", b({}, E));
            c(this, "monthlyBonus", b({}, E));
            c(this, "sportsWeeklyBonus", b({}, Fe));
            c(this, "freeMoneyBonus", null);
            c(this, "lotteryWinningsBonus", {
                first: [],
                second: 0
            });
            c(this, "specialBonus", {
                first: [],
                second: 0
            });
            c(this, "timeDown", xs);
            c(this, "timer", null);
            c(this, "showNotify", !1);
            c(this, "notifyType", "");
            c(this, "isLoading", !0);
            c(this, "isError", !1);
            c(this, "isFreeSpinLoading", !1);
            c(this, "isLotteryFreeTicketLoading", !1);
            c(this, "isNewDepositLoading", !1);
            c(this, "rollTimeDown", e => {
                e > 0 && (this.timer && clearInterval(this.timer), this.timeDown = e, this.timer = setInterval(() => {
                    const s = this.timeDown - 6e4;
                    s <= 0 ? (this.showNotify = !0, this.timeDown = 0, clearInterval(this.timer)) : this.timeDown = s
                }, 1e3 * 60))
            });
            st(this, {
                refresh: l,
                unclaimedCount: l,
                totalBonusReceived: l,
                bonusUnlock: l,
                firstFlag: l,
                quests: l,
                spin: l,
                freeMoneyBonus: l,
                nextSpinTime: l,
                statistics: l,
                depositBonus: l,
                statisticsDetail: l,
                sportsWeeklyBonus: l,
                lotteryWinningsBonus: l,
                recharge: l,
                rollCompetition: l,
                specialBonus: l,
                weeklyBonus: l,
                monthlyBonus: l,
                showNotify: l,
                notifyType: l,
                isLoading: l,
                isError: l,
                isFreeSpinLoading: l,
                isLotteryFreeTicketLoading: l,
                isNewDepositLoading: l
            }), this.initFn = this.initFn.bind(this), this.firstInit = this.firstInit.bind(this), this.receiveReward = this.receiveReward.bind(this), this.updateFreeSpin = this.updateFreeSpin.bind(this), this.updateLotteryFreeTicket = this.updateLotteryFreeTicket.bind(this), this.updateNewDeposit = this.updateNewDeposit.bind(this), this.updateFirstDeposit = this.updateFirstDeposit.bind(this), this.updateAll = this.updateAll.bind(this), this.spinNextTime(), S.on("rewardClaim", () => {
                this.initFn()
            }), tt(() => {
                S.login && setTimeout(() => {
                    this.firstInit()
                }, 3e3)
            })
        }
        async initFn() {
            S.login && (this.firstFlag = !1, this.isLoading = !0, Promise.all([Ee(), $e()]).then(e => {
                if (e && e.length === 2) {
                    const s = e[0];
                    ls(() => {
                        let i = s.unclaimedCount || 0;
                        if (s.totalBonusReceived && s.totalBonusReceived.first && (this.totalBonusReceived = s.totalBonusReceived), s.statistics && s.statistics.first && (this.statistics = s.statistics), s.depositBonus && s.depositBonus.first && (this.depositBonus = s.depositBonus), s.bonusUnlock && s.bonusUnlock.first && (this.bonusUnlock = s.bonusUnlock), s.quests && s.quests.first) {
                            this.quests = s.quests;
                            const a = s.quests.first.rewards;
                            if (a && a.length > 0) {
                                const o = a.filter(r => r.rewardId > 0);
                                o.length > 1 && (i = i + o.length - 1)
                            }
                            s.quests.second > 0 && S.vipLevel >= W && (i = Math.max(i - 1, 0))
                        }
                        s.spin && s.spin.first && (this.spin = s.spin, s.spin.second > 0 && S.vipLevel >= W && (i = Math.max(i - 1, 0))), s.rollCompetition && s.rollCompetition.first && (this.rollCompetition = s.rollCompetition, s.rollCompetition.second > 0 && (i = Math.max(i - 1, 0))), s.freeMoneyBonus && (this.freeMoneyBonus = s.freeMoneyBonus), s.lotteryWinningsBonus && (this.lotteryWinningsBonus = s.lotteryWinningsBonus), s.recharge && s.recharge.first && (this.recharge = s.recharge), s.monthlyBonus && s.monthlyBonus.first && (this.monthlyBonus = s.monthlyBonus), s.weeklyBonus && s.weeklyBonus.first && (this.weeklyBonus = s.weeklyBonus), s.sportsWeeklyBonus && s.sportsWeeklyBonus.first && (this.sportsWeeklyBonus = s.sportsWeeklyBonus), s.specialBonus && s.specialBonus.first && this.sortRewardList(s.specialBonus), this.unclaimedCount = i, this.refresh = !this.refresh, this.statisticsDetail = e[1], this.isLoading = !1, this.isError = !1
                    }), this.setTimedownInfo(s)
                }
            }).catch(e => {
                C(e), ls(() => {
                    this.isError = !0
                })
            }))
        }
        firstInit(e = !1) {
            (this.firstFlag || e) && this.initFn()
        }
        sortRewardList(e) {
            const s = b({}, e),
                i = [...e.first];
            i.sort((a, o) => a.status - o.status), s.first = [...i], this.specialBonus = s
        }
        getGeneralBonusAmount() {
            const e = this.quests.second,
                s = this.spin.second,
                i = this.rollCompetition.second,
                a = this.bonusUnlock ? this.bonusUnlock.second : 0,
                {
                    deposit: o,
                    lottery: r
                } = M(this.depositBonus),
                {
                    lottery_winnings: u
                } = X(this.lotteryWinningsBonus);
            return e + s + i + a + o + r + u
        }
        getVipBonusAmount() {
            const e = this.recharge.second,
                s = this.weeklyBonus.second,
                i = this.monthlyBonus.second,
                a = this.sportsWeeklyBonus.second;
            return e + s + i + a
        }
        getFreeSpinBonusAmount() {
            const {
                freespin: e
            } = M(this.depositBonus);
            return e
        }
        async receiveReward(e) {
            if (!e) return;
            const s = [...this.specialBonus.first],
                i = s.findIndex(a => a.rewardId === e);
            if (i >= 0) {
                const a = b({}, s[i]);
                if (a && a.status === 0) try {
                    await J(e), x.playSound("claim");
                    const o = [...s];
                    return o[i].status = 1, this.specialBonus = {
                        first: o,
                        second: this.subNumber(this.specialBonus.second)
                    }, this.unclaimedCount = this.unclaimedCount - 1, !0
                } catch (o) {
                    return C(o), !1
                } else return !1
            } else return !1
        }
        subNumber(e) {
            return e <= 0 ? 0 : e - 1
        }
        setTimedownInfo(e) {
            let s = this.timeDown;
            if (e.spin && e.spin.second <= 0) {
                const i = this.nextSpinTime - Date.now();
                i <= s && (s = i, this.notifyType = "spin")
            }
            if (S.vipLevel >= z && e.recharge && e.recharge.second <= 0 && e.recharge.first.status >= 2) {
                const i = e.recharge.first.receiveTimeMS;
                i && i > 0 && i < s && (s = i, this.notifyType = "recharge")
            }
            s !== this.timeDown && this.rollTimeDown(s)
        }
        async updateLotteryFreeTicket(e) {
            this.isLotteryFreeTicketLoading || (this.isLotteryFreeTicketLoading = !0, k.get("/activity/recharge-bonus/lottery/").then(s => {
                this.depositBonus.first.lotteryBonus = s, this.isLotteryFreeTicketLoading = !1, e && e(s)
            }).catch(s => {
                C(s), this.isLotteryFreeTicketLoading = !1
            }))
        }
        async updateFreeSpin() {
            this.isFreeSpinLoading || (this.isFreeSpinLoading = !0, k.get("/activity/recharge-bonus/freeSpin/").then(e => {
                this.depositBonus.first.freeSpins = e, this.isFreeSpinLoading = !1
            }).catch(e => {
                C(e), this.isFreeSpinLoading = !1
            }))
        }
        async updateNewDeposit() {
            this.isNewDepositLoading || (this.isNewDepositLoading = !0, k.get("/activity/recharge-bonus/depositBonus/").then(e => {
                this.depositBonus.first.cashbackBonus = e, this.isNewDepositLoading = !1
            }).catch(e => {
                this.isNewDepositLoading = !1, C(e)
            }))
        }
        async updateAll() {
            this.updateFreeSpin(), this.updateLotteryFreeTicket(), this.updateNewDeposit()
        }
        async updateFirstDeposit(e) {
            const s = this.depositBonus.first.cashbackBonus;
            s && (s == null ? void 0 : s.length) > 0 && this.updateAll()
        }
        async spinNextTime() {
            const e = A.serverTime(),
                s = e.getUTCFullYear(),
                i = e.getUTCMonth(),
                a = e.getUTCDate() + 1;
            this.nextSpinTime = Date.UTC(s, i, a, 0, 0, 0)
        }
    }
    I = new js;

    function ws(n) {
        const e = {
            expiredTime: 0,
            fromCurrencyAmount: String(n),
            fromCurrencyName: "BCL",
            lotteryList: [{
                numbers: [],
                jackpotBallNumber: 0,
                quantity: 1,
                pickType: 1
            }],
            toCurrencyName: "BCL"
        };
        return k.post("/lottery/five-plus-one/buy/", e)
    }
    const $ = ds(function({
        nums: n,
        jackpotNum: e,
        className: s
    }) {
        return t.jsxs("div", {
            className: w(Ge, s),
            children: [t.jsx("img", {
                className: "img-bg",
                src: x.isDarken ? v.jackpotBallBanner : v.jackpotBallBannerWhite,
                alt: ""
            }), t.jsxs("div", {
                className: "jackpot-wrap",
                children: [t.jsx("div", {
                    className: "nums",
                    children: n.map(i => t.jsxs("div", {
                        className: "ball",
                        children: [t.jsx("img", {
                            src: x.isDarken ? v.ball : v.ballWhite,
                            alt: ""
                        }), t.jsx("div", {
                            className: "num",
                            children: i
                        })]
                    }, i))
                }), t.jsx("div", {
                    className: "jackpotNum",
                    children: t.jsxs("div", {
                        className: "ball",
                        children: [t.jsx("img", {
                            src: v.jackpotBall
                        }), t.jsx("div", {
                            className: "num",
                            children: e
                        })]
                    })
                })]
            })]
        })
    });

    function q(n) {
        return n > 9 ? n : "0" + n
    }
    Y = function({
        number: n
    }) {
        const e = N(),
            s = V(),
            {
                data: i
            } = Ps(() => ws(Number(n)));
        return i ? t.jsxs("div", {
            className: qe,
            children: [t.jsxs("div", {
                className: "header",
                children: [t.jsx("img", {
                    src: v.guideHeader,
                    className: ""
                }), t.jsx("div", {
                    className: "big-title",
                    children: e("page.lottery.jackpot")
                })]
            }), t.jsxs("div", {
                className: "scroll-wrapper",
                children: [t.jsx(as, {
                    onClick: () => F.close()
                }), t.jsxs("div", {
                    className: "next-time",
                    children: [t.jsx("div", {
                        className: "txt",
                        children: e("common.nextdraw")
                    }), t.jsx("div", {
                        className: w("time", x.isDarken ? "dark" : ""),
                        children: t.jsx(Ys, {
                            endTime: i.expireTimeInMs + Date.now(),
                            onEnd: () => {},
                            children: ({
                                hours: a,
                                minutes: o,
                                seconds: r
                            }) => t.jsxs(t.Fragment, {
                                children: [t.jsxs("span", {
                                    children: [q(a), "h"]
                                }), ":", t.jsxs("span", {
                                    children: [q(o), "m"]
                                }), ":", t.jsxs("span", {
                                    children: [q(r), "s"]
                                })]
                            })
                        })
                    })]
                }), t.jsx("div", {
                    className: w("spectial-text", x.isDarken ? "dark" : ""),
                    dangerouslySetInnerHTML: {
                        __html: Number(n) > 1 ? `${e("page.lottery.new.add.complex")} <span class="green">${Number(n)} ${e("page.lottery.ticketnum")}</span>` : e("page.lottery.new.add")
                    }
                }), t.jsx("div", {
                    className: "jackpotball-wrapper",
                    children: Number(n) > 1 ? t.jsxs(y.Fragment, {
                        children: [t.jsx($, {
                            nums: i.numbers,
                            jackpotNum: i.jackpotBallNumber
                        }), t.jsx($, {
                            nums: i.numbers,
                            jackpotNum: i.jackpotBallNumber,
                            className: "float-jackpot"
                        })]
                    }) : t.jsx($, {
                        nums: i.numbers,
                        jackpotNum: i.jackpotBallNumber
                    })
                }), t.jsx("div", {
                    className: "btn-wrapper",
                    children: t.jsx(D, {
                        type: "conic4",
                        className: "btn",
                        onClick: () => {
                            s("/lottery"), F.close()
                        },
                        children: e("page.lottery.goto")
                    })
                })]
            })]
        }) : t.jsx(Vs, {})
    };
    let qe, Ge, He, Oe, Ke, Pe, Ve, Ye, ze, Qe, Xe, Ze, Je, es, ss, ts;
    qe = "vue9hl1", Ge = "j1hzs4w3", fs = ds(function({
        rewardItem: n,
        hideContent: e = !1
    }) {
        const s = N(),
            i = n.rewards || [],
            a = x.rewardTypes[n.rewardType] || {},
            o = i.slice(0, 1),
            r = n.status !== 0,
            u = n.rewardType === "vip_give_bonus" ? v.levelup : a.bgSmall || v.general,
            f = async () => {
                if (!r && (await I.receiveReward(n.rewardId), n.rewardType === "depositbcl")) {
                    let g = "0";
                    n.rewards && n.rewards[0] && (g = n.rewards[0].amount), g && F.push(t.jsx(Y, {
                        number: n.rewards[0].amount
                    }))
                }
            };
        return t.jsxs("div", {
            className: w("reward-item", r && "claimed-item"),
            children: [t.jsx("div", {
                className: "reward-img-wrap",
                children: t.jsx("img", {
                    alt: "reward",
                    src: u
                })
            }), t.jsxs("div", {
                className: "reward-text",
                children: [t.jsx("p", {
                    className: "title",
                    children: a.name || n.rewardType
                }), !e && t.jsx("p", {
                    className: "desc",
                    children: a.title || n.title
                }), t.jsx("div", {
                    className: "coin-list",
                    children: o.map((g, d) => t.jsx(zs.CoinFormat, {
                        name: g.name,
                        amount: Number(g.amount),
                        icon: !0,
                        sign: !0,
                        showName: !0
                    }, g.name + d))
                })]
            }), t.jsx(D, {
                onClick: f,
                style: {
                    opacity: r ? .5 : 1
                },
                type: r ? "gray" : "conic",
                disabled: r,
                children: s(r ? "common.claimed" : "page.task.receive")
            })]
        })
    }), He = "/assets/disabled.872efa0c.svg", Oe = "/assets/recharge.586261e1.json", Ke = "/assets/rechargew-white.fe1cd6d5.json", Pe = "/assets/recharge_reward.6fe75678.json", Ve = "/assets/recharge-0.86e44653.png", Ye = "/assets/recharge-0-white.bba84859.png", ze = "/assets/recharge-25.00a320b4.png", Qe = "/assets/recharge-25-white.95bcca03.png", Xe = "/assets/recharge-50.e17fcb0e.png", Ze = "/assets/recharge-50-white.707cf11a.png", Je = "/assets/recharge-75.65f4c194.png", es = "/assets/recharge-75-white.f019d73c.png", ss = "/assets/recharge-100.22090dcd.png", ts = "/assets/recharge-100-white.6da3ced4.png", bs = function(n) {
        return n < 25 ? x.isDarken ? Ve : Ye : n < 50 ? x.isDarken ? ze : Qe : n < 75 ? x.isDarken ? Xe : Ze : n < 100 ? x.isDarken ? Je : es : x.isDarken ? ss : ts
    }, Z = {
        disabled: He,
        rechargeLottile: x.isDarken ? Oe : Ke,
        rechargeReward: Pe
    };
    const vs = {
        scale: {
            list: [{
                value: 1,
                time: 0
            }, {
                value: 1.5,
                time: 1
            }]
        },
        color: {
            start: "#892aff",
            end: "#892aff"
        },
        maxParticles: 8,
        spawnRect: {
            w: 414,
            h: 580
        }
    };
    ms = function({
        amount: n,
        currencyName: e
    }) {
        const s = N(),
            i = y.useRef(null);
        return y.useEffect(() => {
            setTimeout(() => {
                var a;
                (a = i.current) == null || a.play(0)
            }, 300)
        }, []), t.jsxs("div", {
            className: `result-pop ${Ns}`,
            children: [t.jsx(Qs, {
                className: "lottie-wrap",
                ref: i,
                path: Z.rechargeReward
            }), t.jsx(nt, {
                config: vs
            }), t.jsxs("div", {
                className: "front",
                children: [t.jsx("div", {
                    className: "recharge",
                    children: s("page.recharge.recharge")
                }), t.jsx("div", {
                    className: "text",
                    children: s("page.recharge.result")
                }), t.jsxs("div", {
                    className: "result-value flex-center",
                    children: [t.jsx("div", {
                        className: "amount",
                        children: n
                    }), t.jsx("div", {
                        className: "currency-name",
                        children: T.getAlias(e)
                    })]
                }), t.jsx(D, {
                    onClick: () => F.close(),
                    type: "conic",
                    children: s("common.actions.confirm")
                })]
            })]
        })
    };
    const Ns = "rka5rzj",
        G = "/assets/check.fb4072c5.png",
        ks = "/assets/glod_bg.ff13c349.png",
        Bs = "/assets/bg1.36f9d669.png";

    function Ts({
        time: n
    }) {
        const [e, s] = _({
            time: n
        });
        return y.useEffect(() => {
            const i = e.time - 1,
                a = setTimeout(() => {
                    s({
                        time: i
                    })
                }, 1e3);
            return () => clearTimeout(a)
        }, [e.time]), e.time <= 0 ? null : t.jsxs("div", {
            className: "time",
            children: [e.time, "s"]
        })
    }

    function _s({
        time: n,
        amount: e,
        currency: s
    }) {
        const i = R(),
            [a, o] = _({
                rotate: !1
            }),
            r = N();
        return y.useEffect(() => {
            const u = setTimeout(() => o({
                    rotate: !0
                }), 1300),
                f = setTimeout(() => i.close(), n * 1e3);
            return () => {
                clearTimeout(u), clearTimeout(f)
            }
        }, []), t.jsxs("div", {
            className: Ss,
            children: [t.jsx(Ts, {
                time: n
            }), t.jsx("img", {
                className: w("img-bg", a.rotate && "rotate"),
                src: Bs,
                alt: ""
            }), t.jsx("img", {
                className: "img_glod",
                src: ks,
                alt: ""
            }), t.jsxs("div", {
                className: "content",
                children: [t.jsx("div", {
                    className: "txt tit ttu",
                    children: r("page.bonus.rewards_claimed")
                }), t.jsxs("div", {
                    className: "amount",
                    children: [e, " ", T.getAlias(s)]
                }), t.jsx("div", {
                    className: "txt ttu",
                    children: r("common.bonus")
                })]
            })]
        })
    }
    const Ss = "sx3vrxj",
        Ls = "/assets/bg3.135f1264.png";

    function As({
        data: n,
        total: e
    }) {
        const [s, i] = _({
            rotate: !1,
            chooseIndex: 0
        }), a = V(), o = N(), r = R(), u = rs();
        y.useEffect(() => {
            const d = setTimeout(() => i({
                rotate: !0
            }), 1300);
            return () => {
                clearTimeout(d)
            }
        }, []);
        const f = () => {
                u.close(), r.close(), a(`/game/${n.gameUnique}?fsId=${n.fsId}&fs=${n.fsRoundTotal-n.fsRoundUsed}`)
            },
            g = Math.ceil(e / n.dailyNum);
        return t.jsxs("div", {
            className: Cs,
            children: [t.jsx(as, {
                onClick: () => r.close()
            }), t.jsx("img", {
                className: w("img-bg", s.rotate && "rotate"),
                src: Ls,
                alt: ""
            }), t.jsxs("div", {
                className: "content",
                children: [t.jsx("div", {
                    className: "txt tit",
                    children: o("page.bonus.free_spin.claimed", String(n.dailyNum))
                }), t.jsx("div", {
                    className: "txt sub-tit",
                    children: o("page.newuser.title5", String(n.dailyNum), `${g}`, `${e}`)
                }), t.jsxs("div", {
                    className: "games",
                    children: [t.jsx("img", {
                        src: n.thumbnail,
                        alt: ""
                    }), t.jsx("div", {
                        className: "provider",
                        children: n.providerName
                    })]
                }), t.jsx(D, {
                    onClick: f,
                    type: "conic",
                    children: o("common.play")
                })]
            })]
        })
    }
    const Cs = "s1ivvtwo",
        Ds = "/assets/ticket_bg.a8bf0d1c.png",
        Is = "/assets/bg2.2d386db4.png",
        Fs = "/assets/ball.3117206e.png",
        Rs = "/assets/ball_w.e380db03.png";

    function Ws({
        ball: n,
        jackpot: e
    }) {
        const s = Xs();
        return t.jsxs("div", {
            className: w("ball-wrap", Es),
            children: [t.jsx("img", {
                className: "ball-bg",
                src: s ? Fs : Rs,
                alt: ""
            }), t.jsxs("div", {
                className: "ball-list",
                children: [n.map((i, a) => t.jsx("div", {
                    className: "ball",
                    children: i
                }, a)), t.jsx("div", {
                    className: "jackpot",
                    children: e
                })]
            })]
        })
    }

    function Us({
        time: n
    }) {
        const [e, s] = _({
            time: n
        });
        return y.useEffect(() => {
            const i = e.time - 1,
                a = setTimeout(() => {
                    s({
                        time: i
                    })
                }, 1e3);
            return () => clearTimeout(a)
        }, [e.time]), e.time <= 0 ? null : t.jsxs("div", {
            className: "time",
            children: [e.time, "s"]
        })
    }

    function Ms({
        time: n,
        data: e
    }) {
        const [s, i] = _({
            rotate: !1
        }), a = R(), o = N();
        y.useEffect(() => {
            const u = setTimeout(() => i({
                    rotate: !0
                }), 1300),
                f = setTimeout(() => a.close(), n * 1e3);
            return () => {
                clearTimeout(u), clearTimeout(f)
            }
        }, []);
        const r = e && e.currentLottery;
        return r ? t.jsxs("div", {
            className: ns,
            children: [t.jsx(Us, {
                time: n
            }), t.jsx("img", {
                className: w("img-bg", s.rotate && "rotate"),
                src: Is,
                alt: ""
            }), t.jsx("img", {
                className: "img_glod",
                src: Ds,
                alt: ""
            }), t.jsxs("div", {
                className: "content",
                children: [t.jsxs("div", {
                    className: "txt tit ttu",
                    children: [o("page.bonus.rewards_claimed"), "!"]
                }), t.jsx(Ws, {
                    ball: r.lotteryResult.numbers,
                    jackpot: r.lotteryResult.jackpotBallNumber
                }), t.jsx("div", {
                    className: "txt ttu",
                    children: o("common.bonus")
                })]
            })]
        }) : t.jsx("div", {
            className: ns,
            children: t.jsx(os, {})
        })
    }
    const ns = "ss1nrrm",
        Es = "b1n9vac";

    function $s(n) {
        return I.depositBonus.first.cashbackBonus.find(e => e.count === n)
    }

    function qs(n) {
        return k.post("/activity/taskhub/takeReward/", {
            rewardId: n
        })
    }
    const H = Zs.memo(function({
        tit: n
    }) {
        const [e] = y.useState(n);
        return t.jsx("div", {
            className: "bonus-tit",
            children: e
        })
    });
    us = function({
        count: n
    }) {
        const e = $s(n),
            s = 3,
            i = N(),
            a = rs(),
            o = R(),
            [r, u] = _({
                claimAll: !1,
                loading: !1,
                claimCash: !1,
                claimSpin: !1,
                hasSpin: e.freeSpin > 0,
                claimLottery: !1,
                hasLottery: e.lottery > 0
            }),
            f = V(),
            g = y.useCallback(() => {
                o.push(t.jsx(_s, {
                    time: s,
                    amount: e.bonusAmount,
                    currency: e.bonusCurrencyName
                }))
            }, []),
            d = y.useCallback(j => {
                o.push(t.jsx(Ms, {
                    data: j,
                    time: s
                }))
            }, []),
            B = y.useCallback(j => {
                o.push(t.jsx(As, {
                    data: j,
                    total: e.freeSpin
                }), {
                    closeable: !1
                })
            }, []);
        async function O() {
            if (r.claimAll) a.close(), f("/bonus");
            else {
                u({
                    loading: !0
                });
                const j = await qs(e.rewardId);
                g(), u({
                    claimCash: !0
                }), (j.lottery || j.freeSpinBean) && await A.delay((s + .5) * 1e3), j.lottery && (d(j.lottery), u({
                    claimLottery: !0
                }), j.freeSpinBean && await A.delay((s + .5) * 1e3)), r.hasSpin && j.freeSpinBean && (B(j.freeSpinBean), u({
                    claimSpin: !0
                })), I.updateAll(), u({
                    loading: !1,
                    claimAll: !0
                })
            }
        }
        return e ? t.jsx(cs, {
            className: Gs,
            children: t.jsxs(Js, {
                children: [t.jsx("div", {
                    className: "title",
                    children: i("common.congratulations")
                }), t.jsx("div", {
                    className: "sub-tit",
                    children: i("page.newuser.title1", n.toString())
                }), t.jsxs("div", {
                    className: w("bonus-item bg-0", (r.claimAll || r.claimCash) && "claimed"),
                    children: [t.jsx(H, {
                        tit: `${T.numberWithCommas(e.bonusAmount)} ${T.getAlias(e.bonusCurrencyName)} ${i("common.bonus")}`
                    }), t.jsxs("div", {
                        className: "claim-desc",
                        children: [t.jsx("img", {
                            src: G
                        }), " ", i("common.claimed")]
                    }), t.jsx("div", {
                        className: "bonus-desc",
                        dangerouslySetInnerHTML: {
                            __html: i("page.newuser.title2")
                        }
                    })]
                }), r.hasLottery && t.jsxs("div", {
                    className: w("bonus-item bg-1", (r.claimLottery || r.claimAll) && "claimed"),
                    children: [t.jsx(H, {
                        tit: `${e.lottery} ${i("page.bonus.lottery_tickets")}`
                    }), t.jsxs("div", {
                        className: "claim-desc",
                        children: [t.jsx("img", {
                            src: G
                        }), " ", i("common.claimed")]
                    }), t.jsx("div", {
                        className: "bonus-desc",
                        dangerouslySetInnerHTML: {
                            __html: i("page.newuser.title3")
                        }
                    })]
                }), r.hasSpin && t.jsxs("div", {
                    className: w("bonus-item bg-2", (r.claimSpin || r.claimAll) && "claimed"),
                    children: [t.jsx(H, {
                        tit: `${e.freeSpin} ${i("page.bonus.free_spin")}`
                    }), t.jsxs("div", {
                        className: "claim-desc",
                        children: [t.jsx("img", {
                            src: G
                        }), " ", i("common.claimed")]
                    }), t.jsx("div", {
                        className: "bonus-desc",
                        dangerouslySetInnerHTML: {
                            __html: i("page.newuser.title4")
                        }
                    })]
                }), t.jsx(D, {
                    type: "conic",
                    onClick: O,
                    children: r.claimAll ? i("page.bonus.check") : i("common.claim_all")
                })]
            })
        }) : t.jsx(cs, {
            children: t.jsx(os, {})
        })
    };
    const Gs = "sgp12b6";
    ys = function() {
        const n = N();
        return function(e) {
            return n(e === 1 ? "common.deposit_bonus_1" : e === 2 ? "common.deposit_bonus_2" : e === 3 ? "common.deposit_bonus_3" : e === 4 ? "common.deposit_bonus_4" : "common.deposit_bonus")
        }
    }, gs = function() {
        const n = N();
        return function(e) {
            return e === 1 ? n("common.week.mon") : e === 2 ? n("common.week.tue") : e === 3 ? n("common.week.wed") : e === 4 ? n("common.week.thu") : e === 5 ? n("common.week.fri") : e === 6 ? n("common.week.sat") : e === 7 ? n("common.week.sun") : ""
        }
    }
});
export {
    Y as G, W as H, us as N, z as R, at as __tla, v as a, I as b, U as c, ms as d, ps as e, hs as f, gs as g, Q as h, fs as i, M as j, X as k, bs as l, Z as m, J as r, ys as u
};
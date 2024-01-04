var fn = Object.defineProperty,
    wn = Object.defineProperties;
var bn = Object.getOwnPropertyDescriptors;
var ms = Object.getOwnPropertySymbols;
var Cn = Object.prototype.hasOwnProperty,
    kn = Object.prototype.propertyIsEnumerable;
var Te = (D, I, A) => I in D ? fn(D, I, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: A
    }) : D[I] = A,
    C = (D, I) => {
        for (var A in I || (I = {})) Cn.call(I, A) && Te(D, A, I[A]);
        if (ms)
            for (var A of ms(I)) kn.call(I, A) && Te(D, A, I[A]);
        return D
    },
    z = (D, I) => wn(D, bn(I));
var G = (D, I, A) => (Te(D, typeof I != "symbol" ? I + "" : I, A), A);
import {
    ds as $,
    dW as _n,
    eM as Le,
    dM as x,
    ek as O,
    dN as Y,
    dr as ye,
    dY as ae,
    ei as Tn,
    eN as Ln,
    e9 as Sn,
    em as In,
    e7 as ps,
    __tla as An
} from "./chunk-dcd0ca87.js";
import {
    cw as h,
    al as Se,
    ct as q,
    cM as je,
    ci as j,
    j as e,
    cu as Ie,
    cY as W,
    cQ as Ae,
    cS as De,
    dr as Be,
    cz as Z,
    dd as ce,
    c_ as k,
    ei as Dn,
    cm as U,
    cp as ge,
    cP as oe,
    d0 as ne,
    co as Q,
    cj as X,
    dc as hs,
    cX as F,
    au as f,
    cO as xs,
    c$ as te,
    d1 as de,
    da as me,
    df as ue,
    cW as ie,
    d8 as pe,
    dx as ys,
    cv as js,
    dO as Bn,
    d2 as ve,
    dp as gs,
    d3 as Fe,
    de as Ne,
    cR as Fn,
    an as Rn,
    a as vs,
    dn as Ns,
    d9 as On,
    cl as Un,
    cZ as Mn,
    __tla as Pn
} from "./chunk-7513ee0e.js";
import {
    c as M,
    t as En,
    o as fs
} from "./chunk-61302461.js";
import {
    s as Vn,
    __tla as $n
} from "./chunk-abcf23a1.js";
let Re, ws, Oe, fe, Ue, Me, Pe, J, Ee, bs, he, Ve, Cs, $e, ks, qe, _s, Ts, re, Ke, We, we, Ls, Ss, Is, qn = Promise.all([(() => {
    try {
        return An
    } catch (D) {}
})(), (() => {
    try {
        return Pn
    } catch (D) {}
})(), (() => {
    try {
        return $n
    } catch (D) {}
})()]).then(async () => {
    (s => {
        async function a(i, n, l, c) {
            return h.post(`/payment/deposit/crypto/${i}/address/`, {
                addrType: l,
                chain: n,
                extendParam: c
            })
        }
        s.getAddress = a;
        async function t() {
            return h.post("/payment/lnurl/pay/")
        }
        s.satsPay = t;
        async function r(i) {
            return h.post("/payment/deposit/crypto/create-sats/", {
                amount: i
            })
        }
        s.satsCreat = r
    })(Ke || (Ke = {})), (s => {
        async function a(u, o, y, v) {
            return h.post("/payment/deposit/fiat/kyc/", {
                currencyName: u,
                wayName: o,
                method: y,
                channel: v
            })
        }
        s.depositKyc = a;
        let t;
        (u => {
            u[u.PASS = 0] = "PASS", u[u.PASS_ALL = 1] = "PASS_ALL", u[u.BLOCK_BY_CHANNEL_AMOUNT_15_MIN = 2] = "BLOCK_BY_CHANNEL_AMOUNT_15_MIN", u[u.BLOCK_BY_3_TIMES_15_MIN = 3] = "BLOCK_BY_3_TIMES_15_MIN", u[u.BLOCK_BY_5_TIMES_1_H = 4] = "BLOCK_BY_5_TIMES_1_H"
        })(t || (t = {}));
        async function r(u) {
            return h.post("/payment/deposit/fiat/create/", C({}, u))
        }
        s.deposit = r;
        async function i(u) {
            return h.get(`/payment/deposit/fiat/${u}/methods/`)
        }
        s.depositMethods = i;
        async function n(u) {
            return h.get(`/payment/deposit/fiat/history/${u}/`)
        }
        s.getOrderBase = n;
        async function l(u) {
            return h.get(`/payment/deposit/fiat/order/${u}/`)
        }
        s.getFiatOrder = l;
        async function c(u) {
            return h.post("/payment/deposit/fiat/order/cancel/", {
                orderId: u
            })
        }
        s.cancelOrder = c;
        async function d() {
            return h.get("/payment/deposit/fiat/list/")
        }
        s.getDepositList = d;
        async function m(u, o) {
            return h.post("/payment/deposit/fiat/order/updateUTR/", {
                orderId: u,
                utr: o
            })
        }
        s.updateUtr = m
    })(re || (re = {})), (s => {
        async function a(d, m) {
            return h.post(`/payment/withdraw/fee/range/${d}/`, {
                chain: m,
                currencyName: d
            })
        }
        s.getRange = a;
        async function t(d, m, u) {
            return h.post("/payment/lnurl/", {
                code: d,
                withdrawVerifyType: m,
                timestamp: u
            })
        }
        s.satsCreate = t;
        async function r(d, m) {
            return h.post("/payment/withdraw/fee/deduction/", {
                withdrawCurrencyName: d,
                withdrawChain: m
            })
        }
        s.deduction = r;
        async function i(d) {
            return h.post("/payment/withdraw/create/", C({}, d))
        }
        s.withdraw = i;
        async function n(d, m, u, o) {
            return h.post("/payment/withdraw/create-sats/", {
                receipts: d,
                code: m,
                withdrawVerifyType: u,
                timestamp: o
            })
        }
        s.withdrawSats = n;
        async function l(d, m, u, o) {
            return h.post("/payment/withdraw/cancel/", {
                withdrawId: d,
                chain: m,
                currencyName: u,
                fiatProvider: o
            })
        }
        s.withdrawCancel = l;
        async function c() {
            return h.get("/payment/withdraw/right/")
        }
        s.createSats = c
    })(Ee || (Ee = {})), (s => {
        async function a(c, d, m, u) {
            return h.post("/payment/withdraw/fiat/kyc/", {
                currencyName: c,
                wayName: d,
                method: m,
                channel: u
            })
        }
        s.withdrawKyc = a;
        async function t(c, d, m, u, o, y) {
            return h.post("/payment/withdraw/fiat/fee/", {
                currencyName: c,
                wayName: d,
                method: m,
                channel: u,
                amount: o,
                provider: y
            })
        }
        s.withdrawFee = t;
        async function r(c) {
            return h.post("/payment/withdraw/fiat/create/", C({}, c))
        }
        s.withdraw = r;
        async function i(c) {
            return h.get(`/payment/withdraw/fiat/${c}/methods/`)
        }
        s.withdrawMethods = i;
        async function n() {
            return h.get("/payment/withdraw/fiat/list/")
        }
        s.getWithdrawList = n;
        async function l(c, d, m, u) {
            return h.post("/payment/withdraw/cancel/", {
                withdrawId: c,
                currencyName: d,
                withdrawWay: m,
                chain: u
            })
        }
        s.cancelOrder = l
    })(J || (J = {})), (s => {
        async function a(i, n, l, c, d, m) {
            return h.post("/user/amount/change/record/", {
                page: i,
                pageSize: n,
                beginTime: l,
                endTime: c,
                currencyName: d,
                changeTypeName: m
            })
        }
        s.getBill = a;
        async function t(i, n, l, c, d) {
            return h.post("/user/buy-crypto/history/", {
                page: i,
                pageSize: n,
                beginTime: l,
                endTime: c,
                targetCoin: d
            })
        }
        s.getBuyHistory = t;
        async function r() {
            return h.get("/user/amount/change/config/")
        }
        s.getBillType = r
    })(Re || (Re = {})), (s => {
        async function a(n) {
            return h.get(`/payment/deposit/order/${n}/`)
        }
        s.getDepositDetail = a;
        async function t(n, l, c, d, m, u) {
            return h.post("/payment/deposit/history/", {
                page: n,
                pageSize: l,
                status: c,
                beginTime: d,
                endTime: m,
                currencyName: u
            })
        }
        s.getDepositHistory = t;
        async function r(n) {
            return h.get(`/payment/withdraw/order/${n}/`)
        }
        s.getWithdrawDetail = r;
        async function i(n, l, c, d, m, u) {
            return h.post("/payment/withdraw/history/", {
                page: n,
                pageSize: l,
                status: c,
                beginTime: d,
                endTime: m,
                currencyName: u
            })
        }
        s.getWithdrawHistory = i
    })(Ve || (Ve = {})), (s => {
        async function a(r, i, n, l, c) {
            return h.post("/game/support/swap/history/", {
                page: r,
                pageSize: i,
                beginTime: n,
                endTime: l,
                fromCurrencyName: c
            })
        }
        s.getSwap = a;

        function t(r, i) {
            return `/api/game/support/qrcode/${r}/?text=${i}`
        }
        s.getQrcode = t
    })(Ue || (Ue = {}));
    class D {
        constructor() {
            G(this, "currency", "BTC");
            G(this, "cryptoCurrency", "BTC");
            G(this, "nftCurrency", "");
            G(this, "fiatCurrency", "");
            G(this, "bcdBonusTab", 0);
            G(this, "fastDepositCoins", ["BTC", "ETH", "USDT", "TRX", "BNB"]);
            G(this, "inited", !1);
            G(this, "fromAccount", !1);
            _n(this, {
                inited: ae,
                currency: ae,
                cryptoCurrency: ae,
                nftCurrency: ae,
                fiatCurrency: ae,
                bcdBonusTab: ae,
                fromAccount: ae
            }), this.getFiatList = this.getFiatList.bind(this), $.inited.then(() => {
                Le(() => this.cryptoCurrency, () => {
                    this.inited && je.setState({
                        lastCryptoCurrency: this.cryptoCurrency
                    })
                }), Le(() => this.fiatCurrency, () => {
                    this.inited && je.setState({
                        lastFiatCurrency: this.fiatCurrency
                    })
                }), Le(() => this.nftCurrency, () => {
                    this.inited && je.setState({
                        currencyName: this.nftCurrency
                    })
                }), this.asyncCurrency()
            })
        }
        get cryptoList() {
            return x.list.filter(a => a.currencyType === O.VIRTUAL || a.currencyType === O.CHAIN)
        }
        get fiatList() {
            return x.list.filter(a => a.currencyType === O.FIAT)
        }
        get nftList() {
            return x.list.filter(a => a.currencyType === O.MNFT)
        }
        get depositCryptoList() {
            return x.sortSelectList(this.cryptoList, "deposit", Y.currencyName)
        }
        get withdrawCryptoList() {
            return x.sortSelectList(this.cryptoList, "withdraw", Y.currencyName)
        }
        async getFiatList(a) {
            let t = [];
            t = a ? await I() : await We();
            const r = [];
            return t.forEach(i => {
                const n = x.dict[i];
                n && r.push(n)
            }), x.sortSelectList(r, "fiat", Y.currencyName)
        }
        async asyncCurrency() {
            let a, t, r;
            if ($.login) {
                const i = await je.initData;
                a = this.getSafeCurrency(i.lastCryptoCurrency || i.currencyName), t = this.nftList[0], r = i.lastFiatCurrency || ""
            } else a = this.cryptoList[0], t = this.nftList[0];
            a && (this.cryptoCurrency = a.currencyName), t && (this.nftCurrency = t.currencyName), r && (this.fiatCurrency = r), this.inited = !0
        }
        getSafeCurrency(a) {
            const t = x.dict[a];
            return t ? t.currencyType === O.CHAIN || t.currencyType === O.VIRTUAL ? t : this.cryptoList[0] : t || this.cryptoList[0]
        }
        async setCutCurrency(a, t = !1) {
            let r, i;
            const n = x.dict[a];
            return n ? (i = a, n.currencyType === O.MNFT ? (this.nftCurrency = a, r = O.MNFT) : n.currencyType === O.FIAT ? (this.fiatCurrency = a, r = O.FIAT) : (this.cryptoCurrency = a, r = O.CHAIN)) : (i = this.cryptoCurrency, r = O.CHAIN), t && this.currency !== i && ye.track.trackEvent("deposit_coin_click", {
                coin_type: this.currency,
                deposit_type: r
            }), this.currency = i, r
        }
        getCutType() {
            return x.dict[this.currency].currencyType
        }
        getCutCurrency(a) {
            return a === O.FIAT ? this.fiatCurrency : a === O.MNFT ? this.nftCurrency : this.cryptoCurrency
        }
    }
    let I, A;
    Is = new D, We = Se(re.getDepositList), I = Se(J.getWithdrawList), bs = Se(() => h.get("/nft/token/list/")), Ls = q.timeMemoize(async () => {
        const {
            areaCode: s,
            distinctId: a
        } = await $.getCompatibleData();
        return h.post("/home/rec/crypto/", {
            areaCode: s,
            distinctId: a,
            pageSize: 5,
            page: 1,
            sectionId: "deposit_crypto_recommend"
        })
    }, {
        timeout: 8e7
    }), A = "/assets/safety.b2e7a443.png", $e = function({
        widthdraw: s
    }) {
        const a = j();
        return e.jsxs("div", {
            className: M(As, "safe-box"),
            children: [e.jsx("img", {
                src: A,
                alt: ""
            }), e.jsx("div", {
                children: s ? a("wallet.safety1", Ie.buildHost) : a("wallet.safety", Ie.buildHost)
            }), e.jsxs("div", {
                className: "txt",
                children: [a("wallet.safety2"), " ", e.jsx("span", {
                    className: "live-support",
                    onClick: () => {
                        var t;
                        return (t = Tn) == null ? void 0 : t.openLiveSupport()
                    },
                    children: a("common.Live_supports")
                })]
            })]
        })
    };
    const As = "s1sqdflw";

    function Ds({
        currency: s,
        method: a
    }) {
        if (s === "KRWFIAT") {
            if (a.toLocaleLowerCase() === "vacpay") return e.jsx(Rs, {});
            if (a.toLocaleLowerCase() === "gluwa") return e.jsx(Fs, {})
        } else if (s === "THBFIAT") return e.jsx(Bs, {});
        return null
    }

    function Bs() {
        return e.jsxs("div", {
            className: "cl-primary",
            children: ["\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E23\u0E23\u0E30\u0E27\u0E31\u0E07:", e.jsx("div", {
                children: "\u0E42\u0E1B\u0E23\u0E14\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E25\u0E47\u0E01\u0E46 \u0E17\u0E28\u0E19\u0E34\u0E22\u0E21\u0E1A\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E15\u0E34\u0E21\u0E40\u0E07\u0E34\u0E19\u0E02\u0E2D\u0E07\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E01\u0E23\u0E2D\u0E01\u0E15\u0E32\u0E21\u0E19\u0E31\u0E49\u0E19 \u0E21\u0E34\u0E09\u0E30\u0E19\u0E31\u0E49\u0E19\u0E40\u0E07\u0E34\u0E19\u0E1D\u0E32\u0E01\u0E2D\u0E32\u0E08\u0E44\u0E21\u0E48\u0E40\u0E02\u0E49\u0E32\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"
            })]
        })
    }

    function Fs() {
        return e.jsxs("div", {
            className: He,
            children: [e.jsx("div", {
                children: "*\uC785\uAE08/\uCD9C\uAE08 \uC804 \uBC18\uB4DC\uC2DC \uCC38\uACE0\uD574 \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."
            }), e.jsx("div", {
                children: "\uACC4\uC88C\uBC1C\uAE09\uC740 \uCD5C\uCD08 1\uD68C \uD734\uB300\uD3F0 \uBCF8\uC778\uC778\uC99D\uC744 \uD1B5\uD558\uC5EC \uC9C4\uD589\uB418\uBA70, 1\uD68C \uC778\uC99D \uD6C4\uC5D0\uB294 \uC778\uC99D\uC694\uCCAD \uC5C6\uC774 \uACC4\uC88C \uBC1C\uAE09\uC774 \uAC00\uB2A5 \uD569\uB2C8\uB2E4. \uC778\uC99D \uD6C4 \uC2E0\uCCAD\uC774\uB825\uC5D0\uC11C \uC790\uC138\uD788\uBCF4\uAE30\uB85C \uACC4\uC88C\uBC88\uD638\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694. KRW \uC785\uAE08 \uC774\uB825\uC774 \uC788\uB294 \uACC4\uC88C\uB9CC \uCD9C\uAE08\uC2E0\uCCAD\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC740\uD589 \uC810\uAC80 \uC2DC\uAC04\uC5D0\uB294 \uC785\uAE08/\uCD9C\uAE08 \uC694\uCCAD\uC774 \uBD88\uAC00\uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "\uC720\uC758\uC0AC\uD56D"
            }), e.jsx("p", {
                children: "1.\uACC4\uC88C \uC785\uAE08\uC740 \uBC18\uB4DC\uC2DC \uBCF8\uC778 \uACC4\uC88C\uB85C\uB9CC \uC785\uAE08/\uCD9C\uAE08\uB418\uBA70 \uD574\uB2F9 \uC740\uD589 \uC804\uC6A9\uC571\uC5D0\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4.(\uBCF8\uC778\uACC4\uC88C\uAC00 \uC544\uB2D0\uC2DC \uBC18\uD658\uCC98\uB9AC\uB418\uB2C8 \uACE0\uAC1D\uC13C\uD130\uB85C \uBB38\uC758\uD574\uC8FC\uC2ED\uC2DC\uC694)"
            }), e.jsx("p", {
                children: "2.\uBCF8\uC778 \uC785\uCD9C\uAE08 \uACC4\uC88C\uC758 \uC815\uC2DD \uC740\uD589\uC571\uC774 \uC544\uB2CC \uD1A0\uC2A4,\uD398\uC774, ATM\uC740 \uC785\uAE08\uC774 \uBD88\uAC00\uB2A5 \uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "3. \uCD9C\uAE08 \uC2DC \uC785\uAE08\uC561\uC758 \uCD5C\uC18C 100%\uC758 \uB864\uB9C1\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uCD9C\uAE08\uCC98\uB9AC \uC2DC\uAC04\uC740 \uC57D \uCD5C\uC18C 5\uBD84\uC5D0\uC11C \uCD5C\uB300 24\uC2DC\uAC04\uC774 \uC18C\uC694\uB420 \uC218 \uC788\uC73C\uBA70 \uC21C\uCC28\uC801\uC73C\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "4.\uCD9C\uAE08 \uC2DC \uB9CC\uC6D0\uB2E8\uC704\uB85C \uCD9C\uAE08 \uC2E0\uCCAD\uC744 \uD574\uC8FC\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "5.\uB864 \uC624\uBC84 \uC694\uAD6C \uC0AC\uD56D\uC774 \uCDA9\uC871\uB418\uC9C0 \uC54A\uC744 \uACBD\uC6B0 \uB2F9\uC0AC\uB294 \uC778\uCD9C\uC744 \uAC70\uBD80\uD560 \uAD8C\uB9AC\uB97C \uAC00\uC9D1\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "6.1\uD68C \uCD5C\uC18C1\uB9CC\uC6D0 \uC774\uC0C1 \uCD5C\uB300 500\uB9CC\uC6D0 \uAE4C\uC9C0 \uC785\uAE08\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uCD9C\uAE08\uC740 \uCD5C\uC18C 3\uB9CC\uC6D0 \uC774\uC0C1 \uCD5C\uB300 500\uB9CC\uC6D0\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
            })]
        })
    }

    function Rs() {
        return e.jsxs("div", {
            className: He,
            children: [e.jsx("div", {
                children: "*\uC785\uAE08,\uCD9C\uAE08 \uC804 \uBC18\uB4DC\uC2DC \uCC38\uACE0\uD558\uC5EC \uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4. (\uBA3C\uC800 \uD31D\uC5C5\uC744 \uD56D\uC0C1\uD5C8\uC6A9\uD574\uC8FC\uC138\uC694. "
            }), e.jsx("div", {
                children: "\uAC00\uC0C1\uACC4\uC88C \uBC1C\uAE09\uC740 \uCD5C\uCD08 \uC785\uAE08\uD560 \uACC4\uC88C\uC758 1\uC6D0 \uC778\uC99D\uC744 \uD1B5\uD574 \uC9C4\uD589\uB418\uBA70 \uC774\uD6C4\uC5D0\uB294 \uAE30\uC874 \uBC1C\uAE09\uB41C \uACC4\uC88C\uB85C\uB9CC \uC785\uAE08\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. KRW \uC785\uAE08\uC774\uB825\uC774 \uC788\uB294 \uACC4\uC88C\uB9CC \uCD9C\uAE08\uC2E0\uCCAD\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC740\uD589 \uC810\uAC80 \uC2DC\uAC04\uC5D0\uB294 \uC785\uAE08,\uCD9C\uAE08 \uC694\uCCAD\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "\uC720\uC758\uC0AC\uD56D"
            }), e.jsx("p", {
                children: "1.\uAC00\uC0C1\uACC4\uC88C \uC785\uAE08\uC740 \uBC18\uB4DC\uC2DC \uACC4\uC88C \uBC1C\uAE09 \uC2DC \uC791\uC131\uD55C \uB4F1\uB85D\uB41C \uC785\uCD9C\uAE08\uACC4\uC88C\uB85C\uB9CC \uC785,\uCD9C\uAE08\uB418\uBA70 \uD574\uB2F9 \uC740\uD589 \uC804\uC6A9\uC571\uC5D0\uC11C\uB9CC \uAC00\uB2A5\uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "2.\uBCF8\uC778 \uC785\uCD9C\uAE08\uACC4\uC88C\uC758 \uC815\uC2DD \uC740\uD589\uC571\uC774 \uC544\uB2CC \uD1A0\uC2A4, \uD398\uC774, ATM \uC740 \uC785\uAE08\uC774 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "3.\uCD9C\uAE08 \uC2DC\uC5D0 \uC785\uAE08\uC561\uC758 \uCD5C\uC18C 100%\uC758 \uB864\uB9C1\uC774 \uD544\uC694\uD569\uB2C8\uB2E4. \uCD9C\uAE08\uCC98\uB9AC \uAE30\uAC04\uC740 \uC57D \uCD5C\uC18C 5\uBD84\uC5D0\uC11C \uCD5C\uB300 24\uC2DC\uAC04\uC774 \uC18C\uC694\uB420 \uC218 \uC788\uC73C\uBA70 \uC21C\uCC28\uC801\uC73C\uB85C \uCC98\uB9AC\uB429\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "4.\uCD9C\uAE08\uC2DC \uB9CC\uC6D0\uB2E8\uC704\uB85C \uCD9C\uAE08\uC2E0\uCCAD\uC744 \uD574\uC8FC\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "5.\uB864\uC624\uBC84 \uC694\uAD6C \uC0AC\uD56D\uC774 \uCDA9\uC871\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0 \uB2F9\uC0AC\uB294 \uC778\uCD9C\uC744 \uAC70\uBD80\uD560 \uAD8C\uB9AC\uB97C \uAC00\uC9D1\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "6.1\uD68C \uCD5C\uC18C 1\uB9CC \uC6D0 \uC774\uC0C1 \uCD5C\uB300 300\uB9CC \uC6D0\uAE4C\uC9C0 \uC785\uAE08\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. \uCD9C\uAE08\uC740 \uCD5C\uC18C 3\uB9CC \uC6D0 \uC774\uC0C1 \uCD5C\uB300 700\uB9CC \uC6D0\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "7.5000$(\uB610\uB294 \uC774\uC5D0 \uC0C1\uC751\uD558\uB294 \uAE08\uC561)\uC744 \uCD08\uACFC\uD558\uC5EC \uCD9C\uAE08\uD558\uB294 \uACBD\uC6B0\uC5D0\uB294 \uCC98\uB9AC\uD558\uB294\uB370 \uB354 \uB9CE\uC740 \uC2DC\uAC04\uC774 \uC18C\uC694\uB418\uBA70 \uC2E0\uC6D0\uD655\uC778\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
            }), e.jsx("p", {
                children: "8.\uB18D\uD611\uC740\uD589\uC758 \uACBD\uC6B0 \uB18D\uD611\uC911\uC559\uD68C(\uB18D\uD611\uC740\uD589), \uB18D\uD611\uC9C0\uC5ED\uB2E8\uC704\uC740\uD589\uC73C\uB85C \uBC18\uB4DC\uC2DC \uAD6C\uBD84\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."
            })]
        })
    }
    const He = "s1ftej9v";

    function ee(s, a) {
        return t => s === "KRWFIAT" ? (Math.ceil(t / 1e4) * 1e4).toString() : String(s === "CADFIAT" ? t : Math.floor(t))
    }

    function ze(s, a) {
        let t = x.locale2amount(s, a, 1);
        return a === "KRWFIAT" ? Math.ceil(t / 1e4) * 1e4 : t
    }

    function Os(s) {
        return s === 0 ? "1st" : s === 1 ? "2nd" : s === 2 ? "3rd" : "4th"
    }

    function Ge(s) {
        const a = j();
        return e.jsxs(e.Fragment, {
            children: [s.isSpecial ? e.jsx("div", {
                className: "tit",
                children: a("page.vip.offer.special_bonus")
            }) : e.jsxs("div", {
                className: "tit",
                children: [s.weeks && s.weeks.length > 0 ? "" : Os(s.num), " ", a("common.deposit_bonus")]
            }), e.jsxs("div", {
                children: [s.rate, " ", a("page.promotion.deposit.upto"), " ", s.bonus, " "]
            }), e.jsx("div", {
                children: a("page.bcd.mindeposit", s.amount)
            })]
        })
    }

    function Us(s) {
        const a = De();
        return e.jsx(Be, {
            delay: 0,
            title: e.jsx("div", {
                className: Ye,
                children: e.jsx(Ge, C({}, s))
            }),
            children: e.jsx("div", {
                className: "btn",
                onClick: () => a && Z.push(e.jsx(ce, {
                    className: Ye,
                    closeable: !0,
                    children: e.jsx(Ge, C({}, s))
                })),
                children: e.jsx(k, {
                    name: "Inform"
                })
            })
        })
    }
    we = function({
        currency: s,
        classsName: a,
        showTit: t
    }) {
        const r = Y.getSafeList(s),
            i = Y.specialDeposit,
            n = Y.rechargeValidNum;
        if (s === "BCL" || x.specialCurrencys.has(s) || (n === 4 || r.length === 0) && !Y.specialDeposit) return null;
        const l = x.getAlias(s),
            c = r[0],
            d = i ? q.formateAmount(ze(i.minDeposit, s), 3, !0) + " " + l : q.formateAmount(ze(c.rechargeUsd, s), 3, !0) + " " + l,
            m = i ? new W(i.maxBonusRatio).mul(100).toString() + "%" : new W(c.bonusRatio).mul(100).toString() + "%",
            u = i ? q.formateAmount(x.convertCurrency(i.maxDeposit, i.currency, s)) + " " + x.getAlias(s) : q.formateAmount(x.convertCurrency(c.maximumBcd, c.bonusCurrencyName, s)) + " " + x.getAlias(s);
        return e.jsxs("div", {
            className: M(Ms, a),
            children: [e.jsx("div", {
                children: t && e.jsxs(Ae, {
                    k: "page.bcd.new.tip",
                    children: [e.jsx("b", {
                        children: m
                    }), e.jsx("b", {
                        className: "amount",
                        children: d
                    })]
                })
            }), e.jsx(Us, {
                num: n,
                amount: d,
                rate: m,
                bonus: u,
                weeks: i ? [] : c.weeks,
                isSpecial: !!i
            })]
        })
    };
    const Ms = "s1d505hu",
        Ye = "th98g5g";
    async function Ze(s, a) {
        const t = document.createElement("a");
        t.href = s, t.setAttribute("download", `${a}.png`), document.body.appendChild(t), t.click(), t.remove()
    }

    function Ps(s, a, t) {
        return a ? Ln.get(s, {
            responseType: "blob"
        }).then(r => {
            const i = window.URL.createObjectURL(new Blob([r.data]));
            Ze(i, t)
        }) : Ze(s, t)
    }
    fe = function({
        url: s,
        checkedUrl: a,
        fileName: t
    }) {
        const r = j(),
            i = !!/http/.exec(s),
            {
                qrnode: n,
                img: l
            } = Dn({
                url: s,
                qrimg: a && i ? s : void 0,
                options: {
                    margin: 2,
                    width: 188
                }
            });
        return e.jsxs("div", {
            className: Es,
            children: [e.jsxs("div", {
                className: M("payment-qrcode", i && "qrcode-panding"),
                children: [n, e.jsx("div", {
                    className: "scan",
                    children: r("common.deposit_scan")
                })]
            }), e.jsxs(U, {
                className: "download",
                onClick: () => Ps(l, i, t != null ? t : `${Ie.host}-qrcode`),
                children: [e.jsx(k, {
                    name: "Download"
                }), "Save QR Code"]
            })]
        })
    };
    const Es = "s14ygw3";

    function Vs({
        currency: s,
        channel: a
    }) {
        const t = j(),
            {
                data: r,
                error: i
            } = ge(() => h.get("/payment/deposit/fiat/user/qrcodetext/"));
        if (i) return e.jsx(oe, {
            children: i.message
        });
        const n = a.toLocaleLowerCase() === "vcreditvsi";
        return e.jsxs("div", {
            className: M($s, "page-margin"),
            children: [e.jsx(we, {
                showTit: !0,
                currency: s
            }), e.jsxs("div", {
                className: "qr-wrap",
                children: [e.jsx("div", {
                    className: "box-subtit",
                    children: t("wallet.new.deposit_details")
                }), e.jsxs("div", {
                    className: "notice-wrap",
                    children: [e.jsx(k, {
                        name: "Caution"
                    }), e.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: t(n ? "wallet.fiat.vcreditos_tip" : "wallet.fiat.new.tenminutes")
                        }
                    })]
                }), r ? e.jsx(fe, {
                    url: r.text
                }) : e.jsx(ne, {})]
            })]
        })
    }
    const $s = "s1xyy8q9",
        qs = Q.memo(function(s) {
            const a = X(),
                {
                    data: t,
                    expiredTime: r,
                    currency: i,
                    orderId: n
                } = s,
                {
                    securityCode: l,
                    opt: c
                } = t,
                d = j(),
                m = y => {
                    q.copyToClipboard(y), F(d("common.messages.copy_success"))
                },
                u = () => {
                    Z.close(), a(`/wallet/transaction?assets=${i}#/deposit_detail/${s.orderId}/${i}`)
                },
                o = q.serverTime().toLocaleString();
            return e.jsxs(ce, {
                className: M(Ks, l && "style"),
                closeable: !0,
                children: [e.jsx("img", {
                    className: "img",
                    src: A,
                    alt: ""
                }), e.jsx("div", {
                    className: "tit",
                    children: d("page.recharge.state_recharging")
                }), e.jsxs("div", {
                    className: "payment",
                    children: [e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: d("wallet.fiat.new.payment_method")
                        }), e.jsx("div", {
                            className: "val",
                            children: e.jsx("img", {
                                src: s.icon
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: d("wallet.orderid")
                        }), e.jsxs("div", {
                            className: "val",
                            children: [n, " ", e.jsx("button", {
                                onClick: () => m(n),
                                children: e.jsx(k, {
                                    name: "Copy"
                                })
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: d("common.time")
                        }), e.jsx("div", {
                            className: "val",
                            children: o
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: d("page.task.expire")
                        }), e.jsx("div", {
                            className: "val",
                            children: e.jsx(hs, {
                                endTime: r,
                                children: y => {
                                    const v = y.days * 24 + y.hours,
                                        _ = v < 10 ? "0" + v : v,
                                        P = y.minutes < 10 ? "0" + y.minutes : y.minutes,
                                        b = y.seconds < 10 ? "0" + y.seconds : y.seconds;
                                    return e.jsxs("p", {
                                        className: "time",
                                        children: [_, ":", P, ":", b]
                                    })
                                }
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: d("wallet.deposit_amount")
                        }), e.jsxs("div", {
                            className: "val amount",
                            children: [s.amount, " ", x.getAlias(i)]
                        })]
                    })]
                }), l && e.jsxs("div", {
                    className: "sercurity-code",
                    children: [e.jsxs("div", {
                        className: "tit",
                        children: [d("common.security_code"), ": "]
                    }), e.jsxs("div", {
                        className: "desc-warning",
                        children: ["(", d("wallet.fiat.payment_tip"), ")"]
                    }), e.jsxs("div", {
                        className: "val cl-primary",
                        onClick: () => m(l),
                        children: [l, " ", e.jsx(k, {
                            name: "Copy"
                        })]
                    })]
                }), c && e.jsxs("div", {
                    className: "opt",
                    onClick: () => m(c),
                    children: ["opt: ", e.jsx("b", {
                        children: c
                    }), " ", e.jsx(k, {
                        name: "Copy"
                    })]
                }), e.jsx(U, {
                    className: "sub-btn",
                    type: "conic",
                    onClick: u,
                    children: d("wallet.new.deposit_finish")
                }), s.continueDeposit && e.jsx(U, {
                    className: "continue-btn",
                    onClick: s.continueDeposit,
                    children: d("wallet.continue.deposit")
                })]
            })
        }),
        Ks = "pcuwj1x",
        Ws = "/assets/check.7fdb8d80.png";

    function Hs(s) {
        return x.numberWithCommas(s)
    }

    function Qe(s) {
        const a = Y.getSafeList(s),
            t = Y.specialDeposit;
        if (t) {
            const r = x.locale2amount(t.minDeposit, s, 1),
                i = t.maxBonusRatio,
                n = t.maxDeposit;
            return [{
                amount: r,
                ratio: i,
                maxUsd: n
            }]
        }
        return a.map(r => {
            const i = x.locale2amount(r.rechargeUsd, s, 1),
                n = r.bonusRatio,
                l = r.maximumBcd;
            return {
                amount: i,
                ratio: n,
                maxUsd: l
            }
        }).reverse()
    }

    function zs({
        amount: s,
        currency: a,
        cs: t
    }) {
        const r = Qe(a),
            i = j();
        if (!r || r.length === 0) return null;
        const n = r.find(m => Number(s) >= m.amount);
        if (!n) return null;
        const l = x.convertCurrency(n.maxUsd, "BCD", a),
            c = new W(s).mul(n.ratio).toNumber(),
            d = c > l ? l.toFixed(1) : c.toFixed(1);
        return e.jsx("div", {
            className: "bonus-tips cl-primary",
            children: i("page.casino.extra") + " +" + t + d
        })
    }

    function Gs(s, a, t, r, i) {
        const n = [s];
        a = Math.ceil(Math.max(a, r));
        for (let l = 1; l < String(s).length; l++) {
            const c = new W(s).div(Math.pow(10, l)).toNumber();
            if (c > a + 10) {
                const d = ee(i)(c);
                n.unshift(Number(d))
            }
        }
        if (n.unshift(Number(ee(i)(a))), t) {
            const l = n.findIndex(c => c >= t);
            n.splice(l, 0, t)
        }
        return n
    }
    const Ys = {
        BRLFIAT: {
            Pagsmile: 299
        }
    };

    function Zs(s, a, t, r) {
        const i = Ys[s];
        if (i) {
            const n = i[a];
            return n && t <= n && r > n ? n : 0
        }
        return 0
    }

    function Qs({
        max: s,
        min: a,
        method: t,
        amount: r,
        currencyName: i,
        cs: n,
        onChangeAmount: l,
        amountList: c
    }) {
        const d = Qe(i),
            m = d && d[0] ? d[0].amount : 0,
            u = Zs(i, t, a, s),
            o = c ? c.map(Number) : Gs(s, a, u, m, i);
        return f.useEffect(() => {
            o.length > 0 && l(o[0])
        }, []), e.jsx("div", {
            className: Xs,
            children: o.map(y => {
                const v = d.find(_ => y >= _.amount);
                return e.jsxs("div", {
                    className: M("item", Number(r) === y && "active"),
                    onClick: () => l(y),
                    children: [e.jsxs("button", {
                        type: "button",
                        children: [n, " ", Hs(y)]
                    }), v && e.jsxs("div", {
                        className: "ratio",
                        children: ["+", new W(v.ratio).mul(100).toString() + "%"]
                    }), e.jsx("img", {
                        className: "img-check",
                        src: Ws,
                        alt: ""
                    })]
                }, y)
            })
        })
    }
    const Xs = "so46un3";

    function Js({
        method: s,
        currency: a,
        val: t
    }) {
        return s.toLocaleLowerCase() === "skypay" && a === "JPYFIAT" ? e.jsxs("div", {
            className: aa,
            children: ["\u5165\u91D1\u6642\u306B\u3001\u304A\u540D\u524D\u306E\u524D\u306B", e.jsx("span", {
                className: "red",
                children: "Note Number"
            }), "\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3010\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3011", e.jsx("span", {
                className: "red",
                children: "Note Number"
            }), "\u306E\u307F\u3092\u5165\u529B\u3057\u3066\u9001\u91D1\u3055\u308C\u307E\u3059\u3068\u3001\u53CD\u6620\u307E\u3067\u306B\u6642\u9593\u304C\u639B\u304B\u308B\u53EF\u80FD\u6027\u304C\u3054\u3056\u3044\u307E\u3059\u3002\u4E0B\u8A18\u306E\u3088\u3046\u306B\u3001", e.jsx("span", {
                className: "red",
                children: "Note Number"
            }), "\u3068\u304A\u540D\u524D\u3092\u8A18\u8F09\u306E\u4E0A\u9001\u91D1\u3057\u3066\u304F\u3060\u3055\u3044\u3002\uFF08\u4F8B\uFF09", e.jsx("span", {
                className: "red",
                children: t
            }), "\u30E4\u30DE\u30C0 \u30BF\u30ED\u30A6"]
        }) : null
    }

    function ea({
        value: s,
        label: a
    }) {
        const t = j();

        function r() {
            q.copyToClipboard(String(s)), F(t("common.messages.copy_success"))
        }
        return e.jsxs("div", {
            className: "item",
            children: [e.jsxs("div", {
                className: "label",
                children: [a, ":"]
            }), e.jsxs("div", {
                className: "value",
                children: [e.jsx("div", {
                    className: "txt",
                    children: s
                }), e.jsx(U, {
                    onClick: r,
                    children: e.jsx(k, {
                        name: "Copy"
                    })
                })]
            })]
        })
    }

    function sa(s, a, t) {
        if (s) {
            const r = JSON.parse(s),
                i = e.jsx("div", {
                    className: "paylist",
                    children: r.map((l, c) => {
                        const d = Object.keys(l).filter(m => m !== "logo");
                        return e.jsx("div", {
                            className: "cont",
                            children: d.map((m, u) => e.jsx(ea, {
                                label: m,
                                value: l[m]
                            }, u))
                        }, c)
                    })
                }),
                n = e.jsx(Js, {
                    method: a,
                    currency: t,
                    val: r[0]["Note Number"]
                });
            return {
                pldom: i,
                tipdom: n
            }
        } else return {
            pldom: null,
            tipdom: null
        }
    }
    const aa = "so1s3kw";

    function na(s) {
        return s && ye.createPath(s, "img2")
    }
    const ta = s => s === 1 ? "success" : s === 2 ? "error" : "waiting";

    function ia(s) {
        const a = j();
        if (typeof s == "number") switch (s) {
            case 0:
                return a("wallet.status.pending");
            case 6:
                return a("wallet.status.hold");
            case 2:
                return a("wallet.status.appeal_failed");
            case 1:
                return a("wallet.status.successful");
            default:
                return a("wallet.status.pending")
        } else return ""
    }

    function ra(s) {
        const a = [];
        let t = 1,
            r = 1;
        return s.forEach(i => {
            i && (/\.pdf/.exec(i) ? (a.push({
                type: "pdf",
                field: `proof${r}`,
                value: i
            }), r++) : (a.push({
                type: "pic",
                field: `img${t}`,
                value: i
            }), t++))
        }), a
    }

    function la(s) {
        let a = [],
            t = [];
        return s && s.forEach(r => {
            r.type === "pic" && a.push(r), r.type === "data" && t.push(r)
        }), {
            fiatImgs: a,
            dataInput: t
        }
    }

    function ca(s) {
        return h.get(`/payment/withdraw/fiat/order/${s}/`)
    }

    function oa(s) {
        return h.get(`/payment/deposit/fiat/order/${s}/`)
    }
    var be;
    (s => {
        s.fn = {
            useReviewStatus: ia,
            getImgPath: na,
            getImgsData: ra,
            getWithdrawData: ca,
            getDepositOrder: oa,
            getDefault: la,
            getReviewStatus: ta
        }
    })(be || (be = {})), Oe = be;

    function da({
        currency: s,
        channel: a
    }) {
        const {
            lang: t
        } = xs();
        return s === "RUBFIAT" && a === "OctoPay-RUB" ? t === "ru" ? e.jsxs("div", {
            className: "Utr-deposit-tip",
            children: [e.jsx("div", {
                children: "\u25CF \u0421\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0432\u044B\u0448\u0435"
            }), e.jsx("div", {
                children: "\u25CF \u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u0430\u043D\u043A\u0430"
            }), e.jsx("div", {
                children: "\u25CF \u041E\u0434\u043D\u0438\u043C \u043F\u043B\u0430\u0442\u0435\u0436\u043E\u043C \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u044D\u0442\u043E\u0442 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B \u0441\u0443\u043C\u043C\u0443 \u0434\u043B\u044F \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
            }), e.jsx("div", {
                children: "\u25CF \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435 \u0434\u0435\u043D\u0435\u0436\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432"
            }), e.jsx("div", {
                children: "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0432 \u044D\u0442\u0443 \u0441\u0443\u043C\u043C\u0443 \u043D\u0435 \u0432\u0445\u043E\u0434\u0438\u0442 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F \u0431\u0430\u043D\u043A\u0430. \u041D\u043E\u043C\u0435\u0440 \u043A\u0430\u0440\u0442\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043F\u043B\u0430\u0442\u0435\u0436 \u0443\u043D\u0438\u043A\u0430\u043B\u0435\u043D \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430."
            })]
        }) : e.jsxs("div", {
            className: "Utr-deposit-tip",
            children: [e.jsx("div", {
                children: "\u25CF Copy the card number"
            }), e.jsx("div", {
                children: "\u25CF Open your bank app"
            }), e.jsx("div", {
                children: "\u25CF Transfer charge to card number in one payment"
            }), e.jsx("div", {
                children: "\u25CF Expect cash receipts"
            }), e.jsx("div", {
                children: "Please note that this amount does not include bank fees. The card number you send the payment is unique and only valid for one deposit."
            })]
        }) : null
    }

    function Xe(s) {
        return /http/.exec(s) ? s : Oe.fn.getImgPath(s)
    }

    function ua({
        card: s
    }) {
        const a = j(),
            t = s.split(",");
        return t.length > 1 ? e.jsx("div", {
            className: "card-list",
            children: t.map((r, i) => e.jsx("div", {
                children: r
            }, i))
        }) : e.jsx(Sn, {
            label: a("wallet.bank_account"),
            value: s
        })
    }

    function ma(s) {
        if (s.length < 20) return s;
        const a = s.substring(0, 10),
            t = s.substring(s.length - 10);
        return `${a}...${t}`
    }

    function pa({
        qrCode: s,
        paylist: a,
        method: t
    }) {
        const r = s && !a,
            i = j();

        function n() {
            q.copyToClipboard(String(s)), F(i("common.messages.copy_success"))
        }
        return e.jsxs(e.Fragment, {
            children: [s && e.jsx(fe, {
                url: s,
                checkedUrl: !0,
                fileName: t
            }), r && e.jsxs("div", {
                className: "copy-code",
                children: [e.jsx("div", {
                    className: "txt",
                    children: "Code"
                }), e.jsxs("div", {
                    className: "code",
                    children: [ma(s), " ", e.jsx("button", {
                        onClick: n,
                        children: e.jsx(k, {
                            name: "Copy"
                        })
                    })]
                })]
            })]
        })
    }
    Pe = function(s) {
        const {
            currency: a,
            icon: t,
            amount: r,
            res: i,
            showUtr: n,
            showImadeDeposit: l
        } = s, c = a === "PKRFIAT", {
            method: d,
            orderId: m
        } = i, u = ue(), {
            qrCode: o,
            card: y,
            payList: v
        } = i.data, [_, P] = f.useState(""), b = j(), E = X(), {
            pldom: K,
            tipdom: T
        } = sa(v, d, a), p = L => {
            try {
                q.copyToClipboard(L.toString()), F(b("common.messages.copy_success"))
            } catch (R) {
                F(R)
            }
        }, w = () => {
            u.close(), E(`/wallet/transaction?type=deposit&assets=${a}#/deposit_detail/${i.orderId}/${a}`)
        }, S = () => re.updateUtr(m, _).then(w).catch(F), g = () => h.post("/payment/deposit/fiat/order/paymentConfirmation/", {
            orderId: m
        }).then(w).catch(F), B = d === "MPesa" && i.channel === "MPesa_Express";
        return e.jsx(te, {
            className: ha,
            title: b("wallet.fiat.new.payment_method"),
            children: e.jsxs(de, {
                children: [e.jsxs("div", {
                    className: "head",
                    children: [t && e.jsx("img", {
                        className: "logo",
                        src: t,
                        alt: `${d}.png`
                    }), e.jsxs("div", {
                        className: "amount-wrap",
                        children: [e.jsx("div", {
                            className: "tit",
                            children: b("wallet.deposit_amount")
                        }), e.jsxs("div", {
                            className: "amount",
                            children: [x.getAlias(a), " ", x.numberWithCommas(r), " ", e.jsx(U, {
                                className: "copy-btn",
                                onClick: () => p(r),
                                children: e.jsx(k, {
                                    name: "Copy"
                                })
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "box",
                    children: [e.jsx("div", {
                        className: "box-subtit",
                        children: b("wallet.new.deposit_details")
                    }), e.jsxs("div", {
                        className: "notice-wrap",
                        children: [e.jsx(k, {
                            name: "Caution"
                        }), e.jsxs("div", {
                            children: [B ? e.jsx("span", {
                                children: b("wallet.fiat.new.mpesa")
                            }) : e.jsx("span", {
                                dangerouslySetInnerHTML: {
                                    __html: b(n ? c ? "wallet.fiat.new.tenminutes.opt" : "wallet.fiat.new.tenminutes.utr" : "wallet.fiat.new.tenminutes")
                                }
                            }), s.res.guideUrl && e.jsx("a", {
                                href: Xe(s.res.guideUrl),
                                target: "_blank",
                                children: b("wallet.howto_deposit")
                            }), s.res.guideVideoUrl && e.jsx("a", {
                                href: Xe(s.res.guideVideoUrl),
                                target: "_blank",
                                children: b("wallet.see_video")
                            })]
                        })]
                    }), e.jsx(pa, {
                        qrCode: o,
                        paylist: v,
                        method: d
                    }), K]
                }), y && e.jsx("div", {
                    className: "box",
                    children: e.jsx(ua, {
                        card: y
                    })
                }), e.jsx(da, {
                    currency: s.currency,
                    channel: s.res.channel
                }), n ? e.jsxs(e.Fragment, {
                    children: [e.jsxs("div", {
                        className: "box",
                        children: [e.jsx("div", {
                            className: "box-tit",
                            children: b("wallet.fiat.new.already_paid")
                        }), e.jsx(me, {
                            className: "utr-input",
                            label: c ? "OTP code" : "UTR/Reference No.",
                            placeholder: b("wallet.fiat.new.enter", c ? "OTP code" : "UTR number"),
                            value: _,
                            onChange: P,
                            children: e.jsx(k, {
                                name: "Locked"
                            })
                        })]
                    }), e.jsx(U, {
                        className: "sub-btn",
                        onClick: S,
                        type: "conic",
                        disabled: !_,
                        children: b("common.submit")
                    })]
                }) : e.jsx(U, {
                    className: "sub-btn",
                    onClick: l ? g : w,
                    type: "conic",
                    children: b("wallet.new.deposit_finish")
                }), T]
            })
        })
    };
    const ha = "sbgkwo4";

    function xa(s) {
        return e.jsxs("div", {
            className: "select-wrap",
            children: [e.jsx("label", {
                children: s.tit
            }), e.jsx(pe, {
                disabled: s.item.readOnly,
                value: s.val,
                options: s.opt,
                onChange: s.onChange
            })]
        })
    }

    function ya(s) {
        const a = {};
        for (var t in s) typeof s[t] == "string" ? a[t] = s[t].trim() : a[t] = s[t];
        return a
    }

    function ja(s) {
        const a = {};
        return s.reduce((t, r) => (t[r.valueKey] = r.defaultValue, t), a)
    }

    function ga(s, a, t) {
        let r = "";
        const i = t.validPatterns;
        if (i.length > 0)
            if (t.parentValueKey) {
                const n = s[t.parentValueKey],
                    l = i.find(c => c.validKey === n);
                l && (r = new RegExp(l.validRule).test(a) ? "" : l.validMessage)
            } else {
                const n = i[0];
                r = new RegExp(n.validRule).test(a) ? "" : n.validMessage
            }
        return r
    }

    function va({
        data: s,
        item: a,
        onChange: t,
        isPassWord: r
    }) {
        const i = s[a.valueKey],
            [n, l] = f.useState(""),
            c = a.label,
            d = m => {
                const u = ga(s, m, a);
                l(u), t(m)
            };
        return r ? e.jsx(ys, {
            required: !0,
            readOnly: a.readOnly,
            label: c,
            value: i,
            onChange: t
        }) : e.jsxs("div", {
            className: M("input-wrap", n && "input-error"),
            children: [e.jsx(me, {
                required: !0,
                readOnly: a.readOnly,
                label: c,
                value: i,
                onChange: d
            }), n && e.jsx("div", {
                className: "error-txt",
                children: n
            })]
        })
    }

    function Na(s, a) {
        return s && typeof s == "string" ? new RegExp(s).test(a) : !0
    }

    function fa(s, a) {
        const [t, r] = ie(ja(s));
        return {
            kycDom: f.useMemo(() => e.jsx(e.Fragment, {
                children: s.map((i, n) => {
                    const l = i.label,
                        c = t[i.valueKey];

                    function d(m) {
                        r({
                            [i.valueKey]: m
                        })
                    }
                    if (!Na(i.scriptRuleStr, String(a))) return null;
                    if (i.type === "select" && i.options || i.type === "map_select" && i.mapOptions) {
                        let m = [];
                        return i.type === "select" && i.options ? m = i.options.map(u => ({
                            label: u,
                            value: u
                        })) : i.type === "map_select" && i.mapOptions && (m = i.mapOptions.map(u => {
                            const o = Object.keys(u)[0];
                            return {
                                value: o,
                                label: u[o]
                            }
                        })), e.jsx(xa, {
                            tit: l,
                            item: i,
                            val: c,
                            onChange: d,
                            opt: m
                        }, n)
                    } else {
                        const m = i.valueKey === "vegaUserPassword";
                        return e.jsx(va, {
                            isPassWord: m,
                            data: t,
                            item: i,
                            onChange: d
                        }, n)
                    }
                })
            }), [t, a]),
            kycdata: ya(t)
        }
    }
    he = function({
        children: s,
        className: a
    }) {
        return e.jsx("div", {
            className: M(wa, a, "wallet-notice"),
            children: s
        })
    };
    const wa = "s1hkrnhk";

    function ba({
        currency: s,
        channel: a
    }) {
        return a === "PiastrixWallet" ? e.jsxs("div", {
            className: "fiat-tips",
            children: ["\u0414\u043B\u044F \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043C\u0435\u0442\u043E\u0434\u043E\u043C Piastrix, \u0443 \u0432\u0430\u0441 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C Piastrix \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435 \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 ", e.jsx("a", {
                href: "https://wallet.piastrix.com/",
                target: "_blank",
                children: "https://wallet.piastrix.com/"
            }), " "]
        }) : s === "NGNFIAT" ? e.jsxs(he, {
            children: [e.jsx("div", {
                children: "1.Your transfer amount has to MATCH the submission amount."
            }), e.jsx("div", {
                children: "2.Each Order ID can ONLY be used once to avoid duplicates."
            }), e.jsx("div", {
                children: "3.DO NOT save and deposit to previous's bank account. Please follow the deposit guideline to make deposit, otherwise your deposit will be missing."
            })]
        }) : null
    }

    function Ca({
        currency: s,
        channel: a
    }) {
        const t = j();
        return s === "BRLFIAT" && a === "BetCat-PIX" ? e.jsxs(he, {
            children: [e.jsxs("span", {
                className: "cl-primary ttu",
                children: [t("title.user_notice"), ":"]
            }), " ", e.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: t("wallet.fiat.tips.brl")
                }
            })]
        }) : s === "KRWFIAT" ? e.jsxs(he, {
            className: "krw-notice",
            children: [e.jsxs("span", {
                className: "cl-primary ttu",
                children: [t("title.user_notice"), ":"]
            }), e.jsx("span", {
                children: t("page.wallet.deposit.identity")
            })]
        }) : null
    }
    const ka = Q.memo(function({
            phoneFlag: s,
            emailFlag: a
        }) {
            const t = j(),
                r = js(),
                i = X(),
                n = Bn(),
                [l, c] = ie({
                    emailFlag: a,
                    phoneFlag: s,
                    pending: !1
                });
            return f.useEffect(() => {
                n && (c({
                    pending: !0
                }), h.post("/account/phone/get/").then(d => {
                    c({
                        phoneFlag: d,
                        emailFlag: $.emailVerified,
                        pending: !1
                    })
                }).catch(d => {
                    F(d), c({
                        pending: !1
                    })
                }))
            }, [n]), e.jsx(te, {
                title: t("page.setting.security.phoneEmailVerify"),
                className: Ta,
                children: e.jsxs("div", {
                    className: "verify-list",
                    children: [e.jsx("p", {
                        className: "step",
                        children: t("page.setting.verify.step", "1")
                    }), e.jsxs("div", {
                        className: M("verify-item", l.phoneFlag ? "fill" : "hover"),
                        onClick: () => {
                            l.phoneFlag || i("#/settings/mobile")
                        },
                        children: [e.jsxs("p", {
                            className: "l",
                            children: [e.jsx(_a, {
                                isDarken: r
                            }), e.jsx("span", {
                                children: t("page.login.phone_verification")
                            })]
                        }), e.jsx("div", {
                            className: "r",
                            children: l.phoneFlag ? e.jsxs(e.Fragment, {
                                children: [e.jsx(k, {
                                    name: "Check"
                                }), e.jsx("p", {
                                    className: "rt",
                                    children: t("common.finished")
                                })]
                            }) : e.jsx(e.Fragment, {
                                children: e.jsx("p", {
                                    className: "rt",
                                    children: t("page.login.complete") + " ->"
                                })
                            })
                        })]
                    }), e.jsx("p", {
                        className: "step",
                        children: t("page.setting.verify.step", "1")
                    }), e.jsxs("div", {
                        className: M("verify-item", l.emailFlag || l.pending ? "fill" : "hover"),
                        onClick: () => {
                            !l.emailFlag && !l.pending && i("#/quests/bindemail")
                        },
                        children: [e.jsxs("p", {
                            className: "l",
                            children: [e.jsx(k, {
                                name: "EmailVerify"
                            }), e.jsx("span", {
                                children: t("page.setting.security.emailVerify")
                            })]
                        }), e.jsx("div", {
                            className: "r",
                            children: l.pending ? e.jsxs(e.Fragment, {
                                children: [e.jsx(k, {
                                    name: "Loading",
                                    className: "pending"
                                }), e.jsx("p", {
                                    className: "rt",
                                    children: t("page.login.pending")
                                })]
                            }) : l.emailFlag ? e.jsxs(e.Fragment, {
                                children: [e.jsx(k, {
                                    name: "EmailVerify"
                                }), e.jsx("p", {
                                    className: "rt",
                                    children: t("common.finished")
                                })]
                            }) : e.jsx(e.Fragment, {
                                children: e.jsx("p", {
                                    className: "rt",
                                    children: t("page.login.complete") + " ->"
                                })
                            })
                        })]
                    })]
                })
            })
        }),
        _a = Q.memo(function({
            isDarken: s
        }) {
            return e.jsxs("svg", {
                width: "20",
                height: "21",
                viewBox: "0 0 20 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("g", {
                    clipPath: "url(#clip0_31_258)",
                    children: e.jsx("path", {
                        d: "M14.5 18.9327C11.0977 18.9283 7.8361 17.5748 5.43034 15.169C3.02457 12.7633 1.67108 9.50162 1.66667 6.09936C1.66667 5.0827 2.07054 4.10767 2.78943 3.38878C3.50831 2.66989 4.48334 2.26603 5.5 2.26603C5.71529 2.26439 5.93021 2.28392 6.14167 2.32436C6.34609 2.35461 6.54706 2.40485 6.74167 2.47436C6.87854 2.52238 7.00051 2.6053 7.09551 2.71492C7.19051 2.82453 7.25525 2.95705 7.28333 3.09936L8.425 8.09936C8.45577 8.23508 8.45207 8.37634 8.41422 8.51026C8.37638 8.64418 8.30559 8.76649 8.20834 8.86603C8.1 8.98269 8.09167 8.99103 7.06667 9.52436C7.8875 11.3251 9.32767 12.7712 11.125 13.5994C11.6667 12.566 11.675 12.5577 11.7917 12.4494C11.8912 12.3521 12.0135 12.2813 12.1474 12.2435C12.2814 12.2056 12.4226 12.2019 12.5583 12.2327L17.5583 13.3744C17.6961 13.4063 17.8234 13.4728 17.9284 13.5676C18.0334 13.6623 18.1125 13.7822 18.1583 13.916C18.2287 14.1138 18.2816 14.3174 18.3167 14.5244C18.3502 14.7338 18.3669 14.9456 18.3667 15.1577C18.3513 16.17 17.9361 17.1351 17.2116 17.8424C16.4872 18.5497 15.5124 18.9416 14.5 18.9327Z",
                        fill: "url(#paint0_linear_31_258)"
                    })
                }), e.jsxs("defs", {
                    children: [e.jsxs("linearGradient", {
                        id: "paint0_linear_31_258",
                        x1: "10.0167",
                        y1: "2.26593",
                        x2: "10.0167",
                        y2: "18.9328",
                        gradientUnits: "userSpaceOnUse",
                        children: [e.jsx("stop", {
                            stopColor: s ? "white" : "black"
                        }), e.jsx("stop", {
                            offset: "1",
                            stopColor: s ? "white" : "black"
                        })]
                    }), e.jsx("clipPath", {
                        id: "clip0_31_258",
                        children: e.jsx("rect", {
                            width: "20",
                            height: "20",
                            fill: "white",
                            transform: "translate(0 0.599365)"
                        })
                    })]
                })]
            })
        });
    Q.memo(function({
        isDarken: s
    }) {
        return e.jsxs("svg", {
            width: "20",
            height: "17",
            viewBox: "0 0 20 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [e.jsx("g", {
                clipPath: "url(#clip0_31_256)",
                children: e.jsx("path", {
                    d: "M17.7382 0.0993652C18.3346 0.0993652 18.9065 0.33626 19.3281 0.757937C19.7498 1.17961 19.9867 1.75153 19.9867 2.34787V13.8452C19.9867 14.4416 19.7498 15.0135 19.3281 15.4352C18.9065 15.8568 18.3346 16.0937 17.7382 16.0937H2.2485C1.95323 16.0937 1.66084 16.0356 1.38804 15.9225C1.11523 15.8096 0.867365 15.6439 0.658572 15.4352C0.449779 15.2263 0.284155 14.9785 0.171157 14.7057C0.0581593 14.4329 0 14.1405 0 13.8452V2.34787C0 1.75153 0.236895 1.17961 0.658572 0.757937C1.08025 0.33626 1.65217 0.0993652 2.2485 0.0993652H17.7382ZM7.74483 8.59371H4.24717C4.06606 8.59371 3.89107 8.6593 3.75457 8.77833C3.61808 8.89743 3.5293 9.06185 3.50467 9.2413L3.49767 9.34323V9.83488L3.50567 9.94281C3.66756 11.0561 4.59894 11.5917 5.99601 11.5917C7.32614 11.5917 8.23455 11.1061 8.45835 10.0987L8.48635 9.94378L8.49434 9.83592V9.34323C8.49434 9.16212 8.42876 8.98709 8.30972 8.85061C8.19069 8.71412 8.02621 8.62537 7.84676 8.60068L7.74483 8.59371ZM15.7395 9.08937H11.2445L11.1426 9.0964C10.9632 9.12109 10.7988 9.20985 10.6798 9.34633C10.5608 9.48281 10.4952 9.65778 10.4952 9.83888C10.4952 10.02 10.5608 10.195 10.6798 10.3314C10.7988 10.4679 10.9632 10.5567 11.1426 10.5814L11.2445 10.5884H15.7395L15.8414 10.5814C16.0208 10.5567 16.1852 10.4679 16.3042 10.3314C16.4232 10.195 16.4888 10.02 16.4888 9.83888C16.4888 9.65778 16.4232 9.48281 16.3042 9.34633C16.1852 9.20985 16.0208 9.12109 15.8414 9.0964L15.7395 9.08937ZM5.99601 4.59837C5.59845 4.59837 5.21717 4.7563 4.93606 5.03742C4.65494 5.31854 4.49701 5.69981 4.49701 6.09737C4.49701 6.49493 4.65494 6.87621 4.93606 7.1573C5.21717 7.43847 5.59845 7.5964 5.99601 7.5964C6.39357 7.5964 6.77485 7.43847 7.05593 7.1573C7.3371 6.87621 7.49503 6.49493 7.49503 6.09737C7.49503 5.69981 7.3371 5.31854 7.05593 5.03742C6.77485 4.7563 6.39357 4.59837 5.99601 4.59837ZM15.7395 5.59571H11.2445L11.1426 5.6027C10.9632 5.62739 10.7988 5.71618 10.6798 5.85268C10.5608 5.98916 10.4952 6.16412 10.4952 6.34521C10.4952 6.52629 10.5608 6.70125 10.6798 6.83774C10.7988 6.97423 10.9632 7.06302 11.1426 7.08771L11.2445 7.09468H15.7395L15.8414 7.08771C16.0208 7.06302 16.1852 6.97423 16.3042 6.83774C16.4232 6.70125 16.4888 6.52629 16.4888 6.34521C16.4888 6.16412 16.4232 5.98916 16.3042 5.85268C16.1852 5.71618 16.0208 5.62739 15.8414 5.6027L15.7395 5.59571Z",
                    fill: "url(#paint0_linear_31_256)"
                })
            }), e.jsxs("defs", {
                children: [e.jsxs("linearGradient", {
                    id: "paint0_linear_31_256",
                    x1: "9.99335",
                    y1: "0.0993652",
                    x2: "9.99335",
                    y2: "16.0937",
                    gradientUnits: "userSpaceOnUse",
                    children: [e.jsx("stop", {
                        stopColor: s ? "white" : "black"
                    }), e.jsx("stop", {
                        offset: "1",
                        stopColor: s ? "white" : "black"
                    })]
                }), e.jsx("clipPath", {
                    id: "clip0_31_256",
                    children: e.jsx("rect", {
                        width: "20",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.0993652)"
                    })
                })]
            })]
        })
    });
    const Ta = "c1eqq8qv";

    function La(s, a, t) {
        return !(s && a) && t ? (ve.push(e.jsx(ka, {
            phoneFlag: s,
            emailFlag: a
        })), !1) : !0
    }

    function Je(s, a) {
        const t = s === "CADFIAT" && a === "Gigadat",
            r = j(),
            [i, n] = ie({
                phoneloading: !0,
                phoneVerified: !1,
                phone: "",
                email: $.email,
                emailVerified: $.emailVerified
            });
        f.useEffect(() => {
            t && ($.emailVerified ? n({
                phoneloading: !0,
                email: $.email,
                emailVerified: $.emailVerified
            }) : n({
                phoneloading: !0
            }), h.post("/account/phone/get/").then(d => {
                n({
                    phone: d,
                    phoneloading: !1,
                    phoneVerified: !!d
                })
            }).catch(d => {
                n({
                    phoneloading: !1
                })
            }))
        }, [t]);
        const l = t ? e.jsxs(e.Fragment, {
                children: [i.emailVerified && e.jsx(me, {
                    readOnly: !0,
                    value: i.email,
                    label: r("page.settings.email"),
                    onChange: d => n({
                        email: d
                    })
                }), i.phoneloading ? e.jsx(ne, {}) : i.phoneVerified && e.jsx(me, {
                    readOnly: !0,
                    label: r("common.phone"),
                    onChange: d => n({
                        phone: d
                    }),
                    value: i.phone
                })]
            }) : null,
            c = t ? {
                email: i.email,
                mobile: i.phone
            } : null;
        return {
            view: l,
            data: c,
            onVerified: () => La(i.phoneVerified, i.emailVerified, t)
        }
    }

    function Sa(s) {
        const a = s.frequencyResult;
        if (!a) return !0;
        const t = a.depositStatus;
        return t >= 2 && Z.push(e.jsx(Ia, {
            data: a,
            currency: s.currency
        })), t < 2
    }

    function Ia({
        data: s,
        currency: a
    }) {
        const t = j(),
            r = x.getAlias(a),
            i = X();

        function n() {
            let c = t("wallet.fiat.deposit.limit1");
            return s.depositStatus === 3 ? c = t("wallet.fiat.deposit.limit2", r, "10") : s.depositStatus === 4 && (c = t("wallet.fiat.deposit.limit3", r, "40")), c
        }
        const l = f.useCallback(() => {
            Z.close(), i(`#/deposit_detail/${s.latestOrderId}/${a}`)
        }, []);
        return e.jsx(ce, {
            className: Aa,
            closeable: !0,
            children: e.jsxs(de, {
                children: [e.jsx("div", {
                    className: "txt",
                    children: n()
                }), e.jsxs("div", {
                    className: "dp-btn",
                    onClick: l,
                    children: [t("wallet.continue.deposit"), " ", "->"]
                }), e.jsxs("div", {
                    className: "time-wrap",
                    children: [t("common.retry_in"), e.jsx(hs, {
                        endTime: Number(s.nextDepositTime),
                        children: c => {
                            const d = c.days * 24 + c.hours,
                                m = d < 10 ? "0" + d : d,
                                u = c.minutes < 10 ? "0" + c.minutes : c.minutes,
                                o = c.seconds < 10 ? "0" + c.seconds : c.seconds;
                            return e.jsxs("div", {
                                className: "time",
                                children: [m, "H:", u, "M:", o, "S"]
                            })
                        }
                    })]
                })]
            })
        })
    }
    const Aa = "seldaan",
        Da = async () => {
            let s = !1,
                a = !1,
                t = !1;
            try {
                const r = await Promise.all([h.get("/account/kyc/status/"), h.post("/account/phone/get/")]);
                if (r && r.length === 2) {
                    const {
                        isResolve: i,
                        isReject: n
                    } = Ba(r[0]), l = r[1];
                    i && (a = !0), l && (s = !0), t = n
                }
                return {
                    mobileFlag: s,
                    kycFlag: a,
                    reject: t
                }
            } catch (r) {
                return {
                    mobileFlag: s,
                    kycFlag: a,
                    reject: t
                }
            }
        };

    function Ba(s) {
        let a = {
                reviewStatus: "",
                reviewAnswer: "",
                finalRejected: !1
            },
            t = {
                reviewStatus: "",
                reviewAnswer: "",
                finalRejected: !1
            };
        s.map(l => {
            l.levelName === "basic-kyc-level" && (a = C({}, l)), l.levelName === "advanced-kyc-level" && (t = C({}, l))
        });
        const r = a.reviewStatus === "completed" && a.reviewAnswer === "GREEN",
            i = t.reviewStatus === "completed" && t.reviewAnswer === "GREEN",
            n = a.finalRejected || t.finalRejected;
        return {
            isResolve: r || i,
            isReject: n
        }
    }

    function es(s, a, t, r, i) {
        t && (s ? Z.push(e.jsx(ce, {
            closeable: !0,
            className: Ua,
            children: e.jsx("iframe", {
                ref: a,
                src: t
            })
        })) : i ? window.open(t, "_blank") : r && (r.location.href = t))
    }
    const Fa = function(s) {
            const {
                currencyName: a,
                method: t,
                channel: r,
                wayName: i,
                max: n,
                min: l,
                needRedirect: c,
                isIframe: d,
                isNewOpen: m,
                name: u,
                isKRW: o,
                diabledInput: y,
                fmin: v,
                cs: _,
                icon: P
            } = s, b = j(), E = X(), K = f.useRef(null), T = f.useRef(null), p = ue(), w = Ne(), {
                view: S,
                data: g,
                onVerified: B
            } = Je(a, t), [L, R] = ie({
                depositBtnLoading: !1,
                amount: v
            }), {
                kycDom: V,
                kycdata: xn
            } = fa(s.item, L.amount), yn = async se => {
                if (se.preventDefault(), L.depositBtnLoading) return !1;
                if (o) {
                    const {
                        mobileFlag: xe,
                        kycFlag: _e,
                        reject: H
                    } = await Da();
                    if (H) return E("#/need-verify/6111"), !1;
                    if (!xe || !_e) return E("#/need-verify/6103"), !1
                }
                if (!B()) return !1;
                R({
                    depositBtnLoading: !0
                }), jn(C(C({}, xn), g))
            }, jn = se => {
                const xe = ee(a)(Number(L.amount));
                ye.track.trackEvent("deposit_fiatpayment_confirm", {
                    coin_type: a,
                    amount: xe,
                    payment_method: t,
                    amount_fiat: x.amount2usd(Number(L.amount), a).toFixed(4),
                    user_name: $.name,
                    user_mail: $.email,
                    id_number: String($.userId)
                });
                const _e = b("wallet.fiat.create_error");
                let H = null;
                c && (H = window.open("", "_blank")), re.deposit({
                    currencyName: a,
                    method: t,
                    wayName: i,
                    channel: r,
                    amount: xe,
                    kycItem: se
                }).then(async le => {
                    if (R({
                            depositBtnLoading: !1
                        }), !Sa(z(C({}, le), {
                            currency: a
                        }))) return H && H.close(), !1;
                    if (s.mode === 3 || s.mode === 2 || s.mode === 4) p.push(e.jsx(Pe, {
                        showUtr: s.mode === 3,
                        showImadeDeposit: s.mode === 4,
                        res: le,
                        currency: a,
                        icon: P,
                        amount: L.amount
                    }));
                    else {
                        const us = le.data.walletUrl;
                        try {
                            p.close(), w.push(e.jsx(qs, C({
                                continueDeposit: () => es(d, T, us, H, !0),
                                currency: s.currencyName,
                                amount: L.amount,
                                icon: P
                            }, le))), es(d, T, us, H)
                        } catch (Nn) {
                            console.log(Nn), F(_e), R({
                                depositBtnLoading: !1
                            })
                        }
                    }
                }).catch(le => {
                    T.current && w.close(), H && H.close(), F(le), R({
                        depositBtnLoading: !1
                    })
                })
            }, gn = Number(L.amount) > Number(n) || Number(L.amount) < Number(l), vn = !!s.amountList;
            return e.jsxs("form", {
                ref: K,
                onSubmit: yn,
                className: Oa,
                children: [e.jsx(gs, {
                    disabled: y || vn,
                    className: Ra,
                    formatter: ee(a),
                    min: Number(l),
                    max: Number(n),
                    value: Number(L.amount),
                    onChange: se => R({
                        amount: se
                    }),
                    label: `${l} - ${n} ${x.getAlias(a)}`,
                    children: e.jsxs(Fe, {
                        children: [_ && e.jsx("div", {
                            className: "cs",
                            children: _
                        }), e.jsx(zs, {
                            amount: L.amount,
                            currency: a,
                            cs: _
                        })]
                    })
                }), e.jsx(we, {
                    classsName: "bonus-tips-txt",
                    showTit: !0,
                    currency: a
                }), e.jsx(Fe, {
                    children: e.jsx(Qs, z(C({}, s), {
                        min: v,
                        amount: L.amount,
                        onChangeAmount: se => R({
                            amount: se
                        })
                    }))
                }), V, S, e.jsx(Ca, {
                    channel: s.channel,
                    currency: s.currencyName
                }), e.jsxs(U, {
                    disabled: gn,
                    loading: L.depositBtnLoading,
                    type: "conic",
                    children: [m ? b("common.deposit_via", u) : b("common.deposit"), m && e.jsx(k, {
                        className: "icon-blank",
                        name: "NewWindow"
                    })]
                }), e.jsx(ba, {
                    channel: s.channel,
                    currency: s.currencyName
                })]
            })
        },
        Ra = "izrptar";
    En({
        cl1: [fs("#99a4b0", .6), fs("#5f6975", .8)],
        cl2: ["#2d3035", "#e9eaf2"],
        cl3: ["rgba(45, 48, 53, 0.5)", "#f5f6fa"]
    });
    const Oa = "fb0xtpb",
        Ua = "i157c8d";

    function Ma(s) {
        return ye.track.trackEvent("deposit_fiatpayment_click", {
            coin_type: s.currencyName,
            payment_method: s.method
        }), re.depositKyc(s.currencyName, s.wayName, s.method, s.channel)
    }

    function Pa(s) {
        const a = s.mode === 0 || s.mode === 10,
            t = s.mode === 5 || s.mode === 15;
        return {
            needRedirect: a,
            isIframe: t,
            isNewOpen: a || t
        }
    }

    function Ea() {
        const s = j();
        return e.jsxs("div", {
            className: M(Ka, "notice-wrap"),
            children: [e.jsx(k, {
                name: "Caution"
            }), e.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: s("wallet.disabled_pc_depoist")
                }
            })]
        })
    }
    let ss;
    ws = Q.memo(function({
        payment: s,
        currency: a
    }) {
        const t = De();
        return s.mode === 1 ? e.jsx(Vs, {
            currency: a,
            channel: s.channel
        }) : !t && s.mode === 10 ? e.jsx(Ea, {}) : e.jsxs("div", {
            className: qa,
            children: [e.jsx($a, z(C({}, s), {
                currencyName: a
            })), e.jsx(Ds, {
                currency: a,
                method: s.method
            })]
        })
    }), ss = {
        BRLFIAT: 50,
        INRFIAT: 500,
        PHPFIAT: 200
    };

    function Va(s, a, t) {
        const r = ss[s];
        return r && a <= r && t > r ? r : a
    }
    const $a = function(s) {
            const a = js(),
                {
                    data: t,
                    error: r
                } = ge(() => Ma(s), [s]),
                i = a ? s.nightIcon : s.lightIcon,
                n = Number(s.maxDepositAmount),
                l = Number(s.minDepositAmount),
                c = Va(s.currencyName, l, n),
                {
                    needRedirect: d,
                    isIframe: m,
                    isNewOpen: u
                } = Pa(s),
                o = s.channel === "promptPay",
                y = s.currencyName === "KRWFIAT",
                v = x.localCurrencys[s.currencyName] ? x.localCurrencys[s.currencyName].cs : "";
            return r ? e.jsx(oe, {
                children: r.message
            }) : t ? e.jsx(Fa, z(C({}, t), {
                amountList: s.amountList,
                max: n,
                min: l,
                fmin: c,
                needRedirect: d,
                diabledInput: o,
                isIframe: m,
                isKRW: y,
                isNewOpen: u,
                cs: v,
                icon: i,
                currencyName: s.currencyName,
                mode: s.mode,
                name: s.name
            })) : e.jsx("div", {
                style: {
                    height: "300px"
                },
                children: e.jsx(ne, {})
            })
        },
        qa = "stcmfu",
        Ka = "t13d3jz8",
        as = Q.memo(function({
            redirectUrl: s
        }) {
            const a = j();
            return e.jsxs(ce, {
                className: Wa,
                closeable: !0,
                children: [e.jsx("p", {
                    children: e.jsx(Ae, {
                        k: "wallet.fiat.withdrawinfo",
                        children: e.jsx(Fn, {
                            href: "/wallet/transaction?type=withdraw",
                            onClick: () => {
                                Z.close(), ve.close()
                            },
                            className: "btn",
                            children: a("common.transaction")
                        })
                    })
                }), e.jsx(U, {
                    type: "conic",
                    onClick: () => Z.close(),
                    children: a("common.ok")
                }), s && e.jsx($e, {
                    widthdraw: !0
                })]
            })
        }),
        Wa = "p15iu511";

    function Ha(s) {
        const a = i => (s.onChange && s.onChange(i), !1),
            t = new W(s.max).mul(.25).toNumber(),
            r = new W(s.max).mul(.5).toNumber();
        return e.jsx(gs, z(C({}, s), {
            className: za,
            children: s.max > 0 && e.jsxs("div", {
                className: "button-group",
                children: [e.jsx("button", {
                    type: "button",
                    onClick: () => a(s.min),
                    children: "min"
                }), e.jsx("button", {
                    type: "button",
                    onClick: () => a(t),
                    children: "25%"
                }), e.jsx("button", {
                    type: "button",
                    onClick: () => a(r),
                    children: "50%"
                }), e.jsx("button", {
                    type: "button",
                    onClick: () => a(s.max),
                    children: "max"
                })]
            })
        }))
    }
    const za = "s16n34qf";

    function Ga({
        currency: s,
        method: a
    }) {
        const t = j();
        return s === "IDRFIAT" && a.toLocaleLowerCase() === "astropay" ? e.jsx("div", {
            className: ns,
            children: t("wallet.fiat.tips.astropay")
        }) : s === "CADFIAT" && a.toLocaleLowerCase() === "gigadat" ? e.jsx("div", {
            className: ns,
            children: "\xAETrade-mark of Interac Corp. Used Under License."
        }) : null
    }
    const ns = "szu6qwz";
    let ts;
    Ts = Q.memo(function({
        payment: s,
        currency: a
    }) {
        const {
            data: t,
            error: r
        } = ge(() => J.withdrawKyc(a, s.wayName, s.method, s.channel), [s]);
        return j(), r ? e.jsx(oe, {
            children: r.message
        }) : t ? e.jsx(qe, {
            withdrawInfo: s,
            kycList: t.item,
            currencyInfo: x.dict[a]
        }) : e.jsx(ne, {})
    }), qe = Q.memo(function({
        kycList: s,
        withdrawInfo: a,
        currencyInfo: t
    }) {
        const r = j(),
            i = f.useRef(null),
            n = {},
            l = s.map(p => (p.type === "select" && p.options ? n[p.valueKey] = p.defaultValue || p.options[0] : p.type === "map_select" && p.mapOptions && (n[p.valueKey] = p.defaultValue || p.mapOptions[0]), p)),
            [c, d] = ie({
                loading: !0,
                depositBtnLoading: !1,
                fee: "0",
                amount: a.minWithdrawAmount,
                selectInfo: n,
                feeLoading: !0,
                balance: null
            }),
            m = f.useMemo(() => Rn(p => {
                d({
                    feeLoading: !0
                });
                const {
                    amount: w,
                    channel: S,
                    currencyName: g,
                    method: B,
                    wayName: L
                } = p;
                J.withdrawFee(g, L, B, S, w).then(R => {
                    d({
                        fee: R,
                        feeLoading: !1
                    })
                }).catch(F)
            }, 200), []);
        f.useEffect(() => {
            Promise.all([J.withdrawFee(t.currencyName, a.wayName, a.method, a.channel, a.minWithdrawAmount), x.getUnlockedBalance(t.currencyName)]).then(p => {
                p && p.length === 2 && d({
                    fee: p[0],
                    balance: p[1],
                    feeLoading: !1,
                    loading: !1
                })
            }).catch(F)
        }, []);
        const u = Number(a.minWithdrawAmount || "0"),
            o = Number(a.maxWithdrawAmount || "0"),
            {
                view: y,
                data: v,
                onVerified: _
            } = Je(t.currencyName, a.method),
            P = async p => {
                if (p.preventDefault(), !c.feeLoading && _() && !(Number(c.amount) < Number(a.minWithdrawAmount)) && !(Number(c.amount) > Number(a.maxWithdrawAmount)) && i.current) {
                    const w = a.channel;
                    d({
                        depositBtnLoading: !0
                    });
                    const S = new FormData(i.current),
                        g = C(C({}, c.selectInfo), v),
                        B = ee(t.currencyName)(Number(c.amount));
                    for (const V of S.entries()) g[V[0]] = String(V[1]).trim();
                    const L = await Vn();
                    if (!L) {
                        d({
                            depositBtnLoading: !1
                        });
                        return
                    }
                    let R = null;
                    w && w.toLocaleLowerCase() === "vcredit" && (R = window.open()), vs.emit("ad_track", "other_events", {
                        e: "withdrawClick"
                    }), J.withdraw({
                        amount: B,
                        channel: w,
                        currencyName: t.currencyName,
                        fee: c.fee,
                        method: a.method,
                        wayName: a.wayName,
                        kycItem: g,
                        verifyType: L.verifyType,
                        timestamp: Number(L.timestamp),
                        code: L.code
                    }).then(V => {
                        d({
                            depositBtnLoading: !1
                        }), vs.emit("ad_track", "other_events", {
                            e: "withdrawOrderSuccess"
                        }), V ? R && (V && V.redirectUrl ? (R.location.href = V.redirectUrl, ve.close(), Z.push(e.jsx(as, {
                            redirectUrl: V.redirectUrl
                        }))) : R.close()) : (ve.close(), Z.push(e.jsx(as, {})))
                    }).catch(V => {
                        F(V), d({
                            depositBtnLoading: !1
                        })
                    })
                }
            },
            b = t.currencyName,
            E = t.aliasCurrencyName;
        if (c.loading || !c.balance) return e.jsx(ne, {});
        const K = Number(c.balance.unlockedBalance || "0");
        let T = Math.min(o, K);
        return T = T < u ? u : T, e.jsxs("form", {
            ref: i,
            className: ts,
            onSubmit: P,
            children: [l.map((p, w) => {
                if (p.type === "select" && p.options || p.type === "map_select" && p.mapOptions) {
                    let S = [];
                    return p.type === "select" ? S = p.options.map(g => ({
                        label: g,
                        value: g
                    })) : p.type === "map_select" && p.mapOptions && (S = p.mapOptions.map(g => {
                        const B = Object.keys(g)[0];
                        return {
                            value: B,
                            label: g[B]
                        }
                    })), e.jsxs("div", {
                        className: "select-wrap",
                        children: [e.jsx("label", {
                            children: p.label
                        }), e.jsx(pe, {
                            value: c.selectInfo[p.valueKey] || "",
                            onChange: g => {
                                const B = C({}, c.selectInfo);
                                B[p.valueKey] = g, d({
                                    selectInfo: B
                                })
                            },
                            options: S
                        })]
                    }, w.toString())
                }
                return p.valueKey === "vegaUserPassword" ? e.jsx(ys, {
                    maxLength: 100,
                    required: !0,
                    label: p.label,
                    readOnly: p.readOnly,
                    name: p.valueKey,
                    defaultValue: p.defaultValue
                }, w.toString()) : e.jsx(me, {
                    maxLength: 100,
                    required: !0,
                    label: p.label,
                    readOnly: p.readOnly,
                    name: p.valueKey,
                    defaultValue: p.defaultValue
                }, w.toString())
            }), e.jsx(Ha, {
                className: "amount-input",
                formatter: ee(t.currencyName, a.channel),
                value: Number(c.amount),
                min: u,
                max: T,
                onChange: p => {
                    const w = ee(t.currencyName, a.channel)(p);
                    d({
                        amount: w
                    }), m({
                        amount: w,
                        channel: a.channel,
                        currencyName: t.currencyName,
                        method: a.method,
                        wayName: a.wayName
                    })
                },
                label: e.jsxs("div", {
                    style: {
                        display: "flex",
                        flex: "auto",
                        justifyContent: "space-between"
                    },
                    children: [e.jsxs("div", {
                        children: [r("common.amount"), " (", a.minWithdrawAmount, " ~ ", a.maxWithdrawAmount, ")"]
                    }), e.jsxs("div", {
                        children: [r("common.balance"), ": ", K]
                    })]
                })
            }), e.jsx(In, {
                currencyName: b,
                balance: c.balance
            }), y, e.jsx(Fe, {
                children: e.jsxs("div", {
                    className: "withdraw-info",
                    children: [e.jsxs("div", {
                        className: "item",
                        children: [e.jsxs("div", {
                            className: "label",
                            children: [r("wallet.withdraw.amount"), ":"]
                        }), " ", e.jsxs("div", {
                            className: "val",
                            children: [new W(c.amount).sub(c.fee).toString(), " ", E]
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsxs("div", {
                            className: "label",
                            children: [r("title.help_fee"), ":"]
                        }), " ", e.jsx("div", {
                            className: "val",
                            children: c.fee + " " + E
                        })]
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsxs("div", {
                            className: "label",
                            children: [r("wallet.withdraw.total_amount"), ":"]
                        }), " ", e.jsxs("div", {
                            className: "val cl-primary",
                            children: [" ", c.amount, " ", E]
                        })]
                    })]
                })
            }), e.jsx(U, {
                className: "submit-btn",
                disabled: c.feeLoading,
                loading: c.depositBtnLoading,
                type: "conic",
                children: r("common.actions.confirm")
            }), e.jsx(Ga, {
                currency: t.currencyName,
                method: a.method
            })]
        })
    }), ts = "f1hazsiw", (s => {
        (a => {
            a.Deposit = "deposit", a.Withdraw = "withdraw", a.Swap = "swap", a.Buy = "buy_crypto", a.Bill = "bill", a.Bonus = "Bonus", a.All = ""
        })(s.TransactionsType || (s.TransactionsType = {}))
    })(Me || (Me = {})), ks = function(s) {
        return s === 4 ? "success" : s >= -1 ? "waiting" : "error"
    }, _s = function(s) {
        return [1, 5, 6, 7].some(a => a === s) ? "wallet.order.new.submit" : [2, 3].some(a => a === s) ? "wallet.order.new.review" : [4, -11, -12].some(a => a === s) ? "wallet.order.new.completed" : "wallet.order.new.submit"
    }, Ss = function(s) {
        const a = j();
        let t = a("page.recharge.state_fail"),
            r = !1,
            i = !1,
            n = !1,
            l = !1,
            c = "error";
        switch (s) {
            case 1:
                t = a("common.status.processing"), r = !0, c = "waiting";
                break;
            case 2:
                t = a("common.status.processing"), r = !0, c = "waiting";
                break;
            case 3:
                t = a("common.status.success"), l = !0, c = "success";
                break;
            case 4:
                t = a("common.status.success"), l = !0, c = "success";
                break;
            case -1:
                t = a("common.status.failed"), n = !0;
                break;
            case -2:
                t = a("common.status.canceled.new"), i = !0;
                break;
            case -3:
                t = a("common.status.failed"), n = !0;
                break;
            default:
                t = a("common.status.failed"), n = !0;
                break
        }
        return {
            txt: t,
            isProgress: r,
            isSuccess: l,
            isCanceled: i,
            isFail: n,
            orderclass: c
        }
    };
    var N;
    (s => {
        (l => {
            l[l.AllStatus = 0] = "AllStatus", l[l.NotStarted = 1] = "NotStarted", l[l.Ongoning = 2] = "Ongoning", l[l.Done = 3] = "Done", l[l.Cancelled = 4] = "Cancelled", l[l.Expired = 5] = "Expired"
        })(s.Status || (s.Status = {})), (l => {
            l[l.NewbieTaskRewards = 2] = "NewbieTaskRewards", l[l.DepositBonus = 3] = "DepositBonus", l[l.FreeSpinWinnings = 4] = "FreeSpinWinnings", l[l.LuckySpinBonus = 5] = "LuckySpinBonus", l[l.NewbieLuckSpinBonus = 6] = "NewbieLuckSpinBonus", l[l.EventBonus = 7] = "EventBonus"
        })(s.BonusType || (s.BonusType = {})), (l => {
            l[l.AllType = 0] = "AllType", l[l.Deposit = 1] = "Deposit", l[l.Bonus = 2] = "Bonus"
        })(s.Type || (s.Type = {}));

        function a(l) {
            let c = "";
            switch (l) {
                case 4:
                    c = "error";
                    break;
                case 3:
                    c = "success";
                    break;
                case 2:
                    c = "waiting";
                    break;
                default:
                    c = "not-started";
                    break
            }
            return c
        }

        function t(l, c) {
            var u;
            const d = j(),
                m = [{
                    label: d("page.wallet.filter.all_status"),
                    value: 0
                }, {
                    label: d("wallet.turnover.filter1"),
                    value: 1
                }, {
                    label: d("page.bonus.on_going"),
                    value: 2
                }, {
                    label: d("common.done"),
                    value: 3
                }, {
                    label: d("common.status.canceled.new"),
                    value: 4
                }, {
                    label: d("page.coindrop.expired"),
                    value: 5
                }];
            return {
                target: (u = m.find(o => o.value === l)) != null ? u : m[0],
                opt: m,
                className: c ? a(l) : ""
            }
        }
        s.useGetStatus = t;

        function r(l) {
            var m;
            const c = j(),
                d = [{
                    label: c("page.wallet.filter.all_type"),
                    value: 0
                }, {
                    label: c("common.deposit"),
                    value: 1
                }, {
                    label: c("common.bonus"),
                    value: 2
                }];
            return {
                target: (m = d.find(u => u.value === l)) != null ? m : d[0],
                opt: d
            }
        }
        s.useGetType = r;

        function i(l) {
            const c = j(),
                d = n(),
                m = [{
                    label: c("page.wallet.filter.all_type"),
                    value: 0
                }, {
                    label: c("common.deposit"),
                    value: 1
                }, {
                    label: c("common.bonus"),
                    value: 2
                }].concat(d),
                u = m.find(o => o.value === l);
            return console.log(m), {
                target: u != null ? u : m[0],
                opt: m
            }
        }
        s.useAllType = i, s.BonusControllerContext = f.createContext([{
            value: 0,
            label: ""
        }]);

        function n() {
            return f.useContext(s.BonusControllerContext)
        }
        s.useBonusController = n
    })(N || (N = {}));

    function Ya(s) {
        const {
            target: a,
            opt: t
        } = N.useGetStatus(Number(s.value));
        return e.jsx(pe, {
            value: a.value,
            renderLabel: r => e.jsx("div", {
                className: "ell",
                children: r.label
            }),
            onChange: r => s.navUrl({
                status: r,
                page: 1
            }),
            options: t
        })
    }

    function Za(s) {
        const {
            target: a,
            opt: t
        } = N.useGetType(Number(s.value));
        return e.jsx(pe, {
            value: a.value,
            renderLabel: r => e.jsx("div", {
                className: "ell",
                children: r.label
            }),
            onChange: r => s.navUrl({
                type: r,
                page: 1
            }),
            options: t
        })
    }

    function Qa(s) {
        const a = s.value ? s.value : s.options[0].value;
        return e.jsx(pe, {
            value: a,
            renderLabel: t => e.jsx("div", {
                className: "ell",
                children: t.label
            }),
            onChange: t => s.navUrl({
                bonusType: t,
                page: 1
            }),
            options: s.options
        })
    }

    function Xa(s) {
        const a = N.useBonusController();
        return e.jsxs("div", {
            className: M(Ja, "turnover-tabs"),
            children: [e.jsx(Za, {
                navUrl: s.navUrl,
                value: s.type
            }), Number(s.type) === N.Type.Bonus && e.jsx(Qa, {
                navUrl: s.navUrl,
                value: s.bonusType,
                options: a
            }), e.jsx(Ya, {
                navUrl: s.navUrl,
                value: s.status
            })]
        })
    }
    const Ja = "sc5cua";

    function en({
        props: s,
        navUrl: a,
        getList: t,
        isDialog: r,
        hover: i
    }) {
        return s ? s.total === 0 ? e.jsx(oe, {}) : e.jsxs(e.Fragment, {
            children: [r ? e.jsx(de, {
                children: e.jsx(Ns, {
                    className: is,
                    hover: i,
                    children: t(s.list)
                })
            }) : e.jsx(Ns, {
                className: is,
                hover: i,
                children: t(s.list)
            }), e.jsx(On, {
                className: "m-fixbot",
                page: s.page ? Number(s.page) : 1,
                total: s.total,
                limit: s.pageSize,
                onChangeLimit: n => a({
                    pageSize: n
                }),
                onChange: n => a({
                    page: n
                })
            })]
        }) : e.jsx(ne, {
            className: "turnover-loading"
        })
    }
    const is = "s1lr5og4";

    function rs({
        lockedAmount: s,
        taskId: a,
        currency: t,
        updateDetails: r
    }) {
        const i = Ne(),
            n = j();

        function l() {
            return h.post("/balance-controller/wager/task/cancel/", {
                taskId: a
            }).then(u => {
                i.close(), r(u.status, u.updateTime)
            })
        }
        const c = x.getAlias(t),
            d = x.dict[t].amount,
            m = new W(d).sub(s).toNumber();
        return e.jsxs(ce, {
            className: sn,
            children: [e.jsxs("div", {
                className: "head",
                children: [e.jsx("div", {
                    className: "tit",
                    children: n("page.bonus.cancel.tit")
                }), e.jsx(Un, {
                    onClick: () => i.back(!1)
                })]
            }), e.jsx("div", {
                className: "cont",
                children: e.jsxs(Ae, {
                    k: "page.bonus.cancel.desc",
                    children: [e.jsxs("b", {
                        children: [s, " ", c]
                    }), e.jsxs("b", {
                        children: [m < 0 ? 0 : m, " ", c]
                    })]
                })
            }), e.jsxs("div", {
                className: "btns",
                children: [e.jsx(U, {
                    className: "btn-cancel",
                    onClick: l,
                    children: n("page.bonus.cancel")
                }), e.jsx(U, {
                    type: "conic",
                    onClick: () => i.close(),
                    children: n("page.bonnus.keep")
                })]
            })]
        })
    }
    const sn = "s1uhcn6v";

    function ls({
        list: s,
        currency: a
    }) {
        const t = X(),
            r = ue(),
            i = j();
        return s ? e.jsx(te, {
            title: i("page.bonus.games_for"),
            className: an,
            children: e.jsx(de, {
                children: e.jsx("div", {
                    className: "games",
                    children: s.map(n => e.jsxs("div", {
                        className: "gameItem",
                        onClick: () => {
                            r.close(), a && x.dict[a] && (x.current = a), t(`/game/${n.gameIdentity.gameUnique}?bonus=true`)
                        },
                        children: [e.jsx("img", {
                            src: n.thumbnail,
                            alt: ""
                        }), e.jsx("div", {
                            className: "provider",
                            children: n.providerName
                        })]
                    }, n.fullName))
                })
            })
        }) : e.jsx(te, {
            children: e.jsx(oe, {})
        })
    }
    const an = "s3xeho1";

    function cs({
        status: s,
        hideIcon: a
    }) {
        const {
            target: t,
            className: r
        } = N.useGetStatus(s, !0);
        return e.jsxs("div", {
            className: "status-wrap last-icon-wrap",
            children: [e.jsx("b", {
                className: r
            }), e.jsx("div", {
                className: "status",
                children: t.label
            }), !a && e.jsx(k, {
                name: "Arrow"
            })]
        })
    }

    function nn({
        type: s
    }) {
        const {
            target: a
        } = N.useGetType(s);
        return e.jsx(e.Fragment, {
            children: a.label
        })
    }
    const tn = () => {
        const s = j();
        return e.jsx("div", {
            className: ln,
            children: s("wallet.turnover.linked.Help")
        })
    };

    function rn({
        details: s,
        updateList: a
    }) {
        var K;
        const t = ue(),
            r = Ne(),
            i = j(),
            [n, l] = f.useState(null),
            c = f.useMemo(() => {
                var T, p, w;
                return (T = n == null ? void 0 : n.linkedBonusTask) != null && T.length ? (p = n == null ? void 0 : n.linkedBonusTask) == null ? void 0 : p[0] : (w = n == null ? void 0 : n.linkedGeneralTask) == null ? void 0 : w[0]
            }, [n]),
            d = n == null ? void 0 : n.originalCurrencyName,
            m = (n == null ? void 0 : n.taskType) === N.Type.Deposit,
            u = (n == null ? void 0 : n.status) === N.Status.Done,
            [o, y] = ie({
                isCanelled: (n == null ? void 0 : n.status) === N.Status.Cancelled,
                updateTime: n == null ? void 0 : n.updateTime
            }),
            v = (n == null ? void 0 : n.status) === N.Status.NotStarted || (n == null ? void 0 : n.status) === N.Status.Ongoning || (n == null ? void 0 : n.status) === N.Status.Cancelled,
            _ = new W((n == null ? void 0 : n.wagerRequired) || 0).sub((n == null ? void 0 : n.wagerCompleted) || 0).toNumber(),
            P = f.useCallback(function(T, p) {
                s.status = T, s.updateTime = p, y({
                    isCanelled: !0,
                    updateTime: p
                }), a()
            }, [s, o]);

        function b(T) {
            r.push(e.jsx(rs, {
                taskId: T,
                currency: n == null ? void 0 : n.originalCurrencyName,
                lockedAmount: n == null ? void 0 : n.lockedAmount,
                updateDetails: P
            }))
        }
        const E = async T => {
            const p = await h.post("/balance-controller/wager/task/detail/", {
                taskId: T
            }).catch(F);
            l(p), y({
                isCanelled: (p == null ? void 0 : p.status) === N.Status.Cancelled,
                updateTime: p == null ? void 0 : p.updateTime
            })
        };
        return f.useEffect(() => {
            s != null && s.taskId && E(s.taskId)
        }, [s == null ? void 0 : s.taskId]), e.jsx(te, {
            className: cn,
            title: i("wallet.rollover.details"),
            children: n && e.jsxs(de, {
                children: [e.jsxs("div", {
                    className: "head",
                    children: [e.jsx(ps, {
                        name: d
                    }), e.jsxs("div", {
                        className: "amount cl-green",
                        children: ["+ ", e.jsx("b", {
                            children: q.formateAmount(n == null ? void 0 : n.originalAmount)
                        }), e.jsx("span", {
                            className: "name",
                            children: x.getAlias(d)
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("page.prize.history_state")
                    }), e.jsx("div", {
                        className: "value",
                        children: e.jsx(cs, {
                            status: n == null ? void 0 : n.status,
                            hideIcon: !0
                        })
                    })]
                }), o.isCanelled && e.jsxs(e.Fragment, {
                    children: [(n == null ? void 0 : n.remark) === "cancel_by_system" && e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: i("wallet.turnover.reason_cancel")
                        }), e.jsx("div", {
                            className: "value",
                            children: i("wallet.turnover.reason_cancel.val")
                        })]
                    }), (n == null ? void 0 : n.remark) === "cancel_by_user" && e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: i("wallet.turnover.reason_cancel")
                        }), e.jsx("div", {
                            className: "value",
                            children: i("wallet.turnover.reason_cancel.val2")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("common.type")
                    }), e.jsx("div", {
                        className: "type value",
                        children: e.jsx(nn, {
                            type: n == null ? void 0 : n.taskType
                        })
                    })]
                }), !m && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("page.bonus.limited_game")
                    }), n != null && n.gameNameLimit && (n == null ? void 0 : n.gameNameLimit.length) > 0 ? e.jsx("div", {
                        className: "value gr",
                        onClick: () => t.push(e.jsx(ls, {
                            list: n == null ? void 0 : n.gameNameLimit,
                            currency: n == null ? void 0 : n.originalCurrencyName
                        })),
                        children: i("page.bonus.see_games")
                    }) : e.jsx("div", {
                        className: "value gr",
                        children: "--"
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.created_on")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(n == null ? void 0 : n.createTime)).toLocaleString()
                    })]
                }), (n == null ? void 0 : n.expiredTime) && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: i("page.task.expire")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(n == null ? void 0 : n.expiredTime)).toLocaleString()
                    })]
                }), o.isCanelled && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.canceled_on")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(o.updateTime)).toLocaleString()
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.times")
                    }), e.jsxs("div", {
                        className: "value",
                        children: [Number((n == null ? void 0 : n.wagerTimes) || 0).toFixed(2), "x"]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.total_wager_required")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(Number(n == null ? void 0 : n.wagerRequired), d)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.wager_completed")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(Number(n == null ? void 0 : n.wagerCompleted), d)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.pending_wager_required")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(_ > 0 ? _ : 0, d)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: i("wallet.turnover.unlocked_funds")
                    }), e.jsx("div", {
                        className: "value",
                        children: v ? 0 : x.toLocaleCurrency(Number(n == null ? void 0 : n.lockedAmount), d)
                    })]
                }), !o.isCanelled && !m && !u && e.jsx("div", {
                    className: "item",
                    children: e.jsx(U, {
                        className: "cancel-btn",
                        onClick: () => b(n == null ? void 0 : n.taskId),
                        children: i("page.bonus.cancel")
                    })
                }), !!c && e.jsxs("div", {
                    className: "link-info",
                    children: [e.jsx("hr", {}), e.jsx("header", {
                        children: e.jsxs("div", {
                            className: "lable",
                            children: [(K = n == null ? void 0 : n.linkedBonusTask) != null && K.length ? i("wallet.turnover.linked.bonus") : i("wallet.turnover.linked.deposit"), e.jsx(Be, {
                                title: e.jsx(tn, {}),
                                delay: 0,
                                children: e.jsx("div", {
                                    className: "val",
                                    children: e.jsx(k, {
                                        name: "Help"
                                    })
                                })
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "lable",
                            children: i("page.prize.history_state")
                        }), e.jsxs("div", {
                            className: "value",
                            onClick: () => {
                                t.push(e.jsx(os, {
                                    details: z(C({}, s), {
                                        taskId: c == null ? void 0 : c.taskId
                                    }),
                                    updateList: a
                                }, new Date().getTime().toString()))
                            },
                            children: [e.jsx(cs, {
                                status: c == null ? void 0 : c.status,
                                hideIcon: !0
                            }), e.jsx(k, {
                                name: "Arrow"
                            })]
                        })]
                    })]
                })]
            })
        })
    }
    const ln = "tg3la1s",
        cn = "sv02q30";

    function Ce({
        status: s,
        hideIcon: a
    }) {
        const {
            target: t,
            className: r
        } = N.useGetStatus(s, !0);
        return e.jsxs("div", {
            className: "status-wrap last-icon-wrap",
            children: [e.jsx("b", {
                className: r
            }), e.jsx("div", {
                className: "status",
                children: t.label
            }), !a && e.jsx(k, {
                name: "Arrow"
            })]
        })
    }
    const on = () => {
        const s = j();
        return e.jsx("div", {
            className: dn,
            children: s("wallet.turnover.linked.Help")
        })
    };

    function os({
        details: s,
        updateList: a
    }) {
        var w;
        const t = s.originalCurrencyName,
            r = ue(),
            i = Ne(),
            n = j(),
            l = s.taskType === N.Type.Deposit,
            c = s.taskType === 11,
            d = s.status === N.Status.NotStarted,
            m = s.status === N.Status.Ongoning,
            u = X(),
            [o, y] = f.useState(null),
            v = f.useMemo(() => {
                var S, g, B;
                return (S = o == null ? void 0 : o.linkedBonusTask) != null && S.length ? (g = o == null ? void 0 : o.linkedBonusTask) == null ? void 0 : g[0] : (B = o == null ? void 0 : o.linkedGeneralTask) == null ? void 0 : B[0]
            }, [o]);
        o == null || o.status, N.Status.Done;
        const [_, P] = ie({
            isCanelled: (o == null ? void 0 : o.status) === N.Status.Cancelled,
            updateTime: o == null ? void 0 : o.updateTime
        }), b = (o == null ? void 0 : o.status) === N.Status.NotStarted || (o == null ? void 0 : o.status) === N.Status.Ongoning || (o == null ? void 0 : o.status) === N.Status.Cancelled || (o == null ? void 0 : o.status) === N.Status.Expired, E = new W((o == null ? void 0 : o.wagerRequired) || 0).sub((o == null ? void 0 : o.wagerCompleted) || 0).toNumber(), K = f.useCallback(function(S, g) {
            s.status = S, s.updateTime = g, P({
                isCanelled: !0,
                updateTime: g
            }), a()
        }, [s, _]);

        function T(S) {
            i.push(e.jsx(rs, {
                taskId: S,
                currency: o == null ? void 0 : o.originalCurrencyName,
                lockedAmount: o == null ? void 0 : o.lockedAmount,
                updateDetails: K
            }))
        }
        const p = async S => {
            const g = await h.post("/balance-controller/wager/task/detail/", {
                taskId: S
            }).catch(F);
            y(g), P({
                isCanelled: (g == null ? void 0 : g.status) === N.Status.Cancelled,
                updateTime: g == null ? void 0 : g.updateTime
            })
        };
        return f.useEffect(() => {
            s != null && s.taskId && p(s.taskId)
        }, [s == null ? void 0 : s.taskId]), e.jsx(te, {
            className: un,
            title: n("wallet.rollover.details"),
            children: o && e.jsxs(de, {
                children: [e.jsxs("div", {
                    className: "head",
                    children: [e.jsx(ps, {
                        name: t
                    }), e.jsxs("div", {
                        className: "amount cl-green",
                        children: ["+ ", e.jsx("b", {
                            children: q.formateAmount(o == null ? void 0 : o.originalAmount)
                        }), e.jsx("span", {
                            className: "name",
                            children: x.getAlias(t)
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("page.prize.history_state")
                    }), e.jsx("div", {
                        className: "value",
                        children: e.jsx(Ce, {
                            status: o == null ? void 0 : o.status,
                            hideIcon: !0
                        })
                    })]
                }), _.isCanelled && e.jsxs(e.Fragment, {
                    children: [(o == null ? void 0 : o.remark) === "cancel_by_system" && e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: n("wallet.turnover.reason_cancel")
                        }), e.jsx("div", {
                            className: "value",
                            children: n("wallet.turnover.reason_cancel.val")
                        })]
                    }), (o == null ? void 0 : o.remark) === "cancel_by_user" && e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "label",
                            children: n("wallet.turnover.reason_cancel")
                        }), e.jsx("div", {
                            className: "value",
                            children: n("wallet.turnover.reason_cancel.val2")
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("common.type")
                    }), e.jsxs("div", {
                        className: "type value",
                        children: [e.jsx("span", {
                            children: o == null ? void 0 : o.taskTypeDesc
                        }), c && e.jsx(k, {
                            onClick: () => {
                                u("#/vip-offer")
                            },
                            name: "Help"
                        })]
                    })]
                }), !l && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("page.bonus.limited_game")
                    }), o != null && o.gameNameLimit && (o == null ? void 0 : o.gameNameLimit.length) > 0 ? e.jsx("div", {
                        className: "value gr",
                        onClick: () => r.push(e.jsx(ls, {
                            list: o == null ? void 0 : o.gameNameLimit,
                            currency: o == null ? void 0 : o.originalCurrencyName
                        })),
                        children: n("page.bonus.see_games")
                    }) : e.jsx("div", {
                        className: "value gr",
                        children: "--"
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.created_on")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(o == null ? void 0 : o.createTime)).toLocaleString()
                    })]
                }), (o == null ? void 0 : o.expiredTime) && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "label",
                        children: n("page.task.expire")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(o == null ? void 0 : o.expiredTime)).toLocaleString()
                    })]
                }), e.jsx("hr", {}), _.isCanelled && e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.canceled_on")
                    }), e.jsx("div", {
                        className: "value",
                        children: new Date(Number(_.updateTime)).toLocaleString()
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.times")
                    }), e.jsxs("div", {
                        className: "value",
                        children: [Number((o == null ? void 0 : o.wagerTimes) || 0).toFixed(0), "x"]
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.total_wager_required")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(Number(o == null ? void 0 : o.wagerRequired), t)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.wager_completed")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(Number(o == null ? void 0 : o.wagerCompleted) > 0 ? Number(o == null ? void 0 : o.wagerCompleted) : 0, t)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.pending_wager_required")
                    }), e.jsx("div", {
                        className: "value",
                        children: x.toLocaleCurrency(E > 0 ? E : 0, t)
                    })]
                }), e.jsxs("div", {
                    className: "item",
                    children: [e.jsx("div", {
                        className: "lable",
                        children: n("wallet.turnover.unlocked_funds")
                    }), e.jsx("div", {
                        className: "value",
                        children: b ? 0 : x.toLocaleCurrency(Number(o == null ? void 0 : o.lockedAmount), t)
                    })]
                }), (m || d) && !l && e.jsx("div", {
                    className: "item",
                    children: e.jsx(U, {
                        className: "cancel-btn",
                        onClick: () => T(s.taskId),
                        children: n("page.bonus.cancel")
                    })
                }), !!v && e.jsxs("div", {
                    className: "link-info",
                    children: [e.jsx("hr", {}), e.jsx("header", {
                        children: e.jsxs("div", {
                            className: "lable",
                            children: [(w = o == null ? void 0 : o.linkedBonusTask) != null && w.length ? n("wallet.turnover.linked.bonus") : n("wallet.turnover.linked.deposit"), e.jsx(Be, {
                                title: e.jsx(on, {}),
                                delay: 0,
                                children: e.jsx("div", {
                                    className: "val",
                                    children: e.jsx(k, {
                                        name: "Help"
                                    })
                                })
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "item",
                        children: [e.jsx("div", {
                            className: "lable",
                            children: n("page.prize.history_state")
                        }), e.jsxs("div", {
                            className: "value link-item",
                            onClick: () => {
                                r.push(e.jsx(rn, {
                                    details: z(C({}, s), {
                                        taskId: v == null ? void 0 : v.taskId
                                    }),
                                    updateList: a
                                }))
                            },
                            children: [e.jsx(Ce, {
                                status: v == null ? void 0 : v.status,
                                hideIcon: !0
                            }), e.jsx(k, {
                                name: "Arrow"
                            })]
                        })]
                    })]
                })]
            })
        })
    }
    const dn = "tg8kyvs",
        un = "s8th8h8";

    function mn(s, a, t, r, i) {
        return h.post("/balance-controller/wager/task/list/", {
            status: s,
            type: a,
            bonusType: t,
            page: r,
            pageSize: i
        })
    }

    function pn(s) {
        const a = s.type ? Number(s.type) : 0,
            t = s.bonusType ? Number(s.bonusType) : 0,
            r = s.page ? Number(s.page) : 1,
            i = s.pageSize ? Number(s.pageSize) : 20,
            n = Number(s.status) ? Number(s.status) : null,
            {
                data: l,
                error: c
            } = ge(() => mn(n, a, t, r, i), [s]);
        return c ? e.jsx(oe, {
            children: c.message
        }) : l ? e.jsx(hn, {
            data: l,
            navUrl: s.navUrl,
            isDialog: s.isDialog
        }) : e.jsx(ne, {})
    }

    function hn({
        navUrl: s,
        data: a,
        isDialog: t
    }) {
        const [r, i] = f.useState(a.list), n = ue(), l = j(), c = De(), d = f.useCallback(function() {
            i([...r])
        }, [r]), m = f.useCallback(function(u) {
            n.push(e.jsx(os, {
                details: u,
                updateList: d
            }))
        }, []);
        return e.jsx(en, {
            props: z(C({}, a), {
                list: r
            }),
            isDialog: t,
            navUrl: s,
            getList: u => e.jsxs(e.Fragment, {
                children: [e.jsx("thead", {
                    children: e.jsxs("tr", {
                        children: [e.jsx("th", {
                            children: l("common.type")
                        }), e.jsx("th", {
                            children: l("common.amount")
                        }), !c && e.jsx("th", {
                            children: l("common.time")
                        }), e.jsx("th", {
                            children: l("page.prize.history_state")
                        })]
                    })
                }), e.jsx("tbody", {
                    children: u.map((o, y) => e.jsxs("tr", {
                        onClick: () => m(o),
                        children: [e.jsxs("td", {
                            className: "cl-light",
                            children: [e.jsx("div", {
                                className: "ellipsis",
                                children: o.taskTypeDesc
                            }), e.jsx("div", {
                                children: c && new Date(Number(o.createTime)).toLocaleString()
                            })]
                        }), e.jsx("td", {
                            children: e.jsx(Mn.CoinFormat, {
                                icon: !0,
                                amount: Number(o.originalAmount),
                                name: o.originalCurrencyName
                            })
                        }), !c && e.jsx("td", {
                            children: new Date(Number(o.createTime)).toLocaleString()
                        }), e.jsx("td", {
                            className: "cl-light",
                            children: e.jsx(Ce, {
                                status: o.status
                            })
                        })]
                    }, y))
                })]
            })
        })
    }

    function ds({
        isDialog: s
    }) {
        const {
            urlParsed: a
        } = xs(), {
            type: t,
            status: r,
            page: i,
            pageSize: n,
            bonusType: l
        } = a.search, c = X(), d = m => {
            const u = C(C({}, a.search), m);
            c(`${a.pathname}?${new URLSearchParams(u).toString()}`, {
                replace: !0
            })
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(Xa, {
                type: t,
                status: r,
                bonusType: l,
                navUrl: d
            }), e.jsx("div", {
                className: "turnover-list",
                children: e.jsx(pn, {
                    isDialog: s,
                    page: i,
                    pageSize: n,
                    type: t,
                    bonusType: l,
                    status: r,
                    navUrl: d
                })
            })]
        })
    }
    let ke;
    Cs = Q.memo(function({
        isDialog: s
    }) {
        const a = j(),
            [t, r] = f.useState([{
                label: a("page.bonus.dashboard.title8"),
                value: 0
            }]);
        return f.useEffect(() => {
            h.post("/balance-controller/wager/task/types/", {
                isBonus: !0
            }).then(i => {
                const n = i.map(l => ({
                    label: l.taskTypeDesc,
                    value: l.taskType
                }));
                r([...t, ...n])
            }).catch(F)
        }, []), e.jsx(N.BonusControllerContext.Provider, {
            value: t,
            children: s ? e.jsx(te, {
                title: a("wallet.turnover.overview"),
                className: M(ke),
                children: e.jsx("div", {
                    className: "turnover-wrap",
                    children: e.jsx(ds, {
                        isDialog: !0
                    })
                })
            }) : e.jsx("div", {
                className: M(ke, "turnover-wrap"),
                children: e.jsx(ds, {})
            })
        })
    }), ke = "sdhknoc"
});
export {
    Re as B, ws as D, Oe as L, fe as Q, Ue as S, Me as T, Pe as U, J as W, qn as __tla, Ee as a, bs as b, he as c, Ve as d, Cs as e, $e as f, ks as g, qe as h, _s as i, Ts as j, re as k, Ke as l, We as m, we as n, Ls as o, Ss as u, Is as w
};
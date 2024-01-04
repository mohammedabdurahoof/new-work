const o = "basic-kyc-level",
    p = "advanced-kyc-level",
    S = {
        attemptCnt: null,
        levelName: "",
        reviewAnswer: null,
        reviewRejectType: null,
        reviewStatus: null,
        finalRejected: !1
    },
    B = {
        areaCode: "en",
        statusFill: 0,
        statusReview: 0,
        version: 0
    };

function f(e) {
    return e === 1 || e === 5 || e === 8
}

function m(e, i, A) {
    let s = !0,
        n = !1,
        a = !1,
        c = !1,
        l = !1,
        w = !1,
        t = !0,
        r = !1,
        v = !1,
        d = !1,
        u = !1,
        R = !1;
    return e.reviewStatus && (e.reviewStatus === "init" ? s = !0 : e.reviewStatus === "completed" ? (s = !1, e.reviewAnswer && (e.reviewAnswer === "GREEN" && (c = !0), e.reviewAnswer === "RED" && (a = !0, e.attemptCnt && e.attemptCnt > 0 && (w = !0)))) : (s = !1, n = !0, u = !0)), i.reviewStatus && (i.reviewStatus === "init" ? t = !0 : i.reviewStatus === "completed" ? (t = !1, i.reviewAnswer && (i.reviewAnswer === "GREEN" && (d = !0, c = !0), i.reviewAnswer === "RED" && (v = !0, i.attemptCnt && i.attemptCnt > 0 && (R = !0)))) : (t = !1, r = !0, l = !0)), (e.finalRejected || i.finalRejected) && (a = !0, v = !0, s = !1, t = !1), A && (n = !0, r = !0), {
        isBasicInit: s,
        isBasicPending: n,
        isBasicReject: a,
        isBasicSuccess: c,
        isBasicBlock: l,
        isBasicReVerify: w,
        isAdvancedInit: t,
        isAdvancedPending: r,
        isAdvancedReject: v,
        isAdvancedSuccess: d,
        isAdvancedBlock: u,
        isAdvancedReVerify: R
    }
}
export {
    p as a, o as b, m as c, f as g, S as i, B as o
};
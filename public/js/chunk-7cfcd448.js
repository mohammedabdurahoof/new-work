import {
    al as d,
    cu as m,
    cw as s,
    __tla as c
} from "./chunk-7513ee0e.js";
let e, i, n, o, r, t, l = Promise.all([(() => {
    try {
        return c
    } catch (a) {}
})()]).then(async () => {
    i = function() {
        return s.get("/agent/invitation/code/custom/")
    }, n = function() {
        return s.get("/agent/affiliate/dashboard/")
    }, r = function() {
        return s.get("/agent/affiliate/history/")
    };
    let a;
    o = d(() => s.get("/agent/reward/config/")), t = {
        availableCommissionUsd: "",
        availableRewardUsd: "",
        commissionUsd: "",
        friendNumber: 0,
        ratio: "",
        maxRatio: "",
        remainingRewardUsd: "",
        rewardUsd: "",
        todayCommissionUsd: "",
        todayWagerUsd: ""
    }, a = `//mycasino.${m.host}`, e = {
        management: a + "/",
        createCode: a + "/mycasino/referral",
        rewardWithdraw: a + "/mycasino/rewards",
        commissionWithdraw: a + "/mycasino/commissions",
        rewardDetails: a + "/mycasino/rewards",
        commissionDetails: a + "/mycasino/commissions",
        friends: a + "/mycasino/friends",
        dashboard: a + "/mycasino/dashboard",
        bannerdownload: a + "/mycasino/bannerdownload",
        downloadBanner: "https://res.bc.game/material.zip?md5=69dc359c0de077f93b62da3bc3e5520d"
    }
});
export {
    l as __tla, e as a, i as b, n as c, o as d, r as g, t as i
};
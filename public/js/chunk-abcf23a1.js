import {
    a as r,
    __tla as l
} from "./chunk-7513ee0e.js";
import {
    ds as n,
    eO as i,
    __tla as _
} from "./chunk-dcd0ca87.js";
let s, m = Promise.all([(() => {
    try {
        return l
    } catch (t) {}
})(), (() => {
    try {
        return _
    } catch (t) {}
})()]).then(async () => {
    s = (t = !0) => new Promise(async (a, p) => {
        if (n.google2StepAuth) {
            const e = await i(),
                o = String(Date.now());
            a(e ? {
                code: e,
                timestamp: o,
                verifyType: "google-2step-auth"
            } : null)
        } else t ? a({
            code: "",
            timestamp: String(Date.now()),
            verifyType: ""
        }) : (r.unsafeNavigate("#/settings/safe"), a(null))
    })
});
export {
    m as __tla, s
};
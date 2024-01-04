import {
    eJ as e,
    __tla as s
} from "./chunk-dcd0ca87.js";
import {
    c as p,
    __tla as i
} from "./chunk-222f02b2.js";
let l, n, u = Promise.all([(() => {
    try {
        return s
    } catch (_) {}
})(), (() => {
    try {
        return i
    } catch (_) {}
})()]).then(async () => {
    l = function(t, a, r) {
        a == "__proto__" && e ? e(t, a, {
            configurable: !0,
            enumerable: !0,
            value: r,
            writable: !0
        }) : t[a] = r
    };
    var _ = Object.prototype,
        c = _.hasOwnProperty,
        o = p(function(t, a, r) {
            c.call(t, r) ? t[r].push(a) : l(t, r, [a])
        });
    n = o
});
export {
    u as __tla, l as b, n as g
};
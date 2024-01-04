import {
    h as l,
    t as o,
    O as u,
    __tla as _
} from "./chunk-7513ee0e.js";
let s, c = Promise.all([(() => {
    try {
        return _
    } catch (n) {}
})()]).then(async () => {
    s = function(n, a, t) {
        var r = n == null ? 0 : n.length;
        return r ? (t && typeof t != "number" && l(n, a, t) ? (a = 0, t = r) : (a = a == null ? 0 : o(a), t = t === void 0 ? r : o(t)), u(n, a, t)) : []
    }
});
export {
    c as __tla, s
};
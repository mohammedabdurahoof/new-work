import {
    i as s,
    aa as h,
    c as i,
    __tla as m
} from "./chunk-7513ee0e.js";
let u, o, b = Promise.all([(() => {
    try {
        return m
    } catch (_) {}
})()]).then(async () => {
    var _ = 4294967295,
        c = _ >>> 1;
    u = function(a, r, f) {
        var e = 0,
            t = a == null ? e : a.length;
        if (typeof r == "number" && r === r && t <= c) {
            for (; e < t;) {
                var n = e + t >>> 1,
                    l = a[n];
                l !== null && !s(l) && (f ? l <= r : l < r) ? e = n + 1 : t = n
            }
            return t
        }
        return h(a, r, i, f)
    }, o = function(a, r) {
        return u(a, r)
    }
});
export {
    b as __tla, u as b, o as s
};
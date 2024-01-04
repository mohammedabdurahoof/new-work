import {
    g as s,
    __tla as i
} from "./chunk-dcd0ca87.js";
import {
    n as f,
    I as m,
    __tla as h
} from "./chunk-7513ee0e.js";
let _, p = Promise.all([(() => {
    try {
        return i
    } catch (l) {}
})(), (() => {
    try {
        return h
    } catch (l) {}
})()]).then(async () => {
    function l(t, n, o, r) {
        for (var a = -1, u = t == null ? 0 : t.length; ++a < u;) {
            var c = t[a];
            n(r, c, o(c), t)
        }
        return r
    }

    function e(t, n, o, r) {
        return s(t, function(a, u, c) {
            n(r, a, o(a), c)
        }), r
    }
    _ = function(t, n) {
        return function(o, r) {
            var a = f(o) ? l : e,
                u = n ? n() : {};
            return a(o, t, m(r), u)
        }
    }
});
export {
    p as __tla, _ as c
};
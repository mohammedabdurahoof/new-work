import {
    au as S,
    __tla as d
} from "./chunk-7513ee0e.js";
import {
    l as h,
    __tla as f
} from "./chunk-654ef298.js";
let n, o, l, i, c, u, _, m, y, p, D = Promise.all([(() => {
    try {
        return d
    } catch (t) {}
})(), (() => {
    try {
        return f
    } catch (t) {}
})()]).then(async () => {
    const t = () => h("modules/games");

    function a(r) {
        return S.lazy(async function() {
            const {
                asyncComponents: s
            } = await t();
            return s[r]()
        })
    }

    function e(r) {
        return async (...s) => (await (await t())[r]())(...s)
    }
    p = e("openGameDetail"), u = e("openGameDetailNodata"), _ = e("openAllPlayers"), y = e("loadShareLikeStore"), n = a("GameRouter"), o = a("MsgShareCard"), i = a("ShareDetail"), m = a("SetSeed"), l = a("ProvablyFair"), c = a("ValidateDialog")
});
export {
    n as G, o as M, l as P, i as S, c as V, D as __tla, u as a, _ as b, m as c, y as l, p as o
};
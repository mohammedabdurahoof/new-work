import {
    j as l,
    __tla as i
} from "./chunk-7513ee0e.js";
import {
    dp as o,
    __tla as u
} from "./chunk-dcd0ca87.js";
import {
    c as e
} from "./chunk-61302461.js";
let c, b = Promise.all([(() => {
    try {
        return i
    } catch (s) {}
})(), (() => {
    try {
        return u
    } catch (s) {}
})()]).then(async () => {
    const s = "/assets/bonus_tag.34ec657b.png";
    let r;
    c = o(function(t) {
        function m(a) {
            return t.matchNumbers && t.matchNumbers.findIndex(n => n === a) > -1
        }
        return l.jsxs("div", {
            className: e(r, t.matchNumbers && t.matchNumbers.length > 0 && "draw", "lottery-ball"),
            children: [t.lastTicketId > 0 && l.jsx("img", {
                className: "bonus",
                src: s
            }), t.numbers.map(a => l.jsx("div", {
                className: e("ball", m(a) && "active"),
                children: l.jsx("div", {
                    children: a
                })
            }, a)), l.jsx("div", {
                className: e("ball jackpot-ball", t.matchJackpotBallNumber ? t.matchJackpotBallNumber > 0 && "active" : ""),
                children: t.jackpotBallNumber
            })]
        })
    }), r = "vrfk49e"
});
export {
    c as A, b as __tla
};
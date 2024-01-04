import {
    cn as _,
    eh as o,
    a as m,
    j as e,
    __tla as u
} from "../../chunk-7513ee0e.js";
import {
    g
} from "../../chunk-7459b96e.js";
import {
    l as h,
    __tla as P
} from "../../chunk-654ef298.js";
import {
    dH as y,
    dG as d,
    __tla as f
} from "../../chunk-dcd0ca87.js";
import "../../chunk-61302461.js";
import "../../chunk-cf010ec4.js";
let n, i, c, j = Promise.all([(() => {
    try {
        return u
    } catch (a) {}
})(), (() => {
    try {
        return P
    } catch (a) {}
})(), (() => {
    try {
        return f
    } catch (a) {}
})()]).then(async () => {
    const a = () => h("modules/static").then(t => t.help()),
        l = _(a);
    n = function() {
        return console.log(l), e.jsx(l, {
            GroupPageTitleWrap: y,
            GroupPageLayout: d
        })
    };
    let r, s;
    c = ({
        ctx: t
    }) => {
        const {
            urlParsed: x,
            lang: p
        } = t;
        return {
            documentProps: g(p, "help")
        }
    }, r = o(a, "BonusTCDialog"), s = o(a, "PrivacyDialog"), i = async () => {
        m.emit("inject_dialog", [{
            path: "#/help_privacy",
            element: e.jsx(s, {}),
            isDialog: !0
        }, {
            path: "#/help_bonus",
            element: e.jsx(r, {}),
            isDialog: !0
        }])
    }
});
export {
    n as Page, j as __tla, i as installHelp, c as onPageData
};
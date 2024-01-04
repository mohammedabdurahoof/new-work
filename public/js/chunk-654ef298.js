import {
    _ as o
} from "./chunk-cf010ec4.js";
let r, _ = (async () => {
    let t;
    t = "", r = async s => {
        const [e, n] = s.replace("\0", "").split("?port=");
        e.replace("modules/", "");
        const l = `${t}/${e}/remoteEntry.js`;
        return await o(() =>
            import (l).then(async a => (await a.__tla, a)), [])
    }
})();
export {
    _ as __tla, r as l
};
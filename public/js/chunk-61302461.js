function u(...n) {
    return n.filter(Boolean).join(" ")
}

function f(n, o = 1) {
    let a = parseInt(n.slice(1, 3), 16),
        t = parseInt(n.slice(3, 5), 16),
        e = parseInt(n.slice(5), 16);
    return `rgba(${a}, ${t}, ${e}, ${o})`
}

function l(n) {
    return p(n)
}

function p(n) {
    const o = {
        ".darken &": {}
    };
    return Object.entries(n).forEach(([a, t]) => {
        const e = `--${d(t.toString())}`;
        o[e] = t[1] || t[0], o[".darken &"][e] = t[0], o[a] = `var(${e})`
    }), new Proxy(o, {
        ownKeys(a) {
            return Object.keys(a).filter(t => t.startsWith("--") || t.startsWith(".darken &"))
        }
    })
}
const d = g(n => y(n).toString(36));

function g(n, o) {
    if (typeof n != "function" || o != null && typeof o != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var a = function() {
        var t = arguments,
            e = o ? o.apply(this, t) : t[0],
            s = a.cache;
        if (s.has(e)) return s.get(e);
        var i = n.apply(this, t);
        return a.cache = s.set(e, i) || s, i
    };
    return a.cache = new Map, a
}

function y(n, o) {
    var a, t, e, s, i, h, r, c;
    for (a = n.length & 3, t = n.length - a, e = o, i = 3432918353, h = 461845907, c = 0; c < t;) r = n.charCodeAt(c) & 255 | (n.charCodeAt(++c) & 255) << 8 | (n.charCodeAt(++c) & 255) << 16 | (n.charCodeAt(++c) & 255) << 24, ++c, r = (r & 65535) * i + (((r >>> 16) * i & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (r & 65535) * h + (((r >>> 16) * h & 65535) << 16) & 4294967295, e ^= r, e = e << 13 | e >>> 19, s = (e & 65535) * 5 + (((e >>> 16) * 5 & 65535) << 16) & 4294967295, e = (s & 65535) + 27492 + (((s >>> 16) + 58964 & 65535) << 16);
    switch (r = 0, a) {
        case 3:
            r ^= (n.charCodeAt(c + 2) & 255) << 16;
        case 2:
            r ^= (n.charCodeAt(c + 1) & 255) << 8;
        case 1:
            r ^= n.charCodeAt(c) & 255, r = (r & 65535) * i + (((r >>> 16) * i & 65535) << 16) & 4294967295, r = r << 15 | r >>> 17, r = (r & 65535) * h + (((r >>> 16) * h & 65535) << 16) & 4294967295, e ^= r
    }
    return e ^= n.length, e ^= e >>> 16, e = (e & 65535) * 2246822507 + (((e >>> 16) * 2246822507 & 65535) << 16) & 4294967295, e ^= e >>> 13, e = (e & 65535) * 3266489909 + (((e >>> 16) * 3266489909 & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
}
export {
    u as c, f as o, l as t
};
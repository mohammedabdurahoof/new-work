try {
    self["workbox:window:6.6.0"] && _()
} catch (e) {}

function w(e, r) {
    return new Promise(function(t) {
        var o = new MessageChannel;
        o.port1.onmessage = function(f) {
            t(f.data)
        }, e.postMessage(r, [o.port2])
    })
}

function W(e, r) {
    for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function E(e, r) {
    (r == null || r > e.length) && (r = e.length);
    for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
    return o
}

function k(e, r) {
    var t;
    if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (t = function(f, g) {
                if (f) {
                    if (typeof f == "string") return E(f, g);
                    var l = Object.prototype.toString.call(f).slice(8, -1);
                    return l === "Object" && f.constructor && (l = f.constructor.name), l === "Map" || l === "Set" ? Array.from(f) : l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? E(f, g) : void 0
                }
            }(e)) || r && e && typeof e.length == "number") {
            t && (e = t);
            var o = 0;
            return function() {
                return o >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[o++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return (t = e[Symbol.iterator]()).next.bind(t)
}
try {
    self["workbox:core:6.6.0"] && _()
} catch (e) {}
var b = function() {
    var e = this;
    this.promise = new Promise(function(r, t) {
        e.resolve = r, e.reject = t
    })
};

function S(e, r) {
    var t = location.href;
    return new URL(e, t).href === new URL(r, t).href
}
var d = function(e, r) {
    this.type = e, Object.assign(this, r)
};

function p(e, r, t) {
    return t ? r ? r(e) : e : (e && e.then || (e = Promise.resolve(e)), r ? e.then(r) : e)
}

function L() {}
var j = {
    type: "SKIP_WAITING"
};

function P(e, r) {
    if (!r) return e && e.then ? e.then(L) : Promise.resolve()
}
var x = function(e) {
    var r, t;

    function o(v, c) {
        var n, i;
        return c === void 0 && (c = {}), (n = e.call(this) || this).nn = {}, n.tn = 0, n.rn = new b, n.en = new b, n.on = new b, n.un = 0, n.an = new Set, n.cn = function() {
            var s = n.fn,
                a = s.installing;
            n.tn > 0 || !S(a.scriptURL, n.sn.toString()) || performance.now() > n.un + 6e4 ? (n.vn = a, s.removeEventListener("updatefound", n.cn)) : (n.hn = a, n.an.add(a), n.rn.resolve(a)), ++n.tn, a.addEventListener("statechange", n.ln)
        }, n.ln = function(s) {
            var a = n.fn,
                u = s.target,
                h = u.state,
                m = u === n.vn,
                y = {
                    sw: u,
                    isExternal: m,
                    originalEvent: s
                };
            !m && n.mn && (y.isUpdate = !0), n.dispatchEvent(new d(h, y)), h === "installed" ? n.wn = self.setTimeout(function() {
                h === "installed" && a.waiting === u && n.dispatchEvent(new d("waiting", y))
            }, 200) : h === "activating" && (clearTimeout(n.wn), m || n.en.resolve(u))
        }, n.dn = function(s) {
            var a = n.hn,
                u = a !== navigator.serviceWorker.controller;
            n.dispatchEvent(new d("controlling", {
                isExternal: u,
                originalEvent: s,
                sw: a,
                isUpdate: n.mn
            })), u || n.on.resolve(a)
        }, n.gn = (i = function(s) {
            var a = s.data,
                u = s.ports,
                h = s.source;
            return p(n.getSW(), function() {
                n.an.has(h) && n.dispatchEvent(new d("message", {
                    data: a,
                    originalEvent: s,
                    ports: u,
                    sw: h
                }))
            })
        }, function() {
            for (var s = [], a = 0; a < arguments.length; a++) s[a] = arguments[a];
            try {
                return Promise.resolve(i.apply(this, s))
            } catch (u) {
                return Promise.reject(u)
            }
        }), n.sn = v, n.nn = c, navigator.serviceWorker.addEventListener("message", n.gn), n
    }
    t = e, (r = o).prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
    var f, g, l = o.prototype;
    return l.register = function(v) {
        var c = (v === void 0 ? {} : v).immediate,
            n = c !== void 0 && c;
        try {
            var i = this;
            return function(s, a) {
                var u = s();
                return u && u.then ? u.then(a) : a(u)
            }(function() {
                if (!n && document.readyState !== "complete") return P(new Promise(function(s) {
                    return window.addEventListener("load", s)
                }))
            }, function() {
                return i.mn = !!navigator.serviceWorker.controller, i.yn = i.pn(), p(i.bn(), function(s) {
                    i.fn = s, i.yn && (i.hn = i.yn, i.en.resolve(i.yn), i.on.resolve(i.yn), i.yn.addEventListener("statechange", i.ln, {
                        once: !0
                    }));
                    var a = i.fn.waiting;
                    return a && S(a.scriptURL, i.sn.toString()) && (i.hn = a, Promise.resolve().then(function() {
                        i.dispatchEvent(new d("waiting", {
                            sw: a,
                            wasWaitingBeforeRegister: !0
                        }))
                    }).then(function() {})), i.hn && (i.rn.resolve(i.hn), i.an.add(i.hn)), i.fn.addEventListener("updatefound", i.cn), navigator.serviceWorker.addEventListener("controllerchange", i.dn), i.fn
                })
            })
        } catch (s) {
            return Promise.reject(s)
        }
    }, l.update = function() {
        try {
            return this.fn ? P(this.fn.update()) : void 0
        } catch (v) {
            return Promise.reject(v)
        }
    }, l.getSW = function() {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
    }, l.messageSW = function(v) {
        try {
            return p(this.getSW(), function(c) {
                return w(c, v)
            })
        } catch (c) {
            return Promise.reject(c)
        }
    }, l.messageSkipWaiting = function() {
        this.fn && this.fn.waiting && w(this.fn.waiting, j)
    }, l.pn = function() {
        var v = navigator.serviceWorker.controller;
        return v && S(v.scriptURL, this.sn.toString()) ? v : void 0
    }, l.bn = function() {
        try {
            var v = this;
            return function(c, n) {
                try {
                    var i = c()
                } catch (s) {
                    return n(s)
                }
                return i && i.then ? i.then(void 0, n) : i
            }(function() {
                return p(navigator.serviceWorker.register(v.sn, v.nn), function(c) {
                    return v.un = performance.now(), c
                })
            }, function(c) {
                throw c
            })
        } catch (c) {
            return Promise.reject(c)
        }
    }, f = o, (g = [{
        key: "active",
        get: function() {
            return this.en.promise
        }
    }, {
        key: "controlling",
        get: function() {
            return this.on.promise
        }
    }]) && W(f.prototype, g), o
}(function() {
    function e() {
        this.Pn = new Map
    }
    var r = e.prototype;
    return r.addEventListener = function(t, o) {
        this.Sn(t).add(o)
    }, r.removeEventListener = function(t, o) {
        this.Sn(t).delete(o)
    }, r.dispatchEvent = function(t) {
        t.target = this;
        for (var o, f = k(this.Sn(t.type)); !(o = f()).done;)(0, o.value)(t)
    }, r.Sn = function(t) {
        return this.Pn.has(t) || this.Pn.set(t, new Set), this.Pn.get(t)
    }, e
}());
export {
    x as Workbox, d as WorkboxEvent, w as messageSW
};
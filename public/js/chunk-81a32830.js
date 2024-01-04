var hn = Object.defineProperty;
var $e = Object.getOwnPropertySymbols;
var mn = Object.prototype.hasOwnProperty,
    vn = Object.prototype.propertyIsEnumerable;
var He = (q, W, L) => W in q ? hn(q, W, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: L
    }) : q[W] = L,
    Ye = (q, W) => {
        for (var L in W || (W = {})) mn.call(W, L) && He(q, L, W[L]);
        if ($e)
            for (var L of $e(W)) vn.call(W, L) && He(q, L, W[L]);
        return q
    };
import {
    eK as fe,
    ds as Y,
    eL as gn,
    __tla as pn
} from "./chunk-dcd0ca87.js";
import {
    dL as le,
    dM as yn,
    ct as F,
    cw as T,
    __tla as bn
} from "./chunk-7513ee0e.js";
let Je, Qe, Ve, Xe, Ze, et, tt, nt, rt, ot, at, it, ut, ct, wn = Promise.all([(() => {
    try {
        return pn
    } catch (q) {}
})(), (() => {
    try {
        return bn
    } catch (q) {}
})()]).then(async () => {
    var q = {
        exports: {}
    };
    (function(h, v) {
        (function(b) {
            h.exports = b()
        })(function() {
            return function b(N, P, C) {
                function M(A, H) {
                    if (!P[A]) {
                        if (!N[A]) {
                            var d = typeof fe == "function" && fe;
                            if (!H && d) return d(A, !0);
                            if (I) return I(A, !0);
                            var g = new Error("Cannot find module '" + A + "'");
                            throw g.code = "MODULE_NOT_FOUND", g
                        }
                        var D = P[A] = {
                            exports: {}
                        };
                        N[A][0].call(D.exports, function(O) {
                            var J = N[A][1][O];
                            return M(J || O)
                        }, D, D.exports, b, N, P, C)
                    }
                    return P[A].exports
                }
                for (var I = typeof fe == "function" && fe, B = 0; B < C.length; B++) M(C[B]);
                return M
            }({
                1: [function(b, N, P) {
                    (function(C) {
                        var M = C.MutationObserver || C.WebKitMutationObserver,
                            I;
                        if (M) {
                            var B = 0,
                                A = new M(O),
                                H = C.document.createTextNode("");
                            A.observe(H, {
                                characterData: !0
                            }), I = function() {
                                H.data = B = ++B % 2
                            }
                        } else if (!C.setImmediate && typeof C.MessageChannel < "u") {
                            var d = new C.MessageChannel;
                            d.port1.onmessage = O, I = function() {
                                d.port2.postMessage(0)
                            }
                        } else "document" in C && "onreadystatechange" in C.document.createElement("script") ? I = function() {
                            var x = C.document.createElement("script");
                            x.onreadystatechange = function() {
                                O(), x.onreadystatechange = null, x.parentNode.removeChild(x), x = null
                            }, C.document.documentElement.appendChild(x)
                        } : I = function() {
                            setTimeout(O, 0)
                        };
                        var g, D = [];

                        function O() {
                            g = !0;
                            for (var x, Q, R = D.length; R;) {
                                for (Q = D, D = [], x = -1; ++x < R;) Q[x]();
                                R = D.length
                            }
                            g = !1
                        }
                        N.exports = J;

                        function J(x) {
                            D.push(x) === 1 && !g && I()
                        }
                    }).call(this, typeof le < "u" ? le : typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {}],
                2: [function(b, N, P) {
                    var C = b(1);

                    function M() {}
                    var I = {},
                        B = ["REJECTED"],
                        A = ["FULFILLED"],
                        H = ["PENDING"];
                    N.exports = d;

                    function d(l) {
                        if (typeof l != "function") throw new TypeError("resolver must be a function");
                        this.state = H, this.queue = [], this.outcome = void 0, l !== M && J(this, l)
                    }
                    d.prototype.catch = function(l) {
                        return this.then(null, l)
                    }, d.prototype.then = function(l, w) {
                        if (typeof l != "function" && this.state === A || typeof w != "function" && this.state === B) return this;
                        var y = new this.constructor(M);
                        if (this.state !== H) {
                            var S = this.state === A ? l : w;
                            D(y, S, this.outcome)
                        } else this.queue.push(new g(y, l, w));
                        return y
                    };

                    function g(l, w, y) {
                        this.promise = l, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof y == "function" && (this.onRejected = y, this.callRejected = this.otherCallRejected)
                    }
                    g.prototype.callFulfilled = function(l) {
                        I.resolve(this.promise, l)
                    }, g.prototype.otherCallFulfilled = function(l) {
                        D(this.promise, this.onFulfilled, l)
                    }, g.prototype.callRejected = function(l) {
                        I.reject(this.promise, l)
                    }, g.prototype.otherCallRejected = function(l) {
                        D(this.promise, this.onRejected, l)
                    };

                    function D(l, w, y) {
                        C(function() {
                            var S;
                            try {
                                S = w(y)
                            } catch (z) {
                                return I.reject(l, z)
                            }
                            S === l ? I.reject(l, new TypeError("Cannot resolve promise with itself")) : I.resolve(l, S)
                        })
                    }
                    I.resolve = function(l, w) {
                        var y = x(O, w);
                        if (y.status === "error") return I.reject(l, y.value);
                        var S = y.value;
                        if (S) J(l, S);
                        else {
                            l.state = A, l.outcome = w;
                            for (var z = -1, U = l.queue.length; ++z < U;) l.queue[z].callFulfilled(w)
                        }
                        return l
                    }, I.reject = function(l, w) {
                        l.state = B, l.outcome = w;
                        for (var y = -1, S = l.queue.length; ++y < S;) l.queue[y].callRejected(w);
                        return l
                    };

                    function O(l) {
                        var w = l && l.then;
                        if (l && (typeof l == "object" || typeof l == "function") && typeof w == "function") return function() {
                            w.apply(l, arguments)
                        }
                    }

                    function J(l, w) {
                        var y = !1;

                        function S(G) {
                            y || (y = !0, I.reject(l, G))
                        }

                        function z(G) {
                            y || (y = !0, I.resolve(l, G))
                        }

                        function U() {
                            w(z, S)
                        }
                        var K = x(U);
                        K.status === "error" && S(K.value)
                    }

                    function x(l, w) {
                        var y = {};
                        try {
                            y.value = l(w), y.status = "success"
                        } catch (S) {
                            y.status = "error", y.value = S
                        }
                        return y
                    }
                    d.resolve = Q;

                    function Q(l) {
                        return l instanceof this ? l : I.resolve(new this(M), l)
                    }
                    d.reject = R;

                    function R(l) {
                        var w = new this(M);
                        return I.reject(w, l)
                    }
                    d.all = de;

                    function de(l) {
                        var w = this;
                        if (Object.prototype.toString.call(l) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                        var y = l.length,
                            S = !1;
                        if (!y) return this.resolve([]);
                        for (var z = new Array(y), U = 0, K = -1, G = new this(M); ++K < y;) V(l[K], K);
                        return G;

                        function V(oe, ue) {
                            w.resolve(oe).then(he, function(ne) {
                                S || (S = !0, I.reject(G, ne))
                            });

                            function he(ne) {
                                z[ue] = ne, ++U === y && !S && (S = !0, I.resolve(G, z))
                            }
                        }
                    }
                    d.race = te;

                    function te(l) {
                        var w = this;
                        if (Object.prototype.toString.call(l) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                        var y = l.length,
                            S = !1;
                        if (!y) return this.resolve([]);
                        for (var z = -1, U = new this(M); ++z < y;) K(l[z]);
                        return U;

                        function K(G) {
                            w.resolve(G).then(function(V) {
                                S || (S = !0, I.resolve(U, V))
                            }, function(V) {
                                S || (S = !0, I.reject(U, V))
                            })
                        }
                    }
                }, {
                    1: 1
                }],
                3: [function(b, N, P) {
                    (function(C) {
                        typeof C.Promise != "function" && (C.Promise = b(2))
                    }).call(this, typeof le < "u" ? le : typeof self < "u" ? self : typeof window < "u" ? window : {})
                }, {
                    2: 2
                }],
                4: [function(b, N, P) {
                    var C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    };

                    function M(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }

                    function I() {
                        try {
                            if (typeof indexedDB < "u") return indexedDB;
                            if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                            if (typeof mozIndexedDB < "u") return mozIndexedDB;
                            if (typeof OIndexedDB < "u") return OIndexedDB;
                            if (typeof msIndexedDB < "u") return msIndexedDB
                        } catch (e) {
                            return
                        }
                    }
                    var B = I();

                    function A() {
                        try {
                            if (!B || !B.open) return !1;
                            var e = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                t = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                            return (!e || t) && typeof indexedDB < "u" && typeof IDBKeyRange < "u"
                        } catch (n) {
                            return !1
                        }
                    }

                    function H(e, t) {
                        e = e || [], t = t || {};
                        try {
                            return new Blob(e, t)
                        } catch (a) {
                            if (a.name !== "TypeError") throw a;
                            for (var n = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, o = new n, r = 0; r < e.length; r += 1) o.append(e[r]);
                            return o.getBlob(t.type)
                        }
                    }
                    typeof Promise > "u" && b(3);
                    var d = Promise;

                    function g(e, t) {
                        t && e.then(function(n) {
                            t(null, n)
                        }, function(n) {
                            t(n)
                        })
                    }

                    function D(e, t, n) {
                        typeof t == "function" && e.then(t), typeof n == "function" && e.catch(n)
                    }

                    function O(e) {
                        return typeof e != "string" && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e
                    }

                    function J() {
                        if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1]
                    }
                    var x = "local-forage-detect-blob-support",
                        Q = void 0,
                        R = {},
                        de = Object.prototype.toString,
                        te = "readonly",
                        l = "readwrite";

                    function w(e) {
                        for (var t = e.length, n = new ArrayBuffer(t), o = new Uint8Array(n), r = 0; r < t; r++) o[r] = e.charCodeAt(r);
                        return n
                    }

                    function y(e) {
                        return new d(function(t) {
                            var n = e.transaction(x, l),
                                o = H([""]);
                            n.objectStore(x).put(o, "key"), n.onabort = function(r) {
                                r.preventDefault(), r.stopPropagation(), t(!1)
                            }, n.oncomplete = function() {
                                var r = navigator.userAgent.match(/Chrome\/(\d+)/),
                                    a = navigator.userAgent.match(/Edge\//);
                                t(a || !r || parseInt(r[1], 10) >= 43)
                            }
                        }).catch(function() {
                            return !1
                        })
                    }

                    function S(e) {
                        return typeof Q == "boolean" ? d.resolve(Q) : y(e).then(function(t) {
                            return Q = t, Q
                        })
                    }

                    function z(e) {
                        var t = R[e.name],
                            n = {};
                        n.promise = new d(function(o, r) {
                            n.resolve = o, n.reject = r
                        }), t.deferredOperations.push(n), t.dbReady ? t.dbReady = t.dbReady.then(function() {
                            return n.promise
                        }) : t.dbReady = n.promise
                    }

                    function U(e) {
                        var t = R[e.name],
                            n = t.deferredOperations.pop();
                        if (n) return n.resolve(), n.promise
                    }

                    function K(e, t) {
                        var n = R[e.name],
                            o = n.deferredOperations.pop();
                        if (o) return o.reject(t), o.promise
                    }

                    function G(e, t) {
                        return new d(function(n, o) {
                            if (R[e.name] = R[e.name] || Ce(), e.db)
                                if (t) z(e), e.db.close();
                                else return n(e.db);
                            var r = [e.name];
                            t && r.push(e.version);
                            var a = B.open.apply(B, r);
                            t && (a.onupgradeneeded = function(i) {
                                var u = a.result;
                                try {
                                    u.createObjectStore(e.storeName), i.oldVersion <= 1 && u.createObjectStore(x)
                                } catch (f) {
                                    if (f.name === "ConstraintError") console.warn('The database "' + e.name + '" has been upgraded from version ' + i.oldVersion + " to version " + i.newVersion + ', but the storage "' + e.storeName + '" already exists.');
                                    else throw f
                                }
                            }), a.onerror = function(i) {
                                i.preventDefault(), o(a.error)
                            }, a.onsuccess = function() {
                                var i = a.result;
                                i.onversionchange = function(u) {
                                    u.target.close()
                                }, n(i), U(e)
                            }
                        })
                    }

                    function V(e) {
                        return G(e, !1)
                    }

                    function oe(e) {
                        return G(e, !0)
                    }

                    function ue(e, t) {
                        if (!e.db) return !0;
                        var n = !e.db.objectStoreNames.contains(e.storeName),
                            o = e.version < e.db.version,
                            r = e.version > e.db.version;
                        if (o && (e.version !== t && console.warn('The database "' + e.name + `" can't be downgraded from version ` + e.db.version + " to version " + e.version + "."), e.version = e.db.version), r || n) {
                            if (n) {
                                var a = e.db.version + 1;
                                a > e.version && (e.version = a)
                            }
                            return !0
                        }
                        return !1
                    }

                    function he(e) {
                        return new d(function(t, n) {
                            var o = new FileReader;
                            o.onerror = n, o.onloadend = function(r) {
                                var a = btoa(r.target.result || "");
                                t({
                                    __local_forage_encoded_blob: !0,
                                    data: a,
                                    type: e.type
                                })
                            }, o.readAsBinaryString(e)
                        })
                    }

                    function ne(e) {
                        var t = w(atob(e.data));
                        return H([t], {
                            type: e.type
                        })
                    }

                    function Ne(e) {
                        return e && e.__local_forage_encoded_blob
                    }

                    function mt(e) {
                        var t = this,
                            n = t._initReady().then(function() {
                                var o = R[t._dbInfo.name];
                                if (o && o.dbReady) return o.dbReady
                            });
                        return D(n, e, e), n
                    }

                    function vt(e) {
                        z(e);
                        for (var t = R[e.name], n = t.forages, o = 0; o < n.length; o++) {
                            var r = n[o];
                            r._dbInfo.db && (r._dbInfo.db.close(), r._dbInfo.db = null)
                        }
                        return e.db = null, V(e).then(function(a) {
                            return e.db = a, ue(e) ? oe(e) : a
                        }).then(function(a) {
                            e.db = t.db = a;
                            for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = a
                        }).catch(function(a) {
                            throw K(e, a), a
                        })
                    }

                    function X(e, t, n, o) {
                        o === void 0 && (o = 1);
                        try {
                            var r = e.db.transaction(e.storeName, t);
                            n(null, r)
                        } catch (a) {
                            if (o > 0 && (!e.db || a.name === "InvalidStateError" || a.name === "NotFoundError")) return d.resolve().then(function() {
                                if (!e.db || a.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version) return e.db && (e.version = e.db.version + 1), oe(e)
                            }).then(function() {
                                return vt(e).then(function() {
                                    X(e, t, n, o - 1)
                                })
                            }).catch(n);
                            n(a)
                        }
                    }

                    function Ce() {
                        return {
                            forages: [],
                            db: null,
                            dbReady: null,
                            deferredOperations: []
                        }
                    }

                    function gt(e) {
                        var t = this,
                            n = {
                                db: null
                            };
                        if (e)
                            for (var o in e) n[o] = e[o];
                        var r = R[n.name];
                        r || (r = Ce(), R[n.name] = r), r.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = mt);
                        var a = [];

                        function i() {
                            return d.resolve()
                        }
                        for (var u = 0; u < r.forages.length; u++) {
                            var f = r.forages[u];
                            f !== t && a.push(f._initReady().catch(i))
                        }
                        var s = r.forages.slice(0);
                        return d.all(a).then(function() {
                            return n.db = r.db, V(n)
                        }).then(function(c) {
                            return n.db = c, ue(n, t._defaultConfig.version) ? oe(n) : c
                        }).then(function(c) {
                            n.db = r.db = c, t._dbInfo = n;
                            for (var m = 0; m < s.length; m++) {
                                var p = s[m];
                                p !== t && (p._dbInfo.db = n.db, p._dbInfo.version = n.version)
                            }
                        })
                    }

                    function pt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = new d(function(r, a) {
                            n.ready().then(function() {
                                X(n._dbInfo, te, function(i, u) {
                                    if (i) return a(i);
                                    try {
                                        var f = u.objectStore(n._dbInfo.storeName),
                                            s = f.get(e);
                                        s.onsuccess = function() {
                                            var c = s.result;
                                            c === void 0 && (c = null), Ne(c) && (c = ne(c)), r(c)
                                        }, s.onerror = function() {
                                            a(s.error)
                                        }
                                    } catch (c) {
                                        a(c)
                                    }
                                })
                            }).catch(a)
                        });
                        return g(o, t), o
                    }

                    function yt(e, t) {
                        var n = this,
                            o = new d(function(r, a) {
                                n.ready().then(function() {
                                    X(n._dbInfo, te, function(i, u) {
                                        if (i) return a(i);
                                        try {
                                            var f = u.objectStore(n._dbInfo.storeName),
                                                s = f.openCursor(),
                                                c = 1;
                                            s.onsuccess = function() {
                                                var m = s.result;
                                                if (m) {
                                                    var p = m.value;
                                                    Ne(p) && (p = ne(p));
                                                    var E = e(p, m.key, c++);
                                                    E !== void 0 ? r(E) : m.continue()
                                                } else r()
                                            }, s.onerror = function() {
                                                a(s.error)
                                            }
                                        } catch (m) {
                                            a(m)
                                        }
                                    })
                                }).catch(a)
                            });
                        return g(o, t), o
                    }

                    function bt(e, t, n) {
                        var o = this;
                        e = O(e);
                        var r = new d(function(a, i) {
                            var u;
                            o.ready().then(function() {
                                return u = o._dbInfo, de.call(t) === "[object Blob]" ? S(u.db).then(function(f) {
                                    return f ? t : he(t)
                                }) : t
                            }).then(function(f) {
                                X(o._dbInfo, l, function(s, c) {
                                    if (s) return i(s);
                                    try {
                                        var m = c.objectStore(o._dbInfo.storeName);
                                        f === null && (f = void 0);
                                        var p = m.put(f, e);
                                        c.oncomplete = function() {
                                            f === void 0 && (f = null), a(f)
                                        }, c.onabort = c.onerror = function() {
                                            var E = p.error ? p.error : p.transaction.error;
                                            i(E)
                                        }
                                    } catch (E) {
                                        i(E)
                                    }
                                })
                            }).catch(i)
                        });
                        return g(r, n), r
                    }

                    function wt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = new d(function(r, a) {
                            n.ready().then(function() {
                                X(n._dbInfo, l, function(i, u) {
                                    if (i) return a(i);
                                    try {
                                        var f = u.objectStore(n._dbInfo.storeName),
                                            s = f.delete(e);
                                        u.oncomplete = function() {
                                            r()
                                        }, u.onerror = function() {
                                            a(s.error)
                                        }, u.onabort = function() {
                                            var c = s.error ? s.error : s.transaction.error;
                                            a(c)
                                        }
                                    } catch (c) {
                                        a(c)
                                    }
                                })
                            }).catch(a)
                        });
                        return g(o, t), o
                    }

                    function _t(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    X(t._dbInfo, l, function(a, i) {
                                        if (a) return r(a);
                                        try {
                                            var u = i.objectStore(t._dbInfo.storeName),
                                                f = u.clear();
                                            i.oncomplete = function() {
                                                o()
                                            }, i.onabort = i.onerror = function() {
                                                var s = f.error ? f.error : f.transaction.error;
                                                r(s)
                                            }
                                        } catch (s) {
                                            r(s)
                                        }
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function It(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    X(t._dbInfo, te, function(a, i) {
                                        if (a) return r(a);
                                        try {
                                            var u = i.objectStore(t._dbInfo.storeName),
                                                f = u.count();
                                            f.onsuccess = function() {
                                                o(f.result)
                                            }, f.onerror = function() {
                                                r(f.error)
                                            }
                                        } catch (s) {
                                            r(s)
                                        }
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function St(e, t) {
                        var n = this,
                            o = new d(function(r, a) {
                                if (e < 0) {
                                    r(null);
                                    return
                                }
                                n.ready().then(function() {
                                    X(n._dbInfo, te, function(i, u) {
                                        if (i) return a(i);
                                        try {
                                            var f = u.objectStore(n._dbInfo.storeName),
                                                s = !1,
                                                c = f.openKeyCursor();
                                            c.onsuccess = function() {
                                                var m = c.result;
                                                if (!m) {
                                                    r(null);
                                                    return
                                                }
                                                e === 0 || s ? r(m.key) : (s = !0, m.advance(e))
                                            }, c.onerror = function() {
                                                a(c.error)
                                            }
                                        } catch (m) {
                                            a(m)
                                        }
                                    })
                                }).catch(a)
                            });
                        return g(o, t), o
                    }

                    function Et(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    X(t._dbInfo, te, function(a, i) {
                                        if (a) return r(a);
                                        try {
                                            var u = i.objectStore(t._dbInfo.storeName),
                                                f = u.openKeyCursor(),
                                                s = [];
                                            f.onsuccess = function() {
                                                var c = f.result;
                                                if (!c) {
                                                    o(s);
                                                    return
                                                }
                                                s.push(c.key), c.continue()
                                            }, f.onerror = function() {
                                                r(f.error)
                                            }
                                        } catch (c) {
                                            r(c)
                                        }
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function Nt(e, t) {
                        t = J.apply(this, arguments);
                        var n = this.config();
                        e = typeof e != "function" && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                        var o = this,
                            r;
                        if (!e.name) r = d.reject("Invalid arguments");
                        else {
                            var a = e.name === n.name && o._dbInfo.db,
                                i = a ? d.resolve(o._dbInfo.db) : V(e).then(function(u) {
                                    var f = R[e.name],
                                        s = f.forages;
                                    f.db = u;
                                    for (var c = 0; c < s.length; c++) s[c]._dbInfo.db = u;
                                    return u
                                });
                            e.storeName ? r = i.then(function(u) {
                                if (u.objectStoreNames.contains(e.storeName)) {
                                    var f = u.version + 1;
                                    z(e);
                                    var s = R[e.name],
                                        c = s.forages;
                                    u.close();
                                    for (var m = 0; m < c.length; m++) {
                                        var p = c[m];
                                        p._dbInfo.db = null, p._dbInfo.version = f
                                    }
                                    var E = new d(function(_, k) {
                                        var j = B.open(e.name, f);
                                        j.onerror = function($) {
                                            var _e = j.result;
                                            _e.close(), k($)
                                        }, j.onupgradeneeded = function() {
                                            var $ = j.result;
                                            $.deleteObjectStore(e.storeName)
                                        }, j.onsuccess = function() {
                                            var $ = j.result;
                                            $.close(), _($)
                                        }
                                    });
                                    return E.then(function(_) {
                                        s.db = _;
                                        for (var k = 0; k < c.length; k++) {
                                            var j = c[k];
                                            j._dbInfo.db = _, U(j._dbInfo)
                                        }
                                    }).catch(function(_) {
                                        throw (K(e, _) || d.resolve()).catch(function() {}), _
                                    })
                                }
                            }) : r = i.then(function(u) {
                                z(e);
                                var f = R[e.name],
                                    s = f.forages;
                                u.close();
                                for (var c = 0; c < s.length; c++) {
                                    var m = s[c];
                                    m._dbInfo.db = null
                                }
                                var p = new d(function(E, _) {
                                    var k = B.deleteDatabase(e.name);
                                    k.onerror = function() {
                                        var j = k.result;
                                        j && j.close(), _(k.error)
                                    }, k.onblocked = function() {
                                        console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed')
                                    }, k.onsuccess = function() {
                                        var j = k.result;
                                        j && j.close(), E(j)
                                    }
                                });
                                return p.then(function(E) {
                                    f.db = E;
                                    for (var _ = 0; _ < s.length; _++) {
                                        var k = s[_];
                                        U(k._dbInfo)
                                    }
                                }).catch(function(E) {
                                    throw (K(e, E) || d.resolve()).catch(function() {}), E
                                })
                            })
                        }
                        return g(r, t), r
                    }
                    var Ct = {
                        _driver: "asyncStorage",
                        _initStorage: gt,
                        _support: A(),
                        iterate: yt,
                        getItem: pt,
                        setItem: bt,
                        removeItem: wt,
                        clear: _t,
                        length: It,
                        key: St,
                        keys: Et,
                        dropInstance: Nt
                    };

                    function jt() {
                        return typeof openDatabase == "function"
                    }
                    var Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        Dt = "~~local_forage_type~",
                        je = /^~~local_forage_type~([^~]+)~/,
                        ce = "__lfsc__:",
                        me = ce.length,
                        ve = "arbf",
                        ge = "blob",
                        De = "si08",
                        ke = "ui08",
                        Oe = "uic8",
                        xe = "si16",
                        Re = "si32",
                        Ae = "ur16",
                        ze = "ui32",
                        Be = "fl32",
                        Te = "fl64",
                        Me = me + ve.length,
                        Fe = Object.prototype.toString;

                    function Le(e) {
                        var t = e.length * .75,
                            n = e.length,
                            o, r = 0,
                            a, i, u, f;
                        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
                        var s = new ArrayBuffer(t),
                            c = new Uint8Array(s);
                        for (o = 0; o < n; o += 4) a = Z.indexOf(e[o]), i = Z.indexOf(e[o + 1]), u = Z.indexOf(e[o + 2]), f = Z.indexOf(e[o + 3]), c[r++] = a << 2 | i >> 4, c[r++] = (i & 15) << 4 | u >> 2, c[r++] = (u & 3) << 6 | f & 63;
                        return s
                    }

                    function pe(e) {
                        var t = new Uint8Array(e),
                            n = "",
                            o;
                        for (o = 0; o < t.length; o += 3) n += Z[t[o] >> 2], n += Z[(t[o] & 3) << 4 | t[o + 1] >> 4], n += Z[(t[o + 1] & 15) << 2 | t[o + 2] >> 6], n += Z[t[o + 2] & 63];
                        return t.length % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : t.length % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n
                    }

                    function kt(e, t) {
                        var n = "";
                        if (e && (n = Fe.call(e)), e && (n === "[object ArrayBuffer]" || e.buffer && Fe.call(e.buffer) === "[object ArrayBuffer]")) {
                            var o, r = ce;
                            e instanceof ArrayBuffer ? (o = e, r += ve) : (o = e.buffer, n === "[object Int8Array]" ? r += De : n === "[object Uint8Array]" ? r += ke : n === "[object Uint8ClampedArray]" ? r += Oe : n === "[object Int16Array]" ? r += xe : n === "[object Uint16Array]" ? r += Ae : n === "[object Int32Array]" ? r += Re : n === "[object Uint32Array]" ? r += ze : n === "[object Float32Array]" ? r += Be : n === "[object Float64Array]" ? r += Te : t(new Error("Failed to get type for BinaryArray"))), t(r + pe(o))
                        } else if (n === "[object Blob]") {
                            var a = new FileReader;
                            a.onload = function() {
                                var i = Dt + e.type + "~" + pe(this.result);
                                t(ce + ge + i)
                            }, a.readAsArrayBuffer(e)
                        } else try {
                            t(JSON.stringify(e))
                        } catch (i) {
                            console.error("Couldn't convert value into a JSON string: ", e), t(null, i)
                        }
                    }

                    function Ot(e) {
                        if (e.substring(0, me) !== ce) return JSON.parse(e);
                        var t = e.substring(Me),
                            n = e.substring(me, Me),
                            o;
                        if (n === ge && je.test(t)) {
                            var r = t.match(je);
                            o = r[1], t = t.substring(r[0].length)
                        }
                        var a = Le(t);
                        switch (n) {
                            case ve:
                                return a;
                            case ge:
                                return H([a], {
                                    type: o
                                });
                            case De:
                                return new Int8Array(a);
                            case ke:
                                return new Uint8Array(a);
                            case Oe:
                                return new Uint8ClampedArray(a);
                            case xe:
                                return new Int16Array(a);
                            case Ae:
                                return new Uint16Array(a);
                            case Re:
                                return new Int32Array(a);
                            case ze:
                                return new Uint32Array(a);
                            case Be:
                                return new Float32Array(a);
                            case Te:
                                return new Float64Array(a);
                            default:
                                throw new Error("Unkown type: " + n)
                        }
                    }
                    var ye = {
                        serialize: kt,
                        deserialize: Ot,
                        stringToBuffer: Le,
                        bufferToString: pe
                    };

                    function Pe(e, t, n, o) {
                        e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, o)
                    }

                    function xt(e) {
                        var t = this,
                            n = {
                                db: null
                            };
                        if (e)
                            for (var o in e) n[o] = typeof e[o] != "string" ? e[o].toString() : e[o];
                        var r = new d(function(a, i) {
                            try {
                                n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                            } catch (u) {
                                return i(u)
                            }
                            n.db.transaction(function(u) {
                                Pe(u, n, function() {
                                    t._dbInfo = n, a()
                                }, function(f, s) {
                                    i(s)
                                })
                            }, i)
                        });
                        return n.serializer = ye, r
                    }

                    function ee(e, t, n, o, r, a) {
                        e.executeSql(n, o, r, function(i, u) {
                            u.code === u.SYNTAX_ERR ? i.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function(f, s) {
                                s.rows.length ? a(f, u) : Pe(f, t, function() {
                                    f.executeSql(n, o, r, a)
                                }, a)
                            }, a) : a(i, u)
                        }, a)
                    }

                    function Rt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = new d(function(r, a) {
                            n.ready().then(function() {
                                var i = n._dbInfo;
                                i.db.transaction(function(u) {
                                    ee(u, i, "SELECT * FROM " + i.storeName + " WHERE key = ? LIMIT 1", [e], function(f, s) {
                                        var c = s.rows.length ? s.rows.item(0).value : null;
                                        c && (c = i.serializer.deserialize(c)), r(c)
                                    }, function(f, s) {
                                        a(s)
                                    })
                                })
                            }).catch(a)
                        });
                        return g(o, t), o
                    }

                    function At(e, t) {
                        var n = this,
                            o = new d(function(r, a) {
                                n.ready().then(function() {
                                    var i = n._dbInfo;
                                    i.db.transaction(function(u) {
                                        ee(u, i, "SELECT * FROM " + i.storeName, [], function(f, s) {
                                            for (var c = s.rows, m = c.length, p = 0; p < m; p++) {
                                                var E = c.item(p),
                                                    _ = E.value;
                                                if (_ && (_ = i.serializer.deserialize(_)), _ = e(_, E.key, p + 1), _ !== void 0) {
                                                    r(_);
                                                    return
                                                }
                                            }
                                            r()
                                        }, function(f, s) {
                                            a(s)
                                        })
                                    })
                                }).catch(a)
                            });
                        return g(o, t), o
                    }

                    function Ue(e, t, n, o) {
                        var r = this;
                        e = O(e);
                        var a = new d(function(i, u) {
                            r.ready().then(function() {
                                t === void 0 && (t = null);
                                var f = t,
                                    s = r._dbInfo;
                                s.serializer.serialize(t, function(c, m) {
                                    m ? u(m) : s.db.transaction(function(p) {
                                        ee(p, s, "INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, c], function() {
                                            i(f)
                                        }, function(E, _) {
                                            u(_)
                                        })
                                    }, function(p) {
                                        if (p.code === p.QUOTA_ERR) {
                                            if (o > 0) {
                                                i(Ue.apply(r, [e, f, n, o - 1]));
                                                return
                                            }
                                            u(p)
                                        }
                                    })
                                })
                            }).catch(u)
                        });
                        return g(a, n), a
                    }

                    function zt(e, t, n) {
                        return Ue.apply(this, [e, t, n, 1])
                    }

                    function Bt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = new d(function(r, a) {
                            n.ready().then(function() {
                                var i = n._dbInfo;
                                i.db.transaction(function(u) {
                                    ee(u, i, "DELETE FROM " + i.storeName + " WHERE key = ?", [e], function() {
                                        r()
                                    }, function(f, s) {
                                        a(s)
                                    })
                                })
                            }).catch(a)
                        });
                        return g(o, t), o
                    }

                    function Tt(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    var a = t._dbInfo;
                                    a.db.transaction(function(i) {
                                        ee(i, a, "DELETE FROM " + a.storeName, [], function() {
                                            o()
                                        }, function(u, f) {
                                            r(f)
                                        })
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function Mt(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    var a = t._dbInfo;
                                    a.db.transaction(function(i) {
                                        ee(i, a, "SELECT COUNT(key) as c FROM " + a.storeName, [], function(u, f) {
                                            var s = f.rows.item(0).c;
                                            o(s)
                                        }, function(u, f) {
                                            r(f)
                                        })
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function Ft(e, t) {
                        var n = this,
                            o = new d(function(r, a) {
                                n.ready().then(function() {
                                    var i = n._dbInfo;
                                    i.db.transaction(function(u) {
                                        ee(u, i, "SELECT key FROM " + i.storeName + " WHERE id = ? LIMIT 1", [e + 1], function(f, s) {
                                            var c = s.rows.length ? s.rows.item(0).key : null;
                                            r(c)
                                        }, function(f, s) {
                                            a(s)
                                        })
                                    })
                                }).catch(a)
                            });
                        return g(o, t), o
                    }

                    function Lt(e) {
                        var t = this,
                            n = new d(function(o, r) {
                                t.ready().then(function() {
                                    var a = t._dbInfo;
                                    a.db.transaction(function(i) {
                                        ee(i, a, "SELECT key FROM " + a.storeName, [], function(u, f) {
                                            for (var s = [], c = 0; c < f.rows.length; c++) s.push(f.rows.item(c).key);
                                            o(s)
                                        }, function(u, f) {
                                            r(f)
                                        })
                                    })
                                }).catch(r)
                            });
                        return g(n, e), n
                    }

                    function Pt(e) {
                        return new d(function(t, n) {
                            e.transaction(function(o) {
                                o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(r, a) {
                                    for (var i = [], u = 0; u < a.rows.length; u++) i.push(a.rows.item(u).name);
                                    t({
                                        db: e,
                                        storeNames: i
                                    })
                                }, function(r, a) {
                                    n(a)
                                })
                            }, function(o) {
                                n(o)
                            })
                        })
                    }

                    function Ut(e, t) {
                        t = J.apply(this, arguments);
                        var n = this.config();
                        e = typeof e != "function" && e || {}, e.name || (e.name = e.name || n.name, e.storeName = e.storeName || n.storeName);
                        var o = this,
                            r;
                        return e.name ? r = new d(function(a) {
                            var i;
                            e.name === n.name ? i = o._dbInfo.db : i = openDatabase(e.name, "", "", 0), e.storeName ? a({
                                db: i,
                                storeNames: [e.storeName]
                            }) : a(Pt(i))
                        }).then(function(a) {
                            return new d(function(i, u) {
                                a.db.transaction(function(f) {
                                    function s(E) {
                                        return new d(function(_, k) {
                                            f.executeSql("DROP TABLE IF EXISTS " + E, [], function() {
                                                _()
                                            }, function(j, $) {
                                                k($)
                                            })
                                        })
                                    }
                                    for (var c = [], m = 0, p = a.storeNames.length; m < p; m++) c.push(s(a.storeNames[m]));
                                    d.all(c).then(function() {
                                        i()
                                    }).catch(function(E) {
                                        u(E)
                                    })
                                }, function(f) {
                                    u(f)
                                })
                            })
                        }) : r = d.reject("Invalid arguments"), g(r, t), r
                    }
                    var qt = {
                        _driver: "webSQLStorage",
                        _initStorage: xt,
                        _support: jt(),
                        iterate: At,
                        getItem: Rt,
                        setItem: zt,
                        removeItem: Bt,
                        clear: Tt,
                        length: Mt,
                        key: Ft,
                        keys: Lt,
                        dropInstance: Ut
                    };

                    function Wt() {
                        try {
                            return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem
                        } catch (e) {
                            return !1
                        }
                    }

                    function qe(e, t) {
                        var n = e.name + "/";
                        return e.storeName !== t.storeName && (n += e.storeName + "/"), n
                    }

                    function Kt() {
                        var e = "_localforage_support_test";
                        try {
                            return localStorage.setItem(e, !0), localStorage.removeItem(e), !1
                        } catch (t) {
                            return !0
                        }
                    }

                    function Gt() {
                        return !Kt() || localStorage.length > 0
                    }

                    function $t(e) {
                        var t = this,
                            n = {};
                        if (e)
                            for (var o in e) n[o] = e[o];
                        return n.keyPrefix = qe(e, t._defaultConfig), Gt() ? (t._dbInfo = n, n.serializer = ye, d.resolve()) : d.reject()
                    }

                    function Ht(e) {
                        var t = this,
                            n = t.ready().then(function() {
                                for (var o = t._dbInfo.keyPrefix, r = localStorage.length - 1; r >= 0; r--) {
                                    var a = localStorage.key(r);
                                    a.indexOf(o) === 0 && localStorage.removeItem(a)
                                }
                            });
                        return g(n, e), n
                    }

                    function Yt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = n.ready().then(function() {
                            var r = n._dbInfo,
                                a = localStorage.getItem(r.keyPrefix + e);
                            return a && (a = r.serializer.deserialize(a)), a
                        });
                        return g(o, t), o
                    }

                    function Jt(e, t) {
                        var n = this,
                            o = n.ready().then(function() {
                                for (var r = n._dbInfo, a = r.keyPrefix, i = a.length, u = localStorage.length, f = 1, s = 0; s < u; s++) {
                                    var c = localStorage.key(s);
                                    if (c.indexOf(a) === 0) {
                                        var m = localStorage.getItem(c);
                                        if (m && (m = r.serializer.deserialize(m)), m = e(m, c.substring(i), f++), m !== void 0) return m
                                    }
                                }
                            });
                        return g(o, t), o
                    }

                    function Qt(e, t) {
                        var n = this,
                            o = n.ready().then(function() {
                                var r = n._dbInfo,
                                    a;
                                try {
                                    a = localStorage.key(e)
                                } catch (i) {
                                    a = null
                                }
                                return a && (a = a.substring(r.keyPrefix.length)), a
                            });
                        return g(o, t), o
                    }

                    function Vt(e) {
                        var t = this,
                            n = t.ready().then(function() {
                                for (var o = t._dbInfo, r = localStorage.length, a = [], i = 0; i < r; i++) {
                                    var u = localStorage.key(i);
                                    u.indexOf(o.keyPrefix) === 0 && a.push(u.substring(o.keyPrefix.length))
                                }
                                return a
                            });
                        return g(n, e), n
                    }

                    function Xt(e) {
                        var t = this,
                            n = t.keys().then(function(o) {
                                return o.length
                            });
                        return g(n, e), n
                    }

                    function Zt(e, t) {
                        var n = this;
                        e = O(e);
                        var o = n.ready().then(function() {
                            var r = n._dbInfo;
                            localStorage.removeItem(r.keyPrefix + e)
                        });
                        return g(o, t), o
                    }

                    function en(e, t, n) {
                        var o = this;
                        e = O(e);
                        var r = o.ready().then(function() {
                            t === void 0 && (t = null);
                            var a = t;
                            return new d(function(i, u) {
                                var f = o._dbInfo;
                                f.serializer.serialize(t, function(s, c) {
                                    if (c) u(c);
                                    else try {
                                        localStorage.setItem(f.keyPrefix + e, s), i(a)
                                    } catch (m) {
                                        (m.name === "QuotaExceededError" || m.name === "NS_ERROR_DOM_QUOTA_REACHED") && u(m), u(m)
                                    }
                                })
                            })
                        });
                        return g(r, n), r
                    }

                    function tn(e, t) {
                        if (t = J.apply(this, arguments), e = typeof e != "function" && e || {}, !e.name) {
                            var n = this.config();
                            e.name = e.name || n.name, e.storeName = e.storeName || n.storeName
                        }
                        var o = this,
                            r;
                        return e.name ? r = new d(function(a) {
                            e.storeName ? a(qe(e, o._defaultConfig)) : a(e.name + "/")
                        }).then(function(a) {
                            for (var i = localStorage.length - 1; i >= 0; i--) {
                                var u = localStorage.key(i);
                                u.indexOf(a) === 0 && localStorage.removeItem(u)
                            }
                        }) : r = d.reject("Invalid arguments"), g(r, t), r
                    }
                    var nn = {
                            _driver: "localStorageWrapper",
                            _initStorage: $t,
                            _support: Wt(),
                            iterate: Jt,
                            getItem: Yt,
                            setItem: en,
                            removeItem: Zt,
                            clear: Ht,
                            length: Xt,
                            key: Qt,
                            keys: Vt,
                            dropInstance: tn
                        },
                        rn = function(e, t) {
                            return e === t || typeof e == "number" && typeof t == "number" && isNaN(e) && isNaN(t)
                        },
                        on = function(e, t) {
                            for (var n = e.length, o = 0; o < n;) {
                                if (rn(e[o], t)) return !0;
                                o++
                            }
                            return !1
                        },
                        We = Array.isArray || function(e) {
                            return Object.prototype.toString.call(e) === "[object Array]"
                        },
                        ae = {},
                        Ke = {},
                        re = {
                            INDEXEDDB: Ct,
                            WEBSQL: qt,
                            LOCALSTORAGE: nn
                        },
                        an = [re.INDEXEDDB._driver, re.WEBSQL._driver, re.LOCALSTORAGE._driver],
                        se = ["dropInstance"],
                        be = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(se),
                        un = {
                            description: "",
                            driver: an.slice(),
                            name: "localforage",
                            size: 4980736,
                            storeName: "keyvaluepairs",
                            version: 1
                        };

                    function cn(e, t) {
                        e[t] = function() {
                            var n = arguments;
                            return e.ready().then(function() {
                                return e[t].apply(e, n)
                            })
                        }
                    }

                    function we() {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = arguments[e];
                            if (t)
                                for (var n in t) t.hasOwnProperty(n) && (We(t[n]) ? arguments[0][n] = t[n].slice() : arguments[0][n] = t[n])
                        }
                        return arguments[0]
                    }
                    var sn = function() {
                            function e(t) {
                                M(this, e);
                                for (var n in re)
                                    if (re.hasOwnProperty(n)) {
                                        var o = re[n],
                                            r = o._driver;
                                        this[n] = r, ae[r] || this.defineDriver(o)
                                    }
                                this._defaultConfig = we({}, un), this._config = we({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {})
                            }
                            return e.prototype.config = function(t) {
                                if ((typeof t > "u" ? "undefined" : C(t)) === "object") {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var n in t) {
                                        if (n === "storeName" && (t[n] = t[n].replace(/\W/g, "_")), n === "version" && typeof t[n] != "number") return new Error("Database version must be a number.");
                                        this._config[n] = t[n]
                                    }
                                    return "driver" in t && t.driver ? this.setDriver(this._config.driver) : !0
                                } else return typeof t == "string" ? this._config[t] : this._config
                            }, e.prototype.defineDriver = function(t, n, o) {
                                var r = new d(function(a, i) {
                                    try {
                                        var u = t._driver,
                                            f = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                        if (!t._driver) {
                                            i(f);
                                            return
                                        }
                                        for (var s = be.concat("_initStorage"), c = 0, m = s.length; c < m; c++) {
                                            var p = s[c],
                                                E = !on(se, p);
                                            if ((E || t[p]) && typeof t[p] != "function") {
                                                i(f);
                                                return
                                            }
                                        }
                                        var _ = function() {
                                            for (var j = function(ln) {
                                                    return function() {
                                                        var dn = new Error("Method " + ln + " is not implemented by the current driver"),
                                                            Ge = d.reject(dn);
                                                        return g(Ge, arguments[arguments.length - 1]), Ge
                                                    }
                                                }, $ = 0, _e = se.length; $ < _e; $++) {
                                                var Ie = se[$];
                                                t[Ie] || (t[Ie] = j(Ie))
                                            }
                                        };
                                        _();
                                        var k = function(j) {
                                            ae[u] && console.info("Redefining LocalForage driver: " + u), ae[u] = t, Ke[u] = j, a()
                                        };
                                        "_support" in t ? t._support && typeof t._support == "function" ? t._support().then(k, i) : k(!!t._support) : k(!0)
                                    } catch (j) {
                                        i(j)
                                    }
                                });
                                return D(r, n, o), r
                            }, e.prototype.driver = function() {
                                return this._driver || null
                            }, e.prototype.getDriver = function(t, n, o) {
                                var r = ae[t] ? d.resolve(ae[t]) : d.reject(new Error("Driver not found."));
                                return D(r, n, o), r
                            }, e.prototype.getSerializer = function(t) {
                                var n = d.resolve(ye);
                                return D(n, t), n
                            }, e.prototype.ready = function(t) {
                                var n = this,
                                    o = n._driverSet.then(function() {
                                        return n._ready === null && (n._ready = n._initDriver()), n._ready
                                    });
                                return D(o, t, t), o
                            }, e.prototype.setDriver = function(t, n, o) {
                                var r = this;
                                We(t) || (t = [t]);
                                var a = this._getSupportedDrivers(t);

                                function i() {
                                    r._config.driver = r.driver()
                                }

                                function u(c) {
                                    return r._extend(c), i(), r._ready = r._initStorage(r._config), r._ready
                                }

                                function f(c) {
                                    return function() {
                                        var m = 0;

                                        function p() {
                                            for (; m < c.length;) {
                                                var E = c[m];
                                                return m++, r._dbInfo = null, r._ready = null, r.getDriver(E).then(u).catch(p)
                                            }
                                            i();
                                            var _ = new Error("No available storage method found.");
                                            return r._driverSet = d.reject(_), r._driverSet
                                        }
                                        return p()
                                    }
                                }
                                var s = this._driverSet !== null ? this._driverSet.catch(function() {
                                    return d.resolve()
                                }) : d.resolve();
                                return this._driverSet = s.then(function() {
                                    var c = a[0];
                                    return r._dbInfo = null, r._ready = null, r.getDriver(c).then(function(m) {
                                        r._driver = m._driver, i(), r._wrapLibraryMethodsWithReady(), r._initDriver = f(a)
                                    })
                                }).catch(function() {
                                    i();
                                    var c = new Error("No available storage method found.");
                                    return r._driverSet = d.reject(c), r._driverSet
                                }), D(this._driverSet, n, o), this._driverSet
                            }, e.prototype.supports = function(t) {
                                return !!Ke[t]
                            }, e.prototype._extend = function(t) {
                                we(this, t)
                            }, e.prototype._getSupportedDrivers = function(t) {
                                for (var n = [], o = 0, r = t.length; o < r; o++) {
                                    var a = t[o];
                                    this.supports(a) && n.push(a)
                                }
                                return n
                            }, e.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var t = 0, n = be.length; t < n; t++) cn(this, be[t])
                            }, e.prototype.createInstance = function(t) {
                                return new e(t)
                            }, e
                        }(),
                        fn = new sn;
                    N.exports = fn
                }, {
                    3: 3
                }]
            }, {}, [4])(4)
        })
    })(q);
    var W = q.exports;
    const L = yn(W);

    function st(h) {
        return L.getItem(h)
    }

    function ft(h, v) {
        return L.setItem(h, v)
    }

    function lt(h, v, b) {
        const N = (b || "") + "bcgame-" + h;
        return ft(N, v)
    }

    function dt(h, v) {
        const b = (v || "") + "bcgame-" + h;
        return st(b)
    }
    let Se;
    Se = {
        introduction: '<p>Another exciting blockchain gambling game is <a  target="_blank">Crash at BC.Game</a>. This crypto-based game is one of the simplest among all the blockchain casino games. This 2022 the number of crypto owners that have been playing Crash at BC.Game have increased to get the chance to increase the value of their digital currencies. <br><br>If you are just starting to play crypto casinos, this game can be a good game for you because of its simplicity. Crash at BC.Game is one of the transparent and fairest ways to get rewards online. The game was developed with an easy-to-navigate user interface and exciting features that keep the players betting. <br><br>It is an easy game to follow, and players do not need to follow certain instructions to play the game. The Crash game does not need to be downloaded, it can be played directly from a browser of a smartphone or computer.<br><br>The Crash was one of the games lined up to be released when cryptocurrency was introduced to online casinos. If you are new to this, playing and betting are actually easy. You can even master the game by just playing a couple of rounds. Before you play, understand the game interface first since everything that is happening in the game is real-time.</p><h2></h2><p style="text-align: center;"><img src="https://img2.dogcrash.game/gameinfo/image/b5/10/e2/166479437116169.jpeg" alt="" data- style=""></p><h2></h2><p style="text-align: center;"><img src="https://img2.dogcrash.game/gameinfo/image/b5/10/e2/166479437116169.jpeg" alt="" data- style=""></p><h2>Crash at BC.Game: Features</h2><p><br><br>To start playing, you will be given time to pick a betting currency. The game is not limited to Bitcoin owners. It is also available to Etherium, Litecoin, and other digital currencies. If you are new, you can bet on the entry-level amount to avoid huge losses. You need to have a strategy for predicting where the line will crash. Remember to pick a spot before the line crashes. It can crash anytime, even if the game just started, so you need to pick the spot wisely. <br><br>You will win the game once the line reaches your chosen spot or higher. Once the line crashes before it reaches your spot, you will lose. That is how easy this crypto game is. However, it is important to keep your instincts working. If you think it will crash before it reaches your chosen spot, you have the option to exit the game anytime. <br><br>The Crash is a multiplayer game where you can choose between classic and Classic and Trenball modes. In classic mode, you are allowed to cash the money after betting. The amount you can earn will depend on how many players are betting on the round. For the Trenball mode, you will be required to bet on a line color which can be a factor in your winning. </p><p><br>Understanding any gambling game can increase your chances of winning since there are no exact strategies for playing crypto casinos. There are times that you will lose and win. If you are not afraid of risking your crypto, you can bet on higher spots in Crash which means when you win, you will be able to get big. In all casino games, the player is responsible for growing or losing their money.<br><br>To play the game better, you should utilize all the features in the game. You may end the round early by using the cash-out option before the line crashes. You do not need to wait for the line before it reaches the multiplier you have bet on. Once you get the right time to end the game before the line crashes, your bet amount can be multiplied.<br><br>Remember not to make crypto casinos your only way to earn money. Play only if you want to have fun. Its algorithm is random, so you would not be able to know when you will win. <br><br>You are allowed to set any amount on the minimum and maximum amounts for betting. For beginners, you can try the game by betting on a minimum amount and see how the game goes. By betting gradually, you will learn more about the game and avoid losing money in the future. <br><br>Some players bet with a maximum amount and wait for the right time to cash out their bets before the line crashes. </p><h2><br><br><br>Crash in BC.Game: Final Verdict</h2><p><br><br>If you are looking for an alternative crypto game, Crash is a great choice because it is fast-paced, and the rounds can end quickly if you want to play a new game once you lose, which adds more excitement to the game. If you are a beginner, you can try watching several rounds first or bet on a minimum amount.<br><br>BC.Game has a user interface that provides enjoyment for every player, making it a top choice for crypto casino players. It also provides provably fair games and player privacy. This online casino website also offers promotions and limited bonuses that can increase your digital currency. <br></p>'
    }, it = F.timeMemoize(async function(h, v) {
        return T.get(`home/main/event/code/${h}`)
    }, {
        timeout: 3e6,
        getKey: (h, v) => JSON.stringify(h + v)
    }), Ze = F.timeMemoize(async function() {
        return T.get("home/main/event-list/")
    }, {
        timeout: 3e6
    });
    async function ht(h) {
        return gn.getRecommendGames(Ye({
            pageSize: 40
        }, h))
    }
    let Ee;
    tt = F.timeMemoize(ht, {
        timeout: 6e5,
        getKey: h => JSON.stringify(h)
    }), Qe = function(h, v) {
        function b() {
            return h === "hot" ? [{
                pageSize: 20,
                page: v
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }] : h === "slots" ? [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: v
            }, {
                pageSize: 20,
                page: 1
            }] : h === "live" ? [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: v
            }] : [{
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }, {
                pageSize: 20,
                page: 1
            }]
        }
        return Ee(b())
    }, Ee = F.timeMemoize(async h => {
        const {
            areaCode: v
        } = await Y.getCompatibleData();
        return T.post("home/rec/inOne/", {
            areaCode: v,
            distinctId: "shence_test",
            pagerList: h
        })
    }, {
        timeout: 8e7,
        getKey: h => JSON.stringify(h)
    }), F.timeMemoize(async () => T.get("/home/rec/categories/")), at = F.timeMemoize(async function(h) {
        const {
            areaCode: v
        } = await Y.getCompatibleData();
        return T.get("/home/provider/list/", {
            params: {
                areaCode: v,
                categoryId: h
            }
        })
    }, {
        timeout: 8e7
    }), ct = F.timeMemoize(async function(h, v) {
        const {
            areaCode: b,
            distinctId: N
        } = await Y.getCompatibleData();
        return T.post("/home/rec/tag/provider/", {
            areaCode: b,
            distinctId: N,
            sectionId: v != null ? v : "tag_provider",
            tag: h
        })
    }, {
        timeout: 8e7
    }), Ve = F.timeMemoize(async function() {
        const {
            areaCode: h,
            distinctId: v
        } = await Y.getCompatibleData();
        return T.post("/home/rec/provider/", {
            areaCode: h,
            sectionId: "casino_provider",
            distinctId: v
        })
    }, {
        timeout: 8e7
    }), ut = F.timeMemoize(async function(h) {
        return T.get(`/home/provider/get/?providerName=${h}`)
    }, {
        timeout: 8e7
    }), Xe = async function(h) {
        const {
            areaCode: v
        } = await Y.getCompatibleData(), b = await T.post("/home/game/my-favorite/", {
            page: h,
            pageSize: 40,
            areaCode: v
        });
        return ie(b)
    }, et = async function(h = 1) {
        const {
            areaCode: v
        } = await Y.getCompatibleData(), b = await T.post("/home/game/recent/", {
            page: h,
            pageSize: 40,
            areaCode: v
        });
        return ie(b)
    }, F.timeMemoize(async function(h) {
        const {
            areaCode: v,
            distinctId: b
        } = await Y.getCompatibleData(), N = await T.get(`/home/game/new-game/?page=${h}&areaCode=${v}&distinctId=${b}`);
        return ie(N)
    }, {
        timeout: 8e7,
        getKey: h => String(h)
    }), F.timeMemoize(async function(h, v) {
        const {
            areaCode: b
        } = await Y.getCompatibleData(), N = await T.get(`/home/game/tag/?areaCode=${b}&tagName=${h}&pageSize=20&page=${v}`);
        return ie(N)
    }, {
        timeout: 8e7,
        getKey: (h, v) => h + v
    });

    function ie(h, v = "") {
        return {
            sectionId: v,
            pageList: h,
            expId: "",
            logId: "",
            maxNum: 0,
            strategyId: ""
        }
    }
    rt = async function(h, v, b) {
        try {
            return await T.post("/comment/list/", {
                gameUnique: h,
                page: v,
                pageSize: 20,
                sortField: b
            })
        } catch (N) {
            return {
                page: 1,
                pageSize: 20,
                total: 0,
                totalPage: 1,
                list: []
            }
        }
    }, nt = F.timeMemoize(async function(h, v) {
        const {
            areaCode: b
        } = await Y.getCompatibleData(), N = `/home/game2/detail/?areaCode=${b}&gameUnique=${h}`;
        try {
            const P = await T.get(N);
            return lt(N, P), P
        } catch (P) {
            const C = dt(N);
            if (C) return C;
            throw P
        }
    }, {
        timeout: 8e7,
        getKey: (h, v) => h + v
    }), ot = F.timeMemoize(async function(h, v) {
        const {
            areaCode: b
        } = await Y.getCompatibleData();
        try {
            return await T.get(`/home1/game2/introduction/?areaCode=${b}&gameUnique=${h}`)
        } catch (N) {
            return Se
        }
    }, {
        timeout: 8e7,
        getKey: (h, v) => h + v
    }), Je = F.timeMemoize(async function() {
        const {
            areaCode: h
        } = await Y.getCompatibleData();
        return T.post("/platform-slots/bingo-room/", {
            areaCode: h
        })
    }, {
        timeout: 8e7
    })
});
export {
    wn as __tla, Je as a, Qe as b, Ve as c, Xe as d, Ze as e, et as f, tt as g, nt as h, rt as i, ot as j, at as k, it as l, ut as m, ct as n
};
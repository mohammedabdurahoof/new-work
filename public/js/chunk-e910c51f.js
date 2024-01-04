var fn, s = {};

function P(t) {
    if (!t) return !1;
    var e = Object.prototype.toString.call(t);
    return e == "[object Function]" || e == "[object AsyncFunction]"
}

function dt() {
    return Date.now && P(Date.now) ? Date.now() : new Date().getTime()
}(function() {
    var t = {
            function: !0,
            object: !0
        },
        e = t[typeof window] && window || this,
        r = e.JSON,
        n = e.JSON3,
        i = !1,
        a = function l(u, d) {
            u || (u = e.Object()), d || (d = e.Object());
            var _ = u.Number || e.Number,
                y = u.String || e.String,
                N = u.Object || e.Object,
                x = u.Date || e.Date,
                ct = u.SyntaxError || e.SyntaxError,
                M = u.TypeError || e.TypeError,
                bt = u.Math || e.Math,
                It = u.JSON || e.JSON;
            if (typeof It == "object" && It) return d.stringify = It.stringify, d.parse = It.parse, d.runInContext = l, d;
            var pt, on = N.prototype,
                kt = on.toString,
                qe = on.hasOwnProperty;

            function Ft(h, w) {
                try {
                    h()
                } catch (f) {
                    w && w()
                }
            }
            var At = new x(-0xc782b5b800cec);

            function z(h) {
                if (z[h] != null) return z[h];
                var w;
                if (h == "bug-string-char-index") w = "a" [0] != "a";
                else if (h == "json") w = z("json-stringify") && z("date-serialization") && z("json-parse");
                else if (h == "date-serialization") {
                    if (w = z("json-stringify") && At) {
                        var f = d.stringify;
                        Ft(function() {
                            w = f(new x(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && f(new x(864e13)) == '"+275760-09-13T00:00:00.000Z"' && f(new x(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && f(new x(-1)) == '"1969-12-31T23:59:59.999Z"'
                        })
                    }
                } else {
                    var O, g = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if (h == "json-stringify") {
                        var k = typeof(f = d.stringify) == "function";
                        k && ((O = function() {
                            return 1
                        }).toJSON = O, Ft(function() {
                            k = f(0) === "0" && f(new _) === "0" && f(new y) == '""' && f(kt) === pt && f(pt) === pt && f() === pt && f(O) === "1" && f([O]) == "[1]" && f([pt]) == "[null]" && f(null) == "null" && f([pt, kt, null]) == "[null,null,null]" && f({
                                a: [O, !0, !1, null, `\0\b
\f\r	`]
                            }) == g && f(null, O) === "1" && f([1, 2], null, 1) == `[
 1,
 2
]`
                        }, function() {
                            k = !1
                        })), w = k
                    }
                    if (h == "json-parse") {
                        var j, S = d.parse;
                        typeof S == "function" && Ft(function() {
                            S("0") !== 0 || S(!1) || (O = S(g), (j = O.a.length == 5 && O.a[0] === 1) && (Ft(function() {
                                j = !S('"	"')
                            }), j && Ft(function() {
                                j = S("01") !== 1
                            }), j && Ft(function() {
                                j = S("1.") !== 1
                            })))
                        }, function() {
                            j = !1
                        }), w = j
                    }
                }
                return z[h] = !!w
            }
            if (Ft(function() {
                    At = At.getUTCFullYear() == -109252 && At.getUTCMonth() === 0 && At.getUTCDate() === 1 && At.getUTCHours() == 10 && At.getUTCMinutes() == 37 && At.getUTCSeconds() == 6 && At.getUTCMilliseconds() == 708
                }), z["bug-string-char-index"] = z["date-serialization"] = z.json = z["json-stringify"] = z["json-parse"] = null, !z("json")) {
                var dr = z("bug-string-char-index"),
                    fe = function(h, w) {
                        var f, O, g, k = 0;
                        for (g in (f = function() {
                                this.valueOf = 0
                            }).prototype.valueOf = 0, O = new f) qe.call(O, g) && k++;
                        return f = O = null, k ? fe = function(j, S) {
                            var R, nt, J = kt.call(j) == "[object Function]";
                            for (R in j) J && R == "prototype" || !qe.call(j, R) || (nt = R === "constructor") || S(R);
                            (nt || qe.call(j, R = "constructor")) && S(R)
                        } : (O = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], fe = function(j, S) {
                            var R, nt, J = kt.call(j) == "[object Function]",
                                Wt = !J && typeof j.constructor != "function" && t[typeof j.hasOwnProperty] && j.hasOwnProperty || qe;
                            for (R in j) J && R == "prototype" || !Wt.call(j, R) || S(R);
                            for (nt = O.length; R = O[--nt];) Wt.call(j, R) && S(R)
                        }), fe(h, w)
                    };
                if (!z("json-stringify") && !z("date-serialization")) {
                    var ca = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        Rt = function(h, w) {
                            return ("000000" + (w || 0)).slice(-h)
                        },
                        fr = function(h) {
                            var w, f, O, g, k, j, S, R, nt;
                            if (At) w = function(U) {
                                f = U.getUTCFullYear(), O = U.getUTCMonth(), g = U.getUTCDate(), j = U.getUTCHours(), S = U.getUTCMinutes(), R = U.getUTCSeconds(), nt = U.getUTCMilliseconds()
                            };
                            else {
                                var J = bt.floor,
                                    Wt = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    Ht = function(U, Jt) {
                                        return Wt[Jt] + 365 * (U - 1970) + J((U - 1969 + (Jt = +(Jt > 1))) / 4) - J((U - 1901 + Jt) / 100) + J((U - 1601 + Jt) / 400)
                                    };
                                w = function(U) {
                                    for (g = J(U / 864e5), f = J(g / 365.2425) + 1970 - 1; Ht(f + 1, 0) <= g; f++);
                                    for (O = J((g - Ht(f, 0)) / 30.42); Ht(f, O + 1) <= g; O++);
                                    g = 1 + g - Ht(f, O), j = J((k = (U % 864e5 + 864e5) % 864e5) / 36e5) % 24, S = J(k / 6e4) % 60, R = J(k / 1e3) % 60, nt = k % 1e3
                                }
                            }
                            return (fr = function(U) {
                                return U > -1 / 0 && U < 1 / 0 ? (w(U), U = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + Rt(6, f < 0 ? -f : f) : Rt(4, f)) + "-" + Rt(2, O + 1) + "-" + Rt(2, g) + "T" + Rt(2, j) + ":" + Rt(2, S) + ":" + Rt(2, R) + "." + Rt(3, nt) + "Z", f = O = g = j = S = R = nt = null) : U = null, U
                            })(h)
                        };
                    if (z("json-stringify") && !z("date-serialization")) {
                        let h = function(w) {
                            return fr(this)
                        };
                        var pa = d.stringify;
                        d.stringify = function(w, f, O) {
                            var g = x.prototype.toJSON;
                            x.prototype.toJSON = h;
                            var k = pa(w, f, O);
                            return x.prototype.toJSON = g, k
                        }
                    } else {
                        var da = function(h) {
                                var w = h.charCodeAt(0),
                                    f = ca[w];
                                return f || "\\u00" + Rt(2, w.toString(16))
                            },
                            gr = /[\x00-\x1f\x22\x5c]/g,
                            ln = function(h) {
                                return gr.lastIndex = 0, '"' + (gr.test(h) ? h.replace(gr, da) : h) + '"'
                            },
                            _r = function(h, w, f, O, g, k, j) {
                                var S, R, nt, J, Wt, Ht, U, Jt, mr;
                                if (Ft(function() {
                                        S = w[h]
                                    }), typeof S == "object" && S && (S.getUTCFullYear && kt.call(S) == "[object Date]" && S.toJSON === x.prototype.toJSON ? S = fr(S) : typeof S.toJSON == "function" && (S = S.toJSON(h))), f && (S = f.call(w, h, S)), S == pt) return S === pt ? S : "null";
                                switch ((R = typeof S) == "object" && (nt = kt.call(S)), nt || R) {
                                    case "boolean":
                                    case "[object Boolean]":
                                        return "" + S;
                                    case "number":
                                    case "[object Number]":
                                        return S > -1 / 0 && S < 1 / 0 ? "" + S : "null";
                                    case "string":
                                    case "[object String]":
                                        return ln("" + S)
                                }
                                if (typeof S == "object") {
                                    for (U = j.length; U--;)
                                        if (j[U] === S) throw M();
                                    if (j.push(S), J = [], Jt = k, k += g, nt == "[object Array]") {
                                        for (Ht = 0, U = S.length; Ht < U; Ht++) Wt = _r(Ht, S, f, O, g, k, j), J.push(Wt === pt ? "null" : Wt);
                                        mr = J.length ? g ? `[
` + k + J.join(`,
` + k) + `
` + Jt + "]" : "[" + J.join(",") + "]" : "[]"
                                    } else fe(O || S, function(pn) {
                                        var dn = _r(pn, S, f, O, g, k, j);
                                        dn !== pt && J.push(ln(pn) + ":" + (g ? " " : "") + dn)
                                    }), mr = J.length ? g ? `{
` + k + J.join(`,
` + k) + `
` + Jt + "}" : "{" + J.join(",") + "}" : "{}";
                                    return j.pop(), mr
                                }
                            };
                        d.stringify = function(h, w, f) {
                            var O, g, k, j;
                            if (t[typeof w] && w) {
                                if ((j = kt.call(w)) == "[object Function]") g = w;
                                else if (j == "[object Array]") {
                                    k = {};
                                    for (var S, R = 0, nt = w.length; R < nt;) S = w[R++], (j = kt.call(S)) != "[object String]" && j != "[object Number]" || (k[S] = 1)
                                }
                            }
                            if (f)
                                if ((j = kt.call(f)) == "[object Number]") {
                                    if ((f -= f % 1) > 0)
                                        for (f > 10 && (f = 10), O = ""; O.length < f;) O += " "
                                } else j == "[object String]" && (O = f.length <= 10 ? f : f.slice(0, 10));
                            return _r("", ((S = {})[""] = h, S), g, k, O, "", [])
                        }
                    }
                }
                if (!z("json-parse")) {
                    var C, Me, fa = y.fromCharCode,
                        ga = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: `
`,
                            102: "\f",
                            114: "\r"
                        },
                        G = function() {
                            throw C = Me = null, ct()
                        },
                        Vt = function() {
                            for (var h, w, f, O, g, k = Me, j = k.length; C < j;) switch (g = k.charCodeAt(C)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    C++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return h = dr ? k.charAt(C) : k[C], C++, h;
                                case 34:
                                    for (h = "@", C++; C < j;)
                                        if ((g = k.charCodeAt(C)) < 32) G();
                                        else if (g == 92) switch (g = k.charCodeAt(++C)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            h += ga[g], C++;
                                            break;
                                        case 117:
                                            for (w = ++C, f = C + 4; C < f; C++)(g = k.charCodeAt(C)) >= 48 && g <= 57 || g >= 97 && g <= 102 || g >= 65 && g <= 70 || G();
                                            h += fa("0x" + k.slice(w, C));
                                            break;
                                        default:
                                            G()
                                    } else {
                                        if (g == 34) break;
                                        for (g = k.charCodeAt(C), w = C; g >= 32 && g != 92 && g != 34;) g = k.charCodeAt(++C);
                                        h += k.slice(w, C)
                                    }
                                    if (k.charCodeAt(C) == 34) return C++, h;
                                    G();
                                default:
                                    if (w = C, g == 45 && (O = !0, g = k.charCodeAt(++C)), g >= 48 && g <= 57) {
                                        for (g == 48 && (g = k.charCodeAt(C + 1)) >= 48 && g <= 57 && G(), O = !1; C < j && (g = k.charCodeAt(C)) >= 48 && g <= 57; C++);
                                        if (k.charCodeAt(C) == 46) {
                                            for (f = ++C; f < j && !((g = k.charCodeAt(f)) < 48 || g > 57); f++);
                                            f == C && G(), C = f
                                        }
                                        if ((g = k.charCodeAt(C)) == 101 || g == 69) {
                                            for ((g = k.charCodeAt(++C)) != 43 && g != 45 || C++, f = C; f < j && !((g = k.charCodeAt(f)) < 48 || g > 57); f++);
                                            f == C && G(), C = f
                                        }
                                        return +k.slice(w, C)
                                    }
                                    O && G();
                                    var S = k.slice(C, C + 4);
                                    if (S == "true") return C += 4, !0;
                                    if (S == "fals" && k.charCodeAt(C + 4) == 101) return C += 5, !1;
                                    if (S == "null") return C += 4, null;
                                    G()
                            }
                            return "$"
                        },
                        hr = function(h) {
                            var w, f;
                            if (h == "$" && G(), typeof h == "string") {
                                if ((dr ? h.charAt(0) : h[0]) == "@") return h.slice(1);
                                if (h == "[") {
                                    for (w = [];
                                        (h = Vt()) != "]";) f ? h == "," ? (h = Vt()) == "]" && G() : G() : f = !0, h == "," && G(), w.push(hr(h));
                                    return w
                                }
                                if (h == "{") {
                                    for (w = {};
                                        (h = Vt()) != "}";) f ? h == "," ? (h = Vt()) == "}" && G() : G() : f = !0, h != "," && typeof h == "string" && (dr ? h.charAt(0) : h[0]) == "@" && Vt() == ":" || G(), w[h.slice(1)] = hr(Vt());
                                    return w
                                }
                                G()
                            }
                            return h
                        },
                        un = function(h, w, f) {
                            var O = cn(h, w, f);
                            O === pt ? delete h[w] : h[w] = O
                        },
                        cn = function(h, w, f) {
                            var O, g = h[w];
                            if (typeof g == "object" && g)
                                if (kt.call(g) == "[object Array]")
                                    for (O = g.length; O--;) un(kt, fe, g);
                                else fe(g, function(k) {
                                    un(g, k, f)
                                });
                            return f.call(h, w, g)
                        };
                    d.parse = function(h, w) {
                        var f, O;
                        return C = 0, Me = "" + h, f = hr(Vt()), Vt() != "$" && G(), C = Me = null, w && kt.call(w) == "[object Function]" ? cn(((O = {})[""] = f, O), "", w) : f
                    }
                }
            }
            return d.runInContext = l, d
        }(e, e.JSON3 = {
            noConflict: function() {
                return i || (i = !0, e.JSON = r, e.JSON3 = n, r = n = null), a
            }
        });
    e.JSON ? (e.JSON.parse = a.parse, e.JSON.stringify = a.stringify) : e.JSON = {
        parse: a.parse,
        stringify: a.stringify
    }
}).call(window),
    function(t) {
        if (t.atob) try {
            t.atob(" ")
        } catch (a) {
            t.atob = (e = t.atob, (r = function(l) {
                return e(String(l).replace(/[\t\n\f\r ]+/g, ""))
            }).original = e, r)
        } else {
            var e, r, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                i = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
            t.btoa = function(a) {
                a = String(a);
                for (var l, u, d, _, y = "", N = 0, x = a.length % 3; N < a.length;) {
                    if ((u = a.charCodeAt(N++)) > 255 || (d = a.charCodeAt(N++)) > 255 || (_ = a.charCodeAt(N++)) > 255) return "";
                    y += n.charAt((l = u << 16 | d << 8 | _) >> 18 & 63) + n.charAt(l >> 12 & 63) + n.charAt(l >> 6 & 63) + n.charAt(63 & l)
                }
                return x ? y.slice(0, x - 3) + "===".substring(x) : y
            }, t.atob = function(a) {
                if (a = String(a).replace(/[\t\n\f\r ]+/g, ""), !i.test(a)) return "";
                a += "==".slice(2 - (3 & a.length));
                for (var l, u, d, _ = "", y = 0; y < a.length;) l = n.indexOf(a.charAt(y++)) << 18 | n.indexOf(a.charAt(y++)) << 12 | (u = n.indexOf(a.charAt(y++))) << 6 | (d = n.indexOf(a.charAt(y++))), _ += u === 64 ? String.fromCharCode(l >> 16 & 255) : d === 64 ? String.fromCharCode(l >> 16 & 255, l >> 8 & 255) : String.fromCharCode(l >> 16 & 255, l >> 8 & 255, 255 & l);
                return _
            }
        }
    }(window);
var Q = {
        setup: function(t) {
            fn = t
        },
        log: function() {
            (fn || console && console.log || function() {}).apply(null, arguments)
        }
    },
    E = {
        get: function(t) {
            return window.localStorage.getItem(t)
        },
        parse: function(t) {
            var e;
            try {
                e = JSON.parse(E.get(t)) || null
            } catch (r) {
                Q.log("parse localStorage failed")
            }
            return e
        },
        set: function(t, e) {
            try {
                window.localStorage.setItem(t, e)
            } catch (r) {
                Q.log("localStorage is not support")
            }
        },
        remove: function(t) {
            window.localStorage.removeItem(t)
        },
        isSupport: function() {
            var t = !0;
            try {
                var e = "__local_store_support__",
                    r = "testIsSupportStorage";
                E.set(e, r), E.get(e) !== r && (t = !1), E.remove(e)
            } catch (n) {
                t = !1
            }
            return t
        }
    };

function p(t) {
    return t != null && Object.prototype.toString.call(t) == "[object Object]"
}
var gn = function() {
    var t = new Date().getTime();
    return function(e) {
        return Math.ceil((t = (9301 * t + 49297) % 233280) / 233280 * e)
    }
}();

function ft() {
    if (typeof Uint32Array == "function") {
        var t = "";
        if (typeof crypto < "u" ? t = crypto : typeof msCrypto < "u" && (t = msCrypto), p(t) && t.getRandomValues) {
            var e = new Uint32Array(1);
            return t.getRandomValues(e)[0] / Math.pow(2, 32)
        }
    }
    return gn(1e19) / 1e19
}

function Y(t) {
    var e = null;
    try {
        e = JSON.parse(t)
    } catch (r) {}
    return e
}

function Ke(t, e) {
    this.lockGetPrefix = t || "lock-get-prefix", this.lockSetPrefix = e || "lock-set-prefix"
}

function vr(t) {
    return typeof t == "function" || !(!t || typeof t != "object") && vr(t.listener)
}

function Pt() {
    this._events = {}
}

function re(t) {
    var e = t;
    try {
        e = decodeURIComponent(t)
    } catch (r) {
        e = t
    }
    return e
}

function Fe(t) {
    for (var e = {}, r = (t = t || "").substring(1).split("&"), n = 0; n < r.length; n++) {
        var i = r[n].indexOf("=");
        if (i !== -1) {
            var a = r[n].substring(0, i),
                l = r[n].substring(i + 1);
            a = re(a), l = re(l), e[a] = l
        }
    }
    return e
}

function b(t) {
    return Object.prototype.toString.call(t) == "[object String]"
}

function wt(t) {
    return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
}

function yr(t) {
    var e = function(r) {
        this._fields = {
            Username: 4,
            Password: 5,
            Port: 7,
            Protocol: 2,
            Host: 6,
            Path: 8,
            URL: 0,
            QueryString: 9,
            Fragment: 10
        }, this._values = {}, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, r !== void 0 && this._parse(r)
    };
    return e.prototype.setUrl = function(r) {
        this._parse(r)
    }, e.prototype._initValues = function() {
        for (var r in this._fields) this._values[r] = ""
    }, e.prototype.addQueryString = function(r) {
        if (typeof r != "object") return !1;
        var n = this._values.QueryString || "";
        for (var i in r) n = new RegExp(i + "[^&]+").test(n) ? n.replace(new RegExp(i + "[^&]+"), i + "=" + r[i]) : n.slice(-1) === "&" ? n + i + "=" + r[i] : n === "" ? i + "=" + r[i] : n + "&" + i + "=" + r[i];
        this._values.QueryString = n
    }, e.prototype.getUrl = function() {
        var r = "";
        return r += this._values.Origin, r += this._values.Port ? ":" + this._values.Port : "", r += this._values.Path, r += this._values.QueryString ? "?" + this._values.QueryString : "", r += this._values.Fragment ? "#" + this._values.Fragment : ""
    }, e.prototype._parse = function(r) {
        this._initValues();
        var n = this._regex.exec(r);
        n || Q.log("URLParser::_parse -> Invalid URL");
        var i = r.split("#"),
            a = i[0],
            l = i.slice(1).join("#");
        for (var u in n = this._regex.exec(a), this._fields) typeof n[this._fields[u]] < "u" && (this._values[u] = n[this._fields[u]]);
        this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname, this._values.Fragment = l
    }, new e(t)
}

function Ot(t) {
    var e, r = {};
    if (typeof window.URL == "function" && function() {
            try {
                return new URL("https://www.sensorsdata.cn/").href === "https://www.sensorsdata.cn/"
            } catch (i) {
                return !1
            }
        }())(r = new URL(t)).searchParams || (r.searchParams = (e = Fe(r.search), {
        get: function(i) {
            return e[i]
        }
    }));
    else {
        if (b(t) || (t = String(t)), t = wt(t), /^https?:\/\/.+/.test(t) === !1) return void Q.log("Invalid URL");
        var n = yr(t);
        r.hash = n._values.Fragment, r.host = n._values.Host ? n._values.Host + (n._values.Port ? ":" + n._values.Port : "") : "", r.href = n._values.URL, r.password = n._values.Password, r.pathname = n._values.Path, r.port = n._values.Port, r.search = n._values.QueryString ? "?" + n._values.QueryString : "", r.username = n._values.Username, r.hostname = n._values.Hostname, r.protocol = n._values.Protocol ? n._values.Protocol + ":" : "", r.origin = n._values.Origin ? n._values.Origin + (n._values.Port ? ":" + n._values.Port : "") : "", r.searchParams = function() {
            var i = Fe("?" + n._values.QueryString);
            return {
                get: function(a) {
                    return i[a]
                }
            }
        }()
    }
    return r
}
Ke.prototype.get = function(t, e, r, n) {
    if (!t) throw new Error("key is must");
    e = e || 1e4, r = r || 1e3, n = n || function() {};
    var i = this.lockGetPrefix + t,
        a = E.get(i),
        l = String(ft());
    if (a && (a = Y(a) || {
            randomNum: 0,
            expireTime: 0
        }).expireTime > dt()) return n(null);
    E.set(i, JSON.stringify({
        randomNum: l,
        expireTime: dt() + e
    })), setTimeout(function() {
        (a = Y(E.get(i)) || {
            randomNum: 0,
            expireTime: 0
        }) && a.randomNum === l ? (n(E.get(t)), E.remove(t), E.remove(i)) : n(null)
    }, r)
}, Ke.prototype.set = function(t, e, r, n, i) {
    if (!t || !e) throw new Error("key and val is must");
    r = r || 1e4, n = n || 1e3, i = i || function() {};
    var a = this.lockSetPrefix + t,
        l = E.get(a),
        u = String(ft());
    if (l && (l = Y(l) || {
            randomNum: 0,
            expireTime: 0
        }).expireTime > dt()) return i({
        status: "fail",
        reason: "This key is locked"
    });
    E.set(a, JSON.stringify({
        randomNum: u,
        expireTime: dt() + r
    })), setTimeout(function() {
        (l = Y(E.get(a)) || {
            randomNum: 0,
            expireTime: 0
        }).randomNum === u ? E.set(t, e) && i({
            status: "success"
        }) : i({
            status: "fail",
            reason: "This key is locked"
        })
    }, n)
}, Pt.prototype.on = function(t, e) {
    if (!t || !e) return !1;
    if (!vr(e)) throw new Error("listener must be a function");
    this._events[t] = this._events[t] || [];
    var r = typeof e == "object";
    return this._events[t].push(r ? e : {
        listener: e,
        once: !1
    }), this
}, Pt.prototype.prepend = function(t, e) {
    if (!t || !e) return !1;
    if (!vr(e)) throw new Error("listener must be a function");
    this._events[t] = this._events[t] || [];
    var r = typeof e == "object";
    return this._events[t].unshift(r ? e : {
        listener: e,
        once: !1
    }), this
}, Pt.prototype.prependOnce = function(t, e) {
    return this.prepend(t, {
        listener: e,
        once: !0
    })
}, Pt.prototype.once = function(t, e) {
    return this.on(t, {
        listener: e,
        once: !0
    })
}, Pt.prototype.off = function(t, e) {
    var r = this._events[t];
    if (!r) return !1;
    if (typeof e == "number") r.splice(e, 1);
    else if (typeof e == "function")
        for (var n = 0, i = r.length; n < i; n++) r[n] && r[n].listener === e && r.splice(n, 1);
    return this
}, Pt.prototype.emit = function(t, e) {
    var r = this._events[t];
    if (!r) return !1;
    for (var n = 0; n < r.length; n++) {
        var i = r[n];
        i && (i.listener.call(this, e || {}), i.once && this.off(t, n))
    }
    return this
}, Pt.prototype.removeAllListeners = function(t) {
    t && this._events[t] ? this._events[t] = [] : this._events = {}
}, Pt.prototype.listeners = function(t) {
    return t && typeof t == "string" ? this._events[t] : this._events
};
var zt = function() {
    var t = function() {
        for (var e = 1 * new Date, r = 0; e == 1 * new Date;) r++;
        return e.toString(16) + r.toString(16)
    };
    return function() {
        var e = String(screen.height * screen.width);
        e = e && /\d{5,}/.test(e) ? e.toString(16) : String(31242 * ft()).replace(".", "").slice(0, 8);
        var r = t() + "-" + ft().toString(16).replace(".", "") + "-" + function() {
            var n, i, a = navigator.userAgent,
                l = [],
                u = 0;

            function d(_, y) {
                var N, x = 0;
                for (N = 0; N < y.length; N++) x |= l[N] << 8 * N;
                return _ ^ x
            }
            for (n = 0; n < a.length; n++) i = a.charCodeAt(n), l.unshift(255 & i), l.length >= 4 && (u = d(u, l), l = []);
            return l.length > 0 && (u = d(u, l)), u.toString(16)
        }() + "-" + e + "-" + t();
        return r || (String(ft()) + String(ft()) + String(ft())).slice(2, 15)
    }
}();

function gt(t) {
    return !(!t || t.nodeType !== 1)
}

function Dt(t) {
    return t === void 0
}

function A(t) {
    return Array.isArray && P(A) ? Array.isArray(t) : Object.prototype.toString.call(t) === "[object Array]"
}

function _t(t) {
    return new _n(t)
}
var _n = function(t) {
        this.ele = t
    },
    hn = function(t, e) {
        for (var r = []; t; t = t.nextSibling) t.nodeType === 1 && t !== e && r.push(t);
        return r
    };

function ne(t, e, r, n) {
    function i(a) {
        return a && (a.preventDefault = i.preventDefault, a.stopPropagation = i.stopPropagation, a._getPath = i._getPath), a
    }
    i._getPath = function() {
            return this.path || this.composedPath && this.composedPath() || _t(this.target).getParents()
        }, i.preventDefault = function() {
            this.returnValue = !1
        }, i.stopPropagation = function() {
            this.cancelBubble = !0
        },
        function(a, l, u) {
            if (n === void 0 && l === "click" && (n = !0), a && a.addEventListener) a.addEventListener(l, function(y) {
                y._getPath = i._getPath, u.call(this, y)
            }, n);
            else {
                var d = "on" + l,
                    _ = a[d];
                a[d] = function(y, N, x, ct) {
                    return function(M) {
                        if (M = M || i(window.event)) {
                            M.target = M.srcElement || M.target;
                            var bt, It, pt = !0;
                            return typeof x == "function" && (bt = x(M)), It = N.call(y, M), ct !== "beforeunload" ? (bt !== !1 && It !== !1 || (pt = !1), pt) : void 0
                        }
                    }
                }(a, u, _, l)
            }
        }.apply(null, arguments)
}

function mn(t) {
    var e = "pushState" in window.history ? "popstate" : "hashchange";
    ne(window, e, t)
}

function vn(t) {
    if (t) return typeof window.XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : typeof XDomainRequest < "u" ? new XDomainRequest : null;
    if (typeof window.XMLHttpRequest < "u") return new XMLHttpRequest;
    if (window.ActiveXObject) try {
        return new ActiveXObject("Msxml2.XMLHTTP")
    } catch (e) {
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (r) {
            Q.log(r)
        }
    }
}
_n.prototype = {
    addClass: function(t) {
        return (" " + this.ele.className + " ").indexOf(" " + t + " ") === -1 && (this.ele.className = this.ele.className + (this.ele.className === "" ? "" : " ") + t), this
    },
    removeClass: function(t) {
        var e = " " + this.ele.className + " ";
        return e.indexOf(" " + t + " ") !== -1 && (this.ele.className = e.replace(" " + t + " ", " ").slice(1, -1)), this
    },
    hasClass: function(t) {
        return (" " + this.ele.className + " ").indexOf(" " + t + " ") !== -1
    },
    attr: function(t, e) {
        return typeof t == "string" && Dt(e) ? this.ele.getAttribute(t) : (typeof t == "string" && (e = String(e), this.ele.setAttribute(t, e)), this)
    },
    offset: function() {
        try {
            var t = this.ele.getBoundingClientRect(),
                e = this.ele.ownerDocument.documentElement;
            return {
                top: t.top + window.pageYOffset - e.clientTop,
                left: t.left + window.pageXOffset - e.clientLeft
            }
        } catch (r) {
            return {
                top: 0,
                left: 0
            }
        }
    },
    getSize: function() {
        if (!window.getComputedStyle) return {
            width: this.ele.offsetWidth,
            height: this.ele.offsetHeight
        };
        try {
            var t = this.ele.getBoundingClientRect();
            return {
                width: t.width,
                height: t.height
            }
        } catch (e) {
            return {
                width: 0,
                height: 0
            }
        }
    },
    getStyle: function(t) {
        return this.ele.currentStyle ? this.ele.currentStyle[t] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(t)
    },
    wrap: function(t) {
        var e = document.createElement(t);
        return this.ele.parentNode.insertBefore(e, this.ele), e.appendChild(this.ele), _t(e)
    },
    getCssStyle: function(t) {
        var e = this.ele.style.getPropertyValue(t);
        if (e) return e;
        var r = null;
        if (typeof window.getMatchedCSSRules == "function" && (r = window.getMatchedCSSRules(this.ele)), !r || !A(r)) return null;
        for (var n = r.length - 1; n >= 0; n--)
            if (e = r[n].style.getPropertyValue(t)) return e
    },
    sibling: function(t, e) {
        for (;
            (t = t[e]) && t.nodeType !== 1;);
        return t
    },
    next: function() {
        return this.sibling(this.ele, "nextSibling")
    },
    prev: function() {
        return this.sibling(this.ele, "previousSibling")
    },
    siblings: function() {
        return hn((this.ele.parentNode || {}).firstChild, this.ele)
    },
    children: function() {
        return hn(this.ele.firstChild)
    },
    parent: function() {
        var t = this.ele.parentNode;
        return _t(t = t && t.nodeType !== 11 ? t : null)
    },
    previousElementSibling: function() {
        var t = this.ele;
        if ("previousElementSibling" in document.documentElement) return _t(t.previousElementSibling);
        for (; t = t.previousSibling;)
            if (t.nodeType === 1) return _t(t);
        return _t(null)
    },
    getSameTypeSiblings: function() {
        for (var t = this.ele, e = t.parentNode, r = t.tagName.toLowerCase(), n = [], i = 0; i < e.children.length; i++) {
            var a = e.children[i];
            a.nodeType === 1 && a.tagName.toLowerCase() === r && n.push(e.children[i])
        }
        return n
    },
    getParents: function() {
        try {
            var t = this.ele;
            if (!gt(t)) return [];
            var e = [t];
            if (t === null || t.parentElement === null) return [];
            for (; t.parentElement !== null;) t = t.parentElement, e.push(t);
            return e
        } catch (r) {
            return []
        }
    }
};
var yn = Array.prototype.forEach,
    _a = Object.prototype.hasOwnProperty;

function I(t, e, r) {
    if (t == null) return !1;
    if (yn && t.forEach === yn) t.forEach(e, r);
    else if (A(t))
        for (var n = 0, i = t.length; n < i; n++) n in t && e.call(r, t[n], n, t);
    else
        for (var a in t) _a.call(t, a) && e.call(r, t[a], a, t)
}
var ha = Object.prototype.hasOwnProperty;

function $(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) ha.call(e, r) && e[r] !== void 0 && (t[r] = e[r])
    }), t
}

function bn(t) {
    function e(l) {
        if (!l) return "";
        try {
            return JSON.parse(l)
        } catch (u) {
            return {}
        }
    }
    t.timeout = t.timeout || 2e4, t.credentials = typeof t.credentials > "u" || t.credentials;
    var r = vn(t.cors);
    if (!r) return !1;
    t.type || (t.type = t.data ? "POST" : "GET");
    var n, i = (t = $({
            success: function() {},
            error: function() {}
        }, t)).success,
        a = t.error;
    t.success = function(l, u) {
        i(l, u), n && (clearTimeout(n), n = null)
    }, t.error = function(l, u) {
        a(l, u), n && (clearTimeout(n), n = null)
    }, n = setTimeout(function() {
        (function() {
            try {
                r && typeof r == "object" && r.abort && r.abort()
            } catch (l) {
                Q.log(l)
            }
            n && (clearTimeout(n), n = null, t.error && t.error(), r.onreadystatechange = null, r.onload = null, r.onerror = null)
        })()
    }, t.timeout), typeof XDomainRequest < "u" && r instanceof XDomainRequest && (r.onload = function() {
        t.success && t.success(e(r.responseText), r.status), r.onreadystatechange = null, r.onload = null, r.onerror = null
    }, r.onerror = function() {
        t.error && t.error(e(r.responseText), r.status), r.onreadystatechange = null, r.onerror = null, r.onload = null
    }), r.onreadystatechange = function() {
        try {
            r.readyState == 4 && (r.status >= 200 && r.status < 300 || r.status == 304 ? t.success(e(r.responseText), r.status) : t.error(e(r.responseText), r.status), r.onreadystatechange = null, r.onload = null)
        } catch (l) {
            r.onreadystatechange = null, r.onload = null
        }
    }, r.open(t.type, t.url, !0);
    try {
        t.credentials && (r.withCredentials = !0), p(t.header) && I(t.header, function(l, u) {
            r.setRequestHeader && r.setRequestHeader(u, l)
        }), t.data && (t.cors || r.setRequestHeader && r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.contentType === "application/json" ? r.setRequestHeader && r.setRequestHeader("Content-type", "application/json; charset=UTF-8") : r.setRequestHeader && r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
    } catch (l) {
        Q.log(l)
    }
    r.send(t.data || null)
}

function wn(t, e) {
    var r = [];
    return t == null ? r : Array.prototype.map && t.map === Array.prototype.map ? t.map(e) : (I(t, function(n, i, a) {
        r.push(e(n, i, a))
    }), r)
}

function ge(t) {
    var e = [];
    try {
        e = wn(atob(t).split(""), function(r) {
            return "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2)
        })
    } catch (r) {
        e = []
    }
    try {
        return decodeURIComponent(e.join(""))
    } catch (r) {
        return e.join("")
    }
}

function ke(t) {
    var e = "";
    try {
        e = btoa(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(r, n) {
            return String.fromCharCode("0x" + n)
        }))
    } catch (r) {
        e = t
    }
    return e
}

function ma(t, e) {
    e = e || window;
    var r = !1,
        n = !0,
        i = e.document,
        a = i.documentElement,
        l = i.addEventListener,
        u = l ? "addEventListener" : "attachEvent",
        d = l ? "removeEventListener" : "detachEvent",
        _ = l ? "" : "on",
        y = function(x) {
            x.type == "readystatechange" && i.readyState != "complete" || ((x.type == "load" ? e : i)[d](_ + x.type, y, !1), !r && (r = !0) && t.call(e, x.type || x))
        },
        N = function() {
            try {
                a.doScroll("left")
            } catch (x) {
                return void setTimeout(N, 50)
            }
            y("poll")
        };
    if (i.readyState == "complete") t.call(e, "lazy");
    else {
        if (!l && a.doScroll) {
            try {
                n = !e.frameElement
            } catch (x) {
                Q.log(x)
            }
            n && N()
        }
        i[u](_ + "DOMContentLoaded", y, !1), i[u](_ + "readystatechange", y, !1), e[u](_ + "load", y, !1)
    }
}
var Pe = {
    get: function(t) {
        for (var e = t + "=", r = document.cookie.split(";"), n = 0; n < r.length; n++) {
            for (var i = r[n]; i.charAt(0) == " ";) i = i.substring(1, i.length);
            if (i.indexOf(e) == 0) return re(i.substring(e.length, i.length))
        }
        return null
    },
    set: function(t, e, r, n, i, a, l) {
        var u = l,
            d = "",
            _ = "",
            y = "";
        if ((r = r != null ? r : 73e3) !== 0) {
            var N = new Date;
            String(r).slice(-1) === "s" ? N.setTime(N.getTime() + 1e3 * Number(String(r).slice(0, -1))) : N.setTime(N.getTime() + 24 * r * 60 * 60 * 1e3), d = "; expires=" + N.toGMTString()
        }

        function x(It) {
            return !!It && It.replace(/\r\n/g, "")
        }
        b(i) && i !== "" && (y = "; SameSite=" + i), a && (_ = "; secure");
        var ct = "",
            M = "",
            bt = "";
        t && (ct = x(t)), e && (M = x(e)), u && (bt = x(u)), ct && M && (document.cookie = ct + "=" + encodeURIComponent(M) + d + "; path=/" + bt + y + _)
    },
    remove: function(t, e) {
        this.set(t, "1", -1, e)
    },
    isSupport: function(t, e) {
        t = t || "cookie_support_test", e = e || "1";
        var r = this;
        return navigator.cookieEnabled && (r.set(t, e), r.get(t) === e && (r.remove(t), !0))
    }
};

function br(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) e[r] !== void 0 && t[r] === void 0 && (t[r] = e[r])
    }), t
}

function _e(t) {
    var e = t;
    try {
        e = decodeURI(t)
    } catch (r) {
        e = t
    }
    return e
}

function va(t) {
    var e = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
        r = e.length - 1,
        n = {},
        i = 0;
    for (i = 0; i < e.length; i++) n[e.charAt(i)] = e.charAt(r - i);
    var a = "";
    for (i = 0; i < t.length; i++) t.charAt(i) in n ? a += n[t.charAt(i)] : a += t.charAt(i);
    return a
}

function Ce(t) {
    return Object.prototype.toString.call(t) == "[object Date]"
}

function wr(t) {
    function e(r) {
        return r < 10 ? "0" + r : r
    }
    return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + "." + e(t.getMilliseconds())
}

function Sn(t) {
    return I(t, function(e, r) {
        Ce(e) ? t[r] = wr(e) : p(e) && (t[r] = Sn(e))
    }), t
}

function kn(t) {
    return I(Array.prototype.slice.call(arguments, 1), function(e) {
        for (var r in e) e[r] !== void 0 && (p(e[r]) && p(t[r]) ? $(t[r], e[r]) : t[r] = e[r])
    }), t
}

function Pn(t, e, r) {
    var n = Object.prototype.hasOwnProperty;
    if (t.filter) return t.filter(e);
    for (var i = [], a = 0; a < t.length; a++)
        if (n.call(t, a)) {
            var l = t[a];
            e.call(r, l, a, t) && i.push(l)
        }
    return i
}

function ya(t) {
    try {
        return JSON.stringify(t, null, "  ")
    } catch (e) {
        return JSON.stringify(t)
    }
}

function ba(t) {
    return typeof t == "string" && t.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/) ? t : ""
}

function Sr(t, e) {
    e = e || "domain_test";
    var r = ba(t = t || location.hostname),
        n = r.split(".");
    if (A(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(r)) {
        for (var i = "." + n.splice(n.length - 1, 1); n.length > 0;)
            if (i = "." + n.splice(n.length - 1, 1) + i, document.cookie = e + "=true; path=/; domain=" + i, document.cookie.indexOf(e + "=true") !== -1) {
                var a = new Date;
                return a.setTime(a.getTime() - 1e3), document.cookie = e + "=true; expires=" + a.toGMTString() + "; path=/; SameSite=Lax; domain=" + i, i
            }
    }
    return ""
}

function Ve(t) {
    if (!b(t)) return null;
    var e, r = t.split(">");
    return (e = function n(i) {
        var a, l = r.shift();
        if (!l) return i;
        try {
            a = function(u, d) {
                var _;
                if ((u = wt(u)) === "body") return document.getElementsByTagName("body")[0];
                if (u.indexOf("#") === 0) u = u.slice(1), _ = document.getElementById(u);
                else if (u.indexOf(":nth-of-type") > -1) {
                    var y = u.split(":nth-of-type");
                    if (!y[0] || !y[1]) return null;
                    var N = y[0],
                        x = y[1].match(/\(([0-9]+)\)/);
                    if (!x || !x[1]) return null;
                    var ct = Number(x[1]);
                    if (!(gt(d) && d.children && d.children.length > 0)) return null;
                    for (var M = d.children, bt = 0; bt < M.length; bt++)
                        if (gt(M[bt]) && M[bt].tagName.toLowerCase() === N && --ct == 0) {
                            _ = M[bt];
                            break
                        }
                    if (ct > 0) return null
                }
                return _ || null
            }(l, i)
        } catch (u) {
            Q.log(u)
        }
        return a && gt(a) ? n(a) : null
    }()) && gt(e) ? e : null
}

function Cn(t, e) {
    var r = "",
        n = "";
    return t.textContent ? r = wt(t.textContent) : t.innerText && (r = wt(t.innerText)), r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n = r || "", e !== "input" && e !== "INPUT" || (n = t.value || ""), n
}

function xt(t, e) {
    e && typeof e == "string" || (e = "hostname\u89E3\u6790\u5F02\u5E38");
    var r = null;
    try {
        r = Ot(t).hostname
    } catch (n) {
        Q.log("getHostname\u4F20\u5165\u7684url\u53C2\u6570\u4E0D\u5408\u6CD5\uFF01")
    }
    return r || e
}

function kr() {
    try {
        var t = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
        return t && t[1] ? Number.parseInt(t[1], 10) : ""
    } catch (e) {
        return ""
    }
}

function he(t) {
    var e = {},
        r = t.split("?")[1] || "";
    return r && (e = Fe("?" + r)), e
}

function Bt(t, e) {
    var r = Ot(t),
        n = r.searchParams.get(e) || "";
    if (!n) {
        var i = r.hash;
        i && (n = he(i)[e] || "")
    }
    return n
}

function On() {
    return typeof window.matchMedia < "u" || typeof window.msMatchMedia < "u"
}

function wa() {
    var t = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
        e = "\u672A\u53D6\u5230\u503C";
    if (t) e = t.indexOf("landscape") > -1 ? "landscape" : "portrait";
    else if (On()) {
        var r = window.matchMedia || window.msMatchMedia;
        r("(orientation: landscape)").matches ? e = "landscape" : r("(orientation: portrait)").matches && (e = "portrait")
    }
    return e
}

function Pr() {
    var t, e = {},
        r = navigator.userAgent.toLowerCase();
    return (t = r.match(/ qq\/([\d.]+)/)) ? e.qqBuildinBrowser = Number(t[1].split(".")[0]) : (t = r.match(/mqqbrowser\/([\d.]+)/)) ? e.qqBrowser = Number(t[1].split(".")[0]) : (t = r.match(/opera.([\d.]+)/)) ? e.opera = Number(t[1].split(".")[0]) : (t = r.match(/msie ([\d.]+)/)) ? e.ie = Number(t[1].split(".")[0]) : (t = r.match(/edge.([\d.]+)/)) ? e.edge = Number(t[1].split(".")[0]) : (t = r.match(/firefox\/([\d.]+)/)) ? e.firefox = Number(t[1].split(".")[0]) : (t = r.match(/chrome\/([\d.]+)/)) ? e.chrome = Number(t[1].split(".")[0]) : (t = r.match(/version\/([\d.]+).*safari/)) ? e.safari = Number(t[1].match(/^\d*.\d*/)) : (t = r.match(/trident\/([\d.]+)/)) && (e.ie = 11), e
}

function it(t) {
    return b(t) ? _e(t = wt(t)) : _e(location.href)
}

function ie(t) {
    return b(t) ? _e(t = wt(t)) : _e(location.pathname)
}

function Cr(t, e) {
    return t.hasAttribute ? t.hasAttribute(e) : t.attributes ? !(!t.attributes[e] || !t.attributes[e].specified) : void 0
}

function Or(t, e) {
    if (typeof e == "string") return Cr(t, e);
    if (A(e)) {
        for (var r = !1, n = 0; n < e.length; n++)
            if (Cr(t, e[n])) {
                r = !0;
                break
            }
        return r
    }
}

function Nn(t) {
    if (typeof t != "string") return 0;
    var e = 0;
    if (t.length == 0) return e;
    for (var r = 0; r < t.length; r++) e = (e << 5) - e + t.charCodeAt(r), e &= e;
    return e
}

function Nr(t) {
    var e = 9007199254740992,
        r = -9007199254740992,
        n = 0;
    if (t.length > 0)
        for (var i = t.split(""), a = 0; a < i.length; a++) {
            var l = i[a].charCodeAt(),
                u = 31 * n + l;
            if (u > e)
                for (n = r + n;
                    (u = 31 * n + l) < r;) n = n / 2 + l;
            if (u < r)
                for (n = e + n;
                    (u = 31 * n + l) > e;) n = n / 2 + l;
            n = 31 * n + l
        }
    return n
}

function tt(t, e) {
    var r = t.indexOf;
    if (r) return r.call(t, e);
    for (var n = 0; n < t.length; n++)
        if (e === t[n]) return n;
    return -1
}

function Sa(t, e) {
    return t.prototype = new e, t.prototype.constructor = t, t.superclass = e.prototype, t
}
var ka = Object.prototype.hasOwnProperty;

function Tn(t) {
    return !(!t || !ka.call(t, "callee"))
}

function jn(t) {
    return Object.prototype.toString.call(t) == "[object Boolean]"
}

function et(t) {
    if (p(t)) {
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
        return !0
    }
    return !1
}

function In(t) {
    return typeof t != "string" ? !1 : /^https?:\/\/.+/.test(t) !== !1 || (Q.log("Invalid URL"), !1)
}

function An() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
}

function Oe(t) {
    try {
        JSON.parse(t)
    } catch (e) {
        return !1
    }
    return !0
}

function $t(t) {
    return Object.prototype.toString.call(t) == "[object Number]" && /[\d\.]+/.test(String(t))
}

function Pa() {
    var t = !1;
    if (typeof navigator != "object" || typeof navigator.sendBeacon != "function") return t;
    var e = Pr(),
        r = navigator.userAgent.toLowerCase();
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var n = (r.match(/os [\d._]*/gi) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".");
        typeof e.safari > "u" && (e.safari = n[0]), n[0] && (e.qqBuildinBrowser || e.qqBrowser) ? t = !1 : n[0] && n[0] < 13 ? (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 12) && (t = !0) : (e.chrome > 41 || e.firefox > 30 || e.opera > 25 || e.safari > 11.3) && (t = !0)
    } else(e.chrome > 38 || e.edge > 13 || e.firefox > 30 || e.opera > 25 || e.safari > 11) && (t = !0);
    return t
}

function Ca() {
    return typeof window.XMLHttpRequest < "u" && ("withCredentials" in new XMLHttpRequest || typeof XDomainRequest < "u")
}

function Dn(t) {
    if (!p(t) || !b(t.callbackName)) return Q.log("JSONP \u8BF7\u6C42\u7F3A\u5C11 callbackName"), !1;
    t.success = P(t.success) ? t.success : function() {}, t.error = P(t.error) ? t.error : function() {}, t.data = t.data || "";
    var e = document.createElement("script"),
        r = document.getElementsByTagName("head")[0],
        n = null,
        i = !1;
    if (e.defer = "defer", r.appendChild(e), $t(t.timeout)) {
        var a = Math.min(t.timeout, 3e5);
        n = setTimeout(function() {
            if (i) return !1;
            t.error("timeout"), window[t.callbackName] = function() {
                Q.log("call jsonp error")
            }, n = null, r.removeChild(e), i = !0
        }, a)
    }
    if (window[t.callbackName] = function() {
            clearTimeout(n), n = null, t.success.apply(null, arguments), window[t.callbackName] = function() {
                Q.log("call jsonp error")
            }, r.removeChild(e)
        }, t.url.indexOf("?") > -1 ? t.url += "&callbackName=" + t.callbackName : t.url += "?callbackName=" + t.callbackName, p(t.data)) {
        var l = [];
        I(t.data, function(u, d) {
            l.push(d + "=" + u)
        }), t.data = l.join("&"), t.url += "&" + t.data
    }
    e.onerror = function(u) {
        if (i) return !1;
        window[t.callbackName] = function() {
            Q.log("call jsonp error")
        }, clearTimeout(n), n = null, r.removeChild(e), t.error(u), i = !0
    }, e.src = encodeURI(t.url)
}

function xn(t) {
    ({
        visibleHandler: P(t.visible) ? t.visible : function() {},
        hiddenHandler: P(t.hidden) ? t.hidden : function() {},
        visibilityChange: null,
        hidden: null,
        isSupport: function() {
            return typeof document[this.hidden] < "u"
        },
        init: function() {
            typeof document.hidden < "u" ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : typeof document.mozHidden < "u" ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : typeof document.msHidden < "u" ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden < "u" && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.listen()
        },
        listen: function() {
            if (this.isSupport()) {
                var e = this;
                ne(document, this.visibilityChange, function() {
                    document[e.hidden] ? e.hiddenHandler() : e.visibleHandler()
                }, 1)
            } else ne(window, "focus", this.visibleHandler), ne(window, "blur", this.hiddenHandler)
        }
    }).init()
}

function We(t) {
    t = $({
        success: function() {},
        error: function() {},
        appendCall: function(r) {
            document.getElementsByTagName("head")[0].appendChild(r)
        }
    }, t);
    var e = null;
    t.type === "css" && ((e = document.createElement("link")).rel = "stylesheet", e.href = t.url), t.type === "js" && ((e = document.createElement("script")).async = "async", e.setAttribute("charset", "UTF-8"), e.src = t.url, e.type = "text/javascript"), e.onload = e.onreadystatechange = function() {
        this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (t.success(), e.onload = e.onreadystatechange = null)
    }, e.onerror = function() {
        t.error(), e.onerror = null
    }, t.appendCall(e)
}

function Oa(t) {
    if (typeof t != "string") return "";
    for (var e = /^\s*javascript/i; e.test(t);) t = t.replace(e, "");
    return t
}

function $n(t, e) {
    e = typeof e == "number" ? e : 13;
    for (var r = (t = String(t)).split(""), n = 0, i = r.length; n < i; n++) r[n].charCodeAt(0) < 126 && (r[n] = String.fromCharCode((r[n].charCodeAt(0) + e) % 126));
    return r.join("")
}

function En(t) {
    return $n(t = String(t), 113)
}

function Tr(t) {
    (p(t) || A(t)) && I(t, function(e, r) {
        p(e) || A(e) ? Tr(t[r]) : Ce(e) && (t[r] = wr(e))
    })
}
var me = {
    isSupport: function() {
        var t = !0,
            e = "testIsSupportStorage";
        try {
            sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem("__session_storage_support__", e), sessionStorage.removeItem("__session_storage_support__", e), t = !0) : t = !1
        } catch (r) {
            t = !1
        }
        return t
    }
};

function ze(t) {
    var e = document.createElement("style");
    e.type = "text/css";
    try {
        e.appendChild(document.createTextNode(t))
    } catch (i) {
        e.styleSheet.cssText = t
    }
    var r = document.getElementsByTagName("head")[0],
        n = document.getElementsByTagName("script")[0];
    r ? r.children.length ? r.insertBefore(e, r.children[0]) : r.appendChild(e) : n.parentNode.insertBefore(e, n)
}

function Na(t) {
    if (typeof t != "string") return Q.log("\u8F6C\u6362unicode\u9519\u8BEF", t), t;
    for (var e = "", r = 0; r < t.length; r++) e += "\\" + t.charCodeAt(r).toString(16);
    return e
}

function Ta(t, e, r) {
    var n, i, a, l = null,
        u = 0;
    r || (r = {});
    var d = function() {
        u = r.leading === !1 ? 0 : dt(), l = null, a = t.apply(n, i), l || (n = i = null)
    };
    return function() {
        var _ = dt();
        u || r.leading !== !1 || (u = _);
        var y = e - (_ - u);
        return n = this, i = arguments, y <= 0 || y > e ? (l && (clearTimeout(l), l = null), u = _, a = t.apply(n, i), l || (n = i = null)) : l || r.trailing === !1 || (l = setTimeout(d, y)), a
    }
}

function Ln(t) {
    var e = [];
    return t == null || I(t, function(r) {
        e[e.length] = r
    }), e
}

function ja(t) {
    return t ? t.toArray ? t.toArray() : A(t) || Tn(t) ? Array.prototype.slice.call(t) : Ln(t) : []
}

function Xe(t) {
    for (var e, r = [], n = {}, i = 0; i < t.length; i++)(e = t[i]) in n || (n[e] = !0, r.push(e));
    return r
}
var Ia = {
        "+": "-",
        "/": "_",
        "=": "."
    },
    Aa = {
        "-": "+",
        _: "/",
        ".": "="
    },
    Da = {
        encode: function(t) {
            return t.replace(/[+\/=]/g, function(e) {
                return Ia[e]
            })
        },
        decode: function(t) {
            return t.replace(/[-_.]/g, function(e) {
                return Aa[e]
            })
        },
        trim: function(t) {
            return t.replace(/[.=]{1,2}$/, "")
        },
        isBase64: function(t) {
            return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(t)
        },
        isUrlSafeBase64: function(t) {
            return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(t)
        }
    },
    xa = {
        __proto__: null,
        ConcurrentStorage: Ke,
        EventEmitter: Pt,
        URL: Ot,
        UUID: zt,
        addEvent: ne,
        addHashEvent: mn,
        ajax: bn,
        base64Decode: ge,
        base64Encode: ke,
        bindReady: ma,
        cookie: Pe,
        coverExtend: br,
        decodeURI: _e,
        decodeURIComponent: re,
        dfmapping: va,
        each: I,
        encodeDates: Sn,
        extend: $,
        extend2Lev: kn,
        filter: Pn,
        formatDate: wr,
        formatJsonString: ya,
        getCookieTopLevelDomain: Sr,
        getDomBySelector: Ve,
        getElementContent: Cn,
        getHostname: xt,
        getIOSVersion: kr,
        getQueryParam: Bt,
        getQueryParamsFromUrl: he,
        getRandom: ft,
        getRandomBasic: gn,
        getScreenOrientation: wa,
        getUA: Pr,
        getURL: it,
        getURLPath: ie,
        getURLSearchParams: Fe,
        hasAttribute: Cr,
        hasAttributes: Or,
        hashCode: Nn,
        hashCode53: Nr,
        indexOf: tt,
        inherit: Sa,
        isArguments: Tn,
        isArray: A,
        isBoolean: jn,
        isDate: Ce,
        isElement: gt,
        isEmptyObject: et,
        isFunction: P,
        isHttpUrl: In,
        isIOS: An,
        isJSONString: Oe,
        isNumber: $t,
        isObject: p,
        isString: b,
        isSupportBeaconSend: Pa,
        isSupportCors: Ca,
        isUndefined: Dt,
        jsonp: Dn,
        listenPageState: xn,
        loadScript: We,
        localStorage: E,
        logger: Q,
        map: wn,
        mediaQueriesSupported: On,
        now: dt,
        removeScriptProtocol: Oa,
        rot13defs: En,
        rot13obfs: $n,
        ry: _t,
        safeJSONParse: Y,
        searchObjDate: Tr,
        sessionStorage: me,
        setCssStyle: ze,
        strToUnicode: Na,
        throttle: Ta,
        toArray: ja,
        trim: wt,
        unique: Xe,
        urlParse: yr,
        urlSafeBase64: Da,
        values: Ln,
        xhr: vn
    },
    Ge = [],
    ae = {
        appendWriter: function(t) {
            Ge.push(t)
        },
        msg: function() {
            var t = {
                module: "",
                level: "log",
                brand: "web-sdk",
                content: null
            };
            return t.content = Array.prototype.slice.call(arguments), {
                module: function(e) {
                    return b(e) && (t.module = e), this
                },
                level: function(e) {
                    return b(e) && (t.level = e), this
                },
                brand: function(e) {
                    return b(e) && (t.brand = e), this
                },
                log: function() {
                    if (t.content && t.content.length) {
                        for (var e = 0; e < Ge.length; e++)
                            if (typeof Ge[e] == "function") try {
                                Ge[e].call(null, t)
                            } catch (r) {}
                    }
                    return this
                }
            }
        }
    };

function Et() {
    ae.msg.apply(ae, arguments).log()
}

function T() {
    ae.msg.apply(ae, arguments).level("warn").log()
}

function D() {
    ae.msg.apply(ae, arguments).level("error").log()
}
var v = {},
    Qe = {
        preset_properties: {
            search_keyword_baidu: !1,
            latest_utm: !0,
            latest_traffic_source_type: !0,
            latest_search_keyword: !0,
            latest_referrer: !0,
            latest_referrer_host: !1,
            latest_landing_page: !1,
            latest_wx_ad_click_id: void 0,
            url: !0,
            title: !0
        },
        encrypt_cookie: !1,
        enc_cookie: !1,
        img_use_crossorigin: !1,
        name: "sa",
        max_referrer_string_length: 200,
        max_string_length: 500,
        max_id_length: 255,
        max_key_length: 100,
        cross_subdomain: !0,
        show_log: !1,
        is_debug: !1,
        source_channel: [],
        sdk_id: "",
        vtrack_ignore: {},
        auto_init: !0,
        is_track_single_page: !1,
        is_single_page: !1,
        batch_send: !1,
        source_type: {},
        callback_timeout: 200,
        datasend_timeout: 8e3,
        is_track_device_id: !1,
        ignore_oom: !0,
        app_js_bridge: !1,
        white_list: {}
    };
Qe.white_list[location.host] = Ot(location.href).hostname;
var Un = "utm_source utm_medium utm_campaign utm_content utm_term",
    Ye = "1.26.3",
    Rn = "sensorsdata_domain_test",
    Ne = {
        EMAIL: "$identity_email",
        MOBILE: "$identity_mobile",
        LOGIN: "$identity_login_id"
    };

function jr(t) {
    var e = v.current_domain;
    switch (typeof e) {
        case "function":
            var r = e();
            return r === "" || wt(r) === "" ? "url\u89E3\u6790\u5931\u8D25" : r.indexOf(".") !== -1 ? r : "url\u89E3\u6790\u5931\u8D25";
        case "string":
            return e === "" || wt(e) === "" ? "url\u89E3\u6790\u5931\u8D25" : e.indexOf(".") !== -1 ? e : "url\u89E3\u6790\u5931\u8D25";
        default:
            var n = Sr(null, Rn);
            return t === "" || n === "" ? "url\u89E3\u6790\u5931\u8D25" : n
    }
}
var ot = {
    get: function(t) {
        return Pe.get(t)
    },
    set: function(t, e, r, n) {
        var i = "";
        if (n = Dt(n) ? v.cross_subdomain : n) {
            var a = jr(location.href);
            a === "url\u89E3\u6790\u5931\u8D25" && (a = ""), i = a ? "; domain=" + a : ""
        }
        return Pe.set(t, e, r, n, v.set_cookie_samesite, v.is_secure_cookie, i)
    },
    remove: function(t, e) {
        return e = Dt(e) ? v.cross_subdomain : e, Pe.remove(t, e)
    },
    isSupport: function(t, e) {
        return t = t || "sajssdk_2015_cookie_access_test", e = e || "1", Pe.isSupport(t, e)
    }
};

function Te() {
    var t = document.referrer;
    if (!t) return !1;
    try {
        var e = Ot(t).hostname;
        return e && e.substring(e.length - 9) === "baidu.com"
    } catch (r) {
        return !1
    }
}
var je = {
    data: {},
    id: function() {
        return this.data.id ? this.data.id : (this.data.id = Jn(), this.data.id)
    },
    type: function() {
        return this.data.type ? this.data.type : (this.data.type = Hn(), this.data.type)
    }
};

function Hn() {
    var t = he(document.referrer);
    if (et(t) || !t.eqid) {
        var e = he(location.href);
        return t.ck || e.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
    }
    return "baidu_seo_keyword_id"
}

function Jn() {
    var t = he(document.referrer);
    return et(t) || !t.eqid ? zt().replace(/-/g, "") : t.eqid
}

function Xt(t, e) {
    return b(t = t || document.referrer) ? ((t = _e(t = wt(t))).indexOf("https://www.baidu.com/") !== 0 || e || (t = t.split("?")[0]), b(t = t.slice(0, v.max_referrer_string_length)) ? t : "") : "\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_" + String(t)
}

function Ze(t) {
    if ((t = t || document.referrer) === "") return !0;
    var e = Sr(null, Rn);
    return xt(t).indexOf(e) === -1 && e !== ""
}

function Ie(t, e) {
    t = t || document.referrer;
    var r = v.source_type.keyword;
    if (document && b(t)) {
        if (t.indexOf("http") === 0) {
            var n = Bn(t),
                i = he(t);
            if (et(i)) return v.preset_properties.search_keyword_baidu && Te() ? void 0 : "\u672A\u53D6\u5230\u503C";
            var a = null;
            for (var l in r)
                if (n === l && p(i)) {
                    if (A(a = r[l]))
                        for (l = 0; l < a.length; l++) {
                            var u = i[a[l]];
                            if (u) return e ? {
                                active: u
                            } : u
                        } else if (i[a]) return e ? {
                            active: i[a]
                        } : i[a]
                }
            return v.preset_properties.search_keyword_baidu && Te() ? void 0 : "\u672A\u53D6\u5230\u503C"
        }
        return t === "" ? "\u672A\u53D6\u5230\u503C_\u76F4\u63A5\u6253\u5F00" : "\u672A\u53D6\u5230\u503C_\u975Ehttp\u7684url"
    }
    return "\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_" + String(t)
}

function Bn(t) {
    var e = xt(t);
    if (!e || e === "hostname\u89E3\u6790\u5F02\u5E38") return "";
    var r = {
        baidu: [/^.*\.baidu\.com$/],
        bing: [/^.*\.bing\.com$/],
        google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
        sm: [/^m\.sm\.cn$/],
        so: [/^.+\.so\.com$/],
        sogou: [/^.*\.sogou\.com$/],
        yahoo: [/^.*\.yahoo\.com$/]
    };
    for (var n in r)
        for (var i = r[n], a = 0, l = i.length; a < l; a++)
            if (i[a].test(e)) return n;
    return "\u672A\u77E5\u641C\u7D22\u5F15\u64CE"
}
var Gt = {
        distinct_id: function() {},
        jssdkDebug: function() {},
        _sendDebug: function(t) {},
        apph5: function(t) {
            var e = "app_h5\u6253\u901A\u5931\u8D25-",
                r = {
                    1: e + "use_app_track\u4E3Afalse",
                    2: e + "Android\u6216\u8005iOS\uFF0C\u6CA1\u6709\u66B4\u9732\u76F8\u5E94\u65B9\u6CD5",
                    3.1: e + "Android\u6821\u9A8Cserver_url\u5931\u8D25",
                    3.2: e + "iOS\u6821\u9A8Cserver_url\u5931\u8D25",
                    4.1: e + "H5 \u6821\u9A8C iOS server_url \u5931\u8D25",
                    4.2: e + "H5 \u6821\u9A8C Android server_url \u5931\u8D25"
                },
                n = t.output,
                i = t.step,
                a = t.data || "";
            n !== "all" && n !== "console" || Et(r[i]), (n === "all" || n === "code") && p(v.is_debug) && v.is_debug.apph5 && (a.type && a.type.slice(0, 7) === "profile" || (a.properties._jssdk_debug_info = "apph5-" + String(i)))
        },
        defineMode: function(t) {
            var e = {
                1: {
                    title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                    message: "App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 App SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                    link_text: "\u914D\u7F6E\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                2: {
                    title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                    message: "App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 Web JS SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                    link_text: "\u914D\u7F6E\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                },
                3: {
                    title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                    message: "Web JS SDK \u6CA1\u6709\u5F00\u542F\u5168\u57CB\u70B9\u914D\u7F6E\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                    link_text: "\u914D\u7F6E\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
                },
                4: {
                    title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                    message: "Web JS SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0E App SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                    link_text: "\u914D\u7F6E\u6587\u6863",
                    link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                }
            };
            return !(!t || !e[t]) && e[t]
        },
        protocol: {
            protocolIsSame: function(t, e) {
                try {
                    if (Ot(t).protocol !== Ot(e).protocol) return !1
                } catch (r) {
                    return T("\u4E0D\u652F\u6301 _.URL \u65B9\u6CD5"), !1
                }
                return !0
            },
            serverUrl: function() {
                b(v.server_url) && v.server_url !== "" && !this.protocolIsSame(v.server_url, location.href) && T(`SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002
\u56E0\u4E3A\uFF1A1\u3001https \u4E0B\u9762\u53D1\u9001 http \u7684\u56FE\u7247\u8BF7\u6C42\u4F1A\u5931\u8D25\u30022\u3001http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002`)
            },
            ajax: function(t) {
                if (t === v.server_url) return !1;
                b(t) && t !== "" && !this.protocolIsSame(t, location.href) && T("SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002\u56E0\u4E3A http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002")
            }
        }
    },
    L = {
        initPage: function() {
            var t = Xt(),
                e = it(),
                r = jr(e);
            r || Gt.jssdkDebug("url_domain\u5F02\u5E38_" + e + "_" + r), this.pageProp = {
                referrer: t,
                referrer_host: t ? xt(t) : "",
                url: e,
                url_host: xt(e, "url_host\u53D6\u503C\u5F02\u5E38"),
                url_domain: r
            }
        },
        pageProp: {},
        campaignParams: function() {
            return s.kit.getUtmData()
        },
        campaignParamsStandard: function(t, e) {
            t = t || "", e = e || "";
            var r = L.campaignParams(),
                n = {},
                i = {};
            return I(r, function(a, l, u) {
                (" " + Un + " ").indexOf(" " + l + " ") !== -1 ? n[t + l] = u[l] : i[e + l] = u[l]
            }), {
                $utms: n,
                otherUtms: i
            }
        },
        properties: function() {
            var t = window.innerHeight || document.documentElement.clientHeight || document.body && document.body.clientHeight || 0,
                e = window.innerWidth || document.documentElement.clientWidth || document.body && document.body.clientWidth || 0;
            return {
                $timezone_offset: new Date().getTimezoneOffset(),
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $viewport_height: t,
                $viewport_width: e,
                $lib: "js",
                $lib_version: Ye
            }
        },
        currentProps: {},
        register: function(t) {
            $(L.currentProps, t)
        }
    };

function qn(t, e) {
    var r = "";
    if (v.cross_subdomain === !1) {
        try {
            if (e) r = Ot(e).hostname;
            else {
                var n = location.host;
                Dt(s.para.white_list[n]) || (r = s.para.white_list[n])
            }
        } catch (i) {
            D(i)
        }
        r = typeof r == "string" && r !== "" ? "sajssdk_2015_" + v.sdk_id + t + "_" + r.replace(/\./g, "_") : "sajssdk_2015_root_" + v.sdk_id + t
    } else r = "sajssdk_2015_cross_" + v.sdk_id + t;
    return r
}

function tr() {
    return ot.isSupport() ? ot.get("sensorsdata_is_new_user") !== null || ot.get(qn("new_user")) !== null : er.get(er.getNewUserFlagMemoryKey("new_user")) !== null
}
ot.getNewUser = tr;
var er = {
        data: {},
        get: function(t) {
            var e = this.data[t];
            return e === void 0 ? null : e._expirationTimestamp_ !== void 0 ? new Date().getTime() > e._expirationTimestamp_ ? null : e.value : e
        },
        set: function(t, e, r) {
            if (r) {
                var n = new Date;
                e = {
                    value: e,
                    _expirationTimestamp_: String(r).slice(-1) === "s" ? n.getTime() + 1e3 * Number(String(r).slice(0, -1)) : n.getTime() + 24 * r * 60 * 60 * 1e3
                }
            }
            this.data[t] = e
        },
        getNewUserFlagMemoryKey: function(t) {
            return "sajssdk_2015_" + v.sdk_id + t
        }
    },
    Ae = {
        checkIsAddSign: function(t) {
            t.type === "track" && (tr() ? t.properties.$is_first_day = !0 : t.properties.$is_first_day = !1)
        },
        is_first_visit_time: !1,
        is_page_first_visited: !1,
        checkIsFirstTime: function(t) {
            t.type === "track" && t.event === "$pageview" && (this.is_first_visit_time ? (t.properties.$is_first_time = !0, this.is_first_visit_time = !1) : t.properties.$is_first_time = !1)
        },
        setDeviceId: function(t, e) {
            var r = null,
                n = ot.get("sensorsdata2015jssdkcross" + s.para.sdk_id),
                i = {};
            (n = s.kit.userDecryptIfNeeded(n)) != null && Oe(n) && (i = JSON.parse(n)).$device_id && (r = i.$device_id), r = r || t, s.para.cross_subdomain === !0 ? e.set("$device_id", r) : (i.$device_id = r, i = JSON.stringify(i), s.para.encrypt_cookie && (i = s.kit.userEncrypt(i)), ot.set("sensorsdata2015jssdkcross" + s.para.sdk_id, i, null, !0)), s.para.is_track_device_id && (L.currentProps.$device_id = r)
        },
        storeInitCheck: function() {
            if (s.is_first_visitor) {
                var t = new Date,
                    e = {
                        h: 23 - t.getHours(),
                        m: 59 - t.getMinutes(),
                        s: 59 - t.getSeconds()
                    };
                ot.isSupport() ? ot.set(qn("new_user"), "1", 3600 * e.h + 60 * e.m + e.s + "s") : er.set(er.getNewUserFlagMemoryKey("new_user"), "1", 3600 * e.h + 60 * e.m + e.s + "s"), this.is_first_visit_time = !0, this.is_page_first_visited = !0
            } else tr() || (this.checkIsAddSign = function(r) {
                r.type === "track" && (r.properties.$is_first_day = !1)
            }), this.checkIsFirstTime = function(r) {
                r.type === "track" && r.event === "$pageview" && (r.properties.$is_first_time = !1)
            }
        }
    };

function se(t, e, r) {
    var n = !(!p(v.heatmap) || !v.heatmap.useCapture);
    return p(v.heatmap) && Dt(v.heatmap.useCapture) && e === "click" && (n = !0), ne(t, e, r, n)
}
var Ir = function() {
    this._events = [], this.pendingEvents = []
};

function Ar() {
    function t(u, d) {
        for (var _ = 0; _ < u.length; _++)
            if (d.split("?")[0].indexOf(u[_]) !== -1) return !0
    }
    var e = "(" + v.source_type.utm.join("|") + ")\\=[^&]+",
        r = v.source_type.search,
        n = v.source_type.social,
        i = document.referrer || "",
        a = L.pageProp.url;
    if (a) {
        var l = a.match(new RegExp(e));
        return l && l[0] ? "\u4ED8\u8D39\u5E7F\u544A\u6D41\u91CF" : t(r, i) ? "\u81EA\u7136\u641C\u7D22\u6D41\u91CF" : t(n, i) ? "\u793E\u4EA4\u7F51\u7AD9\u6D41\u91CF" : i === "" ? "\u76F4\u63A5\u6D41\u91CF" : "\u5F15\u8350\u6D41\u91CF"
    }
    return "\u83B7\u53D6url\u5F02\u5E38"
}

function Mn(t) {
    var e = Bt(t, "gdt_vid"),
        r = Bt(t, "hash_key"),
        n = Bt(t, "callbacks"),
        i = {
            click_id: "",
            hash_key: "",
            callbacks: ""
        };
    return b(e) && e.length && (i.click_id = e.length == 16 || e.length == 18 ? e : "\u53C2\u6570\u89E3\u6790\u4E0D\u5408\u6CD5", b(r) && r.length && (i.hash_key = r), b(n) && n.length && (i.callbacks = n)), i
}

function Kn(t) {
    var e = t.properties,
        r = JSON.parse(JSON.stringify(t));
    p(e) && I(e, function(n, i) {
        if (P(n)) try {
            e[i] = n(r), P(e[i]) && (T("\u60A8\u7684\u5C5E\u6027- " + i + " \u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete e[i])
        } catch (a) {
            delete e[i], T("\u60A8\u7684\u5C5E\u6027- " + i + " \u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664")
        }
    })
}

function Fn(t) {
    if (p(t) && t.$option) {
        var e = t.$option;
        return delete t.$option, e
    }
    return {}
}

function Vn(t) {
    var e = {};
    return I(t, function(r, n) {
        r != null && (e[n] = r)
    }), e
}

function $a(t) {
    var e = !t.type || t.type.slice(0, 7) !== "profile";
    p(t.properties) && e && ("$referrer" in t.properties && (t.properties.$referrer_host = t.properties.$referrer === "" ? "" : xt(t.properties.$referrer, "\u53D6\u503C\u5F02\u5E38")), v.preset_properties.latest_referrer && v.preset_properties.latest_referrer_host && (t.properties.$latest_referrer_host = t.properties.$latest_referrer === "" ? "" : xt(t.properties.$latest_referrer, "\u53D6\u503C\u5F02\u5E38")))
}

function Ea(t) {
    var e = !t.type || t.type.slice(0, 7) !== "profile",
        r = v.preset_properties && e;
    r && v.preset_properties.url && Dt(t.properties.$url) && (t.properties.$url = it()), r && v.preset_properties.title && Dt(t.properties.$title) && (t.properties.$title = document.title)
}

function Wn(t) {
    if (!gt(t.target)) return !1;
    var e = t.target,
        r = e.tagName.toLowerCase(),
        n = {};
    return n.$element_type = r, n.$element_name = e.getAttribute("name"), n.$element_id = e.getAttribute("id"), n.$element_class_name = b(e.className) ? e.className : null, n.$element_target_url = e.getAttribute("href"), n.$element_content = rr(e, r), (n = Vn(n)).$url = it(), n.$url_path = ie(), n.$title = document.title, n
}

function La(t) {
    var e = v.heatmap && P(v.heatmap.collect_input) && v.heatmap.collect_input(t);
    return (t.type === "button" || t.type === "submit" || e) && t.value || ""
}

function rr(t, e) {
    return b(e) && e.toLowerCase() === "input" ? La(t) : Cn(t, e)
}

function Dr(t) {
    return Gt.protocol.ajax(t.url), bn(t)
}

function zn(t) {
    if (typeof t == "string" && (t = wt(t)) && (t.slice(0, 3) === "://" ? t = location.protocol.slice(0, -1) + t : t.slice(0, 2) === "//" ? t = location.protocol + t : t.slice(0, 4) !== "http" && (t = "")), A(t) && t.length)
        for (var e = 0; e < t.length; e++) /sa\.gif[^\/]*$/.test(t[e]) || (t[e] = t[e].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
    else /sa\.gif[^\/]*$/.test(t) || typeof t != "string" || (t = t.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
    return t
}

function Xn(t) {
    b(t) || (t = JSON.stringify(t));
    var e = ke(t),
        r = "crc=" + Nn(e);
    return "data=" + encodeURIComponent(e) + "&ext=" + encodeURIComponent(r)
}

function Ua(t) {
    var e, r = location.href,
        n = window.history.pushState,
        i = window.history.replaceState;
    P(window.history.pushState) && (window.history.pushState = function() {
        n.apply(window.history, arguments), t(r), r = location.href
    }), P(window.history.replaceState) && (window.history.replaceState = function() {
        i.apply(window.history, arguments), t(r), r = location.href
    }), e = window.document.documentMode ? "hashchange" : n ? "popstate" : "hashchange", ne(window, e, function() {
        t(r), r = location.href
    })
}
Ir.prototype = {
    emit: function(t) {
        var e = [].slice.call(arguments, 1);
        I(this._events, function(r) {
            r.type === t && r.callback.apply(r.context, e)
        }), this.pendingEvents.push({
            type: t,
            data: e
        }), this.pendingEvents.length > 20 && this.pendingEvents.shift()
    },
    on: function(t, e, r, n) {
        P(e) && (this._events.push({
            type: t,
            callback: e,
            context: r || this
        }), n = n !== !1, this.pendingEvents.length > 0 && n && I(this.pendingEvents, function(i) {
            i.type === t && e.apply(r, i.data)
        }))
    },
    tempAdd: function(t, e) {
        if (e && t) return this.emit(t, e)
    },
    isReady: function() {}
};
var K = {},
    xr = new Pt;

function Gn(t, e) {
    var r = [];
    typeof t == "string" && t in K.EVENT_LIST && (r = K.EVENT_LIST[t], K[r[0]].on(r[1], e))
}
K.spa = xr, K.sdk = new Pt, K.data = new Pt, K.initSystemEvent = function() {
    Ua(function(t) {
        xr.emit("switch", t)
    })
}, K.EVENT_LIST = {
    spaSwitch: ["spa", "switch"],
    sdkBeforeInit: ["sdk", "beforeInit"],
    sdkInitPara: ["sdk", "initPara"],
    sdkAfterInitPara: ["sdk", "afterInitPara"],
    sdkInitAPI: ["sdk", "initAPI"],
    sdkAfterInitAPI: ["sdk", "afterInitAPI"],
    sdkAfterInit: ["sdk", "afterInit"],
    sdkReady: ["sdk", "ready"],
    dataSendSuccess: ["data", "sendSuccess"],
    dataSendFail: ["data", "sendFail"]
};
var $r = function(t) {
    this.callback = t.callback, this.server_url = t.server_url, this.data = t.data, this.origin_data = t.origin_data
};
$r.prototype.start = function() {
    var t = this,
        e = new Date;
    Dr({
        url: this.server_url,
        type: "POST",
        data: t.data,
        credentials: !1,
        timeout: v.datasend_timeout,
        cors: !0,
        success: function(r, n) {
            K.data.emit("sendSuccess", {
                status: String(n),
                resText: r,
                type: "ajax_single",
                timeout_config: v.datasend_timeout,
                request_timeout: new Date - e,
                data: t.origin_data
            }), t.end()
        },
        error: function(r, n) {
            K.data.emit("sendFail", {
                status: String(n),
                resText: r,
                type: "ajax_single",
                timeout_config: v.datasend_timeout,
                request_timeout: new Date - e,
                data: t.origin_data
            }), t.end()
        }
    })
}, $r.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !P(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
};
var Qn = "sawebjssdk-",
    Er = "tab-sawebjssdk-";

function Yn() {
    this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1
}
Yn.prototype = {
    batchInterval: function() {
        this.serverUrl === "" && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this.hasTabStorage = !0);
        var t = this;
        t.timer = setTimeout(function() {
            t.updateExpireTime(), t.recycle(), t.send(), clearTimeout(t.timer), t.batchInterval()
        }, v.batch_send.send_interval)
    },
    getServerUrl: function() {
        if (!(b(v.server_url) && v.server_url !== "" || A(v.server_url) && v.server_url.length)) return D("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01");
        this.serverUrl = A(v.server_url) ? v.server_url[0] : v.server_url
    },
    send: function() {
        if (this.sendTimeStamp && dt() - this.sendTimeStamp < v.batch_send.send_interval) return !1;
        var t = E.get(this.tabKey);
        if (t) {
            this.sendTimeStamp = dt();
            var e = Xe((t = Y(t) || this.generateTabStorageVal()).data);
            if (e.length) {
                for (var r = [], n = 0; n < e.length; n++) {
                    var i = s.store.readObjectVal(e[n]);
                    i && (i._flush_time = new Date().getTime(), r.push(i))
                }
                r.length && this.request(r, t.data)
            }
        }
    },
    updateExpireTime: function() {
        var t = E.get(this.tabKey);
        t && ((t = Y(t) || this.generateTabStorageVal()).expireTime = dt() + 2 * v.batch_send.send_interval, t.serverUrl = this.serverUrl, E.set(this.tabKey, JSON.stringify(t)))
    },
    request: function(t, e) {
        var r = this,
            n = new Date;
        Dr({
            url: this.serverUrl,
            type: "POST",
            data: "data_list=" + encodeURIComponent(ke(JSON.stringify(t))),
            credentials: !1,
            timeout: v.batch_send.datasend_timeout,
            cors: !0,
            success: function(i, a) {
                K.data.emit("sendSuccess", {
                    status: String(a),
                    resText: i,
                    type: "ajax_batch",
                    timeout_config: v.batch_send.datasend_timeout,
                    request_timeout: new Date - n,
                    data: t
                }), r.remove(e), r.sendTimeStamp = 0
            },
            error: function(i, a) {
                K.data.emit("sendFail", {
                    status: String(a),
                    resText: i,
                    type: "ajax_batch",
                    timeout_config: v.batch_send.datasend_timeout,
                    request_timeout: new Date - n,
                    data: t
                }), r.sendTimeStamp = 0
            }
        })
    },
    remove: function(t) {
        var e = E.get(this.tabKey);
        if (e) {
            for (var r = (Y(e) || this.generateTabStorageVal()).data, n = 0; n < t.length; n++) {
                var i = tt(r, t[n]);
                i > -1 && r.splice(i, 1), E.remove(t[n])
            }
            r = Xe(r), E.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)))
        }
    },
    add: function(t) {
        var e = Qn + String(ft()),
            r = E.get(this.tabKey);
        r === null ? (this.tabKey = Er + String(ft()), r = this.generateTabStorageVal()) : r = Y(r) || this.generateTabStorageVal(), r.data.push(e), r.expireTime = dt() + 2 * v.batch_send.send_interval, E.set(this.tabKey, JSON.stringify(r)), s.store.saveObjectVal(e, t), t.type !== "track_signup" && t.event !== "$pageview" || this.sendImmediately()
    },
    generateTabStorage: function() {
        this.tabKey = Er + String(ft()), E.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()))
    },
    generateTabStorageVal: function(t) {
        return {
            data: t = t || [],
            expireTime: dt() + 2 * v.batch_send.send_interval,
            serverUrl: this.serverUrl
        }
    },
    sendImmediately: function() {
        this.send()
    },
    recycle: function() {
        for (var t = {}, e = 0; e < localStorage.length; e++) {
            var r = localStorage.key(e),
                n = this;
            if (r.indexOf(Er) === 0) {
                for (var i = Y(E.get(r)) || this.generateTabStorageVal(), a = 0; a < i.data.length; a++) t[i.data[a]] = !0;
                r !== n.tabKey && dt() > i.expireTime && this.serverUrl === i.serverUrl && new Ke("sajssdk-lock-get-").get(r, 1e4, 1e3, function(_) {
                    if (_) {
                        E.get(n.tabKey) === null && n.generateTabStorage();
                        var y = Y(_) || n.generateTabStorageVal(),
                            N = Y(E.get(n.tabKey)) || n.generateTabStorageVal();
                        N.data = Xe(N.data.concat(y.data)), E.set(n.tabKey, JSON.stringify(N))
                    }
                })
            } else if (r.indexOf("sajssdk-lock-get-") === 0) {
                var l = Y(E.get(r)) || {
                    expireTime: 0
                };
                dt() - l.expireTime > 1e4 && E.remove(r)
            }
        }
        for (var u = 0; u < localStorage.length; u++) {
            var d = localStorage.key(u);
            d.indexOf(Qn) !== 0 || t[d] || E.remove(d)
        }
    }
};
var Lr = function(t) {
    this.callback = t.callback, this.server_url = t.server_url, this.data = t.data
};
Lr.prototype.start = function() {
    var t = this;
    typeof navigator == "object" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(this.server_url, this.data), setTimeout(function() {
        t.end()
    }, 40)
}, Lr.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !P(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
};
var nr = function(t) {
    this.callback = t.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, v.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.server_url = t.data
};
nr.prototype.start = function() {
    var t = this;
    v.ignore_oom && (this.img.onload = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }, this.img.onerror = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }, this.img.onabort = function() {
        this.onload = null, this.onerror = null, this.onabort = null, t.end()
    }), this.img.src = this.server_url
}, nr.prototype.lastClear = function() {
    Pr().ie !== void 0 ? this.img.src = "about:blank" : this.img.src = ""
}, nr.prototype.end = function() {
    if (this.callback) {
        if (Et("warning: sdk callback is deprecated."), !P(this.callback)) return void Et("error: sdk callback must be function.");
        this.callback()
    }
    var t = this;
    setTimeout(function() {
        t.lastClear && t.lastClear()
    }, v.datasend_timeout - v.callback_timeout)
};
var Ra = {
        __proto__: null,
        addEvent: se,
        EventEmitterSa: Ir,
        cookie: ot,
        info: L,
        getReferrer: Xt,
        getCurrentDomain: jr,
        isBaiduTraffic: Te,
        getReferrerEqid: Jn,
        getReferrerEqidType: Hn,
        getBaiduKeyword: je,
        isReferralTraffic: Ze,
        getKeywordFromReferrer: Ie,
        getReferSearchEngine: Bn,
        getSourceFromReferrer: Ar,
        getWxAdIdFromUrl: Mn,
        parseSuperProperties: Kn,
        searchConfigData: Fn,
        strip_empty_properties: Vn,
        getEleInfo: Wn,
        getElementContent: rr,
        ajax: Dr,
        optimizeServerUrl: zn,
        encodeTrackData: Xn,
        AjaxSend: $r,
        BatchSend: Yn,
        BeaconSend: Lr,
        ImageSend: nr
    },
    Zn = new Ir,
    c = {
        requests: [],
        _sessionState: {},
        _state: {
            distinct_id: "",
            first_id: "",
            props: {},
            identities: {}
        },
        getProps: function() {
            return this._state.props || {}
        },
        getSessionProps: function() {
            return this._sessionState
        },
        getOriginDistinctId: function() {
            return this._state._distinct_id || this._state.distinct_id
        },
        getOriginUnionId: function(t) {
            var e = {},
                r = (t = t || this._state)._first_id || t.first_id,
                n = t._distinct_id || t.distinct_id;
            return r && n ? (e.login_id = n, e.anonymous_id = r) : e.anonymous_id = n, e
        },
        getDistinctId: function() {
            var t = this.getUnionId();
            return t.login_id || t.anonymous_id
        },
        getUnionId: function(t) {
            var e = this.getOriginUnionId(t);
            return e.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== Ne.LOGIN && (e.login_id = this._state.history_login_id.name + "+" + e.login_id), e
        },
        getFirstId: function() {
            return this._state._first_id || this._state.first_id
        },
        initSessionState: function() {
            var t = ot.get("sensorsdata2015session"),
                e = null;
            (t = s.kit.userDecryptIfNeeded(t)) !== null && typeof(e = Y(t)) == "object" && (this._sessionState = e || {})
        },
        setOnce: function(t, e) {
            t in this._state || this.set(t, e)
        },
        set: function(t, e) {
            this._state = this._state || {};
            var r = this._state.distinct_id;
            this._state[t] = e, t === "first_id" ? delete this._state._first_id : t === "distinct_id" && delete this._state._distinct_id, this.save(), t === "distinct_id" && r && Zn.tempAdd("changeDistinctId", e)
        },
        change: function(t, e) {
            this._state["_" + t] = e
        },
        setSessionProps: function(t) {
            s.log("initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE");
            var e = this._sessionState;
            $(e, t), this.sessionSave(e)
        },
        setSessionPropsOnce: function(t) {
            s.log("initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE");
            var e = this._sessionState;
            br(e, t), this.sessionSave(e)
        },
        setProps: function(t, e) {
            var r = {};
            for (var n in r = e ? t : $(this._state.props || {}, t)) typeof r[n] == "string" && (r[n] = r[n].slice(0, s.para.max_referrer_string_length));
            this.set("props", r)
        },
        setPropsOnce: function(t) {
            var e = this._state.props || {};
            br(e, t), this.set("props", e)
        },
        clearAllProps: function(t) {
            var e;
            if (this._sessionState = {}, A(t) && t.length > 0)
                for (e = 0; e < t.length; e++) b(t[e]) && t[e].indexOf("latest_") === -1 && p(this._state.props) && t[e] in this._state.props && delete this._state.props[t[e]];
            else if (p(this._state.props))
                for (e in this._state.props) e.indexOf("latest_") !== 1 && delete this._state.props[e];
            this.sessionSave({}), this.save()
        },
        sessionSave: function(t) {
            s.log("initSessionState \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u5982\u6709\u9700\u6C42\u8054\u7CFB\u6280\u672F\u987E\u95EE"), this._sessionState = t;
            var e = JSON.stringify(this._sessionState);
            s.para.encrypt_cookie && (e = s.kit.userEncrypt(e)), ot.set("sensorsdata2015session", e, 0)
        },
        save: function() {
            var t = JSON.parse(JSON.stringify(this._state));
            delete t._first_id, delete t._distinct_id, t.identities && (t.identities = ke(JSON.stringify(t.identities)));
            var e = JSON.stringify(t);
            s.para.encrypt_cookie && (e = s.kit.userEncrypt(e)), ot.set(this.getCookieName(), e, 730, s.para.cross_subdomain)
        },
        getCookieName: function() {
            var t = "";
            if (s.para.cross_subdomain === !1) {
                try {
                    var e = location.host;
                    Dt(s.para.white_list[e]) || (t = s.para.white_list[e])
                } catch (r) {
                    T(r)
                }
                t = typeof t == "string" && t !== "" ? "sa_jssdk_2015_" + s.para.sdk_id + t.replace(/\./g, "_") : "sa_jssdk_2015_root" + s.para.sdk_id
            } else t = "sensorsdata2015jssdkcross" + s.para.sdk_id;
            return t
        },
        init: function() {
            this.initSessionState();
            var t, e, r = zt();
            ot.isSupport() && (t = ot.get(this.getCookieName()), e = Y(t = s.kit.userDecryptIfNeeded(t))), ot.isSupport() && t !== null && Oe(t) && p(e) && (!p(e) || e.distinct_id) ? (c._state = $(function(n) {
                var i;
                n.identities && (n.identities.indexOf(`
/`) === 0 ? n.identities = Y(En(n.identities)) : n.identities = Y(ge(n.identities)));
                var a = c.getOriginUnionId(n);
                n.identities && p(n.identities) && !et(n.identities) || (n.identities = {}, n.identities.$identity_cookie_id = zt()), n.history_login_id = n.history_login_id || {};
                var l = n.history_login_id.name;
                if (a.login_id)
                    if (l && n.identities.hasOwnProperty(l)) {
                        if (n.identities[l] !== a.login_id) {
                            for (i in n.identities[l] = a.login_id, n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== l && delete n.identities[i];
                            n.history_login_id.value = a.login_id
                        }
                    } else {
                        var u = l || Ne.LOGIN;
                        for (i in n.identities[u] = a.login_id, n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== u && delete n.identities[i];
                        n.history_login_id = {
                            name: u,
                            value: a.login_id
                        }
                    }
                else {
                    if (n.identities.hasOwnProperty("$identity_login_id") || n.identities.hasOwnProperty(l))
                        for (i in n.identities) n.identities.hasOwnProperty(i) && i !== "$identity_cookie_id" && i !== "$identity_anonymous_id" && delete n.identities[i];
                    n.history_login_id = {
                        name: "",
                        value: ""
                    }
                }
                return n
            }(e)), c.save()) : (s.is_first_visitor = !0, function(n) {
                c.set("distinct_id", n), c.set("identities", {
                    $identity_cookie_id: n
                }), c.set("history_login_id", {
                    name: "",
                    value: ""
                })
            }(r)), Ae.setDeviceId(r, this), Ae.storeInitCheck()
        },
        saveObjectVal: function(t, e) {
            b(e) || (e = JSON.stringify(e)), s.para.encrypt_cookie == 1 && (e = s.kit.userEncrypt(e)), E.set(t, e)
        },
        readObjectVal: function(t) {
            var e = E.get(t);
            return e ? Y(e = s.kit.userDecryptIfNeeded(e)) : null
        }
    },
    q = {
        string: function(t) {
            T(t + " must be string")
        },
        emptyString: function(t) {
            T(t + "'s is empty")
        },
        regexTest: function(t) {
            T(t + " is invalid")
        },
        idLength: function(t) {
            T(t + " length is longer than " + v.max_id_length)
        },
        keyLength: function(t) {
            T(t + " length is longer than " + v.max_key_length)
        },
        stringLength: function(t) {
            T(t + " length is longer than " + v.max_string_length)
        },
        voidZero: function(t) {
            T(t + "'s is undefined")
        },
        reservedLoginId: function(t) {
            T(t + " is invalid")
        },
        reservedBind: function(t) {
            T(t + " is invalid")
        },
        reservedUnbind: function(t) {
            T(t + " is invalid")
        }
    },
    ti = {
        regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
        loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
        bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
        unbindReservedNames: ["$identity_anonymous_id", Ne.LOGIN],
        string: function(t) {
            return !!b(t)
        },
        emptyString: function(t) {
            return !(!b(t) || wt(t).length === 0)
        },
        regexTest: function(t) {
            return !(!b(t) || !this.regName.test(t))
        },
        idLength: function(t) {
            return !(!b(t) || t.length > v.max_id_length)
        },
        keyLength: function(t) {
            return !(!b(t) || t.length > v.max_key_length)
        },
        stringLength: function(t) {
            return !(!b(t) || t.length > v.max_string_length)
        },
        voidZero: function(t) {
            return t !== void 0
        },
        reservedLoginId: function(t) {
            return !(tt(this.loginIDReservedNames, t) > -1)
        },
        reservedUnbind: function(t) {
            return !(tt(this.unbindReservedNames, t) > -1)
        },
        reservedBind: function(t) {
            var e = c._state.history_login_id;
            return (!e || !e.name || e.name !== t) && !(tt(this.bindReservedNames, t) > -1)
        }
    },
    Ha = {
        distinct_id: {
            rules: ["string", "emptyString", "idLength"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Id"), P(q[r]) && q[r](e), r === "idLength") || t
            }
        },
        event: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "eventName"), P(q[r]) && q[r](e)), !0
            }
        },
        propertyKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "Property key"), P(q[r]) && q[r](e)), !0
            }
        },
        propertyValue: {
            rules: ["voidZero"],
            onComplete: function(t, e, r) {
                return t || P(q[r]) && q[r]("Property Value"), !0
            }
        },
        properties: function(t) {
            return p(t) ? I(t, function(e, r) {
                H({
                    propertyKey: r
                }), H({
                    propertyValue: e
                }, function(n, i, a) {
                    return n || (i = r + "'s Value", P(q[a]) && q[a](i)), !0
                })
            }) : ti.voidZero(t) && T("properties\u53EF\u4EE5\u6CA1\u6709\uFF0C\u4F46\u6709\u7684\u8BDD\u5FC5\u987B\u662F\u5BF9\u8C61"), !0
        },
        propertiesMust: function(t) {
            return t !== void 0 && p(t) && !et(t) ? this.properties.call(this, t) : T("properties\u5FC5\u987B\u662F\u5BF9\u8C61"), !0
        },
        item_type: {
            rules: ["string", "emptyString", "keyLength", "regexTest"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "item_type"), P(q[r]) && q[r](e)), !0
            }
        },
        item_id: {
            rules: ["string", "emptyString", "stringLength"],
            onComplete: function(t, e, r) {
                return t || (r === "emptyString" && (e = "item_id"), P(q[r]) && q[r](e)), !0
            }
        },
        loginIdKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "login_id_key"), P(q[r]) && q[r](e), r === "keyLength") || t
            }
        },
        bindKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Key"), P(q[r]) && q[r](e), r === "keyLength") || t
            }
        },
        unbindKey: {
            rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Key"), P(q[r]) && q[r](e), r === "keyLength") || t
            }
        },
        bindValue: {
            rules: ["string", "emptyString", "idLength"],
            onComplete: function(t, e, r) {
                return !t && (r === "emptyString" && (e = "Value"), P(q[r]) && q[r](e), r === "idLength") || t
            }
        },
        check: function(t, e, r) {
            var n = this[t];
            if (P(n)) return n.call(this, e);
            if (!n) return !1;
            for (var i = 0; i < n.rules.length; i++) {
                var a = n.rules[i],
                    l = ti[a](e),
                    u = P(r) ? r(l, e, a) : n.onComplete(l, e, a);
                if (!l) return u
            }
            return !0
        }
    };

function H(t, e) {
    for (var r in t)
        if (Object.prototype.hasOwnProperty.call(t, r) && !Ha.check(r, t[r], e)) return !1;
    return !0
}

function Ja(t, e) {
    return p(t) && I(t, function(r, n) {
        if (A(r)) {
            var i = [];
            I(r, function(l) {
                if (b(l)) i.push(l);
                else if (Dt(l)) i.push("null");
                else try {
                    i.push(JSON.stringify(l))
                } catch (u) {
                    T("\u60A8\u7684\u6570\u636E-", n, r, "\u6570\u7EC4\u91CC\u503C\u6709\u9519\u8BEF,\u5DF2\u5C06\u5176\u5220\u9664")
                }
            }), t[n] = i
        }
        var a = tt(e || [], n) > -1;
        if (p(r) && n !== "$option" && !a) try {
            t[n] = JSON.stringify(r)
        } catch (l) {
            delete t[n], T("\u60A8\u7684\u6570\u636E-", n, r, "\u6570\u636E\u503C\u6709\u9519\u8BEF\uFF0C\u5DF2\u5C06\u5176\u5220\u9664")
        } else b(r) || $t(r) || Ce(r) || jn(r) || A(r) || P(r) || n === "$option" || a || (T("\u60A8\u7684\u6570\u636E-", n, r, "-\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete t[n])
    }), t
}

function Ba(t, e) {
    return $t(e) && t.length > e ? (T("\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u9650\u5236\uFF0C\u5DF2\u7ECF\u505A\u622A\u53D6--" + t), t.slice(0, e)) : t
}

function qa(t, e) {
    p(t) && I(["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"], function(r, n) {
        r in t && (tt(e || [], r) > -1 || (n < 3 ? (delete t[r], T("\u60A8\u7684\u5C5E\u6027- " + r + "\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664")) : T("\u60A8\u7684\u5C5E\u6027- " + r + "\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u8BF7\u907F\u514D\u5176\u4F5C\u4E3A\u5C5E\u6027\u540D")))
    })
}

function ei(t) {
    var e = ["$element_selector", "$element_path"],
        r = ["sensorsdata_app_visual_properties"];
    p(t) && I(t, function(n, i) {
        if (p(n)) ei(t[i]);
        else if (b(n)) {
            if (tt(r, i) > -1) return;
            t[i] = Ba(n, tt(e, i) > -1 ? 1024 : v.max_string_length)
        }
    })
}

function Ma(t) {
    typeof t.properties.$project < "u" && (t.project = t.properties.$project, delete t.properties.$project), typeof t.properties.$token < "u" && (t.token = t.properties.$token, delete t.properties.$token)
}

function Ka(t) {
    "item_type" in t && H({
        item_type: t.item_type
    }, function(e) {
        return e || delete t.item_type, !0
    }), "item_id" in t && H({
        item_id: t.item_id
    }, function(e, r, n) {
        return e || n !== "string" || delete t.item_id, !0
    })
}

function Fa(t, e) {
    I(t, function(r, n) {
        tt(e || [], n) === -1 && H({
            propertyKey: n
        }, function(i, a, l) {
            return i || l === "keyLength" || delete t[n], !0
        })
    })
}

function Va(t) {
    var e = t.properties;
    Tr(t), p(e) ? (Ja(e), qa(e), Ma(t), Fa(e), ei(e)) : "properties" in t && (t.properties = {}), Ka(t)
}

function Wa(t, e) {
    var r = e.sensors;
    return t._track_id = Number(String(ft()).slice(2, 5) + String(ft()).slice(2, 4) + String(new Date().getTime()).slice(-4)), t._flush_time = new Date().getTime(), r.events.tempAdd("send", t), t
}
var X = {
        initUrl: function() {
            var t, e, r = {
                server_url: {
                    project: "",
                    host: ""
                },
                page_url: {
                    host: "",
                    pathname: ""
                }
            };
            if (!In(s.para.server_url)) return D("----vcollect---server_url\u5FC5\u987B\u4E3A\u6709\u6548 URL \u5B57\u7B26\u4E32"), !1;
            try {
                t = Ot(s.para.server_url), r.server_url.project = t.searchParams.get("project") || "default", r.server_url.host = t.host
            } catch (n) {
                return D("----vcollect---server_url\u89E3\u6790\u5F02\u5E38", n), !1
            }
            try {
                e = Ot(location.href), r.page_url.host = e.hostname, r.page_url.pathname = e.pathname
            } catch (n) {
                return D("----vcollect---\u9875\u9762\u5730\u5740\u89E3\u6790\u5F02\u5E38", n), !1
            }
            return r
        },
        isDiv: function(t) {
            return !(t.element_path && wt(t.element_path.split(">").pop()).slice(0, 3) !== "div")
        },
        configIsMatchNew: function(t, e) {
            if (b(t.$element_selector) && b(e.element_selector)) {
                if (e.element_field === "element_selector" && e.function === "equal") return t.$element_selector === e.element_selector;
                if (e.element_field === "element_selector" && e.function === "contain") return t.$element_selector.indexOf(e.element_selector) > -1
            }
            if (b(t.$element_path) && b(e.element_path)) {
                if (e.element_field === "element_path" && e.function === "equal") return t.$element_path === e.element_path;
                if (e.element_field === "element_path" && e.function === "contain") return t.$element_path.indexOf(e.element_path) > -1
            }
            return !1
        },
        configIsMatch: function(t, e) {
            return (!e.limit_element_content || e.element_content === t.$element_content) && (!e.limit_element_position || e.element_position === String(t.$element_position)) && (e.element_field && e.function ? X.configIsMatchNew(t, e) : X.configIsMatchOldVersion(t, e))
        },
        configIsMatchOldVersion: function(t, e) {
            if (!e.element_path) return !1;
            if (t.$element_position !== void 0) {
                if (e.element_path !== t.$element_path) return !1
            } else if (X.isDiv({
                    element_path: e.element_path
                })) {
                if (t.$element_path.indexOf(e.element_path) < 0) return !1
            } else if (e.element_path !== t.$element_path) return !1;
            return !0
        },
        filterConfig: function(t, e, r) {
            var n = [];
            if (!r) {
                var i = X.initUrl();
                if (!i) return [];
                r = i.page_url
            }
            return t.event === "$WebClick" && I(e, function(a) {
                p(a) && (a.event_type === "webclick" || a.event_type === "appclick") && p(a.event) && a.event.url_host === r.host && a.event.url_path === r.pathname && X.configIsMatch(t.properties, a.event) && n.push(a)
            }), n
        },
        getPropElInLi: function(t, e) {
            if (!(t && gt(t) && b(e)) || t.tagName.toLowerCase() !== "li") return null;
            var r = s.heatmap.getDomSelector(t);
            if (r) {
                var n = Ve(r + e);
                return n || null
            }
            return T("----custom---\u83B7\u53D6\u540C\u7EA7\u5C5E\u6027\u5143\u7D20\u5931\u8D25\uFF0Cselector\u4FE1\u606F\u5F02\u5E38", r, e), null
        },
        getProp: function(t, e) {
            if (!p(t)) return !1;
            if (!(b(t.name) && t.name.length > 0)) return T("----vcustom----\u5C5E\u6027\u540D\u4E0D\u5408\u6CD5,\u5C5E\u6027\u629B\u5F03", t.name), !1;
            var r, n, i = {};
            if (t.method === "content") {
                var a;
                if (b(t.element_selector) && t.element_selector.length > 0) a = Ve(t.element_selector);
                else {
                    if (!e || !b(t.list_selector)) return T("----vcustom----\u5C5E\u6027\u914D\u7F6E\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", t.name), !1;
                    var l = Ve(e.properties.$element_selector);
                    if (!l) return T("----vcustom----\u70B9\u51FB\u5143\u7D20\u83B7\u53D6\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", t.name), !1;
                    var u = s.heatmap.getClosestLi(l);
                    a = X.getPropElInLi(u, t.list_selector)
                }
                if (!a || !gt(a)) return T("----vcustom----\u5C5E\u6027\u5143\u7D20\u83B7\u53D6\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", t.name), !1;
                if (a.tagName.toLowerCase() === "input") r = a.value || "";
                else if (a.tagName.toLowerCase() === "select") {
                    var d = a.selectedIndex;
                    $t(d) && gt(a[d]) && (r = rr(a[d], "select"))
                } else r = rr(a, a.tagName.toLowerCase());
                if (t.regular) {
                    try {
                        n = new RegExp(t.regular).exec(r)
                    } catch (_) {
                        return T("----vcustom----\u6B63\u5219\u5904\u7406\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", t.name), !1
                    }
                    if (n === null) return T("----vcustom----\u5C5E\u6027\u89C4\u5219\u5904\u7406\uFF0C\u672A\u5339\u914D\u5230\u7ED3\u679C,\u5C5E\u6027\u629B\u5F03", t.name), !1;
                    if (!A(n) || !b(n[0])) return T("----vcustom----\u6B63\u5219\u5904\u7406\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", t.name, n), !1;
                    r = n[0]
                }
                if (t.type === "STRING") i[t.name] = r;
                else if (t.type === "NUMBER") {
                    if (r.length < 1) return T("----vcustom----\u672A\u83B7\u53D6\u5230\u6570\u5B57\u5185\u5BB9\uFF0C\u5C5E\u6027\u629B\u5F03", t.name, r), !1;
                    if (isNaN(Number(r))) return T("----vcustom----\u6570\u5B57\u7C7B\u578B\u5C5E\u6027\u8F6C\u6362\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", t.name, r), !1;
                    i[t.name] = Number(r)
                }
                return i
            }
            return D("----vcustom----\u5C5E\u6027\u4E0D\u652F\u6301\u6B64\u83B7\u53D6\u65B9\u5F0F", t.name, t.method), !1
        },
        getAssignConfigs: function(t, e) {
            var r = X.initUrl();
            if (!r || !r.page_url) return [];
            if (!p(e)) return [];
            var n = [];
            return e.events = e.events || e.eventList, A(e.events) && e.events.length > 0 ? (I(e.events, function(i) {
                p(i) && p(i.event) && i.event.url_host === r.page_url.host && i.event.url_path === r.page_url.pathname && t(i) && n.push(i)
            }), n) : []
        }
    },
    za = {
        events: [],
        getAssignConfigs: X.getAssignConfigs,
        filterConfig: X.filterConfig,
        getProp: X.getProp,
        initUrl: X.initUrl,
        updateEvents: function(t) {
            A(t) && (this.events = t)
        },
        init: function() {
            this.initAppGetPropsBridge()
        },
        geth5Props: function(t) {
            var e = {},
                r = [],
                n = this;
            if (!this.events.length) return {};
            if (t.event === "$WebClick") {
                var i = this.filterConfig(t, this.events);
                if (!i.length) return {};
                I(i, function(a) {
                    p(a) && (A(a.properties) && a.properties.length > 0 && I(a.properties, function(l) {
                        if (p(l))
                            if (l.h5 === !1) A(e.sensorsdata_app_visual_properties) || (e.sensorsdata_app_visual_properties = []), e.sensorsdata_app_visual_properties.push(l);
                            else {
                                var u = n.getProp(l, t);
                                p(u) && (e = $(e, u))
                            }
                    }), b(a.event_name) && r.push(a.event_name))
                }), s.bridge.hasVisualModeBridge() && (e.sensorsdata_web_visual_eventName = r)
            }
            return e.sensorsdata_app_visual_properties && (e.sensorsdata_app_visual_properties = ke(JSON.stringify(e.sensorsdata_app_visual_properties))), e
        },
        initAppGetPropsBridge: function() {
            var t = this,
                e = new s.SDKJSBridge("getJSVisualProperties");
            return e.onAppNotify(function(r) {
                var n = {};
                try {
                    r = JSON.parse(ge(r))
                } catch (l) {
                    D("getJSVisualProperties data parse error!")
                }
                if (p(r)) {
                    var i = r.sensorsdata_js_visual_properties,
                        a = t.initUrl();
                    a && (a = a.page_url, A(i) && i.length > 0 && I(i, function(l) {
                        if (p(l) && l.url_host === a.host && l.url_path === a.pathname && l.h5) {
                            var u = t.getProp(l);
                            p(u) && (n = $(n, u))
                        }
                    }))
                }
                return s.bridge.bridge_info.platform === "android" && e.notifyApp({
                    data: n
                }, r.message_id), n
            }), e
        }
    },
    Ur = {
        events: [],
        customProp: za,
        getAssignConfigs: X.getAssignConfigs,
        initUrl: X.initUrl,
        init: function() {
            if (this.initUrl()) {
                var t = this.getConfigFromApp();
                t && this.updateConfigs(t), this.customProp.init(), this.initAppUpdateConfigBridge()
            }
        },
        initAppUpdateConfigBridge: function() {
            var t = this;
            return new s.SDKJSBridge("updateH5VisualConfig").onAppNotify(function(e) {
                if (e) {
                    try {
                        e = JSON.parse(ge(e))
                    } catch (r) {
                        return void D("updateH5VisualConfig result parse error\uFF01")
                    }
                    t.updateConfigs(e)
                }
            })
        },
        getConfigFromApp: function() {
            var t = new s.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp();
            if (t) try {
                t = JSON.parse(ge(t))
            } catch (e) {
                t = null, D("getAppVisualConfig result parse error\uFF01")
            }
            return t
        },
        updateConfigs: function(t) {
            this.events = this.filterConfigs(t), this.customProp.updateEvents(this.events)
        },
        filterConfigs: function(t) {
            return this.getAssignConfigs(function(e) {
                return !(!p(e) || e.h5 === !1)
            }, t)
        }
    },
    ir = {
        events: [],
        init: function(t) {
            this.filterWebClickEvents(t)
        },
        filterWebClickEvents: function(t) {
            this.events = Qt.getAssignConfigs(function(e) {
                return !(!p(e) || e.event.unlimited_div !== !0 || e.event_type !== "webclick")
            }, t)
        },
        isTargetEle: function(t) {
            var e = s.heatmap.getEleDetail(t);
            if (!p(e) || !b(e.$element_path)) return !1;
            for (var r = 0; r < this.events.length; r++)
                if (p(this.events[r]) && p(this.events[r].event) && Qt.configIsMatch(e, this.events[r].event)) return !0;
            return !1
        }
    },
    ri = {
        events: [],
        configSwitch: !1,
        collectAble: function() {
            return this.configSwitch && p(s.para.heatmap) && s.para.heatmap.get_vtrack_config
        },
        updateEvents: function(t) {
            this.events = Qt.getAssignConfigs(function(e) {
                return !!(p(e) && A(e.properties) && e.properties.length > 0)
            }, t), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1
        },
        getVtrackProps: function(t) {
            var e = {};
            return this.collectAble() ? (t.event === "$WebClick" && (e = this.clickCustomPropMaker(t, this.events)), e) : {}
        },
        clickCustomPropMaker: function(t, e, r) {
            var n = this;
            r = r || this.filterConfig(t, e, Qt.url_info.page_url);
            var i = {};
            return r.length ? (I(r, function(a) {
                A(a.properties) && a.properties.length > 0 && I(a.properties, function(l) {
                    var u = n.getProp(l, t);
                    p(u) && $(i, u)
                })
            }), i) : {}
        },
        getProp: X.getProp,
        getPropElInLi: X.getPropElInLi,
        filterConfig: X.filterConfig
    },
    Qt = {
        unlimitedDiv: ir,
        config: {},
        storageEnable: !0,
        storage_name: "webjssdkvtrackcollect",
        para: {
            session_time: 18e5,
            timeout: 5e3,
            update_interval: 18e5
        },
        url_info: {},
        timer: null,
        update_time: null,
        customProp: ri,
        initUrl: function() {
            var t = X.initUrl();
            if (t) {
                var e;
                try {
                    (e = new yr(s.para.server_url))._values.Path = "/config/visualized/Web.conf", t.api_url = e.getUrl()
                } catch (r) {
                    return D("----vtrackcollect---API\u5730\u5740\u89E3\u6790\u5F02\u5E38", r), !1
                }
                this.url_info = t
            }
            return t
        },
        init: function() {
            if (!p(s.para.heatmap) || !s.para.heatmap.get_vtrack_config) return !1;
            if (E.isSupport() || (this.storageEnable = !1), !this.initUrl()) return D("----vtrackcustom----\u521D\u59CB\u5316\u5931\u8D25\uFF0Curl\u4FE1\u606F\u89E3\u6790\u5931\u8D25"), !1;
            if (this.storageEnable) {
                var t = c.readObjectVal(this.storage_name);
                if (p(t) && p(t.data))
                    if (this.serverUrlIsSame(t.serverUrl)) {
                        this.config = t.data, this.update_time = t.updateTime, this.updateConfig(t.data);
                        var e = new Date().getTime() - this.update_time;
                        if ($t(e) && e > 0 && e < this.para.session_time) {
                            var r = this.para.update_interval - e;
                            this.setNextFetch(r)
                        } else this.getConfigFromServer()
                    } else this.getConfigFromServer();
                else this.getConfigFromServer()
            } else this.getConfigFromServer();
            this.pageStateListenner()
        },
        serverUrlIsSame: function(t) {
            return !!p(t) && t.host === this.url_info.server_url.host && t.project === this.url_info.server_url.project
        },
        getConfigFromServer: function() {
            var t = this;
            this.sendRequest(function(e, r) {
                t.update_time = new Date().getTime();
                var n = {};
                e === 200 ? r && p(r) && r.os === "Web" && (n = r, t.updateConfig(n)) : e === 205 ? t.updateConfig(n) : e === 304 ? n = t.config : (D("----vtrackcustom----\u6570\u636E\u5F02\u5E38", e), t.updateConfig(n)), t.updateStorage(n), t.setNextFetch()
            }, function(e) {
                t.update_time = new Date().getTime(), D("----vtrackcustom----\u914D\u7F6E\u62C9\u53D6\u5931\u8D25", e), t.setNextFetch()
            })
        },
        setNextFetch: function(t) {
            var e = this;
            this.timer && (clearTimeout(this.timer), this.timer = null), t = t || this.para.update_interval, this.timer = setTimeout(function() {
                e.getConfigFromServer()
            }, t)
        },
        pageStateListenner: function() {
            var t = this;
            xn({
                visible: function() {
                    var e = new Date().getTime() - t.update_time;
                    if ($t(e) && e > 0 && e < t.para.update_interval) {
                        var r = t.para.update_interval - e;
                        t.setNextFetch(r)
                    } else t.getConfigFromServer()
                },
                hidden: function() {
                    t.timer && (clearTimeout(t.timer), t.timer = null)
                }
            })
        },
        updateConfig: function(t) {
            if (!p(t)) return !1;
            this.config = t, this.customProp.updateEvents(t), this.unlimitedDiv.init(t)
        },
        updateStorage: function(t) {
            if (!this.storageEnable || !p(t)) return !1;
            var e;
            if (this.url_info.server_url) e = this.url_info.server_url;
            else {
                var r = Qt.initUrl();
                if (!r) return !1;
                e = r.server_url
            }
            var n = {
                updateTime: new Date().getTime(),
                data: t,
                serverUrl: e
            };
            c.saveObjectVal(this.storage_name, n)
        },
        sendRequest: function(t, e) {
            var r = {
                app_id: this.url_info.page_url.host
            };
            this.config.version && (r.v = this.config.version), Dn({
                url: this.url_info.api_url,
                callbackName: "saJSSDKVtrackCollectConfig",
                data: r,
                timeout: this.para.timeout,
                success: function(n, i) {
                    t(n, i)
                },
                error: function(n) {
                    e(n)
                }
            })
        },
        getAssignConfigs: X.getAssignConfigs,
        configIsMatch: X.configIsMatch
    };

function Xa(t, e) {
    try {
        var r = e.sensors,
            n = {};
        p(t) && p(t.identities) && !et(t.identities) ? $(n, t.identities) : $(n, c._state.identities);
        var i = {
            identities: n,
            distinct_id: c.getDistinctId(),
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(r.lib_version)
            },
            properties: {}
        };
        return p(t) && p(t.properties) && !et(t.properties) && (t.properties.$lib_detail && (i.lib.$lib_detail = t.properties.$lib_detail, delete t.properties.$lib_detail), t.properties.$lib_method && (i.lib.$lib_method = t.properties.$lib_method, delete t.properties.$lib_method)), kn(i, c.getUnionId(), t), p(t.properties) && !et(t.properties) && $(i.properties, t.properties), t.type && t.type.slice(0, 7) === "profile" || (i.properties = $({}, L.properties(), c.getProps(), c.getSessionProps(), L.currentProps, i.properties), r.para.preset_properties.latest_referrer && !b(i.properties.$latest_referrer) && (i.properties.$latest_referrer = "\u53D6\u503C\u5F02\u5E38"), r.para.preset_properties.latest_search_keyword && !b(i.properties.$latest_search_keyword) && (r.para.preset_properties.search_keyword_baidu && b(i.properties.$search_keyword_id) && $t(i.properties.$search_keyword_id_hash) && b(i.properties.$search_keyword_id_type) || (i.properties.$latest_search_keyword = "\u53D6\u503C\u5F02\u5E38")), r.para.preset_properties.latest_traffic_source_type && !b(i.properties.$latest_traffic_source_type) && (i.properties.$latest_traffic_source_type = "\u53D6\u503C\u5F02\u5E38"), r.para.preset_properties.latest_landing_page && !b(i.properties.$latest_landing_page) && (i.properties.$latest_landing_page = "\u53D6\u503C\u5F02\u5E38"), r.para.preset_properties.latest_wx_ad_click_id === "not_collect" ? (delete i.properties._latest_wx_ad_click_id, delete i.properties._latest_wx_ad_hash_key, delete i.properties._latest_wx_ad_callbacks) : r.para.preset_properties.latest_wx_ad_click_id && !b(i.properties._latest_wx_ad_click_id) && (i.properties._latest_wx_ad_click_id = "\u53D6\u503C\u5F02\u5E38", i.properties._latest_wx_ad_hash_key = "\u53D6\u503C\u5F02\u5E38", i.properties._latest_wx_ad_callbacks = "\u53D6\u503C\u5F02\u5E38"), b(i.properties._latest_wx_ad_click_id) && (i.properties.$url = it())), i.properties.$time && Ce(i.properties.$time) ? (i.time = 1 * i.properties.$time, delete i.properties.$time) : i.time = 1 * new Date,
            function(a) {
                if (r.bridge && r.bridge.bridge_info.verify_success === "success") {
                    var l = Ur.customProp.geth5Props(JSON.parse(JSON.stringify(a)));
                    p(l) && !et(l) && (a.properties = $(a.properties, l))
                }
                var u = Qt.customProp.getVtrackProps(JSON.parse(JSON.stringify(a)));
                p(u) && !et(u) && (a.properties = $(a.properties, u))
            }(i), Kn(i), Ae.checkIsAddSign(i), Ae.checkIsFirstTime(i), $a(i), Ea(i), i
    } catch (a) {
        return {
            _debug_web_msg: String(a)
        }
    }
}
var Ga = {
        basicProps: {
            priority: 0,
            entry: Xa
        },
        formatData: {
            priority: 0,
            entry: Va
        },
        finalAdjustData: {
            priority: 0,
            entry: Wa
        }
    },
    Rr = {
        stage: null,
        init: function(t) {
            this.stage = t
        },
        interceptor: Ga
    };

function Qa(t) {
    return Rr.stage.process("basicProps", t)
}

function Ya(t) {
    return Rr.stage.process("formatData", t)
}
var at = {};

function ni(t, e, r, n) {
    var i = null;
    if ((t = t || {}).ele && (i = t.ele), t.event && (i = t.target ? t.target : t.event.target), r = r || {}, !i || typeof i != "object") return !1;
    if (!i.href || /^javascript/.test(i.href) || i.target || i.download || i.onclick) return n(e, r), !1;

    function a(l) {
        l.stopPropagation(), l.preventDefault();
        var u = !1;

        function d() {
            u || (u = !0, location.href = i.href)
        }
        setTimeout(d, 1e3), n(e, r, d)
    }
    t.event && a(t.event), t.ele && se(t.ele, "click", function(l) {
        a(l)
    })
}

function ii() {
    var t = location.protocol;
    return t === "http:" || t === "https:" ? t : "http:"
}
at.check = H, at.sendItem = function(t) {
    var e = {
        lib: {
            $lib: "js",
            $lib_method: "code",
            $lib_version: String(s.lib_version)
        },
        time: 1 * new Date
    };
    $(e, t), Ya(e), s.kit.sendData(e)
}, at.send = function(t, e) {
    var r = s.kit.buildData(t);
    s.kit.sendData(r, e)
};
var Hr = {
    stage: null,
    init: function(t) {
        this.stage = t
    }
};

function Za(t) {
    return Hr.stage.process("webClickEvent", t)
}

function ts(t) {
    return Hr.stage.process("webStayEvent", t)
}
var Jr = {
        label: !1,
        li: !1,
        a: !0,
        button: !0
    },
    Ct = {
        otherTags: [],
        initUnlimitedTags: function() {
            I(Ct.otherTags, function(t) {
                t in Jr && (Jr[t] = !0)
            })
        },
        isUnlimitedTag: function(t) {
            if (!t || t.nodeType !== 1) return !1;
            var e = t.nodeName.toLowerCase();
            return Jr[e] || Or(t, s.para.heatmap.track_attr)
        },
        getTargetElement: function(t, e) {
            var r = this,
                n = t;
            if (typeof n != "object" || typeof n.tagName != "string") return null;
            var i = n.tagName.toLowerCase();
            if (i.toLowerCase() === "body" || i.toLowerCase() === "html" || !n || !n.parentNode || !n.parentNode.children) return null;
            var a = n.parentNode,
                l = r.otherTags;
            if (i === "a" || i === "button" || i === "input" || i === "textarea" || tt(l, i) > -1) return n;
            if (i === "area" && a.tagName.toLowerCase() === "map" && _t(a).prev().tagName && _t(a).prev().tagName.toLowerCase() === "img") return _t(a).prev();
            if (i === "div" && s.para.heatmap.collect_tags.div && r.isDivLevelValid(n) && ((s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1) > 1 || r.isCollectableDiv(n))) return n;
            if (r.isStyleTag(i) && s.para.heatmap.collect_tags.div) {
                var u = r.getCollectableParent(n);
                if (u && r.isDivLevelValid(u)) return u
            }
            return r.hasElement({
                event: e && e.originalEvent || e,
                element: t
            }, function(d) {
                return r.isUnlimitedTag(d)
            }) || null
        },
        getDivLevels: function(t, e) {
            var r = Ct.getElementPath(t, !0, e).split(" > "),
                n = 0;
            return I(r, function(i) {
                i === "div" && n++
            }), n
        },
        isDivLevelValid: function(t) {
            for (var e = s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level || 1, r = t.getElementsByTagName("div"), n = r.length - 1; n >= 0; n--)
                if (Ct.getDivLevels(r[n], t) > e) return !1;
            return !0
        },
        getElementPath: function(t, e, r) {
            for (var n = []; t.parentNode && gt(t);) {
                if (t.id && !e && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.id)) {
                    n.unshift(t.tagName.toLowerCase() + "#" + t.id);
                    break
                }
                if (r && t === r) {
                    n.unshift(t.tagName.toLowerCase());
                    break
                }
                if (t === document.body) {
                    n.unshift("body");
                    break
                }
                n.unshift(t.tagName.toLowerCase()), t = t.parentNode
            }
            return n.join(" > ")
        },
        getClosestLi: function(t) {
            return function(e, r) {
                for (; e && e !== document && e.nodeType === 1; e = e.parentNode)
                    if (e.tagName && P(e.tagName.toLowerCase) && e.tagName.toLowerCase() === r) return e;
                return null
            }(t, "li")
        },
        getElementPosition: function(t, e, r) {
            var n = s.heatmap.getClosestLi(t);
            if (!n || !gt(t)) return null;
            var i = t.tagName.toLowerCase(),
                a = n.getElementsByTagName(i),
                l = a.length,
                u = [];
            if (l > 1) {
                for (var d = 0; d < l; d++) s.heatmap.getElementPath(a[d], r) === e && u.push(a[d]);
                if (u.length > 1) return tt(u, t)
            }
            return function(_) {
                if (!_.parentNode) return "";
                if (_t(_).getSameTypeSiblings().length === 1) return 0;
                for (var y = 0, N = _; _t(N).previousElementSibling().ele; N = _t(N).previousElementSibling().ele, y++);
                return y
            }(n)
        },
        setNotice: function(t) {
            s.is_heatmap_render_mode = !0, s.para.heatmap || (s.errorMsg = "\u60A8SDK\u6CA1\u6709\u914D\u7F6E\u5F00\u542F\u70B9\u51FB\u56FE\uFF0C\u53EF\u80FD\u6CA1\u6709\u6570\u636E\uFF01"), t && t.slice(0, 5) === "http:" && location.protocol === "https:" && (s.errorMsg = "\u60A8\u7684\u5F53\u524D\u9875\u9762\u662Fhttps\u7684\u5730\u5740\uFF0C\u795E\u7B56\u5206\u6790\u73AF\u5883\u4E5F\u5FC5\u987B\u662Fhttps\uFF01"), s.para.heatmap_url || (s.para.heatmap_url = ii() + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/heatmap.min.js")
        },
        getDomIndex: function(t) {
            if (!t.parentNode) return -1;
            for (var e = 0, r = t.tagName, n = t.parentNode.children, i = 0; i < n.length; i++)
                if (n[i].tagName === r) {
                    if (t === n[i]) return e;
                    e++
                }
            return -1
        },
        selector: function(t, e) {
            var r = t.parentNode && t.parentNode.nodeType == 9 ? -1 : this.getDomIndex(t);
            return t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && (!s.para.heatmap || s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id") && !e ? "#" + t.getAttribute("id") : t.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
        },
        getDomSelector: function(t, e, r) {
            if (!t || !t.parentNode || !t.parentNode.children) return !1;
            e = e && e.join ? e : [];
            var n = t.nodeName.toLowerCase();
            return t && n !== "body" && t.nodeType == 1 ? (e.unshift(this.selector(t, r)), t.getAttribute && t.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(t.getAttribute("id")) && s.para.heatmap && s.para.heatmap.element_selector !== "not_use_id" && !r ? e.join(" > ") : this.getDomSelector(t.parentNode, e, r)) : (e.unshift("body"), e.join(" > "))
        },
        na: function() {
            var t = document.documentElement.scrollLeft || window.pageXOffset;
            return parseInt(isNaN(t) ? 0 : t, 10)
        },
        i: function() {
            var t = 0;
            try {
                t = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, t = isNaN(t) ? 0 : t
            } catch (e) {
                t = 0
            }
            return parseInt(t, 10)
        },
        getBrowserWidth: function() {
            var t = window.innerWidth || document.body.clientWidth;
            return isNaN(t) ? 0 : parseInt(t, 10)
        },
        getBrowserHeight: function() {
            var t = window.innerHeight || document.body.clientHeight;
            return isNaN(t) ? 0 : parseInt(t, 10)
        },
        getScrollWidth: function() {
            var t = parseInt(document.body.scrollWidth, 10);
            return isNaN(t) ? 0 : t
        },
        getEleDetail: function(t) {
            var e = this.getDomSelector(t),
                r = Wn({
                    target: t
                });
            r.$element_selector = e || "", r.$element_path = s.heatmap.getElementPath(t, s.para.heatmap && s.para.heatmap.element_selector === "not_use_id");
            var n = s.heatmap.getElementPosition(t, r.$element_path, s.para.heatmap && s.para.heatmap.element_selector === "not_use_id");
            return $t(n) && (r.$element_position = n), r
        },
        getPointerEventProp: function(t, e) {
            if (!t) return {};

            function r() {
                return {
                    scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft || 0,
                    scrollTop: document.body.scrollTop || document.documentElement.scrollTop || 0
                }
            }

            function n(a) {
                if (document.documentElement.getBoundingClientRect) {
                    var l = a.getBoundingClientRect();
                    return {
                        targetEleX: l.left + r().scrollLeft || 0,
                        targetEleY: l.top + r().scrollTop || 0
                    }
                }
            }

            function i(a) {
                return Number(Number(a).toFixed(3))
            }
            return function(a) {
                var l = a.pageX || a.clientX + r().scrollLeft || a.offsetX + n(e).targetEleX || 0,
                    u = a.pageY || a.clientY + r().scrollTop || a.offsetY + n(e).targetEleY || 0;
                return {
                    $page_x: i(l),
                    $page_y: i(u)
                }
            }(t)
        },
        start: function(t, e, r, n, i) {
            if (p(s.para.heatmap) && P(s.para.heatmap.collect_element) && !s.para.heatmap.collect_element(e)) return !1;
            Za(Ct.getBasicEleInfo(t, e, r, n, i))
        },
        getBasicEleInfo: function(t, e, r, n, i) {
            var a = p(n) ? n : {},
                l = P(i) ? i : P(n) ? n : void 0,
                u = this.getEleDetail(e);
            if (s.para.heatmap && s.para.heatmap.custom_property) {
                var d = s.para.heatmap.custom_property(e);
                p(d) && (u = $(u, d))
            }
            return {
                event: t,
                target: e,
                props: u = $(u, this.getPointerEventProp(t, e), a),
                tagName: r,
                callback: l
            }
        },
        hasElement: function(t, e) {
            var r;
            if (t.event) {
                var n = t.event;
                r = n.path || n._getPath && n._getPath()
            } else t.element && (r = _t(t.element).getParents());
            if (r && A(r) && r.length > 0) {
                for (var i = 0; i < r.length; i++)
                    if (typeof r[i] == "object" && r[i].nodeType === 1 && e(r[i])) return r[i]
            }
        },
        isStyleTag: function(t, e) {
            return !(tt(["a", "div", "input", "button", "textarea"], t) > -1) && (!e || s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div ? !!(p(s.para.heatmap) && p(s.para.heatmap.collect_tags) && p(s.para.heatmap.collect_tags.div) && A(s.para.heatmap.collect_tags.div.ignore_tags) && tt(s.para.heatmap.collect_tags.div.ignore_tags, t) > -1) : tt(["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"], t) > -1)
        },
        isCollectableDiv: function(t, e) {
            try {
                if (t.children.length === 0) return !0;
                for (var r = 0; r < t.children.length; r++)
                    if (t.children[r].nodeType === 1) {
                        var n = t.children[r].tagName.toLowerCase(),
                            i = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
                        if (!(n === "div" && i > 1 || this.isStyleTag(n, e)) || !this.isCollectableDiv(t.children[r], e)) return !1
                    }
                return !0
            } catch (a) {
                D("isCollectableDiv:" + a)
            }
            return !1
        },
        getCollectableParent: function(t, e) {
            try {
                var r = t.parentNode,
                    n = r ? r.tagName.toLowerCase() : "";
                if (n === "body") return !1;
                var i = s.para && s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && s.para.heatmap.collect_tags.div.max_level;
                if (n && n === "div" && (i > 1 || this.isCollectableDiv(r, e))) return r;
                if (r && this.isStyleTag(n, e)) return this.getCollectableParent(r, e)
            } catch (a) {
                D("getCollectableParent:" + a)
            }
            return !1
        },
        listenUrlChange: function(t) {
            t(), s.ee.spa.on("switch", function() {
                t()
            })
        },
        initScrollmap: function() {
            if (!p(s.para.heatmap) || s.para.heatmap.scroll_notice_map !== "default") return !1;
            var t = !0;
            s.para.scrollmap && P(s.para.scrollmap.collect_url) && this.listenUrlChange(function() {
                t = !!s.para.scrollmap.collect_url()
            });
            var e = function(r) {
                var n = {};
                return n.timeout = r.timeout || 1e3, n.func = r.func, n.hasInit = !1, n.inter = null, n.main = function(i, a) {
                    this.func(i, a), this.inter = null
                }, n.go = function(i) {
                    var a = {};
                    this.inter || (a.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, a.$viewport_position = Math.round(a.$viewport_position) || 0, i ? n.main(a, !0) : this.inter = setTimeout(function() {
                        n.main(a)
                    }, this.timeout))
                }, n
            }({
                timeout: 1e3,
                func: function(r, n) {
                    var i = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                        a = new Date,
                        l = a - this.current_time;
                    (l > s.para.heatmap.scroll_delay_time && i - r.$viewport_position != 0 || n) && (r.$url = it(), r.$title = document.title, r.$url_path = ie(), r.event_duration = Math.min(s.para.heatmap.scroll_event_duration, parseInt(l) / 1e3), r.event_duration = r.event_duration < 0 ? 0 : r.event_duration, ts(r)), this.current_time = a
                }
            });
            e.current_time = new Date, se(window, "scroll", function() {
                if (!t) return !1;
                e.go()
            }), se(window, "unload", function() {
                if (!t) return !1;
                e.go("notime")
            })
        },
        initHeatmap: function() {
            var t = this,
                e = !0;
            if (!p(s.para.heatmap) || s.para.heatmap.clickmap !== "default") return !1;
            P(s.para.heatmap.collect_url) && this.listenUrlChange(function() {
                e = !!s.para.heatmap.collect_url()
            }), s.para.heatmap.collect_elements === "all" ? s.para.heatmap.collect_elements = "all" : s.para.heatmap.collect_elements = "interact", s.para.heatmap.collect_elements === "all" ? se(document, "click", function(r) {
                if (!e) return !1;
                var n = r || window.event;
                if (!n) return !1;
                var i = n.target || n.srcElement;
                if (typeof i != "object" || typeof i.tagName != "string") return !1;
                var a = i.tagName.toLowerCase();
                if (a === "body" || a === "html" || !i || !i.parentNode || !i.parentNode.children) return !1;
                var l = i.parentNode.tagName.toLowerCase();
                l === "a" || l === "button" ? t.start(n, i.parentNode, l) : t.start(n, i, a)
            }) : se(document, "click", function(r) {
                if (!e) return !1;
                var n = r || window.event;
                if (!n) return !1;
                var i = n.target || n.srcElement,
                    a = s.heatmap.getTargetElement(i, r);
                a ? t.start(n, a, a.tagName.toLowerCase()) : gt(i) && i.tagName.toLowerCase() === "div" && p(s.para.heatmap) && s.para.heatmap.get_vtrack_config && ir.events.length > 0 && ir.isTargetEle(i) && t.start(n, i, i.tagName.toLowerCase(), {
                    $lib_method: "vtrack"
                })
            })
        }
    };

function Br() {
    var t = L.campaignParams(),
        e = {};
    return I(t, function(r, n, i) {
        (" " + s.source_channel_standard + " ").indexOf(" " + n + " ") !== -1 ? e["$" + n] = i[n] : e[n] = i[n]
    }), e
}

function ai(t, e, r) {
    if (s.is_first_visitor && r) {
        var n = {};
        s.para.preset_properties.search_keyword_baidu && Ze(document.referrer) && Te() && (n.$search_keyword_id = je.id(), n.$search_keyword_id_type = je.type(), n.$search_keyword_id_hash = Nr(n.$search_keyword_id));
        var i = Xt(null, e);
        t($({
            $first_visit_time: new Date,
            $first_referrer: i,
            $first_referrer_host: i ? xt(i, "\u53D6\u503C\u5F02\u5E38") : "",
            $first_browser_language: b(navigator.language) ? navigator.language.toLowerCase() : "\u53D6\u503C\u5F02\u5E38",
            $first_browser_charset: b(document.charset) ? document.charset.toUpperCase() : "\u53D6\u503C\u5F02\u5E38",
            $first_traffic_source_type: Ar(),
            $first_search_keyword: Ie()
        }, Br(), n)), s.is_first_visitor = !1
    }
}
var ar = {
    autoTrackIsUsed: !1,
    isReady: function(t) {
        P(t) ? t() : s.log("error: isReady callback must be function")
    },
    getUtm: function() {
        return L.campaignParams()
    },
    getStayTime: function() {
        return (new Date - s._t) / 1e3
    },
    setProfileLocal: function(t) {
        if (!E.isSupport()) return s.setProfile(t), !1;
        if (!p(t) || et(t)) return !1;
        var e = c.readObjectVal("sensorsdata_2015_jssdk_profile"),
            r = !1;
        if (p(e) && !et(e)) {
            for (var n in t) !(n in e && e[n] !== t[n]) && n in e || (e[n] = t[n], r = !0);
            r && (c.saveObjectVal("sensorsdata_2015_jssdk_profile", e), s.setProfile(t))
        } else c.saveObjectVal("sensorsdata_2015_jssdk_profile", t), s.setProfile(t)
    },
    setInitReferrer: function() {
        var t = Xt();
        s.setOnceProfile({
            _init_referrer: t,
            _init_referrer_host: L.pageProp.referrer_host
        })
    },
    setSessionReferrer: function() {
        var t = Xt();
        c.setSessionPropsOnce({
            _session_referrer: t,
            _session_referrer_host: L.pageProp.referrer_host
        })
    },
    setDefaultAttr: function() {
        L.register({
            _current_url: location.href,
            _referrer: Xt(),
            _referring_host: L.pageProp.referrer_host
        })
    },
    trackHeatMap: function(t, e, r) {
        if (typeof t == "object" && t.tagName && gt(t.parentNode)) {
            var n = t.tagName.toLowerCase(),
                i = t.parentNode.tagName.toLowerCase(),
                a = s.para.heatmap && s.para.heatmap.track_attr ? s.para.heatmap.track_attr : ["data-sensors-click"];
            n === "button" || n === "a" || i === "a" || i === "button" || n === "input" || n === "textarea" || Or(t, a) || Ct.start(null, t, n, e, r)
        }
    },
    trackAllHeatMap: function(t, e, r) {
        if (typeof t == "object" && t.tagName) {
            var n = t.tagName.toLowerCase();
            Ct.start(null, t, n, e, r)
        }
    },
    autoTrackSinglePage: function(t, e) {
        var r;
        r = this.autoTrackIsUsed ? L.pageProp.url : L.pageProp.referrer;
        var n = !(t = p(t) ? t : {}).not_set_profile;

        function i(a, l) {
            s.track("$pageview", $({
                $referrer: r,
                $url: it(),
                $url_path: ie(),
                $title: document.title
            }, a, Br()), l), r = it()
        }
        t.not_set_profile && delete t.not_set_profile, i(t, e), this.autoTrackSinglePage = i, ai(s.setOnceProfile, !1, n)
    },
    autoTrackWithoutProfile: function(t, e) {
        t = p(t) ? t : {}, this.autoTrack($(t, {
            not_set_profile: !0
        }), e)
    },
    autoTrack: function(t, e) {
        t = p(t) ? t : {};
        var r = Br(),
            n = !t.not_set_profile;
        t.not_set_profile && delete t.not_set_profile;
        var i = location.href;
        s.para.is_single_page && mn(function() {
            var a = Xt(i, !0);
            s.track("$pageview", $({
                $referrer: a,
                $url: it(),
                $url_path: ie(),
                $title: document.title
            }, r, t), e), i = it()
        }), s.track("$pageview", $({
            $referrer: Xt(null, !0),
            $url: it(),
            $url_path: ie(),
            $title: document.title
        }, r, t), e), ai(s.setOnceProfile, !0, n), this.autoTrackIsUsed = !0
    },
    getAnonymousID: function() {
        return et(c._state) ? "SDK is not initialized." : c._state._first_id || c._state.first_id || c._state._distinct_id || c._state.distinct_id
    },
    setPlugin: function(t) {
        if (!p(t)) return !1;
        I(t, function(e, r) {
            P(e) && (p(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r] || p(s.modules) && s.modules[r] ? e(window.SensorsDataWebJSSDKPlugin[r]) : T(r + "is not found,please check sensorsdata documents."))
        })
    },
    useModulePlugin: function() {
        s.use.apply(s, arguments)
    },
    useAppPlugin: function() {
        this.setPlugin.apply(this, arguments)
    }
};

function si(t, e) {
    var r = t.id,
        n = t.callback,
        i = t.name,
        a = c.getFirstId(),
        l = c.getOriginDistinctId();
    if (!H({
            distinct_id: r
        })) return D("login id is invalid"), !1;
    if (r === c.getOriginDistinctId() && !a) return D("login id is equal to distinct_id"), !1;
    if (p(c._state.identities) && c._state.identities.hasOwnProperty(i) && r === c._state.first_id) return !1;
    if (c._state.history_login_id.name !== i || r !== c._state.history_login_id.value) {
        c._state.identities[i] = r, c.set("history_login_id", {
            name: i,
            value: r
        }), a || c.set("first_id", l), e(r, "$SignUp", {}, n);
        var u = {
            $identity_cookie_id: c._state.identities.$identity_cookie_id
        };
        return u[i] = r, oi(u), !0
    }
    return !1
}

function oi(t) {
    var e = {};
    for (var r in t) e[r] = t[r];
    c._state.identities = e, c.save()
}

function es(t, e) {
    if (!H({
            unbindKey: t,
            bindValue: e
        })) return !1;
    if (p(c._state.identities) && c._state.identities.hasOwnProperty(t) && c._state.identities[t] === e) {
        var r = c.getUnionId().login_id;
        r && t + "+" + e === r && (c._state.distinct_id = c._state.first_id, c._state.first_id = "", c.set("history_login_id", {
            name: "",
            value: ""
        })), t !== "$identity_cookie_id" && (delete c._state.identities[t], c.save())
    }
    var n = {};
    return n[t] = e, n
}

function rs() {
    s._t = s._t || 1 * new Date, s.is_first_visitor = !1, s.source_channel_standard = Un
}

function ns(t) {
    $(v, t || s.para || {}), s.para = v;
    var e, r = {};
    if (p(s.para.is_track_latest))
        for (var n in s.para.is_track_latest) r["latest_" + n] = s.para.is_track_latest[n];
    for (e in s.para.preset_properties = $({}, Qe.preset_properties, r, s.para.preset_properties || {}), Qe) s.para[e] === void 0 && (s.para[e] = Qe[e]);
    typeof s.para.web_url != "string" || s.para.web_url.slice(0, 3) !== "://" && s.para.web_url.slice(0, 2) !== "//" || (s.para.web_url.slice(0, 3) === "://" ? s.para.web_url = location.protocol.slice(0, -1) + s.para.web_url : s.para.web_url = location.protocol + s.para.web_url), Gt.protocol.serverUrl(), s.bridge && s.bridge.initPara();
    var i = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
        a = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
        l = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
        u = {
            baidu: ["wd", "word", "kw", "keyword"],
            google: "q",
            bing: "q",
            yahoo: "p",
            sogou: ["query", "keyword"],
            so: "q",
            sm: "q"
        };
    typeof s.para.source_type == "object" && (s.para.source_type.utm = A(s.para.source_type.utm) ? s.para.source_type.utm.concat(i) : i, s.para.source_type.search = A(s.para.source_type.search) ? s.para.source_type.search.concat(a) : a, s.para.source_type.social = A(s.para.source_type.social) ? s.para.source_type.social.concat(l) : l, s.para.source_type.keyword = p(s.para.source_type.keyword) ? $(u, s.para.source_type.keyword) : u);
    var d = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
    if (s.para.heatmap && !p(s.para.heatmap) && (s.para.heatmap = {}), p(s.para.heatmap)) {
        s.para.heatmap.clickmap = s.para.heatmap.clickmap || "default", s.para.heatmap.scroll_notice_map = s.para.heatmap.scroll_notice_map || "default", s.para.heatmap.scroll_delay_time = s.para.heatmap.scroll_delay_time || 4e3, s.para.heatmap.scroll_event_duration = s.para.heatmap.scroll_event_duration || 18e3, s.para.heatmap.renderRefreshTime = s.para.heatmap.renderRefreshTime || 1e3, s.para.heatmap.loadTimeout = s.para.heatmap.loadTimeout || 1e3, s.para.heatmap.get_vtrack_config !== !0 && (s.para.heatmap.get_vtrack_config = !1);
        var _ = A(s.para.heatmap.track_attr) ? Pn(s.para.heatmap.track_attr, function(y) {
            return y && typeof y == "string"
        }) : [];
        _.push("data-sensors-click"), s.para.heatmap.track_attr = _, p(s.para.heatmap.collect_tags) ? s.para.heatmap.collect_tags.div === !0 ? s.para.heatmap.collect_tags.div = {
            ignore_tags: d,
            max_level: 1
        } : p(s.para.heatmap.collect_tags.div) ? (s.para.heatmap.collect_tags.div.ignore_tags ? A(s.para.heatmap.collect_tags.div.ignore_tags) || (T("ignore_tags \u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4\u683C\u5F0F"), s.para.heatmap.collect_tags.div.ignore_tags = d) : s.para.heatmap.collect_tags.div.ignore_tags = d, s.para.heatmap.collect_tags.div.max_level && tt([1, 2, 3], s.para.heatmap.collect_tags.div.max_level) === -1 && (s.para.heatmap.collect_tags.div.max_level = 1)) : s.para.heatmap.collect_tags.div = !1 : s.para.heatmap.collect_tags = {
            div: !1
        }
    }
    s.para.server_url = zn(s.para.server_url), s.para.noCache === !0 ? s.para.noCache = "?" + new Date().getTime() : s.para.noCache = "", s.para.callback_timeout > s.para.datasend_timeout && (s.para.datasend_timeout = s.para.callback_timeout), s.para.heatmap && s.para.heatmap.collect_tags && p(s.para.heatmap.collect_tags) && I(s.para.heatmap.collect_tags, function(y, N) {
        N !== "div" && y && s.heatmap.otherTags.push(N)
    }), s.para.heatmap && s.para.heatmap.clickmap === "default" && s.heatmap.initUnlimitedTags()
}
var is = {
    state: 0,
    historyState: [],
    stateType: {
        1: "1-init\u672A\u5F00\u59CB",
        2: "2-init\u5F00\u59CB",
        3: "3-store\u5B8C\u6210"
    },
    getState: function() {
        return this.historyState.join(`
`)
    },
    setState: function(t) {
        String(t) in this.stateType && (this.state = t), this.historyState.push(this.stateType[t])
    }
};

function as() {
    var t = Array.prototype.slice.call(arguments),
        e = t[0],
        r = t.slice(1);
    if (typeof e == "string" && ar[e]) return ar[e].apply(ar, r);
    typeof e == "function" ? e.apply(s, r) : T("quick\u65B9\u6CD5\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD" + t[0])
}
var ss = 1;

function li(t, e) {
    if (b(t) || p(t)) {
        var r;
        if (p(t)) {
            var n = s.modules && s.modules[t.plugin_name];
            n && n !== t && T(t.name + " is conflict with builtin plugin, and sdk uses builtin plugin."), r = n || t
        }
        return b(t) && (p(s.modules) && p(s.modules[t]) ? r = s.modules[t] : p(window.SensorsDataWebJSSDKPlugin) && p(window.SensorsDataWebJSSDKPlugin[t]) ? r = window.SensorsDataWebJSSDKPlugin[t] : window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.modules[t] && (r = window.sensorsDataAnalytic201505.modules[t])), r && P(r.init) ? (r.plugin_is_init || (r.plugin_name || T("warning: invalid plugin, plugin_name required."), r.plugin_version ? r.plugin_version !== s.lib_version && T("warning: plugin version not match SDK version. plugin may not work correctly. ") : T("warning: invalid plugin, plugin version required."), !r.plugin_is_init && r.init(s, e), r.plugin_is_init = !0, s.modules = s.modules || {}, s.modules[r.plugin_name || "unnamed_" + ss++] = r), r) : (T((t.plugin_name || t) + " is not found or it's not a standard plugin. Please check sensorsdata official documents."), r)
    }
    D("use's first arguments must be string or object.")
}

function os(t, e, r) {
    H({
        event: t,
        properties: e
    }) && at.send({
        type: "track",
        event: t,
        properties: e
    }, r)
}

function ls(t, e) {
    if (!H({
            bindKey: t,
            bindValue: e
        })) return !1;
    c._state.identities[t] = e, c.save(), at.send({
        type: "track_id_bind",
        event: "$BindID",
        properties: {}
    })
}

function us(t, e) {
    var r = es(t, e);
    r && at.send({
        identities: r,
        type: "track_id_unbind",
        event: "$UnbindID",
        properties: {}
    })
}

function cs(t, e, r) {
    typeof t == "object" && t.tagName ? ni({
        ele: t
    }, e, r, s.track) : typeof t == "object" && t.target && t.event && ni(t, e, r, s.track)
}

function ps(t, e, r) {
    return r = r || {}, !(!t || typeof t != "object") && !(!t.href || /^javascript/.test(t.href) || t.target) && void se(t, "click", function(n) {
        n.preventDefault();
        var i = !1;

        function a() {
            i || (i = !0, location.href = t.href)
        }
        setTimeout(a, 1e3), s.track(e, r, a)
    })
}

function ds(t, e, r) {
    H({
        item_type: t,
        item_id: e,
        properties: r
    }) && at.sendItem({
        type: "item_set",
        item_type: t,
        item_id: e,
        properties: r || {}
    })
}

function fs(t, e) {
    H({
        item_type: t,
        item_id: e
    }) && at.sendItem({
        type: "item_delete",
        item_type: t,
        item_id: e
    })
}

function gs(t, e) {
    H({
        propertiesMust: t
    }) && at.send({
        type: "profile_set",
        properties: t
    }, e)
}

function _s(t, e) {
    H({
        propertiesMust: t
    }) && at.send({
        type: "profile_set_once",
        properties: t
    }, e)
}

function hs(t, e) {
    H({
        propertiesMust: t
    }) && (I(t, function(r, n) {
        b(r) ? t[n] = [r] : A(r) ? t[n] = r : (delete t[n], T("appendProfile\u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4"))
    }), et(t) || at.send({
        type: "profile_append",
        properties: t
    }, e))
}

function ms(t, e) {
    var r = t;
    b(t) && ((t = {})[r] = 1), H({
        propertiesMust: t
    }) && (function(n) {
        for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i) && !/-*\d+/.test(String(n[i]))) return !1;
        return !0
    }(t) ? at.send({
        type: "profile_increment",
        properties: t
    }, e) : D("profile_increment\u7684\u503C\u53EA\u80FD\u662F\u6570\u5B57"))
}

function vs(t) {
    at.send({
        type: "profile_delete"
    }, t), c.set("distinct_id", zt()), c.set("first_id", "")
}

function ys(t, e) {
    var r = t,
        n = {};
    b(t) && (t = []).push(r), A(t) ? (I(t, function(i) {
        b(i) ? n[i] = !0 : T("profile_unset\u7ED9\u7684\u6570\u7EC4\u91CC\u9762\u7684\u503C\u5FC5\u987B\u65F6string,\u5DF2\u7ECF\u8FC7\u6EE4\u6389", i)
    }), at.send({
        type: "profile_unset",
        properties: n
    }, e)) : D("profile_unset\u7684\u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4")
}

function bs(t, e) {
    typeof t == "number" && (t = String(t));
    var r = c.getFirstId();
    if (t === void 0) {
        var n = zt();
        r ? c.set("first_id", n) : c.set("distinct_id", n)
    } else H({
        distinct_id: t
    }) && (e === !0 ? r ? c.set("first_id", t) : c.set("distinct_id", t) : r ? c.change("first_id", t) : c.change("distinct_id", t))
}

function ws(t) {
    if (c.getFirstId()) return D("resetAnonymousIdentity must be used in a logout state \uFF01"), !1;
    if (typeof t == "number" && (t = String(t)), t === void 0) {
        var e = zt();
        c._state.identities.$identity_cookie_id = e, c.set("distinct_id", e)
    } else H({
        distinct_id: t
    }) && (c._state.identities.$identity_cookie_id = t, c.set("distinct_id", t))
}

function qr(t, e, r, n) {
    var i = c.getFirstId() || c.getDistinctId();
    c.set("distinct_id", t), at.send({
        original_id: i,
        distinct_id: c.getDistinctId(),
        type: "track_signup",
        event: e,
        properties: r
    }, n)
}

function Ss(t, e, r, n) {
    typeof t == "number" && (t = String(t)), H({
        distinct_id: t,
        event: e,
        properties: r
    }) && qr(t, e, r, n)
}

function ks(t) {
    H({
        properties: t
    }) ? $(L.currentProps, t) : D("register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
}

function Ps(t) {
    c.clearAllProps(t)
}

function Cs(t) {
    var e;
    if (A(t) && t.length > 0)
        for (e = 0; e < t.length; e++) b(t[e]) && t[e] in L.currentProps && delete L.currentProps[t[e]];
    else if (t === !0)
        for (e in L.currentProps) delete L.currentProps[e]
}

function ui(t) {
    H({
        properties: t
    }) ? c.setProps(t) : D("register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
}

function Os(t) {
    H({
        properties: t
    }) ? c.setPropsOnce(t) : D("registerOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
}

function Ns(t) {
    s.log("registerSession \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u6709\u95EE\u9898\u8054\u7CFB\u6280\u672F\u987E\u95EE"), H({
        properties: t
    }) ? c.setSessionProps(t) : D("registerSession\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
}

function Ts(t) {
    s.log("registerSessionOnce \u65B9\u6CD5\u5DF2\u7ECF\u5F03\u7528\uFF0C\u6709\u95EE\u9898\u8054\u7CFB\u6280\u672F\u987E\u95EE"), H({
        properties: t
    }) ? c.setSessionPropsOnce(t) : D("registerSessionOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
}

function ci(t, e) {
    typeof t == "number" && (t = String(t)), !si({
        id: t,
        callback: e,
        name: Ne.LOGIN
    }, qr) && P(e) && e()
}

function js(t, e) {
    return typeof e == "number" && (e = String(e)), typeof t == "number" && (t = String(t)), !!H({
        loginIdKey: t
    }) && (Ne.LOGIN === t ? (ci(e), !1) : void si({
        id: e,
        callback: null,
        name: t
    }, qr))
}

function Is(t) {
    var e = c.getFirstId();
    if (e)
        if (c.set("first_id", ""), t === !0) {
            var r = zt();
            c.set("distinct_id", r)
        } else c.set("distinct_id", e);
    oi({
        $identity_cookie_id: c._state.identities.$identity_cookie_id
    }), c.set("history_login_id", {
        name: "",
        value: ""
    })
}

function As() {
    var t, e, r = {
            $is_first_day: tr(),
            $is_first_time: Ae.is_page_first_visited,
            $referrer: L.pageProp.referrer || "",
            $referrer_host: L.pageProp.referrer ? xt(L.pageProp.referrer) : "",
            $url: it(),
            $url_path: ie(),
            $title: document.title || "",
            _distinct_id: c.getDistinctId(),
            identities: JSON.parse(JSON.stringify(c._state.identities))
        },
        n = $({}, L.properties(), c.getProps(), (t = L.campaignParams(), e = {}, I(t, function(i, a, l) {
            (" " + s.source_channel_standard + " ").indexOf(" " + a + " ") !== -1 ? e["$" + a] = l[a] : e[a] = l[a]
        }), e), r);
    return s.para.preset_properties.latest_referrer && s.para.preset_properties.latest_referrer_host && (n.$latest_referrer_host = n.$latest_referrer === "" ? "" : xt(n.$latest_referrer)), n
}
var Ds = {
    __proto__: null,
    setInitVar: rs,
    initPara: ns,
    quick: as,
    use: li,
    track: os,
    bind: ls,
    unbind: us,
    trackLink: cs,
    trackLinks: ps,
    setItem: ds,
    deleteItem: fs,
    setProfile: gs,
    setOnceProfile: _s,
    appendProfile: hs,
    incrementProfile: ms,
    deleteProfile: vs,
    unsetProfile: ys,
    identify: bs,
    resetAnonymousIdentity: ws,
    trackSignup: Ss,
    registerPage: ks,
    clearAllRegister: Ps,
    clearPageRegister: Cs,
    register: ui,
    registerOnce: Os,
    registerSession: Ns,
    registerSessionOnce: Ts,
    login: ci,
    loginWithKey: js,
    logout: Is,
    getPresetProperties: As,
    readyState: is,
    debug: Gt,
    on: Gn,
    log: Et
};
Q.setup(Et);
var pi = $({}, xa, Ra);

function xs() {
    var t = "",
        e = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
    s.heatmap && A(s.heatmap.otherTags) && I(s.heatmap.otherTags, function(r) {
        t += r + e
    }), An() && kr() && kr() < 13 && (s.para.heatmap && s.para.heatmap.collect_tags && s.para.heatmap.collect_tags.div && ze("div, [data-sensors-click]" + e), s.para.heatmap && s.para.heatmap.track_attr && ze("[" + s.para.heatmap.track_attr.join("], [") + "]" + e), t !== "" && ze(t))
}
var $s = {
    bridge_info: {
        touch_app_bridge: !1,
        verify_success: !1,
        platform: "",
        support_two_way_call: !1
    },
    is_verify_success: !1,
    initPara: function() {
        var t = {
            is_send: s.para.use_app_track_is_send !== !1 && s.para.use_app_track !== "only",
            white_list: [],
            is_mui: s.para.use_app_track === "mui"
        };
        typeof s.para.app_js_bridge == "object" ? s.para.app_js_bridge = $({}, t, s.para.app_js_bridge) : s.para.use_app_track !== !0 && s.para.app_js_bridge !== !0 && s.para.use_app_track !== "only" && s.para.use_app_track !== "mui" || (s.para.app_js_bridge = $({}, t)), s.para.app_js_bridge.is_send === !1 && T("\u8BBE\u7F6E\u4E86 is_send:false,\u5982\u679C\u6253\u901A\u5931\u8D25\uFF0C\u6570\u636E\u5C06\u88AB\u4E22\u5F03!")
    },
    app_js_bridge_v1: function() {
        var t = null,
            e = null;
        window.sensorsdata_app_js_bridge_call_js = function(r) {
            (function(n) {
                Oe(t = n) && (t = JSON.parse(t)), e && (e(t), e = null, t = null)
            })(r)
        }, s.getAppStatus = function(r) {
            if (function() {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var n = document.createElement("iframe");
                        n.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(n), n.parentNode.removeChild(n), n = null
                    }
                }(), typeof window.SensorsData_APP_JS_Bridge == "object" && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && Oe(t = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app()) && (t = JSON.parse(t)), !r) return t;
            t === null ? e = r : (r(t), t = null)
        }
    },
    hasVisualModeBridge: function() {
        var t = window.SensorsData_App_Visual_Bridge,
            e = "sensorsdata_visualized_mode";
        return p(t) && t[e] && (t[e] === !0 || t[e]())
    },
    validateAppUrl: Es
};

function De(t) {
    var e = this;
    this.type = t, this.resultCbs = {}, this.timeoutCbs = {}, this.timerId = null, this.appCallJsCallback = null, window.sensorsdata_app_call_js || (window.sensorsdata_app_call_js = function(r, n) {
        if (r in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[r](n)
    }), window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}, window.sensorsdata_app_call_js.modules[this.type] = function(r) {
        try {
            var n = ge(r) || r;
            try {
                n = JSON.parse(n)
            } catch (l) {}
            var i = n && n.message_id;
            if (i && e.resultCbs[i]) {
                if (r = n, e.timeoutCbs[i] && e.timeoutCbs[i].isTimeout) return void(e.resultCbs[i].callbacks.length = 0);
                if (e.resultCbs[i])
                    for (var a in e.resultCbs[i].result = r, clearTimeout(e.timerId), e.timeoutCbs[i].callbacks.length = 0, e.resultCbs[i].callbacks) e.resultCbs[i].callbacks[a].call(null, r), e.resultCbs[i].callbacks.splice(a, 1);
                return
            }
            return e.appCallJsCallback && e.appCallJsCallback.call(null, r)
        } catch (l) {
            D("app \u56DE\u8C03 js \u5F02\u5E38", r)
        }
    }
}

function di(t) {
    try {
        if (s.bridge.activeBridge && P(s.bridge.activeBridge.handleCommand)) return s.bridge.activeBridge.handleCommand(t)
    } catch (e) {
        D("Error: handle command exception:" + e)
    }
    return D("\u6570\u636E\u53D1\u5F80App\u5931\u8D25\uFF0CApp\u6CA1\u6709\u66B4\u9732bridge,type:" + t.callType), !1
}

function Es(t) {
    function e(l) {
        var u = {
            hostname: "",
            project: ""
        };
        try {
            l = Ot(l), u.hostname = l.hostname, u.project = l.searchParams.get("project") || "default"
        } catch (d) {
            D("validateAppUrl:" + d)
        }
        return u
    }
    var r = e(t),
        n = e(s.para.server_url);
    if (r.hostname === n.hostname && r.project === n.project) return !0;
    if (A(s.para.app_js_bridge.white_list))
        for (var i = 0; i < s.para.app_js_bridge.white_list.length; i++) {
            var a = e(s.para.app_js_bridge.white_list[i]);
            if (a.hostname === r.hostname && a.project === r.project) return !0
        }
    return !1
}

function fi(t) {
    this.bridge = new De(t.type)
}

function Ls() {
    var t = L.pageProp.url_domain,
        e = {};
    t === "" && (t = "url\u89E3\u6790\u5931\u8D25");
    var r = Ie(document.referrer, !0);
    if (v.preset_properties.search_keyword_baidu ? Ze(document.referrer) && (!Te() || p(r) && r.active ? c._state && c._state.props && (c._state.props.$search_keyword_id && delete c._state.props.$search_keyword_id, c._state.props.$search_keyword_id_type && delete c._state.props.$search_keyword_id_type, c._state.props.$search_keyword_id_hash && delete c._state.props.$search_keyword_id_hash) : (e.$search_keyword_id = je.id(), e.$search_keyword_id_type = je.type(), e.$search_keyword_id_hash = Nr(e.$search_keyword_id))) : c._state && c._state.props && (c._state.props.$search_keyword_id && delete c._state.props.$search_keyword_id, c._state.props.$search_keyword_id_type && delete c._state.props.$search_keyword_id_type, c._state.props.$search_keyword_id_hash && delete c._state.props.$search_keyword_id_hash), c.save(), I(v.preset_properties, function(l, u) {
            if (u.indexOf("latest_") === -1) return !1;
            if (u = u.slice(7), l) {
                if (u === "wx_ad_click_id" && l === "not_collect") return !1;
                if (u !== "utm" && t === "url\u89E3\u6790\u5931\u8D25") u === "wx_ad_click_id" ? (e._latest_wx_ad_click_id = "url\u7684domain\u89E3\u6790\u5931\u8D25", e._latest_wx_ad_hash_key = "url\u7684domain\u89E3\u6790\u5931\u8D25", e._latest_wx_ad_callbacks = "url\u7684domain\u89E3\u6790\u5931\u8D25") : e["$latest_" + u] = "url\u7684domain\u89E3\u6790\u5931\u8D25";
                else if (Ze(document.referrer)) switch (u) {
                    case "traffic_source_type":
                        e.$latest_traffic_source_type = Ar();
                        break;
                    case "referrer":
                        e.$latest_referrer = L.pageProp.referrer;
                        break;
                    case "search_keyword":
                        Ie() ? e.$latest_search_keyword = Ie() : p(c._state) && p(c._state.props) && c._state.props.$latest_search_keyword && delete c._state.props.$latest_search_keyword;
                        break;
                    case "landing_page":
                        e.$latest_landing_page = it();
                        break;
                    case "wx_ad_click_id":
                        var d = Mn(location.href);
                        e._latest_wx_ad_click_id = d.click_id, e._latest_wx_ad_hash_key = d.hash_key, e._latest_wx_ad_callbacks = d.callbacks
                }
            } else if (u === "utm" && c._state && c._state.props)
                for (var _ in c._state.props)(_.indexOf("$latest_utm") === 0 || _.indexOf("_latest_") === 0 && _.indexOf("_latest_wx_ad_") < 0) && delete c._state.props[_];
            else c._state && c._state.props && "$latest_" + u in c._state.props ? delete c._state.props["$latest_" + u] : u == "wx_ad_click_id" && c._state && c._state.props && l === !1 && I(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function(y) {
                y in c._state.props && delete c._state.props[y]
            })
        }), v.preset_properties.latest_utm) {
        var n = L.campaignParamsStandard("$latest_", "_latest_"),
            i = n.$utms,
            a = n.otherUtms;
        et(i) || $(e, i), et(a) || $(e, a)
    }
    ui(e)
}

function gi(t) {
    var e = null;
    try {
        var r = JSON.parse(window.name);
        e = r[t] ? re(r[t]) : null
    } catch (n) {
        e = null
    }
    return e === null && (e = Bt(location.href, t) || null), e
}
De.prototype.call = function(t, e) {
    var r = this,
        n = new Date().getTime().toString(16) + String(ft()).replace(".", "").slice(1, 8);
    this.resultCbs[n] = r.resultCbs[n] || {
        result: null,
        callbacks: []
    }, this.timeoutCbs[n] = r.timeoutCbs[n] || {
        isTimeout: !1,
        callbacks: []
    }, (t = t.data ? t : {
        data: t
    }).data.message_id = n;
    var i = $({
        callType: this.type
    }, t);
    return e && (this.timerId = setTimeout(function() {
        for (var a in r.timeoutCbs[n].isTimeout = !0, r.timeoutCbs[n].callbacks) r.timeoutCbs[n].callbacks[a].call(null), r.timeoutCbs[n].callbacks.splice(a, 1)
    }, e)), di(i), {
        onResult: function(a) {
            return r.resultCbs[n].result ? (a(r.resultCbs[n].result), this) : (!r.timeoutCbs[n].isTimeout && r.resultCbs[n].callbacks.push(a), this)
        },
        onTimeout: function(a) {
            return r.timeoutCbs[n].isTimeout ? (a(), this) : (!r.resultCbs[n].result && r.timeoutCbs[n].callbacks.push(a), this)
        }
    }
}, De.prototype.onAppNotify = function(t) {
    this.appCallJsCallback = t
}, De.prototype.notifyApp = function(t, e) {
    var r = $({
        callType: this.type
    }, t);
    return e && (r.message_id = e), di(r)
}, fi.prototype = {
    double: function() {},
    getAppData: function() {},
    hasAppBridge: function() {
        return s.bridge.bridge_info.support_two_way_call
    },
    init: function() {},
    jsCallApp: function() {},
    requestToApp: function(t) {
        this.bridge.call(t, t.timeout.time).onResult(function(e) {
            P(t.callback) && t.callback(e)
        }).onTimeout(function() {
            P(t.timeout.callback) && t.timeout.callback()
        })
    }
};
var Yt = {
        isSeachHasKeyword: function() {
            return Bt(location.href, "sa-request-id") !== "" && (typeof sessionStorage.getItem("sensors-visual-mode") == "string" && sessionStorage.removeItem("sensors-visual-mode"), !0)
        },
        hasKeywordHandle: function() {
            var t = location.href,
                e = Bt(t, "sa-request-id") || null,
                r = Bt(t, "sa-request-type") || null,
                n = Bt(t, "sa-request-url") || null;
            if (Ct.setNotice(n), me.isSupport())
                if (n !== null && sessionStorage.setItem("sensors_heatmap_url", n), sessionStorage.setItem("sensors_heatmap_id", e), r !== null) r === "1" || r === "2" || r === "3" ? sessionStorage.setItem("sensors_heatmap_type", r) : r = null;
                else {
                    var i = sessionStorage.getItem("sensors_heatmap_type");
                    r = i !== null ? i : null
                }
            this.isReady(e, r)
        },
        isReady: function(t, e, r) {
            s.para.heatmap_url ? We({
                success: function() {
                    setTimeout(function() {
                        typeof sa_jssdk_heatmap_render < "u" && (sa_jssdk_heatmap_render(s, t, e, r), typeof console == "object" && typeof console.log == "function" && (s.heatmap_version && s.heatmap_version === s.lib_version || T("heatmap.js\u4E0Esensorsdata.js\u7248\u672C\u53F7\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u5B58\u5728\u98CE\u9669!")))
                    }, 0)
                },
                error: function() {},
                type: "js",
                url: s.para.heatmap_url
            }) : D("\u6CA1\u6709\u6307\u5B9Aheatmap_url\u7684\u8DEF\u5F84")
        },
        isStorageHasKeyword: function() {
            return me.isSupport() && typeof sessionStorage.getItem("sensors_heatmap_id") == "string"
        },
        storageHasKeywordHandle: function() {
            Ct.setNotice(), Yt.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
        },
        isWindowNameHasKeyword: function() {
            try {
                var t = JSON.parse(window.name),
                    e = b(t["sa-request-page-url"]) ? re(t["sa-request-page-url"]) : null;
                return t["sa-request-id"] && b(t["sa-request-id"]) && e === location.href
            } catch (r) {
                return !1
            }
        },
        windowNameHasKeywordHandle: function() {
            var t = JSON.parse(window.name);

            function e(a) {
                var l = t[a];
                return b(l) ? re(l) : null
            }
            var r = e("sa-request-id"),
                n = e("sa-request-type"),
                i = e("sa-request-url");
            Ct.setNotice(i), me.isSupport() && (i !== null && sessionStorage.setItem("sensors_heatmap_url", i), sessionStorage.setItem("sensors_heatmap_id", r), n !== null ? n === "1" || n === "2" || n === "3" ? sessionStorage.setItem("sensors_heatmap_type", n) : n = null : n = sessionStorage.getItem("sensors_heatmap_type") !== null ? sessionStorage.getItem("sensors_heatmap_type") : null), Yt.isReady(r, n)
        }
    },
    Nt = {
        isStorageHasKeyword: function() {
            return me.isSupport() && typeof sessionStorage.getItem("sensors-visual-mode") == "string"
        },
        isSearchHasKeyword: function() {
            return (gi("sa-visual-mode") === !0 || gi("sa-visual-mode") === "true") && (typeof sessionStorage.getItem("sensors_heatmap_id") == "string" && sessionStorage.removeItem("sensors_heatmap_id"), !0)
        },
        loadVtrack: function() {
            We({
                success: function() {},
                error: function() {},
                type: "js",
                url: s.para.vtrack_url ? s.para.vtrack_url : ii() + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/vtrack.min.js"
            })
        },
        messageListener: function(t) {
            if (!t || !t.data || t.data.source !== "sa-fe") return !1;
            if (t.data.type === "v-track-mode") {
                if (t.data.data && t.data.data.isVtrack)
                    if (me.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), t.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
                        var e = t.data.data.userURL;
                        e && (window.location.href = encodeURI(e))
                    } else Nt.loadVtrack();
                window.removeEventListener("message", Nt.messageListener, !1)
            }
        },
        removeMessageHandle: function() {
            window.removeEventListener && window.removeEventListener("message", Nt.messageListener, !1)
        },
        verifyVtrackMode: function() {
            window.addEventListener && window.addEventListener("message", Nt.messageListener, !1), Nt.postMessage()
        },
        postMessage: function() {
            try {
                window.parent && window.parent.postMessage && window.parent.postMessage({
                    source: "sa-web-sdk",
                    type: "v-is-vtrack",
                    data: {
                        sdkversion: Ye
                    }
                }, "*")
            } catch (t) {
                D("\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\uFF0C\u4E0D\u652F\u6301 postMessage API")
            }
        },
        notifyUser: function() {
            var t = function(e) {
                if (!e || !e.data || e.data.source !== "sa-fe") return !1;
                e.data.type === "v-track-mode" && (e.data.data && e.data.data.isVtrack && alert("\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301\uFF0C\u8BF7\u5347\u7EA7\u90E8\u7F72\u795E\u7B56\u6570\u636E\u6CBB\u7406"), window.removeEventListener("message", t, !1))
            };
            window.addEventListener && window.addEventListener("message", t, !1), Nt.postMessage()
        }
    };

function _i(t) {
    var e = s.bridge.bridge_info;

    function r() {
        var i = [];
        e.touch_app_bridge || i.push(Gt.defineMode("1")), p(s.para.app_js_bridge) || (i.push(Gt.defineMode("2")), e.verify_success = !1), p(s.para.heatmap) && s.para.heatmap.clickmap == "default" || i.push(Gt.defineMode("3")), e.verify_success === "fail" && i.push(Gt.defineMode("4")), new s.SDKJSBridge("app_alert").notifyApp({
            data: i
        })
    }
    if (s.bridge.hasVisualModeBridge())
        if (p(s.para.heatmap) && s.para.heatmap.clickmap == "default")
            if (p(s.para.app_js_bridge) && e.verify_success === "success")
                if (t) window.sa_jssdk_app_define_mode(s, t);
                else {
                    var n = location.protocol;
                    We({
                        success: function() {
                            setTimeout(function() {
                                typeof sa_jssdk_app_define_mode < "u" && window.sa_jssdk_app_define_mode(s, t)
                            }, 0)
                        },
                        error: function() {},
                        type: "js",
                        url: (n = tt(["http:", "https:"], n) > -1 ? n : "https:") + "//static.sensorsdata.cn/sdk/" + s.lib_version + "/vapph5define.min.js"
                    })
                }
    else r();
    else r()
}

function Us(t) {
    s.para.is_track_single_page && xr.on("switch", function(e) {
        var r = function(i) {
            if (i = i || {}, e !== location.href) {
                L.pageProp.referrer = it(e);
                var a = $({
                    $url: it(),
                    $referrer: it(e)
                }, i);
                P(t) ? t(a) : s.quick && s.quick("autoTrack", a)
            }
        };
        if (typeof s.para.is_track_single_page == "boolean") r();
        else if (typeof s.para.is_track_single_page == "function") {
            var n = s.para.is_track_single_page();
            p(n) ? r(n) : n === !0 && r()
        }
    })
}

function Rs() {
    s._q && A(s._q) && s._q.length > 0 && I(s._q, function(t) {
        s[t[0]].apply(s, Array.prototype.slice.call(t[1]))
    }), p(s.para.heatmap) && (Ct.initHeatmap(), Ct.initScrollmap())
}

function Hs() {
    s.readyState.setState(3), new s.SDKJSBridge("visualized").onAppNotify(function() {
        _i(typeof sa_jssdk_app_define_mode < "u")
    }), _i(!1), s.bridge.app_js_bridge_v1(), L.initPage(), Us(), c.init(), Ls(), Bs(), s.readyState.setState(4), Rs()
}

function Js() {
    Yt.isSeachHasKeyword() ? Yt.hasKeywordHandle() : window.parent !== self && Nt.isSearchHasKeyword() ? Nt.verifyVtrackMode() : Yt.isWindowNameHasKeyword() ? Yt.windowNameHasKeywordHandle() : Yt.isStorageHasKeyword() ? Yt.storageHasKeywordHandle() : window.parent !== self && Nt.isStorageHasKeyword() ? Nt.verifyVtrackMode() : (Hs(), Nt.notifyUser())
}

function Bs() {
    Qt.init(), s.bridge.bridge_info.verify_success === "success" && Ur.init()
}
var qs = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "resetAnonymousIdentity", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister", "bind", "unbind", "loginWithKey"];

function hi() {
    I(qs, function(t) {
        var e = s[t];
        s[t] = function() {
            if (s.readyState.state < 3) return A(s._q) || (s._q = []), T("calling sdk api before init is deprecated."), s._q.push([t, arguments]), !1;
            if (!P(s.getDisabled) || !s.getDisabled()) {
                if (s.readyState.getState()) return e.apply(s, arguments);
                D("\u8BF7\u5148\u521D\u59CB\u5316\u795E\u7B56JS SDK")
            }
        }
    })
}
var Ms = {
    track: function(t, e, r) {},
    quick: function(t, e, r, n) {},
    register: function(t) {},
    registerPage: function(t) {},
    registerOnce: function(t) {},
    clearAllRegister: function(t) {},
    trackSignup: function(t, e, r, n) {},
    setProfile: function(t, e) {},
    setOnceProfile: function(t, e) {},
    appendProfile: function(t, e) {},
    incrementProfile: function(t, e) {},
    deleteProfile: function(t) {},
    unsetProfile: function(t, e) {},
    identify: function(t, e) {},
    resetAnonymousIdentity: function(t) {},
    login: function(t, e) {},
    logout: function(t) {},
    trackLink: function(t, e, r) {},
    deleteItem: function(t, e) {},
    setItem: function(t, e, r) {},
    getAppStatus: function(t) {},
    clearPageRegister: function(t) {}
};

function Ks(t, e) {
    this.cancel = function() {
        t = !0
    }, this.getCanceled = function() {
        return t || !1
    }, this.stop = function() {
        e = !0
    }, this.getStopped = function() {
        return e || !1
    }
}

function Fs(t, e, r) {
    var n = null;
    try {
        n = JSON.parse(JSON.stringify(t || null))
    } catch (i) {}
    this.getOriginalData = function() {
        return n
    }, this.getPosition = function() {
        return e
    }, this.cancellationToken = new Ks, this.sensors = r
}

function oe(t) {
    if (!p(t)) throw "error: Stage constructor requires arguments.";
    this.processDef = t, this.registeredInterceptors = {}
}
oe.prototype.process = function(t, e) {
    if (t && t in this.processDef) {
        var r = this.registeredInterceptors[t];
        if (r && A(r) && r.length > 0)
            for (var n = {
                    current: 0,
                    total: r.length
                }, i = new Fs(e, n, s), a = 0; a < r.length; a++) try {
                if (n.current = a + 1, e = r[a].call(null, e, i) || e, i.cancellationToken.getCanceled()) break;
                if (i.cancellationToken.getStopped()) return
            } catch (l) {
                D("interceptor error:" + l)
            }
        return this.processDef[t] && this.processDef[t] in this.processDef && (e = this.process(this.processDef[t], e)), e
    }
    D("process [" + t + "] is not supported")
}, oe.prototype.registerStageImplementation = function(t) {
    t && t.init && P(t.init) && (t.init(this), t.interceptor && this.registerInterceptor(t.interceptor))
}, oe.prototype.registerInterceptor = function(t) {
    if (t)
        for (var e in t) {
            var r = t[e];
            if (r && p(r) && P(r.entry)) {
                $t(r.priority) || (r.priority = Number.MAX_VALUE), this.registeredInterceptors[e] || (this.registeredInterceptors[e] = []);
                var n = this.registeredInterceptors[e];
                r.entry.priority = r.priority, n.push(r.entry), n.sort(function(i, a) {
                    return i.priority - a.priority
                })
            }
        }
};
var Vs = {
        basicProps: "extendProps",
        extendProps: "formatData",
        formatData: "finalAdjustData",
        finalAdjustData: null
    },
    mi = new oe(Vs),
    Ws = {
        send: null
    },
    vi = new oe(Ws),
    zs = {
        getUtmData: null,
        callSchema: null
    },
    yi = new oe(zs),
    Xs = {
        webClickEvent: null,
        webStayEvent: null
    },
    bi = new oe(Xs);

function Mr(t) {
    t && t.buildDataStage && mi.registerStageImplementation(t.buildDataStage), t && t.businessStage && yi.registerStageImplementation(t.businessStage), t && t.sendDataStage && vi.registerStageImplementation(t.sendDataStage), t && t.viewStage && bi.registerStageImplementation(t.viewStage)
}
var wi = {
    buildDataStage: function(t) {
        t && mi.registerInterceptor(t)
    },
    businessStage: function(t) {
        t && yi.registerInterceptor(t)
    },
    sendDataStage: function(t) {
        t && vi.registerInterceptor(t)
    },
    viewStage: function(t) {
        t && bi.registerInterceptor(t)
    }
};

function Kr(t, e) {
    wi[t] && wi[t](e)
}
var Fr = {
    stage: null,
    init: function(t) {
        this.stage = t
    }
};

function Gs() {
    return Fr.stage && Fr.stage.process("getUtmData")
}
var Si = {
    stage: null,
    init: function(t) {
        this.stage = t
    },
    interceptor: {
        send: {
            entry: function(t) {
                return t
            }
        }
    }
};

function Qs(t) {
    return Si.stage.process("send", t)
}
var xe = {};

function Ys(t) {
    t.kit = xe, t.saEvent = at, this.buildDataStage = Rr, this.sendDataStage = Si, this.businessStage = Fr
}

function Zs(t) {
    t.heatmap = Ct, this.viewStage = Hr
}
xe.buildData = function(t) {
    return Qa(t)
}, xe.sendData = function(t, e) {
    var r = Fn(t.properties);
    Qs({
        origin_data: t,
        server_url: s.para.server_url,
        data: t,
        config: r || {},
        callback: e
    }), s.log(t)
}, xe.encodeTrackData = function(t) {
    return Xn(t)
}, xe.getUtmData = function() {
    return Gs()
};
var to = {
    webClickEvent: {
        entry: function(t, e) {
            var r = e.sensors;
            t.tagName === "a" && r.para.heatmap && r.para.heatmap.isTrackLink === !0 ? r.trackLink({
                event: t.event,
                target: t.target
            }, "$WebClick", t.props) : r.track("$WebClick", t.props, t.callback)
        }
    },
    webStayEvent: {
        entry: function(t, e) {
            e.sensors.track("$WebStay", t)
        }
    }
};

function eo(t) {
    P(t.properties) ? !t.isMatchedWithFilter || P(t.isMatchedWithFilter) ? Kr("buildDataStage", {
        finalAdjustData: {
            priority: 100,
            entry: function(e) {
                try {
                    if (P(t.isMatchedWithFilter)) return t.isMatchedWithFilter(e) && t.properties(e);
                    t.properties(e)
                } catch (r) {
                    D("execute registerPropertyPlugin callback error:" + r)
                }
            }
        }
    }) : D("registerPropertyPlugin arguments error, isMatchedWithFilter must be function") : D("registerPropertyPlugin arguments error, properties must be function")
}
var ki = window.sensors_data_pre_config,
    Pi = !!pi.isObject(ki) && ki.is_compliance_enabled;

function Vr(t) {
    t && (s.events = Zn, s.bridge = $s, s.SDKJSBridge = De, s.JSBridge = fi, s.store = c, s.unlimitedDiv = ir, s.customProp = ri, s.vtrackcollect = Qt, s.vapph5collect = Ur, s.detectMode = Js, s.registerFeature = Mr, s.registerInterceptor = Kr, s.commonWays = ar, Mr(new Ys(s)), Mr(new Zs(s)), Kr("viewStage", to));
    var e = t ? Ds : Ms;
    for (var r in e) s[r] = e[r];
    s.logger = ae, s.log = Et, s._ = pi, s.on = Gn, s.ee = K, s.use = li, s.lib_version = Ye, s.registerPropertyPlugin = eo
}
s.init = function(t) {
    if (K.sdk.emit("beforeInit"), s.readyState && s.readyState.state && s.readyState.state >= 2) return !1;
    Pi && (Vr(!0), hi()), K.initSystemEvent(), s.setInitVar(), s.readyState.setState(2), s.initPara(t), K.sdk.emit("initPara"), K.sdk.emit("afterInitPara"), K.sdk.emit("initAPI"), K.sdk.emit("afterInitAPI"), s.detectMode(), xs(), K.sdk.emit("afterInit"), K.sdk.emit("ready")
}, Pi ? Vr(!1) : (Vr(!0), hi());
var ro = "1.26.3";

function no(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (io(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function io(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function ao(t, e, r) {
    return no(t, e, r), t.plugin_version = ro, t
}
var so = {
        init: function(t) {
            var e = t._.isString,
                r = t._.rot13defs,
                n = t._.dfmapping,
                i = "data:enc;";
            t.ee.sdk.on("afterInitPara", function() {
                t.kit.userEncrypt = function(a) {
                    return "dfm-enc-" + n(a)
                }, t.kit.userDecrypt = function(a) {
                    return a.indexOf(i) === 0 ? (a = a.substring(i.length), a = r(a)) : a.indexOf("dfm-enc-") === 0 && (a = a.substring(8), a = n(a)), a
                }, t.kit.userDecryptIfNeeded = function(a) {
                    return !e(a) || a.indexOf(i) !== 0 && a.indexOf("dfm-enc-") !== 0 || (a = t.kit.userDecrypt(a)), a
                }
            })
        },
        plugin_name: "UserEncryptDefault"
    },
    oo = ao(so),
    lo = "1.26.3";

function uo(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (co(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function co(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function po(t, e, r) {
    return uo(t, e, r), t.plugin_version = lo, t
}
var fo = {
        sd: null,
        init: function(t) {
            if (this.sd || (this.sd = t, !this.sd || !this.sd._)) return !1;
            var e = this.sd._.cookie.get("sensors_amp_id"),
                r = this.sd.store._state.distinct_id;
            if (e && e.length > 0) {
                var n = e.slice(0, 4) === "amp-";
                if (e !== r) {
                    if (!n) return !1;
                    this.sd.store._state.first_id ? (this.sd.identify(e, !0), this.sd.saEvent.send({
                        original_id: e,
                        distinct_id: r,
                        type: "track_signup",
                        event: "$SignUp",
                        properties: {}
                    }, null), this.setAmpId(r)) : this.sd.identify(e, !0)
                }
            } else this.setAmpId(r);
            this.addListener()
        },
        addListener: function() {
            var t = this;
            this.sd.events.on("changeDistinctId", function(e) {
                t.setAmpId(e)
            }), this.sd.events.isReady()
        },
        setAmpId: function(t) {
            this.sd._.cookie.set("sensors_amp_id", t)
        }
    },
    go = po(fo, "Amp", "sdkReady"),
    Lt = window.SensorsData_App_Visual_Bridge,
    sr = Lt && Lt.sensorsdata_visualized_mode,
    Ci = Lt && Lt.sensorsdata_visualized_alert_info,
    Oi = Lt && Lt.sensorsdata_hover_web_nodes;

function _o(t) {
    return Ci && Ci.call(Lt, JSON.stringify(t))
}

function Ni(t) {
    return sr.call(Lt) && Oi && Oi.call(Lt, JSON.stringify(t))
}

function ho(t, e) {
    return e && typeof e[t.callType] == "function" && e[t.callType]()
}
var Tt, or, lr, V, $e, Wr, Ti = {
        isVerify: function() {
            return sr && (sr === !0 || sr.call(Lt))
        },
        commands: {
            app_alert: _o,
            visualized_track: Ni,
            page_info: Ni,
            sensorsdata_get_app_visual_config: ho
        }
    },
    mo = "1.26.3";

function vo(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (yo(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function yo(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function bo(t, e, r) {
    return vo(t, e, r), t.plugin_version = mo, t
}
var ji = {
    init: function(t) {
        $e = (V = t) && V._, Wr = V && V.log || console && console.log || function() {}, wo()
    },
    handleCommand: ko
};

function wo() {
    Tt = window.SensorsData_APP_New_H5_Bridge, or = Tt && Tt.sensorsdata_track, lr = or && Tt.sensorsdata_get_server_url && Tt.sensorsdata_get_server_url(), V && !V.bridge.activeBridge && lr && (V.bridge.activeBridge = ji, V.para.app_js_bridge && !V.para.app_js_bridge.is_mui && (V.bridge.is_verify_success = lr && V.bridge.validateAppUrl(lr)), V.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "android",
        verify_success: V.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: !!Tt.sensorsdata_js_call_app
    }, V.para.app_js_bridge ? (V.registerInterceptor("sendDataStage", {
        send: {
            priority: 60,
            entry: So
        }
    }), Wr("Android bridge inits succeed.")) : Wr("app_js_bridge is not configured, data will not be sent by android bridge."))
}

function So(t, e) {
    if (V.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return V.bridge.is_verify_success ? (or && or.call(Tt, JSON.stringify($e.extend({
        server_url: V.para.server_url
    }, t.data))), $e.isFunction(r) && r(), e.cancellationToken.cancel(), t) : V.para.app_js_bridge.is_send ? (V.debug.apph5({
        data: t.data,
        step: "4.2",
        output: "all"
    }), t) : ($e.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}

function ko(t) {
    var e = t.callType;
    if (e in Ti.commands) return Ti.commands[e](t, Tt);
    Tt && $e.isFunction(Tt.sensorsdata_js_call_app) && Tt.sensorsdata_js_call_app(JSON.stringify(t))
}
var Ii = bo(ji, "AndroidBridge", "sdkAfterInitPara"),
    Ut = window.SensorsData_App_Visual_Bridge,
    ur = Ut && Ut.sensorsdata_visualized_mode,
    Ai = Ut && Ut.sensorsdata_visualized_alert_info,
    Di = Ut && Ut.sensorsdata_hover_web_nodes;

function Po(t) {
    return Ai && Ai.call(Ut, JSON.stringify(t))
}

function xi(t) {
    return ur.call(Ut) && Di && Di.call(Ut, JSON.stringify(t))
}

function Co(t, e) {
    return e && typeof e[t.callType] == "function" && e[t.callType]()
}
var ht, Ee, ve, cr, st, le, zr, $i = {
        isVerify: function() {
            return ur && (ur === !0 || ur.call(Ut))
        },
        commands: {
            app_alert: Po,
            visualized_track: xi,
            page_info: xi,
            sensorsdata_get_app_visual_config: Co
        }
    },
    Oo = "1.26.3";

function No(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (To(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function To(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function jo(t, e, r) {
    return No(t, e, r), t.plugin_version = Oo, t
}
var Ei = {
    init: function(t) {
        le = (st = t) && st._, zr = st && st.log || console && console.log || function() {}, Io()
    },
    handleCommand: Do
};

function Io() {
    if (ht = window.SensorsData_APP_JS_Bridge, Ee = ht && ht.sensorsdata_track, ve = ht && ht.sensorsdata_verify, cr = ht && ht.sensorsdata_visual_verify, st && !st.bridge.activeBridge && (ve || Ee || cr)) {
        st.bridge.activeBridge = Ei;
        var t = ve || Ee;
        cr && (t = !!cr.call(ht, JSON.stringify({
            server_url: st.para.server_url
        }))), st.bridge.bridge_info = {
            touch_app_bridge: !0,
            platform: "android",
            verify_success: t ? "success" : "fail"
        }, st.para.app_js_bridge ? (st.registerInterceptor("sendDataStage", {
            send: {
                priority: 80,
                entry: Ao
            }
        }), zr("Android obsolete bridge inits succeed.")) : zr("app_js_bridge is not configured, data will not be sent by android obsolete bridge.")
    }
}

function Ao(t, e) {
    if (st.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return ve ? ve && ve.call(ht, JSON.stringify(le.extend({
        server_url: st.para.server_url
    }, t.data))) ? (le.isFunction(r) && r(), e.cancellationToken.cancel(), t) : st.para.app_js_bridge.is_send ? (st.debug.apph5({
        data: t.data,
        step: "3.1",
        output: "all"
    }), t) : (le.isFunction(r) && r(), e.cancellationToken.cancel(), t) : (Ee && Ee.call(ht, JSON.stringify(le.extend({
        server_url: st.para.server_url
    }, t.data))), le.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}

function Do(t) {
    var e = t.callType;
    return e in $i.commands ? $i.commands[e](t, ht) : ht && le.isFunction(ht.sensorsdata_js_call_app) ? ht.sensorsdata_js_call_app(JSON.stringify(t)) : void 0
}
var mt, vt, Xr, Gr, Li = jo(Ei, "AndroidObsoleteBridge", "sdkAfterInitPara"),
    xo = "1.26.3";

function $o(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Eo(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Eo(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Lo(t, e, r) {
    return $o(t, e, r), t.plugin_version = xo, t
}
var Le, St = {
        event_list: [],
        latest_event_initial_time: null,
        max_save_time: 2592e6,
        init: function(t, e) {
            if (vt || !t) return !1;
            Gr = (e = e || {}).cookie_name || "sensorsdata2015jssdkchannel", vt = t;
            var r = this;
            (function() {
                if (mt = vt._, Xr = vt.store, !mt.localStorage.isSupport()) return !1;
                vt.para.max_string_length = 1024, r.eventList.init(), r.addLatestChannelUrl(), r.addIsChannelCallbackEvent()
            })()
        },
        addIsChannelCallbackEvent: function() {
            vt.registerPage({
                $is_channel_callback_event: function(t) {
                    if (mt.isObject(t) && t.event && t.event !== "$WebClick" && t.event !== "$pageview" && t.event !== "$WebStay" && t.event !== "$SignUp") return !St.eventList.hasEvent(t.event) && (St.eventList.add(t.event), !0)
                }
            })
        },
        addLatestChannelUrl: function() {
            var t = this.getUrlDomain(),
                e = this.cookie.getChannel();
            if (t === "url\u89E3\u6790\u5931\u8D25") this.registerAndSave({
                _sa_channel_landing_url: "",
                _sa_channel_landing_url_error: "url\u7684domain\u89E3\u6790\u5931\u8D25"
            });
            else if (mt.isReferralTraffic(document.referrer)) {
                var r = mt.getQueryParam(location.href, "sat_cf");
                mt.isString(r) && r.length > 0 ? (this.registerAndSave({
                    _sa_channel_landing_url: location.href
                }), St.channelLinkHandler()) : this.registerAndSave({
                    _sa_channel_landing_url: ""
                })
            } else e ? vt.registerPage(e) : vt.registerPage({
                _sa_channel_landing_url: "",
                _sa_channel_landing_url_error: "\u53D6\u503C\u5F02\u5E38"
            })
        },
        registerAndSave: function(t) {
            vt.registerPage(t), this.cookie.saveChannel(t)
        },
        cookie: {
            getChannel: function() {
                var t = vt.kit.userDecryptIfNeeded(mt.cookie.get(Gr));
                return t = mt.safeJSONParse(t), !(!mt.isObject(t) || !t.prop) && t.prop
            },
            saveChannel: function(t) {
                var e = {
                        prop: t
                    },
                    r = JSON.stringify(e);
                vt.para.encrypt_cookie && (r = vt.kit.userEncrypt(r)), mt.cookie.set(Gr, r)
            }
        },
        channelLinkHandler: function() {
            this.eventList.reset(), vt.track("$ChannelLinkReaching")
        },
        getUrlDomain: function() {
            var t = mt.info.pageProp.url_domain;
            return t === "" && (t = "url\u89E3\u6790\u5931\u8D25"), t
        },
        eventList: {
            init: function() {
                var t = this.get(),
                    e = new Date().getTime();
                if (t && mt.isNumber(t.latest_event_initial_time) && mt.isArray(t.eventList)) {
                    var r = e - t.latest_event_initial_time;
                    r > 0 && r < St.max_save_time ? (St.event_list = t.eventList, St.latest_event_initial_time = t.latest_event_initial_time) : this.reset()
                } else this.reset()
            },
            get: function() {
                var t = {};
                try {
                    t = Xr.readObjectVal("sawebjssdkchannel")
                } catch (e) {
                    vt.log(e)
                }
                return t
            },
            add: function(t) {
                St.event_list.push(t), this.save()
            },
            save: function() {
                var t = {
                    latest_event_initial_time: St.latest_event_initial_time,
                    eventList: St.event_list
                };
                Xr.saveObjectVal("sawebjssdkchannel", t)
            },
            reset: function() {
                St.event_list = [], St.latest_event_initial_time = new Date().getTime(), this.save()
            },
            hasEvent: function(t) {
                var e = !1;
                return mt.each(St.event_list, function(r) {
                    r === t && (e = !0)
                }), e
            }
        }
    },
    Uo = Lo(St, "SensorsChannel", "sdkAfterInitAPI"),
    Ro = "1.26.3";

function Ho(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Jo(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Jo(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Bo(t, e, r) {
    return Ho(t, e, r), t.plugin_version = Ro, t
}
var Ui = function() {
    var t = {};
    return typeof document.hidden < "u" ? (t.hidden = "hidden", t.visibilityChange = "visibilitychange") : typeof document.msHidden < "u" ? (t.hidden = "msHidden", t.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden < "u" && (t.hidden = "webkitHidden", t.visibilityChange = "webkitvisibilitychange"), t
};

function Ri() {
    return Le !== void 0 && document[Le]
}
Le = Ui().hidden;
var Qr, ue, F, Ue, Yr, Zr = {
        android: /Android/i,
        iOS: /iPhone|iPad|iPod/i
    },
    qo = function() {
        for (var t in Zr)
            if (navigator.userAgent.match(Zr[t])) return t;
        return ""
    },
    Hi = qo(),
    Mo = function() {
        return Zr.hasOwnProperty(Hi)
    },
    tn = function(t) {
        return t != null && Object.prototype.toString.call(t) == "[object Object]"
    },
    Ko = function(t) {
        return t.match(/\/sd\/(\w+)\/(\w+)$/)
    },
    Fo = function(t) {
        var e = t._.URL(t.para.server_url);
        return {
            origin: e.origin,
            project: e.searchParams.get("project") || "default"
        }
    },
    Vo = function(t, e, r) {
        t.log("\u5C1D\u8BD5\u5524\u8D77 android app");
        var n = e;
        t.log("\u5524\u8D77APP\u7684\u5730\u5740\uFF1A" + n), window.location = n, t.timer = setTimeout(function() {
            var i = Ri();
            if (t.log("hide:" + Le + ":" + document[Le]), i) return t.log("The page is hidden, stop navigating to download page"), !1;
            t.log("App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740"), window.location = r
        }, t.timeout)
    },
    Wo = function(t, e, r) {
        t.log("\u5C1D\u8BD5\u5524\u8D77 iOS app:" + e), window.location.href = e, t.timer = setTimeout(function() {
            if (Ri()) return t.log("The page is hidden, stop navigating to download page"), !1;
            t.log("App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740"), window.location.href = r
        }, t.timeout), t.log("new timer:" + t.timer)
    },
    Re = {
        key: null,
        timer: null,
        sd: null,
        data: null,
        timeout: 2500,
        apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
        init: function(t) {
            if (this.sd) return this.log("deeplink\u5DF2\u7ECF\u521D\u59CB\u5316"), !1;
            if (this.sd = t, this.log("deeplink init called"), this.sd === null) return this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165"), !1;
            var e = {};
            if (arguments.length > 0 && (arguments.length === 1 && tn(arguments[0]) ? e = arguments[0] : arguments.length >= 2 && tn(arguments[1]) && (e = arguments[1])), !Mo()) return this.log("\u4E0D\u652F\u6301\u5F53\u524D\u7CFB\u7EDF\uFF0C\u76EE\u524D\u53EA\u652F\u6301Android\u548CiOS"), !1;
            if (tn(e) && this.sd._.isNumber(e.timeout) && e.timeout >= 2500 && (this.timeout = e.timeout), !this.sd.para.server_url) return this.log("\u795E\u7B56JS SDK\u914D\u7F6E\u9879server_url\u672A\u6B63\u786E\u914D\u7F6E"), !1;
            var r = Fo(this.sd);
            this.apiURL = this.apiURL.replace("{origin}", r.origin).replace("{project}", r.project);
            var n = this.sd._.getQueryParam(window.location.href, "deeplink");
            if (!n) return this.log("\u5F53\u524D\u9875\u9762\u7F3A\u5C11deeplink\u53C2\u6570"), !1;
            n = window.decodeURIComponent(n);
            var i = Ko(n);
            if (!i) return this.log("\u5F53\u524D\u9875\u9762\u7684deeplink\u53C2\u6570\u65E0\u6548"), !1;
            this.key = i[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(i[2])), this.sd._.ajax({
                url: this.apiURL,
                type: "GET",
                cors: !0,
                credentials: !1,
                success: function(a) {
                    if (a.errorMsg) return Re.log("API\u62A5\u9519\uFF1A" + a.errorMsg), !1;
                    Re.data = a, Re.log("API\u67E5\u8BE2\u6210\u529F\uFF0C\u6570\u636E\uFF1A" + JSON.stringify(a, null, "  ")), this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))
                }.bind(this),
                error: function() {
                    Re.log("API\u67E5\u8BE2\u51FA\u9519")
                }
            }), this.addListeners()
        },
        openDeepLink: function() {
            if (this.log("openDeeplink()"), !this.data) return this.log("\u6CA1\u6709Deep link\u6570\u636E!"), !1;
            if (Hi === "iOS") {
                this.log("\u5F53\u524D\u7CFB\u7EDF\u662FiOS");
                var t = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
                this.log("\u5524\u8D77APP\u7684\u5730\u5740\uFF1A" + t), Wo(this, t, this.data.ios_info.download_url)
            } else this.log("\u5F53\u524D\u7CFB\u7EDF\u662F android"), Vo(this, this.data.android_info.url_schemes, this.data.android_info.download_url)
        },
        log: function(t) {
            this.sd && this.sd.log(t)
        },
        addListeners: function() {
            var t = Ui().visibilityChange,
                e = this;
            t && document.addEventListener(t, function() {
                clearTimeout(e.timer), e.log("visibilitychange, clear timeout:" + e.timer)
            }, !1), window.addEventListener("pagehide", function() {
                e.log("page hide, clear timeout:" + e.timer), clearTimeout(e.timer)
            }, !1)
        }
    },
    zo = Bo(Re, "Deeplink", "sdkReady"),
    Xo = "1.26.3";

function Go(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Qo(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Qo(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Yo(t, e, r) {
    return Go(t, e, r), t.plugin_version = Xo, t
}
var Ji = {
    init: function(t) {
        Ue = (F = t) && F._, Yr = F && F.log || console && console.log || function() {}, Zo()
    },
    handleCommand: el
};

function Zo() {
    Qr = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url, ue = function() {
        return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker
    }, F && !F.bridge.activeBridge && ue() && ue().postMessage && (F.bridge.activeBridge = Ji, F.para.app_js_bridge && !F.para.app_js_bridge.is_mui && (F.bridge.is_verify_success = Qr && F.bridge.validateAppUrl(Qr)), F.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "ios",
        verify_success: F.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: !0
    }, F.para.app_js_bridge ? (F.registerInterceptor("sendDataStage", {
        send: {
            priority: 70,
            entry: tl
        }
    }), Yr("IOS bridge inits succeed.")) : Yr("app_js_bridge is not configured, data will not be sent by iOS bridge."))
}

function tl(t, e) {
    if (F.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r = t.callback;
    return F.bridge.is_verify_success ? (ue() && ue().postMessage(JSON.stringify({
        callType: "app_h5_track",
        data: Ue.extend({
            server_url: F.para.server_url
        }, t.data)
    })), Ue.isFunction(r) && r(), e.cancellationToken.cancel(), t) : F.para.app_js_bridge.is_send ? (F.debug.apph5({
        data: t.data,
        step: "4.1",
        output: "all"
    }), t) : (Ue.isFunction(r) && r(), e.cancellationToken.cancel(), t)
}

function el(t) {
    var e = t.callType;
    return e !== "page_info" && e !== "visualized_track" || F.bridge.hasVisualModeBridge() ? e === "sensorsdata_get_app_visual_config" ? Ue.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge[e] : ue() && ue().postMessage(JSON.stringify(t)) : null
}
var Z, ye, en, Bi = Yo(Ji, "IOSBridge", "sdkAfterInitPara"),
    rl = "1.26.3";

function nl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (il(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function il(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function al(t, e, r) {
    return nl(t, e, r), t.plugin_version = rl, t
}
var qi = {
    init: function(t) {
        ye = (Z = t) && Z._, en = Z && Z.log || console && console.log || function() {}, sl()
    }
};

function sl() {
    Z && !Z.bridge.activeBridge && ol() && (Z.bridge.activeBridge = qi, Z.bridge.bridge_info = {
        touch_app_bridge: !0,
        platform: "ios",
        verify_success: ll() ? "success" : "fail"
    }, Z.para.app_js_bridge ? (Z.registerInterceptor("sendDataStage", {
        send: {
            priority: 90,
            entry: ul
        }
    }), en("IOS obsolete bridge inits succeed.")) : en("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge."))
}

function ol() {
    return (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream
}

function ll() {
    if (/sensors-verify/.test(navigator.userAgent)) {
        var t = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
        if (t && t[0] && typeof t[1] == "string" && t[1].split("?").length === 2) {
            t = t[1].split("?");
            var e = null,
                r = null;
            try {
                e = ye.URL(Z.para.server_url).hostname, r = ye.URL(Z.para.server_url).searchParams.get("project") || "default"
            } catch (n) {
                Z.log(n)
            }
            return !(!e || e !== t[0] || !r || r !== t[1])
        }
        return !1
    }
    return !!/sa-sdk-ios/.test(navigator.userAgent)
}

function ul(t, e) {
    if (Z.para.app_js_bridge.is_mui || t.data.type === "item_set" || t.data.type === "item_delete") return t;
    var r, n, i = t.callback;
    if (Z.bridge.bridge_info.verify_success) {
        var a = document.createElement("iframe"),
            l = (r = t.data, n = (n = JSON.stringify(ye.extend({
                server_url: Z.para.server_url
            }, r))).replace(/\r\n/g, ""), "sensorsanalytics://trackEvent?event=" + (n = encodeURIComponent(n)));
        return a.setAttribute("src", l), document.documentElement.appendChild(a), a.parentNode.removeChild(a), a = null, ye.isFunction(i) && i(), e.cancellationToken.cancel(), !0
    }
    return Z.para.app_js_bridge.is_send ? (Z.debug.apph5({
        data: t.data,
        step: "3.2",
        output: "all"
    }), t) : (ye.isFunction(i) && i(), e.cancellationToken.cancel(), t)
}
var Mi = al(qi, "IOSObsoleteBridge", "sdkAfterInitPara"),
    cl = "1.26.3";

function pl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (dl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function dl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function fl(t, e, r) {
    return pl(t, e, r), t.plugin_version = cl, t
}
var gl = 5e3,
    _l = 432e3;

function W() {
    this.sd = null, this.start_time = +new Date, this.page_show_status = !0, this.page_hidden_status = !1, this._ = {}, this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.title = document.title || "", this.option = {}, this.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name = "sawebjssdkpageleave", this.max_duration = _l
}
W.prototype.init = function(t, e) {
    if (t) {
        if (this.sd = t, this._ = this.sd._, e) {
            this.option = e;
            var r = e.heartbeat_interval_time;
            r && (this._.isNumber(r) || this._.isNumber(1 * r)) && 1 * r > 0 && (this.heartbeat_interval_time = 1e3 * r);
            var n = e.max_duration;
            n && (this._.isNumber(n) || this._.isNumber(1 * n)) && 1 * n > 0 && (this.max_duration = n)
        }
        this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4)), this.addEventListener(), document.hidden === !0 ? this.page_show_status = !1 : this.addHeartBeatInterval(), this.log("PageLeave\u521D\u59CB\u5316\u5B8C\u6BD5")
    } else this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
}, W.prototype.log = function(t) {
    this.sd && this.sd.log(t)
}, W.prototype.refreshPageEndTimer = function() {
    var t = this;
    this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
        t.page_hidden_status = !1
    }, gl)
}, W.prototype.hiddenStatusHandler = function() {
    clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1
}, W.prototype.pageStartHandler = function() {
    this.start_time = +new Date, document.hidden ? this.page_show_status = !1 : this.page_show_status = !0, this.url = location.href, this.title = document.title
}, W.prototype.pageEndHandler = function() {
    if (this.page_hidden_status !== !0) {
        var t = this.getPageLeaveProperties();
        this.page_show_status === !1 && delete t.event_duration, this.page_show_status = !1, this.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", t), this.refreshPageEndTimer(), this.delHeartBeatData()
    }
}, W.prototype.addEventListener = function() {
    this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this.addPageEndListener()
}, W.prototype.addPageStartListener = function() {
    var t = this;
    "onpageshow" in window && this._.addEvent(window, "pageshow", function() {
        t.pageStartHandler(), t.hiddenStatusHandler()
    })
}, W.prototype.isCollectUrl = function(t) {
    return typeof this.option.isCollectUrl != "function" || typeof t != "string" || t === "" || this.option.isCollectUrl(t)
}, W.prototype.addSinglePageListener = function() {
    var t = this;
    this.sd.ee && this.sd.ee.spa.prepend("switch", function(e) {
        e !== location.href && (t.url = e, t.pageEndHandler(), t.stopHeartBeatInterval(), t.current_page_url = t.url, t.pageStartHandler(), t.hiddenStatusHandler(), t.addHeartBeatInterval())
    })
}, W.prototype.addPageEndListener = function() {
    var t = this;
    this._.each(["pagehide", "beforeunload", "unload"], function(e) {
        "on" + e in window && t._.addEvent(window, e, function() {
            t.pageEndHandler(), t.stopHeartBeatInterval()
        })
    })
}, W.prototype.addPageSwitchListener = function() {
    var t = this;
    this._.listenPageState({
        visible: function() {
            t.pageStartHandler(), t.hiddenStatusHandler(), t.addHeartBeatInterval()
        },
        hidden: function() {
            t.url = location.href, t.title = document.title, t.pageEndHandler(), t.stopHeartBeatInterval()
        }
    })
}, W.prototype.addHeartBeatInterval = function() {
    this._.localStorage.isSupport() && this.startHeartBeatInterval()
}, W.prototype.startHeartBeatInterval = function() {
    var t = this;
    this.heartbeat_interval_timer && this.stopHeartBeatInterval();
    var e = !0;
    this.isCollectUrl(this.url) || (e = !1), this.heartbeat_interval_timer = setInterval(function() {
        e && t.saveHeartBeatData()
    }, this.heartbeat_interval_time), e && this.saveHeartBeatData("is_first_heartbeat"), this.reissueHeartBeatData()
}, W.prototype.stopHeartBeatInterval = function() {
    clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null
}, W.prototype.saveHeartBeatData = function(t) {
    var e = this.getPageLeaveProperties(),
        r = new Date;
    e.$time = r, t === "is_first_heartbeat" && (e.event_duration = 3.14);
    var n = this.sd.kit.buildData({
        type: "track",
        event: "$WebPageLeave",
        properties: e
    });
    n.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, n)
}, W.prototype.delHeartBeatData = function(t) {
    this._.localStorage.isSupport() && this._.localStorage.remove(t || this.storage_name + "-" + this.page_id)
}, W.prototype.reissueHeartBeatData = function() {
    for (var t = window.localStorage.length - 1; t >= 0; t--) {
        var e = window.localStorage.key(t);
        if (e && e !== this.storage_name + "-" + this.page_id && e.indexOf(this.storage_name + "-") === 0) {
            var r = this.sd.store.readObjectVal(e);
            this._.isObject(r) && 1 * new Date - r.time > r.heartbeat_interval_time + 5e3 && (delete r.heartbeat_interval_time, r._flush_time = new Date().getTime(), this.sd.kit.sendData(r), this.delHeartBeatData(e))
        }
    }
}, W.prototype.getPageLeaveProperties = function() {
    var t = (+new Date - this.start_time) / 1e3;
    (isNaN(t) || t < 0 || t > this.max_duration) && (t = 0), t = Number(t.toFixed(3));
    var e = this._.getReferrer(this.current_page_url),
        r = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0;
    r = Math.round(r) || 0;
    var n = {
        $title: this.title,
        $url: this._.getURL(this.url),
        $url_path: this._.getURLPath(this._.URL(this.url).pathname),
        $referrer_host: e ? this._.getHostname(e) : "",
        $referrer: e,
        $viewport_position: r
    };
    return t !== 0 && (n.event_duration = t), n = this._.extend(n, this.option.custom_props)
};
var hl = new W,
    ml = fl(hl, "PageLeave", "sdkReady"),
    vl = "1.26.3";

function yl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (bl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function bl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function wl(t, e, r) {
    return yl(t, e, r), t.plugin_version = vl, t
}
var Ki = !1,
    Sl = {
        init: function(t, e) {
            function r() {
                var n = 0,
                    i = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
                    a = {
                        $url: t._.getURL(),
                        $title: document.title,
                        $url_path: t._.getURLPath(),
                        $referrer: t._.getReferrer(null, !0)
                    };
                if (i ? (n = function(u) {
                        var d = 0;
                        return t._.isFunction(u.getEntriesByType) && (d = ((u.getEntriesByType("navigation") || [{}])[0] || {}).domContentLoadedEventEnd || 0), d
                    }(i) || function(u) {
                        var d = 0;
                        if (u.timing) {
                            var _ = u.timing;
                            _.fetchStart !== 0 && t._.isNumber(_.fetchStart) && _.domContentLoadedEventEnd !== 0 && t._.isNumber(_.domContentLoadedEventEnd) ? d = _.domContentLoadedEventEnd - _.fetchStart : t.log("performance \u6570\u636E\u83B7\u53D6\u5F02\u5E38")
                        }
                        return d
                    }(i), function(u, d) {
                        if (u.getEntries && typeof u.getEntries == "function") {
                            for (var _ = u.getEntries(), y = null, N = 0; N < _.length; N++) "transferSize" in _[N] && (y += _[N].transferSize);
                            t._.isNumber(y) && y >= 0 && y < 10737418240 && (d.$page_resource_size = Number((y / 1024).toFixed(3)))
                        }
                    }(i, a)) : t.log("\u6D4F\u89C8\u5668\u672A\u652F\u6301 performance API."), n > 0) {
                    var l = t._.isObject(e) && e.max_duration || 1800;
                    n = Number((n / 1e3).toFixed(3)), (!t._.isNumber(l) || l <= 0 || n <= l) && (a.event_duration = n)
                }
                Ki || (t.track("$WebPageLoad", a), Ki = !0), window.removeEventListener ? window.removeEventListener("load", r) : window.detachEvent && window.detachEvent("onload", r)
            }
            document.readyState == "complete" ? r() : window.addEventListener ? window.addEventListener("load", r) : window.attachEvent && window.attachEvent("onload", r)
        }
    },
    kl = wl(Sl, "PageLoad", "sdkReady");

function Pl(t, e) {
    if (t.type !== "track") return t;
    var r = e.sd,
        n = r._,
        i = r.saEvent.check,
        a = n.extend2Lev({
            properties: {}
        }, t),
        l = e.customRegister,
        u = a.properties,
        d = a.event,
        _ = {};
    return n.each(l, function(y) {
        if (n.isObject(y)) n.indexOf(y.events, d) > -1 && i({
            properties: y.properties
        }) && (_ = n.extend(_, y.properties));
        else if (n.isFunction(y)) {
            var N = y({
                event: d,
                properties: u,
                data: a
            });
            n.isObject(N) && !n.isEmptyObject(N) && i({
                properties: N
            }) && (_ = n.extend(_, N))
        }
    }), t.properties = n.extend(u, _), t
}

function He() {
    this.sd = null, this.log = window.console && window.console.log || function() {}, this.customRegister = []
}
He.prototype.init = function(t) {
    if (t) {
        this.sd = t, this._ = t._, this.log = t.log;
        var e = this;
        t.registerInterceptor("buildDataStage", {
            extendProps: {
                priority: 0,
                entry: function(r) {
                    return Pl(r, e)
                }
            }
        })
    } else this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
}, He.prototype.register = function(t) {
    this.sd ? this._.isObject(t) && this._.isArray(t.events) && t.events.length > 0 && this._.isObject(t.properties) && !this._.isEmptyObject(t.properties) ? this.customRegister.push(t) : this.log("RegisterProperties: register \u53C2\u6570\u9519\u8BEF") : this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
}, He.prototype.hookRegister = function(t) {
    this.sd ? this._.isFunction(t) ? this.customRegister.push(t) : this.log("RegisterProperties: hookRegister \u53C2\u6570\u9519\u8BEF") : this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
};
var Cl = "1.26.3";

function Ol(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Nl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Nl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Tl(t, e, r) {
    return Ol(t, e, r), t.plugin_version = Cl, t
}
He.prototype.plugin_name = "RegisterProperties";
var jl = new He,
    Il = Tl(jl),
    Al = "1.26.3";

function Dl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (xl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function xl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function $l(t, e, r) {
    return Dl(t, e, r), t.plugin_version = Al, t
}
var be, Fi, Je = window.console && window.console.log || function() {};

function El(t) {
    try {
        if (t.event !== "$pageview" && (!t.type || t.type.slice(0, 7) !== "profile")) {
            var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                r = document.documentElement.scrollHeight || 0,
                n = {
                    $page_height: Math.max(e, r) || 0
                };
            t.properties = be._.extend(t.properties || {}, n)
        }
    } catch (i) {
        Je("\u9875\u9762\u9AD8\u5EA6\u83B7\u53D6\u5F02\u5E38\u3002")
    }
    return Fi.call(be.kit, t)
}
var Ll = {
        init: function(t) {
            Je = (be = t) && be.log || Je, t && t.kit && t.kit.buildData ? (Fi = be.kit.buildData, be.kit.buildData = El, Je("RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5B8C\u6210")) : Je("RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5931\u8D25,\u5F53\u524D\u4E3Bsdk\u4E0D\u652F\u6301 RegisterPropertyPageHeight \u63D2\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u4E3Bsdk")
        }
    },
    Ul = $l(Ll, "RegisterPropertyPageHeight", "sdkReady"),
    Rl = "1.26.3";

function Hl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Jl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Jl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Bl(t, e, r) {
    return Hl(t, e, r), t.plugin_version = Rl, t
}
var qt, ql = {
        getPart: function(t) {
            var e = this.option.length;
            if (e) {
                for (var r = 0; r < e; r++)
                    if (t.indexOf(this.option[r].part_url) > -1) return !0
            }
            return !1
        },
        getPartHash: function(t) {
            var e = this.option.length;
            if (e) {
                for (var r = 0; r < e; r++)
                    if (t.indexOf(this.option[r].part_url) > -1) return this.option[r].after_hash
            }
            return !1
        },
        getCurrenId: function() {
            var t = this.store.getDistinctId() || "",
                e = this.store.getFirstId() || "";
            return this._.urlSafeBase64 && this._.urlSafeBase64.encode ? t = t ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))) : "" : this._.rot13obfs && (t = t ? this._.rot13obfs(t) : ""), encodeURIComponent(e ? "f" + t : "d" + t)
        },
        rewriteUrl: function(t, e) {
            var r = this,
                n = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(t),
                i = "";
            if (n) {
                var a, l = n[1] || "",
                    u = n[2] || "",
                    d = n[3] || "",
                    _ = "_sasdk=" + this.getCurrenId(),
                    y = function(N) {
                        var x = N.split("&"),
                            ct = [];
                        return r._.each(x, function(M) {
                            M.indexOf("_sasdk=") > -1 ? ct.push(_) : ct.push(M)
                        }), ct.join("&")
                    };
                return this.getPartHash(t) ? (a = d.indexOf("_sasdk"), i = d.indexOf("?") > -1 ? a > -1 ? l + u + "#" + d.substring(1, a) + y(d.substring(a, d.length)) : l + u + d + "&" + _ : l + u + "#" + d.substring(1) + "?" + _) : (a = u.indexOf("_sasdk"), i = /^\?(\w)+/.test(u) ? a > -1 ? l + "?" + y(u.substring(1)) + d : l + u + "&" + _ + d : l + "?" + _ + d), e && (e.href = i), i
            }
        },
        getUrlId: function() {
            var t = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
            if (this._.isArray(t) && t[1]) {
                var e = decodeURIComponent(t[1]);
                return !e || e.substring(0, 1) !== "f" && e.substring(0, 1) !== "d" || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(e) ? e = e.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(e.substring(1))) : this._.rot13defs && (e = e.substring(0, 1) + this._.rot13defs(e.substring(1)))), e
            }
            return ""
        },
        setRefferId: function(t) {
            var e = this.store.getDistinctId(),
                r = this.getUrlId();
            if (r && r !== "") {
                var n = r.substring(0, 1) === "a" || r.substring(0, 1) === "d";
                (r = r.substring(1)) !== e && (n ? (this.sd.identify(r, !0), this.store.getFirstId() && this.sd.saEvent.send({
                    original_id: r,
                    distinct_id: e,
                    type: "track_signup",
                    event: "$SignUp",
                    properties: {}
                }, null)) : this.store.getFirstId() && !t.re_login || this.sd.login(r))
            }
        },
        addListen: function() {
            var t = this,
                e = function(r) {
                    var n, i, a = r.target,
                        l = a.tagName.toLowerCase(),
                        u = a.parentNode;
                    if (l === "a" && a.href || u && u.tagName && u.tagName.toLowerCase() === "a" && u.href) {
                        l === "a" && a.href ? (n = a.href, i = a) : (n = u.href, i = u);
                        var d = t._.URL(n).protocol;
                        d !== "http:" && d !== "https:" || t.getPart(n) && t.rewriteUrl(n, i)
                    }
                };
            t._.addEvent(document, "mousedown", e), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && t._.addEvent(document, "pointerdown", e)
        },
        init: function(t, e) {
            this.sd = t, this._ = t._, this.store = t.store, this.para = t.para, this._.isObject(e) && this._.isArray(e.linker) && e.linker.length > 0 ? (this.setRefferId(e), this.addListen(), this.option = e.linker, this.option = function(r) {
                for (var n = r.length, i = [], a = 0; a < n; a++) /[A-Za-z0-9]+\./.test(r[a].part_url) && Object.prototype.toString.call(r[a].after_hash) == "[object Boolean]" ? i.push(r[a]) : t.log("linker \u914D\u7F6E\u7684\u7B2C " + (a + 1) + " \u9879\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u683C\u5F0F\uFF01");
                return i
            }(this.option)) : t.log("\u8BF7\u914D\u7F6E\u6253\u901A\u57DF\u540D\u53C2\u6570\uFF01")
        }
    },
    Ml = Bl(ql, "SiteLinker", "sdkReady"),
    Kl = "utm_source utm_medium utm_campaign utm_content utm_term",
    Fl = "1.26.3";

function Vl(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Wl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Wl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function zl(t, e, r) {
    return Vl(t, e, r), t.plugin_version = Fl, t
}
var Xl = {
        init: function(t) {
            t && !qt && (qt = t).registerInterceptor("businessStage", {
                getUtmData: {
                    priority: 0,
                    entry: function() {
                        return function() {
                            var e = Kl.split(" "),
                                r = "",
                                n = {};
                            return qt._.isArray(qt.para.source_channel) && qt.para.source_channel.length > 0 && (e = e.concat(qt.para.source_channel), e = qt._.unique(e)), qt._.each(e, function(i) {
                                (r = qt._.getQueryParam(location.href, i)).length && (n[i] = r)
                            }), n
                        }()
                    }
                }
            })
        }
    },
    Vi = zl(Xl, "Utm", "sdkAfterInitPara"),
    Gl = "1.26.3";

function Ql(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Yl(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Yl(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Zl(t, e, r) {
    return Ql(t, e, r), t.plugin_version = Gl, t
}
var rn = !1,
    nn = null,
    tu = {
        init: function(t) {
            (nn = t).disableSDK = eu, nn.enableSDK = ru, nn.getDisabled = nu
        }
    };

function eu() {
    rn = !0
}

function ru() {
    rn = !1
}

function nu() {
    return rn
}
var B, ce, Wi = Zl(tu, "DisableSDK", "sdkInitAPI"),
    iu = "1.26.3";

function au(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (su(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function su(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function ou(t, e, r) {
    return au(t, e, r), t.plugin_version = iu, t
}

function lu(t) {
    var e = t,
        r = "";
    r = B.para.debug_mode_url.indexOf("?") !== -1 ? B.para.debug_mode_url + "&" + B.kit.encodeTrackData(t) : B.para.debug_mode_url + "?" + B.kit.encodeTrackData(t), ce.ajax({
        url: r,
        type: "GET",
        cors: !0,
        header: {
            "Dry-Run": String(B.para.debug_mode_upload)
        },
        success: function(n) {
            ce.isEmptyObject(n) === !0 ? alert("debug\u6570\u636E\u53D1\u9001\u6210\u529F" + e) : alert("debug\u5931\u8D25 \u9519\u8BEF\u539F\u56E0" + JSON.stringify(n))
        }
    })
}

function uu(t, e) {
    if (B.para.debug_mode === !0) {
        var r = t.data;
        t.callback, lu(JSON.stringify(r)), e.cancellationToken.stop()
    }
    return t
}

function cu() {
    B.para.debug_mode === !0 && (B.para.debug_mode_upload = B.para.debug_mode_upload || !1, ce.isString(B.para.debug_mode_url) || (ce.isString(B.para.server_url) ? B.para.debug_mode_url = B.para.server_url.replace("sa.gif", "debug") : ce.isArray(B.para.server_url) && ce.isString(B.para.server_url[0]) ? B.para.debug_mode_url = B.para.server_url[0].replace("sa.gif", "debug") : B.para.debug_mode = !1))
}

function pu() {
    B.on("sdkInitPara", function() {
        cu()
    }), B.on("sdkAfterInitPara", function() {
        B.registerInterceptor("sendDataStage", {
            send: {
                priority: 30,
                entry: uu
            }
        })
    })
}
var lt, pe, du = {
        plugin_name: "DebugSender",
        init: function(t) {
            ce = (B = t)._, pu()
        }
    },
    zi = ou(du),
    fu = "1.26.3";

function gu(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (_u(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function _u(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function hu(t, e, r) {
    return gu(t, e, r), t.plugin_version = fu, t
}

function mu(t, e) {
    if (pe.isObject(lt.para.jsapp) && !lt.para.jsapp.isOnline && typeof lt.para.jsapp.setData == "function") {
        var r = t;
        delete r.callback, r = JSON.stringify(r), lt.para.jsapp.setData(r), e.cancellationToken.stop()
    }
    return t
}

function vu() {
    lt.on("sdkAfterInitAPI", function() {
        pe.isObject(lt.commonWays) && (lt.commonWays.setOnlineState = yu), lt.registerInterceptor("sendDataStage", {
            send: {
                priority: 40,
                entry: mu
            }
        })
    })
}

function yu(t) {
    if (t === !0 && pe.isObject(lt.para.jsapp) && typeof lt.para.jsapp.getData == "function") {
        lt.para.jsapp.isOnline = !0;
        var e = lt.para.jsapp.getData();
        pe.isArray(e) && e.length > 0 && pe.each(e, function(r) {
            pe.isJSONString(r) && lt.kit.sendData(JSON.parse(r))
        })
    } else lt.para.jsapp.isOnline = !1
}
var ut, Zt, bu = {
        plugin_name: "JsappSender",
        init: function(t) {
            pe = (lt = t)._, vu()
        }
    },
    Xi = hu(bu),
    wu = "1.26.3";

function Su(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (ku(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function ku(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Pu(t, e, r) {
    return Su(t, e, r), t.plugin_version = wu, t
}
var pr = null;

function Cu(t, e) {
    return !ut.para.app_js_bridge && ut.para.batch_send && Zt.localStorage.isSupport() && localStorage.length < ut.para.batch_send.storage_length && (pr.add(t.data), e.cancellationToken.stop()), t
}

function Ou() {
    var t = {
        datasend_timeout: 6e3,
        send_interval: 6e3,
        storage_length: 200
    };
    Zt.localStorage.isSupport() && Zt.isSupportCors() && typeof localStorage == "object" ? ut.para.batch_send === !0 ? ut.para.batch_send = Zt.extend({}, t) : typeof ut.para.batch_send == "object" && (ut.para.batch_send = Zt.extend({}, t, ut.para.batch_send)) : ut.para.batch_send = !1
}

function Nu() {
    ut.on("sdkInitPara", function() {
        Ou()
    }), ut.on("sdkAfterInitPara", function() {
        !ut.para.app_js_bridge && ut.para.batch_send && Zt.localStorage.isSupport() && (pr || (pr = new Zt.BatchSend), pr.batchInterval(), ut.registerInterceptor("sendDataStage", {
            send: {
                priority: 100,
                entry: Cu
            }
        }))
    })
}
var Mt, te, Tu = {
        plugin_name: "BatchSender",
        init: function(t) {
            Zt = (ut = t)._, Nu()
        }
    },
    Gi = Pu(Tu),
    ju = "1.26.3";

function Iu(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Au(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Au(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Du(t, e, r) {
    return Iu(t, e, r), t.plugin_version = ju, t
}

function Qi(t) {
    new te.BeaconSend(t).start()
}

function xu(t, e) {
    var r = null,
        n = null;
    if (te.isObject(t.config) && (r = t.config.send_type, n = te.optimizeServerUrl(t.config.server_url)), (r === "beacon" || !r && Mt.para.send_type === "beacon") && te.isSupportBeaconSend()) {
        var i = n || t.server_url;
        t.server_url = i, t.data = Mt.kit.encodeTrackData(t.data), te.isArray(i) && i.length ? te.each(i, function(a) {
            t.callback = null, t.server_url = a, Qi(t)
        }) : typeof i == "string" && i !== "" ? Qi(t) : Mt.log("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01"), e.cancellationToken.stop()
    }
    return t
}

function $u() {
    Mt.para.send_type !== "beacon" || te.isSupportBeaconSend() || (Mt.para.send_type = "image")
}

function Eu() {
    Mt.on("sdkInitPara", function() {
        $u()
    }), Mt.on("sdkAfterInitPara", function() {
        Mt.registerInterceptor("sendDataStage", {
            send: {
                priority: 110,
                entry: xu
            }
        })
    })
}
var Kt, ee, Lu = {
        plugin_name: "BeaconSender",
        init: function(t) {
            te = (Mt = t)._, Eu()
        }
    },
    Yi = Du(Lu),
    Uu = "1.26.3";

function Ru(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Hu(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Hu(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function Ju(t, e, r) {
    return Ru(t, e, r), t.plugin_version = Uu, t
}

function Zi(t) {
    new ee.AjaxSend(t).start()
}

function Bu(t, e) {
    var r = null,
        n = null;
    if (ee.isObject(t.config) && (r = t.config.send_type, n = ee.optimizeServerUrl(t.config.server_url)), (r === "ajax" || !r && Kt.para.send_type === "ajax") && ee.isSupportCors()) {
        var i = n || t.server_url;
        t.server_url = i, t.data = Kt.kit.encodeTrackData(t.data), ee.isArray(i) && i.length ? ee.each(i, function(a) {
            t.callback = null, t.server_url = a, Zi(t)
        }) : typeof i == "string" && i !== "" ? Zi(t) : Kt.log("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01"), e.cancellationToken.stop()
    }
    return t
}

function qu() {
    Kt.para.send_type !== "ajax" || ee.isSupportCors() || (Kt.para.send_type = "image")
}

function Mu() {
    Kt.on("sdkInitPara", function() {
        qu()
    }), Kt.on("sdkAfterInitPara", function() {
        Kt.registerInterceptor("sendDataStage", {
            send: {
                priority: 120,
                entry: Bu
            }
        })
    })
}
var jt, we, Ku = {
        plugin_name: "AjaxSender",
        init: function(t) {
            ee = (Kt = t)._, Mu()
        }
    },
    ta = Ju(Ku),
    Fu = "1.26.3";

function Vu(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (Wu(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function Wu(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function zu(t, e, r) {
    return Vu(t, e, r), t.plugin_version = Fu, t
}

function ea(t, e) {
    var r = jt.kit.encodeTrackData(e);
    return t.indexOf("?") !== -1 ? t + "&" + r : t + "?" + r
}

function ra(t) {
    new we.ImageSend(t).start()
}

function Xu(t, e) {
    var r = null;
    we.isObject(t.config) && (r = we.optimizeServerUrl(t.config.server_url));
    var n = r || t.server_url,
        i = t.data;
    t.server_url = n, we.isArray(n) && n.length ? we.each(n, function(a) {
        a && (t.data = ea(a, i), t.callback = null, t.server_url = a, ra(t))
    }) : typeof n == "string" && n !== "" ? (t.data = ea(n, i), ra(t)) : jt.logger && jt.logger.msg("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01").level("warn").log(), e.cancellationToken.stop()
}

function Gu() {
    jt.para.send_type !== "image" && jt.para.send_type !== "ajax" && jt.para.send_type !== "beacon" && (jt.para.send_type = "image")
}

function Qu() {
    jt.on("sdkInitPara", function() {
        Gu()
    }), jt.on("sdkAfterInitPara", function() {
        jt.registerInterceptor("sendDataStage", {
            send: {
                priority: 130,
                entry: Xu
            }
        })
    })
}
var Yu = {
        plugin_name: "ImageSender",
        init: function(t) {
            we = (jt = t)._, Qu()
        }
    },
    na = zu(Yu);

function Zu(t, e, r) {
    if (e && (t.plugin_name = e), r && t.init) {
        var n = t.init;
        t.init = function(i, a) {
            if (tc(i, t, e), i.readyState && i.readyState.state >= 3 || !i.on) return l();

            function l() {
                n.call(t, i, a)
            }
            i.on(r, l)
        }
    }
    return t
}

function tc(t, e, r) {
    function n(i, a) {
        t.logger ? t.logger.msg.apply(t.logger, a).module(r + "" || "").level(i).log() : t.log && t.log.apply(t, a)
    }
    e.log = function() {
        n("log", arguments)
    }, e.warn = function() {
        n("warn", arguments)
    }, e.error = function() {
        n("error", arguments)
    }
}

function ec(t, e, r) {
    return Zu(t, e, r), t.plugin_version = Ye, t
}
var rt = null,
    yt = null,
    Be = [],
    rc = {
        init: function(t) {
            t && (yt = (rt = t)._, rt.logger && rt.logger.appendWriter(nc), rt.on && rt.on("sdkAfterInitPara", function() {
                for (var e = 0; e < Be.length; e++) aa(Be[e]);
                Be = null
            }), rt.on && rt.on("sdkInitAPI", function() {
                rt.enableLocalLog = lc, rt.disableLocalLog = uc
            }))
        }
    },
    ia = ec(rc, "ConsoleLogger");

function nc(t) {
    Be !== null ? Be.push(t) : aa(t)
}

function aa(t) {
    try {
        if (t.level === "log" && sa() || t.level === "warn" && ic() || t.level === "error" && ac()) return void sc(t)
    } catch (e) {}
}

function sa() {
    return !!sn() || rt.para.show_log === !0 || yt.isObject(rt.para.show_log) && rt.para.show_log.level === "log"
}

function ic() {
    return !!sn() || sa() || yt.isObject(rt.para.show_log) && rt.para.show_log.level === "warn"
}

function ac() {
    return !!sn() || !yt.isObject(rt.para.show_log) || rt.para.show_log.level !== "none"
}

function sc(t) {
    var e = t.content,
        r = yt.isObject(e[0]) ? yt.formatJsonString(e[0]) : e[0],
        n = oc(t);
    e[0] = n + (n.length > 0 ? ": " : "") + r;
    try {
        console && (yt.isFunction(console[t.level]) ? console[t.level].apply(console, e) : yt.isObject(console[t.level]) && console[t.level](e[0]))
    } catch (i) {}
}

function oc(t) {
    var e = "",
        r = "",
        n = rt.para.show_log;
    return yt.isObject(n) && n.show_brand === !1 || (e += t.brand), yt.isObject(n) && n.show_level === !1 || (e += (e.length > 0 ? "-" : "") + t.level), e.length > 0 && (e = "[" + e + "]"), yt.isObject(n) && n.show_module === !1 || (r = t.module), e + r
}
var an = "sensorsdata_jssdk_debug";

function lc() {
    yt.sessionStorage.isSupport() && sessionStorage.setItem(an, "true")
}

function uc() {
    yt.sessionStorage.isSupport() && sessionStorage.removeItem(an)
}

function sn() {
    return yt.sessionStorage.isSupport() && sessionStorage.getItem(an) === "true"
}
s.modules = s.modules || {};
for (var oa = [ia, go, Ii, Li, Uo, zo, Bi, Mi, ml, kl, Il, Ul, Ml, Vi, Wi, zi, Xi, Gi, Yi, ta, na], la = [ia, oo, Vi, Wi, Xi, zi, Ii, Bi, Li, Mi, Gi, Yi, ta, na], de = 0; de < oa.length; de++) {
    var Se = oa[de];
    s._.isString(Se.plugin_name) ? s.modules[Se.plugin_name] = Se : s._.isArray(Se.plugin_name) && s._.each(Se.plugin_name, function(t) {
        s.modules[t] = Se
    })
}
for (de = 0; de < la.length; de++) s.use(la[de]);
var ua = s;
try {
    typeof window.sensorsDataAnalytic201505 == "string" ? (s.para = window[sensorsDataAnalytic201505].para, s._q = window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = s, window.sensorsDataAnalytic201505 = s, s.init()) : typeof window.sensorsDataAnalytic201505 > "u" ? window.sensorsDataAnalytic201505 = s : ua = window.sensorsDataAnalytic201505
} catch (t) {
    D(t)
}
var cc = ua;
export {
    cc as
    default
};
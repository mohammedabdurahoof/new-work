! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.install = t() : e.install = t()
}(window, (function() {
    return function(e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(r, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return r
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        var r = this && this.__spreadArray || function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        };
        ! function(e) {
            var t = window;
            t.KwaiAnalyticsObject = e, t[e] = t[e] || [];
            var n = t[e];
            n.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
            var o = function(e, t) {
                e[t] = function() {
                    var n = Array.from(arguments),
                        o = r([t], n, !0);
                    e.push(o)
                }
            };
            n.methods.forEach((function(e) {
                o(n, e)
            })), n.instance = function(e) {
                var t = n._i[e] || [];
                return n.methods.forEach((function(e) {
                    o(t, e)
                })), t
            }, n.load = function(t, r) {
                n._i = n._i || {}, n._i[t] = [], n._i[t]._u = "https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js", n._t = n._t || {}, n._t[t] = +new Date, n._o = n._o || {}, n._o[t] = r || {};
                var o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.src = "https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js?sdkid=" + t + "&lib=" + e;
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i)
            }
        }("kwaiq")
    }])
}));
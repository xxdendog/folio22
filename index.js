var $aBFJ2$locomotivescroll = require("locomotive-scroll");
var $aBFJ2$three = require("three");
var $aBFJ2$threeexamplesjsmpostprocessingEffectComposerjs = require("three/examples/jsm/postprocessing/EffectComposer.js");
var $aBFJ2$threeexamplesjsmpostprocessingRenderPassjs = require("three/examples/jsm/postprocessing/RenderPass.js");
var $aBFJ2$threeexamplesjsmpostprocessingShaderPassjs = require("three/examples/jsm/postprocessing/ShaderPass.js");
var $aBFJ2$barbacore = require("@barba/core");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $e9895e288f933541$exports = {};
/*!
 * GSAP 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(t, e) {
    e($e9895e288f933541$exports);
}($e9895e288f933541$exports, function(e) {
    "use strict";
    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }
    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
    }
    function n(t) {
        return "string" == typeof t;
    }
    function o(t) {
        return "function" == typeof t;
    }
    function p(t) {
        return "number" == typeof t;
    }
    function q(t) {
        return void 0 === t;
    }
    function r(t) {
        return "object" == typeof t;
    }
    function s(t) {
        return !1 !== t;
    }
    function t() {
        return "undefined" != typeof window;
    }
    function u(t) {
        return o(t) || n(t);
    }
    function K(t) {
        return (l = mt(t, ot)) && ae;
    }
    function L(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }
    function M(t, e) {
        return !e && console.warn(t);
    }
    function N(t, e) {
        return t && (ot[t] = e) && l && (l[t] = e) || ot;
    }
    function O() {
        return 0;
    }
    function Y(t) {
        var e, i, n = t[0];
        if (r(n) || o(n) || (t = [
            t
        ]), !(e = (n._gsap || {}).harness)) {
            for(i = _t.length; (i--) && !_t[i].targetTest(n););
            e = _t[i];
        }
        for(i = t.length; i--;)t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e))) || t.splice(i, 1);
        return t;
    }
    function Z(t) {
        return t._gsap || Y(bt(t))[0]._gsap;
    }
    function $(t, e, r) {
        return (r = t[e]) && o(r) ? t[e]() : q(r) && t.getAttribute && t.getAttribute(e) || r;
    }
    function _(t, e) {
        return (t = t.split(",")).forEach(e) || t;
    }
    function aa(t) {
        return Math.round(1e5 * t) / 1e5 || 0;
    }
    function ba(t, e) {
        for(var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r;
    }
    function ca(t, e, r) {
        var i, n = p(t[1]), a = (n ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
        if (n && (o.duration = t[1]), o.parent = r, e) {
            for(i = o; r && !("immediateRender" in i);)i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
            o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
        }
        return o;
    }
    function da() {
        var t, e, r = ht.length, i = ht.slice(0);
        for(lt = {}, t = ht.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
    }
    function ea(t, e, r, i) {
        ht.length && da(), t.render(e, r, i), ht.length && da();
    }
    function fa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(st).length < 2 ? e : n(t) ? t.trim() : t;
    }
    function ga(t) {
        return t;
    }
    function ha(t, e) {
        for(var r in e)r in t || (t[r] = e[r]);
        return t;
    }
    function ia(t, e) {
        for(var r in e)r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
    }
    function ka(t, e) {
        for(var i in e)t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
        return t;
    }
    function la(t, e) {
        var r, i = {};
        for(r in t)r in e || (i[r] = t[r]);
        return i;
    }
    function ma(t) {
        var e = t.parent || E, r = t.keyframes ? ia : ha;
        if (s(t.inherit)) for(; e;)r(t, e.vars.defaults), e = e.parent || e._dp;
        return t;
    }
    function pa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev, a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
    }
    function qa(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
    }
    function ra(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0)) for(var r = t; r;)r._dirty = 1, r = r.parent;
        return t;
    }
    function ua(t) {
        return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    }
    function wa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }
    function xa(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0));
    }
    function ya(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = aa(t._dp._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), xa(t), r._dirty || ra(r, t)), t;
    }
    function za(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration()) for(r = t; r._dp;)0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -U;
        }
    }
    function Aa(t, e, r, i) {
        return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var a, s = t[i];
            if (n) for(a = e[n]; s && s[n] > a;)s = s._prev;
            s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
        }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || za(t, e), t;
    }
    function Ba(t, e) {
        return (ot.ScrollTrigger || L("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
    }
    function Ca(t, e, r, i) {
        return Nt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== At.frame ? (ht.push(t), t._lazy = [
            e,
            i
        ], 1) : void 0 : 1;
    }
    function Fa(t, e, r, i) {
        var n = t._repeat, a = aa(e) || 0, s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : aa(a * (n + 1) + t._rDelay * n) : a, s && !i ? ya(t, t._tTime = t._tDur * s) : t.parent && xa(t), r || ra(t.parent, t), t;
    }
    function Ga(t) {
        return t instanceof Bt ? ra(t) : Fa(t, t._dur);
    }
    function Ia(t, e) {
        var r, i, a = t.labels, s = t._recent || vt, o = t.duration() >= B ? s.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
    }
    function Ja(t, e) {
        return t || 0 === t ? e(t) : e;
    }
    function La(t) {
        return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t) ? t : "";
    }
    function Oa(t, e) {
        return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;
    }
    function Ra(t) {
        return t.sort(function() {
            return .5 - Math.random();
        });
    }
    function Sa(t) {
        if (o(t)) return t;
        var _ = r(t) ? t : {
            each: t
        }, c = Rt(_.ease), m = _.from || 0, g = parseFloat(_.base) || 0, v = {}, e = 0 < m && m < 1, y = isNaN(m) || e, T = _.axis, b = m, w = m;
        return n(m) ? b = w = ({
            center: .5,
            edges: .5,
            end: 1
        })[m] || 0 : !e && y && (b = m[0], w = m[1]), function(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = (r || _).length, p = v[d];
            if (!p) {
                if (!(f = "auto" === _.grid ? 0 : (_.grid || [
                    1,
                    B
                ])[1])) {
                    for(h = -B; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                    f--;
                }
                for(p = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = B, u = h = 0; u < d; u++)a = u % f - i, s = n - (u / f | 0), p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s), h < o && (h = o), o < l && (l = o);
                "random" === m && Ra(p), p.max = h - l, p.min = l, p.v = d = (parseFloat(_.amount) || parseFloat(_.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), p.b = d < 0 ? g - d : g, p.u = La(_.amount || _.each) || 0, c = c && d < 0 ? Ft(c) : c;
            }
            return d = (p[t] - p.min) / p.max || 0, aa(p.b + (c ? c(d) : d) * p.v) + p.u;
        };
    }
    function Ta(e) {
        var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : La(t));
        };
    }
    function Ua(u, t) {
        var h, l, e = tt(u);
        return !e && r(u) && (h = e = u.radius || B, u.values ? (u = bt(u.values), (l = !p(u[0])) && (h *= h)) : u = Ta(u.increment)), Ja(t, e ? o(u) ? function(t) {
            return l = u(t), Math.abs(l - t) <= h ? l : t;
        } : function(t) {
            for(var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = B, s = 0, o = u.length; o--;)(e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
            return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + La(t);
        } : Ta(u));
    }
    function Va(t, e, r, i) {
        return Ja(tt(t) ? !e : !0 === r ? (r = 0, false) : !i, function() {
            return tt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5, i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
        });
    }
    function Za(e, r, t) {
        return Ja(t, function(t) {
            return e[~~r(t)];
        });
    }
    function ab(t) {
        for(var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));)i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? st : et), s += t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a);
    }
    function db(t, e, r) {
        var i, n, a, s = t.labels, o = B;
        for(i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a;
    }
    function fb(t) {
        return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t;
    }
    function kb(t, e, r) {
        return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * kt + .5 | 0;
    }
    function lb(t, e, r) {
        var i, n, a, s, o, u, h, l, f, d, _ = t ? p(t) ? [
            t >> 16,
            t >> 8 & kt,
            t & kt
        ] : 0 : Ot.black;
        if (!_) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]) _ = Ot[t];
            else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), _ = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                t >> 8 & kt,
                t & kt
            ];
            else if ("hsl" === t.substr(0, 3)) {
                if (_ = d = t.match(et), e) {
                    if (~t.indexOf("=")) return _ = t.match(rt), r && _.length < 4 && (_[3] = 1), _;
                } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = kb(s + 1 / 3, i, n), _[1] = kb(s, i, n), _[2] = kb(s - 1 / 3, i, n);
            } else _ = t.match(et) || Ot.transparent;
            _ = _.map(Number);
        }
        return e && !d && (i = _[0] / kt, n = _[1] / kt, a = _[2] / kt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _;
    }
    function mb(t) {
        var r = [], i = [], n = -1;
        return t.split(Mt).forEach(function(t) {
            var e = t.match(it) || [];
            r.push.apply(r, e), i.push(n += e.length + 1);
        }), r.c = i, r;
    }
    function nb(t, e, r) {
        var i, n, a, s, o = "", u = (t + o).match(Mt), h = e ? "hsla(" : "rgba(", l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
            return (t = lb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
        }), r && (a = mb(t), (i = r.c).join(o) !== a.c.join(o))) for(s = (n = t.replace(Mt, "1").split(it)).length - 1; l < s; l++)o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n) for(s = (n = t.split(Mt)).length - 1; l < s; l++)o += n[l] + u[l];
        return o + n[s];
    }
    function qb(t) {
        var e, r = t.join(" ");
        if (Mt.lastIndex = 0, Mt.test(r)) return e = Ct.test(r), t[1] = nb(t[1], e), t[0] = nb(t[0], e, mb(t[1])), !0;
    }
    function zb(t) {
        var e = (t + "").split("("), r = Dt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [
            function _parseObjectInString(t) {
                for(var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++)r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i, s = r.substr(e + 1).trim();
                return n;
            }(e[1])
        ] : (function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
        })(t).split(",").map(fa)) : Dt._CE && St.test(t) ? Dt._CE("", t) : r;
    }
    function Bb(t, e) {
        for(var r, i = t._first; i;)i instanceof Bt ? Bb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Bb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
    }
    function Db(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t);
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return _(t, function(t) {
            for(var e in Dt[t] = ot[t] = a, Dt[n = t.toLowerCase()] = r, a)Dt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Dt[t + "." + e] = a[e];
        }), a;
    }
    function Eb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
        };
    }
    function Fb(r, t, e) {
        function ul(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1;
        }
        var i = 1 <= t ? t : 1, n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1), a = n / V * (Math.asin(1 / i) || 0), s = "out" === r ? ul : "in" === r ? function(t) {
            return 1 - ul(1 - t);
        } : Eb(ul);
        return n = V / n, s.config = function(t, e) {
            return Fb(r, t, e);
        }, s;
    }
    function Gb(e, r) {
        function Cl(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Cl : "in" === e ? function(t) {
            return 1 - Cl(1 - t);
        } : Eb(Cl);
        return t.config = function(t) {
            return Gb(e, t);
        }, t;
    }
    var E, i, a, h, l, f, d, c, m, g, v, y, T, b, w, x, k, C, A, P, D, S, z, F, R, j = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, I = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, B = 1e8, U = 1 / B, V = 2 * Math.PI, X = V / 4, G = 0, J = Math.sqrt, Q = Math.cos, W = Math.sin, H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}, tt = Array.isArray, et = /(?:-?\.?\d|\.)+/gi, rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, at = /[+-]=-?[\.\d]+/, st = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ot = {}, ut = {}, ht = [], lt = {}, ft = {}, dt = {}, pt = 30, _t = [], ct = "", mt = function _merge(t, e) {
        for(var r in e)t[r] = e[r];
        return t;
    }, gt = function _animationCycle(t, e) {
        return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    }, vt = {
        _start: 0,
        endTime: O
    }, yt = function _clamp(t, e, r) {
        return r < t ? t : e < r ? e : r;
    }, Tt = [].slice, bt = function toArray(t, e) {
        return !n(t) || e || !a && Pt() ? tt(t) ? function _flatten(t, e, r) {
            return void 0 === r && (r = []), t.forEach(function(t) {
                return n(t) && !e || Oa(t, 1) ? r.push.apply(r, bt(t)) : r.push(t);
            }) || r;
        }(t, e) : Oa(t) ? Tt.call(t, 0) : t ? [
            t
        ] : [] : Tt.call(h.querySelectorAll(t), 0);
    }, wt = function mapRange(e, t, r, i, n) {
        var a = t - e, s = i - r;
        return Ja(n, function(t) {
            return r + ((t - e) / a * s || 0);
        });
    }, xt = function _callback(t, e, r) {
        var i, n, a = t.vars, s = a[e];
        if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && da(), i ? s.apply(n, i) : s.call(n);
    }, kt = 255, Ot = {
        aqua: [
            0,
            kt,
            kt
        ],
        lime: [
            0,
            kt,
            0
        ],
        silver: [
            192,
            192,
            192
        ],
        black: [
            0,
            0,
            0
        ],
        maroon: [
            128,
            0,
            0
        ],
        teal: [
            0,
            128,
            128
        ],
        blue: [
            0,
            0,
            kt
        ],
        navy: [
            0,
            0,
            128
        ],
        white: [
            kt,
            kt,
            kt
        ],
        olive: [
            128,
            128,
            0
        ],
        yellow: [
            kt,
            kt,
            0
        ],
        orange: [
            kt,
            165,
            0
        ],
        gray: [
            128,
            128,
            128
        ],
        purple: [
            128,
            0,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        red: [
            kt,
            0,
            0
        ],
        pink: [
            kt,
            192,
            203
        ],
        cyan: [
            0,
            kt,
            kt
        ],
        transparent: [
            kt,
            kt,
            kt,
            0
        ]
    }, Mt = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for(t in Ot)e += "|" + t + "\\b";
        return new RegExp(e + ")", "gi");
    }(), Ct = /hsl[a]?\(/, At = (x = Date.now, k = 500, C = 33, A = x(), P = A, S = D = 1e3 / 240, T = {
        time: 0,
        frame: 0,
        tick: function tick() {
            qk(!0);
        },
        deltaRatio: function deltaRatio(t) {
            return b / (1e3 / (t || 60));
        },
        wake: function wake() {
            f && (!a && t() && (i = a = window, h = i.document || {}, ot.gsap = ae, (i.gsapVersions || (i.gsapVersions = [])).push(ae.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function(t) {
                return setTimeout(t, S - 1e3 * T.time + 1 | 0);
            }, m = 1, qk(2));
        },
        sleep: function sleep() {
            (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;
        },
        lagSmoothing: function lagSmoothing(t, e) {
            k = t || 1e8, C = Math.min(e, k, 0);
        },
        fps: function fps(t) {
            D = 1e3 / (t || 240), S = 1e3 * T.time + D;
        },
        add: function add(t) {
            z.indexOf(t) < 0 && z.push(t), Pt();
        },
        remove: function remove(t) {
            var e;
            ~(e = z.indexOf(t)) && z.splice(e, 1) && e <= w && w--;
        },
        _listeners: z = []
    }), Pt = function _wake() {
        return !m && At.wake();
    }, Dt = {}, St = /^[\d.\-M][\d.\-,\s]/, zt = /["']/g, Ft = function _invertEase(e) {
        return function(t) {
            return 1 - e(1 - t);
        };
    }, Rt = function _parseEase(t, e) {
        return t && (o(t) ? t : Dt[t] || zb(t)) || e;
    };
    function qk(t) {
        var e, r, i, n, a = x() - P, s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (P += a) - A) - S) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, S += e + (D <= e ? 4 : D - e), r = 1), s || (g = v(qk)), r) for(w = 0; w < z.length; w++)z[w](i, b, n, t);
    }
    function Tl(t) {
        return t < R ? F * t * t : t < .7272727272727273 ? F * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? F * (t -= 2.25 / 2.75) * t + .9375 : F * Math.pow(t - 2.625 / 2.75, 2) + .984375;
    }
    _("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Db(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r);
        } : function(t) {
            return t;
        }, function(t) {
            return 1 - Math.pow(1 - t, r);
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
        });
    }), Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn, Db("Elastic", Fb("in"), Fb("out"), Fb()), F = 7.5625, R = 1 / 2.75, Db("Bounce", function(t) {
        return 1 - Tl(1 - t);
    }, Tl), Db("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }), Db("Circ", function(t) {
        return -(J(1 - t * t) - 1);
    }), Db("Sine", function(t) {
        return 1 === t ? 1 : 1 - Q(t * X);
    }), Db("Back", Gb("in"), Gb("out"), Gb()), Dt.SteppedEase = Dt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0;
            return function(t) {
                return ((i * yt(0, .99999999, t) | 0) + n) * r;
            };
        }
    }, I.ease = Dt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return ct += t + "," + t + "Params,";
    });
    var Et, It = function GSCache(t, e) {
        this.id = G++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Qt;
    }, Lt = ((Et = Animation.prototype).delay = function delay(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, Et.duration = function duration(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, Et.totalDuration = function totalDuration(t) {
        return arguments.length ? (this._dirty = 0, Fa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Et.totalTime = function totalTime(t, e) {
        if (Pt(), !arguments.length) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for(ya(this, t); r.parent;)r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Aa(this._dp, this, this._start - this._delay);
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ea(this, t, e)), this;
    }, Et.time = function time(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }, Et.totalProgress = function totalProgress(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Et.progress = function progress(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Et.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
    }, Et.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -U ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts, function _recacheAncestors(t) {
            for(var e = t.parent; e && e.parent;)e._dirty = 1, e.totalDuration(), e = e.parent;
            return t;
        }(this.totalTime(yt(-this._delay, this._tDur, e), !0));
    }, Et.paused = function paused(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= U) && Math.abs(this._zTime) !== U))), this) : this._ps;
    }, Et.startTime = function startTime(t) {
        if (arguments.length) {
            this._start = t;
            var e = this.parent || this._dp;
            return !e || !e._sort && this.parent || Aa(e, this, t - this._delay), this;
        }
        return this._start;
    }, Et.endTime = function endTime(t) {
        return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, Et.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;
    }, Et.globalTime = function globalTime(t) {
        for(var e = this, r = arguments.length ? t : e.rawTime(); e;)r = e._start + r / (e._ts || 1), e = e._dp;
        return r;
    }, Et.repeat = function repeat(t) {
        return arguments.length ? (this._repeat = t, Ga(this)) : this._repeat;
    }, Et.repeatDelay = function repeatDelay(t) {
        return arguments.length ? (this._rDelay = t, Ga(this)) : this._rDelay;
    }, Et.yoyo = function yoyo(t) {
        return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, Et.seek = function seek(t, e) {
        return this.totalTime(Ia(this, t), s(e));
    }, Et.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
    }, Et.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, Et.reverse = function reverse(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, Et.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
    }, Et.resume = function resume() {
        return this.paused(!1);
    }, Et.reversed = function reversed(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), this) : this._rts < 0;
    }, Et.invalidate = function invalidate() {
        return this._initted = 0, this._zTime = -U, this;
    }, Et.isActive = function isActive() {
        var t, e = this.parent || this._dp, r = this._start;
        return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U));
    }, Et.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, Et.then = function then(t) {
        var i = this;
        return new Promise(function(e) {
            function jn() {
                var t = i.then;
                i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
            }
            var r = o(t) ? t : ga;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? jn() : i._prom = jn;
        });
    }, Et.kill = function kill() {
        fb(this);
    }, Animation);
    function Animation(t, e) {
        var r = t.parent || E;
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Fa(this, +t.duration, 1, 1), this.data = t.data, m || At.wake(), r && Aa(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
    }
    ha(Lt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Bt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && za(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger), r;
        }
        _inheritsLoose(Timeline, i);
        var t = Timeline.prototype;
        return t.to = function to(t, e, r, i) {
            return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this;
        }, t.from = function from(t, e, r, i) {
            return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this;
        }, t.fromTo = function fromTo(t, e, r, i, n) {
            return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this;
        }, t.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Xt(t, e, Ia(this, r), 1), this;
        }, t.call = function call(t, e, r) {
            return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r));
        }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Xt(t, r, Ia(this, n)), this;
        }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
            return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);
        }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
            return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);
        }, t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, p, _, c = this._time, m = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, v = this !== E && m - U < t && 0 <= t ? m : t < U ? 0 : t, y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
                if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat && (p = this._yoyo, o = g + this._rDelay, i = aa(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), p && 1 & s && (i = g - i, _ = 1), s !== d && !this._lock)) {
                    var T = p && 1 & d, b = T === (p && 1 & s);
                    if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && xt(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), c !== this._time || u != !this._ts) return this;
                    if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -0.0001, this.render(c, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                    Bb(this, _);
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                    var i;
                    if (e < r) for(i = t._first; i && i._start <= r;){
                        if (!i._dur && "isPause" === i.data && i._start > e) return i;
                        i = i._next;
                    }
                    else for(i = t._last; i && i._start >= r;){
                        if (!i._dur && "isPause" === i.data && i._start < e) return i;
                        i = i._prev;
                    }
                }(this, aa(c), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), c || !i || e || xt(this, "onStart"), c <= i && 0 <= t) for(n = this._first; n;){
                    if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                        if (n.parent !== this) return this.render(t, e, r);
                        if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                            h = 0, a && (v += this._zTime = -U);
                            break;
                        }
                    }
                    n = a;
                }
                else {
                    n = this._last;
                    for(var w = t < 0 ? t : i; n;){
                        if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = w ? -U : U);
                                break;
                            }
                        }
                        n = a;
                    }
                }
                if (h && !e && (this.pause(), h.render(c <= i ? 0 : -U)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
                this._onUpdate && !e && xt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !c || !v && !c || (xt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
            }
            return this;
        }, t.add = function add(t, e) {
            var r = this;
            if (p(e) || (e = Ia(this, e)), !(t instanceof Lt)) {
                if (tt(t)) return t.forEach(function(t) {
                    return r.add(t, e);
                }), this;
                if (n(t)) return this.addLabel(t, e);
                if (!o(t)) return this;
                t = Xt.delayedCall(0, t);
            }
            return this !== t ? Aa(this, t, e) : this;
        }, t.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -B);
            for(var n = [], a = this._first; a;)a._start >= i && (a instanceof Xt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n;
        }, t.getById = function getById(t) {
            for(var e = this.getChildren(1, 1, 1), r = e.length; r--;)if (e[r].vars.id === t) return e[r];
        }, t.remove = function remove(t) {
            return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));
        }, t.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = aa(At.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
        }, t.addLabel = function addLabel(t, e) {
            return this.labels[t] = Ia(this, e), this;
        }, t.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this;
        }, t.addPause = function addPause(t, e, r) {
            var i = Xt.delayedCall(0, e || O, r);
            return i.data = "isPause", this._hasPause = 1, Aa(this, i, Ia(this, t));
        }, t.removePause = function removePause(t) {
            var e = this._first;
            for(t = Ia(this, t); e;)e._start === t && "isPause" === e.data && qa(e), e = e._next;
        }, t.killTweensOf = function killTweensOf(t, e, r) {
            for(var i = this.getTweensOf(t, r), n = i.length; n--;)qt !== i[n] && i[n].kill(t, e);
            return this;
        }, t.getTweensOf = function getTweensOf(t, e) {
            for(var r, i = [], n = bt(t), a = this._first, s = p(e); a;)a instanceof Xt ? ba(a._targets, n) && (s ? (!qt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
            return i;
        }, t.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r = this, i = Ia(r, t), n = e.startAt, a = e.onStart, s = e.onStartParams, o = Xt.to(r, ha(e, {
                ease: "none",
                lazy: !1,
                time: i,
                overwrite: "auto",
                duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || U,
                onStart: function onStart() {
                    r.pause();
                    var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                    o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0), a && a.apply(o, s || []);
                }
            }));
            return o;
        }, t.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ha({
                startAt: {
                    time: Ia(this, t)
                }
            }, r));
        }, t.recent = function recent() {
            return this._recent;
        }, t.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t));
        }, t.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), db(this, Ia(this, t), 1);
        }, t.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U);
        }, t.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for(var i, n = this._first, a = this.labels; n;)n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e) for(i in a)a[i] >= r && (a[i] += t);
            return ra(this);
        }, t.invalidate = function invalidate() {
            var t = this._first;
            for(this._lock = 0; t;)t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this);
        }, t.clear = function clear(t) {
            void 0 === t && (t = !0);
            for(var e, r = this._first; r;)e = r._next, this.remove(r), r = e;
            return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this);
        }, t.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0, a = this, s = a._last, o = B;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for(i = a.parent; s;)e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Aa(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Fa(a, a === E && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
            }
            return a._tDur;
        }, Timeline.updateRoot = function updateRoot(t) {
            if (E._ts && (ea(E, wa(t, E)), d = At.frame), At.frame >= pt) {
                pt += j.autoSleep || 120;
                var e = E._first;
                if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
                    for(; e && !e._ts;)e = e._next;
                    e || At.sleep();
                }
            }
        }, Timeline;
    }(Lt);
    ha(Bt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function Nb(t, e, i, a, s, u) {
        var h, l, f, d;
        if (ft[t] && !1 !== (h = new ft[t]).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
            if (o(t) && (t = jt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || tt(t) || H(t)) return n(t) ? jt(t, s, e, i, a) : t;
            var u, h = {};
            for(u in t)h[u] = jt(t[u], s, e, i, a);
            return h;
        }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c)) for(f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;)f[h._props[d]] = l;
        return h;
    }
    var qt, Yt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
        o(i) && (i = i(a || 0, t, s));
        var f, d = t[e], p = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d, _ = o(d) ? l ? Jt : Zt : Gt;
        if (n(i) && (~i.indexOf("random(") && (i = ab(i)), "=" === i.charAt(1) && (i = parseFloat(p) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (La(p) || 0))), p !== i) return isNaN(p * i) ? (d || e in t || L(e, i), (function _addComplexStringPropTween(t, e, r, i, n, a, s) {
            var o, u, h, l, f, d, p, _, c = new ie(this._pt, t, e, 0, 1, Ht, null, n), m = 0, g = 0;
            for(c.b = r, c.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = ab(i)), a && (a(_ = [
                r,
                i
            ], t, e), r = _[0], i = _[1]), u = r.match(nt) || []; o = nt.exec(i);)l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
                _next: c._pt,
                p: f || 1 === g ? f : ",",
                s: d,
                c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
                m: h && h < 4 ? Math.round : 0
            }, m = nt.lastIndex);
            return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (at.test(i) || p) && (c.e = 0), this._pt = c;
        }).call(this, t, e, p, i, _, h || j.stringFilter, l)) : (f = new ie(this._pt, t, e, +p || 0, i - (p || 0), "boolean" == typeof d ? $t : Wt, 0, _), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
    }, Nt = function _initTween(t, e) {
        var r, i, n, a, o, u, h, l, f, d, p, _, c, m = t.vars, g = m.ease, v = m.startAt, y = m.immediateRender, T = m.lazy, b = m.onUpdate, w = m.onUpdateParams, x = m.callbackScope, k = m.runBackwards, O = m.yoyoEase, M = m.keyframes, C = m.autoRevert, A = t._dur, P = t._startAt, D = t._targets, S = t.parent, z = S && "nested" === S.data ? S.parent._targets : D, F = "auto" === t._overwrite, R = t.timeline;
        if (!R || M && g || (g = "none"), t._ease = Rt(g, I.ease), t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), !R) {
            if (_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop], r = la(m, ut), P && P.render(-1, !0).kill(), v) {
                if (qa(t._startAt = Xt.set(D, ha({
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0
                }, v))), y) {
                    if (0 < e) C || (t._startAt = 0);
                    else if (A && !(e < 0 && P)) return void (e && (t._zTime = e));
                }
            } else if (k && A) {
                if (P) C || (t._startAt = 0);
                else if (e && (y = !1), n = ha({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y && s(T),
                    immediateRender: y,
                    stagger: 0,
                    parent: S
                }, r), _ && (n[l.prop] = _), qa(t._startAt = Xt.set(D, n)), y) {
                    if (!e) return;
                } else _initTween(t._startAt, U);
            }
            for(t._pt = 0, T = A && s(T) || T && !A, i = 0; i < D.length; i++){
                if (h = (o = D[i])._gsap || Y(D)[i]._gsap, t._ptLookup[i] = d = {}, lt[h.id] && ht.length && da(), p = z === D ? i : z.indexOf(o), l && !1 !== (f = new l).init(o, _ || r, t, p, z) && (t._pt = a = new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                    d[t] = a;
                }), f.priority && (u = 1)), !l || _) for(n in r)ft[n] && (f = Nb(n, r, t, p, o, z)) ? f.priority && (u = 1) : d[n] = a = Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter);
                t._op && t._op[i] && t.kill(o, t._op[i]), F && t._pt && (qt = t, E.killTweensOf(o, d, t.globalTime(0)), c = !t.parent, qt = 0), t._pt && T && (lt[h.id] = 1);
            }
            u && re(t), t._onInit && t._onInit(t);
        }
        t._from = !R && !!m.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !c;
    }, jt = function _parseFuncOrString(t, e, r, i, a) {
        return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? ab(t) : t;
    }, Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Xt = function(S) {
        function Tween(t, e, i, n) {
            var a;
            "number" == typeof e && (i.duration = e, e = i, i = null);
            var o, h, l, f, d, _, c, m, g = (a = S.call(this, n ? e : ma(e), i) || this).vars, v = g.duration, y = g.delay, T = g.immediateRender, b = g.stagger, w = g.overwrite, x = g.keyframes, k = g.defaults, C = g.scrollTrigger, A = g.yoyoEase, P = a.parent, D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [
                t
            ] : bt(t);
            if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
                if (e = a.vars, (o = a.timeline = new Bt({
                    data: "nested",
                    defaults: k || {}
                })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
                    ease: "none"
                }), x.forEach(function(t) {
                    return o.to(D, t, ">");
                });
                else {
                    if (f = D.length, c = b ? Sa(b) : O, r(b)) for(d in b)~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
                    for(h = 0; h < f; h++){
                        for(d in l = {}, e)Vt.indexOf(d) < 0 && (l[d] = e[d]);
                        l.stagger = 0, A && (l.yoyoEase = A), m && mt(l, m), _ = D[h], l.duration = +jt(v, _assertThisInitialized(a), h, _, D), l.delay = (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(_, l, c(h, _, D));
                    }
                    o.duration() ? v = y = 0 : a.timeline = 0;
                }
                v || a.duration(v = o.duration());
            } else a.timeline = 0;
            return !0 === w && (qt = _assertThisInitialized(a), E.killTweensOf(D), qt = 0), P && za(P, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(P._time) && s(T) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent);
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -U, a.render(Math.max(0, -y))), C && Ba(_assertThisInitialized(a), C), a;
        }
        _inheritsLoose(Tween, S);
        var t = Tween.prototype;
        return t.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time, p = this._tDur, _ = this._dur, c = p - U < t && 0 <= t ? p : t < U ? 0 : t;
            if (_) {
                if (c !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = c, l = this.timeline, this._repeat) {
                        if (s = _ + this._rDelay, i = aa(c % s), c === p ? (a = this._repeat, i = _) : ((a = ~~(c / s)) && a === c / s && (i = _, a--), _ < i && (i = _)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = _ - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this;
                        a !== o && (l && this._yEase && Bb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0));
                    }
                    if (!this._initted) {
                        if (Ca(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
                        if (_ !== this._dur) return this.render(t, e, r);
                    }
                    for(this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / _), this._from && (this.ratio = h = 1 - h), !i || d || e || xt(this, "onStart"), n = this._pt; n;)n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), xt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && xt(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && _ || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !c && !d || (xt(this, c === p ? "onComplete" : "onReverseComplete", !0), !this._prom || c < p && 0 < this.timeScale() || this._prom()));
                }
            } else !function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s = t.ratio, o = e < 0 || !e && s && !t._start && t._zTime > U && !t._dp._lock || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data ? 0 : 1, u = t._rDelay, h = 0;
                if (u && t._repeat && (h = yt(0, t._tDur, e), gt(h, u) !== (a = gt(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), o !== s || i || t._zTime === U || !e && t._zTime) {
                    if (!t._initted && Ca(t, e, i, r)) return;
                    for(a = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || xt(t, "onStart"), n = t._pt; n;)n.r(o, n.d), n = n._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && xt(t, "onUpdate"), h && t._repeat && !r && t.parent && xt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (xt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                } else t._zTime || (t._zTime = e);
            }(this, t, e, r);
            return this;
        }, t.targets = function targets() {
            return this._targets;
        }, t.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), S.prototype.invalidate.call(this);
        }, t.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return fb(this);
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)._first || fb(this), this.parent && r !== this.timeline.totalDuration() && Fa(this, this._dur * this.timeline._tDur / r, 0, 1), this;
            }
            var i, a, s, o, u, h, l, f = this._targets, d = t ? bt(t) : f, p = this._ptLookup, c = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                for(var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                return r < 0;
            }(f, d)) return "all" === e && (this._pt = 0), fb(this);
            for(i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function(t) {
                return u[t] = 1;
            }), e = u), e = function _addAliasesToVars(t, e) {
                var r, i, n, a, s = t[0] ? Z(t[0]).harness : 0, o = s && s.aliases;
                if (!o) return e;
                for(i in r = mt({}, e), o)if ((i in r)) for(n = (a = o[i].split(",")).length; n--;)r[a[n]] = r[i];
                return r;
            }(f, e)), l = f.length; l--;)if (~d.indexOf(f[l])) for(u in a = p[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && c && fb(this), this;
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r);
        }, Tween.from = function from(t, e) {
            return new Tween(t, ca(arguments, 1));
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            });
        }, Tween.fromTo = function fromTo(t, e, r) {
            return new Tween(t, ca(arguments, 2));
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return E.killTweensOf(t, e, r);
        }, Tween;
    }(Lt);
    ha(Xt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), _("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Xt[r] = function() {
            var t = new Bt, e = Tt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
        };
    });
    function Yb(t, e, r) {
        return t.setAttribute(e, r);
    }
    function ec(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    }
    var Gt = function _setterPlain(t, e, r) {
        return t[e] = r;
    }, Zt = function _setterFunc(t, e, r) {
        return t[e](r);
    }, Jt = function _setterFuncWithParam(t, e, r, i) {
        return t[e](i.fp, r);
    }, Qt = function _getSetter(t, e) {
        return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt;
    }, Wt = function _renderPlain(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    }, $t = function _renderBoolean(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    }, Ht = function _renderComplexString(t, e) {
        var r = e._pt, i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
            for(; r;)i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c;
        }
        e.set(e.t, e.p, i, e);
    }, Kt = function _renderPropTweens(t, e) {
        for(var r = e._pt; r;)r.r(t, r.d), r = r._next;
    }, te = function _addPluginModifier(t, e, r, i) {
        for(var n, a = this._pt; a;)n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    }, ee = function _killPropTweensOf(t) {
        for(var e, r, i = this._pt; i;)r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
        return !e;
    }, re = function _sortPropTweensByPriority(t) {
        for(var e, r, i, n, a = t._pt; a;){
            for(e = a._next, r = i; r && r.pr > a.pr;)r = r._next;
            (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
        }
        t._pt = i;
    }, ie = (PropTween.prototype.modifier = function modifier(t, e, r) {
        this.mSet = this.mSet || this.set, this.set = ec, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Wt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
    }
    _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ut[t] = 1;
    }), ot.TweenMax = ot.TweenLite = Xt, ot.TimelineLite = ot.TimelineMax = Bt, E = new Bt({
        sortChildren: !1,
        defaults: I,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), j.stringFilter = qb;
    var ne = {
        registerPlugin: function registerPlugin() {
            for(var t = arguments.length, e = new Array(t), r = 0; r < t; r++)e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name, r = o(t), i = e && !r && t.init ? function() {
                        this._props = [];
                    } : t, n = {
                        init: O,
                        render: Kt,
                        add: Yt,
                        kill: ee,
                        modifier: te,
                        rawVars: 0
                    }, a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: Qt,
                        aliases: {},
                        register: 0
                    };
                    if (Pt(), t !== i) {
                        if (ft[e]) return;
                        ha(i, ha(la(t, n), a)), mt(i.prototype, mt(n, la(t, a))), ft[i.prop = e] = i, t.targetTest && (_t.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
                    }
                    N(e, i), t.register && t.register(ae, i, ie);
                }(t);
            });
        },
        timeline: function timeline(t) {
            return new Bt(t);
        },
        getTweensOf: function getTweensOf(t, e) {
            return E.getTweensOf(t, e);
        },
        getProperty: function getProperty(i, t, e, r) {
            n(i) && (i = bt(i)[0]);
            var a = Z(i || {}).get, s = e ? ga : fa;
            return "native" === e && (e = ""), i ? t ? s((ft[t] && ft[t].get || a)(i, t, e, r)) : function(t, e, r) {
                return s((ft[t] && ft[t].get || a)(i, t, e, r));
            } : i;
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = bt(r)).length) {
                var n = r.map(function(t) {
                    return ae.quickSetter(t, e, i);
                }), a = n.length;
                return function(t) {
                    for(var e = a; e--;)n[e](t);
                };
            }
            r = r[0] || {};
            var s = ft[e], o = Z(r), u = o.harness && (o.harness.aliases || {})[e] || e, h = s ? function(t) {
                var e = new s;
                c._pt = 0, e.init(r, i ? t + i : t, c, 0, [
                    r
                ]), e.render(1, e), c._pt && Kt(1, c);
            } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1);
            };
        },
        isTweening: function isTweening(t) {
            return 0 < E.getTweensOf(t, !0).length;
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {});
        },
        config: function config(t) {
            return ka(j, t || {});
        },
        registerEffect: function registerEffect(t) {
            var n = t.name, i = t.effect, e = t.plugins, a = t.defaults, s = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.");
            }), dt[n] = function(t, e, r) {
                return i(bt(t), ha(e || {}, a), r);
            }, s && (Bt.prototype[n] = function(t, e, i) {
                return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i);
            });
        },
        registerEase: function registerEase(t, e) {
            Dt[t] = Rt(e);
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Rt(t, e) : Dt;
        },
        getById: function getById(t) {
            return E.getById(t);
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Bt(t);
            for(n.smoothChildTiming = s(t.smoothChildTiming), E.remove(n), n._dp = 0, n._time = n._tTime = E._time, r = E._first; r;)i = r._next, !e && !r._dur && r instanceof Xt && r.vars.onComplete === r._targets[0] || Aa(n, r, r._start - r._delay), r = i;
            return Aa(E, n, 0), n;
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return tt(e) ? Za(e, wrap(0, e.length), t) : Ja(r, function(t) {
                    return (i + (t - e) % i) % i + e;
                });
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e, n = 2 * i;
                return tt(e) ? Za(e, wrapYoyo(0, e.length - 1), t) : Ja(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
                });
            },
            distribute: Sa,
            random: Va,
            snap: Ua,
            normalize: function normalize(t, e, r) {
                return wt(t, e, 0, 1, r);
            },
            getUnit: La,
            clamp: function clamp(e, r, t) {
                return Ja(t, function(t) {
                    return yt(e, r, t);
                });
            },
            splitColor: lb,
            toArray: bt,
            mapRange: wt,
            pipe: function pipe() {
                for(var t = arguments.length, e = new Array(t), r = 0; r < t; r++)e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t);
                    }, t);
                };
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || La(t));
                };
            },
            interpolate: function interpolate(e, r, t, i) {
                var a = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r;
                };
                if (!a) {
                    var s, o, u, h, l, f = n(e), d = {};
                    if (!0 === t && (i = 1) && (t = null), f) e = {
                        p: e
                    }, r = {
                        p: r
                    };
                    else if (tt(e) && !tt(r)) {
                        for(u = [], h = e.length, l = h - 2, o = 1; o < h; o++)u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e);
                        }, t = r;
                    } else i || (e = mt(tt(e) ? [] : {}, e));
                    if (!u) {
                        for(s in r)Yt.call(d, e, s, "get", r[s]);
                        a = function func(t) {
                            return Kt(t, d) || (f ? e.p : e);
                        };
                    }
                }
                return Ja(t, a);
            },
            shuffle: Ra
        },
        install: K,
        effects: dt,
        ticker: At,
        updateRoot: Bt.updateRoot,
        plugins: ft,
        globalTimeline: E,
        core: {
            PropTween: ie,
            globals: N,
            Tween: Xt,
            Timeline: Bt,
            Animation: Lt,
            getCache: Z,
            _removeLinkedListItem: pa
        }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return ne[t] = Xt[t];
    }), At.add(Bt.updateRoot), c = ne.to({}, {
        duration: 0
    });
    function ic(t, e) {
        for(var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;)r = r._next;
        return r;
    }
    function kc(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, i, e) {
                e._onInit = function(t) {
                    var e, r;
                    if (n(i) && (e = {}, _(i, function(t) {
                        return e[t] = 1;
                    }), i = e), a) {
                        for(r in e = {}, i)e[r] = a(i[r]);
                        i = e;
                    }
                    !function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for(r in e)for(i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = ic(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
                    }(t, i);
                };
            }
        };
    }
    var ae = ne.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s;
            for(a in e)(s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for(var r = e.length; r--;)this.add(t, r, t[r] || 0, e[r]);
        }
    }, kc("roundProps", Ta), kc("modifiers"), kc("snap", Ua)) || ne;
    Xt.version = Bt.version = ae.version = "3.5.1", f = 1, t() && Pt();
    function Vc(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Wc(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }
    function Xc(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    }
    function Yc(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : .5)) + e.u, e);
    }
    function Zc(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
    }
    function $c(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }
    function _c(t, e, r) {
        return t.style[e] = r;
    }
    function ad(t, e, r) {
        return t.style.setProperty(e, r);
    }
    function bd(t, e, r) {
        return t._gsap[e] = r;
    }
    function cd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r;
    }
    function dd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a);
    }
    function ed(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a);
    }
    function id(t, e) {
        var r = oe.createElementNS ? oe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : oe.createElement(t);
        return r.style ? r : oe.createElement(t);
    }
    function jd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && jd(t, Ue(e) || e, 1) || "";
    }
    function md() {
        (function _windowExists() {
            return "undefined" != typeof window;
        })() && window.document && (se = window, oe = se.document, ue = oe.documentElement, le = id("div") || {
            style: {}
        }, fe = id("div"), Ye = Ue(Ye), Ne = Ye + "Origin", le.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pe = !!Ue("perspective"), he = 1);
    }
    function nd(t) {
        var e, r = id("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, a = this.style.cssText;
        if (ue.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = nd;
        } catch (t1) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), ue.removeChild(r), this.style.cssText = a, e;
    }
    function od(t, e) {
        for(var r = e.length; r--;)if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    }
    function pd(e) {
        var r;
        try {
            r = e.getBBox();
        } catch (t) {
            r = nd.call(e, !0);
        }
        return r && (r.width || r.height) || e.getBBox === nd || (r = nd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +od(e, [
                "x",
                "cx",
                "x1"
            ]) || 0,
            y: +od(e, [
                "y",
                "cy",
                "y1"
            ]) || 0,
            width: 0,
            height: 0
        };
    }
    function qd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !pd(t));
    }
    function rd(t, e) {
        if (e) {
            var r = t.style;
            e in ze && e !== Ne && (e = Ye), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ie, "-$1").toLowerCase())) : r.removeAttribute(e);
        }
    }
    function sd(t, e, r, i, n, a) {
        var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
    }
    function ud(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0, h = (r + "").trim().substr((u + "").length) || "px", l = le.style, f = Le.test(e), d = "svg" === t.tagName.toLowerCase(), p = (d ? "client" : "offset") + (f ? "Width" : "Height"), _ = "px" === i, c = "%" === i;
        return i === h || !u || Ve[i] || Ve[h] ? u : ("px" === h || _ || (u = ud(t, e, r, "px")), o = t.getCTM && qd(t), c && (ze[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[p]) * 100) : (l[f ? "width" : "height"] = 100 + (_ ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== oe && a.appendChild || (a = oe.body), (s = a._gsap) && c && s.width && f && s.time === At.time ? aa(u / s.width * 100) : (!c && "%" !== h || (l.position = jd(t, "position")), a === t && (l.position = "static"), a.appendChild(le), n = le[p], a.removeChild(le), l.position = "absolute", f && c && ((s = Z(a)).time = At.time, s.width = a[p]), aa(_ ? n * u / 100 : n && u ? 100 / n * u : 0))));
    }
    function vd(t, e, r, i) {
        var n;
        return he || md(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), ze[e] && "transform" !== e ? (n = Qe(t, i), n = "transformOrigin" !== e ? n[e] : We(jd(t, Ne)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || jd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n;
    }
    function wd(t, e, r, i) {
        if (!r || "none" === r) {
            var n = Ue(e, t, 1), a = n && jd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = jd(t, "borderTopColor"));
        }
        var s, o, u, h, l, f, d, p, _, c, m, g, v = new ie(this._pt, t.style, e, 0, 1, Ht), y = 0, T = 0;
        if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = jd(t, e) || i, t.style[e] = r), qb(s = [
            r,
            i
        ]), i = s[1], u = (r = s[0]).match(it) || [], (i.match(it) || []).length) {
            for(; o = it.exec(i);)d = o[0], _ = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), c = d.substr((p + "").length), y = it.lastIndex - c.length, c || (c = c || j.units[e] || m, y === i.length && (i += c, v.e += c)), m !== c && (h = ud(t, e, f, c) || 0), v._pt = {
                _next: v._pt,
                p: _ || 1 === T ? _ : ",",
                s: h,
                c: g ? g * p : p - h,
                m: l && l < 4 ? Math.round : 0
            });
            v.c = y < i.length ? i.substring(y, i.length) : "";
        } else v.r = "display" === e && "none" === i ? $c : Zc;
        return at.test(i) && (v.e = 0), this._pt = v;
    }
    function yd(t) {
        var e = t.split(" "), r = e[0], i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = Xe[r] || r, e[1] = Xe[i] || i, e.join(" ");
    }
    function zd(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t, s = a.style, o = e.u, u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else for(n = (o = o.split(",")).length; -1 < --n;)r = o[n], ze[r] && (i = 1, r = "transformOrigin" === r ? Ne : Ye), rd(a, r);
            i && (rd(a, Ye), u && (u.svg && a.removeAttribute("transform"), Qe(a, 1), u.uncache = 1));
        }
    }
    function Dd(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }
    function Ed(t) {
        var e = jd(t, Ye);
        return Dd(e) ? Ze : e.substr(7).match(rt).map(aa);
    }
    function Fd(t, e) {
        var r, i, n, a, s = t._gsap || Z(t), o = t.style, u = Ed(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [
            (n = t.transform.baseVal.consolidate().matrix).a,
            n.b,
            n.c,
            n.d,
            n.e,
            n.f
        ]).join(",") ? Ze : u : (u !== Ze || t.offsetParent || t === ue || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, ue.appendChild(t)), u = Ed(t), n ? o.display = n : rd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : ue.removeChild(t))), e && 6 < u.length ? [
            u[0],
            u[1],
            u[4],
            u[5],
            u[12],
            u[13]
        ] : u);
    }
    function Gd(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap, l = n || Fd(t, !0), f = h.xOrigin || 0, d = h.yOrigin || 0, p = h.xOffset || 0, _ = h.yOffset || 0, c = l[0], m = l[1], g = l[2], v = l[3], y = l[4], T = l[5], b = e.split(" "), w = parseFloat(b[0]) || 0, x = parseFloat(b[1]) || 0;
        r ? l !== Ze && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = pd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = p + (y * c + T * g) - y, h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Ne] = "0px 0px", a && (sd(a, h, "xOrigin", f, w), sd(a, h, "yOrigin", d, x), sd(a, h, "xOffset", p, h.xOffset), sd(a, h, "yOffset", _, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
    }
    function Jd(t, e, r) {
        var i = La(e);
        return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i;
    }
    function Qd(t, e, r, i, a, s) {
        var o, u, h = 360, l = n(a), f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1), d = s ? f * s : f - i, p = i + d + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ie(t._pt, e, r, i, d, Wc), u.e = p, u.u = "deg", t._props.push(r), u;
    }
    function Rd(t, e, r) {
        var i, n, a, s, o, u, h, l = fe.style, f = r._gsap;
        for(n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Ye] = e, oe.body.appendChild(fe), i = Qe(fe, 1), ze)(a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ie(t._pt, f, n, o, u - o, Vc), t._pt.u = h || 0, t._props.push(n));
        oe.body.removeChild(fe);
    }
    var se, oe, ue, he, le, fe, de, pe, _e = Dt.Power0, ce = Dt.Power1, me = Dt.Power2, ge = Dt.Power3, ve = Dt.Power4, ye = Dt.Linear, Te = Dt.Quad, be = Dt.Cubic, we = Dt.Quart, xe = Dt.Quint, ke = Dt.Strong, Oe = Dt.Elastic, Me = Dt.Back, Ce = Dt.SteppedEase, Ae = Dt.Bounce, Pe = Dt.Sine, De = Dt.Expo, Se = Dt.Circ, ze = {}, Fe = 180 / Math.PI, Re = Math.PI / 180, Ee = Math.atan2, Ie = /([A-Z])/g, Le = /(?:left|right|width|margin|padding|x)/i, Be = /[\s,\(]\S/, qe = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ye = "transform", Ne = Ye + "Origin", je = "O,Moz,ms,Ms,Webkit".split(","), Ue = function _checkPropPrefix(t, e, r) {
        var i = (e || le).style, n = 5;
        if (t in i && !r) return t;
        for(t = t.charAt(0).toUpperCase() + t.substr(1); (n--) && !(je[n] + t in i););
        return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
    }, Ve = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Xe = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Ge = {
        clearProps: function clearProps(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var a = t._pt = new ie(t._pt, e, r, 0, 0, zd);
                return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
            }
        }
    }, Ze = [
        1,
        0,
        0,
        1,
        0,
        0
    ], Je = {}, Qe = function _parseTransform(t, e) {
        var r = t._gsap || new It(t);
        if ("x" in r && !e && !r.uncache) return r;
        var i, n, a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T, b, w, x, k, O, M, C, A, P, D, S, z, F, R, E = t.style, I = r.scaleX < 0, L = "deg", B = jd(t, Ne) || "0";
        return i = n = a = u = h = l = f = d = p = 0, s = o = 1, r.svg = !(!t.getCTM || !qd(t)), m = Fd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), _ = r.xOrigin || 0, c = r.yOrigin || 0, m !== Ze && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Fe : 0, (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)), r.svg && (i -= _ - (_ * T + c * w), n -= c - (_ * b + c * x))) : (R = m[6], z = m[7], P = m[8], D = m[9], S = m[10], F = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(R, S)) * Fe, g && (M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g)), C = O * v + D * y, A = R * v + S * y, P = k * -y + P * v, D = O * -y + D * v, S = R * -y + S * v, F = z * -y + F * v, k = M, O = C, R = A), l = (g = Ee(-w, S)) * Fe, g && (v = Math.cos(-g), F = x * (y = Math.sin(-g)) + F * v, T = M = T * v - P * y, b = C = b * v - D * y, w = A = w * v - S * y), u = (g = Ee(b, T)) * Fe, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + R * R)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Fe : 0, p = F ? 1 / (F < 0 ? -F : F) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + L, r.rotationX = aa(h) + L, r.rotationY = aa(l) + L, r.skewX = f + L, r.skewY = d + L, r.transformPerspective = p + "px", (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? rr : pe ? er : $e, r.uncache = 0, r;
    }, We = function _firstTwoOnly(t) {
        return (t = t.split(" "))[0] + " " + t[1];
    }, $e = function _renderNon3DTransforms(t, e) {
        e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, er(t, e);
    }, He = "0deg", Ke = "0px", tr = ") ", er = function _renderCSSTransforms(t, e) {
        var r = e || this, i = r.xPercent, n = r.yPercent, a = r.x, s = r.y, o = r.z, u = r.rotation, h = r.rotationY, l = r.rotationX, f = r.skewX, d = r.skewY, p = r.scaleX, _ = r.scaleY, c = r.transformPerspective, m = r.force3D, g = r.target, v = r.zOrigin, y = "", T = "auto" === m && t && 1 !== t || !0 === m;
        if (v && (l !== He || h !== He)) {
            var b, w = parseFloat(h) * Re, x = Math.sin(w), k = Math.cos(w);
            w = parseFloat(l) * Re, b = Math.cos(w), a = Jd(g, a, x * b * -v), s = Jd(g, s, -Math.sin(w) * -v), o = Jd(g, o, k * b * -v + v);
        }
        c !== Ke && (y += "perspective(" + c + tr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ke && s === Ke && o === Ke || (y += o !== Ke || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + tr), u !== He && (y += "rotate(" + u + tr), h !== He && (y += "rotateY(" + h + tr), l !== He && (y += "rotateX(" + l + tr), f === He && d === He || (y += "skew(" + f + ", " + d + tr), 1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + tr), g.style[Ye] = y || "translate(0, 0)";
    }, rr = function _renderSVGTransforms(t, e) {
        var r, i, n, a, s, o = e || this, u = o.xPercent, h = o.yPercent, l = o.x, f = o.y, d = o.rotation, p = o.skewX, _ = o.skewY, c = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, b = o.yOffset, w = o.forceCSS, x = parseFloat(l), k = parseFloat(f);
        d = parseFloat(d), p = parseFloat(p), (_ = parseFloat(_)) && (p += _ = parseFloat(_), d += _), d || p ? (d *= Re, p *= Re, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - p) * -m, a = Math.cos(d - p) * m, p && (_ *= Re, s = Math.tan(p - _), n *= s = Math.sqrt(1 + s * s), a *= s, _ && (s = Math.tan(_), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = ud(g, "x", l, "px"), k = ud(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ye] = s);
    };
    _("padding,margin,Width,Radius", function(e, r) {
        var t = "Right", i = "Bottom", n = "Left", o = (r < 3 ? [
            "Top",
            t,
            i,
            n
        ] : [
            "Top" + n,
            "Top" + t,
            i + t,
            i + n
        ]).map(function(t) {
            return r < 2 ? e + t : "border" + t + e;
        });
        Ge[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return vd(e, t, r);
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
            }), e.init(t, s, n);
        };
    });
    var ir, nr, ar, sr = {
        name: "css",
        register: md,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType;
        },
        init: function init(t, e, r, i, n) {
            var a, s, o, u, h, l, f, d, p, _, c, m, g, v, y, T = this._props, b = t.style;
            for(f in he || md(), e)if ("autoRound" !== f && (s = e[f], !ft[f] || !Nb(f, e, r, i, t, n))) {
                if (h = typeof s, l = Ge[f], "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = ab(s)), l) l(this, t, f, s, r) && (y = 1);
                else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);
                else if ("undefined" !== h) {
                    if (a = vd(t, f), u = parseFloat(a), (_ = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in qe && ("autoAlpha" === f && (1 === u && "hidden" === vd(t, "visibility") && o && (u = 0), sd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = qe[f]).indexOf(",") && (f = f.split(",")[0])), c = f in ze) {
                        if (m || ((g = t._gsap).renderTransform || Qe(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ie(this._pt, b, Ye, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ie(this._pt, g, "scaleY", g.scaleY, _ ? _ * o : o - g.scaleY), T.push("scaleY", f), f += "X";
                        else {
                            if ("transformOrigin" === f) {
                                s = yd(s), g.svg ? Gd(t, s, 0, v, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p), sd(this, b, f, We(a), We(s)));
                                continue;
                            }
                            if ("svgOrigin" === f) {
                                Gd(t, s, 1, v, 0, this);
                                continue;
                            }
                            if (f in Je) {
                                Qd(this, g, f, u, s, _);
                                continue;
                            }
                            if ("smoothOrigin" === f) {
                                sd(this, g, "smooth", g.smooth, s);
                                continue;
                            }
                            if ("force3D" === f) {
                                g[f] = s;
                                continue;
                            }
                            if ("transform" === f) {
                                Rd(this, s, t);
                                continue;
                            }
                        }
                    } else f in b || (f = Ue(f) || f);
                    if (c || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) o = o || 0, (d = (a + "").substr((u + "").length)) !== (p = La(s) || (f in j.units ? j.units[f] : d)) && (u = ud(t, f, a, p)), this._pt = new ie(this._pt, c ? g : b, f, u, _ ? _ * o : o - u, "px" !== p || !1 === e.autoRound || c ? Vc : Yc), this._pt.u = p || 0, d !== p && (this._pt.b = a, this._pt.r = Xc);
                    else if (f in b) wd.call(this, t, f, a, s);
                    else {
                        if (!(f in t)) {
                            L(f, s);
                            continue;
                        }
                        this.add(t, f, t[f], s, i, n);
                    }
                    T.push(f);
                }
            }
            y && re(this);
        },
        get: vd,
        aliases: qe,
        getSetter: function getSetter(t, e, r) {
            var i = qe[e];
            return i && i.indexOf(",") < 0 && (e = i), e in ze && e !== Ne && (t._gsap.x || vd(t, "x")) ? r && de === r ? "scale" === e ? cd : bd : (de = r || {}, "scale" === e ? dd : ed) : t.style && !q(t.style[e]) ? _c : ~e.indexOf("-") ? ad : Qt(t, e);
        },
        core: {
            _removeProperty: rd,
            _getMatrix: Fd
        }
    };
    ae.utils.checkPrefix = Ue, ar = _((ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (nr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        ze[t] = 1;
    }), _(nr, function(t) {
        j.units[t] = "deg", Je[t] = 1;
    }), qe[ar[13]] = ir + "," + nr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]];
    }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        j.units[t] = "px";
    }), ae.registerPlugin(sr);
    var or = ae.registerPlugin(sr) || ae, ur = or.core.Tween;
    e.Back = Me, e.Bounce = Ae, e.CSSPlugin = sr, e.Circ = Se, e.Cubic = be, e.Elastic = Oe, e.Expo = De, e.Linear = ye, e.Power0 = _e, e.Power1 = ce, e.Power2 = me, e.Power3 = ge, e.Power4 = ve, e.Quad = Te, e.Quart = we, e.Quint = xe, e.Sine = Pe, e.SteppedEase = Ce, e.Strong = ke, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Xt, e.TweenMax = ur, e.default = or, e.gsap = or;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});


var $b0683c798cdb3f58$exports = {};
/*!
 * ScrollTrigger 3.6.0
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(e, t) {
    t($b0683c798cdb3f58$exports);
}($b0683c798cdb3f58$exports, function(e) {
    "use strict";
    function J(e) {
        return e;
    }
    function K() {
        return "undefined" != typeof window;
    }
    function L() {
        return Ce || K() && (Ce = window.gsap) && Ce.registerPlugin && Ce;
    }
    function M(e) {
        return !!~o.indexOf(e);
    }
    function N(e, t) {
        return ~Ve.indexOf(e) && Ve[Ve.indexOf(e) + 1][t];
    }
    function O(t, e) {
        var r = e.s, n = e.sc, o = g.indexOf(t), i = n === nt.sc ? 1 : 2;
        return ~o || (o = g.push(t) - 1), g[o + i] || (g[o + i] = N(t, r) || (M(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r];
        }));
    }
    function P(e) {
        return N(e, "getBoundingClientRect") || (M(e) ? function() {
            return ft.width = Oe.innerWidth, ft.height = Oe.innerHeight, ft;
        } : function() {
            return ot(e);
        });
    }
    function S(e, t) {
        var r = t.s, n = t.d2, o = t.d, i = t.a;
        return (r = "scroll" + n, i = N(e, r)) ? i() - P(e)()[o] : M(e) ? Math.max(_e[r], Pe[r]) - (Oe["inner" + n] || _e["client" + n] || Pe["client" + n]) : e[r] - e["offset" + n];
    }
    function T(e, t) {
        for(var r = 0; r < d.length; r += 3)t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2]);
    }
    function U(e) {
        return "string" == typeof e;
    }
    function V(e) {
        return "function" == typeof e;
    }
    function W(e) {
        return "number" == typeof e;
    }
    function X(e) {
        return "object" == typeof e;
    }
    function Y(e) {
        return V(e) && e();
    }
    function Z(r, n) {
        return function() {
            var e = Y(r), t = Y(n);
            return function() {
                Y(e), Y(t);
            };
        };
    }
    function sa(e) {
        return Oe.getComputedStyle(e);
    }
    function ua(e, t) {
        for(var r in t)r in e || (e[r] = t[r]);
        return e;
    }
    function wa(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0;
    }
    function xa(e) {
        var t, r = [], n = e.labels, o = e.duration();
        for(t in n)r.push(n[t] / o);
        return r;
    }
    function Aa(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n);
        });
    }
    function Ba(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        });
    }
    function Ca(e, t, r) {
        return e.removeEventListener(t, r);
    }
    function Ga(e, t) {
        if (U(e)) {
            var r = e.indexOf("="), n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in w ? w[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
        }
        return e;
    }
    function Ha(e, t, r, n, o, i, a) {
        var s = o.startColor, l = o.endColor, c = o.fontSize, u = o.indent, f = o.fontWeight, p = ke.createElement("div"), d = M(r) || "fixed" === N(r, "pinType"), h = -1 !== e.indexOf("scroller"), g = d ? Pe : r, v = -1 !== e.indexOf("start"), m = v ? s : l, b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + f + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return b += "position:" + (h && d ? "fixed;" : "absolute;"), !h && d || (b += (n === nt ? x : y) + ":" + (i + parseFloat(u)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p), p._offset = p["offset" + n.op.d2], C(p, 0, n, v), p;
    }
    function La() {
        return l = l || s(H);
    }
    function Ma() {
        l || (l = s(H), Ye || E("scrollStart"), Ye = He());
    }
    function Na() {
        return !Le && !r && !ke.fullscreenElement && a.restart(!0);
    }
    function Ta(e) {
        var t, r = Ce.ticker.frame, n = [], o = 0;
        if (h !== r || We) {
            for(R(); o < B.length; o += 4)(t = Oe.matchMedia(B[o]).matches) !== B[o + 3] && ((B[o + 3] = t) ? n.push(o) : R(1, B[o]) || V(B[o + 2]) && B[o + 2]());
            for(z(), o = 0; o < n.length; o++)t = n[o], Ie = B[t], B[t + 2] = B[t + 1](e);
            Ie = 0, i && F(0, 1), h = r, E("matchMedia");
        }
    }
    function Ua() {
        return Ca($, "scrollEnd", Ua) || F(!0);
    }
    function eb(e, t, r, n) {
        if (e.parentNode !== t) {
            for(var o, i = D.length, a = t.style, s = e.style; i--;)a[o = D[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y] = s[x] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[qe] = wa(e, rt) + tt, a[Ge] = wa(e, nt) + tt, a[$e] = s[Qe] = s.top = s[m] = "0", ut(n), s[qe] = s.maxWidth = r[qe], s[Ge] = s.maxHeight = r[Ge], s[$e] = r[$e], e.parentNode.insertBefore(t, e), t.appendChild(e);
        }
    }
    function hb(e) {
        for(var t = q.length, r = e.style, n = [], o = 0; o < t; o++)n.push(q[o], r[q[o]]);
        return n.t = e, n;
    }
    function kb(e, t, r, n, o, i, a, s, l, c, u, f) {
        if (V(e) && (e = e(s)), U(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ga("0" + e.substr(3), r) : 0)), W(e)) a && C(a, r, n, !0);
        else {
            V(t) && (t = t(s));
            var p, d, h, g = Be(t)[0] || Pe, v = ot(g) || {}, m = e.split(" ");
            v && (v.left || v.top) || "none" !== sa(g).display || (h = g.style.display, g.style.display = "block", v = ot(g), h ? g.style.display = h : g.style.removeProperty("display")), p = Ga(m[0], v[n.d]), d = Ga(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && C(a, d, n, r - d < 20 || a._isStart && 20 < d), r -= r - d;
        }
        if (i) {
            var b = e + r, x = i._isStart;
            f = "scroll" + n.d2, C(i, b, n, x && 20 < b || !x && (u ? Math.max(Pe[f], _e[f]) : i.parentNode[f]) <= b + 1), u && (l = ot(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + tt));
        }
        return Math.round(e);
    }
    function mb(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Pe) {
                for(o in e._stOrig = a.cssText, i = sa(e))+o || j.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n;
            } else a.cssText = e._stOrig;
            Ce.core.getCache(e).uncache = 1, t.appendChild(e);
        }
    }
    function nb(l, e) {
        function Se(e, t, r, n, o) {
            var i = Se.tween, a = t.onComplete, s = {};
            return i && i.kill(), c = Math.round(r), t[p] = e, (t.modifiers = s)[p] = function(e) {
                return (e = Math.round(f())) !== c && e !== u && 2 < Math.abs(e - c) ? (i.kill(), Se.tween = 0) : e = r + n * i.ratio + o * i.ratio * i.ratio, u = c, c = Math.round(e);
            }, t.onComplete = function() {
                Se.tween = 0, a && a.call(i);
            }, i = Se.tween = Ce.to(l, t);
        }
        var c, u, f = O(l, e), p = "_scroll" + e.p2;
        return l[p] = f, l.addEventListener("mousewheel", function() {
            return Se.tween && Se.tween.kill() && (Se.tween = 0);
        }), Se;
    }
    var Ce, i, Oe, ke, _e, Pe, o, a, s, l, Be, Ee, Ne, c, Le, Ae, u, ze, f, p, d, Re, Ue, r, Fe, Ie, h, We = 1, Ve = [], g = [], He = Date.now, v = He(), Ye = 0, De = 1, Xe = Math.abs, t = "scrollLeft", n = "scrollTop", m = "left", x = "right", y = "bottom", qe = "width", Ge = "height", Je = "Right", Ze = "Left", je = "Top", Ke = "Bottom", $e = "padding", Qe = "margin", et = "Width", b = "Height", tt = "px", rt = {
        s: t,
        p: m,
        p2: Ze,
        os: x,
        os2: Je,
        d: qe,
        d2: et,
        a: "x",
        sc: function sc(e) {
            return arguments.length ? Oe.scrollTo(e, nt.sc()) : Oe.pageXOffset || ke[t] || _e[t] || Pe[t] || 0;
        }
    }, nt = {
        s: n,
        p: "top",
        p2: je,
        os: y,
        os2: Ke,
        d: Ge,
        d2: b,
        a: "y",
        op: rt,
        sc: function sc(e) {
            return arguments.length ? Oe.scrollTo(rt.sc(), e) : Oe.pageYOffset || ke[n] || _e[n] || Pe[n] || 0;
        }
    }, ot = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== sa(e)[u] && Ce.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), n = e.getBoundingClientRect();
        return r && r.progress(0).kill(), n;
    }, it = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, at = {
        toggleActions: "play",
        anticipatePin: 0
    }, w = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, C = function _positionMarker(e, t, r, n) {
        var o = {
            display: "block"
        }, i = r[n ? "os2" : "p2"], a = r[n ? "p2" : "os2"];
        e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + et] = 1, o["border" + a + et] = 0, o[r.p] = t + "px", Ce.set(e, o);
    }, st = [], lt = {}, k = {}, _ = [], B = [], E = function _dispatch(e) {
        return k[e] && k[e].map(function(e) {
            return e();
        }) || _;
    }, A = [], z = function _revertRecorded(e) {
        for(var t = 0; t < A.length; t += 4)e && A[t + 3] !== e || (A[t].style.cssText = A[t + 1], A[t + 2].uncache = 1);
    }, R = function _revertAll(e, t) {
        var r;
        for(ze = 0; ze < st.length; ze++)r = st[ze], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));
        z(t), t || E("revert");
    }, F = function _refreshAll(e, t) {
        if (!Ye || e) {
            var r = E("refreshInit");
            for(Re && $.sort(), t || R(), ze = 0; ze < st.length; ze++)st[ze].refresh();
            for(r.forEach(function(e) {
                return e && e.render && e.render(-1);
            }), ze = st.length; ze--;)st[ze].scroll.rec = 0;
            a.pause(), E("refresh");
        } else Ba($, "scrollEnd", Ua);
    }, I = 0, ct = 1, H = function _updateAll() {
        var e = st.length, t = He(), r = 50 <= t - v, n = e && st[0].scroll();
        if (ct = n < I ? -1 : 1, I = n, r && (Ye && !Ae && 200 < t - Ye && (Ye = 0, E("scrollEnd")), Ne = v, v = t), ct < 0) {
            for(ze = e; ze--;)st[ze] && st[ze].update(0, r);
            ct = 1;
        } else for(ze = 0; ze < e; ze++)st[ze] && st[ze].update(0, r);
        l = 0;
    }, D = [
        m,
        "top",
        y,
        x,
        Qe + Ke,
        Qe + Je,
        Qe + je,
        Qe + Ze,
        "display",
        "flexShrink",
        "float",
        "zIndex"
    ], q = D.concat([
        qe,
        Ge,
        "boxSizing",
        "max" + et,
        "max" + b,
        "position",
        Qe,
        $e,
        $e + je,
        $e + Je,
        $e + Ke,
        $e + Ze
    ]), G = /([A-Z])/g, ut = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, o = e.length, i = 0;
            for((e.t._gsap || Ce.core.getCache(e.t)).uncache = 1; i < o; i += 2)r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(G, "-$1").toLowerCase());
        }
    }, ft = {
        left: 0,
        top: 0
    }, j = /(?:webkit|moz|length|cssText|inset)/i;
    rt.op = nt;
    var $ = (ScrollTrigger.prototype.init = function init(y, w) {
        if (this.progress = this.start = 0, this.vars && this.kill(1), De) {
            var d, n, l, T, C, k, _, B, E, L, A, z, e, R, F, I, H, Y, t, D, h, q, G, g, Z, v, m, r, b, x, j, o, c, K, $, Q, ee, te = (y = ua(U(y) || W(y) || y.nodeType ? {
                trigger: y
            } : y, at)).horizontal ? rt : nt, re = y.onUpdate, ne = y.toggleClass, i = y.id, oe = y.onToggle, ie = y.onRefresh, a = y.scrub, ae = y.trigger, se = y.pin, le = y.pinSpacing, ce = y.invalidateOnRefresh, ue = y.anticipatePin, s = y.onScrubComplete, u = y.onSnapComplete, fe = y.once, pe = y.snap, de = y.pinReparent, he = !a && 0 !== a, ge = Be(y.scroller || Oe)[0], f = Ce.core.getCache(ge), ve = M(ge), me = "pinType" in y ? "fixed" === y.pinType : ve || "fixed" === N(ge, "pinType"), be = [
                y.onEnter,
                y.onLeave,
                y.onEnterBack,
                y.onLeaveBack
            ], xe = he && y.toggleActions.split(" "), p = "markers" in y ? y.markers : at.markers, ye = ve ? 0 : parseFloat(sa(ge)["border" + te.p2 + et]) || 0, Se = this, we = y.onRefreshInit && function() {
                return y.onRefreshInit(Se);
            }, Te = function _getSizeFunc(e, t, r) {
                var n = r.d, o = r.d2, i = r.a;
                return (i = N(e, "getBoundingClientRect")) ? function() {
                    return i()[n];
                } : function() {
                    return (t ? Oe["inner" + o] : e["client" + o]) || 0;
                };
            }(ge, ve, te), Me = function _getOffsetsFunc(e, t) {
                return !t || ~Ve.indexOf(e) ? P(e) : function() {
                    return ft;
                };
            }(ge, ve);
            Se.media = Ie, ue *= 45, st.push(Se), Se.scroller = ge, Se.scroll = O(ge, te), C = Se.scroll(), Se.vars = y, w = w || y.animation, "refreshPriority" in y && (Re = 1), f.tweenScroll = f.tweenScroll || {
                top: nb(ge, nt),
                left: nb(ge, rt)
            }, Se.tweenTo = d = f.tweenScroll[te.p], w && (w.vars.lazy = !1, w._initted || !1 !== w.vars.immediateRender && !1 !== y.immediateRender && w.render(0, !0, !0), Se.animation = w.pause(), w.scrollTrigger = Se, (o = W(a) && a) && (j = Ce.to(w, {
                ease: "power3",
                duration: o,
                onComplete: function onComplete() {
                    return s && s(Se);
                }
            })), b = 0, i = i || w.vars.id), pe && (X(pe) || (pe = {
                snapTo: pe
            }), "scrollBehavior" in Pe.style && Ce.set(ve ? [
                Pe,
                _e
            ] : ge, {
                scrollBehavior: "auto"
            }), l = V(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return Ce.utils.snap(xa(t), e);
                };
            }(w) : "labelsDirectional" === pe.snapTo ? function _getLabelAtDirection(o) {
                return function(e, t) {
                    var r, n = xa(o);
                    if (n.sort(function(e, t) {
                        return e - t;
                    }), 0 < t.direction) {
                        for(r = 0; r < n.length; r++)if (n[r] >= e) return n[r];
                        return n.pop();
                    }
                    for(r = n.length; r--;)if (n[r] <= e) return n[r];
                    return n[0];
                };
            }(w) : Ce.utils.snap(pe.snapTo), c = pe.duration || {
                min: .1,
                max: 2
            }, c = X(c) ? Ee(c.min, c.max) : Ee(c, c), K = Ce.delayedCall(pe.delay || o / 2 || .1, function() {
                if (Math.abs(Se.getVelocity()) < 10 && !Ae) {
                    var e = w && !he ? w.totalProgress() : Se.progress, t = (e - x) / (He() - Ne) * 1e3 || 0, r = Xe(t / 2) * t / .185, n = e + r, o = Ee(0, 1, l(n, Se)), i = Se.scroll(), a = Math.round(_ + o * R), s = d.tween;
                    if (i <= B && _ <= i && a !== i) {
                        if (s && !s._initted && s.data <= Math.abs(a - i)) return;
                        d(a, {
                            duration: c(Xe(.185 * Math.max(Xe(n - e), Xe(o - e)) / t / .05 || 0)),
                            ease: pe.ease || "power3",
                            data: Math.abs(a - i),
                            onComplete: function onComplete() {
                                b = x = w && !he ? w.totalProgress() : Se.progress, u && u(Se);
                            }
                        }, i, r * R, a - i - r * R);
                    }
                } else Se.isActive && K.restart(!0);
            }).pause()), i && (lt[i] = Se), ae = Se.trigger = Be(ae || se)[0], se = !0 === se ? ae : Be(se)[0], U(ne) && (ne = {
                targets: ae,
                className: ne
            }), se && (!1 === le || le === Qe || (le = !(!le && "flex" === sa(se.parentNode).display) && $e), Se.pin = se, !1 !== y.force3D && Ce.set(se, {
                force3D: !0
            }), (n = Ce.core.getCache(se)).spacer ? F = n.pinState : (n.spacer = Y = ke.createElement("div"), Y.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = F = hb(se)), Se.spacer = Y = n.spacer, r = sa(se), g = r[le + te.os2], D = Ce.getProperty(se), h = Ce.quickSetter(se, te.a, tt), eb(se, Y, r), H = hb(se)), p && (e = X(p) ? ua(p, it) : it, A = Ha("scroller-start", i, ge, te, e, 0), z = Ha("scroller-end", i, ge, te, e, 0, A), t = A["offset" + te.op.d2], E = Ha("start", i, ge, te, e, t), L = Ha("end", i, ge, te, e, t), me || (function _makePositionable(e) {
                e.style.position = "absolute" === sa(e).position ? "absolute" : "relative";
            }(ve ? Pe : ge), Ce.set([
                A,
                z
            ], {
                force3D: !0
            }), v = Ce.quickSetter(A, te.a, tt), m = Ce.quickSetter(z, te.a, tt))), Se.revert = function(e) {
                var t = !1 !== e || !Se.enabled, r = Le;
                t !== T && (t && (Q = Math.max(Se.scroll(), Se.scroll.rec || 0), $ = Se.progress, ee = w && w.progress()), E && [
                    E,
                    L,
                    A,
                    z
                ].forEach(function(e) {
                    return e.style.display = t ? "none" : "block";
                }), t && (Le = 1), Se.update(t), Le = r, se && (t ? function _swapPinOut(e, t, r) {
                    if (ut(r), e.parentNode === t) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                    }
                }(se, Y, F) : de && Se.isActive || eb(se, Y, sa(se), Z)), T = t);
            }, Se.refresh = function(e) {
                if (!Le && Se.enabled) {
                    if (se && e && Ye) Ba(ScrollTrigger, "scrollEnd", Ua);
                    else {
                        Le = 1, j && j.pause(), ce && w && w.progress(0).invalidate(), T || Se.revert();
                        for(var t, r, n, o, i, a, s, l, c, u = Te(), f = Me(), p = S(ge, te), d = 0, h = 0, g = y.end, v = y.endTrigger || ae, m = y.start || (0 !== y.start && ae ? se ? "0 0" : "0 100%" : 0), b = ae && Math.max(0, st.indexOf(Se)) || 0, x = b; x--;)!(s = st[x].pin) || s !== ae && s !== se || st[x].revert();
                        for(_ = kb(m, ae, u, te, Se.scroll(), E, A, Se, f, ye, me, p) || (se ? -0.001 : 0), V(g) && (g = g(Se)), U(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (U(m) ? m.split(" ")[0] : "") + g : (d = Ga(g.substr(2), u), g = U(m) ? m : _ + d, v = ae)), B = Math.max(_, kb(g || (v ? "100% 0" : p), v, u, te, Se.scroll() + d, L, z, Se, f, ye, me, p)) || -0.001, R = B - _ || (_ -= .01) && .001, d = 0, x = b; x--;)(s = (a = st[x]).pin) && a.start - a._pinPush < _ && (t = a.end - a.start, s === ae && (d += t), s === se && (h += t));
                        if (_ += d, B += d, Se._pinPush = h, E && d && ((t = {})[te.a] = "+=" + d, Ce.set([
                            E,
                            L
                        ], t)), se) t = sa(se), o = te === nt, n = Se.scroll(), q = parseFloat(D(te.a)) + h, !p && 1 < B && ((ve ? Pe : ge).style["overflow-" + te.a] = "scroll"), eb(se, Y, t), H = hb(se), r = ot(se, !0), l = me && O(ge, o ? rt : nt)(), le && ((Z = [
                            le + te.os2,
                            R + h + tt
                        ]).t = Y, (x = le === $e ? wa(se, te) + R + h : 0) && Z.push(te.d, x + tt), ut(Z), me && Se.scroll(Q)), me && ((i = {
                            top: r.top + (o ? n - _ : l) + tt,
                            left: r.left + (o ? l : n - _) + tt,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[qe] = i.maxWidth = Math.ceil(r.width) + tt, i[Ge] = i.maxHeight = Math.ceil(r.height) + tt, i[Qe] = i[Qe + je] = i[Qe + Je] = i[Qe + Ke] = i[Qe + Ze] = "0", i[$e] = t[$e], i[$e + je] = t[$e + je], i[$e + Je] = t[$e + Je], i[$e + Ke] = t[$e + Ke], i[$e + Ze] = t[$e + Ze], I = function _copyState(e, t, r) {
                            for(var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                            return o.t = e.t, o;
                        }(F, i, de)), w ? (c = w._initted, Ue(1), w.progress(1, !0), G = D(te.a) - q + R + h, R !== G && I.splice(I.length - 2, 2), w.progress(0, !0), c || w.invalidate(), Ue(0)) : G = R;
                        else if (ae && Se.scroll()) for(r = ae.parentNode; r && r !== Pe;)r._pinOffset && (_ -= r._pinOffset, B -= r._pinOffset), r = r.parentNode;
                        for(x = 0; x < b; x++)!(a = st[x].pin) || a !== ae && a !== se || st[x].revert(!1);
                        Se.start = _, Se.end = B, (C = k = Se.scroll()) < Q && Se.scroll(Q), Se.revert(!1), Le = 0, w && he && w._initted && w.progress(ee, !0).render(w.time(), !0, !0), $ !== Se.progress && (j && w.totalProgress($, !0), Se.progress = $, Se.update()), se && le && (Y._pinOffset = Math.round(Se.progress * G)), ie && ie(Se);
                    }
                }
            }, Se.getVelocity = function() {
                return (Se.scroll() - k) / (He() - Ne) * 1e3 || 0;
            }, Se.update = function(e, t) {
                var r, n, o, i, a, s = Se.scroll(), l = e ? 0 : (s - _) / R, c = l < 0 ? 0 : 1 < l ? 1 : l || 0, u = Se.progress;
                if (t && (k = C, C = s, pe && (x = b, b = w && !he ? w.totalProgress() : c)), ue && !c && se && !Le && !We && Ye && _ < s + (s - k) / (He() - Ne) * ue && (c = 1e-4), c !== u && Se.enabled) {
                    if (i = (a = (r = Se.isActive = !!c && c < 1) != (!!u && u < 1)) || !!c != !!u, Se.direction = u < c ? 1 : -1, Se.progress = c, he || (!j || Le || We ? w && w.totalProgress(c, !!Le) : (j.vars.totalProgress = c, j.invalidate().restart())), se) {
                        if (e && le && (Y.style[le + te.os2] = g), me) {
                            if (i) {
                                if (o = !e && u < c && s < B + 1 && s + 1 >= S(ge, te), de) {
                                    if (e || !r && !o) mb(se, Y);
                                    else {
                                        var f = ot(se, !0), p = s - _;
                                        mb(se, Pe, f.top + (te === nt ? p : 0) + tt, f.left + (te === nt ? 0 : p) + tt);
                                    }
                                }
                                ut(r || o ? I : H), G !== R && c < 1 && r || h(q + (1 !== c || o ? 0 : G));
                            }
                        } else h(q + G * c);
                    }
                    !pe || d.tween || Le || We || K.restart(!0), ne && (a || fe && c && (c < 1 || !Fe)) && Be(ne.targets).forEach(function(e) {
                        return e.classList[r || fe ? "add" : "remove"](ne.className);
                    }), !re || he || e || re(Se), i && !Le ? (n = c && !u ? 0 : 1 === c ? 1 : 1 === u ? 2 : 3, he && (o = !a && "none" !== xe[n + 1] && xe[n + 1] || xe[n], w && ("complete" === o || "reset" === o || o in w) && ("complete" === o ? w.pause().totalProgress(1) : "reset" === o ? w.restart(!0).pause() : w[o]()), re && re(Se)), !a && Fe || (oe && a && oe(Se), be[n] && be[n](Se), fe && (1 === c ? Se.kill(!1, 1) : be[n] = 0), a || be[n = 1 === c ? 1 : 3] && be[n](Se))) : he && re && !Le && re(Se);
                }
                m && (v(s + (A._isFlipped ? 1 : 0)), m(s));
            }, Se.enable = function() {
                Se.enabled || (Se.enabled = !0, Ba(ge, "resize", Na), Ba(ge, "scroll", Ma), we && Ba(ScrollTrigger, "refreshInit", we), w && w.add ? Ce.delayedCall(.01, function() {
                    return _ || B || Se.refresh();
                }) && (R = .01) && (_ = B = 0) : Se.refresh());
            }, Se.disable = function(e, t) {
                if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || j && j.pause(), Q = 0, n && (n.uncache = 1), we && Ca(ScrollTrigger, "refreshInit", we), K && (K.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !ve)) {
                    for(var r = st.length; r--;)if (st[r].scroller === ge && st[r] !== Se) return;
                    Ca(ge, "resize", Na), Ca(ge, "scroll", Ma);
                }
            }, Se.kill = function(e, t) {
                Se.disable(e, t), i && delete lt[i];
                var r = st.indexOf(Se);
                st.splice(r, 1), r === ze && 0 < ct && ze--, w && (w.scrollTrigger = null, e && w.render(-1), t || w.kill()), E && [
                    E,
                    L,
                    A,
                    z
                ].forEach(function(e) {
                    return e.parentNode.removeChild(e);
                }), n && (n.uncache = 1);
            }, Se.enable();
        } else this.update = this.refresh = this.kill = J;
    }, ScrollTrigger.register = function register(e) {
        if (!i && (Ce = e || L(), K() && window.document && (Oe = window, ke = document, _e = ke.documentElement, Pe = ke.body), Ce && (Be = Ce.utils.toArray, Ee = Ce.utils.clamp, Ue = Ce.core.suppressOverwrites || J, Ce.core.globals("ScrollTrigger", ScrollTrigger), Pe))) {
            s = Oe.requestAnimationFrame || function(e) {
                return setTimeout(e, 16);
            }, Ba(Oe, "mousewheel", Ma), o = [
                Oe,
                ke,
                _e,
                Pe
            ], Ba(ke, "scroll", Ma);
            var t, r = Pe.style, n = r.borderTop;
            r.borderTop = "1px solid #000", t = ot(Pe), nt.m = Math.round(t.top + nt.sc()) || 0, rt.m = Math.round(t.left + rt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(La, 200), Ce.delayedCall(.5, function() {
                return We = 0;
            }), Ba(ke, "touchcancel", J), Ba(Pe, "touchstart", J), Aa(Ba, ke, "pointerdown,touchstart,mousedown", function() {
                return Ae = 1;
            }), Aa(Ba, ke, "pointerup,touchend,mouseup", function() {
                return Ae = 0;
            }), u = Ce.utils.checkPrefix("transform"), q.push(u), i = He(), a = Ce.delayedCall(.2, F).pause(), d = [
                ke,
                "visibilitychange",
                function() {
                    var e = Oe.innerWidth, t = Oe.innerHeight;
                    ke.hidden ? (f = e, p = t) : f === e && p === t || Na();
                },
                ke,
                "DOMContentLoaded",
                F,
                Oe,
                "load",
                function() {
                    return Ye || F();
                },
                Oe,
                "resize",
                Na
            ], T(Ba);
        }
        return i;
    }, ScrollTrigger.defaults = function defaults(e) {
        for(var t in e)at[t] = e[t];
    }, ScrollTrigger.kill = function kill() {
        De = 0, st.slice(0).forEach(function(e) {
            return e.kill(1);
        });
    }, ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (Fe = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(La, t), "autoRefreshEvents" in e && (T(Ca) || T(Ba, e.autoRefreshEvents || "none"), r = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = Be(e)[0], n = g.indexOf(r), o = M(r);
        ~n && g.splice(n, o ? 6 : 2), o ? Ve.unshift(Oe, t, Pe, t, _e, t) : Ve.unshift(r, t);
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, o, i;
        for(r in e)n = B.indexOf(r), o = e[r], "all" === (Ie = r) ? o() : (t = Oe.matchMedia(r)) && (t.matches && (i = o()), ~n ? (B[n + 1] = Z(B[n + 1], o), B[n + 2] = Z(B[n + 2], i)) : (n = B.length, B.push(r, o, i), t.addListener ? t.addListener(Ta) : t.addEventListener("change", Ta)), B[n + 3] = t.matches), Ie = 0;
        return B;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (B.length = 0), 0 <= (e = B.indexOf(e)) && B.splice(e, 4);
    }, ScrollTrigger);
    function ScrollTrigger(e, t) {
        i || ScrollTrigger.register(Ce) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
    }
    $.version = "3.6.0", $.saveStyles = function(e) {
        return e ? Be(e).forEach(function(e) {
            if (e && e.style) {
                var t = A.indexOf(e);
                0 <= t && A.splice(t, 4), A.push(e, e.style.cssText, Ce.core.getCache(e), Ie);
            }
        }) : A;
    }, $.revert = function(e, t) {
        return R(!e, t);
    }, $.create = function(e, t) {
        return new $(e, t);
    }, $.refresh = function(e) {
        return e ? Na() : F(!0);
    }, $.update = H, $.maxScroll = function(e, t) {
        return S(e, t ? rt : nt);
    }, $.getScrollFunc = function(e, t) {
        return O(Be(e)[0], t ? rt : nt);
    }, $.getById = function(e) {
        return lt[e];
    }, $.getAll = function() {
        return st.slice(0);
    }, $.isScrolling = function() {
        return !!Ye;
    }, $.addEventListener = function(e, t) {
        var r = k[e] || (k[e] = []);
        ~r.indexOf(t) || r.push(t);
    }, $.removeEventListener = function(e, t) {
        var r = k[e], n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1);
    }, $.batch = function(e, t) {
        function qi(e, t) {
            var r = [], n = [], o = Ce.delayedCall(i, function() {
                t(r, n), r = [], n = [];
            }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
            };
        }
        var r, n = [], o = {}, i = t.interval || .016, a = t.batchMax || 1e9;
        for(r in t)o[r] = "on" === r.substr(0, 2) && V(t[r]) && "onRefreshInit" !== r ? qi(0, t[r]) : t[r];
        return V(a) && (a = a(), Ba($, "refresh", function() {
            return a = t.batchMax();
        })), Be(e).forEach(function(e) {
            var t = {};
            for(r in o)t[r] = o[r];
            t.trigger = e, n.push($.create(t));
        }), n;
    }, $.sort = function(e) {
        return st.sort(e || function(e, t) {
            return -1000000 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1000000 * (t.vars.refreshPriority || 0));
        });
    }, L() && Ce.registerPlugin($), e.ScrollTrigger = $, e.default = $;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});



var $6725e7185c197e18$export$2e2bcd8739ae039 = smoothScroll = new (0, ($parcel$interopDefault($aBFJ2$locomotivescroll)))({
    el: document.querySelector(".smooth__scroll"),
    smooth: true,
    touchMultiplier: 3,
    tablet: {
        smooth: true
    },
    smartphone: {
        smooth: true
    }
});
smoothScroll.on("scroll", (0, (/*@__PURE__*/$parcel$interopDefault($b0683c798cdb3f58$exports))).update);
(0, (/*@__PURE__*/$parcel$interopDefault($b0683c798cdb3f58$exports))).scrollerProxy(".smooth__scroll", {
    scrollTop (value) {
        return arguments.length ? smoothScroll.scrollTo(value, 0, 0) : smoothScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect () {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    fixedMarkers: true,
    pinType: document.querySelector(".smooth__scroll").style.transform ? "transform" : "fixed"
});
(0, (/*@__PURE__*/$parcel$interopDefault($b0683c798cdb3f58$exports))).addEventListener("refresh", ()=>smoothScroll.update());
(0, (/*@__PURE__*/$parcel$interopDefault($b0683c798cdb3f58$exports))).refresh();
const $6725e7185c197e18$export$6e3361ef130d64af = ()=>{
    smoothScroll.on("scroll", ()=>{
        if (!document.querySelector("#target")) {
            let scrollY = smoothScroll.scroll.instance.scroll.y;
            let menu = document.querySelector(".menu");
            if (scrollY > 10) menu.classList.add("hide");
            else menu.classList.remove("hide");
        }
    });
};
$6725e7185c197e18$export$6e3361ef130d64af();



var $b62019425584a982$exports = {};
/*!
 * CustomEase 3.7.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(e, t) {
    t($b62019425584a982$exports);
}($b62019425584a982$exports, function(e) {
    "use strict";
    function m(e) {
        return Math.round(1e5 * e) / 1e5 || 0;
    }
    var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, Y = Math.PI / 180, k = Math.sin, B = Math.cos, F = Math.abs, J = Math.sqrt;
    function arcToSegment(e, t, n, s, a, r, i, o, h) {
        if (e !== o || t !== h) {
            n = F(n), s = F(s);
            var u = a % 360 * Y, f = B(u), c = k(u), l = Math.PI, g = 2 * l, x = (e - o) / 2, d = (t - h) / 2, m = f * x + c * d, p = -c * x + f * d, y = m * m, M = p * p, v = y / (n * n) + M / (s * s);
            1 < v && (n = J(v) * n, s = J(v) * s);
            var C = n * n, E = s * s, b = (C * E - C * M - E * y) / (C * M + E * y);
            b < 0 && (b = 0);
            var w = (r === i ? -1 : 1) * J(b), P = n * p / s * w, S = -s * m / n * w, N = f * P - c * S + (e + o) / 2, D = c * P + f * S + (t + h) / 2, T = (m - P) / n, V = (p - S) / s, _ = (-m - P) / n, q = (-p - S) / s, A = T * T + V * V, R = (V < 0 ? -1 : 1) * Math.acos(T / J(A)), G = (T * q - V * _ < 0 ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));
            isNaN(G) && (G = l), !i && 0 < G ? G -= g : i && G < 0 && (G += g), R %= g, G %= g;
            var L, O = Math.ceil(F(G) / (g / 4)), j = [], z = G / O, I = 4 / 3 * k(z / 2) / (1 + B(z / 2)), H = f * n, Q = c * n, Z = c * -s, U = f * s;
            for(L = 0; L < O; L++)m = B(a = R + L * z), p = k(a), T = B(a += z), V = k(a), j.push(m - I * p, p + I * m, T + I * V, V - I * T, T, V);
            for(L = 0; L < j.length; L += 2)m = j[L], p = j[L + 1], j[L] = m * H + p * Z + N, j[L + 1] = m * Q + p * U + D;
            return j[L - 2] = o, j[L - 1] = h, j;
        }
    }
    function stringToRawPath(e) {
        function db(e, t, n, s) {
            f = (n - e) / 3, c = (s - t) / 3, o.push(e + f, t + c, n - f, s - c, n, s);
        }
        var t, n, s, a, r, i, o, h, u, f, c, l, g, x, d, m = (e + "").replace(w, function(e) {
            var t = +e;
            return t < 1e-4 && -0.0001 < t ? 0 : t;
        }).match(b) || [], p = [], y = 0, M = 0, v = m.length, C = 0, E = "ERROR: malformed path: " + e;
        if (!e || !isNaN(m[0]) || isNaN(m[1])) return console.log(E), p;
        for(t = 0; t < v; t++)if (g = r, isNaN(m[t]) ? i = (r = m[t].toUpperCase()) !== m[t] : t--, s = +m[t + 1], a = +m[t + 2], i && (s += y, a += M), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? --p.length : C += o.length), y = h = s, M = u = a, o = [
            s,
            a
        ], p.push(o), t += 2, r = "L";
        else if ("C" === r) i || (y = M = 0), (o = o || [
            0,
            0
        ]).push(s, a, y + 1 * m[t + 3], M + 1 * m[t + 4], y += 1 * m[t + 5], M += 1 * m[t + 6]), t += 6;
        else if ("S" === r) f = y, c = M, "C" !== g && "S" !== g || (f += y - o[o.length - 4], c += M - o[o.length - 3]), i || (y = M = 0), o.push(f, c, s, a, y += 1 * m[t + 3], M += 1 * m[t + 4]), t += 4;
        else if ("Q" === r) f = y + 2 / 3 * (s - y), c = M + 2 / 3 * (a - M), i || (y = M = 0), y += 1 * m[t + 3], M += 1 * m[t + 4], o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M), t += 4;
        else if ("T" === r) f = y - o[o.length - 4], c = M - o[o.length - 3], o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a), t += 2;
        else if ("H" === r) db(y, M, y = s, M), t += 1;
        else if ("V" === r) db(y, M, y, M = s + (i ? M - y : 0)), t += 1;
        else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a), "L" === r && (t += 2)), y = s, M = a;
        else if ("A" === r) {
            if (x = m[t + 4], d = m[t + 5], f = m[t + 6], c = m[t + 7], n = 7, 1 < x.length && (x.length < 3 ? (c = f, f = d, n--) : (c = d, f = x.substr(2), n -= 2), d = x.charAt(1), x = x.charAt(0)), l = arcToSegment(y, M, +m[t + 1], +m[t + 2], +m[t + 3], +x, +d, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c), t += n, l) for(n = 0; n < l.length; n++)o.push(l[n]);
            y = o[o.length - 2], M = o[o.length - 1];
        } else console.log(E);
        return (t = o.length) < 6 ? (p.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), p.totalPoints = C + t, p;
    }
    function p() {
        return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M;
    }
    function q() {
        (M = p()) ? (M.registerEase("_CE", n.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
    }
    function s(e) {
        return ~~(1e3 * e + (e < 0 ? -0.5 : .5)) / 1e3;
    }
    function x(e, t, n, s, a, r, i, o, h, u, f) {
        var c, l = (e + n) / 2, g = (t + s) / 2, d = (n + a) / 2, m = (s + r) / 2, p = (a + i) / 2, y = (r + o) / 2, M = (l + d) / 2, v = (g + m) / 2, C = (d + p) / 2, E = (m + y) / 2, b = (M + C) / 2, w = (v + E) / 2, P = i - e, S = o - t, N = Math.abs((n - i) * S - (s - o) * P), D = Math.abs((a - i) * S - (r - o) * P);
        return u || (u = [
            {
                x: e,
                y: t
            },
            {
                x: i,
                y: o
            }
        ], f = 1), u.splice(f || u.length - 1, 0, {
            x: b,
            y: w
        }), h * (P * P + S * S) < (N + D) * (N + D) && (c = u.length, x(e, t, l, g, M, v, b, w, h, u, f), x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))), u;
    }
    var M, a, t, y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, v = /[cLlsSaAhHvVtTqQ]/g, n = ((t = CustomEase.prototype).setData = function setData(e, t) {
        t = t || {};
        var n, s, a, r, i, o, h, u, f, c = (e = e || "0,0,1,1").match(y), l = 1, g = [], d = [], m = t.precision || 1, p = m <= 1;
        if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]), 4 === (n = c.length)) c.unshift(0, 0), c.push(1, 1), n = 8;
        else if ((n - 2) % 6) throw "Invalid CustomEase";
        for(0 == +c[0] && 1 == +c[n - 2] || function _normalize(e, t, n) {
            n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
            var s, a = -1 * e[0], r = -n, i = e.length, o = 1 / (+e[i - 2] + a), h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function _findMinimum(e) {
                var t, n = e.length, s = 1e20;
                for(t = 1; t < n; t += 6)+e[t] < s && (s = +e[t]);
                return s;
            }(e) + r : +e[i - 1] + r);
            for(h = h ? 1 / h : -o, s = 0; s < i; s += 2)e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h;
        }(c, t.height, t.originY), this.segment = c, r = 2; r < n; r += 6)s = {
            x: +c[r - 2],
            y: +c[r - 1]
        }, a = {
            x: +c[r + 4],
            y: +c[r + 5]
        }, g.push(s, a), x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);
        for(n = g.length, r = 0; r < n; r++)h = g[r], u = g[r - 1] || h, (h.x > u.x || u.y !== h.y && u.x === h.x || h === u) && h.x <= 1 ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);
        if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
            for(r = 0; r < n; r++)f = r * i, h.nx < f && (h = g[++o]), s = h.y + (f - h.x) / h.cx * h.cy, d[r] = {
                x: f,
                cx: i,
                y: s,
                cy: 0,
                nx: 9
            }, r && (d[r - 1].cy = s - d[r - 1].y);
            d[n - 1].cy = g[g.length - 1].y - s;
        } else {
            for(r = 0; r < n; r++)h.nx < r * i && (h = g[++o]), d[r] = h;
            o < g.length - 1 && (d[r - 1] = g[g.length - 2]);
        }
        return this.ease = function(e) {
            var t = d[e * n | 0] || d[n - 1];
            return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
        }, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this;
    }, t.getSVGData = function getSVGData(e) {
        return CustomEase.getSVGData(this, e);
    }, CustomEase.create = function create(e, t, n) {
        return new CustomEase(e, t, n).ease;
    }, CustomEase.register = function register(e) {
        M = e, q();
    }, CustomEase.get = function get(e) {
        return M.parseEase(e);
    }, CustomEase.getSVGData = function getSVGData(e, t) {
        var n, a, r, i, o, h, u, f, c, l, g = (t = t || {}).width || 100, x = t.height || 100, d = t.x || 0, p = (t.y || 0) + x, y = M.utils.toArray(t.path)[0];
        if (t.invert && (x = -x, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) n = function rawPathToString(e) {
            !function _isNumber(e) {
                return "number" == typeof e;
            }(e[0]) || (e = [
                e
            ]);
            var t, n, s, a, r = "", i = e.length;
            for(n = 0; n < i; n++){
                for(a = e[n], r += "M" + m(a[0]) + "," + m(a[1]) + " C", t = a.length, s = 2; s < t; s++)r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";
                a.closed && (r += "z");
            }
            return r;
        }(function transformRawPath(e, t, n, s, a, r, i) {
            for(var o, h, u, f, c, l = e.length; -1 < --l;)for(h = (o = e[l]).length, u = 0; u < h; u += 2)f = o[u], c = o[u + 1], o[u] = f * t + c * s + r, o[u + 1] = f * n + c * a + i;
            return e._dirty = 1, e;
        }([
            e.segment
        ], g, 0, 0, -x, d, p));
        else {
            for(n = [
                d,
                p
            ], i = 1 / (u = Math.max(5, 200 * (t.precision || 1))), f = 5 / (u += 2), c = s(d + i * g), a = ((l = s(p + e(i) * -x)) - p) / (c - d), r = 2; r < u; r++)o = s(d + r * i * g), h = s(p + e(r * i) * -x), (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l), a = (h - l) / (o - c)), c = o, l = h;
            n = "M" + n.join(",");
        }
        return y && y.setAttribute("d", n), n;
    }, CustomEase);
    function CustomEase(e, t, n) {
        a || q(), this.id = e, this.setData(t, n);
    }
    p() && M.registerPlugin(n), n.version = "3.7.0", e.CustomEase = n, e.default = n;
    if (typeof window === "undefined" || window !== e) Object.defineProperty(e, "__esModule", {
        value: !0
    });
    else delete e.default;
});


var $6ad6880e0e3cc03e$exports = {};
/*!
 * SplitText 3.5.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ !function(D, u) {
    u($6ad6880e0e3cc03e$exports);
}($6ad6880e0e3cc03e$exports, function(D) {
    "use strict";
    var b = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function k(D) {
        return e.getComputedStyle(D);
    }
    function n(D, u) {
        var e;
        return i(D) ? D : "string" == (e = typeof D) && !u && D ? E.call(Q.querySelectorAll(D), 0) : D && "object" == e && "length" in D ? E.call(D, 0) : D ? [
            D
        ] : [];
    }
    function o(D) {
        return "absolute" === D.position || !0 === D.absolute;
    }
    function p(D, u) {
        for(var e, F = u.length; -1 < --F;)if (e = u[F], D.substr(0, e.length) === e) return e.length;
    }
    function r(D, u) {
        void 0 === D && (D = "");
        var e = ~D.indexOf("++"), F = 1;
        return e && (D = D.split("++").join("")), function() {
            return "<" + u + " style='position:relative;display:inline-block;'" + (D ? " class='" + D + (e ? F++ : "") + "'>" : ">");
        };
    }
    function s(D, u, e) {
        var F = D.nodeType;
        if (1 === F || 9 === F || 11 === F) for(D = D.firstChild; D; D = D.nextSibling)s(D, u, e);
        else 3 !== F && 4 !== F || (D.nodeValue = D.nodeValue.split(u).join(e));
    }
    function t(D, u) {
        for(var e = u.length; -1 < --e;)D.push(u[e]);
    }
    function u(D, u, e) {
        for(var F; D && D !== u;){
            if (F = D._next || D.nextSibling) return F.textContent.charAt(0) === e;
            D = D.parentNode || D._parent;
        }
    }
    function v(D) {
        var u, e, F = n(D.childNodes), t = F.length;
        for(u = 0; u < t; u++)(e = F[u])._isSplit ? v(e) : (u && 3 === e.previousSibling.nodeType ? e.previousSibling.nodeValue += 3 === e.nodeType ? e.nodeValue : e.firstChild.nodeValue : 3 !== e.nodeType && D.insertBefore(e.firstChild, e), D.removeChild(e));
    }
    function w(D, u) {
        return parseFloat(u[D]) || 0;
    }
    function x(D, e, F, C, i, n, E) {
        var r, l, a, p, d, h, B, f, A, c, g, x, y = k(D), b = w("paddingLeft", y), _ = -999, S = w("borderBottomWidth", y) + w("borderTopWidth", y), T = w("borderLeftWidth", y) + w("borderRightWidth", y), N = w("paddingTop", y) + w("paddingBottom", y), m = w("paddingLeft", y) + w("paddingRight", y), L = w("fontSize", y) * (e.lineThreshold || .2), W = y.textAlign, H = [], O = [], V = [], j = e.wordDelimiter || " ", M = e.tag ? e.tag : e.span ? "span" : "div", R = e.type || e.split || "chars,words,lines", z = i && ~R.indexOf("lines") ? [] : null, P = ~R.indexOf("words"), q = ~R.indexOf("chars"), G = o(e), I = e.linesClass, J = ~(I || "").indexOf("++"), K = [];
        for(J && (I = I.split("++").join("")), a = (l = D.getElementsByTagName("*")).length, d = [], r = 0; r < a; r++)d[r] = l[r];
        if (z || G) for(r = 0; r < a; r++)((h = (p = d[r]).parentNode === D) || G || q && !P) && (x = p.offsetTop, z && h && Math.abs(x - _) > L && ("BR" !== p.nodeName || 0 === r) && (B = [], z.push(B), _ = x), G && (p._x = p.offsetLeft, p._y = x, p._w = p.offsetWidth, p._h = p.offsetHeight), z && ((p._isSplit && h || !q && h || P && h || !P && p.parentNode.parentNode === D && !p.parentNode._isSplit) && (B.push(p), p._x -= b, u(p, D, j) && (p._wordEnd = !0)), "BR" === p.nodeName && (p.nextSibling && "BR" === p.nextSibling.nodeName || 0 === r) && z.push([])));
        for(r = 0; r < a; r++)h = (p = d[r]).parentNode === D, "BR" !== p.nodeName ? (G && (A = p.style, P || h || (p._x += p.parentNode._x, p._y += p.parentNode._y), A.left = p._x + "px", A.top = p._y + "px", A.position = "absolute", A.display = "block", A.width = p._w + 1 + "px", A.height = p._h + "px"), !P && q ? p._isSplit ? (p._next = p.nextSibling, p.parentNode.appendChild(p)) : p.parentNode._isSplit ? (p._parent = p.parentNode, !p.previousSibling && p.firstChild && (p.firstChild._isFirst = !0), p.nextSibling && " " === p.nextSibling.textContent && !p.nextSibling.nextSibling && K.push(p.nextSibling), p._next = p.nextSibling && p.nextSibling._isFirst ? null : p.nextSibling, p.parentNode.removeChild(p), d.splice(r--, 1), a--) : h || (x = !p.nextSibling && u(p.parentNode, D, j), p.parentNode._parent && p.parentNode._parent.appendChild(p), x && p.parentNode.appendChild(Q.createTextNode(" ")), "span" === M && (p.style.display = "inline"), H.push(p)) : p.parentNode._isSplit && !p._isSplit && "" !== p.innerHTML ? O.push(p) : q && !p._isSplit && ("span" === M && (p.style.display = "inline"), H.push(p))) : z || G ? (p.parentNode && p.parentNode.removeChild(p), d.splice(r--, 1), a--) : P || D.appendChild(p);
        for(r = K.length; -1 < --r;)K[r].parentNode.removeChild(K[r]);
        if (z) {
            for(G && (c = Q.createElement(M), D.appendChild(c), g = c.offsetWidth + "px", x = c.offsetParent === D ? 0 : D.offsetLeft, D.removeChild(c)), A = D.style.cssText, D.style.cssText = "display:none;"; D.firstChild;)D.removeChild(D.firstChild);
            for(f = " " === j && (!G || !P && !q), r = 0; r < z.length; r++){
                for(B = z[r], (c = Q.createElement(M)).style.cssText = "display:block;text-align:" + W + ";position:" + (G ? "absolute;" : "relative;"), I && (c.className = I + (J ? r + 1 : "")), V.push(c), a = B.length, l = 0; l < a; l++)"BR" !== B[l].nodeName && (p = B[l], c.appendChild(p), f && p._wordEnd && c.appendChild(Q.createTextNode(" ")), G && (0 === l && (c.style.top = p._y + "px", c.style.left = b + x + "px"), p.style.top = "0px", x && (p.style.left = p._x - x + "px")));
                0 === a ? c.innerHTML = "&nbsp;" : P || q || (v(c), s(c, String.fromCharCode(160), " ")), G && (c.style.width = g, c.style.height = p._h + "px"), D.appendChild(c);
            }
            D.style.cssText = A;
        }
        G && (E > D.clientHeight && (D.style.height = E - N + "px", D.clientHeight < E && (D.style.height = E + S + "px")), n > D.clientWidth && (D.style.width = n - m + "px", D.clientWidth < n && (D.style.width = n + T + "px"))), t(F, H), P && t(C, O), t(i, V);
    }
    function y(D, u, e, F) {
        var t, C, i, n, E, r, l, a, d = u.tag ? u.tag : u.span ? "span" : "div", h = ~(u.type || u.split || "chars,words,lines").indexOf("chars"), B = o(u), f = u.wordDelimiter || " ", A = " " !== f ? "" : B ? "&#173; " : " ", c = "</" + d + ">", g = 1, x = u.specialChars ? "function" == typeof u.specialChars ? u.specialChars : p : null, y = Q.createElement("div"), v = D.parentNode;
        for(v.insertBefore(y, D), y.textContent = D.nodeValue, v.removeChild(D), l = -1 !== (t = function getText(D) {
            var u = D.nodeType, e = "";
            if (1 === u || 9 === u || 11 === u) {
                if ("string" == typeof D.textContent) return D.textContent;
                for(D = D.firstChild; D; D = D.nextSibling)e += getText(D);
            } else if (3 === u || 4 === u) return D.nodeValue;
            return e;
        }(D = y)).indexOf("<"), !1 !== u.reduceWhiteSpace && (t = t.replace(S, " ").replace(_, "")), l && (t = t.split("<").join("{{LT}}")), E = t.length, C = (" " === t.charAt(0) ? A : "") + e(), i = 0; i < E; i++)if (r = t.charAt(i), x && (a = x(t.substr(i), u.specialChars))) r = t.substr(i, a || 1), C += h && " " !== r ? F() + r + "</" + d + ">" : r, i += a - 1;
        else if (r === f && t.charAt(i - 1) !== f && i) {
            for(C += g ? c : "", g = 0; t.charAt(i + 1) === f;)C += A, i++;
            i === E - 1 ? C += A : ")" !== t.charAt(i + 1) && (C += A + e(), g = 1);
        } else "{" === r && "{{LT}}" === t.substr(i, 6) ? (C += h ? F() + "{{LT}}</" + d + ">" : "{{LT}}", i += 5) : 55296 <= r.charCodeAt(0) && r.charCodeAt(0) <= 56319 || 65024 <= t.charCodeAt(i + 1) && t.charCodeAt(i + 1) <= 65039 ? (n = ((t.substr(i, 12).split(b) || [])[1] || "").length || 2, C += h && " " !== r ? F() + t.substr(i, n) + "</" + d + ">" : t.substr(i, n), i += n - 1) : C += h && " " !== r ? F() + r + "</" + d + ">" : r;
        D.outerHTML = C + (g ? c : ""), l && s(v, "{{LT}}", "<");
    }
    function z(D, u, e, F) {
        var t, C, i = n(D.childNodes), E = i.length, s = o(u);
        if (3 !== D.nodeType || 1 < E) {
            for(u.absolute = !1, t = 0; t < E; t++)3 === (C = i[t]).nodeType && !/\S+/.test(C.nodeValue) || (s && 3 !== C.nodeType && "inline" === k(C).display && (C.style.display = "inline-block", C.style.position = "relative"), C._isSplit = !0, z(C, u, e, F));
            return u.absolute = s, void (D._isSplit = !0);
        }
        y(D, u, e, F);
    }
    var Q, e, F, C, _ = /(?:\r|\n|\t\t)/g, S = /(?:\s\s+)/g, i = Array.isArray, E = [].slice, l = ((C = SplitText.prototype).split = function split(D) {
        this.isSplit && this.revert(), this.vars = D = D || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for(var u, e, F, t = this.elements.length, C = D.tag ? D.tag : D.span ? "span" : "div", i = r(D.wordsClass, C), n = r(D.charsClass, C); -1 < --t;)F = this.elements[t], this._originals[t] = F.innerHTML, u = F.clientHeight, e = F.clientWidth, z(F, D, i, n), x(F, D, this.chars, this.words, this.lines, e, u);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this;
    }, C.revert = function revert() {
        var e = this._originals;
        if (!e) throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(D, u) {
            return D.innerHTML = e[u];
        }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
    }, SplitText.create = function create(D, u) {
        return new SplitText(D, u);
    }, SplitText);
    function SplitText(D, u) {
        F || function _initCore() {
            Q = document, e = window, F = 1;
        }(), this.elements = n(D), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = u || {}, this.split(u);
    }
    l.version = "3.5.1", D.SplitText = l, D.default = l;
    if (typeof window === "undefined" || window !== D) Object.defineProperty(D, "__esModule", {
        value: !0
    });
    else delete D.default;
});


(0, (/*@__PURE__*/$parcel$interopDefault($b62019425584a982$exports))).create("easing", ".13, 1, .32, 1");
const $53eb34f212c04687$export$6eb35e724b1093cb = (e)=>{
    let el = e.querySelector("span");
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(el);
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline().to(el, 0.15, {
        ease: "Power2.easeIn",
        opacity: 0,
        y: "-20%"
    }).to(el, 0.2, {
        ease: "easing",
        opacity: 1,
        startAt: {
            y: "100%"
        },
        y: "0%"
    });
};
const $53eb34f212c04687$export$5722b71925606a2b = (e)=>{
    let el = e.querySelector("span");
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(el);
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline().to(el, 0.15, {
        ease: "Power2.easeIn",
        opacity: 0,
        y: "20%"
    }).to(el, 0.2, {
        ease: "easing",
        opacity: 1,
        startAt: {
            y: "-100%"
        },
        y: "0%"
    });
};
[
    ...document.querySelectorAll(".link__hover")
].forEach((link)=>{
    link.addEventListener("mouseenter", ()=>$53eb34f212c04687$export$6eb35e724b1093cb(link));
    link.addEventListener("mouseleave", ()=>$53eb34f212c04687$export$5722b71925606a2b(link));
});
const $53eb34f212c04687$export$43caf661407f8cd7 = (e, delay = 0, timeScale = 1)=>{
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline().set(e, {
        attr: {
            d: "M 0 100 V 0 Q 50 0 100 0 V 100 z"
        }
    }).to(e, {
        duration: 0.435,
        ease: "power2.in",
        attr: {
            d: "M 0 100 V 50 Q 50 100 100 50 V 100 z"
        }
    }, "<+" + delay).to(e, {
        duration: 1.45,
        ease: "power4",
        attr: {
            d: "M 0 100 V 100 Q 50 100 100 100 V 100 z"
        }
    }).timeScale(timeScale);
};
const $53eb34f212c04687$export$3bd01f13c2b3731c = (e, timeScale = 1)=>{
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline().set(e, {
        attr: {
            d: "M 0 0 V 0 Q 50 0 100 0 V 0 z"
        }
    }, "<").to(e, {
        duration: 0.8,
        ease: "power4.in",
        attr: {
            d: "M 0 0 V 50 Q 50 100 100 50 V 0 z"
        }
    }, "<").to(e, {
        duration: 0.3,
        ease: "power2.out",
        attr: {
            d: "M 0 0 V 100 Q 50 100 100 100 V 0 z"
        }
    }).timeScale(timeScale);
};
const $53eb34f212c04687$var$wrap = (e)=>{
    document.querySelectorAll(e).forEach(function(el) {
        el.outerHTML = '<div style="overflow:hidden">' + el.outerHTML + "</div>";
    });
};
const $53eb34f212c04687$var$initMenu = ()=>{
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
        delay: 1.1
    }).from(".menu .link__hover", {
        opacity: 0,
        duration: 2,
        stagger: 0.1
    });
};
const $53eb34f212c04687$export$f85a731e6ceb60ea = ()=>{
    new (0, (/*@__PURE__*/$parcel$interopDefault($6ad6880e0e3cc03e$exports)))(".split__chars", {
        type: "words, chars",
        charsClass: "s__char",
        wordsClass: "s__word"
    });
    new (0, (/*@__PURE__*/$parcel$interopDefault($6ad6880e0e3cc03e$exports)))(".split__lines", {
        type: "lines",
        linesClass: "s__line"
    });
    $53eb34f212c04687$var$wrap(".wrap__overflow .s__line");
    if (document.querySelector(".overlay")) {
        const overlayPath = document.querySelector(".overlay__path");
        $53eb34f212c04687$export$43caf661407f8cd7(overlayPath, ".7");
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            delay: .7
        }).from(document.querySelectorAll("#canvas"), {
            yPercent: -50,
            duration: 1.885,
            ease: "power4"
        }, "<").from(document.querySelectorAll("#canvas"), {
            opacity: 0,
            duration: 0.1,
            ease: "power4"
        }, "<");
    }
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.toArray(".case, .next__case").forEach(function(e) {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            scrollTrigger: {
                scroller: ".smooth__scroll",
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                toggleActions: "play reverse play reverse",
                onToggle: ({ animation: animation  })=>{
                    let timeScale = animation.reversed() ? -3 : 1;
                    animation.timeScale(timeScale);
                    e.classList.toggle("active");
                }
            }
        }).from(e.querySelectorAll(".s__char:nth-child(odd)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.3").from(e.querySelectorAll(".s__char:nth-child(even)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.2").from(e.querySelectorAll(".case__description .s__line"), {
            yPercent: -100,
            duration: 1,
            ease: "easing"
        }, "<+.2").to(e.querySelectorAll(".title"), {
            pointerEvents: "all"
        }, "<");
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.toArray(".about__header").forEach(function(e) {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            scrollTrigger: {
                scroller: ".smooth__scroll",
                trigger: e,
                start: "top bottom",
                end: "bottom 30%"
            }
        }).from(e.querySelectorAll(".normal .s__char:nth-child(odd)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.8").from(e.querySelectorAll(".normal .s__char:nth-child(even)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.2").from(e.querySelectorAll(".italic .s__char"), {
            yPercent: -20,
            opacity: 0,
            duration: 1.5,
            ease: "easing",
            stagger: 0.04
        }, "<+.3").from(e.querySelectorAll(".about__description .s__line"), {
            yPercent: 100,
            duration: 1,
            ease: "easing"
        }, "<+.1").from(e.querySelectorAll(".scroll__arrow svg"), {
            opacity: 0,
            duration: 1,
            ease: "easing"
        }, "<+.1");
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // if (!isSafari) {
    //     let feTurbulence = document.querySelector(`#filter > feTurbulence`);
    //     let primitiveValues = { turbulence: 0 };
    //     gsap.timeline({
    //         onStart: () => {
    //             e.querySelector('.italic').style.filter = 'url(#filter)';
    //         },
    //         onUpdate: () => {
    //             feTurbulence.setAttribute('baseFrequency', primitiveValues.turbulence);
    //         },
    //         onComplete: () => {
    //             e.querySelector('.italic').style.filter = 'none';
    //         },
    //         scrollTrigger: {
    //             scroller: '.smooth__scroll',
    //             trigger: e,
    //             start: 'top bottom',
    //             end: 'bottom 30%',
    //         }
    //     })
    //         .to(primitiveValues, {
    //             duration: 0.4,
    //             ease: 'easing',
    //             startAt: { turbulence: 0 },
    //             turbulence: 0.5
    //         }, '<+1.2');
    // }
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.toArray(".about__info").forEach(function(e) {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            scrollTrigger: {
                scroller: ".smooth__scroll",
                trigger: e,
                start: "top 70%",
                end: "bottom top"
            }
        }).from(e.querySelectorAll(".text__l .s__line"), {
            yPercent: 100,
            duration: 1,
            ease: "easing"
        }, "<+.2").from(e.querySelectorAll(".about__awards__description .s__line"), {
            yPercent: 100,
            duration: 1,
            ease: "easing"
        }, "<+.4").from(e.querySelectorAll(".awards__item"), {
            yPercent: 30,
            opacity: 0,
            duration: 1,
            ease: "easing",
            stagger: 0.08
        }, "<");
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.toArray(".contact").forEach(function(e) {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            scrollTrigger: {
                scroller: ".smooth__scroll",
                trigger: e,
                start: "top bottom",
                end: "bottom 30%",
                toggleActions: "play reverse play reverse",
                onToggle: ({ animation: animation  })=>{
                    let timeScale = animation.reversed() ? -3 : 1;
                    animation.timeScale(timeScale);
                }
            }
        }).from(e.querySelectorAll(".title .s__char:nth-child(odd)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.38").from(e.querySelectorAll(".title .s__char:nth-child(even)"), {
            yPercent: (i)=>i % 2 === 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]) : (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).utils.random([
                    100,
                    -100
                ]),
            duration: .7,
            ease: "easing",
            stagger: 0.04
        }, "<+.2").from(e.querySelectorAll(".description .s__line"), {
            yPercent: 100,
            duration: 1,
            ease: "easing"
        }, "<+.3").from(e.querySelectorAll(".button"), {
            opacity: 0,
            duration: 2.5,
            ease: "easing"
        }, "<+.35");
    });
};
window.addEventListener("load", ()=>{
    $53eb34f212c04687$export$f85a731e6ceb60ea();
    $53eb34f212c04687$var$initMenu();
});



const $4322fe7aacf95091$export$871de8747c9eaa88 = (x, a, b, c, d)=>(x - a) * (d - c) / (b - a) + c;
const $4322fe7aacf95091$export$3a89f8d6f6bf6c9f = (a, b, n)=>(1 - n) * a + n * b;
const $4322fe7aacf95091$export$7d15b64cf5a3a4c4 = (num, min, max)=>num <= min ? min : num >= max ? max : num;
const $4322fe7aacf95091$export$9f17032d917177de = (x1, y1, x2, y2)=>{
    var a = x1 - x2;
    var b = y1 - y2;
    return Math.hypot(a, b);
};
const $4322fe7aacf95091$export$8b59d3c9ad87edcd = (e)=>{
    return {
        x: e.clientX,
        y: e.clientY
    };
};
const $4322fe7aacf95091$export$5f41c744e0ba0e0a = (e)=>{
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posx,
        y: posy
    };
};
const $4322fe7aacf95091$var$appHeight = ()=>{
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", $4322fe7aacf95091$var$appHeight);
$4322fe7aacf95091$var$appHeight();



let $782d71266e14df7e$var$mousepos = {
    x: 0,
    y: 0
};
let $782d71266e14df7e$var$mousePosCache = $782d71266e14df7e$var$mousepos;
let $782d71266e14df7e$var$direction = {
    x: $782d71266e14df7e$var$mousePosCache.x - $782d71266e14df7e$var$mousepos.x,
    y: $782d71266e14df7e$var$mousePosCache.y - $782d71266e14df7e$var$mousepos.y
};
window.addEventListener("mousemove", (ev)=>$782d71266e14df7e$var$mousepos = (0, $4322fe7aacf95091$export$5f41c744e0ba0e0a)(ev));
class $782d71266e14df7e$var$hoverReveal {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.reveal = this.DOM.el.querySelector(".hover__reveal");
        this.DOM.revealInner = this.DOM.el.querySelector(".hover__reveal__inner");
        this.DOM.revealImage = this.DOM.el.querySelector(".hover__reveal__img");
        this.DOM.revealOverlay = this.DOM.el.querySelector(".overlay__path");
        this.animatableProperties = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            rotation: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            brightness: {
                previous: 1,
                current: 1,
                amt: 0.08
            }
        };
        this.initEvents();
    }
    initEvents() {
        this.mouseEnter = ()=>{
            this.showImage();
            this.loopRender();
            this.firstRAFCycle = true;
        };
        this.mouseLeave = ()=>{
            this.stopRendering();
            this.hideImage();
        };
        this.disable = ()=>{
            this.stopRendering();
            this.hideImage();
            this.DOM.el.removeEventListener("mouseenter", this.mouseEnter);
            this.DOM.el.removeEventListener("mouseleave", this.mouseLeave);
        };
        this.DOM.el.addEventListener("mouseenter", this.mouseEnter);
        this.DOM.el.addEventListener("mouseleave", this.mouseLeave);
        this.DOM.el.addEventListener("click", this.disable);
    }
    showImage() {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(this.DOM.revealInner);
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(this.DOM.revealImage);
        (0, $53eb34f212c04687$export$43caf661407f8cd7)(this.DOM.revealOverlay, "0", "1.25");
        this.tl = (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            onStart: ()=>{
                this.DOM.reveal.style.opacity = 1;
            }
        }).to(this.DOM.revealInner, {
            opacity: 1,
            duration: 0.2
        }).to(this.DOM.revealImage, {
            startAt: {
                yPercent: -50
            },
            yPercent: 0,
            duration: 1.5,
            ease: "power4"
        }, "<");
    }
    hideImage() {
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(this.DOM.revealInner);
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).killTweensOf(this.DOM.revealImage);
        // overlayIn(this.DOM.revealOverlay, '2.5');
        this.tl = (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            onComplete: ()=>{
                this.DOM.reveal.style.opacity = 0;
            }
        }).to(this.DOM.revealInner, {
            opacity: 0,
            duration: .2
        });
    // .to(this.DOM.revealImage, {
    //     yPercent: -50,
    //     duration: 1.5,
    //     ease: 'power4',
    // }, '<');
    }
    loopRender() {
        if (!this.requestId) this.requestId = requestAnimationFrame(()=>this.render());
    }
    stopRendering() {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    }
    calcBounds() {
        this.bounds = {
            el: this.DOM.el.getBoundingClientRect(),
            reveal: this.DOM.reveal.getBoundingClientRect()
        };
    }
    render() {
        this.requestId = undefined;
        if (this.firstRAFCycle) this.calcBounds();
        const mouseDistanceX = (0, $4322fe7aacf95091$export$7d15b64cf5a3a4c4)(Math.abs($782d71266e14df7e$var$mousePosCache.x - $782d71266e14df7e$var$mousepos.x), 0, 100);
        $782d71266e14df7e$var$direction = {
            x: $782d71266e14df7e$var$mousePosCache.x - $782d71266e14df7e$var$mousepos.x,
            y: $782d71266e14df7e$var$mousePosCache.y - $782d71266e14df7e$var$mousepos.y
        };
        $782d71266e14df7e$var$mousePosCache = {
            x: $782d71266e14df7e$var$mousepos.x,
            y: $782d71266e14df7e$var$mousepos.y
        };
        this.animatableProperties.tx.current = Math.abs($782d71266e14df7e$var$mousepos.x - this.bounds.el.left) - this.bounds.reveal.width / 2;
        this.animatableProperties.ty.current = Math.abs($782d71266e14df7e$var$mousepos.y - this.bounds.el.top - window.scrollY) - this.bounds.reveal.height / 2;
        this.animatableProperties.rotation.current = this.firstRAFCycle ? 0 : (0, $4322fe7aacf95091$export$871de8747c9eaa88)(mouseDistanceX, 0, 100, 0, $782d71266e14df7e$var$direction.x < 0 ? 60 : -60);
        this.animatableProperties.brightness.current = this.firstRAFCycle ? 1 : (0, $4322fe7aacf95091$export$871de8747c9eaa88)(mouseDistanceX, 0, 100, 1, 4);
        this.animatableProperties.tx.previous = this.firstRAFCycle ? this.animatableProperties.tx.current : (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.animatableProperties.tx.previous, this.animatableProperties.tx.current, this.animatableProperties.tx.amt);
        this.animatableProperties.ty.previous = this.firstRAFCycle ? this.animatableProperties.ty.current : (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.animatableProperties.ty.previous, this.animatableProperties.ty.current, this.animatableProperties.ty.amt);
        this.animatableProperties.rotation.previous = this.firstRAFCycle ? this.animatableProperties.rotation.current : (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.animatableProperties.rotation.previous, this.animatableProperties.rotation.current, this.animatableProperties.rotation.amt);
        this.animatableProperties.brightness.previous = this.firstRAFCycle ? this.animatableProperties.brightness.current : (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.animatableProperties.brightness.previous, this.animatableProperties.brightness.current, this.animatableProperties.brightness.amt);
        (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).set(this.DOM.reveal, {
            x: this.animatableProperties.tx.previous,
            y: this.animatableProperties.ty.previous,
            rotation: this.animatableProperties.rotation.previous,
            filter: `brightness(${this.animatableProperties.brightness.previous})`
        });
        this.firstRAFCycle = false;
        this.loopRender();
    }
}
const $782d71266e14df7e$export$842c11d0d3857f4d = ()=>{
    [
        ...document.querySelectorAll(".reveal")
    ].forEach((e)=>{
        new $782d71266e14df7e$var$hoverReveal(e);
    });
};
$782d71266e14df7e$export$842c11d0d3857f4d();




let $4a2ebd08697fedd3$var$mouse = {
    x: 0,
    y: 0
};
window.addEventListener("mousemove", (ev)=>$4a2ebd08697fedd3$var$mouse = (0, $4322fe7aacf95091$export$8b59d3c9ad87edcd)(ev));
class $4a2ebd08697fedd3$var$Cursor {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.el.style.opacity = 0;
        this.DOM.circleInner = this.DOM.el.querySelector(".cursor-inner");
        this.bounds = this.DOM.el.getBoundingClientRect();
        this.onResize = ()=>{
            this.bounds = this.DOM.el.getBoundingClientRect();
        };
        window.addEventListener("resize", this.onResize);
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.16
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.16
            },
            radius: {
                previous: 30,
                current: 30,
                amt: 0.16
            }
        };
        this.onMouseMoveEv = ()=>{
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = $4a2ebd08697fedd3$var$mouse.x - this.bounds.width / 2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.current = $4a2ebd08697fedd3$var$mouse.y - this.bounds.height / 2;
            (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).to(this.DOM.el, {
                duration: 3,
                delay: 1,
                ease: "Expo.easeOut",
                opacity: 1
            });
            requestAnimationFrame(()=>this.render());
            window.removeEventListener("mousemove", this.onMouseMoveEv);
        };
        window.addEventListener("mousemove", this.onMouseMoveEv);
        this.filterId = "#filter";
        this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`);
        this.primitiveValues = {
            turbulence: 0
        };
        this.createNoiseTimeline();
    }
    enter() {
        this.renderedStyles["radius"].current = 60;
        this.tl.restart();
    }
    leave() {
        this.renderedStyles["radius"].current = 30;
        this.tl.progress(1).kill();
    }
    hide() {
        this.renderedStyles["radius"].current = 0;
    }
    createNoiseTimeline() {
        this.tl = (0, (/*@__PURE__*/$parcel$interopDefault($e9895e288f933541$exports))).timeline({
            paused: true,
            onStart: ()=>{
                this.DOM.circleInner.style.filter = `url(${this.filterId}`;
            },
            onUpdate: ()=>{
                this.DOM.feTurbulence.setAttribute("baseFrequency", this.primitiveValues.turbulence);
            },
            onComplete: ()=>{
                this.DOM.circleInner.style.filter = "none";
            }
        }).to(this.primitiveValues, {
            duration: 0.4,
            ease: "Expo.easeOut",
            startAt: {
                turbulence: 0
            },
            turbulence: 0.5
        });
    }
    render() {
        this.renderedStyles["tx"].current = $4a2ebd08697fedd3$var$mouse.x - this.bounds.width / 2;
        this.renderedStyles["ty"].current = $4a2ebd08697fedd3$var$mouse.y - this.bounds.height / 2;
        for(const key in this.renderedStyles)this.renderedStyles[key].previous = (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        this.DOM.el.style.transform = `translateX(${this.renderedStyles["tx"].previous}px) translateY(${this.renderedStyles["ty"].previous}px)`;
        this.DOM.circleInner.setAttribute("r", this.renderedStyles["radius"].previous);
        requestAnimationFrame(()=>this.render());
    }
}
window.addEventListener("load", ()=>{
    const cursor = new $4a2ebd08697fedd3$var$Cursor(document.querySelector(".cursor"));
    [
        ...document.querySelectorAll("a")
    ].forEach((link)=>{
        if (link.classList.contains("cursor__hide")) {
            link.addEventListener("mouseenter", ()=>cursor.hide());
            link.addEventListener("mouseleave", ()=>cursor.leave());
        } else {
            link.addEventListener("mouseenter", ()=>cursor.enter());
            link.addEventListener("mouseleave", ()=>cursor.leave());
        }
    });
});




let $f2ba33da989d0603$var$mouse = {
    x: 0,
    y: 0
};
window.addEventListener("mousemove", (ev)=>$f2ba33da989d0603$var$mouse = (0, $4322fe7aacf95091$export$8b59d3c9ad87edcd)(ev));
class $f2ba33da989d0603$var$Magnetic {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.text = this.DOM.el.querySelector(".button-text");
        this.DOM.textinner = this.DOM.el.querySelector(".button__text-inner");
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.1
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.1
            }
        };
        this.state = {
            hover: false
        };
        this.calculateSizePosition();
        this.initEvents();
        requestAnimationFrame(()=>this.render());
    }
    calculateSizePosition() {
        this.rect = this.DOM.el.getBoundingClientRect();
        this.distanceToTrigger = this.rect.width * 0.8;
    }
    initEvents() {
        this.onResize = ()=>this.calculateSizePosition();
        window.addEventListener("resize", this.onResize);
    }
    render() {
        this.rect = this.DOM.el.getBoundingClientRect();
        const distanceMouseButton = (0, $4322fe7aacf95091$export$9f17032d917177de)($f2ba33da989d0603$var$mouse.x + window.scrollX, $f2ba33da989d0603$var$mouse.y + window.scrollY, this.rect.left + this.rect.width / 2, this.rect.top + window.scrollY + this.rect.height / 2);
        let x = 0;
        let y = 0;
        if (distanceMouseButton < this.distanceToTrigger) {
            if (!this.state.hover) this.enter();
            x = ($f2ba33da989d0603$var$mouse.x + window.scrollX - (this.rect.left + this.rect.width / 2)) * .3;
            y = ($f2ba33da989d0603$var$mouse.y + window.scrollY - (this.rect.top + window.scrollY + this.rect.height / 2)) * .3;
        } else if (this.state.hover) this.leave();
        this.renderedStyles["tx"].current = x;
        this.renderedStyles["ty"].current = y;
        for(const key in this.renderedStyles)this.renderedStyles[key].previous = (0, $4322fe7aacf95091$export$3a89f8d6f6bf6c9f)(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        this.DOM.el.style.transform = `translate3d(${this.renderedStyles["tx"].previous}px, ${this.renderedStyles["ty"].previous}px, 0)`;
        this.DOM.text.style.transform = `translate3d(${-this.renderedStyles["tx"].previous * 0.6}px, ${-this.renderedStyles["ty"].previous * 0.6}px, 0)`;
        requestAnimationFrame(()=>this.render());
    }
    enter() {
        this.state.hover = true;
        (0, $53eb34f212c04687$export$6eb35e724b1093cb)(this.DOM.textinner);
    }
    leave() {
        this.state.hover = false;
        (0, $53eb34f212c04687$export$5722b71925606a2b)(this.DOM.textinner);
    }
}
const $f2ba33da989d0603$export$91d0b15145fa548e = ()=>{
    [
        ...document.querySelectorAll(".button")
    ].forEach((e)=>{
        new $f2ba33da989d0603$var$Magnetic(e);
    });
};
$f2ba33da989d0603$export$91d0b15145fa548e();



var $c65fcf1bb27d5277$exports = {};
$c65fcf1bb27d5277$exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvoid main() {\n  float PI = 3.1415925;\n  vec4 newposition = modelViewMatrix * vec4(position, 1.0);\n  newposition.y = newposition.y + ((sin(uv.x * PI) * uStrength * 1.) * 10.125);\n  //newposition.z += sin(newposition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength*10.;\n  vUv = uv;\n  gl_Position = projectionMatrix * newposition;\n}\n\n";


var $3064b4c268cf4912$exports = {};
$3064b4c268cf4912$exports = "#define GLSLIFY 1\nuniform sampler2D uImage;\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nvarying vec2 vUv;\n\nvoid main()	{\n    vec2 ratio = vec2(\n        min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n        min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n    );\n \n    vec2 vUv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n\n    gl_FragColor = vec4(1.,1.,1.,0.);\n    gl_FragColor = texture2D(uImage, vUv );\n}";


var $44f6b183feade2c7$exports = {};
$44f6b183feade2c7$exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";


var $f6123c1b83f2dd2b$exports = {};
$f6123c1b83f2dd2b$exports = "#define GLSLIFY 1\nvarying vec2 vUv;\nuniform vec2 resolution;\nuniform vec2 uMouse;\nuniform float uVelo;\nuniform float uStrength;\nuniform sampler2D tDiffuse;\n\nfloat circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {\n    uv -= disc_center;\n    uv*=resolution;\n    float dist = sqrt(dot(uv, uv));\n    return smoothstep(disc_radius+border_size*2., disc_radius-border_size, dist);\n}\n        \nfloat map(float value, float min1, float max1, float min2, float max2) {\n    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);\n}\n        \nfloat remap(float value, float inMin, float inMax, float outMin, float outMax) {\n    return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);\n}\n        \nfloat hash12(vec2 p) {\n    float h = dot(p,vec2(127.1,311.7));	\n    return fract(sin(h)*43758.5453123);\n}\n        \nvec2 hash2d(vec2 p) {\n    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yzx+19.19);\n    return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvoid main()	{\n    vec2 newUV = vUv;\n    vec4 color = vec4(1.,0.,0.,1.);\n                \n    //float c = circle(newUV, uMouse, 0.0, 0.2);\n    // float r = texture2D(tDiffuse, newUV.xy += c * (uVelo * .5)).x;\n    // float g = texture2D(tDiffuse, newUV.xy += c * (uVelo * .525)).y;\n    // float b = texture2D(tDiffuse, newUV.xy += c * (uVelo * .55)).z;\n    // float a = texture2D(tDiffuse, newUV.xy += c * (uVelo * .55)).a;\n    // color = vec4(r, g, b, a);\n            \n    float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.6)*40.*uVelo;\n    vec2 offsetVector = normalize(uMouse - vUv);\n    vec2 warpedUV = mix(vUv, uMouse, c * 0.2); //power\n    color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);\n            \n    // float hash = hash12(vUv*10.);\n    // float c = circle(newUV, uMouse, 0.0, 0.1+uVelo*0.01)*10.*uVelo;\n    // vec2 offsetVector = normalize(uMouse - vUv);\n    // vec2 warpedUV = vUv + vec2(hash - 0.5)*c; //power\n    // float area = smoothstep(vUv.y,0.,0.777);\n    // warpedUV.y -= (hash * abs(uStrength)/1.)*1.*area/1.;\n    // color = texture2D(tDiffuse,warpedUV) + texture2D(tDiffuse,warpedUV)*vec4(vec3(c),1.);\n    \n    gl_FragColor = color;\n}";





class $d7e29926b2d84325$var$Canvas {
    constructor(){
        this.scene = new $aBFJ2$three.Scene();
        this.container = document.getElementById("canvas");
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.camera = new $aBFJ2$three.PerspectiveCamera(70, this.width / this.height, 100, 2000);
        this.camera.position.z = 600;
        this.camera.fov = 2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);
        this.renderer = new $aBFJ2$three.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        this.images = [
            ...document.querySelectorAll("img")
        ];
        this.mouse = new $aBFJ2$three.Vector2();
        this.followMouse = new $aBFJ2$three.Vector2();
        this.prevMouse = new $aBFJ2$three.Vector2();
        this.speed = 0;
        this.targetSpeed = 0;
        this.addImages();
        this.setPositions();
        this.resize();
        this.mouseMovement();
        this.composerPass();
        this.render();
    }
    addImages() {
        this.materials = [];
        this.material = new $aBFJ2$three.ShaderMaterial({
            uniforms: {
                uImage: {
                    value: 0
                },
                uPlaneSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uImageSizes: {
                    value: [
                        0,
                        0
                    ]
                },
                uViewportSizes: {
                    value: [
                        this.width,
                        this.height
                    ]
                },
                uStrength: {
                    value: 0
                }
            },
            fragmentShader: (0, (/*@__PURE__*/$parcel$interopDefault($3064b4c268cf4912$exports))),
            vertexShader: (0, (/*@__PURE__*/$parcel$interopDefault($c65fcf1bb27d5277$exports))),
            transparent: true
        });
        this.imagesStore = this.images.map((img)=>{
            let bounds = img.getBoundingClientRect();
            let geometry = new $aBFJ2$three.PlaneBufferGeometry(1, 1, 10, 10);
            let texture = new $aBFJ2$three.TextureLoader().load(img.src, ()=>{
                material.uniforms.uPlaneSizes.value = [
                    bounds.width,
                    bounds.height
                ];
                material.uniforms.uImageSizes.value = [
                    texture.image.width,
                    texture.image.height
                ];
            });
            texture.minFilter = $aBFJ2$three.LinearFilter;
            let material = this.material.clone();
            this.materials.push(material);
            material.uniforms.uImage.value = texture;
            let mesh = new $aBFJ2$three.Mesh(geometry, material);
            mesh.scale.set(bounds.width, bounds.height, 1);
            this.scene.add(mesh);
            return {
                img: img,
                mesh: mesh,
                top: bounds.top,
                left: bounds.left,
                width: bounds.width,
                height: bounds.height
            };
        });
    }
    setPositions() {
        this.imagesStore.forEach((e)=>{
            e.mesh.position.y = smoothScroll.scroll.instance.scroll.y - e.top + this.height / 2 - e.height / 2;
            e.mesh.position.x = e.left - this.width / 2 + e.width / 2;
        });
    }
    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.fov = 2 * Math.atan(this.height / 2 / 600) * (180 / Math.PI);
        this.camera.updateProjectionMatrix();
        this.imagesStore.forEach((img)=>{
            let bounds = img.img.getBoundingClientRect();
            img.top = bounds.top + smoothScroll.scroll.instance.scroll.y;
            img.left = bounds.left;
            img.width = bounds.width;
            img.height = bounds.height;
            img.mesh.scale.set(bounds.width, bounds.height, 1);
            img.mesh.material.uniforms.uPlaneSizes.value = [
                img.width,
                img.height
            ];
            img.mesh.material.uniforms.uImageSizes.value = [
                img.img.naturalWidth,
                img.img.naturalHeight
            ];
        });
        this.setPositions();
        window.addEventListener("resize", this.resize.bind(this));
    }
    composerPass() {
        this.composer = new (0, $aBFJ2$threeexamplesjsmpostprocessingEffectComposerjs.EffectComposer)(this.renderer);
        this.renderPass = new (0, $aBFJ2$threeexamplesjsmpostprocessingRenderPassjs.RenderPass)(this.scene, this.camera);
        this.composer.addPass(this.renderPass);
        this.myEffect = {
            uniforms: {
                "tDiffuse": {
                    value: null
                },
                "resolution": {
                    value: new $aBFJ2$three.Vector2(1., window.innerHeight / window.innerWidth)
                },
                "uMouse": {
                    value: new $aBFJ2$three.Vector2(-10, -10)
                },
                "uVelo": {
                    value: 0
                },
                "uStrength": {
                    value: 0
                }
            },
            vertexShader: (0, (/*@__PURE__*/$parcel$interopDefault($44f6b183feade2c7$exports))),
            fragmentShader: (0, (/*@__PURE__*/$parcel$interopDefault($f6123c1b83f2dd2b$exports)))
        };
        this.customPass = new (0, $aBFJ2$threeexamplesjsmpostprocessingShaderPassjs.ShaderPass)(this.myEffect);
        this.customPass.renderToScreen = true;
        this.composer.addPass(this.customPass);
    }
    mouseMovement() {
        window.addEventListener("mousemove", (event)=>{
            this.mouse.x = event.clientX / window.innerWidth;
            this.mouse.y = 1. - event.clientY / window.innerHeight;
        }, false);
    }
    getSpeed() {
        this.speed = Math.sqrt((this.prevMouse.x - this.mouse.x) ** 2 + (this.prevMouse.y - this.mouse.y) ** 2);
        this.targetSpeed -= 0.1 * (this.targetSpeed - this.speed);
        this.followMouse.x -= 0.1 * (this.followMouse.x - this.mouse.x);
        this.followMouse.y -= 0.1 * (this.followMouse.y - this.mouse.y);
        this.prevMouse.x = this.mouse.x;
        this.prevMouse.y = this.mouse.y;
    }
    render() {
        this.getSpeed();
        this.previousScroll = this.currentScroll;
        this.currentScroll = smoothScroll.scroll.instance.scroll.y;
        if (Math.round(this.currentScroll) !== Math.round(this.previousScroll)) {
            this.speed = this.currentScroll - this.previousScroll;
            this.speed = Math.round(this.speed * 100) / 100;
            this.setPositions();
        }
        this.materials.forEach((m)=>{
            m.uniforms.uStrength.value = this.speed / -14;
        });
        this.targetSpeed *= 0.999;
        this.customPass.uniforms.uVelo.value = Math.min(this.targetSpeed, 0.05);
        this.customPass.uniforms.uMouse.value = this.followMouse;
        this.customPass.uniforms.uStrength.value = this.speed / -14;
        this.composer.render();
        window.requestAnimationFrame(this.render.bind(this));
    }
}
let $d7e29926b2d84325$export$67ea982130081db;
window.addEventListener("load", ()=>{
    $d7e29926b2d84325$export$67ea982130081db = new $d7e29926b2d84325$var$Canvas();
});








(0, ($parcel$interopDefault($aBFJ2$barbacore))).init({
    transitions: [
        {
            name: "case",
            from: {
                namespace: [
                    "from-case"
                ]
            },
            leave (data) {
                return gsap.timeline().from(data.current.container.querySelectorAll(".active .s__char:nth-child(odd)"), {
                    yPercent: (i)=>i % 2 === 0 ? gsap.utils.random([
                            100,
                            -100
                        ]) : gsap.utils.random([
                            100,
                            -100
                        ]),
                    duration: .7,
                    ease: "easing",
                    stagger: 0.04
                }).from(data.current.container.querySelectorAll(".active .s__char:nth-child(even)"), {
                    yPercent: (i)=>i % 2 === 0 ? gsap.utils.random([
                            100,
                            -100
                        ]) : gsap.utils.random([
                            100,
                            -100
                        ]),
                    duration: .7,
                    ease: "easing",
                    stagger: 0.04
                }, "<+.2").from(data.current.container.querySelectorAll(".active .case__description .s__line"), {
                    yPercent: 100,
                    duration: 1,
                    ease: "easing"
                }, "<+1").progress(1).timeScale(2).reverse();
            },
            beforeLeave (data) {
                smoothScroll.destroy();
                const e = data.current.container.querySelector(".overlay__path");
                (0, $53eb34f212c04687$export$3bd01f13c2b3731c)(e);
            },
            enter () {
                smoothScroll.init();
            }
        },
        {
            name: "info",
            from: {
                namespace: [
                    "from-info"
                ]
            },
            leave (data) {
                return gsap.timeline().from(data.current.container.querySelectorAll(".normal .s__char:nth-child(odd)"), {
                    yPercent: (i)=>i % 2 === 0 ? gsap.utils.random([
                            100,
                            -100
                        ]) : gsap.utils.random([
                            100,
                            -100
                        ]),
                    duration: .7,
                    ease: "easing",
                    stagger: 0.04
                }, "<+.8").from(data.current.container.querySelectorAll(".normal .s__char:nth-child(even)"), {
                    yPercent: (i)=>i % 2 === 0 ? gsap.utils.random([
                            100,
                            -100
                        ]) : gsap.utils.random([
                            100,
                            -100
                        ]),
                    duration: .7,
                    ease: "easing",
                    stagger: 0.04
                }, "<+.2").progress(1).timeScale(2).reverse();
            },
            beforeLeave (data) {
                smoothScroll.destroy();
                const e = data.current.container.querySelector(".overlay__path");
                (0, $53eb34f212c04687$export$3bd01f13c2b3731c)(e);
            },
            enter () {
                smoothScroll.init();
            }
        }
    ]
});
(0, ($parcel$interopDefault($aBFJ2$barbacore))).hooks.after((data)=>{
    smoothScroll.update();
    (0, $6725e7185c197e18$export$6e3361ef130d64af)();
    (0, $53eb34f212c04687$export$f85a731e6ceb60ea)();
    (0, $d7e29926b2d84325$export$67ea982130081db).imagesStore.forEach((img)=>{
        (0, $d7e29926b2d84325$export$67ea982130081db).scene.remove(img.mesh);
    });
    (0, $d7e29926b2d84325$export$67ea982130081db).images = [
        ...document.querySelectorAll("img")
    ];
    (0, $d7e29926b2d84325$export$67ea982130081db).addImages();
    (0, $d7e29926b2d84325$export$67ea982130081db).setPositions();
    (0, $782d71266e14df7e$export$842c11d0d3857f4d)();
    (0, $f2ba33da989d0603$export$91d0b15145fa548e)();
    document.querySelector(".menu").classList.remove("hide");
    if (document.querySelector(".about__header")) document.querySelector("body").classList.add("page__about");
    else document.querySelector("body").classList.remove("page__about");
});




//# sourceMappingURL=index.js.map

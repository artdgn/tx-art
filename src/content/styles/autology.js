import {urlParamTxHash} from '../util.js'

let maxSize = 500;

const tokenData = {hash: urlParamTxHash()};

export function autologyDraw({sketchId, sizeOverride}) {
    maxSize = sizeOverride || maxSize;

    // add a canvas
    const sketchElement = document.getElementById(sketchId);
    const canvasElement = document.createElement("canvas");
    sketchElement.appendChild(canvasElement);

    // draw code

    let _s='Tx YOU,artblocks,piter,gorhill';

    let t, s, N, DEF, m, y, cv, v, tmp, b;
    function h() {
        this.i = null, this.t = null, this.cells = null, this.h = null, this.o = [], this.u = [], this.l = [], this.V = [], this.v = []
    }

    h.prototype.reset = function () {
        if (this.k || (this.k = new this.M), this.k.root) for (var t = this.k.g(this.k.root); t;) this.o.push(t), t = t.j;
        this.k.root = null, this.m || (this.m = new this.M), this.m.root = this.p = null, this.i = [], this.t = [], this.cells = []
    }, h.prototype.sqrt = Math.sqrt, h.prototype.abs = Math.abs, h.prototype.EPSILON = 1e-9, h.prototype.q = function (t, i) {
        return this.abs(t - i) < 1e-9
    }, h.prototype.A = function (t, i) {
        return 1e-9 < t - i
    }, h.prototype.B = function (t, i) {
        return i - t < 1e-9
    }, h.prototype.C = function (t, i) {
        return 1e-9 < i - t
    }, h.prototype.D = function (t, i) {
        return t - i < 1e-9
    }, (h.prototype.M = function () {
        this.root = null
    }).prototype.F = function (t, i) {
        var s, h, n;
        if (t) {
            if (i.G = t, i.j = t.j, t.j && (t.j.G = i), t.j = i, t.H) {
                for (t = t.H; t.I;) t = t.I;
                t.I = i
            } else t.H = i;
            s = t
        } else s = this.root ? (t = this.g(this.root), i.G = null, (i.j = t).G = i, t.I = i, t) : (i.G = i.j = null, this.root = i, null);
        for (i.I = i.H = null, i.J = s, i.K = !0, t = i; s && s.K;) s === (h = s.J).I ? (n = h.H) && n.K ? (s.K = n.K = !1, h.K = !0, t = h) : (t === s.H && (this.L(s), s = (t = s).J), s.K = !1, h.K = !0, this.N(h)) : (n = h.I) && n.K ? (s.K = n.K = !1, h.K = !0, t = h) : (t === s.I && (this.N(s), s = (t = s).J), s.K = !1, h.K = !0, this.L(h)), s = t.J;
        this.root.K = !1
    }, h.prototype.M.prototype.O = function (t) {
        t.j && (t.j.G = t.G), t.G && (t.G.j = t.j), t.j = t.G = null;
        var i, s, h = t.J, n = t.I, r = t.H, e = n ? r ? this.g(r) : n : r;
        if (h ? h.I === t ? h.I = e : h.H = e : this.root = e, n && r ? (i = e.K, e.K = t.K, ((e.I = n).J = e) !== r ? (h = e.J, e.J = t.J, t = e.H, h.I = t, (e.H = r).J = e) : (e.J = h, t = (h = e).H)) : (i = t.K, t = e), t && (t.J = h), !i) if (t && t.K) t.K = !1; else {
            do {
                if (t === this.root) break;
                if (t === h.I) {
                    if ((s = h.H).K && (s.K = !1, h.K = !0, this.L(h), s = h.H), s.I && s.I.K || s.H && s.H.K) {
                        s.H && s.H.K || (s.I.K = !1, s.K = !0, this.N(s), s = h.H), s.K = h.K, h.K = s.H.K = !1, this.L(h), t = this.root;
                        break
                    }
                } else if ((s = h.I).K && (s.K = !1, h.K = !0, this.N(h), s = h.I), s.I && s.I.K || s.H && s.H.K) {
                    s.I && s.I.K || (s.H.K = !1, s.K = !0, this.L(s), s = h.I), s.K = h.K, h.K = s.I.K = !1, this.N(h), t = this.root;
                    break
                }
            } while (s.K = !0, h = (t = h).J, !t.K);
            t && (t.K = !1)
        }
    }, h.prototype.M.prototype.L = function (t) {
        var i = t, s = t.H, t = i.J;
        t ? t.I === i ? t.I = s : t.H = s : this.root = s, s.J = t, i.J = s, i.H = s.I, i.H && (i.H.J = i), s.I = i
    }, h.prototype.M.prototype.N = function (t) {
        var i = t, s = t.I, t = i.J;
        t ? t.I === i ? t.I = s : t.H = s : this.root = s, s.J = t, i.J = s, i.I = s.H, i.I && (i.I.J = i), s.H = i
    }, h.prototype.M.prototype.g = function (t) {
        for (; t.I;) t = t.I;
        return t
    }, h.prototype.M.prototype.P = function (t) {
        for (; t.H;) t = t.H;
        return t
    }, h.prototype.R = function (t) {
        this.S = t
    }, (h.prototype.T = function (t) {
        this.S = t, this.U = [], this.W = !1
    }).prototype.init = function (t) {
        return this.S = t, this.U = [], this.W = !1, this
    }, h.prototype.X = function (t) {
        var i = this.v.pop();
        return i ? i.init(t) : new this.T(t)
    }, h.prototype.T.prototype.Y = function () {
        for (var t, i = this.U, s = i.length; s--;) (t = i[s].$).Z && t._ || i.splice(s, 1);
        return i.sort(function (t, i) {
            return i.angle - t.angle
        }), i.length
    }, h.prototype.T.prototype.ii = function () {
        for (var t, i = [], s = this.U.length; s--;) null !== (t = this.U[s].$).ti && t.ti.si != this.S.si ? i.push(t.ti.si) : null !== t.hi && t.hi.si != this.S.si && i.push(t.hi.si);
        return i
    }, h.prototype.T.prototype.ni = function () {
        for (var t, i, s = this.U, h = s.length, n = 1 / 0, r = 1 / 0, e = -1 / 0, f = -1 / 0; h--;) (t = (i = s[h].oi()).x) < n && (n = t), (i = i.y) < r && (r = i), e < t && (e = t), f < i && (f = i);
        return {x: n, y: r, width: e - n, height: f - r}
    }, h.prototype.T.prototype.ri = function (t, i) {
        for (var s, h, n = this.U, r = n.length; r--;) {
            if (h = (s = n[r]).oi(), s = s.ei(), !(h = (i - h.y) * (s.x - h.x) - (t - h.x) * (s.y - h.y))) return 0;
            if (0 < h) return -1
        }
        return 1
    }, h.prototype.fi = function (t, i) {
        this.x = t, this.y = i
    }, h.prototype.ui = function (t, i) {
        this.ti = t, this.hi = i, this._ = this.Z = null
    }, h.prototype.li = function (t, i, s) {
        var h;
        this.S = i, this.$ = t, s ? this.angle = Math.atan2(s.y - i.y, s.x - i.x) : (h = t._, s = t.Z, this.angle = t.ti === i ? Math.atan2(s.x - h.x, h.y - s.y) : Math.atan2(h.x - s.x, s.y - h.y))
    }, h.prototype.ai = function (t, i, s) {
        return new this.li(t, i, s)
    }, h.prototype.li.prototype.oi = function () {
        return this.$.ti === this.S ? this.$._ : this.$.Z
    }, h.prototype.li.prototype.ei = function () {
        return this.$.ti === this.S ? this.$.Z : this.$._
    }, h.prototype.ci = function (t, i) {
        var s = this.l.pop();
        return s ? (s.x = t, s.y = i) : s = new this.fi(t, i), this.i.push(s), s
    }, h.prototype.Vi = function (t, i, s, h) {
        var n = this.V.pop();
        return n ? (n.ti = t, n.hi = i, n._ = n.Z = null) : n = new this.ui(t, i), this.t.push(n), s && this.vi(n, t, i, s), h && this.wi(n, t, i, h), this.cells[t.si].U.push(this.ai(n, t, i)), this.cells[i.si].U.push(this.ai(n, i, t)), n
    }, h.prototype.bi = function (t, i, s) {
        var h = this.V.pop();
        return h ? (h.ti = t, h.hi = null) : h = new this.ui(t, null), h._ = i, h.Z = s, this.t.push(h), h
    }, h.prototype.vi = function (t, i, s, h) {
        t._ || t.Z ? t.ti === s ? t.Z = h : t._ = h : (t._ = h, t.ti = i, t.hi = s)
    }, h.prototype.wi = function (t, i, s, h) {
        this.vi(t, s, i, h)
    }, h.prototype.ki = function () {
    }, h.prototype.Mi = function (t) {
        var i = this.o.pop();
        return (i = i || new this.ki).S = t, i
    }, h.prototype.di = function (t, i) {
        var s = t.S, h = s.x, n = s.y, r = n - i;
        if (!r) return h;
        var e = t.G;
        if (!e) return -1 / 0;
        var f = (s = e.S).x, u = s.y, t = u - i;
        if (!t) return f;
        e = f - h, s = 1 / r - 1 / t, i = e / t;
        return s ? (-i + this.sqrt(i * i - 2 * s * (e * e / (-2 * t) - u + t / 2 + n - r / 2))) / s + h : (h + f) / 2
    }, h.prototype.Ei = function (t, i) {
        var s = t.j;
        if (s) return this.di(s, i);
        t = t.S;
        return t.y === i ? t.x : 1 / 0
    }, h.prototype.gi = function (t) {
        this.xi(t), this.k.O(t), this.o.push(t)
    }, h.prototype.yi = function (t) {
        var i = t.ji, s = i.x, h = i.mi, n = this.ci(s, h), r = t.G, e = t.j, f = [t], u = Math.abs;
        this.gi(t);
        for (var a = r; a.ji && u(s - a.ji.x) < 1e-9 && u(h - a.ji.mi) < 1e-9;) r = a.G, f.unshift(a), this.gi(a), a = r;
        f.unshift(a), this.xi(a);
        for (var l = e; l.ji && u(s - l.ji.x) < 1e-9 && u(h - l.ji.mi) < 1e-9;) e = l.j, f.push(l), this.gi(l), l = e;
        f.push(l), this.xi(l);
        for (var o = f.length, c = 1; c < o; c++) l = f[c], a = f[c - 1], this.vi(l.$, a.S, l.S, n);
        a = f[0], (l = f[o - 1]).$ = this.Vi(a.S, l.S, void 0, n), this.pi(a), this.pi(l)
    }, h.prototype.qi = function (t) {
        for (var i, s, h, n, r = t.x, e = t.y, f = this.k.root; f;) if (1e-9 < (h = this.di(f, e) - r)) f = f.I; else {
            if (!(1e-9 < (n = r - this.Ei(f, e)))) {
                -1e-9 < h ? (i = f.G, s = f) : -1e-9 < n ? s = (i = f).j : i = s = f;
                break
            }
            if (!f.H) {
                i = f;
                break
            }
            f = f.H
        }
        var u, a, l, o, c, v, R, M, d, w, D = this.Mi(t);
        if (this.k.F(i, D), i || s) {
            if (i === s) return this.xi(i), s = this.Mi(i.S), this.k.F(D, s), D.$ = s.$ = this.Vi(i.S, D.S), this.pi(i), void this.pi(s);
            !i || s ? i !== s && (this.xi(i), this.xi(s), a = (u = i.S).x, w = u.y, l = t.x - a, R = t.y - w, c = (o = s.S).x - a, v = o.y - w, w = this.ci((v * (M = l * l + R * R) - R * (d = c * c + v * v)) / (R = 2 * (l * v - R * c)) + a, (l * d - c * M) / R + w), this.vi(s.$, u, o, w), D.$ = this.Vi(u, t, void 0, w), s.$ = this.Vi(t, o, void 0, w), this.pi(i), this.pi(s)) : D.$ = this.Vi(i.S, D.S)
        }
    }, h.prototype.zi = function () {
        this.arc = null, this.I = null, this.j = null, this.J = null, this.G = null, this.K = !1, this.H = null, this.S = null, this.x = this.y = this.mi = 0
    }, h.prototype.pi = function (t) {
        var i = t.G, s = t.j;
        if (i && s) {
            var h = i.S, n = t.S, r = s.S;
            if (h !== r) {
                var e = n.x, f = n.y, u = h.x - e, a = h.y - f, l = r.x - e, i = r.y - f, s = 2 * (u * i - a * l);
                if (!(-2e-12 <= s)) {
                    var h = u * u + a * a, r = l * l + i * i, a = (i * h - a * r) / s, s = (u * r - l * h) / s,
                        f = s + f, o = this.u.pop();
                    (o = o || new this.zi).arc = t, o.S = n, o.x = a + e, o.y = f + this.sqrt(a * a + s * s), o.mi = f, t.ji = o;
                    for (var c = null, v = this.m.root; v;) if (o.y < v.y || o.y === v.y && o.x <= v.x) {
                        if (!v.I) {
                            c = v.G;
                            break
                        }
                        v = v.I
                    } else {
                        if (!v.H) {
                            c = v;
                            break
                        }
                        v = v.H
                    }
                    this.m.F(c, o), c || (this.p = o)
                }
            }
        }
    }, h.prototype.xi = function (t) {
        var i = t.ji;
        i && (i.G || (this.p = i.j), this.m.O(i), this.u.push(i), t.ji = null)
    }, h.prototype.Ai = function (t, i) {
        var s = t.Z;
        if (s) return !0;
        var h, n, r = t._, e = i.Bi, f = i.xr, u = i.yt, a = i.Di, l = t.ti, o = t.hi, c = l.x, v = l.y, R = o.x,
            M = o.y, d = (c + R) / 2, i = (v + M) / 2;
        if (this.cells[l.si].W = !0, this.cells[o.si].W = !0, M !== v && (n = i - (h = (c - R) / (M - v)) * d), void 0 === h) {
            if (d < e || f <= d) return !1;
            if (R < c) {
                if (r) {
                    if (r.y >= a) return !1
                } else r = this.ci(d, u);
                s = this.ci(d, a)
            } else {
                if (r) {
                    if (r.y < u) return !1
                } else r = this.ci(d, a);
                s = this.ci(d, u)
            }
        } else if (h < -1 || 1 < h) if (R < c) {
            if (r) {
                if (r.y >= a) return !1
            } else r = this.ci((u - n) / h, u);
            s = this.ci((a - n) / h, a)
        } else {
            if (r) {
                if (r.y < u) return !1
            } else r = this.ci((a - n) / h, a);
            s = this.ci((u - n) / h, u)
        } else if (v < M) {
            if (r) {
                if (r.x >= f) return !1
            } else r = this.ci(e, h * e + n);
            s = this.ci(f, h * f + n)
        } else {
            if (r) {
                if (r.x < e) return !1
            } else r = this.ci(f, h * f + n);
            s = this.ci(e, h * e + n)
        }
        return t._ = r, t.Z = s, !0
    }, h.prototype.Fi = function (t, i) {
        var s = t._.x, h = t._.y, n = 0, r = 1, e = t.Z.x - s, f = t.Z.y - h, u = s - i.Bi;
        if (0 == e && u < 0) return !1;
        var a = -u / e;
        if (e < 0) {
            if (a < n) return !1;
            a < r && (r = a)
        } else if (0 < e) {
            if (r < a) return !1;
            n < a && (n = a)
        }
        if (u = i.xr - s, 0 == e && u < 0) return !1;
        if (a = u / e, e < 0) {
            if (r < a) return !1;
            n < a && (n = a)
        } else if (0 < e) {
            if (a < n) return !1;
            a < r && (r = a)
        }
        if (u = h - i.yt, 0 == f && u < 0) return !1;
        if (a = -u / f, f < 0) {
            if (a < n) return !1;
            a < r && (r = a)
        } else if (0 < f) {
            if (r < a) return !1;
            n < a && (n = a)
        }
        if (u = i.Di - h, 0 == f && u < 0) return !1;
        if (a = u / f, f < 0) {
            if (r < a) return !1;
            n < a && (n = a)
        } else if (0 < f) {
            if (a < n) return !1;
            a < r && (r = a)
        }
        return 0 < n && (t._ = this.ci(s + n * e, h + n * f)), r < 1 && (t.Z = this.ci(s + r * e, h + r * f)), (0 < n || r < 1) && (this.cells[t.ti.si].W = !0, this.cells[t.hi.si].W = !0), !0
    }, h.prototype.Gi = function (t) {
        for (var i, s = this.t, h = s.length, n = Math.abs; h--;) i = s[h], this.Ai(i, t) && this.Fi(i, t) && !(n(i._.x - i.Z.x) < 1e-9 && n(i._.y - i.Z.y) < 1e-9) || (i._ = i.Z = null, s.splice(h, 1))
    }, h.prototype.Hi = function (t) {
        for (var i, s, h, n, r, e, f, u, a, l = t.Bi, o = t.xr, c = t.yt, v = t.Di, R = this.cells, M = R.length, d = Math.abs; M--;) if ((i = R[M]).Y() && i.W) {
            for (n = (h = i.U).length, s = 0; s < n && (e = h[s].ei(), u = h[(s + 1) % n].oi(), !(1e-9 <= d(e.x - u.x) || 1e-9 <= d(e.y - u.y)));) s++;
            if (s !== n) {
                switch (!0) {
                    case this.q(e.x, l) && this.C(e.y, v):
                        if (a = this.q(u.x, l), f = this.ci(l, a ? u.y : v), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        e = f;
                    case this.q(e.y, v) && this.C(e.x, o):
                        if (a = this.q(u.y, v), f = this.ci(a ? u.x : o, v), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        e = f;
                    case this.q(e.x, o) && this.A(e.y, c):
                        if (a = this.q(u.x, o), f = this.ci(o, a ? u.y : c), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        e = f;
                    case this.q(e.y, c) && this.A(e.x, l):
                        if (a = this.q(u.y, c), f = this.ci(a ? u.x : l, c), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        if (e = f, a = this.q(u.x, l), f = this.ci(l, a ? u.y : v), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        if (e = f, a = this.q(u.y, v), f = this.ci(a ? u.x : o, v), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null)), a) break;
                        e = f, a = this.q(u.x, o), f = this.ci(o, a ? u.y : c), r = this.bi(i.S, e, f), s++, h.splice(s, 0, this.ai(r, i.S, null));
                        break;
                    default:
                        throw"E1"
                }
                if (1e-9 <= d(f.x - u.x) || 1e-9 <= d(f.y - u.y)) throw"E2"
            }
        }
    }, h.prototype.Ii = function (t) {
        for (var i, s = this.EPSILON, h = t.length; h--;) (i = t[h]).x = Math.floor(i.x / s) * s, i.y = Math.floor(i.y / s) * s
    }, h.prototype.Ji = function (t) {
        if (t) {
            if (!(t instanceof this.R)) throw"E3";
            this.h = t
        }
    }, h.prototype.Ki = function (t, i) {
        this.reset(), this.h && (this.l = this.l.concat(this.h.i), this.V = this.V.concat(this.h.t), this.v = this.v.concat(this.h.cells), this.h = null);
        var s = t.slice(0);
        s.sort(function (t, i) {
            var s = i.y - t.y;
            return s || i.x - t.x
        });
        for (var h, n, r, e = s.pop(), f = 0, u = this.cells; ;) if (r = this.p, e && (!r || e.y < r.y || e.y === r.y && e.x < r.x)) e.x === h && e.y === n || (u[f] = this.X(e), e.si = f++, this.qi(e), n = e.y, h = e.x), e = s.pop(); else {
            if (!r) break;
            this.yi(r.arc)
        }
        this.Gi(i), this.Hi(i);
        i = new this.R;
        return i.cells = this.cells, i.t = this.t, i.i = this.i, this.reset(), i
    };/*!Copyright (C) 2021 steganon*/
    let u = Math.round, k = Math.floor, f = String.fromCharCode, I = tokenData.hash, r = "image/png",
        n = Uint32Array.from([0, 1, s = t = 2, 3].map(t => parseInt(I.substr(8 * t + 2, 8), 16)));
    b = i => (t = n[3], n[3] = n[2], n[2] = n[1], n[1] = s = n[0], t ^= t << 11, n[0] ^= t ^ t >>> 8 ^ s >>> 19, n[0] / 2 ** 32), N = t => u(t * (b() + b() + b()) / 3), DEF = 1e3, m = Math.min(window.innerWidth, window.innerHeight), y = m / DEF, t = b(), cv = null;
    var i = {
        tt: [],
        xt: [],
        Ni: t <= .7 ? .6 : t <= .9 ? 0 : -1,
        it: k(11 * b()),
        st: 20 * u(.6 * b()),
        yt: b() < .3,
        margin: b() < .5,
        init: function () {
            var r = [1 + N(5), 1 + N(4)], t = b(), t = t < .1 ? 0 : t < .5 ? 1 : 2;
            if (this.Ni <= 0 && 12 < r[0] * r[1] && (this.Ni = .6), this.It = this.gt(), this._t = this.It.splice(0, 1), cv = document.querySelector("canvas"), cv.width = maxSize, cv.height = maxSize, t < 2 && this.Ri(0, 0, DEF, DEF, r, t), 2 == t) {
                this.xt = [];
                let n = new Array(r[0]);
                for (let i = 0; i < r[0]; i++) {
                    n[i] = new Array(r[1]);
                    for (let t = 0; t < r[1]; t++) n[i][t] = 0
                }
                for (let h = 0; h < r[0]; h++) for (let s = 0; s < r[1]; s++) if (1 != n[h][s]) {
                    var e = [u(b() * (r[0] - h - 1) + 1), u(b() * (r[1] - s - 1) + 1)];
                    for (let i = 0; i < e[0]; i++) for (let t = 0; t < e[1]; t++) n[i + h][t + s] = 1;
                    this.Ri(DEF * h / r[0], DEF * s / r[1], DEF * e[0] / r[0], DEF * e[1] / r[1], e, 1 < e[0] ? u(b()) : 0)
                }
            }
            this.tt = this.tt.map(function (t) {
                return t.x = u(t.x), t.y = u(t.y), t
            }), this.Si((new h).Ki(this.tt, {Bi: 0, xr: DEF, yt: 0, Di: DEF}))
        },
        et: function (i, s, h, n, r, e) {
            var f = .9 < b();
            for (let t = n; t < r; t += 2 * Math.PI / e) {
                var u = [i + h * Math.sin(t), s + h * Math.cos(t)];
                this.ft(u[0], u[1]);
                var a = Math.sqrt(2 * Math.pow(h, 2) * (1 - Math.cos(2 * Math.PI / e))) / 2;
                3 < a && f && this.et(u[0], u[1], a, n, r, e)
            }
            this.ut(i - b() * h, s - b() * h, h, h, e / 3)
        },
        ut: function (t, i, s, h, n) {
            var r = b();
            .2 < r && 2e3 < s * h ? this.at(t, i, s, h, n) : .2 < r && this.ft(t + s / 2, i + h / 2)
        },
        ft: function (t, i) {
            this.xt.push({x: t, y: i})
        },
        ot: function (i, s, h, n, r, e, f, u, a) {
            for (let t = 0; t < a; t++) {
                var l = t / a;
                this.ft(Math.pow(1 - l, 3) * i + 3 * l * Math.pow(1 - l, 2) * (h + this.st * b()) + 3 * l * l * (1 - l) * (r + this.st * b()) + l * l * l * f, Math.pow(1 - l, 3) * s + 3 * l * Math.pow(1 - l, 2) * (n + this.st * b()) + 3 * l * l * (1 - l) * (e + this.st * b()) + l * l * l * u)
            }
        },
        lt: function (s, h, n, r, e, f) {
            for (let i = s; i <= s + n; i += (s + n) / e) for (let t = h; t <= h + r; t += (h + r) / e) this.ft(i + (f ? b() * n : 0), t + (f ? b() * r : b() * (s + n) / e));
            this.ut(s + b() * n / 2, h + b() * r / 2, n / 2, r / 2, e / 2)
        },
        ct: function (t, i, s, h, n, r) {
            var e = 180 * b(), f = this.vt(t + s / 2, i + h / 2, t + s / 2, i, e),
                u = this.vt(t + s / 2, i + h / 2, t + s / 2, i + h, e),
                a = this.vt(t + s / 2, i + h / 2, t, i + h / 2, e),
                e = this.vt(t + s / 2, i + h / 2, t + s, i + h / 2, e);
            1 & n && this.ot(f[0], f[1], f[0], f[1], u[0], u[1], u[0], u[1], r), 2 & n && this.ot(a[0], a[1], a[0], a[1], e[0], e[1], e[0], e[1], r)
        },
        dt: function (t, i, s, h, n, r) {
            var e = 180 * b(), f = this.vt(t + s / 2, i + h / 2, t, i, e),
                u = this.vt(t + s / 2, i + h / 2, t, i + h, e), a = this.vt(t + s / 2, i + h / 2, t + s, i, e),
                e = this.vt(t + s / 2, i + h / 2, t + s, i + h, e);
            1 & n && this.ot(f[0], f[1], f[0], f[1], u[0], u[1], u[0], u[1], r), 2 & n && this.ot(a[0], a[1], a[0], a[1], e[0], e[1], e[0], e[1], r), 4 & n && this.ot(f[0], f[1], f[0], f[1], a[0], a[1], a[0], a[1], r), 8 & n && this.ot(u[0], u[1], u[0], u[1], e[0], e[1], e[0], e[1], r), this.ut(t + b() * s / 2, i + b() * h / 2, s / 2, h / 2, r / 2)
        },
        Mt: function (i, s, h, t) {
            var n = h / 3 / .2, r = 5 * b();
            for (let t = 0; t < n; t++) {
                var e = .2 * t + 2 * h / 3 - r;
                this.ft(i + (1 + e) * Math.cos(e), s + (1 + e) * Math.sin(e))
            }
            this.ut(i - b() * h, s - b() * h, h, h, t / 3)
        },
        at: function (t, n, r, e, f) {
            var a = 40 * b(), i = b();
            if (.85 < i) this.et(t + r / 2, n + e / 2, Math.min(r, e) / 2, 0, 2 * Math.PI, 20); else if (.8 < i) this.Mt(t + r / 2, n + e / 2, Math.min(r, e) / 2, 200 + 3 * a); else if (.68 < i) this.ct(t, n, r, e, u(3 * b()), 10 + a); else if (.31 < i) this.dt(t, n, r, e, u(15 * b()), 20 + a); else if (.26 < i) {
                let i = [t + r * b(), n + e * b(), t + r * b(), n + e * b(), t + r * b(), n + e * b(), t + r * b(), n + e * b()],
                    s = [.5 < b() ? 20 + a : 0, 0], h = 1 + 4 * b();
                0 == s[0] && (s[1] = 20 + a);
                for (let t = 0; t < h; t++) this.ot(i[0] + s[0] * t, i[1] + s[1] * t, i[2] + s[0] * t, i[3] + s[1] * t, i[4] + s[0] * t, i[5] + s[1] * t, i[6] + s[0] * t, i[7] + s[1] * t, f)
            } else .06 < i ? (i = [Math.min(r, 50), Math.min(e, 50)], this.lt(t + r / 2 - i[0] / 2, n + e / 2 - i[1] / 2, i[0], i[1], f, !0)) : this.lt(t, n, r, e, f, !1)
        },
        vt: function (t, i, s, h, n) {
            var r = Math.PI / 180 * n, n = Math.cos(r), r = Math.sin(r);
            return [n * (s - t) + r * (h - i) + t, n * (h - i) - r * (s - t) + i]
        },
        Ri: function (s, h, i, n, r, t) {
            var e = 1 == t ? i / 2 : i, f = r[0] / (t ? 2 : 1);
            for (let i = 0; i < f; i++) for (let t = 0; t < r[1]; t++) this.at(s + e * i / f, h + n * t / r[1], e / f, n / r[1], 20);
            if (this.tt = this.tt.concat(this.xt), 1 == t) for (let t = 0; t < this.xt.length; t++) this.tt.push({
                x: s + i - this.xt[t].x + s,
                y: this.xt[t].y
            });
            0 == this.tt.length && this.Ri(s, h, i, n, r, t)
        },
        _i: function (t, i, s, h) {
            var s = i[s], n = h, r = s.ii();
            s.Pi = !0, s.Li = h, s.Ni = -1 == this.Ni ? .2 + .8 * b() : this.Ni, 0 == this.Ni && (s.Ni = b() < .5 ? .8 : .4);
            for (var e = 0; e < r.length; e++) i[r[e]].Pi || (this._i(t, i, r[e], n), n = this.Ui())
        },
        Si: function (t) {
            for (var i = cv.getContext("2d"), s = k(b() * this._t), s = this.yt ? [0, 0, 0] : this.It.splice(s, 1)[0], h = t.cells, n = 0, r = 0; r < h.length; r++) h[r].Pi = !1;
            for (; 0 == h[n].ii().length;) n += 1;
            this._i(i, h, n, this.Ui()), i.beginPath(), i.rect(0, 0, cv.width, cv.height), i.fillStyle = "HSL(" + s[0] + "," + s[1] + "%," + s[2] + "%)", i.fill();
            for (let t = 0; t < h.length; t++) this.wt(i, h[t]);
            this.Zi(i)
        },
        wt: function (s, h) {
            var n = h.U, r = [h.S.x, h.S.y], e = [];
            if (null != n[0]) {
                s.beginPath(), v = n[0].oi(), s.moveTo(v.x, v.y), v = n[0].ei();
                var f = this.margin ? .9 : 1;
                let i = [h.Li[0], h.Li[1], h.Li[2]];
                for (let t = 0; t < 5; t++) {
                    var u = !1;
                    for (let t = 0; t < n.length; t++) {
                        var a = m * (1 - f) / 2, l = m * (f + (1 - f) / 2);
                        v = n[t].ei(), e[t] = [y * f * ((v.x - r[0]) * h.Ni + r[0]) + a, y * f * ((v.y - r[1]) * h.Ni + r[1]) + a], this.margin && (e[t][0] <= a || e[t][1] <= a || e[t][0] >= l || e[t][1] >= l) && (u = !0)
                    }
                    if (u) break;
                    s.beginPath(), s.moveTo(e[0][0], e[0][1]);
                    for (let t = 1; t < e.length; t++) s.lineTo(e[t][0], e[t][1]);
                    s.lineTo(e[0][0], e[0][1]);
                    var o = "HSL(" + i[0] + "," + i[1] + "%,";
                    s.fillStyle = o + i[2] + "%)", s.strokeStyle = o + "40%)", s.fill(), 0 == t && s.stroke(), h.Ni *= h.Ni, i[2] += 5 + 9 * b()
                }
            }
        },
        Ui: function () {
            return this.It[k(b() * this.It.length)]
        },
        gt: function () {
            return [[5, [197, 37, 24], [173, 58, 39], [43, 74, 66], [27, 87, 67], [12, 76, 61]], [3, [269, 72, 72], [0, 0, 78], [237, 72, 79], [236, 72, 58], [273, 93, 37]], [4, [308, 13, 76], [203, 81, 83], [188, 64, 70], [176, 42, 50], [356, 100, 53]], [5, [60, 7, 13], [60, 31, 87], [45, 20, 24], [51, 8, 59], [17, 76, 49]], [5, [161, 98, 68], [206, 98, 54], [207, 100, 70], [238, 31, 64], [210, 11, 24]], [5, [149, 30, 41], [348, 52, 49], [48, 80, 55], [28, 77, 53], [290, 11, 11], [211, 78, 45], [5, 35, 35], [226, 50, 39]], [3, [40, 9, 15], [40, 9, 60], [40, 9, 90]], [6, [192, 36, 51], [35, 77, 87], [10, 48, 22], [24, 70, 47], [199, 100, 21], [38, 26, 38], [360, 88, 37]], [6, [44, 100, 33], [46, 64, 52], [0, 0, 65], [39, 26, 44], [36, 51, 22], [50, 0, 10], [60, 0, 51]], [5, [192, 72, 44], [47, 100, 56], [342, 86, 56], [0, 0, 99], [196, 17, 17]], [5, [351, 57, 41], [348, 50, 59], [358, 84, 76], [188, 24, 57], [188, 24, 20]]][this.it]
        },
        Zi: function (t) {
            let i = f(96), s = f(92), h = t.getImageData(0, 0, m, m);
            _s = 'tokenData.hash="' + I + '";var _s=' + i + _s.replaceAll(i, s + i) + i + ";eval(_s)";
            let n = _s.length.toString(2).padStart(32, "0");
            for (let t = 0; t < _s.length; t++) tmp = _s[t].charCodeAt(0).toString(2).padStart(8, "0"), n += tmp;
            let r = 0;
            for (let i = 0; i < m; i++) for (let t = 0; t < m; t++) {
                var e = 4 * (m * t + i);
                for (let t = 0; t < 3; t++) h.data[e + t] = h.data[e + t] - k(15 * b()), r < n.length && (h.data[e + t] = -2 & h.data[e + t] | parseInt(n[r]), r++);
                h.data[3 + e] = 255
            }
            t.putImageData(h, 0, 0)
        },
    };
    i.init();
}

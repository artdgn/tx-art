import p5 from "p5";

import { urlParamTxHash } from '../util.js'

let maxSize = 500;

const tokenData = { hash: urlParamTxHash() };

export function drawRapture({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;

  let g, h, cw, ch;
  let ci, sh4, sq1, sq2, sq3, sq4, sq5, sq2a, sq3a, ci1, ci2, ci3, ci4, ci5, ci2a, ci3a;

  let t,
    e,
    i,
    s,
    r = Math.PI,
    a = 2 * Math.PI,
    l = Math.sin,
    n = Math.asin,
    o = Math.cos,
    p = Math.round,
    c = Math.floor,
    f = Math.sqrt,
    d = Math.cbrt;
  (t = Uint32Array.from(
    [0, 1, (e = i = 2), 3].map((t) =>
      parseInt(tokenData.hash.substr(8 * t + 2, 8), 16)
    )
  )),
    (s = () => (
      (i = t[3]),
      (t[3] = t[2]),
      (t[2] = t[1]),
      (t[1] = e = t[0]),
      (i ^= i << 11),
      (t[0] ^= i ^ (i >>> 8) ^ (e >>> 19)),
      t[0] / 4294967296
    ));
  let y = (t = 0, e = 1) => t + (e - t) * s(),
    u = (t, e) => c(y(t, e + 1)),
    m = (t, e) => {
      let i,
        s,
        h,
        r,
        a = [],
        l = [],
        n = 0,
        o = [...e];
      for (; n++ < e.length; ) l.push(n - 1);
      for (; 0 < t--; )
        (i = o.reduce((t, e, i) => [...t, e + (t[i - 1] || 0)], [])),
          (r = i.length - 1),
          (s = y(0, i[r])),
          (h = i.findIndex((t) => t > s)),
          (h = 0 > h ? r : h),
          a.push(l.splice(h, 1)[0]),
          o.splice(h, 1);
      return a;
    },
    x = [u(0, 1e9), u(0, 1e9)],
    b = m(1, [35, 5, 25, 10, 15, 10])[0],
    w = 1 != b && (5 == b || 0.3 > y()),
    q = y(),
    v = 0.1 > q && 1 != b ? 0.02 : 0.9 > q ? 0.04 : 0.08,
    k = w ? 1250 : 0.1 > q ? 750 : 0.9 > q ? 500 : 250,
    E = y(),
    T = 0.05 > E ? 3 : 1,
    P = 0.95 < E ? 3 : 1,
    S = m(1, [48, 48, 4])[0],
    M = 0.5 > y(),
    $ = 2 > S ? 1 : M ? 1.414214 : 0.707107,
    A = (m(1, [1, 1, 1, 1])[0] * r) / 2 + (0.25 > y() ? r / 4 : 0),
    B = m(1, [7, 30, 20, 10, 3, 20, 10])[0],
    C = y(),
    I = m(6, [2, 3, 3, 3, 1, 2]),
    W = 0.7 > y(),
    R = m(1, [30, 40, 5, 10, 15])[0],
    _ = c(5 * (1 - (1 - y()) ** 0.5) + 2),
    D = m(7 == _ ? 6 : _, [2, 3, 3, 3, 1, 2]),
    H = m(1, [30, 60, 10])[0],
    j = 0.1 > y(),
    L = j ? 2 : m(1, [60, 35, 5])[0],
    N = 0.9 > y(),
    U = 0.3 > y();
  1 == b && (T = P = 1),
    250 != k && (3 == T || 3 == P) && (k = 1e3),
    1 != R || W || 0 != I[0] || I.push(I.shift());
  class z {
    constructor(t, e) {
      (this.x = t), (this.y = e);
    }
    d(t) {
      let e = this.x - t.x,
        i = this.y - t.y;
      return f(e * e + i * i);
    }
    s(t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }
    a(t) {
      return (this.x += t.x), (this.y += t.y), this;
    }
    t(t, e) {
      return (this.x += t), (this.y += e), this;
    }
    m(t) {
      return (this.x *= t), (this.y *= t), this;
    }
    n() {
      return this.m(1 / f(this.x ** 2 + this.y ** 2));
    }
    cp() {
      return new z(this.x, this.y);
    }
  }
  function deBoor (t, e, i, s) {
    if (0 == t) return s[e % s.length].cp();
    let h = (i - e) / (4 - t);
    return deBoor(t - 1, e - 1, i, s)
      .m(1 - h)
      .a(deBoor(t - 1, e, i, s).m(h));
  };
  class F {
    constructor(t) {
      (this.h = !1), (this.p = t), (this.a = []);
    }
    o(t) {
      return (this.h = t), this;
    }
    ap(t, e) {
      return this.a.push(new z(t, e)), this;
    }
    t(t = 1, e = 0, i = 0) {
      return (
        this.a.forEach((s) => {
          (s.x = s.x * t + e), (s.y = s.y * t + i);
        }),
        this
      );
    }
    rot(t) {
      let e = l(t),
        i = o(t);
      return (
        this.a.forEach((t) => {
          let s = t.x * i - t.y * e,
            h = t.x * e + t.y * i;
          (t.x = s), (t.y = h);
        }),
        this
      );
    }
    ad(t) {
      if (2 > this.a.length) return;
      let e,
        i,
        s,
        h,
        r,
        a,
        l,
        n,
        o = [];
      for (l = 0; l < this.a.length; l++)
        if (
          ((e = l == this.a.length - 1 ? 0 : l + 1),
          (i = this.a[l]),
          o.push(i),
          (s = this.a[e]),
          (h = i.d(s)),
          !(t >= h))
        )
          for (
            r = Math.ceil(h / t),
              a = s
                .cp()
                .s(i)
                .m(1 / r),
              n = 0;
            n < r - 1;
            n++
          )
            (i = i.cp().a(a)), o.push(i);
      return (this.a = o), this;
    }
    rm(t) {
      if (2 > this.a.length) return;
      let e,
        i,
        s,
        h,
        r = [this.a[0]];
      for (h = 1; h < this.a.length; h++)
        (e = this.a[h]),
          (i = r[r.length - 1]),
          (s = e.d(i)),
          t <= s && r.push(e);
      return (this.a = r), this;
    }
    bs(t) {
      let e = this.a.length + 3,
        i = 3;
      for (t = t * (e - 4) + 3; i < e && !(t >= i && t <= i + 1); ) i++;
      return deBoor(3, i, t, this.a);
    }
    cp() {
      let t = new F(this.p);
      return (t.a = this.a.map((t) => t.cp())), (t.h = this.h), t;
    }
  }
  let G = (t, e) => new F(t, e),
    J = (t, e) => {
      let i = new p5();
      return (
        i.noiseSeed(t),
        i.noiseDetail(4, 0.5),
        (t, s) => i.noise((t + 5e5) * e, (s + 5e5) * e)
      );
    },
    K = 2147483647,
    O = (t) => (1664525 * t + 1013904223) & K,
    Q = 1 / (K + 1),
    V = (t, e) => (16777619 * t + e) & K,
    X = (t, e, i) => {
      let s,
        h,
        r,
        a,
        l,
        n,
        o,
        p,
        f,
        d,
        y,
        g,
        u = c(t),
        m = c(e),
        x = t - u,
        b = 1 - x,
        w = e - m,
        q = 1 - w,
        v = [0, -1, 1],
        k = 1e9;
      for (x *= x, w *= w, b *= b, q *= q, f = 0; 3 > f; f++)
        for (d = 0; 3 > d; d++)
          if (
            !(
              (1 == f && k < x) ||
              (2 == f && k < b) ||
              (1 == d && k < w) ||
              (2 == d && k < q)
            )
          )
            for (
              l = u + v[f],
                n = m + v[d],
                o = l - t,
                p = n - e,
                s = O(V((l + i) & K, (n + i) & K)),
                h =
                  196662675 > (E = s)
                    ? 1
                    : 511322955 > E
                    ? 2
                    : 930869995 > E
                    ? 3
                    : 1350417036 > E
                    ? 4
                    : 1686054668 > E
                    ? 5
                    : 1909813089 > E
                    ? 6
                    : 2037675044 > E
                    ? 7
                    : 2101606022 > E
                    ? 8
                    : 9,
                y = 0;
              y < h;
              ++y
            )
              (s = O(s)),
                (r = s * Q + o),
                (s = O(s)),
                (a = s * Q + p),
                (g = r * r + a * a),
                g < k && (k = g);
      var E;
      return k;
    },
    Y = (t) => (e, i) => {
      let s = 0.01,
        h = 1,
        r = 0,
        a = 3;
      for (; a--; ) (r += X(e * s, i * s, t) * h), (s *= 2), (h *= 0.5);
      return r;
    },
    Z = (t, e, i, s, h) =>
      new z(
        -(s(t, e + h) - s(t, e - h)) / (2 * h),
        (i(t + h, e) - i(t - h, e)) / (2 * h)
      ),
    tt = (t, e = 3, i = 1 / 16) =>
      t < i
        ? (i * t) / (t + e * (i - t))
        : ((1 - i) * (t - 1)) / (1 - t - e * (i - t)) + 1;
  class et {
    constructor(t, e, i) {
      (this.p = []),
        (this.at = [...e]),
        t.forEach((t) => this.p.push(this.rgb_ok(t))),
        (this.f = i),
        (this.ps = new p5());
    }
    ca(t, e = !1, i = !0) {
      t = this.f
        ? t ** 0.5
        : ((t, e = 0.01) => (t < e ? 0 : (t - e) / (1 - e)))(t);
      let s,
        h,
        r = 1;
      for (; r < this.at.length - 1 && this.at[r] <= t; ) r++;
      return (
        (h = (t - this.at[r - 1]) / (this.at[r] - this.at[r - 1])),
        (h = 1 > h ? (0 < h ? h : 0) : 1),
        (s = this.ok_rgb([
          this.ps.lerp(this.p[r - 1][0], this.p[r][0], h),
          this.ps.lerp(this.p[r - 1][1], this.p[r][1], h),
          this.ps.lerp(this.p[r - 1][2], this.p[r][2], h),
        ])),
        i
          ? (s.push(
              e ? 1 : (1 - tt(t)) * (j && !this.f ? 3 * tt(t, 9, 0.2) : 1)
            ),
            `rgba(${s[0]}, ${s[1]}, ${s[2]}, ${s[3]})`)
          : s
      );
    }
    rgb_ok(t) {
      let e = d(
          0.4122214708 * t[0] + 0.5363325363 * t[1] + 0.0514459929 * t[2]
        ),
        i = d(0.2119034982 * t[0] + 0.6806995451 * t[1] + 0.1073969566 * t[2]),
        s = d(0.0883024619 * t[0] + 0.2817188376 * t[1] + 0.6299787005 * t[2]);
      return [
        0.2104542553 * e + 0.793617785 * i - 0.0040720468 * s,
        1.9779984951 * e - 2.428592205 * i + 0.4505937099 * s,
        0.0259040371 * e + 0.7827717662 * i - 0.808675766 * s,
      ];
    }
    ok_rgb(t) {
      let e = (t[0] + 0.3963377774 * t[1] + 0.2158037573 * t[2]) ** 3,
        i = (t[0] - 0.1055613458 * t[1] - 0.0638541728 * t[2]) ** 3,
        s = (t[0] - 0.0894841775 * t[1] - 1.291485548 * t[2]) ** 3;
      return [
        4.0767416621 * e - 3.3077115913 * i + 0.2309699292 * s,
        -1.2684380046 * e + 2.6097574011 * i - 0.3413193965 * s,
        -0.0041960863 * e - 0.7034186147 * i + 1.707614701 * s,
      ];
    }
  }
  let it = (t, e, i = !1) => new et(t, e, i);
  var st = (t) => {
    let e = [239, 241, 220],
      i = [52, 51, 50],
      s = [
        [
          [244, 200, 5],
          [240, 182, 5],
          [200, 142, 5],
        ],
        [
          [225, 139, 117],
          [201, 75, 64],
          [152, 51, 42],
        ],
        [
          [151, 176, 201],
          [62, 111, 182],
          [57, 81, 116],
        ],
        [
          [156, 201, 149],
          [72, 161, 77],
          [62, 106, 64],
        ],
        [
          [237, 169, 182],
          [235, 97, 143],
          [144, 74, 97],
        ],
        [
          [191, 151, 190],
          [130, 77, 147],
          [95, 56, 107],
        ],
      ],
      h = it(
        1 == R ? [s[I[0]][W ? 2 : 0], s[I[0]][W ? 0 : 2]] : W ? [i, e] : [e, i],
        [0, 1],
        !0
      ),
      r = (t) => {
        let h = [e, ...s[I[H ? t : 0]], i];
        return W && h.reverse(), it(h, [0, 0.1, 0.4, 0.7, 1]);
      },
      a = (t) =>
        it(
          [
            s[I[H ? t : 1]][W ? 2 : 0],
            s[I[H ? t : 1]][1],
            s[I[0]][1],
            s[I[0]][W ? 0 : 2],
          ],
          [0, 0.33, 0.67, 1]
        );
    if (2 == R) return Array(t + 1).fill(h);
    if (3 == R)
      return [
        ...Array(t).fill(
          ((t) => {
            let h = [e, ...D.map((t) => s[t][1]), i];
            W && h.reverse();
            let r = [0],
              a = 0,
              l = 1 / (h.length - 1);
            for (; a < 1 - l / 2; ) r.push((a += l));
            return it(h, r);
          })()
        ),
        h,
      ];
    if (4 == R && 2 < t)
      return [
        ...((t) => {
          let h = [e, s[I[0]][1], i];
          W && h.reverse();
          let r = h[2],
            a = it(h, [-0.2, 0.5, 1.2], !0),
            l = [];
          for (let e = 0; 1 >= e; e += 1 / (t - 1))
            l.push(it([a.ca(e, !0, !1), r], [0, 1]));
          return l;
        })(t),
        h,
      ];
    let l =
      1 == R ? [a(1), a(2), a(3), a(4), a(5)] : [r(0), r(1), r(2), r(3), r(4)];
    return 1 == H && (l = l.map((t, e) => l[e % 2])), [...l.slice(0, t), h];
  };
  class ht {
    constructor(t, e) {
      (this.p = t.map((t) => [t])),
        (this.fr = t.map((t) => t.cp().ad(e).rm(e))),
        (this.x = 0),
        (this.y = 0),
        (this.m = 0),
        (this.n = 0);
    }
    f(t, e, i, s, h) {
      this.p.forEach((r, a) => {
        if (!N && 0 == a) return;
        let l,
          n,
          o = this.fr[a];
        for (l = 0; l < t; l++) {
          for (n = 0; n < e; n++)
            !w && a && 4e3 > o.a.length && o.ad(4 * i),
              o.a.forEach((t) => t.a(Z(t.x, t.y, s, h, 0.1)));
          r.push(o.cp());
        }
      }),
        (this.n += t);
    }
    sp(t, e, i, s, h, r) {
      let a = this.dx,
        l = this.dy,
        n = this.m;
      e.moveTo(t[0].x * n + a, t[0].y * n + l);
      for (let i = 1; i < t.length; i++)
        e.lineTo(t[i].x * n + a, t[i].y * n + l);
      (e.strokeStyle = i),
        (e.lineWidth = h),
        (e.fillStyle = s),
        e.closePath(),
        r ? e.stroke() : e.fill("evenodd");
    }
    cp(t, e, i, s) {
      let h = this.dx,
        r = this.dy,
        l = this.m;
      (e.fillStyle = i),
        t.forEach((t) => {
          e.beginPath(),
            e.arc(t.x * l + h, t.y * l + r, 0.25 * s * l, 0, a),
            e.fill();
        });
    }
    bp(t, e, i, s) {
      if (0 != s % 7) return;
      let h,
        r,
        a = this.dx,
        l = this.dy,
        n = this.m;
      for (e.beginPath(), h = 0; 1 > h; h += 1e-4)
        (r = t.bs(h)),
          0 == h
            ? e.moveTo(r.x * n + a, r.y * n + l)
            : e.lineTo(r.x * n + a, r.y * n + l);
      e.closePath(), (e.lineWidth = n / 5), (e.strokeStyle = i), e.stroke();
    }
    hp(t, e, i) {
      let s,
        h,
        r,
        a,
        l,
        n = this.dx,
        o = this.dy,
        p = this.m;
      for (e.lineWidth = p / 5, s = 0; 100 > s; s++)
        (e.strokeStyle = t.p.ca(i + (y() - 0.5) / 10)),
          (l = y()),
          (h = t.bs(l)),
          (r = t
            .bs(l - 0.05)
            .s(h)
            .n()),
          (a = h
            .cp()
            .s(t.bs(l + 0.05))
            .n()
            .a(r)),
          (r.x = a.y),
          (r.y = -a.x),
          r.n(),
          (a = h.cp().a(r.cp().m(-0.5))),
          h.a(r.m(0.5)),
          e.beginPath(),
          e.moveTo(h.x * p + n, h.y * p + o),
          e.lineTo(a.x * p + n, a.y * p + o),
          e.stroke();
    }
    rp(t, e, i) {
      let s,
        h,
        r = this.dx,
        l = this.dy,
        n = this.m;
      for (s = 0; 50 > s; s++)
        (e.fillStyle = t.p.ca(i + (y() - 0.5) / 5)),
          (h = t.bs(y())),
          e.beginPath(),
          e.arc(h.x * n + r, h.y * n + l, 0.8 * y() * n, 0, a),
          e.fill();
    }
    mp(t, e, i, s) {
      if (0 != e % 50 || e + 50 >= t.length) return;
      let h,
        r,
        a,
        l,
        n,
        o = this.dx,
        p = this.dy,
        c = this.m,
        f = 0 == e ? 50 : 49,
        d = Array(10 + e)
          .fill(1)
          .map(() => 1 + y())
          .reduce((t, e, i) => [...t, e + (t[i - 1] || 0)], []);
      for (
        0 == e && (e = 1),
          d = d.map((t) => t / d[d.length - 1]),
          d.unshift(0),
          h = 0;
        h < d.length - 1;
        h++
      ) {
        for (
          i.beginPath(),
            a = d[h],
            l = t[e].bs(a),
            i.moveTo(l.x * c + o, l.y * c + p),
            a += 1e-4;
          a < d[h + 1];

        )
          (l = t[e].bs(a)), i.lineTo(l.x * c + o, l.y * c + p), (a += 1e-4);
        for (r = e; r <= e + f; r++)
          (l = t[r].bs(d[h + 1])), i.lineTo(l.x * c + o, l.y * c + p);
        for (; a > d[h]; )
          (l = t[e + f].bs(a)), i.lineTo(l.x * c + o, l.y * c + p), (a -= 1e-4);
        for (r = e + f; r > e; r--)
          (l = t[r].bs(d[h])), i.lineTo(l.x * c + o, l.y * c + p);
        i.closePath(),
          (n = t[e].p.ca(s + (y() - 0.5) / 10, !0)),
          (i.fillStyle = n),
          (i.strokeStyle = t[e].p.ca(1 - s, !0)),
          (i.lineWidth = c / 50),
          i.fill(),
          i.stroke();
      }
    }
    dp(t, e, i, s = !1) {
      if (0 != e || s || 5 == b) {
        let h = e / (t.length - 2),
          r = t[0].p.ca(h);
        s || 0 == b
          ? (i.beginPath(),
            this.sp(t[e].a, i, r, r, this.m / 50, !0),
            this.sp(t[e + 1].a, i, r, r, this.m / 50, !1))
          : 1 == b
          ? this.cp(t[e].a, i, r, (1 - h) * (1 - (1 - h) ** 100))
          : 2 == b
          ? this.bp(t[e], i, r, e)
          : 3 == b
          ? this.hp(t[e], i, h)
          : 4 == b
          ? this.rp(t[e], i, h)
          : this.mp(t, e, i, h);
      }
    }
    df(t, e = 0) {
      this.p.forEach((i, s) => {
        if (0 == s) return;
        let h,
          r = i[c(e * (i.length - 2))].a,
          a = this.dx,
          l = this.dy,
          n = this.m;
        for (
          i[0].h || t.beginPath(),
            t.moveTo(r[0].x * n + a, r[0].y * n + l),
            h = 1;
          h < r.length;
          h++
        )
          t.lineTo(r[h].x * n + a, r[h].y * n + l);
        t.closePath(),
          (t.fillStyle = i[0].p.ca(0, !0)),
          (s != this.p.length - 1 && this.p[s + 1][0].h) || t.fill("evenodd");
      });
    }
    d(t, e, i) {
      this.dx, this.dy;
      let s,
        h = this.p[0].length - 1,
        r = 0 == b ? 0.01 : 0;
      if (
        ((t.fillStyle = this.p[0][0].p.ca(1, !0)),
        t.fillRect(0, 0, 2 * this.dx, 2 * this.dy),
        U)
      )
        for (let s = 0; s < i; s++)
          (t.fillStyle = this.p[0][0].p.ca((s + 0.5) / i, !0)),
            t.fillRect(0, s, e, 1);
      if (N) for (s = h - 1; 0 <= s; s--) this.dp(this.p[0], s, t, !0);
      for (
        1 == L && (this.df(t), this.df(t, r)),
          h = this.p[1].length - 1,
          s = h - 1;
        0 <= s;
        s--
      )
        this.p.forEach((e, i) => (i ? this.dp(e, s, t) : null));
      0 == L && (this.df(t), this.df(t, r));
    }
    dt(t, e) {
      (t.fillStyle = this.p[0][0].p.ca(1, !0)),
        t.fillRect(0, 0, 2 * this.dx, 2 * this.dy),
        this.df(e);
    }
    w(t, e, i) {
      (this.dx = t), (this.dy = e), (this.m = i);
    }
  }
  let rt,
    at,
    lt = window,
    nt = maxSize,
    ot = maxSize,
    pt = nt / ot,
    ct = pt > $,
    ft = lt.devicePixelRatio,
    dt = (ct ? ot : nt) * ft,
    yt = dt / (100 * (M ? (ct ? 1 : $) : pt < $ ? 1 : 1 / $)),
    gt = document,
    ut = gt.createElement("style"),
    mt = Array(11)
      .fill(1)
      .map(
        (t, e) =>
          `${10 * e}% {transform: translate(${p(2 * y() - 1)}mm, ${p(
            2 * y() - 1
          )}mm) rotate(${p(2 * y() - 1)}deg);}`
      );
  (ut.type = "text/css"),
    (mt = "@keyframes shake {\n" + mt.join("\n") + "\n}"),
    (ut.innerHTML = mt),
    gt.getElementsByTagName("head")[0].appendChild(ut),
    (lt.onload = () => {
      (gt.body.style.overflow = "hidden"),
        (rt = gt.createElement("canvas")),
        (at = gt.createElement("canvas"));
      let t = rt.getContext("2d"),
        e = at.getContext("2d"),
        i = gt.body,
        s = w ? Y(x[0]) : J(x[0], v / T),
        c = w ? Y(x[1]) : J(x[1], v / P),
        d = (() => {
          let t = 2 == S ? 70.71068 : 50,
            e = (t, e) => [...t, ...e.splice(1, e.length - 1)],
            i = (e) => G(e).ap(-t, -50).ap(t, -50).ap(t, 50).ap(-t, 50),
            s = (t, e = 15) => G(t).ap(-e, -e).ap(e, -e).ap(e, e).ap(-e, e),
            p = (t) => {
              let e,
                i = [],
                s = 0;
              for (; 5 > i.length; ) {
                let t = 35 * f(y()),
                  h = y() * a;
                (e = new z(o(h) * t, l(h) * t)),
                  (50 < s++ ||
                    i.map((t) => 25 < t.d(e)).reduce((t, e) => t && e, !0)) &&
                    i.push(e);
              }
              return i.map((e, i) => t[i].t(1, e.x, e.y));
            };          
          return (
            (g = 15 * (1 - C)),
            (h = n(0.05 + C / 2.5)),
            (ci = (t, e = 17.5) => {
              let i,
                s = G(t);
              for (i = 0; i < a; i += r / 200) s.ap(o(i) * e, l(i) * e);
              return s;
            }),
            (sh4 = (t) => [
              i(t[4].p),
              t[0],
              t[1].rot(r / 2),
              t[2].rot(r),
              t[3].rot((3 * r) / 2),
            ]),
            (sq1 = (t) => [i(t[1]), s(t[0], 25), ci(t[0], 7 + g).o(!0)]),
            (sq2 = (t) => [i(t[1]), s(t[0], 25), s(t[0], 7 + g).o(!0)]),
            (sq3 = (t) => [
              i(t[2]),
              s(t[0], 25),
              s(t[0], 14 + 0.6 * g).o(!0),
              s(t[1], 12.5 - 0.6 * g),
            ]),
            (sq4 = (t) =>
              sh4(
                t.map((t) =>
                  G(t, !0)
                    .ap(9 + g, 25)
                    .ap(-9 - g, 25)
                    .ap(0, 16 - g)
                )
              )),
            (sq5 = (t) => [
              i(t[5]),
              ...p([, , , , ,].fill(0).map((e, i) => s(t[i], 10))),
            ]),
            (sq2a = (t) => [
              i(t[2]),
              G(t[0])
                .ap(-25, -25)
                .ap(5 + g, -25)
                .ap(-25, 5 + g),
              G(t[1])
                .ap(25, 25)
                .ap(-5 - g, 25)
                .ap(25, -5 - g),
            ]),
            (sq3a = (t) => [
              i(t[3]),
              G(t[0])
                .ap(-25, -25)
                .ap(-10 + g, -25)
                .ap(-25, -10 + g),
              G(t[1])
                .ap(25, -25)
                .ap(25, -20 + g)
                .ap(-20 + g, 25)
                .ap(-25, 25)
                .ap(-25, 20 - g)
                .ap(20 - g, -25),
              G(t[2])
                .ap(25, 25)
                .ap(10 - g, 25)
                .ap(25, 10 - g),
            ]),
            (ci1 = (t) => [i(t[1]), ci(t[0], 30), s(t[0], 5 + g).o(!0)]),
            (ci2 = (t) => [i(t[1]), ci(t[0], 30), ci(t[0], 12.5 + g).o(!0)]),
            (ci3 = (t) => [
              i(t[2]),
              ci(t[0], 30),
              ci(t[0], 17 + 0.7 * g).o(!0),
              ci(t[1], 15 - 0.7 * g),
            ]),
            (ci4 = (t) =>
              sh4(
                t.map((t) => {
                  let e,
                    i = G(t, !0).ap(30 * o(r / 2 - h), 30 * l(h));
                  for (e = h; e <= r / 2 - h; e += (r / 2 - 2 * h) / 50)
                    i.ap(30 * o(e), 30 * l(e));
                  return i;
                })
              )),
            (ci5 = (t) => [
              i(t[5]),
              ...p([, , , , ,].fill(0).map((e, i) => ci(t[i], 12))),
            ]),
            (ci2a = (t) => {
              let e,
                s = G(t[0]),
                a = G(t[1]);
              for (e = h; e <= r - h; e += (r - 2 * h) / 100)
                s.ap(30 * o(e), 30 * l(e)), a.ap(30 * o(e), 30 * l(e));
              return [i(t[2]), s, a.rot(r)];
            }),
            (ci3a = (t) => {
              let e,
                s = G(t[0]),
                h = G(t[1]),
                a = G(t[2]),
                p = 0.3 * C,
                c = n(0.45 + p);
              for (e = c; e < r - c + (r - 2 * c) / 100; e += (r - 2 * c) / 50)
                s.ap(30 * o(e), 30 * l(e)), a.ap(30 * o(e), 30 * l(e));
              for (c = n(0.45 - p), e = r - c; e < r + c + c / 50; e += c / 25)
                h.ap(30 * o(e), 30 * l(e));
              for (e = -c; e < c + c / 50; e += c / 25)
                h.ap(30 * o(e), 30 * l(e));
              return [i(t[3]), s, h, a.rot(r)];
            }),
            0 === B
              ? 2 == S
                ? e(ci1(st(1)), sq1(st(1)))
                : S
                ? ci1(st(1))
                : sq1(st(1))
              : 1 === B
              ? 2 == S
                ? e(ci2(st(1)), sq2(st(1)))
                : S
                ? ci2(st(1))
                : sq2(st(1))
              : 2 === B
              ? 2 == S
                ? e(ci3(st(2)), sq3(st(2)))
                : S
                ? ci3(st(2))
                : sq3(st(2))
              : 3 === B
              ? 2 == S
                ? e(ci4(st(4)), sq4(st(4)))
                : S
                ? ci4(st(4))
                : sq4(st(4))
              : 4 === B
              ? 2 == S
                ? e(ci5(st(5)), sq5(st(5)))
                : S
                ? ci5(st(5))
                : sq5(st(5))
              : 5 === B
              ? 2 == S
                ? e(ci2a(st(2)), sq2a(st(2)))
                : S
                ? ci2a(st(2))
                : sq2a(st(2))
              : 6 === B
              ? 2 == S
                ? e(ci3a(st(3)), sq3a(st(3)))
                : S
                ? ci3a(st(3))
                : sq3a(st(3))
              : void 0
          );
        })(),
        u = at.style;
      (at.width = rt.width = cw = p(dt * (ct ? $ : 1))),
        (at.height = rt.height = ch = p(dt / (ct ? 1 : $))),
        (u.width = rt.style.width = cw / ft + "px"),
        (u.height = rt.style.height = ch / ft + "px"),
        (u.position = "absolute"),
        (u.top = "0"),
        (u.left = "0"),
        (u.animation = "shake 0.5s"),
        (u.animationIterationCount = "infinite"),
        d.forEach((t, e) => t.rot(e ? A : 0)),
        2 == S &&
          (d.forEach((t, e) =>
            t.t(1, e ? 34 * (0.5 < e / d.length ? -1 : 1) : 0)
          ),
          0.5 > y() && d.forEach((t) => t.rot(r)),
          !M && d.forEach((t) => t.rot(r / 2))),
        i.prepend(at),
        i.prepend(rt);
      let m = new ht(d, 0.8);
      m.w(cw / 2, ch / 2, yt), m.dt(t, e);
      let b = () => {
        m.f(10, 4, 0.08 == v ? 0.4 : 0.8, s, c),
          m.n < k
            ? lt.setTimeout(b, 0)
            : ((at.style.transform = null),
              i.removeChild(at),
              m.d(t, cw, ch, s));
      };
      b();
    });
}

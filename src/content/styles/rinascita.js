import p5 from 'p5';

const maxSize = 500;

export function drawRinascita(sketch) {
  let tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

  let f,
    i,
    o,
    r,
    l,
    n,
    h,
    w,
    p,
    u,
    g,
    t,
    s,
    S,
    R,
    m = (e, t = 0) => e + R() * (t - e),
    k = Math,
    D = 0,
    L = !1,
    H = (e = 0, t = 1) => {
      let f, a, d, i;
      if (L) (f = D), (L = !1);
      else {
        do {
          (a = m(2) - 1), (d = m(2) - 1), (i = a * a + d * d);
        } while (i >= 1);
        (i = k.sqrt((-2 * k.log(i)) / i)), (f = a * i), (D = d * i), (L = !0);
      }
      return f * t + e;
    },
    M = parseInt,
    U = (e, t, f, a, d) => ((e - t) * (d - a)) / (f - t) + a,
    W = !0,
    C = [],
    V =
      "1b3b4bd40000b68762eef2f6e6e0dae0b299eda67de2725bz0505041d34611f487d237ba133b2cce6e6e6fdd692fb3640z1e90ffff514eff7700f7e3d569b6682b9091486abd282e39z1d2f53ec5c23fdc449f5f1ebf8b8a03cb8a472c1c65898c1zffbb33f1faeea8dadc457b9d1d3557031927424b54042a2bz26437fffcc00d2292effffff0000001884bffefddfd9381ezb8b8d15b5f97319177ffc145ffe0a0fffffbffb5b4ff6b6czccdbdc9ad1d480ced7007ea70032493d5a80ee6c4d293241zd00000fefefa3f88c5032b43136f6337323e96c8a2001242"
        .split`z`.map((e) => e.match(/.{6}/g).map((e) => "#" + e)),
    j = {
      l(e) {
        let t = e
          .substring(1)
          .match(/.{1,2}/g)
          .map((e) => M(e, 16) / 255)
          .map((e) =>
            e <= 0.03928 ? e / 12.92 : k.pow((e + 0.055) / 1.055, 2.4)
          );
        return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
      },
      c(e, t) {
        let f = j.l(e),
          a = j.l(t);
        return (k.max(f, a) + 0.05) / (k.min(f, a) + 0.05);
      },
      r: (e) => w.k[~~m(w.k.length)],
      o(e, t = 0.5, f, a) {
        let d = 360 + sketch.hue(e),
          i = sketch.saturation(e),
          c = sketch.brightness(e);
        return (
          (f = f || sketch.alpha(e)),
          (d = w.l ? 360 * R() : H(d, 4 * t) % 360),
          (i = o(H(i, 4 * t), 1, 100)),
          (c = o(H(c, 4 * t), 1, 100)),
          a || (f = o(H(f, 0.02 * t), 0.01, 1)),
          [d, i, c, f]
        );
      },
    };
  (sketch.setup = (e) => {
    let { hash: a } = tokenData;
    (S = Uint32Array.from(
      [0, 1, (s = t = 2), 3].map((e) => M(a.substr(8 * e + 2, 8), 16))
    )),
      (R = (e) => (
        (t = S[3]),
        (S[3] = S[2]),
        (S[2] = S[1]),
        (S[1] = s = S[0]),
        (t ^= t << 11),
        (S[0] ^= t ^ (t >>> 8) ^ (s >>> 19)),
        S[0] / 2 ** 32
      )),
      (w = {
        a: m(10, 80),
        b: 1 + ~~m(5, 30),
        c: 1 + ~~m(5, 20),
        d: R() < 0.7 ? m(10, 100) : 0,
        e: R() < 0.4,
        f: m(0.1, 0.3),
        g: m(2, 80),
        h: m(50, 500),
        i: R() < 0.4 ? ~~m(2, 4) : R() < 0.2,
        j: R() < 0.3,
        k: ~~m(V.length),
        l: R() < 0.05,
        m: R() < 0.1,
        p: 10 * ~~m(10, 300),
      }),
      (w.n = w.b + w.c);
    let d = U(w.n, 12, 50, 750, 75),
      c = U(w.n, 12, 50, 2500, 250);
    if (((w.o = m(d, c)), (w.n = w.b * w.c), w.l))
      (w.k = ["#000000", "#ffffff"]), (w.e = j.r()), (w.m = !0);
    else if (((w.k = V[w.k]), (w.e = w.e ? "#f2f2f2" : j.r()), w.m)) {
      let e;
      do {
        e = j.r();
      } while (j.c(e, w.e) < 2);
      w.k = [e];
    }
    sketch.noiseSeed(M(a.substr(34, 16), 16)),
      sketch.noiseDetail(8, 0.5),
      sketch.colorMode(sketch.HSB),
      u = maxSize,
      g = maxSize / 0.8,
      (r = u * w.f),
      (n = u - 2 * r),
      (h = g - 2 * r),
      (l = u / 2048),
      sketch.createCanvas(u, g),
      (f = sketch.createVector),
      (i = sketch.noise),
      (o = sketch.constrain),
      (p = f(0, 0));
    let b = n / w.c,
      x = h / w.b;
    for (let e = 0; e < w.b; e += 1)
      for (let t = 0; t < w.c; t += 1) {
        let f = H((t + 0.5) * b, l * w.d),
          a = H((e + 0.5) * x, l * w.d),
          d = H(f, l * w.a),
          i = H(a, l * w.a);
        2 === w.i
          ? ((f = t * b), (d = (t + 1) * b), (i = a))
          : 3 === w.i && ((a = e * x), (i = (e + 1) * x), (d = f)),
          C.push(new A(f, a, d, i));
      }
  }),
    (sketch.draw = (e) => {
      if (W) {
        sketch.background(w.e),
          sketch.noFill(),
          sketch.strokeWeight(l),
          sketch.stroke(j.l(w.e) < 0.5 ? 360 : 0, 0.01);
        for (let e = 0; e <= g; e += 2 * l)
        sketch.line(0, H(e, 10 * l), u, H(e, 10 * l));
        W = !1;
      }
      sketch.translate(r, r);
      for (let e = 0; e < C.length; e++) {
        let t = C[e];
        t.D(), t.U();
      }
      sketch.frameCount > w.o && sketch.noLoop();
    });
  class A {
    constructor(e, t, a, d) {
      (this.a = f(e, t)),
        (this.b = f(a, d)),
        (this.z = i(e / l, t / l) * w.g),
        (this.c = j.o(j.r(), 1, 1, !0)),
        (this.d = ((e, t = 1e10) => k.trunc(e * t) / t)(
          1 / ((this.a.dist(this.b) / l) * m(0.03, 0.4))
        )),
        (this.e = sketch.abs(H() * l * 20)),
        (this.s = m(1, 2.5) * l);
    }
    U() {
      let { a, b, z } = this,
        x = a.x / w.h,
        y = a.y / w.h;
      (z += sketch.frameCount / w.p),
        (x = U(i(x / l, y / l, z), 0.15, 0.85, -l, l)),
        (y = U(i(x / l, y / l, z + 5e5), 0.15, 0.85, -l, l)),
        2 === w.i
          ? (x = 0)
          : 3 === w.i
            ? (y = 0)
            : w.i && ((x = x < 0 ? -l : l), (y = y < 0 ? -l : l)),
        a.add(x, y),
        b.add(x, y);
    }
    P(e, t, f, a, d) {
      sketch.blendMode(f), sketch.fill(j.o(a, 1, d)), sketch.rect(e.x, e.y, t);
    }
    D() {
      let { a, b, c, d, e, s, P } = this;
      if (a.x > -e && a.x < n + 2 * e && a.y > -e && a.y < h + 2 * e) {
        w.j && ((c = j.o(c, 0.1, 1, !0)), (this.c = c));
        for (let e = 0; e <= 1; e += d)
            p5.Vector.lerp(a, b, e, p),
            sketch.noStroke(),
            P(p, s, sketch.MULTIPLY, c, 0.8),
            P(p, s, sketch.OVERLAY, c, 0.4),
            P(p, s, sketch.BLEND, c, 0.6);
      }
    }
  }
  return sketch;
}

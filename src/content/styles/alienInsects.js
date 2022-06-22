import p5 from 'p5';

import { urlParamTxHash } from '../util.js'

let maxSize = 500;

const tokenData = { hash: urlParamTxHash() };

export function drawAlienInsects({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {

  const e = (e) => parseInt(e.hash.slice(0, 16), 16);
  let f,
    t,
    a = e(tokenData),
    c = 1e3,
    s = maxSize,
    o = maxSize,
    i = Math.min(s, o),
    n = i / c;
  const d = [
      "xcudlez",
      "quairq",
      "xiurq",
      "ptlmoerq",
      "ubqagle",
      "ffxang",
      "yumg",
      "bwuzqr",
      "vtolmr",
    ],
    r = {
      t: [-10, -6],
      o: [-6, -3],
      i: [-3.5, -1.5],
      l: [-1.2, -0.7],
      h: [0.7, 2],
      p: [2, 4],
      u: [4, 6],
      k: [6, 10],
    },
    b = ["paper", "rain", "canvas"],
    l = () => {
      const e = [];
      for (let f = 0; f < 5; f += 1) {
        const f = [];
        for (let e = 0; e < 4; e += 1) f.push(".");
        e.push(f);
      }
      return e;
    },
    h = ["standard", "skeleton", "avatar"];
  let p = 0;
  const u = () => {
    (p += 1), (a = e(tokenData)), t();
  };
  window.addEventListener("click", u), window.addEventListener("touchstart", u);
  const k = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  sketch.setup = function() {
    (f = sketch.drawingContext),
      sketch.createCanvas(i, i),
      sketch.strokeWeight(n),
      sketch.strokeCap(sketch.SQUARE),
      sketch.noiseSeed(a);
    let e = sketch.displayDensity();
    sketch.pixelDensity(e);
    const c = 2.4 * i;
    let s;
    (t = () => {
      const e = h[p % h.length],
        t = [y([1, 2, 3]), y([3, 4]), y([2, 3, 4]), y([3, 4]), y([2, 3])],
        a = [0, 1, 2, 3],
        o = l().map((e, f) => C(a, t[f]).sort());
      o.map((e) => e.join("")).join("|");
      let i = y(d),
        u = w() > 0.92,
        k = !u && w() > 0.5,
        z = w() > 0.95,
        D = !z && w() > 0.8,
        P = D && w() > 0.7,
        E = !!D && y([20, 50, 100]),
        S = !D && w() > 0.5,
        W = S && w() > 0.9,
        B = !z && w() > 0.95,
        I = w() > 0.98,
        A = !u && w() > 0.7,
        N = y(Object.keys(r)),
        $ = "scout" === N || "tank" === N ? w() > 0.7 : w() > 0.93,
        R = !$ && w() > 0.8,
        T = y(b);
      const O = w() > 0.997,
        j = F(q[i].length - 1);
      let Q;
      O && (T = "grid"), (Q = u ? 10 : 5e3);
      const U = q[i][j];
      s = m(M(U), Q).map((e) => {
        const f = sketch.color(e);
        return f.setAlpha(255), f;
      });
      const G = sketch.color(U[0]),
        H = sketch.color(U[1]);
      sketch.push(),
        sketch.noStroke(),
        g(
          sketch.width / 2,
          sketch.height / 2,
          1.35 * sketch.width,
          [0, 0.7, 1],
          [H, "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"]
        ),
        sketch.rect(0, 0, sketch.width, sketch.height),
        sketch.pop();
      const J = 0.025 * sketch.width;
      if ("grid" !== T) {
        sketch.push(), sketch.strokeWeight(0.1 * n);
        for (let e = 0; e < 1e5; e += 1) {
          sketch.stroke(s[e % s.length]);
          let f = w() * sketch.width,
            t = w() * sketch.height,
            a = 2 * w() * Math.PI * 0.8;
          if ("paper" === T) {
            let e = 0.8 * (50 * w() + 2),
              c = Math.cos(a) * e + f,
              s = Math.sin(a) * e + t;
              sketch.line(f, t, c, s);
          } else if ("rain" === T) {
            let e = 0.8 * (5 * w() + 2),
              c = Math.cos(a) * e + f,
              s = Math.sin(a) * e + t;
              sketch.line(f, t, c, s);
          } else if ("canvas" === T && e % 20 == 0) {
            let e = 0.8 * (50 * w() + 2),
              c = Math.cos(a) * e + f,
              s = Math.sin(a) * e + t;
              sketch.noFill(), sketch.rectMode(sketch.CENTER), sketch.rect(f, t, 100), sketch.rect(c, s, 100);
          }
        }
        sketch.pop();
      } else {
        const e = [];
        v(J, J, sketch.width - 2 * J, sketch.height - 2 * J, 6, e, 1, w),
        sketch.push(),
          sketch.strokeWeight(0.1 * n),
          e.forEach(({ x: e, y: f, w: t, g: a }, c) => {
            sketch.noFill(),
              sketch.stroke(G),
              sketch.rect(e, f, t, a),
              sketch.noStroke(),
              sketch.fill(G),
              sketch.textSize(8),
              sketch.textAlign(sketch.CENTER),
              sketch.text("TBOA"[c % 4], e + t / 2, f + a / 1.3);
          }),
          sketch.pop();
      }
      if (
        (sketch.push(),
        sketch.noStroke(),
        "paper" === T || "rain" === T
          ? sketch.fill(0, 80)
          : ("canvas" !== T && "grid" !== T) || sketch.fill(0, 180),
        sketch.rect(0, 0, sketch.width, sketch.height),
        sketch.pop(),
        !O && "avatar" !== e)
      ) {
        const e = 0.025 * sketch.width,
          t = 0.025 * sketch.height;
        sketch.push(), sketch.translate(0.05 * sketch.width, 0.05 * sketch.height);
        for (let a = 0; a < 5; a += 1)
          for (let c = 0; c < 4; c += 1)
            if (o[a].includes(c)) {
              const o = c * e,
                i = a * t;
              (f.shadowColor = s[Math.round(s.length / 2)]),
                (f.shadowBlur = 15 * n * (sketch.pixelDensity() / 2)),
                sketch.fill(G),
                sketch.noStroke(),
                sketch.circle(o + e / 2, i + t / 2, e / 2);
            }
        sketch.pop();
      }
      "avatar" !== e &&
        (sketch.push(),
        sketch.noFill(),
        sketch.stroke(G),
        (f.shadowColor = s[Math.round(s.length / 2)]),
        (f.shadowBlur = 30 * n * (sketch.pixelDensity() / 2)),
        sketch.rect(J, J, sketch.width - 2 * J, sketch.height - 2 * J),
        sketch.pop());
      let K = sketch.width;
      sketch.push(), sketch.translate(sketch.width / 2, sketch.height / 2), sketch.rotate(0.25 * sketch.PI);
      let L = 0;
      const V = y([-1, 1]),
        X = x(...r[N]),
        Y = x(2, 8) * V;
      let Z = [x(40, 200) * n, x(10, 30) * n];
      z && (Z = [10, x(10, 30) * n]);
      const _ = x(c),
        ee = [x(40, 200) * n, x(10, 30) * n],
        fe = x(c),
        te = sketch.PI,
        ae = 1.35,
        ce = B ? 20 : 1e3,
        se = 1.2,
        oe = P ? 5 : 20;
      if ("skeleton" !== e) {
        sketch.push(),
          sketch.strokeWeight(1.3 * n),
          sketch.drawingContext.setLineDash(ee),
          (sketch.drawingContext.lineDashOffset = fe),
          sketch.beginShape(),
          sketch.noFill(),
          sketch.stroke(G),
          (f.shadowColor = s[Math.round(s.length / 2)]),
          (f.shadowBlur = 30 * n * (sketch.pixelDensity() / 2));
        for (let e = 0; e < te; e += 0.005) {
          let f;
          if (I) {
            const t = sketch.cos(e / X),
              a = sketch.sin(e / X);
            f = 1.5 * sketch.map(sketch.noise(50 * t, 50 * a), 0, 1, 0, 1);
          } else f = sketch.sin(e * Y + sketch.noise(e));
          let t = K * f * 0.3;
          sketch.noFill(), sketch.vertex(sketch.sin(e * X) * t, sketch.cos(e * X) * t);
        }
        sketch.endShape(), sketch.pop();
      }
      sketch.push(), $ ? sketch.strokeWeight(0.1 * n) : sketch.strokeWeight(1.3 * n);
      const ie = "skeleton" === e ? 0.025 : 5e-4;
      for (let t = 0; t < te; t += ie) {
        let a;
        if (I) {
          const e = sketch.cos(t / X),
            f = sketch.sin(t / X);
          a = 1.5 * sketch.map(sketch.noise(50 * e, 50 * f), 0, 1, 0, 1);
        } else a = sketch.sin(t * Y + sketch.noise(t));
        let c = K * a * 0.3;
        if (
          ("skeleton" !== e &&
            (sketch.drawingContext.setLineDash(Z),
            (sketch.drawingContext.lineDashOffset = $ ? 5e4 * t : _)),
          A)
        ) {
          const e = sketch.cos(t / X),
            f = sketch.sin(t / X);
          (a = Math.round(sketch.map(sketch.noise(10 * e, 10 * f), 0, 1, 0, s.length))),
            sketch.stroke(s[a]);
        } else sketch.stroke(s[Math.round(sketch.map(sketch.sin(L / ce), -1, 1, 0, s.length - 1))]);
        if (
          ("skeleton" === e &&
            (sketch.stroke(G),
            $ &&
              ((f.shadowColor = s[Math.round(s.length / 2)]),
              (f.shadowBlur = 20 * n * (sketch.pixelDensity() / 2))),
            R && sketch.strokeWeight(2.3)),
          sketch.noFill(),
          (L += 1),
          sketch.bezier(
            sketch.cos(t / X) * c,
            sketch.sin(t / X) * c,
            sketch.sin(t * X) * c,
            sketch.cos(t * X) * c,
            sketch.cos(t * X) * c,
            sketch.sin(t * X) * c,
            sketch.sin(t / X) * c,
            sketch.cos(t / X) * c
          ),
          sketch.noFill(),
          k
            ? sketch.bezier(
                sketch.cos(t / X) * c * ae,
                sketch.sin(t / X) * c * ae,
                0,
                0,
                0,
                0,
                sketch.sin(t / X) * c * ae,
                sketch.cos(t / X) * c * ae
              )
            : sketch.bezier(
                sketch.cos(t / X) * c * ae,
                sketch.sin(t / X) * c * ae,
                sketch.acos(sketch.sin(t * X)) * c * 0.5,
                sketch.asin(sketch.cos(t * X)) * c * 0.5,
                sketch.asin(sketch.cos(t * X)) * c * 0.5,
                sketch.acos(sketch.sin(t * X)) * c * 0.5,
                sketch.sin(t / X) * c * ae,
                sketch.cos(t / X) * c * ae
              ),
          sketch.push(),
          sketch.stroke(0),
          sketch.stroke(s[L % s.length]),
          sketch.noFill(),
          k
            ? sketch.bezier(
                sketch.cos(t / X) * c * ae,
                sketch.sin(t / X) * c * ae,
                sketch.acos(sketch.sin(t * X)) * c * 0.5,
                sketch.asin(sketch.cos(t * X)) * c * 0.5,
                sketch.asin(sketch.cos(t * X)) * c * 0.5,
                sketch.acos(sketch.sin(t * X)) * c * 0.5,
                sketch.sin(t / X) * c * ae,
                sketch.cos(t / X) * c * ae
              )
            : L % 4 == 0 &&
              (sketch.strokeWeight(0.3 * n),
              sketch.bezier(
                sketch.cos(t / X) * c * ae,
                sketch.sin(t / X) * c * ae,
                0,
                0,
                0,
                0,
                sketch.sin(t / X) * c * ae,
                sketch.cos(t / X) * c * ae
              )),
          sketch.pop(),
          D && "skeleton" !== e && L % oe == 0)
        ) {
          let e = 20;
          for (let a = 0; a <= e; a++) {
            let o = a / e,
              i = sketch.bezierPoint(
                sketch.cos(t / X) * c * 1.1,
                sketch.sin(t * X) * c * 1.1,
                sketch.cos(t * X) * c * 1.1,
                sketch.sin(t / X) * c * 1.1,
                o
              ),
              d = sketch.bezierPoint(
                sketch.sin(t / X) * c * 1.1,
                sketch.cos(t * X) * c * 1.1,
                sketch.sin(t * X) * c * 1.1,
                sketch.cos(t / X) * c * 1.1,
                o
              );
            sketch.push(),
              P &&
                ((f.shadowColor = s[Math.round(s.length / 2)]),
                (f.shadowBlur = 5 * n * (sketch.pixelDensity() / 2))),
              sketch.fill(G),
              sketch.circle(i, d, sketch.map(sketch.sin(L / E), -1, 1, 0, 10)),
              sketch.pop();
          }
        }
        if (S && "skeleton" !== e && L % 2 == 0) {
          let e = 20;
          for (let a = 0; a <= e; a++) {
            let o,
              i,
              d = a / e;
            W
              ? ((o = sketch.bezierPoint(
                  sketch.sin(t * X) * c * se,
                  sketch.cos(t / X) * c * se,
                  sketch.sin(t / X) * c * se,
                  sketch.cos(t * X) * c * se,
                  d
                )),
                (i = sketch.bezierPoint(
                  sketch.cos(t * X) * c * se,
                  sketch.sin(t / X) * c * se,
                  sketch.cos(t / X) * c * se,
                  sketch.sin(t * X) * c * se,
                  d
                )))
              : ((o = sketch.bezierPoint(
                  sketch.cos(t / X) * c * se,
                  sketch.sin(t * X) * c * se,
                  sketch.cos(t * X) * c * se,
                  sketch.sin(t / X) * c * se,
                  d
                )),
                (i = sketch.bezierPoint(
                  sketch.sin(t / X) * c * se,
                  sketch.cos(t * X) * c * se,
                  sketch.sin(t * X) * c * se,
                  sketch.cos(t / X) * c * se,
                  d
                ))),
              sketch.push(),
              sketch.noStroke(),
              (f.shadowColor = s[Math.round(s.length / 2)]),
              (f.shadowBlur = 10 * n),
              sketch.fill(G),
              sketch.circle(o, i, 1),
              sketch.pop();
          }
        }
      }
      if ((sketch.pop(), sketch.pop(), !O && "avatar" !== e)) {
        const e = [];
        for (let f = 0; f < 8; f += 1)
          for (let f = 0; f < 4; f += 1) {
            const f = (x(9) * sketch.PI) / 2,
              t = 20 * sketch.cos(f) * n,
              a = 10 * sketch.sin(f) * n,
              c = (x(6) * sketch.PI) / 2,
              s = 24 * sketch.cos(c) * n,
              o = 12 * sketch.sin(c) * n,
              i = (x(4) * sketch.PI) / 2,
              d = 15 * sketch.cos(i) * n,
              r = 14 * sketch.sin(i) * n;
            e.push({ x2: t, y2: a, F: s, M: o, C: d, D: r });
          }
        sketch.push(),
          sketch.stroke(G),
          (f.shadowColor = s[Math.round(s.length / 2)]),
          (f.shadowBlur = 30 * n * (sketch.pixelDensity() / 2)),
          sketch.translate(0.61 * sketch.width, 0.95 * sketch.height),
          e.length > 0 &&
            e.forEach(({ x2: e, y2: f, F: t, M: a, C: c, D: s }, o) => {
              sketch.noFill(),
                o % 3 == 0 && sketch.translate(0.03 * sketch.width, 0),
                sketch.strokeWeight(1),
                sketch.bezier(0, 0, e, f, t, a, c, s);
            }),
          sketch.pop();
      }
    }),
      t();
  }
  sketch.draw = function() {}
  window.addEventListener("keydown", (f) => {
    k.includes(Number(f.key)) &&
      (sketch.pixelDensity(Number(f.key)), (a = e(tokenData)), t());
  });
  const g = (e, t, a, c, s) => {
    const o = a >= 0 ? a : 0,
      i = f.createRadialGradient(e, t, 0, e, t, o);
    return c.forEach((e, f) => i.addColorStop(e, s[f])), (f.fillStyle = i), i;
  };
  function w() {
    return (
      (a ^= a << 13),
      (a ^= a >> 17),
      (a ^= a << 5),
      ((a < 0 ? 1 + ~a : a) % 1e3) / 1e3
    );
  }
  function x(e, f) {
    return f ? w() * (f - e) + e : w() * e;
  }
  function F(e, f) {
    return Math.floor(x(e, f));
  }
  function y(e) {
    return e[F(0, e.length)];
  }
  function M(e) {
    for (var f, t, a = e.length, c = e.slice(); a; )
      (f = Math.floor(w() * a--)), (t = c[a]), (c[a] = c[f]), (c[f] = t);
    return c;
  }
  const C = (e, f) => M(e).slice(0, f),
    z = (e, f, t) => e.map((a, c) => sketch.lerp(e[c], f[c], t)),
    D = (e) =>
      [...e.substr(1)].reduce(
        (e, f, t, a) =>
          t % 2 ? e.concat(parseInt(`${a[t - 1]}${a[t]}`, 16)) : e,
        []
      ),
    m = (e, f) => {
      const t = [],
        a = Math.ceil(f / e.length),
        c = 1 / a,
        s = e.map((e) =>
          [...e.substr(1)].reduce(
            (e, f, t, a) =>
              t % 2 ? e.concat(parseInt(`${a[t - 1]}${a[t]}`, 16)) : e,
            []
          )
        );
      for (let e = 0; e < s.length; e += 1)
        for (let f = 0; f < a; f += 1) {
          const a = s[e],
            o = s[(e + 1) % s.length];
          t.push(z(a, o, (f + 1) * c));
        }
      return t;
    },
    v = (e, f, t, a, c, s, o, i) => {
      if (--c >= 0 && i() < o) {
        let n = t / 2,
          d = a / 2;
        v(e, f, n, d, c, s, o, i),
          v(e + n, f, n, d, c, s, o, i),
          v(e + n, f + d, n, d, c, s, o, i),
          v(e, f + d, n, d, c, s, o, i);
      } else s.push({ x: e, y: f, w: t, g: a, n: c });
    },
    q = {
      xcudlez: [
        ["#eeeeee", "#00adb5", "#222831"],
        ["#14ffec", "#0d7377", "#323232", "#212121"],
        ["#dad873", "#309975", "#efeeb4", "#58b368", "#454d66"],
        ["#fee440", "#00bbf9", "#00f5d4", "#9b5de5", "#f15bb5"],
        ["#90e010", "#0b88d6", "#6320c0", "#ff575c", "#ffcb3d"],
      ],
      quairq: [
        ["#81e9e6", "#122c91", "#48d6d2", "#fefcbf", "#2a6fdb"],
        ["#dbe2ef", "#3f72af", "#112d4e", "#f9f7f7"],
        ["#00DFFC", "#343838", "#008C9E", "#00B4CC", "#005F6B"],
        ["#bae8e8", "#2c698d", "#272643", "#ffffff", "#e3f6f5"],
      ],
      xiurq: [
        ["#FF4C29", "#082032", "#2C394B", "#334756"],
        ["#e84545", "#2b2e4a", "#53354a", "#903749"],
        ["#ff165d", "#522546", "#311d3f", "#88304e"],
        ["#ed8d8d", "#8d6262", "#4d4545", "#393232"],
        ["#f95959", "#233142", "#e3e3e3", "#455d7a"],
        ["#eeeeee", "#d72323", "#3a4750", "#303841"],
        ["#fbe8d3", "#f85f73", "#928a97", "#283c63"],
        ["#ff847c", "#2a363b", "#fecea8", "#e84a5f"],
        ["#fecea8", "#e84a5f", "#ff847b", "#2a363b"],
        ["#df1c0a", "#262425", "#77524c", "#d79f90", "#fffefa"],
        ["#edf2f4", "#2b2d42", "#ef233c", "#8d99ae", "#d90429"],
        ["#e5dada", "#840032", "#002642", "#02040f", "#e59500"],
        ["#da9f93", "#ebd4cb", "#b6465f", "#890620", "#2c0703"],
      ],
      ptlmoerq: [
        [
          "#0090ad",
          "#bf034b",
          "#ae0a56",
          "#a31068",
          "#971693",
          "#4b1daf",
          "#1952b3",
          "#1176b1",
          "#0888af",
        ],
        ["#6fe7dd", "#3490de", "#521262", "#6639a6"],
        ["#f25d9c", "#b61aae", "#590d82", "#0c056d"],
        ["#f5c7f7", "#5e63b6", "#27296d", "#a393eb"],
        ["#ffbd39", "#3a0088", "#930077", "#e61c5d"],
        ["#7effdb", "#8c82fc", "#ff9de2", "#b693fe"],
        ["#ffd9e8", "#7f4a88", "#de95ba", "#4a266a"],
        ["#ff8885", "#051936", "#811648", "#fda490", "#5e113d"],
        ["#ddacf5", "#27104e", "#64379f", "#75e8e7", "#9854cb"],
        ["#e0f0ea", "#503a65", "#95adbe", "#3c2a4d", "#574f7d"],
        ["#fff2cd", "#610d4b", "#ff004c", "#abcecc", "#01638d"],
        ["#ffd400", "#820263", "#2e294e", "#eadeda", "#d90368"],
        ["#f1dac4", "#0d0c1d", "#a69cac", "#474973", "#161b33"],
      ],
      ubqagle: [
        ["#fafafa", "#005691", "#004a7c", "#e8f1f5"],
        ["#00bbf0", "#00204a", "#005792", "#d9faff"],
        ["#d2ecf9", "#1891ac", "#1f5f8b", "#253b6e"],
        ["#cee5cb", "#015f9f", "#f9c61f", "#08070f", "#b9111e"],
        ["#c1cddc", "#050f2b", "#516ebc", "#153477", "#00529c"],
        ["#0be7fb", "#010b8b", "#ff6d69", "#fecc50", "#1e0521"],
      ],
      ffxang: [
        ["#ffc857", "#323031", "#db3a34", "#084c61", "#177e89"],
        ["#fcbf49", "#003049", "#d62828", "#f77f00", "#eae2b7"],
        ["#ffd300", "#010000", "#ffa100", "#a74c00", "#f1f2f1"],
        ["#f3a548", "#186c8f", "#edd9c0", "#42353e", "#da393f"],
        ["#f7a400", "#3e4491", "#1a1b4b", "#292a73", "#3a9efd"],
        ["#ffc857", "#177e89", "#323031", "#084c61", "#db3a34"],
        ["#f07b3f", "#2d4059", "#ffd460", "#ea5455"],
        ["#f8ab51", "#ee8927", "#080705", "#efdec4", "#151829"],
        ["#f77f00", "#003049", "#eae2b7", "#d62828", "#fcbf49"],
        ["#fca311", "#000000", "#e5e5e5", "#ffffff", "#14213d"],
        ["#ff8c01", "#0d0b0b", "#d80056", "#5cb8d7", "#ecedef"],
        ["#e5e5e5", "#14213d", "#fca311", "#000000"],
        ["#FFF600", "#26001B", "#810034", "#FF005C"],
      ],
      yumg: [
        ["#f0f5f9", "#52616b", "#1e2022", "#c9d6df"],
        ["#e0fbfc", "#253237", "#c2dfe3", "#9db4c0", "#5c6b73"],
        ["#ffffff", "#000000", "#ffffff", "#dddddd", "#000000"],
        ["#b8dbd9", "#2f4550", "#586f7c", "#000000", "#f4f4f9"],
        ["#c9e4ca", "#364958", "#3b6064", "#87bba2", "#55828b"],
      ],
      bwuzqr: [
        ["#ff2e63", "#252a34", "#08d9d6", "#eaeaea"],
        ["#dfe5e5", "#176c6a", "#97151f", "#212220", "#013b44"],
        ["#a8dadc", "#457b9d", "#e63946", "#1d3557", "#f1faee"],
        ["#41ead4", "#0c0f0a", "#fbff12", "#ff206e", "#ffffff"],
        ["#ffffff", "#0c44ac", "#970005", "#ed0101", "#000052"],
      ],
      vtolmr: [
        [
          "#ff9e00",
          "#240046",
          "#3c096c",
          "#5a189a",
          "#7b2cbf",
          "#9d4edd",
          "#ff6d00",
          "#ff7900",
          "#ff8500",
          "#ff9100",
        ],
        ["#edb126", "#aa341b", "#302a46", "#2d1a1e", "#e8b797"],
        ["#f15a00", "#1b1f22", "#555752", "#b43200", "#b6b2a9"],
        ["#ECD078", "#53777A", "#D95B43", "#C02942", "#542437"],
        ["#FECEA8", "#2A363B", "#FF847C", "#99B898", "#E84A5F"],
        ["#f1e8e6", "#edd2cb", "#f55951", "#361d32", "#543c52"],
        ["#ffca7a", "#0a2f35", "#12492f", "#f7a325", "#f56038"],
        ["#eb5e28", "#252422", "#ccc5b9", "#fffcf2", "#403d39"],
        ["#ff7d00", "#78290f", "#15616d", "#001524", "#ffecd1"],
        ["#ec9a29", "#143642", "#0f8b8d", "#a8201a", "#dad2d8"],
        ["#edd382", "#020122", "#fc9e4f", "#f4442e", "#f2f3ae"],
        ["#f42c04", "#0f1a20", "#88a2aa", "#ada296", "#e2856e"],
        ["#dde2c6", "#090c02", "#e6eed6", "#bbc5aa", "#a72608"],
      ],
    };
  }

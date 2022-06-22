import p5 from 'p5';

import { urlParamTxHash } from '../util.js'

let maxSize = 500;

const tokenData = { hash: urlParamTxHash() };

export function eccentrics2Draw({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {
  // reformatted with prettier
  let t,
    s = [
      ["#efdaba", "#f3b232", "#0f0e0e", "#efdaba", "#f3b232"],
      ["#efdaba", "#e93e48", "#0f0e0e", "#efdaba", "#e93e48"],
      ["#efdeca", "#3f7fb6", "#3f7fb6", "#2a2c2f", "#efdeca"],
      ["#efdeca", "#8e66aa", "#8e66aa", "#2a2c2f", "#efdeca", "#efdeca"],
      ["#efdeca", "#ed817d", "#ed817d", "#2a2c2f", "#efdeca", "#efdeca"],
      ["#efdeca", "#5da7ac", "#5da7ac", "#2a2c2f", "#efdeca", "#efdeca"],
      ["#efdeca", "#44a850", "#44a850", "#2a2c2f", "#efdeca", "#efdeca"],
      ["#3e9198", "#2e3333", "#ffeaa5", "#a16f8a", "#8e9d70", "#6ababf"],
      [
        "#FFF0D5",
        "#52607B",
        "#7CACCB",
        "#DC826A",
        "#F29E6D",
        "#F2CD88",
        "#ACD7F2",
        "#D97F77",
        "#F25270",
      ],
      [
        "#f2e0bb",
        "#4b677d",
        "#053236",
        "#efaa5f",
        "#037c99",
        "#76a46f",
        "#e7a298",
        "#37aabc",
        "#85b6b4",
      ],
      [
        "#e0d7c5",
        "#7694b0",
        "#543e2e",
        "#fcd265",
        "#84afd7",
        "#7ca68e",
        "#f2c029",
        "#d9525e",
        "#f7b1a1",
      ],
      ["#d5cda1", "#613a53", "#639aa0", "#ec6c26", "#e8ac52"],
      [
        "#E8D9B3",
        "#325A6A",
        "#1F80A6",
        "#1797A6",
        "#8BD9D1",
        "#D9AE5F",
        "#5B969D",
        "#AAC498",
        "#E9BE54",
      ],
      [
        "#f0e7d8",
        "#1a3854",
        "#598c4a",
        "#3998b6",
        "#7a5f70",
        "#8bb3d6",
        "#97c6cc",
      ],
      ["#e2d5bc", "#5f7d81", "#e6b164", "#a64e55", "#402a01"],
      [
        "#f4e6c4",
        "#6a6768",
        "#7a5f70",
        "#7dbaba",
        "#f2c744",
        "#bf4b54",
        "#f27e93",
        "#3e5d89",
        "#e8d2a7",
        "#e6dbd1",
      ],
      ["#fff4e6", "#95b2b1", "#a6d0ce", "#c0ca6a", "#50712a"],
      ["#fcf0e0", "#221d21", "#2096bb", "#ed3029", "#f7cc27", "#fcaab4"],
      [
        "#ffd693",
        "#d1bda6",
        "#d4e5e7",
        "#9cc1d9",
        "#4e411e",
        "#f27244",
        "#fd8c81",
        "#ab694d",
      ],
      [
        "#fdcea0",
        "#d38f8f",
        "#f2c572",
        "#d95970",
        "#c4c982",
        "#e3d0b7",
        "#5d4242",
        "#78444f",
      ],
      ["#3370a6", "#2e3333", "#f2d230", "#f27830", "#f2a03d", "#f24c3d"],
      ["#fee6c8", "#3a5d8c", "#f288a4", "#b19973", "#bbbf3f"],
      [
        "#F2E9D8",
        "#3D6B9C",
        "#C79E4C",
        "#5A8B5B",
        "#3D6B9C",
        "#E7D299",
        "#85BAC0",
      ],
      [
        "#fff8f3",
        "#54a4ca",
        "#32321b",
        "#4b783e",
        "#468871",
        "#4d9798",
        "#54a4ca",
        "#a4a4ef",
        "#eaa2f5",
        "#f9bad9",
        "#fdd3d2",
        "#feead9",
        "#fdd3d2",
        "#f9bad9",
        "#eaa2f5",
        "#a4a4ef",
        "#4d9798",
        "#468871",
        "#4b783e",
      ],
      ["#efdeca", "#f98ea5", "#1ba8d1", "#f98ea5", "#1ba8d1", "#2a2c2f"],
      [
        "#cbe1de",
        "#eec9c4",
        "#e6eff9",
        "#cbed67",
        "#1fa1cf",
        "#a3b7b5",
        "#2a2c2f",
        "#efdeca",
      ],
      [
        "#78a6a9",
        "#252927",
        "#e59c3d",
        "#8b9994",
        "#eafecb",
        "#2a2c2f",
        "#efdeca",
      ],
      [
        "#ffeeda",
        "#303637",
        "#222",
        "#cad6e2",
        "#fbb8bf",
        "#fa5158",
        "#e5c6b5",
        "#70a5bc",
        "#efdaba",
        "#2a2c2f",
      ],
      [
        "#e27487",
        "#e6a88d",
        "#f7e5d8",
        "#b9d5f0",
        "#62b8bf",
        "#efdaba",
        "#2a2c2f",
      ],
      [
        "#F2DABD",
        "#B280A1",
        "#402D3F",
        "#BF5A6C",
        "#9AA680",
        "#BECDCB",
        "#63678E",
        "#607860",
        "#E1A497",
      ],
      [
        "#efdaba",
        "#D1C095",
        "#22385D",
        "#204473",
        "#BFB74B",
        "#F2A649",
        "#D97941",
        "#D92B2B",
        "#939228",
        "#DFB456",
        "#983820",
      ],
      [
        "#F9F4E1",
        "#11AEBF",
        "#F2AB27",
        "#012E40",
        "#F76C4F",
        "#F2EFBB",
        "#94C5C8",
        "#B5D9D9",
        "#E4C271",
        "#F8A293",
      ],
      [
        "#F2EFBD",
        "#BF452A",
        "#84BFA4",
        "#D99B29",
        "#594A3C",
        "#B8D4AB",
        "#FFEB88",
      ],
      [
        "#F2F1DC",
        "#43CAD9",
        "#5B584E",
        "#4D95A4",
        "#D5D962",
        "#A3A656",
        "#F29C94",
        "#F2F1DC",
      ],
      [
        "#F3F0D1",
        "#7D9AC0",
        "#2E2C2F",
        "#B7B5B9",
        "#DCCEBB",
        "#D91111",
        "#ECECEC",
      ],
      [
        "#F2F0D5",
        "#B1B1AC",
        "#F2C53D",
        "#A6BF4B",
        "#668C4A",
        "#A3CDD9",
        "#353D40",
      ],
      [
        "#FCEBC2",
        "#73395F",
        "#343D59",
        "#8AB0E0",
        "#ABCFF5",
        "#EDB594",
        "#A394BA",
        "#BF7E8A",
        "#F4C0C4",
        "#8FBABF",
      ],
      [
        "#DBDDC8",
        "#57565B",
        "#F2DEA2",
        "#9FBFBF",
        "#ECBD87",
        "#959772",
        "#6A8481",
        "#D89990",
        "#C4706C",
      ],
      [
        "#F2F0D8",
        "#504959",
        "#798C87",
        "#83A64E",
        "#B5AABF",
        "#A6728A",
        "#7B3E4D",
        "#E0D0AF",
        "#DFEEC7",
      ],
      [
        "#EEF2CE",
        "#27272F",
        "#D93B58",
        "#FFE06C",
        "#608BA6",
        "#ACA9A4",
        "#739FBC",
        "#EBECE7",
        "#FF937E",
      ],
    ],
    i = [
      ["#ffcf48", "#e40032", "#500920", "#e40032", "#fdbf34"],
      ["#1f352a", "#e52fdb", "#14f9ff"],
      ["#2c0c58", "#ff258b", "#ffee52"],
      ["#ff87aa", "#581c58", "#ffead9"],
      ["#fff3c6", "#171031", "#cb368a", "#cb368a", "#ffdcb4"],
      ["#f2dbbd", "#3e185e", "#8f9700", "#8e66aa", "#f0dbbc"],
      ["#1a8afe", "#1f352a", "#9dff0a", "#88ef05", "#1a8afe"],
      ["#1f352a", "#e52fdb", "#93ff00", "#93ff00", "#af3886", "#e52fdb"],
    ];
  function e() {
    (t ^= t << 13), (t ^= t >> 17);
    const s = (((t ^= t << 5) < 0 ? 1 + ~t : t) % 1e5) / 1e5;
    return 0 === s || 1 === s ? 0.5 : s;
  }
  function h(t = 1) {
    return Math.floor(e() * t);
  }
  let a,
    f,
    c,
    n = {
      R: 0,
      Painted: 1,
      Inked: 2,
      Wild: 3,
      Homage: 4,
      BW: 5,
      GrayPlus: 6,
      Grayscale: 7,
      Whiteout: 8,
    },
    l = n.R;
  const r = 1e4;
  let o,
    d,
    u,
    b,
    B,
    F,
    C = 54,
    D = 0,
    A = 1,
    E = 0,
    M = 1,
    p = 2,
    w = 0,
    v = 1,
    g = 2,
    m = 3,
    x = 4,
    y = 5,
    L = 6,
    k = 7,
    I = 8,
    P = 9,
    S = 10,
    W = 11,
    X = {
      0: [v, g, m, x, I, P, k, y],
      1: [v, x, g, m, I, P, k],
      2: [g, x, m, I, P, k],
      3: [m, x, g, I, P, k],
      4: [x, x, x, x, x, x, x],
      5: [x, w, m, g, I, y],
      6: [x, w, m, g, I, y],
      7: [m, x, g, I],
      8: [x, v, I, k],
      9: [P, x],
      10: [x, P],
    },
    Y = [
      [
        [0.618, 0.372],
        [0.372, 0.618],
      ],
      [
        [0.25, 0.5, 0.25],
        [0.125, 0.75, 0.125],
        [0.4, 0.2, 0.4],
        [0.5, 0.3, 0.2],
      ],
      [
        [0.2, 0.3, 0.3, 0.2],
        [0.1, 0.4, 0.4, 0.1],
      ],
      [
        [0.1, 0.2, 0.4, 0.2, 0.1],
        [0.125, 0.125, 0.5, 0.125, 0.125],
      ],
    ],
    j = !1,
    G = 0,
    R = 0,
    T = 1,
    _ = 2,
    H = 3,
    N = 4,
    O = 0,
    q = [],
    z = !1,
    J = 0,
    K = !1,
    Q = !1,
    U = !0,
    V = !0,
    Z = !1,
    $ = 3,
    tt = !1,
    st = !1;

  const it = sketch;

  // using `it` as in initial code
  function et() {
    (t = (function (t, s = 0) {
      return (
        s < 2 && "0x" == t.slice(0, 2) && (s = 2),
        parseInt(t.slice(s, s + 8), 16)
      );
    })(tokenData.hash)),
      (F = parseInt(tokenData.tokenId) % 1e6),
      ht();
  }
  function ht() {
    (f = window.innerWidth),
      (c = window.innerHeight),
      (d = Math.min(f, c, maxSize)),
      (A = d / r),
      (u = 21 * A),
      (o = Math.round(45 * A));
  }
  function at() {
    (st = !1),
      (Q = e() > 0.95),
      (U = e() > 0.6),
      (V = e() > 0.95),
      (Z = e() > 0.65),
      ($ = 2 + (h(5) % 2)),
      (function () {
        (At = h(100)), (Ct = []);
        const t = Object.keys(Ft).find((t) => parseInt(t) > At);
        Ft[t]();
      })(),
      (tt = e() > 0.98);
    let t = e();
    (q = []), (O = 0);
    let i = e();
    i < 0.24
      ? (G = H)
      : i < 0.46
        ? ((G = N), (O = 1))
        : (G = i < 0.71 ? R : i < 0.72 ? _ : T);
    let a = Ct[O],
      f = [a];
    f.push(Ct[1 - O]), f.push(gt()), f.push(gt());
    let c = new xt({
      type: 0,
      pt: 0,
      ancestors: [],
      topLeftX: 0,
      topLeftY: 0,
      w: r,
      h: r,
      m: 400,
      dp: -1,
      bgColor: a,
      gradients: f,
      lineColor: b,
      at: p,
    });
    q.push(c);
    256 == F || 128 == F
      ? (function (t) {
        G = R;
        let s = 10;
        ct(
          t,
          2 * t.m,
          2 * t.m,
          t.iw - 2 * t.m,
          t.ih - 2 * t.m,
          s,
          0.4,
          P
        );
        let i = 0.1 * t.iw;
        t.am(
          t.center.x - 0.05 * t.iw,
          t.center.y - 0.05 * t.iw,
          i,
          0.1 * t.ih,
          t.dp + 1,
          g
        ),
          t.am(
            t.m + (t.iw - 0.35 * i) / 2,
            0.34 * t.ih,
            0.35 * i,
            i,
            t.dp + 1,
            x
          );
      })(c)
      : 222 == F
        ? (function (t) {
          G = G.Vertical;
          t.am(
            -t.w / 2,
            0.65 * t.h,
            2 * t.w,
            1.5 * t.w,
            t.dp + 1,
            x,
            1 - O
          ),
            t.am(2 * t.m, 2 * t.m, 0.25 * t.iw, 0.25 * t.ih, t.dp + 1, x),
            t.am(
              0.75 * t.iw,
              2 * t.m,
              0.25 * t.iw,
              0.25 * t.ih,
              t.dp + 1,
              x
            ),
            t.am(
              t.m + 0.38 * t.iw,
              t.m,
              0.24 * t.iw,
              0.68 * t.ih,
              t.dp + 1,
              S,
              1 - O
            );
        })(c)
        : F > 0 && F % 100 == 0
          ? (e() > 0.5 ? ft(c, 7, 12, !0) : ft(c, 7, s.length),
            (function (t) {
              G = R;
              let s = 5,
                i = 5,
                e = 216,
                h = t.m + 108,
                a = t.iw - e,
                f = t.ih - e,
                c = (a - e * (s - 1)) / s,
                n = (f - e * (i - 1)) / i;
              for (var l = 0; l < i; l++)
                for (var r = 0; r < s; r++) {
                  let s = 2 == l && 2 == r ? P : x;
                  t.am(h + r * (c + e), h + l * (n + e), c, n, 1, s);
                }
            })(c))
          : F % 625 == 0
            ? (ft(c, 13, s.length), nt(c))
            : [68, 109, 135, 145, 272].indexOf(F) >= 0
              ? ((st = !0), ft(c, 7, s.length), ut(c))
              : t < 0.12
                ? c.ams(0)
                : t < 0.13
                  ? (function (t) {
                    let s,
                      i,
                      a = t,
                      f = 108,
                      c = 7,
                      n = f,
                      l = (a.ih - n * (c - 1)) / c,
                      r = [x, I];
                    s = r[h(r.length)];
                    for (var o = 2; o < c; o++) {
                      i = a.am(a.m + l / 2, a.m + o * (l + n), l + n, l, a.dp + 1, s);
                      let e = i.clone(a.iw - l - l - f, 0, !0);
                      t.kids.push(e);
                    }
                    s = e() > 0.4 ? y : g;
                    a.am(
                      a.m + 2 * (l + f),
                      a.m,
                      a.iw - 4 * (l + f),
                      a.ih,
                      a.dp + 1,
                      s,
                      -1
                    );
                    s = e() > 0.5 ? x : I;
                    let d = t
                      .am(a.m, a.m, l + l + n, l + l + n, t.dp + 1, s, -1)
                      .clone(a.iw - l - l - f, 0, !0);
                    t.kids.push(d);
                  })(c)
                  : t < 0.18
                    ? (e() > 0.5 ? ft(c, 7, 12, !0) : ft(c, 7, s.length),
                      (function (t, s = 0) {
                        (s == ot || (s != rt && G == T)) && (G = N);
                        let i = t,
                          e = 108,
                          a = 7,
                          f = e,
                          c = (i.ih - f * (a - 1)) / a,
                          n = [w, m, P, w],
                          l = n[h(n.length)],
                          r = [1, 2, 4, 5];
                        s == dt && r.push(0, 6);
                        for (var o = 0; o < a; o++)
                          s != dt &&
                            (i.am(i.m, i.m + o * (c + f), c, c, i.dp + 1, l),
                              i.am(i.w - i.m - c, i.m + o * (c + f), c, c, i.dp + 1, l)),
                            s >= ot &&
                            r.includes(o) &&
                            i.am(
                              i.m + 3 * (c + f),
                              i.m + o * (c + f),
                              c,
                              c,
                              i.dp + 1,
                              l
                            );
                        for (o = 0; o < a; o++)
                          (s == lt || s == ot) &&
                            o > 0 &&
                            o < a - 1 &&
                            (i.am(i.m + o * (c + f), i.m, c, c, i.dp + 1, l),
                              i.am(i.m + o * (c + f), i.h - i.m - c, c, c, i.dp + 1, l)),
                            s >= ot &&
                            i.am(
                              i.m + o * (c + f),
                              i.m + 3 * (c + f),
                              c,
                              c,
                              i.dp + 1,
                              l
                            );
                        if (((l = w), s >= ot)) {
                          let t = s == dt ? i.m : i.m + 1 * (c + e),
                            h = s == dt ? 3 * c + 2 * f : 2 * c + f,
                            a = i.am(t, t, h, h, i.dp + 1, l);
                          (a = i.am(i.m + 4 * (c + f), t, h, h, i.dp + 1, l)),
                            (a = i.am(t, i.m + 4 * (c + f), h, h, i.dp + 1, l)),
                            (a = i.am(
                              i.m + 4 * (c + f),
                              i.m + 4 * (c + f),
                              h,
                              h,
                              i.dp + 1,
                              l
                            ));
                        } else {
                          let t = s == rt ? i.m : i.m + 1 * (c + e),
                            h = s == rt ? i.ih : i.ih - 2 * (c + e);
                          i.am(i.m + 1 * (c + e), t, i.iw - 2 * (c + e), h, i.dp + 1, l);
                        }
                      })(c, h(6) % 4))
                    : t < 0.185
                      ? (function (t) {
                        G = R;
                        let s = 25,
                          i = t.m,
                          e = [x, P, x],
                          a = e[h(e.length)];
                        for (var f = 0; f < s; f++) {
                          let s = Math.max(h(0.8 * t.iw - 50 * f), i),
                            e = h(t.w - s - i),
                            c = h(t.h - s - i);
                          t.am(i + e, i + c, s, s, t.dp + 1, a);
                        }
                      })(c)
                      : t < 0.22
                        ? (function (t) {
                          let s = (0.15 + 0.7 * e()) * t.iw,
                            i = (0.15 + 0.7 * e()) * t.ih,
                            h = e() > 0.5,
                            a = 108,
                            f = h ? t.m + t.iw - s : t.m,
                            c = h ? t.m : t.m + s + a;
                          t.am(f, t.m, s, t.ih, t.dp + 1, w),
                            t.am(c, t.m, t.iw - s - a, i, t.dp + 1, w),
                            t.am(c, t.m + i + a, t.iw - s - a, t.ih - i - a, t.dp + 1, w);
                        })(c)
                        : t < 0.24
                          ? (function (t) {
                            G = e() > 0.1 ? R : N;
                            let s = h(7) + 7;
                            ct(t, t.m, t.m, t.iw, t.ih, s, 0.22),
                              t.am(
                                t.center.x - 0.3 * t.iw,
                                t.center.y - 0.3 * t.iw,
                                0.6 * t.iw,
                                0.6 * t.ih,
                                t.dp + 1,
                                x
                              );
                          })(c)
                          : t < 0.25
                            ? (function (t) {
                              G = R;
                              let s = 1.5 * it.PI,
                                i = 5,
                                e = 0.28 * t.w,
                                a = it.TWO_PI / i,
                                f = 0.27 * t.w,
                                c = 0.4 * t.h,
                                n = 0.025 * t.h,
                                l = [I, x, P],
                                r = l[h(l.length)];
                              r != I && (f *= 1.2);
                              for (let i = s; i < it.TWO_PI + s; i += a) {
                                let s = t.center.x + Math.cos(i) * e,
                                  h = t.center.y + Math.sin(i) * e;
                                t.am(s - f / 2, n + h - c / 2, f, c, t.dp + 1, r);
                              }
                            })(c)
                            : t < 0.43
                              ? (function (t) {
                                let s,
                                  i,
                                  h,
                                  a = 0.6,
                                  f = (1 - a) / 2;
                                e() > 0.4
                                  ? ((s = y), (i = t.ih), (h = t.m))
                                  : ((i = 0.36 * t.ih), (s = e() > 0.5 ? I : x), (h = t.m));
                                let c = t
                                  .am(t.m, h, t.iw * f, i, t.dp + 1, s, 1 - O)
                                  .clone(t.iw * (1 - f), 0, !0);
                                t.kids.push(c);
                                let n = e();
                                n < 0.15
                                  ? (t.am(
                                    t.m + t.iw * f,
                                    t.m + 0.5 * t.ih,
                                    t.iw * a,
                                    0.5 * t.ih,
                                    t.dp + 1,
                                    w
                                  ),
                                    t.am(t.m + t.iw * f, t.m, t.iw * a, 0.5 * t.ih, t.dp + 1, g))
                                  : ((s = n < 0.4 ? m : n < 0.7 ? g : y),
                                    t.am(t.m + t.iw * f, t.m, t.iw * a, t.ih, t.dp + 1, s));
                              })(c)
                              : t < 0.52
                                ? (function (t, s = !1) {
                                  let i = s ? 0.4 : 0.52,
                                    h = s ? 0.15 : 0.21,
                                    a = s ? t.m + t.iw * h * 2 : t.m + t.iw * (h + 0.03),
                                    f =
                                      (t.am(a, t.m, t.iw * i, t.ih, t.dp + 1, e() > 0.2 ? x : g),
                                        e()),
                                    c = f < 0.2 ? k : f < 0.6 ? g : m,
                                    n = t
                                      .am(t.m, t.m + 0.1 * t.ih, t.iw * h, 0.9 * t.ih, t.dp + 1, c)
                                      .clone(t.iw * (1 - h), 0, !0);
                                  if ((t.kids.push(n), s)) {
                                    let s = f < 0.6 ? g : m,
                                      e = t
                                        .am(
                                          t.m + t.iw * h,
                                          t.m + 0.1 * t.ih,
                                          t.iw * h,
                                          0.9 * t.ih,
                                          t.dp + 1,
                                          s
                                        )
                                        .clone(t.iw * (h + i), 0, !0);
                                    t.kids.push(e);
                                  }
                                })(c, e() < 0.08)
                                : t < 0.53
                                  ? ut(c)
                                  : t < 0.72
                                    ? (function (t) {
                                      let s,
                                        i = e() > 0 ? v : w,
                                        a = 2 + h(8);
                                      for (var f = 0; f < a; f++)
                                        (s = t.am(t.m, t.m, t.iw, t.ih, t.dp + 1, i, -1, !1, !1, !1)),
                                          (t = s);
                                      let c = 2 + (h(5) % 3),
                                        n = C,
                                        l = (s.iw - n * (c - 1)) / c;
                                      i = e() > 0.5 ? g : m;
                                      let r,
                                        o,
                                        d = e() > 0.2;
                                      for (var u = 0; u < c; u++)
                                        d && u > 0
                                          ? ((o = r.clone(u * (l + n), 0, !0)), s.kids.push(o))
                                          : (r = s.am(
                                            s.m + u * (l + n),
                                            2 * s.m,
                                            l,
                                            s.ih - s.m,
                                            s.dp + 1,
                                            i
                                          ));
                                    })(c)
                                    : t < 0.89
                                      ? (function (t) {
                                        let s, i;
                                        G = e() > 0.3 ? H : N;
                                        let a = C;
                                        e() > 0.5 ? ((s = P), (a *= 1.41)) : (s = w);
                                        let f,
                                          c = 1 + h(3);
                                        for (var n = 0; n < c; n++)
                                          (f = 0 == n ? 400 : a),
                                            (i = t.am(
                                              f,
                                              f,
                                              t.w - 2 * f,
                                              t.h - 2 * f,
                                              t.dp + 1,
                                              s,
                                              -1,
                                              !1,
                                              !1,
                                              !1
                                            )),
                                            (t = i);
                                        let l = 2 + (h(5) % 3),
                                          r = i.m,
                                          o = (i.iw - r * (l - 1)) / l;
                                        s = V || e() > 0.5 ? w : y;
                                        let d,
                                          u,
                                          b = e() > 0.2;
                                        for (var B = 0; B < l; B++)
                                          b && B > 0
                                            ? ((u = d.clone(B * (o + r), 0, !0)), i.kids.push(u))
                                            : (d = i.am(i.m + B * (o + r), i.m, o, i.ih, i.dp + 1, s));
                                      })(c)
                                      : t < 0.91
                                        ? (ft(c, 7, s.length),
                                          (function (t) {
                                            let s;
                                            G = R;
                                            let i = 270,
                                              a = 20 + h(10),
                                              f = e(),
                                              c = f > 0.7 ? m : P,
                                              n = f > 0.9;
                                            for (var l = 0; l < a; l++) {
                                              let e = 0 != l || c != P || Z ? i : 1.5 * t.m;
                                              (s = t.am(
                                                i,
                                                e,
                                                t.w - 2 * i,
                                                t.h - 2 * i,
                                                t.dp + 1,
                                                c,
                                                -1,
                                                !1,
                                                n,
                                                !1
                                              )),
                                                (t = s),
                                                0 == l && (i = 76.14);
                                            }
                                            t.am(i, i, t.w - 2 * i, t.h - 2 * i, t.dp + 1, x);
                                          })(c))
                                        : t < 0.92
                                          ? nt(c)
                                          : t < 0.925
                                            ? (ft(c, 7, s.length),
                                              (function (t) {
                                                G = R;
                                                let s = 0.62,
                                                  i = t.am(t.m, t.m, t.iw, t.ih, t.dp + 1, v, 1 - O, !1, !1, !1);
                                                s = 0.42;
                                                let e = (1 - s) / 2;
                                                (t = i).am(
                                                  t.m + t.iw * e,
                                                  t.m + t.ih * e,
                                                  t.iw * s,
                                                  t.ih * s,
                                                  t.dp + 1,
                                                  x
                                                );
                                              })(c))
                                            : t < 0.955
                                              ? (function (t) {
                                                let s = e() > 0.5 ? v : w,
                                                  i = t,
                                                  a = 2 + h(8);
                                                for (var f = 0; f < a; f++)
                                                  (i = t.am(t.m, t.m, t.iw, t.ih, t.dp + 1, s, -1, !1, !1, !1)),
                                                    (t = i);
                                                let c = 2 + (h(3) % 2),
                                                  n = C,
                                                  l = (i.ih - n * (c - 1)) / c,
                                                  r = [m];
                                                c > 2 && r.push(k);
                                                r.push(w, g, x), (s = r[h(r.length)]);
                                                let o,
                                                  d,
                                                  u = e() > 0.04;
                                                for (var b = 0; b < c; b++)
                                                  u && b > 0
                                                    ? ((d = o.clone(0, b * (l + n), !0)), i.kids.push(d))
                                                    : (o = i.am(
                                                      i.m,
                                                      i.m + b * (l + n),
                                                      i.iw,
                                                      l,
                                                      i.dp + 1,
                                                      s,
                                                      2 % Ct.length
                                                    ));
                                              })(c)
                                              : (function (t, s = !1) {
                                                let i = s ? 0.25 * t.iw : 0;
                                                t.am(t.m + i, t.m, 0.75 * t.iw, t.ih, t.dp + 1, x),
                                                  t.am(
                                                    t.m + (s ? 0 : 0.75 * t.iw),
                                                    t.m,
                                                    0.25 * t.iw,
                                                    t.ih,
                                                    t.dp + 1,
                                                    st ? S : e() > 0.5 ? g : m,
                                                    -1,
                                                    !1,
                                                    st
                                                  );
                                              })(c, e() > 0.5);
  }
  function ft(t, s = 0, i = 0, e = !1) {
    (Ct = []),
      e ? wt() : pt(s, i),
      (t.bgColor = Ct[O]),
      (t.gradients = [t.bgColor, Ct[1 - O], gt(), gt()]);
  }
  function ct(t, s, i, h, a, f = 3, c = 1, n = null) {
    let l = s + h / 2,
      r = i + a / 2,
      o = 0.41 * Math.min(h, a),
      d = n;
    n || (d = e() > 0.4 ? I : x),
      d == x && ((f = 50), (c *= 0.65), (o *= 1.1));
    let u = it.HALF_PI,
      b = it.TWO_PI / f,
      B = o * c,
      F = 2.2 * B,
      C = u;
    for (let s = 0; s < f; s++) {
      let s = d == P ? 0.875 + e() / 4 : 1,
        i = B * s,
        h = F * s;
      C += b;
      let a = o,
        f = l - Math.cos(C) * a,
        c = r - Math.sin(C) * a;
      t.am(f - i / 2, c - h / 2, i, h, t.dp + 1, d);
    }
  }
  function nt(t) {
    let s,
      i,
      h = t,
      a = e() > 0.5,
      f = V ? 0.7 : 0.5,
      c = V ? 0.15 * h.iw : a ? 0 : 0.5 * h.iw,
      n =
        (t.am(h.m + c, h.m, h.iw * f, h.ih * f, h.dp + 1, x), V ? 0 : 108),
      l = (h.iw - 6 * n) / 7;
    s = V ? w : y;
    for (var r = 0; r < 7; r++)
      (i = V ? 0.55 * h.iw : (0.2 + 0.1 * r) * h.iw),
        h.am(
          a ? h.m + (7 - r - 1) * (l + n) : h.m + r * (l + n),
          h.m + i,
          l,
          h.ih - i,
          h.dp + 1,
          s
        );
  }
  it.setup = () => {
    (B = it.color(0)),
      (b = it.color(255, 255, 255, 0)),
      et(),
      it.pixelDensity(2),
      (a = it.createCanvas(r * A, r * A)),
      at();
  };
  let lt = 0,
    rt = 1,
    ot = 2,
    dt = 3;
  function ut(t) {
    let s = [x, k, I],
      i = st ? S : s[h(s.length)];
    t.am(
      t.m + t.iw / 4,
      t.m,
      t.iw / 2,
      0.15 * t.ih,
      t.dp + 1,
      i,
      -1,
      !1,
      st
    ),
      t.am(
        t.m + 0.09 * t.iw,
        t.m + 0.17 * t.ih,
        0.82 * t.iw,
        0.83 * t.ih,
        t.dp + 1,
        e() > 0.4 ? x : P
      );
  }
  function bt(t, s, i, e, h, a) {
    const f = i / 2,
      c = e / 2;
    let n = (function (t, s) {
      const i = s / 2,
        e = Math.cos(i),
        h = Math.sin(i),
        a = 1 / Math.tan(i),
        f = t + i,
        c = Math.cos(f),
        n = Math.sin(f),
        l = (4 - e) / 3,
        r = h + (e - l) * a;
      return [
        Math.cos(t).toFixed(7),
        Math.sin(t).toFixed(7),
        (l * c + r * n).toFixed(7),
        (l * n - r * c).toFixed(7),
        (l * c - r * n).toFixed(7),
        (l * n + r * c).toFixed(7),
        Math.cos(t + s).toFixed(7),
        Math.sin(t + s).toFixed(7),
      ];
    })(h, a - h);
    it.bezierVertex(
      t + n[2] * f,
      s + n[3] * c,
      t + n[4] * f,
      s + n[5] * c,
      t + n[6] * f,
      s + n[7] * c
    );
  }
  function Bt(t, s, i, e, h, a, f) {
    it.noFill();
    for (let f = s; f <= s + e; f++) {
      let c = it.map(f, s, s + e, 0, 1),
        n = it.lerpColor(h, a, c);
      it.stroke(n), it.line(t, f, t + i, f);
    }
  }
  (it.draw = () => {
    for (var t = 0; t < q.length; t++) q[t].draw();
    it.noLoop();
  }),
    (it.windowResized = () => {
      (j = !1), ht(), it.resizeCanvas(r * A, r * A);
    }),
    (it.keyReleased = () => {
      "s" === it.key || "S" === it.key
        ? it.save(a, "eccentrics_" + F + "_" + E++ + ".jpg")
        : "n" === it.key || "N" === it.key
          ? ((D = (D + 1) % ks.length),
            (tokenData = hashes[ks[D]]),
            et(),
            at(),
            it.redraw())
          : "r" === it.key || "R" === it.key
            ? ((j = !j), it.redraw())
            : "l" === it.key || "L" === it.key
              ? ((z = !z), it.redraw())
              : ("p" !== it.key && "P" !== it.key) ||
              ((K = !K),
                K
                  ? (function (t = 3600) {
                    (d = t),
                      (A = d / r),
                      (u = 21 * A),
                      (o = Math.round(45 * A)),
                      it.resizeCanvas(r * A, r * A);
                  })(7200)
                  : it.windowResized());
    });
  const Ft = {
    85: pt,
    92: wt,
    96: function () {
      let t = 2 + (h(5) % 3),
        s = (2 == t) & (e() > 0.87) ? 0 : 1;
      var i = 0;
      for (i = 0; i < s; i++) Ct.push(Mt(!0));
      for (i = 0; i < t; i++) Ct.push(Et(!0));
      l = 0 == s ? n.White : n.BW;
    },
    100: function () {
      vt([], 3, 1, 6, !0);
      let t = h(7);
      t > 0
        ? (Ct.push(it.color(s[t - 1][1])), (l = n.GrayPlus))
        : (l = n.Grayscale);
    },
  };
  let Ct = [],
    Dt = 0,
    At = 0;
  function Et(t = !1) {
    let s = h(35);
    return t ? it.color(222 + s, 212 + s, 202 + s) : it.color(255);
  }
  function Mt(t = !1) {
    let s = h(32);
    return t ? it.color(16 + s, 16 + s, 16 + s) : it.color(0);
  }
  function pt(t = 0, i = 0) {
    0 == i && (i = s.length),
      (Dt = Math.min(t + h(i - t), s.length - 1)),
      vt(s[Dt], 0, 0, 0),
      (l = n.Painted);
  }
  function wt(t = !1) {
    (Dt = h(i.length)), vt(i[Dt], 4, 0, 0, !0);
    let s = Ct[Ct.length - 1];
    Ct.push(s), (l = n.Wild);
  }
  function vt(t, s = 6, i = 1, e = 1, h = !0) {
    t.map((t) => {
      let s = it.color(t);
      Ct.push(s);
    }),
      i > 0 && Ct.push(Mt(h)),
      e > 0 && Ct.push(Et(h));
    let a,
      f = Ct[Ct.length - 2],
      c = Ct[Ct.length - 1];
    for (var n = 0; n < s; n++)
      (a = it.lerpColor(f, c, (n + 1) / s)), Ct.push(a);
    e > 1 && Ct.push(Et(h)), i > 1 && Ct.push(Mt(h));
  }
  function gt() {
    return (J = h(Ct.length)), Ct.length > 0 ? Ct[J] : it.color(64);
  }
  function mt() {
    (it.drawingContext.shadowOffsetX = -o),
      (it.drawingContext.shadowOffsetY = o),
      (it.drawingContext.shadowBlur = o),
      (it.drawingContext.shadowColor = it.color(0, 0, 0, 80));
  }
  class xt {
    constructor(t) {
      (this.kids = []),
        (this.type = t.type),
        (this.pt = t.pt),
        (this.ancestors = t.ancestors),
        (this.center = {
          x: t.topLeftX + t.w / 2,
          y: t.topLeftY + t.h / 2,
        }),
        (this.topLeft = { x: t.topLeftX, y: t.topLeftY }),
        (this.w = t.w),
        (this.h = t.h),
        (this.m = Math.max(t.m, 4)),
        (this.ms = {
          top: this.m,
          left: this.m,
          bottom: this.m,
          right: this.m,
        }),
        (this.iw = t.w - 2 * t.m),
        (this.ih = t.h - 2 * t.m),
        (this.bgColor = t.bgColor),
        (this.lineColor = t.lineColor),
        (this.gradients = t.gradients),
        (this.dp = t.dp),
        (this.ins = !!t.inset && t.inset),
        (this.inv = !!t.invert && t.invert);
    }
    clone(t, s, i = !1) {
      let e = {
        type: this.type,
        pt: this.pt,
        ancestors: this.ancestors,
        topLeftX: this.topLeft.x + t,
        topLeftY: this.topLeft.y + s,
        w: this.w,
        h: this.h,
        m: this.m,
        ms: this.ms,
        bgColor: this.bgColor,
        lineColor: this.lineColor,
        dp: this.dp,
        inset: this.ins,
        invert: this.inv,
        at: this.at,
      },
        h = kt.createMod(e);
      return (h.kids = i ? this.cloneContents(0, 0, !0) : []), h;
    }
    cloneContents(t, s, i = !1) {
      let e,
        h = [];
      for (var a = 0; a < this.kids.length; a++)
        (e = this.kids[a].clone(t, s, i)), h.push(e);
      return h;
    }
    // not using async - it breaks in the browser
    draw(t = 0, s = 0, i = 0) {
      this.drawBg(t, s),
      this.drawContents(t, s);
    }
    drawBg(t = 0, s = 0, i = 0) {
      if (
        (it.push(),
          i >= 1 && mt(),
          it.strokeWeight(u),
          it.stroke(this.getLC()),
          it.translate(A * (t + this.topLeft.x), A * (s + this.topLeft.y)),
          this.dp < 0 && G <= _)
      )
        if (null != this.gradients && this.gradients.length >= 2) {
          let t = l == n.BW ? 1 : 0,
            s = this.gradients[t],
            i = this.gradients[1 - t];
          if (2 == G && this.gradients.length >= 4) {
            let t = this.gradients[2],
              e = this.gradients[3];
            !(function (t, s, i, e, a, f, c, n, l = 200) {
              it.noFill();
              let r = a,
                o = f,
                d = 400 * A;
              l *= A;
              for (let u = s; u <= s + e; u++) {
                let b = it.map(u, s, s + e, 0, 1);
                (r = it.lerpColor(a, c, b)), (o = it.lerpColor(f, n, b));
                let B = 0;
                for (let s = t; s <= t + i; s += B) {
                  let e = it.map(s, t, t + i, 0, 1),
                    a = it.lerpColor(r, o, e);
                  it.stroke(a), (B = d + h(l));
                  let f = Math.min(s + B, t + i);
                  it.line(s, u, f, u);
                }
              }
            })(0, 0, d, d, s, i, t, e);
          } else
            1 == G
              ? Bt(0, 0, d, d, s, i)
              : (function (t, s, i, e, h, a, f) {
                it.noStroke();
                let c = 0.705 * Math.max(i, e),
                  n = 1.2 * c;
                for (let i = c; i > 1; i--) {
                  let e = it.map(i, 1, n, 0, 1),
                    f = it.lerpColor(h, a, e);
                  it.fill(f), it.circle(t, s, 2 * i);
                }
              })(d / 2, d / 2, d, d, s, i);
        } else Bt(0, 0, d, d, Ct[0], Ct[1]);
      else
        this.dp < 0 && G == N ? it.fill(Ct[1 - O]) : it.fill(this.bgColor),
          it.rect(0, 0, A * this.w, A * this.h);
      it.pop();
    }
    drawContents(t = 0, s = 0, i = 0) {
      for (var e = 0; e < this.kids.length; e++)
        this.kids[e].draw(t + this.topLeft.x, s + this.topLeft.y, i + 1);
    }
    ams(t = 1) {
      let s = 80 + 2 * this.m,
        i = this.ancestors;
      if (this.ih > s && this.iw > s) {
        let c = this.ms.top,
          n = this.ms.left,
          l = this.iw,
          r = this.ih,
          o = l / r,
          d = 1 / o;
        this.type == g
          ? ((o *= 0.8),
            (d = 1 / o),
            (c *= 1 + d),
            (r = this.h - this.m - c),
            this.inv && (c *= 0.5),
            (n *= 1 + o),
            (l = this.w - 2 * n))
          : this.type == m &&
          ((c = d > 1 ? c * d : c),
            (n = o > 1 ? n * o : n),
            (r = this.h - 2 * c),
            (l = this.w - 2 * n));
        let u = Math.floor(l / s),
          b = Math.floor(r / s),
          B = 1,
          F = [1],
          C = 1,
          D = l,
          A = !1,
          E = this.dp < 60 ? Math.min($, 3) : $,
          M = e() > 0.83;
        if (
          u > 1 &&
          (e() > 0.92 || o > 4) &&
          ((B = Math.ceil(e() * Math.min(E, u))), (D = l / B), B > 1)
        )
          if (M) {
            let t = Math.min(B - 2, Y.length - 1),
              s = Y[t];
            (F = s[h(s.length)]), (A = !0);
          } else {
            (C = 1 / B), (F = []);
            for (var a = 0; a < B; a++) F.push(C);
          }
        let p,
          w,
          y = 1,
          L = [1],
          k = 1,
          S = r;
        if (
          b > 1 &&
          (e() > 0.95 || d > 5) &&
          ((y = Math.ceil(e() * Math.min(E, b))), (S = r / y), y > 1)
        ) {
          (k = 1 / y), (L = []);
          for (a = 0; a < y; a++) L.push(k);
        }
        (B > 1 || y > 1) && (i = []);
        let X = 0,
          j = 0,
          G = -1;
        tt && (G = x);
        let R = !1,
          T = !1;
        this.type == x
          ? (1 == B &&
            1 == y &&
            (G = t > 0 && t < 9 && e() > 0.995 ? W : x),
            (R = !0))
          : this.type == g
            ? ((i.indexOf(m) >= 0 || i.indexOf(v) >= 0) &&
              (G = e() > 0.5 ? g : x),
              this.inv && (T = !0))
            : this.type == m
              ? (i.indexOf(g) >= 0 || i.indexOf(v) >= 0) &&
              (G = e() > 0.5 ? m : x)
              : this.type == I
                ? i.indexOf(v) >= 0 && (G = e() > 0.6 ? I : x)
                : this.type == P &&
                (i.indexOf(x) >= 0
                  ? (G = e() > 1 ? P : x)
                  : this.pt == x && (G = x),
                  this.inv && (T = !0));
        let _,
          H = n;
        for (var f = 0; f < B; f++) {
          let s = F[f] * l,
            h = -1;
          _ = c;
          for (a = 0; a < y; a++) {
            let c = L[a] * r;
            c < 0 && (c = 10),
              (0 == f && 0 == a) || e() > 0.6 || Q || A || null == p
                ? ((p = this.am(H, _, s, c, t + 1, G, h, R, T, !0, i)),
                  (X = f),
                  (j = a))
                : ((w = p.clone((f - X) * D, (a - j) * S, !0)),
                  this.kids.push(w)),
              (_ += c);
          }
          H += s;
        }
      }
    }
    am(t, s, i, a, f = 0, c = -1, n = -1, l = !1, r = !1, o = !0, d = []) {
      let u = 60 + 2 * this.m,
        b = i / a;
      if (this.ih > u && this.iw > u) {
        let u = c;
        c < 0 &&
          (u = (function (t, s = 1, i = 0) {
            let e = s > 1,
              a = X[t];
            a || (a = X[0]),
              i < 1 && (a = a.filter((t) => t != g)),
              (U || i < 2) && (a = a.filter((t) => t != k)),
              (i < 2 || s > 1.1) && (a = a.filter((t) => t != I)),
              V && (a = a.filter((t) => t != L && t != y));
            let f =
              (t != w && t != y && t != L) || !e ? a.length : a.length - 2;
            return (
              (t == v || t == m || t == g) &&
              s < 2.56 &&
              s > 0.4 &&
              (f -= 1),
              a[h(f)]
            );
          })(this.type, b, f));
        let F = M;
        u == P && this.type != P
          ? e() > 0.8 && (r = !0)
          : u == y &&
          (e() > 0.6 ? ((u = L), (F = p)) : e() > 0.8 && (r = !0)),
          d.push(u);
        let D = n >= 0 ? Ct[n] : gt(),
          A = {
            type: u,
            pt: this.type,
            ancestors: d,
            topLeftX: t,
            topLeftY: s,
            w: i,
            h: a,
            m: C,
            bgColor: D,
            lineColor: B,
            dp: f,
            inset: l,
            invert: r,
            at: F,
          },
          E = kt.createMod(A);
        return this.kids.push(E), o && E.ams(f), E;
      }
      return null;
    }
    getLC() {
      return z ? b : this.lineColor;
    }
  }
  class yt extends xt {
    constructor(t) {
      super(t), (this.at = t.at);
      let s = this.w / 2;
      this.at == M || (this.at == p && (s = 0.68 * this.w)),
        this.inv ? (this.ms.bottom = s) : (this.ms.top = s + this.m),
        (this.ih = this.h - this.ms.bottom - this.ms.top);
    }
    ams(t = 1) {
      if ((super.ams(t), !this.ins || this.ins)) {
        let s = x,
          i = -1,
          e = this.m;
        this.at == p && (e += 0.01 * this.h);
        let h = this.ms.top - e;
        this.inv &&
          ((e = this.h - this.ms.bottom + this.m),
            (h = this.h - e - this.m));
        this.am(
          0.18 * this.w,
          e,
          0.64 * this.w,
          h,
          t + 1,
          s,
          i,
          !1,
          !1,
          !0,
          this.ancestors
        );
      }
    }
    drawBg(t = 0, s = 0, i = 0) {
      const e = A * this.w,
        h = A * this.h,
        a = e / 2;
      let f = a;
      if (
        (this.at == M ? (f = a) : this.at == p && (f = 0.68 * e),
          it.push(),
          mt(),
          it.strokeWeight(u),
          it.stroke(this.getLC()),
          it.fill(this.bgColor),
          it.translate(A * (this.topLeft.x + t), A * (this.topLeft.y + s)),
          it.beginShape(),
          this.inv)
      ) {
        if (
          (it.vertex(e, h - f, 0),
            it.vertex(e, 0, 0),
            it.vertex(0, 0, 0),
            it.vertex(0, h - f, 0),
            this.at == M)
        )
          bt(a, h - f, e, e, it.PI, 0);
        else if (this.at == p) {
          let t = 1.5 * e;
          bt(0.75 * e, h - f, t, t, it.PI + it.PI / 2.55, it.PI),
            bt(0.25 * e, h - f, t, t, it.TWO_PI, it.TWO_PI - it.PI / 2.55);
        }
        it.vertex(e, h - f, 0);
      } else {
        if (
          (it.vertex(e, f, 0),
            it.vertex(e, h, 0),
            it.vertex(0, h, 0),
            it.vertex(0, f, 0),
            this.at == M)
        )
          bt(a, f, e, e, it.PI, it.TWO_PI);
        else if (this.at == p) {
          let t = 1.5 * e;
          bt(0.75 * e, f, t, t, it.PI, it.PI + it.PI / 2.55),
            bt(0.25 * e, f, t, t, it.TWO_PI - it.PI / 2.55, it.TWO_PI);
        }
        it.vertex(e, f, 0);
      }
      it.endShape(), it.pop();
    }
  }
  let Lt = [
    xt,
    class extends xt {
      constructor(t) {
        super(t), (this.diam = Math.min(this.ih, this.iw));
      }
      drawBg(t = 0, s = 0, i = 0, e = !0) {
        (1 == this.kids.length && this.kids[0] == w) ||
          (it.push(),
            it.noStroke(),
            it.fill(this.bgColor),
            it.translate(A * (t + this.center.x), A * (s + this.center.y)),
            it.circle(0, 0, this.diam * A),
            it.pop(),
            it.push(),
            it.noFill(),
            it.strokeWeight(u),
            it.stroke(this.getLC()),
            it.translate(A * (t + this.center.x), A * (s + this.center.y)),
            this.pt == v && this.kids.length > 1 && mt(),
            it.circle(0, 0, this.diam * A),
            it.pop());
      }
    },
    class extends xt {
      constructor(t) {
        super(t);
      }
      drawBg(t = 0, s = 0, i = 0) {
        if (1 == this.kids.length) {
          if (this.kids[0].type == w) return;
        }
        const e = A * this.w,
          h = A * this.h;
        let a = A * (t + this.topLeft.x),
          f = A * (s + this.topLeft.y),
          c =
            this.pt == g &&
            (this.kids.length > 1 ||
              (1 == this.kids.length && this.kids[0].type != g));
        this.drawTri(a, f, e, h, !0, !1, !0),
          this.drawTri(a, f, e, h, !1, !0, c);
      }
      drawTri(t, s, i, e, h = !0, a = !0, f = !0) {
        it.push(),
          f && mt(),
          it.translate(t, s),
          h ? it.fill(this.bgColor) : it.noFill(),
          a ? (it.strokeWeight(u), it.stroke(this.getLC())) : it.noStroke(),
          this.inv
            ? it.triangle(0, 0, i, 0, i / 2, e)
            : it.triangle(0, e, i, e, i / 2, 0),
          it.pop();
      }
    },
    class extends xt {
      constructor(t) {
        super(t),
          (this.m *= 1.2),
          (this.ms = {
            top: this.m,
            left: this.m,
            bottom: this.m,
            right: this.m,
          }),
          (this.iw = this.w - 2 * this.m),
          (this.ih = this.h - 2 * this.m);
      }
      drawBg(t = 0, s = 0, i = 0) {
        if (1 == this.kids.length) {
          let t = this.kids[0];
          if (t.type == w || t.type == v || t.type == x) return;
        }
        const e = A * this.w,
          h = A * this.h;
        let a = A * (t + this.topLeft.x),
          f = A * (s + this.topLeft.y),
          c =
            this.kids.length > 1 ||
            (1 == this.kids.length && this.kids[0].type != this.type);
        this.drawShape(a, f, e, h, !0, !1, !0),
          this.drawShape(a, f, e, h, !1, !0, c);
      }
      drawShape(t, s, i, e, h = !0, a = !0, f = !0) {
        it.push(),
          f && mt(),
          it.translate(t, s),
          h ? it.fill(this.bgColor) : it.noFill(),
          a ? (it.strokeWeight(u), it.stroke(this.getLC())) : it.noStroke(),
          it.quad(i / 2, 0, i, e / 2, i / 2, e, 0, e / 2),
          it.pop();
      }
    },
    class extends xt {
      constructor(t) {
        super(t), (this.diam = Math.min(this.ih, this.iw));
      }
      drawBg(t = 0, s = 0, i = 0) {
        it.push(),
          it.noStroke(),
          mt(),
          it.fill(this.bgColor),
          it.translate(A * (t + this.center.x), A * (s + this.center.y)),
          it.circle(0, 0, this.diam * A),
          it.pop(),
          it.push(),
          it.strokeWeight(u),
          it.stroke(this.getLC()),
          this.kids.length > 1 && mt(),
          it.noFill(),
          it.translate(A * (t + this.center.x), A * (s + this.center.y)),
          it.circle(0, 0, this.diam * A),
          it.pop();
      }
    },
    yt,
    yt,
    class extends xt {
      constructor(t) {
        super(t), (this.diam = Math.min(this.ih, this.iw));
      }
      drawBg(t = 0, s = 0, i = 0) {
        let e,
          h = this.iw < this.ih,
          a = (A * (this.diam - this.m)) / 2,
          f = a;
        (e = h ? 2 * f : 2 * a),
          it.push(),
          mt(),
          it.strokeWeight(u),
          it.stroke(this.getLC()),
          it.fill(this.bgColor),
          it.translate(A * (t + this.center.x), A * (s + this.center.y)),
          it.beginShape(),
          h
            ? (it.vertex(0, -f),
              bt(0, 0, e / 2, e, 1.5 * it.PI, 2.5 * it.PI),
              bt(0, 0, e / 2, e, 0.5 * it.PI, 1.5 * it.PI),
              it.vertex(0, -f))
            : (it.vertex(-a, 0),
              bt(0, 0, e, e / 2, it.PI, it.TWO_PI),
              bt(0, 0, e, e / 2, 0, it.PI),
              it.vertex(-a, 0)),
          it.endShape(),
          it.pop();
      }
    },
    class extends xt {
      constructor(t) {
        super(t);
        let s = this.w / this.h,
          i = 1 / s,
          e = i > 0 ? this.m * i * 4.5 : 3 * this.m,
          h = s > 0 ? this.m * s * 4.5 : 3 * this.m;
        (this.m *= 3),
          (this.ms = { top: e, left: h, bottom: e, right: h }),
          (this.iw = this.w - 2 * h),
          (this.ih = this.h - 2 * e);
      }
      drawBg(t = 0, s = 0, i = 0) {
        let e = A * this.w,
          h = A * this.h;
        const a = h / 2;
        it.push(),
          mt(),
          it.strokeWeight(u),
          it.stroke(this.getLC()),
          it.fill(this.bgColor),
          it.translate(A * (t + this.topLeft.x), A * (s + this.topLeft.y)),
          it.beginShape(),
          it.vertex(0, a, 0),
          bt(0, 0, e, h, it.HALF_PI, 0),
          bt(e, 0, e, h, it.PI, it.HALF_PI),
          bt(e, h, e, h, it.PI + it.HALF_PI, it.PI),
          bt(0, h, e, h, 0, -it.HALF_PI),
          it.vertex(0, a, 0),
          it.endShape(),
          it.pop();
      }
    },
    class extends xt {
      constructor(t) {
        super(t),
          (this.m = 67.5),
          (this.ms = {
            top: this.m,
            left: this.m,
            bottom: this.m,
            right: this.m,
          }),
          (this.iw = this.w - 2 * this.m),
          (this.ih = this.h - 2 * this.m),
          (this.diam = Math.min(this.ih, this.iw) / 0.951);
      }
      drawBg(t = 0, s = 0, i = 0) {
        const e = A * this.h,
          h = A * this.diam;
        let a = A * (t + this.center.x),
          f = A * (s + this.center.y),
          c =
            this.kids.length > 1 ||
            (1 == this.kids.length && this.kids[0].type != this.type);
        this.drawShape(a, f, h, e, !0, !1, !0),
          this.drawShape(a, f, h, e, !1, !0, c);
      }
      drawShape(t, s, i, e, h = !0, a = !0, f = !0) {
        it.push(),
          f && mt(),
          it.translate(t, s),
          h ? it.fill(this.bgColor) : it.noFill(),
          a ? (it.strokeWeight(u), it.stroke(this.getLC())) : it.noStroke();
        let c = Z ? 6 : 5;
        this.inv
          ? this.poly(0, 0, i / 2, c, it.HALF_PI)
          : this.poly(0, 0, i / 2, c, -it.HALF_PI),
          it.pop();
      }
      poly(t, s, i, e, h = 0) {
        let a = it.TWO_PI / e;
        it.beginShape();
        for (let e = h; e < it.TWO_PI + h; e += a) {
          let h = t + Math.cos(e) * i,
            a = s + Math.sin(e) * i;
          it.vertex(h, a);
        }
        it.endShape(it.CLOSE);
      }
    },
    class extends xt {
      constructor(t) {
        super(t);
      }
      drawBg(t = 0, s = 0, i = 0) {
        if (1 == this.kids.length) {
          if (this.kids[0].type == w) return;
        }
        const e = A * this.w,
          h = A * this.h;
        let a = A * (t + this.topLeft.x),
          f = A * (s + this.topLeft.y),
          c =
            this.pt == g &&
            (this.kids.length > 1 ||
              (1 == this.kids.length && this.kids[0].type != g));
        this.drawShape(a, f, e, h, !0, !1, !0),
          this.drawShape(a, f, e, h, !1, !0, c);
      }
      drawShape(t, s, i, e, h = !0, a = !0, f = !0) {
        it.push(),
          f && mt(),
          it.translate(t, s),
          h ? it.fill(this.bgColor) : it.noFill(),
          a ? (it.strokeWeight(u), it.stroke(this.getLC())) : it.noStroke(),
          it.beginShape(),
          this.inv
            ? (it.vertex(0, 0),
              it.vertex(i / 2, e),
              it.vertex(i, 0),
              it.vertex(i / 2, e / 2),
              it.vertex(0, 0))
            : (it.vertex(i / 2, 0),
              it.vertex(0, e),
              it.vertex(i / 2, e / 2),
              it.vertex(i, e),
              it.vertex(i / 2, 0)),
          it.endShape(),
          it.pop();
      }
    },
    class extends xt {
      constructor(t) {
        super(t),
          (this.diam = Math.min(this.ih + this.m, this.iw + this.m));
      }
      drawBg(t = 0, s = 0, i = 0) { }
      ams(t = 1) {
        let s,
          i,
          e,
          h = x,
          a = it.TWO_PI / 3,
          f = 0.465 * (Math.min(this.iw, this.ih) + 3 * this.m),
          c = (this.diam - f) / 2;
        for (var n = 0; n < 3; n++)
          (s = n * a - it.HALF_PI),
            (i = Math.cos(s) * c * 1.01 + this.center.x),
            (e = Math.sin(s) * c * 1.01 + this.center.y),
            this.addModAt(h, i, e, f, t);
      }
      addModAt(t, s, i, e, h) {
        let a = this.am(
          s - e / 2 - this.m,
          i - e / 2 - this.m,
          e,
          e,
          h + 1,
          t
        );
        null != a && this.kids.push(a);
      }
    },
  ];
  class kt {
    static createMod(t) {
      const s = Lt[t.type];
      return s ? new s(t) : null;
    }
  }

  return it;
}

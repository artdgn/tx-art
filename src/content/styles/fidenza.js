import p5 from 'p5';

import { urlParamTxHash } from '../util.js'

let maxSize = 600;

const tokenData = { hash: urlParamTxHash() };

export function fidenzaDraw({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {
  // reformatted with prettier
  const eps = Math.pow(2, -32),
    m0 = 32557,
    m1 = 19605,
    m2 = 62509,
    m3 = 22609,
    a0 = 33103,
    a1 = 63335,
    a2 = 31614,
    a3 = 5125,
    state = new Uint16Array(4),
    dv = new DataView(state.buffer);
  let _nG = null,
    _hNG = !1;
  const rnd = () => {
      const a = state[0],
        b = state[1],
        c = state[2],
        e = state[3],
        f = 0 | (a0 + m0 * a),
        g = 0 | (a1 + m0 * b + (m1 * a + (f >>> 16))),
        h = 0 | (a2 + m0 * c + m1 * b + (m2 * a + (g >>> 16)));
      (state[0] = f),
        (state[1] = g),
        (state[2] = h),
        (state[3] = a3 + m0 * e + (m1 * c + m2 * b) + (m3 * a + (h >>> 16)));
      const i = (e << 21) + (((e >> 2) ^ c) << 5) + (((c >> 2) ^ b) >> 11);
      return eps * (((i >>> (e >> 11)) | (i << (31 & -(e >> 11)))) >>> 0);
    },
    hash32 = (a, b = 0) => {
      const c = 16,
        e = 65535,
        f = 255;
      for (var g, j = 1540483477, m = a.length, n = b ^ m, o = 0; 4 <= m; )
        (g =
          (a[o] & f) |
          ((a[++o] & f) << 8) |
          ((a[++o] & f) << 16) |
          ((a[++o] & f) << 24)),
          (g = (g & e) * j + ((((g >>> c) * j) & e) << c)),
          (g ^= g >>> 24),
          (g = (g & e) * j + ((((g >>> c) * j) & e) << c)),
          (n = ((n & e) * j + ((((n >>> c) * j) & e) << c)) ^ g),
          (m -= 4),
          ++o;
      switch (m) {
        case 3:
          n ^= (a[o + 2] & f) << c;
        case 2:
          n ^= (a[o + 1] & f) << 8;
        case 1:
          (n ^= a[o] & f), (n = (n & e) * j + ((((n >>> c) * j) & e) << c));
      }
      return (
        (n ^= n >>> 13),
        (n = (n & e) * j + ((((n >>> 16) * j) & e) << 16)),
        (n ^= n >>> 15),
        n >>> 0
      );
    },
    set_seed = (a) => {
      (_hNG = !1), (_nG = null);
      const b = ~~((a.length - 2) / 2),
        c = [];
      for (let e = 0; e < b; e++) {
        const b = 2 + 2 * e;
        c.push(parseInt(a.slice(b, b + 2), 16));
      }
      const e = hash32(c, 1690382925),
        f = hash32(c, 72970470);
      dv.setUint32(0, e), dv.setUint32(4, f);
    },
    rng = (a, b) => (void 0 === b && ((b = a), (a = 0)), rnd() * (b - a) + a),
    shffl = (a) => {
      for (var b, c, e = a.length, f = [...a]; e; )
        (b = ~~(rnd() * e--)), (c = f[e]), (f[e] = f[b]), (f[b] = c);
      return f;
    },
    gssn = (a = 0, b = 1) => {
      if (_hNG) {
        _hNG = !1;
        var c = _nG;
        return (_nG = null), a + b * c;
      }
      var e = 0,
        f = 0,
        g = 0;
      do (e = 2 * rnd() - 1), (f = 2 * rnd() - 1), (g = e * e + f * f);
      while (1 <= g || 0 === g);
      var h = Math.sqrt((-2 * Math.log(g)) / g);
      return (_nG = f * h), (_hNG = !0), a + b * (e * h);
    },
    nScts = 10;
  let c,
    ww,
    wh,
    wr,
    LX,
    RX,
    TY,
    BY,
    spc,
    z0,
    z1,
    z2,
    z3,
    z4,
    z5,
    z6,
    z7,
    sW,
    sH;
  const dw = 2e3,
    dh = 2400,
    V1 = 1,
    V2 = 2,
    V3 = 3,
    V4 = 4,
    V5 = 5,
    V6 = 6,
    V7 = 7;
  function setup() {
    const windowHeight = Math.min(maxSize, sketch.windowHeight);
    const windowWidth = Math.min(maxSize, sketch.windowWidth);
    windowHeight >= 1.2 * windowWidth
      ? ((ww = windowWidth), (wh = 1.2 * windowWidth))
      : ((wh = windowHeight), (ww = windowHeight / 1.2)),
      (wr = ww / dw),
      (c = sketch.createCanvas(ww, wh)),
      sketch.colorMode(sketch.HSB, 360, 100, 100, 100),
      set_seed(tokenData.hash),
      sketch.randomSeed(0),
      sketch.noiseSeed(0),
      (LX = -500),
      (RX = 2500),
      (TY = -0.25 * dh),
      (BY = 1.25 * dh),
      (spc = Math.floor(10)),
      (z0 = 2),
      (z1 = 5),
      (z2 = 10),
      (z3 = 20),
      (z4 = 40),
      (z5 = 80),
      (z6 = 160),
      (z7 = 320),
      (sW = dw / nScts),
      (sH = dh / nScts);
  }
  function w(a) {
    return void 0 === a ? dw : dw * a;
  }
  function h(a) {
    return void 0 === a ? dh : dh * a;
  }
  function vrtx(a, b) {
    sketch.vertex(a * wr, b * wr);
  }
  function swght(a) {
    sketch.strokeWeight(a * wr);
  }
  function pi(a) {
    return Math.PI * a;
  }
  function od(a) {
    return rnd() <= a;
  }
  function rscl(a, b, c, e, f) {
    return e + (a - b) * ((f - e) / (c - b));
  }
  function snp(a, b) {
    let c = a % b;
    return c > 0.5 * b ? a + b - c : a - c;
  }
  function adjFlw(a, b, c, e, f) {
    for (let g = 0; g < a.length; g++) {
      const h = LX + spc * g;
      for (let i = 0; i < a[0].length; i++) {
        const j = TY + spc * i,
          k = sketch.dist(b, c, h, j);
        if (k < e) {
          const b = rscl(k, 0, e, f, 0);
          a[g][i] += b;
        }
      }
    }
  }
  function adjFlw2(a, b, c, e, f) {
    let g = w(1);
    g = "low" === f ? w(0.25) : (f = "med") ? w(0.18) : w(0.12);
    for (let h = 0; h < a.length; h++) {
      const f = LX + spc * h;
      for (let i = 0; i < a[0].length; i++) {
        const j = TY + spc * i,
          k = sketch.dist(b, c, f, j),
          l = e ? pi(0.025) : pi(-0.025),
          m = l * sketch.sqrt(k / g);
        a[h][i] += m;
      }
    }
  }
  function flwP(a, b, c) {
    const e = [];
    let d;
    for (let f = LX; f < RX; f += spc) {
      const b = [];
      for (let e, g = TY; g < BY; g += spc)
        (e = a),
          c &&
            ((e = angle(f, g, w(0.5), h(0.4)) - pi(0.5)),
            (d = sketch.dist(f, g, w(0.5), h(0.5))),
            (e += rscl(d, 0, w(1.5), 0, pi(1)))),
          b.push(e);
      e.push(b);
    }
    let f = 0,
      g = 0;
    "none" === b
      ? (f = 0)
      : "low" === b
      ? ((f = 15), (g = pi(0.1)))
      : "med" === b
      ? ((f = 28), (g = pi(0.25)))
      : ((f = 45), (g = pi(0.45))),
      c && (f = 0);
    for (let h = 0; h < f; h++) {
      const a = rng(LX, RX),
        c = rng(TY, BY);
      if (od(0.7)) {
        const b = gssn(0, g),
          f = Math.max(w(0.1), Math.abs(gssn(w(0.35), w(0.15))));
        adjFlw(e, a, c, f, b);
      } else {
        const f = od(0.5);
        adjFlw2(e, a, c, f, b);
      }
    }
    return e;
  }
  function flwL(a, b, c, e, f) {
    const g = a.length,
      h = a[0].length,
      i = w(0.007),
      j = [];
    for (let k = 0; k < b.length; k++) {
      const l = [],
        m = Math.abs(gssn(c, 0.25 * c));
      let n = b[k][0],
        o = b[k][1];
      for (let b = 0; b < m; b++) {
        l.push([n, o]);
        const b = Math.floor((n - LX) / spc),
          c = Math.floor((o - TY) / spc);
        let j = e;
        0 <= c && c < h && 0 <= b && b < g && (j = a[b][c]),
          f && (j = snp(j, pi(0.2))),
          (n += i * sketch.cos(j)),
          (o += i * sketch.sin(j));
      }
      j.push(l);
    }
    return j;
  }
  function offset(a, b, c, e) {
    return [a + e * sketch.cos(c), b + e * sketch.sin(c)];
  }
  function angle(b, c, e, f) {
    const g = sketch.atan2(f - c, e - b);
    return 0 > g ? g + pi(2) : g;
  }
  function pAng(a, b) {
    return angle(a[0], a[1], b[0], b[1]);
  }
  function fatTop(a, b) {
    const c = [];
    for (let e = 0; e < a.length - 1; e++) {
      let f = a[e],
        g = a[e + 1];
      const h = pAng(f, g),
        i = f[0],
        j = f[1];
      c.push(offset(i, j, h - pi(0.5), b));
    }
    let e = a[a.length - 2],
      f = a[a.length - 1];
    const g = pAng(e, f),
      h = f[0],
      i = f[1];
    return c.push(offset(h, i, g - pi(0.5), b)), c;
  }
  function fatBot(a, b) {
    const c = [];
    for (let e = 0; e < a.length - 1; e++) {
      let f = a[e],
        g = a[e + 1];
      const h = pAng(f, g),
        i = f[0],
        j = f[1];
      c.push(offset(i, j, h + pi(0.5), b));
    }
    let e = a[a.length - 2],
      f = a[a.length - 1];
    const g = pAng(e, f),
      h = f[0],
      i = f[1];
    return c.push(offset(h, i, g + pi(0.5), b)), c;
  }
  function fat(a, b) {
    const c = fatTop(a, b),
      e = fatBot(a, b);
    return e.reverse(), c.concat(e);
  }
  function sctrs(a, b, c) {
    const e = Math.max(0, Math.floor((a - c) / sW)),
      f = Math.min(nScts - 1, Math.floor((a + c) / sW)),
      g = Math.max(0, Math.floor((b - c) / sH)),
      h = Math.min(nScts - 1, Math.floor((b + c) / sH)),
      i = [];
    for (let j = e; j <= f; j++) for (let a = g; a <= h; a++) i.push([j, a]);
    return i;
  }
  function cllsn(a, b, c, e, f, g) {
    if (g && sketch.dist(a, b, w(0.5), h(0.4)) <= 1.3 * c) return !0;
    const j = sctrs(a, b, c);
    for (let h = 0; h < j.length; h++) {
      let [g, i] = j[h];
      const k = e[g][i];
      for (const g of k) {
        const [e, h, i, j] = g;
        if (sketch.dist(a, b, e, h) <= c + i && f !== j) return !0;
      }
    }
    return !1;
  }
  function cSegs(a, b, c, e, f, g, i, j, l, m, n) {
    const o = [],
      p = [];
    for (let h = 0; h < nScts; h++) {
      const a = [];
      for (let b = 0; b < nScts; b++) a.push([]);
      o.push(a);
    }
    let q = w(0.03);
    "low" === i && (q = w(0.07));
    let r = w(0.01);
    "low" === i ? (r = w(0.02)) : "highAF" == i && (r = w(0.007));
    let s = [];
    for (let k = 0; k < b.length; k++) {
      let y = b[k];
      for (let a = w(-0.2); a < w(1.2); a += r) {
        const b = gssn(a, w(0.005)),
          c = gssn(y, q);
        (!j || sketch.dist(b, c, w(0.5), h(0.4)) > w(0.07)) && s.push([b, c]);
      }
    }
    s = shffl(s);
    const t = flwL(a, s, c, e, n);
    for (let q = 0; q < t.length; q++) {
      const a = t[q];
      let b = f();
      b = m ? 0.65 * b : b;
      const c = g ? b + w(0.03) : w(-0.1),
        e = w() - c,
        i = h() - (c + w(0.015)),
        r = q;
      let n = [],
        s = !1,
        u = 0;
      for (; u < a.length; ) {
        const [f, g] = a[u];
        if (
          f >= c &&
          f < e &&
          g >= c &&
          g < i &&
          (l || !cllsn(f, g, b, o, r, j))
        ) {
          const h = 0 === n.length;
          if (!h) {
            for (const a of sctrs(f, g, b)) {
              const [c, e] = a;
              o[c][e].push([f, g, b, r]);
            }
            n.push([f, g]), (s = !0), (u += 1);
          } else {
            const f = Math.max(2, Math.floor(b / w(0.001)));
            let g = !0;
            for (let h, j = 1; j < f; j++) {
              if (((h = u + j), h >= a.length)) {
                g = !1;
                break;
              }
              const [f, k] = a[h];
              if (
                f < c ||
                f >= e ||
                k < c ||
                k >= i ||
                (!l && cllsn(f, k, b, o, r))
              ) {
                g = !1;
                break;
              }
            }
            if (g) {
              s = !0;
              for (let c = 0; c < f; c++) {
                const [c, e] = a[u];
                for (const a of sctrs(c, e, b)) {
                  const [f, g] = a;
                  o[f][g].push([c, e, b, r]);
                }
                n.push([c, e]), (u += 1);
              }
            } else (u += 1), (n = []);
          }
        } else
          s && p.push({ points: n, margin: b, id: r }),
            (s = !1),
            (n = []),
            (u += 1);
      }
      2 <= n.length && p.push({ points: n, margin: b, id: r });
    }
    return p;
  }
  function lrp(a, b, c) {
    return a * (1 - c) + b * c;
  }
  function crvL(a) {
    if (2 > a.length) return 0;
    let b = 0;
    for (let c = 0; c < a.length - 1; c++) {
      const [e, f] = a[c],
        [g, h] = a[c + 1];
      b += sketch.dist(e, f, g, h);
    }
    return b;
  }
  function lerpCrv(a, b, c) {
    const e = a[0],
      f = a[a.length - 1];
    if (0 >= b) return e;
    if (1 <= b) return f;
    if (2 === a.length) {
      const a = lrp(e[0], f[0], b),
        c = lrp(e[1], f[1], b);
      return [a, c];
    }
    const g = c * b;
    let h = 0;
    for (let e = 1; e < a.length; e++) {
      const [b, c] = a[e - 1],
        [f, i] = a[e],
        j = sketch.dist(b, c, f, i),
        k = h + j;
      if (k > g) {
        const a = g - h,
          e = a / j,
          k = lrp(b, f, e),
          l = lrp(c, i, e);
        return [k, l];
      }
      h = k;
    }
    return f;
  }
  function wc(a) {
    const b = rnd();
    let c = 0;
    for (let e = 0; e < a.length - 1; e += 2) {
      const f = a[e],
        g = a[e + 1];
      if (((c += g), b < c)) return f;
    }
    return a[a.length - 2];
  }
  function strokeSegment(a, b, c, e) {
    sketch.stroke(a[0], a[1], a[2]), sketch.noFill(), swght(w(0.001));
    const f = b / w(4e-4),
      g = rng(0, 1e4);
    for (let h, i = 0; i < f; i += 1) {
      (h = i / f), sketch.beginShape();
      let a = 0.013 * (1 - c / w(1)),
        b = gssn(2 * a, a),
        j = gssn(1 - 2 * a, a);
      for (let a = b; a < j; a += 0.01) {
        let b = sketch.noise(4 * (a * (c / w(0.25))) + g, 1.5 * h),
          f = h + 0.15 * (0.5 - b);
        const [i, j] = e(a, f);
        vrtx(i, j);
      }
      sketch.endShape();
    }
  }
  function fSeg(a, b, c, e, f, g, h, i) {
    sketch.fill(a[0], a[1], a[2]),
      b
        ? (sketch.stroke(0, 0, 10), swght(w(0.001)))
        : (sketch.stroke(a[0], a[1], a[2]), swght(w(5e-4)));
    const j = [],
      k = [];
    for (let l = f; l < g; l += 0.01) j.push(l), k.unshift(l);
    j.push(g), sketch.beginShape();
    for (const k of j) {
      const [a, b] = lerpCrv(c, k, h);
      vrtx(a, b);
    }
    j.reverse();
    for (const k of j) {
      const [a, b] = lerpCrv(e, k, i);
      vrtx(a, b);
    }
    sketch.endShape(sketch.CLOSE);
  }
  function pm1() {
    return z1;
  }
  function pm2() {
    return wc([z0, 0.15, z1, 0.25, z2, 0.35, z3, 0.2, z4, 0.05]);
  }
  function pm3() {
    return wc([z1, 0.1, z2, 0.2, z3, 0.2, z4, 0.3, z5, 0.12, z6, 0.08]);
  }
  function pm4() {
    return wc([
      z1,
      0.01,
      z2,
      0.03,
      z3,
      0.07,
      z4,
      0.24,
      z5,
      0.33,
      z6,
      0.25,
      z7,
      0.07,
    ]);
  }
  function pm5() {
    return wc([z3, 0.05, z4, 0.2, z5, 0.35, z6, 0.3, z7, 0.1]);
  }
  function pm6() {
    return wc([z5, 0.2, z6, 0.5, z7, 0.3]);
  }
  function pm7() {
    return z4;
  }
  function pSL(a) {
    const b = wc([
      w(0.002),
      0.15,
      w(0.004),
      0.4,
      w(0.008),
      0.3,
      w(0.016),
      0.15,
    ]);
    return a === V1
      ? 0.5 * b
      : a === V2
      ? 0.75 * b
      : a === V5
      ? 1.25 * b
      : a >= V7
      ? 2.5 * b
      : b;
  }
  function pNStps(a, b) {
    return b
      ? 16
      : Math.min(
          1 / a,
          wc([0, 0.2, 1, 0.1, 2, 0.15, 4, 0.4, 8, 0.12, 16, 0.03])
        );
  }
  const wht = [40, 2, 98],
    dRed = [358, 64, 86],
    red = [358, 80, 82],
    tan = [25, 40, 88],
    midTan = [25, 40, 60],
    orng = [25, 78, 90],
    pOrng = [25, 68, 93],
    pYllw = [43, 60, 99],
    yllw = [43, 90, 99],
    pnk = [11, 35, 97],
    pPnk = [12, 18, 97],
    xGrn = [125, 55, 55],
    grn = [170, 75, 65],
    pGrn = [170, 35, 80],
    ppGrn = [160, 15, 85],
    pppGrn = [160, 10, 90],
    ppYllwGrn = [125, 12, 90],
    ppBlue = [200, 15, 90],
    pBlue = [200, 35, 75],
    blue = [210, 65, 55],
    dBlue = [220, 65, 35],
    ddBlue = [225, 65, 20],
    bgrndDBlue = [225, 60, 25],
    paleIndigo = [220, 35, 75],
    lavender = [260, 14, 88],
    pBrwn = [28, 42, 39],
    brwn = [25, 45, 33],
    dBrwn = [25, 45, 23],
    ddBrwn = [25, 45, 13],
    nwsprnt = [40, 12, 88],
    bgrndNws = [40, 8, 92],
    blk = [0, 0, 10],
    pbcDefault = function () {
      return bgrndNws;
    },
    pcLx = function () {
      return wc([
        dRed,
        0.05,
        red,
        0.03,
        nwsprnt,
        0.12,
        orng,
        0.02,
        pYllw,
        0.06,
        yllw,
        0.06,
        pnk,
        0.03,
        grn,
        0.04,
        ppGrn,
        0.18,
        ddBlue,
        0.02,
        dBlue,
        0.05,
        blue,
        0.05,
        pBlue,
        0.03,
        brwn,
        0.17,
        dBrwn,
        0.09,
        ddBrwn,
        0.03,
      ]);
    },
    pcLxD1 = function () {
      return wc([
        dRed,
        0.1,
        pYllw,
        0.08,
        pnk,
        0.13,
        grn,
        0.2,
        ppGrn,
        0.16,
        dBlue,
        0.01,
        blue,
        0.24,
        pBlue,
        0.1,
        brwn,
        0.02,
      ]);
    },
    pcLxD2 = function () {
      return wc([
        dRed,
        0.12,
        red,
        0.1,
        nwsprnt,
        0.04,
        orng,
        0.05,
        pYllw,
        0.1,
        yllw,
        0.14,
        pnk,
        0.11,
        grn,
        0.13,
        ppGrn,
        0.05,
        dBlue,
        0.01,
        blue,
        0.12,
        pBlue,
        0.05,
      ]);
    },
    makeLxD = function () {
      const a = [],
        b = [
          0.6, 0.12, 0.1, 0.05, 0.03, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01,
          0.01, 0.01, 0.01,
        ];
      for (let c, e = 0; 15 > e; e++) {
        if (((c = null), 0 == e)) c = pcLxD1();
        else if (1 === e) {
          let a = c;
          for (; a === c; ) a = pcLxD2();
          c = a;
        } else c = pcLx();
        a.push(c), a.push(b[e]);
      }
      return function () {
        return wc(a);
      };
    },
    pbcLx = function (a) {
      return a >= V6
        ? wc([
            ddBlue,
            0.19,
            bgrndNws,
            0.3,
            ppGrn,
            0.15,
            pBlue,
            0.05,
            pnk,
            0.1,
            blue,
            0.1,
            grn,
            0.05,
            dRed,
            0.05,
            pYllw,
            0.01,
          ])
        : a >= V4
        ? wc([
            bgrndNws,
            0.6,
            pBlue,
            0.15,
            pppGrn,
            0.1,
            pPnk,
            0.1,
            bgrndDBlue,
            0.05,
          ])
        : wc([bgrndNws, 0.9, bgrndDBlue, 0.07, pppGrn, 0.03]);
    },
    pcRad = function () {
      return wc([
        wht,
        0.6,
        dRed,
        0.05,
        red,
        0.02,
        nwsprnt,
        0.05,
        orng,
        0.05,
        pYllw,
        0.05,
        yllw,
        0.03,
        ppGrn,
        0.01,
        blue,
        0.01,
        pBlue,
        0.04,
        brwn,
        0.09,
      ]);
    },
    pbcRad = function () {
      return bgrndNws;
    },
    pcBaked = function () {
      return wc([
        wht,
        0.2,
        pnk,
        0.05,
        pPnk,
        0.1,
        xGrn,
        0.5,
        ppYllwGrn,
        0.1,
        pBrwn,
        0.05,
      ]);
    },
    pbcBaked = function () {
      return bgrndNws;
    },
    pcCool = function () {
      return wc([
        nwsprnt,
        0.13,
        pYllw,
        0.01,
        lavender,
        0.03,
        grn,
        0.1,
        pppGrn,
        0.04,
        ppGrn,
        0.04,
        ddBlue,
        0.11,
        dBlue,
        0.15,
        blue,
        0.25,
        pBlue,
        0.1,
        brwn,
        0.01,
        dBrwn,
        0.04,
        ddBrwn,
        0.02,
      ]);
    },
    pbcCool = function (a) {
      return a >= V6
        ? wc([bgrndNws, 0.5, bgrndDBlue, 0.3, pnk, 0.15, blue, 0.05])
        : wc([bgrndNws, 0.8, bgrndDBlue, 0.12, blue, 0.06, pPnk, 0.02]);
    },
    pcBlack = function () {
      return wc([bgrndNws, 0.15, blk, 0.85]);
    },
    pbcBlack = function () {
      return bgrndNws;
    },
    pcPolitique = function () {
      return wc([wht, 0.58, dRed, 0.02, pYllw, 0.2, pnk, 0.15, blue, 0.05]);
    },
    pbcPolitique = function (a) {
      return a >= V6
        ? wc([bgrndNws, 0.5, ppBlue, 0.5])
        : wc([bgrndNws, 0.8, ppBlue, 0.2]);
    },
    pcRetro = function () {
      return wc([
        dRed,
        0.07,
        red,
        0.03,
        pOrng,
        0.05,
        pYllw,
        0.02,
        yllw,
        0.15,
        brwn,
        0.1,
        dBrwn,
        0.58,
      ]);
    },
    pbcRetro = function () {
      return wc([nwsprnt, 0.7, pBlue, 0.2, wht, 0.1]);
    },
    pcWhtMono = function () {
      return wht;
    },
    pbcWhtMono = function () {
      return wc([
        dRed,
        0.1,
        red,
        0.1,
        nwsprnt,
        0.01,
        orng,
        0.1,
        pYllw,
        0.04,
        yllw,
        0.05,
        pnk,
        0.1,
        grn,
        0.1,
        ddBlue,
        0.1,
        dBlue,
        0.1,
        blue,
        0.1,
        dBrwn,
        0.02,
        ddBrwn,
        0.02,
        blk,
        0.09,
      ]);
    },
    pcAM = function () {
      return wc([
        [260, 20, 20],
        0.77,
        [240, 30, 35],
        0.03,
        [300, 10, 50],
        0.05,
        [180, 20, 30],
        0.06,
        [130, 20, 70],
        0.05,
        [5, 10, 80],
        0.02,
        [5, 40, 90],
        0.01,
        [40, 25, 90],
        0.01,
      ]);
    },
    pbcAM = function () {
      return [260, 30, 30];
    },
    pcDarkLifestyle = function () {
      return wc([
        [0, 0, 13],
        0.2,
        [0, 0, 16],
        0.48,
        [0, 0, 19],
        0.2,
        [0, 0, 22],
        0.1,
        [0, 0, 25],
        0.02,
      ]);
    },
    pbcDarkLifestyle = function () {
      return [0, 0, 10];
    },
    pcPartyGirl = function () {
      return [350, gssn(65, 4), gssn(85, 4)];
    },
    pbcPartyGirl = function () {
      return [225, 70, 20];
    },
    pcWhtOnCrm = function () {
      return wht;
    },
    pbcWhtOnCrm = function () {
      return bgrndNws;
    },
    pcGolfSocks = function () {
      return wc([
        bgrndNws,
        0.41,
        [210, 72, 45],
        0.15,
        [210, 72, 30],
        0.05,
        [0, 40, 95],
        0.07,
        [6, 20, 95],
        0.05,
        [130, 50, 30],
        0.2,
        [32, 30, 99],
        0.04,
        [32, 30, 30],
        0.03,
      ]);
    },
    pbcGolfSocks = function () {
      return [130, 20, 50];
    },
    pcRose = function () {
      return wc([
        [150, 8, 40],
        0.5,
        [160, 12, 25],
        0.05,
        [350, 60, 90],
        0.05,
        [350, 45, 80],
        0.05,
        [350, 80, 70],
        0.05,
        [6, 16, 100],
        0.2,
        [15, 26, 97],
        0.1,
      ]);
    },
    pbcRose = function () {
      return [150, 8, 30];
    },
    pMnCl = function (a, b, e, f) {
      let g = a();
      if (f || e < w(0.015)) return g;
      for (; g === b; ) g = a();
      return g;
    };
  function draw() {
    sketch.noLoop(), sketch.background(40, 10, 90);
    let a = wc([
        V1,
        0.03,
        V2,
        0.01,
        V3,
        0.04,
        V5,
        0.18,
        V6,
        0.5,
        V7,
        0.04,
        V4,
        0.2,
      ]),
      b = wc(["none", 0.15, "low", 0.2, "med", 0.45, "high", 0.2]);
    V7 === a && (b = wc(["none", 0.4, "low", 0.3, "med", 0.3]));
    const c = wc([
        pi(0.5),
        0.1,
        pi(0),
        0.1,
        pi(0.25),
        0.2,
        pi(0.75),
        0.2,
        pi(0.05),
        0.1,
        pi(0.95),
        0.1,
        pi(0.45),
        0.1,
        pi(0.55),
        0.1,
      ]),
      d = wc([
        "luxe",
        0.55,
        "gS",
        0.1,
        "rad",
        0.09,
        "bkd",
        0.05,
        "pltq",
        0.05,
        "wM",
        0.04,
        "AM",
        0.03,
        "rose",
        0.02,
        "blk",
        0.02,
        "cool",
        0.01,
        "wOC",
        0.01,
        "pG",
        0.01,
        "dL",
        0.01,
        "lD",
        0.01,
      ]);
    let e,
      f = null;
    "bkd" === d
      ? ((e = pcBaked), (f = pbcBaked))
      : "luxe" === d
      ? ((e = pcLx), (f = pbcLx))
      : "lD" === d
      ? ((e = makeLxD()), (f = pbcLx))
      : "cool" === d
      ? ((e = pcCool), (f = pbcCool))
      : "rad" === d
      ? ((e = pcRad), (f = pbcRad))
      : "pltq" === d
      ? ((e = pcPolitique), (f = pbcPolitique))
      : "retro" === d
      ? ((e = pcRetro), (f = pbcRetro))
      : "blk" === d
      ? ((e = pcBlack), (f = pbcBlack))
      : "wM" === d
      ? ((e = pcWhtMono), (f = pbcWhtMono))
      : "AM" === d
      ? ((e = pcAM), (f = pbcAM))
      : "dL" === d
      ? ((e = pcDarkLifestyle), (f = pbcDarkLifestyle))
      : "pG" === d
      ? ((e = pcPartyGirl), (f = pbcPartyGirl))
      : "wOC" === d
      ? ((e = pcWhtOnCrm), (f = pbcWhtOnCrm))
      : "gS" === d
      ? ((e = pcGolfSocks), (f = pbcGolfSocks))
      : "rose" === d
      ? ((e = pcRose), (f = pbcRose))
      : ((e = pcLx), (f = pbcLx));
    const g = a !== V7 && od(0.6);
    let i = "high";
    i =
      a === V7
        ? "highAF"
        : a === V6
        ? "high"
        : a === V1
        ? "highAF"
        : a === V2
        ? wc(["high", 0.6, "med", 0.35, "low", 0.05])
        : wc(["med", 0.7, "high", 0.2, "low", 0.1]);
    const j = f(a);
    sketch.background(j[0], j[1], j[2]);
    let k = null;
    a === V1
      ? (k = pm1)
      : a === V2
      ? (k = pm2)
      : a === V3
      ? (k = pm3)
      : a === V5
      ? (k = pm4)
      : a === V6
      ? (k = pm5)
      : a === V7
      ? (k = pm6)
      : a === V4 && (k = pm7);
    let l = 150;
    a === V1
      ? (l = gssn(10, 10))
      : a === V2
      ? (l = gssn(40, 30))
      : a === V3
      ? (l = gssn(90, 50))
      : a === V5
      ? (l = gssn(150, 50))
      : a === V6
      ? (l = gssn(200, 50))
      : a === V7 && (l = gssn(200, 50)),
      (l = Math.max(5, l));
    let m = [],
      n = h(0.017);
    if (a === V1) {
      h(0.005);
    } else if (a === V2) {
      h(0.01);
    }
    "highAF" === i
      ? (n *= 0.5)
      : "med" === i
      ? (n *= 2.5)
      : "low" === i && (n *= 5);
    for (let a = h(-0.1); a < h(1.101); a += n) m.push(a);
    m = shffl(m);
    const o = od(0.04),
      p = od(0.15) && a > V1;
    let q = !p && od(0.3);
    const r =
        od(0.025) &&
        "wM" !== d &&
        "blk" !== d &&
        "dL" !== d &&
        "pG" !== d &&
        "wOC" !== d,
      s =
        !r &&
        od(0.025) &&
        "wM" !== d &&
        "blk" !== d &&
        "dL" !== d &&
        "pG" !== d &&
        "wOC" !== d,
      t =
        !p &&
        ("blk" === d ||
          "wOC" === d ||
          (od(0.2) && 70 < j[2] && a >= V5 && "pG" !== d)),
      u = od(0.04),
      v = flwP(c, b, o),
      x = cSegs(v, m, l, c, k, g, i, o, s, r, u);
    for (const b of x) {
      const d = b.margin;
      if (2 <= b.points.length) {
        sketch.noStroke();
        const f = pMnCl(e, j, d, t);
        sketch.fill(f[0], f[1], f[2]),
          t ? (sketch.stroke(0, 0, 15), swght(w(0.001))) : sketch.noStroke();
        let c = z4;
        d === z0
          ? (c = w(7e-4))
          : d === z1
          ? (c = w(0.0019))
          : d === z2
          ? (c = w(0.0038))
          : d === z3
          ? (c = w(0.009))
          : d === z4
          ? (c = w(0.0188))
          : d === z5
          ? (c = w(0.0388))
          : d === z6
          ? (c = w(0.078))
          : d === z7 && (c = w(0.157));
        const g = fatTop(b.points, c),
          i = fatBot(b.points, c),
          k = fat(b.points, c),
          l = crvL(g),
          m = crvL(i);
        if (p)
          strokeSegment(f, c, l, function (a, b) {
            const [c, d] = lerpCrv(g, a, l),
              [e, f] = lerpCrv(i, a, m);
            return [lrp(c, e, b), lrp(d, f, b)];
          });
        else {
          sketch.beginShape();
          for (const a of k) vrtx(a[0], a[1]);
          sketch.endShape(sketch.CLOSE);
          for (const b of [!0, !1]) {
            let d = pSL(a);
            q && (d = 2 * c);
            let f = d / l;
            f = Math.floor(f * 10000) / 10000.0;
            const j = pNStps(f, q);
            if (0 < j)
              if (b) {
                for (let a = 0; a < j * f + 0.001 - f; a += f) {
                  const b = a;
                  let c = a + f;
                  const d = e();
                  fSeg(d, t, g, i, b, c, l, m);
                }
              } else {
                for (let a = 1 - j * f; a < 1 + f; a += f) {
                  const b = a;
                  let c = a + f;
                  0.99 < c && 1 > c && (c = 1.0001);
                  const d = e();
                  fSeg(d, t, g, i, b, c, l, m);
                }
              }
          }
        }
      }
    }
  }

  sketch.setup = setup;
  sketch.draw = draw;
}

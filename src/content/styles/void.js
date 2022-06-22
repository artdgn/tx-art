import { urlParamTxHash } from '../util.js'

let maxSize = 400;

const tokenData = { hash: urlParamTxHash() };

export function drawVoid({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;

  // create a canvas child
  const sketchDiv = document.getElementById(sketchId);
  const canvas = document.createElement('canvas', { "width": maxSize, "height": maxSize });
  sketchDiv.appendChild(canvas);


  const o = 1 / 3,
    v = 1 / 6,
    u = new Float32Array([
      1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1,
      -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
    ]),
    b = {
      init(e) {
        (this.r = this.alea(e)),
          (this.p = this.bp(this.r)),
          (this.perm = new Uint8Array(512)),
          (this.p12 = new Uint8Array(512));
        for (var t = 0; t < 512; t++)
          (this.perm[t] = this.p[255 & t]),
            (this.p12[t] = this.perm[t] % 12);
      },
      bp(e) {
        var t,
          r = new Uint8Array(256);
        for (t = 0; t < 256; t++) r[t] = t;
        for (t = 0; t < 255; t++) {
          var a = t + ~~(e() * (256 - t)),
            i = r[t];
          (r[t] = r[a]), (r[a] = i);
        }
        return r;
      },
      masher() {
        var e = 4022871197;
        return function (t) {
          t = t.toString();
          for (var r = 0; r < t.length; r++) {
            var a = 0.02519603282416938 * (e += t.charCodeAt(r));
            (a -= e = a >>> 0),
              (e = (a *= e) >>> 0),
              (e += 4294967296 * (a -= e));
          }
          return 2.3283064365386963e-10 * (e >>> 0);
        };
      },
      alea() {
        var e = 0,
          t = 0,
          r = 0,
          a = 1,
          i = this.masher();
        (e = i(" ")), (t = i(" ")), (r = i(" "));
        for (var n = 0; n < arguments.length; n++)
          (e -= i(arguments[n])) < 0 && (e += 1),
            (t -= i(arguments[n])) < 0 && (t += 1),
            (r -= i(arguments[n])) < 0 && (r += 1);
        return (
          (i = null),
          function () {
            var i = 2091639 * e + 2.3283064365386963e-10 * a;
            return (e = t), (t = r), (r = i - (a = 0 | i));
          }
        );
      },
      n3(e, t, r) {
        var a,
          i,
          n,
          f,
          b,
          l,
          c,
          s,
          A,
          h,
          x = this.p12,
          d = this.perm,
          m = (e + t + r) * o,
          y = p(e + m),
          g = p(t + m),
          E = p(r + m),
          D = (y + g + E) * v,
          _ = e - (y - D),
          T = t - (g - D),
          P = r - (E - D);
        _ >= T
          ? T >= P
            ? ((b = 1), (l = 0), (c = 0), (s = 1), (A = 1), (h = 0))
            : _ >= P
              ? ((b = 1), (l = 0), (c = 0), (s = 1), (A = 0), (h = 1))
              : ((b = 0), (l = 0), (c = 1), (s = 1), (A = 0), (h = 1))
          : T < P
            ? ((b = 0), (l = 0), (c = 1), (s = 0), (A = 1), (h = 1))
            : _ < P
              ? ((b = 0), (l = 1), (c = 0), (s = 0), (A = 1), (h = 1))
              : ((b = 0), (l = 1), (c = 0), (s = 1), (A = 1), (h = 0));
        var B = _ - b + v,
          M = T - l + v,
          R = P - c + v,
          F = _ - s + 2 * v,
          w = T - A + 2 * v,
          L = P - h + 2 * v,
          N = _ - 1 + 3 * v,
          I = T - 1 + 3 * v,
          S = P - 1 + 3 * v,
          G = 255 & y,
          C = 255 & g,
          U = 255 & E,
          V = 0.6 - _ * _ - T * T - P * P;
        if (V < 0) a = 0;
        else {
          var O = 3 * x[G + d[C + d[U]]];
          a = (V *= V) * V * (u[O] * _ + u[O + 1] * T + u[O + 2] * P);
        }
        var H = 0.6 - B * B - M * M - R * R;
        if (H < 0) i = 0;
        else {
          var X = 3 * x[G + b + d[C + l + d[U + c]]];
          i = (H *= H) * H * (u[X] * B + u[X + 1] * M + u[X + 2] * R);
        }
        var z = 0.6 - F * F - w * w - L * L;
        if (z < 0) n = 0;
        else {
          var W = 3 * x[G + s + d[C + A + d[U + h]]];
          n = (z *= z) * z * (u[W] * F + u[W + 1] * w + u[W + 2] * L);
        }
        var k = 0.6 - N * N - I * I - S * S;
        if (k < 0) f = 0;
        else {
          var Y = 3 * x[G + 1 + d[C + 1 + d[U + 1]]];
          f = (k *= k) * k * (u[Y] * N + u[Y + 1] * I + u[Y + 2] * S);
        }
        return 32 * (a + i + n + f);
      },
    },
    l =
      ((n = [
        [2731, 2460, 1645, 1087, 0, 4054],
        [3754, 1661, 1518, 1224, 307, 290],
        [3994, 3976, 3419, 1338, 787, 3766],
        [875, 410, 1692, 4037, 2269, 2798],
        [0, 4095],
        [581, 664, 3782, 4006, 3685],
        [
          1331, 1875, 2150, 2677, 2949, 2440, 2967, 3477, 3222, 3787, 3275,
          1160, 2731, 1946, 1400, 1947, 1109, 1146, 274, 547, 1895,
        ],
        [1589, 3977, 3021, 89, 36],
        [3838, 3021, 2220, 1675, 1145, 600, 54, 546],
        [
          3171, 2131, 3733, 1075, 2949, 3478, 4023, 2421, 3239, 4057, 1636,
          4090, 4093, 2455, 1926, 1654, 853, 870, 341, 564, 546, 308, 18,
        ],
        [
          2611, 2355, 1314, 1842, 2626, 3171, 2386, 3459, 3764, 786, 1075,
          2135, 3226, 1605, 802, 2373, 3448, 1587, 3158, 2612, 1843, 1058,
          3380,
        ],
        [3021, 682, 120, 86, 2236, 4044, 3805, 3993, 4074, 4025, 546],
        [1739, 1417, 1914, 3959, 4042, 4076],
        [4078, 2988, 154, 2543, 3567, 4094],
        [2149, 3685, 3990, 4041, 3547, 3566],
        [3259, 804, 1706, 2252, 2781, 3037],
        [4059, 3481, 2425, 1111, 563, 2748],
        [1024, 1794, 3141, 3957, 3989, 3779],
        [1366, 2234, 3053, 4095, 4059, 4012],
        [820, 3476, 3956, 4073, 3837, 167],
        [1327, 3151, 3946, 4092, 4094, 1282],
        [19, 1110, 2218, 2505, 3290, 3943],
        [18, 375, 1688, 4041, 3619],
        [2507, 4074, 3942, 4037, 2267],
        [1722, 2779, 3836, 3978, 1109],
        [2633, 3434, 3754, 4075, 3309, 2558],
        [1499, 2813, 1882, 3549, 3943, 3959],
      ]),
        (f = []),
      {
        geti: function (e) {
          e < 0 && (e *= -1), (e %= 1);
          let t = f.length,
            r = p(t * e),
            a = (r + 1) % t,
            i = t * e - r,
            n = f[r],
            o = f[a],
            v = 1 - i;
          return [
            o[0] * i + v * n[0],
            o[1] * i + v * n[1],
            o[2] * i + v * n[2],
          ];
        },
        init: function (e, t) {
          let r = parseInt(p(e * n.length));
          for (var a = 0; a < t; ++a)
            for (var i = 0; i < n[r].length; ++i) {
              let e = n[r][i],
                t = (15 & e) / 16,
                a = ((e >> 4) & 15) / 16,
                o = ((e >> 8) & 15) / 16;
              f.push([o, a, t]);
            }
        },
      }),
    c = (e) => new Float32Array(e),
    s = Math.PI,
    A = 2 * s,
    h = Math.cos,
    x = Math.pow,
    d = Math.sin,
    m = Math.sqrt,
    p = Math.floor,
    y =
      (Math.ceil,
        Math.abs,
        (e, t, r, a) => {
          const i = e - r,
            n = t - a;
          return m(i * i + n * n);
        }),
    g = canvas.getContext("webgl", { alpha: !1 }),
    E = g.getExtension("ANGLE_instanced_arrays"),
    D = g.TRIANGLES,
    _ = g.FRAMEBUFFER,
    T = g.FLOAT,
    P = g.UNSIGNED_BYTE,
    B = g.RGBA,
    M = g.TEXTURE_2D,
    R = g.COLOR_ATTACHMENT0,
    F = g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT,
    w = g.ARRAY_BUFFER,
    L = g.STATIC_DRAW,
    N = g.DYNAMIC_DRAW,
    I = g.ONE,
    S = g.ONE_MINUS_SRC_ALPHA,
    G = g.SRC_ALPHA,
    C = (e, t, r) => e.getAttribLocation(t, r),
    U = (e, t, r) => e.getUniformLocation(t, r),
    V = () => g.createBuffer(),
    O = 15e3,
    H = c(4 * O),
    X = c(3 * O),
    z = c(O),
    W = c(O),
    k = c(O);
  let Y,
    q,
    j,
    J,
    K,
    Q,
    Z = 0;
  b.init(tokenData.hash);
  let $ = b.r,
    ee = $(),
    te = 1;
  $() > 0.95 && (te = 2);
  let re = 0.5 + 1.5 * $(),
    ae = 100,
    ie = $();
  ie > 0.8 ? (ae = 0) : ie > 0.3 && (ae = p(3 * x($(), 2)) + 4);
  let ne = $() > 0.5,
    fe = $() > 0.7,
    oe = $() > 0.5,
    ve = $() > 0.6,
    ue = $() > 0.95,
    be = !ue && $() > 0.7,
    le = !ue && !be && !oe && $() > 0.95,
    ce = $() > 0.6,
    se = $() > 0.3,
    Ae = $() > 0.9;
  function e() {
    let e = g.createTexture();
    g.bindTexture(M, e),
      g.texImage2D(M, 0, B, K, Q, 0, B, P, null),
      g.texParameteri(M, g.TEXTURE_MIN_FILTER, g.LINEAR),
      g.texParameteri(M, g.TEXTURE_MAG_FILTER, g.LINEAR),
      g.texParameteri(M, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE),
      g.texParameteri(M, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
    let t = g.createFramebuffer();
    return (
      g.bindFramebuffer(_, t), g.framebufferTexture2D(_, R, M, e, 0), [e, t]
    );
  }
  function t(e, t, r) {
    let a = e.createShader(t);
    return e.shaderSource(a, r), e.compileShader(a), a;
  }
  function r(e, t, r) {
    let a = e.createProgram();
    return e.attachShader(a, t), e.attachShader(a, r), e.linkProgram(a), a;
  }
  l.init(ee, te);
  const he = g.VERTEX_SHADER,
    xe = g.FRAGMENT_SHADER,
    de = t(
      g,
      he,
      "attribute vec4 ap;attribute vec4 ac;attribute vec3 as;varying vec4 vc;uniform vec2 d;void main(){vc=ac;gl_Position=vec4((as.z*ap.x+as.x)/d.x,(as.z*ap.y+as.y)/d.y,ap.zw);}"
    ),
    me = t(
      g,
      xe,
      "precision highp float;varying vec4 vc;void main(){gl_FragColor=vc;}"
    ),
    pe = t(
      g,
      he,
      "attribute vec4 ap;attribute vec2 at;varying vec2 vt;void main(){gl_Position=vec4(ap.xyz,1.0);vt=at;}"
    ),
    ye = t(
      g,
      xe,
      "precision highp float;varying vec2 vt;uniform sampler2D u;uniform vec2 d;uniform float b;uniform float sc;uniform vec2 r;void main(){float h=d.x;float v=d.y;mat2 m=mat2(r.x,-r.y,r.y,r.x); vec4 s=vec4(0.0);vec2 t=(vt-vec2(0.5))*m*sc+vec2(0.5);s+=texture2D(u,vec2(t.x-4.0*b*h,t.y-4.0*b*v))*0.016216;s+=texture2D(u,vec2(t.x-3.0*b*h,t.y-3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x-2.0*b*h,t.y-2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x-1.0*b*h,t.y-1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x,t.y))*0.227027;s+=texture2D(u,vec2(t.x+1.0*b*h,t.y+1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x+2.0*b*h,t.y+2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x+3.0*b*h,t.y+3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x+4.0*b*h,t.y+4.0*b*v))*0.016216;gl_FragColor=s;}"
    ),
    ge = t(
      g,
      he,
      "attribute vec4 ap;attribute vec2 at;varying vec2 v;void main(){gl_Position=vec4(ap.xyz,1.0);v=at;}"
    ),
    Ee = t(
      g,
      xe,
      "precision highp float;varying vec2 v;uniform sampler2D t;void main(){vec4 c=texture2D(t,v);gl_FragColor=c;}"
    ),
    De = t(
      g,
      xe,
      "precision highp float;varying vec2 v;uniform vec4 c0,c1;void main(){gl_FragColor=mix(c0,c1,v.y);}"
    ),
    _e = r(g, de, me),
    Te = r(g, pe, ye),
    Pe = r(g, ge, Ee),
    Be = r(g, ge, De),
    Me = C(g, _e, "ap"),
    Re = C(g, _e, "ac"),
    Fe = C(g, _e, "as"),
    we = U(g, _e, "d"),
    Le = C(g, Te, "ap"),
    Ne = C(g, Te, "at"),
    Ie = U(g, Te, "d"),
    Se = U(g, Te, "b"),
    Ge = U(g, Te, "sc"),
    Ce = U(g, Te, "r"),
    Ue = C(g, Pe, "ap"),
    Ve = C(g, Pe, "at"),
    Oe = C(g, Be, "ap"),
    He = C(g, Be, "at"),
    Xe = U(g, Be, "c0"),
    ze = U(g, Be, "c1"),
    We = V(),
    ke = V(),
    Ye = V(),
    qe = V();
  (Z = Math.min(maxSize, maxSize)),
    (K = Z),
    (Q = Z),
    (g.canvas.width = Z),
    (g.canvas.height = Z),
    ([Y, q] = e()),
    ([j, J] = e());
  let je = [],
    Je = 180;
  for (var a = 0; a < 60; ++a) {
    let e = (a / 60) * A,
      t = ((a + 1) / 60) * A;
    je.push(0, 0, h(e), d(e), h(t), d(t));
  }
  let Ke = [],
    Qe = 360;
  for (a = 0; a < 60; ++a) {
    let e = (a / 60) * A,
      t = ((a + 1) / 60) * A;
    Ke.push(0.8 * h(e), 0.8 * d(e), h(e), d(e), h(t), d(t)),
      Ke.push(0.8 * h(e), 0.8 * d(e), h(t), d(t), 0.8 * h(t), 0.8 * d(t));
  }
  g.bindBuffer(w, We),
    g.bufferData(w, c(je), N),
    g.bindBuffer(w, ke),
    g.bufferData(w, c(Ke), N);
  const Ze = V();
  g.bindBuffer(w, Ze);
  const $e = c([-1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1]);
  g.bufferData(w, $e, L);
  const et = V();
  g.bindBuffer(w, et),
    g.bufferData(w, c([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]), L);
  let tt = 0,
    rt = $(),
    at = $() * A,
    it = 50,
    nt = [];
  for (let e = 0; e < it; ++e) {
    nt[e] = [];
    for (let t = 0; t < it; ++t) nt[e][t] = [];
  }
  let ft = $() * A,
    ot = h(ft) * Z * 0.26,
    vt = d(ft) * Z * 0.26;
  ft = $() * A;
  let ut = h(ft) * Z * 0.24,
    bt = d(ft) * Z * 0.24,
    lt = y(ot, vt, ut, bt);
  lt *= lt;
  let ct = 0.4 * Z;
  ve && (ct = 0.5 * Z);
  let st = 0,
    At = 0,
    ht = 0,
    xt = 0;
  if (be) {
    ct = 2 * Z;
    let e = $() * A;
    ae < 10 && (e = -at),
      (st = h(e) * ct),
      (At = d(e) * ct),
      (ct = ae < 10 ? 2.3 * Z : 2.2 * Z);
  }
  let dt = 0.2 + 0.6 * $();
  if (ue) {
    let e = -at;
    (st = h(e) * ct * (0.2 + dt)),
      (At = d(e) * ct * (0.2 + dt)),
      (ht = -h(e) * ct * 2.7),
      (xt = -d(e) * ct * 2.7);
  }
  for (let e = 0; e < O / 2; ++e) {
    let t = 0,
      r = !1,
      a = 0,
      i = 0,
      n = 0,
      f = 0,
      o = -1,
      v = 1,
      u = 0,
      c = 0,
      g = 0,
      E = 0;
    for (; !r && t < 1e4;) {
      if (0 == ae)
        (a = ($() - 0.5) * Z),
          (i = ($() - 0.5) * Z),
          (n = Math.atan2(i, a) + s);
      else if (be) {
        let e = !1;
        for (; !1 === e;) {
          (a = ($() - 0.5) * Z),
            (i = ($() - 0.5) * Z),
            (n = Math.atan2(i - At, a - st) + s + at);
          let t = (a - st) * (a - st) + (i - At) * (i - At);
          ae < 10 && (v = h(s / ae) / h((n % (A / ae)) - s / ae)),
            t < v * v * ct * ct && (e = !0);
        }
      } else if (ue) {
        let e = !1;
        for (; !1 === e;) {
          (a = ($() - 0.5) * Z),
            (i = ($() - 0.5) * Z),
            (n = Math.atan2(i - At, a - st) + s + at);
          let t = (a - st) * (a - st) + (i - At) * (i - At),
            r = (a - ht) * (a - ht) + (i - xt) * (i - xt);
          ae < 10 && (v = h(s / ae) / h((n % (A / ae)) - s / ae)),
            t < v * v * ct * ct * dt * dt && (e = !0),
            r < ct * ct * 2.5 * 2.5 && ((e = !0), (E = 1));
        }
      } else {
        let e = m($()) * ct;
        (n = $() * A),
          ae < 10 && (v = h(s / ae) / h((n % (A / ae)) - s / ae)),
          (n += at),
          (a = v * e * h(n)),
          (i = v * e * d(n));
      }
      (f = ne
        ? (10 + 80 * x($(), 8)) * Z * 0.001
        : 4 * $() * 6 * Z * 0.001),
        (o = -1),
        (u = parseInt(p((a / Z + 0.5) * it))),
        (c = parseInt(p((i / Z + 0.5) * it)));
      let e = Math.max(0, u - 7),
        b = Math.max(0, c - 7),
        l = Math.min(it - 1, u + 7),
        D = Math.min(it - 1, c + 7);
      e: for (let t = b; t <= D; ++t)
        for (let r = e; r <= l; ++r)
          for (const e of nt[r][t]) {
            let t = y(z[e], W[e], a, i) - X[3 * e + 2];
            if ((t < f && ((f = t), (o = e)), f < 4 * Z * 0.001)) break e;
          }
      if (oe) {
        let e = ((a - ot) * (ut - ot) + (i - vt) * (bt - vt)) / lt;
        (g = y(a, i, ot + e * (ut - ot), vt + e * (bt - vt))),
          g < 0.05 * Z && (f = 0);
      }
      f > 4 * Z * 0.001 && (r = !0), (t += 1);
    }
    if (!r) break;
    {
      if (
        (nt[u][c].push(e),
          (z[e] = a),
          (W[e] = i),
          (X[3 * e] = z[e]),
          (X[3 * e + 1] = W[e]),
          (X[3 * e + 2] = f),
          le)
      ) {
        let t = m(a * a + i * i) / v / (0.4 * Z);
        k[e] = n / s + 1.2 * t + rt;
      } else
        k[e] = 0.5 * b.n3((a / Z) * re, (i / Z) * re, 0.05 + 0.5 * E) + 0.5;
      if (oe) {
        let t = g / Z;
        (t = Math.min(1, 0.004 / (t * t))), (k[e] = t + (1 - t) * k[e]);
      }
      -1 != o && (k[e] = k[o] + 0.01);
      let t = l.geti(k[e]);
      (H[4 * e] = t[0]),
        (H[4 * e + 1] = t[1]),
        (H[4 * e + 2] = t[2]),
        (H[4 * e + 3] = 0.3),
        tt++;
    }
  }
  let mt = ($() - 0.5) * Z,
    pt = ($() - 0.5) * Z,
    yt = Z,
    gt = -Z,
    Et = Z,
    Dt = -Z;
  for (let e = 0; e < tt; ++e) {
    (yt = Math.min(yt, z[e])),
      (Et = Math.min(Et, W[e])),
      (gt = Math.max(gt, z[e])),
      (Dt = Math.max(Dt, W[e]));
    let t = e + tt;
    k[t] = $();
    let r = X[3 * e + 2],
      a = z[e] - mt,
      i = W[e] - pt,
      n = m(a * a + i * i);
    (a /= n),
      (i /= n),
      fe
        ? ((z[t] = z[e] - a * r * 0.25), (W[t] = W[e] - i * r * 0.25))
        : ((z[t] = z[e] - a * r * 0.5), (W[t] = W[e] - i * r * 0.5)),
      (X[3 * t] = z[t]),
      (X[3 * t + 1] = W[t]),
      (X[3 * t + 2] = 0.5 * r);
    let f = l.geti((0.051 * n) / Z + k[e]);
    (H[4 * t] = f[0]),
      (H[4 * t + 1] = f[1]),
      (H[4 * t + 2] = f[2]),
      (H[4 * t + 3] = 0.8);
  }
  tt *= 2;
  let _t = 0.5 * (yt + gt),
    Tt = 0.5 * (Et + Dt);
  for (let e = 0; e < tt; ++e)
    be || ue || ((X[3 * e] -= _t), (X[3 * e + 1] -= Tt)),
      fe && (X[3 * e + 2] *= 0.5);
  g.bindBuffer(w, Ye), g.bufferData(w, H, N);
  let Pt = l.geti(rt),
    Bt = l.geti(rt + 0.1 + 0.3 * $());
  for (
    se || (Bt = Pt),
    ce &&
    ((Pt[0] *= 0.6),
      (Pt[1] *= 0.6),
      (Pt[2] *= 0.6),
      (Bt[0] *= 0.6),
      (Bt[1] *= 0.6),
      (Bt[2] *= 0.6)),
    g.clear(F),
    g.bindFramebuffer(_, q),
    g.viewport(0, 0, K, Q),
    g.useProgram(Be),
    g.enableVertexAttribArray(Oe),
    g.bindBuffer(w, Ze),
    g.vertexAttribPointer(Oe, 2, T, !1, 0, 0),
    g.enableVertexAttribArray(He),
    g.bindBuffer(w, et),
    g.vertexAttribPointer(He, 2, T, !1, 0, 0),
    g.uniform4f(Xe, Pt[0], Pt[1], Pt[2], 1),
    g.uniform4f(ze, Bt[0], Bt[1], Bt[2], 1),
    g.drawArrays(D, 0, 6),
    a = 0;
    a < 50;
    ++a
  )
    i();
  function i(e) {
    !(function (e, t, r = 1) {
      g.bindFramebuffer(_, J),
        g.viewport(0, 0, K, Q),
        g.clear(F),
        g.useProgram(Te),
        g.bindTexture(M, Y),
        g.bindBuffer(w, Ze),
        g.vertexAttribPointer(Le, 2, T, !1, 0, 0),
        g.enableVertexAttribArray(Le),
        g.enableVertexAttribArray(Ne),
        g.bindBuffer(w, et),
        g.vertexAttribPointer(Ne, 2, T, !1, 0, 0),
        g.uniform2f(Ie, 1 / Z, 0),
        g.uniform1f(Se, e),
        g.uniform1f(Ge, r),
        g.uniform2f(Ce, t[0], t[1]),
        g.drawArrays(D, 0, 6),
        g.bindFramebuffer(_, q),
        g.viewport(0, 0, K, Q),
        g.clear(F),
        g.bindTexture(M, j),
        g.uniform2f(Ie, 0, 1 / Z),
        g.drawArrays(D, 0, 6);
    })((2 * Z) / 1e3, [1, 0], 0.999),
      g.enable(g.BLEND),
      g.blendFuncSeparate(G, S, I, S),
      g.useProgram(_e),
      g.bindBuffer(w, Ye),
      g.bufferData(w, H, N),
      g.bindBuffer(w, qe),
      g.bufferData(w, X, N),
      g.uniform2f(we, Z / 2, Z / 2);
    let t = tt,
      r = Je;
    Ae
      ? ((t = tt / 2),
        g.bindBuffer(w, We),
        g.enableVertexAttribArray(Me),
        g.vertexAttribPointer(Me, 2, T, !1, 0, 0),
        g.bindBuffer(w, qe),
        g.enableVertexAttribArray(Fe),
        g.vertexAttribPointer(Fe, 3, T, !1, 0, (tt / 2) * 12),
        E.vertexAttribDivisorANGLE(Fe, 1),
        g.bindBuffer(w, Ye),
        g.enableVertexAttribArray(Re),
        g.vertexAttribPointer(Re, 4, T, !1, 0, (tt / 2) * 16),
        E.vertexAttribDivisorANGLE(Re, 1),
        E.drawArraysInstancedANGLE(D, 0, r, t),
        g.bindBuffer(w, ke),
        (r = Qe))
      : g.bindBuffer(w, We),
      g.enableVertexAttribArray(Me),
      g.vertexAttribPointer(Me, 2, T, !1, 0, 0),
      g.bindBuffer(w, Ye),
      g.enableVertexAttribArray(Re),
      g.vertexAttribPointer(Re, 4, T, !1, 0, 0),
      E.vertexAttribDivisorANGLE(Re, 1),
      g.bindBuffer(w, qe),
      g.enableVertexAttribArray(Fe),
      g.vertexAttribPointer(Fe, 3, T, !1, 0, 0),
      E.vertexAttribDivisorANGLE(Fe, 1),
      E.drawArraysInstancedANGLE(D, 0, r, t),
      E.vertexAttribDivisorANGLE(Re, 0),
      E.vertexAttribDivisorANGLE(Fe, 0),
      g.blendFuncSeparate(G, S, I, S);
  }
  g.bindFramebuffer(_, null),
    g.viewport(0, 0, g.canvas.width, g.canvas.height),
    g.clear(F),
    g.useProgram(Pe),
    g.bindTexture(M, Y),
    g.enableVertexAttribArray(Ue),
    g.bindBuffer(w, Ze),
    g.vertexAttribPointer(Ue, 2, T, !1, 0, 0),
    g.enableVertexAttribArray(Ve),
    g.bindBuffer(w, et),
    g.vertexAttribPointer(Ve, 2, T, !1, 0, 0),
    g.drawArrays(D, 0, 6);

  var n, f;
}

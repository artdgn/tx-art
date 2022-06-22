import { urlParamTxHash } from '../util.js'

let maxSize = 400;

export function draw720minutes({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  let hash = urlParamTxHash().slice(0, 40); // this piece uses only 20 bytes of the hash
  let tokenData = { 
    hash: hash, 
    tokenId: parseInt(hash.substr(-8), 16) // this piece is using the tokenId last 4 digits
  };
  console.log(tokenData)

  // create a canvas child
  const sketchDiv = document.getElementById(sketchId);
  const canvas = document.createElement('canvas', { "width": maxSize, "height": maxSize });
  sketchDiv.appendChild(canvas);

  const l = 1 / 3,
    u = 1 / 6,
    c = new Float32Array([
      1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1,
      -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
    ]),
    v = {
      init(e) {
        (this.r = this.alea(e)),
          (this.p = this.bp(this.r)),
          (this.perm = new Uint8Array(512)),
          (this.p12 = new Uint8Array(512));
        for (let t = 0; t < 512; t++)
          (this.perm[t] = this.p[255 & t]),
            (this.p12[t] = this.perm[t] % 12);
      },
      bp(e) {
        let t,
          r = new Uint8Array(256);
        for (t = 0; t < 256; t++) r[t] = t;
        for (t = 0; t < 255; t++) {
          let a = t + ~~(e() * (256 - t)),
            i = r[t];
          (r[t] = r[a]), (r[a] = i);
        }
        return r;
      },
      masher() {
        let e = 4022871197;
        return function (t) {
          t = t.toString();
          for (let r = 0; r < t.length; r++) {
            let a = 0.02519603282416938 * (e += t.charCodeAt(r));
            (a -= e = a >>> 0),
              (e = (a *= e) >>> 0),
              (e += 4294967296 * (a -= e));
          }
          return 2.3283064365386963e-10 * (e >>> 0);
        };
      },
      alea() {
        let e = 0,
          t = 0,
          r = 0,
          a = 1,
          i = this.masher();
        (e = i(" ")), (t = i(" ")), (r = i(" "));
        for (let n = 0; n < arguments.length; n++)
          (e -= i(arguments[n])) < 0 && (e += 1),
            (t -= i(arguments[n])) < 0 && (t += 1),
            (r -= i(arguments[n])) < 0 && (r += 1);
        return (
          (i = null),
          function () {
            let i = 2091639 * e + 2.3283064365386963e-10 * a;
            return (e = t), (t = r), (r = i - (a = 0 | i));
          }
        );
      },
      n3(e, t, r) {
        let a,
          i,
          n,
          o,
          f,
          v,
          s,
          b,
          d,
          h,
          m = this.p12,
          A = this.perm,
          x = (e + t + r) * l,
          g = p(e + x),
          y = p(t + x),
          E = p(r + x),
          D = (g + y + E) * u,
          _ = e - (g - D),
          T = t - (y - D),
          w = r - (E - D);
        _ >= T
          ? T >= w
            ? ((f = 1), (v = 0), (s = 0), (b = 1), (d = 1), (h = 0))
            : _ >= w
              ? ((f = 1), (v = 0), (s = 0), (b = 1), (d = 0), (h = 1))
              : ((f = 0), (v = 0), (s = 1), (b = 1), (d = 0), (h = 1))
          : T < w
            ? ((f = 0), (v = 0), (s = 1), (b = 0), (d = 1), (h = 1))
            : _ < w
              ? ((f = 0), (v = 1), (s = 0), (b = 0), (d = 1), (h = 1))
              : ((f = 0), (v = 1), (s = 0), (b = 1), (d = 1), (h = 0));
        let F = _ - f + u,
          P = T - v + u,
          R = w - s + u,
          L = _ - b + 2 * u,
          B = T - d + 2 * u,
          M = w - h + 2 * u,
          N = _ - 1 + 3 * u,
          S = T - 1 + 3 * u,
          C = w - 1 + 3 * u,
          I = 255 & g,
          U = 255 & y,
          G = 255 & E,
          z = 0.6 - _ * _ - T * T - w * w;
        if (z < 0) a = 0;
        else {
          let O = 3 * m[I + A[U + A[G]]];
          a = (z *= z) * z * (c[O] * _ + c[O + 1] * T + c[O + 2] * w);
        }
        let V = 0.6 - F * F - P * P - R * R;
        if (V < 0) i = 0;
        else {
          let H = 3 * m[I + f + A[U + v + A[G + s]]];
          i = (V *= V) * V * (c[H] * F + c[H + 1] * P + c[H + 2] * R);
        }
        let X = 0.6 - L * L - B * B - M * M;
        if (X < 0) n = 0;
        else {
          let k = 3 * m[I + b + A[U + d + A[G + h]]];
          n = (X *= X) * X * (c[k] * L + c[k + 1] * B + c[k + 2] * M);
        }
        let W = 0.6 - N * N - S * S - C * C;
        if (W < 0) o = 0;
        else {
          let Y = 3 * m[I + 1 + A[U + 1 + A[G + 1]]];
          o = (W *= W) * W * (c[Y] * N + c[Y + 1] * S + c[Y + 2] * C);
        }
        return 32 * (a + i + n + o);
      },
    },
    s =
      ((o = [
        [0, 546, 0, 4095, 546, 4095],
        [581, 664, 3782, 4006, 3685],
        [
          2661, 1603, 3480, 4043, 2131, 3769, 3478, 2948, 2402, 3767, 1872,
          2689, 3509, 2706, 1361, 1906, 2728, 3541, 2725, 1379, 1941, 2791,
          1107, 1702, 1397, 1497, 1175, 970, 1125, 903, 682, 1740, 2508,
          581, 1178, 615, 2202, 342, 1418, 3277, 70, 1658, 1625, 1062, 2714,
          1849, 1542, 2103, 2328, 1845, 3789, 3755, 3175,
        ],
        [
          1297, 2098, 2934, 3719, 3429, 3480, 2968, 3768, 3786, 3804, 801,
          4059, 1677, 1114, 550, 275, 805, 1079, 1641, 3550, 1334, 2988,
          787, 1863, 2698, 2664, 1588, 2134, 3259, 2423, 785, 3482, 3208,
          2116, 3174,
        ],
        [
          2950, 1074, 3531, 3237, 3801, 3290, 883, 578, 2505, 3035, 1223,
          562, 612, 662, 1944, 596, 970, 630, 937, 2508, 921, 614, 955, 581,
          632, 2253, 1742, 923, 2747, 873, 1930, 1147, 1661, 2204, 1369,
          1095, 1611, 2430, 1337, 2429, 2414, 803, 804, 1062, 2123, 1881,
          1849, 3165, 2362, 1366, 2907, 2939, 546, 3228, 2102, 2632, 3533,
          1316, 2936, 2613,
        ],
        [
          1331, 1875, 2150, 2677, 2949, 2440, 2967, 3477, 3222, 3787, 3275,
          1160, 2731, 1946, 1400, 1947, 1109, 1146, 274, 547, 1895,
        ],
        [
          2969, 1041, 2679, 1859, 2097, 2882, 2661, 819, 3698, 3461, 2642,
          1857, 2167, 3186, 2148, 2933, 1073, 2695, 3730, 3496, 3749, 1364,
          2146, 2690, 3763, 1346, 4067, 3002, 2181, 3820, 1637, 1922, 2200,
          561, 1105, 3016, 3839, 3294, 2748, 2475, 2185, 274, 1639, 1093,
          1929, 1384, 547, 1094, 2424, 1878, 546,
        ],
        [
          2116, 1075, 2645, 3191, 2625, 3173, 3700, 1858, 3697, 4043, 1330,
          4002, 4065, 4092, 4087, 546, 340, 307, 291, 1127, 290, 838, 564,
          2186, 1111, 1350, 1879, 803, 1333, 2424, 3242, 1861, 2663,
        ],
        [
          2867, 1842, 2627, 1058, 3156, 1586, 2900, 2115, 3446, 2677, 2133,
          1331, 2968, 3752, 1603, 3787, 3513, 2404, 3205, 2966, 2421, 3803,
          3785, 1621, 3257, 2439, 2693, 2983, 3510, 545, 4076, 1891, 4094,
          3546, 834, 2743, 1923, 1653, 1214, 923, 616, 582, 291, 274, 546,
          274, 819, 786, 546, 2834, 2066, 1297,
        ],
        [1589, 3977, 3021, 89, 36],
        [
          2423, 3396, 2900, 3787, 3992, 3958, 2951, 4025, 3479, 4060, 4023,
          4057, 4092, 4094, 2730, 2015, 1436, 1710, 856, 565, 1147, 18, 291,
          2221, 1129, 837, 566, 3822, 1111, 1913, 2442, 1366, 547, 1895,
          1076, 1879, 2971, 2938, 1572, 2664, 3722, 2374, 1621, 1058, 3191,
          2083, 3430, 2133, 3481,
        ],
        [
          3686, 2167, 3720, 2133, 3173, 4009, 2951, 3973, 4007, 3478, 2712,
          4025, 3240, 4059, 3768, 4058, 4075, 2456, 1672, 1144, 599, 1366,
          565, 546, 820, 275, 1059, 1828, 1605, 2869, 2902, 3670, 3636,
          1041, 2082, 3123,
        ],
        [3838, 3021, 2220, 1675, 1145, 600, 54, 546],
        [
          1569, 2370, 3171, 3460, 2404, 801, 3822, 1346, 3221, 3258, 2712,
          2711, 3276, 3784, 3803, 2437, 1637, 819, 3e3, 2230, 2472, 1140,
          273, 578, 1398, 1448, 630, 613, 307,
        ],
        [
          3171, 2131, 3733, 1075, 2949, 3478, 4023, 2421, 3239, 4057, 1636,
          4090, 4093, 2455, 1926, 1654, 853, 870, 341, 564, 546, 308, 18,
        ],
        [
          2645, 2064, 3424, 801, 2928, 3728, 1874, 4032, 956, 819, 650, 345,
          326, 292, 311, 294, 275, 3005, 2121, 1558, 770, 1059, 3625, 2821,
          1539, 2820, 3330,
        ],
        [
          1860, 801, 1057, 2644, 3207, 1585, 2369, 1329, 2131, 2113, 2913,
          2932, 3202, 3747, 3768, 3493, 4037, 4095, 4072, 4091, 546, 332,
          843, 550, 1097, 1371, 548, 1352, 2154, 530, 1607, 2391, 273, 1332,
          2662,
        ],
        [
          3510, 2983, 4076, 3803, 4037, 3801, 3002, 3799, 2436, 2182, 3016,
          3291, 3292, 2763, 2764, 2235, 2185, 2730, 1416, 1366, 1981, 1144,
          1453, 1181, 838, 1930, 2476, 1402, 547, 1112, 564, 1130, 839, 823,
          547, 549,
        ],
        [
          546, 2132, 529, 1330, 3497, 2712, 2950, 2675, 1636, 3509, 3255,
          2182, 2451, 1907, 2726, 818, 2740, 3030, 3048, 1957, 1669, 3050,
          1992, 1430, 1125, 2266, 1431, 1159, 1738, 1177, 887, 2202, 1913,
          1638, 1623, 2153, 1349, 2698, 2168, 1621, 1075, 2134, 2936,
        ],
        [
          2611, 2355, 1314, 1842, 2626, 3171, 2386, 3459, 3764, 786, 1075,
          2135, 3226, 1605, 802, 2373, 3448, 1587, 3158, 2612, 1843, 1058,
          3380,
        ],
        [
          3464, 3719, 3753, 4007, 4042, 4041, 4094, 4072, 4091, 1693, 1404,
          841, 1115, 823, 1865, 546, 1061, 2939, 2376, 3483, 2904, 1844,
          3192, 3771, 1041, 2628, 3174,
        ],
        [
          2370, 3170, 3462, 2951, 1602, 3458, 2403, 2931, 3223, 818, 2949,
          3493, 3495, 3746, 1893, 1347, 3765, 2166, 4040, 2456, 3529, 4033,
          1620, 1909, 2438, 3001, 2711, 2448, 3838, 3054, 2527, 1999, 1471,
          943, 1164, 1948, 415, 346, 2714,
        ],
        [
          3921, 3155, 2371, 3955, 3973, 3189, 2661, 3953, 1876, 2695, 801,
          3988, 4004, 4001, 3494, 4038, 1075, 2436, 3783, 4033, 1635, 2998,
          3272, 2486, 2778, 578, 1992, 711, 184, 714, 169, 853, 598, 18,
        ],
        [
          3872, 3105, 3937, 3973, 4026, 3968, 4004, 4040, 4016, 4038, 4048,
          1088, 4088, 4085, 4090, 2448, 4082, 4092, 3058, 3061, 3064, 1777,
          946, 336, 385, 2811, 711, 374, 2301, 34, 974, 703, 343, 943, 546,
          398, 347, 20, 22, 2189, 24, 1100, 1301, 546, 3998, 786, 3930,
          4045, 3961, 2597, 3895, 1810, 3893, 2116, 3859,
        ],
        [
          3173, 50, 3294, 2203, 19, 1913, 1077, 804, 546, 3243, 2134, 1572,
          1298, 3755, 2920, 2373, 1538, 3481, 1827,
        ],
        [
          1570, 2389, 2098, 2916, 2898, 2712, 2695, 3205, 3219, 3239, 2985,
          3512, 3530, 3819, 4093, 3275, 2747, 1981, 1436, 2475, 1675, 1146,
          601, 839, 294, 38, 1640, 548, 1094, 1622, 2168, 1059, 2134,
        ],
        [
          2320, 2389, 3156, 3136, 1841, 2897, 3696, 2385, 3186, 2933, 3984,
          802, 3457, 1601, 3496, 1620, 2947, 4016, 2146, 3507, 2725, 1926,
          562, 50, 427, 1980, 871, 411, 326, 361, 395, 292, 344, 363, 310,
          586, 2204, 276, 551, 1082, 1628, 2172, 1352, 1350, 1849, 1317,
          546, 2682, 2616, 2086, 3434, 1042, 802, 3384, 1861, 3499, 1812,
          2598, 3350, 2440, 2579, 3090, 1297,
        ],
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
            l = 1 - i;
          return [
            o[0] * i + l * n[0],
            o[1] * i + l * n[1],
            o[2] * i + l * n[2],
          ];
        },
        init: function (e, t, r) {
          let a = e % o.length;
          for (let i = 0; i < r; ++i)
            for (let n = 0; n < o[a].length; ++n) {
              let e = o[a][n],
                r = (15 & e) / 16,
                i = ((e >> 4) & 15) / 16,
                l = ((e >> 8) & 15) / 16;
              t ? f.push([0.5 * l, 0.5 * i, 0.5 * r]) : f.push([l, i, r]);
            }
        },
      }),
    b = (e) => new Float32Array(e),
    d = Math.PI,
    h = 2 * d,
    m = Math.cos,
    A = Math.sin,
    x = Math.sqrt,
    p = Math.floor,
    g = Math.ceil,
    y = Math.abs,
    E = (e) => {
      const t = Y[e],
        r = q[e];
      return x(t * t + r * r);
    },
    D = canvas,
    _ = D.getContext("webgl", { alpha: !1 }),
    T = _.getExtension("ANGLE_instanced_arrays"),
    w = _.TRIANGLES,
    F = _.FRAMEBUFFER,
    P = _.FLOAT,
    R = _.UNSIGNED_BYTE,
    L = _.RGBA,
    B = _.TEXTURE_2D,
    M = _.COLOR_ATTACHMENT0,
    N = _.COLOR_BUFFER_BIT | _.DEPTH_BUFFER_BIT,
    S = _.ARRAY_BUFFER,
    C = _.STATIC_DRAW,
    I = _.DYNAMIC_DRAW,
    U = _.ONE,
    G = _.ONE_MINUS_SRC_ALPHA,
    z = _.SRC_ALPHA,
    O = (e, t, r) => e.getAttribLocation(t, r),
    V = (e, t, r) => e.getUniformLocation(t, r),
    H = () => _.createBuffer(),
    X = 3e4,
    k = b(3 * X),
    W = b(3 * X),
    Y = b(X),
    q = b(X),
    j = b(X),
    J = b(X);
  let K,
    Q,
    Z,
    $,
    ee,
    te,
    re = 0,
    ae = 0,
    ie = 0,
    ne = 0,
    oe = 0,
    fe = !1,
    le = 1,
    ue = 0,
    ce = !1,
    ve = !1,
    se = 60 * new Date().getTimezoneOffset() * 1e3;
  v.init(42);
  let be = [];
  for (let e = 0; e < 720; ++e) be.push(e);
  let de = be.length;
  for (; 0 !== de;) {
    let e = p(v.r() * de);
    de -= 1;
    let t = be[de];
    (be[de] = be[e]), (be[e] = t);
  }
  v.init(tokenData.hash);
  const he = v.r;
  let me = p(27 * he()),
    Ae = 1;
  he() > 0.95 && (Ae = 2);
  let xe = he() > 0.3,
    pe = 0.99;
  he() > 0.6 && (pe = 1.01);
  let ge = 2 + 2.5 * he(),
    ye = 100,
    Ee = he();
  Ee > 0.9 ? (ye = -1) : Ee > 0.3 && (ye = p(4 * he()) + 3);
  let De = 100;
  (he() > 0.5 || 100 == ye) && (De = p(4 * he()) + 3);
  let _e = 20;
  he() > 0.95 ? (_e = 400) : he() > 0.9 && (_e = -1);
  let Te = he() > 0.7,
    we = !(he() > 0.2 || -1 == ye),
    Fe = 0,
    Pe = he();
  Pe > 0.8 ? (Fe = 1) : Pe > 0.6 ? (Fe = 2) : Pe > 0.5 && (Fe = 3);
  let Re = 0;
  (Pe = he()), Pe > 0.9 ? (Re = 2) : Pe > 0.8 && (Re = 1);
  let Le = he() > 0.95 && ye >= 0,
    Be = 0;
  he() > 0.7 && (Be = he() > 0.333 ? 2 : 1);
  let Me = he() > 0.6 && _e < 30,
    Ne = he() > 0.5,
    Se = he() > 0.3,
    Ce = he() > 0.9,
    Ie = be[parseInt((tokenData.tokenId + "").substr(-4)) % 720],
    Ue = Ie % 60,
    Ge = (Ie - Ue) / 60,
    ze = !1,
    Oe = !1;
  function e() {
    let e = _.createTexture();
    _.bindTexture(B, e),
      _.texImage2D(B, 0, L, ee, te, 0, L, R, null),
      _.texParameteri(B, _.TEXTURE_MIN_FILTER, _.LINEAR),
      _.texParameteri(B, _.TEXTURE_MAG_FILTER, _.LINEAR),
      _.texParameteri(B, _.TEXTURE_WRAP_S, _.CLAMP_TO_EDGE),
      _.texParameteri(B, _.TEXTURE_WRAP_T, _.CLAMP_TO_EDGE);
    let t = _.createFramebuffer();
    return (
      _.bindFramebuffer(F, t), _.framebufferTexture2D(F, M, B, e, 0), [e, t]
    );
  }
  function t(t) {
    (t.width = maxSize),
      (t.height = maxSize);
    const r = maxSize,
      a = maxSize;
    (re = Math.min(r, a)),
      (ae = r),
      (ie = a),
      (ee = r),
      (te = a),
      (t.width === r && t.height === a) || ((t.width = r), (t.height = a)),
      ([K, Q] = e()),
      ([Z, $] = e());
  }
  function r(e, t, r) {
    let a = e.createShader(t);
    return e.shaderSource(a, r), e.compileShader(a), a;
  }
  function a(e, t, r) {
    let a = e.createProgram();
    return e.attachShader(a, t), e.attachShader(a, r), e.linkProgram(a), a;
  }
  console.log("Your minute happens at " + Ge + ":" + Ue),
    (D.style.touchAction = "none"),
    D.addEventListener("pointerdown", (e) => {
      (ne = e.offsetX - 0.5 * ae),
        (oe = 0.5 * ie - e.offsetY),
        he() > 0.5 && (le *= -1),
        (fe = !0);
    }),
    D.addEventListener("pointermove", (e) => {
      !0 === fe &&
        ((ne = e.offsetX - 0.5 * ae), (oe = 0.5 * ie - e.offsetY));
    }),
    window.addEventListener("pointerup", (e) => {
      !0 === fe && (fe = !1);
    }),
    s.init(me, xe, Ae);
  const Ve = _.VERTEX_SHADER,
    He = _.FRAGMENT_SHADER,
    Xe = r(
      _,
      Ve,
      "attribute vec4 ap;attribute vec4 ac;varying vec4 vc;uniform vec2 d;void main(){vc=ac;gl_Position=vec4(ap.x/d.x,ap.y/d.y,ap.zw);}"
    ),
    ke = r(
      _,
      He,
      "precision highp float;uniform vec4 c;uniform bool uu;varying vec4 vc;void main(){if(uu){gl_FragColor=c;}else{gl_FragColor=vec4(vc.xyz,c.w);}}"
    ),
    We = r(
      _,
      Ve,
      "attribute vec4 ap;attribute vec4 ac;attribute vec3 as;varying vec4 vc;uniform vec2 d;void main(){vc=ac;gl_Position=vec4((as.z*ap.x+as.x)/d.x,(as.z*ap.y+as.y)/d.y,ap.zw);}"
    ),
    Ye = r(
      _,
      He,
      "precision highp float;uniform vec4 c;varying vec4 vc;void main(){gl_FragColor=vec4(vc.xyz,c.w);}"
    ),
    qe = r(
      _,
      Ve,
      "attribute vec4 ap;attribute vec2 at;varying vec2 vt;void main(){gl_Position=vec4(ap.xyz,1.0);vt=at;}"
    ),
    je = r(
      _,
      He,
      "precision highp float;varying vec2 vt;uniform sampler2D u;uniform vec2 d;uniform float b;uniform float sc;uniform vec2 r;void main(){float h=d.x;float v=d.y;mat2 m=mat2(r.x,-r.y,r.y,r.x); vec4 s=vec4(0.0);vec2 t=(vt-vec2(0.5))*m*sc+vec2(0.5);s+=texture2D(u,vec2(t.x-4.0*b*h,t.y-4.0*b*v))*0.016216;s+=texture2D(u,vec2(t.x-3.0*b*h,t.y-3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x-2.0*b*h,t.y-2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x-1.0*b*h,t.y-1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x,t.y))*0.227027;s+=texture2D(u,vec2(t.x+1.0*b*h,t.y+1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x+2.0*b*h,t.y+2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x+3.0*b*h,t.y+3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x+4.0*b*h,t.y+4.0*b*v))*0.016216;gl_FragColor=s;}"
    ),
    Je = r(
      _,
      Ve,
      "attribute vec4 ap;attribute vec2 at;varying vec2 v;void main(){gl_Position=vec4(ap.xyz,1.0);v=at;}"
    ),
    Ke = r(
      _,
      He,
      "precision highp float;varying vec2 v;uniform sampler2D t;void main(){vec4 c=texture2D(t,v);gl_FragColor=c;}"
    ),
    Qe = a(_, Xe, ke),
    Ze = a(_, We, Ye),
    $e = a(_, qe, je),
    et = a(_, Je, Ke),
    tt = O(_, Qe, "ap"),
    rt = O(_, Qe, "ac"),
    at = V(_, Qe, "c"),
    it = V(_, Qe, "uu"),
    nt = V(_, Qe, "d"),
    ot = O(_, Ze, "ap"),
    ft = O(_, Ze, "ac"),
    lt = O(_, Ze, "as"),
    ut = V(_, Ze, "c"),
    ct = V(_, Ze, "d"),
    vt = O(_, $e, "ap"),
    st = O(_, $e, "at"),
    bt = V(_, $e, "d"),
    dt = V(_, $e, "b"),
    ht = V(_, $e, "sc"),
    mt = V(_, $e, "r"),
    At = O(_, et, "ap"),
    xt = O(_, et, "at"),
    pt = (H(), H(), H()),
    gt = H(),
    yt = H();
  t(_.canvas);
  let Et = [];
  for (let i = 0; i < 8; ++i) {
    let e = (i / 8) * h,
      t = ((i + 1) / 8) * h;
    Et.push(0, 0, m(e), A(e), m(t), A(t));
  }
  _.bindBuffer(S, pt), _.bufferData(S, b(Et), I);
  const Dt = H();
  _.bindBuffer(S, Dt);
  const _t = b([-1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1]);
  _.bufferData(S, _t, C);
  const Tt = H();
  _.bindBuffer(S, Tt),
    _.bufferData(
      S,
      b([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
      C
    );
  const wt = H();
  _.bindBuffer(S, wt),
    _.bufferData(S, b([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]), C);
  for (let e = 0; e < X; ++e) {
    let t = 0.1 * g(10 * x(he())) * re * 0.4,
      r = he() * h;
    (Y[e] = t * m(r)), (q[e] = t * A(r)), (j[e] = he()), (J[e] = he());
  }
  function n(e, t, r = 1) {
    _.bindFramebuffer(F, $),
      _.viewport(0, 0, ee, te),
      _.clear(N),
      _.useProgram($e),
      _.bindTexture(B, K),
      _.bindBuffer(S, Dt),
      _.vertexAttribPointer(vt, 2, P, !1, 0, 0),
      _.enableVertexAttribArray(st),
      _.bindBuffer(S, wt),
      _.vertexAttribPointer(st, 2, P, !1, 0, 0),
      _.uniform2f(bt, 1 / ae, 0),
      _.uniform1f(dt, e),
      _.uniform1f(ht, r),
      _.uniform2f(mt, t[0], t[1]),
      _.drawArrays(w, 0, 6),
      _.bindFramebuffer(F, Q),
      _.viewport(0, 0, ee, te),
      _.clear(N),
      _.bindTexture(B, Z),
      _.uniform2f(bt, 0, 1 / ie),
      _.drawArrays(w, 0, 6);
  }
  _.bindBuffer(S, gt),
    _.bufferData(S, k, I),
    _.clearColor(0, 0, 0, 1),
    _.clear(N),
    window.addEventListener("resize", function () {
      _.deleteTexture(K),
        _.deleteTexture(Z),
        _.deleteFramebuffer(Q),
        _.deleteFramebuffer($),
        t(_.canvas);
    }),
    window.requestAnimationFrame(function e(t) {
      requestAnimationFrame(e),
        ze
          ? n((3 * re) / 1e3, [0.98, 0.01], pe)
          : Le && ze
            ? n((4 * re) / 1e3, [0.8, 0.1], pe)
            : Le
              ? n((4 * re) / 1e3, [0.9, 0.1], pe)
              : n((3 * re) / 1e3, [1, 0], pe);
      let r = Math.max(re / 350, 1);
      we && (r *= 1.4), ye < 0 && (r *= 1.2);
      let a = t / 1e3,
        i = Date.now();
      i -= se;
      let o = p(i / 1e3),
        f = p(o / 60),
        l = p(f / 60) % 24;
      (f %= 60),
        (ze = f == Ue && l % 12 == Ge),
        (Oe = f == Ue),
        (l = (l % 12) + f / 60);
      let u = 0.5 * d - (l * d) / 6,
        c = 0.5 * d - (f * d) / 30,
        b = o % 60,
        D = (i - 1e3 * o) / 1e3,
        R = Math.pow(D, 1.5),
        L = v.n3(R, o, 0) * ae * 0.4,
        M = v.n3(R, o, 1) * ie * 0.4,
        C =
          (m(a), A(a), (((1 - R) * re * 0.7) / 100) * Math.min(50 * R, 1)),
        O = 0.5 * d - (b / 60) * h,
        V = 1;
      we && (V = 1.3);
      let H = !1;
      if (o > ue) {
        if (
          ((ce = !ce && he() < 0.01),
            (ve = !ce && !ve && he() < 0.1),
            he() > 0.1 || 0 === ue)
        ) {
          H = !0;
          for (let e = 0; e < X; ++e)
            if (e % 2 == o % 2 || 0 === ue || !Ce) {
              let t = g(x(he()) * _e) / _e,
                r = t * re * 0.4 * V,
                a = (he() + b / 60) * h;
              if (
                (Me &&
                  ((t = x(he())),
                    (r = t * re * 0.4 * V),
                    (a = (p(80 * he()) / 80 + b / 60) * h),
                    Ne && ye < 0 && (a += t * d * 0.3)),
                  -1 === _e &&
                  ((t = x(he())),
                    (a = t * d * 40 + (b / 60) * h),
                    (r = t * re * 0.4 * V)),
                  (2 === Be || (1 === Be && r > 0.2 * re)) && (r += 0.1 * re),
                  0 === ye)
              )
                (Y[e] = r * m(a)), (q[e] = r * A(a));
              else if (-1 === ye) {
                if (
                  ((Y[e] = (he() - 0.5) * ae),
                    (q[e] = (he() - 0.5) * ie),
                    2 === Be)
                )
                  for (; E(e) < 0.1 * re;)
                    (Y[e] = (he() - 0.5) * ae), (q[e] = (he() - 0.5) * ie);
                else if (1 === Be)
                  for (; E(e) < 0.3 * re && E(e) > 0.2 * re;)
                    (Y[e] = (he() - 0.5) * ae), (q[e] = (he() - 0.5) * ie);
                a = Math.atan2(q[e], Y[e]) + h + b / 60;
                let r = m(d / De) / m((a % (h / De)) - d / De);
                (t = (E(e) / re / r) % 1), Ne && (t += a / d);
              } else {
                let i = m(d / ye) / m((a % (h / ye)) - d / ye);
                if ((3 == ye && (i *= 1.2), Se)) {
                  i =
                    (m(d / De) / m((a % (h / De)) - d / De)) * (1 - t) +
                    i * t;
                }
                Ne && (a += t * d),
                  (Y[e] = i * r * m(a + O)),
                  (q[e] = i * r * A(a + O));
              }
              j[e] =
                2 === Re
                  ? (t + (2 * a) / h) % 1
                  : 1 === Re
                    ? ((2 * a) / h) % 1
                    : t % 1;
              let i = 0.9;
              3 == ye && (i = 0.95);
              let n = 0;
              (Te || !xe) && J[e] > i && (n = 0.1);
              let o = s.geti(j[e] + b / 60 + n);
              (k[3 * e] = o[0]),
                (k[3 * e + 1] = o[1]),
                (k[3 * e + 2] = o[2]);
            }
        }
        ue = o;
      }
      let Z = ge;
      ce && (Z = 30), Fe > 0 && ((Z *= 0.5), ce && (Z = 4), (C *= 0.3));
      let $ = m(0.01),
        be = A(0.01);
      for (let e = 0; e < X; ++e) {
        let t = 1,
          i = 1;
        if ((Oe && !ze && (i = -1), ze || Oe)) {
          let t = 0.9;
          3 == ye && (t = 0.95);
          let r = 0;
          (Te || !xe) && J[e] > t && (r = 0.1);
          let a = s.geti(1 - 0.5 * D * i + j[e] + b / 60 + r);
          (k[3 * e] = 1.2 * a[0]),
            (k[3 * e + 1] = 1.2 * a[1]),
            (k[3 * e + 2] = 1.2 * a[2]),
            (Y[e] *= 1.004),
            (q[e] *= 1.004);
        }
        switch (((C *= t), Fe)) {
          case 0:
            let t = C * (0.2 + (2 * E(e)) / re);
            (Y[e] += v.n3((Y[e] / re) * Z, (q[e] / re) * Z, a) * t),
              (q[e] += v.n3((Y[e] / re) * Z, (q[e] / re) * Z, -a) * t);
            break;
          case 1:
            let r = v.n3((Y[e] / re) * Z, (q[e] / re) * Z, 0.5 * a) * h * 2;
            (Y[e] += m(r) * C), (q[e] += A(r) * C);
            break;
          case 2:
            let i = v.n3((Y[e] / re) * Z, (q[e] / re) * Z, a) * h;
            (i = p(((i + h) / d) * 2) * d * 0.5),
              (Y[e] += m(i) * C),
              (q[e] += A(i) * C);
            break;
          case 3:
            let n = v.n3((Z * E(e)) / re, a, j[e]) * h;
            (Y[e] += m(n) * C), (q[e] += A(n) * C);
        }
        ce &&
          ((Y[e] = 1.02 * (Y[e] * $ + q[e] * be)),
            (q[e] = 1.02 * (-Y[e] * be + q[e] * $)));
        let n = Math.atan2(q[e], Y[e]),
          o = n - u;
        o > d && (o -= h), o < -d && (o += h);
        let f = n - c;
        f > d && (f -= h), f < -d && (f += h);
        let l = y(f) / 0.18,
          g = r,
          _ = E(e),
          T = 250;
        xe && (T = 150);
        let w = 1,
          F = 1;
        if ((xe && ((F = 0.6), (w = 0.6)), l < 1)) {
          let t = _ * m(c),
            r = _ * A(c),
            a = (T / re) * (1 - l);
          (Y[e] += (t - Y[e]) * a),
            (q[e] += (r - q[e]) * a),
            (Y[e] *= 1.01),
            (q[e] *= 1.01),
            (g *= 1 + F * (1 - l));
        }
        let P = y(o) / 0.18;
        if (P < 1) {
          let t = _ * m(u),
            r = _ * A(u),
            a = (T / re) * (1 - P);
          (Y[e] += (t - Y[e]) * a),
            (q[e] += (r - q[e]) * a),
            (Y[e] *= 0.99),
            (q[e] *= 0.99),
            (g *= 1 + w * (1 - P));
        }
        if (fe) {
          let r = ne - Y[e],
            a = oe - q[e],
            i = x(r * r + a * a),
            n = ((5e-4 * re * re) / (i * i)) * le * t;
          i / re > 0.02 && ((Y[e] += r * n), (q[e] += a * n));
        }
        if (ve || ze) {
          let r = L - Y[e],
            a = M - q[e],
            i = x(r * r + a * a),
            n = ((5e-4 * re * re) / (i * i)) * t;
          i / re > 0.02 && ((Y[e] += r * n), (q[e] += a * n));
        }
        if (ze) {
          let r = -L - Y[e],
            a = -M - q[e],
            i = x(r * r + a * a),
            n = ((5e-4 * re * re) / (i * i)) * t;
          i / re > 0.02 && ((Y[e] += r * n), (q[e] += a * n));
        }
        2 == Be &&
          -1 != ye &&
          ((Y[e] *= 1 - 0.005 * (1 - R)), (q[e] *= 1 - 0.005 * (1 - R)));
        let B = 0.9;
        3 === ye && (B = 0.95),
          (W[3 * e] = Y[e]),
          (W[3 * e + 1] = q[e]),
          Te && J[e] > B
            ? (W[3 * e + 2] = Math.min(3 * g, 3 * r))
            : (W[3 * e + 2] = g);
      }
      (H = H || ze || Oe),
        _.bindFramebuffer(F, Q),
        _.viewport(0, 0, ee, te),
        _.useProgram(Qe),
        _.enable(_.BLEND),
        _.blendFuncSeparate(z, G, U, G);
      let de = 0.151;
      ce && (de = 0.021),
        Le && xe && (de = 0.545),
        (ye > 2 || xe) && (de = 0.2),
        ze && (de *= 0.5),
        _.uniform4f(at, 0, 0, 0, de),
        _.uniform2f(nt, 1, 1),
        _.uniform1f(it, 1),
        _.enableVertexAttribArray(tt),
        _.bindBuffer(S, Dt),
        _.vertexAttribPointer(tt, 2, P, !1, 0, 0),
        _.enableVertexAttribArray(rt),
        _.bindBuffer(S, Tt),
        _.vertexAttribPointer(rt, 3, P, !1, 0, 0),
        _.drawArrays(w, 0, 6);
      let me = 0.2;
      we && (me = 0.15),
        -1 == ye && (me = 0.3),
        Le && xe && (me -= 0.02),
        xe
          ? _.blendFuncSeparate(z, U, U, U)
          : (_.blendFuncSeparate(z, G, U, G), (me = 0.5)),
        _.useProgram(Ze),
        _.enable(_.BLEND),
        _.bindBuffer(S, pt),
        _.enableVertexAttribArray(ot),
        _.vertexAttribPointer(ot, 2, P, !1, 0, 0),
        _.bindBuffer(S, gt),
        H && _.bufferData(S, k, I),
        _.enableVertexAttribArray(ft),
        _.vertexAttribPointer(ft, 3, P, !1, 0, 0),
        T.vertexAttribDivisorANGLE(ft, 1),
        _.bindBuffer(S, yt),
        _.bufferData(S, W, I),
        _.enableVertexAttribArray(lt),
        _.vertexAttribPointer(lt, 3, P, !1, 0, 0),
        T.vertexAttribDivisorANGLE(lt, 1),
        _.uniform4f(ut, 1, 1, 1, me),
        _.uniform2f(ct, ae / 2, ie / 2),
        T.drawArraysInstancedANGLE(w, 0, 24, X),
        T.vertexAttribDivisorANGLE(ft, 0),
        T.vertexAttribDivisorANGLE(lt, 0),
        _.blendFuncSeparate(z, G, U, G),
        _.bindFramebuffer(F, null),
        _.viewport(0, 0, _.canvas.width, _.canvas.height),
        _.clear(N),
        _.useProgram(et),
        _.bindTexture(B, K),
        _.enableVertexAttribArray(At),
        _.bindBuffer(S, Dt),
        _.vertexAttribPointer(At, 2, P, !1, 0, 0),
        _.enableVertexAttribArray(xt),
        _.bindBuffer(S, wt),
        _.vertexAttribPointer(xt, 2, P, !1, 0, 0),
        _.drawArrays(w, 0, 6);
    });
  let o, f;

}

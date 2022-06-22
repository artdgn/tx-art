import { urlParamTxHash } from '../util.js'

let maxSize = 400;

const tokenData = { hash: urlParamTxHash() };

export function drawObicera({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;

  // create a canvas child
  const sketchDiv = document.getElementById(sketchId);
  const canvas = document.createElement('canvas', { "width": maxSize, "height": maxSize });
  sketchDiv.appendChild(canvas);

  // let T;
  const b = (e) => new Float32Array(e),
    p = 2 * Math.PI,
    A = Math.cos,
    g = Math.sin,
    x = Math.pow,
    d = Math.sqrt,
    m = Math.floor,
    E = (Math.ceil, Math.abs),
    y = Math.min,
    _ = Math.max,
    D = {
      init(e) {
        this.r = this.alea(e);
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
    },
    T =
      ((h = [
        [0, 4095],
        [257, 1656, 3020, 3004, 3822, 3943],
        [4090, 3800, 3988, 3921, 2, 20],
        [785, 1552, 4090, 2624, 3459, 4090, 120],
        [273, 875, 410, 1692, 4037, 2269, 2798],
        [1589, 3977, 3021, 89, 36],
        [3838, 3021, 2220, 1675, 1145, 600, 54, 2],
        [3171, 2131, 3478, 4023, 4093, 2455, 546, 308, 18],
        [3021, 682, 120, 86, 2236, 4044, 3805, 3993, 4074, 4025, 546],
        [1739, 1417, 1914, 3942, 4042, 4076],
        [4078, 2988, 70, 154, 2543, 3567, 138, 4060],
        [2149, 3685, 3990, 4041, 3547, 3566],
        [4059, 3481, 2425, 1111, 563, 2748],
        [512, 1794, 3141, 3957, 3989, 3635],
        [1366, 2234, 3053, 4095, 4059, 4012],
        [820, 3476, 3956, 4073, 3837, 167],
        [19, 1110, 2218, 2505, 3290, 3943],
        [18, 375, 1688, 4041, 3619],
        [1722, 2779, 3836, 3978, 1109],
        [2633, 3434, 3754, 4075, 3309, 2558],
        [3685, 4091, 2507, 1450, 3822, 530, 1604],
        [0, 291, 4001, 3822, 4095, 869, 1465],
        [3654, 4054, 218, 395, 52],
        [3994, 3976, 514, 3419, 4015, 1338, 514, 787, 3766],
        [532, 1593, 4093, 2396, 3439, 2030],
      ]),
        (c = []),
      {
        geti: function (e) {
          e < 0 && (e *= -1), (e %= 1);
          let t = c.length,
            r = m(t * e),
            a = (r + 1) % t,
            i = t * e - r,
            n = c[r],
            u = c[a],
            o = 1 - i;
          return [
            u[0] * i + o * n[0],
            u[1] * i + o * n[1],
            u[2] * i + o * n[2],
            1,
          ];
        },
        init: function (e) {
          for (var t = 0; t < h[e].length; ++t) {
            let r = h[e][t],
              a = (15 & r) / 16,
              i = ((r >> 4) & 15) / 16,
              n = ((r >> 8) & 15) / 16;
            c.push([n, i, a]);
          }
        },
      }),
    P = canvas.getContext("webgl", { alpha: !1 }),
    R = P.getExtension("ANGLE_instanced_arrays"),
    F = P.TRIANGLES,
    B = P.FRAMEBUFFER,
    w = P.FLOAT,
    L = P.UNSIGNED_BYTE,
    M = P.RGBA,
    N = P.TEXTURE_2D,
    S = P.COLOR_ATTACHMENT0,
    I = P.COLOR_BUFFER_BIT | P.DEPTH_BUFFER_BIT,
    C = P.ARRAY_BUFFER,
    G = P.STATIC_DRAW,
    U = P.DYNAMIC_DRAW,
    O = P.ONE,
    V = P.ONE_MINUS_SRC_ALPHA,
    H = P.SRC_ALPHA,
    X = (e, t, r) => e.getAttribLocation(t, r),
    z = (e, t, r) => e.getUniformLocation(t, r),
    W = () => P.createBuffer();
  let k,
    Y,
    q,
    j,
    J,
    K = [],
    Q = [];
  D.init(42);
  let Z = D.r,
    $ = 23,
    ee = [],
    te = [],
    re = [],
    ae = [],
    ie = [],
    ne = [],
    ue = [];
  for (var e = 0; e < $; ++e)
    for (var t = 0; t < $; ++t) {
      let r = 1;
      11 == e && 11 == t && (r = 0),
        ee.push(e / 23 + 0.5 / 23 + (r * (Z() - 0.5)) / 40),
        te.push(t / 23 + 0.5 / 23 + (r * (Z() - 0.5)) / 40),
        re.push(0.3 + 0.5 * Z()),
        ae.push(Z()),
        ie.push(200),
        ne.push(-1),
        ue.push(e * $ + t);
    }
  for (var r = 0; r < 200; ++r)
    ee.push(0.05 + 0.9 * Z()),
      te.push(0.05 + 0.9 * Z()),
      re.push(0.3 + 0.5 * Z()),
      ae.push(Z()),
      ie.push(200),
      ne.push(-1),
      ue.push($ * $ + r);
  let oe = [],
    fe = 0;
  for (ne[0] = 0, ie[0] = 0; ue.length > 0 && fe < 5e3;) {
    let e = -1,
      t = 300;
    for (r = 0; r < ue.length; ++r) {
      let a = ie[ue[r]];
      a < t && ((t = a), (e = r));
    }
    let a = ue.splice(e, 1)[0];
    for (ne[a], r = 0; r < ue.length; ++r) {
      let e = ue[r],
        t = d(
          (ee[a] - ee[e]) * (ee[a] - ee[e]) +
          (te[a] - te[e]) * (te[a] - te[e])
        );
      t < ie[e] && ((ne[e] = a), (ie[e] = t));
    }
    fe += 1;
  }
  let le = [];
  for (let e = 0; e < 529; ++e) le.push(e);
  let se = le.length;
  for (; 0 !== se;) {
    let e = m(Z() * se);
    se -= 1;
    let t = le[se];
    (le[se] = le[e]), (le[e] = t);
  }
  let ve = le.indexOf(0);
  (le[ve] = le[0]), (le[0] = 0);
  let he = le[tokenData.tokenId % 1e3],
    ce = $ - 1 - m(he / $),
    be = he % $,
    pe = [],
    Ae = [],
    ge = [],
    xe = [],
    de = 0,
    me = [],
    Ee = ee.length;
  for (r = 0; r < Ee; ++r)
    (ee[r] = 46 * ee[r] - (1 + 2 * be)),
      (te[r] = 46 * te[r] - (1 + 2 * ce)),
      E(ee[r]) < 2 &&
      E(te[r]) < 2 &&
      (pe.push(ee[r]),
        Ae.push(te[r]),
        ge.push(re[r]),
        xe.push(ae[r]),
        oe.push([r, ne[r]]),
        me.push(de),
        de++);
  for (r = 0; r < Ee; ++r)
    E(ee[r]) < 3 &&
      E(te[r]) < 3 &&
      (E(ee[r]) >= 2 || E(te[r]) >= 2) &&
      (pe.push(ee[r]),
        Ae.push(te[r]),
        ge.push(re[r]),
        xe.push(ae[r]),
        oe.push([r, ne[r]]));
  me.sort(function (e, t) {
    let r = pe[e] * pe[e] + Ae[e] * Ae[e],
      a = pe[t] * pe[t] + Ae[t] * Ae[t];
    return r < a ? -1 : r > a ? 1 : 0;
  }),
    D.init(tokenData.hash),
    (Z = D.r);
  let ye = Z() > 0.5,
    _e = Z() > 0.6,
    De = Z() > 0.6,
    Te = Z() > 0.4,
    Pe = !Te && Z() > 0.8,
    Re = !Te && !Pe && Z() > 0.9,
    Fe = Z() > 0.98,
    Be = !Fe && Z() > 0.4,
    we = !Fe && Z() > 0.8,
    Le = Z() > 0.3,
    Me = Z() > 0.5,
    Ne = Z() > 0.05,
    Se = 0.1 + 0.1 * Z();
  Z() < 0.3 && (Se = 0);
  let Ie = 0.05 + 0.05 * Z(),
    Ce = 0,
    Ge = 1;
  Te && ((Ce = 1), (Ge = 0)),
    Pe && ((Ce = 2), (Ge = 2)),
    Re && ((Ce = 5 + m(5 * Z())), (Ge = 0.2)),
    Fe && ((Ce = 1), (Ge = -2));
  let Ue = 0;
  if (be > 0 && be < 22 && ce > 0 && ce < 22) {
    let e = m((be - 1) / 3),
      t = m((ce - 1) / 3);
    Ue =
      3 == e && 3 == t
        ? 0
        : ((m((be - 1) / 3) + 7 * m((ce - 1) / 3)) % 24) + 1;
  }
  T.init(Ue);
  let Oe = Z();
  function a() {
    let e = P.createTexture();
    P.bindTexture(N, e),
      P.texImage2D(N, 0, M, J, J, 0, M, L, null),
      P.texParameteri(N, P.TEXTURE_MIN_FILTER, P.LINEAR),
      P.texParameteri(N, P.TEXTURE_MAG_FILTER, P.LINEAR),
      P.texParameteri(N, P.TEXTURE_WRAP_S, P.CLAMP_TO_EDGE),
      P.texParameteri(N, P.TEXTURE_WRAP_T, P.CLAMP_TO_EDGE);
    let t = P.createFramebuffer();
    return (
      P.bindFramebuffer(B, t), P.framebufferTexture2D(B, S, N, e, 0), [e, t]
    );
  }
  function i(e, t, r) {
    let a = e.createShader(t);
    return e.shaderSource(a, r), e.compileShader(a), a;
  }
  function n(e, t, r) {
    let a = e.createProgram();
    return e.attachShader(a, t), e.attachShader(a, r), e.linkProgram(a), a;
  }
  function u() {
    P.enable(P.BLEND),
      P.blendFuncSeparate(H, V, O, V),
      P.useProgram(Je),
      P.bindBuffer(C, bt),
      P.bufferData(C, Rt, U),
      P.bindBuffer(C, pt),
      P.bufferData(C, Pt, U),
      P.bindBuffer(C, ct),
      P.enableVertexAttribArray($e),
      P.vertexAttribPointer($e, 2, w, !1, 0, 0),
      P.bindBuffer(C, bt),
      P.enableVertexAttribArray(et),
      P.vertexAttribPointer(et, 4, w, !1, 0, 0),
      R.vertexAttribDivisorANGLE(et, 1),
      P.bindBuffer(C, pt),
      P.enableVertexAttribArray(tt),
      P.vertexAttribPointer(tt, 3, w, !1, 0, 0),
      R.vertexAttribDivisorANGLE(tt, 1),
      R.drawArraysInstancedANGLE(F, 0, xt, yt),
      R.vertexAttribDivisorANGLE(et, 0),
      R.vertexAttribDivisorANGLE(tt, 0);
  }
  function o(e, t = 1) {
    P.bindFramebuffer(B, j),
      P.viewport(0, 0, J, J),
      P.clear(I),
      P.useProgram(Ke),
      P.bindTexture(N, k),
      P.bindBuffer(C, dt),
      P.vertexAttribPointer(rt, 2, w, !1, 0, 0),
      P.enableVertexAttribArray(rt),
      P.enableVertexAttribArray(at),
      P.bindBuffer(C, Et),
      P.vertexAttribPointer(at, 2, w, !1, 0, 0),
      P.uniform2f(it, 1 / At, 0),
      P.uniform1f(nt, e),
      P.uniform1f(ut, t),
      P.drawArrays(F, 0, 6),
      P.bindFramebuffer(B, Y),
      P.viewport(0, 0, J, J),
      P.clear(I),
      P.bindTexture(N, q),
      P.uniform2f(it, 0, 1 / At),
      P.drawArrays(F, 0, 6);
  }
  Z();
  const Ve = P.VERTEX_SHADER,
    He = P.FRAGMENT_SHADER,
    Xe = i(
      P,
      Ve,
      "attribute vec4 ap;attribute vec4 ac;attribute vec3 as;varying vec4 vc;void main(){vc=ac;gl_Position=vec4(as.z*ap.x+as.x,as.z*ap.y+as.y,ap.zw);}"
    ),
    ze = i(
      P,
      He,
      "precision highp float;varying vec4 vc;void main(){gl_FragColor=vc;}"
    ),
    We = i(
      P,
      Ve,
      "attribute vec4 ap;attribute vec2 at;varying vec2 vt;void main(){gl_Position=vec4(ap.xyz,1.0);vt=at;}"
    ),
    ke = i(
      P,
      He,
      "precision highp float;varying vec2 vt;uniform sampler2D u;uniform vec2 d;uniform float b;uniform float sc;void main(){float h=d.x;float v=d.y;vec4 s=vec4(0.0);vec2 t=(vt-vec2(0.5))*sc+vec2(0.5);s+=texture2D(u,vec2(t.x-4.0*b*h,t.y-4.0*b*v))*0.016216;s+=texture2D(u,vec2(t.x-3.0*b*h,t.y-3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x-2.0*b*h,t.y-2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x-1.0*b*h,t.y-1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x,t.y))*0.227027;s+=texture2D(u,vec2(t.x+1.0*b*h,t.y+1.0*b*v))*0.194594;s+=texture2D(u,vec2(t.x+2.0*b*h,t.y+2.0*b*v))*0.121621;s+=texture2D(u,vec2(t.x+3.0*b*h,t.y+3.0*b*v))*0.054054;s+=texture2D(u,vec2(t.x+4.0*b*h,t.y+4.0*b*v))*0.016216;gl_FragColor=s;}"
    ),
    Ye = i(
      P,
      Ve,
      "attribute vec4 ap;attribute vec2 at;varying vec2 v;void main(){gl_Position=vec4(ap.xyz,1.0);v=at;}"
    ),
    qe = i(
      P,
      He,
      "precision highp float;varying vec2 v;uniform sampler2D t;void main(){vec4 c=texture2D(t,v);gl_FragColor=c;}"
    ),
    je = i(
      P,
      He,
      "precision highp float;varying vec2 v;uniform vec4 c0,c1;void main(){gl_FragColor=mix(pow(c0,vec4(1.1)),pow(c1,vec4(0.9)),v.y);}"
    ),
    Je = n(P, Xe, ze),
    Ke = n(P, We, ke),
    Qe = n(P, Ye, qe),
    Ze = n(P, Ye, je),
    $e = X(P, Je, "ap"),
    et = X(P, Je, "ac"),
    tt = X(P, Je, "as"),
    rt = X(P, Ke, "ap"),
    at = X(P, Ke, "at"),
    it = z(P, Ke, "d"),
    nt = z(P, Ke, "b"),
    ut = z(P, Ke, "sc"),
    ot = X(P, Qe, "ap"),
    ft = X(P, Qe, "at"),
    lt = X(P, Ze, "ap"),
    st = X(P, Ze, "at"),
    vt = z(P, Ze, "c0"),
    ht = z(P, Ze, "c1"),
    ct = W(),
    bt = W(),
    pt = W();
  let At = y(window.innerWidth, maxSize);
  (J = 2 * At),
    (P.canvas.width = At),
    (P.canvas.height = At),
    ([k, Y] = a()),
    ([q, j] = a());
  let gt = [],
    xt = 180;
  if (Ne)
    for (r = 0; r < 60; ++r) {
      let e = (r / 60) * p,
        t = ((r + 1) / 60) * p;
      gt.push(0, 0, A(e), g(e), A(t), g(t));
    }
  else
    for (xt = 360, r = 0; r < 60; ++r) {
      let e = (r / 60) * p,
        t = ((r + 1) / 60) * p;
      gt.push(
        A(e),
        g(e),
        A(t),
        g(t),
        0.8 * A(t),
        0.8 * g(t),
        0.8 * A(t),
        0.8 * g(t),
        A(e),
        g(e),
        0.8 * A(e),
        0.8 * g(e)
      );
    }
  P.bindBuffer(C, ct), P.bufferData(C, b(gt), U);
  const dt = W();
  P.bindBuffer(C, dt);
  const mt = b([-1, -1, -1, 1, 1, -1, 1, 1, -1, 1, 1, -1]);
  P.bufferData(C, mt, G);
  const Et = W();
  P.bindBuffer(C, Et),
    P.bufferData(C, b([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]), G);
  let yt = 0;
  Ue = m(Z());
  let _t = T.geti(Oe),
    Dt = T.geti(Oe + 0.15 + 0.3 * Z()),
    Tt = 1;
  for (
    ye &&
    ((Tt = 0.5),
      (_t[0] *= Tt),
      (_t[1] *= Tt),
      (_t[2] *= Tt),
      (Dt[0] *= Tt),
      (Dt[1] *= Tt),
      (Dt[2] *= Tt)),
    P.clear(I),
    P.bindFramebuffer(B, Y),
    P.viewport(0, 0, J, J),
    P.useProgram(Ze),
    P.enableVertexAttribArray(lt),
    P.bindBuffer(C, dt),
    P.vertexAttribPointer(lt, 2, w, !1, 0, 0),
    P.enableVertexAttribArray(st),
    P.bindBuffer(C, Et),
    P.vertexAttribPointer(st, 2, w, !1, 0, 0),
    P.uniform4f(ht, _t[0], _t[1], _t[2], 1),
    P.uniform4f(vt, Dt[0], Dt[1], Dt[2], 1),
    P.drawArrays(F, 0, 6),
    Q = [],
    K = [],
    yt = 0,
    r = 0;
    r < 80;
    ++r
  ) {
    Q.push(1.5 * (Z() - 0.5), 1.5 * (Z() - 0.5), 0.1 + 0.1 * Z());
    let e = T.geti(Z());
    K.push(1.2 * e[0], 1.2 * e[1], 1.2 * e[2], 0.2 + 0.04 * Z()), yt++;
  }
  for (r = 0; r < 800; ++r) {
    Q.push(1.7 * Z() - 0.85, 1.7 * Z() - 0.85, 0.1 + 0.1 * Z());
    let e = T.geti(Z());
    K.push(0.8 * e[0], 0.8 * e[1], 0.8 * e[2], 0.04 + 0.04 * Z()), yt++;
  }
  let Pt = b(Q),
    Rt = b(K);
  u();
  for (let e = 0; e < 20; ++e) o((1 * At) / 1e3, 0.999);
  (Q = []), (K = []), (yt = 0);
  let Ft = [],
    Bt = 100;
  for (r = 0; r < Bt * Bt; ++r) Ft.push([]);
  function f(e, t, r, a) {
    let i = oe[a][0],
      n = oe[a][1];
    if (i == n) return 1e4;
    let u = ee[i],
      o = te[i],
      f = ee[n],
      l = te[n],
      s = (e - u) * (f - u) + (t - o) * (l - o);
    (s /= (f - u) * (f - u) + (l - o) * (l - o)), (s = _(0, y(1, s)));
    let v = u + (f - u) * s,
      h = o + (l - o) * s;
    return d((e - v) * (e - v) + (t - h) * (t - h));
  }
  function l(e, t, r) {
    let a = m(((e + 1) / 2) * Bt),
      i = m(((t + 1) / 2) * Bt);
    a >= 0 && a < Bt && i >= 0 && i < Bt && Ft[a * Bt + i].push(r);
  }
  function s(e, t, r, a) {
    if (E(e) > 1 || E(t) > 1) return !1;
    let i = [],
      n = m(((e + 1) / 2) * Bt),
      u = m(((t + 1) / 2) * Bt),
      o = _(0, n - 2),
      f = _(0, u - 2),
      l = y(Bt - 1, n + 2),
      s = y(Bt - 1, u + 2);
    for (var v = o; v <= l; ++v)
      for (var h = f; h <= s; ++h)
        for (var c = 0; c < Ft[v * Bt + h].length; ++c)
          i.push(Ft[v * Bt + h][c]);
    for (c = 0; c < i.length; ++c) {
      let n = i[c];
      if (n != a) {
        let a = Q[3 * n],
          i = Q[3 * n + 1],
          u = Q[3 * n + 2];
        if (d((e - a) * (e - a) + (t - i) * (t - i)) - r - u < 0) return !1;
      }
    }
    return !0;
  }
  let wt = 0.5,
    Lt = Z() * p,
    Mt = 0,
    Nt = 1,
    St = 0,
    It = 0,
    Ct = 0,
    Gt = [];
  for (r = 0; r < de; ++r) Gt.push(Z());
  for (var v = 0; v < 60; ++v) {
    let e = v / 60;
    for (r = 0; r < de; ++r) {
      let t = Gt[r];
      Q.push(pe[r], Ae[r], (0.3 + 0.3 * t) * (1 - e));
      let a = T.geti(t + Oe + e + 0.1 * Z());
      K.push(a[0], a[1], a[2], 0.05 + 0.051 * e), yt++;
    }
  }
  Z();
  let Ut = 0,
    Ot = 0;
  for (; Ot < 1e5;) {
    let e = !1,
      t = !1,
      r = !1,
      a = !0,
      i = 0.01 * Z() + 5e-4,
      n = 0,
      u = !1;
    _e && Z() < 0.2 && (e = !0),
      e && Z() < 0.2 && (t = !0),
      De && Z() < 0.1 && (r = !0),
      r && Z() < 0.2 && (t = !0),
      Me && Z() < 0.3 && (u = !0);
    let o = we || (Be && Z() > 0.8),
      h = [],
      c = !1,
      b = (0.5 + 0.5 * Z()) * i + 1e-4,
      _ = b,
      D = wt,
      P = Z();
    for (; Ut < 0.5 && E(Mt) < 0.5;) {
      let l = _;
      (It = pe[St] + A(Mt + Lt) * (wt + _)),
        (Ct = Ae[St] + g(Mt + Lt) * (wt + _));
      let m = 2 * E(Mt),
        R = s(It, Ct, 1 * l, yt - 1),
        F = 1,
        B = !1;
      for (v = 0; v < oe.length; ++v) F = y(F, f(It, Ct, 0, v));
      F < 0.1 && ((B = Z() > 10 * F), (l *= 0.2 * (1 - 10 * F) + 1));
      let w = 0;
      if (!B) {
        let e = 830;
        for (v = 0; v < de; ++v) {
          let t = d(
            (It - pe[v]) * (It - pe[v]) + (Ct - Ae[v]) * (Ct - Ae[v])
          );
          e = y(e, E(t - ge[v]) / 0.05);
        }
        e < Z() && ((R = !1), (c = !0)), e < 1 && (w = 0.4 * (1 - e));
      }
      (n = ((Mt + Lt) * Ce) / p + w + Oe + Ge * wt + 0.2 * St + Z() * Se),
        0 != Se || Re || (n += 0.2 * P),
        o && (n += 0.1),
        E(wt - 1.5 * ge[St]) / Ie < Z() && (n += 0.5 * Z());
      let L = T.geti(n);
      if (
        (F < 0.1 && (L = T.geti(n + 0.1 * (1 - 10 * F))),
          B &&
          ((L[0] = y(L[0] + 0.1 + 0.5 * (1 - 10 * F), 1)),
            (L[1] = y(L[1] + 0.1 + 0.5 * (1 - 10 * F), 1)),
            (L[2] = y(L[2] + 0.1 + 0.5 * (1 - 10 * F), 1))),
          R)
      ) {
        if (u && !t) {
          let e = T.geti(n + 0.1 + 0.1 * Z());
          (e[3] = 0.05), h.push([It, Ct, 2 * l, e, !1]);
        }
        if (
          (t || h.push([It, Ct, l, L, !0]), (Le && Z() > 0.8) || e || r)
        ) {
          let t = T.geti(Oe + wt + 0.2 + 0.2 * St + 0.1 * Z());
          r && ((t[0] = 0), (t[1] = 0), (t[2] = 0)),
            e &&
            ((t[0] = y(t[0] + 0.4, 1)),
              (t[1] = y(t[1] + 0.4, 1)),
              (t[2] = y(t[2] + 0.4, 1))),
            h.push([It, Ct, 0.5 * l, t, !1]);
        }
        if (((b = _), (_ = (0.5 + 0.5 * Z()) * (1 - m) * i + 1e-4), Fe))
          (wt += 0.8 * l * Nt),
            (Mt += ((2 * l) / wt) * Nt),
            (Ut += 0.1 * l);
        else if (o) (wt += 2 * l), (Ut += 2 * l);
        else {
          let e =
            -(x(b + _, 2) - x(D + _, 2) - x(D + b, 2)) /
            (2 * (D + b) * (D + _));
          (Mt += Nt * Math.acos(e)), (Ut += l * wt);
        }
      } else (a = !1), (Ut = 0.5);
    }
    if (h.length > 2 || c)
      for (v = 0; v < h.length; ++v) {
        let e = h[v][0],
          t = h[v][1],
          r = h[v][2],
          a = h[v][3],
          i = h[v][4];
        Q.push(e, t, r),
          K.push(a[0], a[1], a[2], a[3]),
          i && l(e, t, yt),
          yt++;
      }
    if (
      ((h = []), (Ut = 0), (Mt = 0), Z() > 0.5 && (Nt *= -1), a && de > 1)
    ) {
      let e = St;
      for (; St == e;) St = m(Z() * de);
      (Lt = Math.atan2(Ct - Ae[St], It - pe[St])),
        (wt = d(
          (It - pe[St]) * (It - pe[St]) + (Ct - Ae[St]) * (Ct - Ae[St])
        )),
        v++,
        (E(It) > 1 || E(Ct) > 1) &&
        ((St = m(Z() * de)), (wt = 0.2), (Lt = Z() * p));
    } else
      (St = me[m(x(Z(), 3) * de)]),
        (Lt = Z() * p),
        (wt = Z() * Z() * Z() * Z() * 2.5 * (0.75 + 0.5 * xe[St]));
    Ot++;
  }
  (Pt = b(Q)), (Rt = b(K));
  for (let e = 0; e < 8; ++e) u(), o((0.7 * At) / 1e3, 1);
  u(),
    o((0.1 * At) / 1e3, 1),
    P.bindFramebuffer(B, null),
    P.viewport(0, 0, P.canvas.width, P.canvas.height),
    P.clear(I),
    P.useProgram(Qe),
    P.bindTexture(N, k),
    P.enableVertexAttribArray(ot),
    P.bindBuffer(C, dt),
    P.vertexAttribPointer(ot, 2, w, !1, 0, 0),
    P.enableVertexAttribArray(ft),
    P.bindBuffer(C, Et),
    P.vertexAttribPointer(ft, 2, w, !1, 0, 0),
    P.drawArrays(F, 0, 6);

  var h, c;

}

import { urlParamTxHash } from '../util.js'

let maxSize = 400;

const tokenData = { hash: urlParamTxHash() };

export function drawUtopia({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  // create a canvas child
  const sketchDiv = document.getElementById(sketchId);
  const canvas = document.createElement('canvas', { "width": maxSize, "height": maxSize });
  sketchDiv.appendChild(canvas);

  let e,
    t,
    r,
    l,
    o,
    n,
    s,
    a = (e) => new Float32Array(e),
    i = [],
    c = [],
    f = [],
    y = {},
    d = 0,
    u = 0,
    x = 0,
    h = 0,
    g = !0,
    v = 0,
    m = 60,
    z = 1e7,
    p = (e, t) => {
      let r = document.querySelectorAll(e);
      for (let e of r) for (let r in t) e.style[r] = t[r];
    },
    b = {
      x(e, t) {
        (e[12] += e[0] * t), (e[13] += e[1] * t), (e[14] += e[2] * t);
      },
      y(e, t) {
        (e[12] += e[4] * t), (e[13] += e[5] * t), (e[14] += e[6] * t);
      },
      z(e, t) {
        (e[12] += e[8] * t), (e[13] += e[9] * t), (e[14] += e[10] * t);
      },
      s(e, t) {
        let r = Array.isArray(t),
          l = r ? t[0] : t,
          o = r ? t[1] : l,
          n = r ? t[2] : l;
        (e[0] *= l),
          (e[1] *= l),
          (e[2] *= l),
          (e[3] *= l),
          (e[4] *= o),
          (e[5] *= o),
          (e[6] *= o),
          (e[7] *= o),
          (e[8] *= n),
          (e[9] *= n),
          (e[10] *= n),
          (e[11] *= n);
      },
      rx(e, t) {
        let r = Math.PI * (t / 180),
          l = Math.sin(r),
          o = Math.cos(r),
          n = e[4],
          s = e[5],
          a = e[6],
          i = e[7],
          c = e[8],
          f = e[9],
          y = e[10],
          d = e[11];
        (e[4] = n * o + c * l),
          (e[5] = s * o + f * l),
          (e[6] = a * o + y * l),
          (e[7] = i * o + d * l),
          (e[8] = n * -l + c * o),
          (e[9] = s * -l + f * o),
          (e[10] = a * -l + y * o),
          (e[11] = i * -l + d * o);
      },
      ry(e, t) {
        let r = Math.PI * (t / 180),
          l = Math.sin(r),
          o = Math.cos(r),
          n = e[0],
          s = e[1],
          a = e[2],
          i = e[3],
          c = e[8],
          f = e[9],
          y = e[10],
          d = e[11];
        (e[0] = n * o + c * -l),
          (e[1] = s * o + f * -l),
          (e[2] = a * o + y * -l),
          (e[3] = i * o + d * -l),
          (e[8] = n * l + c * o),
          (e[9] = s * l + f * o),
          (e[10] = a * l + y * o),
          (e[11] = i * l + d * o);
      },
      rz(e, t) {
        let r = Math.PI * (t / 180),
          l = Math.sin(r),
          o = Math.cos(r),
          n = e[0],
          s = e[1],
          a = e[2],
          i = e[3],
          c = e[4],
          f = e[5],
          y = e[6],
          d = e[7];
        (e[0] = n * o + c * l),
          (e[1] = s * o + f * l),
          (e[2] = a * o + y * l),
          (e[3] = i * o + d * l),
          (e[4] = n * -l + c * o),
          (e[5] = s * -l + f * o),
          (e[6] = a * -l + y * o),
          (e[7] = i * -l + d * o);
      },
      b(e, t) {
        this.col(e, t, 18);
      },
      col(e, t, r) {
        e[r] += t > 0 ? t * (1 - e[r]) : t * e[r];
      },
      l(e, t) {
        e[18] = t;
      },
    },
    w = (e, t, r, l) => {
      let o = _(e);
      for (let e in t) b[e](o, t[e]);
      (o[22] = r), i.push(o), (x += l);
    },
    A = (e, t) => w(e, t, 3, 6),
    C = (e, t) => w(e, t, 2, 18),
    F = (e, t) => w(e, t, 1, 36),
    P = (e) => e[19],
    S = (function (e) {
      let t = e;
      return function () {
        return (
          (t ^= t << 13),
          (t ^= t >> 17),
          (t ^= t << 5),
          ((t < 0 ? 1 + ~t : t) % 1e3) / 1e3
        );
      };
    })(parseInt(tokenData.hash.slice(0, 16), 16)),
    E = (e, t = 0) => (
      0 === t && ((t = e), (e = 0)), Math.floor(e + S() * (t - e + 1))
    ),
    M = (e) => e[Math.floor(S() * e.length)],
    R = (e, t) => {
      let r = _(e);
      r[19]++;
      for (let e in t) b[e](r, t[e]);
      return r;
    },
    _ = (e) => [
      e[0],
      e[1],
      e[2],
      e[3],
      e[4],
      e[5],
      e[6],
      e[7],
      e[8],
      e[9],
      e[10],
      e[11],
      e[12],
      e[13],
      e[14],
      e[15],
      e[16],
      e[17],
      e[18],
      e[19],
      e[20],
      e[21],
      e[22],
    ],
    I = (e, t) => {
      (f.length = 0),
        (i.length = 0),
        (x = 0),
        y[e](
          [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
          t
        );
      do {
        let e = f.shift();
        void 0 !== e && e[19] <= z && c[e[21]](e);
      } while (f.length);
    },
    W = (e) => (t, r) => {
      -1 !== (t = R(t, r))[20] && ((t[21] = e), f.push(t));
    },
    B = canvas,
    D = B.getContext("webgl"),
    T = (e) => {
      D.viewport(0, 0, D.drawingBufferWidth, D.drawingBufferHeight),
        D.clearColor(e[0], e[1], e[2], 1),
        D.clear(D.COLOR_BUFFER_BIT | D.DEPTH_BUFFER_BIT);
    },
    k = () => {
      let e = window.devicePixelRatio || 1,
        t = maxSize * 1.6,
        r = maxSize;
        // t = B.offsetWidth,
        // r = B.offsetHeight;
      (t > 2048 || r > 2048) && ((t *= 0.5), (r *= 0.5)),
        (t *= e),
        (r *= e),
        (d = B.width = 0 | t),
        (u = B.height = 0 | r),
        q.proj(m),
        (g = !1),
        H.uRes(d, u);
    },
    N = {
      init() {
        let e = this;
        (e.ec = []),
          (e.pr = -1),
          (e.dx = 0),
          (e.dy = 0),
          (e.x = 0),
          (e.y = 0),
          (e.z = -4),
          (e.xb = 0),
          (e.yb = 0),
          (e.sx = 0),
          (e.sy = 0),
          (e.lt = 0),
          (e.isDown = !1);
        let t = window.addEventListener,
          r = "pointer";
        return (
          t(r + "move", (t) => e.move(t), !1),
          t(r + "down", (t) => e.down(t), !1),
          t(r + "up", (t) => e.up(t), !1),
          t(r + "out", (t) => e.up(t), !1),
          t(r + "leave", (t) => e.up(t), !1),
          t(r + "cancel", (t) => e.up(t), !1),
          t("wheel", (t) => {
            let r = 0.1 + 0.1 * Math.abs(e.z);
            t.deltaY > 0 && e.z < 0.5 && (e.z += r),
              t.deltaY < 0 && e.z > -7 && (e.z -= r);
          }),
          e
        );
      },
      down(e) {
        let t = this;
        t.ec.push(e),
          t.move(e),
          (t.xb = t.x),
          (t.yb = t.y),
          (t.isDown = !(t.ec.length > 1)),
          e.preventDefault();
      },
      up(e) {
        let t = this;
        for (let r = 0; r < t.ec.length; r++)
          if (t.ec[r].pointerId == e.pointerId) {
            t.ec.splice(r, 1);
            break;
          }
        t.ec.length < 2 && (t.pr = -1), (t.isDown = !1);
      },
      move(e) {
        let t = this;
        for (let r = 0; r < t.ec.length; r++)
          if (e.pointerId == t.ec[r].pointerId) {
            t.ec[r] = e;
            break;
          }
        if (2 === t.ec.length) {
          let e = t.ec[0].clientX - t.ec[1].clientX,
            r = t.ec[0].clientY - t.ec[1].clientY,
            l = Math.sqrt(e * e + r * r);
          if (t.pr > 0) {
            let e = 0.1 * (0.1 + 0.1 * Math.abs(t.z));
            l > t.pr
              ? t.z < 0.5 && (t.z += e)
              : l < t.pr && t.z > -7 && (t.z -= e);
          }
          t.pr = l;
        } else
          (t.x = e.clientX),
            (t.y = e.clientY),
            (t.sx = t.x - t.xb),
            (t.sy = t.y - t.yb),
            t.isDown && ((t.dx += 0.2 * t.sx), (t.dy += 0.2 * t.sy)),
            (t.xb = t.x),
            (t.yb = t.y);
      },
    },
    L = (e, t, r) => (e += (t - e) * r),
    U = (e) => (
      e > 87 ? (e = 87) : e < 1.8 * -j.z - 20 && (e = 1.8 * -j.z - 20), e
    ),
    V = () => {
      let e = a(16),
        t = a(16);
      return {
        cx: j.dx,
        cy: j.dy,
        cz: -4,
        sr: S() > 0.95 ? 0.05 : -0.05,
        move() {
          let t = this;
          (j.dy = U(j.dy)),
            (t.cy = U(t.cy)),
            (t.cx = L(t.cx, j.dx, 0.1)),
            (t.cy = L(t.cy, j.dy, 0.1)),
            (t.cz = L(t.cz, j.z, 0.1)),
            j.isDown ? ((t.sr = 0), j.lt++) : ((j.dx += t.sr), (j.lt = 0)),
            e.set([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, t.cz - v, 1]),
            b.rx(e, t.cy),
            b.ry(e, t.cx),
            H.camView(e);
        },
        proj(e) {
          let r = 0.001,
            l = 1e3,
            o = r * Math.tan((e * Math.PI) / 360),
            n = o * (d / u);
          (t[0] = (2 * r) / (n + n)),
            (t[5] = (2 * r) / (o + o)),
            (t[8] = 0),
            (t[9] = 0),
            (t[10] = -(l + r) / (l - r)),
            (t[11] = -1),
            (t[14] = -2 / (l - r)),
            H.camProj(t);
        },
      };
    },
    Y = (e, t, r, l, o, n) => {
      if (null !== r) {
        const e = D.createBuffer();
        D.bindBuffer(D.ARRAY_BUFFER, e),
          D.bufferData(D.ARRAY_BUFFER, r, D.STATIC_DRAW);
      }
      const s = D.getAttribLocation(e, t);
      D.enableVertexAttribArray(s),
        D.vertexAttribPointer(s, l, D.FLOAT, !1, o, n);
    },
    H = ((e, t) => {
      let r = (e, t) => {
        let r = D.createShader(e);
        return D.shaderSource(r, t), D.compileShader(r), r;
      },
        l = D.createProgram(),
        o = r(D.VERTEX_SHADER, e),
        n = r(D.FRAGMENT_SHADER, t);
      D.attachShader(l, o), D.attachShader(l, n), D.linkProgram(l);
      let s = (e, t) => {
        let r = D.getUniformLocation(l, e);
        return {
          35664: (e, t = 0) => {
            !0 === Array.isArray(e) ? D.uniform2fv(r, e) : D.uniform2f(r, e, t);
          },
          35665: (e, t = 0, l = 0) => {
            !0 === Array.isArray(e)
              ? D.uniform3fv(r, e)
              : D.uniform3f(r, e, t, l);
          },
          35676: (e) => {
            D.uniformMatrix4fv(r, !1, e);
          },
          35678: (e) => {
            D.uniform1i(r, e);
          },
          5126: (e) => {
            D.uniform1f(r, e);
          },
        }[t];
      };
      return {
        shader: l,
        setUniforms() {
          D.useProgram(l);
          let e = D.getProgramParameter(l, D.ACTIVE_UNIFORMS);
          for (let t = 0; t < e; t++) {
            let e = D.getActiveUniform(l, t);
            this[e.name] = s(e.name, e.type);
          }
        },
      };
    })(
      "precision highp float;uniform mat4 camProj,camView;attribute vec3 aPos,aNor;attribute float aCol;varying vec4 vPos;varying vec3 vNor;varying float vCol;float ACESFilm(float x){float a=2.51,b=.03,c=2.43,d=.59,e=.14;return (x*(a*x+b))/(x*(c*x+d)+e);}void main() {vPos=camView*vec4(aPos,1.0);gl_Position=camProj*vPos;vNor=normalize(vec3(camView*vec4(aNor,.0)));vCol=(aCol==999.)?900.:ACESFilm(aCol);}",
      "precision highp float;uniform vec3 ulightPos,uambCol,uspecCol,udifCol,uFog,uFogColor;uniform vec2 uRes;uniform float iFrame;float fd=uFog.x,fp=uFog.y,sh=uFog.z;varying vec4 vPos;varying vec3 vNor;varying float vCol;vec3 ld=normalize(ulightPos);float seed;float randomFloat(){seed=sin(seed)*84522.13219145687;return fract(seed);}void main() {vec2 fc = gl_FragCoord.xy;vec2 uv=fc/uRes.xy;float z=gl_FragCoord.z/gl_FragCoord.w,ff=clamp(exp2(-fd*fd*pow(z,fp)),.0,1.);vec3 ed=normalize(-vPos.xyz),rd=reflect(-ld,vNor);float specW=pow(max(dot(rd,ed),.0),sh),diffW=max(dot(vNor,ld),.0);vec3 lightW=uambCol+uspecCol*specW+udifCol*diffW,col=vec3(vCol*lightW);if (vCol>100.){col=vec3(1.,1.,1.);}else{col=mix(uFogColor,col,ff);float d=length(uv-.5);col*=uFogColor*1.5-d*1.2;}seed=iFrame*.003186154+fc.y*17.2986546543+fc.x;gl_FragColor=vec4(col*(.9+randomFloat()*.15),1.);}"
    ),
    j = N.init(),
    q = V(),
    O = () => {
      e = x;
      let t = a(7 * x),
        r = 0.5,
        l = -r,
        o = [
          [l, l, l],
          [l, r, l],
          [r, l, l],
          [r, r, l],
          [r, l, r],
          [r, r, r],
          [l, l, r],
          [l, r, r],
          [l, l, r],
          [l, l, l],
          [r, l, r],
          [r, l, l],
          [l, r, l],
          [l, r, r],
          [r, r, l],
          [r, r, r],
          [l, l, l],
          [l, l, r],
          [l, r, l],
          [l, r, r],
          [r, r, l],
          [r, r, r],
          [r, l, l],
          [r, l, r],
        ],
        n = [
          [l, l, l],
          [0, r, 0],
          [r, l, l],
          [r, l, l],
          [0, r, 0],
          [r, l, r],
          [r, l, r],
          [0, r, 0],
          [l, l, r],
          [l, l, r],
          [0, r, 0],
          [l, l, l],
          [r, l, l],
          [l, l, r],
          [l, l, l],
          [r, l, l],
          [r, l, r],
          [l, l, r],
        ],
        s = [
          [l, 0, l],
          [l, 0, r],
          [r, 0, l],
          [r, 0, r],
        ],
        c = (e, t, r) => {
          let l = t[0] - e[0],
            o = t[1] - e[1],
            n = t[2] - e[2],
            s = r[0] - e[0],
            a = r[1] - e[1],
            i = r[2] - e[2],
            c = o * i - n * a,
            f = n * s - l * i,
            y = l * a - o * s,
            d = Math.sqrt(c * c + f * f + y * y);
          return [c / d, f / d, y / d];
        },
        f = function (e, t) {
          let r = e[0],
            l = e[1],
            o = e[2];
          return [
            r * t[0] + l * t[4] + o * t[8] + t[12],
            r * t[1] + l * t[5] + o * t[9] + t[13],
            r * t[2] + l * t[6] + o * t[10] + t[14],
          ];
        },
        y = 0,
        d = (e, r, l, o, n) => {
          let s = o[18];
          t.set(
            [
              e[0],
              e[1],
              e[2],
              n[0],
              n[1],
              n[2],
              s,
              r[0],
              r[1],
              r[2],
              n[0],
              n[1],
              n[2],
              s,
              l[0],
              l[1],
              l[2],
              n[0],
              n[1],
              n[2],
              s,
            ],
            y
          ),
            (y += 21);
        },
        u = (e, t, r) => {
          let l = f(e[t + 0], r),
            o = f(e[t + 1], r),
            n = f(e[t + 2], r),
            s = f(e[t + 3], r);
          return [l, o, n, s, c(l, o, s)];
        };
      for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (1 === t[22])
          for (let e = 0; e < 24; e += 4) {
            let [r, l, n, s, a] = u(o, e, t);
            d(r, l, s, t, a), d(r, s, n, t, a);
          }
        else if (2 === t[22])
          for (let e = 0; e < 18; e += 3) {
            let r = f(n[e + 0], t),
              l = f(n[e + 1], t),
              o = f(n[e + 2], t);
            d(r, l, o, t, c(r, l, o));
          }
        else if (3 === t[22]) {
          let [e, r, l, o, n] = u(s, 0, t);
          d(e, r, o, t, n), d(e, o, l, t, n);
        }
      }
      Y(H.shader, "aPos", t, 3, 28, 0),
        Y(H.shader, "aNor", null, 3, 28, 12),
        Y(H.shader, "aCol", null, 1, 28, 24);
    },
    X = (t) => {
      requestAnimationFrame(X),
        !0 === g && k(),
        D.viewport(0, 0, d, u),
        q.move(),
        T(Q),
        H.iFrame(h++);
      let r = (x / 200) | 0;
      j.lt > 240
        ? ((e -= r), e < 180 && (e = 180))
        : ((e += r), e > x && (e = x)),
        D.drawArrays(D.TRIANGLES, 0, e),
        D.drawArrays(D.LINES, 0, x);
    },
    G = () => {
      re(),
        H.ulightPos(t),
        H.uspecCol(l),
        H.udifCol(o),
        H.uambCol(r),
        H.uFog(n),
        H.uFogColor(Q),
        I("start", s || {}),
        O(i, re);
    },
    J = (e, t) => {
      c.length = 0;
      for (let e in t) {
        let r = t[e];
        c.push(r), (y[e] = W(c.length - 1));
      }
      G(), k(), (j.dx = q.cx = 90), (j.dy = q.cy = -4), X();
    },
    K = M([
      [[0.85, 0.84, 0.83], 0],
      [[1, 0.9, 0.7], 0],
      [[0.8, 0.9, 0.6], 0],
      [[1.2, 0.8, 0.2], 0],
      [[1.2, 0.8, 0.2], 0],
      [[1, 0.7, 1.1], 0],
      [[0.5, 0.9, 1.3], 0],
      [[0.9, 0.6, 1.4], 0],
      [[0.7, 0.7, 0.7], 1],
      [[0.9, 0.7, 0.5], 1],
      [[0.6, 0.7, 0.9], 1],
      [[0.2, 0.8, 0.4], 1],
      [[0.4, 0.8, 0.8], 1],
      [[0.8, 0.7, 0.6], 1],
      [[0.9, 0.5, 0.9], 1],
      [[1, 0.9, 0.7], 2],
      [[1.4, 0.8, 0.4], 2],
      [[0.7, 0.8, 1], 2],
      [[0.9, 0.85, 0.8], 2],
      [[0.4, 0.39, 0.38], 1],
    ]),
    Q = K[0],
    Z = K[1],
    $ = E(5),
    ee = S() > 0.95 ? 1 : 0,
    te = S() > 0.95 ? 1 : 0,
    re = function () {
      (s = { s: 0.01 }), (v = 2), (z = 400);
      let e = S() > 0.5 ? -3 : 3;
      (t = [e, 1.5, 1]),
        (r = [0, 0, 0]),
        (l = [1.6, 1.6, 1.6]),
        (o = [1.4, 1.4, 1.4]),
        (n = [0.016, 4, 6.2]),
        1 === Z &&
        ((j.dy = 0),
          (t = [e, 0.5, 3 - v]),
          (o = [1, 1, 1]),
          (l = [4.2, 6 * 0.6, 3]),
          (n = [25e-5, 8, 60])),
        2 === Z &&
        ((j.dy = 0),
          (t = [0, 0, 0]),
          (o = [0, 0, 0]),
          (l = [0, 0, 0]),
          (n = [0.015, 4, 40]));
    },
    le = {
      start(e) {
        let t = Z ? 0 : 0.8;
        F(e, { z: -3e3, y: 1200, s: [3e3, 3e3, 3e3], l: t }),
          F(e, { z: 3e3, y: 1200, s: [3e3, 3e3, 3e3], l: t }),
          F(e, { x: -3e3, y: 1200, s: [3e3, 3e3, 3e3], l: t }),
          F(e, { x: 3e3, y: 1200, s: [3e3, 3e3, 3e3], l: t }),
          F(e, { y: -655, s: [3e3, 1e3, 3e3], l: Z ? 2 : 0.8 });
        let r = 0 === $ ? 640 : 3 === $ ? 500 : 600;
        switch (
        (y.cs(e, { x: r, y: -150, rx: -90, s: 900, b: -0.5 }),
          y.cs(e, { x: -r, y: -150, rx: -90, s: 900, b: -0.5 }),
          y.cs(e, { z: r, y: -150, rx: -90, s: 900, b: -0.5 }),
          y.cs(e, { z: -r, y: -150, rx: -90, s: 900, b: -0.5 }),
          5 === $ && (ee = 0),
          $)
        ) {
          case 5:
            y.W(e, { z: -80, x: -80, y: 220, s: [80, 140, 80] }),
              F(e, { s: [20, 3e3, 20], l: 999 });
            break;
          case 4:
            C(e, { x: -75, z: 75, y: 0, s: [150, 400, 150], l: 0.05 }),
              C(e, { x: 75, z: 75, y: 0, s: [150, 400, 150], l: 0.05 }),
              C(e, { x: -75, z: -75, y: 0, s: [150, 400, 150], l: 0.05 }),
              C(e, { x: 75, z: -75, y: 0, s: [150, 400, 150], l: 0.05 }),
              F(e, { x: -75, z: 75, s: [20, 1500, 20], l: 999 }),
              F(e, { x: 75, z: 75, s: [20, 1500, 20], l: 999 }),
              F(e, { x: -75, z: -75, s: [20, 1500, 20], l: 999 }),
              F(e, { x: 75, z: -75, s: [20, 1500, 20], l: 999 });
            break;
          case 3:
            F(
              e,
              Z
                ? { y: 0, s: [100, 300, 100], l: 1 }
                : { y: 0, s: [100, 300, 100], b: -0.75 }
            ),
              F(e, { y: 90, s: [3e3, 20, 20], l: 999 }),
              F(e, { y: 90, s: [20, 20, 3e3], l: 999 });
            break;
          case 2:
            Z
              ? y.B(e, { y: -180, rx: -90, s: 35, l: 0.5 })
              : y.B(e, { y: -180, rx: -90, s: 35, b: -0.75 }),
              F(e, { s: [20, 3e3, 20], l: 999 });
            break;
          case 1:
            C(e, { y: 20, rz: 180, s: [254.54, 200, 254.54], l: 2 }),
              A(e, { y: 120.7, s: [254.54, 0.1, 254.54], l: 999 }),
              A(e, { y: 139.7, rz: 180, s: [254.54, 0.1, 254.54], l: 999 }),
              C(e, { y: 240, s: [254.54, 200, 254.54], l: 2 }),
              F(e, { s: [20, 3e3, 20], l: 999 }),
              y.cs(e, { y: -150, rx: -90, s: 600, b: -0.5 });
            break;
          case 0:
            C(e, { y: -60, s: [509.08, 400, 509.08], l: 2 }),
              F(e, { s: [20, 3e3, 20], l: 999 }),
              te &&
              (y.AS(e, { y: 400, l: 0.2 }),
                y.AS(e, { y: 400, ry: 180, l: 0.2 }));
        }
      },
      W(e) {
        P(e) > 4 ||
          (2 === P(e)
            ? C(e, { x: 1, z: 1, y: -1, s: 2, l: 2 })
            : F(e, { x: 1, z: 1, y: -1, s: 2, l: 0.1 }),
            y.W(e, { x: 1.5, y: -1.5, z: -0.5, s: 0.5 }),
            y.W(e, { x: -0.5, y: -1.5, z: 1.5, s: 0.5 }),
            y.W(e, { x: 1.5, y: -1.5, z: 1.5, s: 0.5 }),
            y.W(e, { x: -0.5, y: -1.5, z: -0.5, s: 0.5 }));
      },
      B(e) {
        P(e) < 12 &&
          (F(e, { z: 0.4, s: [6, 12, 0.3] }),
            y.B(e, { s: [0.8, 0.9, 1.4], rz: 90 }));
      },
      AS(e) {
        let t = 2.12 * S();
        if (t <= 1) {
          if (
            (F(e),
              S() > 0.5 &&
              (F(e, { y: -0.2, s: [0.5, 0.25, 1.1], l: Z ? 999 : 0 }),
                F(e, { y: 0.2, s: [0.5, 0.25, 1.1], l: Z ? 999 : 0 })),
              P(e) > 120)
          )
            return;
          y.AS(e, { x: 1.1, ry: 6, rx: 5 });
        } else if (t <= 2) {
          if ((F(e), P(e) > 120)) return;
          y.AS(e, { x: 1.1, ry: -5, rx: 5 });
        } else if (t <= 2.06) {
          if ((F(e), P(e) > 100)) return;
          y.AS(e, { x: 1.1, ry: 80 }), y.AS(e, { x: 1.1, ry: -80, s: 0.5 });
        } else
          F(e),
            y.AS(e, { x: 1.1, rx: 80 }),
            y.AS(e, { x: 1.1, rx: -80, s: 2.5 });
      },
      cs(e) {
        S() > 0.5
          ? P(e) < 7 &&
          (y.cs(e, { x: -0.25, y: 0.25, s: [0.5, 0.5, 0.75], rz: 180 }),
            y.cs(e, { x: 0.25, y: -0.25, s: [0.5, 0.5, 1] }),
            y.cs(e, { x: -0.25, y: -0.25, s: [0.5, 0.5, 1], rz: 90 }),
            y.tw(e))
          : P(e) < 8 &&
          (y.cs(e, { x: -0.25, y: 0.25, s: [0.5, 0.5, 1] }),
            y.cs(e, { x: 0.25, y: -0.25, s: [0.5, 0.5, 0.75], rz: 90 }),
            y.cs(e, { x: -0.25, y: -0.25, s: [0.5, 0.5, 1], rz: 90 }),
            y.tw(e));
      },
      tw(e) {
        if (4.5 * S() <= 4) {
          let t = 0.8 + 0.22 * S();
          y.tw(e, { z: 0.01, rz: 3, s: [t, t, 1] }), y.b(e, { b: -0.5 });
        } else
          ee &&
            !te &&
            F(e, { x: 0.25, y: 0.25, z: 0.6, s: [0.45, 0.45, 0.01], l: 0.5 });
      },
      b(e) {
        F(e, { x: 0.25, y: 0.25, s: [0.45, 0.45, 0.01] }),
          1 !== Z ||
          te ||
          (S() > 0.5 &&
            F(e, { x: 0.25, y: 0.25, s: [0.47, 0.47, 0.001], l: 999 }));
      },
    };
  S(),
    D.enable(D.DEPTH_TEST),
    D.enable(D.CULL_FACE),
    // p("html,body", {
    //   overflow: "hidden",
    //   position: "absolute",
    //   margin: 0,
    //   padding: 0,
    //   width: "100%",
    //   height: "100%",
    //   background: "#000",
    // }),
    // p("canvas", {
    //   position: "absolute",
    //   padding: 0,
    //   margin: 0,
    //   left: 0,
    //   top: 0,
    //   width: "100%",
    //   height: "100%",
    //   cursor: "pointer",
    //   touchAction: "none",
    //   userSelect: "none",
    // }),
    // window.addEventListener("resize", () => {
    //   g = !0;
    // }),
    H.setUniforms(),
    J(re, le),
    (window.onkeypress = function (e) {
      e.preventDefault(), 32 === e.keyCode && (q.sr = -0.05);
    });
  
}

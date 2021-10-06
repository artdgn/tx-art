const maxSize = 500;

export function skultpuurDraw(sketch) {
  let tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

  // create a canvas child
  const sketchDiv = document.getElementById("p5sketch");
  const canvas = document.createElement('canvas');
  sketchDiv.appendChild(canvas);

  let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
  let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z;
  let min, max;
  let ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, ca, cb, cd, ce, cf, cg, ch, ci, cj, ck, cl, cm, cn, co, cp, cq, cr, cs, ct, cu, cv, cw, cx, cy, cz, da, db, dc, de, df, dg, dh, di, dj, dk, dl, dm, dn, dp, dq, dr, ds, dt, du, dv, dw, dx, dy, dz, ea, eb, ec, ed, ef, eg, eh, ei, ej, ek, el, em, en, eo, ep, eq, er, es, et, eu, ev, ew, ex, ey, ez, fa, fb, fc, fd, fe, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, fq, fr, fs, ft, fu, fv, fw, fx, fy, fz, ga, gb, gd, ge, gf, gh, gi, gj, gk, gl, gm, gn, go, gp, gq, gr, gs, gt, gu, gv, gw, gx, gy, gz, ha, hb, hc, hd, he, hf, hg, hi, hj, hk, hl, hm, hn, ho, hp, hq, hr, hs, ht, hu, hv, hw, hx, hy, hz, ia, ib, ic, id, ie, ig, ih, ij, ik, il, im, io, ip, iq, ir, is, it, iu, iv, iw, ix, iy, iz, ja, jb, jc, jd, je, jf, jg, jh, ji, jk, jl, jm, jn, jo, jp, jq, jr, js, jt, ju, jv, jw, jx, jy, jz, ka, kb, kc, kd, ke, kf, kg, kh, ki, kj, kl, km, kn, ko, kp, kq, kr, ks, kt, ku, kv, kw, kx, ky, kz, la, lb, lc, ld, le, lf, lg, lh, li, lj, lk, lm, ln, lo, lp, lq, lr, ls, lt, lu, lv, lw, lx, ly, lz, ma, mb, mc, md, me, mf, mg, mh, mi, mj, mk, ml, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nb, nc, nd, ne, nf, ng, nh, ni, nj, nk, nl, nm, no, np, nq, nr, ns, nt, nu, nv, nw, nx, ny, nz, oa, ob, oc, od, oe, of, og, oh, oi, oj, ok, ol, om, on, op, oq, or, os, ot, ou, ov, ow, ox, oy, oz, pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pq, pr, ps, pt, pu, pv, pw, px, py, pz, qa, qb, qc, qd, qe, qf, qg, qh, qi, qj, qk, ql, qm, qn, qo, qp, qr, qt, qu, qv, qw, qx, qy, qz, ra, rb, rc, rd, re, rf, rg, rh, ri, rj, rk, rl, rm, rn, ro, rp, rq, rs, rt, ru, rv, rw, rx, ry, rz, sa, sb, sc, sd, se, sf, sg, sh, si, sj, sk, sl, sm, sn, so, sp, sq, sr, st, su, sv, sw, sx, sy, sz, ta, tb, tc, td, te, tf, tg, th, ti, tj, tk, tl, tm, tn, to, tp, tq, tr, ts, tu, tv, tw, tx, ty, tz, ua, ub, uc, ud, ue, uf, ug, uh, ui, uj, uk, ul, um, un, uo, up, uq, ur, us, ut, uv, uw, ux, uy, uz, va, vb, vc, vd, ve, vf, vg, vh, vi, vj, vk, vl, vm, vn, vo, vp, vq, vr, vs, vt, vu, vw, vx, vy, vz, wa, wb, wc, wd, we, wf, wg, wh, wi, wj, wk, wl, wm, wn, wo, wp, wq, wr, ws, wt, wu, wv, wx, wy, wz, xa, xb, xc, xd, xe, xf, xg, xh, xi, xj, xk, xl, xm, xn, xo, xp, xq, xr, xs, xt, xu, xv, xw, xy, xz, ya, yb, yc, yd, ye, yf, yg, yh, yi, yj, yk, yl, ym, yn, yo, yp, yq, yr, ys, yt, yu, yv, yw, yx, yz, za, zb, zc, zd, ze, zf, zg, zh, zi, zj, zk, zl, zm, zn, zo, zp, zq, zr, zs, zt, zu, zv, zw, zx, zy;
  let AB, AC, AD, AE, AF, AG, AH, AI, AJ, AK, AL, AM, AN, AO, AP, AQ, AR, AS, AT, AU, AV, AW, AX, AY, AZ, BA, BC, BD, BE, BF, BG, BH, BI, BJ, BK, BL, BM, BN, BO, BP, BQ, BR, BS, BT, BU, BV, BW, BX, BY, BZ, CA, CB, CD, CE, CF, CG, CH, CI, CJ, CK, CL, CM, CN, CO, CP, CQ, CR, CS, CT, CU, CV, CW, CX, CY, CZ, DA, DB, DC, DE, DF, DG, DH, DI, DJ, DK, DL, DM, DN, DO, DP, DQ, DR, DS, DT, DU, DV, DW, DX, DY, DZ, EA, EB, EC, ED, EF, EG, EH, EI, EJ, EK, EL, EM, EN, EO, EP, EQ, ER, ES, ET, EU, EV, EW, EX, EY, EZ, FA, FB, FC, FD, FE, FG, FH, FI, FJ, FK, FL, FM, FN, FO, FP, FQ, FR, FS, FT, FU, FV, FW, FX, FY, FZ, GA, GB, GC, GD, GE, GF, GH, GI, GJ, GK, GL, GM, GN, GO, GP, GQ, GR, GS, GT, GU, GV, GW, GX, GY, GZ, HA, HB, HC, HD, HE, HF, HG, HI, HJ, HK, HL, HM, HN, HO, HP, HQ, HR, HS, HT, HU, HV, HW, HX, HY, HZ, IA, IB, IC, ID, IE, IF, IG, IH, IJ, IK, IL, IM, IN, IO, IP, IQ, IR, IS, IT, IU, IV, IW, IX, IY, IZ, JA, JB, JC, JD, JE, JF, JG, JH, JI, JK, JL, JM, JN, JO, JP, JQ, JR, JS, JT, JU, JV, JW, JX, JY, JZ, KA, KB, KC, KD, KE, KF, KG, KH, KI, KJ, KL, KM, KN, KO, KP, KQ, KR, KS, KT, KU, KV, KW, KX, KY, KZ, LA, LB, LC, LD, LE, LF, LG, LH, LI, LJ, LK, LM, LN, LO, LP, LQ, LR, LS, LT, LU, LV, LW, LX, LY, LZ, MA, MB, MC, MD, ME, MF, MG, MH, MI, MJ, MK, ML, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NB, NC, ND, NE, NF, NG, NH, NI, NJ, NK, NL, NM, NO, NP, NQ, NR, NS, NT, NU, NV, NW, NX, NY, NZ, OA, OB, OC, OD, OE, OF, OG, OH, OI, OJ, OK, OL, OM, ON, OP, OQ, OR, OS, OT, OU, OV, OW, OX, OY, OZ, PA, PB, PC, PD, PE, PF, PG, PH, PI, PJ, PK, PL, PM, PN, PO, PQ, PR, PS, PT, PU, PV, PW, PX, PY, PZ, QA, QB, QC, QD, QE, QF, QG, QH, QI, QJ, QK, QL, QM, QN, QO, QP, QR, QS, QT, QU, QV, QW, QX, QY, QZ, RA, RB, RC, RD, RE, RF, RG, RH, RI, RJ, RK, RL, RM, RN, RO, RP, RQ, RS, RT, RU, RV, RW, RX, RY, RZ, SA, SB, SC, SD, SE, SF, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SP, SQ, SR, ST, SU, SV, SW, SX, SY, SZ, TA, TB, TC, TD, TE, TF, TG, TH, TI, TJ, TK, TL, TM, TN, TO, TP, TQ, TR, TS, TU, TV, TW, TX, TY, TZ, UA, UB, UC, UD, UE, UF, UG, UH, UI, UJ, UK, UL, UM, UN, UO, UP, UQ, UR, US, UT, UV, UW, UX, UY, UZ, VA, VB, VC, VD, VE, VF, VG, VH, VI, VJ, VK, VL, VM, VN, VO, VP, VQ, VR, VS, VT, VU, VW, VX, VY, VZ, WA, WB, WC, WD, WE, WF, WG, WH, WI, WJ, WK, WL, WM, WN, WO, WP, WQ, WR, WS, WT, WU, WV, WX, WY, WZ, XA, XB, XC, XD, XE, XF, XG, XH, XI, XJ, XK, XL, XM, XN, XO, XP, XQ, XR, XS, XT, XU, XV, XW, XY, XZ, YA, YB, YC, YD, YE, YF, YG, YH, YI, YJ, YK, YL, YM, YN, YO, YP, YQ, YR, YS, YT, YU, YV, YW, YX, YZ, ZA, ZB, ZC, ZD, ZE, ZF, ZG, ZH, ZI, ZJ, ZK, ZL, ZM, ZN, ZO, ZP, ZQ, ZR, ZS, ZT, ZU, ZV, ZW, ZX, ZY;
  let a0, a1, d0, d1, ww, cc, c0, c1;

  S = Uint32Array.from(
    [0, 1, (s = t = 2), 3].map((i) =>
      parseInt(tokenData.hash.substr(i * 8 + 5, 8), 16)
    )
  );
  
  R = (a = 1) =>
    a *
    ((t = S[3]),
      (S[3] = S[2]),
      (S[2] = S[1]),
      (S[1] = s = S[0]),
      (t ^= t << 11),
      (S[0] ^= t ^ (t >>> 8) ^ (s >>> 19)),
      S[0] / 2 ** 32);
  ({ min, max, PI: P } = Math);
  T = P * 2;
  L = (N, f) => [...Array(N)].map((_, i) => f(i));
  O = [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [2, 3],
    [3, 3],
    [2, 4],
    [4, 2],
    [4, 3],
    [3, 4],
    [4, 4],
  ];
  cf = [O.splice(R(12) | 0, 1)[0], O[R(11) | 0]]
    .map((x) => [...x, R(8) | 0, R(3) | 0])
    .sort();
  sh = R(2) | 0;
  a =
    10 /
    max(
      ...cf.reduce(
        ([a, b], [r, c]) => (
          (e = max(r, c, 1.5)), [min(a, c / e), min(b, r / e)]
        ),
        [9, 9]
      )
    );
  J = 99;
  dg = `V q,o;`;
  ig = "";
  cf.map(([r, c, s, h], i) => {
    e = a / max(r, c, 1.5);
    k = ((i * sh - 0.08) * e) / 2;
    J = min(J, r * e - k);
    d = (e * [1, 0.95, 0.85][h]) / 6;
    f = ");min(max(q.x,";
    g = "),0)+L(max(q,0))-";
    n = (a, b) =>
      s < 5
        ? `q=V(L(o.${a})-${d * 2},abs(abs(o.${b})-${e / 4})-${d * 0.7
        },0${f}q.y${g + d * 0.7}`
        : `;L(W(L(o.${a})-${(t = d * 2.3)},o.${b}-M(o.${b},-${[t, t]})))-${d * 0.7
        }`;
    for (
      [D, C] = [
        n("xz", "y"),
        n("yz", "x"),
        n("xy", "z"),
        `;L(o)-${d * 3}`,
        `q=abs(o)-V(${d * 1.7 + f}max(q.y,q.z)${g + d}`,
      ][s % 5].split(";");
      h;
      h--
    )
      C = `abs(${C})-${(h * e) / 40}`;
    dg += `o=p+V(${(f = [
      (c * e) / 2,
      k,
    ])},0);o.xy/=${e};o.xy-=M(floor(o.xy${(t = `)+1e-9,W(0),W(${[
      c,
      r,
    ]})-1)`)}+.5;o.xy*=${e};${D};F b${i}=${C};`;
    ig += `W i${i}=M(floor((o.xy+W(${f}))/${e + t};`;
  });
  N = 2 ** 26;
  SC = 0;
  H = (v) => (SC = (SC * 41475523 + v) & (N - 1)) / N;
  cf.flat().map(H);
  a1 = P / 2 + R(P);
  a0 = a1 + P + R(2) - 1;
  y = 0.05 + R(0.5);
  bh = 0.5 + R();
  d1 = `V(${[0.15 + R(0.85) ** 4, 0.3 + R(0.7) ** 2]},1)*1.3`;
  d0 = `V(1.3,${[0.15 + R(0.3) ** 2, 0.05 + R(0.5) ** 4]})*1.3`;
  ww = `V(1)`;
  sb = 0;
  k = R(36) | 0;
  bi = k < 15 ? 2 : 1;
  k = k < 27 ? (k % 15) * 6 : 15 * k - 315;
  cc = (j) =>
    `V(${L(
      3,
      (i) =>
        (parseInt(
          "zbgrmgigxg4a727tlk114puydiugnt538mrwgysb7jsnz769uwzccfjhgzyxypg853zf4n75nszuleglvzgceglzg8zg4kbpyukpegzzzzg4kbpyukpeg00065abbixtj0gp369nnkkpuypbbeguuu265hbea5219c023ztk3szyn9zpn37beirnszzob000pppeilkd7xpbyoakd7"[
          i + j + k
          ],
          36
        ) /
          36) **
        2
    )})`;
  c0 = cc(0);
  c1 = cc(3);
  if (k > 89) {
    d0 = cc(6);
    d1 = cc(9);
    ww = cc(12);
    sb = 1;
    bi -= k > 209;
  }
  bg = [
    `V b=mix(V(${[4 - R(2), 4, 4 + R(2)]})*${2 ** (-6 - R(3))},V(${[
      7 - R(2),
      7,
      7 + R(2),
    ]})*${2 ** (-3 - R(3))},S(-.4,.5,g.y))`,
    `F y=g.y+.13*w(g*V(3,12,3))+.08*w(g*V(5,19,5));V b=mix(mix(.1*${c1},.7*${c0}+${d0}*16*pow(M(dot(g,N(V(J(${a0}),${bh},cos(${a0}))))*2-1,0,1),24)+${d1}*pow(M(dot(g,N(V(J(${a1}),${R(
      bh
    )},cos(${a1}))))*2-1,0,1),12),${sb ? "P(0,y))" : "M(.8*y+.2,0,1))*(1+y)"
    },${ww},S(.1,.09,abs(y)))`,
    `V b=mix(V(17,7.6,2)*S(1.67,1.69,dot(V(0,${[y, (1 - y * y) ** 0.5]})*${1.75 - y * 0.1
    },g))+mix(${[c0, c1]},S(.7,0,g.y)),V(0),${R() < 0.5
      ? `P(g.y+.1,.6*fract(5555*J(777*floor(g.x*16+${R(T)}+J(g.x*8+${R(
        T
      )})*2))))`
      : `S(.35,.25,g.y+.18*w(g*25)+.12*w(g*40)+${R(0.4) - 0.2})`
    })`,
  ][bi];
  G = R(150) < 1;
  V = (_) => `V(${L(3, (_) => R(T))})`;
  K =
    `#version 300 es` +
    `,S smoothstep,N normalize,L length,M clamp,P step,J sin,V vec3,W vec2,X vec4,F float
`.replace(
      /,/g,
      `
#define `
    );
  v =
    K +
    `precision highp F;in W u;out X c;uniform W r;uniform highp uint I,R;uniform sampler2D j,k;const V H3=V(.55,.67,.82);const F E=.001;`;
  D = document;
  C = D.querySelector("canvas");
  g = C.getContext("webgl2");
  as = 1.2;
  h = min(maxSize, innerWidth / as, innerHeight);
  w = (as * h) | 0;
  h |= 0;
  C.style.width = w + "px";
  C.style.height = h + "px";
  [E, F] = location.hash.substr(1).split(";");
  F ||= ((E = 1), min(devicePixelRatio, 2400 / w));
  C.width = w = (w * F) | 0;
  C.height = h = (h * F) | 0;
  K += `in W a;out W u;uniform uint I;void main(){`;
  O =
    K +
    `const F E=${E}.;F c=fract(F(I)/E/E)*E;F r=floor(c);c-=r;u=(a+W(c*E,r))*2./E` +
    (t = `-1.;gl_Position=X(u,0,1);}`);
  K += `u=a*2.` + t;
  g.getExtension("EXT_color_buffer_float");
  cs = (y, c) => (
    (s = g.createShader(y)), g.shaderSource(s, c), g.compileShader(s), s
  );
  g.bindVertexArray(g.createVertexArray());
  Q = [
    `F ds(V p){W d=W(L(p.xz),abs(p.y+16.25))-W(5.5+3*J(M(.3*p.y,${-T / 4
    },0)),16);return min(max(d.x,d.y),0)+L(max(d,0))-.25;}F w(V p){return dot(J(p+2*J(p.yzx*H3+${V()})+${V()}),J(p.zyx+2*J(p.zxy*H3.yzx+${V()})+${V()}));}F D(V p){${dg}return min(ds(p),.7*(min(-.04,max(b0,b1))+L(max(W(b0,b1)+.04,W(0)))));}const V[] C=V[](V(.2),V(.8),V(.08,.1,.14),V(${G ? [0.8, 0.6, 0.3] : 0.75
    }),V(.7,.1,.1));uvec4 H=${(t = `uvec4(2313257647u,2700274807u,3152041561u,3679390633u);`)}void Q(uint v){H=(H^v)*${t}}void main(){uvec2 z=uvec2(gl_FragCoord.xy);Q(z.x);Q(z.y);Q(I);Q(R);const V cp=V(${[
      R(18) - 9,
      0.5 + R() * R(2) * R(6),
      -8 - J / 2,
    ]}),la=V(0,${J / 2
    },0),fw=N(la-cp),rg=N(cross(V(0,1,0),fw)),up=N(cross(fw,rg)),e=V(1,-1,0)*2e-4;const F fd=L(cp-la);V co=V(0);X d=X(H)/${2 ** 32
    };d.z*=${T};V fc=V(1),go=V(cos(d.z),J(d.z),0)*sqrt(d.w)*.2,o=cp+go.x*rg+go.y*up,g=N(V((d.xy*3+u*r-1.5)/min(r.x,r.y),4));g.xy+=N(g*fd-go).xy;g=N(mat3(rg,up,fw)*g);F t=0;for(uint l=5u;l<9u;l+=1u){for(;t<99;){F h=D(g*t+o);if(h<E)break;t+=h;}if(t>=99){${bg};co+=fc*b;break;}else{Q(l);d=X(H)/${2 ** 32
    };d.xyz=d.xyz*V(1,${T},2)+V(0,0,-1);o=g*t+o;${ig}F a=P(ds(o),E),b=1-a,f=fract(dot(X(i0,i1),X(${L(
      4,
      H
    )}))+${H(5)})*4;f=mix(f,f*6-21,P(3.5,f));uint m=${G ? `3u` : `uint(f*b+b)`
    };V n=N(V(D(o+e.xzz)-D(o+e.yzz),D(o+e.zxz)-D(o+e.zyz),D(o+e.zzx)-D(o+e.zzy)));co+=fc*mix(V(0),V(.5,.7,.9)*4.,S(.22,.2,abs(L(o.xz)-4.5))*P(abs(o.y),E)*a)*a;F i=P(mix((m==2u)?.1:.02,1,pow(1+dot(g,n),5)),d.x);fc*=mix(V(1),C[m],i);W dr=mix(mix(W((m==2u)?.02:.1,1),W(1,0),i),W(0,1),(m==3u)?b:0);V n1=N(V(W(cos(d.y),J(d.y))*sqrt(-d.z*d.z+1),d.z)*dr.x+n),h=reflect(g,n1);g=mix(n1,h,dr.y*P(0,dot(n,h)));t=E/max(E,dot(g,n));}}c=texture(k,.5*u+.5)+X(co,1);}`,
    `void main(){c=texture(j,.5*u+.5);}`,
    `void main(){c=texture(k,.5*u+.5);V x=max(V(0),c.rgb/c.a);c=X(pow(M((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0,1),V(1/2.2))+fract(J(u*mat3x2(${L(
      6,
      R
    )})*999)*9999)/256,1);}`,
  ].map((s, i) => {
    g.attachShader(
      (p = g.createProgram()),
      cs(
        (t = 35632),
        v +
        s
          .replace(/([^a-zA-Z_0-9.])([0-9]+)(?![.0-9u])/g, "$1$2.")
          .replace(/([0-9.]e-[0-9]+)\./gi, "$1")
      )
    );
    g.attachShader(p, cs(t + 1, i < 2 ? O : K));
    g.linkProgram(p);
    c = [..."rRIjk"].map((n) => g.getUniformLocation(p, n));
    a = g.getAttribLocation(p, "a");
    b = g.createBuffer();
    g.enableVertexAttribArray(a);
    g.bindBuffer((s = 34962), b);
    g.bufferData(s, Float32Array.of(0, 1, 0, 0, 1, 1, 1, 0), 35044);
    g.vertexAttribPointer(a, 2, (t = 5126), false, 0, 0);
    f = x = null;
    if (i < 2) {
      g.activeTexture(33984 + i);
      x = g.createTexture();
      g.bindTexture((s = 3553), x);
      g.texImage2D(s, 0, 34836, w, h, 0, 6408, t, null);
      L(4, (i) => g.texParameteri(s, 10240 + i, i < 2 ? 9728 : 33071));
      f = g.createFramebuffer();
      g.bindFramebuffer((q = 36160), f);
      g.framebufferTexture2D(q, q - 96, s, x, 0);
      g.clearColor(0, 0, 0, 0);
      g.clear(4 ** 7);
    }
    return { p, c, f };
  });
  g.viewport(0, 0, w, h);
  I = 0;
  A = 25;
  B = A;
  E *= E;
  onkeyup = (e) => {
    A = [Infinity, 999, 250, 99, 50, 25, 10, 5][e.key] || A;
  };
  f = (_) => {
    (I % E == E - 1 || I < 3 * E ? Q : Q.slice(0, 2)).map(({ p, c, f }) => {
      g.bindFramebuffer(q, f);
      g.useProgram(p);
      g.uniform2f(c[0], w, h);
      g.uniform1ui(c[1], (R(), s));
      g.uniform1ui(c[2], I);
      g.uniform1i(c[3], 0);
      g.uniform1i(c[4], 1);
      g.drawArrays(5, 0, 4);
    });
    g.flush();
    // D.title = I++;
  };
  (k = (_) => setTimeout(k, 1, ++B >= A && f((B = 0))))(
    "tx aaron dmitri amy ben thomas makio135 josh shvembldr genartclub ix iq"
  );

  // not a p5 piece
  return null;

  }

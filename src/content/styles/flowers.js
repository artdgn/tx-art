const maxSize = 500;

export function drawFlowers(sketch) {
  let tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

  let a, b, c, e, f, h, i, j, k, l, m, n, q, r, s, u, v, x, y, z;
  let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z;
  let min, max;
  let ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, ba, bc, bd, be, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu, bv, bw, bx, by, bz, ca, cb, cd, ce, cf, cg, ch, ci, cj, ck, cl, cm, cn, co, cp, cq, cr, cs, ct, cu, cv, cw, cx, cy, cz, da, db, dc, de, df, dg, dh, di, dj, dk, dl, dm, dn, dp, dq, dr, ds, dt, du, dv, dw, dx, dy, dz, ea, eb, ec, ed, ef, eg, eh, ei, ej, ek, el, em, en, eo, ep, eq, er, es, et, eu, ev, ew, ex, ey, ez, fa, fb, fc, fd, fe, fg, fh, fi, fj, fk, fl, fm, fn, fo, fp, fq, fr, fs, ft, fu, fv, fw, fx, fy, fz, ga, gb, gd, ge, gf, gh, gi, gj, gk, gl, gm, gn, go, gp, gq, gr, gs, gt, gu, gv, gw, gx, gy, gz, ha, hb, hc, hd, he, hf, hg, hi, hj, hk, hl, hm, hn, ho, hp, hq, hr, hs, ht, hu, hv, hw, hx, hy, hz, ia, ib, ic, id, ie, ig, ih, ij, ik, il, im, io, ip, iq, ir, is, it, iu, iv, iw, ix, iy, iz, ja, jb, jc, jd, je, jf, jg, jh, ji, jk, jl, jm, jn, jo, jp, jq, jr, js, jt, ju, jv, jw, jx, jy, jz, ka, kb, kc, kd, ke, kf, kg, kh, ki, kj, kl, km, kn, ko, kp, kq, kr, ks, kt, ku, kv, kw, kx, ky, kz, la, lb, lc, ld, le, lf, lg, lh, li, lj, lk, lm, ln, lo, lp, lq, lr, ls, lt, lu, lv, lx, ly, lz, ma, mb, mc, md, me, mf, mg, mh, mi, mj, mk, ml, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nb, nc, nd, ne, nf, ng, nh, ni, nj, nk, nl, nm, no, np, nq, nr, ns, nt, nu, nv, nw, nx, ny, nz, oa, ob, oc, od, oe, of, og, oh, oi, oj, ok, ol, om, on, op, oq, or, os, ot, ou, ov, ow, ox, oy, oz, pa, pb, pc, pd, pe, pf, pg, ph, pi, pj, pk, pl, pm, pn, po, pq, pr, ps, pt, pu, pv, pw, px, py, pz, qa, qb, qc, qd, qe, qf, qg, qh, qi, qj, qk, ql, qm, qn, qo, qp, qr, qt, qu, qv, qw, qx, qy, qz, ra, rb, rc, re, rf, rg, rh, rj, rk, rl, rm, ro, rp, rq, rs, rt, ru, rv, rw, rx, ry, rz, sa, sb, sc, sd, se, sf, sg, sh, si, sj, sk, sl, sm, sn, so, sp, sq, sr, st, su, sv, sw, sx, sy, sz, ta, tb, tc, td, te, tf, tg, th, ti, tj, tk, tl, tn, to, tp, tq, tr, ts, tu, tv, tw, tx, ty, tz, ua, ub, uc, ud, ue, uf, ug, uh, ui, uj, uk, ul, um, un, uo, up, uq, ur, us, ut, uv, uw, ux, uy, uz, va, vb, vc, vd, ve, vf, vg, vh, vi, vj, vk, vl, vm, vn, vo, vp, vq, vr, vs, vt, vu, vw, vx, vy, vz, wa, wb, wc, wd, we, wf, wg, wh, wi, wj, wk, wl, wm, wn, wo, wp, wq, wr, ws, wt, wu, wv, wx, wy, wz, xa, xb, xc, xd, xe, xf, xg, xh, xi, xj, xk, xl, xm, xn, xo, xp, xq, xr, xs, xt, xu, xv, xw, xy, xz, ya, yb, yc, yd, ye, yf, yg, yh, yi, yj, yk, yl, ym, yn, yo, yp, yq, yr, ys, yt, yu, yv, yw, yx, yz, za, zb, zc, zd, ze, zf, zg, zh, zi, zj, zk, zl, zm, zn, zo, zp, zq, zr, zs, zt, zu, zv, zw, zx, zy;
  let AB, AC, AD, AE, AF, AG, AH, AI, AJ, AK, AL, AM, AN, AO, AP, AQ, AR, AS, AT, AU, AV, AW, AX, AY, AZ, BA, BC, BD, BE, BF, BG, BH, BI, BJ, BK, BL, BM, BN, BO, BP, BQ, BR, BS, BT, BU, BV, BW, BX, BY, BZ, CA, CB, CD, CE, CF, CG, CH, CI, CJ, CK, CL, CM, CN, CO, CP, CQ, CR, CS, CT, CU, CV, CW, CX, CY, CZ, DA, DB, DC, DE, DF, DG, DH, DI, DJ, DK, DL, DM, DN, DO, DP, DQ, DR, DS, DT, DU, DV, DW, DX, DY, DZ, EA, EB, EC, ED, EF, EG, EH, EI, EJ, EK, EL, EM, EN, EO, EP, EQ, ER, ES, ET, EU, EV, EW, EX, EY, EZ, FA, FB, FC, FD, FE, FG, FH, FI, FJ, FK, FL, FM, FN, FO, FP, FQ, FR, FS, FT, FU, FV, FW, FX, FY, FZ, GA, GB, GC, GD, GE, GF, GH, GI, GJ, GK, GL, GM, GN, GO, GP, GQ, GR, GS, GT, GU, GV, GW, GX, GY, GZ, HA, HB, HC, HD, HE, HF, HG, HI, HJ, HK, HL, HM, HN, HO, HP, HQ, HR, HS, HT, HU, HV, HW, HX, HY, HZ, IA, IB, IC, ID, IE, IF, IG, IH, IJ, IK, IL, IM, IN, IO, IP, IQ, IR, IS, IT, IU, IV, IW, IX, IY, IZ, JA, JB, JC, JD, JE, JF, JG, JH, JI, JK, JL, JM, JN, JO, JP, JQ, JR, JS, JT, JU, JV, JW, JX, JY, JZ, KA, KB, KC, KD, KE, KF, KG, KH, KI, KJ, KL, KM, KN, KO, KP, KQ, KR, KS, KT, KU, KV, KW, KX, KY, KZ, LA, LB, LC, LD, LE, LF, LG, LH, LI, LJ, LK, LM, LN, LO, LP, LQ, LR, LS, LT, LU, LV, LW, LX, LY, LZ, MA, MB, MC, MD, ME, MF, MG, MH, MI, MJ, MK, ML, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NB, NC, ND, NE, NF, NG, NH, NI, NJ, NK, NL, NM, NO, NP, NQ, NR, NS, NT, NU, NV, NW, NX, NY, NZ, OA, OB, OC, OD, OE, OF, OG, OH, OI, OJ, OK, OL, OM, ON, OP, OQ, OR, OS, OT, OU, OV, OW, OX, OY, OZ, PA, PB, PC, PD, PE, PF, PG, PH, PI, PJ, PK, PL, PM, PN, PO, PQ, PR, PS, PT, PU, PV, PW, PX, PY, PZ, QA, QB, QC, QD, QE, QF, QG, QH, QI, QJ, QK, QL, QM, QN, QO, QP, QR, QS, QT, QU, QV, QW, QX, QY, QZ, RA, RB, RC, RD, RE, RF, RG, RH, RI, RJ, RK, RL, RM, RN, RO, RP, RQ, RS, RT, RU, RV, RW, RX, RY, RZ, SA, SB, SC, SD, SE, SF, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SP, SQ, SR, ST, SU, SV, SW, SX, SY, SZ, TA, TB, TC, TD, TE, TF, TG, TH, TI, TJ, TK, TL, TM, TN, TO, TP, TQ, TR, TS, TU, TV, TW, TX, TY, TZ, UA, UB, UC, UD, UE, UF, UG, UH, UI, UJ, UK, UL, UM, UN, UO, UP, UQ, UR, US, UT, UV, UW, UX, UY, UZ, VA, VB, VC, VD, VE, VF, VG, VH, VI, VJ, VK, VL, VM, VN, VO, VP, VQ, VR, VS, VT, VU, VW, VX, VY, VZ, WA, WB, WC, WD, WE, WF, WG, WH, WI, WJ, WK, WL, WM, WN, WO, WP, WQ, WR, WS, WT, WU, WV, WX, WY, WZ, XA, XB, XC, XD, XE, XF, XG, XH, XI, XJ, XK, XL, XM, XN, XO, XP, XQ, XR, XS, XT, XU, XV, XW, XY, XZ, YA, YB, YC, YD, YE, YF, YG, YH, YI, YJ, YK, YL, YM, YN, YO, YP, YQ, YR, YS, YT, YU, YV, YW, YX, YZ, ZA, ZB, ZC, ZD, ZE, ZF, ZG, ZH, ZI, ZJ, ZK, ZL, ZM, ZN, ZO, ZP, ZQ, ZR, ZS, ZT, ZU, ZV, ZW, ZX, ZY;
  let a0, a1, d0, d1, ww, cc, c0, c1;
  let bbg, l_, a_, r0, ll, rr, l2, b_;

  let p = "ffcf9ffbbbf7b733550f0b3f"
    .match(/.{1}/g)
    .map((c) => (parseInt(c, 16) - 7.5) / 32);
  let rd = tokenData.hash
    .substr(2)
    .match(/.{1}/g)
    .map((c) => parseInt(c, 16));
  let tm = "244423275bb23f331433".match(/.{1}/g).map((c) => parseInt(c, 16));
  let ri = 0;
  let d, w;
  let t = tm.map((m) => rn(m + 1));
  let lw = [0.66, 1, 1.5];
  function rn(a) {
    return rd[ri++ % 64] % a;
  }
  function g(x) {
    return x >= 0.0031 ? 1.055 * sketch.pow(x, 1 / 2.4) - 0.055 : 12.9 * x;
  }
  function o(L, a, b, t) {
    let K = L + 0.4 * a + 0.2 * b;
    let M = L - 0.1 * a - 0.06 * b;
    let S = L - 0.1 * a - 1.3 * b;
    let l = K ** 3;
    let m = M ** 3;
    let s = S ** 3;
    return sketch.color(
      g(4.1 * l - 3.3 * m + 0.23 * s),
      g(-1.3 * l + 2.6 * m - 0.34 * s),
      g(-0.004 * l - 0.7 * m + 1.7 * s),
      t
    );
  }
  sketch.setup = function() {
    d = sketch.min(maxSize, maxSize);
    sketch.createCanvas(d, d);
    w = sketch.width / 2;
    sketch.colorMode(sketch.RGB, 1);
    sketch.strokeCap(sketch.SQUARE);
    sketch.noFill();
    P = sketch.TWO_PI;
    a = (2 + t[0]) * 0.15;
    b = d * 0.95;
    N = 5 + t[1] * 2;
    r = new Array(N);
    r0 = new Array(N);
    pk = [1, 1.07, 1.07, 1.07, 1.15][t[2]];
    L = [1, 2, 2, 2, 3][t[3]];
    S = L > 1 ? t[18] < 1 : false;
    dc = (b / 1200) * lw[t[4]];
    ds = nw = 0;
    while (ds <= 2 && nw == 0) {
      ds = rn(tm[5] + 1);
      nw = [0, 0, 0, 1, 1, 2, 2, 3][rn(tm[7] + 1)];
    }
    kw = [0.2, 0.2, 0.2, 0.2, 0.66, 1][t[8]];
    if (nw > 1) kw /= nw;
    df = b / (L * (S ? 1 : 1.5) + 0.5 + kw);
    R = L > 1 ? (df / 2.5) * pk : df / 1.5;
    C = [5, 6, 7][t[6]];
    e = p[t[9] * 2];
    f = p[t[9] * 2 + 1];
    u = p[t[10] * 2];
    v = p[t[10] * 2 + 1];
    bbg = t[11] > 0;
    l_ = 0.8;
    T = 0.3;
    gr = t[12] > 0 && (e != u || f != v);
    bw = t[13] < 1;
    a_ = (t[14] * sketch.PI) / 6;
    bc = t[15] > 0;
    ll = t[16] + 1;
    A = t[17] < 1;
    Y = L > 1 ? t[19] < 1 : false;
    sketch.smooth(8);
    sketch.background(bbg ? 0 : 1);
    if (bw) {
      e = u = f = v = 0;
      l_ = bbg ? 1 : 0;
    } else if (bc) {
      if (gr) {
        x = sketch.drawingContext;
        gr = x.createLinearGradient(0, d, d, 0);
        for (k = 0; k <= 1; k += 0.2) {
          gr.addColorStop(k, o(0.9, e + (u - e) * k, f + (v - f) * k, 0.25));
        }
        x.fillStyle = gr;
        x.fillRect(0, 0, d, d);
        x.fillStyle = null;
      } else {
        sketch.noStroke();
        sketch.fill(o(l_, u, v, 0.15));
        sketch.rect(0, 0, d, d);
        sketch.noFill();
        v = f;
        u = e;
      }
    } else {
      if (!gr) {
        v = f;
        u = e;
      }
    }
    sketch.blendMode(bbg ? sketch.ADD : sketch.MULTIPLY);
    sketch.strokeWeight(dc);
    pa = [];
    pi = 0;
    for (z = 0; z < L; z++) {
      n = S ? L : sketch.max(C * z, 1);
      for (y = 0; y < n; y++) {
        dx = Y ? (rn(11) - 5) * df * 0.02 : 0;
        dy = Y ? (rn(11) - 5) * df * 0.02 : 0;
        if (S) {
          k = w;
          qy = y / n;
          qz = z / n;
          pa.push(w + df * (y - (n - 1) / 2) + dx);
          pa.push(w + df * (z - (n - 1) / 2) + dy);
        } else {
          k = df * z * (z > 1 ? 0.98 - t[2] * 0.02 : 1);
          q = (y * P) / n + a_ + (z > 1 ? sketch.PI / C / 2 : 0);
          pa.push(w + sketch.cos(q) * k + dx);
          pa.push(w + sketch.sin(q) * k + dy);
        }
      }
    }
    for (pi = 0; pi < pa.length; pi += 2) {
      i = 0;
      for (j = 0; j < N; j++) {
        rr = R * (1 - (rn(11) * 0.2 - 1) * a);
        if (rr > b / 2) rr = b / 2.5;
        r0[j] = rr;
        r[j] = rr;
      }
      for (c = 1; c > 0; c -= dc / R) {
        i++;
        l2 = A && (i & 1) == 0 ? l_ : bw ? (bbg ? 0.7 : 0.3) : l_ - 0.15;
        for (s = -1; s < 2; s += ll) {
          sketch.stroke(o(l2, e + (u - e) * c, f + (v - f) * c, T));
          sketch.beginShape();
          for (j = 0; j <= N + 2; j++) {
            q =
              r[j % N] * c +
              (sketch.sin(nw * c * P - P / 4) * 0.5 + 0.5) * kw * r0[j % N];
            b_ = (j * P) / N + s * ds * c * P * 0.25 + (s * 2 * sketch.PI) / 3;
            sketch.curveVertex(sketch.cos(b_) * q + pa[pi], sketch.sin(b_) * q + pa[pi + 1]);
          }
          sketch.endShape();
        }
      }
    }
  }
}

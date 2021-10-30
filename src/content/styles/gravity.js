import p5 from 'p5';

const maxSize = 500;

const tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

export function gravityDraw(sketchId) {
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {
  var RNDS,
    _r,
    CMX,
    LOAD,
    CSZ,
    TTL,
    SQR,
    E,
    DIM = Math.min(maxSize, window.innerWidth, window.innerHeight),
    M = DIM / 1e3,
    D2 = DIM / 2,
    RSP = 1e-4,
    _H = [];

  let Energy;

  sketch.setup = function() {
    sketch.createCanvas(DIM, DIM), sketch.strokeWeight(M), sketch.noFill();
    for (let t = 0; t < 32; t++)
      _H.push(parseInt(tokenData.hash.slice(2 + 2 * t, 4 + 2 * t), 16) / 256);
    (_r = parseInt(tokenData.hash.slice(0, 16), 16)),
      (CMX = 0.05 + 0.2 * _H[2]),
      (LOAD = -0.1 - 0.4 * _H[3]),
      (TTL = 40),
      (CSZ =
        0.25 < _H[4]
          ? (SQR = 0.5 < _H[9])
            ? 0.5 < _H[4]
              ? 0.75
              : 0.98
            : 0.61
          : ((SQR = 1), 1.1));
    var e = parseInt(50 + 200 * _H[0]),
      s = 0.6 - 0.4 * _H[0],
      a = 1 + _H[0],
      t = "#001abf",
      i = "#008044",
      o = "#ffc800",
      n = "#d00900",
      h = "#df60b0",
      l = "#004080",
      o = [
        [t, i, o, n, h],
        [t, i, o, "#ff0900"],
        [t, o, n, h],
        [n, o, h],
        [i, h],
        [i, o],
        [l, h],
        [l, i],
        [n],
        [h],
        [o],
        ["#404040"],
      ],
      d = o[parseInt(_H[5] * o.length)];
    (RNDS =
      _H[8] < 0.1
        ? (sketch.background("#00041f"), sketch.blendMode(sketch.SCREEN), 24e3)
        : (sketch.background("#fff8e0"), sketch.blendMode(sketch.MULTIPLY), 32e3)),
      (E = { col: d[0] });
    for (let t = 0; t < e; t++) Node.add(d[t % d.length], r(s), vectr(a));
  }
  sketch.draw = function() {
    sketch.translate(D2, D2);
    for (
      var t = sketch.millis();
      sketch.beginShape(),
      (E = new Energy(E.col, TTL, vectr())),
      sketch.endShape(),
      sketch.millis() - t < 30 && --RNDS;

    );
    RNDS || sketch.noLoop();
  }
  function r(t = 1, e = 0) {
    return _R() * (t - e) + e;
  }
  function vectr(t = 1) {
    return sketch.createVector(1, 0)
      .rotate(_R() * sketch.TWO_PI)
      .mult(r(t));
  }
  function _R() {
    return (
      (_r ^= _r << 13),
      (_r ^= _r >> 17),
      (((_r ^= _r << 5) < 0 ? 1 + ~_r : _r) % 1e3) / 1e3
    );
  }
  (Energy = class {
    constructor(t, e, r) {
      (this.col = sketch.color(t)), (this.nrg = e), (this.p = r), this.draw();
    }
    draw() {
      var t = Node.gravity(this);
      this.p.add(t);
      t = 24 + 16 * (1 - Math.sqrt(1 / this.nrg));
      this.col.setAlpha(t),
        sketch.stroke(this.col),
        ((SQR && Math.abs(this.p.x) < CSZ && Math.abs(this.p.y) < CSZ) ||
          (!SQR && this.p.magSq() < CSZ)) &&
        (sketch.vertex(this.p.x * D2, this.p.y * D2), 1 < --this.nrg && this.draw());
    }
    mix(t) {
      var e = 1 - CMX;
      this.col = sketch.color(
        sketch.red(this.col) * e + sketch.red(t) * CMX,
        sketch.green(this.col) * e + sketch.green(t) * CMX,
        sketch.blue(this.col) * e + sketch.blue(t) * CMX
      );
    }
  }),
    (Node = class {
      constructor(t, e, r) {
        (this.col = t), (this.mag = e), (this.pos = r), (this.L = LOAD);
      }
      static gravity(a) {
        let i = vectr(0);
        for (let s = 0; s < Node._n.length; s++) {
          let t = Node._n[s],
            e = t.pos.copy(),
            r = e.dist(a.p);
          r &&
            (e.sub(a.p),
              e.setMag(t.getMag() / (100 * r)),
              i.add(e),
              r < t.mag / 2 ? (a.mix(t.col), t.unload()) : t.reload());
        }
        return i;
      }
      static add(t, e, r, s) {
        (Node._n = Node._n || []), Node._n.push(new Node(t, e, r));
      }
      getMag() {
        return this.mag * this.L;
      }
      reload() {
        this.L < 1 && (this.L += RSP * RSP * this.mag);
      }
      unload() {
        -1 < this.L && (this.L -= RSP * this.mag);
      }
    });

    return sketch;

  }

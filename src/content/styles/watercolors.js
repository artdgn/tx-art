import p5 from 'p5';

import { urlParamTxHash } from '../util.js';

let maxSize = 500;

const tokenData = { hash: urlParamTxHash() };

export function watercolorsDraw({ sketchId, sizeOverride }) {  
  maxSize = sizeOverride || maxSize;
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {

  function pwa(s) {
    let e = sketch.random(1),
      t = 0;
    for (let o = 0; o < s.length; o++) {
      if (e <= s[o].p + t) return o;
      t += s[o].p;
    }
    return 0;
  }
  function mc(s, e, t) {
    let o = [];
    for (let r = 0; r < 1e3; r++) {
      let i = sketch.map(r, 0, 1e3, 0, 2 * sketch.PI),
        l = sketch.createVector(t * sketch.cos(i) + s, t * sketch.sin(i) + e);
      o.push(l);
    }
    return o;
  }
  function ml(s, e, t, o) {
    return [sketch.createVector(s, e), sketch.createVector(t, o)];
  }
  function mr(s, e, t, o) {
    return [
      sketch.createVector(s, e),
      sketch.createVector(s, o),
      sketch.createVector(t, o),
      sketch.createVector(t, e),
    ];
  }
  function mlt(s, e, t, o, r) {
    let i = letterData[s],
      l = [];
    for (let s = 0; s < i.length; s++) {
      let a = [];
      for (let l = 0; l < i[s].length; l += 2) {
        let n = sketch.createVector(
          sketch.map(i[s][l], -250, 250, e, o),
          sketch.map(i[s][l + 1], -250, 250, t, r)
        );
        a.push(n);
      }
      l.push(a);
    }
    return l;
  }
  function rlbs(s, e, t) {
    let o = 0;
    for (let e = 0; e < s.length - 1; e++)
      o += sketch.dist(s[e].x, s[e].y, s[e + 1].x, s[e + 1].y);
    e && (o += sketch.dist(s[s.length - 1].x, s[s.length - 1].y, s[0].x, s[0].y));
    let r = [s[0].copy()],
      i = s[0].copy(),
      l = 0,
      a = 1;
    for (let e = t; e <= o; e += t)
      for (;;) {
        let t = sketch.dist(i.x, i.y, s[a % s.length].x, s[a % s.length].y);
        if (!(l + t <= e)) {
          let o = sketch.map(e, l, l + t, 0, 1),
            n = sketch.createVector(
              (1 - o) * i.x + o * s[a % s.length].x,
              (1 - o) * i.y + o * s[a % s.length].y
            );
          r.push(n.copy()), (i = n.copy()), (l = e);
          break;
        }
        (i = s[a % s.length].copy()), (l += t), a++;
      }
    return e || r.push(s[s.length - 1].copy()), r;
  }
  function pal(s, e, t, o, r) {
    return [
      255 * (e[0] + t[0] * sketch.cos(2 * sketch.PI * (o[0] * s + r[0]))),
      255 * (e[1] + t[1] * sketch.cos(2 * sketch.PI * (o[1] * s + r[1]))),
      255 * (e[2] + t[2] * sketch.cos(2 * sketch.PI * (o[2] * s + r[2]))),
    ];
  }
  class FlowNode {
    constructor(s, e) {
      (this.currPos = s),
        (this.prevPos = s),
        (this.pct = e),
        (this.isAlive = !0),
        (this.age = 0);
    }
    update(s, e, t) {
      (this.age += 1),
        (this.prevPos = sketch.createVector(this.currPos.x, this.currPos.y));
      for (let o = 0; o < t; o++) {
        let t = s(this.currPos);
        e
          ? this.currPos.set(this.currPos.x - t.x, this.currPos.y - t.y)
          : this.currPos.set(this.currPos.x + t.x, this.currPos.y + t.y);
      }
    }
  }
  class Flow {
    constructor(s, e, t, o, r) {
      (this.age = 0),
        (this.lifespan = flowLifespan),
        (this.stepsPerUpdate = flowStepsPerUpdate),
        (this.flowField = s),
        (this.minDist = flowMinDist),
        (this.maxDist = flowMaxDist),
        (this.isFlipped = e),
        (this.isv = t.isv),
        (this.variegatedOffset = sketch.random(1)),
        this.isv
          ? (this.color = t.palette)
          : (this.color = t.palette[colorIndex % t.palette.length]),
        colorIndex++,
        (this.flowNodes = []);
      let i = rlbs(o, r, 0.5 * (this.minDist + this.maxDist));
      for (let s = 0; s < i.length; s++)
        this.flowNodes.push(new FlowNode(i[s], s / i.length));
      this.isClosed = r;
    }
    update() {
      this.age++;
      for (let s = this.flowNodes.length - 1; s >= 0; s--)
        this.flowNodes[s].isAlive
          ? this.flowNodes[s].update(
              this.flowField,
              this.isFlipped,
              this.stepsPerUpdate
            )
          : this.flowNodes.splice(s, 1);
      for (
        let s = this.isClosed
          ? this.flowNodes.length - 1
          : this.flowNodes.length - 2;
        s >= 0;
        s--
      ) {
        let e = this.flowNodes[s],
          t = this.flowNodes[(s + 1) % this.flowNodes.length],
          o = sketch.dist(e.currPos.x, e.currPos.y, t.currPos.x, t.currPos.y);
        if (o > this.maxDist) {
          let r = sketch.floor(o / this.maxDist);
          for (let o = 0; o < r; o++) {
            let i = sketch.map(o + 1, 0, r + 1, 0, 1),
              l = 0.5 * (e.pct + t.pct);
            (s + 1) % this.flowNodes.length == 0 && (l = 1);
            let a = new FlowNode(
              e.prevPos
                .copy()
                .mult(i)
                .add(t.prevPos.copy().mult(1 - i)),
              l
            );
            a.update(this.flowField, this.isFlipped, this.stepsPerUpdate),
              this.flowNodes.splice(s + 1, 0, a);
          }
        } else if (o < this.minDist && s < this.flowNodes.length - 2) {
          let o = this.flowNodes[(s + 1) % this.flowNodes.length];
          o.isAlive &&
            ((t.isAlive = !1),
            (t.currPos = sketch.createVector(
              0.5 * (o.currPos.x + e.currPos.x),
              0.5 * (o.currPos.y + e.currPos.y)
            )));
        }
      }
    }
    drawGraded(s, e) {
      let t, o;
      s.beginShape(sketch.TRIANGLE_STRIP),
        e
          ? ((t =
              255 *
              sketch.map(
                sketch.cos(sketch.map(this.age, 0, this.lifespan, 0, 3 * sketch.PI)),
                -1,
                1,
                sketch.map(this.age, 0, this.lifespan, 0.1, 0),
                1
              )),
            (o =
              255 *
              sketch.map(
                sketch.cos(sketch.map(this.age - 1, 0, this.lifespan, 0, 3 * sketch.PI)),
                -1,
                1,
                sketch.map(this.age, 0, this.lifespan, 0.1, 0),
                1
              )))
          : ((t = sketch.map(this.age, 0, this.lifespan, 255, 0)),
            (o = sketch.map(this.age - 1, 0, this.lifespan, 255, 0)));
      for (let e = 0; e < this.flowNodes.length; e++)
        s.fill(this.color[0], this.color[1], this.color[2], o),
          s.vertex(this.flowNodes[e].prevPos.x, this.flowNodes[e].prevPos.y),
          s.fill(this.color[0], this.color[1], this.color[2], t),
          s.vertex(this.flowNodes[e].currPos.x, this.flowNodes[e].currPos.y);
      this.isClosed &&
        (s.fill(this.color[0], this.color[1], this.color[2], o),
        s.vertex(this.flowNodes[0].prevPos.x, this.flowNodes[0].prevPos.y),
        s.fill(this.color[0], this.color[1], this.color[2], t),
        s.vertex(this.flowNodes[0].currPos.x, this.flowNodes[0].currPos.y)),
        s.endShape();
    }
    drawVariegated(s, e) {
      let t, o;
      s.beginShape(sketch.TRIANGLE_STRIP),
        e
          ? ((t =
              255 *
              sketch.map(
                sketch.cos(sketch.map(this.age, 0, this.lifespan, 0, 3 * sketch.PI)),
                -1,
                1,
                sketch.map(this.age, 0, this.lifespan, 0.1, 0),
                0.75
              )),
            (o =
              255 *
              sketch.map(
                sketch.cos(sketch.map(this.age - 1, 0, this.lifespan, 0, 3 * sketch.PI)),
                -1,
                1,
                sketch.map(this.age, 0, this.lifespan, 0.1, 0),
                0.75
              )))
          : ((t = sketch.map(this.age, 0, this.lifespan, 191.25, 0)),
            (o = sketch.map(this.age - 1, 0, this.lifespan, 191.25, 0)));
      let r = this.color[0],
        i = this.color[1],
        l = this.color[2],
        a = this.color[3];
      for (let e = 0; e < this.flowNodes.length; e++) {
        let n = pal(
          this.flowNodes[e].pct +
            sketch.map(this.age, 0, this.lifespan, 0, 1) +
            this.variegatedOffset,
          r,
          i,
          l,
          a
        );
        s.fill(n[0], n[1], n[2], o),
          s.vertex(this.flowNodes[e].prevPos.x, this.flowNodes[e].prevPos.y),
          s.fill(n[0], n[1], n[2], t),
          s.vertex(this.flowNodes[e].currPos.x, this.flowNodes[e].currPos.y);
      }
      if (this.isClosed) {
        let e = pal(
          this.flowNodes[0].pct +
            sketch.map(this.age, 0, this.lifespan, 0, 1) +
            this.variegatedOffset,
          r,
          i,
          l,
          a
        );
        s.fill(e[0], e[1], e[2], o),
          s.vertex(this.flowNodes[0].prevPos.x, this.flowNodes[0].prevPos.y),
          s.fill(e[0], e[1], e[2], t),
          s.vertex(this.flowNodes[0].currPos.x, this.flowNodes[0].currPos.y);
      }
      s.endShape();
    }
  }
  let ss,
    pg,
    shaderPg,
    invertShader,
    isRotated,
    isStriped,
    isInverted,
    colorSchemeIndex,
    isMirrored,
    noiseScaleIndex,
    angleAmpIndex,
    offset,
    layoutIndex,
    isWavey,
    colorIndex,
    flows,
    letterData = {
      A: [
        [
          -51, -250, 51, -250, 230, 250, 131, 250, 94, 142, -94, 142, -131, 250,
          -230, 250, -51, -250,
        ],
        [1, -124, -1, -124, -64, 56, 63, 56, 1, -124],
      ],
      B: [
        [
          177, -202, 177, -45, 115, -9, 115, -8, 177, 28, 177, 202, 94, 250,
          -177, 250, -177, -250, 94, -250, 177, -202,
        ],
        [77, 34, -77, 34, -77, 164, 77, 164, 77, 34],
        [77, -164, -77, -164, -77, -51, 77, -51, 77, -164],
      ],
      C: [
        [
          83, 165, 83, 102, 181, 102, 181, 203, 100, 250, -100, 250, -181, 203,
          -181, -203, -100, -250, 100, -250, 181, -203, 181, -102, 83, -102, 83,
          -165, -83, -165, -83, 165, 83, 165,
        ],
      ],
      D: [
        [
          195, -202, 195, 202, 112, 250, -195, 250, -195, -250, 112, -250, 195,
          -202,
        ],
        [95, -164, -95, -164, -95, 164, 95, 164, 95, -164],
      ],
      E: [
        [
          107, 36, -50, 36, -50, 164, 150, 164, 150, 250, -150, 250, -150, -250,
          150, -250, 150, -164, -50, -164, -50, -50, 107, -50, 107, 36,
        ],
      ],
      F: [
        [
          110, 36, -53, 36, -53, 250, -153, 250, -153, -250, 153, -250, 153,
          -164, -53, -164, -53, -50, 110, -50, 110, 36,
        ],
      ],
      G: [
        [
          83, 74, 2, 74, 2, -11, 181, -11, 181, 203, 100, 250, -100, 250, -181,
          203, -181, -203, -100, -250, 100, -250, 181, -203, 181, -102, 83,
          -102, 83, -165, -83, -165, -83, 165, 83, 165, 83, 74,
        ],
      ],
      H: [
        [
          98, 36, -98, 36, -98, 250, -198, 250, -198, -250, -98, -250, -98, -50,
          98, -50, 98, -250, 198, -250, 198, 250, 98, 250, 98, 36,
        ],
      ],
      I: [[50, 250, -50, 250, -50, -250, 50, -250, 50, 250]],
      J: [
        [
          -59, 165, 59, 165, 59, -250, 158, -250, 158, 202, 76, 250, -76, 250,
          -158, 202, -158, 66, -59, 66, -59, 165,
        ],
      ],
      K: [
        [
          -114, 250, -214, 250, -214, -250, -114, -250, -114, -25, -113, -25,
          74, -250, 192, -250, -5, -16, 214, 250, 94, 250, -65, 56, -114, 114,
          -114, 250,
        ],
      ],
      L: [
        [
          135, 250, -135, 250, -135, -250, -35, -250, -35, 164, 135, 164, 135,
          250,
        ],
      ],
      M: [
        [
          250, 242, 157, 242, 157, -77, 155, -77, 46, 242, -46, 242, -155, -81,
          -157, -81, -157, 242, -250, 242, -250, -242, -122, -242, 0, 114, 1,
          114, 122, -242, 250, -242, 250, 242,
        ],
      ],
      N: [
        [
          -104, -74, -105, -74, -105, 250, -205, 250, -205, -250, -112, -250,
          104, 74, 105, 74, 105, -250, 205, -250, 205, 250, 112, 250, -104, -74,
        ],
      ],
      O: [
        [
          192, -203, 192, 203, 110, 250, -110, 250, -192, 203, -192, -203, -110,
          -250, 110, -250, 192, -203,
        ],
        [93, -165, -93, -165, -93, 165, 93, 165, 93, -165],
      ],
      P: [
        [
          -73, 250, -173, 250, -173, -250, 90, -250, 173, -202, 173, 21, 90, 69,
          -73, 69, -73, 250,
        ],
        [73, -164, -73, -164, -73, -17, 73, -17, 73, -164],
      ],
      Q: [
        [73, -184, -73, -184, -73, 76, 73, 76, 73, -184],
        [
          64, 250, 4, 142, -86, 142, -151, 105, -151, -213, -86, -250, 86, -250,
          151, -213, 151, 105, 86, 142, 149, 250, 64, 250,
        ],
      ],
      R: [
        [
          81, 61, 190, 250, 80, 250, -27, 61, -90, 61, -90, 250, -190, 250,
          -190, -250, 81, -250, 164, -202, 164, 14, 81, 61,
        ],
        [64, -164, -90, -164, -90, -24, 64, -24, 64, -164],
      ],
      S: [
        [
          -86, 44, -167, -4, -167, -203, -86, -250, 93, -250, 174, -203, 174,
          -109, 76, -109, 76, -165, -69, -165, -69, -48, 93, -48, 174, -1, 174,
          203, 93, 250, -93, 250, -174, 203, -174, 109, -76, 109, -76, 165, 76,
          165, 76, 44, -86, 44,
        ],
      ],
      T: [
        [
          185, -164, 50, -164, 50, 250, -50, 250, -50, -164, -185, -164, -185,
          -250, 185, -250, 185, -164,
        ],
      ],
      U: [
        [
          94, 158, 94, -250, 193, -250, 193, 202, 111, 250, -111, 250, -193,
          202, -193, -250, -94, -250, -94, 158, 94, 158,
        ],
      ],
      V: [
        [
          132, -250, 234, -250, 55, 250, -55, 250, -234, -250, -132, -250, 0,
          128, 1, 128, 132, -250,
        ],
      ],
      W: [
        [
          175, -192, 250, -192, 152, 192, 70, 192, 1, -68, -1, -68, -70, 192,
          -152, 192, -250, -192, -175, -192, -110, 71, -109, 71, -39, -192, 39,
          -192, 109, 70, 110, 70, 175, -192,
        ],
      ],
      X: [
        [
          -105, 250, -218, 250, -57, -6, -211, -250, -98, -250, 0, -95, 98,
          -250, 211, -250, 56, -6, 218, 250, 105, 250, 0, 84, -105, 250,
        ],
      ],
      Y: [
        [
          50, 250, -50, 250, -50, 36, -211, -250, -102, -250, -1, -63, 0, -63,
          102, -250, 211, -250, 50, 37, 50, 250,
        ],
      ],
      Z: [
        [
          48, -164, -162, -164, -162, -250, 177, -250, 177, -186, -48, 163, -48,
          164, 177, 164, 177, 250, -177, 250, -177, 186, 48, -163, 48, -164,
        ],
      ],
    },
    invertVert =
      "attribute vec3 aPosition;attribute vec2 aTexCoord;varying vec2 vTexCoord;void main() {  vTexCoord = aTexCoord;  vTexCoord.y = 1.0 - vTexCoord.y;  vec4 positionVec4 = vec4(aPosition, 1.0);  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;  gl_Position = positionVec4;}",
    invertFrag =
      "precision highp float;uniform sampler2D tex;varying vec2 vTexCoord;void main() {  vec4 c = texture2D(tex, vTexCoord);  gl_FragColor = vec4(1.0 - c.x, 1.0 - c.y, 1.0 - c.z, 1.0);}",
    colorSchemes = [
      {
        p: 0.03,
        isv: !1,
        palette: [
          [187, 106, 33],
          [160, 142, 81],
          [109, 3, 48],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [144, 187, 126],
          [247, 100, 3],
          [64, 73, 99],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [185, 187, 143],
          [44, 76, 4],
          [149, 125, 28],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [96, 72, 14],
          [26, 74, 30],
          [135, 184, 35],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [36, 206, 145],
          [185, 160, 104],
          [96, 69, 150],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [71, 43, 5],
          [46, 148, 64],
          [21, 185, 94],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [102, 169, 13],
          [91, 227, 218],
          [154, 108, 100],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [180, 29, 32],
          [95, 59, 148],
          [161, 121, 28],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [8, 83, 71],
          [39, 79, 16],
          [138, 95, 166],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [59, 98, 37],
          [25, 26, 52],
          [80, 94, 131],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [35, 88, 95],
          [59, 54, 31],
          [83, 116, 160],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [33, 93, 99],
          [52, 53, 98],
          [200, 81, 119],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [100, 89, 69],
          [27, 62, 96],
          [0, 55, 12],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [12, 124, 190],
          [190, 91, 100],
          [189, 118, 93],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [99, 95, 195],
          [163, 140, 180],
          [36, 182, 135],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [70, 26, 179],
          [15, 125, 35],
          [84, 119, 176],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [133, 177, 21],
          [103, 251, 16],
          [22, 238, 33],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [138, 90, 204],
          [168, 140, 62],
          [95, 123, 246],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [107, 117, 236],
          [241, 108, 36],
          [36, 188, 145],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [159, 149, 94],
          [34, 243, 112],
          [244, 145, 92],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [13, 103, 74],
          [245, 64, 62],
          [161, 186, 36],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [134, 54, 61],
          [135, 215, 4],
          [231, 133, 97],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [92, 111, 169],
          [80, 229, 218],
          [144, 58, 43],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [7, 140, 78],
          [17, 110, 191],
          [217, 48, 62],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [7, 78, 140],
          [17, 19, 110],
          [217, 62, 48],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [85, 97, 188],
          [84, 78, 91],
          [156, 138, 143],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [137, 191, 21],
          [42, 116, 240],
          [157, 93, 145],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [107, 109, 92],
          [141, 97, 97],
          [32, 77, 78],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [13, 29, 250],
          [105, 38, 251],
          [251, 77, 38],
        ],
      },
      {
        p: 0.03,
        isv: !1,
        palette: [
          [5, 45, 145],
          [22, 95, 5],
          [120, 5, 45],
        ],
      },
      {
        p: 0.02,
        isv: !0,
        palette: [
          [0.5, 0.5, 0.5],
          [0.5, 0.5, 0.5],
          [1, 1, 1],
          [0, 0.1, 0.2],
        ],
      },
      {
        p: 0.02,
        isv: !0,
        palette: [
          [0.5, 0.5, 0.5],
          [0.5, 0.5, 0.5],
          [1, 1, 1],
          [0.3, 0.2, 0.2],
        ],
      },
      {
        p: 0.02,
        isv: !0,
        palette: [
          [0.8, 0.5, 0.4],
          [0.2, 0.4, 0.2],
          [2, 1, 1],
          [0, 0.05, 0.05],
        ],
      },
      {
        p: 0.02,
        isv: !0,
        palette: [
          [0.5, 0.5, 0.5],
          [0.5, 0.5, 0.5],
          [1, 1, 1],
          [0, 0.15, 0.2],
        ],
      },
      {
        p: 0.005,
        isv: !0,
        palette: [
          [0.1, 0.18, 0.12],
          [0.8, 0.28, 0.69],
          [1, 1, 1],
          [0.69, 0.32, 0],
        ],
      },
      {
        p: 0.005,
        isv: !0,
        palette: [
          [0.5, 0.5, 0.5],
          [0.5, 0.5, 0.5],
          [1, 1, 1],
          [0, 0.33, 0.67],
        ],
      },
    ],
    noiseScales = [
      { p: 0.05, s: 0.2 },
      { p: 0.1, s: 0.25 },
      { p: 0.2, s: 0.3 },
      { p: 0.3, s: 0.35 },
      { p: 0.2, s: 0.4 },
      { p: 0.1, s: 0.45 },
      { p: 0.05, s: 0.5 },
    ],
    angleAmps = [
      { p: 0.025, a: 2 },
      { p: 0.075, a: 2.5 },
      { p: 0.1, a: 3 },
      { p: 0.15, a: 3.5 },
      { p: 0.3, a: 4 },
      { p: 0.15, a: 4.5 },
      { p: 0.1, a: 5 },
      { p: 0.075, a: 5.5 },
      { p: 0.025, a: 6 },
    ],
    layouts = [
      {
        p: 0.0584,
        c: !0,
        l: function () {
          let s = sketch.floor(sketch.random(2, 5)),
            e = [];
          for (let t = 0; t < s; t++)
            e.push(
              mc(0.5 * ss, 0.5 * ss, sketch.map(t, 0, s - 1, 0.1 * ss, 0.45 * ss))
            );
          return e;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = Math.floor(sketch.random(2, 5));
          for (let t = 0; t < e; t++) {
            let o = sketch.map(t + 1, 0, e + 1, 0, ss),
              r = mr(
                0.5 * ss - 0.5 * o,
                0.5 * ss - 0.5 * o,
                0.5 * ss + 0.5 * o,
                0.5 * ss + 0.5 * o
              );
            s.push(r);
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(4, 7));
          for (let t = 0; t < e; t++) {
            let o = ml(
              sketch.map(t + 1, 0, e + 1, 0, ss),
              0.1 * ss,
              sketch.map(t + 1, 0, e + 1, 0, ss),
              0.9 * ss
            );
            s.push(o);
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(4, 7));
          for (let t = 0; t < e; t++) {
            let o = ml(
              0.1 * ss,
              sketch.map(t + 1, 0, e + 1, 0, ss),
              0.9 * ss,
              sketch.map(t + 1, 0, e + 1, 0, ss)
            );
            s.push(o);
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(2, 4)),
            t = sketch.random(0.1, 0.3) * ss;
          for (let o = 0; o < e; o++) {
            let r = mc(
              0.5 * ss,
              sketch.map(o + 1, 0, e + 1, 0.5 * t, ss - 0.5 * t),
              t
            );
            s.push(r);
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(2, 4)),
            t = sketch.random(0.1, 0.3) * ss;
          for (let o = 0; o < e; o++) {
            let r = mc(
              sketch.map(o + 1, 0, e + 1, 0.5 * t, ss - 0.5 * t),
              0.5 * ss,
              t
            );
            s.push(r);
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.random(0.1, 0.25) * ss;
          return (
            s.push(mc(0.3 * ss, 0.3 * ss, e)),
            s.push(mc(0.3 * ss, 0.7 * ss, e)),
            s.push(mc(0.7 * ss, 0.3 * ss, e)),
            s.push(mc(0.7 * ss, 0.7 * ss, e)),
            s
          );
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = 0.5 * sketch.random(0.25, 0.45);
          return (
            s.push(
              mr(
                ss * (0.25 - e),
                ss * (0.25 - e),
                ss * (0.25 + e),
                ss * (0.25 + e)
              )
            ),
            s.push(
              mr(
                ss * (0.25 - e),
                ss * (0.75 - e),
                ss * (0.25 + e),
                ss * (0.75 + e)
              )
            ),
            s.push(
              mr(
                ss * (0.75 - e),
                ss * (0.25 - e),
                ss * (0.75 + e),
                ss * (0.25 + e)
              )
            ),
            s.push(
              mr(
                ss * (0.75 - e),
                ss * (0.75 - e),
                ss * (0.75 + e),
                ss * (0.75 + e)
              )
            ),
            s
          );
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.random(0.2, 0.3) * ss,
            t = sketch.random(0.7, 0.9) * e;
          for (let o = 0; o < 4; o++) {
            let r = sketch.map(o, 0, 4, 0, 2 * sketch.PI);
            s.push(mc(e * sketch.cos(r) + 0.5 * ss, e * sketch.sin(r) + 0.5 * ss, t));
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          return [
            ml(0.35 * ss, 0.1 * ss, 0.35 * ss, 0.9 * ss),
            ml(0.65 * ss, 0.1 * ss, 0.65 * ss, 0.9 * ss),
            ml(0.1 * ss, 0.35 * ss, 0.9 * ss, 0.35 * ss),
            ml(0.1 * ss, 0.65 * ss, 0.9 * ss, 0.65 * ss),
          ];
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(2, 5)),
            t = (0.7 * ss) / e,
            o = (0.15 * ss) / e;
          for (let r = 0; r < e; r++) {
            let i = sketch.map(r, 0, e, 0, ss);
            s.push(mr(0.1 * ss, i + o, 0.9 * ss, i + o + t));
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(2, 5)),
            t = (0.7 * ss) / e,
            o = (0.15 * ss) / e;
          for (let r = 0; r < e; r++) {
            let i = sketch.map(r, 0, e, 0, ss);
            s.push(mr(i + o, 0.1 * ss, i + o + t, 0.9 * ss));
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          let s = sketch.random(0.15, 0.3) * ss,
            e = 0.1 * ss;
          return [
            mr(0 + e, 0 + e, ss - e, 0 + e + s),
            mr(0 + e, ss - e - s, ss - e, ss - e),
            mr(0 + e, 0 + e, 0 + e + s, ss - e),
            mr(ss - e - s, 0 + e, ss - e, ss - e),
          ];
        },
      },
      {
        p: 0.0576,
        c: !0,
        l: function () {
          return [
            [
              sketch.createVector(0.1 * ss, 0.5 * ss),
              sketch.createVector(0.5 * ss, 0.1 * ss),
              sketch.createVector(0.9 * ss, 0.5 * ss),
              sketch.createVector(0.5 * ss, 0.9 * ss),
            ],
            mr(0.2 * ss, 0.2 * ss, 0.8 * ss, 0.8 * ss),
          ];
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          let s = [],
            e = sketch.floor(sketch.random(3, 6));
          for (let t = 0; t < e; t++) {
            let o = sketch.map(t, 0, e, 0, sketch.PI);
            s.push(
              ml(
                0.5 * ss + 0.45 * ss * sketch.cos(o),
                0.5 * ss + 0.45 * ss * sketch.sin(o),
                0.5 * ss - 0.45 * ss * sketch.cos(o),
                0.5 * ss - 0.45 * ss * sketch.sin(o)
              )
            );
          }
          return s;
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          return [
            ml(0.2 * ss, 0.2 * ss, 0.8 * ss, 0.8 * ss),
            ml(0.2 * ss, 0.8 * ss, 0.8 * ss, 0.2 * ss),
          ];
        },
      },
      {
        p: 0.0576,
        c: !1,
        l: function () {
          return [
            ml(0.1 * ss, 0.1 * ss, 0.4 * ss, 0.4 * ss),
            ml(0.1 * ss, 0.4 * ss, 0.4 * ss, 0.1 * ss),
            ml(0.6 * ss, 0.1 * ss, 0.9 * ss, 0.4 * ss),
            ml(0.6 * ss, 0.4 * ss, 0.9 * ss, 0.1 * ss),
            ml(0.6 * ss, 0.6 * ss, 0.9 * ss, 0.9 * ss),
            ml(0.6 * ss, 0.9 * ss, 0.9 * ss, 0.6 * ss),
            ml(0.1 * ss, 0.6 * ss, 0.4 * ss, 0.9 * ss),
            ml(0.1 * ss, 0.9 * ss, 0.4 * ss, 0.6 * ss),
          ];
        },
      },
      {
        p: 0.01,
        c: !1,
        l: function () {
          let s = [],
            e = mlt(
              Object.keys(letterData)[
                sketch.floor(sketch.random(Object.keys(letterData).length))
              ],
              0.1 * ss,
              0.1 * ss,
              0.9 * ss,
              0.9 * ss
            );
          for (let t = 0; t < e.length; t++)
            for (let o = 0; o < e[t].length; o++)
              s.push([e[t][o], e[t][(o + 1) % e[t].length]]);
          return s;
        },
      },
      {
        p: 0.01,
        c: !1,
        l: function () {
          let s = [],
            e = [],
            t = 0.1 * ss;
          for (let o = 0; o < 1e3; o++) {
            let o = sketch.random(ss),
              r = sketch.random(ss),
              i = !0;
            for (let s = 0; s < e.length; s++)
              if (sketch.dist(o, r, e[s].x, e[s].y) < t) {
                i = !1;
                break;
              }
            if (i) {
              e.push({ x: o, y: r });
              let i = sketch.random(2 * sketch.PI);
              s.push(
                ml(
                  o + 0.5 * t * sketch.cos(i),
                  r + 0.5 * t * sketch.sin(i),
                  o - 0.5 * t * sketch.cos(i),
                  r - 0.5 * t * sketch.sin(i)
                )
              );
            }
          }
          return s;
        },
      },
    ],
    flowLifespan = 500,
    flowStepSize = 16e-5,
    flowStepsPerUpdate = 4,
    flowMinDist = 0.1,
    flowMaxDist = 5,
    isRendering = !0;
  sketch.setup =function () {
    (ss = sketch.min(maxSize, sketch.windowWidth, sketch.windowHeight)),
      sketch.createCanvas(ss, ss, sketch.WEBGL),
      setupEnvironment();
  }
  function setupEnvironment() {
    let s = parseInt(tokenData.hash.slice(0, 16), 16);
    function e(s) {
      let e = 0;
      (e += isMirrored
        ? angleAmps[angleAmpIndex].a *
          sketch.PI *
          sketch.noise(
            sketch.abs(s.x - 0.5 * ss) / (noiseScales[noiseScaleIndex].s * ss) +
              offset,
            sketch.abs(s.y - 0.5 * ss) / (noiseScales[noiseScaleIndex].s * ss) + offset
          )
        : angleAmps[angleAmpIndex].a *
          sketch.PI *
          sketch.noise(
            s.x / (noiseScales[noiseScaleIndex].s * ss) + offset,
            s.y / (noiseScales[noiseScaleIndex].s * ss) + offset
          )),
        isRotated && sketch.frameCount / flowLifespan > 0.5 && (e += 0.5 * sketch.PI);
      let t = 1;
      return (
        isStriped &&
          (t =
            sketch.floor((30 * parseFloat(sketch.frameCount)) / flowLifespan) % 17 == 16
              ? 1
              : -1),
        sketch.createVector(
          t * flowStepSize * ss * sketch.cos(e),
          t * flowStepSize * ss * sketch.sin(e)
        )
      );
    }
    sketch.noiseSeed(s),
      sketch.randomSeed(s),
      (isMirrored = sketch.random(1) < 0.2),
      (isRotated = sketch.random(1) < 0.15),
      (isStriped = sketch.random(1) < 0.1),
      (isInverted = sketch.random(1) < 0.05),
      (isWavey = sketch.random(1) < 0.01),
      (colorSchemeIndex = pwa(colorSchemes)),
      (noiseScaleIndex = pwa(noiseScales)),
      (angleAmpIndex = pwa(angleAmps)),
      (layoutIndex = pwa(layouts)),
      (offset = sketch.random(-99999, 99999)),
      (flows = []),
      (pg = sketch.createGraphics(ss, ss, sketch.WEBGL)).noStroke(),
      pg.blendMode(sketch.SUBTRACT),
      pg.background(242, 224, 201),
      (shaderPg = sketch.createGraphics(ss, ss, sketch.WEBGL)).noStroke(),
      (shaderPg.invertShader = shaderPg.createShader(invertVert, invertFrag)),
      shaderPg.shader(shaderPg.invertShader);
    let t = layouts[layoutIndex].l();
    colorIndex = sketch.floor(sketch.random(colorSchemes[colorSchemeIndex].palette.length));
    for (let s = 0; s < t.length; s++)
      flows.push(
        new Flow(
          e,
          !1,
          colorSchemes[colorSchemeIndex],
          t[s],
          layouts[layoutIndex].c
        )
      ),
        flows.push(
          new Flow(
            e,
            !0,
            colorSchemes[colorSchemeIndex],
            t[s],
            layouts[layoutIndex].c
          )
        );
  }
  sketch.draw = function() {
    pg.push(), pg.translate(-0.5 * ss, -0.5 * ss);
    let s = !0;
    for (let e = 0; e < flows.length; e++)
      flows[e].age < flows[e].lifespan &&
        (flows[e].update(),
        flows[e].isv
          ? flows[e].drawVariegated(pg, isWavey)
          : flows[e].drawGraded(pg, isWavey),
        (s = !1));
    pg.pop(),
      isInverted
        ? (shaderPg.invertShader.setUniform("tex", pg),
          shaderPg.rect(-0.5 * ss, -0.5 * ss, ss, ss),
          sketch.image(
            shaderPg,
            -0.5 * sketch.min(sketch.width, sketch.height),
            -0.5 * sketch.min(sketch.width, sketch.height),
            sketch.min(sketch.width, sketch.height),
            sketch.min(sketch.width, sketch.height)
          ))
        : sketch.image(
            pg,
            -0.5 * sketch.min(sketch.width, sketch.height),
            -0.5 * sketch.min(sketch.width, sketch.height),
            sketch.min(sketch.width, sketch.height),
            sketch.min(sketch.width, sketch.height)
          ),
      s && isRendering && (console.log("done!"), (isRendering = !1));
  }
  sketch.keyPressed = function(s) {
    32 == sketch.keyCode &&
      ((ss = sketch.min(maxSize, sketch.windowWidth, sketch.windowHeight)),
      (isRendering = !0),
      setupEnvironment()),
      68 == sketch.keyCode &&
        (isInverted
          ? sketch.save(shaderPg, tokenData.hash + ".png")
          : sketch.save(pg, tokenData.hash + ".png"));
  }
  sketch.windowResized = function() {
    sketch.resizeCanvas(maxSize, sketch.windowWidth, sketch.windowHeight);
  }

  return sketch;

  }

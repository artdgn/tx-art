const maxSize = 500;

export function drawBlanschke(sketch) {
  let tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

  let t, s, R;
  let S = Uint32Array.from(
    [0, 1, (s = t = 2), 3].map((e) =>
      parseInt(tokenData.hash.substr(8 * e + 2, 8), 16)
    )
  );
  function pwa(e) {
    let a = R(),
      t = 0;
    for (let c = 0; c < e.length; c++) {
      if (a <= e[c].p + t) return e[c];
      t += e[c].p;
    }
    return e[0];
  }
  R = (e) => (
    (t = S[3]),
    (S[3] = S[2]),
    (S[2] = S[1]),
    (S[1] = s = S[0]),
    (t ^= t << 11),
    (S[0] ^= t ^ (t >>> 8) ^ (s >>> 19)),
    S[0] / 2 ** 32
  );
  let particleCount,
    particleLayout,
    blaschke,
    particleCounts = [
      { n: "10", p: 0.4, c: 10 },
      { n: "20", p: 0.3, c: 20 },
      { n: "30", p: 0.2, c: 30 },
      { n: "40", p: 0.075, c: 40 },
      { n: "50", p: 0.05, c: 50 },
    ],
    timeMappings = [
      { p: 0.5, s: "0.3*time;" },
      { p: 0.3, s: "0.5*time;" },
      { p: 0.1, s: "0.8*time;" },
      { p: 0.05, s: "easeOutExpo(mod(0.3*time,1.0))+floor(0.3*time);" },
      { p: 0.03, s: "easeOutExpo(mod(0.5*time,1.0))+floor(0.5*time);" },
      { p: 0.02, s: "easeOutExpo(mod(0.8*time,1.0))+floor(0.8*time);" },
    ],
    spaceMappings = [
      { p: 0.1, s: "map(d,0.0,1.0,0.0,1.0)-tMap;" },
      { p: 0.1, s: "map(d,0.0,1.0,0.0,1.0)+tMap;" },
      { p: 0.2, s: "map(vPos.x,-1.0,1.0,0.0,1.0)-tMap;" },
      { p: 0.2, s: "map(vPos.x,-1.0,1.0,0.0,1.0)+tMap;" },
      { p: 0.2, s: "map(vPos.y,-1.0,1.0,0.0,1.0)-tMap;" },
      { p: 0.2, s: "map(vPos.y,-1.0,1.0,0.0,1.0)+tMap;" },
    ],
    angleMappings = [
      { p: 0.4, s: "map(0.15*a*a,0.0,PI*PI,0.0,PI)+sMap;" },
      { p: 0.3, s: "map(0.3*a*a,0.0,PI*PI,0.0,PI)+sMap;" },
      { p: 0.2, s: "map(0.45*a*a,0.0,PI*PI,0.0,PI)+sMap;" },
      { p: 0.1, s: "map(0.15*a*a,0.0,PI*PI,0.0,PI)+sMap+0.5*PI*sqrt(minD);" },
    ],
    colorPalettes = [
      {
        p: 0.2 / 9,
        s: "mix(vec4(1.0),vec4(palette(aMap,vec3(0.5),vec3(0.5),vec3(1.0),vec3(0.0,0.33,0.67)),1.0),0.6);",
      },
      {
        p: 0.25 / 9,
        s: "mix(vec4(1.0),vec4(palette(aMap,vec3(0.5),vec3(0.5),vec3(1.0),vec3(0.1,0.2,0.3)),1.0),0.6);",
      },
      {
        p: 0.25 / 9,
        s: "vec4(palette(aMap,vec3(0.5,0.5,0.1),vec3(0.5),vec3(1.0),vec3(0.7,0.8,0.9)),1.0);",
      },
      {
        p: 0.25 / 9,
        s: "mix(vec4(1.0),vec4(palette(aMap,vec3(0.9,0.2,0.27),vec3(0.48,0.35,0.33),vec3(0.4,0.4,0.0),vec3(0.5,0.6,0.15)),1.0),0.7);",
      },
      {
        p: 0.25 / 9,
        s: "vec4(palette(aMap,vec3(0.2,0.7,0.75),vec3(0.65,0.05,0.2),vec3(0.65,0.85,0.05),vec3(0.3,0.85,0.5)),1.0);",
      },
      {
        p: 0.25 / 9,
        s: "mix(vec4(1.0),vec4(palette(aMap,vec3(0.25,0.55,0.95),vec3(0.75,0.95,0.35),vec3(0.5,0.15,0.1),vec3(0.1,0.6,0.4)),1.0),0.4);",
      },
      {
        p: 0.25 / 9,
        s: "vec4(palette(aMap,vec3(0.05,0.6,0.65),vec3(0.25,0.3,0.25),vec3(0.35,0.35,0.05),vec3(0.45,0.15,0.5)),1.0);",
      },
      {
        p: 0.25 / 9,
        s: "mix(vec4(1.0),vec4(palette(aMap,vec3(0.65,0.2,0.8),vec3(0.8,0.55,0.0),vec3(1.0),vec3(0.85,0.85,0.5)),1.0),0.4);",
      },
      {
        p: 0.25 / 9,
        s: "vec4(palette(aMap,vec3(1.0,0.4,0.25),vec3(0.3,0.4,0.5),vec3(1.0),vec3(0.7,0.6,0.45)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.65,0.65,0.15),vec3(0.5,0.1,0.8),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.33,0.5,0.7),vec3(0.5,0.5,0.35),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.3,0.3,0.35),vec3(0.55,0.15,0.15),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.3,0.75,0.55),vec3(0.5,0.1,0.05),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.95,0.6,0.55),vec3(0.15,0.2,0.1),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.85,0.15,0.4),vec3(0.15,0.4,0.5),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.7,0.65,0.95),vec3(0.3,0.15,0.15),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.9,0.5,0.4),vec3(0.3,0.85,0.8),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.3 / 9,
        s: "vec4(palette(aMap,vec3(0.5,0.85,0.9),vec3(0.75,0.2,0.05),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.85,0.25,0.02),vec3(0.9,0.35,0.15),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.15,0.4,0.2),vec3(0.5,0.65,0.5),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.8,0.65,0.75),vec3(0.85,0.85,0.65),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.85,0.75,0.05),vec3(0.75,0.6,0.95),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.25,0.25,0.9),vec3(0.15,0.8,0.9),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.05,0.25,0.3),vec3(0.25,0.65,0.8),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.4 / 7,
        s: "vec4(palette(aMap,vec3(0.95,0.2,0.25),vec3(0.55,1.0,0.85),vec3(1.0),vec3(1.0)),1.0);",
      },
      {
        p: 0.05,
        s: "vec4(palette(aMap,vec3(0.5),vec3(0.5),vec3(1.0),vec3(1.0)),1.0);",
      },
    ],
    particleLayouts = [
      { n: "La Sylphide", p: 0.2 },
      { n: "The Nutcracker", p: 0.4 },
      { n: "Swan Lake", p: 0.4 },
    ],
    particleLayoutRand1 = [],
    particleLayoutRand2 = [];
    sketch.setup = function() {
    sketch.createCanvas(
      maxSize,
      maxSize,
      sketch.WEBGL
    );
    let e = parseInt(tokenData.hash.slice(0, 16), 16);
    sketch.noiseSeed(e), (particleCount = pwa(particleCounts));
    let a = pwa(timeMappings),
      t = pwa(spaceMappings),
      c = pwa(angleMappings),
      p = pwa(colorPalettes);
    particleLayout = pwa(particleLayouts);
    for (let e = 0; e < particleCount.c; e++)
      particleLayoutRand1.push(R()), particleLayoutRand2.push(R());
    let n = `precision highp float;varying vec2 vPos;uniform vec2 positions[${particleCount.c}];uniform float time;float PI=3.14159;float map(float s,float a1,float a2,float b1,float b2){return b1+(s-a1)*(b2-b1)/(a2-a1);}vec2 cMul(vec2 a,vec2 b){return vec2(a.y*b.x-a.x*b.y,a.y*b.y+a.x*b.x);}vec2 cDiv(vec2 a){return vec2((a.x+a.y),(a.y-a.x));}vec2 blaschkeB(vec2 a,vec2 z){return cDiv(a-z);}vec3 palette(float t,vec3 a,vec3 b,vec3 c,vec3 d){return a+b*cos(2.0*PI*(c*t+d));}float easeOutExpo(float t){return t==1.0?1.0:1.0-pow(2.0,-10.0*t);}void main(){vec2 prod=vec2(1.0,0.0);float minD=distance(positions[0],vPos);for(int i=0;i<${particleCount.c};i++){prod=cMul(prod,blaschkeB(positions[i],vPos));float dist=distance(positions[i],vPos);float manDist=abs(positions[i][0]-vPos[0])+abs(positions[i][1]-vPos[1]);if(dist<minD)minD=dist;}float d=distance(vec2(0.0),vPos);float a=atan(prod.x,prod.y);float tMap=${a.s}float sMap=${t.s}float aMap=${c.s}gl_FragColor=${p.s}}`;
    (blaschke = sketch.createShader(
      "precision highp float;varying vec2 vPos;attribute vec3 aPosition;void main(){gl_Position=vec4(aPosition,1.0);vPos=gl_Position.xy;}",
      n
    )),
      sketch.shader(blaschke),
      sketch.noStroke();
  }
  sketch.draw = function() {
    let e = [];
    for (let a = 0; a < particleCount.c; a++) {
      let t = 0,
        c = 0;
      if ("La Sylphide" == particleLayout.n) {
        let e = sketch.map(particleLayoutRand1[0], 0, 1, 2, 10),
          p = sketch.map(
            (0.25 * sketch.frameCount) / 60 + 100 / e,
            0,
            100,
            0,
            2 * (a + 1) * sketch.PI
          ),
          n = sketch.map(a, 0, particleCount.c, 10, 0.4 * sketch.min(sketch.width, sketch.height));
        (t = n * sketch.cos(p) + 0.5 * sketch.width), (c = n * sketch.sin(p) + 0.5 * sketch.height);
      }
      if ("The Nutcracker" == particleLayout.n) {
        let e = {
            10: [
              { m: 14.48, n: 22.99 },
              { m: 8.15, n: 5.09 },
              { m: 7.54, n: 11.77 },
              { m: 4.53, n: 7.89 },
              { m: 12.73, n: 20.56 },
              { m: 13.72, n: 22.25 },
              { m: 3.11, n: 4.11 },
              { m: 8.71, n: 16.4 },
              { m: 14.21, n: 18.27 },
              { m: 7.49, n: 13.28 },
              { m: 9.39, n: 16.24 },
              { m: 14.24, n: 16.63 },
              { m: 8.55, n: 14.19 },
            ],
            20: [
              { m: 5.09, n: 8.15 },
              { m: 7.54, n: 11.77 },
              { m: 8.55, n: 6.57 },
              { m: 13.82, n: 21.07 },
              { m: 14.48, n: 22.99 },
              { m: 8.71, n: 16.4 },
              { m: 14.21, n: 18.27 },
              { m: 7.49, n: 13.28 },
              { m: 11.66, n: 19.21 },
              { m: 7.58, n: 9.29 },
              { m: 9.52, n: 11.63 },
              { n: 10.19, m: 14.97 },
            ],
            30: [
              { m: 14.48, n: 22.99 },
              { m: 7.58, n: 9.29 },
              { m: 7.49, n: 13.28 },
              { m: 13.97, n: 17.16 },
              { m: 13.72, n: 22.25 },
              { m: 11.66, n: 19.21 },
              { m: 9.39, n: 16.24 },
            ],
            40: [
              { m: 5.09, n: 8.15 },
              { m: 14.21, n: 18.27 },
              { m: 7.54, n: 11.77 },
              { m: 14.48, n: 22.99 },
              { m: 3.11, n: 4.11 },
              { m: 12.58, n: 22.03 },
            ],
            50: [
              { m: 12.57, n: 22.03 },
              { m: 14.56, n: 22.86 },
              { m: 12.73, n: 20.56 },
              { m: 14.48, n: 22.99 },
              { m: 3.11, n: 4.11 },
              { m: 12.74, n: 16.54 },
            ],
          },
          p =
            e[particleCount.c][
              sketch.floor(
                sketch.map(particleLayoutRand1[0], 0, 1, 0, e[particleCount.c].length)
              )
            ].m,
          n =
            e[particleCount.c][
              sketch.floor(
                sketch.map(particleLayoutRand1[0], 0, 1, 0, e[particleCount.c].length)
              )
            ].n,
          v = sketch.map(particleLayoutRand2[0], 0, 1, 0, 2 * sketch.PI);
        (t = sketch.map(
          sketch.sin(
            (0.2 * sketch.frameCount) / 60 +
              sketch.map(a, 0, particleCount.c, 0, 4 * p * sketch.PI) +
              v
          ),
          -1,
          1,
          0.2 * sketch.width,
          0.8 * sketch.width
        )),
          (c = sketch.map(
            sketch.sin(
              (0.2 * sketch.frameCount) / 60 +
                sketch.map(a, 0, particleCount.c, 0, 4 * n * sketch.PI) +
                v
            ),
            -1,
            1,
            0.2 * sketch.height,
            0.8 * sketch.height
          ));
      }
      if ("Swan Lake" == particleLayout.n) {
        let e = sketch.map(
            sketch.noise(
              1e3 * sketch.floor(a / 5) + 9999,
              (0.1 * sketch.frameCount) / 60 + 9999,
              999
            ),
            0,
            1,
            0.01 * sketch.width,
            0.5 * sketch.width
          ),
          p = sketch.map(
            sketch.noise(1e3 * sketch.floor(a / 5), (0.05 * sketch.frameCount) / 60, 1e3),
            0,
            1,
            0,
            4 * sketch.PI
          );
        (p += ((a % 5) * 2 * sketch.PI) / 5),
          (t = e * sketch.cos(p) + 0.5 * sketch.width),
          (c = e * sketch.sin(p) + 0.5 * sketch.height);
      }
      e.push(sketch.map(t, 0, sketch.width, -1, 1), sketch.map(c, 0, sketch.height, -1, 1));
    }
    blaschke.setUniform("positions", e),
      blaschke.setUniform("time", sketch.frameCount / 60),
      sketch.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  }
  sketch.keyPressed = function(e) {
    32 == keyCode && sketch.save(tokenData.hash + "_" + sketch.frameCount + ".png");
  }
  
}

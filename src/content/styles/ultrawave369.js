import p5 from 'p5';

const maxSize = 500;

const tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };

export function drawUltrawave369(sketchId) {  
  new p5(drawSketch, sketchId);
}

function drawSketch(sketch) {

  let hashPairs = [];

  const windowWidth = maxSize;
  const windowHeight = maxSize;

  for (let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
  }

  let decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
  });

  let relCalc = 1024;
  let multiplier = 0;
  let agents = [];
  let amountAgents = 369;
  let waver = 0;
  let check = 0;
  let ranAttract = 0;
  let ranForceAgent = 0;

  let hashNoiser = [369];
  let noiseScale = 31;

  let color1;
  let color2;

  let colorMode;

  sketch.preload = function() {
    randomFromHash();
  }

  function randomFromHash() {

    ranAttract = sketch.map(decPairs[0], 0, 255, 0, 1);
    ranForceAgent = sketch.map(decPairs[1], 0, 255, 0, 1);
    waver = sketch.round(sketch.map(decPairs[2], 0, 255, 0, 9));

    if (waver == 0) {
      for (let i = 0; i < 369; i++) {
        let dec = sketch.float(i) / 369.0;
        let dm = dec * noiseScale;
        let fl = sketch.floor(dm);
        let cl = sketch.ceil(dm);
        let noiseCalc = hashNoise(fl, cl, dm - fl);
        hashNoiser[i] = noiseCalc;
      }
    }
    color1 = sketch.color(decPairs[3], decPairs[4], decPairs[5]);
    color2 = sketch.color(decPairs[6], decPairs[7], decPairs[8]);

    let cm = decPairs[9];
    if (cm <= 5) {
      colorMode = "WhiteOnBlack";
    }
    if (cm > 5 && cm <= 15) {
      colorMode = "BlackOnWhite";
    }
    if (cm > 15) {
      colorMode = "ColorFul";
    }


  }

  function hashNoise(fl, cl, dm) {

    let flVal = sketch.map(decPairs[fl], 0, 255, 0, 1);
    let clVal = sketch.map(decPairs[cl], 0, 255, 0, 1);
    let lerper = sketch.lerp(flVal, clVal, dm);
    let sineCalc = (1.0 + sketch.sin(2 * sketch.PI * lerper)) / 2.0;
    return sineCalc;
  }

  sketch.setup = function() {

    sketch.createCanvas(windowWidth, windowHeight);
    sketch.frameRate(100);

    let colB = sketch.lerpColor(color1, color2, 0.5);
    if (colorMode == "ColorFul") {
      sketch.background(sketch.red(colB), sketch.green(colB), sketch.blue(colB), 45);
    }
    if (colorMode == "BlackOnWhite") {
      sketch.background(244);
    }
    if (colorMode == "WhiteOnBlack") {
      sketch.background(0);
    }

    let ang = (2 * sketch.PI) / amountAgents;
    let center = sketch.createVector(windowWidth / 2, windowHeight / 2);

    let sizeCircle = 0;
    if (windowWidth > windowHeight) {
      sizeCircle = windowHeight * 0.45;
      multiplier = windowHeight / relCalc;

    } else {
      sizeCircle = windowWidth * 0.45;
      multiplier = windowWidth / relCalc;

    }

    for (let i = 0; i < amountAgents; i++) {
      let posAgent = sketch.createVector(0, 0);
      posAgent.x = sketch.sin(ang * i);
      posAgent.y = sketch.cos(ang * i);
      posAgent.mult(sizeCircle);
      posAgent.add(center);
      agents.push(new Agent());
      agents[i].attract = ranAttract;
      agents[i].forceAgent = ranForceAgent;
      agents[i].setPosition(posAgent, i);

    }

  }

  function Agent() {

    this.pos = sketch.createVector(0, 0);
    this.difLrp = sketch.createVector(0, 0);

    this.unit = 0;
    this.forceAgent = 0.9;
    this.attract = 0.4;
    this.cntr = 0.25;
    this.pointSize = 1.5;
    this.stepper = (1 / sketch.float(amountAgents)) * waver;

    this.setForce = function () {
      if (waver != 0) {
        this.siner = 1 + sketch.sin(2 * sketch.PI * (this.unit * this.stepper));
        this.siner /= 2;
        this.forceAgent = (this.siner * this.forceAgent) + this.forceAgent;
      } else {
        this.forceAgent = (hashNoiser[this.unit] * this.forceAgent) + this.forceAgent;
      }
    }

    this.setPosition = function (position, unt) {
      this.unit = unt;
      this.pos = position;
      this.setForce();

    }

    this.drawAgent = function (tar) {

      this.goal = sketch.createVector(this.pos.x, this.pos.y);

      this.center = sketch.createVector(windowWidth / 2, windowHeight / 2);
      this.center.sub(this.pos.x, this.pos.y);
      this.center.normalize();
      this.center.mult(this.cntr * multiplier);

      this.dif = sketch.createVector(0, 0);
      this.dif.add(this.center);

      this.otherP = sketch.createVector(tar.x, tar.y);
      this.difOther = this.otherP.sub(this.pos);
      this.difOther.normalize();
      this.difOther.mult((this.forceAgent + tar.z) * multiplier);
      this.dif.add(this.difOther);

      this.difLrp.lerp(this.dif, this.attract);

      this.goal.add(this.difLrp);

      this.pos = this.goal;

      if (colorMode == "ColorFul") {
        let relC = (sketch.frameCount / 2000.0);
        relC = ((1 - relC) * 75);

        let prog = this.unit / 369.0;

        if (waver != 0) {
          prog = (1.0 + sketch.sin(2 * sketch.PI * (prog * waver))) / 2.0;
        } else {
          prog = hashNoiser[this.unit];
        }

        let col = sketch.lerpColor(color1, color2, prog);

        sketch.noStroke();
        sketch.fill(sketch.red(col), sketch.green(col), sketch.blue(col), relC);

      }
      if (colorMode == "BlackOnWhite") {
        sketch.noStroke();
        sketch.fill(20, 0, 0, 35);
      }
      if (colorMode == "WhiteOnBlack") {
        sketch.noStroke();
        sketch.fill(255, 235, 220, 35);
      }

      sketch.ellipse(this.pos.x, this.pos.y, this.pointSize * multiplier, this.pointSize * multiplier);

    }

  }

  sketch.draw = function() {
    if (sketch.frameCount <= 2000) {

      for (let i = 0; i < amountAgents; i++) {
        let indexPrev = 0;

        if (i == 0) {
          indexPrev = amountAgents - 1;
        } else {
          indexPrev = i - 1;
        }

        let target = sketch.createVector(0, 0, 0);
        target.x = agents[indexPrev].pos.x;
        target.y = agents[indexPrev].pos.y;
        target.z = agents[indexPrev].forceAgent;
        agents[i].drawAgent(target);
      }
    }
  }
}

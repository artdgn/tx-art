const maxSize = 300;

export function squiggleDraw(sketch) {
  // grab hash
  let tokenData = { "hashes": [(window.location.href.match(/0x.{64}/) || [''])[0]] }

  let numHashes = tokenData.hashes.length;
  let hashPairs = [];
  for (let i = 0; i < numHashes; i++) {
    for (let j = 0; j < 32; j++) {
      hashPairs.push(tokenData.hashes[i].slice(2 + (j * 2), 4 + (j * 2)));
    }
  }
  let decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
  });

  let seed = parseInt(tokenData.hashes[0].slice(0, 16), 16);
  let color;
  let backgroundIndex = 0;
  let backgroundArray = [255, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0, 25, 50, 75, 100, 125, 150, 175, 200, 225];
  let index = 0;
  let ht;
  let wt = 2;
  let speed = 1;
  let segments;
  let amp = 1;
  let direction = 1;
  let loops = false;
  let startColor = decPairs[29];
  let reverse = decPairs[30] < 128;
  let slinky = decPairs[31] < 35;
  let pipe = decPairs[22] < 32;
  let bold = decPairs[23] < 15;
  let segmented = decPairs[24] < 30;
  let fuzzy = pipe && !slinky;

  let spread;
  sketch.setup = function () {
    const windowWidth = Math.min(maxSize, sketch.windowWidth);
    const windowHeight = Math.min(maxSize, sketch.windowHeight);
    let portrait = windowWidth < windowHeight;
    sketch.createCanvas(windowWidth > windowHeight * 3 / 2 ? windowHeight * 3 / 2 : windowWidth, windowWidth > windowHeight * 3 / 2 ? windowHeight : windowWidth * 2 / 3);
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", mouseClicked, false);
    sketch.colorMode(sketch.HSB, 255);
    segments = sketch.map(decPairs[26], 0, 255, 12, 20);
    ht = sketch.map(decPairs[27], 0, 255, 3, 4);
    spread = decPairs[28] < 3 ? 0.5 : sketch.map(decPairs[28], 0, 255, 5, 50);
    sketch.strokeWeight(sketch.height / 1200);
  }

  sketch.draw = function () {
    color = 0;
    let height = sketch.height;
    let width = sketch.width;
    sketch.background(backgroundArray[backgroundIndex]);
    let div = Math.floor(sketch.map(Math.round(decPairs[24]), 0, 230, 3, 20));
    let steps = slinky ? 50 : fuzzy ? 1000 : 200;
    sketch.translate((width / 2) - (width / wt / 2), height / 2);
    for (let j = 0; j < segments - 2; j++) {
      for (let i = 0; i <= steps; i++) {
        let t = i / steps;
        let x = sketch.curvePoint(width / segments / wt * j, width / segments / wt * (j + 1), width / segments / wt * (j + 2), width / segments / wt * (j + 3), t);
        let y = sketch.curvePoint(sketch.map(decPairs[j], 0, 255, -height / ht, height / ht) * amp, sketch.map(decPairs[j + 1], 0, 255, -height / ht, height / ht) * amp, sketch.map(decPairs[j + 2], 0, 255, -height / ht, height / ht) * amp, sketch.map(decPairs[j + 3], 0, 255, -height / ht, height / ht) * amp, t);
        let hue = reverse ? 255 - (((color / spread) + startColor + index) % 255) : (((color / spread) + startColor) + index) % 255;

        if (fuzzy) {
          sketch.noStroke();
          sketch.fill(hue, 255, 255, 20);
          let fuzzX = x + sketch.map(rnd(), 0, 1, 0, height / 10);
          let fuzzY = y + sketch.map(rnd(), 0, 1, 0, height / 10);
          if (sketch.dist(x, y, fuzzX, fuzzY) < height / 11.5) {
            sketch.circle(fuzzX, fuzzY, sketch.map(rnd(), 0, 1, height / 160, height / 16));
          }
        } else {
          if (slinky && pipe) {
            if (i == 0 || i == steps - 1) {
              sketch.fill(0);
            } else {
              sketch.noFill();
            }
            sketch.stroke(0);
            sketch.circle(x, y, (height / 7))
          }

          if (slinky) {
            if (i == 0 || i == steps - 1) {
              sketch.fill(hue, 255, 255);
            } else {
              sketch.noFill();
            }
            sketch.stroke(hue, 255, 255);
          } else {
            sketch.noStroke();
            sketch.fill(hue, 255, 255);
          }

          sketch.circle(x, y, bold && !slinky ? height / 5 : height / 13);

          if (segmented && !slinky && !bold) {
            if (i % div === 0 || i == 0 || i == steps - 1) {
              sketch.noStroke();
              sketch.fill(decPairs[25]);
              sketch.circle(x, y, height / 12);
            }
          }
        }
        color++;
      }
      seed = parseInt(tokenData.hashes[0].slice(0, 16), 16);
    }


    loops === true ? index = index + speed : index = index;
    if (sketch.keyIsDown(sketch.UP_ARROW)) {
      if (sketch.keyIsDown(sketch.SHIFT)) {
        if (speed < 20) {
          speed++;
        } else {
          speed = 20;
        }
      } else {
        if (speed < 20) {
          speed = speed + 0.1;
        } else {
          speed = 20;
        }
      }
    } else if (sketch.keyIsDown(sketch.DOWN_ARROW)) {
      if (sketch.keyIsDown(sketch.SHIFT)) {
        if (speed > 1) {
          speed--;
        } else {
          speed = 0.1;
        }
      } else {
        if (speed > 0.1) {
          speed = speed - 0.1;
        } else {
          speed = 0.1;
        }
      }
    }

  }

  function keyPressed() {
    if (keyCode === 32) {
      if (backgroundIndex < backgroundArray.length - 1) {
        backgroundIndex++;
      } else {
        backgroundIndex = 0;
      }
    }
  }

  function mouseClicked() {
    if (loops === false) {
      loops = true;
    } else {
      loops = false;
    }
  }

  function rnd() {


    seed ^= seed << 13;

    seed ^= seed >> 17;

    seed ^= seed << 5;

    return (((seed < 0) ? ~seed + 1 : seed) % 1000) / 1000;
  }
}

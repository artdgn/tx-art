import p5 from 'p5';
import { fidenzaDraw } from './fidenza.js'
import { eccentrics2Draw } from './eccentrics2'

const drawFunc = {
  "fidenza": fidenzaDraw,
  "eccentrics2": eccentrics2Draw,
}

function main() {
  // create the div for the sketch
  const contentDiv = document.getElementById('content');
  const headerElements = document.getElementsByTagName('h1');
  const insertUnder = contentDiv || (headerElements.length && headerElements[0].parentElement);

  const sketchDiv = document.createElement('div');
  sketchDiv.id = "p5sketch";
  sketchDiv.style.textAlign = 'center';
  insertUnder.insertBefore(sketchDiv, insertUnder.children[0])

  // draw the sketch
  chrome.storage.local.get(
    { storedSettings: {} },
    (stored) => {
      if (stored.storedSettings.enabled) {
        // docs for global vs instance drawing: https://github.com/processing/p5.js/wiki/Global-and-instance-mode
        const sketch = new p5(drawFunc[stored.storedSettings.style], 'p5sketch');
      }
    });
    
  // watch for option changes
  chrome.storage.onChanged.addListener((changes) => {
    if ('storedSettings' in changes) {
      window.location.reload();
    }
  });
}

main();

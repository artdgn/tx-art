import p5 from 'p5';
import { fidenzaDraw } from './fidenza.js'

function main() {
  // create the div for the sketch
  const contentDiv = document.getElementById('content');
  const sketchDiv = document.createElement('div');
  sketchDiv.id = "p5sketch";
  sketchDiv.style.textAlign = 'center';
  contentDiv.insertBefore(sketchDiv, contentDiv.children[0])

  // draw the sketch
  chrome.storage.local.get(
    { storedSettings: {} },
    (stored) => {
      if (stored.storedSettings.enabled) {
        if (stored.storedSettings.style == "fidenza") {
          // docs for global vs instance drawing: https://github.com/processing/p5.js/wiki/Global-and-instance-mode
          const sketch = new p5(fidenzaDraw, 'p5sketch');
        }
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

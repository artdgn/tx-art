import p5 from 'p5';
// drawing
import { drawFuncs } from './styles'
// settings
import { defaultSettings } from '../settings.js'

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
    { storedSettings: defaultSettings },
    (stored) => {
      if (stored.storedSettings.enabled) {
        // docs for global vs instance drawing: https://github.com/processing/p5.js/wiki/Global-and-instance-mode
        const style = stored.storedSettings.style;
        const drawFunc = drawFuncs[style];
        if (!drawFunc) {
          throw Error(`No draw function for style ${style}`)
        }
        // ta-da!
        new p5(drawFunc, 'p5sketch');
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

import { fidenzaDraw } from './fidenza.js'



function main() {
  let canvas;

  chrome.storage.local.get(
    { storedSettings: {} },
    (stored) => {
      if (stored.storedSettings.enabled) {
        if (stored.storedSettings.style == "fidenza") {
          canvas = fidenzaDraw();
        }
        console.log(canvas);
      }
    });
  
  // just the main container of the page
  const mainDiv = document.getElementById('content');
  // if we'd have the canvas (and if if it were drawn) - this might work
  // mainDiv.insertBefore(canvas, mainDiv.children[0])

  // watch for option changes
  chrome.storage.onChanged.addListener((changes) => {
    if ('storedSettings' in changes) {
      window.location.reload();
    }
  });
}

main();

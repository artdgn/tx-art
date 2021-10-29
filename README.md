# Tx-Art: <a href="https://chrome.google.com/webstore/detail/tx-art/aedfdcjgbmjjjppcjkndjledefplpfbo"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" width="21"></a> <a href="https://chrome.google.com/webstore/detail/tx-art/aedfdcjgbmjjjppcjkndjledefplpfbo"><img src="https://brave.com/wp-content/uploads/2019/03/brave-logo.png" width="21"></a> <a href="https://addons.mozilla.org/en-GB/firefox/addon/tx-art/"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" width="24"></a>
*"Every tx: a painting."*

![](https://github.com/artdgn/artdgn.github.io/raw/master/images/tx-art-5.gif)

## Supported styles:
[ArtBlocks](https://artblocks.io) collections styles:
- `fidenza`: [**Fidenza** by Tyler Hobbs](https://artblocks.io/project/78)
- `eccentrics2`: [**Eccentrics 2: Orbits** by Radix](https://artblocks.io/project/139)
- `energy`: [**EnergySculpture** by Beervangeer](https://artblocks.io/project/26)
- `squiggle`: [**Chromie Squiggle** by Snowfro](https://artblocks.io/project/0) 
- `skulptuur`: [**Skulptuur** by Piter Pasma](https://artblocks.io/project/173) 
- `gravity`: [**Gravity 12** by Jimmy Herdberg](https://artblocks.io/project/96)
- `watercolor`: [**Watercolor Dreams** by NumbersInMotion](https://artblocks.io/project/15)
- `utopia`: [**Utopia** ge1doot](https://artblocks.io/project/59)
- `void`: [**Void** Alexis André](https://artblocks.io/project/42)
- `rinascita`: [**Rinascita** Stefano Contiero](https://artblocks.io/project/121)
- `alien-insects`: [**Alien Insects** Shvembldr](https://artblocks.io/project/137)
.. other styles TBA (see below how to add styles)

## Supported explorers:
- Supports most block-explorers for EVM compatible chains. If enabled, it activates on any `*/tx/*` like URL, and takes the hash out of the URL itself.

## Installing the extension

- <a href="https://chrome.google.com/webstore/detail/tx-art/aedfdcjgbmjjjppcjkndjledefplpfbo"> Download for Chrome <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" width="21"> or Brave <img src="https://brave.com/wp-content/uploads/2019/03/brave-logo.png" width="21"> </a>

- <a href="https://addons.mozilla.org/en-GB/firefox/addon/tx-art/"> Download for Firefox <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" width="24"></a>

- Or build and use from source by following instruction below for "Using local extension".

## How?
- The hash of the transaction being viewed is used as input to a generative art `p5.js` algorithm of choice, and the piece is added to the page.
- The piece generaged is NOT an NFT, and is not part of any collection. It's just one of an infinite* amount of pieces that can be generated from the selected algorithm.
- This also means that this works for transactions that don't exist, or are still pending. Enjoy some fine art while you wait.
> \* - not mathematically infinite, just very large in practical terms.

## Privacy
There is just one dependency at runtime - [`p5.js` package](https://p5js.org/), which is packaged with the extension (not injected from CDN).

## Is this a good thing?
- These Generative Art algorithms have in them an infinite* amount of beutiful and unique pieces.
- Limiting our experience to just the tiny fraction of the pieces that was minted into the collections cannot be a good thing.
- Just as "Right click -> Save As" doesn't take away anything from an NFT anymore than taking a picture of the Mona Lisa takes from the Luvre, only makes it more valuable; 
So, generating additional pieces from the algorithms can't take away from the NFTs - only make them even more valuable.

## Using local extension

### Build
<details><summary>Building instructions</summary>

- Clone repo.
- To install in local environment: `npm install`
- Building: `npm start` for development, `npm run build` for packaging into a zip file.
</details>

### Load browser extension into Chrome or Firefox:
<details><summary>Chrome / Brave</summary>

- Extensions -> Enable "developer mode" -> 
"Load unpacked extensions" -> Navigate to `/dist` folder in this project.
- To update (on code changes): and go to extension details and press update / reload.
- Docs: [Chrome docs](https://developer.chrome.com/extensions/getstarted#manifest)
</details>

<details><summary>Firefox</summary>

- To load for development (will be removed after browser close, but easier to reload on code change):
    - Go to `about:debugging` -> This Firefox -> "Load Temprorary Add-on.." -> 
    Navigate to `/dist` -> select manifest file.
    - Press "Reload" to update on code changes.
- To load for continuous usage (persistent after closing):
    - Go to `about:config` and set `xpinstall.signatures.required` to False to be able to load a local extension.
    - Run `npm run-script build` to package the extensions into a zip file.
    - Go to `about:addons` -> "gear" icon -> "Install add-on from file.." -> 
    Navigate to `/extension/` folder in this project -> choose `tx-art.zip`.
    - To update (on code changes): repeat previous two steps.
- Docs: [Firefox docs](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
</details>


# Adding new styles

<details><summary>Instructions</summary>

1. Choose a new style and add it in:
  - `README.md` list of styles.
  - `popup.html` select box of styles names and identifiers.
  - Copy one of the existing style files from `/styles` into a new `styles/YourNewStyle.js` file with a new function name.
  - Import the new file in `styles/index.js` and add the new function into the style name mapping in the `drawFuncs` object.
2. Replace the previous JS code in the new style function with the correct code for the style:
  - Leave the `let tokenData = { hash: (window.location.href.match(/0x.{64}/) || [""])[0] };` line as is (or adjust it as needed if the used format is different).
  - Get the "live" code from a sample piece's ArtBlocks "live" page and add it after that line. E.g. go to https://generator.artblocks.io/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/27000294 -> view source.
  - Format that code using `prettier` ("format selection") so that it can be read and edited.
3. **The hard part**: making the code work:  
  - The editing process is iterative. Run `npm start` to build the extension on code changes. And do this until it works:
    - Go to the browser extensions page (see above on how to load extensions locally) and reload the extension.
    - Reload a sample page and watch the errors in the browser dev console.
    - Fix the code and check more errors.
  - Common patterns of fixing the code:
    - A lot of the live code is written to work in "global" mode, whereas in the extension it needs to be edited to work in "instance" mode. https://github.com/processing/p5.js/wiki/Global-and-instance-mode is the guide, and `p5` API docs is the tool to guide the editing process.  
    - If it's a `p5` piece: global `p5` functions and variable like `createCanvas()` or `HSB` need to be replaced with instance equivalents, e.g. `sketch.createCanvas()` if `sketch` is the instance name in that scope. Look for functions that aren't defined in the scope - add `sketch.`.
    - If it's a `webgl` piece: create a canvas element like in `skulptuur.js` first.
    - Some pieces run an infinite loop with not much changes, you might want to limit those.
    - Some pieces use the `tokenId` in some way (most don't), so it needs to be "made" up for those. Check an example in `draw720minutes.js`.
  - When it finally works, check it on more sample pages: some styles have various conditional flows that may not have been tested on the previous sample page.
4. Limiting the canvas size:
  - Find the "height" and "width" controls of the code and replace them with `maxSize` constant.

</details>

# Tx-Art:
*"Every tx: a painting."*

![](https://github.com/artdgn/artdgn.github.io/raw/master/images/tx-art-4.gif)

## Supported styles:
- [Art Blocks collection **Fidenza** by Tyler Hobbs](https://artblocks.io/project/78): `fidenza` style.
- [Art Blocks collection **Eccentrics 2: Orbits** by Radix](https://artblocks.io/project/139): `eccentrics2` style. 
- [Art Blocks collection **EnergySculpture** by Beervangeer](https://artblocks.io/project/26): `energy`.
- [Art Blocks collection **Chromie Squiggle** by Snowfro](https://artblocks.io/project/0): `squiggle` style. 
- [Art Blocks collection **Skulptuur** by Piter Pasma](https://artblocks.io/project/173): `skulptuur` style. 
- [Art Blocks collection **Gravity 12** by Jimmy Herdberg](https://artblocks.io/project/96): `gravity` style. 
- [Art Blocks collection **Watercolor Dreams** by NumbersInMotion](https://artblocks.io/project/59): `gravity` style. 
- .. other styles TBA

## Supported explorers:
- Supports most block-explorers for EVM compatible chains. If enabled, it activates on any `*/tx/*` like URL, and takes the hash out of the URL itself.

## Is this a good thing?
- These Generative Art algorithms have in them an infinite* amount of beutiful and unique pieces.
- Limiting our experience to just the tiny fraction of the pieces that was minted into the collections cannot be a good thing.
- Just as "Right click -> Save As" doesn't take away anything from an NFT anymore than taking a picture of the Mona Lisa takes from the Luvre, only makes it more valuable; 
So, generating additional pieces from the algorithms can't take away from the NFTs - only make them even more valuable.

## How?
- The hash of the transaction being viewed is used as input to a generative art `p5.js` algorithm of choice, and the piece is added to the page.
- The piece generaged is NOT an NFT, and is not part of any collection. It's just one of an infinite* amount of pieces that can be generated from the selected algorithm.
> \* - not mathematically infinite, just very large in practical terms.

## Privacy
There is just one dependency at runtime - [`p5.js` package](https://p5js.org/), which is packaged with the extension (not injected from CDN).


## Installing the extension

- <a href="https://chrome.google.com/webstore/"> Not yet published for Chrome / Brave - link TBA <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Chrome_icon_%28September_2014%29.svg" width="21"></a>

- <a href="https://addons.mozilla.org/en-US/firefox/addon/"> Not yet published for Firefox - link TBA <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" width="24"></a>

- Or build and use from source by following instruction below for "Using local extension".

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

import { defaultSettings } from '../settings.js'

function getById(id) {
  return document.getElementById(id);
}

function saveOptions(event) {  
  // save the options
  chrome.storage.local.get(
    { storedSettings: defaultSettings },
    (stored) => {
      // const storedSettings = stored.storedSettings;

      const newSettings = {
        enabled: getById('selected-enabled-check').checked,
        style: getById('selected-style').value,
        sizeOverride: getById('selected-size-override').value.trim(),
      };
 
      chrome.storage.local.set({ storedSettings: newSettings });
      
      // sync view in case view needs to change
      loadOptions(); 
    });
}

function loadOptions() {
  chrome.storage.local.get(
    { storedSettings: defaultSettings },
    (stored) => {
      const storedSettings = stored.storedSettings;
        getById('selected-enabled-check').checked = storedSettings.enabled;
        getById('selected-style').value = storedSettings.style;
        getById('selected-size-override').value = storedSettings.sizeOverride;

      // make sure collection link matches
      setCollectionLink();
    }
  );
}

function setCollectionLink() {
  const link = getById('link-to-collection');
  const selected = getById('selected-style').value;
  const projectId = {
    'fidenza': 78,
    'eccentrics2': 139,
    'energy': 26,
    'squiggle': 0,
    'skulptuur': 173,
    'gravity': 96,
    'watercolors': 59,
    'utopia': 15,
    'void': 42,
    'rinascita': 121,
    'alien-insects': 137,
    'ultrawave369': 157,
    'meridian': 163,
    'blanschke-ballet': 167,
    'flowers': 116
    }[selected];
  link.href = `https://artblocks.io/project/${projectId}`
  console.log(link.href)
}

function main() {
  // options
  loadOptions();
  // add options listeners
  document
      .querySelectorAll('.stored-options')
      .forEach(el => el.onchange = saveOptions);
}

main();


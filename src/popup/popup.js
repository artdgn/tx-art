import { defaultSettings } from '../settings.js'

function getById(id) {
  return document.getElementById(id);
}

function saveOptions(event) {
  chrome.storage.local.get(
    { storedSettings: defaultSettings },
    (stored) => {
      // const storedSettings = stored.storedSettings;

      const newSettings = {
        enabled: getById('selected-enabled-check').checked,
        style: getById('selected-style').value,
      };
 
      chrome.storage.local.set({ storedSettings: newSettings });
      
      loadOptions(); // sync view in case view needs to change
    });
}

function loadOptions() {
  chrome.storage.local.get(
    { storedSettings: defaultSettings },
    (stored) => {
      const storedSettings = stored.storedSettings;
        getById('selected-enabled-check').checked = storedSettings.enabled;
        getById('selected-style').value = storedSettings.style;
    }
  );
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


const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error(err);
    return null;
  }
}

setLocalStorageKey('nums', [1, 2, 3])
const storedArr = getLocalStorageKey('nums');

console.log(storedArr); // [1, 2, 3]

// const getPalette = () => getLocalStorageKey
const setPalette = () => setLocalStorageKey()
const getPalettes = () => {}

export { setLocalStorageKey, getLocalStorageKey };

// getPalettes()
// Always return an array, either full of palettes or empty, this will make your downstream iterator functions a lot cleaner
// setPalettes(newPalettes)
// Replace whatever palettes are saved in localStorage with
// initPalettesIfEmpty()
// This one is important! If you don't have any palettes on page load, then you should add the default palettes to localStorage. To be clear, that's on page load, not the second they have 0 palettes. So if the user deletes each palette and then refreshes the page, suddenly the defaults will appear.
// addPalette(newPalette)
// Add the palette to your saved localStorage palettes.
// removePalette(paletteUuid)
// Remove the palette from your saved localStorage palettes as found by the palette's uuid
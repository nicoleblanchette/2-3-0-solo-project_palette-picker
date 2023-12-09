import defaultPalettes from '../palettes.json';
import { createPaletteCard } from './dom';

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

export const getPalettes = () => getLocalStorageKey('savedPalettes')
export const setPalettes = (palettes) => setLocalStorageKey('savedPalettes', palettes)

export const initPalettesIfEmpty = () => { 
  console.log(getPalettes())
  console.log('help')
    for (const palette of defaultPalettes) {
      console.log(palette)
        console.log(palette)
      createPaletteCard(palette)
    // console.log(getPalettes)
    }
  setPalettes([...defaultPalettes])
  // console.log(getPalettes)
}

export const restoreFromLocal = () => {
  try {
    if (getPalettes().length > 1) {
      for (const palette of getPalettes()) {
        createPaletteCard(palette);
        console.log('hello?');
      }
    } else {
      initPalettesIfEmpty()
    }
  } catch {
    console.log('whoops')
    initPalettesIfEmpty()
    }
}
  

export const addPalette = (newPalette) => {
  const savedPalettes = getPalettes();
  console.log(savedPalettes)
  setPalettes([...savedPalettes, newPalette]);
  console.log(localStorage);
};

export const removePalette = (paletteUuid) => {
  const paletteArr = (getPalettes());
  const removedPalette = paletteArr.findIndex((palette) => palette.uuid === paletteUuid);
  paletteArr.splice(removedPalette, 1);
  setPalettes([...paletteArr]);
}

// !!getPalettes()
// Always return an array, either full of palettes or empty, this will make your downstream iterator functions a lot cleaner

// !!setPalettes(newPalettes)
// Replace whatever palettes are saved in localStorage with

// initPalettesIfEmpty()
// This one is important! If you don't have any palettes on page load, then you should add the default palettes to localStorage. 
//To be clear, that's on page load, not the second they have 0 palettes. So if the user deletes each palette and then refreshes the page,
// suddenly the defaults will appear.

// !!addPalette(newPalette)
// Add the palette to your saved localStorage palettes.

// removePalette(paletteUuid)
// Remove the palette from your saved localStorage palettes as found by the palette's uuid

// const main = () => {
//   initPalettesIfEmpty()
//   restoreFromLocal();
// };

// main()
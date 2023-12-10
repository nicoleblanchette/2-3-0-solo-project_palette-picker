import defaultPalettes from '../palettes.json';
import { createPaletteCard } from './dom';

const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getPalettes = () => getLocalStorageKey('savedPalettes');
export const setPalettes = (palettes) => setLocalStorageKey('savedPalettes', palettes);

export const initPalettesIfEmpty = () => {
  console.log(getPalettes());
  for (const palette of defaultPalettes) {
    console.log(palette);
    console.log(palette);
    createPaletteCard(palette);
  }
  setPalettes([...defaultPalettes]);
};

export const restoreFromLocal = () => {
  try {
    if (getPalettes().length > 0) {
      for (const palette of getPalettes()) {
        createPaletteCard(palette);
        console.log('hello?');
      }
    } else {
      initPalettesIfEmpty();
    }
  } catch {
    console.log('whoops');
    initPalettesIfEmpty();
  }
};
  

export const addPalette = (newPalette) => {
  const savedPalettes = getPalettes();
  setPalettes([...savedPalettes, newPalette]);
};

export const removePalette = (paletteUuid) => {
  const paletteArr = (getPalettes());
  const removedPalette = paletteArr.findIndex((palette) => palette.uuid === paletteUuid);
  paletteArr.splice(removedPalette, 1);
  setPalettes([...paletteArr]);
};
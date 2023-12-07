import './style.css';
import { v4 as uuidv4 } from 'uuid';
import palettes from '../palettes.json';

//misc.
const create = (str) => document.createElement(`${str}`)

const paletteTemp = (temp) => {
  if (temp === 'neutral') return '#8c8c8c'
  if (temp === 'warm') return '#bc3925'
  return '#2369c4'
}

//for createPaletteCard
const addTitle = (name) => {
  const title = create('h3');
  title.textContent = name;
  return title;
};

const insertColor = (color) => {
  const colorPreview = create('div');
  colorPreview.style.backgroundColor = color;
  colorPreview.className = 'color-preview';

  const sample = create('p');
  sample.textContent = 'Sample';
  colorPreview.append(sample);

  const textStr = create('span');
  textStr.textContent = ' Text';
  textStr.className = 'text-string';
  sample.append(textStr);

  return colorPreview;
};

const allowCopy = (color) => {
  const button = create('button');
  button.className = 'copy-button';
  button.textContent = `Copy ${color}`;
  return button;
};

const addDelete = () => {
  const button = create('button')
  button.textContent = 'Delete'
  return button
}

const addTemp = (tone) => {
  const temp = create('div');
  temp.style.backgroundColor = (paletteTemp(tone));
  const tempText = create('p');
  tempText.textContent = tone;
  temp.append(tempText);
  return temp;
};

//for showPalettes
const createPaletteCard = (palette) => {
  const div = create('div');
  div.className = 'palette';
  
  div.append(addTitle(palette.title));
  
  for (const color of palette.colors) {
    div.append(insertColor(color));
    div.append(allowCopy(color))
  };

  div.append(addDelete())
  div.append(addTemp(palette.temperature))
  
  return div;
};
  
  //anything below needed by main 
  
const showPalettes = () => {
  const paletteList = document.querySelector('#palette-list');
  for (const palette of palettes) {
    const card = create('li');
    card.append(createPaletteCard(palette));
    paletteList.append(card);
  }
};

  // experimental
  // a randomizer would be cool, both colors and names
const showDefaultPalettes = () => {
  //maybe make a backup file is the palette length is 0?
};

const main = () => {
  showPalettes();
};

main();
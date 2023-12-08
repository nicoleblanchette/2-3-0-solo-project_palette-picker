import './style.css';
import { v4 as uuidv4 } from 'uuid';
import palettes from '../palettes.json';

const paletteList = document.querySelector('#palette-list');
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
  button.type = 'button'
  button.textContent = `Copy ${color}`;
  button.dataset.color = color
  return button;
};

const addDelete = () => {
  const button = create('button')
  button.className = 'delete'
  button.type = 'button'
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
  const card = create('li');
  card.className = 'card'
  card.id = palette.uuid
  const div = create('div');
  div.className = 'palette';
  
  div.append(addTitle(palette.title));
  
  for (const color of palette.colors) {
    div.append(insertColor(color));
    div.append(allowCopy(color))
  };

  div.append(addDelete())
  div.append(addTemp(palette.temperature))

  card.append(div)
  paletteList.append(card);
};
  
  //anything below needed by main 
  
const showDefaultPalettes = () => {
  for (const palette of palettes) {
    createPaletteCard(palette);
  }
};

  // experimental
  // a randomizer would be cool, both colors and names

const main = () => {
  showDefaultPalettes();
};

main();

export {createPaletteCard}
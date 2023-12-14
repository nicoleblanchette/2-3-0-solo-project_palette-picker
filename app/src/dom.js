import './style.css';

const paletteList = document.querySelector('#palette-list');

const create = (str) => document.createElement(`${str}`)

const paletteTemp = (temp) => {
  if (temp === 'neutral') return '#2b2a33'
  if (temp === 'warm') return '#de48ab'
  return '#00BFB2'
}

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
  const button = create('button');
  button.className = 'delete';
  button.type = 'button';
  button.textContent = 'Delete';
  return button;
};

const addTemp = (tone) => {
  const temp = create('div');
  temp.style.backgroundColor = (paletteTemp(tone))
  const tempText = create('p');
  tempText.textContent = tone;
  temp.append(tempText);
  return temp;
};

export const createPaletteCard = (palette) => {
  const card = create('li');
  card.className = 'card';
  card.id = palette.uuid;
  const div = create('div');
  div.className = 'palette';
  
  div.append(addTitle(palette.title));
  
  const colorSamples = create('div');
  colorSamples.id = 'color-samples';
  for (const color of palette.colors) {
    colorSamples.append(insertColor(color));
    colorSamples.append(allowCopy(color));
  };
  div.append(colorSamples);

  div.append(addDelete());
  div.append(addTemp(palette.temperature));
  div.classList.add(palette.temperature);

  card.append(div);
  paletteList.append(card);
};

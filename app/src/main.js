import { createPaletteCard } from './dom.js'
import { setPalettes, getPalettes, addPalette, removePalette, restoreFromLocal } from './data-layer.js'
import { v4 as uuidv4 } from 'uuid';
import { uniqueNamesGenerator, adjectives, colors, animals, names } from 'unique-names-generator';

const savedPalettes = [];


const randomTitle = () => {
  const config = {
    dictionaries: [adjectives, colors, animals, names],
    separator: ' ',
    style: 'capital',
    length: 3
  };
  return uniqueNamesGenerator(config);
};

const handleRandomTitle = () => {
  const title = document.querySelector('#palette-title');
  title.value = randomTitle();
};

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const handleRandomColor = (e) => {
  const colorValue = document.querySelector(`#color${e.target.id}`);
  colorValue.value = '#' + randomColor();
};

const handleRandomAll = (e) => {
  const allColors = document.querySelectorAll('[type|=color]');
  allColors.forEach((color) => color.value = '#' + randomColor());
};

const handleAddSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target));
  formObj.colors = [formObj.color1, formObj.color2, formObj.color3];
  formObj.uuid = uuidv4();

  createPaletteCard(formObj);

  savedPalettes.push(formObj);
  if (!getPalettes()) {
    setPalettes([formObj]);
  } else {
    addPalette(formObj);
  }

  e.target.reset();
};

const handleCopy = (e) => {
  if (e.target.matches('.copy-button')) {
    navigator.clipboard.writeText(e.target.dataset.color);
    e.target.classList.add('copied');
    e.target.textContent = 'Copied hex!';
    setTimeout(() => {
      e.target.textContent = `Copy ${e.target.dataset.color}`;
      e.target.classList.remove('copied');
    }, 1000);
  }
};


const handleDelete = (e) => {
  if (e.target.matches('.delete')) {
    const deletedPalette = e.target.parentElement.parentElement;
    console.log(deletedPalette.id);
    removePalette(deletedPalette.id);
    deletedPalette.remove();
  }
};

const main = () => {
  document.addEventListener('DOMContentLoaded', restoreFromLocal);
  document.querySelector('#palette-form').addEventListener('submit', handleAddSubmit);
  document.querySelector('#palette-list').addEventListener('click', handleCopy);
  document.querySelector('#palette-list').addEventListener('click', handleDelete);
  document.querySelectorAll('.randomize').forEach((button) => button.addEventListener('click', handleRandomColor));
  document.querySelector('#randomize-all').addEventListener('click', handleRandomAll);
  document.querySelector('#no-creativity').addEventListener('click', handleRandomTitle);
};

main();

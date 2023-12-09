import { createPaletteCard } from './dom.js'
import { setPalettes, getPalettes, addPalette, removePalette, initPalettesIfEmpty, restoreFromLocal } from './data-layer.js'
import { v4 as uuidv4 } from 'uuid';

const savedPalettes = []

const handleAddSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target))
  formObj.colors = [formObj.color1, formObj.color2, formObj.color3]
  formObj.uuid = uuidv4()

  createPaletteCard(formObj)
  savedPalettes.push(formObj)
  if (!getPalettes()){
    setPalettes([formObj])
  } else {
    addPalette(formObj)
  }

  e.target.reset()
}

const handleCopy = (e) => {
  if (e.target.matches('.copy-button')) {
    navigator.clipboard.writeText(e.target.dataset.color);
    e.target.classList.add('copied');
    e.target.textContent = 'Copied hex!';
    setTimeout(() => {
      e.target.textContent = `Copy ${e.target.dataset.color}`;
      e.target.classList.remove('copied')
    }, 1000);
  }
};


const handleDelete = (e) => {
  if (e.target.matches('.delete')){
    console.log('wahoo!')
    console.log(e)
    console.log(e.target.parentElement.parentElement)
    const deletedPalette = e.target.parentElement.parentElement
    console.log(deletedPalette.id)
    removePalette(deletedPalette.id)
    deletedPalette.remove()
   
  }
}

const main = () => {
  // document.addEventListener('DOMContentLoaded', initPalettesIfEmpty)
  document.addEventListener('DOMContentLoaded', restoreFromLocal)
  document.querySelector('#palette-form').addEventListener('submit', handleAddSubmit)
  document.querySelector('#palette-list').addEventListener('click', handleCopy)
  document.querySelector('#palette-list').addEventListener('click', handleDelete)

};

main();
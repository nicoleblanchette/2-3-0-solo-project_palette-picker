import { createPaletteCard } from './dom.js'
import { setLocalStorageKey, getLocalStorageKey } from './data-layer.js'

const handleAddSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target))
  formObj.colors = [formObj.color1, formObj.color2, formObj.color3]
  createPaletteCard(formObj)
  // setLocalStorageKey

  console.log(formObj)
  console.log(localStorage)

  e.target.reset()
}



const main = () => {
  document.querySelector('#palette-form').addEventListener('submit', handleAddSubmit)
};

main();
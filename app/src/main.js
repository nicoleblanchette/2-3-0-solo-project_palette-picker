import './style.css';
import { v4 as uuidv4 } from 'uuid';
import palettes from '../palettes.json';

const unknown = () => {
  for (const palette of palettes) {
   
  }
}

const createPaletteCard = (palette) => {
  const div = document.createElement('div')
  div.className = 'palette'
  // const li = document.createElement('li')
  const p1 = document.createElement('p')
  const p2 =  document.createElement('p')
  console.log(palette)
  p1.textContent = palette.colors
  p2.textContent = palette.temperature
  document.body.append(div)
  div.append(p1, p2)
  
}
//for each palette obj in the arr
//add it as an li to the ul
const showPalettes = () => {
  //append palettes...
  for (const palette of palettes) {
    createPaletteCard(palette)
  }
}


const showDefaultPalettes = () => {
  //maybe make a backup file is the palette length is 0?
}
const main = () => {
  const newEl = document.createElement('p')
  newEl.textContent = JSON.stringify(palettes)
  document.body.append(newEl)
  console.log(palettes)
  showPalettes()
};

main()
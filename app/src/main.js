

const handleAddSubmit = (e) => {
  e.preventDefault();

  const formObj = Object.fromEntries(new FormData(e.target))
  // formObj.colors = [formObj.color1, formObj.color2, formObj.color3]
  // delete formObj.color1
  // delete formObj.color2
  // delete formObj.color3

  console.log(e.target)
  console.log(formObj)

}



const main = () => {
  document.querySelector('#palette-form').addEventListener('submit', handleAddSubmit)
};

main();
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

setLocalStorageKey('nums', [1, 2, 3])
const storedArr = getLocalStorageKey('nums');

console.log(storedArr); // [1, 2, 3]

// const getPalette = () => getLocalStorageKey
const setPalette = () => setLocalStorageKey()

export { setLocalStorageKey, getLocalStorageKey}
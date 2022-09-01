import arrayGenerator from '../sort/arrayGenerator.js';

function recursive_binary_search(
  key,
  sortedArray,
  low = 0,
  high = sortedArray.length - 1
) {
  if (low === high) {
    if (sortedArray[low] === key) {
      return low;
    } else {
      return null;
    }
  } else {
    const mid = Math.floor((low + high) / 2);
    if (key === sortedArray[mid]) {
      return mid;
    } else if (key < sortedArray[mid]) {
      return recursive_binary_search(key, sortedArray, low, mid - 1);
    } else {
      return recursive_binary_search(key, sortedArray, mid + 1, high);
    }
  }
}

const sortedArray = arrayGenerator(20, 500).sort((a, b) => a - b);
const key = sortedArray[Math.round(Math.random() * 19)];
console.log('Tableau :', sortedArray);
console.log('Elément à trouver :', key);

console.log('Position :', recursive_binary_search(key, sortedArray));

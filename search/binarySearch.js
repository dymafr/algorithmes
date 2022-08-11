// worst => 2 log n + 1
// best => 1
// avg log n

function binarySearch(sortedArray, key) {
  let comparaisons = 0;
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] > key) {
      comparaisons++;
      end = middle - 1;
    } else if (sortedArray[middle] < key) {
      comparaisons += 2;
      start = middle + 1;
    } else {
      comparaisons += 2;
      return comparaisons;
    }
  }
  return -1;
}

const operations = [];
const arr = Array.from({ length: 10000 }, (x, i) => i);
for (let i = 0; i < 10000000; i++) {
  const comparaisons = binarySearch(arr, Math.floor(Math.random() * 10000));
  operations.push(comparaisons);
}
const totalOps = operations.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
const resultat = {
  avgComps: Math.round(totalOps / operations.length),
};
console.log(resultat);

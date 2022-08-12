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

const arrayOperations = [];
const arr = Array.from({ length: 100000000 }, (x, i) => i);
for (let i = 0; i < 1000; i++) {
  const t0 = performance.now();
  const comparaisons = binarySearch(arr, Math.floor(Math.random() * 10000));
  const t1 = performance.now();
  const time = t1 - t0;
  arrayOperations.push({ comparaisons, time });
}
const totalOps = arrayOperations.reduce(
  (acc, curr) => {
    acc.comparaisons += curr.comparaisons;
    acc.time += curr.time;
    return acc;
  },
  { comparaisons: 0, time: 0 }
);
const resultat = {
  avgComps: Math.round(totalOps.comparaisons / arrayOperations.length),
  avgTime: Math.round(totalOps.time / arrayOperations.length),
};
console.log(resultat);

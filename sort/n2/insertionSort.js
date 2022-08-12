import operationsAvg from '../operationsAvg.js';

// Pour n on a :
// - n^2 / 4 comparaisons en moyenne
// - n^2 / 4  écritures en moyenne

function insertionSort(arr) {
  const arrayOperations = {
    comparaisons: 0,
    writes: 0,
    time: 0,
  };
  const t0 = performance.now();

  const len = arr.length;
  for (let i = 1; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arrayOperations.comparaisons++;
      arr[j + 1] = arr[j];
      arrayOperations.writes++;
      j--;
    }
    arrayOperations.comparaisons += 2;
    arr[j + 1] = current;
    arrayOperations.writes++;
  }
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(insertionSort);
console.log(resultat);

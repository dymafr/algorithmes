import operationsAvg from '../operationsAvg.mjs';

// Pour n on a :
// - n^2 / 2 comparaisons en moyenne
// - n^2 / 2  écritures en moyenne

function bubbleSort(arr) {
  const arrayOperations = {
    comparaisons: 0,
    writes: 0,
    time: 0,
  };
  const t0 = performance.now();

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      arrayOperations.comparaisons++;
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        arrayOperations.writes += 2;
      }
    }
  }
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(bubbleSort);
console.log(resultat);

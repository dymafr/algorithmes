import operationsAvg from '../operationsAvg.js';

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

  const isSwapped = false;

  const len = arr.length;
  for (let i = 0; i < len; i++) {
    isSwapped = false;
    for (let j = 0; j < len - i - 1; j++) {
      arrayOperations.comparaisons++;
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        isSwapped = true;
        arrayOperations.writes += 2;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(bubbleSort);
console.log(resultat);

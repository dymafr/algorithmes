import operationsAvg from '../operationsAvg.js';

// Pour n on a :
// - n^2 / 2 comparaisons en moyenne
// - 2n écritures en moyenne

function selectionSort(inputArr) {
  const arrayOperations = {
    comparaisons: 0,
    writes: 0,
    time: 0,
  };
  const t0 = performance.now();

  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      arrayOperations.comparaisons++;
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    // if (min != i) { optimisation
    let tmp = inputArr[i];
    inputArr[i] = inputArr[min];
    inputArr[min] = tmp;
    arrayOperations.writes += 2;
    // }
  }
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(selectionSort);
console.log(resultat);

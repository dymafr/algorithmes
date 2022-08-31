import operationsAvg from '../operationsAvg.js';
// Pour n on a :
// k n log n comparaisons et écritures en moyenne

function pivot(arr, start, end, arrayOperations) {
  const pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    arrayOperations.comparaisons++;
    if (arr[i] < pivot) {
      pivotIndex++;
      const tmp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = tmp;
      arrayOperations.writes += 2;
    }
  }
  const tmp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = tmp;
  arrayOperations.writes += 2;
  return pivotIndex;
}

function quickSort(arr, start, end, arrayOperations) {
  if (start >= end) return;
  let pivotIndex = pivot(arr, start, end, arrayOperations);
  quickSort(arr, start, pivotIndex - 1, arrayOperations);
  quickSort(arr, pivotIndex + 1, end, arrayOperations);
  return arr;
}

function executionContext(arr) {
  const arrayOperations = {
    comparaisons: 0,
    writes: 0,
    time: 0,
  };
  const t0 = performance.now();
  quickSort(arr, 0, arr.length - 1, arrayOperations);
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(executionContext);
console.log(resultat);

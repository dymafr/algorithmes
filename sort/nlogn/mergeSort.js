import operationsAvg from '../operationsAvg.js';
// Pour n on a :
// n log n - 2^(log n) comparaisons en moyenne

function mergeArrays(leftArray, rightArray, arrayOperations) {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < leftArray.length && j < rightArray.length) {
    arrayOperations.comparaisons += 1;
    if (leftArray[i] < rightArray[j]) {
      arr.push(leftArray[i]);
      arrayOperations.writes++;
      i++;
    } else {
      arr.push(rightArray[j]);
      arrayOperations.writes++;
      j++;
    }
  }
  while (i < leftArray.length) {
    arr.push(leftArray[i]);
    arrayOperations.writes++;
    i++;
  }
  while (j < rightArray.length) {
    arr.push(rightArray[j]);
    arrayOperations.writes++;
    j++;
  }
  return arr;
}

function mergeSort(arr, arrayOperations) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  arrayOperations.writes += arr.length;
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  return mergeArrays(
    mergeSort(leftArray, arrayOperations),
    mergeSort(rightArray, arrayOperations),
    arrayOperations
  );
}

function executionContext(arr) {
  const arrayOperations = {
    comparaisons: 0,
    writes: 0,
    time: 0,
  };
  const t0 = performance.now();
  mergeSort(arr, arrayOperations);
  const t1 = performance.now();
  arrayOperations.time = t1 - t0;
  return arrayOperations;
}

const resultat = operationsAvg(executionContext);
console.log(resultat);

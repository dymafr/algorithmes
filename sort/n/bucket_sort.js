import arrayGenerator from '../arrayGenerator.js';
import { insertionSort } from '../n2/implementations/insertionSort.js';

function getMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
}

// Si on ne connait pas l'intervalle des valeurs :
function bucketSort(arr) {
  const { min, max } = getMinMax(arr);
  const n = arr.length;
  const h = (max - min) / n;
  const buckets = [];
  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    let k = 0;
    while (min + h * (k + 1) < arr[i]) {
      k++;
    }
    buckets[k].push(arr[i]);
  }
  console.log(buckets);
  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result = result.concat(buckets[i]);
  }
  return result;
}

// Si on connait l'intervalle des valeurs (ce qui est normalement le cas) :
function bucketSortInterval(arr, min, max) {
  const n = arr.length;
  const h = (max - min) / n; // Calcul de l'intervalle des paquets, ici 10
  const buckets = [];
  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < n; i++) {
    let k = 0;
    // On calcule le paquet dans lequel on doit mettre la valeur :
    while (min + h * (k + 1) < arr[i]) {
      k++;
    }
    // On peut aussi faire uniquement avec des entiers :
    // const k = Math.floor((arr[i] - min) / h);
    buckets[k].push(arr[i]);
  }
  // On trie chaque paquet :
  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }
  let result = [];
  for (let i = 0; i < n; i++) {
    result = result.concat(buckets[i]);
  }
  return result;
}

const arr = arrayGenerator(20, 200);
console.log(bucketSort(arr, 0, 200));

function get_max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function countingSort(arr, base, position) {
  const sortedArray = [];
  const counts = [];

  // Nous allons initialiser le tableau de comptage avec des 0 :
  for (let i = 0; i < base; i++) {
    counts[i] = 0;
  }

  // Nous allons compter le nombre d'occurences de chaque élément
  // en fonction de la position :
  for (let i = 0; i < arr.length; i++) {
    const num = Math.floor(arr[i] / position) % base;
    counts[num]++;
  }

  // Nous allons calculer la position de chaque élément dans le tableau trié :
  for (let i = 1; i < base; i++) {
    counts[i] += counts[i - 1];
  }

  // Nous allons placer chaque élément dans le tableau de sortie :
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = Math.floor(arr[i] / position) % base;
    sortedArray[counts[num] - 1] = arr[i];
    counts[num]--;
  }

  return sortedArray;
}

function radixSort(arr, base = 10) {
  if (arr.length < 2) {
    return arr;
  }
  const max = get_max(arr);

  for (let i = 1; max / i > 0; i *= base) {
    arr = countingSort(arr, base, i);
  }
  return arr;
}

const arr = [2, 1, 1, 23, 4, 0, 121, 5, 54, 1, 32, 5000];
console.log(radixSort(arr));

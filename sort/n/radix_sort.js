// Version de référence
function countingSort(arr, n, place) {
  const base = 10; // car base 10 - cela pourrait être base 26 pour tri chars
  const result = [];
  const counts = [];

  for (let i = 0; i < base; i++) {
    counts[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    const num = Math.floor(arr[i] / place) % 10; // Récupérer le bon chiffre
    counts[num]++;
  }

  for (let i = 1; i < base; i++) {
    counts[i] += counts[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const num = Math.floor(arr[i] / place) % 10;
    result[counts[num] - 1] = arr[i];
    counts[num]--;
  }

  return result;
}

function radixSort(arr, n = arr.length) {
  const max = Math.max(...arr);

  for (let i = 1; parseInt(max / i) > 0; i *= 10) {
    arr = countingSort(arr, n, i);
  }
  return arr;
}

const arr = [2, 1, 1, 23, 4, 0, 121, 5, 54, 1, 32, 5000];
console.log(radixSort(arr));

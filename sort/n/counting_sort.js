// Version de référence
function countingSort(arr, n = arr.length, max = Math.max(...arr)) {
  const result = [];
  const counts = [];

  for (let i = 0; i <= max; i++) {
    counts[i] = 0;
  }

  for (let j = 0; j < n; j++) {
    counts[arr[j]]++;
  }

  for (let i = 1; i <= max; i++) {
    counts[i] = counts[i] + counts[i - 1];
  }

  for (let j = n - 1; j >= 0; j--) {
    result[counts[arr[j]] - 1] = arr[j];
    counts[arr[j]]--;
  }
  return result;
}

const arr = [2, 1, 1, 23, 4, 0, 5, 54, 1, 32];
console.log(countingSort(arr));

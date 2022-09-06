// Version de référence
function countingSort(arr, n = arr.length, max = Math.max(...arr)) {
  const result = [];
  const counts = [];

  for (let i = 0; i <= max; i++) {
    counts[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    counts[arr[i]]++;
  }

  for (let i = 1; i <= max; i++) {
    counts[i] += counts[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[counts[arr[i]] - 1] = arr[i];
    counts[arr[i]]--;
  }
  return result;
}

const arr = [2, 1, 1, 23, 4, 0, 123, 5, 54, 1, 32];
console.log(countingSort(arr));

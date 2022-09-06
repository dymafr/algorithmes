// Optimisé pour JavaScript
// Les clés numériques sont triées de manière croissante depuis ES6
function countingSort(arr, n = arr.length) {
  const counts = {};

  for (let i = 0; i < n; i++) {
    counts[arr[i]] ??= 0;
    counts[arr[i]]++;
  }

  const sortedArr = [];
  for (const i in counts) {
    while (counts[i] > 0) {
      sortedArr.push(+i);
      counts[i]--;
    }
  }
  return sortedArr;
}

const arr = [100, 2, 1, 11, 23, 4, 12, 5, 54, 1, 32];
console.log(countingSort(arr));

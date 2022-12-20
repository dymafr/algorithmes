// Optimisé pour JavaScript
// Les clés numériques sont triées de manière croissante depuis ES6
function countingSort(arr, n = arr.length) {
  const counts = {};

  for (let i = 0; i < n; i++) {
    counts[arr[i]] ??= 0; // Initialisation à 0 uniquement si null ou undefined
    counts[arr[i]]++; // Incrémentation
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

const arr = [7, 5, 2, 4, 3, 9, 3, 2, 1, 5, 6, 7, 9, 4, 1, 2, 3, 4, 5, 6, 7, 9];
console.log(countingSort(arr));

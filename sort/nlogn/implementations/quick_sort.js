function pivot(arr, start, end) {
  const pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      const tmp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = tmp;
    }
  }
  const tmp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = tmp;
  return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;
  let pivotIndex = pivot(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);
  return arr;
}

console.log(quickSort([38, 27, 43, 3, 9, 82, 10]));

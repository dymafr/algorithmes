function swap(arr, firstIndex, secondIndex) {
  if (firstIndex !== secondIndex) {
    const tmp = arr[secondIndex];
    arr[secondIndex] = arr[firstIndex];
    arr[firstIndex] = tmp;
  }
}

function partition(arr, left, right) {
  const pivot = arr[left];
  let i = left;
  for (let j = left + 1; j <= right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i, left);
  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

const arr = [5, 1, 3, 8, 7, 4, 6, 2];
quickSort(arr);
console.log(arr);

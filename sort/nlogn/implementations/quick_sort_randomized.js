function swap(arr, firstIndex, secondIndex) {
  if (firstIndex !== secondIndex) {
    const tmp = arr[secondIndex];
    arr[secondIndex] = arr[firstIndex];
    arr[firstIndex] = tmp;
  }
}

function partition(arr, left, right) {
  let randomIndex = Math.floor(Math.random() * (right - left + 1) + left);
  swap(arr, randomIndex, right);
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, right);
  return i + 1;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
}

const arr = [2, 8, 7, 1, 3, 5, 6, 4];
quickSort(arr);
console.log(arr);

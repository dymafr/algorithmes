function mergeArrays(arr, left, middle, right) {
  const leftArrayLength = middle - left + 1;
  const rightArrayLength = right - middle;
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < leftArrayLength; i++) {
    leftArray[i] = arr[left + i];
  }
  for (let j = 0; j < rightArrayLength; j++) {
    rightArray[j] = arr[middle + j + 1];
  }
  let leftIndex = 0;
  let rightIndex = 0;
  let indexToFill = left;

  while (leftIndex < leftArrayLength && rightIndex < rightArrayLength) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      arr[indexToFill] = leftArray[leftIndex];
      leftIndex++;
    } else {
      arr[indexToFill] = rightArray[rightIndex];
      rightIndex++;
    }
    indexToFill++;
  }
  while (leftIndex < leftArrayLength) {
    arr[indexToFill] = leftArray[leftIndex];
    leftIndex++;
    indexToFill++;
  }
  while (rightIndex < rightArrayLength) {
    arr[indexToFill] = rightArray[rightIndex];
    rightIndex++;
    indexToFill++;
  }
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  const middle = Math.floor((left + right) / 2);
  mergeSort(arr, left, middle);
  mergeSort(arr, middle + 1, right);
  mergeArrays(arr, left, middle, right);
}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr);
console.log(arr);

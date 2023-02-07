export default function heapSort(array) {
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapifyDownRecursive(array, 0, i);
  }
  return array;
}

function buildMaxHeap(array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapifyDownRecursive(array, i);
  }
}

function swap(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

function heapifyDownRecursive(array, index, heapSize = array.length) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let largest = index;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapifyDownRecursive(array, largest, heapSize);
  }
}

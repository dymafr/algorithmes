// O(n log(n)) en temps | O(1) espace
export default function heapSort(array) {
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapifyDownRecursive(array, 0, i);
  }
  return array;
}

// O(n) en temps | O(1) espace
function buildMaxHeap(array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapifyDownRecursive(array, i);
  }
}

// O(1) en temps | O(1) espace
function swap(array, indexA, indexB) {
  const temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}

// O(log n) ou O(h) en temps | O(1) espace
function heapifyDownRecursive(array, index, to = array.length) {
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let largest = index;

  if (left < to && array[left] > array[largest]) {
    largest = left;
  }

  if (right < to && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapifyDownRecursive(array, largest, to);
  }
}

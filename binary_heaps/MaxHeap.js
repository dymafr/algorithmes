export default class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  // Pour le récursif
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUpRecursive(); // Itératif ou récursif
  }

  heapifyUpIterative() {
    let index = this.heap.length - 1;
    const element = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (element <= parent) {
        break;
      }
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  heapifyUpRecursive(index = this.heap.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapifyUpRecursive(parentIndex);
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return 'Le tas est vide';
    }
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDownIterative(); // Itératif ou récursif
    }
    return max;
  }

  // Itératif
  heapifyDownIterative() {
    let index = 0;
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    const length = this.heap.length;
    while (
      index < length &&
      left < length &&
      (this.heap[left] > this.heap[index] ||
        this.heap[right] > this.heap[index])
    ) {
      let max;
      if (right >= length) {
        max = left;
      } else if (this.heap[left] > this.heap[right]) {
        max = left;
      } else {
        max = right;
      }
      this.swap(index, max);
      index = max;
      left = index * 2 + 1;
      right = index * 2 + 2;
    }
  }

  heapifyDownRecursive(index = 0) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDownRecursive(largest);
    }
  }

  print() {
    let tree = '';
    let level = 0;
    let levelSize = 1;
    let index = 0;
    while (index < this.heap.length) {
      for (let i = 0; i < levelSize; i++) {
        if (this.heap[index]) {
          tree += this.heap[index] + ' ';
        }
        index++;
      }
      tree += '\n';
      level++;
      levelSize = Math.pow(2, level);
    }
    console.log(tree);
  }
}

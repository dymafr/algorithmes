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
    this.heapityUpRecursive(); // Itératif ou récursif
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

  heapityUpRecursive(index = this.heap.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index);
      this.heapityUpRecursive(parentIndex);
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
      this.heapifyDownRecursive(); // Itératif ou récursif
    }
    return max;
  }

  // Itératif
  heapifyDownIterative() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
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

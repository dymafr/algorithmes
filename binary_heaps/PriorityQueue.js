// La priorité est un nombre entier positif.
// Plus le nombre est grand, plus la priorité est élevée.
// MaxHeap priority queue
export default class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);
    this.heapifyUpRecursive();
  }

  extractMax() {
    const item = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastItem;
      this.heapifyDownRecursive();
    }
    return item;
  }

  maximum() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  heapifyUpRecursive(index = this.heap.length - 1) {
    let parentIndex = Math.floor((index - 1) / 2);
    if (this.heap[parentIndex]?.priority < this.heap[index]?.priority) {
      this.swap(parentIndex, index);
      this.heapifyUpRecursive(parentIndex);
    }
  }

  heapifyDownRecursive(index = 0) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (
      left < this.heap.length &&
      this.heap[left].priority > this.heap[largest].priority
    ) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDownRecursive(largest);
    }
  }
}

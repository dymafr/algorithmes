export default class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(item) {
    this.heap.push(item);
    this.heapifyUpRecursive();
  }

  extractMin() {
    const item = this.heap[0];
    const lastItem = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastItem;
      this.heapifyDownRecursive();
    }
    return item;
  }

  minimum() {
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
    if (
      this.heap[parentIndex]?.priority > this.heap[index]?.priority ||
      (this.heap[parentIndex]?.priority === this.heap[index]?.priority &&
        this.heap[parentIndex]?.secondaryPriority >
          this.heap[index]?.secondaryPriority)
    ) {
      this.swap(parentIndex, index);
      this.heapifyUpRecursive(parentIndex);
    }
  }

  heapifyDownRecursive(index = 0) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    if (
      left < this.heap.length &&
      (this.heap[left].priority < this.heap[smallest].priority ||
        (this.heap[left].priority === this.heap[smallest].priority &&
          this.heap[left].secondaryPriority <
            this.heap[smallest].secondaryPriority))
    ) {
      smallest = left;
    }

    if (
      right < this.heap.length &&
      (this.heap[right].priority < this.heap[smallest].priority ||
        (this.heap[right].priority === this.heap[smallest].priority &&
          this.heap[right].secondaryPriority <
            this.heap[smallest].secondaryPriority))
    ) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDownRecursive(smallest);
    }
  }
}

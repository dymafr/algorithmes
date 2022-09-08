export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }

  dequeue() {
    let current = this.head;
    if (!current) {
      return null;
    } else {
      this.head = current.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return current.value;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }
}

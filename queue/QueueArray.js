export class QueueArray {
  // Tableau de taille fixe
  constructor(size) {
    this.head = 0;
    this.tail = 0;
    this.MAX = size; // Taille maximale du tableau
    this.array = Array(size).fill(null); // Simule tableau statique
  }

  enqueue(value) {
    if (this.getSize() === this.MAX) {
      throw new Error('Queue is full'); // File pleine
    }
    this.array[this.tail] = value;
    this.tail++;
    if (this.tail === this.MAX) {
      this.tail = 0;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.array[this.head];
    this.array[this.head] = null;
    this.head++;
    if (this.head === this.MAX) {
      this.head = 0;
    }
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      return null; // File vide
    } else {
      return this.array[this.head];
    }
  }

  isEmpty() {
    return this.array[this.head] === null;
  }

  clear() {
    this.head = 0;
    this.tail = 0;
    this.array = Array(this.MAX).fill(null);
  }

  getSize() {
    if (this.isEmpty()) {
      return 0;
    } else if (this.head < this.tail) {
      return this.tail - this.head;
    } else {
      return this.MAX - this.head + this.tail;
    }
  }
}

export class StackArray {
  // Tableau de taille fixe
  constructor() {
    this.i = -1; // Pointeur de pile
    this.MAX = 100; // Taille maximale du tableau
    this.array = Array(this.MAX).fill(0); // Simule tableau statique
  }

  push(value) {
    if (this.i >= this.MAX - 1) {
      throw new Error('Stack overflow'); // Dépassement de pile
    } else {
      this.i++;
      this.array[this.i] = value;
    }
  }

  pop() {
    if (this.i < 0) {
      return null;
    } else {
      const x = this.array[this.i];
      this.i--;
      return x;
    }
  }

  peek() {
    if (this.i < 0 || this.i > this.MAX) {
      return null;
    } else {
      return this.array[this.i];
    }
  }

  getSize() {
    return this.i + 1;
  }

  isEmpty() {
    return this.i < 0;
  }

  clear() {
    this.i = -1;
  }
}

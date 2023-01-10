export class StackArray {
  // Tableau de taille fixe
  constructor(size) {
    this.top = -1; // Pointeur de pile
    this.MAX = size; // Taille maximale du tableau
    this.array = Array(size); // Simule tableau statique
  }

  push(value) {
    if (this.top >= this.MAX - 1) {
      throw new Error('Stack overflow'); // Dépassement de pile
    } else {
      this.top++;
      this.array[this.top] = value;
    }
  }

  pop() {
    if (this.top === -1) {
      return null;
    } else {
      const value = this.array[this.top];
      this.top--;
      return value;
    }
  }

  peek() {
    if (this.top === -1) {
      return null;
    } else {
      return this.array[this.top];
    }
  }

  getSize() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  clear() {
    this.top = -1;
  }
}

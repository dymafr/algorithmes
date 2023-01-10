export class StackDynamicArray {
  constructor() {
    this.array = new Array();
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.array[this.top] = value;
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

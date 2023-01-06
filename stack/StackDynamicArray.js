export class StackDynamicArray {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop() ?? null;
  }

  peek() {
    return this.list.at(-1) ?? null;
  }

  getSize() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  clear() {
    this.list = [];
  }
}

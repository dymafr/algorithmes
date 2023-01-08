import { LinkedList } from '../linked_list/LinkedList';

export class StackLL {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.addFirst(value);
  }

  pop() {
    return this.list.removeFirst();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.head.value;
  }

  getSize() {
    return this.list.size;
  }

  isEmpty() {
    return this.list.size === 0;
  }

  print() {
    return this.list.print();
  }

  clear() {
    this.list.clear();
  }
}

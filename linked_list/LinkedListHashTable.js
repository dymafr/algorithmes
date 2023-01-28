export class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export class LinkedListHash {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(key, value = null) {
    let current = this.head;
    if (!current) {
      this.head = new Node(key, value ?? key);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(key, value ?? key);
    }
    this.size++;
  }

  get(key) {
    let current = this.head;
    if (!current) {
      return null;
    } else {
      while (current) {
        if (key === current.key) {
          return current.value;
        }
        current = current.next;
      }
      return null;
    }
  }

  delete(key) {
    let current = this.head;
    if (!current) {
      return null;
    } else if (key === current.key) {
      const nodeValue = current.value;
      this.head = current.next;
      this.size--;
      return nodeValue;
    } else {
      while (current.next) {
        if (key === current.next.key) {
          const nodeValue = current.next.value;
          current.next = current.next.next;
          this.size--;
          return nodeValue;
        }
        current = current.next;
      }
      return null;
    }
  }

  update(key, value) {
    let current = this.head;
    if (!current) {
      return false;
    } else {
      while (current) {
        if (key === current.key) {
          current.value = value;
          return value;
        }
        current = current.next;
      }
      return false;
    }
  }
}

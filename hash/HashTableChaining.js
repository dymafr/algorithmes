import { LinkedListHash } from '../linked_list/LinkedListHashTable.js';

export default class HashTableChaining {
  constructor() {
    this.table = new Array(97);
    this.size = 0;
  }

  hash(key) {
    if (typeof key === 'string') {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    } else if (typeof key === 'number') {
      return key % this.table.length;
    }
  }

  set(key, value = null) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      this.table[index] = new LinkedListHash();
      this.table[index].add(key, value);
      this.size++;
    } else {
      if (!list.update(key, value)) {
        list.add(key, value);
        this.size++;
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    return list.get(key);
  }

  delete(key) {
    const index = this.hash(key);
    const list = this.table[index];
    if (!list) {
      return null;
    }
    const value = list.delete(key);
    if (value) {
      this.size--;
    }
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

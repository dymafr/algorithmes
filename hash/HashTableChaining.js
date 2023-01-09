import { LinkedList } from '../linked_list/LinkedList.js';

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

  set(key, value) {
    const index = this.hash(key);
    // Si la clé existe déjà, on la supprime pour la remplacer
    // on pourrait faire une version plus complexe pour mettre à jour la valeur
    if (this.get(key)) {
      this.delete(key);
    }
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    this.table[index].addLast({ key, value });
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    const list = this.table[index];
    let node = list.head;
    while (node) {
      if (node.value.key === key) {
        return node.value.value;
      }
      node = node.next;
    }
    return undefined;
  }

  delete(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      return undefined;
    }
    let list = this.table[index];
    let node = list.head;
    let previous = null;
    while (node) {
      if (node.value.key === key) {
        if (node === list.head && node.next === null) {
          this.table[index] = null;
        } else if (node === list.head) {
          list.head = node.next;
        } else {
          previous.next = node.next;
        }
        this.size--;
      }
      previous = node;
      node = node.next;
    }
    return undefined;
  }

  isEmpty() {
    return this.size === 0;
  }
}

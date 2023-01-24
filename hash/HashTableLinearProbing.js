export default class HashTableLinearProbing {
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
    const position = this.hash(key);
    if (this.size === this.table.length) {
      throw new Error('Table pleine');
    }
    if (this.table[position] === undefined) {
      this.table[position] = { key, value };
    } else {
      if (this.table[position]?.key === key) {
        this.table[position].value = value;
        return;
      }
      let index = position + 1;
      if (index === this.table.length) {
        index = 0;
      }
      while (
        this.table[index] !== undefined &&
        this.table[index]?.key !== key
      ) {
        index++;
        if (index === this.table.length) {
          index = 0;
        }
      }
      if (this.table[index]?.key === key) {
        this.table[index].value = value;
        return;
      } else {
        this.table[index] = { key, value };
      }
    }
    this.size++;
  }

  get(key) {
    const position = this.hash(key);
    if (this.table[position] !== undefined) {
      let toDelete = null;
      if (this.table[position]?.key === key) {
        return this.table[position].value;
      } else {
        let index = position + 1;
        while (
          this.table[index] !== undefined &&
          this.table[index]?.key !== key
        ) {
          index++;
        }
        if (this.table[index]?.key === key) {
          return this.table[index].value;
        }
      }
    }
  }

  delete(key) {
    const position = this.hash(key);
    if (this.table[position] !== undefined) {
      if (this.table[position] && this.table[position].key === key) {
        this.table[position] = null;
        this.size--;
      } else {
        let index = position + 1;
        while (
          this.table[index] !== undefined &&
          this.table[index]?.key !== key
        ) {
          index++;
        }
        if (this.table[index]?.key === key) {
          this.table[index] = null;
          this.size--;
        }
      }
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

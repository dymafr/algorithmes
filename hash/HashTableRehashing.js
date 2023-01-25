export default class HashTableRehashing {
  static primeNumbers = [
    11, 23, 47, 97, 197, 397, 797, 1597, 3203, 6421, 12853, 25717, 51437,
    102877, 205759, 411527, 823117, 1646237, 3292489, 6584983, 13169977,
  ];

  constructor() {
    this.table = new Array(11);
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

  // O(n)
  rehash() {
    const oldTable = this.table;
    this.table = new Array(this.nextPrimeNumber());
    this.size = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        this.set(oldTable[i].key, oldTable[i].value);
      }
    }
  }

  nextPrimeNumber() {
    const doubledLength = this.table.length * 2;
    for (let i = 0; i < HashTableRehashing.primeNumbers.length; i++) {
      if (HashTableRehashing.primeNumbers[i] > doubledLength) {
        return HashTableRehashing.primeNumbers[i];
      }
    }
    throw new Error('Table trop grande');
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
    // Rehachage
    const loadFactor =
      this.table.filter((e) => e !== undefined).length / this.table.length;
    if (loadFactor > 0.75) {
      this.rehash();
    }
  }

  get(key) {
    const position = this.hash(key);
    if (this.table[position] !== undefined) {
      if (this.table[position]?.key === key) {
        return this.table[position].value;
      } else {
        if (this.table[position]?.key === key) {
          return this.table[index].value;
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

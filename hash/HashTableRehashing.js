export default class HashTableRehashing {
  static primeNumbers = [
    23, 47, 97, 197, 397, 797, 1597, 3203, 6421, 12853, 25717, 51437, 102877,
    205759, 411527, 823117, 1646237, 3292489, 6584983, 13169977,
  ];

  constructor() {
    this.table = new Array(11);
    this.size = 0;
    this.MAX_LOAD_FACTOR = 0.75;
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
    this.table = new Array(this.getNextPrime());
    this.size = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        this.set(oldTable[i].key, oldTable[i].value);
      }
    }
  }

  getNextPrime() {
    const doubledLength = this.table.length * 2;
    for (let i = 0; i < HashTableRehashing.primeNumbers.length; i++) {
      if (HashTableRehashing.primeNumbers[i] > doubledLength) {
        return HashTableRehashing.primeNumbers[i];
      }
    }
    throw new Error('Table trop grande');
  }

  probe(index) {
    if (index === this.table.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  }

  set(key, value = null) {
    const index = this.hash(key);
    let position = index;
    let i = 0;
    while (i < this.table.length) {
      // Si la position est une tombe (null) ou n'est pas occupée (undefined)
      // alors on peut ajouter l'élément :
      if (!this.table[position]) {
        this.table[position] = { key, value: value ?? key };
        this.size++;
        if (this.size / this.table.length > this.MAX_LOADING_FACTOR) {
          this.rehash();
        }
        return;
        // Si la position est occupée par l'élément à ajouter
        // on met à jour la valeur :
      } else if (this.table[position]?.key === key) {
        this.table[position].value = value;
        return;
      }
      position = this.probe(position);
      i++;
    }
    throw new Error('La table est pleine');
  }

  get(key) {
    const index = this.hash(key);
    let position = index;
    let i = 0;
    while (i < this.table.length) {
      if (this.table[position]?.key === key) {
        return this.table[position].value;
      } else if (this.table[position] === undefined) {
        return null;
      }
      position = this.probe(position);
      i++;
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    let position = index;
    let i = 0;
    while (i < this.table.length) {
      if (this.table[position]?.key === key) {
        // On met une tombe à la place de l'élément à supprimer :
        this.table[position] = null;
        this.size--;
        return;
      } else if (this.table[position] === undefined) {
        return;
      }
      position = this.probe(position);
      i++;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

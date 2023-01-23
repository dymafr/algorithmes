export default class HashTableBasic {
  static primeNumbersTo1000 = [
    101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
    179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
    263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
    353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
    443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
    547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631,
    641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733,
    739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
    839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
    947, 953, 967, 971, 977, 983, 991, 997,
  ];

  constructor() {
    this.table = new Array(97); // 97 est un nombre premier
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
      if (oldTable[i] !== undefined) {
        this.set(i, oldTable[i]);
      }
    }
  }

  nextPrimeNumber() {
    const doubledLength = this.table.length * 2;
    for (let i = 0; i < HashTableBasic.primeNumbersTo1000.length; i++) {
      if (HashTableBasic.primeNumbersTo1000[i] > doubledLength) {
        return HashTableBasic.primeNumbersTo1000[i];
      }
    }
    throw new Error('Table trop grande');
  }

  set(key, value) {
    const index = this.hash(key);
    if (this.table[index] === undefined) {
      this.size++;
    } else {
      console.log('Collision !');
    }
    this.table[index] = value;

    // Rehachage
    const loadFactor = this.size / this.table.length;
    if (loadFactor > 0.75) {
      this.rehash();
    }
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }
}

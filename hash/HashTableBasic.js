export default class HashTableBasic {
  constructor() {
    // Tableau de taille fixe
    // La taille doit être un nombre premier car on utilise modulo
    this.table = new Array(97); // 97 est un nombre premier
    this.size = 0;
  }

  // Hachage statique, méthode par division : h(k) = k mod m
  // Exemple de collision clé 197 et 'ad'
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

  // Hachage statique, méthode par multiplication : h(k) = floor(m(kA mod 1))
  hashMultiplication(key) {
    const A = 0.8018543616126939; // 0 < A < 1
    let total = 0;
    if (typeof key === 'string') {
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
    } else if (typeof key === 'number') {
      total = key;
    }
    return Math.floor(this.table.length * ((total * A) % 1));
  }

  set(key, value = null) {
    const index = this.hash(key);
    if (this.table[index]) {
      console.log('Collision !');
    } else {
      this.size++;
    }
    // Si pas de valeur on considère que la clé est
    // à la fois la valeur et la clé : 197 => 197 / 'ad' => 'ad'
    this.table[index] = value ?? key;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this.hash(key);
    const deleted = this.table[index];
    if (deleted) {
      this.size--;
      this.table[index] = null;
    }
    return deleted;
  }

  isEmpty() {
    return this.size === 0;
  }
}

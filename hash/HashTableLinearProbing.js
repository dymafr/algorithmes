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

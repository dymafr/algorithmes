// Implementation avec specs Java
// Liste chaînée disponible en Java et C++ mais pas dans la plupart des langages

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }
  /**
   * Ajout d'un élément à la fin de la liste.
   * @param {*} valeur tout type
   */
  addLast(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }
  /**
   * Ajout d'un élément à la position donnée.
   * @param {number} position - index de la position à partir de 0
   * @param {*} value tout type
   */
  add(position, value) {
    if (position < 0 || position > this.size) {
      throw new Error('Index en dehors des limites');
    } else if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let i = 1;
      let current = this.head;
      while (i < position) {
        current = current.next;
        i++;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }
  /**
   * Ajout d'un élément au début de la liste.
   * @param {*} valeur tout type
   */
  addFirst(value) {
    if (this.head) {
      this.head = new Node(value, this.head);
    } else {
      this.head = new Node(value);
    }
    this.size++;
  }
  /**
   * Récupère l'élément à la position donnée.
   * @param {number} position - index de la position à partir de 0
   */
  get(position) {
    if (position < 0 || position > this.size) {
      throw new Error('Index en dehors des limites');
    } else {
      let i = 0;
      let current = this.head;
      while (i < position) {
        current = current.next;
        i++;
      }
      return current ?? undefined;
    }
  }
  /**
   * Retourne si la valeur est présente ou non.
   * @param {*} valeur - tout type
   */
  contains(valeur) {
    let current = this.head;
    while (current) {
      if (Object.is(valeur, current.value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  /**
   * Supprime et retourne le dernier élément.
   * @return {*} valeur - tout type
   */
  removeLast() {
    let lastNode;
    if (!this.head) {
      return undefined;
    } else if (!this.head.next) {
      lastNode = this.head;
      this.head = null;
    } else {
      let current = this.head;
      while (current.next?.next) {
        current = current.next;
      }
      lastNode = current.next;
      current.next = null;
    }
    this.size--;
    return lastNode.value;
  }
  /**
   * Supprime et retourne le premier élément.
   * @return {*} valeur - tout type
   */
  removeFirst() {
    if (!this.head) {
      return undefined;
    } else {
      const oldHead = this.head;
      this.head = this.head.next;
      this.size--;
      return oldHead.value;
    }
  }
  /**
   * Supprime l'élément à la position donnée.
   * @param {number} position - index de la position à partir de 0
   *
   * @return {*} valeur - tout type
   */
  remove(position) {
    let removed;
    if (position < 0 || position > this.size) {
      throw new Error('Index en dehors des limites');
    } else if (position === 0) {
      removed = this.head;
      this.head = this.head.next;
    } else {
      let i = 0;
      let current = this.head;
      while (i < position - 1) {
        current = current.next;
        i++;
      }
      removed = current.next;
      current.next = current.next.next ?? null;
    }
    this.size--;
    return removed.value;
  }
  /**
   * Affiche la liste (fonctionne que sur Node.js).
   */
  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }
    process.stdout.write('null \n');
  }
}

const linkedList = new LinkedList();

linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);
linkedList.addLast(4);
linkedList.remove(3);

linkedList.print();

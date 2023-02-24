// Implémentation CLRS
// Utilisation d'une sentinelle pour les feuilles NilNode
// Utilisation d'une propriété parent pour les rotations
class RedBlackNode {
  constructor(key, color) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

export default class RedBlackTree {
  constructor() {
    this.NilNode = new RedBlackNode(null, 'black');
    this.root = this.NilNode;
  }

  // T1, T2, T3 et T4 sont des sous-arbres
  //   x                     y
  //  / \                   / \
  // T1  y    rotation     x   T4
  //    / \   ======>     / \
  //   T2 T4             T1 T2
  rotateLeft(x) {
    const y = x.right;
    x.right = y.left;
    if (y.left !== this.NilNode) {
      y.left.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === this.NilNode) {
      this.root = y;
    } else if (x === x.parent.left) {
      x.parent.left = y;
    } else {
      x.parent.right = y;
    }
    y.left = x;
    x.parent = y;
  }

  //     y                     x
  //    / \                   / \
  //   x   T4     rotation   T1  y
  //  / \         ======>       / \
  // T1  T3                    T3  T4
  rotateRight(x) {
    const y = x.left;
    x.left = y.right;
    if (y.right !== this.NilNode) {
      y.right.parent = x;
    }
    y.parent = x.parent;
    if (x.parent === this.NilNode) {
      this.root = y;
    } else if (x === x.parent.right) {
      x.parent.right = y;
    } else {
      x.parent.left = y;
    }
    y.right = x;
    x.parent = y;
  }

  insert(key) {
    let x = this.root;
    let y = this.NilNode;
    const z = new RedBlackNode(key, 'red');
    while (x !== this.NilNode) {
      y = x;
      if (z.key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    z.parent = y;
    if (y === this.NilNode) {
      this.root = z;
    } else if (z.key < y.key) {
      y.left = z;
    } else {
      y.right = z;
    }
    z.left = this.NilNode;
    z.right = this.NilNode;
    this.insertFixup(z);
  }

  insertFixup(node) {
    while (node.parent.color === 'red') {
      if (node.parent === node.parent.parent.left) {
        const y = node.parent.parent.right;
        if (y.color === 'red') {
          node.parent.color = 'black';
          y.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateRight(node.parent.parent);
        }
      } else {
        const y = node.parent.parent.left;
        if (y.color === 'red') {
          node.parent.color = 'black';
          y.color = 'black';
          node.parent.parent.color = 'red';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 'black';
          node.parent.parent.color = 'red';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'black';
  }

  search(key) {
    let x = this.root;
    while (x !== this.NilNode) {
      if (key === x.key) {
        return x;
      } else if (key < x.key) {
        x = x.left;
      } else {
        x = x.right;
      }
    }
    return null;
  }

  // Transplantation d'un sous-arbre
  transplant(u, v) {
    if (u.parent === this.NilNode) {
      this.root = v;
    } else if (u === u.parent.left) {
      u.parent.left = v;
    } else {
      u.parent.right = v;
    }
    v.parent = u.parent;
  }

  delete(key) {
    // On recherche le noeud à supprimer
    const node = this.search(key);
    // Si le noeud n'existe pas, on ne fait rien
    if (node === null) {
      return;
    }
    let y = node;
    // On stocke la couleur du noeud à supprimer
    let yOriginalColor = y.color;
    let x;
    // CAS 1 : Si le noeud à supprimer n'a pas de fils gauche (un seul fils droit)
    if (node.left === this.NilNode) {
      x = node.right;
      // On remplace le noeud à supprimer par son fils droit
      this.transplant(node, node.right);
      // CAS 2 : Si le noeud à supprimer n'a pas de fils droit (un seul fils gauche)
    } else if (node.right === this.NilNode) {
      x = node.left;
      // On remplace le noeud à supprimer par son fils gauche
      this.transplant(node, node.left);
    } else {
      // CAS 3 : Si le noeud à supprimer a deux fils
      // On recherche le successeur du noeud à supprimer
      y = this.minimum(node.right);
      // On stocke la couleur du successeur
      yOriginalColor = y.color;
      // On stocke le fils droit du successeur
      x = y.right;
      // Si le successeur est le fils droit du noeud à supprimer
      if (y !== node.right) {
        // On remplace le successeur par son fils droit
        this.transplant(y, y.right);
        // On place le fils droit du noeud à supprimer à la place du successeur
        y.right = node.right;
        // On met à jour le parent du fils droit du noeud à supprimer
        y.right.parent = y;
      } else {
        // On met à jour le parent du successeur
        x.parent = y;
      }
      // On remplace le noeud à supprimer par le successeur
      this.transplant(node, y);
      y.left = node.left;
      y.left.parent = y;
      y.color = node.color;
    }
    // Si la couleur du noeud à supprimer était noire
    if (yOriginalColor === 'black') {
      // On rééquilibre l'arbre
      this.deleteFixup(x);
    }
  }

  deleteFixup(node) {
    // Tant que le noeud n'est pas la racine et que la couleur du noeud est noire
    while (node !== this.root && node.color === 'black') {
      // Si le noeud est le fils gauche de son parent
      if (node === node.parent.left) {
        // On stocke le frère du noeud dans une variable w
        let w = node.parent.right;
        // CAS 1 : Si le frère du noeud est rouge
        if (w.color === 'red') {
          w.color = 'black';
          node.parent.color = 'red';
          this.rotateLeft(node.parent);
          w = node.parent.right;
        }
        // CAS 2 : Si les fils du frère du noeud sont noirs et que le frère du noeud est noir
        if (w.left.color === 'black' && w.right.color === 'black') {
          w.color = 'red';
          node = node.parent;
          // On continue la boucle avec le parent du noeud
        } else {
          // CAS 3 : Si le fils droit du frère du noeud est noir et que le fils gauche du frère du noeud est rouge et que le frère du noeud est noir
          if (w.right.color === 'black') {
            w.left.color = 'black';
            w.color = 'red';
            this.rotateRight(w);
            w = node.parent.right;
          }
          // CAS 4 : Si le fils droit du frère du noeud est rouge et que le frère du noeud est noir
          w.color = node.parent.color;
          node.parent.color = 'black';
          w.right.color = 'black';
          this.rotateLeft(node.parent);
          node = this.root;
          // On sort de la boucle
        }
      } else {
        // Symétrique des 3 cas précédents, avec les fils gauche et droit inversés
        let w = node.parent.left;
        if (w.color === 'red') {
          w.color = 'black';
          node.parent.color = 'red';
          this.rotateRight(node.parent);
          w = node.parent.left;
        }
        if (w.right.color === 'black' && w.left.color === 'black') {
          w.color = 'red';
          node = node.parent;
        } else {
          if (w.left.color === 'black') {
            w.right.color = 'black';
            w.color = 'red';
            this.rotateLeft(w);
            w = node.parent.left;
          }
          w.color = node.parent.color;
          node.parent.color = 'black';
          w.left.color = 'black';
          this.rotateRight(node.parent);
          node = this.root;
        }
      }
    }
    node.color = 'black';
  }

  minimum(node) {
    while (node && node.left !== this.NilNode) {
      node = node.left;
    }
    return node;
  }
}

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
    while (x !== this.NilNode && x !== null) {
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
    while (x !== this.NilNode && x !== null) {
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
    const node = this.search(key);
    if (node === null) {
      return;
    }
    let y = node;
    let yOriginalColor = y.color;
    let x;
    if (node.left === this.NilNode) {
      x = node.right;
      this.transplant(node, node.right);
    } else if (node.right === this.NilNode) {
      x = node.left;
      this.transplant(node, node.left);
    } else {
      y = this.minimum(node.right);
      yOriginalColor = y.color;
      x = y.right;
      if (y !== node.right) {
        this.transplant(y, y.right);
        y.right = node.right;
        y.right.parent = y;
      } else {
        x.parent = y;
      }
      this.transplant(node, y);
      y.left = node.left;
      y.left.parent = y;
      y.color = node.color;
    }
    if (yOriginalColor === 'black') {
      this.deleteFixup(x);
    }
  }

  deleteFixup(node) {
    while (node !== this.root && node.color === 'black') {
      if (node === node.parent.left) {
        let w = node.parent.right;
        if (w.color === 'red') {
          w.color = 'black';
          node.parent.color = 'red';
          this.rotateLeft(node.parent);
          w = node.parent.right;
        }
        if (w.left.color === 'black' && w.right.color === 'black') {
          w.color = 'red';
          node = node.parent;
        } else {
          if (w.right.color === 'black') {
            w.left.color = 'black';
            w.color = 'red';
            this.rotateRight(w);
            w = node.parent.right;
          }
          w.color = node.parent.color;
          node.parent.color = 'black';
          w.right.color = 'black';
          this.rotateLeft(node.parent);
          node = this.root;
        }
      } else {
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

  isRBTree() {
    // Root property
    if (this.root.color !== 'black') {
      return false;
    }
    return (
      this.hasRedBlackProperty(this.root) &&
      this.hasRedProperty(this.root) &&
      this.hasDepthProperty(this.root)
    );
  }

  hasRedBlackProperty(node) {
    if (node === this.NilNode) {
      return true;
    }
    if (!node.color || !node.color === 'red' || !node.color === 'black') {
      return false;
    }
    return (
      this.hasRedBlackProperty(node.left) &&
      this.hasRedBlackProperty(node.right)
    );
  }

  hasRedProperty(node) {
    if (node === this.NilNode) {
      return true;
    }
    if (node.color === 'red') {
      if (node.left.color === 'red' || node.right.color === 'red') {
        return false;
      }
    }
    return this.hasRedProperty(node.left) && this.hasRedProperty(node.right);
  }

  hasDepthProperty(node) {
    return this.hasBlackProperty(node) !== -1;
  }

  hasBlackProperty(node) {
    if (node === null) {
      return 0;
    } else {
      const leftBlackHeight =
        this.hasBlackProperty(node.left) + (node.color === 'black' ? 1 : 0);
      const rightBlackHeight =
        this.hasBlackProperty(node.right) + (node.color === 'black' ? 1 : 0);
      if (leftBlackHeight !== rightBlackHeight) {
        return -1;
      }
      return leftBlackHeight;
    }
  }
}

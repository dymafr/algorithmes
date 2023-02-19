class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

export default class AVLTree {
  constructor() {
    this.root = null;
  }

  getNodeHeight(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  getBalanceFactor(node) {
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  setNodeHeight(node) {
    node.height =
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1;
  }

  balanceNode(node) {
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.left) >= 0) {
        return this.rightRotate(node);
      } else {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);
      }
    } else if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.right) <= 0) {
        return this.leftRotate(node);
      } else {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
      }
    }
    return node;
  }

  // Rotation gauche
  // T1, T2, T3 sont les sous-arbres
  //         x                               y
  //        / \      Rotation gauche (y)    /  \
  //       T1  y    - - - - - - - - ->     x    T3
  //          / \   <- - - - - - - - -    /  \
  //        T2  T3   Rotation droite (x) T1   T2
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    this.setNodeHeight(x);
    this.setNodeHeight(y);
    return y;
  }

  // Rotation droite
  // T1, T2, T3 sont les sous-arbres
  //         y                               x
  //        / \     Rotation droite (x)     /  \
  //       x   T3   - - - - - - - - ->     T1   y
  //      / \       <- - - - - - - - -         / \
  //     T1  T2     Rotation gauche (y)       T2  T3
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    this.setNodeHeight(y);
    this.setNodeHeight(x);
    return x;
  }

  insertNode(node, key) {
    if (node === null) {
      return new Node(key);
    }

    if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }

    this.setNodeHeight(node);
    return this.balanceNode(node);
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  getMinNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  deleteNode(node, key) {
    if (node === null) {
      return node;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        const minNode = this.getMinNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
      }
    }

    this.setNodeHeight(node);
    return this.balanceNode(node);
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
}

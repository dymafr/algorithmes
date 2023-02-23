class RBNode {
  constructor(key, color = 'red') {
    this.key = key;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = color;
  }
}

export default class RBTree {
  constructor() {
    this.NilNode = new RBNode(null, 'black');
    this.root = this.NilNode;
  }

  insert(key) {
    let current = this.root;
    let parent = this.NilNode;
    const newNode = new RBNode(key, 'red');

    while (current !== this.NilNode) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        return;
      }
    }
    newNode.parent = parent;
    if (parent === this.NilNode) {
      newNode.color = 'black';
      this.root = newNode;
    } else if (parent.key > newNode.key) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
    newNode.left = this.NilNode;
    newNode.right = this.NilNode;
    this.insertFix(newNode);
  }

  insertFix(node) {
    let parent = node.parent;
    while (parent.color === 'red') {
      let grandParent = parent.parent;
      let uncle = this.getUncle(node);
      if (uncle.color === 'red') {
        uncle.color = 'black';
        parent.color = 'black';
        if (grandParent !== this.root) {
          grandParent.color = 'red';
          node = grandParent;
          parent = node.parent;
        }
      } else {
        let nodeToRecolor = parent;
        if (parent === grandParent.left) {
          if (node === parent.left) {
            // rotation gauche gauche
            this.rotateRight(grandParent);
          } else {
            // rotation gauche droite
            this.rotateLeft(parent);
            this.rotateRight(grandParent);
            nodeToRecolor = node;
          }
        } else {
          if (node === parent.right) {
            // rotation droite droite
            this.rotateLeft(grandParent);
          } else {
            // droite gauche
            this.rotateRight(parent);
            this.rotateLeft(grandParent);
            nodeToRecolor = node;
          }
        }
        grandParent.color = 'red';
        nodeToRecolor.color = 'black';
        return;
      }
    }
  }

  rotateLeft(x) {
    const parent = x.parent;
    const y = x.right;
    x.right = y.left;
    if (y.left !== this.NilNode) {
      x.right.parent = x;
    }
    if (parent === this.NilNode) {
      this.root = y;
    } else if (parent.left === x) {
      parent.left = y;
    } else {
      parent.right = y;
    }
    y.parent = parent;
    x.parent = y;
    y.left = x;
  }

  rotateRight(x) {
    const parent = x.parent;
    const y = x.left;
    x.left = y.right;
    if (y.right !== this.NilNode) {
      x.left.parent = x;
    }
    if (parent === this.NilNode) {
      this.root = y;
    } else if (parent.left === x) {
      parent.left = y;
    } else {
      parent.right = y;
    }
    y.parent = parent;
    x.parent = y;
    y.right = x;
  }

  getUncle(node) {
    const parent = node.parent;
    const grandParent = parent.parent;
    if (parent === grandParent.left) {
      return grandParent.right;
    } else {
      return grandParent.left;
    }
  }

  search(key) {
    let current = this.root;
    while (current !== this.NilNode) {
      if (key < current.key) {
        current = current.left;
      } else if (key > current.key) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  deleteNodeFromParent(node) {
    if (node.parent === this.NilNode) {
      this.root = this.NilNode;
    } else if (node.parent.left === node) {
      node.parent.left = this.NilNode;
    } else {
      node.parent.right = this.NilNode;
    }
  }

  minFromNode(node) {
    while (node.left !== this.NilNode) {
      node = node.left;
    }
    return node;
  }

  delete(key) {
    const node = this.search(key);
    if (!node) {
      return null;
    } else {
      let nodeToDelete = node;
      while (
        nodeToDelete.left !== this.NilNode ||
        nodeToDelete.right !== this.NilNode
      ) {
        if (nodeToDelete.left === this.NilNode) {
          nodeToDelete.key = nodeToDelete.right.key;
          nodeToDelete = nodeToDelete.right;
        } else if (nodeToDelete.right === this.NilNode) {
          nodeToDelete.key = nodeToDelete.left.key;
          nodeToDelete = nodeToDelete.left;
        } else {
          let minNodeFromRight = this.minFromNode(nodeToDelete.right);
          nodeToDelete.key = minNodeFromRight.key;
          nodeToDelete = minNodeFromRight;
        }
      }
      if (nodeToDelete.color === 'black') {
        this.insertFixDelete(nodeToDelete);
      }
      this.deleteNodeFromParent(nodeToDelete);
    }
  }

  getSibling(node) {
    if (node.parent.left === node) {
      return node.parent.right;
    } else {
      return node.parent.left;
    }
  }

  getFarSiblingSon(node) {
    if (node.parent.left === node) {
      return node.parent.right.right;
    } else {
      return node.parent.left.left;
    }
  }

  getCloseSiblingSon(node) {
    if (node.parent.left === node) {
      return node.parent.right.left;
    } else {
      return node.parent.left.right;
    }
  }

  insertFixDelete(nodeToDelete) {
    if (nodeToDelete === this.root) {
      // cas a
      return;
    } else {
      let sibling = this.getSibling(nodeToDelete);
      let parent = nodeToDelete.parent;
      if (
        sibling.color === 'black' &&
        sibling.left.color === 'black' &&
        sibling.right.color === 'black'
      ) {
        // cas b
        sibling.color = 'red';
        if (parent.color === 'red') {
          parent.color = 'black';
        } else {
          this.insertFixDelete(parent);
        }
      } else if (sibling.color === 'red') {
        // cas c
        parent.color = 'red';
        sibling.color = 'black';
        if (parent.left === nodeToDelete) {
          this.rotateLeft(parent);
        } else {
          this.rotateRight(parent);
        }
        this.insertFixDelete(nodeToDelete);
      } else {
        let farSiblingSon = this.getFarSiblingSon(nodeToDelete);
        if (farSiblingSon.color === 'black') {
          // cas d
          const closeSiblingSon = this.getCloseSiblingSon(nodeToDelete);
          closeSiblingSon.color = 'black';
          sibling.color = 'red';
          if (nodeToDelete === parent.left) {
            this.rotateRight(sibling);
          } else {
            this.rotateLeft(sibling);
          }
        }
        // cas e
        sibling = this.getSibling(nodeToDelete);
        farSiblingSon = this.getFarSiblingSon(nodeToDelete);
        sibling.color = parent.color;
        farSiblingSon.color = 'black';
        parent.color = 'black';
        if (nodeToDelete === parent.left) {
          this.rotateLeft(parent);
        } else {
          this.rotateRight(parent);
        }
      }
    }
  }
}

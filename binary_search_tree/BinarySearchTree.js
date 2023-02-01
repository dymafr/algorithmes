import { QueueLL } from '../queue/QueueLL.js';
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    let current = this.root;
    let parent = null;
    while (current !== null) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (parent === null) {
      this.root = newNode;
    } else if (key < parent.key) {
      parent.left = newNode;
    } else if (key > parent.key) {
      parent.right = newNode;
    }
  }

  search(searchedKey) {
    let current = this.root;
    while (current !== null && current.key !== searchedKey) {
      if (searchedKey < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }

  min() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.key;
  }

  minfrom(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  max() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.key;
  }

  delete(key) {
    let current = this.root;
    let parent = null;
    // Recherche de la Node à supprimer
    while (current !== null && current.key !== key) {
      parent = current;
      if (key < current.key) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current === null) {
      return;
    }
    // Cas 1 : pas d'enfant
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (current === parent.left) {
        parent.left = null;
      } else {
        parent.right = null;
      }
      // Cas 2 : un seul enfant à droite
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      } else if (current === parent.left) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
      // Cas 3 : un seul enfant à gauche
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left;
      } else if (current === parent.left) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
      // Cas 4 : deux enfants
    } else {
      let successor = current.right;
      let successorParent = current;
      while (successor.left !== null) {
        successorParent = successor;
        successor = successor.left;
      }
      if (successor === successorParent.left) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
      current.key = successor.key;
    }
  }

  deleteRecursive(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    if (!node) {
      node = null;
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else {
      if (!node.left && !node.right) {
        node = null;
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        const minNode = this.minfrom(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
      }
    }
    return node;
  }

  // Parcours en largeur (BFS)
  levelOrderTraversal() {
    const queue = new QueueLL();
    queue.enqueue(this.root);
    while (!queue.isEmpty()) {
      const current = queue.dequeue();
      console.log(current.key);
      if (current.left !== null) {
        queue.enqueue(current.left);
      }
      if (current.right !== null) {
        queue.enqueue(current.right);
      }
    }
  }

  // Parcours en profondeur (DFS)
  inOrderTreeWalk(node) {
    if (node !== null) {
      this.inOrderTreeWalk(node.left);
      console.log(node.key);
      this.inOrderTreeWalk(node.right);
    }
  }

  preOrderTreeWalk(node) {
    if (node !== null) {
      console.log(node.key);
      this.preOrderTreeWalk(node.left);
      this.preOrderTreeWalk(node.right);
    }
  }

  postOrderTreeWalk(node) {
    if (node !== null) {
      this.postOrderTreeWalk(node.left);
      this.postOrderTreeWalk(node.right);
      console.log(node.key);
    }
  }

  isEmpty() {
    return this.root === null;
  }
}

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (key === current.key) {
          return;
        } else if (key < current.key) {
          if (current.left === null) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else if (key > current.key) {
          if (current.right === null) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
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

  max() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.key;
  }

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
}

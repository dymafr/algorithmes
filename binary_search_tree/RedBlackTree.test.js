import RBTree from './RedBlackTree';

class RBTestTree extends RBTree {
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

describe('##Suite de tests RBTree', () => {
  let tree;

  beforeEach(() => {
    tree = new RBTestTree();
  });

  test("Insertion d'un élément", () => {
    tree.insert(1);
    expect(tree.root.key).toBe(1);
    expect(tree.root.color).toBe('black');
  });

  test('Insertion de 2 éléments', () => {
    tree.insert(17);
    tree.insert(19);
    expect(tree.root.key).toBe(17);
    expect(tree.root.right.key).toBe(19);
    expect(tree.root.color).toBe('black');
    expect(tree.root.right.color).toBe('red');
  });

  test('Cas où parent et oncle sont rouges', () => {
    tree.insert(17);
    tree.insert(9);
    tree.insert(19);
    tree.insert(18);
    tree.insert(75);
    expect(tree.root.key).toBe(17);
    expect(tree.root.left.key).toBe(9);
    expect(tree.root.right.key).toBe(19);
    expect(tree.root.right.right.key).toBe(75);
    expect(tree.root.right.left.key).toBe(18);
    expect(tree.root.color).toBe('black');
    expect(tree.root.left.color).toBe('black');
    expect(tree.root.right.color).toBe('black');
    expect(tree.root.right.right.color).toBe('red');
    expect(tree.root.right.left.color).toBe('red');
    tree.insert(81);
    expect(tree.root.key).toBe(17);
    expect(tree.root.left.key).toBe(9);
    expect(tree.root.right.key).toBe(19);
    expect(tree.root.right.right.key).toBe(75);
    expect(tree.root.right.left.key).toBe(18);
    expect(tree.root.right.right.right.key).toBe(81);
    expect(tree.root.color).toBe('black');
    expect(tree.root.left.color).toBe('black');
    expect(tree.root.right.color).toBe('red');
    expect(tree.root.right.right.color).toBe('black');
    expect(tree.root.right.left.color).toBe('black');
    expect(tree.root.right.right.right.color).toBe('red');
  });

  test('Cas où parent est rouge et oncle est noir, lélément inséré est un petit-enfant interne (triangle)', () => {
    tree.insert(17);
    tree.insert(9);
    tree.insert(19);
    tree.insert(75);
    tree.insert(24);
    expect(tree.root.key).toBe(17);
    expect(tree.root.left.key).toBe(9);
    expect(tree.root.right.key).toBe(24);
    expect(tree.root.right.right.key).toBe(75);
    expect(tree.root.right.left.key).toBe(19);
    expect(tree.root.color).toBe('black');
    expect(tree.root.left.color).toBe('black');
    expect(tree.root.right.color).toBe('black');
    expect(tree.root.right.right.color).toBe('red');
    expect(tree.root.right.left.color).toBe('red');
  });

  test('Cas où parent est rouge et oncle est noir, lélément inséré est un petit-enfant externe', () => {
    tree.insert(17);
    tree.insert(9);
    tree.insert(19);
    tree.insert(75);
    tree.insert(81);
    expect(tree.root.key).toBe(17);
    expect(tree.root.left.key).toBe(9);
    expect(tree.root.right.key).toBe(75);
    expect(tree.root.right.right.key).toBe(81);
    expect(tree.root.right.left.key).toBe(19);
    expect(tree.root.color).toBe('black');
    expect(tree.root.left.color).toBe('black');
    expect(tree.root.right.color).toBe('black');
    expect(tree.root.right.right.color).toBe('red');
    expect(tree.root.right.left.color).toBe('red');
  });

  test("Suppression d un élément qui n'existe pas", () => {
    tree.insert(17);
    tree.insert(9);
    tree.delete(19);
    expect(tree.root.key).toBe(17);
    expect(tree.root.left.key).toBe(9);
  });

  test('Suppression de la racine', () => {
    tree.insert(17);
    tree.delete(17);
    expect(tree.root.key).toBe(null);
    expect(tree.root.color).toBe('black');
  });

  test('Suppression de la racine avec un enfant', () => {
    tree.insert(17);
    tree.insert(9);
    tree.delete(17);
    expect(tree.root.key).toBe(9);
    expect(tree.root.color).toBe('black');
  });

  test('Suppression lorsque frère est rouge', () => {
    tree.insert(17);
    tree.insert(9);
    tree.insert(19);
    tree.insert(18);
    tree.insert(75);
    tree.delete(9);
    expect(tree.root.key).toBe(19);
    expect(tree.root.left.key).toBe(17);
    expect(tree.root.right.key).toBe(75);
    expect(tree.root.left.right.key).toBe(18);
    expect(tree.root.color).toBe('black');
    expect(tree.root.left.color).toBe('black');
    expect(tree.root.right.color).toBe('black');
    expect(tree.root.left.right.color).toBe('red');
  });

  describe('##Tests randomisés équilibre Arbre RB', () => {
    let tree;

    beforeEach(() => {
      tree = new RBTestTree();
    });

    describe('#Tests dynamiques randomisés insertions', () => {
      for (let i = 0; i < 200; i++) {
        test(`Test d'équilibre aléatoire ${i}`, () => {
          const randomNodeNumber = Math.floor(Math.random() * 200);
          for (let j = 0; j <= randomNodeNumber; j++) {
            const random = Math.floor(Math.random() * 100 + 1);
            tree.insert(random);
            expect(tree.isRBTree()).toBe(true);
          }
        });
      }
    });

    describe('#Tests dynamiques randomisés suppression', () => {
      for (let i = 0; i < 100; i++) {
        test(`Test d'équilibre aléatoire ${i}`, () => {
          const randomNodeNumber = Math.floor(Math.random() * 200);
          for (let j = 0; j <= randomNodeNumber; j++) {
            const random = Math.floor(Math.random() * 30 + 1);
            tree.insert(random);
            const randomNumberDeletions = Math.floor(Math.random() * 20 + 1);
            for (let k = 0; k <= randomNumberDeletions; k++) {
              const randomDeletion = Math.floor(Math.random() * 30 + 1);
              tree.delete(randomDeletion);
            }
            expect(tree.isRBTree()).toBe(true);
          }
        });
      }
    });
  });
});

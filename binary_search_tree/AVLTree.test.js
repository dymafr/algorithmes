import AVLTree from './AVLTree.js';

describe('##Suite de tests AVLTree', () => {
  let tree;

  beforeEach(() => {
    tree = new AVLTree();
  });

  test('Rotation simple Right-Right', () => {
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: { key: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotations simples Right-Right', () => {
    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    expect(tree).toEqual({
      root: {
        key: 3,
        height: 2,
        left: { key: 2, left: null, right: null, height: 1 },
        right: { key: 4, left: null, right: null, height: 1 },
      },
    });

    tree.insert(1);
    expect(tree).toEqual({
      root: {
        key: 3,
        height: 3,
        left: {
          key: 2,
          left: { key: 1, left: null, right: null, height: 1 },
          right: null,
          height: 2,
        },
        right: { key: 4, left: null, right: null, height: 1 },
      },
    });

    tree.insert(0);
    expect(tree).toEqual({
      root: {
        key: 3,
        height: 3,
        left: {
          key: 1,
          height: 2,
          left: { key: 0, left: null, right: null, height: 1 },
          right: { key: 2, left: null, right: null, height: 1 },
        },
        right: {
          key: 4,
          height: 1,
          left: null,
          right: null,
        },
      },
    });
  });

  test('Rotation simple Left-Left', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: { key: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotation simple Left-Right', () => {
    tree.insert(3);
    tree.insert(1);
    tree.insert(2);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: { key: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotation simple Right-Left', () => {
    tree.insert(1);
    tree.insert(3);
    tree.insert(2);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: { key: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotations complexes Left-Left', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: { key: 3, left: null, right: null, height: 1 },
      },
    });

    tree.insert(4);
    tree.insert(5);

    expect(tree).toEqual({
      root: {
        key: 2,
        height: 3,
        left: { key: 1, left: null, right: null, height: 1 },
        right: {
          key: 4,
          height: 2,
          left: { key: 3, left: null, right: null, height: 1 },
          right: { key: 5, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(6);

    expect(tree).toEqual({
      root: {
        key: 4,
        height: 3,
        left: {
          key: 2,
          height: 2,
          left: { key: 1, left: null, right: null, height: 1 },
          right: { key: 3, left: null, right: null, height: 1 },
        },
        right: {
          key: 5,
          height: 2,
          left: null,
          right: { key: 6, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(7);

    expect(tree).toEqual({
      root: {
        key: 4,
        height: 3,
        left: {
          key: 2,
          height: 2,
          left: { key: 1, left: null, right: null, height: 1 },
          right: { key: 3, left: null, right: null, height: 1 },
        },
        right: {
          key: 6,
          height: 2,
          left: { key: 5, left: null, right: null, height: 1 },
          right: { key: 7, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(8);

    expect(tree).toEqual({
      root: {
        key: 4,
        height: 4,
        left: {
          key: 2,
          height: 2,
          left: { key: 1, left: null, right: null, height: 1 },
          right: { key: 3, left: null, right: null, height: 1 },
        },
        right: {
          key: 6,
          height: 3,
          left: { key: 5, left: null, right: null, height: 1 },
          right: {
            key: 7,
            height: 2,
            left: null,
            right: { key: 8, left: null, right: null, height: 1 },
          },
        },
      },
    });
  });

  test('Insertions de 8 noeuds', () => {
    tree.insert(8);
    tree.insert(7);
    tree.insert(6);
    tree.insert(5);
    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    tree.insert(1);

    expect(tree).toEqual({
      root: {
        key: 5,
        height: 4,
        left: {
          key: 3,
          height: 3,
          left: {
            key: 2,
            height: 2,
            left: { key: 1, left: null, right: null, height: 1 },
            right: null,
          },
          right: { key: 4, left: null, right: null, height: 1 },
        },
        right: {
          key: 7,
          height: 2,
          left: { key: 6, left: null, right: null, height: 1 },
          right: { key: 8, left: null, right: null, height: 1 },
        },
      },
    });
  });

  test('Insertions de 7 autres noeuds', () => {
    tree.insert(40);
    tree.insert(20);
    tree.insert(10);
    tree.insert(25);
    tree.insert(30);
    tree.insert(22);
    tree.insert(50);

    expect(tree).toEqual({
      root: {
        key: 25,
        height: 3,
        left: {
          key: 20,
          height: 2,
          left: { key: 10, left: null, right: null, height: 1 },
          right: { key: 22, left: null, right: null, height: 1 },
        },
        right: {
          key: 40,
          height: 2,
          left: { key: 30, left: null, right: null, height: 1 },
          right: { key: 50, left: null, right: null, height: 1 },
        },
      },
    });
  });

  test('Insertions de 10 autres noeuds', () => {
    tree.insert(92);
    tree.insert(6);
    tree.insert(97);
    tree.insert(43);
    tree.insert(62);
    tree.insert(28);
    tree.insert(16);
    tree.insert(30);
    tree.insert(32);
    tree.insert(24);

    expect(tree).toEqual({
      root: {
        key: 43,
        height: 4,
        left: {
          key: 28,
          height: 3,
          left: {
            key: 16,
            height: 2,
            left: { key: 6, left: null, right: null, height: 1 },
            right: { key: 24, left: null, right: null, height: 1 },
          },
          right: {
            key: 30,
            height: 2,
            left: null,
            right: { key: 32, left: null, right: null, height: 1 },
          },
        },
        right: {
          key: 92,
          height: 2,
          left: { key: 62, left: null, right: null, height: 1 },
          right: { key: 97, left: null, right: null, height: 1 },
        },
      },
    });
  });

  test("Suppression d'un noeud sans fils", () => {
    tree.insert(1);
    tree.delete(1);
    expect(tree).toEqual({ root: null });
  });

  test("Suppression d'un noeud avec un fils", () => {
    tree.insert(1);
    tree.insert(2);
    tree.delete(1);
    expect(tree).toEqual({
      root: {
        key: 2,
        height: 1,
        left: null,
        right: null,
      },
    });
  });

  test("Suppression d'un noeud avec deux fils", () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.delete(2);
    expect(tree).toEqual({
      root: {
        key: 3,
        height: 2,
        left: { key: 1, left: null, right: null, height: 1 },
        right: null,
      },
    });
  });

  test('Suppression de tous les noeud - 3 noeuds', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);
    tree.delete(1);
    tree.delete(2);
    tree.delete(3);
    expect(tree).toEqual({ root: null });
  });

  test('Suppressions parmi 10 autres noeuds', () => {
    tree.insert(92);
    tree.insert(6);
    tree.insert(97);
    tree.insert(43);
    tree.insert(62);
    tree.insert(28);
    tree.insert(16);
    tree.insert(30);
    tree.insert(32);
    tree.insert(24);

    tree.delete(62);
    tree.delete(92);

    expect(tree).toEqual({
      root: {
        key: 28,
        height: 4,
        left: {
          key: 16,
          height: 2,
          left: { key: 6, left: null, right: null, height: 1 },
          right: { key: 24, left: null, right: null, height: 1 },
        },
        right: {
          key: 43,
          height: 3,
          left: {
            key: 30,
            height: 2,
            left: null,
            right: { key: 32, left: null, right: null, height: 1 },
          },
          right: { key: 97, left: null, right: null, height: 1 },
        },
      },
    });
  });

  test('Insertions et suppressions complexes', () => {
    tree.insert(33);
    tree.insert(13);
    tree.insert(53);
    tree.insert(11);
    tree.insert(21);
    tree.insert(61);
    tree.insert(8);
    tree.insert(9);

    expect(tree).toEqual({
      root: {
        key: 33,
        height: 4,
        left: {
          key: 13,
          height: 3,
          left: {
            key: 9,
            height: 2,
            left: { key: 8, left: null, right: null, height: 1 },
            right: { key: 11, left: null, right: null, height: 1 },
          },
          right: { key: 21, left: null, right: null, height: 1 },
        },
        right: {
          key: 53,
          height: 2,
          left: null,
          right: { key: 61, left: null, right: null, height: 1 },
        },
      },
    });

    tree.delete(13);

    expect(tree).toEqual({
      root: {
        key: 33,
        height: 4,
        left: {
          key: 9,
          height: 3,
          left: { key: 8, left: null, right: null, height: 1 },
          right: {
            key: 21,
            height: 2,
            left: { key: 11, left: null, right: null, height: 1 },
            right: null,
          },
        },
        right: {
          key: 53,
          height: 2,
          left: null,
          right: { key: 61, left: null, right: null, height: 1 },
        },
      },
    });

    tree.delete(33);

    expect(tree).toEqual({
      root: {
        key: 21,
        height: 3,
        left: {
          key: 9,
          height: 2,
          left: { key: 8, left: null, right: null, height: 1 },
          right: { key: 11, left: null, right: null, height: 1 },
        },
        right: {
          key: 53,
          height: 2,
          left: null,
          right: { key: 61, left: null, right: null, height: 1 },
        },
      },
    });
  });
});

describe('##Tests randomisés équilibre AVL', () => {
  let tree;

  beforeEach(() => {
    tree = new AVLTree();
  });

  describe('#Tests dynamiques randomisés insertion', () => {
    for (let i = 0; i < 100; i++) {
      test(`Test d'équilibre aléatoire ${i}`, () => {
        const randomNodeNumber = Math.floor(Math.random() * 200);
        for (let j = 0; j <= randomNodeNumber; j++) {
          const random = Math.floor(Math.random() * 100 + 1);
          tree.insert(random);
          expect(tree.isTreeBalanced()).toBe(true);
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
          expect(tree.isTreeBalanced()).toBe(true);
        }
      });
    }
  });
});

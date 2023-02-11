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
        value: 2,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
        right: { value: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotations simples Right-Right', () => {
    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    expect(tree).toEqual({
      root: {
        value: 3,
        height: 2,
        left: { value: 2, left: null, right: null, height: 1 },
        right: { value: 4, left: null, right: null, height: 1 },
      },
    });

    tree.insert(1);
    expect(tree).toEqual({
      root: {
        value: 3,
        height: 3,
        left: {
          value: 2,
          left: { value: 1, left: null, right: null, height: 1 },
          right: null,
          height: 2,
        },
        right: { value: 4, left: null, right: null, height: 1 },
      },
    });

    tree.insert(0);
    expect(tree).toEqual({
      root: {
        value: 3,
        height: 3,
        left: {
          value: 1,
          height: 2,
          left: { value: 0, left: null, right: null, height: 1 },
          right: { value: 2, left: null, right: null, height: 1 },
        },
        right: {
          value: 4,
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
        value: 2,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
        right: { value: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotation simple Left-Right', () => {
    tree.insert(3);
    tree.insert(1);
    tree.insert(2);

    expect(tree).toEqual({
      root: {
        value: 2,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
        right: { value: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotation simple Right-Left', () => {
    tree.insert(1);
    tree.insert(3);
    tree.insert(2);

    expect(tree).toEqual({
      root: {
        value: 2,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
        right: { value: 3, left: null, right: null, height: 1 },
      },
    });
  });

  test('Rotations complexes Left-Left', () => {
    tree.insert(1);
    tree.insert(2);
    tree.insert(3);

    expect(tree).toEqual({
      root: {
        value: 2,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
        right: { value: 3, left: null, right: null, height: 1 },
      },
    });

    tree.insert(4);
    tree.insert(5);

    expect(tree).toEqual({
      root: {
        value: 2,
        height: 3,
        left: { value: 1, left: null, right: null, height: 1 },
        right: {
          value: 4,
          height: 2,
          left: { value: 3, left: null, right: null, height: 1 },
          right: { value: 5, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(6);

    expect(tree).toEqual({
      root: {
        value: 4,
        height: 3,
        left: {
          value: 2,
          height: 2,
          left: { value: 1, left: null, right: null, height: 1 },
          right: { value: 3, left: null, right: null, height: 1 },
        },
        right: {
          value: 5,
          height: 2,
          left: null,
          right: { value: 6, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(7);

    expect(tree).toEqual({
      root: {
        value: 4,
        height: 3,
        left: {
          value: 2,
          height: 2,
          left: { value: 1, left: null, right: null, height: 1 },
          right: { value: 3, left: null, right: null, height: 1 },
        },
        right: {
          value: 6,
          height: 2,
          left: { value: 5, left: null, right: null, height: 1 },
          right: { value: 7, left: null, right: null, height: 1 },
        },
      },
    });

    tree.insert(8);

    expect(tree).toEqual({
      root: {
        value: 4,
        height: 4,
        left: {
          value: 2,
          height: 2,
          left: { value: 1, left: null, right: null, height: 1 },
          right: { value: 3, left: null, right: null, height: 1 },
        },
        right: {
          value: 6,
          height: 3,
          left: { value: 5, left: null, right: null, height: 1 },
          right: {
            value: 7,
            height: 2,
            left: null,
            right: { value: 8, left: null, right: null, height: 1 },
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
        value: 5,
        height: 4,
        left: {
          value: 3,
          height: 3,
          left: {
            value: 2,
            height: 2,
            left: { value: 1, left: null, right: null, height: 1 },
            right: null,
          },
          right: { value: 4, left: null, right: null, height: 1 },
        },
        right: {
          value: 7,
          height: 2,
          left: { value: 6, left: null, right: null, height: 1 },
          right: { value: 8, left: null, right: null, height: 1 },
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
        value: 25,
        height: 3,
        left: {
          value: 20,
          height: 2,
          left: { value: 10, left: null, right: null, height: 1 },
          right: { value: 22, left: null, right: null, height: 1 },
        },
        right: {
          value: 40,
          height: 2,
          left: { value: 30, left: null, right: null, height: 1 },
          right: { value: 50, left: null, right: null, height: 1 },
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
        value: 43,
        height: 4,
        left: {
          value: 28,
          height: 3,
          left: {
            value: 16,
            height: 2,
            left: { value: 6, left: null, right: null, height: 1 },
            right: { value: 24, left: null, right: null, height: 1 },
          },
          right: {
            value: 30,
            height: 2,
            left: null,
            right: { value: 32, left: null, right: null, height: 1 },
          },
        },
        right: {
          value: 92,
          height: 2,
          left: { value: 62, left: null, right: null, height: 1 },
          right: { value: 97, left: null, right: null, height: 1 },
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
        value: 2,
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
        value: 3,
        height: 2,
        left: { value: 1, left: null, right: null, height: 1 },
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
        value: 28,
        height: 4,
        left: {
          value: 16,
          height: 2,
          left: { value: 6, left: null, right: null, height: 1 },
          right: { value: 24, left: null, right: null, height: 1 },
        },
        right: {
          value: 43,
          height: 3,
          left: {
            value: 30,
            height: 2,
            left: null,
            right: { value: 32, left: null, right: null, height: 1 },
          },
          right: { value: 97, left: null, right: null, height: 1 },
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
        value: 33,
        height: 4,
        left: {
          value: 13,
          height: 3,
          left: {
            value: 9,
            height: 2,
            left: { value: 8, left: null, right: null, height: 1 },
            right: { value: 11, left: null, right: null, height: 1 },
          },
          right: { value: 21, left: null, right: null, height: 1 },
        },
        right: {
          value: 53,
          height: 2,
          left: null,
          right: { value: 61, left: null, right: null, height: 1 },
        },
      },
    });

    tree.delete(13);

    expect(tree).toEqual({
      root: {
        value: 33,
        height: 4,
        left: {
          value: 9,
          height: 3,
          left: { value: 8, left: null, right: null, height: 1 },
          right: {
            value: 21,
            height: 2,
            left: { value: 11, left: null, right: null, height: 1 },
            right: null,
          },
        },
        right: {
          value: 53,
          height: 2,
          left: null,
          right: { value: 61, left: null, right: null, height: 1 },
        },
      },
    });

    tree.delete(33);

    expect(tree).toEqual({
      root: {
        value: 21,
        height: 3,
        left: {
          value: 9,
          height: 2,
          left: { value: 8, left: null, right: null, height: 1 },
          right: { value: 11, left: null, right: null, height: 1 },
        },
        right: {
          value: 53,
          height: 2,
          left: null,
          right: { value: 61, left: null, right: null, height: 1 },
        },
      },
    });
  });
});

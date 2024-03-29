import BinarySearchTree from './BinarySearchTree.js';

describe('##Suite de tests BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('Un BST nouvellement créée doit être vide', () => {
    expect(bst.isEmpty()).toBe(true);
  });

  test("Insertion d'un élément dans un BST vide", () => {
    bst.insert(1);
    expect(bst.root.key).toBe(1);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de deux éléments dont un supérieur à la racine dans un BST', () => {
    bst.insert(10);
    bst.insert(22);
    expect(bst.root.key).toBe(10);
    expect(bst.root.right.key).toBe(22);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de deux éléments avec la même clé', () => {
    bst.insert(10);
    bst.insert(10);
    expect(bst.root.key).toBe(10);
    expect(bst.root.right).toBe(null);
    expect(bst.root.right).toBe(null);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de deux éléments dont un inférieur à la racine dans un BST', () => {
    bst.insert(10);
    bst.insert(5);
    expect(bst.root.key).toBe(10);
    expect(bst.root.left.key).toBe(5);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de trois éléments dont un inférieur et un supérieur dans un BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(22);
    expect(bst.root.key).toBe(10);
    expect(bst.root.left.key).toBe(5);
    expect(bst.root.right.key).toBe(22);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de quatre éléments dont deux inférieurs et un supérieur dans un BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(22);
    bst.insert(3);
    expect(bst.root.key).toBe(10);
    expect(bst.root.left.key).toBe(5);
    expect(bst.root.left.left.key).toBe(3);
    expect(bst.root.right.key).toBe(22);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de quatre éléments dont un inférieur et deux supérieurs dans un BST', () => {
    bst.insert(10);
    bst.insert(5);
    bst.insert(22);
    bst.insert(30);
    expect(bst.root.key).toBe(10);
    expect(bst.root.left.key).toBe(5);
    expect(bst.root.right.key).toBe(22);
    expect(bst.root.right.right.key).toBe(30);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Insertion de dix éléments dans un BST', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left.key).toBe(20);
    expect(bst.root.left.left.key).toBe(11);
    expect(bst.root.left.left.left.key).toBe(8);
    expect(bst.root.left.left.right.key).toBe(16);
    expect(bst.root.left.right.key).toBe(29);
    expect(bst.root.left.right.left.key).toBe(26);
    expect(bst.root.right.key).toBe(65);
    expect(bst.root.right.left.key).toBe(50);
    expect(bst.root.right.right.key).toBe(91);
    expect(bst.isEmpty()).toBe(false);
  });

  test("Recherche d'un élément dans un BST vide", () => {
    expect(bst.search(1)).toBe(null);
  });

  test("Recherche d'un élément dans un BST d'un élément", () => {
    bst.insert(1);
    expect(bst.search(1).key).toBe(1);
  });

  test("Recherche d'un élément dans un BST d'un élément qui n'existe pas", () => {
    bst.insert(1);
    expect(bst.search(2)).toBe(null);
  });

  test("Recherche d'un élément dans un BST de 10 d'un élément qui n'existe pas", () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    expect(bst.search(100)).toBe(null);
  });

  test("Recherche d'un élément dans un BST de 10 d'un élément qui existe", () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    expect(bst.search(50).key).toBe(50);
  });

  test('Recherche du plus petit élément dans un BST de 20', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    bst.insert(5);
    bst.insert(9);
    bst.insert(13);
    bst.insert(15);
    bst.insert(19);
    bst.insert(22);
    bst.insert(24);
    bst.insert(28);
    bst.insert(31);
    bst.insert(33);
    expect(bst.min()).toBe(5);
  });

  test('Recherche du plus grand élément dans un BST de 20', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    bst.insert(5);
    bst.insert(9);
    bst.insert(13);
    bst.insert(15);
    bst.insert(19);
    bst.insert(22);
    bst.insert(24);
    bst.insert(28);
    bst.insert(31);
    bst.insert(33);
    expect(bst.max()).toBe(91);
  });

  test('Supprimer un élément dans un BST vide', () => {
    bst.delete(1);
    expect(bst.isEmpty()).toBe(true);
  });

  test("Supprimer un élément dans un BST d'un élément", () => {
    bst.insert(1);
    bst.delete(1);
    console.log(bst);
    expect(bst.isEmpty()).toBe(true);
  });

  test('Supprimer un élément sans enfant dans un BST de 3', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.delete(20);
    console.log(bst);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left).toBe(null);
    expect(bst.root.right.key).toBe(65);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer la racine avec un enfant dans un BST de 2', () => {
    bst.insert(42);
    bst.insert(20);
    bst.delete(42);
    expect(bst.root.key).toBe(20);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer la racine avec deux enfants dans un BST de 3', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.delete(42);
    expect(bst.root.key).toBe(65);
    expect(bst.root.left.key).toBe(20);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer un élément avec un enfant à droite dans un BST de 4', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(29);
    bst.delete(20);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left.key).toBe(29);
    expect(bst.root.right.key).toBe(65);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer un élément avec un enfant à gauche dans un BST de 4', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.delete(20);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left.key).toBe(11);
    expect(bst.root.right.key).toBe(65);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer un élément avec deux enfants dans un BST de 5', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.delete(20);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left.key).toBe(29);
    expect(bst.root.left.left.key).toBe(11);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer un élément avec deux enfants dans un autre BST', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(6);
    bst.insert(14);
    bst.insert(4);
    bst.insert(7);
    bst.insert(13);
    bst.delete(3);
    expect(bst.root.key).toBe(8);
    expect(bst.root.left.key).toBe(4);
    expect(bst.root.left.left.key).toBe(1);
    expect(bst.root.left.right.key).toBe(6);
    expect(bst.root.left.right.right.key).toBe(7);
    expect(bst.root.left.right.right.left).toBe(null);
    expect(bst.root.right.key).toBe(10);
    expect(bst.root.right.right.key).toBe(14);
    expect(bst.root.right.right.left.key).toBe(13);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer la racine avec deux enfants dans un BST', () => {
    bst.insert(8);
    bst.insert(3);
    bst.insert(10);
    bst.insert(1);
    bst.insert(6);
    bst.insert(14);
    bst.insert(4);
    bst.insert(7);
    bst.insert(13);
    bst.delete(8);
    expect(bst.root.key).toBe(10);
    expect(bst.root.left.key).toBe(3);
    expect(bst.root.left.left.key).toBe(1);
    expect(bst.root.left.right.key).toBe(6);
    expect(bst.root.left.right.right.key).toBe(7);
    expect(bst.root.left.right.left.key).toBe(4);
    expect(bst.root.right.key).toBe(14);
    expect(bst.root.right.left.key).toBe(13);
    expect(bst.isEmpty()).toBe(false);
  });

  test('Supprimer un élément avec deux enfants dans un BST de 10', () => {
    bst.insert(42);
    bst.insert(20);
    bst.insert(65);
    bst.insert(11);
    bst.insert(29);
    bst.insert(50);
    bst.insert(91);
    bst.insert(8);
    bst.insert(16);
    bst.insert(26);
    bst.delete(20);
    expect(bst.root.key).toBe(42);
    expect(bst.root.left.key).toBe(26);
    expect(bst.root.left.left.key).toBe(11);
    expect(bst.root.left.left.right.key).toBe(16);
    expect(bst.root.left.right.key).toBe(29);
    expect(bst.isEmpty()).toBe(false);
  });
});

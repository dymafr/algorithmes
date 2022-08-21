import { LinkedList } from './LinkedList.js';
import { insertionSort } from './insertionSort';

describe("##Suite de tests pour l'inversion de liste chaînée", () => {
  let list = null;

  beforeEach(function () {
    list = new LinkedList();
  });

  describe('#Si la liste est vide', () => {
    test('cela ne fait rien', () => {
      expect(insertionSort(list)).toBe(undefined);
    });
  });

  describe('#Si la liste fait un élément', () => {
    test("l'élément reste présent", () => {
      list.addFirst(1);
      insertionSort(list);
      expect(list.head.value).toBe(1);
    });
  });

  describe('#Si la liste fait deux éléments cela fonctionne', () => {
    test('la liste est triée', () => {
      list.addLast(55);
      list.addLast(12);
      insertionSort(list);
      expect(list.head.value).toBe(12);
      expect(list.head.next.value).toBe(55);
    });
  });

  describe('#Si la liste fait trois éléments cela fonctionne', () => {
    test('la liste est triée', () => {
      list.addLast(55);
      list.addLast(12);
      list.addLast(21);
      insertionSort(list);
      expect(list.head.value).toBe(12);
      expect(list.head.next.value).toBe(21);
      expect(list.head.next.next.value).toBe(55);
    });
  });

  describe('#Si la liste fait quatre éléments cela fonctionne', () => {
    test('la liste est triée', () => {
      list.addLast(42);
      list.addLast(0);
      list.addLast(12);
      list.addLast(55);
      insertionSort(list);
      expect(list.head.value).toBe(0);
      expect(list.head.next.value).toBe(12);
      expect(list.head.next.next.value).toBe(42);
      expect(list.head.next.next.next.value).toBe(55);
    });
  });

  describe('#Si la liste est déjà triée cela fonctionne', () => {
    test('la liste est triée', () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      insertionSort(list);
      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });

  describe('#Si la liste est triée de manière inversée cela fonctionne', () => {
    test('la liste est triée', () => {
      list.addLast(3);
      list.addLast(2);
      list.addLast(1);
      insertionSort(list);
      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });
});

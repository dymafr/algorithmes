import { LinkedList } from './LinkedList.js';

describe('##Suite de tests pour listes chaînées', () => {
  let list = null;

  beforeEach(function () {
    list = new LinkedList();
  });

  describe('#Insertion au début', () => {
    test("cela ajoute correctement l'élément au début de la liste", () => {
      list.addFirst(10);
      const oldHead = list.head;
      list.addFirst(20);

      expect(list.head.value).toBe(20);
      expect(list.head.next).toBe(oldHead);
      expect(list.size).toBe(2);
    });
  });

  describe('#Insertion à la fin', () => {
    test('cela ajoute correctement un élément à la fin de la liste', () => {
      list.addLast(10);
      list.addLast(20);

      expect(list.head.value).toBe(10);
      expect(list.head.next.value).toBe(20);
      expect(list.head.next.next).toBe(null);
      expect(list.size).toBe(2);
    });
  });

  describe("#Insertion à l'index", () => {
    describe('avec un index inférieur à 0', () => {
      test('une erreur est renvoyée', () => {
        expect(() => {
          list.add(-1, 30);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe('avec un index supérieur à la taille de la liste', () => {
      test('une erreur est renvoyée', () => {
        list.addFirst(10);

        expect(() => {
          list.add(10, 30);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe('avec un index de 0', () => {
      test('insert en tête de liste', () => {
        list.addLast(10);
        list.addLast(20);
        list.add(0, 30);
        list.print();

        expect(list.head.value).toBe(30);
        expect(list.head.next.value).toBe(10);
        expect(list.size).toBe(3);
      });
    });

    describe('avec un index au milieu', () => {
      test("insert correctement l'élément", () => {
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);
        list.add(2, 50);
        const node = list.get(2);

        expect(node.value).toBe(50);
        expect(node.next.value).toBe(30);
        expect(list.size).toBe(5);
      });
    });
  });

  describe('#get par index', () => {
    describe('avec un index inférieur à 0', () => {
      test('une erreur est renvoyée', () => {
        expect(() => {
          list.get(-1);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe('avec un index supérieur à la taille de la liste', () => {
      test('une erreur est renvoyée', () => {
        list.addLast(10);

        expect(() => {
          list.get(10);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe("avec l'index 0", () => {
      test('cela renvoie la tête', () => {
        list.addLast(10);
        list.addLast(20);
        expect(list.get(0).value).toBe(10);
      });
    });

    describe('avec un index au mileu', () => {
      test("cela renvoie l'élément au milieu", () => {
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);

        expect(list.get(2).value).toBe(30);
      });
    });
  });

  describe('#Vérifie si la liste contient un élément', () => {
    test('cela vérifie correctement si un élément est contenu', () => {
      list.addLast(10);
      list.addLast('TEST');
      list.addLast(false);

      expect(list.contains(10)).toBe(true);
      expect(list.contains('TEST')).toBe(true);
      expect(list.contains(false)).toBe(true);
      expect(list.contains('NON')).toBe(false);
      expect(list.contains(0)).toBe(false);
    });
  });

  describe('#Suppression du premier élément', () => {
    describe('avec une liste vide', () => {
      test('ne retourne rien', () => {
        expect(list.removeFirst()).toBe(undefined);
      });
    });
    describe("avec une liste d'un élément", () => {
      test('supprime et retourne une liste vide', () => {
        list.addLast(42);
        const removed = list.removeFirst();
        expect(removed).toBe(42);
        expect(list.head).toBe(null);
        expect(list.size).toBe(0);
      });
    });
    describe('avec une liste de deux éléments', () => {
      test('supprime et retourne une liste avec un élément', () => {
        list.addLast(42);
        list.addFirst(10);
        const removed = list.removeFirst();
        expect(removed).toBe(10);
        expect(list.head.value).toBe(42);
        expect(list.head.next).toBe(null);
        expect(list.size).toBe(1);
      });
    });
  });

  describe('#Suppression du dernier élément', () => {
    describe('avec une liste vide', () => {
      test('ne retourne rien', () => {
        expect(list.removeLast()).toBe(undefined);
      });
    });
    describe("avec une liste d'un élément", () => {
      test('supprime et retourne une liste vide', () => {
        list.addLast(42);
        const removed = list.removeLast();
        expect(removed).toBe(42);
        expect(list.head).toBe(null);
        expect(list.size).toBe(0);
      });
    });
    describe('avec une liste de trois éléments', () => {
      test('supprime et retourne une liste avec deux éléments', () => {
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        const removed = list.removeLast();
        expect(removed).toBe(3);
        expect(list.head.value).toBe(1);
        expect(list.head.next.value).toBe(2);
        expect(list.size).toBe(2);
      });
    });
  });

  describe("#Suppression de l'élément à l'index donné", () => {
    describe('avec un index inférieur à 0', () => {
      test('une erreur est renvoyée', () => {
        expect(() => {
          list.remove(-1);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe('avec un index supérieur à la taille de la liste', () => {
      test('une erreur est renvoyée', () => {
        list.addFirst(10);

        expect(() => {
          list.remove(3);
        }).toThrow('Index en dehors des limites');
      });
    });

    describe('avec un index de 0', () => {
      test('supprime la tête', () => {
        list.addLast(10);
        list.addLast(20);
        const removed = list.remove(0);
        expect(removed).toBe(10);
        expect(list.head.value).toBe(20);
        expect(list.size).toBe(1);
      });
    });

    describe('avec un index au milieu', () => {
      test("supprime correctement l'élément", () => {
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);
        const removed = list.remove(2);
        const node = list.get(2);
        expect(removed).toBe(30);
        expect(node.value).toBe(40);
        expect(node.next).toBe(null);
        expect(list.size).toBe(3);
      });
    });
    describe('avec le dernier index', () => {
      test("supprime correctement l'élément", () => {
        list.addLast(10);
        list.addLast(20);
        list.addLast(30);
        list.addLast(40);

        const removed = list.remove(3);
        const node = list.get(3);
        expect(removed).toBe(40);
        expect(node).toBe(undefined);
        expect(list.size).toBe(3);
      });
    });
  });
});

import { LinkedList } from './LinkedList.js';
import { reverse } from './reverseLL';

describe("##Suite de tests pour l'inversion de liste chaînée", () => {
  let list = null;

  beforeEach(function () {
    list = new LinkedList();
  });

  describe('#Si la liste est vide', () => {
    test('cela ne fait rien', () => {
      expect(reverse(list)).toBe(undefined);
    });
  });

  describe('#Si la liste fait un élément', () => {
    test("l'élément reste présent", () => {
      list.addFirst(1);
      reverse(list);
      expect(list.head.value).toBe(1);
    });
  });

  describe('#Si la liste fait trois éléments cela fonctionne', () => {
    test('la liste est inversée', () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      reverse(list);
      expect(list.head.value).toBe(3);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(1);
    });
  });

  describe('#Si la liste fait cinq éléments cela fonctionne', () => {
    test('la liste est inversée', () => {
      list.addLast(1);
      list.addLast(2);
      list.addLast(3);
      list.addLast(4);
      list.addLast(5);
      reverse(list);
      expect(list.head.value).toBe(5);
      expect(list.head.next.value).toBe(4);
      expect(list.head.next.next.value).toBe(3);
      expect(list.head.next.next.next.value).toBe(2);
      expect(list.head.next.next.next.next.value).toBe(1);
      expect(list.head.next.next.next.next.next).toBe(null);
    });
  });
});

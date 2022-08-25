import { LinkedList } from './LinkedList.js';
import { reverse } from './reverseLL';

describe("##Suite de tests pour l'inversion de liste chaînée", () => {
  let list = null;

  beforeEach(function () {
    list = new LinkedList();
  });

  describe('#Si la liste est vide', () => {
    test('cela ne fait rien', () => {
      expect(reverse(list)).toBe(list);
    });
  });

  describe('#Si la liste fait un élément', () => {
    test("l'élément reste présent", () => {
      list.addFirst(1);
      reverse(list);
      expect(list.head.value).toBe(1);
    });
  });
});

describe('##Tests randomisés', () => {
  let list,
    reversedList,
    reversedArray,
    array = null;

  beforeEach(() => {
    array = Array(20)
      .fill()
      .map(() => Math.round(Math.random() * 20));
    reversedArray = [...array].reverse();
    list = new LinkedList();
    array.forEach((el) => {
      list.addLast(el);
    });
    reversedList = new LinkedList();
    reversedArray.forEach((el) => {
      reversedList.addLast(el);
    });
  });

  describe('#Tests dynamiques randomisés', () => {
    for (let i = 0; i < 100; i++) {
      test('la liste est toujours triée', () => {
        expect(reverse(list)).toStrictEqual(reversedList);
      });
    }
  });
});

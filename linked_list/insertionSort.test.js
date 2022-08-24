import { LinkedList } from './LinkedList.js';
import { insertionSort } from './insertionSort';

describe("##Suite de tests pour le tri d'une liste chaînée", () => {
  let unsortedList,
    sortedList,
    sortedArray,
    unsortedArray = null;

  beforeEach(function () {
    unsortedArray = Array(20)
      .fill()
      .map(() => Math.round(Math.random() * 20));
    sortedArray = [...unsortedArray].sort((a, b) => a - b);
    unsortedList = new LinkedList();
    unsortedArray.forEach((el) => {
      unsortedList.addLast(el);
    });
    sortedList = new LinkedList();
    sortedArray.forEach((el) => {
      sortedList.addLast(el);
    });
  });

  describe('#Tests dynamiques randomisés', () => {
    for (let i = 0; i < 100; i++) {
      test('la liste est toujours triée', () => {
        expect(insertionSort(unsortedList)).toStrictEqual(sortedList);
      });
    }
  });
});

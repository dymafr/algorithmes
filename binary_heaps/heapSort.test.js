import heapSort from './heapSort';

describe('##Suite de tests tri par tas', () => {
  let sortedArrayControlled,
    result,
    unsortedArray = null;

  beforeEach(() => {
    unsortedArray = Array(50)
      .fill()
      .map(() => Math.round(Math.random() * 450));
    sortedArrayControlled = [...unsortedArray].sort((a, b) => a - b);

    result = heapSort(unsortedArray);
  });

  describe('#Tests dynamiques randomisés', () => {
    for (let i = 0; i < 100; i++) {
      test('le tableau est toujours triée', () => {
        expect(result).toEqual(sortedArrayControlled);
      });
    }
  });
});

import MaxHeap from './MaxHeap.js';

describe('##Suite de tests Tas binaire max', () => {
  let maxHeap;

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  it("##Test de l'insertion d'un élément", () => {
    maxHeap.insert(41);
    expect(maxHeap.heap).toEqual([41]);
  });

  it("##Test de l'insertion de deux éléments", () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    expect(maxHeap.heap).toEqual([41, 39]);
  });

  it("##Test de l'insertion de deux éléments avec 2ème plus grand", () => {
    maxHeap.insert(41);
    maxHeap.insert(42);
    expect(maxHeap.heap).toEqual([42, 41]);
  });

  it("##Test de l'insertion de trois éléments", () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(33);
    expect(maxHeap.heap).toEqual([41, 39, 33]);
  });

  it("##Test de l'insertion de trois éléments avec 2ème plus grand", () => {
    maxHeap.insert(41);
    maxHeap.insert(42);
    maxHeap.insert(33);
    expect(maxHeap.heap).toEqual([42, 41, 33]);
  });

  it("##Test de l'insertion de trois éléments avec 3ème plus grand", () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(42);
    expect(maxHeap.heap).toEqual([42, 39, 41]);
  });

  it("##Test de l'insertion de trois éléments avec 2ème et 3ème plus grand", () => {
    maxHeap.insert(41);
    maxHeap.insert(42);
    maxHeap.insert(43);
    expect(maxHeap.heap).toEqual([43, 41, 42]);
  });

  it("##Test de la méthode insert avec plus d'éléments", () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(33);
    maxHeap.insert(18);
    maxHeap.insert(27);
    maxHeap.insert(12);
    maxHeap.insert(55);
    expect(maxHeap.heap).toEqual([55, 39, 41, 18, 27, 12, 33]);
  });

  it('##Test de la méthode extractMax sur un tas vide', () => {
    expect(maxHeap.extractMax()).toEqual(null);
  });

  it('##Test de la méthode extractMax sur un tas avec un seul élément', () => {
    maxHeap.insert(41);
    expect(maxHeap.extractMax()).toEqual(41);
    expect(maxHeap.heap).toEqual([]);
  });

  it('##Test de la méthode extractMax sur un tas avec deux éléments', () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    expect(maxHeap.extractMax()).toEqual(41);
    expect(maxHeap.heap).toEqual([39]);
  });

  it('##Test de la méthode extractMax sur un tas avec trois éléments', () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(33);
    expect(maxHeap.extractMax()).toEqual(41);
    expect(maxHeap.heap).toEqual([39, 33]);
  });

  it('##Test de la méthode extractMax sur un tas avec plus d éléments', () => {
    maxHeap.insert(41);
    maxHeap.insert(39);
    maxHeap.insert(33);
    maxHeap.insert(18);
    maxHeap.insert(27);
    maxHeap.insert(12);
    maxHeap.insert(55);
    expect(maxHeap.extractMax()).toEqual(55);
    expect(maxHeap.heap).toEqual([41, 39, 33, 18, 27, 12]);
  });

  it("##Test de la méthode extractMax sur un tas avec plus d éléments jusqu'a quil ny ait plus d'élements", () => {
    maxHeap.insert(12);
    maxHeap.insert(18);
    maxHeap.insert(27);
    maxHeap.insert(33);
    maxHeap.insert(39);
    maxHeap.insert(41);
    maxHeap.insert(55);
    maxHeap.insert(2);
    expect(maxHeap.extractMax()).toEqual(55);
    expect(maxHeap.heap).toEqual([41, 33, 39, 12, 27, 18, 2]);
    expect(maxHeap.extractMax()).toEqual(41);
    expect(maxHeap.heap).toEqual([39, 33, 18, 12, 27, 2]);
    expect(maxHeap.extractMax()).toEqual(39);
    expect(maxHeap.heap).toEqual([33, 27, 18, 12, 2]);
    expect(maxHeap.extractMax()).toEqual(33);
    expect(maxHeap.heap).toEqual([27, 12, 18, 2]);
    expect(maxHeap.extractMax()).toEqual(27);
    expect(maxHeap.heap).toEqual([18, 12, 2]);
    expect(maxHeap.extractMax()).toEqual(18);
    expect(maxHeap.heap).toEqual([12, 2]);
    expect(maxHeap.extractMax()).toEqual(12);
    expect(maxHeap.heap).toEqual([2]);
    expect(maxHeap.extractMax()).toEqual(2);
    expect(maxHeap.heap).toEqual([]);
  });
});

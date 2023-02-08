import PriorityQueue from './PriorityQueue.js';

describe('##Suite de tests file de priorité', () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new PriorityQueue();
  });

  it("##Test de la création d'une file de priorité", () => {
    expect(priorityQueue.heap).toEqual([]);
  });

  it("##Test de la création d'une file de priorité avec un élément", () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    expect(priorityQueue.heap).toEqual([{ value: 'A', priority: 1 }]);
  });

  it("##Test de l'insertion de plusieurs éléments", () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    priorityQueue.insert({ value: 'B', priority: 2 });
    priorityQueue.insert({ value: 'C', priority: 3 });
    expect(priorityQueue.heap).toEqual([
      { value: 'C', priority: 3 },
      { value: 'A', priority: 1 },
      { value: 'B', priority: 2 },
    ]);
  });

  it("##Test de l'insertion de plusieurs éléments avec des priorités différentes", () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    priorityQueue.insert({ value: 'B', priority: 2 });
    priorityQueue.insert({ value: 'C', priority: 3 });
    priorityQueue.insert({ value: 'D', priority: 2 });
    priorityQueue.insert({ value: 'E', priority: 1 });
    expect(priorityQueue.heap).toEqual([
      { value: 'C', priority: 3 },
      { value: 'D', priority: 2 },
      { value: 'B', priority: 2 },
      { value: 'A', priority: 1 },
      { value: 'E', priority: 1 },
    ]);
  });

  it('##Test de la suppression de deux éléments successivement', () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    priorityQueue.insert({ value: 'B', priority: 2 });
    priorityQueue.insert({ value: 'C', priority: 3 });
    priorityQueue.insert({ value: 'D', priority: 2 });
    priorityQueue.insert({ value: 'E', priority: 1 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'C', priority: 3 });
    expect(priorityQueue.heap).toEqual([
      { value: 'D', priority: 2 },
      { value: 'E', priority: 1 },
      { value: 'B', priority: 2 },
      { value: 'A', priority: 1 },
    ]);
    expect(priorityQueue.extractMax()).toEqual({ value: 'D', priority: 2 });
    expect(priorityQueue.heap).toEqual([
      { value: 'B', priority: 2 },
      { value: 'E', priority: 1 },
      { value: 'A', priority: 1 },
    ]);
  });

  it('##Test de la suppression de plusieurs éléments', () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    priorityQueue.insert({ value: 'B', priority: 2 });
    priorityQueue.insert({ value: 'C', priority: 3 });
    priorityQueue.insert({ value: 'D', priority: 2 });
    priorityQueue.insert({ value: 'E', priority: 1 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'C', priority: 3 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'D', priority: 2 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'B', priority: 2 });
    expect(priorityQueue.heap).toEqual([
      { value: 'A', priority: 1 },
      { value: 'E', priority: 1 },
    ]);
  });

  it('##Test de la suppression de tous les éléments', () => {
    priorityQueue.insert({ value: 'A', priority: 1 });
    priorityQueue.insert({ value: 'B', priority: 2 });
    priorityQueue.insert({ value: 'C', priority: 3 });
    priorityQueue.insert({ value: 'D', priority: 2 });
    priorityQueue.insert({ value: 'E', priority: 1 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'C', priority: 3 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'D', priority: 2 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'B', priority: 2 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'A', priority: 1 });
    expect(priorityQueue.extractMax()).toEqual({ value: 'E', priority: 1 });
    expect(priorityQueue.extractMax()).toEqual(undefined);
    expect(priorityQueue.heap).toEqual([]);
  });
});

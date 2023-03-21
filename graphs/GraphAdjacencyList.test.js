import { Graph } from './GraphAdjacencyList';

describe('##Suite de tests pour graphes', () => {
  let graph = null;

  beforeEach(function () {
    graph = new Graph();
  });

  it('##Test de la méthode addVertex', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    expect(graph.adjacencyList).toEqual({
      1: [],
      2: [],
      3: [],
      4: [],
    });
  });

  it('##Test de la méthode addEdge', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    expect(graph.adjacencyList).toEqual({
      1: [2, 3, 4],
      2: [1],
      3: [1],
      4: [1],
    });
  });

  it('##Test de la méthode removeEdge', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    graph.removeEdge(1, 2);

    expect(graph.adjacencyList).toEqual({
      1: [3, 4],
      2: [],
      3: [1],
      4: [1],
    });
  });

  it('##Test de la méthode removeVertex', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    graph.removeVertex(1);

    expect(graph.adjacencyList).toEqual({
      2: [],
      3: [],
      4: [],
    });
  });

  it('##Test de la méthode removeVertex', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);

    graph.removeVertex(1);

    expect(graph.adjacencyList).toEqual({
      2: [3, 4],
      3: [2, 4],
      4: [2, 3],
    });
  });
});

import { Graph } from './GraphAdjacencyList.js';
import { depthFirstSearch } from './dfsIterative';

describe('##Suite de tests pour BFS', () => {
  let graph = null;

  beforeEach(function () {
    graph = new Graph();
  });

  it('##Test de la méthode breadthFirstSearch avec 3 noeuds', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);

    expect(depthFirstSearch(graph, 1)).toEqual([1, 3, 2]);
  });

  it('##Test de la méthode breadthFirstSearch avec 4 noeuds', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    expect(depthFirstSearch(graph, 1)).toEqual([1, 4, 3, 2]);
  });

  it('##Test de la méthode breadthFirstSearch avec 6 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');

    expect(depthFirstSearch(graph, 'A')).toEqual([
      'A',
      'C',
      'E',
      'F',
      'D',
      'B',
    ]);
  });

  it('##Test de la méthode breadthFirstSearch avec 6 noeuds en partant de C', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    graph.addEdge('D', 'F');
    graph.addEdge('E', 'F');

    expect(depthFirstSearch(graph, 'C')).toEqual([
      'C',
      'E',
      'F',
      'D',
      'B',
      'A',
    ]);
  });
});

import { WeightedGraphAdjacencyList } from './WeightedGraphAdjacencyList.js';
import { dijkstraPriorityQueue } from './dijkstra.js';

describe('##Suite de tests pour Dijkstra', () => {
  let graph = null;

  beforeEach(function () {
    graph = new WeightedGraphAdjacencyList();
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 1 noeud', () => {
    graph.addVertex('A');

    expect(dijkstraPriorityQueue(graph, 'A', 'A')).toEqual({
      distance: 0,
      path: ['A'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 2 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');

    graph.addEdge('A', 'B', 2);

    expect(dijkstraPriorityQueue(graph, 'A', 'B')).toEqual({
      distance: 2,
      path: ['A', 'B'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 4 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'D', 10);
    graph.addEdge('C', 'D', 3);

    expect(dijkstraPriorityQueue(graph, 'A', 'D')).toEqual({
      distance: 8,
      path: ['A', 'C', 'D'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 5 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'E', 10);
    graph.addEdge('C', 'D', 3);
    graph.addEdge('D', 'E', 2);

    expect(dijkstraPriorityQueue(graph, 'A', 'E')).toEqual({
      distance: 10,
      path: ['A', 'C', 'D', 'E'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 6 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 2);
    graph.addEdge('A', 'C', 5);
    graph.addEdge('B', 'E', 10);
    graph.addEdge('C', 'D', 3);
    graph.addEdge('D', 'E', 2);
    graph.addEdge('E', 'F', 1);

    expect(dijkstraPriorityQueue(graph, 'A', 'F')).toEqual({
      distance: 11,
      path: ['A', 'C', 'D', 'E', 'F'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue avec 7 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');

    graph.addEdge('A', 'C', 100);
    graph.addEdge('A', 'B', 3);
    graph.addEdge('A', 'D', 4);
    graph.addEdge('D', 'C', 3);
    graph.addEdge('D', 'E', 8);
    graph.addEdge('E', 'F', 10);
    graph.addEdge('B', 'G', 9);
    graph.addEdge('E', 'G', 50);

    expect(dijkstraPriorityQueue(graph, 'A', 'G')).toEqual({
      distance: 12,
      path: ['A', 'B', 'G'],
    });
  });

  it('##Test de la méthode dijkstraPriorityQueue tests avec plusieurs chemins intérieurs', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('C', 'F', 4);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('D', 'F', 1);
    graph.addEdge('E', 'F', 1);

    expect(dijkstraPriorityQueue(graph, 'A', 'F')).toEqual({
      distance: 5,
      path: ['A', 'C', 'D', 'F'],
    });

    expect(dijkstraPriorityQueue(graph, 'A', 'E')).toEqual({
      distance: 6,
      path: ['A', 'C', 'D', 'F', 'E'],
    });

    expect(dijkstraPriorityQueue(graph, 'A', 'D')).toEqual({
      distance: 4,
      path: ['A', 'C', 'D'],
    });

    expect(dijkstraPriorityQueue(graph, 'F', 'B')).toEqual({
      distance: 4,
      path: ['F', 'E', 'B'],
    });
  });

  it('##Autre test plus complexe de la méthode dijkstraPriorityQueue', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 5);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'C', 7);
    graph.addEdge('C', 'D', 4);
    graph.addEdge('B', 'D', 8);
    graph.addEdge('C', 'E', 8);
    graph.addEdge('D', 'E', 6);
    graph.addEdge('D', 'F', 4);
    graph.addEdge('E', 'F', 3);

    expect(dijkstraPriorityQueue(graph, 'A', 'F')).toEqual({
      distance: 10,
      path: ['A', 'C', 'D', 'F'],
    });

    expect(dijkstraPriorityQueue(graph, 'F', 'B')).toEqual({
      distance: 12,
      path: ['F', 'D', 'B'],
    });
  });
});

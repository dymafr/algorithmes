import { WeightedGraphAdjacencyList } from './WeightedGraphAdjacencyList.js';
import { bellmanFord } from './bellmanFord.js';

describe('##Suite de tests pour BellmanFord', () => {
  let graph = null;

  beforeEach(function () {
    graph = new WeightedGraphAdjacencyList();
  });

  it('##Test de la méthode bellmanFord avec un graphe orienté simple', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addDirectedEdge('A', 'B', 4);
    graph.addDirectedEdge('A', 'D', 5);
    graph.addDirectedEdge('D', 'C', 3);
    graph.addDirectedEdge('C', 'B', -10);

    expect(bellmanFord(graph, 'A')).toEqual({
      distances: {
        A: 0,
        B: -2,
        C: 8,
        D: 5,
      },
      previousVertices: {
        A: null,
        B: 'C',
        C: 'D',
        D: 'A',
      },
    });
  });

  it('##Test de la méthode bellmanFord avec un graphe orienté avec un cycle négatif', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addDirectedEdge('A', 'B', 4);
    graph.addDirectedEdge('A', 'D', 5);
    graph.addDirectedEdge('D', 'C', 3);
    graph.addDirectedEdge('C', 'B', -10);
    graph.addDirectedEdge('B', 'D', 5);

    expect(() => bellmanFord(graph, 'A')).toThrow(
      new Error('Graph contains a negative weight cycle')
    );
  });

  it('##Test de la méthode bellmanFord avec un graphe orienté plus complexe', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');

    graph.addDirectedEdge('A', 'B', 6);
    graph.addDirectedEdge('A', 'C', 5);
    graph.addDirectedEdge('A', 'D', 5);
    graph.addDirectedEdge('B', 'E', -1);
    graph.addDirectedEdge('C', 'B', -2);
    graph.addDirectedEdge('C', 'E', 1);
    graph.addDirectedEdge('D', 'C', -2);
    graph.addDirectedEdge('D', 'F', -1);
    graph.addDirectedEdge('E', 'G', 3);
    graph.addDirectedEdge('F', 'G', 3);

    expect(bellmanFord(graph, 'A')).toEqual({
      distances: {
        A: 0,
        B: 1,
        C: 3,
        D: 5,
        E: 0,
        F: 4,
        G: 3,
      },
      previousVertices: {
        A: null,
        B: 'C',
        C: 'D',
        D: 'A',
        E: 'B',
        F: 'D',
        G: 'E',
      },
    });
  });

  it('##Test de la méthode bellmanFord avec un graphe non orienté avec cycle négatif', () => {
    // A --(-1)-- B --(2)--  C
    //  \         |         /
    //   \        |        /
    //    \(1)    |(3)    /(1)
    //     \      |      /
    //      \     |     /
    //       \    |    /
    //        ---------
    //           D
    // Le graphe contient un cycle négatif. On peut aller de A à B puis de B à A infiniment.
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B', -1);
    graph.addEdge('A', 'D', 1);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('C', 'D', 1);

    expect(() => bellmanFord(graph, 'A')).toThrow(
      new Error('Graph contains a negative weight cycle')
    );
  });

  it('##Test de la méthode bellmanFord avec un graphe non orienté sans cycle négatif', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B', 1);
    graph.addEdge('A', 'D', 1);
    graph.addEdge('B', 'C', 2);
    graph.addEdge('B', 'D', 3);
    graph.addEdge('C', 'D', 1);

    expect(bellmanFord(graph, 'A')).toEqual({
      distances: {
        A: 0,
        B: 1,
        C: 2,
        D: 1,
      },
      previousVertices: {
        A: null,
        B: 'A',
        C: 'D',
        D: 'A',
      },
    });

    expect(bellmanFord(graph, 'B')).toEqual({
      distances: {
        A: 1,
        B: 0,
        C: 2,
        D: 2,
      },
      previousVertices: {
        A: 'B',
        B: null,
        C: 'B',
        D: 'A',
      },
    });
  });
});

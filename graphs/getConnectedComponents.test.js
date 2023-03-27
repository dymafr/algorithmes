import { getConnectedComponents } from './getConnectedComponents';
import { Graph } from './GraphAdjacencyList.js';

describe('##Suite de tests pour getConnectedComponents', () => {
  let graph = null;

  beforeEach(function () {
    graph = new Graph();
  });

  it('##Test de la méthode getConnectedComponents avec 3 noeuds', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);

    expect(getConnectedComponents(graph)).toEqual([[1, 3, 2]]);
  });

  it('##Test de la méthode getConnectedComponents avec 4 noeuds', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    expect(getConnectedComponents(graph)).toEqual([[1, 4, 3, 2]]);
  });

  it('##Test de la méthode getConnectedComponents avec un graphe non connexe', () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);

    graph.addVertex(5);
    graph.addVertex(6);
    graph.addVertex(7);
    graph.addVertex(8);

    graph.addEdge(5, 6);
    graph.addEdge(5, 7);
    graph.addEdge(5, 8);

    expect(getConnectedComponents(graph)).toEqual([
      [1, 4, 3, 2],
      [5, 8, 7, 6],
    ]);
  });
});

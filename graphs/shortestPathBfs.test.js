import { Graph } from './GraphAdjacencyList.js';
import { shortestPathBfs } from './shortestPathBfs.js';

describe('##Suite de tests pour le problème du plus court chemin sur un graphe non pondéré avec BFS', () => {
  let graph = null;

  beforeEach(function () {
    graph = new Graph();
  });

  it('##Test de la méthode shortestPathBfs avec 2 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');

    graph.addEdge('A', 'B');

    expect(shortestPathBfs(graph, 'A', 'B')).toEqual(['A', 'B']);
  });

  it('##Test de la méthode shortestPathBfs avec 3 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');

    expect(shortestPathBfs(graph, 'A', 'C')).toEqual(['A', 'C']);
  });

  it('##Test de la méthode shortestPathBfs avec 4 noeuds', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');

    expect(shortestPathBfs(graph, 'A', 'D')).toEqual(['A', 'D']);
  });

  it('##Test de la méthode shortestPathBfs avec un graphe plus complexe', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('C', 'D');

    expect(shortestPathBfs(graph, 'A', 'D')).toEqual(['A', 'B', 'D']);

    expect(shortestPathBfs(graph, 'A', 'E')).toEqual(['A', 'C', 'E']);

    expect(shortestPathBfs(graph, 'A', 'A')).toEqual(['A']);

    expect(shortestPathBfs(graph, 'A', 'F')).toEqual(null);
  });

  it('##Test de la méthode shortestPathBfs avec un graphe plus complexe', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');
    graph.addVertex('G');
    graph.addVertex('H');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');
    graph.addEdge('C', 'G');
    graph.addEdge('E', 'H');
    graph.addEdge('E', 'F');
    graph.addEdge('F', 'G');

    expect(shortestPathBfs(graph, 'A', 'G')).toEqual(['A', 'C', 'G']);

    expect(shortestPathBfs(graph, 'A', 'H')).toEqual(['A', 'B', 'E', 'H']);

    expect(shortestPathBfs(graph, 'A', 'A')).toEqual(['A']);

    expect(shortestPathBfs(graph, 'A', 'I')).toEqual(null);

    expect(shortestPathBfs(graph, 'A', 'B')).toEqual(['A', 'B']);

    expect(shortestPathBfs(graph, 'A', 'C')).toEqual(['A', 'C']);

    expect(shortestPathBfs(graph, 'A', 'D')).toEqual(['A', 'B', 'D']);

    expect(shortestPathBfs(graph, 'A', 'E')).toEqual(['A', 'B', 'E']);
  });
});

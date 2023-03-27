import { depthFirstSearch } from './dfsIterative.js';

export function getConnectedComponents(graph) {
  const visited = {};
  const components = [];

  for (let vertex in graph.adjacencyList) {
    if (!visited[vertex]) {
      const component = depthFirstSearch(graph, +vertex); // Les clés sont des chaînes de caractères
      components.push(component);
      component.forEach((v) => (visited[v] = true));
    }
  }

  return components;
}

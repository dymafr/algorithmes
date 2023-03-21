export function depthFirstSearch(graph, startingVertex) {
  const visited = {};
  const result = [];

  function traverse(vertex) {
    if (!vertex) {
      return null;
    }
    visited[vertex] = true;
    result.push(vertex);
    graph.adjacencyList[vertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        return traverse(neighbor);
      }
    });
  }

  traverse(startingVertex);

  return result;
}

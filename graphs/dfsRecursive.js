export function depthFirstSearch(graph, startingVertex) {
  const visited = {};
  const result = [];

  function traverse(vertex) {
    if (!vertex) {
      return null;
    }
    visited[vertex] = true;
    result.push(vertex);
    for (let i = 0; i < graph.adjacencyList[vertex].length; i++) {
      if (!visited[graph.adjacencyList[vertex][i]]) {
        return traverse(graph.adjacencyList[vertex][i]);
      }
    }
  }

  traverse(startingVertex);

  return result;
}

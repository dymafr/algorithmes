import { StackDynamicArray } from '../stack/StackDynamicArray.js';

export function depthFirstSearch(graph, startingVertex) {
  const stack = new StackDynamicArray();
  const visited = {};
  const result = [];

  stack.push(startingVertex);

  while (!stack.isEmpty()) {
    const currentVertex = stack.pop();
    if (!visited[currentVertex]) {
      result.push(currentVertex);
      visited[currentVertex] = true;
      graph.adjacencyList[currentVertex].forEach((neighbor) => {
        stack.push(neighbor);
      });
    }
  }

  return result;
}

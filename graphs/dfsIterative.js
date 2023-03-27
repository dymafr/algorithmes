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
      for (let i = 0; i < graph.adjacencyList[currentVertex].length; i++) {
        if (!visited[graph.adjacencyList[currentVertex][i]]) {
          stack.push(graph.adjacencyList[currentVertex][i]);
        }
      }
    }
  }

  return result;
}

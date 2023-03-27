import { QueueLL } from '../queue/QueueLL.js';

export function breadthFirstSearch(graph, startingVertex) {
  const queue = new QueueLL();
  const visited = {};
  const result = [];

  queue.enqueue(startingVertex);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();
    if (!visited[currentVertex]) {
      result.push(currentVertex);
      visited[currentVertex] = true;
      for (let i = 0; i < graph.adjacencyList[currentVertex].length; i++) {
        queue.enqueue(graph.adjacencyList[currentVertex][i]);
      }
    }
  }

  return result;
}

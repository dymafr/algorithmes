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
      graph.adjacencyList[currentVertex].forEach((neighbor) => {
        queue.enqueue(neighbor);
      });
    }
  }

  return result;
}

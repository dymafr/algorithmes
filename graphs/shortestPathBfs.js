import { QueueLL } from '../queue/QueueLL.js';

export function shortestPathBfs(graph, startingVertex, endingVertex) {
  const queue = new QueueLL();
  const visited = {};
  const previous = {}; // Pour construire le chemin

  queue.enqueue(startingVertex);
  visited[startingVertex] = true;

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    if (currentVertex === endingVertex) {
      const path = [endingVertex];
      let previousVertex = previous[endingVertex];
      while (previousVertex) {
        path.push(previousVertex);
        previousVertex = previous[previousVertex];
      }
      return path.reverse();
    }

    for (const neighbor of graph.adjacencyList[currentVertex]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.enqueue(neighbor);
        previous[neighbor] = currentVertex;
      }
    }
  }
  // Aucun chemin trouvé
  return null;
}

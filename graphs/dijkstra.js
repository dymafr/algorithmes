import MinPriorityQueue from '../binary_heaps/MinPriorityQueue.js';

// Complexité temporelle : O((V + E) log V)
// Complexité spatiale : O(V)
export function dijkstraPriorityQueue(graph, startVertex, endVertex) {
  const distances = {};
  const previous = {}; // uniquement pour reconstruire le chemin
  const queue = new MinPriorityQueue();

  for (const vertex in graph.adjacencyList) {
    if (vertex === startVertex) {
      distances[vertex] = 0;
      queue.insert({ vertex, priority: 0 });
    } else {
      distances[vertex] = Infinity;
      queue.insert({ vertex, priority: Infinity });
    }
  }

  while (!queue.isEmpty()) {
    const { vertex } = queue.extractMin();
    if (vertex === endVertex) {
      break;
    }
    for (const neighbor of graph.adjacencyList[vertex]) {
      const distance = distances[vertex] + neighbor.weight;
      if (distance < distances[neighbor.vertex]) {
        distances[neighbor.vertex] = distance;
        previous[neighbor.vertex] = vertex;
        queue.insert({ vertex: neighbor.vertex, priority: distance });
      }
    }
  }

  // Reconstruire le chemin, on peut également retourner que la distance
  const path = [endVertex];
  let previousVertex = previous[endVertex];
  while (previousVertex) {
    path.push(previousVertex);
    previousVertex = previous[previousVertex];
  }
  return { path: path.reverse(), distance: distances[endVertex] };
}

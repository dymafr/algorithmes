export default function reverseQueueRecursive(queue) {
  if (queue.isEmpty()) {
    return;
  }

  const item = queue.dequeue();
  reverseQueueRecursive(queue);
  queue.enqueue(item);
  return queue;
}

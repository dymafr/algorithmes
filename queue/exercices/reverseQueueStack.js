import { StackLL } from '../../stack/StackLL.js';

export default function reverseQueueStack(queue) {
  const stack = new StackLL();
  while (!queue.isEmpty()) {
    stack.push(queue.dequeue());
  }
  while (!stack.isEmpty()) {
    queue.enqueue(stack.pop());
  }
  return queue;
}

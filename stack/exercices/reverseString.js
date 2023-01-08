import { Stack } from '../StackLL.js';

export default function reverseString(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let result = '';
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

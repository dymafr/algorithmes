import { StackLL } from '../StackLL.js';

export default function reverseString(str) {
  const stack = new StackLL();
  if (str.length < 2) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let result = '';
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

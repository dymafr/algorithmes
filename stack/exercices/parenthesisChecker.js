import { StackLL } from '../StackLL.js';

export default function parenthesisChecker(str) {
  const stack = new StackLL();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else if (stack.isEmpty()) {
      return false;
    } else {
      const last = stack.pop();
      if (str[i] === ')' && last !== '(') {
        return false;
      }
      if (str[i] === '}' && last !== '{') {
        return false;
      }
      if (str[i] === ']' && last !== '[') {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

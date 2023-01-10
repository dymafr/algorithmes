import { StackLL } from '../StackLL.js';

export default function parenthesisChecker(str) {
  const stack = new StackLL();
  if (!str.length) {
    return true;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      const last = stack.pop();
      if (char === ')' && last !== '(') {
        return false;
      }
      if (char === '}' && last !== '{') {
        return false;
      }
      if (char === ']' && last !== '[') {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

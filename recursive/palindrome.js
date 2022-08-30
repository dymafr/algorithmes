function isPalindrome(string, start = 0, end = string.length - 1) {
  if (start >= end) {
    return true;
  } else {
    if (string[start] === string[end]) {
      return isPalindrome(string, start + 1, end - 1);
    }
    return false;
  }
}

console.log(isPalindrome('kayak'));

export function reverse(ll) {
  let current = ll.head;
  if (!current || !current.next) {
    return ll;
  } else {
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    ll.head = prev;
  }
  return ll;
}

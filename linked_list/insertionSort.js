import { LinkedList, Node } from './LinkedList.js';

export function insertionSort(ll) {
  let current = ll.head;
  if (!current || !current.next) {
    return;
  } else {
    const sortedList = new LinkedList();
    sortedList.addFirst(current.value);
    current = current.next;
    while (current) {
      let sortedHead = sortedList.head;
      while (sortedHead.next && sortedHead.next.value < current.value) {
        sortedHead = sortedHead.next;
      }
      if (sortedHead.value > current.value) {
        sortedList.head = new Node(current.value, sortedHead);
      } else {
        sortedHead.next = new Node(current.value, sortedHead.next);
      }
      current = current.next;
    }
    ll.head = sortedList.head;
  }
}

// const linkedList = new LinkedList();
// linkedList.addFirst(1);
// linkedList.addFirst(2);
// linkedList.print();
// insertionSort(linkedList);
// linkedList.print();

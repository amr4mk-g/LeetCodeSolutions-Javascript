function oddEvenList(head) {
  if (!head) return null;
  let odd = head, even = head.next;
  while (odd.next && odd.next.next) {
    let temp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    temp.next = odd.next;
  }
  odd.next = even;
  return head;
}

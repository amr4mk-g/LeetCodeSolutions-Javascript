function hasCycle(head) {
  let left = head, right = head;
  while (right && right.next) {
    right = right.next.next;
    left = left.next;
    if (left == right) return true;
  }
  return false;
}

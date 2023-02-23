function addTwoNumbers(l1, l2) {
  let prev = new ListNode(0), result = prev, carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    if (l1) { sum += l1.val; l1 = l1.next; }
    if (l2) { sum += l2.val; l2 = l2.next; }
    carry = (sum>9)? 1:0;
    prev.next = new ListNode(sum%10);
    prev = prev.next;
  }
  return result.next;
}

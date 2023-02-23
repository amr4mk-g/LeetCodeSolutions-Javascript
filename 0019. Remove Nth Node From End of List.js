function removeNthFromEnd (head, n) {
    let prev = new ListNode(0, head);
    let left = prev, right = prev;
    while (right.next) {
        right = right.next;
        if (n <= 0) left = left.next;
        else n--;
    }
    left.next = left.next.next;
    return prev.next;
}

function partition (head, x) {
    let startL = new ListNode(), startR = new ListNode();
    let left = startL, right = startR;
    while (head) {
        if (head.val < x) left = left.next = head;
        else right = right.next = head;
        head = head.next;
    }
    left.next = startR.next;
    right.next = null;
    return startL.next;
}

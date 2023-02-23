function swapPairs (head) {
    let temp = new ListNode(-1);
    temp.next = head;
    let prev = temp;
    while (head && head.next) {
        let n1 = head, n2 = head.next;
        prev.next = n2;
        n1.next = n2.next;
        n2.next = n1;
        prev = n1;
        head = n1.next;
    }
    return temp.next;
}

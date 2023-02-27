function rotateRight (head, k) {
    if (!head) return null;
    let len = 1, tail = head;
    while (tail.next){ tail = tail.next;  len++; }
    k %= len;
    if (k == 0) return head;
    let curr = head, cut = len-k-1;
    for (let i=0; i<cut; i++) curr = curr.next;
    let newHead = curr.next;
    curr.next = null;
    tail.next = head;
    return newHead;
}

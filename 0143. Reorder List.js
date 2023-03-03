function reorderList (head) {
    // find middle
    let left = head, right = head; 
    while (right.next && right.next.next) {
        left = left.next;
        right = right.next.next;
    }
    // reverse second half
    let prev = null, curr = left.next;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    left.next = null;
    // merge two halves
    let h1 = head, h2 = prev;
  	while (h2) {
        let temp = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = temp;
    }
}

function reverseKGroup (head, k) {
    let result = new ListNode(-1);
    result.next = head;
    let start = result;
    while (true) {
        let n = k, curr = start;
        while (curr && n > 0) {
            curr = curr.next;
            n--;
        }
        if (!curr) break; 
        let last = curr.next;
        let prev = curr.next;
        let curr2 = start.next;
        while (curr2 != last) {
            let temp = curr2.next;
            curr2.next = prev;
            prev = curr2;
            curr2 = temp;
        }
        let temp = start.next;
        start.next = curr;
        start = temp;
    }
    return result.next;
}

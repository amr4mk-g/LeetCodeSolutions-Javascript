function reverseBetween(head, left, right) {
    if (!head) return null;
    let result = new ListNode(), curr = result;
    result.next = head;
    for (let i=1; i<left; i++) curr = curr.next;
    let start = curr.next, temp = null;
    for(let i=left; i<right; i++){
        temp = start.next;
        start.next = temp.next
        temp.next = curr.next;
        curr.next = temp;
    }
    return result.next;
}

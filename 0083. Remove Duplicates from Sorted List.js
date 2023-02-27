function deleteDuplicates (head) {
    let curr = head;
    while (curr) {
        let nextx = curr.next;
        while (nextx && curr.val == nextx.val) {
             nextx = nextx.next;  
        }
        curr.next = nextx;
        curr = nextx;
    }
    return head;
}

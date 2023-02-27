function deleteDuplicates (head) {
    let curr = head;
    let prev = null;
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            while (curr.next && curr.val == curr.next.val) {
               curr = curr.next;  
            }
            curr = curr.next; 
            if(!prev) head = curr;
            else prev.next = curr; 
        } else {
            prev = curr;
            curr = curr.next; 
        }
    }
    return head;
}

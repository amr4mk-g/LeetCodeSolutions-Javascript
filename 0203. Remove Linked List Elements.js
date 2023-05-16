function removeElements (head, val) {  
    let prev = null, curr = head;
    while (curr){
        if (curr.val == val){
            if (!prev) head = curr.next;
            else prev.next = curr.next;
        } else prev = curr;        
        curr = curr.next;
    }
    return head;
}

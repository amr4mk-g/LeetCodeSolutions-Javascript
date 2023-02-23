function mergeKLists (lists) {
    let root = lists[0], n = lists.length;
    for (let i=1; i<n; i++) root = merge(root, lists[i]);
    return root || null;
}

function merge(l1, l2) {
    if (!l1) return l2;   
    if (!l2) return l1;
    let result = new ListNode(-1, null);
    let save = result;
    while(l1 && l2) {
        if(l1.val >= l2.val) { 
            result.next = l2;   
            l2 = l2.next; 
        } else { 
            result.next = l1;  
            l1 = l1.next; 
        }
        result = result.next;
    }
    result.next = (l1)? l1 : l2;
    return save.next;
}

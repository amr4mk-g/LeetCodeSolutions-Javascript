function copyRandomList (head) {
    let map = new Map(), temp = head;
    while (temp) {
        map.set(temp, new Node(temp.val, null, null));
        temp = temp.next;
    }
    for (let [oldN, newN] of map) {
        newN.next = oldN.next && map.get(oldN.next);
        newN.random = oldN.random && map.get(oldN.random);
    }
    return map.get(head);
}

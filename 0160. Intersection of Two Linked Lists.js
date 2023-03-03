function getIntersectionNode (headA, headB) {
    if (!headA || !headB) return null;
    let curr1 = headA, curr2 = headB;
    while (curr1 != curr2) {
        if (curr1) curr1 = curr1.next;
        else curr1 = headB;
        if (curr2) curr2 = curr2.next;
        else curr2 = headA;
    }
    return curr1;
}

function detectCycle (head) {
    let left = head, right = head;
    while(right && right.next){
        left = left.next;
        right = right.next.next;
        if(left == right){
            left = head;
            while(left != right){
                left = left.next;
                right = right.next;
            }
            return left;
        }
    }
    return null;
}

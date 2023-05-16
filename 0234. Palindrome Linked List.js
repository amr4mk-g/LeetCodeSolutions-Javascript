function isPalindrome (head) {
    let fast = head, slow = head;
    while (fast && fast.next) {  //find mid (slow)
        fast = fast.next.next;
        slow = slow.next;
    }
    let prev = null, temp = null;
    while (slow) {  //reverse right half
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    let left = head, right = prev;
    while (right) {  //check palind
        if (left.val != right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
}

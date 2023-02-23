function deleteMiddle (head) {
    if (!head.next) return null;
	let prev = new ListNode(0, head);
    let slow = head, fast = head.next;
	while (fast) {
        prev = prev.next;
        slow = slow.next;
        fast = fast.next?.next;
    }
	prev.next = slow.next;
	return head;
}

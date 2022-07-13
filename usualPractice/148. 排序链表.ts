import ListNode from "../structures/ListNode";

const mergeTwoSortedLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoSortedLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoSortedLists(l1, l2.next);
        return l2;
    }
};

const sortList = (head: ListNode | null): ListNode | null => {
    if (!head) {
        return null;
    }

    let length: number = 0;
    let node: ListNode | null = head;

    while (node) {
        length++;
        node = node.next;
    }

    const dummy: ListNode = new ListNode(0, head);

    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev: ListNode | null = dummy,
            curr: ListNode | null = dummy.next;

        while (curr) {
            let head1 = curr;

            for (let i = 1; i < subLength && curr.next; i++) {
                curr = curr.next;
            }

            let head2 = curr.next;
            curr.next = null;
            curr = head2;

            for (let i = 1; i < subLength && curr && curr.next; i++) {
                curr = curr.next;
            }

            let next: ListNode | null = null;

            if (curr) {
                next = curr.next;
                curr.next = null;
            }

            const merged = mergeTwoSortedLists(head1, head2);
            prev.next = merged;

            while (prev.next) {
                prev = prev.next;
            }

            curr = next;
        }
    }

    return dummy.next;
};

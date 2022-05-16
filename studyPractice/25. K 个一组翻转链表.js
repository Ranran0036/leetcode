class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * @param {ListNode} head
 * @param {Number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
    let start = head,
        end = getGroupEnd(head, k);

    if (end === null) {
        return head;
    }

    head = end;
    reverse(start, end);

    let lastEnd = start;

    while (lastEnd.next !== null) {
        start = lastEnd.next;
        end = getGroupEnd(start, k);

        if (end === null) {
            return head;
        }

        reverse(start, end);
        lastEnd.next = end;
        lastEnd = start;
    }

    return head;
};

/**
 *
 * @param {ListNode} start
 * @param {Number} k
 * @return {ListNode}
 */
const getGroupEnd = (start, k) => {
    while (--k > 0 && start) {
        start = start.next;
    }

    return start;
};

/**
 *
 * @param {ListNode} start
 * @param {ListNode} end
 */
const reverse = (start, end) => {
    end = end.next;

    let prev = null,
        curr = start,
        next = null;

    while (curr !== end) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    start.next = end;
};

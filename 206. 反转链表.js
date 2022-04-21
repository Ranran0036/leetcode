/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归实现
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

/**
 * 迭代实现
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList2 = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let pre = null;
    let cur = head;
    while (cur != null) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};

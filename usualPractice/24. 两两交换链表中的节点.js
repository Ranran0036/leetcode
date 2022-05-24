/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
    const dumy = new ListNode(0, head);

    let pre = dumy;

    while (pre.next && pre.next.next) {
        let cur = pre.next;
        let next = cur.next;

        pre.next = next;
        cur.next = next.next;
        next.next = cur;

        pre = cur;
    }

    return dumy.next;
};

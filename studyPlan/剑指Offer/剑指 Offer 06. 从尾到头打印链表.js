/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
const reversePrint = function (head) {
    const res = [];

    while (head) {
        res.push(head.val);
        head = head.next;
    }

    const mid = res.length >> 1;

    for (let i = 0; i < mid; i++) {
        [res[i], res[res.length - 1 - i]] = [res[res.length - 1 - i], res[i]];
    }

    return res;
};

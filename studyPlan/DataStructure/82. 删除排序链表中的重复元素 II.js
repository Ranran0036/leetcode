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
const deleteDuplicates = function (head) {
    if (!head) {
        return null;
    }

    let dummy = new ListNode(0, head);

    let current = dummy;

    while (current.next && current.next.next) {
        if (current.next.val === current.next.next.val) {
            let temp = current.next.val;
            while (current.next && current.next.val === temp) {
                current.next = current.next.next;
            }
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};

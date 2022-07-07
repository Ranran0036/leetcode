/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "../../structures/ListNode";

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return null;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr: ListNode | null = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return dummy.next;
}

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let dumy = new ListNode(0, head);

    let slow = dumy;
    let fast = dumy;

    for (let i = 0; i < n; i++) {
        fast = fast.next!;
    }

    while (fast.next) {
        slow = slow.next!;
        fast = fast.next;
    }

    slow.next = slow.next!.next;

    return dumy.next;
}

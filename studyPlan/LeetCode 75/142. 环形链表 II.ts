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

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if (slow === fast) {
            let slow2: ListNode | null = head;
            while (slow2 !== slow) {
                slow2 = slow2!.next;
                slow = slow!.next;
            }
            return slow;
        }
    }
    return null;
}

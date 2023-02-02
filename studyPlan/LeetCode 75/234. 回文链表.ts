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

function isPalindrome(head: ListNode | null): boolean {
    const arr: number[] = new Array();

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        arr.push(slow!.val);
        fast = fast.next.next;
        slow = slow!.next;
    }

    console.log(arr);

    if (fast) {
        slow = slow!.next;
    }

    while (slow) {
        if (slow.val !== arr.pop()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
}

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))));

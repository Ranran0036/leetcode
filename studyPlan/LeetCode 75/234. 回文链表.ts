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

    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
        if (arr[left] !== arr[right]) {
            return false;
        }
    }

    return true;
}

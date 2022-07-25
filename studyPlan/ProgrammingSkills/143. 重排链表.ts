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

/**
 Do not return anything, modify head in-place instead.
 */

import ListNode from "../../structures/ListNode";

function reorderList(head: ListNode | null): void {
    if (!head) return;

    const mid = middleNode(head);
    let l1 = head;
    let l2 = mid!.next;

    mid!.next = null;

    l2 = reverseList(l2);
    mergeList(l1, l2);
}

function middleNode(head: ListNode | null): ListNode | null {
    if (head == null) return null;

    let slow: ListNode = head;
    let fast: ListNode = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    return slow;
}

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        const next: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
}

function mergeList(l1: ListNode | null, l2: ListNode | null): void {
    let l1_temp: ListNode | null = null;
    let l2_temp: ListNode | null = null;

    while (l1 !== null && l2 !== null) {
        l1_temp = l1.next;
        l2_temp = l2.next;

        l1.next = l2;
        l1 = l1_temp;

        l2.next = l1;
        l2 = l2_temp;
    }
}

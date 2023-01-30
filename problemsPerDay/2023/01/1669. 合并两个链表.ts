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
import ListNode from "../../../structures/ListNode";

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let preA = list1;

    for (let i = 0; i < a - 1; i++) {
        preA = preA!.next;
    }

    let preB = preA;

    for (let i = 0; i < b - a + 2; i++) {
        preB = preB!.next;
    }

    preA!.next = list2;

    while (list2!.next) {
        list2 = list2!.next;
    }

    list2!.next = preB;

    return list1;
}

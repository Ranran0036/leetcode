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
/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (head == null || head.next == null || head.next.next == null) {
        return;
    }

    let len = 0;
    let h: ListNode | null = head;

    while (h != null) {
        len++;
        h = h.next;
    }

    reorderListHelper(head, len);
}

function reorderListHelper(head: ListNode, len: number): ListNode | null {
    if (len === 1) {
        let outTail = head.next;
        head.next = null;
        return outTail;
    }

    if (len === 2) {
        let outTail = head.next!.next;
        head.next!.next = null;
        return outTail;
    }

    let tail = reorderListHelper(head.next!, len - 2);
    let subHead = head.next;
    head.next = tail;

    let outTail = tail!.next;
    tail!.next = subHead;

    return outTail;
}

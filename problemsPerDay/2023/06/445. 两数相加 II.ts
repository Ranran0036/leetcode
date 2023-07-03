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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stack1: number[] = [];
    let stack2: number[] = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let ans: ListNode | null = null;
    let carry = 0;

    while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
        let a = stack1.length === 0 ? 0 : stack1.pop()!;
        let b = stack2.length === 0 ? 0 : stack2.pop()!;

        let cur = a + b + carry;

        carry = cur >= 10 ? 1 : 0;
        cur = cur % 10;

        let node = new ListNode(cur);

        node.next = ans;
        ans = node;
    }

    return ans;
}

console.log(addTwoNumbers(new ListNode(7, new ListNode(2, new ListNode(4, new ListNode(3)))), new ListNode(5, new ListNode(6, new ListNode(4)))));

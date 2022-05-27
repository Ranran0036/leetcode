/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    if (fast) {
        slow = slow.next;
    }

    slow = reverseList(slow);

    while (slow) {
        if (head.val !== slow.val) {
            return false;
        }

        head = head.next;
        slow = slow.next;
    }

    return true;
};

const reverseList = function (head) {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    if (!head) {
        return;
    }

    let mid = middleNode(head);
    let l1 = head,
        l2 = mid.next;
    mid.next = null;
    l2 = reverseList(l2);
    mergeList(l1, l2);
};

const middleNode = function (head) {
    let slow = head,
        fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const reverseList = function (head) {
    let prev = null;

    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};

const mergeList = function (l1, l2) {
    let l1_temp = l1,
        l2_temp = l2;

    while (l1 && l2) {
        l1_temp = l1.next;
        l2_temp = l2.next;

        l1.next = l2;
        l1 = l1_temp;

        l2.next = l1;
        l2 = l2_temp;
    }
};

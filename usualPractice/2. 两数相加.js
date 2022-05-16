/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    /* let result = new ListNode(0);
    let current = result;
    let carry = 0;
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return result.next; */

    let len1 = getListLength(l1);
    let len2 = getListLength(l2);

    let langList = len1 > len2 ? l1 : l2;
    let shortList = langList === l1 ? l2 : l1;

    let curL = langList;
    let curS = shortList;

    let last = curL;

    let carry = 0;
    let curNum = 0;

    while (curS) {
        curNum = curL.val + curS.val + carry;
        carry = Math.floor(curNum / 10);
        curL.val = curNum % 10;
        last = curL;
        curL = curL.next;
        curS = curS.next;
    }

    while (curL) {
        curNum = curL.val + carry;
        carry = Math.floor(curNum / 10);
        curL.val = curNum % 10;
        last = curL;
        curL = curL.next;
    }

    if (carry !== 0) {
        last.next = new ListNode(carry);
    }

    return langList;
};

const getListLength = (head) => {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
};

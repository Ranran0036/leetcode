/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
    /* if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    } */

    if (list1 === null || list2 === null) {
        return list1 === null ? list2 : list1;
    }

    let res = list1.val <= list2.val ? list1 : list2;
    let cur1 = res.next;
    let cur2 = res === list1 ? list2 : list1;
    let pre = res;

    while (cur1 && cur2) {
        if (cur1.val <= cur2.val) {
            pre.next = cur1;
            cur1 = cur1.next;
        } else {
            pre.next = cur2;
            cur2 = cur2.next;
        }
        pre = pre.next;
    }

    pre.next = cur1 === null ? cur2 : cur1;

    return res;
};

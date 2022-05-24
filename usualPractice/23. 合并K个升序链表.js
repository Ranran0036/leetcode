/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 分治合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    return merge(lists, 0, lists.length - 1);
};

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function (list1, list2) {
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

const merge = function (lists, l, r) {
    if (l === r) {
        return lists[l];
    }

    if (l > r) {
        return null;
    }

    let mid = (l + r) >> 1;
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
};

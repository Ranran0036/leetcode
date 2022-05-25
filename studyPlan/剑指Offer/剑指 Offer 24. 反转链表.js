/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let prev = null;

    while (head) {
        //先记录下一个节点
        const next = head.next;
        //将当前节点的下一个节点指向前一个节点
        head.next = prev;
        //将前一个节点指向当前节点
        prev = head;
        //将当前节点指向下一个节点
        head = next;
    }

    //返回前一个节点
    return prev;
};

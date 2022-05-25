/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
    if (!head) {
        return null;
    }

    let cur = head;

    while (cur) {
        const temp = new Node(cur.val);
        temp.next = cur.next;
        cur.next = temp;
        cur = temp.next;
    }

    cur = head;

    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }

        cur = cur.next.next;
    }

    cur = head.next;
    let pre = head,
        res = head.next;

    while (cur.next) {
        pre.next = pre.next.next;
        cur.next = cur.next.next;
        pre = pre.next;
        cur = cur.next;
    }

    pre.next = null;

    return res;
};

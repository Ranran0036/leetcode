/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
const insert = function (head, insertVal) {
    const insert = new Node(insertVal);

    if (head === null) {
        insert.next = insert;
        return insert;
    }

    if (head.next === head) {
        head.next = insert;
        insert.next = head;
        return head;
    }

    let cur = head;
    let next = head.next;

    while (next !== head) {
        if (next.val >= insertVal && cur.val <= insertVal) {
            break;
        }

        if (cur.val > next.val) {
            if (insertVal > cur.val || insertVal < next.val) {
                break;
            }
        }

        cur = cur.next;
        next = next.next;
    }

    insert.next = next;
    cur.next = insert;

    return head;
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
let last = null;
let nextStart = null;

const handle = function (p) {
    if (last !== null) {
        last.next = p;
    }
    if (nextStart === null) {
        nextStart = p;
    }
    last = p;
};

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (!root) {
        return root;
    }

    let start = root;

    while (start !== null) {
        last = null;
        nextStart = null;
        for (let p = start; p !== null; p = p.next) {
            if (p.left !== null) {
                handle(p.left);
            }
            if (p.right !== null) {
                handle(p.right);
            }
        }
        start = nextStart;
    }

    return root;
};

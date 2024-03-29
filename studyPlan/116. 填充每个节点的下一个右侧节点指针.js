/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = function (root) {
    if (root == null) {
        return null;
    }
    if (root.left != null) {
        root.left.next = root.right;
        if (root.next != null) {
            root.right.next = root.next.left;
        }
    }
    connect(root.left);
    connect(root.right);
    return root;
};

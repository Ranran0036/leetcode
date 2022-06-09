/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
const treeToDoublyList = function (root) {
    if (!root) {
        return;
    }

    let head = null;
    let pre = head;

    const inorder = (root) => {
        if (!root) {
            return;
        }

        inorder(root.left);

        if (!pre) {
            head = root;
        } else {
            pre.right = root;
        }

        root.left = pre;
        pre = root;

        inorder(root.right);
    };

    inorder(root);

    head.left = pre;
    pre.right = head;

    return head;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
    return check(root, root);
};

/**
 *
 * @param {TreeNode} root
 * @param {TreeNode} root
 */
const check = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;

    return (
        root1.val === root2.val &&
        check(root1.left, root2.right) &&
        check(root1.right, root2.left)
    );
};

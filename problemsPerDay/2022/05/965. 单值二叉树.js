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
const isUnivalTree = function (root) {
    return sameNodeTree(root, root.val);
};

const sameNodeTree = (root, target) => {
    if (!root) {
        return true;
    }

    if (root.val !== target) {
        return false;
    }

    return sameNodeTree(root.left, target) && sameNodeTree(root.right, target);
};

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
const isBalanced = function (root) {
    return getHeight(root) >= 0;
};

const getHeight = (root) => {
    if (!root) {
        return 0;
    }

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    } else {
        return Math.max(left, right) + 1;
    }
};

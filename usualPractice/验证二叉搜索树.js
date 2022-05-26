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
const isValidBST = function (root) {
    return isValidBst(root, -Infinity, Infinity);
};

const isValidBst = (root, minVal, maxVal) => {
    if (root === null) {
        return true;
    }

    if (root.val <= minVal || root.val >= maxVal) {
        return false;
    }

    return isValidBst(root.left, minVal, root.val) && isValidBst(root.right, root.val, maxVal);
};

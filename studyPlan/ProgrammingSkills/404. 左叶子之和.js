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
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
    const nodeSum = (node) => {
        if (!node) {
            return 0;
        }

        let leftVal = sumOfLeftLeaves(node.left);
        let rightVal = sumOfLeftLeaves(node.right);

        let midVal = 0;

        if (node.left && node.left.left === null && node.left.right === null) {
            midVal = node.left.val;
        }

        return leftVal + rightVal + midVal;
    };

    return nodeSum(root);
};

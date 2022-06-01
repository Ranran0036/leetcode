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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
    let resPath = [],
        curPath = [];

    const travelTree = (node, targetSum) => {
        curPath.push(node.val);
        targetSum -= node.val;

        if (!node.left && !node.right && targetSum === 0) {
            resPath.push([...curPath]);
        }
        node.left && travelTree(node.left, targetSum);
        node.right && travelTree(node.right, targetSum);
        targetSum -= curPath.pop();
    };

    if (!root) return resPath;
    travelTree(root, targetSum);
    return resPath;
};

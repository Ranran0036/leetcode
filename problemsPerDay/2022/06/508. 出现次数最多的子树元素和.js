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
 * @return {number[]}
 */
const findFrequentTreeSum = function (root) {
    const cnt = new Map();
    let maxSum = 0;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        const sum = node.val + dfs(node.left) + dfs(node.right);
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        maxSum = Math.max(maxSum, cnt.get(sum));

        return sum;
    };

    dfs(root);

    const res = [];

    for (const [key, value] of cnt.entries()) {
        if (value === maxSum) {
            res.push(key);
        }
    }

    return res;
};

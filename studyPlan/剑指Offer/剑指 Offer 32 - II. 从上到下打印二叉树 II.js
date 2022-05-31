/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const ans = [];

    if (!root) {
        return ans;
    }

    const queue = [root];

    while (queue.length) {
        const currentLevelSize = queue.length;
        ans.push([]);

        for (let i = 0; i < currentLevelSize; i++) {
            const node = queue.shift();

            ans[ans.length - 1].push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return ans;
};

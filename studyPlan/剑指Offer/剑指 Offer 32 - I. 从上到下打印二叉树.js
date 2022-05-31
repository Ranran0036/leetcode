/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = function (root) {
    if (!root) {
        return [];
    }

    const result = [];

    result.push(root.val);
    const queue = [root];

    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) {
                nextQueue.push(node.left);
                result.push(node.left.val);
            }
            if (node.right) {
                nextQueue.push(node.right);
                result.push(node.right.val);
            }
        }
        queue = nextQueue;
    }

    return result;
};

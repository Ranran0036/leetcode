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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }

    const ans = [];
    const queue = [root];

    let isLeft = true;

    while (queue.length) {
        let temp = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (isLeft) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        ans.push(temp);
        isLeft = !isLeft;
    }

    return ans;
};

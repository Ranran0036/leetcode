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
var rightSideView = function (root) {
    if (!root) return [];
    // 根节点入队
    const q = [root];
    // 返回值
    const res = [];
    while (q.length) {
        // 当前层的数量
        let len = q.length;
        while (len--) {
            const n = q.shift();
            // 只放入最右边的数
            if (!len) res.push(n.val);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }
    return res;
};

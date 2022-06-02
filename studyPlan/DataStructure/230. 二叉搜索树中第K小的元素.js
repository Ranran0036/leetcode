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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
    if (!root) return 0;

    let ans = inorderTraversal(root);

    return ans[k - 1];
};

/**
 * Morris InorderTraversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    if (!root) return [];

    let cur = root;
    const res = [];
    while (cur) {
        if (cur.left) {
            let pre = cur.left;
            while (pre.right && pre.right !== cur) {
                pre = pre.right;
            }
            if (!pre.right) {
                pre.right = cur;
                cur = cur.left;
            } else {
                pre.right = null;
                res.push(cur.val);
                cur = cur.right;
            }
        } else {
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
};

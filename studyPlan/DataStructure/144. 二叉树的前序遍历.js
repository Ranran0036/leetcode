/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Morris Traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    /* if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res; */
    if (!root) return [];
    const res = [];
    let cur = root;
    while (cur) {
        if (cur.left) {
            let pre = cur.left;
            while (pre.right && pre.right !== cur) {
                pre = pre.right;
            }
            if (!pre.right) {
                pre.right = cur;
                res.push(cur.val);
                cur = cur.left;
            } else {
                pre.right = null;
                cur = cur.right;
            }
        } else {
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
};

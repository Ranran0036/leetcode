/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Morris InorderTraversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    /* let result = [];
    if (!root) {
        return result;
    }
    result = result.concat(inorderTraversal(root.left));
    result.push(root.val);
    result = result.concat(inorderTraversal(root.right));
    return result; */
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

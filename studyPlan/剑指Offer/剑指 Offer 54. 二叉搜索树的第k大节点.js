/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargest = function (root, k) {
    let res = new Number();

    const dfs = (root) => {
        if (!root) {
            return;
        }
        dfs(root.right);
        k--;
        if (k === 0) {
            res = root.val;
        }

        dfs(root.left);
    };

    dfs(root);

    return res;
};

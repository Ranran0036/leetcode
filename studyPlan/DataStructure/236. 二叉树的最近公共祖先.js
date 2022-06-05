/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    let ans = root;

    const dfs = function (node, p, q) {
        if (node === null) {
            return false;
        }

        const left = dfs(node.left, p, q);
        const right = dfs(node.right, p, q);

        if ((left && right) || ((node.val === p.val || node.val === q.val) && (left || right))) {
            ans = node;
        }

        return left || right || node.val === p.val || node.val === q.val;
    };

    dfs(root, p, q);

    return ans;
};

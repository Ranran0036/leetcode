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
 * @return {TreeNode}
 */
const inorderSuccessor = function (root, p) {
    const target = p.val;

    let ans = null;

    while (root) {
        if (root.val > target) {
            ans = root;
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return ans;
};

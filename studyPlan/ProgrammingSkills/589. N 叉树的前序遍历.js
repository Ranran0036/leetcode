/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root) {
    const res = [];
    dfs(root, res);
    return res;
};

const dfs = function (root, res) {
    if (!root) return;
    res.push(root.val);
    for (const child of root.children) {
        dfs(child, res);
    }
};

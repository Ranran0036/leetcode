/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
    const res = [];

    const dfs = (node, arr) => {
        if (!node) {
            return;
        }

        dfs(node.left, arr);
        dfs(node.right, arr);
        arr.push(node.val);
    };

    dfs(root, res);
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    if (data.length === 0) {
        return null;
    }

    const arr = data.split(",");

    const len = arr.length;
    const stack = [];

    for (let i = 0; i < len; i++) {
        stack.push(parseInt(arr[i]));
    }

    const construct = (lower, upper, stack) => {
        if (
            stack.length === 0 ||
            stack[stack.length - 1] < lower ||
            stack[stack.length - 1] > upper
        ) {
            return null;
        }

        const val = stack.pop();
        const node = new TreeNode(val);

        node.right = construct(val, upper, stack);
        node.left = construct(lower, val, stack);

        return node;
    };

    return construct(-Infinity, Infinity, stack);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

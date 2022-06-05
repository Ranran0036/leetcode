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
    if (root === null) {
        return "#";
    }

    return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    const nodes = data.split(",");

    const buildTree = function (nodes) {
        const val = nodes.shift();

        if (val === "#") {
            return null;
        }

        const node = new TreeNode(val);

        node.left = buildTree(nodes);
        node.right = buildTree(nodes);

        return node;
    };

    return buildTree(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

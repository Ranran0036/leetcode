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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
    if (!root) {
        return false;
    }

    if (root.val === subRoot.val) {
        if (isSameTree(root, subRoot)) {
            return true;
        }
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function (root1, root2) {
    if (!root1 && !root2) {
        return true;
    }

    if (!root1 || !root2) {
        return false;
    }

    if (root1.val !== root2.val) {
        return false;
    }

    return (
        isSameTree(root1.left, root2.left) &&
        isSameTree(root1.right, root2.right)
    );
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import TreeNode from "../../structures/TreeNode";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return null;
    }

    while (root) {
        if (root.val === val) {
            return root;
        } else if (root.val > val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }

    return null;
}

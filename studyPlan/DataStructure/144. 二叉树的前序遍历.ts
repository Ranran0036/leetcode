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

function preorderTraversal(root: TreeNode | null): number[] {
    return preorder(root, []);
}

function preorder(root: TreeNode | null, res: number[]): number[] {
    if (root === null) {
        return res;
    }

    res.push(root.val);
    preorder(root.left, res);
    preorder(root.right, res);

    return res;
}

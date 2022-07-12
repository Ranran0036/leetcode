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

function inorderTraversal(root: TreeNode | null): number[] {
    return inorder(root, []);
}

function inorder(root: TreeNode | null, res: number[]): number[] {
    if (root === null) {
        return res;
    }

    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);

    return res;
}

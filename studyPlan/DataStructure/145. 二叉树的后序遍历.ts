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

function postorderTraversal(root: TreeNode | null): number[] {
    return postorder(root, []);
}

function postorder(root: TreeNode | null, res: number[]): number[] {
    if (root === null) {
        return res;
    }

    postorder(root.left, res);
    postorder(root.right, res);
    res.push(root.val);

    return res;
}

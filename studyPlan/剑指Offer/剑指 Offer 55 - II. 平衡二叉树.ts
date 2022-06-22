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
import { TreeNode } from "./剑指 Offer 55 - I. 二叉树的深度";

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

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

function findTarget(root: TreeNode | null, k: number): boolean {
    const set = new Set<number>();

    const dfs = (node: TreeNode | null, target: number): boolean => {
        if (!node) {
            return false;
        }

        if (set.has(target - node.val)) {
            return true;
        }

        set.add(node.val);

        return dfs(node.left, target) || dfs(node.right, target);
    };

    return dfs(root, k);
}

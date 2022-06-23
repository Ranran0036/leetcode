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

import TreeNode from "../../../structures/TreeNode";

function largestValues(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const ans: number[] = [];

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const size = queue.length;
        let max = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!;
            max = Math.max(max, node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        ans.push(max);
    }

    return ans;
}

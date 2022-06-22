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
import { TreeNode } from "../../../studyPlan/剑指Offer/剑指 Offer 55 - I. 二叉树的深度";

function findBottomLeftValue(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let queue: TreeNode[] = [];
    let ans: number = 0;
    queue.push(root);

    while (queue.length) {
        ans = queue[0].val;
        const nextQueue: TreeNode[] = [];

        for (const node of queue) {
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        queue = nextQueue;
    }

    return ans;
}

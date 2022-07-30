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

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;
    let ans: number = 1,
        max: number = root!.val;

    let queue: Array<TreeNode> = [root];

    for (let level = 1; queue.length > 0; level++) {
        const nq = new Array<TreeNode>();
        let sum = 0;

        for (const node of queue) {
            sum += node.val;

            if (node.left) {
                nq.push(node.left);
            }

            if (node.right) {
                nq.push(node.right);
            }
        }

        if (sum > max) {
            max = sum;
            ans = level;
        }

        queue = nq;
    }

    return ans;
}

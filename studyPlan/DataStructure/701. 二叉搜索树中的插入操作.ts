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

//方法一：循环
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    const insert: TreeNode = new TreeNode(val);

    if (!root) {
        return insert;
    }

    let curr: TreeNode | null = root;

    while (curr) {
        if (curr.val > val) {
            if (!curr.left) {
                curr.left = insert;
                break;
            } else {
                curr = curr.left;
            }
        } else {
            if (!curr.right) {
                curr.right = insert;
                break;
            } else {
                curr = curr.right;
            }
        }
    }

    return root;
}

//方法二：递归
function insertIntoBST_(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return new TreeNode(val);
    }

    if (root.val > val) {
        root.left = insertIntoBST_(root.left, val);
    } else {
        root.right = insertIntoBST_(root.right, val);
    }

    return root;
}

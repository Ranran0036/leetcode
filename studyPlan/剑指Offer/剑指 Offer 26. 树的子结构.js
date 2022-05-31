/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
const isSubStructure = function (A, B) {
    if (!A || !B) {
        return false;
    }
    return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

const helper = function (A, B) {
    if (!B) {
        return true;
    }

    if (!A || A.val !== B.val) {
        return false;
    }

    return helper(A.left, B.left) && helper(A.right, B.right);
};

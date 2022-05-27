/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    if (!nums.length) {
        return null;
    }

    return sortedRangeArrayToBST(nums, 0, nums.length - 1);
};

/**
 *
 * @param {Array<Number>} nums
 * @param {Number} left
 * @param {Number} right
 * @return {TreeNode}
 */
const sortedRangeArrayToBST = (nums, left, right) => {
    if (left > right) {
        return null;
    }

    const mid = (left + right) >> 1;

    let root = new TreeNode(nums[mid]);

    root.left = sortedRangeArrayToBST(nums, left, mid - 1);
    root.right = sortedRangeArrayToBST(nums, mid + 1, right);

    return root;
};

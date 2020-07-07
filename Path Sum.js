/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
	// 遍历到叶子节点下一个节点-终止递归
	if (root === null) return false

	// 遍历到叶子节点 判断剩余节点是否与和差值未0
	if (root.left === null && root.right === null) {
		return (sum - root.val) === 0;
	}

	// sum一次减去该节点左节点、右节点 是否等于最后叶子节点
	let left = hasPathSum(root.left, sum - root.val),
	    right = hasPathSum(root.right, sum - root.val);

	// 存在一侧满足就满足
	return left || right
};

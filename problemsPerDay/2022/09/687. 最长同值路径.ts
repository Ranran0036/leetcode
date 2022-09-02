import TreeNode from "../../../structures/TreeNode";

function longestUnivaluePath(root: TreeNode | null): number {
    let max: number = 0;

    function dfs(root: TreeNode | null): number {
        if (!root) {
            return 0;
        }

        let leftValue: number = dfs(root.left);
        let rightValue: number = dfs(root.right);

        leftValue = root.left !== null && root.val === root.left.val ? ++leftValue : 0;
        rightValue = root.right !== null && root.val === root.right.val ? ++rightValue : 0;

        max = Math.max(max, leftValue + rightValue);

        return Math.max(leftValue, rightValue);
    }

    dfs(root);

    return max;
}

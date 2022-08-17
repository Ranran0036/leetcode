import TreeNode from "../../../structures/TreeNode";

function deepestLeavesSum(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let queue: TreeNode[] = [root];
    let sum = 0;

    while (queue.length) {
        let size = queue.length;
        sum = 0;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            sum += node!.val;
            if (node!.left) {
                queue.push(node!.left);
            }
            if (node!.right) {
                queue.push(node!.right);
            }
        }
    }

    return sum;
}

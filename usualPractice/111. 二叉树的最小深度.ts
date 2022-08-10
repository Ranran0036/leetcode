import TreeNode from "../structures/TreeNode";

//深度优先搜索
function minDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    let min_depth = Number.MAX_VALUE;

    if (root.left !== null) {
        min_depth = Math.min(minDepth(root.left), min_depth);
    }

    if (root.right !== null) {
        min_depth = Math.min(minDepth(root.right), min_depth);
    }

    return min_depth + 1;
}

//广度优先搜索
function minDepth_(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let queue: TreeNode[] = [root];
    let depth = 1;
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift()!;
            if (node.left === null && node.right === null) {
                return depth;
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        depth++;
    }
    return depth;
}

import TreeNode from "../structures/TreeNode";

function binaryTreePaths(root: TreeNode | null): string[] {
    const result: string[] = [];
    if (!root) {
        return result;
    }

    const path: number[] = [];

    function dfs(node: TreeNode | null, path: number[]): void {
        if (!node) {
            return;
        }

        path.push(node.val);
        if (!node.left && !node.right) {
            result.push(path.join("->"));
        } else {
            dfs(node.left, path.slice());
            dfs(node.right, path.slice());
        }
        //path.pop();
    }

    dfs(root, path);
    return result;
}

console.log(binaryTreePaths(new TreeNode(1, new TreeNode(2, new TreeNode(5), new TreeNode(3)), new TreeNode(4))));

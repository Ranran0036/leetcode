import TreeNode from "../../../structures/TreeNode";

function printTree(root: TreeNode | null): string[][] {
    let h: number = 0;
    let ans: string[][] = new Array<Array<string>>();

    function dfs1(root: TreeNode | null, depth: number): void {
        if (root == null) return;
        h = Math.max(h, depth);
        dfs1(root.left, depth + 1);
        dfs1(root.right, depth + 1);
    }

    function dfs2(root: TreeNode | null, x: number, y: number): void {
        if (root == null) return;
        ans[x][y] = root.val + "";
        dfs2(root.left, x + 1, y - (1 << (h - x - 1)));
        dfs2(root.right, x + 1, y + (1 << (h - x - 1)));
    }

    dfs1(root, 0);
    let m = h + 1;
    let n = (1 << (h + 1)) - 1;

    for (let i = 0; i < m; i++) {
        ans[i] = new Array<string>(n).fill("");
    }

    dfs2(root, 0, (n - 1) / 2);

    return ans;
}

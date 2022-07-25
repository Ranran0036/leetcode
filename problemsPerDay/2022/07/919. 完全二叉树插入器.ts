import TreeNode from "../../../structures/TreeNode";

class CBTInserter {
    list: TreeNode[] = new Array<TreeNode>();
    idx: number = 0;
    constructor(root: TreeNode | null) {
        this.list.push(root!);
        let cur = 0;
        while (cur < this.list.length) {
            const node = this.list[cur];
            if (node.left != null) this.list.push(node.left);
            if (node.right != null) this.list.push(node.right);
            cur++;
        }
    }
    insert(val: number): number {
        const node = new TreeNode(val);
        while (this.list[this.idx].left != null && this.list[this.idx].right != null) this.idx++;
        const fa = this.list[this.idx];
        if (fa.left == null) fa.left = node;
        else if (fa.right == null) fa.right = node;
        this.list.push(node);
        return fa.val;
    }
    get_root(): TreeNode | null {
        return this.list[0];
    }
}

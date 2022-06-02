/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
class BSTIterator {
    constructor(root) {
        this.idx = 0;
        this.res = [];
        this.inorderTraversal(root, this.res);
    }
    /**
     * @return {number}
     */
    next() {
        return this.res[this.idx++];
    }
    /**
     * @return {boolean}
     */
    hasNext() {
        return this.idx < this.res.length;
    }
    inorderTraversal(root, res) {
        if (!root) return;

        let cur = root;
        while (cur) {
            if (cur.left) {
                let pre = cur.left;
                while (pre.right && pre.right !== cur) {
                    pre = pre.right;
                }
                if (!pre.right) {
                    pre.right = cur;
                    cur = cur.left;
                } else {
                    pre.right = null;
                    res.push(cur.val);
                    cur = cur.right;
                }
            } else {
                res.push(cur.val);
                cur = cur.right;
            }
        }
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

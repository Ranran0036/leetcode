/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * morris postorder traversal
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
    if (!root) {
        return [];
    }

    let cur = root;
    let mostRight = null;

    const ans = [];

    while (cur) {
        mostRight = cur.left;
        if (mostRight) {
            while (mostRight.right && mostRight.right !== cur) {
                mostRight = mostRight.right;
            }
            if (!mostRight.right) {
                mostRight.right = cur;
                cur = cur.left;
                continue;
            } else {
                mostRight.right = null;
                addPath(cur.left, ans);
            }
        }

        cur = cur.right;
    }
    addPath(root, ans);
    return ans;
};

/**
 * reverse add traversal right
 * @param {TreeNode} root
 * @param {number[]} path
 */
const addPath = function (root, path) {
    let count = 0;
    while (root) {
        path.push(root.val);
        root = root.right;
        count++;
    }

    let left = path.length - count;
    let right = path.length - 1;

    while (left < right) {
        [path[left], path[right]] = [path[right], path[left]];
        left++;
        right--;
    }
};

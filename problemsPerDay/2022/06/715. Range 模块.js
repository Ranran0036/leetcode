const MAX_RANGE = 1e9 + 7;

class RangeModule {
    constructor() {
        this.st = new SegmentTree();
    }
    /**
     * @param {number} left
     * @param {number} right
     * @return {void}
     */
    addRange(left, right) {
        this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, true);
    }
    /**
     * @param {number} left
     * @param {number} right
     * @return {boolean}
     */
    queryRange(left, right) {
        return this.st.query(this.st.root, 1, MAX_RANGE, left, right - 1);
    }
    /**
     * @param {number} left
     * @param {number} right
     * @return {void}
     */
    removeRange(left, right) {
        this.st.update(this.st.root, 1, MAX_RANGE, left, right - 1, false);
    }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

class SegNode {
    constructor() {
        this.ls = this.rs = null;
        this.val = this.add = false;
    }
}

class SegmentTree {
    constructor() {
        this.root = new SegNode();
    }

    update(node, lc, rc, l, r, val) {
        if (l <= lc && rc <= r) {
            node.val = val;
            node.add = true;
            return;
        }

        this.pushDown(node);

        const mid = (lc + rc) >> 1;

        if (l <= mid) {
            this.update(node.ls, lc, mid, l, r, val);
        }

        if (r > mid) {
            this.update(node.rs, mid + 1, rc, l, r, val);
        }

        this.pushUp(node);
    }

    query(node, lc, rc, l, r) {
        if (l <= lc && rc <= r) {
            return node.val;
        }

        this.pushDown(node);

        let ans = true;

        const mid = (lc + rc) >> 1;

        if (l <= mid) {
            ans = ans && this.query(node.ls, lc, mid, l, r);
        }

        if (r > mid) {
            ans = ans && this.query(node.rs, mid + 1, rc, l, r);
        }

        return ans;
    }

    pushUp(node) {
        node.val = node.ls.val && node.rs.val;
    }

    pushDown(node) {
        if (node.ls === null) {
            node.ls = new SegNode();
        }

        if (node.rs === null) {
            node.rs = new SegNode();
        }

        if (!node.add) {
            return;
        }

        node.ls.val = node.rs.val = node.val;
        node.ls.add = node.rs.add = true;
        node.add = false;
    }
}

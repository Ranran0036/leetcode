class MyCalendarThree {
    constructor() {
        this.tree = new Map();
        this.lazy = new Map();
    }
    /**
     * @param {number} start
     * @param {number} end
     * @return {number}
     */
    book(start, end) {
        this.update(start, end - 1, 0, 1000000, 1);
        return this.tree.get(1) || 0;
    }
    update(start, end, l, r, delta) {
        if (l > end || r < start) return;

        if (start <= l && r <= end) {
            this.tree.set(delta, (this.tree.get(delta) || 0) + 1);
            this.lazy.set(delta, (this.lazy.get(delta) || 0) + 1);
        } else {
            const mid = (l + r) >> 1;
            this.update(start, end, l, mid, delta * 2);
            this.update(start, end, mid + 1, r, delta * 2 + 1);
            this.tree.set(delta, (this.lazy.get(delta) || 0) + Math.max(this.tree.get(2 * delta) || 0, this.tree.get(2 * delta + 1) || 0));
        }
    }
}

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

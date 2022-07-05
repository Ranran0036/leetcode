class MyCalendar {
    tree: Set<number>;
    lazy: Set<number>;

    constructor() {
        this.tree = new Set<number>();
        this.lazy = new Set<number>();
    }

    book(start: number, end: number): boolean {
        if (this.query(start, end - 1, 0, 1000000000, 1)) {
            return false;
        }

        this.update(start, end - 1, 0, 1000000000, 1);
        return true;
    }

    query(start: number, end: number, left: number, right: number, depth: number): boolean {
        if (start > right || end < left) {
            return false;
        }

        if (this.lazy.has(depth)) {
            return true;
        }

        if (start <= left && right <= end) {
            return this.tree.has(depth);
        } else {
            const mid = (left + right) >> 1;
            if (end <= mid) {
                return this.query(start, end, left, mid, depth * 2);
            } else if (start > mid) {
                return this.query(start, end, mid + 1, right, depth * 2 + 1);
            } else {
                return this.query(start, mid, left, mid, depth * 2) || this.query(start, end, mid + 1, right, depth * 2 + 1);
            }
        }
    }

    update(start: number, end: number, left: number, right: number, depth: number): void {
        if (right < start || left > end) {
            return;
        }

        if (start <= left && right <= end) {
            this.lazy.add(depth);
            this.tree.add(depth);
        } else {
            const mid = (left + right) >> 1;
            this.update(start, end, left, mid, depth * 2);
            this.update(start, end, mid + 1, right, depth * 2 + 1);
            this.tree.add(depth);
        }
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

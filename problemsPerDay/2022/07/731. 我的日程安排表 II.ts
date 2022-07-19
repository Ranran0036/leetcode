class MyCalendarTwo {
    tree: Map<number, number[]>;
    constructor() {
        this.tree = new Map<number, number[]>();
    }

    book(start: number, end: number): boolean {
        const update = (start: number, end: number, val: number, l: number, r: number, idx: number) => {
            if (r < start || end < l) {
                return;
            }

            if (!this.tree.has(idx)) {
                this.tree.set(idx, [0, 0]);
            }

            if (start <= l && r <= end) {
                this.tree.get(idx)![0] += val;
                this.tree.get(idx)![1] += val;
            } else {
                const mid = (l + r) >> 1;
                update(start, end, val, l, mid, idx * 2);
                update(start, end, val, mid + 1, r, idx * 2 + 1);

                if (!this.tree.has(idx * 2)) {
                    this.tree.set(idx * 2, [0, 0]);
                }

                if (!this.tree.has(idx * 2 + 1)) {
                    this.tree.set(idx * 2 + 1, [0, 0]);
                }

                this.tree.get(idx)![0] = this.tree.get(idx)![1] + Math.max(this.tree.get(2 * idx)![0], this.tree.get(2 * idx + 1)![0]);
            }
        };

        update(start, end - 1, 1, 0, 1000000000, 1);

        if (!this.tree.has(1)) {
            this.tree.set(1, [0, 0]);
        }

        if (this.tree.get(1)![0] > 2) {
            update(start, end - 1, -1, 0, 1000000000, 1);
            return false;
        }

        return true;
    }
}

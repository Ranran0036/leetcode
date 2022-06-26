class Solution {
    b2w: Map<number, number>;
    bound: number;
    constructor(n: number, blacklist: number[]) {
        this.b2w = new Map<number, number>();
        this.bound = n - blacklist.length;
        const black = new Set<number>();

        for (const b of blacklist) {
            black.add(b);
        }

        let w = this.bound;
        for (const b of blacklist) {
            if (b < this.bound) {
                while (black.has(w)) {
                    w++;
                }

                this.b2w.set(b, w++);
            }
        }
    }

    pick(): number {
        const r = Math.floor(Math.random() * this.bound);
        return this.b2w.has(r) ? this.b2w.get(r)! : r;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

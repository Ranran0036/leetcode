/**
 * @param {number[][]} rects
 */
class Solution {
    constructor(rects) {
        this.rects = rects;
    }
    /**
     * @return {number[]}
     */
    pick() {
        let curSum = 0;
        let idx = 0;

        for (let i = 0; i < this.rects.length; i++) {
            const [x1, y1, x2, y2] = this.rects[i];
            let cur = (x2 - x1 + 1) * (y2 - y1 + 1);
            curSum += cur;

            if (Math.random() * curSum < cur) {
                idx = i;
            }
        }

        const [x1, y1, x2, y2] = this.rects[idx];
        const x = x1 + Math.floor(Math.random() * (x2 - x1 + 1));
        const y = y1 + Math.floor(Math.random() * (y2 - y1 + 1));

        return [x, y];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */

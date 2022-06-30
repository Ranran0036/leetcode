function storeWater(bucket: number[], vat: number[]): number {
    const n = bucket.length;
    const heap = new MaxHeap();
    let updateTimes = 0;
    let waterTimes = -Infinity;
    for (let i = 0; i < n; i++) {
        if (vat[i] === 0) continue;
        if (bucket[i] === 0) {
            bucket[i] += 1;
            updateTimes++;
        }
        waterTimes = Math.max(waterTimes, getTimes(bucket[i], vat[i]));
        heap.push([bucket[i], vat[i]]);
    }
    if (waterTimes === -Infinity) return 0;
    let minTimes = updateTimes + waterTimes;

    for (let ut = 1; ut < minTimes; ut++) {
        const a = heap.pop()!;
        if (a !== -1) {
            a[0]++;
            heap.push(a);
        }
        let t = updateTimes + ut;
        let wt = -Infinity;
        const curr = heap.data;
        for (let i = 0; i < curr.length; i++) {
            wt = Math.max(wt, getTimes(curr[i][0], curr[i][1]));
        }
        minTimes = Math.min(minTimes, t + wt);
    }
    return minTimes;
}

function getTimes(b: number, v: number) {
    return Math.ceil(v / b);
}

class MaxHeap {
    data: number[][];
    constructor() {
        this.data = [];
    }
    compare(c: number, p: number) {
        const a = this.data;
        return getTimes(a[c][0], a[c][1]) > getTimes(a[p][0], a[p][1]);
    }
    swap(i: number, j: number) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
    size() {
        return this.data.length;
    }
    shiftUp(index: number) {
        let i = index;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(i, p)) {
                this.swap(i, p);
                i = p;
            } else {
                break;
            }
        }
    }
    shiftDown(index: number) {
        let i = index;
        const n = this.size();
        while (i < n) {
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            let max = i;
            if (l < n && this.compare(l, max)) max = l;
            if (r < n && this.compare(r, max)) max = r;
            if (max === i) break;
            this.swap(max, i);
            i = max;
        }
    }
    peak() {
        return this.data[0];
    }
    pop() {
        if (this.size() === 0) return -1;
        const first = this.data[0];
        const last = this.data.pop();
        if (this.size() === 0) return last;
        this.data[0] = last!;
        this.shiftDown(0);
        return first;
    }
    push(val: number[]) {
        this.data.push(val);
        this.shiftUp(this.size() - 1);
    }
}

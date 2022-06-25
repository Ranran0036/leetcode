class PriorityQueue {
    private data: any[] = [];
    private compare: (a: any, b: any) => number;

    constructor(compare?: (a: any, b: any) => number) {
        const defaultCompare = (a: any, b: any) => a - b;
        this.compare = compare || defaultCompare;
    }

    size(): number {
        return this.data.length;
    }

    empty(): boolean {
        return this.size() === 0;
    }

    add(item: any): void {
        this.data.push(item);
        this.shiftUp(this.size() - 1);
    }

    top(): any {
        if (!this.empty()) {
            return this.data[0];
        }
    }

    pop(): any {
        if (!this.empty()) {
            const ret = this.top();
            this.swap(0, this.size() - 1);
            this.data.pop();
            this.shiftDown(0);
            return ret;
        }
    }

    private parent(i: number): number | undefined {
        if (i === 0) {
            return undefined;
        }
        return Math.floor((i - 1) / 2);
    }

    private left(i: number): number {
        return 2 * i + 1;
    }

    private right(i: number): number {
        return 2 * i + 2;
    }

    private swap(i: number, j: number): void {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    private shiftUp(i: number): void {
        while (i > 0 && this.compare(this.data[this.parent(i) as number], this.data[i]) < 0) {
            this.swap(i, this.parent(i) as number);
            i = this.parent(i) as number;
        }
    }

    private shiftDown(i: number): void {
        while (this.left(i) < this.size()) {
            let childIndex = this.left(i);
            if (childIndex + 1 < this.size() && this.compare(this.data[childIndex], this.data[childIndex + 1]) < 0) {
                childIndex++;
            }

            if (this.compare(this.data[i], this.data[childIndex]) >= 0) {
                break;
            }

            this.swap(i, childIndex);
            i = childIndex;
        }
    }
}

class MedianFinder {
    minHeap: PriorityQueue = new PriorityQueue((a: number, b: number) => b - a);
    maxHeap: PriorityQueue = new PriorityQueue((a: number, b: number) => a - b);

    addNum(num: number): void {
        if (this.maxHeap.size() === this.minHeap.size()) {
            if (this.maxHeap.empty()) {
                this.maxHeap.add(num);
                return;
            }

            if (num <= this.maxHeap.top()) {
                this.maxHeap.add(num);
            } else {
                this.minHeap.add(num);
                this.maxHeap.add(this.minHeap.pop());
            }
        } else {
            if (num < this.maxHeap.top()) {
                this.maxHeap.add(num);
                this.minHeap.add(this.maxHeap.pop());
            } else {
                this.minHeap.add(num);
            }
        }
    }

    findMedian(): number {
        const sz = this.maxHeap.size() + this.minHeap.size();
        return sz % 2 === 0 ? (this.maxHeap.top() + this.minHeap.top()) / 2 : this.maxHeap.top();
    }
}

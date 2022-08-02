class MyCircularQueue {
    k: number = 0;
    he: number = 0;
    ta: number = 0;
    nums: number[];

    constructor(k: number) {
        this.k = k;
        this.nums = new Array<number>(this.k);
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.nums[this.ta % this.k] = value;
        return this.ta++ >= 0;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        return this.he++ >= 0;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.nums[this.he % this.k];
    }

    Rear(): number {
        return this.isEmpty() ? -1 : this.nums[(this.ta - 1) % this.k];
    }

    isEmpty(): boolean {
        return this.he == this.ta;
    }

    isFull(): boolean {
        return this.ta - this.he == this.k;
    }
}

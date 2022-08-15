class MyCircularDeque {
    he = 0;
    ta = 0;
    cnt = 0;
    k = 0;
    nums: number[];
    constructor(_k: number) {
        this.k = _k;
        this.he = this.ta = this.cnt = 0;
        this.nums = new Array<number>(this.k);
    }

    insertFront(value: number): boolean {
        if (this.isFull()) return false;
        this.he = (this.he + this.k - 1) % this.k;
        this.nums[this.he] = value;
        this.cnt++;
        return true;
    }

    insertLast(value: number): boolean {
        if (this.isFull()) return false;
        this.nums[this.ta++] = value;
        this.ta %= this.k;
        this.cnt++;
        return true;
    }

    deleteFront(): boolean {
        if (this.isEmpty()) return false;
        this.he = (this.he + 1) % this.k;
        this.cnt--;
        return true;
    }

    deleteLast(): boolean {
        if (this.isEmpty()) return false;
        this.ta = (this.ta + this.k - 1) % this.k;
        this.cnt--;
        return true;
    }

    getFront(): number {
        return this.isEmpty() ? -1 : this.nums[this.he];
    }

    getRear(): number {
        return this.isEmpty() ? -1 : this.nums[(this.ta + this.k - 1) % this.k];
    }

    isEmpty(): boolean {
        return this.cnt == 0;
    }

    isFull(): boolean {
        return this.cnt == this.k;
    }
}

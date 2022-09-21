class MaxQueue {
    queue: Array<number>;
    deque: Array<number>;

    constructor() {
        this.queue = new Array<number>();
        this.deque = new Array<number>();
    }

    max_value(): number {
        return this.queue.length === 0 ? -1 : this.deque[0];
    }

    push_back(value: number): void {
        this.queue.push(value);

        while (this.deque.length && this.deque[this.deque.length - 1] < value) {
            this.deque.pop();
        }

        this.deque.push(value);
    }

    pop_front(): number {
        if (!this.queue.length) {
            return -1;
        }

        const shiftElement = this.queue.shift()!;

        if (shiftElement === this.deque[0]) {
            this.deque.shift();
        }

        return shiftElement;
    }
}

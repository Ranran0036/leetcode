class MyStack {
    queue: number[];
    _queue: number[];

    constructor() {
        this.queue = [];
        this._queue = [];
    }

    push(x: number) {
        this.queue.push(x);
    }

    pop(): number {
        while (this.queue.length > 1) {
            this._queue.push(this.queue.shift()!);
        }

        const result = this.queue.shift()!;

        while (this._queue.length) {
            this.queue.push(this._queue.shift()!);
        }

        return result;
    }

    top(): number {
        return this.queue.slice(-1)[0];
    }

    empty(): boolean {
        return this.queue.length === 0;
    }
}

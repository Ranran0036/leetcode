class MyQueue {
    private stack1: number[] = [];
    private stack2: number[] = [];

    constructor() {}

    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (!this.stack2.length) {
            this.move();
        }

        return this.stack2.pop()!;
    }

    move(): void {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop()!);
        }
    }

    peek(): number {
        if (!this.stack2.length) {
            this.move();
        }
        return this.stack2[this.stack2.length - 1];
    }

    empty(): boolean {
        return !this.stack1.length && !this.stack2.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

class MovingAverage {
    stack: number[];
    size: number;
    constructor(size: number) {
        this.stack = [];
        this.size = size;
    }

    next(val: number): number {
        this.stack.push(val);

        let sum = 0;
        let len = this.stack.length;
        let times = 0;
        for (let i = 0; i < this.size && len; i++) {
            sum += this.stack[this.stack.length - 1 - i];
            len--;
            times++;
        }

        return sum / times;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/* 
方法2
class MovingAverage {
    stack: number[];
    size: number;
    sum: number;
    constructor(size: number) {
        this.stack = [];
        this.size = size;
        this.sum = 0;
    }

    next(val: number): number {
        if (this.stack.length === this.size) {
            this.sum -= this.stack.shift()!;
        }

        this.stack.push(val);
        this.sum += val;

        return this.sum / this.stack.length;
    }
} */

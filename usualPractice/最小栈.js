class MinStack {
    constructor() {
        this.stack = [];
        this.min = [Number.MAX_SAFE_INTEGER];
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.min.push(Math.min(this.min[this.min.length - 1], val));
    }
    /**
     * @return {void}
     */
    pop() {
        this.min.pop();
        this.stack.pop();
    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

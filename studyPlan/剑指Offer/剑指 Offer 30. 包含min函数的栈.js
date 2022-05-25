/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [Number.MAX_SAFE_INTEGER];
    }
    /**
     * @param {number} value
     * @return {void}
     */
    push(value) {
        this.stack.push(value);
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], value));
    }
    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
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
    min() {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

class MyQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.inStack.push(x);
    }
    /**
     * @return {number}
     */
    pop() {
        if (this.outStack.length === 0) {
            this.in2out();
        }
        return this.outStack.pop();
    }
    /**
     * @return {number}
     */
    peek() {
        if (this.outStack.length === 0) {
            this.in2out();
        }
        return this.outStack[this.outStack.length - 1];
    }
    /**
     * @return {boolean}
     */
    empty() {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    in2out() {
        while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
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

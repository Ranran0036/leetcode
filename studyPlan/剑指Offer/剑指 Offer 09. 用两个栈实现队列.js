class CQueue {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    /**
     * @param {number} value
     * @return {void}
     */
    appendTail(value) {
        this.inStack.push(value);
    }
    /**
     * @return {number}
     */
    deleteHead() {
        if (!this.outStack.length) {
            if (!this.inStack.length) {
                return -1;
            }
            this.in2out();
        }

        return this.outStack.pop();
    }
    in2out() {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

class MyLinkedList {
    constructor() {
        this.size = 0;
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        let curr = this.head;
        if (index + 1 < this.size - index) {
            for (let i = 0; i < index + 1; i++) {
                curr = curr.next;
            }
        } else {
            curr = this.tail;
            for (let i = 0; i < this.size - index; i++) {
                curr = curr.prev;
            }
        }

        return curr.val;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        let pred = this.head;
        let succ = this.head.next;
        this.size++;
        let to_add = new ListNode(val);
        to_add.next = succ;
        to_add.prev = pred;
        pred.next = to_add;
        succ.prev = to_add;
    }
    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let pred = this.tail.prev;
        let succ = this.tail;
        this.size++;
        let to_add = new ListNode(val);
        to_add.next = succ;
        to_add.prev = pred;
        pred.next = to_add;
        succ.prev = to_add;
    }
    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        }
        let pred = null;
        let succ = null;
        if (index < 0) {
            index = 0;
        }
        if (index < this.size - index) {
            pred = this.head;
            for (let i = 0; i < index; i++) {
                pred = pred.next;
            }
            succ = pred.next;
        } else {
            succ = this.tail;
            for (let i = 0; i < this.size - index; i++) {
                succ = succ.prev;
            }
            pred = succ.prev;
        }

        this.size++;
        let to_add = new ListNode(val);
        to_add.next = succ;
        to_add.prev = pred;
        pred.next = to_add;
        succ.prev = to_add;
    }
    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }
        let pred = null;
        let succ = null;

        if (index < this.size - index) {
            pred = this.head;
            for (let i = 0; i < index; i++) {
                pred = pred.next;
            }
            succ = pred.next.next;
        } else {
            succ = this.tail;
            for (let i = 0; i < this.size - index - 1; i++) {
                succ = succ.prev;
            }
            pred = succ.prev.prev;
        }

        this.size--;
        pred.next = succ;
        succ.prev = pred;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * 双链表
 */
class DoubleNode {
    /**
     * @param {Number} data
     */
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

/**
 * 双端队列
 */
class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * 判断队列是否为空
     * @return {Boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * 从队列头部插入元素
     * @param {Number} data
     */
    pushFront(data) {
        const node = new DoubleNode(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
    }

    /**
     * 从队列尾部插入元素
     * @param {Number} data
     */
    pushBack(data) {
        const node = new DoubleNode(data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    /**
     * 从队列头部删除元素
     * @return {Number} 被删除的元素
     */
    popFront() {
        if (this.isEmpty()) {
            return null;
        }
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return node.data;
    }

    /**
     * 从队列尾部删除元素
     * @return {Number}
     */
    popBack() {
        if (this.isEmpty()) {
            return null;
        }
        const node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return node.data;
    }

    /**
     * 返回队列头部元素
     * @return {Number}
     */
    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.data;
    }

    /**
     * 返回队列尾部元素
     * @return {Number}
     */
    back() {
        if (this.isEmpty()) {
            return null;
        }
        return this.tail.data;
    }
}

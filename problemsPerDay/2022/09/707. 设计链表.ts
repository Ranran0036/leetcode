import ListNode from "../../../structures/ListNode";

class MyLinkedList {
    size: number;
    head: ListNode;
    constructor() {
        this.size = 0;
        this.head = new ListNode(0);
    }

    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let cur = this.head;

        for (let i = 0; i <= index; i++) {
            cur = cur.next!;
        }

        return cur.val;
    }

    addAtHead(val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return;
        }

        index = Math.max(0, index);
        this.size++;

        let pre = this.head;

        for (let i = 0; i < index; i++) {
            pre = pre.next!;
        }

        let toAdd = new ListNode(val);
        toAdd.next = pre.next;
        pre.next = toAdd;
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }
        this.size--;
        let pre = this.head;
        for (let i = 0; i < index; i++) {
            pre = pre.next!;
        }
        pre.next = pre.next!.next;
    }
}

import ListNode from "../../structures/ListNode";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) {
        return head;
    }

    let len = 1;
    let tail = head;

    while (tail.next) {
        len++;
        tail = tail.next;
    }

    const rotateRightTimes = k % len;

    if (rotateRightTimes === 0) {
        return head;
    }

    let rotatePoint = head;

    for (let i = 0; i < len - rotateRightTimes - 1; i++) {
        rotatePoint = rotatePoint.next!;
    }

    //console.log(rotatePoint);

    const newHead = rotatePoint.next;
    rotatePoint.next = null;
    tail.next = head;

    return newHead;
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(rotateRight(l1, 2));
//debugger;

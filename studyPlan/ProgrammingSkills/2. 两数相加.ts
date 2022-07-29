import ListNode from "../../structures/ListNode";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let pre = new ListNode(0);
    let cur = pre;

    let carry = 0;

    while (l1 || l2) {
        let sum = carry;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        carry = sum >= 10 ? 1 : 0;
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }

    if (carry) {
        cur.next = new ListNode(carry);
    }

    return pre.next;
}

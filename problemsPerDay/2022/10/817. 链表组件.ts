import ListNode from "../../../structures/ListNode";

function numComponents(head: ListNode | null, nums: number[]): number {
    const set: Set<number> = new Set<number>(nums);

    let res: number = 0;
    let inSet: boolean = false;

    while (head) {
        if (set.has(head.val)) {
            if (!inSet) {
                inSet = true;
                res++;
            }
        } else {
            inSet = false;
        }

        head = head.next;
    }

    return res;
}

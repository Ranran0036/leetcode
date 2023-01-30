function getNext(num: number): number {
    let total = 0;

    while (num > 0) {
        let d = num % 10;
        num = Math.floor(num / 10);
        total += d * d;
    }

    return total;
}

function isHappy(n: number): boolean {
    let slow = n;
    let fast = getNext(n);

    while (fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
}

function findNthDigit(n: number): number {
    let digit = 1;
    let start = 1;
    let count = 9;

    while (n > count) {
        n -= count;
        digit++;
        start *= 10;
        count = digit * start * 9;
    }

    let num = start + Math.floor((n - 1) / digit);

    return Number(num.toString()[(n - 1) % digit]);
}

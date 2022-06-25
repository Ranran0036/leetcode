function myPow(x: number, n: number): number {
    if (x === 0 && n === 0) {
        return 1;
    }
    if (x === 0) {
        return 0;
    }

    let ans = 1;
    let flag = n;

    if (flag < 0) {
        flag = -flag;
        x = 1 / x;
    }

    while (flag) {
        if (flag & 1) {
            ans *= x;
        }
        x *= x;
        flag >>>= 1;
    }

    return ans;
}

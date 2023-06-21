function test(num: number): number {
    let res = 1;

    for (let i = 2; i <= num; i++) {
        let sum = ((2 + i) * (i - 1)) / 2;

        res *= 1 + 1 / sum;
    }

    return res;
}

console.log(test(50));

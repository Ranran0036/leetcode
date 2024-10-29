function validStrings(n: number): string[] {
    const res: string[] = [];

    const mark = (1 << n) - 1;

    for (let i = 0; i <= mark; i++) {
        const str = (i ^ mark).toString(2).padStart(n, "0");

        if ((i & (i >> 1)) === 0) {
            res.push(str);
        }
    }

    return res;
}

console.log(validStrings(2)); //
console.log(validStrings(3)); //
console.log(validStrings(4)); // ["0001", "0100", "1000", "1010", "0101"]

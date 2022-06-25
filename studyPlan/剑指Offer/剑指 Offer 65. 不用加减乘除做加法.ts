function add(a: number, b: number): number {
    if (b === 0) {
        return a;
    }

    return add(a ^ b, (a & b) << 1);
}

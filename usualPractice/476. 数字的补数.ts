function findComplement(num: number): number {
    // find the highest bit of num
    let highBit = 0;
    for (let i = 1; i <= 30; i++) {
        if (num >= 1 << i) {
            highBit = i;
        } else {
            break;
        }
    }
    // create a mask of all ones with the same length as num
    let mask = highBit === 30 ? 0x7fffffff : (1 << (highBit + 1)) - 1;
    // xor num with mask to get the complement
    return num ^ mask;
}

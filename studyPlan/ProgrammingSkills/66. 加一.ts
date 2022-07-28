function plusOne(digits: number[]): number[] {
    let n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    //能到这一步，说明数组中的所有数字都是9，那么我们就需要在数组的前面加一个1
    digits.unshift(1);

    return digits;
}

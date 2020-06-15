let myPow = (num, power) => {
    if (power < 0) return 1 / (num * myPow(num, -(power + 1)))
    if (power === 0) return 1
    if (power === 1) return num
    return power % 2 === 1 ? num * myPow(num, power - 1) : myPow(num * num, power / 2);
}

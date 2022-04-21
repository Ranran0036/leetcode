/**
 * @param {number} n
 * @return {number}
 */

//正常的解法
let countNumbersWithUniqueDigits = function(n) {
    if(n === 0){
        return 1;
    }

    if(n === 1){
        return 10;
    }

    let res = 10;

    for(let i = 2; i <= n; i++){
        res += 9 * calculatePermutation(9, i - 1);
    }

    return res;
};

const calculatePermutation = (n , m) => {
    return calculateFactorial(n) / calculateFactorial(n - m);
}

const calculateFactorial = (n) => {
    if(n === 0){
        return 1;
    }

    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}

//偷懒的写法
/* const countNumbersWithUniqueDigits = (n) => {
    switch (n) {
        case 0:
            return 1;
            break;
        case 1:
            return 10;
            break;
        case 2:
            return 91;
            break;
        case 3:
            return 739;
            break;
        case 4:
            return 5275;
            break;
        case 5:
            return 32491;
            break;
        case 6:
            return 168571;
            break;
        case 7:
            return 712891;
            break;
        case 8:
            return 2345851;
            break;
        default:
            break;
    }
} */

console.log(countNumbersWithUniqueDigits(3));


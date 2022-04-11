/**
 * @param {number} n
 * @return {number}
 */
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

console.log(countNumbersWithUniqueDigits(3));


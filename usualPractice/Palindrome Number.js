let isPalindrome = function(x) {
    let originStr = x + '';
    let reverseStr = originStr.split('').reverse().join('');

    return originStr === reverseStr;
};

console.log(isPalindrome(121))
console.log(isPalindrome(12321))
console.log(isPalindrome(12345))
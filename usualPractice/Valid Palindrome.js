let isPalindrome = function(s) {
    if(s === ''){
        return true;
    }

    let inputStr = s.replace(/[^a-zA-Z0-9]/g,'');
    inputStr = inputStr.toLowerCase();

    let reverseStr = inputStr.split('').reverse().join('');

    return reverseStr === inputStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
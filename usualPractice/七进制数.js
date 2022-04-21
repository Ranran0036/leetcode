/**
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = function(num) {
    let ans = [] , flag = false;

    if(num < 0){
        flag = true;
        num = Math.abs(num);
    }

    while(num > 0){
        ans.unshift(num % 7);
        num = parseInt(num / 7);
    }

    return flag ? '-' + ans.join('') : ans.join('');
};

console.log(convertToBase7(100));
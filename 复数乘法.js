/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let complexNumberMultiply = function(num1, num2) {
    let complex1 = [num1.split('+')[0] , num1.split('+')[1].split('i')[0]];
    let complex2 = [num2.split('+')[0] , num2.split('+')[1].split('i')[0]];

    return ''+ (complex1[0] * complex2[0] - complex1[1] * complex2[1]) + '+' + (complex1[0] * complex2[1] + complex1[1] * complex2[0]) + 'i';
};
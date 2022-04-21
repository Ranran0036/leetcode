let reverseInt = function (x){
    let str = x + '';
    let sign = '';

    if(str[0] === '+' || str[0] === '-'){
        sign = str.slice(0,1);
        str = str.slice(1);
    }

    let arr = [];

    for(let i = 0; i < str.length ; i++){
        arr.push(str[str.length-1-i]);
    }

    str = arr.join('');
    let result = parseInt(sign+str);

    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)){
        return 0;
    }

    return result;
}

console.log(reverseInt(-258))
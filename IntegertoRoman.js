let intToRoman = function(num) {
    let intArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romanArr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    let result = '';

    let numCopy = num;

    if(numCopy < 1 || numCopy > 3999){
        return 'Make sure the num is within the range from 1 to 3999!';
    }

    for(let i = 0; i < romanArr.length; i++){
        let y = parseInt(numCopy / intArr[i]);
        numCopy = numCopy - y * intArr[i];

        for(let m = 0; m < y ; m++){
            result += romanArr[i];
        }
    }

    return result
};

console.log(intToRoman(1994))
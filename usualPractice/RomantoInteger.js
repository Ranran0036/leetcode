let romanToInt = function(s) {
    let intRomanMap = new Map([
        ['I',1],
        ['V',5],
        ['X',10],
        ['L',50],
        ['C',100],
        ['D',500],
        ['M',1000]
    ]);

    let res = 0;
    let lastAdd = 0;

    for(let i = 0; i < s.length; i++){

        res += intRomanMap.get(s[i]);

        if(lastAdd < intRomanMap.get(s[i])){
            res = res - lastAdd * 2;
        }

        lastAdd = intRomanMap.get(s[i]);

    }

    return res;
    
};

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('CCII'));
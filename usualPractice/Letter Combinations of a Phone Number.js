let letterCombinations = function(digits) {
    const NUM2LETTER = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz',
    }

    let res = [];

    for(let num of digits){

        let letter = NUM2LETTER[num];

        if(res.length > 0){

            let tmp = [];
            for (let i = 0; i < res.length; i++) {
                for (let j = 1; j < letter.length; j++) {
                    tmp.push(res[i] + letter[j])
                }
                res[i] += letter[0];
            }
            res.push(...tmp)
        } else {
            res.push(...letter)
        }

    }

    return res;
};

console.log(letterCombinations('23'))
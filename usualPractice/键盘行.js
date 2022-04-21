/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function(words) {
    const KEYS = ['qwertyuiop' , 'asdfghjkl' , 'zxcvbnm'];

    let result = [];

    for(let word of words){
        let wordL = word.toLowerCase();

        let target = '';

        for(let key of KEYS){
            if(key.includes(wordL[0])){
                target = key;
                break;
            }
        }

        let flag = true;

        for(let i = 1; i < wordL.length; i++){
            if(!(target.includes(wordL[i]))){
                flag = false;
                break;
            }
        }

        if(flag){
            result.push(word);
        }
    }

    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))
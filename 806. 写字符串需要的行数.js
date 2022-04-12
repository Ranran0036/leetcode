/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
/* let numberOfLines = function(widths, s) {
    //记录每次换行后剩下的字符宽度
    let restCharLength = 0;
    //记录行数
    let lines = 1;

    let restWidth = 100;

    for(let index = 0; index < s.length; index++){
        let charWidth = widths[s[index].charCodeAt() - 97];
        if(restWidth - charWidth < 0){
            lines++;
            restWidth = 100 - charWidth;
            restCharLength = charWidth;
        }else if(restWidth - charWidth == 0){
            if(s[index+1]){
                lines++;
                restWidth = 100;
                restCharLength = 0;
            }else{
                restCharLength += charWidth;
                break;
            }
        }else{
            restWidth -= charWidth;
            restCharLength += charWidth;
        }
    }

    return [lines , restCharLength];
}; */
const MAX_WIDTH = 100;
let numberOfLines = function (widths, s) {
    let lines = 1;

    let width = 0;

    for (let i = 0; i < s.length; i++) {
        const need = widths[s.charCodeAt(i) - 97];
        width += need;
        if (width > MAX_WIDTH) {
            lines++;
            width = need;
        }
    }

    return [lines, width];
};

console.log(
    numberOfLines(
        [
            10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 10, 10, 10, 10, 10,
        ],
        "abcdefghijklmnopqrstuvwxyz"
    )
);

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
    let firstListIndex = 0;
    let secondListIndex = 0;
    let result = [];
    while (
        firstListIndex < firstList.length &&
        secondListIndex < secondList.length
    ) {
        let firstListStart = firstList[firstListIndex][0];
        let firstListEnd = firstList[firstListIndex][1];
        let secondListStart = secondList[secondListIndex][0];
        let secondListEnd = secondList[secondListIndex][1];
        if (
            firstListStart <= secondListEnd &&
            secondListStart <= firstListEnd
        ) {
            let start = Math.max(firstListStart, secondListStart);
            let end = Math.min(firstListEnd, secondListEnd);
            result.push([start, end]);
        }
        if (firstListEnd < secondListEnd) {
            firstListIndex++;
        } else {
            secondListIndex++;
        }
    }
    return result;
};

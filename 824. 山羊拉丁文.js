/**
 * @param {string} sentence
 * @return {string}
 */
const toGoatLatin = function (sentence) {
    sentence = sentence.split(" ");

    const vowelMap = new Set([
        "a",
        "e",
        "i",
        "o",
        "u",
        "A",
        "E",
        "I",
        "O",
        "U",
    ]);

    for (let i = 0; i < sentence.length; i++) {
        let firstChar = sentence[i][0];
        if (vowelMap.has(firstChar)) {
            sentence[i] = sentence[i] + "ma";
        } else {
            sentence[i] = sentence[i].slice(1) + firstChar + "ma";
        }

        sentence[i] = sentence[i] + addA(i + 1);
    }

    return sentence.join(" ");
};

const addA = function (index) {
    let ans = "";
    for (let i = 0; i < index; i++) {
        ans += "a";
    }

    return ans;
};

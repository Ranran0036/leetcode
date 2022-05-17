/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words) return [];
    let res = [];
    let len = words.length;
    let wordLen = words[0].length;
    let wordMap = {};
    for (let i = 0; i < len; i++) {
        if (wordMap[words[i]]) {
        wordMap[words[i]]++;
        } else {
        wordMap[words[i]] = 1;
        }
    }
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let count = 0;
        let tempMap = {};
        while (right + wordLen <= s.length) {
        let word = s.substring(right, right + wordLen);
        if (wordMap[word]) {
            if (tempMap[word]) {
            tempMap[word]++;
            } else {
            tempMap[word] = 1;
            }
            count++;
            right += wordLen;
            while (count > len) {
            let leftWord = s.substring(left, left + wordLen);
            if (tempMap[leftWord]) {
                tempMap[leftWord]--;
                if (tempMap[leftWord] === 0) {
                delete tempMap[leftWord];
                }
            }
            count--;
            left += wordLen;
            }
            if (count === len) {
            res.push(left);
            }
        } else {
            left = right;
            right = left;
            count = 0;
            tempMap = {};
        }
        }
    }
    return res;
};
// @lc code=end


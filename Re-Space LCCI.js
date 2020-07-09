const respace = (dictionary, sentence) => {
    const len = sentence.length;
    const dp = new Array(len + 1);
    dp[0] = 0;
    for (let i = 1; i <= len; i++) {
        dp[i] = dp[i - 1] + 1;
        for (const word of dictionary) { // 遍历字典里的单词
            if (sentence.substring(i - word.length, i) == word) { // 截取字典词的长度与字典词比较
                dp[i] = Math.min(dp[i], dp[i - word.length]);
            }
        }
    }
    return dp[len];
};

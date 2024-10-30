class Solution:
    def getSmallestString(self, s: str) -> str:
        for i in range(1, len(s)):
            # 如果当前字符和前一个字符的奇偶性相同，且当前字符比前一个字符小，则交换两个字符，交换后直接退出
            if int(s[i]) & 1 == int(s[i - 1]) & 1 and s[i] < s[i - 1]:
                return s[: i - 1] + s[i] + s[i - 1] + s[i + 1 :]
        return s

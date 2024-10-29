from typing import List


class Solution:
    def validStrings(self, n: int) -> List[str]:
        res = []

        for i in range(1 << n):
            if i & (i >> 1):
                continue
            res.append(bin(i ^ ((1 << n) - 1))[2:].zfill(n))

        return res


if __name__ == "__main__":
    print(Solution().validStrings(2))
    print(Solution().validStrings(3))
    print(Solution().validStrings(4))

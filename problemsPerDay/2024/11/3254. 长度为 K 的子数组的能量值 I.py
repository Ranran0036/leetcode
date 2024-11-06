from typing import List


class Solution:
    def resultsArray(self, nums: List[int], k: int) -> List[int]:
        lenth = len(nums)
        ans: List[int] = [-1] * (lenth - k + 1)
        cnt = 0

        for i in range(lenth):
            cnt = 1 if i == 0 or nums[i] - nums[i - 1] != 1 else cnt + 1

            if cnt >= k:
                ans[i - k + 1] = nums[i]

        return ans

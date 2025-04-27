"""
题目描述：
给你一个整数数组 nums ，请你返回长度为 3 的 子数组 的数量，满足第一个数和第三个数的和恰好为第二个数的一半。

子数组 指的是一个数组中连续 非空 的元素序列。
"""

from typing import List


class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        n = len(nums)
        ans = 0
        for i in range(n - 2):
            if nums[i + 1] % 2 == 0 and nums[i] + nums[i + 2] == nums[i + 1] // 2:
                ans += 1
        return ans

from typing import List


class SegNode:
    def __init__(self) -> None:
        self.v00 = self.v01 = self.v10 = self.v11 = 0

    def set_value(self, v) -> None:
        self.v00 = self.v01 = self.v10 = 0
        self.v11 = max(0, v)

    def best(self) -> int:
        return self.v11


class SegTree:
    """
    线段树类，用于处理不包含相邻元素的子序列的最大和问题。
    Attributes:
        n (int): 数组的长度。
        tree (List[SegNode]): 线段树节点数组。
    """

    def __init__(self, n: int) -> None:
        """
        初始化线段树。
        Args:
            n (int): 数组的长度。
        """
        self.n = n
        self.tree = [SegNode() for _ in range(n * 4 + 1)]

    def init(self, nums: List[int]) -> None:
        """
        使用给定的数组初始化线段树。
        Args:
            nums (List[int]): 用于初始化线段树的数组。
        """

        def internal_init(x: int, l: int, r: int) -> None:
            """
            递归初始化线段树的内部函数。
            Args:
                x (int): 当前节点的索引。
                l (int): 当前区间的左边界。
                r (int): 当前区间的右边界。
            """
            if l == r:
                self.tree[x].set_value(nums[l - 1])
                return
            mid = (l + r) // 2
            internal_init(x * 2, l, mid)
            internal_init(x * 2 + 1, mid + 1, r)
            self.push_up(x)

        internal_init(1, 1, self.n)

    def update(self, x: int, v: int) -> None:
        """
        更新线段树中指定位置的值。
        Args:
            x (int): 要更新的位置（0索引）。
            v (int): 新的值。
        """

        def internal_update(x: int, l: int, r: int, pos: int, v: int) -> None:
            """
            递归更新线段树的内部函数。
            Args:
                x (int): 当前节点的索引。
                l (int): 当前区间的左边界。
                r (int): 当前区间的右边界。
                pos (int): 要更新的位置（1索引）。
                v (int): 新的值。
            """
            if l > pos or r < pos:
                return
            if l == r:
                self.tree[x].set_value(v)
                return
            mid = (l + r) // 2
            internal_update(x * 2, l, mid, pos, v)
            internal_update(x * 2 + 1, mid + 1, r, pos, v)
            self.push_up(x)

        internal_update(1, 1, self.n, x + 1, v)

    def query(self) -> int:
        """
        查询线段树的根节点，获取不包含相邻元素的子序列的最大和。
        Returns:
            int: 不包含相邻元素的子序列的最大和。
        """
        return self.tree[1].best()

    def push_up(self, x: int) -> None:
        """
        更新当前节点的值，基于其子节点的值。
        Args:
            x (int): 当前节点的索引。
        """
        tree_ = self.tree

        l, r = x * 2, x * 2 + 1

        tree_[x].v00 = max(tree_[l].v00 + tree_[r].v10, tree_[l].v01 + tree_[r].v00)
        tree_[x].v01 = max(tree_[l].v00 + tree_[r].v11, tree_[l].v01 + tree_[r].v01)
        tree_[x].v10 = max(tree_[l].v10 + tree_[r].v10, tree_[l].v11 + tree_[r].v00)
        tree_[x].v11 = max(tree_[l].v10 + tree_[r].v11, tree_[l].v11 + tree_[r].v01)


class Solution:
    def maximumSumSubsequence(self, nums: List[int], queries: List[List[int]]) -> int:
        tree = SegTree(len(nums))
        tree.init(nums)

        ans = 0
        for x, v in queries:
            tree.update(x, v)
            ans += tree.query()

        return ans % (10**9 + 7)

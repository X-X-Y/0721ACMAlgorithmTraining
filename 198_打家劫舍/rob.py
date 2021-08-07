# import numpy as np

class Solution:
    def rob(self, nums: List[int]) -> int:
        # 只与前面一个状态有关
        # n = len(nums)
        # dp = np.zeros((n, 2))
        # dp[0][1] = nums[0]
        # for i in range(1, n):
        #     dp[i][0] = max(dp[i-1][0], dp[i-1][1])
        #     dp[i][1] = dp[i-1][0] + nums[i]

        # return int(max(dp[-1][0], dp[-1][1]))

        # 与前面两个状态有关
        n = len(nums)
        if n == 1:
            return nums[0]
        a, b = nums[0], max(nums[0], nums[1])
        for i in range(2, n):
            a, b = b, max(b, a + nums[i])
        return b


# if __name__ == "__main__":
#     solu = Solution()
#     nums = [0]
#     print(solu.rob(nums))
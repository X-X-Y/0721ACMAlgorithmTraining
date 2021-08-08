class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        dp1 = [0, nums[1]]
        for i in range(2, n):
            dp1.append(max(dp1[i-1], dp1[i-2] + nums[i]))

        dp2 = [nums[0], nums[0]]
        for i in range(2, n-1):
            dp2.append(max(dp2[i-1], dp2[i-2] + nums[i]))
        dp2.append(dp2[-1])

        return max(dp1[-1], dp2[-1])


# if __name__ == '__main__':
#     solu = Solution()
#     nums = [1,2,1,1]
#     print(solu.rob(nums))
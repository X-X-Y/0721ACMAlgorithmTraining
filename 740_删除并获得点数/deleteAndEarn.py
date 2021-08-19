class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        hs = [0] * (max(nums) + 1)
        for i in nums:
            hs[i] = hs[i] + 1

        first, second = hs[0], max(hs[0], hs[1])
        n = len(hs)
        for i in range(2, n):
            first, second = second, max(second, first + i*hs[i])

        return second


# if __name__ == '__main__':
#     solu = Solution()
#     nums = [2,2,3,3,3,4]
#     print(solu.deleteAndEarn(nums))
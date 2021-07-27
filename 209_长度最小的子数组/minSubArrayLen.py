class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        # 二分法
        # if not nums:
        #     return 0

        # n = len(nums)
        # sums = [0]
        # for i in range(n):
        #     sums.append(sums[-1] + nums[i])

        # # 如果比较位置是n+1，则表示数组i之后所有和都没有target大
        # ans = n + 1
        # for i in range(n):
        #     new_target = target + sums[i]
        #     bound = bisect.bisect_left(sums, new_target)
        #     if bound != n+1:
        #         ans = min(ans, bound - i)

        # return 0 if ans == n+1 else ans

        # 滑动窗
        if not nums:
            return 0

        n = len(nums)
        start, end = 0, 0
        total = 0
        ans = n + 1
        while(end < n):
            total += nums[end]
            while(total >= target):
                ans = min(ans, end-start+1)
                total -= nums[start]
                start += 1
            end += 1
        return 0 if ans == n+1 else ans


if __name__ == '__main__':
    target = 11
    nums = [1,1,1,1,1,1,1,1]
    solu = Solution()
    print(solu.minSubArrayLen(target, nums))
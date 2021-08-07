class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        dp = [0] * n
        for i in range(2, n):
            dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])

        return min(dp[-1] + cost[-1], dp[-2] + cost[-2])


# if __name__ == '__main__':
#     solu = Solution()
#     cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
#     print(solu.minCostClimbingStairs(cost))
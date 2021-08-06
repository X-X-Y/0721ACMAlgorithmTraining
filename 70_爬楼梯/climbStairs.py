class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n

        dp = [0, 1, 2]
        for i in range(3, n+1):
            dp[0] = dp[2] + dp[1]
            dp[2], dp[1] = dp[0], dp[2]
        return dp[0]


if __name__ == '__main__':
    solu = Solution()
    n = 6
    print(solu.climbStairs(n))
class Solution:
    def fib(self, n: int) -> int:
        # 递归
        # if n < 2:
        #     return n
        # else:
        #     return self.fib(n-1) + self.fib(n-2)


        # 动态规划
        if n < 2:
            return n
        else:
            p, q, r = 0, 0, 1
            for i in range(2, n+1):
                p, q = q, r
                r = p + q
            return r

# if __name__ == '__main__':
#     solu = Solution()
#     n = 5
#     print(solu.fib(n))
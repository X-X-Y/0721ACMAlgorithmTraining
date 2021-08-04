class Solution:
    def tribonacci(self, n: int) -> int:
        if n < 2:
            return n
        elif n == 2:
            return 1

        a, b, c, r = 0, 0, 1, 1
        for _ in range(3, n+1):
            a, b, c = b, c, r
            r = a + b + c
        return r


if __name__ == '__main__':
    solu = Solution()
    n = 25
    print(solu.tribonacci(n))
class Solution:
    def mySqrt(self, x: int) -> int:
        left = 1
        right = x
        while left <= right:
            mid = left + (right - left) // 2
            if mid*mid == x:
                return mid
            elif mid*mid < x:
                left = mid + 1
            else:
                right = mid - 1
        return left -1


if __name__ == '__main__':
    x = 10
    solu = Solution()
    print(solu.mySqrt(x))
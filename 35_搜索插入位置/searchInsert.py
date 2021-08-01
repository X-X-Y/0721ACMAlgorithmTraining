class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        length = len(nums)
        left = 0
        right = length - 1
        while right - left >= 0:  # 这样mid是可以取到两端指针的
            mid = (right + left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return left
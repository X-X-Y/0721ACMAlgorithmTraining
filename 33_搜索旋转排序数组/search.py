class Solution:
    def search(self, nums: List[int], target: int) -> int:
        length = len(nums)
        # 先二分找出旋转的那个下标
        if nums[0] > nums[-1]:
            left, right = 0, length - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] >= nums[0]:
                    left = mid + 1
                else:
                    right = mid - 1
            start = left
        else:
            start = 0

        # 再根据第一个值大小判断在哪部分进行二分查找
        if target >= nums[0] and start > 0:
            left1, right1 = 0, start-1
            while left1 <= right1:
                mid1 = left1 + (right1 - left1)
                if nums[mid1] == target:
                    return mid1
                elif nums[mid1] > target:
                    right1 = mid1 - 1
                else:
                    left1 = mid1 + 1
            return -1
        else:
            left2, right2 = start, length - 1
            while left2 <= right2:
                mid2 = left2 + (right2 - left2) // 2
                if nums[mid2] == target:
                    return mid2
                elif nums[mid2] > target:
                    right2 = mid2 - 1
                else:
                    left2 = mid2 + 1
            return -1


if __name__ == '__main__':
    solu = Solution()
    nums = [5, 1, 3]
    target = 5
    print(solu.search(nums, target))

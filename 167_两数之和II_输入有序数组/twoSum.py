class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        # 双指针
        # lenght = len(numbers)
        # left, right = 1, lenght
        # while left < right:
        #     if numbers[left-1] + numbers[right-1] == target:
        #         return [left, right]
        #     elif numbers[left-1] + numbers[right-1] > target:
        #         right -= 1
        #     else:
        #         left += 1

        # 二分
        lenght = len(numbers)
        for i in range(lenght):
            left, right = i+1, lenght - 1
            while left <= right:
                mid = left + (right - left) // 2
                if numbers[i] + numbers[mid] == target:
                    return [i+1, mid+1]
                elif numbers[i] + numbers[mid] > target:
                    right = mid - 1
                else:
                    left = mid + 1
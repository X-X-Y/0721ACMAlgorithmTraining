class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # --------直接遍历 O(n^2)--------
        # n = len(nums)
        # for i in range(n):
        #     for j in range(i+1, n):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]

        # --------哈希表 O(n)--------
        hashmap = {}
        for idx, val in enumerate(nums):
            if hashmap.get(target - val) is not None:
                return [idx, hashmap.get(target - val)]
            hashmap[val] = idx


if __name__ == '__main__':
    solu = Solution()
    nums = [3,2,4]
    target = 6
    print(solu.twoSum(nums, target))
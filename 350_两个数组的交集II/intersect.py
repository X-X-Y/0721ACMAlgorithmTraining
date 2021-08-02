class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # 双指针
        nums1.sort()
        nums2.sort()
        px1, px2 = 0, 0
        len1,len2 = len(nums1), len(nums2)
        ans = []
        while px1 < len1 and px2 < len2:
            if nums1[px1] == nums2[px2]:
                ans.append(nums1[px1])
                px1 += 1
                px2 += 1
            elif nums1[px1] > nums2[px2]:
                px2 += 1
            else:
                px1 += 1
        return ans
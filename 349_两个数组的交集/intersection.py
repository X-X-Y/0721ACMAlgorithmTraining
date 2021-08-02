class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # 哈希
        # hx_nums1, hx_nums2 = {}, {}
        # for x in nums1:
        #     if not hx_nums1.get(x):
        #         hx_nums1[x] = 1
        
        # ans = set()
        # for x in nums2:
        #     if hx_nums1.get(x):
        #         ans.add(x)

        # return list(ans)

        # 双指针
        nums1.sort()
        nums2.sort()
        px1, px2 = 0, 0
        len1, len2 = len(nums1), len(nums2)
        ans = set()
        while px1 < len1 and px2 < len2:
            if nums1[px1] == nums2[px2]:
                ans.add(nums1[px1])
                px1 += 1
                px2 += 1
            elif nums1[px1] > nums2[px2]:
                px2 += 1
            else:
                px1 += 1
        return list(ans)
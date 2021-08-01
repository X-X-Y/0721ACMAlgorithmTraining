class Solution:
    def hIndex(self, citations: List[int]) -> int:
        # 二分法
        n = len(citations)
        left = 0
        right = n - 1
        while left <= right:
            mid  = left + (right-left)//2
            if citations[mid] >= n-mid:
                right = mid - 1
            else:
                left = mid + 1
        return n - left

        # 强行遍历
        # length = len(citations)
        # hs = []
        # count = 0
        # h_candidate = length-count
        # while(h_candidate>0):
        #     if all(val >= h_candidate for val in citations[count:length]):
        #         hs.append(h_candidate)
        #     count += 1
        #     h_candidate = length-count
        # return max(hs) if hs else 0


if __name__ == '__main__':
    solu = Solution()
    citations = [0]
    print(solu.hIndex(citations))
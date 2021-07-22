class Solution(object):
    def eraseOverlapIntervals(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: int
        """
        if not intervals:
            return 0

        intervals.sort(key=lambda x: x[1])
        length = len(intervals)
        right = intervals[0]
        count = 1

        for i in range(1, length):
            if intervals[i][0] >= right[1]:
                right = intervals[i]
                count += 1

        return length-count


if __name__ == '__main__':
    solu = Solution()
    test_set = [[1, 2], [2, 3], [3, 4], [1, 3]]
    print(solu.eraseOverlapIntervals(test_set))
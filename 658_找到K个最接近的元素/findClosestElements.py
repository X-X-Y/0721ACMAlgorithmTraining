class Solution(object):
    def findClosestElements(self, arr, k, x):
        """
        :type arr: List[int]
        :type k: int
        :type x: int
        :rtype: List[int]
        """
        arr_tmp = arr
        while(len(arr_tmp) > k):
            if abs(arr_tmp[0]-x) > abs(arr_tmp[-1]-x):
                del arr_tmp[0]
            elif abs(arr_tmp[0]-x) < abs(arr_tmp[-1]-x):
                del arr_tmp[-1]
            else:
                if arr_tmp[0] > arr_tmp[-1]:
                    del arr_tmp[0]
                else:
                    del arr_tmp[-1]
        return arr_tmp

if __name__ == '__main__':
    solu = Solution()
    arr = [1,2,3,4,5,6,9,23,45]
    k = 4
    x = 10
    print(solu.findClosestElements(arr, k, x))
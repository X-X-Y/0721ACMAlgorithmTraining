class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # ---------字符串排序 O(NlogN)---------
        # return sorted(s) == sorted(t)

        # ---------哈希表 O(N)---------
        hash_s = {}
        hash_t = {}
        for i in s:
            hash_s[i] = hash_s.get(i, 0) + 1
        for j in t:
            hash_t[j] = hash_t.get(j, 0) + 1
        return hash_s == hash_t


if __name__ == '__main__':
    s = "rat"
    t = "car"
    solu = Solution()
    print(solu.isAnagram(s, t))
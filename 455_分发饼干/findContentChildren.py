class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        g_len = len(g)
        s_len = len(s)
        count = 0
        g_id, s_id = 0, 0
        while s_id < s_len and g_id < g_len:
            if g[g_id] <= s[s_id]:
                g_id += 1
                s_id += 1
                count += 1
            else:
                s_id += 1
        return count


if __name__ == '__main__':
    solu = Solution()
    g = [250,490,328,149,495,325,314,360,333,418,430,458]
    s = [376,71,228,110,215,410,363,135,508,268,494,288,24,362,20,5,247,118,152,393]
    print(solu.findContentChildren(g, s))
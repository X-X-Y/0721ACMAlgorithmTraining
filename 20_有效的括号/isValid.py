class Solution:
    def isValid(self, s: str) -> bool:
        val_dict = {')': '(', '}': '{', ']': '['}
        stack = []
        for i in s:
            if i not in val_dict:
                stack.append(i)
            # 这两个判断不能反过来
            elif stack == [] or stack.pop() != val_dict[i]:
                return False
        return not stack


if __name__ == '__main__':
    s = "[]"
    solu = Solution()
    print(solu.isValid(s))
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        # ---------递归---------
        # res = []
        # def iterTree(root):
        #     if not root:
        #         return
        #     iterTree(root.left)
        #     res.append(root.val)
        #     iterTree(root.right)
        # iterTree(root)
        # return res

        # ---------迭代---------
        res, stack = [], []
        while root or stack:
            if root:
                stack.append(root)
                root = root.left
            else:
                root = stack.pop()
                res.append(root.val)
                root = root.right
        return res
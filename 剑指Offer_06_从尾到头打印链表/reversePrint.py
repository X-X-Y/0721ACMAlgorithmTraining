# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reversePrint(self, head: ListNode) -> List[int]:
        ans = []
        # 为什么不是head.next，头结点不是没有值吗
        cur = head
        while(cur):
            ans.append(cur.val)
            cur = cur.next
        return ans[::-1]
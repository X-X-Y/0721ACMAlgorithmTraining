# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, head: ListNode, val: int) -> ListNode:
        if head.val == val:
            return head.next

        pro, cur = head, head.next
        while cur.val != val:
            pro = cur
            cur = cur.next
        pro.next = cur.next
        return head
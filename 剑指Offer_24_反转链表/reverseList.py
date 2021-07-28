# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # 定义一个缓存列表
        # if head == None:  # 空表节点是None
        #     return head

        # stack = []
        # cur = head
        # while cur:
        #     stack.append(cur)
        #     cur = cur.next

        # for i in range(len(stack)-1):
        #     stack[-i-1].next = stack[-i-2]
        # stack[0].next = None
        # return stack[-1]

        # 迭代
        pro, cur = None, head
        while cur:
            tmp = cur.next
            cur.next = pro
            pro = cur
            cur = tmp
        return pro
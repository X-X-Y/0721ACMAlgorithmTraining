class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.in_stack = []
        self.out_stack = []


    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.in_stack.append(x)


    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        while(len(self.in_stack) > 1):
            self.out_stack.append(self.in_stack.pop())
        fro_val = self.in_stack.pop()
        while(len(self.out_stack)):
            self.in_stack.append(self.out_stack.pop())
        return fro_val


    def peek(self) -> int:
        """
        Get the front element.
        """
        while(len(self.in_stack) > 1):
            self.out_stack.append(self.in_stack.pop())
        fro_val = self.in_stack[0]
        while(len(self.out_stack)):
            self.in_stack.append(self.out_stack.pop())
        return fro_val


    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return len(self.in_stack) == 0


if __name__ == '__main__':
    qu = MyQueue()
    qu.push(1)
    qu.push(2)
    qu.push(3)
    print(qu.pop())
    print(qu.peek())
    print(qu.empty())


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
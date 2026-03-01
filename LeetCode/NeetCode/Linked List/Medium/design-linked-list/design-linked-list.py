# Question Link: https://leetcode.com/problems/design-linked-list/

class Node(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class MyLinkedList(object):

    def __init__(self):
        self.head = Node()
        self.size = 0

    def get(self, index):
        """
        :type index: int
        :rtype: int
        """
        if index < 0 or index >= self.size:
            return -1
        curr = self.head.next
        for _ in range(index):
            curr = curr.next
        return curr.val
        

    def addAtHead(self, val):
        """
        :type val: int
        :rtype: None
        """

        node = Node(val)
        node.next = self.head.next
        self.head.next = node
        self.size += 1
        

    def addAtTail(self, val):
        """
        :type val: int
        :rtype: None
        """

        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = Node(val)
        self.size += 1
        

    def addAtIndex(self, index, val):
        """
        :type index: int
        :type val: int
        :rtype: None
        """

        if index < 0 or index > self.size:
            return
        curr = self.head
        for _ in range(index):
            curr = curr.next
        node = Node(val)
        node.next = curr.next
        curr.next = node
        self.size += 1
        

    def deleteAtIndex(self, index):
        """
        :type index: int
        :rtype: None
        """

        if index < 0 or index >= self.size:
            return
        curr = self.head
        for _ in range(index):
            curr = curr.next
        curr.next = curr.next.next
        self.size -= 1
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)

# Question Link: https://leetcode.com/problems/contains-duplicate/

class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        # we can create a dictionary and using a loop we can store a value in it if the value doesn't already exist in the map
        # if it already exists, it means that the value has appeared atleast twice and we just return true
        numSet = set()

        for num in nums:
            if num in numSet:
                return True

            numSet.add(num)

        return False

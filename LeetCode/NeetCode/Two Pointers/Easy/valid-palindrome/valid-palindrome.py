# Question Link: https://leetcode.com/problems/valid-palindrome/

import re

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        new_str = re.sub(r'[^A-Za-z0-9]', '', s)
        new_str = new_str.lower()

        leftPtr = 0
        rightPtr = len(new_str) - 1

        while(leftPtr <= rightPtr):
            if(new_str[leftPtr] != new_str[rightPtr]):
                return False

            leftPtr += 1
            rightPtr -= 1
            

        return True
        
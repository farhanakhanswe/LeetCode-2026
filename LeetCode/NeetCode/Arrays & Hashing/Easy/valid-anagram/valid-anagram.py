# Question Link: https://leetcode.com/problems/valid-anagram/

class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        # we can use a dictionary to store each char of s and how many times it has appeared
        # we can then run a for loop over t and check if that char exists in s's dictionary
        # if the char exists, we can reduce its value by 1 and if the key exists but its value is 0,
        # it means that char is greater in t than in s which means these two strings are not anagrams

        if len(s) != len(t):
            return False

        sDictionary = {}

        for char in s:
            if char in sDictionary:
               sDictionary[char] += 1
            else:
               sDictionary[char] = 1

        for char in t:
            if  char not in sDictionary or sDictionary.get(char) == 0:
                return False
            else:
                sDictionary[char] -= 1

        return True

        
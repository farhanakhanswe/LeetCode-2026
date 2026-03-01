/**
 * Question Link: https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // replace func will remove non-alphanumeric char
    let leftPtr = 0;
    let rightPtr = str.length - 1;

    while (leftPtr <= rightPtr) {
        if (str[leftPtr] !== str[rightPtr]) {
            return false;
        }
        leftPtr++;
        rightPtr--;
    }

    return true;
};
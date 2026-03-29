/* Question Link: https://leetcode.com/problems/first-matching-character-from-both-ends/description/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function (s) {
    // string s of len n consisting of lowercase english letters
    // return the smallest index i such that s[i] == s[n - i - 1]
    // if no such index exists, return -1

    for (let i = 0; i < s.length; i++) {
        let temp = s.length - i - 1;
        if (s[i] == s[temp]) {
            return i;
        }
    }

    return -1;
};
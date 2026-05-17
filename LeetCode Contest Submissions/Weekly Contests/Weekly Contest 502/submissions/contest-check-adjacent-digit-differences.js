/* Question Link: https://leetcode.com/problems/check-adjacent-digit-differences/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isAdjacentDiffAtMostTwo = function (s) {

    for (let i = 0; i < s.length - 1; i++) {
        let num1 = parseInt(s[i]);
        let num2 = parseInt(s[i + 1]);

        if (!(Math.abs(num1 - num2) <= 2)) return false;
    }

    return true;
};
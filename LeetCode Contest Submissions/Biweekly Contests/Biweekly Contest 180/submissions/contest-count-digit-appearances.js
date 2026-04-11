// Question Link: https://leetcode.com/problems/count-digit-appearances/
// The following solution was submitted during the contest period.

/**
 * Question Link: https://leetcode.com/problems/count-digit-appearances/
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function (nums, digit) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let str = nums[i].toString();
        for (let j = 0; j < str.length; j++) {
            if (parseInt(str[j]) === digit) {
                count++;
            }
        }
    }

    return count;
};
// Question Link: https://leetcode.com/problems/minimum-absolute-difference-between-two-values/
// The following solution was submitted during the contest period.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function (nums) {
    // i am given an int arr nums consisting only of 0, 1, and 2
    // a pair of indices (i, j) is called valid if nums[i] = 1 and nums[j] = 2
    // return the minimm absolute difference between i and j among all valid pairs. 
    // If no valid pair exists, return -1
    // the absolute diff between indices i and j is defined as abs(i - j)

    // thought process
    // so any pair of indices (i, j) is valid if nums[i] == 1 and nums[j] == 2
    // remember i,j are indices and not elements

    // use nested for loop
    // for each el in parent loop, find the valid pairs in inner loop and keep a var minimum that keeps the minimum difference

    // execution
    let min = 1000; // since nums.length <= 100 so there wont be index 1000

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 1) {
            continue;
        }

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === 2) {
                min = Math.min(min, Math.abs(i - j));
            }
        }
    }


    return min === 1000 ? -1 : min;
};
/* Question Link: https://leetcode.com/problems/concatenate-array-with-reverse/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {

    let ans = nums;

    for (let i = nums.length - 1; i >= 0; i--) {
        ans.push(nums[i]);
    }

    return ans;
};
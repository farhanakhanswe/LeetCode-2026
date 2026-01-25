/**
 * Question Link: https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    if (nums.length < 1) return 0;
    if (nums.length === 1) return nums[0];

    // using kadane's algorithm
    currSum = nums[0];
    maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};

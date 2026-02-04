/**
 * Question Link: https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b); // sort the nums arr in ascending order
    let result = []

    // loop doesn't need to run all the way to end of the loop as we need 3 elements for each triplet
    for (let i = 0; i < nums.length - 2; i++) {

        // to avoid duplicates
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        // taking the two pointer approach
        let leftPtr = i + 1;
        let rightPtr = nums.length - 1;

        // using a similar concept to what we used in 2sum problem
        // the goal is that the elemnts in the triplet must add to 0
        // if sum > 0, then we decrease the total sum by decreasing the number from the right since the rightmost numbers are larger than the leftmost
        // if sum < 0, then we increase the total sum by increasing the number from the left since the leftmost numbers are smaller than the rightmost 

        while (leftPtr < rightPtr) {
            let totalSum = nums[i] + nums[leftPtr] + nums[rightPtr];
            if (totalSum > 0) {
                rightPtr -= 1;
            } else if (totalSum < 0) {
                leftPtr += 1;
            } else {
                result.push([nums[i], nums[leftPtr], nums[rightPtr]]);
                leftPtr += 1;

                // to avoid duplicates
                while (nums[leftPtr] == nums[leftPtr - 1] && leftPtr < rightPtr) {
                    leftPtr += 1
                }
            }
        }
    }

    return result;
};
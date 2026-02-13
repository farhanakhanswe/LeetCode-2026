/* Question Link: https://leetcode.com/problems/count-subarrays-with-cost-less-than-or-equal-to-k/ */

// Solution 1: Brute Force Soln. Time Complexity: O(n^3) & Space Complexity: O(n).
// Thought process for the solution is at the end of it

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let stack = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        stack.push(nums[i]);
        let cost = 0; // for one element in subarray, the cost is 0
        count++; // cost = 0 will always be less than or equal to k as 0 <= k <= 1015; so count will increment

        for (let j = i + 1; j < nums.length; j++) {
            stack.push(nums[j]);
            let cost = (Math.max(...stack) - Math.min(...stack)) * stack.length;

            if (cost <= k) {
                count++;
            }
        }

        stack = [];
    }

    return count;

};

/* Thought Process for Solution 1  */

    // im given an integer array nums, and an integer k
    // for any subarray nums[l..r], define its cost as
    // cost = ( max(nums[l..r])) - min(nums[l..r]) ) * (r - l + 1)
    // return an integer denoting the number of subarrays of nums whose cost is less than or 
    // equal to k

    // what does l and r mean here? does l mean leftmost el and r means rightmost element?
    // lets consider that to be the case

    // i need to return an integer denoting the number of subarrays of nums whose cost is less than or equal to k

    // we need to first generate all the sub arrays
    // example 1 is saying for nums = [1, 3, 2] k = 4 the output is 5
    // we consider all subarrays of nums:

    // nums[0..0] -> elements [1]
    // nums[0..1] -> elements [1,3]
    // nums[0..2] -> elements [1,3,2]
    // nums[1..1] -> elements [3]
    // nums[1..2] -> elements [3,2]
    // nums[2..2] -> elements [2]

    // so we are moving left to right when creating subarrays
    // the (r - 1 + 1) is the formulae for calculating the length of the sub array

    // since we are moving from left to right in the array, we can iterate over the array and for each el we can have an inner loop
    // if outer loop starts from i = 0, then inner loop starts from i + 1
    // inside the inner loop, we push the curr el inside a stack
    // we then check if the cost of this stack
    // if the cost is less than or equal to k, we increase the counter

    /*
        nums = [1, 3, 2] k = 4
        when i = 0,
        stack = [1] cost = 0 so count = 1
        inner loop
            j = 1; stack = [1, 3] so cost 2 * 2 = 4, cost <= k so count = 2
            j = 2; stack = [1, 3, 2] so cost 2 * 3 = 6; cost > k so count unchanged
        outside the inner loop, we make the stack empty again and move to the next iteration in the outer loop

    */
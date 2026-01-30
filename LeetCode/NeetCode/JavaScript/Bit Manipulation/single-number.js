/**
 * Question Link: https://leetcode.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */


/* Solution 2 */

var singleNumber = function (nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};


/* Solution 1 */
var singleNumber = function (nums) {
    // non-empty array of integers nums
    // every integer appears twice except for one
    // return the integer that appears only once
    // you must implement a soln with O(n) runtime complexity and use only O(1) extra space

    // unoptimized soln:
    // we use a nested for loop
    // if we find a number in the parent loop that doesn't exist in the child loop then we 
    // will return that number

    for (let i = 0; i < nums.length; i++) {
        let appearsTwice = false;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                appearsTwice = true;
                break;
            }
        }

        if (!appearsTwice) return nums[i];
    }
};
// Question Link: https://leetcode.com/problems/first-unique-even-element/
// The following solution was submitted during the contest period.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && map.get(nums[i]) === 1) {
            return nums[i];
        }
    }

    return -1;
};
/* Question Link: https://leetcode.com/problems/first-element-with-unique-frequency/ */

// Incorrect Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
    // i am given an integer array nums
    // i need to return an integer denoting the first element (scanning from left to right) in nums
    // in numbers whose frequency is unique
    // that is, no other integer appears the same number of times in nums
    // if there is no such element, return -1

    // so the uniqueness is not the number, it is its frequency

    // nums = [20, 10, 30, 30]
    // 20 appears once
    // 10 appears once
    // 30 appears twice

    // we can use a map for each number and value would the the frequency
    // we can then loop for the unique value
    let numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i]) + 1);
        } else {
            numMap.set(nums[i], 1);
        }
    }

    // how do we find a unique value
    // for each key we can check if the value exists as value for any other keys

    for (const [key, value] of numMap) {
        let isUnique = true;
        for (const [key1, value1] of numMap) {
            if (key === key1) continue;

            if (value === value1) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            return key;
        }
    }

    return -1;
};
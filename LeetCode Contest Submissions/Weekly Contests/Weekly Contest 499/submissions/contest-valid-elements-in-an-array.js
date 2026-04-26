/**
 * Question Link: https://leetcode.com/problems/valid-elements-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function (nums) {
    // first and last el are always valid
    // el is considered valid if it satisfies at least on of the following cond
    // it is strictly greater than ever el to its left
    // it is strictly greater than every el to its right

    // return an ar of all  valid elements in the same order as they appear in nums

    // thought process
    // so we start our array from index 1
    // we can use to inner loops one to check if the curr el is strictly greater than every el to its left, if yes we push the el
    // to result array and move to the next iteration
    // if not, then we use another loop to check if the curr el is strictly greater than every el to its right, if yes, we push the el
    // to result array and move to the next iteration
    // if not, the curr el is not valid

    let arr = [];
    arr.push(nums[0]);

    if (nums.length === 1) {
        return arr;
    }


    for (let i = 1; i < nums.length - 1; i++) {
        let isValid = false;

        // checking if strictly greater than every el to its left
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                isValid = true;
            } else {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            // checking if strictly greater than every el to its right
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] > nums[j]) {
                    isValid = true;
                } else {
                    isValid = false;
                    break;
                }
            }
        }


        if (isValid) {
            arr.push(nums[i]);
        }
    }

    arr.push(nums[nums.length - 1]);

    return arr;
};
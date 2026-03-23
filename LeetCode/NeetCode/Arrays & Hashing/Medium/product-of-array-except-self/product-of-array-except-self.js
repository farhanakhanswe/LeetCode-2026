/**
 * Question Link: https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1: Time Complexity is O(n) and Space Complexity is O(n). I'll try to find a soln that'll make the space complexity O(1).
var productExceptSelf = function (nums) {
    // lets say we traverse through the nums in a for loop
    // and we have already kept a track of the product of all the elements before and after the curr el
    // then all we have to do is multiply product of all the elements before curr el with all the elements after the curr el
    // we can keep two maps where the key would be index and value would be product of all el from index 0 to curr index
    // in another map, the key would be index and the value would be the product of all the el from last el to curr index

    let leftMap = new Map();
    let rightMap = new Map();
    let product = 1;
    let output = [];

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
        leftMap.set(i, product);
    }

    product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        product *= nums[i];
        rightMap.set(i, product);
    }

    product = 1;

    for (let i = 0; i < nums.length; i++) {
        if (leftMap.has(i - 1) && rightMap.has(i + 1)) {
            product = leftMap.get(i - 1) * rightMap.get(i + 1);
        } else if (!leftMap.has(i - 1) && rightMap.has(i + 1)) {
            product = rightMap.get(i + 1);
        } else if (leftMap.has(i - 1) && !rightMap.has(i + 1)) {
            product = leftMap.get(i - 1);
        }

        output.push(product);

    }

    return output;


};
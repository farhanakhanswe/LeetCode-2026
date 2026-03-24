/**
 * Question Link: https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
// Solution 2: Time Complexity is O(n) and Space Complexity is O(1) if we do not consider the output array but if we do Space Complexity is O(n)

var productExceptSelf = function (nums) {

    // let's try to solve this with Time Complexity O(n) and Space Complexity O(1)
    // we can divide the soln in two parts: prefix and suffix
    // and create an array called "answer" of the same size as nums and initialize the values of each el as 1 to help with multiplication
    // in the prefix part, we use a for loop to keep track of the product of all elements to the left of the current element and add the product in the answer array at the same index as the curr el index 
    // now the answer array contains product of the all the left elements before every element in nums

    // in the suffix part, we traverse through the nums in reverse order using for loop
    // the ith index in answer[i] refers to the ith index in nums[i]
    // so we will multiply the product of all elements to the right of the current element in nums and
    // multiply that product with the ith indexed element in answer array 

    // through this process answer[i] = product of all elements to the left of nums[i] * product of all elements to the right of nums[i]

    let answer = new Array(nums.length).fill(1);
    let output = 1;

    // prefix part

    for (let i = 0; i < nums.length; i++) {
        answer[i] = output;
        output *= nums[i];
    }

    // suffix part
    output = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= output;
        output *= nums[i];
    }

    return answer;
};


// Solution 1: Time Complexity is O(n) and Space Complexity is O(n)

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
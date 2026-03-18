/**
 * Question Link: https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // Understanding the problem //

    // i have an integer array nums
    // integer val
    // i have to remove all occurrences of val in nums in place
    // the order of the elements may be changed
    // i have to return the number of elements in nums which are not equal to val
    // consider the number of elements in nums which are not equal to val be k, to get accepted, i need to do the following
    // (1) change the array nums such that the first k elements of nums contain the elements which are not equal to val
    // the remaining elements of nums are not important as well as the size of nums
    // i have to return k

    // Planning //

    // We have to rearrange the elements in the array in such a way that the first k elements of nums
    // contain the elements which are not equal to val
    // k is an integer. By first k elements of nums, we mean let's say first 5 elements of nums

    // Let's say the total number of non-val numbers in nums is 3 so we have to rearrange the array in such a way that 
    // from index 0 till the (k - 1), all the numbers are not val.
    // It doesn't matter what comes after k elements even if the next numbers contain numbers that equal to val
    // Example: [1,2,3,4,4,3] and val = 3
    // After rearrangement: [1,2,4,4,4,3] and k = 4 
    // So, we are only concerned with the first 4 elements in nums
    // It doesn't matter that 3 appeared after k elements as the question isn't bothered by that

    // Execution

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
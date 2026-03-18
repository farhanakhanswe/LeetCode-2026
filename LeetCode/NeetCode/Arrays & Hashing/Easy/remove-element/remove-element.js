/**
 * Question Link: https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // understanding the problem //

    // i have an integer array nums
    // integer val
    // i have to remove all occurrences of val in nums in place
    // the order of the elements may be changed
    // i have to return the number of eleents in nums which are not equal to val
    // consider the number of elements in nums which are not equal to val be k, to get accepted, i need to do the following
    // (1) change the array nums such that the first k elements of nums contain the elements which are not equal to val
    // the remaning elements of nums are not important as well as the size of nums
    // i have to return k

    // planning //

    // okay so we wont remove the non-val numbers, we have to rearrange the elements in such a way that the first k elements of nums
    // contain the elements which are not equal to val

    // lets say the total number of non-val numbers in nums is 3 so we have to rearrange the array in such a way that 
    // from index 0 till the k, all the numbers are not val. 

    // execution

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};
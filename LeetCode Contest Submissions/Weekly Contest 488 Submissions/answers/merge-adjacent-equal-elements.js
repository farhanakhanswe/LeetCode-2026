/* Soln in progress */

/* Question Link: https://leetcode.com/problems/merge-adjacent-equal-elements/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function (nums) {
    // im given an integer array nums
    // i MUST repeatedly apply the following merge operation until no more changes can be made
    // if any two adjacent elements are equal, choose the leftmost such adjacent pair in the current array
    // and replace them with a single element equal to their sum
    // after each merge operation, the array size decreases by 1.  
    // repeat the process on the updated array until no more changes can be made
    // return the final array after all possible merge operations

    // thought process:
    // we can traverse through an array and check if the curr el is the same as the next element
    // if the curr el is not the same as the next element then we can push the curr el in a stack
    // if the curr el is the same as the the next element then we can add the number with itself and push that value into a stack
    // but if the sum of the these two elements is the same as the element next in the array, we have to now pop off that sum 
    // from the stack and replace with the new sum like it's described in example 1
    // [3,1,1,2]
    // when we are on the 2nd iteration and we find curr element is same as the next, we can push 1 + 1 = 2 in the stack which results to
    // [3,2]
    // but now the next element in the array after 1 is 2 and the last element in the stack is also 2 so we have to now pop off the last el
    // and replace it with the new sum which is 4
    // [3,4]
    // okay so now what it seems like i have to do is
    // i iterate through the array and check with stack inside the loop if the last element in the stack matches my curr el
    // if it does then we pop off the last element of the stack and replace with the new sum curr el + curr el
    // now, if curr el does not match with the last element of the stack, we check if it is the same as the next element in the array
    // if they are the same we add curr el + curr el and push that sum in to the stack and increase the iteration by 1
    // if the curr el does not match the last element of the stack and the next el in the array, we just push the curr el in the array
    // at the end we just return the stack

    let stack = [];

    for (let i = 0; i < nums.length; i++) {
        let lastElInStack = stack[stack.length - 1];
        if (nums[i] === lastElInStack) {
            stack.pop();
            stack.push(nums[i] + nums[i]);
        } else {
            if (nums[i] === nums[i + 1]) {
                stack.push(nums[i] + nums[i]);
                i++;
            } else {
                stack.push(nums[i]);
            }
        }
    }

    return stack;
};
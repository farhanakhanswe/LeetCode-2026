/* Question Link: https://leetcode.com/problems/merge-adjacent-equal-elements/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Solution 1: Time Complexity: O(n) & Space Complexity: O(n)
// Thought process for the solution is at the end of it

var mergeAdjacent = function (nums) {
  
    let stack = [];
    stack.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        let lastElInStack = stack[stack.length - 1];
        let sum = nums[i];

        while (sum === lastElInStack) {
            sum = sum + sum; // adding the same number twice since both el are equal
            stack.pop();
            lastElInStack = stack[stack.length - 1];
        }

        stack.push(sum);
    }

    return stack;

};


/* Thought Process for Solution 1  */

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

    // this soln didn't work
    // lets say the stack is [2]
    // now theres a new sum added to the stack [2,2] 
    // we need to replace these two same numbers with the sum of them in the stack before we move to the next element in the array
    // the question asks us to choose the leftmost such adjacent pair in the current array
    // so what we could do is when we add a new sum in the stack we could first check if the last num in the stack is that sum
    // then we need to add the sum with itself before we pop off the last el in the stack and replace it by the new sum
    // we can use a while loop for this 
    // so first we check if the new num of same numbered elements is the same as the last element of the stack
    // if it is then we add the sum by itself to create the new sum and then pop off the last element of the stack
    // now we check again if this new sum is the same as the last el of the stack
    // if it is, then the same process follows of creating a new sum and popping off the last el of the stack
    // we then only push the latest sum into the stack if the sum is no longer same as the last el of the stack or stack is empty

    // okay, i think im complicating this too much cause im taking a for loop, creating a new array for stack and also using while loop
    // inside of the for loop
    // what if we just consider the nums array and not use stack
    // as we traverse through the nums array, if we see th next element is the same as the curr element, we calculate the sum
    // remove the two elements from the array and replace with the new sum and then move to the next iteration 
    // at then end just return the nums array

    /*
        but this is actually a bad approach and also wrong soln 
        cause if the nums = [4,2,1,1], the output would be [4,4] and not 8

    for(let i = 1 ; i < nums.length; i++){
        // lets [2,1,1, 2] so i = 2 will give el -> 1
        if(nums[i] === nums[i - 1]){ // i = 2 so el is 1 and i = 1 so el is 1 
            let sum = nums[i] + nums[i]; // sum = 2
            if(sum === nums[i - 2]){ // sum = 2 and i = 2 so i -2 = 0. 0 index el is 2
               nums.splice(i - 2, 3, sum + sum);// from 0 index remove 3 elements and replace them with new sum
               i = i - 2; // since we shfited elements to the left, we have to reduce iteration number so i = 0 here
            }else{
               nums.splice(i - 1, 2, sum);
               i = i - 1;
            }

        }
    }

    return nums;

    */

    // let's start over
    // seems like the best approach is to use a stack
    // earlier we did some checks with the curr el and next el before we pushed to stack
    // but come to think of it, why do we even need to check if the curr el is equal to the next el when we have already
    // pushed the earlier numbers/sums into the stack AND the problem requires us to 
    // " choose the leftmost such adjacent pair in the current array "
    // we can push the first el into the stack
    // we can start iterating the loop from the index = 1 and check if the curr el in the array is the same as the last el in the stack
    // if it is the same el then we add the number with itself and
    // push it to the stack IF the latest element in the stack is not equal to the  new sum
    // if the new sum is equal to the latest number in the stack then add the new sum with itself and pop off the latest el from the stack
    // this recurring addition of numbers and popping off elements from stack will stop once the sum is no longer same as the latest stack el
    // we can use a while loop for this
    // at the end we just return the stack


    // let's start over
    // seems like the best approach is to use a stack
    // earlier we did some checks with the curr el and next el before we pushed to stack
    // but come to think of it, why do we even need to check if the curr el is equal to the next el when we have already
    // pushed the earlier numbers/sums into the stack AND the problem requires us to 
    // " choose the leftmost such adjacent pair in the current array "
    // we can push the first el into the stack
    // we can start iterating the loop from the index = 1 and check if the curr el in the array is the same as the last el in the stack
    // if it is the same el then we add the number with itself and
    // push it to the stack IF the latest element in the stack is not equal to the  new sum
    // if the new sum is equal to the latest number in the stack then add the new sum with itself and pop off the latest el from the stack
    // this recurring addition of numbers and popping off elements from stack will stop once the sum is no longer same as the lastest stack el
    // we can use a while loop for this
    // at the end we just return the stack

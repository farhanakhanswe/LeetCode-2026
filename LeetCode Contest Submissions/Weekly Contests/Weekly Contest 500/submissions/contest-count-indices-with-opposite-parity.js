/* Question Link: https://leetcode.com/problems/count-indices-with-opposite-parity/description/
   The following solution was submitted during the contest period. 
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function (nums) {
    // i am given an int array nums of length n
    // the score of an index i is defined as the number of indices j such that:
    // i < j < n and nums[i] and nums[j] have different parity (one is even and the other is odd)
    // return an int arr answer of len n where answer[i] is the score of index i

    // thought process
    // i < j < n so we have to move from left to right as we traverse the array
    // if the curr el is odd then we have to count the number of even on the right
    // if the curr el is even then we have to count the number of odds on the right

    // code

    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        if (nums[i] % 2 !== 0) {  // if odd
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 === 0) { // if even
                    count++;
                }
            }
        } else { // if even
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 !== 0) { // if odd
                    count++;
                }
            }
        }

        arr.push(count);
    }

    return arr;
};
/**
 * Question Link: https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // given int array nums, return all the triplets
    // i != j i != k j!= k
    // nums[i] + nums[j] + nums[k] == 0
    // soln set must not contain duplicate triplets
    // each triplet will contain 3 elements from different indices
    // these 3 elements can be the same value but the indice must be different

    // preparation:
    // we pick one num in a parent loop
    // we then add that num with another num with diff indice in a child loop
    // we then add the result so far with another num with diff indice  in a grandchild loop
    // if the total is 0, we can add the three elements to a subarray which can
    // later be pushed to the final array we will return

    // if the arr nums length is 3 we can try to add the  numbers to see if we get 0

    // i , j, k are indices
    // i cannot be j
    // i cannot be k
    // j cannot be k
    // that means i cannot be j or k, j cannot be i or k, k cannot be i or j
    // basically meaning all three elements in the triplet have to have unique indices
};
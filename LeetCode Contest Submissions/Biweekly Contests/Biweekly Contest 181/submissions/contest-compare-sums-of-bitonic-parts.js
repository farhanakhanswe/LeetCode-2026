/**
 * Question Link: https://leetcode.com/problems/compare-sums-of-bitonic-parts/
 * @param {number[]} nums
 * @return {number}
 */
var compareBitonicSums = function (nums) {
    // a bitonic array is an array that is strictly increasing up to a single peak element and then strictly decreasing
    // an array is said to be strictly increasing if each element is strictly greater than its previous one (if exists)
    // an array is said to be strictly decreasing if each element is strictly smaller than ts previous one (if exists)

    // thought process
    // im given a bitonic array nums of length n
    // i have to split the array into two parts
    // asc part: from index 0 to the peak element (inclusive) so after peak element there wont either be any el or next el would be a smaller num 
    // desc: from the peak element to index n - 1 (inclusive) so from the peak element to last element 
    // the peak el belongs to both parts

    // i have to return 0 if the sum of the asc part is greater
    // i have to return 1 if the sum of the desc part is greater
    // -1 if both boths are equal

    //  nums = [1,3,2,1] 
    // asc part -> 1,3 -> sum = 4
    // desc part -> 3,2,1 -> sum = 6
    // so we return 1 since desc part is greater

    // preparation

    // we will traverse through the array and first calc the sum of the asc array
    // we will stop the asc sum when the next el from the curr array el is smaller. we will sum till the peak el. 
    // we can keep a flag that asc sum is done
    // so that when we continue the array, we will check if this flag is true then we will calculate the desc sum

    // we will start with asc sum because the question said the asc part will be from index 0 till peak element and this array
    // needs to be strictly increasing

    // we have to keep in mind that we have to split the arra into two parts


    // code

    let ascSum = nums[0];
    let descSum = 0;
    let ascSumDone = false;

    for (let i = 1; i < nums.length; i++) {
        if (ascSumDone) {
            descSum += nums[i];
        } else {
            ascSum += nums[i];
            if (nums[i + 1] < nums[i]) {
                descSum += nums[i];
                ascSumDone = true;
            }
        }
    }

    if (ascSum === descSum) {
        return -1;
    } else if (ascSum > descSum) {
        return 0;
    } else {
        return 1;
    }
};
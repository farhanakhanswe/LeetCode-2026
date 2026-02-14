// Question Link: https://leetcode.com/problems/house-robber-v/
// The following solution was submitted during the contest period.

/**
 * @param {number[]} nums
 * @param {number[]} colors
 * @return {number}
 */
var rob = function (nums, colors) {
    // i am a professional robber planning to rob houses along a street
    // each house has a certain amount of money stashed and is protected by a security system with a color code
    // i am given two integer arrays nums and colors, both of length n, where nums[i] is the amount of money in
    // in th ith house and colors[i] is the color code of that house

    // so nums = [1,4,3,5] colors = [1,1,2,2]
    // this would mean the if i = 0 is the house, nums[0] is the money this house has and color[0] is the color
    // code of the house

    //i cannot rob two adjacent houses if they share the same color code
    // return the maximum amount of money i can rob

    // so i need to select which houses to rob based on the color code and the max amount of money i could get

    // so we know that we cannot rob two adjacnet houses if they are the same color code

    // so lets say we traverse through the nums array and keep adding the money and when we see the next el
    // has the same color code as the curr one we can just break the loop and move to the next element

    // okay so once a house is robbed, the next house cannot be robbed if the color code is same
    // if nums = [10,1,3,9] colors = [1,1,1,2]
    // we can pick 10,3,9 

    // now lets says nums = [3,1,2,4] colors = [2,3,2,2]
    // so we can pick nums 3,1,4 instead of 3,1,2 because 2,4 have the same color code and we should pick
    // the one that'll give the largest sum

    // so lets say we traverse the nums and we can check the current num and the next num having same color code which one is the bigger value, we just pick that one

    // okay so now the 3rd example
    // nums = [10, 1, 3 , 9] colors = [1,1,1,2]
    // we have to look into the indexes to ensure adjacency
    // here we pick 10, 3, 9. even though 10 and 3 have the same color code but we are picking since they
    // are not adjacent

    // so steps:
    // we have to check if the colors[i] and colors[i+1] are the same color code
    // if it is we pick the bigger value and add to the sum


    let total = 0;
    let i = 0;

    while (i < nums.length) {
        if (colors[i] === colors[i + 1]) {
            total += (nums[i] > nums[i + 1]) ? nums[i] : nums[i + 1];
            i = i + 2;
        } else {
            total += nums[i];
            i++;
        }
    }


    return total;

    // out of 1011 testcases, 1 didnt pass wit this soln
    // nums = []
};
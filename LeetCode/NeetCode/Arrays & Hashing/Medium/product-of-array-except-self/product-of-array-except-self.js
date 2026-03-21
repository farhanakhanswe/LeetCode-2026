/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // given an int arr nums, return an arr answer such that answer[i] = the product of all el of nums except nums[i]

    // okay lets not think about O(n) for now
    // if i use a nested for loop to find the product of all els except curr el, that'll give the answer

    let result = [];

    for(let i = 0; i < nums.length; i++){
        let product = 1;
        for(let j = 0; j < nums.length; j++){
            if(i !== j){
                product = product * nums[j];
            }
        }

        result.push(product);
    }

    return result;

    // now lets think of an optimized solution
    // lets say if i know the product of all el
    // as lets say the current el is nums[i] and if we know the product of all the elements till nums[i - 1]
    
};
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let result = init;

    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }

    return result;
};

/* 
    Notes:

    (1) Let's think of a bit more simplified solution first:

        var reduce = function(nums, fn, init) {
            if(nums.length === 0) return init;
    
            let result = fn(init, nums[0]);

            for(let i = 1 ; i < nums.length; i++){
                result = fn(result, nums[i]);
            }

            return result;
        };

        Here, we are returning init for empty arrays as it's a requirement.
        Then, we are calling the callback function "fn", passing init and the first element as arguments to it,
        to get our initial result.
        Then, we use a for loop that starts from the index = 1 element which is the second element, and on every 
        iteration, we call the callback function fn and pass the current element and the value returned from the 
        last fn call as arguments.


*/

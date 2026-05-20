// Question Link: https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        let result = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        return result;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/*

    (1) Function composition is the process of combining two or more functions so that the output of one function
        becomes the input of another.

    (2) The question says that the function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))). This means
        the input of g(x) is the result returned from h(x). Then, the input of f(x) will be the result returned from
        g(x). This means we have to loop over the functions array from right to left. 
        
    (3) The question also mentions that the function composition of an empty list of functions 
        is the identity function f(x) = x which simply means that if the array is empty we will just return the x value

*/
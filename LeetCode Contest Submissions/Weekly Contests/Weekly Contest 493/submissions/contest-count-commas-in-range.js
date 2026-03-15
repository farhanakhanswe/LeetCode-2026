/* Question Link: https://leetcode.com/problems/count-commas-in-range/
   The following solution was submitted during the contest period. It is incorrect.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function (n) {
    // im given an int n 
    // if n is less than 1000 we return 0 as 1 to 999 have fewer than four digits

    // so n needs to be atleast 1000
    // so actually i need to consider from 1000 till n for finding total commas

    // i can create a new array with the new numbers 

    if (n < 1000) return 0;

    let num = 1000;
    let output = 0;

    while (num <= n) {
        let str = num.toString();

        let count = 0;

        for (let j = str.length - 1; j >= 0; j--) {
            count++;
            if (count % 3 === 0) {
                output++;
            }
        }

        num++;
    }

    return output;
};
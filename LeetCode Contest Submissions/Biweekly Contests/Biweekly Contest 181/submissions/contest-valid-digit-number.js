/**
 * Question Link: https://leetcode.com/problems/valid-digit-number/
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function (n, x) {
    let str = n.toString();
    let xChar = x.toString();

    if (str[0] === xChar) {
        return false;
    }

    for (let i = 1; i < str.length; i++) {
        if (str[i] === xChar) {
            return true;
        }
    }

    return false;
};
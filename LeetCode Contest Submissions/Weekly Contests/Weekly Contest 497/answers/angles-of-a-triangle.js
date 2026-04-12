/**
 * Question Link: https://leetcode.com/problems/angles-of-a-triangle/
 * @param {number[]} sides
 * @return {number[]}
 */
var internalAngles = function (sides) {
    // to determine positive area, let's say the sides are a , b , c
    // a + b > c
    // a + c > b
    // b + c > a

    const a = sides[0];
    const b = sides[1];
    const c = sides[2];
    let arr = [];

    if (a + b > c && a + c > b && b + c > a) {
        const A = Math.acos((b * b + c * c - a * a) / (2 * b * c)) * 180 / Math.PI;
        arr.push(A);
        const B = Math.acos((a * a + c * c - b * b) / (2 * a * c)) * 180 / Math.PI;
        arr.push(B);
        const C = Math.acos((a * a + b * b - c * c) / (2 * a * b)) * 180 / Math.PI;
        arr.push(C);
    }

    return arr.sort((a, b) => a - b);
};
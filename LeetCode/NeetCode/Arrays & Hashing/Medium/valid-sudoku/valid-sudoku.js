/**
 * Question Link: https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */

// Solution 1: 
var isValidSudoku = function (board) {
    // sudoku is a square of 9 boxes where each box has 3 X 3 grid boxes

    // determine if a 9 X 9 sudoku board is valid. Only the filled cells need to be validated according
    // to the following rules:
    // (1) each row must contain the digits 1-9 without repetition
    // (2) each column must contain the digits 1-9 without repetition
    // (3) each of the nine 3 X 3 sub-boxes of the grid must contain the digits 1-9 without repetition

    // thought process
    // the input is an array containing subarrays that represent each row of the sudoku

    // checking the if rows have unique values is easy,
    // we pick each subarray and check if the filled in values are unique

    // checking if all the filled in elements are unique in the columns
    // we check if the same indexed el in all the subarrays are unique

    // check if all the the 3 X 3 's filled values are unique
    // at first we pick the first 3 subarrays
    // for each part, we will get 3 boxes,
    // the first box we will check unique filled values from the index 0 to 2 in those 3 rows
    // the second box we will check unique filled values from the index 3 to 5 in the same 3 rows
    // the third box we will check unique filled values from the index 6 to 8 in the same 3 rows
    // if the values are unique so far
    // then we pick the next 3 subarrays and follow the same process
    // if the values are still unique so far
    // then we pick the next 3 subarrays and follow the same process
    // if the values are still unique then sudoku is valid

    // execution

    let map = new Map();

    // checking if the rows contain unique values
    let i = 0;

    while (i < 9) {
        let arr = board[i];
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] === ".") {
                continue;
            }

            if (map.has(arr[j])) {
                return false;
            }

            if (numIsValid(arr[j])) {
                map.set(arr[j], 1);
            }
        }

        map = new Map(); // we don't want to reuse the old map
        i++;
    }

    // checking if the columns contain unique values

    i = 0;
    map = new Map();

    while (i < 9) {

        for (let j = 0; j < 9; j++) {
            let arr = board[j];

            if (arr[i] === ".") {
                continue;
            }

            if (map.has(arr[i])) {
                return false;
            }

            if (numIsValid(arr[i])) {
                map.set(arr[i], 1);
            }
        }

        map = new Map();
        i++;
    }

    // checking 3x3 sub-boxes
    
    for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {

            map = new Map();

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {

                    let val = board[boxRow * 3 + i][boxCol * 3 + j];

                    if (val === ".") continue;

                    if (map.has(val)) return false;

                    if (numIsValid(val)) {
                        map.set(val, 1);
                    }
                }
            }
        }
    }

    return true;
};

var numIsValid = function (num) {
    return num >= 1 && num <= 9;
}
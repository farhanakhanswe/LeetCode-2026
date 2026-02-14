// Question Link: https://leetcode.com/problems/weighted-word-mapping/
// The following solution was submitted during the contest period.

/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    // i am given an array of strings words where each string represents  word containing lowercase english
    // letters so words = ["abc", "defeg"]

    // i am also given an int arr weights of length 26, where weights[i] represents the weight of the
    // ith lowercase english letter
    // so this means lets say weight[0] will give me the first letter in the alphabetical order

    // the weight of a word is defined as the sum of the weights of its characters

    // for each word, take its weight module 26 and map the result to a lowercase english letter using
    // reverse alphabetical order 
    // 0 -> 'z'
    // 1 -> 'y'
    // 25 -> 'a'

    // so when we are calculating the weight of each char we will follow forward alphabetical order
    // 'abc' and weights [5,3,12] would mean weight of a is 5 and weight of b is 3

    // a b c d e f g h i j k l m n o p q r s t u v w x y z

    // so weight of abc is 20 and that would give me 20%26 and we have to pick an alphabet from the reverse
    // alphabetical order

    // okay so we can create a map for reverse alphabetical order

    let chars =
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z"]

    let charMap = new Map();

    for (let i = 0; i < chars.length; i++) {
        charMap.set(chars[i], weights[i]);
    }

    chars.reverse();

    let reverseCharMap = new Map();

    for (let i = 0; i < chars.length; i++) {
        reverseCharMap.set(i, chars[i])
    }

    let mappedChar = "";

    // now we can calculate the weight for each char

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let sum = 0;
        for (let j = 0; j < word.length; j++) {
            sum += charMap.get(word[j]);
        }

        let reverseCharNum = sum % 26;
        // now lets find the char for the sum from the reverseCharMap 

        let reverseChar = reverseCharMap.get(reverseCharNum);

        mappedChar = mappedChar + reverseChar;

    }

    return mappedChar;

};
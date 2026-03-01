/* Question Link: https://leetcode.com/problems/trim-trailing-vowels/
   The following solution was submitted during the contest period.
*/

/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
    let stack = s.split("");

    for (let i = 0; i < vowels.length; i++) {
        vowelMap.set(vowels[i]);
    }

    // trailing vowel is a vowel letter that appears at the end of a word or syllable
    // the output is id for "idea" so after removing a and e when we faced a non-vowel we stopped removing char and kept the rest of the str
    // we can keep a stack that keeps removing vowels until it means a non vowel

    for (let i = s.length - 1; i >= 0; i--) {
        if (vowelMap.has(s[i])) {
            stack.pop();
        } else {
            break;
        }
    }

    return stack.join("");
};
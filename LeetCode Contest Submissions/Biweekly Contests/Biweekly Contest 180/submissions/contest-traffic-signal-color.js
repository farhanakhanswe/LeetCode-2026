// Question Link: https://leetcode.com/problems/traffic-signal-color/
// The following solution was submitted during the contest period.

/**
 * @param {number} timer
 * @return {string}
 */
var trafficSignal = function (timer) {
    if (timer === 0) {
        return "Green";
    } else if (timer === 30) {
        return "Orange";
    } else if (timer > 30 && timer <= 90) {
        return "Red";
    } else {
        return "Invalid";
    }
};
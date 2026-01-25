<?php

/* Question Link: https://leetcode.com/problems/valid-palindrome/ */

class Solution {

/**
* @param String $s
* @return Boolean
*/
function isPalindrome($s) {
$str = preg_replace("/[^A-Za-z0-9]/", '', $s);
$str = strtolower($str);
$leftPtr = 0;
$rightPtr = strlen($str) - 1;

while($leftPtr <= $rightPtr){
    if($str[$leftPtr] !==$str[$rightPtr]){
    return false;
    }

    $leftPtr++;
    $rightPtr--;
    }

    return true;
    }
    }
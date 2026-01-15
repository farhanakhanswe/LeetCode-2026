<?php

/* Question Link: https://leetcode.com/problems/valid-anagram/ */

class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Boolean
     */
    function isAnagram($s, $t) {
        if(strlen($s) !== strlen($t)){
            return false;
        }

        $assocArr = [];

        for( $i = 0; $i < strlen($s) ; $i++){
            if(array_key_exists($s[$i], $assocArr)){
                $assocArr[$s[$i]] += 1;
            } else{
                $assocArr[$s[$i]] = 1;
            }
        }

        for( $i = 0; $i < strlen($t) ; $i++){
            if(!array_key_exists($t[$i], $assocArr) || $assocArr[$t[$i]] === 0){
                return false;
            }

            $assocArr[$t[$i]] -= 1;
        }

        return true;
    }
}

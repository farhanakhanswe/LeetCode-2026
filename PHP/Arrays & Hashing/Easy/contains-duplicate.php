<?php

/* Question Link: https://leetcode.com/problems/contains-duplicate/ */

class Solution {
    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function containsDuplicate($nums) {
        if(count($nums) < 2){
            return false;
        }

        $assocNumsArr = [];
        
        foreach($nums as $num){
            if(array_key_exists($num ,$assocNumsArr)){
                return true;
            }else{
                $assocNumsArr[$num] = 1;
            }
        }

        return false;
    }
}

?>

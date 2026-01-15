<?php

/* Question Link: https://leetcode.com/problems/two-sum/ */

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        if(count($nums) < 2){
            return [-1, -1];
        }

        $numsAssocArray = [];
        $numsLen = count($nums);

        for($i = 0 ; $i < $numsLen; $i++){
            $diff = $target - $nums[$i];
            if(array_key_exists($diff, $numsAssocArray)){
                return [$i, $numsAssocArray[$diff]];
            }

            $numsAssocArray[$nums[$i]] = $i;
        }

        return [-1,-1];
    }
}

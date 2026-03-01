<?php

/* Question Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ */
class Solution
{

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices)
    {
        $left = 0;
        $right = 1;
        $maxProfit = 0;

        while ($right < count($prices)) {
            if ($prices[$right] > $prices[$left]) {
                $profit = $prices[$right] - $prices[$left];
                $maxProfit = max($maxProfit, $profit);
            } else {
                $left = $right;
            }
            $right++;
        }

        return $maxProfit;
    }
}


/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
*/

//Solution
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for(let i = 0; i < dp.length; i++){
        for(let coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
                
            }
        }
    }
    const minCoins = dp[amount]
    if(minCoins >= Number.MAX_SAFE_NUMBERS) return -1
    return minCoins
};
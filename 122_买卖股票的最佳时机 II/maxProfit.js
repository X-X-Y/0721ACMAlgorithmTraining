/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // dp[i][0/1] 第i天 持有股票1/不持有股票0 获得的最大利润
    let n = prices.length
    // let dp = new Array(n).fill(0).map(()=>{return new Array(2).fill(0)})
    // base case
    // dp[0][0] = 0
    // dp[0][1] = -prices[0]
    let dp_pre0 = 0  // 前一天不持有股票
    let dp_pre1 = -prices[0]  // 前一天持有股票
    let dp_cur0 = 0  // 当天不持有股票
    let dp_cur1 = -prices[0]  // 当天持有股票

    for(let i = 1; i < n; i++){
        // dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i])
        // dp[i][1] = Math.max(dp[i-1][0]-prices[i], dp[i-1][1])
        dp_cur0 = Math.max(dp_pre0, dp_pre1+prices[i])
        dp_cur1 = Math.max(dp_pre0-prices[i], dp_pre1)
        dp_pre0 = dp_cur0
        dp_pre1 = dp_cur1
    }

    // return dp[n-1][0]
    return dp_cur0
};

console.log(maxProfit([7,6,4,3,1]))
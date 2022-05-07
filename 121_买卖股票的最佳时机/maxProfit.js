/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    let curmin = prices[0]
    for(let i = 0; i < prices.length; i++){
        curmin = Math.min(curmin, prices[i])
        res = Math.max(res, prices[i]-curmin)
    }
    return res
};

// console.log(maxProfit([7,6,4,3,1]))
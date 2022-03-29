/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const type = coins.length
    // dp[i][j] 使用前i种硬币，凑出总金额为j的方式数
    let dp = new Array(type+1).fill(0).map(()=>new Array(amount+1).fill(0))

    // base case
    for(let i = 0; i <= type; i++){
        dp[i][0] = 1
    }

    for(let i = 1; i <= type; i++){
        for(let j = 1; j <= amount; j++){
            if(j-coins[i-1] < 0){
                dp[i][j] = dp[i-1][j]
            }else{
                // 使用当前硬币/不使用当前硬币
                dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j]
            }
        }
    }

    return dp[type][amount]
};

console.log(change(3, [2]))
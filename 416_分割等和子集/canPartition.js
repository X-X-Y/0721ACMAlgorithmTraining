/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let n = nums.length
    let sum = nums.reduce((a, b) => a + b)
    if(sum % 2 != 0) return false
    sum = sum/2

    // dp[i][j] nums前i+1个数的和是否能等于j
    let dp = new Array(n+1).fill(false).map(()=>new Array(sum+1).fill(false))
    // base case
    for(let i = 0; i <= n; i++){
        dp[i][0] = true
    }

    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= sum; j++){
            if(j - nums[i-1] < 0){
                // 背包容量不足，不能放入第i个物品
                dp[i][j] = dp[i-1][j]
            }else{
                // 装入或者不装入背包
                // 第i个物品对应nums[i-1]，数组从0开始
                dp[i][j] = dp[i-1][j - nums[i-1]] || dp[i-1][j]
            }
        }
    }

    return dp[n][sum]
};

// console.log(canPartition([1,2,5]))
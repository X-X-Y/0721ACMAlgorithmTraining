/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // dp[i] 以nums[i]为结尾的最长递增子序列的长度
    const n = nums.length
    let dp = new Array(n).fill(1)

    for(let i = 0; i < n; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }

    return Math.max(...dp)
};

// console.log(lengthOfLIS([7,7,7,7,7,7,7]))
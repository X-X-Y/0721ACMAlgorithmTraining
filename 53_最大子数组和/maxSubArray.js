/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // dp[i] 以nums[i]结尾的最大子数组和
    let dp = new Array(nums.length).fill(0)
    // dp[0] = nums[0]

    let dp_pre = nums[0]
    let dp_late = 0
    let res = dp_pre
    for(let i = 1; i < nums.length; i++){
        // dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        dp_late = Math.max(nums[i], dp_pre + nums[i])
        dp_pre = dp_late
        res = Math.max(res, dp_late)
    }

    // return Math.max(...dp)
    return res
};

console.log(maxSubArray([5,4,-1,7,8]))
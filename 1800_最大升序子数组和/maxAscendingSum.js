/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    // dp[i]以第i个元素结尾的子数组最大和
    // let dp = new Array(nums.length).fill(0)
    // dp[0] = nums[0]
    let res = nums[0]
    let dpCur = nums[0]
    let dpPre = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > nums[i-1]){
            dpCur = dpPre + nums[i]
            dpPre = dpCur
            // dp[i] = dp[i-1] + nums[i]
        }else{
            dpCur = nums[i]
            dpPre = dpCur
            // dp[i] = nums[i]
        }
        res = Math.max(dpCur, res)
    }
    // return Math.max(...dp)
    return res
};
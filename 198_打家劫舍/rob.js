/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp[i] 从第 i 家开始偷，能偷到最多的钱
    // let dp = new Array(nums.length+2).fill(0)
    let cur = 0; let pos1 = 0; let pos2 = 0
    let res = 0
    for(let i = nums.length-1; i >= 0; i--){
        // dp[i] = Math.max(dp[i+1], dp[i+2]+nums[i])
        cur = Math.max(pos1, pos2+nums[i])
        res = Math.max(res, cur)
        pos2 = pos1
        pos1 = cur
    }
    // return Math.max(...dp)
    return res
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // dp[i] 从位置 i 跳到最后一个位置，需要的最少跳跃次数
    let dparr = new Array(nums.length).fill(nums.length)
    function dp(nums, i){
        // i 从0开始
        if(i >= nums.length-1){
            return 0
        }

        if(dparr[i] != nums.length){
            return dparr[i]
        }

        // 在第 i 位置所能跳跃的步长
        let steps = nums[i]
        for(let j = 1; j <= steps; j++){
            // 在位置 i 跳了1步到达 i+j ，i+j 到最后需要的最少步数
            let curmin = dp(nums, i + j) + 1
            // console.log(curmin)
            dparr[i] = Math.min(curmin, dparr[i])
        }
        return dparr[i]
    }
    
    return dp(nums, 0)
};










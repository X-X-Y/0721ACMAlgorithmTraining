/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxDistance = 0
    for(let i = 0; i < nums.length-1; i++){
        // 当前位置能跳到的最远距离，之前所有位置能跳到的最远距离
        maxDistance = Math.max(maxDistance, i + nums[i])
        if(maxDistance <= i){
            // 可能碰到0了，卡在这没法越过了，更不能超过终点了
            return false
        }
    }

    return maxDistance >= nums.length - 1
};
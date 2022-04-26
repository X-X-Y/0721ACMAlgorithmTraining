/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    function robrange(nums, start, end){
        let cur = 0; let pos1 = 0; let pos2 = 0
        for(let i = end-1; i >= start; i--){
            cur = Math.max(pos1, pos2+nums[i])
            pos2 = pos1
            pos1 = cur
        }
        return cur
    }
    return Math.max(robrange(nums, 0, nums.length-1), robrange(nums, 1, nums.length))
};
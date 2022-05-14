/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0
    // 一个数与自身异或为0，与0异或为自身
    for(let item of nums){
        res ^= item
    }
    return res
};
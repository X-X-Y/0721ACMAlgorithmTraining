/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hmap = new Map()
    for(let i = 0; i < nums.length; i++){
        if(hmap.has(target - nums[i])){
            return [i, hmap.get(target - nums[i])]
        }
        hmap.set(nums[i], i)
    }
};
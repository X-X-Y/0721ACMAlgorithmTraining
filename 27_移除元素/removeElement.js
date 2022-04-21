/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0
    let right = 0
    while(right < nums.length){
        if(nums[right] !== val){
            nums[left] = nums[right]
            left++
        }
        right++
    }
    return left
};

// console.log(removeElement([3,2,2,3], 3))
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length
    let left = 0
    let right = n - 1

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)
        if(nums[mid] < target){
            left = mid + 1
        }else if(nums[mid] > target){
            right = mid - 1
        }else if(nums[mid] === target){
            right = mid - 1
        }
    }

    return left
};

// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let removeElement = function(nums, elem){
    let left = 0;
    let right = 0;
    while(right < nums.length){
        if(nums[right] != elem){
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
}

var moveZeroes = function(nums) {
    let idx = removeElement(nums, 0);
    while(idx < nums.length){
        nums[idx] = 0;
        idx++;
    }
    return nums;
};










/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let res = 0
    let cur = 0
    while(left < right){
        cur = Math.min(height[left], height[right])*(right-left)
        res = Math.max(res, cur)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return res
};
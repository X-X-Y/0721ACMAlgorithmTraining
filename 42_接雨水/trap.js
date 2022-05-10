/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0
    let left = 0
    let right = height.length - 1

    let l_max = 0
    let r_max = 0
    while(left < right){
        l_max = Math.max(l_max, height[left])
        r_max = Math.max(r_max, height[right])
        if(l_max < r_max){
            res += l_max - height[left]
            left++
        }else{
            res += r_max - height[right]
            right--
        }
    }
    return res
};
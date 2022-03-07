/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let s = []
    let res = new Array(nums.length).fill(0)
    const n = nums.length
    for(let i = 2*n-1; i >= 0; i--){
        while(s.length > 0 && s[s.length-1] <= nums[i%n]){
            s.pop()
        }
        res[i%n] = s.length > 0 ? s[s.length-1] : -1
        s.push(nums[i%n])
    }
    return res
};


// console.log(nextGreaterElements([5,4,3,2,1]))



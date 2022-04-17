/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let path = []
    let res = []

    function backtrack(nums, start, path){
        res.push([...path])
        for(let i = start; i < nums.length; i++){
            path.push(nums[i])
            backtrack(nums, i+1, path)
            path.pop()
        }
    }

    backtrack(nums, 0, path)
    return res
};
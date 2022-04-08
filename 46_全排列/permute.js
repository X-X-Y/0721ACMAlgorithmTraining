/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    function backtrack(path, nums){
        if(path.size == nums.length){
            res.push([...path.values()])
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(!path.has(nums[i])){
                path.add(nums[i])
                backtrack(path, nums)
                path.delete(nums[i])
            }
        }
    }

    let res = []
    let path = new Set()
    backtrack(path, nums)
    return res
};

// console.log(permute([0,1]))

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = []

    function backtrack(path, nums){
        if(path.length === nums.length){
            res.push([...path])
            return
        }
        for(let i = 0; i < nums.length; i++){
            // nums[i]用过了 || nums[i]重复但用没过
            if(visited[i] || (i>0 && nums[i] === nums[i-1] && !visited[i-1])){
                continue
            }
            path.push(nums[i])
            visited[i] = true
            backtrack(path, nums)
            visited[i] = false
            path.pop()
        }
    }

    let path = []
    let visited = new Array(nums.length).fill(false)
    nums.sort((a, b) => a - b)
    backtrack(path, nums)
    return res
};

// console.log(permuteUnique([1,2,3]))
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let path = []
    let res = []

    function backtrack(n, k, start){
        res.push([...path])

        for(let i = start; i < k; i++){
            if(i > start && n[i] === n[i-1]){
                continue
            }

            path.push(n[i])
            backtrack(n, k, i+1)
            path.pop()
        }
    }

    nums.sort((a, b)=>a-b)
    backtrack(nums, nums.length, 0)
    return res
};
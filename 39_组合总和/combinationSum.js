/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    let sum = 0
    function backtrack(candidates, target, start, path, res){
        if(sum > target){
            return
        }
        if(sum === target){
            res.push([...path])
            return
        }

        for(let i = start; i < candidates.length; i++){
            path.push(candidates[i])
            sum += candidates[i]
            backtrack(candidates, target, i, path, res)
            path.pop()
            sum -= candidates[i]
        }
    }

    let path = []
    backtrack(candidates, target, 0, path, res)
    return res
};
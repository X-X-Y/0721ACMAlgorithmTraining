/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = []
    let path = []
    let sum = 0
    let used = new Array(candidates.length).fill(false)
    candidates.sort((a, b) => a-b)

    function backtrack(candidates, target, start, path, sum){
        if(sum > target){
            return
        }
        if(sum === target){
            res.push([...path])
            return
        }

        for(let i = start; i < candidates.length; i++){
            // 如果是同一树枝上，同元素被使用used一定是true，如果是false表示已经出递归了，而前面一层已经执行过了，即已经使用过该元素
            if(i > 0 && candidates[i] === candidates[i-1] && used[i-1] === false){
                continue
            }
            path.push(candidates[i])
            sum += candidates[i]
            used[i] = true
            // 入递归表示进入同一树枝，true表示同一树枝上元素被使用过了
            backtrack(candidates, target, i+1, path, sum)
            // 出递归表示返回上一层
            used[i] = false
            sum -= candidates[i]
            path.pop()
        }
    }

    backtrack(candidates, target, 0, path, sum)
    return res
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if(k > nums.length) return false
    let sum = nums.reduce((a, b) => a + b)
    if(sum % k !== 0) return false

    const target = sum / k
    // 第i个数字是否已经用过
    let used = new Array(nums.length).fill(false)

    // 第k个子集是否放入nums[start]数字，第k个子集当前和为curSum，
    // 数字使用状态管理在used，子集和的目标是target
    function backtrack(k, curSum, nums, start, used, target){
        // base case
        if(!k) return true

        // 当前子集已经达到目标，递归下一个子集
        if(curSum === target){
            return backtrack(k-1, 0, nums, 0, used, target)
        }

        // 从start开始往后寻找未利用的数字
        for(let i = start; i < nums.length; i++){
            if(curSum + nums[i] > target) continue

            if(used[i]) continue

            // 将第i个数字放入当前子集
            curSum += nums[i]
            used[i] = true
            // 递归下一个数字是否放入当前集合
            if(backtrack(k, curSum, nums, i+1, used, target)){
                return true
            }
            used[i] = false
            curSum -= nums[i]
        }

        // 穷举了所有数字都无法装满当前子集
        return false
    }

    return backtrack(k, 0, nums, 0, used, target)
};

// console.log(canPartitionKSubsets([1,2,3,4], 3))


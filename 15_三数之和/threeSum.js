/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 已排序数组找出所有和为 target 的两个数集合
    // 从索引 start 开始，因为start前面的数都是被
	// 外层遍历过的，如果满足三数之和，则已经使用了
	// 后面出现需要它之前的数，那这种情况必然已经收录了
    function twoSum(nums, target, start){
        let left = start
        let right = nums.length - 1
        let res = []
        while(left < right){
            let low = nums[left]
            let high = nums[right]
            let sum = low + high
            if(sum < target){
                while(nums[left] == low && left < right)
                    left++
            }else if(sum > target){
                while(nums[right] == high && left < right)
                    right--
            }else{
                res.push([nums[left], nums[right]])
                // 确保相同答案只会被添加一次
                while(nums[left] == low && left < right) left++
                while(nums[right] == high && left < right) right--
            }
        }
        return res
    }

    // 排序+双指针
    let res = []
    let cur
    let twosums
    nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        cur = nums[i]
        twosums = twoSum(nums, -cur, i+1)
        for(let twocur of twosums){
            res.push([cur, ...twocur])
        }
        // 这里不能使用 nums[i] == cur ，因为出循环后 i 还会++
        while(i < nums.length && nums[i] == nums[i+1]) i++
    }
    return res
};

console.log(threeSum([0,0]))
console.log(threeSum([0]))







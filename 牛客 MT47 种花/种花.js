// 通过36%，但是Python通过100%，原因不知
const n = Number(readline())
const nums = readline().split(" ").map(Number)

let res = n ? nums[0] : 0
for(let i = 1; i < n; i++){
    res += Math.max(nums[i] - nums[i-1], 0)
}
console.log(res)
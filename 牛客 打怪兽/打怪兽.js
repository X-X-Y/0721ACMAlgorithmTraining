// 通过42%，原因不知
const n = Number(read_line())
const nums = read_line().split(" ").map(Number)

let stack = []
let res = Array(n)
for(let i = n-1; i >= 0; i--){
  while(stack.length > 0 && stack[stack.length-1] <= nums[i]){
    stack.pop()
  }
  // 从能力值为0开始，所以加1
  res[i] = stack.length + 1
  stack.push(nums[i])
}

const maxVal = Math.max(...res)
console.log(res.indexOf(maxVal)+1, maxVal)
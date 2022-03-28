// 通过10/11，未通过1例显示答案错误，原因不知
while(true){
  const sum = Number(read_line())
  if(sum == 0) break
  const nums = read_line().split(" ").map(Number)
  const types = nums.shift()
  
  // dp[i] 总金额为i时，需要最少的代金券数量
  let dp = new Array(sum+1).fill(sum+1)
  
  // base case
  dp[0] = 0
  
  for(let i = 1; i <= sum; i++){
    for(let j = 0; j < types; j++){
      // 如果当前代金券比当前总金额大，则这张代金券跳过
      if(i - nums[j] < 0) continue
      // 不用当前代金券/用了别的代金券 和 使用当前代金券       
      dp[i] = Math.min(dp[i], dp[i - nums[j]]+1)
    }
  }
  
  console.log(dp[sum] == sum+1 ? -1 : dp[sum])
}
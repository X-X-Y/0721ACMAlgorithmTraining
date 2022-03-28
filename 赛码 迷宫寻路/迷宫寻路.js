const [m, n] = read_line().split(" ").map(Number)
const nums = new Array(m).fill(0).map(()=>new Array(n).fill(0))
for(let i = 0; i < m; i++){
  nums[i] = read_line().split(" ").map(Number)
}

// dp[i][j] 第i行第j列所需最小路径和
let dp = new Array(m).fill(0).map(()=>new Array(n).fill(0))

// base case
dp[0][0] = nums[0][0]
for(let i = 1; i < m; i++){
  dp[i][0] = dp[i-1][0] + nums[i][0]
}
for(let j = 1; j < m; j++){
  dp[0][j] = dp[0][j-1] + nums[0][j]
}

for(let i = 1; i < m; i++){
  for(let j = 1; j < n; j++){
    dp[i][j] = Math.min(dp[i][j-1]+nums[i][j], dp[i-1][j]+nums[i][j])
  }
}

console.log(dp[m-1][n-1])

let T = Number(readline())

while(T--){
    let n = Number(readline())
    let nums = readline().split(' ').map(Number)

    // dp1[i] 以第 i 个寿司为结尾的最大美味值
    let dp1 = new Array(n+1).fill(0)
    // 不考虑首尾连接
    for(let i = 1; i <= n; i++){
      dp1[i] = Math.max(dp1[i-1] + nums[i-1], nums[i-1])
    }
    
    // dp2[i] 以 i 个寿司为结尾的最小美味值
    let dp2 = new Array(n+1).fill(0)
    // 不考虑首尾连接
    for(let i = 1; i <= n; i++){
      dp2[i] = Math.min(dp2[i-1] + nums[i-1], nums[i-1])
    }
    // 首尾已包含，最大美味值即总和减去不含首尾的 dp2 最小值
    let res = nums.reduce((a,b)=>a+b) - Math.min(...dp2.slice(1,-1))
    console.log(Math.max(...dp1, res))
}
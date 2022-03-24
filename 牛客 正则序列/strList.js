const n = Number(readline())
const strList = readline().split(" ").map(Number).sort((a, b) => a-b)

let res = 0
for(let i = 1; i <= n; i++){
    res += Math.abs(strList[i-1] - i)
}
console.log(res)
const [n, x, y] = readline().split(" ").map(Number)
const grades = readline().split(" ").map(Number).sort((a, b) => a - b)

// 将mid视为淘汰的人数，已经置于xy之间了，接下来就只需要考虑晋级n-mid人数
let left = x
let right = y
let mid
while(left <= right){
    mid = Math.floor(left + (right - left)/2)
    // 晋级的人太少了或者还可以更多一点，减少淘汰的人
    if(n - mid <= y){
        right = mid - 1
    }else if(n - mid > y){
        // 晋级的人太多了，增加淘汰的人
        left = mid + 1
    }
}
if((n - left) >= x && (n - left) <= y){
    console.log(grades[left - 1])
}else{
    console.log(-1)
}

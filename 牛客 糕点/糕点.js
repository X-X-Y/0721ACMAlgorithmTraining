let str1
let arr2

while(str1 = readline()){
    arr2 = readline().split(" ").map(Number)
    let arr1 = str1.split(" ").map(Number)
    let [n,m,a,b] = arr1
    // 如果已经做好的m个蛋糕最大值/最小值不在a,b范围
    if(Math.max(...arr2) > (a > b ? a : b) || Math.min(...arr2) < (a > b ? b : a)){
      console.log('NO')
        continue
    }
    
    // 找到已经做好的m个里面有几个正好是a/b 0 1 2
    let count = 0
    arr2.forEach(item=>{
      if(item == a) count++
      if(item == b) count++
    })
    if(count == 0){
      if(n-m>=2){
          console.log('YES')
          continue
      }
      else{
          console.log('NO')
          continue
      }
    }else if(count == 1){
      if(n-m>=1){
          console.log('YES')
          continue
      }
      else{
          console.log('NO')
          continue
      }
    }else{
      console.log('YES')
        continue
    }
}
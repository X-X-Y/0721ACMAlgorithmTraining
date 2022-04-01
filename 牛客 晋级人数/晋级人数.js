let [n, x] = readline().split(' ').map(Number)
let nums = readline().split(' ').map(Number)

nums.sort((a, b)=>{
    return b-a
})

let nums1 = []
let count
if(nums[x-1] != 0){
    for(count = x-1; count < nums.length; count++){
        if(nums[count] != nums[x-1]){
            break
        }
    }
    nums = nums.slice(0, count)
    console.log(nums.length)
}else{
    let str1 = nums.slice(0, x).join('')
    let reg1 = /0/g
    str1 = str1.replace(reg1, '')
    console.log(str1.length)
}



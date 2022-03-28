// 超时，通过8/12
let T = Number(readline())
while(T--){
    let N = Number(readline())
    const nums = readline().split("").map(Number)
    const reat = Number(readline())
    let types = readline().split("")

    let item
    let start = 0
    while(types.length){
        item = types.shift()
        // 第一次出现0的位置
        let pos0
        // 第一次出现1的位置
        let pos1
        
        for(let i = start; i < N; i++){
            // 第一次碰到0人
            if(nums[i] == 0 && pos0 == undefined)
                pos0 = i
            // 第一次碰到1人
            if(nums[i] == 1 && pos1 == undefined)
                pos1 = i
            if(pos0 != undefined && pos1 != undefined)
                break
        }
        start = Math.min(pos0 == undefined ? 99999 : pos0, pos1 == undefined ? 99999 : pos1)
        // pos0 = nums.join("").indexOf("0")
        // pos1 = nums.join("").indexOf("1")
        
        if(item == "M"){
            if(pos1 != undefined){
                nums[pos1] = 2
                console.log(pos1+1)
            }else{
                nums[pos0] = 1
                console.log(pos0+1)
            }
        }else{
            if(pos0 != undefined){
                nums[pos0] = 1
                console.log(pos0+1)
            }else{
                nums[pos1] = 2
                console.log(pos1+1)
            }
        }
    }
}

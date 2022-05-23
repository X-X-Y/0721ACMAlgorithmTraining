/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let res = 0
    // 将字符串str第idx位置的字符数字加1
    function plusOne(str, idx){
        let slist = str.split("")
        if(slist[idx] == '9'){
            slist[idx] = '0'
        }else{
            slist[idx] = Number(slist[idx]) + 1 + ''
        }
        return slist.join("")
    }
    // 将字符串str第idx位置的字符数字减1
    function minusOne(str, idx){
        let slist = str.split("")
        if(slist[idx] == '0'){
            slist[idx] = '9'
        }else{
            slist[idx] = Number(slist[idx]) - 1 + ''
        }
        return slist.join("")
    }

    let queue = []
    queue.push("0000")
    let used = new Set()
    used.add("0000")

    while(queue.length){
        let len = queue.length
        for(let i = 0; i < len; i++){
            let cur = queue.shift()
            if(deadends.includes(cur)){
                continue
            }
            if(cur == target){
                return res
            }

            // 遍历当前数字组合变化的八种可能，每位数字都可以加减1~4
            for(let j = 0; j < 4; j++){
                let upone = plusOne(cur, j)
                if(!used.has(upone)){
                    used.add(upone)
                    queue.push(upone)
                }
                let downone = minusOne(cur, j)
                if(!used.has(downone)){
                    used.add(downone)
                    queue.push(downone)
                }
            }
        }
        res++
    }
    return -1
};











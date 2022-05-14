/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    // ====== 暴力 ======
    // let n = gas.length
    // gas = [...gas, ...gas]
    // cost = [...cost, ...cost]
    // let res = 0
    // function single(start, n, gas, cost){
    //     let curgas = 0
    //     for(let i = start; i < start + n; i++){
    //         curgas = curgas + gas[i] - cost[i]
    //         if(curgas < 0) return -1
    //     }
    //     return start
    // }
    // for(let i = 0; i < n; i++){
    //     res = single(i, n, gas, cost)
    //     if(res != -1) return res
    // }
    // return -1

    // ====== 图像 ======
    // 以当前油箱总量最低值为起点，相当于把图像最大限度向上平移了
    // let curgas = 0
    // let n = gas.length
    // let minsum = 0
    // let start = 0
    // // 经过第i个加油站
    // for(let i = 0; i < n; i++){
    //     curgas = gas[i] - cost[i] + curgas
    //     if(curgas < minsum){
    //         minsum = curgas
    //         start = i + 1
    //     }
    // }
    // if(curgas < 0) return -1
    // // i从0开始，当start为n时即回到了原点
    // return start == n ? 0 : start

    // ====== 贪心 ======
    let curgas = 0
    let n = gas.length
    let start = 0
    if(gas.reduce((a,b)=>a+b) - cost.reduce((a,b)=>a+b) >= 0){
        for(let i = 0; i < n; i++){
            curgas += gas[i] - cost[i]
            // 从start作为起点，跑过i站到不了i+1站
            if(curgas < 0){
                // start到i站中任意站出发，也到不了i+1站，以i+1站位新的起点
                start = i + 1
                curgas = 0
            }
        }
        return start == n ? 0 : start
    }
    return -1
};

// console.log(canCompleteCircuit([2,3,4], [3,4,3]))


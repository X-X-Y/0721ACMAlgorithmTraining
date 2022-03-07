/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let s = []
    let res = new Array(temperatures.length).fill(0)
    for(let i = temperatures.length-1; i >= 0; i--){
        while(s.length > 0 && temperatures[s[s.length-1]] <= temperatures[i]){
            s.pop()
        }
        res[i] = s.length > 0 ? (s[s.length-1] - i) : 0
        s.push(i)
    }
    return res
};


// console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let res = 0
    let smap = new Map()

    for(let ch of s){
        if(smap.get(ch)){
            smap.set(ch, smap.get(ch)+1)
        }else{
            smap.set(ch, 1)
        }
    }

    let single = 0
    for(let num of smap){
        res += Math.floor(num[1] / 2) * 2
        if(num[1] % 2 != 0){
            single = 1
        }
    }

    return res + single
};
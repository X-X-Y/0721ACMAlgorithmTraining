/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let verlist1 = version1.split(".").map(movezero)
    let verlist2 = version2.split(".").map(movezero)

    let maxlen = Math.max(verlist1.length, verlist2.length)
    for(let i = 0; i < maxlen; i++){
        if(verlist1[i] === undefined || verlist1[i].length === 0){
            verlist1[i] = 0
        }
        if(verlist2[i] === undefined || verlist2[i].length === 0){
            verlist2[i] = 0
        }

        if(Number(verlist1[i]) > Number(verlist2[i])){
            return 1
        }else if(Number(verlist1[i]) < Number(verlist2[i])){
            return -1
        }else{
            if(i === maxlen-1){
                return 0
            }
        }
    }
};

function movezero(str){
    let left = 0
    let right = str.length-1
    for(left = 0; left < str.length; left++){
        if(str[left] !== '0'){
            break
        }
    }
    // for(right = str.length-1; right >= 0; right--){
    //     if(str[right] !== '0'){
    //         break
    //     }
    // }
    return str.slice(left, right+1)
}

// console.log(compareVersion("0.1", "1.1"))
// console.log(compareVersion("1.0", "1.0.0"))
// console.log(compareVersion("1.0.1", "1"))
// console.log(compareVersion("7.5.2.4", "7.5.3"))





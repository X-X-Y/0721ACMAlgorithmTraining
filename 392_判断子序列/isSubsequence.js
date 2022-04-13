/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let spoint = 0
    let tpoint = 0

    while(spoint < s.length && tpoint < t.length){
        if(s[spoint] === t[tpoint]){
            spoint++
        }
        tpoint++
    }

    if(spoint == s.length) return true
    return false
};

// console.log(isSubsequence("axc", "ahbgdc"))
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    let tels = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let res = []
    let path = []

    function backtrack(path, start){
        if(path.length == digits.length){
            res.push(path.join(''))
            return
        }

        for(let i = start; i < digits.length; i++){
            let num = digits[i] - 0
            for(let char of tels[num]){
                path.push(char)
                backtrack(path, i+1)
                path.pop()
            }
        }
    }

    backtrack(path, 0)
    return res
};
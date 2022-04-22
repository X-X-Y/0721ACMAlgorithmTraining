/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let strn = n.toString()
    let res = []

    let i = 0
    while(i < strn.length){
        res.push(strn[strn.length-1-i])
        if((i+1) % 3 === 0 && i !== strn.length-1){
            res.push('.')
        }
        i++
    }

    return res.reverse().join('')
};

console.log(thousandSeparator(987))
console.log(thousandSeparator(1234))
console.log(thousandSeparator(123456789))

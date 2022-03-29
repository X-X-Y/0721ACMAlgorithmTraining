/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const L = 10
    let hash = new Map()

    let res = new Set()
    for(let i = 0; i < s.length; i++){
        let curs = s.slice(i, i+L)
        if(hash.has(curs)){
            hash.set(curs, hash.get(curs)+1)
        }else{
            hash.set(curs, 1)
        }

        if(hash.get(curs) > 1){
            res.add(curs)
        }
    }

    return [...res]
};

console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"))
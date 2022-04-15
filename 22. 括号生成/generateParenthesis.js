/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 可用左右括号数量，当前字符串的样子，结果集合
    function backtrack(left, right, curstr, res){
        if(right < left) return
        if(right < 0 || left < 0) return
        if(left === right && left === 0){
            res.push(curstr)
            return
        }

        // 在当前位置选择放一个左括号
        curstr += '('
        backtrack(left-1, right, curstr, res)
        curstr = curstr.slice(0, curstr.length - 1)

        // 在当前位置选择放一个右括号
        curstr += ')'
        backtrack(left, right-1, curstr, res)
        curstr = curstr.slice(0, curstr.length - 1)
    }

    let res = []
    backtrack(n, n, '', res)
    return res
};

// console.log(generateParenthesis(1))
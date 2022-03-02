/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let left = 0;  // 需要添加左括号数量
    let right = 0;  // 需要添加右括号数量

    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            right++;
        }else if(s[i] == ")"){
            right--;
            if(right == -1){
                left++;
                right = 0;
            }
        }
    }
    return left + right;
};


// let s1 = "()))((";
// console.log(minAddToMakeValid(s1));



/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let left = 0,
        right = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            right += 2;
            if(right % 2 != 0){
                // 相当于人为加了一个右括号
                right--;
                // 人为加了一个右括号打破了平衡，加一个左括号
                left++;
            }
        }

        if(s[i] == ")"){
            right--;
            if(right == -1){
                left++;
                right = 1;
            }
        }
    }

    return left+right;
};


console.log(minInsertions("()()()()()("))




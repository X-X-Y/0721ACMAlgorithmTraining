/**
 * @param {string} s
 * @return {boolean}
 */
function leftof(c){
    if(c == ")") return "(";
    if(c == "}") return "{";
    return "[";
}

var isValid = function(s) {
    let left = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            left.push(s[i]);
        }else if(left.length != 0 && left[left.length-1] == leftof(s[i])){
            left.pop();
        }else{
            console.log('1');
            return false;
        }
    }
    return left.length == 0;
};



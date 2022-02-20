/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let left = 0;
    let right = 0;
    let len1 = s1.length;
    let len2 = s2.length;
    let match_nums = 0;

    let need = {};
    let window = {};
    for(let i = 0; i < len1; i++){
        if(need[s1[i]]){
            need[s1[i]] += 1;
        }else{
            need[s1[i]] = 1;
        }
    }

    while(right < len2){
        // c是移入窗口的字符
        let c = s2[right];
        // 右移窗口
        right += 1;
        if(need[c]){
            // 更新窗口数据
            if(window[c]){
                window[c] += 1;
            }else{
                window[c] = 1;
            }
            // 判断移入窗口的字符是否凑齐
            if(need[c] == window[c]){
                match_nums += 1;
            }
        }

        // 判断窗口左侧是否需要收缩
        while( right - left >= len1 ){
            if((match_nums == Object.keys(need).length) && (right - left == len1)){
                return true;
            }

            // 移出窗口的字符
            let d = s2[left];
            // 左移窗口
            left += 1;
            // 窗口数据更新
            if(need[d]){
                if(window[d] == need[d]){
                    match_nums -= 1;
                }
                window[d] -= 1;
            }
        }
    }
    
    return false;
};


// console.log(checkInclusion('cb', "eidbocoo"));
// console.log(checkInclusion('caab', "eidabacoo"));
// console.log(checkInclusion('o', "eidbocoo"));




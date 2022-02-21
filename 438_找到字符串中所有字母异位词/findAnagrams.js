/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let left = 0;
    let right = 0;
    let need = {};
    let window = {};
    let match_num = 0;
    let res = [];

    for(let i = 0; i < p.length; i++){
        if(need[p[i]]){
            need[p[i]]++;
        }else{
            need[p[i]] = 1;
        }
    }

    while(right < s.length){
        let c = s[right];
        right++;
        if(need[c]){
            if(window[c]){
                window[c]++;
            }else{
                window[c] = 1;
            }
            if(window[c] == need[c]){
                match_num++;
            }
        }

        while(match_num == Object.keys(need).length){
            if(right - left == p.length){
                res.push(left);
            }
            let d = s[left];
            left++;
            if(need[d]){
                if(window[d] == need[d]){
                    match_num--;
                }
                window[d]--;
            }
        }
    }
    return res;
};


// console.log(findAnagrams("abab", "ab"));









/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let win = new Map()
    let left = 0
    let right = 0
    let res = 0

    while(right < s.length){
        let rightchar = s[right]
        if(win.get(rightchar)){
            win.set(rightchar, win.get(rightchar)+1)
        }else{
            win.set(rightchar, 1)
        }
        right++

        while(win.get(rightchar) > 1){
            let leftchar = s[left]
            win.set(leftchar, win.get(leftchar)-1)
            left++
        }

        res = Math.max(res, right-left)
    }

    return res
};

// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))

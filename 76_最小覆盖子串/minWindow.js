/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let needmap = new Map()  // 目标字符串包含字符对应的哈希表
    let winmap = new Map()  // 滑动窗口中包含目标字符对应的哈希表
    for(let c of t){
        if(needmap.get(c)){
            needmap.set(c, needmap.get(c)+1)
        }else{
            needmap.set(c, 1)
        }
    }
    
    let left = 0
    let right = 0
    let match = 0  // 滑动窗口中已经有多少字符满足了目标字符的个数
    let len = Infinity  // 找到可行解时更新滑动窗口的长度
    let start = 0  // 每次缩短窗口时更新最近一次的起始窗口位置
    while(right < s.length){
        // 移入窗口的字符
        let rightchar = s[right]
        // 右指针往后移
        right++
        // 如果移入的字符是目标字符
        if(needmap.get(rightchar)){
            // 更新窗口哈希表对应字符个数
            if(winmap.get(rightchar)){
                winmap.set(rightchar, winmap.get(rightchar)+1)
            }else{
                winmap.set(rightchar, 1)
            }
            // 如果当前移入的字符在窗口中个数已达到目标
            if(winmap.get(rightchar) === needmap.get(rightchar)){
                match++
            }
        }

        // 如果所有目标字符都匹配了，开始缩小窗口
        while(match === needmap.size){
            // 移出的字符
            let leftchar = s[left]
            // 目标都匹配并且当前窗口长度比上次小，更新窗口
            if(right - left < len){
                start = left
                len = right - left
            }
            // 左指针往左移
            left++
            // 如果移出的字符是目标字符
            if(needmap.get(leftchar)){
                // 窗口中包含这个字符个数正好刚达到目标，移出后将不匹配了
                if(winmap.get(leftchar) === needmap.get(leftchar)){
                    match--
                }
                // 更新窗口中这个字符的个数
                winmap.set(leftchar, winmap.get(leftchar)-1)
            }
        }
    }

    return len === Infinity ? "" : s.substring(start, start + len)
};

// console.log(minWindow('a', 'a'))
// console.log(minWindow('a', 'aa'))





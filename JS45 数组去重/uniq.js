Array.prototype.uniq = function () {
    // =========1=========
    // let res = []
    // this.forEach(item => {
    //     if(!res.includes(item)) res.push(item)
    // })
    // return res
    
    // =========2=========
    // JS对象键只能是字符串，这个方法错误
    // let res = {}
    // this.forEach(item => {
    //     if(!res.hasOwnProperty(item)){
    //         res[item] = Symbol(item)
    //     }
    // })
    // return Object.keys(res)
    
    // =========3=========
    let res = new Map()
    this.forEach(item => {
        if(!res.has(item)){
            res.set(item, Symbol(item))
        }
    })
    return Array.from(res.keys())
}


let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]
console.log(arr1.uniq())

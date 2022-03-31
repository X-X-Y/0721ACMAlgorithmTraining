let arr1 = [1,2,[3,4,5],6,[7,[9,[5,6],0],8]]

function flat(arr){
  let res = []

  function flt(arr){
    if(Object.prototype.toString.call(arr).slice(8,-1) !== "Array"){
      res.push(arr)
    }else{
      for(let key of arr){
        res.concat(flt(key))
      }
    }
  }

  flt(arr)
  return res
}

console.log(flat(arr1))
console.log(arr1 == arr1.slice())
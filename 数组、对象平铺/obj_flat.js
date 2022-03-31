let obj1 = {
  name: {
    value: 41,
    a: 1,
    b: 2
  },
  age: {
    value: 20
  },
  other: {
    hobby: {
      music1: 'guita',
      music2: 'sing'
    }
  }
}

function myflat(obj){
  let newobj = {}

  function flat(obj, key=""){
    if(Object.prototype.toString.call(obj).slice(8, -1) !== "Object"){
      newobj[key] = obj
    }else{
      for(let subkey in obj){
        if(key) flat(obj[subkey], key + "-" + subkey)
        else flat(obj[subkey], subkey)
      }
    }
  }

  flat(obj)
  return newobj
}

console.log(myflat(obj1))
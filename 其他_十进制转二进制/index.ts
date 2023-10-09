import ArrayStack from '../其他_栈实现/array-stack'

function decToBin(num: number): string {
  if(num === 0) {
    return '0'
  }

  const resArr = new ArrayStack<number>()

  while(num) {
    let curBin = num % 2
    resArr.push(curBin)
    num = Math.floor(num / 2)
  }

  let resStr = ''
  while(!resArr.isEmpty()) {
    resStr += resArr.pop()
  }

  return resStr
}

console.log(decToBin(21))

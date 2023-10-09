import ArrayStack from "../其他_栈实现/array-stack"

function isRight(target: string): boolean {
  if(target === ')' || target === ']' || target === '}') {
    return true
  }

  return false
}

function getOrther(target: string): string {
  switch(target) {
    case ')':
      return '('
    case ']':
      return '['
    case '}':
      return '{'
  }

  return ''
}

function isValid(target: string): boolean {
  let resStack = new ArrayStack<string>()

  for(let item of target) {
    
    if(isRight(item)) {
      if(resStack.pop() !== getOrther(item)) {
        return false
      }
    }else {
      resStack.push(item)
    }
  }

  return resStack.isEmpty() ? true : false
}

console.log(isValid('()[[{}]]'))
console.log(isValid('[()[[{}]]'))

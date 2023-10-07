import IStack from "./IStack"

class ArrayStack<T> implements IStack<T> {
  private _arr: T[] = []

  push(item: T): void {
    this._arr.push(item)
  }

  pop(): T | undefined {
    return this._arr.pop()
  }

  peek(): T | undefined {
    return this._arr[this._arr.length - 1]
  }

  isEmpty(): boolean {
    return this._arr.length === 0
  }

  size(): number {
    return this._arr.length
  }
}

const stack1 = new ArrayStack<Number>()
stack1.push(1)
stack1.push(23)
stack1.push(99)

console.log(stack1.pop())
console.log(stack1.peek())
console.log(stack1.isEmpty())
console.log(stack1.size())

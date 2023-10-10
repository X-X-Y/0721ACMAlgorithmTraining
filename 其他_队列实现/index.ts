import IQueue from './IQueue'

class ArrayQueue<T> implements IQueue<T> {
  private _arr: T[] = []

  enqueue(item: T): void {
    this._arr.push(item)
  }

  dequeue(): T | undefined {
    return this._arr.shift()
  }
  peek(): T | undefined {
    return this._arr[0]
  }

  isEmpty(): boolean {
    return this._arr.length === 0
  }

  get size(): number {
    return this._arr.length
  }
}

export default ArrayQueue

const queue = new ArrayQueue<number>()

queue.enqueue(11)
queue.enqueue(22)
queue.enqueue(33)

// console.log(queue.dequeue())
// console.log(queue.peek())
// console.log(queue.isEmpty())
// console.log(queue.size)

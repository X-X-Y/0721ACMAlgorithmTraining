import ArrayQueue from '../其他_队列实现'

function iceBreakingGame(num: number, target: number): number {
  const queue = new ArrayQueue<number>()

  for(let i = 0; i < num; i++) {
    queue.enqueue(i)
  }

  while(queue.size > 1) {
    for(let i = 1; i < target; i++) {
      let temp = queue.dequeue()
      queue.enqueue(temp!)
    }
    queue.dequeue()
  }
  
  return queue.peek() ? queue.peek()! : 0
}

console.log(iceBreakingGame(7, 4))
console.log(iceBreakingGame(12, 5))
console.log(iceBreakingGame(1, 6))

// 超出时间限制  26 / 36 个通过的测试用例

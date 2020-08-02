const Stack = require('./Stack')

//Exercise 4
const stack1 = new Stack()
const stack2 = new Stack()

stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)

const swap = function(stk1, stk2, stk3 = new Stack()) {
  if (stk1.peek() === null) return
  stk3.push(stk1.pop())
  swap(stk1, stk2)
  stk2.push(stk3.pop())
}

console.log('START')
stack1.print()
stack2.print()
swap(stack1, stack2)
console.log('END')
stack1.print()
stack2.print()

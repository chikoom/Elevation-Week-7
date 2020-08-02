class Stack{
  constructor(){
    this.stack = []
    this.length = 0
  }
  print(){
    console.log(this.stack)
  }
  push(item){
    this.stack[this.length++] = item
  }
  isEmpty(){
    return (this.length === 0)
  }
  peek(){
    return this.stack[this.length-1] || null
  }
  pop(){
    if(this.peek() === null) return null
    const objToReturn = this.stack[this.length-1]
    this.stack[this.length-1]=null
    this.length--
    this.stack.length = this.length
    return objToReturn
  }
}

module.exports = Stack
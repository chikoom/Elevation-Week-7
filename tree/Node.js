class Node {
  constructor(value) {
    this.value = value || null
    this.leftChild = null
    this.rightChild = null
  }
  print() {
    console.log(this)
  }
  insertLeft(value) {
    if (!this.leftChild) {
      this.leftChild = new Node(value)
    } else {
      let newNode = new Node(value)
      newNode.leftChild = this.leftChild
      this.leftChild = newNode
    }
  }
  insertRight(value) {
    if (!this.rightChild) {
      this.rightChild = new Node(value)
    } else {
      let newNode = new Node(value)
      newNode.rightChild = this.rightChild
      this.rightChild = newNode
    }
  }
}

// const node = new Node(1)

// node.insertLeft(2)
// node.insertRight(3)
// node.insertLeft(4)
// node.insertRight(5)
// console.log(node)

module.exports = Node

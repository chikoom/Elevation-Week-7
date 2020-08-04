const Node = require('./Node')
class BSNode extends Node {
  constructor(value) {
    super(value)
  }
  insertNode(value) {
    if (!this.value) {
      this.value = value
    } else if (value > this.value && this.rightChild) {
      this.rightChild.insertNode(value)
    } else if (value <= this.value && this.leftChild) {
      this.leftChild.insertNode(value)
    } else if (value <= this.value) {
      this.leftChild = new BSNode(value)
    } else if (value > this.value) {
      this.rightChild = new BSNode(value)
    }
  }
  findNode(value) {
    let answer = false
    if (this.value === value) answer = true
    else if (value > this.value && this.rightChild) {
      answer = this.rightChild.findNode(value)
    } else if (value <= this.value && this.leftChild) {
      answer = this.leftChild.findNode(value)
    }
    return answer
  }
  findNodeAndReturnIt(value) {
    let answer = null
    if (this.value === value) answer = this
    else if (value > this.value && this.rightChild) {
      answer = this.rightChild.findNodeAndReturnIt(value)
    } else if (value <= this.value && this.leftChild) {
      answer = this.leftChild.findNodeAndReturnIt(value)
    }
    return answer
  }
  getPathTO(value) {
    let answer = []

    if (this.value === value) answer.push(value)
    else if (value > this.value && this.rightChild) {
      answer.push(this.value)
      answer = [...answer, ...this.rightChild.getPathTO(value)]
    } else if (value <= this.value && this.leftChild) {
      answer.push(this.value)
      answer = [...answer, ...this.leftChild.getPathTO(value)]
    }
    console.log(answer)
    return answer
  }
  findCommonParent(val1, val2) {
    if (
      (this.leftChild.value === val1 && val2 <= this.value) ||
      (this.leftChild.value === val2 && val1 <= this.value) ||
      (this.rightChild.value === val1 && val1 > this.value) ||
      (this.rightChild.value === val2 && val2 > this.value)
    ) {
      return this.value
    }
    if (
      (val1 <= this.value && val2 > this.value) ||
      (val2 <= this.value && val1 > this.value)
    ) {
      return this.value
    } else if (val1 <= this.value && val2 <= this.value) {
      return this.leftChild.findCommonParent(val1, val2)
    } else if (val1 > this.value && val2 > this.value) {
      return this.rightChild.findCommonParent(val1, val2)
    } else {
      return null
    }
  }
  findNodeAndReturnItWithParent(parent, value) {
    let answer = null
    if (this.value === value) answer = { parent: parent, node: this }
    else if (value > this.value && this.rightChild) {
      answer = this.rightChild.findNodeAndReturnItWithParent(this, value)
    } else if (value <= this.value && this.leftChild) {
      answer = this.leftChild.findNodeAndReturnItWithParent(this, value)
    }
    return answer
  }
  findMaxNode(parent) {
    if (parent.rightChild === null) return parent
    if (parent.rightChild) return this.findMaxNode(parent.rightChild)
  }
  findMinNode(parent) {
    if (parent.leftChild === null) return parent
    if (parent.leftChild) return this.findMaxNode(parent.leftChild)
  }
  removeNode(parent, value) {
    let ParentAndNode = this.findNodeAndReturnItWithParent(parent, value)
    if (
      // NODE HAS NO CHILDREN
      ParentAndNode.node.leftChild === null &&
      ParentAndNode.node.rightChild === null
    ) {
      if (ParentAndNode.node.value <= ParentAndNode.parent.value) {
        ParentAndNode.parent.leftChild = null
      } else {
        ParentAndNode.parent.rightChild = null
      }
    } else if (
      // NODE HAS CHILD LEFT
      ParentAndNode.node.leftChild !== null &&
      ParentAndNode.node.rightChild === null
    ) {
      if (ParentAndNode.node.value <= ParentAndNode.parent.value) {
        ParentAndNode.parent.leftChild = ParentAndNode.node.leftChild
      } else {
        ParentAndNode.parent.rightChild = ParentAndNode.node.leftChild
      }
    } else if (
      // NODE HAS CHILD RIGHT
      ParentAndNode.node.leftChild === null &&
      ParentAndNode.node.rightChild !== null
    ) {
      if (ParentAndNode.node.value <= ParentAndNode.parent.value) {
        ParentAndNode.parent.leftChild = ParentAndNode.node.rightChild
      } else {
        ParentAndNode.parent.rightChild = ParentAndNode.node.rightChild
      }
    } else if (
      // NODE HAS TWO CHILDREN
      ParentAndNode.node.leftChild !== null &&
      ParentAndNode.node.rightChild !== null
    ) {
      let maxToTheLeft = this.findMaxNode(ParentAndNode.node.leftChild)
      let maxToTheLeftValue = maxToTheLeft.value
      this.removeNode(ParentAndNode.node, maxToTheLeft.value)
      ParentAndNode.node.value = maxToTheLeftValue
    }
    return this
  }
}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4, 13]
let nodeWithOneChild = new BSNode()
numbers.forEach(n => nodeWithOneChild.insertNode(n))

// console.log(nodeWithOneChild.findMaxNode(nodeWithOneChild))

console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 3))

//nodeWithOneChild.print()

// will return tree like the first image (the 9 will be deletied)

// let nodeWithTwoChildren = new BSNode()
// numbers.forEach(n => nodeWithTwoChildren.insertNode(n))
// console.log(nodeWithTwoChildren.removeNode(nodeWithTwoChildren, 8)) // will return tree like the second image (the root will be 5)

// let BS = new BSNode(10)
// BS.insertNode(1)
// BS.insertNode(3)
// BS.insertNode(9)
// BS.insertNode(4)
// BS.insertNode(6)
// BS.insertNode(3)
// BS.insertNode(5)
// BS.insertNode(7)
// BS.insertNode(2)
// BS.insertNode(5)
// BS.insertNode(56)
// //BS.print()
// console.log(BS.findNode(6))

// const dummyValues = ['J', 'H', 'R', 'E', 'S', 'P', 'G', 'B', 'L', 'Y', 'I']
// let BSL = new BSNode()
// for (letter of dummyValues) {
//   BSL.insertNode(letter)
// }
// BSL.print()
// console.log(BSL.findCommonParent('B', 'I')) //should return "H"
// console.log(BSL.findCommonParent('B', 'G')) //should return "E"
// console.log(BSL.findCommonParent('B', 'L')) //should return "J"
// console.log(BSL.findCommonParent('L', 'Y')) //should return "R"
// console.log(BSL.findCommonParent('E', 'H')) //should return "J"

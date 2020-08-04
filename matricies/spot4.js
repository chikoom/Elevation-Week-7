
const rows = 5
const cols = 5
let counter = 1
const matrix = []

for ( let r = 0 ; r < rows ; r++) {
  const row = []
  for ( let c = 0 ; c < cols ; c++) {
    row.push(counter++)
  }
  matrix.push(row)
}


const printAllNums = matrix => {
  matrix.forEach(row => {
    row.forEach(col => {
      console.log(col)
    })
  })
}


const getNum = (matrix,rowNum,colNum) => {
  console.log(matrix[rowNum][colNum])
}


const printMatrix = matrix => {
  let str = ''
  matrix.forEach(row => {
    row.forEach(col => {
      str += col+'\t'
    })
    str += '\n'
  })

  console.log(str)
}

printMatrix(matrix)
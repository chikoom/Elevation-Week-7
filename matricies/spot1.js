
const rows = 4
const cols = 2
let counter = 1
const matrix = []

for ( let r = 0 ; r < rows ; r++) {
  const row = []
  for ( let c = 0 ; c < cols ; c++) {
    row.push(counter++)
  }
  matrix.push(row)
}

console.log(matrix)


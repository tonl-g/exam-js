let tab = [
    [1, 2, 3],
    [4, -5, 7],
    [-3, -6],
    [10, -13],
  ]
  
  let sum = 0
for (let i = 0; i < tab.length; ++i) {
  for (let j = 0; j < tab[i].length; ++j) {
    for (let k = 0; k < tab[i][j].length; ++k) {
      sum += tab[i][j][k]
    }
  }
}
console.log(`sum = ${sum}`)

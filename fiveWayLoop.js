/* Même exercice que précédemment mais ajouter deux boucles do-while et while pour effectuer le traitement. */

// Do while

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = 0
do {
  console.log(`Firstname = ${tab[i]} Length = ${tab[i].length}`)
  i = i += 1
} while (i < tab.length)

// While

const tab1 = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let j = 0
while (j < tab1.length) {
j++
}

console.log(`Firstname = ${tab1[0]} Length = ${tab1[0].length}`)
console.log(`Firstname = ${tab1[1]} Length = ${tab1[1].length}`)
console.log(`Firstname = ${tab1[2]} Length = ${tab1[2].length}`)
console.log(`Firstname = ${tab1[3]} Length = ${tab1[3].length}`)
console.log(`Firstname = ${tab1[4]} Length = ${tab1[4].length}`)

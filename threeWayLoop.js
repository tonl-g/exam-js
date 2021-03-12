/* Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement. Ce traitement consistera à afficher tous les éléments d'un tableau de string suivis de leur taille. Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] nous obtiendrons l'affichage suivant 3 fois (1 fois par loop):

Alice, length: 5
Bob, length: 3
Charlie, length: 7
Dan, length: 3
Eve, length: 3 */

// For

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let i = 0; i < tab.length; i++) {
    console.log(`Firstname = ${tab[i]} Length = ${tab[i].length}`)
}

// For of

const tab1 = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (let elem of tab1) {
    console.log(`Firstname ${elem} Length = ${elem.length}`)
  }

// For each

const tab2 = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

tab2.forEach((elem) => {
    console.log(`Firstname ${elem} Length = ${elem.length}`)
  })

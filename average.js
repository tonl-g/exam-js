/* Ecrire une fonction average qui prend comme paramètre un tableau de number et retourne la moyenne de tous les nombres de ce tableau. */

const average = (array) => {
    return array.reduce((a, b) => (a + b)) / array.length
}

console.log(average([10, 20, 90, 40, 50]))
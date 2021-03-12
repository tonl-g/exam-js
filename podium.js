/* Ecrire une fonction podium qui prend comme paramètre un tableau de number et affiche les 3 meilleures notes tel que ci dessous:

1st: 20
2nd: 18
3rd: 14 */

const podium = (array) => {
    array.slice().sort(function(a,b){return b-a})
    return console.log(`1st = ${[0]} 2nd = ${[1]} 3rd = ${[2]}`)
}

console.log(podium([4, 7, 9, 23]))
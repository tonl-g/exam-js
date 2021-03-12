/* Ecrire une fonction numberPyramid qui prend 1 paramètre qui correspondra à la base de la pyramide. Cette fonction affichera une pyramide dont les motifs pour chaque étage correspondra au numéro de la ligne.

numberPyramid(8)
affichera:

1
22
333
4444
55555
666666
7777777
88888888
numberPyramid(5)
affichera:

1
22
333
4444
55555 */

const pyramyd = (base) => {
    for (let i = base; i <= base; ++i) {
        console.log(base.repeat(i))
    }
}
  
console.log(pyramyd(5))
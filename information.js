/* Lisez cet exercice entièrement avant de commencer.
Ecrire une fonction information qui prend 3 paramètres:

un prénom qui sera une string
un nom qui sera une string
un âge qui sera un number
Cette fonction devra afficher le message suivant en fonction des paramètres:

information('Sofiane', 'Akermoun', 39)
affichera:

prenom: Sofiane
nom: Akermoun
age: 39
vous êtes majeur depuis 21 ans
information('Alice', 'Liddell', 7)
affichera:

prenom: Alice
nom: Liddell
age: 7
vous serez majeur dans 11 ans
Pour notre exercice l'âge de la majorité est 18 ans et ne vous souciez pas de la gestion du singulier/pluriel dans votre affichage. */

const MAJOR = 18

const information = (firstName, lastName, age) => {
    if (age < MAJOR) {
        let differenceAge = MAJOR - age
        return console.log(`Prénom = ${firstName} Nom = ${lastName} Age = ${age} Vous êtes majeur depuis ${differenceAge} ans`)
    } else {
        let differenceAge = age - MAJOR
        console.log(`Prénom = ${firstName} Nom = ${lastName} Age = ${age} Vous êtes majeur depuis ${differenceAge} ans`)
    }
}

console.log(information('Ton', 'L-G', 32))
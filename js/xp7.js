// Exercice 7 : Groupe Secret

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.
let entreprise = ""
let afficheNames = names.sort ()
for (const names of  afficheNames) {
    console.log( names)
    entreprise = entreprise + names[0]
}
// Indice : une chaîne est un tableau de lettres
// Console.log le nom de leur société secrète. La sortie doit être "ABJKPS"
console.log(entreprise)

// Exercice 5 : Famille
// Des Instructions
// Créez un objet appelé famille avec quelques paires clé-valeur.

let family = {
    father : "Arsene",
    mum : "agnes",
    wife : "habibi"
}
for ( const basec in family ){
    console.log ( "the basec of our family: " + basec )
}
// A l' aide d'une for inboucle, console.log les clés de l'objet.
// À l' aide d'une for inboucle, console.log les valeurs de l'objet.

for (const basec in  family ){
    console.log ( family [ basec ])
}
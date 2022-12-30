// Exercice 2 : Vos Couleurs Préférées
// Des Instructions


// Create an array called colors where the value is a list of your five favorite colors.

let color = ["blanc", "noire", "rouge", "belge"]

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
 for  ( let colorChoice in color){
    console.log( "Mon choix numero " + colorChoice + " est " +color[colorChoice]);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

// Hint : create an array of suffixes to do the Bonus
 for ( let colorChoice of color){
    if (colorChoice === " blanc " ){
        console.log( "My 1est ")
    }
    else if (colorChoice === " noire " ){

    }

    if (colorChoice === " rouge " ){
        console.log( "My 2nd ")
    }
    else if (colorChoice === " belge " ){

    } 
 }

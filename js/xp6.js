// Exercice 6 : Rodolphe

// Des Instructions

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer',
  }
  // Étant donné l'objet ci-dessus et en utilisant un for loop, console.log "mon nom est Rudolf le raindeer
  
  let decision = ""
  for (let house in details ) {
  
    decision = decision + " " + house + " " +  details[house]
    
}  
console.log(decision)



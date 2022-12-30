// Exercice 1 : Liste Des Personnes
// Des Instructions

// Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];
people.shift("Greg")

// Write code to replace “James” to “Jason”.

people.splice( 3,1, "Jason" )

// Write code to add your name to the end of the people array.

people.splice( 4,1, " Nzo " )

console.log(people)
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf ( "Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
console.log(people.slice (1))

// Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo")) // it returns -1 because the string is not declared beforehand in the array so it cannot be found

// Create a variable called last which value is the last element of the array.

const last = people.length;
console.log(people.slice (4, + last))
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

//  explication:

// to have the size of the table we do the index + 1 because the table or the data of the table starts with 0

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

for ( const brother of people ){
    console.log("this person " + brother )
} 

for  ( const brother of people ){
    if (brother === "Jason"){
        console.log(brother);
        break;
    } 
}

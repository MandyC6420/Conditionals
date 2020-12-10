//CONDITIONALS

if(2 + 2 === 4){
        console.log("We can Math!")
}

let myName = "Jordan"

if(myName === "Mandy" || myName === "Jordan"){
        console.log("Where's the Pizza")
// }else if(myName === "Jordan"){
//         console.log("Hi Jordan")
}
else{
    console.log("You should be Mandy!")
}

let isHungry = true 

if(isHungry){
    console.log("You should go eat!")
}

let a = 2
let b = 3
let c = 4

if(a + b === 5 && b + c === 8){
        console.log("You Rock!")
}else{
    console.log("bad math")
}


// Lightning Exercise
// Bon Voyage!
// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
let likesToTravel = true
if(likesToTravel === true){
    console.log("Bon Voyage!")
}

else {
    console.log("Enjoy your Couch!")
}
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

// Lightning Exercise
// Fried Pickles are the Best
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.

let favoriteFood = "Pizza"
    
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.
if(favoriteFood === "Fried Pickles" || favoriteFood === "Pepperoni Rolls"){
        console.log("Congratulations! You have excellent taste!")
}
else{
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.")
}

// Check Your Math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
if(1 + 1 >= 5){
    console.log("True Fact!")
}else {
    console.log("LIES!")//should log LIES
}
// Is the product of 4 and 5 less than our equal to 20?
if(4 + 5 <= 20){
    console.log("True Fact!")//logs true fact
}else{
    console.log("LIES!")
}
// Is the difference between 6 and 2 greater than or equal to 0?
if(6-2 >= 0){
    console.log("True Fact!")//logs true fact
}else{
    console.log("LIES!")
}


// Dog People vs. Cat People
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
let likesDogs = true
// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.
if(likesDogs === false){
    console.log("You're a dog person!")
}else{
    console.log("You're a cat person!")
}

// Generation Gaps
// Declare a variable called birthYear and set it equal to your birth year.
let birthYear = 1989
// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
if(birthYear === 1989){
    console.log("I'm a Millenial")
}else{
    console.log("You're not a Millenial so sorry!")
}
// Try changing the value of birthYear and see what happens.

// Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
let nameObject = {
    firstName: "Mandy",
    preferredLanguage: "French"
}
if(nameObject.preferredLanguage === "English"){
    console.log("Hello, Mandy")
}else{
    if(nameObject.preferredLanguage === "Spanish"){
        console.log("Hola, Mandy")
    }
}if(nameObject.preferredLanguage === "French"){
    console.log("Bonjour, Mandy")
}

// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.
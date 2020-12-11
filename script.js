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
if(birthYear === 1972){
    console.log("I'm a Millenial")
}else{
    console.log("You're not a Millenial so sorry!")
}
// Try changing the value of birthYear and see what happens.

// Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
let nameObject = {
    firstName: "Mandy",
    preferredLanguage: "English"
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

// Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
let time = "7:30 AM"
// A variable called isHungry that stores a boolean representing whether or not you're hungry
let isVeryHungry = true
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
if (time === "7:30 AM" && isVeryHungry === true){
    console.log("Time for breakfast!");
}else if(time === "12:00 PM" && isVeryHungry === true){
    console.log("Time for lunch!");
}else if((time === "7:00 PM" || time === "8:00 PM") && isVeryHungry === true){
    console.log("Time for Dinner!");
}else if(isVeryHungry === true){
    console.log("Time for a snack!");
}else{
    console.log("Have a cookie anyway!")
}
// If it's 12:00 PM and you're hungry, log "Time for lunch!" to the console
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
// If you're hungry, log "Time for a snack!" to the console.
// If none of the above are true, log "Have a cookie anyway!" to the console.
// Try changing the values of your variables. You should get different results every time you change them.

// Student Grades
// In your JavaScript file, declare a new variable called grade and give it a number value between 0 and 100.
// Write a conditional that converts the number grade to a letter grade:
// If the value of grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
// If it's between 70 and 76, log "You got a D" to the console.
// If it's between 77 and 84, log "You got a C" to the console.
// If it's between 84 and 92, log "You got a B" to the console.
// If it's between 93 and 100, log "You got an A" to the console.

let grade = "67"

if(grade <= 69){
    console.log("You unfortunately have received a F");
}else if(grade = 70 && grade <= 76){
    console.log("You unfortunately have received a D.");
}else if(grade = 77 && grade <= 84){
    console.log("You got a C.");
}else if(grade = 84 && grade <= 92){
    console.log("You've got a B.")
}else if(grade = 93 && grade <= 100){
    console.log("Congratulations, you've got an A!")
}


let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

//    Use the weather data from the challenge at the bottom of the the variables and data types chapter.

// If all the high temperatures in the three day forecast are above 85, log, "It's going to be hot as heck all week!" to the console.

for(let i = 0; i < weatherForecast.length; i++)
{
    if(weatherForecast[i].temperature.low < 30){
        console.log(`${weatherForecast[i].day} will be cold as heck!`)
    }
}
// If all of the high temperatures in the three day forecast are below 40, log "It's going to be cold as heck all week!" to the console.
for(let i = 0; i < weatherForecast.length; i++){
    if(weatherForecast[i].temperature.low < 40){
        console.log("It's going to be cold all week!")
    }
}
// If any of the low temperatures are below 20, log a sentence about the specific day. Example: "Wednesday will be cold as heck!"
// If any of the high temperatures are above 95, log a sentence about the specific day. Example: "Thursday will be hot as heck!
for(let i = 0; i < weatherForecast.length; i++){
    if(weatherForecast[i].temperature.high > 95){
        console.log(`${weatherForecast[i].day} will be hot as heck!`)
    }
}


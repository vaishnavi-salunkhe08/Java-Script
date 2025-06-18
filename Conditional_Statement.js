console.log("Conditional Statements in JavaScript");
console.log("------------IF-ELSE STATEMENT------------");
// Example of if-else statement
let age = 17;
if(age >= 18){
    console.log("You are eligible to vote.");
    console.log("You can register to vote.");
    console.log("you can make license.");
    console.log("You can open a bank account.");
}
else{
    console.log("You are not eligible to vote.");
    console.log("You cannot register to vote.");
    console.log("You cannot make license.");
    console.log("You cannot open a bank account.");
}
console.log("");
let nav = "vasihnavi";
if(nav === "vaishnavi"){
    console.log("Hello Vaishnavi, welcome to the JavaScript world!");
}
else{
    console.log("Hello,welcome!");
}

console.log("");
console.log("Q: TRAFFIC LIGHT SIGNALS");
let trafficLight = "green";
if(trafficLight === "red"){
    console.log("Stop! The traffic light is red.");
}
else if(trafficLight === "yellow"){
    console.log("Caution! The traffic light is yellow.");
}
else if(trafficLight === "green"){
    console.log("Go! The traffic light is green.");
}

console.log("");
console.log("------------ELSE-IF------------");
// Example of else-if statement
let score = 85;
if(score >= 90){
    console.log("Grade: A+");
}
else if(score >= 80){
    console.log("Grade: A");
}
else if(score >= 70){
    console.log("Grade: B");
}
console.log("");
console.log("Q: POPCORN PRICES ");
let popcornSize = "XL";
if(popcornSize === "XL"){
    console.log(`price of ${popcornSize} popcorn is 250`);
}
else if(popcornSize === "L"){
    console.log(`price of ${popcornSize} popcorn is 200`);
}
else if(popcornSize === "M"){
    console.log(`price of ${popcornSize} popcorn is 100`);
}
else if(popcornSize === "S"){
    console.log(`price of ${popcornSize} popcorn is 50`);
}
else{
    console.log("Invalid popcorn size selected.");
}

console.log("");
console.log("------------NESTED IF-ELSE------------");
// Example of nested if-else statement
let temperature = 30;
if(temperature > 0){
    console.log("The temperature is above freezing.");
    if(temperature > 30){
        console.log("It's a hot day.");
    }
    else{
        console.log("It's a pleasant day.");
    }
}

console.log("");
console.log("Q: CHECKING WHETHER A STRING IS GOOD OR BAD");
let strName = "apple";
if((strName[0] === "a") && (strName.length > 3)){
    console.log("The string is good.");
}
else{
    console.log("The string is bad.");
}

console.log("");
console.log("------------SWITCH STATEMENT------------");
// Example of switch statement  
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}
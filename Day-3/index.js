// 1. Datatypes
// String
// Number
// Boolean
// undefined
// null
// 2. Varible
// var
// let
// const
// Comparision operator , == , === , < , >
// Conditional statements
// 1. if else
// 2. switch
// Logical Operators
// && and operator,  || or operator

// Driving license
// 18 => Learning
// 18 > dl  and < 90
// 18 < no dl


var age = 90; // input element

if( age == 18 ){
    console.log("You are eligible for Learning License.")
} else if( 91 > 18  && age < 90 ){
    console.log("You are eligible for Driving License.")
} else {
    console.log("You are not eligible.")
}

// && - and operator
// it returns single output with multiple conditions

console.log(2 > 1, 2 < 3); // true
console.log(2 < 3); // true

console.log(2 < 1 && 2 < 3 && 3 < 4 && 5 < 6);
// when all conditions are true then it'll return true
// if single/double/multiple condition is false then it'll return false

console.log(2 < 1 || 2 > 3 || 4 > 5);
// if single/double/multiple conditions are true then it'll return true
// when all condition are false then only it'll return false

// switch (key) {
//     case value:
//         console.log()
//         break;

//     default:
//         break;
// }

var fruit = "banana";

switch (fruit) {
  case "banana":
    console.log("You have selected banana.");
    break;
  case "watermelon":
    console.log("You have selected watermelon.");
    break;
  case "strawberry":
    console.log("You have selected strawberry.");
    break;
  default:
    console.log("Selceted fruit is not available.");
}



string
number
Boolean
undefined
comparision operators , == , === , < >
var
let
const
Conditional statement
if else

difference between var let and const
                var         let         const
reassign        true        true         false
redeclare       true        false        false
scope      global/function block-scope   block-scope
hoisting        true        false         false

let -> varible
let kuchbhi = 12;
console.log(kuchbhi);
kuchbhi = 14;
console.log(kuchbhi);
let kuchbhi = 16;
console.log(kuchbhi);

const myNumber = 20;
console.log(myNumber);
myNumber = 30;
console.log(myNumber);
const myNumber = 40;
console.log(myNumber);
{

} -> block

{
  var myNumber = 20;
  console.log(myNumber);
}
console.log(myNumber);

{
  {
    let myNumber = 20; // first version
    console.log(myNumber);
  }
  console.log(myNumber);
}
console.log(myNumber);

{
  {
    const myNumber = 20; // first version
    console.log(myNumber);
  }
  console.log(myNumber);
}
console.log(myNumber);

Hoisting

var myNumber;
console.log(myNumber, typeof(myNumber));

line by line execution
2 rounds

initilization
execution

myNumber = 20;
console.log(myNumber);
var myNumber;
myNumber = 20;
console.log(myNumber);
let myNumber;
myNumber = 20;
console.log(myNumber);
const myNumber;

var number = 20;
console.log(number);
number = 30;
console.log(number);

Conditional statement  -> multiple conditions ->

var number1 = 30;
var number2 = 30;
if else
if(conditions){
    statement 1
} else {
    statement 2
}

console.log(number1 > number2);

console.log(number1 == number2);

if (number1 > number2) {
  // if -> true
  console.log("number1 is greater.");
} else if (number1 == number2) {
  // else if -> true
  console.log("number1 is equal to number2.");
} else if (number1 == number2) {
  // else if -> true
  console.log("number1 is equal to number2.");
} else {
  // false
  console.log("number2 is greater.");
}




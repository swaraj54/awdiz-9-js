// 1. Datatypes
// String
// Number
// Boolean
// undefined
// null - pending
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
// inbuilt functions console.log() typeof()
// we can create our own functions
// function -> its provide functionality / usecase
// function -> store multiple lines of code

function kuchbhi() {
  console.log("inside a function.");
}
kuchbhi();
kuchbhi();
kuchbhi();
kuchbhi();
kuchbhi();
kuchbhi();

console.log("outside a function.");






function addition() {
  var number1 = 10;
  var number2 = 20;
  console.log(number1 + number2);
}
addition();





function findGreaterNumber() {
  var number1 = 9387687687645;
  var number2 = 879080979796;
  if (number1 > number2) {
    console.log("Number 1 is greater than Number 2");
  } else {
    console.log("Number 2 is greter than number 1.");
  }
}
findGreaterNumber();





var number1 = 20;
var number2 = 30;
function subtraction(value1, value2) {
  console.log(value1 - value2);
}
subtraction(number2, number1);





function multiplication(value1, value2) {
  var answer = value1 * value2;
  console.log("before return");
  return answer; //  execution stop
  console.log("After return");
}

var output = multiplication(2, 3); // its going to provide data
console.log(output);



assignment 
// create a function who return odd or even values, take single input as parameter 
var number = 234;
"odd" , "even"

function findOddOrEven(){}

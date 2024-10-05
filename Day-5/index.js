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
// function -> its provide functionality / usecase , write multiple lines of code
// array

var number = 40;
var target = 50;

function checkNumberIsGreaterThanTarget(number, target) {
  if (target > number) {
    return "Target is greater than number.";
  } else if (target == number) {
    return "Number is greater than target.";
  }
  console.log("after if condition false.");
}

console.log(checkNumberIsGreaterThanTarget(number, target));
















var number = 27;

function findNumberIsEvenOrOdd(number) {
  //   console.log(number % 2);
  if (number % 2 == 0) {
    return "number is even";
  } else {
    return "number is odd.";
  }
}

console.log(findNumberIsEvenOrOdd(number));

// 20 / 2 => 10

// 20 % 2 => 0,1

//    _____   10 -> quotient
// 2 /  20
//      20
//       0 -> remainder

// if number even then remainder is 0
// if number is odd then reminder is 1

// array  [ , , , , ]







var myAge = 25;

var students = [myAge, [0,1,2], "Usman", true, false, 33, "kalim", "aadrsh", "swaraj"];
console.log(students);








var students = ["Usman", "kalim", "aadrsh", "swaraj", "last element", "HII", 2];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[3]);
// [] property caculates elements from 0










console.log(students.length);
console.log(students.length - 1);
console.log(students[students.length - 1]);
console.log(students[Math.ceil(students.length / 2) - 1]);
// length property calculates elements from 1






console.log(Math.floor(10.5)); // 10
console.log(Math.ceil(10.5)); // 11










var array = [1, 2, 3, 4, 5];

array.push("eda");
// array.pop();
// array.pop();
// array.unshift(0);
// array.shift();
console.log(array);

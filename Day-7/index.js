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
// loops -> for , while













Q Print numbers from 30 - 60, with range of 5.

for (let i = 30; i < 61; i += 5) {
  console.log(i);
}



















Q Print numbers from 50 - 100, with range of 3 and count them.

var count = 0; // 1, 2 , 3 , 4
for (let i = 50; i <= 60; i += 3) {
  count++;
  console.log(count, "inside for loop block");
}
// 50
// 53
// 56
// 59
// 62
console.log(count, "outside for loop block");





















Q Print numbers from 10 - 50,
with range of 2
and add 10 for every element
and return in array;

// 10 + 10 = 20 ,
// 12 + 10 = 22 ,
// 14 + 10 = 24 ,
// 16 + 10 = 26 ,
// ...
// 50 + 10 = 60

// [20, 22, 24, 26, ..., 60]

var starting = 10;
var ending = 50;
var sequence = 2;

function PrintNumbers(starting, ending, sequence) {
  //   console.log(starting, ending, sequence);
  var output = [];
  for (let i = starting; i <= ending; i += sequence) {
    // console.log(i + 10);
    output.push(i + 10);
  }
  return output;
}
console.log(PrintNumbers(starting, ending, sequence));



















// Q Print count from range 233 to 456, who are odd.

var starting = 233;
var ending = 237;
var sequence = 1;

function CountOddNumbers(starting, ending, sequence) {
  //   console.log(starting, ending, sequence);
  var count = 0;
  for (var i = starting; i <= ending; i += sequence) {
    // console.log(i);
    if (i % 2 == 1) {
      count++;
    }
  }
  return count;
}
console.log(CountOddNumbers(starting, ending, sequence));

// // simple function
// function myfunc(a, b) {
//     return a + b;
// }
// console.log(myfunc(2, 3)) // output 5

// // use Object as Parameters of function
// // we can change value of an objects using function
// const cars = {
//     name: "abc",
//     company: "xyz",
//     price: "100000",

// }
// console.log(cars.name); // output abc

// function Object(cars) {
//     cars.name = "ABC";
// }

// Object(cars);
// console.log(cars.name); //output ABC

// // we ca also use an array as parameter and change array elements
// let arr = [4,6,5,8];
// console.log(arr[0]); //output 4


// function myFunc(theArr) {
//     theArr[0] = 3;
//   } 
//   myFunc(arr);
//   console.log(arr[0]); // output 30

// function fcn(n) {

//     const age = 5-n
//     return age
//   };

// The following variables are defined in the global scope
// const num1 = 20;
// const num2 = 3;
// const name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // Returns 60

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`;
//   }

//   return add();
// }

// console.log(getScore()); // Returns "Chamakh scored 5"

// function Person() {
//     this.age = 0;
  
//     setInterval(() => {
//       this.age++; // `this` properly refers to the person object
//     }, 1000);
//   }
  
//   const p = new Person();
//   console.log(p)

function reference(a, obj1, obj2){
  a = a*10;
  obj1.item = "changed";
  obj2 = {item:"changed"}
}

var num = 10;
var jay1 = {
  item:"unchanged"
}

var jay2 = {
  item:"unchanged"
}

reference(num, jay1, jay2)
console.log(num, jay1.item, jay2.item);
// =================================
// |||      Concepts to study          |||
// =================================

// * prototype inheritance
// Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
// Call and Apply

// =================================
// |||      Classes in ES6   |||
// =================================


class Person {

  constructor( name, yearOfBirth, job){
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
  }

  calculateAge(){
    let year = 2018;

    return year - this.yearOfBirth;
  }

  greeting(){

    console.log('Hello world');
    return 'Hello greeting';
  }

}


const angel = new Person('Angel', 1988, 'Programmer');

console.log(angel.calculateAge() );

console.log( angel.greeting() );


// =================================
// |||    prototype inheritance & Contructors   |||
// =================================

/*  Object */

// var emily = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };
//
// /*  Function constructor + Pascal naming convenction */
// var Person = function(name, yearOfBirth, job) {
//
//     this.name = name;
//     this.yearOfBirth = yearOfBirth ;
//     this.job = job;
//
//     console.log(
//         `Hello ${ this. name }
//         `
//       );
// }
//
// /*  Prototype inheritance */
// Person.prototype.lastName= "Smith";
//
// emily =  new Person('emily', 1990, 'Denstist');
// console.log(emily.job); // Dentist
// console.log(emily.lastName); // Smith

// console.log(personOne);

// =================================
// |||       CallBacks      |||
// =================================


// let array = [1990, 1870, 1890, 1988, 1790, 1960];
//
// function arrayCalculation(arr, callB ) {
//   let arrayResults = [ ];
//   for (var i = 0; i < arr.length; i++) {
//     arrayResults.push( callB(arr[i]) );
//   }
//   return arrayResults;
// }
//
// function callBack(arrayElement) {
//   return 2018 - arrayElement;
// }
//
// let results =  arrayCalculation(array, callBack);
//
// console.log(results);




// =================================
// |||      Module Pattern      |||
// =================================
// Wrapping a function iside of an IFEE

//
// var myModule = ( function(){
//
// var fname = "Phil";
// var lname = "Dunphy";
// var hobby = "Cracking Jokes and writing Phils-osophy";
//
// var work = function() {
//         console.log( fname + "  " + lname + "is a Realtor and his hobby is " + hobby);
// }
//
// return {
//      "hobby" : hobby,
//       "work" : work
// }
// })();
//
// myModule.fname; //  undefined
// myModule.lname; //  undefined
// myModule.hobby; // Cracking Jokes and writing Phils-osophy
// myModule.work(); // Phil Dunphy  is a Realtor and his hobby is Cracking Jokes and writing Phils-osophy
//

// =================================
// |||      Function expression / Declarations     |||
// =================================
//
// // function declaration
// function isEven(num) {
//   return num % 2 === 0;
// }
// isEven(24); // => true
//
//
// // Function Expression
// let express = function sayHi(name) {
//   console.log(`Hello, ${name}`);
// }
//
//
// express("John"); // Hello, John


// =================================
// |||      This Keyword          |||
// =================================
// https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85

// var name = 'Albert';
//
// const person = {
//   name: 'Alex',
//   greet() {
//     console.log('Hey my name is ' + this.name)
//   }
// }
// person.greet() // Hey my name is Alex

// function greet() {
//     this.name = 'a',
//     this.log = function() {
//       console.log(this.name);
//     }
// }
//
// var bar =  new greet();
//
// console.log(bar.log());




// =================================
// |||      Clousure          |||
// =================================
//
// Every function in JavaScript has a closure.
// A closure is created when you define a function 
// A closure is a method that accesses a variable "outside" itself. For example:
// //
// function sayHello(name) {
//
//   var text = 'Hello ' + name;
//
//   var say = function() {
//     // console.log(text + name);
//     return text +  ' ' + name
//   }
//   console.log(say());
// }
//
// sayHello('Joe')


// =================================
// |||      Clousure  example 2         |||
// =================================

//
// function parent() {
//   let a = 10;
//
//   function double() {
//     a = a+a;
//    console.log(a);
//   };
//
//   function square() {
//     a = a*a;
//    console.log(a);
//   }
//
//   return { double, square }
// }
//
// let { double, square } = parent();
//
// double(); // prints 20
// square(); // prints 400
// double(); // prints 800
//
//
//


// =================================
// |||      Async          |||
// =================================


// Promise using fetch

// fetch(url)
//   .then(process)
//   .then(save)
//   .catch(handleErrors)
// ;

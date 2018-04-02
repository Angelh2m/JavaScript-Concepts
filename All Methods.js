// Study





var cars = {
  data: [
    {name: 'Honda Accord', age: 14 },
    {name: 'Honda Accord', age: 14 },
  ]
}

// CALL
// ============================
// |||   CALL   |||
// ============================

var person1 = {
  firstName: 'Jon', 
  lastName: 'Kuperman'
};

var person2 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King


// APPLY
// ============================
// |||  APPLY   |||
// ============================

// var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
// var person2 = {firstName: 'Kelly', lastName: 'King'};
//
// function say(greeting) {
//     console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
// }
//
// say.apply(person1, ['Hello']); // Hello Jon Kuperman
// say.apply(person2, ['Hello']); // Hello Kelly King


// BIND
// ============================
// |||  BIND   |||
// ============================

// // console.log(cars.data[0].name);
// var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
// var person2 = {firstName: 'Kelly', lastName: 'King'};
//
// function say() {
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
// }
//
// var sayHelloJon = say.bind(person1);
// var sayHelloKelly = say.bind(person2);
//
// sayHelloJon(); // Hello Jon Kuperman
// sayHelloKelly(); // Hello Kelly King

var myObject = {
    firstname: 'Albert',
    lastname: 'Doe ',
    getFoods: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var nameFun = function(snack, hobby) {
    console.log(this.getFoods() + 'The winner!');
    console.log(this.getFoods() + ' loves ' + snack + ' and ' + hobby);
};

var name = nameFun.bind(myObject, 'Yes'); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

name('here curryng')







// CALL and APPLY

// var myObject = {
//     firstname: 'Albert',
//     lastname: 'Doe ',
//     getFoods: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
//
// var eating = function(snack, hobby) {
//     console.log(this.getFoods() + ' loves eating ' + snack + ' and ' + hobby);
// };
//
// eating.call(myObject,'sushi', 'algorithms');
//  // Pika Chu  loves sushi and algorithms
// eating.apply(myObject,['sushi', 'algorithms']);
// // Pika Chu  loves sushi and algorithms
//







// ** get an array from the arguments in a function
// Array.from(arguments)

// ============================
// |||  includes()    |||
// ============================
// returns true or false
// .includes(iteration)
// 'Blue Whale'.includes('blue'); // returns false

//** From charcode to string letter
 // String.fromCharCode(x)
 // REturn the a tring from a Unicode code

//*** Selects a letter
// val.charAt(0)


// ============================
// |||  .every() |||
// ============================
// iterates trough all the array or object

// ============================
// |||  .substring(0,6)) || substr(2,3))  |||
// ============================
// * Selects text

// var text = 'Mozilla';
//
// console.log(text.substring(2,6)); // => "zil" // 0 to number
// console.log(text.substr(2,3)); // => "zil"// Start 0 form the first number to number


// ============================
// |||  Repeat()    |||
// ============================
// string.repeat(numberofTimes);



// ============================
// |||  Slice()    |||
// ============================
// slice(1) The zero-based index at which to begin extraction
// var str = 'The morning is upon us.';
// str.slice(-3);     // returns 'us.'
// str.slice(-3, -1); // returns 'us'
// str.slice(0, -1);  // returns 'The morning is upon us'

// ============================
// |||  Splice()    |||
// ============================
// **  Removes aa part of an array
// arr.splice(0, size)
// return arr; // remainder of the array


// ============================
// |||  indexOf    |||
// ============================
// ** Tells you if the the content exist or not. It return 1 or -1 if it doesnt exist
// ============================
// |||  Slice    |||
// ============================
// **  is only for Arrays

// ============================
// |||  Split   |||
// ============================
// **  is only for words

// ============================
// |||  Filter  |||
// ============================
//**  Always takes something out



//=======================================



// Prime numbers=
// Its a prime numberhen t can't be devided evenly by any number except one and itselft

// .replace(/[\W_]/g, '')

// .substr()

//  .slice( )

// splice

 // arr.filter(Boolean);

 // includes(element);

// includes(element);
// indexOf(num);
// find all the letter are the same in two arrays
// indexOf(y[i])



// keyvalue pair
// oridinal value

/////////////////////////////////////////////////////

// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//   while (arr.length) {
//     newArr.push(arr.splice(0,size));
//   }
//   return newArr;
// }



// function rot13(str) {
//   var x;
//   // Split str into a character array
//   return str.split('')
//
//     .map( (element) => {
//
//       x = element.charCodeAt(0);
//       // return x
//
//       if (x < 65 || x > 90) {
//         return x
//       } else if( x < 78){
//         return String.fromCharCode(x + 13)
//       }
//         return  String.fromCharCode(x - 13);
//     }).join('');
// }
//
// console.log(rot13("SERR PBQR PNZC"));
//

// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2)
//   .filter( (element) => {
//     return !arr1.includes(element) || !arr2.includes(element);
//   })
// }
//
// console.log( diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) );
//

// /* lONGEST STRING */



// function largestOfFour(arr) {
//   // You can do this!

//   return arr.map( (element) =>  {

//     return element.reduce( (acc, lead) => {

//         return (acc > lead )? acc : lead;

//     })
//   });
// }



// function largestOfFour(arr) {
//
//   let value =  arr.map( (element) => {
//      return element.reduce( (acc, iterator) => {
//         if (acc < iterator ) {
//           // console.log(iterator);
//            return iterator;
//         } else{
//
//           return acc;
//         }
//       }, 0 )
//   })
//
//   return value
//
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



/* PALINDROME */



// function palindrome(str) {
//
//   let value = str.replace(/[\W_]/g, '').split('').reverse().join('');
//
//   let value1 = str.replace(/[\W_]/g, '').toLowerCase();
//
//   if (value1 === value) {
//     return true
//   } else {
//     return false
//   }
//
// }
// console.log(palindrome("eye"));
//
//




//************  Factorialize

// function factorialize(num) {
//
//     let result = num;
//     if (num === 0) {
//       return 1;
//     }
//     while(num > 1){
//         num --;
//         result *= num
//     }
//     return result
// }

// function factorialize(num) {
//   var result = num;
//   if (num === 0 || num === 1)
//     return 1;
//     while (num > 1) {
//       num--;
//       result *= num;
//   }
  // return result;
// }
// factorialize(5);


// console.log( factorialize(5) );



// var counter = 10;
//
// while(counter > 0) {
//     console.log(counter--);
// }

// function factorialize(num) {
//
//   let result = 1;
//   if(num == 0){
//     return 1;
//   }
//
//   return num * factorialize( num - 1 )
//
// }

// function factorialize(num) {
//     for (var i = 1 ; 1 < num; num--) {
//       i = num * i;
//     }
//     return i
// }
//
// console.log( factorialize(5) );

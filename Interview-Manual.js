

// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   return arr.filter(Boolean);
// }
//
// // bouncer([7, "ate", "", false, 9]);
////

// const array = [1,2,3,4,5,6];
//
// if(array.indexOf(4) -1 ){
// console.log("true 4 was found in the array")// true 4 was found in the array
// }
//
//


// ============================
// |||  Sum all primes  |||
// ============================







// function getCount(str) {
//   var vowelsCount = str.split('');
//
//   return vowelsCount.filter( letter => {
//
//     return 'aeiou'.includes(letter)
//   }).length;
//
//   // return vowelsCount;
// }
//
// console.log( getCount('abracradra') );


// ============================
// |||   Fibonacci  |||
// ============================

// function sumFibs(num) {
//       var a = 0;
//       var b = 1;
//       var result;
//
//       for (var i = 1; i <= num; i++) {
//         console.log("a " + a + "||" + 'b ' + b);
//         result = a + b;
//         a = b;
//         b = result;
//
//       }
//       return result
//
// }
//
// // test here
// console.log ( sumFibs(6) )



// ============================
// |||   HTML entity  |||
// ============================
// // * Switch Case



// function convertHTML(tem) {
//   // &colon;&rpar;
//
//   var str = tem.split('');
//
//   for (var i = 0; i < str.length; i++) {
//
//     switch(str[i]){
//       case '<':
//         str[i] = '&lt;';
//         break;
//       case '&':
//         str[i] = '&amp;';
//         break;
//       case '>':
//         str[i] = '&gt;';
//         break;
//       case '"':
//         str[i] = '&quot;';
//         break;
//       case "'":
//         str[i] = "&apos;";
//         break;
//     }
//   }
//
//   str = str.join('');
//   return str
//
// }
//
// console.log( convertHTML("Dolce & Gabbana") );






// ============================
// |||   Search and Replace  |||
// ============================

// function myReplace(str, before, after) {
//   // Find index where before is on string
//   var index = str.indexOf(before);
//
//   // console.log( after.charAt(0), after.slice(1) );
//   // Change the after word to be capitalized before we use it.
//   after = after.charAt(0).toUpperCase() + after.slice(1);
//
//   // Now replace the original str with the edited one.
//   str = str.replace(before, after);
//
//   return str;
// }
//
// // test here
// console.log( myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") );
//

// ============================
// ||| Roman Numbers   |||
// ============================

// var convertToRoman = function(num) {
//
//   var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
//   var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
//
//   var romanized = '';
//
//   for (var i = 0; i < decimalValue.length; i++) {
//     // Give me all the roman numbers
//
//     while ( decimalValue[i] <= num) {
//       console.log( decimalValue[i] <= num, i  + "*********");
//       console.log( decimalValue[i] <= num );
//       console.log( decimalValue[i] );
//       console.log(romanNumeral[i]);
//
//       romanized += romanNumeral[i];
//       num -= decimalValue[i]
//
//     }
//
//   }
//
//
//   return romanized;
// }
//
// // test here
// console.log( convertToRoman(36) );



// ============================
// ||| Sum All Numbers in a Range    |||
// ============================

//
//
// function sumAll(arr){
//
//   var sum = 0;
//   var min = Math.min(...arr);
//   var max = Math.max(...arr);
//
//
//   for (var i = min; i <= max; i++) {
//     sum += i;
//   }
//
//   return sum;
//
// }
//
// console.log( sumAll([1, 4]) );



// ============================
// ||| Return Largest Numbers in Arrays Complete   |||
// ============================


// function largestOfFour(arr) {
//
//   let x = arr.map( element => {
//
//     return element.reduce( (acc, iterator) => {
//       if (acc > iterator) {
//         return acc
//       }else {
//         return iterator
//       }
//     })
//
//   });
//
//   return x
//
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//


// ============================
// |||   Confirm Ending    |||
// ============================

// function confirmEnding(str, target) {
//
//   return str.substr(-target.length) === target;
// }
//
// console.log(confirmEnding("Bastian", "n"))
//
//
// confirmEnding("Bastian", "n");




// ============================
// ||| Confirm the Ending Complete    |||
// ============================



// function truncateString(str, num) {
//
//   var x = str.slice(0, num - 3) + "...";
//   return x
// }
//
// console.log( truncateString("A-tisket a-tasket A green and yellow basket", 11) );





// ============================
// |||  Chunky Monkey  |||
// ============================
// ** split an array

// function chunkArrayInGroups(arr, size) {
//
//   var newArray = [];
//
//   while( arr.length ){
//     // console.log('times',arr.splice(0, size) );
//     newArray.push( arr.splice(0, size) )
//   }
//
//   return newArray
//
//   // arr.splice(0, size)
//   // return arr; // remainder of the array
//
// }
//
//
// console.log( chunkArrayInGroups(["a", "b", "c", "d"], 2) );


// ============================
// |||  Slasher Flick  |||
// ============================
// ** using splice

// function slasher(arr, howMany) {
//
//   arr.splice(0, howMany)
//
//   return arr
//
//
// }
//
// console.log( slasher(["burgers", "fries", "shake"], 1) );


// ============================
// |||  Mutations  |||
// ============================
// ** Index of

// function mutation(arr) {
//
//   let eOne = arr[0].toLowerCase();
//   let eTwo = arr[1].toLowerCase();
//
//   for (var i = 0; i < eTwo.length; i++) {
//     if (eOne.indexOf( eTwo[i] ) === -1 ) {
//       return false;
//     }
//   }
//
//   return true
//
//
// }
//
// console.log (mutation(["hello", "hey"]) );





// ============================
// |||  Falsy Bouncer   |||
// ============================



// function bouncer(arr) {
//   // Don't show a false ID to this bouncer.
//   return arr.filter( (iterator) =>{
//
//     if(iterator != Boolean){
//       return iterator
//     }
//
//   })
// }
//
// console.log(bouncer([7, "ate", "", false, 9]) );




// ============================
// |||  Seek and Destroy   |||
// ============================

//****** Use filter to remove something from an array
//**


// function destroyer(arr) {
//
//   elements = Array.from(arguments).slice(1);
//
//   return arr.filter( (iteration) =>{
//     return !elements.includes(iteration)
//   })
//
// }
//
// console.log(  destroyer([1, 2, 3, 1, 2, 3], 2, 3) );




// ============================
// |||  Where do I belong   |||
// ============================

//****** Give me the index number of a specific number in the array


// function getIndexToIns(arr, num) {
//
//   arr.push(num);
//   return arr.sort( function(a, b) {
//      return a - b;
//   }).indexOf(num);
// }
//
// console.log(getIndexToIns([40, 60], 50) );





// ============================
// |||  Caesars Cipher  |||
// ============================
//**** Give me the code number of the character


// function rot13(str) {
//   var x;
//   return str.split('').map( (element) => {
//     let x = element.charCodeAt(0)
//
//     if ( x < 65 || x > 90 ) {
//        return String.fromCharCode(x)
//     }else if (x < 78 ){
//       return String.fromCharCode(x + 13);
//     } else{
//       return String.fromCharCode(x - 13);
//     }
//   }).join('');
// }
//
// // Change the inputs below to test
// console.log( rot13("SERR PBQR PNZC") );





// ============================
// |||  Fibonacci Memoization  |||
// ============================


// ============================
// |||  Fibonacci sequence  |||
// ============================

// Fibonnaci Sequence : 1,1,2,3,5,8,13,21,34
// Sum of the previous of the last two numbers
// Recursion

// function fibonacci(position) {
//
//
//   if (position < 3) return 1;
//   else return fibonacci(position - 1) + fibonacci(position - 2);
//
// }
//
// console.log(fibonacci(9) );

// O(2^n) time complexity


// ============================
// |||  Sum all primes  |||
// ============================
//
// function sumPrimes(num) {
//
//   function isPrime(number) {
//     for (var i = 2; i <= number ; i++) {
//       // If the number its divisible by any other number
//       if (number % i === 0 && number != i) {
//         return false
//       }
//     }
//     return true
//   }
//
//
//   if(num == 1){
//     return 0;
//   }
//
//   if(isPrime(num) === false){
//     return sumPrimes(num - 1)
//   }
//
// // If its prime use recusion
//   if(isPrime(num) === true){
//     // num 10 +
//     return num + sumPrimes(num - 1);
//   }
//
//
// }
//
// console.log(sumPrimes(10))

// function sumPrimes(num) {
//   // function to check if the number presented is prime
//   function isPrime(number){
//       for (i = 2; i <= number; i++){
//           if(number % i === 0 && number!= i){
//           // return true if it is divisible by any number that is not itself.
//              return false;
//           }
//        }
//        // if it passes the for loops conditions it is a prime
//       return true;
//   }
//   // 1 is not a prime, so return nothing, also stops the recursive calls.
//   if (num === 1){
//     return 0;
//   }
//   // Check if your number is not prime
//   if(isPrime(num) === false){
//   // for non primes check the next number down from your maximum number, do not add anything to your answer
//     return sumPrimes(num - 1);
//   }
//
//   // Check if your number is prime
//   if(isPrime(num) === true){
//   // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
//     return num + sumPrimes(num - 1);
//   }
// }
// console.log(sumPrimes(10))
//
//

// ============================
// ||| Wherefore art thou |||
// ============================

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   var srcKeys = Object.keys(source);
//
//   // filter the collection
//   return collection.filter(function (obj) {
//
//     return srcKeys.map( (key) => {
//       console.log(key);
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//
//     })
//     .reduce( (a, b) =>{
//       return a & b
//     })
//     // return srcKeys
//     //   .map(function(key) {
//     //     return obj.hasOwnProperty(key) && obj[key] === source[key];
//     //   })
//     //   .reduce(function(a, b) {
//     //     return a && b;
//     //   });
//   });
// }

//
// // test here
// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
//                { first: "Mercutio", last: null },
//                { first: "Tybalt", last: "Capulet" }],
//
//               { last: "Capulet" }))




// ============================
// ||| Roman Numeral Converter ||| Fiderence bewtteen two arrays
// ============================
// function convertToRoman(num) {
//
//   var roman =  {"M" :1000,
//                 "CM":900,
//                 "D":500,
//                 "CD":400,
//                 "C":100,
//                 "XC":90,
//                 "L":50,
//                 "XL":40,
//                 "X":10,
//                 "IX":9,
//                 "V":5,
//                 "IV":4,
//                 "I":1
//               };
//   var str = "";
//
//
// // console.log(Object.keys(roman));
//
//   for (var i of Object.keys(roman) ) {
//
//
//     var q = Math.floor(num / roman[i]);
//
//     num -= q * roman[i];
//     str += i.repeat(q);
//
//   }
//
//   return str;
// }
//
//
// // test here
// console.log(convertToRoman(36))
//

// ============================
// ||| Diff Two Arrays||| Fiderence bewtteen two arrays
// ============================

// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2)
//     .filter( (item)=> {
//       return !arr1.includes(item) || !arr2.includes(item);
//     })
// }
//
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
//

// ============================
// ||| Caesars Cipher||| Sum All Numbers in a Range
// ============================

// function sumAll(arr){
//
//   var sum = 0;
//   for (let i =  Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }
//
// console.log(sumAll([1,4]))

// ============================
// ||| Where do i belong ||| Sort and array
// ============================


// function getIndexToIns(arr, num) {
//
//   arr.push(num);
//   // Sort array asending
//   arr.sort( function(a, b) {
//     return a - b
//   })
//   return arr.indexOf(num);
//
// }
//
// console.log(getIndexToIns([40, 60], 50));


// ============================
// ||| Destroyer ||| Eliminate duplicates
// ============================

// function destroyer(arr) {
//   var args = Array.from(arguments).slice(1);
//
//   return arr.filter(function(val) {
//     return !args.includes(val);
//   });
// }
//
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
//

// **** Learn this method
 // Array.prototype.slice.call(arguments)

// function list() {
//
//   return Array.prototype.slice.call(arguments);
// }
//
// console.log( list(1, 2, 3));


// ============================
// ||| Falsy Bouncer  ||| Compare two arrays
// ============================

// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
//
// console.log(bouncer([7, "ate", "", false, 9]))

// ============================
// ||| Mutations  ||| Compare two arrays
// ============================

// function mutation(arr) {
//
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//     // console.log(test);
//
//   for (i = 0; i < test.length; i++) {
//
//     if (target.indexOf(test[i]) === -1)
//       return false;
//   }
//
//   return true;
//  }
//
// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "hey"]));

// ============================
// |||  Slasher Flick   ||| Take a part off the array
// ============================


// function slasher(arr, howMany) {
//
//   arr.splice(0 , howMany)
//
//   return arr ;
// }
//
// console.log(slasher([1, 2, 3], 2))


// ============================
// |||  Chunky Monkey    ||| Split and array in parts
// ============================

// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   let array = [];
//
//
//   for (var i = 0; i < arr.length; i+=size) {
//     console.log(i);
//     array.push( arr.slice(i, i + size));
//   }
//
//
//   return array
// }


// function chunkArrayInGroups(arr, size) {
//   var newArr = [];
//
//   while (arr.length) {
//     newArr.push(arr.splice(0,size));
//   }
//   return newArr;
// }


// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))





// ============================
// |||   Truncate a string    |||
// ============================

// function truncateString(str, num) {
//   if (str.length > num)
//     return str.slice(0, num > 3 ? num-3 : num) + '...';
//   return str;
// }
//
// console.log(truncateString("Absolutely Longer", 2))

// ============================
// |||   Repeat a string repeat a string   |||
// ============================


// function repeatStringNumTimes(str, num) {
//  if(num>0){
//     return str.repeat(num);
//   }
//   return "";
// }
// console.log(repeatStringNumTimes("abc", 3))
//


// ============================
// |||   Confirm Ending    |||
// ============================

// function confirmEnding(str, target) {
//
//   return str.substr(-target.length) === target;
// }
//
// console.log(confirmEnding("Bastian", "n"))


// ============================
// |||   Reduce lesson    |||
// ============================

// var orders = [
//   { amount: 250 },
//   { amount: 450 },
//   { amount: 550 },
//   { amount: 50 },
//   { amount: 750 }
// ]
//
// let totalAmount = orders.reduce( (accumulator, iterator) => {
//     // console.log(accumulator);
//     // console.log(iterator);
//     return accumulator + iterator.amount;
//
// }, 0);

// let total = 0;
// for (var i = 0; i < orders.length; i++) {
//   total += orders[i].amount;
// }
// console.log(totalAmount);

// ============================
// |||   Return Largest Numbers in Arrays    |||
// ============================



// function largestOfFour(arr) {
//   // You can do this!
//   return arr.map( (element) =>  {
//     return element.reduce( (acc, lead) => {
//         return (acc > lead )? acc : lead;
//     });
//
//   });
// }
//
// console.log(largestOfFour([[5, 4, 1, 1], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 3000]]));
// //


// ============================
// |||   Title Case a Sentence    |||
// ============================



// function titleCase(str) {
//
//   let x = str.toLowerCase().split(' ');
//
//   let result =  x.map( (val) => {
//     return val.replace( val.charAt(0) , val.charAt(0).toUpperCase() );
//   });
//
//   return result.join(' ');
// }
//
// console.log(titleCase("I'm a little tea pot"))




// function titleCase(str) {
//
//   let x = str.toLowerCase().split(' ');
//
//   let result =  x.map( (val) => {
//     return val.replace( val.charAt(0) , val.charAt(0).toUpperCase() );
//   });
//   return result.join(' ');
// }
//
// console.log(titleCase("I'm a little tea pot"))




// ============================
// ||| Find the Longest Word in a String   |||
// ============================

// function findLongestWord(s) {
//   return s.split(' ')
//     .reduce( (x, y) => {
//       return Math.max(x, y.length);
//     }, 0);
// }


// function findLongestWord(str) {
//
//   let x = str.split(' ');
//   let number = 0;
//   x.forEach( (element) => {
//     if(element.length > number){
//       number = element.length;
//     }
//   });
//
//   return number
// }
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// ============================
// ||| Palindrome  |||
// ============================
// any non character
// Regex .replace(/[\W_]/g , '');


// function palindrome(str) {
//
//   let e = str.replace(/[\W_]/g, '').toLowerCase();
//   let x = str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
//
//   if ( x === e ){
//     return true;
//   } else{
//     return false
//   }
// }
//
//
// console.log(palindrome("My age is 0, 0 si ega ym."))

// console.log(palindrome("eye"))
// palindrome("not a palindrome")




// ============================
// ||| Factorial Numbers  |||
// ============================
// Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n. For example factorial of 6 is
// 6*5*4*3*2*1 which is 720.

//--> While loop

// function factorialize(num) {
//   let result = num;
//   if(num === 0 || num === 1){
//     return 1
//   }
//   while( num > 1){
//     num--;
//      result *= num
//   }
//   return result;
// }



// -> Recursion
// function factorialize(num) {
//   if (num < 0)
//         return -1;
//   else if (num == 0)
//       return 0;
//   else {
//     return num *= factorialize(num - 1)
//   }
// }


// console.log(factorialize(5))






// ============================
// ||| Reverse a String  |||
// ============================

// function reverseString(str) {
//    str  = str.split('')
//              .reverse()
//              .join('');
//
//   return str;
// }
//
// reverseString("hello");

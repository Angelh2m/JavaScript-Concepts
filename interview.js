
// SQURE and ARRAY

// let x = [1,2,3,'e',5];
//
// let result = [];
//
// function multiply(arr) {
//
//   let newArr = arr.filter( number => {
//     return number >= 0;
//   })
//
//   for (var i = 0; i < newArr.length; i++) {
//       result.push(newArr[i] * newArr[i] * newArr[i]);
//   }
//
//   return result
//
// }
//
//
// console.log(multiply(x));
// // console.log(result);




// function bar() {
//
//
// 	// return foo;
// 	// foo = 10;
// 	// function foo() {
// 	// 	var foo = '11';
// 	// }
// }
//
// console.log( bar() );


function aa() {
	return
	{
		test: 1
	};
}

alert( typeof aa() );




//

// let array = [1,2,3];
// let array2 = [ 1, 'a', 3];
// let newArray = [];
// //1, 3
//
//
//
// // function bouncer(arr) {
// //   // Don't show a false ID to this bouncer.
// //   return arr.filter( element => {
// //  		if(element !== Boolean){
// // 			return element
// // 		}
// // 	});
// // }
// //
// // console.log( bouncer([7, "ate", "", false, 9]) )
//
//
//
// function cube(arr){
//
//
//
// //// ++++++++++++++++++++++++++++++++++++++++++
// 	// return arr.reduce(  (result, element) =>{
//   //
//   //     if( element % 2 !== 0){
//   //
// 	// 			//			 1       3         3          3  = (9)
//   //     	return result + element + element + element
//   //
//   //     } else{
//   //     	return result
//   //     }
//   // }, 0);
//
// // RESPONSE //////////////////////////////////////////
//
// 	return arr.map( element => {
// 	  if( element % 2 !== 0){
// 					return 	element * element * element;
// 	   }
// 	 }).filter( element => {
// 		 return typeof element === 'number';
// 	 });
//
//
// }
//
// console.log( cube(array) );

// =================================
// |||      Call / Bind / Apply  |||
// =================================

// --------------------------------------------------------------------------

//***
//* BIND ALLOWES YOU TO USE A DIFERENT THIS OBJECT CONTEXT
//***

// CREATE A NORMAL OBJECT AS A METHOD
var john = {
  name: "John",
  age: 26,
  check: function(param) {
    return ` Hey! ${this.name} this is my ${param}`;
  },
  presentation: function(style, timeOfDay) {
    if (style == "formal") {
      let response = `
                Formal, It's ${timeOfDay}
                Hello ${this.name} ,
                Your age is ${this.age} ..
                `;
      console.log(response);
    } else if (style == "friendly") {
      let response = `
                Friendly, It's ${timeOfDay}
                Hello ${this.name} ,
                Your age is ${this.age} ..
                `;
      // console.log(response);
      return response;
    }
  }
};

var emily = {
  name: "emily",
  age: 35,
  job: "designer"
};

//// BIND ANOTHER OBJECT
let emilyFriendly = john.presentation.bind(emily, "friendly");
// console.log(emilyFriendly("SecondParam"));

let johnFriendly = john.presentation.bind(john, "friendly");
// console.log(johnFriendly("Hey"));
// console.log(johnFriendly("ME! Currying"));

// ============================
// |||  BIND  1 |||
// ============================

var hero = {
  _name: "John Doe",
  getSecretIdentity: function() {
    return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// ============================
// |||  BIND  2 |||
// ============================

var myObject = {
  firstname: "Albert",
  lastname: "Doe ",
  getFoods: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

var nameFun = function(snack, hobby) {
  console.log(this.getFoods() + "The winner!");
  console.log(this.getFoods() + " loves " + snack + " and " + hobby);
};

var name = nameFun.bind(myObject, "Yes"); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

name("here curryng");

// ===========================================================================
// ===========================================================================
// ===========================================================================

// **
// CALL BORROWS ANY METHODS FROM OTHER OBJECTS
// **

const callingJohn = john.check.call(emily, "Calling from john");
const johnNoParam = john.check("Hey");

// console.log(callingJohn);
// console.log(johnNoParam);

// console.log(john.presentation.call(emily, "friendly", "afternoon"));
// console.log(john.presentation("formal", "morning"));

// ============================
// |||   CALL 2  |||
// ============================

var person1 = {
  firstName: "Jon",
  lastName: "Kuperman"
};

var person2 = {
  firstName: "Kelly",
  lastName: "King"
};

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.call(person1, "Hello"); // Hello Jon Kuperman
say.call(person2, "Hello"); // Hello Kelly King

// ===========================================================================
// ===========================================================================
// ===========================================================================

// ============================
// |||  APPLY  1  |||
// ============================

var person1 = { firstName: "Jon", lastName: "Kuperman" };
var person2 = { firstName: "Kelly", lastName: "King" };

function say(greeting) {
  console.log(greeting + " " + this.firstName + " " + this.lastName);
}

say.apply(person1, ["Hello"]); // Hello Jon Kuperman
say.apply(person2, ["Hello"]); // Hello Kelly King

//***
//* APPLY TALES A METHOD + ARRAY;
//***

let obj = {
  num: 2
};

let addToThis = function(a, b, c) {
  return this.num + a + b + c;
};

let myArray = [1, 2, 3];

let result = addToThis.apply(obj, myArray);

// console.log(result);

// ===========================================================================
// ===========================================================================
// ===========================================================================

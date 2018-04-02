// ============================
// |||  CALLING TWO FUCTIONS    |||
// ============================

function add(x) {
  return function(y) {
    return x + y;
  };
}

var addTwo = add(2);

addTwo(4) === 6; // true
add(3)(4) === 7; // true

const resultOne = add(3)(4) === 7;

console.log(resultOne);

// ============================
// |||  CLASS INHERITANCE   |||
// ============================

class Name {
  name() {
    return "Hello John";
  }
}

class Person extends Name {
  firstName() {
    return super.name();
  }
}

const name = new Name();
const person = new Person();

console.log(name.name());
console.log(person.firstName());

// ============================
// |||   |||
// ============================

console.log("John");

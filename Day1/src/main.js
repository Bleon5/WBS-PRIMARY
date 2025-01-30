console.log("Hello, world!");

// Data types
// Primitive data types

// String
("I'm Bleon");
// Numbers
10;
// Boolean
false;
true;
// Bigint
909205203523n;
// Undefined
// Null
// Symbol

// Declaring a variable
const firstName = "Bleon";
console.log(firstName);
let age;
console.log(age);
age = 16;
console.log(age);
var profession = "Programmer";
console.log(profession);

// Block Scope
// Conditionals
// falsy -> false, 0, ''. null, undefined, NaN
// && -> and , || or , ! not

// if/else Condition
if (age) {
  console.log("Age is truthy");
}

if (!age) {
  console.log("Age is falsy");
}

if (age < 18) {
  console.log("You're a minor");
} else if (age > 18 && age < 65) {
  console.log("You're an adult");
} else {
  console.log("You're an elder");
}

if (age < 17 || age === 17) {
  console.log("You're a minor");
}

// switch Conditional
const day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "It's Monday";
    break;
  case "Tuesday":
    message = "It's Tuesday";
    break;
  case "Wednesday":
    message = "It's Wednesday";
    break;
  case "Thursday":
    message = "It's Thursday";
    break;
  case "Friday":
    message = "It's Friday";
    break;
  default:
    message = "It's the Weekend";
}

console.log(message);

// LOOPS
// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

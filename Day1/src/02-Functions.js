// ES5 => function greet() {}
function greet(greeting) {
  console.log(`${greeting} World`);
}

// Calling a function
greet("Hi");
greet("Hello");

// ES6 => const greetings = () => {};
const greetings = () => {
  console.log("Hello Class");
};

greetings();
greetings();
greetings();

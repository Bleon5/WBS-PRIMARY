const students = [
  { name: "Anna", age: 12 },
  { name: "Peter", age: 15 },
  { name: "Emma", age: 10 },
];

const strArray = ["Anna", "Peter", "Emma"];

const greeting = (greeting) => {
  return `${greeting} John`;
};

// console.log(greeting("Good Morning"));

const goodMorning = () => {
  return greeting("Good Morning");
};

console.log(goodMorning());

strArray.forEach((item) => {
  console.log(item);
});

// map
students.map((student) => {
  console.log(`Hello ${student.name}`);
});

//filter

students
  .filter((student) => {
    return student.age > 12;
  })
  .map((student) => {
    console.log(`Hello ${student.name}`);
  });

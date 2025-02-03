const children = [
  { name: "Anna", age: 12 },
  { name: "Peter", age: 15 },
  { name: "Emma", age: 10 },
];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  eyeColor: "blue",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  address: {
    street: "14 View st Apt 2",
    city: "Worcester",
    state: "Massachusets",
    zip: "01610",
  },
  children: children,
};

console.log(children);
console.log(children[1].age);
console.log(person.firstName);
console.log(person.children[0].name);

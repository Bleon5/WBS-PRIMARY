console.log(process.argv);

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.error("Please provide exatly two numbers");
  return;
}

const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.error("Bot arhuments must be numbers");
  return;
}

const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
return;

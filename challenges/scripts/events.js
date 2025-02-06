const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const itemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");

const myFunc = function () {
  const randomText = Math.floor(Math.random() * tasks.length);

  const randomTask = tasks[randomText];

  const newitem = document.createElement("li");
  newitem.textContent = randomTask;

  itemList.appendChild(newitem);
  itemList.scrollTop = itemList.scrollHeight;
};

itemBtn.addEventListener("click", myFunc);

const secItemBtn = document.getElementById("alert-btn");

secItemBtn.addEventListener("click", () => {
  alert("Get your list now !!!");
});

const thirdItemBtn = document.getElementById("console-btn");

thirdItemBtn.addEventListener("click", () => {
  console.log("button was clicked");
});

const formEl = document.getElementById("contact-form");
const formBtn = document.querySelector("button");
const formOutput = document.getElementById("output");

const formFunc = function (event) {
  event.preventDefault();
  const nameInp = document.getElementById("name").value;
  const emailInp = document.getElementById("email").value;
  const messageTxt = document.getElementById("message").value;

  formOutput.textContent = "";
  formOutput.classList.remove("error", "success");
  if (
    nameInp.trim() === "" ||
    emailInp.trim() === "" ||
    messageTxt.trim() === ""
  ) {
    formOutput.textContent = "All fields are required!";
    formOutput.classList.add("error");
  } else if (nameInp.length < 5) {
    formOutput.textContent = "Name must be at least 5 characters long!";
    formOutput.classList.add("error");
  } else if (!emailInp.includes("@")) {
    formOutput.textContent = "Please enter a valid email address!";
    formOutput.classList.add("error");
  } else if (messageTxt.length < 10) {
    formOutput.textContent = "Message must be at least 10 characters long!";
    formOutput.classList.add("error");
  } else {
    console.log("Form Data:");
    console.log("Name:", nameInp);
    console.log("Email:", emailInp);
    console.log("Message:", messageTxt);

    const ul = document.createElement("ul");
    const liName = document.createElement("li");
    liName.textContent = `Name: ${nameInp}`;
    const liEmail = document.createElement("li");
    liEmail.textContent = `Email: ${emailInp}`;
    const liMessage = document.createElement("li");
    liMessage.textContent = `Message: ${messageTxt}`;

    ul.appendChild(liName);
    ul.appendChild(liEmail);
    ul.appendChild(liMessage);

    formOutput.appendChild(ul);
    formOutput.classList.add("success");
    formOutput.textContent = "Form submitted successfully!";

    formEl.reset();
  }
};
formEl.addEventListener("submit", formFunc);

const style = document.createElement("style");
style.innerHTML = `
  .error {
    color: red;
    font-weight: bold;
    background-color: #fdd;
    padding: 10px;
    border: 1px solid red;
  }

  .success {
    color: green;
    font-weight: bold;
    background-color: #dfd;
    padding: 10px;
    border: 1px solid green;
  }
`;
document.head.appendChild(style);

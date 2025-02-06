// You can work here or download the template

//Header Section
const newHeader = document.createElement("header");
const headerNav = document.createElement("nav");
const navUl = document.createElement("ul");
navUl.classList.add("nav-list");
const navLogo = document.createElement("a");
navLogo.classList.add("logo");
navLogo.textContent = "Coffee Shop";
const linkTexts = ["Home", "About", "Menu", "Contact"];
for (let i = 0; i < linkTexts.length; i++) {
  const navLi = document.createElement("li");
  navLi.classList.add("nav-item");
  const navA = document.createElement("a");
  navA.href = "#";
  navA.textContent = linkTexts[i];
  navUl.appendChild(navLi);
  navLi.appendChild(navA);

  navLi.style.cssText = `
    margin-left: 1.5rem
  `;
  navA.style.cssText = `
    text-decoration: none;
    color: #333;
    font-weight: bold;
  `;
}

document.body.appendChild(newHeader);
newHeader.appendChild(headerNav);
headerNav.appendChild(navLogo);
headerNav.appendChild(navUl);

// Header Styles
newHeader.style.cssText = `background-color: #fff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 1rem o;
`;

headerNav.style.cssText = `display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;
padding: 0 1rem;
margin-top:3rem;
`;

navLogo.style.cssText = `font-size: 1.5rem;
font-weight: bold;
text-decoration: none;
`;

navUl.style.cssText = `display: flex; list-style: none;`;

// Hero Section
const newSection = document.createElement("section");
newSection.classList.add("hero");
const heroDiv = document.createElement("div");
heroDiv.classList.add("hero-content");
const heroHeader = document.createElement("h1");
heroHeader.textContent = "Welcome to Our Coffe Shop";
const heroP = document.createElement("p");
heroP.textContent = "Enjoy the best coffee in town";
const heroBtn = document.createElement("button");
heroBtn.textContent = "Explore our Menu";
document.body.appendChild(newSection);
newSection.appendChild(heroDiv);
heroDiv.appendChild(heroHeader);
heroDiv.appendChild(heroP);
heroDiv.appendChild(heroBtn);

// Hero Styles
newSection.style.cssText = `
height: 560px;
background: url(https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1) no-repeat center center/cover;
color: #fff;
`;

heroDiv.style.cssText = `
max-width: 600px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
text-align: center;
margin: 0 auto;
`;
heroHeader.style.cssText = `
font-size: 2.5rem;
margin-bottom: 1rem;
`;
heroP.style.cssText = `
font-size: 1.2rem;
margin-bottom: 2rem;
`;
heroBtn.style.cssText = `
background-color: #333;
color: #fff;
padding: 0.75rem 1.5rem;
text-decoration: none;
border-radius: 5px;
transition: background-color 0.3s ease;
`;

heroBtn.addEventListener("mouseover", () => {
  heroBtn.style.backgroundColor = "#555"; //
});

heroBtn.addEventListener("mouseout", () => {
  heroBtn.style.backgroundColor = "#333"; // Revert to the original background color
});

//Footer Section
const newFooter = document.createElement("footer");
newFooter.classList.add("footer");
const footerP = document.createElement("p");
footerP.textContent = "© 2024 Coffee Shop. All rights reserved.";
document.body.appendChild(newFooter);
newFooter.appendChild(footerP);

// Footer Styles

newFooter.style.cssText = `
background-color: #333;
color: #fff;
text-align: center;
padding: 1rem 0;
margin-top: auto;
`;

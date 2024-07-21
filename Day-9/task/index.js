//  Day 9

// Activity 1
//Task 1: Select an HTML element by its ID and change its text content.
let demo = document.getElementById("demo");
demo.innerHTML = "Meow Meow Nigga";

//Task 2: Select an HTML element by its class and change its background color.
let demo2 = document.getElementsByClassName("demo2");
demo2.style.backgroundColor = "red";

// Activity 2
//Task 3: Create a new div element with some text content and append it to the body.
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is Gautam Gambhir";
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerHTML = "Resume";
ul.appendChild(li);

// Activity 3
// Task 5: Select an HTML element and remove it from the DOM.
let remove = document.querySelector(".remove");
remove.remove();

// Task 6: Remove the last child of a specific HIML element.
let ul2 = document.querySelector("ul");
ul2.removeChild(ul2.lastChild);

// Activity 4
//Task 7: Select an HTML element and change one of its attributes (e.g., sre of an img tag).
let img = document.querySelector("img");
img.src =
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

//Task 8: Add and remove a CSS class to/from an HTML element.
let addClass = document.querySelector("p");
addClass.classList.add("newClass");

// Activity 5:
//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let button = document.querySelector("button");
button.addEventListener("click", function () {
  let p = document.querySelector("p");
  p.innerHTML = "This is Gautam Gambhir";
});

//Task 10: Add a mouseover event listener to an element that changes its border color.
let mouseover = document.querySelector("p");
mouseover.addEventListener("mouseover", function () {
  let p = document.querySelector("p");
  p.style.borderColor = "red";
});
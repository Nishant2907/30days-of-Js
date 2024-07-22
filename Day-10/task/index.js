//  Day 10: Event Handling

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.getElementById("btn");
button.addEventListener("click", function() {
    const para = document.getElementById("nigga");
    para.textContent = "Hello Nigga";
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.getElementById("img");
const hide = document.getElementById("hide");
const unhide = document.getElementById("unhide");

hide.addEventListener("dblclick", function() { //dblclick - double click to make a onClick
    img.style.visibility = "hidden";
});

unhide.addEventListener("dblclick", function() {
    img.style.visibility = "visible";
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const mouseOver = document.getElementById("mouseover");

mouseOver.addEventListener("mouseover", function() {
    mouseOver.style.backgroundColor = "red";
});
// Task 4: Add a mouseout event listener to an element that resets its background color.
mouseOver.addEventListener("mouseout", function() {
    mouseOver.style.backgroundColor = "aqua";
});
// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const keydowninput = document.getElementById("input-keydown");
keydowninput.addEventListener("keydown", function() {
    console.log(keydowninput.value);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const keyupinput = document.getElementById("input-keyup");
const displayParagraph = document.getElementById("paragraph");

keyupinput.addEventListener("keyup", function() {
    displayParagraph.textContent = keyupinput.value;
    console.log(keyupinput.value);
});


// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Convert the form data to an object
    const data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });

    // Log the form data
    console.log(data);
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.getElementById("select");
const displaySelect = document.getElementById("display-select");

select.addEventListener("change", function() {
    displaySelect.textContent = select.value;
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
listContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElement = document.getElementById('parentElement');

// Event listener on the parent element
parentElement.addEventListener('click', function(event) {
    if(event.target.tagName === 'BUTTON') {
        // Handle the event from the dynamically added child button
        alert('Button clicked!');
    }
});

// Function to add a new child element
document.getElementById('btnAdd').addEventListener('click', function() {
    const newButton = document.createElement('button');
    newButton.textContent = 'Dynamically Added Button';
    parentElement.appendChild(newButton);
});
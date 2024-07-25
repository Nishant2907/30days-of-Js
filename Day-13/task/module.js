// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export const add = (a, b) => a + b;

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: 'John',
    age: 30,
    greet() {
        return 'Hello';
    }
}
export {person}

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
export const  multiple = (a, b) => a * b; 
export const  subtract = (a, b) => a - b; 

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const divide = (a, b) => a / b;
export default divide ;

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
export const name = "Nishant"
export const age = 22

export const deets = (job) => {
    return `${name} is ${age} years old and is a ${job}`;
}

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
// Example: import _ from 'lodash'; const arr = [1, 2, 3]; console.log(_.reverse(arr));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// Example: import axios from 'axios'; axios.get('https://api.example.com').then(response => console.log(response.data));

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
// Example: Use Webpack to bundle src/index.js and src/utils.js into dist/bundle.js
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
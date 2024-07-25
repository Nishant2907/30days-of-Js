// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
export function add(a, b) {
    return a + b;
}

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello');
    }
}
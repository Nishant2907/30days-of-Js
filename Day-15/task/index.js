// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = 'I am from outer scope';
    function innerFunction() {
        return outerVariable;
    }
    return innerFunction;
}
const inner = outerFunction();
const result = inner();
console.log(result);

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let counter = 0;
    return {
        increment: function() {
            counter++;
        },
        getValue: function() {
            return counter;
        }
    };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Logs: 1

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
// Example:
// function createIDGenerator() {
//     let lastID = 0;
//     return function() {
//         lastID++;
//         return lastID;
//     };
// }
// const generateID = createIDGenerator();
// console.log(generateID()); // Logs: 1
// console.log(generateID()); // Logs: 2

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
// Example:
// function createGreeter(name) {
//     return function() {
//         console.log(`Hello, ${name}!`);
//     };
// }
// const greetJohn = createGreeter('John');
// greetJohn(); // Logs: 'Hello, John!'

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// Example:
// function createFunctionArray() {
//     let functions = [];
//     for (let i = 0; i < 5; i++) {
//         functions.push((function(index) {
//             return function() {
//                 console.log(index);
//             };
//         })(i));
//     }
//     return functions;
// }
// const functionArray = createFunctionArray();
// functionArray[0](); // Logs: 0
// functionArray[1](); // Logs: 1

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// Example:
// const itemManager = (function() {
//     let items = [];
//     return {
//         addItem: function(item) {
//             items.push(item);
//         },
//         removeItem: function(item) {
//             items = items.filter(i => i !== item);
//         },
//         listItems: function() {
//             return items;
//         }
//     };
// })();
// itemManager.addItem('item1');
// itemManager.addItem('item2');
// console.log(itemManager.listItems()); // Logs: ['item1', 'item2']
// itemManager.removeItem('item1');
// console.log(itemManager.listItems()); // Logs: ['item2']

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// Example:
// function memoize(fn) {
//     let cache = {};
//     return function(...args) {
//         let key = JSON.stringify(args);
//         if (cache[key]) {
//             return cache[key];
//         } else {
//             let result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     };
// }
// const memoizedAdd = memoize((a, b) => a + b);
// console.log(memoizedAdd(1, 2)); // Logs: 3
// console.log(memoizedAdd(1, 2)); // Logs: 3 (from cache)

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
// Example:
// const memoizedFactorial = memoize(function factorial(n) {
//     if (n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// });
// console.log(memoizedFactorial(5)); // Logs: 120
// console.log(memoizedFactorial(5)); // Logs: 120 (from cache)
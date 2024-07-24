//  Day 12

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("This is an error");
}

try{
    throwError();
} catch (error) {
    console.log("Error:",error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
  if (b === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return a / b;
}

try {
    divide(5,0);
} catch (error) {
    console.log("Error:",error.message);
}


// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("In the try block");
    throw new Error("Error in try block");
} catch (error) {
    console.error("Caught an error:", error.message);
} finally {
    console.log("In the finally block");
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        // super(message);
        this.message = message;
        // this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    console.error("Caught a custom error:", error);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
    if (!input) {
        throw new CustomError("Input cannot be empty");
    }
    return true;
}

try {
    validateInput("");
} catch (error) {
    console.error("Caught a validation error:", error.message);
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        // const success = Math.random() > 0.5;
        const success = false
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 2000);
});

randomPromise
    .then((message) => console.log(message))
    .catch((error) => console.log("Caught an error:", error));


// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const message = await randomPromise;
        console.log("Passed:",message);
    } catch (error) {
        console.error("Caught an error:", error);
    }
}
 
handleRandomPromise();
// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalid.url")
    .then((response) => response.json())
    .catch((error) => console.error("Fetch error:", error));

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto")

async function fetchData(){
    try{
        const data = await response
        console.log(data)
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
fetchData()